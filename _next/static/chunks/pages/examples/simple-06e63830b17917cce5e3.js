_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[34],{ZmX6:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return d}));var r=t("mXGw"),a=t.n(r),i=t("LSll"),o=t("33kk"),l=t("deX4"),c=t("atfL"),u=a.a.createElement,s=[Object(o.b)(),l.a];function d(){var e=Object(r.useState)(null),n=e[0],t=e[1];return u(c.a,null,u(i.b,{cellPlugins:s,value:n,onChange:t}))}},deX4:function(e,n,t){"use strict";t.d(n,"b",(function(){return g}));var r=t("4uDH"),a=t("mXGw"),i=t.n(a),o=Object(r.a)((function(){return Promise.all([t.e(1),t.e(0),t.e(75)]).then(t.t.bind(null,"c5OO",7))})),l={Controls:function(){return i.a.createElement(i.a.Fragment,null," Controls for this plugin were not provided")},Renderer:function(){return i.a.createElement(i.a.Fragment,null,"Renderer; for this plugin was not provided ")},translations:{pluginName:"Image",pluginDescription:"Loads an image from an url.",or:"OR",haveUrl:"I have a URL",imageUrl:"Image URL",hrefPlaceholder:"http://example.com",hrefLabel:"Link location (url)",openNewWindow:"Open in new window",srcPlaceholder:"http://example.com/image.png"},icon:i.a.createElement(o,null)},c=function(){return(c=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)},u=function(e){var n=c(c({},l),e),t=n.Controls;return{controls:{type:"custom",Component:function(e){return i.a.createElement(t,c({},e,{translations:n.translations,imageUpload:n.imageUpload}))}},Renderer:n.Renderer,id:"ory/editor/core/content/image",version:1,icon:n.icon,title:n.translations.pluginName,isInlineable:!0,description:n.translations.pluginDescription}},s={width:"100%",height:"auto",padding:"0",color:"#aaa",textAlign:"center",minWidth:64,minHeight:64,maxHeight:256},d=Object(r.a)((function(){return Promise.all([t.e(1),t.e(0),t.e(10)]).then(t.t.bind(null,"f5QF",7))})),p=function(e){var n=e.data,t=null===n||void 0===n?void 0:n.src,r=null===n||void 0===n?void 0:n.openInNewWindow,a=i.a.createElement("img",{className:"react-page-plugins-content-image",alt:"",src:t});return t?i.a.createElement("div",null,(null===n||void 0===n?void 0:n.href)?i.a.createElement("a",{onClick:e.isEditMode?function(e){return e.preventDefault()}:void 0,href:null===n||void 0===n?void 0:n.href,target:r?"_blank":void 0,rel:r?"noreferrer noopener":void 0},a):a):i.a.createElement("div",null,i.a.createElement("div",{className:"react-page-plugins-content-image-placeholder"},i.a.createElement(d,{style:s})))},m=function(){return(m=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)},f=Object(r.a)((function(){return Promise.all([t.e(1),t.e(0),t.e(2),t.e(10),t.e(49)]).then(t.bind(null,"t/Zn"))})),g=function(e){return u(m({Renderer:p,Controls:f},e))},h=g();n.a=h},"qN+I":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/simple",function(){return t("ZmX6")}])}},[["qN+I",3,1,0,2,5,4,6,7,8,9]]]);