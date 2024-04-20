"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@floating-ui/react"),t=require("../../../lib/tremorTwMerge.cjs"),o=require("react");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=r(o);const a=({text:e,open:o,x:r,y:a,refs:i,strategy:l,getFloatingProps:n})=>o&&e?s.default.createElement("div",Object.assign({className:t.tremorTwMerge("max-w-xs text-sm z-20 rounded-tremor-default opacity-100 px-2.5 py-1 whitespace-nowrap","text-white bg-tremor-background-emphasis","text-white dark:bg-dark-tremor-background-subtle"),ref:i.setFloating,style:{position:l,top:null!=a?a:0,left:null!=r?r:0}},n()),e):null;a.displayName="Tooltip",exports.default=a,exports.useTooltip=t=>{const[r,s]=o.useState(!1),[a,i]=o.useState(),{x:l,y:n,refs:u,strategy:p,context:c}=e.useFloating({open:r,onOpenChange:e=>{if(e&&t){const o=setTimeout((()=>{s(e)}),t);i(o)}else clearTimeout(a),s(e)},placement:"top",whileElementsMounted:e.autoUpdate,middleware:[e.offset(5),e.flip({fallbackAxisSideDirection:"start"}),e.shift()]}),f=e.useHover(c,{move:!1}),g=e.useFocus(c),d=e.useDismiss(c),m=e.useRole(c,{role:"tooltip"}),{getReferenceProps:x,getFloatingProps:y}=e.useInteractions([f,g,d,m]);return{tooltipProps:{open:r,x:l,y:n,refs:u,strategy:p,getFloatingProps:y},getReferenceProps:x}};