"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[48],{6310:function(n,e,r){r.d(e,{Z:function(){return u},W:function(){return j}});var t=r(7294),s=r(6626),i=r(7126);var d=function({children:n,in:e,mountOnEnter:r,unmountOnExit:s}){const i=(0,t.useRef)(e);return(0,t.useEffect)((()=>{e&&(i.current=!0)}),[e]),e?n:s||!i.current&&r?null:n},l=r(5893);const o=["active","eventKey","mountOnEnter","transition","unmountOnExit","role"],c=["activeKey","getControlledId","getControllerId"],x=["as"];function h(n,e){if(null==n)return{};var r,t,s={},i=Object.keys(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||(s[r]=n[r]);return s}function j(n){let{active:e,eventKey:r,mountOnEnter:d,transition:l,unmountOnExit:x,role:j="tabpanel"}=n,a=h(n,o);const u=(0,t.useContext)(s.Z);if(!u)return[Object.assign({},a,{role:j}),{eventKey:r,isActive:e,mountOnEnter:d,transition:l,unmountOnExit:x}];const{activeKey:g,getControlledId:v,getControllerId:E}=u,b=h(u,c),m=(0,i.h)(r);return[Object.assign({},a,{role:j,id:v(r),"aria-labelledby":E(r)}),{eventKey:r,isActive:null==e&&null!=m?(0,i.h)(g)===m:e,transition:l||b.transition,mountOnEnter:null!=d?d:b.mountOnEnter,unmountOnExit:null!=x?x:b.unmountOnExit}]}const a=t.forwardRef(((n,e)=>{let{as:r="div"}=n,t=h(n,x);const[o,{isActive:c,onEnter:a,onEntering:u,onEntered:g,onExit:v,onExiting:E,onExited:b,mountOnEnter:m,unmountOnExit:f,transition:p=d}]=j(t);return(0,l.jsx)(s.Z.Provider,{value:null,children:(0,l.jsx)(i.Z.Provider,{value:null,children:(0,l.jsx)(p,{in:c,onEnter:a,onEntering:u,onEntered:g,onExit:v,onExiting:E,onExited:b,mountOnEnter:m,unmountOnExit:f,children:(0,l.jsx)(r,Object.assign({},o,{ref:e,hidden:!c,"aria-hidden":!c}))})})})}));a.displayName="TabPanel";var u=a},3916:function(n,e,r){var t=r(7294),s=r(5446),i=r(8831),d=r(6626),l=r(7126),o=r(6310),c=r(5893);const x=n=>{const{id:e,generateChildId:r,onSelect:o,activeKey:x,defaultActiveKey:h,transition:j,mountOnEnter:a,unmountOnExit:u,children:g}=n,[v,E]=(0,s.$c)(x,h,o),b=(0,i.gP)(e),m=(0,t.useMemo)((()=>r||((n,e)=>b?`${b}-${e}-${n}`:null)),[b,r]),f=(0,t.useMemo)((()=>({onSelect:E,activeKey:v,transition:j,mountOnEnter:a||!1,unmountOnExit:u||!1,getControlledId:n=>m(n,"tabpane"),getControllerId:n=>m(n,"tab")})),[E,v,j,a,u,m]);return(0,c.jsx)(d.Z.Provider,{value:f,children:(0,c.jsx)(l.Z.Provider,{value:E||null,children:g})})};x.Panel=o.Z,e.Z=x},4048:function(n,e,r){r.r(e);var t=r(5893),s=r(682),i=r(5509),d=r(3192),l=r(5147);e.default=function(){return(0,t.jsxs)(s.Z,{id:"Career",children:[(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)("h2",{children:"Career"}),(0,t.jsxs)(i.Z,{defaultActiveKey:"Education",id:"uncontrolled-tab-example",className:"mb-3",children:[(0,t.jsx)(d.Z,{eventKey:"Education",title:"Education",children:(0,t.jsx)(l.Z,{bordered:!0,hover:!0,responsive:!0,children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"School"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Country"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Major"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Degree"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Date"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"UC Berkeley"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"USA"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"EECS"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Ph.D."})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"1985.1-1989.7"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Fuller Seminary"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"USA"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Theology"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"M.A.T."})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"2003.1-2005.6"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"UC Santa Barbara"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"USA"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"ECS"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"M.S."})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"1983.9-1984.6"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"National Taiwan University"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Taiwan"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"EE"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"B.S."})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"1976.9-1980.6"})})]})]})})}),(0,t.jsx)(d.Z,{eventKey:"Experiences",title:"Experiences",children:(0,t.jsx)(l.Z,{bordered:!0,hover:!0,responsive:!0,children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Organization"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Department"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Title"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Date"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"National Tsing-Hua University"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Department of CS"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Professor"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"2006.2 \u2013 present"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"National Tsing-Hua University"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"College of EECS"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Visiting Professor"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"2005.6-8, 2004.7-8"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"GLC"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Corporate"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Director of Board"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"2005.6-present"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Nanostar Technology"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Corporate"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Board of Advisor"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"2004.6 \u2013 2008.12"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Spring Soft"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Corporate"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Consultant"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"2002.3 \u2013 2005.12"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Axis Systems"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Corporate"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Vice President"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"1997.1 \u2013 2001.4"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"ArcSys Inc."})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"R&D"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Director"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"1992.8 \u2013 1997.1"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"IBM"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Research Center"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Research Staff"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"1989.7 \u2013 1992.8"})})]})]})})}),(0,t.jsx)(d.Z,{eventKey:"CVS",title:"Community Voluntary Services",children:(0,t.jsx)(l.Z,{bordered:!0,hover:!0,responsive:!0,children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Organization"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Title"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Date"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"\u601d\u6e90\u6559\u80b2\u57fa\u91d1\u6703"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"\u8463\u4e8b\u9577"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"2007.11 \u2013 2010.10"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"\u82a5\u83dc\u7a2e\u6703"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"\u5e38\u52d9\u8463\u4e8b"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"2009.1~ present"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"\u4f73\u7f8e\u751f\u547d\u5efa\u9020\u5354\u6703"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"\u5e38\u52d9\u7406\u4e8b"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"2009.11~psresent"})})]})]})})})]})]})}},3192:function(n,e,r){r.d(e,{Z:function(){return u}});var t=r(5697),s=r.n(t),i=(r(7294),r(3916)),d=r(6101),l=r(5893);const o=({transition:n,...e})=>(0,l.jsx)(i.Z,{...e,transition:(0,d.Z)(n)});o.displayName="TabContainer";var c=o,x=r(8752),h=r(5103);const j={eventKey:s().oneOfType([s().string,s().number]),title:s().node.isRequired,disabled:s().bool,tabClassName:s().string,tabAttrs:s().object},a=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};a.propTypes=j;var u=Object.assign(a,{Container:c,Content:x.Z,Pane:h.Z})},8752:function(n,e,r){var t=r(6611);e.Z=(0,t.Z)("tab-content")},5103:function(n,e,r){var t=r(4184),s=r.n(t),i=r(7294),d=r(7126),l=r(6626),o=r(6310),c=r(6792),x=r(1068),h=r(6101),j=r(5893);const a=i.forwardRef((({bsPrefix:n,transition:e,...r},t)=>{const[{className:i,as:a="div",...u},{isActive:g,onEnter:v,onEntering:E,onEntered:b,onExit:m,onExiting:f,onExited:p,mountOnEnter:y,unmountOnExit:C,transition:O=x.Z}]=(0,o.W)({...r,transition:(0,h.Z)(e)}),Z=(0,c.vE)(n,"tab-pane");return(0,j.jsx)(l.Z.Provider,{value:null,children:(0,j.jsx)(d.Z.Provider,{value:null,children:(0,j.jsx)(O,{in:g,onEnter:v,onEntering:E,onEntered:b,onExit:m,onExiting:f,onExited:p,mountOnEnter:y,unmountOnExit:C,children:(0,j.jsx)(a,{...u,ref:t,className:s()(i,Z,g&&"active")})})})})}));a.displayName="TabPane",e.Z=a},5147:function(n,e,r){var t=r(4184),s=r.n(t),i=r(7294),d=r(6792),l=r(5893);const o=i.forwardRef((({bsPrefix:n,className:e,striped:r,bordered:t,borderless:i,hover:o,size:c,variant:x,responsive:h,...j},a)=>{const u=(0,d.vE)(n,"table"),g=s()(e,u,x&&`${u}-${x}`,c&&`${u}-${c}`,r&&`${u}-striped`,t&&`${u}-bordered`,i&&`${u}-borderless`,o&&`${u}-hover`),v=(0,l.jsx)("table",{...j,className:g,ref:a});if(h){let n=`${u}-responsive`;return"string"===typeof h&&(n=`${n}-${h}`),(0,l.jsx)("div",{className:n,children:v})}return v}));e.Z=o},5509:function(n,e,r){r(7294);var t=r(5446),s=r(3916),i=r(6122),d=r(4691),l=r(1244),o=r(8752),c=r(5103),x=r(3439),h=r(6101),j=r(5893);function a(n){let e;return(0,x.Ed)(n,(n=>{null==e&&(e=n.props.eventKey)})),e}function u(n){const{title:e,eventKey:r,disabled:t,tabClassName:s,tabAttrs:i,id:o}=n.props;return null==e?null:(0,j.jsx)(l.Z,{as:"li",role:"presentation",children:(0,j.jsx)(d.Z,{as:"button",type:"button",eventKey:r,disabled:t,id:o,className:s,...i,children:e})})}const g=n=>{const{id:e,onSelect:r,transition:d,mountOnEnter:l,unmountOnExit:g,children:v,activeKey:E=a(v),...b}=(0,t.Ch)(n,{activeKey:"onSelect"});return(0,j.jsxs)(s.Z,{id:e,activeKey:E,onSelect:r,transition:(0,h.Z)(d),mountOnEnter:l,unmountOnExit:g,children:[(0,j.jsx)(i.Z,{...b,role:"tablist",as:"ul",children:(0,x.UI)(v,u)}),(0,j.jsx)(o.Z,{children:(0,x.UI)(v,(n=>{const e={...n.props};return delete e.title,delete e.disabled,delete e.tabClassName,delete e.tabAttrs,(0,j.jsx)(c.Z,{...e})}))})]})};g.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},g.displayName="Tabs",e.Z=g},6101:function(n,e,r){r.d(e,{Z:function(){return s}});var t=r(1068);function s(n){return"boolean"===typeof n?n?t.Z:void 0:n}}}]);