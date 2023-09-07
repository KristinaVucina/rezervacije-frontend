import{s as k}from"./basecomponent.esm.54942c6b.js";import{s as E}from"./button.esm.457063a5.js";import{s as N}from"./index.esm.eb1deef0.js";import{s as F}from"./baseicon.esm.4cc2bddd.js";import{o as p,c as D,S as c,a as M,P as _,h as V,b as I,w as y,T as x,s as g,W as C,ac as w,N as B}from"./entry.aca0b2c9.js";import P from"./inputtext.esm.79299730.js";import"./index.esm.5ca1b52d.js";var $={name:"AngleUpIcon",extends:F};const R=M("path",{d:"M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z",fill:"currentColor"},null,-1),L=[R];function T(e,t,n,i,s,r){return p(),D("svg",c({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),L,16)}$.render=T;var A={name:"InputNumber",extends:k,emits:["update:modelValue","input","focus","blur"],props:{modelValue:{type:Number,default:null},format:{type:Boolean,default:!0},showButtons:{type:Boolean,default:!1},buttonLayout:{type:String,default:"stacked"},incrementButtonClass:{type:String,default:null},decrementButtonClass:{type:String,default:null},incrementButtonIcon:{type:String,default:void 0},decrementButtonIcon:{type:String,default:void 0},locale:{type:String,default:void 0},localeMatcher:{type:String,default:void 0},mode:{type:String,default:"decimal"},prefix:{type:String,default:null},suffix:{type:String,default:null},currency:{type:String,default:void 0},currencyDisplay:{type:String,default:void 0},useGrouping:{type:Boolean,default:!0},minFractionDigits:{type:Number,default:void 0},maxFractionDigits:{type:Number,default:void 0},min:{type:Number,default:null},max:{type:Number,default:null},step:{type:Number,default:1},allowEmpty:{type:Boolean,default:!0},highlightOnFocus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},incrementButtonProps:{type:null,default:null},decrementButtonProps:{type:null,default:null},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},numberFormat:null,_numeral:null,_decimal:null,_group:null,_minusSign:null,_currency:null,_suffix:null,_prefix:null,_index:null,groupChar:"",isSpecialChar:null,prefixChar:null,suffixChar:null,timer:null,data(){return{d_modelValue:this.modelValue,focused:!1}},watch:{modelValue(e){this.d_modelValue=e},locale(e,t){this.updateConstructParser(e,t)},localeMatcher(e,t){this.updateConstructParser(e,t)},mode(e,t){this.updateConstructParser(e,t)},currency(e,t){this.updateConstructParser(e,t)},currencyDisplay(e,t){this.updateConstructParser(e,t)},useGrouping(e,t){this.updateConstructParser(e,t)},minFractionDigits(e,t){this.updateConstructParser(e,t)},maxFractionDigits(e,t){this.updateConstructParser(e,t)},suffix(e,t){this.updateConstructParser(e,t)},prefix(e,t){this.updateConstructParser(e,t)}},created(){this.constructParser()},methods:{getOptions(){return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:this.minFractionDigits,maximumFractionDigits:this.maxFractionDigits}},constructParser(){this.numberFormat=new Intl.NumberFormat(this.locale,this.getOptions());const e=[...new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)].reverse(),t=new Map(e.map((n,i)=>[n,i]));this._numeral=new RegExp(`[${e.join("")}]`,"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=n=>t.get(n)},updateConstructParser(e,t){e!==t&&this.constructParser()},escapeRegExp(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},getDecimalExpression(){const e=new Intl.NumberFormat(this.locale,{...this.getOptions(),useGrouping:!1});return new RegExp(`[${e.format(1.1).replace(this._currency,"").trim().replace(this._numeral,"")}]`,"g")},getGroupingExpression(){const e=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp(`[${this.groupChar}]`,"g")},getMinusSignExpression(){const e=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp(`[${e.format(-1).trim().replace(this._numeral,"")}]`,"g")},getCurrencyExpression(){if(this.currency){const e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});return new RegExp(`[${e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,"")}]`,"g")}return new RegExp("[]","g")},getPrefixExpression(){if(this.prefix)this.prefixChar=this.prefix;else{const e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0]}return new RegExp(`${this.escapeRegExp(this.prefixChar||"")}`,"g")},getSuffixExpression(){if(this.suffix)this.suffixChar=this.suffix;else{const e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});this.suffixChar=e.format(1).split("1")[1]}return new RegExp(`${this.escapeRegExp(this.suffixChar||"")}`,"g")},formatValue(e){if(e!=null){if(e==="-")return e;if(this.format){let n=new Intl.NumberFormat(this.locale,this.getOptions()).format(e);return this.prefix&&(n=this.prefix+n),this.suffix&&(n=n+this.suffix),n}return e.toString()}return""},parseValue(e){let t=e.replace(this._suffix,"").replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(t){if(t==="-")return t;let n=+t;return isNaN(n)?null:n}return null},repeat(e,t,n){if(this.readonly)return;let i=t||500;this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,40,n)},i),this.spin(e,n)},spin(e,t){if(this.$refs.input){let n=this.step*t,i=this.parseValue(this.$refs.input.$el.value)||0,s=this.validateValue(i+n);this.updateInput(s,null,"spin"),this.updateModel(e,s),this.handleOnInput(e,i,s)}},onUpButtonMouseDown(e){this.disabled||(this.$refs.input.$el.focus(),this.repeat(e,null,1),e.preventDefault())},onUpButtonMouseUp(){this.disabled||this.clearTimer()},onUpButtonMouseLeave(){this.disabled||this.clearTimer()},onUpButtonKeyUp(){this.disabled||this.clearTimer()},onUpButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,1)},onDownButtonMouseDown(e){this.disabled||(this.$refs.input.$el.focus(),this.repeat(e,null,-1),e.preventDefault())},onDownButtonMouseUp(){this.disabled||this.clearTimer()},onDownButtonMouseLeave(){this.disabled||this.clearTimer()},onDownButtonKeyUp(){this.disabled||this.clearTimer()},onDownButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,-1)},onUserInput(){this.isSpecialChar&&(this.$refs.input.$el.value=this.lastValue),this.isSpecialChar=!1},onInputKeyDown(e){if(this.readonly)return;if(this.lastValue=e.target.value,e.shiftKey||e.altKey){this.isSpecialChar=!0;return}let t=e.target.selectionStart,n=e.target.selectionEnd,i=e.target.value,s=null;switch(e.altKey&&e.preventDefault(),e.code){case"ArrowUp":this.spin(e,1),e.preventDefault();break;case"ArrowDown":this.spin(e,-1),e.preventDefault();break;case"ArrowLeft":this.isNumeralChar(i.charAt(t-1))||e.preventDefault();break;case"ArrowRight":this.isNumeralChar(i.charAt(t))||e.preventDefault();break;case"Tab":case"Enter":s=this.validateValue(this.parseValue(i)),this.$refs.input.$el.value=this.formatValue(s),this.$refs.input.$el.setAttribute("aria-valuenow",s),this.updateModel(e,s);break;case"Backspace":{if(e.preventDefault(),t===n){const r=i.charAt(t-1),{decimalCharIndex:l,decimalCharIndexWithoutPrefix:a}=this.getDecimalCharIndexes(i);if(this.isNumeralChar(r)){const u=this.getDecimalLength(i);if(this._group.test(r))this._group.lastIndex=0,s=i.slice(0,t-2)+i.slice(t-1);else if(this._decimal.test(r))this._decimal.lastIndex=0,u?this.$refs.input.$el.setSelectionRange(t-1,t-1):s=i.slice(0,t-1)+i.slice(t);else if(l>0&&t>l){const h=this.isDecimalMode()&&(this.minFractionDigits||0)<u?"":"0";s=i.slice(0,t-1)+h+i.slice(t)}else a===1?(s=i.slice(0,t-1)+"0"+i.slice(t),s=this.parseValue(s)>0?s:""):s=i.slice(0,t-1)+i.slice(t)}this.updateValue(e,s,null,"delete-single")}else s=this.deleteRange(i,t,n),this.updateValue(e,s,null,"delete-range");break}case"Delete":if(e.preventDefault(),t===n){const r=i.charAt(t),{decimalCharIndex:l,decimalCharIndexWithoutPrefix:a}=this.getDecimalCharIndexes(i);if(this.isNumeralChar(r)){const u=this.getDecimalLength(i);if(this._group.test(r))this._group.lastIndex=0,s=i.slice(0,t)+i.slice(t+2);else if(this._decimal.test(r))this._decimal.lastIndex=0,u?this.$refs.input.$el.setSelectionRange(t+1,t+1):s=i.slice(0,t)+i.slice(t+1);else if(l>0&&t>l){const h=this.isDecimalMode()&&(this.minFractionDigits||0)<u?"":"0";s=i.slice(0,t)+h+i.slice(t+1)}else a===1?(s=i.slice(0,t)+"0"+i.slice(t+1),s=this.parseValue(s)>0?s:""):s=i.slice(0,t)+i.slice(t+1)}this.updateValue(e,s,null,"delete-back-single")}else s=this.deleteRange(i,t,n),this.updateValue(e,s,null,"delete-range");break;case"Home":this.min&&(this.updateModel(e,this.min),e.preventDefault());break;case"End":this.max&&(this.updateModel(e,this.max),e.preventDefault());break}},onInputKeyPress(e){if(this.readonly)return;e.preventDefault();let t=e.which||e.keyCode,n=String.fromCharCode(t);const i=this.isDecimalSign(n),s=this.isMinusSign(n);(48<=t&&t<=57||s||i)&&this.insert(e,n,{isDecimalSign:i,isMinusSign:s})},onPaste(e){e.preventDefault();let t=(e.clipboardData||window.clipboardData).getData("Text");if(t){let n=this.parseValue(t);n!=null&&this.insert(e,n.toString())}},allowMinusSign(){return this.min===null||this.min<0},isMinusSign(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,!0):!1},isDecimalSign(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1},isDecimalMode(){return this.mode==="decimal"},getDecimalCharIndexes(e){let t=e.search(this._decimal);this._decimal.lastIndex=0;const i=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:t,decimalCharIndexWithoutPrefix:i}},getCharIndexes(e){const t=e.search(this._decimal);this._decimal.lastIndex=0;const n=e.search(this._minusSign);this._minusSign.lastIndex=0;const i=e.search(this._suffix);this._suffix.lastIndex=0;const s=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:t,minusCharIndex:n,suffixCharIndex:i,currencyCharIndex:s}},insert(e,t,n={isDecimalSign:!1,isMinusSign:!1}){const i=t.search(this._minusSign);if(this._minusSign.lastIndex=0,!this.allowMinusSign()&&i!==-1)return;const s=this.$refs.input.$el.selectionStart,r=this.$refs.input.$el.selectionEnd;let l=this.$refs.input.$el.value.trim();const{decimalCharIndex:a,minusCharIndex:u,suffixCharIndex:h,currencyCharIndex:m}=this.getCharIndexes(l);let o;if(n.isMinusSign)s===0&&(o=l,(u===-1||r!==0)&&(o=this.insertText(l,t,0,r)),this.updateValue(e,o,t,"insert"));else if(n.isDecimalSign)a>0&&s===a?this.updateValue(e,l,t,"insert"):a>s&&a<r?(o=this.insertText(l,t,s,r),this.updateValue(e,o,t,"insert")):a===-1&&this.maxFractionDigits&&(o=this.insertText(l,t,s,r),this.updateValue(e,o,t,"insert"));else{const f=this.numberFormat.resolvedOptions().maximumFractionDigits,d=s!==r?"range-insert":"insert";if(a>0&&s>a){if(s+t.length-(a+1)<=f){const b=m>=s?m-1:h>=s?h:l.length;o=l.slice(0,s)+t+l.slice(s+t.length,b)+l.slice(b),this.updateValue(e,o,t,d)}}else o=this.insertText(l,t,s,r),this.updateValue(e,o,t,d)}},insertText(e,t,n,i){if((t==="."?t:t.split(".")).length===2){const r=e.slice(n,i).search(this._decimal);return this._decimal.lastIndex=0,r>0?e.slice(0,n)+this.formatValue(t)+e.slice(i):e||this.formatValue(t)}else return i-n===e.length?this.formatValue(t):n===0?t+e.slice(i):i===e.length?e.slice(0,n)+t:e.slice(0,n)+t+e.slice(i)},deleteRange(e,t,n){let i;return n-t===e.length?i="":t===0?i=e.slice(n):n===e.length?i=e.slice(0,t):i=e.slice(0,t)+e.slice(n),i},initCursor(){let e=this.$refs.input.$el.selectionStart,t=this.$refs.input.$el.value,n=t.length,i=null,s=(this.prefixChar||"").length;t=t.replace(this._prefix,""),e=e-s;let r=t.charAt(e);if(this.isNumeralChar(r))return e+s;let l=e-1;for(;l>=0;)if(r=t.charAt(l),this.isNumeralChar(r)){i=l+s;break}else l--;if(i!==null)this.$refs.input.$el.setSelectionRange(i+1,i+1);else{for(l=e;l<n;)if(r=t.charAt(l),this.isNumeralChar(r)){i=l+s;break}else l++;i!==null&&this.$refs.input.$el.setSelectionRange(i,i)}return i||0},onInputClick(){const e=this.$refs.input.$el.value;!this.readonly&&e!==_.getSelection()&&this.initCursor()},isNumeralChar(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1},resetRegex(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0},updateValue(e,t,n,i){let s=this.$refs.input.$el.value,r=null;t!=null&&(r=this.parseValue(t),r=!r&&!this.allowEmpty?0:r,this.updateInput(r,n,i,t),this.handleOnInput(e,s,r))},handleOnInput(e,t,n){this.isValueChanged(t,n)&&this.$emit("input",{originalEvent:e,value:n,formattedValue:t})},isValueChanged(e,t){if(t===null&&e!==null)return!0;if(t!=null){let n=typeof e=="string"?this.parseValue(e):e;return t!==n}return!1},validateValue(e){return e==="-"||e==null?null:this.min!=null&&e<this.min?this.min:this.max!=null&&e>this.max?this.max:e},updateInput(e,t,n,i){t=t||"";let s=this.$refs.input.$el.value,r=this.formatValue(e),l=s.length;if(r!==i&&(r=this.concatValues(r,i)),l===0){this.$refs.input.$el.value=r,this.$refs.input.$el.setSelectionRange(0,0);const u=this.initCursor()+t.length;this.$refs.input.$el.setSelectionRange(u,u)}else{let a=this.$refs.input.$el.selectionStart,u=this.$refs.input.$el.selectionEnd;this.$refs.input.$el.value=r;let h=r.length;if(n==="range-insert"){const m=this.parseValue((s||"").slice(0,a)),f=(m!==null?m.toString():"").split("").join(`(${this.groupChar})?`),d=new RegExp(f,"g");d.test(r);const b=t.split("").join(`(${this.groupChar})?`),S=new RegExp(b,"g");S.test(r.slice(d.lastIndex)),u=d.lastIndex+S.lastIndex,this.$refs.input.$el.setSelectionRange(u,u)}else if(h===l)n==="insert"||n==="delete-back-single"?this.$refs.input.$el.setSelectionRange(u+1,u+1):n==="delete-single"?this.$refs.input.$el.setSelectionRange(u-1,u-1):(n==="delete-range"||n==="spin")&&this.$refs.input.$el.setSelectionRange(u,u);else if(n==="delete-back-single"){let m=s.charAt(u-1),o=s.charAt(u),f=l-h,d=this._group.test(o);d&&f===1?u+=1:!d&&this.isNumeralChar(m)&&(u+=-1*f+1),this._group.lastIndex=0,this.$refs.input.$el.setSelectionRange(u,u)}else if(s==="-"&&n==="insert"){this.$refs.input.$el.setSelectionRange(0,0);const o=this.initCursor()+t.length+1;this.$refs.input.$el.setSelectionRange(o,o)}else u=u+(h-l),this.$refs.input.$el.setSelectionRange(u,u)}this.$refs.input.$el.setAttribute("aria-valuenow",e)},concatValues(e,t){if(e&&t){let n=t.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?e.replace(this.suffixChar,"").split(this._decimal)[0]+t.replace(this.suffixChar,"").slice(n)+this.suffixChar:n!==-1?e.split(this._decimal)[0]+t.slice(n):e}return e},getDecimalLength(e){if(e){const t=e.split(this._decimal);if(t.length===2)return t[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0},updateModel(e,t){this.d_modelValue=t,this.$emit("update:modelValue",t)},onInputFocus(e){this.focused=!0,!this.disabled&&!this.readonly&&this.$refs.input.$el.value!==_.getSelection()&&this.highlightOnFocus&&e.target.select(),this.$emit("focus",e)},onInputBlur(e){this.focused=!1;let t=e.target,n=this.validateValue(this.parseValue(t.value));this.$emit("blur",{originalEvent:e,value:t.value}),t.value=this.formatValue(n),t.setAttribute("aria-valuenow",n),this.updateModel(e,n)},clearTimer(){this.timer&&clearInterval(this.timer)},maxBoundry(){return this.d_modelValue>=this.max},minBoundry(){return this.d_modelValue<=this.min}},computed:{containerClass(){return["p-inputnumber p-component p-inputwrapper",{"p-inputwrapper-filled":this.filled,"p-inputwrapper-focus":this.focused,"p-inputnumber-buttons-stacked":this.showButtons&&this.buttonLayout==="stacked","p-inputnumber-buttons-horizontal":this.showButtons&&this.buttonLayout==="horizontal","p-inputnumber-buttons-vertical":this.showButtons&&this.buttonLayout==="vertical"}]},upButtonClass(){return["p-inputnumber-button p-inputnumber-button-up",this.incrementButtonClass,{"p-disabled":this.showButtons&&this.max!==null&&this.maxBoundry()}]},downButtonClass(){return["p-inputnumber-button p-inputnumber-button-down",this.decrementButtonClass,{"p-disabled":this.showButtons&&this.min!==null&&this.minBoundry()}]},filled(){return this.modelValue!=null&&this.modelValue.toString().length>0},upButtonListeners(){return{mousedown:e=>this.onUpButtonMouseDown(e),mouseup:e=>this.onUpButtonMouseUp(e),mouseleave:e=>this.onUpButtonMouseLeave(e),keydown:e=>this.onUpButtonKeyDown(e),keyup:e=>this.onUpButtonKeyUp(e)}},downButtonListeners(){return{mousedown:e=>this.onDownButtonMouseDown(e),mouseup:e=>this.onDownButtonMouseUp(e),mouseleave:e=>this.onDownButtonMouseLeave(e),keydown:e=>this.onDownButtonKeyDown(e),keyup:e=>this.onDownButtonKeyUp(e)}},formattedValue(){const e=!this.modelValue&&!this.allowEmpty?0:this.modelValue;return this.formatValue(e)},getFormatter(){return this.numberFormat}},components:{INInputText:P,INButton:E,AngleUpIcon:$,AngleDownIcon:N}};function U(e,t,n,i,s,r){const l=V("INInputText"),a=V("INButton");return p(),D("span",c({class:r.containerClass},e.ptm("root")),[I(l,c({ref:"input",id:n.inputId,class:["p-inputnumber-input",n.inputClass],role:"spinbutton",style:n.inputStyle,value:r.formattedValue,"aria-valuemin":n.min,"aria-valuemax":n.max,"aria-valuenow":n.modelValue,disabled:n.disabled,readonly:n.readonly,placeholder:n.placeholder,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,onInput:r.onUserInput,onKeydown:r.onInputKeyDown,onKeypress:r.onInputKeyPress,onPaste:r.onPaste,onClick:r.onInputClick,onFocus:r.onInputFocus,onBlur:r.onInputBlur},{...n.inputProps,...e.ptm("input")}),null,16,["id","class","style","value","aria-valuemin","aria-valuemax","aria-valuenow","disabled","readonly","placeholder","aria-labelledby","aria-label","onInput","onKeydown","onKeypress","onPaste","onClick","onFocus","onBlur"]),n.showButtons&&n.buttonLayout==="stacked"?(p(),D("span",c({key:0,class:"p-inputnumber-button-group"},e.ptm("buttonGroup")),[I(a,c({class:r.upButtonClass},w(r.upButtonListeners),{disabled:n.disabled,tabindex:-1,"aria-hidden":"true"},{...n.incrementButtonProps,...e.ptm("incrementButton")}),{icon:y(()=>[x(e.$slots,"incrementbuttonicon",{},()=>[(p(),g(C(n.incrementButtonIcon?"span":"AngleUpIcon"),c({class:n.incrementButtonIcon},e.ptm("incrementButton").icon),null,16,["class"]))])]),_:3},16,["class","disabled"]),I(a,c({class:r.downButtonClass},w(r.downButtonListeners),{disabled:n.disabled,tabindex:-1,"aria-hidden":"true"},{...n.decrementButtonProps,...e.ptm("decrementButton")}),{icon:y(()=>[x(e.$slots,"decrementbuttonicon",{},()=>[(p(),g(C(n.decrementButtonIcon?"span":"AngleDownIcon"),c({class:n.decrementButtonIcon},e.ptm("decrementButton").icon),null,16,["class"]))])]),_:3},16,["class","disabled"])],16)):B("",!0),n.showButtons&&n.buttonLayout!=="stacked"?(p(),g(a,c({key:1,class:r.upButtonClass},w(r.upButtonListeners),{disabled:n.disabled,tabindex:-1,"aria-hidden":"true"},{...n.incrementButtonProps,...e.ptm("incrementButton")}),{icon:y(()=>[x(e.$slots,"incrementbuttonicon",{},()=>[(p(),g(C(n.incrementButtonIcon?"span":"AngleUpIcon"),c({class:n.incrementButtonIcon},e.ptm("incrementButton").icon),null,16,["class"]))])]),_:3},16,["class","disabled"])):B("",!0),n.showButtons&&n.buttonLayout!=="stacked"?(p(),g(a,c({key:2,class:r.downButtonClass},w(r.downButtonListeners),{disabled:n.disabled,tabindex:-1,"aria-hidden":"true"},{...n.decrementButtonProps,...e.ptm("decrementButton")}),{icon:y(()=>[x(e.$slots,"decrementbuttonicon",{},()=>[(p(),g(C(n.decrementButtonIcon?"span":"AngleDownIcon"),c({class:n.decrementButtonIcon},e.ptm("decrementButton").icon),null,16,["class"]))])]),_:3},16,["class","disabled"])):B("",!0)],16)}function K(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var O=`
.p-inputnumber {
    display: inline-flex;
}
.p-inputnumber-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
}
.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label,
.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label {
    display: none;
}
.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding: 0;
}
.p-inputnumber-buttons-stacked .p-inputnumber-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    padding: 0;
}
.p-inputnumber-buttons-stacked .p-inputnumber-button-group {
    display: flex;
    flex-direction: column;
}
.p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button {
    flex: 1 1 auto;
}
.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up {
    order: 3;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.p-inputnumber-buttons-horizontal .p-inputnumber-input {
    order: 2;
    border-radius: 0;
}
.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down {
    order: 1;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.p-inputnumber-buttons-vertical {
    flex-direction: column;
}
.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up {
    order: 1;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    width: 100%;
}
.p-inputnumber-buttons-vertical .p-inputnumber-input {
    order: 2;
    border-radius: 0;
    text-align: center;
}
.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down {
    order: 3;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    width: 100%;
}
.p-inputnumber-input {
    flex: 1 1 auto;
}
.p-fluid .p-inputnumber {
    width: 100%;
}
.p-fluid .p-inputnumber .p-inputnumber-input {
    width: 1%;
}
.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input {
    width: 100%;
}
`;K(O);A.render=U;export{A as default};