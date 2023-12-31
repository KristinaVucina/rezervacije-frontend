import{s as r}from"./basecomponent.esm.54942c6b.js";import{o as p,c,a as u,S as d}from"./entry.aca0b2c9.js";var o={name:"InputSwitch",extends:r,emits:["click","update:modelValue","change","input","focus","blur"],props:{modelValue:{type:null,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},disabled:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},data(){return{focused:!1}},methods:{onClick(e){if(!this.disabled){const t=this.checked?this.falseValue:this.trueValue;this.$emit("click",e),this.$emit("update:modelValue",t),this.$emit("change",e),this.$emit("input",t),this.$refs.input.focus()}e.preventDefault()},onFocus(e){this.focused=!0,this.$emit("focus",e)},onBlur(e){this.focused=!1,this.$emit("blur",e)}},computed:{containerClass(){return["p-inputswitch p-component",{"p-inputswitch-checked":this.checked,"p-disabled":this.disabled,"p-focus":this.focused}]},checked(){return this.modelValue===this.trueValue}}};const h=["id","checked","disabled","aria-checked","aria-labelledby","aria-label"];function f(e,t,i,n,l,a){return p(),c("div",d({class:a.containerClass,onClick:t[2]||(t[2]=s=>a.onClick(s))},e.ptm("root")),[u("div",d({class:"p-hidden-accessible"},e.ptm("hiddenInputWrapper")),[u("input",d({ref:"input",id:i.inputId,type:"checkbox",role:"switch",class:i.inputClass,style:i.inputStyle,checked:a.checked,disabled:i.disabled,"aria-checked":a.checked,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,onFocus:t[0]||(t[0]=s=>a.onFocus(s)),onBlur:t[1]||(t[1]=s=>a.onBlur(s))},e.ptm("hiddenInput")),null,16,h)],16),u("span",d({class:"p-inputswitch-slider"},{...i.inputProps,...e.ptm("slider")}),null,16)],16)}function m(e,t){t===void 0&&(t={});var i=t.insertAt;if(!(!e||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",i==="top"&&n.firstChild?n.insertBefore(l,n.firstChild):n.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}var b=`
.p-inputswitch {
    position: relative;
    display: inline-block;
}
.p-inputswitch-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid transparent;
}
.p-inputswitch-slider:before {
    position: absolute;
    content: '';
    top: 50%;
}
`;m(b);o.render=f;export{o as default};
