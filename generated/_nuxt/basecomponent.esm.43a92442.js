import{Z as a,S as i}from"./entry.1ffaec57.js";var u={name:"BaseComponent",props:{pt:{type:Object,default:void 0}},methods:{getOption(t={},e=""){const s=a.convertToFlatCase(e);return t[Object.keys(t).find(r=>a.convertToFlatCase(r)===s)||""]},getPTValue(t={},e="",s={}){const r=a.getItemValue(this.getOption(t,e),s),n=a.getItemValue(this.getOption(this.defaultPT,e),s);return i(r,n)},ptm(t="",e={}){return this.getPTValue(this.pt,t,{props:this.$props,state:this.$data,...e})},ptmo(t={},e="",s={}){return this.getPTValue(t,e,s)}},computed:{defaultPT(){return a.getItemValue(this.getOption(this.$primevue.config.pt,this.$.type.name),this.defaultsParams)},defaultsParams(){return{instance:this.$}}}};export{u as s};
