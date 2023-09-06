import{s as f}from"./basecomponent.esm.43a92442.js";import{s as m}from"./index.esm.35053196.js";import{U as y,o as d,c as h,a as r,F as I,m as g,S as o,T as c,t as b,s as k,W as x}from"./entry.1ffaec57.js";import"./baseicon.esm.d697f810.js";var V={name:"Chips",extends:f,emits:["update:modelValue","add","remove","focus","blur"],props:{modelValue:{type:Array,default:null},max:{type:Number,default:null},separator:{type:[String,Object],default:null},addOnBlur:{type:Boolean,default:null},allowDuplicate:{type:Boolean,default:!0},placeholder:{type:String,default:null},disabled:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},removeTokenIcon:{type:String,default:void 0},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},data(){return{id:y(),inputValue:null,focused:!1,focusedIndex:null}},methods:{onWrapperClick(){this.$refs.input.focus()},onInput(e){this.inputValue=e.target.value,this.focusedIndex=null},onFocus(e){this.focused=!0,this.focusedIndex=null,this.$emit("focus",e)},onBlur(e){this.focused=!1,this.focusedIndex=null,this.addOnBlur&&this.addItem(e,e.target.value,!1),this.$emit("blur",e)},onKeyDown(e){const t=e.target.value;switch(e.code){case"Backspace":t.length===0&&this.modelValue&&this.modelValue.length>0&&(this.focusedIndex!==null?this.removeItem(e,this.focusedIndex):this.removeItem(e,this.modelValue.length-1));break;case"Enter":t&&t.trim().length&&!this.maxedOut&&this.addItem(e,t,!0);break;case"ArrowLeft":t.length===0&&this.modelValue&&this.modelValue.length>0&&this.$refs.container.focus();break;case"ArrowRight":e.stopPropagation();break;default:this.separator&&(this.separator===e.key||e.key.match(this.separator))&&this.addItem(e,t,!0);break}},onPaste(e){if(this.separator){let t=(e.clipboardData||window.clipboardData).getData("Text");if(t){let n=this.modelValue||[],a=t.split(this.separator);a=a.filter(s=>this.allowDuplicate||n.indexOf(s)===-1),n=[...n,...a],this.updateModel(e,n,!0)}}},onContainerFocus(){this.focused=!0},onContainerBlur(){this.focusedIndex=-1,this.focused=!1},onContainerKeyDown(e){switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOn(e);break;case"ArrowRight":this.onArrowRightKeyOn(e);break;case"Backspace":this.onBackspaceKeyOn(e);break}},onArrowLeftKeyOn(){this.inputValue.length===0&&this.modelValue&&this.modelValue.length>0&&(this.focusedIndex=this.focusedIndex===null?this.modelValue.length-1:this.focusedIndex-1,this.focusedIndex<0&&(this.focusedIndex=0))},onArrowRightKeyOn(){this.inputValue.length===0&&this.modelValue&&this.modelValue.length>0&&(this.focusedIndex===this.modelValue.length-1?(this.focusedIndex=null,this.$refs.input.focus()):this.focusedIndex++)},onBackspaceKeyOn(e){this.focusedIndex!==null&&this.removeItem(e,this.focusedIndex)},updateModel(e,t,n){this.$emit("update:modelValue",t),this.$emit("add",{originalEvent:e,value:t}),this.$refs.input.value="",this.inputValue="",setTimeout(()=>{this.maxedOut&&(this.focused=!1)},0),n&&e.preventDefault()},addItem(e,t,n){if(t&&t.trim().length){let a=this.modelValue?[...this.modelValue]:[];(this.allowDuplicate||a.indexOf(t)===-1)&&(a.push(t),this.updateModel(e,a,n))}},removeItem(e,t){if(this.disabled)return;let n=[...this.modelValue];const a=n.splice(t,1);this.focusedIndex=null,this.$refs.input.focus(),this.$emit("update:modelValue",n),this.$emit("remove",{originalEvent:e,value:a})}},computed:{maxedOut(){return this.max&&this.modelValue&&this.max===this.modelValue.length},containerClass(){return["p-chips p-component p-inputwrapper",{"p-disabled":this.disabled,"p-focus":this.focused,"p-inputwrapper-filled":this.modelValue&&this.modelValue.length||this.inputValue&&this.inputValue.length,"p-inputwrapper-focus":this.focused}]},focusedOptionId(){return this.focusedIndex!==null?`${this.id}_chips_item_${this.focusedIndex}`:null}},components:{TimesCircleIcon:m}};const w=["aria-labelledby","aria-label","aria-activedescendant"],C=["id","aria-label","aria-setsize","aria-posinset"],B=["id","disabled","placeholder"];function v(e,t,n,a,s,i){return d(),h("div",o({class:i.containerClass},e.ptm("root")),[r("ul",o({ref:"container",class:"p-inputtext p-chips-multiple-container",tabindex:"-1",role:"listbox","aria-orientation":"horizontal","aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-activedescendant":s.focused?i.focusedOptionId:void 0,onClick:t[5]||(t[5]=l=>i.onWrapperClick()),onFocus:t[6]||(t[6]=(...l)=>i.onContainerFocus&&i.onContainerFocus(...l)),onBlur:t[7]||(t[7]=(...l)=>i.onContainerBlur&&i.onContainerBlur(...l)),onKeydown:t[8]||(t[8]=(...l)=>i.onContainerKeyDown&&i.onContainerKeyDown(...l))},e.ptm("container")),[(d(!0),h(I,null,g(n.modelValue,(l,u)=>(d(),h("li",o({key:`${u}_${l}`,id:s.id+"_chips_item_"+u,role:"option",class:["p-chips-token",{"p-focus":s.focusedIndex===u}],"aria-label":l,"aria-selected":!0,"aria-setsize":n.modelValue.length,"aria-posinset":u+1},e.ptm("token")),[c(e.$slots,"chip",{value:l},()=>[r("span",o({class:"p-chips-token-label"},e.ptm("label")),b(l),17)]),c(e.$slots,"removetokenicon",{onClick:p=>i.removeItem(p,u)},()=>[(d(),k(x(n.removeTokenIcon?"span":"TimesCircleIcon"),o({class:["p-chips-token-icon",n.removeTokenIcon],onClick:p=>i.removeItem(p,u),"aria-hidden":"true"},e.ptm("removeTokenIcon")),null,16,["class","onClick"]))])],16,C))),128)),r("li",o({class:"p-chips-input-token",role:"option"},e.ptm("inputToken")),[r("input",o({ref:"input",id:n.inputId,type:"text",class:n.inputClass,style:n.inputStyle,disabled:n.disabled||i.maxedOut,placeholder:n.placeholder,onFocus:t[0]||(t[0]=l=>i.onFocus(l)),onBlur:t[1]||(t[1]=l=>i.onBlur(l)),onInput:t[2]||(t[2]=(...l)=>i.onInput&&i.onInput(...l)),onKeydown:t[3]||(t[3]=l=>i.onKeyDown(l)),onPaste:t[4]||(t[4]=l=>i.onPaste(l))},{...n.inputProps,...e.ptm("input")}),null,16,B)],16)],16,w)],16)}function O(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&a.firstChild?a.insertBefore(s,a.firstChild):a.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var D=`
.p-chips {
    display: inline-flex;
}
.p-chips-multiple-container {
    margin: 0;
    padding: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.p-chips-token {
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
}
.p-chips-input-token {
    flex: 1 1 auto;
    display: inline-flex;
}
.p-chips-token-icon {
    cursor: pointer;
}
.p-chips-input-token input {
    border: 0 none;
    outline: 0 none;
    background-color: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
}
.p-fluid .p-chips {
    display: flex;
}
`;O(D);V.render=v;export{V as default};
