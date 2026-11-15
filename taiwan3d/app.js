(()=>{var Ac="170",Bi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Rn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jd=0,dh=1,Kd=2;var Ru=1,Qd=2,Wn=3,pi=0,Xe=1,We=2,di=0,hs=1,fh=2,ph=3,mh=4,tf=5,Ai=100,ef=101,nf=102,sf=103,rf=104,af=200,of=201,lf=202,cf=203,sl=204,rl=205,hf=206,uf=207,df=208,ff=209,pf=210,mf=211,gf=212,_f=213,xf=214,al=0,ol=1,ll=2,ps=3,cl=4,hl=5,ul=6,dl=7,Wa=0,yf=1,vf=2,fi=0,Mf=1,bf=2,Sf=3,wf=4,Ef=5,Tf=6,Af=7;var Pu=300,ms=301,gs=302,fl=303,pl=304,Xa=306,ml=1e3,Pi=1001,gl=1002,Je=1003,Cf=1004;var wr=1005;var En=1006,wo=1007;var Ii=1008;var qn=1009,Iu=1010,Lu=1011,js=1012,Cc=1013,Li=1014,Tn=1015,or=1016,Rc=1017,Pc=1018,_s=1020,Du=35902,Uu=1021,Nu=1022,gn=1023,Fu=1024,Ou=1025,us=1026,xs=1027,Ic=1028,Lc=1029,ku=1030,Dc=1031;var Uc=1033,Qr=33776,ta=33777,ea=33778,na=33779,_l=35840,xl=35841,yl=35842,vl=35843,Ml=36196,bl=37492,Sl=37496,wl=37808,El=37809,Tl=37810,Al=37811,Cl=37812,Rl=37813,Pl=37814,Il=37815,Ll=37816,Dl=37817,Ul=37818,Nl=37819,Fl=37820,Ol=37821,ia=36492,kl=36494,Bl=36495,Bu=36283,zl=36284,Hl=36285,Vl=36286;var sa=2300,Gl=2301,Eo=2302,gh=2400,_h=2401,xh=2402;var Rf=3200,Pf=3201;var Nc=0,If=1,ui="",sn="srgb",Ss="srgb-linear",$a="linear",ae="srgb";var $i=7680;var yh=519,Lf=512,Df=513,Uf=514,zu=515,Nf=516,Ff=517,Of=518,kf=519,vh=35044;var Mh="300 es",Xn=2e3,ra=2001,Yn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bh=1234567,Gs=Math.PI/180,Zs=180/Math.PI;function zi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]).toLowerCase()}function Pe(n,t,e){return Math.max(t,Math.min(e,n))}function Fc(n,t){return(n%t+t)%t}function Bf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function zf(n,t,e){return n!==t?(e-n)/(t-n):0}function Ws(n,t,e){return(1-e)*n+e*t}function Hf(n,t,e,i){return Ws(n,t,1-Math.exp(-e*i))}function Vf(n,t=1){return t-Math.abs(Fc(n,t*2)-t)}function Gf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Wf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Xf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function $f(n,t){return n+Math.random()*(t-n)}function qf(n){return n*(.5-Math.random())}function Yf(n){n!==void 0&&(bh=n);let t=bh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jf(n){return n*Gs}function Zf(n){return n*Zs}function Jf(n){return(n&n-1)===0&&n!==0}function Kf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Qf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tp(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),d=r((t-i)/2),f=a((t-i)/2),p=r((i-t)/2),m=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*d,l*f,o*c);break;case"YZY":n.set(l*f,o*h,l*d,o*c);break;case"ZXZ":n.set(l*d,l*f,o*h,o*c);break;case"XZX":n.set(o*h,l*m,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*m,o*c);break;case"ZYZ":n.set(l*m,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function os(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Oe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var qa={DEG2RAD:Gs,RAD2DEG:Zs,generateUUID:zi,clamp:Pe,euclideanModulo:Fc,mapLinear:Bf,inverseLerp:zf,lerp:Ws,damp:Hf,pingpong:Vf,smoothstep:Gf,smootherstep:Wf,randInt:Xf,randFloat:$f,randFloatSpread:qf,seededRandom:Yf,degToRad:jf,radToDeg:Zf,isPowerOfTwo:Jf,ceilPowerOfTwo:Kf,floorPowerOfTwo:Qf,setQuaternionFromProperEuler:tp,normalize:Oe,denormalize:os},ht=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ht=class n{constructor(t,e,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],m=i[8],_=s[0],g=s[3],u=s[6],w=s[1],S=s[4],x=s[7],D=s[2],A=s[5],T=s[8];return r[0]=a*_+o*w+l*D,r[3]=a*g+o*S+l*A,r[6]=a*u+o*x+l*T,r[1]=c*_+h*w+d*D,r[4]=c*g+h*S+d*A,r[7]=c*u+h*x+d*T,r[2]=f*_+p*w+m*D,r[5]=f*g+p*S+m*A,r[8]=f*u+p*x+m*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,f=o*l-h*r,p=c*r-a*l,m=e*d+i*f+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=d*_,t[1]=(s*c-h*i)*_,t[2]=(o*i-s*a)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(To.makeScale(t,e)),this}rotate(t){return this.premultiply(To.makeRotation(-t)),this}translate(t,e){return this.premultiply(To.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},To=new Ht;function Hu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function aa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ep(){let n=aa("canvas");return n.style.display="block",n}var Sh={};function Hs(n){n in Sh||(Sh[n]=!0,console.warn(n))}function np(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function ip(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function sp(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Jt={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(n.r=$n(n.r),n.g=$n(n.g),n.b=$n(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(n.r=ds(n.r),n.g=ds(n.g),n.b=ds(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ui?$a:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function $n(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ds(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var wh=[.64,.33,.3,.6,.15,.06],Eh=[.2126,.7152,.0722],Th=[.3127,.329],Ah=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ch=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Jt.define({[Ss]:{primaries:wh,whitePoint:Th,transfer:$a,toXYZ:Ah,fromXYZ:Ch,luminanceCoefficients:Eh,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:wh,whitePoint:Th,transfer:ae,toXYZ:Ah,fromXYZ:Ch,luminanceCoefficients:Eh,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}});var qi,Wl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qi===void 0&&(qi=aa("canvas")),qi.width=t.width,qi.height=t.height;let i=qi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=qi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=aa("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=$n(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor($n(e[i]/255)*255):e[i]=$n(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},rp=0,oa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=zi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ao(s[a].image)):r.push(Ao(s[a]))}else r=Ao(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Ao(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Wl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ap=0,Ke=class n extends Yn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Pi,s=Pi,r=En,a=Ii,o=gn,l=qn,c=n.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=zi(),this.name="",this.source=new oa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ml:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case gl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ml:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case gl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Pu;Ke.DEFAULT_ANISOTROPY=1;var _e=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],m=l[9],_=l[2],g=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,x=(p+1)/2,D=(u+1)/2,A=(h+f)/4,T=(d+_)/4,I=(m+g)/4;return S>x&&S>D?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=A/i,r=T/i):x>D?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=A/s,r=I/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=T/r,s=I/r),this.set(i,s,r,e),this}let w=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(g-m)/w,this.y=(d-_)/w,this.z=(f-h)/w,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xl=class extends Yn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Ke(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new oa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},jn=class extends Xl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},la=class extends Ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $l=class extends Ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _n=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=r[a+0],p=r[a+1],m=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=m,t[e+3]=_;return}if(d!==_||l!==f||c!==p||h!==m){let g=1-o,u=l*f+c*p+h*m+d*_,w=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){let D=Math.sqrt(S),A=Math.atan2(D,u*w);g=Math.sin(g*A)/D,o=Math.sin(o*A)/D}let x=o*w;if(l=l*g+f*x,c=c*g+p*x,h=h*g+m*x,d=d*g+_*x,g===1-o){let D=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=D,c*=D,h*=D,d*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],f=r[a+1],p=r[a+2],m=r[a+3];return t[e]=o*m+h*d+l*p-c*f,t[e+1]=l*m+h*f+c*d-o*p,t[e+2]=c*m+h*p+o*f-l*d,t[e+3]=h*m-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),f=l(i/2),p=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*p*m,this._y=c*p*d-f*h*m,this._z=c*h*m+f*p*d,this._w=c*h*d-f*p*m;break;case"YXZ":this._x=f*h*d+c*p*m,this._y=c*p*d-f*h*m,this._z=c*h*m-f*p*d,this._w=c*h*d+f*p*m;break;case"ZXY":this._x=f*h*d-c*p*m,this._y=c*p*d+f*h*m,this._z=c*h*m+f*p*d,this._w=c*h*d-f*p*m;break;case"ZYX":this._x=f*h*d-c*p*m,this._y=c*p*d+f*h*m,this._z=c*h*m-f*p*d,this._w=c*h*d+f*p*m;break;case"YZX":this._x=f*h*d+c*p*m,this._y=c*p*d+f*h*m,this._z=c*h*m-f*p*d,this._w=c*h*d-f*p*m;break;case"XZY":this._x=f*h*d-c*p*m,this._y=c*p*d-f*h*m,this._z=c*h*m+f*p*d,this._w=c*h*d+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=i+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Co.copy(this).projectOnVector(t),this.sub(Co)}reflect(t){return this.sub(Co.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Co=new C,Rh=new _n,Zn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Er.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Er.copy(i.boundingBox)),Er.applyMatrix4(t.matrixWorld),this.union(Er)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Us),Tr.subVectors(this.max,Us),Yi.subVectors(t.a,Us),ji.subVectors(t.b,Us),Zi.subVectors(t.c,Us),ri.subVectors(ji,Yi),ai.subVectors(Zi,ji),vi.subVectors(Yi,Zi);let e=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-vi.z,vi.y,ri.z,0,-ri.x,ai.z,0,-ai.x,vi.z,0,-vi.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-vi.y,vi.x,0];return!Ro(e,Yi,ji,Zi,Tr)||(e=[1,0,0,0,1,0,0,0,1],!Ro(e,Yi,ji,Zi,Tr))?!1:(Ar.crossVectors(ri,ai),e=[Ar.x,Ar.y,Ar.z],Ro(e,Yi,ji,Zi,Tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Bn=[new C,new C,new C,new C,new C,new C,new C,new C],dn=new C,Er=new Zn,Yi=new C,ji=new C,Zi=new C,ri=new C,ai=new C,vi=new C,Us=new C,Tr=new C,Ar=new C,Mi=new C;function Ro(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Mi.fromArray(n,r);let o=s.x*Math.abs(Mi.x)+s.y*Math.abs(Mi.y)+s.z*Math.abs(Mi.z),l=t.dot(Mi),c=e.dot(Mi),h=i.dot(Mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var op=new Zn,Ns=new C,Po=new C,mi=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):op.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ns.subVectors(t,this.center);let e=Ns.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ns,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Po.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ns.copy(t.center).add(Po)),this.expandByPoint(Ns.copy(t.center).sub(Po))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},zn=new C,Io=new C,Cr=new C,oi=new C,Lo=new C,Rr=new C,Do=new C,Di=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Io.copy(t).add(e).multiplyScalar(.5),Cr.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(Io);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Cr),o=oi.dot(this.direction),l=-oi.dot(Cr),c=oi.lengthSq(),h=Math.abs(1-a*a),d,f,p,m;if(h>0)if(d=a*l-o,f=a*o-l,m=r*h,d>=0)if(f>=-m)if(f<=m){let _=1/h;d*=_,f*=_,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Io).addScaledVector(Cr,f),p}intersectSphere(t,e){zn.subVectors(t.center,this.origin);let i=zn.dot(this.direction),s=zn.dot(zn)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,i,s,r){Lo.subVectors(e,t),Rr.subVectors(i,t),Do.crossVectors(Lo,Rr);let a=this.direction.dot(Do),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,t);let l=o*this.direction.dot(Rr.crossVectors(oi,Rr));if(l<0)return null;let c=o*this.direction.dot(Lo.cross(oi));if(c<0||l+c>a)return null;let h=-o*oi.dot(Do);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},se=class n{constructor(t,e,i,s,r,a,o,l,c,h,d,f,p,m,_,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,d,f,p,m,_,g)}set(t,e,i,s,r,a,o,l,c,h,d,f,p,m,_,g){let u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=m,u[11]=_,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),a=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=a*h,p=a*d,m=o*h,_=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+m*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=m+p*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,p=l*d,m=c*h,_=c*d;e[0]=f+_*o,e[4]=m*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-m,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,p=l*d,m=c*h,_=c*d;e[0]=f-_*o,e[4]=-a*d,e[8]=m+p*o,e[1]=p+m*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,p=a*d,m=o*h,_=o*d;e[0]=l*h,e[4]=m*c-p,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=p*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,p=a*c,m=o*l,_=o*c;e[0]=l*h,e[4]=_-f*d,e[8]=m*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*d+m,e[10]=f-_*d}else if(t.order==="XZY"){let f=a*l,p=a*c,m=o*l,_=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=a*h,e[9]=p*d-m,e[2]=m*d-p,e[6]=o*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lp,t,cp)}lookAt(t,e,i){let s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),li.crossVectors(i,je),li.lengthSq()===0&&(Math.abs(i.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),li.crossVectors(i,je)),li.normalize(),Pr.crossVectors(je,li),s[0]=li.x,s[4]=Pr.x,s[8]=je.x,s[1]=li.y,s[5]=Pr.y,s[9]=je.y,s[2]=li.z,s[6]=Pr.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],m=i[2],_=i[6],g=i[10],u=i[14],w=i[3],S=i[7],x=i[11],D=i[15],A=s[0],T=s[4],I=s[8],b=s[12],v=s[1],P=s[5],H=s[9],z=s[13],q=s[2],Q=s[6],X=s[10],nt=s[14],Y=s[3],pt=s[7],xt=s[11],Rt=s[15];return r[0]=a*A+o*v+l*q+c*Y,r[4]=a*T+o*P+l*Q+c*pt,r[8]=a*I+o*H+l*X+c*xt,r[12]=a*b+o*z+l*nt+c*Rt,r[1]=h*A+d*v+f*q+p*Y,r[5]=h*T+d*P+f*Q+p*pt,r[9]=h*I+d*H+f*X+p*xt,r[13]=h*b+d*z+f*nt+p*Rt,r[2]=m*A+_*v+g*q+u*Y,r[6]=m*T+_*P+g*Q+u*pt,r[10]=m*I+_*H+g*X+u*xt,r[14]=m*b+_*z+g*nt+u*Rt,r[3]=w*A+S*v+x*q+D*Y,r[7]=w*T+S*P+x*Q+D*pt,r[11]=w*I+S*H+x*X+D*xt,r[15]=w*b+S*z+x*nt+D*Rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],m=t[3],_=t[7],g=t[11],u=t[15];return m*(+r*l*d-s*c*d-r*o*f+i*c*f+s*o*p-i*l*p)+_*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+g*(+e*c*d-e*o*p-r*a*d+i*a*p+r*o*h-i*c*h)+u*(-s*o*h-e*l*d+e*o*f+s*a*d-i*a*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],m=t[12],_=t[13],g=t[14],u=t[15],w=d*g*c-_*f*c+_*l*p-o*g*p-d*l*u+o*f*u,S=m*f*c-h*g*c-m*l*p+a*g*p+h*l*u-a*f*u,x=h*_*c-m*d*c+m*o*p-a*_*p-h*o*u+a*d*u,D=m*d*l-h*_*l-m*o*f+a*_*f+h*o*g-a*d*g,A=e*w+i*S+s*x+r*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return t[0]=w*T,t[1]=(_*f*r-d*g*r-_*s*p+i*g*p+d*s*u-i*f*u)*T,t[2]=(o*g*r-_*l*r+_*s*c-i*g*c-o*s*u+i*l*u)*T,t[3]=(d*l*r-o*f*r-d*s*c+i*f*c+o*s*p-i*l*p)*T,t[4]=S*T,t[5]=(h*g*r-m*f*r+m*s*p-e*g*p-h*s*u+e*f*u)*T,t[6]=(m*l*r-a*g*r-m*s*c+e*g*c+a*s*u-e*l*u)*T,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*p+e*l*p)*T,t[8]=x*T,t[9]=(m*d*r-h*_*r-m*i*p+e*_*p+h*i*u-e*d*u)*T,t[10]=(a*_*r-m*o*r+m*i*c-e*_*c-a*i*u+e*o*u)*T,t[11]=(h*o*r-a*d*r-h*i*c+e*d*c+a*i*p-e*o*p)*T,t[12]=D*T,t[13]=(h*_*s-m*d*s+m*i*f-e*_*f-h*i*g+e*d*g)*T,t[14]=(m*o*s-a*_*s-m*i*l+e*_*l+a*i*g-e*o*g)*T,t[15]=(a*d*s-h*o*s+h*i*l-e*d*l-a*i*f+e*o*f)*T,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,f=r*c,p=r*h,m=r*d,_=a*h,g=a*d,u=o*d,w=l*c,S=l*h,x=l*d,D=i.x,A=i.y,T=i.z;return s[0]=(1-(_+u))*D,s[1]=(p+x)*D,s[2]=(m-S)*D,s[3]=0,s[4]=(p-x)*A,s[5]=(1-(f+u))*A,s[6]=(g+w)*A,s[7]=0,s[8]=(m+S)*T,s[9]=(g-w)*T,s[10]=(1-(f+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Ji.set(s[0],s[1],s[2]).length(),a=Ji.set(s[4],s[5],s[6]).length(),o=Ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],fn.copy(this);let c=1/r,h=1/a,d=1/o;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=d,fn.elements[9]*=d,fn.elements[10]*=d,e.setFromRotationMatrix(fn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Xn){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),p,m;if(o===Xn)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===ra)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Xn){let l=this.elements,c=1/(e-t),h=1/(i-s),d=1/(a-r),f=(e+t)*c,p=(i+s)*h,m,_;if(o===Xn)m=(a+r)*d,_=-2*d;else if(o===ra)m=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ji=new C,fn=new se,lp=new C(0,0,0),cp=new C(1,1,1),li=new C,Pr=new C,je=new C,Ph=new se,Ih=new _n,xn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ph.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ph,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ih.setFromEuler(this),this.setFromQuaternion(Ih,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xn.DEFAULT_ORDER="XYZ";var Js=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},hp=0,Lh=new C,Ki=new _n,Hn=new se,Ir=new C,Fs=new C,up=new C,dp=new _n,Dh=new C(1,0,0),Uh=new C(0,1,0),Nh=new C(0,0,1),Fh={type:"added"},fp={type:"removed"},Qi={type:"childadded",child:null},Uo={type:"childremoved",child:null},ye=class n extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new C,e=new xn,i=new _n,s=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Ht}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(Dh,t)}rotateY(t){return this.rotateOnAxis(Uh,t)}rotateZ(t){return this.rotateOnAxis(Nh,t)}translateOnAxis(t,e){return Lh.copy(t).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dh,t)}translateY(t){return this.translateOnAxis(Uh,t)}translateZ(t){return this.translateOnAxis(Nh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ir.copy(t):Ir.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Fs,Ir,this.up):Hn.lookAt(Ir,Fs,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(Hn),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fh),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fp),Uo.child=t,this.dispatchEvent(Uo),Uo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fh),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,t,up),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,dp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};ye.DEFAULT_UP=new C(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pn=new C,Vn=new C,No=new C,Gn=new C,ts=new C,es=new C,Oh=new C,Fo=new C,Oo=new C,ko=new C,Bo=new _e,zo=new _e,Ho=new _e,Ci=class n{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),pn.subVectors(t,e),s.cross(pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){pn.subVectors(s,e),Vn.subVectors(i,e),No.subVectors(t,e);let a=pn.dot(pn),o=pn.dot(Vn),l=pn.dot(No),c=Vn.dot(Vn),h=Vn.dot(No),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-o*h)*f,m=(a*h-o*l)*f;return r.set(1-p-m,m,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(a,Gn.y),l.addScaledVector(o,Gn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Bo.setScalar(0),zo.setScalar(0),Ho.setScalar(0),Bo.fromBufferAttribute(t,e),zo.fromBufferAttribute(t,i),Ho.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Bo,r.x),a.addScaledVector(zo,r.y),a.addScaledVector(Ho,r.z),a}static isFrontFacing(t,e,i,s){return pn.subVectors(i,e),Vn.subVectors(t,e),pn.cross(Vn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),pn.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;ts.subVectors(s,i),es.subVectors(r,i),Fo.subVectors(t,i);let l=ts.dot(Fo),c=es.dot(Fo);if(l<=0&&c<=0)return e.copy(i);Oo.subVectors(t,s);let h=ts.dot(Oo),d=es.dot(Oo);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(ts,a);ko.subVectors(t,r);let p=ts.dot(ko),m=es.dot(ko);if(m>=0&&p<=m)return e.copy(r);let _=p*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(i).addScaledVector(es,o);let g=h*m-p*d;if(g<=0&&d-h>=0&&p-m>=0)return Oh.subVectors(r,s),o=(d-h)/(d-h+(p-m)),e.copy(s).addScaledVector(Oh,o);let u=1/(g+_+f);return a=_*u,o=f*u,e.copy(i).addScaledVector(ts,a).addScaledVector(es,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function Vo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ut=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Jt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Jt.workingColorSpace){if(t=Fc(t,1),e=Pe(e,0,1),i=Pe(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Vo(a,r,t+1/3),this.g=Vo(a,r,t),this.b=Vo(a,r,t-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(t,e=sn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){let i=Vu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return Jt.fromWorkingColorSpace(Le.copy(this),t),Math.round(Pe(Le.r*255,0,255))*65536+Math.round(Pe(Le.g*255,0,255))*256+Math.round(Pe(Le.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Le.copy(this),e);let i=Le.r,s=Le.g,r=Le.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=sn){Jt.fromWorkingColorSpace(Le.copy(this),t);let e=Le.r,i=Le.g,s=Le.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(Lr);let i=Ws(ci.h,Lr.h,e),s=Ws(ci.s,Lr.s,e),r=Ws(ci.l,Lr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Le=new Ut;Ut.NAMES=Vu;var pp=0,Jn=class extends Yn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=zi(),this.name="",this.blending=hs,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=rl,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sl&&(i.blendSrc=this.blendSrc),this.blendDst!==rl&&(i.blendDst=this.blendDst),this.blendEquation!==Ai&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},rn=class extends Jn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ve=new C,Dr=new ht,Me=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=vh,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Dr.fromBufferAttribute(this,e),Dr.applyMatrix3(t),this.setXY(e,Dr.x,Dr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=os(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Oe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=os(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=os(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=os(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=os(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),s=Oe(s,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vh&&(t.usage=this.usage),t}};var ca=class extends Me{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ha=class extends Me{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Qt=class extends Me{constructor(t,e,i){super(new Float32Array(t),e,i)}},mp=0,nn=new se,Go=new ye,ns=new C,Ze=new Zn,Os=new Zn,Re=new C,ge=class n extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hu(t)?ha:ca)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ht().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,i){return nn.makeTranslation(t,e,i),this.applyMatrix4(nn),this}scale(t,e,i){return nn.makeScale(t,e,i),this.applyMatrix4(nn),this}lookAt(t){return Go.lookAt(t),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let i=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Os.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(Ze.min,Os.min),Ze.expandByPoint(Re),Re.addVectors(Ze.max,Os.max),Ze.expandByPoint(Re)):(Ze.expandByPoint(Os.min),Ze.expandByPoint(Os.max))}Ze.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Re));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Re.fromBufferAttribute(o,c),l&&(ns.fromBufferAttribute(t,c),Re.add(ns)),s=Math.max(s,i.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Me(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<i.count;I++)o[I]=new C,l[I]=new C;let c=new C,h=new C,d=new C,f=new ht,p=new ht,m=new ht,_=new C,g=new C;function u(I,b,v){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,b),d.fromBufferAttribute(i,v),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,v),h.sub(c),d.sub(c),p.sub(f),m.sub(f);let P=1/(p.x*m.y-m.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(P),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(P),o[I].add(_),o[b].add(_),o[v].add(_),l[I].add(g),l[b].add(g),l[v].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let I=0,b=w.length;I<b;++I){let v=w[I],P=v.start,H=v.count;for(let z=P,q=P+H;z<q;z+=3)u(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let S=new C,x=new C,D=new C,A=new C;function T(I){D.fromBufferAttribute(s,I),A.copy(D);let b=o[I];S.copy(b),S.sub(D.multiplyScalar(D.dot(b))).normalize(),x.crossVectors(A,b);let P=x.dot(l[I])<0?-1:1;a.setXYZW(I,S.x,S.y,S.z,P)}for(let I=0,b=w.length;I<b;++I){let v=w[I],P=v.start,H=v.count;for(let z=P,q=P+H;z<q;z+=3)T(t.getX(z+0)),T(t.getX(z+1)),T(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,d=new C;if(t)for(let f=0,p=t.count;f<p;f+=3){let m=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),p=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let u=0;u<h;u++)f[m++]=c[p++]}return new Me(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=t(f,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},kh=new se,bi=new Di,Ur=new mi,Bh=new C,Nr=new C,Fr=new C,Or=new C,Wo=new C,kr=new C,zh=new C,Br=new C,te=class extends ye{constructor(t=new ge,e=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Wo.fromBufferAttribute(d,t),a?kr.addScaledVector(Wo,h):kr.addScaledVector(Wo.sub(e),h))}e.add(kr)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere),Ur.applyMatrix4(r),bi.copy(t.ray).recast(t.near),!(Ur.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Ur,Bh)===null||bi.origin.distanceToSquared(Bh)>(t.far-t.near)**2))&&(kh.copy(r).invert(),bi.copy(t.ray).applyMatrix4(kh),!(i.boundingBox!==null&&bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){let g=f[m],u=a[g.materialIndex],w=Math.max(g.start,p.start),S=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let x=w,D=S;x<D;x+=3){let A=o.getX(x),T=o.getX(x+1),I=o.getX(x+2);s=zr(this,u,t,i,c,h,d,A,T,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let g=m,u=_;g<u;g+=3){let w=o.getX(g),S=o.getX(g+1),x=o.getX(g+2);s=zr(this,a,t,i,c,h,d,w,S,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){let g=f[m],u=a[g.materialIndex],w=Math.max(g.start,p.start),S=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=w,D=S;x<D;x+=3){let A=x,T=x+1,I=x+2;s=zr(this,u,t,i,c,h,d,A,T,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=m,u=_;g<u;g+=3){let w=g,S=g+1,x=g+2;s=zr(this,a,t,i,c,h,d,w,S,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function gp(n,t,e,i,s,r,a,o){let l;if(t.side===Xe?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===pi,o),l===null)return null;Br.copy(o),Br.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Br);return c<e.near||c>e.far?null:{distance:c,point:Br.clone(),object:n}}function zr(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Nr),n.getVertexPosition(l,Fr),n.getVertexPosition(c,Or);let h=gp(n,t,e,i,Nr,Fr,Or,zh);if(h){let d=new C;Ci.getBarycoord(zh,Nr,Fr,Or,d),s&&(h.uv=Ci.getInterpolatedAttribute(s,o,l,c,d,new ht)),r&&(h.uv1=Ci.getInterpolatedAttribute(r,o,l,c,d,new ht)),a&&(h.normal=Ci.getInterpolatedAttribute(a,o,l,c,d,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new C,materialIndex:0};Ci.getNormal(Nr,Fr,Or,f.normal),h.face=f,h.barycoord=d}return h}var Kn=class n extends ge{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,p=0;m("z","y","x",-1,-1,i,e,t,a,r,0),m("z","y","x",1,-1,i,e,-t,a,r,1),m("x","z","y",1,1,t,i,e,s,a,2),m("x","z","y",1,-1,t,i,-e,s,a,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2));function m(_,g,u,w,S,x,D,A,T,I,b){let v=x/T,P=D/I,H=x/2,z=D/2,q=A/2,Q=T+1,X=I+1,nt=0,Y=0,pt=new C;for(let xt=0;xt<X;xt++){let Rt=xt*P-z;for(let Gt=0;Gt<Q;Gt++){let re=Gt*v-H;pt[_]=re*w,pt[g]=Rt*S,pt[u]=q,c.push(pt.x,pt.y,pt.z),pt[_]=0,pt[g]=0,pt[u]=A>0?1:-1,h.push(pt.x,pt.y,pt.z),d.push(Gt/T),d.push(1-xt/I),nt+=1}}for(let xt=0;xt<I;xt++)for(let Rt=0;Rt<T;Rt++){let Gt=f+Rt+Q*xt,re=f+Rt+Q*(xt+1),Z=f+(Rt+1)+Q*(xt+1),it=f+(Rt+1)+Q*xt;l.push(Gt,re,it),l.push(re,Z,it),Y+=6}o.addGroup(p,Y,b),p+=Y,f+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ys(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function ke(n){let t={};for(let e=0;e<n.length;e++){let i=ys(n[e]);for(let s in i)t[s]=i[s]}return t}function _p(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Gu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var xp={clone:ys,merge:ke},yp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends Jn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yp,this.fragmentShader=vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=_p(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},ua=class extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},hi=new C,Hh=new ht,Vh=new ht,Be=class extends ua{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,Hh,Vh),e.subVectors(Vh,Hh)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Gs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},is=-90,ss=1,ql=class extends ye{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Be(is,ss,t,e);s.layers=this.layers,this.add(s);let r=new Be(is,ss,t,e);r.layers=this.layers,this.add(r);let a=new Be(is,ss,t,e);a.layers=this.layers,this.add(a);let o=new Be(is,ss,t,e);o.layers=this.layers,this.add(o);let l=new Be(is,ss,t,e);l.layers=this.layers,this.add(l);let c=new Be(is,ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Xn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ra)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(d,f,p),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},da=class extends Ke{constructor(t,e,i,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ms,super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Yl=class extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new da(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:En}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Kn(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xe,blending:di});r.uniforms.tEquirect.value=e;let a=new te(s,r),o=e.minFilter;return e.minFilter===Ii&&(e.minFilter=En),new ql(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},Xo=new C,Mp=new C,bp=new Ht,mn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Xo.subVectors(i,e).cross(Mp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Xo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||bp.getNormalMatrix(t),s=this.coplanarPoint(Xo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Si=new mi,Hr=new C,Ks=class{constructor(t=new mn,e=new mn,i=new mn,s=new mn,r=new mn,a=new mn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Xn){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],p=s[8],m=s[9],_=s[10],g=s[11],u=s[12],w=s[13],S=s[14],x=s[15];if(i[0].setComponents(l-r,f-c,g-p,x-u).normalize(),i[1].setComponents(l+r,f+c,g+p,x+u).normalize(),i[2].setComponents(l+a,f+h,g+m,x+w).normalize(),i[3].setComponents(l-a,f-h,g-m,x-w).normalize(),i[4].setComponents(l-o,f-d,g-_,x-S).normalize(),e===Xn)i[5].setComponents(l+o,f+d,g+_,x+S).normalize();else if(e===ra)i[5].setComponents(o,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Hr.x=s.normal.x>0?t.max.x:t.min.x,Hr.y=s.normal.y>0?t.max.y:t.min.y,Hr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wu(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Sp(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<d.length;p++){let m=d[f],_=d[p];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,m=d.length;p<m;p++){let _=d[p];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ui=class n extends ge{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,f=e/l,p=[],m=[],_=[],g=[];for(let u=0;u<h;u++){let w=u*f-a;for(let S=0;S<c;S++){let x=S*d-r;m.push(x,-w,0),_.push(0,0,1),g.push(S/o),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let w=0;w<o;w++){let S=w+c*u,x=w+c*(u+1),D=w+1+c*(u+1),A=w+1+c*u;p.push(S,x,A),p.push(x,D,A)}this.setIndex(p),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ep=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ap=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Dp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Np=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Op=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t2="gl_FragColor = linearToOutputTexel( gl_FragColor );",e2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,n2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,i2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,s2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,r2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,o2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,d2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,p2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,m2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,g2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,b2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,S2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,w2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,E2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,T2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,P2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,D2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,z2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,V2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,G2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,q2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Q2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,a1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,o1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,l1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,c1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,u1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,f1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,x1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,b1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,S1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,P1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,I1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,L1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,k1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,V1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,W1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,X1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Y1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,K1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,em=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:wp,alphahash_pars_fragment:Ep,alphamap_fragment:Tp,alphamap_pars_fragment:Ap,alphatest_fragment:Cp,alphatest_pars_fragment:Rp,aomap_fragment:Pp,aomap_pars_fragment:Ip,batching_pars_vertex:Lp,batching_vertex:Dp,begin_vertex:Up,beginnormal_vertex:Np,bsdfs:Fp,iridescence_fragment:Op,bumpmap_pars_fragment:kp,clipping_planes_fragment:Bp,clipping_planes_pars_fragment:zp,clipping_planes_pars_vertex:Hp,clipping_planes_vertex:Vp,color_fragment:Gp,color_pars_fragment:Wp,color_pars_vertex:Xp,color_vertex:$p,common:qp,cube_uv_reflection_fragment:Yp,defaultnormal_vertex:jp,displacementmap_pars_vertex:Zp,displacementmap_vertex:Jp,emissivemap_fragment:Kp,emissivemap_pars_fragment:Qp,colorspace_fragment:t2,colorspace_pars_fragment:e2,envmap_fragment:n2,envmap_common_pars_fragment:i2,envmap_pars_fragment:s2,envmap_pars_vertex:r2,envmap_physical_pars_fragment:g2,envmap_vertex:a2,fog_vertex:o2,fog_pars_vertex:l2,fog_fragment:c2,fog_pars_fragment:h2,gradientmap_pars_fragment:u2,lightmap_pars_fragment:d2,lights_lambert_fragment:f2,lights_lambert_pars_fragment:p2,lights_pars_begin:m2,lights_toon_fragment:_2,lights_toon_pars_fragment:x2,lights_phong_fragment:y2,lights_phong_pars_fragment:v2,lights_physical_fragment:M2,lights_physical_pars_fragment:b2,lights_fragment_begin:S2,lights_fragment_maps:w2,lights_fragment_end:E2,logdepthbuf_fragment:T2,logdepthbuf_pars_fragment:A2,logdepthbuf_pars_vertex:C2,logdepthbuf_vertex:R2,map_fragment:P2,map_pars_fragment:I2,map_particle_fragment:L2,map_particle_pars_fragment:D2,metalnessmap_fragment:U2,metalnessmap_pars_fragment:N2,morphinstance_vertex:F2,morphcolor_vertex:O2,morphnormal_vertex:k2,morphtarget_pars_vertex:B2,morphtarget_vertex:z2,normal_fragment_begin:H2,normal_fragment_maps:V2,normal_pars_fragment:G2,normal_pars_vertex:W2,normal_vertex:X2,normalmap_pars_fragment:$2,clearcoat_normal_fragment_begin:q2,clearcoat_normal_fragment_maps:Y2,clearcoat_pars_fragment:j2,iridescence_pars_fragment:Z2,opaque_fragment:J2,packing:K2,premultiplied_alpha_fragment:Q2,project_vertex:t1,dithering_fragment:e1,dithering_pars_fragment:n1,roughnessmap_fragment:i1,roughnessmap_pars_fragment:s1,shadowmap_pars_fragment:r1,shadowmap_pars_vertex:a1,shadowmap_vertex:o1,shadowmask_pars_fragment:l1,skinbase_vertex:c1,skinning_pars_vertex:h1,skinning_vertex:u1,skinnormal_vertex:d1,specularmap_fragment:f1,specularmap_pars_fragment:p1,tonemapping_fragment:m1,tonemapping_pars_fragment:g1,transmission_fragment:_1,transmission_pars_fragment:x1,uv_pars_fragment:y1,uv_pars_vertex:v1,uv_vertex:M1,worldpos_vertex:b1,background_vert:S1,background_frag:w1,backgroundCube_vert:E1,backgroundCube_frag:T1,cube_vert:A1,cube_frag:C1,depth_vert:R1,depth_frag:P1,distanceRGBA_vert:I1,distanceRGBA_frag:L1,equirect_vert:D1,equirect_frag:U1,linedashed_vert:N1,linedashed_frag:F1,meshbasic_vert:O1,meshbasic_frag:k1,meshlambert_vert:B1,meshlambert_frag:z1,meshmatcap_vert:H1,meshmatcap_frag:V1,meshnormal_vert:G1,meshnormal_frag:W1,meshphong_vert:X1,meshphong_frag:$1,meshphysical_vert:q1,meshphysical_frag:Y1,meshtoon_vert:j1,meshtoon_frag:Z1,points_vert:J1,points_frag:K1,shadow_vert:Q1,shadow_frag:tm,sprite_vert:em,sprite_frag:nm},ft={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},wn={basic:{uniforms:ke([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:ke([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:ke([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:ke([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:ke([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:ke([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:ke([ft.points,ft.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:ke([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:ke([ft.common,ft.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:ke([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:ke([ft.sprite,ft.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:ke([ft.common,ft.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:ke([ft.lights,ft.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};wn.physical={uniforms:ke([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var Vr={r:0,b:0,g:0},wi=new xn,im=new se;function sm(n,t,e,i,s,r,a){let o=new Ut(0),l=r===!0?0:1,c,h,d=null,f=0,p=null;function m(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?e:t).get(S)),S}function _(w){let S=!1,x=m(w);x===null?u(o,l):x&&x.isColor&&(u(x,1),S=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(w,S){let x=m(S);x&&(x.isCubeTexture||x.mapping===Xa)?(h===void 0&&(h=new te(new Kn(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:ys(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),wi.copy(S.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(im.makeRotationFromEuler(wi)),h.material.toneMapped=Jt.getTransfer(x.colorSpace)!==ae,(d!==x||f!==x.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=x,f=x.version,p=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new te(new Ui(2,2),new An({name:"BackgroundMaterial",uniforms:ys(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(x.colorSpace)!==ae,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,p=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function u(w,S){w.getRGB(Vr,Gu(n)),i.buffers.color.setClear(Vr.r,Vr.g,Vr.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(w,S=1){o.set(w),l=S,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,u(o,l)},render:_,addToRenderList:g}}function rm(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(v,P,H,z,q){let Q=!1,X=d(z,H,P);r!==X&&(r=X,c(r.object)),Q=p(v,z,H,q),Q&&m(v,z,H,q),q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,x(v,P,H,z),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function d(v,P,H){let z=H.wireframe===!0,q=i[v.id];q===void 0&&(q={},i[v.id]=q);let Q=q[P.id];Q===void 0&&(Q={},q[P.id]=Q);let X=Q[z];return X===void 0&&(X=f(l()),Q[z]=X),X}function f(v){let P=[],H=[],z=[];for(let q=0;q<e;q++)P[q]=0,H[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:z,object:v,attributes:{},index:null}}function p(v,P,H,z){let q=r.attributes,Q=P.attributes,X=0,nt=H.getAttributes();for(let Y in nt)if(nt[Y].location>=0){let xt=q[Y],Rt=Q[Y];if(Rt===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(Rt=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(Rt=v.instanceColor)),xt===void 0||xt.attribute!==Rt||Rt&&xt.data!==Rt.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function m(v,P,H,z){let q={},Q=P.attributes,X=0,nt=H.getAttributes();for(let Y in nt)if(nt[Y].location>=0){let xt=Q[Y];xt===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(xt=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(xt=v.instanceColor));let Rt={};Rt.attribute=xt,xt&&xt.data&&(Rt.data=xt.data),q[Y]=Rt,X++}r.attributes=q,r.attributesNum=X,r.index=z}function _(){let v=r.newAttributes;for(let P=0,H=v.length;P<H;P++)v[P]=0}function g(v){u(v,0)}function u(v,P){let H=r.newAttributes,z=r.enabledAttributes,q=r.attributeDivisors;H[v]=1,z[v]===0&&(n.enableVertexAttribArray(v),z[v]=1),q[v]!==P&&(n.vertexAttribDivisor(v,P),q[v]=P)}function w(){let v=r.newAttributes,P=r.enabledAttributes;for(let H=0,z=P.length;H<z;H++)P[H]!==v[H]&&(n.disableVertexAttribArray(H),P[H]=0)}function S(v,P,H,z,q,Q,X){X===!0?n.vertexAttribIPointer(v,P,H,q,Q):n.vertexAttribPointer(v,P,H,z,q,Q)}function x(v,P,H,z){_();let q=z.attributes,Q=H.getAttributes(),X=P.defaultAttributeValues;for(let nt in Q){let Y=Q[nt];if(Y.location>=0){let pt=q[nt];if(pt===void 0&&(nt==="instanceMatrix"&&v.instanceMatrix&&(pt=v.instanceMatrix),nt==="instanceColor"&&v.instanceColor&&(pt=v.instanceColor)),pt!==void 0){let xt=pt.normalized,Rt=pt.itemSize,Gt=t.get(pt);if(Gt===void 0)continue;let re=Gt.buffer,Z=Gt.type,it=Gt.bytesPerElement,lt=Z===n.INT||Z===n.UNSIGNED_INT||pt.gpuType===Cc;if(pt.isInterleavedBufferAttribute){let ut=pt.data,Dt=ut.stride,Nt=pt.offset;if(ut.isInstancedInterleavedBuffer){for(let Bt=0;Bt<Y.locationSize;Bt++)u(Y.location+Bt,ut.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Bt=0;Bt<Y.locationSize;Bt++)g(Y.location+Bt);n.bindBuffer(n.ARRAY_BUFFER,re);for(let Bt=0;Bt<Y.locationSize;Bt++)S(Y.location+Bt,Rt/Y.locationSize,Z,xt,Dt*it,(Nt+Rt/Y.locationSize*Bt)*it,lt)}else{if(pt.isInstancedBufferAttribute){for(let ut=0;ut<Y.locationSize;ut++)u(Y.location+ut,pt.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let ut=0;ut<Y.locationSize;ut++)g(Y.location+ut);n.bindBuffer(n.ARRAY_BUFFER,re);for(let ut=0;ut<Y.locationSize;ut++)S(Y.location+ut,Rt/Y.locationSize,Z,xt,Rt*it,Rt/Y.locationSize*ut*it,lt)}}else if(X!==void 0){let xt=X[nt];if(xt!==void 0)switch(xt.length){case 2:n.vertexAttrib2fv(Y.location,xt);break;case 3:n.vertexAttrib3fv(Y.location,xt);break;case 4:n.vertexAttrib4fv(Y.location,xt);break;default:n.vertexAttrib1fv(Y.location,xt)}}}}w()}function D(){I();for(let v in i){let P=i[v];for(let H in P){let z=P[H];for(let q in z)h(z[q].object),delete z[q];delete P[H]}delete i[v]}}function A(v){if(i[v.id]===void 0)return;let P=i[v.id];for(let H in P){let z=P[H];for(let q in z)h(z[q].object),delete z[q];delete P[H]}delete i[v.id]}function T(v){for(let P in i){let H=i[P];if(H[v.id]===void 0)continue;let z=H[v.id];for(let q in z)h(z[q].object),delete z[q];delete H[v.id]}}function I(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:b,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:g,disableUnusedAttributes:w}}function am(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),e.update(h,i,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let m=0;m<d;m++)p+=h[m];e.update(p,i,1)}function l(c,h,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)a(c[m],h[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let m=0;for(let _=0;_<d;_++)m+=h[_]*f[_];e.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function om(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==gn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let I=T===or&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==qn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Tn&&!I)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=m>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:D,maxSamples:A}}function lm(n){let t=this,e=null,i=0,s=!1,r=!1,a=new mn,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){let m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,u=n.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let w=r?0:i,S=w*4,x=u.clippingState||null;l.value=x,x=h(m,f,S,p);for(let D=0;D!==S;++D)x[D]=e[D];u.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,p,m){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let u=p+_*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(g===null||g.length<u)&&(g=new Float32Array(u));for(let S=0,x=p;S!==_;++S,x+=4)a.copy(d[S]).applyMatrix4(w,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function cm(n){let t=new WeakMap;function e(a,o){return o===fl?a.mapping=ms:o===pl&&(a.mapping=gs),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===fl||o===pl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Yl(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var fa=class extends ua{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ls=4,Gh=[.125,.215,.35,.446,.526,.582],Ri=20,$o=new fa,Wh=new Ut,qo=null,Yo=0,jo=0,Zo=!1,Ti=(1+Math.sqrt(5))/2,rs=1/Ti,Xh=[new C(-Ti,rs,0),new C(Ti,rs,0),new C(-rs,0,Ti),new C(rs,0,Ti),new C(0,Ti,-rs),new C(0,Ti,rs),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],pa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){qo=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qo,Yo,jo),this._renderer.xr.enabled=Zo,t.scissorTest=!1,Gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ms||t.mapping===gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qo=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:or,format:gn,colorSpace:Ss,depthBuffer:!1},s=$h(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$h(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hm(r)),this._blurMaterial=um(r,t,e)}return s}_compileMaterial(t){let e=new te(this._lodPlanes[0],t);this._renderer.compile(e,$o)}_sceneToCubeUV(t,e,i,s){let o=new Be(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Wh),h.toneMapping=fi,h.autoClear=!1;let p=new rn({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),m=new te(new Kn,p),_=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,_=!0):(p.color.copy(Wh),_=!0);for(let u=0;u<6;u++){let w=u%3;w===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):w===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));let S=this._cubeSize;Gr(s,w*S,u>2?S:0,S,S),h.setRenderTarget(s),_&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===ms||t.mapping===gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new te(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Gr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,$o)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Xh[(s-r-1)%Xh.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new te(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ri-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):Ri;g>Ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ri}`);let u=[],w=0;for(let T=0;T<Ri;++T){let I=T/_,b=Math.exp(-I*I/2);u.push(b),T===0?w+=b:T<g&&(w+=2*b)}for(let T=0;T<u.length;T++)u[T]=u[T]/w;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:S}=this;f.dTheta.value=m,f.mipInt.value=S-i;let x=this._sizeLods[s],D=3*x*(s>S-ls?s-S+ls:0),A=4*(this._cubeSize-x);Gr(e,D,A,3*x,2*x),l.setRenderTarget(e),l.render(d,$o)}};function hm(n){let t=[],e=[],i=[],s=n,r=n-ls+1+Gh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>n-ls?l=Gh[a-n+ls-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,m=6,_=3,g=2,u=1,w=new Float32Array(_*m*p),S=new Float32Array(g*m*p),x=new Float32Array(u*m*p);for(let A=0;A<p;A++){let T=A%3*2/3-1,I=A>2?0:-1,b=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];w.set(b,_*m*A),S.set(f,g*m*A);let v=[A,A,A,A,A,A];x.set(v,u*m*A)}let D=new ge;D.setAttribute("position",new Me(w,_)),D.setAttribute("uv",new Me(S,g)),D.setAttribute("faceIndex",new Me(x,u)),t.push(D),s>ls&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function $h(n,t,e){let i=new jn(n,t,e);return i.texture.mapping=Xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function um(n,t,e){let i=new Float32Array(Ri),s=new C(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function qh(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Yh(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Oc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dm(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===fl||l===pl,h=l===ms||l===gs;if(c||h){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new pa(n)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new pa(n)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function fm(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Hs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function pm(n,t,e,i){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let _=f.morphAttributes[m];for(let g=0,u=_.length;g<u;g++)t.remove(_[g])}f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let m in f)t.update(f[m],n.ARRAY_BUFFER);let p=d.morphAttributes;for(let m in p){let _=p[m];for(let g=0,u=_.length;g<u;g++)t.update(_[g],n.ARRAY_BUFFER)}}function c(d){let f=[],p=d.index,m=d.attributes.position,_=0;if(p!==null){let w=p.array;_=p.version;for(let S=0,x=w.length;S<x;S+=3){let D=w[S+0],A=w[S+1],T=w[S+2];f.push(D,A,A,T,T,D)}}else if(m!==void 0){let w=m.array;_=m.version;for(let S=0,x=w.length/3-1;S<x;S+=3){let D=S+0,A=S+1,T=S+2;f.push(D,A,A,T,T,D)}}else return;let g=new(Hu(f)?ha:ca)(f,1);g.version=_;let u=r.get(d);u&&t.remove(u),r.set(d,g)}function h(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function mm(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*a),e.update(p,i,1)}function c(f,p,m){m!==0&&(n.drawElementsInstanced(i,p,r,f*a,m),e.update(p,i,m))}function h(f,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,m);let g=0;for(let u=0;u<m;u++)g+=p[u];e.update(g,i,1)}function d(f,p,m,_){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<f.length;u++)c(f[u]/a,p[u],_[u]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,_,0,m);let u=0;for(let w=0;w<m;w++)u+=p[w]*_[w];e.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function gm(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function _m(n,t,e){let i=new WeakMap,s=new _e;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==d){let b=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],S=0;p===!0&&(S=1),m===!0&&(S=2),_===!0&&(S=3);let x=o.attributes.position.count*S,D=1;x>t.maxTextureSize&&(D=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let A=new Float32Array(x*D*4*d),T=new la(A,x,D,d);T.type=Tn,T.needsUpdate=!0;let I=S*4;for(let v=0;v<d;v++){let P=g[v],H=u[v],z=w[v],q=x*D*4*v;for(let Q=0;Q<P.count;Q++){let X=Q*I;p===!0&&(s.fromBufferAttribute(P,Q),A[q+X+0]=s.x,A[q+X+1]=s.y,A[q+X+2]=s.z,A[q+X+3]=0),m===!0&&(s.fromBufferAttribute(H,Q),A[q+X+4]=s.x,A[q+X+5]=s.y,A[q+X+6]=s.z,A[q+X+7]=0),_===!0&&(s.fromBufferAttribute(z,Q),A[q+X+8]=s.x,A[q+X+9]=s.y,A[q+X+10]=s.z,A[q+X+11]=z.itemSize===4?s.w:1)}}f={count:d,texture:T,size:new ht(x,D)},i.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function xm(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var ma=class extends Ke{constructor(t,e,i,s,r,a,o,l,c,h=us){if(h!==us&&h!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===us&&(i=Li),i===void 0&&h===xs&&(i=_s),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Je,this.minFilter=l!==void 0?l:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Xu=new Ke,jh=new ma(1,1),$u=new la,qu=new $l,Yu=new da,Zh=[],Jh=[],Kh=new Float32Array(16),Qh=new Float32Array(9),tu=new Float32Array(4);function ws(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Zh[s];if(r===void 0&&(r=new Float32Array(s),Zh[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ee(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Te(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ya(n,t){let e=Jh[t];e===void 0&&(e=new Int32Array(t),Jh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ym(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function vm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2fv(this.addr,t),Te(e,t)}}function Mm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;n.uniform3fv(this.addr,t),Te(e,t)}}function bm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4fv(this.addr,t),Te(e,t)}}function Sm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;tu.set(i),n.uniformMatrix2fv(this.addr,!1,tu),Te(e,i)}}function wm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;Qh.set(i),n.uniformMatrix3fv(this.addr,!1,Qh),Te(e,i)}}function Em(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;Kh.set(i),n.uniformMatrix4fv(this.addr,!1,Kh),Te(e,i)}}function Tm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Am(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2iv(this.addr,t),Te(e,t)}}function Cm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3iv(this.addr,t),Te(e,t)}}function Rm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4iv(this.addr,t),Te(e,t)}}function Pm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Im(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2uiv(this.addr,t),Te(e,t)}}function Lm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3uiv(this.addr,t),Te(e,t)}}function Dm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4uiv(this.addr,t),Te(e,t)}}function Um(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(jh.compareFunction=zu,r=jh):r=Xu,e.setTexture2D(t||r,s)}function Nm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||qu,s)}function Fm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Yu,s)}function Om(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||$u,s)}function km(n){switch(n){case 5126:return ym;case 35664:return vm;case 35665:return Mm;case 35666:return bm;case 35674:return Sm;case 35675:return wm;case 35676:return Em;case 5124:case 35670:return Tm;case 35667:case 35671:return Am;case 35668:case 35672:return Cm;case 35669:case 35673:return Rm;case 5125:return Pm;case 36294:return Im;case 36295:return Lm;case 36296:return Dm;case 35678:case 36198:case 36298:case 36306:case 35682:return Um;case 35679:case 36299:case 36307:return Nm;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return Om}}function Bm(n,t){n.uniform1fv(this.addr,t)}function zm(n,t){let e=ws(t,this.size,2);n.uniform2fv(this.addr,e)}function Hm(n,t){let e=ws(t,this.size,3);n.uniform3fv(this.addr,e)}function Vm(n,t){let e=ws(t,this.size,4);n.uniform4fv(this.addr,e)}function Gm(n,t){let e=ws(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Wm(n,t){let e=ws(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Xm(n,t){let e=ws(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function $m(n,t){n.uniform1iv(this.addr,t)}function qm(n,t){n.uniform2iv(this.addr,t)}function Ym(n,t){n.uniform3iv(this.addr,t)}function jm(n,t){n.uniform4iv(this.addr,t)}function Zm(n,t){n.uniform1uiv(this.addr,t)}function Jm(n,t){n.uniform2uiv(this.addr,t)}function Km(n,t){n.uniform3uiv(this.addr,t)}function Qm(n,t){n.uniform4uiv(this.addr,t)}function t0(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Xu,r[a])}function e0(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||qu,r[a])}function n0(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Yu,r[a])}function i0(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||$u,r[a])}function s0(n){switch(n){case 5126:return Bm;case 35664:return zm;case 35665:return Hm;case 35666:return Vm;case 35674:return Gm;case 35675:return Wm;case 35676:return Xm;case 5124:case 35670:return $m;case 35667:case 35671:return qm;case 35668:case 35672:return Ym;case 35669:case 35673:return jm;case 5125:return Zm;case 36294:return Jm;case 36295:return Km;case 36296:return Qm;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return e0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}var jl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=km(e.type)}},Zl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=s0(e.type)}},Jl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Jo=/(\w+)(\])?(\[|\.)?/g;function eu(n,t){n.seq.push(t),n.map[t.id]=t}function r0(n,t,e){let i=n.name,s=i.length;for(Jo.lastIndex=0;;){let r=Jo.exec(i),a=Jo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){eu(e,c===void 0?new jl(o,n,t):new Zl(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new Jl(o),eu(e,d)),e=d}}}var fs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);r0(r,a,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function nu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var a0=37297,o0=0;function l0(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var iu=new Ht;function c0(n){Jt._getMatrix(iu,Jt.workingColorSpace,n);let t=`mat3( ${iu.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(n)){case $a:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function su(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+l0(n.getShaderSource(t),a)}else return s}function h0(n,t){let e=c0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function u0(n,t){let e;switch(t){case Mf:e="Linear";break;case bf:e="Reinhard";break;case Sf:e="Cineon";break;case wf:e="ACESFilmic";break;case Tf:e="AgX";break;case Af:e="Neutral";break;case Ef:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Wr=new C;function d0(){Jt.getLuminanceCoefficients(Wr);let n=Wr.x.toFixed(4),t=Wr.y.toFixed(4),e=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function p0(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function m0(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Vs(n){return n!==""}function ru(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function au(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var g0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kl(n){return n.replace(g0,x0)}var _0=new Map;function x0(n,t){let e=Vt[t];if(e===void 0){let i=_0.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Kl(e)}var y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ou(n){return n.replace(y0,v0)}function v0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function M0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ru?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Qd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function b0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ms:case gs:t="ENVMAP_TYPE_CUBE";break;case Xa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function S0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case gs:t="ENVMAP_MODE_REFRACTION";break}return t}function w0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Wa:t="ENVMAP_BLENDING_MULTIPLY";break;case yf:t="ENVMAP_BLENDING_MIX";break;case vf:t="ENVMAP_BLENDING_ADD";break}return t}function E0(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function T0(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=M0(e),c=b0(e),h=S0(e),d=w0(e),f=E0(e),p=f0(e),m=p0(r),_=s.createProgram(),g,u,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Vs).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Vs).join(`
`),u.length>0&&(u+=`
`)):(g=[lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),u=[lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?Vt.tonemapping_pars_fragment:"",e.toneMapping!==fi?u0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,h0("linearToOutputTexel",e.outputColorSpace),d0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vs).join(`
`)),a=Kl(a),a=ru(a,e),a=au(a,e),o=Kl(o),o=ru(o,e),o=au(o,e),a=ou(a),o=ou(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",e.glslVersion===Mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let S=w+g+a,x=w+u+o,D=nu(s,s.VERTEX_SHADER,S),A=nu(s,s.FRAGMENT_SHADER,x);s.attachShader(_,D),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(P){if(n.debug.checkShaderErrors){let H=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(D).trim(),q=s.getShaderInfoLog(A).trim(),Q=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,D,A);else{let nt=su(s,D,"vertex"),Y=su(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+nt+`
`+Y)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||q==="")&&(X=!1);X&&(P.diagnostics={runnable:Q,programLog:H,vertexShader:{log:z,prefix:g},fragmentShader:{log:q,prefix:u}})}s.deleteShader(D),s.deleteShader(A),I=new fs(s,_),b=m0(s,_)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,a0)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=o0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=A,this}var A0=0,Ql=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new tc(t),e.set(t,i)),i}},tc=class{constructor(t){this.id=A0++,this.code=t,this.usedTimes=0}};function C0(n,t,e,i,s,r,a){let o=new Js,l=new Ql,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,v,P,H,z){let q=H.fog,Q=z.geometry,X=b.isMeshStandardMaterial?H.environment:null,nt=(b.isMeshStandardMaterial?e:t).get(b.envMap||X),Y=nt&&nt.mapping===Xa?nt.image.height:null,pt=m[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let xt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Rt=xt!==void 0?xt.length:0,Gt=0;Q.morphAttributes.position!==void 0&&(Gt=1),Q.morphAttributes.normal!==void 0&&(Gt=2),Q.morphAttributes.color!==void 0&&(Gt=3);let re,Z,it,lt;if(pt){let Ft=wn[pt];re=Ft.vertexShader,Z=Ft.fragmentShader}else re=b.vertexShader,Z=b.fragmentShader,l.update(b),it=l.getVertexShaderID(b),lt=l.getFragmentShaderID(b);let ut=n.getRenderTarget(),Dt=n.state.buffers.depth.getReversed(),Nt=z.isInstancedMesh===!0,Bt=z.isBatchedMesh===!0,he=!!b.map,Yt=!!b.matcap,vt=!!nt,N=!!b.aoMap,Fe=!!b.lightMap,Xt=!!b.bumpMap,$t=!!b.normalMap,Lt=!!b.displacementMap,ee=!!b.emissiveMap,It=!!b.metalnessMap,E=!!b.roughnessMap,y=b.anisotropy>0,B=b.clearcoat>0,R=b.dispersion>0,O=b.iridescence>0,k=b.sheen>0,rt=b.transmission>0,tt=y&&!!b.anisotropyMap,et=B&&!!b.clearcoatMap,bt=B&&!!b.clearcoatNormalMap,j=B&&!!b.clearcoatRoughnessMap,K=O&&!!b.iridescenceMap,dt=O&&!!b.iridescenceThicknessMap,yt=k&&!!b.sheenColorMap,at=k&&!!b.sheenRoughnessMap,St=!!b.specularMap,Mt=!!b.specularColorMap,Wt=!!b.specularIntensityMap,L=rt&&!!b.transmissionMap,ct=rt&&!!b.thicknessMap,$=!!b.gradientMap,J=!!b.alphaMap,gt=b.alphaTest>0,mt=!!b.alphaHash,Ot=!!b.extensions,ue=fi;b.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ue=n.toneMapping);let Ct={shaderID:pt,shaderType:b.type,shaderName:b.name,vertexShader:re,fragmentShader:Z,defines:b.defines,customVertexShaderID:it,customFragmentShaderID:lt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Bt,batchingColor:Bt&&z._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&z.instanceColor!==null,instancingMorph:Nt&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ut===null?n.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Ss,alphaToCoverage:!!b.alphaToCoverage,map:he,matcap:Yt,envMap:vt,envMapMode:vt&&nt.mapping,envMapCubeUVHeight:Y,aoMap:N,lightMap:Fe,bumpMap:Xt,normalMap:$t,displacementMap:f&&Lt,emissiveMap:ee,normalMapObjectSpace:$t&&b.normalMapType===If,normalMapTangentSpace:$t&&b.normalMapType===Nc,metalnessMap:It,roughnessMap:E,anisotropy:y,anisotropyMap:tt,clearcoat:B,clearcoatMap:et,clearcoatNormalMap:bt,clearcoatRoughnessMap:j,dispersion:R,iridescence:O,iridescenceMap:K,iridescenceThicknessMap:dt,sheen:k,sheenColorMap:yt,sheenRoughnessMap:at,specularMap:St,specularColorMap:Mt,specularIntensityMap:Wt,transmission:rt,transmissionMap:L,thicknessMap:ct,gradientMap:$,opaque:b.transparent===!1&&b.blending===hs&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:gt,alphaHash:mt,combine:b.combine,mapUv:he&&_(b.map.channel),aoMapUv:N&&_(b.aoMap.channel),lightMapUv:Fe&&_(b.lightMap.channel),bumpMapUv:Xt&&_(b.bumpMap.channel),normalMapUv:$t&&_(b.normalMap.channel),displacementMapUv:Lt&&_(b.displacementMap.channel),emissiveMapUv:ee&&_(b.emissiveMap.channel),metalnessMapUv:It&&_(b.metalnessMap.channel),roughnessMapUv:E&&_(b.roughnessMap.channel),anisotropyMapUv:tt&&_(b.anisotropyMap.channel),clearcoatMapUv:et&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:bt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:at&&_(b.sheenRoughnessMap.channel),specularMapUv:St&&_(b.specularMap.channel),specularColorMapUv:Mt&&_(b.specularColorMap.channel),specularIntensityMapUv:Wt&&_(b.specularIntensityMap.channel),transmissionMapUv:L&&_(b.transmissionMap.channel),thicknessMapUv:ct&&_(b.thicknessMap.channel),alphaMapUv:J&&_(b.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&($t||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Q.attributes.uv&&(he||J),fog:!!q,useFog:b.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Dt,skinning:z.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:Gt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ue,decodeVideoTexture:he&&b.map.isVideoTexture===!0&&Jt.getTransfer(b.map.colorSpace)===ae,decodeVideoTextureEmissive:ee&&b.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(b.emissiveMap.colorSpace)===ae,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===We,flipSided:b.side===Xe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ot&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&b.extensions.multiDraw===!0||Bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function u(b){let v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(let P in b.defines)v.push(P),v.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(w(v,b),S(v,b),v.push(n.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function w(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function S(b,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),b.push(o.mask)}function x(b){let v=m[b.type],P;if(v){let H=wn[v];P=xp.clone(H.uniforms)}else P=b.uniforms;return P}function D(b,v){let P;for(let H=0,z=h.length;H<z;H++){let q=h[H];if(q.cacheKey===v){P=q,++P.usedTimes;break}}return P===void 0&&(P=new T0(n,v,b,r),h.push(P)),P}function A(b){if(--b.usedTimes===0){let v=h.indexOf(b);h[v]=h[h.length-1],h.pop(),b.destroy()}}function T(b){l.remove(b)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:x,acquireProgram:D,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:I}}function R0(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function P0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function cu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function hu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(d,f,p,m,_,g){let u=n[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:m,renderOrder:d.renderOrder,z:_,group:g},n[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=m,u.renderOrder=d.renderOrder,u.z=_,u.group=g),t++,u}function o(d,f,p,m,_,g){let u=a(d,f,p,m,_,g);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):e.push(u)}function l(d,f,p,m,_,g){let u=a(d,f,p,m,_,g);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||P0),i.length>1&&i.sort(f||cu),s.length>1&&s.sort(f||cu)}function h(){for(let d=t,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function I0(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new hu,n.set(i,[a])):s>=r.length?(a=new hu,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function L0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Ut};break;case"SpotLight":e={position:new C,direction:new C,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function D0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var U0=0;function N0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function F0(n){let t=new L0,e=D0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let s=new C,r=new se,a=new se;function o(c){let h=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,m=0,_=0,g=0,u=0,w=0,S=0,x=0,D=0,A=0,T=0;c.sort(N0);for(let b=0,v=c.length;b<v;b++){let P=c[b],H=P.color,z=P.intensity,q=P.distance,Q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=H.r*z,d+=H.g*z,f+=H.b*z;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],z);T++}else if(P.isDirectionalLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let nt=P.shadow,Y=e.get(P);Y.shadowIntensity=nt.intensity,Y.shadowBias=nt.bias,Y.shadowNormalBias=nt.normalBias,Y.shadowRadius=nt.radius,Y.shadowMapSize=nt.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=P.shadow.matrix,w++}i.directional[p]=X,p++}else if(P.isSpotLight){let X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(H).multiplyScalar(z),X.distance=q,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[_]=X;let nt=P.shadow;if(P.map&&(i.spotLightMap[D]=P.map,D++,nt.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[_]=nt.matrix,P.castShadow){let Y=e.get(P);Y.shadowIntensity=nt.intensity,Y.shadowBias=nt.bias,Y.shadowNormalBias=nt.normalBias,Y.shadowRadius=nt.radius,Y.shadowMapSize=nt.mapSize,i.spotShadow[_]=Y,i.spotShadowMap[_]=Q,x++}_++}else if(P.isRectAreaLight){let X=t.get(P);X.color.copy(H).multiplyScalar(z),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=X,g++}else if(P.isPointLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let nt=P.shadow,Y=e.get(P);Y.shadowIntensity=nt.intensity,Y.shadowBias=nt.bias,Y.shadowNormalBias=nt.normalBias,Y.shadowRadius=nt.radius,Y.shadowMapSize=nt.mapSize,Y.shadowCameraNear=nt.camera.near,Y.shadowCameraFar=nt.camera.far,i.pointShadow[m]=Y,i.pointShadowMap[m]=Q,i.pointShadowMatrix[m]=P.shadow.matrix,S++}i.point[m]=X,m++}else if(P.isHemisphereLight){let X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(z),X.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[u]=X,u++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let I=i.hash;(I.directionalLength!==p||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==g||I.hemiLength!==u||I.numDirectionalShadows!==w||I.numPointShadows!==S||I.numSpotShadows!==x||I.numSpotMaps!==D||I.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=u,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+D-A,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,I.directionalLength=p,I.pointLength=m,I.spotLength=_,I.rectAreaLength=g,I.hemiLength=u,I.numDirectionalShadows=w,I.numPointShadows=S,I.numSpotShadows=x,I.numSpotMaps=D,I.numLightProbes=T,i.version=U0++)}function l(c,h){let d=0,f=0,p=0,m=0,_=0,g=h.matrixWorldInverse;for(let u=0,w=c.length;u<w;u++){let S=c[u];if(S.isDirectionalLight){let x=i.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),d++}else if(S.isSpotLight){let x=i.spot[p];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),p++}else if(S.isRectAreaLight){let x=i.rectArea[m];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),a.identity(),r.copy(S.matrixWorld),r.premultiply(g),a.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(S.isPointLight){let x=i.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){let x=i.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:i}}function uu(n){let t=new F0(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function O0(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new uu(n),t.set(s,[o])):r>=a.length?(o=new uu(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var ec=class extends Jn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},nc=class extends Jn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},k0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function z0(n,t,e){let i=new Ks,s=new ht,r=new ht,a=new _e,o=new ec({depthPacking:Pf}),l=new nc,c={},h=e.maxTextureSize,d={[pi]:Xe,[Xe]:pi,[We]:We},f=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:k0,fragmentShader:B0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new ge;m.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new te(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ru;let u=this.type;this.render=function(A,T,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let b=n.getRenderTarget(),v=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),H=n.state;H.setBlending(di),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let z=u!==Wn&&this.type===Wn,q=u===Wn&&this.type!==Wn;for(let Q=0,X=A.length;Q<X;Q++){let nt=A[Q],Y=nt.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let pt=Y.getFrameExtents();if(s.multiply(pt),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pt.x),s.x=r.x*pt.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pt.y),s.y=r.y*pt.y,Y.mapSize.y=r.y)),Y.map===null||z===!0||q===!0){let Rt=this.type!==Wn?{minFilter:Je,magFilter:Je}:{};Y.map!==null&&Y.map.dispose(),Y.map=new jn(s.x,s.y,Rt),Y.map.texture.name=nt.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();let xt=Y.getViewportCount();for(let Rt=0;Rt<xt;Rt++){let Gt=Y.getViewport(Rt);a.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),H.viewport(a),Y.updateMatrices(nt,Rt),i=Y.getFrustum(),x(T,I,Y.camera,nt,this.type)}Y.isPointLightShadow!==!0&&this.type===Wn&&w(Y,I),Y.needsUpdate=!1}u=this.type,g.needsUpdate=!1,n.setRenderTarget(b,v,P)};function w(A,T){let I=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new jn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,I,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,I,p,_,null)}function S(A,T,I,b){let v=null,P=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)v=P;else if(v=I.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let H=v.uuid,z=T.uuid,q=c[H];q===void 0&&(q={},c[H]=q);let Q=q[z];Q===void 0&&(Q=v.clone(),q[z]=Q,T.addEventListener("dispose",D)),v=Q}if(v.visible=T.visible,v.wireframe=T.wireframe,b===Wn?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:d[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let H=n.properties.get(v);H.light=I}return v}function x(A,T,I,b,v){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Wn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);let z=t.update(A),q=A.material;if(Array.isArray(q)){let Q=z.groups;for(let X=0,nt=Q.length;X<nt;X++){let Y=Q[X],pt=q[Y.materialIndex];if(pt&&pt.visible){let xt=S(A,pt,b,v);A.onBeforeShadow(n,A,T,I,z,xt,Y),n.renderBufferDirect(I,null,z,xt,A,Y),A.onAfterShadow(n,A,T,I,z,xt,Y)}}}else if(q.visible){let Q=S(A,q,b,v);A.onBeforeShadow(n,A,T,I,z,Q,null),n.renderBufferDirect(I,null,z,Q,A,null),A.onAfterShadow(n,A,T,I,z,Q,null)}}let H=A.children;for(let z=0,q=H.length;z<q;z++)x(H[z],T,I,b,v)}function D(A){A.target.removeEventListener("dispose",D);for(let I in c){let b=c[I],v=A.target.uuid;v in b&&(b[v].dispose(),delete b[v])}}}var H0={[al]:ol,[ll]:ul,[cl]:dl,[ps]:hl,[ol]:al,[ul]:ll,[dl]:cl,[hl]:ps};function V0(n,t){function e(){let L=!1,ct=new _e,$=null,J=new _e(0,0,0,0);return{setMask:function(gt){$!==gt&&!L&&(n.colorMask(gt,gt,gt,gt),$=gt)},setLocked:function(gt){L=gt},setClear:function(gt,mt,Ot,ue,Ct){Ct===!0&&(gt*=ue,mt*=ue,Ot*=ue),ct.set(gt,mt,Ot,ue),J.equals(ct)===!1&&(n.clearColor(gt,mt,Ot,ue),J.copy(ct))},reset:function(){L=!1,$=null,J.set(-1,0,0,0)}}}function i(){let L=!1,ct=!1,$=null,J=null,gt=null;return{setReversed:function(mt){if(ct!==mt){let Ot=t.get("EXT_clip_control");ct?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);let ue=gt;gt=null,this.setClear(ue)}ct=mt},getReversed:function(){return ct},setTest:function(mt){mt?ut(n.DEPTH_TEST):Dt(n.DEPTH_TEST)},setMask:function(mt){$!==mt&&!L&&(n.depthMask(mt),$=mt)},setFunc:function(mt){if(ct&&(mt=H0[mt]),J!==mt){switch(mt){case al:n.depthFunc(n.NEVER);break;case ol:n.depthFunc(n.ALWAYS);break;case ll:n.depthFunc(n.LESS);break;case ps:n.depthFunc(n.LEQUAL);break;case cl:n.depthFunc(n.EQUAL);break;case hl:n.depthFunc(n.GEQUAL);break;case ul:n.depthFunc(n.GREATER);break;case dl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=mt}},setLocked:function(mt){L=mt},setClear:function(mt){gt!==mt&&(ct&&(mt=1-mt),n.clearDepth(mt),gt=mt)},reset:function(){L=!1,$=null,J=null,gt=null,ct=!1}}}function s(){let L=!1,ct=null,$=null,J=null,gt=null,mt=null,Ot=null,ue=null,Ct=null;return{setTest:function(Ft){L||(Ft?ut(n.STENCIL_TEST):Dt(n.STENCIL_TEST))},setMask:function(Ft){ct!==Ft&&!L&&(n.stencilMask(Ft),ct=Ft)},setFunc:function(Ft,xe,Ve){($!==Ft||J!==xe||gt!==Ve)&&(n.stencilFunc(Ft,xe,Ve),$=Ft,J=xe,gt=Ve)},setOp:function(Ft,xe,Ve){(mt!==Ft||Ot!==xe||ue!==Ve)&&(n.stencilOp(Ft,xe,Ve),mt=Ft,Ot=xe,ue=Ve)},setLocked:function(Ft){L=Ft},setClear:function(Ft){Ct!==Ft&&(n.clearStencil(Ft),Ct=Ft)},reset:function(){L=!1,ct=null,$=null,J=null,gt=null,mt=null,Ot=null,ue=null,Ct=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,p=[],m=null,_=!1,g=null,u=null,w=null,S=null,x=null,D=null,A=null,T=new Ut(0,0,0),I=0,b=!1,v=null,P=null,H=null,z=null,q=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,nt=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=nt>=1):Y.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=nt>=2);let pt=null,xt={},Rt=n.getParameter(n.SCISSOR_BOX),Gt=n.getParameter(n.VIEWPORT),re=new _e().fromArray(Rt),Z=new _e().fromArray(Gt);function it(L,ct,$,J){let gt=new Uint8Array(4),mt=n.createTexture();n.bindTexture(L,mt),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ot=0;Ot<$;Ot++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ct,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,gt):n.texImage2D(ct+Ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,gt);return mt}let lt={};lt[n.TEXTURE_2D]=it(n.TEXTURE_2D,n.TEXTURE_2D,1),lt[n.TEXTURE_CUBE_MAP]=it(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[n.TEXTURE_2D_ARRAY]=it(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),lt[n.TEXTURE_3D]=it(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ut(n.DEPTH_TEST),a.setFunc(ps),Xt(!1),$t(dh),ut(n.CULL_FACE),N(di);function ut(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function Dt(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Nt(L,ct){return d[L]!==ct?(n.bindFramebuffer(L,ct),d[L]=ct,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ct),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ct),!0):!1}function Bt(L,ct){let $=p,J=!1;if(L){$=f.get(ct),$===void 0&&($=[],f.set(ct,$));let gt=L.textures;if($.length!==gt.length||$[0]!==n.COLOR_ATTACHMENT0){for(let mt=0,Ot=gt.length;mt<Ot;mt++)$[mt]=n.COLOR_ATTACHMENT0+mt;$.length=gt.length,J=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,J=!0);J&&n.drawBuffers($)}function he(L){return m!==L?(n.useProgram(L),m=L,!0):!1}let Yt={[Ai]:n.FUNC_ADD,[ef]:n.FUNC_SUBTRACT,[nf]:n.FUNC_REVERSE_SUBTRACT};Yt[sf]=n.MIN,Yt[rf]=n.MAX;let vt={[af]:n.ZERO,[of]:n.ONE,[lf]:n.SRC_COLOR,[sl]:n.SRC_ALPHA,[pf]:n.SRC_ALPHA_SATURATE,[df]:n.DST_COLOR,[hf]:n.DST_ALPHA,[cf]:n.ONE_MINUS_SRC_COLOR,[rl]:n.ONE_MINUS_SRC_ALPHA,[ff]:n.ONE_MINUS_DST_COLOR,[uf]:n.ONE_MINUS_DST_ALPHA,[mf]:n.CONSTANT_COLOR,[gf]:n.ONE_MINUS_CONSTANT_COLOR,[_f]:n.CONSTANT_ALPHA,[xf]:n.ONE_MINUS_CONSTANT_ALPHA};function N(L,ct,$,J,gt,mt,Ot,ue,Ct,Ft){if(L===di){_===!0&&(Dt(n.BLEND),_=!1);return}if(_===!1&&(ut(n.BLEND),_=!0),L!==tf){if(L!==g||Ft!==b){if((u!==Ai||x!==Ai)&&(n.blendEquation(n.FUNC_ADD),u=Ai,x=Ai),Ft)switch(L){case hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fh:n.blendFunc(n.ONE,n.ONE);break;case ph:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ph:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,S=null,D=null,A=null,T.set(0,0,0),I=0,g=L,b=Ft}return}gt=gt||ct,mt=mt||$,Ot=Ot||J,(ct!==u||gt!==x)&&(n.blendEquationSeparate(Yt[ct],Yt[gt]),u=ct,x=gt),($!==w||J!==S||mt!==D||Ot!==A)&&(n.blendFuncSeparate(vt[$],vt[J],vt[mt],vt[Ot]),w=$,S=J,D=mt,A=Ot),(ue.equals(T)===!1||Ct!==I)&&(n.blendColor(ue.r,ue.g,ue.b,Ct),T.copy(ue),I=Ct),g=L,b=!1}function Fe(L,ct){L.side===We?Dt(n.CULL_FACE):ut(n.CULL_FACE);let $=L.side===Xe;ct&&($=!$),Xt($),L.blending===hs&&L.transparent===!1?N(di):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let J=L.stencilWrite;o.setTest(J),J&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ee(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ut(n.SAMPLE_ALPHA_TO_COVERAGE):Dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(L){v!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),v=L)}function $t(L){L!==Jd?(ut(n.CULL_FACE),L!==P&&(L===dh?n.cullFace(n.BACK):L===Kd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Dt(n.CULL_FACE),P=L}function Lt(L){L!==H&&(X&&n.lineWidth(L),H=L)}function ee(L,ct,$){L?(ut(n.POLYGON_OFFSET_FILL),(z!==ct||q!==$)&&(n.polygonOffset(ct,$),z=ct,q=$)):Dt(n.POLYGON_OFFSET_FILL)}function It(L){L?ut(n.SCISSOR_TEST):Dt(n.SCISSOR_TEST)}function E(L){L===void 0&&(L=n.TEXTURE0+Q-1),pt!==L&&(n.activeTexture(L),pt=L)}function y(L,ct,$){$===void 0&&(pt===null?$=n.TEXTURE0+Q-1:$=pt);let J=xt[$];J===void 0&&(J={type:void 0,texture:void 0},xt[$]=J),(J.type!==L||J.texture!==ct)&&(pt!==$&&(n.activeTexture($),pt=$),n.bindTexture(L,ct||lt[L]),J.type=L,J.texture=ct)}function B(){let L=xt[pt];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function R(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function k(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(L){re.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),re.copy(L))}function at(L){Z.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Z.copy(L))}function St(L,ct){let $=c.get(ct);$===void 0&&($=new WeakMap,c.set(ct,$));let J=$.get(L);J===void 0&&(J=n.getUniformBlockIndex(ct,L.name),$.set(L,J))}function Mt(L,ct){let J=c.get(ct).get(L);l.get(ct)!==J&&(n.uniformBlockBinding(ct,J,L.__bindingPointIndex),l.set(ct,J))}function Wt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},pt=null,xt={},d={},f=new WeakMap,p=[],m=null,_=!1,g=null,u=null,w=null,S=null,x=null,D=null,A=null,T=new Ut(0,0,0),I=0,b=!1,v=null,P=null,H=null,z=null,q=null,re.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ut,disable:Dt,bindFramebuffer:Nt,drawBuffers:Bt,useProgram:he,setBlending:N,setMaterial:Fe,setFlipSided:Xt,setCullFace:$t,setLineWidth:Lt,setPolygonOffset:ee,setScissorTest:It,activeTexture:E,bindTexture:y,unbindTexture:B,compressedTexImage2D:R,compressedTexImage3D:O,texImage2D:K,texImage3D:dt,updateUBOMapping:St,uniformBlockBinding:Mt,texStorage2D:bt,texStorage3D:j,texSubImage2D:k,texSubImage3D:rt,compressedTexSubImage2D:tt,compressedTexSubImage3D:et,scissor:yt,viewport:at,reset:Wt}}function du(n,t,e,i){let s=G0(i);switch(e){case Uu:return n*t;case Fu:return n*t;case Ou:return n*t*2;case Ic:return n*t/s.components*s.byteLength;case Lc:return n*t/s.components*s.byteLength;case ku:return n*t*2/s.components*s.byteLength;case Dc:return n*t*2/s.components*s.byteLength;case Nu:return n*t*3/s.components*s.byteLength;case gn:return n*t*4/s.components*s.byteLength;case Uc:return n*t*4/s.components*s.byteLength;case Qr:case ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ea:case na:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xl:case vl:return Math.max(n,16)*Math.max(t,8)/4;case _l:case yl:return Math.max(n,8)*Math.max(t,8)/2;case Ml:case bl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Sl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case El:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Al:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Il:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ol:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ia:case kl:case Bl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Bu:case zl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Hl:case Vl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function G0(n){switch(n){case qn:case Iu:return{byteLength:1,components:1};case js:case Lu:case or:return{byteLength:2,components:1};case Rc:case Pc:return{byteLength:2,components:4};case Li:case Cc:case Tn:return{byteLength:4,components:1};case Du:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function W0(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,y){return p?new OffscreenCanvas(E,y):aa("canvas")}function _(E,y,B){let R=1,O=It(E);if((O.width>B||O.height>B)&&(R=B/Math.max(O.width,O.height)),R<1)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap||typeof VideoFrame!="undefined"&&E instanceof VideoFrame){let k=Math.floor(R*O.width),rt=Math.floor(R*O.height);d===void 0&&(d=m(k,rt));let tt=y?m(k,rt):d;return tt.width=k,tt.height=rt,tt.getContext("2d").drawImage(E,0,0,k,rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+k+"x"+rt+")."),tt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),E;return E}function g(E){return E.generateMipmaps}function u(E){n.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(E,y,B,R,O=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let k=y;if(y===n.RED&&(B===n.FLOAT&&(k=n.R32F),B===n.HALF_FLOAT&&(k=n.R16F),B===n.UNSIGNED_BYTE&&(k=n.R8)),y===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(k=n.R8UI),B===n.UNSIGNED_SHORT&&(k=n.R16UI),B===n.UNSIGNED_INT&&(k=n.R32UI),B===n.BYTE&&(k=n.R8I),B===n.SHORT&&(k=n.R16I),B===n.INT&&(k=n.R32I)),y===n.RG&&(B===n.FLOAT&&(k=n.RG32F),B===n.HALF_FLOAT&&(k=n.RG16F),B===n.UNSIGNED_BYTE&&(k=n.RG8)),y===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(k=n.RG8UI),B===n.UNSIGNED_SHORT&&(k=n.RG16UI),B===n.UNSIGNED_INT&&(k=n.RG32UI),B===n.BYTE&&(k=n.RG8I),B===n.SHORT&&(k=n.RG16I),B===n.INT&&(k=n.RG32I)),y===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(k=n.RGB8UI),B===n.UNSIGNED_SHORT&&(k=n.RGB16UI),B===n.UNSIGNED_INT&&(k=n.RGB32UI),B===n.BYTE&&(k=n.RGB8I),B===n.SHORT&&(k=n.RGB16I),B===n.INT&&(k=n.RGB32I)),y===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),B===n.UNSIGNED_INT&&(k=n.RGBA32UI),B===n.BYTE&&(k=n.RGBA8I),B===n.SHORT&&(k=n.RGBA16I),B===n.INT&&(k=n.RGBA32I)),y===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),y===n.RGBA){let rt=O?$a:Jt.getTransfer(R);B===n.FLOAT&&(k=n.RGBA32F),B===n.HALF_FLOAT&&(k=n.RGBA16F),B===n.UNSIGNED_BYTE&&(k=rt===ae?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function x(E,y){let B;return E?y===null||y===Li||y===_s?B=n.DEPTH24_STENCIL8:y===Tn?B=n.DEPTH32F_STENCIL8:y===js&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Li||y===_s?B=n.DEPTH_COMPONENT24:y===Tn?B=n.DEPTH_COMPONENT32F:y===js&&(B=n.DEPTH_COMPONENT16),B}function D(E,y){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==Je&&E.minFilter!==En?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function A(E){let y=E.target;y.removeEventListener("dispose",A),I(y),y.isVideoTexture&&h.delete(y)}function T(E){let y=E.target;y.removeEventListener("dispose",T),v(y)}function I(E){let y=i.get(E);if(y.__webglInit===void 0)return;let B=E.source,R=f.get(B);if(R){let O=R[y.__cacheKey];O.usedTimes--,O.usedTimes===0&&b(E),Object.keys(R).length===0&&f.delete(B)}i.remove(E)}function b(E){let y=i.get(E);n.deleteTexture(y.__webglTexture);let B=E.source,R=f.get(B);delete R[y.__cacheKey],a.memory.textures--}function v(E){let y=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let R=0;R<6;R++){if(Array.isArray(y.__webglFramebuffer[R]))for(let O=0;O<y.__webglFramebuffer[R].length;O++)n.deleteFramebuffer(y.__webglFramebuffer[R][O]);else n.deleteFramebuffer(y.__webglFramebuffer[R]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[R])}else{if(Array.isArray(y.__webglFramebuffer))for(let R=0;R<y.__webglFramebuffer.length;R++)n.deleteFramebuffer(y.__webglFramebuffer[R]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let R=0;R<y.__webglColorRenderbuffer.length;R++)y.__webglColorRenderbuffer[R]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[R]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let B=E.textures;for(let R=0,O=B.length;R<O;R++){let k=i.get(B[R]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),a.memory.textures--),i.remove(B[R])}i.remove(E)}let P=0;function H(){P=0}function z(){let E=P;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),P+=1,E}function q(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function Q(E,y){let B=i.get(E);if(E.isVideoTexture&&Lt(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){let R=E.image;if(R===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(R.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(B,E,y);return}}e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+y)}function X(E,y){let B=i.get(E);if(E.version>0&&B.__version!==E.version){Z(B,E,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+y)}function nt(E,y){let B=i.get(E);if(E.version>0&&B.__version!==E.version){Z(B,E,y);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+y)}function Y(E,y){let B=i.get(E);if(E.version>0&&B.__version!==E.version){it(B,E,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+y)}let pt={[ml]:n.REPEAT,[Pi]:n.CLAMP_TO_EDGE,[gl]:n.MIRRORED_REPEAT},xt={[Je]:n.NEAREST,[Cf]:n.NEAREST_MIPMAP_NEAREST,[wr]:n.NEAREST_MIPMAP_LINEAR,[En]:n.LINEAR,[wo]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},Rt={[Lf]:n.NEVER,[kf]:n.ALWAYS,[Df]:n.LESS,[zu]:n.LEQUAL,[Uf]:n.EQUAL,[Of]:n.GEQUAL,[Nf]:n.GREATER,[Ff]:n.NOTEQUAL};function Gt(E,y){if(y.type===Tn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===En||y.magFilter===wo||y.magFilter===wr||y.magFilter===Ii||y.minFilter===En||y.minFilter===wo||y.minFilter===wr||y.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,pt[y.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,pt[y.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,pt[y.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,xt[y.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,xt[y.minFilter]),y.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Rt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Je||y.minFilter!==wr&&y.minFilter!==Ii||y.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function re(E,y){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",A));let R=y.source,O=f.get(R);O===void 0&&(O={},f.set(R,O));let k=q(y);if(k!==E.__cacheKey){O[k]===void 0&&(O[k]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),O[k].usedTimes++;let rt=O[E.__cacheKey];rt!==void 0&&(O[E.__cacheKey].usedTimes--,rt.usedTimes===0&&b(y)),E.__cacheKey=k,E.__webglTexture=O[k].texture}return B}function Z(E,y,B){let R=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(R=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(R=n.TEXTURE_3D);let O=re(E,y),k=y.source;e.bindTexture(R,E.__webglTexture,n.TEXTURE0+B);let rt=i.get(k);if(k.version!==rt.__version||O===!0){e.activeTexture(n.TEXTURE0+B);let tt=Jt.getPrimaries(Jt.workingColorSpace),et=y.colorSpace===ui?null:Jt.getPrimaries(y.colorSpace),bt=y.colorSpace===ui||tt===et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let j=_(y.image,!1,s.maxTextureSize);j=ee(y,j);let K=r.convert(y.format,y.colorSpace),dt=r.convert(y.type),yt=S(y.internalFormat,K,dt,y.colorSpace,y.isVideoTexture);Gt(R,y);let at,St=y.mipmaps,Mt=y.isVideoTexture!==!0,Wt=rt.__version===void 0||O===!0,L=k.dataReady,ct=D(y,j);if(y.isDepthTexture)yt=x(y.format===xs,y.type),Wt&&(Mt?e.texStorage2D(n.TEXTURE_2D,1,yt,j.width,j.height):e.texImage2D(n.TEXTURE_2D,0,yt,j.width,j.height,0,K,dt,null));else if(y.isDataTexture)if(St.length>0){Mt&&Wt&&e.texStorage2D(n.TEXTURE_2D,ct,yt,St[0].width,St[0].height);for(let $=0,J=St.length;$<J;$++)at=St[$],Mt?L&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,at.width,at.height,K,dt,at.data):e.texImage2D(n.TEXTURE_2D,$,yt,at.width,at.height,0,K,dt,at.data);y.generateMipmaps=!1}else Mt?(Wt&&e.texStorage2D(n.TEXTURE_2D,ct,yt,j.width,j.height),L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,j.width,j.height,K,dt,j.data)):e.texImage2D(n.TEXTURE_2D,0,yt,j.width,j.height,0,K,dt,j.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Mt&&Wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,yt,St[0].width,St[0].height,j.depth);for(let $=0,J=St.length;$<J;$++)if(at=St[$],y.format!==gn)if(K!==null)if(Mt){if(L)if(y.layerUpdates.size>0){let gt=du(at.width,at.height,y.format,y.type);for(let mt of y.layerUpdates){let Ot=at.data.subarray(mt*gt/at.data.BYTES_PER_ELEMENT,(mt+1)*gt/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,mt,at.width,at.height,1,K,Ot)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,at.width,at.height,j.depth,K,at.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,yt,at.width,at.height,j.depth,0,at.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Mt?L&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,at.width,at.height,j.depth,K,dt,at.data):e.texImage3D(n.TEXTURE_2D_ARRAY,$,yt,at.width,at.height,j.depth,0,K,dt,at.data)}else{Mt&&Wt&&e.texStorage2D(n.TEXTURE_2D,ct,yt,St[0].width,St[0].height);for(let $=0,J=St.length;$<J;$++)at=St[$],y.format!==gn?K!==null?Mt?L&&e.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,at.width,at.height,K,at.data):e.compressedTexImage2D(n.TEXTURE_2D,$,yt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?L&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,at.width,at.height,K,dt,at.data):e.texImage2D(n.TEXTURE_2D,$,yt,at.width,at.height,0,K,dt,at.data)}else if(y.isDataArrayTexture)if(Mt){if(Wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,yt,j.width,j.height,j.depth),L)if(y.layerUpdates.size>0){let $=du(j.width,j.height,y.format,y.type);for(let J of y.layerUpdates){let gt=j.data.subarray(J*$/j.data.BYTES_PER_ELEMENT,(J+1)*$/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,j.width,j.height,1,K,dt,gt)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,K,dt,j.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,yt,j.width,j.height,j.depth,0,K,dt,j.data);else if(y.isData3DTexture)Mt?(Wt&&e.texStorage3D(n.TEXTURE_3D,ct,yt,j.width,j.height,j.depth),L&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,K,dt,j.data)):e.texImage3D(n.TEXTURE_3D,0,yt,j.width,j.height,j.depth,0,K,dt,j.data);else if(y.isFramebufferTexture){if(Wt)if(Mt)e.texStorage2D(n.TEXTURE_2D,ct,yt,j.width,j.height);else{let $=j.width,J=j.height;for(let gt=0;gt<ct;gt++)e.texImage2D(n.TEXTURE_2D,gt,yt,$,J,0,K,dt,null),$>>=1,J>>=1}}else if(St.length>0){if(Mt&&Wt){let $=It(St[0]);e.texStorage2D(n.TEXTURE_2D,ct,yt,$.width,$.height)}for(let $=0,J=St.length;$<J;$++)at=St[$],Mt?L&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,K,dt,at):e.texImage2D(n.TEXTURE_2D,$,yt,K,dt,at);y.generateMipmaps=!1}else if(Mt){if(Wt){let $=It(j);e.texStorage2D(n.TEXTURE_2D,ct,yt,$.width,$.height)}L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,K,dt,j)}else e.texImage2D(n.TEXTURE_2D,0,yt,K,dt,j);g(y)&&u(R),rt.__version=k.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function it(E,y,B){if(y.image.length!==6)return;let R=re(E,y),O=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+B);let k=i.get(O);if(O.version!==k.__version||R===!0){e.activeTexture(n.TEXTURE0+B);let rt=Jt.getPrimaries(Jt.workingColorSpace),tt=y.colorSpace===ui?null:Jt.getPrimaries(y.colorSpace),et=y.colorSpace===ui||rt===tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let bt=y.isCompressedTexture||y.image[0].isCompressedTexture,j=y.image[0]&&y.image[0].isDataTexture,K=[];for(let J=0;J<6;J++)!bt&&!j?K[J]=_(y.image[J],!0,s.maxCubemapSize):K[J]=j?y.image[J].image:y.image[J],K[J]=ee(y,K[J]);let dt=K[0],yt=r.convert(y.format,y.colorSpace),at=r.convert(y.type),St=S(y.internalFormat,yt,at,y.colorSpace),Mt=y.isVideoTexture!==!0,Wt=k.__version===void 0||R===!0,L=O.dataReady,ct=D(y,dt);Gt(n.TEXTURE_CUBE_MAP,y);let $;if(bt){Mt&&Wt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,St,dt.width,dt.height);for(let J=0;J<6;J++){$=K[J].mipmaps;for(let gt=0;gt<$.length;gt++){let mt=$[gt];y.format!==gn?yt!==null?Mt?L&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,0,0,mt.width,mt.height,yt,mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,St,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Mt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,0,0,mt.width,mt.height,yt,at,mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,St,mt.width,mt.height,0,yt,at,mt.data)}}}else{if($=y.mipmaps,Mt&&Wt){$.length>0&&ct++;let J=It(K[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,St,J.width,J.height)}for(let J=0;J<6;J++)if(j){Mt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,K[J].width,K[J].height,yt,at,K[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,St,K[J].width,K[J].height,0,yt,at,K[J].data);for(let gt=0;gt<$.length;gt++){let Ot=$[gt].image[J].image;Mt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,0,0,Ot.width,Ot.height,yt,at,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,St,Ot.width,Ot.height,0,yt,at,Ot.data)}}else{Mt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,yt,at,K[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,St,yt,at,K[J]);for(let gt=0;gt<$.length;gt++){let mt=$[gt];Mt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,0,0,yt,at,mt.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,St,yt,at,mt.image[J])}}}g(y)&&u(n.TEXTURE_CUBE_MAP),k.__version=O.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function lt(E,y,B,R,O,k){let rt=r.convert(B.format,B.colorSpace),tt=r.convert(B.type),et=S(B.internalFormat,rt,tt,B.colorSpace),bt=i.get(y),j=i.get(B);if(j.__renderTarget=y,!bt.__hasExternalTextures){let K=Math.max(1,y.width>>k),dt=Math.max(1,y.height>>k);O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?e.texImage3D(O,k,et,K,dt,y.depth,0,rt,tt,null):e.texImage2D(O,k,et,K,dt,0,rt,tt,null)}e.bindFramebuffer(n.FRAMEBUFFER,E),$t(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,R,O,j.__webglTexture,0,Xt(y)):(O===n.TEXTURE_2D||O>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,R,O,j.__webglTexture,k),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(E,y,B){if(n.bindRenderbuffer(n.RENDERBUFFER,E),y.depthBuffer){let R=y.depthTexture,O=R&&R.isDepthTexture?R.type:null,k=x(y.stencilBuffer,O),rt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=Xt(y);$t(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,tt,k,y.width,y.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,tt,k,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,k,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,E)}else{let R=y.textures;for(let O=0;O<R.length;O++){let k=R[O],rt=r.convert(k.format,k.colorSpace),tt=r.convert(k.type),et=S(k.internalFormat,rt,tt,k.colorSpace),bt=Xt(y);B&&$t(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,bt,et,y.width,y.height):$t(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,bt,et,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,et,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Dt(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let R=i.get(y.depthTexture);R.__renderTarget=y,(!R.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Q(y.depthTexture,0);let O=R.__webglTexture,k=Xt(y);if(y.depthTexture.format===us)$t(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0);else if(y.depthTexture.format===xs)$t(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function Nt(E){let y=i.get(E),B=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){let R=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),R){let O=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,R.removeEventListener("dispose",O)};R.addEventListener("dispose",O),y.__depthDisposeCallback=O}y.__boundDepthTexture=R}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Dt(y.__webglFramebuffer,E)}else if(B){y.__webglDepthbuffer=[];for(let R=0;R<6;R++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[R]),y.__webglDepthbuffer[R]===void 0)y.__webglDepthbuffer[R]=n.createRenderbuffer(),ut(y.__webglDepthbuffer[R],E,!1);else{let O=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=y.__webglDepthbuffer[R];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,k)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ut(y.__webglDepthbuffer,E,!1);else{let R=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,O=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,O),n.framebufferRenderbuffer(n.FRAMEBUFFER,R,n.RENDERBUFFER,O)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Bt(E,y,B){let R=i.get(E);y!==void 0&&lt(R.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Nt(E)}function he(E){let y=E.texture,B=i.get(E),R=i.get(y);E.addEventListener("dispose",T);let O=E.textures,k=E.isWebGLCubeRenderTarget===!0,rt=O.length>1;if(rt||(R.__webglTexture===void 0&&(R.__webglTexture=n.createTexture()),R.__version=y.version,a.memory.textures++),k){B.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[tt]=[];for(let et=0;et<y.mipmaps.length;et++)B.__webglFramebuffer[tt][et]=n.createFramebuffer()}else B.__webglFramebuffer[tt]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let tt=0;tt<y.mipmaps.length;tt++)B.__webglFramebuffer[tt]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(rt)for(let tt=0,et=O.length;tt<et;tt++){let bt=i.get(O[tt]);bt.__webglTexture===void 0&&(bt.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&$t(E)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let tt=0;tt<O.length;tt++){let et=O[tt];B.__webglColorRenderbuffer[tt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[tt]);let bt=r.convert(et.format,et.colorSpace),j=r.convert(et.type),K=S(et.internalFormat,bt,j,et.colorSpace,E.isXRRenderTarget===!0),dt=Xt(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,K,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+tt,n.RENDERBUFFER,B.__webglColorRenderbuffer[tt])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ut(B.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture),Gt(n.TEXTURE_CUBE_MAP,y);for(let tt=0;tt<6;tt++)if(y.mipmaps&&y.mipmaps.length>0)for(let et=0;et<y.mipmaps.length;et++)lt(B.__webglFramebuffer[tt][et],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,et);else lt(B.__webglFramebuffer[tt],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);g(y)&&u(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){for(let tt=0,et=O.length;tt<et;tt++){let bt=O[tt],j=i.get(bt);e.bindTexture(n.TEXTURE_2D,j.__webglTexture),Gt(n.TEXTURE_2D,bt),lt(B.__webglFramebuffer,E,bt,n.COLOR_ATTACHMENT0+tt,n.TEXTURE_2D,0),g(bt)&&u(n.TEXTURE_2D)}e.unbindTexture()}else{let tt=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(tt=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(tt,R.__webglTexture),Gt(tt,y),y.mipmaps&&y.mipmaps.length>0)for(let et=0;et<y.mipmaps.length;et++)lt(B.__webglFramebuffer[et],E,y,n.COLOR_ATTACHMENT0,tt,et);else lt(B.__webglFramebuffer,E,y,n.COLOR_ATTACHMENT0,tt,0);g(y)&&u(tt),e.unbindTexture()}E.depthBuffer&&Nt(E)}function Yt(E){let y=E.textures;for(let B=0,R=y.length;B<R;B++){let O=y[B];if(g(O)){let k=w(E),rt=i.get(O).__webglTexture;e.bindTexture(k,rt),u(k),e.unbindTexture()}}}let vt=[],N=[];function Fe(E){if(E.samples>0){if($t(E)===!1){let y=E.textures,B=E.width,R=E.height,O=n.COLOR_BUFFER_BIT,k=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=i.get(E),tt=y.length>1;if(tt)for(let et=0;et<y.length;et++)e.bindFramebuffer(n.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+et,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+et,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let et=0;et<y.length;et++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(O|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(O|=n.STENCIL_BUFFER_BIT)),tt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,rt.__webglColorRenderbuffer[et]);let bt=i.get(y[et]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,bt,0)}n.blitFramebuffer(0,0,B,R,0,0,B,R,O,n.NEAREST),l===!0&&(vt.length=0,N.length=0,vt.push(n.COLOR_ATTACHMENT0+et),E.depthBuffer&&E.resolveDepthBuffer===!1&&(vt.push(k),N.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,vt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),tt)for(let et=0;et<y.length;et++){e.bindFramebuffer(n.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+et,n.RENDERBUFFER,rt.__webglColorRenderbuffer[et]);let bt=i.get(y[et]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+et,n.TEXTURE_2D,bt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Xt(E){return Math.min(s.maxSamples,E.samples)}function $t(E){let y=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Lt(E){let y=a.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function ee(E,y){let B=E.colorSpace,R=E.format,O=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==Ss&&B!==ui&&(Jt.getTransfer(B)===ae?(R!==gn||O!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function It(E){return typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame!="undefined"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=Q,this.setTexture2DArray=X,this.setTexture3D=nt,this.setTextureCube=Y,this.rebindTextures=Bt,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=$t}function X0(n,t){function e(i,s=ui){let r,a=Jt.getTransfer(s);if(i===qn)return n.UNSIGNED_BYTE;if(i===Rc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Pc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Du)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Iu)return n.BYTE;if(i===Lu)return n.SHORT;if(i===js)return n.UNSIGNED_SHORT;if(i===Cc)return n.INT;if(i===Li)return n.UNSIGNED_INT;if(i===Tn)return n.FLOAT;if(i===or)return n.HALF_FLOAT;if(i===Uu)return n.ALPHA;if(i===Nu)return n.RGB;if(i===gn)return n.RGBA;if(i===Fu)return n.LUMINANCE;if(i===Ou)return n.LUMINANCE_ALPHA;if(i===us)return n.DEPTH_COMPONENT;if(i===xs)return n.DEPTH_STENCIL;if(i===Ic)return n.RED;if(i===Lc)return n.RED_INTEGER;if(i===ku)return n.RG;if(i===Dc)return n.RG_INTEGER;if(i===Uc)return n.RGBA_INTEGER;if(i===Qr||i===ta||i===ea||i===na)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_l||i===xl||i===yl||i===vl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===_l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ml||i===bl||i===Sl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ml||i===bl)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Sl)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wl||i===El||i===Tl||i===Al||i===Cl||i===Rl||i===Pl||i===Il||i===Ll||i===Dl||i===Ul||i===Nl||i===Fl||i===Ol)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===wl)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===El)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tl)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Al)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cl)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rl)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pl)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Il)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ll)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dl)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ul)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nl)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fl)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ol)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ia||i===kl||i===Bl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ia)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bu||i===zl||i===Hl||i===Vl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ia)return r.COMPRESSED_RED_RGTC1_EXT;if(i===zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var ic=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},De=class extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},$0={type:"move"},Xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,i),u=this._getHandJoint(c,_);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new De;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,sc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new An({vertexShader:q0,fragmentShader:Y0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new Ui(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rc=class extends Yn{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,m=null,_=new sc,g=e.getContextAttributes(),u=null,w=null,S=[],x=[],D=new ht,A=null,T=new Be;T.viewport=new _e;let I=new Be;I.viewport=new _e;let b=[T,I],v=new ic,P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=S[Z];return it===void 0&&(it=new Xs,S[Z]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=S[Z];return it===void 0&&(it=new Xs,S[Z]=it),it.getGripSpace()},this.getHand=function(Z){let it=S[Z];return it===void 0&&(it=new Xs,S[Z]=it),it.getHandSpace()};function z(Z){let it=x.indexOf(Z.inputSource);if(it===-1)return;let lt=S[it];lt!==void 0&&(lt.update(Z.inputSource,Z.frame,c||a),lt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function q(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",Q);for(let Z=0;Z<S.length;Z++){let it=x[Z];it!==null&&(x[Z]=null,S[Z].disconnect(it))}P=null,H=null,_.reset(),t.setRenderTarget(u),p=null,f=null,d=null,s=null,w=null,re.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",q),s.addEventListener("inputsourceschange",Q),g.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let it={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new jn(p.framebufferWidth,p.framebufferHeight,{format:gn,type:qn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let it=null,lt=null,ut=null;g.depth&&(ut=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=g.stencil?xs:us,lt=g.stencil?_s:Li);let Dt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Dt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new jn(f.textureWidth,f.textureHeight,{format:gn,type:qn,depthTexture:new ma(f.textureWidth,f.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),re.setContext(s),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Q(Z){for(let it=0;it<Z.removed.length;it++){let lt=Z.removed[it],ut=x.indexOf(lt);ut>=0&&(x[ut]=null,S[ut].disconnect(lt))}for(let it=0;it<Z.added.length;it++){let lt=Z.added[it],ut=x.indexOf(lt);if(ut===-1){for(let Nt=0;Nt<S.length;Nt++)if(Nt>=x.length){x.push(lt),ut=Nt;break}else if(x[Nt]===null){x[Nt]=lt,ut=Nt;break}if(ut===-1)break}let Dt=S[ut];Dt&&Dt.connect(lt)}}let X=new C,nt=new C;function Y(Z,it,lt){X.setFromMatrixPosition(it.matrixWorld),nt.setFromMatrixPosition(lt.matrixWorld);let ut=X.distanceTo(nt),Dt=it.projectionMatrix.elements,Nt=lt.projectionMatrix.elements,Bt=Dt[14]/(Dt[10]-1),he=Dt[14]/(Dt[10]+1),Yt=(Dt[9]+1)/Dt[5],vt=(Dt[9]-1)/Dt[5],N=(Dt[8]-1)/Dt[0],Fe=(Nt[8]+1)/Nt[0],Xt=Bt*N,$t=Bt*Fe,Lt=ut/(-N+Fe),ee=Lt*-N;if(it.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ee),Z.translateZ(Lt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Dt[10]===-1)Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let It=Bt+Lt,E=he+Lt,y=Xt-ee,B=$t+(ut-ee),R=Yt*he/E*It,O=vt*he/E*It;Z.projectionMatrix.makePerspective(y,B,R,O,It,E),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function pt(Z,it){it===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let it=Z.near,lt=Z.far;_.texture!==null&&(_.depthNear>0&&(it=_.depthNear),_.depthFar>0&&(lt=_.depthFar)),v.near=I.near=T.near=it,v.far=I.far=T.far=lt,(P!==v.near||H!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,H=v.far),T.layers.mask=Z.layers.mask|2,I.layers.mask=Z.layers.mask|4,v.layers.mask=T.layers.mask|I.layers.mask;let ut=Z.parent,Dt=v.cameras;pt(v,ut);for(let Nt=0;Nt<Dt.length;Nt++)pt(Dt[Nt],ut);Dt.length===2?Y(v,T,I):v.projectionMatrix.copy(T.projectionMatrix),xt(Z,v,ut)};function xt(Z,it,lt){lt===null?Z.matrix.copy(it.matrixWorld):(Z.matrix.copy(lt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Zs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let Rt=null;function Gt(Z,it){if(h=it.getViewerPose(c||a),m=it,h!==null){let lt=h.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let ut=!1;lt.length!==v.cameras.length&&(v.cameras.length=0,ut=!0);for(let Nt=0;Nt<lt.length;Nt++){let Bt=lt[Nt],he=null;if(p!==null)he=p.getViewport(Bt);else{let vt=d.getViewSubImage(f,Bt);he=vt.viewport,Nt===0&&(t.setRenderTargetTextures(w,vt.colorTexture,f.ignoreDepthValues?void 0:vt.depthStencilTexture),t.setRenderTarget(w))}let Yt=b[Nt];Yt===void 0&&(Yt=new Be,Yt.layers.enable(Nt),Yt.viewport=new _e,b[Nt]=Yt),Yt.matrix.fromArray(Bt.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(Bt.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(he.x,he.y,he.width,he.height),Nt===0&&(v.matrix.copy(Yt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ut===!0&&v.cameras.push(Yt)}let Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){let Nt=d.getDepthInformation(lt[0]);Nt&&Nt.isValid&&Nt.texture&&_.init(t,Nt,s.renderState)}}for(let lt=0;lt<S.length;lt++){let ut=x[lt],Dt=S[lt];ut!==null&&Dt!==void 0&&Dt.update(ut,it,c||a)}Rt&&Rt(Z,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),m=null}let re=new Wu;re.setAnimationLoop(Gt),this.setAnimationLoop=function(Z){Rt=Z},this.dispose=function(){}}},Ei=new xn,j0=new se;function Z0(n,t){function e(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,Gu(n)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function s(g,u,w,S,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(g,u):u.isMeshToonMaterial?(r(g,u),d(g,u)):u.isMeshPhongMaterial?(r(g,u),h(g,u)):u.isMeshStandardMaterial?(r(g,u),f(g,u),u.isMeshPhysicalMaterial&&p(g,u,x)):u.isMeshMatcapMaterial?(r(g,u),m(g,u)):u.isMeshDepthMaterial?r(g,u):u.isMeshDistanceMaterial?(r(g,u),_(g,u)):u.isMeshNormalMaterial?r(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?l(g,u,w,S):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,e(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,e(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,e(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===Xe&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,e(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===Xe&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,e(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,e(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);let w=t.get(u),S=w.envMap,x=w.envMapRotation;S&&(g.envMap.value=S,Ei.copy(x),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),g.envMapRotation.value.setFromMatrix4(j0.makeRotationFromEuler(Ei)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,e(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,w,S){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*w,g.scale.value=S*.5,u.map&&(g.map.value=u.map,e(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,e(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,e(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,e(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function h(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function d(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function f(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,w){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Xe&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,u){u.matcap&&(g.matcap.value=u.matcap)}function _(g,u){let w=t.get(u).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function J0(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,S){let x=S.program;i.uniformBlockBinding(w,x)}function c(w,S){let x=s[w.id];x===void 0&&(m(w),x=h(w),s[w.id]=x,w.addEventListener("dispose",g));let D=S.program;i.updateUBOMapping(w,D);let A=t.render.frame;r[w.id]!==A&&(f(w),r[w.id]=A)}function h(w){let S=d();w.__bindingPointIndex=S;let x=n.createBuffer(),D=w.__size,A=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,D,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,x),x}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let S=s[w.id],x=w.uniforms,D=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let A=0,T=x.length;A<T;A++){let I=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,v=I.length;b<v;b++){let P=I[b];if(p(P,A,b,D)===!0){let H=P.__offset,z=Array.isArray(P.value)?P.value:[P.value],q=0;for(let Q=0;Q<z.length;Q++){let X=z[Q],nt=_(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,H+q,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,q),q+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,S,x,D){let A=w.value,T=S+"_"+x;if(D[T]===void 0)return typeof A=="number"||typeof A=="boolean"?D[T]=A:D[T]=A.clone(),!0;{let I=D[T];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return D[T]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function m(w){let S=w.uniforms,x=0,D=16;for(let T=0,I=S.length;T<I;T++){let b=Array.isArray(S[T])?S[T]:[S[T]];for(let v=0,P=b.length;v<P;v++){let H=b[v],z=Array.isArray(H.value)?H.value:[H.value];for(let q=0,Q=z.length;q<Q;q++){let X=z[q],nt=_(X),Y=x%D,pt=Y%nt.boundary,xt=Y+pt;x+=pt,xt!==0&&D-xt<nt.storage&&(x+=D-xt),H.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=nt.storage}}}let A=x%D;return A>0&&(x+=D-A),w.__size=x,w.__cache={},this}function _(w){let S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function g(w){let S=w.target;S.removeEventListener("dispose",g);let x=a.indexOf(S.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function u(){for(let w in s)n.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}var ga=class{constructor(t={}){let{canvas:e=ep(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),_=new Int32Array(4),g=null,u=null,w=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this.toneMapping=fi,this.toneMappingExposure=1;let x=this,D=!1,A=0,T=0,I=null,b=-1,v=null,P=new _e,H=new _e,z=null,q=new Ut(0),Q=0,X=e.width,nt=e.height,Y=1,pt=null,xt=null,Rt=new _e(0,0,X,nt),Gt=new _e(0,0,X,nt),re=!1,Z=new Ks,it=!1,lt=!1,ut=new se,Dt=new se,Nt=new C,Bt=new _e,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Yt=!1;function vt(){return I===null?Y:1}let N=i;function Fe(M,U){return e.getContext(M,U)}try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ac}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),N===null){let U="webgl2";if(N=Fe(U,M),N===null)throw Fe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Xt,$t,Lt,ee,It,E,y,B,R,O,k,rt,tt,et,bt,j,K,dt,yt,at,St,Mt,Wt,L;function ct(){Xt=new fm(N),Xt.init(),Mt=new X0(N,Xt),$t=new om(N,Xt,t,Mt),Lt=new V0(N,Xt),$t.reverseDepthBuffer&&f&&Lt.buffers.depth.setReversed(!0),ee=new gm(N),It=new R0,E=new W0(N,Xt,Lt,It,$t,Mt,ee),y=new cm(x),B=new dm(x),R=new Sp(N),Wt=new rm(N,R),O=new pm(N,R,ee,Wt),k=new xm(N,O,R,ee),yt=new _m(N,$t,E),j=new lm(It),rt=new C0(x,y,B,Xt,$t,Wt,j),tt=new Z0(x,It),et=new I0,bt=new O0(Xt),dt=new sm(x,y,B,Lt,k,p,l),K=new z0(x,k,$t),L=new J0(N,ee,$t,Lt),at=new am(N,Xt,ee),St=new mm(N,Xt,ee),ee.programs=rt.programs,x.capabilities=$t,x.extensions=Xt,x.properties=It,x.renderLists=et,x.shadowMap=K,x.state=Lt,x.info=ee}ct();let $=new rc(x,N);this.xr=$,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let M=Xt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Xt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(M){M!==void 0&&(Y=M,this.setSize(X,nt,!1))},this.getSize=function(M){return M.set(X,nt)},this.setSize=function(M,U,V=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,nt=U,e.width=Math.floor(M*Y),e.height=Math.floor(U*Y),V===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(X*Y,nt*Y).floor()},this.setDrawingBufferSize=function(M,U,V){X=M,nt=U,Y=V,e.width=Math.floor(M*V),e.height=Math.floor(U*V),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(Rt)},this.setViewport=function(M,U,V,G){M.isVector4?Rt.set(M.x,M.y,M.z,M.w):Rt.set(M,U,V,G),Lt.viewport(P.copy(Rt).multiplyScalar(Y).round())},this.getScissor=function(M){return M.copy(Gt)},this.setScissor=function(M,U,V,G){M.isVector4?Gt.set(M.x,M.y,M.z,M.w):Gt.set(M,U,V,G),Lt.scissor(H.copy(Gt).multiplyScalar(Y).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(M){Lt.setScissorTest(re=M)},this.setOpaqueSort=function(M){pt=M},this.setTransparentSort=function(M){xt=M},this.getClearColor=function(M){return M.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(M=!0,U=!0,V=!0){let G=0;if(M){let F=!1;if(I!==null){let ot=I.texture.format;F=ot===Uc||ot===Dc||ot===Lc}if(F){let ot=I.texture.type,_t=ot===qn||ot===Li||ot===js||ot===_s||ot===Rc||ot===Pc,wt=dt.getClearColor(),Et=dt.getClearAlpha(),kt=wt.r,zt=wt.g,Tt=wt.b;_t?(m[0]=kt,m[1]=zt,m[2]=Tt,m[3]=Et,N.clearBufferuiv(N.COLOR,0,m)):(_[0]=kt,_[1]=zt,_[2]=Tt,_[3]=Et,N.clearBufferiv(N.COLOR,0,_))}else G|=N.COLOR_BUFFER_BIT}U&&(G|=N.DEPTH_BUFFER_BIT),V&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),et.dispose(),bt.dispose(),It.dispose(),y.dispose(),B.dispose(),k.dispose(),Wt.dispose(),L.dispose(),rt.dispose(),$.dispose(),$.removeEventListener("sessionstart",hn),$.removeEventListener("sessionend",Wi),yi.stop()};function J(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let M=ee.autoReset,U=K.enabled,V=K.autoUpdate,G=K.needsUpdate,F=K.type;ct(),ee.autoReset=M,K.enabled=U,K.autoUpdate=V,K.needsUpdate=G,K.type=F}function mt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ot(M){let U=M.target;U.removeEventListener("dispose",Ot),ue(U)}function ue(M){Ct(M),It.remove(M)}function Ct(M){let U=It.get(M).programs;U!==void 0&&(U.forEach(function(V){rt.releaseProgram(V)}),M.isShaderMaterial&&rt.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,V,G,F,ot){U===null&&(U=he);let _t=F.isMesh&&F.matrixWorld.determinant()<0,wt=Yd(M,U,V,G,F);Lt.setMaterial(G,_t);let Et=V.index,kt=1;if(G.wireframe===!0){if(Et=O.getWireframeAttribute(V),Et===void 0)return;kt=2}let zt=V.drawRange,Tt=V.attributes.position,Kt=zt.start*kt,ce=(zt.start+zt.count)*kt;ot!==null&&(Kt=Math.max(Kt,ot.start*kt),ce=Math.min(ce,(ot.start+ot.count)*kt)),Et!==null?(Kt=Math.max(Kt,0),ce=Math.min(ce,Et.count)):Tt!=null&&(Kt=Math.max(Kt,0),ce=Math.min(ce,Tt.count));let de=ce-Kt;if(de<0||de===1/0)return;Wt.setup(F,G,wt,V,Et);let Ge,ne=at;if(Et!==null&&(Ge=R.get(Et),ne=St,ne.setIndex(Ge)),F.isMesh)G.wireframe===!0?(Lt.setLineWidth(G.wireframeLinewidth*vt()),ne.setMode(N.LINES)):ne.setMode(N.TRIANGLES);else if(F.isLine){let Pt=G.linewidth;Pt===void 0&&(Pt=1),Lt.setLineWidth(Pt*vt()),F.isLineSegments?ne.setMode(N.LINES):F.isLineLoop?ne.setMode(N.LINE_LOOP):ne.setMode(N.LINE_STRIP)}else F.isPoints?ne.setMode(N.POINTS):F.isSprite&&ne.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ne.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))ne.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Pt=F._multiDrawStarts,kn=F._multiDrawCounts,ie=F._multiDrawCount,un=Et?R.get(Et).bytesPerElement:1,Xi=It.get(G).currentProgram.getUniforms();for(let Ye=0;Ye<ie;Ye++)Xi.setValue(N,"_gl_DrawID",Ye),ne.render(Pt[Ye]/un,kn[Ye])}else if(F.isInstancedMesh)ne.renderInstances(Kt,de,F.count);else if(V.isInstancedBufferGeometry){let Pt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,kn=Math.min(V.instanceCount,Pt);ne.renderInstances(Kt,de,kn)}else ne.render(Kt,de)};function Ft(M,U,V){M.transparent===!0&&M.side===We&&M.forceSinglePass===!1?(M.side=Xe,M.needsUpdate=!0,Sr(M,U,V),M.side=pi,M.needsUpdate=!0,Sr(M,U,V),M.side=We):Sr(M,U,V)}this.compile=function(M,U,V=null){V===null&&(V=M),u=bt.get(V),u.init(U),S.push(u),V.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),M!==V&&M.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),u.setupLights();let G=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ot=F.material;if(ot)if(Array.isArray(ot))for(let _t=0;_t<ot.length;_t++){let wt=ot[_t];Ft(wt,V,F),G.add(wt)}else Ft(ot,V,F),G.add(ot)}),S.pop(),u=null,G},this.compileAsync=function(M,U,V=null){let G=this.compile(M,U,V);return new Promise(F=>{function ot(){if(G.forEach(function(_t){It.get(_t).currentProgram.isReady()&&G.delete(_t)}),G.size===0){F(M);return}setTimeout(ot,10)}Xt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let xe=null;function Ve(M){xe&&xe(M)}function hn(){yi.stop()}function Wi(){yi.start()}let yi=new Wu;yi.setAnimationLoop(Ve),typeof self!="undefined"&&yi.setContext(self),this.setAnimationLoop=function(M){xe=M,$.setAnimationLoop(M),M===null?yi.stop():yi.start()},$.addEventListener("sessionstart",hn),$.addEventListener("sessionend",Wi),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(U),U=$.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,U,I),u=bt.get(M,S.length),u.init(U),S.push(u),Dt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Z.setFromProjectionMatrix(Dt),lt=this.localClippingEnabled,it=j.init(this.clippingPlanes,lt),g=et.get(M,w.length),g.init(),w.push(g),$.enabled===!0&&$.isPresenting===!0){let ot=x.xr.getDepthSensingMesh();ot!==null&&So(ot,U,-1/0,x.sortObjects)}So(M,U,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(pt,xt),Yt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Yt&&dt.addToRenderList(g,M),this.info.render.frame++,it===!0&&j.beginShadows();let V=u.state.shadowsArray;K.render(V,M,U),it===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=g.opaque,F=g.transmissive;if(u.setupLights(),U.isArrayCamera){let ot=U.cameras;if(F.length>0)for(let _t=0,wt=ot.length;_t<wt;_t++){let Et=ot[_t];oh(G,F,M,Et)}Yt&&dt.render(M);for(let _t=0,wt=ot.length;_t<wt;_t++){let Et=ot[_t];ah(g,M,Et,Et.viewport)}}else F.length>0&&oh(G,F,M,U),Yt&&dt.render(M),ah(g,M,U);I!==null&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),M.isScene===!0&&M.onAfterRender(x,M,U),Wt.resetDefaultState(),b=-1,v=null,S.pop(),S.length>0?(u=S[S.length-1],it===!0&&j.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function So(M,U,V,G){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Z.intersectsSprite(M)){G&&Bt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Dt);let _t=k.update(M),wt=M.material;wt.visible&&g.push(M,_t,wt,V,Bt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Z.intersectsObject(M))){let _t=k.update(M),wt=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Bt.copy(M.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Bt.copy(_t.boundingSphere.center)),Bt.applyMatrix4(M.matrixWorld).applyMatrix4(Dt)),Array.isArray(wt)){let Et=_t.groups;for(let kt=0,zt=Et.length;kt<zt;kt++){let Tt=Et[kt],Kt=wt[Tt.materialIndex];Kt&&Kt.visible&&g.push(M,_t,Kt,V,Bt.z,Tt)}}else wt.visible&&g.push(M,_t,wt,V,Bt.z,null)}}let ot=M.children;for(let _t=0,wt=ot.length;_t<wt;_t++)So(ot[_t],U,V,G)}function ah(M,U,V,G){let F=M.opaque,ot=M.transmissive,_t=M.transparent;u.setupLightsView(V),it===!0&&j.setGlobalState(x.clippingPlanes,V),G&&Lt.viewport(P.copy(G)),F.length>0&&br(F,U,V),ot.length>0&&br(ot,U,V),_t.length>0&&br(_t,U,V),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function oh(M,U,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new jn(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?or:qn,minFilter:Ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));let ot=u.state.transmissionRenderTarget[G.id],_t=G.viewport||P;ot.setSize(_t.z,_t.w);let wt=x.getRenderTarget();x.setRenderTarget(ot),x.getClearColor(q),Q=x.getClearAlpha(),Q<1&&x.setClearColor(16777215,.5),x.clear(),Yt&&dt.render(V);let Et=x.toneMapping;x.toneMapping=fi;let kt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),it===!0&&j.setGlobalState(x.clippingPlanes,G),br(M,V,G),E.updateMultisampleRenderTarget(ot),E.updateRenderTargetMipmap(ot),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Tt=0,Kt=U.length;Tt<Kt;Tt++){let ce=U[Tt],de=ce.object,Ge=ce.geometry,ne=ce.material,Pt=ce.group;if(ne.side===We&&de.layers.test(G.layers)){let kn=ne.side;ne.side=Xe,ne.needsUpdate=!0,lh(de,V,G,Ge,ne,Pt),ne.side=kn,ne.needsUpdate=!0,zt=!0}}zt===!0&&(E.updateMultisampleRenderTarget(ot),E.updateRenderTargetMipmap(ot))}x.setRenderTarget(wt),x.setClearColor(q,Q),kt!==void 0&&(G.viewport=kt),x.toneMapping=Et}function br(M,U,V){let G=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ot=M.length;F<ot;F++){let _t=M[F],wt=_t.object,Et=_t.geometry,kt=G===null?_t.material:G,zt=_t.group;wt.layers.test(V.layers)&&lh(wt,U,V,Et,kt,zt)}}function lh(M,U,V,G,F,ot){M.onBeforeRender(x,U,V,G,F,ot),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(x,U,V,G,M,ot),F.transparent===!0&&F.side===We&&F.forceSinglePass===!1?(F.side=Xe,F.needsUpdate=!0,x.renderBufferDirect(V,U,G,F,M,ot),F.side=pi,F.needsUpdate=!0,x.renderBufferDirect(V,U,G,F,M,ot),F.side=We):x.renderBufferDirect(V,U,G,F,M,ot),M.onAfterRender(x,U,V,G,F,ot)}function Sr(M,U,V){U.isScene!==!0&&(U=he);let G=It.get(M),F=u.state.lights,ot=u.state.shadowsArray,_t=F.state.version,wt=rt.getParameters(M,F.state,ot,U,V),Et=rt.getProgramCacheKey(wt),kt=G.programs;G.environment=M.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(M.isMeshStandardMaterial?B:y).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,kt===void 0&&(M.addEventListener("dispose",Ot),kt=new Map,G.programs=kt);let zt=kt.get(Et);if(zt!==void 0){if(G.currentProgram===zt&&G.lightsStateVersion===_t)return hh(M,wt),zt}else wt.uniforms=rt.getUniforms(M),M.onBeforeCompile(wt,x),zt=rt.acquireProgram(wt,Et),kt.set(Et,zt),G.uniforms=wt.uniforms;let Tt=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Tt.clippingPlanes=j.uniform),hh(M,wt),G.needsLights=Zd(M),G.lightsStateVersion=_t,G.needsLights&&(Tt.ambientLightColor.value=F.state.ambient,Tt.lightProbe.value=F.state.probe,Tt.directionalLights.value=F.state.directional,Tt.directionalLightShadows.value=F.state.directionalShadow,Tt.spotLights.value=F.state.spot,Tt.spotLightShadows.value=F.state.spotShadow,Tt.rectAreaLights.value=F.state.rectArea,Tt.ltc_1.value=F.state.rectAreaLTC1,Tt.ltc_2.value=F.state.rectAreaLTC2,Tt.pointLights.value=F.state.point,Tt.pointLightShadows.value=F.state.pointShadow,Tt.hemisphereLights.value=F.state.hemi,Tt.directionalShadowMap.value=F.state.directionalShadowMap,Tt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Tt.spotShadowMap.value=F.state.spotShadowMap,Tt.spotLightMatrix.value=F.state.spotLightMatrix,Tt.spotLightMap.value=F.state.spotLightMap,Tt.pointShadowMap.value=F.state.pointShadowMap,Tt.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=zt,G.uniformsList=null,zt}function ch(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=fs.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function hh(M,U){let V=It.get(M);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Yd(M,U,V,G,F){U.isScene!==!0&&(U=he),E.resetTextureUnits();let ot=U.fog,_t=G.isMeshStandardMaterial?U.environment:null,wt=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ss,Et=(G.isMeshStandardMaterial?B:y).get(G.envMap||_t),kt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,zt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Tt=!!V.morphAttributes.position,Kt=!!V.morphAttributes.normal,ce=!!V.morphAttributes.color,de=fi;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(de=x.toneMapping);let Ge=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ne=Ge!==void 0?Ge.length:0,Pt=It.get(G),kn=u.state.lights;if(it===!0&&(lt===!0||M!==v)){let en=M===v&&G.id===b;j.setState(G,M,en)}let ie=!1;G.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==kn.state.version||Pt.outputColorSpace!==wt||F.isBatchedMesh&&Pt.batching===!1||!F.isBatchedMesh&&Pt.batching===!0||F.isBatchedMesh&&Pt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pt.instancing===!1||!F.isInstancedMesh&&Pt.instancing===!0||F.isSkinnedMesh&&Pt.skinning===!1||!F.isSkinnedMesh&&Pt.skinning===!0||F.isInstancedMesh&&Pt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pt.instancingMorph===!1&&F.morphTexture!==null||Pt.envMap!==Et||G.fog===!0&&Pt.fog!==ot||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==j.numPlanes||Pt.numIntersection!==j.numIntersection)||Pt.vertexAlphas!==kt||Pt.vertexTangents!==zt||Pt.morphTargets!==Tt||Pt.morphNormals!==Kt||Pt.morphColors!==ce||Pt.toneMapping!==de||Pt.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Pt.__version=G.version);let un=Pt.currentProgram;ie===!0&&(un=Sr(G,U,F));let Xi=!1,Ye=!1,Ls=!1,fe=un.getUniforms(),Sn=Pt.uniforms;if(Lt.useProgram(un.program)&&(Xi=!0,Ye=!0,Ls=!0),G.id!==b&&(b=G.id,Ye=!0),Xi||v!==M){Lt.buffers.depth.getReversed()?(ut.copy(M.projectionMatrix),ip(ut),sp(ut),fe.setValue(N,"projectionMatrix",ut)):fe.setValue(N,"projectionMatrix",M.projectionMatrix),fe.setValue(N,"viewMatrix",M.matrixWorldInverse);let ii=fe.map.cameraPosition;ii!==void 0&&ii.setValue(N,Nt.setFromMatrixPosition(M.matrixWorld)),$t.logarithmicDepthBuffer&&fe.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&fe.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),v!==M&&(v=M,Ye=!0,Ls=!0)}if(F.isSkinnedMesh){fe.setOptional(N,F,"bindMatrix"),fe.setOptional(N,F,"bindMatrixInverse");let en=F.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),fe.setValue(N,"boneTexture",en.boneTexture,E))}F.isBatchedMesh&&(fe.setOptional(N,F,"batchingTexture"),fe.setValue(N,"batchingTexture",F._matricesTexture,E),fe.setOptional(N,F,"batchingIdTexture"),fe.setValue(N,"batchingIdTexture",F._indirectTexture,E),fe.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&fe.setValue(N,"batchingColorTexture",F._colorsTexture,E));let Ds=V.morphAttributes;if((Ds.position!==void 0||Ds.normal!==void 0||Ds.color!==void 0)&&yt.update(F,V,un),(Ye||Pt.receiveShadow!==F.receiveShadow)&&(Pt.receiveShadow=F.receiveShadow,fe.setValue(N,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Sn.envMap.value=Et,Sn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(Sn.envMapIntensity.value=U.environmentIntensity),Ye&&(fe.setValue(N,"toneMappingExposure",x.toneMappingExposure),Pt.needsLights&&jd(Sn,Ls),ot&&G.fog===!0&&tt.refreshFogUniforms(Sn,ot),tt.refreshMaterialUniforms(Sn,G,Y,nt,u.state.transmissionRenderTarget[M.id]),fs.upload(N,ch(Pt),Sn,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(fs.upload(N,ch(Pt),Sn,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&fe.setValue(N,"center",F.center),fe.setValue(N,"modelViewMatrix",F.modelViewMatrix),fe.setValue(N,"normalMatrix",F.normalMatrix),fe.setValue(N,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let en=G.uniformsGroups;for(let ii=0,si=en.length;ii<si;ii++){let uh=en[ii];L.update(uh,un),L.bind(uh,un)}}return un}function jd(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Zd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,U,V){It.get(M.texture).__webglTexture=U,It.get(M.depthTexture).__webglTexture=V;let G=It.get(M);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){let V=It.get(M);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,V=0){I=M,A=U,T=V;let G=!0,F=null,ot=!1,_t=!1;if(M){let Et=It.get(M);if(Et.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(N.FRAMEBUFFER,null),G=!1;else if(Et.__webglFramebuffer===void 0)E.setupRenderTarget(M);else if(Et.__hasExternalTextures)E.rebindTextures(M,It.get(M.texture).__webglTexture,It.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Tt=M.depthTexture;if(Et.__boundDepthTexture!==Tt){if(Tt!==null&&It.has(Tt)&&(M.width!==Tt.image.width||M.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(M)}}let kt=M.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(_t=!0);let zt=It.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(zt[U])?F=zt[U][V]:F=zt[U],ot=!0):M.samples>0&&E.useMultisampledRTT(M)===!1?F=It.get(M).__webglMultisampledFramebuffer:Array.isArray(zt)?F=zt[V]:F=zt,P.copy(M.viewport),H.copy(M.scissor),z=M.scissorTest}else P.copy(Rt).multiplyScalar(Y).floor(),H.copy(Gt).multiplyScalar(Y).floor(),z=re;if(Lt.bindFramebuffer(N.FRAMEBUFFER,F)&&G&&Lt.drawBuffers(M,F),Lt.viewport(P),Lt.scissor(H),Lt.setScissorTest(z),ot){let Et=It.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Et.__webglTexture,V)}else if(_t){let Et=It.get(M.texture),kt=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Et.__webglTexture,V||0,kt)}b=-1},this.readRenderTargetPixels=function(M,U,V,G,F,ot,_t){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=It.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_t!==void 0&&(wt=wt[_t]),wt){Lt.bindFramebuffer(N.FRAMEBUFFER,wt);try{let Et=M.texture,kt=Et.format,zt=Et.type;if(!$t.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-G&&V>=0&&V<=M.height-F&&N.readPixels(U,V,G,F,Mt.convert(kt),Mt.convert(zt),ot)}finally{let Et=I!==null?It.get(I).__webglFramebuffer:null;Lt.bindFramebuffer(N.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(M,U,V,G,F,ot,_t){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=It.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_t!==void 0&&(wt=wt[_t]),wt){let Et=M.texture,kt=Et.format,zt=Et.type;if(!$t.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=M.width-G&&V>=0&&V<=M.height-F){Lt.bindFramebuffer(N.FRAMEBUFFER,wt);let Tt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Tt),N.bufferData(N.PIXEL_PACK_BUFFER,ot.byteLength,N.STREAM_READ),N.readPixels(U,V,G,F,Mt.convert(kt),Mt.convert(zt),0);let Kt=I!==null?It.get(I).__webglFramebuffer:null;Lt.bindFramebuffer(N.FRAMEBUFFER,Kt);let ce=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await np(N,ce,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Tt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ot),N.deleteBuffer(Tt),N.deleteSync(ce),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,U=null,V=0){M.isTexture!==!0&&(Hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1]);let G=Math.pow(2,-V),F=Math.floor(M.image.width*G),ot=Math.floor(M.image.height*G),_t=U!==null?U.x:0,wt=U!==null?U.y:0;E.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,_t,wt,F,ot),Lt.unbindTexture()},this.copyTextureToTexture=function(M,U,V=null,G=null,F=0){M.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,M=arguments[1],U=arguments[2],F=arguments[3]||0,V=null);let ot,_t,wt,Et,kt,zt,Tt,Kt,ce,de=M.isCompressedTexture?M.mipmaps[F]:M.image;V!==null?(ot=V.max.x-V.min.x,_t=V.max.y-V.min.y,wt=V.isBox3?V.max.z-V.min.z:1,Et=V.min.x,kt=V.min.y,zt=V.isBox3?V.min.z:0):(ot=de.width,_t=de.height,wt=de.depth||1,Et=0,kt=0,zt=0),G!==null?(Tt=G.x,Kt=G.y,ce=G.z):(Tt=0,Kt=0,ce=0);let Ge=Mt.convert(U.format),ne=Mt.convert(U.type),Pt;U.isData3DTexture?(E.setTexture3D(U,0),Pt=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),Pt=N.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),Pt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);let kn=N.getParameter(N.UNPACK_ROW_LENGTH),ie=N.getParameter(N.UNPACK_IMAGE_HEIGHT),un=N.getParameter(N.UNPACK_SKIP_PIXELS),Xi=N.getParameter(N.UNPACK_SKIP_ROWS),Ye=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,de.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,de.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Et),N.pixelStorei(N.UNPACK_SKIP_ROWS,kt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,zt);let Ls=M.isDataArrayTexture||M.isData3DTexture,fe=U.isDataArrayTexture||U.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){let Sn=It.get(M),Ds=It.get(U),en=It.get(Sn.__renderTarget),ii=It.get(Ds.__renderTarget);Lt.bindFramebuffer(N.READ_FRAMEBUFFER,en.__webglFramebuffer),Lt.bindFramebuffer(N.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let si=0;si<wt;si++)Ls&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,It.get(M).__webglTexture,F,zt+si),M.isDepthTexture?(fe&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,It.get(U).__webglTexture,F,ce+si),N.blitFramebuffer(Et,kt,ot,_t,Tt,Kt,ot,_t,N.DEPTH_BUFFER_BIT,N.NEAREST)):fe?N.copyTexSubImage3D(Pt,F,Tt,Kt,ce+si,Et,kt,ot,_t):N.copyTexSubImage2D(Pt,F,Tt,Kt,ce+si,Et,kt,ot,_t);Lt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else fe?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(Pt,F,Tt,Kt,ce,ot,_t,wt,Ge,ne,de.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Pt,F,Tt,Kt,ce,ot,_t,wt,Ge,de.data):N.texSubImage3D(Pt,F,Tt,Kt,ce,ot,_t,wt,Ge,ne,de):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,Tt,Kt,ot,_t,Ge,ne,de.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,Tt,Kt,de.width,de.height,Ge,de.data):N.texSubImage2D(N.TEXTURE_2D,F,Tt,Kt,ot,_t,Ge,ne,de);N.pixelStorei(N.UNPACK_ROW_LENGTH,kn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ie),N.pixelStorei(N.UNPACK_SKIP_PIXELS,un),N.pixelStorei(N.UNPACK_SKIP_ROWS,Xi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ye),F===0&&U.generateMipmaps&&N.generateMipmap(Pt),Lt.unbindTexture()},this.copyTextureToTexture3D=function(M,U,V=null,G=null,F=0){return M.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,M=arguments[2],U=arguments[3],F=arguments[4]||0),Hs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,U,V,G,F)},this.initRenderTarget=function(M){It.get(M).__webglFramebuffer===void 0&&E.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),Lt.unbindTexture()},this.resetState=function(){A=0,T=0,I=null,Lt.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}};var _a=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},xa=class extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ac=class extends Ke{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Je,h=Je,d,f){super(null,a,o,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ya=class extends Me{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},as=new se,fu=new se,Xr=[],pu=new Zn,K0=new se,ks=new te,Bs=new mi,va=class extends te{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ya(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,K0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,as),pu.copy(t.boundingBox).applyMatrix4(as),this.boundingBox.union(pu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new mi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,as),Bs.copy(t.boundingSphere).applyMatrix4(as),this.boundingSphere.union(Bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(i),t.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,as),fu.multiplyMatrices(i,as),ks.matrixWorld=fu,ks.raycast(t,Xr);for(let a=0,o=Xr.length;a<o;a++){let l=Xr[a];l.instanceId=r,l.object=this,e.push(l)}Xr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ya(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ac(new Float32Array(s*this.count),s,this.count,Ic,Tn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Cn=class extends Jn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ma=new C,ba=new C,mu=new se,zs=new Di,$r=new mi,Ko=new C,gu=new C,Ni=class extends ye{constructor(t=new ge,e=new Cn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Ma.fromBufferAttribute(e,s-1),ba.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ma.distanceTo(ba);t.setAttribute("lineDistance",new Qt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(s),$r.radius+=r,t.ray.intersectsSphere($r)===!1)return;mu.copy(s).invert(),zs.copy(t.ray).applyMatrix4(mu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let p=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=p,g=m-1;_<g;_+=c){let u=h.getX(_),w=h.getX(_+1),S=qr(this,t,zs,l,u,w);S&&e.push(S)}if(this.isLineLoop){let _=h.getX(m-1),g=h.getX(p),u=qr(this,t,zs,l,_,g);u&&e.push(u)}}else{let p=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=p,g=m-1;_<g;_+=c){let u=qr(this,t,zs,l,_,_+1);u&&e.push(u)}if(this.isLineLoop){let _=qr(this,t,zs,l,m-1,p);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function qr(n,t,e,i,s,r){let a=n.geometry.attributes.position;if(Ma.fromBufferAttribute(a,s),ba.fromBufferAttribute(a,r),e.distanceSqToSegment(Ma,ba,Ko,gu)>i)return;Ko.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Ko);if(!(l<t.near||l>t.far))return{distance:l,point:gu.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var _u=new C,xu=new C,vs=class extends Ni{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)_u.fromBufferAttribute(e,s),xu.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+_u.distanceTo(xu);t.setAttribute("lineDistance",new Qt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var an=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],f=i[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ht:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new C,s=[],r=[],a=[],o=new C,l=new se;for(let p=0;p<=t;p++){let m=p/t;s[p]=this.getTangentAt(m,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Pe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Pe(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],p*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Qs=class extends an{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ht){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*d+this.aX,c=f*d+p*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},oc=class extends Qs{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function kc(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;f*=h,p*=h,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Yr=new C,Qo=new kc,tl=new kc,el=new kc,tr=class extends an{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new C){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Yr.subVectors(s[0],s[1]).add(s[0]),c=Yr);let d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Yr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Yr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Qo.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,m,_,g),tl.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,m,_,g),el.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(Qo.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),tl.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),el.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return i.set(Qo.calc(l),tl.calc(l),el.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function yu(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function Q0(n,t){let e=1-n;return e*e*t}function tg(n,t){return 2*(1-n)*n*t}function eg(n,t){return n*n*t}function $s(n,t,e,i){return Q0(n,t)+tg(n,e)+eg(n,i)}function ng(n,t){let e=1-n;return e*e*e*t}function ig(n,t){let e=1-n;return 3*e*e*n*t}function sg(n,t){return 3*(1-n)*n*n*t}function rg(n,t){return n*n*n*t}function qs(n,t,e,i,s){return ng(n,t)+ig(n,e)+sg(n,i)+rg(n,s)}var Sa=class extends an{constructor(t=new ht,e=new ht,i=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ht){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(qs(t,s.x,r.x,a.x,o.x),qs(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},lc=class extends an{constructor(t=new C,e=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new C){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(qs(t,s.x,r.x,a.x,o.x),qs(t,s.y,r.y,a.y,o.y),qs(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wa=class extends an{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},cc=class extends an{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ea=class extends an{constructor(t=new ht,e=new ht,i=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ht){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set($s(t,s.x,r.x,a.x),$s(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ta=class extends an{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set($s(t,s.x,r.x,a.x),$s(t,s.y,r.y,a.y),$s(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Aa=class extends an{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(yu(o,l.x,c.x,h.x,d.x),yu(o,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new ht().fromArray(s))}return this}},hc=Object.freeze({__proto__:null,ArcCurve:oc,CatmullRomCurve3:tr,CubicBezierCurve:Sa,CubicBezierCurve3:lc,EllipseCurve:Qs,LineCurve:wa,LineCurve3:cc,QuadraticBezierCurve:Ea,QuadraticBezierCurve3:Ta,SplineCurve:Aa}),uc=class extends an{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new hc[s.type]().fromJSON(s))}return this}},Ca=class extends uc{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new wa(this.currentPoint.clone(),new ht(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Ea(this.currentPoint.clone(),new ht(t,e),new ht(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new Sa(this.currentPoint.clone(),new ht(t,e),new ht(i,s),new ht(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Aa(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new Qs(t,e,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Ra=class n extends ge{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new C,h=new ht;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let p=i+d/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(o,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Pa=class n extends ge{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],p=[],m=0,_=[],g=i/2,u=0;w(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(f,3)),this.setAttribute("uv",new Qt(p,2));function w(){let x=new C,D=new C,A=0,T=(e-t)/i;for(let I=0;I<=r;I++){let b=[],v=I/r,P=v*(e-t)+t;for(let H=0;H<=s;H++){let z=H/s,q=z*l+o,Q=Math.sin(q),X=Math.cos(q);D.x=P*Q,D.y=-v*i+g,D.z=P*X,d.push(D.x,D.y,D.z),x.set(Q,T,X).normalize(),f.push(x.x,x.y,x.z),p.push(z,1-v),b.push(m++)}_.push(b)}for(let I=0;I<s;I++)for(let b=0;b<r;b++){let v=_[b][I],P=_[b+1][I],H=_[b+1][I+1],z=_[b][I+1];(t>0||b!==0)&&(h.push(v,P,z),A+=3),(e>0||b!==r-1)&&(h.push(P,H,z),A+=3)}c.addGroup(u,A,0),u+=A}function S(x){let D=m,A=new ht,T=new C,I=0,b=x===!0?t:e,v=x===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,g*v,0),f.push(0,v,0),p.push(.5,.5),m++;let P=m;for(let H=0;H<=s;H++){let q=H/s*l+o,Q=Math.cos(q),X=Math.sin(q);T.x=b*X,T.y=g*v,T.z=b*Q,d.push(T.x,T.y,T.z),f.push(0,v,0),A.x=Q*.5+.5,A.y=X*.5*v+.5,p.push(A.x,A.y),m++}for(let H=0;H<s;H++){let z=D+H,q=P+H;x===!0?h.push(q,q+1,z):h.push(q+1,q,z),I+=3}c.addGroup(u,I,x===!0?1:2),u+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},er=class n extends Pa{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var nr=class extends Ca{constructor(t){super(t),this.uuid=zi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Ca().fromJSON(s))}return this}},ag={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=ju(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,d,f,p;if(i&&(r=ug(n,t,r,e)),n.length>80*e){o=c=n[0],l=h=n[1];for(let m=e;m<s;m+=e)d=n[m],f=n[m+1],d<o&&(o=d),f<l&&(l=f),d>c&&(c=d),f>h&&(h=f);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return ir(r,a,e,o,l,p,0),a}};function ju(n,t,e,i,s){let r,a;if(s===bg(n,t,e,i)>0)for(r=t;r<e;r+=i)a=vu(r,n[r],n[r+1],a);else for(r=e-i;r>=t;r-=i)a=vu(r,n[r],n[r+1],a);return a&&ja(a,a.next)&&(rr(a),a=a.next),a}function Fi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ja(e,e.next)||me(e.prev,e,e.next)===0)){if(rr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ir(n,t,e,i,s,r,a){if(!n)return;!a&&r&&gg(n,i,s,r);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?lg(n,i,s,r):og(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),rr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=cg(Fi(n),t,e),ir(n,t,e,i,s,r,2)):a===2&&hg(n,t,e,i,s,r):ir(Fi(n),t,e,i,s,r,1);break}}}function og(n){let t=n.prev,e=n,i=n.next;if(me(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,m=i.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=d&&m.y<=p&&cs(s,o,r,l,a,c,m.x,m.y)&&me(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function lg(n,t,e,i){let s=n.prev,r=n,a=n.next;if(me(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,f=a.y,p=o<l?o<c?o:c:l<c?l:c,m=h<d?h<f?h:f:d<f?d:f,_=o>l?o>c?o:c:l>c?l:c,g=h>d?h>f?h:f:d>f?d:f,u=dc(p,m,t,e,i),w=dc(_,g,t,e,i),S=n.prevZ,x=n.nextZ;for(;S&&S.z>=u&&x&&x.z<=w;){if(S.x>=p&&S.x<=_&&S.y>=m&&S.y<=g&&S!==s&&S!==a&&cs(o,h,l,d,c,f,S.x,S.y)&&me(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=p&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&cs(o,h,l,d,c,f,x.x,x.y)&&me(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=u;){if(S.x>=p&&S.x<=_&&S.y>=m&&S.y<=g&&S!==s&&S!==a&&cs(o,h,l,d,c,f,S.x,S.y)&&me(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=w;){if(x.x>=p&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&cs(o,h,l,d,c,f,x.x,x.y)&&me(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function cg(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!ja(s,r)&&Zu(s,i,i.next,r)&&sr(s,r)&&sr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),rr(i),rr(i.next),i=n=r),i=i.next}while(i!==n);return Fi(i)}function hg(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&yg(a,o)){let l=Ju(a,o);a=Fi(a,a.next),l=Fi(l,l.next),ir(a,t,e,i,s,r,0),ir(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function ug(n,t,e,i){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=ju(n,o,l,i,!1),c===c.next&&(c.steiner=!0),s.push(xg(c));for(s.sort(dg),r=0;r<s.length;r++)e=fg(s[r],e);return e}function dg(n,t){return n.x-t.x}function fg(n,t){let e=pg(n,t);if(!e)return t;let i=Ju(e,n);return Fi(i,i.next),Fi(e,e.next)}function pg(n,t){let e=t,i=-1/0,s,r=n.x,a=n.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,d;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&cs(a<c?r:i,a,l,c,a<c?i:r,a,e.x,e.y)&&(d=Math.abs(a-e.y)/(r-e.x),sr(e,n)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&mg(s,e)))&&(s=e,h=d)),e=e.next;while(e!==o);return s}function mg(n,t){return me(n.prev,n,t.prev)<0&&me(t.next,n,n.next)<0}function gg(n,t,e,i){let s=n;do s.z===0&&(s.z=dc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,_g(s)}function _g(n){let t,e,i,s,r,a,o,l,c=1;do{for(e=n,n=null,r=null,a=0;e;){for(a++,i=e,o=0,t=0;t<c&&(o++,i=i.nextZ,!!i);t++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(a>1);return n}function dc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function xg(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function cs(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function yg(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!vg(n,t)&&(sr(n,t)&&sr(t,n)&&Mg(n,t)&&(me(n.prev,n,t.prev)||me(n,t.prev,t))||ja(n,t)&&me(n.prev,n,n.next)>0&&me(t.prev,t,t.next)>0)}function me(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ja(n,t){return n.x===t.x&&n.y===t.y}function Zu(n,t,e,i){let s=Zr(me(n,t,e)),r=Zr(me(n,t,i)),a=Zr(me(e,i,n)),o=Zr(me(e,i,t));return!!(s!==r&&a!==o||s===0&&jr(n,e,t)||r===0&&jr(n,i,t)||a===0&&jr(e,n,i)||o===0&&jr(e,t,i))}function jr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Zr(n){return n>0?1:n<0?-1:0}function vg(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Zu(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function sr(n,t){return me(n.prev,n,n.next)<0?me(n,t,n.next)>=0&&me(n,n.prev,t)>=0:me(n,t,n.prev)<0||me(n,n.next,t)<0}function Mg(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Ju(n,t){let e=new fc(n.i,n.x,n.y),i=new fc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function vu(n,t,e,i){let s=new fc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function rr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function fc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function bg(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Ys=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Mu(t),bu(i,t);let a=t.length;e.forEach(Mu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,bu(i,e[l]);let o=ag.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Mu(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function bu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Ia=class n extends ge{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,f=(e-t)/s,p=new C,m=new ht;for(let _=0;_<=s;_++){for(let g=0;g<=i;g++){let u=r+g/i*a;p.x=d*Math.cos(u),p.y=d*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,h.push(m.x,m.y)}d+=f}for(let _=0;_<s;_++){let g=_*(i+1);for(let u=0;u<i;u++){let w=u+g,S=w,x=w+i+1,D=w+i+2,A=w+1;o.push(S,x,A),o.push(x,D,A)}}this.setIndex(o),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},La=class n extends ge{constructor(t=new nr([new ht(0,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Qt(s,3)),this.setAttribute("normal",new Qt(r,3)),this.setAttribute("uv",new Qt(a,2));function c(h){let d=s.length/3,f=h.extractPoints(e),p=f.shape,m=f.holes;Ys.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,u=m.length;g<u;g++){let w=m[g];Ys.isClockWise(w)===!0&&(m[g]=w.reverse())}let _=Ys.triangulateShape(p,m);for(let g=0,u=m.length;g<u;g++){let w=m[g];p=p.concat(w)}for(let g=0,u=p.length;g<u;g++){let w=p[g];s.push(w.x,w.y,0),r.push(0,0,1),a.push(w.x,w.y)}for(let g=0,u=_.length;g<u;g++){let w=_[g],S=w[0]+d,x=w[1]+d,D=w[2]+d;i.push(S,x,D),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Sg(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];i.push(a)}return new n(i,t.curveSegments)}};function Sg(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var Ms=class n extends ge{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new C,f=new C,p=[],m=[],_=[],g=[];for(let u=0;u<=i;u++){let w=[],S=u/i,x=0;u===0&&a===0?x=.5/e:u===i&&l===Math.PI&&(x=-.5/e);for(let D=0;D<=e;D++){let A=D/e;d.x=-t*Math.cos(s+A*r)*Math.sin(a+S*o),d.y=t*Math.cos(a+S*o),d.z=t*Math.sin(s+A*r)*Math.sin(a+S*o),m.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),g.push(A+x,1-S),w.push(c++)}h.push(w)}for(let u=0;u<i;u++)for(let w=0;w<e;w++){let S=h[u][w+1],x=h[u][w],D=h[u+1][w],A=h[u+1][w+1];(u!==0||a>0)&&p.push(S,x,A),(u!==i-1||l<Math.PI)&&p.push(x,D,A)}this.setIndex(p),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Da=class n extends ge{constructor(t=new Ta(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new ht,h=new C,d=[],f=[],p=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(f,3)),this.setAttribute("uv",new Qt(p,2));function _(){for(let S=0;S<e;S++)g(S);g(r===!1?e:0),w(),u()}function g(S){h=t.getPointAt(S/e,h);let x=a.normals[S],D=a.binormals[S];for(let A=0;A<=s;A++){let T=A/s*Math.PI*2,I=Math.sin(T),b=-Math.cos(T);l.x=b*x.x+I*D.x,l.y=b*x.y+I*D.y,l.z=b*x.z+I*D.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}function u(){for(let S=1;S<=e;S++)for(let x=1;x<=s;x++){let D=(s+1)*(S-1)+(x-1),A=(s+1)*S+(x-1),T=(s+1)*S+x,I=(s+1)*(S-1)+x;m.push(D,A,I),m.push(A,T,I)}}function w(){for(let S=0;S<=e;S++)for(let x=0;x<=s;x++)c.x=S/e,c.y=x/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new hc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Ua=class extends Jn{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Ut(16777215),this.specular=new Ut(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var on=class extends Jn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Na=class extends Cn{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Jr(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function wg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var bs=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pc=class extends bs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gh,endingEnd:gh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case _h:r=t,o=2*e-i;break;case xh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case _h:a=t,l=2*i-e;break;case xh:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(i-e)/(s-e),_=m*m,g=_*m,u=-f*g+2*f*_-f*m,w=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*m+1,S=(-1-p)*g+(1.5+p)*_+.5*m,x=p*g-p*_;for(let D=0;D!==o;++D)r[D]=u*a[h+D]+w*a[c+D]+S*a[l+D]+x*a[d+D];return r}},mc=class extends bs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),d=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*h;return r}},gc=class extends bs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},yn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Jr(e,this.TimeBufferType),this.values=Jr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Jr(t.times,Array),values:Jr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new gc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case sa:e=this.InterpolantFactoryMethodDiscrete;break;case Gl:e=this.InterpolantFactoryMethodLinear;break;case Eo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sa;case this.InterpolantFactoryMethodLinear:return Gl;case this.InterpolantFactoryMethodSmooth:return Eo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&wg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Eo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,f=d-i,p=d+i;for(let m=0;m!==i;++m){let _=e[d+m];if(_!==e[f+m]||_!==e[p+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,f=a*i;for(let p=0;p!==i;++p)e[f+p]=e[d+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Gl;var Oi=class extends yn{constructor(t,e,i){super(t,e,i)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=sa;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var _c=class extends yn{};_c.prototype.ValueTypeName="color";var xc=class extends yn{};xc.prototype.ValueTypeName="number";var yc=class extends bs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)_n.slerpFlat(r,0,a,c-o,a,c,l);return r}},Fa=class extends yn{InterpolantFactoryMethodLinear(t){return new yc(this.times,this.values,this.getValueSize(),t)}};Fa.prototype.ValueTypeName="quaternion";Fa.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends yn{constructor(t,e,i){super(t,e,i)}};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=sa;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var vc=class extends yn{};vc.prototype.ValueTypeName="vector";var Mc=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],m=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},Eg=new Mc,bc=class{constructor(t){this.manager=t!==void 0?t:Eg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};bc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oa=class extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ka=class extends Oa{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},nl=new se,Su=new C,wu=new C,Sc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ks,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Su.setFromMatrixPosition(t.matrixWorld),e.position.copy(Su),wu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wu),e.updateMatrixWorld(),nl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var wc=class extends Sc{constructor(){super(new fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ba=class extends Oa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new wc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var za=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Eu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Eu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Eu(){return performance.now()}var Bc="\\[\\]\\.:\\/",Tg=new RegExp("["+Bc+"]","g"),zc="[^"+Bc+"]",Ag="[^"+Bc.replace("\\.","")+"]",Cg=/((?:WC+[\/:])*)/.source.replace("WC",zc),Rg=/(WCOD+)?/.source.replace("WCOD",Ag),Pg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zc),Ig=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zc),Lg=new RegExp("^"+Cg+Rg+Pg+Ig+"$"),Dg=["material","materials","bones","map"],Ec=class{constructor(t,e,i){let s=i||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},pe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Tg,"")}static parseTrackName(t){let e=Lg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Dg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=Ec;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var A_=new Float32Array(1);var Tu=new se,Ha=class{constructor(t,e,i=0,s=1/0){this.ray=new Di(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Tu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tu),this}intersectObject(t,e=!0,i=[]){return Tc(t,this,i,e),i.sort(Au),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Tc(t[s],this,i,e);return i.sort(Au),i}};function Au(n,t){return n.distance-t.distance}function Tc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Tc(r[a],t,e,!0)}}var ar=class{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Pe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Cu=new C,Kr,il,Va=class extends ye{constructor(t=new C(0,0,1),e=new C(0,0,0),i=1,s=16776960,r=i*.2,a=r*.2){super(),this.type="ArrowHelper",Kr===void 0&&(Kr=new ge,Kr.setAttribute("position",new Qt([0,0,0,0,1,0],3)),il=new Pa(0,.5,1,5,1),il.translate(0,-.5,0)),this.position.copy(e),this.line=new Ni(Kr,new Cn({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new te(il,new rn({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,r,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Cu.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Cu,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};var Ga=class extends Yn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ac}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ac);var Qu={type:"change"},Vc={type:"start"},ed={type:"end"},Za=new Di,td=new mn,Ug=Math.cos(70*qa.DEG2RAD),Ae=new C,$e=2*Math.PI,oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hc=1e-6,Ja=class extends Ga{constructor(t,e=null){super(t,e),this.state=oe.NONE,this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bi.ROTATE,MIDDLE:Bi.DOLLY,RIGHT:Bi.PAN},this.touches={ONE:Rn.ROTATE,TWO:Rn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new _n,this._lastTargetPosition=new C,this._quat=new _n().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ar,this._sphericalDelta=new ar,this._scale=1,this._panOffset=new C,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new C,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Fg.bind(this),this._onPointerDown=Ng.bind(this),this._onPointerUp=Og.bind(this),this._onContextMenu=Wg.bind(this),this._onMouseWheel=zg.bind(this),this._onKeyDown=Hg.bind(this),this._onTouchStart=Vg.bind(this),this._onTouchMove=Gg.bind(this),this._onMouseDown=kg.bind(this),this._onMouseMove=Bg.bind(this),this._interceptControlDown=Xg.bind(this),this._interceptControlUp=$g.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Qu),this.update(),this.state=oe.NONE}update(t=null){let e=this.object.position;Ae.copy(e).sub(this.target),Ae.applyQuaternion(this._quat),this._spherical.setFromVector3(Ae),this.autoRotate&&this.state===oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=$e:i>Math.PI&&(i-=$e),s<-Math.PI?s+=$e:s>Math.PI&&(s-=$e),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ae.setFromSpherical(this._spherical),Ae.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ae),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ae.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ae.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Za.origin.copy(this.object.position),Za.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Za.direction))<Ug?this.object.lookAt(this.target):(td.setFromNormalAndCoplanarPoint(this.object.up,this.target),Za.intersectPlane(td,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Hc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hc||this._lastTargetPosition.distanceToSquared(this.target)>Hc?(this.dispatchEvent(Qu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?$e/60*this.autoRotateSpeed*t:$e/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ae.setFromMatrixColumn(e,0),Ae.multiplyScalar(-t),this._panOffset.add(Ae)}_panUp(t,e){this.screenSpacePanning===!0?Ae.setFromMatrixColumn(e,1):(Ae.setFromMatrixColumn(e,0),Ae.crossVectors(this.object.up,Ae)),Ae.multiplyScalar(t),this._panOffset.add(Ae)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ae.copy(s).sub(this.target);let r=Ae.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft($e*this._rotateDelta.x/e.clientHeight),this._rotateUp($e*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp($e*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-$e*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft($e*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-$e*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft($e*this._rotateDelta.x/e.clientHeight),this._rotateUp($e*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Ng(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Fg(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Og(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ed),this.state=oe.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function kg(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Bi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=oe.DOLLY;break;case Bi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=oe.ROTATE}break;case Bi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=oe.PAN}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Vc)}function Bg(n){switch(this.state){case oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function zg(n){this.enabled===!1||this.enableZoom===!1||this.state!==oe.NONE||(n.preventDefault(),this.dispatchEvent(Vc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ed))}function Hg(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Vg(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Rn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=oe.TOUCH_ROTATE;break;case Rn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=oe.TOUCH_PAN;break;default:this.state=oe.NONE}break;case 2:switch(this.touches.TWO){case Rn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=oe.TOUCH_DOLLY_PAN;break;case Rn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=oe.TOUCH_DOLLY_ROTATE;break;default:this.state=oe.NONE}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Vc)}function Gg(n){switch(this._trackPointer(n),this.state){case oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=oe.NONE}}function Wg(n){this.enabled!==!1&&n.preventDefault()}function Xg(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $g(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var gi=class extends ye{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new ht(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}},Es=new C,nd=new se,id=new se,sd=new C,rd=new C,Ka=class{constructor(t={}){let e=this,i,s,r,a,o={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:s}},this.render=function(m,_){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),nd.copy(_.matrixWorldInverse),id.multiplyMatrices(_.projectionMatrix,nd),h(m,m,_),p(m)},this.setSize=function(m,_){i=m,s=_,r=i/2,a=s/2,l.style.width=m+"px",l.style.height=_+"px"};function c(m){m.isCSS2DObject&&(m.element.style.display="none");for(let _=0,g=m.children.length;_<g;_++)c(m.children[_])}function h(m,_,g){if(m.visible===!1){c(m);return}if(m.isCSS2DObject){Es.setFromMatrixPosition(m.matrixWorld),Es.applyMatrix4(id);let u=Es.z>=-1&&Es.z<=1&&m.layers.test(g.layers)===!0,w=m.element;w.style.display=u===!0?"":"none",u===!0&&(m.onBeforeRender(e,_,g),w.style.transform="translate("+-100*m.center.x+"%,"+-100*m.center.y+"%)translate("+(Es.x*r+r)+"px,"+(-Es.y*a+a)+"px)",w.parentNode!==l&&l.appendChild(w),m.onAfterRender(e,_,g));let S={distanceToCameraSquared:d(g,m)};o.objects.set(m,S)}for(let u=0,w=m.children.length;u<w;u++)h(m.children[u],_,g)}function d(m,_){return sd.setFromMatrixPosition(m.matrixWorld),rd.setFromMatrixPosition(_.matrixWorld),sd.distanceToSquared(rd)}function f(m){let _=[];return m.traverseVisible(function(g){g.isCSS2DObject&&_.push(g)}),_}function p(m){let _=f(m).sort(function(u,w){if(u.renderOrder!==w.renderOrder)return w.renderOrder-u.renderOrder;let S=o.objects.get(u).distanceToCameraSquared,x=o.objects.get(w).distanceToCameraSquared;return S-x}),g=_.length;for(let u=0,w=_.length;u<w;u++)_[u].element.style.zIndex=g-u}}};var Gc={main:[[121.9062,24.9493],[121.8342,24.8716],[121.8234,24.8547],[121.8162,24.8311],[121.809,24.8058],[121.8054,24.7787],[121.809,24.7534],[121.8198,24.6994],[121.8198,24.6859],[121.8126,24.6724],[121.8162,24.6437],[121.827,24.6234],[121.8522,24.6082],[121.881,24.6048],[121.881,24.5981],[121.8702,24.5998],[121.8594,24.5981],[121.8486,24.5947],[121.8414,24.5896],[121.8522,24.5727],[121.8558,24.5508],[121.8522,24.5305],[121.8306,24.5187],[121.827,24.5103],[121.8306,24.5001],[121.8378,24.4917],[121.8414,24.4816],[121.8306,24.4731],[121.8054,24.4613],[121.7802,24.4326],[121.7802,24.4225],[121.7802,24.3971],[121.7766,24.3887],[121.773,24.3802],[121.7694,24.3701],[121.7658,24.3482],[121.7658,24.3414],[121.7622,24.3363],[121.7586,24.333],[121.7622,24.3262],[121.7658,24.3228],[121.7694,24.3178],[121.773,24.3127],[121.773,24.3093],[121.7658,24.3009],[121.7442,24.2806],[121.7226,24.2519],[121.7046,24.2384],[121.6974,24.2316],[121.701,24.2249],[121.6974,24.2198],[121.6722,24.2012],[121.6614,24.1928],[121.6506,24.1725],[121.6398,24.1303],[121.6146,24.0915],[121.6074,24.0763],[121.6074,24.0611],[121.6146,24.0425],[121.6218,24.0341],[121.6254,24.0307],[121.629,24.0256],[121.629,24.0155],[121.6254,24.002],[121.611,23.9817],[121.6074,23.9699],[121.6074,23.948],[121.593,23.8922],[121.5714,23.8314],[121.539,23.693],[121.521,23.6592],[121.4778,23.4346],[121.4634,23.3434],[121.4526,23.3266],[121.4274,23.2928],[121.4166,23.2759],[121.4094,23.254],[121.4022,23.2151],[121.4022,23.1797],[121.3986,23.1459],[121.3806,23.1104],[121.3734,23.1037],[121.3554,23.0919],[121.3482,23.0834],[121.3446,23.075],[121.3374,23.0547],[121.3194,23.026],[121.3086,22.9804],[121.2978,22.9585],[121.2618,22.9078],[121.2546,22.8977],[121.2042,22.8571],[121.1898,22.8436],[121.1898,22.8335],[121.1898,22.8115],[121.1898,22.8014],[121.1862,22.7913],[121.179,22.7795],[121.161,22.7575],[121.143,22.7423],[121.0818,22.7035],[121.0386,22.663],[121.0278,22.6579],[121.0206,22.6478],[121.0026,22.6005],[120.9918,22.5836],[120.9594,22.5481],[120.9486,22.5262],[120.9414,22.484],[120.9234,22.4249],[120.8874,22.3658],[120.8802,22.3455],[120.8766,22.2898],[120.8766,22.2374],[120.8802,22.0551],[120.873,22.0297],[120.8622,22.0095],[120.8514,22.001],[120.837,21.9875],[120.837,21.9571],[120.8406,21.925],[120.8406,21.9048],[120.8226,21.9284],[120.7974,21.947],[120.7686,21.9588],[120.7362,21.9656],[120.7362,21.9436],[120.729,21.9352],[120.7146,21.9369],[120.7002,21.9487],[120.7002,21.9571],[120.7038,21.9808],[120.6822,22.0145],[120.6822,22.023],[120.6822,22.0297],[120.6822,22.0416],[120.6822,22.0787],[120.6858,22.0905],[120.6966,22.1023],[120.6966,22.1125],[120.621,22.2948],[120.6138,22.305],[120.5922,22.3286],[120.5778,22.3641],[120.5706,22.3742],[120.5382,22.3962],[120.5274,22.4029],[120.5238,22.4046],[120.5166,22.4063],[120.513,22.4198],[120.513,22.4249],[120.495,22.435],[120.459,22.4519],[120.441,22.462],[120.423,22.4772],[120.4122,22.4823],[120.4014,22.4873],[120.3978,22.4857],[120.3906,22.484],[120.3798,22.484],[120.333,22.5194],[120.2862,22.5802],[120.333,22.5262],[120.3294,22.5515],[120.3186,22.565],[120.315,22.5768],[120.2934,22.5988],[120.2574,22.6275],[120.2466,22.6427],[120.2394,22.6596],[120.2466,22.6748],[120.2538,22.69],[120.2466,22.7102],[120.2358,22.7305],[120.2178,22.7575],[120.1998,22.793],[120.1962,22.8082],[120.1962,22.8183],[120.2034,22.8318],[120.2034,22.8403],[120.1998,22.8436],[120.1962,22.847],[120.1926,22.8521],[120.189,22.8605],[120.1782,22.8774],[120.1746,22.8842],[120.1674,22.9314],[120.1638,22.9534],[120.1566,22.9669],[120.1422,22.9804],[120.1602,22.9922],[120.171,23.0142],[120.1674,23.0311],[120.1422,23.0344],[120.1386,23.0277],[120.135,23.0159],[120.1278,23.0074],[120.1134,23.0074],[120.1098,23.0159],[120.1098,23.0395],[120.1062,23.0479],[120.0918,23.0547],[120.0846,23.0479],[120.0774,23.0378],[120.0666,23.0344],[120.0558,23.0429],[120.0522,23.0564],[120.0558,23.0682],[120.0594,23.0767],[120.0702,23.0817],[120.0846,23.0834],[120.0954,23.0868],[120.099,23.0969],[120.0954,23.102],[120.0594,23.1104],[120.0594,23.1172],[120.0882,23.1172],[120.0846,23.1273],[120.0702,23.1391],[120.0594,23.151],[120.063,23.1645],[120.0702,23.1695],[120.081,23.1729],[120.0882,23.1813],[120.0846,23.1965],[120.0774,23.2067],[120.081,23.2168],[120.0882,23.2303],[120.0954,23.2388],[120.0954,23.2472],[120.0954,23.2556],[120.1098,23.286],[120.1134,23.2928],[120.1242,23.2945],[120.1098,23.3029],[120.117,23.3181],[120.1314,23.3181],[120.1422,23.3232],[120.1494,23.3215],[120.1458,23.3333],[120.1386,23.3283],[120.1314,23.3299],[120.1206,23.3299],[120.1206,23.3418],[120.1314,23.3603],[120.1458,23.362],[120.1638,23.362],[120.1494,23.3975],[120.135,23.4262],[120.1422,23.4397],[120.1422,23.4465],[120.1314,23.4515],[120.1314,23.4566],[120.1386,23.465],[120.1422,23.4735],[120.1566,23.492],[120.1242,23.4904],[120.1242,23.5207],[120.1422,23.5376],[120.1422,23.595],[120.1422,23.6373],[120.153,23.6727],[120.171,23.6997],[120.1746,23.7335],[120.1854,23.7639],[120.189,23.774],[120.2142,23.8027],[120.2178,23.8129],[120.2178,23.8179],[120.2394,23.8331],[120.2466,23.8433],[120.2538,23.8686],[120.2574,23.8787],[120.2862,23.9024],[120.2934,23.9125],[120.3042,23.9395],[120.3186,23.9665],[120.3402,24.0223],[120.351,24.0375],[120.3618,24.0493],[120.3726,24.0543],[120.3798,24.0577],[120.387,24.0628],[120.387,24.0729],[120.3906,24.083],[120.4122,24.0966],[120.4158,24.1067],[120.4194,24.1421],[120.423,24.1523],[120.4338,24.1607],[120.477,24.2063],[120.477,24.2097],[120.4806,24.2215],[120.4914,24.23],[120.5022,24.2536],[120.513,24.2958],[120.549,24.3515],[120.5598,24.3853],[120.5706,24.4056],[120.621,24.4562],[120.6498,24.4832],[120.657,24.4984],[120.6606,24.5204],[120.6678,24.5407],[120.6894,24.5761],[120.6966,24.5981],[120.7038,24.6065],[120.729,24.6133],[120.7362,24.6217],[120.7398,24.6301],[120.7434,24.6386],[120.7614,24.6538],[120.7794,24.6656],[120.801,24.6707],[120.8262,24.6656],[120.8226,24.6859],[120.8334,24.6977],[120.8478,24.7112],[120.855,24.7315],[120.8586,24.7365],[120.873,24.7433],[120.8766,24.7619],[120.8982,24.8007],[120.9054,24.8108],[120.909,24.8176],[120.909,24.8226],[120.9054,24.8294],[120.9018,24.8362],[120.909,24.8463],[120.9162,24.853],[120.9198,24.8615],[120.9234,24.875],[120.927,24.8851],[120.9342,24.8953],[120.945,24.902],[120.9522,24.9054],[120.9522,24.9088],[120.9558,24.9189],[120.963,24.9408],[120.9702,24.951],[121.0062,24.9999],[121.0314,25.0286],[121.0602,25.0506],[121.1286,25.0709],[121.1466,25.081],[121.161,25.0911],[121.1754,25.0996],[121.2114,25.1114],[121.287,25.1232],[121.3302,25.13],[121.3482,25.1367],[121.3734,25.1553],[121.377,25.1587],[121.3878,25.1587],[121.3986,25.1587],[121.413,25.1553],[121.4202,25.1468],[121.4238,25.1367],[121.431,25.1317],[121.4418,25.1367],[121.431,25.1553],[121.4058,25.1756],[121.395,25.1823],[121.3986,25.1924],[121.4058,25.1975],[121.413,25.2009],[121.4166,25.2043],[121.4238,25.2211],[121.4346,25.2414],[121.4598,25.2617],[121.4994,25.2786],[121.539,25.287],[121.5822,25.2836],[121.5966,25.2718],[121.6362,25.2228],[121.6506,25.1975],[121.6542,25.1992],[121.665,25.2009],[121.6758,25.2026],[121.683,25.2009],[121.683,25.1975],[121.6794,25.1924],[121.6758,25.1874],[121.6758,25.1789],[121.6794,25.1756],[121.6938,25.1654],[121.6974,25.162],[121.7046,25.157],[121.719,25.1519],[121.8918,25.1131],[121.9062,25.1063],[121.899,25.0945],[121.899,25.0844],[121.899,25.0658],[121.9098,25.0354],[121.9206,25.0219],[121.9278,25.0185],[121.953,25.0219],[121.9674,25.0219],[121.9818,25.0168],[121.9962,25.0101],[122.007,25.0016],[121.9278,24.9662],[121.9062,24.9493]],lanyu:[[121.5642,22.0449],[121.5822,22.0314],[121.5894,22.023],[121.5894,22.0145],[121.5678,22.0078],[121.539,22.0179],[121.5138,22.0348],[121.4994,22.0483],[121.503,22.0568],[121.503,22.0669],[121.4994,22.0753],[121.4922,22.0821],[121.5678,22.0821],[121.5678,22.0753],[121.5642,22.072],[121.5606,22.0635],[121.5606,22.0534],[121.5642,22.0449]],kinmen:[[118.3926,24.5221],[118.4214,24.5271],[118.4502,24.5052],[118.4682,24.4613],[118.4646,24.4309],[118.4502,24.4157],[118.4214,24.4309],[118.4034,24.436],[118.3746,24.4326],[118.3458,24.4174],[118.3314,24.3971],[118.317,24.3904],[118.3026,24.3971],[118.2918,24.3971],[118.2846,24.4005],[118.281,24.4089],[118.281,24.4106],[118.2882,24.4208],[118.2918,24.4258],[118.2918,24.4326],[118.2918,24.441],[118.2882,24.4562],[118.2846,24.4697],[118.281,24.4782],[118.2882,24.4799],[118.317,24.4934],[118.3566,24.4697],[118.3818,24.4731],[118.3854,24.5035],[118.3926,24.5221]],penghu1:[[119.649,23.6035],[119.667,23.5731],[119.6706,23.5596],[119.667,23.5495],[119.6598,23.5562],[119.6526,23.5613],[119.6418,23.563],[119.6274,23.5562],[119.6166,23.5545],[119.6094,23.5511],[119.6058,23.5461],[119.6022,23.5326],[119.5986,23.5292],[119.5806,23.5191],[119.5626,23.5174],[119.5446,23.5224],[119.5266,23.5393],[119.5302,23.5495],[119.541,23.5376],[119.559,23.5343],[119.5734,23.5393],[119.5878,23.5495],[119.577,23.5511],[119.5698,23.5562],[119.5662,23.5613],[119.559,23.5697],[119.5554,23.5663],[119.5554,23.5647],[119.5518,23.563],[119.5518,23.5765],[119.5518,23.59],[119.559,23.59],[119.5662,23.5883],[119.595,23.6052],[119.613,23.6102],[119.6094,23.595],[119.6058,23.59],[119.6202,23.595],[119.6346,23.5934],[119.6418,23.5934],[119.649,23.6035]],penghu2:[[119.4762,23.6035],[119.4906,23.639],[119.5014,23.6508],[119.5158,23.6373],[119.5086,23.6322],[119.5014,23.6204],[119.4906,23.59],[119.4906,23.5832],[119.4942,23.5765],[119.4906,23.5714],[119.4798,23.5697],[119.4726,23.5697],[119.4654,23.568],[119.4618,23.5663],[119.4582,23.563],[119.4438,23.563],[119.4438,23.5697],[119.451,23.5748],[119.4582,23.5765],[119.4654,23.5765],[119.4762,23.5799],[119.4762,23.5866],[119.4762,23.6035]],penghu3:[[119.5734,23.6271],[119.5698,23.639],[119.5626,23.6491],[119.5446,23.6643],[119.5662,23.6795],[119.5806,23.6727],[119.5914,23.6643],[119.595,23.6525],[119.5878,23.6457],[119.5914,23.6322],[119.5842,23.6254],[119.577,23.6221],[119.5734,23.6271]],greenisland:[[121.4598,22.6596],[121.4562,22.6731],[121.4562,22.6765],[121.4958,22.6781],[121.4994,22.6765],[121.503,22.6697],[121.4994,22.6562],[121.4958,22.6494],[121.4958,22.6444],[121.4958,22.6393],[121.4958,22.6342],[121.4922,22.6359],[121.485,22.6359],[121.4814,22.6359],[121.4814,22.6376],[121.4706,22.641],[121.4598,22.6596]],penghu4:[[120.0234,23.4515],[120.0738,23.5005],[120.117,23.5478],[120.1242,23.5511],[120.0918,23.4988],[120.0738,23.4836],[120.063,23.4718],[120.0486,23.4583],[120.0378,23.4515],[120.0198,23.438],[120.009,23.4329],[120.0234,23.4515]]};var Qa={\u7389\u5C71\u570B\u5BB6\u516C\u5712:{f:"p01.jpg",a:"Chi-Hung Lin",l:"CC BY-SA 2.0",u:"https://commons.wikimedia.org/wiki/File:Yushan_Main_Peak_and_Yushan_Northern_Peak_seen_from_Dongpu_Mountain_in_the_afternoon_on_28_January_2017.jpg",t:"Yushan Main Peak and Yushan Northern Peak seen from Dongpu Mountain in the afternoon on 28 January 2017.jpg"},\u963F\u91CC\u5C71\u68EE\u6797\u904A\u6A02\u5340:{f:"p02.jpg",a:"CEphoto, Uwe Aranas",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Alishan_Taiwan_Alishan-Forest-Railway-03.jpg",t:"Alishan Taiwan Alishan-Forest-Railway-03.jpg"},\u592A\u9B6F\u95A3\u5CFD\u8C37:{f:"p03.jpg",a:"CEphoto, Uwe Aranas",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Taroko-Gorge_Hualien_Taiwan_Cihmu-Bridge-at-Taroko-National-Park-01.jpg",t:"Taroko-Gorge Hualien Taiwan Cihmu-Bridge-at-Taroko-National-Park-01.jpg"},\u5408\u6B61\u5C71:{f:"p04.jpg",a:"YangChen(TW)",l:"CC BY 2.0",u:"https://commons.wikimedia.org/wiki/File:Hehuanshan_in_winter.jpg",t:"Hehuanshan in winter.jpg"},\u96EA\u9738\u570B\u5BB6\u516C\u5712:{f:"p05.jpg",a:"Prince Roy",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Xueshan_Summit.jpg",t:"Xueshan Summit.jpg"},\u65E5\u6708\u6F6D:{f:"p06.jpg",a:"LowensteinYang",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:%E6%97%A5%E6%9C%88%E6%BD%AD%E6%B0%B4%E7%A4%BE%E7%A2%BC%E9%A0%AD_View_of_Shuishe_Pier_from_Sun_Moon_Lake_20151213.jpg",t:"\u65E5\u6708\u6F6D\u6C34\u793E\u78BC\u982D View of Shuishe Pier from Sun Moon Lake 20151213.jpg"},\u576A\u6797\u8336\u5712:{f:"p07.jpg",a:"Taiwankengo",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:2022_Tea_plantations_at_ZhangKongZi_Pinglin_District_e.jpg",t:"2022 Tea plantations at ZhangKongZi Pinglin District e.jpg"},\u6708\u4E16\u754C:{f:"p08.jpg",a:"Taiwankengo",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:Tianliao_Moon_World_2018.jpg",t:"Tianliao Moon World 2018.jpg"},\u6843\u5712\u57E4\u5858:{f:"p09.jpg",a:"Taiwankengo",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:2021_Xiaoli_Pond_in_Bade_District_Taoyuan_ii.jpg",t:"2021 Xiaoli Pond in Bade District Taoyuan ii.jpg"},\u6797\u53E3\u53F0\u5730:{f:"p10.jpg",a:"Wing1990hk",l:"CC BY 3.0",u:"https://commons.wikimedia.org/wiki/File:Linkou_District_201506.jpg",t:"Linkou District 201506.jpg"},\u81FA\u4E2D\u90FD\u6703\u516C\u5712:{f:"p11.jpg",a:"Fcuk1203",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Taichung_Metropolitan_Park_main_entrance_2010-08-12.jpg",t:"Taichung Metropolitan Park main entrance 2010-08-12.jpg"},\u516B\u5366\u5C71\u5927\u4F5B:{f:"p12.jpg",a:"AngMoKio",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Changhua_Great_Buddha_Temple_amk.jpg",t:"Changhua Great Buddha Temple amk.jpg"},"\u81FA\u5317 101":{f:"p13.jpg",a:"CEphoto, Uwe Aranas",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Taipei_Taiwan_Taipei-101-Tower-01.jpg",t:"Taipei Taiwan Taipei-101-Tower-01.jpg"},\u81FA\u4E2D\u516C\u5712:{f:"p14.jpg",a:"Yoxem",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Taichung_Park_Lake_Pavilion_20070925.jpg",t:"Taichung Park Lake Pavilion 20070925.jpg"},\u6CF0\u6E90\u5E7D\u8C37:{f:"p15.jpg",a:"Benson KC Fang",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Washed-out_Rocks_in_Mawuku_Creek,_Taiwan.JPG",t:"Washed-out Rocks in Mawuku Creek, Taiwan.JPG"},"\u70CF\u5C71\u982D\u6C34\u5EAB\u30FB\u5609\u5357\u5927\u5733":{f:"p16.jpg",a:"Koika",l:"CC BY-SA 2.0",u:"https://commons.wikimedia.org/wiki/File:Coral_Lake_Tainan_from_airplane_window.JPG",t:"Coral Lake Tainan from airplane window.JPG"},\u4E03\u80A1\u9E7D\u5C71:{f:"p17.jpg",a:"bangdoll",l:"CC BY-SA 2.0",u:"https://commons.wikimedia.org/wiki/File:Tourists_climbing_Qigu_Salt_Mountain.jpg",t:"Tourists climbing Qigu Salt Mountain.jpg"},\u51AC\u5C71\u6CB3\u89AA\u6C34\u516C\u5712:{f:"p18.jpg",a:"Gpdprince",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:Dongshan_River_Water_Park_(Yilan,_Taiwan).JPG",t:"Dongshan River Water Park (Yilan, Taiwan).JPG"},\u6C60\u4E0A\u4F2F\u6717\u5927\u9053:{f:"p19.jpg",a:"lumoplank",l:"CC0",u:"https://commons.wikimedia.org/wiki/File:Mr._Brown_Avenue,_Chishang.jpg",t:"Mr. Brown Avenue, Chishang.jpg"},\u7389\u91CC\u820A\u9435\u6A4B\u81EA\u884C\u8ECA\u9053:{f:"p20.jpg",a:"Kai3952",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:Former_Xiuguluan_River_Railway_Bridge,_which_can_see_the_fault_rupture_passed_through_the_bridge_and_caused_the_collapse_of_span_17,_as_taken_in_the_afternoon_on_4_December_2021.jpg",t:"Former Xiuguluan River Railway Bridge, which can see the fault rupture passed through the bridge and caused the collapse of span 17, as taken in the afternoon on 4 December 2021.jpg"},\u5927\u9D6C\u7063:{f:"p21.jpg",a:"rheins",l:"CC BY 3.0",u:"https://commons.wikimedia.org/wiki/File:%E5%A4%A7%E9%B9%8F%E6%B9%BE_-_Dapeng_Bay_-_2012.02_-_panoramio.jpg",t:"\u5927\u9E4F\u6E7E - Dapeng Bay - 2012.02 - panoramio.jpg"},\u967D\u660E\u5C71\u570B\u5BB6\u516C\u5712:{f:"p22.jpg",a:"lienyuan lee",l:"CC BY 3.0",u:"https://commons.wikimedia.org/wiki/File:Qixing_Mountain_%E4%B8%83%E6%98%9F%E5%B1%B1_-_panoramio.jpg",t:"Qixing Mountain \u4E03\u661F\u5C71 - panoramio.jpg"},\u91CE\u67F3\u5730\u8CEA\u516C\u5712:{f:"p23.jpg",a:"Mark S. Piteo-Tarpy",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Queens_Head_Rock_Yeliu_North_Coast_Taiwan.jpg",t:"Queens Head Rock Yeliu North Coast Taiwan.jpg"},\u4E5D\u4EFD:{f:"p24.jpg",a:"Another Believer",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:Jiufen,_November_28,_2024_-_030.jpg",t:"Jiufen, November 28, 2024 - 030.jpg"},\u6E05\u6C34\u65B7\u5D16:{f:"p25.jpg",a:"Huaiwun",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:Taroko_National_Park_Qingshui_Cliff_(Huaiwun).jpg",t:"Taroko National Park Qingshui Cliff (Huaiwun).jpg"},"\u58BE\u4E01\u570B\u5BB6\u516C\u5712\u30FB\u9D5D\u947E\u9F3B":{f:"p26.jpg",a:"Bernard Gagnon",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Eluanbi_Lighthouse_02.jpg",t:"Eluanbi Lighthouse 02.jpg"},\u5317\u9580\u6F5F\u6E56:{f:"p27.jpg",a:"\u5510\u7FA9\u5B8F",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:IMG_E5488(1)%E4%BA%95%E4%BB%94%E8%85%B3%E9%A4%8A%E8%9A%B5%E4%BA%BA%E5%AE%B6.jpg",t:"IMG E5488(1)\u4E95\u4ED4\u8173\u990A\u86B5\u4EBA\u5BB6.jpg"},\u9F3B\u982D\u89D2:{f:"p28.jpg",a:"Taiwankengo",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:2018_Bitou_Cape_B.jpg",t:"2018 Bitou Cape B.jpg"},\u6F8E\u6E56\u8DE8\u6D77\u5927\u6A4B:{f:"p29.jpg",a:"\u7FC1\u7DAD\u5FB7 (Wei-Te Wong)",l:"CC BY-SA 2.0",u:"https://commons.wikimedia.org/wiki/File:Penghu_Great_Bridge_20150619.jpg",t:"Penghu Great Bridge 20150619.jpg"},\u91D1\u9580\u8392\u5149\u6A13:{f:"p30.jpg",a:"\u59DC \u660E\u96C4",l:"CC0",u:"https://commons.wikimedia.org/wiki/File:Juguang_Tower_20180727.jpg",t:"Juguang Tower 20180727.jpg"},\u99AC\u7956\u82B9\u58C1\u805A\u843D:{f:"p31.jpg",a:"Catriona0000",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:Matsu_qinbi.jpg",t:"Matsu qinbi.jpg"},\u862D\u5DBC\u62FC\u677F\u821F:{f:"p32.jpg",a:"Bernard Gagnon",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Yami_ipanitika.jpg",t:"Yami ipanitika.jpg"},\u7DA0\u5CF6\u671D\u65E5\u6EAB\u6CC9:{f:"p33.jpg",a:"Suicasmo",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:Zhaori_Hot_Springs_20150128.jpg",t:"Zhaori Hot Springs 20150128.jpg"},\u6771\u6C99\u74B0\u7901\u570B\u5BB6\u516C\u5712:{f:"p34.jpg",a:"ISS Crew Earth Observations experiment and the Image Science",l:"Public domain",u:"https://commons.wikimedia.org/wiki/File:Pratas_Island_ISS004-10210.jpg",t:"Pratas Island ISS004-10210.jpg"}};var Ue={mountain:{name:"\u5C71\u5730",color:"#9c6b4a",icon:"\u26F0\uFE0F",elem:"\u5F88\u9AD8\u3001\u9AD8\u4F4E\u8D77\u4F0F\u5F88\u5927\u7684\u5730\u65B9\uFF0C\u9AD8\u5EA6\u8D85\u904E 1,000 \u516C\u5C3A\u3002\u81FA\u7063\u7684\u5C71\u5730\u5728\u4E2D\u9593\u504F\u6771\u908A\uFF0C\u5357\u5317\u6392\u6210\u4E00\u9577\u689D\uFF0C\u9762\u7A4D\u6700\u5927\u3002\u6700\u9AD8\u7684\u5C71\u662F\u7389\u5C71\u3002",junior:"\u6D77\u62D4\u8D85\u904E 1,000 \u516C\u5C3A\u3001\u5D0E\u5D87\u8D77\u4F0F\u7684\u5730\u5F62\u3002\u81FA\u7063\u4F4D\u5728\u6B50\u4E9E\u677F\u584A\u8207\u83F2\u5F8B\u8CD3\u6D77\u677F\u584A\u4EA4\u754C\uFF0C\u677F\u584A\u63A8\u64E0\u5F62\u6210\u300C\u65B0\u8936\u66F2\u5C71\u8108\u300D\uFF0C\u6709\u4E94\u5927\u5C71\u8108\uFF1A\u4E2D\u592E\u3001\u96EA\u5C71\u3001\u7389\u5C71\u3001\u963F\u91CC\u5C71\u3001\u6D77\u5CB8\u5C71\u8108\uFF0C\u5176\u4E2D\u4E2D\u592E\u5C71\u8108\u7BC4\u570D\u6700\u5927\uFF1B\u7389\u5C71\u5C71\u8108\u4E3B\u5CF0 3,952 \u516C\u5C3A\u662F\u81FA\u7063\u6700\u9AD8\u5CF0\u3002"},hill:{name:"\u4E18\u9675",color:"#f2c94c",icon:"\u{1F304}",elem:"\u6709\u9AD8\u6709\u4F4E\uFF0C\u4F46\u6C92\u6709\u5C71\u5730\u90A3\u9EBC\u9AD8\u3001\u90A3\u9EBC\u9661\uFF08\u4E0D\u5230 1,000 \u516C\u5C3A\uFF09\u3002\u5E38\u5E38\u7A2E\u8336\u3001\u7A2E\u679C\u6A39\uFF0C\u958B\u6210\u4E00\u5C64\u4E00\u5C64\u7684\u68AF\u7530\u3002",junior:"\u6D77\u62D4\u4F4E\u65BC 1,000 \u516C\u5C3A\u7684\u8D77\u4F0F\u5730\u5F62\uFF0C\u4E3B\u8981\u5206\u5E03\u5728\u5C71\u5730\u5916\u7DE3\uFF0C\u4F8B\u5982\u82D7\u6817\u4E18\u9675\u3001\u65B0\u7AF9\u4E18\u9675\u3002\u5761\u5730\u5E38\u88AB\u958B\u95E2\u7A2E\u690D\u8336\u6A39\u3001\u679C\u6A39\u8207\u6C34\u7A3B\uFF08\u68AF\u7530\uFF09\u3002"},tableland:{name:"\u53F0\u5730",color:"#f2994a",icon:"\u{1F7EB}",elem:"\u9AD8\u9AD8\u7684\u3001\u4E0A\u9762\u5F88\u5E73\u5766\uFF0C\u65C1\u908A\u662F\u9661\u5761\uFF0C\u50CF\u4E00\u5F35\u5927\u684C\u5B50\u3002\u53F0\u5730\u6BD4\u8F03\u5BB9\u6613\u7F3A\u6C34\uFF0C\u4EE5\u524D\u7684\u4EBA\u6316\u4E86\u5F88\u591A\u300C\u57E4\u5858\u300D\u4F86\u5B58\u6C34\u3002",junior:"\u5730\u52E2\u9AD8\u800C\u5E73\u5766\u3001\u908A\u7DE3\u9661\u5CED\uFF0C\u4F46\u6D77\u62D4\u4F4E\u65BC 1,000 \u516C\u5C3A\u7684\u5730\u5F62\uFF0C\u5206\u5E03\u5728\u76C6\u5730\u3001\u5E73\u539F\u6216\u4E18\u9675\u7684\u63A5\u89F8\u5E36\uFF0C\u4F8B\u5982\u6797\u53E3\u3001\u6843\u5712\u3001\u5927\u809A\u3001\u516B\u5366\u53F0\u5730\u3002\u53F0\u5730\u591A\u767C\u5C55\u70BA\u8FB2\u696D\u8207\u5DE5\u696D\u7528\u5730\uFF08\u5927\u809A\u53F0\u5730\u6709\u6A5F\u5834\u3001\u5927\u5B78\u3001\u5DE5\u696D\u5340\uFF09\u3002"},basin:{name:"\u76C6\u5730",color:"#56ccf2",icon:"\u{1F963}",elem:"\u56DB\u5468\u9AD8\u3001\u4E2D\u9593\u4F4E\u5E73\uFF0C\u5F62\u72C0\u50CF\u4E00\u500B\u81C9\u76C6\u3002\u81FA\u5317\u76C6\u5730\u4F4F\u4E86\u5F88\u591A\u4EBA\u3002",junior:"\u56DB\u5468\u88AB\u4E18\u9675\u3001\u5C71\u5730\u570D\u7E5E\u7684\u76C6\u72C0\u5730\u5F62\uFF0C\u4F8B\u5982\u81FA\u5317\u3001\u81FA\u4E2D\u3001\u57D4\u91CC\u3001\u6CF0\u6E90\u76C6\u5730\u3002\u81FA\u5317\u76C6\u5730\u662F\u5168\u81FA\u4EBA\u53E3\u5BC6\u5EA6\u6700\u9AD8\u3001\u653F\u6CBB\u7D93\u6FDF\u7684\u4E2D\u5FC3\u3002"},plain:{name:"\u5E73\u539F",color:"#6fcf97",icon:"\u{1F33E}",elem:"\u53C8\u4F4E\u53C8\u5E73\u53C8\u5BEC\u7684\u5730\u65B9\uFF0C\u5F88\u9069\u5408\u7A2E\u7A3B\u7C73\u3001\u84CB\u623F\u5B50\u3002\u6700\u5927\u7684\u662F\u5609\u5357\u5E73\u539F\u3002",junior:"\u6D77\u62D4\u8F03\u4F4E\u3001\u5730\u52E2\u5E73\u5766\u7684\u5730\u5F62\u3002\u81FA\u4E2D\u4EE5\u5357\u5E73\u539F\u9023\u7DBF\uFF0C\u662F\u4E3B\u8981\u7684\u8FB2\u696D\u751F\u7522\u5730\u5E36\uFF1B\u5609\u5357\u5E73\u539F\u9762\u7A4D\u6700\u5EE3\uFF0C\u662F\u897F\u90E8\u5E73\u539F\u7684\u4E3B\u9AD4\u3002\u53E6\u6709\u6FC1\u6C34\u6EAA\u6C96\u7A4D\u5E73\u539F\u3001\u5C4F\u6771\u5E73\u539F\u3001\u862D\u967D\u5E73\u539F\u3001\u82B1\u6771\u7E31\u8C37\u5E73\u539F\u3002"}},lr=[{name:"\u4E2D\u592E\u5C71\u8108",w:17,label:[121.18,23.75],pts:[[121.8,24.58,900],[121.6,24.45,2400],[121.44,24.36,3742],[121.36,24.2,3300],[121.31,24.08,3500],[121.2,23.8,3300],[121.08,23.5,3825],[120.99,23.25,3500],[120.92,22.95,3e3],[120.8,22.62,3092],[120.78,22.38,1800],[120.82,22.15,700],[120.85,21.95,200]]},{name:"\u96EA\u5C71\u5C71\u8108",w:13,label:[121.3,24.55],pts:[[121.95,25,400],[121.75,24.88,1100],[121.5,24.7,2200],[121.3,24.5,3300],[121.23,24.38,3886],[121.1,24.22,2900],[120.98,24.05,1900],[120.93,23.92,900]]},{name:"\u7389\u5C71\u5C71\u8108",w:9,label:[120.9,23.3],pts:[[121,23.8,1900],[120.98,23.62,3100],[120.957,23.47,3952],[120.92,23.25,3e3],[120.83,23,1900],[120.72,22.82,900]]},{name:"\u963F\u91CC\u5C71\u5C71\u8108",w:9,label:[120.72,23.45],pts:[[120.88,23.95,1100],[120.83,23.7,2e3],[120.8,23.5,2600],[120.72,23.25,1900],[120.6,23.02,1100],[120.52,22.88,500]]},{name:"\u6D77\u5CB8\u5C71\u8108",w:5.5,label:[121.42,23.4],pts:[[121.58,23.92,500],[121.48,23.6,1200],[121.37,23.25,1682],[121.26,23.02,1200],[121.17,22.82,500],[121.14,22.76,150]]}],ad=[{w:13,pts:[[121.8,25.08,450],[121.62,24.98,600],[121.45,24.85,450],[121.15,24.72,420],[120.95,24.55,480],[120.85,24.35,500],[120.82,24.05,520],[120.7,23.7,600],[120.55,23.35,550],[120.45,23.05,420],[120.42,22.8,300],[120.4,22.62,150]]},{w:6,pts:[[120.75,22.25,300],[120.8,22.05,250],[120.85,21.95,150]]}],to=[{name:"\u5927\u5C6F\u706B\u5C71\u7FA4",lon:121.55,lat:25.17,h:1120,r:7}],cr=[{type:"plain",name:"\u5609\u5357\u5E73\u539F",label:[120.3,23.35],h:25,blur:4,poly:[[120.2,23.8],[120.52,23.8],[120.5,23.45],[120.42,23.1],[120.33,22.92],[120.18,22.92],[120.08,23.15],[120.1,23.5]]},{type:"plain",name:"\u6FC1\u6C34\u6EAA\u6C96\u7A4D\u5E73\u539F",label:[120.4,23.88],h:30,blur:4,poly:[[120.3,24.08],[120.52,24.05],[120.62,23.85],[120.55,23.78],[120.18,23.78],[120.22,23.95]]},{type:"plain",name:"\u5C4F\u6771\u5E73\u539F",label:[120.53,22.65],h:30,blur:3,poly:[[120.43,22.88],[120.62,22.88],[120.66,22.6],[120.6,22.4],[120.5,22.4],[120.42,22.55]]},{type:"plain",name:"\u862D\u967D\u5E73\u539F",label:[121.77,24.72],h:15,blur:2,poly:[[121.7,24.86],[121.82,24.86],[121.86,24.62],[121.8,24.58],[121.7,24.62],[121.68,24.75]]},{type:"plain",name:"\u82B1\u6771\u7E31\u8C37\u5E73\u539F",label:[121.36,23.45],h:180,blur:2,line:[[121.6,23.97],[121.48,23.7],[121.36,23.4],[121.24,23.15],[121.15,22.9],[121.12,22.76]],lw:2.6},{type:"basin",name:"\u81FA\u5317\u76C6\u5730",label:[121.52,25.05],h:10,blur:2,ell:[121.51,25.05,9,7]},{type:"basin",name:"\u81FA\u4E2D\u76C6\u5730",label:[120.69,24.15],h:90,blur:2,ell:[120.69,24.15,6,16]},{type:"basin",name:"\u57D4\u91CC\u76C6\u5730",label:[120.97,23.97],h:450,blur:1,ell:[120.965,23.97,4,3.5]},{type:"basin",name:"\u6CF0\u6E90\u76C6\u5730",label:[121.31,23],h:260,blur:1,ell:[121.305,23,2.3,2.3]},{type:"tableland",name:"\u6797\u53E3\u53F0\u5730",label:[121.35,25.08],h:240,blur:1,ell:[121.36,25.07,7,5.5]},{type:"tableland",name:"\u6843\u5712\u53F0\u5730",label:[121.17,24.93],h:140,blur:1,poly:[[121.05,25.06],[121.25,25.03],[121.35,24.85],[121.3,24.78],[121.1,24.82],[121,24.95]]},{type:"tableland",name:"\u5927\u809A\u53F0\u5730",label:[120.57,24.18],h:260,blur:1,ell:[120.575,24.18,3.2,11]},{type:"tableland",name:"\u516B\u5366\u53F0\u5730",label:[120.59,23.93],h:300,blur:1,ell:[120.585,23.93,3.6,13]}],Wc=[{name:"\u65B0\u7AF9\u4E18\u9675",lon:121.05,lat:24.72},{name:"\u82D7\u6817\u4E18\u9675",lon:120.88,lat:24.48},{name:"\u65B0\u5316\u4E18\u9675",lon:120.4,lat:23.03}],od=[{name:"\u7389\u5C71\u4E3B\u5CF0",lon:120.957,lat:23.47,h:3952,note:"\u81FA\u7063\u6700\u9AD8\u5CF0"},{name:"\u96EA\u5C71",lon:121.23,lat:24.38,h:3886,note:"\u96EA\u5C71\u5C71\u8108\u4E3B\u5CF0"},{name:"\u79C0\u59D1\u5DD2\u5C71",lon:121.08,lat:23.5,h:3825,note:"\u4E2D\u592E\u5C71\u8108\u6700\u9AD8\u5CF0"},{name:"\u5357\u6E56\u5927\u5C71",lon:121.44,lat:24.36,h:3742},{name:"\u5317\u5927\u6B66\u5C71",lon:120.8,lat:22.62,h:3092},{name:"\u65B0\u6E2F\u5C71",lon:121.37,lat:23.25,h:1682,note:"\u6D77\u5CB8\u5C71\u8108\u6700\u9AD8\u5CF0"},{name:"\u4E03\u661F\u5C71",lon:121.55,lat:25.17,h:1120,note:"\u5927\u5C6F\u706B\u5C71\u7FA4"}],Pn=[{id:"penghu",feat:{land:"\u7531\u5F88\u591A\u5CF6\u5DBC\u7D44\u6210\uFF0C\u6709\u58EF\u89C0\u7684\u67F1\u72C0\u7384\u6B66\u5CA9\uFF08\u5982\u5927\u83D3\u8449\u7384\u6B66\u5CA9\uFF09\uFF0C\u9084\u6709\u4E03\u7F8E\u7684\u96D9\u5FC3\u77F3\u6EEC\u3002",culture:"\u590F\u5929\u6709\u6F8E\u6E56\u6D77\u4E0A\u82B1\u706B\u7BC0\u3002",food:"\u65B0\u9BAE\u6D77\u9BAE\u3001\u5C0F\u7BA1\u9EB5\u7DDA\u3001\u82B1\u679D\u4E38\u3001\u4ED9\u4EBA\u638C\u51B0\u3002"},name:"\u6F8E\u6E56\u7FA4\u5CF6",coast:["penghu1","penghu2","penghu3","penghu4"],h:50,profile:"mesa",kind:"\u706B\u5C71\u5CF6",lon:119.57,lat:23.57,region:"S",elem:"\u7531\u5F88\u591A\u5C0F\u5CF6\u7D44\u6210\uFF0C\u5CF6\u4E0A\u5F88\u5E73\uFF0C\u6709\u7279\u5225\u7684\u300C\u67F1\u72C0\u7384\u6B66\u5CA9\u300D\uFF0C\u662F\u706B\u5C71\u5CA9\u6F3F\u51B7\u537B\u5F8C\u8B8A\u6210\u7684\u3002\u98A8\u5F88\u5927\u3001\u96E8\u5F88\u5C11\u3002",junior:"\u706B\u5C71\u5CF6\u3002\u7531\u7384\u6B66\u5CA9\u7194\u5CA9\u53F0\u5730\u69CB\u6210\uFF0C\u5730\u52E2\u4F4E\u5E73\uFF0C\u67F1\u72C0\u7384\u6B66\u5CA9\u767C\u9054\uFF08\u5982\u6876\u76E4\u5DBC\uFF09\uFF1B\u6F8E\u6E56\u5357\u65B9\u56DB\u5CF6\u8A2D\u6709\u570B\u5BB6\u516C\u5712\u3002\u5E74\u964D\u6C34\u91CF\u662F\u5168\u81FA\u6700\u5C11\u7684\u5730\u5340\u4E4B\u4E00\u3002"},{id:"kinmen",feat:{land:"\u82B1\u5D17\u7247\u9EBB\u5CA9\u7684\u4E18\u9675\u5730\u5F62\uFF0C\u96E2\u4E2D\u570B\u5927\u9678\u5F88\u8FD1\u3002",culture:"\u6709\u5751\u9053\u3001\u8ECD\u4E8B\u6A19\u8A9E\u7B49\u6230\u5730\u98A8\u5149\u548C\u95A9\u5357\u53E4\u539D\u805A\u843D\uFF1B\u6BCF\u5E74\u8FB2\u66C6\u56DB\u6708\u5341\u4E8C\u65E5\u6709\u300C\u91D1\u9580\u8FCE\u57CE\u968D\u300D\u9076\u5883\u3002",food:"\u91D1\u9580\u9AD8\u7CB1\u3001\u8CA2\u7CD6\u3002"},name:"\u91D1\u9580",coast:["kinmen"],h:253,profile:"hill",kind:"\u5927\u9678\u5CF6",lon:118.38,lat:24.45,region:"O",elem:"\u96E2\u4E2D\u570B\u5927\u9678\u5F88\u8FD1\u7684\u5CF6\uFF0C\u6700\u9AD8\u7684\u662F\u592A\u6B66\u5C71\u3002\u6709\u5F88\u591A\u95A9\u5357\u5F0F\u7684\u53E4\u539D\u548C\u6230\u5730\u7684\u6B77\u53F2\u3002",junior:"\u5927\u9678\u5CF6\u3002\u539F\u672C\u662F\u81E8\u6D77\u4E18\u9675\uFF0C\u56E0\u6D77\u5E73\u9762\u4E0A\u5347\u800C\u6210\u5CF6\uFF0C\u4EE5\u82B1\u5D17\u5CA9\u4E18\u9675\u70BA\u4E3B\uFF0C\u592A\u6B66\u5C71\u7D04 253 \u516C\u5C3A\u3002\u8A2D\u6709\u91D1\u9580\u570B\u5BB6\u516C\u5712\uFF08\u6230\u5F79\u53F2\u8E5F\u3001\u95A9\u5357\u805A\u843D\uFF09\u3002"},{id:"matsu",feat:{land:"\u82B1\u5D17\u5CA9\u61F8\u5D16\u3001\u6D77\u8755\u5730\u5F62\u548C\u6C99\u792B\u7058\uFF0C\u6709\u95A9\u6771\u5F0F\u7684\u77F3\u982D\u5C4B\u805A\u843D\uFF08\u82B9\u58C1\u6751\u88AB\u7A31\u70BA\u300C\u99AC\u7956\u5730\u4E2D\u6D77\u300D\uFF09\u548C\u6230\u5730\u8A2D\u65BD\u3002",culture:"\u6BCF\u5E74 4\uFF5E6 \u6708\u53EF\u4EE5\u770B\u5230\u5922\u5E7B\u7684\u300C\u85CD\u773C\u6DDA\u300D\uFF0C\u4E5F\u53EF\u4EE5\u5230\u5927\u5775\u5CF6\u770B\u6885\u82B1\u9E7F\u3002"},name:"\u99AC\u7956\u5217\u5CF6",ell:[[119.94,26.155,2.6,1.6],[119.99,26.222,2.4,1.4],[120.49,26.37,1.6,.9],[119.96,25.965,1.4,1]],h:290,profile:"hill",kind:"\u5927\u9678\u5CF6",lon:119.96,lat:26.16,region:"O",elem:"\u5728\u81FA\u7063\u897F\u5317\u65B9\u3001\u5F88\u9760\u8FD1\u4E2D\u570B\u5927\u9678\uFF0C\u5CF6\u4E0A\u591A\u5CA9\u77F3\u5C71\u5761\uFF0C\u623F\u5B50\u6CBF\u8457\u5C71\u5761\u84CB\u3002\u590F\u5929\u591C\u665A\u6D77\u908A\u53EF\u80FD\u770B\u5230\u300C\u85CD\u773C\u6DDA\u300D\u3002",junior:"\u5927\u9678\u5CF6\u3002\u539F\u8207\u4E2D\u570B\u6771\u5357\u6CBF\u6D77\u4E18\u9675\u76F8\u9023\uFF0C\u56E0\u6D77\u5E73\u9762\u4E0A\u5347\u800C\u6210\u5CF6\uFF0C\u56E0\u6B64\u5730\u52E2\u5D0E\u5D87\u3001\u5E73\u5730\u5C11\uFF1B\u805A\u843D\u4F9D\u5C71\u800C\u5EFA\uFF08\u5982\u82B9\u58C1\u7684\u77F3\u982D\u5C4B\uFF09\u3002"},{id:"lanyu",feat:{land:"\u706B\u5C71\u5CF6\uFF0C\u5CF6\u4E0A\u516D\u500B\u90E8\u843D\u7531\u4E00\u689D\u74B0\u5CF6\u516C\u8DEF\u4E32\u8D77\u4F86\u3002",culture:"\u5B8C\u6574\u4FDD\u7559\u9054\u609F\u65CF\uFF08\u96C5\u7F8E\u65CF\uFF09\u7684\u50B3\u7D71\u6587\u5316\uFF1A\u5730\u4E0B\u5C4B\u3001\u62FC\u677F\u821F\uFF0C\u4EE5\u53CA\u6625\u590F\u7684\u98DB\u9B5A\u796D\uFF08\u8981\u5C0A\u91CD\u90E8\u843D\u7981\u5FCC\uFF09\u3002"},name:"\u862D\u5DBC",coast:["lanyu"],h:552,profile:"cone",kind:"\u706B\u5C71\u5CF6",lon:121.55,lat:22.04,region:"E",elem:"\u81FA\u6771\u5916\u6D77\u7684\u706B\u5C71\u5CF6\uFF0C\u4F4F\u8457\u9054\u609F\uFF08\u96C5\u7F8E\uFF09\u65CF\uFF0C\u6703\u505A\u6F02\u4EAE\u7684\u300C\u62FC\u677F\u821F\u300D\uFF0C\u9084\u6709\u98DB\u9B5A\u796D\u548C\u5730\u4E0B\u5C4B\uFF08\u53EF\u4EE5\u9632\u98B1\u98A8\uFF09\u3002",junior:"\u706B\u5C71\u5CF6\u3002\u5CF6\u4E0A\u6700\u9AD8\u9EDE\u7D05\u982D\u5C71\u7D04 552 \u516C\u5C3A\uFF1B\u96C5\u7F8E\uFF08\u9054\u609F\uFF09\u65CF\u7684\u62FC\u677F\u821F\u3001\u98DB\u9B5A\u796D\u8207\u9632\u98B1\u7684\u50B3\u7D71\u5730\u4E0B\u5C4B\uFF0C\u90FD\u662F\u9069\u61C9\u6D77\u5CF6\u74B0\u5883\u7684\u751F\u6D3B\u667A\u6167\u3002"},{id:"green",feat:{land:"\u706B\u5C71\u96C6\u584A\u5CA9\u5F62\u6210\u7684\u5CF6\uFF0C\u6709\u85CD\u6D1E\u3001\u7761\u7F8E\u4EBA\u5CA9\u7B49\u6D77\u8755\u666F\u89C0\uFF0C\u9084\u6709\u4E16\u754C\u5C11\u898B\u7684\u6D77\u5E95\u6EAB\u6CC9\u300C\u671D\u65E5\u6EAB\u6CC9\u300D\u3002",culture:"\u56DB\u5468\u6709\u9ED1\u6F6E\u6696\u6D41\u548C\u73CA\u745A\u7901\uFF0C\u662F\u6709\u540D\u7684\u6F5B\u6C34\u3001\u6D6E\u6F5B\u5929\u5802\u3002",food:"\u6D77\u8349\u51B0\u3001\u9E7F\u8089\u3002"},name:"\u7DA0\u5CF6",coast:["greenisland"],h:281,profile:"cone",kind:"\u706B\u5C71\u5CF6",lon:121.49,lat:22.66,region:"E",elem:"\u81FA\u6771\u5916\u6D77\u7684\u5C0F\u706B\u5C71\u5CF6\uFF0C\u6709\u5F88\u5C11\u898B\u7684\u6D77\u5E95\u6EAB\u6CC9\uFF08\u671D\u65E5\u6EAB\u6CC9\uFF09\u548C\u7F8E\u9E97\u7684\u73CA\u745A\u3002",junior:"\u706B\u5C71\u5CF6\u3002\u4F4D\u65BC\u81FA\u6771\u5916\u6D77\uFF0C\u5CF6\u4E0A\u706B\u71D2\u5C71\u7D04 281 \u516C\u5C3A\uFF0C\u6D77\u5CB8\u6709\u73CA\u745A\u7901\uFF0C\u671D\u65E5\u6EAB\u6CC9\u662F\u5C11\u898B\u7684\u6D77\u6C34\u6EAB\u6CC9\u3002"},{id:"dongsha",name:"\u6771\u6C99\u7FA4\u5CF6",ell:[[116.715,20.705,1.4,.55]],h:6,profile:"flat",kind:"\u73CA\u745A\u7901\u5CF6",atoll:[116.83,20.7,11.5],lon:116.72,lat:20.7,region:"O",elem:"\u5728\u5357\u6D77\u3001\u96E2\u9AD8\u96C4\u5F88\u9060\u5F88\u9060\uFF08\u7D04 440 \u516C\u91CC\uFF09\u7684\u73CA\u745A\u5CF6\uFF0C\u53C8\u5C0F\u53C8\u5E73\u3002\u5468\u570D\u662F\u4E00\u5708\u50CF\u751C\u751C\u5708\u7684\u73CA\u745A\u7901\u3002",junior:"\u73CA\u745A\u7901\u5CF6\uFF08\u74B0\u7901\uFF09\u3002\u9762\u7A4D\u5C0F\u3001\u5730\u52E2\u4F4E\u5E73\uFF1B\u6C11\u570B 96 \u5E74\u6210\u7ACB\u6771\u6C99\u74B0\u7901\u570B\u5BB6\u516C\u5712\uFF0C\u662F\u81FA\u7063\u7B2C\u4E00\u5EA7\u6D77\u6D0B\u570B\u5BB6\u516C\u5712\u3002\u8DDD\u9AD8\u96C4\u7D04 440 \u516C\u91CC\u3002"},{id:"guishan",name:"\u9F9C\u5C71\u5CF6",ell:[[121.952,24.842,1.6,.8]],h:398,profile:"cone",kind:"\u706B\u5C71\u5CF6",lon:121.952,lat:24.842,region:"N",elem:"\u5B9C\u862D\u5916\u6D77\u50CF\u4E00\u96BB\u70CF\u9F9C\u7684\u706B\u5C71\u5CF6\uFF0C\u662F\u5B9C\u862D\u4EBA\u7684\u5730\u6A19\u3002",junior:"\u706B\u5C71\u5CF6\u3002\u4F4D\u65BC\u5B9C\u862D\u5916\u6D77\uFF0C\u662F\u81FA\u7063\u4ECD\u6709\u706B\u5C71\u6D3B\u52D5\u8DE1\u8C61\u7684\u5CF6\u5DBC\uFF0C\u5916\u5F62\u4F3C\u9F9C\u800C\u5F97\u540D\u3002"},{id:"keelungislet",name:"\u57FA\u9686\u5DBC",ell:[[121.786,25.192,.55,.32]],h:182,profile:"cone",kind:"\u706B\u5C71\u5CF6",lon:121.786,lat:25.192,region:"N",elem:"\u57FA\u9686\u5916\u6D77\u7684\u5C0F\u706B\u5C71\u5CF6\uFF0C\u5F62\u72C0\u50CF\u4E00\u9846\u6F02\u6D6E\u5728\u6D77\u4E0A\u7684\u73E0\u5B50\uFF0C\u88AB\u7A31\u70BA\u300C\u53F0\u7063\u9F8D\u73E0\u300D\u3002\u53EF\u4EE5\u642D\u8239\u767B\u5CF6\uFF0C\u770B\u71C8\u5854\u548C\u6D77\u666F\u3002",junior:"\u706B\u5C71\u5CF6\uFF08\u57FA\u9686\u706B\u5C71\u7FA4\u7684\u4E00\u90E8\u5206\uFF09\uFF0C\u4F4D\u65BC\u57FA\u9686\u6E2F\u5916\u6D77\uFF1B\u5468\u908A\u6D77\u57DF\u6709\u706B\u5C71\u5CA9\u7901\u8207\u73CA\u745A\u7901\u751F\u614B\uFF0C\u662F\u6D77\u91E3\u8207\u6F5B\u6C34\u52DD\u5730\uFF0C\u8FD1\u5E74\u958B\u653E\u767B\u5CF6\u89C0\u5149\u3002"},{id:"daqiu",name:"\u5927\u5775\u5CF6",ell:[[120.032,26.296,.9,.45]],h:100,profile:"hill",kind:"\u5927\u9678\u5CF6",lon:120.032,lat:26.296,region:"O",elem:"\u99AC\u7956\u5317\u7AFF\u65C1\u908A\u7684\u5C0F\u5CF6\uFF0C\u5CF6\u4E0A\u4F4F\u8457\u4E00\u7FA4\u91CE\u751F\u7684\u6885\u82B1\u9E7F\uFF0C\u7260\u5011\u4E0D\u6015\u4EBA\uFF0C\u662F\u6700\u53D7\u6B61\u8FCE\u7684\u300C\u6885\u82B1\u9E7F\u5CF6\u300D\u3002",junior:"\u5C6C\u99AC\u7956\u5217\u5CF6\uFF0C\u8207\u5317\u7AFF\u76F8\u9130\u7684\u82B1\u5D17\u5CA9\u8CEA\u5927\u9678\u5CF6\uFF1B\u5CF6\u4E0A\u91CE\u653E\u7684\u6885\u82B1\u9E7F\u65CF\u7FA4\u70BA\u89C0\u5149\u7279\u8272\uFF0C\u5468\u908A\u6D77\u57DF\u6625\u590F\u53EF\u898B\u85CD\u773C\u6DDA\uFF08\u591C\u5149\u87F2\uFF09\u3002"},{id:"liuqiu",feat:{land:"\u81FA\u7063\u552F\u4E00\u6709\u4EBA\u5C45\u4F4F\u7684\u73CA\u745A\u7901\u5CF6\uFF0C\u5730\u6A19\u662F\u82B1\u74F6\u5CA9\uFF1B\u9ED1\u6F6E\u652F\u6D41\u7D93\u904E\uFF0C\u51AC\u5929\u6D77\u6C34\u4E5F\u5F88\u6EAB\u6696\u3002",culture:"\u5F88\u5BB9\u6613\u770B\u5230\u7DA0\u8835\u9F9C\uFF0C\u4E00\u5E74\u56DB\u5B63\u90FD\u9069\u5408\u6D6E\u6F5B\u3001\u6F5B\u6C34\uFF08\u89C0\u5BDF\u6D77\u9F9C\u8981\u4FDD\u6301\u8DDD\u96E2\uFF09\u3002"},name:"\u5C0F\u7409\u7403",ell:[[120.37,22.34,1.6,1.1]],h:87,profile:"mesa",kind:"\u73CA\u745A\u7901\u5CF6",lon:120.37,lat:22.34,region:"S",elem:"\u5C4F\u6771\u5916\u6D77\u7684\u73CA\u745A\u7901\u5C0F\u5CF6\uFF0C\u53EF\u4EE5\u770B\u5230\u5F88\u591A\u6D77\u9F9C\u3002",junior:"\u73CA\u745A\u7901\u5CF6\uFF08\u7409\u7403\u5DBC\uFF09\u3002\u7531\u9686\u8D77\u7684\u73CA\u745A\u7901\u69CB\u6210\uFF0C\u5730\u52E2\u4F4E\u5E73\uFF0C\u6D77\u5CB8\u6709\u82B1\u74F6\u5CA9\u7B49\u73CA\u745A\u7901\u5730\u5F62\u3002"}],Qn=[{n:"\u7389\u5C71\u570B\u5BB6\u516C\u5712",t:"mountain",lon:120.96,lat:23.47,i:"\u{1F3D4}\uFE0F",d:"\u81FA\u7063\u6700\u9AD8\u5CF0\u7389\u5C71\u6240\u5728\uFF0C\u9084\u6709\u5168\u81FA\u6D77\u62D4\u6700\u9AD8\u7684\u5EFA\u7BC9\u7269\u300C\u7389\u5C71\u6C23\u8C61\u7AD9\u300D\u3002"},{n:"\u963F\u91CC\u5C71\u68EE\u6797\u904A\u6A02\u5340",t:"mountain",lon:120.8,lat:23.51,i:"\u{1F682}",d:"\u5750\u68EE\u6797\u5C0F\u706B\u8ECA\u770B\u65E5\u51FA\u3001\u96F2\u6D77\u548C\u5343\u5E74\u795E\u6728\u3002"},{n:"\u592A\u9B6F\u95A3\u5CFD\u8C37",t:"mountain",lon:121.55,lat:24.17,i:"\u{1F3DE}\uFE0F",d:"\u7ACB\u9727\u6EAA\u628A\u5927\u7406\u77F3\u5207\u51FA\u5F88\u6DF1\u7684\u5CFD\u8C37\uFF0C\u662F\u592A\u9B6F\u95A3\u570B\u5BB6\u516C\u5712\u7684\u4EE3\u8868\u3002"},{n:"\u5408\u6B61\u5C71",t:"mountain",lon:121.27,lat:24.14,i:"\u2744\uFE0F",d:"\u51AC\u5929\u6709\u6A5F\u6703\u770B\u5230\u96EA\u666F\uFF08\u570B\u5C0F4\u4E0B\u300C\u56DB\u5B63\u666F\u9EDE\u300D\uFF1A\u51AC\uFF09\u3002"},{n:"\u96EA\u9738\u570B\u5BB6\u516C\u5712",t:"mountain",lon:121.2,lat:24.42,i:"\u{1F332}",d:"\u6709\u96EA\u5C71\u8207\u5927\u9738\u5C16\u5C71\uFF0C\u662F\u6AFB\u82B1\u9264\u543B\u9BAD\u7684\u5BB6\u3002"},{n:"\u65E5\u6708\u6F6D",t:"mountain",lon:120.915,lat:23.86,i:"\u{1F6F6}",d:"\u88AB\u7FA4\u5C71\u570D\u7E5E\u7684\u6E56\uFF0C\u662F\u81FA\u7063\u6700\u6709\u540D\u7684\u6E56\u6CCA\u4E4B\u4E00\uFF0C\u90B5\u65CF\u7684\u6545\u9109\u3002"},{n:"\u576A\u6797\u8336\u5712",t:"hill",lon:121.71,lat:24.94,i:"\u{1F375}",d:"\u4E18\u9675\u5761\u5730\u7A2E\u8336\uFF0C\u65C1\u908A\u662F\u4F9B\u61C9\u81FA\u5317\u7528\u6C34\u7684\u7FE1\u7FE0\u6C34\u5EAB\u3002"},{n:"\u82D7\u6817\u9285\u947C\u68AF\u7530",t:"hill",lon:120.79,lat:24.49,i:"\u{1F33E}",d:"\u628A\u4E18\u9675\u5C71\u5761\u958B\u6210\u4E00\u5C64\u4E00\u5C64\u7684\u7530\uFF08\u570B\u5C0F4\u4E0B\u8AB2\u672C\u8209\u4F8B\uFF09\u3002"},{n:"\u4E09\u7FA9\u6728\u96D5\u8857",t:"hill",lon:120.77,lat:24.4,i:"\u{1FAB5}",d:"\u82D7\u6817\u4E18\u9675\u4E0A\u7684\u5C0F\u93AE\uFF0C\u4EE5\u6728\u96D5\u805E\u540D\u3002"},{n:"\u6708\u4E16\u754C",t:"hill",lon:120.39,lat:22.92,i:"\u{1F319}",d:"\u6CE5\u5CA9\u4E18\u9675\u88AB\u96E8\u6C34\u6C96\u5237\uFF0C\u5F62\u6210\u5149\u79BF\u79BF\u3001\u50CF\u6708\u7403\u8868\u9762\u7684\u300C\u60E1\u5730\u300D\u3002"},{n:"\u6843\u5712\u57E4\u5858",t:"tableland",lon:121.12,lat:24.93,i:"\u{1F4A7}",d:"\u53F0\u5730\u5BB9\u6613\u7F3A\u6C34\uFF0C\u4EE5\u524D\u7684\u4EBA\u6316\u4E86\u5F88\u591A\u57E4\u5858\u5B58\u6C34\uFF0C\u88AB\u7A31\u70BA\u300C\u5343\u5858\u4E4B\u9109\u300D\u3002"},{n:"\u6797\u53E3\u53F0\u5730",t:"tableland",lon:121.37,lat:25.06,i:"\u{1F3D9}\uFE0F",d:"\u53F0\u5730\u4E0A\u5E73\u5766\uFF0C\u84CB\u4E86\u65B0\u5E02\u93AE\u3001\u91AB\u9662\u548C\u5B78\u6821\u3002"},{n:"\u81FA\u4E2D\u90FD\u6703\u516C\u5712",t:"tableland",lon:120.595,lat:24.21,i:"\u{1F333}",d:"\u5927\u809A\u53F0\u5730\u4E0A\u5E73\u5766\u7684\u5927\u516C\u5712\uFF1B\u5927\u809A\u53F0\u5730\u4E5F\u6709\u6A5F\u5834\u3001\u5927\u5B78\u8207\u5DE5\u696D\u5340\uFF08\u8AB2\u672C\uFF09\u3002"},{n:"\u516B\u5366\u5C71\u5927\u4F5B",t:"tableland",lon:120.553,lat:24.08,i:"\u{1F6D5}",d:"\u5728\u516B\u5366\u53F0\u5730\u908A\u7DE3\uFF0C\u53EF\u4EE5\u4FEF\u770B\u6574\u500B\u5F70\u5316\u5E73\u539F\u3002"},{n:"\u81FA\u5317 101",t:"basin",lon:121.565,lat:25.034,i:"\u{1F5FC}",d:"\u81FA\u5317\u76C6\u5730\u662F\u4EBA\u53E3\u6700\u5BC6\u96C6\u7684\u5730\u65B9\uFF0C101 \u5927\u6A13\u662F\u81FA\u5317\u7684\u5730\u6A19\u3002"},{n:"\u81FA\u4E2D\u516C\u5712",t:"basin",lon:120.685,lat:24.145,i:"\u{1F3EF}",d:"\u81FA\u4E2D\u76C6\u5730\u7684\u8001\u516C\u5712\uFF0C\u6E56\u5FC3\u4EAD\u662F\u81FA\u4E2D\u7684\u8C61\u5FB5\u3002"},{n:"\u81FA\u7063\u5730\u7406\u4E2D\u5FC3\u7891",t:"basin",lon:120.98,lat:23.975,i:"\u{1F4CD}",d:"\u5728\u57D4\u91CC\u76C6\u5730\uFF0C\u4EE3\u8868\u81FA\u7063\u672C\u5CF6\u7684\u5730\u7406\u4E2D\u5FC3\u3002"},{n:"\u6CF0\u6E90\u5E7D\u8C37",t:"basin",lon:121.3,lat:22.99,i:"\u{1F3DE}\uFE0F",d:"\u6D77\u5CB8\u5C71\u8108\u88E1\u7684\u5C0F\u76C6\u5730\uFF0C\u5E38\u53EF\u770B\u5230\u81FA\u7063\u737C\u7334\u3002"},{n:"\u70CF\u5C71\u982D\u6C34\u5EAB\u30FB\u5609\u5357\u5927\u5733",t:"plain",lon:120.39,lat:23.2,i:"\u{1F6B0}",d:"\u516B\u7530\u8207\u4E00\u8A2D\u8A08\u7684\u6C34\u5229\u5DE5\u7A0B\uFF0C\u8B93\u5609\u5357\u5E73\u539F\u6210\u70BA\u300C\u81FA\u7063\u7C73\u5009\u300D\u3002"},{n:"\u4E03\u80A1\u9E7D\u5C71",t:"plain",lon:120.09,lat:23.15,i:"\u{1F9C2}",d:"\u5609\u5357\u5E73\u539F\u6CBF\u6D77\u967D\u5149\u5145\u8DB3\u3001\u96E8\u5C11\uFF0C\u9069\u5408\u66EC\u9E7D\uFF1B\u65C1\u908A\u662F\u53F0\u6C5F\u570B\u5BB6\u516C\u5712\u3002"},{n:"\u51AC\u5C71\u6CB3\u89AA\u6C34\u516C\u5712",t:"plain",lon:121.8,lat:24.65,i:"\u{1F6A3}",d:"\u862D\u967D\u5E73\u539F\u4E0A\u7684\u6CB3\u5DDD\u516C\u5712\uFF0C\u6709\u570B\u969B\u7AE5\u73A9\u7BC0\u3002"},{n:"\u6C60\u4E0A\u4F2F\u6717\u5927\u9053",t:"plain",lon:121.23,lat:23.1,i:"\u{1F35A}",d:"\u82B1\u6771\u7E31\u8C37\u5E73\u539F\u7684\u7A3B\u7530\u5927\u9053\uFF0C\u6625\u5929\u9084\u6709\u6CB9\u83DC\u82B1\uFF08\u570B\u5C0F4\u4E0B\uFF1A\u6625\uFF09\u3002"},{n:"\u7389\u91CC\u820A\u9435\u6A4B\u81EA\u884C\u8ECA\u9053",t:"plain",lon:121.31,lat:23.33,i:"\u{1F6B2}",d:"\u820A\u9435\u6A4B\u88AB\u677F\u584A\u64E0\u58D3\u8B8A\u5F62\uFF0C\u6539\u6210\u81EA\u884C\u8ECA\u9053\uFF08\u8AB2\u672C\uFF1A\u677F\u584A\u4EA4\u754C\u5730\u6A19\uFF09\u3002"},{n:"\u5927\u9D6C\u7063",t:"plain",lon:120.47,lat:22.44,i:"\u26F5",d:"\u5C4F\u6771\u5E73\u539F\u6CBF\u6D77\u7684\u6F5F\u6E56\u3002"},{n:"\u967D\u660E\u5C71\u570B\u5BB6\u516C\u5712",t:"volcano",lon:121.56,lat:25.16,i:"\u{1F30B}",d:"\u5927\u5C6F\u706B\u5C71\u7FA4\uFF0C\u6709\u786B\u78FA\u5674\u6C23\u5B54\u3001\u6EAB\u6CC9\u548C\u6625\u5929\u7684\u82B1\u5B63\u3002"},{n:"\u91CE\u67F3\u5730\u8CEA\u516C\u5712",t:"coast",lon:121.69,lat:25.21,i:"\u{1F451}",d:"\u6D77\u6D6A\u548C\u98A8\u628A\u5CA9\u77F3\u96D5\u6210\u300C\u5973\u738B\u982D\u300D\u3002"},{n:"\u4E5D\u4EFD",t:"coast",lon:121.84,lat:25.11,i:"\u{1F3EE}",d:"\u5728\u57FA\u9686\u5C71\u7684\u5C71\u5761\u4E0A\uFF0C\u51AC\u5929\u5439\u6771\u5317\u5B63\u98A8\u6642\u5E38\u5E38\u4E0B\u96E8\uFF08\u8AB2\u672C\u8209\u4F8B\uFF09\u3002"},{n:"\u6E05\u6C34\u65B7\u5D16",t:"coast",lon:121.66,lat:24.21,i:"\u{1F9D7}",d:"\u5C71\u76F4\u63A5\u63D2\u9032\u592A\u5E73\u6D0B\uFF0C\u662F\u300C\u65B7\u5C64\u6D77\u5CB8\u300D\uFF08\u8AB2\u672C\uFF09\u3002"},{n:"\u58BE\u4E01\u570B\u5BB6\u516C\u5712\u30FB\u9D5D\u947E\u9F3B",t:"coast",lon:120.85,lat:21.9,i:"\u{1F5FC}",d:"\u81FA\u7063\u6700\u5357\u7AEF\uFF0C\u6709\u73CA\u745A\u7901\u6D77\u5CB8\uFF08\u8AB2\u672C\uFF09\u548C\u9D5D\u947E\u9F3B\u71C8\u5854\u3002"},{n:"\u5317\u9580\u6F5F\u6E56",t:"coast",lon:120.11,lat:23.27,i:"\u{1F9A9}",d:"\u6C99\u6D32\u570D\u51FA\u4F86\u7684\u6F5F\u6E56\uFF08\u8AB2\u672C\uFF1A\u6D77\u5CB8\u5730\u5F62\uFF09\u3002"},{n:"\u9F3B\u982D\u89D2",t:"coast",lon:121.92,lat:25.13,i:"\u{1F30A}",d:"\u5CAC\u89D2\u548C\u6D77\u7063\u4EA4\u932F\u7684\u300C\u5CAC\u7063\u6D77\u5CB8\u300D\uFF08\u8AB2\u672C\uFF09\u3002"},{n:"\u6F8E\u6E56\u8DE8\u6D77\u5927\u6A4B",t:"island",lon:119.57,lat:23.63,i:"\u{1F309}",d:"\u9023\u63A5\u767D\u6C99\u5CF6\u8207\u897F\u5DBC\uFF1B\u9644\u8FD1\u53EF\u770B\u5230\u67F1\u72C0\u7384\u6B66\u5CA9\u3002"},{n:"\u91D1\u9580\u8392\u5149\u6A13",t:"island",lon:118.32,lat:24.43,i:"\u{1F3EF}",d:"\u91D1\u9580\u7684\u5730\u6A19\uFF0C\u4E5F\u53EF\u4EE5\u53C3\u89C0\u53E4\u5BE7\u982D\u7B49\u6230\u5730\u53F2\u8E5F\u3002"},{n:"\u99AC\u7956\u82B9\u58C1\u805A\u843D",t:"island",lon:119.98,lat:26.225,i:"\u{1F3D8}\uFE0F",d:"\u6CBF\u8457\u5C71\u5761\u84CB\u7684\u82B1\u5D17\u77F3\u5C4B\uFF1B\u590F\u591C\u53EF\u80FD\u770B\u5230\u85CD\u773C\u6DDA\u3002"},{n:"\u862D\u5DBC\u62FC\u677F\u821F",t:"island",lon:121.51,lat:22.07,i:"\u{1F6F6}",d:"\u9054\u609F\u65CF\u7684\u62FC\u677F\u821F\u548C\u98DB\u9B5A\u796D\uFF08\u8AB2\u672C\uFF09\u3002"},{n:"\u7DA0\u5CF6\u671D\u65E5\u6EAB\u6CC9",t:"island",lon:121.505,lat:22.64,i:"\u2668\uFE0F",d:"\u4E16\u754C\u5C11\u898B\u7684\u6D77\u5E95\uFF08\u6D77\u6C34\uFF09\u6EAB\u6CC9\u3002"},{n:"\u6771\u6C99\u74B0\u7901\u570B\u5BB6\u516C\u5712",t:"island",lon:116.72,lat:20.7,i:"\u{1F420}",d:"\u81FA\u7063\u7B2C\u4E00\u5EA7\u6D77\u6D0B\u570B\u5BB6\u516C\u5712\uFF08\u6C11\u570B96\u5E74\u6210\u7ACB\uFF09\u3002"}],hr={N:{name:"\u5317\u90E8",color:"#5b8def",list:"\u57FA\u9686\u3001\u81FA\u5317\u3001\u65B0\u5317\u3001\u6843\u5712\u3001\u65B0\u7AF9\u7E23\u5E02\u3001\u5B9C\u862D"},C:{name:"\u4E2D\u90E8",color:"#3fbf7f",list:"\u82D7\u6817\u3001\u81FA\u4E2D\u3001\u5F70\u5316\u3001\u5357\u6295\u3001\u96F2\u6797"},S:{name:"\u5357\u90E8",color:"#f2994a",list:"\u5609\u7FA9\u7E23\u5E02\u3001\u81FA\u5357\u3001\u9AD8\u96C4\u3001\u5C4F\u6771\u3001\u6F8E\u6E56"},E:{name:"\u6771\u90E8",color:"#b07cd8",list:"\u82B1\u84EE\u3001\u81FA\u6771\uFF08\u542B\u7DA0\u5CF6\u3001\u862D\u5DBC\uFF09"},O:{name:"\u5176\u4ED6\u96E2\u5CF6",color:"#eb5f8a",list:"\u91D1\u9580\u3001\u9023\u6C5F\uFF08\u99AC\u7956\uFF09\u3001\u6771\u6C99\uFF08\u5C6C\u9AD8\u96C4\u5E02\u7BA1\u8F44\uFF09"}},Hi=[{id:"tamsui",name:"\u6DE1\u6C34",region:"N",lon:121.44,lat:25.17,src:"book",mm:[105.9,148,153.4,157.6,239.8,257.4,119.8,218.3,290.1,165.8,104.2,112.4]},{id:"kaohsiung",name:"\u9AD8\u96C4",region:"S",lon:120.31,lat:22.62,src:"book",mm:[19.1,17.7,32.3,68.4,202.2,416.2,377.2,512.4,224.5,53.4,25.6,19.2]},{id:"hengchun",name:"\u6046\u6625",region:"S",lon:120.74,lat:22,src:"book",mm:[21.8,23.2,16,35.2,146.6,350.7,391.3,533.4,320.3,125.3,58.3,29]},{id:"yushan",name:"\u7389\u5C71",region:"C",lon:120.959,lat:23.488,src:"book",mm:[83.7,67.2,94.8,201.2,423.6,459.6,434.2,516,297.2,145.1,98.3,81.6]},{id:"taipei",name:"\u81FA\u5317",region:"N",lon:121.51,lat:25.04,src:"cwa",mm:[95,171,181,172,234,326,246,323,365,147,89,79]},{id:"keelung",name:"\u57FA\u9686",region:"N",lon:121.74,lat:25.13,src:"cwa",mm:[331,397,321,242,285,301,148,207,368,396,412,345]},{id:"yilan",name:"\u5B9C\u862D",region:"N",lon:121.75,lat:24.76,src:"cwa",mm:[158,155,133,129,214,214,145,223,421,459,343,210]},{id:"taichung",name:"\u81FA\u4E2D",region:"C",lon:120.68,lat:24.15,src:"cwa",note:"\u5E74\u96E8\u91CF 1,763 mm \u70BA\u8AB2\u672C\u6578\u5B57",mm:[32,88,95,135,225,341,245,317,140,16,19,30]},{id:"hualien",name:"\u82B1\u84EE",region:"E",lon:121.61,lat:23.98,src:"cwa",note:"\u5E74\u96E8\u91CF 2,035 mm \u70BA\u8AB2\u672C\u6578\u5B57",mm:[66,99,89,89,172,191,147,241,319,299,128,58]},{id:"penghu",name:"\u6F8E\u6E56",region:"S",lon:119.56,lat:23.57,src:"cwa",mm:[21,46,59,95,124,170,129,182,96,26,21,20]}],Xc=[{name:"\u6625",months:[2,3,4],color:"#f7b6c8"},{name:"\u590F",months:[5,6,7],color:"#ffd27f"},{name:"\u79CB",months:[8,9,10],color:"#f0a868"},{name:"\u51AC",months:[11,0,1],color:"#a9c8ef"}],eo=[{why:"\u6771\u5317\u5B63\u98A8",where:"\u5317\u90E8\u3001\u6771\u5317\u90E8",elem:"\u51AC\u5929\u5439\u300C\u6771\u5317\u5B63\u98A8\u300D\uFF0C\u98A8\u5F9E\u6D77\u4E0A\u5E36\u4F86\u6C34\u6C23\uFF0C\u5317\u90E8\u548C\u6771\u5317\u90E8\uFF08\u57FA\u9686\u3001\u5B9C\u862D\uFF09\u5E38\u5E38\u4E0B\u96E8\u53C8\u6EBC\u51B7\uFF1B\u5357\u90E8\u5F88\u5C11\u4E0B\u96E8\u3002",zones:[[121.3,24.4,122.1,25.35],[121.4,23.6,121.8,24.4]]},{why:"\u6771\u5317\u5B63\u98A8",where:"\u5317\u90E8\u3001\u6771\u5317\u90E8",elem:"\u9084\u662F\u6771\u5317\u5B63\u98A8\u7684\u5B63\u7BC0\uFF0C\u5317\u90E8\u3001\u6771\u5317\u90E8\u6EBC\u51B7\u591A\u96E8\uFF0C\u5357\u90E8\u4E7E\u71E5\u3002",zones:[[121.3,24.4,122.1,25.35]]},{why:"\u6625\u96E8",where:"\u5317\u90E8\u3001\u4E2D\u90E8",elem:"\u6625\u5929\u5929\u6C23\u4E0D\u7A69\u5B9A\uFF0C\u5317\u90E8\u5E38\u6709\u7DBF\u7DBF\u7D30\u96E8\uFF0C\u5357\u90E8\u4ECD\u7136\u6BD4\u8F03\u4E7E\u3002",zones:[[120.9,24.3,122,25.35],[120.6,23.8,121.3,24.4]]},{why:"\u6625\u96E8",where:"\u5317\u90E8\u3001\u4E2D\u90E8\u5C71\u5340",elem:"\u6625\u96E8\u8B8A\u591A\uFF0C\u5C71\u5340\u5E38\u6709\u5348\u5F8C\u7684\u96F2\u96E8\uFF1B\u5357\u90E8\u4E5F\u958B\u59CB\u8F49\u6EBC\u3002",zones:[[120.8,23.6,121.9,25.3]]},{why:"\u6885\u96E8\uFF08\u92D2\u9762\u96E8\uFF09",where:"\u5168\u81FA",elem:"5\u30016\u6708\u662F\u300C\u6885\u96E8\u5B63\u300D\uFF0C\u92D2\u9762\u505C\u5728\u81FA\u7063\u9644\u8FD1\uFF0C\u5168\u81FA\u90FD\u5BB9\u6613\u4E0B\u5927\u96E8\u3002",zones:[[120.1,22.4,121.9,25.3]]},{why:"\u6885\u96E8\uFF0B\u897F\u5357\u5B63\u98A8",where:"\u5168\u81FA\uFF0C\u4E2D\u5357\u90E8\u6700\u591A",elem:"\u6885\u96E8\u52A0\u4E0A\u897F\u5357\u5B63\u98A8\uFF0C\u4E2D\u5357\u90E8\u548C\u5C71\u5340\u96E8\u91CF\u5927\u589E\uFF0C\u9AD8\u96C4 6 \u6708\u7D04 416 \u6BEB\u7C73\u3002",zones:[[120.1,22,121.3,24.3],[120.6,22.5,121.5,24.5]]},{why:"\u98B1\u98A8\uFF0B\u5348\u5F8C\u96F7\u9663\u96E8",where:"\u5357\u90E8\u3001\u5C71\u5340",elem:"\u590F\u5929\u5F88\u71B1\uFF0C\u5348\u5F8C\u5E38\u6709\u96F7\u9663\u96E8\uFF08\u5C0D\u6D41\u96E8\uFF09\uFF1B\u98B1\u98A8\u4E5F\u5E36\u4F86\u5927\u91CF\u96E8\u6C34\uFF0C\u5357\u90E8\u548C\u5C71\u5340\u6700\u591A\u3002",zones:[[120.2,22,121.2,23.8],[120.7,23,121.4,24.4]]},{why:"\u98B1\u98A8\uFF0B\u897F\u5357\u5B63\u98A8",where:"\u5357\u90E8\u3001\u5C71\u5340",elem:"8 \u6708\u662F\u5F88\u591A\u5730\u65B9\u4E00\u5E74\u4E2D\u96E8\u6700\u591A\u7684\u6708\u4EFD\uFF08\u9AD8\u96C4\u7D04 512 \u6BEB\u7C73\u3001\u6046\u6625\u7D04 533 \u6BEB\u7C73\uFF09\uFF0C\u5E38\u6709\u98B1\u98A8\u3002",zones:[[120.2,21.9,121.2,23.6],[120.6,22.5,121.4,24.3]]},{why:"\u98B1\u98A8",where:"\u6771\u90E8\u3001\u5317\u90E8",elem:"\u79CB\u98B1\u5E38\u5E36\u4F86\u8C6A\u96E8\uFF0C\u6771\u90E8\u8207\u5317\u90E8\u96E8\u91CF\u591A\u3002",zones:[[121.3,22.6,121.9,24.6],[121.2,24.6,122,25.3]]},{why:"\u6771\u5317\u5B63\u98A8\uFF0B\u79CB\u98B1",where:"\u6771\u5317\u90E8\u3001\u6771\u90E8",elem:"\u6771\u5317\u5B63\u98A8\u958B\u59CB\u5439\uFF0C\u5B9C\u862D\u3001\u57FA\u9686\u3001\u82B1\u84EE\u591A\u96E8\uFF1B\u4E2D\u5357\u90E8\u9032\u5165\u4E7E\u5B63\uFF08\u81FA\u4E2D 10 \u6708\u53EA\u6709\u5341\u5E7E\u6BEB\u7C73\uFF09\u3002",zones:[[121.4,23.6,122,25.3]]},{why:"\u6771\u5317\u5B63\u98A8",where:"\u5317\u90E8\u3001\u6771\u5317\u90E8",elem:"\u6771\u5317\u5B63\u98A8\u8B8A\u5F37\uFF0C\u57FA\u9686\u662F\u5168\u81FA 11 \u6708\u6700\u6EBC\u7684\u5730\u65B9\u4E4B\u4E00\uFF1B\u897F\u5357\u90E8\u5F88\u4E7E\u71E5\u3002",zones:[[121.3,24.4,122.1,25.35]]},{why:"\u6771\u5317\u5B63\u98A8",where:"\u5317\u90E8\u3001\u6771\u5317\u90E8",elem:"\u51AC\u5929\u6771\u5317\u5B63\u98A8\uFF0C\u5317\u90E8\u6EBC\u51B7\uFF1B\u5357\u90E8\u6674\u6717\u5C11\u96E8\uFF0C\u6240\u4EE5\u5357\u90E8\u300C\u590F\u96E8\u51AC\u4E7E\u300D\u3002",zones:[[121.3,24.4,122.1,25.35],[121.4,23.8,121.8,24.4]]}],ld=[{name:"\u5927\u96E8",mm:80},{name:"\u8C6A\u96E8",mm:200},{name:"\u5927\u8C6A\u96E8",mm:350},{name:"\u8D85\u5927\u8C6A\u96E8",mm:500}],vn=[{id:"amis",n:"\u963F\u7F8E\u65CF",c:"#e4572e",v:"\u99AC\u592A\u978D\u90E8\u843D",vlon:121.42,vlat:23.655,where:"\u82B1\u84EE\u3001\u81FA\u6771\u7684\u82B1\u6771\u7E31\u8C37\u8207\u6771\u6D77\u5CB8",zones:[[121.6,23.97,6],[121.57,23.902,6],[121.54,23.835,6],[121.51,23.767,6],[121.48,23.7,6],[121.45,23.625,6],[121.42,23.55,6],[121.39,23.475,6],[121.36,23.4,6],[121.33,23.337,6],[121.3,23.275,6],[121.27,23.212,6],[121.24,23.15,6],[121.218,23.087,6],[121.195,23.025,6],[121.172,22.962,6],[121.15,22.9,6],[121.135,22.83,6],[121.12,22.76,6],[121.56,23.75,5.5],[121.547,23.683,5.5],[121.533,23.617,5.5],[121.52,23.55,5.5],[121.5,23.483,5.5],[121.48,23.417,5.5],[121.46,23.35,5.5],[121.437,23.283,5.5],[121.413,23.217,5.5],[121.39,23.15,5.5],[121.345,23.065,5.5],[121.3,22.98,5.5],[121.26,22.915,5.5],[121.22,22.85,5.5]],elem:"\u4EBA\u53E3\u6700\u591A\u7684\u539F\u4F4F\u6C11\u65CF\uFF0C\u4F4F\u5728\u82B1\u6771\u7684\u5E73\u539F\u548C\u6D77\u908A\u3002\u590F\u5929\u8209\u884C\u300C\u8C50\u5E74\u796D\u300D\uFF0C\u5927\u5BB6\u624B\u727D\u624B\u5531\u6B4C\u8DF3\u821E\uFF0C\u611F\u8B1D\u7956\u9748\u5E36\u4F86\u8C50\u6536\u3002",junior:"\u4EBA\u53E3\u6700\u591A\u7684\u539F\u4F4F\u6C11\u65CF\uFF0C\u4E3B\u8981\u5206\u5E03\u65BC\u82B1\u6771\u7E31\u8C37\u8207\u6771\u6D77\u5CB8\u5E73\u539F\uFF0C\u4EE5\u8FB2\u8015\u3001\u6355\u9B5A\u7DAD\u751F\uFF1B\u50B3\u7D71\u70BA\u6BCD\u7CFB\u793E\u6703\uFF0C\u7537\u5B50\u4F9D\u5E74\u9F61\u7D44\u6210\u300C\u5E74\u9F61\u968E\u7D1A\u300D\u3002\u590F\u5B63\u7684\u8C50\u5E74\u796D\uFF08ilisin\uFF09\u662F\u6700\u91CD\u8981\u7684\u796D\u5178\u3002"},{id:"atayal",n:"\u6CF0\u96C5\u65CF",c:"#2a9d8f",v:"\u53F8\u99AC\u5EAB\u65AF\u90E8\u843D",vlon:121.33,vlat:24.58,where:"\u5317\u90E8\u5C71\u5340\uFF08\u65B0\u5317\u3001\u6843\u5712\u3001\u65B0\u7AF9\u3001\u82D7\u6817\u3001\u81FA\u4E2D\u3001\u5B9C\u862D\uFF09",zones:[[121.55,24.83,10],[121.37,24.72,13],[121.26,24.58,12],[121.08,24.42,10],[121.25,24.3,13],[121.55,24.55,14],[121.62,24.42,10]],elem:"\u5206\u5E03\u7BC4\u570D\u6700\u5EE3\uFF0C\u4F4F\u5728\u5317\u90E8\u7684\u5C71\u4E0A\u3002\u4EE5\u524D\u6709\u300C\u7D0B\u9762\u300D\u7684\u50B3\u7D71\uFF0C\u4E5F\u5F88\u6703\u7528\u82E7\u9EBB\u7E54\u5E03\u3002\u53F8\u99AC\u5EAB\u65AF\u662F\u6709\u540D\u7684\u300C\u4E0A\u5E1D\u7684\u90E8\u843D\u300D\uFF0C\u6709\u5DE8\u6728\u7FA4\u3002",junior:"\u5206\u5E03\u7BC4\u570D\u6700\u5EE3\u7684\u539F\u4F4F\u6C11\u65CF\uFF0C\u5C45\u4F4F\u65BC\u5317\u90E8\u5C71\u5340\u3002\u50B3\u7D71\u4E0A\u7537\u5B50\u6703\u72E9\u7375\u3001\u5973\u5B50\u64C5\u9577\u7E54\u5E03\uFF0C\u7D0B\u9762\u662F\u6210\u5E74\u8207\u69AE\u8B7D\u7684\u8C61\u5FB5\uFF1B\u90E8\u843D\u9075\u5B88\u7956\u8A13\u300CGaga\u300D\u3002\u53F8\u99AC\u5EAB\u65AF\u90E8\u843D\u4EE5\u5171\u540C\u7D93\u71DF\u3001\u5171\u4EAB\u6536\u76CA\u805E\u540D\u3002"},{id:"paiwan",n:"\u6392\u7063\u65CF",c:"#8338ec",v:"\u4E09\u5730\u9580\u90E8\u843D",vlon:120.654,vlat:22.715,where:"\u5C4F\u6771\u3001\u81FA\u6771\u5357\u90E8\u7684\u5927\u6B66\u5C71\u4E00\u5E36",zones:[[120.7,22.6,11],[120.74,22.42,11],[120.82,22.25,9],[120.9,22.42,8],[120.85,22.12,6]],elem:"\u4F4F\u5728\u5357\u90E8\u5927\u6B66\u5C71\u9644\u8FD1\uFF0C\u5F88\u6703\u505A\u7409\u7483\u73E0\u548C\u96D5\u523B\uFF0C\u5E38\u7528\u300C\u767E\u6B65\u86C7\u300D\u7576\u5716\u6848\u3002\u6BCF\u4E94\u5E74\u8209\u884C\u4E00\u6B21\u300C\u4E94\u5E74\u796D\u300D\u3002",junior:"\u5206\u5E03\u65BC\u5927\u6B66\u5C71\u5468\u570D\uFF0C\u6709\u982D\u76EE\uFF08\u8CB4\u65CF\uFF09\u8207\u5E73\u6C11\u7684\u968E\u5C64\u5236\u5EA6\uFF0C\u767E\u6B65\u86C7\u3001\u592A\u967D\u8207\u9676\u58FA\u662F\u91CD\u8981\u8C61\u5FB5\uFF1B\u64C5\u9577\u7409\u7483\u73E0\u3001\u6728\u96D5\u8207\u77F3\u677F\u5C4B\u5EFA\u7BC9\u3002\u4E94\u5E74\u796D\uFF08maljeveq\uFF09\u662F\u8FCE\u63A5\u7956\u9748\u7684\u91CD\u8981\u796D\u5178\u3002"},{id:"bunun",n:"\u5E03\u8FB2\u65CF",c:"#3a86ff",v:"\u6771\u57D4\u90E8\u843D",vlon:120.93,vlat:23.56,where:"\u4E2D\u592E\u5C71\u8108\u7684\u9AD8\u5C71\uFF08\u5357\u6295\u3001\u82B1\u84EE\u3001\u81FA\u6771\u3001\u9AD8\u96C4\uFF09",zones:[[121,23.62,12],[121.08,23.82,7],[121.15,23.38,12],[121.05,23.15,10],[120.88,23.22,8]],elem:"\u4F4F\u5F97\u6700\u9AD8\u7684\u539F\u4F4F\u6C11\u65CF\uFF0C\u4F4F\u5728\u4E2D\u592E\u5C71\u8108\u7684\u9AD8\u5C71\u4E0A\uFF0C\u5F88\u6703\u6253\u7375\u3002\u5927\u5BB6\u4E00\u8D77\u5531\u7684\u300C\u516B\u90E8\u5408\u97F3\u300D\u975E\u5E38\u6709\u540D\u3002",junior:"\u5C45\u4F4F\u6D77\u62D4\u6700\u9AD8\u3001\u6D3B\u52D5\u7BC4\u570D\u6700\u5EE3\u7684\u9AD8\u5C71\u6C11\u65CF\uFF0C\u4EE5\u72E9\u7375\u8207\u5C0F\u7C73\u8015\u4F5C\u70BA\u4E3B\uFF1B\u4EE5\u7236\u7CFB\u6C0F\u65CF\u7D44\u7E54\u793E\u6703\u3002\u7948\u79B1\u5C0F\u7C73\u8C50\u6536\u7684\u300C\u516B\u90E8\u5408\u97F3\u300D\uFF08pasibutbut\uFF09\u4EAB\u8B7D\u570B\u969B\uFF0C\u6253\u8033\u796D\u662F\u91CD\u8981\u7684\u72E9\u7375\u796D\u5100\u3002"},{id:"puyuma",n:"\u5351\u5357\u65CF",c:"#ff006e",v:"\u5357\u738B\u90E8\u843D\uFF08\u666E\u60A0\u746A\uFF09",vlon:121.12,vlat:22.77,where:"\u81FA\u6771\u5E73\u539F\uFF08\u81FA\u6771\u5E02\u3001\u5351\u5357\u9109\uFF09",zones:[[121.1,22.78,6],[121.06,22.73,4]],elem:"\u4F4F\u5728\u81FA\u6771\u5E73\u539F\u3002\u7537\u5B69\u5B50\u8981\u9032\u300C\u5C11\u5E74\u6703\u6240\u300D\u63A5\u53D7\u8A13\u7DF4\uFF0C\u51AC\u5929\u6709\u300C\u7334\u796D\u300D\u548C\u300C\u5927\u7375\u796D\u300D\u3002",junior:"\u5206\u5E03\u65BC\u81FA\u6771\u5E73\u539F\uFF0C\u4EE5\u56B4\u683C\u7684\u6703\u6240\u5236\u5EA6\uFF08\u5C11\u5E74\u6703\u6240\u3001\u9752\u5E74\u6703\u6240\uFF09\u8A13\u7DF4\u7537\u5B50\uFF1B\u5E74\u5E95\u7684\u7334\u796D\u8207\u5927\u7375\u796D\u662F\u6210\u5E74\u79AE\u7684\u91CD\u8981\u5100\u5F0F\u3002\u50B3\u7D71\u4E0A\u66FE\u662F\u81FA\u6771\u5E73\u539F\u4E0A\u5F37\u76DB\u7684\u65CF\u7FA4\u3002"},{id:"rukai",n:"\u9B6F\u51F1\u65CF",c:"#fb8500",v:"\u9727\u81FA\u90E8\u843D",vlon:120.73,vlat:22.745,where:"\u5C4F\u6771\u9727\u81FA\u3001\u9AD8\u96C4\u8302\u6797\u3001\u81FA\u6771\u6771\u8208",zones:[[120.74,22.76,6],[120.66,22.89,5],[121.02,22.8,3]],elem:"\u4F4F\u5728\u5357\u90E8\u5C71\u5340\uFF0C\u6703\u7528\u77F3\u677F\u84CB\u623F\u5B50\uFF08\u77F3\u677F\u5C4B\uFF09\u3002\u300C\u767E\u5408\u82B1\u300D\u662F\u4ED6\u5011\u7684\u69AE\u8000\uFF0C\u53EA\u6709\u8868\u73FE\u597D\u7684\u4EBA\u624D\u80FD\u6234\u3002",junior:"\u5206\u5E03\u65BC\u5C4F\u6771\u9727\u81FA\u3001\u9AD8\u96C4\u8302\u6797\u8207\u81FA\u6771\u6771\u8208\uFF0C\u6709\u8CB4\u65CF\u8207\u5E73\u6C11\u7684\u968E\u5C64\u5236\u5EA6\uFF1B\u4EE5\u9801\u5CA9\u77F3\u677F\u5EFA\u9020\u77F3\u677F\u5C4B\uFF08\u5982\u597D\u8336\u90E8\u843D\uFF09\u3002\u767E\u5408\u82B1\u8C61\u5FB5\u7537\u5B50\u7684\u52C7\u731B\u8207\u5973\u5B50\u7684\u8C9E\u6F54\uFF0C\u9808\u7D93\u8A8D\u53EF\u624D\u80FD\u914D\u6234\u3002"},{id:"tsou",n:"\u9112\u65CF",c:"#06d6a0",v:"\u9054\u90A6\u90E8\u843D",vlon:120.75,vlat:23.46,where:"\u5609\u7FA9\u963F\u91CC\u5C71",zones:[[120.76,23.45,8],[120.82,23.38,5]],elem:"\u4F4F\u5728\u963F\u91CC\u5C71\uFF0C\u90E8\u843D\u88E1\u6709\u7537\u5B50\u805A\u6703\u7684\u300C\u5EAB\u5DF4\u300D\uFF08\u7537\u5B50\u6703\u6240\uFF09\u3002\u300C\u6230\u796D\u300D\u662F\u5F88\u91CD\u8981\u7684\u796D\u5178\u3002",junior:"\u4E3B\u8981\u5206\u5E03\u65BC\u5609\u7FA9\u963F\u91CC\u5C71\uFF0C\u4EE5\u9054\u90A6\u3001\u7279\u5BCC\u91CE\u5169\u5927\u793E\u70BA\u4E2D\u5FC3\uFF1B\u7537\u5B50\u6703\u6240\u300C\u5EAB\u5DF4\u300D\uFF08kuba\uFF09\u662F\u90E8\u843D\u653F\u6CBB\u8207\u796D\u5100\u4E2D\u5FC3\u3002\u6230\u796D\uFF08mayasvi\uFF09\u7528\u4F86\u7948\u6C42\u6230\u795E\u5E87\u4F51\u3001\u51DD\u805A\u90E8\u843D\u3002"},{id:"saisiyat",n:"\u8CFD\u590F\u65CF",c:"#8d99ae",v:"\u5411\u5929\u6E56\u90E8\u843D",vlon:120.985,vlat:24.56,where:"\u65B0\u7AF9\u4E94\u5CF0\u3001\u82D7\u6817\u5357\u5E84",zones:[[120.99,24.57,6.5],[121.06,24.62,6],[121.03,24.6,6]],elem:"\u4F4F\u5728\u65B0\u7AF9\u548C\u82D7\u6817\u7684\u5C71\u5340\uFF0C\u6BCF\u5169\u5E74\u8209\u884C\u4E00\u6B21\u300C\u77EE\u9748\u796D\u300D\uFF0C\u7D00\u5FF5\u50B3\u8AAA\u4E2D\u7684\u77EE\u4EBA\u3002",junior:"\u5206\u5E03\u65BC\u65B0\u7AF9\u4E94\u5CF0\u8207\u82D7\u6817\u5357\u5E84\uFF0C\u4EBA\u53E3\u8F03\u5C11\uFF0C\u4EE5\u7236\u7CFB\u6C0F\u65CF\u7D44\u7E54\uFF0C\u5404\u59D3\u6C0F\u8CA0\u8CAC\u4E0D\u540C\u796D\u5100\u3002\u6BCF\u5169\u5E74\u8209\u884C\u7684\u77EE\u9748\u796D\uFF08pas-taai\uFF09\u6E90\u81EA\u8207\u77EE\u4EBA\u7684\u50B3\u8AAA\uFF0C\u662F\u91CD\u8981\u7684\u6B72\u6642\u796D\u5100\u3002"},{id:"yami",n:"\u96C5\u7F8E\u65CF\uFF08\u9054\u609F\u65CF\uFF09",c:"#118ab2",v:"\u91CE\u9280\u90E8\u843D",vlon:121.585,vlat:22.035,where:"\u862D\u5DBC",island:"lanyu",zones:[],elem:"\u4F4F\u5728\u862D\u5DBC\uFF0C\u662F\u552F\u4E00\u4F4F\u5728\u6D77\u5CF6\u4E0A\u7684\u539F\u4F4F\u6C11\u65CF\u3002\u6703\u505A\u6F02\u4EAE\u7684\u300C\u62FC\u677F\u821F\u300D\uFF0C\u6625\u5929\u6709\u300C\u98DB\u9B5A\u796D\u300D\uFF0C\u9084\u6709\u53EF\u4EE5\u9632\u98B1\u98A8\u7684\u300C\u5730\u4E0B\u5C4B\u300D\u3002",junior:"\u5C45\u4F4F\u65BC\u862D\u5DBC\uFF0C\u662F\u81FA\u7063\u552F\u4E00\u7684\u6D77\u6D0B\u6C11\u65CF\uFF0C\u751F\u6D3B\u4F9D\u5FAA\u98DB\u9B5A\u5B63\u7BC0\u5B89\u6392\uFF1B\u62FC\u677F\u821F\u3001\u98DB\u9B5A\u796D\u8207\u9632\u98B1\u7684\u534A\u7A74\u5C45\u5730\u4E0B\u5C4B\uFF08\u91CE\u9280\u90E8\u843D\u4FDD\u5B58\u5B8C\u6574\uFF09\u90FD\u5C55\u73FE\u9069\u61C9\u6D77\u5CF6\u74B0\u5883\u7684\u667A\u6167\u3002"},{id:"thao",n:"\u90B5\u65CF",c:"#ffbe0b",v:"\u4F0A\u9054\u90B5\u90E8\u843D",vlon:120.93,vlat:23.85,where:"\u5357\u6295\u65E5\u6708\u6F6D",zones:[[120.925,23.855,3]],elem:"\u4F4F\u5728\u65E5\u6708\u6F6D\u65C1\u908A\uFF0C\u662F\u4EBA\u6578\u5F88\u5C11\u7684\u539F\u4F4F\u6C11\u65CF\u3002\u7528\u6728\u6775\u6417\u7C73\u6642\u767C\u51FA\u7684\u300C\u6775\u97F3\u300D\u5F88\u597D\u807D\u3002",junior:"\u5C45\u4F4F\u65BC\u65E5\u6708\u6F6D\u5468\u908A\uFF0C\u662F\u4EBA\u53E3\u6700\u5C11\u7684\u65CF\u7FA4\u4E4B\u4E00\uFF1B\u4EE5\u6F01\u7375\u3001\u8FB2\u8015\u70BA\u751F\uFF0C\u300C\u7956\u9748\u7C43\u300D\u662F\u4FE1\u4EF0\u4E2D\u5FC3\u3002\u65E5\u6708\u6F6D\u7684\u6775\u97F3\u8207\u50B3\u8AAA\u300C\u767D\u9E7F\u300D\u90FD\u8207\u90B5\u65CF\u6709\u95DC\u3002"},{id:"kavalan",n:"\u5676\u746A\u862D\u65CF",c:"#9b5de5",v:"\u65B0\u793E\u90E8\u843D",vlon:121.522,vlat:23.79,where:"\u539F\u5C45\u5B9C\u862D\u5E73\u539F\uFF0C\u5F8C\u9077\u81F3\u82B1\u84EE\u65B0\u793E\u3001\u8C50\u6FF1",zones:[[121.52,23.78,4]],elem:"\u4EE5\u524D\u4F4F\u5728\u5B9C\u862D\u5E73\u539F\uFF0C\u5F8C\u4F86\u642C\u5230\u82B1\u84EE\u6D77\u908A\u3002\u6703\u7528\u9999\u8549\u6A39\u7684\u7E96\u7DAD\u7E54\u5E03\u3002",junior:"\u539F\u5C45\u5B9C\u862D\u862D\u967D\u5E73\u539F\uFF0C\u6E05\u4EE3\u6F22\u4EBA\u79FB\u5165\u5F8C\u591A\u6578\u5357\u9077\u81F3\u82B1\u84EE\u65B0\u793E\u3001\u8C50\u6FF1\u4E00\u5E36\uFF1B\u4EE5\u9999\u8549\u7D72\u7E54\u5E03\u805E\u540D\u3002\u6C11\u570B 91 \u5E74\u6B63\u540D\u70BA\u7B2C 11 \u65CF\u3002"},{id:"truku",n:"\u592A\u9B6F\u95A3\u65CF",c:"#d62828",v:"\u5BCC\u4E16\u90E8\u843D",vlon:121.61,vlat:24.15,where:"\u82B1\u84EE\u79C0\u6797\u3001\u842C\u69AE\u3001\u5353\u6EAA",zones:[[121.55,24.15,10],[121.42,23.82,7],[121.45,23.98,6]],elem:"\u4F4F\u5728\u82B1\u84EE\u7684\u592A\u9B6F\u95A3\u4E00\u5E36\uFF0C\u4E5F\u6709\u7D0B\u9762\u7684\u50B3\u7D71\uFF0C\u5F88\u6703\u7E54\u5E03\u548C\u6253\u7375\u3002",junior:"\u4E3B\u8981\u5206\u5E03\u65BC\u82B1\u84EE\u79C0\u6797\u3001\u842C\u69AE\uFF0C\u8207\u8CFD\u5FB7\u514B\u65CF\u540C\u6E90\uFF0C\u5F9E\u5357\u6295\u9077\u5F99\u5230\u6771\u90E8\uFF1B\u50B3\u7D71\u6709\u7D0B\u9762\u3001\u72E9\u7375\u8207\u7E54\u5E03\u6587\u5316\u3002\u6C11\u570B 93 \u5E74\u6B63\u540D\u70BA\u7B2C 12 \u65CF\uFF0C\u300C\u592A\u9B6F\u95A3\u570B\u5BB6\u516C\u5712\u300D\u5373\u4EE5\u5176\u547D\u540D\u3002"},{id:"sakizaya",n:"\u6492\u5947\u840A\u96C5\u65CF",c:"#f15bb5",v:"\u6492\u56FA\u5152\u90E8\u843D",vlon:121.6,vlat:23.995,where:"\u82B1\u84EE\u5E02\u3001\u58FD\u8C50\u3001\u745E\u7A57",zones:[[121.59,23.97,4]],elem:"\u4F4F\u5728\u82B1\u84EE\u5E02\u9644\u8FD1\u3002\u4ED6\u5011\u8209\u884C\u300C\u706B\u795E\u796D\u300D\uFF0C\u7D00\u5FF5\u4EE5\u524D\u7684\u6B77\u53F2\u3002",junior:"\u5206\u5E03\u65BC\u82B1\u84EE\u5947\u840A\u5E73\u539F\u4E00\u5E36\uFF0C\u6E05\u4EE3\u300C\u52A0\u79AE\u5B9B\u4E8B\u4EF6\u300D\u5F8C\u65CF\u4EBA\u96B1\u8EAB\u65BC\u963F\u7F8E\u65CF\u4E2D\uFF1B\u6C11\u570B 96 \u5E74\u6B63\u540D\u70BA\u7B2C 13 \u65CF\uFF0C\u706B\u795E\u796D\uFF08palamal\uFF09\u7D00\u5FF5\u5148\u4EBA\u3002"},{id:"seediq",n:"\u8CFD\u5FB7\u514B\u65CF",c:"#6a4c93",v:"\u9727\u793E\uFF08\u6E05\u6D41\u90E8\u843D\uFF09",vlon:121.13,vlat:24.03,where:"\u5357\u6295\u4EC1\u611B\uFF08\u9727\u793E\u4E00\u5E36\uFF09\u3001\u82B1\u84EE",zones:[[121.15,24.03,8],[121.2,24.12,5]],elem:"\u4F4F\u5728\u5357\u6295\u9727\u793E\u4E00\u5E36\uFF0C\u6709\u7D0B\u9762\u50B3\u7D71\u3002\u767C\u751F\u904E\u6709\u540D\u7684\u300C\u9727\u793E\u4E8B\u4EF6\u300D\uFF0C\u9818\u8896\u662F\u83AB\u90A3\u9B6F\u9053\u3002",junior:"\u5206\u5E03\u65BC\u5357\u6295\u4EC1\u611B\u9109\u9727\u793E\u4E00\u5E36\uFF0C\u4FE1\u5B88\u7956\u8A13\u300CGaya\u300D\uFF1B\u65E5\u6CBB\u6642\u671F\u83AB\u90A3\u9B6F\u9053\u9818\u5C0E\u65CF\u4EBA\u767C\u52D5\u300C\u9727\u793E\u4E8B\u4EF6\u300D\uFF08\u6C11\u570B 19 \u5E74\uFF09\u3002\u6C11\u570B 97 \u5E74\u6B63\u540D\u70BA\u7B2C 14 \u65CF\u3002"},{id:"hlaalua",n:"\u62C9\u963F\u9B6F\u54C7\u65CF",c:"#43aa8b",v:"\u9AD8\u4E2D\u90E8\u843D",vlon:120.76,vlat:23.15,where:"\u9AD8\u96C4\u6843\u6E90",zones:[[120.76,23.15,4]],elem:"\u4F4F\u5728\u9AD8\u96C4\u6843\u6E90\uFF0C\u4EBA\u6578\u5F88\u5C11\u3002\u6709\u4E00\u500B\u7279\u5225\u7684\u300C\u8056\u8C9D\u796D\u300D\uFF0C\u7528\u8C9D\u6BBC\u7948\u6C42\u5E73\u5B89\u3002",junior:"\u5206\u5E03\u65BC\u9AD8\u96C4\u6843\u6E90\u5340\uFF0C\u4EBA\u53E3\u5F88\u5C11\uFF1B\u6700\u91CD\u8981\u7684\u796D\u5178\u662F\u796D\u62DC\u8056\u8C9D\u7684\u300C\u8056\u8C9D\u796D\u300D\uFF08miatungusu\uFF09\u3002\u6C11\u570B 103 \u5E74\u6B63\u540D\u70BA\u7B2C 15 \u65CF\u3002"},{id:"kanakanavu",n:"\u5361\u90A3\u5361\u90A3\u5BCC\u65CF",c:"#577590",v:"\u9054\u5361\u52AA\u74E6\u90E8\u843D",vlon:120.7,vlat:23.27,where:"\u9AD8\u96C4\u90A3\u746A\u590F",zones:[[120.7,23.27,4]],elem:"\u4F4F\u5728\u9AD8\u96C4\u90A3\u746A\u590F\uFF0C\u4EBA\u6578\u5F88\u5C11\u3002\u6703\u8209\u884C\u300C\u7C73\u8CA2\u796D\u300D\u611F\u8B1D\u5C0F\u7C73\u8C50\u6536\uFF0C\u4E5F\u6709\u4FDD\u8B77\u6CB3\u5DDD\u7684\u300C\u6CB3\u796D\u300D\u3002",junior:"\u5206\u5E03\u65BC\u9AD8\u96C4\u90A3\u746A\u590F\u6960\u6893\u4ED9\u6EAA\u6D41\u57DF\uFF0C\u4EBA\u53E3\u5F88\u5C11\uFF1B\u91CD\u8981\u796D\u5178\u6709\u5C0F\u7C73\u6536\u7A6B\u7684\u300C\u7C73\u8CA2\u796D\u300D\u8207\u7DAD\u8B77\u6F01\u6488\u8CC7\u6E90\u7684\u300C\u6CB3\u796D\u300D\u3002\u6C11\u570B 103 \u5E74\u6B63\u540D\u70BA\u7B2C 16 \u65CF\u3002"},{id:"siraya",n:"\u897F\u62C9\u96C5\u65CF",c:"#a0522d",v:"\u5409\u8C9D\u800D\u90E8\u843D",vlon:120.4,vlat:23.3,where:"\u50B3\u7D71\u5206\u5E03\uFF1A\u5609\u5357\u5E73\u539F\u5230\u6046\u6625\u534A\u5CF6\uFF1B\u73FE\u4ECA\uFF1A\u81FA\u5357\u3001\u9AD8\u96C4\u3001\u5C4F\u6771\u3001\u82B1\u84EE\u3001\u81FA\u6771",isNew:!0,plains:!0,zones:[[120.27,23.2,13],[120.38,22.98,10],[120.42,23.32,6],[120.2,23.42,9],[120.4,22.82,8],[120.48,22.7,8],[120.52,22.58,8],[120.58,22.45,7],[120.66,22.3,6],[120.7,22.17,5],[120.74,22.06,5]],elem:"2026 \u5E74 7 \u6708\u6210\u70BA\u81FA\u7063\u7B2C 17 \u500B\u539F\u4F4F\u6C11\u65CF\uFF01\u4EE5\u524D\u4F4F\u5728\u5609\u5357\u5E73\u539F\uFF0C\u662F\u6700\u65E9\u548C\u8377\u862D\u4EBA\u3001\u6F22\u4EBA\u63A5\u89F8\u7684\u539F\u4F4F\u6C11\u65CF\u3002\u5409\u8C9D\u800D\u90E8\u843D\u6BCF\u5E74\u8209\u884C\u300C\u591C\u796D\u300D\uFF0C\u796D\u62DC\u7956\u9748\u300C\u963F\u7ACB\u7956\u300D\u3002",junior:"\u5E73\u57D4\u539F\u4F4F\u6C11\u65CF\u7FA4\uFF0C\u50B3\u7D71\u5206\u5E03\u65BC\u5609\u5357\u5E73\u539F\u81F3\u6046\u6625\u534A\u5CF6\uFF1B17 \u4E16\u7D00\u6700\u65E9\u8207\u8377\u862D\u4EBA\u63A5\u89F8\uFF08\u65B0\u6E2F\u6587\u66F8\u4EE5\u7F85\u99AC\u5B57\u66F8\u5BEB\u897F\u62C9\u96C5\u8A9E\uFF09\uFF0C\u5F8C\u56E0\u6F22\u4EBA\u79FB\u58BE\u8207\u540C\u5316\uFF0C\u65CF\u4EBA\u904D\u5E03\u81FA\u5357\u3001\u9AD8\u96C4\u3001\u5C4F\u6771\u3001\u82B1\u84EE\u3001\u81FA\u6771\u3002\u4FE1\u4EF0\u7956\u9748\u300C\u963F\u7ACB\u7956\u300D\uFF0C\u4EE5\u300C\u516C\u5EE8\u300D\u70BA\u796D\u7940\u5834\u6240\uFF0C\u5409\u8C9D\u800D\u591C\u796D\u8207\u300C\u727D\u66F2\u300D\u70BA\u4EE3\u8868\u3002\u4F9D\u61B2\u6CD5\u6CD5\u5EAD 111 \u5E74\u61B2\u5224\u5B57\u7B2C 17 \u865F\u5224\u6C7A\u8207\u300A\u5E73\u57D4\u539F\u4F4F\u6C11\u65CF\u7FA4\u8EAB\u5206\u6CD5\u300B\uFF0C\u884C\u653F\u9662\u65BC 2026 \u5E74 7 \u6708 30 \u65E5\u6838\u5B9A\u70BA\u7B2C 17 \u65CF\uFF0C\u662F\u7B2C\u4E00\u500B\u5B8C\u6210\u6838\u5B9A\u7684\u5E73\u57D4\u65CF\u7FA4\u3002"}],In={total:"\u7D04 466.9 \u842C\u4EBA\uFF084,669,192 \u4EBA\uFF09\uFF0C\u5360\u81FA\u7063\u7E3D\u4EBA\u53E3\u7D04 19.8%",source:"\u5BA2\u5BB6\u59D4\u54E1\u6703\u300A110 \u5E74\u5168\u570B\u5BA2\u5BB6\u4EBA\u53E3\u66A8\u8A9E\u8A00\u57FA\u790E\u8CC7\u6599\u8ABF\u67E5\u7814\u7A76\u300B",top5:{\u65B0\u7AF9\u7E23:67.8,\u82D7\u6817\u7E23:62.5,\u6843\u5712\u5E02:39.9,\u82B1\u84EE\u7E23:34.2,\u65B0\u7AF9\u5E02:30.3},areas:[{n:"\u6843\u7AF9\u82D7\u5BA2\u5BB6",lon:121.05,lat:24.68,d:"\u6843\u5712\u3001\u65B0\u7AF9\u3001\u82D7\u6817\u662F\u5BA2\u5BB6\u4EBA\u6700\u96C6\u4E2D\u7684\u5730\u65B9\uFF08\u65B0\u7AF9\u7E23\u3001\u82D7\u6817\u7E23\u8D85\u904E\u516D\u6210\u662F\u5BA2\u5BB6\u4EBA\uFF09\u3002"},{n:"\u516D\u5806\u5BA2\u5BB6\uFF08\u9AD8\u5C4F\uFF09",lon:120.55,lat:22.7,d:"\u9AD8\u96C4\u7F8E\u6FC3\u8207\u5C4F\u6771\u5167\u57D4\u3001\u7AF9\u7530\u3001\u842C\u5DD2\u7B49\u5730\uFF0C\u6E05\u4EE3\u7D44\u6210\u300C\u516D\u5806\u300D\u5718\u7DF4\u4FDD\u885B\u5BB6\u5712\uFF0C\u81F3\u4ECA\u4FDD\u7559\u6FC3\u539A\u7684\u5BA2\u5BB6\u6587\u5316\uFF08\u5982\u7F8E\u6FC3\u7D19\u5098\uFF09\u3002"},{n:"\u82B1\u6771\u5BA2\u5BB6",lon:121.4,lat:23.6,d:"\u65E5\u6CBB\u6642\u671F\u4EE5\u5F8C\uFF0C\u8A31\u591A\u6843\u7AF9\u82D7\u5BA2\u5BB6\u4EBA\u79FB\u5C45\u82B1\u6771\u7E31\u8C37\u958B\u58BE\uFF0C\u82B1\u84EE\u7E23\u5BA2\u5BB6\u4EBA\u53E3\u6BD4\u7387\u7D04 34.2%\u3002"},{n:"\u81FA\u4E2D\u6771\u52E2\u5BA2\u5BB6",lon:120.83,lat:24.26,d:"\u81FA\u4E2D\u6771\u52E2\u3001\u77F3\u5CA1\u3001\u65B0\u793E\u4E00\u5E36\u4E5F\u662F\u5BA2\u5BB6\u805A\u843D\uFF08\u5927\u57D4\u8154\u5BA2\u8A9E\uFF09\u3002"}],elem:"\u5BA2\u5BB6\u4EBA\u7D04\u5360\u81FA\u7063\u4EBA\u53E3\u7684\u4E94\u5206\u4E4B\u4E00\u3002\u5BA2\u5BB6\u6587\u5316\u6709\u597D\u5403\u7684\u64C2\u8336\u3001\u7C84\u689D\uFF0C\u597D\u770B\u7684\u85CD\u886B\u3001\u6CB9\u7D19\u5098\uFF0C\u6BCF\u5E74\u6625\u5929\u300C\u5BA2\u5BB6\u6850\u82B1\u796D\u300D\u6EFF\u5C71\u90FD\u662F\u767D\u8272\u7684\u6CB9\u6850\u82B1\u3002\u5BA2\u5BB6\u4EBA\u5F88\u91CD\u8996\u300C\u4F2F\u516C\u300D\uFF08\u571F\u5730\u516C\uFF09\u548C\u300C\u7FA9\u6C11\u796D\u300D\u3002",junior:"\u4F9D\u300A\u5BA2\u5BB6\u57FA\u672C\u6CD5\u300B\u5B9A\u7FA9\uFF08\u5177\u5BA2\u5BB6\u8840\u7DE3\u6216\u6DF5\u6E90\u4E14\u81EA\u6211\u8A8D\u540C\uFF09\uFF0C\u5168\u81FA\u5BA2\u5BB6\u4EBA\u53E3\u7D04 466.9 \u842C\u4EBA\u3001\u5360 19.8%\u3002\u4E3B\u8981\u5206\u5E03\u65BC\u6843\u7AF9\u82D7\u4E18\u9675\u3001\u9AD8\u5C4F\u516D\u5806\u3001\u82B1\u6771\u7E31\u8C37\u53CA\u81FA\u4E2D\u6771\u52E2\u4E00\u5E36\uFF1B\u65E9\u671F\u591A\u5C45\u4F4F\u65BC\u4E18\u9675\u3001\u53F0\u5730\uFF0C\u767C\u5C55\u51FA\u52E4\u5109\u3001\u6674\u8015\u96E8\u8B80\u7684\u6587\u5316\uFF0C\u4EE5\u53CA\u4F2F\u516C\u4FE1\u4EF0\u3001\u7FA9\u6C11\u796D\u3001\u85CD\u886B\u3001\u64C2\u8336\u8207\u5BA2\u8A9E\uFF08\u56DB\u7E23\u3001\u6D77\u9678\u3001\u5927\u57D4\u3001\u9952\u5E73\u3001\u8A54\u5B89\u7B49\u8154\u8ABF\uFF09\u3002"},ln=[{t:"amis",n:"\u8C50\u5E74\u796D\uFF08Ilisin\uFF09",m:[7,8],a:"dance",d:"\u963F\u7F8E\u65CF\u6700\u76DB\u5927\u7684\u796D\u5178\uFF0C\u5404\u90E8\u843D\u5728 7\uFF5E8 \u6708\u9678\u7E8C\u8209\u884C\uFF0C\u5305\u542B\u8FCE\u9748\u3001\u5BB4\u9748\u3001\u9001\u9748\uFF1B\u900F\u904E\u5E74\u9F61\u968E\u7D1A\u8207\u5343\u4EBA\u570D\u821E\uFF0C\u51DD\u805A\u65CF\u4EBA\u60C5\u611F\u3001\u50B3\u627F\u9577\u5E7C\u6709\u5E8F\u3002"},{t:"amis",n:"\u6355\u9B5A\u796D\uFF08\u6D77\u796D\uFF09",m:[5,6],a:"boat",d:"\u8C50\u5E74\u796D\u4E4B\u524D\uFF0C\u7537\u5B50\u5230\u6D77\u908A\u6216\u6CB3\u908A\u6355\u9B5A\uFF0C\u7948\u6C42\u6F01\u7372\u8C50\u6536\u3002"},{t:"atayal",n:"\u64AD\u7A2E\u796D",m:[2,3],a:"sow",approx:!0,d:"\u6CF0\u96C5\u65CF\u7684\u796D\u5100\u8DDF\u8457\u5C0F\u7C73\u8015\u4F5C\u9031\u671F\uFF1A\u958B\u58BE\u3001\u64AD\u7A2E\u3001\u9664\u8349\u5230\u6536\u5272\uFF0C\u7531\u982D\u76EE\u6216\u796D\u53F8\u5E36\u9818\uFF0C\u611F\u8B1D\u7956\u9748\uFF08Utux\uFF09\u5E87\u4F51\u3002"},{t:"atayal",n:"\u7956\u9748\u796D",m:[7,8],a:"gather",approx:!0,d:"\u5C0F\u7C73\u6536\u5272\u5F8C\u8209\u884C\uFF0C\u611F\u8B1D\u7956\u9748\u5E36\u4F86\u8C50\u6536\uFF0C\u7948\u6C42\u4F86\u5E74\u5E73\u5B89\u3002"},{t:"paiwan",n:"\u4E94\u5E74\u796D\uFF08Maljeveq\uFF09",m:[10,11],a:"pole",approx:!0,d:"\u6BCF\u4E94\u5E74\u8209\u884C\u4E00\u6B21\uFF0C\u8FCE\u63A5\u7956\u9748\u56DE\u5230\u90E8\u843D\uFF1B\u52C7\u58EB\u4EE5\u9577\u7AFF\u523A\u7403\uFF0C\u8C61\u5FB5\u8207\u7956\u9748\u7684\u76DF\u7D04\u8207\u798F\u6C23\u3002"},{t:"paiwan",n:"\u6536\u7A6B\u796D",m:[7,8],a:"dance",approx:!0,d:"\u5C0F\u7C73\u6536\u6210\u5F8C\u8209\u884C\uFF0C\u65CF\u4EBA\u6B4C\u821E\u611F\u8B1D\u8C50\u6536\u3002"},{t:"bunun",n:"\u5C04\u8033\u796D\uFF08Malahodaan\uFF09",m:[4,5],a:"archer",d:"\u5E03\u8FB2\u65CF\u6700\u91CD\u8981\u7684\u72E9\u7375\u796D\u5178\uFF0C\u591A\u5728 4 \u6708\u4E0B\u65EC\u5230 5 \u6708\u4E0A\u65EC\u3002\u9577\u8F29\u6307\u5C0E\u5C11\u5E74\u5C04\u9E7F\u8033\u6216\u5C71\u8C6C\u8033\uFF0C\u50B3\u627F\u72E9\u7375\u6280\u5DE7\uFF0C\u4E26\u541F\u5531\u300C\u516B\u90E8\u5408\u97F3\u300D\u3001\u5831\u6230\u529F\u3002"},{t:"bunun",n:"\u5C0F\u7C73\u6536\u7A6B\u796D",m:[7,8],a:"carry",d:"\u6176\u795D\u5C0F\u7C73\u8C50\u6536\u7684\u796D\u5178\u3002"},{t:"puyuma",n:"\u5A66\u5973\u9664\u8349\u5B8C\u5DE5\u796D",m:[3],a:"carry",d:"\u6625\u5929\u5A66\u5973\u5B8C\u6210\u9664\u8349\u5DE5\u4F5C\u5F8C\u8209\u884C\u7684\u796D\u5178\u3002"},{t:"puyuma",n:"\u5927\u7375\u796D\u8207\u5E74\u796D\uFF08'Amiyan\uFF09",m:[12,1],a:"walk",d:"12 \u6708 15 \u65E5\u5230\u9694\u5E74 1 \u6708 5 \u65E5\u5DE6\u53F3\u3002\u5C11\u5E74\u900F\u904E\u7334\u796D\u935B\u934A\u81BD\u8B58\uFF0C\u7537\u5B50\u4E0A\u5C71\u72E9\u7375\u5C55\u73FE\u6210\u5E74\u79AE\u5100\uFF0C\u51F1\u65CB\u6B78\u4F86\u6642\u5A66\u5973\u737B\u4E0A\u82B1\u74B0\u3001\u4E00\u8D77\u8DF3\u5927\u570D\u821E\u3002"},{t:"rukai",n:"\u9ED1\u7C73\u796D",m:[11],a:"carry",approx:!0,d:"\u9AD8\u96C4\u8302\u6797\uFF08\u591A\u7D0D\uFF09\u9B6F\u51F1\u65CF\u7684\u796D\u5178\uFF0C\u611F\u8B1D\u795E\u9748\u8207\u7956\u9748\u5E36\u4F86\u8C50\u6536\u8207\u5E73\u5B89\u3002"},{t:"rukai",n:"\u6536\u7A6B\u796D",m:[8],a:"dance",approx:!0,d:"\u5C0F\u7C73\u6536\u6210\u5F8C\u7684\u796D\u5178\uFF0C\u6709\u76EA\u97A6\u97C6\u7B49\u6D3B\u52D5\u3002"},{t:"tsou",n:"\u6230\u796D\uFF08Mayasvi\uFF09",m:[2],a:"gather",d:"\u5728\u7537\u5B50\u805A\u6703\u6240\u300C\u5EAB\u5DF4\u300D\uFF08Kuba\uFF09\u8209\u884C\uFF0C\u796D\u62DC\u6230\u795E\u8207\u5929\u795E\uFF0C\u7948\u6C42\u4FDD\u4F51\u90E8\u843D\u3001\u51DD\u805A\u58EB\u6C23\uFF1B\u9054\u90A6\u793E\u8207\u7279\u5BCC\u91CE\u793E\u8F2A\u6D41\u6216\u5404\u81EA\u64C7\u671F\u8209\u8FA6\u3002"},{t:"tsou",n:"\u5C0F\u7C73\u6536\u7A6B\u796D\uFF08Homeyaya\uFF09",m:[7,8],a:"carry",approx:!0,d:"\u611F\u8B1D\u5C0F\u7C73\u8C50\u6536\u7684\u5BB6\u65CF\u796D\u5100\u3002"},{t:"saisiyat",n:"\u77EE\u9748\u796D\uFF08PaSta'ay\uFF09",m:[11],a:"solemn",sacred:!0,d:"\u5169\u5E74\u4E00\u5C0F\u796D\u3001\u5341\u5E74\u4E00\u5927\u796D\uFF0C2026 \u5E74\u65BC 11 \u6708 20\uFF5E22 \u65E5\u8209\u884C\u3002\u6E90\u65BC\u5C0D\u50B3\u8AAA\u4E2D\u77EE\u4EBA\uFF08Ta'ay\uFF09\u7684\u656C\u754F\u8207\u8D16\u7F6A\uFF0C\u6709\u7D50\u8292\u8349\u3001\u8FCE\u9748\u3001\u5A1B\u9748\u3001\u9001\u9748\u7B49\u5100\u5F0F\uFF0C\u6C23\u6C1B\u56B4\u8085\u795E\u8056\u3002\u89C0\u79AE\u8981\u9075\u5B88\u90E8\u843D\u898F\u7BC4\u3002"},{t:"yami",n:"\u98DB\u9B5A\u796D",m:[3,4,5,6,7],a:"boat",d:"\u4F9D\u5FAA\u98DB\u9B5A\u6D04\u6E38\u7684\u5B63\u7BC0\uFF0C\u5206\u70BA\u62DB\u9B5A\u3001\u6355\u9B5A\u3001\u6536\u85CF\u7B49\u968E\u6BB5\uFF1B\u53EF\u4EE5\u770B\u5230\u795E\u8056\u7684\u62FC\u677F\u821F\u4E0B\u6C34\u5178\u79AE\u8207\u66EC\u98DB\u9B5A\u4E7E\u3002"},{t:"yami",n:"\u6536\u7A6B\u796D",m:[5,6],a:"carry",d:"\u6176\u795D\u5C0F\u7C73\u8207\u828B\u982D\u6536\u6210\u3002"},{t:"thao",n:"\u7956\u9748\u796D\uFF08\u5E74\u796D\uFF09",m:[9],a:"pound",approx:!0,d:"\u7D04\u5728\u8FB2\u66C6\u516B\u6708\uFF0C\u90B5\u65CF\u6700\u91CD\u8981\u7684\u796D\u5178\uFF1B\u65CF\u4EBA\u5728\u65E5\u6708\u6F6D\u908A\u4EE5\u6728\u6775\u6417\u7C73\uFF0C\u767C\u51FA\u597D\u807D\u7684\u300C\u6775\u97F3\u300D\u3002"},{t:"kavalan",n:"\u6D77\u796D\uFF08Laligi\uFF09",m:[3,4,5,6,7,8],a:"boat",approx:!0,d:"\u4F9D\u90E8\u843D\u4E0D\u540C\uFF0C\u5728 3\u30014 \u6708\u5230 8 \u6708\u4E4B\u9593\u8209\u884C\uFF0C\u5411\u6D77\u795E\u7948\u6C42\u5E73\u5B89\u8207\u6F01\u7372\u3002"},{t:"kavalan",n:"\u8C50\u5E74\u796D",m:[7,8],a:"dance",d:"\u590F\u79CB\u4E4B\u969B\u8209\u884C\uFF08115 \u5E74\u5EA6\u516C\u544A\u70BA 7 \u6708 10 \u65E5\uFF5E8 \u6708 31 \u65E5\uFF09\u3002"},{t:"truku",n:"\u611F\u6069\u796D\uFF08Mgay Bari\uFF09",m:[9,10],a:"gather",d:"\u611F\u8B1D\u7956\u9748\u4E00\u5E74\u7684\u5E87\u4F51\uFF08115 \u5E74\u5EA6\u516C\u544A\u70BA 9 \u6708 1 \u65E5\uFF5E10 \u6708 31 \u65E5\uFF09\u3002"},{t:"sakizaya",n:"\u706B\u795E\u796D\uFF08Palamal\uFF09",m:[10],a:"solemn",sacred:!0,d:"\u7D00\u5FF5\u6E05\u4EE3\u300C\u52A0\u79AE\u5B9B\u4E8B\u4EF6\u300D\u4E2D\u72A7\u7272\u7684\u5148\u4EBA\uFF08115 \u5E74\u5EA6\u516C\u544A\u70BA 10 \u6708 1\uFF5E15 \u65E5\uFF09\u3002"},{t:"seediq",n:"\u5E74\u796D\uFF08Smratuc\uFF09",m:[11,12,1,2,3],a:"gather",d:"\u51AC\u5B63\u6B72\u672B\u7684\u611F\u6069\u796D\u5100\uFF08115 \u5E74\u5EA6\u516C\u544A\u70BA 11 \u6708 1 \u65E5\uFF5E\u9694\u5E74 3 \u6708 31 \u65E5\uFF09\u3002"},{t:"hlaalua",n:"\u8056\u8C9D\u796D\uFF08Miatungusu\uFF09",m:[],a:"solemn",sacred:!0,approx:!0,d:"\u796D\u62DC\u8056\u8C9D\u3001\u7948\u6C42\u5E73\u5B89\u7684\u91CD\u8981\u796D\u5178\uFF0C\u7D04\u6BCF 2\uFF5E3 \u5E74\u8209\u884C\u4E00\u6B21\uFF0C\u65E5\u671F\u4F9D\u90E8\u843D\u516C\u544A\u3002"},{t:"kanakanavu",n:"\u7C73\u8CA2\u796D\uFF08Mikongu\uFF09",m:[10],a:"carry",d:"\u6176\u795D\u5C0F\u7C73\u6536\u7A6B\u7684\u796D\u5178\uFF0C\u591A\u96C6\u4E2D\u5728 10 \u6708\u3002"},{t:"siraya",n:"\u591C\u796D",m:[10],a:"solemn",sacred:!0,approx:!0,d:"\u81FA\u5357\u6771\u5C71\u5409\u8C9D\u800D\u90E8\u843D\u5728\u8FB2\u66C6\u4E5D\u6708\u521D\u4E94\u524D\u5F8C\u7684\u591C\u665A\u8209\u884C\uFF0C\u796D\u62DC\u7956\u9748\u300C\u963F\u7ACB\u7956\u300D\uFF0C\u65CF\u4EBA\u5728\u516C\u5EE8\u524D\u300C\u727D\u66F2\u300D\u3002"}],ur=[{id:"bear",n:"\u81FA\u7063\u9ED1\u718A",k:"land",a:"walk",lon:121.05,lat:23.56,h:"1000\uFF5E3500 \u516C\u5C3A\u5C71\u6797",q:"Formosan black bear",elem:"\u81FA\u7063\u6700\u5927\u7684\u9678\u5730\u52D5\u7269\uFF0C\u80F8\u524D\u6709\u767D\u8272\u7684\u300CV\u300D\u5B57\uFF0C\u4F4F\u5728\u9AD8\u5C71\u68EE\u6797\u88E1\uFF0C\u5403\u679C\u5BE6\u3001\u6606\u87F2\u3002\u662F\u4FDD\u80B2\u985E\u52D5\u7269\u3002",junior:"\u81FA\u7063\u7279\u6709\u4E9E\u7A2E\uFF0C\u68F2\u606F\u65BC\u4E2D\u9AD8\u6D77\u62D4\u539F\u59CB\u6797\uFF0C\u80F8\u524D V \u5B57\u5F62\u767D\u6591\u70BA\u7279\u5FB5\uFF1B\u56E0\u68F2\u5730\u7834\u788E\u8207\u9677\u9631\u8AA4\u6355\u800C\u65CF\u7FA4\u7A00\u5C11\uFF0C\u5217\u70BA\u7015\u81E8\u7D55\u7A2E\u4FDD\u80B2\u985E\u3002"},{id:"pheasant",n:"\u5E1D\u96C9\uFF08\u9ED1\u9577\u5C3E\u96C9\uFF09",k:"land",a:"walk",lon:120.89,lat:23.47,h:"2000\uFF5E3300 \u516C\u5C3A",q:"Mikado pheasant",elem:"\u81FA\u7063\u7279\u6709\u7684\u9CE5\uFF0C\u96C4\u9CE5\u5168\u8EAB\u85CD\u9ED1\u8272\u3001\u5C3E\u5DF4\u5F88\u9577\uFF0C\u66FE\u7D93\u5370\u5728\u5343\u5143\u9214\u7968\u4E0A\u3002\u5E38\u5728\u6E05\u6668\u51FA\u73FE\u5728\u9AD8\u5C71\u6B65\u9053\u3002",junior:"\u81FA\u7063\u7279\u6709\u7A2E\uFF0C\u5206\u5E03\u65BC\u4E2D\u9AD8\u6D77\u62D4\u91DD\u95CA\u8449\u6797\u8207\u7BAD\u7AF9\u6797\uFF0C\u96C4\u9CE5\u7FBD\u8272\u85CD\u9ED1\u5177\u5149\u6FA4\uFF1B\u66FE\u70BA\u65B0\u81FA\u5E63\u5343\u5143\u9214\u5716\u6848\uFF0C\u6709\u300C\u8FF7\u9727\u4E2D\u7684\u738B\u8005\u300D\u4E4B\u7A31\u3002"},{id:"sambar",n:"\u81FA\u7063\u6C34\u9E7F",k:"land",a:"walk",lon:121.16,lat:23.3,h:"\u9AD8\u5C71\u8349\u539F\u8207\u68EE\u6797",q:"Formosan sambar deer",elem:"\u81FA\u7063\u9AD4\u578B\u6700\u5927\u7684\u9E7F\uFF0C\u4F4F\u5728\u9AD8\u5C71\u4E0A\uFF0C\u559C\u6B61\u5728\u8349\u539F\u548C\u6C34\u6C60\u908A\u6D3B\u52D5\u3002",junior:"\u81FA\u7063\u7279\u6709\u4E9E\u7A2E\uFF0C\u4E3B\u8981\u5206\u5E03\u65BC\u4E2D\u592E\u5C71\u8108\u9AD8\u6D77\u62D4\u5730\u5340\uFF1B\u4FDD\u80B2\u6210\u6548\u4F7F\u65CF\u7FA4\u56DE\u5347\uFF0C\u5728\u5609\u660E\u6E56\u3001\u5357\u6E56\u7B49\u9AD8\u5C71\u5E38\u898B\u3002"},{id:"muntjac",n:"\u5C71\u7F8C",k:"land",a:"hop",lon:120.85,lat:23.8,h:"\u4F4E\uFF5E\u4E2D\u6D77\u62D4\u68EE\u6797",q:"Reeves muntjac Taiwan",elem:"\u5C0F\u578B\u7684\u9E7F\uFF0C\u53EB\u8072\u50CF\u72D7\u53EB\uFF0C\u6240\u4EE5\u53C8\u53EB\u300C\u5420\u9E7F\u300D\u3002",junior:"\u81FA\u7063\u5206\u5E03\u6700\u5EE3\u7684\u9E7F\u79D1\u52D5\u7269\uFF0C\u68F2\u606F\u65BC\u4F4E\u81F3\u4E2D\u6D77\u62D4\u95CA\u8449\u6797\uFF0C\u53D7\u9A5A\u6642\u767C\u51FA\u4F3C\u72AC\u5420\u7684\u53EB\u8072\u3002"},{id:"salmon",n:"\u6AFB\u82B1\u9264\u543B\u9BAD",k:"land",a:"swim",lon:121.3,lat:24.36,h:"\u4E03\u5BB6\u7063\u6EAA\uFF08\u7D04 1700 \u516C\u5C3A\uFF09",q:"Formosan landlocked salmon",elem:"\u51B0\u6CB3\u6642\u671F\u7559\u4E0B\u4F86\u7684\u9B5A\uFF0C\u53EA\u4F4F\u5728\u96EA\u9738\u570B\u5BB6\u516C\u5712\u7684\u4E03\u5BB6\u7063\u6EAA\uFF0C\u662F\u300C\u570B\u5BF6\u9B5A\u300D\u3002",junior:"\u51B0\u6CB3\u5B51\u907A\u751F\u7269\uFF0C\u70BA\u9678\u5C01\u578B\u9BAD\u9B5A\uFF0C\u50C5\u5206\u5E03\u65BC\u5927\u7532\u6EAA\u4E0A\u6E38\u4E03\u5BB6\u7063\u6EAA\uFF1B\u9700\u4F4E\u6EAB\u3001\u6E05\u6F88\u7684\u6EAA\u6D41\uFF0C\u662F\u96EA\u9738\u570B\u5BB6\u516C\u5712\u7684\u4FDD\u80B2\u8C61\u5FB5\u3002"},{id:"macaque",n:"\u81FA\u7063\u737C\u7334",k:"land",a:"hop",lon:120.27,lat:22.65,h:"\u4F4E\uFF5E\u4E2D\u6D77\u62D4\uFF08\u58FD\u5C71\u5E38\u898B\uFF09",q:"Formosan rock macaque",elem:"\u81FA\u7063\u552F\u4E00\u7684\u7334\u5B50\uFF0C\u5E38\u5728\u5C71\u4E0A\u6210\u7FA4\u6D3B\u52D5\u3002\u4E0D\u8981\u9935\u98DF\u7260\u5011\u5594\uFF01",junior:"\u81FA\u7063\u7279\u6709\u7A2E\uFF0C\u4E5F\u662F\u81FA\u7063\u552F\u4E00\u7684\u975E\u4EBA\u9748\u9577\u985E\uFF0C\u5206\u5E03\u65BC\u5E73\u5730\u81F3\u9AD8\u5C71\uFF1B\u9AD8\u96C4\u58FD\u5C71\uFF08\u67F4\u5C71\uFF09\u65CF\u7FA4\u5E38\u898B\uFF0C\u9935\u98DF\u6703\u6539\u8B8A\u5176\u884C\u70BA\u3002"},{id:"magpie",n:"\u81FA\u7063\u85CD\u9D72",k:"air",a:"fly",lon:121.57,lat:25.02,h:"\u4F4E\u6D77\u62D4\u4E18\u9675",q:"Taiwan blue magpie",elem:"\u6709\u85CD\u8272\u9577\u5C3E\u5DF4\u3001\u7D05\u8272\u5634\u5DF4\u7684\u6F02\u4EAE\u9CE5\uFF0C\u5E38\u4E00\u96BB\u8DDF\u8457\u4E00\u96BB\u98DB\uFF0C\u88AB\u53EB\u505A\u300C\u9577\u5C3E\u5C71\u5A18\u300D\u3002",junior:"\u81FA\u7063\u7279\u6709\u7A2E\uFF0C\u68F2\u606F\u65BC\u4F4E\u6D77\u62D4\u95CA\u8449\u6797\u8207\u4E18\u9675\uFF0C\u7FA4\u9AD4\u5408\u4F5C\u80B2\u96DB\uFF1B2007 \u5E74\u7DB2\u8DEF\u7968\u9078\u70BA\u81FA\u7063\u570B\u9CE5\u3002"},{id:"leopardcat",n:"\u77F3\u864E",k:"land",a:"walk",lon:120.85,lat:24.45,h:"\u82D7\u6817\u3001\u81FA\u4E2D\u6DFA\u5C71\u4E18\u9675",q:"Leopard cat Taiwan",elem:"\u81FA\u7063\u552F\u4E00\u91CE\u751F\u7684\u8C93\u79D1\u52D5\u7269\uFF0C\u8033\u6735\u5F8C\u9762\u6709\u767D\u8272\u6591\u9EDE\uFF0C\u4F4F\u5728\u82D7\u6817\u7684\u4E18\u9675\u3002\u5E38\u88AB\u8ECA\u649E\uFF0C\u8981\u5C0F\u5FC3\u958B\u8ECA\u3002",junior:"\u81FA\u7063\u50C5\u5B58\u7684\u539F\u751F\u91CE\u751F\u8C93\u79D1\u52D5\u7269\uFF0C\u4E3B\u8981\u5206\u5E03\u65BC\u82D7\u6817\u3001\u81FA\u4E2D\u3001\u5357\u6295\u6DFA\u5C71\uFF1B\u8DEF\u6BBA\u8207\u68F2\u5730\u958B\u767C\u662F\u6700\u5927\u5A01\u8105\uFF0C\u5217\u70BA\u7015\u81E8\u7D55\u7A2E\u4FDD\u80B2\u985E\u3002"},{id:"pangolin",n:"\u7A7F\u5C71\u7532",k:"land",a:"walk",lon:121.15,lat:24.78,h:"\u4F4E\u6D77\u62D4\u6DFA\u5C71",q:"Chinese pangolin",elem:"\u8EAB\u4E0A\u6709\u9C57\u7247\uFF0C\u9047\u5230\u5371\u96AA\u6703\u7E2E\u6210\u4E00\u9846\u7403\uFF0C\u6700\u611B\u5403\u879E\u87FB\u548C\u767D\u87FB\u3002",junior:"\u4E2D\u83EF\u7A7F\u5C71\u7532\u70BA\u591C\u884C\u6027\uFF0C\u4EE5\u879E\u87FB\u3001\u767D\u87FB\u70BA\u98DF\uFF1B\u81FA\u7063\u662F\u5168\u7403\u4E2D\u83EF\u7A7F\u5C71\u7532\u5BC6\u5EA6\u6700\u9AD8\u7684\u5730\u5340\u4E4B\u4E00\u3002"},{id:"spoonbill",n:"\u9ED1\u9762\u7435\u9DFA",k:"air",a:"wade",lon:120.07,lat:23.05,h:"\u4E03\u80A1\u66FE\u6587\u6EAA\u53E3\u6FD5\u5730\uFF08\u51AC\u5929\uFF09",q:"Black-faced spoonbill",elem:"\u5634\u5DF4\u50CF\u9ED1\u8272\u6E6F\u5319\u7684\u5019\u9CE5\uFF0C\u51AC\u5929\u5F9E\u5317\u65B9\u98DB\u4F86\u81FA\u5357\u4E03\u80A1\u904E\u51AC\u3002",junior:"\u5168\u7403\u7015\u5371\u7684\u51AC\u5019\u9CE5\uFF0C\u6BCF\u5E74 10 \u6708\u81F3\u9694\u5E74 4 \u6708\u5728\u81FA\u5357\u66FE\u6587\u6EAA\u53E3\u7B49\u6FD5\u5730\u5EA6\u51AC\uFF0C\u81FA\u7063\u70BA\u5176\u6700\u91CD\u8981\u7684\u5EA6\u51AC\u5730\u4E4B\u4E00\u3002"},{id:"fiddler",n:"\u62DB\u6F6E\u87F9",k:"land",a:"side",lon:120.92,lat:24.77,h:"\u65B0\u7AF9\u9999\u5C71\u6FD5\u5730\u7B49\u6D77\u5CB8",q:"Fiddler crab Taiwan",elem:"\u96C4\u87F9\u6709\u4E00\u96BB\u7279\u5225\u5927\u7684\u87AF\uFF0C\u9000\u6F6E\u6642\u6703\u63EE\u821E\u5927\u87AF\uFF0C\u597D\u50CF\u5728\u300C\u62DB\u300D\u6F6E\u6C34\u3002",junior:"\u751F\u6D3B\u65BC\u6CB3\u53E3\u6CE5\u7058\u8207\u7D05\u6A39\u6797\uFF0C\u96C4\u87F9\u5177\u4E00\u5927\u4E00\u5C0F\u7684\u87AF\uFF0C\u63EE\u821E\u6C42\u5076\uFF1B\u662F\u6FD5\u5730\u751F\u614B\u7684\u6307\u6A19\u751F\u7269\u3002"},{id:"sika",n:"\u6885\u82B1\u9E7F",k:"land",a:"hop",lon:120.032,lat:26.296,h:"\u99AC\u7956\u5927\u5775\u5CF6\u3001\u58BE\u4E01",q:"Sika deer Taiwan",elem:"\u8EAB\u4E0A\u6709\u767D\u8272\u6591\u9EDE\u7684\u9E7F\u3002\u99AC\u7956\u5927\u5775\u5CF6\u4E0A\u6709\u4E00\u7FA4\u4E0D\u6015\u4EBA\u7684\u6885\u82B1\u9E7F\u3002",junior:"\u81FA\u7063\u6885\u82B1\u9E7F\u91CE\u5916\u65CF\u7FA4\u66FE\u6EC5\u7D55\uFF0C\u7D93\u58BE\u4E01\u5FA9\u80B2\u91CE\u653E\uFF1B\u99AC\u7956\u5927\u5775\u5CF6\u7684\u6885\u82B1\u9E7F\u65CF\u7FA4\u5247\u6210\u70BA\u89C0\u5149\u7279\u8272\u3002"},{id:"butterfly",n:"\u7D2B\u6591\u8776",k:"air",a:"flutter",lon:120.66,lat:22.9,h:"\u9AD8\u96C4\u8302\u6797\uFF08\u51AC\u5929\uFF09",q:"Euploea Taiwan",elem:"\u51AC\u5929\u6703\u6210\u5343\u4E0A\u842C\u805A\u5728\u9AD8\u96C4\u8302\u6797\u7684\u5C71\u8C37\u904E\u51AC\uFF0C\u53EB\u505A\u300C\u7D2B\u8776\u5E7D\u8C37\u300D\u3002",junior:"\u81FA\u7063\u7D2B\u6591\u8776\u6BCF\u5E74\u51AC\u5B63\u5357\u9077\u81F3\u8302\u6797\u7B49\u6EAB\u6696\u5C71\u8C37\u8D8A\u51AC\uFF0C\u5F62\u6210\u4E16\u754C\u5C11\u898B\u7684\u8D8A\u51AC\u578B\u8774\u8776\u8C37\u3002"},{id:"spinner",n:"\u98DB\u65CB\u6D77\u8C5A",k:"sea",a:"leap",lon:122.02,lat:24.86,h:"\u9F9C\u5C71\u5CF6\u3001\u82B1\u84EE\u5916\u6D77",q:"Spinner dolphin jumping",elem:"\u6700\u611B\u8DF3\u51FA\u6C34\u9762\u3001\u5728\u7A7A\u4E2D\u8F49\u5708\u5708\u7684\u6D77\u8C5A\uFF0C\u5E38\u4E00\u5927\u7FA4\u51FA\u73FE\u5728\u9F9C\u5C71\u5CF6\u9644\u8FD1\u3002",junior:"\u9577\u543B\u98DB\u65CB\u6D77\u8C5A\u5E38\u6210\u5927\u7FA4\u6D3B\u52D5\uFF0C\u8E8D\u51FA\u6C34\u9762\u6642\u6703\u7E31\u8EF8\u65CB\u8F49\uFF1B\u9F9C\u5C71\u5CF6\u5468\u908A\u7D00\u9304\u6709\u5341\u591A\u7A2E\u9BE8\u8C5A\uFF0C4\uFF5E9 \u6708\u70BA\u8CDE\u9BE8\u65FA\u5B63\u3002"},{id:"bottlenose",n:"\u74F6\u9F3B\u6D77\u8C5A",k:"sea",a:"leap",lon:121.8,lat:23.95,h:"\u82B1\u84EE\u5916\u6D77",q:"Bottlenose dolphin",elem:"\u5634\u5DF4\u77ED\u77ED\u7684\u3001\u5F88\u8070\u660E\u7684\u6D77\u8C5A\uFF0C\u5E38\u5728\u82B1\u84EE\u5916\u6D77\u51FA\u73FE\u3002",junior:"\u5E38\u898B\u65BC\u82B1\u6771\u5916\u6D77\u7684\u9BE8\u8C5A\u4E4B\u4E00\uFF0C\u667A\u529B\u9AD8\u3001\u7FA4\u9AD4\u6D3B\u52D5\u3002"},{id:"sperm",n:"\u62B9\u9999\u9BE8",k:"sea",a:"spout",lon:121.9,lat:23.6,h:"\u82B1\u84EE\u3001\u81FA\u6771\u5916\u6D77\u6DF1\u6D77",q:"Sperm whale",elem:"\u982D\u5F88\u5927\u7684\u9BE8\u9B5A\uFF0C\u6703\u6F5B\u5230\u5F88\u6DF1\u7684\u6D77\u88E1\u6293\u9B77\u9B5A\uFF0C\u6D6E\u4E0A\u4F86\u6642\u6703\u5674\u51FA\u6C34\u67F1\u3002",junior:"\u5927\u578B\u9F52\u9BE8\uFF0C\u80FD\u6DF1\u6F5B\u5343\u516C\u5C3A\u4EE5\u4E0A\u6355\u98DF\u982D\u8DB3\u985E\uFF1B\u81FA\u7063\u6771\u90E8\u5916\u6D77\u9678\u68DA\u7A84\u3001\u6DF1\u6D77\u8FD1\uFF0C\u662F\u80FD\u5F9E\u5CB8\u908A\u51FA\u6D77\u89C0\u5BDF\u5927\u578B\u9BE8\u8C5A\u7684\u539F\u56E0\u4E4B\u4E00\u3002"},{id:"flyingfish",n:"\u98DB\u9B5A",k:"sea",a:"glide",lon:121.63,lat:22,h:"\u862D\u5DBC\uFF08\u6625\u590F\uFF09",q:"Flying fish Cheilopogon",elem:"\u80F8\u9C2D\u5F88\u5927\u50CF\u7FC5\u8180\uFF0C\u53EF\u4EE5\u8DF3\u51FA\u6D77\u9762\u6ED1\u7FD4\u3002\u9054\u609F\u65CF\u7684\u98DB\u9B5A\u796D\u5C31\u662F\u8DDF\u8457\u98DB\u9B5A\u7684\u5B63\u7BC0\u3002",junior:"\u6625\u590F\u96A8\u9ED1\u6F6E\u5317\u4E0A\uFF0C\u862D\u5DBC\u9054\u609F\u65CF\u4F9D\u98DB\u9B5A\u5B63\u7BC0\u5B89\u6392\u751F\u6D3B\u8207\u796D\u5100\uFF0C\u4E26\u6709\u56B4\u683C\u7684\u6355\u6488\u7981\u5FCC\u4EE5\u7DAD\u8B77\u8CC7\u6E90\u3002"},{id:"turtle",n:"\u7DA0\u8835\u9F9C",k:"sea",a:"swim",lon:120.39,lat:22.32,h:"\u5C0F\u7409\u7403\u3001\u6F8E\u6E56\u671B\u5B89",q:"Green sea turtle Liuqiu",elem:"\u5C0F\u7409\u7403\u7684\u6D77\u908A\u5F88\u5BB9\u6613\u770B\u5230\u7DA0\u8835\u9F9C\uFF0C\u7260\u5011\u6703\u56DE\u5230\u51FA\u751F\u7684\u6C99\u7058\u7522\u5375\u3002",junior:"\u6D77\u9F9C\u4E2D\u9AD4\u578B\u5927\u8005\uFF0C\u6F8E\u6E56\u671B\u5B89\u70BA\u5176\u91CD\u8981\u7522\u5375\u5730\uFF08\u8A2D\u6709\u4FDD\u8B77\u5340\uFF09\uFF1B\u5C0F\u7409\u7403\u6F6E\u9593\u5E36\u5E38\u898B\u8993\u98DF\u500B\u9AD4\uFF0C\u89C0\u5BDF\u9808\u4FDD\u6301\u8DDD\u96E2\u3002"},{id:"mahi",n:"\u9B3C\u982D\u5200",k:"sea",a:"leap",lon:121.85,lat:23.15,h:"\u9ED1\u6F6E\u6D41\u7D93\u7684\u6771\u90E8\u6D77\u57DF",q:"Mahi-mahi Coryphaena",elem:"\u8DDF\u8457\u6EAB\u6696\u7684\u9ED1\u6F6E\u6E38\u4F86\u7684\u5927\u9B5A\uFF0C\u982D\u5F88\u5927\u3001\u8EAB\u9AD4\u662F\u91D1\u7DA0\u8272\u3002",junior:"\u96A8\u9ED1\u6F6E\u6D04\u6E38\u7684\u5927\u6D0B\u6027\u9B5A\u985E\uFF0C\u70BA\u6771\u90E8\u91CD\u8981\u6F01\u7372\uFF1B\u9ED1\u6F6E\u5E36\u4F86\u7684\u65D7\u9B5A\u3001\u9BAA\u9B5A\u3001\u9B3C\u982D\u5200\u9020\u5C31\u6771\u90E8\u6F01\u5834\u3002"},{id:"tuna",n:"\u9ED1\u9BAA\u9B5A",k:"sea",a:"swim",lon:120.8,lat:21.7,h:"\u5C4F\u6771\u6771\u6E2F\u5916\u6D77\uFF085\uFF5E6 \u6708\uFF09",q:"Pacific bluefin tuna",elem:"\u6BCF\u5E74\u6625\u5929\u6E38\u5230\u81FA\u7063\u5357\u908A\u7684\u5927\u9B5A\uFF0C\u5C4F\u6771\u6771\u6E2F\u6709\u300C\u9ED1\u9BAA\u9B5A\u6587\u5316\u89C0\u5149\u5B63\u300D\u3002",junior:"\u592A\u5E73\u6D0B\u9ED1\u9BAA\u6BCF\u5E74 4\uFF5E6 \u6708\u6D04\u6E38\u7D93\u81FA\u7063\u6771\u5357\u6D77\u57DF\u7522\u5375\uFF0C\u5C4F\u6771\u6771\u6E2F\u70BA\u4E3B\u8981\u5378\u9B5A\u6E2F\u3002"},{id:"ventcrab",n:"\u70CF\u9F9C\u602A\u65B9\u87F9",k:"sea",a:"side",lon:121.962,lat:24.836,h:"\u9F9C\u5C71\u5CF6\u300C\u725B\u5976\u6D77\u300D\u6D77\u5E95\u6EAB\u6CC9",q:"Xenograpsus testudinatus",elem:"\u4F4F\u5728\u9F9C\u5C71\u5CF6\u6D77\u5E95\u6EAB\u6CC9\u53E3\u7684\u8783\u87F9\uFF0C\u90A3\u88E1\u53C8\u71B1\u53C8\u9178\uFF0C\u7260\u537B\u6D3B\u5F97\u597D\u597D\u7684\uFF01",junior:"\u68F2\u606F\u65BC\u9F9C\u5C71\u5CF6\u6D77\u5E95\u71B1\u6CC9\u5674\u53E3\u7684\u9AD8\u6EAB\u5F37\u9178\u74B0\u5883\uFF0C\u80FD\u8010\u53D7\u786B\u5316\u7269\uFF0C\u4EE5\u88AB\u71B1\u6CC9\u71D9\u6B7B\u7684\u6D6E\u6E38\u751F\u7269\uFF08\u6D77\u6D0B\u96EA\uFF09\u70BA\u98DF\uFF0C\u662F\u7814\u7A76\u6975\u7AEF\u74B0\u5883\u751F\u7269\u7684\u91CD\u8981\u5C0D\u8C61\u3002"},{id:"gull",n:"\u9ED1\u5C3E\u9DD7",k:"air",a:"fly",lon:120.06,lat:26.32,h:"\u99AC\u7956\u5217\u5CF6\uFF08\u590F\u5929\uFF09",q:"Black-tailed gull",elem:"\u5C3E\u5DF4\u6709\u4E00\u689D\u9ED1\u8272\u5E36\u5B50\u7684\u6D77\u9DD7\uFF0C\u590F\u5929\u5728\u99AC\u7956\u7684\u5C0F\u5CF6\u7E41\u6B96\u3002",junior:"\u99AC\u7956\u71D5\u9DD7\u4FDD\u8B77\u5340\u7684\u91CD\u8981\u6D77\u9CE5\u4E4B\u4E00\uFF1B\u6625\u590F\u591C\u5149\u87F2\uFF08\u85CD\u773C\u6DDA\uFF09\u5927\u91CF\u51FA\u73FE\u6642\uFF0C\u5438\u5F15\u4E01\u9999\u9B5A\uFF0C\u518D\u5F15\u4F86\u6D77\u9CE5\u6355\u98DF\u3002"},{id:"juniper",n:"\u7389\u5C71\u5713\u67CF",k:"plant",lon:120.94,lat:23.48,h:"3000 \u516C\u5C3A\u4EE5\u4E0A",q:"Juniperus squamata Yushan",elem:"\u9577\u5728\u81FA\u7063\u6700\u9AD8\u7684\u5C71\u4E0A\uFF0C\u56E0\u70BA\u98A8\u5F88\u5927\uFF0C\u5E38\u5E38\u9577\u5F97\u6B6A\u6B6A\u626D\u626D\u3001\u8CBC\u8457\u5730\u9762\u3002",junior:"\u5206\u5E03\u65BC\u9AD8\u5C71\u5BD2\u539F\u8207\u68EE\u6797\u754C\u7DDA\u9644\u8FD1\uFF0C\u53D7\u5F37\u98A8\u8207\u4F4E\u6EAB\u5F71\u97FF\u5448\u530D\u5310\u72C0\uFF0C\u662F\u9AD8\u5C71\u690D\u7269\u7684\u4EE3\u8868\u3002"},{id:"fir",n:"\u81FA\u7063\u51B7\u6749",k:"plant",lon:121.25,lat:24.4,h:"2800\uFF5E3600 \u516C\u5C3A",q:"Abies kawakamii",elem:"\u9577\u5728\u5F88\u9AD8\u7684\u5C71\u4E0A\u7684\u91DD\u8449\u6A39\uFF0C\u96EA\u5C71\u4E0A\u6709\u4E00\u5927\u7247\u300C\u9ED1\u68EE\u6797\u300D\u3002",junior:"\u81FA\u7063\u7279\u6709\u7A2E\uFF0C\u5206\u5E03\u65BC\u9AD8\u6D77\u62D4\uFF0C\u5F62\u6210\u7D14\u6797\uFF08\u5982\u96EA\u5C71\u9ED1\u68EE\u6797\uFF09\uFF0C\u70BA\u81FA\u7063\u68EE\u6797\u754C\u7DDA\u9644\u8FD1\u7684\u4E3B\u8981\u6A39\u7A2E\u3002"},{id:"cypress",n:"\u7D05\u6A9C\uFF08\u963F\u91CC\u5C71\u795E\u6728\uFF09",k:"plant",lon:120.81,lat:23.52,h:"1500\uFF5E2500 \u516C\u5C3A",q:"Chamaecyparis formosensis Alishan",elem:"\u53EF\u4EE5\u6D3B\u5E7E\u5343\u5E74\u7684\u5927\u6A39\uFF0C\u963F\u91CC\u5C71\u7684\u795E\u6728\u5C31\u662F\u7D05\u6A9C\u3002",junior:"\u81FA\u7063\u7279\u6709\u7A2E\uFF0C\u5206\u5E03\u65BC\u4E2D\u6D77\u62D4\u96F2\u9727\u5E36\uFF0C\u6A39\u9F61\u53EF\u9054\u6578\u5343\u5E74\uFF1B\u65E5\u6CBB\u6642\u671F\u5927\u91CF\u4F10\u63A1\uFF0C\u963F\u91CC\u5C71\u68EE\u6797\u9435\u8DEF\u5373\u70BA\u904B\u9001\u6728\u6750\u800C\u5EFA\u3002"},{id:"mangrove",n:"\u6C34\u7B46\u4ED4\uFF08\u7D05\u6A39\u6797\uFF09",k:"plant",lon:121.44,lat:25.16,h:"\u6DE1\u6C34\u6CB3\u53E3",q:"Kandelia obovata Tamsui",elem:"\u9577\u5728\u6CB3\u53E3\u7684\u6A39\uFF0C\u7A2E\u5B50\u9084\u5728\u6A39\u4E0A\u5C31\u6703\u767C\u82BD\uFF0C\u50CF\u4E00\u652F\u652F\u7B46\u639B\u5728\u6A39\u4E0A\u3002",junior:"\u7D05\u6A39\u6797\u690D\u7269\uFF0C\u5177\u300C\u80CE\u751F\u82D7\u300D\uFF1B\u6DE1\u6C34\u6CB3\u53E3\u6709\u81FA\u7063\u9762\u7A4D\u6700\u5927\u7684\u6C34\u7B46\u4ED4\u7D14\u6797\uFF0C\u8A2D\u6709\u81EA\u7136\u4FDD\u7559\u5340\u3002"},{id:"tung",n:"\u6CB9\u6850\u82B1",k:"plant",lon:120.92,lat:24.6,h:"\u6843\u7AF9\u82D7\u4E18\u9675\uFF084\uFF5E5 \u6708\uFF09",q:"Vernicia montana flowers Taiwan",elem:"\u6625\u5929\u958B\u767D\u8272\u7684\u5C0F\u82B1\uFF0C\u82B1\u843D\u4E0B\u4F86\u50CF\u4E0B\u96EA\u4E00\u6A23\uFF0C\u662F\u5BA2\u5BB6\u6850\u82B1\u796D\u7684\u4E3B\u89D2\u3002",junior:"\u65E9\u671F\u5F15\u9032\u683D\u57F9\u4EE5\u53D6\u6850\u6CB9\uFF0C\u591A\u5206\u5E03\u65BC\u6843\u7AF9\u82D7\u4E18\u9675\uFF1B4\uFF5E5 \u6708\u82B1\u671F\u8207\u5BA2\u5BB6\u6850\u82B1\u796D\u7D50\u5408\uFF0C\u6210\u70BA\u5BA2\u5E84\u6587\u5316\u8C61\u5FB5\u3002"}],no=[{to:500,n:"\u71B1\u5E36\u5B63\u98A8\u6797",c:"#2e7d32",d:"\u4F4E\u6D77\u62D4\uFF0C\u6709\u6995\u6A39\u3001\u76F8\u601D\u6A39\u7B49\u95CA\u8449\u6A39\uFF0C\u56DB\u5B63\u5E38\u7DA0\u3002"},{to:1500,n:"\u4E9E\u71B1\u5E36\u95CA\u8449\u6797",c:"#66bb6a",d:"\u6A1F\u6A39\u3001\u6960\u6728\u7B49\u95CA\u8449\u6A39\u70BA\u4E3B\u3002"},{to:2500,n:"\u6EAB\u5E36\u91DD\u95CA\u8449\u6DF7\u5408\u6797",c:"#9ccc65",d:"\u96F2\u9727\u5E36\uFF0C\u6709\u7D05\u6A9C\u3001\u6241\u67CF\u7B49\u5DE8\u6728\uFF08\u963F\u91CC\u5C71\u795E\u6728\uFF09\u3002"},{to:3500,n:"\u5BD2\u6EAB\u5E36\u91DD\u8449\u6797",c:"#00695c",d:"\u81FA\u7063\u51B7\u6749\u3001\u81FA\u7063\u9435\u6749\u7B49\u91DD\u8449\u6A39\u3002"},{to:9999,n:"\u9AD8\u5C71\u5BD2\u539F",c:"#bcaaa4",d:"\u98A8\u5927\u3001\u4F4E\u6EAB\uFF0C\u53EA\u6709\u7389\u5C71\u5713\u67CF\u704C\u53E2\u3001\u9AD8\u5C71\u8349\u672C\u690D\u7269\u3002"}];var cd={bear:"bear.png",bottlenose:"bottlenose.png",butterfly:"butterfly.png",fiddler:"fiddler.png",flyingfish:"flyingfish.png",gull:"gull.png",leopardcat:"leopardcat.png",macaque:"macaque.png",magpie:"magpie.png",mahi:"mahi.png",muntjac:"muntjac.png",pangolin:"pangolin.png",pheasant:"pheasant.png",salmon:"salmon.png",sambar:"sambar.png",sika:"sika.png",sperm:"sperm.png",spinner:"spinner.png",spoonbill:"spoonbill.png",tuna:"tuna.png",turtle:"turtle.png",ventcrab:"ventcrab.png"},qg={bear:"\u{1F43B}",pheasant:"\u{1F413}",sambar:"\u{1F98C}",muntjac:"\u{1F98C}",salmon:"\u{1F41F}",macaque:"\u{1F412}",magpie:"\u{1F426}",leopardcat:"\u{1F406}",pangolin:"\u{1F994}",spoonbill:"\u{1F9A2}",fiddler:"\u{1F980}",sika:"\u{1F98C}",butterfly:"\u{1F98B}",spinner:"\u{1F42C}",bottlenose:"\u{1F42C}",sperm:"\u{1F40B}",flyingfish:"\u{1F41F}",turtle:"\u{1F422}",mahi:"\u{1F420}",tuna:"\u{1F41F}",ventcrab:"\u{1F980}",gull:"\u{1F54A}\uFE0F",juniper:"\u{1F332}",fir:"\u{1F332}",cypress:"\u{1F333}",mangrove:"\u{1F33F}",tung:"\u{1F33C}"};function hd(n){let t=cd[n.id]?`<span class="flip"><img src="animals/${cd[n.id]}" alt=""></span>`:`<span class="emo">${qg[n.id]||"\u{1F43E}"}</span>`,e=n.a==="spout"?'<span class="spout"></span>':n.a==="leap"||n.a==="glide"?'<span class="splash"></span>':"";return`<div class="cr cr-${n.k} an-${n.a||"still"}"><span class="mover">${t}</span>${e}</div><div class="crn">${n.n.replace(/（.*）/,"")}</div>`}var ud=`
.lb.creature{transform:translate(-50%,-100%);display:flex;flex-direction:column;align-items:center}
.lb.creature .cr{position:relative;width:64px;height:44px}
.lb.creature .mover{position:absolute;left:18px;bottom:0;width:30px;height:30px;display:grid;place-items:center}
.lb.creature .emo{font-size:26px;line-height:1;filter:drop-shadow(0 2px 2px #0006)}
.lb.creature img{width:46px;height:46px;object-fit:contain;filter:drop-shadow(0 2px 2px #0006)}
.lb.creature .flip{display:block;transform:scaleX(-1)}   /* \u63D2\u5716\u9762\u5411\u53F3\uFF0C\u7FFB\u6210\u548C\u8868\u60C5\u7B26\u865F\u4E00\u6A23\u9762\u5411\u5DE6\uFF0C\u52D5\u756B\u7684\u8F49\u5411\u908F\u8F2F\u5C31\u901A\u7528 */
.lb.creature .crn{background:#fffffff0;border-radius:7px;padding:0 6px;font-size:11.5px;font-weight:700;box-shadow:0 1px 3px #0003;white-space:nowrap}
.lb.creature.cr-plant .crn{background:#e8f5e9}
body.far .lb.creature .crn{display:none}
.an-walk .mover{animation:crwalk 7s linear infinite}
@keyframes crwalk{0%{transform:translateX(-14px) scaleX(-1)}45%{transform:translateX(14px) scaleX(-1)}50%{transform:translateX(14px) scaleX(1)}95%{transform:translateX(-14px) scaleX(1)}100%{transform:translateX(-14px) scaleX(-1)}}
.an-walk .mover>*{animation:crstep .45s ease-in-out infinite}
@keyframes crstep{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
.an-hop .mover{animation:crhop 1.4s ease-in-out infinite}
@keyframes crhop{0%,100%{transform:translate(-8px,0)}25%{transform:translate(-2px,-12px)}50%{transform:translate(6px,0)}75%{transform:translate(0,-8px)}}
.an-fly .mover{animation:crfly 6s ease-in-out infinite}
@keyframes crfly{0%{transform:translate(-18px,-6px) scaleX(-1)}25%{transform:translate(0,-16px) scaleX(-1)}50%{transform:translate(18px,-6px) scaleX(-1)}55%{transform:translate(18px,-6px) scaleX(1)}75%{transform:translate(0,2px) scaleX(1)}100%{transform:translate(-18px,-6px) scaleX(1)}}
.an-flutter .mover{animation:crflut 3s ease-in-out infinite}
@keyframes crflut{0%,100%{transform:translate(-10px,0) rotate(-10deg)}25%{transform:translate(0,-14px) rotate(8deg)}50%{transform:translate(10px,-4px) rotate(-6deg)}75%{transform:translate(0,-18px) rotate(10deg)}}
.an-swim .mover{animation:crswim 5s ease-in-out infinite}
@keyframes crswim{0%,100%{transform:translateX(-14px) scaleX(-1) rotate(-4deg)}45%{transform:translateX(14px) scaleX(-1) rotate(4deg)}50%{transform:translateX(14px) scaleX(1)}95%{transform:translateX(-14px) scaleX(1)}}
.an-side .mover{animation:crside 2.6s ease-in-out infinite}
@keyframes crside{0%,100%{transform:translateX(-12px)}50%{transform:translateX(12px)}}
.an-wade .mover{animation:crwade 5s ease-in-out infinite}
@keyframes crwade{0%,100%{transform:translateX(-8px)}40%{transform:translateX(8px)}60%{transform:translateX(8px) rotate(14deg)}}
.an-leap .mover,.an-glide .mover{animation:crleap 3.2s ease-in-out infinite}
@keyframes crleap{0%{transform:translate(-20px,8px) rotate(40deg);opacity:0}10%{opacity:1}50%{transform:translate(0,-18px) rotate(0)}90%{opacity:1}100%{transform:translate(20px,8px) rotate(-40deg);opacity:0}}
.an-glide .mover{animation-duration:2.6s}
.splash{position:absolute;left:8px;right:8px;bottom:0;height:4px;border-radius:50%;background:#bfe6ff;animation:crsplash 3.2s ease-in-out infinite}
@keyframes crsplash{0%,8%{transform:scaleX(1);opacity:.9}20%{transform:scaleX(.3);opacity:0}88%{opacity:0;transform:scaleX(.3)}96%{transform:scaleX(1.2);opacity:.9}100%{opacity:.9}}
.an-spout .mover{animation:crbob 3s ease-in-out infinite}
@keyframes crbob{0%,100%{transform:translateY(2px)}50%{transform:translateY(-2px)}}
.spout{position:absolute;left:28px;bottom:26px;width:6px;height:0;background:linear-gradient(#e3f6ff,#7fd0ff00);border-radius:3px;animation:crspout 3s ease-out infinite}
@keyframes crspout{0%,40%{height:0;opacity:0}55%{height:22px;opacity:1}80%{height:26px;opacity:0}100%{height:0;opacity:0}}
.an-still .mover{animation:crsway 4s ease-in-out infinite;transform-origin:bottom center}
@keyframes crsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}
.lb.bluetears{width:70px;height:40px;transform:translate(-50%,-50%);pointer-events:none}
.lb.bluetears i{position:absolute;width:4px;height:4px;border-radius:50%;background:#4fc3f7;box-shadow:0 0 8px 3px #29b6f6;animation:twinkle 2.2s ease-in-out infinite}
@keyframes twinkle{0%,100%{opacity:.1}50%{opacity:1}}
.veg-legend div{display:grid;grid-template-columns:18px 1fr;gap:8px;align-items:center;margin:4px 0;font-size:14px}
.veg-legend small{display:block;color:var(--muted)}
#lifeList ul.cards{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;list-style:none;padding:0;margin:0}
#lifeList ul.cards li{border:1px solid var(--line);border-radius:10px;overflow:hidden;cursor:pointer;background:#fff;display:flex;flex-direction:column}
#lifeList ul.cards img{width:100%;aspect-ratio:3/2;object-fit:cover}
#lifeList ul.cards li>span{padding:5px 7px;font-size:13px}
@media (max-width:900px){#lifeList ul.cards{grid-template-columns:repeat(3,1fr)}#lifeList ul.cards li>span,.lb.creature .crn,.veg-legend div{font-size:16px!important}}
@media (prefers-reduced-motion:reduce){.lb.creature *{animation:none!important}}
`;var io={\u81FA\u7063\u9ED1\u718A:{f:"c01.jpg",a:"Abu0804",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Ursus_thibetanus_formosanus_cub_on_tree.jpg",t:"Ursus thibetanus formosanus cub on tree.jpg"},"\u5E1D\u96C9\uFF08\u9ED1\u9577\u5C3E\u96C9\uFF09":{f:"c02.jpg",a:"Snowyowls (photographer) / Jako (uploader)",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Mikado_Pheasant_398.jpg",t:"Mikado Pheasant 398.jpg"},\u81FA\u7063\u6C34\u9E7F:{f:"c03.jpg",a:"Redbird Wu",l:"CC BY 4.0",u:"https://commons.wikimedia.org/wiki/File:Rusa_unicolor_swinhoii_137292437.jpg",t:"Rusa unicolor swinhoii 137292437.jpg"},\u5C71\u7F8C:{f:"c04.jpg",a:"\u738B\u671D\u5A01",l:"CC BY 4.0",u:"https://commons.wikimedia.org/wiki/File:Muntiacus_reevesi_micrurus_230869896.jpg",t:"Muntiacus reevesi micrurus 230869896.jpg"},\u6AFB\u82B1\u9264\u543B\u9BAD:{f:"c05.jpg",a:"Thumbhero",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:Formosan_Landlocked_Salmon_in_Wuling_Farm,_Taichung,_Taiwan.jpg",t:"Formosan Landlocked Salmon in Wuling Farm, Taichung, Taiwan.jpg"},\u81FA\u7063\u737C\u7334:{f:"c06.jpg",a:"Charles J. Sharp",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:Taiwanese_macaque_(Macaca_cyclopis)_female_Yangmingshan.jpg",t:"Taiwanese macaque (Macaca cyclopis) female Yangmingshan.jpg"},\u81FA\u7063\u85CD\u9D72:{f:"c07.jpg",a:"Flickr user wagtail . Photo uploaded to commons by user ltsh",l:"CC BY-SA 2.0",u:"https://commons.wikimedia.org/wiki/File:Urocissa_caerulea.jpg",t:"Urocissa caerulea.jpg"},\u77F3\u864E:{f:"c08.jpg",a:"NasserHalaweh",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:Felidae_Prionailurus_bengalensis_1.jpg",t:"Felidae Prionailurus bengalensis 1.jpg"},\u7A7F\u5C71\u7532:{f:"c09.jpg",a:"U.S. Fish and Wildlife Service Headquarters",l:"CC BY 2.0",u:"https://commons.wikimedia.org/wiki/File:Manis_pentadactyla_(29054818144).jpg",t:"Manis pentadactyla (29054818144).jpg"},\u9ED1\u9762\u7435\u9DFA:{f:"c10.jpg",a:"Cp9asngf",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Black_faced_spoonbill_at_Niigata.JPG",t:"Black faced spoonbill at Niigata.JPG"},\u62DB\u6F6E\u87F9:{f:"c11.jpg",a:"\u6797\u5B6B\u92D2",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:Tubuca_arcuata.jpg",t:"Tubuca arcuata.jpg"},\u6885\u82B1\u9E7F:{f:"c12.jpg",a:"A-gi\xE2u",l:"Public domain",u:"https://commons.wikimedia.org/wiki/File:Young_sika_deer_Green_Island_Taiwan.jpg",t:"Young sika deer Green Island Taiwan.jpg"},\u7D2B\u6591\u8776:{f:"c13.jpg",a:"LiCheng Shih",l:"CC BY 2.0",u:"https://commons.wikimedia.org/wiki/File:Euploea_eunice_hobsoni_(27454075450).jpg",t:"Euploea eunice hobsoni (27454075450).jpg"},\u98DB\u65CB\u6D77\u8C5A:{f:"c14.jpg",a:"Magnus Kjaergaard",l:"CC BY 3.0",u:"https://commons.wikimedia.org/wiki/File:Spinner_dolphin_jumping.JPG",t:"Spinner dolphin jumping.JPG"},\u74F6\u9F3B\u6D77\u8C5A:{f:"c15.jpg",a:"NASA",l:"Public domain",u:"https://commons.wikimedia.org/wiki/File:Tursiops_truncatus_01.jpg",t:"Tursiops truncatus 01.jpg"},\u62B9\u9999\u9BE8:{f:"c16.jpg",a:"Gabriel Barathieu",l:"CC BY-SA 2.0",u:"https://commons.wikimedia.org/wiki/File:Mother_and_baby_sperm_whale.jpg",t:"Mother and baby sperm whale.jpg"},\u98DB\u9B5A:{f:"c17.jpg",a:"Gervais et Boulart",l:"Public domain",u:"https://commons.wikimedia.org/wiki/File:Exocoetus_volitans.jpg",t:"Exocoetus volitans.jpg"},\u7DA0\u8835\u9F9C:{f:"c18.jpg",a:"Brocken Inaglory",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:Total_internal_reflection_of_Chelonia_mydas.jpg",t:"Total internal reflection of Chelonia mydas.jpg"},\u9B3C\u982D\u5200:{f:"c19.jpg",a:"Qbx101",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Mahi_mahi_hatteras_nc.jpg",t:"Mahi mahi hatteras nc.jpg"},\u9ED1\u9BAA\u9B5A:{f:"c20.jpg",a:"Stephane-bdc",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:Thunnus_orientalis.jpg",t:"Thunnus orientalis.jpg"},\u70CF\u9F9C\u602A\u65B9\u87F9:{f:"c21.jpg",a:"SSR2000",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Specimen_of_Xenograpsus_testudinatus-2.JPG",t:"Specimen of Xenograpsus testudinatus-2.JPG"},\u9ED1\u5C3E\u9DD7:{f:"c22.jpg",a:"me, Bamse",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Black-tailed_gull.jpg",t:"Black-tailed gull.jpg"},\u7389\u5C71\u5713\u67CF:{f:"c23.jpg",a:"Alfafa7",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:%E9%9B%AA%E5%B1%B1%E4%B8%BB%E5%B3%B0%E5%8D%97%E5%81%B4%E5%B1%B1%E5%9D%A1%E7%9A%84%E7%8E%89%E5%B1%B1%E5%9C%93%E6%9F%8F%E7%99%BD%E6%9C%A8%E6%9E%97.jpg",t:"\u96EA\u5C71\u4E3B\u5CF0\u5357\u5074\u5C71\u5761\u7684\u7389\u5C71\u5713\u67CF\u767D\u6728\u6797.jpg"},\u81FA\u7063\u51B7\u6749:{f:"c24.jpg",a:"HK James Ho on Flickr",l:"CC BY-SA 2.0",u:"https://commons.wikimedia.org/wiki/File:Abies_kawakamii_forest.jpg",t:"Abies kawakamii forest.jpg"},"\u7D05\u6A9C\uFF08\u963F\u91CC\u5C71\u795E\u6728\uFF09":{f:"c25.jpg",a:"zilupe at Flickr",l:"CC BY 2.0",u:"https://commons.wikimedia.org/wiki/File:Chamaecyparis_formosensis_4trees.jpg",t:"Chamaecyparis formosensis 4trees.jpg"},"\u6C34\u7B46\u4ED4\uFF08\u7D05\u6A39\u6797\uFF09":{f:"c26.jpg",a:"User:Itsmine",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Kandelia_obovata_at_Ting_Kok_mangrove.JPG",t:"Kandelia obovata at Ting Kok mangrove.JPG"},\u6CB9\u6850\u82B1:{f:"c27.jpg",a:"Ping an Chang",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:%E6%9C%A8%E6%B2%B9%E6%A1%90%EF%BC%88%E5%8D%83%E5%B9%B4%E6%A1%90%EF%BC%89Vernicia_montana_20210401090952_01.jpg",t:"\u6728\u6CB9\u6850\uFF08\u5343\u5E74\u6850\uFF09Vernicia montana 20210401090952 01.jpg"}};var dd=`
.lb.fest .tpic{width:132px;height:99px;border-radius:14px;overflow:hidden;border:3px solid;box-shadow:0 3px 10px #0004;background:#eee}
.lb.fest .tpic img{width:100%;height:100%;object-fit:cover;animation:kb 12s ease-in-out infinite alternate}
@keyframes kb{from{transform:scale(1)}to{transform:scale(1.15) translate(-3%,-2%)}}
.lb.fest{pointer-events:none}
.tribe-list button{grid-template-columns:44px 1fr!important}
.tribe-list .tthumb{grid-row:span 2;width:44px;height:33px;object-fit:cover;border-radius:6px;border:2px solid}
.lb.fest{transform:translate(-50%,-112%);display:flex;flex-direction:column;align-items:center;pointer-events:none}
.lb.fest .scene{position:relative;width:120px;height:72px;border-radius:14px;background:linear-gradient(#e3f4ff 0 70%,#c5e1a5 70%);box-shadow:0 2px 8px #0003;overflow:hidden}
.lb.fest .sccap{margin-top:3px;background:#fff;border-radius:8px;padding:1px 7px;font-size:12px;font-weight:700;box-shadow:0 1px 4px #0002;white-space:nowrap}
.scene .st,.scene .orb,.scene .walker,.scene .carrier,.scene .jump{position:absolute;bottom:4px}
.sc-dance .orb{left:45px;animation:orbit 6s linear infinite}
@keyframes orbit{0%{transform:translate(34px,-8px) scale(.72);z-index:1}25%{transform:translate(0,-2px) scale(1);z-index:3}50%{transform:translate(-34px,-8px) scale(.72);z-index:1}75%{transform:translate(0,-15px) scale(.6);z-index:0;opacity:.7}100%{transform:translate(34px,-8px) scale(.72);z-index:1}}
.sc-boat .sea{position:absolute;left:0;right:0;bottom:0;height:24px;background:#4aa3df}
.sc-boat{background:linear-gradient(#e3f4ff,#e3f4ff)!important}
.sc-boat .boat{position:absolute;left:14px;bottom:10px;width:82px;height:34px;animation:bob 2.4s ease-in-out infinite}
.sc-boat .boat .fg{position:relative;top:4px;margin-left:6px}
.sc-boat .hull{position:absolute;left:0;bottom:0}
.sc-boat .oar{transform-origin:10px 13px;animation:row 1.2s ease-in-out infinite}
@keyframes row{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(22deg)}}
@keyframes bob{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-3px) rotate(2deg)}}
.sc-boat .jump{left:90px;bottom:14px;opacity:0;animation:leap 3.3s ease-in-out infinite}
@keyframes leap{0%{transform:translate(0,0) rotate(-30deg);opacity:0}10%{opacity:1}50%{transform:translate(-26px,-30px) rotate(0)}90%{opacity:1}100%{transform:translate(-52px,0) rotate(30deg);opacity:0}}
.sc-archer .arrow{position:absolute;left:36px;top:30px;width:16px;height:2px;background:#333;animation:shoot 1.8s ease-in infinite}
.sc-archer .target{position:absolute;right:8px;top:20px;width:20px;height:20px;border-radius:50%;background:radial-gradient(#d32f2f 30%,#fff 31% 55%,#d32f2f 56%)}
@keyframes shoot{0%,15%{transform:translateX(0);opacity:1}70%{transform:translateX(46px);opacity:1}100%{transform:translateX(46px);opacity:0}}
.sc-pole .ball{position:absolute;left:30px;top:6px;width:9px;height:9px;border-radius:50%;background:#795548;animation:toss 2s ease-in-out infinite}
@keyframes toss{0%,100%{transform:translate(28px,30px)}50%{transform:translate(0,0)}}
.sc-pole .st:first-child{animation:jab 2s ease-in-out infinite}
@keyframes jab{0%,40%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
.sc-walk .walker{left:0;animation:march 4s linear infinite}
@keyframes march{0%{transform:translateX(-10px) translateY(0)}25%{transform:translateX(18px) translateY(-2px)}50%{transform:translateX(46px) translateY(0)}75%{transform:translateX(74px) translateY(-2px)}100%{transform:translateX(102px) translateY(0)}}
.sc-walk .tree{position:absolute;right:4px;bottom:4px;border-left:9px solid transparent;border-right:9px solid transparent;border-bottom:26px solid #2e7d32}
.sacred .night,.sc-solemn .night{position:absolute;inset:0;background:linear-gradient(#ffe0b2 0 70%,#d7ccc8 70%)}
.sc-solemn .sway{animation:sway 3s ease-in-out infinite}
@keyframes sway{0%,100%{transform:translateX(-1.5px)}50%{transform:translateX(1.5px)}}
.sc-solemn .flame{animation:flick .6s ease-in-out infinite alternate}
@keyframes flick{from{opacity:.6}to{opacity:1}}
.sc-solemn .fg{filter:none}
.sc-pound .pounder svg{animation:pound .9s ease-in-out infinite}
.sc-pound .pounder:nth-child(2) svg{animation-delay:.45s}
@keyframes pound{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
.sc-pound .mortar{position:absolute;left:44px;bottom:4px;width:16px;height:14px;background:#6d4c41;border-radius:3px 3px 6px 6px}
.sc-sow .bend svg{transform-origin:10px 24px;animation:bend 2s ease-in-out infinite}
@keyframes bend{0%,100%{transform:rotate(0)}50%{transform:rotate(28deg)}}
.sc-sow .seed{position:absolute;top:30px;width:4px;height:4px;border-radius:50%;background:#f9a825;animation:fall 1.4s ease-in infinite}
@keyframes fall{0%{transform:translateY(0);opacity:1}100%{transform:translateY(24px);opacity:0}}
.sc-sow .soil,.sc-carry .field{position:absolute;left:0;right:0;bottom:0;height:6px;background:#8d6e63}
.sc-carry .field{background:repeating-linear-gradient(90deg,#c0a050 0 4px,#9ccc65 4px 8px)}
.sc-carry .carrier{left:0;animation:carry 6s linear infinite}
@keyframes carry{0%{transform:translateX(4px) scaleX(1)}48%{transform:translateX(84px) scaleX(1)}50%{transform:translateX(84px) scaleX(-1)}98%{transform:translateX(4px) scaleX(-1)}100%{transform:translateX(4px) scaleX(1)}}
.sc-carry .carrier svg{animation:step .5s ease-in-out infinite}
@keyframes step{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
.sc-gather .bob{animation:bobme 1.6s ease-in-out infinite}
@keyframes bobme{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
.sc-gather .hut{position:absolute;right:2px;bottom:4px;border-left:14px solid transparent;border-right:14px solid transparent;border-bottom:16px solid #6d4c41}
.month-strip{display:grid;grid-template-columns:repeat(6,1fr);gap:4px;margin:6px 0}
.month-strip button{border:1px solid var(--line);background:#fff;border-radius:8px;padding:5px 0;font:inherit;font-size:13px;cursor:pointer;position:relative}
.month-strip button.on{background:#8e24aa;color:#fff;border-color:#8e24aa}
.month-strip button.now::after{content:"";position:absolute;right:3px;top:3px;width:6px;height:6px;border-radius:50%;background:#ff7043}
.fest-list{display:flex;flex-direction:column;gap:5px}
.fest-list button{text-align:left;border:1px solid var(--line);background:#fff;border-radius:10px;padding:6px 10px;font:inherit;cursor:pointer;display:grid;grid-template-columns:14px 1fr;column-gap:8px;align-items:center}
.fest-list button small{grid-column:2;color:var(--muted);font-size:12px}
@media (max-width:900px){.lb.fest .tpic{width:120px;height:90px}.lb.fest .sccap,.month-strip button,.fest-list button small{font-size:16px!important}.lb.fest .scene{transform:scale(1.15);transform-origin:bottom center;margin-bottom:6px}}
@media (prefers-reduced-motion:reduce){.scene *{animation:none!important}}
`;var so={terrain:{title:"\u26F0\uFE0F \u5730\u5F62",book:"\u570B\u5C0F\u793E\u6703 4 \u4E0B\u3008\u5BB6\u9109\u7684\u5730\u5F62\u3009\u30015 \u4E0A 2-1\u3008\u591A\u6A23\u5316\u7684\u5730\u5F62\u3009\uFF1B\u570B\u4E2D\u5730\u7406 1 \u4E0A\u7B2C 3 \u8AB2\u3008\u81FA\u7063\u7684\u5730\u5F62\u3009",goal:"\u8A8D\u8B58\u4E94\u5927\u5730\u5F62\uFF08\u5C71\u5730\u3001\u4E18\u9675\u3001\u53F0\u5730\u3001\u76C6\u5730\u3001\u5E73\u539F\uFF09\u7684\u7279\u5FB5\u8207\u5206\u5E03\uFF1B\u570B\u4E2D\u9032\u4E00\u6B65\u7406\u89E3\u677F\u584A\u64E0\u58D3\u8207\u5730\u5F62\u5256\u9762\u3002",steps:[[3,"\u6309\u300C\u{1F5FA}\uFE0F \u5E73\u9762\u5716\u300D\uFF0C\u8ACB\u5B78\u751F\u8AAA\u51FA\u81FA\u7063\u4E2D\u9593\u504F\u6771\u90A3\u4E00\u9577\u689D\u662F\u4EC0\u9EBC\u5730\u5F62\uFF08\u5C71\u5730\uFF09\u3002"],[5,"\u56DE\u5230\u300C\u{1F3A5} 3D \u659C\u770B\u300D\uFF0C\u4F9D\u5E8F\u9EDE\u4E94\u7A2E\u5730\u5F62\uFF0C\u8B93\u5B83\u5011\u300C\u6D6E\u8D77\u4F86\u300D\uFF0C\u6BD4\u8F03\u4F4D\u7F6E\u8207\u9AD8\u4F4E\u3002"],[4,"\u9EDE\u5C71\u5CF0\u770B\u9AD8\u5EA6\uFF08\u7389\u5C71 3,952 \u516C\u5C3A\uFF09\uFF0C\u7528\u53F3\u5074\u9AD8\u5EA6\u5C3A\u63DB\u7B97\u300C\u516C\u5C3A\uFF1D\u516C\u91CC\u300D\u3002"],[5,"\u570B\u4E2D\uFF1A\u958B\u555F\u300C\u{1F4C8} \u5256\u9762\u5716\u300D\u81FA\u4E2D\u2192\u82B1\u84EE\uFF0C\u6CBF\u5256\u9762\u6ED1\u52D5\uFF0C\u8AAA\u51FA\u7D93\u904E\u7684\u5730\u5F62\u3002"],[5,"\u570B\u4E2D\uFF1A\u64AD\u653E\u300C\u{1F30B} \u677F\u584A\u904B\u52D5\u300D\uFF0C\u8AAA\u660E\u81FA\u7063\u70BA\u4EC0\u9EBC\u591A\u5C71\u3001\u591A\u5730\u9707\u3002"]],questions:[["\u81FA\u7063\u7684\u5C71\u5730\u4E3B\u8981\u5728\u54EA\u88E1\uFF1F","\u4E2D\u592E\u504F\u6771\uFF0C\u5357\u5317\u6392\u6210\u4E00\u9577\u689D\uFF0C\u9762\u7A4D\u6700\u5927\u3002"],["\u53F0\u5730\u548C\u5E73\u539F\u90FD\u5F88\u5E73\uFF0C\u5DEE\u5728\u54EA\u88E1\uFF1F","\u53F0\u5730\u5730\u52E2\u8F03\u9AD8\u3001\u908A\u7DE3\u662F\u9661\u5761\uFF1B\u5E73\u539F\u4F4E\u5E73\u3002"],["\u70BA\u4EC0\u9EBC\u6843\u5712\u53F0\u5730\u6709\u5F88\u591A\u57E4\u5858\uFF1F","\u53F0\u5730\u5730\u52E2\u9AD8\u3001\u4E0D\u5BB9\u6613\u5F15\u6CB3\u6C34\u704C\u6E89\uFF0C\u6240\u4EE5\u6316\u57E4\u5858\u5B58\u6C34\u3002"],["\u81FA\u5317\u76C6\u5730\u70BA\u4EC0\u9EBC\u4EBA\u53E3\u591A\uFF1F","\u5730\u52E2\u5E73\u5766\u3001\u4EA4\u901A\u65B9\u4FBF\uFF0C\u662F\u653F\u6CBB\u7D93\u6FDF\u4E2D\u5FC3\u3002"],["\uFF08\u570B\u4E2D\uFF09\u81FA\u7063\u7684\u5C71\u70BA\u4EC0\u9EBC\u9019\u9EBC\u9AD8\uFF1F","\u83F2\u5F8B\u8CD3\u6D77\u677F\u584A\u64E0\u58D3\u6B50\u4E9E\u677F\u584A\uFF0C\u5F62\u6210\u5E74\u8F15\u7684\u65B0\u8936\u66F2\u5C71\u8108\uFF0C\u5230\u73FE\u5728\u9084\u5728\u62AC\u5347\u3002"]],myths:["\u300C\u53F0\u5730\u4E00\u5B9A\u6BD4\u4E18\u9675\u9AD8\u300D\u2192 \u4E0D\u4E00\u5B9A\uFF0C\u53F0\u5730\u7684\u7279\u8272\u662F\u300C\u9802\u90E8\u5E73\u5766\u300D\uFF0C\u4E0D\u662F\u9AD8\u5EA6\u3002","\u300C\u76C6\u5730\u4E00\u5B9A\u5F88\u4F4E\u300D\u2192 \u57D4\u91CC\u76C6\u5730\u5E95\u90E8\u7D04 450 \u516C\u5C3A\uFF0C\u6BD4\u5F88\u591A\u4E18\u9675\u9084\u9AD8\u3002","3D \u5730\u5716\u7684\u9AD8\u5EA6\u6709\u653E\u5927\uFF08\xD76\uFF09\uFF0C\u771F\u5BE6\u7684\u5C71\u5761\u6C92\u6709\u9019\u9EBC\u9661\uFF1B\u53EF\u7528\u300C\u9AD8\u5EA6\u653E\u5927\u300D\u6ED1\u687F\u8ABF\u56DE \xD71 \u7D66\u5B78\u751F\u770B\u3002"]},rain:{title:"\u{1F327}\uFE0F \u96E8\u91CF",book:"\u570B\u5C0F\u793E\u6703 4 \u4E0B\u3008\u5BB6\u9109\u7684\u6C23\u5019\u3009\uFF1B\u570B\u4E2D\u5730\u7406 1 \u4E0A\u7B2C 5 \u8AB2\u3008\u81FA\u7063\u7684\u6C23\u5019\u3009",goal:"\u8B80\u61C2\u6708\u96E8\u91CF\u9577\u689D\u5716\uFF0C\u77E5\u9053\u81FA\u7063\u7684\u96E8\u5B63\uFF08\u6885\u96E8\u3001\u98B1\u98A8\u3001\u6771\u5317\u5B63\u98A8\uFF09\u8207\u5357\u5317\u5DEE\u7570\uFF1B\u7528\u6DF9\u6C34\u6A21\u64EC\u6BD4\u8F03\u5730\u5F62\u9AD8\u4F4E\u3002",steps:[[4,"\u9078\u300C\u9AD8\u96C4\u300D\uFF0C\u770B 12 \u500B\u6708\u7684\u9577\u689D\u5716\uFF1A\u96E8\u96C6\u4E2D\u5728\u54EA\u5E7E\u500B\u6708\uFF1F\uFF08\u590F\u96E8\u51AC\u4E7E\uFF09"],[4,"\u63DB\u6210\u300C\u57FA\u9686\u300D\u6216\u300C\u6DE1\u6C34\u300D\u6BD4\u8F03\uFF1A\u5317\u90E8\u51AC\u5929\u4E5F\u4E0B\u96E8\uFF08\u6771\u5317\u5B63\u98A8\uFF09\u3002"],[3,"\u9EDE\u4E0D\u540C\u6708\u4EFD\uFF0C\u89C0\u5BDF\u5730\u5716\u4E0A\u7684\u96F2\u51FA\u73FE\u5728\u54EA\u88E1\uFF0C\u5FF5\u51FA\u90A3\u500B\u6708\u7684\u4E0B\u96E8\u539F\u56E0\u3002"],[4,"\u6309\u300C\u958B\u59CB\u4E0B\u96E8\u300D\uFF0C\u770B\u6C34\u4F4D\u4E0A\u5347\u6642\u5E73\u539F\u3001\u76C6\u5730\u3001\u53F0\u5730\u3001\u4E18\u9675\u3001\u5C71\u5730\u4F9D\u5E8F\u88AB\u6DF9\u3002"]],questions:[["\u9AD8\u96C4\u54EA\u5E7E\u500B\u6708\u96E8\u6700\u591A\uFF1F\u70BA\u4EC0\u9EBC\uFF1F","6\uFF5E8 \u6708\uFF0C\u6885\u96E8\u3001\u897F\u5357\u5B63\u98A8\u8207\u98B1\u98A8\u3002"],["\u70BA\u4EC0\u9EBC\u57FA\u9686\u51AC\u5929\u4E5F\u5E38\u4E0B\u96E8\uFF1F","\u51AC\u5929\u5439\u6771\u5317\u5B63\u98A8\uFF0C\u5F9E\u6D77\u4E0A\u5E36\u4F86\u6C34\u6C23\uFF0C\u8FCE\u98A8\u7684\u5317\u90E8\u3001\u6771\u5317\u90E8\u591A\u96E8\u3002"],["\u6C34\u4F4D\u5230 100 \u516C\u5C3A\u6642\uFF0C\u54EA\u4E00\u7A2E\u5730\u5F62\u6700\u5148\u88AB\u6DF9\uFF1F","\u5E73\u539F\uFF08\u5927\u591A\u4E0D\u5230 100 \u516C\u5C3A\uFF09\u3002"],["\uFF08\u570B\u4E2D\uFF09\u4E00\u5929\u4E0B 200 \u6BEB\u7C73\u53EB\u4EC0\u9EBC\uFF1F","\u8C6A\u96E8\uFF0880 \u5927\u96E8\u3001200 \u8C6A\u96E8\u3001350 \u5927\u8C6A\u96E8\u3001500 \u8D85\u5927\u8C6A\u96E8\uFF09\u3002"]],myths:["\u300C\u6DF9\u6C34\u6A21\u64EC\u300D\u662F\u60F3\u50CF\u5BE6\u9A57\uFF0C\u7528\u4F86\u6BD4\u8F03\u5730\u5F62\u9AD8\u4F4E\uFF1B\u771F\u5BE6\u7684\u96E8\u6C34\u6703\u6D41\u9032\u6CB3\u5DDD\u3001\u56DE\u5230\u5927\u6D77\uFF0C\u4E0D\u6703\u6DF9\u5230\u5C71\u4E0A\u3002","\u96E8\u91CF\u9577\u689D\u5716\u7684\u55AE\u4F4D\u662F\u300C\u6BEB\u7C73\uFF08mm\uFF09\u300D\uFF0C\u4E0D\u662F\u516C\u5206\u3002","\u6A19\u300C\u88DC\u5145\u300D\u7684\u57CE\u5E02\u662F\u6C23\u8C61\u7F72\u5E73\u5747\u503C\u7684\u7D04\u7565\u6578\u5B57\uFF1B\u6A19\u300C\u8AB2\u672C\u300D\u7684\u662F\u8AB2\u672C\u8868\u683C\u3002"]},ocean:{title:"\u{1F30A} \u6D77\u6D0B",book:"\u570B\u4E2D\u5730\u7406 1 \u4E0A\u7B2C 4 \u8AB2\u3008\u81FA\u7063\u7684\u6D77\u57DF\u3009",goal:"\u8A8D\u8B58\u81FA\u7063\u56DB\u5468\u7684\u6D77\u57DF\u8207\u6D0B\u6D41\uFF1B\u77E5\u9053\u6696\u6D41\u3001\u5BD2\u6D41\u5C0D\u6F01\u696D\u8207\u6C23\u5019\u7684\u5F71\u97FF\uFF1B\u8A8D\u8B58\u96E2\u5CF6\u7684\u6210\u56E0\u3002",steps:[[3,"\u4F9D\u5E8F\u9EDE\u592A\u5E73\u6D0B\u3001\u5DF4\u58EB\u6D77\u5CFD\u3001\u81FA\u7063\u6D77\u5CFD\u3001\u6771\u6D77\uFF0C\u8AAA\u51FA\u5B83\u5011\u5728\u81FA\u7063\u7684\u54EA\u4E00\u908A\u3002"],[4,"\u5207\u300C\u2744\uFE0F \u51AC\u5B63\u300D\uFF0C\u9EDE\u9ED1\u6F6E\u8207\u4E2D\u570B\u6CBF\u5CB8\u6D41\uFF0C\u6BD4\u8F03\u6696\u6D41\u548C\u5BD2\u6D41\u7684\u65B9\u5411\u3002"],[3,"\u5207\u300C\u2600\uFE0F \u590F\u5B63\u300D\uFF0C\u770B\u5357\u6D77\u5B63\u98A8\u6D41\u51FA\u73FE\u3001\u4E2D\u570B\u6CBF\u5CB8\u6D41\u6D88\u5931\u3002"],[5,"\u9EDE\u96E2\u5CF6\uFF08\u9F9C\u5C71\u5CF6\u3001\u57FA\u9686\u5DBC\u3001\u5927\u5775\u5CF6\u3001\u862D\u5DBC\uFF09\uFF0C\u8AAA\u51FA\u5B83\u5011\u662F\u706B\u5C71\u5CF6\u3001\u5927\u9678\u5CF6\u9084\u662F\u73CA\u745A\u7901\u5CF6\u3002"]],questions:[["\u9ED1\u6F6E\u5F80\u54EA\u500B\u65B9\u5411\u6D41\uFF1F\u662F\u6696\u6D41\u9084\u662F\u5BD2\u6D41\uFF1F","\u6CBF\u81FA\u7063\u6771\u90E8\u5F80\u5317\u6D41\uFF0C\u662F\u6696\u6D41\u3002"],["\u70BA\u4EC0\u9EBC\u6771\u90E8\u53EF\u4EE5\u8CDE\u9BE8\u3001\u6355\u65D7\u9B5A\uFF1F","\u9ED1\u6F6E\u5E36\u4F86\u6EAB\u6696\u6D77\u6C34\u8207\u8C50\u5BCC\u7684\u9060\u6D0B\u9B5A\u985E\u3002"],["\u51AC\u5929\u6F8E\u6E56\u7684\u9B5A\u70BA\u4EC0\u9EBC\u53EF\u80FD\u88AB\u51CD\u50B7\uFF1F","\u4E2D\u570B\u6CBF\u5CB8\u6D41\uFF08\u51B7\u6D41\uFF09\u5357\u4E0B\uFF0C\u592A\u51B7\u6642\u9020\u6210\u5BD2\u5BB3\u3002"],["\u6F8E\u6E56\u3001\u91D1\u9580\u3001\u6771\u6C99\u5206\u5225\u662F\u4EC0\u9EBC\u5CF6\uFF1F","\u6F8E\u6E56\uFF1A\u706B\u5C71\u5CF6\uFF08\u7384\u6B66\u5CA9\uFF09\uFF1B\u91D1\u9580\uFF1A\u5927\u9678\u5CF6\uFF1B\u6771\u6C99\uFF1A\u73CA\u745A\u7901\u5CF6\u3002"]],myths:["\u7BAD\u982D\u53EA\u8868\u793A\u5927\u81F4\u65B9\u5411\uFF0C\u771F\u5BE6\u7684\u6D0B\u6D41\u6703\u96A8\u5B63\u7BC0\u3001\u5929\u6C23\u8B8A\u52D5\u3002","\u300C\u5BD2\u6D41\u300D\u5728\u9019\u88E1\u662F\u6307\u51B7\u7684\u6D0B\u6D41\uFF0C\u548C\u5929\u6C23\u9810\u5831\u7684\u300C\u5BD2\u6D41\u4F86\u8972\u300D\u4E0D\u540C\u3002"]},tribes:{title:"\u{1F465} \u65CF\u7FA4",book:"\u570B\u5C0F\u793E\u6703\uFF08\u5BB6\u9109\u7684\u65CF\u7FA4\u8207\u6587\u5316\uFF09\uFF1B\u570B\u4E2D\u6B77\u53F2\u3001\u516C\u6C11\u76F8\u95DC\u55AE\u5143",goal:"\u8A8D\u8B58 17 \u500B\u539F\u4F4F\u6C11\u65CF\u7684\u5206\u5E03\u8207\u6587\u5316\u3001\u796D\u5178\u7684\u6642\u5E8F\uFF0C\u4EE5\u53CA\u5BA2\u5BB6\u65CF\u7FA4\u7684\u5206\u5E03\uFF1B\u5B78\u6703\u5C0A\u91CD\u591A\u5143\u6587\u5316\u3002",steps:[[4,"\u770B 17 \u65CF\u7684\u5206\u5E03\u984F\u8272\uFF1A\u54EA\u4E9B\u65CF\u4F4F\u9AD8\u5C71\uFF1F\u54EA\u4E9B\u65CF\u4F4F\u5E73\u539F\u6216\u6D77\u5CF6\uFF1F"],[5,"\u7528\u300C\u{1F4C5} \u796D\u5178\u6708\u66C6\u300D\u9EDE\u672C\u6708\uFF0C\u770B\u54EA\u4E9B\u65CF\u6B63\u5728\u8209\u884C\u796D\u5178\uFF1B\u9EDE\u4E00\u500B\u796D\u5178\u770B\u8AAA\u660E\u3002"],[3,"\u4ECB\u7D39 2026 \u5E74\u65B0\u6838\u5B9A\u7684\u7B2C 17 \u65CF\u300C\u897F\u62C9\u96C5\u65CF\u300D\uFF0C\u8A0E\u8AD6\u300C\u6B63\u540D\u300D\u7684\u610F\u7FA9\u3002"],[3,"\u5207\u5230\u300C\u{1F3EE} \u5BA2\u5BB6\u300D\uFF0C\u770B\u5BA2\u5BB6\u4EBA\u53E3\u6BD4\u7387\u6700\u9AD8\u7684\u7E23\u5E02\u5728\u54EA\u88E1\u3002"]],questions:[["\u54EA\u4E00\u65CF\u4F4F\u5728\u6D77\u5CF6\u4E0A\uFF1F\u6709\u4EC0\u9EBC\u7279\u5225\u7684\u6587\u5316\uFF1F","\u96C5\u7F8E\u65CF\uFF08\u9054\u609F\u65CF\uFF09\uFF0C\u62FC\u677F\u821F\u3001\u98DB\u9B5A\u796D\u3001\u5730\u4E0B\u5C4B\u3002"],["\u963F\u7F8E\u65CF\u7684\u8C50\u5E74\u796D\u5927\u7D04\u5728\u5E7E\u6708\uFF1F","7\uFF5E8 \u6708\u3002"],["\u897F\u62C9\u96C5\u65CF\u50B3\u7D71\u4F4F\u5728\u54EA\u88E1\uFF1F","\u5609\u5357\u5E73\u539F\u5230\u6046\u6625\u534A\u5CF6\u3002"],["\u5BA2\u5BB6\u4EBA\u53E3\u6BD4\u7387\u6700\u9AD8\u7684\u662F\u54EA\u500B\u7E23\uFF1F","\u65B0\u7AF9\u7E23\uFF08\u7D04 67.8%\uFF09\uFF0C\u5176\u6B21\u662F\u82D7\u6817\u7E23\u3002"]],myths:["\u5F69\u8272\u5206\u5E03\u662F\u300C\u50B3\u7D71\u4E3B\u8981\u5206\u5E03\u5730\u5340\u300D\u7684\u793A\u610F\uFF0C\u73FE\u5728\u5F88\u591A\u65CF\u4EBA\u4F4F\u5728\u57CE\u5E02\u3002","\u795E\u8056\u796D\u5178\uFF08\u{1F56F}\uFE0F\uFF09\u4E0D\u662F\u8868\u6F14\uFF0C\u89C0\u79AE\u8981\u9075\u5B88\u90E8\u843D\u898F\u7BC4\uFF0C\u4E0D\u8981\u7528\u300C\u597D\u73A9\u300D\u4F86\u5F62\u5BB9\u3002","\u4EBA\u7269\u662F\u526A\u5F71\uFF0C\u4E0D\u4EE3\u8868\u5404\u65CF\u771F\u5BE6\u7684\u670D\u98FE\uFF1B\u53EF\u4EE5\u642D\u914D\u539F\u6C11\u6703\u6216\u539F\u6587\u6703\u7684\u5F71\u7247\u4ECB\u7D39\u670D\u98FE\u3002","\u796D\u5178\u65E5\u671F\u6BCF\u5E74\u3001\u6BCF\u500B\u90E8\u843D\u4E0D\u540C\uFF0C\u8ACB\u4EE5\u539F\u6C11\u6703\u8207\u90E8\u843D\u516C\u544A\u70BA\u6E96\u3002"]},life:{title:"\u{1F98C} \u751F\u7269",book:"\u570B\u5C0F\u81EA\u7136\u8207\u793E\u6703\uFF08\u81FA\u7063\u7684\u751F\u7269\u3001\u4FDD\u80B2\uFF09\uFF1B\u570B\u4E2D\u5730\u7406 1 \u4E0A\uFF08\u6C23\u5019\u8207\u690D\u7269\u5782\u76F4\u5206\u5E03\uFF09",goal:"\u7406\u89E3\u300C\u6D77\u62D4\u8D8A\u9AD8\u8D8A\u51B7\uFF0C\u690D\u7269\u8DDF\u8457\u6539\u8B8A\u300D\u7684\u5782\u76F4\u5206\u5E03\uFF1B\u8A8D\u8B58\u81FA\u7063\u7279\u6709\u7A2E\u8207\u4FDD\u80B2\u985E\u52D5\u7269\u3002",steps:[[4,"\u958B\u8457\u300C\u690D\u7269\u5782\u76F4\u5206\u5E03\u300D\u984F\u8272\uFF0C\u5F9E\u6D77\u908A\u5F80\u7389\u5C71\u770B\uFF0C\u8AAA\u51FA\u7D93\u904E\u5E7E\u7A2E\u68EE\u6797\u3002"],[5,"\u9EDE\u81FA\u7063\u9ED1\u718A\u3001\u5E1D\u96C9\u3001\u6AFB\u82B1\u9264\u543B\u9BAD\uFF1A\u7260\u5011\u4F4F\u5728\u591A\u9AD8\u7684\u5730\u65B9\uFF1F"],[3,"\u5207\u5230\u300C\u{1F42C} \u6D77\u6D0B\u300D\uFF0C\u9EDE\u98DB\u65CB\u6D77\u8C5A\u3001\u98DB\u9B5A\uFF0C\u9023\u7D50\u9ED1\u6F6E\u3002"],[3,"\u8A0E\u8AD6\uFF1A\u77F3\u864E\u3001\u7A7F\u5C71\u7532\u9762\u81E8\u4EC0\u9EBC\u5A01\u8105\uFF1F\u6211\u5011\u80FD\u505A\u4EC0\u9EBC\uFF1F"]],questions:[["\u70BA\u4EC0\u9EBC\u7389\u5C71\u9802\u9644\u8FD1\u53EA\u6709\u77EE\u5C0F\u7684\u7389\u5C71\u5713\u67CF\uFF1F","\u98A8\u5927\u3001\u6C23\u6EAB\u4F4E\uFF0C\u5927\u6A39\u9577\u4E0D\u8D77\u4F86\uFF08\u9AD8\u5C71\u5BD2\u539F\uFF09\u3002"],["\u6AFB\u82B1\u9264\u543B\u9BAD\u70BA\u4EC0\u9EBC\u53EA\u4F4F\u5728\u4E03\u5BB6\u7063\u6EAA\uFF1F","\u7260\u9700\u8981\u4F4E\u6EAB\u6E05\u6F88\u7684\u6EAA\u6C34\uFF0C\u662F\u51B0\u6CB3\u6642\u671F\u7559\u4E0B\u7684\u9B5A\u3002"],["\u9ED1\u9762\u7435\u9DFA\u4EC0\u9EBC\u6642\u5019\u4F86\u81FA\u7063\uFF1F","\u51AC\u5929\uFF08\u7D04 10 \u6708\u5230\u9694\u5E74 4 \u6708\uFF09\u5230\u81FA\u5357\u4E03\u80A1\u5EA6\u51AC\u3002"],["\u77F3\u864E\u6700\u5927\u7684\u5A01\u8105\u662F\u4EC0\u9EBC\uFF1F","\u8DEF\u6BBA\uFF08\u88AB\u8ECA\u649E\uFF09\u548C\u68F2\u5730\u958B\u767C\u3002"]],myths:["\u52D5\u7269\u63D2\u5716\u662F\u793A\u610F\uFF0C\u4F4D\u7F6E\u662F\u300C\u5E38\u898B\u5730\u9EDE\u300D\uFF0C\u4E0D\u4EE3\u8868\u53EA\u4F4F\u5728\u90A3\u4E00\u9EDE\u3002","\u690D\u7269\u5782\u76F4\u5206\u5E03\u7684\u9AD8\u5EA6\u754C\u7DDA\u5404\u7248\u672C\u8AB2\u672C\u7565\u6709\u4E0D\u540C\uFF0C\u4EE5\u5B78\u751F\u7528\u7684\u8AB2\u672C\u70BA\u6E96\u3002"]},spots:{title:"\u{1F4CD} \u666F\u9EDE",book:"\u570B\u5C0F\u793E\u6703\uFF08\u5BB6\u9109\u7684\u7279\u8272\uFF09\uFF1B\u570B\u4E2D\u5730\u7406 1 \u4E0A\u7B2C 3 \u8AB2",goal:"\u628A\u666F\u9EDE\u548C\u5730\u5F62\u9023\u8D77\u4F86\uFF1A\u77E5\u9053\u6BCF\u4E00\u7A2E\u5730\u5F62\u9644\u8FD1\u6709\u54EA\u4E9B\u4EE3\u8868\u6027\u7684\u5730\u65B9\u3002",steps:[[5,"\u6BCF\u7D44\u62BD\u4E00\u7A2E\u5730\u5F62\uFF0C\u5728\u6E05\u55AE\u4E2D\u627E\u51FA 2 \u500B\u666F\u9EDE\uFF0C\u4E26\u8AAA\u660E\u70BA\u4EC0\u9EBC\u5B83\u5C6C\u65BC\u9019\u7A2E\u5730\u5F62\u3002"],[5,"\u5404\u7D44\u4E0A\u53F0\u9EDE\u5730\u5716\u5206\u4EAB\uFF0C\u5176\u4ED6\u7D44\u88DC\u5145\u3002"]],questions:[["\u6708\u4E16\u754C\u5C6C\u65BC\u54EA\u4E00\u7A2E\u5730\u5F62\uFF1F\u70BA\u4EC0\u9EBC\u9577\u6210\u90A3\u6A23\uFF1F","\u4E18\u9675\uFF1B\u6CE5\u5CA9\u88AB\u96E8\u6C34\u6C96\u5237\u6210\u60E1\u5730\u3002"],["\u6E05\u6C34\u65B7\u5D16\u662F\u4EC0\u9EBC\u6D77\u5CB8\uFF1F","\u65B7\u5C64\u6D77\u5CB8\uFF0C\u5C71\u76F4\u63A5\u63D2\u9032\u592A\u5E73\u6D0B\u3002"],["\u81FA\u7063\u5730\u7406\u4E2D\u5FC3\u7891\u5728\u54EA\u500B\u76C6\u5730\uFF1F","\u57D4\u91CC\u76C6\u5730\u3002"]],myths:["\u7167\u7247\u4F86\u81EA Wikimedia Commons\uFF08\u81EA\u7531\u6388\u6B0A\uFF09\uFF0C\u4F5C\u8005\u8207\u6388\u6B0A\u5BEB\u5728\u7167\u7247\u4E0B\u65B9\u3002"]}},ro={terrain:[{q:"\u627E\u5230\u81FA\u7063\u6700\u9AD8\u7684\u5C71\uFF0C\u770B\u5B83\u6709\u5E7E\u516C\u5C3A",ev:"peak:\u7389\u5C71\u4E3B\u5CF0"},{q:"\u8B93\u300C\u76C6\u5730\u300D\u6D6E\u8D77\u4F86",ev:"float:basin"},{q:"\u8B93\u300C\u53F0\u5730\u300D\u6D6E\u8D77\u4F86\uFF0C\u770B\u770B\u5B83\u5011\u5728\u897F\u90E8\u54EA\u88E1",ev:"float:tableland"},{q:"\u6253\u958B\u4E00\u689D\u5730\u5F62\u5256\u9762\u5716",ev:"profile"},{q:"\u770B\u4E00\u6B21\u677F\u584A\u64E0\u58D3\u52D5\u756B",ev:"plates"}],rain:[{q:"\u627E\u51FA\u9AD8\u96C4\u96E8\u6700\u591A\u7684\u6708\u4EFD\uFF08\u9EDE\u90A3\u500B\u6708\uFF09",ev:"month:8"},{q:"\u63DB\u4E00\u500B\u5317\u90E8\u57CE\u5E02\uFF08\u81FA\u5317\u3001\u57FA\u9686\u3001\u6DE1\u6C34\u3001\u5B9C\u862D\uFF09",ev:"city:N"},{q:"\u8B93\u6C34\u4F4D\u8D85\u904E 1,000 \u516C\u5C3A\uFF0C\u770B\u770B\u53EA\u5269\u54EA\u7A2E\u5730\u5F62",ev:"flood:1000"}],ocean:[{q:"\u9EDE\u300C\u9ED1\u6F6E\u300D\u770B\u5B83\u5F80\u54EA\u88E1\u6D41",ev:"current:kuroshio"},{q:"\u5207\u5230\u51AC\u5B63\uFF0C\u627E\u51FA\u51B7\u7684\u6D0B\u6D41",ev:"current:china"},{q:"\u9EDE\u4E00\u500B\u706B\u5C71\u5CF6\uFF08\u9F9C\u5C71\u5CF6\u3001\u7DA0\u5CF6\u6216\u862D\u5DBC\uFF09",ev:"volcanic"}],tribes:[{q:"\u627E\u51FA\u4F4F\u5728\u6D77\u5CF6\u4E0A\u7684\u539F\u4F4F\u6C11\u65CF",ev:"tribe:yami"},{q:"\u627E\u51FA 2026 \u5E74\u65B0\u6838\u5B9A\u7684\u7B2C 17 \u65CF",ev:"tribe:siraya"},{q:"\u7528\u796D\u5178\u6708\u66C6\u770B 8 \u6708\u6709\u54EA\u4E9B\u796D\u5178",ev:"festmonth:8"},{q:"\u5207\u5230\u300C\u5BA2\u5BB6\u300D\u770B\u5BA2\u5BB6\u5206\u5E03",ev:"hakka"}],life:[{q:"\u627E\u5230\u80F8\u524D\u6709\u767D\u8272 V \u5B57\u7684\u52D5\u7269",ev:"creature:bear"},{q:"\u627E\u5230\u53EA\u4F4F\u5728\u4E03\u5BB6\u7063\u6EAA\u7684\u570B\u5BF6\u9B5A",ev:"creature:salmon"},{q:"\u9EDE\u4E00\u7A2E\u6D77\u6D0B\u751F\u7269",ev:"creature:sea"}],spots:[{q:"\u627E\u4E00\u500B\u300C\u53F0\u5730\u300D\u4E0A\u7684\u666F\u9EDE",ev:"spot:tableland"},{q:"\u627E\u4E00\u500B\u300C\u76C6\u5730\u300D\u88E1\u7684\u666F\u9EDE",ev:"spot:basin"},{q:"\u627E\u4E00\u500B\u300C\u6D77\u5CB8\u300D\u666F\u9EDE",ev:"spot:coast"}]},fd=`
.guidebtn{border:0;background:#fff3cd;color:#7a5200;border-radius:999px;padding:6px 12px;font:inherit;font-size:14px;font-weight:700;cursor:pointer;white-space:nowrap}
#guide{position:fixed;inset:0;background:#0006;z-index:40;display:none;align-items:flex-start;justify-content:center;padding:60px 12px 12px}
#guide.show{display:flex}
#guide .gbox{background:#fff;border-radius:18px;max-width:760px;width:100%;max-height:100%;overflow:auto;padding:18px 22px;box-shadow:0 10px 40px #0005;position:relative}
#guide .gx{position:sticky;top:0;float:right;border:0;background:#eee;border-radius:50%;width:34px;height:34px;font-size:18px;cursor:pointer}
#guide .gtabs{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0 12px}
#guide .gtabs button{border:1px solid var(--line);background:#fff;border-radius:999px;padding:5px 12px;font:inherit;font-size:14px;cursor:pointer}
#guide .gtabs button.on{background:#7a5200;color:#fff;border-color:#7a5200}
#guide h2{margin:4px 0 8px;font-size:22px}
#guide h4{margin:14px 0 6px;color:#7a5200}
#guide .gbook{background:#f5f0e6;border-radius:10px;padding:8px 12px;font-size:14px}
#guide ol{padding-left:20px;margin:4px 0}#guide ol li{margin:5px 0;line-height:1.55}
#guide .min{display:inline-block;background:#e3f2fd;color:#0d47a1;border-radius:6px;padding:0 6px;font-size:12px;margin-right:6px;font-weight:700}
#guide details{border:1px solid var(--line);border-radius:10px;padding:6px 10px;margin:5px 0}
#guide summary{cursor:pointer;font-weight:700}
#guide details p{margin:6px 0 2px;color:#2e7d32}
#guide .myth{background:#fff8e1;border-left:4px solid #f9a825;padding:6px 10px;border-radius:6px;margin:5px 0;font-size:14.5px;line-height:1.55}
#guide .gfoot{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}
.mission{background:#f1f8e9;border:1px solid #c5e1a5;border-radius:12px;padding:8px 10px;margin:4px 0 10px}
.mission summary{cursor:pointer;font-weight:700;color:#33691e}
.mission ul{list-style:none;padding:0;margin:6px 0 0}
.mission li{padding:4px 0;font-size:14px;display:flex;gap:6px;align-items:flex-start}
.mission li.done{color:#689f38;text-decoration:line-through}
.mission .reset{border:0;background:none;color:#888;font:inherit;font-size:12px;cursor:pointer;text-decoration:underline}
#toast{position:fixed;left:50%;bottom:90px;transform:translateX(-50%) translateY(20px);opacity:0;transition:.3s;background:#33691e;color:#fff;border-radius:999px;padding:10px 18px;font-weight:700;z-index:50;pointer-events:none}
#toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
body.present #panel,body.present .padbar,body.present header.top .seg{display:none!important}
body.present .lb.lf,body.present .lb.island,body.present .lb.tribe,body.present .lb.sea{font-size:20px!important}
body.present .lb.spot .nm,body.present .lb.peak,body.present .lb.creature .crn{font-size:16px!important}
body.present #info{font-size:19px;width:420px}
@media (max-width:900px){#guide .gbox{padding:14px}#guide ol li,#guide .myth,#guide .gbook,.mission li,#guide .gtabs button{font-size:16px!important}.guidebtn{font-size:14px;padding:5px 9px}}
@media print{#guide{position:static;background:none;padding:0;display:block}#guide .gfoot,#guide .gx,#guide .gtabs{display:none}}
`;var Vi={\u9023\u6C5F\u7E23:[[[119.985,25.971],[119.989,25.968],[119.979,25.956],[119.961,25.95],[119.972,25.967],[119.985,25.971]],[[119.945,25.982],[119.948,25.978],[119.935,25.968],[119.924,25.979],[119.945,25.982]],[[119.917,26.175],[119.928,26.172],[119.924,26.162],[119.936,26.154],[119.942,26.159],[119.94,26.166],[119.965,26.167],[119.957,26.152],[119.95,26.154],[119.942,26.143],[119.934,26.146],[119.925,26.138],[119.909,26.145],[119.918,26.158],[119.913,26.16],[119.918,26.165],[119.917,26.175]],[[119.996,26.238],[120.006,26.234],[120.003,26.224],[120.015,26.227],[120.012,26.214],[120.003,26.223],[119.991,26.215],[119.976,26.215],[119.971,26.199],[119.976,26.193],[119.966,26.194],[119.967,26.221],[119.983,26.225],[119.996,26.238]],[[119.99,26.282],[119.99,26.27],[119.981,26.267],[119.982,26.278],[119.99,26.282]],[[120.48,26.383],[120.482,26.371],[120.491,26.371],[120.5,26.378],[120.499,26.372],[120.507,26.373],[120.511,26.365],[120.501,26.369],[120.493,26.357],[120.484,26.356],[120.485,26.369],[120.478,26.368],[120.477,26.379],[120.469,26.371],[120.474,26.384],[120.48,26.383]]],\u5B9C\u862D\u7E23:[[[121.96,24.845],[121.963,24.836],[121.948,24.835],[121.934,24.846],[121.943,24.845],[121.95,24.852],[121.96,24.845]],[[121.966,24.983],[121.926,24.969],[121.905,24.94],[121.889,24.937],[121.885,24.918],[121.851,24.89],[121.827,24.842],[121.818,24.765],[121.826,24.733],[121.84,24.716],[121.842,24.656],[121.859,24.617],[121.886,24.601],[121.873,24.597],[121.879,24.591],[121.872,24.584],[121.88,24.58],[121.869,24.573],[121.873,24.531],[121.843,24.521],[121.839,24.512],[121.84,24.498],[121.85,24.495],[121.851,24.485],[121.862,24.481],[121.821,24.462],[121.816,24.447],[121.802,24.434],[121.791,24.408],[121.787,24.372],[121.772,24.338],[121.773,24.314],[121.688,24.334],[121.686,24.341],[121.676,24.337],[121.651,24.36],[121.649,24.349],[121.631,24.371],[121.621,24.363],[121.627,24.35],[121.635,24.348],[121.633,24.335],[121.619,24.345],[121.617,24.334],[121.596,24.331],[121.606,24.31],[121.597,24.316],[121.566,24.319],[121.545,24.338],[121.494,24.341],[121.452,24.365],[121.438,24.383],[121.401,24.38],[121.381,24.367],[121.369,24.372],[121.365,24.389],[121.338,24.39],[121.326,24.4],[121.328,24.434],[121.318,24.441],[121.324,24.457],[121.342,24.482],[121.358,24.487],[121.372,24.499],[121.373,24.51],[121.384,24.51],[121.402,24.529],[121.395,24.556],[121.412,24.573],[121.403,24.592],[121.413,24.603],[121.428,24.606],[121.451,24.651],[121.448,24.658],[121.459,24.673],[121.494,24.674],[121.512,24.684],[121.537,24.688],[121.543,24.706],[121.57,24.714],[121.575,24.71],[121.579,24.722],[121.588,24.72],[121.598,24.728],[121.592,24.745],[121.596,24.748],[121.589,24.755],[121.598,24.773],[121.592,24.787],[121.625,24.795],[121.626,24.809],[121.661,24.811],[121.669,24.818],[121.688,24.816],[121.688,24.825],[121.696,24.835],[121.73,24.855],[121.746,24.853],[121.775,24.865],[121.785,24.874],[121.782,24.889],[121.792,24.9],[121.812,24.907],[121.832,24.905],[121.854,24.926],[121.839,24.945],[121.847,24.96],[121.889,24.963],[121.903,24.974],[121.944,24.988],[121.966,24.983]]],\u5F70\u5316\u7E23:[[[120.457,24.207],[120.504,24.191],[120.525,24.152],[120.524,24.139],[120.545,24.117],[120.612,24.103],[120.619,24.075],[120.625,24.069],[120.625,24.03],[120.645,24.026],[120.647,24.034],[120.679,24.014],[120.671,24.011],[120.673,24.006],[120.638,24.007],[120.636,23.996],[120.65,23.983],[120.643,23.958],[120.635,23.952],[120.628,23.957],[120.634,23.953],[120.628,23.952],[120.637,23.937],[120.628,23.931],[120.637,23.925],[120.63,23.911],[120.635,23.899],[120.62,23.868],[120.628,23.857],[120.616,23.841],[120.626,23.842],[120.625,23.837],[120.633,23.834],[120.623,23.83],[120.637,23.833],[120.64,23.825],[120.634,23.826],[120.651,23.813],[120.676,23.819],[120.684,23.801],[120.643,23.786],[120.551,23.801],[120.507,23.801],[120.452,23.817],[120.433,23.83],[120.308,23.82],[120.255,23.834],[120.22,23.866],[120.235,23.885],[120.255,23.894],[120.261,23.92],[120.279,23.934],[120.283,23.955],[120.308,23.973],[120.316,23.999],[120.335,24.016],[120.34,24.06],[120.363,24.081],[120.384,24.088],[120.386,24.097],[120.38,24.095],[120.397,24.117],[120.418,24.174],[120.425,24.183],[120.444,24.189],[120.457,24.207]]],\u5357\u6295\u7E23:[[[120.64,23.786],[120.684,23.803],[120.676,23.819],[120.651,23.813],[120.634,23.826],[120.64,23.825],[120.637,23.833],[120.623,23.83],[120.633,23.834],[120.625,23.837],[120.626,23.842],[120.616,23.841],[120.628,23.857],[120.62,23.868],[120.635,23.899],[120.63,23.911],[120.637,23.925],[120.628,23.931],[120.637,23.937],[120.628,23.952],[120.634,23.953],[120.628,23.957],[120.635,23.952],[120.643,23.958],[120.65,23.983],[120.636,23.996],[120.638,24.007],[120.673,24.006],[120.671,24.011],[120.679,24.014],[120.706,24.005],[120.732,24.009],[120.748,23.999],[120.771,24.009],[120.792,24.031],[120.809,24.066],[120.829,24.072],[120.83,24.102],[120.845,24.125],[120.854,24.125],[120.858,24.116],[120.872,24.117],[120.879,24.109],[120.878,24.085],[120.891,24.097],[120.893,24.116],[120.92,24.107],[120.95,24.128],[120.961,24.12],[120.989,24.119],[121.02,24.159],[121.028,24.16],[121.033,24.149],[121.038,24.158],[121.048,24.16],[121.053,24.155],[121.085,24.176],[121.102,24.196],[121.136,24.196],[121.148,24.213],[121.161,24.215],[121.168,24.225],[121.181,24.212],[121.22,24.229],[121.238,24.22],[121.255,24.243],[121.265,24.246],[121.28,24.23],[121.293,24.229],[121.301,24.237],[121.343,24.224],[121.349,24.2],[121.326,24.196],[121.308,24.181],[121.286,24.177],[121.288,24.158],[121.28,24.158],[121.285,24.152],[121.281,24.136],[121.328,24.111],[121.319,24.095],[121.323,24.085],[121.283,24.054],[121.286,24.04],[121.26,23.992],[121.264,23.976],[121.273,23.975],[121.278,23.966],[121.272,23.948],[121.276,23.91],[121.261,23.903],[121.268,23.883],[121.263,23.881],[121.265,23.873],[121.253,23.868],[121.239,23.84],[121.239,23.822],[121.226,23.804],[121.231,23.788],[121.205,23.772],[121.213,23.758],[121.233,23.751],[121.23,23.73],[121.239,23.724],[121.241,23.698],[121.233,23.678],[121.236,23.665],[121.224,23.624],[121.206,23.596],[121.194,23.6],[121.177,23.583],[121.153,23.587],[121.152,23.574],[121.16,23.568],[121.146,23.555],[121.151,23.527],[121.136,23.515],[121.118,23.522],[121.098,23.522],[121.088,23.514],[121.069,23.518],[121.062,23.499],[121.039,23.474],[121.059,23.462],[121.052,23.451],[121.015,23.435],[121.01,23.443],[121.016,23.452],[121.008,23.462],[120.981,23.469],[120.948,23.467],[120.91,23.476],[120.887,23.476],[120.881,23.468],[120.864,23.473],[120.839,23.471],[120.827,23.483],[120.82,23.521],[120.809,23.536],[120.825,23.587],[120.818,23.6],[120.795,23.597],[120.753,23.615],[120.731,23.611],[120.719,23.63],[120.713,23.628],[120.714,23.621],[120.692,23.62],[120.684,23.611],[120.661,23.61],[120.651,23.616],[120.654,23.629],[120.647,23.631],[120.634,23.619],[120.629,23.635],[120.648,23.683],[120.639,23.711],[120.64,23.729],[120.645,23.737],[120.656,23.735],[120.656,23.755],[120.64,23.786]]],\u96F2\u6797\u7E23:[[[120.081,23.524],[120.096,23.511],[120.083,23.513],[120.078,23.503],[120.07,23.504],[120.067,23.5],[120.074,23.499],[120.066,23.499],[120.072,23.494],[120.068,23.49],[120.065,23.495],[120.054,23.492],[120.065,23.487],[120.063,23.48],[120.053,23.48],[120.058,23.483],[120.053,23.488],[120.049,23.477],[120.043,23.477],[120.051,23.493],[120.047,23.495],[120.041,23.478],[120.035,23.483],[120.036,23.478],[120.025,23.475],[120.024,23.46],[120.014,23.46],[120.018,23.47],[120.01,23.465],[120.019,23.436],[119.997,23.466],[120,23.473],[120.081,23.524]],[[120.099,23.542],[120.108,23.534],[120.103,23.532],[120.111,23.529],[120.1,23.529],[120.097,23.521],[120.091,23.529],[120.099,23.542]],[[120.132,23.547],[120.137,23.543],[120.127,23.53],[120.126,23.544],[120.132,23.547]],[[120.132,23.563],[120.13,23.551],[120.125,23.559],[120.106,23.541],[120.111,23.555],[120.132,23.563]],[[120.22,23.866],[120.255,23.834],[120.308,23.82],[120.433,23.83],[120.452,23.817],[120.507,23.801],[120.551,23.801],[120.64,23.786],[120.656,23.755],[120.656,23.735],[120.645,23.737],[120.64,23.729],[120.639,23.711],[120.648,23.683],[120.629,23.635],[120.631,23.622],[120.645,23.631],[120.653,23.629],[120.651,23.616],[120.669,23.609],[120.684,23.611],[120.692,23.62],[120.71,23.619],[120.719,23.63],[120.731,23.618],[120.725,23.604],[120.733,23.597],[120.736,23.57],[120.694,23.576],[120.676,23.571],[120.67,23.579],[120.651,23.572],[120.643,23.576],[120.649,23.583],[120.646,23.594],[120.61,23.583],[120.58,23.582],[120.533,23.597],[120.51,23.619],[120.504,23.635],[120.454,23.626],[120.444,23.63],[120.426,23.618],[120.42,23.625],[120.407,23.625],[120.405,23.634],[120.38,23.61],[120.366,23.608],[120.359,23.595],[120.335,23.593],[120.327,23.574],[120.308,23.575],[120.311,23.565],[120.29,23.562],[120.291,23.551],[120.276,23.543],[120.272,23.531],[120.256,23.546],[120.243,23.544],[120.247,23.516],[120.239,23.508],[120.223,23.504],[120.149,23.519],[120.145,23.526],[120.15,23.532],[120.138,23.561],[120.145,23.595],[120.139,23.6],[120.14,23.613],[120.133,23.616],[120.138,23.635],[120.125,23.621],[120.114,23.634],[120.125,23.646],[120.166,23.742],[120.169,23.759],[120.157,23.785],[120.175,23.803],[120.17,23.807],[120.181,23.81],[120.206,23.834],[120.204,23.847],[120.214,23.851],[120.22,23.866]]],\u57FA\u9686\u5E02:[[[121.803,25.136],[121.805,25.125],[121.795,25.126],[121.799,25.119],[121.795,25.113],[121.773,25.12],[121.767,25.113],[121.75,25.11],[121.76,25.101],[121.762,25.078],[121.776,25.07],[121.764,25.057],[121.732,25.053],[121.712,25.068],[121.699,25.067],[121.68,25.077],[121.681,25.088],[121.674,25.083],[121.656,25.093],[121.643,25.128],[121.627,25.14],[121.678,25.156],[121.71,25.177],[121.709,25.165],[121.725,25.166],[121.749,25.156],[121.765,25.164],[121.78,25.159],[121.773,25.156],[121.778,25.151],[121.807,25.149],[121.803,25.136]]],\u53F0\u5317\u5E02:[[[121.571,25.197],[121.584,25.195],[121.577,25.167],[121.59,25.164],[121.59,25.152],[121.608,25.13],[121.597,25.109],[121.626,25.096],[121.628,25.083],[121.616,25.064],[121.624,25.056],[121.616,25.051],[121.619,25.044],[121.647,25.028],[121.666,25.03],[121.663,25.023],[121.632,25.026],[121.623,25.017],[121.609,25.021],[121.598,25.015],[121.6,24.977],[121.62,24.97],[121.601,24.961],[121.561,24.965],[121.553,24.987],[121.545,24.984],[121.535,24.995],[121.532,24.991],[121.532,25.008],[121.517,25.02],[121.509,25.021],[121.493,25.01],[121.484,25.038],[121.505,25.05],[121.506,25.074],[121.489,25.097],[121.457,25.107],[121.459,25.123],[121.503,25.173],[121.52,25.169],[121.522,25.179],[121.541,25.187],[121.558,25.21],[121.571,25.197]]],\u65B0\u5317\u5E02:[[[121.966,24.983],[121.944,24.988],[121.903,24.974],[121.889,24.963],[121.847,24.96],[121.839,24.945],[121.854,24.926],[121.834,24.907],[121.792,24.9],[121.782,24.889],[121.785,24.874],[121.775,24.865],[121.746,24.853],[121.73,24.855],[121.696,24.835],[121.688,24.825],[121.688,24.816],[121.669,24.818],[121.661,24.811],[121.626,24.809],[121.625,24.795],[121.592,24.787],[121.598,24.773],[121.589,24.755],[121.596,24.748],[121.592,24.745],[121.598,24.728],[121.588,24.72],[121.579,24.722],[121.575,24.71],[121.57,24.714],[121.543,24.706],[121.537,24.688],[121.48,24.674],[121.474,24.696],[121.45,24.706],[121.434,24.73],[121.424,24.762],[121.45,24.786],[121.45,24.791],[121.438,24.795],[121.436,24.812],[121.403,24.844],[121.373,24.834],[121.355,24.844],[121.336,24.844],[121.358,24.853],[121.345,24.867],[121.354,24.876],[121.346,24.88],[121.342,24.893],[121.333,24.892],[121.334,24.899],[121.32,24.9],[121.326,24.909],[121.318,24.916],[121.34,24.929],[121.322,24.928],[121.316,24.938],[121.332,24.946],[121.329,24.972],[121.324,24.973],[121.343,24.982],[121.37,24.977],[121.386,24.987],[121.384,24.996],[121.394,24.994],[121.403,24.999],[121.391,25.012],[121.412,25.019],[121.398,25.03],[121.401,25.038],[121.391,25.042],[121.401,25.043],[121.394,25.05],[121.401,25.051],[121.385,25.053],[121.388,25.063],[121.355,25.065],[121.346,25.07],[121.353,25.073],[121.35,25.077],[121.341,25.074],[121.349,25.082],[121.292,25.103],[121.283,25.109],[121.283,25.118],[121.297,25.126],[121.345,25.128],[121.39,25.148],[121.392,25.168],[121.402,25.159],[121.419,25.177],[121.404,25.183],[121.405,25.19],[121.419,25.192],[121.453,25.253],[121.472,25.256],[121.481,25.271],[121.509,25.283],[121.511,25.292],[121.519,25.285],[121.533,25.29],[121.537,25.3],[121.55,25.292],[121.578,25.299],[121.623,25.274],[121.634,25.26],[121.634,25.24],[121.643,25.231],[121.653,25.233],[121.65,25.223],[121.663,25.207],[121.678,25.203],[121.703,25.216],[121.686,25.19],[121.693,25.18],[121.709,25.176],[121.678,25.156],[121.627,25.14],[121.643,25.128],[121.656,25.093],[121.674,25.083],[121.681,25.088],[121.679,25.079],[121.688,25.072],[121.712,25.068],[121.73,25.053],[121.746,25.053],[121.764,25.057],[121.776,25.07],[121.762,25.078],[121.76,25.101],[121.75,25.11],[121.767,25.113],[121.773,25.12],[121.795,25.113],[121.799,25.119],[121.795,25.126],[121.805,25.125],[121.803,25.136],[121.827,25.136],[121.82,25.129],[121.823,25.121],[121.842,25.129],[121.897,25.12],[121.926,25.13],[121.916,25.114],[121.927,25.108],[121.914,25.085],[121.916,25.077],[121.932,25.063],[121.932,25.036],[121.947,25.021],[121.978,25.027],[121.99,25.021],[121.991,25.013],[121.999,25.02],[122.007,25.012],[122.005,25.002],[121.966,24.983]]],\u53F0\u4E2D\u5E02:[[[121.318,24.441],[121.328,24.434],[121.326,24.4],[121.338,24.39],[121.365,24.389],[121.374,24.368],[121.383,24.368],[121.401,24.38],[121.434,24.383],[121.443,24.373],[121.448,24.375],[121.452,24.365],[121.438,24.352],[121.435,24.323],[121.423,24.308],[121.405,24.308],[121.397,24.289],[121.38,24.279],[121.385,24.255],[121.353,24.244],[121.343,24.224],[121.301,24.237],[121.293,24.229],[121.28,24.23],[121.265,24.246],[121.255,24.243],[121.238,24.22],[121.22,24.229],[121.181,24.212],[121.168,24.225],[121.161,24.215],[121.148,24.213],[121.136,24.196],[121.102,24.196],[121.085,24.176],[121.053,24.155],[121.048,24.16],[121.038,24.158],[121.033,24.149],[121.028,24.16],[121.02,24.159],[120.989,24.119],[120.961,24.12],[120.95,24.128],[120.92,24.107],[120.891,24.116],[120.891,24.097],[120.878,24.085],[120.879,24.109],[120.872,24.117],[120.858,24.116],[120.854,24.125],[120.845,24.125],[120.83,24.102],[120.829,24.072],[120.809,24.066],[120.792,24.031],[120.771,24.009],[120.746,23.999],[120.732,24.009],[120.695,24.007],[120.647,24.034],[120.645,24.026],[120.625,24.03],[120.625,24.069],[120.619,24.075],[120.612,24.103],[120.545,24.117],[120.524,24.139],[120.525,24.152],[120.504,24.191],[120.457,24.207],[120.465,24.214],[120.461,24.217],[120.469,24.214],[120.476,24.224],[120.49,24.255],[120.486,24.257],[120.493,24.266],[120.498,24.264],[120.524,24.316],[120.559,24.35],[120.573,24.377],[120.622,24.44],[120.64,24.428],[120.646,24.412],[120.664,24.402],[120.693,24.367],[120.73,24.352],[120.763,24.326],[120.807,24.315],[120.834,24.29],[120.849,24.289],[120.875,24.295],[120.912,24.294],[120.922,24.304],[120.917,24.336],[120.936,24.343],[120.966,24.334],[121.005,24.332],[121.02,24.309],[121.035,24.297],[121.049,24.296],[121.055,24.31],[121.07,24.316],[121.073,24.323],[121.092,24.319],[121.109,24.331],[121.122,24.331],[121.141,24.36],[121.168,24.361],[121.177,24.377],[121.19,24.382],[121.197,24.397],[121.211,24.396],[121.216,24.379],[121.231,24.384],[121.244,24.406],[121.244,24.42],[121.258,24.425],[121.259,24.438],[121.26,24.429],[121.27,24.427],[121.305,24.433],[121.318,24.441]]],\u53F0\u5357\u5E02:[[[120.653,23.225],[120.656,23.218],[120.637,23.19],[120.641,23.183],[120.601,23.144],[120.567,23.082],[120.483,23.016],[120.48,23.003],[120.461,23.004],[120.461,22.991],[120.455,22.991],[120.453,22.978],[120.443,22.977],[120.416,22.916],[120.409,22.912],[120.399,22.922],[120.382,22.921],[120.352,22.888],[120.332,22.889],[120.325,22.9],[120.32,22.895],[120.285,22.905],[120.278,22.904],[120.279,22.896],[120.258,22.902],[120.254,22.894],[120.233,22.905],[120.229,22.917],[120.218,22.91],[120.192,22.921],[120.175,22.912],[120.172,22.95],[120.163,22.965],[120.155,22.965],[120.159,22.973],[120.141,22.996],[120.094,23.029],[120.058,23.043],[120.039,23.068],[120.027,23.068],[120.039,23.11],[120.055,23.126],[120.059,23.159],[120.08,23.209],[120.081,23.238],[120.092,23.259],[120.095,23.296],[120.111,23.31],[120.114,23.336],[120.118,23.34],[120.149,23.32],[120.15,23.313],[120.166,23.308],[120.179,23.292],[120.189,23.29],[120.188,23.301],[120.212,23.292],[120.223,23.298],[120.238,23.327],[120.257,23.332],[120.267,23.341],[120.261,23.344],[120.266,23.352],[120.286,23.35],[120.284,23.362],[120.293,23.375],[120.311,23.375],[120.312,23.387],[120.333,23.386],[120.35,23.401],[120.381,23.403],[120.408,23.413],[120.42,23.404],[120.44,23.414],[120.473,23.398],[120.479,23.388],[120.494,23.395],[120.499,23.388],[120.484,23.38],[120.484,23.37],[120.505,23.369],[120.512,23.36],[120.505,23.355],[120.505,23.345],[120.534,23.336],[120.54,23.328],[120.523,23.312],[120.526,23.296],[120.52,23.272],[120.532,23.255],[120.52,23.238],[120.555,23.218],[120.565,23.221],[120.578,23.215],[120.592,23.24],[120.597,23.229],[120.61,23.223],[120.628,23.229],[120.653,23.225]]],\u6843\u5712\u5E02:[[[121.48,24.674],[121.459,24.673],[121.45,24.662],[121.451,24.651],[121.425,24.603],[121.413,24.603],[121.391,24.586],[121.373,24.594],[121.36,24.614],[121.366,24.632],[121.358,24.634],[121.352,24.644],[121.354,24.668],[121.339,24.667],[121.339,24.679],[121.318,24.698],[121.299,24.696],[121.308,24.72],[121.298,24.733],[121.308,24.755],[121.302,24.763],[121.26,24.782],[121.26,24.793],[121.248,24.797],[121.243,24.809],[121.222,24.8],[121.22,24.812],[121.205,24.807],[121.203,24.817],[121.174,24.828],[121.176,24.832],[121.15,24.845],[121.161,24.86],[121.156,24.881],[121.116,24.882],[121.108,24.886],[121.109,24.898],[121.091,24.893],[121.058,24.906],[121.058,24.937],[121.046,24.944],[121.019,24.94],[121.007,24.946],[120.993,24.935],[120.982,24.94],[121.01,24.975],[121.01,24.99],[121.029,25.021],[121.052,25.044],[121.087,25.056],[121.09,25.063],[121.161,25.086],[121.213,25.111],[121.24,25.116],[121.24,25.123],[121.283,25.118],[121.283,25.109],[121.292,25.103],[121.349,25.082],[121.341,25.074],[121.35,25.077],[121.353,25.073],[121.346,25.07],[121.355,25.065],[121.391,25.062],[121.385,25.053],[121.401,25.051],[121.394,25.05],[121.401,25.043],[121.391,25.042],[121.401,25.038],[121.398,25.03],[121.412,25.019],[121.393,25.016],[121.403,24.999],[121.394,24.994],[121.384,24.996],[121.386,24.987],[121.37,24.977],[121.343,24.982],[121.327,24.978],[121.324,24.973],[121.329,24.972],[121.332,24.946],[121.316,24.938],[121.322,24.928],[121.34,24.929],[121.318,24.916],[121.326,24.909],[121.32,24.9],[121.334,24.899],[121.333,24.892],[121.342,24.893],[121.346,24.88],[121.354,24.876],[121.345,24.867],[121.358,24.853],[121.336,24.844],[121.355,24.844],[121.373,24.834],[121.403,24.844],[121.436,24.812],[121.438,24.795],[121.45,24.791],[121.45,24.786],[121.424,24.762],[121.434,24.73],[121.45,24.706],[121.474,24.696],[121.48,24.674]]],\u82D7\u6817\u7E23:[[[121.259,24.438],[121.258,24.425],[121.244,24.42],[121.244,24.406],[121.231,24.384],[121.216,24.379],[121.211,24.396],[121.197,24.397],[121.19,24.382],[121.177,24.377],[121.168,24.361],[121.141,24.36],[121.122,24.331],[121.109,24.331],[121.092,24.319],[121.073,24.323],[121.07,24.316],[121.055,24.31],[121.049,24.296],[121.035,24.297],[121.02,24.309],[121.005,24.332],[120.966,24.334],[120.936,24.343],[120.917,24.336],[120.922,24.304],[120.912,24.294],[120.875,24.295],[120.849,24.289],[120.834,24.29],[120.807,24.315],[120.763,24.326],[120.73,24.352],[120.693,24.367],[120.664,24.402],[120.646,24.412],[120.64,24.428],[120.622,24.44],[120.665,24.484],[120.716,24.601],[120.752,24.627],[120.758,24.642],[120.779,24.663],[120.824,24.673],[120.856,24.703],[120.861,24.722],[120.875,24.738],[120.891,24.732],[120.908,24.741],[120.915,24.717],[120.93,24.717],[120.942,24.707],[120.95,24.711],[120.953,24.704],[120.974,24.712],[120.974,24.697],[120.964,24.684],[120.976,24.685],[120.987,24.664],[120.997,24.655],[121.01,24.656],[121.008,24.644],[121.025,24.641],[121.052,24.615],[121.063,24.622],[121.075,24.611],[121.083,24.59],[121.071,24.563],[121.058,24.558],[121.081,24.541],[121.078,24.529],[121.067,24.523],[121.072,24.498],[121.098,24.496],[121.117,24.508],[121.137,24.507],[121.145,24.512],[121.169,24.503],[121.217,24.515],[121.223,24.507],[121.219,24.498],[121.263,24.455],[121.259,24.438]]],\u5609\u7FA9\u5E02:[[[120.448,23.518],[120.457,23.515],[120.464,23.499],[120.473,23.507],[120.483,23.505],[120.486,23.493],[120.501,23.49],[120.509,23.472],[120.495,23.453],[120.469,23.462],[120.44,23.44],[120.429,23.461],[120.394,23.463],[120.399,23.478],[120.389,23.499],[120.409,23.507],[120.412,23.499],[120.433,23.509],[120.434,23.517],[120.441,23.512],[120.441,23.518],[120.448,23.518]]],\u5609\u7FA9\u7E23:[[[120.731,23.611],[120.753,23.615],[120.795,23.597],[120.818,23.6],[120.825,23.587],[120.809,23.536],[120.82,23.521],[120.827,23.483],[120.836,23.473],[120.881,23.468],[120.887,23.476],[120.91,23.476],[120.958,23.469],[120.928,23.456],[120.916,23.459],[120.9,23.454],[120.887,23.435],[120.85,23.421],[120.825,23.372],[120.805,23.371],[120.783,23.342],[120.758,23.344],[120.753,23.327],[120.732,23.314],[120.731,23.306],[120.707,23.305],[120.7,23.284],[120.644,23.296],[120.639,23.269],[120.653,23.225],[120.628,23.229],[120.61,23.223],[120.597,23.229],[120.592,23.24],[120.578,23.215],[120.565,23.221],[120.555,23.218],[120.526,23.232],[120.519,23.239],[120.532,23.255],[120.52,23.272],[120.526,23.296],[120.523,23.312],[120.54,23.328],[120.534,23.336],[120.505,23.345],[120.505,23.355],[120.512,23.36],[120.505,23.369],[120.484,23.37],[120.484,23.38],[120.499,23.388],[120.494,23.395],[120.479,23.388],[120.473,23.398],[120.44,23.414],[120.42,23.404],[120.408,23.413],[120.381,23.403],[120.35,23.401],[120.324,23.384],[120.315,23.389],[120.311,23.375],[120.293,23.375],[120.286,23.367],[120.286,23.35],[120.266,23.352],[120.261,23.344],[120.267,23.341],[120.257,23.332],[120.238,23.327],[120.223,23.298],[120.212,23.292],[120.188,23.301],[120.189,23.29],[120.179,23.292],[120.169,23.306],[120.15,23.313],[120.149,23.32],[120.118,23.34],[120.132,23.385],[120.152,23.389],[120.156,23.38],[120.154,23.388],[120.159,23.388],[120.154,23.389],[120.164,23.393],[120.16,23.406],[120.151,23.399],[120.149,23.406],[120.15,23.423],[120.156,23.429],[120.145,23.429],[120.156,23.448],[120.151,23.456],[120.135,23.448],[120.133,23.452],[120.145,23.46],[120.155,23.491],[120.17,23.492],[120.125,23.489],[120.119,23.495],[120.122,23.519],[120.146,23.521],[120.181,23.51],[120.199,23.513],[120.223,23.504],[120.239,23.508],[120.247,23.516],[120.243,23.544],[120.256,23.546],[120.272,23.531],[120.276,23.543],[120.291,23.551],[120.29,23.562],[120.311,23.565],[120.308,23.575],[120.327,23.574],[120.335,23.593],[120.359,23.595],[120.366,23.608],[120.38,23.61],[120.405,23.634],[120.407,23.625],[120.42,23.625],[120.426,23.618],[120.444,23.63],[120.454,23.626],[120.504,23.635],[120.51,23.619],[120.537,23.595],[120.581,23.582],[120.61,23.583],[120.647,23.593],[120.643,23.576],[120.651,23.572],[120.67,23.579],[120.676,23.571],[120.694,23.576],[120.736,23.57],[120.733,23.597],[120.725,23.604],[120.731,23.611]]],\u91D1\u9580\u7E23:[[[118.163,24.395],[118.173,24.386],[118.162,24.387],[118.163,24.395]],[[118.249,24.456],[118.269,24.446],[118.263,24.423],[118.255,24.425],[118.226,24.405],[118.214,24.41],[118.227,24.448],[118.249,24.456]],[[118.278,24.454],[118.269,24.452],[118.273,24.458],[118.278,24.454]],[[118.411,24.532],[118.434,24.525],[118.436,24.514],[118.45,24.511],[118.459,24.487],[118.469,24.484],[118.464,24.468],[118.478,24.45],[118.461,24.438],[118.467,24.432],[118.455,24.416],[118.426,24.407],[118.433,24.416],[118.427,24.424],[118.403,24.435],[118.386,24.435],[118.351,24.421],[118.334,24.391],[118.322,24.386],[118.296,24.396],[118.278,24.413],[118.291,24.419],[118.303,24.438],[118.286,24.475],[118.293,24.49],[118.313,24.496],[118.339,24.475],[118.363,24.472],[118.386,24.494],[118.384,24.508],[118.401,24.522],[118.398,24.528],[118.411,24.532]],[[119.474,24.986],[119.479,24.986],[119.476,24.979],[119.467,24.979],[119.474,24.986]],[[119.458,24.989],[119.448,24.988],[119.443,24.999],[119.458,24.989]]],\u9AD8\u96C4\u5E02:[[[120.958,23.469],[121.007,23.463],[121.015,23.455],[121.011,23.441],[121.014,23.431],[121.029,23.423],[121.028,23.404],[121.003,23.395],[121.008,23.385],[120.988,23.371],[120.987,23.359],[121.003,23.355],[121.01,23.346],[121.02,23.35],[121.027,23.338],[121.048,23.326],[121.048,23.315],[121.024,23.294],[120.986,23.28],[120.973,23.282],[120.938,23.245],[120.915,23.238],[120.906,23.2],[120.911,23.183],[120.898,23.176],[120.895,23.161],[120.877,23.152],[120.886,23.145],[120.889,23.11],[120.886,23.09],[120.869,23.06],[120.88,23.048],[120.88,23.036],[120.862,23.031],[120.861,23.008],[120.851,23.005],[120.85,22.996],[120.821,22.962],[120.822,22.935],[120.833,22.912],[120.829,22.904],[120.84,22.883],[120.865,22.872],[120.859,22.863],[120.869,22.858],[120.865,22.843],[120.853,22.858],[120.847,22.852],[120.837,22.864],[120.824,22.866],[120.801,22.851],[120.793,22.852],[120.793,22.841],[120.779,22.835],[120.755,22.864],[120.725,22.881],[120.705,22.881],[120.691,22.865],[120.672,22.856],[120.661,22.86],[120.658,22.88],[120.648,22.877],[120.645,22.885],[120.606,22.873],[120.554,22.829],[120.531,22.833],[120.51,22.829],[120.476,22.838],[120.469,22.831],[120.456,22.78],[120.456,22.718],[120.436,22.661],[120.434,22.618],[120.447,22.586],[120.442,22.56],[120.423,22.518],[120.424,22.469],[120.398,22.476],[120.359,22.501],[120.334,22.521],[120.333,22.529],[120.325,22.523],[120.329,22.534],[120.312,22.515],[120.289,22.544],[120.317,22.524],[120.322,22.528],[120.308,22.545],[120.299,22.548],[120.303,22.558],[120.263,22.601],[120.266,22.611],[120.256,22.618],[120.263,22.626],[120.25,22.652],[120.253,22.665],[120.264,22.675],[120.263,22.689],[120.258,22.689],[120.262,22.701],[120.215,22.804],[120.198,22.805],[120.19,22.814],[120.207,22.823],[120.189,22.858],[120.193,22.865],[120.175,22.912],[120.192,22.921],[120.218,22.91],[120.229,22.917],[120.233,22.905],[120.254,22.894],[120.258,22.902],[120.279,22.896],[120.278,22.904],[120.285,22.905],[120.32,22.895],[120.325,22.9],[120.332,22.889],[120.352,22.888],[120.382,22.921],[120.399,22.922],[120.409,22.912],[120.416,22.916],[120.443,22.977],[120.453,22.978],[120.455,22.991],[120.461,22.991],[120.461,23.004],[120.48,23.003],[120.486,23.018],[120.557,23.071],[120.575,23.091],[120.601,23.144],[120.641,23.183],[120.637,23.191],[120.656,23.218],[120.639,23.269],[120.644,23.296],[120.7,23.284],[120.707,23.305],[120.731,23.306],[120.732,23.314],[120.753,23.327],[120.758,23.344],[120.783,23.342],[120.805,23.371],[120.825,23.372],[120.85,23.421],[120.887,23.435],[120.9,23.454],[120.916,23.459],[120.928,23.456],[120.958,23.469]]],\u53F0\u6771\u7E23:[[[121.612,21.943],[121.604,21.952],[121.615,21.955],[121.612,21.943]],[[121.505,22.085],[121.529,22.08],[121.57,22.082],[121.568,22.073],[121.576,22.06],[121.568,22.058],[121.564,22.049],[121.567,22.04],[121.603,22.02],[121.593,22.002],[121.57,22.002],[121.557,22.022],[121.537,22.025],[121.517,22.046],[121.509,22.046],[121.51,22.068],[121.499,22.081],[121.505,22.085]],[[121.492,22.677],[121.51,22.677],[121.509,22.654],[121.5,22.646],[121.506,22.633],[121.495,22.632],[121.489,22.643],[121.473,22.646],[121.475,22.659],[121.465,22.671],[121.466,22.676],[121.492,22.677]],[[120.865,22.843],[120.869,22.858],[120.859,22.863],[120.865,22.872],[120.84,22.883],[120.829,22.904],[120.833,22.912],[120.822,22.935],[120.821,22.962],[120.85,22.996],[120.851,23.005],[120.861,23.008],[120.862,23.031],[120.88,23.036],[120.88,23.048],[120.869,23.06],[120.886,23.09],[120.889,23.11],[120.886,23.145],[120.877,23.152],[120.895,23.161],[120.898,23.176],[120.911,23.183],[120.906,23.2],[120.915,23.238],[120.938,23.245],[120.973,23.282],[120.986,23.28],[121.039,23.301],[121.059,23.286],[121.062,23.266],[121.079,23.233],[121.129,23.223],[121.146,23.199],[121.176,23.21],[121.19,23.204],[121.213,23.155],[121.212,23.144],[121.231,23.139],[121.238,23.129],[121.249,23.131],[121.258,23.126],[121.267,23.114],[121.264,23.104],[121.272,23.098],[121.291,23.109],[121.316,23.11],[121.322,23.117],[121.32,23.138],[121.327,23.152],[121.319,23.168],[121.324,23.178],[121.335,23.178],[121.347,23.217],[121.357,23.224],[121.353,23.231],[121.36,23.253],[121.378,23.27],[121.378,23.301],[121.423,23.356],[121.404,23.368],[121.4,23.386],[121.42,23.419],[121.446,23.444],[121.473,23.441],[121.482,23.43],[121.496,23.435],[121.475,23.387],[121.462,23.313],[121.447,23.309],[121.433,23.288],[121.415,23.235],[121.42,23.226],[121.397,23.205],[121.408,23.167],[121.4,23.135],[121.406,23.126],[121.425,23.126],[121.395,23.113],[121.383,23.095],[121.363,23.094],[121.348,23.065],[121.337,23.02],[121.322,23.002],[121.324,22.994],[121.295,22.955],[121.283,22.947],[121.269,22.911],[121.247,22.881],[121.238,22.877],[121.233,22.864],[121.209,22.863],[121.191,22.85],[121.186,22.833],[121.198,22.815],[121.201,22.796],[121.181,22.783],[121.176,22.759],[121.124,22.716],[121.081,22.698],[121.026,22.656],[121.013,22.62],[121.009,22.589],[120.986,22.569],[120.977,22.554],[120.946,22.457],[120.895,22.335],[120.892,22.283],[120.896,22.246],[120.867,22.23],[120.859,22.241],[120.835,22.245],[120.815,22.263],[120.798,22.258],[120.798,22.276],[120.807,22.277],[120.806,22.284],[120.793,22.286],[120.777,22.303],[120.778,22.309],[120.796,22.316],[120.792,22.336],[120.785,22.346],[120.767,22.348],[120.763,22.359],[120.743,22.367],[120.756,22.388],[120.753,22.405],[120.773,22.407],[120.79,22.418],[120.776,22.45],[120.751,22.46],[120.751,22.479],[120.764,22.495],[120.739,22.554],[120.742,22.569],[120.749,22.572],[120.746,22.59],[120.754,22.6],[120.753,22.612],[120.786,22.661],[120.792,22.679],[120.787,22.693],[120.809,22.688],[120.837,22.697],[120.849,22.717],[120.884,22.717],[120.895,22.738],[120.892,22.764],[120.904,22.776],[120.903,22.8],[120.891,22.812],[120.869,22.817],[120.862,22.827],[120.865,22.843]]],\u82B1\u84EE\u7E23:[[[121.452,24.365],[121.498,24.339],[121.522,24.343],[121.545,24.338],[121.566,24.319],[121.597,24.316],[121.606,24.31],[121.596,24.331],[121.617,24.334],[121.619,24.345],[121.633,24.335],[121.635,24.348],[121.627,24.35],[121.621,24.363],[121.631,24.371],[121.649,24.349],[121.651,24.36],[121.676,24.337],[121.686,24.341],[121.688,24.334],[121.774,24.312],[121.751,24.285],[121.743,24.26],[121.663,24.194],[121.658,24.172],[121.664,24.135],[121.619,24.09],[121.619,24.053],[121.648,24.009],[121.628,23.969],[121.622,23.978],[121.608,23.96],[121.612,23.933],[121.598,23.857],[121.573,23.8],[121.572,23.757],[121.55,23.717],[121.553,23.698],[121.531,23.626],[121.526,23.576],[121.511,23.551],[121.503,23.52],[121.508,23.491],[121.514,23.487],[121.496,23.435],[121.482,23.43],[121.473,23.441],[121.446,23.444],[121.42,23.419],[121.4,23.385],[121.404,23.368],[121.423,23.356],[121.378,23.301],[121.378,23.27],[121.36,23.253],[121.353,23.231],[121.357,23.224],[121.347,23.217],[121.335,23.178],[121.324,23.178],[121.319,23.168],[121.327,23.152],[121.32,23.138],[121.322,23.117],[121.316,23.11],[121.291,23.109],[121.272,23.098],[121.264,23.104],[121.267,23.114],[121.258,23.126],[121.249,23.131],[121.238,23.129],[121.231,23.139],[121.212,23.144],[121.213,23.155],[121.19,23.204],[121.176,23.21],[121.146,23.199],[121.129,23.223],[121.079,23.233],[121.056,23.29],[121.039,23.301],[121.028,23.297],[121.046,23.308],[121.049,23.325],[121.027,23.338],[121.02,23.35],[121.01,23.346],[121.003,23.355],[120.987,23.359],[120.987,23.366],[121.008,23.385],[121.003,23.395],[121.028,23.404],[121.029,23.423],[121.013,23.433],[121.052,23.451],[121.058,23.46],[121.039,23.474],[121.062,23.499],[121.069,23.518],[121.088,23.514],[121.098,23.522],[121.118,23.522],[121.136,23.515],[121.151,23.527],[121.146,23.555],[121.16,23.568],[121.152,23.574],[121.153,23.587],[121.177,23.583],[121.194,23.6],[121.206,23.596],[121.213,23.6],[121.235,23.661],[121.233,23.678],[121.239,23.687],[121.241,23.709],[121.239,23.724],[121.229,23.735],[121.233,23.751],[121.213,23.758],[121.205,23.772],[121.231,23.788],[121.226,23.804],[121.239,23.822],[121.239,23.84],[121.253,23.868],[121.265,23.873],[121.263,23.881],[121.268,23.883],[121.261,23.903],[121.276,23.91],[121.272,23.948],[121.278,23.966],[121.273,23.975],[121.264,23.976],[121.26,23.992],[121.286,24.04],[121.283,24.054],[121.323,24.085],[121.319,24.095],[121.328,24.111],[121.281,24.136],[121.285,24.152],[121.28,24.158],[121.288,24.158],[121.286,24.177],[121.308,24.181],[121.326,24.196],[121.349,24.2],[121.343,24.224],[121.353,24.244],[121.385,24.255],[121.38,24.279],[121.397,24.289],[121.405,24.308],[121.423,24.308],[121.435,24.323],[121.438,24.352],[121.452,24.365]]],\u6F8E\u6E56\u7E23:[[[119.44,23.221],[119.448,23.22],[119.443,23.2],[119.43,23.197],[119.43,23.187],[119.422,23.196],[119.416,23.194],[119.421,23.203],[119.41,23.216],[119.44,23.221]],[[119.616,23.254],[119.621,23.253],[119.622,23.245],[119.609,23.249],[119.616,23.254]],[[119.677,23.264],[119.671,23.244],[119.665,23.259],[119.677,23.264]],[[119.507,23.273],[119.511,23.267],[119.504,23.27],[119.507,23.273]],[[119.537,23.375],[119.544,23.365],[119.532,23.367],[119.525,23.357],[119.521,23.36],[119.519,23.367],[119.537,23.375]],[[119.494,23.397],[119.499,23.39],[119.507,23.392],[119.508,23.377],[119.513,23.377],[119.51,23.37],[119.516,23.374],[119.516,23.368],[119.508,23.365],[119.513,23.352],[119.486,23.356],[119.495,23.365],[119.496,23.388],[119.489,23.395],[119.494,23.397]],[[119.32,23.412],[119.331,23.405],[119.316,23.398],[119.32,23.412]],[[119.541,23.496],[119.529,23.487],[119.509,23.486],[119.511,23.492],[119.517,23.486],[119.529,23.496],[119.541,23.496]],[[119.521,23.515],[119.522,23.51],[119.514,23.509],[119.521,23.515]],[[119.571,23.618],[119.565,23.619],[119.569,23.622],[119.571,23.618]],[[119.664,23.67],[119.666,23.66],[119.655,23.661],[119.664,23.67]],[[119.584,23.677],[119.6,23.674],[119.608,23.663],[119.612,23.65],[119.602,23.649],[119.597,23.64],[119.602,23.634],[119.61,23.636],[119.602,23.629],[119.614,23.619],[119.613,23.602],[119.631,23.607],[119.625,23.6],[119.625,23.58],[119.632,23.583],[119.638,23.599],[119.64,23.587],[119.645,23.589],[119.651,23.61],[119.657,23.606],[119.655,23.599],[119.665,23.595],[119.66,23.592],[119.668,23.591],[119.672,23.601],[119.683,23.584],[119.683,23.566],[119.694,23.56],[119.695,23.555],[119.678,23.551],[119.669,23.562],[119.67,23.556],[119.667,23.561],[119.642,23.558],[119.635,23.547],[119.606,23.529],[119.612,23.521],[119.606,23.508],[119.598,23.514],[119.573,23.508],[119.572,23.522],[119.557,23.523],[119.549,23.539],[119.541,23.539],[119.549,23.554],[119.55,23.541],[119.557,23.538],[119.555,23.529],[119.572,23.532],[119.574,23.52],[119.583,23.533],[119.596,23.527],[119.6,23.531],[119.595,23.538],[119.603,23.54],[119.602,23.548],[119.592,23.553],[119.573,23.546],[119.562,23.55],[119.563,23.558],[119.576,23.555],[119.572,23.563],[119.58,23.563],[119.574,23.568],[119.568,23.562],[119.556,23.563],[119.567,23.575],[119.562,23.585],[119.574,23.585],[119.584,23.594],[119.586,23.574],[119.594,23.575],[119.597,23.569],[119.602,23.577],[119.598,23.583],[119.607,23.587],[119.603,23.601],[119.612,23.605],[119.597,23.617],[119.605,23.625],[119.589,23.623],[119.596,23.636],[119.581,23.662],[119.571,23.662],[119.563,23.651],[119.554,23.658],[119.54,23.634],[119.518,23.629],[119.523,23.602],[119.512,23.592],[119.516,23.565],[119.496,23.568],[119.467,23.561],[119.481,23.575],[119.492,23.57],[119.503,23.579],[119.504,23.589],[119.49,23.595],[119.494,23.602],[119.504,23.597],[119.509,23.612],[119.499,23.62],[119.512,23.648],[119.519,23.648],[119.514,23.656],[119.524,23.656],[119.522,23.643],[119.538,23.639],[119.554,23.658],[119.555,23.669],[119.584,23.677]],[[119.552,23.721],[119.558,23.717],[119.555,23.709],[119.552,23.721]],[[119.612,23.756],[119.624,23.744],[119.611,23.741],[119.615,23.737],[119.606,23.737],[119.603,23.725],[119.596,23.738],[119.612,23.756]]],\u65B0\u7AF9\u5E02:[[[120.935,24.713],[120.914,24.718],[120.908,24.741],[120.891,24.732],[120.875,24.738],[120.898,24.765],[120.892,24.773],[120.892,24.792],[120.903,24.824],[120.916,24.841],[120.913,24.854],[120.936,24.852],[120.955,24.834],[120.984,24.831],[121.004,24.819],[121.026,24.799],[121.021,24.794],[121.034,24.764],[121.021,24.757],[121.008,24.774],[120.993,24.781],[120.986,24.777],[120.988,24.768],[120.97,24.765],[120.957,24.745],[120.944,24.744],[120.935,24.713]]],\u65B0\u7AF9\u7E23:[[[121.403,24.592],[121.412,24.573],[121.395,24.556],[121.402,24.529],[121.384,24.51],[121.373,24.51],[121.372,24.499],[121.358,24.487],[121.342,24.482],[121.318,24.441],[121.305,24.433],[121.26,24.429],[121.263,24.455],[121.219,24.498],[121.223,24.507],[121.217,24.515],[121.169,24.503],[121.145,24.512],[121.137,24.507],[121.117,24.508],[121.098,24.496],[121.072,24.498],[121.067,24.523],[121.078,24.529],[121.081,24.541],[121.058,24.558],[121.071,24.563],[121.083,24.59],[121.075,24.611],[121.063,24.622],[121.052,24.615],[121.025,24.641],[121.008,24.644],[121.01,24.656],[120.997,24.655],[120.987,24.664],[120.976,24.685],[120.964,24.684],[120.974,24.697],[120.974,24.712],[120.953,24.704],[120.95,24.711],[120.942,24.707],[120.935,24.713],[120.944,24.744],[120.957,24.745],[120.97,24.765],[120.988,24.768],[120.986,24.777],[120.993,24.781],[121.008,24.774],[121.021,24.757],[121.034,24.764],[121.021,24.794],[121.026,24.799],[121.008,24.816],[120.984,24.831],[120.955,24.834],[120.94,24.85],[120.925,24.855],[120.943,24.872],[120.97,24.928],[120.982,24.94],[120.993,24.935],[121.007,24.946],[121.019,24.94],[121.038,24.946],[121.058,24.937],[121.058,24.906],[121.091,24.893],[121.109,24.898],[121.108,24.886],[121.116,24.882],[121.156,24.881],[121.161,24.86],[121.15,24.845],[121.176,24.832],[121.174,24.828],[121.203,24.817],[121.205,24.807],[121.22,24.812],[121.222,24.8],[121.243,24.809],[121.248,24.797],[121.26,24.793],[121.26,24.782],[121.302,24.763],[121.308,24.755],[121.298,24.733],[121.308,24.72],[121.299,24.696],[121.318,24.698],[121.339,24.679],[121.339,24.667],[121.354,24.668],[121.352,24.644],[121.358,24.634],[121.366,24.632],[121.359,24.617],[121.367,24.599],[121.388,24.586],[121.403,24.592]]],\u5C4F\u6771\u7E23:[[[120.38,22.356],[120.388,22.351],[120.388,22.343],[120.355,22.323],[120.362,22.347],[120.38,22.356]],[[120.424,22.469],[120.423,22.518],[120.442,22.56],[120.447,22.586],[120.434,22.618],[120.436,22.661],[120.453,22.704],[120.454,22.771],[120.474,22.837],[120.493,22.837],[120.51,22.829],[120.531,22.833],[120.552,22.828],[120.613,22.876],[120.645,22.885],[120.648,22.877],[120.658,22.88],[120.661,22.86],[120.672,22.856],[120.691,22.865],[120.705,22.881],[120.721,22.882],[120.755,22.864],[120.779,22.835],[120.793,22.841],[120.793,22.852],[120.801,22.851],[120.824,22.866],[120.837,22.864],[120.847,22.852],[120.853,22.858],[120.865,22.843],[120.862,22.827],[120.869,22.817],[120.901,22.804],[120.904,22.776],[120.892,22.764],[120.896,22.742],[120.884,22.717],[120.849,22.717],[120.837,22.697],[120.809,22.688],[120.787,22.693],[120.792,22.679],[120.786,22.663],[120.755,22.617],[120.754,22.6],[120.746,22.59],[120.749,22.572],[120.742,22.569],[120.739,22.554],[120.764,22.495],[120.751,22.479],[120.752,22.458],[120.776,22.45],[120.79,22.418],[120.773,22.407],[120.753,22.405],[120.756,22.388],[120.743,22.367],[120.763,22.359],[120.767,22.348],[120.785,22.346],[120.792,22.336],[120.797,22.318],[120.778,22.309],[120.778,22.298],[120.806,22.284],[120.807,22.277],[120.798,22.276],[120.798,22.258],[120.815,22.263],[120.835,22.245],[120.859,22.241],[120.867,22.23],[120.896,22.246],[120.899,22.234],[120.891,22.195],[120.897,22.144],[120.887,22.129],[120.892,22.11],[120.902,22.106],[120.893,22.068],[120.901,22.033],[120.889,22.026],[120.876,21.999],[120.847,21.987],[120.842,21.96],[120.849,21.934],[120.863,21.918],[120.865,21.898],[120.851,21.896],[120.846,21.914],[120.836,21.917],[120.822,21.934],[120.783,21.944],[120.765,21.959],[120.748,21.949],[120.74,21.919],[120.727,21.919],[120.719,21.933],[120.711,21.934],[120.714,21.979],[120.694,22.003],[120.685,22.025],[120.697,22.041],[120.698,22.055],[120.706,22.06],[120.7,22.084],[120.717,22.093],[120.716,22.105],[120.699,22.137],[120.685,22.21],[120.672,22.233],[120.65,22.252],[120.652,22.268],[120.643,22.302],[120.586,22.369],[120.518,22.411],[120.459,22.439],[120.433,22.468],[120.424,22.469]]]};var dr=[{id:"kuroshio",n:"\u9ED1\u6F6E\uFF08\u4E3B\u6D41\uFF09",kind:"\u6696\u6D41",c:"#e53935",seasons:["summer","winter"],path:[[121.9,20.4],[121.55,21.4],[121.65,22.4],[121.95,23.4],[122.25,24.3],[122.75,25.2],[123.5,26.2]],elem:"\u5F9E\u5357\u65B9\u71B1\u5E36\u6D77\u6D0B\u6D41\u4F86\u7684\u6EAB\u6696\u6D77\u6C34\uFF0C\u6CBF\u8457\u81FA\u7063\u6771\u908A\u4E00\u8DEF\u5F80\u5317\u6D41\u5230\u65E5\u672C\u3002\u9ED1\u6F6E\u5E36\u4F86\u5F88\u591A\u9B5A\uFF0C\u50CF\u65D7\u9B5A\u3001\u9BAA\u9B5A\u3001\u9B3C\u982D\u5200\uFF0C\u82B1\u84EE\u3001\u81FA\u6771\u4E5F\u56E0\u6B64\u53EF\u4EE5\u8CDE\u9BE8\u3002",junior:"\u6E90\u81EA\u5317\u8D64\u9053\u6D0B\u6D41\uFF0C\u7D93\u83F2\u5F8B\u8CD3\u6771\u65B9\u5317\u4E0A\uFF0C\u6CBF\u81FA\u7063\u6771\u90E8\u6D77\u57DF\u6D41\u5411\u65E5\u672C\uFF1B\u70BA\u9AD8\u6EAB\u3001\u9AD8\u9E7D\u7684\u6696\u6D41\uFF08\u5E74\u5747\u6C34\u6EAB\u7D04 24\uFF5E26\xB0C\uFF09\uFF0C\u6D41\u91CF\u5C45\u5168\u7403\u524D\u5217\u3002\u5E36\u4F86\u8C50\u5BCC\u7684\u71B1\u5E36\u8207\u9060\u6D0B\u9B5A\u985E\uFF08\u65D7\u9B5A\u3001\u9BAA\u9B5A\u3001\u9B3C\u982D\u5200\uFF09\uFF0C\u9020\u5C31\u6771\u90E8\u6F01\u5834\u8207\u8CDE\u9BE8\u7522\u696D\u3002"},{id:"branch",n:"\u9ED1\u6F6E\u652F\u6D41",kind:"\u6696\u6D41",c:"#ff7043",seasons:["summer","winter"],path:[[121.2,21.05],[120.55,21.75],[120.05,22.5],[119.8,23.2],[119.85,23.9],[120.2,24.6],[120.6,25.3]],elem:"\u9ED1\u6F6E\u5728\u81FA\u7063\u5357\u908A\u5206\u51FA\u4E00\u5C0F\u80A1\uFF0C\u5F80\u5317\u6D41\u9032\u81FA\u7063\u6D77\u5CFD\uFF0C\u8B93\u6F8E\u6E56\u9644\u8FD1\u7684\u6D77\u6C34\u6BD4\u8F03\u6EAB\u6696\u3002",junior:"\u9ED1\u6F6E\u65BC\u81FA\u7063\u5357\u65B9\u5206\u51FA\u7684\u5206\u652F\uFF0C\u7D93\u6F8E\u6E56\u6C34\u9053\u5317\u4E0A\u9032\u5165\u81FA\u7063\u6D77\u5CFD\uFF1B\u51AC\u5B63\u8207\u5357\u4E0B\u7684\u4E2D\u570B\u6CBF\u5CB8\u6D41\u4EA4\u6703\uFF0C\u51B7\u6696\u6C34\u5718\u5C0D\u5CD9\u5F62\u6210\u91CD\u8981\u6F01\u5834\u3002"},{id:"china",n:"\u4E2D\u570B\u6CBF\u5CB8\u6D41",kind:"\u5BD2\u6D41\uFF08\u51B7\u6D41\uFF09",c:"#1e88e5",seasons:["winter"],path:[[121.3,27.6],[120.4,26.7],[119.75,25.85],[119.15,25],[118.6,24.25],[118.05,23.55],[117.5,22.9]],elem:"\u51AC\u5929\u5439\u6771\u5317\u5B63\u98A8\uFF0C\u628A\u5317\u65B9\u51B0\u51B7\u7684\u6D77\u6C34\u6CBF\u8457\u4E2D\u570B\u5927\u9678\u6D77\u5CB8\u5F80\u5357\u63A8\uFF0C\u6D41\u9032\u81FA\u7063\u6D77\u5CFD\u3002\u592A\u51B7\u7684\u6642\u5019\uFF0C\u6F8E\u6E56\u7684\u9B5A\u6703\u88AB\u51CD\u50B7\uFF08\u5BD2\u5BB3\uFF09\u3002",junior:"\u51AC\u5B63\u53D7\u5F37\u52C1\u6771\u5317\u5B63\u98A8\u5439\u9001\uFF0C\u6CBF\u4E2D\u570B\u5927\u9678\u6CBF\u5CB8\u5357\u4E0B\u6D41\u5165\u81FA\u7063\u6D77\u5CFD\uFF0C\u5C6C\u4F4E\u6EAB\u3001\u4F4E\u9E7D\u7684\u6CBF\u5CB8\u51B7\u6D41\uFF1B\u8207\u9ED1\u6F6E\u652F\u6D41\u4EA4\u6703\u5F62\u6210\u6F01\u5834\uFF0C\u5BD2\u6D41\u904E\u5F37\u6642\u66FE\u9020\u6210\u6F8E\u6E56\u7BB1\u7DB2\u990A\u6B96\u8207\u91CE\u751F\u9B5A\u7FA4\u7684\u4F4E\u6EAB\u5BD2\u5BB3\u3002"},{id:"scs",n:"\u5357\u6D77\u5B63\u98A8\u6D41",kind:"\u5B63\u98A8\u6D41",c:"#fb8c00",seasons:["summer"],path:[[117.4,21.4],[118.4,22.2],[119.2,23],[119.55,23.9],[119.95,24.9],[120.6,25.9]],elem:"\u590F\u5929\u5439\u897F\u5357\u5B63\u98A8\uFF0C\u628A\u5357\u6D77\u7684\u6D77\u6C34\u5F80\u5317\u63A8\uFF0C\u6D41\u9032\u81FA\u7063\u6D77\u5CFD\u3002\u5B83\u6703\u8DDF\u8457\u5B63\u7BC0\u6539\u8B8A\u65B9\u5411\u3002",junior:"\u590F\u5B63\u53D7\u897F\u5357\u5B63\u98A8\u589E\u5F37\uFF0C\u5357\u6D77\u8868\u5C64\u6D41\u5411\u5317\u63A8\u9032\u81FA\u7063\u6D77\u5CFD\uFF1B\u51AC\u5B63\u96A8\u5B63\u98A8\u8F49\u63DB\u800C\u6539\u8B8A\uFF0C\u662F\u96A8\u5B63\u7BC0\u4EA4\u66FF\u7684\u6D0B\u6D41\u7CFB\u7D71\uFF0C\u8207\u9ED1\u6F6E\u652F\u6D41\u3001\u4E2D\u570B\u6CBF\u5CB8\u6D41\u5728\u81FA\u7063\u897F\u90E8\u8207\u5357\u7AEF\u6D77\u57DF\u5F62\u6210\u300C\u56DB\u5B63\u89D2\u529B\u300D\u3002"}],$c=[{n:"\u81FA\u4E2D \u2192 \u82B1\u84EE",a:[120.45,24.18],b:[121.62,24]},{n:"\u5609\u7FA9 \u2192 \u81FA\u6771",a:[120.2,23.47],b:[121.42,22.9]},{n:"\u65B0\u7AF9 \u2192 \u5B9C\u862D",a:[120.92,24.82],b:[121.85,24.68]},{n:"\u9AD8\u96C4 \u2192 \u81FA\u6771\uFF08\u5357\u6A6B\uFF09",a:[120.3,23.05],b:[121.2,23]}];function pd(n){let{scene:t,world:e,camera:i,controls:s,mainGeo:r,M:a,G:o,px:l,pz:c,heightAt:h,state:d,openInfo:f,info:p,$:m,LF_COLOR:_,CLS:g,wake:u,flyTo:w,addLabel:S,labels:x}=n,D=R=>R/n.KX+121,A=R=>23.7-R/n.KZ,T={floatT:0,floatTarget:0},I=null,b=0,v=new on({vertexColors:!0,emissive:new Ut("#222"),side:We});function P(R){let O=R?g[R]:0;if(I&&(e.remove(I),I.geometry.dispose(),I=null),b=O,T.floatT=0,T.floatTarget=O?1:0,!O)return;let k=r.index.array,rt=[];for(let K=0;K<k.length;K+=3){let dt=k[K],yt=k[K+1],at=k[K+2];a.cls[dt]===O&&a.cls[yt]===O&&a.cls[at]===O&&rt.push(dt,yt,at)}let tt=new ge;tt.setAttribute("position",r.attributes.position),tt.setAttribute("normal",r.attributes.normal);let et=new Float32Array(a.elev.length*3),bt=_[O],j=new Ut;for(let K=0;K<a.elev.length;K++)j.copy(bt),O===5&&j.lerp(new Ut("#5a3a28"),Math.min(1,(a.elev[K]-1e3)/2900)*.4),et[K*3]=j.r,et[K*3+1]=j.g,et[K*3+2]=j.b;tt.setAttribute("color",new Me(et,3)),tt.setIndex(rt),I=new te(tt,v),e.add(I)}let H=new De;H.visible=!1,e.add(H),function(){var k,rt;let R=[];for(let tt of Object.values(Vi))for(let et of tt)for(let bt=0;bt<et.length-1;bt++){let[j,K]=et[bt],[dt,yt]=et[bt+1],at=Math.max(1,Math.ceil(Math.hypot(l(dt)-l(j),c(yt)-c(K))/1.5));for(let St=0;St<at;St++){let Mt=j+(dt-j)*St/at,Wt=K+(yt-K)*St/at,L=j+(dt-j)*(St+1)/at,ct=K+(yt-K)*(St+1)/at,$=((k=h(Mt,Wt))!=null?k:5)/1e3+.025,J=((rt=h(L,ct))!=null?rt:5)/1e3+.025;R.push(l(Mt),$,c(Wt),l(L),J,c(ct))}}let O=new ge;O.setAttribute("position",new Qt(R,3)),H.add(new vs(O,new Cn({color:"#ffffff",transparent:!0,opacity:.9})))}();let z=new De;z.visible=!1,t.add(z);let q=dr.map(R=>{let O=R.path.map(([L,ct])=>new C(l(L),0,c(ct))),k=new tr(O),rt=new Ut(R.c),tt=new rn({color:rt,transparent:!0,opacity:.55,depthWrite:!1}),et=new te(new Da(k,80,2.2,8,!1),tt),bt=9,j=new er(5,12,12);j.rotateX(Math.PI/2);let K=new on({color:rt,emissive:rt.clone().multiplyScalar(.35),transparent:!0,opacity:1}),dt=new va(j,K,bt),yt=new te(new er(9,20,16).rotateX(Math.PI/2),K),at=new De;at.add(et,dt,yt),z.add(at);let St=k.getPointAt(.5),Mt=document.createElement("div");Mt.className="lb current",Mt.innerHTML=`<span class="cdot" style="background:${R.c}"></span>${R.n}<small>${R.kind}</small>`;let Wt=new gi(Mt);return Wt.position.set(St.x+14,8,St.z),at.add(Wt),x.current.push({o:Wt,el:Mt,onClick:()=>Rt(R.id)}),{cu:R,curve:k,g:at,tubeMat:tt,arrowMat:K,arrows:dt,head:yt,n:bt,lift:0,lo:Wt}}),Q=new ye,X=null,nt="winter",Y=0;function pt(R){let O=R.curve.getLength(),k=new C;for(let et=0;et<R.n;et++){let bt=(et+Y*40/O)/R.n%1,j=R.curve.getPointAt(bt),K=R.curve.getTangentAt(bt,k);Q.position.copy(j),Q.position.y+=2.5,Q.lookAt(j.x+K.x,j.y+2.5+K.y,j.z+K.z),Q.updateMatrix(),R.arrows.setMatrixAt(et,Q.matrix)}R.arrows.instanceMatrix.needsUpdate=!0;let rt=R.curve.getPointAt(1),tt=R.curve.getTangentAt(1);R.head.position.set(rt.x,2.5,rt.z),R.head.lookAt(rt.x+tt.x,2.5,rt.z+tt.z)}function xt(){q.forEach(R=>{let O=R.cu.seasons.includes(nt);R.g.visible=O,R.lo.visible=O;let k=X&&X!==R.cu.id;R.tubeMat.opacity=k?.12:.55,R.arrowMat.opacity=k?.25:1,R.lb=R.lo.element,R.lb.classList.toggle("sel",X===R.cu.id)}),document.querySelectorAll("#curList [data-cur]").forEach(R=>{let O=dr.find(k=>k.id===R.dataset.cur);R.classList.toggle("on",X===O.id),R.classList.toggle("off",!O.seasons.includes(nt))}),document.querySelectorAll("[data-season]").forEach(R=>R.classList.toggle("on",R.dataset.season===nt)),u(800)}function Rt(R){n.mission&&n.mission("current:"+R),X=X===R?null:R;let O=dr.find(k=>k.id===R);if(O.seasons.includes(nt)||(nt=O.seasons[0]),xt(),X){f(`<div class="tag-lf" style="background:${O.c};color:#fff">\u{1F30A} \u6D0B\u6D41\u30FB${O.kind}</div><h3>${O.n}</h3><p>${d.level==="elem"?O.elem:O.junior}</p>
        <p class="muted">\u51FA\u73FE\u5B63\u7BC0\uFF1A${O.seasons.length===2?"\u4E00\u5E74\u56DB\u5B63":O.seasons[0]==="winter"?"\u51AC\u5B63":"\u590F\u5B63"}\u3002\u7BAD\u982D\u65B9\u5411\u5C31\u662F\u6D77\u6C34\u6D41\u52D5\u7684\u65B9\u5411\u3002</p>`);let k=O.path[Math.floor(O.path.length/2)];w(k[0],k[1],520,.75)}}function Gt(){m("#curList").innerHTML=dr.map(R=>`<button data-cur="${R.id}"><span class="dot" style="background:${R.c}"></span><b>${R.n}</b><small>${R.kind}\u30FB${R.seasons.length===2?"\u5168\u5E74":R.seasons[0]==="winter"?"\u51AC\u5B63":"\u590F\u5B63"}</small></button>`).join(""),m("#curList").querySelectorAll("[data-cur]").forEach(R=>R.onclick=()=>Rt(R.dataset.cur)),document.querySelectorAll("[data-season]").forEach(R=>R.onclick=()=>{nt=R.dataset.season,X&&!dr.find(O=>O.id===X).seasons.includes(nt)&&(X=null),xt()}),xt()}function re(R){z.visible=R,R?(q.forEach(pt),xt()):(X=null,q.forEach(O=>{O.lo.visible=!1}))}let Z=new De;e.add(Z);let it=new te(new Ms(1,16,12),new rn({color:"#ff1744"}));it.visible=!1,t.add(it);let lt=null,ut=null;function Dt(R,O){let rt=[],tt=Math.hypot(l(O[0])-l(R[0]),c(O[1])-c(R[1]));for(let et=0;et<=240;et++){let bt=et/240,j=R[0]+(O[0]-R[0])*bt,K=R[1]+(O[1]-R[1])*bt,dt=h(j,K),yt=0;if(dt!=null){let at=Math.round((j-o.lon0)/(o.lon1-o.lon0)*(a.nx-1)),St=Math.round((o.lat1-K)/(o.lat1-o.lat0)*(a.nz-1));yt=a.cls[St*a.nx+at]}rt.push({t:bt,km:tt*bt,lon:j,lat:K,h:dt==null?0:Math.max(0,dt),cls:yt})}return{pts:rt,dist:tt}}function Nt(R,O,k){n.mission&&n.mission("profile"),lt={a:R,b:O,name:k,...Dt(R,O)},Z.clear();let rt=lt.pts.map(Ct=>new C(l(Ct.lon),Ct.h/1e3+.06,c(Ct.lat)));Z.add(new Ni(new ge().setFromPoints(rt),new Cn({color:"#ff1744",linewidth:2})));let tt=(Ct,Ft)=>{let xe=document.createElement("div");xe.className="lb profpin",xe.textContent=Ft;let Ve=new gi(xe);Ve.position.set(l(Ct.lon),Ct.h/1e3+.2,c(Ct.lat)),Z.add(Ve)};tt(lt.pts[0],"A"),tt(lt.pts[lt.pts.length-1],"B");let et=340,bt=170,j=38,K=8,dt=10,yt=26,at=Math.max(1e3,Math.ceil(Math.max(...lt.pts.map(Ct=>Ct.h))/1e3)*1e3),St=Ct=>j+Ct/lt.dist*(et-j-K),Mt=Ct=>dt+(1-Ct/at)*(bt-dt-yt),Wt={0:"#7fb3d5",1:"#6fcf97",2:"#f2c94c",3:"#f2994a",4:"#56ccf2",5:"#9c6b4a"},L="";for(let Ct=0;Ct<lt.pts.length-1;Ct++){let Ft=lt.pts[Ct],xe=lt.pts[Ct+1];L+=`<path d="M${St(Ft.km)},${Mt(0)} L${St(Ft.km)},${Mt(Ft.h)} L${St(xe.km)},${Mt(xe.h)} L${St(xe.km)},${Mt(0)} Z" fill="${Wt[Ft.cls]}" stroke="${Wt[Ft.cls]}" stroke-width=".4"/>`}let ct="";for(let Ct=0;Ct<=at;Ct+=1e3)ct+=`<line x1="${j}" x2="${et-K}" y1="${Mt(Ct)}" y2="${Mt(Ct)}" stroke="#0002"/><text x="${j-4}" y="${Mt(Ct)+4}" font-size="11" text-anchor="end" fill="#345">${Ct.toLocaleString()}</text>`;let $=lt.dist>100?20:10;for(let Ct=0;Ct<=lt.dist;Ct+=$)ct+=`<text x="${St(Ct)}" y="${bt-8}" font-size="11" text-anchor="middle" fill="#345">${Ct}</text>`;let J=lt.pts.reduce((Ct,Ft)=>Ft.h>Ct.h?Ft:Ct,lt.pts[0]),gt=[1,2,3,4,5].filter(Ct=>lt.pts.some(Ft=>Ft.cls===Ct)).map(Ct=>`<span><i style="background:${Wt[Ct]}"></i>${["","\u5E73\u539F","\u4E18\u9675","\u53F0\u5730","\u76C6\u5730","\u5C71\u5730"][Ct]}</span>`).join("");f(`<div class="tag-lf" style="background:#ff1744;color:#fff">\u{1F4C8} \u5730\u5F62\u5256\u9762\u5716</div><h3>${k}</h3>
      <svg id="profSvg" viewBox="0 0 ${et} ${bt}" width="100%" style="touch-action:none">${ct}${L}
        <text x="${St(J.km)}" y="${Mt(J.h)-6}" font-size="11" text-anchor="middle" fill="#a0410d">\u25B2${Math.round(J.h).toLocaleString()}</text>
        <text x="4" y="12" font-size="10" fill="#345">\u516C\u5C3A</text><text x="${et-K}" y="${bt-8}" font-size="10" text-anchor="end" fill="#345">\u516C\u91CC</text>
        <line id="profCur" x1="0" x2="0" y1="${dt}" y2="${bt-yt}" stroke="#ff1744" stroke-width="1.5" visibility="hidden"/></svg>
      <div class="proflegend">${gt}</div>
      <p id="profRead" class="muted">\u5728\u5256\u9762\u5716\u4E0A\u6ED1\u52D5\u624B\u6307\uFF08\u6216\u6ED1\u9F20\uFF09\uFF0C\u5730\u5716\u4E0A\u7684\u7D05\u9EDE\u6703\u8DDF\u8457\u8D70\u3002\u5168\u9577\u7D04 <b>${Math.round(lt.dist)} \u516C\u91CC</b>\uFF0C\u6700\u9AD8\u7D04 <b>${Math.round(J.h).toLocaleString()} \u516C\u5C3A</b>\u3002</p>
      <p class="muted">\u9AD8\u5EA6\u6709\u653E\u5927\uFF08\xD7${d.exag}\uFF09\uFF0C\u548C 3D \u5730\u5716\u4E00\u6A23\uFF1B\u771F\u5BE6\u7684\u5C71\u5761\u6C92\u6709\u9019\u9EBC\u9661\u3002</p>`);let mt=m("#profSvg"),Ot=Ct=>{let Ft=mt.getBoundingClientRect(),xe=(Ct.clientX-Ft.left)/Ft.width*et,Ve=Math.max(0,Math.min(lt.dist,(xe-j)/(et-j-K)*lt.dist)),hn=lt.pts[Math.round(Ve/lt.dist*(lt.pts.length-1))],Wi=m("#profCur");Wi.setAttribute("x1",St(hn.km)),Wi.setAttribute("x2",St(hn.km)),Wi.setAttribute("visibility","visible"),it.visible=!0,it.position.set(l(hn.lon),hn.h/1e3*e.scale.y+1.2,c(hn.lat)),it.scale.setScalar(Math.max(1,i.position.distanceTo(it.position)/120)),m("#profRead").innerHTML=`\u8DDD\u96E2 A \u9EDE <b>${hn.km.toFixed(1)} \u516C\u91CC</b>\uFF0C\u9AD8\u5EA6 <b>${Math.round(hn.h).toLocaleString()} \u516C\u5C3A</b>\uFF08${["\u6D77\u9762","\u5E73\u539F","\u4E18\u9675","\u53F0\u5730","\u76C6\u5730","\u5C71\u5730"][hn.cls]}\uFF09`,u()};mt.addEventListener("pointermove",Ot),mt.addEventListener("pointerdown",Ot);let ue=[(R[0]+O[0])/2,(R[1]+O[1])/2];w(ue[0],ue[1],Math.max(140,lt.dist*1.6),.85),u(1500)}function Bt(){Z.clear(),it.visible=!1,lt=null}function he(){ut=[],Bt(),m("#pickHint").hidden=!1,m("#pickHint").textContent="\u8ACB\u5728\u5730\u5716\u4E0A\u9EDE\u7B2C 1 \u500B\u9EDE\uFF08A\uFF09"}function Yt(R){if(!ut)return!1;let O=n.renderer.domElement.getBoundingClientRect(),k=new ht((R.clientX-O.left)/O.width*2-1,-((R.clientY-O.top)/O.height)*2+1),rt=new Ha;rt.setFromCamera(k,i);let tt=rt.intersectObject(n.mainMesh)[0]||rt.intersectObject(n.seaMesh)[0];if(!tt)return!0;if(ut.push([D(tt.point.x),A(tt.point.z)]),ut.length===1)return m("#pickHint").textContent="\u5F88\u597D\uFF01\u518D\u9EDE\u7B2C 2 \u500B\u9EDE\uFF08B\uFF09",!0;let[et,bt]=ut;return ut=null,m("#pickHint").hidden=!0,Nt(et,bt,"\u81EA\u5DF1\u756B\u7684\u5256\u9762"),!0}let vt={group:new De,t:1,playing:!1,shake:0};vt.group.visible=!1,t.add(vt.group);let N=[],Fe=R=>N.forEach(O=>{O.visible=R}),Xt=[[122.3,24.6],[121.85,24.35],[121.6,23.97],[121.48,23.7],[121.36,23.4],[121.24,23.15],[121.15,22.9],[121.1,22.6],[121,21.9],[120.8,21]];(function(){let O=Xt.map(([K,dt])=>[l(K),c(dt)]),k=(K,dt)=>{let yt=new nr(K.map(([St,Mt])=>new ht(St,-Mt))),at=new La(yt);return at.rotateX(-Math.PI/2),new te(at,new rn({color:dt,transparent:!0,opacity:.5,depthWrite:!1,side:We}))},rt=[[l(116),c(27.5)],[O[0][0],c(27.5)],...O,[O[O.length-1][0],c(19.5)],[l(116),c(19.5)]],tt=[[O[0][0],c(27.5)],[l(125.5),c(27.5)],[l(125.5),c(19.5)],[O[O.length-1][0],c(19.5)],...O.slice().reverse()];vt.eu=k(rt,"#43a047"),vt.ph=k(tt,"#8e24aa"),vt.eu.position.y=.4,vt.ph.position.y=.5,vt.group.add(vt.eu,vt.ph);let et=Xt.map(([K,dt])=>new C(l(K),1.2,c(dt))),bt=new Ni(new ge().setFromPoints(et),new Na({color:"#d50000",dashSize:6,gapSize:4}));bt.computeLineDistances(),vt.group.add(bt),vt.arrows=[],[[122.6,22.6],[122.9,23.6],[122.4,21.6]].forEach(([K,dt])=>{let yt=new Va(new C(-.8,0,-.6).normalize(),new C(l(K),3,c(dt)),55,9315498,18,12);vt.group.add(yt),vt.arrows.push(yt)});let j=(K,dt,yt,at)=>{let St=document.createElement("div");St.className="lb plate "+at,St.innerHTML=K;let Mt=new gi(St);return Mt.position.set(l(dt),4,c(yt)),Mt.visible=!1,vt.group.add(Mt),N.push(Mt),Mt};vt.lEu=j("\u6B50\u4E9E\u677F\u584A",118.9,22.3,"eu"),vt.lPh=j("\u83F2\u5F8B\u8CD3\u6D77\u677F\u584A<small>\u5F80\u897F\u5317\u63A8\u64E0 \u2196</small>",123,22.4,"ph"),j("\u677F\u584A\u4EA4\u754C\uFF08\u82B1\u6771\u7E31\u8C37\uFF09",121.75,22.9,"bd")})();let $t=[[0,"\u5F88\u4E45\u5F88\u4E45\u4EE5\u524D\uFF08\u7D04\u5E7E\u767E\u842C\u5E74\u524D\uFF09\uFF0C\u9019\u88E1\u9084\u662F\u4E00\u7247\u6D77\uFF0C\u6D77\u5E95\u5806\u7A4D\u4E86\u539A\u539A\u7684\u6CE5\u6C99\u3002"],[.2,"\u6771\u908A\u7684\u83F2\u5F8B\u8CD3\u6D77\u677F\u584A\u6162\u6162\u5F80\u897F\u5317\u79FB\u52D5\uFF0C\u63A8\u64E0\u897F\u908A\u7684\u6B50\u4E9E\u677F\u584A\u3002"],[.45,"\u6D77\u5E95\u7684\u5CA9\u5C64\u88AB\u64E0\u5F97\u76BA\u8D77\u4F86\u3001\u62AC\u5347\uFF0C\u81FA\u7063\u6162\u6162\u9732\u51FA\u6D77\u9762\u3002"],[.7,"\u64E0\u58D3\u8D8A\u4E45\uFF0C\u5C71\u8D8A\u9577\u8D8A\u9AD8\uFF0C\u5F62\u6210\u4E2D\u592E\u5C71\u8108\u7B49\u300C\u65B0\u8936\u66F2\u5C71\u8108\u300D\u3002"],[.95,"\u73FE\u5728\uFF1A\u677F\u584A\u9084\u5728\u64E0\u58D3\uFF0C\u6240\u4EE5\u81FA\u7063\u5730\u9707\u5F88\u591A\uFF0C\u5C71\u4E5F\u9084\u5728\u6162\u6162\u9577\u9AD8\uFF01"]],Lt=[[0,"\u7D04\u6578\u767E\u842C\u5E74\u524D\uFF0C\u81FA\u7063\u6240\u5728\u4F4D\u7F6E\u662F\u5927\u9678\u68DA\u908A\u7DE3\u7684\u6DFA\u6D77\uFF0C\u5806\u7A4D\u4E86\u5927\u91CF\u6C89\u7A4D\u7269\u3002"],[.2,"\u83F2\u5F8B\u8CD3\u6D77\u677F\u584A\u5411\u897F\u5317\u79FB\u52D5\uFF08\u6BCF\u5E74\u50C5\u6578\u516C\u5206\uFF09\uFF0C\u8207\u6B50\u4E9E\u677F\u584A\u78B0\u649E\uFF1B\u5317\u908A\u83F2\u5F8B\u8CD3\u6D77\u677F\u584A\u96B1\u6C92\u5230\u6B50\u4E9E\u677F\u584A\u4E4B\u4E0B\uFF0C\u5357\u908A\u5247\u662F\u6B50\u4E9E\u677F\u584A\u96B1\u6C92\u3002"],[.45,"\u6C89\u7A4D\u5CA9\u5C64\u53D7\u64E0\u58D3\u8936\u66F2\u3001\u65B7\u88C2\u4E26\u62AC\u5347\u51FA\u6D77\u9762\u2014\u2014\u9019\u5C31\u662F\u300C\u84EC\u840A\u9020\u5C71\u904B\u52D5\u300D\u3002"],[.7,"\u6301\u7E8C\u64E0\u58D3\u5F62\u6210\u9AD8\u8073\u7684\u65B0\u8936\u66F2\u5C71\u8108\uFF1B\u6D77\u5CB8\u5C71\u8108\u539F\u5C6C\u83F2\u5F8B\u8CD3\u6D77\u677F\u584A\u4E0A\u7684\u706B\u5C71\u5CF6\u5F27\uFF0C\u82B1\u6771\u7E31\u8C37\u5373\u70BA\u677F\u584A\u4EA4\u754C\u3002"],[.95,"\u9020\u5C71\u904B\u52D5\u4ECD\u5728\u9032\u884C\uFF1A\u5730\u9707\u983B\u7E41\u3001\u5C71\u8108\u6301\u7E8C\u62AC\u5347\uFF0C\u540C\u6642\u4E5F\u53D7\u4FB5\u8755\u4F5C\u7528\uFF08\u5167\u71DF\u529B\u8207\u5916\u71DF\u529B\u540C\u6642\u4F5C\u7528\uFF09\u3002"]];function ee(){let R=vt.t;e.scale.y=Math.max(.02,d.exag*R);let O=(1-R)*60;vt.ph.position.x=O*.8,vt.ph.position.z=O*.6;let k=(d.level==="elem"?$t:Lt).filter(bt=>bt[0]<=R+1e-6).pop(),rt=m("#plateStage");rt&&(rt.textContent=k[1]);let tt=m("#plateSlider");tt&&!tt.matches(":active")&&(tt.value=Math.round(R*100));let et=m("#plateYear");et&&(et.textContent=R>=.999?"\u73FE\u5728":R<.05?"\u6578\u767E\u842C\u5E74\u524D":`\u64E0\u58D3\u4E2D\u2026${Math.round(R*100)}%`)}function It(){n.mission&&n.mission("plates"),Bt(),document.body.classList.add("plates"),vt.group.visible=!0,Fe(!0),vt.t=0,vt.playing=!0,ee(),f(`<div class="tag-lf" style="background:#8e24aa;color:#fff">\u{1F30B} \u677F\u584A\u904B\u52D5</div><h3>\u81FA\u7063\u662F\u600E\u9EBC\u300C\u64E0\u300D\u51FA\u4F86\u7684\uFF1F</h3>
      <p id="plateYear" style="font-weight:800;color:#8e24aa"></p>
      <p id="plateStage"></p>
      <input type="range" id="plateSlider" min="0" max="100" value="0" aria-label="\u6642\u9593">
      <div class="row"><button class="btn-sm" id="platePlay">\u23F8 \u66AB\u505C</button><button class="btn-sm" id="plateQuake">\u{1FAE8} \u5730\u9707\uFF01</button><button class="btn-sm" id="plateClose">\u2715 \u7D50\u675F\u52D5\u756B</button></div>
      <p class="muted">\u7D2B\u8272\u662F\u83F2\u5F8B\u8CD3\u6D77\u677F\u584A\u3001\u7DA0\u8272\u662F\u6B50\u4E9E\u677F\u584A\uFF0C\u7D05\u8272\u865B\u7DDA\u662F\u677F\u584A\u4EA4\u754C\uFF08\u82B1\u6771\u7E31\u8C37\uFF09\u3002\u8AB2\u672C\uFF1A\u81FA\u7063\u4F4D\u65BC\u5169\u677F\u584A\u7684\u63A5\u89F8\u5E36\uFF0C\u677F\u584A\u64E0\u58D3\u5F62\u6210\u300C\u65B0\u8936\u66F2\u5C71\u8108\u300D\u3002</p>`),ee(),m("#plateSlider").oninput=R=>{vt.playing=!1,m("#platePlay").textContent="\u25B6 \u64AD\u653E",vt.t=+R.target.value/100,ee(),u()},m("#platePlay").onclick=()=>{vt.t>=1&&(vt.t=0),vt.playing=!vt.playing,m("#platePlay").textContent=vt.playing?"\u23F8 \u66AB\u505C":"\u25B6 \u64AD\u653E",u()},m("#plateQuake").onclick=()=>{vt.shake=1.2,u(1500)},m("#plateClose").onclick=y,E()}function E(){w(121.1,23.4,620,.95)}function y(){vt.group.visible&&(document.body.classList.remove("plates"),vt.group.visible=!1,Fe(!1),vt.playing=!1,vt.t=1,e.scale.y=d.exag,p.classList.remove("show"),u())}function B(R){let O=!1;if(I||T.floatT>0){T.floatT+=(T.floatTarget-T.floatT)*Math.min(1,R*4),!I&&T.floatT<.002&&(T.floatT=0);let k=Math.sin(performance.now()/600)*1.2;I&&(I.position.y=(T.floatT*45+k*2*T.floatT)/e.scale.y),O=!0}if(z.visible&&(Y+=R,q.forEach(k=>{k.g.visible&&pt(k);let rt=X===k.cu.id?10:0;k.lift+=(rt-k.lift)*Math.min(1,R*5),k.g.position.y=k.lift}),O=!0),vt.group.visible){if(vt.playing&&(vt.t=Math.min(1,vt.t+R/14),ee(),vt.t>=1)){vt.playing=!1,vt.shake=1.2;let k=m("#platePlay");k&&(k.textContent="\u25B6 \u91CD\u65B0\u64AD\u653E")}O=!0}if(vt.shake>0){vt.shake-=R;let k=Math.max(0,vt.shake)*2.2;i.position.x+=(Math.random()-.5)*k,i.position.y+=(Math.random()-.5)*k*.6,O=!0}return O}return{setFloat:P,countyLines:H,showCurrents:re,renderCurrents:Gt,drawProfile:Nt,clearProfile:Bt,startPick:he,onTap:Yt,openPlates:It,closePlates:y,tick:B,isPlates:()=>vt.group.visible}}var Yg=121,yd=23.7,Rs=111.32*Math.cos(yd*Math.PI/180),xr=110.6,jt=n=>(n-Yg)*Rs,Zt=n=>-(n-yd)*xr,st=n=>document.querySelector(n);function Dn(n,t){let e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Jc(n,t){let e=Math.floor(n),i=Math.floor(t),s=n-e,r=t-i,a=s*s*(3-2*s),o=r*r*(3-2*r),l=Dn(e,i),c=Dn(e+1,i),h=Dn(e,i+1),d=Dn(e+1,i+1);return(l+(c-l)*a+(h-l)*o+(l-c-h+d)*a*o)*2-1}function fr(n,t){let e=0,i=.5,s=1;for(let r=0;r<5;r++)e+=i*Jc(n*s,t*s),s*=2.03,i*=.5;return e}function jg(n,t){let e=0,i=.5,s=1;for(let r=0;r<4;r++)e+=i*(1-Math.abs(Jc(n*s+9,t*s+3))),s*=2.1,i*=.5;return e}var lo=(n,t,e)=>{let i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)};function co(n,t,e){let i=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){let[a,o]=e[s],[l,c]=e[r];o>t!=c>t&&n<(l-a)*(t-o)/(c-o)+a&&(i=!i)}return i}function Zg(n,t,e,i,s,r){let a=s-e,o=r-i,l=a*a+o*o,c=l?((n-e)*a+(t-i)*o)/l:0;c=Math.max(0,Math.min(1,c));let h=e+c*a-n,d=i+c*o-t;return[Math.sqrt(h*h+d*d),c]}function qc(n,t,e){let i=1e9,s=0;for(let r=0;r<e.length-1;r++){let[a,o]=Zg(n,t,e[r][0],e[r][1],e[r+1][0],e[r+1][1]);a<i&&(i=a,s=e[r][2]+(e[r+1][2]-e[r][2])*o)}return[i,s]}function vd(n,t,e){let i=new Float32Array(t*e),s=1e6,r=1.4142;for(let a=0;a<i.length;a++)i[a]=n[a]?s:0;for(let a=0;a<e;a++)for(let o=0;o<t;o++){let l=a*t+o;if(!i[l])continue;let c=i[l];o>0?c=Math.min(c,i[l-1]+1):c=Math.min(c,1),a>0?(c=Math.min(c,i[l-t]+1),o>0&&(c=Math.min(c,i[l-t-1]+r)),o<t-1&&(c=Math.min(c,i[l-t+1]+r))):c=Math.min(c,1),i[l]=c}for(let a=e-1;a>=0;a--)for(let o=t-1;o>=0;o--){let l=a*t+o;if(!i[l])continue;let c=i[l];o<t-1?c=Math.min(c,i[l+1]+1):c=Math.min(c,1),a<e-1?(c=Math.min(c,i[l+t]+1),o<t-1&&(c=Math.min(c,i[l+t+1]+r)),o>0&&(c=Math.min(c,i[l+t-1]+r))):c=Math.min(c,1),i[l]=c}return i}function Jg(n,t,e,i){if(i<1)return n;let s=Float32Array.from(n),r=new Float32Array(n.length);for(let a=0;a<2;a++){for(let o=0;o<e;o++)for(let l=0;l<t;l++){let c=0,h=0;for(let d=-i;d<=i;d++){let f=l+d;f>=0&&f<t&&(c+=s[o*t+f],h++)}r[o*t+l]=c/h}for(let o=0;o<e;o++)for(let l=0;l<t;l++){let c=0,h=0;for(let d=-i;d<=i;d++){let f=o+d;f>=0&&f<e&&(c+=r[f*t+l],h++)}s[o*t+l]=c/h}}return s}var ti={sea:0,plain:1,hill:2,tableland:3,basin:4,mountain:5},Kg=["sea","plain","hill","tableland","basin","mountain"];function Md(n,t){return t==="tableland"?ti.tableland:t==="basin"?ti.basin:t==="plain"||n<100?ti.plain:n<1e3?ti.hill:ti.mountain}function Qg(n,t){let e=lr[0].pts,i=e[0][0];for(let r=0;r<e.length-1;r++){let a=e[r],o=e[r+1];if(t<=a[1]&&t>=o[1]){i=a[0]+(o[0]-a[0])*(a[1]-t)/(a[1]-o[1]);break}}t<21.95&&(i=121);let s=24.7-(n-120.88)*.81;return t>s&&!(t<24.5&&n>i)||n>i&&t>=24.35?"N":n>i&&t>22.4?"E":t>23.56-(n-120.15)*.15?"C":"S"}var xi=window.matchMedia("(pointer: coarse)").matches||window.innerWidth<=900,Ps=!1;try{Ps=localStorage.getItem("tw3d_saver")==="1"}catch{}var qt={lon0:119.98,lon1:122.06,lat0:21.86,lat1:25.34,step:Ps?1.4:xi?1.1:.8};qt.nx=Math.round((qt.lon1-qt.lon0)*Rs/qt.step)+1;qt.nz=Math.round((qt.lat1-qt.lat0)*xr/qt.step)+1;function t_(){let{nx:n,nz:t}=qt,e=n*t,i=new Float32Array(e),s=new Float32Array(e),r=new Uint8Array(e),a=Gc.main;for(let m=0;m<t;m++)for(let _=0;_<n;_++){let g=m*n+_,u=qt.lon0+(qt.lon1-qt.lon0)*_/(n-1),w=qt.lat1-(qt.lat1-qt.lat0)*m/(t-1);i[g]=u,s[g]=w,r[g]=co(u,w,a)?1:0}let o=vd(r,n,t),l=lr.map(m=>({w:m.w,pts:m.pts.map(_=>[jt(_[0]),Zt(_[1]),_[2]])})),c=ad.map(m=>({w:m.w,pts:m.pts.map(_=>[jt(_[0]),Zt(_[1]),_[2]])})),h=new Float32Array(e);for(let m=0;m<e;m++){if(!r[m]){h[m]=-60;continue}let _=jt(i[m]),g=Zt(s[m]),u=0;for(let T of l){let[I,b]=qc(_,g,T.pts),v=I/T.w;v>4||(u=Math.max(u,b*(.78*Math.exp(-v*v)+.22*Math.exp(-v*v/5))))}for(let T of c){let[I,b]=qc(_,g,T.pts),v=I/T.w;v>4||(u=Math.max(u,b*Math.exp(-v*v)))}for(let T of to){let I=Math.hypot(_-jt(T.lon),g-Zt(T.lat))/T.r;u=Math.max(u,T.h*Math.exp(-I*I*1.6))}let w=u,S=fr(_*.06,g*.06),x=jg(_*.09,g*.09),D=lo(150,2500,u);u=u*(1+.16*S)+u*D*.18*(x-.5)+25*S,u=Math.min(u,w*1.02+20,3952);let A=o[m]*qt.step;u*=lo(0,3.2,A),u=Math.max(u,Math.min(30,1.5+A*1.2)),h[m]=u}let d=new Int8Array(e).fill(-1);cr.forEach((m,_)=>{let g=new Float32Array(e),u=m.ell,w=m.poly,S=m.line&&m.line.map(x=>[jt(x[0]),Zt(x[1]),0]);for(let x=0;x<e;x++){if(!r[x])continue;let D=i[x],A=s[x],T=!1;if(w)T=co(D,A,w);else if(u){let I=(jt(D)-jt(u[0]))/u[2],b=(Zt(A)-Zt(u[1]))/u[3];T=I*I+b*b<=1}else S&&(T=qc(jt(D),Zt(A),S)[0]<=m.lw);T&&(g[x]=1,d[x]=_)}g=Jg(g,n,t,m.blur);for(let x=0;x<e;x++){if(!r[x]||g[x]<=0)continue;let D=jt(i[x]),A=Zt(s[x]),T=m.h;m.type==="plain"?T=Math.min(h[x],m.h*(.35+.65*Math.min(1,o[x]*qt.step/18))+6*fr(D*.2,A*.2)):m.type==="tableland"?T=m.h+18*fr(D*.3,A*.3):T=m.h+8*fr(D*.3,A*.3),h[x]=h[x]*(1-g[x])+T*g[x]}});let f=new Uint8Array(e),p=new Array(e);for(let m=0;m<e;m++){if(!r[m]){f[m]=0;continue}f[m]=Md(h[m],d[m]>=0?cr[d[m]].type:null),p[m]=Qg(i[m],s[m])}return{nx:n,nz:t,lonA:i,latA:s,mask:r,elev:h,cls:f,reg:p,zoneOf:d}}function bd(n,t,e,i,s){let r=n*t,a=new Float32Array(r*3);for(let h=0;h<t;h++)for(let d=0;d<n;d++){let f=h*n+d;a[f*3]=e(d),a[f*3+1]=s[f]/1e3,a[f*3+2]=i(h)}let o=new Uint32Array((n-1)*(t-1)*6),l=0;for(let h=0;h<t-1;h++)for(let d=0;d<n-1;d++){let f=h*n+d,p=f+1,m=f+n,_=m+1;o[l++]=f,o[l++]=m,o[l++]=p,o[l++]=p,o[l++]=m,o[l++]=_}let c=new ge;return c.setAttribute("position",new Me(a,3)),c.setAttribute("color",new Me(new Float32Array(r*3),3)),c.setIndex(new Me(o,1)),c.computeVertexNormals(),c}function e_(n,t,e,i,s){let r=[];for(let a=0;a<28;a++){let o=a/28*Math.PI*2,l=1+.18*Jc(Math.cos(o)*2+s,Math.sin(o)*2+s);r.push([n+Math.cos(o)*e*l/Rs,t+Math.sin(o)*i*l/xr])}return r}function n_(n){let t=n.coast?n.coast.map(i=>Gc[i]):n.ell.map((i,s)=>e_(i[0],i[1],i[2],i[3],s*7+n.h)),e=[];return t.forEach((i,s)=>{let r=[1e9,1e9],a=[-1e9,-1e9];i.forEach(([b,v])=>{r[0]=Math.min(r[0],b),r[1]=Math.min(r[1],v),a[0]=Math.max(a[0],b),a[1]=Math.max(a[1],v)});let o=.01;r[0]-=o,r[1]-=o,a[0]+=o,a[1]+=o;let l=(a[0]-r[0])*Rs,c=(a[1]-r[1])*xr,h=Math.max(.08,Math.max(l,c)/110),d=Math.round(l/h)+1,f=Math.round(c/h)+1,p=d*f,m=new Uint8Array(p),_=new Float32Array(p),g=new Float32Array(p);for(let b=0;b<f;b++)for(let v=0;v<d;v++){let P=b*d+v,H=r[0]+(a[0]-r[0])*v/(d-1),z=a[1]-(a[1]-r[1])*b/(f-1);_[P]=H,g[P]=z,m[P]=co(H,z,i)?1:0}let u=vd(m,d,f),w=1;for(let b=0;b<p;b++)w=Math.max(w,u[b]);let S=s===0?1:.7,x=new Float32Array(p),D=new Uint8Array(p);for(let b=0;b<p;b++){if(!m[b]){x[b]=-40;continue}let v=u[b]/w,P=fr(_[b]*300,g[b]*300),H;n.profile==="cone"?H=Math.pow(v,.85)*(1+.2*P):n.profile==="hill"?H=Math.pow(v,.7)*(.7+.45*(P+.5)):n.profile==="mesa"?H=lo(0,.18,v)*(.85+.15*P):H=lo(0,.3,v),x[b]=Math.max(2,n.h*S*Math.max(0,H)),D[b]=n.profile==="mesa"&&n.id==="penghu"?ti.tableland:Md(x[b],null)}let A=jt(r[0]),T=Zt(a[1]),I=bd(d,f,b=>A+b*h*(l/((d-1)*h)),b=>T+b*h*(c/((f-1)*h)),x);e.push({g:I,N:p,elev:x,cls:D,mask:m,region:n.region,isl:n})}),e}var Mn=n=>new Ut(n),Sd={1:Mn(Ue.plain.color),2:Mn(Ue.hill.color),3:Mn(Ue.tableland.color),4:Mn(Ue.basin.color),5:Mn(Ue.mountain.color)},Ln=[[0,"#3c9a54"],[100,"#8cc56a"],[300,"#d7d97f"],[700,"#e3b866"],[1e3,"#d4924f"],[2e3,"#a5643b"],[3e3,"#7a4630"],[3600,"#eae6e1"],[4e3,"#ffffff"]].map(([n,t])=>[n,Mn(t)]);function i_(n,t){for(let e=0;e<Ln.length-1;e++)if(n<=Ln[e+1][0]){let i=Math.max(0,(n-Ln[e][0])/(Ln[e+1][0]-Ln[e][0]));return t.copy(Ln[e][1]).lerp(Ln[e+1][1],i)}return t.copy(Ln[Ln.length-1][1])}var s_=Mn("#1d4f7a"),Se=null,W={mode:"terrain",color:"landform",level:"elem",exag:6,focus:null,flood:0,raining:!1,rising:!1,month:7,city:"kaohsiung"},Ts=st("#scene"),bn=new ga({antialias:!Ps,powerPreference:"low-power"});bn.setPixelRatio(Math.min(Ps?1:xi?1.5:2,window.devicePixelRatio));Ts.appendChild(bn.domElement);var go=new Ka;go.domElement.className="labels";Ts.appendChild(go.domElement);var Un=new xa;Un.background=Mn("#bfe3f7");Un.fog=new _a("#bfe3f7",700,1700);var we=new Be(42,1,1,5e3),le=new Ja(we,bn.domElement);bn.domElement.style.touchAction="none";le.touches={ONE:Rn.ROTATE,TWO:Rn.DOLLY_PAN};le.screenSpacePanning=!1;le.zoomSpeed=1.2;["gesturestart","gesturechange","gestureend"].forEach(n=>document.addEventListener(n,t=>t.preventDefault(),{passive:!1}));document.addEventListener("touchmove",n=>{n.touches.length>1&&n.preventDefault()},{passive:!1});function wd(n){be=null;let t=we.position.clone().sub(le.target),e=qa.clamp(t.length()*n,le.minDistance,le.maxDistance);we.position.copy(le.target).add(t.setLength(e))}st("#zoomIn").onclick=()=>wd(.7);st("#zoomOut").onclick=()=>wd(1/.7);le.rotateSpeed=.6;le.addEventListener("start",()=>{be=null});var He={x:0,y:0,t:0,n:0};bn.domElement.addEventListener("pointerdown",n=>{He.n++,He.n===1?(He.x=n.clientX,He.y=n.clientY,He.t=performance.now()):He.t=0});bn.domElement.addEventListener("pointerup",n=>{if(He.n=Math.max(0,He.n-1),!He.t||performance.now()-He.t>450||Math.hypot(n.clientX-He.x,n.clientY-He.y)>8||(He.t=0,Se&&Se.onTap(n)))return;let t=["current","hakka","tribe","creature","island","sea","lf","peak","city","spot"];for(let e of t)for(let i of Ne[e]){if(!i.onClick||!i.o.visible||i.el.style.display==="none"||i.el.classList.contains("hid"))continue;let s=i.el.getBoundingClientRect();if(n.clientX>=s.left-4&&n.clientX<=s.right+4&&n.clientY>=s.top-4&&n.clientY<=s.bottom+4){i.onClick();return}}});bn.domElement.addEventListener("pointercancel",()=>{He.n=0,He.t=0});le.enableDamping=!0;le.maxPolarAngle=Math.PI*.49;le.minDistance=8;le.maxDistance=1400;Un.add(new ka("#ffffff","#4b6b3a",1.1));var Ed=new Ba("#fff6e0",2.2);Ed.position.set(-300,400,200);Un.add(Ed);var cn=new De;cn.scale.y=W.exag;Un.add(cn);var _o=new te(new Ui(1600,1400),new on({color:"#4a9fd8"}));_o.rotation.x=-Math.PI/2;_o.position.set(-150,0,-20);cn.add(_o);var Td=new on({vertexColors:!0}),At=t_(),ho=bd(At.nx,At.nz,n=>jt(qt.lon0)+n*(jt(qt.lon1)-jt(qt.lon0))/(At.nx-1),n=>Zt(qt.lat1)+n*(Zt(qt.lat0)-Zt(qt.lat1))/(At.nz-1),At.elev),Ad=new te(ho,Td);cn.add(Ad);var Cd=[];vn.forEach((n,t)=>n.zones.forEach(([e,i,s])=>Cd.push([jt(e),Zt(i),s,t])));function r_(n,t,e){let i=-1,s=1e9;for(let[r,a,o,l]of Cd){let c=Math.hypot(n-r,t-a)/o;c<s&&(s=c,i=l)}return s<1||s<2.4&&e>500||s<1.9&&vn[i].plains?i:-1}At.tribe=new Int8Array(At.elev.length).fill(-1);for(let n=0;n<At.elev.length;n++)At.mask[n]&&(At.tribe[n]=r_(jt(At.lonA[n]),Zt(At.latA[n]),At.elev[n]));var mr=Object.keys(Vi),a_=mr.map(n=>{let t=[1e9,1e9,-1e9,-1e9];return Vi[n].forEach(e=>e.forEach(([i,s])=>{t[0]=Math.min(t[0],i),t[1]=Math.min(t[1],s),t[2]=Math.max(t[2],i),t[3]=Math.max(t[3],s)})),t});function Rd(n,t){for(let e=0;e<mr.length;e++){let i=a_[e];if(!(n<i[0]||n>i[2]||t<i[1]||t>i[3])&&Vi[mr[e]].some(s=>co(n,t,s)))return e}return-1}var o_={\u57FA\u9686\u5E02:"N",\u53F0\u5317\u5E02:"N",\u65B0\u5317\u5E02:"N",\u6843\u5712\u5E02:"N",\u65B0\u7AF9\u5E02:"N",\u65B0\u7AF9\u7E23:"N",\u5B9C\u862D\u7E23:"N",\u82D7\u6817\u7E23:"C",\u53F0\u4E2D\u5E02:"C",\u5F70\u5316\u7E23:"C",\u5357\u6295\u7E23:"C",\u96F2\u6797\u7E23:"C",\u5609\u7FA9\u5E02:"S",\u5609\u7FA9\u7E23:"S",\u53F0\u5357\u5E02:"S",\u9AD8\u96C4\u5E02:"S",\u5C4F\u6771\u7E23:"S",\u6F8E\u6E56\u7E23:"S",\u82B1\u84EE\u7E23:"E",\u53F0\u6771\u7E23:"E",\u91D1\u9580\u7E23:"O",\u9023\u6C5F\u7E23:"O"};At.county=new Int8Array(At.elev.length).fill(-1);for(let n=0;n<At.elev.length;n++)At.mask[n]&&(At.county[n]=Rd(At.lonA[n],At.latA[n]));for(let n=0;n<4;n++)for(let t=0;t<At.elev.length;t++)if(!(!At.mask[t]||At.county[t]>=0))for(let e of[1,-1,At.nx,-At.nx]){let i=t+e;if(i>=0&&i<At.county.length&&At.county[i]>=0){At.county[t]=At.county[i];break}}for(let n=0;n<At.elev.length;n++)At.county[n]>=0&&(At.reg[n]=o_[mr[At.county[n]]]);var Pd=[];Pn.forEach(n=>n_(n).forEach(t=>{t.tribe=vn.findIndex(e=>e.island===n.id),t.county=Rd(n.lon,n.lat),Pd.push(t),cn.add(new te(t.g,Td))}));Pn.filter(n=>n.atoll).forEach(n=>{let[t,e,i]=n.atoll,s=new te(new Ia(i-1.3,i,64),new rn({color:"#8ff0e6",transparent:!0,opacity:.85,side:We}));s.rotation.x=-Math.PI/2,s.position.set(jt(t),.004,Zt(e)),cn.add(s);let r=new te(new Ra(i-1.3,64),new rn({color:"#5ec8e0",transparent:!0,opacity:.6}));r.rotation.x=-Math.PI/2,r.position.set(jt(t),.003,Zt(e)),cn.add(r)});var As=new te(new Ui(1600,1400),new Ua({color:"#2f7fe0",transparent:!0,opacity:.55,shininess:80,depthWrite:!1}));As.rotation.x=-Math.PI/2;As.position.set(-150,0,-20);As.visible=!1;cn.add(As);var _i=new Ut,ao=new Ut,l_={plain:1,hill:2,tableland:3,basin:4,mountain:5},md=Mn("#e9e4d4"),Id=Mn("#b5dd8c"),Ld=Mn("#1b5e20");function gd(n,t,e,i,s=-1,r=-1){if(!t)return i.copy(s_);if(W.color==="hakka"){let a=r>=0?In.top5[mr[r]]:null;return a?i.copy(Id).lerp(Ld,Math.min(1,Math.max(0,(a-28)/40))):i.copy(md),i.multiplyScalar(.84+.28*Math.min(1,n/3200)),i}if(W.color==="tribe")return s>=0&&(!W.tribeFocus||vn[s].id===W.tribeFocus)?i.set(vn[s].c):i.copy(md),i.multiplyScalar(.82+.3*Math.min(1,n/3200)),i;if(W.color==="veg"){let a=no.find(o=>n<o.to);return i.set(a.c),i.multiplyScalar(.85+.25*Math.min(1,n/3500)),i}if(W.color==="height")i_(n,i);else if(W.color==="region")i.set(hr[e].color),i.lerp(ao.set("#ffffff"),Math.min(.35,n/9e3)),i.multiplyScalar(.85+.25*Math.min(1,n/3e3));else{i.copy(Sd[t]);let a=t===5?Math.min(1,(n-1e3)/2900):0;i.lerp(ao.set(a>.9?"#ffffff":"#5a3a28"),a*.45)}return W.focus&&l_[W.focus]!==t?i.lerp(ao.set("#cfcfcf"),.78):W.focus&&W.color==="landform"&&W.mode==="terrain"&&i.lerp(ao.set("#3a3a3a"),.7),i}function gr(){let n=ho.attributes.color.array;for(let t=0;t<At.elev.length;t++)gd(At.elev[t],At.cls[t],At.reg[t],_i,At.tribe[t],At.county[t]),n[t*3]=_i.r,n[t*3+1]=_i.g,n[t*3+2]=_i.b;ho.attributes.color.needsUpdate=!0,Pd.forEach(t=>{let e=t.g.attributes.color.array;for(let i=0;i<t.N;i++)gd(t.elev[i],t.mask[i]?t.cls[i]:0,t.region,_i,t.tribe,t.county),e[i*3]=_i.r,e[i*3+1]=_i.g,e[i*3+2]=_i.b;t.g.attributes.color.needsUpdate=!0})}function Nn(n,t){let e=Math.round((n-qt.lon0)/(qt.lon1-qt.lon0)*(At.nx-1)),i=Math.round((qt.lat1-t)/(qt.lat1-qt.lat0)*(At.nz-1));if(e<0||i<0||e>=At.nx||i>=At.nz)return null;let s=i*At.nx+e;return At.mask[s]?At.elev[s]:null}function Dd(n,t){let e=null,i=1e9;return Pn.forEach(s=>{let r=Math.hypot(jt(s.lon)-jt(n),Zt(s.lat)-Zt(t));r<i&&(i=r,e=s)}),i<30?e:null}function xo(n,t){let e=Nn(n,t);if(e!=null)return e;let i=Dd(n,t);return i?Math.min(i.h,i.h*.5+10):5}var Ne={lf:[],peak:[],spot:[],island:[],ruler:[],city:[],tribe:[],sea:[],current:[],hakka:[],fest:[],creature:[]};function Ce(n,t,e,i,s,r,a){let o=document.createElement("div");o.className="lb "+r,o.innerHTML=t,a&&o.classList.add("clickable");let l=new gi(o);return l.position.set(jt(e),s/1e3,Zt(i)),cn.add(l),Ne[n].push({o:l,el:o,hM:s,onClick:a}),{o:l,el:o}}var c_={plain:"plain",basin:"basin",tableland:"tableland"};lr.forEach(n=>Ce("lf",n.name,n.label[0],n.label[1],(Nn(...n.label)||2e3)+400,"lf lf-mountain",()=>vr("mountain",n.name)));to.forEach(n=>Ce("lf",n.name,n.lon+.03,n.lat+.03,n.h+300,"lf lf-mountain",()=>vr("mountain",n.name)));Wc.forEach(n=>Ce("lf",n.name,n.lon,n.lat,(Nn(n.lon,n.lat)||300)+300,"lf lf-hill",()=>vr("hill",n.name)));cr.forEach(n=>Ce("lf",n.name,n.label[0],n.label[1],(Nn(...n.label)||n.h)+250,"lf lf-"+c_[n.type],()=>vr(n.type,n.name)));od.forEach(n=>Ce("peak",`\u25B2 ${n.name}<small>${n.h.toLocaleString()} \u516C\u5C3A</small>`,n.lon,n.lat,(Nn(n.lon,n.lat)||n.h)+120,"peak",()=>x_(n)));Pn.forEach(n=>Ce("island",`\u{1F3DD}\uFE0F ${n.name}`,n.lon,n.lat,n.h+400,"island",()=>eh(n)));Qn.forEach(n=>{let t=xo(n.lon,n.lat);n.h=t,n.lbl=Ce("spot",`<span class="pin">${n.i}</span><span class="nm">${n.n}</span>`,n.lon,n.lat,t+60,"spot",()=>th(n))});vn.forEach(n=>{n.lbl=Ce("tribe",`<span class="tdot" style="background:${n.c}"></span><b>${n.n}</b><small>${n.v}</small>`,n.vlon,n.vlat,xo(n.vlon,n.vlat)+80,"tribe",()=>vo(n))});Object.entries(In.top5).forEach(([n,t],e)=>{let i=Vi[n],s=i.reduce((o,l)=>l.length>o.length?l:o,i[0]),r=s.reduce((o,l)=>o+l[0],0)/s.length,a=s.reduce((o,l)=>o+l[1],0)/s.length;Ce("hakka",`<b>${e+1}. ${n.replace("\u53F0","\u81FA")}</b><small>\u5BA2\u5BB6\u4EBA\u53E3 ${t}%</small>`,r,a,(Nn(r,a)||100)+300,"hakka",()=>Mo())});In.areas.forEach(n=>Ce("hakka",`\u{1F3EE} ${n.n}`,n.lon,n.lat,(Nn(n.lon,n.lat)||100)+150,"hakka-area",()=>Mo(n)));{let n=document.createElement("style");n.textContent=dd,document.head.appendChild(n)}var Ud=n=>{if(!n.length)return"\u65E5\u671F\u4F9D\u90E8\u843D\u516C\u544A";let t=[[n[0],n[0]]];for(let e=1;e<n.length;e++){let i=t[t.length-1];n[e]===i[1]%12+1?i[1]=n[e]:t.push([n[e],n[e]])}return t.map(([e,i])=>e===i?`${e} \u6708`:`${e}\uFF5E${i} \u6708`).join("\u3001")};ln.forEach(n=>{let t=vn.find(e=>e.id===n.t);n.tribe=t,n.lbl=Ce("fest",`<div class="tpic" style="border-color:${t.c}"><img src="tribes/${t.id}.jpg" alt="" loading="lazy"></div><div class="sccap">${n.sacred?"\u{1F56F}\uFE0F ":""}${t.n.replace(/（.*）/,"")}\u30FB${n.n.replace(/（.*）/,"")}</div>`,t.vlon,t.vlat,xo(t.vlon,t.vlat)+80,"fest",()=>vo(t,n)),n.lbl.o.visible=!1});W.festMonth=new Date().getMonth()+1;function uo(){let n=W.mode==="tribes"&&W.ethnic!=="hakka",t=new Set;if(ln.forEach(i=>{let s=n&&i.m.includes(W.festMonth)&&(!W.tribeFocus||W.tribeFocus===i.t)&&!t.has(i.t);s&&t.add(i.t),i._v=s}),n&&W.tribeFocus&&!t.has(W.tribeFocus)){let i=ln.find(s=>s.t===W.tribeFocus);i&&(i._v=!0)}ln.forEach(i=>{i.lbl.o.visible=!!i._v});let e=new Set(ln.filter(i=>i._v).map(i=>i.t));vn.forEach(i=>{i.lbl&&(i.lbl.o.visible=n&&!e.has(i.id))}),typeof tn=="function"&&tn(300)}function h_(){let n=new Date().getMonth()+1;st("#monthStrip").innerHTML=Array.from({length:12},(e,i)=>`<button data-fm="${i+1}" class="${W.festMonth===i+1?"on":""} ${n===i+1?"now":""}">${i+1}\u6708</button>`).join(""),st("#monthStrip").querySelectorAll("[data-fm]").forEach(e=>e.onclick=()=>{W.festMonth=+e.dataset.fm,Qe("festmonth:"+W.festMonth),W.tribeFocus=null,gr(),po()});let t=ln.filter(e=>e.m.includes(W.festMonth));st("#festList").innerHTML=t.length?t.map(e=>`<button data-fi="${ln.indexOf(e)}"><span class="dot" style="background:${e.tribe.c}"></span><b>${e.tribe.n.replace(/（.*）/,"")}\u30FB${e.n}${e.sacred?" \u{1F56F}\uFE0F":""}</b><small>${Ud(e.m)}${e.approx?"\uFF08\u4F9D\u90E8\u843D\u800C\u7570\uFF09":""}</small></button>`).join(""):'<p class="muted">\u9019\u500B\u6708\u6C92\u6709\u5217\u51FA\u7684\u796D\u5178\u3002</p>',st("#festList").querySelectorAll("[data-fi]").forEach(e=>e.onclick=()=>{let i=ln[+e.dataset.fi];vo(i.tribe,i)}),uo()}{let n=document.createElement("style");n.textContent=ud,document.head.appendChild(n)}ur.forEach(n=>{let e=n.k==="sea"?0:xo(n.lon,n.lat)+40;n.lbl=Ce("creature",hd(n),n.lon,n.lat,e,"creature"+(n.k==="plant"?" cr-plant":""),()=>Vd(n)),n.lbl.o.visible=!1});var Nd=Ce("creature",Array.from({length:12},(n,t)=>`<i style="left:${t*37%66}px;top:${t*23%36}px;animation-delay:${t*.37%2.2}s"></i>`).join(""),119.93,26.19,0,"bluetears",()=>Fn(`<div class="tag-lf" style="background:#0288d1;color:#fff">\u{1F30A} \u6D77\u6D0B\u751F\u7269</div><h3>\u85CD\u773C\u6DDA\uFF08\u591C\u5149\u87F2\uFF09</h3><p>${W.level==="elem"?"\u6625\u5929\u5230\u590F\u5929\uFF084\uFF5E6 \u6708\u6700\u591A\uFF09\u7684\u665A\u4E0A\uFF0C\u99AC\u7956\u6D77\u908A\u7684\u6D77\u6D6A\u6703\u767C\u51FA\u85CD\u8272\u7684\u5149\uFF0C\u90A3\u662F\u4E00\u7A2E\u5F88\u5C0F\u5F88\u5C0F\u7684\u751F\u7269\u300C\u591C\u5149\u87F2\u300D\u88AB\u6D77\u6D6A\u652A\u52D5\u6642\u767C\u7684\u5149\u3002":"\u6E26\u97AD\u6BDB\u85FB\uFF08\u591C\u5149\u87F2\uFF09\u53D7\u6D77\u6D6A\u6216\u8239\u96BB\u64FE\u52D5\u6642\u767C\u51FA\u85CD\u8272\u751F\u7269\u87A2\u5149\uFF1B\u6BCF\u5E74 3\uFF5E9 \u6708\u51FA\u73FE\uFF0C4\uFF5E6 \u6708\u70BA\u76DB\u671F\uFF0C\u4EE5\u99AC\u7956\u5317\u7AFF\u3001\u5927\u5775\u4E00\u5E36\u6700\u8457\u540D\u3002\u5927\u91CF\u7E41\u6B96\u6642\u5438\u5F15\u4E01\u9999\u9B5A\uFF0C\u518D\u5F15\u4F86\u9ED1\u5C3E\u9DD7\u3001\u71D5\u9DD7\u6355\u98DF\u3002"}</p>`));Nd.o.visible=!1;var Fd=n=>{ur.forEach(t=>{t.lbl.o.visible=n&&(W.lifeFilter==="all"||W.lifeFilter===t.k||W.lifeFilter==="land"&&t.k==="air")}),Nd.o.visible=n&&W.lifeFilter!=="plant"&&W.lifeFilter!=="land"};W.lifeFilter="all";Hi.forEach(n=>Ce("city",`\u2614 ${n.name}`,n.lon,n.lat,(Nn(n.lon,n.lat)||30)+200,"city",()=>{W.city=n.id,st("#city").value=n.id,yo()}));var Kc=[{n:"\u592A\u5E73\u6D0B",lon:122.55,lat:23,d:"\u81FA\u7063\u6771\u908A\u662F\u592A\u5E73\u6D0B\uFF0C\u662F\u4E16\u754C\u4E0A\u6700\u5927\u7684\u6D77\u6D0B\u3002\u6771\u90E8\u6D77\u5CB8\u96E2\u6DF1\u6D77\u5F88\u8FD1\uFF0C\u6D77\u5E95\u5F88\u5FEB\u5C31\u8B8A\u5F97\u5F88\u6DF1\u3002",j:"\u81FA\u7063\u6771\u5074\u70BA\u592A\u5E73\u6D0B\uFF0C\u5927\u9678\u68DA\u72F9\u7A84\u3001\u6D77\u5E95\u9661\u964D\uFF0C\u8FD1\u5CB8\u5373\u70BA\u6DF1\u6D77\uFF1B\u9ED1\u6F6E\u6CBF\u6771\u90E8\u6D77\u57DF\u5317\u4E0A\uFF0C\u5E36\u4F86\u8C50\u5BCC\u7684\u9060\u6D0B\u9B5A\u985E\u3002"},{n:"\u5DF4\u58EB\u6D77\u5CFD",lon:120.9,lat:21.35,d:"\u81FA\u7063\u5357\u908A\u3001\u5728\u81FA\u7063\u548C\u83F2\u5F8B\u8CD3\u4E4B\u9593\u7684\u6D77\u5CFD\uFF0C\u662F\u8239\u96BB\u5F80\u4F86\u7684\u91CD\u8981\u901A\u9053\u3002",j:"\u4F4D\u65BC\u81FA\u7063\u5357\u7AEF\u8207\u83F2\u5F8B\u8CD3\u4E4B\u9593\uFF0C\u9023\u63A5\u592A\u5E73\u6D0B\u8207\u5357\u6D77\uFF0C\u662F\u91CD\u8981\u7684\u570B\u969B\u822A\u9053\uFF0C\u4E5F\u662F\u98B1\u98A8\u5E38\u7D93\u904E\u7684\u6D77\u57DF\u3002"},{n:"\u81FA\u7063\u6D77\u5CFD",lon:119.75,lat:24.15,d:"\u81FA\u7063\u897F\u908A\u3001\u5728\u81FA\u7063\u548C\u4E2D\u570B\u5927\u9678\u4E4B\u9593\u7684\u6D77\u3002\u6D77\u6C34\u6BD4\u8F03\u6DFA\uFF0C\u6F8E\u6E56\u7FA4\u5CF6\u5C31\u5728\u9019\u88E1\u3002",j:"\u4ECB\u65BC\u81FA\u7063\u8207\u4E2D\u570B\u5927\u9678\u4E4B\u9593\uFF0C\u5C6C\u65BC\u6DFA\u6D77\u7684\u5927\u9678\u68DA\uFF0C\u5E73\u5747\u6C34\u6DF1\u4E0D\u5230 100 \u516C\u5C3A\uFF1B\u6F8E\u6E56\u7FA4\u5CF6\u4F4D\u65BC\u6D77\u5CFD\u4E2D\u3002"},{n:"\u6771\u6D77",lon:121.6,lat:25.95,d:"\u81FA\u7063\u5317\u908A\u7684\u6D77\uFF0C\u5F80\u5317\u4E00\u76F4\u5EF6\u4F38\u5230\u65E5\u672C\u548C\u4E2D\u570B\u5927\u9678\u4E4B\u9593\u3002",j:"\u4F4D\u65BC\u81FA\u7063\u5317\u65B9\u3001\u4E9E\u6D32\u5927\u9678\u6771\u5074\u7684\u908A\u7DE3\u6D77\uFF0C\u5927\u90E8\u5206\u5C6C\u65BC\u5927\u9678\u68DA\u3002"}];Kc.forEach(n=>Ce("sea",`\u{1F30A} ${n.n}`,n.lon,n.lat,0,"sea",()=>Fn(`<div class="tag-lf" style="background:#5aa9e6;color:#fff">\u6D77\u57DF</div><h3>\u{1F30A} ${n.n}</h3><p>${W.level==="elem"?n.d:n.j}</p>`)));var pr=new De;cn.add(pr);(function(){let t=jt(122.32),e=Zt(23.55),i=new te(new Kn(2.4,4,2.4),new on({color:"#fff7d6"}));i.position.set(t,2,e),pr.add(i);for(let o=0;o<=4e3;o+=500){let l=o%1e3===0,c=new te(new Kn(l?6:3.5,.012,1.2),new on({color:l?"#d33":"#333"}));c.position.set(t+(l?3:1.8),o/1e3,e),pr.add(c),l&&Ce("ruler",o===0?"\u6D77\u5E73\u9762 0 \u516C\u5C3A":`${o.toLocaleString()} \u516C\u5C3A<small>\uFF1D ${o/1e3} \u516C\u91CC</small>`,122.32+.09,23.55,o,"ruler ruler-h")}let s=jt(119.75),r=Zt(22.2);[[0,25,"#222"],[25,50,"#fff"],[50,100,"#222"]].forEach(([o,l,c])=>{let h=new te(new Kn(l-o,.06,3),new on({color:c}));h.position.set(s+(o+l)/2,.03,r),pr.add(h)}),[0,25,50,100].forEach(o=>Ce("ruler",o===100?"100 \u516C\u91CC":`${o}`,119.75+o/Rs,22.2-.05,0,"ruler ruler-km")),Ce("ruler","\u2B06 \u5317",119.75,22.55,0,"ruler ruler-n")})();var _r=Ps?800:xi?2500:5e3,Qc=new ge,ze=new Float32Array(_r*6);Qc.setAttribute("position",new Me(ze,3));var Gi=new vs(Qc,new Cn({color:"#ffffff",transparent:!0,opacity:.9}));Gi.frustumCulled=!1;Gi.visible=!1;Un.add(Gi);var Cs=new De;Un.add(Cs);Cs.visible=!1;var u_=new on({color:"#f4f6f8",transparent:!0,opacity:.6,depthWrite:!1}),fo=[],Od=1,kd=_r;function d_(){fo=eo[W.month].zones.map(([i,s,r,a])=>[jt(i),Zt(a),jt(r),Zt(s)]);let t=Hi.find(i=>i.id===W.city),e=t.mm[W.month];kd=Math.round(_r*Math.min(1,.12+e/450)),Od=.8+Math.min(1.5,e/300);for(let i=0;i<_r;i++)Bd(i,!0);Cs.clear(),fo.forEach(([i,s,r,a],o)=>{let l=Math.max(4,Math.round((r-i)*(a-s)/900));for(let c=0;c<l;c++){let h=new te(new Ms(1,14,10),u_);h.scale.set(6+Dn(c,o)*6,1.6+Dn(o,c)*1.2,5+Dn(c+3,o)*5),h.position.set(i+Dn(c,o+5)*(r-i),42+Dn(c+1,o)*6,s+Dn(c+2,o)*(a-s)),Cs.add(h)}})}function Bd(n,t){let e=fo[n%fo.length]||[0,0,1,1],i=e[0]+Math.random()*(e[2]-e[0]),s=e[1]+Math.random()*(e[3]-e[1]),r=t?Math.random()*42:42,a=n*6;ze[a]=i,ze[a+1]=r,ze[a+2]=s,ze[a+3]=i+.3,ze[a+4]=r-2.6,ze[a+5]=s}function f_(n){let t=Math.max(0,W.flood/1e3*W.exag);for(let e=0;e<_r;e++){let i=e*6;if(e>=kd){ze[i+1]=ze[i+4]=-999;continue}let s=(40+e%7*3)*Od*n;ze[i+1]-=s,ze[i+4]-=s,ze[i]+=s*.08,ze[i+3]+=s*.08,(ze[i+4]<t||ze[i+1]<-5)&&Bd(e,!1)}Qc.attributes.position.needsUpdate=!0}var oo=[0,0,0,0,0,0];for(let n=0;n<At.cls.length;n++)oo[At.cls[n]]++;function Is(){let n=W.mode==="rain"?W.flood:0;As.visible=n>0,As.position.y=n/1e3;let t=[0,0,0,0,0,0];for(let a=0;a<At.cls.length;a++)At.cls[a]&&At.elev[a]<n&&t[At.cls[a]]++;let e=0,i=0;for(let a=1;a<6;a++)e+=oo[a],i+=t[a];st("#floodVal").innerHTML=`${Math.round(W.flood).toLocaleString()} <small>\u516C\u5C3A</small> \uFF1D ${(W.flood/1e3).toFixed(W.flood<1e3?2:1)} <small>\u516C\u91CC</small>`,st("#floodSlider").value=W.flood;let s=["plain","basin","tableland","hill","mountain"].map(a=>{let o=ti[a],l=oo[o]?Math.round(t[o]/oo[o]*100):0;return`<div class="fl-row"><span class="dot" style="background:${Ue[a].color}"></span>${Ue[a].name}<div class="bar"><i style="width:${l}%"></i></div><b>${l}%</b></div>`}).join(""),r=Qn.filter(a=>a.h<n);st("#floodStats").innerHTML=s+`<p class="fl-sum">\u81FA\u7063\u672C\u5CF6\u6709 <b>${Math.round(i/e*100)}%</b> \u7684\u571F\u5730\u5728\u6C34\u9762\u4E0B\u3002</p>`+(r.length?`<p class="fl-sum">\u88AB\u6DF9\u5230\u7684\u666F\u9EDE\uFF08${r.length}\uFF09\uFF1A${r.slice(0,14).map(a=>a.n).join("\u3001")}${r.length>14?"\u2026":""}</p>`:""),Qn.forEach(a=>a.lbl.el.classList.toggle("flooded",a.h<n)),st("#floodHint").textContent=p_(n)}function p_(n){return n>=1e3&&Qe("flood:1000"),n<=0?"\u6309\u300C\u958B\u59CB\u4E0B\u96E8\u300D\u6216\u62D6\u62C9\u6C34\u4F4D\uFF0C\u770B\u770B\u6C34\u6703\u6DF9\u5230\u54EA\u88E1\u3002":n<100?"\u5E73\u539F\u6700\u5148\u88AB\u6DF9\uFF1A\u5E73\u539F\u9AD8\u5EA6\u5927\u591A\u4E0D\u5230 100 \u516C\u5C3A\u3002":n<500?"\u5E73\u539F\u3001\u76C6\u5730\u90FD\u6DF9\u4E86\uFF0C\u53F0\u5730\u548C\u4E18\u9675\u9084\u9732\u5728\u6C34\u9762\u4E0A\u3002":n<1e3?"\u53EA\u5269\u4E18\u9675\u7684\u9AD8\u8655\u548C\u5C71\u5730\u9732\u51FA\u6C34\u9762\u3002\u4E18\u9675\u4E0D\u5230 1,000 \u516C\u5C3A\u3002":n<3e3?"\u8D85\u904E 1,000 \u516C\u5C3A\uFF0C\u53EA\u5269\u4E0B\u5C71\u5730\uFF01\u81FA\u7063\u8B8A\u6210\u4E00\u4E32\u7D30\u9577\u7684\u5CF6\u3002":n<3952?"\u53EA\u5269\u5E7E\u5EA7\u9AD8\u5C71\u7684\u5C71\u9802\uFF0C\u50CF\u5C0F\u5CF6\u4E00\u6A23\u3002":"\u9023\u7389\u5C71\uFF083,952 \u516C\u5C3A\uFF09\u90FD\u6DF9\u6C92\u4E86\uFF01"}function yo(){let n=Hi.find(c=>c.id===W.city),t=550,e=340,i=xi?210:170,s=e/12,r=n.mm.map((c,h)=>{let d=c/t*(i-30),f=h*s,p=Xc.find(m=>m.months.includes(h));return`<rect x="${f}" y="0" width="${s}" height="${i-18}" fill="${p.color}" opacity="${h===W.month?.55:.18}"/><rect class="bar-m" data-m="${h}" x="${f+3}" y="${i-18-d}" width="${s-6}" height="${d}" rx="3" fill="${h===W.month?"#1565c0":"#4a90d9"}"/><text x="${f+s/2}" y="${i-22-d}" font-size="${xi?13:9}" text-anchor="middle" fill="#234">${Math.round(c)}</text><text x="${f+s/2}" y="${i-5}" font-size="${xi?14:10}" text-anchor="middle" fill="#345">${xi?h+1:h+1+"\u6708"}</text>`}).join(""),a=ld.slice(0,3).map(c=>{let h=i-18-c.mm/t*(i-30);return`<line x1="0" x2="${e}" y1="${h}" y2="${h}" stroke="#c33" stroke-dasharray="3 3" stroke-width=".7"/><text x="${e-2}" y="${h-2}" font-size="${xi?12:8}" text-anchor="end" fill="#c33">${c.mm}mm</text>`}).join("");st("#rainChart").innerHTML=`<svg viewBox="0 0 ${e} ${i}" width="100%">${r}${a}</svg>`,st("#rainChart").querySelectorAll(".bar-m").forEach(c=>c.addEventListener("click",()=>zd(+c.dataset.m)));let o=n.mm.reduce((c,h)=>c+h,0);st("#seasonBox").innerHTML=Xc.map(c=>{let h=c.months.reduce((d,f)=>d+n.mm[f],0);return`<div class="sea" style="background:${c.color}"><b>${c.name}</b><span>${c.months.map(d=>d+1).join("\u3001")}\u6708</span><em>${Math.round(h).toLocaleString()} mm</em><i>${Math.round(h/o*100)}%</i></div>`}).join(""),st("#rainTotal").innerHTML=`<b>${n.name}</b> \u4E00\u5E74\u7D04 <b>${Math.round(o).toLocaleString()}</b> \u6BEB\u7C73\uFF08mm\uFF09${n.src==="book"?'<span class="tag book">\u8AB2\u672C\u8CC7\u6599</span>':'<span class="tag cwa">\u88DC\u5145\uFF1A\u6C23\u8C61\u7F72\u5E73\u5747\u7D04\u7565\u503C</span>'}${n.note?`<br><small>${n.note}</small>`:""}`;let l=eo[W.month];st("#monthInfo").innerHTML=`<h4>${W.month+1} \u6708\uFF1A${l.why}</h4><p>${l.elem}</p><p class="muted">\u96E8\u4E0B\u6700\u591A\u7684\u5730\u65B9\uFF1A<b>${l.where}</b>\uFF083D \u5730\u5716\u4E0A\u6709\u96F2\u7684\u5730\u65B9\uFF09</p>`,st("#monthSel").value=W.month,d_()}function zd(n){W.month=n,yo(),Qe("month:"+(n+1))}var qe=st("#info");function Fn(n){qe.innerHTML=`<button class="x" aria-label="\u95DC\u9589">\u2715</button>${n}`,qe.classList.add("show"),qe.scrollTop=0,qe.querySelector(".x").onclick=()=>{qe.classList.remove("show"),ni()},Mr()&&document.body.classList.add("panel-min"),ni()}var yr=n=>W.level==="elem"?n.elem:n.junior;function m_(n){return n==="mountain"?lr.map(t=>t.name).concat(to.map(t=>t.name)):n==="hill"?Wc.map(t=>t.name):cr.filter(t=>t.type===n).map(t=>t.name)}function vr(n,t){let e=Ue[n],i=Qn.filter(s=>s.t===n);Fn(`<div class="tag-lf" style="background:${e.color}">${e.icon} ${e.name}</div><h3>${t||e.name}</h3><p>${yr(e)}</p>
    <p><b>\u8AB2\u672C\u8209\u4F8B\uFF1A</b>${m_(n).join("\u3001")}</p>
    <p><b>\u9644\u8FD1\u666F\u9EDE\uFF1A</b></p><ul class="spot-list">${i.map(s=>`<li data-n="${s.n}">${s.i} ${s.n}</li>`).join("")}</ul>
    <button class="btn-sm" id="focusBtn">\u53EA\u770B\u300C${e.name}\u300D\u5728\u54EA\u88E1</button>`),qe.querySelectorAll(".spot-list li").forEach(s=>s.onclick=()=>{let r=Qn.find(a=>a.n===s.dataset.n);On(r.lon,r.lat,60),th(r)}),st("#focusBtn").onclick=()=>nh(n)}function _d(n,t,e){var r;if(Nn(t,e)==null)return"";let s=Math.round((qt.lat1-e)/(qt.lat1-qt.lat0)*(At.nz-1))*At.nx+Math.round((t-qt.lon0)/(qt.lon1-qt.lon0)*(At.nx-1));return((r=Ue[Kg[At.cls[s]]])==null?void 0:r.name)||""}var Hd={mountain:"\u5C71\u5730",hill:"\u4E18\u9675",tableland:"\u53F0\u5730",basin:"\u76C6\u5730",plain:"\u5E73\u539F",coast:"\u6D77\u5CB8",volcano:"\u706B\u5C71",island:"\u5916\u5CF6"};function g_(n){let t=Qa[n];return t?`<figure class="ph"><img src="photos/${t.f}" alt="${n}" loading="lazy"><figcaption>\u{1F4F7} ${t.a||"\u4F5A\u540D"}\u30FB${t.l}\u30FB<a href="${t.u}" target="_blank" rel="noopener">Wikimedia Commons</a></figcaption></figure>`:""}function th(n){var t;Qe("spot:"+n.t),Fn(`${g_(n.n)}<div class="tag-lf" style="background:${((t=Ue[n.t])==null?void 0:t.color)||"#7fb3d5"}">${Hd[n.t]}</div><h3>${n.i} ${n.n}</h3><p>${n.d}</p>
    <p class="muted">\u9019\u88E1\u5927\u7D04\u6D77\u62D4 <b>${Math.round(n.h).toLocaleString()} \u516C\u5C3A</b>\uFF08${(n.h/1e3).toFixed(2)} \u516C\u91CC\uFF09${_d(n.h,n.lon,n.lat)?`\uFF0C\u5730\u5716\u4E0A\u5C6C\u65BC\u300C${_d(n.h,n.lon,n.lat)}\u300D`:""}\u3002</p>`)}function vo(n,t){Qe("tribe:"+n.id),W.tribeFocus=n.id,gr(),po();let e=ln.filter(s=>s.t===n.id);t&&ln.forEach(s=>{s._force=s===t}),Fn(`<figure class="ph"><img src="tribes/${n.id}.jpg" alt="${n.n}"><figcaption>\u{1F3A8} \u63D2\u5716\u7531 AI\uFF08Gemini\uFF09\u7E6A\u88FD\uFF0C\u50C5\u4F9B\u793A\u610F\uFF0C\u4E0D\u4EE3\u8868\u771F\u5BE6\u670D\u98FE\u7D30\u7BC0</figcaption></figure><div class="tag-lf" style="background:${n.c};color:#fff">\u{1FAB6} \u539F\u4F4F\u6C11\u65CF</div><h3>${n.n}</h3>
    <p><b>\u4F4F\u5728\u54EA\u88E1\uFF1A</b>${n.where}</p><p>${yr(n)}</p>
    ${e.length?`<p><b>\u{1F4C5} \u91CD\u8981\u796D\u5178\uFF1A</b></p><ul class="festcard">${e.map(s=>`<li class="${s===t?"hl":""}"><b>${s.n}</b>${s.sacred?' <em class="sacredtag">\u{1F56F}\uFE0F \u795E\u8056\u796D\u5178</em>':""}<br><small>${Ud(s.m)}${s.approx?"\uFF08\u4F9D\u90E8\u843D\u800C\u7570\uFF0C\u4EE5\u539F\u6C11\u6703\u8207\u90E8\u843D\u516C\u544A\u70BA\u6E96\uFF09":""}</small><br>${s.d}</li>`).join("")}</ul>`:""}
    <p class="muted">\u5730\u5716\u4E0A\u7684\u4EE3\u8868\u90E8\u843D\uFF1A<b>${n.v}</b>\u3002\u5F69\u8272\u7BC4\u570D\u662F\u4E3B\u8981\u5206\u5E03\u5730\u5340\u7684\u793A\u610F\uFF0C\u4E0D\u662F\u7CBE\u78BA\u7684\u754C\u7DDA\uFF1B\u73FE\u5728\u4E5F\u6709\u5F88\u591A\u65CF\u4EBA\u4F4F\u5728\u57CE\u5E02\u88E1\u3002</p>
    <button class="btn-sm" id="tribeAll">\u770B\u5168\u90E8 17 \u65CF</button>`),st("#tribeAll").onclick=()=>{W.tribeFocus=null,gr(),po(),qe.classList.remove("show")},t&&(ln.forEach(s=>{s.lbl.o.visible=s===t}),typeof tn=="function"&&tn(300));let i=n.island?Pn.find(s=>s.id===n.island):null;On(n.vlon,n.vlat,i?45:130)}function po(){st("#monthStrip")&&h_(),st("#tribeList").innerHTML=vn.map((n,t)=>`<button data-t="${n.id}" class="${W.tribeFocus===n.id?"on":""}"><img class="tthumb" src="tribes/${n.id}.jpg" alt="" loading="lazy" style="border-color:${n.c}"><b>${t+1}. ${n.n}${n.isNew?' <em class="new">2026 \u65B0\u6838\u5B9A</em>':""}</b><small>${n.where}</small></button>`).join(""),st("#tribeList").querySelectorAll("button").forEach(n=>n.onclick=()=>vo(vn.find(t=>t.id===n.dataset.t)))}function Mo(n){let t=Object.entries(In.top5).map(([e,i],s)=>`<div class="fl-row"><span class="dot" style="background:#${Id.clone().lerp(Ld,Math.min(1,Math.max(0,(i-28)/40))).getHexString()}"></span>${e.replace("\u53F0","\u81FA")}<div class="bar"><i style="width:${i}%;background:#2e7d32"></i></div><b>${i}%</b></div>`).join("");Fn(`<div class="tag-lf" style="background:#2e7d32;color:#fff">\u{1F3EE} \u5BA2\u5BB6</div><h3>${n?n.n:"\u81FA\u7063\u7684\u5BA2\u5BB6\u4EBA"}</h3>
    ${n?`<p>${n.d}</p>`:""}<p>${yr(In)}</p>
    <p><b>\u5168\u81FA\u5BA2\u5BB6\u4EBA\u53E3\uFF1A</b>${In.total}</p><p><b>\u5BA2\u5BB6\u4EBA\u53E3\u6BD4\u7387\u524D\u4E94\u540D\u7E23\u5E02\uFF1A</b></p>${t}
    <p class="muted">\u8CC7\u6599\u4F86\u6E90\uFF1A${In.source}\u3002\u984F\u8272\u8D8A\u6DF1\uFF0C\u5BA2\u5BB6\u4EBA\u53E3\u6BD4\u7387\u8D8A\u9AD8\uFF1B\u5176\u4ED6\u7E23\u5E02\u672A\u4E0A\u8272\u3002</p>`),n&&On(n.lon,n.lat,160)}function Vd(n){Qe("creature:"+n.id),n.k==="sea"&&Qe("creature:sea");let t=io[n.n],e=t?`<figure class="ph"><img src="creatures/${t.f}" alt="${n.n}" loading="lazy"><figcaption>\u{1F4F7} ${t.a}\u30FB${t.l}\u30FB<a href="${t.u}" target="_blank" rel="noopener">Wikimedia Commons</a></figcaption></figure>`:"",i={land:"\u{1F98C} \u9678\u5730\u52D5\u7269",air:"\u{1F426} \u5929\u7A7A",sea:"\u{1F42C} \u6D77\u6D0B\u751F\u7269",plant:"\u{1F332} \u690D\u7269"}[n.k];Fn(`${e}<div class="tag-lf" style="background:#43a047;color:#fff">${i}</div><h3>${n.n}</h3><p><b>\u4F4F\u5728\u54EA\u88E1\uFF1A</b>${n.h}</p><p>${yr(n)}</p>`),On(n.lon,n.lat,n.k==="sea"?120:90)}function __(){let n=[["land","\u{1F98C} \u9678\u5730\u52D5\u7269"],["air","\u{1F426} \u5929\u7A7A"],["sea","\u{1F42C} \u6D77\u6D0B\u751F\u7269"],["plant","\u{1F332} \u690D\u7269"]];st("#lifeList").innerHTML=n.map(([t,e])=>`<h4>${e}</h4><ul class="cards">${ur.filter(i=>i.k===t).map(i=>`<li data-cr="${i.id}">${io[i.n]?`<img src="creatures/${io[i.n].f}" alt="" loading="lazy">`:""}<span>${i.n}</span></li>`).join("")}</ul>`).join(""),st("#lifeList").querySelectorAll("[data-cr]").forEach(t=>t.onclick=()=>Vd(ur.find(e=>e.id===t.dataset.cr))),st("#vegLegend").innerHTML=no.map((t,e)=>`<div><span class="dot" style="background:${t.c}"></span><span><b>${t.n}</b>\uFF08${e?no[e-1].to.toLocaleString():0}${t.to>5e3?" \u516C\u5C3A\u4EE5\u4E0A":"\uFF5E"+t.to.toLocaleString()+" \u516C\u5C3A"}\uFF09<small>${t.d}</small></span></div>`).join("")+'<p class="muted">\u6D77\u62D4\u8D8A\u9AD8\u8D8A\u51B7\uFF0C\u690D\u7269\u5C31\u8DDF\u8457\u6539\u8B8A\uFF0C\u9019\u53EB\u300C\u690D\u7269\u5782\u76F4\u5206\u5E03\u300D\u3002\u5404\u7248\u672C\u8AB2\u672C\u7684\u5206\u6CD5\u7565\u6709\u4E0D\u540C\u3002</p>'}function x_(n){Qe("peak:"+n.name),Fn(`<div class="tag-lf" style="background:${Ue.mountain.color}">\u26F0\uFE0F \u5C71\u5730</div><h3>\u25B2 ${n.name}</h3><p>\u9AD8\u5EA6 <b>${n.h.toLocaleString()} \u516C\u5C3A</b>\uFF1D ${(n.h/1e3).toFixed(3)} \u516C\u91CC${n.note?`\uFF0C${n.note}`:""}\u3002</p>
    <p class="muted">${W.level==="elem"?"\u5982\u679C\u4E00\u5C64\u6A13\u5927\u7D04 3 \u516C\u5C3A\uFF0C"+n.name+"\u5DEE\u4E0D\u591A\u6709 "+Math.round(n.h/3).toLocaleString()+" \u5C64\u6A13\u90A3\u9EBC\u9AD8\uFF01":"\u81FA\u7063\u9762\u7A4D\u4E0D\u5927\uFF0C\u537B\u6709\u5169\u767E\u591A\u5EA7 3,000 \u516C\u5C3A\u4EE5\u4E0A\u7684\u9AD8\u5C71\uFF0C\u662F\u677F\u584A\u64E0\u58D3\u5F62\u6210\u7684\u5E74\u8F15\u5C71\u8108\u3002"}</p>`)}function eh(n){let t=n.feat?`<p><b>\u{1F3DE}\uFE0F \u5730\u666F\uFF1A</b>${n.feat.land}</p><p><b>\u{1F389} \u4EBA\u6587\u8207\u6D3B\u52D5\uFF1A</b>${n.feat.culture}</p>${n.feat.food?`<p><b>\u{1F37D}\uFE0F \u7279\u8272\u7F8E\u98DF\uFF1A</b>${n.feat.food}</p>`:""}`:"";n.kind==="\u706B\u5C71\u5CF6"&&Qe("volcanic");let e=Math.round(Math.hypot(jt(n.lon)-jt(120.3),Zt(n.lat)-Zt(22.62)));Fn(`<div class="tag-lf" style="background:${hr[n.region].color}">${n.kind}</div><h3>\u{1F3DD}\uFE0F ${n.name}</h3><p>${yr(n)}</p>${t}
    <p class="muted">\u6700\u9AD8\u9EDE\u7D04 <b>${n.h} \u516C\u5C3A</b>\uFF1B\u8DDD\u96E2\u9AD8\u96C4\u76F4\u7DDA\u7D04 <b>${e} \u516C\u91CC</b>\u3002</p>`),On(n.lon,n.lat,Math.max(30,n.id==="dongsha"?60:n.id==="penghu"?70:40))}var be=null;function On(n,t,e,i=.9){let s=jt(n),r=Zt(t),a=new C(s,0,r),o=-.35,l=new C(s+Math.sin(o)*Math.sin(i)*e,Math.cos(i)*e,r+Math.cos(o)*Math.sin(i)*e);be={t:0,p0:we.position.clone(),p1:l,c0:le.target.clone(),c1:a}}function Gd(){On(121.05,23.55,500,1)}function y_(){be={t:0,p0:we.position.clone(),p1:new C(jt(120.95),560,Zt(23.62)+1),c0:le.target.clone(),c1:new C(jt(120.95),0,Zt(23.62))}}function v_(){be={t:0,p0:we.position.clone(),p1:new C(jt(119.4),1050,Zt(23.4)+260),c0:le.target.clone(),c1:new C(jt(119.4),0,Zt(23.4))}}function nh(n){W.focus=W.focus===n?null:n,W.focus&&Qe("float:"+W.focus),document.querySelectorAll(".legend [data-lf]").forEach(t=>t.classList.toggle("on",t.dataset.lf===W.focus)),gr(),Se.setFloat(W.color==="landform"&&W.mode==="terrain"?W.focus:null)}function ei(n){W.color=n,document.querySelectorAll("[data-color]").forEach(t=>t.classList.toggle("on",t.dataset.color===n)),M_(),gr(),Se&&(Se.countyLines.visible=n==="region"||n==="hakka",n!=="landform"?Se.setFloat(null):W.focus&&Se.setFloat(W.focus))}function M_(){let n=st("#legend");W.color==="landform"?n.innerHTML=["plain","basin","tableland","hill","mountain"].map(t=>`<button data-lf="${t}" class="${W.focus===t?"on":""}"><span class="dot" style="background:${Ue[t].color}"></span>${Ue[t].icon} ${Ue[t].name}</button>`).join(""):W.color==="region"?n.innerHTML=Object.values(hr).map(t=>`<div class="rg"><span class="dot" style="background:${t.color}"></span><b>${t.name}</b><small>${t.list}</small></div>`).join("")+'<p class="muted">\u4F9D\u570B\u767C\u6703\u5340\u57DF\u5283\u5206\uFF1B\u6709\u7684\u8AB2\u672C\u628A\u5B9C\u862D\u6B78\u5728\u6771\u90E8\u3002</p>':n.innerHTML=`<div class="hyp">${Ln.slice(0,-1).map(([t,e])=>`<span style="background:#${e.getHexString()}">${t.toLocaleString()}</span>`).join("")}</div><p class="muted">\u55AE\u4F4D\uFF1A\u516C\u5C3A\uFF08m\uFF09\u3002\u548C\u8AB2\u672C\u300C\u5206\u5C64\u8A2D\u8272\u5716\u300D\u4E00\u6A23\uFF1A\u8D8A\u9AD8\u984F\u8272\u8D8A\u6DF1\uFF0C\u6700\u9AD8\u8655\u662F\u767D\u8272\u3002</p>`,n.querySelectorAll("[data-lf]").forEach(t=>t.onclick=()=>{nh(t.dataset.lf),vr(t.dataset.lf)})}function bo(n){W.mode!==n&&qe.classList.remove("show"),W.mode=n,document.querySelectorAll(".tabs [data-mode]").forEach(i=>i.classList.toggle("on",i.dataset.mode===n)),document.querySelectorAll(".pane").forEach(i=>i.hidden=i.dataset.pane!==n);let t=["tribe","hakka"];n==="life"?(__(),st("#vegToggle").checked&&W.color!=="veg"&&(W.prevColor2=W.color,ei("veg"))):W.color==="veg"&&ei(W.prevColor2||"landform"),Fd(n==="life"),n==="tribes"?(t.includes(W.color)||(W.prevColor=W.color),sh(W.ethnic||"tribe")):t.includes(W.color)&&(W.tribeFocus=null,ei(W.prevColor||"landform")),Se&&(Se.showCurrents(n==="ocean"),n==="ocean"&&Se.renderCurrents(),n!=="terrain"?(Se.setFloat(null),Se.closePlates(),Se.clearProfile()):W.focus&&W.color==="landform"&&Se.setFloat(W.focus));let e=n==="rain";Gi.visible=Cs.visible=e&&W.raining,Ne.city.forEach(i=>i.o.visible=e),e?yo():W.rising=!1,Is(),n==="spots"&&b_(),ih()}function b_(){let n=["mountain","hill","tableland","basin","plain","volcano","coast","island"];st("#spotList").innerHTML=n.map(t=>{var e;return`<h4>${((e=Ue[t])==null?void 0:e.icon)||(t==="coast"?"\u{1F30A}":t==="volcano"?"\u{1F30B}":"\u{1F3DD}\uFE0F")} ${Hd[t]}</h4><ul class="cards">${Qn.filter(i=>i.t===t).map(i=>`<li data-n="${i.n}">${Qa[i.n]?`<img src="photos/${Qa[i.n].f}" alt="" loading="lazy">`:`<span class="noimg">${i.i}</span>`}<span>${i.i} ${i.n}</span></li>`).join("")}</ul>`}).join(""),st("#spotList").querySelectorAll("li").forEach(t=>t.onclick=()=>{let e=Qn.find(s=>s.n===t.dataset.n),i=Dd(e.lon,e.lat);On(e.lon,e.lat,e.t==="island"?40:70),th(e)})}function ih(){let n=s=>st("#"+s).checked,t=W.mode==="tribes",e=W.mode==="ocean",i=t||e||W.mode==="life";Ne.lf.forEach(s=>s.o.visible=n("tgLf")&&!i),Ne.peak.forEach(s=>s.o.visible=n("tgPeak")&&!i),Ne.spot.forEach(s=>s.o.visible=(n("tgSpot")||W.mode==="spots")&&!i),Ne.tribe.forEach(s=>s.o.visible=t&&W.ethnic!=="hakka"),Ne.hakka.forEach(s=>s.o.visible=t&&W.ethnic==="hakka"),typeof uo=="function"&&uo(),Ne.island.forEach(s=>s.o.visible=n("tgIsland")),Ne.ruler.forEach(s=>s.o.visible=n("tgRuler")),Ne.sea.forEach(s=>s.o.visible=n("tgSea")||e),pr.visible=n("tgRuler")}function Wd(n){W.level=n,document.querySelectorAll(".seg [data-level]").forEach(t=>t.classList.toggle("on",t.dataset.level===n)),document.body.dataset.level=n,qe.classList.remove("show")}document.querySelectorAll(".tabs [data-mode]").forEach(n=>n.onclick=()=>bo(n.dataset.mode));document.querySelectorAll("[data-color]").forEach(n=>n.onclick=()=>ei(n.dataset.color));document.querySelectorAll(".seg [data-level]").forEach(n=>n.onclick=()=>Wd(n.dataset.level));["tgLf","tgPeak","tgSpot","tgIsland","tgRuler","tgSea"].forEach(n=>st("#"+n).onchange=ih);st("#tgSaver").checked=Ps;st("#tgSaver").onchange=n=>{try{localStorage.setItem("tw3d_saver",n.target.checked?"1":"0")}catch{}location.reload()};function mo(){let n=st("#hint");n.hidden=!1,n.classList.add("show"),clearTimeout(mo.t),mo.t=setTimeout(()=>n.classList.remove("show"),7e3)}st("#btnHint").onclick=mo;st("#hint").onclick=()=>st("#hint").classList.remove("show");st("#exag").oninput=n=>{W.exag=+n.target.value,cn.scale.y=W.exag,st("#exagVal").textContent="\xD7"+W.exag};st("#btnHome").onclick=Gd;st("#btnTop").onclick=y_;st("#btnAll").onclick=v_;st("#islandBtns").innerHTML=Pn.map(n=>`<button data-isl="${n.id}">${n.name}</button>`).join("");st("#islandBtns").querySelectorAll("button").forEach(n=>n.onclick=()=>eh(Pn.find(t=>t.id===n.dataset.isl)));st("#city").innerHTML=Hi.map(n=>`<option value="${n.id}">${n.name}\uFF08${hr[n.region].name}\uFF09${n.src==="book"?"\u30FB\u8AB2\u672C":""}</option>`).join("");st("#city").value=W.city;st("#city").onchange=n=>{W.city=n.target.value,yo(),Qe("city:"+Hi.find(t=>t.id===W.city).region)};st("#monthSel").innerHTML=eo.map((n,t)=>`<option value="${t}">${t+1} \u6708</option>`).join("");st("#monthSel").onchange=n=>zd(+n.target.value);st("#btnRain").onclick=()=>{W.raining=!W.raining,W.rising=W.raining,Gi.visible=Cs.visible=W.raining,st("#btnRain").textContent=W.raining?"\u23F8 \u505C\u6B62\u4E0B\u96E8":"\u{1F327}\uFE0F \u958B\u59CB\u4E0B\u96E8\uFF08\u6C34\u4F4D\u4E0A\u5347\uFF09"};st("#floodSlider").oninput=n=>{W.flood=+n.target.value,W.rising=!1,Is()};st("#btnDrain").onclick=()=>{W.flood=0,W.rising=!1,Is()};document.querySelectorAll("[data-flood]").forEach(n=>n.onclick=()=>{W.flood=+n.dataset.flood,W.rising=!1,Is()});st("#panelToggle").onclick=()=>{document.body.classList.toggle("panel-min"),ni()};var Mr=()=>window.innerWidth<=900;Mr()&&document.body.classList.add("panel-min");document.querySelectorAll(".tabs [data-mode]").forEach(n=>n.addEventListener("click",()=>{document.body.classList.remove("panel-min"),ni()}));st("#vegToggle").onchange=n=>{n.target.checked?(W.prevColor2=W.color,ei("veg")):ei(W.prevColor2||"landform")};document.querySelectorAll("[data-life]").forEach(n=>n.onclick=()=>{W.lifeFilter=n.dataset.life,document.querySelectorAll("[data-life]").forEach(t=>t.classList.toggle("on",t===n)),Fd(!0),tn()});function sh(n){n==="hakka"&&Qe("hakka"),W.ethnic=n,W.tribeFocus=null,document.querySelectorAll("#ethChips [data-eth]").forEach(t=>t.classList.toggle("on",t.dataset.eth===n)),st("#tribeBox").hidden=n!=="tribe",st("#hakkaBox").hidden=n!=="hakka",n==="tribe"&&po(),ei(n),ih(),uo()}document.querySelectorAll("#ethChips [data-eth]").forEach(n=>n.onclick=()=>{sh(n.dataset.eth),n.dataset.eth==="hakka"?Mo():qe.classList.remove("show")});st("#hakkaAreas").innerHTML=In.areas.map((n,t)=>`<button class="chip" data-ha="${t}">\u{1F3EE} ${n.n}</button>`).join("");st("#hakkaAreas").querySelectorAll("[data-ha]").forEach(n=>n.onclick=()=>Mo(In.areas[+n.dataset.ha]));st("#seaBtns").innerHTML=Kc.map((n,t)=>`<button class="chip" data-sea="${t}">\u{1F30A} ${n.n}</button>`).join("");st("#seaBtns").querySelectorAll("[data-sea]").forEach(n=>n.onclick=()=>{let t=Kc[+n.dataset.sea];On(t.lon,t.lat,420,.8),Ne.sea[+n.dataset.sea].onClick()});st("#oceanIslands").innerHTML=["guishan","keelungislet","daqiu","lanyu","green","liuqiu","penghu","dongsha"].map(n=>{let t=Pn.find(e=>e.id===n);return`<button data-isl2="${n}">${t.name}</button>`}).join("");st("#oceanIslands").querySelectorAll("[data-isl2]").forEach(n=>n.onclick=()=>eh(Pn.find(t=>t.id===n.dataset.isl2)));st("#profBtns").innerHTML=$c.map((n,t)=>`<button class="chip" data-prof="${t}">${n.n}</button>`).join("")+'<button class="chip" id="btnPick">\u270F\uFE0F \u81EA\u5DF1\u9078\u5169\u9EDE</button>';st("#profBtns").querySelectorAll("[data-prof]").forEach(n=>n.onclick=()=>{let t=$c[+n.dataset.prof];Se.drawProfile(t.a,t.b,t.n)});st("#btnPick").onclick=()=>{Mr()&&(document.body.classList.add("panel-min"),ni()),Se.startPick()};st("#btnPlates").onclick=()=>{Mr()&&(document.body.classList.add("panel-min"),ni()),Se.openPlates()};le.listenToKeyEvents(window);le.keyPanSpeed=28;function S_(n,t){be=null;let e=we.position.distanceTo(le.target)*.15,i=new C;we.getWorldDirection(i),i.y=0,i.normalize();let r=new C().crossVectors(i,new C(0,1,0)).normalize().multiplyScalar(n*e).add(i.multiplyScalar(t*e));we.position.add(r),le.target.add(r),le.update(),tn()}[["panL",-1,0],["panR",1,0],["panU",0,1],["panD",0,-1]].forEach(([n,t,e])=>st("#"+n).onclick=()=>S_(t,e));Se=pd({scene:Un,world:cn,camera:we,controls:le,renderer:bn,mainGeo:ho,mainMesh:Ad,seaMesh:_o,M:At,G:qt,px:jt,pz:Zt,KX:Rs,KZ:xr,heightAt:Nn,state:W,openInfo:Fn,info:qe,$:st,LF_COLOR:Sd,CLS:ti,labels:Ne,addLabel:Ce,wake:n=>tn(n),flyTo:(...n)=>On(...n),mission:n=>Qe(n)});function Yc(){try{return new Set(JSON.parse(localStorage.getItem("tw3d_done")||"[]"))}catch{return new Set}}function Qe(n){let t=Yc(),e=null;for(let[i,s]of Object.entries(ro))for(let r of s)r.ev===n&&!t.has(i+"|"+r.ev)&&(t.add(i+"|"+r.ev),e=r);if(e){try{localStorage.setItem("tw3d_done",JSON.stringify([...t]))}catch{}jc("\u2705 \u4EFB\u52D9\u5B8C\u6210\uFF1A"+e.q),rh()}}function jc(n){let t=st("#toast");t.textContent=n,t.classList.add("show"),clearTimeout(jc.t),jc.t=setTimeout(()=>t.classList.remove("show"),2600)}function rh(){let n=Yc();document.querySelectorAll(".pane").forEach(t=>{let e=t.dataset.pane,i=ro[e];if(!i)return;let s=t.querySelector(".mission"),r=s?s.open:!1;s||(s=document.createElement("details"),s.className="mission",t.prepend(s));let a=i.filter(o=>n.has(e+"|"+o.ev)).length;s.innerHTML=`<summary>\u{1F3AF} \u5C0F\u4EFB\u52D9 ${a}/${i.length}${a===i.length?" \u2B50 \u5168\u90E8\u5B8C\u6210\uFF01":""}</summary><ul>${i.map(o=>`<li class="${n.has(e+"|"+o.ev)?"done":""}">${n.has(e+"|"+o.ev)?"\u2705":"\u2B1C"} ${o.q}</li>`).join("")}</ul><button class="reset">\u91CD\u65B0\u958B\u59CB</button>`,s.open=r,s.querySelector(".reset").onclick=()=>{let o=Yc();i.forEach(l=>o.delete(e+"|"+l.ev));try{localStorage.setItem("tw3d_done",JSON.stringify([...o]))}catch{}rh()}})}{let n=document.createElement("style");n.textContent=fd,document.head.appendChild(n)}function Xd(n){let t=so[n]||so.terrain;st("#guide .gbody").innerHTML=`<div class="gtabs">${Object.entries(so).map(([e,i])=>`<button data-g="${e}" class="${e===n?"on":""}">${i.title}</button>`).join("")}</div>
    <h2>\u6559\u5B78\u6307\u5F15\uFF1A${t.title}</h2>
    <div class="gbook"><b>\u5C0D\u61C9\u8AB2\u672C\uFF1A</b>${t.book}</div>
    <h4>\u{1F3AF} \u6559\u5B78\u76EE\u6A19</h4><p>${t.goal}</p>
    <h4>\u23F1\uFE0F \u5EFA\u8B70\u6D41\u7A0B\uFF08\u7D04 ${t.steps.reduce((e,i)=>e+i[0],0)} \u5206\u9418\uFF09</h4><ol>${t.steps.map(([e,i])=>`<li><span class="min">${e} \u5206</span>${i}</li>`).join("")}</ol>
    <h4>\u{1F4AC} \u63D0\u554F\u8207\u53C3\u8003\u7B54\u6848\uFF08\u9EDE\u554F\u984C\u770B\u7B54\u6848\uFF09</h4>${t.questions.map(([e,i])=>`<details><summary>${e}</summary><p>\u{1F449} ${i}</p></details>`).join("")}
    <h4>\u26A0\uFE0F \u5E38\u898B\u8FF7\u601D\u8207\u63D0\u9192</h4>${t.myths.map(e=>`<div class="myth">${e}</div>`).join("")}
    <h4>\u{1F3AF} \u5B78\u751F\u5C0F\u4EFB\u52D9\uFF08\u9762\u677F\u4E0A\u65B9\u7684\u7DA0\u8272\u6846\uFF09</h4><ol>${(ro[n]||[]).map(e=>`<li>${e.q}</li>`).join("")}</ol>
    <div class="gfoot"><button class="btn-sm" id="gGo">\u25B6 \u5207\u5230\u9019\u500B\u5206\u9801\u4E0A\u8AB2</button><button class="btn-sm" id="gPresent">${document.body.classList.contains("present")?"\u7D50\u675F\u6295\u5F71\u6A21\u5F0F":"\u{1F4FA} \u6295\u5F71\u6A21\u5F0F\uFF08\u96B1\u85CF\u9762\u677F\u3001\u653E\u5927\u5B57\uFF09"}</button><button class="btn-sm" id="gPrint">\u{1F5A8}\uFE0F \u5217\u5370\u9019\u4EFD\u6307\u5F15</button></div>`,st("#guide").classList.add("show"),st("#guide .gbody").querySelectorAll("[data-g]").forEach(e=>e.onclick=()=>Xd(e.dataset.g)),st("#gGo").onclick=()=>{bo(n),st("#guide").classList.remove("show")},st("#gPresent").onclick=()=>{document.body.classList.toggle("present"),st("#guide").classList.remove("show"),ni(),tn()},st("#gPrint").onclick=()=>window.print()}st("#btnGuide").onclick=()=>Xd(W.mode);st("#guide .gx").onclick=()=>st("#guide").classList.remove("show");st("#guide").onclick=n=>{n.target.id==="guide"&&st("#guide").classList.remove("show")};rh();function $d(){let n=Ts.clientWidth,t=Ts.clientHeight;bn.setSize(n,t),go.setSize(n,t),we.aspect=n/t,ni()}function ni(){let n=Ts.clientWidth,t=Ts.clientHeight,e=st("#panel").getBoundingClientRect(),i=52,s=0,r=0;if(Mr()){let a=qe.classList.contains("show")?qe.offsetTop+qe.offsetHeight:i,o=t-e.height;r=Math.round(t/2-(a+o)/2)}else document.body.classList.contains("panel-min")?r=0:s=-Math.round(e.right/2);s||r?we.setViewOffset(n,t,s,r,n,t):we.clearViewOffset(),we.updateProjectionMatrix()}new ResizeObserver(()=>ni()).observe(st("#panel"));window.addEventListener("resize",$d);$d();we.position.set(jt(120.2),330,Zt(21.2));le.target.set(jt(120.95),0,Zt(23.65));ei("landform");Wd("elem");bo("terrain");Gd();st("#loading").remove();var qd=!1;try{qd=localStorage.getItem("tw3d_hint")==="1",localStorage.setItem("tw3d_hint","1")}catch{}qd||setTimeout(mo,1200);var w_=new za,xd=0,E_=0,Zc=0,tn=(n=600)=>{Zc=Math.max(Zc,performance.now()+n)};["pointerdown","pointermove","pointerup","wheel","click","input","change","keydown","touchstart","touchmove"].forEach(n=>window.addEventListener(n,()=>tn(),{passive:!0,capture:!0}));window.addEventListener("resize",()=>tn(1e3));le.addEventListener("change",()=>tn());tn(3e3);function T_(){let n=[];for(let t of["current","hakka","fest","tribe","creature","island","sea","lf","peak","city","spot"])for(let e of Ne[t]){if(!e.o.visible||e.el.style.display==="none")continue;e.el.classList.remove("hid");let i=e.el.getBoundingClientRect();if(!i.width)continue;n.some(r=>i.left<r.right-2&&i.right>r.left+2&&i.top<r.bottom-2&&i.bottom>r.top+2)?e.el.classList.add("hid"):n.push(i)}}bn.setAnimationLoop(()=>{let n=w_.getDelta(),t=Math.min(.05,n);if(be){be.t=Math.min(1,be.t+Math.min(.2,n)/1.4);let a=be.t<.5?2*be.t*be.t:1-Math.pow(-2*be.t+2,2)/2;we.position.lerpVectors(be.p0,be.p1,a),le.target.lerpVectors(be.c0,be.c1,a),be.t>=1&&(be=null)}let e=le.update(),i=Se.tick(t),s=be||Gi.visible||W.mode==="rain"&&W.rising||e||i;if(!s&&performance.now()>Zc)return;if(s&&tn(400),Gi.visible&&f_(t),W.mode==="rain"&&W.rising&&W.flood<4e3){let a=Hi.find(o=>o.id===W.city).mm[W.month];W.flood=Math.min(4e3,W.flood+t*(25+a*.6)*(W.flood<200?.6:1.6)),(xd+=t)>.1&&(xd=0,Is())}++E_%12===0&&T_();let r=we.position.distanceTo(le.target);document.body.classList.toggle("far",r>420),bn.render(Un,we),go.render(Un,we)});window.__tw={state:W,M:At,SPOTS:Qn,camera:we,controls:le,setMode:bo,setColor:ei,flyTo:On,updateFlood:Is,feat:Se,setFocus:nh,setEthnic:sh,tapLabel:n=>{for(let t in Ne)for(let e of Ne[t])if(e.onClick&&e.el.textContent.includes(n))return e.onClick(),!0;return!1}};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
