(this.webpackJsonpcryptotrackerapp=this.webpackJsonpcryptotrackerapp||[]).push([[0],{19:function(e,c,t){},20:function(e,c,t){},40:function(e,c,t){"use strict";t.r(c);var n=t(2),a=t.n(n),s=t(13),r=t.n(s),i=(t(19),t(4)),o=(t(20),t(14)),l=t.n(o),j=t.p+"static/media/Rectangle.09c6b59f.png",u=t(0);var d=function(){var e=Object(n.useState)([]),c=Object(i.a)(e,2),t=c[0],a=c[1],s=Object(n.useState)(""),r=Object(i.a)(s,2),o=r[0],d=r[1];Object(n.useEffect)((function(){setInterval((function(){l.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=250&page=1&sparkline=false").then((function(e){a(e.data)})).catch((function(e){console.log(e)}))}),1e3)}),[]);var p=t.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("div",{className:"coinsearch",children:[Object(u.jsx)("img",{className:"rectangle",src:j}),Object(u.jsx)("h1",{className:"currencyh1",children:"Select your Currency"}),Object(u.jsx)("form",{children:Object(u.jsx)("input",{type:"text",placeholder:"Search",className:"cointext  button1",onChange:function(e){d(e.target.value)}})})]}),Object(u.jsx)("div",{className:"coinmain",children:p.map((function(e){return Object(u.jsx)("div",{className:"coincontainer",children:Object(u.jsxs)("div",{className:"coinbar",children:[Object(u.jsx)("div",{className:"coinh1",children:e.name}),Object(u.jsxs)("div",{children:[" ",Object(u.jsxs)("p",{children:[" INR.",e.current_price]})]}),Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:"image",src:e.image})})]})})}))})]})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(c){var t=c.getCLS,n=c.getFID,a=c.getFCP,s=c.getLCP,r=c.getTTFB;t(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),p()}},[[40,1,2]]]);
//# sourceMappingURL=main.24d56f99.chunk.js.map