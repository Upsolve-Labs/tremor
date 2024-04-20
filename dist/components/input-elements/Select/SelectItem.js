'use client';
import{__rest as e}from"tslib";import t from"react";import{Listbox as r}from"@headlessui/react";import{tremorTwMerge as a}from"../../../lib/tremorTwMerge.js";import{makeClassName as o}from"../../../lib/utils.js";const c=o("SelectItem"),n=t.forwardRef(((o,n)=>{const{value:m,icon:s,className:i,children:l}=o,d=e(o,["value","icon","className","children"]),u=s;return t.createElement(r.Option,Object.assign({className:a(c("root"),"flex justify-start items-center cursor-default text-tremor-default px-2.5 py-2.5","ui-active:bg-tremor-background-muted  ui-active:text-tremor-content-strong ui-selected:text-tremor-content-strong ui-selected:bg-tremor-background-muted text-tremor-content-emphasis","dark:ui-active:bg-dark-tremor-background-muted  dark:ui-active:text-dark-tremor-content-strong dark:ui-selected:text-dark-tremor-content-strong dark:ui-selected:bg-dark-tremor-background-muted dark:text-dark-tremor-content-emphasis",i),ref:n,key:m,value:m},d),u&&t.createElement(u,{className:a(c("icon"),"flex-none w-5 h-5 mr-1.5","text-tremor-content-subtle","dark:text-dark-tremor-content-subtle")}),t.createElement("span",{className:"whitespace-nowrap truncate"},null!=l?l:m))}));n.displayName="SelectItem";export{n as default};