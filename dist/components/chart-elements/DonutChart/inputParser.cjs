"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../../lib/constants.cjs"),r=require("../../../lib/theme.cjs");require("../../../lib/tremorTwMerge.cjs");var s=require("../../../lib/utils.cjs");exports.parseData=(a,l)=>a.map(((a,t)=>{const o=t<l.length?l[t]:e.BaseColors.Gray;return Object.assign(Object.assign({},a),{color:o,className:s.getColorClassNames(null!=o?o:e.BaseColors.Gray,r.colorPalette.background).fillColor,fill:""})})),exports.parseLabelInput=(e,r,a,l)=>e||r(((e,r)=>s.sumNumericArray(e.map((e=>e[r]))))(a,l));