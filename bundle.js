(()=>{var fc=0,Po=1,pc=2;var Ar=1,mc=2,Hi=3,Cn=0,Dt=1,Kt=2,yn=0,di=1,Lo=2,Do=3,No=4,gc=5;var Xn=100,yc=101,_c=102,xc=103,vc=104,bc=200,Mc=201,Sc=202,Ec=203,ms=204,gs=205,Tc=206,Ac=207,wc=208,kc=209,Cc=210,Rc=211,Ic=212,Pc=213,Lc=214,ys=0,_s=1,xs=2,fi=3,vs=4,bs=5,Ms=6,Ss=7,Uo=0,Dc=1,Nc=2,rn=0,Fo=1,Oo=2,Bo=3,zo=4,Vo=5,Go=6,Ho=7;var Wo=300,ei=301,mi=302,$s=303,js=304,wr=306,Es=1e3,fn=1001,Ts=1002,St=1003,Uc=1004;var kr=1005;var Tt=1006,Qs=1007;var ti=1008;var Yt=1009,Xo=1010,qo=1011,Wi=1012,ea=1013,sn=1014,an=1015,_n=1016,ta=1017,na=1018,Xi=1020,Yo=35902,Zo=35899,Jo=1021,Ko=1022,$t=1023,pn=1026,ni=1027,$o=1028,ia=1029,ii=1030,ra=1031;var sa=1033,Cr=33776,Rr=33777,Ir=33778,Pr=33779,aa=35840,oa=35841,la=35842,ca=35843,ua=36196,ha=37492,da=37496,fa=37488,pa=37489,Lr=37490,ma=37491,ga=37808,ya=37809,_a=37810,xa=37811,va=37812,ba=37813,Ma=37814,Sa=37815,Ea=37816,Ta=37817,Aa=37818,wa=37819,ka=37820,Ca=37821,Ra=36492,Ia=36494,Pa=36495,La=36283,Da=36284,Dr=36285,Na=36286;var sr=2300,As=2301,ps=2302,Mo=2303,So=2400,Eo=2401,To=2402;var Fc=3200;var jo=0,Oc=1,Ln="",Pt="srgb",ar="srgb-linear",or="linear",Je="srgb";var ui=7680;var Ao=519,Bc=512,zc=513,Vc=514,Ua=515,Gc=516,Hc=517,Fa=518,Wc=519,wo=35044;var Qo="300 es",nn=2e3,lr=2001;function Zu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ju(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xc(){let i=cr("canvas");return i.style.display="block",i}var Gl={},Ui=null;function el(...i){let e="THREE."+i.shift();Ui?Ui("log",e,...i):console.log(e,...i)}function qc(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function we(...i){i=qc(i);let e="THREE."+i.shift();if(Ui)Ui("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Re(...i){i=qc(i);let e="THREE."+i.shift();if(Ui)Ui("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function hi(...i){let e=i.join(" ");e in Gl||(Gl[e]=!0,we(...i))}function Yc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Zc={[ys]:_s,[xs]:Ms,[vs]:Ss,[fi]:bs,[_s]:ys,[Ms]:xs,[Ss]:vs,[bs]:fi},mn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hl=1234567,ir=Math.PI/180,Fi=180/Math.PI;function qi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function Ge(i,e,t){return Math.max(e,Math.min(t,i))}function tl(i,e){return(i%e+e)%e}function Ku(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function $u(i,e,t){return i!==e?(t-i)/(e-i):0}function rr(i,e,t){return(1-t)*i+t*e}function ju(i,e,t,n){return rr(i,e,1-Math.exp(-t*n))}function Qu(i,e=1){return e-Math.abs(tl(i,e*2)-e)}function eh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function th(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function nh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ih(i,e){return i+Math.random()*(e-i)}function rh(i){return i*(.5-Math.random())}function sh(i){i!==void 0&&(Hl=i);let e=Hl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ah(i){return i*ir}function oh(i){return i*Fi}function lh(i){return(i&i-1)===0&&i!==0}function ch(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function uh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hh(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),f=s((e-n)/2),u=a((e-n)/2),m=s((n-e)/2),_=a((n-e)/2);switch(r){case"XYX":i.set(o*h,l*f,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*_,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*_,o*c);break;case"ZYZ":i.set(l*_,l*m,o*h,o*c);break;default:we("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Di(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function It(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var nl={DEG2RAD:ir,RAD2DEG:Fi,generateUUID:qi,clamp:Ge,euclideanModulo:tl,mapLinear:Ku,inverseLerp:$u,lerp:rr,damp:ju,pingpong:Qu,smoothstep:eh,smootherstep:th,randInt:nh,randFloat:ih,randFloatSpread:rh,seededRandom:sh,degToRad:ah,radToDeg:oh,isPowerOfTwo:lh,ceilPowerOfTwo:ch,floorPowerOfTwo:uh,setQuaternionFromProperEuler:hh,normalize:It,denormalize:Di},ol=class ol{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ol.prototype.isVector2=!0;var Oe=ol,gn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],f=n[r+3],u=s[a+0],m=s[a+1],_=s[a+2],b=s[a+3];if(f!==b||l!==u||c!==m||h!==_){let g=l*u+c*m+h*_+f*b;g<0&&(u=-u,m=-m,_=-_,b=-b,g=-g);let d=1-o;if(g<.9995){let E=Math.acos(g),w=Math.sin(E);d=Math.sin(d*E)/w,o=Math.sin(o*E)/w,l=l*d+u*o,c=c*d+m*o,h=h*d+_*o,f=f*d+b*o}else{l=l*d+u*o,c=c*d+m*o,h=h*d+_*o,f=f*d+b*o;let E=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=E,c*=E,h*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],f=s[a],u=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+h*f+l*m-c*u,e[t+1]=l*_+h*u+c*f-o*m,e[t+2]=c*_+h*m+o*u-l*f,e[t+3]=h*_-o*f-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),f=o(s/2),u=l(n/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=u*h*f+c*m*_,this._y=c*m*f-u*h*_,this._z=c*h*_+u*m*f,this._w=c*h*f-u*m*_;break;case"YXZ":this._x=u*h*f+c*m*_,this._y=c*m*f-u*h*_,this._z=c*h*_-u*m*f,this._w=c*h*f+u*m*_;break;case"ZXY":this._x=u*h*f-c*m*_,this._y=c*m*f+u*h*_,this._z=c*h*_+u*m*f,this._w=c*h*f-u*m*_;break;case"ZYX":this._x=u*h*f-c*m*_,this._y=c*m*f+u*h*_,this._z=c*h*_-u*m*f,this._w=c*h*f+u*m*_;break;case"YZX":this._x=u*h*f+c*m*_,this._y=c*m*f+u*h*_,this._z=c*h*_-u*m*f,this._w=c*h*f-u*m*_;break;case"XZY":this._x=u*h*f-c*m*_,this._y=c*m*f-u*h*_,this._z=c*h*_+u*m*f,this._w=c*h*f+u*m*_;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>f){let m=2*Math.sqrt(1+n-o-f);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){let m=2*Math.sqrt(1+o-n-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ll=class ll{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qa.copy(this).projectOnVector(e),this.sub(Qa)}reflect(e){return this.sub(Qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ll.prototype.isVector3=!0;var D=ll,Qa=new D,Wl=new gn,cl=class cl{constructor(e,t,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],m=n[5],_=n[8],b=r[0],g=r[3],d=r[6],E=r[1],w=r[4],v=r[7],A=r[2],S=r[5],k=r[8];return s[0]=a*b+o*E+l*A,s[3]=a*g+o*w+l*S,s[6]=a*d+o*v+l*k,s[1]=c*b+h*E+f*A,s[4]=c*g+h*w+f*S,s[7]=c*d+h*v+f*k,s[2]=u*b+m*E+_*A,s[5]=u*g+m*w+_*S,s[8]=u*d+m*v+_*k,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*s,m=c*s-a*l,_=t*f+n*u+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/_;return e[0]=f*b,e[1]=(r*c-h*n)*b,e[2]=(o*n-r*a)*b,e[3]=u*b,e[4]=(h*t-r*l)*b,e[5]=(r*s-o*t)*b,e[6]=m*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*s)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(eo.makeScale(e,t)),this}rotate(e){return hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(eo.makeRotation(-e)),this}translate(e,t){return hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(eo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};cl.prototype.isMatrix3=!0;var Pe=cl,eo=new Pe,Xl=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ql=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dh(){let i={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Je&&(r.r=kn(r.r),r.g=kn(r.g),r.b=kn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ln?or:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return hi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return hi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ar]:{primaries:e,whitePoint:n,transfer:or,toXYZ:Xl,fromXYZ:ql,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:Xl,fromXYZ:ql,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),i}var Ve=dh();function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ni(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Mi,ws=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mi===void 0&&(Mi=cr("canvas")),Mi.width=e.width,Mi.height=e.height;let r=Mi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Mi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=cr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=kn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kn(t[n]/255)*255):t[n]=kn(t[n]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fh=0,Oi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(to(r[a].image)):s.push(to(r[a]))}else s=to(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function to(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ws.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}var ph=0,no=new D,Ut=class i extends mn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=fn,r=fn,s=Tt,a=ti,o=$t,l=Yt,c=i.DEFAULT_ANISOTROPY,h=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=qi(),this.name="",this.source=new Oi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(no).x}get height(){return this.source.getSize(no).y}get depth(){return this.source.getSize(no).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){we(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){we(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Es:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case Ts:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Es:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case Ts:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Wo;Ut.DEFAULT_ANISOTROPY=1;var ul=class ul{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],m=l[5],_=l[9],b=l[2],g=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-b)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+b)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,v=(m+1)/2,A=(d+1)/2,S=(h+u)/4,k=(f+b)/4,y=(_+g)/4;return w>v&&w>A?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=S/n,s=k/n):v>A?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=S/r,s=y/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=k/s,r=y/s),this.set(n,r,s,t),this}let E=Math.sqrt((g-_)*(g-_)+(f-b)*(f-b)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(g-_)/E,this.y=(f-b)/E,this.z=(u-h)/E,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ul.prototype.isVector4=!0;var st=ul,ks=class extends mn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new Ut(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Tt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Oi(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wt=class extends ks{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ur=class extends Ut{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cs=class extends Ut{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ks=class Ks{constructor(e,t,n,r,s,a,o,l,c,h,f,u,m,_,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,f,u,m,_,b,g)}set(e,t,n,r,s,a,o,l,c,h,f,u,m,_,b,g){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=m,d[7]=_,d[11]=b,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ks().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Si.setFromMatrixColumn(e,0).length(),s=1/Si.setFromMatrixColumn(e,1).length(),a=1/Si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let u=a*h,m=a*f,_=o*h,b=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=u-b*c,t[9]=-o*l,t[2]=b-u*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,m=l*f,_=c*h,b=c*f;t[0]=u+b*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=m*o-_,t[6]=b+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,m=l*f,_=c*h,b=c*f;t[0]=u-b*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*h,t[9]=b-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,m=a*f,_=o*h,b=o*f;t[0]=l*h,t[4]=_*c-m,t[8]=u*c+b,t[1]=l*f,t[5]=b*c+u,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,m=a*c,_=o*l,b=o*c;t[0]=l*h,t[4]=b-u*f,t[8]=_*f+m,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*f+_,t[10]=u-b*f}else if(e.order==="XZY"){let u=a*l,m=a*c,_=o*l,b=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+b,t[5]=a*h,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*h,t[10]=b*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mh,e,gh)}lookAt(e,t,n){let r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),On.crossVectors(n,Vt),On.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),On.crossVectors(n,Vt)),On.normalize(),Wr.crossVectors(Vt,On),r[0]=On.x,r[4]=Wr.x,r[8]=Vt.x,r[1]=On.y,r[5]=Wr.y,r[9]=Vt.y,r[2]=On.z,r[6]=Wr.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],m=n[13],_=n[2],b=n[6],g=n[10],d=n[14],E=n[3],w=n[7],v=n[11],A=n[15],S=r[0],k=r[4],y=r[8],T=r[12],C=r[1],R=r[5],U=r[9],q=r[13],J=r[2],B=r[6],X=r[10],G=r[14],$=r[3],Q=r[7],he=r[11],me=r[15];return s[0]=a*S+o*C+l*J+c*$,s[4]=a*k+o*R+l*B+c*Q,s[8]=a*y+o*U+l*X+c*he,s[12]=a*T+o*q+l*G+c*me,s[1]=h*S+f*C+u*J+m*$,s[5]=h*k+f*R+u*B+m*Q,s[9]=h*y+f*U+u*X+m*he,s[13]=h*T+f*q+u*G+m*me,s[2]=_*S+b*C+g*J+d*$,s[6]=_*k+b*R+g*B+d*Q,s[10]=_*y+b*U+g*X+d*he,s[14]=_*T+b*q+g*G+d*me,s[3]=E*S+w*C+v*J+A*$,s[7]=E*k+w*R+v*B+A*Q,s[11]=E*y+w*U+v*X+A*he,s[15]=E*T+w*q+v*G+A*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],m=e[14],_=e[3],b=e[7],g=e[11],d=e[15],E=l*m-c*u,w=o*m-c*f,v=o*u-l*f,A=a*m-c*h,S=a*u-l*h,k=a*f-o*h;return t*(b*E-g*w+d*v)-n*(_*E-g*A+d*S)+r*(_*w-b*A+d*k)-s*(_*v-b*S+g*k)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(s*h-o*l)+r*(s*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],m=e[11],_=e[12],b=e[13],g=e[14],d=e[15],E=t*o-n*a,w=t*l-r*a,v=t*c-s*a,A=n*l-r*o,S=n*c-s*o,k=r*c-s*l,y=h*b-f*_,T=h*g-u*_,C=h*d-m*_,R=f*g-u*b,U=f*d-m*b,q=u*d-m*g,J=E*q-w*U+v*R+A*C-S*T+k*y;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/J;return e[0]=(o*q-l*U+c*R)*B,e[1]=(r*U-n*q-s*R)*B,e[2]=(b*k-g*S+d*A)*B,e[3]=(u*S-f*k-m*A)*B,e[4]=(l*C-a*q-c*T)*B,e[5]=(t*q-r*C+s*T)*B,e[6]=(g*v-_*k-d*w)*B,e[7]=(h*k-u*v+m*w)*B,e[8]=(a*U-o*C+c*y)*B,e[9]=(n*C-t*U-s*y)*B,e[10]=(_*S-b*v+d*E)*B,e[11]=(f*v-h*S-m*E)*B,e[12]=(o*T-a*R-l*y)*B,e[13]=(t*R-n*T+r*y)*B,e[14]=(b*w-_*A-g*E)*B,e[15]=(h*A-f*w+u*E)*B,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,f=o+o,u=s*c,m=s*h,_=s*f,b=a*h,g=a*f,d=o*f,E=l*c,w=l*h,v=l*f,A=n.x,S=n.y,k=n.z;return r[0]=(1-(b+d))*A,r[1]=(m+v)*A,r[2]=(_-w)*A,r[3]=0,r[4]=(m-v)*S,r[5]=(1-(u+d))*S,r[6]=(g+E)*S,r[7]=0,r[8]=(_+w)*k,r[9]=(g-E)*k,r[10]=(1-(u+b))*k,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Si.set(r[0],r[1],r[2]).length(),o=Si.set(r[4],r[5],r[6]).length(),l=Si.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Qt.copy(this);let c=1/a,h=1/o,f=1/l;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=h,Qt.elements[5]*=h,Qt.elements[6]*=h,Qt.elements[8]*=f,Qt.elements[9]*=f,Qt.elements[10]*=f,t.setFromRotationMatrix(Qt),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=nn,l=!1){let c=this.elements,h=2*s/(t-e),f=2*s/(n-r),u=(t+e)/(t-e),m=(n+r)/(n-r),_,b;if(l)_=s/(a-s),b=a*s/(a-s);else if(o===nn)_=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===lr)_=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=nn,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-r),u=-(t+e)/(t-e),m=-(n+r)/(n-r),_,b;if(l)_=1/(a-s),b=a/(a-s);else if(o===nn)_=-2/(a-s),b=-(a+s)/(a-s);else if(o===lr)_=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ks.prototype.isMatrix4=!0;var rt=Ks,Si=new D,Qt=new rt,mh=new D(0,0,0),gh=new D(1,1,1),On=new D,Wr=new D,Vt=new D,Yl=new rt,Zl=new gn,qn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],u=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ge(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zl.setFromEuler(this),this.setFromQuaternion(Zl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qn.DEFAULT_ORDER="XYZ";var Bi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},yh=0,Jl=new D,Ei=new gn,Mn=new rt,Xr=new D,ji=new D,_h=new D,xh=new gn,Kl=new D(1,0,0),$l=new D(0,1,0),jl=new D(0,0,1),Ql={type:"added"},vh={type:"removed"},Ti={type:"childadded",child:null},io={type:"childremoved",child:null},Ft=class i extends mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new qn,n=new gn,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new Pe}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.premultiply(Ei),this}rotateX(e){return this.rotateOnAxis(Kl,e)}rotateY(e){return this.rotateOnAxis($l,e)}rotateZ(e){return this.rotateOnAxis(jl,e)}translateOnAxis(e,t){return Jl.copy(e).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kl,e)}translateY(e){return this.translateOnAxis($l,e)}translateZ(e){return this.translateOnAxis(jl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xr.copy(e):Xr.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(ji,Xr,this.up):Mn.lookAt(Xr,ji,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),Ei.setFromRotationMatrix(Mn),this.quaternion.premultiply(Ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Re("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ql),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vh),io.child=e,this.dispatchEvent(io),io.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ql),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,_h),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,xh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Ft.DEFAULT_UP=new D(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},bh={type:"move"},zi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),d=this._getHandJoint(c,b);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&u>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bh)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},qr={h:0,s:0,l:0};function ro(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ve.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ve.workingColorSpace){if(e=tl(e,1),t=Ge(t,0,1),n=Ge(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ro(a,s,e+1/3),this.g=ro(a,s,e),this.b=ro(a,s,e-1/3)}return Ve.colorSpaceToWorking(this,r),this}setStyle(e,t=Pt){function n(s){s!==void 0&&parseFloat(s)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){let n=Jc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Ve.workingToColorSpace(kt.copy(this),e),Math.round(Ge(kt.r*255,0,255))*65536+Math.round(Ge(kt.g*255,0,255))*256+Math.round(Ge(kt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.workingToColorSpace(kt.copy(this),t);let n=kt.r,r=kt.g,s=kt.b,a=Math.max(n,r,s),o=Math.min(n,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ve.workingColorSpace){return Ve.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Pt){Ve.workingToColorSpace(kt.copy(this),e);let t=kt.r,n=kt.g,r=kt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(qr);let n=rr(Bn.h,qr.h,t),r=rr(Bn.s,qr.s,t),s=rr(Bn.l,qr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},kt=new Be;Be.NAMES=Jc;var hr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Be(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var dr=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},en=new D,Sn=new D,so=new D,En=new D,Ai=new D,wi=new D,ec=new D,ao=new D,oo=new D,lo=new D,co=new st,uo=new st,ho=new st,Wn=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),en.subVectors(e,t),r.cross(en);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){en.subVectors(r,t),Sn.subVectors(n,t),so.subVectors(e,t);let a=en.dot(en),o=en.dot(Sn),l=en.dot(so),c=Sn.dot(Sn),h=Sn.dot(so),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;let u=1/f,m=(c*l-o*h)*u,_=(a*h-o*l)*u;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,En.x),l.addScaledVector(a,En.y),l.addScaledVector(o,En.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return co.setScalar(0),uo.setScalar(0),ho.setScalar(0),co.fromBufferAttribute(e,t),uo.fromBufferAttribute(e,n),ho.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(co,s.x),a.addScaledVector(uo,s.y),a.addScaledVector(ho,s.z),a}static isFrontFacing(e,t,n,r){return en.subVectors(n,t),Sn.subVectors(e,t),en.cross(Sn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),en.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Ai.subVectors(r,n),wi.subVectors(s,n),ao.subVectors(e,n);let l=Ai.dot(ao),c=wi.dot(ao);if(l<=0&&c<=0)return t.copy(n);oo.subVectors(e,r);let h=Ai.dot(oo),f=wi.dot(oo);if(h>=0&&f<=h)return t.copy(r);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ai,a);lo.subVectors(e,s);let m=Ai.dot(lo),_=wi.dot(lo);if(_>=0&&m<=_)return t.copy(s);let b=m*c-l*_;if(b<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(wi,o);let g=h*_-m*f;if(g<=0&&f-h>=0&&m-_>=0)return ec.subVectors(s,r),o=(f-h)/(f-h+(m-_)),t.copy(r).addScaledVector(ec,o);let d=1/(g+b+u);return a=b*d,o=u*d,t.copy(n).addScaledVector(Ai,a).addScaledVector(wi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,tn):tn.fromBufferAttribute(s,a),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(e.matrixWorld),this.union(Yr)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qi),Zr.subVectors(this.max,Qi),ki.subVectors(e.a,Qi),Ci.subVectors(e.b,Qi),Ri.subVectors(e.c,Qi),zn.subVectors(Ci,ki),Vn.subVectors(Ri,Ci),ai.subVectors(ki,Ri);let t=[0,-zn.z,zn.y,0,-Vn.z,Vn.y,0,-ai.z,ai.y,zn.z,0,-zn.x,Vn.z,0,-Vn.x,ai.z,0,-ai.x,-zn.y,zn.x,0,-Vn.y,Vn.x,0,-ai.y,ai.x,0];return!fo(t,ki,Ci,Ri,Zr)||(t=[1,0,0,0,1,0,0,0,1],!fo(t,ki,Ci,Ri,Zr))?!1:(Jr.crossVectors(zn,Vn),t=[Jr.x,Jr.y,Jr.z],fo(t,ki,Ci,Ri,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Tn=[new D,new D,new D,new D,new D,new D,new D,new D],tn=new D,Yr=new Yn,ki=new D,Ci=new D,Ri=new D,zn=new D,Vn=new D,ai=new D,Qi=new D,Zr=new D,Jr=new D,oi=new D;function fo(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){oi.fromArray(i,s);let o=r.x*Math.abs(oi.x)+r.y*Math.abs(oi.y)+r.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var gt=new D,Kr=new Oe,Mh=0,Ht=class extends mn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wo,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXY(t,Kr.x,Kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Di(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Di(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Di(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var fr=class extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var pr=class extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ft=class extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sh=new Yn,er=new D,po=new D,Zn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Sh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;er.subVectors(e,this.center);let t=er.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(er,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(po.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(er.copy(e.center).add(po)),this.expandByPoint(er.copy(e.center).sub(po))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Eh=0,Jt=new rt,mo=new Ft,Ii=new D,Gt=new Yn,tr=new Yn,Mt=new D,yt=class i extends mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zu(e)?pr:fr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Pe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return mo.lookAt(e),mo.updateMatrix(),this.applyMatrix4(mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ft(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];tr.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Gt.min,tr.min),Gt.expandByPoint(Mt),Mt.addVectors(Gt.max,tr.max),Gt.expandByPoint(Mt)):(Gt.expandByPoint(tr.min),Gt.expandByPoint(tr.max))}Gt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Mt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Mt.fromBufferAttribute(o,c),l&&(Ii.fromBufferAttribute(e,c),Mt.add(Ii)),r=Math.max(r,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ht(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new D,l[y]=new D;let c=new D,h=new D,f=new D,u=new Oe,m=new Oe,_=new Oe,b=new D,g=new D;function d(y,T,C){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,C),u.fromBufferAttribute(s,y),m.fromBufferAttribute(s,T),_.fromBufferAttribute(s,C),h.sub(c),f.sub(c),m.sub(u),_.sub(u);let R=1/(m.x*_.y-_.x*m.y);isFinite(R)&&(b.copy(h).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(R),g.copy(f).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(R),o[y].add(b),o[T].add(b),o[C].add(b),l[y].add(g),l[T].add(g),l[C].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let y=0,T=E.length;y<T;++y){let C=E[y],R=C.start,U=C.count;for(let q=R,J=R+U;q<J;q+=3)d(e.getX(q+0),e.getX(q+1),e.getX(q+2))}let w=new D,v=new D,A=new D,S=new D;function k(y){A.fromBufferAttribute(r,y),S.copy(A);let T=o[y];w.copy(T),w.sub(A.multiplyScalar(A.dot(T))).normalize(),v.crossVectors(S,T);let R=v.dot(l[y])<0?-1:1;a.setXYZW(y,w.x,w.y,w.z,R)}for(let y=0,T=E.length;y<T;++y){let C=E[y],R=C.start,U=C.count;for(let q=R,J=R+U;q<J;q+=3)k(e.getX(q+0)),k(e.getX(q+1)),k(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let r=new D,s=new D,a=new D,o=new D,l=new D,c=new D,h=new D,f=new D;if(e)for(let u=0,m=e.count;u<m;u+=3){let _=e.getX(u+0),b=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),m=0,_=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?m=l[b]*o.data.stride+o.offset:m=l[b]*h;for(let d=0;d<h;d++)u[_++]=c[m++]}return new Ht(u,h,f)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let l=r[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],m=e(u,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],f=s[c];for(let u=0,m=f.length;u<m;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Th=0,Rn=class extends mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=di,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ms,this.blendDst=gs,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ao,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ms&&(n.blendSrc=this.blendSrc),this.blendDst!==gs&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ao&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var An=new D,go=new D,$r=new D,Gn=new D,yo=new D,jr=new D,_o=new D,pi=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){go.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(go);let s=e.distanceTo(t)*.5,a=-this.direction.dot($r),o=Gn.dot(this.direction),l=-Gn.dot($r),c=Gn.lengthSq(),h=Math.abs(1-a*a),f,u,m,_;if(h>0)if(f=a*l-o,u=a*o-l,_=s*h,f>=0)if(u>=-_)if(u<=_){let b=1/h;f*=b,u*=b,m=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;else u<=-_?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+u*(u+2*l)+c):u<=_?(f=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+u*(u+2*l)+c);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(go).addScaledVector($r,u),m}intersectSphere(e,t){An.subVectors(e.center,this.origin);let n=An.dot(this.direction),r=An.dot(An)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,r,s){yo.subVectors(t,e),jr.subVectors(n,e),_o.crossVectors(yo,jr);let a=this.direction.dot(_o),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,e);let l=o*this.direction.dot(jr.crossVectors(Gn,jr));if(l<0)return null;let c=o*this.direction.dot(yo.cross(Gn));if(c<0||l+c>a)return null;let h=-o*Gn.dot(_o);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jn=class extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},tc=new rt,li=new pi,Qr=new Zn,nc=new D,es=new D,ts=new D,ns=new D,xo=new D,is=new D,ic=new D,rs=new D,Lt=class extends Ft{constructor(e=new yt,t=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){is.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],f=s[l];h!==0&&(xo.fromBufferAttribute(f,e),a?is.addScaledVector(xo,h):is.addScaledVector(xo.sub(t),h))}t.add(is)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(s),li.copy(e.ray).recast(e.near),!(Qr.containsPoint(li.origin)===!1&&(li.intersectSphere(Qr,nc)===null||li.origin.distanceToSquared(nc)>(e.far-e.near)**2))&&(tc.copy(s).invert(),li.copy(e.ray).applyMatrix4(tc),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,li)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,b=u.length;_<b;_++){let g=u[_],d=a[g.materialIndex],E=Math.max(g.start,m.start),w=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let v=E,A=w;v<A;v+=3){let S=o.getX(v),k=o.getX(v+1),y=o.getX(v+2);r=ss(this,d,e,n,c,h,f,S,k,y),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let _=Math.max(0,m.start),b=Math.min(o.count,m.start+m.count);for(let g=_,d=b;g<d;g+=3){let E=o.getX(g),w=o.getX(g+1),v=o.getX(g+2);r=ss(this,a,e,n,c,h,f,E,w,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,b=u.length;_<b;_++){let g=u[_],d=a[g.materialIndex],E=Math.max(g.start,m.start),w=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let v=E,A=w;v<A;v+=3){let S=v,k=v+1,y=v+2;r=ss(this,d,e,n,c,h,f,S,k,y),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let _=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let g=_,d=b;g<d;g+=3){let E=g,w=g+1,v=g+2;r=ss(this,a,e,n,c,h,f,E,w,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function Ah(i,e,t,n,r,s,a,o){let l;if(e.side===Dt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Cn,o),l===null)return null;rs.copy(o),rs.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(rs);return c<t.near||c>t.far?null:{distance:c,point:rs.clone(),object:i}}function ss(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,es),i.getVertexPosition(l,ts),i.getVertexPosition(c,ns);let h=Ah(i,e,t,n,es,ts,ns,ic);if(h){let f=new D;Wn.getBarycoord(ic,es,ts,ns,f),r&&(h.uv=Wn.getInterpolatedAttribute(r,o,l,c,f,new Oe)),s&&(h.uv1=Wn.getInterpolatedAttribute(s,o,l,c,f,new Oe)),a&&(h.normal=Wn.getInterpolatedAttribute(a,o,l,c,f,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};Wn.getNormal(es,ts,ns,u.normal),h.face=u,h.barycoord=f}return h}var Rs=class extends Ut{constructor(e=null,t=1,n=1,r,s,a,o,l,c=St,h=St,f,u){super(null,a,o,l,c,h,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vo=new D,wh=new D,kh=new Pe,dn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=vo.subVectors(n,t).cross(wh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(vo),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||kh.getNormalMatrix(e),r=this.coplanarPoint(vo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ci=new Zn,Ch=new Oe(.5,.5),as=new D,mr=class{constructor(e=new dn,t=new dn,n=new dn,r=new dn,s=new dn,a=new dn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=nn,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],f=s[5],u=s[6],m=s[7],_=s[8],b=s[9],g=s[10],d=s[11],E=s[12],w=s[13],v=s[14],A=s[15];if(r[0].setComponents(c-a,m-h,d-_,A-E).normalize(),r[1].setComponents(c+a,m+h,d+_,A+E).normalize(),r[2].setComponents(c+o,m+f,d+b,A+w).normalize(),r[3].setComponents(c-o,m-f,d-b,A-w).normalize(),n)r[4].setComponents(l,u,g,v).normalize(),r[5].setComponents(c-l,m-u,d-g,A-v).normalize();else if(r[4].setComponents(c-l,m-u,d-g,A-v).normalize(),t===nn)r[5].setComponents(c+l,m+u,d+g,A+v).normalize();else if(t===lr)r[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){ci.center.set(0,0,0);let t=Ch.distanceTo(e.center);return ci.radius=.7071067811865476+t,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(as.x=r.normal.x>0?e.max.x:e.min.x,as.y=r.normal.y>0?e.max.y:e.min.y,as.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(as)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var In=class extends Rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Is=new D,Ps=new D,rc=new rt,nr=new pi,os=new Zn,bo=new D,sc=new D,Kn=class extends Ft{constructor(e=new yt,t=new In){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Is.fromBufferAttribute(t,r-1),Ps.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Is.distanceTo(Ps);e.setAttribute("lineDistance",new ft(n,1))}else we("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(r),os.radius+=s,e.ray.intersectsSphere(os)===!1)return;rc.copy(r).invert(),nr.copy(e.ray).applyMatrix4(rc);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let b=m,g=_-1;b<g;b+=c){let d=h.getX(b),E=h.getX(b+1),w=ls(this,e,nr,l,d,E,b);w&&t.push(w)}if(this.isLineLoop){let b=h.getX(_-1),g=h.getX(m),d=ls(this,e,nr,l,b,g,_-1);d&&t.push(d)}}else{let m=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let b=m,g=_-1;b<g;b+=c){let d=ls(this,e,nr,l,b,b+1,b);d&&t.push(d)}if(this.isLineLoop){let b=ls(this,e,nr,l,_-1,m,_-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function ls(i,e,t,n,r,s,a){let o=i.geometry.attributes.position;if(Is.fromBufferAttribute(o,r),Ps.fromBufferAttribute(o,s),t.distanceSqToSegment(Is,Ps,bo,sc)>n)return;bo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(bo);if(!(c<e.near||c>e.far))return{distance:c,point:sc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Vi=class extends Rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ac=new rt,ko=new pi,cs=new Zn,us=new D,gr=class extends Ft{constructor(e=new yt,t=new Vi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(r),cs.radius+=s,e.ray.intersectsSphere(cs)===!1)return;ac.copy(r).invert(),ko.copy(e.ray).applyMatrix4(ac);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=u,b=m;_<b;_++){let g=c.getX(_);us.fromBufferAttribute(f,g),oc(us,g,l,r,e,t,this)}}else{let u=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=u,b=m;_<b;_++)us.fromBufferAttribute(f,_),oc(us,_,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function oc(i,e,t,n,r,s,a){let o=ko.distanceSqToPoint(i);if(o<t){let l=new D;ko.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var yr=class extends Ut{constructor(e=[],t=ei,n,r,s,a,o,l,c,h){super(e,t,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Pn=class extends Ut{constructor(e,t,n=sn,r,s,a,o=St,l=St,c,h=pn,f=1){if(h!==pn&&h!==ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Oi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ls=class extends Pn{constructor(e,t=sn,n=ei,r,s,a=St,o=St,l,c=pn){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},_r=class extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Gi=class i extends yt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,m=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(f,2));function _(b,g,d,E,w,v,A,S,k,y,T){let C=v/k,R=A/y,U=v/2,q=A/2,J=S/2,B=k+1,X=y+1,G=0,$=0,Q=new D;for(let he=0;he<X;he++){let me=he*R-q;for(let _e=0;_e<B;_e++){let qe=_e*C-U;Q[b]=qe*E,Q[g]=me*w,Q[d]=J,c.push(Q.x,Q.y,Q.z),Q[b]=0,Q[g]=0,Q[d]=S>0?1:-1,h.push(Q.x,Q.y,Q.z),f.push(_e/k),f.push(1-he/y),G+=1}}for(let he=0;he<y;he++)for(let me=0;me<k;me++){let _e=u+me+B*he,qe=u+me+B*(he+1),at=u+(me+1)+B*(he+1),Ye=u+(me+1)+B*he;l.push(_e,qe,Ye),l.push(qe,at,Ye),$+=6}o.addGroup(m,$,T),m+=$,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ds=class i extends yt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];o(r),c(n),h(),this.setAttribute("position",new ft(s,3)),this.setAttribute("normal",new ft(s.slice(),3)),this.setAttribute("uv",new ft(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(E){let w=new D,v=new D,A=new D;for(let S=0;S<t.length;S+=3)m(t[S+0],w),m(t[S+1],v),m(t[S+2],A),l(w,v,A,E)}function l(E,w,v,A){let S=A+1,k=[];for(let y=0;y<=S;y++){k[y]=[];let T=E.clone().lerp(v,y/S),C=w.clone().lerp(v,y/S),R=S-y;for(let U=0;U<=R;U++)U===0&&y===S?k[y][U]=T:k[y][U]=T.clone().lerp(C,U/R)}for(let y=0;y<S;y++)for(let T=0;T<2*(S-y)-1;T++){let C=Math.floor(T/2);T%2===0?(u(k[y][C+1]),u(k[y+1][C]),u(k[y][C])):(u(k[y][C+1]),u(k[y+1][C+1]),u(k[y+1][C]))}}function c(E){let w=new D;for(let v=0;v<s.length;v+=3)w.x=s[v+0],w.y=s[v+1],w.z=s[v+2],w.normalize().multiplyScalar(E),s[v+0]=w.x,s[v+1]=w.y,s[v+2]=w.z}function h(){let E=new D;for(let w=0;w<s.length;w+=3){E.x=s[w+0],E.y=s[w+1],E.z=s[w+2];let v=g(E)/2/Math.PI+.5,A=d(E)/Math.PI+.5;a.push(v,1-A)}_(),f()}function f(){for(let E=0;E<a.length;E+=6){let w=a[E+0],v=a[E+2],A=a[E+4],S=Math.max(w,v,A),k=Math.min(w,v,A);S>.9&&k<.1&&(w<.2&&(a[E+0]+=1),v<.2&&(a[E+2]+=1),A<.2&&(a[E+4]+=1))}}function u(E){s.push(E.x,E.y,E.z)}function m(E,w){let v=E*3;w.x=e[v+0],w.y=e[v+1],w.z=e[v+2]}function _(){let E=new D,w=new D,v=new D,A=new D,S=new Oe,k=new Oe,y=new Oe;for(let T=0,C=0;T<s.length;T+=9,C+=6){E.set(s[T+0],s[T+1],s[T+2]),w.set(s[T+3],s[T+4],s[T+5]),v.set(s[T+6],s[T+7],s[T+8]),S.set(a[C+0],a[C+1]),k.set(a[C+2],a[C+3]),y.set(a[C+4],a[C+5]),A.copy(E).add(w).add(v).divideScalar(3);let R=g(A);b(S,C+0,E,R),b(k,C+2,w,R),b(y,C+4,v,R)}}function b(E,w,v,A){A<0&&E.x===1&&(a[w]=E.x-1),v.x===0&&v.z===0&&(a[w]=A/2/Math.PI+.5)}function g(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var xr=class i extends Ds{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var vr=class i extends yt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,f=e/o,u=t/l,m=[],_=[],b=[],g=[];for(let d=0;d<h;d++){let E=d*u-a;for(let w=0;w<c;w++){let v=w*f-s;_.push(v,-E,0),b.push(0,0,1),g.push(w/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<o;E++){let w=E+c*d,v=E+c*(d+1),A=E+1+c*(d+1),S=E+1+c*d;m.push(w,v,S),m.push(v,A,S)}this.setIndex(m),this.setAttribute("position",new ft(_,3)),this.setAttribute("normal",new ft(b,3)),this.setAttribute("uv",new ft(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},br=class i extends yt{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],l=[],c=[],h=[],f=e,u=(t-e)/r,m=new D,_=new Oe;for(let b=0;b<=r;b++){for(let g=0;g<=n;g++){let d=s+g/n*a;m.x=f*Math.cos(d),m.y=f*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,h.push(_.x,_.y)}f+=u}for(let b=0;b<r;b++){let g=b*(n+1);for(let d=0;d<n;d++){let E=d+g,w=E,v=E+n+1,A=E+n+2,S=E+1;o.push(w,v,S),o.push(v,A,S)}}this.setIndex(o),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};function gi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(lc(r))r.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(lc(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Rt(i){let e={};for(let t=0;t<i.length;t++){let n=gi(i[t]);for(let r in n)e[r]=n[r]}return e}function lc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Rh(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function il(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}var Kc={clone:gi,merge:Rt},Ih=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ph=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xt=class extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ih,this.fragmentShader=Ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gi(e.uniforms),this.uniformsGroups=Rh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(r.value);break;case"v2":this.uniforms[n].value=new Oe().fromArray(r.value);break;case"v3":this.uniforms[n].value=new D().fromArray(r.value);break;case"v4":this.uniforms[n].value=new st().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Pe().fromArray(r.value);break;case"m4":this.uniforms[n].value=new rt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ns=class extends Xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Us=class extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fs=class extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function hs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var $n=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Os=class extends $n{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:So,endingEnd:So}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Eo:s=e,o=2*t-n;break;case To:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Eo:a=e,l=2*n-t;break;case To:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,m=this._weightNext,_=(n-t)/(r-t),b=_*_,g=b*_,d=-u*g+2*u*b-u*_,E=(1+u)*g+(-1.5-2*u)*b+(-.5+u)*_+1,w=(-1-m)*g+(1.5+m)*b+.5*_,v=m*g-m*b;for(let A=0;A!==o;++A)s[A]=d*a[h+A]+E*a[c+A]+w*a[l+A]+v*a[f+A];return s}},Bs=class extends $n{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(r-t),f=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*f+a[l+u]*h;return s}},zs=class extends $n{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Vs=class extends $n{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let _=(n-t)/(r-t),b=1-_;for(let g=0;g!==o;++g)s[g]=a[c+g]*b+a[l+g]*_;return s}let u=o*2,m=e-1;for(let _=0;_!==o;++_){let b=a[c+_],g=a[l+_],d=m*u+_*2,E=f[d],w=f[d+1],v=e*u+_*2,A=h[v],S=h[v+1],k=(n-t)/(r-t),y,T,C,R,U;for(let q=0;q<8;q++){y=k*k,T=y*k,C=1-k,R=C*C,U=R*C;let B=U*t+3*R*k*E+3*C*y*A+T*r-n;if(Math.abs(B)<1e-10)break;let X=3*R*(E-t)+6*C*k*(A-E)+3*y*(r-A);if(Math.abs(X)<1e-10)break;k=k-B/X,k=Math.max(0,Math.min(1,k))}s[_]=U*b+3*R*k*w+3*C*y*S+T*g}return s}},qt=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=hs(t,this.TimeBufferType),this.values=hs(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:hs(e.times,Array),values:hs(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Os(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Vs(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case sr:t=this.InterpolantFactoryMethodDiscrete;break;case As:t=this.InterpolantFactoryMethodLinear;break;case ps:t=this.InterpolantFactoryMethodSmooth;break;case Mo:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return we("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sr;case this.InterpolantFactoryMethodLinear:return As;case this.InterpolantFactoryMethodSmooth:return ps;case this.InterpolantFactoryMethodBezier:return Mo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Re("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Re("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Re("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Re("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Ju(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){Re("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ps,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(r)l=!0;else{let f=o*n,u=f-n,m=f+n;for(let _=0;_!==n;++_){let b=t[f+_];if(b!==t[u+_]||b!==t[m+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,u=a*n;for(let m=0;m!==n;++m)t[u+m]=t[f+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};qt.prototype.ValueTypeName="";qt.prototype.TimeBufferType=Float32Array;qt.prototype.ValueBufferType=Float32Array;qt.prototype.DefaultInterpolation=As;var jn=class extends qt{constructor(e,t,n){super(e,t,n)}};jn.prototype.ValueTypeName="bool";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=sr;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Gs=class extends qt{constructor(e,t,n,r){super(e,t,n,r)}};Gs.prototype.ValueTypeName="color";var Hs=class extends qt{constructor(e,t,n,r){super(e,t,n,r)}};Hs.prototype.ValueTypeName="number";var Ws=class extends $n{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)gn.slerpFlat(s,0,a,c-o,a,c,l);return s}},Mr=class extends qt{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ws(this.times,this.values,this.getValueSize(),e)}};Mr.prototype.ValueTypeName="quaternion";Mr.prototype.InterpolantFactoryMethodSmooth=void 0;var Qn=class extends qt{constructor(e,t,n){super(e,t,n)}};Qn.prototype.ValueTypeName="string";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=sr;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;var Xs=class extends qt{constructor(e,t,n,r){super(e,t,n,r)}};Xs.prototype.ValueTypeName="vector";var qs=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let m=c[f],_=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},$c=new qs,Ys=class{constructor(e){this.manager=e!==void 0?e:$c,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ys.DEFAULT_MATERIAL_NAME="__DEFAULT";var ds=new D,fs=new gn,hn=new D,Sr=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ds,fs,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ds,fs,hn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ds,fs,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ds,fs,hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Hn=new D,cc=new Oe,uc=new Oe,Ct=class extends Sr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Fi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fi*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z)}getViewSize(e,t){return this.getViewBounds(e,cc,uc),t.subVectors(uc,cc)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ir*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Er=class extends Sr{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Pi=-90,Li=1,Zs=class extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ct(Pi,Li,e,t);r.layers=this.layers,this.add(r);let s=new Ct(Pi,Li,e,t);s.layers=this.layers,this.add(s);let a=new Ct(Pi,Li,e,t);a.layers=this.layers,this.add(a);let o=new Ct(Pi,Li,e,t);o.layers=this.layers,this.add(o);let l=new Ct(Pi,Li,e,t);l.layers=this.layers,this.add(l);let c=new Ct(Pi,Li,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===nn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Js=class extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var rl="\\[\\]\\.:\\/",Lh=new RegExp("["+rl+"]","g"),sl="[^"+rl+"]",Dh="[^"+rl.replace("\\.","")+"]",Nh=/((?:WC+[\/:])*)/.source.replace("WC",sl),Uh=/(WCOD+)?/.source.replace("WCOD",Dh),Fh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sl),Oh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sl),Bh=new RegExp("^"+Nh+Uh+Fh+Oh+"$"),zh=["material","materials","bones","map"],Co=class{constructor(e,t,n){let r=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},it=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lh,"")}static parseTrackName(e){let t=Bh.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);zh.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){we("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Re("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Re("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Re("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Re("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Re("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;Re("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};it.Composite=Co;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Og=new Float32Array(1);var hc=new rt,Tr=class{constructor(e,t,n=0,r=1/0){this.ray=new pi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Bi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Re("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hc),this}intersectObject(e,t=!0,n=[]){return Ro(e,this,n,t),n.sort(dc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ro(e[r],this,n,t);return n.sort(dc),n}};function dc(i,e){return i.distance-e.distance}function Ro(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)Ro(s[a],e,t,!0)}}var hl=class hl{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};hl.prototype.isMatrix2=!0;var Io=hl;function al(i,e,t,n){let r=Vh(n);switch(t){case Jo:return i*e;case $o:return i*e/r.components*r.byteLength;case ia:return i*e/r.components*r.byteLength;case ii:return i*e*2/r.components*r.byteLength;case ra:return i*e*2/r.components*r.byteLength;case Ko:return i*e*3/r.components*r.byteLength;case $t:return i*e*4/r.components*r.byteLength;case sa:return i*e*4/r.components*r.byteLength;case Cr:case Rr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ir:case Pr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oa:case ca:return Math.max(i,16)*Math.max(e,8)/4;case aa:case la:return Math.max(i,8)*Math.max(e,8)/2;case ua:case ha:case fa:case pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case da:case Lr:case ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ya:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _a:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case va:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ba:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case wa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ca:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ra:case Ia:case Pa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case La:case Da:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Dr:case Na:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vh(i){switch(i){case Yt:case Xo:return{byteLength:1,components:1};case Wi:case qo:case _n:return{byteLength:2,components:1};case ta:case na:return{byteLength:2,components:4};case sn:case ea:case an:return{byteLength:4,components:1};case Yo:case Zo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function vu(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Hh(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<f.length;m++){let _=f[u],b=f[m];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++u,f[u]=b)}f.length=u+1;for(let m=0,_=f.length;m<_;m++){let b=f[m];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Wh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xh=`#ifdef USE_ALPHAHASH
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
#endif`,qh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kh=`#ifdef USE_AOMAP
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
#endif`,$h=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jh=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Qh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,id=`#ifdef USE_IRIDESCENCE
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
#endif`,rd=`#ifdef USE_BUMPMAP
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
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ud=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fd=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,pd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,md=`vec3 transformedNormal = objectNormal;
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
#endif`,gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vd="gl_FragColor = linearToOutputTexel( gl_FragColor );",bd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Md=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ed=`#ifdef USE_ENVMAP
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
#endif`,Td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Id=`#ifdef USE_GRADIENTMAP
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
}`,Pd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ld=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nd=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,Ud=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,Fd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Gd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hd=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,Xd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Yd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$d=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ef=`#if defined( USE_POINTS_UV )
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
#endif`,tf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,af=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,of=`#ifdef USE_MORPHTARGETS
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
#endif`,lf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,uf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,df=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ff=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pf=`#ifdef USE_NORMALMAP
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
#endif`,mf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_f=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ef=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Af=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,kf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,Rf=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,If=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pf=`#ifdef USE_SKINNING
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
#endif`,Lf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Df=`#ifdef USE_SKINNING
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
#endif`,Nf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ff=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Of=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bf=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zf=`#ifdef USE_TRANSMISSION
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
#endif`,Vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qf=`uniform sampler2D t2D;
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
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$f=`#include <common>
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
}`,jf=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qf=`#define DISTANCE
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
}`,ep=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,np=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`uniform float scale;
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
}`,rp=`uniform vec3 diffuse;
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
}`,sp=`#include <common>
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
}`,ap=`uniform vec3 diffuse;
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
}`,op=`#define LAMBERT
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
}`,lp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,cp=`#define MATCAP
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
}`,up=`#define MATCAP
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
}`,hp=`#define NORMAL
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
}`,dp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fp=`#define PHONG
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
}`,pp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,mp=`#define STANDARD
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
}`,gp=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,yp=`#define TOON
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
}`,_p=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,xp=`uniform float size;
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
}`,vp=`uniform vec3 diffuse;
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
}`,bp=`#include <common>
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
}`,Mp=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Sp=`uniform float rotation;
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
}`,Ep=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:Wh,alphahash_pars_fragment:Xh,alphamap_fragment:qh,alphamap_pars_fragment:Yh,alphatest_fragment:Zh,alphatest_pars_fragment:Jh,aomap_fragment:Kh,aomap_pars_fragment:$h,batching_pars_vertex:jh,batching_vertex:Qh,begin_vertex:ed,beginnormal_vertex:td,bsdfs:nd,iridescence_fragment:id,bumpmap_pars_fragment:rd,clipping_planes_fragment:sd,clipping_planes_pars_fragment:ad,clipping_planes_pars_vertex:od,clipping_planes_vertex:ld,color_fragment:cd,color_pars_fragment:ud,color_pars_vertex:hd,color_vertex:dd,common:fd,cube_uv_reflection_fragment:pd,defaultnormal_vertex:md,displacementmap_pars_vertex:gd,displacementmap_vertex:yd,emissivemap_fragment:_d,emissivemap_pars_fragment:xd,colorspace_fragment:vd,colorspace_pars_fragment:bd,envmap_fragment:Md,envmap_common_pars_fragment:Sd,envmap_pars_fragment:Ed,envmap_pars_vertex:Td,envmap_physical_pars_fragment:Ud,envmap_vertex:Ad,fog_vertex:wd,fog_pars_vertex:kd,fog_fragment:Cd,fog_pars_fragment:Rd,gradientmap_pars_fragment:Id,lightmap_pars_fragment:Pd,lights_lambert_fragment:Ld,lights_lambert_pars_fragment:Dd,lights_pars_begin:Nd,lights_toon_fragment:Fd,lights_toon_pars_fragment:Od,lights_phong_fragment:Bd,lights_phong_pars_fragment:zd,lights_physical_fragment:Vd,lights_physical_pars_fragment:Gd,lights_fragment_begin:Hd,lights_fragment_maps:Wd,lights_fragment_end:Xd,lightprobes_pars_fragment:qd,logdepthbuf_fragment:Yd,logdepthbuf_pars_fragment:Zd,logdepthbuf_pars_vertex:Jd,logdepthbuf_vertex:Kd,map_fragment:$d,map_pars_fragment:jd,map_particle_fragment:Qd,map_particle_pars_fragment:ef,metalnessmap_fragment:tf,metalnessmap_pars_fragment:nf,morphinstance_vertex:rf,morphcolor_vertex:sf,morphnormal_vertex:af,morphtarget_pars_vertex:of,morphtarget_vertex:lf,normal_fragment_begin:cf,normal_fragment_maps:uf,normal_pars_fragment:hf,normal_pars_vertex:df,normal_vertex:ff,normalmap_pars_fragment:pf,clearcoat_normal_fragment_begin:mf,clearcoat_normal_fragment_maps:gf,clearcoat_pars_fragment:yf,iridescence_pars_fragment:_f,opaque_fragment:xf,packing:vf,premultiplied_alpha_fragment:bf,project_vertex:Mf,dithering_fragment:Sf,dithering_pars_fragment:Ef,roughnessmap_fragment:Tf,roughnessmap_pars_fragment:Af,shadowmap_pars_fragment:wf,shadowmap_pars_vertex:kf,shadowmap_vertex:Cf,shadowmask_pars_fragment:Rf,skinbase_vertex:If,skinning_pars_vertex:Pf,skinning_vertex:Lf,skinnormal_vertex:Df,specularmap_fragment:Nf,specularmap_pars_fragment:Uf,tonemapping_fragment:Ff,tonemapping_pars_fragment:Of,transmission_fragment:Bf,transmission_pars_fragment:zf,uv_pars_fragment:Vf,uv_pars_vertex:Gf,uv_vertex:Hf,worldpos_vertex:Wf,background_vert:Xf,background_frag:qf,backgroundCube_vert:Yf,backgroundCube_frag:Zf,cube_vert:Jf,cube_frag:Kf,depth_vert:$f,depth_frag:jf,distance_vert:Qf,distance_frag:ep,equirect_vert:tp,equirect_frag:np,linedashed_vert:ip,linedashed_frag:rp,meshbasic_vert:sp,meshbasic_frag:ap,meshlambert_vert:op,meshlambert_frag:lp,meshmatcap_vert:cp,meshmatcap_frag:up,meshnormal_vert:hp,meshnormal_frag:dp,meshphong_vert:fp,meshphong_frag:pp,meshphysical_vert:mp,meshphysical_frag:gp,meshtoon_vert:yp,meshtoon_frag:_p,points_vert:xp,points_frag:vp,shadow_vert:bp,shadow_frag:Mp,sprite_vert:Sp,sprite_frag:Ep},ue={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},vn={basic:{uniforms:Rt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Rt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Rt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Rt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Rt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Rt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Rt([ue.points,ue.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Rt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Rt([ue.common,ue.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Rt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Rt([ue.sprite,ue.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:Rt([ue.common,ue.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:Rt([ue.lights,ue.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};vn.physical={uniforms:Rt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var Oa={r:0,b:0,g:0},Tp=new rt,bu=new Pe;bu.set(-1,0,0,0,1,0,0,0,1);function Ap(i,e,t,n,r,s){let a=new Be(0),o=r===!0?0:1,l,c,h=null,f=0,u=null;function m(E){let w=E.isScene===!0?E.background:null;if(w&&w.isTexture){let v=E.backgroundBlurriness>0;w=e.get(w,v)}return w}function _(E){let w=!1,v=m(E);v===null?g(a,o):v&&v.isColor&&(g(v,1),w=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(E,w){let v=m(w);v&&(v.isCubeTexture||v.mapping===wr)?(c===void 0&&(c=new Lt(new Gi(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:gi(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,S,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Tp.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bu),c.material.toneMapped=Ve.getTransfer(v.colorSpace)!==Je,(h!==v||f!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,u=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Lt(new vr(2,2),new Xt({name:"BackgroundMaterial",uniforms:gi(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Ve.getTransfer(v.colorSpace)!==Je,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,u=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function g(E,w){E.getRGB(Oa,il(i)),t.buffers.color.setClear(Oa.r,Oa.g,Oa.b,w,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,w=1){a.set(E),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,g(a,o)},render:_,addToRenderList:b,dispose:d}}function wp(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null),s=r,a=!1;function o(R,U,q,J,B){let X=!1,G=f(R,J,q,U);s!==G&&(s=G,c(s.object)),X=m(R,J,q,B),X&&_(R,J,q,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,v(R,U,q,J),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function f(R,U,q,J){let B=J.wireframe===!0,X=n[U.id];X===void 0&&(X={},n[U.id]=X);let G=R.isInstancedMesh===!0?R.id:0,$=X[G];$===void 0&&($={},X[G]=$);let Q=$[q.id];Q===void 0&&(Q={},$[q.id]=Q);let he=Q[B];return he===void 0&&(he=u(l()),Q[B]=he),he}function u(R){let U=[],q=[],J=[];for(let B=0;B<t;B++)U[B]=0,q[B]=0,J[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:q,attributeDivisors:J,object:R,attributes:{},index:null}}function m(R,U,q,J){let B=s.attributes,X=U.attributes,G=0,$=q.getAttributes();for(let Q in $)if($[Q].location>=0){let me=B[Q],_e=X[Q];if(_e===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(_e=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(_e=R.instanceColor)),me===void 0||me.attribute!==_e||_e&&me.data!==_e.data)return!0;G++}return s.attributesNum!==G||s.index!==J}function _(R,U,q,J){let B={},X=U.attributes,G=0,$=q.getAttributes();for(let Q in $)if($[Q].location>=0){let me=X[Q];me===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(me=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(me=R.instanceColor));let _e={};_e.attribute=me,me&&me.data&&(_e.data=me.data),B[Q]=_e,G++}s.attributes=B,s.attributesNum=G,s.index=J}function b(){let R=s.newAttributes;for(let U=0,q=R.length;U<q;U++)R[U]=0}function g(R){d(R,0)}function d(R,U){let q=s.newAttributes,J=s.enabledAttributes,B=s.attributeDivisors;q[R]=1,J[R]===0&&(i.enableVertexAttribArray(R),J[R]=1),B[R]!==U&&(i.vertexAttribDivisor(R,U),B[R]=U)}function E(){let R=s.newAttributes,U=s.enabledAttributes;for(let q=0,J=U.length;q<J;q++)U[q]!==R[q]&&(i.disableVertexAttribArray(q),U[q]=0)}function w(R,U,q,J,B,X,G){G===!0?i.vertexAttribIPointer(R,U,q,B,X):i.vertexAttribPointer(R,U,q,J,B,X)}function v(R,U,q,J){b();let B=J.attributes,X=q.getAttributes(),G=U.defaultAttributeValues;for(let $ in X){let Q=X[$];if(Q.location>=0){let he=B[$];if(he===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(he=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(he=R.instanceColor)),he!==void 0){let me=he.normalized,_e=he.itemSize,qe=e.get(he);if(qe===void 0)continue;let at=qe.buffer,Ye=qe.type,K=qe.bytesPerElement,ie=Ye===i.INT||Ye===i.UNSIGNED_INT||he.gpuType===ea;if(he.isInterleavedBufferAttribute){let ee=he.data,Ie=ee.stride,Le=he.offset;if(ee.isInstancedInterleavedBuffer){for(let ke=0;ke<Q.locationSize;ke++)d(Q.location+ke,ee.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ke=0;ke<Q.locationSize;ke++)g(Q.location+ke);i.bindBuffer(i.ARRAY_BUFFER,at);for(let ke=0;ke<Q.locationSize;ke++)w(Q.location+ke,_e/Q.locationSize,Ye,me,Ie*K,(Le+_e/Q.locationSize*ke)*K,ie)}else{if(he.isInstancedBufferAttribute){for(let ee=0;ee<Q.locationSize;ee++)d(Q.location+ee,he.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ee=0;ee<Q.locationSize;ee++)g(Q.location+ee);i.bindBuffer(i.ARRAY_BUFFER,at);for(let ee=0;ee<Q.locationSize;ee++)w(Q.location+ee,_e/Q.locationSize,Ye,me,_e*K,_e/Q.locationSize*ee*K,ie)}}else if(G!==void 0){let me=G[$];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(Q.location,me);break;case 3:i.vertexAttrib3fv(Q.location,me);break;case 4:i.vertexAttrib4fv(Q.location,me);break;default:i.vertexAttrib1fv(Q.location,me)}}}}E()}function A(){T();for(let R in n){let U=n[R];for(let q in U){let J=U[q];for(let B in J){let X=J[B];for(let G in X)h(X[G].object),delete X[G];delete J[B]}}delete n[R]}}function S(R){if(n[R.id]===void 0)return;let U=n[R.id];for(let q in U){let J=U[q];for(let B in J){let X=J[B];for(let G in X)h(X[G].object),delete X[G];delete J[B]}}delete n[R.id]}function k(R){for(let U in n){let q=n[U];for(let J in q){let B=q[J];if(B[R.id]===void 0)continue;let X=B[R.id];for(let G in X)h(X[G].object),delete X[G];delete B[R.id]}}}function y(R){for(let U in n){let q=n[U],J=R.isInstancedMesh===!0?R.id:0,B=q[J];if(B!==void 0){for(let X in B){let G=B[X];for(let $ in G)h(G[$].object),delete G[$];delete B[X]}delete q[J],Object.keys(q).length===0&&delete n[U]}}}function T(){C(),a=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:k,initAttributes:b,enableAttribute:g,disableUnusedAttributes:E}}function kp(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];t.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Cp(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let k=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(k){return!(k!==$t&&n.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(k){let y=k===_n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Yt&&n.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==an&&!y)}function l(k){if(k==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(we("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&we("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:v,maxSamples:A,samples:S}}function Rp(i){let e=this,t=null,n=0,r=!1,s=!1,a=new dn,o=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let m=f.length!==0||u||n!==0||r;return r=u,n=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,m){let _=f.clippingPlanes,b=f.clipIntersection,g=f.clipShadows,d=i.get(f);if(!r||_===null||_.length===0||s&&!g)s?h(null):c();else{let E=s?0:n,w=E*4,v=d.clippingState||null;l.value=v,v=h(_,u,w,m);for(let A=0;A!==w;++A)v[A]=t[A];d.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,m,_){let b=f!==null?f.length:0,g=null;if(b!==0){if(g=l.value,_!==!0||g===null){let d=m+b*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<d)&&(g=new Float32Array(d));for(let w=0,v=m;w!==b;++w,v+=4)a.copy(f[w]).applyMatrix4(E,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}var ri=4,jc=[.125,.215,.35,.446,.526,.582],yi=20,Ip=256,Nr=new Er,Qc=new Be,dl=null,fl=0,pl=0,ml=!1,Pp=new D,za=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=Pp}=s;dl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dl,fl,pl),this._renderer.xr.enabled=ml,e.scissorTest=!1,Yi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ei||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:_n,format:$t,colorSpace:ar,depthBuffer:!1},r=eu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eu(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Lp(s)),this._blurMaterial=Np(s,e,t),this._ggxMaterial=Dp(s,e,t)}return r}_compileMaterial(e){let t=new Lt(new yt,e);this._renderer.compile(t,Nr)}_sceneToCubeUV(e,t,n,r,s){let l=new Ct(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,m=f.toneMapping;f.getClearColor(Qc),f.toneMapping=rn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Lt(new Gi,new Jn({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,d=!1,E=e.background;E?E.isColor&&(g.color.copy(E),e.background=null,d=!0):(g.color.copy(Qc),d=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[w],s.y,s.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[w]));let A=this._cubeSize;Yi(r,v*A,w>2?A:0,A,A),f.setRenderTarget(r),d&&f.render(b,l),f.render(e,l)}f.toneMapping=m,f.autoClear=u,e.background=E}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===ei||e.mapping===mi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tu());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;Yi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Nr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=0+c*1.25,m=f*u,{_lodMax:_}=this,b=this._sizeLods[n],g=3*b*(n>_-ri?n-_+ri:0),d=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=_-t,Yi(s,g,d,3*b,2*b),r.setRenderTarget(s),r.render(o,Nr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,Yi(e,g,d,3*b,2*b),r.setRenderTarget(e),r.render(o,Nr)}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");let h=3,f=this._lodMeshes[r];f.material=c;let u=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*yi-1),b=s/_,g=isFinite(s)?1+Math.floor(h*b):yi;g>yi&&we(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${yi}`);let d=[],E=0;for(let k=0;k<yi;++k){let y=k/b,T=Math.exp(-y*y/2);d.push(T),k===0?E+=T:k<g&&(E+=2*T)}for(let k=0;k<d.length;k++)d[k]=d[k]/E;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=d,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:w}=this;u.dTheta.value=_,u.mipInt.value=w-n;let v=this._sizeLods[r],A=3*v*(r>w-ri?r-w+ri:0),S=4*(this._cubeSize-v);Yi(t,A,S,3*v,2*v),l.setRenderTarget(t),l.render(f,Nr)}};function Lp(i){let e=[],t=[],n=[],r=i,s=i-ri+1+jc.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);e.push(o);let l=1/o;a>i-ri?l=jc[a-i+ri-1]:a===0&&(l=0),t.push(l);let c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,_=6,b=3,g=2,d=1,E=new Float32Array(b*_*m),w=new Float32Array(g*_*m),v=new Float32Array(d*_*m);for(let S=0;S<m;S++){let k=S%3*2/3-1,y=S>2?0:-1,T=[k,y,0,k+2/3,y,0,k+2/3,y+1,0,k,y,0,k+2/3,y+1,0,k,y+1,0];E.set(T,b*_*S),w.set(u,g*_*S);let C=[S,S,S,S,S,S];v.set(C,d*_*S)}let A=new yt;A.setAttribute("position",new Ht(E,b)),A.setAttribute("uv",new Ht(w,g)),A.setAttribute("faceIndex",new Ht(v,d)),n.push(new Lt(A,null)),r>ri&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function eu(i,e,t){let n=new Wt(i,e,t);return n.texture.mapping=wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Dp(i,e,t){return new Xt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ip,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ha(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Np(i,e,t){let n=new Float32Array(yi),r=new D(0,1,0);return new Xt({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ha(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function tu(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ha(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function nu(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Ha(){return`

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
	`}var Va=class extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new yr(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Gi(5,5,5),s=new Xt({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:yn});s.uniforms.tEquirect.value=t;let a=new Lt(r,s),o=t.minFilter;return t.minFilter===ti&&(t.minFilter=Tt),new Zs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};function Up(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,m=!1){return u==null?null:m?a(u):s(u)}function s(u){if(u&&u.isTexture){let m=u.mapping;if(m===$s||m===js)if(e.has(u)){let _=e.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let b=new Va(_.height);return b.fromEquirectangularTexture(i,u),e.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let m=u.mapping,_=m===$s||m===js,b=m===ei||m===mi;if(_||b){let g=t.get(u),d=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new za(i)),g=_?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let E=u.image;return _&&E&&E.height>0||b&&E&&l(E)?(n===null&&(n=new za(i)),g=_?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,m){return m===$s?u.mapping=ei:m===js&&(u.mapping=mi),u}function l(u){let m=0,_=6;for(let b=0;b<_;b++)u[b]!==void 0&&m++;return m===_}function c(u){let m=u.target;m.removeEventListener("dispose",c);let _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function Fp(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&hi("WebGLRenderer: "+n+" extension not supported."),r}}}function Op(i,e,t,n){let r={},s=new WeakMap;function a(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete r[u.id];let m=s.get(u);m&&(e.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(f){let u=f.attributes;for(let m in u)e.update(u[m],i.ARRAY_BUFFER)}function c(f){let u=[],m=f.index,_=f.attributes.position,b=0;if(_===void 0)return;if(m!==null){let E=m.array;b=m.version;for(let w=0,v=E.length;w<v;w+=3){let A=E[w+0],S=E[w+1],k=E[w+2];u.push(A,S,S,k,k,A)}}else{let E=_.array;b=_.version;for(let w=0,v=E.length/3-1;w<v;w+=3){let A=w+0,S=w+1,k=w+2;u.push(A,S,S,k,k,A)}}let g=new(_.count>=65535?pr:fr)(u,1);g.version=b;let d=s.get(f);d&&e.remove(d),s.set(f,g)}function h(f){let u=s.get(f);if(u){let m=f.index;m!==null&&u.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Bp(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,s,f*a),t.update(u,n,1)}function c(f,u,m){m!==0&&(i.drawElementsInstanced(n,u,s,f*a,m),t.update(u,n,m))}function h(f,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,f,0,m);let b=0;for(let g=0;g<m;g++)b+=u[g];t.update(b,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function zp(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Re("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Vp(i,e,t){let n=new WeakMap,r=new st;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let T=function(){k.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],w=0;m===!0&&(w=1),_===!0&&(w=2),b===!0&&(w=3);let v=o.attributes.position.count*w,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let S=new Float32Array(v*A*4*f),k=new ur(S,v,A,f);k.type=an,k.needsUpdate=!0;let y=w*4;for(let C=0;C<f;C++){let R=g[C],U=d[C],q=E[C],J=v*A*4*C;for(let B=0;B<R.count;B++){let X=B*y;m===!0&&(r.fromBufferAttribute(R,B),S[J+X+0]=r.x,S[J+X+1]=r.y,S[J+X+2]=r.z,S[J+X+3]=0),_===!0&&(r.fromBufferAttribute(U,B),S[J+X+4]=r.x,S[J+X+5]=r.y,S[J+X+6]=r.z,S[J+X+7]=0),b===!0&&(r.fromBufferAttribute(q,B),S[J+X+8]=r.x,S[J+X+9]=r.y,S[J+X+10]=r.z,S[J+X+11]=q.itemSize===4?r.w:1)}}u={count:f,texture:k,size:new Oe(v,A)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let b=0;b<c.length;b++)m+=c[b];let _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function Gp(i,e,t,n,r){let s=new WeakMap;function a(c){let h=r.render.frame,f=c.geometry,u=e.get(c,f);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return u}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Hp={[Fo]:"LINEAR_TONE_MAPPING",[Oo]:"REINHARD_TONE_MAPPING",[Bo]:"CINEON_TONE_MAPPING",[zo]:"ACES_FILMIC_TONE_MAPPING",[Go]:"AGX_TONE_MAPPING",[Ho]:"NEUTRAL_TONE_MAPPING",[Vo]:"CUSTOM_TONE_MAPPING"};function Wp(i,e,t,n,r,s){let a=new Wt(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,depthTexture:r?new Pn(e,t):void 0}),o=new Wt(e,t,{type:_n,depthBuffer:!1,stencilBuffer:!1}),l=new yt;l.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ft([0,2,0,0,2,0],2));let c=new Ns({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Lt(l,c),f=new Er(-1,1,1,-1,0,1),u=null,m=null,_=!1,b,g=null,d=[],E=!1;this.setSize=function(w,v){a.setSize(w,v),o.setSize(w,v);for(let A=0;A<d.length;A++){let S=d[A];S.setSize&&S.setSize(w,v)}},this.setEffects=function(w){d=w,E=d.length>0&&d[0].isRenderPass===!0;let v=a.width,A=a.height;for(let S=0;S<d.length;S++){let k=d[S];k.setSize&&k.setSize(v,A)}},this.begin=function(w,v){if(_||w.toneMapping===rn&&d.length===0)return!1;if(g=v,v!==null){let A=v.width,S=v.height;(a.width!==A||a.height!==S)&&this.setSize(A,S)}return E===!1&&w.setRenderTarget(a),b=w.toneMapping,w.toneMapping=rn,!0},this.hasRenderPass=function(){return E},this.end=function(w,v){w.toneMapping=b,_=!0;let A=a,S=o;for(let k=0;k<d.length;k++){let y=d[k];if(y.enabled!==!1&&(y.render(w,S,A,v),y.needsSwap!==!1)){let T=A;A=S,S=T}}if(u!==w.outputColorSpace||m!==w.toneMapping){u=w.outputColorSpace,m=w.toneMapping,c.defines={},Ve.getTransfer(u)===Je&&(c.defines.SRGB_TRANSFER="");let k=Hp[m];k&&(c.defines[k]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,w.setRenderTarget(g),w.render(h,f),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var Mu=new Ut,_l=new Pn(1,1),Su=new ur,Eu=new Cs,Tu=new yr,iu=[],ru=[],su=new Float32Array(16),au=new Float32Array(9),ou=new Float32Array(4);function Ji(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=iu[r];if(s===void 0&&(s=new Float32Array(r),iu[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Wa(i,e){let t=ru[e];t===void 0&&(t=new Int32Array(e),ru[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Xp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function qp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function Yp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function Zp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function Jp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;ou.set(n),i.uniformMatrix2fv(this.addr,!1,ou),vt(t,n)}}function Kp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;au.set(n),i.uniformMatrix3fv(this.addr,!1,au),vt(t,n)}}function $p(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;su.set(n),i.uniformMatrix4fv(this.addr,!1,su),vt(t,n)}}function jp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Qp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),vt(t,e)}}function em(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),vt(t,e)}}function tm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),vt(t,e)}}function nm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function im(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),vt(t,e)}}function rm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),vt(t,e)}}function sm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),vt(t,e)}}function am(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(_l.compareFunction=t.isReversedDepthBuffer()?Fa:Ua,s=_l):s=Mu,t.setTexture2D(e||s,r)}function om(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Eu,r)}function lm(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Tu,r)}function cm(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Su,r)}function um(i){switch(i){case 5126:return Xp;case 35664:return qp;case 35665:return Yp;case 35666:return Zp;case 35674:return Jp;case 35675:return Kp;case 35676:return $p;case 5124:case 35670:return jp;case 35667:case 35671:return Qp;case 35668:case 35672:return em;case 35669:case 35673:return tm;case 5125:return nm;case 36294:return im;case 36295:return rm;case 36296:return sm;case 35678:case 36198:case 36298:case 36306:case 35682:return am;case 35679:case 36299:case 36307:return om;case 35680:case 36300:case 36308:case 36293:return lm;case 36289:case 36303:case 36311:case 36292:return cm}}function hm(i,e){i.uniform1fv(this.addr,e)}function dm(i,e){let t=Ji(e,this.size,2);i.uniform2fv(this.addr,t)}function fm(i,e){let t=Ji(e,this.size,3);i.uniform3fv(this.addr,t)}function pm(i,e){let t=Ji(e,this.size,4);i.uniform4fv(this.addr,t)}function mm(i,e){let t=Ji(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function gm(i,e){let t=Ji(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ym(i,e){let t=Ji(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function _m(i,e){i.uniform1iv(this.addr,e)}function xm(i,e){i.uniform2iv(this.addr,e)}function vm(i,e){i.uniform3iv(this.addr,e)}function bm(i,e){i.uniform4iv(this.addr,e)}function Mm(i,e){i.uniform1uiv(this.addr,e)}function Sm(i,e){i.uniform2uiv(this.addr,e)}function Em(i,e){i.uniform3uiv(this.addr,e)}function Tm(i,e){i.uniform4uiv(this.addr,e)}function Am(i,e,t){let n=this.cache,r=e.length,s=Wa(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=_l:a=Mu;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function wm(i,e,t){let n=this.cache,r=e.length,s=Wa(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Eu,s[a])}function km(i,e,t){let n=this.cache,r=e.length,s=Wa(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Tu,s[a])}function Cm(i,e,t){let n=this.cache,r=e.length,s=Wa(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Su,s[a])}function Rm(i){switch(i){case 5126:return hm;case 35664:return dm;case 35665:return fm;case 35666:return pm;case 35674:return mm;case 35675:return gm;case 35676:return ym;case 5124:case 35670:return _m;case 35667:case 35671:return xm;case 35668:case 35672:return vm;case 35669:case 35673:return bm;case 5125:return Mm;case 36294:return Sm;case 36295:return Em;case 36296:return Tm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return wm;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return Cm}}var xl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=um(t.type)}},vl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rm(t.type)}},bl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},gl=/(\w+)(\])?(\[|\.)?/g;function lu(i,e){i.seq.push(e),i.map[e.id]=e}function Im(i,e,t){let n=i.name,r=n.length;for(gl.lastIndex=0;;){let s=gl.exec(n),a=gl.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){lu(t,c===void 0?new xl(o,i,e):new vl(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new bl(o),lu(t,f)),t=f}}}var Zi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Im(o,l,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function cu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Pm=37297,Lm=0;function Dm(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var uu=new Pe;function Nm(i){Ve._getMatrix(uu,Ve.workingColorSpace,i);let e=`mat3( ${uu.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(i)){case or:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function hu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Dm(i.getShaderSource(e),o)}else return s}function Um(i,e){let t=Nm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Fm={[Fo]:"Linear",[Oo]:"Reinhard",[Bo]:"Cineon",[zo]:"ACESFilmic",[Go]:"AgX",[Ho]:"Neutral",[Vo]:"Custom"};function Om(i,e){let t=Fm[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ba=new D;function Bm(){Ve.getLuminanceCoefficients(Ba);let i=Ba.x.toFixed(4),e=Ba.y.toFixed(4),t=Ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function Vm(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gm(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Fr(i){return i!==""}function du(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(i){return i.replace(Hm,Xm)}var Wm=new Map;function Xm(i,e){let t=Ue[e];if(t===void 0){let n=Wm.get(e);if(n!==void 0)t=Ue[n],we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ml(t)}var qm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pu(i){return i.replace(qm,Ym)}function Ym(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function mu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Zm={[Ar]:"SHADOWMAP_TYPE_PCF",[Hi]:"SHADOWMAP_TYPE_VSM"};function Jm(i){return Zm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Km={[ei]:"ENVMAP_TYPE_CUBE",[mi]:"ENVMAP_TYPE_CUBE",[wr]:"ENVMAP_TYPE_CUBE_UV"};function $m(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Km[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var jm={[mi]:"ENVMAP_MODE_REFRACTION"};function Qm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":jm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var eg={[Uo]:"ENVMAP_BLENDING_MULTIPLY",[Dc]:"ENVMAP_BLENDING_MIX",[Nc]:"ENVMAP_BLENDING_ADD"};function tg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":eg[i.combine]||"ENVMAP_BLENDING_NONE"}function ng(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ig(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Jm(t),c=$m(t),h=Qm(t),f=tg(t),u=ng(t),m=zm(t),_=Vm(s),b=r.createProgram(),g,d,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fr).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fr).join(`
`),d.length>0&&(d+=`
`)):(g=[mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),d=[mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rn?"#define TONE_MAPPING":"",t.toneMapping!==rn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==rn?Om("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Um("linearToOutputTexel",t.outputColorSpace),Bm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fr).join(`
`)),a=Ml(a),a=du(a,t),a=fu(a,t),o=Ml(o),o=du(o,t),o=fu(o,t),a=pu(a),o=pu(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===Qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let w=E+g+a,v=E+d+o,A=cu(r,r.VERTEX_SHADER,w),S=cu(r,r.FRAGMENT_SHADER,v);r.attachShader(b,A),r.attachShader(b,S),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function k(R){if(i.debug.checkShaderErrors){let U=r.getProgramInfoLog(b)||"",q=r.getShaderInfoLog(A)||"",J=r.getShaderInfoLog(S)||"",B=U.trim(),X=q.trim(),G=J.trim(),$=!0,Q=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,A,S);else{let he=hu(r,A,"vertex"),me=hu(r,S,"fragment");Re("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+he+`
`+me)}else B!==""?we("WebGLProgram: Program Info Log:",B):(X===""||G==="")&&(Q=!1);Q&&(R.diagnostics={runnable:$,programLog:B,vertexShader:{log:X,prefix:g},fragmentShader:{log:G,prefix:d}})}r.deleteShader(A),r.deleteShader(S),y=new Zi(r,b),T=Gm(r,b)}let y;this.getUniforms=function(){return y===void 0&&k(this),y};let T;this.getAttributes=function(){return T===void 0&&k(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(b,Pm)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lm++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=A,this.fragmentShader=S,this}var rg=0,Sl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new El(e),t.set(e,n)),n}},El=class{constructor(e){this.id=rg++,this.code=e,this.usedTimes=0}};function sg(i){return i===ii||i===Lr||i===Dr}function ag(i,e,t,n,r,s){let a=new Bi,o=new Sl,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function b(y,T,C,R,U,q){let J=R.fog,B=U.geometry,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,$=e.get(y.envMap||X,G),Q=$&&$.mapping===wr?$.image.height:null,he=m[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&we("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let me=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,_e=me!==void 0?me.length:0,qe=0;B.morphAttributes.position!==void 0&&(qe=1),B.morphAttributes.normal!==void 0&&(qe=2),B.morphAttributes.color!==void 0&&(qe=3);let at,Ye,K,ie;if(he){let xe=vn[he];at=xe.vertexShader,Ye=xe.fragmentShader}else{at=y.vertexShader,Ye=y.fragmentShader;let xe=o.getVertexShaderStage(y),lt=o.getFragmentShaderStage(y);o.update(y,xe,lt),K=xe.id,ie=lt.id}let ee=i.getRenderTarget(),Ie=i.state.buffers.depth.getReversed(),Le=U.isInstancedMesh===!0,ke=U.isBatchedMesh===!0,ut=!!y.map,ze=!!y.matcap,je=!!$,Ze=!!y.aoMap,We=!!y.lightMap,pt=!!y.bumpMap&&y.wireframe===!1,_t=!!y.normalMap,bt=!!y.displacementMap,Et=!!y.emissiveMap,ot=!!y.metalnessMap,mt=!!y.roughnessMap,P=y.anisotropy>0,Nt=y.clearcoat>0,Ke=y.dispersion>0,M=y.iridescence>0,p=y.sheen>0,N=y.transmission>0,z=P&&!!y.anisotropyMap,H=Nt&&!!y.clearcoatMap,te=Nt&&!!y.clearcoatNormalMap,re=Nt&&!!y.clearcoatRoughnessMap,W=M&&!!y.iridescenceMap,Z=M&&!!y.iridescenceThicknessMap,se=p&&!!y.sheenColorMap,Me=p&&!!y.sheenRoughnessMap,ce=!!y.specularMap,ae=!!y.specularColorMap,Ae=!!y.specularIntensityMap,Ce=N&&!!y.transmissionMap,De=N&&!!y.thicknessMap,I=!!y.gradientMap,ne=!!y.alphaMap,Y=y.alphaTest>0,oe=!!y.alphaHash,pe=!!y.extensions,j=rn;y.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(j=i.toneMapping);let be={shaderID:he,shaderType:y.type,shaderName:y.name,vertexShader:at,fragmentShader:Ye,defines:y.defines,customVertexShaderID:K,customFragmentShaderID:ie,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:ke,batchingColor:ke&&U._colorsTexture!==null,instancing:Le,instancingColor:Le&&U.instanceColor!==null,instancingMorph:Le&&U.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ve.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ut,matcap:ze,envMap:je,envMapMode:je&&$.mapping,envMapCubeUVHeight:Q,aoMap:Ze,lightMap:We,bumpMap:pt,normalMap:_t,displacementMap:bt,emissiveMap:Et,normalMapObjectSpace:_t&&y.normalMapType===Oc,normalMapTangentSpace:_t&&y.normalMapType===jo,packedNormalMap:_t&&y.normalMapType===jo&&sg(y.normalMap.format),metalnessMap:ot,roughnessMap:mt,anisotropy:P,anisotropyMap:z,clearcoat:Nt,clearcoatMap:H,clearcoatNormalMap:te,clearcoatRoughnessMap:re,dispersion:Ke,iridescence:M,iridescenceMap:W,iridescenceThicknessMap:Z,sheen:p,sheenColorMap:se,sheenRoughnessMap:Me,specularMap:ce,specularColorMap:ae,specularIntensityMap:Ae,transmission:N,transmissionMap:Ce,thicknessMap:De,gradientMap:I,opaque:y.transparent===!1&&y.blending===di&&y.alphaToCoverage===!1,alphaMap:ne,alphaTest:Y,alphaHash:oe,combine:y.combine,mapUv:ut&&_(y.map.channel),aoMapUv:Ze&&_(y.aoMap.channel),lightMapUv:We&&_(y.lightMap.channel),bumpMapUv:pt&&_(y.bumpMap.channel),normalMapUv:_t&&_(y.normalMap.channel),displacementMapUv:bt&&_(y.displacementMap.channel),emissiveMapUv:Et&&_(y.emissiveMap.channel),metalnessMapUv:ot&&_(y.metalnessMap.channel),roughnessMapUv:mt&&_(y.roughnessMap.channel),anisotropyMapUv:z&&_(y.anisotropyMap.channel),clearcoatMapUv:H&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:se&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(y.sheenRoughnessMap.channel),specularMapUv:ce&&_(y.specularMap.channel),specularColorMapUv:ae&&_(y.specularColorMap.channel),specularIntensityMapUv:Ae&&_(y.specularIntensityMap.channel),transmissionMapUv:Ce&&_(y.transmissionMap.channel),thicknessMapUv:De&&_(y.thicknessMap.channel),alphaMapUv:ne&&_(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(_t||P),vertexNormals:!!B.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(ut||ne),fog:!!J,useFog:y.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||B.attributes.normal===void 0&&_t===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ie,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:qe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:j,decodeVideoTexture:ut&&y.map.isVideoTexture===!0&&Ve.getTransfer(y.map.colorSpace)===Je,decodeVideoTextureEmissive:Et&&y.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(y.emissiveMap.colorSpace)===Je,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Kt,flipSided:y.side===Dt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:pe&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&y.extensions.multiDraw===!0||ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function g(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)T.push(C),T.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(d(T,y),E(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function d(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function E(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function w(y){let T=m[y.type],C;if(T){let R=vn[T];C=Kc.clone(R.uniforms)}else C=y.uniforms;return C}function v(y,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new ig(i,T,y,r),c.push(C),h.set(T,C)),C}function A(y){if(--y.usedTimes===0){let T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function S(y){o.remove(y)}function k(){o.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:w,acquireProgram:v,releaseProgram:A,releaseShaderCache:S,programs:c,dispose:k}}function og(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function lg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function gu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yu(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,_,b,g,d){let E=i[e];return E===void 0?(E={id:u.id,object:u,geometry:m,material:_,materialVariant:a(u),groupOrder:b,renderOrder:u.renderOrder,z:g,group:d},i[e]=E):(E.id=u.id,E.object=u,E.geometry=m,E.material=_,E.materialVariant=a(u),E.groupOrder=b,E.renderOrder=u.renderOrder,E.z=g,E.group=d),e++,E}function l(u,m,_,b,g,d){let E=o(u,m,_,b,g,d);_.transmission>0?n.push(E):_.transparent===!0?r.push(E):t.push(E)}function c(u,m,_,b,g,d){let E=o(u,m,_,b,g,d);_.transmission>0?n.unshift(E):_.transparent===!0?r.unshift(E):t.unshift(E)}function h(u,m,_){t.length>1&&t.sort(u||lg),n.length>1&&n.sort(m||gu),r.length>1&&r.sort(m||gu),_&&(t.reverse(),n.reverse(),r.reverse())}function f(){for(let u=e,m=i.length;u<m;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:f,sort:h}}function cg(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new yu,i.set(n,[a])):r>=s.length?(a=new yu,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ug(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Be};break;case"SpotLight":t={position:new D,direction:new D,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function hg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var dg=0;function fg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function pg(i){let e=new ug,t=hg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let r=new D,s=new rt,a=new rt;function o(c){let h=0,f=0,u=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let m=0,_=0,b=0,g=0,d=0,E=0,w=0,v=0,A=0,S=0,k=0;c.sort(fg);for(let T=0,C=c.length;T<C;T++){let R=c[T],U=R.color,q=R.intensity,J=R.distance,B=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ii?B=R.shadow.map.texture:B=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=U.r*q,f+=U.g*q,u+=U.b*q;else if(R.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(R.sh.coefficients[X],q);k++}else if(R.isDirectionalLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let G=R.shadow,$=t.get(R);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,n.directionalShadow[m]=$,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=R.shadow.matrix,E++}n.directional[m]=X,m++}else if(R.isSpotLight){let X=e.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(U).multiplyScalar(q),X.distance=J,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,n.spot[b]=X;let G=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,G.updateMatrices(R),R.castShadow&&S++),n.spotLightMatrix[b]=G.matrix,R.castShadow){let $=t.get(R);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,n.spotShadow[b]=$,n.spotShadowMap[b]=B,v++}b++}else if(R.isRectAreaLight){let X=e.get(R);X.color.copy(U).multiplyScalar(q),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=X,g++}else if(R.isPointLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){let G=R.shadow,$=t.get(R);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,$.shadowCameraNear=G.camera.near,$.shadowCameraFar=G.camera.far,n.pointShadow[_]=$,n.pointShadowMap[_]=B,n.pointShadowMatrix[_]=R.shadow.matrix,w++}n.point[_]=X,_++}else if(R.isHemisphereLight){let X=e.get(R);X.skyColor.copy(R.color).multiplyScalar(q),X.groundColor.copy(R.groundColor).multiplyScalar(q),n.hemi[d]=X,d++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let y=n.hash;(y.directionalLength!==m||y.pointLength!==_||y.spotLength!==b||y.rectAreaLength!==g||y.hemiLength!==d||y.numDirectionalShadows!==E||y.numPointShadows!==w||y.numSpotShadows!==v||y.numSpotMaps!==A||y.numLightProbes!==k)&&(n.directional.length=m,n.spot.length=b,n.rectArea.length=g,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=v+A-S,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=k,y.directionalLength=m,y.pointLength=_,y.spotLength=b,y.rectAreaLength=g,y.hemiLength=d,y.numDirectionalShadows=E,y.numPointShadows=w,y.numSpotShadows=v,y.numSpotMaps=A,y.numLightProbes=k,n.version=dg++)}function l(c,h){let f=0,u=0,m=0,_=0,b=0,g=h.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){let w=c[d];if(w.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),f++}else if(w.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),m++}else if(w.isRectAreaLight){let v=n.rectArea[_];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(g),a.identity(),s.copy(w.matrixWorld),s.premultiply(g),a.extractRotation(s),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(g),u++}else if(w.isHemisphereLight){let v=n.hemi[b];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(g),b++}}}return{setup:o,setupView:l,state:n}}function _u(i){let e=new pg(i),t=[],n=[],r=[];function s(u){f.camera=u,t.length=0,n.length=0,r.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){r.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function mg(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new _u(i),e.set(r,[o])):s>=a.length?(o=new _u(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var gg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_g=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],xg=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],xu=new rt,Ur=new D,yl=new D;function vg(i,e,t){let n=new mr,r=new Oe,s=new Oe,a=new st,o=new Us,l=new Fs,c={},h=t.maxTextureSize,f={[Cn]:Dt,[Dt]:Cn,[Kt]:Kt},u=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:gg,fragmentShader:yg}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let _=new yt;_.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Lt(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ar;let d=this.type;this.render=function(S,k,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===mc&&(we("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ar);let T=i.getRenderTarget(),C=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),U=i.state;U.setBlending(yn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let q=d!==this.type;q&&k.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(B=>B.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,B=S.length;J<B;J++){let X=S[J],G=X.shadow;if(G===void 0){we("WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);let $=G.getFrameExtents();r.multiply($),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/$.x),r.x=s.x*$.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/$.y),r.y=s.y*$.y,G.mapSize.y=s.y));let Q=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Q,G.map===null||q===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Hi){if(X.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Wt(r.x,r.y,{format:ii,type:_n,minFilter:Tt,magFilter:Tt,generateMipmaps:!1}),G.map.texture.name=X.name+".shadowMap",G.map.depthTexture=new Pn(r.x,r.y,an),G.map.depthTexture.name=X.name+".shadowMapDepth",G.map.depthTexture.format=pn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=St,G.map.depthTexture.magFilter=St}else X.isPointLight?(G.map=new Va(r.x),G.map.depthTexture=new Ls(r.x,sn)):(G.map=new Wt(r.x,r.y),G.map.depthTexture=new Pn(r.x,r.y,sn)),G.map.depthTexture.name=X.name+".shadowMap",G.map.depthTexture.format=pn,this.type===Ar?(G.map.depthTexture.compareFunction=Q?Fa:Ua,G.map.depthTexture.minFilter=Tt,G.map.depthTexture.magFilter=Tt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=St,G.map.depthTexture.magFilter=St);G.camera.updateProjectionMatrix()}let he=G.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<he;me++){if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,me),i.clear();else{me===0&&(i.setRenderTarget(G.map),i.clear());let _e=G.getViewport(me);a.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),U.viewport(a)}if(X.isPointLight){let _e=G.camera,qe=G.matrix,at=X.distance||_e.far;at!==_e.far&&(_e.far=at,_e.updateProjectionMatrix()),Ur.setFromMatrixPosition(X.matrixWorld),_e.position.copy(Ur),yl.copy(_e.position),yl.add(_g[me]),_e.up.copy(xg[me]),_e.lookAt(yl),_e.updateMatrixWorld(),qe.makeTranslation(-Ur.x,-Ur.y,-Ur.z),xu.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),G._frustum.setFromProjectionMatrix(xu,_e.coordinateSystem,_e.reversedDepth)}else G.updateMatrices(X);n=G.getFrustum(),v(k,y,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===Hi&&E(G,y),G.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(T,C,R)};function E(S,k){let y=e.update(b);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Wt(r.x,r.y,{format:ii,type:_n})),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(k,null,y,u,b,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(k,null,y,m,b,null)}function w(S,k,y,T){let C=null,R=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)C=R;else if(C=y.isPointLight===!0?l:o,i.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){let U=C.uuid,q=k.uuid,J=c[U];J===void 0&&(J={},c[U]=J);let B=J[q];B===void 0&&(B=C.clone(),J[q]=B,k.addEventListener("dispose",A)),C=B}if(C.visible=k.visible,C.wireframe=k.wireframe,T===Hi?C.side=k.shadowSide!==null?k.shadowSide:k.side:C.side=k.shadowSide!==null?k.shadowSide:f[k.side],C.alphaMap=k.alphaMap,C.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,C.map=k.map,C.clipShadows=k.clipShadows,C.clippingPlanes=k.clippingPlanes,C.clipIntersection=k.clipIntersection,C.displacementMap=k.displacementMap,C.displacementScale=k.displacementScale,C.displacementBias=k.displacementBias,C.wireframeLinewidth=k.wireframeLinewidth,C.linewidth=k.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let U=i.properties.get(C);U.light=y}return C}function v(S,k,y,T,C){if(S.visible===!1)return;if(S.layers.test(k.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===Hi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);let q=e.update(S),J=S.material;if(Array.isArray(J)){let B=q.groups;for(let X=0,G=B.length;X<G;X++){let $=B[X],Q=J[$.materialIndex];if(Q&&Q.visible){let he=w(S,Q,T,C);S.onBeforeShadow(i,S,k,y,q,he,$),i.renderBufferDirect(y,null,q,he,S,$),S.onAfterShadow(i,S,k,y,q,he,$)}}}else if(J.visible){let B=w(S,J,T,C);S.onBeforeShadow(i,S,k,y,q,B,null),i.renderBufferDirect(y,null,q,B,S,null),S.onAfterShadow(i,S,k,y,q,B,null)}}let U=S.children;for(let q=0,J=U.length;q<J;q++)v(U[q],k,y,T,C)}function A(S){S.target.removeEventListener("dispose",A);for(let y in c){let T=c[y],C=S.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function bg(i,e){function t(){let I=!1,ne=new st,Y=null,oe=new st(0,0,0,0);return{setMask:function(pe){Y!==pe&&!I&&(i.colorMask(pe,pe,pe,pe),Y=pe)},setLocked:function(pe){I=pe},setClear:function(pe,j,be,xe,lt){lt===!0&&(pe*=xe,j*=xe,be*=xe),ne.set(pe,j,be,xe),oe.equals(ne)===!1&&(i.clearColor(pe,j,be,xe),oe.copy(ne))},reset:function(){I=!1,Y=null,oe.set(-1,0,0,0)}}}function n(){let I=!1,ne=!1,Y=null,oe=null,pe=null;return{setReversed:function(j){if(ne!==j){let be=e.get("EXT_clip_control");j?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ne=j;let xe=pe;pe=null,this.setClear(xe)}},getReversed:function(){return ne},setTest:function(j){j?ee(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(j){Y!==j&&!I&&(i.depthMask(j),Y=j)},setFunc:function(j){if(ne&&(j=Zc[j]),oe!==j){switch(j){case ys:i.depthFunc(i.NEVER);break;case _s:i.depthFunc(i.ALWAYS);break;case xs:i.depthFunc(i.LESS);break;case fi:i.depthFunc(i.LEQUAL);break;case vs:i.depthFunc(i.EQUAL);break;case bs:i.depthFunc(i.GEQUAL);break;case Ms:i.depthFunc(i.GREATER);break;case Ss:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=j}},setLocked:function(j){I=j},setClear:function(j){pe!==j&&(pe=j,ne&&(j=1-j),i.clearDepth(j))},reset:function(){I=!1,Y=null,oe=null,pe=null,ne=!1}}}function r(){let I=!1,ne=null,Y=null,oe=null,pe=null,j=null,be=null,xe=null,lt=null;return{setTest:function(tt){I||(tt?ee(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(tt){ne!==tt&&!I&&(i.stencilMask(tt),ne=tt)},setFunc:function(tt,ln,cn){(Y!==tt||oe!==ln||pe!==cn)&&(i.stencilFunc(tt,ln,cn),Y=tt,oe=ln,pe=cn)},setOp:function(tt,ln,cn){(j!==tt||be!==ln||xe!==cn)&&(i.stencilOp(tt,ln,cn),j=tt,be=ln,xe=cn)},setLocked:function(tt){I=tt},setClear:function(tt){lt!==tt&&(i.clearStencil(tt),lt=tt)},reset:function(){I=!1,ne=null,Y=null,oe=null,pe=null,j=null,be=null,xe=null,lt=null}}}let s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap,h={},f={},u={},m=new WeakMap,_=[],b=null,g=!1,d=null,E=null,w=null,v=null,A=null,S=null,k=null,y=new Be(0,0,0),T=0,C=!1,R=null,U=null,q=null,J=null,B=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,$=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Q)[1]),G=$>=1):Q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),G=$>=2);let he=null,me={},_e=i.getParameter(i.SCISSOR_BOX),qe=i.getParameter(i.VIEWPORT),at=new st().fromArray(_e),Ye=new st().fromArray(qe);function K(I,ne,Y,oe){let pe=new Uint8Array(4),j=i.createTexture();i.bindTexture(I,j),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<Y;be++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(ne+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return j}let ie={};ie[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(fi),pt(!1),_t(Po),ee(i.CULL_FACE),Ze(yn);function ee(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Ie(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Le(I,ne){return u[I]!==ne?(i.bindFramebuffer(I,ne),u[I]=ne,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ne),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function ke(I,ne){let Y=_,oe=!1;if(I){Y=m.get(ne),Y===void 0&&(Y=[],m.set(ne,Y));let pe=I.textures;if(Y.length!==pe.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let j=0,be=pe.length;j<be;j++)Y[j]=i.COLOR_ATTACHMENT0+j;Y.length=pe.length,oe=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,oe=!0);oe&&i.drawBuffers(Y)}function ut(I){return b!==I?(i.useProgram(I),b=I,!0):!1}let ze={[Xn]:i.FUNC_ADD,[yc]:i.FUNC_SUBTRACT,[_c]:i.FUNC_REVERSE_SUBTRACT};ze[xc]=i.MIN,ze[vc]=i.MAX;let je={[bc]:i.ZERO,[Mc]:i.ONE,[Sc]:i.SRC_COLOR,[ms]:i.SRC_ALPHA,[Cc]:i.SRC_ALPHA_SATURATE,[wc]:i.DST_COLOR,[Tc]:i.DST_ALPHA,[Ec]:i.ONE_MINUS_SRC_COLOR,[gs]:i.ONE_MINUS_SRC_ALPHA,[kc]:i.ONE_MINUS_DST_COLOR,[Ac]:i.ONE_MINUS_DST_ALPHA,[Rc]:i.CONSTANT_COLOR,[Ic]:i.ONE_MINUS_CONSTANT_COLOR,[Pc]:i.CONSTANT_ALPHA,[Lc]:i.ONE_MINUS_CONSTANT_ALPHA};function Ze(I,ne,Y,oe,pe,j,be,xe,lt,tt){if(I===yn){g===!0&&(Ie(i.BLEND),g=!1);return}if(g===!1&&(ee(i.BLEND),g=!0),I!==gc){if(I!==d||tt!==C){if((E!==Xn||A!==Xn)&&(i.blendEquation(i.FUNC_ADD),E=Xn,A=Xn),tt)switch(I){case di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lo:i.blendFunc(i.ONE,i.ONE);break;case Do:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case No:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Re("WebGLState: Invalid blending: ",I);break}else switch(I){case di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Do:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case No:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",I);break}w=null,v=null,S=null,k=null,y.set(0,0,0),T=0,d=I,C=tt}return}pe=pe||ne,j=j||Y,be=be||oe,(ne!==E||pe!==A)&&(i.blendEquationSeparate(ze[ne],ze[pe]),E=ne,A=pe),(Y!==w||oe!==v||j!==S||be!==k)&&(i.blendFuncSeparate(je[Y],je[oe],je[j],je[be]),w=Y,v=oe,S=j,k=be),(xe.equals(y)===!1||lt!==T)&&(i.blendColor(xe.r,xe.g,xe.b,lt),y.copy(xe),T=lt),d=I,C=!1}function We(I,ne){I.side===Kt?Ie(i.CULL_FACE):ee(i.CULL_FACE);let Y=I.side===Dt;ne&&(Y=!Y),pt(Y),I.blending===di&&I.transparent===!1?Ze(yn):Ze(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);let oe=I.stencilWrite;o.setTest(oe),oe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Et(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function pt(I){R!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),R=I)}function _t(I){I!==fc?(ee(i.CULL_FACE),I!==U&&(I===Po?i.cullFace(i.BACK):I===pc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),U=I}function bt(I){I!==q&&(G&&i.lineWidth(I),q=I)}function Et(I,ne,Y){I?(ee(i.POLYGON_OFFSET_FILL),(J!==ne||B!==Y)&&(J=ne,B=Y,a.getReversed()&&(ne=-ne),i.polygonOffset(ne,Y))):Ie(i.POLYGON_OFFSET_FILL)}function ot(I){I?ee(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function mt(I){I===void 0&&(I=i.TEXTURE0+X-1),he!==I&&(i.activeTexture(I),he=I)}function P(I,ne,Y){Y===void 0&&(he===null?Y=i.TEXTURE0+X-1:Y=he);let oe=me[Y];oe===void 0&&(oe={type:void 0,texture:void 0},me[Y]=oe),(oe.type!==I||oe.texture!==ne)&&(he!==Y&&(i.activeTexture(Y),he=Y),i.bindTexture(I,ne||ie[I]),oe.type=I,oe.texture=ne)}function Nt(){let I=me[he];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Ke(){try{i.compressedTexImage2D(...arguments)}catch(I){Re("WebGLState:",I)}}function M(){try{i.compressedTexImage3D(...arguments)}catch(I){Re("WebGLState:",I)}}function p(){try{i.texSubImage2D(...arguments)}catch(I){Re("WebGLState:",I)}}function N(){try{i.texSubImage3D(...arguments)}catch(I){Re("WebGLState:",I)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Re("WebGLState:",I)}}function H(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Re("WebGLState:",I)}}function te(){try{i.texStorage2D(...arguments)}catch(I){Re("WebGLState:",I)}}function re(){try{i.texStorage3D(...arguments)}catch(I){Re("WebGLState:",I)}}function W(){try{i.texImage2D(...arguments)}catch(I){Re("WebGLState:",I)}}function Z(){try{i.texImage3D(...arguments)}catch(I){Re("WebGLState:",I)}}function se(I){return f[I]!==void 0?f[I]:i.getParameter(I)}function Me(I,ne){f[I]!==ne&&(i.pixelStorei(I,ne),f[I]=ne)}function ce(I){at.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),at.copy(I))}function ae(I){Ye.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Ye.copy(I))}function Ae(I,ne){let Y=c.get(ne);Y===void 0&&(Y=new WeakMap,c.set(ne,Y));let oe=Y.get(I);oe===void 0&&(oe=i.getUniformBlockIndex(ne,I.name),Y.set(I,oe))}function Ce(I,ne){let oe=c.get(ne).get(I);l.get(ne)!==oe&&(i.uniformBlockBinding(ne,oe,I.__bindingPointIndex),l.set(ne,oe))}function De(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},he=null,me={},u={},m=new WeakMap,_=[],b=null,g=!1,d=null,E=null,w=null,v=null,A=null,S=null,k=null,y=new Be(0,0,0),T=0,C=!1,R=null,U=null,q=null,J=null,B=null,at.set(0,0,i.canvas.width,i.canvas.height),Ye.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:Ie,bindFramebuffer:Le,drawBuffers:ke,useProgram:ut,setBlending:Ze,setMaterial:We,setFlipSided:pt,setCullFace:_t,setLineWidth:bt,setPolygonOffset:Et,setScissorTest:ot,activeTexture:mt,bindTexture:P,unbindTexture:Nt,compressedTexImage2D:Ke,compressedTexImage3D:M,texImage2D:W,texImage3D:Z,pixelStorei:Me,getParameter:se,updateUBOMapping:Ae,uniformBlockBinding:Ce,texStorage2D:te,texStorage3D:re,texSubImage2D:p,texSubImage3D:N,compressedTexSubImage2D:z,compressedTexSubImage3D:H,scissor:ce,viewport:ae,reset:De}}function Mg(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,h=new WeakMap,f=new Set,u,m=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(M,p){return _?new OffscreenCanvas(M,p):cr("canvas")}function g(M,p,N){let z=1,H=Ke(M);if((H.width>N||H.height>N)&&(z=N/Math.max(H.width,H.height)),z<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let te=Math.floor(z*H.width),re=Math.floor(z*H.height);u===void 0&&(u=b(te,re));let W=p?b(te,re):u;return W.width=te,W.height=re,W.getContext("2d").drawImage(M,0,0,te,re),we("WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+te+"x"+re+")."),W}else return"data"in M&&we("WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),M;return M}function d(M){return M.generateMipmaps}function E(M){i.generateMipmap(M)}function w(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(M,p,N,z,H,te=!1){if(M!==null){if(i[M]!==void 0)return i[M];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let re;z&&(re=e.get("EXT_texture_norm16"),re||we("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=p;if(p===i.RED&&(N===i.FLOAT&&(W=i.R32F),N===i.HALF_FLOAT&&(W=i.R16F),N===i.UNSIGNED_BYTE&&(W=i.R8),N===i.UNSIGNED_SHORT&&re&&(W=re.R16_EXT),N===i.SHORT&&re&&(W=re.R16_SNORM_EXT)),p===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.R8UI),N===i.UNSIGNED_SHORT&&(W=i.R16UI),N===i.UNSIGNED_INT&&(W=i.R32UI),N===i.BYTE&&(W=i.R8I),N===i.SHORT&&(W=i.R16I),N===i.INT&&(W=i.R32I)),p===i.RG&&(N===i.FLOAT&&(W=i.RG32F),N===i.HALF_FLOAT&&(W=i.RG16F),N===i.UNSIGNED_BYTE&&(W=i.RG8),N===i.UNSIGNED_SHORT&&re&&(W=re.RG16_EXT),N===i.SHORT&&re&&(W=re.RG16_SNORM_EXT)),p===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RG8UI),N===i.UNSIGNED_SHORT&&(W=i.RG16UI),N===i.UNSIGNED_INT&&(W=i.RG32UI),N===i.BYTE&&(W=i.RG8I),N===i.SHORT&&(W=i.RG16I),N===i.INT&&(W=i.RG32I)),p===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGB8UI),N===i.UNSIGNED_SHORT&&(W=i.RGB16UI),N===i.UNSIGNED_INT&&(W=i.RGB32UI),N===i.BYTE&&(W=i.RGB8I),N===i.SHORT&&(W=i.RGB16I),N===i.INT&&(W=i.RGB32I)),p===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),N===i.UNSIGNED_INT&&(W=i.RGBA32UI),N===i.BYTE&&(W=i.RGBA8I),N===i.SHORT&&(W=i.RGBA16I),N===i.INT&&(W=i.RGBA32I)),p===i.RGB&&(N===i.UNSIGNED_SHORT&&re&&(W=re.RGB16_EXT),N===i.SHORT&&re&&(W=re.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),p===i.RGBA){let Z=te?or:Ve.getTransfer(H);N===i.FLOAT&&(W=i.RGBA32F),N===i.HALF_FLOAT&&(W=i.RGBA16F),N===i.UNSIGNED_BYTE&&(W=Z===Je?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&re&&(W=re.RGBA16_EXT),N===i.SHORT&&re&&(W=re.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function A(M,p){let N;return M?p===null||p===sn||p===Xi?N=i.DEPTH24_STENCIL8:p===an?N=i.DEPTH32F_STENCIL8:p===Wi&&(N=i.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===sn||p===Xi?N=i.DEPTH_COMPONENT24:p===an?N=i.DEPTH_COMPONENT32F:p===Wi&&(N=i.DEPTH_COMPONENT16),N}function S(M,p){return d(M)===!0||M.isFramebufferTexture&&M.minFilter!==St&&M.minFilter!==Tt?Math.log2(Math.max(p.width,p.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?p.mipmaps.length:1}function k(M){let p=M.target;p.removeEventListener("dispose",k),T(p),p.isVideoTexture&&h.delete(p),p.isHTMLTexture&&f.delete(p)}function y(M){let p=M.target;p.removeEventListener("dispose",y),R(p)}function T(M){let p=n.get(M);if(p.__webglInit===void 0)return;let N=M.source,z=m.get(N);if(z){let H=z[p.__cacheKey];H.usedTimes--,H.usedTimes===0&&C(M),Object.keys(z).length===0&&m.delete(N)}n.remove(M)}function C(M){let p=n.get(M);i.deleteTexture(p.__webglTexture);let N=M.source,z=m.get(N);delete z[p.__cacheKey],a.memory.textures--}function R(M){let p=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(p.__webglFramebuffer[z]))for(let H=0;H<p.__webglFramebuffer[z].length;H++)i.deleteFramebuffer(p.__webglFramebuffer[z][H]);else i.deleteFramebuffer(p.__webglFramebuffer[z]);p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer[z])}else{if(Array.isArray(p.__webglFramebuffer))for(let z=0;z<p.__webglFramebuffer.length;z++)i.deleteFramebuffer(p.__webglFramebuffer[z]);else i.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&i.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let z=0;z<p.__webglColorRenderbuffer.length;z++)p.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(p.__webglColorRenderbuffer[z]);p.__webglDepthRenderbuffer&&i.deleteRenderbuffer(p.__webglDepthRenderbuffer)}let N=M.textures;for(let z=0,H=N.length;z<H;z++){let te=n.get(N[z]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),a.memory.textures--),n.remove(N[z])}n.remove(M)}let U=0;function q(){U=0}function J(){return U}function B(M){U=M}function X(){let M=U;return M>=r.maxTextures&&we("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),U+=1,M}function G(M){let p=[];return p.push(M.wrapS),p.push(M.wrapT),p.push(M.wrapR||0),p.push(M.magFilter),p.push(M.minFilter),p.push(M.anisotropy),p.push(M.internalFormat),p.push(M.format),p.push(M.type),p.push(M.generateMipmaps),p.push(M.premultiplyAlpha),p.push(M.flipY),p.push(M.unpackAlignment),p.push(M.colorSpace),p.join()}function $(M,p){let N=n.get(M);if(M.isVideoTexture&&P(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&N.__version!==M.version){let z=M.image;if(z===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(N,M,p);return}}else M.isExternalTexture&&(N.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+p)}function Q(M,p){let N=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){Ie(N,M,p);return}else M.isExternalTexture&&(N.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+p)}function he(M,p){let N=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){Ie(N,M,p);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+p)}function me(M,p){let N=n.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&N.__version!==M.version){Le(N,M,p);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+p)}let _e={[Es]:i.REPEAT,[fn]:i.CLAMP_TO_EDGE,[Ts]:i.MIRRORED_REPEAT},qe={[St]:i.NEAREST,[Uc]:i.NEAREST_MIPMAP_NEAREST,[kr]:i.NEAREST_MIPMAP_LINEAR,[Tt]:i.LINEAR,[Qs]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},at={[Bc]:i.NEVER,[Wc]:i.ALWAYS,[zc]:i.LESS,[Ua]:i.LEQUAL,[Vc]:i.EQUAL,[Fa]:i.GEQUAL,[Gc]:i.GREATER,[Hc]:i.NOTEQUAL};function Ye(M,p){if(p.type===an&&e.has("OES_texture_float_linear")===!1&&(p.magFilter===Tt||p.magFilter===Qs||p.magFilter===kr||p.magFilter===ti||p.minFilter===Tt||p.minFilter===Qs||p.minFilter===kr||p.minFilter===ti)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,_e[p.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,_e[p.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,_e[p.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,qe[p.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,qe[p.minFilter]),p.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,at[p.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===St||p.minFilter!==kr&&p.minFilter!==ti||p.type===an&&e.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||n.get(p).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(M,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,r.getMaxAnisotropy())),n.get(p).__currentAnisotropy=p.anisotropy}}}function K(M,p){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,p.addEventListener("dispose",k));let z=p.source,H=m.get(z);H===void 0&&(H={},m.set(z,H));let te=G(p);if(te!==M.__cacheKey){H[te]===void 0&&(H[te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),H[te].usedTimes++;let re=H[M.__cacheKey];re!==void 0&&(H[M.__cacheKey].usedTimes--,re.usedTimes===0&&C(p)),M.__cacheKey=te,M.__webglTexture=H[te].texture}return N}function ie(M,p,N){return Math.floor(Math.floor(M/N)/p)}function ee(M,p,N,z){let te=M.updateRanges;if(te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,p.width,p.height,N,z,p.data);else{te.sort((Me,ce)=>Me.start-ce.start);let re=0;for(let Me=1;Me<te.length;Me++){let ce=te[re],ae=te[Me],Ae=ce.start+ce.count,Ce=ie(ae.start,p.width,4),De=ie(ce.start,p.width,4);ae.start<=Ae+1&&Ce===De&&ie(ae.start+ae.count-1,p.width,4)===Ce?ce.count=Math.max(ce.count,ae.start+ae.count-ce.start):(++re,te[re]=ae)}te.length=re+1;let W=t.getParameter(i.UNPACK_ROW_LENGTH),Z=t.getParameter(i.UNPACK_SKIP_PIXELS),se=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,p.width);for(let Me=0,ce=te.length;Me<ce;Me++){let ae=te[Me],Ae=Math.floor(ae.start/4),Ce=Math.ceil(ae.count/4),De=Ae%p.width,I=Math.floor(Ae/p.width),ne=Ce,Y=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,De),t.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,De,I,ne,Y,N,z,p.data)}M.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,W),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(i.UNPACK_SKIP_ROWS,se)}}function Ie(M,p,N){let z=i.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),p.isData3DTexture&&(z=i.TEXTURE_3D);let H=K(M,p),te=p.source;t.bindTexture(z,M.__webglTexture,i.TEXTURE0+N);let re=n.get(te);if(te.version!==re.__version||H===!0){if(t.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap<"u"&&p.image instanceof ImageBitmap)===!1){let Y=Ve.getPrimaries(Ve.workingColorSpace),oe=p.colorSpace===Ln?null:Ve.getPrimaries(p.colorSpace),pe=p.colorSpace===Ln||Y===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment);let Z=g(p.image,!1,r.maxTextureSize);Z=Nt(p,Z);let se=s.convert(p.format,p.colorSpace),Me=s.convert(p.type),ce=v(p.internalFormat,se,Me,p.normalized,p.colorSpace,p.isVideoTexture);Ye(z,p);let ae,Ae=p.mipmaps,Ce=p.isVideoTexture!==!0,De=re.__version===void 0||H===!0,I=te.dataReady,ne=S(p,Z);if(p.isDepthTexture)ce=A(p.format===ni,p.type),De&&(Ce?t.texStorage2D(i.TEXTURE_2D,1,ce,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,ce,Z.width,Z.height,0,se,Me,null));else if(p.isDataTexture)if(Ae.length>0){Ce&&De&&t.texStorage2D(i.TEXTURE_2D,ne,ce,Ae[0].width,Ae[0].height);for(let Y=0,oe=Ae.length;Y<oe;Y++)ae=Ae[Y],Ce?I&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ae.width,ae.height,se,Me,ae.data):t.texImage2D(i.TEXTURE_2D,Y,ce,ae.width,ae.height,0,se,Me,ae.data);p.generateMipmaps=!1}else Ce?(De&&t.texStorage2D(i.TEXTURE_2D,ne,ce,Z.width,Z.height),I&&ee(p,Z,se,Me)):t.texImage2D(i.TEXTURE_2D,0,ce,Z.width,Z.height,0,se,Me,Z.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){Ce&&De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,ce,Ae[0].width,Ae[0].height,Z.depth);for(let Y=0,oe=Ae.length;Y<oe;Y++)if(ae=Ae[Y],p.format!==$t)if(se!==null)if(Ce){if(I)if(p.layerUpdates.size>0){let pe=al(ae.width,ae.height,p.format,p.type);for(let j of p.layerUpdates){let be=ae.data.subarray(j*pe/ae.data.BYTES_PER_ELEMENT,(j+1)*pe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,j,ae.width,ae.height,1,se,be)}p.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ae.width,ae.height,Z.depth,se,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,ce,ae.width,ae.height,Z.depth,0,ae.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ae.width,ae.height,Z.depth,se,Me,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,ce,ae.width,ae.height,Z.depth,0,se,Me,ae.data)}else{Ce&&De&&t.texStorage2D(i.TEXTURE_2D,ne,ce,Ae[0].width,Ae[0].height);for(let Y=0,oe=Ae.length;Y<oe;Y++)ae=Ae[Y],p.format!==$t?se!==null?Ce?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,ae.width,ae.height,se,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,ce,ae.width,ae.height,0,ae.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?I&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ae.width,ae.height,se,Me,ae.data):t.texImage2D(i.TEXTURE_2D,Y,ce,ae.width,ae.height,0,se,Me,ae.data)}else if(p.isDataArrayTexture)if(Ce){if(De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,ce,Z.width,Z.height,Z.depth),I)if(p.layerUpdates.size>0){let Y=al(Z.width,Z.height,p.format,p.type);for(let oe of p.layerUpdates){let pe=Z.data.subarray(oe*Y/Z.data.BYTES_PER_ELEMENT,(oe+1)*Y/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,Z.width,Z.height,1,se,Me,pe)}p.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,se,Me,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,Z.width,Z.height,Z.depth,0,se,Me,Z.data);else if(p.isData3DTexture)Ce?(De&&t.texStorage3D(i.TEXTURE_3D,ne,ce,Z.width,Z.height,Z.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,se,Me,Z.data)):t.texImage3D(i.TEXTURE_3D,0,ce,Z.width,Z.height,Z.depth,0,se,Me,Z.data);else if(p.isFramebufferTexture){if(De)if(Ce)t.texStorage2D(i.TEXTURE_2D,ne,ce,Z.width,Z.height);else{let Y=Z.width,oe=Z.height;for(let pe=0;pe<ne;pe++)t.texImage2D(i.TEXTURE_2D,pe,ce,Y,oe,0,se,Me,null),Y>>=1,oe>>=1}}else if(p.isHTMLTexture){if("texElementImage2D"in i){let Y=i.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),Z.parentNode!==Y){Y.appendChild(Z),f.add(p),Y.onpaint=oe=>{let pe=oe.changedElements;for(let j of f)pe.includes(j.image)&&(j.needsUpdate=!0)},Y.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{let pe=i.RGBA,j=i.RGBA,be=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pe,j,be,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Ce&&De){let Y=Ke(Ae[0]);t.texStorage2D(i.TEXTURE_2D,ne,ce,Y.width,Y.height)}for(let Y=0,oe=Ae.length;Y<oe;Y++)ae=Ae[Y],Ce?I&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,se,Me,ae):t.texImage2D(i.TEXTURE_2D,Y,ce,se,Me,ae);p.generateMipmaps=!1}else if(Ce){if(De){let Y=Ke(Z);t.texStorage2D(i.TEXTURE_2D,ne,ce,Y.width,Y.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se,Me,Z)}else t.texImage2D(i.TEXTURE_2D,0,ce,se,Me,Z);d(p)&&E(z),re.__version=te.version,p.onUpdate&&p.onUpdate(p)}M.__version=p.version}function Le(M,p,N){if(p.image.length!==6)return;let z=K(M,p),H=p.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+N);let te=n.get(H);if(H.version!==te.__version||z===!0){t.activeTexture(i.TEXTURE0+N);let re=Ve.getPrimaries(Ve.workingColorSpace),W=p.colorSpace===Ln?null:Ve.getPrimaries(p.colorSpace),Z=p.colorSpace===Ln||re===W?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let se=p.isCompressedTexture||p.image[0].isCompressedTexture,Me=p.image[0]&&p.image[0].isDataTexture,ce=[];for(let j=0;j<6;j++)!se&&!Me?ce[j]=g(p.image[j],!0,r.maxCubemapSize):ce[j]=Me?p.image[j].image:p.image[j],ce[j]=Nt(p,ce[j]);let ae=ce[0],Ae=s.convert(p.format,p.colorSpace),Ce=s.convert(p.type),De=v(p.internalFormat,Ae,Ce,p.normalized,p.colorSpace),I=p.isVideoTexture!==!0,ne=te.__version===void 0||z===!0,Y=H.dataReady,oe=S(p,ae);Ye(i.TEXTURE_CUBE_MAP,p);let pe;if(se){I&&ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,De,ae.width,ae.height);for(let j=0;j<6;j++){pe=ce[j].mipmaps;for(let be=0;be<pe.length;be++){let xe=pe[be];p.format!==$t?Ae!==null?I?Y&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,0,0,xe.width,xe.height,Ae,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,De,xe.width,xe.height,0,xe.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,0,0,xe.width,xe.height,Ae,Ce,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,De,xe.width,xe.height,0,Ae,Ce,xe.data)}}}else{if(pe=p.mipmaps,I&&ne){pe.length>0&&oe++;let j=Ke(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,De,j.width,j.height)}for(let j=0;j<6;j++)if(Me){I?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ce[j].width,ce[j].height,Ae,Ce,ce[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,De,ce[j].width,ce[j].height,0,Ae,Ce,ce[j].data);for(let be=0;be<pe.length;be++){let lt=pe[be].image[j].image;I?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,0,0,lt.width,lt.height,Ae,Ce,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,De,lt.width,lt.height,0,Ae,Ce,lt.data)}}else{I?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ae,Ce,ce[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,De,Ae,Ce,ce[j]);for(let be=0;be<pe.length;be++){let xe=pe[be];I?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,0,0,Ae,Ce,xe.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,De,Ae,Ce,xe.image[j])}}}d(p)&&E(i.TEXTURE_CUBE_MAP),te.__version=H.version,p.onUpdate&&p.onUpdate(p)}M.__version=p.version}function ke(M,p,N,z,H,te){let re=s.convert(N.format,N.colorSpace),W=s.convert(N.type),Z=v(N.internalFormat,re,W,N.normalized,N.colorSpace),se=n.get(p),Me=n.get(N);if(Me.__renderTarget=p,!se.__hasExternalTextures){let ce=Math.max(1,p.width>>te),ae=Math.max(1,p.height>>te);H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?t.texImage3D(H,te,Z,ce,ae,p.depth,0,re,W,null):t.texImage2D(H,te,Z,ce,ae,0,re,W,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),mt(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,H,Me.__webglTexture,0,ot(p)):(H===i.TEXTURE_2D||H>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,H,Me.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(M,p,N){if(i.bindRenderbuffer(i.RENDERBUFFER,M),p.depthBuffer){let z=p.depthTexture,H=z&&z.isDepthTexture?z.type:null,te=A(p.stencilBuffer,H),re=p.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;mt(p)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot(p),te,p.width,p.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot(p),te,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,te,p.width,p.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,M)}else{let z=p.textures;for(let H=0;H<z.length;H++){let te=z[H],re=s.convert(te.format,te.colorSpace),W=s.convert(te.type),Z=v(te.internalFormat,re,W,te.normalized,te.colorSpace);mt(p)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot(p),Z,p.width,p.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot(p),Z,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,Z,p.width,p.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ze(M,p,N){let z=p.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let H=n.get(p.depthTexture);if(H.__renderTarget=p,(!H.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),z){if(H.__webglInit===void 0&&(H.__webglInit=!0,p.depthTexture.addEventListener("dispose",k)),H.__webglTexture===void 0){H.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,p.depthTexture);let se=s.convert(p.depthTexture.format),Me=s.convert(p.depthTexture.type),ce;p.depthTexture.format===pn?ce=i.DEPTH_COMPONENT24:p.depthTexture.format===ni&&(ce=i.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ce,p.width,p.height,0,se,Me,null)}}else $(p.depthTexture,0);let te=H.__webglTexture,re=ot(p),W=z?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,Z=p.depthTexture.format===ni?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(p.depthTexture.format===pn)mt(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,W,te,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,Z,W,te,0);else if(p.depthTexture.format===ni)mt(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,W,te,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,Z,W,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(M){let p=n.get(M),N=M.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==M.depthTexture){let z=M.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),z){let H=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,z.removeEventListener("dispose",H)};z.addEventListener("dispose",H),p.__depthDisposeCallback=H}p.__boundDepthTexture=z}if(M.depthTexture&&!p.__autoAllocateDepthBuffer)if(N)for(let z=0;z<6;z++)ze(p.__webglFramebuffer[z],M,z);else{let z=M.texture.mipmaps;z&&z.length>0?ze(p.__webglFramebuffer[0],M,0):ze(p.__webglFramebuffer,M,0)}else if(N){p.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[z]),p.__webglDepthbuffer[z]===void 0)p.__webglDepthbuffer[z]=i.createRenderbuffer(),ut(p.__webglDepthbuffer[z],M,!1);else{let H=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=p.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,te)}}else{let z=M.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=i.createRenderbuffer(),ut(p.__webglDepthbuffer,M,!1);else{let H=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=p.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,te)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(M,p,N){let z=n.get(M);p!==void 0&&ke(z.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&je(M)}function We(M){let p=M.texture,N=n.get(M),z=n.get(p);M.addEventListener("dispose",y);let H=M.textures,te=M.isWebGLCubeRenderTarget===!0,re=H.length>1;if(re||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=p.version,a.memory.textures++),te){N.__webglFramebuffer=[];for(let W=0;W<6;W++)if(p.mipmaps&&p.mipmaps.length>0){N.__webglFramebuffer[W]=[];for(let Z=0;Z<p.mipmaps.length;Z++)N.__webglFramebuffer[W][Z]=i.createFramebuffer()}else N.__webglFramebuffer[W]=i.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){N.__webglFramebuffer=[];for(let W=0;W<p.mipmaps.length;W++)N.__webglFramebuffer[W]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(re)for(let W=0,Z=H.length;W<Z;W++){let se=n.get(H[W]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),a.memory.textures++)}if(M.samples>0&&mt(M)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let W=0;W<H.length;W++){let Z=H[W];N.__webglColorRenderbuffer[W]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[W]);let se=s.convert(Z.format,Z.colorSpace),Me=s.convert(Z.type),ce=v(Z.internalFormat,se,Me,Z.normalized,Z.colorSpace,M.isXRRenderTarget===!0),ae=ot(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,ce,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,N.__webglColorRenderbuffer[W])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(N.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,p);for(let W=0;W<6;W++)if(p.mipmaps&&p.mipmaps.length>0)for(let Z=0;Z<p.mipmaps.length;Z++)ke(N.__webglFramebuffer[W][Z],M,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Z);else ke(N.__webglFramebuffer[W],M,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);d(p)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let W=0,Z=H.length;W<Z;W++){let se=H[W],Me=n.get(se),ce=i.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ce=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,Me.__webglTexture),Ye(ce,se),ke(N.__webglFramebuffer,M,se,i.COLOR_ATTACHMENT0+W,ce,0),d(se)&&E(ce)}t.unbindTexture()}else{let W=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(W=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(W,z.__webglTexture),Ye(W,p),p.mipmaps&&p.mipmaps.length>0)for(let Z=0;Z<p.mipmaps.length;Z++)ke(N.__webglFramebuffer[Z],M,p,i.COLOR_ATTACHMENT0,W,Z);else ke(N.__webglFramebuffer,M,p,i.COLOR_ATTACHMENT0,W,0);d(p)&&E(W),t.unbindTexture()}M.depthBuffer&&je(M)}function pt(M){let p=M.textures;for(let N=0,z=p.length;N<z;N++){let H=p[N];if(d(H)){let te=w(M),re=n.get(H).__webglTexture;t.bindTexture(te,re),E(te),t.unbindTexture()}}}let _t=[],bt=[];function Et(M){if(M.samples>0){if(mt(M)===!1){let p=M.textures,N=M.width,z=M.height,H=i.COLOR_BUFFER_BIT,te=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(M),W=p.length>1;if(W)for(let se=0;se<p.length;se++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);let Z=M.texture.mipmaps;Z&&Z.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let se=0;se<p.length;se++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(H|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(H|=i.STENCIL_BUFFER_BIT)),W){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[se]);let Me=n.get(p[se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Me,0)}i.blitFramebuffer(0,0,N,z,0,0,N,z,H,i.NEAREST),l===!0&&(_t.length=0,bt.length=0,_t.push(i.COLOR_ATTACHMENT0+se),M.depthBuffer&&M.resolveDepthBuffer===!1&&(_t.push(te),bt.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,bt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),W)for(let se=0;se<p.length;se++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,re.__webglColorRenderbuffer[se]);let Me=n.get(p[se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,Me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){let p=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[p])}}}function ot(M){return Math.min(r.maxSamples,M.samples)}function mt(M){let p=n.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function P(M){let p=a.render.frame;h.get(M)!==p&&(h.set(M,p),M.update())}function Nt(M,p){let N=M.colorSpace,z=M.format,H=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||N!==ar&&N!==Ln&&(Ve.getTransfer(N)===Je?(z!==$t||H!==Yt)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",N)),p}function Ke(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=q,this.getTextureUnits=J,this.setTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=Q,this.setTexture3D=he,this.setTextureCube=me,this.rebindTextures=Ze,this.setupRenderTarget=We,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Sg(i,e){function t(n,r=Ln){let s,a=Ve.getTransfer(r);if(n===Yt)return i.UNSIGNED_BYTE;if(n===ta)return i.UNSIGNED_SHORT_4_4_4_4;if(n===na)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xo)return i.BYTE;if(n===qo)return i.SHORT;if(n===Wi)return i.UNSIGNED_SHORT;if(n===ea)return i.INT;if(n===sn)return i.UNSIGNED_INT;if(n===an)return i.FLOAT;if(n===_n)return i.HALF_FLOAT;if(n===Jo)return i.ALPHA;if(n===Ko)return i.RGB;if(n===$t)return i.RGBA;if(n===pn)return i.DEPTH_COMPONENT;if(n===ni)return i.DEPTH_STENCIL;if(n===$o)return i.RED;if(n===ia)return i.RED_INTEGER;if(n===ii)return i.RG;if(n===ra)return i.RG_INTEGER;if(n===sa)return i.RGBA_INTEGER;if(n===Cr||n===Rr||n===Ir||n===Pr)if(a===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Cr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ir)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Cr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ir)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===aa||n===oa||n===la||n===ca)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===aa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===la)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ca)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ua||n===ha||n===da||n===fa||n===pa||n===Lr||n===ma)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ua||n===ha)return a===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===da)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===fa)return s.COMPRESSED_R11_EAC;if(n===pa)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Lr)return s.COMPRESSED_RG11_EAC;if(n===ma)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ga||n===ya||n===_a||n===xa||n===va||n===ba||n===Ma||n===Sa||n===Ea||n===Ta||n===Aa||n===wa||n===ka||n===Ca)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ga)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ya)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_a)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===va)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ba)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ma)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ea)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ta)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Aa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ka)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ca)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ra||n===Ia||n===Pa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ra)return a===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ia)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===La||n===Da||n===Dr||n===Na)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===La)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Da)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Na)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Eg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tg=`
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

}`,Tl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new _r(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Xt({vertexShader:Eg,fragmentShader:Tg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new vr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Al=class extends mn{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,m=null,_=null,b=typeof XRWebGLBinding<"u",g=new Tl,d={},E=t.getContextAttributes(),w=null,v=null,A=[],S=[],k=new Oe,y=null,T=new Ct;T.viewport=new st;let C=new Ct;C.viewport=new st;let R=[T,C],U=new Js,q=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=A[K];return ie===void 0&&(ie=new zi,A[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=A[K];return ie===void 0&&(ie=new zi,A[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=A[K];return ie===void 0&&(ie=new zi,A[K]=ie),ie.getHandSpace()};function B(K){let ie=S.indexOf(K.inputSource);if(ie===-1)return;let ee=A[ie];ee!==void 0&&(ee.update(K.inputSource,K.frame,c||a),ee.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",G);for(let K=0;K<A.length;K++){let ie=S[K];ie!==null&&(S[K]=null,A[K].disconnect(ie))}q=null,J=null,g.reset();for(let K in d)delete d[K];e.setRenderTarget(w),m=null,u=null,f=null,r=null,v=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",X),r.addEventListener("inputsourceschange",G),E.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(k),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,Ie=null,Le=null;E.depth&&(Le=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=E.stencil?ni:pn,Ie=E.stencil?Xi:sn);let ke={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(ke),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Wt(u.textureWidth,u.textureHeight,{format:$t,type:Yt,depthTexture:new Pn(u.textureWidth,u.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let ee={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Wt(m.framebufferWidth,m.framebufferHeight,{format:$t,type:Yt,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ye.setContext(r),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(K){for(let ie=0;ie<K.removed.length;ie++){let ee=K.removed[ie],Ie=S.indexOf(ee);Ie>=0&&(S[Ie]=null,A[Ie].disconnect(ee))}for(let ie=0;ie<K.added.length;ie++){let ee=K.added[ie],Ie=S.indexOf(ee);if(Ie===-1){for(let ke=0;ke<A.length;ke++)if(ke>=S.length){S.push(ee),Ie=ke;break}else if(S[ke]===null){S[ke]=ee,Ie=ke;break}if(Ie===-1)break}let Le=A[Ie];Le&&Le.connect(ee)}}let $=new D,Q=new D;function he(K,ie,ee){$.setFromMatrixPosition(ie.matrixWorld),Q.setFromMatrixPosition(ee.matrixWorld);let Ie=$.distanceTo(Q),Le=ie.projectionMatrix.elements,ke=ee.projectionMatrix.elements,ut=Le[14]/(Le[10]-1),ze=Le[14]/(Le[10]+1),je=(Le[9]+1)/Le[5],Ze=(Le[9]-1)/Le[5],We=(Le[8]-1)/Le[0],pt=(ke[8]+1)/ke[0],_t=ut*We,bt=ut*pt,Et=Ie/(-We+pt),ot=Et*-We;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ot),K.translateZ(Et),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Le[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let mt=ut+Et,P=ze+Et,Nt=_t-ot,Ke=bt+(Ie-ot),M=je*ze/P*mt,p=Ze*ze/P*mt;K.projectionMatrix.makePerspective(Nt,Ke,M,p,mt,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function me(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ie=K.near,ee=K.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(ee=g.depthFar)),U.near=C.near=T.near=ie,U.far=C.far=T.far=ee,(q!==U.near||J!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),q=U.near,J=U.far),U.layers.mask=K.layers.mask|6,T.layers.mask=U.layers.mask&-5,C.layers.mask=U.layers.mask&-3;let Ie=K.parent,Le=U.cameras;me(U,Ie);for(let ke=0;ke<Le.length;ke++)me(Le[ke],Ie);Le.length===2?he(U,T,C):U.projectionMatrix.copy(T.projectionMatrix),_e(K,U,Ie)};function _e(K,ie,ee){ee===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(ee.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Fi*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(K){return d[K]};let qe=null;function at(K,ie){if(h=ie.getViewerPose(c||a),_=ie,h!==null){let ee=h.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let Ie=!1;ee.length!==U.cameras.length&&(U.cameras.length=0,Ie=!0);for(let ze=0;ze<ee.length;ze++){let je=ee[ze],Ze=null;if(m!==null)Ze=m.getViewport(je);else{let pt=f.getViewSubImage(u,je);Ze=pt.viewport,ze===0&&(e.setRenderTargetTextures(v,pt.colorTexture,pt.depthStencilTexture),e.setRenderTarget(v))}let We=R[ze];We===void 0&&(We=new Ct,We.layers.enable(ze),We.viewport=new st,R[ze]=We),We.matrix.fromArray(je.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(je.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),ze===0&&(U.matrix.copy(We.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ie===!0&&U.cameras.push(We)}let Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){f=n.getBinding();let ze=f.getDepthInformation(ee[0]);ze&&ze.isValid&&ze.texture&&g.init(ze,r.renderState)}if(Le&&Le.includes("camera-access")&&b){e.state.unbindTexture(),f=n.getBinding();for(let ze=0;ze<ee.length;ze++){let je=ee[ze].camera;if(je){let Ze=d[je];Ze||(Ze=new _r,d[je]=Ze);let We=f.getCameraImage(je);Ze.sourceTexture=We}}}}for(let ee=0;ee<A.length;ee++){let Ie=S[ee],Le=A[ee];Ie!==null&&Le!==void 0&&Le.update(Ie,ie,c||a)}qe&&qe(K,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),_=null}let Ye=new vu;Ye.setAnimationLoop(at),this.setAnimationLoop=function(K){qe=K},this.dispose=function(){}}},Ag=new rt,Au=new Pe;Au.set(-1,0,0,0,1,0,0,0,1);function wg(i,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,il(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,E,w,v){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(g,d):d.isMeshLambertMaterial?(s(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),h(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(g,d),u(g,d),d.isMeshPhysicalMaterial&&m(g,d,v)):d.isMeshMatcapMaterial?(s(g,d),_(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),b(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,E,w):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Dt&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Dt&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let E=e.get(d),w=E.envMap,v=E.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Au),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,E,w){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*E,g.scale.value=w*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function u(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,E){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Dt&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function b(g,d){let E=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function kg(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,A){let S=A.program;n.uniformBlockBinding(v,S)}function c(v,A){let S=r[v.id];S===void 0&&(g(v),S=h(v),r[v.id]=S,v.addEventListener("dispose",E));let k=A.program;n.updateUBOMapping(v,k);let y=e.render.frame;s[v.id]!==y&&(u(v),s[v.id]=y)}function h(v){let A=f();v.__bindingPointIndex=A;let S=i.createBuffer(),k=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,k,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,S),S}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let A=r[v.id],S=v.uniforms,k=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let y=0,T=S.length;y<T;y++){let C=S[y];if(Array.isArray(C))for(let R=0,U=C.length;R<U;R++)m(C[R],y,R,k);else m(C,y,0,k)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(v,A,S,k){if(b(v,A,S,k)===!0){let y=v.__offset,T=v.value;if(Array.isArray(T)){let C=0;for(let R=0;R<T.length;R++){let U=T[R],q=d(U);_(U,v.__data,C),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(C+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(T,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function _(v,A,S){typeof v=="number"||typeof v=="boolean"?A[0]=v:v.isMatrix3?(A[0]=v.elements[0],A[1]=v.elements[1],A[2]=v.elements[2],A[3]=0,A[4]=v.elements[3],A[5]=v.elements[4],A[6]=v.elements[5],A[7]=0,A[8]=v.elements[6],A[9]=v.elements[7],A[10]=v.elements[8],A[11]=0):ArrayBuffer.isView(v)?A.set(new v.constructor(v.buffer,v.byteOffset,A.length)):v.toArray(A,S)}function b(v,A,S,k){let y=v.value,T=A+"_"+S;if(k[T]===void 0)return typeof y=="number"||typeof y=="boolean"?k[T]=y:ArrayBuffer.isView(y)?k[T]=y.slice():k[T]=y.clone(),!0;{let C=k[T];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return k[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function g(v){let A=v.uniforms,S=0,k=16;for(let T=0,C=A.length;T<C;T++){let R=Array.isArray(A[T])?A[T]:[A[T]];for(let U=0,q=R.length;U<q;U++){let J=R[U],B=Array.isArray(J.value)?J.value:[J.value];for(let X=0,G=B.length;X<G;X++){let $=B[X],Q=d($),he=S%k,me=he%Q.boundary,_e=he+me;S+=me,_e!==0&&k-_e<Q.storage&&(S+=k-_e),J.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=S,S+=Q.storage}}}let y=S%k;return y>0&&(S+=k-y),v.__size=S,v.__cache={},this}function d(v){let A={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(A.boundary=4,A.storage=4):v.isVector2?(A.boundary=8,A.storage=8):v.isVector3||v.isColor?(A.boundary=16,A.storage=12):v.isVector4?(A.boundary=16,A.storage=16):v.isMatrix3?(A.boundary=48,A.storage=48):v.isMatrix4?(A.boundary=64,A.storage=64):v.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(A.boundary=16,A.storage=v.byteLength):we("WebGLRenderer: Unsupported uniform value type.",v),A}function E(v){let A=v.target;A.removeEventListener("dispose",E);let S=a.indexOf(A.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function w(){for(let v in r)i.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:w}}var Cg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xn=null;function Rg(){return xn===null&&(xn=new Rs(Cg,16,16,ii,_n),xn.name="DFG_LUT",xn.minFilter=Tt,xn.magFilter=Tt,xn.wrapS=fn,xn.wrapT=fn,xn.generateMipmaps=!1,xn.needsUpdate=!0),xn}var Ga=class{constructor(e={}){let{canvas:t=Xc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Yt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let b=m,g=new Set([sa,ra,ia]),d=new Set([Yt,sn,Wi,Xi,ta,na]),E=new Uint32Array(4),w=new Int32Array(4),v=new D,A=null,S=null,k=[],y=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,R=!1,U=null,q=null,J=null,B=null;this._outputColorSpace=Pt;let X=0,G=0,$=null,Q=-1,he=null,me=new st,_e=new st,qe=null,at=new Be(0),Ye=0,K=t.width,ie=t.height,ee=1,Ie=null,Le=null,ke=new st(0,0,K,ie),ut=new st(0,0,K,ie),ze=!1,je=new mr,Ze=!1,We=!1,pt=new rt,_t=new D,bt=new st,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ot=!1;function mt(){return $===null?ee:1}let P=n;function Nt(x,L){return t.getContext(x,L)}try{let x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",lt,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",ln,!1),P===null){let L="webgl2";if(P=Nt(L,x),P===null)throw Nt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(x){throw Re("WebGLRenderer: "+x.message),x}let Ke,M,p,N,z,H,te,re,W,Z,se,Me,ce,ae,Ae,Ce,De,I,ne,Y,oe,pe,j;function be(){Ke=new Fp(P),Ke.init(),oe=new Sg(P,Ke),M=new Cp(P,Ke,e,oe),p=new bg(P,Ke),M.reversedDepthBuffer&&u&&p.buffers.depth.setReversed(!0),q=P.createFramebuffer(),J=P.createFramebuffer(),B=P.createFramebuffer(),N=new zp(P),z=new og,H=new Mg(P,Ke,p,z,M,oe,N),te=new Up(C),re=new Hh(P),pe=new wp(P,re),W=new Op(P,re,N,pe),Z=new Gp(P,W,re,pe,N),I=new Vp(P,M,H),Ae=new Rp(z),se=new ag(C,te,Ke,M,pe,Ae),Me=new wg(C,z),ce=new cg,ae=new mg(Ke),De=new Ap(C,te,p,Z,_,l),Ce=new vg(C,Z,M),j=new kg(P,N,M,p),ne=new kp(P,Ke,N),Y=new Bp(P,Ke,N),N.programs=se.programs,C.capabilities=M,C.extensions=Ke,C.properties=z,C.renderLists=ce,C.shadowMap=Ce,C.state=p,C.info=N}be(),b!==Yt&&(T=new Wp(b,t.width,t.height,o,r,s));let xe=new Al(C,P);this.xr=xe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let x=Ke.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=Ke.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(x){x!==void 0&&(ee=x,this.setSize(K,ie,!1))},this.getSize=function(x){return x.set(K,ie)},this.setSize=function(x,L,V=!0){if(xe.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}K=x,ie=L,t.width=Math.floor(x*ee),t.height=Math.floor(L*ee),V===!0&&(t.style.width=x+"px",t.style.height=L+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(K*ee,ie*ee).floor()},this.setDrawingBufferSize=function(x,L,V){K=x,ie=L,ee=V,t.width=Math.floor(x*V),t.height=Math.floor(L*V),this.setViewport(0,0,x,L)},this.setEffects=function(x){if(b===Yt){Re("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let L=0;L<x.length;L++)if(x[L].isOutputPass===!0){we("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(me)},this.getViewport=function(x){return x.copy(ke)},this.setViewport=function(x,L,V,F){x.isVector4?ke.set(x.x,x.y,x.z,x.w):ke.set(x,L,V,F),p.viewport(me.copy(ke).multiplyScalar(ee).round())},this.getScissor=function(x){return x.copy(ut)},this.setScissor=function(x,L,V,F){x.isVector4?ut.set(x.x,x.y,x.z,x.w):ut.set(x,L,V,F),p.scissor(_e.copy(ut).multiplyScalar(ee).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(x){p.setScissorTest(ze=x)},this.setOpaqueSort=function(x){Ie=x},this.setTransparentSort=function(x){Le=x},this.getClearColor=function(x){return x.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(x=!0,L=!0,V=!0){let F=0;if(x){let O=!1;if($!==null){let fe=$.texture.format;O=g.has(fe)}if(O){let fe=$.texture.type,ye=d.has(fe),de=De.getClearColor(),ve=De.getClearAlpha(),Se=de.r,Ne=de.g,Fe=de.b;ye?(E[0]=Se,E[1]=Ne,E[2]=Fe,E[3]=ve,P.clearBufferuiv(P.COLOR,0,E)):(w[0]=Se,w[1]=Ne,w[2]=Fe,w[3]=ve,P.clearBufferiv(P.COLOR,0,w))}else F|=P.COLOR_BUFFER_BIT}L&&(F|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(F|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&P.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),U=x},this.dispose=function(){t.removeEventListener("webglcontextlost",lt,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",ln,!1),De.dispose(),ce.dispose(),ae.dispose(),z.dispose(),te.dispose(),Z.dispose(),pe.dispose(),j.dispose(),se.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Dl),xe.removeEventListener("sessionend",Nl),si.stop()};function lt(x){x.preventDefault(),el("WebGLRenderer: Context Lost."),R=!0}function tt(){el("WebGLRenderer: Context Restored."),R=!1;let x=N.autoReset,L=Ce.enabled,V=Ce.autoUpdate,F=Ce.needsUpdate,O=Ce.type;be(),N.autoReset=x,Ce.enabled=L,Ce.autoUpdate=V,Ce.needsUpdate=F,Ce.type=O}function ln(x){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function cn(x){let L=x.target;L.removeEventListener("dispose",cn),Vu(L)}function Vu(x){Gu(x),z.remove(x)}function Gu(x){let L=z.get(x).programs;L!==void 0&&(L.forEach(function(V){se.releaseProgram(V)}),x.isShaderMaterial&&se.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,V,F,O,fe){L===null&&(L=Et);let ye=O.isMesh&&O.matrixWorld.determinantAffine()<0,de=Xu(x,L,V,F,O);p.setMaterial(F,ye);let ve=V.index,Se=1;if(F.wireframe===!0){if(ve=W.getWireframeAttribute(V),ve===void 0)return;Se=2}let Ne=V.drawRange,Fe=V.attributes.position,Te=Ne.start*Se,$e=(Ne.start+Ne.count)*Se;fe!==null&&(Te=Math.max(Te,fe.start*Se),$e=Math.min($e,(fe.start+fe.count)*Se)),ve!==null?(Te=Math.max(Te,0),$e=Math.min($e,ve.count)):Fe!=null&&(Te=Math.max(Te,0),$e=Math.min($e,Fe.count));let ht=$e-Te;if(ht<0||ht===1/0)return;pe.setup(O,F,de,V,ve);let ct,Qe=ne;if(ve!==null&&(ct=re.get(ve),Qe=Y,Qe.setIndex(ct)),O.isMesh)F.wireframe===!0?(p.setLineWidth(F.wireframeLinewidth*mt()),Qe.setMode(P.LINES)):Qe.setMode(P.TRIANGLES);else if(O.isLine){let At=F.linewidth;At===void 0&&(At=1),p.setLineWidth(At*mt()),O.isLineSegments?Qe.setMode(P.LINES):O.isLineLoop?Qe.setMode(P.LINE_LOOP):Qe.setMode(P.LINE_STRIP)}else O.isPoints?Qe.setMode(P.POINTS):O.isSprite&&Qe.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))Qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let At=O._multiDrawStarts,ge=O._multiDrawCounts,zt=O._multiDrawCount,Xe=ve?re.get(ve).bytesPerElement:1,Zt=z.get(F).currentProgram.getUniforms();for(let un=0;un<zt;un++)Zt.setValue(P,"_gl_DrawID",un),Qe.render(At[un]/Xe,ge[un])}else if(O.isInstancedMesh)Qe.renderInstances(Te,ht,O.count);else if(V.isInstancedBufferGeometry){let At=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ge=Math.min(V.instanceCount,At);Qe.renderInstances(Te,ht,ge)}else Qe.render(Te,ht)};function Ll(x,L,V){x.transparent===!0&&x.side===Kt&&x.forceSinglePass===!1?(x.side=Dt,x.needsUpdate=!0,Hr(x,L,V),x.side=Cn,x.needsUpdate=!0,Hr(x,L,V),x.side=Kt):Hr(x,L,V)}this.compile=function(x,L,V=null){V===null&&(V=x),S=ae.get(V),S.init(L),y.push(S),V.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(S.pushLight(O),O.castShadow&&S.pushShadow(O))}),x!==V&&x.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(S.pushLight(O),O.castShadow&&S.pushShadow(O))}),S.setupLights();let F=new Set;return x.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let fe=O.material;if(fe)if(Array.isArray(fe))for(let ye=0;ye<fe.length;ye++){let de=fe[ye];Ll(de,V,O),F.add(de)}else Ll(fe,V,O),F.add(fe)}),S=y.pop(),F},this.compileAsync=function(x,L,V=null){let F=this.compile(x,L,V);return new Promise(O=>{function fe(){if(F.forEach(function(ye){z.get(ye).currentProgram.isReady()&&F.delete(ye)}),F.size===0){O(x);return}setTimeout(fe,10)}Ke.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let $a=null;function Hu(x){$a&&$a(x)}function Dl(){si.stop()}function Nl(){si.start()}let si=new vu;si.setAnimationLoop(Hu),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(x){$a=x,xe.setAnimationLoop(x),x===null?si.stop():si.start()},xe.addEventListener("sessionstart",Dl),xe.addEventListener("sessionend",Nl),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;U!==null&&U.renderStart(x,L);let V=xe.enabled===!0&&xe.isPresenting===!0,F=T!==null&&($===null||V)&&T.begin(C,$);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(L),L=xe.getCamera()),x.isScene===!0&&x.onBeforeRender(C,x,L,$),S=ae.get(x,y.length),S.init(L),S.state.textureUnits=H.getTextureUnits(),y.push(S),pt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),je.setFromProjectionMatrix(pt,nn,L.reversedDepth),We=this.localClippingEnabled,Ze=Ae.init(this.clippingPlanes,We),A=ce.get(x,k.length),A.init(),k.push(A),xe.enabled===!0&&xe.isPresenting===!0){let ye=C.xr.getDepthSensingMesh();ye!==null&&ja(ye,L,-1/0,C.sortObjects)}ja(x,L,0,C.sortObjects),A.finish(),C.sortObjects===!0&&A.sort(Ie,Le,L.reversedDepth),ot=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,ot&&De.addToRenderList(A,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&Ae.beginShadows();let O=S.state.shadowsArray;if(Ce.render(O,x,L),Ze===!0&&Ae.endShadows(),(F&&T.hasRenderPass())===!1){let ye=A.opaque,de=A.transmissive;if(S.setupLights(),L.isArrayCamera){let ve=L.cameras;if(de.length>0)for(let Se=0,Ne=ve.length;Se<Ne;Se++){let Fe=ve[Se];Fl(ye,de,x,Fe)}ot&&De.render(x);for(let Se=0,Ne=ve.length;Se<Ne;Se++){let Fe=ve[Se];Ul(A,x,Fe,Fe.viewport)}}else de.length>0&&Fl(ye,de,x,L),ot&&De.render(x),Ul(A,x,L)}$!==null&&G===0&&(H.updateMultisampleRenderTarget($),H.updateRenderTargetMipmap($)),F&&T.end(C),x.isScene===!0&&x.onAfterRender(C,x,L),pe.resetDefaultState(),Q=-1,he=null,y.pop(),y.length>0?(S=y[y.length-1],H.setTextureUnits(S.state.textureUnits),Ze===!0&&Ae.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,k.pop(),k.length>0?A=k[k.length-1]:A=null,U!==null&&U.renderEnd()};function ja(x,L,V,F){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)V=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLightProbeGrid)S.pushLightProbeGrid(x);else if(x.isLight)S.pushLight(x),x.castShadow&&S.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||je.intersectsSprite(x)){F&&bt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(pt);let ye=Z.update(x),de=x.material;de.visible&&A.push(x,ye,de,V,bt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||je.intersectsObject(x))){let ye=Z.update(x),de=x.material;if(F&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),bt.copy(x.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),bt.copy(ye.boundingSphere.center)),bt.applyMatrix4(x.matrixWorld).applyMatrix4(pt)),Array.isArray(de)){let ve=ye.groups;for(let Se=0,Ne=ve.length;Se<Ne;Se++){let Fe=ve[Se],Te=de[Fe.materialIndex];Te&&Te.visible&&A.push(x,ye,Te,V,bt.z,Fe)}}else de.visible&&A.push(x,ye,de,V,bt.z,null)}}let fe=x.children;for(let ye=0,de=fe.length;ye<de;ye++)ja(fe[ye],L,V,F)}function Ul(x,L,V,F){let{opaque:O,transmissive:fe,transparent:ye}=x;S.setupLightsView(V),Ze===!0&&Ae.setGlobalState(C.clippingPlanes,V),F&&p.viewport(me.copy(F)),O.length>0&&Gr(O,L,V),fe.length>0&&Gr(fe,L,V),ye.length>0&&Gr(ye,L,V),p.buffers.depth.setTest(!0),p.buffers.depth.setMask(!0),p.buffers.color.setMask(!0),p.setPolygonOffset(!1)}function Fl(x,L,V,F){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[F.id]===void 0){let Te=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[F.id]=new Wt(1,1,{generateMipmaps:!0,type:Te?_n:Yt,minFilter:ti,samples:Math.max(4,M.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace})}let fe=S.state.transmissionRenderTarget[F.id],ye=F.viewport||me;fe.setSize(ye.z*C.transmissionResolutionScale,ye.w*C.transmissionResolutionScale);let de=C.getRenderTarget(),ve=C.getActiveCubeFace(),Se=C.getActiveMipmapLevel();C.setRenderTarget(fe),C.getClearColor(at),Ye=C.getClearAlpha(),Ye<1&&C.setClearColor(16777215,.5),C.clear(),ot&&De.render(V);let Ne=C.toneMapping;C.toneMapping=rn;let Fe=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),S.setupLightsView(F),Ze===!0&&Ae.setGlobalState(C.clippingPlanes,F),Gr(x,V,F),H.updateMultisampleRenderTarget(fe),H.updateRenderTargetMipmap(fe),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let $e=0,ht=L.length;$e<ht;$e++){let ct=L[$e],{object:Qe,geometry:At,material:ge,group:zt}=ct;if(ge.side===Kt&&Qe.layers.test(F.layers)){let Xe=ge.side;ge.side=Dt,ge.needsUpdate=!0,Ol(Qe,V,F,At,ge,zt),ge.side=Xe,ge.needsUpdate=!0,Te=!0}}Te===!0&&(H.updateMultisampleRenderTarget(fe),H.updateRenderTargetMipmap(fe))}C.setRenderTarget(de,ve,Se),C.setClearColor(at,Ye),Fe!==void 0&&(F.viewport=Fe),C.toneMapping=Ne}function Gr(x,L,V){let F=L.isScene===!0?L.overrideMaterial:null;for(let O=0,fe=x.length;O<fe;O++){let ye=x[O],{object:de,geometry:ve,group:Se}=ye,Ne=ye.material;Ne.allowOverride===!0&&F!==null&&(Ne=F),de.layers.test(V.layers)&&Ol(de,L,V,ve,Ne,Se)}}function Ol(x,L,V,F,O,fe){x.onBeforeRender(C,L,V,F,O,fe),x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),O.onBeforeRender(C,L,V,F,x,fe),O.transparent===!0&&O.side===Kt&&O.forceSinglePass===!1?(O.side=Dt,O.needsUpdate=!0,C.renderBufferDirect(V,L,F,O,x,fe),O.side=Cn,O.needsUpdate=!0,C.renderBufferDirect(V,L,F,O,x,fe),O.side=Kt):C.renderBufferDirect(V,L,F,O,x,fe),x.onAfterRender(C,L,V,F,O,fe)}function Hr(x,L,V){L.isScene!==!0&&(L=Et);let F=z.get(x),O=S.state.lights,fe=S.state.shadowsArray,ye=O.state.version,de=se.getParameters(x,O.state,fe,L,V,S.state.lightProbeGridArray),ve=se.getProgramCacheKey(de),Se=F.programs;F.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,F.fog=L.fog;let Ne=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;F.envMap=te.get(x.envMap||F.environment,Ne),F.envMapRotation=F.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,Se===void 0&&(x.addEventListener("dispose",cn),Se=new Map,F.programs=Se);let Fe=Se.get(ve);if(Fe!==void 0){if(F.currentProgram===Fe&&F.lightsStateVersion===ye)return zl(x,de),Fe}else de.uniforms=se.getUniforms(x),U!==null&&x.isNodeMaterial&&U.build(x,V,de),x.onBeforeCompile(de,C),Fe=se.acquireProgram(de,ve),Se.set(ve,Fe),F.uniforms=de.uniforms;let Te=F.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Te.clippingPlanes=Ae.uniform),zl(x,de),F.needsLights=Yu(x),F.lightsStateVersion=ye,F.needsLights&&(Te.ambientLightColor.value=O.state.ambient,Te.lightProbe.value=O.state.probe,Te.directionalLights.value=O.state.directional,Te.directionalLightShadows.value=O.state.directionalShadow,Te.spotLights.value=O.state.spot,Te.spotLightShadows.value=O.state.spotShadow,Te.rectAreaLights.value=O.state.rectArea,Te.ltc_1.value=O.state.rectAreaLTC1,Te.ltc_2.value=O.state.rectAreaLTC2,Te.pointLights.value=O.state.point,Te.pointLightShadows.value=O.state.pointShadow,Te.hemisphereLights.value=O.state.hemi,Te.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Te.spotLightMatrix.value=O.state.spotLightMatrix,Te.spotLightMap.value=O.state.spotLightMap,Te.pointShadowMatrix.value=O.state.pointShadowMatrix),F.lightProbeGrid=S.state.lightProbeGridArray.length>0,F.currentProgram=Fe,F.uniformsList=null,Fe}function Bl(x){if(x.uniformsList===null){let L=x.currentProgram.getUniforms();x.uniformsList=Zi.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function zl(x,L){let V=z.get(x);V.outputColorSpace=L.outputColorSpace,V.batching=L.batching,V.batchingColor=L.batchingColor,V.instancing=L.instancing,V.instancingColor=L.instancingColor,V.instancingMorph=L.instancingMorph,V.skinning=L.skinning,V.morphTargets=L.morphTargets,V.morphNormals=L.morphNormals,V.morphColors=L.morphColors,V.morphTargetsCount=L.morphTargetsCount,V.numClippingPlanes=L.numClippingPlanes,V.numIntersection=L.numClipIntersection,V.vertexAlphas=L.vertexAlphas,V.vertexTangents=L.vertexTangents,V.toneMapping=L.toneMapping}function Wu(x,L){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;v.setFromMatrixPosition(L.matrixWorld);for(let V=0,F=x.length;V<F;V++){let O=x[V];if(O.texture!==null&&O.boundingBox.containsPoint(v))return O}return null}function Xu(x,L,V,F,O){L.isScene!==!0&&(L=Et),H.resetTextureUnits();let fe=L.fog,ye=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?L.environment:null,de=$===null?C.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Ve.workingColorSpace,ve=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Se=te.get(F.envMap||ye,ve),Ne=F.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Fe=!!V.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Te=!!V.morphAttributes.position,$e=!!V.morphAttributes.normal,ht=!!V.morphAttributes.color,ct=rn;F.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ct=C.toneMapping);let Qe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,At=Qe!==void 0?Qe.length:0,ge=z.get(F),zt=S.state.lights;if(Ze===!0&&(We===!0||x!==he)){let nt=x===he&&F.id===Q;Ae.setState(F,x,nt)}let Xe=!1;F.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==zt.state.version||ge.outputColorSpace!==de||O.isBatchedMesh&&ge.batching===!1||!O.isBatchedMesh&&ge.batching===!0||O.isBatchedMesh&&ge.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&ge.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&ge.instancing===!1||!O.isInstancedMesh&&ge.instancing===!0||O.isSkinnedMesh&&ge.skinning===!1||!O.isSkinnedMesh&&ge.skinning===!0||O.isInstancedMesh&&ge.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ge.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ge.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ge.instancingMorph===!1&&O.morphTexture!==null||ge.envMap!==Se||F.fog===!0&&ge.fog!==fe||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Ae.numPlanes||ge.numIntersection!==Ae.numIntersection)||ge.vertexAlphas!==Ne||ge.vertexTangents!==Fe||ge.morphTargets!==Te||ge.morphNormals!==$e||ge.morphColors!==ht||ge.toneMapping!==ct||ge.morphTargetsCount!==At||!!ge.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Xe=!0):(Xe=!0,ge.__version=F.version);let Zt=ge.currentProgram;Xe===!0&&(Zt=Hr(F,L,O),U&&F.isNodeMaterial&&U.onUpdateProgram(F,Zt,ge));let un=!1,Nn=!1,vi=!1,et=Zt.getUniforms(),dt=ge.uniforms;if(p.useProgram(Zt.program)&&(un=!0,Nn=!0,vi=!0),F.id!==Q&&(Q=F.id,Nn=!0),ge.needsLights){let nt=Wu(S.state.lightProbeGridArray,O);ge.lightProbeGrid!==nt&&(ge.lightProbeGrid=nt,Nn=!0)}if(un||he!==x){p.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),et.setValue(P,"projectionMatrix",x.projectionMatrix),et.setValue(P,"viewMatrix",x.matrixWorldInverse);let Fn=et.map.cameraPosition;Fn!==void 0&&Fn.setValue(P,_t.setFromMatrixPosition(x.matrixWorld)),M.logarithmicDepthBuffer&&et.setValue(P,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&et.setValue(P,"isOrthographic",x.isOrthographicCamera===!0),he!==x&&(he=x,Nn=!0,vi=!0)}if(ge.needsLights&&(zt.state.directionalShadowMap.length>0&&et.setValue(P,"directionalShadowMap",zt.state.directionalShadowMap,H),zt.state.spotShadowMap.length>0&&et.setValue(P,"spotShadowMap",zt.state.spotShadowMap,H),zt.state.pointShadowMap.length>0&&et.setValue(P,"pointShadowMap",zt.state.pointShadowMap,H)),O.isSkinnedMesh){et.setOptional(P,O,"bindMatrix"),et.setOptional(P,O,"bindMatrixInverse");let nt=O.skeleton;nt&&(nt.boneTexture===null&&nt.computeBoneTexture(),et.setValue(P,"boneTexture",nt.boneTexture,H))}O.isBatchedMesh&&(et.setOptional(P,O,"batchingTexture"),et.setValue(P,"batchingTexture",O._matricesTexture,H),et.setOptional(P,O,"batchingIdTexture"),et.setValue(P,"batchingIdTexture",O._indirectTexture,H),et.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&et.setValue(P,"batchingColorTexture",O._colorsTexture,H));let Un=V.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&I.update(O,V,Zt),(Nn||ge.receiveShadow!==O.receiveShadow)&&(ge.receiveShadow=O.receiveShadow,et.setValue(P,"receiveShadow",O.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&L.environment!==null&&(dt.envMapIntensity.value=L.environmentIntensity),dt.dfgLUT!==void 0&&(dt.dfgLUT.value=Rg()),Nn){if(et.setValue(P,"toneMappingExposure",C.toneMappingExposure),ge.needsLights&&qu(dt,vi),fe&&F.fog===!0&&Me.refreshFogUniforms(dt,fe),Me.refreshMaterialUniforms(dt,F,ee,ie,S.state.transmissionRenderTarget[x.id]),ge.needsLights&&ge.lightProbeGrid){let nt=ge.lightProbeGrid;dt.probesSH.value=nt.texture,dt.probesMin.value.copy(nt.boundingBox.min),dt.probesMax.value.copy(nt.boundingBox.max),dt.probesResolution.value.copy(nt.resolution)}Zi.upload(P,Bl(ge),dt,H)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Zi.upload(P,Bl(ge),dt,H),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&et.setValue(P,"center",O.center),et.setValue(P,"modelViewMatrix",O.modelViewMatrix),et.setValue(P,"normalMatrix",O.normalMatrix),et.setValue(P,"modelMatrix",O.matrixWorld),F.uniformsGroups!==void 0){let nt=F.uniformsGroups;for(let Fn=0,bi=nt.length;Fn<bi;Fn++){let Vl=nt[Fn];j.update(Vl,Zt),j.bind(Vl,Zt)}}return Zt}function qu(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function Yu(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(x,L,V){let F=z.get(x);F.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),z.get(x.texture).__webglTexture=L,z.get(x.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:V,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,L){let V=z.get(x);V.__webglFramebuffer=L,V.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,V=0){$=x,X=L,G=V;let F=null,O=!1,fe=!1;if(x){let de=z.get(x);if(de.__useDefaultFramebuffer!==void 0){p.bindFramebuffer(P.FRAMEBUFFER,de.__webglFramebuffer),me.copy(x.viewport),_e.copy(x.scissor),qe=x.scissorTest,p.viewport(me),p.scissor(_e),p.setScissorTest(qe),Q=-1;return}else if(de.__webglFramebuffer===void 0)H.setupRenderTarget(x);else if(de.__hasExternalTextures)H.rebindTextures(x,z.get(x.texture).__webglTexture,z.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Ne=x.depthTexture;if(de.__boundDepthTexture!==Ne){if(Ne!==null&&z.has(Ne)&&(x.width!==Ne.image.width||x.height!==Ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(x)}}let ve=x.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(fe=!0);let Se=z.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Se[L])?F=Se[L][V]:F=Se[L],O=!0):x.samples>0&&H.useMultisampledRTT(x)===!1?F=z.get(x).__webglMultisampledFramebuffer:Array.isArray(Se)?F=Se[V]:F=Se,me.copy(x.viewport),_e.copy(x.scissor),qe=x.scissorTest}else me.copy(ke).multiplyScalar(ee).floor(),_e.copy(ut).multiplyScalar(ee).floor(),qe=ze;if(V!==0&&(F=q),p.bindFramebuffer(P.FRAMEBUFFER,F)&&p.drawBuffers(x,F),p.viewport(me),p.scissor(_e),p.setScissorTest(qe),O){let de=z.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+L,de.__webglTexture,V)}else if(fe){let de=L;for(let ve=0;ve<x.textures.length;ve++){let Se=z.get(x.textures[ve]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ve,Se.__webglTexture,V,de)}}else if(x!==null&&V!==0){let de=z.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,de.__webglTexture,V)}Q=-1},this.readRenderTargetPixels=function(x,L,V,F,O,fe,ye,de=0){if(!(x&&x.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=z.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ye!==void 0&&(ve=ve[ye]),ve){p.bindFramebuffer(P.FRAMEBUFFER,ve);try{let Se=x.textures[de],Ne=Se.format,Fe=Se.type;if(x.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),!M.textureFormatReadable(Ne)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!M.textureTypeReadable(Fe)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-F&&V>=0&&V<=x.height-O&&P.readPixels(L,V,F,O,oe.convert(Ne),oe.convert(Fe),fe)}finally{let Se=$!==null?z.get($).__webglFramebuffer:null;p.bindFramebuffer(P.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(x,L,V,F,O,fe,ye,de=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=z.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ye!==void 0&&(ve=ve[ye]),ve)if(L>=0&&L<=x.width-F&&V>=0&&V<=x.height-O){p.bindFramebuffer(P.FRAMEBUFFER,ve);let Se=x.textures[de],Ne=Se.format,Fe=Se.type;if(x.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),!M.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!M.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Te=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Te),P.bufferData(P.PIXEL_PACK_BUFFER,fe.byteLength,P.STREAM_READ),P.readPixels(L,V,F,O,oe.convert(Ne),oe.convert(Fe),0);let $e=$!==null?z.get($).__webglFramebuffer:null;p.bindFramebuffer(P.FRAMEBUFFER,$e);let ht=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Yc(P,ht,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Te),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,fe),P.deleteBuffer(Te),P.deleteSync(ht),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,L=null,V=0){let F=Math.pow(2,-V),O=Math.floor(x.image.width*F),fe=Math.floor(x.image.height*F),ye=L!==null?L.x:0,de=L!==null?L.y:0;H.setTexture2D(x,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,ye,de,O,fe),p.unbindTexture()},this.copyTextureToTexture=function(x,L,V=null,F=null,O=0,fe=0){let ye,de,ve,Se,Ne,Fe,Te,$e,ht,ct=x.isCompressedTexture?x.mipmaps[fe]:x.image;if(V!==null)ye=V.max.x-V.min.x,de=V.max.y-V.min.y,ve=V.isBox3?V.max.z-V.min.z:1,Se=V.min.x,Ne=V.min.y,Fe=V.isBox3?V.min.z:0;else{let dt=Math.pow(2,-O);ye=Math.floor(ct.width*dt),de=Math.floor(ct.height*dt),x.isDataArrayTexture?ve=ct.depth:x.isData3DTexture?ve=Math.floor(ct.depth*dt):ve=1,Se=0,Ne=0,Fe=0}F!==null?(Te=F.x,$e=F.y,ht=F.z):(Te=0,$e=0,ht=0);let Qe=oe.convert(L.format),At=oe.convert(L.type),ge;L.isData3DTexture?(H.setTexture3D(L,0),ge=P.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(H.setTexture2DArray(L,0),ge=P.TEXTURE_2D_ARRAY):(H.setTexture2D(L,0),ge=P.TEXTURE_2D),p.activeTexture(P.TEXTURE0),p.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),p.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),p.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);let zt=p.getParameter(P.UNPACK_ROW_LENGTH),Xe=p.getParameter(P.UNPACK_IMAGE_HEIGHT),Zt=p.getParameter(P.UNPACK_SKIP_PIXELS),un=p.getParameter(P.UNPACK_SKIP_ROWS),Nn=p.getParameter(P.UNPACK_SKIP_IMAGES);p.pixelStorei(P.UNPACK_ROW_LENGTH,ct.width),p.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ct.height),p.pixelStorei(P.UNPACK_SKIP_PIXELS,Se),p.pixelStorei(P.UNPACK_SKIP_ROWS,Ne),p.pixelStorei(P.UNPACK_SKIP_IMAGES,Fe);let vi=x.isDataArrayTexture||x.isData3DTexture,et=L.isDataArrayTexture||L.isData3DTexture;if(x.isDepthTexture){let dt=z.get(x),Un=z.get(L),nt=z.get(dt.__renderTarget),Fn=z.get(Un.__renderTarget);p.bindFramebuffer(P.READ_FRAMEBUFFER,nt.__webglFramebuffer),p.bindFramebuffer(P.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let bi=0;bi<ve;bi++)vi&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,z.get(x).__webglTexture,O,Fe+bi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,z.get(L).__webglTexture,fe,ht+bi)),P.blitFramebuffer(Se,Ne,ye,de,Te,$e,ye,de,P.DEPTH_BUFFER_BIT,P.NEAREST);p.bindFramebuffer(P.READ_FRAMEBUFFER,null),p.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||x.isRenderTargetTexture||z.has(x)){let dt=z.get(x),Un=z.get(L);p.bindFramebuffer(P.READ_FRAMEBUFFER,J),p.bindFramebuffer(P.DRAW_FRAMEBUFFER,B);for(let nt=0;nt<ve;nt++)vi?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,dt.__webglTexture,O,Fe+nt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,dt.__webglTexture,O),et?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Un.__webglTexture,fe,ht+nt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Un.__webglTexture,fe),O!==0?P.blitFramebuffer(Se,Ne,ye,de,Te,$e,ye,de,P.COLOR_BUFFER_BIT,P.NEAREST):et?P.copyTexSubImage3D(ge,fe,Te,$e,ht+nt,Se,Ne,ye,de):P.copyTexSubImage2D(ge,fe,Te,$e,Se,Ne,ye,de);p.bindFramebuffer(P.READ_FRAMEBUFFER,null),p.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else et?x.isDataTexture||x.isData3DTexture?P.texSubImage3D(ge,fe,Te,$e,ht,ye,de,ve,Qe,At,ct.data):L.isCompressedArrayTexture?P.compressedTexSubImage3D(ge,fe,Te,$e,ht,ye,de,ve,Qe,ct.data):P.texSubImage3D(ge,fe,Te,$e,ht,ye,de,ve,Qe,At,ct):x.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,fe,Te,$e,ye,de,Qe,At,ct.data):x.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,fe,Te,$e,ct.width,ct.height,Qe,ct.data):P.texSubImage2D(P.TEXTURE_2D,fe,Te,$e,ye,de,Qe,At,ct);p.pixelStorei(P.UNPACK_ROW_LENGTH,zt),p.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Xe),p.pixelStorei(P.UNPACK_SKIP_PIXELS,Zt),p.pixelStorei(P.UNPACK_SKIP_ROWS,un),p.pixelStorei(P.UNPACK_SKIP_IMAGES,Nn),fe===0&&L.generateMipmaps&&P.generateMipmap(ge),p.unbindTexture()},this.initRenderTarget=function(x){z.get(x).__webglFramebuffer===void 0&&H.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?H.setTextureCube(x,0):x.isData3DTexture?H.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?H.setTexture2DArray(x,0):H.setTexture2D(x,0),p.unbindTexture()},this.resetState=function(){X=0,G=0,$=null,p.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}};var on={people:[{name:"Galileo Galilei",born:1564,died:1642,country:"\u0130talya",type:"Bilim \u0130nsan\u0131",stories:[{text:"Galileo, deney, \xF6l\xE7\xFCm ve matematiksel hesaplarla do\u011Fa \xE7al\u0131\u015Fmalar\u0131na \xF6nc\xFCl\xFCk etti. Einstein, Galileo i\xE7in modern bilimin babas\u0131 demi\u015Ftir.",skills:["Giri\u015Fken","Yarat\u0131c\u0131l\u0131k","Sorgulama"],source:null},{text:"Galileo, bulundu\u011Fu yerden s\u0131k s\u0131k denizdeki gel-git hareketlerini izlemek \xFCzere Venedik'e gidiyordu. Bu seyahatler sayesinde, gel-gitlerin gizemli olaylar olmad\u0131\u011F\u0131 ve d\xFCnyan\u0131n yer\xE7ekimi ile ili\u015Fkili mekanik bir hareket oldu\u011Fu ger\xE7e\u011Fini tan\u0131mlayan ilk ki\u015Fi oldu.",skills:["Merak","Sorgulama","Sebat"],source:null},{text:"Galileo, Hollandal\u0131 bir adam\u0131n yapt\u0131\u011F\u0131 uzaklar\u0131 g\xF6steren bir teknolojiden (muhtemelen bir d\xFCrb\xFCn) esinlenerek i\xE7 b\xFCkey ve d\u0131\u015F b\xFCkey mercekler kullanarak ilk teleskobu geli\u015Ftirdi. Bu teleskop, insanl\u0131k tarihindeki d\xF6n\xFCm noktalar\u0131ndan birisi oldu \xE7\xFCnk\xFC insanl\u0131k ilk defa d\xFCnyan\u0131n evrenin merkezi olmad\u0131\u011F\u0131n\u0131, di\u011Fer gezegenlerin d\xFCnyan\u0131n etraf\u0131nda d\xF6nmedi\u011Fini, Ay'\u0131n d\xFCnyan\u0131n uyudusu oldu\u011Funu, d\xFCnyan\u0131n da G\xFCne\u015F'in etraf\u0131nda d\xF6nd\xFC\u011F\xFC ispatlanm\u0131\u015F oldu.",skills:["Yarat\u0131c\u0131l\u0131k","\xD6zyeterlik","Giri\u015Fkenlik"],source:null},{text:"Galileo, teleskobu icad\u0131yla g\xF6ky\xFCz\xFC hakk\u0131nda elde etti\u011Fi yeni bilgileri kitapla\u015Ft\u0131rmas\u0131yla beraber Kilise ile ba\u015F\u0131 belaya girdi. O d\xF6nemde en bask\u0131n siyasi kurulu\u015Flardan olan Kilise, Galileo'nun ortaya koydu\u011Fu yeni bilgilerle kutsal kitaptaki bilgilerin \xE7eli\u015Fti\u011Fi iddias\u0131yla Galileo'ya \xE7ok a\u011F\u0131r cezalar verdi. Kilisenin yapt\u0131r\u0131mlar\u0131na boyun e\u011Fmi\u015F gibi g\xF6r\xFCnen Galileo inatla ara\u015Ft\u0131rmalar\u0131na devam etti.",skills:["Strese Dayan\u0131kl\u0131l\u0131k","Sorgulama","Iyimserlik","Ba\u015Far\u0131ya Odakl\u0131l\u0131k"],source:null}],skillScores:{"Ba\u015Far\u0131ya Odakl\u0131l\u0131k":1,Sebat:4,"\xD6z D\xFCzenleme":0,Dayan\u0131\u015Fma:0,Sosyallik:0,Giri\u015Fkenlik:2,Merak:1,Yarat\u0131c\u0131l\u0131k:2,Sorgulama:3}},{name:"Isaac Newton",born:1642,died:1727,country:"\u0130ngiltere",type:"Bilim \u0130nsan\u0131",stories:[{text:"1600'l\xFC y\u0131llar\u0131n \u0130ngiltere'sinde k\xFC\xE7\xFCk bir kasabada d\xFCnyaya gelen Isaac'\u0131n babas\u0131 daha o d\xFCnyaya gelmeden \xF6nce \xF6ld\xFC\u011F\xFC i\xE7in hayata \xE7ok da \u015Fansl\u0131 ba\u015Flad\u0131\u011F\u0131n\u0131 s\xF6ylemek m\xFCmk\xFCn olmaz!",skills:[],source:null},{text:"\xC7ok da sosyal olmad\u0131\u011F\u0131 \xE7ocuklu\u011Funu b\xFCy\xFCkannesi ve b\xFCy\xFCkbabas\u0131n\u0131n yan\u0131nda ge\xE7iren \xE7elimsiz Isaac, daha ilkokul y\u0131llar\u0131nda makinelerin nas\u0131l \xE7al\u0131\u015Ft\u0131klar\u0131n\u0131 merak etmeye ba\u015Flam\u0131\u015F ve kendince makine tasar\u0131mlar\u0131 yapm\u0131\u015Ft\u0131r. Kendi elleriyle minyat\xFCr de\u011Firmen bile yapm\u0131\u015Ft\u0131.",skills:["Merak","Sorgulama","Yarat\u0131c\u0131l\u0131k"],source:null},{text:"Isaac k\xFC\xE7\xFCk ya\u015F\u0131na ra\u011Fmen d\xF6nemin \xFCnl\xFC filozofu Francis Bacon ve \xFCnl\xFC bilim insanlar\u0131 Johannes Kepler'in ve Galileo'nun kitaplar\u0131yla makineleri anlatan kitaplar\u0131 okumay\u0131 \xE7ok seviyordu.",skills:["Merak"],source:null},{text:"Ailesine ait bir \xE7iftlikleri vard\u0131 ve ailesi Isaac'\u0131n bu \xE7iftli\u011Fin ba\u015F\u0131na ge\xE7erek \xE7ift\xE7i olmas\u0131n\u0131 beklerken o okumay\u0131 ve bilimle, icatlarla u\u011Fra\u015Fmay\u0131 tercih etti.",skills:["Ba\u015Far\u0131ya Odakl\u0131l\u0131k"],source:null},{text:"Isaac, tahta oyuncaklar, saatler ve mekanik aletler yapma konusunda \xE7ok marifetli ve yarat\u0131c\u0131yd\u0131.",skills:["Yarat\u0131c\u0131l\u0131k","\xD6zyeterlik"],source:null},{text:"Isaac, evinden ayr\u0131l\u0131p Cambridge'deki Trinity Kolej'e \xDCniversite e\u011Fitimine gitti\u011Finde \xE7ok da bekledi\u011Fi ortam\u0131 bulamam\u0131\u015Ft\u0131. Hi\xE7biri deneye dayanmayan, Antik Yunan'daki Aristoteles ve Platon gibi d\xFC\u015F\xFCn\xFCrlerin felsefelerini ezberlemesinin istendi\u011Fi bir e\u011Fitim istemiyordu. O, s\xF6ylenen her\u015Feyin deneylerle do\u011Frulanmas\u0131n\u0131 ve uygulamaya d\xF6n\xFC\u015Ft\xFC\u011F\xFC bir e\u011Fitim hayal ediyordu.",skills:["Merak","Sorgulama","Yarat\u0131c\u0131l\u0131k"],source:null},{text:"D\xFCnya tarihinin gelmi\u015F ge\xE7mi\u015F en ba\u015Far\u0131l\u0131 bilim insanlar\u0131ndan birisi olarak kabul edilen Isaac Trinity Kolej'e giri\u015F s\u0131navlar\u0131n\u0131 zar zor kazand\u0131. Yani, asl\u0131nda Isaac da d\xFC\u015F\xFCnd\xFC\u011F\xFCn gibi mucizevi \u015Fekilde her\u015Feyi bilebilen birisi de\u011Fildi. O da \xE7ok ama \xE7ok \xE7al\u0131\u015Farak ba\u015Fard\u0131...",skills:["Strese Dayan\u0131kl\u0131l\u0131k"],source:null},{text:"Isaac, okulundaki hocalar\u0131ndan \xE7ok kendisinden onlarca y\u0131l \xF6nce ya\u015Fam\u0131\u015F Descartes, Bacon gibi filozoflar\u0131, Kepler ve Galileo gibi bilim insanlar\u0131n\u0131 ger\xE7ek hocas\u0131 olarak kabul ediyordu. Ger\xE7ekten de Isaac yapt\u0131\u011F\u0131 ara\u015Ft\u0131rmalarla sayd\u0131\u011F\u0131m\u0131z zamanlar\u0131n\u0131n \xF6tesindeki bu d\xFC\u015F\xFCn\xFCrlerin \xE7al\u0131\u015Fmalar\u0131n\u0131 \xE7ok daha ileriye ta\u015F\u0131m\u0131\u015Ft\u0131.",skills:["Merak","Sorgulama","\xD6zd\xFCzenleme"],source:null},{text:"\u0130lkokul y\u0131llar\u0131nda matemati\u011Fi \xE7ok da sevmeyen Isaac \xF6zellikle \xFCniversite e\u011Fitimi s\u0131ras\u0131nda fizik ve matemati\u011Fi \xF6ylesine sevmi\u015Fti ki o d\xF6nemde okulundaki hocalar\u0131n bir \xE7o\u011Fundan daha iyi matematik bilgisi vard\u0131. \xDCniversitedeki hayat\u0131n\u0131n \xF6nemli bir k\u0131sm\u0131n\u0131 \xE7al\u0131\u015Fmaya ve deneylere ay\u0131rm\u0131\u015Ft\u0131. Ki o \xE7al\u0131\u015Fmalarda elde etti\u011Fi bir \xE7ok bilimsel bilgi bug\xFCn bile hala hayat\u0131m\u0131zdaki bir \xE7ok teknolojik icad\u0131n temelini olu\u015Fturmaktad\u0131r.",skills:["Ba\u015Far\u0131ya Odakl\u0131l\u0131k","\xD6zyeterlik","\xD6zd\xFCzenleme"],source:null},{text:"Isaac'\u0131n hayat\u0131 ve belki de d\xFCnyan\u0131n kaderi, bug\xFCnlerde bizlere de hi\xE7 yabanc\u0131 olmayan b\xFCy\xFCk bir olayla de\u011Fi\u015Fmi\u015Fti. T\xFCm \u0130ngiltere'yi ve Avrupa'y\u0131 etkisi alt\u0131na alan veba salg\u0131n\u0131 nedeniyle Isaac k\xF6y\xFCne geri d\xF6nd\xFC. 1,5 y\u0131l kadar kald\u0131\u011F\u0131 k\xF6y\xFCnde yapt\u0131\u011F\u0131 \xE7al\u0131\u015Fmalar fizik alan\u0131nda \xE7\u0131\u011F\u0131r a\xE7t\u0131.",skills:["Duygu Kontrol\xFC","Merak","Yarat\u0131c\u0131l\u0131k","Ele\u015Ftirel D\xFC\u015F\xFCnme","Sorgulama","Ba\u015Far\u0131ya Odakl\u0131l\u0131k"],source:null},{text:"O g\xFCne kadar \xE7ok da \xF6nemli olmayan gizemli bir konu olan \u0131\u015F\u0131\u011F\u0131n prizmada k\u0131r\u0131larak renklere ayr\u0131\u015Fmas\u0131n\u0131n bilimsel ilk a\xE7\u0131klamas\u0131n\u0131 k\xF6y\xFCnde yapt\u0131\u011F\u0131 \xE7al\u0131\u015Fmalarla Isaac yapt\u0131. Bu \xE7al\u0131\u015Fma sayesinde astronomi \xE7al\u0131\u015Fmalar\u0131nda kullan\u0131lan teleskoplar\u0131n g\xF6r\xFCnt\xFC kalitesi y\xFCkseldi ve insanlar\u0131n evrenle ilgili bilgisi \xE7ok daha fazla artt\u0131.",skills:["Ba\u015Far\u0131ya Odakl\u0131l\u0131k","Yarat\u0131c\u0131l\u0131k","Merak","\xD6zyeterlik","\xD6zd\xFCzenleme."],source:null},{text:"Bu hikaye ne kadar do\u011Fru bilemeyiz ama veba salg\u0131n\u0131 g\xFCnlerinde k\xF6y\xFCnde tarlalarda gezerken, bir elman\u0131n dal\u0131ndan yere d\xFC\u015Fmesinden esinlenen Isaac bug\xFCn bile havac\u0131l\u0131k, uydu ve uzay ara\u015Ft\u0131rmalar\u0131nda kullan\u0131lan yer\xE7ekimi kanununu ke\u015Ffetti.",skills:["Ba\u015Far\u0131ya Odakl\u0131l\u0131k","Yarat\u0131c\u0131l\u0131k","Merak","\xD6zyeterlik","\xD6zd\xFCzenleme"],source:null},{text:"Isaac, yer\xE7ekimi alan\u0131nda yapt\u0131\u011F\u0131 \xE7al\u0131\u015Fmalarla art\u0131k t\xFCm Avrupa bilim d\xFCnyas\u0131 taraf\u0131ndan tan\u0131nmaya ve sayg\u0131 g\xF6rmeye ba\u015Flam\u0131\u015Ft\u0131r. Ve bu ba\u015Far\u0131y\u0131 sadece 26 ya\u015F\u0131ndayken yakalam\u0131\u015Ft\u0131r!",skills:["Ba\u015Far\u0131ya Odakl\u0131l\u0131k","Sorgulama","Yarat\u0131c\u0131 D\xFC\u015F\xFCnme"],source:null}],skillScores:{"Ba\u015Far\u0131ya Odakl\u0131l\u0131k":5,Sebat:6,"\xD6z D\xFCzenleme":3,Dayan\u0131\u015Fma:0,Sosyallik:0,Giri\u015Fkenlik:0,Merak:5,Yarat\u0131c\u0131l\u0131k:3,Sorgulama:4}},{name:"Michael Faraday",born:1791,died:1867,country:"\u0130ngiltere",type:"Bilim \u0130nsan\u0131",stories:[{text:"Farkl\u0131 bir dini mezhebe \xFCye oldu\u011Fu i\xE7in \xFCniversiteye gidemeyece\u011Fini d\xFC\u015F\xFCnen Michael, \xE7ocukluk y\u0131llar\u0131nda bir kitap ciltcisinde \xE7\u0131rak olarak \xE7al\u0131\u015Ft\u0131, Londra'daki bilimsel toplant\u0131lar\u0131 takip etti.",skills:["\xD6zyeterlik","Duygu Kontrol\xFC","Sorgulama","Merak"],source:null},{text:"Michael, ilerleyen y\u0131llarda kendi kendine \xF6\u011Freneci\u011Fi kimya sayesinde \xFCnl\xFC bir profes\xF6r\xFCn laboratuvar\u0131nda \xF6nce asistan oldu, daha sonra o laboratuvar\u0131n y\xF6neticisi oldu ve sonunda Kraliyet Enstit\xFCs\xFC ona \xF6zel bir laboratuvar a\xE7t\u0131.",skills:["Ba\u015Far\u0131ya Odakl\u0131l\u0131k","Sorumluluk","G\xFCven","Sosyallik"],source:null},{text:"Tarihteki ilk elektrik motorunu ve elektrik \xFCreten jenerat\xF6r\xFC bu laboratuvarda Michael geli\u015Ftirmi\u015Ftir.",skills:["Yarat\u0131c\u0131l\u0131k","Merak","Sorgulama","\xD6zd\xFCzenleme","\xD6zyeterlik"],source:null},{text:"Michael, ba\u015Far\u0131lar\u0131ndan dolay\u0131 kendisine o d\xF6nem \u0130ngiltere'de bir bilim insan\u0131 i\xE7in gelinebilecek en \xFCst seviye makam olan \u0130ngiliz Kraliyet Cemiyeti Ba\u015Fkanl\u0131\u011F\u0131 teklif edildi\u011Fi halde ara\u015Ft\u0131rmalar\u0131na engel olaca\u011F\u0131 d\xFC\u015F\xFCncesiyle kabul etmedi.",skills:["Duygu Kontrol\xFC","Ba\u015Far\u0131ya Odakl\u0131l\u0131k"],source:null}],skillScores:{"Ba\u015Far\u0131ya Odakl\u0131l\u0131k":3,Sebat:3,"\xD6z D\xFCzenleme":1,Dayan\u0131\u015Fma:1,Sosyallik:1,Giri\u015Fkenlik:0,Merak:1,Yarat\u0131c\u0131l\u0131k:0,Sorgulama:1}},{name:"James C. Maxwell",born:1831,died:1879,country:"\u0130ngiltere",type:"Bilim \u0130nsan\u0131",stories:[{text:"Yarat\u0131c\u0131 d\xFC\u015F\xFCnce, tarih boyunca birden fazla alandan beslenen isnanlar taraf\u0131ndan ortaya konulabilmi\u015Ftir. Bunun en \xF6nemli \xF6rneklerinden birisi James'dir. James hayat\u0131 boyunca matematik, deneysel fizik, metafizik, mant\u0131k, dil felsefesi, bili\u015Fsel psikoloji, estetik, dekoratif tasar\u0131m, do\u011Fa teolojisi, elektrik ve makine m\xFChendisli\u011Fi, siyasi ekonomi, g\xF6rme ve hareketin fizyolojisi ile ilgilenmi\u015Ftir.",skills:["Merak","Yarat\u0131c\u0131l\u0131k","Sorgulama","Ele\u015Ftirel D\xFC\u015F\xFCnme","\xD6zyeterlik"],source:null},{text:"Bir d\xFC\u015F\xFCn\xFCre g\xF6re Maxwell, bilimsel sanayi, felsefi kavray\u0131\u015F, \u015Fiirsel his, hayal g\xFCc\xFC ve co\u015Fkulu mizah\u0131n harika bir bile\u015Fimiydi.",skills:[],source:null},{text:"Maxwell'in ailesi de bilimle u\u011Fra\u015Fan insanlardan olu\u015Fuyordu. B\xFCy\xFCk b\xFCy\xFCk dedesi bir t\u0131p doktoruydu, besteler yap\u0131yordu, mimarl\u0131k ve estetik ile ilgileniyordu. Babas\u0131 teknoloji ve bilimle u\u011Fra\u015Fan bir avukatt\u0131. Babas\u0131 ayn\u0131 zamanda yeni bir matbaa makinesi modeli haz\u0131rlamakla me\u015Fguld\xFC. Babas\u0131, James'i s\u0131k s\u0131k bilim ve sanat konferanslar\u0131na g\xF6t\xFCr\xFCrd\xFC.",skills:[],source:null},{text:"James daha 10'lu ya\u015Flar\u0131nda \xE7izim, \u015Fiir, geometri ve bilimsel deneyler \xFCzerine becerilerini dikkat \xE7ekecek \u015Fekilde sergilemeye ba\u015Flam\u0131\u015Ft\u0131.",skills:["Merak","Yarat\u0131c\u0131l\u0131k","Sorgulama"],source:null},{text:"Tarihteki ilk renkli foto\u011Fraf\u0131 g\xF6r\xFCnt\xFCleyen ki\u015Fi James'dir. James'in en b\xFCy\xFCk ba\u015Far\u0131s\u0131, daha \xF6nce bilinmeyen elektrik ile manyetizma aras\u0131ndaki ili\u015Fkiyi tan\u0131mlamas\u0131d\u0131r. James, optik ve elektromanyetik alan\u0131nda yapt\u0131\u011F\u0131 \xE7al\u0131\u015Fmalar ile modern fizi\u011Fin kurucusu olarak kabul ediliyor.",skills:["\xD6zyeterlik","Yarat\u0131c\u0131l\u0131ki Sorgulama"],source:null}],skillScores:{"Ba\u015Far\u0131ya Odakl\u0131l\u0131k":1,Sebat:2,"\xD6z D\xFCzenleme":0,Dayan\u0131\u015Fma:0,Sosyallik:0,Giri\u015Fkenlik:0,Merak:2,Yarat\u0131c\u0131l\u0131k:3,Sorgulama:2}},{name:"Charles Darwin",born:1809,died:1882,country:"\u0130ngiltere",type:"Bilim \u0130nsan\u0131",stories:[{text:"Charles Darwin'in babas\u0131 da dedesi de t\u0131p doktoruydu. Yani Darwin, t\u0131p ve biyoloji sohbetlerinin oldu\u011Fu bir ortamda b\xFCy\xFCm\xFC\u015Ft\xFC. Evi adeta Darwin'in laboratuvar\u0131yd\u0131. Bilimsel \xE7al\u0131\u015Fmalar\u0131na evde ba\u015Flad\u0131\u011F\u0131n\u0131 s\xF6ylemek yanl\u0131\u015F olmaz.",skills:["Merak","Sorgulama","Yarat\u0131c\u0131l\u0131k","\xD6zyeterlik"],source:null},{text:"Charles, t\u0131p fak\xFCltesine gitmesine ra\u011Fmen cerrahl\u0131\u011F\u0131 hi\xE7 sevmedi. T\u0131\u011F e\u011Fitimi zamanlar\u0131nda bir arkada\u015F\u0131ndan \xF6l\xFC hayvanlar\u0131n i\xE7ini doldurarak canl\u0131 g\xF6r\xFCnt\xFC verme y\xF6ntemlerini \xF6\u011Frendi.",skills:["Ba\u015Far\u0131yla Odakl\u0131l\u0131k","Sorgulama","Merak","Bili\u015F\xFCst\xFC"],source:null},{text:"Charles daha \xFCniversitede \xF6\u011Frenciyken do\u011Fa tarihi kul\xFCb\xFCne \xFCye olmak, canl\u0131lar\u0131n evrimiyle ilgili \xE7al\u0131\u015Fmalar ve ara\u015Ft\u0131rmalar yapt\u0131, bir ba\u015Fka \xF6\u011Fretmeninden jeoloji e\u011Fitimi ald\u0131 ve bir m\xFCzede bitki koleksiyonunun s\u0131n\u0131fland\u0131r\u0131lmas\u0131 \xE7al\u0131\u015Fmalar\u0131na kat\u0131ld\u0131.",skills:["Merak","Sorgulama","\xD6zyeterlik","Bili\u015F\xFCst\xFC"],source:null}],skillScores:{"Ba\u015Far\u0131ya Odakl\u0131l\u0131k":1,Sebat:2,"\xD6z D\xFCzenleme":2,Dayan\u0131\u015Fma:0,Sosyallik:0,Giri\u015Fkenlik:0,Merak:3,Yarat\u0131c\u0131l\u0131k:1,Sorgulama:3}},{name:"Marie Curie",born:1867,died:1934,country:"Polonya",type:"Bilim \u0130nsan\u0131",stories:[{text:"Babas\u0131 fizik ve matematik \xF6\u011Fretmeni ve annesi de \xF6\u011Frenci yurdu m\xFCd\xFCr\xFC olan Marie, annesini erken ya\u015Fta kaybettikten sonra \xF6zellikle babas\u0131n\u0131n te\u015Fvikleriyle okula devam etti.",skills:["Duygu Kontrol\xFC"],source:null},{text:'Babas\u0131n\u0131n "gayret g\xF6stermek zorundas\u0131n" s\xF6z\xFCn\xFC dinleyen Marie sevmese de okulu s\u0131n\u0131f birincisi olarak tamamlad\u0131.',skills:["Strese Dayan\u0131kl\u0131l\u0131k","\xD6zyeterlik"],source:null},{text:"1800'l\xFC y\u0131llar\u0131n sonundaki Polonya'daki Var\u015Fova \xDCniversitesi'ne sadece erkekler kabul ediliyordu. Bu nedenle \xFCniversite e\u011Fitimi alma ihtimali yok denecek kadar azd\u0131.",skills:[],source:null},{text:"\xD6\u011Frenmeyi \xE7ok seven Marie, mutlaka okumaya devam etmek istiyordu. O d\xF6nemde \xFCniversiteyi sadece Paris'de okuma \u015Fans\u0131 vard\u0131. Kendisi Polonya'da \xE7ocuk bak\u0131c\u0131l\u0131\u011F\u0131ndan \xF6zel ders vermeye kadar bir \xE7ok i\u015F yapt\u0131, kazand\u0131\u011F\u0131 parayla Paris'e okumaya giden ablas\u0131n\u0131n t\xFCm masraflar\u0131n\u0131 kar\u015F\u0131lad\u0131. Daha sonra ablas\u0131 da onun Marie'nin Paris'de okumas\u0131 i\xE7in gerekli maddi deste\u011Fi sa\u011Flayacakt\u0131.",skills:["Ba\u015Far\u0131ya Odakl\u0131l\u0131k","Iyimserlik","Duygu Kontrol\xFC","\xD6zyeterlik","Dayan\u0131\u015Fma"],source:null},{text:"Daha Polonya'da iken Marie, bir okulun laboratuvar\u0131nda bir \xF6\u011Fretmenin izin vermesi sayesinde Kimya ile tan\u0131\u015Fm\u0131\u015F ve \xE7e\u015Fitli deneyler yapma f\u0131rsat\u0131 yakalam\u0131\u015Ft\u0131.",skills:["Merak","Sorgulama","Giri\u015Fkenlik"],source:null},{text:"Bilime olan a\u015Fk\u0131n\u0131n \xF6n\xFCnde duramayan Marie de ablas\u0131n\u0131n ard\u0131ndan Paris'e gitti ve \xF6\u011Frencilerinin \xE7ok b\xFCy\xFCk \xE7o\u011Funlu\u011Funun erkek oldu\u011Fu bir ortamda e\u011Fitim almaya ba\u015Flad\u0131. O d\xF6nemde Avrupa'da kad\u0131nlar\u0131n erken ya\u015Flarda evlenip \xE7oluk \xE7ocu\u011Fa kar\u0131\u015Fmas\u0131 bekleniyordu.",skills:["Ba\u015Far\u0131ya Odakl\u0131l\u0131k","Strese Dayan\u0131kl\u0131l\u0131k","Duygu Kontrol\xFC"],source:null},{text:"\xC7ok az parayla, \xE7ok zor \u015Fartlar alt\u0131nda ama inan\u0131lmaz bir inan\xE7la devam etti \xFCniversite e\u011Fitimine Marie. Ve, sonunda bir de\u011Fil iki b\xF6l\xFCmden mezun olarak - fen ve matematik- okulunu b\xFCy\xFCk bir sayg\u0131nl\u0131k kazanarak tamamlad\u0131.",skills:["Strese Dayan\u0131kl\u0131l\u0131k","Sebat","Sorumluluk","Bili\u015F\xFCst\xFC"],source:null},{text:"Kendisine \xE7ok de\u011Fer veren gen\xE7 bilim insan\u0131 Pierre Curie ile tan\u0131\u015Fan Marie, onunla uzun uzun bilim sohbetleri yapmaktan \xE7ok mutluydu\u2026. Ve sonunda iki gen\xE7 hayatlar\u0131n\u0131 birle\u015Ftirdiler ve \xFCniversitede okumaya devam ederek kimya alan\u0131nda doktora derecesi ald\u0131lar.",skills:["G\xFCven"],source:null},{text:"1800'lerin sonunda bug\xFCn bile hastanelerde s\u0131kl\u0131kla kullan\u0131lan r\xF6ntgen teknolojisini R\xF6ntgen adl\u0131 bir bilim insan\u0131 bulmu\u015Ftu. Bu teknoloji insanlar\u0131n kemik yap\u0131lar\u0131n\u0131n foto\u011Fraf\u0131n\u0131n \xE7ekilmesine izin veriyordu. Ayn\u0131 d\xF6nemde, r\xF6ntgende kullan\u0131lan x \u0131\u015F\u0131nlar\u0131n\u0131 yayan uranyum adl\u0131 bir element Marie'nin ve e\u015Fi Pierre'nin \xE7ok ilgisini \xE7ekmi\u015Fti. Bu ilgi onlar\u0131 d\xFCnya \xE7ap\u0131nda \xFCnl\xFC bilim insanlar\u0131 yapacak kap\u0131lar\u0131 a\xE7mak \xFCzereydi",skills:[],source:null},{text:"Marie ve e\u015Fi, \xE7ok ilkel \u015Fartlara sahip laboratuvarlar\u0131nda her t\xFCrl\xFC zorlu\u011Fun \xFCzerinden gelerek iki yeni element bulmu\u015Flard\u0131. Bunlardan birisine Marie \xE7ok \xF6zledi\u011Fi \xFClkesinin isminden esinlenerek Polonyum ad\u0131n\u0131 verdi. Di\u011Feri, ise bug\xFCn bile sa\u011Fl\u0131k ve g\xFCvenlik sekt\xF6r\xFCnde yo\u011Fun olarak kullan\u0131lmaya devam eden Radyum elementiydi.",skills:["Ba\u015Far\u0131ya Odakl\u0131l\u0131k","Sebat","\xD6zyeterlik","Bili\u015F\xFCst\xFC","Merak","Yarat\u0131c\u0131l\u0131k","Sorgulama"],source:null},{text:"Marie, bu inan\u0131lmaz \xE7al\u0131\u015Fmas\u0131 ile e\u015Fiyle birlikte Nobel \xF6d\xFCl\xFCn\xFC kazand\u0131. Tarihte Nobel kazanan ilk kad\u0131n bilim insan\u0131 Marie Curie'dir. Daha da ilgin\xE7 olan, ilk ba\u015Fta Nobel Kurulu bir kad\u0131n oldu\u011Fu i\xE7in Marie'ye \xF6d\xFCl vermemi\u015Fti ama e\u015Fi Pierre bu hatan\u0131n d\xFCzeltilmemesi durumunda kendisinin de \xF6d\xFCl\xFC kabul etmeyece\u011Fini bildirince Nobel Kurulu Marie'e \xF6d\xFCl vermeye karar vermi\u015Fti.",skills:["Sab\u0131r","Dayan\u0131\u015Fma","G\xFCven"],source:null},{text:"Daha da ilginci, Marie Curie tarihte 2 Nobel kazanan ilk kad\u0131nd\u0131 ve daha da ilginci bu iki Nobel'i iki farkl\u0131 alanda - Kimya ve Fizik- alan ilk bilim insan\u0131yd\u0131.",skills:[],source:null},{text:"Fakat, burada \u015Fu ac\u0131 olay\u0131 s\xF6ylemeliyiz ki Marie ve E\u015Fi Pierre, fark\u0131nda olmadan asl\u0131nda kendilerini \xF6ld\xFCr\xFCyorlard\u0131, \xE7\xFCnk\xFC yo\u011Fun bir \u015Fekilde bilimsel \xE7al\u0131\u015Fmalar\u0131n\u0131 y\xFCr\xFCtt\xFCkleri uranyum maddesi insanlar\u0131 kanser yap\u0131yordu ve ne yaz\u0131k ki bu durum o y\u0131llarda bilinmiyordu!",skills:["Ba\u015Far\u0131ya Odakl\u0131l\u0131k","Merak"],source:null},{text:"\u0130lk Nobel'den k\u0131sa bir zaman sonra Pierre ne yaz\u0131k ki ciddi \u015Fekilde zay\u0131flad\u0131, hareketleri k\u0131s\u0131tland\u0131. Zar zor y\xFCr\xFCyebilen Pierre beklenmedik bir \u015Fekilde bir at arabas\u0131n\u0131n alt\u0131nda kalarak hayat\u0131n\u0131 kaybetti.",skills:["Strese Dayan\u0131kl\u0131l\u0131k","Duygu Kontrol\xFC"],source:null},{text:"Marie, 1. D\xFCnya Sava\u015F\u0131'nda yaralanan askerlerin tedavilerini h\u0131zland\u0131rmak i\xE7in ta\u015F\u0131nabilir r\xF6ntgen makinelerini bizzat kendisi geli\u015Ftirdi.",skills:["Ba\u015Far\u0131ya Odakl\u0131l\u0131k","Empati","Sorumluluk","Yarat\u0131c\u0131l\u0131k","Dayan\u0131\u015Fma","Giri\u015Fkenlik"],source:null},{text:"Tarihte Nobel kazanan ikinci kad\u0131n Marie'nin k\u0131z\u0131 Irene'dir. Ne yaz\u0131k ki Marie'nin \xE7al\u0131\u015Fma notlar\u0131 ve \xF6zel e\u015Fyalar\u0131 bug\xFCn bile halen \xF6zel \xE7elik kasalar\u0131n i\xE7inde saklanmaktad\u0131r, \xE7\xFCnk\xFC bu e\u015Fyalar y\xFCksek radyoaktif madde i\xE7ermektedir. Marie de kocas\u0131 Pierre gibi muhtemelen bu radyoaktif maddelere maruz kalman\u0131n olu\u015Fturdu\u011Fu bir hastal\u0131k nedeniyle hayat\u0131n\u0131 kaybetmi\u015Ftir.",skills:[],source:null},{text:"Marie, b\xFCy\xFCk bir bulu\u015Fun bir bilim insan\u0131n\u0131n kafas\u0131nda, dal\u0131nda kopar\u0131lmaya haz\u0131r bir meyve gibi bulunmad\u0131\u011F\u0131n\u0131, \xE7ok say\u0131da \xF6n haz\u0131rl\u0131k ve \xE7al\u0131\u015Fma gerekti\u011Fini s\xF6ylemi\u015Ftir. Marie, en \xF6nemlisinin de hi\xE7bir \u015Feyin yolunda olmad\u0131\u011F\u0131n\u0131n d\xFC\u015F\xFCn\xFCl\xFC\u011F\xFC zor zamanlarda ki\u015Finin cesaretinin k\u0131r\u0131lmas\u0131na izin vermemesi gerekti\u011Fini s\xF6yl\xFCyor.",skills:["Ba\u015Far\u0131yla Odakl\u0131l\u0131k","Sebat","Duygu Kontrol\xFC","\xD6zyeterlik","Strese Dayan\u0131kl\u0131l\u0131k","Sorgulama"],source:null}],skillScores:{"Ba\u015Far\u0131ya Odakl\u0131l\u0131k":7,Sebat:9,"\xD6z D\xFCzenleme":8,Dayan\u0131\u015Fma:4,Sosyallik:0,Giri\u015Fkenlik:2,Merak:4,Yarat\u0131c\u0131l\u0131k:2,Sorgulama:4}},{name:"Albert Einstein",born:1879,died:1955,country:"Almanya",type:"Bilim \u0130nsan\u0131",stories:[{text:"1800'lerin sonunda Almanya'da \xE7ocuklu\u011Fu ge\xE7en Albert'in okulla aras\u0131 \xE7ok iyi olmasa da bilimsel kitaplar\u0131 \xE7ok seviyordu. Annesi de \xE7ok iyi piyano \xE7alan Albert k\xFC\xE7\xFCk ya\u015Flardan itibaren piyano ve keman e\u011Fitimi ald\u0131. Keman\u0131n\u0131 hayat\u0131 boyunca b\u0131rakmad\u0131. Kendi kendine veya sevdiklerine zaman zaman \xE7\u0131kard\u0131\u011F\u0131 keman\u0131yla minik konserler vermeyi \xE7ok seviyordu.",skills:[],source:null},{text:"Albert, m\xFCzik e\u011Fitimlerinde o kadar sinirlendi\u011Fi zamanlar oluyordu ki zaman zaman \xF6\u011Fretmeniyle kavga ediyordu. Buna ra\u011Fmen m\xFCzik aletlerini \xE7almay\u0131 \xF6\u011Frenmekten hi\xE7 vazge\xE7medi ve amat\xF6r bir m\xFCzisyen oldu.",skills:[],source:null},{text:"Albert, m\xFCzi\u011Fin yan\u0131nda su sporlar\u0131n\u0131 da \xE7ok seviyordu. \xC7ocukluk ve gen\xF6lik y\u0131llar\u0131nda \xF6zellikle yelkenli ile su sporu yapmaktan b\xFCy\xFCk mutluluk duyard\u0131.",skills:[],source:null},{text:"Albert ilerleyen y\u0131llarda en zorlu matematik ve fizik problemleriyle u\u011Fra\u015F\u0131rken adeta m\xFCzi\u011Fe s\u0131\u011F\u0131n\u0131yor ve \xE7ok sevdi\u011Fi Mozart ve Bach gibi \xFCnl\xFC m\xFCzisyenlerin eserlerini \xE7al\u0131yordu.",skills:[],source:null},{text:"Albert'in \xE7ocukluk y\u0131llar\u0131nda \u0131srarla, sab\u0131rla ve azimle \xF6\u011Frendi\u011Fi kemandaki bu ba\u015Far\u0131s\u0131n\u0131n ayn\u0131s\u0131n\u0131 ilerleyen y\u0131llarda bilim alan\u0131ndaki zorluklar kar\u015F\u0131s\u0131nda da uygulad\u0131\u011F\u0131 y\xF6n\xFCnde kuvvetli iddalar vard\u0131r.",skills:[],source:null},{text:`\xDCniversiteyi tamamlad\u0131ktan sonra, d\xFCnyadaki bir\xE7ok inovasyonun kay\u0131tlar\u0131n\u0131n tutuldu\u011Fu \u0130svi\xE7re'de Patent Ofisinde \xE7al\u0131\u015Fmaya ba\u015Flad\u0131 Albert. Albert en \xF6nemli bilimsel \xE7al\u0131\u015Fmalar\u0131n\u0131 bu d\xF6nemde yapt\u0131\u011F\u0131 i\xE7in ona "fizikte devrim yapan memur" denmi\u015Ftir.`,skills:[],source:null},{text:"Maddi durumu o kadar k\xF6t\xFCydi ki \xF6zel fizik dersleri vermek zorunda kald\u0131. \u0130\u015F saatleri d\u0131\u015F\u0131nda 3-4 \xF6\u011Frenciye \xF6zel ders veriyordu hayat\u0131n\u0131 devam ettirebilmek i\xE7in",skills:[],source:null},{text:"En ilgin\xE7 olan\u0131 ise herhangi bir \xFCniversitede veya bir ara\u015Ft\u0131rma merkezinde \xE7al\u0131\u015Fmad\u0131\u011F\u0131 halde ard arda 4 adet en sayg\u0131n dergilerde makaleleri \xE7\u0131km\u0131\u015Ft\u0131. Bunlardan ikisi g\xFCn\xFCm\xFCzde hala g\xFCndemde olan e=mc2 form\xFCl\xFCn\xFCn bulundu\u011Fu atomun par\xE7alanmas\u0131 durumunda ortaya \xE7\u0131kacak enerjiyi hesaplad\u0131\u011F\u0131 makale ve di\u011Feri uzay-zaman ili\u015Fkisini ve g\xF6recelik kavram\u0131n\u0131 tart\u0131\u015Ft\u0131\u011F\u0131 makaleydi.",skills:[],source:null},{text:"Aile hayat\u0131 da i\u015F hayat\u0131 da \xE7ok d\xFCzenli olamad\u0131 Albert'in. \xC7ok farkl\u0131 \u015Fehir ve \xFClkede \xE7al\u0131\u015Fmak zorunda kald\u0131. 1. ve 2. D\xFCnya Sava\u015Flar\u0131na \u015Fahit oldu. \u0130ki sava\u015F s\u0131ras\u0131nda da dikkatler onun \xFCzerindeydi. \xD6zellikle 2. D\xFCnya Sava\u015F\u0131'n\u0131n kaderini de\u011Fi\u015Ftiren onun ortaya koydu\u011Fu e=mc2 form\xFCl\xFCne dayanan bir atom bombas\u0131 yap\u0131lmas\u0131 \xF6nerisini ABD Ba\u015Fkan\u0131'na yapan da kendisiydi.",skills:[],source:null},{text:"\u0130lgin\xE7 olan, atom bombas\u0131n\u0131n yap\u0131lmas\u0131n\u0131 \xF6neren Albert hayat\u0131 boyunca sava\u015F kar\u015F\u0131t\u0131 bir insand\u0131. Kim bilir belki de ABD'nin atom bombas\u0131na sahip oldu\u011Funu duyan Almanya ve Japonya teslim olacak diye bekledi.",skills:[],source:null},{text:'Bug\xFCn bile hala \xFCst\xFCnzekal\u0131 oldu\u011Funu d\xFC\u015F\xFCnd\xFC\u011F\xFCm\xFCz insanlar\u0131 "Einstein" diye \xE7a\u011F\u0131r\u0131r\u0131z. O d\xFCnya tarihine en az Newton kadar derin izler b\u0131rakm\u0131\u015F, gelmi\u015F ge\xE7mi\u015F en b\xFCy\xFCk bilim insanlar\u0131ndan birisidir.',skills:[],source:null}],skillScores:{"Ba\u015Far\u0131ya Odakl\u0131l\u0131k":3,Sebat:8,"\xD6z D\xFCzenleme":7,Dayan\u0131\u015Fma:1,Sosyallik:0,Giri\u015Fkenlik:0,Merak:3,Yarat\u0131c\u0131l\u0131k:1,Sorgulama:2}},{name:"Alfred Wegener",born:1880,died:1930,country:"Almanya",type:"Tarihsel anlat\u0131",stories:[{text:"T\xFCm k\u0131talar\u0131n asl\u0131nda milyarlarca y\u0131l \xF6nce tek par\xE7a halinde bir b\xFCt\xFCnken, d\xFCnyan\u0131n d\xF6nme h\u0131z\u0131 ve Ay'la d\xFCnya aras\u0131ndaki \xE7ekimin olu\u015Ftudu\u011Fu kuvvetle zaman i\xE7erisinde par\xE7alanarak bug\xFCnk\xFC 7 k\u0131tal\u0131 d\xFCnyan\u0131n olu\u015Ftu\u011Funu ilk iddia eden ve bu y\xF6nde bilimsel \xE7al\u0131\u015Fmalar y\xFCr\xFCten ilk bilim insan\u0131d\u0131r.",skills:[],source:null},{text:"Alfred, g\xF6kbilimleri alan\u0131nda e\u011Fitim ald\u0131ktan sonra, iklimbilim alan\u0131na yo\u011Funla\u015Ft\u0131. Atmosfer fizi\u011Fi alan\u0131nda \xFCniversite seviyesinde e\u011Fitim verecek kadar ileri seviyede \xE7al\u0131\u015Fmalar y\xFCr\xFCtt\xFC. Daha sonra Jeolojik ara\u015Ft\u0131rmalar yapmaya ba\u015Flayan Alfred, bir \xE7ok ara\u015Ft\u0131rma gezisine kat\u0131larak d\xFCnyan\u0131n bir \xE7ok yerinde fosiller toplad\u0131 ve k\u0131talar\u0131n olu\u015Fumuna dair yepyeni bir iddia ortaya att\u0131.",skills:[],source:null},{text:'D\xFCnyada iklim ve jeoloji alan\u0131nda hakl\u0131 bir \xFCn yapan Alfred, "K\u0131talar\u0131n ve Okyanuslar\u0131n K\xF6keni" adl\u0131 kitap yazd\u0131. Bu kitapta t\xFCm k\u0131talar\u0131n (continent) bir zamanlar urkotinent yani t\xFCm bir kara durumunda oldu\u011Funu iddia etti.',skills:[],source:null},{text:"Alfred i\xE7in bu kitaptan sonra s\u0131k\u0131nt\u0131l\u0131 g\xFCnler ba\u015Flam\u0131\u015Ft\u0131r, \xE7\xFCnk\xFC d\xFCnyadaki sayg\u0131n t\xFCm yer bilimciler bunun m\xFCmk\xFCn olmad\u0131\u011F\u0131n\u0131 \xE7\xFCnk\xFC karalar\u0131 birbirinden ay\u0131racak ve bu kadar uza\u011Fa s\xFCr\xFCkleyecek bir g\xFCc\xFCn olmad\u0131\u011F\u0131n\u0131 iddia etmi\u015Flerdir. Bilim d\xFCnyas\u0131 Alfred'i yalan s\xF6ylemek ve \u015Fov yapmakla su\xE7lam\u0131\u015Ft\u0131r.",skills:[],source:null},{text:"Bu su\xE7lamalara \xE7ok \xFCz\xFClen Alfred iddias\u0131n\u0131 daha da g\xFC\xE7lendirmek i\xE7in \xE7e\u015Fitli \xFClkelerde yapt\u0131\u011F\u0131 tehlikeli ara\u015Ft\u0131rmalar\u0131n\u0131n say\u0131s\u0131n\u0131 art\u0131rm\u0131\u015Ft\u0131r. Kuzey Kutbu'na yapt\u0131\u011F\u0131 son ara\u015Ft\u0131rma seyahatinde sert k\u0131\u015F ko\u015Fullar\u0131nda kar f\u0131rt\u0131nas\u0131 ba\u015Flam\u0131\u015F ve Alfred ile yard\u0131mc\u0131s\u0131 kaybolmu\u015Ftur. Alfred'in cesedi bir y\u0131l sonra bulunmu\u015F, yard\u0131mc\u0131s\u0131n\u0131n cesedine asla ula\u015F\u0131lamam\u0131\u015Ft\u0131r.",skills:[],source:null},{text:"Alfred, iddias\u0131nda hakl\u0131 oldu\u011Funu ve t\xFCm bilim d\xFCnyas\u0131 taraf\u0131ndan kabul edildi\u011Fini g\xF6remedi. Alfred'in hayat\u0131n\u0131 kaybetmesinin \xFCzerinden otuzdan fazla y\u0131l ge\xE7tikten sonra yap\u0131lan ara\u015Ft\u0131rmalar Alfred'in iddias\u0131n\u0131 ispatlayan \xE7ok sa\u011Flam deliller ortaya koydu.",skills:[],source:null}],skillScores:{"Ba\u015Far\u0131ya Odakl\u0131l\u0131k":0,Sebat:3,"\xD6z D\xFCzenleme":3,Dayan\u0131\u015Fma:0,Sosyallik:0,Giri\u015Fkenlik:0,Merak:2,Yarat\u0131c\u0131l\u0131k:1,Sorgulama:2}},{name:"Thomas Edison",born:1847,died:1931,country:"ABD",type:"Mucit",stories:[{text:"Thomas, d\xFCnya tarihinin gelmi\u015F ge\xE7mi\u015F en \xFCnl\xFC mucitlerinden birisidir. Kendisinin bir\xE7ok bulu\u015Fu vard\u0131r ama aralar\u0131nda en \xFCnl\xFCs\xFC bug\xFCn hayat\u0131m\u0131zda \xE7ok \xF6nemli bir yer tutan amp\xFCld\xFCr. Yakla\u015F\u0131k 150 y\u0131l \xF6nce tarihte ilk defa elektrikle \xE7al\u0131\u015Fan ve ortamlar\u0131 ayd\u0131nlatan amp\xFCl\xFC geli\u015Ftirmi\u015Ftir.",skills:[],source:null},{text:"Kendisinden \xF6nce do\u011Fumlar\u0131ndan k\u0131sa bir s\xFCre sonra \xF6len \xFC\xE7 karde\u015Fiyle birlikte 7 karde\u015Ften birisi olan Thomas'a da bir \u015Fey olacak annesi \xE7ok korkmu\u015Ftu.",skills:[],source:null},{text:"Okul derslerinde \xE7ok da ba\u015Far\u0131l\u0131 olmayan Thomas'\u0131 annesi okuldan almak ve evde kendisi e\u011Fitmek zorunda kald\u0131.",skills:[],source:null},{text:"Bir \xFCniversite e\u011Fitimi alma \u015Fans\u0131 olmasa da Thomas \xE7ocuklu\u011Fundan ba\u015Flayarak hayat\u0131 boyunca \xE7ok kitap okudu, \xE7\xFCnk\xFC yeni \u015Feyler \xF6\u011Frenmeyi \xE7ok seviyordu.",skills:[],source:null},{text:"Annesinin maddi durumu \xE7ok iyi olmayan Thomas para kazanmak i\xE7in k\xFC\xE7\xFCk ya\u015F\u0131nda \xE7al\u0131\u015Ft\u0131\u011F\u0131 zamanlar da bile bo\u015F zamanlar\u0131nda mutlaka k\xFCt\xFCphaneye gidiyordu.",skills:[],source:null},{text:"Thomas, \xF6zellikle kimya ve fizik alan\u0131nda yeni \u015Feyler denemekten b\xFCy\xFCk mutluluk duyuyordu. Daha yirmili ya\u015Flar\u0131na gelmeden \xF6nce ilgisini en \xE7ok \xE7eken \u015Fey ise elektrik tellerinin \xFCzerinden akan elektrik sinyalleri sayesinde uzak yerlere haber g\xF6nderilmesini sa\u011Flayan telgrafd\u0131.",skills:[],source:null},{text:"Bir telgraf ofisinde i\u015Fe girerek i\u015Fin teknik t\xFCm ayr\u0131nt\u0131lar\u0131n\u0131 \xF6\u011Frendi. Amp\xFCl\xFC bulup d\xFCnya \xE7ap\u0131nda \xFCnl\xFC olmadan \xE7ok \xF6nce kendisine para kazand\u0131racak ilk icatlar\u0131n\u0131 telgrafla ilgili i\u015Flerde yapt\u0131.",skills:[],source:null},{text:"\xC7ok b\xFCy\xFCk bir borsa \u015Firketi i\xE7in telgrafla \xE7al\u0131\u015Fan \xF6zel bir makine geli\u015Ftirdi. Bu makine kar\u015F\u0131l\u0131\u011F\u0131nda o \u015Firketten b\xFCy\xFCk miktarda para ald\u0131. Bu parayla hemen bir ara\u015Ft\u0131rma-geli\u015Ftirme laboratuvar\u0131 kurdu. Ev gibi kulland\u0131\u011F\u0131, bazen g\xFCnlerce kald\u0131\u011F\u0131 kendine ait bu laboratuvarda ilerleyen y\u0131llarda bir\xE7ok yeni bulu\u015Fa imza att\u0131.",skills:[],source:null},{text:"Graham Bell'in icat etti\u011Fi telefonu \xE7ok daha fazla geli\u015Ftirmekten, hoparl\xF6r ve mikrofona, ses kay\u0131t cihaz\u0131 fonogarafa, daha sonra m\xFCzik \xE7almak i\xE7in kullan\u0131lan gramafona ve en yayg\u0131n\u0131 amp\xFCle kadar 1500 civar\u0131nda bug\xFCn bile hayat\u0131m\u0131zda olan 1500 civar\u0131nda yenili\u011Fin patenti Thomas Thomas'a aittir.",skills:[],source:null},{text:"Thomas'\u0131n ses kay\u0131t cihaz\u0131 fonograf onu hem \xFClkesinde hem d\xFCnyada \xE7ok me\u015Fhur yapt\u0131, \xE7\xFCnk\xFC o g\xFCne kadar bu \u015Fekilde ses kayd\u0131 yapan ve daha sonra bunu kendisi \xE7alan benzer bir cihaz ortaya konmam\u0131\u015Ft\u0131.",skills:[],source:null},{text:"Kazand\u0131\u011F\u0131 paralar\u0131 s\xFCrekli icatlara ve bilime harcayan Thomas, \xF6zellikle amp\xFCl\xFCn icad\u0131ndan kazand\u0131\u011F\u0131 parayla kendisine \xE7ok daha b\xFCy\xFCk bir laboratuvar kurdu. Bu laboratuvarda 60 bin kitapl\u0131k devasa bir k\xFCt\xFCphane kurdu.",skills:[],source:null},{text:`Thomas, kendisini y\xFCceltmek yerine "bulu\u015Flar\u0131m\u0131n sadece %10'u ak\u0131l ve zeka \xFCr\xFCn\xFCd\xFCr. Geriye kalan %90'\u0131 ise terden ve emekten olu\u015Fur" s\xF6z\xFCyle insanlar\u0131n sadece ak\u0131llar\u0131na g\xFCvenmeyip \xE7ok \xE7al\u0131\u015Fmalar\u0131 gerekti\u011Fi mesaj\u0131n\u0131 b\xFCy\xFCk bir \xF6zg\xFCvenle veriyordu.`,skills:[],source:null},{text:"Thomas'\u0131 farkl\u0131 yapan en b\xFCy\xFCk \xF6zelli\u011Fi, okuldaki sorunlar\u0131 ve sa\u011Fl\u0131\u011F\u0131yla ilgili engellere ra\u011Fmen yeni \u015Feyler bulmakla ilgili co\u015Fkusunu hi\xE7 kaybetmemesidir.",skills:[],source:null}],skillScores:{"Ba\u015Far\u0131ya Odakl\u0131l\u0131k":9,Sebat:7,"\xD6z D\xFCzenleme":7,Dayan\u0131\u015Fma:0,Sosyallik:0,Giri\u015Fkenlik:1,Merak:7,Yarat\u0131c\u0131l\u0131k:6,Sorgulama:4}},{name:"Nicola Tesla",born:1856,died:1943,country:"H\u0131rvatistan",type:"Mucit",stories:[{text:'Do\u011Fdu\u011Fu gece g\xF6ky\xFCz\xFCnde o kadar \xE7ok \u015Fim\u015Fek varm\u0131\u015F ki annesi Nicola i\xE7in "benim \xE7ocu\u011Fum \u0131\u015F\u0131\u011F\u0131n o\u011Flu olacak" demi\u015F.',skills:[],source:null},{text:"Nicola, \xE7ok ilgin\xE7tir \xE7ocuklu\u011Fundan itibaren hep enerjiyle ilgilenmi\u015F, hayat\u0131 boyunca da hep \xF6zellikle elektrik enerjisi alan\u0131nda bulu\u015Flar yapm\u0131\u015Ft\u0131r.",skills:[],source:null},{text:"1880'lerin sonunda, S\u0131rbistan'dan Amerika'ya g\xF6\xE7 eden Nicola, o d\xF6nemin en \xFCnl\xFC mucitlerinden Thomas Edison'un \u015Firketinde \xE7al\u0131\u015Fmaya ba\u015Flad\u0131. Edison ve ba\u015Far\u0131l\u0131 bir i\u015Fadam\u0131, Nicola ise gen\xE7 ve heyecanl\u0131 bir m\xFChendisdi.",skills:[],source:null},{text:"O d\xF6nemin en b\xFCy\xFCk sorunu elektrik enerjisinin \u015Fehirdeki sokak lambalar\u0131na ve evlere do\u011Fru ak\u0131mla m\u0131 yoksa alternatif ak\u0131mla m\u0131 ula\u015Ft\u0131r\u0131lmas\u0131yd\u0131. Bu alandaki en b\xFCy\xFCk \u015Firketin sahibi olan Edison mutlaka do\u011Fru ak\u0131m\u0131n kullan\u0131lmas\u0131n\u0131 s\xF6ylerken, Nicola alternatif ak\u0131mdan ba\u015Fka bir \xE7arenin olmad\u0131\u011F\u0131n\u0131 s\xF6yl\xFCyordu.",skills:[],source:null},{text:"Edison'un \u015Firketi i\xE7in alternatif ak\u0131mla \xE7al\u0131\u015Fan bir jenarat\xF6r \xFCreten Nicola'ya Edison s\xF6z verdi\u011Fi 50.000 dolar\u0131 vermeyince Nicola istifa etti.",skills:[],source:null},{text:"Daha sonra, Edison'un en b\xFCy\xFCk rakibi olan \u015Firketlerden birisinde \xE7al\u0131\u015Fmaya ba\u015Flayan Nicola yeni \xE7al\u0131\u015Ft\u0131\u011F\u0131 \u015Firkete yapt\u0131\u011F\u0131 bulu\u015Flarla \xE7ok b\xFCy\xFCk paralar kazand\u0131rd\u0131.",skills:[],source:null},{text:"Son y\u0131llarda kabolosuz \u015Farj olan telefon ve saat gibi cihazlar\u0131 keyifle kullan\u0131yoruz. Elektri\u011Fin kablosuz olarak bir yerden istenilen ba\u015Fka bir yere aktar\u0131labilece\u011Fini d\xFCnyaya ilk ispatlayan ki\u015Fi daha 1900'l\xFC y\u0131llar\u0131n ba\u015F\u0131nda Nicola idi. Ne yaz\u0131k ki bu bulu\u015F Nicola i\xE7in \xE7ok da olumlu sonu\xE7lar vermedi \xE7\xFCnk\xFC bu bulu\u015Fu sayesinde d\xFCnyan\u0131n her yerine \xFCcretsiz elektrik enerjisi da\u011F\u0131t\u0131labilece\u011Fini d\xFC\u015F\xFCn\xFCyordu ve hatta bunu hayal ediyordu. Bu hayal, elektrik i\u015Finden b\xFCy\xFCk paralar kazanan i\u015Finsanlar\u0131n\u0131n \xE7ok ho\u015Funa gitmedi ve Nicola'ya verdikleri t\xFCm deste\u011Fi geri \xE7ektiler.",skills:[],source:null},{text:"Sonraki uzun y\u0131llar\u0131n\u0131 maddi s\u0131k\u0131nt\u0131 \xE7ekerek bir otel odas\u0131nda ge\xE7iren Nicola, 90 ya\u015F\u0131nda bug\xFCn bile halen kullan\u0131lmakta olan bir \xE7ok inovasyonu insanl\u0131\u011Fa miras b\u0131rakarak hayata g\xF6zlerini yummu\u015Ftur.",skills:[],source:null}],skillScores:{"Ba\u015Far\u0131ya Odakl\u0131l\u0131k":2,Sebat:8,"\xD6z D\xFCzenleme":3,Dayan\u0131\u015Fma:0,Sosyallik:0,Giri\u015Fkenlik:1,Merak:7,Yarat\u0131c\u0131l\u0131k:5,Sorgulama:2}},{name:"Wright Karde\u015Fler",born:1871,died:1948,country:"Orville () ve Wilbur () ABD",type:"Tarihsel anlat\u0131",stories:[{text:"T\xFCm d\xFCnyada icat patlamas\u0131 ya\u015Fanan ve bir \xE7ok insan\u0131n u\xE7ak yapmaya \xE7al\u0131\u015Ft\u0131klar\u0131 y\u0131llarda Wright Karde\u015Fleri di\u011Fer mucitlerden ay\u0131ran en b\xFCy\xFCk \xF6zellik sab\u0131rl\u0131 olmalar\u0131 ve \xF6nceki bulduklar\u0131n\u0131 s\xFCrekli geli\u015Ftirmeleri olmu\u015Ftur.",skills:[],source:null},{text:"Wright Karde\u015Fler, u\xE7aklar ve u\xE7u\u015F hakk\u0131nda o g\xFCne kadar yap\u0131lm\u0131\u015F t\xFCm \xE7al\u0131\u015Fmalar\u0131 okudular, \xE7ok \xE7al\u0131\u015Ft\u0131lar ve adeta havac\u0131l\u0131k tarihi uzman\u0131 oldular. Wright Karde\u015Fler, o g\xFCne kadar havac\u0131l\u0131k ad\u0131na elde edilen olumlu ve olumsuz tecr\xFCbeleri \xE7ok iyi analiz ettiler. \xC7\u0131kard\u0131klar\u0131 dersleri kendi \xE7al\u0131\u015Fmalar\u0131na yans\u0131tt\u0131lar.",skills:[],source:null},{text:"Wright Karde\u015Fler birer dahi de\u011Fildi, fakat onlar\u0131 havac\u0131l\u0131k tarihinin \xF6nc\xFCleri yapan ve bug\xFCnk\xFC modern hayat\u0131 kuran ki\u015Filer olmalar\u0131n\u0131 sa\u011Flayan en b\xFCy\xFCk \xF6zellikleri u\xE7mak i\xE7in ta\u015F\u0131d\u0131klar\u0131 istek, \xE7ok \xE7al\u0131\u015Fmalar\u0131, farkl\u0131 \u015Feyler denemekten vazge\xE7memeleri,",skills:[],source:null},{text:"Wright Karde\u015Fler'in daha \xE7ocukluk y\u0131llar\u0131nda bir \xE7ok mucit plan\xF6rler yapmaya ve bunlar\u0131 kalabal\u0131klar\u0131n \xF6n\xFCnde u\xE7urarak becerilerini herkese g\xF6stermeye \xE7al\u0131\u015F\u0131yorlard\u0131. \u0130\u015Fte b\xF6yle bir ortamda b\xFCy\xFCyen Wright karde\u015Flerin en sevdikleri oyuncaklar\u0131ndan birisi de oyuncak plan\xF6rleriydi.",skills:[],source:null},{text:"\u0130kisi de bisiklet tamircisi olan, yani mekanik bilgileri olan Wright Karde\u015Fler, \xE7ok b\xFCy\xFCk ba\u015Far\u0131lar elde edemeseler de 1903 tarihinde buhar makineli \xE7ift pervaneli u\xE7a\u011F\u0131 Orville 260 metre boyunca ve 56 saniye insanl\u0131 olarak u\xE7urmay\u0131 ba\u015Farm\u0131\u015Ft\u0131. Ku\u015Flar\u0131, u\xE7urtmalar\u0131 ve plan\xF6rleri inceleyen iki karde\u015F bug\xFCn d\xFCnyan\u0131n ak\u0131\u015F\u0131n\u0131 de\u011Fi\u015Ftiren havac\u0131l\u0131 sekt\xF6r\xFCn\xFCn en \xF6nemli \xF6nc\xFCleri aras\u0131nda kabul edilmektedir.",skills:[],source:null}],skillScores:{"Ba\u015Far\u0131ya Odakl\u0131l\u0131k":2,Sebat:2,"\xD6z D\xFCzenleme":1,Dayan\u0131\u015Fma:0,Sosyallik:0,Giri\u015Fkenlik:0,Merak:3,Yarat\u0131c\u0131l\u0131k:2,Sorgulama:3}},{name:"Henry Ford",born:1863,died:1947,country:"",type:"Tarihsel anlat\u0131",stories:[],skillScores:{}},{name:"Steve Jobs",born:1955,died:2011,country:"ABD",type:"Mucit",stories:[{text:"Steve, k\xFC\xE7\xFCkl\xFC\u011F\xFCnden itibaren babas\u0131n\u0131n yan\u0131nda evlerindeki garajda arabalar\u0131n\u0131n bak\u0131m\u0131n\u0131 yaparken, b\xF6ylesine bir makineyi olu\u015Fturan t\xFCm par\xE7alar hakk\u0131nda \xF6nemli miktarda bilgi ve beceri sahibi olmu\u015Ftu.",skills:[],source:null},{text:"Steve daha lisedeyken, hayat\u0131 boyunca beraber \xE7al\u0131a\u015Faca\u011F\u0131 orta\u011F\u0131 Steve Wozniak ile tan\u0131\u015Ft\u0131. \u0130ki gen\xE7 \xE7ok zeki, \xE7al\u0131\u015Fan ve biraz da haylazd\u0131.",skills:[],source:null},{text:'Steve \xE7ok iyi bir \xFCniversiteye kayd\u0131n\u0131 yapt\u0131rd\u0131 ama t\xFCm dersler ilgisini \xE7ekmiyordu. Sadece ho\u015Funa giden derslere giriyordu. \xD6zellikle "ben o zaman o dersleri almam\u0131\u015F olsayd\u0131m bug\xFCn bilgisayarlarda g\xFCzel yaz\u0131 fontlar\u0131 asla olmayacakt\u0131" dedi\u011Fi kaligrafi ve tipografi derslerine.',skills:[],source:null},{text:"Steve, 1960'lar\u0131n ve 1970'lerin efsane bilgisayar oyun firmas\u0131 Atari'de \xE7al\u0131\u015Ft\u0131 bir s\xFCre, burada elektrnik ve bilgisayar d\xFCnyas\u0131na dair \xE7ok \u015Fey \xF6\u011Frendi. Ard\u0131ndan uzak do\u011Fu felsefesini \xF6\u011Frenmek i\xE7in Hindistan'a gitti. Kendi deyimiyle \xE7ok olgunla\u015Fm\u0131\u015F olarak \xFClkesi ABD'ye geri d\xF6nd\xFC.",skills:[],source:null},{text:"Tekrar Atari firmas\u0131nda i\u015F ba\u015F\u0131 yapt\u0131. Firman\u0131n patronun istedi\u011Fi \xE7ok zorlu bir bilgisayar oyununu Steve ve Wozniak beraberce k\u0131sa bir zamanda tamamlad\u0131lar ve y\xFCkl\xFC bir para ald\u0131lar.",skills:[],source:null},{text:`Steve'in hayat felsefesi evlerinin garaj\u0131nda ilk bilgisayar\u0131n\u0131 yapt\u0131klar\u0131 g\xFCnlerde bir dergide yazan bir s\xF6zd\xFC: "A\xE7 kal, aptal kal!" Bu s\xF6z\xFCn anlam\u0131 asl\u0131nda hayat\u0131n\u0131z boyunca y\u0131lmadan \xE7al\u0131\u015F\u0131n, \xF6\u011Frenin ve denemekten korkmay\u0131n demekti Steve i\xE7in. Bu s\xF6z\xFC \xF6l\xFCm\xFCnden k\u0131sa bir s\xFCre \xF6nce bir \xFCniversitenin mezuniyet t\xF6reninde yapt\u0131\u011F\u0131 konu\u015Fmada da kullanm\u0131\u015Ft\u0131: "Gen\xE7ler, hep a\xE7 kal\u0131n, aptal kal\u0131n!"`,skills:[],source:null},{text:"Steve ve Wozniak ilk seferinde bir elektronik ma\u011Fazas\u0131ndan 50 adet bilgisayar i\xE7in sipari\u015F ald\u0131lar. Bunlar\u0131 \xFCrettiler, teslim ettiler ve paralar\u0131n\u0131 ald\u0131lar, \xE7ok mutlulard\u0131. Ancak, bilgisayarlar\u0131 sat\u0131n alan ma\u011Fazan\u0131n sahibi cihazlar\u0131n g\xF6rsel tasar\u0131m\u0131n\u0131 a\u011F\u0131r \u015Fekilde ele\u015Ftirmi\u015Fti ve hatta a\u015Fa\u011F\u0131lam\u0131\u015Ft\u0131, \xE7\xFCnk\xFC Steve ve Wozniak g\xF6r\xFCnt\xFCden \xE7ok cihaz\u0131n do\u011Fru \xE7al\u0131\u015Fmas\u0131na odaklanm\u0131\u015Flard\u0131.",skills:[],source:null},{text:"\u0130lk bilgisayarlar\u0131n\u0131n g\xF6r\xFCnt\xFCs\xFCne gelen bu ele\u015Ftiriyi Steve \xE7ok ciddiye ald\u0131 ve ma\u011Faza sahibini hakl\u0131 buldu, \xE7\xFCnk\xFC insanlar i\u015Fyerlerinin veya evlerinin masalar\u0131na koyacaklar\u0131 bu cihazlar\u0131n tasar\u0131mlar\u0131n\u0131n estetik olmas\u0131n\u0131 istemeleri onlar\u0131n en do\u011Fal hakk\u0131yd\u0131.",skills:[],source:null},{text:"Steve i\xE7in \xFCretti\u011Fi bilgisayarlar\u0131n ve hatta onlar\u0131 koyduklar\u0131 kutular\u0131n g\xF6rsel tasar\u0131m\u0131 en \xF6ncelikli konulardan birisi olmu\u015Ftu. Apple 2'de kullanacaklar\u0131 bej rengi i\xE7in binlerce farkl\u0131 bej tonunu incelemi\u015F ve \xE7ok zor karar vermi\u015Fti. Apple 2'nin piyasaya \xE7\u0131k\u0131\u015F\u0131n\u0131 d\u0131\u015F koruyucu kutusunun tasar\u0131m\u0131n\u0131 be\u011Fenmedi\u011Fi i\xE7in yakla\u015F\u0131k 3 ay geciktirmi\u015Fti.",skills:[],source:null},{text:"Steve, bilgisayarlar\u0131n g\xF6rsell\u011Finin yan\u0131nda kullan\u0131m\u0131n da \xE7ok basit olmas\u0131na b\xFCy\xFCk \xF6nem veriyordu. \u0130nsanlar\u0131n bilgisayarlar\u0131 korkuya kap\u0131lmadan ve kolayl\u0131kla kullanmas\u0131 Steve'in \xF6nceliklerindendi.",skills:[],source:null},{text:"Steve'in geli\u015Ftirdikleri bilgisayarlar\u0131n her t\xFCrl\xFC kalitesiyle ilgili \xF6ylesine y\xFCksek tak\u0131nt\u0131lar\u0131 vard\u0131 ki Apple'da \xE7al\u0131\u015Fan t\xFCm i\u015F arkada\u015Flar\u0131n\u0131n ondan nefret etmeye ba\u015Flad\u0131klar\u0131n\u0131 anlayamam\u0131\u015Ft\u0131 bile. Bu nefre o kadar b\xFCy\xFCd\xFC ki ba\u015Far\u0131lar\u0131n\u0131n \xE7ok y\xFCksek oldu\u011Fu g\xFCnlerde \u015Firketin di\u011Fer ortaklar\u0131 Steve'in elinden t\xFCm yetkiyi ald\u0131. Art\u0131k Apple ile ilgili karar verme yetkisi yoktu.",skills:[],source:null},{text:"S\u0131f\u0131rdan kurdu\u011Fu Apple'\u0131 bir d\xFCnya markas\u0131 haline getiren Steve, Apple'dan ayr\u0131ld\u0131ktan sonra kurdu\u011Fu Next bilgisayar firmas\u0131n\u0131 da \xF6nemli bir \u015Firket haline getirdi ama esas b\xFCy\xFCk ba\u015Far\u0131s\u0131 \xFC\xE7 boyutlu animasyon filmler yapt\u0131\u011F\u0131 Pixar firmas\u0131 oldu.",skills:[],source:null},{text:"Steve, Pixar firmas\u0131yla Oyuncak Hikayesi, Kay\u0131p Bal\u0131k Nemo, \u0130nan\u0131lmaz Aile, Arabalar, Vol-i gibi \xE7ok \xFCnl\xFC animasyon fimlere imza att\u0131 ve bu \xE7al\u0131\u015Fmalar film d\xFCnyas\u0131nda b\xFCy\xFCk de\u011Fi\u015Fimleri de beraberin de getirdi. 1990'larla beraber insanlar\u0131n ve animasyonlar\u0131n beraber yer ald\u0131\u011F\u0131 fim yap\u0131mlar\u0131 \xE7ok pop\xFCler oldu.",skills:[],source:null},{text:"Bu \u015Firketleri sonraki y\u0131llarda \xE7ok b\xFCy\xFCk paralar kar\u015F\u0131l\u0131\u011F\u0131nda ba\u015Fka firmalara satan Steve, ayr\u0131l\u0131\u011F\u0131ndan sonra b\xFCy\xFCk sorunlar ya\u015Fayan ve ba\u015Far\u0131s\u0131z bir d\xF6nem ge\xE7iren Apple'\u0131n ortaklar\u0131 taraf\u0131ndan i\u015Finin ba\u015F\u0131na geri \xE7a\u011Fr\u0131ld\u0131.",skills:[],source:null},{text:"Batmakta olan Apple'\u0131n tekrar ba\u015F\u0131na ge\xE7en Steve, firmas\u0131n\u0131 adeta tekrar s\u0131f\u0131rdan kurdu! Bilgisayar d\xFCnyas\u0131na bamba\u015Fka bir bak\u0131\u015F a\xE7\u0131s\u0131 getiren kasay\u0131 ve ekran\u0131 tek bir cihaz olarak sunan iMac b\xFCy\xFCk s\xFCkse yapt\u0131.",skills:[],source:null},{text:"2000'li y\u0131llar\u0131n ba\u015F\u0131nda ard\u0131 ard\u0131na piyasaya \xE7\u0131kard\u0131\u011F\u0131 iPod m\xFCzik d\xFCnyas\u0131n\u0131 yerinden oynat\u0131rken, iPhone sadece mobil telefon piyasas\u0131n\u0131 de\u011Fil insanlar\u0131n e\u011Flence, ileti\u015Fim gibi bir \xE7ok al\u0131\u015Fkanl\u0131\u011F\u0131n\u0131 k\xF6k\xFCnden de\u011Fi\u015Ftirdi.",skills:[],source:null},{text:"2000'li y\u0131llarla beraber Apple'da yapt\u0131\u011F\u0131 b\xFCy\xFCk at\u0131l\u0131m d\xFCnyada sadece bilgisayar sekt\xF6r\xFCn\xFC de\u011Fil akl\u0131n\u0131za gelecek hemen hemen b\xFCt\xFCn sekt\xF6r\xFClerin ve sosyal hayat\u0131n al\u0131\u015Fkanl\u0131klar\u0131n\u0131 ve bile\u015Fenlerini kal\u0131c\u0131 olarak de\u011Fi\u015Ftiren Steve ne yaz\u0131k ki yakaland\u0131\u011F\u0131 kanser hastal\u0131\u011F\u0131 sonucunda 2011 y\u0131l\u0131nda hayata g\xF6zlerini yumdu.",skills:[],source:null}],skillScores:{"Ba\u015Far\u0131ya Odakl\u0131l\u0131k":10,Sebat:10,"\xD6z D\xFCzenleme":3,Dayan\u0131\u015Fma:0,Sosyallik:0,Giri\u015Fkenlik:0,Merak:7,Yarat\u0131c\u0131l\u0131k:4,Sorgulama:6}},{name:"Leonardo da Vinci",born:1452,died:1519,country:"\u0130talya",type:"Sanat\xE7\u0131",stories:[{text:"Leonardo'nun kendi mesle\u011Fi olan noterli\u011Fi \xF6\u011Frenmesini ve aile mesle\u011Fini devam ettirmesini isteyen babas\u0131n\u0131n aksine Leonardo do\u011Faya, \xE7evresine ait her\u015Feyi merak ediyordu ve onlar\u0131 k\xFC\xE7\xFCk ya\u015Flar\u0131ndan itibaren resmediyordu.",skills:[],source:null},{text:"O\u011Flunun kendi mesle\u011Fini yapmak istemedi\u011Fini \xFCz\xFClerek fark eden babas\u0131, Leonardo'yu bir arkada\u015F\u0131n\u0131n sanat at\xF6lyesine \xE7\u0131rak olarak verdi. Leonardo, orada o d\xF6nem sanatta kullan\u0131labilecek her t\xFCrl\xFC aleti, bunlar\u0131 kullanan usta sanat\xE7\u0131lar\u0131 ve y\xFCzlerce kitapl\u0131k k\xFCt\xFCphaneyi yak\u0131ndan g\xF6rme f\u0131rsat\u0131n\u0131 buldu.",skills:[],source:null},{text:"Bu \xE7\u0131rakl\u0131 s\xFCresinde Leonardo \xE7e\u015Fitli sanatlar\u0131n yan\u0131nda renkler konusunda da \xE7ok \u015Fey \xF6\u011Frenmi\u015Fti. \xD6zellikle \xE7\u0131rakl\u0131\u011F\u0131n\u0131n ilk y\u0131l\u0131nda temizlik i\u015Flerini yaparken, boya yap\u0131m\u0131na da yard\u0131mc\u0131 olmu\u015Ftur. Boyalar\u0131 olu\u015Fturan mazlemeleri, hangi malzemelerde hangi boyalar\u0131 kullanmas\u0131 gerekti\u011Fini de bu d\xF6nemde \xF6\u011Frenmi\u015Ftir. Ustas\u0131n\u0131n g\xF6z\xFCnde b\xFCy\xFCk bir h\u0131zla \xE7\u0131rakl\u0131ktan \xE7\u0131kan Leonardo bir usta olma yolunda ilerliyordu.",skills:[],source:null},{text:"Leonardo, sadece resim yapm\u0131yordu. Do\u011Fay\u0131, \xE7evresini, insanlar\u0131, insanlar\u0131n konu\u015Fmalar\u0131n\u0131, k\u0131saca g\xF6rebildi\u011Fi, duyabildi\u011Fi, dokunabildi\u011Fi her\u015Feyi inceleyip notlar al\u0131yordu. Ustas\u0131, ona ba\u015Far\u0131l\u0131 insan resimleri \xE7izmek i\xE7in mutlaka t\u0131p alan\u0131nda anatomi e\u011Fitimi almas\u0131 gerekti\u011Fini s\xF6ylemi\u015Fti.",skills:[],source:null},{text:`\u0130talya'da bir \xE7ok \u015Fehirde soylular i\xE7in sanatsal eserler tasarlayan ve \xFCreten Leonardo deneyime ve uygulamaya b\xFCy\xFCk \xF6nem veriyordu. \u015Eu s\xF6z kendisine aittir: "Bilgi, deneyimin evlad\u0131d\u0131r"`,skills:[],source:null},{text:"Leonardo, d\xFC\u015F\xFCnmeden resim yapman\u0131n ayna olmaktan farks\u0131z oldu\u011Funu s\xF6yler. Ger\xE7ek sanat\xE7\u0131 yapaca\u011F\u0131 i\u015Fe ait matemati\u011Fi, mekani\u011Fi, perspektifi \xE7ok iyi incelemeden i\u015Fine ba\u015Flamaz.",skills:[],source:null},{text:"Leonardo'nun en b\xFCy\xFCk zaafiyeti ba\u015Flad\u0131\u011F\u0131 i\u015Fi bitirmekteki motivasyonun zay\u0131fl\u0131\u011F\u0131 idi. Ba\u015Flad\u0131\u011F\u0131 bir \xE7ok projeyi kendi motivasyonun zaman i\xE7inde d\xFC\u015Fmesi y\xFCz\xFCnden veya kendisi d\u0131\u015F\u0131ndaki fakt\xF6rlerden dolay\u0131 tamamlayamam\u0131\u015Ft\u0131r. Eksik kalan i\u015Fleri zaman i\xE7inde tamamlamak gibi sab\u0131r ve azmi g\xF6stermekte de ba\u015Far\u0131l\u0131 olamam\u0131\u015Ft\u0131r.",skills:[],source:null},{text:"Bug\xFCn, Leonardo da Vinci denilince akl\u0131m\u0131za do\u011Frudan gelen en \xFCnl\xFC eseri Mona Lisa tablosunu bile tamamlamas\u0131 \xE7ok uzun y\u0131llar\u0131n\u0131 alm\u0131\u015Ft\u0131r.",skills:[],source:null},{text:"Leonardo, \xE7ocukluk y\u0131llar\u0131nda okulda \xF6\u011Frenme g\xFC\xE7l\xFC\u011F\xFC \xE7eken bir ki\u015Fi olarak etiketlenmi\u015F olsa bile, sonraki y\u0131llarda ortaya koydu\u011Fu performansla durumun tam tersi oldu\u011Funu ortaya koymu\u015F ve hayat\u0131 boyunca \xF6\u011Frenmekten, yeniyi aramaktan hi\xE7 vazge\xE7memi\u015Ftir.",skills:[],source:null},{text:"Leonardo, hayat\u0131 boyunca mimari ve makinelerle ilgili de bir \xE7ok tasar\u0131m yapm\u0131\u015Ft\u0131r. Ancak, mimari ile ilgili hi\xE7bir \xE7al\u0131\u015Fmas\u0131 hayata ge\xE7memi\u015Ftir. Makine tasar\u0131mlar\u0131n\u0131n baz\u0131lar\u0131n\u0131 arkada\u015Flar\u0131 ile beraber hayata ge\xE7irmeye \xE7al\u0131\u015Fm\u0131\u015Ft\u0131r. Zaman\u0131n\u0131n \xE7ok \xF6tesinde resim, mimari ve makine tasar\u0131mlar\u0131n\u0131 hayal eden ve bunlar\u0131 \xE7izen Leonardo bu \u015Fekilde 2 ve 3 boyutlu \xE7izim \xE7al\u0131\u015Fmalar\u0131 sayesinde R\xF6nesans d\xF6nemi sanat\xE7\u0131lar\u0131 aras\u0131nda modern sanata en fazla katk\u0131 yapanlardan birisi olarak ismini b\u0131rakm\u0131\u015Ft\u0131r.",skills:[],source:null}],skillScores:{"Ba\u015Far\u0131ya Odakl\u0131l\u0131k":3,Sebat:3,"\xD6z D\xFCzenleme":1,Dayan\u0131\u015Fma:0,Sosyallik:1,Giri\u015Fkenlik:0,Merak:4,Yarat\u0131c\u0131l\u0131k:2,Sorgulama:4}},{name:"Michelangelo",born:1475,died:1564,country:"\u0130talya",type:"Sanat\xE7\u0131",stories:[{text:"Michelangelo, ressam, \u015Fair, mimar ve heykelt\u0131ra\u015F olarak bir R\xF6nesans sanat\xE7\u0131s\u0131 olarak \xE7ok de\u011Ferli eserler ve tecr\xFCbeler b\u0131rakm\u0131\u015Ft\u0131r.",skills:[],source:null},{text:"Michelangelo, R\xF6nesans d\xF6neminde usta sanat\xE7\u0131lar\u0131n yan\u0131nda at\xF6lyelerde resim ve heykel alanlar\u0131nda \xE7\u0131rakl\u0131k yapt\u0131.",skills:[],source:null},{text:"Michelangelo'nun en \xFCnl\xFC eseri Davut heykelidir. Tonlarca a\u011F\u0131rl\u0131\u011Fa sahip 5,5 metre y\xFCksekli\u011Findeki mermeri y\u0131llar i\xE7inde o kadar titiz bir \u015Fekilde \xE7al\u0131\u015Fm\u0131\u015Ft\u0131r ki heykel neredeyse bir insan v\xFCcudundaki b\xFCt\xFCn kemik, kas ve damarlar\u0131 g\xF6steriyordu. Bu kadar ba\u015Far\u0131l\u0131 bir sanatsal eser \xE7\u0131karmak i\xE7in Michelangelo uzun s\xFCre hastanelerde kadavralarla \xE7al\u0131\u015Fm\u0131\u015F, insan anatomisini olu\u015Fturan deri, damar, kemik ve kaslar \xFCzerinde derinlemesine bilgi sahibi olmu\u015Ftur.",skills:[],source:null}],skillScores:{"Ba\u015Far\u0131ya Odakl\u0131l\u0131k":1,Sebat:1,"\xD6z D\xFCzenleme":0,Dayan\u0131\u015Fma:0,Sosyallik:0,Giri\u015Fkenlik:0,Merak:1,Yarat\u0131c\u0131l\u0131k:1,Sorgulama:1}},{name:"Pablo Picasso",born:1881,died:1973,country:"\u0130spanya",type:"Sanat\xE7\u0131",stories:[{text:"Bir sanat okulunda resim \xF6\u011Fretmeni babas\u0131 olan Picasso daha \xE7ocukluk y\u0131llar\u0131nda \xE7ok g\xFCzel resimler yapabiliyordu.",skills:["K\xFC\xE7\xFCk Ya\u015Fda Maruz Kalma"],source:null},{text:"Pablo resim yapmay\u0131 o kadar \xE7ok seviyordu ki daha \xE7ocukluk y\u0131llar\u0131nda resim sanat\u0131yla ilgili bir \xE7ok tekni\u011Fi ezbere biliyordu. Sadece 15 ya\u015F\u0131nda Madrid Kraliyet Sanat Akademisi'nin \xE7ok zorlu kabul s\u0131navlar\u0131n\u0131 \xFCst\xFCn ba\u015Far\u0131yla verdi ve buraya kabul edildi.",skills:["Bol Pratik","Hata Yapmaktan Korkmama"],source:null},{text:"Daha 20 ya\u015F\u0131na gelmeden yapt\u0131\u011F\u0131 resimler b\xFCy\xFCk \xF6d\xFCller kazanmas\u0131na ra\u011Fmen Pablo bir t\xFCrl\xFC kendi yapt\u0131\u011F\u0131 resimleri be\u011Fenmiyor, bir \u015Feylerin eksik oldu\u011Funu d\xFC\u015F\xFCn\xFCyordu.",skills:["Ele\u015Ftirel D\xFC\u015F\xFCnme","Sorgulama"],source:null},{text:"B\xFCt\xFCn teknikleri kullanmas\u0131na ve en iyi resmi onun yapt\u0131\u011F\u0131n\u0131 \u0130spanyadaki bir \xE7ok \xFCnl\xFC sanat\xE7\u0131 kabul etse de Pablo kendi tekni\u011Fini geli\u015Ftirmek i\xE7in \xE7ok \xE7al\u0131\u015F\u0131yor, usta sanat\xE7\u0131lar\u0131n eserlerini s\xFCrekli inceliyor ve m\xFCzelerden \xE7\u0131km\u0131yordu.",skills:["Sab\u0131r","Sebat"],source:null},{text:"Pablo, \xE7izdi\u011Fi \u015Feyleri olduklar\u0131 gibi de\u011Fil, insanlar taraf\u0131ndan alg\u0131land\u0131klar\u0131 haliyle \xE7izmek istiyordu, \xE7\xFCnk\xFC bir \u015Feyin oldu\u011Fu haliyle insanlar\u0131n o \u015Feyi alg\u0131lamas\u0131 aras\u0131nda fark oldu\u011Funu biliyordu.",skills:["Yarat\u0131c\u0131 D\xFC\u015F\xFCnme"],source:null},{text:`Bir arkada\u015F\u0131n\u0131n \xF6l\xFCm\xFCyle adeta y\u0131k\u0131lan Pablo, 4 y\u0131l gibi uzun bir s\xFCre izdivaya \xE7ekildi, daha az sosyal bir insan oldu ve sadece \xE7ok yoksul insanlar\u0131n mutsuz resimlerini mavi renk a\u011F\u0131rl\u0131kl\u0131 yapt\u0131. Bu d\xF6neme "Picasso'nun Mavi D\xF6nemi" denmektedir.`,skills:[],source:null},{text:"Bu 4 y\u0131ll\u0131k h\xFCz\xFCnl\xFC d\xF6nemin ard\u0131ndan, Pablo arkada\u015Flar\u0131yla beraber palyo\xE7alar\u0131n, cambazlar\u0131n oldu\u011Fu renkli sirk d\xFCnyas\u0131na merak sald\u0131. Pembe d\xF6nem olarak da an\u0131lan bu d\xF6nemde Pablo bir \xE7ok yeni resim yapt\u0131 ve bu resimlerde bask\u0131n renk pembeydi. Pablo, arkada\u015F\u0131n\u0131 zamans\u0131z kaybetmenin h\xFCzn\xFCnden yava\u015F yava\u015F kurtulmaya, hayattan tekrar keyif almaya ba\u015Flam\u0131\u015Fd\u0131.",skills:[],source:null},{text:"Bir g\xFCn \xE7ok sayg\u0131 duydu\u011Fu bir sanat\xE7\u0131n\u0131n Afrika Kabilelerinin b\xFCy\xFC ama\xE7l\u0131 yapt\u0131\u011F\u0131 maskeleri ona g\xF6stermesi Pablo'nun \xE7ocuklu\u011Fundan beri aram\u0131\u015F oldu\u011Fu sanat\u0131ndaki o eksikli\u011Fin ne oldu\u011Funu fark etmesini sa\u011Flam\u0131\u015Ft\u0131.",skills:[],source:null},{text:'Maskelerdeki insan ifadeleri o kadar ger\xE7eklikten uzakt\u0131 ki Pablo arad\u0131\u011F\u0131 \u015Feyin tam olarak bu oldu\u011Funu anlad\u0131. Resimlerinde \u015Feyleri oldu\u011Fu gibi ger\xE7ek ve g\xFCzel olarak de\u011Fil, insan beyninin o anda veya daha sonra o \u015Feyi alg\u0131lad\u0131\u011F\u0131 gibi "ger\xE7ek\xE7i olmayacak" \u015Fekilde \xE7izmeliydi.',skills:["Yarat\u0131c\u0131l\u0131k"],source:null},{text:"Pablo, resimlerini \xF6ylesine farkl\u0131 \xE7izmeye ba\u015Flam\u0131\u015Ft\u0131 ki ne arkada\u015Flar\u0131 ne sanat ele\u015Ftirmenleri ilk ba\u015Fta Pablo'yu k\u0131rmamak i\xE7in k\xF6t\xFC bir \u015Fey s\xF6ylediler, sadece anlayamad\u0131klar\u0131n\u0131 s\xF6ylediler. Di\u011Fer insanlar\u0131n yapt\u0131\u011F\u0131 resimleri ilk ba\u015Fta anlayamamas\u0131 Pablo'yu mutlu etmi\u015Fti, \xE7\xFCnk\xFC o art\u0131k \u015Feyleri g\xF6r\xFCnd\xFC\u011F\xFC gibi de\u011Fil insan\u0131n beyninde canlad\u0131rd\u0131\u011F\u0131 haliyle \xE7iziyordu.",skills:["Hata Yapmaktan Korkmamak","Uygulamak"],source:null},{text:"Pablo, \u015Feyleri sadece bakt\u0131\u011F\u0131n\u0131z y\xF6ndeki g\xF6r\xFCnt\xFCs\xFCyle de\u011Fil, g\xF6remedi\u011Fimiz taraflar\u0131n\u0131 da ayn\u0131 anda g\xF6r\xFCnecek \u015Fekilde geometrik \u015Fekilleri kullanarak \xE7izmeye ba\u015Flam\u0131\u015Ft\u0131. Bir insana \xF6nden bakt\u0131\u011F\u0131n\u0131zda sadece y\xFCz\xFCn\xFC g\xF6r\xFCrs\xFCn\xFCz ama Pablo y\xFCz\xFCn\xFCn yan\u0131nda kafas\u0131n\u0131n arkas\u0131n\u0131 s\u0131rt\u0131n\u0131 da ayn\u0131 anda g\xF6r\xFCnecek \u015Fekilde \xE7izmeye ba\u015Flam\u0131\u015Ft\u0131.",skills:[],source:null},{text:'\xC7al\u0131\u015Fmalar\u0131n\u0131 anlamadan yarg\u0131layanlara Pablo, "Bilmedi\u011Fimiz \u015Feyleri yarg\u0131lamamal\u0131y\u0131z" diyordu.',skills:[],source:null}],skillScores:{"Ba\u015Far\u0131ya Odakl\u0131l\u0131k":2,Sebat:5,"\xD6z D\xFCzenleme":2,Dayan\u0131\u015Fma:0,Sosyallik:0,Giri\u015Fkenlik:0,Merak:3,Yarat\u0131c\u0131l\u0131k:7,Sorgulama:2}},{name:"El-Cezeri",born:1136,died:1206,country:"T\xFCrkiye",type:"Mucit",stories:[{text:"Bundan 800 y\u0131l \xF6nce ya\u015Fayan T\xFCrk Bilgini El-Cezeri, insan m\xFCdahalesi olmadan mekanik enerji ile otomatik \xE7al\u0131\u015Fan bir \xE7ok makine geli\u015Ftirmi\u015Ftir. El-Cezeri, tarihteki ilk m\xFChendis olarak kabul edilmektedir.",skills:[],source:null},{text:"D\xFCnyan\u0131n en \xFCnl\xFC mucitlerinden say\u0131lan Leonardo da Vinci'den y\xFCz y\u0131llar \xF6nce bir \xE7ok bulu\u015Fa imza atan El-Cezeri 25 y\u0131l i\xE7erisinde t\xFCm bulu\u015Flar\u0131n\u0131 kitapla\u015Ft\u0131rm\u0131\u015Ft\u0131r.",skills:[],source:null},{text:`El-Cezeri'nin en bilinen \xE7al\u0131\u015Fmas\u0131 "Mekanik Hareketlerden M\xFChendilikte Faydalanmay\u0131 \u0130\xE7eren Kitap"t\u0131r. El_Cezeri bu kitab\u0131nda 50'den fazla makinenin nas\u0131l \xE7al\u0131\u015Ft\u0131\u011F\u0131n\u0131 \xE7izimlerle anlatm\u0131\u015Ft\u0131r.`,skills:[],source:null},{text:"Tarihte roboti\u011Fe ait bilinen ilk yaz\u0131l\u0131 kay\u0131t El-Cezeri'ye aittir",skills:[],source:null},{text:"300 y\u0131l \xF6nce ortaya \xE7\u0131kan Sanayi Toplumu'nun sembol\xFC otomatik dokuma tezgah\u0131ndan yakla\u015F\u0131k 500 y\u0131l \xF6nce otomatik yemek servisi yapan, hangi yeme\u011Fi hangi s\u0131rada verece\u011Fini bilen bir makine geli\u015Ftiren El-Cezeri'nin bu cihaz\u0131 d\xF6nemin Sultan\u0131 taraf\u0131ndan saray\u0131nda kullan\u0131lm\u0131\u015Ft\u0131r.",skills:[],source:null},{text:"El-Cezeri, hayat\u0131 boyunca saraylarda \xE7al\u0131\u015Fan \xE7ok farkl\u0131 saatler, m\xFCzik yapan/hizmet\xE7i robotlar ve \xE7e\u015Fitli otomatik \xE7al\u0131\u015Fan makineler yapm\u0131\u015Ft\u0131r.",skills:[],source:null}],skillScores:{"Ba\u015Far\u0131ya Odakl\u0131l\u0131k":1,Sebat:2,"\xD6z D\xFCzenleme":1,Dayan\u0131\u015Fma:0,Sosyallik:0,Giri\u015Fkenlik:0,Merak:1,Yarat\u0131c\u0131l\u0131k:2,Sorgulama:1}},{name:"Fuat Sezgin",born:1924,died:2018,country:"",type:"Bilim \u0130nsan\u0131",stories:[{text:"Bilimler tarihi, insanlar\u0131n m\xFC\u015Fterek miras\u0131d\u0131r!",skills:[],source:null},{text:"Fuat, Arap\xE7ay\u0131 2. D\xFCnya Sava\u015F\u0131 y\u0131llar\u0131nda T\xFCrkiye'de 6 ayl\u0131\u011F\u0131na okullar kapat\u0131l\u0131nca evde kendi kendine \xF6\u011Freniyor. Hi\xE7 anlamasa da Arap\xE7a kitaplar okuyor, o kitaplar\u0131 T\xFCrk\xE7e \xE7evirisi olan kitaplarla kar\u015F\u0131la\u015Ft\u0131rarak 6 ay i\xE7inde Arap\xE7a kitaplar\u0131 kolayl\u0131kla okumaya ba\u015Fl\u0131yor.",skills:[],source:null}],skillScores:{}},{name:"Biruni",born:973,died:1050,country:"\xD6zbekistan",type:"Bilim \u0130nsan\u0131",stories:[{text:"Ben herkesin kendi \xE7al\u0131\u015Fmas\u0131nda yapmas\u0131 gerekeni yapt\u0131m: \xD6nc\xFCllerinin ba\u015Far\u0131lar\u0131n\u0131 minnetarl\u0131kla kar\u015F\u0131lamak, onlar\u0131n yanl\u0131\u015Flar\u0131n\u0131 \xFCrkmeden do\u011Frulatmak, kendisine ger\xE7ek g\xF6r\xFCneni gelecek ku\u015Fa\u011Fa ve sonrakilere emanet etmek!",skills:["Bilim Insan\u0131"],source:null},{text:"Bilim tarih\xE7isi George Sarton, Biruni i\xE7in medeniyetin tan\u0131d\u0131\u011F\u0131 en b\xFCy\xFCk kafalardan birisidir diyor.",skills:[],source:null},{text:"Biruni, co\u011Frafi trigonometriyi bulan tarihteki ilk bilim insan\u0131d\u0131r. Biruni, deve s\u0131rt\u0131nda binlerce kilometrelik uzun ve yorucu yolculuklar yaparak d\xFCnya \xFCzerindeki 60 farkl\u0131 yerin boylam derecelerini 10.y\xFCzy\u0131l\u0131n k\u0131s\u0131tl\u0131 teknolojisi ve matemati\u011Fi ile hesaplamay\u0131 ba\u015Farm\u0131\u015Ft\u0131r.",skills:[],source:null}],skillScores:{"Ba\u015Far\u0131ya Odakl\u0131l\u0131k":2,Sebat:2,"\xD6z D\xFCzenleme":1,Dayan\u0131\u015Fma:0,Sosyallik:0,Giri\u015Fkenlik:0,Merak:2,Yarat\u0131c\u0131l\u0131k:1,Sorgulama:2}},{name:"\u0130bn R\xFC\u015Fd",born:1126,died:1198,country:"\u0130spanya",type:"Tarihsel anlat\u0131",stories:[{text:"Biz bug\xFCn bir \xE7ok \u015Feyi bilemiyoruz ama bu demek de\u011Fildir ki b\xF6yle kalacak. Gelecekte yeni imkanlar ortaya \xE7\u0131kacak ve bizim \xE7\xF6zemedi\u011Fimiz problemler \xE7\xF6z\xFCme kavu\u015Facakt\u0131r.",skills:[],source:null}],skillScores:{"Ba\u015Far\u0131ya Odakl\u0131l\u0131k":0,Sebat:0,"\xD6z D\xFCzenleme":0,Dayan\u0131\u015Fma:0,Sosyallik:0,Giri\u015Fkenlik:0,Merak:1,Yarat\u0131c\u0131l\u0131k:1,Sorgulama:1}},{name:"Farabi",born:872,died:950,country:"",type:"Tarihsel anlat\u0131",stories:[{text:"Farabi'de tahayy\xFCl mefhumu var. Buna g\xF6re teoriden \xF6nce hayal kurmak \xE7ok \xF6nemlidir. \xD6nce hayalinizde geli\u015Ftireceksiniz, ondan sonra teori ortaya \xE7\u0131kacak.",skills:[],source:null}],skillScores:{}},{name:"Cabir \u0130bn Hayyan",born:721,died:813,country:"\u0130ran",type:"Bilim \u0130nsan\u0131",stories:[{text:'8. y\xFCzy\u0131lda ya\u015Fam\u0131\u015F olan Hayyan, "Allah, insana kainat\u0131n t\xFCm s\u0131r perdelerini y\u0131ratacak ve yeni \u015Feyler \xFCretme kabiliyeti vermi\u015Ftir" diyor.',skills:[],source:null},{text:"Hayyan, Kimya biliminin ilk kurucusu olarak kabul edilir. Daha sonralar\u0131 bir \xE7ok farkl\u0131 bilimle de u\u011Fra\u015Fan Hayyan b\xFCy\xFCk bir do\u011Fa bilimcisi oldu. \u0130nsan\u0131n, Allah taraf\u0131ndan kainat\u0131n t\xFCm s\u0131r perdelereni y\u0131ratabilecek becerilerle yarat\u0131ld\u0131\u011F\u0131n\u0131 s\xF6yleyen Hayyan, insanlar\u0131n canl\u0131 ve cans\u0131z yeni varl\u0131klar yaratabilece\u011Fini daha 7. y\xFCzy\u0131lda s\xF6yleyebilecek \xF6zg\xFCr bir ortama sahipti.",skills:[],source:null},{text:"Hayyan'\u0131n kimya alan\u0131nda ula\u015Ft\u0131\u011F\u0131 bilgi birikimini insanl\u0131k ancak 17. y\xFCzy\u0131lda a\u015Fabilmi\u015Ftir.",skills:[],source:null}],skillScores:{"Ba\u015Far\u0131ya Odakl\u0131l\u0131k":0,Sebat:1,"\xD6z D\xFCzenleme":0,Dayan\u0131\u015Fma:0,Sosyallik:0,Giri\u015Fkenlik:0,Merak:2,Yarat\u0131c\u0131l\u0131k:1,Sorgulama:2}},{name:"\u0130bni Sina",born:980,died:1037,country:"\xD6zbekistan",type:"Tarihsel anlat\u0131",stories:[{text:`\xD6zbekistan'da 980 y\u0131l\u0131nda d\xFCnyaya g\xF6zlerini a\xE7an \u0130bni Sina, yakla\u015F\u0131k 700 y\u0131l d\xFCnya t\u0131p biliminin en temel eseri olan "T\u0131bb\u0131n Kanunu" adl\u0131 kitab\u0131 yazm\u0131\u015Ft\u0131r. Saray'da k\xE2tiplik yapan babas\u0131, bilimi \xE7ok seven ve evinde y\xFCzlerce kitab\u0131 olan birisiydi. Ayr\u0131ca, evlerinde s\xFCrekli babas\u0131 ve arkada\u015Flar\u0131 bilimsel sohbetler yaparlard\u0131. \u0130bni Sina bu sohbetleri duyarak b\xFCy\xFCme \u015Fans\u0131n\u0131 yakalad\u0131.`,skills:["K\xFC\xE7\xFCk Ya\u015Fda Maruz Kalma"],source:null},{text:"\u0130bni Sina, daha \xE7ocukluk y\u0131llar\u0131nda o kadar \xE7ok okuyordu ki bir \xE7ok konu hakk\u0131nda bilgi sahibi olmu\u015Ftu. 16 ya\u015F\u0131ndayken t\u0131p alan\u0131nda yapt\u0131\u011F\u0131 \xE7al\u0131\u015Fmalarla \xFCnlenen \u0130bni Sina, d\xF6nemin Orta Asya'da ya\u015Fad\u0131\u011F\u0131 \xFClkenin padi\u015Fah\u0131 hastalan\u0131nca onu ba\u015Far\u0131yla tedavi etmi\u015Ftir. Bu ba\u015Far\u0131s\u0131 sebebiyle, padi\u015Fahdan y\xFCkl\xFC bir \xF6d\xFCl ald\u0131 ve ard\u0131ndan sarayda hekim olarak \xE7al\u0131\u015Fmaya ba\u015Flad\u0131.",skills:[],source:null},{text:"Sarayda \u0130bni Sinay\u0131 en \xE7ok mutlu eden \u015Fey muhte\u015Fem k\xFCt\xFCphanesiydi! Okumay\u0131 \xE7ok seven \u0130bni Sina i\xE7in buras\u0131 cennet gibiydi. Keyif i\xE7inde kitaplar\u0131n\u0131 okurken bir g\xFCn Saray'da \xE7\u0131kan yang\u0131n sonucunda k\xFCt\xFCphane yanar ve kendisini \xE7ok seven ve koruyan Padi\u015Fah hayat\u0131n\u0131 kaybeder.",skills:[],source:null},{text:"Daha sonraki y\u0131llarda bir\xE7ok farkl\u0131 \xFClkede farkl\u0131 saraylarda sayg\u0131yla a\u011F\u0131rlanan \u0130bni Sina matematik, t\u0131p ve felsefe ba\u015Fta olmak \xFCzere bir \xE7ok farkl\u0131 bilim alanda \xE7al\u0131\u015Fm\u0131\u015F ve eserler vermi\u015Ftir.",skills:[],source:null},{text:"\xC7al\u0131\u015Fkanl\u0131\u011F\u0131 sayesinde gitti\u011Fi her sarayda padi\u015Fahlara kendini sevdiren \u0130bni Sina'y\u0131 ne yaz\u0131k ki k\u0131skanan ve hakk\u0131nda olumsuz dedikodular \xFCreten bir \xE7ok ki\u015Fi olmu\u015Ftur. \u0130bni Sina bu t\xFCr olumsuzluklara ra\u011Fmen \xE7al\u0131\u015Fmaktan y\u0131lmam\u0131\u015F ve hayat\u0131 boyunca yeni ara\u015Ft\u0131rmalar yapm\u0131\u015F ve kitaplar yazm\u0131\u015Ft\u0131r.",skills:[],source:null},{text:"T\u0131pta anatomi, patoloji, hijyen, ila\xE7lar\u0131n farmokolojik tarifleri, bir \xE7ok hastal\u0131\u011F\u0131n tan\u0131m\u0131, ate\u015F, t\xFCm\xF6r ve \xE7\u0131ban gibi hastal\u0131klar\u0131n ba\u015Flang\u0131\xE7 seyirleri gibi o d\xF6neme g\xF6re \xE7ok ileri seviyede bilgilerin bulundu\u011Fu kitaplar yazm\u0131\u015Ft\u0131r.",skills:[],source:null}],skillScores:{"Ba\u015Far\u0131ya Odakl\u0131l\u0131k":3,Sebat:3,"\xD6z D\xFCzenleme":1,Dayan\u0131\u015Fma:0,Sosyallik:0,Giri\u015Fkenlik:0,Merak:3,Yarat\u0131c\u0131l\u0131k:1,Sorgulama:3}},{name:"T\xFCrk-M\xFCsl\xFCman Bilimi",born:700,died:1400,country:"",type:"Tarihsel anlat\u0131",stories:[{text:"M\xFCsl\xFCmanlar, 7. y\xFCzy\u0131ldan itibaren bilimleri Yunanl\u0131lardan ve Hintlilerden ald\u0131lar. Adeta kendilerinin hocalar\u0131 gibi g\xF6rd\xFCkleri bu eski medeniyetlin d\xFC\u015F\xFCn\xFCrlerine s\xFCrekli at\u0131fta bulunan M\xFCsl\xFCman ve T\xFCrk bilim insanlar\u0131 200 y\u0131ll\u0131k kopyalaman\u0131n ard\u0131ndan kendi yarat\u0131c\u0131 ve \xF6zg\xFCn ara\u015Ft\u0131rmalar\u0131n\u0131 ve \xE7al\u0131\u015Fmalar\u0131n\u0131 yapmaya ba\u015Flad\u0131lar.",skills:[],source:null},{text:"M\xFCsl\xFCman bilim insanlar\u0131 15. y\xFCzy\u0131lda Afrikan\u0131n do\u011Fusu ile Uzakdo\u011Fudaki Sumatra adas\u0131 aras\u0131ndaki 6600 km.'lik mesafeyi hatas\u0131z hesaplayabiliyordu.",skills:[],source:null},{text:"Yunanl\u0131lar da M\xFCsl\xFCmanlar da saat yap\u0131yorlard\u0131. Yunanl\u0131lar\u0131n saatleri sadece tam saatleri g\xF6steriyordu. M\xFCsl\xFCmanlar\u0131n yapt\u0131klar\u0131 saatler ise tam ve bu\xE7uklar\u0131 g\xF6steriyordu. Yani, M\xFCsl\xFCmanlar Yunanl\u0131lardan \xF6\u011Frendikleri teknolojiyi 8. y\xFCzy\u0131lda daha ileriye ta\u015F\u0131y\u0131p daha ayr\u0131nt\u0131l\u0131 hale getirdiler.",skills:[],source:null},{text:"Dakikalar\u0131 g\xF6steren ilk saati de yine 12. y\xFCzy\u0131lda M\xFCsl\xFCman bilim adamlar\u0131 yap\u0131yorlar.",skills:[],source:null},{text:"Amerikal\u0131 me\u015Fhur bilim tarih\xE7isi Wili Durant, D\xFCnya bilimini etkileyen en etkili bilim insanlar\u0131n\u0131n \u0130bni Sina, Biruni, Razi, \u0130bni Heysem ve Cabir El Hayyam oldu\u011Funu ifade etmi\u015Ftir.",skills:[],source:null},{text:"Biruni 27 ve \u0130bni Sina 18 ya\u015F\u0131ndayken aralar\u0131nda \u0131\u015F\u0131\u011F\u0131n h\u0131z\u0131n\u0131n olup olmad\u0131\u011F\u0131n\u0131 tart\u0131\u015F\u0131yorlar.",skills:[],source:null}],skillScores:{}},{name:"Modern Bilim",born:1500,died:2020,country:"",type:"Tarihsel anlat\u0131",stories:[{text:"Bug\xFCn T\xFCrk\xE7e 'bilim' anlam\u0131na gelen Science kelimesi latince k\xF6kenli 'scientia' kelimesinden orta\xE7a\u011Fda t\xFCremi\u015Ftir. Bug\xFCn bu kelimeyi bilim anlam\u0131nda kullansak da kelimenin k\xF6k anlam\u0131 'bilgi'dir.",skills:[],source:null},{text:"17. y\xFCzy\u0131la kadar bug\xFCnk\xFC anlamda bilimle ilgilenen insanlara bilim adam\u0131, bilim kad\u0131n\u0131 veya bilim insan\u0131 denmiyordu. Galileo, Newton gibi bilim insanlar\u0131na o zamanlar 'do\u011Fa felsefecileri' ad\u0131 veriliyordu.",skills:[],source:null},{text:"Bilim insan\u0131 kavram\u0131, yani \u0130ngilizcesi Scientist, 1833 y\u0131l\u0131nda \u0130ngiltere'deki bir bilimsel toplant\u0131 s\u0131ras\u0131nda \xF6nerildi ve genel kabul g\xF6r\xFCnce kal\u0131c\u0131 hale geldi.",skills:[],source:null},{text:"Einstein, saf mant\u0131ksal d\xFC\u015F\xFCnmenin bizi deneysel d\xFCnyaya dair hi\xE7 bir bilgiye ula\u015Ft\u0131rmayaca\u011F\u0131n\u0131, ger\xE7e\u011Fin t\xFCm bilgisinin deneyimle ba\u015Flay\u0131p deneyimle sonland\u0131\u011F\u0131n\u0131 s\xF6ylemi\u015Ftir.",skills:[],source:null},{text:"Bilim tarihinde inceleyece\u011Finiz t\xFCm bilim insanlar\u0131n\u0131n ortak paydas\u0131 hepsi alanlar\u0131nda \u0131srarla ve gayretle \xE7al\u0131\u015Ft\u0131lar ve meslek ya\u015Famlar\u0131 boyunca \xE7ok \xFCretkendiler.",skills:[],source:null},{text:"Darwin, \xE7ok zeki pek \xE7ok insan\u0131n bir \u015Fey yaratamad\u0131\u011F\u0131n\u0131, kendi inanc\u0131na g\xF6re bu yarat\u0131c\u0131l\u0131\u011F\u0131n olan biten her \u015Feyin nedenlerini ve anlam\u0131n\u0131 \u0131srarla arama al\u0131\u015Fkanl\u0131\u011F\u0131na ba\u011Fl\u0131 oldu\u011Funu ifade etmi\u015Ftir.",skills:[],source:null},{text:"Kepler g\xF6k bilimi be\u015Feri bilimler alan\u0131ndan matematiksel fizi\u011Fin bir kolu haline getirdi. Kepler'in bu \xE7al\u0131\u015Fmalar\u0131, \xF6l\xFCm\xFCnden yakla\u015F\u0131k 13 y\u0131ls sonra do\u011Fan Isaac Newton'un \xE7al\u0131\u015Fmalar\u0131n\u0131n temelini olu\u015Fturmu\u015Ftur.",skills:[],source:null},{text:"Newton ve Einstein, her ikisi de k\xFC\xE7\xFCklerinde zay\u0131f ve ba\u015Far\u0131s\u0131z \xF6\u011Frenciler olarak etiketlenmi\u015F ve \xF6\u011Fretmenleri taraf\u0131ndan geri kabul edilmi\u015Ftir.",skills:[],source:null}],skillScores:{}}],skillNames:["Ba\u015Far\u0131ya Odakl\u0131l\u0131k","Sebat","\xD6z D\xFCzenleme","Dayan\u0131\u015Fma","Sosyallik","Giri\u015Fkenlik","Merak","Yarat\u0131c\u0131l\u0131k","Sorgulama"],sharedTraits:["E\u011Fitimli bir aile veya yak\u0131n \xE7evre i\xE7inde b\xFCy\xFCyorlar","K\xFC\xE7\xFCk ya\u015Fta merakl\u0131 olmalar\u0131n\u0131 ve meraklar\u0131n\u0131 giderecekleri ortam buluyorlar","K\xFC\xE7\xFCk ya\u015Fta sorgulama iste\u011Fi ve f\u0131rsat\u0131 buluyorlar","K\xFC\xE7\xFCk ya\u015Fta okul ortam\u0131nda \xE7ok da ba\u015Far\u0131l\u0131 olmuyorlar veya ba\u015Far\u0131l\u0131 olsalar da okulu ilk ba\u015Fta \xE7ok sevmeyebiliyorlar."],meta:{source:"unlu bilim ve teknoloji insanlari.xlsx",people:25}};var ku=["#c9ff48","#65e6b4","#70a7ff","#ffce65","#ff846b","#cf85ff","#46d9e6","#ff8fb8","#f4f0dc"],xi=700,Or=2020,Ot=on.people.filter(i=>i.born),le={selected:Ot.find(i=>i.name==="Galileo Galilei")||Ot[0],story:0,year:1500,skill:null,query:"",period:null,view:"timeline",playing:!1,theme:"light"},Ee=i=>document.querySelector(i),He={canvas:Ee("#scene"),name:Ee("#selectedName"),life:Ee("#selectedLife"),type:Ee("#selectedType"),text:Ee("#storyText"),skills:Ee("#storySkills"),index:Ee("#storyIndex"),total:Ee("#storyTotal"),chips:Ee("#skillChips"),year:Ee("#yearRange"),output:Ee("#rangeOutput"),badge:Ee("#yearBadge"),empty:Ee("#emptyState")};He.canvas.style.cursor="default";Ee("#personCount").textContent=on.people.length;Ee("#storyCount").textContent=on.people.reduce((i,e)=>i+e.stories.length,0);Ee("#skillCount").textContent=on.skillNames.length;for(let i=700;i<=2e3;i+=100){let e=document.createElement("i");e.className=`timeline-tick ${i%500===0?"major":""}`,e.dataset.year=i,e.style.left=`${(i-xi)/(Or-xi)*100}%`,e.innerHTML=`<span>${i}</span>`,Ee("#timelineRuler").append(e)}var zr=document.createElement("i");zr.className="timeline-tick major";zr.dataset.year="2020";zr.style.left="100%";zr.innerHTML="<span>2020</span>";Ee("#timelineRuler").append(zr);var Br=document.createElement("b");Br.className="timeline-current";Br.innerHTML="<span>1500</span>";Ee("#timelineRuler").append(Br);on.skillNames.forEach((i,e)=>{let t=document.createElement("button");t.textContent=i,t.style.setProperty("--skill",ku[e]),t.addEventListener("click",()=>{le.skill=le.skill===i?null:i,$i()}),He.chips.append(t)});on.sharedTraits.forEach((i,e)=>{let t=document.createElement("div");t.className="trait",t.innerHTML=`<b>0${e+1}</b><p>${i}</p>`,Ee("#traitList").append(t)});[...Ot].sort((i,e)=>i.born-e.born).forEach(i=>{let e=document.createElement("button");e.type="button",e.className="person-chip",e.dataset.person=i.name,e.innerHTML=`<small>${i.born}</small><span>${i.name}</span>`,e.addEventListener("click",()=>Ja(i)),Ee("#peopleStrip").append(e)});var Vr=new dr;Vr.fog=new hr(462862,.018);var Bt=new Ct(45,1,.1,500);Bt.position.set(0,18,52);Bt.lookAt(0,0,0);var Za=new Ga({canvas:He.canvas,antialias:!0,alpha:!0});Za.setPixelRatio(Math.min(devicePixelRatio,2));Za.outputColorSpace=Pt;var jt=new wn;Vr.add(jt);var Cu=new In({color:6717558,transparent:!0,opacity:.34}),Pg=new yt().setFromPoints([new D(-38,0,0),new D(38,0,0)]);jt.add(new Kn(Pg,Cu));var qa=new Kn(new yt().setFromPoints([new D(0,-20,2),new D(0,20,2)]),new In({color:13238088,transparent:!0,opacity:.42}));jt.add(qa);var Lg=new xr(.42,2),Dg=new br(.65,.72,32),bn=[],Cl=[],Dn=null;function Xa(i){return nl.mapLinear(i,xi,Or,-37,37)}function Ru(i){let e=null,t=-1;return Object.entries(i.skillScores||{}).forEach(([n,r])=>{r>t&&(e=n,t=r)}),e}function Ng(i){let e=on.skillNames.indexOf(Ru(i));return new Be(ku[e<0?0:e])}function Ug(i,e){let t=on.skillNames,n=0,r=0,s=0;return t.forEach(a=>{let o=i.skillScores?.[a]||0,l=e.skillScores?.[a]||0;n+=o*l,r+=o*o,s+=l*l}),r&&s?n/Math.sqrt(r*s):0}var Iu=new Map;[...Ot].sort((i,e)=>i.born-e.born).forEach((i,e)=>{let t=e===0?0:e%2?Math.ceil(e/2):-Math.ceil(e/2);Iu.set(i.name,t)});Ot.forEach((i,e)=>{let t=Ng(i),n=new Jn({color:t,transparent:!0,opacity:.9}),r=new Lt(Lg,n),s=Iu.get(i.name)*1.55,a=(e%5-2)*.72,l=Math.max(0,on.skillNames.indexOf(Ru(i)))/on.skillNames.length*Math.PI*2,c=9+e%5*2.2;r.position.set(Xa(i.born),s,a),r.userData={person:i,baseY:s,baseZ:a,timelinePos:new D(Xa(i.born),s,a),networkPos:new D(Math.cos(l)*c,Math.sin(l)*c,(e%4-1.5)*1.1)},jt.add(r),bn.push(r);let h=document.createElement("button");h.type="button",h.className="person-label",h.setAttribute("aria-label",`${i.name}, ${i.born}\u2013${i.died||"?"}. Ayr\u0131nt\u0131lar\u0131 a\xE7`),h.innerHTML=`<span>${i.name}</span><small>${i.born}</small>`,h.addEventListener("click",()=>Ja(i)),h.addEventListener("pointerenter",()=>{Dn=r}),h.addEventListener("pointerleave",()=>{Dn=null}),Ee("#timelineLabels").append(h),r.userData.label=h;let f=new Lt(Dg,new Jn({color:t,transparent:!0,opacity:.12,side:Kt}));f.position.copy(r.position),f.userData={haloFor:i.name},jt.add(f),r.userData.halo=f;let u=Xa(i.died||i.born+20),m=new yt().setFromPoints([new D(r.position.x,s,a),new D(u,s,a)]),_=new Kn(m,new In({color:t,transparent:!0,opacity:.2}));_.userData={lifeFor:i.name},jt.add(_),r.userData.life=_});for(let i=0;i<Ot.length;i++)for(let e=i+1;e<Ot.length;e++){let t=Ug(Ot[i],Ot[e]);if(t<.73)continue;let n=new yt().setFromPoints([bn[i].position,bn[e].position]),r=new Kn(n,new In({color:6678196,transparent:!0,opacity:0}));r.userData={a:Ot[i],b:Ot[e],score:t},jt.add(r),Cl.push(r)}var Pu=new yt,Lu=[];for(let i=0;i<380;i++)Lu.push((Math.random()-.5)*100,(Math.random()-.5)*44,(Math.random()-.5)*45);Pu.setAttribute("position",new ft(Lu,3));Vr.add(new gr(Pu,new Vi({color:7902602,size:.055,transparent:!0,opacity:.55})));var Ya=new Tr,Ki=new Oe,Rl=!1,wl=0,kl=0;He.canvas.addEventListener("pointerdown",i=>{Rl=!1,wl=i.clientX,kl=i.clientY,He.canvas.setPointerCapture(i.pointerId)});He.canvas.addEventListener("pointermove",i=>{if(He.canvas.hasPointerCapture(i.pointerId)){let e=i.clientX-wl,t=i.clientY-kl;Math.abs(e)+Math.abs(t)>2&&(Rl=!0),le.view==="network"&&(jt.rotation.y+=e*.004,jt.rotation.x=Math.max(-.45,Math.min(.45,jt.rotation.x+t*.003))),wl=i.clientX,kl=i.clientY,Il();return}Fg(i)});He.canvas.addEventListener("pointerup",i=>{if(Rl)return;let e=He.canvas.getBoundingClientRect();Ki.x=(i.clientX-e.left)/e.width*2-1,Ki.y=-((i.clientY-e.top)/e.height)*2+1,Ya.setFromCamera(Ki,Bt);let t=Ya.intersectObjects(bn).find(n=>n.object.visible);t&&Ja(t.object.userData.person)});He.canvas.addEventListener("pointerleave",Il);He.canvas.addEventListener("wheel",i=>{le.view==="network"&&(i.preventDefault(),Bt.position.z=Math.max(24,Math.min(80,Bt.position.z+i.deltaY*.035)))},{passive:!1});function _i(i){let e=le.query.toLocaleLowerCase("tr"),t=[i.name,i.country,...i.stories.map(s=>s.text)].join(" ").toLocaleLowerCase("tr"),n=!le.skill||(i.skillScores?.[le.skill]||0)>0||i.stories.some(s=>s.skills.some(a=>a.toLocaleLowerCase("tr").includes(le.skill.toLocaleLowerCase("tr")))),r=!le.period||i.born<=le.period[1]&&(i.died||i.born)>=le.period[0];return(!e||t.includes(e))&&n&&r}function $i(){let i=0;if(bn.forEach(e=>{let t=_i(e.userData.person);e.visible=t,e.userData.halo.visible=t,e.userData.life.visible=t,e.userData.label.hidden=!t,t&&i++}),Cl.forEach(e=>e.visible=_i(e.userData.a)&&_i(e.userData.b)),[...He.chips.children].forEach(e=>e.classList.toggle("active",e.textContent===le.skill)),Ee("#filterCount").textContent=(le.skill?1:0)+(le.period?1:0)+(le.query?1:0),He.empty.hidden=i>0,Ee("#canvasCaption").textContent=`${i} kay\u0131t g\xF6r\xFCn\xFCr \xB7 ${le.view==="network"?"S\xFCr\xFCkle: a\u011F\u0131 d\xF6nd\xFCr \xB7 Tekerlek: yak\u0131nla\u015Ft\u0131r":"Y\xF6n kilitli \xB7 Y\u0131l\u0131 alt kayd\u0131r\u0131c\u0131 veya play ile de\u011Fi\u015Ftir"}`,document.querySelectorAll(".person-chip").forEach(e=>{let t=Ot.find(n=>n.name===e.dataset.person);e.hidden=!t||!_i(t)}),!_i(le.selected)){let e=Ot.find(_i);e&&Ja(e)}}function Ja(i){le.selected=i,le.story=0,le.year=i.born,He.year.value=le.year,Ka(),document.querySelectorAll(".person-chip").forEach(t=>t.classList.toggle("active",t.dataset.person===i.name)),document.querySelector(`.person-chip[data-person="${CSS.escape(i.name)}"]`)?.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),setTimeout(()=>Ee("#storyCard").scrollIntoView({behavior:"smooth",block:"center"}),120)}function Ka(){let i=le.selected,e=i.stories[le.story]||i.stories[0];He.name.textContent=i.name,He.life.textContent=`${i.born||"?"}\u2014${i.died||"?"}${i.country?" \xB7 "+i.country:""}`,He.type.textContent=i.type||"Tarihsel anlat\u0131",He.text.textContent=e?.text||"Kaynak Excel tablosunda bu ki\u015Fi i\xE7in ayr\u0131nt\u0131l\u0131 bir olay anlat\u0131s\u0131 yer alm\u0131yor.",He.index.textContent=i.stories.length?String(le.story+1).padStart(2,"0"):"00",He.total.textContent=`/ ${String(i.stories.length).padStart(2,"0")}`,He.skills.innerHTML="",(e?.skills?.length?e.skills:Du(i)).forEach(n=>{let r=document.createElement("span");r.textContent=n,He.skills.append(r)}),He.output.textContent=le.year,He.badge.textContent=le.year,Nu()}function Du(i){return Object.entries(i.skillScores||{}).filter(([,e])=>e>0).sort((e,t)=>t[1]-e[1]).slice(0,4).map(([e])=>e)}function Nu(){let i=Math.max(0,Math.min(100,(le.year-xi)/(Or-xi)*100));Br.style.left=`${i}%`,Br.querySelector("span").textContent=le.year}function Uu(i){let e=le.selected.stories.length;e&&(le.story=(le.story+i+e)%e,Ka())}function Fg(i){let e=He.canvas.getBoundingClientRect();if(Ki.x=(i.clientX-e.left)/e.width*2-1,Ki.y=-((i.clientY-e.top)/e.height)*2+1,Ya.setFromCamera(Ki,Bt),Dn=Ya.intersectObjects(bn).find(l=>l.object.visible)?.object||null,document.querySelector(".canvas-wrap").classList.toggle("hovering",!!Dn),!Dn){Il();return}let n=Dn.userData.person,r=n.stories[0];Ee("#hoverYears").textContent=`${n.born}\u2014${n.died||"?"}${n.country?" \xB7 "+n.country:""}`,Ee("#hoverStoryCount").textContent=n.stories.length?`${n.stories.length} hik\xE2ye`:"Kaynakta olay yok",Ee("#hoverName").textContent=n.name,Ee("#hoverStory").textContent=r?.text||"Kaynak Excel tablosunda bu ki\u015Fi i\xE7in ayr\u0131nt\u0131l\u0131 bir olay anlat\u0131s\u0131 bulunmuyor.",Ee("#hoverSkills").innerHTML="",(r?.skills?.length?r.skills:Du(n)).slice(0,4).forEach(l=>{let c=document.createElement("span");c.textContent=l,Ee("#hoverSkills").append(c)}),Ee("#hoverHint").textContent=n.stories.length>1?`T\u0131kla ve ${n.stories.length} hik\xE2yenin tamam\u0131n\u0131 ke\u015Ffet`:"Ayr\u0131nt\u0131 kart\u0131na gitmek i\xE7in t\u0131kla";let s=Ee("#hoverCard");s.hidden=!1;let a=e.width-s.offsetWidth-24,o=e.height-s.offsetHeight-24;s.style.left=`${Math.max(8,Math.min(i.clientX-e.left,a))}px`,s.style.top=`${Math.max(8,Math.min(i.clientY-e.top,o))}px`}function Il(){Dn=null,Ee("#hoverCard").hidden=!0,document.querySelector(".canvas-wrap").classList.remove("hovering")}Ee("#prevStory").onclick=()=>Uu(-1);Ee("#nextStory").onclick=()=>Uu(1);Ee("#searchInput").addEventListener("input",i=>{le.query=i.target.value,$i()});He.year.addEventListener("input",i=>{le.year=+i.target.value,He.output.textContent=le.year,He.badge.textContent=le.year,Nu();let e=Ot.filter(_i).sort((t,n)=>Math.abs(t.born-le.year)-Math.abs(n.born-le.year))[0];e&&Math.abs(e.born-le.year)<45&&e!==le.selected&&(le.selected=e,le.story=0,Ka())});document.querySelectorAll(".view-tab").forEach(i=>i.addEventListener("click",()=>{le.view=i.dataset.view,document.querySelectorAll(".view-tab").forEach(e=>{e.classList.toggle("active",e===i),e.setAttribute("aria-selected",e===i?"true":"false")}),jt.rotation.set(0,0,0),Bt.position.set(0,le.view==="network"?0:18,le.view==="network"?42:52),Bt.lookAt(0,0,0),He.canvas.style.cursor=le.view==="network"?"grab":"default",$i()}));document.querySelectorAll(".view-tab").forEach(i=>i.addEventListener("click",()=>bn.forEach(e=>e.userData.life.visible=le.view==="timeline"&&e.visible)));Ee("#resetCamera").onclick=()=>{jt.rotation.set(0,0,0),Bt.position.set(0,le.view==="network"?0:18,le.view==="network"?42:52),Bt.lookAt(0,0,0)};var wu;Ee("#playButton").onclick=()=>{le.playing=!le.playing,Ee("#playButton").textContent=le.playing?"\u2161":"\u25B6",Ee("#playButton").setAttribute("aria-label",le.playing?"Zaman \xE7izgisini duraklat":"Zaman \xE7izgisini oynat"),clearInterval(wu),le.playing&&(le.year>=Or-5&&(le.year=xi),wu=setInterval(()=>{le.year=le.year>=Or?xi:le.year+8,He.year.value=le.year,He.year.dispatchEvent(new Event("input"))},110))};function Pl(i){Ee("#filterDrawer").classList.toggle("open",i),Ee("#filterDrawer").setAttribute("aria-hidden",!i),Ee("#backdrop").classList.toggle("show",i)}Ee("#filterButton").onclick=()=>Pl(!0);Ee("#closeDrawer").onclick=()=>Pl(!1);Ee("#backdrop").onclick=()=>Pl(!1);document.querySelectorAll(".period-buttons button").forEach(i=>i.addEventListener("click",()=>{let e=[+i.dataset.min,+i.dataset.max],t=le.period&&le.period[0]===e[0];le.period=t?null:e,document.querySelectorAll(".period-buttons button").forEach(n=>n.classList.toggle("active",!t&&n===i)),$i()}));Ee("#clearFilters").onclick=()=>{le.period=null,le.skill=null,le.query="",Ee("#searchInput").value="",document.querySelectorAll(".period-buttons button").forEach(i=>i.classList.remove("active")),$i()};Ee("#helpButton").onclick=()=>Ee("#helpDialog").showModal();Ee("#closeHelp").onclick=()=>Ee("#helpDialog").close();function Fu(i){le.theme=i,document.documentElement.dataset.theme=i;let e=i==="light";Ee("#themeButton").setAttribute("aria-pressed",e?"true":"false"),Ee("#themeLabel").textContent=e?"Koyu tema":"A\xE7\u0131k tema",Ee("#themeButton").querySelector("span").textContent=e?"\u25D0":"\u263C",Vr.fog.color.set(e?16250352:462862),Cu.color.set(e?6386561:6717558),qa.material.color.set(e?35989:13238088);try{localStorage.setItem("bilim-atlasi-theme",i)}catch{}}Ee("#themeButton").onclick=()=>Fu(le.theme==="dark"?"light":"dark");var Ou="light";try{Ou=localStorage.getItem("bilim-atlasi-theme")||"light"}catch{}Fu(Ou);function Bu(){let{clientWidth:i,clientHeight:e}=He.canvas;Za.setSize(i,e,!1),Bt.aspect=i/e,Bt.updateProjectionMatrix()}window.addEventListener("resize",Bu);Bu();function zu(i){requestAnimationFrame(zu);let e=le.selected;qa.visible=le.view==="timeline",qa.position.x=Xa(le.year),bn.forEach((t,n)=>{let r=t.userData.person===e,s=le.view==="network"?t.userData.networkPos:t.userData.timelinePos;t.position.lerp(s,.075),t.userData.halo.position.copy(t.position);let a=t.userData.person.born<=le.year;t.scale.setScalar(r?1.5+Math.sin(i*.004)*.12:1),t.material.opacity=t.visible?r?1:le.view==="timeline"?a?.82:.24:.76:0,t.userData.halo.material.opacity=r?.48:.08,t.userData.halo.scale.setScalar(r?1.2+Math.sin(i*.003)*.2:1);let o=new D;t.getWorldPosition(o),o.project(Bt);let l=t.visible&&o.z<1&&o.z>-1;t.userData.label.hidden=!l,t.userData.label.style.left=`${(o.x*.5+.5)*He.canvas.clientWidth}px`,t.userData.label.style.top=`${(-o.y*.5+.5)*He.canvas.clientHeight-20}px`,t.userData.label.classList.toggle("focus",r||t===Dn),t.userData.label.classList.toggle("dim",le.view==="network"&&!r&&t!==Dn)}),Cl.forEach(t=>{let n=bn.find(o=>o.userData.person===t.userData.a),r=bn.find(o=>o.userData.person===t.userData.b),s=t.geometry.attributes.position.array;s[0]=n.position.x,s[1]=n.position.y,s[2]=n.position.z,s[3]=r.position.x,s[4]=r.position.y,s[5]=r.position.z,t.geometry.attributes.position.needsUpdate=!0;let a=t.userData.a===e||t.userData.b===e;t.material.opacity=le.view==="network"?a?Math.max(.18,(t.userData.score-.62)*1.5):.075:0}),Za.render(Vr,Bt)}Ka();document.querySelector(`.person-chip[data-person="${CSS.escape(le.selected.name)}"]`)?.classList.add("active");$i();zu(0);})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
