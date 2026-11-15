#!/usr/bin/env python3
"""製作一集教學影片：
1. 每段旁白用 edge-tts（zh-TW-HsiaoChenNeural，-30% 語速）產生語音與分句字幕
2. 用 Playwright 開 3D 地圖、依段落執行動作並錄影（record.js）
3. ffmpeg 合成：影片＋旁白＋燒入字幕（1920x1080，字級 44px）
用法：python3 make_episode.py episodes/ep01.json out_dir
"""
import json, os, subprocess, sys, re
ep = json.load(open(sys.argv[1])); out = sys.argv[2]; os.makedirs(out, exist_ok=True)
VOICE, RATE, PAD = 'zh-TW-HsiaoChenNeural', '-30%', 0.9
env = dict(os.environ, SSL_CERT_FILE='/root/.ccr/ca-bundle.crt')
def dur(f): return float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',f]).decode())
def srt_cues(f):
    cues=[]
    for blk in open(f,encoding='utf-8').read().strip().split('\n\n'):
        ls=blk.strip().split('\n')
        if len(ls)<3: continue
        a,b=ls[1].split(' --> ')
        t=lambda x: (lambda h,m,s: int(h)*3600+int(m)*60+float(s.replace(',','.')))(*x.split(':'))
        cues.append((t(a),t(b),' '.join(ls[2:])))
    return cues
segs=[]
for i,s in enumerate(ep['segments']):
    mp3=f'{out}/s{i:02d}.mp3'; srt=f'{out}/s{i:02d}.srt'
    if not os.path.exists(mp3) or os.path.getsize(mp3)==0:
        subprocess.run(['edge-tts','--proxy',os.environ['HTTPS_PROXY'],'--voice',VOICE,f'--rate={RATE}','--text',s['say'],'--write-media',mp3,'--write-subtitles',srt],check=True,env=env,capture_output=True)
    segs.append({'dur':dur(mp3)+PAD,'act':s.get('act',[]),'mp3':mp3,'cues':srt_cues(srt)})
json.dump([{'dur':s['dur'],'act':s['act']} for s in segs],open(f'{out}/plan.json','w'),ensure_ascii=False)
here=os.path.dirname(os.path.abspath(__file__))
subprocess.run(['node',f'{here}/record.js',f'{out}/plan.json',out],check=True)
rec=json.load(open(f'{out}/rec.json'))   # {video, start}
# 字幕（ASS）：把長句再切成每行最多 18 字
def wrap(t,n=18):
    parts=re.split(r'(?<=[，。！？；：、])',t); lines=[]; cur=''
    for p in parts:
        if len(cur)+len(p)>n and cur: lines.append(cur); cur=p
        else: cur+=p
    if cur: lines.append(cur)
    return lines
def ts(x): h=int(x//3600); m=int(x%3600//60); s=x%60; return f'{h}:{m:02d}:{s:05.2f}'
ass=['[Script Info]','ScriptType: v4.00+','PlayResX: 1920','PlayResY: 1080','',
'[V4+ Styles]','Format: Name, Fontname, Fontsize, PrimaryColour, OutlineColour, BackColour, Bold, BorderStyle, Outline, Shadow, Alignment, MarginV',
'Style: Sub,WenQuanYi Zen Hei,52,&H00FFFFFF,&H00000000,&H99000000,1,3,2,0,2,40','',
'[Events]','Format: Layer, Start, End, Style, Text']
audio=[]
for si,s in enumerate(segs):
    t=rec['marks'][si]-rec['start']   # 這一段在影片中真正開始的時間
    for a,b,txt in s['cues']:
        ls=wrap(txt); n=len(ls)
        for k,l in enumerate(ls):
            sa=t+a+(b-a)*k/n; sb=t+a+(b-a)*(k+1)/n
            ass.append(f'Dialogue: 0,{ts(sa)},{ts(sb)},Sub,{l}')
    audio.append((t,s['mp3']))
total=rec['end']-rec['start']
open(f'{out}/subs.ass','w',encoding='utf-8').write('\n'.join(ass)+'\n')
inputs=['-framerate',str(rec['fps']),'-i',rec['frames']+'/%05d.jpg']
for _,m in audio: inputs+=['-i',m]
flt=''.join(f'[{i+1}:a]adelay={int(st*1000)}|{int(st*1000)}[a{i}];' for i,(st,_) in enumerate(audio))
flt+=''.join(f'[a{i}]' for i in range(len(audio)))+f'amix=inputs={len(audio)}:normalize=0[aout];'
flt+=f"[0:v]scale=1920:1080:flags=lanczos,fps=30,ass={out}/subs.ass[vout]"
final=f"{out}/{ep['file']}"
subprocess.run(['ffmpeg','-y','-loglevel','error',*inputs,'-filter_complex',flt,'-map','[vout]','-map','[aout]','-t',str(total),
  '-c:v','libx264','-preset','medium','-crf','22','-pix_fmt','yuv420p','-c:a','aac','-b:a','128k','-movflags','+faststart',final],check=True)
print('done',final,round(total,1),'s')
