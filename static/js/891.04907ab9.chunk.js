(self.webpackChunkreact_bootstrap=self.webpackChunkreact_bootstrap||[]).push([[891],{4140:(e,t,s)=>{"use strict";s.d(t,{Am:()=>n,Ay:()=>l});var a=s(5043),o=s(579);const r=["as","disabled"];function n(e){let{tagName:t,disabled:s,href:a,target:o,rel:r,role:n,onClick:c,tabIndex:l=0,type:i}=e;t||(t=null!=a||null!=o||null!=r?"a":"button");const d={tagName:t};if("button"===t)return[{type:i||"button",disabled:s},d];const f=e=>{(s||"a"===t&&function(e){return!e||"#"===e.trim()}(a))&&e.preventDefault(),s?e.stopPropagation():null==c||c(e)};return"a"===t&&(a||(a="#"),s&&(a=void 0)),[{role:null!=n?n:"button",disabled:void 0,tabIndex:s?void 0:l,href:a,target:"a"===t?o:void 0,"aria-disabled":s||void 0,rel:"a"===t?r:void 0,onClick:f,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),f(e))}},d]}const c=a.forwardRef(((e,t)=>{let{as:s,disabled:a}=e,c=function(e,t){if(null==e)return{};var s,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||(o[s]=e[s]);return o}(e,r);const[l,{tagName:i}]=n(Object.assign({tagName:s,disabled:a},c));return(0,o.jsx)(i,Object.assign({},c,l,{ref:t}))}));c.displayName="Button";const l=c},1497:(e,t,s)=>{"use strict";var a=s(3218);function o(){}function r(){}r.resetWarningCache=o,e.exports=function(){function e(e,t,s,o,r,n){if(n!==a){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:o};return s.PropTypes=s,s}},5173:(e,t,s)=>{e.exports=s(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4282:(e,t,s)=>{"use strict";s.d(t,{A:()=>d});var a=s(8139),o=s.n(a),r=s(5043),n=s(4140),c=s(7852),l=s(579);const i=r.forwardRef(((e,t)=>{let{as:s,bsPrefix:a,variant:r="primary",size:i,active:d=!1,disabled:f=!1,className:u,...m}=e;const p=(0,c.oU)(a,"btn"),[b,{tagName:x}]=(0,n.Am)({tagName:s,disabled:f,...m}),y=x;return(0,l.jsx)(y,{...b,...m,ref:t,disabled:f,className:o()(u,p,d&&"active",r&&"".concat(p,"-").concat(r),i&&"".concat(p,"-").concat(i),m.href&&f&&"disabled")})}));i.displayName="Button";const d=i},8602:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var a=s(8139),o=s.n(a),r=s(5043),n=s(7852),c=s(579);const l=r.forwardRef(((e,t)=>{const[{className:s,...a},{as:r="div",bsPrefix:l,spans:i}]=function(e){let{as:t,bsPrefix:s,className:a,...r}=e;s=(0,n.oU)(s,"col");const c=(0,n.gy)(),l=(0,n.Jm)(),i=[],d=[];return c.forEach((e=>{const t=r[e];let a,o,n;delete r[e],"object"===typeof t&&null!=t?({span:a,offset:o,order:n}=t):a=t;const c=e!==l?"-".concat(e):"";a&&i.push(!0===a?"".concat(s).concat(c):"".concat(s).concat(c,"-").concat(a)),null!=n&&d.push("order".concat(c,"-").concat(n)),null!=o&&d.push("offset".concat(c,"-").concat(o))})),[{...r,className:o()(a,...i,...d)},{as:t,bsPrefix:s,spans:i}]}(e);return(0,c.jsx)(r,{...a,ref:t,className:o()(s,!i.length&&l)})}));l.displayName="Col";const i=l},2663:(e,t,s)=>{"use strict";s.d(t,{Tj:()=>o,jJ:()=>r,mf:()=>n});var a=s(5043);function o(e,t){let s=0;return a.Children.map(e,(e=>a.isValidElement(e)?t(e,s++):e))}function r(e,t){let s=0;a.Children.forEach(e,(e=>{a.isValidElement(e)&&t(e,s++)}))}function n(e,t){return a.Children.toArray(e).some((e=>a.isValidElement(e)&&e.type===t))}},5296:(e,t,s)=>{"use strict";s.d(t,{A:()=>d});var a=s(8139),o=s.n(a),r=s(5043),n=s(1433),c=s(7852),l=s(579);const i=r.forwardRef(((e,t)=>{let{bsPrefix:s,className:a,children:r,controlId:i,label:d,...f}=e;return s=(0,c.oU)(s,"form-floating"),(0,l.jsxs)(n.A,{ref:t,className:o()(a,s),controlId:i,...f,children:[r,(0,l.jsx)("label",{htmlFor:i,children:d})]})}));i.displayName="FloatingLabel";const d=i},3502:(e,t,s)=>{"use strict";s.d(t,{A:()=>z});var a=s(8139),o=s.n(a),r=s(5173),n=s.n(r),c=s(5043),l=s(579);const i={type:n().string,tooltip:n().bool,as:n().elementType},d=c.forwardRef(((e,t)=>{let{as:s="div",className:a,type:r="valid",tooltip:n=!1,...c}=e;return(0,l.jsx)(s,{...c,ref:t,className:o()(a,"".concat(r,"-").concat(n?"tooltip":"feedback"))})}));d.displayName="Feedback",d.propTypes=i;const f=d;var u=s(1068),m=s(5673),p=s(7852);const b=c.forwardRef(((e,t)=>{let{bsPrefix:s,className:a,htmlFor:r,...n}=e;const{controlId:i}=(0,c.useContext)(m.A);return s=(0,p.oU)(s,"form-check-label"),(0,l.jsx)("label",{...n,ref:t,htmlFor:r||i,className:o()(a,s)})}));b.displayName="FormCheckLabel";const x=b;var y=s(2663);const h=c.forwardRef(((e,t)=>{let{id:s,bsPrefix:a,bsSwitchPrefix:r,inline:n=!1,reverse:i=!1,disabled:d=!1,isValid:b=!1,isInvalid:h=!1,feedbackTooltip:v=!1,feedback:N,feedbackType:j,className:g,style:w,title:A="",type:k="checkbox",label:I,children:C,as:R="input",...P}=e;a=(0,p.oU)(a,"form-check"),r=(0,p.oU)(r,"form-switch");const{controlId:F}=(0,c.useContext)(m.A),T=(0,c.useMemo)((()=>({controlId:s||F})),[F,s]),O=!C&&null!=I&&!1!==I||(0,y.mf)(C,x),U=(0,l.jsx)(u.A,{...P,type:"switch"===k?"checkbox":k,ref:t,isValid:b,isInvalid:h,disabled:d,as:R});return(0,l.jsx)(m.A.Provider,{value:T,children:(0,l.jsx)("div",{style:w,className:o()(g,O&&a,n&&"".concat(a,"-inline"),i&&"".concat(a,"-reverse"),"switch"===k&&r),children:C||(0,l.jsxs)(l.Fragment,{children:[U,O&&(0,l.jsx)(x,{title:A,children:I}),N&&(0,l.jsx)(f,{type:j,tooltip:v,children:N})]})})})}));h.displayName="FormCheck";const v=Object.assign(h,{Input:u.A,Label:x});s(6440);const N=c.forwardRef(((e,t)=>{let{bsPrefix:s,type:a,size:r,htmlSize:n,id:i,className:d,isValid:f=!1,isInvalid:u=!1,plaintext:b,readOnly:x,as:y="input",...h}=e;const{controlId:v}=(0,c.useContext)(m.A);return s=(0,p.oU)(s,"form-control"),(0,l.jsx)(y,{...h,type:a,size:n,ref:t,readOnly:x,id:i||v,className:o()(d,b?"".concat(s,"-plaintext"):s,r&&"".concat(s,"-").concat(r),"color"===a&&"".concat(s,"-color"),f&&"is-valid",u&&"is-invalid")})}));N.displayName="FormControl";const j=Object.assign(N,{Feedback:f}),g=c.forwardRef(((e,t)=>{let{className:s,bsPrefix:a,as:r="div",...n}=e;return a=(0,p.oU)(a,"form-floating"),(0,l.jsx)(r,{ref:t,className:o()(s,a),...n})}));g.displayName="FormFloating";const w=g;var A=s(1433),k=s(8602);const I=c.forwardRef(((e,t)=>{let{as:s="label",bsPrefix:a,column:r=!1,visuallyHidden:n=!1,className:i,htmlFor:d,...f}=e;const{controlId:u}=(0,c.useContext)(m.A);a=(0,p.oU)(a,"form-label");let b="col-form-label";"string"===typeof r&&(b="".concat(b," ").concat(b,"-").concat(r));const x=o()(i,a,n&&"visually-hidden",r&&b);return d=d||u,r?(0,l.jsx)(k.A,{ref:t,as:"label",className:x,htmlFor:d,...f}):(0,l.jsx)(s,{ref:t,className:x,htmlFor:d,...f})}));I.displayName="FormLabel";const C=I,R=c.forwardRef(((e,t)=>{let{bsPrefix:s,className:a,id:r,...n}=e;const{controlId:i}=(0,c.useContext)(m.A);return s=(0,p.oU)(s,"form-range"),(0,l.jsx)("input",{...n,type:"range",ref:t,className:o()(a,s),id:r||i})}));R.displayName="FormRange";const P=R,F=c.forwardRef(((e,t)=>{let{bsPrefix:s,size:a,htmlSize:r,className:n,isValid:i=!1,isInvalid:d=!1,id:f,...u}=e;const{controlId:b}=(0,c.useContext)(m.A);return s=(0,p.oU)(s,"form-select"),(0,l.jsx)("select",{...u,size:r,ref:t,className:o()(n,s,a&&"".concat(s,"-").concat(a),i&&"is-valid",d&&"is-invalid"),id:f||b})}));F.displayName="FormSelect";const T=F,O=c.forwardRef(((e,t)=>{let{bsPrefix:s,className:a,as:r="small",muted:n,...c}=e;return s=(0,p.oU)(s,"form-text"),(0,l.jsx)(r,{...c,ref:t,className:o()(a,s,n&&"text-muted")})}));O.displayName="FormText";const U=O,_=c.forwardRef(((e,t)=>(0,l.jsx)(v,{...e,ref:t,type:"switch"})));_.displayName="Switch";const E=Object.assign(_,{Input:v.Input,Label:v.Label});var S=s(5296);const L={_ref:n().any,validated:n().bool,as:n().elementType},V=c.forwardRef(((e,t)=>{let{className:s,validated:a,as:r="form",...n}=e;return(0,l.jsx)(r,{...n,ref:t,className:o()(s,a&&"was-validated")})}));V.displayName="Form",V.propTypes=L;const z=Object.assign(V,{Group:A.A,Control:j,Floating:w,Check:v,Switch:E,Label:C,Text:U,Range:P,Select:T,FloatingLabel:S.A})},1068:(e,t,s)=>{"use strict";s.d(t,{A:()=>d});var a=s(8139),o=s.n(a),r=s(5043),n=s(5673),c=s(7852),l=s(579);const i=r.forwardRef(((e,t)=>{let{id:s,bsPrefix:a,className:i,type:d="checkbox",isValid:f=!1,isInvalid:u=!1,as:m="input",...p}=e;const{controlId:b}=(0,r.useContext)(n.A);return a=(0,c.oU)(a,"form-check-input"),(0,l.jsx)(m,{...p,ref:t,type:d,id:s||b,className:o()(i,a,f&&"is-valid",u&&"is-invalid")})}));i.displayName="FormCheckInput";const d=i},5673:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});const a=s(5043).createContext({})},1433:(e,t,s)=>{"use strict";s.d(t,{A:()=>c});var a=s(5043),o=s(5673),r=s(579);const n=a.forwardRef(((e,t)=>{let{controlId:s,as:n="div",...c}=e;const l=(0,a.useMemo)((()=>({controlId:s})),[s]);return(0,r.jsx)(o.A.Provider,{value:l,children:(0,r.jsx)(n,{...c,ref:t})})}));n.displayName="FormGroup";const c=n},7994:(e,t,s)=>{"use strict";s.d(t,{A:()=>m});var a=s(8139),o=s.n(a),r=s(5043),n=s(7852),c=s(1068),l=s(9334),i=s(579);const d=r.forwardRef(((e,t)=>{let{className:s,bsPrefix:a,as:r="span",...c}=e;return a=(0,n.oU)(a,"input-group-text"),(0,i.jsx)(r,{ref:t,className:o()(s,a),...c})}));d.displayName="InputGroupText";const f=d,u=r.forwardRef(((e,t)=>{let{bsPrefix:s,size:a,hasValidation:c,className:d,as:f="div",...u}=e;s=(0,n.oU)(s,"input-group");const m=(0,r.useMemo)((()=>({})),[]);return(0,i.jsx)(l.A.Provider,{value:m,children:(0,i.jsx)(f,{ref:t,...u,className:o()(d,s,a&&"".concat(s,"-").concat(a),c&&"has-validation")})})}));u.displayName="InputGroup";const m=Object.assign(u,{Text:f,Radio:e=>(0,i.jsx)(f,{children:(0,i.jsx)(c.A,{type:"radio",...e})}),Checkbox:e=>(0,i.jsx)(f,{children:(0,i.jsx)(c.A,{type:"checkbox",...e})})})},9334:(e,t,s)=>{"use strict";s.d(t,{A:()=>o});const a=s(5043).createContext(null);a.displayName="InputGroupContext";const o=a},1072:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var a=s(8139),o=s.n(a),r=s(5043),n=s(7852),c=s(579);const l=r.forwardRef(((e,t)=>{let{bsPrefix:s,className:a,as:r="div",...l}=e;const i=(0,n.oU)(s,"row"),d=(0,n.gy)(),f=(0,n.Jm)(),u="".concat(i,"-cols"),m=[];return d.forEach((e=>{const t=l[e];let s;delete l[e],null!=t&&"object"===typeof t?({cols:s}=t):s=t;const a=e!==f?"-".concat(e):"";null!=s&&m.push("".concat(u).concat(a,"-").concat(s))})),(0,c.jsx)(r,{ref:t,...l,className:o()(a,i,...m)})}));l.displayName="Row";const i=l},6440:e=>{"use strict";var t=function(){};e.exports=t}}]);
//# sourceMappingURL=891.04907ab9.chunk.js.map