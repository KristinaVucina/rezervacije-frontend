import{s as b}from"./button.esm.37e23ef7.js";import{_ as h}from"./nuxt-link.cfa315b8.js";import{s as $,a as k}from"./datatable.esm.b7b36b17.js";import{s as x}from"./card.esm.913876bc.js";import{u as n}from"./events.7e66de62.js";import{l as y,g,r as w,c as m,b as e,w as a,o as l,j as o,F as B,m as C,a as E,s as j}from"./entry.c5f0150b.js";import"./basecomponent.esm.e8d9499d.js";import"./index.esm.07e8d783.js";import"./baseicon.esm.74a8ee5f.js";import"./dropdown.esm.36a697e5.js";import"./index.esm.a3db8a54.js";import"./index.esm.96a1605f.js";import"./overlayeventbus.esm.43d31098.js";import"./portal.esm.14cbcaef.js";import"./virtualscroller.esm.4b96a8dd.js";import"./inputnumber.esm.d44c324b.js";import"./index.esm.5451ead4.js";import"./inputtext.esm.9e5f1dde.js";import"./index.esm.41ebd81f.js";import"./index.esm.5ca9eddc.js";import"./index.esm.e72e7e78.js";const N=E("h1",null,"Dogadjaji",-1),ee={__name:"index",setup(D){const d=y(()=>n().events.value),s=g();n().getEvents(parseInt(s.params.club));const u=p=>{n().deleteEvent(p)},_=w([{field:"name",header:"Naziv",sortable:!1},{field:"description",header:"Opis",sortable:!1}]);return(p,F)=>{const r=b,i=h,c=$,f=k,v=x;return l(),m("div",null,[e(v,{class:"px-10"},{title:a(()=>[N]),content:a(()=>[e(f,{value:o(d),class:"p-datatable-sm",tableStyle:"min-width: 50rem"},{header:a(()=>[e(i,{to:`/admin/clubs/${o(s).params.club}/events/new`},{default:a(()=>[e(r,{icon:"pi pi-plus",severity:"info"})]),_:1},8,["to"])]),default:a(()=>[(l(!0),m(B,null,C(o(_),t=>(l(),j(c,{key:t.field,field:t.field,header:t.header,sortable:t.sortable},null,8,["field","header","sortable"]))),128)),e(c,{header:"Akcije"},{body:a(t=>[e(i,{to:`/admin/clubs/${o(s).params.club}/events/${t.data.id}`},{default:a(()=>[e(r,{icon:"pi pi-pencil",severity:"info"})]),_:2},1032,["to"]),e(i,{to:`/admin/clubs/${o(s).params.club}/events/${t.data.id}/reservations`},{default:a(()=>[e(r,{icon:"pi pi-calendar",severity:"warning"})]),_:2},1032,["to"]),e(r,{icon:"pi pi-trash",severity:"danger",onClick:V=>u(t.data.id)},null,8,["onClick"])]),_:1})]),_:1},8,["value"])]),_:1})])}}};export{ee as default};