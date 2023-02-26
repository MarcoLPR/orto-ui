"use strict";(self.webpackChunkorto_ui=self.webpackChunkorto_ui||[]).push([[350],{9995:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7294),i=n(7809),u=n(1360),s=n(4342),r=n(3415),p=n(7139),o=n(7866),y=n(4861);const l=()=>{const{login:e}=(0,o.Z)();return a.createElement(s.Z,{title:"Connect Wallet"},a.createElement(r.uT,null,a.createElement("p",null,"Connect your wallet to start using OnlyRise")),a.createElement(r.aU,null,a.createElement(p.Z,{onClick:()=>e(y.M.Injected)},"Connect Wallet")))},d=(0,u.zo)("div",{maxWidth:"1280px",margin:"25px auto"}),m=({children:e})=>{const{account:t}=(0,i.Ge)();return a.createElement(d,null,t?e:a.createElement(l,null))}},7139:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(5877);const i=(0,n(1360).zo)(a.Z,{width:"100%"})},3729:(e,t,n)=>{n.d(t,{BF:()=>u,NS:()=>i,ej:()=>a});const a="0x4feE70597cB170EDf8Dd26B03eb963E912dB9Dc9",i="0x0fAa4ab9097A0004dEeb48aB580B4EF76EeEBd65",u="0x62CC6bED64f9551e96a62853281a5157c3915d45"},2208:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),i=n(7809),u=n(7382);const s=()=>{const e=(0,i.Ge)(),{library:t,chainId:n}=e,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n}(e,["library","chainId"]),r=(0,a.useRef)(t),[p,o]=(0,a.useState)(t||u.J);return(0,a.useEffect)((()=>{t!==r.current&&(o(t||u.J),r.current=t)}),[t]),Object.assign({library:p,chainId:null!=n?n:97},s)}},2087:(e,t,n)=>{n.d(t,{m1:()=>d,D2:()=>l,DG:()=>m});var a=n(7294),i=n(2208),u=n(387),s=n(7382),r=n(3729),p=n(3324);const o=JSON.parse('[{"inputs":[],"name":"activateDeflation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"activatePayToReferrer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newInvestedFunds","type":"uint256"}],"name":"adjustInvestedFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_add","type":"address"}],"name":"moveToInvestedFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_orto","type":"address"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_investedFunds","type":"uint256"},{"internalType":"address","name":"_communityAddress","type":"address"},{"internalType":"address","name":"_platformAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountORTO","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountToken","type":"uint256"}],"name":"Buy","type":"event"},{"inputs":[{"internalType":"uint256","name":"_amounOrtotIn","type":"uint256"},{"internalType":"uint256","name":"_amountOutMin","type":"uint256"},{"internalType":"address","name":"_referrer","type":"address"}],"name":"buyOrto","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldPerShareAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newPerShareAmount","type":"uint256"}],"name":"ModifPerShare","type":"event"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"address","name":"_add","type":"address"}],"name":"moveTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_add","type":"address"}],"name":"moveTokensAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_recuperator","type":"address"}],"name":"newRecuperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"NewReferrer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"pauseBuy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pauseSell","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"returnFromInvestedFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountORTO","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountToken","type":"uint256"}],"name":"Sell","type":"event"},{"inputs":[{"internalType":"uint256","name":"_amountTokenIn","type":"uint256"},{"internalType":"uint256","name":"_amountOutMin","type":"uint256"}],"name":"sellOrto","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addressSyncContract","type":"address"}],"name":"setAddressSyncContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_adminAddress","type":"address"}],"name":"setAdminAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"SetAdminAddress","type":"event"},{"inputs":[{"internalType":"address","name":"_communityAddress","type":"address"}],"name":"setCommunityAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"SetCommunityAddress","type":"event"},{"inputs":[{"internalType":"uint256","name":"_communityFee","type":"uint256"}],"name":"setCommunityFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_decreaseFactor","type":"uint256"}],"name":"setDecreaseFactor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_platformAddress","type":"address"}],"name":"setPlatformAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_platformFee","type":"uint256"}],"name":"setPlatformAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"SetPlatformAddress","type":"event"},{"inputs":[{"internalType":"uint256","name":"_newReferrerFee","type":"uint256"}],"name":"setReferrerFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"bool","name":"_status","type":"bool"}],"name":"setWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"addressSyncContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"balanceORTO","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"balanceToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyActivated","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DECREASE_FACTOR_DENOMINATOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decreaseFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deflationActivated","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokens","type":"uint256"}],"name":"getAmountOrtoForTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ortoAmount","type":"uint256"}],"name":"getAmountTokensForOrto","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPenaltyRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPenaltyReduceByTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"getSalePenalty","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"investedFunds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"orto","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ortoPerShareAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ortoSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"payToReferrer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"platformAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"platformFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"recuperator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_preReserves","type":"uint256"},{"internalType":"uint256","name":"_preOrtoBal","type":"uint256"},{"internalType":"uint256","name":"_ortoAmount","type":"uint256"}],"name":"reductionAfterSwap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referrer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"referrerFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referringInfo","outputs":[{"internalType":"uint256","name":"received","type":"uint256"},{"internalType":"uint256","name":"referrers","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reserves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sellActivated","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"syncLP","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whiteList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]'),y=(e,t,n)=>{const a=null!=n?n:s.J;return new u.CH(t,e,a)},l=()=>{const{library:e}=(0,i.Z)();return(0,a.useMemo)((()=>{return e?(t=e.getSigner(),y(o,r.ej,t)):null;var t}),[e])},d=()=>{const{library:e}=(0,i.Z)();return(0,a.useMemo)((()=>{return e?(t=e.getSigner(),y(p,r.NS,t)):null;var t}),[e])},m=()=>{const{library:e}=(0,i.Z)();return(0,a.useMemo)((()=>{return e?(t=e.getSigner(),y(p,r.BF,t)):null;var t}),[e])}},4009:(e,t,n)=>{n.d(t,{Is:()=>f,Oe:()=>l,an:()=>o,cO:()=>m,l8:()=>r,lo:()=>d,ph:()=>y,pn:()=>c,q6:()=>p});var a=n(794),i=function(e,t,n,a){return new(n||(n=Promise))((function(i,u){function s(e){try{p(a.next(e))}catch(e){u(e)}}function r(e){try{p(a.throw(e))}catch(e){u(e)}}function p(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,r)}p((a=a.apply(e,t||[])).next())}))};const u=new a.Z(10).pow(18),s=e=>Number(e.toString()).toLocaleString("fullwide",{useGrouping:!1}),r=(e,t)=>i(void 0,void 0,void 0,(function*(){const n=s(new a.Z(t).times(u));try{const t=yield e.getAmountOrtoForTokens(n);return new a.Z(t.toString()).div(u).toString()}catch(e){return"0"}})),p=(e,t)=>i(void 0,void 0,void 0,(function*(){const n=s(new a.Z(t).times(u));try{const t=yield e.getAmountTokensForOrto(n),i=yield e.getSalePenalty(t);return[new a.Z(t.toString()).div(u).toString(),new a.Z(i.toString()).div(u).toString()]}catch(e){return["0","0"]}})),o=(e,t)=>i(void 0,void 0,void 0,(function*(){try{return yield e.referrer(t)}catch(e){return"0xcB978C0c28E7D6960dA5716D19A0cE44699a6301"}})),y=(e,t)=>i(void 0,void 0,void 0,(function*(){try{const n=yield e.referringInfo(t),i=new a.Z(n[0].toString()).div(u).toFixed(6);return[n[1],i]}catch(e){return["0","0"]}})),l=e=>i(void 0,void 0,void 0,(function*(){try{return(yield e.balanceORTO()).toString()}catch(e){return"0"}})),d=e=>i(void 0,void 0,void 0,(function*(){try{return(yield e.reserves()).toString()}catch(e){return"0"}})),m=e=>i(void 0,void 0,void 0,(function*(){try{return yield e.communityAddress()}catch(e){return"0"}})),c=(e,t,n)=>i(void 0,void 0,void 0,(function*(){const i=s(new a.Z(t).times(u)),r=s(new a.Z(n).times(u));try{return console.log(i.toString(),r.toString()),yield e.sellOrto(i,r)}catch(e){return console.log(e),!1}})),f=(e,t,n,r)=>i(void 0,void 0,void 0,(function*(){const i=s(new a.Z(t).times(u)),p=s(new a.Z(n).times(u));try{return yield e.buyOrto(i,p,r)}catch(e){return console.log(e),!1}}))},7382:(e,t,n)=>{n.d(t,{J:()=>a});const a=new(n(3901).c)("https://data-seed-prebsc-1-s2.binance.org:8545")},3324:e=>{e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')}}]);