import{p as R,$ as P,ak as te,a as H,al as oe,f as ne,g as x,ad as w,a4 as F,n as i,am as ue,L as se,an as re,t as v,q as A,r as t,ao as ie,s as L,Q as de,ae as Q,a9 as h,Y as ce,af as fe,F as T,V as ve,ap as me,aq as ye,ar as B,a5 as Ve,u as be,as as Ce,N as ge,at as Se,S as Ie,w as G,x as ke,y as _,T as _e,B as m,z as q,A as he,O as j,D as Re,au as Pe,E as xe,G as Ae}from"./index-CE66rkjX.js";import{u as Be}from"./settings-BrmrfQaO.js";import{_ as Ge}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as M,a as we}from"./VRow-CGKpM5rB.js";import{V as Y,b as Fe,c as z,d as Te}from"./VInput-CHAsyBfG.js";const J=Symbol.for("vuetify:selection-control-group"),D=R({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:P,trueIcon:P,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:te},...H(),...oe(),...ne()},"SelectionControlGroup"),De=R({...D({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),Ue=x()({name:"VSelectionControlGroup",props:De(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:r}=u;const l=w(e,"modelValue"),n=F(),d=i(()=>e.id||`v-selection-control-group-${n}`),o=i(()=>e.name||d.value),a=new Set;return ue(J,{modelValue:l,forceUpdate:()=>{a.forEach(s=>s())},onForceUpdate:s=>{a.add(s),se(()=>{a.delete(s)})}}),re({[e.defaultsTarget]:{color:v(e,"color"),disabled:v(e,"disabled"),density:v(e,"density"),error:v(e,"error"),inline:v(e,"inline"),modelValue:l,multiple:i(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:o,falseIcon:v(e,"falseIcon"),trueIcon:v(e,"trueIcon"),readonly:v(e,"readonly"),ripple:v(e,"ripple"),type:v(e,"type"),valueComparator:v(e,"valueComparator")}}),A(()=>{var s;return t("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(s=r.default)==null?void 0:s.call(r)])}),{}}}),K=R({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...H(),...D()},"VSelectionControl");function $e(e){const u=me(J,void 0),{densityClasses:r}=ye(e),l=w(e,"modelValue"),n=i(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),d=i(()=>e.falseValue!==void 0?e.falseValue:!1),o=i(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=i({get(){const c=u?u.modelValue.value:l.value;return o.value?B(c).some(f=>e.valueComparator(f,n.value)):e.valueComparator(c,n.value)},set(c){if(e.readonly)return;const f=c?n.value:d.value;let V=f;o.value&&(V=c?[...B(l.value),f]:B(l.value).filter(y=>!e.valueComparator(y,n.value))),u?u.modelValue.value=V:l.value=V}}),{textColorClasses:s,textColorStyles:S}=Ve(i(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:I,backgroundColorStyles:b}=be(i(()=>a.value&&!e.error&&!e.disabled?e.color:e.baseColor)),g=i(()=>a.value?e.trueIcon:e.falseIcon);return{group:u,densityClasses:r,trueValue:n,falseValue:d,model:a,textColorClasses:s,textColorStyles:S,backgroundColorClasses:I,backgroundColorStyles:b,icon:g}}const W=x()({name:"VSelectionControl",directives:{Ripple:ie},inheritAttrs:!1,props:K(),emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:r,slots:l}=u;const{group:n,densityClasses:d,icon:o,model:a,textColorClasses:s,textColorStyles:S,backgroundColorClasses:I,backgroundColorStyles:b,trueValue:g}=$e(e),c=F(),f=L(!1),V=L(!1),y=de(),k=i(()=>e.id||`input-${c}`),U=i(()=>!e.disabled&&!e.readonly);n==null||n.onForceUpdate(()=>{y.value&&(y.value.checked=a.value)});function $(C){U.value&&(f.value=!0,Ce(C.target,":focus-visible")!==!1&&(V.value=!0))}function p(){f.value=!1,V.value=!1}function Z(C){C.stopPropagation()}function ee(C){if(!U.value){y.value&&(y.value.checked=a.value);return}e.readonly&&n&&ge(()=>n.forceUpdate()),a.value=C.target.checked}return A(()=>{var N,E;const C=l.label?l.label({label:e.label,props:{for:k.value}}):e.label,[le,ae]=Q(r),O=t("input",h({ref:y,checked:a.value,disabled:!!e.disabled,id:k.value,onBlur:p,onFocus:$,onInput:ee,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:g.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},ae),null);return t("div",h({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":f.value,"v-selection-control--focus-visible":V.value,"v-selection-control--inline":e.inline},d.value,e.class]},le,{style:e.style}),[t("div",{class:["v-selection-control__wrapper",s.value],style:S.value},[(N=l.default)==null?void 0:N.call(l,{backgroundColorClasses:I,backgroundColorStyles:b}),ce(t("div",{class:["v-selection-control__input"]},[((E=l.input)==null?void 0:E.call(l,{model:a,textColorClasses:s,textColorStyles:S,backgroundColorClasses:I,backgroundColorStyles:b,inputNode:O,icon:o.value,props:{onFocus:$,onBlur:p,id:k.value}}))??t(T,null,[o.value&&t(ve,{key:"icon",icon:o.value},null),O])]),[[fe("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),C&&t(Y,{for:k.value,onClick:Z},{default:()=>[C]})])}),{isFocused:f,input:y}}}),pe=R({...K({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),Oe=x()({name:"VRadio",props:pe(),setup(e,u){let{slots:r}=u;return A(()=>t(W,h(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),r)),{}}}),Ne=R({height:{type:[Number,String],default:"auto"},...Fe(),...Se(D(),["multiple"]),trueIcon:{type:P,default:"$radioOn"},falseIcon:{type:P,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),Ee=x()({name:"VRadioGroup",inheritAttrs:!1,props:Ne(),emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:r,slots:l}=u;const n=F(),d=i(()=>e.id||`radio-group-${n}`),o=w(e,"modelValue");return A(()=>{const[a,s]=Q(r),S=z.filterProps(e),I=W.filterProps(e),b=l.label?l.label({label:e.label,props:{for:d.value}}):e.label;return t(z,h({class:["v-radio-group",e.class],style:e.style},a,S,{modelValue:o.value,"onUpdate:modelValue":g=>o.value=g,id:d.value}),{...l,default:g=>{let{id:c,messagesId:f,isDisabled:V,isReadonly:y}=g;return t(T,null,[b&&t(Y,{id:c.value},{default:()=>[b]}),t(Ue,h(I,{id:c.value,"aria-describedby":f.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:V.value,readonly:y.value,"aria-labelledby":b?c.value:void 0,multiple:!1},s,{modelValue:o.value,"onUpdate:modelValue":k=>o.value=k}),l)])}})}),{}}}),X=e=>(xe("data-v-ea60cbe8"),e=e(),Ae(),e),Le=X(()=>m("h1",{class:"text-center"},"鈴聲設定",-1)),qe=X(()=>m("thead",null,[m("tr",null,[m("th",null,"名稱"),m("th",null,"試聽"),m("th",null,"選擇")])],-1)),je=["src"],Me={__name:"settings",setup(e){const u=Be(),{alarms:r,selectedAlarm:l}=Ie(u);return(n,d)=>(G(),ke(_e,null,{default:_(()=>[t(we,null,{default:_(()=>[t(M,{cols:"12"},{default:_(()=>[Le]),_:1}),t(M,{cols:"12"},{default:_(()=>[t(Te,null,{default:_(()=>[qe,m("tbody",null,[(G(!0),q(T,null,he(j(r),o=>(G(),q("tr",{key:o.id},[m("td",null,Re(o.name),1),m("td",null,[m("audio",{src:o.file,controls:""},null,8,je)]),m("td",null,[t(Ee,{modelValue:j(l),"onUpdate:modelValue":d[0]||(d[0]=a=>Pe(l)?l.value=a:null)},{default:_(()=>[t(Oe,{value:o.id},null,8,["value"])]),_:2},1032,["modelValue"])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}},Ke=Ge(Me,[["__scopeId","data-v-ea60cbe8"]]);export{Ke as default};
