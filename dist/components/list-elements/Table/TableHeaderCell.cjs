"use strict";var e=require("tslib"),t=require("react"),r=require("../../../lib/tremorTwMerge.cjs"),a=require("../../../lib/utils.cjs");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=l(t);const n=a.makeClassName("TableHeaderCell"),o=s.default.forwardRef(((t,a)=>{const{children:l,className:o}=t,c=e.__rest(t,["children","className"]);return s.default.createElement(s.default.Fragment,null,s.default.createElement("th",Object.assign({ref:a,className:r.tremorTwMerge(n("root"),"whitespace-nowrap text-left font-semibold top-0 px-4 py-3.5","text-tremor-content-strong","dark:text-dark-tremor-content-strong",o)},c),l))}));o.displayName="TableHeaderCell",module.exports=o;