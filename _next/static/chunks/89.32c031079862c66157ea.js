(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[89],{hCQh:function(t,e,n){"use strict";n.r(e);var a=n("mXGw"),i=n.n(a),l=n("7/S+"),o=n("phF4"),r=n("zad5"),c=function(){var t=Object(o.f)();try{return Boolean(t.selection)&&""!==r.Editor.string(t,t.selection)}catch(e){return!1}},s=n("/QS1");e.default=function(t){var e=t.plugins,n=t.translations,r=c(),u=Object(a.useRef)(),f=Object(o.f)();return Object(a.useEffect)((function(){var t=u.current;if(r){var e=window.getSelection();try{var n=e.getRangeAt(0).getBoundingClientRect();if(n){var a=n.left,i=n.top,l=n.width;t.style.opacity="1",t.style.top=i+window.scrollY-t.offsetHeight+"px",t.style.left=a+window.scrollX-t.offsetWidth/2+l/2+"px"}}catch(o){}}}),[f,r]),i.a.createElement(l.a,null,i.a.createElement("div",{className:"react-page-plugins-content-slate-inline-toolbar "+(r?"":"react-page-plugins-content-slate-inline-toolbar--hidden"),style:{padding:0},ref:u},e&&e.map((function(t,e){return t.addHoverButton?i.a.createElement(s.a,{translations:n,key:e,plugin:t}):null}))))}}}]);