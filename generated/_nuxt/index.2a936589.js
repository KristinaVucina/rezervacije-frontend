import v from"./inputtext.esm.9e5f1dde.js";import{l as b,o as _,c as h,a as o,t as d,L as C,j as n,M as k,q as V,r,O as w,b as u,k as S,w as $,n as y}from"./entry.c5f0150b.js";import{s as O}from"./carousel.esm.24abbb6f.js";import{u as p}from"./clubs.fd89ff31.js";import"./basecomponent.esm.e8d9499d.js";import"./index.esm.a3db8a54.js";import"./baseicon.esm.74a8ee5f.js";import"./index.esm.f75871dc.js";import"./index.esm.5ca9eddc.js";const U={class:"text-2xl font-bold text-white"},j={class:"text-white"},T={__name:"ClubCard",props:{club:{type:Object,required:!0}},setup(a){const t=a,e=k(),s=b(()=>t.club.image_url.startsWith("http")?t.club.image_url:e.public.apiUrl.replace(/\/$/,"")+t.club.image_url);return(c,l)=>(_(),h("div",{class:"p-d-flex p-flex-column p-jc-center p-ai-center mx-2 p-3",style:C(`height: 250px; background-image: url(${n(s)}); background-size: cover; background-position: center;`)},[o("h3",U,d(a.club.name),1),o("p",j,d(a.club.description),1)],4))}};const z=o("h1",{class:"text-5xl font-bold text-white pt-10 pl-10 text-center"},"Rezervacije",-1),B={class:"flex align-middle"},R=o("h3",{class:"text-2xl font-bold text-white pt-10 pl-10 pb-10 pr-10"},"Clubs",-1),G={__name:"index",setup(a){console.log("test"),V().getUser(),p().getClubs();const t=b(()=>p().clubs.value),e=r(""),s=r(!1);w(e,l=>{s.value||(s.value=!0,p().getClubs(l).then(()=>{s.value=!1}))});const c=r([{breakpoint:"1199px",numVisible:3,numScroll:3},{breakpoint:"991px",numVisible:2,numScroll:2},{breakpoint:"767px",numVisible:1,numScroll:1}]);return(l,m)=>{const x=v,f=T,g=O;return _(),h("div",null,[z,o("div",B,[R,u(x,{class:"h-10 w-96 self-center",modelValue:n(e),"onUpdate:modelValue":m[0]||(m[0]=i=>S(e)?e.value=i:null),placeholder:"Search..."},null,8,["modelValue"])]),u(g,{value:n(t),numVisible:3,numScroll:1,responsiveOptions:n(c)},{item:$(i=>[u(f,{club:i.data,onClick:q=>("navigateTo"in l?l.navigateTo:n(y))("/clubs/"+i.data.id)},null,8,["club","onClick"])]),_:1},8,["value","responsiveOptions"])])}}};export{G as default};
