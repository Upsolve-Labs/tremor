'use client';
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("../../util-elements/Tooltip/Tooltip.cjs"),o=require("react"),r=require("react-transition-state"),i=require("../../../lib/constants.cjs"),n=require("../../../lib/tremorTwMerge.cjs"),s=require("../../../lib/utils.cjs"),a=require("../../../assets/LoadingSpinner.cjs"),l=require("./styles.cjs");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=u(o);const d=s.makeClassName("Button"),m=({loading:e,iconSize:t,iconPosition:o,Icon:r,needMargin:s,transitionStatus:l})=>{const u=s?o===i.HorizontalPositions.Left?n.tremorTwMerge("-ml-1","mr-1.5"):n.tremorTwMerge("-mr-1","ml-1.5"):"",m=n.tremorTwMerge("w-0 h-0"),g={default:m,entering:m,entered:t,exiting:t,exited:m};return e?c.default.createElement(a,{className:n.tremorTwMerge(d("icon"),"animate-spin shrink-0",u,g.default,g[l]),style:{transition:"width 150ms"}}):c.default.createElement(r,{className:n.tremorTwMerge(d("icon"),"shrink-0",t,u)})},g=c.default.forwardRef(((a,u)=>{const{icon:g,iconPosition:f=i.HorizontalPositions.Left,size:p=i.Sizes.SM,color:h,variant:w="primary",disabled:T,loading:M=!1,loadingText:b,children:x,tooltip:z,className:P}=a,S=e.__rest(a,["icon","iconPosition","size","color","variant","disabled","loading","loadingText","children","tooltip","className"]),C=g,j=M||T,B=void 0!==C||M,v=M&&b,q=!(!x&&!v),y=n.tremorTwMerge(l.iconSizes[p].height,l.iconSizes[p].width),E="light"!==w?n.tremorTwMerge("rounded-tremor-default border","shadow-tremor-input","dark:shadow-dark-tremor-input"):"",N=l.getButtonColors(w,h),k=l.getButtonProportions(w)[p],{tooltipProps:R,getReferenceProps:H}=t.useTooltip(300),[I,O]=r.useTransition({timeout:50});return o.useEffect((()=>{O(M)}),[M]),c.default.createElement("button",Object.assign({ref:s.mergeRefs([u,R.refs.setReference]),className:n.tremorTwMerge(d("root"),"shrink-0 inline-flex justify-center items-center group font-medium outline-none",E,k.paddingX,k.paddingY,k.fontSize,N.textColor,N.bgColor,N.borderColor,N.hoverBorderColor,j?"opacity-50 cursor-not-allowed":n.tremorTwMerge(l.getButtonColors(w,h).hoverTextColor,l.getButtonColors(w,h).hoverBgColor,l.getButtonColors(w,h).hoverBorderColor),P),disabled:j},H,S),c.default.createElement(t.default,Object.assign({text:z},R)),B&&f!==i.HorizontalPositions.Right?c.default.createElement(m,{loading:M,iconSize:y,iconPosition:f,Icon:C,transitionStatus:I.status,needMargin:q}):null,v||x?c.default.createElement("span",{className:n.tremorTwMerge(d("text"),"text-tremor-default whitespace-nowrap")},v?b:x):null,B&&f===i.HorizontalPositions.Right?c.default.createElement(m,{loading:M,iconSize:y,iconPosition:f,Icon:C,transitionStatus:I.status,needMargin:q}):null)}));g.displayName="Button",exports.ButtonIconOrSpinner=m,exports.default=g;