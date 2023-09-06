import{s as _}from"./card.esm.84330d81.js";import{u as V}from"./user.d545534a.js";import{_ as c,r as g,g as b,h as j,c as f,b as n,w as u,o as v,j as l,k as x,a as d,n as I,p as U,e as y}from"./entry.1ffaec57.js";import{u as w}from"./events.2f1c7e79.js";import"./basecomponent.esm.43a92442.js";const S=m=>(U("data-v-a1983055"),m=m(),y(),m),T={class:"flex justify-center max-h-screen h-screen"},k=S(()=>d("h1",null,"Novi dogadjaj",-1)),K={class:"double"},h={class:"double"},C={class:"double"},N={class:"double"},D={__name:"new",setup(m){V();const e=g({}),i=b(),r=async()=>{const s=new FormData;e.value.date=e.value.date.toISOString().split("T")[0],Object.entries(e.value).forEach(([a,o])=>{var p;if(a==="image"&&o&&((p=o[0])!=null&&p.file)){s.append(a,o[0].file);return}s.append(a,o)}),s.append("club_id",parseInt(i.params.club)),await w().create(s),await I("/admin/clubs/"+i.params.club+"/events")};return(s,a)=>{const o=j("FormKit"),p=_;return v(),f("div",T,[n(p,{class:"self-center"},{title:u(()=>[k]),content:u(()=>[n(o,{id:"registerForm",modelValue:l(e),"onUpdate:modelValue":a[8]||(a[8]=t=>x(e)?e.value=t:null),type:"form","submit-attrs":{inputClass:"p-button p-component"},onSubmit:r},{default:u(()=>[d("div",K,[n(o,{type:"primeInputText",name:"name",label:"Naziv",modelValue:l(e).name,"onUpdate:modelValue":a[0]||(a[0]=t=>l(e).name=t),help:"Naziv dogadjaja"},null,8,["modelValue"]),n(o,{type:"primeInputText",name:"slug",label:"Kratica",modelValue:l(e).slug,"onUpdate:modelValue":a[1]||(a[1]=t=>l(e).slug=t),help:"Kratica kluba"},null,8,["modelValue"])]),d("div",h,[n(o,{type:"primeCalendar",name:"date",label:"Datum",modelValue:l(e).date,"onUpdate:modelValue":a[2]||(a[2]=t=>l(e).date=t),help:"Datum dogadjaja"},null,8,["modelValue"]),n(o,{type:"primeInputText",name:"description",label:"Opis",modelValue:l(e).description,"onUpdate:modelValue":a[3]||(a[3]=t=>l(e).description=t),help:"Opis dogadjaja"},null,8,["modelValue"])]),d("div",C,[n(o,{type:"file",accept:".jpg,.jpeg,.png,.svg",name:"image",label:"Slika dogadjaja",modelValue:l(e).image,"onUpdate:modelValue":a[4]||(a[4]=t=>l(e).image=t),help:"Slika dogadjaja"},null,8,["modelValue"]),n(o,{type:"primeInputText",name:"url",label:"URL",modelValue:l(e).url,"onUpdate:modelValue":a[5]||(a[5]=t=>l(e).url=t),help:"URL"},null,8,["modelValue"])]),d("div",N,[n(o,{type:"primeInputText",name:"time_start",label:"Pocetak",modelValue:l(e).time_start,"onUpdate:modelValue":a[6]||(a[6]=t=>l(e).time_start=t),help:"Pocetak dogadjaja"},null,8,["modelValue"]),n(o,{type:"primeInputText",name:"time_end",label:"Kraj",modelValue:l(e).time_end,"onUpdate:modelValue":a[7]||(a[7]=t=>l(e).time_end=t),help:"Kraj dogadjaja"},null,8,["modelValue"])])]),_:1},8,["modelValue"])]),_:1})])}}},z=c(D,[["__scopeId","data-v-a1983055"]]);export{z as default};