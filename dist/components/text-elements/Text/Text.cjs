"use strict";var e=require("../../../lib/theme.cjs"),t=require("../../../lib/tremorTwMerge.cjs"),r=require("../../../lib/utils.cjs");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(require("react"));const l=a.default.forwardRef(((o,l)=>{const{color:c,className:s,children:u}=o;return a.default.createElement("p",{ref:l,className:t.tremorTwMerge("text-tremor-default",c?r.getColorClassNames(c,e.colorPalette.text).textColor:t.tremorTwMerge("text-tremor-content","dark:text-dark-tremor-content"),s)},u)}));l.displayName="Text",module.exports=l;