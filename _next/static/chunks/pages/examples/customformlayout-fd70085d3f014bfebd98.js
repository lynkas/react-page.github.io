_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[34],{"3dQX":function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var i=e("dK0u"),r=function(){return(r=Object.assign||function(n){for(var t,e=1,i=arguments.length;e<i;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)},u=function(n,t,e){var o,l,a,c;if(void 0===e&&(e=0),Object(i.a)(n)){if(null===(o=t.skipMapRow)||void 0===o?void 0:o.call(t,n,e))return n;var d=(null===(s=null===(l=null===(f=t.mapRow?t.mapRow(n,e):n)||void 0===f?void 0:f.cells)||void 0===l?void 0:l.map((function(n){return u(n,t,e+1)})))||void 0===s?void 0:s.length)>0?r(r({},f),{cells:s}):f;return t.mapRowDown?t.mapRowDown(d,e):d}if(null===(a=t.skipMapCell)||void 0===a?void 0:a.call(t,n,e))return n;var f,s;d=(null===(s=null===(c=null===(f=t.mapCell?t.mapCell(n,e):n)||void 0===f?void 0:f.rows)||void 0===c?void 0:c.map((function(n){return u(n,t,e+1)})))||void 0===s?void 0:s.length)>0?r(r({},f),{rows:s}):f;return t.mapCellDown?t.mapCellDown(d,e):d}},GcRk:function(n,t,e){"use strict";e.d(t,"g",(function(){return r})),e.d(t,"f",(function(){return u})),e.d(t,"d",(function(){return o})),e.d(t,"e",(function(){return l})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return c})),e.d(t,"b",(function(){return d})),e.d(t,"n",(function(){return f})),e.d(t,"m",(function(){return s})),e.d(t,"k",(function(){return v})),e.d(t,"l",(function(){return p})),e.d(t,"j",(function(){return g})),e.d(t,"i",(function(){return m})),e.d(t,"h",(function(){return O}));var i=function(){return(i=Object.assign||function(n){for(var t,e=1,i=arguments.length;e<i;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)},r="CELL_UPDATE_IS_DRAFT",u="CELL_UPDATE_DATA",o="CELL_REMOVE",l="CELL_RESIZE",a="CELL_FOCUS",c="CELL_BLUR",d="CELL_BLUR_ALL",f=function(n,t,e){return void 0===t&&(t=!1),void 0===e&&(e=null),{type:r,ts:new Date,id:n,isDraft:t,lang:e}},s=function(n){return function(t,e){return i({type:u,ts:new Date,id:n,data:t},e)}},v=function(n){return{type:o,ts:new Date,ids:n}},p=function(n){return function(t){return void 0===t&&(t=1),{type:l,ts:new Date,id:n,size:t}}},g=function(n,t,e){return void 0===t&&(t=!1),void 0===e&&(e="replace"),{type:a,ts:new Date,id:n,scrollToCell:t,mode:e}},m=function(n){return{type:c,ts:new Date,id:n}},O=function(){return{type:d,ts:new Date}}},"Io/X":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/customformlayout",function(){return e("sgrw")}])},MMOE:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var i=e("NMHk"),r=e("Qi3f"),u=e("fCHa"),o=function(n,t){var e,o;return{id:n.id||Object(u.a)(),rows:null!==(o=null===(e=n.rows)||void 0===e?void 0:e.map((function(n){return Object(i.i)(n,t)})))&&void 0!==o?o:[],version:r.a}}},NMHk:function(n,t,e){"use strict";e.d(t,"a",(function(){return v})),e.d(t,"d",(function(){return p})),e.d(t,"g",(function(){return g})),e.d(t,"h",(function(){return m})),e.d(t,"e",(function(){return O})),e.d(t,"f",(function(){return b})),e.d(t,"c",(function(){return w})),e.d(t,"b",(function(){return E})),e.d(t,"i",(function(){return _})),e.d(t,"n",(function(){return N})),e.d(t,"l",(function(){return h})),e.d(t,"s",(function(){return j})),e.d(t,"p",(function(){return C})),e.d(t,"o",(function(){return D})),e.d(t,"r",(function(){return R})),e.d(t,"m",(function(){return S})),e.d(t,"q",(function(){return T})),e.d(t,"k",(function(){return A})),e.d(t,"j",(function(){return P}));var i=e("wBDf"),r=e("dK0u"),u=e("fCHa"),o=e("oSnv"),l=e("5W9F"),a=e("UyZT"),c=e("PNiC"),d=e("zfhL"),f=e("GcRk"),s=function(){return(s=Object.assign||function(n){for(var t,e=1,i=arguments.length;e<i;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)},v="CELL_INSERT_ABOVE",p="CELL_INSERT_BELOW",g="CELL_INSERT_LEFT_OF",m="CELL_INSERT_RIGHT_OF",O="CELL_INSERT_INLINE_LEFT",b="CELL_INSERT_INLINE_RIGHT",w="CELL_INSERT_AT_END",E="CELL_INSERT_AS_NEW_ROW",_=function(n,t){var e;return Array.isArray(n)?{id:Object(u.a)(),cells:n.map((function(n){return I(n,t)}))}:Object(a.a)(s(s({id:Object(u.a)()},n),{cells:null===(e=n.cells)||void 0===e?void 0:e.map((function(n){return I(n,t)}))}))},I=function(n,t){var e,i,r,c,d,f,v,p,g,m,O,b=t.cellPlugins,w=t.lang,E=n.plugin&&("string"==typeof n.plugin?n.plugin:n.plugin.id),I=E&&b.find((function(n){return n.id===E})),y=(null===(i=n.rows)||void 0===i?void 0:i.length)>0?n.rows:null!==(c=null===(r=null===I||void 0===I?void 0:I.createInitialChildren)||void 0===r?void 0:r.call(I))&&void 0!==c?c:[],L=s(((e={})[w]=null!==(g=null!==(v=null!==(d=null===n||void 0===n?void 0:n.data)&&void 0!==d?d:null===(f=null===I||void 0===I?void 0:I.createInitialData)||void 0===f?void 0:f.call(I,n))&&void 0!==v?v:null===(p=null===I||void 0===I?void 0:I.createInitialState)||void 0===p?void 0:p.call(I,n))&&void 0!==g?g:null,e),null!==(m=n.dataI18n)&&void 0!==m?m:{});return Object(a.a)({id:null!==(O=n.id)&&void 0!==O?O:Object(u.a)(),isDraft:n.isDraft,isDraftI18n:n.isDraftI18n,inline:n.inline,size:n.size||12,hasInlineNeighbour:n.hasInlineNeighbour,plugin:I?{id:I.id,version:I.version}:void 0,rows:null===y||void 0===y?void 0:y.map((function(n){return _(n,{lang:w,cellPlugins:Object(o.b)(b,{pluginId:E,data:Object(l.a)({dataI18n:L},w)})})})),dataI18n:L})},y=function(n){return function(t){return function(e,i,r,u){void 0===u&&(u=Object(d.a)());var o=I(e,t),l=!e.id;return L(n)(o,i,s(s({},r),{focusAfter:(null===r||void 0===r?void 0:r.focusAfter)||l}),u)}}},L=function(n){return function(t,e,i,r){var u,o,l=e.id,a=e.inline,s=e.hasInlineNeighbour,O=e.ancestorIds;void 0===r&&(r=Object(d.a)());var b=null!==(u=null===i||void 0===i?void 0:i.level)&&void 0!==u?u:0,w=b;switch(n){case v:case p:(a||s)&&b<1&&(w=1);break;case g:case m:(a||s)&&b<1&&(w=1)}var E={type:n,ts:new Date,item:t,hoverId:0===b?l:null!==(o=O[Math.max(b-1)])&&void 0!==o?o:l,level:w,ids:r,notUndoable:i.notUndoable};return function(n){n(E),(null===i||void 0===i?void 0:i.focusAfter)&&(n(Object(c.j)()),setTimeout((function(){var e,i,r,u,o;n(Object(f.j)(null!==(o=null===(u=null===(r=null===(i=null===(e=t.rows)||void 0===e?void 0:e[0])||void 0===i?void 0:i.cells)||void 0===r?void 0:r[0])||void 0===u?void 0:u.id)&&void 0!==o?o:E.ids.item,!0))}),0))}}},N=y(p),h=y(v),j=y(m),C=y(g),D=y(O),R=y(b),S=y(w),T=y(E),A=function(n,t){var e=Object(r.a)(n)?{id:Object(u.a)(),rows:[n]}:n;return P(e,t)},P=function(n,t){var e,r,u=Object(i.b)(n);return L(p)(u,{ancestorIds:[],id:null!==(e=null===t||void 0===t?void 0:t.insertAfterNodeId)&&void 0!==e?e:n.id,hasInlineNeighbour:n.hasInlineNeighbour,inline:n.inline,levels:null,pluginId:null===(r=n.plugin)||void 0===r?void 0:r.id},{level:0,focusAfter:!0})}},PNiC:function(n,t,e){"use strict";e.d(t,"i",(function(){return i})),e.d(t,"h",(function(){return r})),e.d(t,"e",(function(){return u})),e.d(t,"d",(function(){return o})),e.d(t,"b",(function(){return l})),e.d(t,"c",(function(){return a})),e.d(t,"f",(function(){return c})),e.d(t,"g",(function(){return d})),e.d(t,"a",(function(){return f})),e.d(t,"k",(function(){return v})),e.d(t,"l",(function(){return p})),e.d(t,"j",(function(){return g})),e.d(t,"m",(function(){return m}));var i="SET_DISPLAY_REFERENCE_NODE_ID",r="SET_DISPLAY_MODE",u="preview",o="layout",l="edit",a="insert",c="resizing",d="DISPLAY_SET_ZOOM",f=l,s=function(n,t){return function(){return{type:r,ts:new Date,mode:n,referenceNodeId:t}}},v=function(n){return{type:i,ts:new Date,referenceNodeId:n}},p=function(n,t){return{type:r,ts:new Date,mode:n,referenceNodeId:t}},g=(s(a),s(l)),m=(s(u),s(o),s(c),function(n){return{type:d,zoom:n}})},sgrw:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return p}));var i=e("mXGw"),r=e.n(i),u=e("IrE9"),o=e("MMOE"),l=e("LSll"),a=e("33kk"),c=e("atfL"),d=r.a.createElement,f={Renderer:function(n){var t=n.data;return d("div",null,d("h3",null,"Name"),d("p",null,"Firstname: ",t.firstName),d("p",null,"Lastname: ",t.lastName),d("p",null,"Age: ",t.age),d("h3",null,"Adress"),d("p",null,t.street),d("p",null,t.lastName),d("p",null,"Age: ",t.age))},id:"custom-content-plugin-with-custom-layout",title:"Custom content plugin",description:"Some custom content plugin with multiple controls",version:1,controls:{type:"autoform",schema:{properties:{firstName:{type:"string"},lastName:{type:"string"},street:{type:"string"},zip:{type:"string"},city:{type:"string"},country:{type:"string"},age:{title:"Age in years",type:"integer",minimum:0}},required:[]},Content:function(){return d("div",{style:{display:"flex"}},d("div",{style:{flex:1,marginRight:20}},d("p",null,"Personal information:"),d(u.a,{fields:["firstName","lastName","age"]})),d("div",{style:{flex:1}},d("p",null,"Adress:"),d(u.a,{omitFields:["firstName","lastName","age"]})))}}},s=[Object(a.b)(),f],v=Object(o.a)({rows:[[{plugin:f}]]},{cellPlugins:s,lang:"default"});function p(){var n=Object(i.useState)(v),t=n[0],e=n[1];return d(c.a,null,d(l.b,{cellPlugins:s,value:t,onChange:e}))}},wBDf:function(n,t,e){"use strict";e.d(t,"b",(function(){return l})),e.d(t,"a",(function(){return a}));var i=e("dK0u"),r=e("fCHa"),u=e("3dQX"),o=function(){return(o=Object.assign||function(n){for(var t,e=1,i=arguments.length;e<i;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)},l=function(n){return Object(u.a)(n,{mapCell:function(n){return o(o({},n),{dataI18n:(null===n||void 0===n?void 0:n.dataI18n)?JSON.parse(JSON.stringify(n.dataI18n)):{},id:Object(r.a)()})},mapRow:function(n){return o(o({},n),{id:Object(r.a)()})}})},a=function(n){var t=Object(i.a)(n)?{id:Object(r.a)(),rows:[n]}:n;return l(t)}},zfhL:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var i=e("fCHa"),r=function(){return{cell:Object(i.a)(),item:Object(i.a)(),others:[Object(i.a)(),Object(i.a)(),Object(i.a)()]}}}},[["Io/X",2,1,0,3,5,4,7,6,8,9,10,11]]]);