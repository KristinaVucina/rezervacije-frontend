import v from"./inputtext.esm.c8867acd.js";import{l as b,o as _,c as x,a as o,t as d,L as C,j as n,M as k,r,O as V,b as u,k as w,w as S,n as $}from"./entry.bebea34a.js";import{s as y}from"./carousel.esm.e21986ac.js";import{u as p}from"./clubs.9ec82107.js";import"./basecomponent.esm.8d6823c6.js";import"./index.esm.837f2f1a.js";import"./baseicon.esm.142279c1.js";import"./index.esm.4d7196b1.js";import"./index.esm.c5c5faa3.js";const O={class:"text-2xl font-bold text-white"},j={class:"text-white"},T={__name:"ClubCard",props:{club:{type:Object,required:!0}},setup(a){const t=a,e=k(),l=b(()=>t.club.image_url.startsWith("http")?t.club.image_url:e.public.apiUrl.replace(/\/$/,"")+t.club.image_url);return(c,s)=>(_(),x("div",{class:"p-d-flex p-flex-column p-jc-center p-ai-center mx-2 p-3",style:C(`height: 250px; background-image: url(${n(l)}); background-size: cover; background-position: center;`)},[o("h3",O,d(a.club.name),1),o("p",j,d(a.club.description),1)],4))}};const U=o("h1",{class:"text-5xl font-bold text-white pt-10 pl-10 text-center"},"Rezervacije",-1),z={class:"flex align-middle"},B=o("h3",{class:"text-2xl font-bold text-white pt-10 pl-10 pb-10 pr-10"},"Clubs",-1),F={__name:"index",setup(a){console.log("test"),p().getClubs();const t=b(()=>p().clubs.value),e=r(""),l=r(!1);V(e,s=>{l.value||(l.value=!0,p().getClubs(s).then(()=>{l.value=!1}))});const c=r([{breakpoint:"1199px",numVisible:3,numScroll:3},{breakpoint:"991px",numVisible:2,numScroll:2},{breakpoint:"767px",numVisible:1,numScroll:1}]);return(s,m)=>{const h=v,f=T,g=y;return _(),x("div",null,[U,o("div",z,[B,u(h,{class:"h-10 w-96 self-center",modelValue:n(e),"onUpdate:modelValue":m[0]||(m[0]=i=>w(e)?e.value=i:null),placeholder:"Search..."},null,8,["modelValue"])]),u(g,{value:n(t),numVisible:3,numScroll:1,responsiveOptions:n(c)},{item:S(i=>[u(f,{club:i.data,onClick:R=>("navigateTo"in s?s.navigateTo:n($))("/clubs/"+i.data.id)},null,8,["club","onClick"])]),_:1},8,["value","responsiveOptions"])])}}};export{F as default};