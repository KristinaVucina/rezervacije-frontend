import{s as d}from"./card.esm.913876bc.js";import{z as u,r as f,h as n,o as _,c as h,b as a,w as t,j as r,k as v,a as k,q as b,n as w}from"./entry.c5f0150b.js";import"./basecomponent.esm.e8d9499d.js";const g={class:"flex justify-center max-h-screen h-screen"},x=k("h1",null,"Registracija",-1),K=u({__name:"register",setup(z){const s=[{$formkit:"primeInputText",name:"name",label:"Naziv",help:"Naziv racuna.",validation:"required"},{$formkit:"primeInputText",name:"email",label:"Email",help:"Email racuna.",validation:"required|email"},{$formkit:"primePassword",name:"password",label:"Lozinka",help:"Lozinka.",validation:"required|length:8,32"},{$formkit:"primePassword",name:"password_confirmation",label:"Potvrdi lozinku",help:"Potvrda lozinke.",validation:"required|length:8,32|same:password"}],e=f({}),i=async()=>{await b().register(e.value),w("/")};return(q,o)=>{const l=n("FormKitSchema"),m=n("FormKit"),c=d;return _(),h("div",g,[a(c,{class:"self-center"},{title:t(()=>[x]),content:t(()=>[a(m,{id:"registerForm",modelValue:r(e),"onUpdate:modelValue":o[0]||(o[0]=p=>v(e)?e.value=p:null),type:"form","submit-attrs":{inputClass:"p-button p-component"},onSubmit:i},{default:t(()=>[a(l,{schema:s,data:r(e)},null,8,["data"])]),_:1},8,["modelValue"])]),_:1})])}}});export{K as default};