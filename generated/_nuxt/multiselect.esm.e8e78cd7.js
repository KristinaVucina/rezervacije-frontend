import{U as E,a0 as T,Z as h,P as f,a1 as N,a7 as U,R as z,h as C,Q as q,o as r,c as d,a as u,S as n,T as p,F as x,d as k,t as g,m as A,a6 as H,s as v,N as O,W as S,b as M,w as F,a5 as j,V as P,a9 as W,X as Z,a4 as Q}from"./entry.bebea34a.js";import{s as X}from"./basecomponent.esm.8d6823c6.js";import{s as J}from"./index.esm.3ecb5efd.js";import{s as Y}from"./index.esm.837f2f1a.js";import{s as _}from"./index.esm.b6f3b248.js";import{s as $}from"./index.esm.deaeaad8.js";import{s as ee}from"./index.esm.b8edffb5.js";import{s as te}from"./index.esm.860f0a09.js";import{O as ie}from"./overlayeventbus.esm.8fe2a6c7.js";import{s as le}from"./portal.esm.6db6dad0.js";import{s as se}from"./virtualscroller.esm.65ca7179.js";import"./baseicon.esm.142279c1.js";var ne={name:"MultiSelect",extends:X,emits:["update:modelValue","change","focus","blur","before-show","before-hide","show","hide","filter","selectall-change"],props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"200px"},placeholder:String,disabled:Boolean,inputId:{type:String,default:null},inputProps:{type:null,default:null},panelClass:{type:String,default:null},panelStyle:{type:null,default:null},panelProps:{type:null,default:null},filterInputProps:{type:null,default:null},closeButtonProps:{type:null,default:null},dataKey:null,filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},appendTo:{type:String,default:"body"},display:{type:String,default:"comma"},selectedItemsLabel:{type:String,default:"{0} items selected"},maxSelectedLabels:{type:Number,default:null},selectionLimit:{type:Number,default:null},showToggleAll:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},checkboxIcon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},filterIcon:{type:String,default:void 0},loadingIcon:{type:String,default:void 0},removeTokenIcon:{type:String,default:void 0},selectAll:{type:Boolean,default:null},resetFilterOnHide:{type:Boolean,default:!1},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!0},autoFilterFocus:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},"aria-label":{type:String,default:null},"aria-labelledby":{type:String,default:null}},outsideClickListener:null,scrollHandler:null,resizeListener:null,overlay:null,list:null,virtualScroller:null,startRangeIndex:-1,searchTimeout:null,searchValue:"",selectOnFocus:!1,focusOnHover:!1,data(){return{id:this.$attrs.id,focused:!1,focusedOptionIndex:-1,headerCheckboxFocused:!1,filterValue:null,overlayVisible:!1}},watch:{"$attrs.id":function(e){this.id=e||E()},options(){this.autoUpdateModel()}},mounted(){this.id=this.id||E(),this.autoUpdateModel()},beforeUnmount(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(T.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex(e,t){return this.virtualScrollerDisabled?e:t&&t(e).index},getOptionLabel(e){return this.optionLabel?h.resolveFieldData(e,this.optionLabel):e},getOptionValue(e){return this.optionValue?h.resolveFieldData(e,this.optionValue):e},getOptionRenderKey(e){return this.dataKey?h.resolveFieldData(e,this.dataKey):this.getOptionLabel(e)},getHeaderCheckboxPTOptions(e){return this.ptm(e,{context:{selected:this.allSelected,focused:this.headerCheckboxFocused}})},getCheckboxPTOptions(e,t,i,a){return this.ptm(a,{context:{selected:this.isSelected(e),focused:this.focusedOptionIndex===this.getOptionIndex(i,t),disabled:this.isOptionDisabled(e)}})},isOptionDisabled(e){return this.maxSelectionLimitReached&&!this.isSelected(e)?!0:this.optionDisabled?h.resolveFieldData(e,this.optionDisabled):!1},isOptionGroup(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel(e){return h.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupChildren(e){return h.resolveFieldData(e,this.optionGroupChildren)},getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(t=>this.isOptionGroup(t)).length:e)+1},show(e){this.$emit("before-show"),this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,e&&f.focus(this.$refs.focusInput)},hide(e){const t=()=>{this.$emit("before-hide"),this.overlayVisible=!1,this.focusedOptionIndex=-1,this.searchValue="",this.resetFilterOnHide&&(this.filterValue=null),e&&f.focus(this.$refs.focusInput)};setTimeout(()=>{t()},0)},onFocus(e){this.disabled||(this.focused=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.overlayVisible&&this.scrollInView(this.focusedOptionIndex),this.$emit("focus",e))},onBlur(e){this.focused=!1,this.focusedOptionIndex=-1,this.searchValue="",this.$emit("blur",e)},onKeyDown(e){if(this.disabled){e.preventDefault();return}const t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"Space":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"ShiftLeft":case"ShiftRight":this.onShiftKey(e);break;default:if(e.code==="KeyA"&&t){const i=this.visibleOptions.filter(a=>this.isValidOption(a)).map(a=>this.getOptionValue(a));this.updateModel(e,i),e.preventDefault();break}!t&&h.isPrintableCharacter(e.key)&&(!this.overlayVisible&&this.show(),this.searchOptions(e),e.preventDefault());break}},onContainerClick(e){this.disabled||this.loading||(!this.overlay||!this.overlay.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0))},onFirstHiddenFocus(e){const t=e.relatedTarget===this.$refs.focusInput?f.getFirstFocusableElement(this.overlay,":not(.p-hidden-focusable)"):this.$refs.focusInput;f.focus(t)},onLastHiddenFocus(e){const t=e.relatedTarget===this.$refs.focusInput?f.getLastFocusableElement(this.overlay,":not(.p-hidden-focusable)"):this.$refs.focusInput;f.focus(t)},onCloseClick(){this.hide(!0)},onHeaderCheckboxFocus(){this.headerCheckboxFocused=!0},onHeaderCheckboxBlur(){this.headerCheckboxFocused=!1},onOptionSelect(e,t,i=-1,a=!1){if(this.disabled||this.isOptionDisabled(t))return;let o=this.isSelected(t),l=null;o?l=this.modelValue.filter(y=>!h.equals(y,this.getOptionValue(t),this.equalityKey)):l=[...this.modelValue||[],this.getOptionValue(t)],this.updateModel(e,l),i!==-1&&(this.focusedOptionIndex=i),a&&f.focus(this.$refs.focusInput)},onOptionMouseMove(e,t){this.focusOnHover&&this.changeFocusedOptionIndex(e,t)},onOptionSelectRange(e,t=-1,i=-1){if(t===-1&&(t=this.findNearestSelectedOptionIndex(i,!0)),i===-1&&(i=this.findNearestSelectedOptionIndex(t)),t!==-1&&i!==-1){const a=Math.min(t,i),o=Math.max(t,i),l=this.visibleOptions.slice(a,o+1).filter(y=>this.isValidOption(y)).map(y=>this.getOptionValue(y));this.updateModel(e,l)}},onFilterChange(e){const t=e.target.value;this.filterValue=t,this.focusedOptionIndex=-1,this.$emit("filter",{originalEvent:e,value:t}),!this.virtualScrollerDisabled&&this.virtualScroller.scrollToIndex(0)},onFilterKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break}},onFilterBlur(){this.focusedOptionIndex=-1},onFilterUpdated(){this.overlayVisible&&this.alignOverlay()},onOverlayClick(e){ie.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey(e){const t=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.findFirstFocusedOptionIndex();e.shiftKey&&this.onOptionSelectRange(e,this.startRangeIndex,t),this.changeFocusedOptionIndex(e,t),!this.overlayVisible&&this.show(),e.preventDefault()},onArrowUpKey(e,t=!1){if(e.altKey&&!t)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{const i=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.findLastFocusedOptionIndex();e.shiftKey&&this.onOptionSelectRange(e,i,this.startRangeIndex),this.changeFocusedOptionIndex(e,i),!this.overlayVisible&&this.show(),e.preventDefault()}},onArrowLeftKey(e,t=!1){t&&(this.focusedOptionIndex=-1)},onHomeKey(e,t=!1){const{currentTarget:i}=e;if(t){const a=i.value.length;i.setSelectionRange(0,e.shiftKey?a:0),this.focusedOptionIndex=-1}else{let a=e.metaKey||e.ctrlKey,o=this.findFirstOptionIndex();e.shiftKey&&a&&this.onOptionSelectRange(e,o,this.startRangeIndex),this.changeFocusedOptionIndex(e,o),!this.overlayVisible&&this.show()}e.preventDefault()},onEndKey(e,t=!1){const{currentTarget:i}=e;if(t){const a=i.value.length;i.setSelectionRange(e.shiftKey?0:a,a),this.focusedOptionIndex=-1}else{let a=e.metaKey||e.ctrlKey,o=this.findLastOptionIndex();e.shiftKey&&a&&this.onOptionSelectRange(e,this.startRangeIndex,o),this.changeFocusedOptionIndex(e,o),!this.overlayVisible&&this.show()}e.preventDefault()},onPageUpKey(e){this.scrollInView(0),e.preventDefault()},onPageDownKey(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey(e){this.overlayVisible?this.focusedOptionIndex!==-1&&(e.shiftKey?this.onOptionSelectRange(e,this.focusedOptionIndex):this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex])):this.onArrowDownKey(e),e.preventDefault()},onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey(e,t=!1){t||(this.overlayVisible&&this.hasFocusableElements()?(f.focus(e.shiftKey?this.$refs.lastHiddenFocusableElementOnOverlay:this.$refs.firstHiddenFocusableElementOnOverlay),e.preventDefault()):(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(this.filter)))},onShiftKey(){this.startRangeIndex=this.focusedOptionIndex},onOverlayEnter(e){T.set("overlay",e,this.$primevue.config.zIndex.overlay),this.alignOverlay(),this.scrollInView(),this.autoFilterFocus&&f.focus(this.$refs.filterInput)},onOverlayAfterEnter(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave(e){T.clear(e)},alignOverlay(){this.appendTo==="self"?f.relativePosition(this.overlay,this.$el):(this.overlay.style.minWidth=f.getOuterWidth(this.$el)+"px",f.absolutePosition(this.overlay,this.$el))},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.overlayVisible&&this.isOutsideClicked(e)&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new N(this.$refs.container,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&!f.isTouchDevice()&&this.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOutsideClicked(e){return!(this.$el.isSameNode(e.target)||this.$el.contains(e.target)||this.overlay&&this.overlay.contains(e.target))},getLabelByValue(e){const i=(this.optionGroupLabel?this.flatOptions(this.options):this.options||[]).find(a=>!this.isOptionGroup(a)&&h.equals(this.getOptionValue(a),e,this.equalityKey));return i?this.getOptionLabel(i):null},getSelectedItemsLabel(){let e=/{(.*?)}/;return e.test(this.selectedItemsLabel)?this.selectedItemsLabel.replace(this.selectedItemsLabel.match(e)[0],this.modelValue.length+""):this.selectedItemsLabel},onToggleAll(e){if(this.selectAll!==null)this.$emit("selectall-change",{originalEvent:e,checked:!this.allSelected});else{const t=this.allSelected?[]:this.visibleOptions.filter(i=>this.isValidOption(i)).map(i=>this.getOptionValue(i));this.updateModel(e,t)}this.headerCheckboxFocused=!0},removeOption(e,t){let i=this.modelValue.filter(a=>!h.equals(a,t,this.equalityKey));this.updateModel(e,i)},clearFilter(){this.filterValue=null},hasFocusableElements(){return f.getFocusableElements(this.overlay,":not(.p-hidden-focusable)").length>0},isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))},isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)},isSelected(e){const t=this.getOptionValue(e);return(this.modelValue||[]).some(i=>h.equals(i,t,this.equalityKey))},findFirstOptionIndex(){return this.visibleOptions.findIndex(e=>this.isValidOption(e))},findLastOptionIndex(){return h.findLastIndex(this.visibleOptions,e=>this.isValidOption(e))},findNextOptionIndex(e){const t=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(i=>this.isValidOption(i)):-1;return t>-1?t+e+1:e},findPrevOptionIndex(e){const t=e>0?h.findLastIndex(this.visibleOptions.slice(0,e),i=>this.isValidOption(i)):-1;return t>-1?t:e},findFirstSelectedOptionIndex(){return this.hasSelectedOption?this.visibleOptions.findIndex(e=>this.isValidSelectedOption(e)):-1},findLastSelectedOptionIndex(){return this.hasSelectedOption?h.findLastIndex(this.visibleOptions,e=>this.isValidSelectedOption(e)):-1},findNextSelectedOptionIndex(e){const t=this.hasSelectedOption&&e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(i=>this.isValidSelectedOption(i)):-1;return t>-1?t+e+1:-1},findPrevSelectedOptionIndex(e){const t=this.hasSelectedOption&&e>0?h.findLastIndex(this.visibleOptions.slice(0,e),i=>this.isValidSelectedOption(i)):-1;return t>-1?t:-1},findNearestSelectedOptionIndex(e,t=!1){let i=-1;return this.hasSelectedOption&&(t?(i=this.findPrevSelectedOptionIndex(e),i=i===-1?this.findNextSelectedOptionIndex(e):i):(i=this.findNextSelectedOptionIndex(e),i=i===-1?this.findPrevSelectedOptionIndex(e):i)),i>-1?i:e},findFirstFocusedOptionIndex(){const e=this.findFirstSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex(){const e=this.findLastSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},searchOptions(e){this.searchValue=(this.searchValue||"")+e.key;let t=-1;this.focusedOptionIndex!==-1?(t=this.visibleOptions.slice(this.focusedOptionIndex).findIndex(i=>this.isOptionMatched(i)),t=t===-1?this.visibleOptions.slice(0,this.focusedOptionIndex).findIndex(i=>this.isOptionMatched(i)):t+this.focusedOptionIndex):t=this.visibleOptions.findIndex(i=>this.isOptionMatched(i)),t===-1&&this.focusedOptionIndex===-1&&(t=this.findFirstFocusedOptionIndex()),t!==-1&&this.changeFocusedOptionIndex(e,t),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500)},changeFocusedOptionIndex(e,t){this.focusedOptionIndex!==t&&(this.focusedOptionIndex=t,this.scrollInView())},scrollInView(e=-1){const t=e!==-1?`${this.id}_${e}`:this.focusedOptionId,i=f.findSingle(this.list,`li[id="${t}"]`);i?i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||this.virtualScroller&&this.virtualScroller.scrollToIndex(e!==-1?e:this.focusedOptionIndex)},autoUpdateModel(){if(this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption){this.focusedOptionIndex=this.findFirstFocusedOptionIndex();const e=this.getOptionValue(this.visibleOptions[this.focusedOptionIndex]);this.updateModel(null,[e])}},updateModel(e,t){this.$emit("update:modelValue",t),this.$emit("change",{originalEvent:e,value:t})},flatOptions(e){return(e||[]).reduce((t,i,a)=>{t.push({optionGroup:i,group:!0,index:a});const o=this.getOptionGroupChildren(i);return o&&o.forEach(l=>t.push(l)),t},[])},overlayRef(e){this.overlay=e},listRef(e,t){this.list=e,t&&t(e)},virtualScrollerRef(e){this.virtualScroller=e}},computed:{containerClass(){return["p-multiselect p-component p-inputwrapper",{"p-multiselect-chip":this.display==="chip","p-disabled":this.disabled,"p-focus":this.focused,"p-inputwrapper-filled":this.modelValue&&this.modelValue.length,"p-inputwrapper-focus":this.focused||this.overlayVisible,"p-overlay-open":this.overlayVisible}]},labelClass(){return["p-multiselect-label",{"p-placeholder":this.label===this.placeholder,"p-multiselect-label-empty":!this.placeholder&&(!this.modelValue||this.modelValue.length===0)}]},panelStyleClass(){return["p-multiselect-panel p-component",this.panelClass,{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},headerCheckboxClass(){return["p-checkbox p-component",{"p-checkbox-checked":this.allSelected,"p-checkbox-focused":this.headerCheckboxFocused}]},visibleOptions(){const e=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];if(this.filterValue){const t=U.filter(e,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);if(this.optionGroupLabel){const i=this.options||[],a=[];return i.forEach(o=>{const y=this.getOptionGroupChildren(o).filter(w=>t.includes(w));y.length>0&&a.push({...o,[typeof this.optionGroupChildren=="string"?this.optionGroupChildren:"items"]:[...y]})}),this.flatOptions(a)}return t}return e},label(){let e;if(this.modelValue&&this.modelValue.length){if(h.isNotEmpty(this.maxSelectedLabels)&&this.modelValue.length>this.maxSelectedLabels)return this.getSelectedItemsLabel();e="";for(let t=0;t<this.modelValue.length;t++)t!==0&&(e+=", "),e+=this.getLabelByValue(this.modelValue[t])}else e=this.placeholder;return e},chipSelectedItems(){return h.isNotEmpty(this.maxSelectedLabels)&&this.modelValue&&this.modelValue.length>this.maxSelectedLabels?this.modelValue.slice(0,this.maxSelectedLabels):this.modelValue},allSelected(){return this.selectAll!==null?this.selectAll:h.isNotEmpty(this.visibleOptions)&&this.visibleOptions.every(e=>this.isOptionGroup(e)||this.isOptionDisabled(e)||this.isSelected(e))},hasSelectedOption(){return h.isNotEmpty(this.modelValue)},equalityKey(){return this.optionValue?null:this.dataKey},searchFields(){return this.filterFields||[this.optionLabel]},maxSelectionLimitReached(){return this.selectionLimit&&this.modelValue&&this.modelValue.length===this.selectionLimit},filterResultMessageText(){return h.isNotEmpty(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}",this.modelValue.length):this.emptySelectionMessageText},focusedOptionId(){return this.focusedOptionIndex!==-1?`${this.id}_${this.focusedOptionIndex}`:null},ariaSetSize(){return this.visibleOptions.filter(e=>!this.isOptionGroup(e)).length},toggleAllAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria[this.allSelected?"selectAll":"unselectAll"]:void 0},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},virtualScrollerDisabled(){return!this.virtualScrollerOptions}},directives:{ripple:z},components:{VirtualScroller:se,Portal:le,TimesIcon:ee,SearchIcon:_,TimesCircleIcon:te,ChevronDownIcon:Y,SpinnerIcon:$,CheckIcon:J}};const oe=["id","disabled","placeholder","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant"],ae=["onClick"],re=["checked","aria-label"],de=["value","placeholder","aria-owns","aria-activedescendant"],ce=["aria-label"],he=["id"],ue=["id"],pe=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove"];function fe(e,t,i,a,o,l){const y=C("TimesCircleIcon"),w=C("SpinnerIcon"),R=C("VirtualScroller"),B=C("Portal"),D=q("ripple");return r(),d("div",n({ref:"container",class:l.containerClass,onClick:t[15]||(t[15]=(...s)=>l.onContainerClick&&l.onContainerClick(...s))},e.ptm("root")),[u("div",n({class:"p-hidden-accessible"},e.ptm("hiddenInputWrapper")),[u("input",n({ref:"focusInput",id:i.inputId,type:"text",readonly:"",disabled:i.disabled,placeholder:i.placeholder,tabindex:i.disabled?-1:i.tabindex,role:"combobox","aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":o.overlayVisible,"aria-controls":o.id+"_list","aria-activedescendant":o.focused?l.focusedOptionId:void 0,onFocus:t[0]||(t[0]=(...s)=>l.onFocus&&l.onFocus(...s)),onBlur:t[1]||(t[1]=(...s)=>l.onBlur&&l.onBlur(...s)),onKeydown:t[2]||(t[2]=(...s)=>l.onKeyDown&&l.onKeyDown(...s))},{...i.inputProps,...e.ptm("input")}),null,16,oe)],16),u("div",n({class:"p-multiselect-label-container"},e.ptm("labelContainer")),[u("div",n({class:l.labelClass},e.ptm("label")),[p(e.$slots,"value",{value:i.modelValue,placeholder:i.placeholder},()=>[i.display==="comma"?(r(),d(x,{key:0},[k(g(l.label||"empty"),1)],64)):i.display==="chip"?(r(),d(x,{key:1},[(r(!0),d(x,null,A(l.chipSelectedItems,s=>(r(),d("div",n({key:l.getLabelByValue(s),class:"p-multiselect-token"},e.ptm("token")),[p(e.$slots,"chip",{value:s},()=>[u("span",n({class:"p-multiselect-token-label"},e.ptm("tokenLabel")),g(l.getLabelByValue(s)),17)]),i.disabled?O("",!0):p(e.$slots,"removetokenicon",{key:0,class:"p-multiselect-token-icon",onClick:I=>l.removeOption(I,s)},()=>[i.removeTokenIcon?(r(),d("span",n({key:0,class:["p-multiselect-token-icon",i.removeTokenIcon],onClick:H(I=>l.removeOption(I,s),["stop"])},e.ptm("removeTokenIcon")),null,16,ae)):(r(),v(y,n({key:1,class:"p-multiselect-token-icon",onClick:H(I=>l.removeOption(I,s),["stop"])},e.ptm("removeTokenIcon")),null,16,["onClick"]))])],16))),128)),!i.modelValue||i.modelValue.length===0?(r(),d(x,{key:0},[k(g(i.placeholder||"empty"),1)],64)):O("",!0)],64)):O("",!0)])],16)],16),u("div",n({class:"p-multiselect-trigger"},e.ptm("trigger")),[i.loading?p(e.$slots,"loadingicon",{key:0,class:"p-multiselect-trigger-icon"},()=>[i.loadingIcon?(r(),d("span",n({key:0,class:["p-multiselect-trigger-icon pi-spin",i.loadingIcon],"aria-hidden":"true"},e.ptm("triggerIcon")),null,16)):(r(),v(w,n({key:1,class:"p-multiselect-trigger-icon",spin:"","aria-hidden":"true"},e.ptm("triggerIcon")),null,16))]):p(e.$slots,"dropdownicon",{key:1,class:"p-multiselect-trigger-icon"},()=>[(r(),v(S(i.dropdownIcon?"span":"ChevronDownIcon"),n({class:["p-multiselect-trigger-icon",i.dropdownIcon],"aria-hidden":"true"},e.ptm("dropdownIcon")),null,16,["class"]))])],16),M(B,{appendTo:i.appendTo},{default:F(()=>[M(j,{name:"p-connected-overlay",onEnter:l.onOverlayEnter,onAfterEnter:l.onOverlayAfterEnter,onLeave:l.onOverlayLeave,onAfterLeave:l.onOverlayAfterLeave},{default:F(()=>[o.overlayVisible?(r(),d("div",n({key:0,ref:l.overlayRef,style:i.panelStyle,class:l.panelStyleClass,onClick:t[13]||(t[13]=(...s)=>l.onOverlayClick&&l.onOverlayClick(...s)),onKeydown:t[14]||(t[14]=(...s)=>l.onOverlayKeyDown&&l.onOverlayKeyDown(...s))},{...i.panelProps,...e.ptm("panel")}),[u("span",n({ref:"firstHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[3]||(t[3]=(...s)=>l.onFirstHiddenFocus&&l.onFirstHiddenFocus(...s))},e.ptm("hiddenFirstFocusableEl")),null,16),p(e.$slots,"header",{value:i.modelValue,options:l.visibleOptions}),i.showToggleAll&&i.selectionLimit==null||i.filter?(r(),d("div",n({key:0,class:"p-multiselect-header"},e.ptm("header")),[i.showToggleAll&&i.selectionLimit==null?(r(),d("div",n({key:0,class:l.headerCheckboxClass,onClick:t[6]||(t[6]=(...s)=>l.onToggleAll&&l.onToggleAll(...s))},e.ptm("headerCheckboxContainer")),[u("div",n({class:"p-hidden-accessible"},e.ptm("hiddenInputWrapper")),[u("input",n({type:"checkbox",readonly:"",checked:l.allSelected,"aria-label":l.toggleAllAriaLabel,onFocus:t[4]||(t[4]=(...s)=>l.onHeaderCheckboxFocus&&l.onHeaderCheckboxFocus(...s)),onBlur:t[5]||(t[5]=(...s)=>l.onHeaderCheckboxBlur&&l.onHeaderCheckboxBlur(...s))},e.ptm("headerCheckbox")),null,16,re)],16),u("div",n({class:["p-checkbox-box",{"p-highlight":l.allSelected,"p-focus":o.headerCheckboxFocused}]},l.getHeaderCheckboxPTOptions("headerCheckbox")),[p(e.$slots,"headercheckboxicon",{allSelected:l.allSelected,class:"p-checkbox-icon"},()=>[(r(),v(S(i.checkboxIcon?"span":"CheckIcon"),n({class:["p-checkbox-icon",{[i.checkboxIcon]:l.allSelected}]},l.getHeaderCheckboxPTOptions("headerCheckboxIcon")),null,16,["class"]))])],16)],16)):O("",!0),i.filter?(r(),d("div",n({key:1,class:"p-multiselect-filter-container"},e.ptm("filterContainer")),[u("input",n({ref:"filterInput",type:"text",value:o.filterValue,onVnodeMounted:t[7]||(t[7]=(...s)=>l.onFilterUpdated&&l.onFilterUpdated(...s)),class:"p-multiselect-filter p-inputtext p-component",placeholder:i.filterPlaceholder,role:"searchbox",autocomplete:"off","aria-owns":o.id+"_list","aria-activedescendant":l.focusedOptionId,onKeydown:t[8]||(t[8]=(...s)=>l.onFilterKeyDown&&l.onFilterKeyDown(...s)),onBlur:t[9]||(t[9]=(...s)=>l.onFilterBlur&&l.onFilterBlur(...s)),onInput:t[10]||(t[10]=(...s)=>l.onFilterChange&&l.onFilterChange(...s))},{...i.filterInputProps,...e.ptm("filterInput")}),null,16,de),p(e.$slots,"filtericon",{class:"p-multiselect-filter-icon"},()=>[(r(),v(S(i.filterIcon?"span":"SearchIcon"),n({class:["p-multiselect-filter-icon",i.filterIcon]},e.ptm("filterIcon")),null,16,["class"]))])],16)):O("",!0),i.filter?(r(),d("span",n({key:2,role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("hiddenFilterResult")),g(l.filterResultMessageText),17)):O("",!0),P((r(),d("button",n({class:"p-multiselect-close p-link","aria-label":l.closeAriaLabel,onClick:t[11]||(t[11]=(...s)=>l.onCloseClick&&l.onCloseClick(...s)),type:"button"},{...i.closeButtonProps,...e.ptm("closeButton")}),[p(e.$slots,"closeicon",{class:"p-multiselect-close-icon"},()=>[(r(),v(S(i.closeIcon?"span":"TimesIcon"),n({class:["p-multiselect-close-icon",i.closeIcon]},e.ptm("closeIcon")),null,16,["class"]))])],16,ce)),[[D]])],16)):O("",!0),u("div",n({class:"p-multiselect-items-wrapper",style:{"max-height":l.virtualScrollerDisabled?i.scrollHeight:""}},e.ptm("wrapper")),[M(R,n({ref:l.virtualScrollerRef},{...i.virtualScrollerOptions,...e.ptm("virtualScroller")},{items:l.visibleOptions,style:{height:i.scrollHeight},tabindex:-1,disabled:l.virtualScrollerDisabled}),W({content:F(({styleClass:s,contentRef:I,items:L,getItemOptions:m,contentStyle:G,itemSize:V})=>[u("ul",n({ref:c=>l.listRef(c,I),id:o.id+"_list",class:["p-multiselect-items p-component",s],style:G,role:"listbox","aria-multiselectable":"true"},e.ptm("list")),[(r(!0),d(x,null,A(L,(c,b)=>(r(),d(x,{key:l.getOptionRenderKey(c,l.getOptionIndex(b,m))},[l.isOptionGroup(c)?(r(),d("li",n({key:0,id:o.id+"_"+l.getOptionIndex(b,m),style:{height:V?V+"px":void 0},class:"p-multiselect-item-group",role:"option"},e.ptm("itemGroup")),[p(e.$slots,"optiongroup",{option:c.optionGroup,index:l.getOptionIndex(b,m)},()=>[k(g(l.getOptionGroupLabel(c.optionGroup)),1)])],16,ue)):P((r(),d("li",n({key:1,id:o.id+"_"+l.getOptionIndex(b,m),style:{height:V?V+"px":void 0},class:["p-multiselect-item",{"p-highlight":l.isSelected(c),"p-focus":o.focusedOptionIndex===l.getOptionIndex(b,m),"p-disabled":l.isOptionDisabled(c)}],role:"option","aria-label":l.getOptionLabel(c),"aria-selected":l.isSelected(c),"aria-disabled":l.isOptionDisabled(c),"aria-setsize":l.ariaSetSize,"aria-posinset":l.getAriaPosInset(l.getOptionIndex(b,m)),onClick:K=>l.onOptionSelect(K,c,l.getOptionIndex(b,m),!0),onMousemove:K=>l.onOptionMouseMove(K,l.getOptionIndex(b,m))},l.getCheckboxPTOptions(c,m,b,"item")),[u("div",n({class:"p-checkbox p-component"},e.ptm("checkboxContainer")),[u("div",n({class:["p-checkbox-box",{"p-highlight":l.isSelected(c)}]},l.getCheckboxPTOptions(c,m,b,"checkbox")),[p(e.$slots,"itemcheckboxicon",{selected:l.isSelected(c),class:"p-checkbox-icon"},()=>[(r(),v(S(i.checkboxIcon?"span":"CheckIcon"),n({class:["p-checkbox-icon",{[i.checkboxIcon]:l.isSelected(c)}]},l.getCheckboxPTOptions(c,m,b,"checkboxIcon")),null,16,["class"]))])],16)],16),p(e.$slots,"option",{option:c,index:l.getOptionIndex(b,m)},()=>[u("span",Z(Q(e.ptm("option"))),g(l.getOptionLabel(c)),17)])],16,pe)),[[D]])],64))),128)),o.filterValue&&(!L||L&&L.length===0)?(r(),d("li",n({key:0,class:"p-multiselect-empty-message",role:"option"},e.ptm("emptyMessage")),[p(e.$slots,"emptyfilter",{},()=>[k(g(l.emptyFilterMessageText),1)])],16)):!i.options||i.options&&i.options.length===0?(r(),d("li",n({key:1,class:"p-multiselect-empty-message",role:"option"},e.ptm("emptyMessage")),[p(e.$slots,"empty",{},()=>[k(g(l.emptyMessageText),1)])],16)):O("",!0)],16,he)]),_:2},[e.$slots.loader?{name:"loader",fn:F(({options:s})=>[p(e.$slots,"loader",{options:s})]),key:"0"}:void 0]),1040,["items","style","disabled"])],16),p(e.$slots,"footer",{value:i.modelValue,options:l.visibleOptions}),!i.options||i.options&&i.options.length===0?(r(),d("span",n({key:1,role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("emptyMessage")),g(l.emptyMessageText),17)):O("",!0),u("span",n({role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("hiddenSelectedMessage")),g(l.selectedMessageText),17),u("span",n({ref:"lastHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[12]||(t[12]=(...s)=>l.onLastHiddenFocus&&l.onLastHiddenFocus(...s))},e.ptm("hiddenLastFocusableEl")),null,16)],16)):O("",!0)]),_:3},8,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]),_:3},8,["appendTo"])],16)}function me(e,t){t===void 0&&(t={});var i=t.insertAt;if(!(!e||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",i==="top"&&a.firstChild?a.insertBefore(o,a.firstChild):a.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var be=`
.p-multiselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
}
.p-multiselect-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}
.p-multiselect-label-container {
    overflow: hidden;
    flex: 1 1 auto;
    cursor: pointer;
}
.p-multiselect-label {
    display: block;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
}
.p-multiselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}
.p-multiselect-token {
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
}
.p-multiselect-token-icon {
    cursor: pointer;
}
.p-multiselect .p-multiselect-panel {
    min-width: 100%;
}
.p-multiselect-panel {
    position: absolute;
    top: 0;
    left: 0;
}
.p-multiselect-items-wrapper {
    overflow: auto;
}
.p-multiselect-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.p-multiselect-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
}
.p-multiselect-item-group {
    cursor: auto;
}
.p-multiselect-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.p-multiselect-filter-container {
    position: relative;
    flex: 1 1 auto;
}
.p-multiselect-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}
.p-multiselect-filter-container .p-inputtext {
    width: 100%;
}
.p-multiselect-close {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    overflow: hidden;
    position: relative;
    margin-left: auto;
}
.p-fluid .p-multiselect {
    display: flex;
}
`;me(be);ne.render=fe;export{ne as default};