(this["webpackJsonprandom-quotes"]=this["webpackJsonprandom-quotes"]||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n(1),s=n.n(o),a=n(4),i=n.n(a),r=(n(10),n(2)),l=(n(11),function(t){return Object(c.jsxs)("div",{style:t.style,className:"text",children:[Object(c.jsxs)("span",{id:"text",children:[Object(c.jsx)("i",{className:"fas fa-quote-left"}),t.content]}),Object(c.jsxs)("p",{id:"author",children:["- ",t.author]})]})}),u=function(t){return Object(c.jsx)("button",{disabled:t.disabled,style:t.style,className:"button",id:"new-quote",onClick:t.onclick,children:t.text})},j=function(t){return Object(c.jsx)("a",{style:t.style,className:"link",id:"tweet-quote",target:"_blank",rel:"noreferrer",href:"http://twitter.com/intent/tweet",children:Object(c.jsx)("i",{className:"fab fa-twitter"})})};var b=function(){var t=Object(o.useState)(""),e=Object(r.a)(t,2),n=e[0],s=e[1],a=Object(o.useState)(null),i=Object(r.a)(a,2),b=i[0],d=i[1],h=Object(o.useState)("0"),f=Object(r.a)(h,2),O=f[0],x=f[1],m=Object(o.useState)(!0),p=Object(r.a)(m,2),y=p[0],g=p[1],k=Object(o.useState)(["#E74B3C","#9B59B6","#342224","#77B1A9","#FB6964","#2C3E50","#BDBB99","#472E32","#73A857","#F39C12"]),v=Object(r.a)(k,2),B=v[0],C=(v[1],function(){fetch("https://api.quotable.io/random").then((function(t){return t.json()})).then((function(t){s(t),x("1"),g(!1)})).catch((function(t){console.log(t)}))}),w=function(){return Math.floor(Math.random()*B.length)};return Object(o.useEffect)((function(){C(),d(w())}),[]),Object(c.jsxs)("div",{style:{backgroundColor:B[b],color:B[b]},className:"container",children:[Object(c.jsx)("h1",{id:"header",children:"Random Quotes Generator"}),Object(c.jsxs)("div",{className:"quote-box",id:"quote-box",children:[Object(c.jsx)(l,{style:{opacity:O},content:n.content,author:n.author}),Object(c.jsxs)("div",{className:"link-container",children:[Object(c.jsx)(j,{style:{backgroundColor:B[b]}}),Object(c.jsx)(u,{disabled:y,style:{backgroundColor:B[b]},onclick:function(){setTimeout((function(){C()}),375);d(w()),x("0"),g(!0)},text:"New Quote"})]})]}),Object(c.jsx)("footer",{style:{color:"white",fontSize:"11px",marginTop:"13px"},id:"footer",children:"by Paolo Provveduto"})]})},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),o(t),s(t),a(t)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),d()}},[[12,1,2]]]);
//# sourceMappingURL=main.e45d7fde.chunk.js.map