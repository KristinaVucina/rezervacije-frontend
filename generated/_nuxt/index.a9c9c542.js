import{s as C}from"./button.esm.30609da5.js";import{_ as g}from"./nuxt-link.a9124c78.js";import{s as k,a as x}from"./datatable.esm.139a8e36.js";import{s as y}from"./card.esm.ddd52e63.js";import $ from"./confirmdialog.esm.b32a7169.js";import{u as n}from"./clubs.19ec323b.js";import{l as w,v as B,r as j,c,b as e,w as o,o as s,j as m,F as N,m as D,a as E,s as F}from"./entry.deabe095.js";import"./basecomponent.esm.8f0bf026.js";import"./index.esm.baac5e54.js";import"./baseicon.esm.bd505383.js";import"./dropdown.esm.a5ab7ffb.js";import"./index.esm.5e97a6c9.js";import"./index.esm.1977fe0a.js";import"./overlayeventbus.esm.409544da.js";import"./portal.esm.d1dabb4a.js";import"./virtualscroller.esm.98170f78.js";import"./inputnumber.esm.18410b2c.js";import"./index.esm.db4540ad.js";import"./inputtext.esm.81525632.js";import"./index.esm.a3fb45d1.js";import"./index.esm.5f892019.js";import"./index.esm.fc1e9d42.js";import"./dialog.esm.3beb0016.js";const V=E("h1",null,"Klubovi",-1),re={__name:"index",setup(q){const p=w(()=>n().clubs.value);n().getClubs();const d=i=>{n().deleteClub(i)},u=B(),_=i=>{u.require({message:"Jeste li sigurni?",header:"Potvrda brisanja",icon:"pi pi-exclamation-triangle",accept:()=>{d(i)},reject:()=>{}})},f=j([{field:"name",header:"Naziv",sortable:!1},{field:"email",header:"Email",sortable:!1}]);return(i,z)=>{const a=C,r=g,l=k,b=x,h=y,v=$;return s(),c("div",null,[e(h,{class:"px-10"},{title:o(()=>[V]),content:o(()=>[e(b,{value:m(p),class:"p-datatable-sm",tableStyle:"min-width: 50rem"},{header:o(()=>[e(r,{to:"/admin/clubs/new"},{default:o(()=>[e(a,{icon:"pi pi-plus",severity:"info"})]),_:1})]),default:o(()=>[(s(!0),c(N,null,D(m(f),t=>(s(),F(l,{key:t.field,field:t.field,header:t.header,sortable:t.sortable},null,8,["field","header","sortable"]))),128)),e(l,{header:"Akcije"},{body:o(t=>[e(r,{to:`/admin/clubs/${t.data.id}`},{default:o(()=>[e(a,{icon:"pi pi-pencil",severity:"info"})]),_:2},1032,["to"]),e(r,{to:`/admin/clubs/${t.data.id}/events`},{default:o(()=>[e(a,{icon:"pi pi-calendar",severity:"warning"})]),_:2},1032,["to"]),e(a,{icon:"pi pi-trash",severity:"danger",onClick:A=>_(t.data.id)},null,8,["onClick"])]),_:1})]),_:1},8,["value"])]),_:1}),e(v)])}}};export{re as default};