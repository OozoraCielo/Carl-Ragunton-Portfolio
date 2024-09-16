import{g as _i,s as Ws,d as qs,n as $t,e as G,f as qe,r as vi,h as pi}from"../chunks/scheduler.Bx16WTOf.js";import{S as Qs,i as Xs,e as t,c as s,a as r,d as i,g as ge,y as Zs,z as Ks,s as d,t as k,f as u,b as I,o as l,h as e,u as ja,v as Ga,A as gi,w as Na,n as Aa,l as Ba,x as Fa}from"../chunks/index.D51NyIhv.js";import{e as mi,s as xi,a as wl}from"../chunks/ScrollTo.CeAo8utN.js";const Qe=(o,a)=>{if(!a)throw new Error("scrollRef require a reference");const c=_i(mi);return c.push({node:o,reference:xi(a)}),{destroy(){c.length=0}}};function La(o,a,c){const p=o.slice();return p[4]=a[c],p}function Ua(o,a,c){const p=o.slice();return p[7]=a[c],p}function wi(o){let a,c,p,_;return{c(){a=t("div"),c=t("img"),this.h()},l(h){a=s(h,"DIV",{class:!0});var n=r(a);c=s(n,"IMG",{src:!0,alt:!0,class:!0}),n.forEach(i),this.h()},h(){G(c.src,p=o[4].logo_link)||l(c,"src",p),l(c,"alt","a"),l(c,"class","ml-5 w-32 rounded-xl drop-shadow-xl"),l(a,"class",_=`flex flex-col min-w-32  ${o[1]>700?"":"mx-auto"}`)},m(h,n){ge(h,a,n),e(a,c)},p(h,n){n&2&&_!==(_=`flex flex-col min-w-32  ${h[1]>700?"":"mx-auto"}`)&&l(a,"class",_)},d(h){h&&i(a)}}}function Oa(o){let a,c,p;return{c(){a=t("img"),this.h()},l(_){a=s(_,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){G(a.src,c=o[7].link)||l(a,"src",c),l(a,"alt","a"),l(a,"class",p=`drop-shadow-xl mx-auto ${o[1]>700?o[7].tailwind_l:o[7].tailwind_s}`)},m(_,h){ge(_,a,h)},p(_,h){h&2&&p!==(p=`drop-shadow-xl mx-auto ${_[1]>700?_[7].tailwind_l:_[7].tailwind_s}`)&&l(a,"class",p)},d(_){_&&i(a)}}}function Wa(o){let a,c,p,_,h,n,v,g=o[4].name+"",x,V,P,$,le=o[4].date+"",me,te,De,J,N,X,ye=o[4].details+"",xe,se,we,ae,A,Z,Ve,F,T,R,j=o[4].logo_link!=""&&wi(o),K=wl(o[4].pics),y=[];for(let w=0;w<K.length;w+=1)y[w]=Oa(Ua(o,K,w));return{c(){a=t("div"),c=t("div"),p=d(),_=t("div"),j&&j.c(),h=d(),n=t("div"),v=t("h2"),x=k(g),P=d(),$=t("h2"),me=k(le),De=d(),J=t("div"),N=d(),X=t("h2"),xe=k(ye),ae=d(),A=t("div");for(let w=0;w<y.length;w+=1)y[w].c();Ve=d(),F=t("div"),T=d(),R=t("div"),this.h()},l(w){a=s(w,"DIV",{class:!0});var E=r(a);c=s(E,"DIV",{class:!0}),r(c).forEach(i),p=u(E),_=s(E,"DIV",{class:!0});var D=r(_);j&&j.l(D),h=u(D),n=s(D,"DIV",{});var C=r(n);v=s(C,"H2",{class:!0});var Ze=r(v);x=I(Ze,g),Ze.forEach(i),P=u(C),$=s(C,"H2",{class:!0});var B=r($);me=I(B,le),B.forEach(i),De=u(C),J=s(C,"DIV",{class:!0}),r(J).forEach(i),N=u(C),X=s(C,"H2",{class:!0});var Y=r(X);xe=I(Y,ye),Y.forEach(i),C.forEach(i),D.forEach(i),ae=u(E),A=s(E,"DIV",{class:!0});var bl=r(A);for(let Se=0;Se<y.length;Se+=1)y[Se].l(bl);bl.forEach(i),Ve=u(E),F=s(E,"DIV",{class:!0}),r(F).forEach(i),E.forEach(i),T=u(w),R=s(w,"DIV",{class:!0}),r(R).forEach(i),this.h()},h(){l(c,"class",qa),l(v,"class",V=`${o[1]>700?Qa:Xa}`),l($,"class",te=`${o[1]>700?Za:Ka}`),l(J,"class",Ii),l(X,"class",se=`${o[1]>700?Ya:ei}`),l(_,"class",we=`${o[1]>700?"flex flex-row":"flex flex-col"}`),l(A,"class",Z=`mt-5 ${o[1]>700?"flex flex-row":"flex flex-col"}`),l(F,"class",qa),l(a,"class",ki),l(R,"class",Ei)},m(w,E){ge(w,a,E),e(a,c),e(a,p),e(a,_),j&&j.m(_,null),e(_,h),e(_,n),e(n,v),e(v,x),e(n,P),e(n,$),e($,me),e(n,De),e(n,J),e(n,N),e(n,X),e(X,xe),e(a,ae),e(a,A);for(let D=0;D<y.length;D+=1)y[D]&&y[D].m(A,null);e(a,Ve),e(a,F),ge(w,T,E),ge(w,R,E)},p(w,E){if(w[4].logo_link!=""&&j.p(w,E),E&2&&V!==(V=`${w[1]>700?Qa:Xa}`)&&l(v,"class",V),E&2&&te!==(te=`${w[1]>700?Za:Ka}`)&&l($,"class",te),E&2&&se!==(se=`${w[1]>700?Ya:ei}`)&&l(X,"class",se),E&2&&we!==(we=`${w[1]>700?"flex flex-row":"flex flex-col"}`)&&l(_,"class",we),E&6){K=wl(w[4].pics);let D;for(D=0;D<K.length;D+=1){const C=Ua(w,K,D);y[D]?y[D].p(C,E):(y[D]=Oa(C),y[D].c(),y[D].m(A,null))}for(;D<y.length;D+=1)y[D].d(1);y.length=K.length}E&2&&Z!==(Z=`mt-5 ${w[1]>700?"flex flex-row":"flex flex-col"}`)&&l(A,"class",Z)},d(w){w&&(i(a),i(T),i(R)),j&&j.d(),Ks(y,w)}}}function bi(o){let a,c,p;qs(o[3]);let _=wl(o[2]),h=[];for(let n=0;n<_.length;n+=1)h[n]=Wa(La(o,_,n));return{c(){a=t("project");for(let n=0;n<h.length;n+=1)h[n].c()},l(n){a=s(n,"PROJECT",{});var v=r(a);for(let g=0;g<h.length;g+=1)h[g].l(v);v.forEach(i)},m(n,v){ge(n,a,v);for(let g=0;g<h.length;g+=1)h[g]&&h[g].m(a,null);c||(p=Zs(window,"resize",o[3]),c=!0)},p(n,[v]){if(v&6){_=wl(n[2]);let g;for(g=0;g<_.length;g+=1){const x=La(n,_,g);h[g]?h[g].p(x,v):(h[g]=Wa(x),h[g].c(),h[g].m(a,null))}for(;g<h.length;g+=1)h[g].d(1);h.length=_.length}},i:$t,o:$t,d(n){n&&i(a),Ks(h,n),c=!1,p()}}}let Ei="pt-16",qa="pt-10",Qa="px-10 text-3xl text-gray-200 font-electrolize my-auto",Xa="px-10 pt-10 text-xl text-gray-200 font-electrolize my-auto",Za="pt-2 px-10 text-xl text-gray-200 font-electrolize",Ka="pt-2 px-10 text-base text-gray-200 font-electrolize",Ya="pt-2 px-10 text-xl text-gray-200 font-normal",ei="pt-2 px-10 text-base text-gray-200 font-normal",ki="bg-black rounded-2xl  border border-light_blue_area bg-opacity-70",Ii="mt-2 mx-10 border-dashed border-light_blue_area border";function $i(o,a,c){let p,_,h=[{name:"JeePS: Realtime Public Transportation Tracking System",logo_link:"JeePS2.png",date:"September 2023 - June 2024",details:"Published a paper about creating a web application and mobile application that improves the overall situation of public informal transportation in the Philippines. The system addresses problems of passengers regarding safety, driver’s behavior, information materials and service adequacy by providing several information using Flutter and Firebase.",pics:[{link:"JeePS_jeep_selected.png",tailwind_l:"w-[40%] rounded-xl",tailwind_s:"w-[90%] rounded"},{link:"JeePS_feedback.png",tailwind_l:"w-[40%] rounded-xlw-[90%] rounded mt-5",tailwind_s:"w-[90%] rounded mt-5"},{link:"JeePS_driver_app.png",tailwind_l:"w-[10%] rounded-xl",tailwind_s:"w-[30%] rounded mt-5"}]},{name:"MeralCOST: Analysis on Meralco Typical Consumption Price",logo_link:"meralcost.png",date:"March 2024 - June 2024",details:"Used Data Science to analyze and interpret data from past electric consumption costs of Meralco to determine how its price has changed over the years and what factors cause the price to fluctuate.",pics:[{link:"meralcost_homepage.png",tailwind_l:"w-[50%] rounded-xl",tailwind_s:"w-[90%] rounded"},{link:"meralcost_plot1.png",tailwind_l:"w-[40%] rounded-xl",tailwind_s:"w-[90%] rounded mt-5"}]},{name:"Alco-OL",logo_link:"alco_ol.png",date:"May 2023 - June 2023",details:"Developed a website that shows current level of content of sanitation dispensers using esp32 as well as their battery status through the internet using Svelte and Firebase.",pics:[{link:"alco_ol_homepage .png",tailwind_l:"w-[45%] rounded-xl",tailwind_s:"w-[90%] rounded"},{link:"alco_ol_map.png",tailwind_l:"w-[45%] rounded-xl",tailwind_s:"w-[90%] rounded mt-5"}]},{name:"Predicting Highest and lowest Region of game Sales using Decision Tree Classifier and other Models (AI)",logo_link:"",date:"April 2024 - June 2024",details:"Used Decision Tree Classifier, Multilayer Perception Classifier, and Hist Gradient Bossting Classifier to predict which region has the highest and lowest scale for a video game.",pics:[{link:"ai_1.png",tailwind_l:"w-[45%] rounded-xl",tailwind_s:"w-[90%] rounded mt-5"},{link:"ai_2.png",tailwind_l:"w-[45%] rounded-xl",tailwind_s:"w-[90%] rounded mt-5"}]},{name:"JeePS (old version)",logo_link:"JeePS_old.png",date:"September 2022 - June 2023",details:"Developed a website that shows current level of content of sanitation dispensers using esp32 as well as their battery status through the internet using Svelte and Firebase",pics:[{link:"JeePS_old_homepage.png",tailwind_l:"w-[45%] rounded-xl",tailwind_s:"w-[90%] rounded mt-5"},{link:"JeePS_old_login.png",tailwind_l:"w-[45%] rounded-xl",tailwind_s:"w-[90%] rounded mt-5"}]}];function n(){c(1,p=window.innerWidth),c(0,_=window.innerHeight)}return c(1,p=1e3),c(0,_=1e3),[_,p,h,n]}class Di extends Qs{constructor(a){super(),Xs(this,a,$i,bi,Ws,{})}}function li(o,a,c){const p=o.slice();return p[4]=a[c],p}function ti(o){let a,c,p,_,h,n,v=o[4].name+"",g,x,V;return{c(){a=t("div"),c=t("img"),h=d(),n=t("h2"),g=k(v),V=d(),this.h()},l(P){a=s(P,"DIV",{class:!0});var $=r(a);c=s($,"IMG",{src:!0,alt:!0,class:!0}),h=u($),n=s($,"H2",{class:!0});var le=r(n);g=I(le,v),le.forEach(i),V=u($),$.forEach(i),this.h()},h(){G(c.src,p=o[4].link)||l(c,"src",p),l(c,"alt","a"),l(c,"class",_=`${o[1]>700?si:ii}`),l(n,"class",x=`${o[1]>700?ai:ri}`),l(a,"class",Vi)},m(P,$){ge(P,a,$),e(a,c),e(a,h),e(a,n),e(n,g),e(a,V)},p(P,$){$&2&&_!==(_=`${P[1]>700?si:ii}`)&&l(c,"class",_),$&2&&x!==(x=`${P[1]>700?ai:ri}`)&&l(n,"class",x)},d(P){P&&i(a)}}}function yi(o){let a,c,p,_;qs(o[3]);let h=wl(o[2]),n=[];for(let v=0;v<h.length;v+=1)n[v]=ti(li(o,h,v));return{c(){a=t("skills"),c=t("div");for(let v=0;v<n.length;v+=1)n[v].c();this.h()},l(v){a=s(v,"SKILLS",{});var g=r(a);c=s(g,"DIV",{class:!0});var x=r(c);for(let V=0;V<n.length;V+=1)n[V].l(x);x.forEach(i),g.forEach(i),this.h()},h(){l(c,"class","flex flex-row flex-wrap mx-auto w-[75%]")},m(v,g){ge(v,a,g),e(a,c);for(let x=0;x<n.length;x+=1)n[x]&&n[x].m(c,null);p||(_=Zs(window,"resize",o[3]),p=!0)},p(v,[g]){if(g&6){h=wl(v[2]);let x;for(x=0;x<h.length;x+=1){const V=li(v,h,x);n[x]?n[x].p(V,g):(n[x]=ti(V),n[x].c(),n[x].m(c,null))}for(;x<n.length;x+=1)n[x].d(1);n.length=h.length}},i:$t,o:$t,d(v){v&&i(a),Ks(n,v),p=!1,_()}}}let Vi="flex flex-col mx-auto",si="drop-shadow-xl mt-10 w-12 mx-8 my-auto",ai="text-2xl text-gray-200 font-odibee mx-auto mt-auto",ii="drop-shadow-xl mt-10 w-10 mx-4 my-auto",ri="text-xl text-gray-200 font-odibee mx-auto mt-auto";function Si(o,a,c){let p,_,h=[{name:"Python",link:"skills/python_logo.png"},{name:"C",link:"skills/c_logo.png"},{name:"C#",link:"skills/csharp_logo.png"},{name:"Typescript",link:"skills/typescript_logo.png"},{name:"HTML",link:"skills/html_logo.png"},{name:"CSS",link:"skills/css_logo.png"},{name:"Javascript",link:"skills/javascript_logo.png"},{name:"Linux",link:"skills/linux_logo.png"},{name:"Figma",link:"skills/figma_logo.png"},{name:"Svelte",link:"skills/svelte_logo.png"},{name:"Tailwind CSS",link:"skills/tailwind_logo.png"},{name:"Matlab",link:"skills/matlab_logo.png"},{name:"Flutter",link:"skills/flutter_logo.png"},{name:"Firebase",link:"skills/firebase_logo.png"},{name:"MySQL",link:"skills/mysql_logo.png"},{name:"Godot",link:"skills/godot_logo.png"},{name:"Unity",link:"skills/unity_logo.png"},{name:"Github",link:"skills/github_logo.png"},{name:"Git",link:"skills/git_logo.png"}];function n(){c(1,p=window.innerWidth),c(0,_=window.innerHeight)}return c(1,p=1e3),c(0,_=1e3),[_,p,h,n]}class Ci extends Qs{constructor(a){super(),Xs(this,a,Si,yi,Ws,{})}}function Hi(o){let a,c,p,_,h,n,v,g,x,V,P,$,le,me,te,De,J,N,X,ye,xe,se,we,ae,A,Z,Ve,F,T,R,j,K,y,w,E,D,C,Ze,B,Y,bl,Se,Ke,M,El,Dt,Ye,yt,Vt,kl,St,el,ie,re,Ce,Ys,Ct,be,ea,Ll,Ul,Ht,L,He,Pt,Ol,Tt,oe,Mt,zt,Jt,Wl,Rt,Il,jt,Pe,Gt,ql,Ql,Nt,$l,At,Te,la,Bt,Dl,Ft,yl,U,ll,Lt,Ut,Vl,Ot,tl,ne,Me,ze,ta,Xl,Wt,O,Je,qt,Zl,Qt,ce,Xt,Zt,Kt,Kl,Yt,Sl,es,Re,ls,Yl,et,ts,Cl,ss,de,je,sa,as,sl,S,Hl,is,al,rs,os,Pl,ns,il,ue,Ge,Ne,aa,lt,cs,W,Ae,ds,tt,us,fe,fs,hs,_s,st,vs,Tl,ps,he,gs,ms,xs,at,it,ws,Ml,bs,rl,_e,Be,Fe,ia,rt,Es,q,Le,ks,ot,Is,ve,$s,Ds,ys,nt,Vs,zl,Ss,pe,Cs,Hs,Ps,ct,dt,Ts,Jl,Ms,Ue,ra,zs,Rl,Js,jl,Q,ol,Rs,js,Gl,Gs,Oe,Ns,Nl,As,Al,Bs,Bl,nl,We,oa=`<img src="barong grad pic.png" alt="a" class="w-[20%] min-w-64 mx-auto"/> <h2 class="text-xl text-gray-200  font-electrolize text-center">Carl David Ragunton<br/>
                    raguntoncarl@gmail.com</h2>`,Fs,Fl,b,Ls,na;return qs(o[2]),E=new Ci({}),Oe=new Di({}),{c(){a=t("body"),c=t("section"),p=d(),_=t("div"),h=t("section"),n=t("div"),v=t("div"),g=t("h2"),x=k("CD Ragunton"),P=d(),$=t("h2"),le=k("Frontend/UI/UX Developer, Software Engineer"),De=d(),J=t("div"),N=t("img"),we=d(),ae=t("div"),A=d(),Z=t("div"),Ve=d(),F=t("div"),T=t("section"),R=t("h2"),j=k("Skills"),K=d(),y=t("div"),w=d(),ja(E.$$.fragment),D=d(),C=t("div"),Ze=d(),B=t("div"),Y=t("img"),Se=d(),Ke=t("div"),M=t("section"),El=t("div"),Dt=d(),Ye=t("h2"),yt=k("Work Experience"),Vt=d(),kl=t("div"),St=d(),el=t("div"),ie=t("div"),re=t("div"),Ce=t("img"),Ct=d(),be=t("img"),Ht=d(),L=t("div"),He=t("h2"),Pt=k("UP National Center for Transportation Studies: Intelligent Transportations Systems Laboratory"),Tt=d(),oe=t("h2"),Mt=k("July 2023 – August 2023 "),zt=t("br"),Jt=k(`
                                Quezon City, NCR`),Rt=d(),Il=t("div"),jt=d(),Pe=t("h2"),Gt=k("Worked as an intern and developed the frontend of CREATE: CIVIR, a project that replicates a real-life car-related accident, using Unity."),Nt=d(),$l=t("div"),At=d(),Te=t("img"),Bt=d(),Dl=t("div"),Ft=d(),yl=t("div"),U=t("section"),ll=t("h2"),Lt=k("Publication"),Ut=d(),Vl=t("div"),Ot=d(),tl=t("div"),ne=t("div"),Me=t("div"),ze=t("img"),Wt=d(),O=t("div"),Je=t("h2"),qt=k("JeePS: Designing a Realtime Public Transportation Tracking System"),Qt=d(),ce=t("h2"),Xt=k("NIDS 2024 "),Zt=t("br"),Kt=k(`
                            Carl Ragunton, Zedec Pacaldo, and Jozelle Adawe`),Yt=d(),Sl=t("div"),es=d(),Re=t("h2"),ls=k("Published a paper about creating a web application and mobile application that improves the overall situation of public informal transportation in the Philippines. The system addresses problems of passengers regarding safety, driver’s behavior, information materials and service adequacy by providing several information using Flutter and Firebase."),ts=d(),Cl=t("div"),ss=d(),de=t("div"),je=t("img"),as=d(),sl=t("div"),S=t("section"),Hl=t("div"),is=d(),al=t("h2"),rs=k("Education"),os=d(),Pl=t("div"),ns=d(),il=t("div"),ue=t("div"),Ge=t("div"),Ne=t("img"),cs=d(),W=t("div"),Ae=t("h2"),ds=k("University of the Philippines Diliman"),us=d(),fe=t("h2"),fs=k("September 2020 – July 2024 "),hs=t("br"),_s=k(`
                                Quezon City, NCR`),vs=d(),Tl=t("div"),ps=d(),he=t("h2"),gs=k("Bachelor of Computer Science "),ms=t("br"),xs=k(`
                                Magna Cum Laude`),ws=d(),Ml=t("div"),bs=d(),rl=t("div"),_e=t("div"),Be=t("div"),Fe=t("img"),Es=d(),q=t("div"),Le=t("h2"),ks=k("Sacred Heart Academy of Sta. Maria (Bulacan) Inc."),Is=d(),ve=t("h2"),$s=k("June 2014 – April 2020 "),Ds=t("br"),ys=k(`
                                Santa Maria, Bulacan`),Vs=d(),zl=t("div"),Ss=d(),pe=t("h2"),Cs=k("STEM Strand "),Hs=t("br"),Ps=k(`
                                Highest Honor`),Ts=d(),Jl=t("div"),Ms=d(),Ue=t("img"),zs=d(),Rl=t("div"),Js=d(),jl=t("div"),Q=t("section"),ol=t("h2"),Rs=k("Projects"),js=d(),Gl=t("div"),Gs=d(),ja(Oe.$$.fragment),Ns=d(),Nl=t("div"),As=d(),Al=t("div"),Bs=d(),Bl=t("div"),nl=t("section"),We=t("div"),We.innerHTML=oa,Fs=d(),Fl=t("div"),this.h()},l(m){a=s(m,"BODY",{class:!0});var f=r(a);c=s(f,"SECTION",{class:!0}),r(c).forEach(i),p=u(f),_=s(f,"DIV",{});var ca=r(_);h=s(ca,"SECTION",{class:!0});var ut=r(h);n=s(ut,"DIV",{class:!0});var ft=r(n);v=s(ft,"DIV",{class:!0});var ht=r(v);g=s(ht,"H2",{class:!0});var da=r(g);x=I(da,"CD Ragunton"),da.forEach(i),P=u(ht),$=s(ht,"H2",{class:!0});var ua=r($);le=I(ua,"Frontend/UI/UX Developer, Software Engineer"),ua.forEach(i),ht.forEach(i),De=u(ft),J=s(ft,"DIV",{class:!0});var fa=r(J);N=s(fa,"IMG",{src:!0,alt:!0,class:!0}),fa.forEach(i),ft.forEach(i),we=u(ut),ae=s(ut,"DIV",{class:!0}),r(ae).forEach(i),ut.forEach(i),ca.forEach(i),A=u(f),Z=s(f,"DIV",{class:!0}),r(Z).forEach(i),Ve=u(f),F=s(f,"DIV",{});var ha=r(F);T=s(ha,"SECTION",{class:!0});var cl=r(T);R=s(cl,"H2",{class:!0});var _a=r(R);j=I(_a,"Skills"),_a.forEach(i),K=u(cl),y=s(cl,"DIV",{class:!0}),r(y).forEach(i),w=u(cl),Ga(E.$$.fragment,cl),cl.forEach(i),ha.forEach(i),D=u(f),C=s(f,"DIV",{class:!0}),r(C).forEach(i),Ze=u(f),B=s(f,"DIV",{});var dl=r(B);Y=s(dl,"IMG",{src:!0,alt:!0,class:!0}),Se=u(dl),Ke=s(dl,"DIV",{class:!0});var va=r(Ke);M=s(va,"SECTION",{class:!0});var ee=r(M);El=s(ee,"DIV",{class:!0}),r(El).forEach(i),Dt=u(ee),Ye=s(ee,"H2",{class:!0});var pa=r(Ye);yt=I(pa,"Work Experience"),pa.forEach(i),Vt=u(ee),kl=s(ee,"DIV",{class:!0}),r(kl).forEach(i),St=u(ee),el=s(ee,"DIV",{class:!0});var ga=r(el);ie=s(ga,"DIV",{class:!0});var _t=r(ie);re=s(_t,"DIV",{class:!0});var vt=r(re);Ce=s(vt,"IMG",{src:!0,alt:!0,class:!0}),Ct=u(vt),be=s(vt,"IMG",{src:!0,alt:!0,class:!0}),vt.forEach(i),Ht=u(_t),L=s(_t,"DIV",{});var Ee=r(L);He=s(Ee,"H2",{class:!0});var ma=r(He);Pt=I(ma,"UP National Center for Transportation Studies: Intelligent Transportations Systems Laboratory"),ma.forEach(i),Tt=u(Ee),oe=s(Ee,"H2",{class:!0});var pt=r(oe);Mt=I(pt,"July 2023 – August 2023 "),zt=s(pt,"BR",{}),Jt=I(pt,`
                                Quezon City, NCR`),pt.forEach(i),Rt=u(Ee),Il=s(Ee,"DIV",{class:!0}),r(Il).forEach(i),jt=u(Ee),Pe=s(Ee,"H2",{class:!0});var xa=r(Pe);Gt=I(xa,"Worked as an intern and developed the frontend of CREATE: CIVIR, a project that replicates a real-life car-related accident, using Unity."),xa.forEach(i),Ee.forEach(i),_t.forEach(i),ga.forEach(i),Nt=u(ee),$l=s(ee,"DIV",{class:!0}),r($l).forEach(i),ee.forEach(i),va.forEach(i),At=u(dl),Te=s(dl,"IMG",{src:!0,alt:!0,class:!0}),dl.forEach(i),Bt=u(f),Dl=s(f,"DIV",{class:!0}),r(Dl).forEach(i),Ft=u(f),yl=s(f,"DIV",{});var wa=r(yl);U=s(wa,"SECTION",{class:!0});var ul=r(U);ll=s(ul,"H2",{class:!0});var ba=r(ll);Lt=I(ba,"Publication"),ba.forEach(i),Ut=u(ul),Vl=s(ul,"DIV",{class:!0}),r(Vl).forEach(i),Ot=u(ul),tl=s(ul,"DIV",{class:!0});var Ea=r(tl);ne=s(Ea,"DIV",{class:!0});var gt=r(ne);Me=s(gt,"DIV",{class:!0});var ka=r(Me);ze=s(ka,"IMG",{src:!0,alt:!0,class:!0}),ka.forEach(i),Wt=u(gt),O=s(gt,"DIV",{});var ke=r(O);Je=s(ke,"H2",{class:!0});var Ia=r(Je);qt=I(Ia,"JeePS: Designing a Realtime Public Transportation Tracking System"),Ia.forEach(i),Qt=u(ke),ce=s(ke,"H2",{class:!0});var mt=r(ce);Xt=I(mt,"NIDS 2024 "),Zt=s(mt,"BR",{}),Kt=I(mt,`
                            Carl Ragunton, Zedec Pacaldo, and Jozelle Adawe`),mt.forEach(i),Yt=u(ke),Sl=s(ke,"DIV",{class:!0}),r(Sl).forEach(i),es=u(ke),Re=s(ke,"H2",{class:!0});var $a=r(Re);ls=I($a,"Published a paper about creating a web application and mobile application that improves the overall situation of public informal transportation in the Philippines. The system addresses problems of passengers regarding safety, driver’s behavior, information materials and service adequacy by providing several information using Flutter and Firebase."),$a.forEach(i),ke.forEach(i),gt.forEach(i),Ea.forEach(i),ul.forEach(i),wa.forEach(i),ts=u(f),Cl=s(f,"DIV",{class:!0}),r(Cl).forEach(i),ss=u(f),de=s(f,"DIV",{});var fl=r(de);je=s(fl,"IMG",{src:!0,alt:!0,class:!0}),as=u(fl),sl=s(fl,"DIV",{class:!0});var Da=r(sl);S=s(Da,"SECTION",{class:!0});var z=r(S);Hl=s(z,"DIV",{class:!0}),r(Hl).forEach(i),is=u(z),al=s(z,"H2",{class:!0});var ya=r(al);rs=I(ya,"Education"),ya.forEach(i),os=u(z),Pl=s(z,"DIV",{class:!0}),r(Pl).forEach(i),ns=u(z),il=s(z,"DIV",{class:!0});var Va=r(il);ue=s(Va,"DIV",{class:!0});var xt=r(ue);Ge=s(xt,"DIV",{class:!0});var Sa=r(Ge);Ne=s(Sa,"IMG",{src:!0,alt:!0,class:!0}),Sa.forEach(i),cs=u(xt),W=s(xt,"DIV",{});var Ie=r(W);Ae=s(Ie,"H2",{class:!0});var Ca=r(Ae);ds=I(Ca,"University of the Philippines Diliman"),Ca.forEach(i),us=u(Ie),fe=s(Ie,"H2",{class:!0});var wt=r(fe);fs=I(wt,"September 2020 – July 2024 "),hs=s(wt,"BR",{}),_s=I(wt,`
                                Quezon City, NCR`),wt.forEach(i),vs=u(Ie),Tl=s(Ie,"DIV",{class:!0}),r(Tl).forEach(i),ps=u(Ie),he=s(Ie,"H2",{class:!0});var bt=r(he);gs=I(bt,"Bachelor of Computer Science "),ms=s(bt,"BR",{}),xs=I(bt,`
                                Magna Cum Laude`),bt.forEach(i),Ie.forEach(i),xt.forEach(i),Va.forEach(i),ws=u(z),Ml=s(z,"DIV",{class:!0}),r(Ml).forEach(i),bs=u(z),rl=s(z,"DIV",{class:!0});var Ha=r(rl);_e=s(Ha,"DIV",{class:!0});var Et=r(_e);Be=s(Et,"DIV",{class:!0});var Pa=r(Be);Fe=s(Pa,"IMG",{src:!0,alt:!0,class:!0}),Pa.forEach(i),Es=u(Et),q=s(Et,"DIV",{});var $e=r(q);Le=s($e,"H2",{class:!0});var Ta=r(Le);ks=I(Ta,"Sacred Heart Academy of Sta. Maria (Bulacan) Inc."),Ta.forEach(i),Is=u($e),ve=s($e,"H2",{class:!0});var kt=r(ve);$s=I(kt,"June 2014 – April 2020 "),Ds=s(kt,"BR",{}),ys=I(kt,`
                                Santa Maria, Bulacan`),kt.forEach(i),Vs=u($e),zl=s($e,"DIV",{class:!0}),r(zl).forEach(i),Ss=u($e),pe=s($e,"H2",{class:!0});var It=r(pe);Cs=I(It,"STEM Strand "),Hs=s(It,"BR",{}),Ps=I(It,`
                                Highest Honor`),It.forEach(i),$e.forEach(i),Et.forEach(i),Ha.forEach(i),Ts=u(z),Jl=s(z,"DIV",{class:!0}),r(Jl).forEach(i),z.forEach(i),Da.forEach(i),Ms=u(fl),Ue=s(fl,"IMG",{src:!0,alt:!0,class:!0}),fl.forEach(i),zs=u(f),Rl=s(f,"DIV",{class:!0}),r(Rl).forEach(i),Js=u(f),jl=s(f,"DIV",{});var Ma=r(jl);Q=s(Ma,"SECTION",{class:!0});var hl=r(Q);ol=s(hl,"H2",{class:!0});var za=r(ol);Rs=I(za,"Projects"),za.forEach(i),js=u(hl),Gl=s(hl,"DIV",{class:!0}),r(Gl).forEach(i),Gs=u(hl),Ga(Oe.$$.fragment,hl),hl.forEach(i),Ma.forEach(i),Ns=u(f),Nl=s(f,"DIV",{class:!0}),r(Nl).forEach(i),As=u(f),Al=s(f,"DIV",{class:!0}),r(Al).forEach(i),Bs=u(f),Bl=s(f,"DIV",{});var Ja=r(Bl);nl=s(Ja,"SECTION",{class:!0});var Ra=r(nl);We=s(Ra,"DIV",{class:!0,"data-svelte-h":!0}),gi(We)!=="svelte-12aqf0h"&&(We.innerHTML=oa),Ra.forEach(i),Ja.forEach(i),Fs=u(f),Fl=s(f,"DIV",{class:!0}),r(Fl).forEach(i),f.forEach(i),this.h()},h(){l(c,"class","h-full"),l(g,"class",V=`text-gray-200 font-odibee flex justify-center text-center ${o[1]>800?"text-7xl":"text-5xl"}`),l($,"class",me=`text-gray-400 flex justify-center font-electrolize text-center ${o[1]>800?"text-2xl pt-4":"text-base pt-2"}`),l(v,"class",te=`${o[1]>800?"ml-auto":"mx-auto"}`),G(N.src,X="chibi_hello.gif")||l(N,"src",X),l(N,"alt","a"),l(N,"class",ye=`${o[1]>800?"h-[300px]":"h-[230px]"}  pointer-events-none select-none touch-none`),l(J,"class",xe=`${o[1]>800?"-mt-[150px] mr-auto":"mx-auto"} `),l(n,"class",se=`flex ${o[1]>800?"py-[30%] flex-row":"py-[45%] flex-col"}`),l(ae,"class",H),l(h,"class",Xe),l(Z,"class","pt-56"),l(R,"class",Us),l(y,"class",Pi),l(T,"class",Xe),l(C,"class",H),G(Y.src,bl="area_top.png")||l(Y,"src",bl),l(Y,"alt","a"),l(Y,"class","w-screen pointer-events-none select-none touch-none opacity-70"),l(El,"class",H),l(Ye,"class",oi),l(kl,"class",H),G(Ce.src,Ys="itslab.png")||l(Ce,"src",Ys),l(Ce,"alt","a"),l(Ce,"class","w-24 h-24 rounded-xl drop-shadow-xl"),G(be.src,ea="ncts.png")||l(be,"src",ea),l(be,"alt","a"),l(be,"class",Ll=`w-24 h-24 rounded-xl drop-shadow-xl ${o[1]>700?"":"ml-5"}`),l(re,"class",Ul=`${o[1]>700?"flex flex-col min-w-32":"flex flex-row min-w-32 mx-auto"}`),l(He,"class",Ol=`${o[1]>700?_l:vl}`),l(oe,"class",Wl=`${o[1]>700?pl:gl}`),l(Il,"class",Os),l(Pe,"class",ql=`${o[1]>700?ml:xl}`),l(ie,"class",Ql=`${o[1]>700?"flex flex-row":"flex flex-col"}`),l(el,"class",""),l($l,"class",H),l(M,"class",Xe),l(Ke,"class","bg-light_blue_area w-screen bg-opacity-70"),G(Te.src,la="area_bottom.png")||l(Te,"src",la),l(Te,"alt","a"),l(Te,"class","w-screen pointer-events-none select-none touch-none opacity-70"),l(Dl,"class",H),l(ll,"class",Us),l(Vl,"class",H),G(ze.src,ta="jeeps.png")||l(ze,"src",ta),l(ze,"alt","a"),l(ze,"class","w-32 rounded-xl drop-shadow-xl"),l(Me,"class",Xl=`flex flex-col min-w-32  ${o[1]>700?"":"mx-auto"}`),l(Je,"class",Zl=`${o[1]>700?ni:ci}`),l(ce,"class",Kl=`${o[1]>700?di:ui}`),l(Sl,"class",Ti),l(Re,"class",Yl=`${o[1]>700?fi:hi}`),l(ne,"class",et=`${o[1]>700?"flex flex-row":"flex flex-col"}`),l(tl,"class",""),l(U,"class",Xe),l(Cl,"class",H),G(je.src,sa="area_top.png")||l(je,"src",sa),l(je,"alt","a"),l(je,"class","w-screen pointer-events-none select-none touch-none opacity-70"),l(Hl,"class",H),l(al,"class",oi),l(Pl,"class",H),G(Ne.src,aa="upd.png")||l(Ne,"src",aa),l(Ne,"alt","a"),l(Ne,"class","w-32 h-32 rounded-xl drop-shadow-xl"),l(Ge,"class",lt=`flex flex-col min-w-32  ${o[1]>700?"":"mx-auto"}`),l(Ae,"class",tt=`${o[1]>700?_l:vl}`),l(fe,"class",st=`${o[1]>700?pl:gl}`),l(Tl,"class",Os),l(he,"class",at=`${o[1]>700?ml:xl}`),l(ue,"class",it=`${o[1]>700?"flex flex-row":"flex flex-col"}`),l(il,"class",""),l(Ml,"class",H),G(Fe.src,ia="sha.png")||l(Fe,"src",ia),l(Fe,"alt","a"),l(Fe,"class","w-32 h-32 rounded-xl drop-shadow-xl"),l(Be,"class",rt=`flex flex-col min-w-32  ${o[1]>700?"":"mx-auto"}`),l(Le,"class",ot=`${o[1]>700?_l:vl}`),l(ve,"class",nt=`${o[1]>700?pl:gl}`),l(zl,"class",Os),l(pe,"class",ct=`${o[1]>700?ml:xl}`),l(_e,"class",dt=`${o[1]>700?"flex flex-row":"flex flex-col"}`),l(rl,"class",""),l(Jl,"class",H),l(S,"class",Xe),l(sl,"class","bg-light_blue_area w-screen bg-opacity-70"),G(Ue.src,ra="area_bottom.png")||l(Ue,"src",ra),l(Ue,"alt","a"),l(Ue,"class","w-screen pointer-events-none select-none touch-none opacity-70"),l(Rl,"class",H),l(ol,"class",Us),l(Gl,"class",H),l(Q,"class",Xe),l(Nl,"class",H),l(Al,"class",H),l(We,"class","flex flex-col "),l(nl,"class",Xe),l(Fl,"class",H),l(a,"class",pi("min-h-full min-w-full")+" svelte-1960g5")},m(m,f){ge(m,a,f),e(a,c),e(a,p),e(a,_),e(_,h),e(h,n),e(n,v),e(v,g),e(g,x),e(v,P),e(v,$),e($,le),e(n,De),e(n,J),e(J,N),e(h,we),e(h,ae),e(a,A),e(a,Z),e(a,Ve),e(a,F),e(F,T),e(T,R),e(R,j),e(T,K),e(T,y),e(T,w),Na(E,T,null),e(a,D),e(a,C),e(a,Ze),e(a,B),e(B,Y),e(B,Se),e(B,Ke),e(Ke,M),e(M,El),e(M,Dt),e(M,Ye),e(Ye,yt),e(M,Vt),e(M,kl),e(M,St),e(M,el),e(el,ie),e(ie,re),e(re,Ce),e(re,Ct),e(re,be),e(ie,Ht),e(ie,L),e(L,He),e(He,Pt),e(L,Tt),e(L,oe),e(oe,Mt),e(oe,zt),e(oe,Jt),e(L,Rt),e(L,Il),e(L,jt),e(L,Pe),e(Pe,Gt),e(M,Nt),e(M,$l),e(B,At),e(B,Te),e(a,Bt),e(a,Dl),e(a,Ft),e(a,yl),e(yl,U),e(U,ll),e(ll,Lt),e(U,Ut),e(U,Vl),e(U,Ot),e(U,tl),e(tl,ne),e(ne,Me),e(Me,ze),e(ne,Wt),e(ne,O),e(O,Je),e(Je,qt),e(O,Qt),e(O,ce),e(ce,Xt),e(ce,Zt),e(ce,Kt),e(O,Yt),e(O,Sl),e(O,es),e(O,Re),e(Re,ls),e(a,ts),e(a,Cl),e(a,ss),e(a,de),e(de,je),e(de,as),e(de,sl),e(sl,S),e(S,Hl),e(S,is),e(S,al),e(al,rs),e(S,os),e(S,Pl),e(S,ns),e(S,il),e(il,ue),e(ue,Ge),e(Ge,Ne),e(ue,cs),e(ue,W),e(W,Ae),e(Ae,ds),e(W,us),e(W,fe),e(fe,fs),e(fe,hs),e(fe,_s),e(W,vs),e(W,Tl),e(W,ps),e(W,he),e(he,gs),e(he,ms),e(he,xs),e(S,ws),e(S,Ml),e(S,bs),e(S,rl),e(rl,_e),e(_e,Be),e(Be,Fe),e(_e,Es),e(_e,q),e(q,Le),e(Le,ks),e(q,Is),e(q,ve),e(ve,$s),e(ve,Ds),e(ve,ys),e(q,Vs),e(q,zl),e(q,Ss),e(q,pe),e(pe,Cs),e(pe,Hs),e(pe,Ps),e(S,Ts),e(S,Jl),e(de,Ms),e(de,Ue),e(a,zs),e(a,Rl),e(a,Js),e(a,jl),e(jl,Q),e(Q,ol),e(ol,Rs),e(Q,js),e(Q,Gl),e(Q,Gs),Na(Oe,Q,null),e(a,Ns),e(a,Nl),e(a,As),e(a,Al),e(a,Bs),e(a,Bl),e(Bl,nl),e(nl,We),e(a,Fs),e(a,Fl),b=!0,Ls||(na=[Zs(window,"resize",o[2]),qe(Qe.call(null,c,"top")),qe(Qe.call(null,h,"home")),qe(Qe.call(null,T,"skills")),qe(Qe.call(null,M,"work")),qe(Qe.call(null,U,"publication")),qe(Qe.call(null,S,"education")),qe(Qe.call(null,Q,"projects"))],Ls=!0)},p(m,[f]){(!b||f&2&&V!==(V=`text-gray-200 font-odibee flex justify-center text-center ${m[1]>800?"text-7xl":"text-5xl"}`))&&l(g,"class",V),(!b||f&2&&me!==(me=`text-gray-400 flex justify-center font-electrolize text-center ${m[1]>800?"text-2xl pt-4":"text-base pt-2"}`))&&l($,"class",me),(!b||f&2&&te!==(te=`${m[1]>800?"ml-auto":"mx-auto"}`))&&l(v,"class",te),(!b||f&2&&ye!==(ye=`${m[1]>800?"h-[300px]":"h-[230px]"}  pointer-events-none select-none touch-none`))&&l(N,"class",ye),(!b||f&2&&xe!==(xe=`${m[1]>800?"-mt-[150px] mr-auto":"mx-auto"} `))&&l(J,"class",xe),(!b||f&2&&se!==(se=`flex ${m[1]>800?"py-[30%] flex-row":"py-[45%] flex-col"}`))&&l(n,"class",se),(!b||f&2&&Ll!==(Ll=`w-24 h-24 rounded-xl drop-shadow-xl ${m[1]>700?"":"ml-5"}`))&&l(be,"class",Ll),(!b||f&2&&Ul!==(Ul=`${m[1]>700?"flex flex-col min-w-32":"flex flex-row min-w-32 mx-auto"}`))&&l(re,"class",Ul),(!b||f&2&&Ol!==(Ol=`${m[1]>700?_l:vl}`))&&l(He,"class",Ol),(!b||f&2&&Wl!==(Wl=`${m[1]>700?pl:gl}`))&&l(oe,"class",Wl),(!b||f&2&&ql!==(ql=`${m[1]>700?ml:xl}`))&&l(Pe,"class",ql),(!b||f&2&&Ql!==(Ql=`${m[1]>700?"flex flex-row":"flex flex-col"}`))&&l(ie,"class",Ql),(!b||f&2&&Xl!==(Xl=`flex flex-col min-w-32  ${m[1]>700?"":"mx-auto"}`))&&l(Me,"class",Xl),(!b||f&2&&Zl!==(Zl=`${m[1]>700?ni:ci}`))&&l(Je,"class",Zl),(!b||f&2&&Kl!==(Kl=`${m[1]>700?di:ui}`))&&l(ce,"class",Kl),(!b||f&2&&Yl!==(Yl=`${m[1]>700?fi:hi}`))&&l(Re,"class",Yl),(!b||f&2&&et!==(et=`${m[1]>700?"flex flex-row":"flex flex-col"}`))&&l(ne,"class",et),(!b||f&2&&lt!==(lt=`flex flex-col min-w-32  ${m[1]>700?"":"mx-auto"}`))&&l(Ge,"class",lt),(!b||f&2&&tt!==(tt=`${m[1]>700?_l:vl}`))&&l(Ae,"class",tt),(!b||f&2&&st!==(st=`${m[1]>700?pl:gl}`))&&l(fe,"class",st),(!b||f&2&&at!==(at=`${m[1]>700?ml:xl}`))&&l(he,"class",at),(!b||f&2&&it!==(it=`${m[1]>700?"flex flex-row":"flex flex-col"}`))&&l(ue,"class",it),(!b||f&2&&rt!==(rt=`flex flex-col min-w-32  ${m[1]>700?"":"mx-auto"}`))&&l(Be,"class",rt),(!b||f&2&&ot!==(ot=`${m[1]>700?_l:vl}`))&&l(Le,"class",ot),(!b||f&2&&nt!==(nt=`${m[1]>700?pl:gl}`))&&l(ve,"class",nt),(!b||f&2&&ct!==(ct=`${m[1]>700?ml:xl}`))&&l(pe,"class",ct),(!b||f&2&&dt!==(dt=`${m[1]>700?"flex flex-row":"flex flex-col"}`))&&l(_e,"class",dt)},i(m){b||(Aa(E.$$.fragment,m),Aa(Oe.$$.fragment,m),b=!0)},o(m){Ba(E.$$.fragment,m),Ba(Oe.$$.fragment,m),b=!1},d(m){m&&i(a),Fa(E),Fa(Oe),Ls=!1,vi(na)}}}let H="pt-16",Pi="pt-10",Us="text-5xl text-gray-200 font-odibee flex justify-center text-center",oi="text-5xl text-black font-odibee flex justify-center text-center",ni="px-10 text-3xl text-gray-200 font-electrolize my-auto",_l="px-10 text-3xl text-black font-electrolize my-auto",ci="px-10 pt-10 text-xl text-gray-200 font-electrolize my-auto",vl="px-10 pt-10 text-xl text-black font-electrolize my-auto",di="pt-2 px-10 text-xl text-gray-200 font-electrolize",pl="pt-2 px-10 text-xl text-black font-electrolize",ui="pt-2 px-10 text-base text-gray-200 font-electrolize",gl="pt-2 px-10 text-base text-black font-electrolize",fi="pt-2 px-10 text-xl text-gray-200 font-normal",ml="pt-2 px-10 text-xl text-black font-normal",hi="pt-2 px-10 text-base text-gray-200 font-normal",xl="pt-2 px-10 text-base text-black font-normal",Xe="ml-[3%] mr-[15%]",Ti="mt-2 mx-10 border-dashed border-light_blue_area border",Os="mt-2 mx-10 border-dashed border-blue_bg border";function Mi(o,a,c){let p,_;function h(){c(1,p=window.innerWidth),c(0,_=window.innerHeight)}return c(1,p=1e3),c(0,_=1e3),[_,p,h]}class ji extends Qs{constructor(a){super(),Xs(this,a,Mi,Hi,Ws,{})}}export{ji as component};
