import{i as o,J as s}from"./entry.bebea34a.js";const p=()=>{const t=o("reservations",()=>[]),i=o("reservation",()=>null);return{reservations:t,reservation:i,getReservations:async e=>{const{data:a}=await s("api/events/"+e+"/reservations");t.value=a.value},getReservation:async e=>{const{data:a}=await s("api/reservations/"+e);i.value=a.value},create:async e=>{const{data:a}=await s("api/reservations",{method:"POST",body:JSON.stringify(e)});t.value.push(a.value)},update:async e=>{const{data:a}=await s("api/reservations/"+e.id,{method:"PUT",body:JSON.stringify(e)});t.value.splice(t.value.findIndex(n=>n.id===a.value.id),1,a.value)},deleteReservation:async(e,a=!0)=>{await s("api/reservations/"+e,{method:"DELETE"}),a&&t.value.splice(t.value.findIndex(n=>n.id===e),1)}}};export{p as u};