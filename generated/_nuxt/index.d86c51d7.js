import{s as C}from"./button.esm.641ff260.js";import{_ as g}from"./nuxt-link.510e7c53.js";import{s as k,a as x}from"./datatable.esm.0846d39f.js";import{s as y}from"./card.esm.b0f598a3.js";import $ from"./confirmdialog.esm.65ae9cca.js";import{u as n}from"./clubs.9ec82107.js";import{l as w,v as B,r as j,c,b as e,w as o,o as s,j as m,F as N,m as D,a as E,s as F}from"./entry.bebea34a.js";import"./basecomponent.esm.8d6823c6.js";import"./index.esm.deaeaad8.js";import"./baseicon.esm.142279c1.js";import"./dropdown.esm.9630f639.js";import"./index.esm.837f2f1a.js";import"./index.esm.b8edffb5.js";import"./overlayeventbus.esm.8fe2a6c7.js";import"./portal.esm.6db6dad0.js";import"./virtualscroller.esm.65ca7179.js";import"./inputnumber.esm.35080186.js";import"./index.esm.24ac3c77.js";import"./inputtext.esm.c8867acd.js";import"./index.esm.b421671d.js";import"./index.esm.c5c5faa3.js";import"./index.esm.3ecb5efd.js";import"./dialog.esm.9efea6fc.js";const V=E("h1",null,"Klubovi",-1),re={__name:"index",setup(q){const p=w(()=>n().clubs.value);n().getClubs();const d=i=>{n().deleteClub(i)},u=B(),_=i=>{u.require({message:"Jeste li sigurni?",header:"Potvrda brisanja",icon:"pi pi-exclamation-triangle",accept:()=>{d(i)},reject:()=>{}})},f=j([{field:"name",header:"Naziv",sortable:!1},{field:"email",header:"Email",sortable:!1}]);return(i,z)=>{const a=C,r=g,l=k,b=x,h=y,v=$;return s(),c("div",null,[e(h,{class:"px-10"},{title:o(()=>[V]),content:o(()=>[e(b,{value:m(p),class:"p-datatable-sm",tableStyle:"min-width: 50rem"},{header:o(()=>[e(r,{to:"/admin/clubs/new"},{default:o(()=>[e(a,{icon:"pi pi-plus",severity:"info"})]),_:1})]),default:o(()=>[(s(!0),c(N,null,D(m(f),t=>(s(),F(l,{key:t.field,field:t.field,header:t.header,sortable:t.sortable},null,8,["field","header","sortable"]))),128)),e(l,{header:"Akcije"},{body:o(t=>[e(r,{to:`/admin/clubs/${t.data.id}`},{default:o(()=>[e(a,{icon:"pi pi-pencil",severity:"info"})]),_:2},1032,["to"]),e(r,{to:`/admin/clubs/${t.data.id}/events`},{default:o(()=>[e(a,{icon:"pi pi-calendar",severity:"warning"})]),_:2},1032,["to"]),e(a,{icon:"pi pi-trash",severity:"danger",onClick:A=>_(t.data.id)},null,8,["onClick"])]),_:1})]),_:1},8,["value"])]),_:1}),e(v)])}}};export{re as default};