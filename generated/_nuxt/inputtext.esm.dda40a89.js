import{s as u}from"./basecomponent.esm.43a92442.js";import{o as a,c as p,S as r}from"./entry.1ffaec57.js";var d={name:"InputText",extends:u,emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};const m=["value"];function s(e,l,n,i,c,t){return a(),p("input",r({class:["p-inputtext p-component",{"p-filled":t.filled}],value:n.modelValue,onInput:l[0]||(l[0]=(...o)=>t.onInput&&t.onInput(...o))},e.ptm("root")),null,16,m)}d.render=s;export{d as default};
