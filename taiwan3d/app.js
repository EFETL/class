(()=>{var mc="170",Ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pd=0,Qc=1,Id=2;var gu=1,Ld=2,Bn=3,li=0,We=1,Ge=2,oi=0,os=1,th=2,eh=3,nh=4,Dd=5,Si=100,Ud=101,Nd=102,Fd=103,Od=104,Bd=200,kd=201,zd=202,Hd=203,Ya=204,qa=205,Vd=206,Gd=207,Wd=208,Xd=209,Yd=210,qd=211,$d=212,Zd=213,jd=214,$a=0,Za=1,ja=2,hs=3,Ja=4,Ka=5,Qa=6,tl=7,zo=0,Jd=1,Kd=2,ai=0,Qd=1,tf=2,ef=3,nf=4,sf=5,rf=6,of=7;var _u=300,us=301,ds=302,el=303,nl=304,Ho=306,il=1e3,wi=1001,sl=1002,je=1003,af=1004;var yr=1005;var Mn=1006,da=1007;var Ti=1008;var Hn=1009,xu=1010,yu=1011,Ys=1012,gc=1013,Ai=1014,Sn=1015,sr=1016,_c=1017,xc=1018,fs=1020,vu=35902,Mu=1021,Su=1022,dn=1023,bu=1024,Eu=1025,as=1026,ps=1027,yc=1028,vc=1029,wu=1030,Mc=1031;var Sc=1033,$r=33776,Zr=33777,jr=33778,Jr=33779,rl=35840,ol=35841,al=35842,ll=35843,cl=36196,hl=37492,ul=37496,dl=37808,fl=37809,pl=37810,ml=37811,gl=37812,_l=37813,xl=37814,yl=37815,vl=37816,Ml=37817,Sl=37818,bl=37819,El=37820,wl=37821,Kr=36492,Tl=36494,Al=36495,Tu=36283,Cl=36284,Rl=36285,Pl=36286;var Qr=2300,Il=2301,fa=2302,ih=2400,sh=2401,rh=2402;var lf=3200,cf=3201;var bc=0,hf=1,ri="",tn="srgb",ys="srgb-linear",Vo="linear",oe="srgb";var Vi=7680;var oh=519,uf=512,df=513,ff=514,Au=515,pf=516,mf=517,gf=518,_f=519,ah=35044;var lh="300 es",kn=2e3,to=2001,Vn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ch=1234567,zs=Math.PI/180,qs=180/Math.PI;function Ni(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]).toLowerCase()}function Re(n,t,e){return Math.max(t,Math.min(e,n))}function Ec(n,t){return(n%t+t)%t}function xf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function yf(n,t,e){return n!==t?(e-n)/(t-n):0}function Hs(n,t,e){return(1-e)*n+e*t}function vf(n,t,e,i){return Hs(n,t,1-Math.exp(-e*i))}function Mf(n,t=1){return t-Math.abs(Ec(n,t*2)-t)}function Sf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function bf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Ef(n,t){return n+Math.floor(Math.random()*(t-n+1))}function wf(n,t){return n+Math.random()*(t-n)}function Tf(n){return n*(.5-Math.random())}function Af(n){n!==void 0&&(ch=n);let t=ch+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cf(n){return n*zs}function Rf(n){return n*qs}function Pf(n){return(n&n-1)===0&&n!==0}function If(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Lf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Df(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),d=r((t-i)/2),f=o((t-i)/2),p=r((i-t)/2),m=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*m,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*m,a*c);break;case"ZYZ":n.set(l*m,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function is(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Fe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Go={DEG2RAD:zs,RAD2DEG:qs,generateUUID:Ni,clamp:Re,euclideanModulo:Ec,mapLinear:xf,inverseLerp:yf,lerp:Hs,damp:vf,pingpong:Mf,smoothstep:Sf,smootherstep:bf,randInt:Ef,randFloat:wf,randFloatSpread:Tf,seededRandom:Af,degToRad:Cf,radToDeg:Rf,isPowerOfTwo:Pf,ceilPowerOfTwo:If,floorPowerOfTwo:Lf,setQuaternionFromProperEuler:Df,normalize:Fe,denormalize:is},ct=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ht=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],m=i[8],_=s[0],g=s[3],u=s[6],E=s[1],b=s[4],x=s[7],D=s[2],A=s[5],T=s[8];return r[0]=o*_+a*E+l*D,r[3]=o*g+a*b+l*A,r[6]=o*u+a*x+l*T,r[1]=c*_+h*E+d*D,r[4]=c*g+h*b+d*A,r[7]=c*u+h*x+d*T,r[2]=f*_+p*E+m*D,r[5]=f*g+p*b+m*A,r[8]=f*u+p*x+m*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,p=c*r-o*l,m=e*d+i*f+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=d*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(pa.makeScale(t,e)),this}rotate(t){return this.premultiply(pa.makeRotation(-t)),this}translate(t,e){return this.premultiply(pa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},pa=new Ht;function Cu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function eo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Uf(){let n=eo("canvas");return n.style.display="block",n}var hh={};function Bs(n){n in hh||(hh[n]=!0,console.warn(n))}function Nf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Ff(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Of(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Jt={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===oe&&(n.r=zn(n.r),n.g=zn(n.g),n.b=zn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===oe&&(n.r=ls(n.r),n.g=ls(n.g),n.b=ls(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ri?Vo:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function zn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ls(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var uh=[.64,.33,.3,.6,.15,.06],dh=[.2126,.7152,.0722],fh=[.3127,.329],ph=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mh=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Jt.define({[ys]:{primaries:uh,whitePoint:fh,transfer:Vo,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:dh,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:uh,whitePoint:fh,transfer:oe,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:dh,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}});var Gi,Ll=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gi===void 0&&(Gi=eo("canvas")),Gi.width=t.width,Gi.height=t.height;let i=Gi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=eo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=zn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(zn(e[i]/255)*255):e[i]=zn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bf=0,no=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=Ni(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ma(s[o].image)):r.push(ma(s[o]))}else r=ma(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function ma(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Ll.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kf=0,Je=class n extends Vn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=wi,s=wi,r=Mn,o=Ti,a=dn,l=Hn,c=n.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Ni(),this.name="",this.source=new no(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_u)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case il:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case sl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case il:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case sl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=_u;Je.DEFAULT_ANISOTROPY=1;var _e=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],m=l[9],_=l[2],g=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,x=(p+1)/2,D=(u+1)/2,A=(h+f)/4,T=(d+_)/4,I=(m+g)/4;return b>x&&b>D?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=A/i,r=T/i):x>D?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=A/s,r=I/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=T/r,s=I/r),this.set(i,s,r,e),this}let E=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(g-m)/E,this.y=(d-_)/E,this.z=(f-h)/E,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dl=class extends Vn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Je(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new no(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gn=class extends Dl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},io=class extends Je{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ul=class extends Je{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=r[o+0],p=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=m,t[e+3]=_;return}if(d!==_||l!==f||c!==p||h!==m){let g=1-a,u=l*f+c*p+h*m+d*_,E=u>=0?1:-1,b=1-u*u;if(b>Number.EPSILON){let D=Math.sqrt(b),A=Math.atan2(D,u*E);g=Math.sin(g*A)/D,a=Math.sin(a*A)/D}let x=a*E;if(l=l*g+f*x,c=c*g+p*x,h=h*g+m*x,d=d*g+_*x,g===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=D,c*=D,h*=D,d*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],f=r[o+1],p=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*p-c*f,t[e+1]=l*m+h*f+c*d-a*p,t[e+2]=c*m+h*p+a*f-l*d,t[e+3]=h*m-a*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),f=l(i/2),p=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*p*m,this._y=c*p*d-f*h*m,this._z=c*h*m+f*p*d,this._w=c*h*d-f*p*m;break;case"YXZ":this._x=f*h*d+c*p*m,this._y=c*p*d-f*h*m,this._z=c*h*m-f*p*d,this._w=c*h*d+f*p*m;break;case"ZXY":this._x=f*h*d-c*p*m,this._y=c*p*d+f*h*m,this._z=c*h*m+f*p*d,this._w=c*h*d-f*p*m;break;case"ZYX":this._x=f*h*d-c*p*m,this._y=c*p*d+f*h*m,this._z=c*h*m-f*p*d,this._w=c*h*d+f*p*m;break;case"YZX":this._x=f*h*d+c*p*m,this._y=c*p*d+f*h*m,this._z=c*h*m-f*p*d,this._w=c*h*d-f*p*m;break;case"XZY":this._x=f*h*d-c*p*m,this._y=c*p*d-f*h*m,this._z=c*h*m+f*p*d,this._w=c*h*d+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=i+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ga.copy(this).projectOnVector(t),this.sub(ga)}reflect(t){return this.sub(ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ga=new C,gh=new fn,Wn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ln):ln.fromBufferAttribute(r,o),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vr.copy(i.boundingBox)),vr.applyMatrix4(t.matrixWorld),this.union(vr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),Mr.subVectors(this.max,Is),Wi.subVectors(t.a,Is),Xi.subVectors(t.b,Is),Yi.subVectors(t.c,Is),Qn.subVectors(Xi,Wi),ti.subVectors(Yi,Xi),mi.subVectors(Wi,Yi);let e=[0,-Qn.z,Qn.y,0,-ti.z,ti.y,0,-mi.z,mi.y,Qn.z,0,-Qn.x,ti.z,0,-ti.x,mi.z,0,-mi.x,-Qn.y,Qn.x,0,-ti.y,ti.x,0,-mi.y,mi.x,0];return!_a(e,Wi,Xi,Yi,Mr)||(e=[1,0,0,0,1,0,0,0,1],!_a(e,Wi,Xi,Yi,Mr))?!1:(Sr.crossVectors(Qn,ti),e=[Sr.x,Sr.y,Sr.z],_a(e,Wi,Xi,Yi,Mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Dn=[new C,new C,new C,new C,new C,new C,new C,new C],ln=new C,vr=new Wn,Wi=new C,Xi=new C,Yi=new C,Qn=new C,ti=new C,mi=new C,Is=new C,Mr=new C,Sr=new C,gi=new C;function _a(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){gi.fromArray(n,r);let a=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),l=t.dot(gi),c=e.dot(gi),h=i.dot(gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var zf=new Wn,Ls=new C,xa=new C,ci=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):zf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);let e=Ls.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ls,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(xa)),this.expandByPoint(Ls.copy(t.center).sub(xa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Un=new C,ya=new C,br=new C,ei=new C,va=new C,Er=new C,Ma=new C,Ci=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ya.copy(t).add(e).multiplyScalar(.5),br.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(ya);let r=t.distanceTo(e)*.5,o=-this.direction.dot(br),a=ei.dot(this.direction),l=-ei.dot(br),c=ei.lengthSq(),h=Math.abs(1-o*o),d,f,p,m;if(h>0)if(d=o*l-a,f=o*a-l,m=r*h,d>=0)if(f>=-m)if(f<=m){let _=1/h;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ya).addScaledVector(br,f),p}intersectSphere(t,e){Un.subVectors(t.center,this.origin);let i=Un.dot(this.direction),s=Un.dot(Un)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,i,s,r){va.subVectors(e,t),Er.subVectors(i,t),Ma.crossVectors(va,Er);let o=this.direction.dot(Ma),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,t);let l=a*this.direction.dot(Er.crossVectors(ei,Er));if(l<0)return null;let c=a*this.direction.dot(va.cross(ei));if(c<0||l+c>o)return null;let h=-a*ei.dot(Ma);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},se=class n{constructor(t,e,i,s,r,o,a,l,c,h,d,f,p,m,_,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,d,f,p,m,_,g)}set(t,e,i,s,r,o,a,l,c,h,d,f,p,m,_,g){let u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=m,u[11]=_,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/qi.setFromMatrixColumn(t,0).length(),r=1/qi.setFromMatrixColumn(t,1).length(),o=1/qi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,p=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+m*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=m+p*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,p=l*d,m=c*h,_=c*d;e[0]=f+_*a,e[4]=m*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-m,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,p=l*d,m=c*h,_=c*d;e[0]=f-_*a,e[4]=-o*d,e[8]=m+p*a,e[1]=p+m*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,p=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=m*c-p,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=p*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,p=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-f*d,e[8]=m*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+m,e[10]=f-_*d}else if(t.order==="XZY"){let f=o*l,p=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=o*h,e[9]=p*d-m,e[2]=m*d-p,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hf,t,Vf)}lookAt(t,e,i){let s=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),ni.crossVectors(i,$e),ni.lengthSq()===0&&(Math.abs(i.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),ni.crossVectors(i,$e)),ni.normalize(),wr.crossVectors($e,ni),s[0]=ni.x,s[4]=wr.x,s[8]=$e.x,s[1]=ni.y,s[5]=wr.y,s[9]=$e.y,s[2]=ni.z,s[6]=wr.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],m=i[2],_=i[6],g=i[10],u=i[14],E=i[3],b=i[7],x=i[11],D=i[15],A=s[0],T=s[4],I=s[8],S=s[12],v=s[1],P=s[5],H=s[9],z=s[13],Y=s[2],K=s[6],W=s[10],nt=s[14],q=s[3],ft=s[7],_t=s[11],Rt=s[15];return r[0]=o*A+a*v+l*Y+c*q,r[4]=o*T+a*P+l*K+c*ft,r[8]=o*I+a*H+l*W+c*_t,r[12]=o*S+a*z+l*nt+c*Rt,r[1]=h*A+d*v+f*Y+p*q,r[5]=h*T+d*P+f*K+p*ft,r[9]=h*I+d*H+f*W+p*_t,r[13]=h*S+d*z+f*nt+p*Rt,r[2]=m*A+_*v+g*Y+u*q,r[6]=m*T+_*P+g*K+u*ft,r[10]=m*I+_*H+g*W+u*_t,r[14]=m*S+_*z+g*nt+u*Rt,r[3]=E*A+b*v+x*Y+D*q,r[7]=E*T+b*P+x*K+D*ft,r[11]=E*I+b*H+x*W+D*_t,r[15]=E*S+b*z+x*nt+D*Rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],m=t[3],_=t[7],g=t[11],u=t[15];return m*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*p-i*l*p)+_*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+g*(+e*c*d-e*a*p-r*o*d+i*o*p+r*a*h-i*c*h)+u*(-s*a*h-e*l*d+e*a*f+s*o*d-i*o*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],m=t[12],_=t[13],g=t[14],u=t[15],E=d*g*c-_*f*c+_*l*p-a*g*p-d*l*u+a*f*u,b=m*f*c-h*g*c-m*l*p+o*g*p+h*l*u-o*f*u,x=h*_*c-m*d*c+m*a*p-o*_*p-h*a*u+o*d*u,D=m*d*l-h*_*l-m*a*f+o*_*f+h*a*g-o*d*g,A=e*E+i*b+s*x+r*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return t[0]=E*T,t[1]=(_*f*r-d*g*r-_*s*p+i*g*p+d*s*u-i*f*u)*T,t[2]=(a*g*r-_*l*r+_*s*c-i*g*c-a*s*u+i*l*u)*T,t[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*p-i*l*p)*T,t[4]=b*T,t[5]=(h*g*r-m*f*r+m*s*p-e*g*p-h*s*u+e*f*u)*T,t[6]=(m*l*r-o*g*r-m*s*c+e*g*c+o*s*u-e*l*u)*T,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*p+e*l*p)*T,t[8]=x*T,t[9]=(m*d*r-h*_*r-m*i*p+e*_*p+h*i*u-e*d*u)*T,t[10]=(o*_*r-m*a*r+m*i*c-e*_*c-o*i*u+e*a*u)*T,t[11]=(h*a*r-o*d*r-h*i*c+e*d*c+o*i*p-e*a*p)*T,t[12]=D*T,t[13]=(h*_*s-m*d*s+m*i*f-e*_*f-h*i*g+e*d*g)*T,t[14]=(m*a*s-o*_*s-m*i*l+e*_*l+o*i*g-e*a*g)*T,t[15]=(o*d*s-h*a*s+h*i*l-e*d*l-o*i*f+e*a*f)*T,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,p=r*h,m=r*d,_=o*h,g=o*d,u=a*d,E=l*c,b=l*h,x=l*d,D=i.x,A=i.y,T=i.z;return s[0]=(1-(_+u))*D,s[1]=(p+x)*D,s[2]=(m-b)*D,s[3]=0,s[4]=(p-x)*A,s[5]=(1-(f+u))*A,s[6]=(g+E)*A,s[7]=0,s[8]=(m+b)*T,s[9]=(g-E)*T,s[10]=(1-(f+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=qi.set(s[0],s[1],s[2]).length(),o=qi.set(s[4],s[5],s[6]).length(),a=qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],cn.copy(this);let c=1/r,h=1/o,d=1/a;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=d,cn.elements[9]*=d,cn.elements[10]*=d,e.setFromRotationMatrix(cn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=kn){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),p,m;if(a===kn)p=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===to)p=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=kn){let l=this.elements,c=1/(e-t),h=1/(i-s),d=1/(o-r),f=(e+t)*c,p=(i+s)*h,m,_;if(a===kn)m=(o+r)*d,_=-2*d;else if(a===to)m=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},qi=new C,cn=new se,Hf=new C(0,0,0),Vf=new C(1,1,1),ni=new C,wr=new C,$e=new C,_h=new se,xh=new fn,pn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return _h.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_h,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xh.setFromEuler(this),this.setFromQuaternion(xh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER="XYZ";var $s=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Gf=0,yh=new C,$i=new fn,Nn=new se,Tr=new C,Ds=new C,Wf=new C,Xf=new fn,vh=new C(1,0,0),Mh=new C(0,1,0),Sh=new C(0,0,1),bh={type:"added"},Yf={type:"removed"},Zi={type:"childadded",child:null},Sa={type:"childremoved",child:null},ye=class n extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new C,e=new pn,i=new fn,s=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Ht}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(vh,t)}rotateY(t){return this.rotateOnAxis(Mh,t)}rotateZ(t){return this.rotateOnAxis(Sh,t)}translateOnAxis(t,e){return yh.copy(t).applyQuaternion(this.quaternion),this.position.add(yh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vh,t)}translateY(t){return this.translateOnAxis(Mh,t)}translateZ(t){return this.translateOnAxis(Sh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Tr.copy(t):Tr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Ds,Tr,this.up):Nn.lookAt(Tr,Ds,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Nn),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bh),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yf),Sa.child=t,this.dispatchEvent(Sa),Sa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bh),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,t,Wf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,Xf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};ye.DEFAULT_UP=new C(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=new C,Fn=new C,ba=new C,On=new C,ji=new C,Ji=new C,Eh=new C,Ea=new C,wa=new C,Ta=new C,Aa=new _e,Ca=new _e,Ra=new _e,bi=class n{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),hn.subVectors(t,e),s.cross(hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){hn.subVectors(s,e),Fn.subVectors(i,e),ba.subVectors(t,e);let o=hn.dot(hn),a=hn.dot(Fn),l=hn.dot(ba),c=Fn.dot(Fn),h=Fn.dot(ba),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-p-m,m,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Aa.setScalar(0),Ca.setScalar(0),Ra.setScalar(0),Aa.fromBufferAttribute(t,e),Ca.fromBufferAttribute(t,i),Ra.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Aa,r.x),o.addScaledVector(Ca,r.y),o.addScaledVector(Ra,r.z),o}static isFrontFacing(t,e,i,s){return hn.subVectors(i,e),Fn.subVectors(t,e),hn.cross(Fn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),hn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;ji.subVectors(s,i),Ji.subVectors(r,i),Ea.subVectors(t,i);let l=ji.dot(Ea),c=Ji.dot(Ea);if(l<=0&&c<=0)return e.copy(i);wa.subVectors(t,s);let h=ji.dot(wa),d=Ji.dot(wa);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(ji,o);Ta.subVectors(t,r);let p=ji.dot(Ta),m=Ji.dot(Ta);if(m>=0&&p<=m)return e.copy(r);let _=p*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(i).addScaledVector(Ji,a);let g=h*m-p*d;if(g<=0&&d-h>=0&&p-m>=0)return Eh.subVectors(r,s),a=(d-h)/(d-h+(p-m)),e.copy(s).addScaledVector(Eh,a);let u=1/(g+_+f);return o=_*u,a=f*u,e.copy(i).addScaledVector(ji,o).addScaledVector(Ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function Pa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ut=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Jt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Jt.workingColorSpace){if(t=Ec(t,1),e=Re(e,0,1),i=Re(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Pa(o,r,t+1/3),this.g=Pa(o,r,t),this.b=Pa(o,r,t-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(t,e=tn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){let i=Ru[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zn(t.r),this.g=zn(t.g),this.b=zn(t.b),this}copyLinearToSRGB(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return Jt.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Re(Ie.r*255,0,255))*65536+Math.round(Re(Ie.g*255,0,255))*256+Math.round(Re(Ie.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Ie.copy(this),e);let i=Ie.r,s=Ie.g,r=Ie.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=tn){Jt.fromWorkingColorSpace(Ie.copy(this),t);let e=Ie.r,i=Ie.g,s=Ie.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(Ar);let i=Hs(ii.h,Ar.h,e),s=Hs(ii.s,Ar.s,e),r=Hs(ii.l,Ar.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ie=new Ut;Ut.NAMES=Ru;var qf=0,Xn=class extends Vn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Ni(),this.name="",this.blending=os,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ya,this.blendDst=qa,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(i.blending=this.blending),this.side!==li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ya&&(i.blendSrc=this.blendSrc),this.blendDst!==qa&&(i.blendDst=this.blendDst),this.blendEquation!==Si&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},en=class extends Xn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ve=new C,Cr=new ct,Me=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ah,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Cr.fromBufferAttribute(this,e),Cr.applyMatrix3(t),this.setXY(e,Cr.x,Cr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=is(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Fe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=is(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=is(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=is(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ah&&(t.usage=this.usage),t}};var so=class extends Me{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ro=class extends Me{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Qt=class extends Me{constructor(t,e,i){super(new Float32Array(t),e,i)}},$f=0,Qe=new se,Ia=new ye,Ki=new C,Ze=new Wn,Us=new Wn,Ce=new C,ge=class n extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cu(t)?ro:so)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ht().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,i){return Qe.makeTranslation(t,e,i),this.applyMatrix4(Qe),this}scale(t,e,i){return Qe.makeScale(t,e,i),this.applyMatrix4(Qe),this}lookAt(t){return Ia.lookAt(t),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let i=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Us.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(Ze.min,Us.min),Ze.expandByPoint(Ce),Ce.addVectors(Ze.max,Us.max),Ze.expandByPoint(Ce)):(Ze.expandByPoint(Us.min),Ze.expandByPoint(Us.max))}Ze.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ce));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ce.fromBufferAttribute(a,c),l&&(Ki.fromBufferAttribute(t,c),Ce.add(Ki)),s=Math.max(s,i.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Me(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new C,l[I]=new C;let c=new C,h=new C,d=new C,f=new ct,p=new ct,m=new ct,_=new C,g=new C;function u(I,S,v){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,v),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,S),m.fromBufferAttribute(r,v),h.sub(c),d.sub(c),p.sub(f),m.sub(f);let P=1/(p.x*m.y-m.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(P),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(P),a[I].add(_),a[S].add(_),a[v].add(_),l[I].add(g),l[S].add(g),l[v].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let I=0,S=E.length;I<S;++I){let v=E[I],P=v.start,H=v.count;for(let z=P,Y=P+H;z<Y;z+=3)u(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let b=new C,x=new C,D=new C,A=new C;function T(I){D.fromBufferAttribute(s,I),A.copy(D);let S=a[I];b.copy(S),b.sub(D.multiplyScalar(D.dot(S))).normalize(),x.crossVectors(A,S);let P=x.dot(l[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,P)}for(let I=0,S=E.length;I<S;++I){let v=E[I],P=v.start,H=v.count;for(let z=P,Y=P+H;z<Y;z+=3)T(t.getX(z+0)),T(t.getX(z+1)),T(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,d=new C;if(t)for(let f=0,p=t.count;f<p;f+=3){let m=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),p=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let u=0;u<h;u++)f[m++]=c[p++]}return new Me(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wh=new se,_i=new Ci,Rr=new ci,Th=new C,Pr=new C,Ir=new C,Lr=new C,La=new C,Dr=new C,Ah=new C,Ur=new C,te=class extends ye{constructor(t=new ge,e=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(La.fromBufferAttribute(d,t),o?Dr.addScaledVector(La,h):Dr.addScaledVector(La.sub(e),h))}e.add(Dr)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere),Rr.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(Rr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Rr,Th)===null||_i.origin.distanceToSquared(Th)>(t.far-t.near)**2))&&(wh.copy(r).invert(),_i.copy(t.ray).applyMatrix4(wh),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let g=f[m],u=o[g.materialIndex],E=Math.max(g.start,p.start),b=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let x=E,D=b;x<D;x+=3){let A=a.getX(x),T=a.getX(x+1),I=a.getX(x+2);s=Nr(this,u,t,i,c,h,d,A,T,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let g=m,u=_;g<u;g+=3){let E=a.getX(g),b=a.getX(g+1),x=a.getX(g+2);s=Nr(this,o,t,i,c,h,d,E,b,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let g=f[m],u=o[g.materialIndex],E=Math.max(g.start,p.start),b=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=E,D=b;x<D;x+=3){let A=x,T=x+1,I=x+2;s=Nr(this,u,t,i,c,h,d,A,T,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=m,u=_;g<u;g+=3){let E=g,b=g+1,x=g+2;s=Nr(this,o,t,i,c,h,d,E,b,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Zf(n,t,e,i,s,r,o,a){let l;if(t.side===We?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===li,a),l===null)return null;Ur.copy(a),Ur.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Ur);return c<e.near||c>e.far?null:{distance:c,point:Ur.clone(),object:n}}function Nr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Pr),n.getVertexPosition(l,Ir),n.getVertexPosition(c,Lr);let h=Zf(n,t,e,i,Pr,Ir,Lr,Ah);if(h){let d=new C;bi.getBarycoord(Ah,Pr,Ir,Lr,d),s&&(h.uv=bi.getInterpolatedAttribute(s,a,l,c,d,new ct)),r&&(h.uv1=bi.getInterpolatedAttribute(r,a,l,c,d,new ct)),o&&(h.normal=bi.getInterpolatedAttribute(o,a,l,c,d,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new C,materialIndex:0};bi.getNormal(Pr,Ir,Lr,f.normal),h.face=f,h.barycoord=d}return h}var Yn=class n extends ge{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,p=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2));function m(_,g,u,E,b,x,D,A,T,I,S){let v=x/T,P=D/I,H=x/2,z=D/2,Y=A/2,K=T+1,W=I+1,nt=0,q=0,ft=new C;for(let _t=0;_t<W;_t++){let Rt=_t*P-z;for(let Gt=0;Gt<K;Gt++){let re=Gt*v-H;ft[_]=re*E,ft[g]=Rt*b,ft[u]=Y,c.push(ft.x,ft.y,ft.z),ft[_]=0,ft[g]=0,ft[u]=A>0?1:-1,h.push(ft.x,ft.y,ft.z),d.push(Gt/T),d.push(1-_t/I),nt+=1}}for(let _t=0;_t<I;_t++)for(let Rt=0;Rt<T;Rt++){let Gt=f+Rt+K*_t,re=f+Rt+K*(_t+1),Z=f+(Rt+1)+K*(_t+1),it=f+(Rt+1)+K*_t;l.push(Gt,re,it),l.push(re,Z,it),q+=6}a.addGroup(p,q,S),p+=q,f+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ms(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Oe(n){let t={};for(let e=0;e<n.length;e++){let i=ms(n[e]);for(let s in i)t[s]=i[s]}return t}function jf(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Pu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var Jf={clone:ms,merge:Oe},Kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends Xn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kf,this.fragmentShader=Qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=jf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},oo=class extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},si=new C,Ch=new ct,Rh=new ct,Be=class extends oo{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,Ch,Rh),e.subVectors(Rh,Ch)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(zs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Qi=-90,ts=1,Nl=class extends ye{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Be(Qi,ts,t,e);s.layers=this.layers,this.add(s);let r=new Be(Qi,ts,t,e);r.layers=this.layers,this.add(r);let o=new Be(Qi,ts,t,e);o.layers=this.layers,this.add(o);let a=new Be(Qi,ts,t,e);a.layers=this.layers,this.add(a);let l=new Be(Qi,ts,t,e);l.layers=this.layers,this.add(l);let c=new Be(Qi,ts,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===to)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(d,f,p),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},ao=class extends Je{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:us,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Fl=class extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ao(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yn(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:We,blending:oi});r.uniforms.tEquirect.value=e;let o=new te(s,r),a=e.minFilter;return e.minFilter===Ti&&(e.minFilter=Mn),new Nl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Da=new C,tp=new C,ep=new Ht,un=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Da.subVectors(i,e).cross(tp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Da),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||ep.getNormalMatrix(t),s=this.coplanarPoint(Da).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},xi=new ci,Fr=new C,Zs=class{constructor(t=new un,e=new un,i=new un,s=new un,r=new un,o=new un){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=kn){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],p=s[8],m=s[9],_=s[10],g=s[11],u=s[12],E=s[13],b=s[14],x=s[15];if(i[0].setComponents(l-r,f-c,g-p,x-u).normalize(),i[1].setComponents(l+r,f+c,g+p,x+u).normalize(),i[2].setComponents(l+o,f+h,g+m,x+E).normalize(),i[3].setComponents(l-o,f-h,g-m,x-E).normalize(),i[4].setComponents(l-a,f-d,g-_,x-b).normalize(),e===kn)i[5].setComponents(l+a,f+d,g+_,x+b).normalize();else if(e===to)i[5].setComponents(a,d,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Fr.x=s.normal.x>0?t.max.x:t.min.x,Fr.y=s.normal.y>0?t.max.y:t.min.y,Fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Iu(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function np(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<d.length;p++){let m=d[f],_=d[p];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,m=d.length;p<m;p++){let _=d[p];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ri=class n extends ge{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,p=[],m=[],_=[],g=[];for(let u=0;u<h;u++){let E=u*f-o;for(let b=0;b<c;b++){let x=b*d-r;m.push(x,-E,0),_.push(0,0,1),g.push(b/a),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let E=0;E<a;E++){let b=E+c*u,x=E+c*(u+1),D=E+1+c*(u+1),A=E+1+c*u;p.push(b,x,A),p.push(x,D,A)}this.setIndex(p),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},ip=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sp=`#ifdef USE_ALPHAHASH
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
#endif`,rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ap=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cp=`#ifdef USE_AOMAP
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
#endif`,hp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,up=`#ifdef USE_BATCHING
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
#endif`,dp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gp=`#ifdef USE_IRIDESCENCE
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
#endif`,_p=`#ifdef USE_BUMPMAP
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
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Tp=`#define PI 3.141592653589793
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
} // validated`,Ap=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cp=`vec3 transformedNormal = objectNormal;
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
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Up=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Np=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Op=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wp=`#ifdef USE_GRADIENTMAP
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
}`,Xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$p=`uniform bool receiveShadow;
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
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t2=`PhysicalMaterial material;
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
#endif`,e2=`struct PhysicalMaterial {
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
}`,n2=`
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
#endif`,i2=`#if defined( RE_IndirectDiffuse )
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
#endif`,s2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d2=`#if defined( USE_POINTS_UV )
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
#endif`,f2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x2=`#ifdef USE_MORPHTARGETS
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
#endif`,y2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,M2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,S2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,w2=`#ifdef USE_NORMALMAP
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
#endif`,T2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,L2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,H2=`float getShadowMask() {
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
}`,V2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G2=`#ifdef USE_SKINNING
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
#endif`,W2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X2=`#ifdef USE_SKINNING
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
#endif`,Y2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,j2=`#ifdef USE_TRANSMISSION
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
#endif`,J2=`#ifdef USE_TRANSMISSION
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
#endif`,K2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,n1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i1=`uniform sampler2D t2D;
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
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`#include <common>
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
}`,c1=`#if DEPTH_PACKING == 3200
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
}`,h1=`#define DISTANCE
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
}`,u1=`#define DISTANCE
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
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p1=`uniform float scale;
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
}`,m1=`uniform vec3 diffuse;
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
}`,g1=`#include <common>
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
}`,_1=`uniform vec3 diffuse;
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
}`,x1=`#define LAMBERT
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
}`,y1=`#define LAMBERT
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
}`,v1=`#define MATCAP
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
}`,M1=`#define MATCAP
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
}`,S1=`#define NORMAL
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
}`,b1=`#define NORMAL
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
}`,E1=`#define PHONG
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
}`,w1=`#define PHONG
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
}`,T1=`#define STANDARD
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
}`,A1=`#define STANDARD
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
}`,C1=`#define TOON
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
}`,R1=`#define TOON
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
}`,P1=`uniform float size;
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
}`,I1=`uniform vec3 diffuse;
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
}`,L1=`#include <common>
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
}`,D1=`uniform vec3 color;
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
}`,U1=`uniform float rotation;
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
}`,N1=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:ip,alphahash_pars_fragment:sp,alphamap_fragment:rp,alphamap_pars_fragment:op,alphatest_fragment:ap,alphatest_pars_fragment:lp,aomap_fragment:cp,aomap_pars_fragment:hp,batching_pars_vertex:up,batching_vertex:dp,begin_vertex:fp,beginnormal_vertex:pp,bsdfs:mp,iridescence_fragment:gp,bumpmap_pars_fragment:_p,clipping_planes_fragment:xp,clipping_planes_pars_fragment:yp,clipping_planes_pars_vertex:vp,clipping_planes_vertex:Mp,color_fragment:Sp,color_pars_fragment:bp,color_pars_vertex:Ep,color_vertex:wp,common:Tp,cube_uv_reflection_fragment:Ap,defaultnormal_vertex:Cp,displacementmap_pars_vertex:Rp,displacementmap_vertex:Pp,emissivemap_fragment:Ip,emissivemap_pars_fragment:Lp,colorspace_fragment:Dp,colorspace_pars_fragment:Up,envmap_fragment:Np,envmap_common_pars_fragment:Fp,envmap_pars_fragment:Op,envmap_pars_vertex:Bp,envmap_physical_pars_fragment:Zp,envmap_vertex:kp,fog_vertex:zp,fog_pars_vertex:Hp,fog_fragment:Vp,fog_pars_fragment:Gp,gradientmap_pars_fragment:Wp,lightmap_pars_fragment:Xp,lights_lambert_fragment:Yp,lights_lambert_pars_fragment:qp,lights_pars_begin:$p,lights_toon_fragment:jp,lights_toon_pars_fragment:Jp,lights_phong_fragment:Kp,lights_phong_pars_fragment:Qp,lights_physical_fragment:t2,lights_physical_pars_fragment:e2,lights_fragment_begin:n2,lights_fragment_maps:i2,lights_fragment_end:s2,logdepthbuf_fragment:r2,logdepthbuf_pars_fragment:o2,logdepthbuf_pars_vertex:a2,logdepthbuf_vertex:l2,map_fragment:c2,map_pars_fragment:h2,map_particle_fragment:u2,map_particle_pars_fragment:d2,metalnessmap_fragment:f2,metalnessmap_pars_fragment:p2,morphinstance_vertex:m2,morphcolor_vertex:g2,morphnormal_vertex:_2,morphtarget_pars_vertex:x2,morphtarget_vertex:y2,normal_fragment_begin:v2,normal_fragment_maps:M2,normal_pars_fragment:S2,normal_pars_vertex:b2,normal_vertex:E2,normalmap_pars_fragment:w2,clearcoat_normal_fragment_begin:T2,clearcoat_normal_fragment_maps:A2,clearcoat_pars_fragment:C2,iridescence_pars_fragment:R2,opaque_fragment:P2,packing:I2,premultiplied_alpha_fragment:L2,project_vertex:D2,dithering_fragment:U2,dithering_pars_fragment:N2,roughnessmap_fragment:F2,roughnessmap_pars_fragment:O2,shadowmap_pars_fragment:B2,shadowmap_pars_vertex:k2,shadowmap_vertex:z2,shadowmask_pars_fragment:H2,skinbase_vertex:V2,skinning_pars_vertex:G2,skinning_vertex:W2,skinnormal_vertex:X2,specularmap_fragment:Y2,specularmap_pars_fragment:q2,tonemapping_fragment:$2,tonemapping_pars_fragment:Z2,transmission_fragment:j2,transmission_pars_fragment:J2,uv_pars_fragment:K2,uv_pars_vertex:Q2,uv_vertex:t1,worldpos_vertex:e1,background_vert:n1,background_frag:i1,backgroundCube_vert:s1,backgroundCube_frag:r1,cube_vert:o1,cube_frag:a1,depth_vert:l1,depth_frag:c1,distanceRGBA_vert:h1,distanceRGBA_frag:u1,equirect_vert:d1,equirect_frag:f1,linedashed_vert:p1,linedashed_frag:m1,meshbasic_vert:g1,meshbasic_frag:_1,meshlambert_vert:x1,meshlambert_frag:y1,meshmatcap_vert:v1,meshmatcap_frag:M1,meshnormal_vert:S1,meshnormal_frag:b1,meshphong_vert:E1,meshphong_frag:w1,meshphysical_vert:T1,meshphysical_frag:A1,meshtoon_vert:C1,meshtoon_frag:R1,points_vert:P1,points_frag:I1,shadow_vert:L1,shadow_frag:D1,sprite_vert:U1,sprite_frag:N1},dt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},vn={basic:{uniforms:Oe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Oe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Oe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Oe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Oe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Oe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Oe([dt.points,dt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Oe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Oe([dt.common,dt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Oe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Oe([dt.sprite,dt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Oe([dt.common,dt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Oe([dt.lights,dt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};vn.physical={uniforms:Oe([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var Or={r:0,b:0,g:0},yi=new pn,F1=new se;function O1(n,t,e,i,s,r,o){let a=new Ut(0),l=r===!0?0:1,c,h,d=null,f=0,p=null;function m(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?e:t).get(b)),b}function _(E){let b=!1,x=m(E);x===null?u(a,l):x&&x.isColor&&(u(x,1),b=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(E,b){let x=m(b);x&&(x.isCubeTexture||x.mapping===Ho)?(h===void 0&&(h=new te(new Yn(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:ms(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),yi.copy(b.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(F1.makeRotationFromEuler(yi)),h.material.toneMapped=Jt.getTransfer(x.colorSpace)!==oe,(d!==x||f!==x.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=x,f=x.version,p=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new te(new Ri(2,2),new bn({name:"BackgroundMaterial",uniforms:ms(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(x.colorSpace)!==oe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,p=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function u(E,b){E.getRGB(Or,Pu(n)),i.buffers.color.setClear(Or.r,Or.g,Or.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(E,b=1){a.set(E),l=b,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,u(a,l)},render:_,addToRenderList:g}}function B1(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(v,P,H,z,Y){let K=!1,W=d(z,H,P);r!==W&&(r=W,c(r.object)),K=p(v,z,H,Y),K&&m(v,z,H,Y),Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,x(v,P,H,z),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function d(v,P,H){let z=H.wireframe===!0,Y=i[v.id];Y===void 0&&(Y={},i[v.id]=Y);let K=Y[P.id];K===void 0&&(K={},Y[P.id]=K);let W=K[z];return W===void 0&&(W=f(l()),K[z]=W),W}function f(v){let P=[],H=[],z=[];for(let Y=0;Y<e;Y++)P[Y]=0,H[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:z,object:v,attributes:{},index:null}}function p(v,P,H,z){let Y=r.attributes,K=P.attributes,W=0,nt=H.getAttributes();for(let q in nt)if(nt[q].location>=0){let _t=Y[q],Rt=K[q];if(Rt===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(Rt=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(Rt=v.instanceColor)),_t===void 0||_t.attribute!==Rt||Rt&&_t.data!==Rt.data)return!0;W++}return r.attributesNum!==W||r.index!==z}function m(v,P,H,z){let Y={},K=P.attributes,W=0,nt=H.getAttributes();for(let q in nt)if(nt[q].location>=0){let _t=K[q];_t===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(_t=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(_t=v.instanceColor));let Rt={};Rt.attribute=_t,_t&&_t.data&&(Rt.data=_t.data),Y[q]=Rt,W++}r.attributes=Y,r.attributesNum=W,r.index=z}function _(){let v=r.newAttributes;for(let P=0,H=v.length;P<H;P++)v[P]=0}function g(v){u(v,0)}function u(v,P){let H=r.newAttributes,z=r.enabledAttributes,Y=r.attributeDivisors;H[v]=1,z[v]===0&&(n.enableVertexAttribArray(v),z[v]=1),Y[v]!==P&&(n.vertexAttribDivisor(v,P),Y[v]=P)}function E(){let v=r.newAttributes,P=r.enabledAttributes;for(let H=0,z=P.length;H<z;H++)P[H]!==v[H]&&(n.disableVertexAttribArray(H),P[H]=0)}function b(v,P,H,z,Y,K,W){W===!0?n.vertexAttribIPointer(v,P,H,Y,K):n.vertexAttribPointer(v,P,H,z,Y,K)}function x(v,P,H,z){_();let Y=z.attributes,K=H.getAttributes(),W=P.defaultAttributeValues;for(let nt in K){let q=K[nt];if(q.location>=0){let ft=Y[nt];if(ft===void 0&&(nt==="instanceMatrix"&&v.instanceMatrix&&(ft=v.instanceMatrix),nt==="instanceColor"&&v.instanceColor&&(ft=v.instanceColor)),ft!==void 0){let _t=ft.normalized,Rt=ft.itemSize,Gt=t.get(ft);if(Gt===void 0)continue;let re=Gt.buffer,Z=Gt.type,it=Gt.bytesPerElement,at=Z===n.INT||Z===n.UNSIGNED_INT||ft.gpuType===gc;if(ft.isInterleavedBufferAttribute){let ht=ft.data,Dt=ht.stride,Nt=ft.offset;if(ht.isInstancedInterleavedBuffer){for(let kt=0;kt<q.locationSize;kt++)u(q.location+kt,ht.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let kt=0;kt<q.locationSize;kt++)g(q.location+kt);n.bindBuffer(n.ARRAY_BUFFER,re);for(let kt=0;kt<q.locationSize;kt++)b(q.location+kt,Rt/q.locationSize,Z,_t,Dt*it,(Nt+Rt/q.locationSize*kt)*it,at)}else{if(ft.isInstancedBufferAttribute){for(let ht=0;ht<q.locationSize;ht++)u(q.location+ht,ft.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let ht=0;ht<q.locationSize;ht++)g(q.location+ht);n.bindBuffer(n.ARRAY_BUFFER,re);for(let ht=0;ht<q.locationSize;ht++)b(q.location+ht,Rt/q.locationSize,Z,_t,Rt*it,Rt/q.locationSize*ht*it,at)}}else if(W!==void 0){let _t=W[nt];if(_t!==void 0)switch(_t.length){case 2:n.vertexAttrib2fv(q.location,_t);break;case 3:n.vertexAttrib3fv(q.location,_t);break;case 4:n.vertexAttrib4fv(q.location,_t);break;default:n.vertexAttrib1fv(q.location,_t)}}}}E()}function D(){I();for(let v in i){let P=i[v];for(let H in P){let z=P[H];for(let Y in z)h(z[Y].object),delete z[Y];delete P[H]}delete i[v]}}function A(v){if(i[v.id]===void 0)return;let P=i[v.id];for(let H in P){let z=P[H];for(let Y in z)h(z[Y].object),delete z[Y];delete P[H]}delete i[v.id]}function T(v){for(let P in i){let H=i[P];if(H[v.id]===void 0)continue;let z=H[v.id];for(let Y in z)h(z[Y].object),delete z[Y];delete H[v.id]}}function I(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:g,disableUnusedAttributes:E}}function k1(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),e.update(h,i,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let m=0;m<d;m++)p+=h[m];e.update(p,i,1)}function l(c,h,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)o(c[m],h[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let m=0;for(let _=0;_<d;_++)m+=h[_]*f[_];e.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function z1(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==dn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let I=T===sr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Hn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Sn&&!I)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=m>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:D,maxSamples:A}}function H1(n){let t=this,e=null,i=0,s=!1,r=!1,o=new un,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){let m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,u=n.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let E=r?0:i,b=E*4,x=u.clippingState||null;l.value=x,x=h(m,f,b,p);for(let D=0;D!==b;++D)x[D]=e[D];u.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,p,m){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let u=p+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(g===null||g.length<u)&&(g=new Float32Array(u));for(let b=0,x=p;b!==_;++b,x+=4)o.copy(d[b]).applyMatrix4(E,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function V1(n){let t=new WeakMap;function e(o,a){return a===el?o.mapping=us:a===nl&&(o.mapping=ds),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===el||a===nl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Fl(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var lo=class extends oo{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ss=4,Ph=[.125,.215,.35,.446,.526,.582],Ei=20,Ua=new lo,Ih=new Ut,Na=null,Fa=0,Oa=0,Ba=!1,Mi=(1+Math.sqrt(5))/2,es=1/Mi,Lh=[new C(-Mi,es,0),new C(Mi,es,0),new C(-es,0,Mi),new C(es,0,Mi),new C(0,Mi,-es),new C(0,Mi,es),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],co=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Na=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Na,Fa,Oa),this._renderer.xr.enabled=Ba,t.scissorTest=!1,Br(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===us||t.mapping===ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Na=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:sr,format:dn,colorSpace:ys,depthBuffer:!1},s=Dh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dh(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G1(r)),this._blurMaterial=W1(r,t,e)}return s}_compileMaterial(t){let e=new te(this._lodPlanes[0],t);this._renderer.compile(e,Ua)}_sceneToCubeUV(t,e,i,s){let a=new Be(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Ih),h.toneMapping=ai,h.autoClear=!1;let p=new en({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),m=new te(new Yn,p),_=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,_=!0):(p.color.copy(Ih),_=!0);for(let u=0;u<6;u++){let E=u%3;E===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):E===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let b=this._cubeSize;Br(s,E*b,u>2?b:0,b,b),h.setRenderTarget(s),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===us||t.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new te(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Br(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ua)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Lh[(s-r-1)%Lh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new te(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ei-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):Ei;g>Ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ei}`);let u=[],E=0;for(let T=0;T<Ei;++T){let I=T/_,S=Math.exp(-I*I/2);u.push(S),T===0?E+=S:T<g&&(E+=2*S)}for(let T=0;T<u.length;T++)u[T]=u[T]/E;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=m,f.mipInt.value=b-i;let x=this._sizeLods[s],D=3*x*(s>b-ss?s-b+ss:0),A=4*(this._cubeSize-x);Br(e,D,A,3*x,2*x),l.setRenderTarget(e),l.render(d,Ua)}};function G1(n){let t=[],e=[],i=[],s=n,r=n-ss+1+Ph.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-ss?l=Ph[o-n+ss-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,m=6,_=3,g=2,u=1,E=new Float32Array(_*m*p),b=new Float32Array(g*m*p),x=new Float32Array(u*m*p);for(let A=0;A<p;A++){let T=A%3*2/3-1,I=A>2?0:-1,S=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];E.set(S,_*m*A),b.set(f,g*m*A);let v=[A,A,A,A,A,A];x.set(v,u*m*A)}let D=new ge;D.setAttribute("position",new Me(E,_)),D.setAttribute("uv",new Me(b,g)),D.setAttribute("faceIndex",new Me(x,u)),t.push(D),s>ss&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Dh(n,t,e){let i=new Gn(n,t,e);return i.texture.mapping=Ho,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Br(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function W1(n,t,e){let i=new Float32Array(Ei),s=new C(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Uh(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Nh(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function wc(){return`

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
	`}function X1(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===el||l===nl,h=l===us||l===ds;if(c||h){let d=t.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new co(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new co(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Y1(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Bs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function q1(n,t,e,i){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let _=f.morphAttributes[m];for(let g=0,u=_.length;g<u;g++)t.remove(_[g])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let m in f)t.update(f[m],n.ARRAY_BUFFER);let p=d.morphAttributes;for(let m in p){let _=p[m];for(let g=0,u=_.length;g<u;g++)t.update(_[g],n.ARRAY_BUFFER)}}function c(d){let f=[],p=d.index,m=d.attributes.position,_=0;if(p!==null){let E=p.array;_=p.version;for(let b=0,x=E.length;b<x;b+=3){let D=E[b+0],A=E[b+1],T=E[b+2];f.push(D,A,A,T,T,D)}}else if(m!==void 0){let E=m.array;_=m.version;for(let b=0,x=E.length/3-1;b<x;b+=3){let D=b+0,A=b+1,T=b+2;f.push(D,A,A,T,T,D)}}else return;let g=new(Cu(f)?ro:so)(f,1);g.version=_;let u=r.get(d);u&&t.remove(u),r.set(d,g)}function h(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function $1(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),e.update(p,i,1)}function c(f,p,m){m!==0&&(n.drawElementsInstanced(i,p,r,f*o,m),e.update(p,i,m))}function h(f,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,m);let g=0;for(let u=0;u<m;u++)g+=p[u];e.update(g,i,1)}function d(f,p,m,_){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<f.length;u++)c(f[u]/o,p[u],_[u]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,_,0,m);let u=0;for(let E=0;E<m;E++)u+=p[E]*_[E];e.update(u,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Z1(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function j1(n,t,e){let i=new WeakMap,s=new _e;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==d){let S=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],b=0;p===!0&&(b=1),m===!0&&(b=2),_===!0&&(b=3);let x=a.attributes.position.count*b,D=1;x>t.maxTextureSize&&(D=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let A=new Float32Array(x*D*4*d),T=new io(A,x,D,d);T.type=Sn,T.needsUpdate=!0;let I=b*4;for(let v=0;v<d;v++){let P=g[v],H=u[v],z=E[v],Y=x*D*4*v;for(let K=0;K<P.count;K++){let W=K*I;p===!0&&(s.fromBufferAttribute(P,K),A[Y+W+0]=s.x,A[Y+W+1]=s.y,A[Y+W+2]=s.z,A[Y+W+3]=0),m===!0&&(s.fromBufferAttribute(H,K),A[Y+W+4]=s.x,A[Y+W+5]=s.y,A[Y+W+6]=s.z,A[Y+W+7]=0),_===!0&&(s.fromBufferAttribute(z,K),A[Y+W+8]=s.x,A[Y+W+9]=s.y,A[Y+W+10]=s.z,A[Y+W+11]=z.itemSize===4?s.w:1)}}f={count:d,texture:T,size:new ct(x,D)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let m=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function J1(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var ho=class extends Je{constructor(t,e,i,s,r,o,a,l,c,h=as){if(h!==as&&h!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===as&&(i=Ai),i===void 0&&h===ps&&(i=fs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:je,this.minFilter=l!==void 0?l:je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Lu=new Je,Fh=new ho(1,1),Du=new io,Uu=new Ul,Nu=new ao,Oh=[],Bh=[],kh=new Float32Array(16),zh=new Float32Array(9),Hh=new Float32Array(4);function vs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Oh[s];if(r===void 0&&(r=new Float32Array(s),Oh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function we(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Te(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Wo(n,t){let e=Bh[t];e===void 0&&(e=new Int32Array(t),Bh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function K1(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Q1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2fv(this.addr,t),Te(e,t)}}function tm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;n.uniform3fv(this.addr,t),Te(e,t)}}function em(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4fv(this.addr,t),Te(e,t)}}function nm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(we(e,i))return;Hh.set(i),n.uniformMatrix2fv(this.addr,!1,Hh),Te(e,i)}}function im(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(we(e,i))return;zh.set(i),n.uniformMatrix3fv(this.addr,!1,zh),Te(e,i)}}function sm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(we(e,i))return;kh.set(i),n.uniformMatrix4fv(this.addr,!1,kh),Te(e,i)}}function rm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function om(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2iv(this.addr,t),Te(e,t)}}function am(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;n.uniform3iv(this.addr,t),Te(e,t)}}function lm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4iv(this.addr,t),Te(e,t)}}function cm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function hm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2uiv(this.addr,t),Te(e,t)}}function um(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;n.uniform3uiv(this.addr,t),Te(e,t)}}function dm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4uiv(this.addr,t),Te(e,t)}}function fm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Fh.compareFunction=Au,r=Fh):r=Lu,e.setTexture2D(t||r,s)}function pm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Uu,s)}function mm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Nu,s)}function gm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Du,s)}function _m(n){switch(n){case 5126:return K1;case 35664:return Q1;case 35665:return tm;case 35666:return em;case 35674:return nm;case 35675:return im;case 35676:return sm;case 5124:case 35670:return rm;case 35667:case 35671:return om;case 35668:case 35672:return am;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return hm;case 36295:return um;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}function xm(n,t){n.uniform1fv(this.addr,t)}function ym(n,t){let e=vs(t,this.size,2);n.uniform2fv(this.addr,e)}function vm(n,t){let e=vs(t,this.size,3);n.uniform3fv(this.addr,e)}function Mm(n,t){let e=vs(t,this.size,4);n.uniform4fv(this.addr,e)}function Sm(n,t){let e=vs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function bm(n,t){let e=vs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Em(n,t){let e=vs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function wm(n,t){n.uniform1iv(this.addr,t)}function Tm(n,t){n.uniform2iv(this.addr,t)}function Am(n,t){n.uniform3iv(this.addr,t)}function Cm(n,t){n.uniform4iv(this.addr,t)}function Rm(n,t){n.uniform1uiv(this.addr,t)}function Pm(n,t){n.uniform2uiv(this.addr,t)}function Im(n,t){n.uniform3uiv(this.addr,t)}function Lm(n,t){n.uniform4uiv(this.addr,t)}function Dm(n,t,e){let i=this.cache,s=t.length,r=Wo(e,s);we(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Lu,r[o])}function Um(n,t,e){let i=this.cache,s=t.length,r=Wo(e,s);we(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Uu,r[o])}function Nm(n,t,e){let i=this.cache,s=t.length,r=Wo(e,s);we(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Nu,r[o])}function Fm(n,t,e){let i=this.cache,s=t.length,r=Wo(e,s);we(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Du,r[o])}function Om(n){switch(n){case 5126:return xm;case 35664:return ym;case 35665:return vm;case 35666:return Mm;case 35674:return Sm;case 35675:return bm;case 35676:return Em;case 5124:case 35670:return wm;case 35667:case 35671:return Tm;case 35668:case 35672:return Am;case 35669:case 35673:return Cm;case 5125:return Rm;case 36294:return Pm;case 36295:return Im;case 36296:return Lm;case 35678:case 36198:case 36298:case 36306:case 35682:return Dm;case 35679:case 36299:case 36307:return Um;case 35680:case 36300:case 36308:case 36293:return Nm;case 36289:case 36303:case 36311:case 36292:return Fm}}var Ol=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=_m(e.type)}},Bl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Om(e.type)}},kl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},ka=/(\w+)(\])?(\[|\.)?/g;function Vh(n,t){n.seq.push(t),n.map[t.id]=t}function Bm(n,t,e){let i=n.name,s=i.length;for(ka.lastIndex=0;;){let r=ka.exec(i),o=ka.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Vh(e,c===void 0?new Ol(a,n,t):new Bl(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new kl(a),Vh(e,d)),e=d}}}var cs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Bm(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Gh(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var km=37297,zm=0;function Hm(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Wh=new Ht;function Vm(n){Jt._getMatrix(Wh,Jt.workingColorSpace,n);let t=`mat3( ${Wh.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(n)){case Vo:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Xh(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Hm(n.getShaderSource(t),o)}else return s}function Gm(n,t){let e=Vm(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Wm(n,t){let e;switch(t){case Qd:e="Linear";break;case tf:e="Reinhard";break;case ef:e="Cineon";break;case nf:e="ACESFilmic";break;case rf:e="AgX";break;case of:e="Neutral";break;case sf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var kr=new C;function Xm(){Jt.getLuminanceCoefficients(kr);let n=kr.x.toFixed(4),t=kr.y.toFixed(4),e=kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ym(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function qm(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function $m(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ks(n){return n!==""}function Yh(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(n){return n.replace(Zm,Jm)}var jm=new Map;function Jm(n,t){let e=Vt[t];if(e===void 0){let i=jm.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return zl(e)}var Km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $h(n){return n.replace(Km,Qm)}function Qm(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function t0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===gu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ld?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function e0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case us:case ds:t="ENVMAP_TYPE_CUBE";break;case Ho:t="ENVMAP_TYPE_CUBE_UV";break}return t}function n0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ds:t="ENVMAP_MODE_REFRACTION";break}return t}function i0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case zo:t="ENVMAP_BLENDING_MULTIPLY";break;case Jd:t="ENVMAP_BLENDING_MIX";break;case Kd:t="ENVMAP_BLENDING_ADD";break}return t}function s0(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function r0(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=t0(e),c=e0(e),h=n0(e),d=i0(e),f=s0(e),p=Ym(e),m=qm(r),_=s.createProgram(),g,u,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ks).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ks).join(`
`),u.length>0&&(u+=`
`)):(g=[Zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),u=[Zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?Vt.tonemapping_pars_fragment:"",e.toneMapping!==ai?Wm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Gm("linearToOutputTexel",e.outputColorSpace),Xm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ks).join(`
`)),o=zl(o),o=Yh(o,e),o=qh(o,e),a=zl(a),a=Yh(a,e),a=qh(a,e),o=$h(o),a=$h(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",e.glslVersion===lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let b=E+g+o,x=E+u+a,D=Gh(s,s.VERTEX_SHADER,b),A=Gh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,D),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(P){if(n.debug.checkShaderErrors){let H=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(D).trim(),Y=s.getShaderInfoLog(A).trim(),K=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,D,A);else{let nt=Xh(s,D,"vertex"),q=Xh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+nt+`
`+q)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||Y==="")&&(W=!1);W&&(P.diagnostics={runnable:K,programLog:H,vertexShader:{log:z,prefix:g},fragmentShader:{log:Y,prefix:u}})}s.deleteShader(D),s.deleteShader(A),I=new cs(s,_),S=$m(s,_)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,km)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=A,this}var o0=0,Hl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Vl(t),e.set(t,i)),i}},Vl=class{constructor(t){this.id=o0++,this.code=t,this.usedTimes=0}};function a0(n,t,e,i,s,r,o){let a=new $s,l=new Hl,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,v,P,H,z){let Y=H.fog,K=z.geometry,W=S.isMeshStandardMaterial?H.environment:null,nt=(S.isMeshStandardMaterial?e:t).get(S.envMap||W),q=nt&&nt.mapping===Ho?nt.image.height:null,ft=m[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let _t=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Rt=_t!==void 0?_t.length:0,Gt=0;K.morphAttributes.position!==void 0&&(Gt=1),K.morphAttributes.normal!==void 0&&(Gt=2),K.morphAttributes.color!==void 0&&(Gt=3);let re,Z,it,at;if(ft){let Ft=vn[ft];re=Ft.vertexShader,Z=Ft.fragmentShader}else re=S.vertexShader,Z=S.fragmentShader,l.update(S),it=l.getVertexShaderID(S),at=l.getFragmentShaderID(S);let ht=n.getRenderTarget(),Dt=n.state.buffers.depth.getReversed(),Nt=z.isInstancedMesh===!0,kt=z.isBatchedMesh===!0,he=!!S.map,$t=!!S.matcap,yt=!!nt,N=!!S.aoMap,Ne=!!S.lightMap,Xt=!!S.bumpMap,Yt=!!S.normalMap,Lt=!!S.displacementMap,ee=!!S.emissiveMap,It=!!S.metalnessMap,w=!!S.roughnessMap,y=S.anisotropy>0,k=S.clearcoat>0,R=S.dispersion>0,O=S.iridescence>0,B=S.sheen>0,st=S.transmission>0,Q=y&&!!S.anisotropyMap,et=k&&!!S.clearcoatMap,Mt=k&&!!S.clearcoatNormalMap,$=k&&!!S.clearcoatRoughnessMap,J=O&&!!S.iridescenceMap,ut=O&&!!S.iridescenceThicknessMap,xt=B&&!!S.sheenColorMap,rt=B&&!!S.sheenRoughnessMap,bt=!!S.specularMap,vt=!!S.specularColorMap,Wt=!!S.specularIntensityMap,L=st&&!!S.transmissionMap,lt=st&&!!S.thicknessMap,X=!!S.gradientMap,j=!!S.alphaMap,mt=S.alphaTest>0,pt=!!S.alphaHash,Ot=!!S.extensions,ue=ai;S.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(ue=n.toneMapping);let Ct={shaderID:ft,shaderType:S.type,shaderName:S.name,vertexShader:re,fragmentShader:Z,defines:S.defines,customVertexShaderID:it,customFragmentShaderID:at,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:kt,batchingColor:kt&&z._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&z.instanceColor!==null,instancingMorph:Nt&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ht===null?n.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:ys,alphaToCoverage:!!S.alphaToCoverage,map:he,matcap:$t,envMap:yt,envMapMode:yt&&nt.mapping,envMapCubeUVHeight:q,aoMap:N,lightMap:Ne,bumpMap:Xt,normalMap:Yt,displacementMap:f&&Lt,emissiveMap:ee,normalMapObjectSpace:Yt&&S.normalMapType===hf,normalMapTangentSpace:Yt&&S.normalMapType===bc,metalnessMap:It,roughnessMap:w,anisotropy:y,anisotropyMap:Q,clearcoat:k,clearcoatMap:et,clearcoatNormalMap:Mt,clearcoatRoughnessMap:$,dispersion:R,iridescence:O,iridescenceMap:J,iridescenceThicknessMap:ut,sheen:B,sheenColorMap:xt,sheenRoughnessMap:rt,specularMap:bt,specularColorMap:vt,specularIntensityMap:Wt,transmission:st,transmissionMap:L,thicknessMap:lt,gradientMap:X,opaque:S.transparent===!1&&S.blending===os&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:mt,alphaHash:pt,combine:S.combine,mapUv:he&&_(S.map.channel),aoMapUv:N&&_(S.aoMap.channel),lightMapUv:Ne&&_(S.lightMap.channel),bumpMapUv:Xt&&_(S.bumpMap.channel),normalMapUv:Yt&&_(S.normalMap.channel),displacementMapUv:Lt&&_(S.displacementMap.channel),emissiveMapUv:ee&&_(S.emissiveMap.channel),metalnessMapUv:It&&_(S.metalnessMap.channel),roughnessMapUv:w&&_(S.roughnessMap.channel),anisotropyMapUv:Q&&_(S.anisotropyMap.channel),clearcoatMapUv:et&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:rt&&_(S.sheenRoughnessMap.channel),specularMapUv:bt&&_(S.specularMap.channel),specularColorMapUv:vt&&_(S.specularColorMap.channel),specularIntensityMapUv:Wt&&_(S.specularIntensityMap.channel),transmissionMapUv:L&&_(S.transmissionMap.channel),thicknessMapUv:lt&&_(S.thicknessMap.channel),alphaMapUv:j&&_(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Yt||y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(he||j),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Dt,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:Gt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ue,decodeVideoTexture:he&&S.map.isVideoTexture===!0&&Jt.getTransfer(S.map.colorSpace)===oe,decodeVideoTextureEmissive:ee&&S.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(S.emissiveMap.colorSpace)===oe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ge,flipSided:S.side===We,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ot&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&S.extensions.multiDraw===!0||kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function u(S){let v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)v.push(P),v.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(E(v,S),b(v,S),v.push(n.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function E(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function b(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){let v=m[S.type],P;if(v){let H=vn[v];P=Jf.clone(H.uniforms)}else P=S.uniforms;return P}function D(S,v){let P;for(let H=0,z=h.length;H<z;H++){let Y=h[H];if(Y.cacheKey===v){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new r0(n,v,S,r),h.push(P)),P}function A(S){if(--S.usedTimes===0){let v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function T(S){l.remove(S)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:x,acquireProgram:D,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:I}}function l0(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function c0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function jh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Jh(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,f,p,m,_,g){let u=n[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:m,renderOrder:d.renderOrder,z:_,group:g},n[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=m,u.renderOrder=d.renderOrder,u.z=_,u.group=g),t++,u}function a(d,f,p,m,_,g){let u=o(d,f,p,m,_,g);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):e.push(u)}function l(d,f,p,m,_,g){let u=o(d,f,p,m,_,g);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||c0),i.length>1&&i.sort(f||jh),s.length>1&&s.sort(f||jh)}function h(){for(let d=t,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function h0(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Jh,n.set(i,[o])):s>=r.length?(o=new Jh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function u0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Ut};break;case"SpotLight":e={position:new C,direction:new C,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function d0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var f0=0;function p0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function m0(n){let t=new u0,e=d0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let s=new C,r=new se,o=new se;function a(c){let h=0,d=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,m=0,_=0,g=0,u=0,E=0,b=0,x=0,D=0,A=0,T=0;c.sort(p0);for(let S=0,v=c.length;S<v;S++){let P=c[S],H=P.color,z=P.intensity,Y=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=H.r*z,d+=H.g*z,f+=H.b*z;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],z);T++}else if(P.isDirectionalLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let nt=P.shadow,q=e.get(P);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=P.shadow.matrix,E++}i.directional[p]=W,p++}else if(P.isSpotLight){let W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(H).multiplyScalar(z),W.distance=Y,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[_]=W;let nt=P.shadow;if(P.map&&(i.spotLightMap[D]=P.map,D++,nt.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[_]=nt.matrix,P.castShadow){let q=e.get(P);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=K,x++}_++}else if(P.isRectAreaLight){let W=t.get(P);W.color.copy(H).multiplyScalar(z),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=W,g++}else if(P.isPointLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let nt=P.shadow,q=e.get(P);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,q.shadowCameraNear=nt.camera.near,q.shadowCameraFar=nt.camera.far,i.pointShadow[m]=q,i.pointShadowMap[m]=K,i.pointShadowMatrix[m]=P.shadow.matrix,b++}i.point[m]=W,m++}else if(P.isHemisphereLight){let W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(z),W.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[u]=W,u++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let I=i.hash;(I.directionalLength!==p||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==g||I.hemiLength!==u||I.numDirectionalShadows!==E||I.numPointShadows!==b||I.numSpotShadows!==x||I.numSpotMaps!==D||I.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=u,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=x+D-A,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,I.directionalLength=p,I.pointLength=m,I.spotLength=_,I.rectAreaLength=g,I.hemiLength=u,I.numDirectionalShadows=E,I.numPointShadows=b,I.numSpotShadows=x,I.numSpotMaps=D,I.numLightProbes=T,i.version=f0++)}function l(c,h){let d=0,f=0,p=0,m=0,_=0,g=h.matrixWorldInverse;for(let u=0,E=c.length;u<E;u++){let b=c[u];if(b.isDirectionalLight){let x=i.directional[d];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),d++}else if(b.isSpotLight){let x=i.spot[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),p++}else if(b.isRectAreaLight){let x=i.rectArea[m];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(b.isPointLight){let x=i.point[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){let x=i.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function Kh(n){let t=new m0(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function g0(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Kh(n),t.set(s,[a])):r>=o.length?(a=new Kh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Gl=class extends Xn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wl=class extends Xn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},_0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x0=`uniform sampler2D shadow_pass;
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
}`;function y0(n,t,e){let i=new Zs,s=new ct,r=new ct,o=new _e,a=new Gl({depthPacking:cf}),l=new Wl,c={},h=e.maxTextureSize,d={[li]:We,[We]:li,[Ge]:Ge},f=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:_0,fragmentShader:x0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new ge;m.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new te(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gu;let u=this.type;this.render=function(A,T,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let S=n.getRenderTarget(),v=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),H=n.state;H.setBlending(oi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let z=u!==Bn&&this.type===Bn,Y=u===Bn&&this.type!==Bn;for(let K=0,W=A.length;K<W;K++){let nt=A[K],q=nt.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ft=q.getFrameExtents();if(s.multiply(ft),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ft.x),s.x=r.x*ft.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ft.y),s.y=r.y*ft.y,q.mapSize.y=r.y)),q.map===null||z===!0||Y===!0){let Rt=this.type!==Bn?{minFilter:je,magFilter:je}:{};q.map!==null&&q.map.dispose(),q.map=new Gn(s.x,s.y,Rt),q.map.texture.name=nt.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let _t=q.getViewportCount();for(let Rt=0;Rt<_t;Rt++){let Gt=q.getViewport(Rt);o.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),H.viewport(o),q.updateMatrices(nt,Rt),i=q.getFrustum(),x(T,I,q.camera,nt,this.type)}q.isPointLightShadow!==!0&&this.type===Bn&&E(q,I),q.needsUpdate=!1}u=this.type,g.needsUpdate=!1,n.setRenderTarget(S,v,P)};function E(A,T){let I=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Gn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,I,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,I,p,_,null)}function b(A,T,I,S){let v=null,P=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)v=P;else if(v=I.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let H=v.uuid,z=T.uuid,Y=c[H];Y===void 0&&(Y={},c[H]=Y);let K=Y[z];K===void 0&&(K=v.clone(),Y[z]=K,T.addEventListener("dispose",D)),v=K}if(v.visible=T.visible,v.wireframe=T.wireframe,S===Bn?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:d[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let H=n.properties.get(v);H.light=I}return v}function x(A,T,I,S,v){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Bn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);let z=t.update(A),Y=A.material;if(Array.isArray(Y)){let K=z.groups;for(let W=0,nt=K.length;W<nt;W++){let q=K[W],ft=Y[q.materialIndex];if(ft&&ft.visible){let _t=b(A,ft,S,v);A.onBeforeShadow(n,A,T,I,z,_t,q),n.renderBufferDirect(I,null,z,_t,A,q),A.onAfterShadow(n,A,T,I,z,_t,q)}}}else if(Y.visible){let K=b(A,Y,S,v);A.onBeforeShadow(n,A,T,I,z,K,null),n.renderBufferDirect(I,null,z,K,A,null),A.onAfterShadow(n,A,T,I,z,K,null)}}let H=A.children;for(let z=0,Y=H.length;z<Y;z++)x(H[z],T,I,S,v)}function D(A){A.target.removeEventListener("dispose",D);for(let I in c){let S=c[I],v=A.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}var v0={[$a]:Za,[ja]:Qa,[Ja]:tl,[hs]:Ka,[Za]:$a,[Qa]:ja,[tl]:Ja,[Ka]:hs};function M0(n,t){function e(){let L=!1,lt=new _e,X=null,j=new _e(0,0,0,0);return{setMask:function(mt){X!==mt&&!L&&(n.colorMask(mt,mt,mt,mt),X=mt)},setLocked:function(mt){L=mt},setClear:function(mt,pt,Ot,ue,Ct){Ct===!0&&(mt*=ue,pt*=ue,Ot*=ue),lt.set(mt,pt,Ot,ue),j.equals(lt)===!1&&(n.clearColor(mt,pt,Ot,ue),j.copy(lt))},reset:function(){L=!1,X=null,j.set(-1,0,0,0)}}}function i(){let L=!1,lt=!1,X=null,j=null,mt=null;return{setReversed:function(pt){if(lt!==pt){let Ot=t.get("EXT_clip_control");lt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);let ue=mt;mt=null,this.setClear(ue)}lt=pt},getReversed:function(){return lt},setTest:function(pt){pt?ht(n.DEPTH_TEST):Dt(n.DEPTH_TEST)},setMask:function(pt){X!==pt&&!L&&(n.depthMask(pt),X=pt)},setFunc:function(pt){if(lt&&(pt=v0[pt]),j!==pt){switch(pt){case $a:n.depthFunc(n.NEVER);break;case Za:n.depthFunc(n.ALWAYS);break;case ja:n.depthFunc(n.LESS);break;case hs:n.depthFunc(n.LEQUAL);break;case Ja:n.depthFunc(n.EQUAL);break;case Ka:n.depthFunc(n.GEQUAL);break;case Qa:n.depthFunc(n.GREATER);break;case tl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=pt}},setLocked:function(pt){L=pt},setClear:function(pt){mt!==pt&&(lt&&(pt=1-pt),n.clearDepth(pt),mt=pt)},reset:function(){L=!1,X=null,j=null,mt=null,lt=!1}}}function s(){let L=!1,lt=null,X=null,j=null,mt=null,pt=null,Ot=null,ue=null,Ct=null;return{setTest:function(Ft){L||(Ft?ht(n.STENCIL_TEST):Dt(n.STENCIL_TEST))},setMask:function(Ft){lt!==Ft&&!L&&(n.stencilMask(Ft),lt=Ft)},setFunc:function(Ft,xe,He){(X!==Ft||j!==xe||mt!==He)&&(n.stencilFunc(Ft,xe,He),X=Ft,j=xe,mt=He)},setOp:function(Ft,xe,He){(pt!==Ft||Ot!==xe||ue!==He)&&(n.stencilOp(Ft,xe,He),pt=Ft,Ot=xe,ue=He)},setLocked:function(Ft){L=Ft},setClear:function(Ft){Ct!==Ft&&(n.clearStencil(Ft),Ct=Ft)},reset:function(){L=!1,lt=null,X=null,j=null,mt=null,pt=null,Ot=null,ue=null,Ct=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,p=[],m=null,_=!1,g=null,u=null,E=null,b=null,x=null,D=null,A=null,T=new Ut(0,0,0),I=0,S=!1,v=null,P=null,H=null,z=null,Y=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,nt=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=nt>=1):q.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=nt>=2);let ft=null,_t={},Rt=n.getParameter(n.SCISSOR_BOX),Gt=n.getParameter(n.VIEWPORT),re=new _e().fromArray(Rt),Z=new _e().fromArray(Gt);function it(L,lt,X,j){let mt=new Uint8Array(4),pt=n.createTexture();n.bindTexture(L,pt),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ot=0;Ot<X;Ot++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(lt,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,mt):n.texImage2D(lt+Ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,mt);return pt}let at={};at[n.TEXTURE_2D]=it(n.TEXTURE_2D,n.TEXTURE_2D,1),at[n.TEXTURE_CUBE_MAP]=it(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[n.TEXTURE_2D_ARRAY]=it(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),at[n.TEXTURE_3D]=it(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(n.DEPTH_TEST),o.setFunc(hs),Xt(!1),Yt(Qc),ht(n.CULL_FACE),N(oi);function ht(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function Dt(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Nt(L,lt){return d[L]!==lt?(n.bindFramebuffer(L,lt),d[L]=lt,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=lt),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=lt),!0):!1}function kt(L,lt){let X=p,j=!1;if(L){X=f.get(lt),X===void 0&&(X=[],f.set(lt,X));let mt=L.textures;if(X.length!==mt.length||X[0]!==n.COLOR_ATTACHMENT0){for(let pt=0,Ot=mt.length;pt<Ot;pt++)X[pt]=n.COLOR_ATTACHMENT0+pt;X.length=mt.length,j=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,j=!0);j&&n.drawBuffers(X)}function he(L){return m!==L?(n.useProgram(L),m=L,!0):!1}let $t={[Si]:n.FUNC_ADD,[Ud]:n.FUNC_SUBTRACT,[Nd]:n.FUNC_REVERSE_SUBTRACT};$t[Fd]=n.MIN,$t[Od]=n.MAX;let yt={[Bd]:n.ZERO,[kd]:n.ONE,[zd]:n.SRC_COLOR,[Ya]:n.SRC_ALPHA,[Yd]:n.SRC_ALPHA_SATURATE,[Wd]:n.DST_COLOR,[Vd]:n.DST_ALPHA,[Hd]:n.ONE_MINUS_SRC_COLOR,[qa]:n.ONE_MINUS_SRC_ALPHA,[Xd]:n.ONE_MINUS_DST_COLOR,[Gd]:n.ONE_MINUS_DST_ALPHA,[qd]:n.CONSTANT_COLOR,[$d]:n.ONE_MINUS_CONSTANT_COLOR,[Zd]:n.CONSTANT_ALPHA,[jd]:n.ONE_MINUS_CONSTANT_ALPHA};function N(L,lt,X,j,mt,pt,Ot,ue,Ct,Ft){if(L===oi){_===!0&&(Dt(n.BLEND),_=!1);return}if(_===!1&&(ht(n.BLEND),_=!0),L!==Dd){if(L!==g||Ft!==S){if((u!==Si||x!==Si)&&(n.blendEquation(n.FUNC_ADD),u=Si,x=Si),Ft)switch(L){case os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case th:n.blendFunc(n.ONE,n.ONE);break;case eh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case th:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case eh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,b=null,D=null,A=null,T.set(0,0,0),I=0,g=L,S=Ft}return}mt=mt||lt,pt=pt||X,Ot=Ot||j,(lt!==u||mt!==x)&&(n.blendEquationSeparate($t[lt],$t[mt]),u=lt,x=mt),(X!==E||j!==b||pt!==D||Ot!==A)&&(n.blendFuncSeparate(yt[X],yt[j],yt[pt],yt[Ot]),E=X,b=j,D=pt,A=Ot),(ue.equals(T)===!1||Ct!==I)&&(n.blendColor(ue.r,ue.g,ue.b,Ct),T.copy(ue),I=Ct),g=L,S=!1}function Ne(L,lt){L.side===Ge?Dt(n.CULL_FACE):ht(n.CULL_FACE);let X=L.side===We;lt&&(X=!X),Xt(X),L.blending===os&&L.transparent===!1?N(oi):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let j=L.stencilWrite;a.setTest(j),j&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ee(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ht(n.SAMPLE_ALPHA_TO_COVERAGE):Dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(L){v!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),v=L)}function Yt(L){L!==Pd?(ht(n.CULL_FACE),L!==P&&(L===Qc?n.cullFace(n.BACK):L===Id?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Dt(n.CULL_FACE),P=L}function Lt(L){L!==H&&(W&&n.lineWidth(L),H=L)}function ee(L,lt,X){L?(ht(n.POLYGON_OFFSET_FILL),(z!==lt||Y!==X)&&(n.polygonOffset(lt,X),z=lt,Y=X)):Dt(n.POLYGON_OFFSET_FILL)}function It(L){L?ht(n.SCISSOR_TEST):Dt(n.SCISSOR_TEST)}function w(L){L===void 0&&(L=n.TEXTURE0+K-1),ft!==L&&(n.activeTexture(L),ft=L)}function y(L,lt,X){X===void 0&&(ft===null?X=n.TEXTURE0+K-1:X=ft);let j=_t[X];j===void 0&&(j={type:void 0,texture:void 0},_t[X]=j),(j.type!==L||j.texture!==lt)&&(ft!==X&&(n.activeTexture(X),ft=X),n.bindTexture(L,lt||at[L]),j.type=L,j.texture=lt)}function k(){let L=_t[ft];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function R(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function B(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(L){re.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),re.copy(L))}function rt(L){Z.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Z.copy(L))}function bt(L,lt){let X=c.get(lt);X===void 0&&(X=new WeakMap,c.set(lt,X));let j=X.get(L);j===void 0&&(j=n.getUniformBlockIndex(lt,L.name),X.set(L,j))}function vt(L,lt){let j=c.get(lt).get(L);l.get(lt)!==j&&(n.uniformBlockBinding(lt,j,L.__bindingPointIndex),l.set(lt,j))}function Wt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ft=null,_t={},d={},f=new WeakMap,p=[],m=null,_=!1,g=null,u=null,E=null,b=null,x=null,D=null,A=null,T=new Ut(0,0,0),I=0,S=!1,v=null,P=null,H=null,z=null,Y=null,re.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:Dt,bindFramebuffer:Nt,drawBuffers:kt,useProgram:he,setBlending:N,setMaterial:Ne,setFlipSided:Xt,setCullFace:Yt,setLineWidth:Lt,setPolygonOffset:ee,setScissorTest:It,activeTexture:w,bindTexture:y,unbindTexture:k,compressedTexImage2D:R,compressedTexImage3D:O,texImage2D:J,texImage3D:ut,updateUBOMapping:bt,uniformBlockBinding:vt,texStorage2D:Mt,texStorage3D:$,texSubImage2D:B,texSubImage3D:st,compressedTexSubImage2D:Q,compressedTexSubImage3D:et,scissor:xt,viewport:rt,reset:Wt}}function Qh(n,t,e,i){let s=S0(i);switch(e){case Mu:return n*t;case bu:return n*t;case Eu:return n*t*2;case yc:return n*t/s.components*s.byteLength;case vc:return n*t/s.components*s.byteLength;case wu:return n*t*2/s.components*s.byteLength;case Mc:return n*t*2/s.components*s.byteLength;case Su:return n*t*3/s.components*s.byteLength;case dn:return n*t*4/s.components*s.byteLength;case Sc:return n*t*4/s.components*s.byteLength;case $r:case Zr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case jr:case Jr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ol:case ll:return Math.max(n,16)*Math.max(t,8)/4;case rl:case al:return Math.max(n,8)*Math.max(t,8)/2;case cl:case hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ul:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case pl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ml:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case gl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case _l:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case xl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case yl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case vl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case bl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case El:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case wl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Kr:case Tl:case Al:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Tu:case Cl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Rl:case Pl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function S0(n){switch(n){case Hn:case xu:return{byteLength:1,components:1};case Ys:case yu:case sr:return{byteLength:2,components:1};case _c:case xc:return{byteLength:2,components:4};case Ai:case gc:case Sn:return{byteLength:4,components:1};case vu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function b0(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,y){return p?new OffscreenCanvas(w,y):eo("canvas")}function _(w,y,k){let R=1,O=It(w);if((O.width>k||O.height>k)&&(R=k/Math.max(O.width,O.height)),R<1)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap||typeof VideoFrame!="undefined"&&w instanceof VideoFrame){let B=Math.floor(R*O.width),st=Math.floor(R*O.height);d===void 0&&(d=m(B,st));let Q=y?m(B,st):d;return Q.width=B,Q.height=st,Q.getContext("2d").drawImage(w,0,0,B,st),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+B+"x"+st+")."),Q}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),w;return w}function g(w){return w.generateMipmaps}function u(w){n.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(w,y,k,R,O=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let B=y;if(y===n.RED&&(k===n.FLOAT&&(B=n.R32F),k===n.HALF_FLOAT&&(B=n.R16F),k===n.UNSIGNED_BYTE&&(B=n.R8)),y===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(B=n.R8UI),k===n.UNSIGNED_SHORT&&(B=n.R16UI),k===n.UNSIGNED_INT&&(B=n.R32UI),k===n.BYTE&&(B=n.R8I),k===n.SHORT&&(B=n.R16I),k===n.INT&&(B=n.R32I)),y===n.RG&&(k===n.FLOAT&&(B=n.RG32F),k===n.HALF_FLOAT&&(B=n.RG16F),k===n.UNSIGNED_BYTE&&(B=n.RG8)),y===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(B=n.RG8UI),k===n.UNSIGNED_SHORT&&(B=n.RG16UI),k===n.UNSIGNED_INT&&(B=n.RG32UI),k===n.BYTE&&(B=n.RG8I),k===n.SHORT&&(B=n.RG16I),k===n.INT&&(B=n.RG32I)),y===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(B=n.RGB8UI),k===n.UNSIGNED_SHORT&&(B=n.RGB16UI),k===n.UNSIGNED_INT&&(B=n.RGB32UI),k===n.BYTE&&(B=n.RGB8I),k===n.SHORT&&(B=n.RGB16I),k===n.INT&&(B=n.RGB32I)),y===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(B=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(B=n.RGBA16UI),k===n.UNSIGNED_INT&&(B=n.RGBA32UI),k===n.BYTE&&(B=n.RGBA8I),k===n.SHORT&&(B=n.RGBA16I),k===n.INT&&(B=n.RGBA32I)),y===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(B=n.RGB9_E5),y===n.RGBA){let st=O?Vo:Jt.getTransfer(R);k===n.FLOAT&&(B=n.RGBA32F),k===n.HALF_FLOAT&&(B=n.RGBA16F),k===n.UNSIGNED_BYTE&&(B=st===oe?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(B=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(B=n.RGB5_A1)}return(B===n.R16F||B===n.R32F||B===n.RG16F||B===n.RG32F||B===n.RGBA16F||B===n.RGBA32F)&&t.get("EXT_color_buffer_float"),B}function x(w,y){let k;return w?y===null||y===Ai||y===fs?k=n.DEPTH24_STENCIL8:y===Sn?k=n.DEPTH32F_STENCIL8:y===Ys&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ai||y===fs?k=n.DEPTH_COMPONENT24:y===Sn?k=n.DEPTH_COMPONENT32F:y===Ys&&(k=n.DEPTH_COMPONENT16),k}function D(w,y){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==je&&w.minFilter!==Mn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function A(w){let y=w.target;y.removeEventListener("dispose",A),I(y),y.isVideoTexture&&h.delete(y)}function T(w){let y=w.target;y.removeEventListener("dispose",T),v(y)}function I(w){let y=i.get(w);if(y.__webglInit===void 0)return;let k=w.source,R=f.get(k);if(R){let O=R[y.__cacheKey];O.usedTimes--,O.usedTimes===0&&S(w),Object.keys(R).length===0&&f.delete(k)}i.remove(w)}function S(w){let y=i.get(w);n.deleteTexture(y.__webglTexture);let k=w.source,R=f.get(k);delete R[y.__cacheKey],o.memory.textures--}function v(w){let y=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let R=0;R<6;R++){if(Array.isArray(y.__webglFramebuffer[R]))for(let O=0;O<y.__webglFramebuffer[R].length;O++)n.deleteFramebuffer(y.__webglFramebuffer[R][O]);else n.deleteFramebuffer(y.__webglFramebuffer[R]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[R])}else{if(Array.isArray(y.__webglFramebuffer))for(let R=0;R<y.__webglFramebuffer.length;R++)n.deleteFramebuffer(y.__webglFramebuffer[R]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let R=0;R<y.__webglColorRenderbuffer.length;R++)y.__webglColorRenderbuffer[R]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[R]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let k=w.textures;for(let R=0,O=k.length;R<O;R++){let B=i.get(k[R]);B.__webglTexture&&(n.deleteTexture(B.__webglTexture),o.memory.textures--),i.remove(k[R])}i.remove(w)}let P=0;function H(){P=0}function z(){let w=P;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function Y(w){let y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function K(w,y){let k=i.get(w);if(w.isVideoTexture&&Lt(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){let R=w.image;if(R===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(R.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(k,w,y);return}}e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+y)}function W(w,y){let k=i.get(w);if(w.version>0&&k.__version!==w.version){Z(k,w,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+y)}function nt(w,y){let k=i.get(w);if(w.version>0&&k.__version!==w.version){Z(k,w,y);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+y)}function q(w,y){let k=i.get(w);if(w.version>0&&k.__version!==w.version){it(k,w,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+y)}let ft={[il]:n.REPEAT,[wi]:n.CLAMP_TO_EDGE,[sl]:n.MIRRORED_REPEAT},_t={[je]:n.NEAREST,[af]:n.NEAREST_MIPMAP_NEAREST,[yr]:n.NEAREST_MIPMAP_LINEAR,[Mn]:n.LINEAR,[da]:n.LINEAR_MIPMAP_NEAREST,[Ti]:n.LINEAR_MIPMAP_LINEAR},Rt={[uf]:n.NEVER,[_f]:n.ALWAYS,[df]:n.LESS,[Au]:n.LEQUAL,[ff]:n.EQUAL,[gf]:n.GEQUAL,[pf]:n.GREATER,[mf]:n.NOTEQUAL};function Gt(w,y){if(y.type===Sn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Mn||y.magFilter===da||y.magFilter===yr||y.magFilter===Ti||y.minFilter===Mn||y.minFilter===da||y.minFilter===yr||y.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,ft[y.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ft[y.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ft[y.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,_t[y.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,_t[y.minFilter]),y.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Rt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===je||y.minFilter!==yr&&y.minFilter!==Ti||y.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function re(w,y){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",A));let R=y.source,O=f.get(R);O===void 0&&(O={},f.set(R,O));let B=Y(y);if(B!==w.__cacheKey){O[B]===void 0&&(O[B]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),O[B].usedTimes++;let st=O[w.__cacheKey];st!==void 0&&(O[w.__cacheKey].usedTimes--,st.usedTimes===0&&S(y)),w.__cacheKey=B,w.__webglTexture=O[B].texture}return k}function Z(w,y,k){let R=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(R=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(R=n.TEXTURE_3D);let O=re(w,y),B=y.source;e.bindTexture(R,w.__webglTexture,n.TEXTURE0+k);let st=i.get(B);if(B.version!==st.__version||O===!0){e.activeTexture(n.TEXTURE0+k);let Q=Jt.getPrimaries(Jt.workingColorSpace),et=y.colorSpace===ri?null:Jt.getPrimaries(y.colorSpace),Mt=y.colorSpace===ri||Q===et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let $=_(y.image,!1,s.maxTextureSize);$=ee(y,$);let J=r.convert(y.format,y.colorSpace),ut=r.convert(y.type),xt=b(y.internalFormat,J,ut,y.colorSpace,y.isVideoTexture);Gt(R,y);let rt,bt=y.mipmaps,vt=y.isVideoTexture!==!0,Wt=st.__version===void 0||O===!0,L=B.dataReady,lt=D(y,$);if(y.isDepthTexture)xt=x(y.format===ps,y.type),Wt&&(vt?e.texStorage2D(n.TEXTURE_2D,1,xt,$.width,$.height):e.texImage2D(n.TEXTURE_2D,0,xt,$.width,$.height,0,J,ut,null));else if(y.isDataTexture)if(bt.length>0){vt&&Wt&&e.texStorage2D(n.TEXTURE_2D,lt,xt,bt[0].width,bt[0].height);for(let X=0,j=bt.length;X<j;X++)rt=bt[X],vt?L&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,rt.width,rt.height,J,ut,rt.data):e.texImage2D(n.TEXTURE_2D,X,xt,rt.width,rt.height,0,J,ut,rt.data);y.generateMipmaps=!1}else vt?(Wt&&e.texStorage2D(n.TEXTURE_2D,lt,xt,$.width,$.height),L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,$.width,$.height,J,ut,$.data)):e.texImage2D(n.TEXTURE_2D,0,xt,$.width,$.height,0,J,ut,$.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){vt&&Wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,xt,bt[0].width,bt[0].height,$.depth);for(let X=0,j=bt.length;X<j;X++)if(rt=bt[X],y.format!==dn)if(J!==null)if(vt){if(L)if(y.layerUpdates.size>0){let mt=Qh(rt.width,rt.height,y.format,y.type);for(let pt of y.layerUpdates){let Ot=rt.data.subarray(pt*mt/rt.data.BYTES_PER_ELEMENT,(pt+1)*mt/rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,pt,rt.width,rt.height,1,J,Ot)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,rt.width,rt.height,$.depth,J,rt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,xt,rt.width,rt.height,$.depth,0,rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else vt?L&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,rt.width,rt.height,$.depth,J,ut,rt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,X,xt,rt.width,rt.height,$.depth,0,J,ut,rt.data)}else{vt&&Wt&&e.texStorage2D(n.TEXTURE_2D,lt,xt,bt[0].width,bt[0].height);for(let X=0,j=bt.length;X<j;X++)rt=bt[X],y.format!==dn?J!==null?vt?L&&e.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,rt.width,rt.height,J,rt.data):e.compressedTexImage2D(n.TEXTURE_2D,X,xt,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?L&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,rt.width,rt.height,J,ut,rt.data):e.texImage2D(n.TEXTURE_2D,X,xt,rt.width,rt.height,0,J,ut,rt.data)}else if(y.isDataArrayTexture)if(vt){if(Wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,xt,$.width,$.height,$.depth),L)if(y.layerUpdates.size>0){let X=Qh($.width,$.height,y.format,y.type);for(let j of y.layerUpdates){let mt=$.data.subarray(j*X/$.data.BYTES_PER_ELEMENT,(j+1)*X/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,$.width,$.height,1,J,ut,mt)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,J,ut,$.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,xt,$.width,$.height,$.depth,0,J,ut,$.data);else if(y.isData3DTexture)vt?(Wt&&e.texStorage3D(n.TEXTURE_3D,lt,xt,$.width,$.height,$.depth),L&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,J,ut,$.data)):e.texImage3D(n.TEXTURE_3D,0,xt,$.width,$.height,$.depth,0,J,ut,$.data);else if(y.isFramebufferTexture){if(Wt)if(vt)e.texStorage2D(n.TEXTURE_2D,lt,xt,$.width,$.height);else{let X=$.width,j=$.height;for(let mt=0;mt<lt;mt++)e.texImage2D(n.TEXTURE_2D,mt,xt,X,j,0,J,ut,null),X>>=1,j>>=1}}else if(bt.length>0){if(vt&&Wt){let X=It(bt[0]);e.texStorage2D(n.TEXTURE_2D,lt,xt,X.width,X.height)}for(let X=0,j=bt.length;X<j;X++)rt=bt[X],vt?L&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,J,ut,rt):e.texImage2D(n.TEXTURE_2D,X,xt,J,ut,rt);y.generateMipmaps=!1}else if(vt){if(Wt){let X=It($);e.texStorage2D(n.TEXTURE_2D,lt,xt,X.width,X.height)}L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,J,ut,$)}else e.texImage2D(n.TEXTURE_2D,0,xt,J,ut,$);g(y)&&u(R),st.__version=B.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function it(w,y,k){if(y.image.length!==6)return;let R=re(w,y),O=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+k);let B=i.get(O);if(O.version!==B.__version||R===!0){e.activeTexture(n.TEXTURE0+k);let st=Jt.getPrimaries(Jt.workingColorSpace),Q=y.colorSpace===ri?null:Jt.getPrimaries(y.colorSpace),et=y.colorSpace===ri||st===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let Mt=y.isCompressedTexture||y.image[0].isCompressedTexture,$=y.image[0]&&y.image[0].isDataTexture,J=[];for(let j=0;j<6;j++)!Mt&&!$?J[j]=_(y.image[j],!0,s.maxCubemapSize):J[j]=$?y.image[j].image:y.image[j],J[j]=ee(y,J[j]);let ut=J[0],xt=r.convert(y.format,y.colorSpace),rt=r.convert(y.type),bt=b(y.internalFormat,xt,rt,y.colorSpace),vt=y.isVideoTexture!==!0,Wt=B.__version===void 0||R===!0,L=O.dataReady,lt=D(y,ut);Gt(n.TEXTURE_CUBE_MAP,y);let X;if(Mt){vt&&Wt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,bt,ut.width,ut.height);for(let j=0;j<6;j++){X=J[j].mipmaps;for(let mt=0;mt<X.length;mt++){let pt=X[mt];y.format!==dn?xt!==null?vt?L&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,0,0,pt.width,pt.height,xt,pt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,bt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):vt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,0,0,pt.width,pt.height,xt,rt,pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,bt,pt.width,pt.height,0,xt,rt,pt.data)}}}else{if(X=y.mipmaps,vt&&Wt){X.length>0&&lt++;let j=It(J[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,bt,j.width,j.height)}for(let j=0;j<6;j++)if($){vt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,J[j].width,J[j].height,xt,rt,J[j].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,bt,J[j].width,J[j].height,0,xt,rt,J[j].data);for(let mt=0;mt<X.length;mt++){let Ot=X[mt].image[j].image;vt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,0,0,Ot.width,Ot.height,xt,rt,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,bt,Ot.width,Ot.height,0,xt,rt,Ot.data)}}else{vt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,xt,rt,J[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,bt,xt,rt,J[j]);for(let mt=0;mt<X.length;mt++){let pt=X[mt];vt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,0,0,xt,rt,pt.image[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,bt,xt,rt,pt.image[j])}}}g(y)&&u(n.TEXTURE_CUBE_MAP),B.__version=O.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function at(w,y,k,R,O,B){let st=r.convert(k.format,k.colorSpace),Q=r.convert(k.type),et=b(k.internalFormat,st,Q,k.colorSpace),Mt=i.get(y),$=i.get(k);if($.__renderTarget=y,!Mt.__hasExternalTextures){let J=Math.max(1,y.width>>B),ut=Math.max(1,y.height>>B);O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?e.texImage3D(O,B,et,J,ut,y.depth,0,st,Q,null):e.texImage2D(O,B,et,J,ut,0,st,Q,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),Yt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,R,O,$.__webglTexture,0,Xt(y)):(O===n.TEXTURE_2D||O>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,R,O,$.__webglTexture,B),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(w,y,k){if(n.bindRenderbuffer(n.RENDERBUFFER,w),y.depthBuffer){let R=y.depthTexture,O=R&&R.isDepthTexture?R.type:null,B=x(y.stencilBuffer,O),st=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=Xt(y);Yt(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,B,y.width,y.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,B,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,B,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,w)}else{let R=y.textures;for(let O=0;O<R.length;O++){let B=R[O],st=r.convert(B.format,B.colorSpace),Q=r.convert(B.type),et=b(B.internalFormat,st,Q,B.colorSpace),Mt=Xt(y);k&&Yt(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt,et,y.width,y.height):Yt(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt,et,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,et,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Dt(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let R=i.get(y.depthTexture);R.__renderTarget=y,(!R.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K(y.depthTexture,0);let O=R.__webglTexture,B=Xt(y);if(y.depthTexture.format===as)Yt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0);else if(y.depthTexture.format===ps)Yt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function Nt(w){let y=i.get(w),k=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){let R=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),R){let O=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,R.removeEventListener("dispose",O)};R.addEventListener("dispose",O),y.__depthDisposeCallback=O}y.__boundDepthTexture=R}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Dt(y.__webglFramebuffer,w)}else if(k){y.__webglDepthbuffer=[];for(let R=0;R<6;R++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[R]),y.__webglDepthbuffer[R]===void 0)y.__webglDepthbuffer[R]=n.createRenderbuffer(),ht(y.__webglDepthbuffer[R],w,!1);else{let O=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=y.__webglDepthbuffer[R];n.bindRenderbuffer(n.RENDERBUFFER,B),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,B)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ht(y.__webglDepthbuffer,w,!1);else{let R=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,O=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,O),n.framebufferRenderbuffer(n.FRAMEBUFFER,R,n.RENDERBUFFER,O)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(w,y,k){let R=i.get(w);y!==void 0&&at(R.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Nt(w)}function he(w){let y=w.texture,k=i.get(w),R=i.get(y);w.addEventListener("dispose",T);let O=w.textures,B=w.isWebGLCubeRenderTarget===!0,st=O.length>1;if(st||(R.__webglTexture===void 0&&(R.__webglTexture=n.createTexture()),R.__version=y.version,o.memory.textures++),B){k.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[Q]=[];for(let et=0;et<y.mipmaps.length;et++)k.__webglFramebuffer[Q][et]=n.createFramebuffer()}else k.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let Q=0;Q<y.mipmaps.length;Q++)k.__webglFramebuffer[Q]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(st)for(let Q=0,et=O.length;Q<et;Q++){let Mt=i.get(O[Q]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&Yt(w)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Q=0;Q<O.length;Q++){let et=O[Q];k.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[Q]);let Mt=r.convert(et.format,et.colorSpace),$=r.convert(et.type),J=b(et.internalFormat,Mt,$,et.colorSpace,w.isXRRenderTarget===!0),ut=Xt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,J,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,k.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),ht(k.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(B){e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture),Gt(n.TEXTURE_CUBE_MAP,y);for(let Q=0;Q<6;Q++)if(y.mipmaps&&y.mipmaps.length>0)for(let et=0;et<y.mipmaps.length;et++)at(k.__webglFramebuffer[Q][et],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,et);else at(k.__webglFramebuffer[Q],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);g(y)&&u(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let Q=0,et=O.length;Q<et;Q++){let Mt=O[Q],$=i.get(Mt);e.bindTexture(n.TEXTURE_2D,$.__webglTexture),Gt(n.TEXTURE_2D,Mt),at(k.__webglFramebuffer,w,Mt,n.COLOR_ATTACHMENT0+Q,n.TEXTURE_2D,0),g(Mt)&&u(n.TEXTURE_2D)}e.unbindTexture()}else{let Q=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Q=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Q,R.__webglTexture),Gt(Q,y),y.mipmaps&&y.mipmaps.length>0)for(let et=0;et<y.mipmaps.length;et++)at(k.__webglFramebuffer[et],w,y,n.COLOR_ATTACHMENT0,Q,et);else at(k.__webglFramebuffer,w,y,n.COLOR_ATTACHMENT0,Q,0);g(y)&&u(Q),e.unbindTexture()}w.depthBuffer&&Nt(w)}function $t(w){let y=w.textures;for(let k=0,R=y.length;k<R;k++){let O=y[k];if(g(O)){let B=E(w),st=i.get(O).__webglTexture;e.bindTexture(B,st),u(B),e.unbindTexture()}}}let yt=[],N=[];function Ne(w){if(w.samples>0){if(Yt(w)===!1){let y=w.textures,k=w.width,R=w.height,O=n.COLOR_BUFFER_BIT,B=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=i.get(w),Q=y.length>1;if(Q)for(let et=0;et<y.length;et++)e.bindFramebuffer(n.FRAMEBUFFER,st.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+et,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,st.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+et,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let et=0;et<y.length;et++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(O|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(O|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,st.__webglColorRenderbuffer[et]);let Mt=i.get(y[et]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Mt,0)}n.blitFramebuffer(0,0,k,R,0,0,k,R,O,n.NEAREST),l===!0&&(yt.length=0,N.length=0,yt.push(n.COLOR_ATTACHMENT0+et),w.depthBuffer&&w.resolveDepthBuffer===!1&&(yt.push(B),N.push(B),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,yt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let et=0;et<y.length;et++){e.bindFramebuffer(n.FRAMEBUFFER,st.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+et,n.RENDERBUFFER,st.__webglColorRenderbuffer[et]);let Mt=i.get(y[et]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,st.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+et,n.TEXTURE_2D,Mt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Xt(w){return Math.min(s.maxSamples,w.samples)}function Yt(w){let y=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Lt(w){let y=o.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function ee(w,y){let k=w.colorSpace,R=w.format,O=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==ys&&k!==ri&&(Jt.getTransfer(k)===oe?(R!==dn||O!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function It(w){return typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame!="undefined"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=K,this.setTexture2DArray=W,this.setTexture3D=nt,this.setTextureCube=q,this.rebindTextures=kt,this.setupRenderTarget=he,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=Yt}function E0(n,t){function e(i,s=ri){let r,o=Jt.getTransfer(s);if(i===Hn)return n.UNSIGNED_BYTE;if(i===_c)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===vu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xu)return n.BYTE;if(i===yu)return n.SHORT;if(i===Ys)return n.UNSIGNED_SHORT;if(i===gc)return n.INT;if(i===Ai)return n.UNSIGNED_INT;if(i===Sn)return n.FLOAT;if(i===sr)return n.HALF_FLOAT;if(i===Mu)return n.ALPHA;if(i===Su)return n.RGB;if(i===dn)return n.RGBA;if(i===bu)return n.LUMINANCE;if(i===Eu)return n.LUMINANCE_ALPHA;if(i===as)return n.DEPTH_COMPONENT;if(i===ps)return n.DEPTH_STENCIL;if(i===yc)return n.RED;if(i===vc)return n.RED_INTEGER;if(i===wu)return n.RG;if(i===Mc)return n.RG_INTEGER;if(i===Sc)return n.RGBA_INTEGER;if(i===$r||i===Zr||i===jr||i===Jr)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===$r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===$r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rl||i===ol||i===al||i===ll)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cl||i===hl||i===ul)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===cl||i===hl)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ul)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===dl||i===fl||i===pl||i===ml||i===gl||i===_l||i===xl||i===yl||i===vl||i===Ml||i===Sl||i===bl||i===El||i===wl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===dl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ml)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_l)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ml)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===El)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kr||i===Tl||i===Al)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Kr)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tu||i===Cl||i===Rl||i===Pl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Kr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Xl=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Le=class extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},w0={type:"move"},Vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,i),u=this._getHandJoint(c,_);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(w0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Le;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},T0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A0=`
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

}`,Yl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new bn({vertexShader:T0,fragmentShader:A0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new Ri(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ql=class extends Vn{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,m=null,_=new Yl,g=e.getContextAttributes(),u=null,E=null,b=[],x=[],D=new ct,A=null,T=new Be;T.viewport=new _e;let I=new Be;I.viewport=new _e;let S=[T,I],v=new Xl,P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=b[Z];return it===void 0&&(it=new Vs,b[Z]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=b[Z];return it===void 0&&(it=new Vs,b[Z]=it),it.getGripSpace()},this.getHand=function(Z){let it=b[Z];return it===void 0&&(it=new Vs,b[Z]=it),it.getHandSpace()};function z(Z){let it=x.indexOf(Z.inputSource);if(it===-1)return;let at=b[it];at!==void 0&&(at.update(Z.inputSource,Z.frame,c||o),at.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",K);for(let Z=0;Z<b.length;Z++){let it=x[Z];it!==null&&(x[Z]=null,b[Z].disconnect(it))}P=null,H=null,_.reset(),t.setRenderTarget(u),p=null,f=null,d=null,s=null,E=null,re.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let it={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Gn(p.framebufferWidth,p.framebufferHeight,{format:dn,type:Hn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let it=null,at=null,ht=null;g.depth&&(ht=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=g.stencil?ps:as,at=g.stencil?fs:Ai);let Dt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Dt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Gn(f.textureWidth,f.textureHeight,{format:dn,type:Hn,depthTexture:new ho(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),re.setContext(s),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(Z){for(let it=0;it<Z.removed.length;it++){let at=Z.removed[it],ht=x.indexOf(at);ht>=0&&(x[ht]=null,b[ht].disconnect(at))}for(let it=0;it<Z.added.length;it++){let at=Z.added[it],ht=x.indexOf(at);if(ht===-1){for(let Nt=0;Nt<b.length;Nt++)if(Nt>=x.length){x.push(at),ht=Nt;break}else if(x[Nt]===null){x[Nt]=at,ht=Nt;break}if(ht===-1)break}let Dt=b[ht];Dt&&Dt.connect(at)}}let W=new C,nt=new C;function q(Z,it,at){W.setFromMatrixPosition(it.matrixWorld),nt.setFromMatrixPosition(at.matrixWorld);let ht=W.distanceTo(nt),Dt=it.projectionMatrix.elements,Nt=at.projectionMatrix.elements,kt=Dt[14]/(Dt[10]-1),he=Dt[14]/(Dt[10]+1),$t=(Dt[9]+1)/Dt[5],yt=(Dt[9]-1)/Dt[5],N=(Dt[8]-1)/Dt[0],Ne=(Nt[8]+1)/Nt[0],Xt=kt*N,Yt=kt*Ne,Lt=ht/(-N+Ne),ee=Lt*-N;if(it.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ee),Z.translateZ(Lt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Dt[10]===-1)Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let It=kt+Lt,w=he+Lt,y=Xt-ee,k=Yt+(ht-ee),R=$t*he/w*It,O=yt*he/w*It;Z.projectionMatrix.makePerspective(y,k,R,O,It,w),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ft(Z,it){it===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let it=Z.near,at=Z.far;_.texture!==null&&(_.depthNear>0&&(it=_.depthNear),_.depthFar>0&&(at=_.depthFar)),v.near=I.near=T.near=it,v.far=I.far=T.far=at,(P!==v.near||H!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,H=v.far),T.layers.mask=Z.layers.mask|2,I.layers.mask=Z.layers.mask|4,v.layers.mask=T.layers.mask|I.layers.mask;let ht=Z.parent,Dt=v.cameras;ft(v,ht);for(let Nt=0;Nt<Dt.length;Nt++)ft(Dt[Nt],ht);Dt.length===2?q(v,T,I):v.projectionMatrix.copy(T.projectionMatrix),_t(Z,v,ht)};function _t(Z,it,at){at===null?Z.matrix.copy(it.matrixWorld):(Z.matrix.copy(at.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=qs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let Rt=null;function Gt(Z,it){if(h=it.getViewerPose(c||o),m=it,h!==null){let at=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let ht=!1;at.length!==v.cameras.length&&(v.cameras.length=0,ht=!0);for(let Nt=0;Nt<at.length;Nt++){let kt=at[Nt],he=null;if(p!==null)he=p.getViewport(kt);else{let yt=d.getViewSubImage(f,kt);he=yt.viewport,Nt===0&&(t.setRenderTargetTextures(E,yt.colorTexture,f.ignoreDepthValues?void 0:yt.depthStencilTexture),t.setRenderTarget(E))}let $t=S[Nt];$t===void 0&&($t=new Be,$t.layers.enable(Nt),$t.viewport=new _e,S[Nt]=$t),$t.matrix.fromArray(kt.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(kt.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(he.x,he.y,he.width,he.height),Nt===0&&(v.matrix.copy($t.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ht===!0&&v.cameras.push($t)}let Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){let Nt=d.getDepthInformation(at[0]);Nt&&Nt.isValid&&Nt.texture&&_.init(t,Nt,s.renderState)}}for(let at=0;at<b.length;at++){let ht=x[at],Dt=b[at];ht!==null&&Dt!==void 0&&Dt.update(ht,it,c||o)}Rt&&Rt(Z,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),m=null}let re=new Iu;re.setAnimationLoop(Gt),this.setAnimationLoop=function(Z){Rt=Z},this.dispose=function(){}}},vi=new pn,C0=new se;function R0(n,t){function e(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,Pu(n)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function s(g,u,E,b,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(g,u):u.isMeshToonMaterial?(r(g,u),d(g,u)):u.isMeshPhongMaterial?(r(g,u),h(g,u)):u.isMeshStandardMaterial?(r(g,u),f(g,u),u.isMeshPhysicalMaterial&&p(g,u,x)):u.isMeshMatcapMaterial?(r(g,u),m(g,u)):u.isMeshDepthMaterial?r(g,u):u.isMeshDistanceMaterial?(r(g,u),_(g,u)):u.isMeshNormalMaterial?r(g,u):u.isLineBasicMaterial?(o(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?l(g,u,E,b):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,e(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,e(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,e(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===We&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,e(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===We&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,e(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,e(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);let E=t.get(u),b=E.envMap,x=E.envMapRotation;b&&(g.envMap.value=b,vi.copy(x),vi.x*=-1,vi.y*=-1,vi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),g.envMapRotation.value.setFromMatrix4(C0.makeRotationFromEuler(vi)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,g.aoMapTransform))}function o(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,e(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,E,b){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*E,g.scale.value=b*.5,u.map&&(g.map.value=u.map,e(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,e(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,e(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,e(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function h(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function d(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function f(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,E){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===We&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,u){u.matcap&&(g.matcap.value=u.matcap)}function _(g,u){let E=t.get(u).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function P0(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){let x=b.program;i.uniformBlockBinding(E,x)}function c(E,b){let x=s[E.id];x===void 0&&(m(E),x=h(E),s[E.id]=x,E.addEventListener("dispose",g));let D=b.program;i.updateUBOMapping(E,D);let A=t.render.frame;r[E.id]!==A&&(f(E),r[E.id]=A)}function h(E){let b=d();E.__bindingPointIndex=b;let x=n.createBuffer(),D=E.__size,A=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,D,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,x),x}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let b=s[E.id],x=E.uniforms,D=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let A=0,T=x.length;A<T;A++){let I=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,v=I.length;S<v;S++){let P=I[S];if(p(P,A,S,D)===!0){let H=P.__offset,z=Array.isArray(P.value)?P.value:[P.value],Y=0;for(let K=0;K<z.length;K++){let W=z[K],nt=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,H+Y,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,Y),Y+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,b,x,D){let A=E.value,T=b+"_"+x;if(D[T]===void 0)return typeof A=="number"||typeof A=="boolean"?D[T]=A:D[T]=A.clone(),!0;{let I=D[T];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return D[T]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function m(E){let b=E.uniforms,x=0,D=16;for(let T=0,I=b.length;T<I;T++){let S=Array.isArray(b[T])?b[T]:[b[T]];for(let v=0,P=S.length;v<P;v++){let H=S[v],z=Array.isArray(H.value)?H.value:[H.value];for(let Y=0,K=z.length;Y<K;Y++){let W=z[Y],nt=_(W),q=x%D,ft=q%nt.boundary,_t=q+ft;x+=ft,_t!==0&&D-_t<nt.storage&&(x+=D-_t),H.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=nt.storage}}}let A=x%D;return A>0&&(x+=D-A),E.__size=x,E.__cache={},this}function _(E){let b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function g(E){let b=E.target;b.removeEventListener("dispose",g);let x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function u(){for(let E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var uo=class{constructor(t={}){let{canvas:e=Uf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let m=new Uint32Array(4),_=new Int32Array(4),g=null,u=null,E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=ai,this.toneMappingExposure=1;let x=this,D=!1,A=0,T=0,I=null,S=-1,v=null,P=new _e,H=new _e,z=null,Y=new Ut(0),K=0,W=e.width,nt=e.height,q=1,ft=null,_t=null,Rt=new _e(0,0,W,nt),Gt=new _e(0,0,W,nt),re=!1,Z=new Zs,it=!1,at=!1,ht=new se,Dt=new se,Nt=new C,kt=new _e,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function yt(){return I===null?q:1}let N=i;function Ne(M,U){return e.getContext(M,U)}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${mc}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),N===null){let U="webgl2";if(N=Ne(U,M),N===null)throw Ne(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Xt,Yt,Lt,ee,It,w,y,k,R,O,B,st,Q,et,Mt,$,J,ut,xt,rt,bt,vt,Wt,L;function lt(){Xt=new Y1(N),Xt.init(),vt=new E0(N,Xt),Yt=new z1(N,Xt,t,vt),Lt=new M0(N,Xt),Yt.reverseDepthBuffer&&f&&Lt.buffers.depth.setReversed(!0),ee=new Z1(N),It=new l0,w=new b0(N,Xt,Lt,It,Yt,vt,ee),y=new V1(x),k=new X1(x),R=new np(N),Wt=new B1(N,R),O=new q1(N,R,ee,Wt),B=new J1(N,O,R,ee),xt=new j1(N,Yt,w),$=new H1(It),st=new a0(x,y,k,Xt,Yt,Wt,$),Q=new R0(x,It),et=new h0,Mt=new g0(Xt),ut=new O1(x,y,k,Lt,B,p,l),J=new y0(x,B,Yt),L=new P0(N,ee,Yt,Lt),rt=new k1(N,Xt,ee),bt=new $1(N,Xt,ee),ee.programs=st.programs,x.capabilities=Yt,x.extensions=Xt,x.properties=It,x.renderLists=et,x.shadowMap=J,x.state=Lt,x.info=ee}lt();let X=new ql(x,N);this.xr=X,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let M=Xt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Xt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(M){M!==void 0&&(q=M,this.setSize(W,nt,!1))},this.getSize=function(M){return M.set(W,nt)},this.setSize=function(M,U,V=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,nt=U,e.width=Math.floor(M*q),e.height=Math.floor(U*q),V===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(W*q,nt*q).floor()},this.setDrawingBufferSize=function(M,U,V){W=M,nt=U,q=V,e.width=Math.floor(M*V),e.height=Math.floor(U*V),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(Rt)},this.setViewport=function(M,U,V,G){M.isVector4?Rt.set(M.x,M.y,M.z,M.w):Rt.set(M,U,V,G),Lt.viewport(P.copy(Rt).multiplyScalar(q).round())},this.getScissor=function(M){return M.copy(Gt)},this.setScissor=function(M,U,V,G){M.isVector4?Gt.set(M.x,M.y,M.z,M.w):Gt.set(M,U,V,G),Lt.scissor(H.copy(Gt).multiplyScalar(q).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(M){Lt.setScissorTest(re=M)},this.setOpaqueSort=function(M){ft=M},this.setTransparentSort=function(M){_t=M},this.getClearColor=function(M){return M.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor.apply(ut,arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha.apply(ut,arguments)},this.clear=function(M=!0,U=!0,V=!0){let G=0;if(M){let F=!1;if(I!==null){let ot=I.texture.format;F=ot===Sc||ot===Mc||ot===vc}if(F){let ot=I.texture.type,gt=ot===Hn||ot===Ai||ot===Ys||ot===fs||ot===_c||ot===xc,Et=ut.getClearColor(),wt=ut.getClearAlpha(),Bt=Et.r,zt=Et.g,Tt=Et.b;gt?(m[0]=Bt,m[1]=zt,m[2]=Tt,m[3]=wt,N.clearBufferuiv(N.COLOR,0,m)):(_[0]=Bt,_[1]=zt,_[2]=Tt,_[3]=wt,N.clearBufferiv(N.COLOR,0,_))}else G|=N.COLOR_BUFFER_BIT}U&&(G|=N.DEPTH_BUFFER_BIT),V&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),et.dispose(),Mt.dispose(),It.dispose(),y.dispose(),k.dispose(),B.dispose(),Wt.dispose(),L.dispose(),st.dispose(),X.dispose(),X.removeEventListener("sessionstart",on),X.removeEventListener("sessionend",zi),pi.stop()};function j(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let M=ee.autoReset,U=J.enabled,V=J.autoUpdate,G=J.needsUpdate,F=J.type;lt(),ee.autoReset=M,J.enabled=U,J.autoUpdate=V,J.needsUpdate=G,J.type=F}function pt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ot(M){let U=M.target;U.removeEventListener("dispose",Ot),ue(U)}function ue(M){Ct(M),It.remove(M)}function Ct(M){let U=It.get(M).programs;U!==void 0&&(U.forEach(function(V){st.releaseProgram(V)}),M.isShaderMaterial&&st.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,V,G,F,ot){U===null&&(U=he);let gt=F.isMesh&&F.matrixWorld.determinant()<0,Et=Ad(M,U,V,G,F);Lt.setMaterial(G,gt);let wt=V.index,Bt=1;if(G.wireframe===!0){if(wt=O.getWireframeAttribute(V),wt===void 0)return;Bt=2}let zt=V.drawRange,Tt=V.attributes.position,Kt=zt.start*Bt,ce=(zt.start+zt.count)*Bt;ot!==null&&(Kt=Math.max(Kt,ot.start*Bt),ce=Math.min(ce,(ot.start+ot.count)*Bt)),wt!==null?(Kt=Math.max(Kt,0),ce=Math.min(ce,wt.count)):Tt!=null&&(Kt=Math.max(Kt,0),ce=Math.min(ce,Tt.count));let de=ce-Kt;if(de<0||de===1/0)return;Wt.setup(F,G,Et,V,wt);let Ve,ne=rt;if(wt!==null&&(Ve=R.get(wt),ne=bt,ne.setIndex(Ve)),F.isMesh)G.wireframe===!0?(Lt.setLineWidth(G.wireframeLinewidth*yt()),ne.setMode(N.LINES)):ne.setMode(N.TRIANGLES);else if(F.isLine){let Pt=G.linewidth;Pt===void 0&&(Pt=1),Lt.setLineWidth(Pt*yt()),F.isLineSegments?ne.setMode(N.LINES):F.isLineLoop?ne.setMode(N.LINE_LOOP):ne.setMode(N.LINE_STRIP)}else F.isPoints?ne.setMode(N.POINTS):F.isSprite&&ne.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ne.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))ne.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Pt=F._multiDrawStarts,Ln=F._multiDrawCounts,ie=F._multiDrawCount,an=wt?R.get(wt).bytesPerElement:1,Hi=It.get(G).currentProgram.getUniforms();for(let qe=0;qe<ie;qe++)Hi.setValue(N,"_gl_DrawID",qe),ne.render(Pt[qe]/an,Ln[qe])}else if(F.isInstancedMesh)ne.renderInstances(Kt,de,F.count);else if(V.isInstancedBufferGeometry){let Pt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ln=Math.min(V.instanceCount,Pt);ne.renderInstances(Kt,de,Ln)}else ne.render(Kt,de)};function Ft(M,U,V){M.transparent===!0&&M.side===Ge&&M.forceSinglePass===!1?(M.side=We,M.needsUpdate=!0,xr(M,U,V),M.side=li,M.needsUpdate=!0,xr(M,U,V),M.side=Ge):xr(M,U,V)}this.compile=function(M,U,V=null){V===null&&(V=M),u=Mt.get(V),u.init(U),b.push(u),V.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),M!==V&&M.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),u.setupLights();let G=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ot=F.material;if(ot)if(Array.isArray(ot))for(let gt=0;gt<ot.length;gt++){let Et=ot[gt];Ft(Et,V,F),G.add(Et)}else Ft(ot,V,F),G.add(ot)}),b.pop(),u=null,G},this.compileAsync=function(M,U,V=null){let G=this.compile(M,U,V);return new Promise(F=>{function ot(){if(G.forEach(function(gt){It.get(gt).currentProgram.isReady()&&G.delete(gt)}),G.size===0){F(M);return}setTimeout(ot,10)}Xt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let xe=null;function He(M){xe&&xe(M)}function on(){pi.stop()}function zi(){pi.start()}let pi=new Iu;pi.setAnimationLoop(He),typeof self!="undefined"&&pi.setContext(self),this.setAnimationLoop=function(M){xe=M,X.setAnimationLoop(M),M===null?pi.stop():pi.start()},X.addEventListener("sessionstart",on),X.addEventListener("sessionend",zi),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,U,I),u=Mt.get(M,b.length),u.init(U),b.push(u),Dt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Z.setFromProjectionMatrix(Dt),at=this.localClippingEnabled,it=$.init(this.clippingPlanes,at),g=et.get(M,E.length),g.init(),E.push(g),X.enabled===!0&&X.isPresenting===!0){let ot=x.xr.getDepthSensingMesh();ot!==null&&ua(ot,U,-1/0,x.sortObjects)}ua(M,U,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(ft,_t),$t=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,$t&&ut.addToRenderList(g,M),this.info.render.frame++,it===!0&&$.beginShadows();let V=u.state.shadowsArray;J.render(V,M,U),it===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=g.opaque,F=g.transmissive;if(u.setupLights(),U.isArrayCamera){let ot=U.cameras;if(F.length>0)for(let gt=0,Et=ot.length;gt<Et;gt++){let wt=ot[gt];$c(G,F,M,wt)}$t&&ut.render(M);for(let gt=0,Et=ot.length;gt<Et;gt++){let wt=ot[gt];qc(g,M,wt,wt.viewport)}}else F.length>0&&$c(G,F,M,U),$t&&ut.render(M),qc(g,M,U);I!==null&&(w.updateMultisampleRenderTarget(I),w.updateRenderTargetMipmap(I)),M.isScene===!0&&M.onAfterRender(x,M,U),Wt.resetDefaultState(),S=-1,v=null,b.pop(),b.length>0?(u=b[b.length-1],it===!0&&$.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,E.pop(),E.length>0?g=E[E.length-1]:g=null};function ua(M,U,V,G){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Z.intersectsSprite(M)){G&&kt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Dt);let gt=B.update(M),Et=M.material;Et.visible&&g.push(M,gt,Et,V,kt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Z.intersectsObject(M))){let gt=B.update(M),Et=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),kt.copy(M.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),kt.copy(gt.boundingSphere.center)),kt.applyMatrix4(M.matrixWorld).applyMatrix4(Dt)),Array.isArray(Et)){let wt=gt.groups;for(let Bt=0,zt=wt.length;Bt<zt;Bt++){let Tt=wt[Bt],Kt=Et[Tt.materialIndex];Kt&&Kt.visible&&g.push(M,gt,Kt,V,kt.z,Tt)}}else Et.visible&&g.push(M,gt,Et,V,kt.z,null)}}let ot=M.children;for(let gt=0,Et=ot.length;gt<Et;gt++)ua(ot[gt],U,V,G)}function qc(M,U,V,G){let F=M.opaque,ot=M.transmissive,gt=M.transparent;u.setupLightsView(V),it===!0&&$.setGlobalState(x.clippingPlanes,V),G&&Lt.viewport(P.copy(G)),F.length>0&&_r(F,U,V),ot.length>0&&_r(ot,U,V),gt.length>0&&_r(gt,U,V),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function $c(M,U,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new Gn(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?sr:Hn,minFilter:Ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));let ot=u.state.transmissionRenderTarget[G.id],gt=G.viewport||P;ot.setSize(gt.z,gt.w);let Et=x.getRenderTarget();x.setRenderTarget(ot),x.getClearColor(Y),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),$t&&ut.render(V);let wt=x.toneMapping;x.toneMapping=ai;let Bt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),it===!0&&$.setGlobalState(x.clippingPlanes,G),_r(M,V,G),w.updateMultisampleRenderTarget(ot),w.updateRenderTargetMipmap(ot),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Tt=0,Kt=U.length;Tt<Kt;Tt++){let ce=U[Tt],de=ce.object,Ve=ce.geometry,ne=ce.material,Pt=ce.group;if(ne.side===Ge&&de.layers.test(G.layers)){let Ln=ne.side;ne.side=We,ne.needsUpdate=!0,Zc(de,V,G,Ve,ne,Pt),ne.side=Ln,ne.needsUpdate=!0,zt=!0}}zt===!0&&(w.updateMultisampleRenderTarget(ot),w.updateRenderTargetMipmap(ot))}x.setRenderTarget(Et),x.setClearColor(Y,K),Bt!==void 0&&(G.viewport=Bt),x.toneMapping=wt}function _r(M,U,V){let G=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ot=M.length;F<ot;F++){let gt=M[F],Et=gt.object,wt=gt.geometry,Bt=G===null?gt.material:G,zt=gt.group;Et.layers.test(V.layers)&&Zc(Et,U,V,wt,Bt,zt)}}function Zc(M,U,V,G,F,ot){M.onBeforeRender(x,U,V,G,F,ot),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(x,U,V,G,M,ot),F.transparent===!0&&F.side===Ge&&F.forceSinglePass===!1?(F.side=We,F.needsUpdate=!0,x.renderBufferDirect(V,U,G,F,M,ot),F.side=li,F.needsUpdate=!0,x.renderBufferDirect(V,U,G,F,M,ot),F.side=Ge):x.renderBufferDirect(V,U,G,F,M,ot),M.onAfterRender(x,U,V,G,F,ot)}function xr(M,U,V){U.isScene!==!0&&(U=he);let G=It.get(M),F=u.state.lights,ot=u.state.shadowsArray,gt=F.state.version,Et=st.getParameters(M,F.state,ot,U,V),wt=st.getProgramCacheKey(Et),Bt=G.programs;G.environment=M.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(M.isMeshStandardMaterial?k:y).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Bt===void 0&&(M.addEventListener("dispose",Ot),Bt=new Map,G.programs=Bt);let zt=Bt.get(wt);if(zt!==void 0){if(G.currentProgram===zt&&G.lightsStateVersion===gt)return Jc(M,Et),zt}else Et.uniforms=st.getUniforms(M),M.onBeforeCompile(Et,x),zt=st.acquireProgram(Et,wt),Bt.set(wt,zt),G.uniforms=Et.uniforms;let Tt=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Tt.clippingPlanes=$.uniform),Jc(M,Et),G.needsLights=Rd(M),G.lightsStateVersion=gt,G.needsLights&&(Tt.ambientLightColor.value=F.state.ambient,Tt.lightProbe.value=F.state.probe,Tt.directionalLights.value=F.state.directional,Tt.directionalLightShadows.value=F.state.directionalShadow,Tt.spotLights.value=F.state.spot,Tt.spotLightShadows.value=F.state.spotShadow,Tt.rectAreaLights.value=F.state.rectArea,Tt.ltc_1.value=F.state.rectAreaLTC1,Tt.ltc_2.value=F.state.rectAreaLTC2,Tt.pointLights.value=F.state.point,Tt.pointLightShadows.value=F.state.pointShadow,Tt.hemisphereLights.value=F.state.hemi,Tt.directionalShadowMap.value=F.state.directionalShadowMap,Tt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Tt.spotShadowMap.value=F.state.spotShadowMap,Tt.spotLightMatrix.value=F.state.spotLightMatrix,Tt.spotLightMap.value=F.state.spotLightMap,Tt.pointShadowMap.value=F.state.pointShadowMap,Tt.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=zt,G.uniformsList=null,zt}function jc(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=cs.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Jc(M,U){let V=It.get(M);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Ad(M,U,V,G,F){U.isScene!==!0&&(U=he),w.resetTextureUnits();let ot=U.fog,gt=G.isMeshStandardMaterial?U.environment:null,Et=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ys,wt=(G.isMeshStandardMaterial?k:y).get(G.envMap||gt),Bt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,zt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Tt=!!V.morphAttributes.position,Kt=!!V.morphAttributes.normal,ce=!!V.morphAttributes.color,de=ai;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(de=x.toneMapping);let Ve=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ne=Ve!==void 0?Ve.length:0,Pt=It.get(G),Ln=u.state.lights;if(it===!0&&(at===!0||M!==v)){let Ke=M===v&&G.id===S;$.setState(G,M,Ke)}let ie=!1;G.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Ln.state.version||Pt.outputColorSpace!==Et||F.isBatchedMesh&&Pt.batching===!1||!F.isBatchedMesh&&Pt.batching===!0||F.isBatchedMesh&&Pt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pt.instancing===!1||!F.isInstancedMesh&&Pt.instancing===!0||F.isSkinnedMesh&&Pt.skinning===!1||!F.isSkinnedMesh&&Pt.skinning===!0||F.isInstancedMesh&&Pt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pt.instancingMorph===!1&&F.morphTexture!==null||Pt.envMap!==wt||G.fog===!0&&Pt.fog!==ot||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==$.numPlanes||Pt.numIntersection!==$.numIntersection)||Pt.vertexAlphas!==Bt||Pt.vertexTangents!==zt||Pt.morphTargets!==Tt||Pt.morphNormals!==Kt||Pt.morphColors!==ce||Pt.toneMapping!==de||Pt.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Pt.__version=G.version);let an=Pt.currentProgram;ie===!0&&(an=xr(G,U,F));let Hi=!1,qe=!1,Rs=!1,fe=an.getUniforms(),yn=Pt.uniforms;if(Lt.useProgram(an.program)&&(Hi=!0,qe=!0,Rs=!0),G.id!==S&&(S=G.id,qe=!0),Hi||v!==M){Lt.buffers.depth.getReversed()?(ht.copy(M.projectionMatrix),Ff(ht),Of(ht),fe.setValue(N,"projectionMatrix",ht)):fe.setValue(N,"projectionMatrix",M.projectionMatrix),fe.setValue(N,"viewMatrix",M.matrixWorldInverse);let Jn=fe.map.cameraPosition;Jn!==void 0&&Jn.setValue(N,Nt.setFromMatrixPosition(M.matrixWorld)),Yt.logarithmicDepthBuffer&&fe.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&fe.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),v!==M&&(v=M,qe=!0,Rs=!0)}if(F.isSkinnedMesh){fe.setOptional(N,F,"bindMatrix"),fe.setOptional(N,F,"bindMatrixInverse");let Ke=F.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),fe.setValue(N,"boneTexture",Ke.boneTexture,w))}F.isBatchedMesh&&(fe.setOptional(N,F,"batchingTexture"),fe.setValue(N,"batchingTexture",F._matricesTexture,w),fe.setOptional(N,F,"batchingIdTexture"),fe.setValue(N,"batchingIdTexture",F._indirectTexture,w),fe.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&fe.setValue(N,"batchingColorTexture",F._colorsTexture,w));let Ps=V.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0)&&xt.update(F,V,an),(qe||Pt.receiveShadow!==F.receiveShadow)&&(Pt.receiveShadow=F.receiveShadow,fe.setValue(N,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(yn.envMap.value=wt,yn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(yn.envMapIntensity.value=U.environmentIntensity),qe&&(fe.setValue(N,"toneMappingExposure",x.toneMappingExposure),Pt.needsLights&&Cd(yn,Rs),ot&&G.fog===!0&&Q.refreshFogUniforms(yn,ot),Q.refreshMaterialUniforms(yn,G,q,nt,u.state.transmissionRenderTarget[M.id]),cs.upload(N,jc(Pt),yn,w)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(cs.upload(N,jc(Pt),yn,w),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&fe.setValue(N,"center",F.center),fe.setValue(N,"modelViewMatrix",F.modelViewMatrix),fe.setValue(N,"normalMatrix",F.normalMatrix),fe.setValue(N,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Ke=G.uniformsGroups;for(let Jn=0,Kn=Ke.length;Jn<Kn;Jn++){let Kc=Ke[Jn];L.update(Kc,an),L.bind(Kc,an)}}return an}function Cd(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Rd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,U,V){It.get(M.texture).__webglTexture=U,It.get(M.depthTexture).__webglTexture=V;let G=It.get(M);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){let V=It.get(M);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,V=0){I=M,A=U,T=V;let G=!0,F=null,ot=!1,gt=!1;if(M){let wt=It.get(M);if(wt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(N.FRAMEBUFFER,null),G=!1;else if(wt.__webglFramebuffer===void 0)w.setupRenderTarget(M);else if(wt.__hasExternalTextures)w.rebindTextures(M,It.get(M.texture).__webglTexture,It.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Tt=M.depthTexture;if(wt.__boundDepthTexture!==Tt){if(Tt!==null&&It.has(Tt)&&(M.width!==Tt.image.width||M.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(M)}}let Bt=M.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(gt=!0);let zt=It.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(zt[U])?F=zt[U][V]:F=zt[U],ot=!0):M.samples>0&&w.useMultisampledRTT(M)===!1?F=It.get(M).__webglMultisampledFramebuffer:Array.isArray(zt)?F=zt[V]:F=zt,P.copy(M.viewport),H.copy(M.scissor),z=M.scissorTest}else P.copy(Rt).multiplyScalar(q).floor(),H.copy(Gt).multiplyScalar(q).floor(),z=re;if(Lt.bindFramebuffer(N.FRAMEBUFFER,F)&&G&&Lt.drawBuffers(M,F),Lt.viewport(P),Lt.scissor(H),Lt.setScissorTest(z),ot){let wt=It.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,wt.__webglTexture,V)}else if(gt){let wt=It.get(M.texture),Bt=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,wt.__webglTexture,V||0,Bt)}S=-1},this.readRenderTargetPixels=function(M,U,V,G,F,ot,gt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=It.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&gt!==void 0&&(Et=Et[gt]),Et){Lt.bindFramebuffer(N.FRAMEBUFFER,Et);try{let wt=M.texture,Bt=wt.format,zt=wt.type;if(!Yt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-G&&V>=0&&V<=M.height-F&&N.readPixels(U,V,G,F,vt.convert(Bt),vt.convert(zt),ot)}finally{let wt=I!==null?It.get(I).__webglFramebuffer:null;Lt.bindFramebuffer(N.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(M,U,V,G,F,ot,gt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=It.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&gt!==void 0&&(Et=Et[gt]),Et){let wt=M.texture,Bt=wt.format,zt=wt.type;if(!Yt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=M.width-G&&V>=0&&V<=M.height-F){Lt.bindFramebuffer(N.FRAMEBUFFER,Et);let Tt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Tt),N.bufferData(N.PIXEL_PACK_BUFFER,ot.byteLength,N.STREAM_READ),N.readPixels(U,V,G,F,vt.convert(Bt),vt.convert(zt),0);let Kt=I!==null?It.get(I).__webglFramebuffer:null;Lt.bindFramebuffer(N.FRAMEBUFFER,Kt);let ce=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Nf(N,ce,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Tt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ot),N.deleteBuffer(Tt),N.deleteSync(ce),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,U=null,V=0){M.isTexture!==!0&&(Bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1]);let G=Math.pow(2,-V),F=Math.floor(M.image.width*G),ot=Math.floor(M.image.height*G),gt=U!==null?U.x:0,Et=U!==null?U.y:0;w.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,gt,Et,F,ot),Lt.unbindTexture()},this.copyTextureToTexture=function(M,U,V=null,G=null,F=0){M.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,M=arguments[1],U=arguments[2],F=arguments[3]||0,V=null);let ot,gt,Et,wt,Bt,zt,Tt,Kt,ce,de=M.isCompressedTexture?M.mipmaps[F]:M.image;V!==null?(ot=V.max.x-V.min.x,gt=V.max.y-V.min.y,Et=V.isBox3?V.max.z-V.min.z:1,wt=V.min.x,Bt=V.min.y,zt=V.isBox3?V.min.z:0):(ot=de.width,gt=de.height,Et=de.depth||1,wt=0,Bt=0,zt=0),G!==null?(Tt=G.x,Kt=G.y,ce=G.z):(Tt=0,Kt=0,ce=0);let Ve=vt.convert(U.format),ne=vt.convert(U.type),Pt;U.isData3DTexture?(w.setTexture3D(U,0),Pt=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),Pt=N.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),Pt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);let Ln=N.getParameter(N.UNPACK_ROW_LENGTH),ie=N.getParameter(N.UNPACK_IMAGE_HEIGHT),an=N.getParameter(N.UNPACK_SKIP_PIXELS),Hi=N.getParameter(N.UNPACK_SKIP_ROWS),qe=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,de.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,de.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,wt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Bt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,zt);let Rs=M.isDataArrayTexture||M.isData3DTexture,fe=U.isDataArrayTexture||U.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){let yn=It.get(M),Ps=It.get(U),Ke=It.get(yn.__renderTarget),Jn=It.get(Ps.__renderTarget);Lt.bindFramebuffer(N.READ_FRAMEBUFFER,Ke.__webglFramebuffer),Lt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Kn=0;Kn<Et;Kn++)Rs&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,It.get(M).__webglTexture,F,zt+Kn),M.isDepthTexture?(fe&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,It.get(U).__webglTexture,F,ce+Kn),N.blitFramebuffer(wt,Bt,ot,gt,Tt,Kt,ot,gt,N.DEPTH_BUFFER_BIT,N.NEAREST)):fe?N.copyTexSubImage3D(Pt,F,Tt,Kt,ce+Kn,wt,Bt,ot,gt):N.copyTexSubImage2D(Pt,F,Tt,Kt,ce+Kn,wt,Bt,ot,gt);Lt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else fe?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(Pt,F,Tt,Kt,ce,ot,gt,Et,Ve,ne,de.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Pt,F,Tt,Kt,ce,ot,gt,Et,Ve,de.data):N.texSubImage3D(Pt,F,Tt,Kt,ce,ot,gt,Et,Ve,ne,de):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,Tt,Kt,ot,gt,Ve,ne,de.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,Tt,Kt,de.width,de.height,Ve,de.data):N.texSubImage2D(N.TEXTURE_2D,F,Tt,Kt,ot,gt,Ve,ne,de);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ln),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ie),N.pixelStorei(N.UNPACK_SKIP_PIXELS,an),N.pixelStorei(N.UNPACK_SKIP_ROWS,Hi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,qe),F===0&&U.generateMipmaps&&N.generateMipmap(Pt),Lt.unbindTexture()},this.copyTextureToTexture3D=function(M,U,V=null,G=null,F=0){return M.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,M=arguments[2],U=arguments[3],F=arguments[4]||0),Bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,U,V,G,F)},this.initRenderTarget=function(M){It.get(M).__webglFramebuffer===void 0&&w.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?w.setTextureCube(M,0):M.isData3DTexture?w.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?w.setTexture2DArray(M,0):w.setTexture2D(M,0),Lt.unbindTexture()},this.resetState=function(){A=0,T=0,I=null,Lt.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}};var fo=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},po=class extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var $l=class extends Je{constructor(t=null,e=1,i=1,s,r,o,a,l,c=je,h=je,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mo=class extends Me{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ns=new se,tu=new se,zr=[],eu=new Wn,I0=new se,Ns=new te,Fs=new ci,go=class extends te{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new mo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,I0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ns),eu.copy(t.boundingBox).applyMatrix4(ns),this.boundingBox.union(eu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ns),Fs.copy(t.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(Fs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Ns.geometry=this.geometry,Ns.material=this.material,Ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(i),t.ray.intersectsSphere(Fs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ns),tu.multiplyMatrices(i,ns),Ns.matrixWorld=tu,Ns.raycast(t,zr);for(let o=0,a=zr.length;o<a;o++){let l=zr[o];l.instanceId=r,l.object=this,e.push(l)}zr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new mo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new $l(new Float32Array(s*this.count),s,this.count,yc,Sn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var En=class extends Xn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},_o=new C,xo=new C,nu=new se,Os=new Ci,Hr=new ci,za=new C,iu=new C,Pi=class extends ye{constructor(t=new ge,e=new En){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)_o.fromBufferAttribute(e,s-1),xo.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=_o.distanceTo(xo);t.setAttribute("lineDistance",new Qt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere),Hr.applyMatrix4(s),Hr.radius+=r,t.ray.intersectsSphere(Hr)===!1)return;nu.copy(s).invert(),Os.copy(t.ray).applyMatrix4(nu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let p=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=p,g=m-1;_<g;_+=c){let u=h.getX(_),E=h.getX(_+1),b=Vr(this,t,Os,l,u,E);b&&e.push(b)}if(this.isLineLoop){let _=h.getX(m-1),g=h.getX(p),u=Vr(this,t,Os,l,_,g);u&&e.push(u)}}else{let p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=p,g=m-1;_<g;_+=c){let u=Vr(this,t,Os,l,_,_+1);u&&e.push(u)}if(this.isLineLoop){let _=Vr(this,t,Os,l,m-1,p);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Vr(n,t,e,i,s,r){let o=n.geometry.attributes.position;if(_o.fromBufferAttribute(o,s),xo.fromBufferAttribute(o,r),e.distanceSqToSegment(_o,xo,za,iu)>i)return;za.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(za);if(!(l<t.near||l>t.far))return{distance:l,point:iu.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var su=new C,ru=new C,gs=class extends Pi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)su.fromBufferAttribute(e,s),ru.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+su.distanceTo(ru);t.setAttribute("lineDistance",new Qt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ct:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new C,s=[],r=[],o=[],a=new C,l=new se;for(let p=0;p<=t;p++){let m=p/t;s[p]=this.getTangentAt(m,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Re(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,m))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Re(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],p*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},js=class extends nn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ct){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*d+this.aX,c=f*d+p*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Zl=class extends js{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Tc(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,p*=h,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var Gr=new C,Ha=new Tc,Va=new Tc,Ga=new Tc,Js=class extends nn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new C){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Gr.subVectors(s[0],s[1]).add(s[0]),c=Gr);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Gr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Gr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Ha.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,m,_,g),Va.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,m,_,g),Ga.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(Ha.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Va.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Ga.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return i.set(Ha.calc(l),Va.calc(l),Ga.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ou(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function L0(n,t){let e=1-n;return e*e*t}function D0(n,t){return 2*(1-n)*n*t}function U0(n,t){return n*n*t}function Gs(n,t,e,i){return L0(n,t)+D0(n,e)+U0(n,i)}function N0(n,t){let e=1-n;return e*e*e*t}function F0(n,t){let e=1-n;return 3*e*e*n*t}function O0(n,t){return 3*(1-n)*n*n*t}function B0(n,t){return n*n*n*t}function Ws(n,t,e,i,s){return N0(n,t)+F0(n,e)+O0(n,i)+B0(n,s)}var yo=class extends nn{constructor(t=new ct,e=new ct,i=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ct){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ws(t,s.x,r.x,o.x,a.x),Ws(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},jl=class extends nn{constructor(t=new C,e=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new C){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ws(t,s.x,r.x,o.x,a.x),Ws(t,s.y,r.y,o.y,a.y),Ws(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vo=class extends nn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jl=class extends nn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mo=class extends nn{constructor(t=new ct,e=new ct,i=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ct){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Gs(t,s.x,r.x,o.x),Gs(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},So=class extends nn{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Gs(t,s.x,r.x,o.x),Gs(t,s.y,r.y,o.y),Gs(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bo=class extends nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(ou(a,l.x,c.x,h.x,d.x),ou(a,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new ct().fromArray(s))}return this}},Kl=Object.freeze({__proto__:null,ArcCurve:Zl,CatmullRomCurve3:Js,CubicBezierCurve:yo,CubicBezierCurve3:jl,EllipseCurve:js,LineCurve:vo,LineCurve3:Jl,QuadraticBezierCurve:Mo,QuadraticBezierCurve3:So,SplineCurve:bo}),Ql=class extends nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kl[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Kl[s.type]().fromJSON(s))}return this}},Eo=class extends Ql{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new vo(this.currentPoint.clone(),new ct(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Mo(this.currentPoint.clone(),new ct(t,e),new ct(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new yo(this.currentPoint.clone(),new ct(t,e),new ct(i,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new bo(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new js(t,e,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var wo=class n extends ge{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new C,h=new ct;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let p=i+d/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(a,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},To=class n extends ge{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],p=[],m=0,_=[],g=i/2,u=0;E(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(f,3)),this.setAttribute("uv",new Qt(p,2));function E(){let x=new C,D=new C,A=0,T=(e-t)/i;for(let I=0;I<=r;I++){let S=[],v=I/r,P=v*(e-t)+t;for(let H=0;H<=s;H++){let z=H/s,Y=z*l+a,K=Math.sin(Y),W=Math.cos(Y);D.x=P*K,D.y=-v*i+g,D.z=P*W,d.push(D.x,D.y,D.z),x.set(K,T,W).normalize(),f.push(x.x,x.y,x.z),p.push(z,1-v),S.push(m++)}_.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){let v=_[S][I],P=_[S+1][I],H=_[S+1][I+1],z=_[S][I+1];(t>0||S!==0)&&(h.push(v,P,z),A+=3),(e>0||S!==r-1)&&(h.push(P,H,z),A+=3)}c.addGroup(u,A,0),u+=A}function b(x){let D=m,A=new ct,T=new C,I=0,S=x===!0?t:e,v=x===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,g*v,0),f.push(0,v,0),p.push(.5,.5),m++;let P=m;for(let H=0;H<=s;H++){let Y=H/s*l+a,K=Math.cos(Y),W=Math.sin(Y);T.x=S*W,T.y=g*v,T.z=S*K,d.push(T.x,T.y,T.z),f.push(0,v,0),A.x=K*.5+.5,A.y=W*.5*v+.5,p.push(A.x,A.y),m++}for(let H=0;H<s;H++){let z=D+H,Y=P+H;x===!0?h.push(Y,Y+1,z):h.push(Y+1,Y,z),I+=3}c.addGroup(u,I,x===!0?1:2),u+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ks=class n extends To{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Qs=class extends Eo{constructor(t){super(t),this.uuid=Ni(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Eo().fromJSON(s))}return this}},k0={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Fu(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,f,p;if(i&&(r=W0(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let m=e;m<s;m+=e)d=n[m],f=n[m+1],d<a&&(a=d),f<l&&(l=f),d>c&&(c=d),f>h&&(h=f);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return tr(r,o,e,a,l,p,0),o}};function Fu(n,t,e,i,s){let r,o;if(s===eg(n,t,e,i)>0)for(r=t;r<e;r+=i)o=au(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=au(r,n[r],n[r+1],o);return o&&Xo(o,o.next)&&(nr(o),o=o.next),o}function Ii(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Xo(e,e.next)||me(e.prev,e,e.next)===0)){if(nr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function tr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Z0(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?H0(n,i,s,r):z0(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),nr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=V0(Ii(n),t,e),tr(n,t,e,i,s,r,2)):o===2&&G0(n,t,e,i,s,r):tr(Ii(n),t,e,i,s,r,1);break}}}function z0(n){let t=n.prev,e=n,i=n.next;if(me(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c,m=i.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=d&&m.y<=p&&rs(s,a,r,l,o,c,m.x,m.y)&&me(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function H0(n,t,e,i){let s=n.prev,r=n,o=n.next;if(me(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,m=h<d?h<f?h:f:d<f?d:f,_=a>l?a>c?a:c:l>c?l:c,g=h>d?h>f?h:f:d>f?d:f,u=tc(p,m,t,e,i),E=tc(_,g,t,e,i),b=n.prevZ,x=n.nextZ;for(;b&&b.z>=u&&x&&x.z<=E;){if(b.x>=p&&b.x<=_&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&rs(a,h,l,d,c,f,b.x,b.y)&&me(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=p&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&rs(a,h,l,d,c,f,x.x,x.y)&&me(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=u;){if(b.x>=p&&b.x<=_&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&rs(a,h,l,d,c,f,b.x,b.y)&&me(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=E;){if(x.x>=p&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&rs(a,h,l,d,c,f,x.x,x.y)&&me(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function V0(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!Xo(s,r)&&Ou(s,i,i.next,r)&&er(s,r)&&er(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),nr(i),nr(i.next),i=n=r),i=i.next}while(i!==n);return Ii(i)}function G0(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&K0(o,a)){let l=Bu(o,a);o=Ii(o,o.next),l=Ii(l,l.next),tr(o,t,e,i,s,r,0),tr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function W0(n,t,e,i){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Fu(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(J0(c));for(s.sort(X0),r=0;r<s.length;r++)e=Y0(s[r],e);return e}function X0(n,t){return n.x-t.x}function Y0(n,t){let e=q0(n,t);if(!e)return t;let i=Bu(e,n);return Ii(i,i.next),Ii(e,e.next)}function q0(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,d;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&rs(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),er(e,n)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&$0(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function $0(n,t){return me(n.prev,n,t.prev)<0&&me(t.next,n,n.next)<0}function Z0(n,t,e,i){let s=n;do s.z===0&&(s.z=tc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,j0(s)}function j0(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function tc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function J0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function rs(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function K0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Q0(n,t)&&(er(n,t)&&er(t,n)&&tg(n,t)&&(me(n.prev,n,t.prev)||me(n,t.prev,t))||Xo(n,t)&&me(n.prev,n,n.next)>0&&me(t.prev,t,t.next)>0)}function me(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Xo(n,t){return n.x===t.x&&n.y===t.y}function Ou(n,t,e,i){let s=Xr(me(n,t,e)),r=Xr(me(n,t,i)),o=Xr(me(e,i,n)),a=Xr(me(e,i,t));return!!(s!==r&&o!==a||s===0&&Wr(n,e,t)||r===0&&Wr(n,i,t)||o===0&&Wr(e,n,i)||a===0&&Wr(e,t,i))}function Wr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Xr(n){return n>0?1:n<0?-1:0}function Q0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Ou(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function er(n,t){return me(n.prev,n,n.next)<0?me(n,t,n.next)>=0&&me(n,n.prev,t)>=0:me(n,t,n.prev)<0||me(n,n.next,t)<0}function tg(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Bu(n,t){let e=new ec(n.i,n.x,n.y),i=new ec(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function au(n,t,e,i){let s=new ec(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function nr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ec(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function eg(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Xs=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];lu(t),cu(i,t);let o=t.length;e.forEach(lu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,cu(i,e[l]);let a=k0.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function lu(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function cu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Ao=class n extends ge{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=t,f=(e-t)/s,p=new C,m=new ct;for(let _=0;_<=s;_++){for(let g=0;g<=i;g++){let u=r+g/i*o;p.x=d*Math.cos(u),p.y=d*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,h.push(m.x,m.y)}d+=f}for(let _=0;_<s;_++){let g=_*(i+1);for(let u=0;u<i;u++){let E=u+g,b=E,x=E+i+1,D=E+i+2,A=E+1;a.push(b,x,A),a.push(x,D,A)}}this.setIndex(a),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Co=class n extends ge{constructor(t=new Qs([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Qt(s,3)),this.setAttribute("normal",new Qt(r,3)),this.setAttribute("uv",new Qt(o,2));function c(h){let d=s.length/3,f=h.extractPoints(e),p=f.shape,m=f.holes;Xs.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,u=m.length;g<u;g++){let E=m[g];Xs.isClockWise(E)===!0&&(m[g]=E.reverse())}let _=Xs.triangulateShape(p,m);for(let g=0,u=m.length;g<u;g++){let E=m[g];p=p.concat(E)}for(let g=0,u=p.length;g<u;g++){let E=p[g];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let g=0,u=_.length;g<u;g++){let E=_[g],b=E[0]+d,x=E[1]+d,D=E[2]+d;i.push(b,x,D),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return ng(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function ng(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var _s=class n extends ge{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new C,f=new C,p=[],m=[],_=[],g=[];for(let u=0;u<=i;u++){let E=[],b=u/i,x=0;u===0&&o===0?x=.5/e:u===i&&l===Math.PI&&(x=-.5/e);for(let D=0;D<=e;D++){let A=D/e;d.x=-t*Math.cos(s+A*r)*Math.sin(o+b*a),d.y=t*Math.cos(o+b*a),d.z=t*Math.sin(s+A*r)*Math.sin(o+b*a),m.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),g.push(A+x,1-b),E.push(c++)}h.push(E)}for(let u=0;u<i;u++)for(let E=0;E<e;E++){let b=h[u][E+1],x=h[u][E],D=h[u+1][E],A=h[u+1][E+1];(u!==0||o>0)&&p.push(b,x,A),(u!==i-1||l<Math.PI)&&p.push(x,D,A)}this.setIndex(p),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ro=class n extends ge{constructor(t=new So(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new ct,h=new C,d=[],f=[],p=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(f,3)),this.setAttribute("uv",new Qt(p,2));function _(){for(let b=0;b<e;b++)g(b);g(r===!1?e:0),E(),u()}function g(b){h=t.getPointAt(b/e,h);let x=o.normals[b],D=o.binormals[b];for(let A=0;A<=s;A++){let T=A/s*Math.PI*2,I=Math.sin(T),S=-Math.cos(T);l.x=S*x.x+I*D.x,l.y=S*x.y+I*D.y,l.z=S*x.z+I*D.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function u(){for(let b=1;b<=e;b++)for(let x=1;x<=s;x++){let D=(s+1)*(b-1)+(x-1),A=(s+1)*b+(x-1),T=(s+1)*b+x,I=(s+1)*(b-1)+x;m.push(D,A,I),m.push(A,T,I)}}function E(){for(let b=0;b<=e;b++)for(let x=0;x<=s;x++)c.x=b/e,c.y=x/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new Kl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Po=class extends Xn{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Ut(16777215),this.specular=new Ut(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var sn=class extends Xn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Io=class extends En{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Yr(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function ig(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var xs=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nc=class extends xs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ih,endingEnd:ih}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case sh:r=t,a=2*e-i;break;case rh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case sh:o=t,l=2*i-e;break;case rh:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(i-e)/(s-e),_=m*m,g=_*m,u=-f*g+2*f*_-f*m,E=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*m+1,b=(-1-p)*g+(1.5+p)*_+.5*m,x=p*g-p*_;for(let D=0;D!==a;++D)r[D]=u*o[h+D]+E*o[c+D]+b*o[l+D]+x*o[d+D];return r}},ic=class extends xs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},sc=class extends xs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},mn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Yr(e,this.TimeBufferType),this.values=Yr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Yr(t.times,Array),values:Yr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ic(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new nc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Qr:e=this.InterpolantFactoryMethodDiscrete;break;case Il:e=this.InterpolantFactoryMethodLinear;break;case fa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qr;case this.InterpolantFactoryMethodLinear:return Il;case this.InterpolantFactoryMethodSmooth:return fa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&ig(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===fa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,f=d-i,p=d+i;for(let m=0;m!==i;++m){let _=e[d+m];if(_!==e[f+m]||_!==e[p+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,f=o*i;for(let p=0;p!==i;++p)e[f+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=Il;var Li=class extends mn{constructor(t,e,i){super(t,e,i)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Qr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var rc=class extends mn{};rc.prototype.ValueTypeName="color";var oc=class extends mn{};oc.prototype.ValueTypeName="number";var ac=class extends xs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)fn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Lo=class extends mn{InterpolantFactoryMethodLinear(t){return new ac(this.times,this.values,this.getValueSize(),t)}};Lo.prototype.ValueTypeName="quaternion";Lo.prototype.InterpolantFactoryMethodSmooth=void 0;var Di=class extends mn{constructor(t,e,i){super(t,e,i)}};Di.prototype.ValueTypeName="string";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=Qr;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var lc=class extends mn{};lc.prototype.ValueTypeName="vector";var cc=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],m=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},sg=new cc,hc=class{constructor(t){this.manager=t!==void 0?t:sg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};hc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Do=class extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Uo=class extends Do{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Wa=new se,hu=new C,uu=new C,uc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zs,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;hu.setFromMatrixPosition(t.matrixWorld),e.position.copy(hu),uu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uu),e.updateMatrixWorld(),Wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var dc=class extends uc{constructor(){super(new lo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},No=class extends Do{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new dc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Fo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=du(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=du();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function du(){return performance.now()}var Ac="\\[\\]\\.:\\/",rg=new RegExp("["+Ac+"]","g"),Cc="[^"+Ac+"]",og="[^"+Ac.replace("\\.","")+"]",ag=/((?:WC+[\/:])*)/.source.replace("WC",Cc),lg=/(WCOD+)?/.source.replace("WCOD",og),cg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cc),hg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cc),ug=new RegExp("^"+ag+lg+cg+hg+"$"),dg=["material","materials","bones","map"],fc=class{constructor(t,e,i){let s=i||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},pe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(rg,"")}static parseTrackName(t){let e=ug.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);dg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=fc;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var i_=new Float32Array(1);var fu=new se,Oo=class{constructor(t,e,i=0,s=1/0){this.ray=new Ci(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new $s,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return fu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fu),this}intersectObject(t,e=!0,i=[]){return pc(t,this,i,e),i.sort(pu),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)pc(t[s],this,i,e);return i.sort(pu),i}};function pu(n,t){return n.distance-t.distance}function pc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)pc(r[o],t,e,!0)}}var ir=class{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Re(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var mu=new C,qr,Xa,Bo=class extends ye{constructor(t=new C(0,0,1),e=new C(0,0,0),i=1,s=16776960,r=i*.2,o=r*.2){super(),this.type="ArrowHelper",qr===void 0&&(qr=new ge,qr.setAttribute("position",new Qt([0,0,0,0,1,0],3)),Xa=new To(0,.5,1,5,1),Xa.translate(0,-.5,0)),this.position.copy(e),this.line=new Pi(qr,new En({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new te(Xa,new en({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{mu.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(mu,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};var ko=class extends Vn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mc);var zu={type:"change"},Pc={type:"start"},Vu={type:"end"},Yo=new Ci,Hu=new un,fg=Math.cos(70*Go.DEG2RAD),Ae=new C,Xe=2*Math.PI,ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Rc=1e-6,qo=class extends ko{constructor(t,e=null){super(t,e),this.state=ae.NONE,this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ui.ROTATE,MIDDLE:Ui.DOLLY,RIGHT:Ui.PAN},this.touches={ONE:wn.ROTATE,TWO:wn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new fn,this._lastTargetPosition=new C,this._quat=new fn().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ir,this._sphericalDelta=new ir,this._scale=1,this._panOffset=new C,this._rotateStart=new ct,this._rotateEnd=new ct,this._rotateDelta=new ct,this._panStart=new ct,this._panEnd=new ct,this._panDelta=new ct,this._dollyStart=new ct,this._dollyEnd=new ct,this._dollyDelta=new ct,this._dollyDirection=new C,this._mouse=new ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=mg.bind(this),this._onPointerDown=pg.bind(this),this._onPointerUp=gg.bind(this),this._onContextMenu=bg.bind(this),this._onMouseWheel=yg.bind(this),this._onKeyDown=vg.bind(this),this._onTouchStart=Mg.bind(this),this._onTouchMove=Sg.bind(this),this._onMouseDown=_g.bind(this),this._onMouseMove=xg.bind(this),this._interceptControlDown=Eg.bind(this),this._interceptControlUp=wg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zu),this.update(),this.state=ae.NONE}update(t=null){let e=this.object.position;Ae.copy(e).sub(this.target),Ae.applyQuaternion(this._quat),this._spherical.setFromVector3(Ae),this.autoRotate&&this.state===ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Xe:i>Math.PI&&(i-=Xe),s<-Math.PI?s+=Xe:s>Math.PI&&(s-=Xe),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ae.setFromSpherical(this._spherical),Ae.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ae),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ae.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ae.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Yo.origin.copy(this.object.position),Yo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yo.direction))<fg?this.object.lookAt(this.target):(Hu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yo.intersectPlane(Hu,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Rc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Rc||this._lastTargetPosition.distanceToSquared(this.target)>Rc?(this.dispatchEvent(zu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Xe/60*this.autoRotateSpeed*t:Xe/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ae.setFromMatrixColumn(e,0),Ae.multiplyScalar(-t),this._panOffset.add(Ae)}_panUp(t,e){this.screenSpacePanning===!0?Ae.setFromMatrixColumn(e,1):(Ae.setFromMatrixColumn(e,0),Ae.crossVectors(this.object.up,Ae)),Ae.multiplyScalar(t),this._panOffset.add(Ae)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ae.copy(s).sub(this.target);let r=Ae.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Xe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Xe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Xe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Xe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ct,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function pg(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function mg(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function gg(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vu),this.state=ae.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function _g(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ae.DOLLY;break;case Ui.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ae.ROTATE}break;case Ui.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ae.PAN}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(Pc)}function xg(n){switch(this.state){case ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function yg(n){this.enabled===!1||this.enableZoom===!1||this.state!==ae.NONE||(n.preventDefault(),this.dispatchEvent(Pc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Vu))}function vg(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Mg(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case wn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ae.TOUCH_ROTATE;break;case wn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ae.TOUCH_PAN;break;default:this.state=ae.NONE}break;case 2:switch(this.touches.TWO){case wn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ae.TOUCH_DOLLY_PAN;break;case wn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ae.TOUCH_DOLLY_ROTATE;break;default:this.state=ae.NONE}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(Pc)}function Sg(n){switch(this._trackPointer(n),this.state){case ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ae.NONE}}function bg(n){this.enabled!==!1&&n.preventDefault()}function Eg(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wg(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var hi=class extends ye{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new ct(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}},Ms=new C,Gu=new se,Wu=new se,Xu=new C,Yu=new C,$o=class{constructor(t={}){let e=this,i,s,r,o,a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:s}},this.render=function(m,_){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),Gu.copy(_.matrixWorldInverse),Wu.multiplyMatrices(_.projectionMatrix,Gu),h(m,m,_),p(m)},this.setSize=function(m,_){i=m,s=_,r=i/2,o=s/2,l.style.width=m+"px",l.style.height=_+"px"};function c(m){m.isCSS2DObject&&(m.element.style.display="none");for(let _=0,g=m.children.length;_<g;_++)c(m.children[_])}function h(m,_,g){if(m.visible===!1){c(m);return}if(m.isCSS2DObject){Ms.setFromMatrixPosition(m.matrixWorld),Ms.applyMatrix4(Wu);let u=Ms.z>=-1&&Ms.z<=1&&m.layers.test(g.layers)===!0,E=m.element;E.style.display=u===!0?"":"none",u===!0&&(m.onBeforeRender(e,_,g),E.style.transform="translate("+-100*m.center.x+"%,"+-100*m.center.y+"%)translate("+(Ms.x*r+r)+"px,"+(-Ms.y*o+o)+"px)",E.parentNode!==l&&l.appendChild(E),m.onAfterRender(e,_,g));let b={distanceToCameraSquared:d(g,m)};a.objects.set(m,b)}for(let u=0,E=m.children.length;u<E;u++)h(m.children[u],_,g)}function d(m,_){return Xu.setFromMatrixPosition(m.matrixWorld),Yu.setFromMatrixPosition(_.matrixWorld),Xu.distanceToSquared(Yu)}function f(m){let _=[];return m.traverseVisible(function(g){g.isCSS2DObject&&_.push(g)}),_}function p(m){let _=f(m).sort(function(u,E){if(u.renderOrder!==E.renderOrder)return E.renderOrder-u.renderOrder;let b=a.objects.get(u).distanceToCameraSquared,x=a.objects.get(E).distanceToCameraSquared;return b-x}),g=_.length;for(let u=0,E=_.length;u<E;u++)_[u].element.style.zIndex=g-u}}};var Ic={main:[[121.9062,24.9493],[121.8342,24.8716],[121.8234,24.8547],[121.8162,24.8311],[121.809,24.8058],[121.8054,24.7787],[121.809,24.7534],[121.8198,24.6994],[121.8198,24.6859],[121.8126,24.6724],[121.8162,24.6437],[121.827,24.6234],[121.8522,24.6082],[121.881,24.6048],[121.881,24.5981],[121.8702,24.5998],[121.8594,24.5981],[121.8486,24.5947],[121.8414,24.5896],[121.8522,24.5727],[121.8558,24.5508],[121.8522,24.5305],[121.8306,24.5187],[121.827,24.5103],[121.8306,24.5001],[121.8378,24.4917],[121.8414,24.4816],[121.8306,24.4731],[121.8054,24.4613],[121.7802,24.4326],[121.7802,24.4225],[121.7802,24.3971],[121.7766,24.3887],[121.773,24.3802],[121.7694,24.3701],[121.7658,24.3482],[121.7658,24.3414],[121.7622,24.3363],[121.7586,24.333],[121.7622,24.3262],[121.7658,24.3228],[121.7694,24.3178],[121.773,24.3127],[121.773,24.3093],[121.7658,24.3009],[121.7442,24.2806],[121.7226,24.2519],[121.7046,24.2384],[121.6974,24.2316],[121.701,24.2249],[121.6974,24.2198],[121.6722,24.2012],[121.6614,24.1928],[121.6506,24.1725],[121.6398,24.1303],[121.6146,24.0915],[121.6074,24.0763],[121.6074,24.0611],[121.6146,24.0425],[121.6218,24.0341],[121.6254,24.0307],[121.629,24.0256],[121.629,24.0155],[121.6254,24.002],[121.611,23.9817],[121.6074,23.9699],[121.6074,23.948],[121.593,23.8922],[121.5714,23.8314],[121.539,23.693],[121.521,23.6592],[121.4778,23.4346],[121.4634,23.3434],[121.4526,23.3266],[121.4274,23.2928],[121.4166,23.2759],[121.4094,23.254],[121.4022,23.2151],[121.4022,23.1797],[121.3986,23.1459],[121.3806,23.1104],[121.3734,23.1037],[121.3554,23.0919],[121.3482,23.0834],[121.3446,23.075],[121.3374,23.0547],[121.3194,23.026],[121.3086,22.9804],[121.2978,22.9585],[121.2618,22.9078],[121.2546,22.8977],[121.2042,22.8571],[121.1898,22.8436],[121.1898,22.8335],[121.1898,22.8115],[121.1898,22.8014],[121.1862,22.7913],[121.179,22.7795],[121.161,22.7575],[121.143,22.7423],[121.0818,22.7035],[121.0386,22.663],[121.0278,22.6579],[121.0206,22.6478],[121.0026,22.6005],[120.9918,22.5836],[120.9594,22.5481],[120.9486,22.5262],[120.9414,22.484],[120.9234,22.4249],[120.8874,22.3658],[120.8802,22.3455],[120.8766,22.2898],[120.8766,22.2374],[120.8802,22.0551],[120.873,22.0297],[120.8622,22.0095],[120.8514,22.001],[120.837,21.9875],[120.837,21.9571],[120.8406,21.925],[120.8406,21.9048],[120.8226,21.9284],[120.7974,21.947],[120.7686,21.9588],[120.7362,21.9656],[120.7362,21.9436],[120.729,21.9352],[120.7146,21.9369],[120.7002,21.9487],[120.7002,21.9571],[120.7038,21.9808],[120.6822,22.0145],[120.6822,22.023],[120.6822,22.0297],[120.6822,22.0416],[120.6822,22.0787],[120.6858,22.0905],[120.6966,22.1023],[120.6966,22.1125],[120.621,22.2948],[120.6138,22.305],[120.5922,22.3286],[120.5778,22.3641],[120.5706,22.3742],[120.5382,22.3962],[120.5274,22.4029],[120.5238,22.4046],[120.5166,22.4063],[120.513,22.4198],[120.513,22.4249],[120.495,22.435],[120.459,22.4519],[120.441,22.462],[120.423,22.4772],[120.4122,22.4823],[120.4014,22.4873],[120.3978,22.4857],[120.3906,22.484],[120.3798,22.484],[120.333,22.5194],[120.2862,22.5802],[120.333,22.5262],[120.3294,22.5515],[120.3186,22.565],[120.315,22.5768],[120.2934,22.5988],[120.2574,22.6275],[120.2466,22.6427],[120.2394,22.6596],[120.2466,22.6748],[120.2538,22.69],[120.2466,22.7102],[120.2358,22.7305],[120.2178,22.7575],[120.1998,22.793],[120.1962,22.8082],[120.1962,22.8183],[120.2034,22.8318],[120.2034,22.8403],[120.1998,22.8436],[120.1962,22.847],[120.1926,22.8521],[120.189,22.8605],[120.1782,22.8774],[120.1746,22.8842],[120.1674,22.9314],[120.1638,22.9534],[120.1566,22.9669],[120.1422,22.9804],[120.1602,22.9922],[120.171,23.0142],[120.1674,23.0311],[120.1422,23.0344],[120.1386,23.0277],[120.135,23.0159],[120.1278,23.0074],[120.1134,23.0074],[120.1098,23.0159],[120.1098,23.0395],[120.1062,23.0479],[120.0918,23.0547],[120.0846,23.0479],[120.0774,23.0378],[120.0666,23.0344],[120.0558,23.0429],[120.0522,23.0564],[120.0558,23.0682],[120.0594,23.0767],[120.0702,23.0817],[120.0846,23.0834],[120.0954,23.0868],[120.099,23.0969],[120.0954,23.102],[120.0594,23.1104],[120.0594,23.1172],[120.0882,23.1172],[120.0846,23.1273],[120.0702,23.1391],[120.0594,23.151],[120.063,23.1645],[120.0702,23.1695],[120.081,23.1729],[120.0882,23.1813],[120.0846,23.1965],[120.0774,23.2067],[120.081,23.2168],[120.0882,23.2303],[120.0954,23.2388],[120.0954,23.2472],[120.0954,23.2556],[120.1098,23.286],[120.1134,23.2928],[120.1242,23.2945],[120.1098,23.3029],[120.117,23.3181],[120.1314,23.3181],[120.1422,23.3232],[120.1494,23.3215],[120.1458,23.3333],[120.1386,23.3283],[120.1314,23.3299],[120.1206,23.3299],[120.1206,23.3418],[120.1314,23.3603],[120.1458,23.362],[120.1638,23.362],[120.1494,23.3975],[120.135,23.4262],[120.1422,23.4397],[120.1422,23.4465],[120.1314,23.4515],[120.1314,23.4566],[120.1386,23.465],[120.1422,23.4735],[120.1566,23.492],[120.1242,23.4904],[120.1242,23.5207],[120.1422,23.5376],[120.1422,23.595],[120.1422,23.6373],[120.153,23.6727],[120.171,23.6997],[120.1746,23.7335],[120.1854,23.7639],[120.189,23.774],[120.2142,23.8027],[120.2178,23.8129],[120.2178,23.8179],[120.2394,23.8331],[120.2466,23.8433],[120.2538,23.8686],[120.2574,23.8787],[120.2862,23.9024],[120.2934,23.9125],[120.3042,23.9395],[120.3186,23.9665],[120.3402,24.0223],[120.351,24.0375],[120.3618,24.0493],[120.3726,24.0543],[120.3798,24.0577],[120.387,24.0628],[120.387,24.0729],[120.3906,24.083],[120.4122,24.0966],[120.4158,24.1067],[120.4194,24.1421],[120.423,24.1523],[120.4338,24.1607],[120.477,24.2063],[120.477,24.2097],[120.4806,24.2215],[120.4914,24.23],[120.5022,24.2536],[120.513,24.2958],[120.549,24.3515],[120.5598,24.3853],[120.5706,24.4056],[120.621,24.4562],[120.6498,24.4832],[120.657,24.4984],[120.6606,24.5204],[120.6678,24.5407],[120.6894,24.5761],[120.6966,24.5981],[120.7038,24.6065],[120.729,24.6133],[120.7362,24.6217],[120.7398,24.6301],[120.7434,24.6386],[120.7614,24.6538],[120.7794,24.6656],[120.801,24.6707],[120.8262,24.6656],[120.8226,24.6859],[120.8334,24.6977],[120.8478,24.7112],[120.855,24.7315],[120.8586,24.7365],[120.873,24.7433],[120.8766,24.7619],[120.8982,24.8007],[120.9054,24.8108],[120.909,24.8176],[120.909,24.8226],[120.9054,24.8294],[120.9018,24.8362],[120.909,24.8463],[120.9162,24.853],[120.9198,24.8615],[120.9234,24.875],[120.927,24.8851],[120.9342,24.8953],[120.945,24.902],[120.9522,24.9054],[120.9522,24.9088],[120.9558,24.9189],[120.963,24.9408],[120.9702,24.951],[121.0062,24.9999],[121.0314,25.0286],[121.0602,25.0506],[121.1286,25.0709],[121.1466,25.081],[121.161,25.0911],[121.1754,25.0996],[121.2114,25.1114],[121.287,25.1232],[121.3302,25.13],[121.3482,25.1367],[121.3734,25.1553],[121.377,25.1587],[121.3878,25.1587],[121.3986,25.1587],[121.413,25.1553],[121.4202,25.1468],[121.4238,25.1367],[121.431,25.1317],[121.4418,25.1367],[121.431,25.1553],[121.4058,25.1756],[121.395,25.1823],[121.3986,25.1924],[121.4058,25.1975],[121.413,25.2009],[121.4166,25.2043],[121.4238,25.2211],[121.4346,25.2414],[121.4598,25.2617],[121.4994,25.2786],[121.539,25.287],[121.5822,25.2836],[121.5966,25.2718],[121.6362,25.2228],[121.6506,25.1975],[121.6542,25.1992],[121.665,25.2009],[121.6758,25.2026],[121.683,25.2009],[121.683,25.1975],[121.6794,25.1924],[121.6758,25.1874],[121.6758,25.1789],[121.6794,25.1756],[121.6938,25.1654],[121.6974,25.162],[121.7046,25.157],[121.719,25.1519],[121.8918,25.1131],[121.9062,25.1063],[121.899,25.0945],[121.899,25.0844],[121.899,25.0658],[121.9098,25.0354],[121.9206,25.0219],[121.9278,25.0185],[121.953,25.0219],[121.9674,25.0219],[121.9818,25.0168],[121.9962,25.0101],[122.007,25.0016],[121.9278,24.9662],[121.9062,24.9493]],lanyu:[[121.5642,22.0449],[121.5822,22.0314],[121.5894,22.023],[121.5894,22.0145],[121.5678,22.0078],[121.539,22.0179],[121.5138,22.0348],[121.4994,22.0483],[121.503,22.0568],[121.503,22.0669],[121.4994,22.0753],[121.4922,22.0821],[121.5678,22.0821],[121.5678,22.0753],[121.5642,22.072],[121.5606,22.0635],[121.5606,22.0534],[121.5642,22.0449]],kinmen:[[118.3926,24.5221],[118.4214,24.5271],[118.4502,24.5052],[118.4682,24.4613],[118.4646,24.4309],[118.4502,24.4157],[118.4214,24.4309],[118.4034,24.436],[118.3746,24.4326],[118.3458,24.4174],[118.3314,24.3971],[118.317,24.3904],[118.3026,24.3971],[118.2918,24.3971],[118.2846,24.4005],[118.281,24.4089],[118.281,24.4106],[118.2882,24.4208],[118.2918,24.4258],[118.2918,24.4326],[118.2918,24.441],[118.2882,24.4562],[118.2846,24.4697],[118.281,24.4782],[118.2882,24.4799],[118.317,24.4934],[118.3566,24.4697],[118.3818,24.4731],[118.3854,24.5035],[118.3926,24.5221]],penghu1:[[119.649,23.6035],[119.667,23.5731],[119.6706,23.5596],[119.667,23.5495],[119.6598,23.5562],[119.6526,23.5613],[119.6418,23.563],[119.6274,23.5562],[119.6166,23.5545],[119.6094,23.5511],[119.6058,23.5461],[119.6022,23.5326],[119.5986,23.5292],[119.5806,23.5191],[119.5626,23.5174],[119.5446,23.5224],[119.5266,23.5393],[119.5302,23.5495],[119.541,23.5376],[119.559,23.5343],[119.5734,23.5393],[119.5878,23.5495],[119.577,23.5511],[119.5698,23.5562],[119.5662,23.5613],[119.559,23.5697],[119.5554,23.5663],[119.5554,23.5647],[119.5518,23.563],[119.5518,23.5765],[119.5518,23.59],[119.559,23.59],[119.5662,23.5883],[119.595,23.6052],[119.613,23.6102],[119.6094,23.595],[119.6058,23.59],[119.6202,23.595],[119.6346,23.5934],[119.6418,23.5934],[119.649,23.6035]],penghu2:[[119.4762,23.6035],[119.4906,23.639],[119.5014,23.6508],[119.5158,23.6373],[119.5086,23.6322],[119.5014,23.6204],[119.4906,23.59],[119.4906,23.5832],[119.4942,23.5765],[119.4906,23.5714],[119.4798,23.5697],[119.4726,23.5697],[119.4654,23.568],[119.4618,23.5663],[119.4582,23.563],[119.4438,23.563],[119.4438,23.5697],[119.451,23.5748],[119.4582,23.5765],[119.4654,23.5765],[119.4762,23.5799],[119.4762,23.5866],[119.4762,23.6035]],penghu3:[[119.5734,23.6271],[119.5698,23.639],[119.5626,23.6491],[119.5446,23.6643],[119.5662,23.6795],[119.5806,23.6727],[119.5914,23.6643],[119.595,23.6525],[119.5878,23.6457],[119.5914,23.6322],[119.5842,23.6254],[119.577,23.6221],[119.5734,23.6271]],greenisland:[[121.4598,22.6596],[121.4562,22.6731],[121.4562,22.6765],[121.4958,22.6781],[121.4994,22.6765],[121.503,22.6697],[121.4994,22.6562],[121.4958,22.6494],[121.4958,22.6444],[121.4958,22.6393],[121.4958,22.6342],[121.4922,22.6359],[121.485,22.6359],[121.4814,22.6359],[121.4814,22.6376],[121.4706,22.641],[121.4598,22.6596]],penghu4:[[120.0234,23.4515],[120.0738,23.5005],[120.117,23.5478],[120.1242,23.5511],[120.0918,23.4988],[120.0738,23.4836],[120.063,23.4718],[120.0486,23.4583],[120.0378,23.4515],[120.0198,23.438],[120.009,23.4329],[120.0234,23.4515]]};var Zo={\u7389\u5C71\u570B\u5BB6\u516C\u5712:{f:"p01.jpg",a:"Chi-Hung Lin",l:"CC BY-SA 2.0",u:"https://commons.wikimedia.org/wiki/File:Yushan_Main_Peak_and_Yushan_Northern_Peak_seen_from_Dongpu_Mountain_in_the_afternoon_on_28_January_2017.jpg",t:"Yushan Main Peak and Yushan Northern Peak seen from Dongpu Mountain in the afternoon on 28 January 2017.jpg"},\u963F\u91CC\u5C71\u68EE\u6797\u904A\u6A02\u5340:{f:"p02.jpg",a:"CEphoto, Uwe Aranas",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Alishan_Taiwan_Alishan-Forest-Railway-03.jpg",t:"Alishan Taiwan Alishan-Forest-Railway-03.jpg"},\u592A\u9B6F\u95A3\u5CFD\u8C37:{f:"p03.jpg",a:"CEphoto, Uwe Aranas",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Taroko-Gorge_Hualien_Taiwan_Cihmu-Bridge-at-Taroko-National-Park-01.jpg",t:"Taroko-Gorge Hualien Taiwan Cihmu-Bridge-at-Taroko-National-Park-01.jpg"},\u5408\u6B61\u5C71:{f:"p04.jpg",a:"YangChen(TW)",l:"CC BY 2.0",u:"https://commons.wikimedia.org/wiki/File:Hehuanshan_in_winter.jpg",t:"Hehuanshan in winter.jpg"},\u96EA\u9738\u570B\u5BB6\u516C\u5712:{f:"p05.jpg",a:"Prince Roy",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Xueshan_Summit.jpg",t:"Xueshan Summit.jpg"},\u65E5\u6708\u6F6D:{f:"p06.jpg",a:"LowensteinYang",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:%E6%97%A5%E6%9C%88%E6%BD%AD%E6%B0%B4%E7%A4%BE%E7%A2%BC%E9%A0%AD_View_of_Shuishe_Pier_from_Sun_Moon_Lake_20151213.jpg",t:"\u65E5\u6708\u6F6D\u6C34\u793E\u78BC\u982D View of Shuishe Pier from Sun Moon Lake 20151213.jpg"},\u576A\u6797\u8336\u5712:{f:"p07.jpg",a:"Taiwankengo",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:2022_Tea_plantations_at_ZhangKongZi_Pinglin_District_e.jpg",t:"2022 Tea plantations at ZhangKongZi Pinglin District e.jpg"},\u6708\u4E16\u754C:{f:"p08.jpg",a:"Taiwankengo",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:Tianliao_Moon_World_2018.jpg",t:"Tianliao Moon World 2018.jpg"},\u6843\u5712\u57E4\u5858:{f:"p09.jpg",a:"Taiwankengo",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:2021_Xiaoli_Pond_in_Bade_District_Taoyuan_ii.jpg",t:"2021 Xiaoli Pond in Bade District Taoyuan ii.jpg"},\u6797\u53E3\u53F0\u5730:{f:"p10.jpg",a:"Wing1990hk",l:"CC BY 3.0",u:"https://commons.wikimedia.org/wiki/File:Linkou_District_201506.jpg",t:"Linkou District 201506.jpg"},\u81FA\u4E2D\u90FD\u6703\u516C\u5712:{f:"p11.jpg",a:"Fcuk1203",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Taichung_Metropolitan_Park_main_entrance_2010-08-12.jpg",t:"Taichung Metropolitan Park main entrance 2010-08-12.jpg"},\u516B\u5366\u5C71\u5927\u4F5B:{f:"p12.jpg",a:"AngMoKio",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Changhua_Great_Buddha_Temple_amk.jpg",t:"Changhua Great Buddha Temple amk.jpg"},"\u81FA\u5317 101":{f:"p13.jpg",a:"CEphoto, Uwe Aranas",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Taipei_Taiwan_Taipei-101-Tower-01.jpg",t:"Taipei Taiwan Taipei-101-Tower-01.jpg"},\u81FA\u4E2D\u516C\u5712:{f:"p14.jpg",a:"Yoxem",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Taichung_Park_Lake_Pavilion_20070925.jpg",t:"Taichung Park Lake Pavilion 20070925.jpg"},\u6CF0\u6E90\u5E7D\u8C37:{f:"p15.jpg",a:"Benson KC Fang",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Washed-out_Rocks_in_Mawuku_Creek,_Taiwan.JPG",t:"Washed-out Rocks in Mawuku Creek, Taiwan.JPG"},"\u70CF\u5C71\u982D\u6C34\u5EAB\u30FB\u5609\u5357\u5927\u5733":{f:"p16.jpg",a:"Koika",l:"CC BY-SA 2.0",u:"https://commons.wikimedia.org/wiki/File:Coral_Lake_Tainan_from_airplane_window.JPG",t:"Coral Lake Tainan from airplane window.JPG"},\u4E03\u80A1\u9E7D\u5C71:{f:"p17.jpg",a:"bangdoll",l:"CC BY-SA 2.0",u:"https://commons.wikimedia.org/wiki/File:Tourists_climbing_Qigu_Salt_Mountain.jpg",t:"Tourists climbing Qigu Salt Mountain.jpg"},\u51AC\u5C71\u6CB3\u89AA\u6C34\u516C\u5712:{f:"p18.jpg",a:"Gpdprince",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:Dongshan_River_Water_Park_(Yilan,_Taiwan).JPG",t:"Dongshan River Water Park (Yilan, Taiwan).JPG"},\u6C60\u4E0A\u4F2F\u6717\u5927\u9053:{f:"p19.jpg",a:"lumoplank",l:"CC0",u:"https://commons.wikimedia.org/wiki/File:Mr._Brown_Avenue,_Chishang.jpg",t:"Mr. Brown Avenue, Chishang.jpg"},\u7389\u91CC\u820A\u9435\u6A4B\u81EA\u884C\u8ECA\u9053:{f:"p20.jpg",a:"Kai3952",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:Former_Xiuguluan_River_Railway_Bridge,_which_can_see_the_fault_rupture_passed_through_the_bridge_and_caused_the_collapse_of_span_17,_as_taken_in_the_afternoon_on_4_December_2021.jpg",t:"Former Xiuguluan River Railway Bridge, which can see the fault rupture passed through the bridge and caused the collapse of span 17, as taken in the afternoon on 4 December 2021.jpg"},\u5927\u9D6C\u7063:{f:"p21.jpg",a:"rheins",l:"CC BY 3.0",u:"https://commons.wikimedia.org/wiki/File:%E5%A4%A7%E9%B9%8F%E6%B9%BE_-_Dapeng_Bay_-_2012.02_-_panoramio.jpg",t:"\u5927\u9E4F\u6E7E - Dapeng Bay - 2012.02 - panoramio.jpg"},\u967D\u660E\u5C71\u570B\u5BB6\u516C\u5712:{f:"p22.jpg",a:"lienyuan lee",l:"CC BY 3.0",u:"https://commons.wikimedia.org/wiki/File:Qixing_Mountain_%E4%B8%83%E6%98%9F%E5%B1%B1_-_panoramio.jpg",t:"Qixing Mountain \u4E03\u661F\u5C71 - panoramio.jpg"},\u91CE\u67F3\u5730\u8CEA\u516C\u5712:{f:"p23.jpg",a:"Mark S. Piteo-Tarpy",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Queens_Head_Rock_Yeliu_North_Coast_Taiwan.jpg",t:"Queens Head Rock Yeliu North Coast Taiwan.jpg"},\u4E5D\u4EFD:{f:"p24.jpg",a:"Another Believer",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:Jiufen,_November_28,_2024_-_030.jpg",t:"Jiufen, November 28, 2024 - 030.jpg"},\u6E05\u6C34\u65B7\u5D16:{f:"p25.jpg",a:"Huaiwun",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:Taroko_National_Park_Qingshui_Cliff_(Huaiwun).jpg",t:"Taroko National Park Qingshui Cliff (Huaiwun).jpg"},"\u58BE\u4E01\u570B\u5BB6\u516C\u5712\u30FB\u9D5D\u947E\u9F3B":{f:"p26.jpg",a:"Bernard Gagnon",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Eluanbi_Lighthouse_02.jpg",t:"Eluanbi Lighthouse 02.jpg"},\u5317\u9580\u6F5F\u6E56:{f:"p27.jpg",a:"\u5510\u7FA9\u5B8F",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:IMG_E5488(1)%E4%BA%95%E4%BB%94%E8%85%B3%E9%A4%8A%E8%9A%B5%E4%BA%BA%E5%AE%B6.jpg",t:"IMG E5488(1)\u4E95\u4ED4\u8173\u990A\u86B5\u4EBA\u5BB6.jpg"},\u9F3B\u982D\u89D2:{f:"p28.jpg",a:"Taiwankengo",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:2018_Bitou_Cape_B.jpg",t:"2018 Bitou Cape B.jpg"},\u6F8E\u6E56\u8DE8\u6D77\u5927\u6A4B:{f:"p29.jpg",a:"\u7FC1\u7DAD\u5FB7 (Wei-Te Wong)",l:"CC BY-SA 2.0",u:"https://commons.wikimedia.org/wiki/File:Penghu_Great_Bridge_20150619.jpg",t:"Penghu Great Bridge 20150619.jpg"},\u91D1\u9580\u8392\u5149\u6A13:{f:"p30.jpg",a:"\u59DC \u660E\u96C4",l:"CC0",u:"https://commons.wikimedia.org/wiki/File:Juguang_Tower_20180727.jpg",t:"Juguang Tower 20180727.jpg"},\u99AC\u7956\u82B9\u58C1\u805A\u843D:{f:"p31.jpg",a:"Catriona0000",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:Matsu_qinbi.jpg",t:"Matsu qinbi.jpg"},\u862D\u5DBC\u62FC\u677F\u821F:{f:"p32.jpg",a:"Bernard Gagnon",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Yami_ipanitika.jpg",t:"Yami ipanitika.jpg"},\u7DA0\u5CF6\u671D\u65E5\u6EAB\u6CC9:{f:"p33.jpg",a:"Suicasmo",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:Zhaori_Hot_Springs_20150128.jpg",t:"Zhaori Hot Springs 20150128.jpg"},\u6771\u6C99\u74B0\u7901\u570B\u5BB6\u516C\u5712:{f:"p34.jpg",a:"ISS Crew Earth Observations experiment and the Image Science",l:"Public domain",u:"https://commons.wikimedia.org/wiki/File:Pratas_Island_ISS004-10210.jpg",t:"Pratas Island ISS004-10210.jpg"}};var De={mountain:{name:"\u5C71\u5730",color:"#9c6b4a",icon:"\u26F0\uFE0F",elem:"\u5F88\u9AD8\u3001\u9AD8\u4F4E\u8D77\u4F0F\u5F88\u5927\u7684\u5730\u65B9\uFF0C\u9AD8\u5EA6\u8D85\u904E 1,000 \u516C\u5C3A\u3002\u81FA\u7063\u7684\u5C71\u5730\u5728\u4E2D\u9593\u504F\u6771\u908A\uFF0C\u5357\u5317\u6392\u6210\u4E00\u9577\u689D\uFF0C\u9762\u7A4D\u6700\u5927\u3002\u6700\u9AD8\u7684\u5C71\u662F\u7389\u5C71\u3002",junior:"\u6D77\u62D4\u8D85\u904E 1,000 \u516C\u5C3A\u3001\u5D0E\u5D87\u8D77\u4F0F\u7684\u5730\u5F62\u3002\u81FA\u7063\u4F4D\u5728\u6B50\u4E9E\u677F\u584A\u8207\u83F2\u5F8B\u8CD3\u6D77\u677F\u584A\u4EA4\u754C\uFF0C\u677F\u584A\u63A8\u64E0\u5F62\u6210\u300C\u65B0\u8936\u66F2\u5C71\u8108\u300D\uFF0C\u6709\u4E94\u5927\u5C71\u8108\uFF1A\u4E2D\u592E\u3001\u96EA\u5C71\u3001\u7389\u5C71\u3001\u963F\u91CC\u5C71\u3001\u6D77\u5CB8\u5C71\u8108\uFF0C\u5176\u4E2D\u4E2D\u592E\u5C71\u8108\u7BC4\u570D\u6700\u5927\uFF1B\u7389\u5C71\u5C71\u8108\u4E3B\u5CF0 3,952 \u516C\u5C3A\u662F\u81FA\u7063\u6700\u9AD8\u5CF0\u3002"},hill:{name:"\u4E18\u9675",color:"#f2c94c",icon:"\u{1F304}",elem:"\u6709\u9AD8\u6709\u4F4E\uFF0C\u4F46\u6C92\u6709\u5C71\u5730\u90A3\u9EBC\u9AD8\u3001\u90A3\u9EBC\u9661\uFF08\u4E0D\u5230 1,000 \u516C\u5C3A\uFF09\u3002\u5E38\u5E38\u7A2E\u8336\u3001\u7A2E\u679C\u6A39\uFF0C\u958B\u6210\u4E00\u5C64\u4E00\u5C64\u7684\u68AF\u7530\u3002",junior:"\u6D77\u62D4\u4F4E\u65BC 1,000 \u516C\u5C3A\u7684\u8D77\u4F0F\u5730\u5F62\uFF0C\u4E3B\u8981\u5206\u5E03\u5728\u5C71\u5730\u5916\u7DE3\uFF0C\u4F8B\u5982\u82D7\u6817\u4E18\u9675\u3001\u65B0\u7AF9\u4E18\u9675\u3002\u5761\u5730\u5E38\u88AB\u958B\u95E2\u7A2E\u690D\u8336\u6A39\u3001\u679C\u6A39\u8207\u6C34\u7A3B\uFF08\u68AF\u7530\uFF09\u3002"},tableland:{name:"\u53F0\u5730",color:"#f2994a",icon:"\u{1F7EB}",elem:"\u9AD8\u9AD8\u7684\u3001\u4E0A\u9762\u5F88\u5E73\u5766\uFF0C\u65C1\u908A\u662F\u9661\u5761\uFF0C\u50CF\u4E00\u5F35\u5927\u684C\u5B50\u3002\u53F0\u5730\u6BD4\u8F03\u5BB9\u6613\u7F3A\u6C34\uFF0C\u4EE5\u524D\u7684\u4EBA\u6316\u4E86\u5F88\u591A\u300C\u57E4\u5858\u300D\u4F86\u5B58\u6C34\u3002",junior:"\u5730\u52E2\u9AD8\u800C\u5E73\u5766\u3001\u908A\u7DE3\u9661\u5CED\uFF0C\u4F46\u6D77\u62D4\u4F4E\u65BC 1,000 \u516C\u5C3A\u7684\u5730\u5F62\uFF0C\u5206\u5E03\u5728\u76C6\u5730\u3001\u5E73\u539F\u6216\u4E18\u9675\u7684\u63A5\u89F8\u5E36\uFF0C\u4F8B\u5982\u6797\u53E3\u3001\u6843\u5712\u3001\u5927\u809A\u3001\u516B\u5366\u53F0\u5730\u3002\u53F0\u5730\u591A\u767C\u5C55\u70BA\u8FB2\u696D\u8207\u5DE5\u696D\u7528\u5730\uFF08\u5927\u809A\u53F0\u5730\u6709\u6A5F\u5834\u3001\u5927\u5B78\u3001\u5DE5\u696D\u5340\uFF09\u3002"},basin:{name:"\u76C6\u5730",color:"#56ccf2",icon:"\u{1F963}",elem:"\u56DB\u5468\u9AD8\u3001\u4E2D\u9593\u4F4E\u5E73\uFF0C\u5F62\u72C0\u50CF\u4E00\u500B\u81C9\u76C6\u3002\u81FA\u5317\u76C6\u5730\u4F4F\u4E86\u5F88\u591A\u4EBA\u3002",junior:"\u56DB\u5468\u88AB\u4E18\u9675\u3001\u5C71\u5730\u570D\u7E5E\u7684\u76C6\u72C0\u5730\u5F62\uFF0C\u4F8B\u5982\u81FA\u5317\u3001\u81FA\u4E2D\u3001\u57D4\u91CC\u3001\u6CF0\u6E90\u76C6\u5730\u3002\u81FA\u5317\u76C6\u5730\u662F\u5168\u81FA\u4EBA\u53E3\u5BC6\u5EA6\u6700\u9AD8\u3001\u653F\u6CBB\u7D93\u6FDF\u7684\u4E2D\u5FC3\u3002"},plain:{name:"\u5E73\u539F",color:"#6fcf97",icon:"\u{1F33E}",elem:"\u53C8\u4F4E\u53C8\u5E73\u53C8\u5BEC\u7684\u5730\u65B9\uFF0C\u5F88\u9069\u5408\u7A2E\u7A3B\u7C73\u3001\u84CB\u623F\u5B50\u3002\u6700\u5927\u7684\u662F\u5609\u5357\u5E73\u539F\u3002",junior:"\u6D77\u62D4\u8F03\u4F4E\u3001\u5730\u52E2\u5E73\u5766\u7684\u5730\u5F62\u3002\u81FA\u4E2D\u4EE5\u5357\u5E73\u539F\u9023\u7DBF\uFF0C\u662F\u4E3B\u8981\u7684\u8FB2\u696D\u751F\u7522\u5730\u5E36\uFF1B\u5609\u5357\u5E73\u539F\u9762\u7A4D\u6700\u5EE3\uFF0C\u662F\u897F\u90E8\u5E73\u539F\u7684\u4E3B\u9AD4\u3002\u53E6\u6709\u6FC1\u6C34\u6EAA\u6C96\u7A4D\u5E73\u539F\u3001\u5C4F\u6771\u5E73\u539F\u3001\u862D\u967D\u5E73\u539F\u3001\u82B1\u6771\u7E31\u8C37\u5E73\u539F\u3002"}},rr=[{name:"\u4E2D\u592E\u5C71\u8108",w:17,label:[121.18,23.75],pts:[[121.8,24.58,900],[121.6,24.45,2400],[121.44,24.36,3742],[121.36,24.2,3300],[121.31,24.08,3500],[121.2,23.8,3300],[121.08,23.5,3825],[120.99,23.25,3500],[120.92,22.95,3e3],[120.8,22.62,3092],[120.78,22.38,1800],[120.82,22.15,700],[120.85,21.95,200]]},{name:"\u96EA\u5C71\u5C71\u8108",w:13,label:[121.3,24.55],pts:[[121.95,25,400],[121.75,24.88,1100],[121.5,24.7,2200],[121.3,24.5,3300],[121.23,24.38,3886],[121.1,24.22,2900],[120.98,24.05,1900],[120.93,23.92,900]]},{name:"\u7389\u5C71\u5C71\u8108",w:9,label:[120.9,23.3],pts:[[121,23.8,1900],[120.98,23.62,3100],[120.957,23.47,3952],[120.92,23.25,3e3],[120.83,23,1900],[120.72,22.82,900]]},{name:"\u963F\u91CC\u5C71\u5C71\u8108",w:9,label:[120.72,23.45],pts:[[120.88,23.95,1100],[120.83,23.7,2e3],[120.8,23.5,2600],[120.72,23.25,1900],[120.6,23.02,1100],[120.52,22.88,500]]},{name:"\u6D77\u5CB8\u5C71\u8108",w:5.5,label:[121.42,23.4],pts:[[121.58,23.92,500],[121.48,23.6,1200],[121.37,23.25,1682],[121.26,23.02,1200],[121.17,22.82,500],[121.14,22.76,150]]}],qu=[{w:13,pts:[[121.8,25.08,450],[121.62,24.98,600],[121.45,24.85,450],[121.15,24.72,420],[120.95,24.55,480],[120.85,24.35,500],[120.82,24.05,520],[120.7,23.7,600],[120.55,23.35,550],[120.45,23.05,420],[120.42,22.8,300],[120.4,22.62,150]]},{w:6,pts:[[120.75,22.25,300],[120.8,22.05,250],[120.85,21.95,150]]}],jo=[{name:"\u5927\u5C6F\u706B\u5C71\u7FA4",lon:121.55,lat:25.17,h:1120,r:7}],or=[{type:"plain",name:"\u5609\u5357\u5E73\u539F",label:[120.3,23.35],h:25,blur:4,poly:[[120.2,23.8],[120.52,23.8],[120.5,23.45],[120.42,23.1],[120.33,22.92],[120.18,22.92],[120.08,23.15],[120.1,23.5]]},{type:"plain",name:"\u6FC1\u6C34\u6EAA\u6C96\u7A4D\u5E73\u539F",label:[120.4,23.88],h:30,blur:4,poly:[[120.3,24.08],[120.52,24.05],[120.62,23.85],[120.55,23.78],[120.18,23.78],[120.22,23.95]]},{type:"plain",name:"\u5C4F\u6771\u5E73\u539F",label:[120.53,22.65],h:30,blur:3,poly:[[120.43,22.88],[120.62,22.88],[120.66,22.6],[120.6,22.4],[120.5,22.4],[120.42,22.55]]},{type:"plain",name:"\u862D\u967D\u5E73\u539F",label:[121.77,24.72],h:15,blur:2,poly:[[121.7,24.86],[121.82,24.86],[121.86,24.62],[121.8,24.58],[121.7,24.62],[121.68,24.75]]},{type:"plain",name:"\u82B1\u6771\u7E31\u8C37\u5E73\u539F",label:[121.36,23.45],h:180,blur:2,line:[[121.6,23.97],[121.48,23.7],[121.36,23.4],[121.24,23.15],[121.15,22.9],[121.12,22.76]],lw:2.6},{type:"basin",name:"\u81FA\u5317\u76C6\u5730",label:[121.52,25.05],h:10,blur:2,ell:[121.51,25.05,9,7]},{type:"basin",name:"\u81FA\u4E2D\u76C6\u5730",label:[120.69,24.15],h:90,blur:2,ell:[120.69,24.15,6,16]},{type:"basin",name:"\u57D4\u91CC\u76C6\u5730",label:[120.97,23.97],h:450,blur:1,ell:[120.965,23.97,4,3.5]},{type:"basin",name:"\u6CF0\u6E90\u76C6\u5730",label:[121.31,23],h:260,blur:1,ell:[121.305,23,2.3,2.3]},{type:"tableland",name:"\u6797\u53E3\u53F0\u5730",label:[121.35,25.08],h:240,blur:1,ell:[121.36,25.07,7,5.5]},{type:"tableland",name:"\u6843\u5712\u53F0\u5730",label:[121.17,24.93],h:140,blur:1,poly:[[121.05,25.06],[121.25,25.03],[121.35,24.85],[121.3,24.78],[121.1,24.82],[121,24.95]]},{type:"tableland",name:"\u5927\u809A\u53F0\u5730",label:[120.57,24.18],h:260,blur:1,ell:[120.575,24.18,3.2,11]},{type:"tableland",name:"\u516B\u5366\u53F0\u5730",label:[120.59,23.93],h:300,blur:1,ell:[120.585,23.93,3.6,13]}],Lc=[{name:"\u65B0\u7AF9\u4E18\u9675",lon:121.05,lat:24.72},{name:"\u82D7\u6817\u4E18\u9675",lon:120.88,lat:24.48},{name:"\u65B0\u5316\u4E18\u9675",lon:120.4,lat:23.03}],$u=[{name:"\u7389\u5C71\u4E3B\u5CF0",lon:120.957,lat:23.47,h:3952,note:"\u81FA\u7063\u6700\u9AD8\u5CF0"},{name:"\u96EA\u5C71",lon:121.23,lat:24.38,h:3886,note:"\u96EA\u5C71\u5C71\u8108\u4E3B\u5CF0"},{name:"\u79C0\u59D1\u5DD2\u5C71",lon:121.08,lat:23.5,h:3825,note:"\u4E2D\u592E\u5C71\u8108\u6700\u9AD8\u5CF0"},{name:"\u5357\u6E56\u5927\u5C71",lon:121.44,lat:24.36,h:3742},{name:"\u5317\u5927\u6B66\u5C71",lon:120.8,lat:22.62,h:3092},{name:"\u65B0\u6E2F\u5C71",lon:121.37,lat:23.25,h:1682,note:"\u6D77\u5CB8\u5C71\u8108\u6700\u9AD8\u5CF0"},{name:"\u4E03\u661F\u5C71",lon:121.55,lat:25.17,h:1120,note:"\u5927\u5C6F\u706B\u5C71\u7FA4"}],Tn=[{id:"penghu",name:"\u6F8E\u6E56\u7FA4\u5CF6",coast:["penghu1","penghu2","penghu3","penghu4"],h:50,profile:"mesa",kind:"\u706B\u5C71\u5CF6",lon:119.57,lat:23.57,region:"S",elem:"\u7531\u5F88\u591A\u5C0F\u5CF6\u7D44\u6210\uFF0C\u5CF6\u4E0A\u5F88\u5E73\uFF0C\u6709\u7279\u5225\u7684\u300C\u67F1\u72C0\u7384\u6B66\u5CA9\u300D\uFF0C\u662F\u706B\u5C71\u5CA9\u6F3F\u51B7\u537B\u5F8C\u8B8A\u6210\u7684\u3002\u98A8\u5F88\u5927\u3001\u96E8\u5F88\u5C11\u3002",junior:"\u706B\u5C71\u5CF6\u3002\u7531\u7384\u6B66\u5CA9\u7194\u5CA9\u53F0\u5730\u69CB\u6210\uFF0C\u5730\u52E2\u4F4E\u5E73\uFF0C\u67F1\u72C0\u7384\u6B66\u5CA9\u767C\u9054\uFF08\u5982\u6876\u76E4\u5DBC\uFF09\uFF1B\u6F8E\u6E56\u5357\u65B9\u56DB\u5CF6\u8A2D\u6709\u570B\u5BB6\u516C\u5712\u3002\u5E74\u964D\u6C34\u91CF\u662F\u5168\u81FA\u6700\u5C11\u7684\u5730\u5340\u4E4B\u4E00\u3002"},{id:"kinmen",name:"\u91D1\u9580",coast:["kinmen"],h:253,profile:"hill",kind:"\u5927\u9678\u5CF6",lon:118.38,lat:24.45,region:"O",elem:"\u96E2\u4E2D\u570B\u5927\u9678\u5F88\u8FD1\u7684\u5CF6\uFF0C\u6700\u9AD8\u7684\u662F\u592A\u6B66\u5C71\u3002\u6709\u5F88\u591A\u95A9\u5357\u5F0F\u7684\u53E4\u539D\u548C\u6230\u5730\u7684\u6B77\u53F2\u3002",junior:"\u5927\u9678\u5CF6\u3002\u539F\u672C\u662F\u81E8\u6D77\u4E18\u9675\uFF0C\u56E0\u6D77\u5E73\u9762\u4E0A\u5347\u800C\u6210\u5CF6\uFF0C\u4EE5\u82B1\u5D17\u5CA9\u4E18\u9675\u70BA\u4E3B\uFF0C\u592A\u6B66\u5C71\u7D04 253 \u516C\u5C3A\u3002\u8A2D\u6709\u91D1\u9580\u570B\u5BB6\u516C\u5712\uFF08\u6230\u5F79\u53F2\u8E5F\u3001\u95A9\u5357\u805A\u843D\uFF09\u3002"},{id:"matsu",name:"\u99AC\u7956\u5217\u5CF6",ell:[[119.94,26.155,2.6,1.6],[119.99,26.222,2.4,1.4],[120.49,26.37,1.6,.9],[119.96,25.965,1.4,1]],h:290,profile:"hill",kind:"\u5927\u9678\u5CF6",lon:119.96,lat:26.16,region:"O",elem:"\u5728\u81FA\u7063\u897F\u5317\u65B9\u3001\u5F88\u9760\u8FD1\u4E2D\u570B\u5927\u9678\uFF0C\u5CF6\u4E0A\u591A\u5CA9\u77F3\u5C71\u5761\uFF0C\u623F\u5B50\u6CBF\u8457\u5C71\u5761\u84CB\u3002\u590F\u5929\u591C\u665A\u6D77\u908A\u53EF\u80FD\u770B\u5230\u300C\u85CD\u773C\u6DDA\u300D\u3002",junior:"\u5927\u9678\u5CF6\u3002\u539F\u8207\u4E2D\u570B\u6771\u5357\u6CBF\u6D77\u4E18\u9675\u76F8\u9023\uFF0C\u56E0\u6D77\u5E73\u9762\u4E0A\u5347\u800C\u6210\u5CF6\uFF0C\u56E0\u6B64\u5730\u52E2\u5D0E\u5D87\u3001\u5E73\u5730\u5C11\uFF1B\u805A\u843D\u4F9D\u5C71\u800C\u5EFA\uFF08\u5982\u82B9\u58C1\u7684\u77F3\u982D\u5C4B\uFF09\u3002"},{id:"lanyu",name:"\u862D\u5DBC",coast:["lanyu"],h:552,profile:"cone",kind:"\u706B\u5C71\u5CF6",lon:121.55,lat:22.04,region:"E",elem:"\u81FA\u6771\u5916\u6D77\u7684\u706B\u5C71\u5CF6\uFF0C\u4F4F\u8457\u9054\u609F\uFF08\u96C5\u7F8E\uFF09\u65CF\uFF0C\u6703\u505A\u6F02\u4EAE\u7684\u300C\u62FC\u677F\u821F\u300D\uFF0C\u9084\u6709\u98DB\u9B5A\u796D\u548C\u5730\u4E0B\u5C4B\uFF08\u53EF\u4EE5\u9632\u98B1\u98A8\uFF09\u3002",junior:"\u706B\u5C71\u5CF6\u3002\u5CF6\u4E0A\u6700\u9AD8\u9EDE\u7D05\u982D\u5C71\u7D04 552 \u516C\u5C3A\uFF1B\u96C5\u7F8E\uFF08\u9054\u609F\uFF09\u65CF\u7684\u62FC\u677F\u821F\u3001\u98DB\u9B5A\u796D\u8207\u9632\u98B1\u7684\u50B3\u7D71\u5730\u4E0B\u5C4B\uFF0C\u90FD\u662F\u9069\u61C9\u6D77\u5CF6\u74B0\u5883\u7684\u751F\u6D3B\u667A\u6167\u3002"},{id:"green",name:"\u7DA0\u5CF6",coast:["greenisland"],h:281,profile:"cone",kind:"\u706B\u5C71\u5CF6",lon:121.49,lat:22.66,region:"E",elem:"\u81FA\u6771\u5916\u6D77\u7684\u5C0F\u706B\u5C71\u5CF6\uFF0C\u6709\u5F88\u5C11\u898B\u7684\u6D77\u5E95\u6EAB\u6CC9\uFF08\u671D\u65E5\u6EAB\u6CC9\uFF09\u548C\u7F8E\u9E97\u7684\u73CA\u745A\u3002",junior:"\u706B\u5C71\u5CF6\u3002\u4F4D\u65BC\u81FA\u6771\u5916\u6D77\uFF0C\u5CF6\u4E0A\u706B\u71D2\u5C71\u7D04 281 \u516C\u5C3A\uFF0C\u6D77\u5CB8\u6709\u73CA\u745A\u7901\uFF0C\u671D\u65E5\u6EAB\u6CC9\u662F\u5C11\u898B\u7684\u6D77\u6C34\u6EAB\u6CC9\u3002"},{id:"dongsha",name:"\u6771\u6C99\u7FA4\u5CF6",ell:[[116.715,20.705,1.4,.55]],h:6,profile:"flat",kind:"\u73CA\u745A\u7901\u5CF6",atoll:[116.83,20.7,11.5],lon:116.72,lat:20.7,region:"O",elem:"\u5728\u5357\u6D77\u3001\u96E2\u9AD8\u96C4\u5F88\u9060\u5F88\u9060\uFF08\u7D04 440 \u516C\u91CC\uFF09\u7684\u73CA\u745A\u5CF6\uFF0C\u53C8\u5C0F\u53C8\u5E73\u3002\u5468\u570D\u662F\u4E00\u5708\u50CF\u751C\u751C\u5708\u7684\u73CA\u745A\u7901\u3002",junior:"\u73CA\u745A\u7901\u5CF6\uFF08\u74B0\u7901\uFF09\u3002\u9762\u7A4D\u5C0F\u3001\u5730\u52E2\u4F4E\u5E73\uFF1B\u6C11\u570B 96 \u5E74\u6210\u7ACB\u6771\u6C99\u74B0\u7901\u570B\u5BB6\u516C\u5712\uFF0C\u662F\u81FA\u7063\u7B2C\u4E00\u5EA7\u6D77\u6D0B\u570B\u5BB6\u516C\u5712\u3002\u8DDD\u9AD8\u96C4\u7D04 440 \u516C\u91CC\u3002"},{id:"guishan",name:"\u9F9C\u5C71\u5CF6",ell:[[121.952,24.842,1.6,.8]],h:398,profile:"cone",kind:"\u706B\u5C71\u5CF6",lon:121.952,lat:24.842,region:"N",elem:"\u5B9C\u862D\u5916\u6D77\u50CF\u4E00\u96BB\u70CF\u9F9C\u7684\u706B\u5C71\u5CF6\uFF0C\u662F\u5B9C\u862D\u4EBA\u7684\u5730\u6A19\u3002",junior:"\u706B\u5C71\u5CF6\u3002\u4F4D\u65BC\u5B9C\u862D\u5916\u6D77\uFF0C\u662F\u81FA\u7063\u4ECD\u6709\u706B\u5C71\u6D3B\u52D5\u8DE1\u8C61\u7684\u5CF6\u5DBC\uFF0C\u5916\u5F62\u4F3C\u9F9C\u800C\u5F97\u540D\u3002"},{id:"keelungislet",name:"\u57FA\u9686\u5DBC",ell:[[121.786,25.192,.55,.32]],h:182,profile:"cone",kind:"\u706B\u5C71\u5CF6",lon:121.786,lat:25.192,region:"N",elem:"\u57FA\u9686\u5916\u6D77\u7684\u5C0F\u706B\u5C71\u5CF6\uFF0C\u5F62\u72C0\u50CF\u4E00\u9846\u6F02\u6D6E\u5728\u6D77\u4E0A\u7684\u73E0\u5B50\uFF0C\u88AB\u7A31\u70BA\u300C\u53F0\u7063\u9F8D\u73E0\u300D\u3002\u53EF\u4EE5\u642D\u8239\u767B\u5CF6\uFF0C\u770B\u71C8\u5854\u548C\u6D77\u666F\u3002",junior:"\u706B\u5C71\u5CF6\uFF08\u57FA\u9686\u706B\u5C71\u7FA4\u7684\u4E00\u90E8\u5206\uFF09\uFF0C\u4F4D\u65BC\u57FA\u9686\u6E2F\u5916\u6D77\uFF1B\u5468\u908A\u6D77\u57DF\u6709\u706B\u5C71\u5CA9\u7901\u8207\u73CA\u745A\u7901\u751F\u614B\uFF0C\u662F\u6D77\u91E3\u8207\u6F5B\u6C34\u52DD\u5730\uFF0C\u8FD1\u5E74\u958B\u653E\u767B\u5CF6\u89C0\u5149\u3002"},{id:"daqiu",name:"\u5927\u5775\u5CF6",ell:[[120.032,26.296,.9,.45]],h:100,profile:"hill",kind:"\u5927\u9678\u5CF6",lon:120.032,lat:26.296,region:"O",elem:"\u99AC\u7956\u5317\u7AFF\u65C1\u908A\u7684\u5C0F\u5CF6\uFF0C\u5CF6\u4E0A\u4F4F\u8457\u4E00\u7FA4\u91CE\u751F\u7684\u6885\u82B1\u9E7F\uFF0C\u7260\u5011\u4E0D\u6015\u4EBA\uFF0C\u662F\u6700\u53D7\u6B61\u8FCE\u7684\u300C\u6885\u82B1\u9E7F\u5CF6\u300D\u3002",junior:"\u5C6C\u99AC\u7956\u5217\u5CF6\uFF0C\u8207\u5317\u7AFF\u76F8\u9130\u7684\u82B1\u5D17\u5CA9\u8CEA\u5927\u9678\u5CF6\uFF1B\u5CF6\u4E0A\u91CE\u653E\u7684\u6885\u82B1\u9E7F\u65CF\u7FA4\u70BA\u89C0\u5149\u7279\u8272\uFF0C\u5468\u908A\u6D77\u57DF\u6625\u590F\u53EF\u898B\u85CD\u773C\u6DDA\uFF08\u591C\u5149\u87F2\uFF09\u3002"},{id:"liuqiu",name:"\u5C0F\u7409\u7403",ell:[[120.37,22.34,1.6,1.1]],h:87,profile:"mesa",kind:"\u73CA\u745A\u7901\u5CF6",lon:120.37,lat:22.34,region:"S",elem:"\u5C4F\u6771\u5916\u6D77\u7684\u73CA\u745A\u7901\u5C0F\u5CF6\uFF0C\u53EF\u4EE5\u770B\u5230\u5F88\u591A\u6D77\u9F9C\u3002",junior:"\u73CA\u745A\u7901\u5CF6\uFF08\u7409\u7403\u5DBC\uFF09\u3002\u7531\u9686\u8D77\u7684\u73CA\u745A\u7901\u69CB\u6210\uFF0C\u5730\u52E2\u4F4E\u5E73\uFF0C\u6D77\u5CB8\u6709\u82B1\u74F6\u5CA9\u7B49\u73CA\u745A\u7901\u5730\u5F62\u3002"}],qn=[{n:"\u7389\u5C71\u570B\u5BB6\u516C\u5712",t:"mountain",lon:120.96,lat:23.47,i:"\u{1F3D4}\uFE0F",d:"\u81FA\u7063\u6700\u9AD8\u5CF0\u7389\u5C71\u6240\u5728\uFF0C\u9084\u6709\u5168\u81FA\u6D77\u62D4\u6700\u9AD8\u7684\u5EFA\u7BC9\u7269\u300C\u7389\u5C71\u6C23\u8C61\u7AD9\u300D\u3002"},{n:"\u963F\u91CC\u5C71\u68EE\u6797\u904A\u6A02\u5340",t:"mountain",lon:120.8,lat:23.51,i:"\u{1F682}",d:"\u5750\u68EE\u6797\u5C0F\u706B\u8ECA\u770B\u65E5\u51FA\u3001\u96F2\u6D77\u548C\u5343\u5E74\u795E\u6728\u3002"},{n:"\u592A\u9B6F\u95A3\u5CFD\u8C37",t:"mountain",lon:121.55,lat:24.17,i:"\u{1F3DE}\uFE0F",d:"\u7ACB\u9727\u6EAA\u628A\u5927\u7406\u77F3\u5207\u51FA\u5F88\u6DF1\u7684\u5CFD\u8C37\uFF0C\u662F\u592A\u9B6F\u95A3\u570B\u5BB6\u516C\u5712\u7684\u4EE3\u8868\u3002"},{n:"\u5408\u6B61\u5C71",t:"mountain",lon:121.27,lat:24.14,i:"\u2744\uFE0F",d:"\u51AC\u5929\u6709\u6A5F\u6703\u770B\u5230\u96EA\u666F\uFF08\u570B\u5C0F4\u4E0B\u300C\u56DB\u5B63\u666F\u9EDE\u300D\uFF1A\u51AC\uFF09\u3002"},{n:"\u96EA\u9738\u570B\u5BB6\u516C\u5712",t:"mountain",lon:121.2,lat:24.42,i:"\u{1F332}",d:"\u6709\u96EA\u5C71\u8207\u5927\u9738\u5C16\u5C71\uFF0C\u662F\u6AFB\u82B1\u9264\u543B\u9BAD\u7684\u5BB6\u3002"},{n:"\u65E5\u6708\u6F6D",t:"mountain",lon:120.915,lat:23.86,i:"\u{1F6F6}",d:"\u88AB\u7FA4\u5C71\u570D\u7E5E\u7684\u6E56\uFF0C\u662F\u81FA\u7063\u6700\u6709\u540D\u7684\u6E56\u6CCA\u4E4B\u4E00\uFF0C\u90B5\u65CF\u7684\u6545\u9109\u3002"},{n:"\u576A\u6797\u8336\u5712",t:"hill",lon:121.71,lat:24.94,i:"\u{1F375}",d:"\u4E18\u9675\u5761\u5730\u7A2E\u8336\uFF0C\u65C1\u908A\u662F\u4F9B\u61C9\u81FA\u5317\u7528\u6C34\u7684\u7FE1\u7FE0\u6C34\u5EAB\u3002"},{n:"\u82D7\u6817\u9285\u947C\u68AF\u7530",t:"hill",lon:120.79,lat:24.49,i:"\u{1F33E}",d:"\u628A\u4E18\u9675\u5C71\u5761\u958B\u6210\u4E00\u5C64\u4E00\u5C64\u7684\u7530\uFF08\u570B\u5C0F4\u4E0B\u8AB2\u672C\u8209\u4F8B\uFF09\u3002"},{n:"\u4E09\u7FA9\u6728\u96D5\u8857",t:"hill",lon:120.77,lat:24.4,i:"\u{1FAB5}",d:"\u82D7\u6817\u4E18\u9675\u4E0A\u7684\u5C0F\u93AE\uFF0C\u4EE5\u6728\u96D5\u805E\u540D\u3002"},{n:"\u6708\u4E16\u754C",t:"hill",lon:120.39,lat:22.92,i:"\u{1F319}",d:"\u6CE5\u5CA9\u4E18\u9675\u88AB\u96E8\u6C34\u6C96\u5237\uFF0C\u5F62\u6210\u5149\u79BF\u79BF\u3001\u50CF\u6708\u7403\u8868\u9762\u7684\u300C\u60E1\u5730\u300D\u3002"},{n:"\u6843\u5712\u57E4\u5858",t:"tableland",lon:121.12,lat:24.93,i:"\u{1F4A7}",d:"\u53F0\u5730\u5BB9\u6613\u7F3A\u6C34\uFF0C\u4EE5\u524D\u7684\u4EBA\u6316\u4E86\u5F88\u591A\u57E4\u5858\u5B58\u6C34\uFF0C\u88AB\u7A31\u70BA\u300C\u5343\u5858\u4E4B\u9109\u300D\u3002"},{n:"\u6797\u53E3\u53F0\u5730",t:"tableland",lon:121.37,lat:25.06,i:"\u{1F3D9}\uFE0F",d:"\u53F0\u5730\u4E0A\u5E73\u5766\uFF0C\u84CB\u4E86\u65B0\u5E02\u93AE\u3001\u91AB\u9662\u548C\u5B78\u6821\u3002"},{n:"\u81FA\u4E2D\u90FD\u6703\u516C\u5712",t:"tableland",lon:120.595,lat:24.21,i:"\u{1F333}",d:"\u5927\u809A\u53F0\u5730\u4E0A\u5E73\u5766\u7684\u5927\u516C\u5712\uFF1B\u5927\u809A\u53F0\u5730\u4E5F\u6709\u6A5F\u5834\u3001\u5927\u5B78\u8207\u5DE5\u696D\u5340\uFF08\u8AB2\u672C\uFF09\u3002"},{n:"\u516B\u5366\u5C71\u5927\u4F5B",t:"tableland",lon:120.553,lat:24.08,i:"\u{1F6D5}",d:"\u5728\u516B\u5366\u53F0\u5730\u908A\u7DE3\uFF0C\u53EF\u4EE5\u4FEF\u770B\u6574\u500B\u5F70\u5316\u5E73\u539F\u3002"},{n:"\u81FA\u5317 101",t:"basin",lon:121.565,lat:25.034,i:"\u{1F5FC}",d:"\u81FA\u5317\u76C6\u5730\u662F\u4EBA\u53E3\u6700\u5BC6\u96C6\u7684\u5730\u65B9\uFF0C101 \u5927\u6A13\u662F\u81FA\u5317\u7684\u5730\u6A19\u3002"},{n:"\u81FA\u4E2D\u516C\u5712",t:"basin",lon:120.685,lat:24.145,i:"\u{1F3EF}",d:"\u81FA\u4E2D\u76C6\u5730\u7684\u8001\u516C\u5712\uFF0C\u6E56\u5FC3\u4EAD\u662F\u81FA\u4E2D\u7684\u8C61\u5FB5\u3002"},{n:"\u81FA\u7063\u5730\u7406\u4E2D\u5FC3\u7891",t:"basin",lon:120.98,lat:23.975,i:"\u{1F4CD}",d:"\u5728\u57D4\u91CC\u76C6\u5730\uFF0C\u4EE3\u8868\u81FA\u7063\u672C\u5CF6\u7684\u5730\u7406\u4E2D\u5FC3\u3002"},{n:"\u6CF0\u6E90\u5E7D\u8C37",t:"basin",lon:121.3,lat:22.99,i:"\u{1F412}",d:"\u6D77\u5CB8\u5C71\u8108\u88E1\u7684\u5C0F\u76C6\u5730\uFF0C\u5E38\u53EF\u770B\u5230\u81FA\u7063\u737C\u7334\u3002"},{n:"\u70CF\u5C71\u982D\u6C34\u5EAB\u30FB\u5609\u5357\u5927\u5733",t:"plain",lon:120.39,lat:23.2,i:"\u{1F6B0}",d:"\u516B\u7530\u8207\u4E00\u8A2D\u8A08\u7684\u6C34\u5229\u5DE5\u7A0B\uFF0C\u8B93\u5609\u5357\u5E73\u539F\u6210\u70BA\u300C\u81FA\u7063\u7C73\u5009\u300D\u3002"},{n:"\u4E03\u80A1\u9E7D\u5C71",t:"plain",lon:120.09,lat:23.15,i:"\u{1F9C2}",d:"\u5609\u5357\u5E73\u539F\u6CBF\u6D77\u967D\u5149\u5145\u8DB3\u3001\u96E8\u5C11\uFF0C\u9069\u5408\u66EC\u9E7D\uFF1B\u65C1\u908A\u662F\u53F0\u6C5F\u570B\u5BB6\u516C\u5712\u3002"},{n:"\u51AC\u5C71\u6CB3\u89AA\u6C34\u516C\u5712",t:"plain",lon:121.8,lat:24.65,i:"\u{1F6A3}",d:"\u862D\u967D\u5E73\u539F\u4E0A\u7684\u6CB3\u5DDD\u516C\u5712\uFF0C\u6709\u570B\u969B\u7AE5\u73A9\u7BC0\u3002"},{n:"\u6C60\u4E0A\u4F2F\u6717\u5927\u9053",t:"plain",lon:121.23,lat:23.1,i:"\u{1F35A}",d:"\u82B1\u6771\u7E31\u8C37\u5E73\u539F\u7684\u7A3B\u7530\u5927\u9053\uFF0C\u6625\u5929\u9084\u6709\u6CB9\u83DC\u82B1\uFF08\u570B\u5C0F4\u4E0B\uFF1A\u6625\uFF09\u3002"},{n:"\u7389\u91CC\u820A\u9435\u6A4B\u81EA\u884C\u8ECA\u9053",t:"plain",lon:121.31,lat:23.33,i:"\u{1F6B2}",d:"\u820A\u9435\u6A4B\u88AB\u677F\u584A\u64E0\u58D3\u8B8A\u5F62\uFF0C\u6539\u6210\u81EA\u884C\u8ECA\u9053\uFF08\u8AB2\u672C\uFF1A\u677F\u584A\u4EA4\u754C\u5730\u6A19\uFF09\u3002"},{n:"\u5927\u9D6C\u7063",t:"plain",lon:120.47,lat:22.44,i:"\u26F5",d:"\u5C4F\u6771\u5E73\u539F\u6CBF\u6D77\u7684\u6F5F\u6E56\u3002"},{n:"\u967D\u660E\u5C71\u570B\u5BB6\u516C\u5712",t:"volcano",lon:121.56,lat:25.16,i:"\u{1F30B}",d:"\u5927\u5C6F\u706B\u5C71\u7FA4\uFF0C\u6709\u786B\u78FA\u5674\u6C23\u5B54\u3001\u6EAB\u6CC9\u548C\u6625\u5929\u7684\u82B1\u5B63\u3002"},{n:"\u91CE\u67F3\u5730\u8CEA\u516C\u5712",t:"coast",lon:121.69,lat:25.21,i:"\u{1F451}",d:"\u6D77\u6D6A\u548C\u98A8\u628A\u5CA9\u77F3\u96D5\u6210\u300C\u5973\u738B\u982D\u300D\u3002"},{n:"\u4E5D\u4EFD",t:"coast",lon:121.84,lat:25.11,i:"\u{1F3EE}",d:"\u5728\u57FA\u9686\u5C71\u7684\u5C71\u5761\u4E0A\uFF0C\u51AC\u5929\u5439\u6771\u5317\u5B63\u98A8\u6642\u5E38\u5E38\u4E0B\u96E8\uFF08\u8AB2\u672C\u8209\u4F8B\uFF09\u3002"},{n:"\u6E05\u6C34\u65B7\u5D16",t:"coast",lon:121.66,lat:24.21,i:"\u{1F9D7}",d:"\u5C71\u76F4\u63A5\u63D2\u9032\u592A\u5E73\u6D0B\uFF0C\u662F\u300C\u65B7\u5C64\u6D77\u5CB8\u300D\uFF08\u8AB2\u672C\uFF09\u3002"},{n:"\u58BE\u4E01\u570B\u5BB6\u516C\u5712\u30FB\u9D5D\u947E\u9F3B",t:"coast",lon:120.85,lat:21.9,i:"\u{1F5FC}",d:"\u81FA\u7063\u6700\u5357\u7AEF\uFF0C\u6709\u73CA\u745A\u7901\u6D77\u5CB8\uFF08\u8AB2\u672C\uFF09\u548C\u9D5D\u947E\u9F3B\u71C8\u5854\u3002"},{n:"\u5317\u9580\u6F5F\u6E56",t:"coast",lon:120.11,lat:23.27,i:"\u{1F9A9}",d:"\u6C99\u6D32\u570D\u51FA\u4F86\u7684\u6F5F\u6E56\uFF08\u8AB2\u672C\uFF1A\u6D77\u5CB8\u5730\u5F62\uFF09\u3002"},{n:"\u9F3B\u982D\u89D2",t:"coast",lon:121.92,lat:25.13,i:"\u{1F30A}",d:"\u5CAC\u89D2\u548C\u6D77\u7063\u4EA4\u932F\u7684\u300C\u5CAC\u7063\u6D77\u5CB8\u300D\uFF08\u8AB2\u672C\uFF09\u3002"},{n:"\u6F8E\u6E56\u8DE8\u6D77\u5927\u6A4B",t:"island",lon:119.57,lat:23.63,i:"\u{1F309}",d:"\u9023\u63A5\u767D\u6C99\u5CF6\u8207\u897F\u5DBC\uFF1B\u9644\u8FD1\u53EF\u770B\u5230\u67F1\u72C0\u7384\u6B66\u5CA9\u3002"},{n:"\u91D1\u9580\u8392\u5149\u6A13",t:"island",lon:118.32,lat:24.43,i:"\u{1F3EF}",d:"\u91D1\u9580\u7684\u5730\u6A19\uFF0C\u4E5F\u53EF\u4EE5\u53C3\u89C0\u53E4\u5BE7\u982D\u7B49\u6230\u5730\u53F2\u8E5F\u3002"},{n:"\u99AC\u7956\u82B9\u58C1\u805A\u843D",t:"island",lon:119.98,lat:26.225,i:"\u{1F3D8}\uFE0F",d:"\u6CBF\u8457\u5C71\u5761\u84CB\u7684\u82B1\u5D17\u77F3\u5C4B\uFF1B\u590F\u591C\u53EF\u80FD\u770B\u5230\u85CD\u773C\u6DDA\u3002"},{n:"\u862D\u5DBC\u62FC\u677F\u821F",t:"island",lon:121.51,lat:22.07,i:"\u{1F6F6}",d:"\u9054\u609F\u65CF\u7684\u62FC\u677F\u821F\u548C\u98DB\u9B5A\u796D\uFF08\u8AB2\u672C\uFF09\u3002"},{n:"\u7DA0\u5CF6\u671D\u65E5\u6EAB\u6CC9",t:"island",lon:121.505,lat:22.64,i:"\u2668\uFE0F",d:"\u4E16\u754C\u5C11\u898B\u7684\u6D77\u5E95\uFF08\u6D77\u6C34\uFF09\u6EAB\u6CC9\u3002"},{n:"\u6771\u6C99\u74B0\u7901\u570B\u5BB6\u516C\u5712",t:"island",lon:116.72,lat:20.7,i:"\u{1F420}",d:"\u81FA\u7063\u7B2C\u4E00\u5EA7\u6D77\u6D0B\u570B\u5BB6\u516C\u5712\uFF08\u6C11\u570B96\u5E74\u6210\u7ACB\uFF09\u3002"}],ar={N:{name:"\u5317\u90E8",color:"#5b8def",list:"\u57FA\u9686\u3001\u81FA\u5317\u3001\u65B0\u5317\u3001\u6843\u5712\u3001\u65B0\u7AF9\u7E23\u5E02\u3001\u5B9C\u862D"},C:{name:"\u4E2D\u90E8",color:"#3fbf7f",list:"\u82D7\u6817\u3001\u81FA\u4E2D\u3001\u5F70\u5316\u3001\u5357\u6295\u3001\u96F2\u6797"},S:{name:"\u5357\u90E8",color:"#f2994a",list:"\u5609\u7FA9\u7E23\u5E02\u3001\u81FA\u5357\u3001\u9AD8\u96C4\u3001\u5C4F\u6771\u3001\u6F8E\u6E56"},E:{name:"\u6771\u90E8",color:"#b07cd8",list:"\u82B1\u84EE\u3001\u81FA\u6771\uFF08\u542B\u7DA0\u5CF6\u3001\u862D\u5DBC\uFF09"},O:{name:"\u5176\u4ED6\u96E2\u5CF6",color:"#eb5f8a",list:"\u91D1\u9580\u3001\u9023\u6C5F\uFF08\u99AC\u7956\uFF09\u3001\u6771\u6C99\uFF08\u5C6C\u9AD8\u96C4\u5E02\u7BA1\u8F44\uFF09"}},Ss=[{id:"tamsui",name:"\u6DE1\u6C34",region:"N",lon:121.44,lat:25.17,src:"book",mm:[105.9,148,153.4,157.6,239.8,257.4,119.8,218.3,290.1,165.8,104.2,112.4]},{id:"kaohsiung",name:"\u9AD8\u96C4",region:"S",lon:120.31,lat:22.62,src:"book",mm:[19.1,17.7,32.3,68.4,202.2,416.2,377.2,512.4,224.5,53.4,25.6,19.2]},{id:"hengchun",name:"\u6046\u6625",region:"S",lon:120.74,lat:22,src:"book",mm:[21.8,23.2,16,35.2,146.6,350.7,391.3,533.4,320.3,125.3,58.3,29]},{id:"yushan",name:"\u7389\u5C71",region:"C",lon:120.959,lat:23.488,src:"book",mm:[83.7,67.2,94.8,201.2,423.6,459.6,434.2,516,297.2,145.1,98.3,81.6]},{id:"taipei",name:"\u81FA\u5317",region:"N",lon:121.51,lat:25.04,src:"cwa",mm:[95,171,181,172,234,326,246,323,365,147,89,79]},{id:"keelung",name:"\u57FA\u9686",region:"N",lon:121.74,lat:25.13,src:"cwa",mm:[331,397,321,242,285,301,148,207,368,396,412,345]},{id:"yilan",name:"\u5B9C\u862D",region:"N",lon:121.75,lat:24.76,src:"cwa",mm:[158,155,133,129,214,214,145,223,421,459,343,210]},{id:"taichung",name:"\u81FA\u4E2D",region:"C",lon:120.68,lat:24.15,src:"cwa",note:"\u5E74\u96E8\u91CF 1,763 mm \u70BA\u8AB2\u672C\u6578\u5B57",mm:[32,88,95,135,225,341,245,317,140,16,19,30]},{id:"hualien",name:"\u82B1\u84EE",region:"E",lon:121.61,lat:23.98,src:"cwa",note:"\u5E74\u96E8\u91CF 2,035 mm \u70BA\u8AB2\u672C\u6578\u5B57",mm:[66,99,89,89,172,191,147,241,319,299,128,58]},{id:"penghu",name:"\u6F8E\u6E56",region:"S",lon:119.56,lat:23.57,src:"cwa",mm:[21,46,59,95,124,170,129,182,96,26,21,20]}],Dc=[{name:"\u6625",months:[2,3,4],color:"#f7b6c8"},{name:"\u590F",months:[5,6,7],color:"#ffd27f"},{name:"\u79CB",months:[8,9,10],color:"#f0a868"},{name:"\u51AC",months:[11,0,1],color:"#a9c8ef"}],Jo=[{why:"\u6771\u5317\u5B63\u98A8",where:"\u5317\u90E8\u3001\u6771\u5317\u90E8",elem:"\u51AC\u5929\u5439\u300C\u6771\u5317\u5B63\u98A8\u300D\uFF0C\u98A8\u5F9E\u6D77\u4E0A\u5E36\u4F86\u6C34\u6C23\uFF0C\u5317\u90E8\u548C\u6771\u5317\u90E8\uFF08\u57FA\u9686\u3001\u5B9C\u862D\uFF09\u5E38\u5E38\u4E0B\u96E8\u53C8\u6EBC\u51B7\uFF1B\u5357\u90E8\u5F88\u5C11\u4E0B\u96E8\u3002",zones:[[121.3,24.4,122.1,25.35],[121.4,23.6,121.8,24.4]]},{why:"\u6771\u5317\u5B63\u98A8",where:"\u5317\u90E8\u3001\u6771\u5317\u90E8",elem:"\u9084\u662F\u6771\u5317\u5B63\u98A8\u7684\u5B63\u7BC0\uFF0C\u5317\u90E8\u3001\u6771\u5317\u90E8\u6EBC\u51B7\u591A\u96E8\uFF0C\u5357\u90E8\u4E7E\u71E5\u3002",zones:[[121.3,24.4,122.1,25.35]]},{why:"\u6625\u96E8",where:"\u5317\u90E8\u3001\u4E2D\u90E8",elem:"\u6625\u5929\u5929\u6C23\u4E0D\u7A69\u5B9A\uFF0C\u5317\u90E8\u5E38\u6709\u7DBF\u7DBF\u7D30\u96E8\uFF0C\u5357\u90E8\u4ECD\u7136\u6BD4\u8F03\u4E7E\u3002",zones:[[120.9,24.3,122,25.35],[120.6,23.8,121.3,24.4]]},{why:"\u6625\u96E8",where:"\u5317\u90E8\u3001\u4E2D\u90E8\u5C71\u5340",elem:"\u6625\u96E8\u8B8A\u591A\uFF0C\u5C71\u5340\u5E38\u6709\u5348\u5F8C\u7684\u96F2\u96E8\uFF1B\u5357\u90E8\u4E5F\u958B\u59CB\u8F49\u6EBC\u3002",zones:[[120.8,23.6,121.9,25.3]]},{why:"\u6885\u96E8\uFF08\u92D2\u9762\u96E8\uFF09",where:"\u5168\u81FA",elem:"5\u30016\u6708\u662F\u300C\u6885\u96E8\u5B63\u300D\uFF0C\u92D2\u9762\u505C\u5728\u81FA\u7063\u9644\u8FD1\uFF0C\u5168\u81FA\u90FD\u5BB9\u6613\u4E0B\u5927\u96E8\u3002",zones:[[120.1,22.4,121.9,25.3]]},{why:"\u6885\u96E8\uFF0B\u897F\u5357\u5B63\u98A8",where:"\u5168\u81FA\uFF0C\u4E2D\u5357\u90E8\u6700\u591A",elem:"\u6885\u96E8\u52A0\u4E0A\u897F\u5357\u5B63\u98A8\uFF0C\u4E2D\u5357\u90E8\u548C\u5C71\u5340\u96E8\u91CF\u5927\u589E\uFF0C\u9AD8\u96C4 6 \u6708\u7D04 416 \u6BEB\u7C73\u3002",zones:[[120.1,22,121.3,24.3],[120.6,22.5,121.5,24.5]]},{why:"\u98B1\u98A8\uFF0B\u5348\u5F8C\u96F7\u9663\u96E8",where:"\u5357\u90E8\u3001\u5C71\u5340",elem:"\u590F\u5929\u5F88\u71B1\uFF0C\u5348\u5F8C\u5E38\u6709\u96F7\u9663\u96E8\uFF08\u5C0D\u6D41\u96E8\uFF09\uFF1B\u98B1\u98A8\u4E5F\u5E36\u4F86\u5927\u91CF\u96E8\u6C34\uFF0C\u5357\u90E8\u548C\u5C71\u5340\u6700\u591A\u3002",zones:[[120.2,22,121.2,23.8],[120.7,23,121.4,24.4]]},{why:"\u98B1\u98A8\uFF0B\u897F\u5357\u5B63\u98A8",where:"\u5357\u90E8\u3001\u5C71\u5340",elem:"8 \u6708\u662F\u5F88\u591A\u5730\u65B9\u4E00\u5E74\u4E2D\u96E8\u6700\u591A\u7684\u6708\u4EFD\uFF08\u9AD8\u96C4\u7D04 512 \u6BEB\u7C73\u3001\u6046\u6625\u7D04 533 \u6BEB\u7C73\uFF09\uFF0C\u5E38\u6709\u98B1\u98A8\u3002",zones:[[120.2,21.9,121.2,23.6],[120.6,22.5,121.4,24.3]]},{why:"\u98B1\u98A8",where:"\u6771\u90E8\u3001\u5317\u90E8",elem:"\u79CB\u98B1\u5E38\u5E36\u4F86\u8C6A\u96E8\uFF0C\u6771\u90E8\u8207\u5317\u90E8\u96E8\u91CF\u591A\u3002",zones:[[121.3,22.6,121.9,24.6],[121.2,24.6,122,25.3]]},{why:"\u6771\u5317\u5B63\u98A8\uFF0B\u79CB\u98B1",where:"\u6771\u5317\u90E8\u3001\u6771\u90E8",elem:"\u6771\u5317\u5B63\u98A8\u958B\u59CB\u5439\uFF0C\u5B9C\u862D\u3001\u57FA\u9686\u3001\u82B1\u84EE\u591A\u96E8\uFF1B\u4E2D\u5357\u90E8\u9032\u5165\u4E7E\u5B63\uFF08\u81FA\u4E2D 10 \u6708\u53EA\u6709\u5341\u5E7E\u6BEB\u7C73\uFF09\u3002",zones:[[121.4,23.6,122,25.3]]},{why:"\u6771\u5317\u5B63\u98A8",where:"\u5317\u90E8\u3001\u6771\u5317\u90E8",elem:"\u6771\u5317\u5B63\u98A8\u8B8A\u5F37\uFF0C\u57FA\u9686\u662F\u5168\u81FA 11 \u6708\u6700\u6EBC\u7684\u5730\u65B9\u4E4B\u4E00\uFF1B\u897F\u5357\u90E8\u5F88\u4E7E\u71E5\u3002",zones:[[121.3,24.4,122.1,25.35]]},{why:"\u6771\u5317\u5B63\u98A8",where:"\u5317\u90E8\u3001\u6771\u5317\u90E8",elem:"\u51AC\u5929\u6771\u5317\u5B63\u98A8\uFF0C\u5317\u90E8\u6EBC\u51B7\uFF1B\u5357\u90E8\u6674\u6717\u5C11\u96E8\uFF0C\u6240\u4EE5\u5357\u90E8\u300C\u590F\u96E8\u51AC\u4E7E\u300D\u3002",zones:[[121.3,24.4,122.1,25.35],[121.4,23.8,121.8,24.4]]}],Zu=[{name:"\u5927\u96E8",mm:80},{name:"\u8C6A\u96E8",mm:200},{name:"\u5927\u8C6A\u96E8",mm:350},{name:"\u8D85\u5927\u8C6A\u96E8",mm:500}],$n=[{id:"amis",n:"\u963F\u7F8E\u65CF",c:"#e4572e",v:"\u99AC\u592A\u978D\u90E8\u843D",vlon:121.42,vlat:23.655,where:"\u82B1\u84EE\u3001\u81FA\u6771\u7684\u82B1\u6771\u7E31\u8C37\u8207\u6771\u6D77\u5CB8",zones:[[121.6,23.97,6],[121.57,23.902,6],[121.54,23.835,6],[121.51,23.767,6],[121.48,23.7,6],[121.45,23.625,6],[121.42,23.55,6],[121.39,23.475,6],[121.36,23.4,6],[121.33,23.337,6],[121.3,23.275,6],[121.27,23.212,6],[121.24,23.15,6],[121.218,23.087,6],[121.195,23.025,6],[121.172,22.962,6],[121.15,22.9,6],[121.135,22.83,6],[121.12,22.76,6],[121.56,23.75,5.5],[121.547,23.683,5.5],[121.533,23.617,5.5],[121.52,23.55,5.5],[121.5,23.483,5.5],[121.48,23.417,5.5],[121.46,23.35,5.5],[121.437,23.283,5.5],[121.413,23.217,5.5],[121.39,23.15,5.5],[121.345,23.065,5.5],[121.3,22.98,5.5],[121.26,22.915,5.5],[121.22,22.85,5.5]],elem:"\u4EBA\u53E3\u6700\u591A\u7684\u539F\u4F4F\u6C11\u65CF\uFF0C\u4F4F\u5728\u82B1\u6771\u7684\u5E73\u539F\u548C\u6D77\u908A\u3002\u590F\u5929\u8209\u884C\u300C\u8C50\u5E74\u796D\u300D\uFF0C\u5927\u5BB6\u624B\u727D\u624B\u5531\u6B4C\u8DF3\u821E\uFF0C\u611F\u8B1D\u7956\u9748\u5E36\u4F86\u8C50\u6536\u3002",junior:"\u4EBA\u53E3\u6700\u591A\u7684\u539F\u4F4F\u6C11\u65CF\uFF0C\u4E3B\u8981\u5206\u5E03\u65BC\u82B1\u6771\u7E31\u8C37\u8207\u6771\u6D77\u5CB8\u5E73\u539F\uFF0C\u4EE5\u8FB2\u8015\u3001\u6355\u9B5A\u7DAD\u751F\uFF1B\u50B3\u7D71\u70BA\u6BCD\u7CFB\u793E\u6703\uFF0C\u7537\u5B50\u4F9D\u5E74\u9F61\u7D44\u6210\u300C\u5E74\u9F61\u968E\u7D1A\u300D\u3002\u590F\u5B63\u7684\u8C50\u5E74\u796D\uFF08ilisin\uFF09\u662F\u6700\u91CD\u8981\u7684\u796D\u5178\u3002"},{id:"atayal",n:"\u6CF0\u96C5\u65CF",c:"#2a9d8f",v:"\u53F8\u99AC\u5EAB\u65AF\u90E8\u843D",vlon:121.33,vlat:24.58,where:"\u5317\u90E8\u5C71\u5340\uFF08\u65B0\u5317\u3001\u6843\u5712\u3001\u65B0\u7AF9\u3001\u82D7\u6817\u3001\u81FA\u4E2D\u3001\u5B9C\u862D\uFF09",zones:[[121.55,24.83,10],[121.37,24.72,13],[121.26,24.58,12],[121.08,24.42,10],[121.25,24.3,13],[121.55,24.55,14],[121.62,24.42,10]],elem:"\u5206\u5E03\u7BC4\u570D\u6700\u5EE3\uFF0C\u4F4F\u5728\u5317\u90E8\u7684\u5C71\u4E0A\u3002\u4EE5\u524D\u6709\u300C\u7D0B\u9762\u300D\u7684\u50B3\u7D71\uFF0C\u4E5F\u5F88\u6703\u7528\u82E7\u9EBB\u7E54\u5E03\u3002\u53F8\u99AC\u5EAB\u65AF\u662F\u6709\u540D\u7684\u300C\u4E0A\u5E1D\u7684\u90E8\u843D\u300D\uFF0C\u6709\u5DE8\u6728\u7FA4\u3002",junior:"\u5206\u5E03\u7BC4\u570D\u6700\u5EE3\u7684\u539F\u4F4F\u6C11\u65CF\uFF0C\u5C45\u4F4F\u65BC\u5317\u90E8\u5C71\u5340\u3002\u50B3\u7D71\u4E0A\u7537\u5B50\u6703\u72E9\u7375\u3001\u5973\u5B50\u64C5\u9577\u7E54\u5E03\uFF0C\u7D0B\u9762\u662F\u6210\u5E74\u8207\u69AE\u8B7D\u7684\u8C61\u5FB5\uFF1B\u90E8\u843D\u9075\u5B88\u7956\u8A13\u300CGaga\u300D\u3002\u53F8\u99AC\u5EAB\u65AF\u90E8\u843D\u4EE5\u5171\u540C\u7D93\u71DF\u3001\u5171\u4EAB\u6536\u76CA\u805E\u540D\u3002"},{id:"paiwan",n:"\u6392\u7063\u65CF",c:"#8338ec",v:"\u4E09\u5730\u9580\u90E8\u843D",vlon:120.654,vlat:22.715,where:"\u5C4F\u6771\u3001\u81FA\u6771\u5357\u90E8\u7684\u5927\u6B66\u5C71\u4E00\u5E36",zones:[[120.7,22.6,11],[120.74,22.42,11],[120.82,22.25,9],[120.9,22.42,8],[120.85,22.12,6]],elem:"\u4F4F\u5728\u5357\u90E8\u5927\u6B66\u5C71\u9644\u8FD1\uFF0C\u5F88\u6703\u505A\u7409\u7483\u73E0\u548C\u96D5\u523B\uFF0C\u5E38\u7528\u300C\u767E\u6B65\u86C7\u300D\u7576\u5716\u6848\u3002\u6BCF\u4E94\u5E74\u8209\u884C\u4E00\u6B21\u300C\u4E94\u5E74\u796D\u300D\u3002",junior:"\u5206\u5E03\u65BC\u5927\u6B66\u5C71\u5468\u570D\uFF0C\u6709\u982D\u76EE\uFF08\u8CB4\u65CF\uFF09\u8207\u5E73\u6C11\u7684\u968E\u5C64\u5236\u5EA6\uFF0C\u767E\u6B65\u86C7\u3001\u592A\u967D\u8207\u9676\u58FA\u662F\u91CD\u8981\u8C61\u5FB5\uFF1B\u64C5\u9577\u7409\u7483\u73E0\u3001\u6728\u96D5\u8207\u77F3\u677F\u5C4B\u5EFA\u7BC9\u3002\u4E94\u5E74\u796D\uFF08maljeveq\uFF09\u662F\u8FCE\u63A5\u7956\u9748\u7684\u91CD\u8981\u796D\u5178\u3002"},{id:"bunun",n:"\u5E03\u8FB2\u65CF",c:"#3a86ff",v:"\u6771\u57D4\u90E8\u843D",vlon:120.93,vlat:23.56,where:"\u4E2D\u592E\u5C71\u8108\u7684\u9AD8\u5C71\uFF08\u5357\u6295\u3001\u82B1\u84EE\u3001\u81FA\u6771\u3001\u9AD8\u96C4\uFF09",zones:[[121,23.62,12],[121.08,23.82,7],[121.15,23.38,12],[121.05,23.15,10],[120.88,23.22,8]],elem:"\u4F4F\u5F97\u6700\u9AD8\u7684\u539F\u4F4F\u6C11\u65CF\uFF0C\u4F4F\u5728\u4E2D\u592E\u5C71\u8108\u7684\u9AD8\u5C71\u4E0A\uFF0C\u5F88\u6703\u6253\u7375\u3002\u5927\u5BB6\u4E00\u8D77\u5531\u7684\u300C\u516B\u90E8\u5408\u97F3\u300D\u975E\u5E38\u6709\u540D\u3002",junior:"\u5C45\u4F4F\u6D77\u62D4\u6700\u9AD8\u3001\u6D3B\u52D5\u7BC4\u570D\u6700\u5EE3\u7684\u9AD8\u5C71\u6C11\u65CF\uFF0C\u4EE5\u72E9\u7375\u8207\u5C0F\u7C73\u8015\u4F5C\u70BA\u4E3B\uFF1B\u4EE5\u7236\u7CFB\u6C0F\u65CF\u7D44\u7E54\u793E\u6703\u3002\u7948\u79B1\u5C0F\u7C73\u8C50\u6536\u7684\u300C\u516B\u90E8\u5408\u97F3\u300D\uFF08pasibutbut\uFF09\u4EAB\u8B7D\u570B\u969B\uFF0C\u6253\u8033\u796D\u662F\u91CD\u8981\u7684\u72E9\u7375\u796D\u5100\u3002"},{id:"puyuma",n:"\u5351\u5357\u65CF",c:"#ff006e",v:"\u5357\u738B\u90E8\u843D\uFF08\u666E\u60A0\u746A\uFF09",vlon:121.12,vlat:22.77,where:"\u81FA\u6771\u5E73\u539F\uFF08\u81FA\u6771\u5E02\u3001\u5351\u5357\u9109\uFF09",zones:[[121.1,22.78,6],[121.06,22.73,4]],elem:"\u4F4F\u5728\u81FA\u6771\u5E73\u539F\u3002\u7537\u5B69\u5B50\u8981\u9032\u300C\u5C11\u5E74\u6703\u6240\u300D\u63A5\u53D7\u8A13\u7DF4\uFF0C\u51AC\u5929\u6709\u300C\u7334\u796D\u300D\u548C\u300C\u5927\u7375\u796D\u300D\u3002",junior:"\u5206\u5E03\u65BC\u81FA\u6771\u5E73\u539F\uFF0C\u4EE5\u56B4\u683C\u7684\u6703\u6240\u5236\u5EA6\uFF08\u5C11\u5E74\u6703\u6240\u3001\u9752\u5E74\u6703\u6240\uFF09\u8A13\u7DF4\u7537\u5B50\uFF1B\u5E74\u5E95\u7684\u7334\u796D\u8207\u5927\u7375\u796D\u662F\u6210\u5E74\u79AE\u7684\u91CD\u8981\u5100\u5F0F\u3002\u50B3\u7D71\u4E0A\u66FE\u662F\u81FA\u6771\u5E73\u539F\u4E0A\u5F37\u76DB\u7684\u65CF\u7FA4\u3002"},{id:"rukai",n:"\u9B6F\u51F1\u65CF",c:"#fb8500",v:"\u9727\u81FA\u90E8\u843D",vlon:120.73,vlat:22.745,where:"\u5C4F\u6771\u9727\u81FA\u3001\u9AD8\u96C4\u8302\u6797\u3001\u81FA\u6771\u6771\u8208",zones:[[120.74,22.76,6],[120.66,22.89,5],[121.02,22.8,3]],elem:"\u4F4F\u5728\u5357\u90E8\u5C71\u5340\uFF0C\u6703\u7528\u77F3\u677F\u84CB\u623F\u5B50\uFF08\u77F3\u677F\u5C4B\uFF09\u3002\u300C\u767E\u5408\u82B1\u300D\u662F\u4ED6\u5011\u7684\u69AE\u8000\uFF0C\u53EA\u6709\u8868\u73FE\u597D\u7684\u4EBA\u624D\u80FD\u6234\u3002",junior:"\u5206\u5E03\u65BC\u5C4F\u6771\u9727\u81FA\u3001\u9AD8\u96C4\u8302\u6797\u8207\u81FA\u6771\u6771\u8208\uFF0C\u6709\u8CB4\u65CF\u8207\u5E73\u6C11\u7684\u968E\u5C64\u5236\u5EA6\uFF1B\u4EE5\u9801\u5CA9\u77F3\u677F\u5EFA\u9020\u77F3\u677F\u5C4B\uFF08\u5982\u597D\u8336\u90E8\u843D\uFF09\u3002\u767E\u5408\u82B1\u8C61\u5FB5\u7537\u5B50\u7684\u52C7\u731B\u8207\u5973\u5B50\u7684\u8C9E\u6F54\uFF0C\u9808\u7D93\u8A8D\u53EF\u624D\u80FD\u914D\u6234\u3002"},{id:"tsou",n:"\u9112\u65CF",c:"#06d6a0",v:"\u9054\u90A6\u90E8\u843D",vlon:120.75,vlat:23.46,where:"\u5609\u7FA9\u963F\u91CC\u5C71",zones:[[120.76,23.45,8],[120.82,23.38,5]],elem:"\u4F4F\u5728\u963F\u91CC\u5C71\uFF0C\u90E8\u843D\u88E1\u6709\u7537\u5B50\u805A\u6703\u7684\u300C\u5EAB\u5DF4\u300D\uFF08\u7537\u5B50\u6703\u6240\uFF09\u3002\u300C\u6230\u796D\u300D\u662F\u5F88\u91CD\u8981\u7684\u796D\u5178\u3002",junior:"\u4E3B\u8981\u5206\u5E03\u65BC\u5609\u7FA9\u963F\u91CC\u5C71\uFF0C\u4EE5\u9054\u90A6\u3001\u7279\u5BCC\u91CE\u5169\u5927\u793E\u70BA\u4E2D\u5FC3\uFF1B\u7537\u5B50\u6703\u6240\u300C\u5EAB\u5DF4\u300D\uFF08kuba\uFF09\u662F\u90E8\u843D\u653F\u6CBB\u8207\u796D\u5100\u4E2D\u5FC3\u3002\u6230\u796D\uFF08mayasvi\uFF09\u7528\u4F86\u7948\u6C42\u6230\u795E\u5E87\u4F51\u3001\u51DD\u805A\u90E8\u843D\u3002"},{id:"saisiyat",n:"\u8CFD\u590F\u65CF",c:"#8d99ae",v:"\u5411\u5929\u6E56\u90E8\u843D",vlon:120.985,vlat:24.56,where:"\u65B0\u7AF9\u4E94\u5CF0\u3001\u82D7\u6817\u5357\u5E84",zones:[[120.99,24.57,6.5],[121.06,24.62,6],[121.03,24.6,6]],elem:"\u4F4F\u5728\u65B0\u7AF9\u548C\u82D7\u6817\u7684\u5C71\u5340\uFF0C\u6BCF\u5169\u5E74\u8209\u884C\u4E00\u6B21\u300C\u77EE\u9748\u796D\u300D\uFF0C\u7D00\u5FF5\u50B3\u8AAA\u4E2D\u7684\u77EE\u4EBA\u3002",junior:"\u5206\u5E03\u65BC\u65B0\u7AF9\u4E94\u5CF0\u8207\u82D7\u6817\u5357\u5E84\uFF0C\u4EBA\u53E3\u8F03\u5C11\uFF0C\u4EE5\u7236\u7CFB\u6C0F\u65CF\u7D44\u7E54\uFF0C\u5404\u59D3\u6C0F\u8CA0\u8CAC\u4E0D\u540C\u796D\u5100\u3002\u6BCF\u5169\u5E74\u8209\u884C\u7684\u77EE\u9748\u796D\uFF08pas-taai\uFF09\u6E90\u81EA\u8207\u77EE\u4EBA\u7684\u50B3\u8AAA\uFF0C\u662F\u91CD\u8981\u7684\u6B72\u6642\u796D\u5100\u3002"},{id:"yami",n:"\u96C5\u7F8E\u65CF\uFF08\u9054\u609F\u65CF\uFF09",c:"#118ab2",v:"\u91CE\u9280\u90E8\u843D",vlon:121.585,vlat:22.035,where:"\u862D\u5DBC",island:"lanyu",zones:[],elem:"\u4F4F\u5728\u862D\u5DBC\uFF0C\u662F\u552F\u4E00\u4F4F\u5728\u6D77\u5CF6\u4E0A\u7684\u539F\u4F4F\u6C11\u65CF\u3002\u6703\u505A\u6F02\u4EAE\u7684\u300C\u62FC\u677F\u821F\u300D\uFF0C\u6625\u5929\u6709\u300C\u98DB\u9B5A\u796D\u300D\uFF0C\u9084\u6709\u53EF\u4EE5\u9632\u98B1\u98A8\u7684\u300C\u5730\u4E0B\u5C4B\u300D\u3002",junior:"\u5C45\u4F4F\u65BC\u862D\u5DBC\uFF0C\u662F\u81FA\u7063\u552F\u4E00\u7684\u6D77\u6D0B\u6C11\u65CF\uFF0C\u751F\u6D3B\u4F9D\u5FAA\u98DB\u9B5A\u5B63\u7BC0\u5B89\u6392\uFF1B\u62FC\u677F\u821F\u3001\u98DB\u9B5A\u796D\u8207\u9632\u98B1\u7684\u534A\u7A74\u5C45\u5730\u4E0B\u5C4B\uFF08\u91CE\u9280\u90E8\u843D\u4FDD\u5B58\u5B8C\u6574\uFF09\u90FD\u5C55\u73FE\u9069\u61C9\u6D77\u5CF6\u74B0\u5883\u7684\u667A\u6167\u3002"},{id:"thao",n:"\u90B5\u65CF",c:"#ffbe0b",v:"\u4F0A\u9054\u90B5\u90E8\u843D",vlon:120.93,vlat:23.85,where:"\u5357\u6295\u65E5\u6708\u6F6D",zones:[[120.925,23.855,3]],elem:"\u4F4F\u5728\u65E5\u6708\u6F6D\u65C1\u908A\uFF0C\u662F\u4EBA\u6578\u5F88\u5C11\u7684\u539F\u4F4F\u6C11\u65CF\u3002\u7528\u6728\u6775\u6417\u7C73\u6642\u767C\u51FA\u7684\u300C\u6775\u97F3\u300D\u5F88\u597D\u807D\u3002",junior:"\u5C45\u4F4F\u65BC\u65E5\u6708\u6F6D\u5468\u908A\uFF0C\u662F\u4EBA\u53E3\u6700\u5C11\u7684\u65CF\u7FA4\u4E4B\u4E00\uFF1B\u4EE5\u6F01\u7375\u3001\u8FB2\u8015\u70BA\u751F\uFF0C\u300C\u7956\u9748\u7C43\u300D\u662F\u4FE1\u4EF0\u4E2D\u5FC3\u3002\u65E5\u6708\u6F6D\u7684\u6775\u97F3\u8207\u50B3\u8AAA\u300C\u767D\u9E7F\u300D\u90FD\u8207\u90B5\u65CF\u6709\u95DC\u3002"},{id:"kavalan",n:"\u5676\u746A\u862D\u65CF",c:"#9b5de5",v:"\u65B0\u793E\u90E8\u843D",vlon:121.522,vlat:23.79,where:"\u539F\u5C45\u5B9C\u862D\u5E73\u539F\uFF0C\u5F8C\u9077\u81F3\u82B1\u84EE\u65B0\u793E\u3001\u8C50\u6FF1",zones:[[121.52,23.78,4]],elem:"\u4EE5\u524D\u4F4F\u5728\u5B9C\u862D\u5E73\u539F\uFF0C\u5F8C\u4F86\u642C\u5230\u82B1\u84EE\u6D77\u908A\u3002\u6703\u7528\u9999\u8549\u6A39\u7684\u7E96\u7DAD\u7E54\u5E03\u3002",junior:"\u539F\u5C45\u5B9C\u862D\u862D\u967D\u5E73\u539F\uFF0C\u6E05\u4EE3\u6F22\u4EBA\u79FB\u5165\u5F8C\u591A\u6578\u5357\u9077\u81F3\u82B1\u84EE\u65B0\u793E\u3001\u8C50\u6FF1\u4E00\u5E36\uFF1B\u4EE5\u9999\u8549\u7D72\u7E54\u5E03\u805E\u540D\u3002\u6C11\u570B 91 \u5E74\u6B63\u540D\u70BA\u7B2C 11 \u65CF\u3002"},{id:"truku",n:"\u592A\u9B6F\u95A3\u65CF",c:"#d62828",v:"\u5BCC\u4E16\u90E8\u843D",vlon:121.61,vlat:24.15,where:"\u82B1\u84EE\u79C0\u6797\u3001\u842C\u69AE\u3001\u5353\u6EAA",zones:[[121.55,24.15,10],[121.42,23.82,7],[121.45,23.98,6]],elem:"\u4F4F\u5728\u82B1\u84EE\u7684\u592A\u9B6F\u95A3\u4E00\u5E36\uFF0C\u4E5F\u6709\u7D0B\u9762\u7684\u50B3\u7D71\uFF0C\u5F88\u6703\u7E54\u5E03\u548C\u6253\u7375\u3002",junior:"\u4E3B\u8981\u5206\u5E03\u65BC\u82B1\u84EE\u79C0\u6797\u3001\u842C\u69AE\uFF0C\u8207\u8CFD\u5FB7\u514B\u65CF\u540C\u6E90\uFF0C\u5F9E\u5357\u6295\u9077\u5F99\u5230\u6771\u90E8\uFF1B\u50B3\u7D71\u6709\u7D0B\u9762\u3001\u72E9\u7375\u8207\u7E54\u5E03\u6587\u5316\u3002\u6C11\u570B 93 \u5E74\u6B63\u540D\u70BA\u7B2C 12 \u65CF\uFF0C\u300C\u592A\u9B6F\u95A3\u570B\u5BB6\u516C\u5712\u300D\u5373\u4EE5\u5176\u547D\u540D\u3002"},{id:"sakizaya",n:"\u6492\u5947\u840A\u96C5\u65CF",c:"#f15bb5",v:"\u6492\u56FA\u5152\u90E8\u843D",vlon:121.6,vlat:23.995,where:"\u82B1\u84EE\u5E02\u3001\u58FD\u8C50\u3001\u745E\u7A57",zones:[[121.59,23.97,4]],elem:"\u4F4F\u5728\u82B1\u84EE\u5E02\u9644\u8FD1\u3002\u4ED6\u5011\u8209\u884C\u300C\u706B\u795E\u796D\u300D\uFF0C\u7D00\u5FF5\u4EE5\u524D\u7684\u6B77\u53F2\u3002",junior:"\u5206\u5E03\u65BC\u82B1\u84EE\u5947\u840A\u5E73\u539F\u4E00\u5E36\uFF0C\u6E05\u4EE3\u300C\u52A0\u79AE\u5B9B\u4E8B\u4EF6\u300D\u5F8C\u65CF\u4EBA\u96B1\u8EAB\u65BC\u963F\u7F8E\u65CF\u4E2D\uFF1B\u6C11\u570B 96 \u5E74\u6B63\u540D\u70BA\u7B2C 13 \u65CF\uFF0C\u706B\u795E\u796D\uFF08palamal\uFF09\u7D00\u5FF5\u5148\u4EBA\u3002"},{id:"seediq",n:"\u8CFD\u5FB7\u514B\u65CF",c:"#6a4c93",v:"\u9727\u793E\uFF08\u6E05\u6D41\u90E8\u843D\uFF09",vlon:121.13,vlat:24.03,where:"\u5357\u6295\u4EC1\u611B\uFF08\u9727\u793E\u4E00\u5E36\uFF09\u3001\u82B1\u84EE",zones:[[121.15,24.03,8],[121.2,24.12,5]],elem:"\u4F4F\u5728\u5357\u6295\u9727\u793E\u4E00\u5E36\uFF0C\u6709\u7D0B\u9762\u50B3\u7D71\u3002\u767C\u751F\u904E\u6709\u540D\u7684\u300C\u9727\u793E\u4E8B\u4EF6\u300D\uFF0C\u9818\u8896\u662F\u83AB\u90A3\u9B6F\u9053\u3002",junior:"\u5206\u5E03\u65BC\u5357\u6295\u4EC1\u611B\u9109\u9727\u793E\u4E00\u5E36\uFF0C\u4FE1\u5B88\u7956\u8A13\u300CGaya\u300D\uFF1B\u65E5\u6CBB\u6642\u671F\u83AB\u90A3\u9B6F\u9053\u9818\u5C0E\u65CF\u4EBA\u767C\u52D5\u300C\u9727\u793E\u4E8B\u4EF6\u300D\uFF08\u6C11\u570B 19 \u5E74\uFF09\u3002\u6C11\u570B 97 \u5E74\u6B63\u540D\u70BA\u7B2C 14 \u65CF\u3002"},{id:"hlaalua",n:"\u62C9\u963F\u9B6F\u54C7\u65CF",c:"#43aa8b",v:"\u9AD8\u4E2D\u90E8\u843D",vlon:120.76,vlat:23.15,where:"\u9AD8\u96C4\u6843\u6E90",zones:[[120.76,23.15,4]],elem:"\u4F4F\u5728\u9AD8\u96C4\u6843\u6E90\uFF0C\u4EBA\u6578\u5F88\u5C11\u3002\u6709\u4E00\u500B\u7279\u5225\u7684\u300C\u8056\u8C9D\u796D\u300D\uFF0C\u7528\u8C9D\u6BBC\u7948\u6C42\u5E73\u5B89\u3002",junior:"\u5206\u5E03\u65BC\u9AD8\u96C4\u6843\u6E90\u5340\uFF0C\u4EBA\u53E3\u5F88\u5C11\uFF1B\u6700\u91CD\u8981\u7684\u796D\u5178\u662F\u796D\u62DC\u8056\u8C9D\u7684\u300C\u8056\u8C9D\u796D\u300D\uFF08miatungusu\uFF09\u3002\u6C11\u570B 103 \u5E74\u6B63\u540D\u70BA\u7B2C 15 \u65CF\u3002"},{id:"kanakanavu",n:"\u5361\u90A3\u5361\u90A3\u5BCC\u65CF",c:"#577590",v:"\u9054\u5361\u52AA\u74E6\u90E8\u843D",vlon:120.7,vlat:23.27,where:"\u9AD8\u96C4\u90A3\u746A\u590F",zones:[[120.7,23.27,4]],elem:"\u4F4F\u5728\u9AD8\u96C4\u90A3\u746A\u590F\uFF0C\u4EBA\u6578\u5F88\u5C11\u3002\u6703\u8209\u884C\u300C\u7C73\u8CA2\u796D\u300D\u611F\u8B1D\u5C0F\u7C73\u8C50\u6536\uFF0C\u4E5F\u6709\u4FDD\u8B77\u6CB3\u5DDD\u7684\u300C\u6CB3\u796D\u300D\u3002",junior:"\u5206\u5E03\u65BC\u9AD8\u96C4\u90A3\u746A\u590F\u6960\u6893\u4ED9\u6EAA\u6D41\u57DF\uFF0C\u4EBA\u53E3\u5F88\u5C11\uFF1B\u91CD\u8981\u796D\u5178\u6709\u5C0F\u7C73\u6536\u7A6B\u7684\u300C\u7C73\u8CA2\u796D\u300D\u8207\u7DAD\u8B77\u6F01\u6488\u8CC7\u6E90\u7684\u300C\u6CB3\u796D\u300D\u3002\u6C11\u570B 103 \u5E74\u6B63\u540D\u70BA\u7B2C 16 \u65CF\u3002"},{id:"siraya",n:"\u897F\u62C9\u96C5\u65CF",c:"#a0522d",v:"\u5409\u8C9D\u800D\u90E8\u843D",vlon:120.4,vlat:23.3,where:"\u50B3\u7D71\u5206\u5E03\uFF1A\u5609\u5357\u5E73\u539F\u5230\u6046\u6625\u534A\u5CF6\uFF1B\u73FE\u4ECA\uFF1A\u81FA\u5357\u3001\u9AD8\u96C4\u3001\u5C4F\u6771\u3001\u82B1\u84EE\u3001\u81FA\u6771",isNew:!0,plains:!0,zones:[[120.27,23.2,13],[120.38,22.98,10],[120.42,23.32,6],[120.2,23.42,9],[120.4,22.82,8],[120.48,22.7,8],[120.52,22.58,8],[120.58,22.45,7],[120.66,22.3,6],[120.7,22.17,5],[120.74,22.06,5]],elem:"2026 \u5E74 7 \u6708\u6210\u70BA\u81FA\u7063\u7B2C 17 \u500B\u539F\u4F4F\u6C11\u65CF\uFF01\u4EE5\u524D\u4F4F\u5728\u5609\u5357\u5E73\u539F\uFF0C\u662F\u6700\u65E9\u548C\u8377\u862D\u4EBA\u3001\u6F22\u4EBA\u63A5\u89F8\u7684\u539F\u4F4F\u6C11\u65CF\u3002\u5409\u8C9D\u800D\u90E8\u843D\u6BCF\u5E74\u8209\u884C\u300C\u591C\u796D\u300D\uFF0C\u796D\u62DC\u7956\u9748\u300C\u963F\u7ACB\u7956\u300D\u3002",junior:"\u5E73\u57D4\u539F\u4F4F\u6C11\u65CF\u7FA4\uFF0C\u50B3\u7D71\u5206\u5E03\u65BC\u5609\u5357\u5E73\u539F\u81F3\u6046\u6625\u534A\u5CF6\uFF1B17 \u4E16\u7D00\u6700\u65E9\u8207\u8377\u862D\u4EBA\u63A5\u89F8\uFF08\u65B0\u6E2F\u6587\u66F8\u4EE5\u7F85\u99AC\u5B57\u66F8\u5BEB\u897F\u62C9\u96C5\u8A9E\uFF09\uFF0C\u5F8C\u56E0\u6F22\u4EBA\u79FB\u58BE\u8207\u540C\u5316\uFF0C\u65CF\u4EBA\u904D\u5E03\u81FA\u5357\u3001\u9AD8\u96C4\u3001\u5C4F\u6771\u3001\u82B1\u84EE\u3001\u81FA\u6771\u3002\u4FE1\u4EF0\u7956\u9748\u300C\u963F\u7ACB\u7956\u300D\uFF0C\u4EE5\u300C\u516C\u5EE8\u300D\u70BA\u796D\u7940\u5834\u6240\uFF0C\u5409\u8C9D\u800D\u591C\u796D\u8207\u300C\u727D\u66F2\u300D\u70BA\u4EE3\u8868\u3002\u4F9D\u61B2\u6CD5\u6CD5\u5EAD 111 \u5E74\u61B2\u5224\u5B57\u7B2C 17 \u865F\u5224\u6C7A\u8207\u300A\u5E73\u57D4\u539F\u4F4F\u6C11\u65CF\u7FA4\u8EAB\u5206\u6CD5\u300B\uFF0C\u884C\u653F\u9662\u65BC 2026 \u5E74 7 \u6708 30 \u65E5\u6838\u5B9A\u70BA\u7B2C 17 \u65CF\uFF0C\u662F\u7B2C\u4E00\u500B\u5B8C\u6210\u6838\u5B9A\u7684\u5E73\u57D4\u65CF\u7FA4\u3002"}],An={total:"\u7D04 466.9 \u842C\u4EBA\uFF084,669,192 \u4EBA\uFF09\uFF0C\u5360\u81FA\u7063\u7E3D\u4EBA\u53E3\u7D04 19.8%",source:"\u5BA2\u5BB6\u59D4\u54E1\u6703\u300A110 \u5E74\u5168\u570B\u5BA2\u5BB6\u4EBA\u53E3\u66A8\u8A9E\u8A00\u57FA\u790E\u8CC7\u6599\u8ABF\u67E5\u7814\u7A76\u300B",top5:{\u65B0\u7AF9\u7E23:67.8,\u82D7\u6817\u7E23:62.5,\u6843\u5712\u5E02:39.9,\u82B1\u84EE\u7E23:34.2,\u65B0\u7AF9\u5E02:30.3},areas:[{n:"\u6843\u7AF9\u82D7\u5BA2\u5BB6",lon:121.05,lat:24.68,d:"\u6843\u5712\u3001\u65B0\u7AF9\u3001\u82D7\u6817\u662F\u5BA2\u5BB6\u4EBA\u6700\u96C6\u4E2D\u7684\u5730\u65B9\uFF08\u65B0\u7AF9\u7E23\u3001\u82D7\u6817\u7E23\u8D85\u904E\u516D\u6210\u662F\u5BA2\u5BB6\u4EBA\uFF09\u3002"},{n:"\u516D\u5806\u5BA2\u5BB6\uFF08\u9AD8\u5C4F\uFF09",lon:120.55,lat:22.7,d:"\u9AD8\u96C4\u7F8E\u6FC3\u8207\u5C4F\u6771\u5167\u57D4\u3001\u7AF9\u7530\u3001\u842C\u5DD2\u7B49\u5730\uFF0C\u6E05\u4EE3\u7D44\u6210\u300C\u516D\u5806\u300D\u5718\u7DF4\u4FDD\u885B\u5BB6\u5712\uFF0C\u81F3\u4ECA\u4FDD\u7559\u6FC3\u539A\u7684\u5BA2\u5BB6\u6587\u5316\uFF08\u5982\u7F8E\u6FC3\u7D19\u5098\uFF09\u3002"},{n:"\u82B1\u6771\u5BA2\u5BB6",lon:121.4,lat:23.6,d:"\u65E5\u6CBB\u6642\u671F\u4EE5\u5F8C\uFF0C\u8A31\u591A\u6843\u7AF9\u82D7\u5BA2\u5BB6\u4EBA\u79FB\u5C45\u82B1\u6771\u7E31\u8C37\u958B\u58BE\uFF0C\u82B1\u84EE\u7E23\u5BA2\u5BB6\u4EBA\u53E3\u6BD4\u7387\u7D04 34.2%\u3002"},{n:"\u81FA\u4E2D\u6771\u52E2\u5BA2\u5BB6",lon:120.83,lat:24.26,d:"\u81FA\u4E2D\u6771\u52E2\u3001\u77F3\u5CA1\u3001\u65B0\u793E\u4E00\u5E36\u4E5F\u662F\u5BA2\u5BB6\u805A\u843D\uFF08\u5927\u57D4\u8154\u5BA2\u8A9E\uFF09\u3002"}],elem:"\u5BA2\u5BB6\u4EBA\u7D04\u5360\u81FA\u7063\u4EBA\u53E3\u7684\u4E94\u5206\u4E4B\u4E00\u3002\u5BA2\u5BB6\u6587\u5316\u6709\u597D\u5403\u7684\u64C2\u8336\u3001\u7C84\u689D\uFF0C\u597D\u770B\u7684\u85CD\u886B\u3001\u6CB9\u7D19\u5098\uFF0C\u6BCF\u5E74\u6625\u5929\u300C\u5BA2\u5BB6\u6850\u82B1\u796D\u300D\u6EFF\u5C71\u90FD\u662F\u767D\u8272\u7684\u6CB9\u6850\u82B1\u3002\u5BA2\u5BB6\u4EBA\u5F88\u91CD\u8996\u300C\u4F2F\u516C\u300D\uFF08\u571F\u5730\u516C\uFF09\u548C\u300C\u7FA9\u6C11\u796D\u300D\u3002",junior:"\u4F9D\u300A\u5BA2\u5BB6\u57FA\u672C\u6CD5\u300B\u5B9A\u7FA9\uFF08\u5177\u5BA2\u5BB6\u8840\u7DE3\u6216\u6DF5\u6E90\u4E14\u81EA\u6211\u8A8D\u540C\uFF09\uFF0C\u5168\u81FA\u5BA2\u5BB6\u4EBA\u53E3\u7D04 466.9 \u842C\u4EBA\u3001\u5360 19.8%\u3002\u4E3B\u8981\u5206\u5E03\u65BC\u6843\u7AF9\u82D7\u4E18\u9675\u3001\u9AD8\u5C4F\u516D\u5806\u3001\u82B1\u6771\u7E31\u8C37\u53CA\u81FA\u4E2D\u6771\u52E2\u4E00\u5E36\uFF1B\u65E9\u671F\u591A\u5C45\u4F4F\u65BC\u4E18\u9675\u3001\u53F0\u5730\uFF0C\u767C\u5C55\u51FA\u52E4\u5109\u3001\u6674\u8015\u96E8\u8B80\u7684\u6587\u5316\uFF0C\u4EE5\u53CA\u4F2F\u516C\u4FE1\u4EF0\u3001\u7FA9\u6C11\u796D\u3001\u85CD\u886B\u3001\u64C2\u8336\u8207\u5BA2\u8A9E\uFF08\u56DB\u7E23\u3001\u6D77\u9678\u3001\u5927\u57D4\u3001\u9952\u5E73\u3001\u8A54\u5B89\u7B49\u8154\u8ABF\uFF09\u3002"};var Fi={\u9023\u6C5F\u7E23:[[[119.985,25.971],[119.989,25.968],[119.979,25.956],[119.961,25.95],[119.972,25.967],[119.985,25.971]],[[119.945,25.982],[119.948,25.978],[119.935,25.968],[119.924,25.979],[119.945,25.982]],[[119.917,26.175],[119.928,26.172],[119.924,26.162],[119.936,26.154],[119.942,26.159],[119.94,26.166],[119.965,26.167],[119.957,26.152],[119.95,26.154],[119.942,26.143],[119.934,26.146],[119.925,26.138],[119.909,26.145],[119.918,26.158],[119.913,26.16],[119.918,26.165],[119.917,26.175]],[[119.996,26.238],[120.006,26.234],[120.003,26.224],[120.015,26.227],[120.012,26.214],[120.003,26.223],[119.991,26.215],[119.976,26.215],[119.971,26.199],[119.976,26.193],[119.966,26.194],[119.967,26.221],[119.983,26.225],[119.996,26.238]],[[119.99,26.282],[119.99,26.27],[119.981,26.267],[119.982,26.278],[119.99,26.282]],[[120.48,26.383],[120.482,26.371],[120.491,26.371],[120.5,26.378],[120.499,26.372],[120.507,26.373],[120.511,26.365],[120.501,26.369],[120.493,26.357],[120.484,26.356],[120.485,26.369],[120.478,26.368],[120.477,26.379],[120.469,26.371],[120.474,26.384],[120.48,26.383]]],\u5B9C\u862D\u7E23:[[[121.96,24.845],[121.963,24.836],[121.948,24.835],[121.934,24.846],[121.943,24.845],[121.95,24.852],[121.96,24.845]],[[121.966,24.983],[121.926,24.969],[121.905,24.94],[121.889,24.937],[121.885,24.918],[121.851,24.89],[121.827,24.842],[121.818,24.765],[121.826,24.733],[121.84,24.716],[121.842,24.656],[121.859,24.617],[121.886,24.601],[121.873,24.597],[121.879,24.591],[121.872,24.584],[121.88,24.58],[121.869,24.573],[121.873,24.531],[121.843,24.521],[121.839,24.512],[121.84,24.498],[121.85,24.495],[121.851,24.485],[121.862,24.481],[121.821,24.462],[121.816,24.447],[121.802,24.434],[121.791,24.408],[121.787,24.372],[121.772,24.338],[121.773,24.314],[121.688,24.334],[121.686,24.341],[121.676,24.337],[121.651,24.36],[121.649,24.349],[121.631,24.371],[121.621,24.363],[121.627,24.35],[121.635,24.348],[121.633,24.335],[121.619,24.345],[121.617,24.334],[121.596,24.331],[121.606,24.31],[121.597,24.316],[121.566,24.319],[121.545,24.338],[121.494,24.341],[121.452,24.365],[121.438,24.383],[121.401,24.38],[121.381,24.367],[121.369,24.372],[121.365,24.389],[121.338,24.39],[121.326,24.4],[121.328,24.434],[121.318,24.441],[121.324,24.457],[121.342,24.482],[121.358,24.487],[121.372,24.499],[121.373,24.51],[121.384,24.51],[121.402,24.529],[121.395,24.556],[121.412,24.573],[121.403,24.592],[121.413,24.603],[121.428,24.606],[121.451,24.651],[121.448,24.658],[121.459,24.673],[121.494,24.674],[121.512,24.684],[121.537,24.688],[121.543,24.706],[121.57,24.714],[121.575,24.71],[121.579,24.722],[121.588,24.72],[121.598,24.728],[121.592,24.745],[121.596,24.748],[121.589,24.755],[121.598,24.773],[121.592,24.787],[121.625,24.795],[121.626,24.809],[121.661,24.811],[121.669,24.818],[121.688,24.816],[121.688,24.825],[121.696,24.835],[121.73,24.855],[121.746,24.853],[121.775,24.865],[121.785,24.874],[121.782,24.889],[121.792,24.9],[121.812,24.907],[121.832,24.905],[121.854,24.926],[121.839,24.945],[121.847,24.96],[121.889,24.963],[121.903,24.974],[121.944,24.988],[121.966,24.983]]],\u5F70\u5316\u7E23:[[[120.457,24.207],[120.504,24.191],[120.525,24.152],[120.524,24.139],[120.545,24.117],[120.612,24.103],[120.619,24.075],[120.625,24.069],[120.625,24.03],[120.645,24.026],[120.647,24.034],[120.679,24.014],[120.671,24.011],[120.673,24.006],[120.638,24.007],[120.636,23.996],[120.65,23.983],[120.643,23.958],[120.635,23.952],[120.628,23.957],[120.634,23.953],[120.628,23.952],[120.637,23.937],[120.628,23.931],[120.637,23.925],[120.63,23.911],[120.635,23.899],[120.62,23.868],[120.628,23.857],[120.616,23.841],[120.626,23.842],[120.625,23.837],[120.633,23.834],[120.623,23.83],[120.637,23.833],[120.64,23.825],[120.634,23.826],[120.651,23.813],[120.676,23.819],[120.684,23.801],[120.643,23.786],[120.551,23.801],[120.507,23.801],[120.452,23.817],[120.433,23.83],[120.308,23.82],[120.255,23.834],[120.22,23.866],[120.235,23.885],[120.255,23.894],[120.261,23.92],[120.279,23.934],[120.283,23.955],[120.308,23.973],[120.316,23.999],[120.335,24.016],[120.34,24.06],[120.363,24.081],[120.384,24.088],[120.386,24.097],[120.38,24.095],[120.397,24.117],[120.418,24.174],[120.425,24.183],[120.444,24.189],[120.457,24.207]]],\u5357\u6295\u7E23:[[[120.64,23.786],[120.684,23.803],[120.676,23.819],[120.651,23.813],[120.634,23.826],[120.64,23.825],[120.637,23.833],[120.623,23.83],[120.633,23.834],[120.625,23.837],[120.626,23.842],[120.616,23.841],[120.628,23.857],[120.62,23.868],[120.635,23.899],[120.63,23.911],[120.637,23.925],[120.628,23.931],[120.637,23.937],[120.628,23.952],[120.634,23.953],[120.628,23.957],[120.635,23.952],[120.643,23.958],[120.65,23.983],[120.636,23.996],[120.638,24.007],[120.673,24.006],[120.671,24.011],[120.679,24.014],[120.706,24.005],[120.732,24.009],[120.748,23.999],[120.771,24.009],[120.792,24.031],[120.809,24.066],[120.829,24.072],[120.83,24.102],[120.845,24.125],[120.854,24.125],[120.858,24.116],[120.872,24.117],[120.879,24.109],[120.878,24.085],[120.891,24.097],[120.893,24.116],[120.92,24.107],[120.95,24.128],[120.961,24.12],[120.989,24.119],[121.02,24.159],[121.028,24.16],[121.033,24.149],[121.038,24.158],[121.048,24.16],[121.053,24.155],[121.085,24.176],[121.102,24.196],[121.136,24.196],[121.148,24.213],[121.161,24.215],[121.168,24.225],[121.181,24.212],[121.22,24.229],[121.238,24.22],[121.255,24.243],[121.265,24.246],[121.28,24.23],[121.293,24.229],[121.301,24.237],[121.343,24.224],[121.349,24.2],[121.326,24.196],[121.308,24.181],[121.286,24.177],[121.288,24.158],[121.28,24.158],[121.285,24.152],[121.281,24.136],[121.328,24.111],[121.319,24.095],[121.323,24.085],[121.283,24.054],[121.286,24.04],[121.26,23.992],[121.264,23.976],[121.273,23.975],[121.278,23.966],[121.272,23.948],[121.276,23.91],[121.261,23.903],[121.268,23.883],[121.263,23.881],[121.265,23.873],[121.253,23.868],[121.239,23.84],[121.239,23.822],[121.226,23.804],[121.231,23.788],[121.205,23.772],[121.213,23.758],[121.233,23.751],[121.23,23.73],[121.239,23.724],[121.241,23.698],[121.233,23.678],[121.236,23.665],[121.224,23.624],[121.206,23.596],[121.194,23.6],[121.177,23.583],[121.153,23.587],[121.152,23.574],[121.16,23.568],[121.146,23.555],[121.151,23.527],[121.136,23.515],[121.118,23.522],[121.098,23.522],[121.088,23.514],[121.069,23.518],[121.062,23.499],[121.039,23.474],[121.059,23.462],[121.052,23.451],[121.015,23.435],[121.01,23.443],[121.016,23.452],[121.008,23.462],[120.981,23.469],[120.948,23.467],[120.91,23.476],[120.887,23.476],[120.881,23.468],[120.864,23.473],[120.839,23.471],[120.827,23.483],[120.82,23.521],[120.809,23.536],[120.825,23.587],[120.818,23.6],[120.795,23.597],[120.753,23.615],[120.731,23.611],[120.719,23.63],[120.713,23.628],[120.714,23.621],[120.692,23.62],[120.684,23.611],[120.661,23.61],[120.651,23.616],[120.654,23.629],[120.647,23.631],[120.634,23.619],[120.629,23.635],[120.648,23.683],[120.639,23.711],[120.64,23.729],[120.645,23.737],[120.656,23.735],[120.656,23.755],[120.64,23.786]]],\u96F2\u6797\u7E23:[[[120.081,23.524],[120.096,23.511],[120.083,23.513],[120.078,23.503],[120.07,23.504],[120.067,23.5],[120.074,23.499],[120.066,23.499],[120.072,23.494],[120.068,23.49],[120.065,23.495],[120.054,23.492],[120.065,23.487],[120.063,23.48],[120.053,23.48],[120.058,23.483],[120.053,23.488],[120.049,23.477],[120.043,23.477],[120.051,23.493],[120.047,23.495],[120.041,23.478],[120.035,23.483],[120.036,23.478],[120.025,23.475],[120.024,23.46],[120.014,23.46],[120.018,23.47],[120.01,23.465],[120.019,23.436],[119.997,23.466],[120,23.473],[120.081,23.524]],[[120.099,23.542],[120.108,23.534],[120.103,23.532],[120.111,23.529],[120.1,23.529],[120.097,23.521],[120.091,23.529],[120.099,23.542]],[[120.132,23.547],[120.137,23.543],[120.127,23.53],[120.126,23.544],[120.132,23.547]],[[120.132,23.563],[120.13,23.551],[120.125,23.559],[120.106,23.541],[120.111,23.555],[120.132,23.563]],[[120.22,23.866],[120.255,23.834],[120.308,23.82],[120.433,23.83],[120.452,23.817],[120.507,23.801],[120.551,23.801],[120.64,23.786],[120.656,23.755],[120.656,23.735],[120.645,23.737],[120.64,23.729],[120.639,23.711],[120.648,23.683],[120.629,23.635],[120.631,23.622],[120.645,23.631],[120.653,23.629],[120.651,23.616],[120.669,23.609],[120.684,23.611],[120.692,23.62],[120.71,23.619],[120.719,23.63],[120.731,23.618],[120.725,23.604],[120.733,23.597],[120.736,23.57],[120.694,23.576],[120.676,23.571],[120.67,23.579],[120.651,23.572],[120.643,23.576],[120.649,23.583],[120.646,23.594],[120.61,23.583],[120.58,23.582],[120.533,23.597],[120.51,23.619],[120.504,23.635],[120.454,23.626],[120.444,23.63],[120.426,23.618],[120.42,23.625],[120.407,23.625],[120.405,23.634],[120.38,23.61],[120.366,23.608],[120.359,23.595],[120.335,23.593],[120.327,23.574],[120.308,23.575],[120.311,23.565],[120.29,23.562],[120.291,23.551],[120.276,23.543],[120.272,23.531],[120.256,23.546],[120.243,23.544],[120.247,23.516],[120.239,23.508],[120.223,23.504],[120.149,23.519],[120.145,23.526],[120.15,23.532],[120.138,23.561],[120.145,23.595],[120.139,23.6],[120.14,23.613],[120.133,23.616],[120.138,23.635],[120.125,23.621],[120.114,23.634],[120.125,23.646],[120.166,23.742],[120.169,23.759],[120.157,23.785],[120.175,23.803],[120.17,23.807],[120.181,23.81],[120.206,23.834],[120.204,23.847],[120.214,23.851],[120.22,23.866]]],\u57FA\u9686\u5E02:[[[121.803,25.136],[121.805,25.125],[121.795,25.126],[121.799,25.119],[121.795,25.113],[121.773,25.12],[121.767,25.113],[121.75,25.11],[121.76,25.101],[121.762,25.078],[121.776,25.07],[121.764,25.057],[121.732,25.053],[121.712,25.068],[121.699,25.067],[121.68,25.077],[121.681,25.088],[121.674,25.083],[121.656,25.093],[121.643,25.128],[121.627,25.14],[121.678,25.156],[121.71,25.177],[121.709,25.165],[121.725,25.166],[121.749,25.156],[121.765,25.164],[121.78,25.159],[121.773,25.156],[121.778,25.151],[121.807,25.149],[121.803,25.136]]],\u53F0\u5317\u5E02:[[[121.571,25.197],[121.584,25.195],[121.577,25.167],[121.59,25.164],[121.59,25.152],[121.608,25.13],[121.597,25.109],[121.626,25.096],[121.628,25.083],[121.616,25.064],[121.624,25.056],[121.616,25.051],[121.619,25.044],[121.647,25.028],[121.666,25.03],[121.663,25.023],[121.632,25.026],[121.623,25.017],[121.609,25.021],[121.598,25.015],[121.6,24.977],[121.62,24.97],[121.601,24.961],[121.561,24.965],[121.553,24.987],[121.545,24.984],[121.535,24.995],[121.532,24.991],[121.532,25.008],[121.517,25.02],[121.509,25.021],[121.493,25.01],[121.484,25.038],[121.505,25.05],[121.506,25.074],[121.489,25.097],[121.457,25.107],[121.459,25.123],[121.503,25.173],[121.52,25.169],[121.522,25.179],[121.541,25.187],[121.558,25.21],[121.571,25.197]]],\u65B0\u5317\u5E02:[[[121.966,24.983],[121.944,24.988],[121.903,24.974],[121.889,24.963],[121.847,24.96],[121.839,24.945],[121.854,24.926],[121.834,24.907],[121.792,24.9],[121.782,24.889],[121.785,24.874],[121.775,24.865],[121.746,24.853],[121.73,24.855],[121.696,24.835],[121.688,24.825],[121.688,24.816],[121.669,24.818],[121.661,24.811],[121.626,24.809],[121.625,24.795],[121.592,24.787],[121.598,24.773],[121.589,24.755],[121.596,24.748],[121.592,24.745],[121.598,24.728],[121.588,24.72],[121.579,24.722],[121.575,24.71],[121.57,24.714],[121.543,24.706],[121.537,24.688],[121.48,24.674],[121.474,24.696],[121.45,24.706],[121.434,24.73],[121.424,24.762],[121.45,24.786],[121.45,24.791],[121.438,24.795],[121.436,24.812],[121.403,24.844],[121.373,24.834],[121.355,24.844],[121.336,24.844],[121.358,24.853],[121.345,24.867],[121.354,24.876],[121.346,24.88],[121.342,24.893],[121.333,24.892],[121.334,24.899],[121.32,24.9],[121.326,24.909],[121.318,24.916],[121.34,24.929],[121.322,24.928],[121.316,24.938],[121.332,24.946],[121.329,24.972],[121.324,24.973],[121.343,24.982],[121.37,24.977],[121.386,24.987],[121.384,24.996],[121.394,24.994],[121.403,24.999],[121.391,25.012],[121.412,25.019],[121.398,25.03],[121.401,25.038],[121.391,25.042],[121.401,25.043],[121.394,25.05],[121.401,25.051],[121.385,25.053],[121.388,25.063],[121.355,25.065],[121.346,25.07],[121.353,25.073],[121.35,25.077],[121.341,25.074],[121.349,25.082],[121.292,25.103],[121.283,25.109],[121.283,25.118],[121.297,25.126],[121.345,25.128],[121.39,25.148],[121.392,25.168],[121.402,25.159],[121.419,25.177],[121.404,25.183],[121.405,25.19],[121.419,25.192],[121.453,25.253],[121.472,25.256],[121.481,25.271],[121.509,25.283],[121.511,25.292],[121.519,25.285],[121.533,25.29],[121.537,25.3],[121.55,25.292],[121.578,25.299],[121.623,25.274],[121.634,25.26],[121.634,25.24],[121.643,25.231],[121.653,25.233],[121.65,25.223],[121.663,25.207],[121.678,25.203],[121.703,25.216],[121.686,25.19],[121.693,25.18],[121.709,25.176],[121.678,25.156],[121.627,25.14],[121.643,25.128],[121.656,25.093],[121.674,25.083],[121.681,25.088],[121.679,25.079],[121.688,25.072],[121.712,25.068],[121.73,25.053],[121.746,25.053],[121.764,25.057],[121.776,25.07],[121.762,25.078],[121.76,25.101],[121.75,25.11],[121.767,25.113],[121.773,25.12],[121.795,25.113],[121.799,25.119],[121.795,25.126],[121.805,25.125],[121.803,25.136],[121.827,25.136],[121.82,25.129],[121.823,25.121],[121.842,25.129],[121.897,25.12],[121.926,25.13],[121.916,25.114],[121.927,25.108],[121.914,25.085],[121.916,25.077],[121.932,25.063],[121.932,25.036],[121.947,25.021],[121.978,25.027],[121.99,25.021],[121.991,25.013],[121.999,25.02],[122.007,25.012],[122.005,25.002],[121.966,24.983]]],\u53F0\u4E2D\u5E02:[[[121.318,24.441],[121.328,24.434],[121.326,24.4],[121.338,24.39],[121.365,24.389],[121.374,24.368],[121.383,24.368],[121.401,24.38],[121.434,24.383],[121.443,24.373],[121.448,24.375],[121.452,24.365],[121.438,24.352],[121.435,24.323],[121.423,24.308],[121.405,24.308],[121.397,24.289],[121.38,24.279],[121.385,24.255],[121.353,24.244],[121.343,24.224],[121.301,24.237],[121.293,24.229],[121.28,24.23],[121.265,24.246],[121.255,24.243],[121.238,24.22],[121.22,24.229],[121.181,24.212],[121.168,24.225],[121.161,24.215],[121.148,24.213],[121.136,24.196],[121.102,24.196],[121.085,24.176],[121.053,24.155],[121.048,24.16],[121.038,24.158],[121.033,24.149],[121.028,24.16],[121.02,24.159],[120.989,24.119],[120.961,24.12],[120.95,24.128],[120.92,24.107],[120.891,24.116],[120.891,24.097],[120.878,24.085],[120.879,24.109],[120.872,24.117],[120.858,24.116],[120.854,24.125],[120.845,24.125],[120.83,24.102],[120.829,24.072],[120.809,24.066],[120.792,24.031],[120.771,24.009],[120.746,23.999],[120.732,24.009],[120.695,24.007],[120.647,24.034],[120.645,24.026],[120.625,24.03],[120.625,24.069],[120.619,24.075],[120.612,24.103],[120.545,24.117],[120.524,24.139],[120.525,24.152],[120.504,24.191],[120.457,24.207],[120.465,24.214],[120.461,24.217],[120.469,24.214],[120.476,24.224],[120.49,24.255],[120.486,24.257],[120.493,24.266],[120.498,24.264],[120.524,24.316],[120.559,24.35],[120.573,24.377],[120.622,24.44],[120.64,24.428],[120.646,24.412],[120.664,24.402],[120.693,24.367],[120.73,24.352],[120.763,24.326],[120.807,24.315],[120.834,24.29],[120.849,24.289],[120.875,24.295],[120.912,24.294],[120.922,24.304],[120.917,24.336],[120.936,24.343],[120.966,24.334],[121.005,24.332],[121.02,24.309],[121.035,24.297],[121.049,24.296],[121.055,24.31],[121.07,24.316],[121.073,24.323],[121.092,24.319],[121.109,24.331],[121.122,24.331],[121.141,24.36],[121.168,24.361],[121.177,24.377],[121.19,24.382],[121.197,24.397],[121.211,24.396],[121.216,24.379],[121.231,24.384],[121.244,24.406],[121.244,24.42],[121.258,24.425],[121.259,24.438],[121.26,24.429],[121.27,24.427],[121.305,24.433],[121.318,24.441]]],\u53F0\u5357\u5E02:[[[120.653,23.225],[120.656,23.218],[120.637,23.19],[120.641,23.183],[120.601,23.144],[120.567,23.082],[120.483,23.016],[120.48,23.003],[120.461,23.004],[120.461,22.991],[120.455,22.991],[120.453,22.978],[120.443,22.977],[120.416,22.916],[120.409,22.912],[120.399,22.922],[120.382,22.921],[120.352,22.888],[120.332,22.889],[120.325,22.9],[120.32,22.895],[120.285,22.905],[120.278,22.904],[120.279,22.896],[120.258,22.902],[120.254,22.894],[120.233,22.905],[120.229,22.917],[120.218,22.91],[120.192,22.921],[120.175,22.912],[120.172,22.95],[120.163,22.965],[120.155,22.965],[120.159,22.973],[120.141,22.996],[120.094,23.029],[120.058,23.043],[120.039,23.068],[120.027,23.068],[120.039,23.11],[120.055,23.126],[120.059,23.159],[120.08,23.209],[120.081,23.238],[120.092,23.259],[120.095,23.296],[120.111,23.31],[120.114,23.336],[120.118,23.34],[120.149,23.32],[120.15,23.313],[120.166,23.308],[120.179,23.292],[120.189,23.29],[120.188,23.301],[120.212,23.292],[120.223,23.298],[120.238,23.327],[120.257,23.332],[120.267,23.341],[120.261,23.344],[120.266,23.352],[120.286,23.35],[120.284,23.362],[120.293,23.375],[120.311,23.375],[120.312,23.387],[120.333,23.386],[120.35,23.401],[120.381,23.403],[120.408,23.413],[120.42,23.404],[120.44,23.414],[120.473,23.398],[120.479,23.388],[120.494,23.395],[120.499,23.388],[120.484,23.38],[120.484,23.37],[120.505,23.369],[120.512,23.36],[120.505,23.355],[120.505,23.345],[120.534,23.336],[120.54,23.328],[120.523,23.312],[120.526,23.296],[120.52,23.272],[120.532,23.255],[120.52,23.238],[120.555,23.218],[120.565,23.221],[120.578,23.215],[120.592,23.24],[120.597,23.229],[120.61,23.223],[120.628,23.229],[120.653,23.225]]],\u6843\u5712\u5E02:[[[121.48,24.674],[121.459,24.673],[121.45,24.662],[121.451,24.651],[121.425,24.603],[121.413,24.603],[121.391,24.586],[121.373,24.594],[121.36,24.614],[121.366,24.632],[121.358,24.634],[121.352,24.644],[121.354,24.668],[121.339,24.667],[121.339,24.679],[121.318,24.698],[121.299,24.696],[121.308,24.72],[121.298,24.733],[121.308,24.755],[121.302,24.763],[121.26,24.782],[121.26,24.793],[121.248,24.797],[121.243,24.809],[121.222,24.8],[121.22,24.812],[121.205,24.807],[121.203,24.817],[121.174,24.828],[121.176,24.832],[121.15,24.845],[121.161,24.86],[121.156,24.881],[121.116,24.882],[121.108,24.886],[121.109,24.898],[121.091,24.893],[121.058,24.906],[121.058,24.937],[121.046,24.944],[121.019,24.94],[121.007,24.946],[120.993,24.935],[120.982,24.94],[121.01,24.975],[121.01,24.99],[121.029,25.021],[121.052,25.044],[121.087,25.056],[121.09,25.063],[121.161,25.086],[121.213,25.111],[121.24,25.116],[121.24,25.123],[121.283,25.118],[121.283,25.109],[121.292,25.103],[121.349,25.082],[121.341,25.074],[121.35,25.077],[121.353,25.073],[121.346,25.07],[121.355,25.065],[121.391,25.062],[121.385,25.053],[121.401,25.051],[121.394,25.05],[121.401,25.043],[121.391,25.042],[121.401,25.038],[121.398,25.03],[121.412,25.019],[121.393,25.016],[121.403,24.999],[121.394,24.994],[121.384,24.996],[121.386,24.987],[121.37,24.977],[121.343,24.982],[121.327,24.978],[121.324,24.973],[121.329,24.972],[121.332,24.946],[121.316,24.938],[121.322,24.928],[121.34,24.929],[121.318,24.916],[121.326,24.909],[121.32,24.9],[121.334,24.899],[121.333,24.892],[121.342,24.893],[121.346,24.88],[121.354,24.876],[121.345,24.867],[121.358,24.853],[121.336,24.844],[121.355,24.844],[121.373,24.834],[121.403,24.844],[121.436,24.812],[121.438,24.795],[121.45,24.791],[121.45,24.786],[121.424,24.762],[121.434,24.73],[121.45,24.706],[121.474,24.696],[121.48,24.674]]],\u82D7\u6817\u7E23:[[[121.259,24.438],[121.258,24.425],[121.244,24.42],[121.244,24.406],[121.231,24.384],[121.216,24.379],[121.211,24.396],[121.197,24.397],[121.19,24.382],[121.177,24.377],[121.168,24.361],[121.141,24.36],[121.122,24.331],[121.109,24.331],[121.092,24.319],[121.073,24.323],[121.07,24.316],[121.055,24.31],[121.049,24.296],[121.035,24.297],[121.02,24.309],[121.005,24.332],[120.966,24.334],[120.936,24.343],[120.917,24.336],[120.922,24.304],[120.912,24.294],[120.875,24.295],[120.849,24.289],[120.834,24.29],[120.807,24.315],[120.763,24.326],[120.73,24.352],[120.693,24.367],[120.664,24.402],[120.646,24.412],[120.64,24.428],[120.622,24.44],[120.665,24.484],[120.716,24.601],[120.752,24.627],[120.758,24.642],[120.779,24.663],[120.824,24.673],[120.856,24.703],[120.861,24.722],[120.875,24.738],[120.891,24.732],[120.908,24.741],[120.915,24.717],[120.93,24.717],[120.942,24.707],[120.95,24.711],[120.953,24.704],[120.974,24.712],[120.974,24.697],[120.964,24.684],[120.976,24.685],[120.987,24.664],[120.997,24.655],[121.01,24.656],[121.008,24.644],[121.025,24.641],[121.052,24.615],[121.063,24.622],[121.075,24.611],[121.083,24.59],[121.071,24.563],[121.058,24.558],[121.081,24.541],[121.078,24.529],[121.067,24.523],[121.072,24.498],[121.098,24.496],[121.117,24.508],[121.137,24.507],[121.145,24.512],[121.169,24.503],[121.217,24.515],[121.223,24.507],[121.219,24.498],[121.263,24.455],[121.259,24.438]]],\u5609\u7FA9\u5E02:[[[120.448,23.518],[120.457,23.515],[120.464,23.499],[120.473,23.507],[120.483,23.505],[120.486,23.493],[120.501,23.49],[120.509,23.472],[120.495,23.453],[120.469,23.462],[120.44,23.44],[120.429,23.461],[120.394,23.463],[120.399,23.478],[120.389,23.499],[120.409,23.507],[120.412,23.499],[120.433,23.509],[120.434,23.517],[120.441,23.512],[120.441,23.518],[120.448,23.518]]],\u5609\u7FA9\u7E23:[[[120.731,23.611],[120.753,23.615],[120.795,23.597],[120.818,23.6],[120.825,23.587],[120.809,23.536],[120.82,23.521],[120.827,23.483],[120.836,23.473],[120.881,23.468],[120.887,23.476],[120.91,23.476],[120.958,23.469],[120.928,23.456],[120.916,23.459],[120.9,23.454],[120.887,23.435],[120.85,23.421],[120.825,23.372],[120.805,23.371],[120.783,23.342],[120.758,23.344],[120.753,23.327],[120.732,23.314],[120.731,23.306],[120.707,23.305],[120.7,23.284],[120.644,23.296],[120.639,23.269],[120.653,23.225],[120.628,23.229],[120.61,23.223],[120.597,23.229],[120.592,23.24],[120.578,23.215],[120.565,23.221],[120.555,23.218],[120.526,23.232],[120.519,23.239],[120.532,23.255],[120.52,23.272],[120.526,23.296],[120.523,23.312],[120.54,23.328],[120.534,23.336],[120.505,23.345],[120.505,23.355],[120.512,23.36],[120.505,23.369],[120.484,23.37],[120.484,23.38],[120.499,23.388],[120.494,23.395],[120.479,23.388],[120.473,23.398],[120.44,23.414],[120.42,23.404],[120.408,23.413],[120.381,23.403],[120.35,23.401],[120.324,23.384],[120.315,23.389],[120.311,23.375],[120.293,23.375],[120.286,23.367],[120.286,23.35],[120.266,23.352],[120.261,23.344],[120.267,23.341],[120.257,23.332],[120.238,23.327],[120.223,23.298],[120.212,23.292],[120.188,23.301],[120.189,23.29],[120.179,23.292],[120.169,23.306],[120.15,23.313],[120.149,23.32],[120.118,23.34],[120.132,23.385],[120.152,23.389],[120.156,23.38],[120.154,23.388],[120.159,23.388],[120.154,23.389],[120.164,23.393],[120.16,23.406],[120.151,23.399],[120.149,23.406],[120.15,23.423],[120.156,23.429],[120.145,23.429],[120.156,23.448],[120.151,23.456],[120.135,23.448],[120.133,23.452],[120.145,23.46],[120.155,23.491],[120.17,23.492],[120.125,23.489],[120.119,23.495],[120.122,23.519],[120.146,23.521],[120.181,23.51],[120.199,23.513],[120.223,23.504],[120.239,23.508],[120.247,23.516],[120.243,23.544],[120.256,23.546],[120.272,23.531],[120.276,23.543],[120.291,23.551],[120.29,23.562],[120.311,23.565],[120.308,23.575],[120.327,23.574],[120.335,23.593],[120.359,23.595],[120.366,23.608],[120.38,23.61],[120.405,23.634],[120.407,23.625],[120.42,23.625],[120.426,23.618],[120.444,23.63],[120.454,23.626],[120.504,23.635],[120.51,23.619],[120.537,23.595],[120.581,23.582],[120.61,23.583],[120.647,23.593],[120.643,23.576],[120.651,23.572],[120.67,23.579],[120.676,23.571],[120.694,23.576],[120.736,23.57],[120.733,23.597],[120.725,23.604],[120.731,23.611]]],\u91D1\u9580\u7E23:[[[118.163,24.395],[118.173,24.386],[118.162,24.387],[118.163,24.395]],[[118.249,24.456],[118.269,24.446],[118.263,24.423],[118.255,24.425],[118.226,24.405],[118.214,24.41],[118.227,24.448],[118.249,24.456]],[[118.278,24.454],[118.269,24.452],[118.273,24.458],[118.278,24.454]],[[118.411,24.532],[118.434,24.525],[118.436,24.514],[118.45,24.511],[118.459,24.487],[118.469,24.484],[118.464,24.468],[118.478,24.45],[118.461,24.438],[118.467,24.432],[118.455,24.416],[118.426,24.407],[118.433,24.416],[118.427,24.424],[118.403,24.435],[118.386,24.435],[118.351,24.421],[118.334,24.391],[118.322,24.386],[118.296,24.396],[118.278,24.413],[118.291,24.419],[118.303,24.438],[118.286,24.475],[118.293,24.49],[118.313,24.496],[118.339,24.475],[118.363,24.472],[118.386,24.494],[118.384,24.508],[118.401,24.522],[118.398,24.528],[118.411,24.532]],[[119.474,24.986],[119.479,24.986],[119.476,24.979],[119.467,24.979],[119.474,24.986]],[[119.458,24.989],[119.448,24.988],[119.443,24.999],[119.458,24.989]]],\u9AD8\u96C4\u5E02:[[[120.958,23.469],[121.007,23.463],[121.015,23.455],[121.011,23.441],[121.014,23.431],[121.029,23.423],[121.028,23.404],[121.003,23.395],[121.008,23.385],[120.988,23.371],[120.987,23.359],[121.003,23.355],[121.01,23.346],[121.02,23.35],[121.027,23.338],[121.048,23.326],[121.048,23.315],[121.024,23.294],[120.986,23.28],[120.973,23.282],[120.938,23.245],[120.915,23.238],[120.906,23.2],[120.911,23.183],[120.898,23.176],[120.895,23.161],[120.877,23.152],[120.886,23.145],[120.889,23.11],[120.886,23.09],[120.869,23.06],[120.88,23.048],[120.88,23.036],[120.862,23.031],[120.861,23.008],[120.851,23.005],[120.85,22.996],[120.821,22.962],[120.822,22.935],[120.833,22.912],[120.829,22.904],[120.84,22.883],[120.865,22.872],[120.859,22.863],[120.869,22.858],[120.865,22.843],[120.853,22.858],[120.847,22.852],[120.837,22.864],[120.824,22.866],[120.801,22.851],[120.793,22.852],[120.793,22.841],[120.779,22.835],[120.755,22.864],[120.725,22.881],[120.705,22.881],[120.691,22.865],[120.672,22.856],[120.661,22.86],[120.658,22.88],[120.648,22.877],[120.645,22.885],[120.606,22.873],[120.554,22.829],[120.531,22.833],[120.51,22.829],[120.476,22.838],[120.469,22.831],[120.456,22.78],[120.456,22.718],[120.436,22.661],[120.434,22.618],[120.447,22.586],[120.442,22.56],[120.423,22.518],[120.424,22.469],[120.398,22.476],[120.359,22.501],[120.334,22.521],[120.333,22.529],[120.325,22.523],[120.329,22.534],[120.312,22.515],[120.289,22.544],[120.317,22.524],[120.322,22.528],[120.308,22.545],[120.299,22.548],[120.303,22.558],[120.263,22.601],[120.266,22.611],[120.256,22.618],[120.263,22.626],[120.25,22.652],[120.253,22.665],[120.264,22.675],[120.263,22.689],[120.258,22.689],[120.262,22.701],[120.215,22.804],[120.198,22.805],[120.19,22.814],[120.207,22.823],[120.189,22.858],[120.193,22.865],[120.175,22.912],[120.192,22.921],[120.218,22.91],[120.229,22.917],[120.233,22.905],[120.254,22.894],[120.258,22.902],[120.279,22.896],[120.278,22.904],[120.285,22.905],[120.32,22.895],[120.325,22.9],[120.332,22.889],[120.352,22.888],[120.382,22.921],[120.399,22.922],[120.409,22.912],[120.416,22.916],[120.443,22.977],[120.453,22.978],[120.455,22.991],[120.461,22.991],[120.461,23.004],[120.48,23.003],[120.486,23.018],[120.557,23.071],[120.575,23.091],[120.601,23.144],[120.641,23.183],[120.637,23.191],[120.656,23.218],[120.639,23.269],[120.644,23.296],[120.7,23.284],[120.707,23.305],[120.731,23.306],[120.732,23.314],[120.753,23.327],[120.758,23.344],[120.783,23.342],[120.805,23.371],[120.825,23.372],[120.85,23.421],[120.887,23.435],[120.9,23.454],[120.916,23.459],[120.928,23.456],[120.958,23.469]]],\u53F0\u6771\u7E23:[[[121.612,21.943],[121.604,21.952],[121.615,21.955],[121.612,21.943]],[[121.505,22.085],[121.529,22.08],[121.57,22.082],[121.568,22.073],[121.576,22.06],[121.568,22.058],[121.564,22.049],[121.567,22.04],[121.603,22.02],[121.593,22.002],[121.57,22.002],[121.557,22.022],[121.537,22.025],[121.517,22.046],[121.509,22.046],[121.51,22.068],[121.499,22.081],[121.505,22.085]],[[121.492,22.677],[121.51,22.677],[121.509,22.654],[121.5,22.646],[121.506,22.633],[121.495,22.632],[121.489,22.643],[121.473,22.646],[121.475,22.659],[121.465,22.671],[121.466,22.676],[121.492,22.677]],[[120.865,22.843],[120.869,22.858],[120.859,22.863],[120.865,22.872],[120.84,22.883],[120.829,22.904],[120.833,22.912],[120.822,22.935],[120.821,22.962],[120.85,22.996],[120.851,23.005],[120.861,23.008],[120.862,23.031],[120.88,23.036],[120.88,23.048],[120.869,23.06],[120.886,23.09],[120.889,23.11],[120.886,23.145],[120.877,23.152],[120.895,23.161],[120.898,23.176],[120.911,23.183],[120.906,23.2],[120.915,23.238],[120.938,23.245],[120.973,23.282],[120.986,23.28],[121.039,23.301],[121.059,23.286],[121.062,23.266],[121.079,23.233],[121.129,23.223],[121.146,23.199],[121.176,23.21],[121.19,23.204],[121.213,23.155],[121.212,23.144],[121.231,23.139],[121.238,23.129],[121.249,23.131],[121.258,23.126],[121.267,23.114],[121.264,23.104],[121.272,23.098],[121.291,23.109],[121.316,23.11],[121.322,23.117],[121.32,23.138],[121.327,23.152],[121.319,23.168],[121.324,23.178],[121.335,23.178],[121.347,23.217],[121.357,23.224],[121.353,23.231],[121.36,23.253],[121.378,23.27],[121.378,23.301],[121.423,23.356],[121.404,23.368],[121.4,23.386],[121.42,23.419],[121.446,23.444],[121.473,23.441],[121.482,23.43],[121.496,23.435],[121.475,23.387],[121.462,23.313],[121.447,23.309],[121.433,23.288],[121.415,23.235],[121.42,23.226],[121.397,23.205],[121.408,23.167],[121.4,23.135],[121.406,23.126],[121.425,23.126],[121.395,23.113],[121.383,23.095],[121.363,23.094],[121.348,23.065],[121.337,23.02],[121.322,23.002],[121.324,22.994],[121.295,22.955],[121.283,22.947],[121.269,22.911],[121.247,22.881],[121.238,22.877],[121.233,22.864],[121.209,22.863],[121.191,22.85],[121.186,22.833],[121.198,22.815],[121.201,22.796],[121.181,22.783],[121.176,22.759],[121.124,22.716],[121.081,22.698],[121.026,22.656],[121.013,22.62],[121.009,22.589],[120.986,22.569],[120.977,22.554],[120.946,22.457],[120.895,22.335],[120.892,22.283],[120.896,22.246],[120.867,22.23],[120.859,22.241],[120.835,22.245],[120.815,22.263],[120.798,22.258],[120.798,22.276],[120.807,22.277],[120.806,22.284],[120.793,22.286],[120.777,22.303],[120.778,22.309],[120.796,22.316],[120.792,22.336],[120.785,22.346],[120.767,22.348],[120.763,22.359],[120.743,22.367],[120.756,22.388],[120.753,22.405],[120.773,22.407],[120.79,22.418],[120.776,22.45],[120.751,22.46],[120.751,22.479],[120.764,22.495],[120.739,22.554],[120.742,22.569],[120.749,22.572],[120.746,22.59],[120.754,22.6],[120.753,22.612],[120.786,22.661],[120.792,22.679],[120.787,22.693],[120.809,22.688],[120.837,22.697],[120.849,22.717],[120.884,22.717],[120.895,22.738],[120.892,22.764],[120.904,22.776],[120.903,22.8],[120.891,22.812],[120.869,22.817],[120.862,22.827],[120.865,22.843]]],\u82B1\u84EE\u7E23:[[[121.452,24.365],[121.498,24.339],[121.522,24.343],[121.545,24.338],[121.566,24.319],[121.597,24.316],[121.606,24.31],[121.596,24.331],[121.617,24.334],[121.619,24.345],[121.633,24.335],[121.635,24.348],[121.627,24.35],[121.621,24.363],[121.631,24.371],[121.649,24.349],[121.651,24.36],[121.676,24.337],[121.686,24.341],[121.688,24.334],[121.774,24.312],[121.751,24.285],[121.743,24.26],[121.663,24.194],[121.658,24.172],[121.664,24.135],[121.619,24.09],[121.619,24.053],[121.648,24.009],[121.628,23.969],[121.622,23.978],[121.608,23.96],[121.612,23.933],[121.598,23.857],[121.573,23.8],[121.572,23.757],[121.55,23.717],[121.553,23.698],[121.531,23.626],[121.526,23.576],[121.511,23.551],[121.503,23.52],[121.508,23.491],[121.514,23.487],[121.496,23.435],[121.482,23.43],[121.473,23.441],[121.446,23.444],[121.42,23.419],[121.4,23.385],[121.404,23.368],[121.423,23.356],[121.378,23.301],[121.378,23.27],[121.36,23.253],[121.353,23.231],[121.357,23.224],[121.347,23.217],[121.335,23.178],[121.324,23.178],[121.319,23.168],[121.327,23.152],[121.32,23.138],[121.322,23.117],[121.316,23.11],[121.291,23.109],[121.272,23.098],[121.264,23.104],[121.267,23.114],[121.258,23.126],[121.249,23.131],[121.238,23.129],[121.231,23.139],[121.212,23.144],[121.213,23.155],[121.19,23.204],[121.176,23.21],[121.146,23.199],[121.129,23.223],[121.079,23.233],[121.056,23.29],[121.039,23.301],[121.028,23.297],[121.046,23.308],[121.049,23.325],[121.027,23.338],[121.02,23.35],[121.01,23.346],[121.003,23.355],[120.987,23.359],[120.987,23.366],[121.008,23.385],[121.003,23.395],[121.028,23.404],[121.029,23.423],[121.013,23.433],[121.052,23.451],[121.058,23.46],[121.039,23.474],[121.062,23.499],[121.069,23.518],[121.088,23.514],[121.098,23.522],[121.118,23.522],[121.136,23.515],[121.151,23.527],[121.146,23.555],[121.16,23.568],[121.152,23.574],[121.153,23.587],[121.177,23.583],[121.194,23.6],[121.206,23.596],[121.213,23.6],[121.235,23.661],[121.233,23.678],[121.239,23.687],[121.241,23.709],[121.239,23.724],[121.229,23.735],[121.233,23.751],[121.213,23.758],[121.205,23.772],[121.231,23.788],[121.226,23.804],[121.239,23.822],[121.239,23.84],[121.253,23.868],[121.265,23.873],[121.263,23.881],[121.268,23.883],[121.261,23.903],[121.276,23.91],[121.272,23.948],[121.278,23.966],[121.273,23.975],[121.264,23.976],[121.26,23.992],[121.286,24.04],[121.283,24.054],[121.323,24.085],[121.319,24.095],[121.328,24.111],[121.281,24.136],[121.285,24.152],[121.28,24.158],[121.288,24.158],[121.286,24.177],[121.308,24.181],[121.326,24.196],[121.349,24.2],[121.343,24.224],[121.353,24.244],[121.385,24.255],[121.38,24.279],[121.397,24.289],[121.405,24.308],[121.423,24.308],[121.435,24.323],[121.438,24.352],[121.452,24.365]]],\u6F8E\u6E56\u7E23:[[[119.44,23.221],[119.448,23.22],[119.443,23.2],[119.43,23.197],[119.43,23.187],[119.422,23.196],[119.416,23.194],[119.421,23.203],[119.41,23.216],[119.44,23.221]],[[119.616,23.254],[119.621,23.253],[119.622,23.245],[119.609,23.249],[119.616,23.254]],[[119.677,23.264],[119.671,23.244],[119.665,23.259],[119.677,23.264]],[[119.507,23.273],[119.511,23.267],[119.504,23.27],[119.507,23.273]],[[119.537,23.375],[119.544,23.365],[119.532,23.367],[119.525,23.357],[119.521,23.36],[119.519,23.367],[119.537,23.375]],[[119.494,23.397],[119.499,23.39],[119.507,23.392],[119.508,23.377],[119.513,23.377],[119.51,23.37],[119.516,23.374],[119.516,23.368],[119.508,23.365],[119.513,23.352],[119.486,23.356],[119.495,23.365],[119.496,23.388],[119.489,23.395],[119.494,23.397]],[[119.32,23.412],[119.331,23.405],[119.316,23.398],[119.32,23.412]],[[119.541,23.496],[119.529,23.487],[119.509,23.486],[119.511,23.492],[119.517,23.486],[119.529,23.496],[119.541,23.496]],[[119.521,23.515],[119.522,23.51],[119.514,23.509],[119.521,23.515]],[[119.571,23.618],[119.565,23.619],[119.569,23.622],[119.571,23.618]],[[119.664,23.67],[119.666,23.66],[119.655,23.661],[119.664,23.67]],[[119.584,23.677],[119.6,23.674],[119.608,23.663],[119.612,23.65],[119.602,23.649],[119.597,23.64],[119.602,23.634],[119.61,23.636],[119.602,23.629],[119.614,23.619],[119.613,23.602],[119.631,23.607],[119.625,23.6],[119.625,23.58],[119.632,23.583],[119.638,23.599],[119.64,23.587],[119.645,23.589],[119.651,23.61],[119.657,23.606],[119.655,23.599],[119.665,23.595],[119.66,23.592],[119.668,23.591],[119.672,23.601],[119.683,23.584],[119.683,23.566],[119.694,23.56],[119.695,23.555],[119.678,23.551],[119.669,23.562],[119.67,23.556],[119.667,23.561],[119.642,23.558],[119.635,23.547],[119.606,23.529],[119.612,23.521],[119.606,23.508],[119.598,23.514],[119.573,23.508],[119.572,23.522],[119.557,23.523],[119.549,23.539],[119.541,23.539],[119.549,23.554],[119.55,23.541],[119.557,23.538],[119.555,23.529],[119.572,23.532],[119.574,23.52],[119.583,23.533],[119.596,23.527],[119.6,23.531],[119.595,23.538],[119.603,23.54],[119.602,23.548],[119.592,23.553],[119.573,23.546],[119.562,23.55],[119.563,23.558],[119.576,23.555],[119.572,23.563],[119.58,23.563],[119.574,23.568],[119.568,23.562],[119.556,23.563],[119.567,23.575],[119.562,23.585],[119.574,23.585],[119.584,23.594],[119.586,23.574],[119.594,23.575],[119.597,23.569],[119.602,23.577],[119.598,23.583],[119.607,23.587],[119.603,23.601],[119.612,23.605],[119.597,23.617],[119.605,23.625],[119.589,23.623],[119.596,23.636],[119.581,23.662],[119.571,23.662],[119.563,23.651],[119.554,23.658],[119.54,23.634],[119.518,23.629],[119.523,23.602],[119.512,23.592],[119.516,23.565],[119.496,23.568],[119.467,23.561],[119.481,23.575],[119.492,23.57],[119.503,23.579],[119.504,23.589],[119.49,23.595],[119.494,23.602],[119.504,23.597],[119.509,23.612],[119.499,23.62],[119.512,23.648],[119.519,23.648],[119.514,23.656],[119.524,23.656],[119.522,23.643],[119.538,23.639],[119.554,23.658],[119.555,23.669],[119.584,23.677]],[[119.552,23.721],[119.558,23.717],[119.555,23.709],[119.552,23.721]],[[119.612,23.756],[119.624,23.744],[119.611,23.741],[119.615,23.737],[119.606,23.737],[119.603,23.725],[119.596,23.738],[119.612,23.756]]],\u65B0\u7AF9\u5E02:[[[120.935,24.713],[120.914,24.718],[120.908,24.741],[120.891,24.732],[120.875,24.738],[120.898,24.765],[120.892,24.773],[120.892,24.792],[120.903,24.824],[120.916,24.841],[120.913,24.854],[120.936,24.852],[120.955,24.834],[120.984,24.831],[121.004,24.819],[121.026,24.799],[121.021,24.794],[121.034,24.764],[121.021,24.757],[121.008,24.774],[120.993,24.781],[120.986,24.777],[120.988,24.768],[120.97,24.765],[120.957,24.745],[120.944,24.744],[120.935,24.713]]],\u65B0\u7AF9\u7E23:[[[121.403,24.592],[121.412,24.573],[121.395,24.556],[121.402,24.529],[121.384,24.51],[121.373,24.51],[121.372,24.499],[121.358,24.487],[121.342,24.482],[121.318,24.441],[121.305,24.433],[121.26,24.429],[121.263,24.455],[121.219,24.498],[121.223,24.507],[121.217,24.515],[121.169,24.503],[121.145,24.512],[121.137,24.507],[121.117,24.508],[121.098,24.496],[121.072,24.498],[121.067,24.523],[121.078,24.529],[121.081,24.541],[121.058,24.558],[121.071,24.563],[121.083,24.59],[121.075,24.611],[121.063,24.622],[121.052,24.615],[121.025,24.641],[121.008,24.644],[121.01,24.656],[120.997,24.655],[120.987,24.664],[120.976,24.685],[120.964,24.684],[120.974,24.697],[120.974,24.712],[120.953,24.704],[120.95,24.711],[120.942,24.707],[120.935,24.713],[120.944,24.744],[120.957,24.745],[120.97,24.765],[120.988,24.768],[120.986,24.777],[120.993,24.781],[121.008,24.774],[121.021,24.757],[121.034,24.764],[121.021,24.794],[121.026,24.799],[121.008,24.816],[120.984,24.831],[120.955,24.834],[120.94,24.85],[120.925,24.855],[120.943,24.872],[120.97,24.928],[120.982,24.94],[120.993,24.935],[121.007,24.946],[121.019,24.94],[121.038,24.946],[121.058,24.937],[121.058,24.906],[121.091,24.893],[121.109,24.898],[121.108,24.886],[121.116,24.882],[121.156,24.881],[121.161,24.86],[121.15,24.845],[121.176,24.832],[121.174,24.828],[121.203,24.817],[121.205,24.807],[121.22,24.812],[121.222,24.8],[121.243,24.809],[121.248,24.797],[121.26,24.793],[121.26,24.782],[121.302,24.763],[121.308,24.755],[121.298,24.733],[121.308,24.72],[121.299,24.696],[121.318,24.698],[121.339,24.679],[121.339,24.667],[121.354,24.668],[121.352,24.644],[121.358,24.634],[121.366,24.632],[121.359,24.617],[121.367,24.599],[121.388,24.586],[121.403,24.592]]],\u5C4F\u6771\u7E23:[[[120.38,22.356],[120.388,22.351],[120.388,22.343],[120.355,22.323],[120.362,22.347],[120.38,22.356]],[[120.424,22.469],[120.423,22.518],[120.442,22.56],[120.447,22.586],[120.434,22.618],[120.436,22.661],[120.453,22.704],[120.454,22.771],[120.474,22.837],[120.493,22.837],[120.51,22.829],[120.531,22.833],[120.552,22.828],[120.613,22.876],[120.645,22.885],[120.648,22.877],[120.658,22.88],[120.661,22.86],[120.672,22.856],[120.691,22.865],[120.705,22.881],[120.721,22.882],[120.755,22.864],[120.779,22.835],[120.793,22.841],[120.793,22.852],[120.801,22.851],[120.824,22.866],[120.837,22.864],[120.847,22.852],[120.853,22.858],[120.865,22.843],[120.862,22.827],[120.869,22.817],[120.901,22.804],[120.904,22.776],[120.892,22.764],[120.896,22.742],[120.884,22.717],[120.849,22.717],[120.837,22.697],[120.809,22.688],[120.787,22.693],[120.792,22.679],[120.786,22.663],[120.755,22.617],[120.754,22.6],[120.746,22.59],[120.749,22.572],[120.742,22.569],[120.739,22.554],[120.764,22.495],[120.751,22.479],[120.752,22.458],[120.776,22.45],[120.79,22.418],[120.773,22.407],[120.753,22.405],[120.756,22.388],[120.743,22.367],[120.763,22.359],[120.767,22.348],[120.785,22.346],[120.792,22.336],[120.797,22.318],[120.778,22.309],[120.778,22.298],[120.806,22.284],[120.807,22.277],[120.798,22.276],[120.798,22.258],[120.815,22.263],[120.835,22.245],[120.859,22.241],[120.867,22.23],[120.896,22.246],[120.899,22.234],[120.891,22.195],[120.897,22.144],[120.887,22.129],[120.892,22.11],[120.902,22.106],[120.893,22.068],[120.901,22.033],[120.889,22.026],[120.876,21.999],[120.847,21.987],[120.842,21.96],[120.849,21.934],[120.863,21.918],[120.865,21.898],[120.851,21.896],[120.846,21.914],[120.836,21.917],[120.822,21.934],[120.783,21.944],[120.765,21.959],[120.748,21.949],[120.74,21.919],[120.727,21.919],[120.719,21.933],[120.711,21.934],[120.714,21.979],[120.694,22.003],[120.685,22.025],[120.697,22.041],[120.698,22.055],[120.706,22.06],[120.7,22.084],[120.717,22.093],[120.716,22.105],[120.699,22.137],[120.685,22.21],[120.672,22.233],[120.65,22.252],[120.652,22.268],[120.643,22.302],[120.586,22.369],[120.518,22.411],[120.459,22.439],[120.433,22.468],[120.424,22.469]]]};var lr=[{id:"kuroshio",n:"\u9ED1\u6F6E\uFF08\u4E3B\u6D41\uFF09",kind:"\u6696\u6D41",c:"#e53935",seasons:["summer","winter"],path:[[121.9,20.4],[121.55,21.4],[121.65,22.4],[121.95,23.4],[122.25,24.3],[122.75,25.2],[123.5,26.2]],elem:"\u5F9E\u5357\u65B9\u71B1\u5E36\u6D77\u6D0B\u6D41\u4F86\u7684\u6EAB\u6696\u6D77\u6C34\uFF0C\u6CBF\u8457\u81FA\u7063\u6771\u908A\u4E00\u8DEF\u5F80\u5317\u6D41\u5230\u65E5\u672C\u3002\u9ED1\u6F6E\u5E36\u4F86\u5F88\u591A\u9B5A\uFF0C\u50CF\u65D7\u9B5A\u3001\u9BAA\u9B5A\u3001\u9B3C\u982D\u5200\uFF0C\u82B1\u84EE\u3001\u81FA\u6771\u4E5F\u56E0\u6B64\u53EF\u4EE5\u8CDE\u9BE8\u3002",junior:"\u6E90\u81EA\u5317\u8D64\u9053\u6D0B\u6D41\uFF0C\u7D93\u83F2\u5F8B\u8CD3\u6771\u65B9\u5317\u4E0A\uFF0C\u6CBF\u81FA\u7063\u6771\u90E8\u6D77\u57DF\u6D41\u5411\u65E5\u672C\uFF1B\u70BA\u9AD8\u6EAB\u3001\u9AD8\u9E7D\u7684\u6696\u6D41\uFF08\u5E74\u5747\u6C34\u6EAB\u7D04 24\uFF5E26\xB0C\uFF09\uFF0C\u6D41\u91CF\u5C45\u5168\u7403\u524D\u5217\u3002\u5E36\u4F86\u8C50\u5BCC\u7684\u71B1\u5E36\u8207\u9060\u6D0B\u9B5A\u985E\uFF08\u65D7\u9B5A\u3001\u9BAA\u9B5A\u3001\u9B3C\u982D\u5200\uFF09\uFF0C\u9020\u5C31\u6771\u90E8\u6F01\u5834\u8207\u8CDE\u9BE8\u7522\u696D\u3002"},{id:"branch",n:"\u9ED1\u6F6E\u652F\u6D41",kind:"\u6696\u6D41",c:"#ff7043",seasons:["summer","winter"],path:[[121.2,21.05],[120.55,21.75],[120.05,22.5],[119.8,23.2],[119.85,23.9],[120.2,24.6],[120.6,25.3]],elem:"\u9ED1\u6F6E\u5728\u81FA\u7063\u5357\u908A\u5206\u51FA\u4E00\u5C0F\u80A1\uFF0C\u5F80\u5317\u6D41\u9032\u81FA\u7063\u6D77\u5CFD\uFF0C\u8B93\u6F8E\u6E56\u9644\u8FD1\u7684\u6D77\u6C34\u6BD4\u8F03\u6EAB\u6696\u3002",junior:"\u9ED1\u6F6E\u65BC\u81FA\u7063\u5357\u65B9\u5206\u51FA\u7684\u5206\u652F\uFF0C\u7D93\u6F8E\u6E56\u6C34\u9053\u5317\u4E0A\u9032\u5165\u81FA\u7063\u6D77\u5CFD\uFF1B\u51AC\u5B63\u8207\u5357\u4E0B\u7684\u4E2D\u570B\u6CBF\u5CB8\u6D41\u4EA4\u6703\uFF0C\u51B7\u6696\u6C34\u5718\u5C0D\u5CD9\u5F62\u6210\u91CD\u8981\u6F01\u5834\u3002"},{id:"china",n:"\u4E2D\u570B\u6CBF\u5CB8\u6D41",kind:"\u5BD2\u6D41\uFF08\u51B7\u6D41\uFF09",c:"#1e88e5",seasons:["winter"],path:[[121.3,27.6],[120.4,26.7],[119.75,25.85],[119.15,25],[118.6,24.25],[118.05,23.55],[117.5,22.9]],elem:"\u51AC\u5929\u5439\u6771\u5317\u5B63\u98A8\uFF0C\u628A\u5317\u65B9\u51B0\u51B7\u7684\u6D77\u6C34\u6CBF\u8457\u4E2D\u570B\u5927\u9678\u6D77\u5CB8\u5F80\u5357\u63A8\uFF0C\u6D41\u9032\u81FA\u7063\u6D77\u5CFD\u3002\u592A\u51B7\u7684\u6642\u5019\uFF0C\u6F8E\u6E56\u7684\u9B5A\u6703\u88AB\u51CD\u50B7\uFF08\u5BD2\u5BB3\uFF09\u3002",junior:"\u51AC\u5B63\u53D7\u5F37\u52C1\u6771\u5317\u5B63\u98A8\u5439\u9001\uFF0C\u6CBF\u4E2D\u570B\u5927\u9678\u6CBF\u5CB8\u5357\u4E0B\u6D41\u5165\u81FA\u7063\u6D77\u5CFD\uFF0C\u5C6C\u4F4E\u6EAB\u3001\u4F4E\u9E7D\u7684\u6CBF\u5CB8\u51B7\u6D41\uFF1B\u8207\u9ED1\u6F6E\u652F\u6D41\u4EA4\u6703\u5F62\u6210\u6F01\u5834\uFF0C\u5BD2\u6D41\u904E\u5F37\u6642\u66FE\u9020\u6210\u6F8E\u6E56\u7BB1\u7DB2\u990A\u6B96\u8207\u91CE\u751F\u9B5A\u7FA4\u7684\u4F4E\u6EAB\u5BD2\u5BB3\u3002"},{id:"scs",n:"\u5357\u6D77\u5B63\u98A8\u6D41",kind:"\u5B63\u98A8\u6D41",c:"#fb8c00",seasons:["summer"],path:[[117.4,21.4],[118.4,22.2],[119.2,23],[119.55,23.9],[119.95,24.9],[120.6,25.9]],elem:"\u590F\u5929\u5439\u897F\u5357\u5B63\u98A8\uFF0C\u628A\u5357\u6D77\u7684\u6D77\u6C34\u5F80\u5317\u63A8\uFF0C\u6D41\u9032\u81FA\u7063\u6D77\u5CFD\u3002\u5B83\u6703\u8DDF\u8457\u5B63\u7BC0\u6539\u8B8A\u65B9\u5411\u3002",junior:"\u590F\u5B63\u53D7\u897F\u5357\u5B63\u98A8\u589E\u5F37\uFF0C\u5357\u6D77\u8868\u5C64\u6D41\u5411\u5317\u63A8\u9032\u81FA\u7063\u6D77\u5CFD\uFF1B\u51AC\u5B63\u96A8\u5B63\u98A8\u8F49\u63DB\u800C\u6539\u8B8A\uFF0C\u662F\u96A8\u5B63\u7BC0\u4EA4\u66FF\u7684\u6D0B\u6D41\u7CFB\u7D71\uFF0C\u8207\u9ED1\u6F6E\u652F\u6D41\u3001\u4E2D\u570B\u6CBF\u5CB8\u6D41\u5728\u81FA\u7063\u897F\u90E8\u8207\u5357\u7AEF\u6D77\u57DF\u5F62\u6210\u300C\u56DB\u5B63\u89D2\u529B\u300D\u3002"}],Uc=[{n:"\u81FA\u4E2D \u2192 \u82B1\u84EE",a:[120.45,24.18],b:[121.62,24]},{n:"\u5609\u7FA9 \u2192 \u81FA\u6771",a:[120.2,23.47],b:[121.42,22.9]},{n:"\u65B0\u7AF9 \u2192 \u5B9C\u862D",a:[120.92,24.82],b:[121.85,24.68]},{n:"\u9AD8\u96C4 \u2192 \u81FA\u6771\uFF08\u5357\u6A6B\uFF09",a:[120.3,23.05],b:[121.2,23]}];function ju(n){let{scene:t,world:e,camera:i,controls:s,mainGeo:r,M:o,G:a,px:l,pz:c,heightAt:h,state:d,openInfo:f,info:p,$:m,LF_COLOR:_,CLS:g,wake:u,flyTo:E,addLabel:b,labels:x}=n,D=R=>R/n.KX+121,A=R=>23.7-R/n.KZ,T={floatT:0,floatTarget:0},I=null,S=0,v=new sn({vertexColors:!0,emissive:new Ut("#222"),side:Ge});function P(R){let O=R?g[R]:0;if(I&&(e.remove(I),I.geometry.dispose(),I=null),S=O,T.floatT=0,T.floatTarget=O?1:0,!O)return;let B=r.index.array,st=[];for(let J=0;J<B.length;J+=3){let ut=B[J],xt=B[J+1],rt=B[J+2];o.cls[ut]===O&&o.cls[xt]===O&&o.cls[rt]===O&&st.push(ut,xt,rt)}let Q=new ge;Q.setAttribute("position",r.attributes.position),Q.setAttribute("normal",r.attributes.normal);let et=new Float32Array(o.elev.length*3),Mt=_[O],$=new Ut;for(let J=0;J<o.elev.length;J++)$.copy(Mt),O===5&&$.lerp(new Ut("#5a3a28"),Math.min(1,(o.elev[J]-1e3)/2900)*.4),et[J*3]=$.r,et[J*3+1]=$.g,et[J*3+2]=$.b;Q.setAttribute("color",new Me(et,3)),Q.setIndex(st),I=new te(Q,v),e.add(I)}let H=new Le;H.visible=!1,e.add(H),function(){var B,st;let R=[];for(let Q of Object.values(Fi))for(let et of Q)for(let Mt=0;Mt<et.length-1;Mt++){let[$,J]=et[Mt],[ut,xt]=et[Mt+1],rt=Math.max(1,Math.ceil(Math.hypot(l(ut)-l($),c(xt)-c(J))/1.5));for(let bt=0;bt<rt;bt++){let vt=$+(ut-$)*bt/rt,Wt=J+(xt-J)*bt/rt,L=$+(ut-$)*(bt+1)/rt,lt=J+(xt-J)*(bt+1)/rt,X=((B=h(vt,Wt))!=null?B:5)/1e3+.025,j=((st=h(L,lt))!=null?st:5)/1e3+.025;R.push(l(vt),X,c(Wt),l(L),j,c(lt))}}let O=new ge;O.setAttribute("position",new Qt(R,3)),H.add(new gs(O,new En({color:"#ffffff",transparent:!0,opacity:.9})))}();let z=new Le;z.visible=!1,t.add(z);let Y=lr.map(R=>{let O=R.path.map(([L,lt])=>new C(l(L),0,c(lt))),B=new Js(O),st=new Ut(R.c),Q=new en({color:st,transparent:!0,opacity:.55,depthWrite:!1}),et=new te(new Ro(B,80,2.2,8,!1),Q),Mt=9,$=new Ks(5,12,12);$.rotateX(Math.PI/2);let J=new sn({color:st,emissive:st.clone().multiplyScalar(.35),transparent:!0,opacity:1}),ut=new go($,J,Mt),xt=new te(new Ks(9,20,16).rotateX(Math.PI/2),J),rt=new Le;rt.add(et,ut,xt),z.add(rt);let bt=B.getPointAt(.5),vt=document.createElement("div");vt.className="lb current",vt.innerHTML=`<span class="cdot" style="background:${R.c}"></span>${R.n}<small>${R.kind}</small>`;let Wt=new hi(vt);return Wt.position.set(bt.x+14,8,bt.z),rt.add(Wt),x.current.push({o:Wt,el:vt,onClick:()=>Rt(R.id)}),{cu:R,curve:B,g:rt,tubeMat:Q,arrowMat:J,arrows:ut,head:xt,n:Mt,lift:0,lo:Wt}}),K=new ye,W=null,nt="winter",q=0;function ft(R){let O=R.curve.getLength(),B=new C;for(let et=0;et<R.n;et++){let Mt=(et+q*40/O)/R.n%1,$=R.curve.getPointAt(Mt),J=R.curve.getTangentAt(Mt,B);K.position.copy($),K.position.y+=2.5,K.lookAt($.x+J.x,$.y+2.5+J.y,$.z+J.z),K.updateMatrix(),R.arrows.setMatrixAt(et,K.matrix)}R.arrows.instanceMatrix.needsUpdate=!0;let st=R.curve.getPointAt(1),Q=R.curve.getTangentAt(1);R.head.position.set(st.x,2.5,st.z),R.head.lookAt(st.x+Q.x,2.5,st.z+Q.z)}function _t(){Y.forEach(R=>{let O=R.cu.seasons.includes(nt);R.g.visible=O,R.lo.visible=O;let B=W&&W!==R.cu.id;R.tubeMat.opacity=B?.12:.55,R.arrowMat.opacity=B?.25:1,R.lb=R.lo.element,R.lb.classList.toggle("sel",W===R.cu.id)}),document.querySelectorAll("#curList [data-cur]").forEach(R=>{let O=lr.find(B=>B.id===R.dataset.cur);R.classList.toggle("on",W===O.id),R.classList.toggle("off",!O.seasons.includes(nt))}),document.querySelectorAll("[data-season]").forEach(R=>R.classList.toggle("on",R.dataset.season===nt)),u(800)}function Rt(R){W=W===R?null:R;let O=lr.find(B=>B.id===R);if(O.seasons.includes(nt)||(nt=O.seasons[0]),_t(),W){f(`<div class="tag-lf" style="background:${O.c};color:#fff">\u{1F30A} \u6D0B\u6D41\u30FB${O.kind}</div><h3>${O.n}</h3><p>${d.level==="elem"?O.elem:O.junior}</p>
        <p class="muted">\u51FA\u73FE\u5B63\u7BC0\uFF1A${O.seasons.length===2?"\u4E00\u5E74\u56DB\u5B63":O.seasons[0]==="winter"?"\u51AC\u5B63":"\u590F\u5B63"}\u3002\u7BAD\u982D\u65B9\u5411\u5C31\u662F\u6D77\u6C34\u6D41\u52D5\u7684\u65B9\u5411\u3002</p>`);let B=O.path[Math.floor(O.path.length/2)];E(B[0],B[1],520,.75)}}function Gt(){m("#curList").innerHTML=lr.map(R=>`<button data-cur="${R.id}"><span class="dot" style="background:${R.c}"></span><b>${R.n}</b><small>${R.kind}\u30FB${R.seasons.length===2?"\u5168\u5E74":R.seasons[0]==="winter"?"\u51AC\u5B63":"\u590F\u5B63"}</small></button>`).join(""),m("#curList").querySelectorAll("[data-cur]").forEach(R=>R.onclick=()=>Rt(R.dataset.cur)),document.querySelectorAll("[data-season]").forEach(R=>R.onclick=()=>{nt=R.dataset.season,W&&!lr.find(O=>O.id===W).seasons.includes(nt)&&(W=null),_t()}),_t()}function re(R){z.visible=R,R?(Y.forEach(ft),_t()):(W=null,Y.forEach(O=>{O.lo.visible=!1}))}let Z=new Le;e.add(Z);let it=new te(new _s(1,16,12),new en({color:"#ff1744"}));it.visible=!1,t.add(it);let at=null,ht=null;function Dt(R,O){let st=[],Q=Math.hypot(l(O[0])-l(R[0]),c(O[1])-c(R[1]));for(let et=0;et<=240;et++){let Mt=et/240,$=R[0]+(O[0]-R[0])*Mt,J=R[1]+(O[1]-R[1])*Mt,ut=h($,J),xt=0;if(ut!=null){let rt=Math.round(($-a.lon0)/(a.lon1-a.lon0)*(o.nx-1)),bt=Math.round((a.lat1-J)/(a.lat1-a.lat0)*(o.nz-1));xt=o.cls[bt*o.nx+rt]}st.push({t:Mt,km:Q*Mt,lon:$,lat:J,h:ut==null?0:Math.max(0,ut),cls:xt})}return{pts:st,dist:Q}}function Nt(R,O,B){at={a:R,b:O,name:B,...Dt(R,O)},Z.clear();let st=at.pts.map(Ct=>new C(l(Ct.lon),Ct.h/1e3+.06,c(Ct.lat)));Z.add(new Pi(new ge().setFromPoints(st),new En({color:"#ff1744",linewidth:2})));let Q=(Ct,Ft)=>{let xe=document.createElement("div");xe.className="lb profpin",xe.textContent=Ft;let He=new hi(xe);He.position.set(l(Ct.lon),Ct.h/1e3+.2,c(Ct.lat)),Z.add(He)};Q(at.pts[0],"A"),Q(at.pts[at.pts.length-1],"B");let et=340,Mt=170,$=38,J=8,ut=10,xt=26,rt=Math.max(1e3,Math.ceil(Math.max(...at.pts.map(Ct=>Ct.h))/1e3)*1e3),bt=Ct=>$+Ct/at.dist*(et-$-J),vt=Ct=>ut+(1-Ct/rt)*(Mt-ut-xt),Wt={0:"#7fb3d5",1:"#6fcf97",2:"#f2c94c",3:"#f2994a",4:"#56ccf2",5:"#9c6b4a"},L="";for(let Ct=0;Ct<at.pts.length-1;Ct++){let Ft=at.pts[Ct],xe=at.pts[Ct+1];L+=`<path d="M${bt(Ft.km)},${vt(0)} L${bt(Ft.km)},${vt(Ft.h)} L${bt(xe.km)},${vt(xe.h)} L${bt(xe.km)},${vt(0)} Z" fill="${Wt[Ft.cls]}" stroke="${Wt[Ft.cls]}" stroke-width=".4"/>`}let lt="";for(let Ct=0;Ct<=rt;Ct+=1e3)lt+=`<line x1="${$}" x2="${et-J}" y1="${vt(Ct)}" y2="${vt(Ct)}" stroke="#0002"/><text x="${$-4}" y="${vt(Ct)+4}" font-size="11" text-anchor="end" fill="#345">${Ct.toLocaleString()}</text>`;let X=at.dist>100?20:10;for(let Ct=0;Ct<=at.dist;Ct+=X)lt+=`<text x="${bt(Ct)}" y="${Mt-8}" font-size="11" text-anchor="middle" fill="#345">${Ct}</text>`;let j=at.pts.reduce((Ct,Ft)=>Ft.h>Ct.h?Ft:Ct,at.pts[0]),mt=[1,2,3,4,5].filter(Ct=>at.pts.some(Ft=>Ft.cls===Ct)).map(Ct=>`<span><i style="background:${Wt[Ct]}"></i>${["","\u5E73\u539F","\u4E18\u9675","\u53F0\u5730","\u76C6\u5730","\u5C71\u5730"][Ct]}</span>`).join("");f(`<div class="tag-lf" style="background:#ff1744;color:#fff">\u{1F4C8} \u5730\u5F62\u5256\u9762\u5716</div><h3>${B}</h3>
      <svg id="profSvg" viewBox="0 0 ${et} ${Mt}" width="100%" style="touch-action:none">${lt}${L}
        <text x="${bt(j.km)}" y="${vt(j.h)-6}" font-size="11" text-anchor="middle" fill="#a0410d">\u25B2${Math.round(j.h).toLocaleString()}</text>
        <text x="4" y="12" font-size="10" fill="#345">\u516C\u5C3A</text><text x="${et-J}" y="${Mt-8}" font-size="10" text-anchor="end" fill="#345">\u516C\u91CC</text>
        <line id="profCur" x1="0" x2="0" y1="${ut}" y2="${Mt-xt}" stroke="#ff1744" stroke-width="1.5" visibility="hidden"/></svg>
      <div class="proflegend">${mt}</div>
      <p id="profRead" class="muted">\u5728\u5256\u9762\u5716\u4E0A\u6ED1\u52D5\u624B\u6307\uFF08\u6216\u6ED1\u9F20\uFF09\uFF0C\u5730\u5716\u4E0A\u7684\u7D05\u9EDE\u6703\u8DDF\u8457\u8D70\u3002\u5168\u9577\u7D04 <b>${Math.round(at.dist)} \u516C\u91CC</b>\uFF0C\u6700\u9AD8\u7D04 <b>${Math.round(j.h).toLocaleString()} \u516C\u5C3A</b>\u3002</p>
      <p class="muted">\u9AD8\u5EA6\u6709\u653E\u5927\uFF08\xD7${d.exag}\uFF09\uFF0C\u548C 3D \u5730\u5716\u4E00\u6A23\uFF1B\u771F\u5BE6\u7684\u5C71\u5761\u6C92\u6709\u9019\u9EBC\u9661\u3002</p>`);let pt=m("#profSvg"),Ot=Ct=>{let Ft=pt.getBoundingClientRect(),xe=(Ct.clientX-Ft.left)/Ft.width*et,He=Math.max(0,Math.min(at.dist,(xe-$)/(et-$-J)*at.dist)),on=at.pts[Math.round(He/at.dist*(at.pts.length-1))],zi=m("#profCur");zi.setAttribute("x1",bt(on.km)),zi.setAttribute("x2",bt(on.km)),zi.setAttribute("visibility","visible"),it.visible=!0,it.position.set(l(on.lon),on.h/1e3*e.scale.y+1.2,c(on.lat)),it.scale.setScalar(Math.max(1,i.position.distanceTo(it.position)/120)),m("#profRead").innerHTML=`\u8DDD\u96E2 A \u9EDE <b>${on.km.toFixed(1)} \u516C\u91CC</b>\uFF0C\u9AD8\u5EA6 <b>${Math.round(on.h).toLocaleString()} \u516C\u5C3A</b>\uFF08${["\u6D77\u9762","\u5E73\u539F","\u4E18\u9675","\u53F0\u5730","\u76C6\u5730","\u5C71\u5730"][on.cls]}\uFF09`,u()};pt.addEventListener("pointermove",Ot),pt.addEventListener("pointerdown",Ot);let ue=[(R[0]+O[0])/2,(R[1]+O[1])/2];E(ue[0],ue[1],Math.max(140,at.dist*1.6),.85),u(1500)}function kt(){Z.clear(),it.visible=!1,at=null}function he(){ht=[],kt(),m("#pickHint").hidden=!1,m("#pickHint").textContent="\u8ACB\u5728\u5730\u5716\u4E0A\u9EDE\u7B2C 1 \u500B\u9EDE\uFF08A\uFF09"}function $t(R){if(!ht)return!1;let O=n.renderer.domElement.getBoundingClientRect(),B=new ct((R.clientX-O.left)/O.width*2-1,-((R.clientY-O.top)/O.height)*2+1),st=new Oo;st.setFromCamera(B,i);let Q=st.intersectObject(n.mainMesh)[0]||st.intersectObject(n.seaMesh)[0];if(!Q)return!0;if(ht.push([D(Q.point.x),A(Q.point.z)]),ht.length===1)return m("#pickHint").textContent="\u5F88\u597D\uFF01\u518D\u9EDE\u7B2C 2 \u500B\u9EDE\uFF08B\uFF09",!0;let[et,Mt]=ht;return ht=null,m("#pickHint").hidden=!0,Nt(et,Mt,"\u81EA\u5DF1\u756B\u7684\u5256\u9762"),!0}let yt={group:new Le,t:1,playing:!1,shake:0};yt.group.visible=!1,t.add(yt.group);let N=[],Ne=R=>N.forEach(O=>{O.visible=R}),Xt=[[122.3,24.6],[121.85,24.35],[121.6,23.97],[121.48,23.7],[121.36,23.4],[121.24,23.15],[121.15,22.9],[121.1,22.6],[121,21.9],[120.8,21]];(function(){let O=Xt.map(([J,ut])=>[l(J),c(ut)]),B=(J,ut)=>{let xt=new Qs(J.map(([bt,vt])=>new ct(bt,-vt))),rt=new Co(xt);return rt.rotateX(-Math.PI/2),new te(rt,new en({color:ut,transparent:!0,opacity:.5,depthWrite:!1,side:Ge}))},st=[[l(116),c(27.5)],[O[0][0],c(27.5)],...O,[O[O.length-1][0],c(19.5)],[l(116),c(19.5)]],Q=[[O[0][0],c(27.5)],[l(125.5),c(27.5)],[l(125.5),c(19.5)],[O[O.length-1][0],c(19.5)],...O.slice().reverse()];yt.eu=B(st,"#43a047"),yt.ph=B(Q,"#8e24aa"),yt.eu.position.y=.4,yt.ph.position.y=.5,yt.group.add(yt.eu,yt.ph);let et=Xt.map(([J,ut])=>new C(l(J),1.2,c(ut))),Mt=new Pi(new ge().setFromPoints(et),new Io({color:"#d50000",dashSize:6,gapSize:4}));Mt.computeLineDistances(),yt.group.add(Mt),yt.arrows=[],[[122.6,22.6],[122.9,23.6],[122.4,21.6]].forEach(([J,ut])=>{let xt=new Bo(new C(-.8,0,-.6).normalize(),new C(l(J),3,c(ut)),55,9315498,18,12);yt.group.add(xt),yt.arrows.push(xt)});let $=(J,ut,xt,rt)=>{let bt=document.createElement("div");bt.className="lb plate "+rt,bt.innerHTML=J;let vt=new hi(bt);return vt.position.set(l(ut),4,c(xt)),vt.visible=!1,yt.group.add(vt),N.push(vt),vt};yt.lEu=$("\u6B50\u4E9E\u677F\u584A",118.9,22.3,"eu"),yt.lPh=$("\u83F2\u5F8B\u8CD3\u6D77\u677F\u584A<small>\u5F80\u897F\u5317\u63A8\u64E0 \u2196</small>",123,22.4,"ph"),$("\u677F\u584A\u4EA4\u754C\uFF08\u82B1\u6771\u7E31\u8C37\uFF09",121.75,22.9,"bd")})();let Yt=[[0,"\u5F88\u4E45\u5F88\u4E45\u4EE5\u524D\uFF08\u7D04\u5E7E\u767E\u842C\u5E74\u524D\uFF09\uFF0C\u9019\u88E1\u9084\u662F\u4E00\u7247\u6D77\uFF0C\u6D77\u5E95\u5806\u7A4D\u4E86\u539A\u539A\u7684\u6CE5\u6C99\u3002"],[.2,"\u6771\u908A\u7684\u83F2\u5F8B\u8CD3\u6D77\u677F\u584A\u6162\u6162\u5F80\u897F\u5317\u79FB\u52D5\uFF0C\u63A8\u64E0\u897F\u908A\u7684\u6B50\u4E9E\u677F\u584A\u3002"],[.45,"\u6D77\u5E95\u7684\u5CA9\u5C64\u88AB\u64E0\u5F97\u76BA\u8D77\u4F86\u3001\u62AC\u5347\uFF0C\u81FA\u7063\u6162\u6162\u9732\u51FA\u6D77\u9762\u3002"],[.7,"\u64E0\u58D3\u8D8A\u4E45\uFF0C\u5C71\u8D8A\u9577\u8D8A\u9AD8\uFF0C\u5F62\u6210\u4E2D\u592E\u5C71\u8108\u7B49\u300C\u65B0\u8936\u66F2\u5C71\u8108\u300D\u3002"],[.95,"\u73FE\u5728\uFF1A\u677F\u584A\u9084\u5728\u64E0\u58D3\uFF0C\u6240\u4EE5\u81FA\u7063\u5730\u9707\u5F88\u591A\uFF0C\u5C71\u4E5F\u9084\u5728\u6162\u6162\u9577\u9AD8\uFF01"]],Lt=[[0,"\u7D04\u6578\u767E\u842C\u5E74\u524D\uFF0C\u81FA\u7063\u6240\u5728\u4F4D\u7F6E\u662F\u5927\u9678\u68DA\u908A\u7DE3\u7684\u6DFA\u6D77\uFF0C\u5806\u7A4D\u4E86\u5927\u91CF\u6C89\u7A4D\u7269\u3002"],[.2,"\u83F2\u5F8B\u8CD3\u6D77\u677F\u584A\u5411\u897F\u5317\u79FB\u52D5\uFF08\u6BCF\u5E74\u50C5\u6578\u516C\u5206\uFF09\uFF0C\u8207\u6B50\u4E9E\u677F\u584A\u78B0\u649E\uFF1B\u5317\u908A\u83F2\u5F8B\u8CD3\u6D77\u677F\u584A\u96B1\u6C92\u5230\u6B50\u4E9E\u677F\u584A\u4E4B\u4E0B\uFF0C\u5357\u908A\u5247\u662F\u6B50\u4E9E\u677F\u584A\u96B1\u6C92\u3002"],[.45,"\u6C89\u7A4D\u5CA9\u5C64\u53D7\u64E0\u58D3\u8936\u66F2\u3001\u65B7\u88C2\u4E26\u62AC\u5347\u51FA\u6D77\u9762\u2014\u2014\u9019\u5C31\u662F\u300C\u84EC\u840A\u9020\u5C71\u904B\u52D5\u300D\u3002"],[.7,"\u6301\u7E8C\u64E0\u58D3\u5F62\u6210\u9AD8\u8073\u7684\u65B0\u8936\u66F2\u5C71\u8108\uFF1B\u6D77\u5CB8\u5C71\u8108\u539F\u5C6C\u83F2\u5F8B\u8CD3\u6D77\u677F\u584A\u4E0A\u7684\u706B\u5C71\u5CF6\u5F27\uFF0C\u82B1\u6771\u7E31\u8C37\u5373\u70BA\u677F\u584A\u4EA4\u754C\u3002"],[.95,"\u9020\u5C71\u904B\u52D5\u4ECD\u5728\u9032\u884C\uFF1A\u5730\u9707\u983B\u7E41\u3001\u5C71\u8108\u6301\u7E8C\u62AC\u5347\uFF0C\u540C\u6642\u4E5F\u53D7\u4FB5\u8755\u4F5C\u7528\uFF08\u5167\u71DF\u529B\u8207\u5916\u71DF\u529B\u540C\u6642\u4F5C\u7528\uFF09\u3002"]];function ee(){let R=yt.t;e.scale.y=Math.max(.02,d.exag*R);let O=(1-R)*60;yt.ph.position.x=O*.8,yt.ph.position.z=O*.6;let B=(d.level==="elem"?Yt:Lt).filter(Mt=>Mt[0]<=R+1e-6).pop(),st=m("#plateStage");st&&(st.textContent=B[1]);let Q=m("#plateSlider");Q&&!Q.matches(":active")&&(Q.value=Math.round(R*100));let et=m("#plateYear");et&&(et.textContent=R>=.999?"\u73FE\u5728":R<.05?"\u6578\u767E\u842C\u5E74\u524D":`\u64E0\u58D3\u4E2D\u2026${Math.round(R*100)}%`)}function It(){kt(),yt.group.visible=!0,Ne(!0),yt.t=0,yt.playing=!0,ee(),f(`<div class="tag-lf" style="background:#8e24aa;color:#fff">\u{1F30B} \u677F\u584A\u904B\u52D5</div><h3>\u81FA\u7063\u662F\u600E\u9EBC\u300C\u64E0\u300D\u51FA\u4F86\u7684\uFF1F</h3>
      <p id="plateYear" style="font-weight:800;color:#8e24aa"></p>
      <p id="plateStage"></p>
      <input type="range" id="plateSlider" min="0" max="100" value="0" aria-label="\u6642\u9593">
      <div class="row"><button class="btn-sm" id="platePlay">\u23F8 \u66AB\u505C</button><button class="btn-sm" id="plateQuake">\u{1FAE8} \u5730\u9707\uFF01</button><button class="btn-sm" id="plateClose">\u2715 \u7D50\u675F\u52D5\u756B</button></div>
      <p class="muted">\u7D2B\u8272\u662F\u83F2\u5F8B\u8CD3\u6D77\u677F\u584A\u3001\u7DA0\u8272\u662F\u6B50\u4E9E\u677F\u584A\uFF0C\u7D05\u8272\u865B\u7DDA\u662F\u677F\u584A\u4EA4\u754C\uFF08\u82B1\u6771\u7E31\u8C37\uFF09\u3002\u8AB2\u672C\uFF1A\u81FA\u7063\u4F4D\u65BC\u5169\u677F\u584A\u7684\u63A5\u89F8\u5E36\uFF0C\u677F\u584A\u64E0\u58D3\u5F62\u6210\u300C\u65B0\u8936\u66F2\u5C71\u8108\u300D\u3002</p>`),ee(),m("#plateSlider").oninput=R=>{yt.playing=!1,m("#platePlay").textContent="\u25B6 \u64AD\u653E",yt.t=+R.target.value/100,ee(),u()},m("#platePlay").onclick=()=>{yt.t>=1&&(yt.t=0),yt.playing=!yt.playing,m("#platePlay").textContent=yt.playing?"\u23F8 \u66AB\u505C":"\u25B6 \u64AD\u653E",u()},m("#plateQuake").onclick=()=>{yt.shake=1.2,u(1500)},m("#plateClose").onclick=y,w()}function w(){E(121.1,23.4,620,.95)}function y(){yt.group.visible&&(yt.group.visible=!1,Ne(!1),yt.playing=!1,yt.t=1,e.scale.y=d.exag,p.classList.remove("show"),u())}function k(R){let O=!1;if(I||T.floatT>0){T.floatT+=(T.floatTarget-T.floatT)*Math.min(1,R*4),!I&&T.floatT<.002&&(T.floatT=0);let B=Math.sin(performance.now()/600)*1.2;I&&(I.position.y=(T.floatT*45+B*2*T.floatT)/e.scale.y),O=!0}if(z.visible&&(q+=R,Y.forEach(B=>{B.g.visible&&ft(B);let st=W===B.cu.id?10:0;B.lift+=(st-B.lift)*Math.min(1,R*5),B.g.position.y=B.lift}),O=!0),yt.group.visible){if(yt.playing&&(yt.t=Math.min(1,yt.t+R/14),ee(),yt.t>=1)){yt.playing=!1,yt.shake=1.2;let B=m("#platePlay");B&&(B.textContent="\u25B6 \u91CD\u65B0\u64AD\u653E")}O=!0}if(yt.shake>0){yt.shake-=R;let B=Math.max(0,yt.shake)*2.2;i.position.x+=(Math.random()-.5)*B,i.position.y+=(Math.random()-.5)*B*.6,O=!0}return O}return{setFloat:P,countyLines:H,showCurrents:re,renderCurrents:Gt,drawProfile:Nt,clearProfile:kt,startPick:he,onTap:$t,openPlates:It,closePlates:y,tick:k,isPlates:()=>yt.group.visible}}var Tg=121,ed=23.7,Ts=111.32*Math.cos(ed*Math.PI/180),fr=110.6,Zt=n=>(n-Tg)*Ts,jt=n=>-(n-ed)*fr,St=n=>document.querySelector(n);function Rn(n,t){let e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Bc(n,t){let e=Math.floor(n),i=Math.floor(t),s=n-e,r=t-i,o=s*s*(3-2*s),a=r*r*(3-2*r),l=Rn(e,i),c=Rn(e+1,i),h=Rn(e,i+1),d=Rn(e+1,i+1);return(l+(c-l)*o+(h-l)*a+(l-c-h+d)*o*a)*2-1}function cr(n,t){let e=0,i=.5,s=1;for(let r=0;r<5;r++)e+=i*Bc(n*s,t*s),s*=2.03,i*=.5;return e}function Ag(n,t){let e=0,i=.5,s=1;for(let r=0;r<4;r++)e+=i*(1-Math.abs(Bc(n*s+9,t*s+3))),s*=2.1,i*=.5;return e}var ta=(n,t,e)=>{let i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)};function ea(n,t,e){let i=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){let[o,a]=e[s],[l,c]=e[r];a>t!=c>t&&n<(l-o)*(t-a)/(c-a)+o&&(i=!i)}return i}function Cg(n,t,e,i,s,r){let o=s-e,a=r-i,l=o*o+a*a,c=l?((n-e)*o+(t-i)*a)/l:0;c=Math.max(0,Math.min(1,c));let h=e+c*o-n,d=i+c*a-t;return[Math.sqrt(h*h+d*d),c]}function Nc(n,t,e){let i=1e9,s=0;for(let r=0;r<e.length-1;r++){let[o,a]=Cg(n,t,e[r][0],e[r][1],e[r+1][0],e[r+1][1]);o<i&&(i=o,s=e[r][2]+(e[r+1][2]-e[r][2])*a)}return[i,s]}function nd(n,t,e){let i=new Float32Array(t*e),s=1e6,r=1.4142;for(let o=0;o<i.length;o++)i[o]=n[o]?s:0;for(let o=0;o<e;o++)for(let a=0;a<t;a++){let l=o*t+a;if(!i[l])continue;let c=i[l];a>0?c=Math.min(c,i[l-1]+1):c=Math.min(c,1),o>0?(c=Math.min(c,i[l-t]+1),a>0&&(c=Math.min(c,i[l-t-1]+r)),a<t-1&&(c=Math.min(c,i[l-t+1]+r))):c=Math.min(c,1),i[l]=c}for(let o=e-1;o>=0;o--)for(let a=t-1;a>=0;a--){let l=o*t+a;if(!i[l])continue;let c=i[l];a<t-1?c=Math.min(c,i[l+1]+1):c=Math.min(c,1),o<e-1?(c=Math.min(c,i[l+t]+1),a<t-1&&(c=Math.min(c,i[l+t+1]+r)),a>0&&(c=Math.min(c,i[l+t-1]+r))):c=Math.min(c,1),i[l]=c}return i}function Rg(n,t,e,i){if(i<1)return n;let s=Float32Array.from(n),r=new Float32Array(n.length);for(let o=0;o<2;o++){for(let a=0;a<e;a++)for(let l=0;l<t;l++){let c=0,h=0;for(let d=-i;d<=i;d++){let f=l+d;f>=0&&f<t&&(c+=s[a*t+f],h++)}r[a*t+l]=c/h}for(let a=0;a<e;a++)for(let l=0;l<t;l++){let c=0,h=0;for(let d=-i;d<=i;d++){let f=a+d;f>=0&&f<e&&(c+=r[f*t+l],h++)}s[a*t+l]=c/h}}return s}var Zn={sea:0,plain:1,hill:2,tableland:3,basin:4,mountain:5},Pg=["sea","plain","hill","tableland","basin","mountain"];function id(n,t){return t==="tableland"?Zn.tableland:t==="basin"?Zn.basin:t==="plain"||n<100?Zn.plain:n<1e3?Zn.hill:Zn.mountain}function Ig(n,t){let e=rr[0].pts,i=e[0][0];for(let r=0;r<e.length-1;r++){let o=e[r],a=e[r+1];if(t<=o[1]&&t>=a[1]){i=o[0]+(a[0]-o[0])*(o[1]-t)/(o[1]-a[1]);break}}t<21.95&&(i=121);let s=24.7-(n-120.88)*.81;return t>s&&!(t<24.5&&n>i)||n>i&&t>=24.35?"N":n>i&&t>22.4?"E":t>23.56-(n-120.15)*.15?"C":"S"}var di=window.matchMedia("(pointer: coarse)").matches||window.innerWidth<=900,As=!1;try{As=localStorage.getItem("tw3d_saver")==="1"}catch{}var qt={lon0:119.98,lon1:122.06,lat0:21.86,lat1:25.34,step:As?1.4:di?1.1:.8};qt.nx=Math.round((qt.lon1-qt.lon0)*Ts/qt.step)+1;qt.nz=Math.round((qt.lat1-qt.lat0)*fr/qt.step)+1;function Lg(){let{nx:n,nz:t}=qt,e=n*t,i=new Float32Array(e),s=new Float32Array(e),r=new Uint8Array(e),o=Ic.main;for(let m=0;m<t;m++)for(let _=0;_<n;_++){let g=m*n+_,u=qt.lon0+(qt.lon1-qt.lon0)*_/(n-1),E=qt.lat1-(qt.lat1-qt.lat0)*m/(t-1);i[g]=u,s[g]=E,r[g]=ea(u,E,o)?1:0}let a=nd(r,n,t),l=rr.map(m=>({w:m.w,pts:m.pts.map(_=>[Zt(_[0]),jt(_[1]),_[2]])})),c=qu.map(m=>({w:m.w,pts:m.pts.map(_=>[Zt(_[0]),jt(_[1]),_[2]])})),h=new Float32Array(e);for(let m=0;m<e;m++){if(!r[m]){h[m]=-60;continue}let _=Zt(i[m]),g=jt(s[m]),u=0;for(let T of l){let[I,S]=Nc(_,g,T.pts),v=I/T.w;v>4||(u=Math.max(u,S*(.78*Math.exp(-v*v)+.22*Math.exp(-v*v/5))))}for(let T of c){let[I,S]=Nc(_,g,T.pts),v=I/T.w;v>4||(u=Math.max(u,S*Math.exp(-v*v)))}for(let T of jo){let I=Math.hypot(_-Zt(T.lon),g-jt(T.lat))/T.r;u=Math.max(u,T.h*Math.exp(-I*I*1.6))}let E=u,b=cr(_*.06,g*.06),x=Ag(_*.09,g*.09),D=ta(150,2500,u);u=u*(1+.16*b)+u*D*.18*(x-.5)+25*b,u=Math.min(u,E*1.02+20,3952);let A=a[m]*qt.step;u*=ta(0,3.2,A),u=Math.max(u,Math.min(30,1.5+A*1.2)),h[m]=u}let d=new Int8Array(e).fill(-1);or.forEach((m,_)=>{let g=new Float32Array(e),u=m.ell,E=m.poly,b=m.line&&m.line.map(x=>[Zt(x[0]),jt(x[1]),0]);for(let x=0;x<e;x++){if(!r[x])continue;let D=i[x],A=s[x],T=!1;if(E)T=ea(D,A,E);else if(u){let I=(Zt(D)-Zt(u[0]))/u[2],S=(jt(A)-jt(u[1]))/u[3];T=I*I+S*S<=1}else b&&(T=Nc(Zt(D),jt(A),b)[0]<=m.lw);T&&(g[x]=1,d[x]=_)}g=Rg(g,n,t,m.blur);for(let x=0;x<e;x++){if(!r[x]||g[x]<=0)continue;let D=Zt(i[x]),A=jt(s[x]),T=m.h;m.type==="plain"?T=Math.min(h[x],m.h*(.35+.65*Math.min(1,a[x]*qt.step/18))+6*cr(D*.2,A*.2)):m.type==="tableland"?T=m.h+18*cr(D*.3,A*.3):T=m.h+8*cr(D*.3,A*.3),h[x]=h[x]*(1-g[x])+T*g[x]}});let f=new Uint8Array(e),p=new Array(e);for(let m=0;m<e;m++){if(!r[m]){f[m]=0;continue}f[m]=id(h[m],d[m]>=0?or[d[m]].type:null),p[m]=Ig(i[m],s[m])}return{nx:n,nz:t,lonA:i,latA:s,mask:r,elev:h,cls:f,reg:p,zoneOf:d}}function sd(n,t,e,i,s){let r=n*t,o=new Float32Array(r*3);for(let h=0;h<t;h++)for(let d=0;d<n;d++){let f=h*n+d;o[f*3]=e(d),o[f*3+1]=s[f]/1e3,o[f*3+2]=i(h)}let a=new Uint32Array((n-1)*(t-1)*6),l=0;for(let h=0;h<t-1;h++)for(let d=0;d<n-1;d++){let f=h*n+d,p=f+1,m=f+n,_=m+1;a[l++]=f,a[l++]=m,a[l++]=p,a[l++]=p,a[l++]=m,a[l++]=_}let c=new ge;return c.setAttribute("position",new Me(o,3)),c.setAttribute("color",new Me(new Float32Array(r*3),3)),c.setIndex(new Me(a,1)),c.computeVertexNormals(),c}function Dg(n,t,e,i,s){let r=[];for(let o=0;o<28;o++){let a=o/28*Math.PI*2,l=1+.18*Bc(Math.cos(a)*2+s,Math.sin(a)*2+s);r.push([n+Math.cos(a)*e*l/Ts,t+Math.sin(a)*i*l/fr])}return r}function Ug(n){let t=n.coast?n.coast.map(i=>Ic[i]):n.ell.map((i,s)=>Dg(i[0],i[1],i[2],i[3],s*7+n.h)),e=[];return t.forEach((i,s)=>{let r=[1e9,1e9],o=[-1e9,-1e9];i.forEach(([S,v])=>{r[0]=Math.min(r[0],S),r[1]=Math.min(r[1],v),o[0]=Math.max(o[0],S),o[1]=Math.max(o[1],v)});let a=.01;r[0]-=a,r[1]-=a,o[0]+=a,o[1]+=a;let l=(o[0]-r[0])*Ts,c=(o[1]-r[1])*fr,h=Math.max(.08,Math.max(l,c)/110),d=Math.round(l/h)+1,f=Math.round(c/h)+1,p=d*f,m=new Uint8Array(p),_=new Float32Array(p),g=new Float32Array(p);for(let S=0;S<f;S++)for(let v=0;v<d;v++){let P=S*d+v,H=r[0]+(o[0]-r[0])*v/(d-1),z=o[1]-(o[1]-r[1])*S/(f-1);_[P]=H,g[P]=z,m[P]=ea(H,z,i)?1:0}let u=nd(m,d,f),E=1;for(let S=0;S<p;S++)E=Math.max(E,u[S]);let b=s===0?1:.7,x=new Float32Array(p),D=new Uint8Array(p);for(let S=0;S<p;S++){if(!m[S]){x[S]=-40;continue}let v=u[S]/E,P=cr(_[S]*300,g[S]*300),H;n.profile==="cone"?H=Math.pow(v,.85)*(1+.2*P):n.profile==="hill"?H=Math.pow(v,.7)*(.7+.45*(P+.5)):n.profile==="mesa"?H=ta(0,.18,v)*(.85+.15*P):H=ta(0,.3,v),x[S]=Math.max(2,n.h*b*Math.max(0,H)),D[S]=n.profile==="mesa"&&n.id==="penghu"?Zn.tableland:id(x[S],null)}let A=Zt(r[0]),T=jt(o[1]),I=sd(d,f,S=>A+S*h*(l/((d-1)*h)),S=>T+S*h*(c/((f-1)*h)),x);e.push({g:I,N:p,elev:x,cls:D,mask:m,region:n.region,isl:n})}),e}var gn=n=>new Ut(n),rd={1:gn(De.plain.color),2:gn(De.hill.color),3:gn(De.tableland.color),4:gn(De.basin.color),5:gn(De.mountain.color)},Cn=[[0,"#3c9a54"],[100,"#8cc56a"],[300,"#d7d97f"],[700,"#e3b866"],[1e3,"#d4924f"],[2e3,"#a5643b"],[3e3,"#7a4630"],[3600,"#eae6e1"],[4e3,"#ffffff"]].map(([n,t])=>[n,gn(t)]);function Ng(n,t){for(let e=0;e<Cn.length-1;e++)if(n<=Cn[e+1][0]){let i=Math.max(0,(n-Cn[e][0])/(Cn[e+1][0]-Cn[e][0]));return t.copy(Cn[e][1]).lerp(Cn[e+1][1],i)}return t.copy(Cn[Cn.length-1][1])}var Fg=gn("#1d4f7a"),be=null,tt={mode:"terrain",color:"landform",level:"elem",exag:6,focus:null,flood:0,raining:!1,rising:!1,month:7,city:"kaohsiung"},bs=St("#scene"),xn=new uo({antialias:!As,powerPreference:"low-power"});xn.setPixelRatio(Math.min(As?1:di?1.5:2,window.devicePixelRatio));bs.appendChild(xn.domElement);var oa=new $o;oa.domElement.className="labels";bs.appendChild(oa.domElement);var Pn=new po;Pn.background=gn("#bfe3f7");Pn.fog=new fo("#bfe3f7",700,1700);var Ee=new Be(42,1,1,5e3),le=new qo(Ee,xn.domElement);xn.domElement.style.touchAction="none";le.touches={ONE:wn.ROTATE,TWO:wn.DOLLY_PAN};le.screenSpacePanning=!1;le.zoomSpeed=1.2;["gesturestart","gesturechange","gestureend"].forEach(n=>document.addEventListener(n,t=>t.preventDefault(),{passive:!1}));document.addEventListener("touchmove",n=>{n.touches.length>1&&n.preventDefault()},{passive:!1});function od(n){Se=null;let t=Ee.position.clone().sub(le.target),e=Go.clamp(t.length()*n,le.minDistance,le.maxDistance);Ee.position.copy(le.target).add(t.setLength(e))}St("#zoomIn").onclick=()=>od(.7);St("#zoomOut").onclick=()=>od(1/.7);le.rotateSpeed=.6;le.addEventListener("start",()=>{Se=null});var ze={x:0,y:0,t:0,n:0};xn.domElement.addEventListener("pointerdown",n=>{ze.n++,ze.n===1?(ze.x=n.clientX,ze.y=n.clientY,ze.t=performance.now()):ze.t=0});xn.domElement.addEventListener("pointerup",n=>{if(ze.n=Math.max(0,ze.n-1),!ze.t||performance.now()-ze.t>450||Math.hypot(n.clientX-ze.x,n.clientY-ze.y)>8||(ze.t=0,be&&be.onTap(n)))return;let t=["current","hakka","tribe","island","sea","lf","peak","city","spot"];for(let e of t)for(let i of Ye[e]){if(!i.onClick||!i.o.visible||i.el.style.display==="none"||i.el.classList.contains("hid"))continue;let s=i.el.getBoundingClientRect();if(n.clientX>=s.left-4&&n.clientX<=s.right+4&&n.clientY>=s.top-4&&n.clientY<=s.bottom+4){i.onClick();return}}});xn.domElement.addEventListener("pointercancel",()=>{ze.n=0,ze.t=0});le.enableDamping=!0;le.maxPolarAngle=Math.PI*.49;le.minDistance=8;le.maxDistance=1400;Pn.add(new Uo("#ffffff","#4b6b3a",1.1));var ad=new No("#fff6e0",2.2);ad.position.set(-300,400,200);Pn.add(ad);var rn=new Le;rn.scale.y=tt.exag;Pn.add(rn);var aa=new te(new Ri(1600,1400),new sn({color:"#4a9fd8"}));aa.rotation.x=-Math.PI/2;aa.position.set(-150,0,-20);rn.add(aa);var ld=new sn({vertexColors:!0}),At=Lg(),na=sd(At.nx,At.nz,n=>Zt(qt.lon0)+n*(Zt(qt.lon1)-Zt(qt.lon0))/(At.nx-1),n=>jt(qt.lat1)+n*(jt(qt.lat0)-jt(qt.lat1))/(At.nz-1),At.elev),cd=new te(na,ld);rn.add(cd);var hd=[];$n.forEach((n,t)=>n.zones.forEach(([e,i,s])=>hd.push([Zt(e),jt(i),s,t])));function Og(n,t,e){let i=-1,s=1e9;for(let[r,o,a,l]of hd){let c=Math.hypot(n-r,t-o)/a;c<s&&(s=c,i=l)}return s<1||s<2.4&&e>500||s<1.9&&$n[i].plains?i:-1}At.tribe=new Int8Array(At.elev.length).fill(-1);for(let n=0;n<At.elev.length;n++)At.mask[n]&&(At.tribe[n]=Og(Zt(At.lonA[n]),jt(At.latA[n]),At.elev[n]));var ur=Object.keys(Fi),Bg=ur.map(n=>{let t=[1e9,1e9,-1e9,-1e9];return Fi[n].forEach(e=>e.forEach(([i,s])=>{t[0]=Math.min(t[0],i),t[1]=Math.min(t[1],s),t[2]=Math.max(t[2],i),t[3]=Math.max(t[3],s)})),t});function ud(n,t){for(let e=0;e<ur.length;e++){let i=Bg[e];if(!(n<i[0]||n>i[2]||t<i[1]||t>i[3])&&Fi[ur[e]].some(s=>ea(n,t,s)))return e}return-1}var kg={\u57FA\u9686\u5E02:"N",\u53F0\u5317\u5E02:"N",\u65B0\u5317\u5E02:"N",\u6843\u5712\u5E02:"N",\u65B0\u7AF9\u5E02:"N",\u65B0\u7AF9\u7E23:"N",\u5B9C\u862D\u7E23:"N",\u82D7\u6817\u7E23:"C",\u53F0\u4E2D\u5E02:"C",\u5F70\u5316\u7E23:"C",\u5357\u6295\u7E23:"C",\u96F2\u6797\u7E23:"C",\u5609\u7FA9\u5E02:"S",\u5609\u7FA9\u7E23:"S",\u53F0\u5357\u5E02:"S",\u9AD8\u96C4\u5E02:"S",\u5C4F\u6771\u7E23:"S",\u6F8E\u6E56\u7E23:"S",\u82B1\u84EE\u7E23:"E",\u53F0\u6771\u7E23:"E",\u91D1\u9580\u7E23:"O",\u9023\u6C5F\u7E23:"O"};At.county=new Int8Array(At.elev.length).fill(-1);for(let n=0;n<At.elev.length;n++)At.mask[n]&&(At.county[n]=ud(At.lonA[n],At.latA[n]));for(let n=0;n<4;n++)for(let t=0;t<At.elev.length;t++)if(!(!At.mask[t]||At.county[t]>=0))for(let e of[1,-1,At.nx,-At.nx]){let i=t+e;if(i>=0&&i<At.county.length&&At.county[i]>=0){At.county[t]=At.county[i];break}}for(let n=0;n<At.elev.length;n++)At.county[n]>=0&&(At.reg[n]=kg[ur[At.county[n]]]);var dd=[];Tn.forEach(n=>Ug(n).forEach(t=>{t.tribe=$n.findIndex(e=>e.island===n.id),t.county=ud(n.lon,n.lat),dd.push(t),rn.add(new te(t.g,ld))}));Tn.filter(n=>n.atoll).forEach(n=>{let[t,e,i]=n.atoll,s=new te(new Ao(i-1.3,i,64),new en({color:"#8ff0e6",transparent:!0,opacity:.85,side:Ge}));s.rotation.x=-Math.PI/2,s.position.set(Zt(t),.004,jt(e)),rn.add(s);let r=new te(new wo(i-1.3,64),new en({color:"#5ec8e0",transparent:!0,opacity:.6}));r.rotation.x=-Math.PI/2,r.position.set(Zt(t),.003,jt(e)),rn.add(r)});var Es=new te(new Ri(1600,1400),new Po({color:"#2f7fe0",transparent:!0,opacity:.55,shininess:80,depthWrite:!1}));Es.rotation.x=-Math.PI/2;Es.position.set(-150,0,-20);Es.visible=!1;rn.add(Es);var ui=new Ut,Ko=new Ut,zg={plain:1,hill:2,tableland:3,basin:4,mountain:5},Ju=gn("#e9e4d4"),fd=gn("#b5dd8c"),pd=gn("#1b5e20");function Ku(n,t,e,i,s=-1,r=-1){if(!t)return i.copy(Fg);if(tt.color==="hakka"){let o=r>=0?An.top5[ur[r]]:null;return o?i.copy(fd).lerp(pd,Math.min(1,Math.max(0,(o-28)/40))):i.copy(Ju),i.multiplyScalar(.84+.28*Math.min(1,n/3200)),i}if(tt.color==="tribe")return s>=0&&(!tt.tribeFocus||$n[s].id===tt.tribeFocus)?i.set($n[s].c):i.copy(Ju),i.multiplyScalar(.82+.3*Math.min(1,n/3200)),i;if(tt.color==="height")Ng(n,i);else if(tt.color==="region")i.set(ar[e].color),i.lerp(Ko.set("#ffffff"),Math.min(.35,n/9e3)),i.multiplyScalar(.85+.25*Math.min(1,n/3e3));else{i.copy(rd[t]);let o=t===5?Math.min(1,(n-1e3)/2900):0;i.lerp(Ko.set(o>.9?"#ffffff":"#5a3a28"),o*.45)}return tt.focus&&zg[tt.focus]!==t?i.lerp(Ko.set("#cfcfcf"),.78):tt.focus&&tt.color==="landform"&&tt.mode==="terrain"&&i.lerp(Ko.set("#3a3a3a"),.7),i}function ia(){let n=na.attributes.color.array;for(let t=0;t<At.elev.length;t++)Ku(At.elev[t],At.cls[t],At.reg[t],ui,At.tribe[t],At.county[t]),n[t*3]=ui.r,n[t*3+1]=ui.g,n[t*3+2]=ui.b;na.attributes.color.needsUpdate=!0,dd.forEach(t=>{let e=t.g.attributes.color.array;for(let i=0;i<t.N;i++)Ku(t.elev[i],t.mask[i]?t.cls[i]:0,t.region,ui,t.tribe,t.county),e[i*3]=ui.r,e[i*3+1]=ui.g,e[i*3+2]=ui.b;t.g.attributes.color.needsUpdate=!0})}function In(n,t){let e=Math.round((n-qt.lon0)/(qt.lon1-qt.lon0)*(At.nx-1)),i=Math.round((qt.lat1-t)/(qt.lat1-qt.lat0)*(At.nz-1));if(e<0||i<0||e>=At.nx||i>=At.nz)return null;let s=i*At.nx+e;return At.mask[s]?At.elev[s]:null}function md(n,t){let e=null,i=1e9;return Tn.forEach(s=>{let r=Math.hypot(Zt(s.lon)-Zt(n),jt(s.lat)-jt(t));r<i&&(i=r,e=s)}),i<30?e:null}function gd(n,t){let e=In(n,t);if(e!=null)return e;let i=md(n,t);return i?Math.min(i.h,i.h*.5+10):5}var Ye={lf:[],peak:[],spot:[],island:[],ruler:[],city:[],tribe:[],sea:[],current:[],hakka:[]};function Ue(n,t,e,i,s,r,o){let a=document.createElement("div");a.className="lb "+r,a.innerHTML=t,o&&a.classList.add("clickable");let l=new hi(a);return l.position.set(Zt(e),s/1e3,jt(i)),rn.add(l),Ye[n].push({o:l,el:a,hM:s,onClick:o}),{o:l,el:a}}var Hg={plain:"plain",basin:"basin",tableland:"tableland"};rr.forEach(n=>Ue("lf",n.name,n.label[0],n.label[1],(In(...n.label)||2e3)+400,"lf lf-mountain",()=>pr("mountain",n.name)));jo.forEach(n=>Ue("lf",n.name,n.lon+.03,n.lat+.03,n.h+300,"lf lf-mountain",()=>pr("mountain",n.name)));Lc.forEach(n=>Ue("lf",n.name,n.lon,n.lat,(In(n.lon,n.lat)||300)+300,"lf lf-hill",()=>pr("hill",n.name)));or.forEach(n=>Ue("lf",n.name,n.label[0],n.label[1],(In(...n.label)||n.h)+250,"lf lf-"+Hg[n.type],()=>pr(n.type,n.name)));$u.forEach(n=>Ue("peak",`\u25B2 ${n.name}<small>${n.h.toLocaleString()} \u516C\u5C3A</small>`,n.lon,n.lat,(In(n.lon,n.lat)||n.h)+120,"peak",()=>$g(n)));Tn.forEach(n=>Ue("island",`\u{1F3DD}\uFE0F ${n.name}`,n.lon,n.lat,n.h+400,"island",()=>Vc(n)));qn.forEach(n=>{let t=gd(n.lon,n.lat);n.h=t,n.lbl=Ue("spot",`<span class="pin">${n.i}</span><span class="nm">${n.n}</span>`,n.lon,n.lat,t+60,"spot",()=>Hc(n))});$n.forEach(n=>{n.lbl=Ue("tribe",`<span class="tdot" style="background:${n.c}"></span><b>${n.n}</b><small>${n.v}</small>`,n.vlon,n.vlat,gd(n.vlon,n.vlat)+80,"tribe",()=>Sd(n))});Object.entries(An.top5).forEach(([n,t],e)=>{let i=Fi[n],s=i.reduce((a,l)=>l.length>a.length?l:a,i[0]),r=s.reduce((a,l)=>a+l[0],0)/s.length,o=s.reduce((a,l)=>a+l[1],0)/s.length;Ue("hakka",`<b>${e+1}. ${n.replace("\u53F0","\u81FA")}</b><small>\u5BA2\u5BB6\u4EBA\u53E3 ${t}%</small>`,r,o,(In(r,o)||100)+300,"hakka",()=>ha())});An.areas.forEach(n=>Ue("hakka",`\u{1F3EE} ${n.n}`,n.lon,n.lat,(In(n.lon,n.lat)||100)+150,"hakka-area",()=>ha(n)));Ss.forEach(n=>Ue("city",`\u2614 ${n.name}`,n.lon,n.lat,(In(n.lon,n.lat)||30)+200,"city",()=>{tt.city=n.id,St("#city").value=n.id,la()}));var kc=[{n:"\u592A\u5E73\u6D0B",lon:122.55,lat:23,d:"\u81FA\u7063\u6771\u908A\u662F\u592A\u5E73\u6D0B\uFF0C\u662F\u4E16\u754C\u4E0A\u6700\u5927\u7684\u6D77\u6D0B\u3002\u6771\u90E8\u6D77\u5CB8\u96E2\u6DF1\u6D77\u5F88\u8FD1\uFF0C\u6D77\u5E95\u5F88\u5FEB\u5C31\u8B8A\u5F97\u5F88\u6DF1\u3002",j:"\u81FA\u7063\u6771\u5074\u70BA\u592A\u5E73\u6D0B\uFF0C\u5927\u9678\u68DA\u72F9\u7A84\u3001\u6D77\u5E95\u9661\u964D\uFF0C\u8FD1\u5CB8\u5373\u70BA\u6DF1\u6D77\uFF1B\u9ED1\u6F6E\u6CBF\u6771\u90E8\u6D77\u57DF\u5317\u4E0A\uFF0C\u5E36\u4F86\u8C50\u5BCC\u7684\u9060\u6D0B\u9B5A\u985E\u3002"},{n:"\u5DF4\u58EB\u6D77\u5CFD",lon:120.9,lat:21.35,d:"\u81FA\u7063\u5357\u908A\u3001\u5728\u81FA\u7063\u548C\u83F2\u5F8B\u8CD3\u4E4B\u9593\u7684\u6D77\u5CFD\uFF0C\u662F\u8239\u96BB\u5F80\u4F86\u7684\u91CD\u8981\u901A\u9053\u3002",j:"\u4F4D\u65BC\u81FA\u7063\u5357\u7AEF\u8207\u83F2\u5F8B\u8CD3\u4E4B\u9593\uFF0C\u9023\u63A5\u592A\u5E73\u6D0B\u8207\u5357\u6D77\uFF0C\u662F\u91CD\u8981\u7684\u570B\u969B\u822A\u9053\uFF0C\u4E5F\u662F\u98B1\u98A8\u5E38\u7D93\u904E\u7684\u6D77\u57DF\u3002"},{n:"\u81FA\u7063\u6D77\u5CFD",lon:119.75,lat:24.15,d:"\u81FA\u7063\u897F\u908A\u3001\u5728\u81FA\u7063\u548C\u4E2D\u570B\u5927\u9678\u4E4B\u9593\u7684\u6D77\u3002\u6D77\u6C34\u6BD4\u8F03\u6DFA\uFF0C\u6F8E\u6E56\u7FA4\u5CF6\u5C31\u5728\u9019\u88E1\u3002",j:"\u4ECB\u65BC\u81FA\u7063\u8207\u4E2D\u570B\u5927\u9678\u4E4B\u9593\uFF0C\u5C6C\u65BC\u6DFA\u6D77\u7684\u5927\u9678\u68DA\uFF0C\u5E73\u5747\u6C34\u6DF1\u4E0D\u5230 100 \u516C\u5C3A\uFF1B\u6F8E\u6E56\u7FA4\u5CF6\u4F4D\u65BC\u6D77\u5CFD\u4E2D\u3002"},{n:"\u6771\u6D77",lon:121.6,lat:25.95,d:"\u81FA\u7063\u5317\u908A\u7684\u6D77\uFF0C\u5F80\u5317\u4E00\u76F4\u5EF6\u4F38\u5230\u65E5\u672C\u548C\u4E2D\u570B\u5927\u9678\u4E4B\u9593\u3002",j:"\u4F4D\u65BC\u81FA\u7063\u5317\u65B9\u3001\u4E9E\u6D32\u5927\u9678\u6771\u5074\u7684\u908A\u7DE3\u6D77\uFF0C\u5927\u90E8\u5206\u5C6C\u65BC\u5927\u9678\u68DA\u3002"}];kc.forEach(n=>Ue("sea",`\u{1F30A} ${n.n}`,n.lon,n.lat,0,"sea",()=>fi(`<div class="tag-lf" style="background:#5aa9e6;color:#fff">\u6D77\u57DF</div><h3>\u{1F30A} ${n.n}</h3><p>${tt.level==="elem"?n.d:n.j}</p>`)));var hr=new Le;rn.add(hr);(function(){let t=Zt(122.32),e=jt(23.55),i=new te(new Yn(2.4,4,2.4),new sn({color:"#fff7d6"}));i.position.set(t,2,e),hr.add(i);for(let a=0;a<=4e3;a+=500){let l=a%1e3===0,c=new te(new Yn(l?6:3.5,.012,1.2),new sn({color:l?"#d33":"#333"}));c.position.set(t+(l?3:1.8),a/1e3,e),hr.add(c),l&&Ue("ruler",a===0?"\u6D77\u5E73\u9762 0 \u516C\u5C3A":`${a.toLocaleString()} \u516C\u5C3A<small>\uFF1D ${a/1e3} \u516C\u91CC</small>`,122.32+.09,23.55,a,"ruler ruler-h")}let s=Zt(119.75),r=jt(22.2);[[0,25,"#222"],[25,50,"#fff"],[50,100,"#222"]].forEach(([a,l,c])=>{let h=new te(new Yn(l-a,.06,3),new sn({color:c}));h.position.set(s+(a+l)/2,.03,r),hr.add(h)}),[0,25,50,100].forEach(a=>Ue("ruler",a===100?"100 \u516C\u91CC":`${a}`,119.75+a/Ts,22.2-.05,0,"ruler ruler-km")),Ue("ruler","\u2B06 \u5317",119.75,22.55,0,"ruler ruler-n")})();var dr=As?800:di?2500:5e3,zc=new ge,ke=new Float32Array(dr*6);zc.setAttribute("position",new Me(ke,3));var Oi=new gs(zc,new En({color:"#ffffff",transparent:!0,opacity:.9}));Oi.frustumCulled=!1;Oi.visible=!1;Pn.add(Oi);var ws=new Le;Pn.add(ws);ws.visible=!1;var Vg=new sn({color:"#f4f6f8",transparent:!0,opacity:.6,depthWrite:!1}),sa=[],_d=1,xd=dr;function Gg(){sa=Jo[tt.month].zones.map(([i,s,r,o])=>[Zt(i),jt(o),Zt(r),jt(s)]);let t=Ss.find(i=>i.id===tt.city),e=t.mm[tt.month];xd=Math.round(dr*Math.min(1,.12+e/450)),_d=.8+Math.min(1.5,e/300);for(let i=0;i<dr;i++)yd(i,!0);ws.clear(),sa.forEach(([i,s,r,o],a)=>{let l=Math.max(4,Math.round((r-i)*(o-s)/900));for(let c=0;c<l;c++){let h=new te(new _s(1,14,10),Vg);h.scale.set(6+Rn(c,a)*6,1.6+Rn(a,c)*1.2,5+Rn(c+3,a)*5),h.position.set(i+Rn(c,a+5)*(r-i),42+Rn(c+1,a)*6,s+Rn(c+2,a)*(o-s)),ws.add(h)}})}function yd(n,t){let e=sa[n%sa.length]||[0,0,1,1],i=e[0]+Math.random()*(e[2]-e[0]),s=e[1]+Math.random()*(e[3]-e[1]),r=t?Math.random()*42:42,o=n*6;ke[o]=i,ke[o+1]=r,ke[o+2]=s,ke[o+3]=i+.3,ke[o+4]=r-2.6,ke[o+5]=s}function Wg(n){let t=Math.max(0,tt.flood/1e3*tt.exag);for(let e=0;e<dr;e++){let i=e*6;if(e>=xd){ke[i+1]=ke[i+4]=-999;continue}let s=(40+e%7*3)*_d*n;ke[i+1]-=s,ke[i+4]-=s,ke[i]+=s*.08,ke[i+3]+=s*.08,(ke[i+4]<t||ke[i+1]<-5)&&yd(e,!1)}zc.attributes.position.needsUpdate=!0}var Qo=[0,0,0,0,0,0];for(let n=0;n<At.cls.length;n++)Qo[At.cls[n]]++;function Cs(){let n=tt.mode==="rain"?tt.flood:0;Es.visible=n>0,Es.position.y=n/1e3;let t=[0,0,0,0,0,0];for(let o=0;o<At.cls.length;o++)At.cls[o]&&At.elev[o]<n&&t[At.cls[o]]++;let e=0,i=0;for(let o=1;o<6;o++)e+=Qo[o],i+=t[o];St("#floodVal").innerHTML=`${Math.round(tt.flood).toLocaleString()} <small>\u516C\u5C3A</small> \uFF1D ${(tt.flood/1e3).toFixed(tt.flood<1e3?2:1)} <small>\u516C\u91CC</small>`,St("#floodSlider").value=tt.flood;let s=["plain","basin","tableland","hill","mountain"].map(o=>{let a=Zn[o],l=Qo[a]?Math.round(t[a]/Qo[a]*100):0;return`<div class="fl-row"><span class="dot" style="background:${De[o].color}"></span>${De[o].name}<div class="bar"><i style="width:${l}%"></i></div><b>${l}%</b></div>`}).join(""),r=qn.filter(o=>o.h<n);St("#floodStats").innerHTML=s+`<p class="fl-sum">\u81FA\u7063\u672C\u5CF6\u6709 <b>${Math.round(i/e*100)}%</b> \u7684\u571F\u5730\u5728\u6C34\u9762\u4E0B\u3002</p>`+(r.length?`<p class="fl-sum">\u88AB\u6DF9\u5230\u7684\u666F\u9EDE\uFF08${r.length}\uFF09\uFF1A${r.slice(0,14).map(o=>o.n).join("\u3001")}${r.length>14?"\u2026":""}</p>`:""),qn.forEach(o=>o.lbl.el.classList.toggle("flooded",o.h<n)),St("#floodHint").textContent=Xg(n)}function Xg(n){return n<=0?"\u6309\u300C\u958B\u59CB\u4E0B\u96E8\u300D\u6216\u62D6\u62C9\u6C34\u4F4D\uFF0C\u770B\u770B\u6C34\u6703\u6DF9\u5230\u54EA\u88E1\u3002":n<100?"\u5E73\u539F\u6700\u5148\u88AB\u6DF9\uFF1A\u5E73\u539F\u9AD8\u5EA6\u5927\u591A\u4E0D\u5230 100 \u516C\u5C3A\u3002":n<500?"\u5E73\u539F\u3001\u76C6\u5730\u90FD\u6DF9\u4E86\uFF0C\u53F0\u5730\u548C\u4E18\u9675\u9084\u9732\u5728\u6C34\u9762\u4E0A\u3002":n<1e3?"\u53EA\u5269\u4E18\u9675\u7684\u9AD8\u8655\u548C\u5C71\u5730\u9732\u51FA\u6C34\u9762\u3002\u4E18\u9675\u4E0D\u5230 1,000 \u516C\u5C3A\u3002":n<3e3?"\u8D85\u904E 1,000 \u516C\u5C3A\uFF0C\u53EA\u5269\u4E0B\u5C71\u5730\uFF01\u81FA\u7063\u8B8A\u6210\u4E00\u4E32\u7D30\u9577\u7684\u5CF6\u3002":n<3952?"\u53EA\u5269\u5E7E\u5EA7\u9AD8\u5C71\u7684\u5C71\u9802\uFF0C\u50CF\u5C0F\u5CF6\u4E00\u6A23\u3002":"\u9023\u7389\u5C71\uFF083,952 \u516C\u5C3A\uFF09\u90FD\u6DF9\u6C92\u4E86\uFF01"}function la(){let n=Ss.find(c=>c.id===tt.city),t=550,e=340,i=di?210:170,s=e/12,r=n.mm.map((c,h)=>{let d=c/t*(i-30),f=h*s,p=Dc.find(m=>m.months.includes(h));return`<rect x="${f}" y="0" width="${s}" height="${i-18}" fill="${p.color}" opacity="${h===tt.month?.55:.18}"/><rect class="bar-m" data-m="${h}" x="${f+3}" y="${i-18-d}" width="${s-6}" height="${d}" rx="3" fill="${h===tt.month?"#1565c0":"#4a90d9"}"/><text x="${f+s/2}" y="${i-22-d}" font-size="${di?13:9}" text-anchor="middle" fill="#234">${Math.round(c)}</text><text x="${f+s/2}" y="${i-5}" font-size="${di?14:10}" text-anchor="middle" fill="#345">${di?h+1:h+1+"\u6708"}</text>`}).join(""),o=Zu.slice(0,3).map(c=>{let h=i-18-c.mm/t*(i-30);return`<line x1="0" x2="${e}" y1="${h}" y2="${h}" stroke="#c33" stroke-dasharray="3 3" stroke-width=".7"/><text x="${e-2}" y="${h-2}" font-size="${di?12:8}" text-anchor="end" fill="#c33">${c.mm}mm</text>`}).join("");St("#rainChart").innerHTML=`<svg viewBox="0 0 ${e} ${i}" width="100%">${r}${o}</svg>`,St("#rainChart").querySelectorAll(".bar-m").forEach(c=>c.addEventListener("click",()=>vd(+c.dataset.m)));let a=n.mm.reduce((c,h)=>c+h,0);St("#seasonBox").innerHTML=Dc.map(c=>{let h=c.months.reduce((d,f)=>d+n.mm[f],0);return`<div class="sea" style="background:${c.color}"><b>${c.name}</b><span>${c.months.map(d=>d+1).join("\u3001")}\u6708</span><em>${Math.round(h).toLocaleString()} mm</em><i>${Math.round(h/a*100)}%</i></div>`}).join(""),St("#rainTotal").innerHTML=`<b>${n.name}</b> \u4E00\u5E74\u7D04 <b>${Math.round(a).toLocaleString()}</b> \u6BEB\u7C73\uFF08mm\uFF09${n.src==="book"?'<span class="tag book">\u8AB2\u672C\u8CC7\u6599</span>':'<span class="tag cwa">\u88DC\u5145\uFF1A\u6C23\u8C61\u7F72\u5E73\u5747\u7D04\u7565\u503C</span>'}${n.note?`<br><small>${n.note}</small>`:""}`;let l=Jo[tt.month];St("#monthInfo").innerHTML=`<h4>${tt.month+1} \u6708\uFF1A${l.why}</h4><p>${l.elem}</p><p class="muted">\u96E8\u4E0B\u6700\u591A\u7684\u5730\u65B9\uFF1A<b>${l.where}</b>\uFF083D \u5730\u5716\u4E0A\u6709\u96F2\u7684\u5730\u65B9\uFF09</p>`,St("#monthSel").value=tt.month,Gg()}function vd(n){tt.month=n,la()}var _n=St("#info");function fi(n){_n.innerHTML=`<button class="x" aria-label="\u95DC\u9589">\u2715</button>${n}`,_n.classList.add("show"),_n.scrollTop=0,_n.querySelector(".x").onclick=()=>_n.classList.remove("show"),gr()&&(document.body.classList.add("panel-min"),Bi())}var ca=n=>tt.level==="elem"?n.elem:n.junior;function Yg(n){return n==="mountain"?rr.map(t=>t.name).concat(jo.map(t=>t.name)):n==="hill"?Lc.map(t=>t.name):or.filter(t=>t.type===n).map(t=>t.name)}function pr(n,t){let e=De[n],i=qn.filter(s=>s.t===n);fi(`<div class="tag-lf" style="background:${e.color}">${e.icon} ${e.name}</div><h3>${t||e.name}</h3><p>${ca(e)}</p>
    <p><b>\u8AB2\u672C\u8209\u4F8B\uFF1A</b>${Yg(n).join("\u3001")}</p>
    <p><b>\u9644\u8FD1\u666F\u9EDE\uFF1A</b></p><ul class="spot-list">${i.map(s=>`<li data-n="${s.n}">${s.i} ${s.n}</li>`).join("")}</ul>
    <button class="btn-sm" id="focusBtn">\u53EA\u770B\u300C${e.name}\u300D\u5728\u54EA\u88E1</button>`),_n.querySelectorAll(".spot-list li").forEach(s=>s.onclick=()=>{let r=qn.find(o=>o.n===s.dataset.n);jn(r.lon,r.lat,60),Hc(r)}),St("#focusBtn").onclick=()=>Gc(n)}function Qu(n,t,e){var r;if(In(t,e)==null)return"";let s=Math.round((qt.lat1-e)/(qt.lat1-qt.lat0)*(At.nz-1))*At.nx+Math.round((t-qt.lon0)/(qt.lon1-qt.lon0)*(At.nx-1));return((r=De[Pg[At.cls[s]]])==null?void 0:r.name)||""}var Md={mountain:"\u5C71\u5730",hill:"\u4E18\u9675",tableland:"\u53F0\u5730",basin:"\u76C6\u5730",plain:"\u5E73\u539F",coast:"\u6D77\u5CB8",volcano:"\u706B\u5C71",island:"\u5916\u5CF6"};function qg(n){let t=Zo[n];return t?`<figure class="ph"><img src="photos/${t.f}" alt="${n}" loading="lazy"><figcaption>\u{1F4F7} ${t.a||"\u4F5A\u540D"}\u30FB${t.l}\u30FB<a href="${t.u}" target="_blank" rel="noopener">Wikimedia Commons</a></figcaption></figure>`:""}function Hc(n){var t;fi(`${qg(n.n)}<div class="tag-lf" style="background:${((t=De[n.t])==null?void 0:t.color)||"#7fb3d5"}">${Md[n.t]}</div><h3>${n.i} ${n.n}</h3><p>${n.d}</p>
    <p class="muted">\u9019\u88E1\u5927\u7D04\u6D77\u62D4 <b>${Math.round(n.h).toLocaleString()} \u516C\u5C3A</b>\uFF08${(n.h/1e3).toFixed(2)} \u516C\u91CC\uFF09${Qu(n.h,n.lon,n.lat)?`\uFF0C\u5730\u5716\u4E0A\u5C6C\u65BC\u300C${Qu(n.h,n.lon,n.lat)}\u300D`:""}\u3002</p>`)}function Sd(n){tt.tribeFocus=n.id,ia(),Fc(),fi(`<div class="tag-lf" style="background:${n.c};color:#fff">\u{1FAB6} \u539F\u4F4F\u6C11\u65CF</div><h3>${n.n}</h3>
    <p><b>\u4F4F\u5728\u54EA\u88E1\uFF1A</b>${n.where}</p><p>${ca(n)}</p>
    <p class="muted">\u5730\u5716\u4E0A\u7684\u4EE3\u8868\u90E8\u843D\uFF1A<b>${n.v}</b>\u3002\u5F69\u8272\u7BC4\u570D\u662F\u4E3B\u8981\u5206\u5E03\u5730\u5340\u7684\u793A\u610F\uFF0C\u4E0D\u662F\u7CBE\u78BA\u7684\u754C\u7DDA\uFF1B\u73FE\u5728\u4E5F\u6709\u5F88\u591A\u65CF\u4EBA\u4F4F\u5728\u57CE\u5E02\u88E1\u3002</p>
    <button class="btn-sm" id="tribeAll">\u770B\u5168\u90E8 17 \u65CF</button>`),St("#tribeAll").onclick=()=>{tt.tribeFocus=null,ia(),Fc(),_n.classList.remove("show")};let t=n.island?Tn.find(e=>e.id===n.island):null;jn(n.vlon,n.vlat,t?45:130)}function Fc(){St("#tribeList").innerHTML=$n.map((n,t)=>`<button data-t="${n.id}" class="${tt.tribeFocus===n.id?"on":""}"><span class="dot" style="background:${n.c}"></span><b>${t+1}. ${n.n}${n.isNew?' <em class="new">2026 \u65B0\u6838\u5B9A</em>':""}</b><small>${n.where}</small></button>`).join(""),St("#tribeList").querySelectorAll("button").forEach(n=>n.onclick=()=>Sd($n.find(t=>t.id===n.dataset.t)))}function ha(n){let t=Object.entries(An.top5).map(([e,i],s)=>`<div class="fl-row"><span class="dot" style="background:#${fd.clone().lerp(pd,Math.min(1,Math.max(0,(i-28)/40))).getHexString()}"></span>${e.replace("\u53F0","\u81FA")}<div class="bar"><i style="width:${i}%;background:#2e7d32"></i></div><b>${i}%</b></div>`).join("");fi(`<div class="tag-lf" style="background:#2e7d32;color:#fff">\u{1F3EE} \u5BA2\u5BB6</div><h3>${n?n.n:"\u81FA\u7063\u7684\u5BA2\u5BB6\u4EBA"}</h3>
    ${n?`<p>${n.d}</p>`:""}<p>${ca(An)}</p>
    <p><b>\u5168\u81FA\u5BA2\u5BB6\u4EBA\u53E3\uFF1A</b>${An.total}</p><p><b>\u5BA2\u5BB6\u4EBA\u53E3\u6BD4\u7387\u524D\u4E94\u540D\u7E23\u5E02\uFF1A</b></p>${t}
    <p class="muted">\u8CC7\u6599\u4F86\u6E90\uFF1A${An.source}\u3002\u984F\u8272\u8D8A\u6DF1\uFF0C\u5BA2\u5BB6\u4EBA\u53E3\u6BD4\u7387\u8D8A\u9AD8\uFF1B\u5176\u4ED6\u7E23\u5E02\u672A\u4E0A\u8272\u3002</p>`),n&&jn(n.lon,n.lat,160)}function $g(n){fi(`<div class="tag-lf" style="background:${De.mountain.color}">\u26F0\uFE0F \u5C71\u5730</div><h3>\u25B2 ${n.name}</h3><p>\u9AD8\u5EA6 <b>${n.h.toLocaleString()} \u516C\u5C3A</b>\uFF1D ${(n.h/1e3).toFixed(3)} \u516C\u91CC${n.note?`\uFF0C${n.note}`:""}\u3002</p>
    <p class="muted">${tt.level==="elem"?"\u5982\u679C\u4E00\u5C64\u6A13\u5927\u7D04 3 \u516C\u5C3A\uFF0C"+n.name+"\u5DEE\u4E0D\u591A\u6709 "+Math.round(n.h/3).toLocaleString()+" \u5C64\u6A13\u90A3\u9EBC\u9AD8\uFF01":"\u81FA\u7063\u9762\u7A4D\u4E0D\u5927\uFF0C\u537B\u6709\u5169\u767E\u591A\u5EA7 3,000 \u516C\u5C3A\u4EE5\u4E0A\u7684\u9AD8\u5C71\uFF0C\u662F\u677F\u584A\u64E0\u58D3\u5F62\u6210\u7684\u5E74\u8F15\u5C71\u8108\u3002"}</p>`)}function Vc(n){let t=Math.round(Math.hypot(Zt(n.lon)-Zt(120.3),jt(n.lat)-jt(22.62)));fi(`<div class="tag-lf" style="background:${ar[n.region].color}">${n.kind}</div><h3>\u{1F3DD}\uFE0F ${n.name}</h3><p>${ca(n)}</p>
    <p class="muted">\u6700\u9AD8\u9EDE\u7D04 <b>${n.h} \u516C\u5C3A</b>\uFF1B\u8DDD\u96E2\u9AD8\u96C4\u76F4\u7DDA\u7D04 <b>${t} \u516C\u91CC</b>\u3002</p>`),jn(n.lon,n.lat,Math.max(30,n.id==="dongsha"?60:n.id==="penghu"?70:40))}var Se=null;function jn(n,t,e,i=.9){let s=Zt(n),r=jt(t),o=new C(s,0,r),a=-.35,l=new C(s+Math.sin(a)*Math.sin(i)*e,Math.cos(i)*e,r+Math.cos(a)*Math.sin(i)*e);Se={t:0,p0:Ee.position.clone(),p1:l,c0:le.target.clone(),c1:o}}function bd(){jn(121.05,23.55,500,1)}function Zg(){Se={t:0,p0:Ee.position.clone(),p1:new C(Zt(120.95),560,jt(23.62)+1),c0:le.target.clone(),c1:new C(Zt(120.95),0,jt(23.62))}}function jg(){Se={t:0,p0:Ee.position.clone(),p1:new C(Zt(119.4),1050,jt(23.4)+260),c0:le.target.clone(),c1:new C(Zt(119.4),0,jt(23.4))}}function Gc(n){tt.focus=tt.focus===n?null:n,document.querySelectorAll(".legend [data-lf]").forEach(t=>t.classList.toggle("on",t.dataset.lf===tt.focus)),ia(),be.setFloat(tt.color==="landform"&&tt.mode==="terrain"?tt.focus:null)}function mr(n){tt.color=n,document.querySelectorAll("[data-color]").forEach(t=>t.classList.toggle("on",t.dataset.color===n)),Jg(),ia(),be&&(be.countyLines.visible=n==="region"||n==="hakka",n!=="landform"?be.setFloat(null):tt.focus&&be.setFloat(tt.focus))}function Jg(){let n=St("#legend");tt.color==="landform"?n.innerHTML=["plain","basin","tableland","hill","mountain"].map(t=>`<button data-lf="${t}" class="${tt.focus===t?"on":""}"><span class="dot" style="background:${De[t].color}"></span>${De[t].icon} ${De[t].name}</button>`).join(""):tt.color==="region"?n.innerHTML=Object.values(ar).map(t=>`<div class="rg"><span class="dot" style="background:${t.color}"></span><b>${t.name}</b><small>${t.list}</small></div>`).join("")+'<p class="muted">\u4F9D\u570B\u767C\u6703\u5340\u57DF\u5283\u5206\uFF1B\u6709\u7684\u8AB2\u672C\u628A\u5B9C\u862D\u6B78\u5728\u6771\u90E8\u3002</p>':n.innerHTML=`<div class="hyp">${Cn.slice(0,-1).map(([t,e])=>`<span style="background:#${e.getHexString()}">${t.toLocaleString()}</span>`).join("")}</div><p class="muted">\u55AE\u4F4D\uFF1A\u516C\u5C3A\uFF08m\uFF09\u3002\u548C\u8AB2\u672C\u300C\u5206\u5C64\u8A2D\u8272\u5716\u300D\u4E00\u6A23\uFF1A\u8D8A\u9AD8\u984F\u8272\u8D8A\u6DF1\uFF0C\u6700\u9AD8\u8655\u662F\u767D\u8272\u3002</p>`,n.querySelectorAll("[data-lf]").forEach(t=>t.onclick=()=>{Gc(t.dataset.lf),pr(t.dataset.lf)})}function Wc(n){tt.mode!==n&&_n.classList.remove("show"),tt.mode=n,document.querySelectorAll(".tabs [data-mode]").forEach(i=>i.classList.toggle("on",i.dataset.mode===n)),document.querySelectorAll(".pane").forEach(i=>i.hidden=i.dataset.pane!==n);let t=["tribe","hakka"];n==="tribes"?(t.includes(tt.color)||(tt.prevColor=tt.color),Yc(tt.ethnic||"tribe")):t.includes(tt.color)&&(tt.tribeFocus=null,mr(tt.prevColor||"landform")),be&&(be.showCurrents(n==="ocean"),n==="ocean"&&be.renderCurrents(),n!=="terrain"?(be.setFloat(null),be.closePlates(),be.clearProfile()):tt.focus&&tt.color==="landform"&&be.setFloat(tt.focus));let e=n==="rain";Oi.visible=ws.visible=e&&tt.raining,Ye.city.forEach(i=>i.o.visible=e),e?la():tt.rising=!1,Cs(),n==="spots"&&Kg(),Xc()}function Kg(){let n=["mountain","hill","tableland","basin","plain","volcano","coast","island"];St("#spotList").innerHTML=n.map(t=>{var e;return`<h4>${((e=De[t])==null?void 0:e.icon)||(t==="coast"?"\u{1F30A}":t==="volcano"?"\u{1F30B}":"\u{1F3DD}\uFE0F")} ${Md[t]}</h4><ul class="cards">${qn.filter(i=>i.t===t).map(i=>`<li data-n="${i.n}">${Zo[i.n]?`<img src="photos/${Zo[i.n].f}" alt="" loading="lazy">`:`<span class="noimg">${i.i}</span>`}<span>${i.i} ${i.n}</span></li>`).join("")}</ul>`}).join(""),St("#spotList").querySelectorAll("li").forEach(t=>t.onclick=()=>{let e=qn.find(s=>s.n===t.dataset.n),i=md(e.lon,e.lat);jn(e.lon,e.lat,e.t==="island"?40:70),Hc(e)})}function Xc(){let n=s=>St("#"+s).checked,t=tt.mode==="tribes",e=tt.mode==="ocean",i=t||e;Ye.lf.forEach(s=>s.o.visible=n("tgLf")&&!i),Ye.peak.forEach(s=>s.o.visible=n("tgPeak")&&!i),Ye.spot.forEach(s=>s.o.visible=(n("tgSpot")||tt.mode==="spots")&&!i),Ye.tribe.forEach(s=>s.o.visible=t&&tt.ethnic!=="hakka"),Ye.hakka.forEach(s=>s.o.visible=t&&tt.ethnic==="hakka"),Ye.island.forEach(s=>s.o.visible=n("tgIsland")),Ye.ruler.forEach(s=>s.o.visible=n("tgRuler")),Ye.sea.forEach(s=>s.o.visible=n("tgSea")||e),hr.visible=n("tgRuler")}function Ed(n){tt.level=n,document.querySelectorAll(".seg [data-level]").forEach(t=>t.classList.toggle("on",t.dataset.level===n)),document.body.dataset.level=n,_n.classList.remove("show")}document.querySelectorAll(".tabs [data-mode]").forEach(n=>n.onclick=()=>Wc(n.dataset.mode));document.querySelectorAll("[data-color]").forEach(n=>n.onclick=()=>mr(n.dataset.color));document.querySelectorAll(".seg [data-level]").forEach(n=>n.onclick=()=>Ed(n.dataset.level));["tgLf","tgPeak","tgSpot","tgIsland","tgRuler","tgSea"].forEach(n=>St("#"+n).onchange=Xc);St("#tgSaver").checked=As;St("#tgSaver").onchange=n=>{try{localStorage.setItem("tw3d_saver",n.target.checked?"1":"0")}catch{}location.reload()};function ra(){let n=St("#hint");n.hidden=!1,n.classList.add("show"),clearTimeout(ra.t),ra.t=setTimeout(()=>n.classList.remove("show"),7e3)}St("#btnHint").onclick=ra;St("#hint").onclick=()=>St("#hint").classList.remove("show");St("#exag").oninput=n=>{tt.exag=+n.target.value,rn.scale.y=tt.exag,St("#exagVal").textContent="\xD7"+tt.exag};St("#btnHome").onclick=bd;St("#btnTop").onclick=Zg;St("#btnAll").onclick=jg;St("#islandBtns").innerHTML=Tn.map(n=>`<button data-isl="${n.id}">${n.name}</button>`).join("");St("#islandBtns").querySelectorAll("button").forEach(n=>n.onclick=()=>Vc(Tn.find(t=>t.id===n.dataset.isl)));St("#city").innerHTML=Ss.map(n=>`<option value="${n.id}">${n.name}\uFF08${ar[n.region].name}\uFF09${n.src==="book"?"\u30FB\u8AB2\u672C":""}</option>`).join("");St("#city").value=tt.city;St("#city").onchange=n=>{tt.city=n.target.value,la()};St("#monthSel").innerHTML=Jo.map((n,t)=>`<option value="${t}">${t+1} \u6708</option>`).join("");St("#monthSel").onchange=n=>vd(+n.target.value);St("#btnRain").onclick=()=>{tt.raining=!tt.raining,tt.rising=tt.raining,Oi.visible=ws.visible=tt.raining,St("#btnRain").textContent=tt.raining?"\u23F8 \u505C\u6B62\u4E0B\u96E8":"\u{1F327}\uFE0F \u958B\u59CB\u4E0B\u96E8\uFF08\u6C34\u4F4D\u4E0A\u5347\uFF09"};St("#floodSlider").oninput=n=>{tt.flood=+n.target.value,tt.rising=!1,Cs()};St("#btnDrain").onclick=()=>{tt.flood=0,tt.rising=!1,Cs()};document.querySelectorAll("[data-flood]").forEach(n=>n.onclick=()=>{tt.flood=+n.dataset.flood,tt.rising=!1,Cs()});St("#panelToggle").onclick=()=>{document.body.classList.toggle("panel-min"),Bi()};var gr=()=>window.innerWidth<=900;gr()&&document.body.classList.add("panel-min");document.querySelectorAll(".tabs [data-mode]").forEach(n=>n.addEventListener("click",()=>{document.body.classList.remove("panel-min"),Bi()}));function Yc(n){tt.ethnic=n,tt.tribeFocus=null,document.querySelectorAll("#ethChips [data-eth]").forEach(t=>t.classList.toggle("on",t.dataset.eth===n)),St("#tribeBox").hidden=n!=="tribe",St("#hakkaBox").hidden=n!=="hakka",n==="tribe"&&Fc(),mr(n),Xc()}document.querySelectorAll("#ethChips [data-eth]").forEach(n=>n.onclick=()=>{Yc(n.dataset.eth),n.dataset.eth==="hakka"?ha():_n.classList.remove("show")});St("#hakkaAreas").innerHTML=An.areas.map((n,t)=>`<button class="chip" data-ha="${t}">\u{1F3EE} ${n.n}</button>`).join("");St("#hakkaAreas").querySelectorAll("[data-ha]").forEach(n=>n.onclick=()=>ha(An.areas[+n.dataset.ha]));St("#seaBtns").innerHTML=kc.map((n,t)=>`<button class="chip" data-sea="${t}">\u{1F30A} ${n.n}</button>`).join("");St("#seaBtns").querySelectorAll("[data-sea]").forEach(n=>n.onclick=()=>{let t=kc[+n.dataset.sea];jn(t.lon,t.lat,420,.8),Ye.sea[+n.dataset.sea].onClick()});St("#oceanIslands").innerHTML=["guishan","keelungislet","daqiu","lanyu","green","liuqiu","penghu","dongsha"].map(n=>{let t=Tn.find(e=>e.id===n);return`<button data-isl2="${n}">${t.name}</button>`}).join("");St("#oceanIslands").querySelectorAll("[data-isl2]").forEach(n=>n.onclick=()=>Vc(Tn.find(t=>t.id===n.dataset.isl2)));St("#profBtns").innerHTML=Uc.map((n,t)=>`<button class="chip" data-prof="${t}">${n.n}</button>`).join("")+'<button class="chip" id="btnPick">\u270F\uFE0F \u81EA\u5DF1\u9078\u5169\u9EDE</button>';St("#profBtns").querySelectorAll("[data-prof]").forEach(n=>n.onclick=()=>{let t=Uc[+n.dataset.prof];be.drawProfile(t.a,t.b,t.n)});St("#btnPick").onclick=()=>{gr()&&(document.body.classList.add("panel-min"),Bi()),be.startPick()};St("#btnPlates").onclick=()=>{gr()&&(document.body.classList.add("panel-min"),Bi()),be.openPlates()};le.listenToKeyEvents(window);le.keyPanSpeed=28;function Qg(n,t){Se=null;let e=Ee.position.distanceTo(le.target)*.15,i=new C;Ee.getWorldDirection(i),i.y=0,i.normalize();let r=new C().crossVectors(i,new C(0,1,0)).normalize().multiplyScalar(n*e).add(i.multiplyScalar(t*e));Ee.position.add(r),le.target.add(r),le.update(),ki()}[["panL",-1,0],["panR",1,0],["panU",0,1],["panD",0,-1]].forEach(([n,t,e])=>St("#"+n).onclick=()=>Qg(t,e));be=ju({scene:Pn,world:rn,camera:Ee,controls:le,renderer:xn,mainGeo:na,mainMesh:cd,seaMesh:aa,M:At,G:qt,px:Zt,pz:jt,KX:Ts,KZ:fr,heightAt:In,state:tt,openInfo:fi,info:_n,$:St,LF_COLOR:rd,CLS:Zn,labels:Ye,addLabel:Ue,wake:n=>ki(n),flyTo:(...n)=>jn(...n)});function wd(){let n=bs.clientWidth,t=bs.clientHeight;xn.setSize(n,t),oa.setSize(n,t),Ee.aspect=n/t,Bi()}function Bi(){let n=bs.clientWidth,t=bs.clientHeight,e=St("#panel").getBoundingClientRect(),i=52,s=0,r=0;gr()?r=Math.round((e.height-i)/2):document.body.classList.contains("panel-min")?r=0:s=-Math.round(e.right/2),s||r?Ee.setViewOffset(n,t,s,r,n,t):Ee.clearViewOffset(),Ee.updateProjectionMatrix()}new ResizeObserver(()=>Bi()).observe(St("#panel"));window.addEventListener("resize",wd);wd();Ee.position.set(Zt(120.2),330,jt(21.2));le.target.set(Zt(120.95),0,jt(23.65));mr("landform");Ed("elem");Wc("terrain");bd();St("#loading").remove();var Td=!1;try{Td=localStorage.getItem("tw3d_hint")==="1",localStorage.setItem("tw3d_hint","1")}catch{}Td||setTimeout(ra,1200);var t_=new Fo,td=0,e_=0,Oc=0,ki=(n=600)=>{Oc=Math.max(Oc,performance.now()+n)};["pointerdown","pointermove","pointerup","wheel","click","input","change","keydown","touchstart","touchmove"].forEach(n=>window.addEventListener(n,()=>ki(),{passive:!0,capture:!0}));window.addEventListener("resize",()=>ki(1e3));le.addEventListener("change",()=>ki());ki(3e3);function n_(){let n=[];for(let t of["current","hakka","tribe","island","sea","lf","peak","city","spot"])for(let e of Ye[t]){if(!e.o.visible||e.el.style.display==="none")continue;e.el.classList.remove("hid");let i=e.el.getBoundingClientRect();if(!i.width)continue;n.some(r=>i.left<r.right-2&&i.right>r.left+2&&i.top<r.bottom-2&&i.bottom>r.top+2)?e.el.classList.add("hid"):n.push(i)}}xn.setAnimationLoop(()=>{let n=t_.getDelta(),t=Math.min(.05,n);if(Se){Se.t=Math.min(1,Se.t+Math.min(.2,n)/1.4);let o=Se.t<.5?2*Se.t*Se.t:1-Math.pow(-2*Se.t+2,2)/2;Ee.position.lerpVectors(Se.p0,Se.p1,o),le.target.lerpVectors(Se.c0,Se.c1,o),Se.t>=1&&(Se=null)}let e=le.update(),i=be.tick(t),s=Se||Oi.visible||tt.mode==="rain"&&tt.rising||e||i;if(!s&&performance.now()>Oc)return;if(s&&ki(400),Oi.visible&&Wg(t),tt.mode==="rain"&&tt.rising&&tt.flood<4e3){let o=Ss.find(a=>a.id===tt.city).mm[tt.month];tt.flood=Math.min(4e3,tt.flood+t*(25+o*.6)*(tt.flood<200?.6:1.6)),(td+=t)>.1&&(td=0,Cs())}++e_%12===0&&n_();let r=Ee.position.distanceTo(le.target);document.body.classList.toggle("far",r>420),xn.render(Pn,Ee),oa.render(Pn,Ee)});window.__tw={state:tt,M:At,SPOTS:qn,camera:Ee,controls:le,setMode:Wc,setColor:mr,flyTo:jn,updateFlood:Cs,feat:be,setFocus:Gc,setEthnic:Yc};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
