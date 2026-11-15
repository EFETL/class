(()=>{var rl="170",yi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},fn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},su=0,Gl=1,ru=2;var Jc=1,ou=2,En=3,jn=0,Ne=1,Qe=2,$n=0,ki=1,Wl=2,Xl=3,Yl=4,au=5,ci=100,lu=101,cu=102,hu=103,uu=104,du=200,fu=201,pu=202,mu=203,Wo=204,Xo=205,gu=206,_u=207,xu=208,vu=209,yu=210,Mu=211,Su=212,bu=213,Eu=214,Yo=0,qo=1,$o=2,Wi=3,Zo=4,jo=5,Jo=6,Ko=7,Yr=0,wu=1,Tu=2,Zn=0,Au=1,Cu=2,Ru=3,Pu=4,Iu=5,Lu=6,Du=7;var Kc=300,Xi=301,Yi=302,Qo=303,ta=304,qr=306,ea=1e3,di=1001,na=1002,en=1003,Uu=1004;var Hs=1005;var hn=1006,po=1007;var fi=1008;var Cn=1009,Qc=1010,th=1011,bs=1012,ol=1013,pi=1014,wn=1015,Cs=1016,al=1017,ll=1018,qi=1020,eh=35902,nh=1021,ih=1022,tn=1023,sh=1024,rh=1025,Vi=1026,$i=1027,oh=1028,cl=1029,ah=1030,hl=1031;var ul=1033,dr=33776,fr=33777,pr=33778,mr=33779,ia=35840,sa=35841,ra=35842,oa=35843,aa=36196,la=37492,ca=37496,ha=37808,ua=37809,da=37810,fa=37811,pa=37812,ma=37813,ga=37814,_a=37815,xa=37816,va=37817,ya=37818,Ma=37819,Sa=37820,ba=37821,gr=36492,Ea=36494,wa=36495,lh=36283,Ta=36284,Aa=36285,Ca=36286;var _r=2300,Ra=2301,mo=2302,ql=2400,$l=2401,Zl=2402;var Nu=3200,Fu=3201;var dl=0,Ou=1,qn="",Xe="srgb",Qi="srgb-linear",$r="linear",Kt="srgb";var Ei=7680;var jl=519,Bu=512,zu=513,ku=514,ch=515,Vu=516,Hu=517,Gu=518,Wu=519,Jl=35044;var Kl="300 es",Tn=2e3,xr=2001,Rn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ql=1234567,ys=Math.PI/180,Es=180/Math.PI;function ts(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]).toLowerCase()}function Te(n,t,e){return Math.max(t,Math.min(e,n))}function fl(n,t){return(n%t+t)%t}function Xu(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Yu(n,t,e){return n!==t?(e-n)/(t-n):0}function Ms(n,t,e){return(1-e)*n+e*t}function qu(n,t,e,i){return Ms(n,t,1-Math.exp(-e*i))}function $u(n,t=1){return t-Math.abs(fl(n,t*2)-t)}function Zu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function ju(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Ju(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Ku(n,t){return n+Math.random()*(t-n)}function Qu(n){return n*(.5-Math.random())}function td(n){n!==void 0&&(Ql=n);let t=Ql+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ed(n){return n*ys}function nd(n){return n*Es}function id(n){return(n&n-1)===0&&n!==0}function sd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function rd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function od(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),d=r((t-i)/2),f=o((t-i)/2),m=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*m,a*c);break;case"YXY":n.set(l*m,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Re(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Zr={DEG2RAD:ys,RAD2DEG:Es,generateUUID:ts,clamp:Te,euclideanModulo:fl,mapLinear:Xu,inverseLerp:Yu,lerp:Ms,damp:qu,pingpong:$u,smoothstep:Zu,smootherstep:ju,randInt:Ju,randFloat:Ku,randFloatSpread:Qu,seededRandom:td,degToRad:ed,radToDeg:nd,isPowerOfTwo:id,ceilPowerOfTwo:sd,floorPowerOfTwo:rd,setQuaternionFromProperEuler:od,normalize:Re,denormalize:Bi},Tt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],m=i[5],g=i[8],_=s[0],p=s[3],u=s[6],E=s[1],w=s[4],M=s[7],N=s[2],A=s[5],T=s[8];return r[0]=o*_+a*E+l*N,r[3]=o*p+a*w+l*A,r[6]=o*u+a*M+l*T,r[1]=c*_+h*E+d*N,r[4]=c*p+h*w+d*A,r[7]=c*u+h*M+d*T,r[2]=f*_+m*E+g*N,r[5]=f*p+m*w+g*A,r[8]=f*u+m*M+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,m=c*r-o*l,g=e*d+i*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=m*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(go.makeScale(t,e)),this}rotate(t){return this.premultiply(go.makeRotation(-t)),this}translate(t,e){return this.premultiply(go.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},go=new Dt;function hh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function vr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ad(){let n=vr("canvas");return n.style.display="block",n}var tc={};function xs(n){n in tc||(tc[n]=!0,console.warn(n))}function ld(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function cd(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function hd(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Xt={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Kt&&(n.r=An(n.r),n.g=An(n.g),n.b=An(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Kt&&(n.r=Hi(n.r),n.g=Hi(n.g),n.b=Hi(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===qn?$r:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function An(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ec=[.64,.33,.3,.6,.15,.06],nc=[.2126,.7152,.0722],ic=[.3127,.329],sc=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rc=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xt.define({[Qi]:{primaries:ec,whitePoint:ic,transfer:$r,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:nc,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:ec,whitePoint:ic,transfer:Kt,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:nc,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}});var wi,Pa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{wi===void 0&&(wi=vr("canvas")),wi.width=t.width,wi.height=t.height;let i=wi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=vr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=An(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(An(e[i]/255)*255):e[i]=An(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ud=0,yr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=ts(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_o(s[o].image)):r.push(_o(s[o]))}else r=_o(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function _o(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Pa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var dd=0,Ye=class n extends Rn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=di,s=di,r=hn,o=fi,a=tn,l=Cn,c=n.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=ts(),this.name="",this.source=new yr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ea:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ea:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Kc;Ye.DEFAULT_ANISOTROPY=1;var he=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,M=(m+1)/2,N=(u+1)/2,A=(h+f)/4,T=(d+_)/4,U=(g+p)/4;return w>M&&w>N?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=A/i,r=T/i):M>N?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=A/s,r=U/s):N<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),i=T/r,s=U/r),this.set(i,s,r,e),this}let E=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(d-_)/E,this.z=(f-h)/E,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ia=class extends Rn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Ye(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new yr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends Ia{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Mr=class extends Ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var La=class extends Ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==f||c!==m||h!==g){let p=1-a,u=l*f+c*m+h*g+d*_,E=u>=0?1:-1,w=1-u*u;if(w>Number.EPSILON){let N=Math.sqrt(w),A=Math.atan2(N,u*E);p=Math.sin(p*A)/N,a=Math.sin(a*A)/N}let M=a*E;if(l=l*p+f*M,c=c*p+m*M,h=h*p+g*M,d=d*p+_*M,p===1-a){let N=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=N,c*=N,h*=N,d*=N}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*m-c*f,t[e+1]=l*g+h*f+c*d-a*m,t[e+2]=c*g+h*m+a*f-l*d,t[e+3]=h*g-a*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),f=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=i+a+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>d){let m=2*Math.sqrt(1+i-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){let m=2*Math.sqrt(1+a-i-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return xo.copy(this).projectOnVector(t),this.sub(xo)}reflect(t){return this.sub(xo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xo=new D,oc=new nn,mi=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ze):Ze.fromBufferAttribute(r,o),Ze.applyMatrix4(t.matrixWorld),this.expandByPoint(Ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gs.copy(i.boundingBox)),Gs.applyMatrix4(t.matrixWorld),this.union(Gs)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ze),Ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),Ws.subVectors(this.max,fs),Ti.subVectors(t.a,fs),Ai.subVectors(t.b,fs),Ci.subVectors(t.c,fs),Vn.subVectors(Ai,Ti),Hn.subVectors(Ci,Ai),ni.subVectors(Ti,Ci);let e=[0,-Vn.z,Vn.y,0,-Hn.z,Hn.y,0,-ni.z,ni.y,Vn.z,0,-Vn.x,Hn.z,0,-Hn.x,ni.z,0,-ni.x,-Vn.y,Vn.x,0,-Hn.y,Hn.x,0,-ni.y,ni.x,0];return!vo(e,Ti,Ai,Ci,Ws)||(e=[1,0,0,0,1,0,0,0,1],!vo(e,Ti,Ai,Ci,Ws))?!1:(Xs.crossVectors(Vn,Hn),e=[Xs.x,Xs.y,Xs.z],vo(e,Ti,Ai,Ci,Ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},vn=[new D,new D,new D,new D,new D,new D,new D,new D],Ze=new D,Gs=new mi,Ti=new D,Ai=new D,Ci=new D,Vn=new D,Hn=new D,ni=new D,fs=new D,Ws=new D,Xs=new D,ii=new D;function vo(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ii.fromArray(n,r);let a=s.x*Math.abs(ii.x)+s.y*Math.abs(ii.y)+s.z*Math.abs(ii.z),l=t.dot(ii),c=e.dot(ii),h=i.dot(ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var fd=new mi,ps=new D,yo=new D,Zi=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):fd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);let e=ps.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ps,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(yo)),this.expandByPoint(ps.copy(t.center).sub(yo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},yn=new D,Mo=new D,Ys=new D,Gn=new D,So=new D,qs=new D,bo=new D,ji=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Mo.copy(t).add(e).multiplyScalar(.5),Ys.copy(e).sub(t).normalize(),Gn.copy(this.origin).sub(Mo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ys),a=Gn.dot(this.direction),l=-Gn.dot(Ys),c=Gn.lengthSq(),h=Math.abs(1-o*o),d,f,m,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){let _=1/h;d*=_,f*=_,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Mo).addScaledVector(Ys,f),m}intersectSphere(t,e){yn.subVectors(t.center,this.origin);let i=yn.dot(this.direction),s=yn.dot(yn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,i,s,r){So.subVectors(e,t),qs.subVectors(i,t),bo.crossVectors(So,qs);let o=this.direction.dot(bo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gn.subVectors(this.origin,t);let l=a*this.direction.dot(qs.crossVectors(Gn,qs));if(l<0)return null;let c=a*this.direction.dot(So.cross(Gn));if(c<0||l+c>o)return null;let h=-a*Gn.dot(bo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class n{constructor(t,e,i,s,r,o,a,l,c,h,d,f,m,g,_,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,d,f,m,g,_,p)}set(t,e,i,s,r,o,a,l,c,h,d,f,m,g,_,p){let u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Ri.setFromMatrixColumn(t,0).length(),r=1/Ri.setFromMatrixColumn(t,1).length(),o=1/Ri.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,m=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,m=l*d,g=c*h,_=c*d;e[0]=f+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,m=l*d,g=c*h,_=c*d;e[0]=f-_*a,e[4]=-o*d,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,m=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*d,e[8]=g*d+m,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*d+g,e[10]=f-_*d}else if(t.order==="XZY"){let f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=o*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pd,t,md)}lookAt(t,e,i){let s=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Wn.crossVectors(i,ze),Wn.lengthSq()===0&&(Math.abs(i.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Wn.crossVectors(i,ze)),Wn.normalize(),$s.crossVectors(ze,Wn),s[0]=Wn.x,s[4]=$s.x,s[8]=ze.x,s[1]=Wn.y,s[5]=$s.y,s[9]=ze.y,s[2]=Wn.z,s[6]=$s.z,s[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],m=i[13],g=i[2],_=i[6],p=i[10],u=i[14],E=i[3],w=i[7],M=i[11],N=i[15],A=s[0],T=s[4],U=s[8],S=s[12],v=s[1],C=s[5],H=s[9],z=s[13],X=s[2],j=s[6],G=s[10],Q=s[14],V=s[3],st=s[7],ht=s[11],yt=s[15];return r[0]=o*A+a*v+l*X+c*V,r[4]=o*T+a*C+l*j+c*st,r[8]=o*U+a*H+l*G+c*ht,r[12]=o*S+a*z+l*Q+c*yt,r[1]=h*A+d*v+f*X+m*V,r[5]=h*T+d*C+f*j+m*st,r[9]=h*U+d*H+f*G+m*ht,r[13]=h*S+d*z+f*Q+m*yt,r[2]=g*A+_*v+p*X+u*V,r[6]=g*T+_*C+p*j+u*st,r[10]=g*U+_*H+p*G+u*ht,r[14]=g*S+_*z+p*Q+u*yt,r[3]=E*A+w*v+M*X+N*V,r[7]=E*T+w*C+M*j+N*st,r[11]=E*U+w*H+M*G+N*ht,r[15]=E*S+w*z+M*Q+N*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],u=t[15];return g*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*m-i*l*m)+_*(+e*l*m-e*c*f+r*o*f-s*o*m+s*c*h-r*l*h)+p*(+e*c*d-e*a*m-r*o*d+i*o*m+r*a*h-i*c*h)+u*(-s*a*h-e*l*d+e*a*f+s*o*d-i*o*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],u=t[15],E=d*p*c-_*f*c+_*l*m-a*p*m-d*l*u+a*f*u,w=g*f*c-h*p*c-g*l*m+o*p*m+h*l*u-o*f*u,M=h*_*c-g*d*c+g*a*m-o*_*m-h*a*u+o*d*u,N=g*d*l-h*_*l-g*a*f+o*_*f+h*a*p-o*d*p,A=e*E+i*w+s*M+r*N;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return t[0]=E*T,t[1]=(_*f*r-d*p*r-_*s*m+i*p*m+d*s*u-i*f*u)*T,t[2]=(a*p*r-_*l*r+_*s*c-i*p*c-a*s*u+i*l*u)*T,t[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*m-i*l*m)*T,t[4]=w*T,t[5]=(h*p*r-g*f*r+g*s*m-e*p*m-h*s*u+e*f*u)*T,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*u-e*l*u)*T,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*m+e*l*m)*T,t[8]=M*T,t[9]=(g*d*r-h*_*r-g*i*m+e*_*m+h*i*u-e*d*u)*T,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*u+e*a*u)*T,t[11]=(h*a*r-o*d*r-h*i*c+e*d*c+o*i*m-e*a*m)*T,t[12]=N*T,t[13]=(h*_*s-g*d*s+g*i*f-e*_*f-h*i*p+e*d*p)*T,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*p-e*a*p)*T,t[15]=(o*d*s-h*a*s+h*i*l-e*d*l-o*i*f+e*a*f)*T,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,m=r*h,g=r*d,_=o*h,p=o*d,u=a*d,E=l*c,w=l*h,M=l*d,N=i.x,A=i.y,T=i.z;return s[0]=(1-(_+u))*N,s[1]=(m+M)*N,s[2]=(g-w)*N,s[3]=0,s[4]=(m-M)*A,s[5]=(1-(f+u))*A,s[6]=(p+E)*A,s[7]=0,s[8]=(g+w)*T,s[9]=(p-E)*T,s[10]=(1-(f+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Ri.set(s[0],s[1],s[2]).length(),o=Ri.set(s[4],s[5],s[6]).length(),a=Ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],je.copy(this);let c=1/r,h=1/o,d=1/a;return je.elements[0]*=c,je.elements[1]*=c,je.elements[2]*=c,je.elements[4]*=h,je.elements[5]*=h,je.elements[6]*=h,je.elements[8]*=d,je.elements[9]*=d,je.elements[10]*=d,e.setFromRotationMatrix(je),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Tn){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),m,g;if(a===Tn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===xr)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Tn){let l=this.elements,c=1/(e-t),h=1/(i-s),d=1/(o-r),f=(e+t)*c,m=(i+s)*h,g,_;if(a===Tn)g=(o+r)*d,_=-2*d;else if(a===xr)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ri=new D,je=new oe,pd=new D(0,0,0),md=new D(1,1,1),Wn=new D,$s=new D,ze=new D,ac=new oe,lc=new nn,sn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ac.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ac,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lc.setFromEuler(this),this.setFromQuaternion(lc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var Sr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gd=0,cc=new D,Pi=new nn,Mn=new oe,Zs=new D,ms=new D,_d=new D,xd=new nn,hc=new D(1,0,0),uc=new D(0,1,0),dc=new D(0,0,1),fc={type:"added"},vd={type:"removed"},Ii={type:"childadded",child:null},Eo={type:"childremoved",child:null},Me=class n extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new D,e=new sn,i=new nn,s=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Dt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(hc,t)}rotateY(t){return this.rotateOnAxis(uc,t)}rotateZ(t){return this.rotateOnAxis(dc,t)}translateOnAxis(t,e){return cc.copy(t).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hc,t)}translateY(t){return this.translateOnAxis(uc,t)}translateZ(t){return this.translateOnAxis(dc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Zs.copy(t):Zs.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(ms,Zs,this.up):Mn.lookAt(Zs,ms,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(Mn),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fc),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vd),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fc),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,_d),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,xd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Me.DEFAULT_UP=new D(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Je=new D,Sn=new D,wo=new D,bn=new D,Li=new D,Di=new D,pc=new D,To=new D,Ao=new D,Co=new D,Ro=new he,Po=new he,Io=new he,hi=class n{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Je.subVectors(t,e),s.cross(Je);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Je.subVectors(s,e),Sn.subVectors(i,e),wo.subVectors(t,e);let o=Je.dot(Je),a=Je.dot(Sn),l=Je.dot(wo),c=Sn.dot(Sn),h=Sn.dot(wo),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bn.x),l.addScaledVector(o,bn.y),l.addScaledVector(a,bn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Ro.setScalar(0),Po.setScalar(0),Io.setScalar(0),Ro.fromBufferAttribute(t,e),Po.fromBufferAttribute(t,i),Io.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ro,r.x),o.addScaledVector(Po,r.y),o.addScaledVector(Io,r.z),o}static isFrontFacing(t,e,i,s){return Je.subVectors(i,e),Sn.subVectors(t,e),Je.cross(Sn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),Je.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Li.subVectors(s,i),Di.subVectors(r,i),To.subVectors(t,i);let l=Li.dot(To),c=Di.dot(To);if(l<=0&&c<=0)return e.copy(i);Ao.subVectors(t,s);let h=Li.dot(Ao),d=Di.dot(Ao);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Li,o);Co.subVectors(t,r);let m=Li.dot(Co),g=Di.dot(Co);if(g>=0&&m<=g)return e.copy(r);let _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Di,a);let p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return pc.subVectors(r,s),a=(d-h)/(d-h+(m-g)),e.copy(s).addScaledVector(pc,a);let u=1/(p+_+f);return o=_*u,a=f*u,e.copy(i).addScaledVector(Li,o).addScaledVector(Di,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},js={h:0,s:0,l:0};function Lo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Rt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Xt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Xt.workingColorSpace){if(t=fl(t,1),e=Te(e,0,1),i=Te(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Lo(o,r,t+1/3),this.g=Lo(o,r,t),this.b=Lo(o,r,t-1/3)}return Xt.toWorkingColorSpace(this,s),this}setStyle(t,e=Xe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){let i=uh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=An(t.r),this.g=An(t.g),this.b=An(t.b),this}copyLinearToSRGB(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return Xt.fromWorkingColorSpace(we.copy(this),t),Math.round(Te(we.r*255,0,255))*65536+Math.round(Te(we.g*255,0,255))*256+Math.round(Te(we.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(we.copy(this),e);let i=we.r,s=we.g,r=we.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=Xe){Xt.fromWorkingColorSpace(we.copy(this),t);let e=we.r,i=we.g,s=we.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(js);let i=Ms(Xn.h,js.h,e),s=Ms(Xn.s,js.s,e),r=Ms(Xn.l,js.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},we=new Rt;Rt.NAMES=uh;var yd=0,In=class extends Rn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=ts(),this.name="",this.blending=ki,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=Xo,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(i.blending=this.blending),this.side!==jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wo&&(i.blendSrc=this.blendSrc),this.blendDst!==Xo&&(i.blendDst=this.blendDst),this.blendEquation!==ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},gi=class extends In{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=Yr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var pe=new D,Js=new Tt,Se=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Jl,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Js.fromBufferAttribute(this,e),Js.applyMatrix3(t),this.setXY(e,Js.x,Js.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Bi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Re(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),s=Re(s,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jl&&(t.usage=this.usage),t}};var br=class extends Se{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Er=class extends Se{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var me=class extends Se{constructor(t,e,i){super(new Float32Array(t),e,i)}},Md=0,We=new oe,Do=new Me,Ui=new D,ke=new mi,gs=new mi,ye=new D,Fe=class n extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hh(t)?Er:br)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Dt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,i){return We.makeTranslation(t,e,i),this.applyMatrix4(We),this}scale(t,e,i){return We.makeScale(t,e,i),this.applyMatrix4(We),this}lookAt(t){return Do.lookAt(t),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new me(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];ke.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let i=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];gs.setFromBufferAttribute(a),this.morphTargetsRelative?(ye.addVectors(ke.min,gs.min),ke.expandByPoint(ye),ye.addVectors(ke.max,gs.max),ke.expandByPoint(ye)):(ke.expandByPoint(gs.min),ke.expandByPoint(gs.max))}ke.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ye.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ye));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ye.fromBufferAttribute(a,c),l&&(Ui.fromBufferAttribute(t,c),ye.add(Ui)),s=Math.max(s,i.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Se(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new D,l[U]=new D;let c=new D,h=new D,d=new D,f=new Tt,m=new Tt,g=new Tt,_=new D,p=new D;function u(U,S,v){c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,v),f.fromBufferAttribute(r,U),m.fromBufferAttribute(r,S),g.fromBufferAttribute(r,v),h.sub(c),d.sub(c),m.sub(f),g.sub(f);let C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(C),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(C),a[U].add(_),a[S].add(_),a[v].add(_),l[U].add(p),l[S].add(p),l[v].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let U=0,S=E.length;U<S;++U){let v=E[U],C=v.start,H=v.count;for(let z=C,X=C+H;z<X;z+=3)u(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let w=new D,M=new D,N=new D,A=new D;function T(U){N.fromBufferAttribute(s,U),A.copy(N);let S=a[U];w.copy(S),w.sub(N.multiplyScalar(N.dot(S))).normalize(),M.crossVectors(A,S);let C=M.dot(l[U])<0?-1:1;o.setXYZW(U,w.x,w.y,w.z,C)}for(let U=0,S=E.length;U<S;++U){let v=E[U],C=v.start,H=v.count;for(let z=C,X=C+H;z<X;z+=3)T(t.getX(z+0)),T(t.getX(z+1)),T(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,d=new D;if(t)for(let f=0,m=t.count;f<m;f+=3){let g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[m++]}return new Se(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],m=t(f,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},mc=new oe,si=new ji,Ks=new Zi,gc=new D,Qs=new D,tr=new D,er=new D,Uo=new D,nr=new D,_c=new D,ir=new D,ue=class extends Me{constructor(t=new Fe,e=new gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){nr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Uo.fromBufferAttribute(d,t),o?nr.addScaledVector(Uo,h):nr.addScaledVector(Uo.sub(e),h))}e.add(nr)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere),Ks.applyMatrix4(r),si.copy(t.ray).recast(t.near),!(Ks.containsPoint(si.origin)===!1&&(si.intersectSphere(Ks,gc)===null||si.origin.distanceToSquared(gc)>(t.far-t.near)**2))&&(mc.copy(r).invert(),si.copy(t.ray).applyMatrix4(mc),!(i.boundingBox!==null&&si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],u=o[p.materialIndex],E=Math.max(p.start,m.start),w=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,N=w;M<N;M+=3){let A=a.getX(M),T=a.getX(M+1),U=a.getX(M+2);s=sr(this,u,t,i,c,h,d,A,T,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){let E=a.getX(p),w=a.getX(p+1),M=a.getX(p+2);s=sr(this,o,t,i,c,h,d,E,w,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],u=o[p.materialIndex],E=Math.max(p.start,m.start),w=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,N=w;M<N;M+=3){let A=M,T=M+1,U=M+2;s=sr(this,u,t,i,c,h,d,A,T,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){let E=p,w=p+1,M=p+2;s=sr(this,o,t,i,c,h,d,E,w,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Sd(n,t,e,i,s,r,o,a){let l;if(t.side===Ne?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===jn,a),l===null)return null;ir.copy(a),ir.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(ir);return c<e.near||c>e.far?null:{distance:c,point:ir.clone(),object:n}}function sr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Qs),n.getVertexPosition(l,tr),n.getVertexPosition(c,er);let h=Sd(n,t,e,i,Qs,tr,er,_c);if(h){let d=new D;hi.getBarycoord(_c,Qs,tr,er,d),s&&(h.uv=hi.getInterpolatedAttribute(s,a,l,c,d,new Tt)),r&&(h.uv1=hi.getInterpolatedAttribute(r,a,l,c,d,new Tt)),o&&(h.normal=hi.getInterpolatedAttribute(o,a,l,c,d,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new D,materialIndex:0};hi.getNormal(Qs,tr,er,f.normal),h.face=f,h.barycoord=d}return h}var Ln=class n extends Fe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,m=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(d,2));function g(_,p,u,E,w,M,N,A,T,U,S){let v=M/T,C=N/U,H=M/2,z=N/2,X=A/2,j=T+1,G=U+1,Q=0,V=0,st=new D;for(let ht=0;ht<G;ht++){let yt=ht*C-z;for(let Ft=0;Ft<j;Ft++){let te=Ft*v-H;st[_]=te*E,st[p]=yt*w,st[u]=X,c.push(st.x,st.y,st.z),st[_]=0,st[p]=0,st[u]=A>0?1:-1,h.push(st.x,st.y,st.z),d.push(Ft/T),d.push(1-ht/U),Q+=1}}for(let ht=0;ht<U;ht++)for(let yt=0;yt<T;yt++){let Ft=f+yt+j*ht,te=f+yt+j*(ht+1),Y=f+(yt+1)+j*(ht+1),tt=f+(yt+1)+j*ht;l.push(Ft,te,tt),l.push(te,Y,tt),V+=6}a.addGroup(m,V,S),m+=V,f+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ji(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Pe(n){let t={};for(let e=0;e<n.length;e++){let i=Ji(n[e]);for(let s in i)t[s]=i[s]}return t}function bd(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function dh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}var Ed={clone:Ji,merge:Pe},wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Td=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends In{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wd,this.fragmentShader=Td,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=bd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},wr=class extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Tn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Yn=new D,xc=new Tt,vc=new Tt,Ie=class extends wr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,xc,vc),e.subVectors(vc,xc)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ys*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ni=-90,Fi=1,Da=class extends Me{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ie(Ni,Fi,t,e);s.layers=this.layers,this.add(s);let r=new Ie(Ni,Fi,t,e);r.layers=this.layers,this.add(r);let o=new Ie(Ni,Fi,t,e);o.layers=this.layers,this.add(o);let a=new Ie(Ni,Fi,t,e);a.layers=this.layers,this.add(a);let l=new Ie(Ni,Fi,t,e);l.layers=this.layers,this.add(l);let c=new Ie(Ni,Fi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Tn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(d,f,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Tr=class extends Ye{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Xi,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ua=class extends Pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Tr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ln(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:Ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ne,blending:$n});r.uniforms.tEquirect.value=e;let o=new ue(s,r),a=e.minFilter;return e.minFilter===fi&&(e.minFilter=hn),new Da(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},No=new D,Ad=new D,Cd=new Dt,Ke=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=No.subVectors(i,e).cross(Ad.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(No),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Cd.getNormalMatrix(t),s=this.coplanarPoint(No).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ri=new Zi,rr=new D,ws=class{constructor(t=new Ke,e=new Ke,i=new Ke,s=new Ke,r=new Ke,o=new Ke){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Tn){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],m=s[8],g=s[9],_=s[10],p=s[11],u=s[12],E=s[13],w=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,p-m,M-u).normalize(),i[1].setComponents(l+r,f+c,p+m,M+u).normalize(),i[2].setComponents(l+o,f+h,p+g,M+E).normalize(),i[3].setComponents(l-o,f-h,p-g,M-E).normalize(),i[4].setComponents(l-a,f-d,p-_,M-w).normalize(),e===Tn)i[5].setComponents(l+a,f+d,p+_,M+w).normalize();else if(e===xr)i[5].setComponents(a,d,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(t){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(rr.x=s.normal.x>0?t.max.x:t.min.x,rr.y=s.normal.y>0?t.max.y:t.min.y,rr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(rr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function fh(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Rd(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){let g=d[f],_=d[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){let _=d[m];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var _i=class n extends Fe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,m=[],g=[],_=[],p=[];for(let u=0;u<h;u++){let E=u*f-o;for(let w=0;w<c;w++){let M=w*d-r;g.push(M,-E,0),_.push(0,0,1),p.push(w/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let E=0;E<a;E++){let w=E+c*u,M=E+c*(u+1),N=E+1+c*(u+1),A=E+1+c*u;m.push(w,M,A),m.push(M,N,A)}this.setIndex(m),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Pd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Id=`#ifdef USE_ALPHAHASH
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
#endif`,Ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ud=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fd=`#ifdef USE_AOMAP
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
#endif`,Od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bd=`#ifdef USE_BATCHING
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
#endif`,zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gd=`#ifdef USE_IRIDESCENCE
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
#endif`,Wd=`#ifdef USE_BUMPMAP
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
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qd=`#define PI 3.141592653589793
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
} // validated`,tf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ef=`vec3 transformedNormal = objectNormal;
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
#endif`,nf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,of=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,af="gl_FragColor = linearToOutputTexel( gl_FragColor );",lf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cf=`#ifdef USE_ENVMAP
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
#endif`,hf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uf=`#ifdef USE_ENVMAP
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
#endif`,df=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
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
#endif`,pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_f=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xf=`#ifdef USE_GRADIENTMAP
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
}`,vf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sf=`uniform bool receiveShadow;
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
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cf=`PhysicalMaterial material;
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
#endif`,Rf=`struct PhysicalMaterial {
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
}`,Pf=`
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
#endif`,If=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Df=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kf=`#if defined( USE_POINTS_UV )
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
#endif`,Vf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yf=`#ifdef USE_MORPHTARGETS
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
#endif`,qf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$f=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qf=`#ifdef USE_NORMALMAP
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
#endif`,tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ip=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mp=`float getShadowMask() {
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
}`,gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_p=`#ifdef USE_SKINNING
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
#endif`,xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vp=`#ifdef USE_SKINNING
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
#endif`,yp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ep=`#ifdef USE_TRANSMISSION
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
#endif`,wp=`#ifdef USE_TRANSMISSION
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
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ip=`uniform sampler2D t2D;
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
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Np=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`#include <common>
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
}`,Op=`#if DEPTH_PACKING == 3200
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
}`,Bp=`#define DISTANCE
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
}`,zp=`#define DISTANCE
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`uniform float scale;
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Wp=`#include <common>
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
}`,Xp=`uniform vec3 diffuse;
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
}`,Yp=`#define LAMBERT
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
}`,qp=`#define LAMBERT
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
}`,$p=`#define MATCAP
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
}`,Zp=`#define MATCAP
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
}`,jp=`#define NORMAL
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
}`,Jp=`#define NORMAL
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
}`,Kp=`#define PHONG
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
}`,Qp=`#define PHONG
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
}`,tm=`#define STANDARD
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
}`,em=`#define STANDARD
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
}`,nm=`#define TOON
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
}`,im=`#define TOON
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
}`,sm=`uniform float size;
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
}`,rm=`uniform vec3 diffuse;
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
}`,om=`#include <common>
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
}`,am=`uniform vec3 color;
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
}`,lm=`uniform float rotation;
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
}`,cm=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:Pd,alphahash_pars_fragment:Id,alphamap_fragment:Ld,alphamap_pars_fragment:Dd,alphatest_fragment:Ud,alphatest_pars_fragment:Nd,aomap_fragment:Fd,aomap_pars_fragment:Od,batching_pars_vertex:Bd,batching_vertex:zd,begin_vertex:kd,beginnormal_vertex:Vd,bsdfs:Hd,iridescence_fragment:Gd,bumpmap_pars_fragment:Wd,clipping_planes_fragment:Xd,clipping_planes_pars_fragment:Yd,clipping_planes_pars_vertex:qd,clipping_planes_vertex:$d,color_fragment:Zd,color_pars_fragment:jd,color_pars_vertex:Jd,color_vertex:Kd,common:Qd,cube_uv_reflection_fragment:tf,defaultnormal_vertex:ef,displacementmap_pars_vertex:nf,displacementmap_vertex:sf,emissivemap_fragment:rf,emissivemap_pars_fragment:of,colorspace_fragment:af,colorspace_pars_fragment:lf,envmap_fragment:cf,envmap_common_pars_fragment:hf,envmap_pars_fragment:uf,envmap_pars_vertex:df,envmap_physical_pars_fragment:bf,envmap_vertex:ff,fog_vertex:pf,fog_pars_vertex:mf,fog_fragment:gf,fog_pars_fragment:_f,gradientmap_pars_fragment:xf,lightmap_pars_fragment:vf,lights_lambert_fragment:yf,lights_lambert_pars_fragment:Mf,lights_pars_begin:Sf,lights_toon_fragment:Ef,lights_toon_pars_fragment:wf,lights_phong_fragment:Tf,lights_phong_pars_fragment:Af,lights_physical_fragment:Cf,lights_physical_pars_fragment:Rf,lights_fragment_begin:Pf,lights_fragment_maps:If,lights_fragment_end:Lf,logdepthbuf_fragment:Df,logdepthbuf_pars_fragment:Uf,logdepthbuf_pars_vertex:Nf,logdepthbuf_vertex:Ff,map_fragment:Of,map_pars_fragment:Bf,map_particle_fragment:zf,map_particle_pars_fragment:kf,metalnessmap_fragment:Vf,metalnessmap_pars_fragment:Hf,morphinstance_vertex:Gf,morphcolor_vertex:Wf,morphnormal_vertex:Xf,morphtarget_pars_vertex:Yf,morphtarget_vertex:qf,normal_fragment_begin:$f,normal_fragment_maps:Zf,normal_pars_fragment:jf,normal_pars_vertex:Jf,normal_vertex:Kf,normalmap_pars_fragment:Qf,clearcoat_normal_fragment_begin:tp,clearcoat_normal_fragment_maps:ep,clearcoat_pars_fragment:np,iridescence_pars_fragment:ip,opaque_fragment:sp,packing:rp,premultiplied_alpha_fragment:op,project_vertex:ap,dithering_fragment:lp,dithering_pars_fragment:cp,roughnessmap_fragment:hp,roughnessmap_pars_fragment:up,shadowmap_pars_fragment:dp,shadowmap_pars_vertex:fp,shadowmap_vertex:pp,shadowmask_pars_fragment:mp,skinbase_vertex:gp,skinning_pars_vertex:_p,skinning_vertex:xp,skinnormal_vertex:vp,specularmap_fragment:yp,specularmap_pars_fragment:Mp,tonemapping_fragment:Sp,tonemapping_pars_fragment:bp,transmission_fragment:Ep,transmission_pars_fragment:wp,uv_pars_fragment:Tp,uv_pars_vertex:Ap,uv_vertex:Cp,worldpos_vertex:Rp,background_vert:Pp,background_frag:Ip,backgroundCube_vert:Lp,backgroundCube_frag:Dp,cube_vert:Up,cube_frag:Np,depth_vert:Fp,depth_frag:Op,distanceRGBA_vert:Bp,distanceRGBA_frag:zp,equirect_vert:kp,equirect_frag:Vp,linedashed_vert:Hp,linedashed_frag:Gp,meshbasic_vert:Wp,meshbasic_frag:Xp,meshlambert_vert:Yp,meshlambert_frag:qp,meshmatcap_vert:$p,meshmatcap_frag:Zp,meshnormal_vert:jp,meshnormal_frag:Jp,meshphong_vert:Kp,meshphong_frag:Qp,meshphysical_vert:tm,meshphysical_frag:em,meshtoon_vert:nm,meshtoon_frag:im,points_vert:sm,points_frag:rm,shadow_vert:om,shadow_frag:am,sprite_vert:lm,sprite_frag:cm},nt={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},cn={basic:{uniforms:Pe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Pe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Pe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Pe([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Pe([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Pe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Pe([nt.points,nt.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Pe([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Pe([nt.common,nt.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Pe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Pe([nt.sprite,nt.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Pe([nt.common,nt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Pe([nt.lights,nt.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};cn.physical={uniforms:Pe([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};var or={r:0,b:0,g:0},oi=new sn,hm=new oe;function um(n,t,e,i,s,r,o){let a=new Rt(0),l=r===!0?0:1,c,h,d=null,f=0,m=null;function g(E){let w=E.isScene===!0?E.background:null;return w&&w.isTexture&&(w=(E.backgroundBlurriness>0?e:t).get(w)),w}function _(E){let w=!1,M=g(E);M===null?u(a,l):M&&M.isColor&&(u(M,1),w=!0);let N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(E,w){let M=g(w);M&&(M.isCubeTexture||M.mapping===qr)?(h===void 0&&(h=new ue(new Ln(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:Ji(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),oi.copy(w.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(hm.makeRotationFromEuler(oi)),h.material.toneMapped=Xt.getTransfer(M.colorSpace)!==Kt,(d!==M||f!==M.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=M,f=M.version,m=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ue(new _i(2,2),new dn({name:"BackgroundMaterial",uniforms:Ji(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(M.colorSpace)!==Kt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,m=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function u(E,w){E.getRGB(or,dh(n)),i.buffers.color.setClear(or.r,or.g,or.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(E,w=1){a.set(E),l=w,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,u(a,l)},render:_,addToRenderList:p}}function dm(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(v,C,H,z,X){let j=!1,G=d(z,H,C);r!==G&&(r=G,c(r.object)),j=m(v,z,H,X),j&&g(v,z,H,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,M(v,C,H,z),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function d(v,C,H){let z=H.wireframe===!0,X=i[v.id];X===void 0&&(X={},i[v.id]=X);let j=X[C.id];j===void 0&&(j={},X[C.id]=j);let G=j[z];return G===void 0&&(G=f(l()),j[z]=G),G}function f(v){let C=[],H=[],z=[];for(let X=0;X<e;X++)C[X]=0,H[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:H,attributeDivisors:z,object:v,attributes:{},index:null}}function m(v,C,H,z){let X=r.attributes,j=C.attributes,G=0,Q=H.getAttributes();for(let V in Q)if(Q[V].location>=0){let ht=X[V],yt=j[V];if(yt===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(yt=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(yt=v.instanceColor)),ht===void 0||ht.attribute!==yt||yt&&ht.data!==yt.data)return!0;G++}return r.attributesNum!==G||r.index!==z}function g(v,C,H,z){let X={},j=C.attributes,G=0,Q=H.getAttributes();for(let V in Q)if(Q[V].location>=0){let ht=j[V];ht===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(ht=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(ht=v.instanceColor));let yt={};yt.attribute=ht,ht&&ht.data&&(yt.data=ht.data),X[V]=yt,G++}r.attributes=X,r.attributesNum=G,r.index=z}function _(){let v=r.newAttributes;for(let C=0,H=v.length;C<H;C++)v[C]=0}function p(v){u(v,0)}function u(v,C){let H=r.newAttributes,z=r.enabledAttributes,X=r.attributeDivisors;H[v]=1,z[v]===0&&(n.enableVertexAttribArray(v),z[v]=1),X[v]!==C&&(n.vertexAttribDivisor(v,C),X[v]=C)}function E(){let v=r.newAttributes,C=r.enabledAttributes;for(let H=0,z=C.length;H<z;H++)C[H]!==v[H]&&(n.disableVertexAttribArray(H),C[H]=0)}function w(v,C,H,z,X,j,G){G===!0?n.vertexAttribIPointer(v,C,H,X,j):n.vertexAttribPointer(v,C,H,z,X,j)}function M(v,C,H,z){_();let X=z.attributes,j=H.getAttributes(),G=C.defaultAttributeValues;for(let Q in j){let V=j[Q];if(V.location>=0){let st=X[Q];if(st===void 0&&(Q==="instanceMatrix"&&v.instanceMatrix&&(st=v.instanceMatrix),Q==="instanceColor"&&v.instanceColor&&(st=v.instanceColor)),st!==void 0){let ht=st.normalized,yt=st.itemSize,Ft=t.get(st);if(Ft===void 0)continue;let te=Ft.buffer,Y=Ft.type,tt=Ft.bytesPerElement,_t=Y===n.INT||Y===n.UNSIGNED_INT||st.gpuType===ol;if(st.isInterleavedBufferAttribute){let rt=st.data,wt=rt.stride,Pt=st.offset;if(rt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<V.locationSize;Ot++)u(V.location+Ot,rt.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ot=0;Ot<V.locationSize;Ot++)p(V.location+Ot);n.bindBuffer(n.ARRAY_BUFFER,te);for(let Ot=0;Ot<V.locationSize;Ot++)w(V.location+Ot,yt/V.locationSize,Y,ht,wt*tt,(Pt+yt/V.locationSize*Ot)*tt,_t)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<V.locationSize;rt++)u(V.location+rt,st.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<V.locationSize;rt++)p(V.location+rt);n.bindBuffer(n.ARRAY_BUFFER,te);for(let rt=0;rt<V.locationSize;rt++)w(V.location+rt,yt/V.locationSize,Y,ht,yt*tt,yt/V.locationSize*rt*tt,_t)}}else if(G!==void 0){let ht=G[Q];if(ht!==void 0)switch(ht.length){case 2:n.vertexAttrib2fv(V.location,ht);break;case 3:n.vertexAttrib3fv(V.location,ht);break;case 4:n.vertexAttrib4fv(V.location,ht);break;default:n.vertexAttrib1fv(V.location,ht)}}}}E()}function N(){U();for(let v in i){let C=i[v];for(let H in C){let z=C[H];for(let X in z)h(z[X].object),delete z[X];delete C[H]}delete i[v]}}function A(v){if(i[v.id]===void 0)return;let C=i[v.id];for(let H in C){let z=C[H];for(let X in z)h(z[X].object),delete z[X];delete C[H]}delete i[v.id]}function T(v){for(let C in i){let H=i[C];if(H[v.id]===void 0)continue;let z=H[v.id];for(let X in z)h(z[X].object),delete z[X];delete H[v.id]}}function U(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:S,dispose:N,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:E}}function fm(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),e.update(h,i,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g];e.update(m,i,1)}function l(c,h,d,f){if(d===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*f[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function pm(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==tn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let U=T===Cs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Cn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==wn&&!U)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:N,maxSamples:A}}function mm(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Ke,a=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||i!==0||s;return s=f,i=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,u=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let E=r?0:i,w=E*4,M=u.clippingState||null;l.value=M,M=h(g,f,w,m);for(let N=0;N!==w;++N)M[N]=e[N];u.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,m,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let u=m+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<u)&&(p=new Float32Array(u));for(let w=0,M=m;w!==_;++w,M+=4)o.copy(d[w]).applyMatrix4(E,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function gm(n){let t=new WeakMap;function e(o,a){return a===Qo?o.mapping=Xi:a===ta&&(o.mapping=Yi),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Qo||a===ta)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ua(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Ar=class extends wr{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},zi=4,yc=[.125,.215,.35,.446,.526,.582],ui=20,Fo=new Ar,Mc=new Rt,Oo=null,Bo=0,zo=0,ko=!1,li=(1+Math.sqrt(5))/2,Oi=1/li,Sc=[new D(-li,Oi,0),new D(li,Oi,0),new D(-Oi,0,li),new D(Oi,0,li),new D(0,li,-Oi),new D(0,li,Oi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Cr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Oo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oo,Bo,zo),this._renderer.xr.enabled=ko,t.scissorTest=!1,ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Cs,format:tn,colorSpace:Qi,depthBuffer:!1},s=bc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bc(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_m(r)),this._blurMaterial=xm(r,t,e)}return s}_compileMaterial(t){let e=new ue(this._lodPlanes[0],t);this._renderer.compile(e,Fo)}_sceneToCubeUV(t,e,i,s){let a=new Ie(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Mc),h.toneMapping=Zn,h.autoClear=!1;let m=new gi({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),g=new ue(new Ln,m),_=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Mc),_=!0);for(let u=0;u<6;u++){let E=u%3;E===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):E===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let w=this._cubeSize;ar(s,E*w,u>2?w:0,w,w),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Xi||t.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ec());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ue(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ar(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Fo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Sc[(s-r-1)%Sc.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new ue(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ui-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):ui;p>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ui}`);let u=[],E=0;for(let T=0;T<ui;++T){let U=T/_,S=Math.exp(-U*U/2);u.push(S),T===0?E+=S:T<p&&(E+=2*S)}for(let T=0;T<u.length;T++)u[T]=u[T]/E;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-i;let M=this._sizeLods[s],N=3*M*(s>w-zi?s-w+zi:0),A=4*(this._cubeSize-M);ar(e,N,A,3*M,2*M),l.setRenderTarget(e),l.render(d,Fo)}};function _m(n){let t=[],e=[],i=[],s=n,r=n-zi+1+yc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-zi?l=yc[o-n+zi-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,u=1,E=new Float32Array(_*g*m),w=new Float32Array(p*g*m),M=new Float32Array(u*g*m);for(let A=0;A<m;A++){let T=A%3*2/3-1,U=A>2?0:-1,S=[T,U,0,T+2/3,U,0,T+2/3,U+1,0,T,U,0,T+2/3,U+1,0,T,U+1,0];E.set(S,_*g*A),w.set(f,p*g*A);let v=[A,A,A,A,A,A];M.set(v,u*g*A)}let N=new Fe;N.setAttribute("position",new Se(E,_)),N.setAttribute("uv",new Se(w,p)),N.setAttribute("faceIndex",new Se(M,u)),t.push(N),s>zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function bc(n,t,e){let i=new Pn(n,t,e);return i.texture.mapping=qr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ar(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function xm(n,t,e){let i=new Float32Array(ui),s=new D(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pl(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Ec(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pl(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function wc(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function pl(){return`

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
	`}function vm(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Qo||l===ta,h=l===Xi||l===Yi;if(c||h){let d=t.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Cr(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let m=a.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new Cr(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function ym(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&xs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Mm(n,t,e,i){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)t.remove(_[p])}f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let g in f)t.update(f[g],n.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let _=m[g];for(let p=0,u=_.length;p<u;p++)t.update(_[p],n.ARRAY_BUFFER)}}function c(d){let f=[],m=d.index,g=d.attributes.position,_=0;if(m!==null){let E=m.array;_=m.version;for(let w=0,M=E.length;w<M;w+=3){let N=E[w+0],A=E[w+1],T=E[w+2];f.push(N,A,A,T,T,N)}}else if(g!==void 0){let E=g.array;_=g.version;for(let w=0,M=E.length/3-1;w<M;w+=3){let N=w+0,A=w+1,T=w+2;f.push(N,A,A,T,T,N)}}else return;let p=new(hh(f)?Er:br)(f,1);p.version=_;let u=r.get(d);u&&t.remove(u),r.set(d,p)}function h(d){let f=r.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Sm(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,m){n.drawElements(i,m,r,f*o),e.update(m,i,1)}function c(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,f*o,g),e.update(m,i,g))}function h(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,f,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];e.update(p,i,1)}function d(f,m,g,_){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)c(f[u]/o,m[u],_[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,f,0,_,0,g);let u=0;for(let E=0;E<g;E++)u+=m[E]*_[E];e.update(u,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function bm(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Em(n,t,e){let i=new WeakMap,s=new he;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==d){let S=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],w=0;m===!0&&(w=1),g===!0&&(w=2),_===!0&&(w=3);let M=a.attributes.position.count*w,N=1;M>t.maxTextureSize&&(N=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let A=new Float32Array(M*N*4*d),T=new Mr(A,M,N,d);T.type=wn,T.needsUpdate=!0;let U=w*4;for(let v=0;v<d;v++){let C=p[v],H=u[v],z=E[v],X=M*N*4*v;for(let j=0;j<C.count;j++){let G=j*U;m===!0&&(s.fromBufferAttribute(C,j),A[X+G+0]=s.x,A[X+G+1]=s.y,A[X+G+2]=s.z,A[X+G+3]=0),g===!0&&(s.fromBufferAttribute(H,j),A[X+G+4]=s.x,A[X+G+5]=s.y,A[X+G+6]=s.z,A[X+G+7]=0),_===!0&&(s.fromBufferAttribute(z,j),A[X+G+8]=s.x,A[X+G+9]=s.y,A[X+G+10]=s.z,A[X+G+11]=z.itemSize===4?s.w:1)}}f={count:d,texture:T,size:new Tt(M,N)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];let g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function wm(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Rr=class extends Ye{constructor(t,e,i,s,r,o,a,l,c,h=Vi){if(h!==Vi&&h!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Vi&&(i=pi),i===void 0&&h===$i&&(i=qi),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ph=new Ye,Tc=new Rr(1,1),mh=new Mr,gh=new La,_h=new Tr,Ac=[],Cc=[],Rc=new Float32Array(16),Pc=new Float32Array(9),Ic=new Float32Array(4);function es(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Ac[s];if(r===void 0&&(r=new Float32Array(s),Ac[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ge(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function _e(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function jr(n,t){let e=Cc[t];e===void 0&&(e=new Int32Array(t),Cc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Tm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Am(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;n.uniform2fv(this.addr,t),_e(e,t)}}function Cm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;n.uniform3fv(this.addr,t),_e(e,t)}}function Rm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;n.uniform4fv(this.addr,t),_e(e,t)}}function Pm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,i))return;Ic.set(i),n.uniformMatrix2fv(this.addr,!1,Ic),_e(e,i)}}function Im(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,i))return;Pc.set(i),n.uniformMatrix3fv(this.addr,!1,Pc),_e(e,i)}}function Lm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,i))return;Rc.set(i),n.uniformMatrix4fv(this.addr,!1,Rc),_e(e,i)}}function Dm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Um(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;n.uniform2iv(this.addr,t),_e(e,t)}}function Nm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;n.uniform3iv(this.addr,t),_e(e,t)}}function Fm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;n.uniform4iv(this.addr,t),_e(e,t)}}function Om(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Bm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;n.uniform2uiv(this.addr,t),_e(e,t)}}function zm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;n.uniform3uiv(this.addr,t),_e(e,t)}}function km(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;n.uniform4uiv(this.addr,t),_e(e,t)}}function Vm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Tc.compareFunction=ch,r=Tc):r=ph,e.setTexture2D(t||r,s)}function Hm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||gh,s)}function Gm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||_h,s)}function Wm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||mh,s)}function Xm(n){switch(n){case 5126:return Tm;case 35664:return Am;case 35665:return Cm;case 35666:return Rm;case 35674:return Pm;case 35675:return Im;case 35676:return Lm;case 5124:case 35670:return Dm;case 35667:case 35671:return Um;case 35668:case 35672:return Nm;case 35669:case 35673:return Fm;case 5125:return Om;case 36294:return Bm;case 36295:return zm;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Wm}}function Ym(n,t){n.uniform1fv(this.addr,t)}function qm(n,t){let e=es(t,this.size,2);n.uniform2fv(this.addr,e)}function $m(n,t){let e=es(t,this.size,3);n.uniform3fv(this.addr,e)}function Zm(n,t){let e=es(t,this.size,4);n.uniform4fv(this.addr,e)}function jm(n,t){let e=es(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Jm(n,t){let e=es(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Km(n,t){let e=es(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Qm(n,t){n.uniform1iv(this.addr,t)}function tg(n,t){n.uniform2iv(this.addr,t)}function eg(n,t){n.uniform3iv(this.addr,t)}function ng(n,t){n.uniform4iv(this.addr,t)}function ig(n,t){n.uniform1uiv(this.addr,t)}function sg(n,t){n.uniform2uiv(this.addr,t)}function rg(n,t){n.uniform3uiv(this.addr,t)}function og(n,t){n.uniform4uiv(this.addr,t)}function ag(n,t,e){let i=this.cache,s=t.length,r=jr(e,s);ge(i,r)||(n.uniform1iv(this.addr,r),_e(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ph,r[o])}function lg(n,t,e){let i=this.cache,s=t.length,r=jr(e,s);ge(i,r)||(n.uniform1iv(this.addr,r),_e(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||gh,r[o])}function cg(n,t,e){let i=this.cache,s=t.length,r=jr(e,s);ge(i,r)||(n.uniform1iv(this.addr,r),_e(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||_h,r[o])}function hg(n,t,e){let i=this.cache,s=t.length,r=jr(e,s);ge(i,r)||(n.uniform1iv(this.addr,r),_e(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||mh,r[o])}function ug(n){switch(n){case 5126:return Ym;case 35664:return qm;case 35665:return $m;case 35666:return Zm;case 35674:return jm;case 35675:return Jm;case 35676:return Km;case 5124:case 35670:return Qm;case 35667:case 35671:return tg;case 35668:case 35672:return eg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return sg;case 36295:return rg;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return hg}}var Na=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Xm(e.type)}},Fa=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ug(e.type)}},Oa=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Vo=/(\w+)(\])?(\[|\.)?/g;function Lc(n,t){n.seq.push(t),n.map[t.id]=t}function dg(n,t,e){let i=n.name,s=i.length;for(Vo.lastIndex=0;;){let r=Vo.exec(i),o=Vo.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Lc(e,c===void 0?new Na(a,n,t):new Fa(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new Oa(a),Lc(e,d)),e=d}}}var Gi=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);dg(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Dc(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var fg=37297,pg=0;function mg(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Uc=new Dt;function gg(n){Xt._getMatrix(Uc,Xt.workingColorSpace,n);let t=`mat3( ${Uc.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(n)){case $r:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Nc(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+mg(n.getShaderSource(t),o)}else return s}function _g(n,t){let e=gg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function xg(n,t){let e;switch(t){case Au:e="Linear";break;case Cu:e="Reinhard";break;case Ru:e="Cineon";break;case Pu:e="ACESFilmic";break;case Lu:e="AgX";break;case Du:e="Neutral";break;case Iu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var lr=new D;function vg(){Xt.getLuminanceCoefficients(lr);let n=lr.x.toFixed(4),t=lr.y.toFixed(4),e=lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)}function Mg(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Sg(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function vs(n){return n!==""}function Fc(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(n){return n.replace(bg,wg)}var Eg=new Map;function wg(n,t){let e=Nt[t];if(e===void 0){let i=Eg.get(t);if(i!==void 0)e=Nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ba(e)}var Tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bc(n){return n.replace(Tg,Ag)}function Ag(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zc(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Cg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Jc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===ou?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function Rg(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xi:case Yi:t="ENVMAP_TYPE_CUBE";break;case qr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Pg(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Yi:t="ENVMAP_MODE_REFRACTION";break}return t}function Ig(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Yr:t="ENVMAP_BLENDING_MULTIPLY";break;case wu:t="ENVMAP_BLENDING_MIX";break;case Tu:t="ENVMAP_BLENDING_ADD";break}return t}function Lg(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Dg(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Cg(e),c=Rg(e),h=Pg(e),d=Ig(e),f=Lg(e),m=yg(e),g=Mg(r),_=s.createProgram(),p,u,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vs).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vs).join(`
`),u.length>0&&(u+=`
`)):(p=[zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),u=[zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?Nt.tonemapping_pars_fragment:"",e.toneMapping!==Zn?xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,_g("linearToOutputTexel",e.outputColorSpace),vg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vs).join(`
`)),o=Ba(o),o=Fc(o,e),o=Oc(o,e),a=Ba(a),a=Fc(a,e),a=Oc(a,e),o=Bc(o),a=Bc(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===Kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let w=E+p+o,M=E+u+a,N=Dc(s,s.VERTEX_SHADER,w),A=Dc(s,s.FRAGMENT_SHADER,M);s.attachShader(_,N),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(C){if(n.debug.checkShaderErrors){let H=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(N).trim(),X=s.getShaderInfoLog(A).trim(),j=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,N,A);else{let Q=Nc(s,N,"vertex"),V=Nc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+Q+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||X==="")&&(G=!1);G&&(C.diagnostics={runnable:j,programLog:H,vertexShader:{log:z,prefix:p},fragmentShader:{log:X,prefix:u}})}s.deleteShader(N),s.deleteShader(A),U=new Gi(s,_),S=Sg(s,_)}let U;this.getUniforms=function(){return U===void 0&&T(this),U};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,fg)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=A,this}var Ug=0,za=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new ka(t),e.set(t,i)),i}},ka=class{constructor(t){this.id=Ug++,this.code=t,this.usedTimes=0}};function Ng(n,t,e,i,s,r,o){let a=new Sr,l=new za,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,v,C,H,z){let X=H.fog,j=z.geometry,G=S.isMeshStandardMaterial?H.environment:null,Q=(S.isMeshStandardMaterial?e:t).get(S.envMap||G),V=Q&&Q.mapping===qr?Q.image.height:null,st=g[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));let ht=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,yt=ht!==void 0?ht.length:0,Ft=0;j.morphAttributes.position!==void 0&&(Ft=1),j.morphAttributes.normal!==void 0&&(Ft=2),j.morphAttributes.color!==void 0&&(Ft=3);let te,Y,tt,_t;if(st){let Jt=cn[st];te=Jt.vertexShader,Y=Jt.fragmentShader}else te=S.vertexShader,Y=S.fragmentShader,l.update(S),tt=l.getVertexShaderID(S),_t=l.getFragmentShaderID(S);let rt=n.getRenderTarget(),wt=n.state.buffers.depth.getReversed(),Pt=z.isInstancedMesh===!0,Ot=z.isBatchedMesh===!0,le=!!S.map,Gt=!!S.matcap,fe=!!Q,L=!!S.aoMap,He=!!S.lightMap,kt=!!S.bumpMap,Vt=!!S.normalMap,bt=!!S.displacementMap,ie=!!S.emissiveMap,Mt=!!S.metalnessMap,b=!!S.roughnessMap,x=S.anisotropy>0,F=S.clearcoat>0,q=S.dispersion>0,Z=S.iridescence>0,W=S.sheen>0,xt=S.transmission>0,ot=x&&!!S.anisotropyMap,ut=F&&!!S.clearcoatMap,Wt=F&&!!S.clearcoatNormalMap,J=F&&!!S.clearcoatRoughnessMap,dt=Z&&!!S.iridescenceMap,Et=Z&&!!S.iridescenceThicknessMap,At=W&&!!S.sheenColorMap,ft=W&&!!S.sheenRoughnessMap,Ht=!!S.specularMap,Ut=!!S.specularColorMap,ee=!!S.specularIntensityMap,R=xt&&!!S.transmissionMap,it=xt&&!!S.thicknessMap,k=!!S.gradientMap,$=!!S.alphaMap,ct=S.alphaTest>0,at=!!S.alphaHash,It=!!S.extensions,ce=Zn;S.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ce=n.toneMapping);let be={shaderID:st,shaderType:S.type,shaderName:S.name,vertexShader:te,fragmentShader:Y,defines:S.defines,customVertexShaderID:tt,customFragmentShaderID:_t,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ot,batchingColor:Ot&&z._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&z.instanceColor!==null,instancingMorph:Pt&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?n.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Qi,alphaToCoverage:!!S.alphaToCoverage,map:le,matcap:Gt,envMap:fe,envMapMode:fe&&Q.mapping,envMapCubeUVHeight:V,aoMap:L,lightMap:He,bumpMap:kt,normalMap:Vt,displacementMap:f&&bt,emissiveMap:ie,normalMapObjectSpace:Vt&&S.normalMapType===Ou,normalMapTangentSpace:Vt&&S.normalMapType===dl,metalnessMap:Mt,roughnessMap:b,anisotropy:x,anisotropyMap:ot,clearcoat:F,clearcoatMap:ut,clearcoatNormalMap:Wt,clearcoatRoughnessMap:J,dispersion:q,iridescence:Z,iridescenceMap:dt,iridescenceThicknessMap:Et,sheen:W,sheenColorMap:At,sheenRoughnessMap:ft,specularMap:Ht,specularColorMap:Ut,specularIntensityMap:ee,transmission:xt,transmissionMap:R,thicknessMap:it,gradientMap:k,opaque:S.transparent===!1&&S.blending===ki&&S.alphaToCoverage===!1,alphaMap:$,alphaTest:ct,alphaHash:at,combine:S.combine,mapUv:le&&_(S.map.channel),aoMapUv:L&&_(S.aoMap.channel),lightMapUv:He&&_(S.lightMap.channel),bumpMapUv:kt&&_(S.bumpMap.channel),normalMapUv:Vt&&_(S.normalMap.channel),displacementMapUv:bt&&_(S.displacementMap.channel),emissiveMapUv:ie&&_(S.emissiveMap.channel),metalnessMapUv:Mt&&_(S.metalnessMap.channel),roughnessMapUv:b&&_(S.roughnessMap.channel),anisotropyMapUv:ot&&_(S.anisotropyMap.channel),clearcoatMapUv:ut&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:At&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:ft&&_(S.sheenRoughnessMap.channel),specularMapUv:Ht&&_(S.specularMap.channel),specularColorMapUv:Ut&&_(S.specularColorMap.channel),specularIntensityMapUv:ee&&_(S.specularIntensityMap.channel),transmissionMapUv:R&&_(S.transmissionMap.channel),thicknessMapUv:it&&_(S.thicknessMap.channel),alphaMapUv:$&&_(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Vt||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!j.attributes.uv&&(le||$),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:wt,skinning:z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Ft,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ce,decodeVideoTexture:le&&S.map.isVideoTexture===!0&&Xt.getTransfer(S.map.colorSpace)===Kt,decodeVideoTextureEmissive:ie&&S.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(S.emissiveMap.colorSpace)===Kt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Qe,flipSided:S.side===Ne,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:It&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&S.extensions.multiDraw===!0||Ot)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return be.vertexUv1s=c.has(1),be.vertexUv2s=c.has(2),be.vertexUv3s=c.has(3),c.clear(),be}function u(S){let v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(let C in S.defines)v.push(C),v.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(E(v,S),w(v,S),v.push(n.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function E(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function w(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function M(S){let v=g[S.type],C;if(v){let H=cn[v];C=Ed.clone(H.uniforms)}else C=S.uniforms;return C}function N(S,v){let C;for(let H=0,z=h.length;H<z;H++){let X=h[H];if(X.cacheKey===v){C=X,++C.usedTimes;break}}return C===void 0&&(C=new Dg(n,v,S,r),h.push(C)),C}function A(S){if(--S.usedTimes===0){let v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function T(S){l.remove(S)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:M,acquireProgram:N,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:U}}function Fg(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Og(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function kc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Vc(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,f,m,g,_,p){let u=n[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},n[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=p),t++,u}function a(d,f,m,g,_,p){let u=o(d,f,m,g,_,p);m.transmission>0?i.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(d,f,m,g,_,p){let u=o(d,f,m,g,_,p);m.transmission>0?i.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||Og),i.length>1&&i.sort(f||kc),s.length>1&&s.sort(f||kc)}function h(){for(let d=t,f=n.length;d<f;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Bg(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Vc,n.set(i,[o])):s>=r.length?(o=new Vc,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function zg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Rt};break;case"SpotLight":e={position:new D,direction:new D,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function kg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Vg=0;function Hg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Gg(n){let t=new zg,e=kg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let s=new D,r=new oe,o=new oe;function a(c){let h=0,d=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let m=0,g=0,_=0,p=0,u=0,E=0,w=0,M=0,N=0,A=0,T=0;c.sort(Hg);for(let S=0,v=c.length;S<v;S++){let C=c[S],H=C.color,z=C.intensity,X=C.distance,j=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=H.r*z,d+=H.g*z,f+=H.b*z;else if(C.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(C.sh.coefficients[G],z);T++}else if(C.isDirectionalLight){let G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Q=C.shadow,V=e.get(C);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,i.directionalShadow[m]=V,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=C.shadow.matrix,E++}i.directional[m]=G,m++}else if(C.isSpotLight){let G=t.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(H).multiplyScalar(z),G.distance=X,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,i.spot[_]=G;let Q=C.shadow;if(C.map&&(i.spotLightMap[N]=C.map,N++,Q.updateMatrices(C),C.castShadow&&A++),i.spotLightMatrix[_]=Q.matrix,C.castShadow){let V=e.get(C);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=j,M++}_++}else if(C.isRectAreaLight){let G=t.get(C);G.color.copy(H).multiplyScalar(z),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),i.rectArea[p]=G,p++}else if(C.isPointLight){let G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){let Q=C.shadow,V=e.get(C);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=C.shadow.matrix,w++}i.point[g]=G,g++}else if(C.isHemisphereLight){let G=t.get(C);G.skyColor.copy(C.color).multiplyScalar(z),G.groundColor.copy(C.groundColor).multiplyScalar(z),i.hemi[u]=G,u++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let U=i.hash;(U.directionalLength!==m||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==p||U.hemiLength!==u||U.numDirectionalShadows!==E||U.numPointShadows!==w||U.numSpotShadows!==M||U.numSpotMaps!==N||U.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=M+N-A,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,U.directionalLength=m,U.pointLength=g,U.spotLength=_,U.rectAreaLength=p,U.hemiLength=u,U.numDirectionalShadows=E,U.numPointShadows=w,U.numSpotShadows=M,U.numSpotMaps=N,U.numLightProbes=T,i.version=Vg++)}function l(c,h){let d=0,f=0,m=0,g=0,_=0,p=h.matrixWorldInverse;for(let u=0,E=c.length;u<E;u++){let w=c[u];if(w.isDirectionalLight){let M=i.directional[d];M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(w.isSpotLight){let M=i.spot[m];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),m++}else if(w.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(w.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),f++}else if(w.isHemisphereLight){let M=i.hemi[_];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function Hc(n){let t=new Gg(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Wg(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Hc(n),t.set(s,[a])):r>=o.length?(a=new Hc(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Va=class extends In{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Nu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ha=class extends In{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yg=`uniform sampler2D shadow_pass;
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
}`;function qg(n,t,e){let i=new ws,s=new Tt,r=new Tt,o=new he,a=new Va({depthPacking:Fu}),l=new Ha,c={},h=e.maxTextureSize,d={[jn]:Ne,[Ne]:jn,[Qe]:Qe},f=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:Xg,fragmentShader:Yg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new Fe;g.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ue(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let u=this.type;this.render=function(A,T,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;let S=n.getRenderTarget(),v=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),H=n.state;H.setBlending($n),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let z=u!==En&&this.type===En,X=u===En&&this.type!==En;for(let j=0,G=A.length;j<G;j++){let Q=A[j],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let st=V.getFrameExtents();if(s.multiply(st),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,V.mapSize.y=r.y)),V.map===null||z===!0||X===!0){let yt=this.type!==En?{minFilter:en,magFilter:en}:{};V.map!==null&&V.map.dispose(),V.map=new Pn(s.x,s.y,yt),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let ht=V.getViewportCount();for(let yt=0;yt<ht;yt++){let Ft=V.getViewport(yt);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),H.viewport(o),V.updateMatrices(Q,yt),i=V.getFrustum(),M(T,U,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===En&&E(V,U),V.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(S,v,C)};function E(A,T){let U=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Pn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,U,f,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,U,m,_,null)}function w(A,T,U,S){let v=null,C=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)v=C;else if(v=U.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let H=v.uuid,z=T.uuid,X=c[H];X===void 0&&(X={},c[H]=X);let j=X[z];j===void 0&&(j=v.clone(),X[z]=j,T.addEventListener("dispose",N)),v=j}if(v.visible=T.visible,v.wireframe=T.wireframe,S===En?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:d[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,U.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let H=n.properties.get(v);H.light=U}return v}function M(A,T,U,S,v){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===En)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);let z=t.update(A),X=A.material;if(Array.isArray(X)){let j=z.groups;for(let G=0,Q=j.length;G<Q;G++){let V=j[G],st=X[V.materialIndex];if(st&&st.visible){let ht=w(A,st,S,v);A.onBeforeShadow(n,A,T,U,z,ht,V),n.renderBufferDirect(U,null,z,ht,A,V),A.onAfterShadow(n,A,T,U,z,ht,V)}}}else if(X.visible){let j=w(A,X,S,v);A.onBeforeShadow(n,A,T,U,z,j,null),n.renderBufferDirect(U,null,z,j,A,null),A.onAfterShadow(n,A,T,U,z,j,null)}}let H=A.children;for(let z=0,X=H.length;z<X;z++)M(H[z],T,U,S,v)}function N(A){A.target.removeEventListener("dispose",N);for(let U in c){let S=c[U],v=A.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}var $g={[Yo]:qo,[$o]:Jo,[Zo]:Ko,[Wi]:jo,[qo]:Yo,[Jo]:$o,[Ko]:Zo,[jo]:Wi};function Zg(n,t){function e(){let R=!1,it=new he,k=null,$=new he(0,0,0,0);return{setMask:function(ct){k!==ct&&!R&&(n.colorMask(ct,ct,ct,ct),k=ct)},setLocked:function(ct){R=ct},setClear:function(ct,at,It,ce,be){be===!0&&(ct*=ce,at*=ce,It*=ce),it.set(ct,at,It,ce),$.equals(it)===!1&&(n.clearColor(ct,at,It,ce),$.copy(it))},reset:function(){R=!1,k=null,$.set(-1,0,0,0)}}}function i(){let R=!1,it=!1,k=null,$=null,ct=null;return{setReversed:function(at){if(it!==at){let It=t.get("EXT_clip_control");it?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);let ce=ct;ct=null,this.setClear(ce)}it=at},getReversed:function(){return it},setTest:function(at){at?rt(n.DEPTH_TEST):wt(n.DEPTH_TEST)},setMask:function(at){k!==at&&!R&&(n.depthMask(at),k=at)},setFunc:function(at){if(it&&(at=$g[at]),$!==at){switch(at){case Yo:n.depthFunc(n.NEVER);break;case qo:n.depthFunc(n.ALWAYS);break;case $o:n.depthFunc(n.LESS);break;case Wi:n.depthFunc(n.LEQUAL);break;case Zo:n.depthFunc(n.EQUAL);break;case jo:n.depthFunc(n.GEQUAL);break;case Jo:n.depthFunc(n.GREATER);break;case Ko:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=at}},setLocked:function(at){R=at},setClear:function(at){ct!==at&&(it&&(at=1-at),n.clearDepth(at),ct=at)},reset:function(){R=!1,k=null,$=null,ct=null,it=!1}}}function s(){let R=!1,it=null,k=null,$=null,ct=null,at=null,It=null,ce=null,be=null;return{setTest:function(Jt){R||(Jt?rt(n.STENCIL_TEST):wt(n.STENCIL_TEST))},setMask:function(Jt){it!==Jt&&!R&&(n.stencilMask(Jt),it=Jt)},setFunc:function(Jt,qe,_n){(k!==Jt||$!==qe||ct!==_n)&&(n.stencilFunc(Jt,qe,_n),k=Jt,$=qe,ct=_n)},setOp:function(Jt,qe,_n){(at!==Jt||It!==qe||ce!==_n)&&(n.stencilOp(Jt,qe,_n),at=Jt,It=qe,ce=_n)},setLocked:function(Jt){R=Jt},setClear:function(Jt){be!==Jt&&(n.clearStencil(Jt),be=Jt)},reset:function(){R=!1,it=null,k=null,$=null,ct=null,at=null,It=null,ce=null,be=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,u=null,E=null,w=null,M=null,N=null,A=null,T=new Rt(0,0,0),U=0,S=!1,v=null,C=null,H=null,z=null,X=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,Q=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=Q>=2);let st=null,ht={},yt=n.getParameter(n.SCISSOR_BOX),Ft=n.getParameter(n.VIEWPORT),te=new he().fromArray(yt),Y=new he().fromArray(Ft);function tt(R,it,k,$){let ct=new Uint8Array(4),at=n.createTexture();n.bindTexture(R,at),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let It=0;It<k;It++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(it,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,ct):n.texImage2D(it+It,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ct);return at}let _t={};_t[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),_t[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_t[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(n.DEPTH_TEST),o.setFunc(Wi),kt(!1),Vt(Gl),rt(n.CULL_FACE),L($n);function rt(R){h[R]!==!0&&(n.enable(R),h[R]=!0)}function wt(R){h[R]!==!1&&(n.disable(R),h[R]=!1)}function Pt(R,it){return d[R]!==it?(n.bindFramebuffer(R,it),d[R]=it,R===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=it),R===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=it),!0):!1}function Ot(R,it){let k=m,$=!1;if(R){k=f.get(it),k===void 0&&(k=[],f.set(it,k));let ct=R.textures;if(k.length!==ct.length||k[0]!==n.COLOR_ATTACHMENT0){for(let at=0,It=ct.length;at<It;at++)k[at]=n.COLOR_ATTACHMENT0+at;k.length=ct.length,$=!0}}else k[0]!==n.BACK&&(k[0]=n.BACK,$=!0);$&&n.drawBuffers(k)}function le(R){return g!==R?(n.useProgram(R),g=R,!0):!1}let Gt={[ci]:n.FUNC_ADD,[lu]:n.FUNC_SUBTRACT,[cu]:n.FUNC_REVERSE_SUBTRACT};Gt[hu]=n.MIN,Gt[uu]=n.MAX;let fe={[du]:n.ZERO,[fu]:n.ONE,[pu]:n.SRC_COLOR,[Wo]:n.SRC_ALPHA,[yu]:n.SRC_ALPHA_SATURATE,[xu]:n.DST_COLOR,[gu]:n.DST_ALPHA,[mu]:n.ONE_MINUS_SRC_COLOR,[Xo]:n.ONE_MINUS_SRC_ALPHA,[vu]:n.ONE_MINUS_DST_COLOR,[_u]:n.ONE_MINUS_DST_ALPHA,[Mu]:n.CONSTANT_COLOR,[Su]:n.ONE_MINUS_CONSTANT_COLOR,[bu]:n.CONSTANT_ALPHA,[Eu]:n.ONE_MINUS_CONSTANT_ALPHA};function L(R,it,k,$,ct,at,It,ce,be,Jt){if(R===$n){_===!0&&(wt(n.BLEND),_=!1);return}if(_===!1&&(rt(n.BLEND),_=!0),R!==au){if(R!==p||Jt!==S){if((u!==ci||M!==ci)&&(n.blendEquation(n.FUNC_ADD),u=ci,M=ci),Jt)switch(R){case ki:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wl:n.blendFunc(n.ONE,n.ONE);break;case Xl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}E=null,w=null,N=null,A=null,T.set(0,0,0),U=0,p=R,S=Jt}return}ct=ct||it,at=at||k,It=It||$,(it!==u||ct!==M)&&(n.blendEquationSeparate(Gt[it],Gt[ct]),u=it,M=ct),(k!==E||$!==w||at!==N||It!==A)&&(n.blendFuncSeparate(fe[k],fe[$],fe[at],fe[It]),E=k,w=$,N=at,A=It),(ce.equals(T)===!1||be!==U)&&(n.blendColor(ce.r,ce.g,ce.b,be),T.copy(ce),U=be),p=R,S=!1}function He(R,it){R.side===Qe?wt(n.CULL_FACE):rt(n.CULL_FACE);let k=R.side===Ne;it&&(k=!k),kt(k),R.blending===ki&&R.transparent===!1?L($n):L(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),r.setMask(R.colorWrite);let $=R.stencilWrite;a.setTest($),$&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ie(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?rt(n.SAMPLE_ALPHA_TO_COVERAGE):wt(n.SAMPLE_ALPHA_TO_COVERAGE)}function kt(R){v!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),v=R)}function Vt(R){R!==su?(rt(n.CULL_FACE),R!==C&&(R===Gl?n.cullFace(n.BACK):R===ru?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):wt(n.CULL_FACE),C=R}function bt(R){R!==H&&(G&&n.lineWidth(R),H=R)}function ie(R,it,k){R?(rt(n.POLYGON_OFFSET_FILL),(z!==it||X!==k)&&(n.polygonOffset(it,k),z=it,X=k)):wt(n.POLYGON_OFFSET_FILL)}function Mt(R){R?rt(n.SCISSOR_TEST):wt(n.SCISSOR_TEST)}function b(R){R===void 0&&(R=n.TEXTURE0+j-1),st!==R&&(n.activeTexture(R),st=R)}function x(R,it,k){k===void 0&&(st===null?k=n.TEXTURE0+j-1:k=st);let $=ht[k];$===void 0&&($={type:void 0,texture:void 0},ht[k]=$),($.type!==R||$.texture!==it)&&(st!==k&&(n.activeTexture(k),st=k),n.bindTexture(R,it||_t[R]),$.type=R,$.texture=it)}function F(){let R=ht[st];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function W(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xt(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ut(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Wt(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function dt(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Et(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function At(R){te.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),te.copy(R))}function ft(R){Y.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),Y.copy(R))}function Ht(R,it){let k=c.get(it);k===void 0&&(k=new WeakMap,c.set(it,k));let $=k.get(R);$===void 0&&($=n.getUniformBlockIndex(it,R.name),k.set(R,$))}function Ut(R,it){let $=c.get(it).get(R);l.get(it)!==$&&(n.uniformBlockBinding(it,$,R.__bindingPointIndex),l.set(it,$))}function ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},st=null,ht={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,u=null,E=null,w=null,M=null,N=null,A=null,T=new Rt(0,0,0),U=0,S=!1,v=null,C=null,H=null,z=null,X=null,te.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:wt,bindFramebuffer:Pt,drawBuffers:Ot,useProgram:le,setBlending:L,setMaterial:He,setFlipSided:kt,setCullFace:Vt,setLineWidth:bt,setPolygonOffset:ie,setScissorTest:Mt,activeTexture:b,bindTexture:x,unbindTexture:F,compressedTexImage2D:q,compressedTexImage3D:Z,texImage2D:dt,texImage3D:Et,updateUBOMapping:Ht,uniformBlockBinding:Ut,texStorage2D:Wt,texStorage3D:J,texSubImage2D:W,texSubImage3D:xt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ut,scissor:At,viewport:ft,reset:ee}}function Gc(n,t,e,i){let s=jg(i);switch(e){case nh:return n*t;case sh:return n*t;case rh:return n*t*2;case oh:return n*t/s.components*s.byteLength;case cl:return n*t/s.components*s.byteLength;case ah:return n*t*2/s.components*s.byteLength;case hl:return n*t*2/s.components*s.byteLength;case ih:return n*t*3/s.components*s.byteLength;case tn:return n*t*4/s.components*s.byteLength;case ul:return n*t*4/s.components*s.byteLength;case dr:case fr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case pr:case mr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sa:case oa:return Math.max(n,16)*Math.max(t,8)/4;case ia:case ra:return Math.max(n,8)*Math.max(t,8)/2;case aa:case la:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ca:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ua:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case da:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case fa:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case pa:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ma:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ga:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case _a:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case xa:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case va:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ya:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ma:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Sa:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ba:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case gr:case Ea:case wa:return Math.ceil(n/4)*Math.ceil(t/4)*16;case lh:case Ta:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Aa:case Ca:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jg(n){switch(n){case Cn:case Qc:return{byteLength:1,components:1};case bs:case th:case Cs:return{byteLength:2,components:1};case al:case ll:return{byteLength:2,components:4};case pi:case ol:case wn:return{byteLength:4,components:1};case eh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Jg(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,h=new WeakMap,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return m?new OffscreenCanvas(b,x):vr("canvas")}function _(b,x,F){let q=1,Z=Mt(b);if((Z.width>F||Z.height>F)&&(q=F/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap||typeof VideoFrame!="undefined"&&b instanceof VideoFrame){let W=Math.floor(q*Z.width),xt=Math.floor(q*Z.height);d===void 0&&(d=g(W,xt));let ot=x?g(W,xt):d;return ot.width=W,ot.height=xt,ot.getContext("2d").drawImage(b,0,0,W,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+W+"x"+xt+")."),ot}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),b;return b}function p(b){return b.generateMipmaps}function u(b){n.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(b,x,F,q,Z=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let W=x;if(x===n.RED&&(F===n.FLOAT&&(W=n.R32F),F===n.HALF_FLOAT&&(W=n.R16F),F===n.UNSIGNED_BYTE&&(W=n.R8)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.R8UI),F===n.UNSIGNED_SHORT&&(W=n.R16UI),F===n.UNSIGNED_INT&&(W=n.R32UI),F===n.BYTE&&(W=n.R8I),F===n.SHORT&&(W=n.R16I),F===n.INT&&(W=n.R32I)),x===n.RG&&(F===n.FLOAT&&(W=n.RG32F),F===n.HALF_FLOAT&&(W=n.RG16F),F===n.UNSIGNED_BYTE&&(W=n.RG8)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RG8UI),F===n.UNSIGNED_SHORT&&(W=n.RG16UI),F===n.UNSIGNED_INT&&(W=n.RG32UI),F===n.BYTE&&(W=n.RG8I),F===n.SHORT&&(W=n.RG16I),F===n.INT&&(W=n.RG32I)),x===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RGB8UI),F===n.UNSIGNED_SHORT&&(W=n.RGB16UI),F===n.UNSIGNED_INT&&(W=n.RGB32UI),F===n.BYTE&&(W=n.RGB8I),F===n.SHORT&&(W=n.RGB16I),F===n.INT&&(W=n.RGB32I)),x===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),F===n.UNSIGNED_INT&&(W=n.RGBA32UI),F===n.BYTE&&(W=n.RGBA8I),F===n.SHORT&&(W=n.RGBA16I),F===n.INT&&(W=n.RGBA32I)),x===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),x===n.RGBA){let xt=Z?$r:Xt.getTransfer(q);F===n.FLOAT&&(W=n.RGBA32F),F===n.HALF_FLOAT&&(W=n.RGBA16F),F===n.UNSIGNED_BYTE&&(W=xt===Kt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function M(b,x){let F;return b?x===null||x===pi||x===qi?F=n.DEPTH24_STENCIL8:x===wn?F=n.DEPTH32F_STENCIL8:x===bs&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===pi||x===qi?F=n.DEPTH_COMPONENT24:x===wn?F=n.DEPTH_COMPONENT32F:x===bs&&(F=n.DEPTH_COMPONENT16),F}function N(b,x){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==en&&b.minFilter!==hn?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function A(b){let x=b.target;x.removeEventListener("dispose",A),U(x),x.isVideoTexture&&h.delete(x)}function T(b){let x=b.target;x.removeEventListener("dispose",T),v(x)}function U(b){let x=i.get(b);if(x.__webglInit===void 0)return;let F=b.source,q=f.get(F);if(q){let Z=q[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(b),Object.keys(q).length===0&&f.delete(F)}i.remove(b)}function S(b){let x=i.get(b);n.deleteTexture(x.__webglTexture);let F=b.source,q=f.get(F);delete q[x.__cacheKey],o.memory.textures--}function v(b){let x=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let Z=0;Z<x.__webglFramebuffer[q].length;Z++)n.deleteFramebuffer(x.__webglFramebuffer[q][Z]);else n.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)n.deleteFramebuffer(x.__webglFramebuffer[q]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let F=b.textures;for(let q=0,Z=F.length;q<Z;q++){let W=i.get(F[q]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(F[q])}i.remove(b)}let C=0;function H(){C=0}function z(){let b=C;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),C+=1,b}function X(b){let x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function j(b,x){let F=i.get(b);if(b.isVideoTexture&&bt(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){let q=b.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,b,x);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function G(b,x){let F=i.get(b);if(b.version>0&&F.__version!==b.version){Y(F,b,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function Q(b,x){let F=i.get(b);if(b.version>0&&F.__version!==b.version){Y(F,b,x);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function V(b,x){let F=i.get(b);if(b.version>0&&F.__version!==b.version){tt(F,b,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}let st={[ea]:n.REPEAT,[di]:n.CLAMP_TO_EDGE,[na]:n.MIRRORED_REPEAT},ht={[en]:n.NEAREST,[Uu]:n.NEAREST_MIPMAP_NEAREST,[Hs]:n.NEAREST_MIPMAP_LINEAR,[hn]:n.LINEAR,[po]:n.LINEAR_MIPMAP_NEAREST,[fi]:n.LINEAR_MIPMAP_LINEAR},yt={[Bu]:n.NEVER,[Wu]:n.ALWAYS,[zu]:n.LESS,[ch]:n.LEQUAL,[ku]:n.EQUAL,[Gu]:n.GEQUAL,[Vu]:n.GREATER,[Hu]:n.NOTEQUAL};function Ft(b,x){if(x.type===wn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===hn||x.magFilter===po||x.magFilter===Hs||x.magFilter===fi||x.minFilter===hn||x.minFilter===po||x.minFilter===Hs||x.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,st[x.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,st[x.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,st[x.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ht[x.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ht[x.minFilter]),x.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,yt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===en||x.minFilter!==Hs&&x.minFilter!==fi||x.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function te(b,x){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",A));let q=x.source,Z=f.get(q);Z===void 0&&(Z={},f.set(q,Z));let W=X(x);if(W!==b.__cacheKey){Z[W]===void 0&&(Z[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Z[W].usedTimes++;let xt=Z[b.__cacheKey];xt!==void 0&&(Z[b.__cacheKey].usedTimes--,xt.usedTimes===0&&S(x)),b.__cacheKey=W,b.__webglTexture=Z[W].texture}return F}function Y(b,x,F){let q=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=n.TEXTURE_3D);let Z=te(b,x),W=x.source;e.bindTexture(q,b.__webglTexture,n.TEXTURE0+F);let xt=i.get(W);if(W.version!==xt.__version||Z===!0){e.activeTexture(n.TEXTURE0+F);let ot=Xt.getPrimaries(Xt.workingColorSpace),ut=x.colorSpace===qn?null:Xt.getPrimaries(x.colorSpace),Wt=x.colorSpace===qn||ot===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let J=_(x.image,!1,s.maxTextureSize);J=ie(x,J);let dt=r.convert(x.format,x.colorSpace),Et=r.convert(x.type),At=w(x.internalFormat,dt,Et,x.colorSpace,x.isVideoTexture);Ft(q,x);let ft,Ht=x.mipmaps,Ut=x.isVideoTexture!==!0,ee=xt.__version===void 0||Z===!0,R=W.dataReady,it=N(x,J);if(x.isDepthTexture)At=M(x.format===$i,x.type),ee&&(Ut?e.texStorage2D(n.TEXTURE_2D,1,At,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,At,J.width,J.height,0,dt,Et,null));else if(x.isDataTexture)if(Ht.length>0){Ut&&ee&&e.texStorage2D(n.TEXTURE_2D,it,At,Ht[0].width,Ht[0].height);for(let k=0,$=Ht.length;k<$;k++)ft=Ht[k],Ut?R&&e.texSubImage2D(n.TEXTURE_2D,k,0,0,ft.width,ft.height,dt,Et,ft.data):e.texImage2D(n.TEXTURE_2D,k,At,ft.width,ft.height,0,dt,Et,ft.data);x.generateMipmaps=!1}else Ut?(ee&&e.texStorage2D(n.TEXTURE_2D,it,At,J.width,J.height),R&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,dt,Et,J.data)):e.texImage2D(n.TEXTURE_2D,0,At,J.width,J.height,0,dt,Et,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ut&&ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,it,At,Ht[0].width,Ht[0].height,J.depth);for(let k=0,$=Ht.length;k<$;k++)if(ft=Ht[k],x.format!==tn)if(dt!==null)if(Ut){if(R)if(x.layerUpdates.size>0){let ct=Gc(ft.width,ft.height,x.format,x.type);for(let at of x.layerUpdates){let It=ft.data.subarray(at*ct/ft.data.BYTES_PER_ELEMENT,(at+1)*ct/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,at,ft.width,ft.height,1,dt,It)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,ft.width,ft.height,J.depth,dt,ft.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,k,At,ft.width,ft.height,J.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?R&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,ft.width,ft.height,J.depth,dt,Et,ft.data):e.texImage3D(n.TEXTURE_2D_ARRAY,k,At,ft.width,ft.height,J.depth,0,dt,Et,ft.data)}else{Ut&&ee&&e.texStorage2D(n.TEXTURE_2D,it,At,Ht[0].width,Ht[0].height);for(let k=0,$=Ht.length;k<$;k++)ft=Ht[k],x.format!==tn?dt!==null?Ut?R&&e.compressedTexSubImage2D(n.TEXTURE_2D,k,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(n.TEXTURE_2D,k,At,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?R&&e.texSubImage2D(n.TEXTURE_2D,k,0,0,ft.width,ft.height,dt,Et,ft.data):e.texImage2D(n.TEXTURE_2D,k,At,ft.width,ft.height,0,dt,Et,ft.data)}else if(x.isDataArrayTexture)if(Ut){if(ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,it,At,J.width,J.height,J.depth),R)if(x.layerUpdates.size>0){let k=Gc(J.width,J.height,x.format,x.type);for(let $ of x.layerUpdates){let ct=J.data.subarray($*k/J.data.BYTES_PER_ELEMENT,($+1)*k/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,J.width,J.height,1,dt,Et,ct)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,dt,Et,J.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,At,J.width,J.height,J.depth,0,dt,Et,J.data);else if(x.isData3DTexture)Ut?(ee&&e.texStorage3D(n.TEXTURE_3D,it,At,J.width,J.height,J.depth),R&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,dt,Et,J.data)):e.texImage3D(n.TEXTURE_3D,0,At,J.width,J.height,J.depth,0,dt,Et,J.data);else if(x.isFramebufferTexture){if(ee)if(Ut)e.texStorage2D(n.TEXTURE_2D,it,At,J.width,J.height);else{let k=J.width,$=J.height;for(let ct=0;ct<it;ct++)e.texImage2D(n.TEXTURE_2D,ct,At,k,$,0,dt,Et,null),k>>=1,$>>=1}}else if(Ht.length>0){if(Ut&&ee){let k=Mt(Ht[0]);e.texStorage2D(n.TEXTURE_2D,it,At,k.width,k.height)}for(let k=0,$=Ht.length;k<$;k++)ft=Ht[k],Ut?R&&e.texSubImage2D(n.TEXTURE_2D,k,0,0,dt,Et,ft):e.texImage2D(n.TEXTURE_2D,k,At,dt,Et,ft);x.generateMipmaps=!1}else if(Ut){if(ee){let k=Mt(J);e.texStorage2D(n.TEXTURE_2D,it,At,k.width,k.height)}R&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,Et,J)}else e.texImage2D(n.TEXTURE_2D,0,At,dt,Et,J);p(x)&&u(q),xt.__version=W.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function tt(b,x,F){if(x.image.length!==6)return;let q=te(b,x),Z=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+F);let W=i.get(Z);if(Z.version!==W.__version||q===!0){e.activeTexture(n.TEXTURE0+F);let xt=Xt.getPrimaries(Xt.workingColorSpace),ot=x.colorSpace===qn?null:Xt.getPrimaries(x.colorSpace),ut=x.colorSpace===qn||xt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Wt=x.isCompressedTexture||x.image[0].isCompressedTexture,J=x.image[0]&&x.image[0].isDataTexture,dt=[];for(let $=0;$<6;$++)!Wt&&!J?dt[$]=_(x.image[$],!0,s.maxCubemapSize):dt[$]=J?x.image[$].image:x.image[$],dt[$]=ie(x,dt[$]);let Et=dt[0],At=r.convert(x.format,x.colorSpace),ft=r.convert(x.type),Ht=w(x.internalFormat,At,ft,x.colorSpace),Ut=x.isVideoTexture!==!0,ee=W.__version===void 0||q===!0,R=Z.dataReady,it=N(x,Et);Ft(n.TEXTURE_CUBE_MAP,x);let k;if(Wt){Ut&&ee&&e.texStorage2D(n.TEXTURE_CUBE_MAP,it,Ht,Et.width,Et.height);for(let $=0;$<6;$++){k=dt[$].mipmaps;for(let ct=0;ct<k.length;ct++){let at=k[ct];x.format!==tn?At!==null?Ut?R&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,at.width,at.height,At,at.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Ht,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?R&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,at.width,at.height,At,ft,at.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Ht,at.width,at.height,0,At,ft,at.data)}}}else{if(k=x.mipmaps,Ut&&ee){k.length>0&&it++;let $=Mt(dt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,it,Ht,$.width,$.height)}for(let $=0;$<6;$++)if(J){Ut?R&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,dt[$].width,dt[$].height,At,ft,dt[$].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ht,dt[$].width,dt[$].height,0,At,ft,dt[$].data);for(let ct=0;ct<k.length;ct++){let It=k[ct].image[$].image;Ut?R&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,It.width,It.height,At,ft,It.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Ht,It.width,It.height,0,At,ft,It.data)}}else{Ut?R&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,At,ft,dt[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ht,At,ft,dt[$]);for(let ct=0;ct<k.length;ct++){let at=k[ct];Ut?R&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,At,ft,at.image[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Ht,At,ft,at.image[$])}}}p(x)&&u(n.TEXTURE_CUBE_MAP),W.__version=Z.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function _t(b,x,F,q,Z,W){let xt=r.convert(F.format,F.colorSpace),ot=r.convert(F.type),ut=w(F.internalFormat,xt,ot,F.colorSpace),Wt=i.get(x),J=i.get(F);if(J.__renderTarget=x,!Wt.__hasExternalTextures){let dt=Math.max(1,x.width>>W),Et=Math.max(1,x.height>>W);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,W,ut,dt,Et,x.depth,0,xt,ot,null):e.texImage2D(Z,W,ut,dt,Et,0,xt,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),Vt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Z,J.__webglTexture,0,kt(x)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Z,J.__webglTexture,W),e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(b,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,b),x.depthBuffer){let q=x.depthTexture,Z=q&&q.isDepthTexture?q.type:null,W=M(x.stencilBuffer,Z),xt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=kt(x);Vt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,W,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,W,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,W,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,b)}else{let q=x.textures;for(let Z=0;Z<q.length;Z++){let W=q[Z],xt=r.convert(W.format,W.colorSpace),ot=r.convert(W.type),ut=w(W.internalFormat,xt,ot,W.colorSpace),Wt=kt(x);F&&Vt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Wt,ut,x.width,x.height):Vt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Wt,ut,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ut,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function wt(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=i.get(x.depthTexture);q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j(x.depthTexture,0);let Z=q.__webglTexture,W=kt(x);if(x.depthTexture.format===Vi)Vt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(x.depthTexture.format===$i)Vt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Pt(b){let x=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){let q=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){let Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=q}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");wt(x.__webglFramebuffer,b)}else if(F){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=n.createRenderbuffer(),rt(x.__webglDepthbuffer[q],b,!1);else{let Z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,W)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),rt(x.__webglDepthbuffer,b,!1);else{let q=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,Z)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ot(b,x,F){let q=i.get(b);x!==void 0&&_t(q.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Pt(b)}function le(b){let x=b.texture,F=i.get(b),q=i.get(x);b.addEventListener("dispose",T);let Z=b.textures,W=b.isWebGLCubeRenderTarget===!0,xt=Z.length>1;if(xt||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=x.version,o.memory.textures++),W){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let ut=0;ut<x.mipmaps.length;ut++)F.__webglFramebuffer[ot][ut]=n.createFramebuffer()}else F.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)F.__webglFramebuffer[ot]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(xt)for(let ot=0,ut=Z.length;ot<ut;ot++){let Wt=i.get(Z[ot]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&Vt(b)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ot=0;ot<Z.length;ot++){let ut=Z[ot];F.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ot]);let Wt=r.convert(ut.format,ut.colorSpace),J=r.convert(ut.type),dt=w(ut.internalFormat,Wt,J,ut.colorSpace,b.isXRRenderTarget===!0),Et=kt(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Et,dt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,F.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),rt(F.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Ft(n.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)_t(F.__webglFramebuffer[ot][ut],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else _t(F.__webglFramebuffer[ot],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(x)&&u(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ot=0,ut=Z.length;ot<ut;ot++){let Wt=Z[ot],J=i.get(Wt);e.bindTexture(n.TEXTURE_2D,J.__webglTexture),Ft(n.TEXTURE_2D,Wt),_t(F.__webglFramebuffer,b,Wt,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,0),p(Wt)&&u(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ot=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,q.__webglTexture),Ft(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)_t(F.__webglFramebuffer[ut],b,x,n.COLOR_ATTACHMENT0,ot,ut);else _t(F.__webglFramebuffer,b,x,n.COLOR_ATTACHMENT0,ot,0);p(x)&&u(ot),e.unbindTexture()}b.depthBuffer&&Pt(b)}function Gt(b){let x=b.textures;for(let F=0,q=x.length;F<q;F++){let Z=x[F];if(p(Z)){let W=E(b),xt=i.get(Z).__webglTexture;e.bindTexture(W,xt),u(W),e.unbindTexture()}}}let fe=[],L=[];function He(b){if(b.samples>0){if(Vt(b)===!1){let x=b.textures,F=b.width,q=b.height,Z=n.COLOR_BUFFER_BIT,W=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(b),ot=x.length>1;if(ot)for(let ut=0;ut<x.length;ut++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);let Wt=i.get(x[ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Wt,0)}n.blitFramebuffer(0,0,F,q,0,0,F,q,Z,n.NEAREST),l===!0&&(fe.length=0,L.length=0,fe.push(n.COLOR_ATTACHMENT0+ut),b.depthBuffer&&b.resolveDepthBuffer===!1&&(fe.push(W),L.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let ut=0;ut<x.length;ut++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);let Wt=i.get(x[ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,Wt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let x=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function kt(b){return Math.min(s.maxSamples,b.samples)}function Vt(b){let x=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function bt(b){let x=o.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function ie(b,x){let F=b.colorSpace,q=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==Qi&&F!==qn&&(Xt.getTransfer(F)===Kt?(q!==tn||Z!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function Mt(b){return typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame!="undefined"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=j,this.setTexture2DArray=G,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=Ot,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Vt}function Kg(n,t){function e(i,s=qn){let r,o=Xt.getTransfer(s);if(i===Cn)return n.UNSIGNED_BYTE;if(i===al)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ll)return n.UNSIGNED_SHORT_5_5_5_1;if(i===eh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qc)return n.BYTE;if(i===th)return n.SHORT;if(i===bs)return n.UNSIGNED_SHORT;if(i===ol)return n.INT;if(i===pi)return n.UNSIGNED_INT;if(i===wn)return n.FLOAT;if(i===Cs)return n.HALF_FLOAT;if(i===nh)return n.ALPHA;if(i===ih)return n.RGB;if(i===tn)return n.RGBA;if(i===sh)return n.LUMINANCE;if(i===rh)return n.LUMINANCE_ALPHA;if(i===Vi)return n.DEPTH_COMPONENT;if(i===$i)return n.DEPTH_STENCIL;if(i===oh)return n.RED;if(i===cl)return n.RED_INTEGER;if(i===ah)return n.RG;if(i===hl)return n.RG_INTEGER;if(i===ul)return n.RGBA_INTEGER;if(i===dr||i===fr||i===pr||i===mr)if(o===Kt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ia||i===sa||i===ra||i===oa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===aa||i===la||i===ca)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===aa||i===la)return o===Kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ca)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ha||i===ua||i===da||i===fa||i===pa||i===ma||i===ga||i===_a||i===xa||i===va||i===ya||i===Ma||i===Sa||i===ba)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ha)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ua)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===da)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fa)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pa)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ma)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ga)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_a)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xa)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===va)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ya)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ma)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sa)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ba)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===gr||i===Ea||i===wa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===gr)return o===Kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ea)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lh||i===Ta||i===Aa||i===Ca)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===gr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ta)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ca)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Ga=class extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},un=class extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qg={type:"move"},Ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,i),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new un;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},t0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e0=`
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

}`,Wa=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Ye,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new dn({vertexShader:t0,fragmentShader:e0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ue(new _i(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xa=class extends Rn{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null,_=new Wa,p=e.getContextAttributes(),u=null,E=null,w=[],M=[],N=new Tt,A=null,T=new Ie;T.viewport=new he;let U=new Ie;U.viewport=new he;let S=[T,U],v=new Ga,C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=w[Y];return tt===void 0&&(tt=new Ss,w[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=w[Y];return tt===void 0&&(tt=new Ss,w[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=w[Y];return tt===void 0&&(tt=new Ss,w[Y]=tt),tt.getHandSpace()};function z(Y){let tt=M.indexOf(Y.inputSource);if(tt===-1)return;let _t=w[tt];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,c||o),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",j);for(let Y=0;Y<w.length;Y++){let tt=M[Y];tt!==null&&(M[Y]=null,w[Y].disconnect(tt))}C=null,H=null,_.reset(),t.setRenderTarget(u),m=null,f=null,d=null,s=null,E=null,te.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",X),s.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){let tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Pn(m.framebufferWidth,m.framebufferHeight,{format:tn,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let tt=null,_t=null,rt=null;p.depth&&(rt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=p.stencil?$i:Vi,_t=p.stencil?qi:pi);let wt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(wt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Pn(f.textureWidth,f.textureHeight,{format:tn,type:Cn,depthTexture:new Rr(f.textureWidth,f.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(Y){for(let tt=0;tt<Y.removed.length;tt++){let _t=Y.removed[tt],rt=M.indexOf(_t);rt>=0&&(M[rt]=null,w[rt].disconnect(_t))}for(let tt=0;tt<Y.added.length;tt++){let _t=Y.added[tt],rt=M.indexOf(_t);if(rt===-1){for(let Pt=0;Pt<w.length;Pt++)if(Pt>=M.length){M.push(_t),rt=Pt;break}else if(M[Pt]===null){M[Pt]=_t,rt=Pt;break}if(rt===-1)break}let wt=w[rt];wt&&wt.connect(_t)}}let G=new D,Q=new D;function V(Y,tt,_t){G.setFromMatrixPosition(tt.matrixWorld),Q.setFromMatrixPosition(_t.matrixWorld);let rt=G.distanceTo(Q),wt=tt.projectionMatrix.elements,Pt=_t.projectionMatrix.elements,Ot=wt[14]/(wt[10]-1),le=wt[14]/(wt[10]+1),Gt=(wt[9]+1)/wt[5],fe=(wt[9]-1)/wt[5],L=(wt[8]-1)/wt[0],He=(Pt[8]+1)/Pt[0],kt=Ot*L,Vt=Ot*He,bt=rt/(-L+He),ie=bt*-L;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ie),Y.translateZ(bt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),wt[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let Mt=Ot+bt,b=le+bt,x=kt-ie,F=Vt+(rt-ie),q=Gt*le/b*Mt,Z=fe*le/b*Mt;Y.projectionMatrix.makePerspective(x,F,q,Z,Mt,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function st(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let tt=Y.near,_t=Y.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),v.near=U.near=T.near=tt,v.far=U.far=T.far=_t,(C!==v.near||H!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,H=v.far),T.layers.mask=Y.layers.mask|2,U.layers.mask=Y.layers.mask|4,v.layers.mask=T.layers.mask|U.layers.mask;let rt=Y.parent,wt=v.cameras;st(v,rt);for(let Pt=0;Pt<wt.length;Pt++)st(wt[Pt],rt);wt.length===2?V(v,T,U):v.projectionMatrix.copy(T.projectionMatrix),ht(Y,v,rt)};function ht(Y,tt,_t){_t===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Es*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let yt=null;function Ft(Y,tt){if(h=tt.getViewerPose(c||o),g=tt,h!==null){let _t=h.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let rt=!1;_t.length!==v.cameras.length&&(v.cameras.length=0,rt=!0);for(let Pt=0;Pt<_t.length;Pt++){let Ot=_t[Pt],le=null;if(m!==null)le=m.getViewport(Ot);else{let fe=d.getViewSubImage(f,Ot);le=fe.viewport,Pt===0&&(t.setRenderTargetTextures(E,fe.colorTexture,f.ignoreDepthValues?void 0:fe.depthStencilTexture),t.setRenderTarget(E))}let Gt=S[Pt];Gt===void 0&&(Gt=new Ie,Gt.layers.enable(Pt),Gt.viewport=new he,S[Pt]=Gt),Gt.matrix.fromArray(Ot.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Ot.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(le.x,le.y,le.width,le.height),Pt===0&&(v.matrix.copy(Gt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),rt===!0&&v.cameras.push(Gt)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")){let Pt=d.getDepthInformation(_t[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,s.renderState)}}for(let _t=0;_t<w.length;_t++){let rt=M[_t],wt=w[_t];rt!==null&&wt!==void 0&&wt.update(rt,tt,c||o)}yt&&yt(Y,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),g=null}let te=new fh;te.setAnimationLoop(Ft),this.setAnimationLoop=function(Y){yt=Y},this.dispose=function(){}}},ai=new sn,n0=new oe;function i0(n,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,dh(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,E,w,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,M)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),_(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,E,w):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ne&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ne&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let E=t.get(u),w=E.envMap,M=E.envMapRotation;w&&(p.envMap.value=w,ai.copy(M),ai.x*=-1,ai.y*=-1,ai.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),p.envMapRotation.value.setFromMatrix4(n0.makeRotationFromEuler(ai)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,E,w){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*E,p.scale.value=w*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,E){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ne&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){let E=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function s0(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,w){let M=w.program;i.uniformBlockBinding(E,M)}function c(E,w){let M=s[E.id];M===void 0&&(g(E),M=h(E),s[E.id]=M,E.addEventListener("dispose",p));let N=w.program;i.updateUBOMapping(E,N);let A=t.render.frame;r[E.id]!==A&&(f(E),r[E.id]=A)}function h(E){let w=d();E.__bindingPointIndex=w;let M=n.createBuffer(),N=E.__size,A=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,N,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,M),M}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let w=s[E.id],M=E.uniforms,N=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let A=0,T=M.length;A<T;A++){let U=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,v=U.length;S<v;S++){let C=U[S];if(m(C,A,S,N)===!0){let H=C.__offset,z=Array.isArray(C.value)?C.value:[C.value],X=0;for(let j=0;j<z.length;j++){let G=z[j],Q=_(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,H+X,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,X),X+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,w,M,N){let A=E.value,T=w+"_"+M;if(N[T]===void 0)return typeof A=="number"||typeof A=="boolean"?N[T]=A:N[T]=A.clone(),!0;{let U=N[T];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return N[T]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function g(E){let w=E.uniforms,M=0,N=16;for(let T=0,U=w.length;T<U;T++){let S=Array.isArray(w[T])?w[T]:[w[T]];for(let v=0,C=S.length;v<C;v++){let H=S[v],z=Array.isArray(H.value)?H.value:[H.value];for(let X=0,j=z.length;X<j;X++){let G=z[X],Q=_(G),V=M%N,st=V%Q.boundary,ht=V+st;M+=st,ht!==0&&N-ht<Q.storage&&(M+=N-ht),H.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=Q.storage}}}let A=M%N;return A>0&&(M+=N-A),E.__size=M,E.__cache={},this}function _(E){let w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function p(E){let w=E.target;w.removeEventListener("dispose",p);let M=o.indexOf(w.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function u(){for(let E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var Pr=class{constructor(t={}){let{canvas:e=ad(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let g=new Uint32Array(4),_=new Int32Array(4),p=null,u=null,E=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xe,this.toneMapping=Zn,this.toneMappingExposure=1;let M=this,N=!1,A=0,T=0,U=null,S=-1,v=null,C=new he,H=new he,z=null,X=new Rt(0),j=0,G=e.width,Q=e.height,V=1,st=null,ht=null,yt=new he(0,0,G,Q),Ft=new he(0,0,G,Q),te=!1,Y=new ws,tt=!1,_t=!1,rt=new oe,wt=new oe,Pt=new D,Ot=new he,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function fe(){return U===null?V:1}let L=i;function He(y,P){return e.getContext(y,P)}try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rl}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",at,!1),L===null){let P="webgl2";if(L=He(P,y),L===null)throw He(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let kt,Vt,bt,ie,Mt,b,x,F,q,Z,W,xt,ot,ut,Wt,J,dt,Et,At,ft,Ht,Ut,ee,R;function it(){kt=new ym(L),kt.init(),Ut=new Kg(L,kt),Vt=new pm(L,kt,t,Ut),bt=new Zg(L,kt),Vt.reverseDepthBuffer&&f&&bt.buffers.depth.setReversed(!0),ie=new bm(L),Mt=new Fg,b=new Jg(L,kt,bt,Mt,Vt,Ut,ie),x=new gm(M),F=new vm(M),q=new Rd(L),ee=new dm(L,q),Z=new Mm(L,q,ie,ee),W=new wm(L,Z,q,ie),At=new Em(L,Vt,b),J=new mm(Mt),xt=new Ng(M,x,F,kt,Vt,ee,J),ot=new i0(M,Mt),ut=new Bg,Wt=new Wg(kt),Et=new um(M,x,F,bt,W,m,l),dt=new qg(M,W,Vt),R=new s0(L,ie,Vt,bt),ft=new fm(L,kt,ie),Ht=new Sm(L,kt,ie),ie.programs=xt.programs,M.capabilities=Vt,M.extensions=kt,M.properties=Mt,M.renderLists=ut,M.shadowMap=dt,M.state=bt,M.info=ie}it();let k=new Xa(M,L);this.xr=k,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let y=kt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=kt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(G,Q,!1))},this.getSize=function(y){return y.set(G,Q)},this.setSize=function(y,P,O=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=y,Q=P,e.width=Math.floor(y*V),e.height=Math.floor(P*V),O===!0&&(e.style.width=y+"px",e.style.height=P+"px"),this.setViewport(0,0,y,P)},this.getDrawingBufferSize=function(y){return y.set(G*V,Q*V).floor()},this.setDrawingBufferSize=function(y,P,O){G=y,Q=P,V=O,e.width=Math.floor(y*O),e.height=Math.floor(P*O),this.setViewport(0,0,y,P)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(yt)},this.setViewport=function(y,P,O,B){y.isVector4?yt.set(y.x,y.y,y.z,y.w):yt.set(y,P,O,B),bt.viewport(C.copy(yt).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(Ft)},this.setScissor=function(y,P,O,B){y.isVector4?Ft.set(y.x,y.y,y.z,y.w):Ft.set(y,P,O,B),bt.scissor(H.copy(Ft).multiplyScalar(V).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(y){bt.setScissorTest(te=y)},this.setOpaqueSort=function(y){st=y},this.setTransparentSort=function(y){ht=y},this.getClearColor=function(y){return y.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(y=!0,P=!0,O=!0){let B=0;if(y){let I=!1;if(U!==null){let K=U.texture.format;I=K===ul||K===hl||K===cl}if(I){let K=U.texture.type,lt=K===Cn||K===pi||K===bs||K===qi||K===al||K===ll,pt=Et.getClearColor(),mt=Et.getClearAlpha(),Ct=pt.r,Lt=pt.g,gt=pt.b;lt?(g[0]=Ct,g[1]=Lt,g[2]=gt,g[3]=mt,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Ct,_[1]=Lt,_[2]=gt,_[3]=mt,L.clearBufferiv(L.COLOR,0,_))}else B|=L.COLOR_BUFFER_BIT}P&&(B|=L.DEPTH_BUFFER_BIT),O&&(B|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ut.dispose(),Wt.dispose(),Mt.dispose(),x.dispose(),F.dispose(),W.dispose(),ee.dispose(),R.dispose(),xt.dispose(),k.dispose(),k.removeEventListener("sessionstart",Nl),k.removeEventListener("sessionend",Fl),ei.stop()};function $(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;let y=ie.autoReset,P=dt.enabled,O=dt.autoUpdate,B=dt.needsUpdate,I=dt.type;it(),ie.autoReset=y,dt.enabled=P,dt.autoUpdate=O,dt.needsUpdate=B,dt.type=I}function at(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function It(y){let P=y.target;P.removeEventListener("dispose",It),ce(P)}function ce(y){be(y),Mt.remove(y)}function be(y){let P=Mt.get(y).programs;P!==void 0&&(P.forEach(function(O){xt.releaseProgram(O)}),y.isShaderMaterial&&xt.releaseShaderCache(y))}this.renderBufferDirect=function(y,P,O,B,I,K){P===null&&(P=le);let lt=I.isMesh&&I.matrixWorld.determinant()<0,pt=eu(y,P,O,B,I);bt.setMaterial(B,lt);let mt=O.index,Ct=1;if(B.wireframe===!0){if(mt=Z.getWireframeAttribute(O),mt===void 0)return;Ct=2}let Lt=O.drawRange,gt=O.attributes.position,$t=Lt.start*Ct,ne=(Lt.start+Lt.count)*Ct;K!==null&&($t=Math.max($t,K.start*Ct),ne=Math.min(ne,(K.start+K.count)*Ct)),mt!==null?($t=Math.max($t,0),ne=Math.min(ne,mt.count)):gt!=null&&($t=Math.max($t,0),ne=Math.min(ne,gt.count));let se=ne-$t;if(se<0||se===1/0)return;ee.setup(I,B,pt,O,mt);let Ue,Zt=ft;if(mt!==null&&(Ue=q.get(mt),Zt=Ht,Zt.setIndex(Ue)),I.isMesh)B.wireframe===!0?(bt.setLineWidth(B.wireframeLinewidth*fe()),Zt.setMode(L.LINES)):Zt.setMode(L.TRIANGLES);else if(I.isLine){let vt=B.linewidth;vt===void 0&&(vt=1),bt.setLineWidth(vt*fe()),I.isLineSegments?Zt.setMode(L.LINES):I.isLineLoop?Zt.setMode(L.LINE_LOOP):Zt.setMode(L.LINE_STRIP)}else I.isPoints?Zt.setMode(L.POINTS):I.isSprite&&Zt.setMode(L.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Zt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let vt=I._multiDrawStarts,xn=I._multiDrawCounts,jt=I._multiDrawCount,$e=mt?q.get(mt).bytesPerElement:1,bi=Mt.get(B).currentProgram.getUniforms();for(let Be=0;Be<jt;Be++)bi.setValue(L,"_gl_DrawID",Be),Zt.render(vt[Be]/$e,xn[Be])}else if(I.isInstancedMesh)Zt.renderInstances($t,se,I.count);else if(O.isInstancedBufferGeometry){let vt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,xn=Math.min(O.instanceCount,vt);Zt.renderInstances($t,se,xn)}else Zt.render($t,se)};function Jt(y,P,O){y.transparent===!0&&y.side===Qe&&y.forceSinglePass===!1?(y.side=Ne,y.needsUpdate=!0,Vs(y,P,O),y.side=jn,y.needsUpdate=!0,Vs(y,P,O),y.side=Qe):Vs(y,P,O)}this.compile=function(y,P,O=null){O===null&&(O=y),u=Wt.get(O),u.init(P),w.push(u),O.traverseVisible(function(I){I.isLight&&I.layers.test(P.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),y!==O&&y.traverseVisible(function(I){I.isLight&&I.layers.test(P.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),u.setupLights();let B=new Set;return y.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let K=I.material;if(K)if(Array.isArray(K))for(let lt=0;lt<K.length;lt++){let pt=K[lt];Jt(pt,O,I),B.add(pt)}else Jt(K,O,I),B.add(K)}),w.pop(),u=null,B},this.compileAsync=function(y,P,O=null){let B=this.compile(y,P,O);return new Promise(I=>{function K(){if(B.forEach(function(lt){Mt.get(lt).currentProgram.isReady()&&B.delete(lt)}),B.size===0){I(y);return}setTimeout(K,10)}kt.get("KHR_parallel_shader_compile")!==null?K():setTimeout(K,10)})};let qe=null;function _n(y){qe&&qe(y)}function Nl(){ei.stop()}function Fl(){ei.start()}let ei=new fh;ei.setAnimationLoop(_n),typeof self!="undefined"&&ei.setContext(self),this.setAnimationLoop=function(y){qe=y,k.setAnimationLoop(y),y===null?ei.stop():ei.start()},k.addEventListener("sessionstart",Nl),k.addEventListener("sessionend",Fl),this.render=function(y,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(P),P=k.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,P,U),u=Wt.get(y,w.length),u.init(P),w.push(u),wt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Y.setFromProjectionMatrix(wt),_t=this.localClippingEnabled,tt=J.init(this.clippingPlanes,_t),p=ut.get(y,E.length),p.init(),E.push(p),k.enabled===!0&&k.isPresenting===!0){let K=M.xr.getDepthSensingMesh();K!==null&&fo(K,P,-1/0,M.sortObjects)}fo(y,P,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(st,ht),Gt=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,Gt&&Et.addToRenderList(p,y),this.info.render.frame++,tt===!0&&J.beginShadows();let O=u.state.shadowsArray;dt.render(O,y,P),tt===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=p.opaque,I=p.transmissive;if(u.setupLights(),P.isArrayCamera){let K=P.cameras;if(I.length>0)for(let lt=0,pt=K.length;lt<pt;lt++){let mt=K[lt];Bl(B,I,y,mt)}Gt&&Et.render(y);for(let lt=0,pt=K.length;lt<pt;lt++){let mt=K[lt];Ol(p,y,mt,mt.viewport)}}else I.length>0&&Bl(B,I,y,P),Gt&&Et.render(y),Ol(p,y,P);U!==null&&(b.updateMultisampleRenderTarget(U),b.updateRenderTargetMipmap(U)),y.isScene===!0&&y.onAfterRender(M,y,P),ee.resetDefaultState(),S=-1,v=null,w.pop(),w.length>0?(u=w[w.length-1],tt===!0&&J.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function fo(y,P,O,B){if(y.visible===!1)return;if(y.layers.test(P.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(P);else if(y.isLight)u.pushLight(y),y.castShadow&&u.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Y.intersectsSprite(y)){B&&Ot.setFromMatrixPosition(y.matrixWorld).applyMatrix4(wt);let lt=W.update(y),pt=y.material;pt.visible&&p.push(y,lt,pt,O,Ot.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Y.intersectsObject(y))){let lt=W.update(y),pt=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ot.copy(y.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ot.copy(lt.boundingSphere.center)),Ot.applyMatrix4(y.matrixWorld).applyMatrix4(wt)),Array.isArray(pt)){let mt=lt.groups;for(let Ct=0,Lt=mt.length;Ct<Lt;Ct++){let gt=mt[Ct],$t=pt[gt.materialIndex];$t&&$t.visible&&p.push(y,lt,$t,O,Ot.z,gt)}}else pt.visible&&p.push(y,lt,pt,O,Ot.z,null)}}let K=y.children;for(let lt=0,pt=K.length;lt<pt;lt++)fo(K[lt],P,O,B)}function Ol(y,P,O,B){let I=y.opaque,K=y.transmissive,lt=y.transparent;u.setupLightsView(O),tt===!0&&J.setGlobalState(M.clippingPlanes,O),B&&bt.viewport(C.copy(B)),I.length>0&&ks(I,P,O),K.length>0&&ks(K,P,O),lt.length>0&&ks(lt,P,O),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function Bl(y,P,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[B.id]===void 0&&(u.state.transmissionRenderTarget[B.id]=new Pn(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?Cs:Cn,minFilter:fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));let K=u.state.transmissionRenderTarget[B.id],lt=B.viewport||C;K.setSize(lt.z,lt.w);let pt=M.getRenderTarget();M.setRenderTarget(K),M.getClearColor(X),j=M.getClearAlpha(),j<1&&M.setClearColor(16777215,.5),M.clear(),Gt&&Et.render(O);let mt=M.toneMapping;M.toneMapping=Zn;let Ct=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),u.setupLightsView(B),tt===!0&&J.setGlobalState(M.clippingPlanes,B),ks(y,O,B),b.updateMultisampleRenderTarget(K),b.updateRenderTargetMipmap(K),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let gt=0,$t=P.length;gt<$t;gt++){let ne=P[gt],se=ne.object,Ue=ne.geometry,Zt=ne.material,vt=ne.group;if(Zt.side===Qe&&se.layers.test(B.layers)){let xn=Zt.side;Zt.side=Ne,Zt.needsUpdate=!0,zl(se,O,B,Ue,Zt,vt),Zt.side=xn,Zt.needsUpdate=!0,Lt=!0}}Lt===!0&&(b.updateMultisampleRenderTarget(K),b.updateRenderTargetMipmap(K))}M.setRenderTarget(pt),M.setClearColor(X,j),Ct!==void 0&&(B.viewport=Ct),M.toneMapping=mt}function ks(y,P,O){let B=P.isScene===!0?P.overrideMaterial:null;for(let I=0,K=y.length;I<K;I++){let lt=y[I],pt=lt.object,mt=lt.geometry,Ct=B===null?lt.material:B,Lt=lt.group;pt.layers.test(O.layers)&&zl(pt,P,O,mt,Ct,Lt)}}function zl(y,P,O,B,I,K){y.onBeforeRender(M,P,O,B,I,K),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),I.onBeforeRender(M,P,O,B,y,K),I.transparent===!0&&I.side===Qe&&I.forceSinglePass===!1?(I.side=Ne,I.needsUpdate=!0,M.renderBufferDirect(O,P,B,I,y,K),I.side=jn,I.needsUpdate=!0,M.renderBufferDirect(O,P,B,I,y,K),I.side=Qe):M.renderBufferDirect(O,P,B,I,y,K),y.onAfterRender(M,P,O,B,I,K)}function Vs(y,P,O){P.isScene!==!0&&(P=le);let B=Mt.get(y),I=u.state.lights,K=u.state.shadowsArray,lt=I.state.version,pt=xt.getParameters(y,I.state,K,P,O),mt=xt.getProgramCacheKey(pt),Ct=B.programs;B.environment=y.isMeshStandardMaterial?P.environment:null,B.fog=P.fog,B.envMap=(y.isMeshStandardMaterial?F:x).get(y.envMap||B.environment),B.envMapRotation=B.environment!==null&&y.envMap===null?P.environmentRotation:y.envMapRotation,Ct===void 0&&(y.addEventListener("dispose",It),Ct=new Map,B.programs=Ct);let Lt=Ct.get(mt);if(Lt!==void 0){if(B.currentProgram===Lt&&B.lightsStateVersion===lt)return Vl(y,pt),Lt}else pt.uniforms=xt.getUniforms(y),y.onBeforeCompile(pt,M),Lt=xt.acquireProgram(pt,mt),Ct.set(mt,Lt),B.uniforms=pt.uniforms;let gt=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(gt.clippingPlanes=J.uniform),Vl(y,pt),B.needsLights=iu(y),B.lightsStateVersion=lt,B.needsLights&&(gt.ambientLightColor.value=I.state.ambient,gt.lightProbe.value=I.state.probe,gt.directionalLights.value=I.state.directional,gt.directionalLightShadows.value=I.state.directionalShadow,gt.spotLights.value=I.state.spot,gt.spotLightShadows.value=I.state.spotShadow,gt.rectAreaLights.value=I.state.rectArea,gt.ltc_1.value=I.state.rectAreaLTC1,gt.ltc_2.value=I.state.rectAreaLTC2,gt.pointLights.value=I.state.point,gt.pointLightShadows.value=I.state.pointShadow,gt.hemisphereLights.value=I.state.hemi,gt.directionalShadowMap.value=I.state.directionalShadowMap,gt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,gt.spotShadowMap.value=I.state.spotShadowMap,gt.spotLightMatrix.value=I.state.spotLightMatrix,gt.spotLightMap.value=I.state.spotLightMap,gt.pointShadowMap.value=I.state.pointShadowMap,gt.pointShadowMatrix.value=I.state.pointShadowMatrix),B.currentProgram=Lt,B.uniformsList=null,Lt}function kl(y){if(y.uniformsList===null){let P=y.currentProgram.getUniforms();y.uniformsList=Gi.seqWithValue(P.seq,y.uniforms)}return y.uniformsList}function Vl(y,P){let O=Mt.get(y);O.outputColorSpace=P.outputColorSpace,O.batching=P.batching,O.batchingColor=P.batchingColor,O.instancing=P.instancing,O.instancingColor=P.instancingColor,O.instancingMorph=P.instancingMorph,O.skinning=P.skinning,O.morphTargets=P.morphTargets,O.morphNormals=P.morphNormals,O.morphColors=P.morphColors,O.morphTargetsCount=P.morphTargetsCount,O.numClippingPlanes=P.numClippingPlanes,O.numIntersection=P.numClipIntersection,O.vertexAlphas=P.vertexAlphas,O.vertexTangents=P.vertexTangents,O.toneMapping=P.toneMapping}function eu(y,P,O,B,I){P.isScene!==!0&&(P=le),b.resetTextureUnits();let K=P.fog,lt=B.isMeshStandardMaterial?P.environment:null,pt=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Qi,mt=(B.isMeshStandardMaterial?F:x).get(B.envMap||lt),Ct=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Lt=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),gt=!!O.morphAttributes.position,$t=!!O.morphAttributes.normal,ne=!!O.morphAttributes.color,se=Zn;B.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(se=M.toneMapping);let Ue=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Zt=Ue!==void 0?Ue.length:0,vt=Mt.get(B),xn=u.state.lights;if(tt===!0&&(_t===!0||y!==v)){let Ge=y===v&&B.id===S;J.setState(B,y,Ge)}let jt=!1;B.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==xn.state.version||vt.outputColorSpace!==pt||I.isBatchedMesh&&vt.batching===!1||!I.isBatchedMesh&&vt.batching===!0||I.isBatchedMesh&&vt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&vt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&vt.instancing===!1||!I.isInstancedMesh&&vt.instancing===!0||I.isSkinnedMesh&&vt.skinning===!1||!I.isSkinnedMesh&&vt.skinning===!0||I.isInstancedMesh&&vt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&vt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&vt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&vt.instancingMorph===!1&&I.morphTexture!==null||vt.envMap!==mt||B.fog===!0&&vt.fog!==K||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==J.numPlanes||vt.numIntersection!==J.numIntersection)||vt.vertexAlphas!==Ct||vt.vertexTangents!==Lt||vt.morphTargets!==gt||vt.morphNormals!==$t||vt.morphColors!==ne||vt.toneMapping!==se||vt.morphTargetsCount!==Zt)&&(jt=!0):(jt=!0,vt.__version=B.version);let $e=vt.currentProgram;jt===!0&&($e=Vs(B,P,I));let bi=!1,Be=!1,us=!1,re=$e.getUniforms(),ln=vt.uniforms;if(bt.useProgram($e.program)&&(bi=!0,Be=!0,us=!0),B.id!==S&&(S=B.id,Be=!0),bi||v!==y){bt.buffers.depth.getReversed()?(rt.copy(y.projectionMatrix),cd(rt),hd(rt),re.setValue(L,"projectionMatrix",rt)):re.setValue(L,"projectionMatrix",y.projectionMatrix),re.setValue(L,"viewMatrix",y.matrixWorldInverse);let zn=re.map.cameraPosition;zn!==void 0&&zn.setValue(L,Pt.setFromMatrixPosition(y.matrixWorld)),Vt.logarithmicDepthBuffer&&re.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&re.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),v!==y&&(v=y,Be=!0,us=!0)}if(I.isSkinnedMesh){re.setOptional(L,I,"bindMatrix"),re.setOptional(L,I,"bindMatrixInverse");let Ge=I.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),re.setValue(L,"boneTexture",Ge.boneTexture,b))}I.isBatchedMesh&&(re.setOptional(L,I,"batchingTexture"),re.setValue(L,"batchingTexture",I._matricesTexture,b),re.setOptional(L,I,"batchingIdTexture"),re.setValue(L,"batchingIdTexture",I._indirectTexture,b),re.setOptional(L,I,"batchingColorTexture"),I._colorsTexture!==null&&re.setValue(L,"batchingColorTexture",I._colorsTexture,b));let ds=O.morphAttributes;if((ds.position!==void 0||ds.normal!==void 0||ds.color!==void 0)&&At.update(I,O,$e),(Be||vt.receiveShadow!==I.receiveShadow)&&(vt.receiveShadow=I.receiveShadow,re.setValue(L,"receiveShadow",I.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(ln.envMap.value=mt,ln.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&P.environment!==null&&(ln.envMapIntensity.value=P.environmentIntensity),Be&&(re.setValue(L,"toneMappingExposure",M.toneMappingExposure),vt.needsLights&&nu(ln,us),K&&B.fog===!0&&ot.refreshFogUniforms(ln,K),ot.refreshMaterialUniforms(ln,B,V,Q,u.state.transmissionRenderTarget[y.id]),Gi.upload(L,kl(vt),ln,b)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Gi.upload(L,kl(vt),ln,b),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&re.setValue(L,"center",I.center),re.setValue(L,"modelViewMatrix",I.modelViewMatrix),re.setValue(L,"normalMatrix",I.normalMatrix),re.setValue(L,"modelMatrix",I.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Ge=B.uniformsGroups;for(let zn=0,kn=Ge.length;zn<kn;zn++){let Hl=Ge[zn];R.update(Hl,$e),R.bind(Hl,$e)}}return $e}function nu(y,P){y.ambientLightColor.needsUpdate=P,y.lightProbe.needsUpdate=P,y.directionalLights.needsUpdate=P,y.directionalLightShadows.needsUpdate=P,y.pointLights.needsUpdate=P,y.pointLightShadows.needsUpdate=P,y.spotLights.needsUpdate=P,y.spotLightShadows.needsUpdate=P,y.rectAreaLights.needsUpdate=P,y.hemisphereLights.needsUpdate=P}function iu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(y,P,O){Mt.get(y.texture).__webglTexture=P,Mt.get(y.depthTexture).__webglTexture=O;let B=Mt.get(y);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,P){let O=Mt.get(y);O.__webglFramebuffer=P,O.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(y,P=0,O=0){U=y,A=P,T=O;let B=!0,I=null,K=!1,lt=!1;if(y){let mt=Mt.get(y);if(mt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(L.FRAMEBUFFER,null),B=!1;else if(mt.__webglFramebuffer===void 0)b.setupRenderTarget(y);else if(mt.__hasExternalTextures)b.rebindTextures(y,Mt.get(y.texture).__webglTexture,Mt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let gt=y.depthTexture;if(mt.__boundDepthTexture!==gt){if(gt!==null&&Mt.has(gt)&&(y.width!==gt.image.width||y.height!==gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(y)}}let Ct=y.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(lt=!0);let Lt=Mt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Lt[P])?I=Lt[P][O]:I=Lt[P],K=!0):y.samples>0&&b.useMultisampledRTT(y)===!1?I=Mt.get(y).__webglMultisampledFramebuffer:Array.isArray(Lt)?I=Lt[O]:I=Lt,C.copy(y.viewport),H.copy(y.scissor),z=y.scissorTest}else C.copy(yt).multiplyScalar(V).floor(),H.copy(Ft).multiplyScalar(V).floor(),z=te;if(bt.bindFramebuffer(L.FRAMEBUFFER,I)&&B&&bt.drawBuffers(y,I),bt.viewport(C),bt.scissor(H),bt.setScissorTest(z),K){let mt=Mt.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+P,mt.__webglTexture,O)}else if(lt){let mt=Mt.get(y.texture),Ct=P||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,mt.__webglTexture,O||0,Ct)}S=-1},this.readRenderTargetPixels=function(y,P,O,B,I,K,lt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=Mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){bt.bindFramebuffer(L.FRAMEBUFFER,pt);try{let mt=y.texture,Ct=mt.format,Lt=mt.type;if(!Vt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=y.width-B&&O>=0&&O<=y.height-I&&L.readPixels(P,O,B,I,Ut.convert(Ct),Ut.convert(Lt),K)}finally{let mt=U!==null?Mt.get(U).__webglFramebuffer:null;bt.bindFramebuffer(L.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(y,P,O,B,I,K,lt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=Mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){let mt=y.texture,Ct=mt.format,Lt=mt.type;if(!Vt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=y.width-B&&O>=0&&O<=y.height-I){bt.bindFramebuffer(L.FRAMEBUFFER,pt);let gt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,gt),L.bufferData(L.PIXEL_PACK_BUFFER,K.byteLength,L.STREAM_READ),L.readPixels(P,O,B,I,Ut.convert(Ct),Ut.convert(Lt),0);let $t=U!==null?Mt.get(U).__webglFramebuffer:null;bt.bindFramebuffer(L.FRAMEBUFFER,$t);let ne=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ld(L,ne,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,gt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,K),L.deleteBuffer(gt),L.deleteSync(ne),K}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,P=null,O=0){y.isTexture!==!0&&(xs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,y=arguments[1]);let B=Math.pow(2,-O),I=Math.floor(y.image.width*B),K=Math.floor(y.image.height*B),lt=P!==null?P.x:0,pt=P!==null?P.y:0;b.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,O,0,0,lt,pt,I,K),bt.unbindTexture()},this.copyTextureToTexture=function(y,P,O=null,B=null,I=0){y.isTexture!==!0&&(xs("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,y=arguments[1],P=arguments[2],I=arguments[3]||0,O=null);let K,lt,pt,mt,Ct,Lt,gt,$t,ne,se=y.isCompressedTexture?y.mipmaps[I]:y.image;O!==null?(K=O.max.x-O.min.x,lt=O.max.y-O.min.y,pt=O.isBox3?O.max.z-O.min.z:1,mt=O.min.x,Ct=O.min.y,Lt=O.isBox3?O.min.z:0):(K=se.width,lt=se.height,pt=se.depth||1,mt=0,Ct=0,Lt=0),B!==null?(gt=B.x,$t=B.y,ne=B.z):(gt=0,$t=0,ne=0);let Ue=Ut.convert(P.format),Zt=Ut.convert(P.type),vt;P.isData3DTexture?(b.setTexture3D(P,0),vt=L.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(b.setTexture2DArray(P,0),vt=L.TEXTURE_2D_ARRAY):(b.setTexture2D(P,0),vt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,P.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,P.unpackAlignment);let xn=L.getParameter(L.UNPACK_ROW_LENGTH),jt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),$e=L.getParameter(L.UNPACK_SKIP_PIXELS),bi=L.getParameter(L.UNPACK_SKIP_ROWS),Be=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,se.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,se.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,mt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ct),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Lt);let us=y.isDataArrayTexture||y.isData3DTexture,re=P.isDataArrayTexture||P.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){let ln=Mt.get(y),ds=Mt.get(P),Ge=Mt.get(ln.__renderTarget),zn=Mt.get(ds.__renderTarget);bt.bindFramebuffer(L.READ_FRAMEBUFFER,Ge.__webglFramebuffer),bt.bindFramebuffer(L.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let kn=0;kn<pt;kn++)us&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mt.get(y).__webglTexture,I,Lt+kn),y.isDepthTexture?(re&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mt.get(P).__webglTexture,I,ne+kn),L.blitFramebuffer(mt,Ct,K,lt,gt,$t,K,lt,L.DEPTH_BUFFER_BIT,L.NEAREST)):re?L.copyTexSubImage3D(vt,I,gt,$t,ne+kn,mt,Ct,K,lt):L.copyTexSubImage2D(vt,I,gt,$t,ne+kn,mt,Ct,K,lt);bt.bindFramebuffer(L.READ_FRAMEBUFFER,null),bt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else re?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(vt,I,gt,$t,ne,K,lt,pt,Ue,Zt,se.data):P.isCompressedArrayTexture?L.compressedTexSubImage3D(vt,I,gt,$t,ne,K,lt,pt,Ue,se.data):L.texSubImage3D(vt,I,gt,$t,ne,K,lt,pt,Ue,Zt,se):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,I,gt,$t,K,lt,Ue,Zt,se.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,I,gt,$t,se.width,se.height,Ue,se.data):L.texSubImage2D(L.TEXTURE_2D,I,gt,$t,K,lt,Ue,Zt,se);L.pixelStorei(L.UNPACK_ROW_LENGTH,xn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,jt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,$e),L.pixelStorei(L.UNPACK_SKIP_ROWS,bi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Be),I===0&&P.generateMipmaps&&L.generateMipmap(vt),bt.unbindTexture()},this.copyTextureToTexture3D=function(y,P,O=null,B=null,I=0){return y.isTexture!==!0&&(xs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,y=arguments[2],P=arguments[3],I=arguments[4]||0),xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,P,O,B,I)},this.initRenderTarget=function(y){Mt.get(y).__webglFramebuffer===void 0&&b.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),bt.unbindTexture()},this.resetState=function(){A=0,T=0,U=null,bt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}};var Ir=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Rt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Lr=class extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ts=class extends In{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Dr=new D,Ur=new D,Wc=new oe,_s=new ji,cr=new Zi,Ho=new D,Xc=new D,Ya=class extends Me{constructor(t=new Fe,e=new Ts){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Dr.fromBufferAttribute(e,s-1),Ur.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Dr.distanceTo(Ur);t.setAttribute("lineDistance",new me(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cr.copy(i.boundingSphere),cr.applyMatrix4(s),cr.radius+=r,t.ray.intersectsSphere(cr)===!1)return;Wc.copy(s).invert(),_s.copy(t.ray).applyMatrix4(Wc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=c){let u=h.getX(_),E=h.getX(_+1),w=hr(this,t,_s,l,u,E);w&&e.push(w)}if(this.isLineLoop){let _=h.getX(g-1),p=h.getX(m),u=hr(this,t,_s,l,_,p);u&&e.push(u)}}else{let m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=c){let u=hr(this,t,_s,l,_,_+1);u&&e.push(u)}if(this.isLineLoop){let _=hr(this,t,_s,l,g-1,m);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function hr(n,t,e,i,s,r){let o=n.geometry.attributes.position;if(Dr.fromBufferAttribute(o,s),Ur.fromBufferAttribute(o,r),e.distanceSqToSegment(Dr,Ur,Ho,Xc)>i)return;Ho.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Ho);if(!(l<t.near||l>t.far))return{distance:l,point:Xc.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var Yc=new D,qc=new D,Nr=class extends Ya{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Yc.fromBufferAttribute(e,s),qc.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Yc.distanceTo(qc);t.setAttribute("lineDistance",new me(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Fr=class n extends Fe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new D,h=new Tt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let m=i+d/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(a,3)),this.setAttribute("uv",new me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}};var Or=class n extends Fe{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=t,f=(e-t)/s,m=new D,g=new Tt;for(let _=0;_<=s;_++){for(let p=0;p<=i;p++){let u=r+p/i*o;m.x=d*Math.cos(u),m.y=d*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,h.push(g.x,g.y)}d+=f}for(let _=0;_<s;_++){let p=_*(i+1);for(let u=0;u<i;u++){let E=u+p,w=E,M=E+i+1,N=E+i+2,A=E+1;a.push(w,M,A),a.push(M,N,A)}}this.setIndex(a),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Br=class n extends Fe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new D,f=new D,m=[],g=[],_=[],p=[];for(let u=0;u<=i;u++){let E=[],w=u/i,M=0;u===0&&o===0?M=.5/e:u===i&&l===Math.PI&&(M=-.5/e);for(let N=0;N<=e;N++){let A=N/e;d.x=-t*Math.cos(s+A*r)*Math.sin(o+w*a),d.y=t*Math.cos(o+w*a),d.z=t*Math.sin(s+A*r)*Math.sin(o+w*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(A+M,1-w),E.push(c++)}h.push(E)}for(let u=0;u<i;u++)for(let E=0;E<e;E++){let w=h[u][E+1],M=h[u][E],N=h[u+1][E],A=h[u+1][E+1];(u!==0||o>0)&&m.push(w,M,A),(u!==i-1||l<Math.PI)&&m.push(M,N,A)}this.setIndex(m),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var zr=class extends In{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Rt(16777215),this.specular=new Rt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dl,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=Yr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Dn=class extends In{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dl,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=Yr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ur(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function r0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ki=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qa=class extends Ki{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ql,endingEnd:ql}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case $l:r=t,a=2*e-i;break;case Zl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case $l:o=t,l=2*i-e;break;case Zl:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(i-e)/(s-e),_=g*g,p=_*g,u=-f*p+2*f*_-f*g,E=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,w=(-1-m)*p+(1.5+m)*_+.5*g,M=m*p-m*_;for(let N=0;N!==a;++N)r[N]=u*o[h+N]+E*o[c+N]+w*o[l+N]+M*o[d+N];return r}},$a=class extends Ki{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},Za=class extends Ki{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},rn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ur(e,this.TimeBufferType),this.values=ur(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ur(t.times,Array),values:ur(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case _r:e=this.InterpolantFactoryMethodDiscrete;break;case Ra:e=this.InterpolantFactoryMethodLinear;break;case mo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _r;case this.InterpolantFactoryMethodLinear:return Ra;case this.InterpolantFactoryMethodSmooth:return mo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&r0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===mo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,f=d-i,m=d+i;for(let g=0;g!==i;++g){let _=e[d+g];if(_!==e[f+g]||_!==e[m+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,f=o*i;for(let m=0;m!==i;++m)e[f+m]=e[d+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=Ra;var xi=class extends rn{constructor(t,e,i){super(t,e,i)}};xi.prototype.ValueTypeName="bool";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=_r;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends rn{};ja.prototype.ValueTypeName="color";var Ja=class extends rn{};Ja.prototype.ValueTypeName="number";var Ka=class extends Ki{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)nn.slerpFlat(r,0,o,c-a,o,c,l);return r}},kr=class extends rn{InterpolantFactoryMethodLinear(t){return new Ka(this.times,this.values,this.getValueSize(),t)}};kr.prototype.ValueTypeName="quaternion";kr.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends rn{constructor(t,e,i){super(t,e,i)}};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=_r;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends rn{};Qa.prototype.ValueTypeName="vector";var tl=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},o0=new tl,el=class{constructor(t){this.manager=t!==void 0?t:o0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};el.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vr=class extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Hr=class extends Vr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Go=new oe,$c=new D,Zc=new D,nl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ws,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;$c.setFromMatrixPosition(t.matrixWorld),e.position.copy($c),Zc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zc),e.updateMatrixWorld(),Go.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Go),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Go)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var il=class extends nl{constructor(){super(new Ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gr=class extends Vr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new il}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Wr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=jc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function jc(){return performance.now()}var ml="\\[\\]\\.:\\/",a0=new RegExp("["+ml+"]","g"),gl="[^"+ml+"]",l0="[^"+ml.replace("\\.","")+"]",c0=/((?:WC+[\/:])*)/.source.replace("WC",gl),h0=/(WCOD+)?/.source.replace("WCOD",l0),u0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gl),d0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gl),f0=new RegExp("^"+c0+h0+u0+d0+"$"),p0=["material","materials","bones","map"],sl=class{constructor(t,e,i){let s=i||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ae=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(a0,"")}static parseTrackName(t){let e=f0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);p0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ae.Composite=sl;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var o_=new Float32Array(1);var As=class{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Xr=class extends Rn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rl);var xh={type:"change"},xl={type:"start"},yh={type:"end"},Jr=new ji,vh=new Ke,g0=Math.cos(70*Zr.DEG2RAD),xe=new D,Oe=2*Math.PI,Qt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_l=1e-6,Kr=class extends Xr{constructor(t,e=null){super(t,e),this.state=Qt.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yi.ROTATE,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},this.touches={ONE:fn.ROTATE,TWO:fn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new nn,this._lastTargetPosition=new D,this._quat=new nn().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new As,this._sphericalDelta=new As,this._scale=1,this._panOffset=new D,this._rotateStart=new Tt,this._rotateEnd=new Tt,this._rotateDelta=new Tt,this._panStart=new Tt,this._panEnd=new Tt,this._panDelta=new Tt,this._dollyStart=new Tt,this._dollyEnd=new Tt,this._dollyDelta=new Tt,this._dollyDirection=new D,this._mouse=new Tt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=x0.bind(this),this._onPointerDown=_0.bind(this),this._onPointerUp=v0.bind(this),this._onContextMenu=T0.bind(this),this._onMouseWheel=S0.bind(this),this._onKeyDown=b0.bind(this),this._onTouchStart=E0.bind(this),this._onTouchMove=w0.bind(this),this._onMouseDown=y0.bind(this),this._onMouseMove=M0.bind(this),this._interceptControlDown=A0.bind(this),this._interceptControlUp=C0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xh),this.update(),this.state=Qt.NONE}update(t=null){let e=this.object.position;xe.copy(e).sub(this.target),xe.applyQuaternion(this._quat),this._spherical.setFromVector3(xe),this.autoRotate&&this.state===Qt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Oe:i>Math.PI&&(i-=Oe),s<-Math.PI?s+=Oe:s>Math.PI&&(s-=Oe),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(xe.setFromSpherical(this._spherical),xe.applyQuaternion(this._quatInverse),e.copy(this.target).add(xe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=xe.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=xe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Jr.origin.copy(this.object.position),Jr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Jr.direction))<g0?this.object.lookAt(this.target):(vh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Jr.intersectPlane(vh,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>_l||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_l||this._lastTargetPosition.distanceToSquared(this.target)>_l?(this.dispatchEvent(xh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Oe/60*this.autoRotateSpeed*t:Oe/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){xe.setFromMatrixColumn(e,0),xe.multiplyScalar(-t),this._panOffset.add(xe)}_panUp(t,e){this.screenSpacePanning===!0?xe.setFromMatrixColumn(e,1):(xe.setFromMatrixColumn(e,0),xe.crossVectors(this.object.up,xe)),xe.multiplyScalar(t),this._panOffset.add(xe)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;xe.copy(s).sub(this.target);let r=xe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Oe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Oe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Oe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Oe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Oe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Oe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Oe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Oe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Tt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function _0(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function x0(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function v0(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(yh),this.state=Qt.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function y0(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Qt.DOLLY;break;case yi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Qt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Qt.ROTATE}break;case yi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Qt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Qt.PAN}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(xl)}function M0(n){switch(this.state){case Qt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Qt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function S0(n){this.enabled===!1||this.enableZoom===!1||this.state!==Qt.NONE||(n.preventDefault(),this.dispatchEvent(xl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(yh))}function b0(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function E0(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case fn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Qt.TOUCH_ROTATE;break;case fn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Qt.TOUCH_PAN;break;default:this.state=Qt.NONE}break;case 2:switch(this.touches.TWO){case fn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Qt.TOUCH_DOLLY_PAN;break;case fn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Qt.TOUCH_DOLLY_ROTATE;break;default:this.state=Qt.NONE}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(xl)}function w0(n){switch(this._trackPointer(n),this.state){case Qt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Qt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Qt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Qt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Qt.NONE}}function T0(n){this.enabled!==!1&&n.preventDefault()}function A0(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function C0(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Qr=class extends Me{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Tt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}},ns=new D,Mh=new oe,Sh=new oe,bh=new D,Eh=new D,to=class{constructor(t={}){let e=this,i,s,r,o,a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:s}},this.render=function(g,_){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),Mh.copy(_.matrixWorldInverse),Sh.multiplyMatrices(_.projectionMatrix,Mh),h(g,g,_),m(g)},this.setSize=function(g,_){i=g,s=_,r=i/2,o=s/2,l.style.width=g+"px",l.style.height=_+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let _=0,p=g.children.length;_<p;_++)c(g.children[_])}function h(g,_,p){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){ns.setFromMatrixPosition(g.matrixWorld),ns.applyMatrix4(Sh);let u=ns.z>=-1&&ns.z<=1&&g.layers.test(p.layers)===!0,E=g.element;E.style.display=u===!0?"":"none",u===!0&&(g.onBeforeRender(e,_,p),E.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(ns.x*r+r)+"px,"+(-ns.y*o+o)+"px)",E.parentNode!==l&&l.appendChild(E),g.onAfterRender(e,_,p));let w={distanceToCameraSquared:d(p,g)};a.objects.set(g,w)}for(let u=0,E=g.children.length;u<E;u++)h(g.children[u],_,p)}function d(g,_){return bh.setFromMatrixPosition(g.matrixWorld),Eh.setFromMatrixPosition(_.matrixWorld),bh.distanceToSquared(Eh)}function f(g){let _=[];return g.traverseVisible(function(p){p.isCSS2DObject&&_.push(p)}),_}function m(g){let _=f(g).sort(function(u,E){if(u.renderOrder!==E.renderOrder)return E.renderOrder-u.renderOrder;let w=a.objects.get(u).distanceToCameraSquared,M=a.objects.get(E).distanceToCameraSquared;return w-M}),p=_.length;for(let u=0,E=_.length;u<E;u++)_[u].element.style.zIndex=p-u}}};var vl={main:[[121.9062,24.9493],[121.8342,24.8716],[121.8234,24.8547],[121.8162,24.8311],[121.809,24.8058],[121.8054,24.7787],[121.809,24.7534],[121.8198,24.6994],[121.8198,24.6859],[121.8126,24.6724],[121.8162,24.6437],[121.827,24.6234],[121.8522,24.6082],[121.881,24.6048],[121.881,24.5981],[121.8702,24.5998],[121.8594,24.5981],[121.8486,24.5947],[121.8414,24.5896],[121.8522,24.5727],[121.8558,24.5508],[121.8522,24.5305],[121.8306,24.5187],[121.827,24.5103],[121.8306,24.5001],[121.8378,24.4917],[121.8414,24.4816],[121.8306,24.4731],[121.8054,24.4613],[121.7802,24.4326],[121.7802,24.4225],[121.7802,24.3971],[121.7766,24.3887],[121.773,24.3802],[121.7694,24.3701],[121.7658,24.3482],[121.7658,24.3414],[121.7622,24.3363],[121.7586,24.333],[121.7622,24.3262],[121.7658,24.3228],[121.7694,24.3178],[121.773,24.3127],[121.773,24.3093],[121.7658,24.3009],[121.7442,24.2806],[121.7226,24.2519],[121.7046,24.2384],[121.6974,24.2316],[121.701,24.2249],[121.6974,24.2198],[121.6722,24.2012],[121.6614,24.1928],[121.6506,24.1725],[121.6398,24.1303],[121.6146,24.0915],[121.6074,24.0763],[121.6074,24.0611],[121.6146,24.0425],[121.6218,24.0341],[121.6254,24.0307],[121.629,24.0256],[121.629,24.0155],[121.6254,24.002],[121.611,23.9817],[121.6074,23.9699],[121.6074,23.948],[121.593,23.8922],[121.5714,23.8314],[121.539,23.693],[121.521,23.6592],[121.4778,23.4346],[121.4634,23.3434],[121.4526,23.3266],[121.4274,23.2928],[121.4166,23.2759],[121.4094,23.254],[121.4022,23.2151],[121.4022,23.1797],[121.3986,23.1459],[121.3806,23.1104],[121.3734,23.1037],[121.3554,23.0919],[121.3482,23.0834],[121.3446,23.075],[121.3374,23.0547],[121.3194,23.026],[121.3086,22.9804],[121.2978,22.9585],[121.2618,22.9078],[121.2546,22.8977],[121.2042,22.8571],[121.1898,22.8436],[121.1898,22.8335],[121.1898,22.8115],[121.1898,22.8014],[121.1862,22.7913],[121.179,22.7795],[121.161,22.7575],[121.143,22.7423],[121.0818,22.7035],[121.0386,22.663],[121.0278,22.6579],[121.0206,22.6478],[121.0026,22.6005],[120.9918,22.5836],[120.9594,22.5481],[120.9486,22.5262],[120.9414,22.484],[120.9234,22.4249],[120.8874,22.3658],[120.8802,22.3455],[120.8766,22.2898],[120.8766,22.2374],[120.8802,22.0551],[120.873,22.0297],[120.8622,22.0095],[120.8514,22.001],[120.837,21.9875],[120.837,21.9571],[120.8406,21.925],[120.8406,21.9048],[120.8226,21.9284],[120.7974,21.947],[120.7686,21.9588],[120.7362,21.9656],[120.7362,21.9436],[120.729,21.9352],[120.7146,21.9369],[120.7002,21.9487],[120.7002,21.9571],[120.7038,21.9808],[120.6822,22.0145],[120.6822,22.023],[120.6822,22.0297],[120.6822,22.0416],[120.6822,22.0787],[120.6858,22.0905],[120.6966,22.1023],[120.6966,22.1125],[120.621,22.2948],[120.6138,22.305],[120.5922,22.3286],[120.5778,22.3641],[120.5706,22.3742],[120.5382,22.3962],[120.5274,22.4029],[120.5238,22.4046],[120.5166,22.4063],[120.513,22.4198],[120.513,22.4249],[120.495,22.435],[120.459,22.4519],[120.441,22.462],[120.423,22.4772],[120.4122,22.4823],[120.4014,22.4873],[120.3978,22.4857],[120.3906,22.484],[120.3798,22.484],[120.333,22.5194],[120.2862,22.5802],[120.333,22.5262],[120.3294,22.5515],[120.3186,22.565],[120.315,22.5768],[120.2934,22.5988],[120.2574,22.6275],[120.2466,22.6427],[120.2394,22.6596],[120.2466,22.6748],[120.2538,22.69],[120.2466,22.7102],[120.2358,22.7305],[120.2178,22.7575],[120.1998,22.793],[120.1962,22.8082],[120.1962,22.8183],[120.2034,22.8318],[120.2034,22.8403],[120.1998,22.8436],[120.1962,22.847],[120.1926,22.8521],[120.189,22.8605],[120.1782,22.8774],[120.1746,22.8842],[120.1674,22.9314],[120.1638,22.9534],[120.1566,22.9669],[120.1422,22.9804],[120.1602,22.9922],[120.171,23.0142],[120.1674,23.0311],[120.1422,23.0344],[120.1386,23.0277],[120.135,23.0159],[120.1278,23.0074],[120.1134,23.0074],[120.1098,23.0159],[120.1098,23.0395],[120.1062,23.0479],[120.0918,23.0547],[120.0846,23.0479],[120.0774,23.0378],[120.0666,23.0344],[120.0558,23.0429],[120.0522,23.0564],[120.0558,23.0682],[120.0594,23.0767],[120.0702,23.0817],[120.0846,23.0834],[120.0954,23.0868],[120.099,23.0969],[120.0954,23.102],[120.0594,23.1104],[120.0594,23.1172],[120.0882,23.1172],[120.0846,23.1273],[120.0702,23.1391],[120.0594,23.151],[120.063,23.1645],[120.0702,23.1695],[120.081,23.1729],[120.0882,23.1813],[120.0846,23.1965],[120.0774,23.2067],[120.081,23.2168],[120.0882,23.2303],[120.0954,23.2388],[120.0954,23.2472],[120.0954,23.2556],[120.1098,23.286],[120.1134,23.2928],[120.1242,23.2945],[120.1098,23.3029],[120.117,23.3181],[120.1314,23.3181],[120.1422,23.3232],[120.1494,23.3215],[120.1458,23.3333],[120.1386,23.3283],[120.1314,23.3299],[120.1206,23.3299],[120.1206,23.3418],[120.1314,23.3603],[120.1458,23.362],[120.1638,23.362],[120.1494,23.3975],[120.135,23.4262],[120.1422,23.4397],[120.1422,23.4465],[120.1314,23.4515],[120.1314,23.4566],[120.1386,23.465],[120.1422,23.4735],[120.1566,23.492],[120.1242,23.4904],[120.1242,23.5207],[120.1422,23.5376],[120.1422,23.595],[120.1422,23.6373],[120.153,23.6727],[120.171,23.6997],[120.1746,23.7335],[120.1854,23.7639],[120.189,23.774],[120.2142,23.8027],[120.2178,23.8129],[120.2178,23.8179],[120.2394,23.8331],[120.2466,23.8433],[120.2538,23.8686],[120.2574,23.8787],[120.2862,23.9024],[120.2934,23.9125],[120.3042,23.9395],[120.3186,23.9665],[120.3402,24.0223],[120.351,24.0375],[120.3618,24.0493],[120.3726,24.0543],[120.3798,24.0577],[120.387,24.0628],[120.387,24.0729],[120.3906,24.083],[120.4122,24.0966],[120.4158,24.1067],[120.4194,24.1421],[120.423,24.1523],[120.4338,24.1607],[120.477,24.2063],[120.477,24.2097],[120.4806,24.2215],[120.4914,24.23],[120.5022,24.2536],[120.513,24.2958],[120.549,24.3515],[120.5598,24.3853],[120.5706,24.4056],[120.621,24.4562],[120.6498,24.4832],[120.657,24.4984],[120.6606,24.5204],[120.6678,24.5407],[120.6894,24.5761],[120.6966,24.5981],[120.7038,24.6065],[120.729,24.6133],[120.7362,24.6217],[120.7398,24.6301],[120.7434,24.6386],[120.7614,24.6538],[120.7794,24.6656],[120.801,24.6707],[120.8262,24.6656],[120.8226,24.6859],[120.8334,24.6977],[120.8478,24.7112],[120.855,24.7315],[120.8586,24.7365],[120.873,24.7433],[120.8766,24.7619],[120.8982,24.8007],[120.9054,24.8108],[120.909,24.8176],[120.909,24.8226],[120.9054,24.8294],[120.9018,24.8362],[120.909,24.8463],[120.9162,24.853],[120.9198,24.8615],[120.9234,24.875],[120.927,24.8851],[120.9342,24.8953],[120.945,24.902],[120.9522,24.9054],[120.9522,24.9088],[120.9558,24.9189],[120.963,24.9408],[120.9702,24.951],[121.0062,24.9999],[121.0314,25.0286],[121.0602,25.0506],[121.1286,25.0709],[121.1466,25.081],[121.161,25.0911],[121.1754,25.0996],[121.2114,25.1114],[121.287,25.1232],[121.3302,25.13],[121.3482,25.1367],[121.3734,25.1553],[121.377,25.1587],[121.3878,25.1587],[121.3986,25.1587],[121.413,25.1553],[121.4202,25.1468],[121.4238,25.1367],[121.431,25.1317],[121.4418,25.1367],[121.431,25.1553],[121.4058,25.1756],[121.395,25.1823],[121.3986,25.1924],[121.4058,25.1975],[121.413,25.2009],[121.4166,25.2043],[121.4238,25.2211],[121.4346,25.2414],[121.4598,25.2617],[121.4994,25.2786],[121.539,25.287],[121.5822,25.2836],[121.5966,25.2718],[121.6362,25.2228],[121.6506,25.1975],[121.6542,25.1992],[121.665,25.2009],[121.6758,25.2026],[121.683,25.2009],[121.683,25.1975],[121.6794,25.1924],[121.6758,25.1874],[121.6758,25.1789],[121.6794,25.1756],[121.6938,25.1654],[121.6974,25.162],[121.7046,25.157],[121.719,25.1519],[121.8918,25.1131],[121.9062,25.1063],[121.899,25.0945],[121.899,25.0844],[121.899,25.0658],[121.9098,25.0354],[121.9206,25.0219],[121.9278,25.0185],[121.953,25.0219],[121.9674,25.0219],[121.9818,25.0168],[121.9962,25.0101],[122.007,25.0016],[121.9278,24.9662],[121.9062,24.9493]],lanyu:[[121.5642,22.0449],[121.5822,22.0314],[121.5894,22.023],[121.5894,22.0145],[121.5678,22.0078],[121.539,22.0179],[121.5138,22.0348],[121.4994,22.0483],[121.503,22.0568],[121.503,22.0669],[121.4994,22.0753],[121.4922,22.0821],[121.5678,22.0821],[121.5678,22.0753],[121.5642,22.072],[121.5606,22.0635],[121.5606,22.0534],[121.5642,22.0449]],kinmen:[[118.3926,24.5221],[118.4214,24.5271],[118.4502,24.5052],[118.4682,24.4613],[118.4646,24.4309],[118.4502,24.4157],[118.4214,24.4309],[118.4034,24.436],[118.3746,24.4326],[118.3458,24.4174],[118.3314,24.3971],[118.317,24.3904],[118.3026,24.3971],[118.2918,24.3971],[118.2846,24.4005],[118.281,24.4089],[118.281,24.4106],[118.2882,24.4208],[118.2918,24.4258],[118.2918,24.4326],[118.2918,24.441],[118.2882,24.4562],[118.2846,24.4697],[118.281,24.4782],[118.2882,24.4799],[118.317,24.4934],[118.3566,24.4697],[118.3818,24.4731],[118.3854,24.5035],[118.3926,24.5221]],penghu1:[[119.649,23.6035],[119.667,23.5731],[119.6706,23.5596],[119.667,23.5495],[119.6598,23.5562],[119.6526,23.5613],[119.6418,23.563],[119.6274,23.5562],[119.6166,23.5545],[119.6094,23.5511],[119.6058,23.5461],[119.6022,23.5326],[119.5986,23.5292],[119.5806,23.5191],[119.5626,23.5174],[119.5446,23.5224],[119.5266,23.5393],[119.5302,23.5495],[119.541,23.5376],[119.559,23.5343],[119.5734,23.5393],[119.5878,23.5495],[119.577,23.5511],[119.5698,23.5562],[119.5662,23.5613],[119.559,23.5697],[119.5554,23.5663],[119.5554,23.5647],[119.5518,23.563],[119.5518,23.5765],[119.5518,23.59],[119.559,23.59],[119.5662,23.5883],[119.595,23.6052],[119.613,23.6102],[119.6094,23.595],[119.6058,23.59],[119.6202,23.595],[119.6346,23.5934],[119.6418,23.5934],[119.649,23.6035]],penghu2:[[119.4762,23.6035],[119.4906,23.639],[119.5014,23.6508],[119.5158,23.6373],[119.5086,23.6322],[119.5014,23.6204],[119.4906,23.59],[119.4906,23.5832],[119.4942,23.5765],[119.4906,23.5714],[119.4798,23.5697],[119.4726,23.5697],[119.4654,23.568],[119.4618,23.5663],[119.4582,23.563],[119.4438,23.563],[119.4438,23.5697],[119.451,23.5748],[119.4582,23.5765],[119.4654,23.5765],[119.4762,23.5799],[119.4762,23.5866],[119.4762,23.6035]],penghu3:[[119.5734,23.6271],[119.5698,23.639],[119.5626,23.6491],[119.5446,23.6643],[119.5662,23.6795],[119.5806,23.6727],[119.5914,23.6643],[119.595,23.6525],[119.5878,23.6457],[119.5914,23.6322],[119.5842,23.6254],[119.577,23.6221],[119.5734,23.6271]],greenisland:[[121.4598,22.6596],[121.4562,22.6731],[121.4562,22.6765],[121.4958,22.6781],[121.4994,22.6765],[121.503,22.6697],[121.4994,22.6562],[121.4958,22.6494],[121.4958,22.6444],[121.4958,22.6393],[121.4958,22.6342],[121.4922,22.6359],[121.485,22.6359],[121.4814,22.6359],[121.4814,22.6376],[121.4706,22.641],[121.4598,22.6596]],penghu4:[[120.0234,23.4515],[120.0738,23.5005],[120.117,23.5478],[120.1242,23.5511],[120.0918,23.4988],[120.0738,23.4836],[120.063,23.4718],[120.0486,23.4583],[120.0378,23.4515],[120.0198,23.438],[120.009,23.4329],[120.0234,23.4515]]};var eo={\u7389\u5C71\u570B\u5BB6\u516C\u5712:{f:"p01.jpg",a:"Chi-Hung Lin",l:"CC BY-SA 2.0",u:"https://commons.wikimedia.org/wiki/File:Yushan_Main_Peak_and_Yushan_Northern_Peak_seen_from_Dongpu_Mountain_in_the_afternoon_on_28_January_2017.jpg",t:"Yushan Main Peak and Yushan Northern Peak seen from Dongpu Mountain in the afternoon on 28 January 2017.jpg"},\u963F\u91CC\u5C71\u68EE\u6797\u904A\u6A02\u5340:{f:"p02.jpg",a:"CEphoto, Uwe Aranas",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Alishan_Taiwan_Alishan-Forest-Railway-03.jpg",t:"Alishan Taiwan Alishan-Forest-Railway-03.jpg"},\u592A\u9B6F\u95A3\u5CFD\u8C37:{f:"p03.jpg",a:"CEphoto, Uwe Aranas",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Taroko-Gorge_Hualien_Taiwan_Cihmu-Bridge-at-Taroko-National-Park-01.jpg",t:"Taroko-Gorge Hualien Taiwan Cihmu-Bridge-at-Taroko-National-Park-01.jpg"},\u5408\u6B61\u5C71:{f:"p04.jpg",a:"YangChen(TW)",l:"CC BY 2.0",u:"https://commons.wikimedia.org/wiki/File:Hehuanshan_in_winter.jpg",t:"Hehuanshan in winter.jpg"},\u96EA\u9738\u570B\u5BB6\u516C\u5712:{f:"p05.jpg",a:"Prince Roy",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Xueshan_Summit.jpg",t:"Xueshan Summit.jpg"},\u65E5\u6708\u6F6D:{f:"p06.jpg",a:"LowensteinYang",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:%E6%97%A5%E6%9C%88%E6%BD%AD%E6%B0%B4%E7%A4%BE%E7%A2%BC%E9%A0%AD_View_of_Shuishe_Pier_from_Sun_Moon_Lake_20151213.jpg",t:"\u65E5\u6708\u6F6D\u6C34\u793E\u78BC\u982D View of Shuishe Pier from Sun Moon Lake 20151213.jpg"},\u576A\u6797\u8336\u5712:{f:"p07.jpg",a:"Taiwankengo",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:2022_Tea_plantations_at_ZhangKongZi_Pinglin_District_e.jpg",t:"2022 Tea plantations at ZhangKongZi Pinglin District e.jpg"},\u6708\u4E16\u754C:{f:"p08.jpg",a:"Taiwankengo",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:Tianliao_Moon_World_2018.jpg",t:"Tianliao Moon World 2018.jpg"},\u6843\u5712\u57E4\u5858:{f:"p09.jpg",a:"Taiwankengo",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:2021_Xiaoli_Pond_in_Bade_District_Taoyuan_ii.jpg",t:"2021 Xiaoli Pond in Bade District Taoyuan ii.jpg"},\u6797\u53E3\u53F0\u5730:{f:"p10.jpg",a:"Wing1990hk",l:"CC BY 3.0",u:"https://commons.wikimedia.org/wiki/File:Linkou_District_201506.jpg",t:"Linkou District 201506.jpg"},\u81FA\u4E2D\u90FD\u6703\u516C\u5712:{f:"p11.jpg",a:"Fcuk1203",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Taichung_Metropolitan_Park_main_entrance_2010-08-12.jpg",t:"Taichung Metropolitan Park main entrance 2010-08-12.jpg"},\u516B\u5366\u5C71\u5927\u4F5B:{f:"p12.jpg",a:"AngMoKio",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Changhua_Great_Buddha_Temple_amk.jpg",t:"Changhua Great Buddha Temple amk.jpg"},"\u81FA\u5317 101":{f:"p13.jpg",a:"CEphoto, Uwe Aranas",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Taipei_Taiwan_Taipei-101-Tower-01.jpg",t:"Taipei Taiwan Taipei-101-Tower-01.jpg"},\u81FA\u4E2D\u516C\u5712:{f:"p14.jpg",a:"Yoxem",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Taichung_Park_Lake_Pavilion_20070925.jpg",t:"Taichung Park Lake Pavilion 20070925.jpg"},\u6CF0\u6E90\u5E7D\u8C37:{f:"p15.jpg",a:"Benson KC Fang",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Washed-out_Rocks_in_Mawuku_Creek,_Taiwan.JPG",t:"Washed-out Rocks in Mawuku Creek, Taiwan.JPG"},"\u70CF\u5C71\u982D\u6C34\u5EAB\u30FB\u5609\u5357\u5927\u5733":{f:"p16.jpg",a:"Koika",l:"CC BY-SA 2.0",u:"https://commons.wikimedia.org/wiki/File:Coral_Lake_Tainan_from_airplane_window.JPG",t:"Coral Lake Tainan from airplane window.JPG"},\u4E03\u80A1\u9E7D\u5C71:{f:"p17.jpg",a:"bangdoll",l:"CC BY-SA 2.0",u:"https://commons.wikimedia.org/wiki/File:Tourists_climbing_Qigu_Salt_Mountain.jpg",t:"Tourists climbing Qigu Salt Mountain.jpg"},\u51AC\u5C71\u6CB3\u89AA\u6C34\u516C\u5712:{f:"p18.jpg",a:"Gpdprince",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:Dongshan_River_Water_Park_(Yilan,_Taiwan).JPG",t:"Dongshan River Water Park (Yilan, Taiwan).JPG"},\u6C60\u4E0A\u4F2F\u6717\u5927\u9053:{f:"p19.jpg",a:"lumoplank",l:"CC0",u:"https://commons.wikimedia.org/wiki/File:Mr._Brown_Avenue,_Chishang.jpg",t:"Mr. Brown Avenue, Chishang.jpg"},\u7389\u91CC\u820A\u9435\u6A4B\u81EA\u884C\u8ECA\u9053:{f:"p20.jpg",a:"Kai3952",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:Former_Xiuguluan_River_Railway_Bridge,_which_can_see_the_fault_rupture_passed_through_the_bridge_and_caused_the_collapse_of_span_17,_as_taken_in_the_afternoon_on_4_December_2021.jpg",t:"Former Xiuguluan River Railway Bridge, which can see the fault rupture passed through the bridge and caused the collapse of span 17, as taken in the afternoon on 4 December 2021.jpg"},\u5927\u9D6C\u7063:{f:"p21.jpg",a:"rheins",l:"CC BY 3.0",u:"https://commons.wikimedia.org/wiki/File:%E5%A4%A7%E9%B9%8F%E6%B9%BE_-_Dapeng_Bay_-_2012.02_-_panoramio.jpg",t:"\u5927\u9E4F\u6E7E - Dapeng Bay - 2012.02 - panoramio.jpg"},\u967D\u660E\u5C71\u570B\u5BB6\u516C\u5712:{f:"p22.jpg",a:"lienyuan lee",l:"CC BY 3.0",u:"https://commons.wikimedia.org/wiki/File:Qixing_Mountain_%E4%B8%83%E6%98%9F%E5%B1%B1_-_panoramio.jpg",t:"Qixing Mountain \u4E03\u661F\u5C71 - panoramio.jpg"},\u91CE\u67F3\u5730\u8CEA\u516C\u5712:{f:"p23.jpg",a:"Mark S. Piteo-Tarpy",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Queens_Head_Rock_Yeliu_North_Coast_Taiwan.jpg",t:"Queens Head Rock Yeliu North Coast Taiwan.jpg"},\u4E5D\u4EFD:{f:"p24.jpg",a:"Another Believer",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:Jiufen,_November_28,_2024_-_030.jpg",t:"Jiufen, November 28, 2024 - 030.jpg"},\u6E05\u6C34\u65B7\u5D16:{f:"p25.jpg",a:"Huaiwun",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:Taroko_National_Park_Qingshui_Cliff_(Huaiwun).jpg",t:"Taroko National Park Qingshui Cliff (Huaiwun).jpg"},"\u58BE\u4E01\u570B\u5BB6\u516C\u5712\u30FB\u9D5D\u947E\u9F3B":{f:"p26.jpg",a:"Bernard Gagnon",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Eluanbi_Lighthouse_02.jpg",t:"Eluanbi Lighthouse 02.jpg"},\u5317\u9580\u6F5F\u6E56:{f:"p27.jpg",a:"\u5510\u7FA9\u5B8F",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:IMG_E5488(1)%E4%BA%95%E4%BB%94%E8%85%B3%E9%A4%8A%E8%9A%B5%E4%BA%BA%E5%AE%B6.jpg",t:"IMG E5488(1)\u4E95\u4ED4\u8173\u990A\u86B5\u4EBA\u5BB6.jpg"},\u9F3B\u982D\u89D2:{f:"p28.jpg",a:"Taiwankengo",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:2018_Bitou_Cape_B.jpg",t:"2018 Bitou Cape B.jpg"},\u6F8E\u6E56\u8DE8\u6D77\u5927\u6A4B:{f:"p29.jpg",a:"\u7FC1\u7DAD\u5FB7 (Wei-Te Wong)",l:"CC BY-SA 2.0",u:"https://commons.wikimedia.org/wiki/File:Penghu_Great_Bridge_20150619.jpg",t:"Penghu Great Bridge 20150619.jpg"},\u91D1\u9580\u8392\u5149\u6A13:{f:"p30.jpg",a:"\u59DC \u660E\u96C4",l:"CC0",u:"https://commons.wikimedia.org/wiki/File:Juguang_Tower_20180727.jpg",t:"Juguang Tower 20180727.jpg"},\u99AC\u7956\u82B9\u58C1\u805A\u843D:{f:"p31.jpg",a:"Catriona0000",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:Matsu_qinbi.jpg",t:"Matsu qinbi.jpg"},\u862D\u5DBC\u62FC\u677F\u821F:{f:"p32.jpg",a:"Bernard Gagnon",l:"CC BY-SA 3.0",u:"https://commons.wikimedia.org/wiki/File:Yami_ipanitika.jpg",t:"Yami ipanitika.jpg"},\u7DA0\u5CF6\u671D\u65E5\u6EAB\u6CC9:{f:"p33.jpg",a:"Suicasmo",l:"CC BY-SA 4.0",u:"https://commons.wikimedia.org/wiki/File:Zhaori_Hot_Springs_20150128.jpg",t:"Zhaori Hot Springs 20150128.jpg"},\u6771\u6C99\u74B0\u7901\u570B\u5BB6\u516C\u5712:{f:"p34.jpg",a:"ISS Crew Earth Observations experiment and the Image Science",l:"Public domain",u:"https://commons.wikimedia.org/wiki/File:Pratas_Island_ISS004-10210.jpg",t:"Pratas Island ISS004-10210.jpg"}};var Ae={mountain:{name:"\u5C71\u5730",color:"#9c6b4a",icon:"\u26F0\uFE0F",elem:"\u5F88\u9AD8\u3001\u9AD8\u4F4E\u8D77\u4F0F\u5F88\u5927\u7684\u5730\u65B9\uFF0C\u9AD8\u5EA6\u8D85\u904E 1,000 \u516C\u5C3A\u3002\u81FA\u7063\u7684\u5C71\u5730\u5728\u4E2D\u9593\u504F\u6771\u908A\uFF0C\u5357\u5317\u6392\u6210\u4E00\u9577\u689D\uFF0C\u9762\u7A4D\u6700\u5927\u3002\u6700\u9AD8\u7684\u5C71\u662F\u7389\u5C71\u3002",junior:"\u6D77\u62D4\u8D85\u904E 1,000 \u516C\u5C3A\u3001\u5D0E\u5D87\u8D77\u4F0F\u7684\u5730\u5F62\u3002\u81FA\u7063\u4F4D\u5728\u6B50\u4E9E\u677F\u584A\u8207\u83F2\u5F8B\u8CD3\u6D77\u677F\u584A\u4EA4\u754C\uFF0C\u677F\u584A\u63A8\u64E0\u5F62\u6210\u300C\u65B0\u8936\u66F2\u5C71\u8108\u300D\uFF0C\u6709\u4E94\u5927\u5C71\u8108\uFF1A\u4E2D\u592E\u3001\u96EA\u5C71\u3001\u7389\u5C71\u3001\u963F\u91CC\u5C71\u3001\u6D77\u5CB8\u5C71\u8108\uFF0C\u5176\u4E2D\u4E2D\u592E\u5C71\u8108\u7BC4\u570D\u6700\u5927\uFF1B\u7389\u5C71\u5C71\u8108\u4E3B\u5CF0 3,952 \u516C\u5C3A\u662F\u81FA\u7063\u6700\u9AD8\u5CF0\u3002"},hill:{name:"\u4E18\u9675",color:"#f2c94c",icon:"\u{1F304}",elem:"\u6709\u9AD8\u6709\u4F4E\uFF0C\u4F46\u6C92\u6709\u5C71\u5730\u90A3\u9EBC\u9AD8\u3001\u90A3\u9EBC\u9661\uFF08\u4E0D\u5230 1,000 \u516C\u5C3A\uFF09\u3002\u5E38\u5E38\u7A2E\u8336\u3001\u7A2E\u679C\u6A39\uFF0C\u958B\u6210\u4E00\u5C64\u4E00\u5C64\u7684\u68AF\u7530\u3002",junior:"\u6D77\u62D4\u4F4E\u65BC 1,000 \u516C\u5C3A\u7684\u8D77\u4F0F\u5730\u5F62\uFF0C\u4E3B\u8981\u5206\u5E03\u5728\u5C71\u5730\u5916\u7DE3\uFF0C\u4F8B\u5982\u82D7\u6817\u4E18\u9675\u3001\u65B0\u7AF9\u4E18\u9675\u3002\u5761\u5730\u5E38\u88AB\u958B\u95E2\u7A2E\u690D\u8336\u6A39\u3001\u679C\u6A39\u8207\u6C34\u7A3B\uFF08\u68AF\u7530\uFF09\u3002"},tableland:{name:"\u53F0\u5730",color:"#f2994a",icon:"\u{1F7EB}",elem:"\u9AD8\u9AD8\u7684\u3001\u4E0A\u9762\u5F88\u5E73\u5766\uFF0C\u65C1\u908A\u662F\u9661\u5761\uFF0C\u50CF\u4E00\u5F35\u5927\u684C\u5B50\u3002\u53F0\u5730\u6BD4\u8F03\u5BB9\u6613\u7F3A\u6C34\uFF0C\u4EE5\u524D\u7684\u4EBA\u6316\u4E86\u5F88\u591A\u300C\u57E4\u5858\u300D\u4F86\u5B58\u6C34\u3002",junior:"\u5730\u52E2\u9AD8\u800C\u5E73\u5766\u3001\u908A\u7DE3\u9661\u5CED\uFF0C\u4F46\u6D77\u62D4\u4F4E\u65BC 1,000 \u516C\u5C3A\u7684\u5730\u5F62\uFF0C\u5206\u5E03\u5728\u76C6\u5730\u3001\u5E73\u539F\u6216\u4E18\u9675\u7684\u63A5\u89F8\u5E36\uFF0C\u4F8B\u5982\u6797\u53E3\u3001\u6843\u5712\u3001\u5927\u809A\u3001\u516B\u5366\u53F0\u5730\u3002\u53F0\u5730\u591A\u767C\u5C55\u70BA\u8FB2\u696D\u8207\u5DE5\u696D\u7528\u5730\uFF08\u5927\u809A\u53F0\u5730\u6709\u6A5F\u5834\u3001\u5927\u5B78\u3001\u5DE5\u696D\u5340\uFF09\u3002"},basin:{name:"\u76C6\u5730",color:"#56ccf2",icon:"\u{1F963}",elem:"\u56DB\u5468\u9AD8\u3001\u4E2D\u9593\u4F4E\u5E73\uFF0C\u5F62\u72C0\u50CF\u4E00\u500B\u81C9\u76C6\u3002\u81FA\u5317\u76C6\u5730\u4F4F\u4E86\u5F88\u591A\u4EBA\u3002",junior:"\u56DB\u5468\u88AB\u4E18\u9675\u3001\u5C71\u5730\u570D\u7E5E\u7684\u76C6\u72C0\u5730\u5F62\uFF0C\u4F8B\u5982\u81FA\u5317\u3001\u81FA\u4E2D\u3001\u57D4\u91CC\u3001\u6CF0\u6E90\u76C6\u5730\u3002\u81FA\u5317\u76C6\u5730\u662F\u5168\u81FA\u4EBA\u53E3\u5BC6\u5EA6\u6700\u9AD8\u3001\u653F\u6CBB\u7D93\u6FDF\u7684\u4E2D\u5FC3\u3002"},plain:{name:"\u5E73\u539F",color:"#6fcf97",icon:"\u{1F33E}",elem:"\u53C8\u4F4E\u53C8\u5E73\u53C8\u5BEC\u7684\u5730\u65B9\uFF0C\u5F88\u9069\u5408\u7A2E\u7A3B\u7C73\u3001\u84CB\u623F\u5B50\u3002\u6700\u5927\u7684\u662F\u5609\u5357\u5E73\u539F\u3002",junior:"\u6D77\u62D4\u8F03\u4F4E\u3001\u5730\u52E2\u5E73\u5766\u7684\u5730\u5F62\u3002\u81FA\u4E2D\u4EE5\u5357\u5E73\u539F\u9023\u7DBF\uFF0C\u662F\u4E3B\u8981\u7684\u8FB2\u696D\u751F\u7522\u5730\u5E36\uFF1B\u5609\u5357\u5E73\u539F\u9762\u7A4D\u6700\u5EE3\uFF0C\u662F\u897F\u90E8\u5E73\u539F\u7684\u4E3B\u9AD4\u3002\u53E6\u6709\u6FC1\u6C34\u6EAA\u6C96\u7A4D\u5E73\u539F\u3001\u5C4F\u6771\u5E73\u539F\u3001\u862D\u967D\u5E73\u539F\u3001\u82B1\u6771\u7E31\u8C37\u5E73\u539F\u3002"}},Rs=[{name:"\u4E2D\u592E\u5C71\u8108",w:17,label:[121.18,23.75],pts:[[121.8,24.58,900],[121.6,24.45,2400],[121.44,24.36,3742],[121.36,24.2,3300],[121.31,24.08,3500],[121.2,23.8,3300],[121.08,23.5,3825],[120.99,23.25,3500],[120.92,22.95,3e3],[120.8,22.62,3092],[120.78,22.38,1800],[120.82,22.15,700],[120.85,21.95,200]]},{name:"\u96EA\u5C71\u5C71\u8108",w:13,label:[121.3,24.55],pts:[[121.95,25,400],[121.75,24.88,1100],[121.5,24.7,2200],[121.3,24.5,3300],[121.23,24.38,3886],[121.1,24.22,2900],[120.98,24.05,1900],[120.93,23.92,900]]},{name:"\u7389\u5C71\u5C71\u8108",w:9,label:[120.9,23.3],pts:[[121,23.8,1900],[120.98,23.62,3100],[120.957,23.47,3952],[120.92,23.25,3e3],[120.83,23,1900],[120.72,22.82,900]]},{name:"\u963F\u91CC\u5C71\u5C71\u8108",w:9,label:[120.72,23.45],pts:[[120.88,23.95,1100],[120.83,23.7,2e3],[120.8,23.5,2600],[120.72,23.25,1900],[120.6,23.02,1100],[120.52,22.88,500]]},{name:"\u6D77\u5CB8\u5C71\u8108",w:5.5,label:[121.42,23.4],pts:[[121.58,23.92,500],[121.48,23.6,1200],[121.37,23.25,1682],[121.26,23.02,1200],[121.17,22.82,500],[121.14,22.76,150]]}],wh=[{w:13,pts:[[121.8,25.08,450],[121.62,24.98,600],[121.45,24.85,450],[121.15,24.72,420],[120.95,24.55,480],[120.85,24.35,500],[120.82,24.05,520],[120.7,23.7,600],[120.55,23.35,550],[120.45,23.05,420],[120.42,22.8,300],[120.4,22.62,150]]},{w:6,pts:[[120.75,22.25,300],[120.8,22.05,250],[120.85,21.95,150]]}],no=[{name:"\u5927\u5C6F\u706B\u5C71\u7FA4",lon:121.55,lat:25.17,h:1120,r:7}],Ps=[{type:"plain",name:"\u5609\u5357\u5E73\u539F",label:[120.3,23.35],h:25,blur:4,poly:[[120.2,23.8],[120.52,23.8],[120.5,23.45],[120.42,23.1],[120.33,22.92],[120.18,22.92],[120.08,23.15],[120.1,23.5]]},{type:"plain",name:"\u6FC1\u6C34\u6EAA\u6C96\u7A4D\u5E73\u539F",label:[120.4,23.88],h:30,blur:4,poly:[[120.3,24.08],[120.52,24.05],[120.62,23.85],[120.55,23.78],[120.18,23.78],[120.22,23.95]]},{type:"plain",name:"\u5C4F\u6771\u5E73\u539F",label:[120.53,22.65],h:30,blur:3,poly:[[120.43,22.88],[120.62,22.88],[120.66,22.6],[120.6,22.4],[120.5,22.4],[120.42,22.55]]},{type:"plain",name:"\u862D\u967D\u5E73\u539F",label:[121.77,24.72],h:15,blur:2,poly:[[121.7,24.86],[121.82,24.86],[121.86,24.62],[121.8,24.58],[121.7,24.62],[121.68,24.75]]},{type:"plain",name:"\u82B1\u6771\u7E31\u8C37\u5E73\u539F",label:[121.36,23.45],h:180,blur:2,line:[[121.6,23.97],[121.48,23.7],[121.36,23.4],[121.24,23.15],[121.15,22.9],[121.12,22.76]],lw:2.6},{type:"basin",name:"\u81FA\u5317\u76C6\u5730",label:[121.52,25.05],h:10,blur:2,ell:[121.51,25.05,9,7]},{type:"basin",name:"\u81FA\u4E2D\u76C6\u5730",label:[120.69,24.15],h:90,blur:2,ell:[120.69,24.15,6,16]},{type:"basin",name:"\u57D4\u91CC\u76C6\u5730",label:[120.97,23.97],h:450,blur:1,ell:[120.965,23.97,4,3.5]},{type:"basin",name:"\u6CF0\u6E90\u76C6\u5730",label:[121.31,23],h:260,blur:1,ell:[121.305,23,2.3,2.3]},{type:"tableland",name:"\u6797\u53E3\u53F0\u5730",label:[121.35,25.08],h:240,blur:1,ell:[121.36,25.07,7,5.5]},{type:"tableland",name:"\u6843\u5712\u53F0\u5730",label:[121.17,24.93],h:140,blur:1,poly:[[121.05,25.06],[121.25,25.03],[121.35,24.85],[121.3,24.78],[121.1,24.82],[121,24.95]]},{type:"tableland",name:"\u5927\u809A\u53F0\u5730",label:[120.57,24.18],h:260,blur:1,ell:[120.575,24.18,3.2,11]},{type:"tableland",name:"\u516B\u5366\u53F0\u5730",label:[120.59,23.93],h:300,blur:1,ell:[120.585,23.93,3.6,13]}],yl=[{name:"\u65B0\u7AF9\u4E18\u9675",lon:121.05,lat:24.72},{name:"\u82D7\u6817\u4E18\u9675",lon:120.88,lat:24.48},{name:"\u65B0\u5316\u4E18\u9675",lon:120.4,lat:23.03}],Th=[{name:"\u7389\u5C71\u4E3B\u5CF0",lon:120.957,lat:23.47,h:3952,note:"\u81FA\u7063\u6700\u9AD8\u5CF0"},{name:"\u96EA\u5C71",lon:121.23,lat:24.38,h:3886,note:"\u96EA\u5C71\u5C71\u8108\u4E3B\u5CF0"},{name:"\u79C0\u59D1\u5DD2\u5C71",lon:121.08,lat:23.5,h:3825,note:"\u4E2D\u592E\u5C71\u8108\u6700\u9AD8\u5CF0"},{name:"\u5357\u6E56\u5927\u5C71",lon:121.44,lat:24.36,h:3742},{name:"\u5317\u5927\u6B66\u5C71",lon:120.8,lat:22.62,h:3092},{name:"\u65B0\u6E2F\u5C71",lon:121.37,lat:23.25,h:1682,note:"\u6D77\u5CB8\u5C71\u8108\u6700\u9AD8\u5CF0"},{name:"\u4E03\u661F\u5C71",lon:121.55,lat:25.17,h:1120,note:"\u5927\u5C6F\u706B\u5C71\u7FA4"}],Jn=[{id:"penghu",name:"\u6F8E\u6E56\u7FA4\u5CF6",coast:["penghu1","penghu2","penghu3","penghu4"],h:50,profile:"mesa",kind:"\u706B\u5C71\u5CF6",lon:119.57,lat:23.57,region:"S",elem:"\u7531\u5F88\u591A\u5C0F\u5CF6\u7D44\u6210\uFF0C\u5CF6\u4E0A\u5F88\u5E73\uFF0C\u6709\u7279\u5225\u7684\u300C\u67F1\u72C0\u7384\u6B66\u5CA9\u300D\uFF0C\u662F\u706B\u5C71\u5CA9\u6F3F\u51B7\u537B\u5F8C\u8B8A\u6210\u7684\u3002\u98A8\u5F88\u5927\u3001\u96E8\u5F88\u5C11\u3002",junior:"\u706B\u5C71\u5CF6\u3002\u7531\u7384\u6B66\u5CA9\u7194\u5CA9\u53F0\u5730\u69CB\u6210\uFF0C\u5730\u52E2\u4F4E\u5E73\uFF0C\u67F1\u72C0\u7384\u6B66\u5CA9\u767C\u9054\uFF08\u5982\u6876\u76E4\u5DBC\uFF09\uFF1B\u6F8E\u6E56\u5357\u65B9\u56DB\u5CF6\u8A2D\u6709\u570B\u5BB6\u516C\u5712\u3002\u5E74\u964D\u6C34\u91CF\u662F\u5168\u81FA\u6700\u5C11\u7684\u5730\u5340\u4E4B\u4E00\u3002"},{id:"kinmen",name:"\u91D1\u9580",coast:["kinmen"],h:253,profile:"hill",kind:"\u5927\u9678\u5CF6",lon:118.38,lat:24.45,region:"O",elem:"\u96E2\u4E2D\u570B\u5927\u9678\u5F88\u8FD1\u7684\u5CF6\uFF0C\u6700\u9AD8\u7684\u662F\u592A\u6B66\u5C71\u3002\u6709\u5F88\u591A\u95A9\u5357\u5F0F\u7684\u53E4\u539D\u548C\u6230\u5730\u7684\u6B77\u53F2\u3002",junior:"\u5927\u9678\u5CF6\u3002\u539F\u672C\u662F\u81E8\u6D77\u4E18\u9675\uFF0C\u56E0\u6D77\u5E73\u9762\u4E0A\u5347\u800C\u6210\u5CF6\uFF0C\u4EE5\u82B1\u5D17\u5CA9\u4E18\u9675\u70BA\u4E3B\uFF0C\u592A\u6B66\u5C71\u7D04 253 \u516C\u5C3A\u3002\u8A2D\u6709\u91D1\u9580\u570B\u5BB6\u516C\u5712\uFF08\u6230\u5F79\u53F2\u8E5F\u3001\u95A9\u5357\u805A\u843D\uFF09\u3002"},{id:"matsu",name:"\u99AC\u7956\u5217\u5CF6",ell:[[119.94,26.155,2.6,1.6],[119.99,26.222,2.4,1.4],[120.49,26.37,1.6,.9],[119.96,25.965,1.4,1]],h:290,profile:"hill",kind:"\u5927\u9678\u5CF6",lon:119.96,lat:26.16,region:"O",elem:"\u5728\u81FA\u7063\u897F\u5317\u65B9\u3001\u5F88\u9760\u8FD1\u4E2D\u570B\u5927\u9678\uFF0C\u5CF6\u4E0A\u591A\u5CA9\u77F3\u5C71\u5761\uFF0C\u623F\u5B50\u6CBF\u8457\u5C71\u5761\u84CB\u3002\u590F\u5929\u591C\u665A\u6D77\u908A\u53EF\u80FD\u770B\u5230\u300C\u85CD\u773C\u6DDA\u300D\u3002",junior:"\u5927\u9678\u5CF6\u3002\u539F\u8207\u4E2D\u570B\u6771\u5357\u6CBF\u6D77\u4E18\u9675\u76F8\u9023\uFF0C\u56E0\u6D77\u5E73\u9762\u4E0A\u5347\u800C\u6210\u5CF6\uFF0C\u56E0\u6B64\u5730\u52E2\u5D0E\u5D87\u3001\u5E73\u5730\u5C11\uFF1B\u805A\u843D\u4F9D\u5C71\u800C\u5EFA\uFF08\u5982\u82B9\u58C1\u7684\u77F3\u982D\u5C4B\uFF09\u3002"},{id:"lanyu",name:"\u862D\u5DBC",coast:["lanyu"],h:552,profile:"cone",kind:"\u706B\u5C71\u5CF6",lon:121.55,lat:22.04,region:"E",elem:"\u81FA\u6771\u5916\u6D77\u7684\u706B\u5C71\u5CF6\uFF0C\u4F4F\u8457\u9054\u609F\uFF08\u96C5\u7F8E\uFF09\u65CF\uFF0C\u6703\u505A\u6F02\u4EAE\u7684\u300C\u62FC\u677F\u821F\u300D\uFF0C\u9084\u6709\u98DB\u9B5A\u796D\u548C\u5730\u4E0B\u5C4B\uFF08\u53EF\u4EE5\u9632\u98B1\u98A8\uFF09\u3002",junior:"\u706B\u5C71\u5CF6\u3002\u5CF6\u4E0A\u6700\u9AD8\u9EDE\u7D05\u982D\u5C71\u7D04 552 \u516C\u5C3A\uFF1B\u96C5\u7F8E\uFF08\u9054\u609F\uFF09\u65CF\u7684\u62FC\u677F\u821F\u3001\u98DB\u9B5A\u796D\u8207\u9632\u98B1\u7684\u50B3\u7D71\u5730\u4E0B\u5C4B\uFF0C\u90FD\u662F\u9069\u61C9\u6D77\u5CF6\u74B0\u5883\u7684\u751F\u6D3B\u667A\u6167\u3002"},{id:"green",name:"\u7DA0\u5CF6",coast:["greenisland"],h:281,profile:"cone",kind:"\u706B\u5C71\u5CF6",lon:121.49,lat:22.66,region:"E",elem:"\u81FA\u6771\u5916\u6D77\u7684\u5C0F\u706B\u5C71\u5CF6\uFF0C\u6709\u5F88\u5C11\u898B\u7684\u6D77\u5E95\u6EAB\u6CC9\uFF08\u671D\u65E5\u6EAB\u6CC9\uFF09\u548C\u7F8E\u9E97\u7684\u73CA\u745A\u3002",junior:"\u706B\u5C71\u5CF6\u3002\u4F4D\u65BC\u81FA\u6771\u5916\u6D77\uFF0C\u5CF6\u4E0A\u706B\u71D2\u5C71\u7D04 281 \u516C\u5C3A\uFF0C\u6D77\u5CB8\u6709\u73CA\u745A\u7901\uFF0C\u671D\u65E5\u6EAB\u6CC9\u662F\u5C11\u898B\u7684\u6D77\u6C34\u6EAB\u6CC9\u3002"},{id:"dongsha",name:"\u6771\u6C99\u7FA4\u5CF6",ell:[[116.715,20.705,1.4,.55]],h:6,profile:"flat",kind:"\u73CA\u745A\u7901\u5CF6",atoll:[116.83,20.7,11.5],lon:116.72,lat:20.7,region:"O",elem:"\u5728\u5357\u6D77\u3001\u96E2\u9AD8\u96C4\u5F88\u9060\u5F88\u9060\uFF08\u7D04 440 \u516C\u91CC\uFF09\u7684\u73CA\u745A\u5CF6\uFF0C\u53C8\u5C0F\u53C8\u5E73\u3002\u5468\u570D\u662F\u4E00\u5708\u50CF\u751C\u751C\u5708\u7684\u73CA\u745A\u7901\u3002",junior:"\u73CA\u745A\u7901\u5CF6\uFF08\u74B0\u7901\uFF09\u3002\u9762\u7A4D\u5C0F\u3001\u5730\u52E2\u4F4E\u5E73\uFF1B\u6C11\u570B 96 \u5E74\u6210\u7ACB\u6771\u6C99\u74B0\u7901\u570B\u5BB6\u516C\u5712\uFF0C\u662F\u81FA\u7063\u7B2C\u4E00\u5EA7\u6D77\u6D0B\u570B\u5BB6\u516C\u5712\u3002\u8DDD\u9AD8\u96C4\u7D04 440 \u516C\u91CC\u3002"},{id:"guishan",name:"\u9F9C\u5C71\u5CF6",ell:[[121.952,24.842,1.6,.8]],h:398,profile:"cone",kind:"\u706B\u5C71\u5CF6",lon:121.952,lat:24.842,region:"N",elem:"\u5B9C\u862D\u5916\u6D77\u50CF\u4E00\u96BB\u70CF\u9F9C\u7684\u706B\u5C71\u5CF6\uFF0C\u662F\u5B9C\u862D\u4EBA\u7684\u5730\u6A19\u3002",junior:"\u706B\u5C71\u5CF6\u3002\u4F4D\u65BC\u5B9C\u862D\u5916\u6D77\uFF0C\u662F\u81FA\u7063\u4ECD\u6709\u706B\u5C71\u6D3B\u52D5\u8DE1\u8C61\u7684\u5CF6\u5DBC\uFF0C\u5916\u5F62\u4F3C\u9F9C\u800C\u5F97\u540D\u3002"},{id:"liuqiu",name:"\u5C0F\u7409\u7403",ell:[[120.37,22.34,1.6,1.1]],h:87,profile:"mesa",kind:"\u73CA\u745A\u7901\u5CF6",lon:120.37,lat:22.34,region:"S",elem:"\u5C4F\u6771\u5916\u6D77\u7684\u73CA\u745A\u7901\u5C0F\u5CF6\uFF0C\u53EF\u4EE5\u770B\u5230\u5F88\u591A\u6D77\u9F9C\u3002",junior:"\u73CA\u745A\u7901\u5CF6\uFF08\u7409\u7403\u5DBC\uFF09\u3002\u7531\u9686\u8D77\u7684\u73CA\u745A\u7901\u69CB\u6210\uFF0C\u5730\u52E2\u4F4E\u5E73\uFF0C\u6D77\u5CB8\u6709\u82B1\u74F6\u5CA9\u7B49\u73CA\u745A\u7901\u5730\u5F62\u3002"}],Un=[{n:"\u7389\u5C71\u570B\u5BB6\u516C\u5712",t:"mountain",lon:120.96,lat:23.47,i:"\u{1F3D4}\uFE0F",d:"\u81FA\u7063\u6700\u9AD8\u5CF0\u7389\u5C71\u6240\u5728\uFF0C\u9084\u6709\u5168\u81FA\u6D77\u62D4\u6700\u9AD8\u7684\u5EFA\u7BC9\u7269\u300C\u7389\u5C71\u6C23\u8C61\u7AD9\u300D\u3002"},{n:"\u963F\u91CC\u5C71\u68EE\u6797\u904A\u6A02\u5340",t:"mountain",lon:120.8,lat:23.51,i:"\u{1F682}",d:"\u5750\u68EE\u6797\u5C0F\u706B\u8ECA\u770B\u65E5\u51FA\u3001\u96F2\u6D77\u548C\u5343\u5E74\u795E\u6728\u3002"},{n:"\u592A\u9B6F\u95A3\u5CFD\u8C37",t:"mountain",lon:121.55,lat:24.17,i:"\u{1F3DE}\uFE0F",d:"\u7ACB\u9727\u6EAA\u628A\u5927\u7406\u77F3\u5207\u51FA\u5F88\u6DF1\u7684\u5CFD\u8C37\uFF0C\u662F\u592A\u9B6F\u95A3\u570B\u5BB6\u516C\u5712\u7684\u4EE3\u8868\u3002"},{n:"\u5408\u6B61\u5C71",t:"mountain",lon:121.27,lat:24.14,i:"\u2744\uFE0F",d:"\u51AC\u5929\u6709\u6A5F\u6703\u770B\u5230\u96EA\u666F\uFF08\u570B\u5C0F4\u4E0B\u300C\u56DB\u5B63\u666F\u9EDE\u300D\uFF1A\u51AC\uFF09\u3002"},{n:"\u96EA\u9738\u570B\u5BB6\u516C\u5712",t:"mountain",lon:121.2,lat:24.42,i:"\u{1F332}",d:"\u6709\u96EA\u5C71\u8207\u5927\u9738\u5C16\u5C71\uFF0C\u662F\u6AFB\u82B1\u9264\u543B\u9BAD\u7684\u5BB6\u3002"},{n:"\u65E5\u6708\u6F6D",t:"mountain",lon:120.915,lat:23.86,i:"\u{1F6F6}",d:"\u88AB\u7FA4\u5C71\u570D\u7E5E\u7684\u6E56\uFF0C\u662F\u81FA\u7063\u6700\u6709\u540D\u7684\u6E56\u6CCA\u4E4B\u4E00\uFF0C\u90B5\u65CF\u7684\u6545\u9109\u3002"},{n:"\u576A\u6797\u8336\u5712",t:"hill",lon:121.71,lat:24.94,i:"\u{1F375}",d:"\u4E18\u9675\u5761\u5730\u7A2E\u8336\uFF0C\u65C1\u908A\u662F\u4F9B\u61C9\u81FA\u5317\u7528\u6C34\u7684\u7FE1\u7FE0\u6C34\u5EAB\u3002"},{n:"\u82D7\u6817\u9285\u947C\u68AF\u7530",t:"hill",lon:120.79,lat:24.49,i:"\u{1F33E}",d:"\u628A\u4E18\u9675\u5C71\u5761\u958B\u6210\u4E00\u5C64\u4E00\u5C64\u7684\u7530\uFF08\u570B\u5C0F4\u4E0B\u8AB2\u672C\u8209\u4F8B\uFF09\u3002"},{n:"\u4E09\u7FA9\u6728\u96D5\u8857",t:"hill",lon:120.77,lat:24.4,i:"\u{1FAB5}",d:"\u82D7\u6817\u4E18\u9675\u4E0A\u7684\u5C0F\u93AE\uFF0C\u4EE5\u6728\u96D5\u805E\u540D\u3002"},{n:"\u6708\u4E16\u754C",t:"hill",lon:120.39,lat:22.92,i:"\u{1F319}",d:"\u6CE5\u5CA9\u4E18\u9675\u88AB\u96E8\u6C34\u6C96\u5237\uFF0C\u5F62\u6210\u5149\u79BF\u79BF\u3001\u50CF\u6708\u7403\u8868\u9762\u7684\u300C\u60E1\u5730\u300D\u3002"},{n:"\u6843\u5712\u57E4\u5858",t:"tableland",lon:121.12,lat:24.93,i:"\u{1F4A7}",d:"\u53F0\u5730\u5BB9\u6613\u7F3A\u6C34\uFF0C\u4EE5\u524D\u7684\u4EBA\u6316\u4E86\u5F88\u591A\u57E4\u5858\u5B58\u6C34\uFF0C\u88AB\u7A31\u70BA\u300C\u5343\u5858\u4E4B\u9109\u300D\u3002"},{n:"\u6797\u53E3\u53F0\u5730",t:"tableland",lon:121.37,lat:25.06,i:"\u{1F3D9}\uFE0F",d:"\u53F0\u5730\u4E0A\u5E73\u5766\uFF0C\u84CB\u4E86\u65B0\u5E02\u93AE\u3001\u91AB\u9662\u548C\u5B78\u6821\u3002"},{n:"\u81FA\u4E2D\u90FD\u6703\u516C\u5712",t:"tableland",lon:120.595,lat:24.21,i:"\u{1F333}",d:"\u5927\u809A\u53F0\u5730\u4E0A\u5E73\u5766\u7684\u5927\u516C\u5712\uFF1B\u5927\u809A\u53F0\u5730\u4E5F\u6709\u6A5F\u5834\u3001\u5927\u5B78\u8207\u5DE5\u696D\u5340\uFF08\u8AB2\u672C\uFF09\u3002"},{n:"\u516B\u5366\u5C71\u5927\u4F5B",t:"tableland",lon:120.553,lat:24.08,i:"\u{1F6D5}",d:"\u5728\u516B\u5366\u53F0\u5730\u908A\u7DE3\uFF0C\u53EF\u4EE5\u4FEF\u770B\u6574\u500B\u5F70\u5316\u5E73\u539F\u3002"},{n:"\u81FA\u5317 101",t:"basin",lon:121.565,lat:25.034,i:"\u{1F5FC}",d:"\u81FA\u5317\u76C6\u5730\u662F\u4EBA\u53E3\u6700\u5BC6\u96C6\u7684\u5730\u65B9\uFF0C101 \u5927\u6A13\u662F\u81FA\u5317\u7684\u5730\u6A19\u3002"},{n:"\u81FA\u4E2D\u516C\u5712",t:"basin",lon:120.685,lat:24.145,i:"\u{1F3EF}",d:"\u81FA\u4E2D\u76C6\u5730\u7684\u8001\u516C\u5712\uFF0C\u6E56\u5FC3\u4EAD\u662F\u81FA\u4E2D\u7684\u8C61\u5FB5\u3002"},{n:"\u81FA\u7063\u5730\u7406\u4E2D\u5FC3\u7891",t:"basin",lon:120.98,lat:23.975,i:"\u{1F4CD}",d:"\u5728\u57D4\u91CC\u76C6\u5730\uFF0C\u4EE3\u8868\u81FA\u7063\u672C\u5CF6\u7684\u5730\u7406\u4E2D\u5FC3\u3002"},{n:"\u6CF0\u6E90\u5E7D\u8C37",t:"basin",lon:121.3,lat:22.99,i:"\u{1F412}",d:"\u6D77\u5CB8\u5C71\u8108\u88E1\u7684\u5C0F\u76C6\u5730\uFF0C\u5E38\u53EF\u770B\u5230\u81FA\u7063\u737C\u7334\u3002"},{n:"\u70CF\u5C71\u982D\u6C34\u5EAB\u30FB\u5609\u5357\u5927\u5733",t:"plain",lon:120.39,lat:23.2,i:"\u{1F6B0}",d:"\u516B\u7530\u8207\u4E00\u8A2D\u8A08\u7684\u6C34\u5229\u5DE5\u7A0B\uFF0C\u8B93\u5609\u5357\u5E73\u539F\u6210\u70BA\u300C\u81FA\u7063\u7C73\u5009\u300D\u3002"},{n:"\u4E03\u80A1\u9E7D\u5C71",t:"plain",lon:120.09,lat:23.15,i:"\u{1F9C2}",d:"\u5609\u5357\u5E73\u539F\u6CBF\u6D77\u967D\u5149\u5145\u8DB3\u3001\u96E8\u5C11\uFF0C\u9069\u5408\u66EC\u9E7D\uFF1B\u65C1\u908A\u662F\u53F0\u6C5F\u570B\u5BB6\u516C\u5712\u3002"},{n:"\u51AC\u5C71\u6CB3\u89AA\u6C34\u516C\u5712",t:"plain",lon:121.8,lat:24.65,i:"\u{1F6A3}",d:"\u862D\u967D\u5E73\u539F\u4E0A\u7684\u6CB3\u5DDD\u516C\u5712\uFF0C\u6709\u570B\u969B\u7AE5\u73A9\u7BC0\u3002"},{n:"\u6C60\u4E0A\u4F2F\u6717\u5927\u9053",t:"plain",lon:121.23,lat:23.1,i:"\u{1F35A}",d:"\u82B1\u6771\u7E31\u8C37\u5E73\u539F\u7684\u7A3B\u7530\u5927\u9053\uFF0C\u6625\u5929\u9084\u6709\u6CB9\u83DC\u82B1\uFF08\u570B\u5C0F4\u4E0B\uFF1A\u6625\uFF09\u3002"},{n:"\u7389\u91CC\u820A\u9435\u6A4B\u81EA\u884C\u8ECA\u9053",t:"plain",lon:121.31,lat:23.33,i:"\u{1F6B2}",d:"\u820A\u9435\u6A4B\u88AB\u677F\u584A\u64E0\u58D3\u8B8A\u5F62\uFF0C\u6539\u6210\u81EA\u884C\u8ECA\u9053\uFF08\u8AB2\u672C\uFF1A\u677F\u584A\u4EA4\u754C\u5730\u6A19\uFF09\u3002"},{n:"\u5927\u9D6C\u7063",t:"plain",lon:120.47,lat:22.44,i:"\u26F5",d:"\u5C4F\u6771\u5E73\u539F\u6CBF\u6D77\u7684\u6F5F\u6E56\u3002"},{n:"\u967D\u660E\u5C71\u570B\u5BB6\u516C\u5712",t:"volcano",lon:121.56,lat:25.16,i:"\u{1F30B}",d:"\u5927\u5C6F\u706B\u5C71\u7FA4\uFF0C\u6709\u786B\u78FA\u5674\u6C23\u5B54\u3001\u6EAB\u6CC9\u548C\u6625\u5929\u7684\u82B1\u5B63\u3002"},{n:"\u91CE\u67F3\u5730\u8CEA\u516C\u5712",t:"coast",lon:121.69,lat:25.21,i:"\u{1F451}",d:"\u6D77\u6D6A\u548C\u98A8\u628A\u5CA9\u77F3\u96D5\u6210\u300C\u5973\u738B\u982D\u300D\u3002"},{n:"\u4E5D\u4EFD",t:"coast",lon:121.84,lat:25.11,i:"\u{1F3EE}",d:"\u5728\u57FA\u9686\u5C71\u7684\u5C71\u5761\u4E0A\uFF0C\u51AC\u5929\u5439\u6771\u5317\u5B63\u98A8\u6642\u5E38\u5E38\u4E0B\u96E8\uFF08\u8AB2\u672C\u8209\u4F8B\uFF09\u3002"},{n:"\u6E05\u6C34\u65B7\u5D16",t:"coast",lon:121.66,lat:24.21,i:"\u{1F9D7}",d:"\u5C71\u76F4\u63A5\u63D2\u9032\u592A\u5E73\u6D0B\uFF0C\u662F\u300C\u65B7\u5C64\u6D77\u5CB8\u300D\uFF08\u8AB2\u672C\uFF09\u3002"},{n:"\u58BE\u4E01\u570B\u5BB6\u516C\u5712\u30FB\u9D5D\u947E\u9F3B",t:"coast",lon:120.85,lat:21.9,i:"\u{1F5FC}",d:"\u81FA\u7063\u6700\u5357\u7AEF\uFF0C\u6709\u73CA\u745A\u7901\u6D77\u5CB8\uFF08\u8AB2\u672C\uFF09\u548C\u9D5D\u947E\u9F3B\u71C8\u5854\u3002"},{n:"\u5317\u9580\u6F5F\u6E56",t:"coast",lon:120.11,lat:23.27,i:"\u{1F9A9}",d:"\u6C99\u6D32\u570D\u51FA\u4F86\u7684\u6F5F\u6E56\uFF08\u8AB2\u672C\uFF1A\u6D77\u5CB8\u5730\u5F62\uFF09\u3002"},{n:"\u9F3B\u982D\u89D2",t:"coast",lon:121.92,lat:25.13,i:"\u{1F30A}",d:"\u5CAC\u89D2\u548C\u6D77\u7063\u4EA4\u932F\u7684\u300C\u5CAC\u7063\u6D77\u5CB8\u300D\uFF08\u8AB2\u672C\uFF09\u3002"},{n:"\u6F8E\u6E56\u8DE8\u6D77\u5927\u6A4B",t:"island",lon:119.57,lat:23.63,i:"\u{1F309}",d:"\u9023\u63A5\u767D\u6C99\u5CF6\u8207\u897F\u5DBC\uFF1B\u9644\u8FD1\u53EF\u770B\u5230\u67F1\u72C0\u7384\u6B66\u5CA9\u3002"},{n:"\u91D1\u9580\u8392\u5149\u6A13",t:"island",lon:118.32,lat:24.43,i:"\u{1F3EF}",d:"\u91D1\u9580\u7684\u5730\u6A19\uFF0C\u4E5F\u53EF\u4EE5\u53C3\u89C0\u53E4\u5BE7\u982D\u7B49\u6230\u5730\u53F2\u8E5F\u3002"},{n:"\u99AC\u7956\u82B9\u58C1\u805A\u843D",t:"island",lon:119.98,lat:26.225,i:"\u{1F3D8}\uFE0F",d:"\u6CBF\u8457\u5C71\u5761\u84CB\u7684\u82B1\u5D17\u77F3\u5C4B\uFF1B\u590F\u591C\u53EF\u80FD\u770B\u5230\u85CD\u773C\u6DDA\u3002"},{n:"\u862D\u5DBC\u62FC\u677F\u821F",t:"island",lon:121.51,lat:22.07,i:"\u{1F6F6}",d:"\u9054\u609F\u65CF\u7684\u62FC\u677F\u821F\u548C\u98DB\u9B5A\u796D\uFF08\u8AB2\u672C\uFF09\u3002"},{n:"\u7DA0\u5CF6\u671D\u65E5\u6EAB\u6CC9",t:"island",lon:121.505,lat:22.64,i:"\u2668\uFE0F",d:"\u4E16\u754C\u5C11\u898B\u7684\u6D77\u5E95\uFF08\u6D77\u6C34\uFF09\u6EAB\u6CC9\u3002"},{n:"\u6771\u6C99\u74B0\u7901\u570B\u5BB6\u516C\u5712",t:"island",lon:116.72,lat:20.7,i:"\u{1F420}",d:"\u81FA\u7063\u7B2C\u4E00\u5EA7\u6D77\u6D0B\u570B\u5BB6\u516C\u5712\uFF08\u6C11\u570B96\u5E74\u6210\u7ACB\uFF09\u3002"}],Is={N:{name:"\u5317\u90E8",color:"#5b8def",list:"\u57FA\u9686\u3001\u81FA\u5317\u3001\u65B0\u5317\u3001\u6843\u5712\u3001\u65B0\u7AF9\u7E23\u5E02\u3001\u5B9C\u862D"},C:{name:"\u4E2D\u90E8",color:"#3fbf7f",list:"\u82D7\u6817\u3001\u81FA\u4E2D\u3001\u5F70\u5316\u3001\u5357\u6295\u3001\u96F2\u6797"},S:{name:"\u5357\u90E8",color:"#f2994a",list:"\u5609\u7FA9\u7E23\u5E02\u3001\u81FA\u5357\u3001\u9AD8\u96C4\u3001\u5C4F\u6771\u3001\u6F8E\u6E56"},E:{name:"\u6771\u90E8",color:"#b07cd8",list:"\u82B1\u84EE\u3001\u81FA\u6771\uFF08\u542B\u7DA0\u5CF6\u3001\u862D\u5DBC\uFF09"},O:{name:"\u5176\u4ED6\u96E2\u5CF6",color:"#eb5f8a",list:"\u91D1\u9580\u3001\u9023\u6C5F\uFF08\u99AC\u7956\uFF09\u3001\u6771\u6C99\uFF08\u5C6C\u9AD8\u96C4\u5E02\u7BA1\u8F44\uFF09"}},is=[{id:"tamsui",name:"\u6DE1\u6C34",region:"N",lon:121.44,lat:25.17,src:"book",mm:[105.9,148,153.4,157.6,239.8,257.4,119.8,218.3,290.1,165.8,104.2,112.4]},{id:"kaohsiung",name:"\u9AD8\u96C4",region:"S",lon:120.31,lat:22.62,src:"book",mm:[19.1,17.7,32.3,68.4,202.2,416.2,377.2,512.4,224.5,53.4,25.6,19.2]},{id:"hengchun",name:"\u6046\u6625",region:"S",lon:120.74,lat:22,src:"book",mm:[21.8,23.2,16,35.2,146.6,350.7,391.3,533.4,320.3,125.3,58.3,29]},{id:"yushan",name:"\u7389\u5C71",region:"C",lon:120.959,lat:23.488,src:"book",mm:[83.7,67.2,94.8,201.2,423.6,459.6,434.2,516,297.2,145.1,98.3,81.6]},{id:"taipei",name:"\u81FA\u5317",region:"N",lon:121.51,lat:25.04,src:"cwa",mm:[95,171,181,172,234,326,246,323,365,147,89,79]},{id:"keelung",name:"\u57FA\u9686",region:"N",lon:121.74,lat:25.13,src:"cwa",mm:[331,397,321,242,285,301,148,207,368,396,412,345]},{id:"yilan",name:"\u5B9C\u862D",region:"N",lon:121.75,lat:24.76,src:"cwa",mm:[158,155,133,129,214,214,145,223,421,459,343,210]},{id:"taichung",name:"\u81FA\u4E2D",region:"C",lon:120.68,lat:24.15,src:"cwa",note:"\u5E74\u96E8\u91CF 1,763 mm \u70BA\u8AB2\u672C\u6578\u5B57",mm:[32,88,95,135,225,341,245,317,140,16,19,30]},{id:"hualien",name:"\u82B1\u84EE",region:"E",lon:121.61,lat:23.98,src:"cwa",note:"\u5E74\u96E8\u91CF 2,035 mm \u70BA\u8AB2\u672C\u6578\u5B57",mm:[66,99,89,89,172,191,147,241,319,299,128,58]},{id:"penghu",name:"\u6F8E\u6E56",region:"S",lon:119.56,lat:23.57,src:"cwa",mm:[21,46,59,95,124,170,129,182,96,26,21,20]}],Ml=[{name:"\u6625",months:[2,3,4],color:"#f7b6c8"},{name:"\u590F",months:[5,6,7],color:"#ffd27f"},{name:"\u79CB",months:[8,9,10],color:"#f0a868"},{name:"\u51AC",months:[11,0,1],color:"#a9c8ef"}],io=[{why:"\u6771\u5317\u5B63\u98A8",where:"\u5317\u90E8\u3001\u6771\u5317\u90E8",elem:"\u51AC\u5929\u5439\u300C\u6771\u5317\u5B63\u98A8\u300D\uFF0C\u98A8\u5F9E\u6D77\u4E0A\u5E36\u4F86\u6C34\u6C23\uFF0C\u5317\u90E8\u548C\u6771\u5317\u90E8\uFF08\u57FA\u9686\u3001\u5B9C\u862D\uFF09\u5E38\u5E38\u4E0B\u96E8\u53C8\u6EBC\u51B7\uFF1B\u5357\u90E8\u5F88\u5C11\u4E0B\u96E8\u3002",zones:[[121.3,24.4,122.1,25.35],[121.4,23.6,121.8,24.4]]},{why:"\u6771\u5317\u5B63\u98A8",where:"\u5317\u90E8\u3001\u6771\u5317\u90E8",elem:"\u9084\u662F\u6771\u5317\u5B63\u98A8\u7684\u5B63\u7BC0\uFF0C\u5317\u90E8\u3001\u6771\u5317\u90E8\u6EBC\u51B7\u591A\u96E8\uFF0C\u5357\u90E8\u4E7E\u71E5\u3002",zones:[[121.3,24.4,122.1,25.35]]},{why:"\u6625\u96E8",where:"\u5317\u90E8\u3001\u4E2D\u90E8",elem:"\u6625\u5929\u5929\u6C23\u4E0D\u7A69\u5B9A\uFF0C\u5317\u90E8\u5E38\u6709\u7DBF\u7DBF\u7D30\u96E8\uFF0C\u5357\u90E8\u4ECD\u7136\u6BD4\u8F03\u4E7E\u3002",zones:[[120.9,24.3,122,25.35],[120.6,23.8,121.3,24.4]]},{why:"\u6625\u96E8",where:"\u5317\u90E8\u3001\u4E2D\u90E8\u5C71\u5340",elem:"\u6625\u96E8\u8B8A\u591A\uFF0C\u5C71\u5340\u5E38\u6709\u5348\u5F8C\u7684\u96F2\u96E8\uFF1B\u5357\u90E8\u4E5F\u958B\u59CB\u8F49\u6EBC\u3002",zones:[[120.8,23.6,121.9,25.3]]},{why:"\u6885\u96E8\uFF08\u92D2\u9762\u96E8\uFF09",where:"\u5168\u81FA",elem:"5\u30016\u6708\u662F\u300C\u6885\u96E8\u5B63\u300D\uFF0C\u92D2\u9762\u505C\u5728\u81FA\u7063\u9644\u8FD1\uFF0C\u5168\u81FA\u90FD\u5BB9\u6613\u4E0B\u5927\u96E8\u3002",zones:[[120.1,22.4,121.9,25.3]]},{why:"\u6885\u96E8\uFF0B\u897F\u5357\u5B63\u98A8",where:"\u5168\u81FA\uFF0C\u4E2D\u5357\u90E8\u6700\u591A",elem:"\u6885\u96E8\u52A0\u4E0A\u897F\u5357\u5B63\u98A8\uFF0C\u4E2D\u5357\u90E8\u548C\u5C71\u5340\u96E8\u91CF\u5927\u589E\uFF0C\u9AD8\u96C4 6 \u6708\u7D04 416 \u6BEB\u7C73\u3002",zones:[[120.1,22,121.3,24.3],[120.6,22.5,121.5,24.5]]},{why:"\u98B1\u98A8\uFF0B\u5348\u5F8C\u96F7\u9663\u96E8",where:"\u5357\u90E8\u3001\u5C71\u5340",elem:"\u590F\u5929\u5F88\u71B1\uFF0C\u5348\u5F8C\u5E38\u6709\u96F7\u9663\u96E8\uFF08\u5C0D\u6D41\u96E8\uFF09\uFF1B\u98B1\u98A8\u4E5F\u5E36\u4F86\u5927\u91CF\u96E8\u6C34\uFF0C\u5357\u90E8\u548C\u5C71\u5340\u6700\u591A\u3002",zones:[[120.2,22,121.2,23.8],[120.7,23,121.4,24.4]]},{why:"\u98B1\u98A8\uFF0B\u897F\u5357\u5B63\u98A8",where:"\u5357\u90E8\u3001\u5C71\u5340",elem:"8 \u6708\u662F\u5F88\u591A\u5730\u65B9\u4E00\u5E74\u4E2D\u96E8\u6700\u591A\u7684\u6708\u4EFD\uFF08\u9AD8\u96C4\u7D04 512 \u6BEB\u7C73\u3001\u6046\u6625\u7D04 533 \u6BEB\u7C73\uFF09\uFF0C\u5E38\u6709\u98B1\u98A8\u3002",zones:[[120.2,21.9,121.2,23.6],[120.6,22.5,121.4,24.3]]},{why:"\u98B1\u98A8",where:"\u6771\u90E8\u3001\u5317\u90E8",elem:"\u79CB\u98B1\u5E38\u5E36\u4F86\u8C6A\u96E8\uFF0C\u6771\u90E8\u8207\u5317\u90E8\u96E8\u91CF\u591A\u3002",zones:[[121.3,22.6,121.9,24.6],[121.2,24.6,122,25.3]]},{why:"\u6771\u5317\u5B63\u98A8\uFF0B\u79CB\u98B1",where:"\u6771\u5317\u90E8\u3001\u6771\u90E8",elem:"\u6771\u5317\u5B63\u98A8\u958B\u59CB\u5439\uFF0C\u5B9C\u862D\u3001\u57FA\u9686\u3001\u82B1\u84EE\u591A\u96E8\uFF1B\u4E2D\u5357\u90E8\u9032\u5165\u4E7E\u5B63\uFF08\u81FA\u4E2D 10 \u6708\u53EA\u6709\u5341\u5E7E\u6BEB\u7C73\uFF09\u3002",zones:[[121.4,23.6,122,25.3]]},{why:"\u6771\u5317\u5B63\u98A8",where:"\u5317\u90E8\u3001\u6771\u5317\u90E8",elem:"\u6771\u5317\u5B63\u98A8\u8B8A\u5F37\uFF0C\u57FA\u9686\u662F\u5168\u81FA 11 \u6708\u6700\u6EBC\u7684\u5730\u65B9\u4E4B\u4E00\uFF1B\u897F\u5357\u90E8\u5F88\u4E7E\u71E5\u3002",zones:[[121.3,24.4,122.1,25.35]]},{why:"\u6771\u5317\u5B63\u98A8",where:"\u5317\u90E8\u3001\u6771\u5317\u90E8",elem:"\u51AC\u5929\u6771\u5317\u5B63\u98A8\uFF0C\u5317\u90E8\u6EBC\u51B7\uFF1B\u5357\u90E8\u6674\u6717\u5C11\u96E8\uFF0C\u6240\u4EE5\u5357\u90E8\u300C\u590F\u96E8\u51AC\u4E7E\u300D\u3002",zones:[[121.3,24.4,122.1,25.35],[121.4,23.8,121.8,24.4]]}],Ah=[{name:"\u5927\u96E8",mm:80},{name:"\u8C6A\u96E8",mm:200},{name:"\u5927\u8C6A\u96E8",mm:350},{name:"\u8D85\u5927\u8C6A\u96E8",mm:500}],Nn=[{id:"amis",n:"\u963F\u7F8E\u65CF",c:"#e4572e",v:"\u99AC\u592A\u978D\u90E8\u843D",vlon:121.42,vlat:23.655,where:"\u82B1\u84EE\u3001\u81FA\u6771\u7684\u82B1\u6771\u7E31\u8C37\u8207\u6771\u6D77\u5CB8",zones:[[121.6,23.97,6],[121.57,23.902,6],[121.54,23.835,6],[121.51,23.767,6],[121.48,23.7,6],[121.45,23.625,6],[121.42,23.55,6],[121.39,23.475,6],[121.36,23.4,6],[121.33,23.337,6],[121.3,23.275,6],[121.27,23.212,6],[121.24,23.15,6],[121.218,23.087,6],[121.195,23.025,6],[121.172,22.962,6],[121.15,22.9,6],[121.135,22.83,6],[121.12,22.76,6],[121.56,23.75,5.5],[121.547,23.683,5.5],[121.533,23.617,5.5],[121.52,23.55,5.5],[121.5,23.483,5.5],[121.48,23.417,5.5],[121.46,23.35,5.5],[121.437,23.283,5.5],[121.413,23.217,5.5],[121.39,23.15,5.5],[121.345,23.065,5.5],[121.3,22.98,5.5],[121.26,22.915,5.5],[121.22,22.85,5.5]],elem:"\u4EBA\u53E3\u6700\u591A\u7684\u539F\u4F4F\u6C11\u65CF\uFF0C\u4F4F\u5728\u82B1\u6771\u7684\u5E73\u539F\u548C\u6D77\u908A\u3002\u590F\u5929\u8209\u884C\u300C\u8C50\u5E74\u796D\u300D\uFF0C\u5927\u5BB6\u624B\u727D\u624B\u5531\u6B4C\u8DF3\u821E\uFF0C\u611F\u8B1D\u7956\u9748\u5E36\u4F86\u8C50\u6536\u3002",junior:"\u4EBA\u53E3\u6700\u591A\u7684\u539F\u4F4F\u6C11\u65CF\uFF0C\u4E3B\u8981\u5206\u5E03\u65BC\u82B1\u6771\u7E31\u8C37\u8207\u6771\u6D77\u5CB8\u5E73\u539F\uFF0C\u4EE5\u8FB2\u8015\u3001\u6355\u9B5A\u7DAD\u751F\uFF1B\u50B3\u7D71\u70BA\u6BCD\u7CFB\u793E\u6703\uFF0C\u7537\u5B50\u4F9D\u5E74\u9F61\u7D44\u6210\u300C\u5E74\u9F61\u968E\u7D1A\u300D\u3002\u590F\u5B63\u7684\u8C50\u5E74\u796D\uFF08ilisin\uFF09\u662F\u6700\u91CD\u8981\u7684\u796D\u5178\u3002"},{id:"atayal",n:"\u6CF0\u96C5\u65CF",c:"#2a9d8f",v:"\u53F8\u99AC\u5EAB\u65AF\u90E8\u843D",vlon:121.33,vlat:24.58,where:"\u5317\u90E8\u5C71\u5340\uFF08\u65B0\u5317\u3001\u6843\u5712\u3001\u65B0\u7AF9\u3001\u82D7\u6817\u3001\u81FA\u4E2D\u3001\u5B9C\u862D\uFF09",zones:[[121.55,24.83,10],[121.37,24.72,13],[121.26,24.58,12],[121.08,24.42,10],[121.25,24.3,13],[121.55,24.55,14],[121.62,24.42,10]],elem:"\u5206\u5E03\u7BC4\u570D\u6700\u5EE3\uFF0C\u4F4F\u5728\u5317\u90E8\u7684\u5C71\u4E0A\u3002\u4EE5\u524D\u6709\u300C\u7D0B\u9762\u300D\u7684\u50B3\u7D71\uFF0C\u4E5F\u5F88\u6703\u7528\u82E7\u9EBB\u7E54\u5E03\u3002\u53F8\u99AC\u5EAB\u65AF\u662F\u6709\u540D\u7684\u300C\u4E0A\u5E1D\u7684\u90E8\u843D\u300D\uFF0C\u6709\u5DE8\u6728\u7FA4\u3002",junior:"\u5206\u5E03\u7BC4\u570D\u6700\u5EE3\u7684\u539F\u4F4F\u6C11\u65CF\uFF0C\u5C45\u4F4F\u65BC\u5317\u90E8\u5C71\u5340\u3002\u50B3\u7D71\u4E0A\u7537\u5B50\u6703\u72E9\u7375\u3001\u5973\u5B50\u64C5\u9577\u7E54\u5E03\uFF0C\u7D0B\u9762\u662F\u6210\u5E74\u8207\u69AE\u8B7D\u7684\u8C61\u5FB5\uFF1B\u90E8\u843D\u9075\u5B88\u7956\u8A13\u300CGaga\u300D\u3002\u53F8\u99AC\u5EAB\u65AF\u90E8\u843D\u4EE5\u5171\u540C\u7D93\u71DF\u3001\u5171\u4EAB\u6536\u76CA\u805E\u540D\u3002"},{id:"paiwan",n:"\u6392\u7063\u65CF",c:"#8338ec",v:"\u4E09\u5730\u9580\u90E8\u843D",vlon:120.654,vlat:22.715,where:"\u5C4F\u6771\u3001\u81FA\u6771\u5357\u90E8\u7684\u5927\u6B66\u5C71\u4E00\u5E36",zones:[[120.7,22.6,11],[120.74,22.42,11],[120.82,22.25,9],[120.9,22.42,8],[120.85,22.12,6]],elem:"\u4F4F\u5728\u5357\u90E8\u5927\u6B66\u5C71\u9644\u8FD1\uFF0C\u5F88\u6703\u505A\u7409\u7483\u73E0\u548C\u96D5\u523B\uFF0C\u5E38\u7528\u300C\u767E\u6B65\u86C7\u300D\u7576\u5716\u6848\u3002\u6BCF\u4E94\u5E74\u8209\u884C\u4E00\u6B21\u300C\u4E94\u5E74\u796D\u300D\u3002",junior:"\u5206\u5E03\u65BC\u5927\u6B66\u5C71\u5468\u570D\uFF0C\u6709\u982D\u76EE\uFF08\u8CB4\u65CF\uFF09\u8207\u5E73\u6C11\u7684\u968E\u5C64\u5236\u5EA6\uFF0C\u767E\u6B65\u86C7\u3001\u592A\u967D\u8207\u9676\u58FA\u662F\u91CD\u8981\u8C61\u5FB5\uFF1B\u64C5\u9577\u7409\u7483\u73E0\u3001\u6728\u96D5\u8207\u77F3\u677F\u5C4B\u5EFA\u7BC9\u3002\u4E94\u5E74\u796D\uFF08maljeveq\uFF09\u662F\u8FCE\u63A5\u7956\u9748\u7684\u91CD\u8981\u796D\u5178\u3002"},{id:"bunun",n:"\u5E03\u8FB2\u65CF",c:"#3a86ff",v:"\u6771\u57D4\u90E8\u843D",vlon:120.93,vlat:23.56,where:"\u4E2D\u592E\u5C71\u8108\u7684\u9AD8\u5C71\uFF08\u5357\u6295\u3001\u82B1\u84EE\u3001\u81FA\u6771\u3001\u9AD8\u96C4\uFF09",zones:[[121,23.62,12],[121.08,23.82,7],[121.15,23.38,12],[121.05,23.15,10],[120.88,23.22,8]],elem:"\u4F4F\u5F97\u6700\u9AD8\u7684\u539F\u4F4F\u6C11\u65CF\uFF0C\u4F4F\u5728\u4E2D\u592E\u5C71\u8108\u7684\u9AD8\u5C71\u4E0A\uFF0C\u5F88\u6703\u6253\u7375\u3002\u5927\u5BB6\u4E00\u8D77\u5531\u7684\u300C\u516B\u90E8\u5408\u97F3\u300D\u975E\u5E38\u6709\u540D\u3002",junior:"\u5C45\u4F4F\u6D77\u62D4\u6700\u9AD8\u3001\u6D3B\u52D5\u7BC4\u570D\u6700\u5EE3\u7684\u9AD8\u5C71\u6C11\u65CF\uFF0C\u4EE5\u72E9\u7375\u8207\u5C0F\u7C73\u8015\u4F5C\u70BA\u4E3B\uFF1B\u4EE5\u7236\u7CFB\u6C0F\u65CF\u7D44\u7E54\u793E\u6703\u3002\u7948\u79B1\u5C0F\u7C73\u8C50\u6536\u7684\u300C\u516B\u90E8\u5408\u97F3\u300D\uFF08pasibutbut\uFF09\u4EAB\u8B7D\u570B\u969B\uFF0C\u6253\u8033\u796D\u662F\u91CD\u8981\u7684\u72E9\u7375\u796D\u5100\u3002"},{id:"puyuma",n:"\u5351\u5357\u65CF",c:"#ff006e",v:"\u5357\u738B\u90E8\u843D\uFF08\u666E\u60A0\u746A\uFF09",vlon:121.12,vlat:22.77,where:"\u81FA\u6771\u5E73\u539F\uFF08\u81FA\u6771\u5E02\u3001\u5351\u5357\u9109\uFF09",zones:[[121.1,22.78,6],[121.06,22.73,4]],elem:"\u4F4F\u5728\u81FA\u6771\u5E73\u539F\u3002\u7537\u5B69\u5B50\u8981\u9032\u300C\u5C11\u5E74\u6703\u6240\u300D\u63A5\u53D7\u8A13\u7DF4\uFF0C\u51AC\u5929\u6709\u300C\u7334\u796D\u300D\u548C\u300C\u5927\u7375\u796D\u300D\u3002",junior:"\u5206\u5E03\u65BC\u81FA\u6771\u5E73\u539F\uFF0C\u4EE5\u56B4\u683C\u7684\u6703\u6240\u5236\u5EA6\uFF08\u5C11\u5E74\u6703\u6240\u3001\u9752\u5E74\u6703\u6240\uFF09\u8A13\u7DF4\u7537\u5B50\uFF1B\u5E74\u5E95\u7684\u7334\u796D\u8207\u5927\u7375\u796D\u662F\u6210\u5E74\u79AE\u7684\u91CD\u8981\u5100\u5F0F\u3002\u50B3\u7D71\u4E0A\u66FE\u662F\u81FA\u6771\u5E73\u539F\u4E0A\u5F37\u76DB\u7684\u65CF\u7FA4\u3002"},{id:"rukai",n:"\u9B6F\u51F1\u65CF",c:"#fb8500",v:"\u9727\u81FA\u90E8\u843D",vlon:120.73,vlat:22.745,where:"\u5C4F\u6771\u9727\u81FA\u3001\u9AD8\u96C4\u8302\u6797\u3001\u81FA\u6771\u6771\u8208",zones:[[120.74,22.76,6],[120.66,22.89,5],[121.02,22.8,3]],elem:"\u4F4F\u5728\u5357\u90E8\u5C71\u5340\uFF0C\u6703\u7528\u77F3\u677F\u84CB\u623F\u5B50\uFF08\u77F3\u677F\u5C4B\uFF09\u3002\u300C\u767E\u5408\u82B1\u300D\u662F\u4ED6\u5011\u7684\u69AE\u8000\uFF0C\u53EA\u6709\u8868\u73FE\u597D\u7684\u4EBA\u624D\u80FD\u6234\u3002",junior:"\u5206\u5E03\u65BC\u5C4F\u6771\u9727\u81FA\u3001\u9AD8\u96C4\u8302\u6797\u8207\u81FA\u6771\u6771\u8208\uFF0C\u6709\u8CB4\u65CF\u8207\u5E73\u6C11\u7684\u968E\u5C64\u5236\u5EA6\uFF1B\u4EE5\u9801\u5CA9\u77F3\u677F\u5EFA\u9020\u77F3\u677F\u5C4B\uFF08\u5982\u597D\u8336\u90E8\u843D\uFF09\u3002\u767E\u5408\u82B1\u8C61\u5FB5\u7537\u5B50\u7684\u52C7\u731B\u8207\u5973\u5B50\u7684\u8C9E\u6F54\uFF0C\u9808\u7D93\u8A8D\u53EF\u624D\u80FD\u914D\u6234\u3002"},{id:"tsou",n:"\u9112\u65CF",c:"#06d6a0",v:"\u9054\u90A6\u90E8\u843D",vlon:120.75,vlat:23.46,where:"\u5609\u7FA9\u963F\u91CC\u5C71",zones:[[120.76,23.45,8],[120.82,23.38,5]],elem:"\u4F4F\u5728\u963F\u91CC\u5C71\uFF0C\u90E8\u843D\u88E1\u6709\u7537\u5B50\u805A\u6703\u7684\u300C\u5EAB\u5DF4\u300D\uFF08\u7537\u5B50\u6703\u6240\uFF09\u3002\u300C\u6230\u796D\u300D\u662F\u5F88\u91CD\u8981\u7684\u796D\u5178\u3002",junior:"\u4E3B\u8981\u5206\u5E03\u65BC\u5609\u7FA9\u963F\u91CC\u5C71\uFF0C\u4EE5\u9054\u90A6\u3001\u7279\u5BCC\u91CE\u5169\u5927\u793E\u70BA\u4E2D\u5FC3\uFF1B\u7537\u5B50\u6703\u6240\u300C\u5EAB\u5DF4\u300D\uFF08kuba\uFF09\u662F\u90E8\u843D\u653F\u6CBB\u8207\u796D\u5100\u4E2D\u5FC3\u3002\u6230\u796D\uFF08mayasvi\uFF09\u7528\u4F86\u7948\u6C42\u6230\u795E\u5E87\u4F51\u3001\u51DD\u805A\u90E8\u843D\u3002"},{id:"saisiyat",n:"\u8CFD\u590F\u65CF",c:"#8d99ae",v:"\u5411\u5929\u6E56\u90E8\u843D",vlon:120.985,vlat:24.56,where:"\u65B0\u7AF9\u4E94\u5CF0\u3001\u82D7\u6817\u5357\u5E84",zones:[[120.99,24.57,6.5],[121.06,24.62,6],[121.03,24.6,6]],elem:"\u4F4F\u5728\u65B0\u7AF9\u548C\u82D7\u6817\u7684\u5C71\u5340\uFF0C\u6BCF\u5169\u5E74\u8209\u884C\u4E00\u6B21\u300C\u77EE\u9748\u796D\u300D\uFF0C\u7D00\u5FF5\u50B3\u8AAA\u4E2D\u7684\u77EE\u4EBA\u3002",junior:"\u5206\u5E03\u65BC\u65B0\u7AF9\u4E94\u5CF0\u8207\u82D7\u6817\u5357\u5E84\uFF0C\u4EBA\u53E3\u8F03\u5C11\uFF0C\u4EE5\u7236\u7CFB\u6C0F\u65CF\u7D44\u7E54\uFF0C\u5404\u59D3\u6C0F\u8CA0\u8CAC\u4E0D\u540C\u796D\u5100\u3002\u6BCF\u5169\u5E74\u8209\u884C\u7684\u77EE\u9748\u796D\uFF08pas-taai\uFF09\u6E90\u81EA\u8207\u77EE\u4EBA\u7684\u50B3\u8AAA\uFF0C\u662F\u91CD\u8981\u7684\u6B72\u6642\u796D\u5100\u3002"},{id:"yami",n:"\u96C5\u7F8E\u65CF\uFF08\u9054\u609F\u65CF\uFF09",c:"#118ab2",v:"\u91CE\u9280\u90E8\u843D",vlon:121.585,vlat:22.035,where:"\u862D\u5DBC",island:"lanyu",zones:[],elem:"\u4F4F\u5728\u862D\u5DBC\uFF0C\u662F\u552F\u4E00\u4F4F\u5728\u6D77\u5CF6\u4E0A\u7684\u539F\u4F4F\u6C11\u65CF\u3002\u6703\u505A\u6F02\u4EAE\u7684\u300C\u62FC\u677F\u821F\u300D\uFF0C\u6625\u5929\u6709\u300C\u98DB\u9B5A\u796D\u300D\uFF0C\u9084\u6709\u53EF\u4EE5\u9632\u98B1\u98A8\u7684\u300C\u5730\u4E0B\u5C4B\u300D\u3002",junior:"\u5C45\u4F4F\u65BC\u862D\u5DBC\uFF0C\u662F\u81FA\u7063\u552F\u4E00\u7684\u6D77\u6D0B\u6C11\u65CF\uFF0C\u751F\u6D3B\u4F9D\u5FAA\u98DB\u9B5A\u5B63\u7BC0\u5B89\u6392\uFF1B\u62FC\u677F\u821F\u3001\u98DB\u9B5A\u796D\u8207\u9632\u98B1\u7684\u534A\u7A74\u5C45\u5730\u4E0B\u5C4B\uFF08\u91CE\u9280\u90E8\u843D\u4FDD\u5B58\u5B8C\u6574\uFF09\u90FD\u5C55\u73FE\u9069\u61C9\u6D77\u5CF6\u74B0\u5883\u7684\u667A\u6167\u3002"},{id:"thao",n:"\u90B5\u65CF",c:"#ffbe0b",v:"\u4F0A\u9054\u90B5\u90E8\u843D",vlon:120.93,vlat:23.85,where:"\u5357\u6295\u65E5\u6708\u6F6D",zones:[[120.925,23.855,3]],elem:"\u4F4F\u5728\u65E5\u6708\u6F6D\u65C1\u908A\uFF0C\u662F\u4EBA\u6578\u5F88\u5C11\u7684\u539F\u4F4F\u6C11\u65CF\u3002\u7528\u6728\u6775\u6417\u7C73\u6642\u767C\u51FA\u7684\u300C\u6775\u97F3\u300D\u5F88\u597D\u807D\u3002",junior:"\u5C45\u4F4F\u65BC\u65E5\u6708\u6F6D\u5468\u908A\uFF0C\u662F\u4EBA\u53E3\u6700\u5C11\u7684\u65CF\u7FA4\u4E4B\u4E00\uFF1B\u4EE5\u6F01\u7375\u3001\u8FB2\u8015\u70BA\u751F\uFF0C\u300C\u7956\u9748\u7C43\u300D\u662F\u4FE1\u4EF0\u4E2D\u5FC3\u3002\u65E5\u6708\u6F6D\u7684\u6775\u97F3\u8207\u50B3\u8AAA\u300C\u767D\u9E7F\u300D\u90FD\u8207\u90B5\u65CF\u6709\u95DC\u3002"},{id:"kavalan",n:"\u5676\u746A\u862D\u65CF",c:"#9b5de5",v:"\u65B0\u793E\u90E8\u843D",vlon:121.522,vlat:23.79,where:"\u539F\u5C45\u5B9C\u862D\u5E73\u539F\uFF0C\u5F8C\u9077\u81F3\u82B1\u84EE\u65B0\u793E\u3001\u8C50\u6FF1",zones:[[121.52,23.78,4]],elem:"\u4EE5\u524D\u4F4F\u5728\u5B9C\u862D\u5E73\u539F\uFF0C\u5F8C\u4F86\u642C\u5230\u82B1\u84EE\u6D77\u908A\u3002\u6703\u7528\u9999\u8549\u6A39\u7684\u7E96\u7DAD\u7E54\u5E03\u3002",junior:"\u539F\u5C45\u5B9C\u862D\u862D\u967D\u5E73\u539F\uFF0C\u6E05\u4EE3\u6F22\u4EBA\u79FB\u5165\u5F8C\u591A\u6578\u5357\u9077\u81F3\u82B1\u84EE\u65B0\u793E\u3001\u8C50\u6FF1\u4E00\u5E36\uFF1B\u4EE5\u9999\u8549\u7D72\u7E54\u5E03\u805E\u540D\u3002\u6C11\u570B 91 \u5E74\u6B63\u540D\u70BA\u7B2C 11 \u65CF\u3002"},{id:"truku",n:"\u592A\u9B6F\u95A3\u65CF",c:"#d62828",v:"\u5BCC\u4E16\u90E8\u843D",vlon:121.61,vlat:24.15,where:"\u82B1\u84EE\u79C0\u6797\u3001\u842C\u69AE\u3001\u5353\u6EAA",zones:[[121.55,24.15,10],[121.42,23.82,7],[121.45,23.98,6]],elem:"\u4F4F\u5728\u82B1\u84EE\u7684\u592A\u9B6F\u95A3\u4E00\u5E36\uFF0C\u4E5F\u6709\u7D0B\u9762\u7684\u50B3\u7D71\uFF0C\u5F88\u6703\u7E54\u5E03\u548C\u6253\u7375\u3002",junior:"\u4E3B\u8981\u5206\u5E03\u65BC\u82B1\u84EE\u79C0\u6797\u3001\u842C\u69AE\uFF0C\u8207\u8CFD\u5FB7\u514B\u65CF\u540C\u6E90\uFF0C\u5F9E\u5357\u6295\u9077\u5F99\u5230\u6771\u90E8\uFF1B\u50B3\u7D71\u6709\u7D0B\u9762\u3001\u72E9\u7375\u8207\u7E54\u5E03\u6587\u5316\u3002\u6C11\u570B 93 \u5E74\u6B63\u540D\u70BA\u7B2C 12 \u65CF\uFF0C\u300C\u592A\u9B6F\u95A3\u570B\u5BB6\u516C\u5712\u300D\u5373\u4EE5\u5176\u547D\u540D\u3002"},{id:"sakizaya",n:"\u6492\u5947\u840A\u96C5\u65CF",c:"#f15bb5",v:"\u6492\u56FA\u5152\u90E8\u843D",vlon:121.6,vlat:23.995,where:"\u82B1\u84EE\u5E02\u3001\u58FD\u8C50\u3001\u745E\u7A57",zones:[[121.59,23.97,4]],elem:"\u4F4F\u5728\u82B1\u84EE\u5E02\u9644\u8FD1\u3002\u4ED6\u5011\u8209\u884C\u300C\u706B\u795E\u796D\u300D\uFF0C\u7D00\u5FF5\u4EE5\u524D\u7684\u6B77\u53F2\u3002",junior:"\u5206\u5E03\u65BC\u82B1\u84EE\u5947\u840A\u5E73\u539F\u4E00\u5E36\uFF0C\u6E05\u4EE3\u300C\u52A0\u79AE\u5B9B\u4E8B\u4EF6\u300D\u5F8C\u65CF\u4EBA\u96B1\u8EAB\u65BC\u963F\u7F8E\u65CF\u4E2D\uFF1B\u6C11\u570B 96 \u5E74\u6B63\u540D\u70BA\u7B2C 13 \u65CF\uFF0C\u706B\u795E\u796D\uFF08palamal\uFF09\u7D00\u5FF5\u5148\u4EBA\u3002"},{id:"seediq",n:"\u8CFD\u5FB7\u514B\u65CF",c:"#6a4c93",v:"\u9727\u793E\uFF08\u6E05\u6D41\u90E8\u843D\uFF09",vlon:121.13,vlat:24.03,where:"\u5357\u6295\u4EC1\u611B\uFF08\u9727\u793E\u4E00\u5E36\uFF09\u3001\u82B1\u84EE",zones:[[121.15,24.03,8],[121.2,24.12,5]],elem:"\u4F4F\u5728\u5357\u6295\u9727\u793E\u4E00\u5E36\uFF0C\u6709\u7D0B\u9762\u50B3\u7D71\u3002\u767C\u751F\u904E\u6709\u540D\u7684\u300C\u9727\u793E\u4E8B\u4EF6\u300D\uFF0C\u9818\u8896\u662F\u83AB\u90A3\u9B6F\u9053\u3002",junior:"\u5206\u5E03\u65BC\u5357\u6295\u4EC1\u611B\u9109\u9727\u793E\u4E00\u5E36\uFF0C\u4FE1\u5B88\u7956\u8A13\u300CGaya\u300D\uFF1B\u65E5\u6CBB\u6642\u671F\u83AB\u90A3\u9B6F\u9053\u9818\u5C0E\u65CF\u4EBA\u767C\u52D5\u300C\u9727\u793E\u4E8B\u4EF6\u300D\uFF08\u6C11\u570B 19 \u5E74\uFF09\u3002\u6C11\u570B 97 \u5E74\u6B63\u540D\u70BA\u7B2C 14 \u65CF\u3002"},{id:"hlaalua",n:"\u62C9\u963F\u9B6F\u54C7\u65CF",c:"#43aa8b",v:"\u9AD8\u4E2D\u90E8\u843D",vlon:120.76,vlat:23.15,where:"\u9AD8\u96C4\u6843\u6E90",zones:[[120.76,23.15,4]],elem:"\u4F4F\u5728\u9AD8\u96C4\u6843\u6E90\uFF0C\u4EBA\u6578\u5F88\u5C11\u3002\u6709\u4E00\u500B\u7279\u5225\u7684\u300C\u8056\u8C9D\u796D\u300D\uFF0C\u7528\u8C9D\u6BBC\u7948\u6C42\u5E73\u5B89\u3002",junior:"\u5206\u5E03\u65BC\u9AD8\u96C4\u6843\u6E90\u5340\uFF0C\u4EBA\u53E3\u5F88\u5C11\uFF1B\u6700\u91CD\u8981\u7684\u796D\u5178\u662F\u796D\u62DC\u8056\u8C9D\u7684\u300C\u8056\u8C9D\u796D\u300D\uFF08miatungusu\uFF09\u3002\u6C11\u570B 103 \u5E74\u6B63\u540D\u70BA\u7B2C 15 \u65CF\u3002"},{id:"kanakanavu",n:"\u5361\u90A3\u5361\u90A3\u5BCC\u65CF",c:"#577590",v:"\u9054\u5361\u52AA\u74E6\u90E8\u843D",vlon:120.7,vlat:23.27,where:"\u9AD8\u96C4\u90A3\u746A\u590F",zones:[[120.7,23.27,4]],elem:"\u4F4F\u5728\u9AD8\u96C4\u90A3\u746A\u590F\uFF0C\u4EBA\u6578\u5F88\u5C11\u3002\u6703\u8209\u884C\u300C\u7C73\u8CA2\u796D\u300D\u611F\u8B1D\u5C0F\u7C73\u8C50\u6536\uFF0C\u4E5F\u6709\u4FDD\u8B77\u6CB3\u5DDD\u7684\u300C\u6CB3\u796D\u300D\u3002",junior:"\u5206\u5E03\u65BC\u9AD8\u96C4\u90A3\u746A\u590F\u6960\u6893\u4ED9\u6EAA\u6D41\u57DF\uFF0C\u4EBA\u53E3\u5F88\u5C11\uFF1B\u91CD\u8981\u796D\u5178\u6709\u5C0F\u7C73\u6536\u7A6B\u7684\u300C\u7C73\u8CA2\u796D\u300D\u8207\u7DAD\u8B77\u6F01\u6488\u8CC7\u6E90\u7684\u300C\u6CB3\u796D\u300D\u3002\u6C11\u570B 103 \u5E74\u6B63\u540D\u70BA\u7B2C 16 \u65CF\u3002"},{id:"siraya",n:"\u897F\u62C9\u96C5\u65CF",c:"#a0522d",v:"\u5409\u8C9D\u800D\u90E8\u843D",vlon:120.4,vlat:23.3,where:"\u50B3\u7D71\u5206\u5E03\uFF1A\u5609\u5357\u5E73\u539F\u5230\u6046\u6625\u534A\u5CF6\uFF1B\u73FE\u4ECA\uFF1A\u81FA\u5357\u3001\u9AD8\u96C4\u3001\u5C4F\u6771\u3001\u82B1\u84EE\u3001\u81FA\u6771",isNew:!0,plains:!0,zones:[[120.27,23.2,13],[120.38,22.98,10],[120.42,23.32,6],[120.2,23.42,9],[120.4,22.82,8],[120.48,22.7,8],[120.52,22.58,8],[120.58,22.45,7],[120.66,22.3,6],[120.7,22.17,5],[120.74,22.06,5]],elem:"2026 \u5E74 7 \u6708\u6210\u70BA\u81FA\u7063\u7B2C 17 \u500B\u539F\u4F4F\u6C11\u65CF\uFF01\u4EE5\u524D\u4F4F\u5728\u5609\u5357\u5E73\u539F\uFF0C\u662F\u6700\u65E9\u548C\u8377\u862D\u4EBA\u3001\u6F22\u4EBA\u63A5\u89F8\u7684\u539F\u4F4F\u6C11\u65CF\u3002\u5409\u8C9D\u800D\u90E8\u843D\u6BCF\u5E74\u8209\u884C\u300C\u591C\u796D\u300D\uFF0C\u796D\u62DC\u7956\u9748\u300C\u963F\u7ACB\u7956\u300D\u3002",junior:"\u5E73\u57D4\u539F\u4F4F\u6C11\u65CF\u7FA4\uFF0C\u50B3\u7D71\u5206\u5E03\u65BC\u5609\u5357\u5E73\u539F\u81F3\u6046\u6625\u534A\u5CF6\uFF1B17 \u4E16\u7D00\u6700\u65E9\u8207\u8377\u862D\u4EBA\u63A5\u89F8\uFF08\u65B0\u6E2F\u6587\u66F8\u4EE5\u7F85\u99AC\u5B57\u66F8\u5BEB\u897F\u62C9\u96C5\u8A9E\uFF09\uFF0C\u5F8C\u56E0\u6F22\u4EBA\u79FB\u58BE\u8207\u540C\u5316\uFF0C\u65CF\u4EBA\u904D\u5E03\u81FA\u5357\u3001\u9AD8\u96C4\u3001\u5C4F\u6771\u3001\u82B1\u84EE\u3001\u81FA\u6771\u3002\u4FE1\u4EF0\u7956\u9748\u300C\u963F\u7ACB\u7956\u300D\uFF0C\u4EE5\u300C\u516C\u5EE8\u300D\u70BA\u796D\u7940\u5834\u6240\uFF0C\u5409\u8C9D\u800D\u591C\u796D\u8207\u300C\u727D\u66F2\u300D\u70BA\u4EE3\u8868\u3002\u4F9D\u61B2\u6CD5\u6CD5\u5EAD 111 \u5E74\u61B2\u5224\u5B57\u7B2C 17 \u865F\u5224\u6C7A\u8207\u300A\u5E73\u57D4\u539F\u4F4F\u6C11\u65CF\u7FA4\u8EAB\u5206\u6CD5\u300B\uFF0C\u884C\u653F\u9662\u65BC 2026 \u5E74 7 \u6708 30 \u65E5\u6838\u5B9A\u70BA\u7B2C 17 \u65CF\uFF0C\u662F\u7B2C\u4E00\u500B\u5B8C\u6210\u6838\u5B9A\u7684\u5E73\u57D4\u65CF\u7FA4\u3002"}];var R0=121,Ih=23.7,Fs=111.32*Math.cos(Ih*Math.PI/180),lo=110.6,Yt=n=>(n-R0)*Fs,qt=n=>-(n-Ih)*lo,St=n=>document.querySelector(n);function mn(n,t){let e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Cl(n,t){let e=Math.floor(n),i=Math.floor(t),s=n-e,r=t-i,o=s*s*(3-2*s),a=r*r*(3-2*r),l=mn(e,i),c=mn(e+1,i),h=mn(e,i+1),d=mn(e+1,i+1);return(l+(c-l)*o+(h-l)*a+(l-c-h+d)*o*a)*2-1}function Ls(n,t){let e=0,i=.5,s=1;for(let r=0;r<5;r++)e+=i*Cl(n*s,t*s),s*=2.03,i*=.5;return e}function P0(n,t){let e=0,i=.5,s=1;for(let r=0;r<4;r++)e+=i*(1-Math.abs(Cl(n*s+9,t*s+3))),s*=2.1,i*=.5;return e}var ro=(n,t,e)=>{let i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)};function El(n,t,e){let i=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){let[o,a]=e[s],[l,c]=e[r];a>t!=c>t&&n<(l-o)*(t-a)/(c-a)+o&&(i=!i)}return i}function I0(n,t,e,i,s,r){let o=s-e,a=r-i,l=o*o+a*a,c=l?((n-e)*o+(t-i)*a)/l:0;c=Math.max(0,Math.min(1,c));let h=e+c*o-n,d=i+c*a-t;return[Math.sqrt(h*h+d*d),c]}function Sl(n,t,e){let i=1e9,s=0;for(let r=0;r<e.length-1;r++){let[o,a]=I0(n,t,e[r][0],e[r][1],e[r+1][0],e[r+1][1]);o<i&&(i=o,s=e[r][2]+(e[r+1][2]-e[r][2])*a)}return[i,s]}function Lh(n,t,e){let i=new Float32Array(t*e),s=1e6,r=1.4142;for(let o=0;o<i.length;o++)i[o]=n[o]?s:0;for(let o=0;o<e;o++)for(let a=0;a<t;a++){let l=o*t+a;if(!i[l])continue;let c=i[l];a>0?c=Math.min(c,i[l-1]+1):c=Math.min(c,1),o>0?(c=Math.min(c,i[l-t]+1),a>0&&(c=Math.min(c,i[l-t-1]+r)),a<t-1&&(c=Math.min(c,i[l-t+1]+r))):c=Math.min(c,1),i[l]=c}for(let o=e-1;o>=0;o--)for(let a=t-1;a>=0;a--){let l=o*t+a;if(!i[l])continue;let c=i[l];a<t-1?c=Math.min(c,i[l+1]+1):c=Math.min(c,1),o<e-1?(c=Math.min(c,i[l+t]+1),a<t-1&&(c=Math.min(c,i[l+t+1]+r)),a>0&&(c=Math.min(c,i[l+t-1]+r))):c=Math.min(c,1),i[l]=c}return i}function L0(n,t,e,i){if(i<1)return n;let s=Float32Array.from(n),r=new Float32Array(n.length);for(let o=0;o<2;o++){for(let a=0;a<e;a++)for(let l=0;l<t;l++){let c=0,h=0;for(let d=-i;d<=i;d++){let f=l+d;f>=0&&f<t&&(c+=s[a*t+f],h++)}r[a*t+l]=c/h}for(let a=0;a<e;a++)for(let l=0;l<t;l++){let c=0,h=0;for(let d=-i;d<=i;d++){let f=a+d;f>=0&&f<e&&(c+=r[f*t+l],h++)}s[a*t+l]=c/h}}return s}var Qn={sea:0,plain:1,hill:2,tableland:3,basin:4,mountain:5},D0=["sea","plain","hill","tableland","basin","mountain"];function Dh(n,t){return t==="tableland"?Qn.tableland:t==="basin"?Qn.basin:t==="plain"||n<100?Qn.plain:n<1e3?Qn.hill:Qn.mountain}function U0(n,t){let e=Rs[0].pts,i=e[0][0];for(let r=0;r<e.length-1;r++){let o=e[r],a=e[r+1];if(t<=o[1]&&t>=a[1]){i=o[0]+(a[0]-o[0])*(o[1]-t)/(o[1]-a[1]);break}}t<21.95&&(i=121);let s=24.7-(n-120.88)*.81;return t>s&&!(t<24.5&&n>i)||n>i&&t>=24.35?"N":n>i&&t>22.4?"E":t>23.56-(n-120.15)*.15?"C":"S"}var ti=window.matchMedia("(pointer: coarse)").matches||window.innerWidth<=900,as=!1;try{as=localStorage.getItem("tw3d_saver")==="1"}catch{}var zt={lon0:119.98,lon1:122.06,lat0:21.86,lat1:25.34,step:as?1.4:ti?1.1:.8};zt.nx=Math.round((zt.lon1-zt.lon0)*Fs/zt.step)+1;zt.nz=Math.round((zt.lat1-zt.lat0)*lo/zt.step)+1;function N0(){let{nx:n,nz:t}=zt,e=n*t,i=new Float32Array(e),s=new Float32Array(e),r=new Uint8Array(e),o=vl.main;for(let g=0;g<t;g++)for(let _=0;_<n;_++){let p=g*n+_,u=zt.lon0+(zt.lon1-zt.lon0)*_/(n-1),E=zt.lat1-(zt.lat1-zt.lat0)*g/(t-1);i[p]=u,s[p]=E,r[p]=El(u,E,o)?1:0}let a=Lh(r,n,t),l=Rs.map(g=>({w:g.w,pts:g.pts.map(_=>[Yt(_[0]),qt(_[1]),_[2]])})),c=wh.map(g=>({w:g.w,pts:g.pts.map(_=>[Yt(_[0]),qt(_[1]),_[2]])})),h=new Float32Array(e);for(let g=0;g<e;g++){if(!r[g]){h[g]=-60;continue}let _=Yt(i[g]),p=qt(s[g]),u=0;for(let T of l){let[U,S]=Sl(_,p,T.pts),v=U/T.w;v>4||(u=Math.max(u,S*(.78*Math.exp(-v*v)+.22*Math.exp(-v*v/5))))}for(let T of c){let[U,S]=Sl(_,p,T.pts),v=U/T.w;v>4||(u=Math.max(u,S*Math.exp(-v*v)))}for(let T of no){let U=Math.hypot(_-Yt(T.lon),p-qt(T.lat))/T.r;u=Math.max(u,T.h*Math.exp(-U*U*1.6))}let E=u,w=Ls(_*.06,p*.06),M=P0(_*.09,p*.09),N=ro(150,2500,u);u=u*(1+.16*w)+u*N*.18*(M-.5)+25*w,u=Math.min(u,E*1.02+20,3952);let A=a[g]*zt.step;u*=ro(0,3.2,A),u=Math.max(u,Math.min(30,1.5+A*1.2)),h[g]=u}let d=new Int8Array(e).fill(-1);Ps.forEach((g,_)=>{let p=new Float32Array(e),u=g.ell,E=g.poly,w=g.line&&g.line.map(M=>[Yt(M[0]),qt(M[1]),0]);for(let M=0;M<e;M++){if(!r[M])continue;let N=i[M],A=s[M],T=!1;if(E)T=El(N,A,E);else if(u){let U=(Yt(N)-Yt(u[0]))/u[2],S=(qt(A)-qt(u[1]))/u[3];T=U*U+S*S<=1}else w&&(T=Sl(Yt(N),qt(A),w)[0]<=g.lw);T&&(p[M]=1,d[M]=_)}p=L0(p,n,t,g.blur);for(let M=0;M<e;M++){if(!r[M]||p[M]<=0)continue;let N=Yt(i[M]),A=qt(s[M]),T=g.h;g.type==="plain"?T=Math.min(h[M],g.h*(.35+.65*Math.min(1,a[M]*zt.step/18))+6*Ls(N*.2,A*.2)):g.type==="tableland"?T=g.h+18*Ls(N*.3,A*.3):T=g.h+8*Ls(N*.3,A*.3),h[M]=h[M]*(1-p[M])+T*p[M]}});let f=new Uint8Array(e),m=new Array(e);for(let g=0;g<e;g++){if(!r[g]){f[g]=0;continue}f[g]=Dh(h[g],d[g]>=0?Ps[d[g]].type:null),m[g]=U0(i[g],s[g])}return{nx:n,nz:t,lonA:i,latA:s,mask:r,elev:h,cls:f,reg:m,zoneOf:d}}function Uh(n,t,e,i,s){let r=n*t,o=new Float32Array(r*3);for(let h=0;h<t;h++)for(let d=0;d<n;d++){let f=h*n+d;o[f*3]=e(d),o[f*3+1]=s[f]/1e3,o[f*3+2]=i(h)}let a=new Uint32Array((n-1)*(t-1)*6),l=0;for(let h=0;h<t-1;h++)for(let d=0;d<n-1;d++){let f=h*n+d,m=f+1,g=f+n,_=g+1;a[l++]=f,a[l++]=g,a[l++]=m,a[l++]=m,a[l++]=g,a[l++]=_}let c=new Fe;return c.setAttribute("position",new Se(o,3)),c.setAttribute("color",new Se(new Float32Array(r*3),3)),c.setIndex(new Se(a,1)),c.computeVertexNormals(),c}function F0(n,t,e,i,s){let r=[];for(let o=0;o<28;o++){let a=o/28*Math.PI*2,l=1+.18*Cl(Math.cos(a)*2+s,Math.sin(a)*2+s);r.push([n+Math.cos(a)*e*l/Fs,t+Math.sin(a)*i*l/lo])}return r}function O0(n){let t=n.coast?n.coast.map(i=>vl[i]):n.ell.map((i,s)=>F0(i[0],i[1],i[2],i[3],s*7+n.h)),e=[];return t.forEach((i,s)=>{let r=[1e9,1e9],o=[-1e9,-1e9];i.forEach(([S,v])=>{r[0]=Math.min(r[0],S),r[1]=Math.min(r[1],v),o[0]=Math.max(o[0],S),o[1]=Math.max(o[1],v)});let a=.01;r[0]-=a,r[1]-=a,o[0]+=a,o[1]+=a;let l=(o[0]-r[0])*Fs,c=(o[1]-r[1])*lo,h=Math.max(.08,Math.max(l,c)/110),d=Math.round(l/h)+1,f=Math.round(c/h)+1,m=d*f,g=new Uint8Array(m),_=new Float32Array(m),p=new Float32Array(m);for(let S=0;S<f;S++)for(let v=0;v<d;v++){let C=S*d+v,H=r[0]+(o[0]-r[0])*v/(d-1),z=o[1]-(o[1]-r[1])*S/(f-1);_[C]=H,p[C]=z,g[C]=El(H,z,i)?1:0}let u=Lh(g,d,f),E=1;for(let S=0;S<m;S++)E=Math.max(E,u[S]);let w=s===0?1:.7,M=new Float32Array(m),N=new Uint8Array(m);for(let S=0;S<m;S++){if(!g[S]){M[S]=-40;continue}let v=u[S]/E,C=Ls(_[S]*300,p[S]*300),H;n.profile==="cone"?H=Math.pow(v,.85)*(1+.2*C):n.profile==="hill"?H=Math.pow(v,.7)*(.7+.45*(C+.5)):n.profile==="mesa"?H=ro(0,.18,v)*(.85+.15*C):H=ro(0,.3,v),M[S]=Math.max(2,n.h*w*Math.max(0,H)),N[S]=n.profile==="mesa"&&n.id==="penghu"?Qn.tableland:Dh(M[S],null)}let A=Yt(r[0]),T=qt(o[1]),U=Uh(d,f,S=>A+S*h*(l/((d-1)*h)),S=>T+S*h*(c/((f-1)*h)),M);e.push({g:U,N:m,elev:M,cls:N,mask:g,region:n.region,isl:n})}),e}var Fn=n=>new Rt(n),B0={1:Fn(Ae.plain.color),2:Fn(Ae.hill.color),3:Fn(Ae.tableland.color),4:Fn(Ae.basin.color),5:Fn(Ae.mountain.color)},pn=[[0,"#3c9a54"],[100,"#8cc56a"],[300,"#d7d97f"],[700,"#e3b866"],[1e3,"#d4924f"],[2e3,"#a5643b"],[3e3,"#7a4630"],[3600,"#eae6e1"],[4e3,"#ffffff"]].map(([n,t])=>[n,Fn(t)]);function z0(n,t){for(let e=0;e<pn.length-1;e++)if(n<=pn[e+1][0]){let i=Math.max(0,(n-pn[e][0])/(pn[e+1][0]-pn[e][0]));return t.copy(pn[e][1]).lerp(pn[e+1][1],i)}return t.copy(pn[pn.length-1][1])}var k0=Fn("#1d4f7a"),et={mode:"terrain",color:"landform",level:"elem",exag:6,focus:null,flood:0,raining:!1,rising:!1,month:7,city:"kaohsiung"},ss=St("#scene"),gn=new Pr({antialias:!as,powerPreference:"low-power"});gn.setPixelRatio(Math.min(as?1:ti?1.5:2,window.devicePixelRatio));ss.appendChild(gn.domElement);var co=new to;co.domElement.className="labels";ss.appendChild(co.domElement);var Bn=new Lr;Bn.background=Fn("#bfe3f7");Bn.fog=new Ir("#bfe3f7",700,1700);var Ce=new Ie(42,1,1,5e3),de=new Kr(Ce,gn.domElement);gn.domElement.style.touchAction="none";de.touches={ONE:fn.ROTATE,TWO:fn.DOLLY_PAN};de.screenSpacePanning=!1;de.zoomSpeed=1.2;["gesturestart","gesturechange","gestureend"].forEach(n=>document.addEventListener(n,t=>t.preventDefault(),{passive:!1}));document.addEventListener("touchmove",n=>{n.touches.length>1&&n.preventDefault()},{passive:!1});function Nh(n){ve=null;let t=Ce.position.clone().sub(de.target),e=Zr.clamp(t.length()*n,de.minDistance,de.maxDistance);Ce.position.copy(de.target).add(t.setLength(e))}St("#zoomIn").onclick=()=>Nh(.7);St("#zoomOut").onclick=()=>Nh(1/.7);de.rotateSpeed=.6;de.addEventListener("start",()=>{ve=null});var De={x:0,y:0,t:0,n:0};gn.domElement.addEventListener("pointerdown",n=>{De.n++,De.n===1?(De.x=n.clientX,De.y=n.clientY,De.t=performance.now()):De.t=0});gn.domElement.addEventListener("pointerup",n=>{if(De.n=Math.max(0,De.n-1),!De.t||performance.now()-De.t>450||Math.hypot(n.clientX-De.x,n.clientY-De.y)>8)return;De.t=0;let t=["tribe","island","sea","lf","peak","city","spot"];for(let e of t)for(let i of on[e]){if(!i.onClick||!i.o.visible||i.el.style.display==="none"||i.el.classList.contains("hid"))continue;let s=i.el.getBoundingClientRect();if(n.clientX>=s.left-4&&n.clientX<=s.right+4&&n.clientY>=s.top-4&&n.clientY<=s.bottom+4){i.onClick();return}}});gn.domElement.addEventListener("pointercancel",()=>{De.n=0,De.t=0});de.enableDamping=!0;de.maxPolarAngle=Math.PI*.49;de.minDistance=8;de.maxDistance=1400;Bn.add(new Hr("#ffffff","#4b6b3a",1.1));var Fh=new Gr("#fff6e0",2.2);Fh.position.set(-300,400,200);Bn.add(Fh);var an=new un;an.scale.y=et.exag;Bn.add(an);var Rl=new ue(new _i(1600,1400),new Dn({color:"#4a9fd8"}));Rl.rotation.x=-Math.PI/2;Rl.position.set(-150,0,-20);an.add(Rl);var Oh=new Dn({vertexColors:!0}),Bt=N0(),wl=Uh(Bt.nx,Bt.nz,n=>Yt(zt.lon0)+n*(Yt(zt.lon1)-Yt(zt.lon0))/(Bt.nx-1),n=>qt(zt.lat1)+n*(qt(zt.lat0)-qt(zt.lat1))/(Bt.nz-1),Bt.elev);an.add(new ue(wl,Oh));var Bh=[];Nn.forEach((n,t)=>n.zones.forEach(([e,i,s])=>Bh.push([Yt(e),qt(i),s,t])));function V0(n,t,e){let i=-1,s=1e9;for(let[r,o,a,l]of Bh){let c=Math.hypot(n-r,t-o)/a;c<s&&(s=c,i=l)}return s<1||s<2.4&&e>500||s<1.9&&Nn[i].plains?i:-1}Bt.tribe=new Int8Array(Bt.elev.length).fill(-1);for(let n=0;n<Bt.elev.length;n++)Bt.mask[n]&&(Bt.tribe[n]=V0(Yt(Bt.lonA[n]),qt(Bt.latA[n]),Bt.elev[n]));var zh=[];Jn.forEach(n=>O0(n).forEach(t=>{t.tribe=Nn.findIndex(e=>e.island===n.id),zh.push(t),an.add(new ue(t.g,Oh))}));Jn.filter(n=>n.atoll).forEach(n=>{let[t,e,i]=n.atoll,s=new ue(new Or(i-1.3,i,64),new gi({color:"#8ff0e6",transparent:!0,opacity:.85,side:Qe}));s.rotation.x=-Math.PI/2,s.position.set(Yt(t),.004,qt(e)),an.add(s);let r=new ue(new Fr(i-1.3,64),new gi({color:"#5ec8e0",transparent:!0,opacity:.6}));r.rotation.x=-Math.PI/2,r.position.set(Yt(t),.003,qt(e)),an.add(r)});var rs=new ue(new _i(1600,1400),new zr({color:"#2f7fe0",transparent:!0,opacity:.55,shininess:80,depthWrite:!1}));rs.rotation.x=-Math.PI/2;rs.position.set(-150,0,-20);rs.visible=!1;an.add(rs);var Kn=new Rt,bl=new Rt,H0={plain:1,hill:2,tableland:3,basin:4,mountain:5},G0=Fn("#e9e4d4");function Ch(n,t,e,i,s=-1){if(!t)return i.copy(k0);if(et.color==="tribe")return s>=0&&(!et.tribeFocus||Nn[s].id===et.tribeFocus)?i.set(Nn[s].c):i.copy(G0),i.multiplyScalar(.82+.3*Math.min(1,n/3200)),i;if(et.color==="height")z0(n,i);else if(et.color==="region")i.set(Is[e].color),i.lerp(bl.set("#ffffff"),Math.min(.35,n/9e3)),i.multiplyScalar(.85+.25*Math.min(1,n/3e3));else{i.copy(B0[t]);let r=t===5?Math.min(1,(n-1e3)/2900):0;i.lerp(bl.set(r>.9?"#ffffff":"#5a3a28"),r*.45)}return et.focus&&H0[et.focus]!==t&&i.lerp(bl.set("#cfcfcf"),.78),i}function Us(){let n=wl.attributes.color.array;for(let t=0;t<Bt.elev.length;t++)Ch(Bt.elev[t],Bt.cls[t],Bt.reg[t],Kn,Bt.tribe[t]),n[t*3]=Kn.r,n[t*3+1]=Kn.g,n[t*3+2]=Kn.b;wl.attributes.color.needsUpdate=!0,zh.forEach(t=>{let e=t.g.attributes.color.array;for(let i=0;i<t.N;i++)Ch(t.elev[i],t.mask[i]?t.cls[i]:0,t.region,Kn,t.tribe),e[i*3]=Kn.r,e[i*3+1]=Kn.g,e[i*3+2]=Kn.b;t.g.attributes.color.needsUpdate=!0})}function Si(n,t){let e=Math.round((n-zt.lon0)/(zt.lon1-zt.lon0)*(Bt.nx-1)),i=Math.round((zt.lat1-t)/(zt.lat1-zt.lat0)*(Bt.nz-1));if(e<0||i<0||e>=Bt.nx||i>=Bt.nz)return null;let s=i*Bt.nx+e;return Bt.mask[s]?Bt.elev[s]:null}function kh(n,t){let e=null,i=1e9;return Jn.forEach(s=>{let r=Math.hypot(Yt(s.lon)-Yt(n),qt(s.lat)-qt(t));r<i&&(i=r,e=s)}),i<30?e:null}function Vh(n,t){let e=Si(n,t);if(e!=null)return e;let i=kh(n,t);return i?Math.min(i.h,i.h*.5+10):5}var on={lf:[],peak:[],spot:[],island:[],ruler:[],city:[],tribe:[],sea:[]};function Ve(n,t,e,i,s,r,o){let a=document.createElement("div");a.className="lb "+r,a.innerHTML=t,o&&a.classList.add("clickable");let l=new Qr(a);return l.position.set(Yt(e),s/1e3,qt(i)),an.add(l),on[n].push({o:l,el:a,hM:s,onClick:o}),{o:l,el:a}}var W0={plain:"plain",basin:"basin",tableland:"tableland"};Rs.forEach(n=>Ve("lf",n.name,n.label[0],n.label[1],(Si(...n.label)||2e3)+400,"lf lf-mountain",()=>Os("mountain",n.name)));no.forEach(n=>Ve("lf",n.name,n.lon+.03,n.lat+.03,n.h+300,"lf lf-mountain",()=>Os("mountain",n.name)));yl.forEach(n=>Ve("lf",n.name,n.lon,n.lat,(Si(n.lon,n.lat)||300)+300,"lf lf-hill",()=>Os("hill",n.name)));Ps.forEach(n=>Ve("lf",n.name,n.label[0],n.label[1],(Si(...n.label)||n.h)+250,"lf lf-"+W0[n.type],()=>Os(n.type,n.name)));Th.forEach(n=>Ve("peak",`\u25B2 ${n.name}<small>${n.h.toLocaleString()} \u516C\u5C3A</small>`,n.lon,n.lat,(Si(n.lon,n.lat)||n.h)+120,"peak",()=>K0(n)));Jn.forEach(n=>Ve("island",`\u{1F3DD}\uFE0F ${n.name}`,n.lon,n.lat,n.h+400,"island",()=>$h(n)));Un.forEach(n=>{let t=Vh(n.lon,n.lat);n.h=t,n.lbl=Ve("spot",`<span class="pin">${n.i}</span><span class="nm">${n.n}</span>`,n.lon,n.lat,t+60,"spot",()=>Ll(n))});Nn.forEach(n=>{n.lbl=Ve("tribe",`<span class="tdot" style="background:${n.c}"></span><b>${n.n}</b><small>${n.v}</small>`,n.vlon,n.vlat,Vh(n.vlon,n.vlat)+80,"tribe",()=>qh(n))});is.forEach(n=>Ve("city",`\u2614 ${n.name}`,n.lon,n.lat,(Si(n.lon,n.lat)||30)+200,"city",()=>{et.city=n.id,St("#city").value=n.id,ho()}));var X0=[{n:"\u592A\u5E73\u6D0B",lon:122.55,lat:23,d:"\u81FA\u7063\u6771\u908A\u662F\u592A\u5E73\u6D0B\uFF0C\u662F\u4E16\u754C\u4E0A\u6700\u5927\u7684\u6D77\u6D0B\u3002\u6771\u90E8\u6D77\u5CB8\u96E2\u6DF1\u6D77\u5F88\u8FD1\uFF0C\u6D77\u5E95\u5F88\u5FEB\u5C31\u8B8A\u5F97\u5F88\u6DF1\u3002",j:"\u81FA\u7063\u6771\u5074\u70BA\u592A\u5E73\u6D0B\uFF0C\u5927\u9678\u68DA\u72F9\u7A84\u3001\u6D77\u5E95\u9661\u964D\uFF0C\u8FD1\u5CB8\u5373\u70BA\u6DF1\u6D77\uFF1B\u9ED1\u6F6E\u6CBF\u6771\u90E8\u6D77\u57DF\u5317\u4E0A\uFF0C\u5E36\u4F86\u8C50\u5BCC\u7684\u9060\u6D0B\u9B5A\u985E\u3002"},{n:"\u5DF4\u58EB\u6D77\u5CFD",lon:120.9,lat:21.35,d:"\u81FA\u7063\u5357\u908A\u3001\u5728\u81FA\u7063\u548C\u83F2\u5F8B\u8CD3\u4E4B\u9593\u7684\u6D77\u5CFD\uFF0C\u662F\u8239\u96BB\u5F80\u4F86\u7684\u91CD\u8981\u901A\u9053\u3002",j:"\u4F4D\u65BC\u81FA\u7063\u5357\u7AEF\u8207\u83F2\u5F8B\u8CD3\u4E4B\u9593\uFF0C\u9023\u63A5\u592A\u5E73\u6D0B\u8207\u5357\u6D77\uFF0C\u662F\u91CD\u8981\u7684\u570B\u969B\u822A\u9053\uFF0C\u4E5F\u662F\u98B1\u98A8\u5E38\u7D93\u904E\u7684\u6D77\u57DF\u3002"},{n:"\u81FA\u7063\u6D77\u5CFD",lon:119.75,lat:24.15,d:"\u81FA\u7063\u897F\u908A\u3001\u5728\u81FA\u7063\u548C\u4E2D\u570B\u5927\u9678\u4E4B\u9593\u7684\u6D77\u3002\u6D77\u6C34\u6BD4\u8F03\u6DFA\uFF0C\u6F8E\u6E56\u7FA4\u5CF6\u5C31\u5728\u9019\u88E1\u3002",j:"\u4ECB\u65BC\u81FA\u7063\u8207\u4E2D\u570B\u5927\u9678\u4E4B\u9593\uFF0C\u5C6C\u65BC\u6DFA\u6D77\u7684\u5927\u9678\u68DA\uFF0C\u5E73\u5747\u6C34\u6DF1\u4E0D\u5230 100 \u516C\u5C3A\uFF1B\u6F8E\u6E56\u7FA4\u5CF6\u4F4D\u65BC\u6D77\u5CFD\u4E2D\u3002"},{n:"\u6771\u6D77",lon:121.6,lat:25.95,d:"\u81FA\u7063\u5317\u908A\u7684\u6D77\uFF0C\u5F80\u5317\u4E00\u76F4\u5EF6\u4F38\u5230\u65E5\u672C\u548C\u4E2D\u570B\u5927\u9678\u4E4B\u9593\u3002",j:"\u4F4D\u65BC\u81FA\u7063\u5317\u65B9\u3001\u4E9E\u6D32\u5927\u9678\u6771\u5074\u7684\u908A\u7DE3\u6D77\uFF0C\u5927\u90E8\u5206\u5C6C\u65BC\u5927\u9678\u68DA\u3002"}];X0.forEach(n=>Ve("sea",`\u{1F30A} ${n.n}`,n.lon,n.lat,0,"sea",()=>cs(`<div class="tag-lf" style="background:#5aa9e6;color:#fff">\u6D77\u57DF</div><h3>\u{1F30A} ${n.n}</h3><p>${et.level==="elem"?n.d:n.j}</p>`)));var Ds=new un;an.add(Ds);(function(){let t=Yt(122.32),e=qt(23.55),i=new ue(new Ln(2.4,4,2.4),new Dn({color:"#fff7d6"}));i.position.set(t,2,e),Ds.add(i);for(let a=0;a<=4e3;a+=500){let l=a%1e3===0,c=new ue(new Ln(l?6:3.5,.012,1.2),new Dn({color:l?"#d33":"#333"}));c.position.set(t+(l?3:1.8),a/1e3,e),Ds.add(c),l&&Ve("ruler",a===0?"\u6D77\u5E73\u9762 0 \u516C\u5C3A":`${a.toLocaleString()} \u516C\u5C3A<small>\uFF1D ${a/1e3} \u516C\u91CC</small>`,122.32+.09,23.55,a,"ruler ruler-h")}let s=Yt(119.75),r=qt(22.2);[[0,25,"#222"],[25,50,"#fff"],[50,100,"#222"]].forEach(([a,l,c])=>{let h=new ue(new Ln(l-a,.06,3),new Dn({color:c}));h.position.set(s+(a+l)/2,.03,r),Ds.add(h)}),[0,25,50,100].forEach(a=>Ve("ruler",a===100?"100 \u516C\u91CC":`${a}`,119.75+a/Fs,22.2-.05,0,"ruler ruler-km")),Ve("ruler","\u2B06 \u5317",119.75,22.55,0,"ruler ruler-n")})();var Ns=as?800:ti?2500:5e3,Pl=new Fe,Le=new Float32Array(Ns*6);Pl.setAttribute("position",new Se(Le,3));var Mi=new Nr(Pl,new Ts({color:"#ffffff",transparent:!0,opacity:.9}));Mi.frustumCulled=!1;Mi.visible=!1;Bn.add(Mi);var os=new un;Bn.add(os);os.visible=!1;var Y0=new Dn({color:"#f4f6f8",transparent:!0,opacity:.6,depthWrite:!1}),oo=[],Hh=1,Gh=Ns;function q0(){oo=io[et.month].zones.map(([i,s,r,o])=>[Yt(i),qt(o),Yt(r),qt(s)]);let t=is.find(i=>i.id===et.city),e=t.mm[et.month];Gh=Math.round(Ns*Math.min(1,.12+e/450)),Hh=.8+Math.min(1.5,e/300);for(let i=0;i<Ns;i++)Wh(i,!0);os.clear(),oo.forEach(([i,s,r,o],a)=>{let l=Math.max(4,Math.round((r-i)*(o-s)/900));for(let c=0;c<l;c++){let h=new ue(new Br(1,14,10),Y0);h.scale.set(6+mn(c,a)*6,1.6+mn(a,c)*1.2,5+mn(c+3,a)*5),h.position.set(i+mn(c,a+5)*(r-i),42+mn(c+1,a)*6,s+mn(c+2,a)*(o-s)),os.add(h)}})}function Wh(n,t){let e=oo[n%oo.length]||[0,0,1,1],i=e[0]+Math.random()*(e[2]-e[0]),s=e[1]+Math.random()*(e[3]-e[1]),r=t?Math.random()*42:42,o=n*6;Le[o]=i,Le[o+1]=r,Le[o+2]=s,Le[o+3]=i+.3,Le[o+4]=r-2.6,Le[o+5]=s}function $0(n){let t=Math.max(0,et.flood/1e3*et.exag);for(let e=0;e<Ns;e++){let i=e*6;if(e>=Gh){Le[i+1]=Le[i+4]=-999;continue}let s=(40+e%7*3)*Hh*n;Le[i+1]-=s,Le[i+4]-=s,Le[i]+=s*.08,Le[i+3]+=s*.08,(Le[i+4]<t||Le[i+1]<-5)&&Wh(e,!1)}Pl.attributes.position.needsUpdate=!0}var so=[0,0,0,0,0,0];for(let n=0;n<Bt.cls.length;n++)so[Bt.cls[n]]++;function ls(){let n=et.mode==="rain"?et.flood:0;rs.visible=n>0,rs.position.y=n/1e3;let t=[0,0,0,0,0,0];for(let o=0;o<Bt.cls.length;o++)Bt.cls[o]&&Bt.elev[o]<n&&t[Bt.cls[o]]++;let e=0,i=0;for(let o=1;o<6;o++)e+=so[o],i+=t[o];St("#floodVal").innerHTML=`${Math.round(et.flood).toLocaleString()} <small>\u516C\u5C3A</small> \uFF1D ${(et.flood/1e3).toFixed(et.flood<1e3?2:1)} <small>\u516C\u91CC</small>`,St("#floodSlider").value=et.flood;let s=["plain","basin","tableland","hill","mountain"].map(o=>{let a=Qn[o],l=so[a]?Math.round(t[a]/so[a]*100):0;return`<div class="fl-row"><span class="dot" style="background:${Ae[o].color}"></span>${Ae[o].name}<div class="bar"><i style="width:${l}%"></i></div><b>${l}%</b></div>`}).join(""),r=Un.filter(o=>o.h<n);St("#floodStats").innerHTML=s+`<p class="fl-sum">\u81FA\u7063\u672C\u5CF6\u6709 <b>${Math.round(i/e*100)}%</b> \u7684\u571F\u5730\u5728\u6C34\u9762\u4E0B\u3002</p>`+(r.length?`<p class="fl-sum">\u88AB\u6DF9\u5230\u7684\u666F\u9EDE\uFF08${r.length}\uFF09\uFF1A${r.slice(0,14).map(o=>o.n).join("\u3001")}${r.length>14?"\u2026":""}</p>`:""),Un.forEach(o=>o.lbl.el.classList.toggle("flooded",o.h<n)),St("#floodHint").textContent=Z0(n)}function Z0(n){return n<=0?"\u6309\u300C\u958B\u59CB\u4E0B\u96E8\u300D\u6216\u62D6\u62C9\u6C34\u4F4D\uFF0C\u770B\u770B\u6C34\u6703\u6DF9\u5230\u54EA\u88E1\u3002":n<100?"\u5E73\u539F\u6700\u5148\u88AB\u6DF9\uFF1A\u5E73\u539F\u9AD8\u5EA6\u5927\u591A\u4E0D\u5230 100 \u516C\u5C3A\u3002":n<500?"\u5E73\u539F\u3001\u76C6\u5730\u90FD\u6DF9\u4E86\uFF0C\u53F0\u5730\u548C\u4E18\u9675\u9084\u9732\u5728\u6C34\u9762\u4E0A\u3002":n<1e3?"\u53EA\u5269\u4E18\u9675\u7684\u9AD8\u8655\u548C\u5C71\u5730\u9732\u51FA\u6C34\u9762\u3002\u4E18\u9675\u4E0D\u5230 1,000 \u516C\u5C3A\u3002":n<3e3?"\u8D85\u904E 1,000 \u516C\u5C3A\uFF0C\u53EA\u5269\u4E0B\u5C71\u5730\uFF01\u81FA\u7063\u8B8A\u6210\u4E00\u4E32\u7D30\u9577\u7684\u5CF6\u3002":n<3952?"\u53EA\u5269\u5E7E\u5EA7\u9AD8\u5C71\u7684\u5C71\u9802\uFF0C\u50CF\u5C0F\u5CF6\u4E00\u6A23\u3002":"\u9023\u7389\u5C71\uFF083,952 \u516C\u5C3A\uFF09\u90FD\u6DF9\u6C92\u4E86\uFF01"}function ho(){let n=is.find(c=>c.id===et.city),t=550,e=340,i=ti?210:170,s=e/12,r=n.mm.map((c,h)=>{let d=c/t*(i-30),f=h*s,m=Ml.find(g=>g.months.includes(h));return`<rect x="${f}" y="0" width="${s}" height="${i-18}" fill="${m.color}" opacity="${h===et.month?.55:.18}"/><rect class="bar-m" data-m="${h}" x="${f+3}" y="${i-18-d}" width="${s-6}" height="${d}" rx="3" fill="${h===et.month?"#1565c0":"#4a90d9"}"/><text x="${f+s/2}" y="${i-22-d}" font-size="${ti?13:9}" text-anchor="middle" fill="#234">${Math.round(c)}</text><text x="${f+s/2}" y="${i-5}" font-size="${ti?14:10}" text-anchor="middle" fill="#345">${ti?h+1:h+1+"\u6708"}</text>`}).join(""),o=Ah.slice(0,3).map(c=>{let h=i-18-c.mm/t*(i-30);return`<line x1="0" x2="${e}" y1="${h}" y2="${h}" stroke="#c33" stroke-dasharray="3 3" stroke-width=".7"/><text x="${e-2}" y="${h-2}" font-size="${ti?12:8}" text-anchor="end" fill="#c33">${c.mm}mm</text>`}).join("");St("#rainChart").innerHTML=`<svg viewBox="0 0 ${e} ${i}" width="100%">${r}${o}</svg>`,St("#rainChart").querySelectorAll(".bar-m").forEach(c=>c.addEventListener("click",()=>Xh(+c.dataset.m)));let a=n.mm.reduce((c,h)=>c+h,0);St("#seasonBox").innerHTML=Ml.map(c=>{let h=c.months.reduce((d,f)=>d+n.mm[f],0);return`<div class="sea" style="background:${c.color}"><b>${c.name}</b><span>${c.months.map(d=>d+1).join("\u3001")}\u6708</span><em>${Math.round(h).toLocaleString()} mm</em><i>${Math.round(h/a*100)}%</i></div>`}).join(""),St("#rainTotal").innerHTML=`<b>${n.name}</b> \u4E00\u5E74\u7D04 <b>${Math.round(a).toLocaleString()}</b> \u6BEB\u7C73\uFF08mm\uFF09${n.src==="book"?'<span class="tag book">\u8AB2\u672C\u8CC7\u6599</span>':'<span class="tag cwa">\u88DC\u5145\uFF1A\u6C23\u8C61\u7F72\u5E73\u5747\u7D04\u7565\u503C</span>'}${n.note?`<br><small>${n.note}</small>`:""}`;let l=io[et.month];St("#monthInfo").innerHTML=`<h4>${et.month+1} \u6708\uFF1A${l.why}</h4><p>${l.elem}</p><p class="muted">\u96E8\u4E0B\u6700\u591A\u7684\u5730\u65B9\uFF1A<b>${l.where}</b>\uFF083D \u5730\u5716\u4E0A\u6709\u96F2\u7684\u5730\u65B9\uFF09</p>`,St("#monthSel").value=et.month,q0()}function Xh(n){et.month=n,ho()}var On=St("#info");function cs(n){On.innerHTML=`<button class="x" aria-label="\u95DC\u9589">\u2715</button>${n}`,On.classList.add("show"),On.scrollTop=0,On.querySelector(".x").onclick=()=>On.classList.remove("show"),Ul()&&(document.body.classList.add("panel-min"),Bs())}var Il=n=>et.level==="elem"?n.elem:n.junior;function j0(n){return n==="mountain"?Rs.map(t=>t.name).concat(no.map(t=>t.name)):n==="hill"?yl.map(t=>t.name):Ps.filter(t=>t.type===n).map(t=>t.name)}function Os(n,t){let e=Ae[n],i=Un.filter(s=>s.t===n);cs(`<div class="tag-lf" style="background:${e.color}">${e.icon} ${e.name}</div><h3>${t||e.name}</h3><p>${Il(e)}</p>
    <p><b>\u8AB2\u672C\u8209\u4F8B\uFF1A</b>${j0(n).join("\u3001")}</p>
    <p><b>\u9644\u8FD1\u666F\u9EDE\uFF1A</b></p><ul class="spot-list">${i.map(s=>`<li data-n="${s.n}">${s.i} ${s.n}</li>`).join("")}</ul>
    <button class="btn-sm" id="focusBtn">\u53EA\u770B\u300C${e.name}\u300D\u5728\u54EA\u88E1</button>`),On.querySelectorAll(".spot-list li").forEach(s=>s.onclick=()=>{let r=Un.find(o=>o.n===s.dataset.n);hs(r.lon,r.lat,60),Ll(r)}),St("#focusBtn").onclick=()=>jh(n)}function Rh(n,t,e){var r;if(Si(t,e)==null)return"";let s=Math.round((zt.lat1-e)/(zt.lat1-zt.lat0)*(Bt.nz-1))*Bt.nx+Math.round((t-zt.lon0)/(zt.lon1-zt.lon0)*(Bt.nx-1));return((r=Ae[D0[Bt.cls[s]]])==null?void 0:r.name)||""}var Yh={mountain:"\u5C71\u5730",hill:"\u4E18\u9675",tableland:"\u53F0\u5730",basin:"\u76C6\u5730",plain:"\u5E73\u539F",coast:"\u6D77\u5CB8",volcano:"\u706B\u5C71",island:"\u5916\u5CF6"};function J0(n){let t=eo[n];return t?`<figure class="ph"><img src="photos/${t.f}" alt="${n}" loading="lazy"><figcaption>\u{1F4F7} ${t.a||"\u4F5A\u540D"}\u30FB${t.l}\u30FB<a href="${t.u}" target="_blank" rel="noopener">Wikimedia Commons</a></figcaption></figure>`:""}function Ll(n){var t;cs(`${J0(n.n)}<div class="tag-lf" style="background:${((t=Ae[n.t])==null?void 0:t.color)||"#7fb3d5"}">${Yh[n.t]}</div><h3>${n.i} ${n.n}</h3><p>${n.d}</p>
    <p class="muted">\u9019\u88E1\u5927\u7D04\u6D77\u62D4 <b>${Math.round(n.h).toLocaleString()} \u516C\u5C3A</b>\uFF08${(n.h/1e3).toFixed(2)} \u516C\u91CC\uFF09${Rh(n.h,n.lon,n.lat)?`\uFF0C\u5730\u5716\u4E0A\u5C6C\u65BC\u300C${Rh(n.h,n.lon,n.lat)}\u300D`:""}\u3002</p>`)}function qh(n){et.tribeFocus=n.id,Us(),Tl(),cs(`<div class="tag-lf" style="background:${n.c};color:#fff">\u{1FAB6} \u539F\u4F4F\u6C11\u65CF</div><h3>${n.n}</h3>
    <p><b>\u4F4F\u5728\u54EA\u88E1\uFF1A</b>${n.where}</p><p>${Il(n)}</p>
    <p class="muted">\u5730\u5716\u4E0A\u7684\u4EE3\u8868\u90E8\u843D\uFF1A<b>${n.v}</b>\u3002\u5F69\u8272\u7BC4\u570D\u662F\u4E3B\u8981\u5206\u5E03\u5730\u5340\u7684\u793A\u610F\uFF0C\u4E0D\u662F\u7CBE\u78BA\u7684\u754C\u7DDA\uFF1B\u73FE\u5728\u4E5F\u6709\u5F88\u591A\u65CF\u4EBA\u4F4F\u5728\u57CE\u5E02\u88E1\u3002</p>
    <button class="btn-sm" id="tribeAll">\u770B\u5168\u90E8 17 \u65CF</button>`),St("#tribeAll").onclick=()=>{et.tribeFocus=null,Us(),Tl(),On.classList.remove("show")};let t=n.island?Jn.find(e=>e.id===n.island):null;hs(n.vlon,n.vlat,t?45:130)}function Tl(){St("#tribeList").innerHTML=Nn.map((n,t)=>`<button data-t="${n.id}" class="${et.tribeFocus===n.id?"on":""}"><span class="dot" style="background:${n.c}"></span><b>${t+1}. ${n.n}${n.isNew?' <em class="new">2026 \u65B0\u6838\u5B9A</em>':""}</b><small>${n.where}</small></button>`).join(""),St("#tribeList").querySelectorAll("button").forEach(n=>n.onclick=()=>qh(Nn.find(t=>t.id===n.dataset.t)))}function K0(n){cs(`<div class="tag-lf" style="background:${Ae.mountain.color}">\u26F0\uFE0F \u5C71\u5730</div><h3>\u25B2 ${n.name}</h3><p>\u9AD8\u5EA6 <b>${n.h.toLocaleString()} \u516C\u5C3A</b>\uFF1D ${(n.h/1e3).toFixed(3)} \u516C\u91CC${n.note?`\uFF0C${n.note}`:""}\u3002</p>
    <p class="muted">${et.level==="elem"?"\u5982\u679C\u4E00\u5C64\u6A13\u5927\u7D04 3 \u516C\u5C3A\uFF0C"+n.name+"\u5DEE\u4E0D\u591A\u6709 "+Math.round(n.h/3).toLocaleString()+" \u5C64\u6A13\u90A3\u9EBC\u9AD8\uFF01":"\u81FA\u7063\u9762\u7A4D\u4E0D\u5927\uFF0C\u537B\u6709\u5169\u767E\u591A\u5EA7 3,000 \u516C\u5C3A\u4EE5\u4E0A\u7684\u9AD8\u5C71\uFF0C\u662F\u677F\u584A\u64E0\u58D3\u5F62\u6210\u7684\u5E74\u8F15\u5C71\u8108\u3002"}</p>`)}function $h(n){let t=Math.round(Math.hypot(Yt(n.lon)-Yt(120.3),qt(n.lat)-qt(22.62)));cs(`<div class="tag-lf" style="background:${Is[n.region].color}">${n.kind}</div><h3>\u{1F3DD}\uFE0F ${n.name}</h3><p>${Il(n)}</p>
    <p class="muted">\u6700\u9AD8\u9EDE\u7D04 <b>${n.h} \u516C\u5C3A</b>\uFF1B\u8DDD\u96E2\u9AD8\u96C4\u76F4\u7DDA\u7D04 <b>${t} \u516C\u91CC</b>\u3002</p>`),hs(n.lon,n.lat,Math.max(30,n.id==="dongsha"?60:n.id==="penghu"?70:40))}var ve=null;function hs(n,t,e,i=.9){let s=Yt(n),r=qt(t),o=new D(s,0,r),a=-.35,l=new D(s+Math.sin(a)*Math.sin(i)*e,Math.cos(i)*e,r+Math.cos(a)*Math.sin(i)*e);ve={t:0,p0:Ce.position.clone(),p1:l,c0:de.target.clone(),c1:o}}function Zh(){hs(121.05,23.55,500,1)}function Q0(){ve={t:0,p0:Ce.position.clone(),p1:new D(Yt(120.95),560,qt(23.62)+1),c0:de.target.clone(),c1:new D(Yt(120.95),0,qt(23.62))}}function t_(){ve={t:0,p0:Ce.position.clone(),p1:new D(Yt(119.4),1050,qt(23.4)+260),c0:de.target.clone(),c1:new D(Yt(119.4),0,qt(23.4))}}function jh(n){et.focus=et.focus===n?null:n,document.querySelectorAll(".legend [data-lf]").forEach(t=>t.classList.toggle("on",t.dataset.lf===et.focus)),Us()}function uo(n){et.color=n,document.querySelectorAll("[data-color]").forEach(t=>t.classList.toggle("on",t.dataset.color===n)),e_(),Us()}function e_(){let n=St("#legend");et.color==="landform"?n.innerHTML=["plain","basin","tableland","hill","mountain"].map(t=>`<button data-lf="${t}" class="${et.focus===t?"on":""}"><span class="dot" style="background:${Ae[t].color}"></span>${Ae[t].icon} ${Ae[t].name}</button>`).join(""):et.color==="region"?n.innerHTML=Object.values(Is).map(t=>`<div class="rg"><span class="dot" style="background:${t.color}"></span><b>${t.name}</b><small>${t.list}</small></div>`).join("")+'<p class="muted">\u4F9D\u570B\u767C\u6703\u5340\u57DF\u5283\u5206\uFF1B\u6709\u7684\u8AB2\u672C\u628A\u5B9C\u862D\u6B78\u5728\u6771\u90E8\u3002</p>':n.innerHTML=`<div class="hyp">${pn.slice(0,-1).map(([t,e])=>`<span style="background:#${e.getHexString()}">${t.toLocaleString()}</span>`).join("")}</div><p class="muted">\u55AE\u4F4D\uFF1A\u516C\u5C3A\uFF08m\uFF09\u3002\u548C\u8AB2\u672C\u300C\u5206\u5C64\u8A2D\u8272\u5716\u300D\u4E00\u6A23\uFF1A\u8D8A\u9AD8\u984F\u8272\u8D8A\u6DF1\uFF0C\u6700\u9AD8\u8655\u662F\u767D\u8272\u3002</p>`,n.querySelectorAll("[data-lf]").forEach(t=>t.onclick=()=>{jh(t.dataset.lf),Os(t.dataset.lf)})}function Dl(n){et.mode!==n&&On.classList.remove("show"),et.mode=n,document.querySelectorAll(".tabs [data-mode]").forEach(e=>e.classList.toggle("on",e.dataset.mode===n)),document.querySelectorAll(".pane").forEach(e=>e.hidden=e.dataset.pane!==n),n==="tribes"?(et.color!=="tribe"&&(et.prevColor=et.color),et.color="tribe",Tl(),Us()):et.color==="tribe"&&(et.tribeFocus=null,uo(et.prevColor||"landform"));let t=n==="rain";Mi.visible=os.visible=t&&et.raining,on.city.forEach(e=>e.o.visible=t),t?ho():et.rising=!1,ls(),n==="spots"&&n_(),Jh()}function n_(){let n=["mountain","hill","tableland","basin","plain","volcano","coast","island"];St("#spotList").innerHTML=n.map(t=>{var e;return`<h4>${((e=Ae[t])==null?void 0:e.icon)||(t==="coast"?"\u{1F30A}":t==="volcano"?"\u{1F30B}":"\u{1F3DD}\uFE0F")} ${Yh[t]}</h4><ul class="cards">${Un.filter(i=>i.t===t).map(i=>`<li data-n="${i.n}">${eo[i.n]?`<img src="photos/${eo[i.n].f}" alt="" loading="lazy">`:`<span class="noimg">${i.i}</span>`}<span>${i.i} ${i.n}</span></li>`).join("")}</ul>`}).join(""),St("#spotList").querySelectorAll("li").forEach(t=>t.onclick=()=>{let e=Un.find(s=>s.n===t.dataset.n),i=kh(e.lon,e.lat);hs(e.lon,e.lat,e.t==="island"?40:70),Ll(e)})}function Jh(){let n=e=>St("#"+e).checked,t=et.mode==="tribes";on.lf.forEach(e=>e.o.visible=n("tgLf")&&!t),on.peak.forEach(e=>e.o.visible=n("tgPeak")&&!t),on.spot.forEach(e=>e.o.visible=(n("tgSpot")||et.mode==="spots")&&!t),on.tribe.forEach(e=>e.o.visible=t),on.island.forEach(e=>e.o.visible=n("tgIsland")),on.ruler.forEach(e=>e.o.visible=n("tgRuler")),on.sea.forEach(e=>e.o.visible=n("tgSea")),Ds.visible=n("tgRuler")}function Kh(n){et.level=n,document.querySelectorAll(".seg [data-level]").forEach(t=>t.classList.toggle("on",t.dataset.level===n)),document.body.dataset.level=n,On.classList.remove("show")}document.querySelectorAll(".tabs [data-mode]").forEach(n=>n.onclick=()=>Dl(n.dataset.mode));document.querySelectorAll("[data-color]").forEach(n=>n.onclick=()=>uo(n.dataset.color));document.querySelectorAll(".seg [data-level]").forEach(n=>n.onclick=()=>Kh(n.dataset.level));["tgLf","tgPeak","tgSpot","tgIsland","tgRuler","tgSea"].forEach(n=>St("#"+n).onchange=Jh);St("#tgSaver").checked=as;St("#tgSaver").onchange=n=>{try{localStorage.setItem("tw3d_saver",n.target.checked?"1":"0")}catch{}location.reload()};function ao(){let n=St("#hint");n.hidden=!1,n.classList.add("show"),clearTimeout(ao.t),ao.t=setTimeout(()=>n.classList.remove("show"),7e3)}St("#btnHint").onclick=ao;St("#hint").onclick=()=>St("#hint").classList.remove("show");St("#exag").oninput=n=>{et.exag=+n.target.value,an.scale.y=et.exag,St("#exagVal").textContent="\xD7"+et.exag};St("#btnHome").onclick=Zh;St("#btnTop").onclick=Q0;St("#btnAll").onclick=t_;St("#islandBtns").innerHTML=Jn.map(n=>`<button data-isl="${n.id}">${n.name}</button>`).join("");St("#islandBtns").querySelectorAll("button").forEach(n=>n.onclick=()=>$h(Jn.find(t=>t.id===n.dataset.isl)));St("#city").innerHTML=is.map(n=>`<option value="${n.id}">${n.name}\uFF08${Is[n.region].name}\uFF09${n.src==="book"?"\u30FB\u8AB2\u672C":""}</option>`).join("");St("#city").value=et.city;St("#city").onchange=n=>{et.city=n.target.value,ho()};St("#monthSel").innerHTML=io.map((n,t)=>`<option value="${t}">${t+1} \u6708</option>`).join("");St("#monthSel").onchange=n=>Xh(+n.target.value);St("#btnRain").onclick=()=>{et.raining=!et.raining,et.rising=et.raining,Mi.visible=os.visible=et.raining,St("#btnRain").textContent=et.raining?"\u23F8 \u505C\u6B62\u4E0B\u96E8":"\u{1F327}\uFE0F \u958B\u59CB\u4E0B\u96E8\uFF08\u6C34\u4F4D\u4E0A\u5347\uFF09"};St("#floodSlider").oninput=n=>{et.flood=+n.target.value,et.rising=!1,ls()};St("#btnDrain").onclick=()=>{et.flood=0,et.rising=!1,ls()};document.querySelectorAll("[data-flood]").forEach(n=>n.onclick=()=>{et.flood=+n.dataset.flood,et.rising=!1,ls()});St("#panelToggle").onclick=()=>{document.body.classList.toggle("panel-min"),Bs()};var Ul=()=>window.innerWidth<=900;Ul()&&document.body.classList.add("panel-min");document.querySelectorAll(".tabs [data-mode]").forEach(n=>n.addEventListener("click",()=>{document.body.classList.remove("panel-min"),Bs()}));function Qh(){let n=ss.clientWidth,t=ss.clientHeight;gn.setSize(n,t),co.setSize(n,t),Ce.aspect=n/t,Bs()}function Bs(){let n=ss.clientWidth,t=ss.clientHeight,e=St("#panel").getBoundingClientRect(),i=52,s=0,r=0;Ul()?r=Math.round((e.height-i)/2):document.body.classList.contains("panel-min")?r=0:s=-Math.round(e.right/2),s||r?Ce.setViewOffset(n,t,s,r,n,t):Ce.clearViewOffset(),Ce.updateProjectionMatrix()}new ResizeObserver(()=>Bs()).observe(St("#panel"));window.addEventListener("resize",Qh);Qh();Ce.position.set(Yt(120.2),330,qt(21.2));de.target.set(Yt(120.95),0,qt(23.65));uo("landform");Kh("elem");Dl("terrain");Zh();St("#loading").remove();var tu=!1;try{tu=localStorage.getItem("tw3d_hint")==="1",localStorage.setItem("tw3d_hint","1")}catch{}tu||setTimeout(ao,1200);var i_=new Wr,Ph=0,s_=0,Al=0,zs=(n=600)=>{Al=Math.max(Al,performance.now()+n)};["pointerdown","pointermove","pointerup","wheel","click","input","change","keydown","touchstart","touchmove"].forEach(n=>window.addEventListener(n,()=>zs(),{passive:!0,capture:!0}));window.addEventListener("resize",()=>zs(1e3));de.addEventListener("change",()=>zs());zs(3e3);function r_(){let n=[];for(let t of["tribe","island","sea","lf","peak","city","spot"])for(let e of on[t]){if(!e.o.visible||e.el.style.display==="none")continue;e.el.classList.remove("hid");let i=e.el.getBoundingClientRect();if(!i.width)continue;n.some(r=>i.left<r.right-2&&i.right>r.left+2&&i.top<r.bottom-2&&i.bottom>r.top+2)?e.el.classList.add("hid"):n.push(i)}}gn.setAnimationLoop(()=>{let n=i_.getDelta(),t=Math.min(.05,n);if(ve){ve.t=Math.min(1,ve.t+Math.min(.2,n)/1.4);let r=ve.t<.5?2*ve.t*ve.t:1-Math.pow(-2*ve.t+2,2)/2;Ce.position.lerpVectors(ve.p0,ve.p1,r),de.target.lerpVectors(ve.c0,ve.c1,r),ve.t>=1&&(ve=null)}let e=de.update(),i=ve||Mi.visible||et.mode==="rain"&&et.rising||e;if(!i&&performance.now()>Al)return;if(i&&zs(400),Mi.visible&&$0(t),et.mode==="rain"&&et.rising&&et.flood<4e3){let r=is.find(o=>o.id===et.city).mm[et.month];et.flood=Math.min(4e3,et.flood+t*(25+r*.6)*(et.flood<200?.6:1.6)),(Ph+=t)>.1&&(Ph=0,ls())}++s_%12===0&&r_();let s=Ce.position.distanceTo(de.target);document.body.classList.toggle("far",s>420),gn.render(Bn,Ce),co.render(Bn,Ce)});window.__tw={state:et,M:Bt,SPOTS:Un,camera:Ce,controls:de,setMode:Dl,setColor:uo,flyTo:hs,updateFlood:ls};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
