(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[394],{6852:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(7294);function s(e){var n=function(e){var n=(0,r.useRef)(e);return n.current=e,n}(e);(0,r.useEffect)((function(){return function(){return n.current()}}),[])}},7424:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/pictures",function(){return t(2467)}])},2467:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return T}});var r=t(5893),s=(t(5675),t(8146)),c=t(7294);var a=function(e,n){var t=(0,c.useRef)(!0);(0,c.useEffect)((function(){if(!t.current)return e();t.current=!1}),n)},l=t(2029),u=t(6454),i=t(6852),o=Math.pow(2,31)-1;function d(e,n,t){var r=t-Date.now();e.current=r<=o?setTimeout(n,r):setTimeout((function(){return d(e,n,t)}),o)}function f(){var e=(0,u.Z)(),n=(0,c.useRef)();return(0,i.Z)((function(){return clearTimeout(n.current)})),(0,c.useMemo)((function(){var t=function(){return clearTimeout(n.current)};return{set:function(r,s){void 0===s&&(s=0),e()&&(t(),s<=o?n.current=setTimeout(r,s):d(n,r,Date.now()+s))},clear:t}}),[])}var v=t(3551),h=t(4184),p=t.n(h),m=t(5446),x=(0,t(6611).Z)("carousel-caption"),b=t(6792);const j=c.forwardRef((({as:e="div",bsPrefix:n,className:t,...s},c)=>{const a=p()(t,(0,b.vE)(n,"carousel-item"));return(0,r.jsx)(e,{ref:c,...s,className:a})}));j.displayName="CarouselItem";var N=j,g=t(3439),C=t(2646),w=t(4509),y=t(2785);const E={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,r.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,r.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};const k=c.forwardRef(((e,n)=>{const{as:t="div",bsPrefix:u,slide:i,fade:o,controls:d,indicators:h,indicatorLabels:x,activeIndex:j,onSelect:N,onSlide:E,onSlid:k,interval:I,keyboard:Z,onKeyDown:S,pause:T,onMouseOver:L,onMouseOut:$,wrap:_,touch:R,onTouchStart:M,onTouchMove:O,onTouchEnd:P,prevIcon:A,prevLabel:D,nextIcon:F,nextLabel:X,variant:U,className:K,children:V,...H}=(0,m.Ch)(e,{activeIndex:"onSelect"}),J=(0,b.vE)(u,"carousel"),q=(0,b.SC)(),z=(0,c.useRef)(null),[B,G]=(0,c.useState)("next"),[Q,W]=(0,c.useState)(!1),[Y,ee]=(0,c.useState)(!1),[ne,te]=(0,c.useState)(j||0);Y||j===ne||(z.current?G(z.current):G((j||0)>ne?"next":"prev"),i&&ee(!0),te(j||0)),(0,c.useEffect)((()=>{z.current&&(z.current=null)}));let re,se=0;(0,g.Ed)(V,((e,n)=>{++se,n===j&&(re=e.props.interval)}));const ce=(0,l.Z)(re),ae=(0,c.useCallback)((e=>{if(Y)return;let n=ne-1;if(n<0){if(!_)return;n=se-1}z.current="prev",null==N||N(n,e)}),[Y,ne,N,_,se]),le=(0,s.Z)((e=>{if(Y)return;let n=ne+1;if(n>=se){if(!_)return;n=0}z.current="next",null==N||N(n,e)})),ue=(0,c.useRef)();(0,c.useImperativeHandle)(n,(()=>({element:ue.current,prev:ae,next:le})));const ie=(0,s.Z)((()=>{!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;const n=getComputedStyle(e);return"none"!==n.display&&"hidden"!==n.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ue.current)&&(q?ae():le())})),oe="next"===B?"start":"end";a((()=>{i||(null==E||E(ne,oe),null==k||k(ne,oe))}),[ne]);const de=`${J}-item-${B}`,fe=`${J}-item-${oe}`,ve=(0,c.useCallback)((e=>{(0,w.Z)(e),null==E||E(ne,oe)}),[E,ne,oe]),he=(0,c.useCallback)((()=>{ee(!1),null==k||k(ne,oe)}),[k,ne,oe]),pe=(0,c.useCallback)((e=>{if(Z&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(q?le(e):ae(e));case"ArrowRight":return e.preventDefault(),void(q?ae(e):le(e))}null==S||S(e)}),[Z,S,ae,le,q]),me=(0,c.useCallback)((e=>{"hover"===T&&W(!0),null==L||L(e)}),[T,L]),xe=(0,c.useCallback)((e=>{W(!1),null==$||$(e)}),[$]),be=(0,c.useRef)(0),je=(0,c.useRef)(0),Ne=f(),ge=(0,c.useCallback)((e=>{be.current=e.touches[0].clientX,je.current=0,"hover"===T&&W(!0),null==M||M(e)}),[T,M]),Ce=(0,c.useCallback)((e=>{e.touches&&e.touches.length>1?je.current=0:je.current=e.touches[0].clientX-be.current,null==O||O(e)}),[O]),we=(0,c.useCallback)((e=>{if(R){const n=je.current;Math.abs(n)>40&&(n>0?ae(e):le(e))}"hover"===T&&Ne.set((()=>{W(!1)}),I||void 0),null==P||P(e)}),[R,T,ae,le,Ne,I,P]),ye=null!=I&&!Q&&!Y,Ee=(0,c.useRef)();(0,c.useEffect)((()=>{var e,n;if(!ye)return;const t=q?ae:le;return Ee.current=window.setInterval(document.visibilityState?ie:t,null!=(e=null!=(n=ce.current)?n:I)?e:void 0),()=>{null!==Ee.current&&clearInterval(Ee.current)}}),[ye,ae,le,ce,I,ie,q]);const ke=(0,c.useMemo)((()=>h&&Array.from({length:se},((e,n)=>e=>{null==N||N(n,e)}))),[h,se,N]);return(0,r.jsxs)(t,{ref:ue,...H,onKeyDown:pe,onMouseOver:me,onMouseOut:xe,onTouchStart:ge,onTouchMove:Ce,onTouchEnd:we,className:p()(K,J,i&&"slide",o&&`${J}-fade`,U&&`${J}-${U}`),children:[h&&(0,r.jsx)("div",{className:`${J}-indicators`,children:(0,g.UI)(V,((e,n)=>(0,r.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=x&&x.length?x[n]:`Slide ${n+1}`,className:n===ne?"active":void 0,onClick:ke?ke[n]:void 0,"aria-current":n===ne},n)))}),(0,r.jsx)("div",{className:`${J}-inner`,children:(0,g.UI)(V,((e,n)=>{const t=n===ne;return i?(0,r.jsx)(y.Z,{in:t,onEnter:t?ve:void 0,onEntered:t?he:void 0,addEndListener:C.Z,children:(n,r)=>c.cloneElement(e,{...r,className:p()(e.props.className,t&&"entered"!==n&&de,("entered"===n||"exiting"===n)&&"active",("entering"===n||"exiting"===n)&&fe)})}):c.cloneElement(e,{className:p()(e.props.className,t&&"active")})}))}),d&&(0,r.jsxs)(r.Fragment,{children:[(_||0!==j)&&(0,r.jsxs)(v.Z,{className:`${J}-control-prev`,onClick:ae,children:[A,D&&(0,r.jsx)("span",{className:"visually-hidden",children:D})]}),(_||j!==se-1)&&(0,r.jsxs)(v.Z,{className:`${J}-control-next`,onClick:le,children:[F,X&&(0,r.jsx)("span",{className:"visually-hidden",children:X})]})]})]})}));k.displayName="Carousel",k.defaultProps=E;var I=Object.assign(k,{Caption:x,Item:N}),Z=t(1447),S="100%",T=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(I,{id:"home",variant:"dark",children:[(0,r.jsxs)(I.Item,{style:{textAlign:"center"},children:[(0,r.jsx)(Z.Z,{children:(0,r.jsx)(Z.Z.Image,{width:"95%",height:S,alt:"First slide",src:"1.jpg"})}),(0,r.jsxs)(I.Caption,{style:{color:"white"},children:[(0,r.jsx)("h3",{children:"Logos Lab"}),(0,r.jsx)("p",{children:"- Creative, Productive, Joy and Fun -"})]})]}),(0,r.jsxs)(I.Item,{style:{textAlign:"center"},children:[(0,r.jsx)(Z.Z,{children:(0,r.jsx)(Z.Z.Image,{width:"95%",height:S,alt:"second slide",src:"2.jpg"})}),(0,r.jsxs)(I.Caption,{style:{color:"white"},children:[(0,r.jsx)("h3",{children:"Logos Lab"}),(0,r.jsx)("p",{children:"- The most creative, productive and exciting research lab \u2026 -"})]})]})]})})}},3439:function(e,n,t){"use strict";t.d(n,{UI:function(){return s},Ed:function(){return c}});var r=t(7294);function s(e,n){let t=0;return r.Children.map(e,(e=>r.isValidElement(e)?n(e,t++):e))}function c(e,n){let t=0;r.Children.forEach(e,(e=>{r.isValidElement(e)&&n(e,t++)}))}}},function(e){e.O(0,[244,25,774,888,179],(function(){return n=7424,e(e.s=n);var n}));var n=e.O();_N_E=n}]);