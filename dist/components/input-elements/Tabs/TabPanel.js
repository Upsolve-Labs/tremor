'use client';
import{__rest as e}from"tslib";import"../../../contexts/BaseColorContext.js";import t from"../../../contexts/IndexContext.js";import"../../../contexts/RootStylesContext.js";import o from"../../../contexts/SelectedValueContext.js";import{tremorTwMerge as r}from"../../../lib/tremorTwMerge.js";import{makeClassName as s}from"../../../lib/utils.js";import a,{useContext as l}from"react";const m=s("TabPanel"),i=a.forwardRef(((s,i)=>{const{children:n,className:c}=s,d=e(s,["children","className"]),{selectedValue:f}=l(o),p=f===l(t);return a.createElement("div",Object.assign({ref:i,className:r(m("root"),"w-full mt-2",p?"":"hidden",c),"aria-selected":p?"true":"false"},d),n)}));i.displayName="TabPanel";export{i as default};