"use strict";(self.webpackChunkorto_ui=self.webpackChunkorto_ui||[]).push([[707],{8707:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var c=n(7294),r=n(7809),a=n(4342),o=n(3415),u=n(7802),l=n(4858),i=n(9995),f=n(5877);const s=({text:e})=>c.createElement(f.Z,{onClick:()=>{return t=void 0,n=void 0,r=function*(){yield navigator.clipboard.writeText(e),alert("Text copied")},new((c=void 0)||(c=Promise))((function(e,a){function o(e){try{l(r.next(e))}catch(e){a(e)}}function u(e){try{l(r.throw(e))}catch(e){a(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(o,u)}l((r=r.apply(t,n||[])).next())}));var t,n,c,r}},"Copy");var v=n(2208),d=n(4009),p=n(2087);const h=()=>{const{account:e}=(0,v.Z)(),[t,n]=c.useState(["0","0"]),r=(0,p.D2)();return c.useEffect((()=>{var t,c,a,o;r&&e&&(t=void 0,c=void 0,o=function*(){const t=yield(0,d.ph)(r,e);n(t)},new((a=void 0)||(a=Promise))((function(e,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function u(e){try{l(o.throw(e))}catch(e){n(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(r,u)}l((o=o.apply(t,c||[])).next())})))}),[e,r]),t},E=()=>{const{account:e}=(0,r.Ge)(),[t,n]=h(),[f,v]=c.useState("");return c.useEffect((()=>{e&&v(`https://orto-ui.vercel.app/?ref=${e}`)}),[e]),c.createElement(i.Z,null,c.createElement(u.Z,{value:f,clearOnEscape:!0,endEnhancer:c.createElement(s,{text:f}),readOnly:!0}),c.createElement(a.Z,null,c.createElement(o.uT,null,c.createElement(l.iY,null,`Referrals: ${t}`),c.createElement(l.iY,null,`ORTO gained from referrals: ${n} USD`))))}}}]);