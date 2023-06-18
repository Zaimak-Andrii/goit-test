import{a as x,b as P,c as q,j as a,d as D,r as H,e as M,u as I,R as U,f as B,g as G,L as K,h as W,n as J}from"./index-93adbd6b.js";import{s as k}from"./styles.module-4dbb28c5.js";function N(e=x){const n=e===x?P:q(e);return function(){const{store:r}=n();return r}}const Q=N();function V(e=x){const n=e===x?Q:N(e);return function(){return n().dispatch}}const X=V();var y="NOT_FOUND";function Y(e){var n;return{get:function(r){return n&&e(n.key,r)?n.value:y},put:function(r,c){n={key:r,value:c}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}function Z(e,n){var t=[];function r(i){var o=t.findIndex(function(u){return n(i,u.key)});if(o>-1){var l=t[o];return o>0&&(t.splice(o,1),t.unshift(l)),l.value}return y}function c(i,o){r(i)===y&&(t.unshift({key:i,value:o}),t.length>e&&t.pop())}function s(){return t}function d(){t=[]}return{get:r,put:c,getEntries:s,clear:d}}var ee=function(n,t){return n===t};function te(e){return function(t,r){if(t===null||r===null||t.length!==r.length)return!1;for(var c=t.length,s=0;s<c;s++)if(!e(t[s],r[s]))return!1;return!0}}function ne(e,n){var t=typeof n=="object"?n:{equalityCheck:n},r=t.equalityCheck,c=r===void 0?ee:r,s=t.maxSize,d=s===void 0?1:s,i=t.resultEqualityCheck,o=te(c),l=d===1?Y(o):Z(d,o);function u(){var f=l.get(arguments);if(f===y){if(f=e.apply(null,arguments),i){var p=l.getEntries(),v=p.find(function(h){return i(h.value,f)});v&&(f=v.value)}l.put(arguments,f)}return f}return u.clearCache=function(){return l.clear()},u}function re(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every(function(r){return typeof r=="function"})){var t=n.map(function(r){return typeof r=="function"?"function "+(r.name||"unnamed")+"()":typeof r}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function ae(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var c=function(){for(var d=arguments.length,i=new Array(d),o=0;o<d;o++)i[o]=arguments[o];var l=0,u,f={memoizeOptions:void 0},p=i.pop();if(typeof p=="object"&&(f=p,p=i.pop()),typeof p!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof p+"]");var v=f,h=v.memoizeOptions,j=h===void 0?t:h,L=Array.isArray(j)?j:[j],w=re(i),C=e.apply(void 0,[function(){return l++,p.apply(null,arguments)}].concat(L)),S=e(function(){for(var b=[],O=w.length,_=0;_<O;_++)b.push(w[_].apply(null,arguments));return u=C.apply(null,b),u});return Object.assign(S,{resultFunc:p,memoizedResultFunc:C,dependencies:w,lastResult:function(){return u},recomputations:function(){return l},resetRecomputations:function(){return l=0}}),S};return c}var se=ae(ne);const $=({children:e,onClick:n,isActive:t=!1})=>a.jsx("button",{className:[k.button,k[`button--${t?"active":"normal"}`]].join(" "),type:"button",onClick:n,children:e}),A=X,g=D,oe=e=>e.tweets.list,T=e=>e.tweets.filter,z=e=>e.tweets.followed,ce=e=>e.tweets.pagination,ie=e=>e.tweets.status==="pending",le=se([oe,T,z,ce],(e,n,t,{page:r,limit:c})=>{let s=[];switch(n){case"follow":s=e.filter(d=>!t.includes(d.id));break;case"following":s=e.filter(d=>t.includes(d.id));break;default:s=e}return{list:s.slice(0,r*c),page:r,totalPages:Math.ceil(s.length/c)}}),ue=["all","follow","following"],de="_container_xminn_1",fe="_description_xminn_27",pe="_text_xminn_35",ve="_avatar_xminn_44",F={container:de,description:fe,text:pe,"avatar-container":"_avatar-container_xminn_44",avatar:ve},he="_text_vm574_1",me={text:he},R=({count:e,text:n})=>a.jsx("p",{className:me.text,children:`${e.toLocaleString()} ${n}`}),ge="_avatar_10rjz_1",E={"avatar-container":"_avatar-container_10rjz_1",avatar:ge},xe=({src:e,alt:n})=>a.jsx("div",{className:E["avatar-container"],children:a.jsx("img",{className:E.avatar,src:e,alt:n,loading:"lazy"})}),ye=({info:e,isFollowed:n=!1})=>{const t=A(),r=()=>{t((n?H:M)(e.id))};return a.jsxs("article",{className:F.container,children:[a.jsx(xe,{src:e.avatar,alt:e.user}),a.jsxs("div",{className:F.description,children:[a.jsx(R,{count:e.tweets,text:"tweets"}),a.jsx(R,{count:e.followers+(n?1:0),text:"followers"})]}),a.jsx($,{onClick:r,isActive:n,children:n?"Following":"Follow"})]})},je="_list_a63dg_1",we={list:je},_e=({tweets:e})=>{const n=g(z);return a.jsx(a.Fragment,{children:e.length>0?a.jsx("ul",{className:we.list,children:e.map(t=>a.jsx("li",{children:a.jsx(ye,{info:t,isFollowed:n.includes(t.id)})},t.id))}):a.jsx("h2",{children:"No tweets..."})})},be=()=>{var l;const e=I(),n=((l=e==null?void 0:e.state)==null?void 0:l.from)??U.MAIN,t=A(),r=g(T),c=g(ie),{list:s,page:d,totalPages:i}=g(le),o=()=>{t(J())};return B.useEffect(()=>{t(G())},[t]),a.jsxs("section",{children:[a.jsx(K,{to:n,children:"← Go Back"}),c?a.jsx("h2",{children:"Loading..."}):a.jsxs(a.Fragment,{children:[a.jsx("select",{style:{display:"block",margin:"30px auto 0"},value:r,onChange:u=>{t(W(u.target.value))},children:ue.map(u=>a.jsx("option",{value:u,children:u},u))}),a.jsx(_e,{tweets:s}),d<i&&a.jsx($,{onClick:o,isActive:!0,children:"Load more"})]})]})};export{be as default};