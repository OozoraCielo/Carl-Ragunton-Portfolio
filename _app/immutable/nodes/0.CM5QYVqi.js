import{s as S,d as K,e as W,n as G,f as ce,x as fe,y as me,z as de,A as pe}from"../chunks/scheduler.Bx16WTOf.js";import{S as C,i as x,e as g,s as q,c as w,a as E,d as u,f as H,o as n,g as $,h as V,y as Q,z as _e,t as he,b as ve,A as ue,u as N,v as B,w as F,n as P,l as T,x as J}from"../chunks/index.D51NyIhv.js";import{a as le,b as ge}from"../chunks/ScrollTo.CeAo8utN.js";const we=!0,Le=Object.freeze(Object.defineProperty({__proto__:null,prerender:we},Symbol.toStringTag,{value:"Module"}));function se(s,e,i){const t=s.slice();return t[4]=e[i],t}function ne(s){let e,i,t,a=s[4].word+"",c,p,m,h,b,_;return{c(){e=g("div"),i=g("a"),t=g("p"),c=he(a),m=q(),this.h()},l(l){e=w(l,"DIV",{class:!0});var o=E(e);i=w(o,"A",{href:!0});var d=E(i);t=w(d,"P",{class:!0});var f=E(t);c=ve(f,a),f.forEach(u),d.forEach(u),m=H(o),o.forEach(u),this.h()},h(){n(t,"class",p=`${s[1]>700&&s[0]>400?ae:oe}`),n(i,"href",""),n(e,"class",h=`${s[1]>700&&s[0]>400?ie:re}`)},m(l,o){$(l,e,o),V(e,i),V(i,t),V(t,c),V(e,m),b||(_=ce(ge.call(null,i,{ref:s[4].link,offset:-200})),b=!0)},p(l,o){s=l,o&3&&p!==(p=`${s[1]>700&&s[0]>400?ae:oe}`)&&n(t,"class",p),o&3&&h!==(h=`${s[1]>700&&s[0]>400?ie:re}`)&&n(e,"class",h)},d(l){l&&u(e),b=!1,_()}}}function be(s){let e,i,t,a,c,p,m,h,b,_,l;K(s[3]);let o=le(s[2]),d=[];for(let f=0;f<o.length;f+=1)d[f]=ne(se(s,o,f));return{c(){e=g("div"),i=g("div"),t=g("img"),p=q(),m=g("nav"),h=g("li");for(let f=0;f<d.length;f+=1)d[f].c();this.h()},l(f){e=w(f,"DIV",{class:!0});var I=E(e);i=w(I,"DIV",{class:!0});var v=E(i);t=w(v,"IMG",{src:!0,alt:!0,class:!0}),v.forEach(u),I.forEach(u),p=H(f),m=w(f,"NAV",{class:!0});var D=E(m);h=w(D,"LI",{class:!0});var k=E(h);for(let r=0;r<d.length;r+=1)d[r].l(k);k.forEach(u),D.forEach(u),this.h()},h(){W(t.src,a="top.png")||n(t,"src",a),n(t,"alt","a"),n(t,"class",c=`ml-auto  ${s[1]>700&&s[0]>400&&s[0]>400?"w-[700px] h-[175px]":"w-[350px] h-[90px]"}`),n(i,"class","min-w-full min-h-full fixed flex opacity-80 select-none touch-none"),n(e,"class","pointer-events-none"),n(h,"class","flex justify-center"),n(m,"class",b=`w-full h-32 z-10 fixed flex justify-end pointer-events-none  font-odibee ${s[1]>700&&s[0]>400?"pr-20 pt-8":"pr-5 pt-4"}`)},m(f,I){$(f,e,I),V(e,i),V(i,t),$(f,p,I),$(f,m,I),V(m,h);for(let v=0;v<d.length;v+=1)d[v]&&d[v].m(h,null);_||(l=Q(window,"resize",s[3]),_=!0)},p(f,[I]){if(I&3&&c!==(c=`ml-auto  ${f[1]>700&&f[0]>400&&f[0]>400?"w-[700px] h-[175px]":"w-[350px] h-[90px]"}`)&&n(t,"class",c),I&7){o=le(f[2]);let v;for(v=0;v<o.length;v+=1){const D=se(f,o,v);d[v]?d[v].p(D,I):(d[v]=ne(D),d[v].c(),d[v].m(h,null))}for(;v<d.length;v+=1)d[v].d(1);d.length=o.length}I&3&&b!==(b=`w-full h-32 z-10 fixed flex justify-end pointer-events-none  font-odibee ${f[1]>700&&f[0]>400?"pr-20 pt-8":"pr-5 pt-4"}`)&&n(m,"class",b)},i:G,o:G,d(f){f&&(u(e),u(p),u(m)),_e(d,f),_=!1,l()}}}let ie="bg-black bg-opacity-0 hover:bg-opacity-100  rounded-2xl pointer-events-auto px-3 text-2xl h-14",ae="text-white py-3",re="bg-black bg-opacity-0 hover:bg-opacity-100  rounded pointer-events-auto px-1 text-base h-8",oe="text-white py-1";function $e(s,e,i){let t,a,c=[{word:"Home",link:"top"},{word:"Skills",link:"skills"},{word:"Work",link:"work"},{word:"Publication",link:"publication"},{word:"Education",link:"education"},{word:"Projects",link:"projects"}];function p(){i(1,t=window.innerWidth),i(0,a=window.innerHeight)}return i(1,t=1e3),i(0,a=1e3),[a,t,c,p]}class ke extends C{constructor(e){super(),x(this,e,$e,be,S,{})}}function ye(s){let e,i;return{c(){e=g("img"),this.h()},l(t){e=w(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){W(e.src,i="bg.png")||n(e,"src",i),n(e,"alt","a"),n(e,"class","min-h-full min-w-full fixed")},m(t,a){$(t,e,a)},d(t){t&&u(e)}}}function Ie(s){let e,i;return{c(){e=g("img"),this.h()},l(t){e=w(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){W(e.src,i="bg2.png")||n(e,"src",i),n(e,"alt","a"),n(e,"class","min-h-full min-w-full fixed")},m(t,a){$(t,e,a)},d(t){t&&u(e)}}}function Ee(s){let e,i="",t,a,c,p,m,h,b,_,l,o,d,f,I;K(s[2]);function v(r,y){return r[0]>r[1]?Ie:ye}let D=v(s),k=D(s);return{c(){e=g("div"),e.innerHTML=i,t=q(),a=g("div"),k.c(),c=q(),p=g("div"),h=q(),b=g("div"),l=q(),o=g("div"),this.h()},l(r){e=w(r,"DIV",{class:!0,"data-svelte-h":!0}),ue(e)!=="svelte-rmyv8b"&&(e.innerHTML=i),t=H(r),a=w(r,"DIV",{});var y=E(a);k.l(y),y.forEach(u),c=H(r),p=w(r,"DIV",{class:!0}),E(p).forEach(u),h=H(r),b=w(r,"DIV",{class:!0}),E(b).forEach(u),l=H(r),o=w(r,"DIV",{class:!0}),E(o).forEach(u),this.h()},h(){n(e,"class","min-h-full min-w-full fixed  flex justify-end bg-blue_bg"),n(p,"class",m=`fixed aspect-square bg-black bottom-0 -mb-[20%] -ml-[20%] animate-spin6 opacity-30 pointer-events-none select-none touch-none ${s[1]>s[0]?"w-[50%]":"h-[50%] -ml-[30%]"}`),n(b,"class",_=`fixed aspect-square bg-black bottom-0 -mb-[20%] -ml-[20%] animate-spin5 opacity-50 pointer-events-none select-none touch-none ${s[1]>s[0]?"w-[40%]":"h-[40%] -ml-[30%]"}`),n(o,"class",d=`fixed aspect-square bg-black right-0 -mr-[20%] my-auto animate-spin4 opacity-20 pointer-events-none select-none touch-none ${s[1]>s[0]?"w-[40%]":"h-[40%] -ml-[30%]"}`)},m(r,y){$(r,e,y),$(r,t,y),$(r,a,y),k.m(a,null),$(r,c,y),$(r,p,y),$(r,h,y),$(r,b,y),$(r,l,y),$(r,o,y),f||(I=Q(window,"resize",s[2]),f=!0)},p(r,[y]){D!==(D=v(r))&&(k.d(1),k=D(r),k&&(k.c(),k.m(a,null))),y&3&&m!==(m=`fixed aspect-square bg-black bottom-0 -mb-[20%] -ml-[20%] animate-spin6 opacity-30 pointer-events-none select-none touch-none ${r[1]>r[0]?"w-[50%]":"h-[50%] -ml-[30%]"}`)&&n(p,"class",m),y&3&&_!==(_=`fixed aspect-square bg-black bottom-0 -mb-[20%] -ml-[20%] animate-spin5 opacity-50 pointer-events-none select-none touch-none ${r[1]>r[0]?"w-[40%]":"h-[40%] -ml-[30%]"}`)&&n(b,"class",_),y&3&&d!==(d=`fixed aspect-square bg-black right-0 -mr-[20%] my-auto animate-spin4 opacity-20 pointer-events-none select-none touch-none ${r[1]>r[0]?"w-[40%]":"h-[40%] -ml-[30%]"}`)&&n(o,"class",d)},i:G,o:G,d(r){r&&(u(e),u(t),u(a),u(c),u(p),u(h),u(b),u(l),u(o)),k.d(),f=!1,I()}}}function Ve(s,e,i){let t,a;function c(){i(1,t=window.innerWidth),i(0,a=window.innerHeight)}return i(1,t=1e3),i(0,a=1e3),[a,t,c]}class De extends C{constructor(e){super(),x(this,e,Ve,Ee,S,{})}}function ze(s){let e,i='<div class="min-h-full min-w-full fixed"><img src="top_left.png" alt="a" class="mt-auto w-[20%]"/></div> <div class="min-h-full min-w-full fixed flex justify-end"><img src="right.png" alt="a" class="w-[15%] min-h-[50%] -mt-44"/></div>',t,a,c,p,m,h,b,_,l,o,d,f,I,v,D,k,r,y,L,O,R;return K(s[2]),{c(){e=g("div"),e.innerHTML=i,t=q(),a=g("div"),c=g("div"),p=g("a"),m=g("img"),_=q(),l=g("div"),o=g("a"),d=g("img"),v=q(),D=g("div"),k=g("a"),r=g("img"),this.h()},l(j){e=w(j,"DIV",{class:!0,"data-svelte-h":!0}),ue(e)!=="svelte-r7jsqc"&&(e.innerHTML=i),t=H(j),a=w(j,"DIV",{class:!0});var z=E(a);c=w(z,"DIV",{class:!0});var U=E(c);p=w(U,"A",{href:!0,class:!0});var X=E(p);m=w(X,"IMG",{src:!0,alt:!0,class:!0}),X.forEach(u),U.forEach(u),_=H(z),l=w(z,"DIV",{class:!0});var Y=E(l);o=w(Y,"A",{href:!0,class:!0});var Z=E(o);d=w(Z,"IMG",{src:!0,alt:!0,class:!0}),Z.forEach(u),Y.forEach(u),v=H(z),D=w(z,"DIV",{class:!0});var ee=E(D);k=w(ee,"A",{href:!0,class:!0});var te=E(k);r=w(te,"IMG",{src:!0,alt:!0,class:!0}),te.forEach(u),ee.forEach(u),z.forEach(u),this.h()},h(){n(e,"class"," min-w-full pointer-events-none select-none touch-none"),W(m.src,h="mail.png")||n(m,"src",h),n(m,"alt","a"),n(m,"class",b=`${s[1]>700?M:A}`),n(p,"href","mailto:raguntoncarl@gmail.com"),n(p,"class","pointer-events-auto"),n(c,"class","ml-auto"),W(d.src,f="linkedin_logo.png")||n(d,"src",f),n(d,"alt","a"),n(d,"class",I=`${s[1]>700?M:A}`),n(o,"href","https://www.linkedin.com/in/cdragunton/"),n(o,"class","pointer-events-auto"),n(l,"class","ml-auto"),W(r.src,y="github_logo.png")||n(r,"src",y),n(r,"alt","a"),n(r,"class",L=`${s[1]>700?M:A}`),n(k,"href","https://github.com/OozoraCielo"),n(k,"class","pointer-events-auto"),n(D,"class","ml-auto"),n(a,"class","min-w-full min-h-full flex flex-col fixed justify-end pointer-events-none ")},m(j,z){$(j,e,z),$(j,t,z),$(j,a,z),V(a,c),V(c,p),V(p,m),V(a,_),V(a,l),V(l,o),V(o,d),V(a,v),V(a,D),V(D,k),V(k,r),O||(R=Q(window,"resize",s[2]),O=!0)},p(j,[z]){z&2&&b!==(b=`${j[1]>700?M:A}`)&&n(m,"class",b),z&2&&I!==(I=`${j[1]>700?M:A}`)&&n(d,"class",I),z&2&&L!==(L=`${j[1]>700?M:A}`)&&n(r,"class",L)},i:G,o:G,d(j){j&&(u(e),u(t),u(a)),O=!1,R()}}}let M="w-10 transform transition duration-200 hover:scale-125 m-2",A="w-7 transform transition duration-200 hover:scale-125 m-1";function je(s,e,i){let t,a;function c(){i(1,t=window.innerWidth),i(0,a=window.innerHeight)}return i(1,t=1e3),i(0,a=1e3),[a,t,c]}class qe extends C{constructor(e){super(),x(this,e,je,ze,S,{})}}function He(s){let e,i,t,a,c,p,m,h;e=new De({});const b=s[1].default,_=fe(b,s,s[0],null);return c=new ke({}),m=new qe({}),{c(){N(e.$$.fragment),i=q(),t=g("div"),_&&_.c(),a=q(),N(c.$$.fragment),p=q(),N(m.$$.fragment),this.h()},l(l){B(e.$$.fragment,l),i=H(l),t=w(l,"DIV",{class:!0});var o=E(t);_&&_.l(o),o.forEach(u),a=H(l),B(c.$$.fragment,l),p=H(l),B(m.$$.fragment,l),this.h()},h(){n(t,"class","absolute")},m(l,o){F(e,l,o),$(l,i,o),$(l,t,o),_&&_.m(t,null),$(l,a,o),F(c,l,o),$(l,p,o),F(m,l,o),h=!0},p(l,[o]){_&&_.p&&(!h||o&1)&&me(_,b,l,l[0],h?pe(b,l[0],o,null):de(l[0]),null)},i(l){h||(P(e.$$.fragment,l),P(_,l),P(c.$$.fragment,l),P(m.$$.fragment,l),h=!0)},o(l){T(e.$$.fragment,l),T(_,l),T(c.$$.fragment,l),T(m.$$.fragment,l),h=!1},d(l){l&&(u(i),u(t),u(a),u(p)),J(e,l),_&&_.d(l),J(c,l),J(m,l)}}}function Me(s,e,i){let{$$slots:t={},$$scope:a}=e;return s.$$set=c=>{"$$scope"in c&&i(0,a=c.$$scope)},[a,t]}class Pe extends C{constructor(e){super(),x(this,e,Me,He,S,{})}}export{Pe as component,Le as universal};
