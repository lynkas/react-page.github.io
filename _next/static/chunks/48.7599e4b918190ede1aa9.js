(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[48],{"/qGT":function(e,a,t){"use strict";var n=t("mXGw"),r=t("5AJ6");a.a=Object(r.a)(n.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},C6kF:function(e,a,t){"use strict";t.r(a);var n=t("mXGw"),r=t.n(n),o=t("ZGBi"),i=t("KQm4"),l=t("ODXe"),d=t("Ff2n"),c=t("wx14"),s=(t("17x9"),t("iuhU")),p=t("H2TA"),u=t("tr08"),h=t("ye/S"),g=t("G7As"),v=t("gk1O"),m=t("Ovef"),f=t("bfFb"),b=t("NqtD"),C=t("yCxk");var y=Object(p.a)((function(e){return{thumb:{"&$open":{"& $offset":{transform:"scale(1) translateY(-10px)"}}},open:{},offset:Object(c.a)({zIndex:1},e.typography.body2,{fontSize:e.typography.pxToRem(12),lineHeight:1.2,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),top:-34,transformOrigin:"bottom center",transform:"scale(0)",position:"absolute"}),circle:{display:"flex",alignItems:"center",justifyContent:"center",width:32,height:32,borderRadius:"50% 50% 50% 0",backgroundColor:"currentColor",transform:"rotate(-45deg)"},label:{color:e.palette.primary.contrastText,transform:"rotate(45deg)"}}}),{name:"PrivateValueLabel"})((function(e){var a=e.children,t=e.classes,r=e.className,o=e.open,i=e.value,l=e.valueLabelDisplay;return"off"===l?a:n.cloneElement(a,{className:Object(s.a)(a.props.className,(o||"on"===l)&&t.open,t.thumb)},n.createElement("span",{className:Object(s.a)(t.offset,r)},n.createElement("span",{className:t.circle},n.createElement("span",{className:t.label},i))))}));function w(e,a){return e-a}function O(e,a,t){return Math.min(Math.max(a,e),t)}function x(e,a){return e.reduce((function(e,t,n){var r=Math.abs(a-t);return null===e||r<e.distance||r===e.distance?{distance:r,index:n}:e}),null).index}function P(e,a){if(void 0!==a.current&&e.changedTouches){for(var t=0;t<e.changedTouches.length;t+=1){var n=e.changedTouches[t];if(n.identifier===a.current)return{x:n.clientX,y:n.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function E(e,a,t){return 100*(e-a)/(t-a)}function k(e,a,t){var n=Math.round((e-t)/a)*a+t;return Number(n.toFixed(function(e){if(Math.abs(e)<1){var a=e.toExponential().split("e-"),t=a[0].split(".")[1];return(t?t.length:0)+parseInt(a[1],10)}var n=e.toString().split(".")[1];return n?n.length:0}(a)))}function L(e){var a=e.values,t=e.source,n=e.newValue,r=e.index;if(a[r]===n)return t;var o=a.slice();return o[r]=n,o}function _(e){var a=e.sliderRef,t=e.activeIndex,n=e.setActive;a.current.contains(document.activeElement)&&Number(document.activeElement.getAttribute("data-index"))===t||a.current.querySelector('[role="slider"][data-index="'.concat(t,'"]')).focus(),n&&n(t)}var M={horizontal:{offset:function(e){return{left:"".concat(e,"%")}},leap:function(e){return{width:"".concat(e,"%")}}},"horizontal-reverse":{offset:function(e){return{right:"".concat(e,"%")}},leap:function(e){return{width:"".concat(e,"%")}}},vertical:{offset:function(e){return{bottom:"".concat(e,"%")}},leap:function(e){return{height:"".concat(e,"%")}}}},G=function(e){return e},D=n.forwardRef((function(e,a){var t=e["aria-label"],r=e["aria-labelledby"],o=e["aria-valuetext"],p=e.classes,h=e.className,D=e.color,j=void 0===D?"primary":D,A=e.component,I=void 0===A?"span":A,S=e.defaultValue,F=e.disabled,R=void 0!==F&&F,N=e.getAriaLabel,B=e.getAriaValueText,U=e.marks,T=void 0!==U&&U,z=e.max,V=void 0===z?100:z,$=e.min,H=void 0===$?0:$,X=e.name,J=e.onChange,K=e.onChangeCommitted,Y=e.onMouseDown,q=e.orientation,Q=void 0===q?"horizontal":q,Z=e.scale,W=void 0===Z?G:Z,ee=e.step,ae=void 0===ee?1:ee,te=e.ThumbComponent,ne=void 0===te?"span":te,re=e.track,oe=void 0===re?"normal":re,ie=e.value,le=e.ValueLabelComponent,de=void 0===le?y:le,ce=e.valueLabelDisplay,se=void 0===ce?"off":ce,pe=e.valueLabelFormat,ue=void 0===pe?G:pe,he=Object(d.a)(e,["aria-label","aria-labelledby","aria-valuetext","classes","className","color","component","defaultValue","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","onMouseDown","orientation","scale","step","ThumbComponent","track","value","ValueLabelComponent","valueLabelDisplay","valueLabelFormat"]),ge=Object(u.a)(),ve=n.useRef(),me=n.useState(-1),fe=me[0],be=me[1],Ce=n.useState(-1),ye=Ce[0],we=Ce[1],Oe=Object(C.a)({controlled:ie,default:S,name:"Slider"}),xe=Object(l.a)(Oe,2),Pe=xe[0],Ee=xe[1],ke=Array.isArray(Pe),Le=ke?Pe.slice().sort(w):[Pe];Le=Le.map((function(e){return O(e,H,V)}));var _e=!0===T&&null!==ae?Object(i.a)(Array(Math.floor((V-H)/ae)+1)).map((function(e,a){return{value:H+ae*a}})):T||[],Me=Object(g.a)(),Ge=Me.isFocusVisible,De=Me.onBlurVisible,je=Me.ref,Ae=n.useState(-1),Ie=Ae[0],Se=Ae[1],Fe=n.useRef(),Re=Object(f.a)(je,Fe),Ne=Object(f.a)(a,Re),Be=Object(m.a)((function(e){var a=Number(e.currentTarget.getAttribute("data-index"));Ge(e)&&Se(a),we(a)})),Ue=Object(m.a)((function(){-1!==Ie&&(Se(-1),De()),we(-1)})),Te=Object(m.a)((function(e){var a=Number(e.currentTarget.getAttribute("data-index"));we(a)})),ze=Object(m.a)((function(){we(-1)})),Ve="rtl"===ge.direction,$e=Object(m.a)((function(e){var a,t=Number(e.currentTarget.getAttribute("data-index")),n=Le[t],r=(V-H)/10,o=_e.map((function(e){return e.value})),i=o.indexOf(n),l=Ve?"ArrowLeft":"ArrowRight",d=Ve?"ArrowRight":"ArrowLeft";switch(e.key){case"Home":a=H;break;case"End":a=V;break;case"PageUp":ae&&(a=n+r);break;case"PageDown":ae&&(a=n-r);break;case l:case"ArrowUp":a=ae?n+ae:o[i+1]||o[o.length-1];break;case d:case"ArrowDown":a=ae?n-ae:o[i-1]||o[0];break;default:return}if(e.preventDefault(),ae&&(a=k(a,ae,H)),a=O(a,H,V),ke){var c=a;a=L({values:Le,source:Pe,newValue:a,index:t}).sort(w),_({sliderRef:Fe,activeIndex:a.indexOf(c)})}Ee(a),Se(t),J&&J(e,a),K&&K(e,a)})),He=n.useRef(),Xe=Q;Ve&&"vertical"!==Q&&(Xe+="-reverse");var Je=function(e){var a,t,n=e.finger,r=e.move,o=void 0!==r&&r,i=e.values,l=e.source,d=Fe.current.getBoundingClientRect(),c=d.width,s=d.height,p=d.bottom,u=d.left;if(a=0===Xe.indexOf("vertical")?(p-n.y)/s:(n.x-u)/c,-1!==Xe.indexOf("-reverse")&&(a=1-a),t=function(e,a,t){return(t-a)*e+a}(a,H,V),ae)t=k(t,ae,H);else{var h=_e.map((function(e){return e.value}));t=h[x(h,t)]}t=O(t,H,V);var g=0;if(ke){var v=t;g=(t=L({values:i,source:l,newValue:t,index:g=o?He.current:x(i,t)}).sort(w)).indexOf(v),He.current=g}return{newValue:t,activeIndex:g}},Ke=Object(m.a)((function(e){var a=P(e,ve);if(a){var t=Je({finger:a,move:!0,values:Le,source:Pe}),n=t.newValue,r=t.activeIndex;_({sliderRef:Fe,activeIndex:r,setActive:be}),Ee(n),J&&J(e,n)}})),Ye=Object(m.a)((function(e){var a=P(e,ve);if(a){var t=Je({finger:a,values:Le,source:Pe}).newValue;be(-1),"touchend"===e.type&&we(-1),K&&K(e,t),ve.current=void 0;var n=Object(v.a)(Fe.current);n.removeEventListener("mousemove",Ke),n.removeEventListener("mouseup",Ye),n.removeEventListener("touchmove",Ke),n.removeEventListener("touchend",Ye)}})),qe=Object(m.a)((function(e){e.preventDefault();var a=e.changedTouches[0];null!=a&&(ve.current=a.identifier);var t=P(e,ve),n=Je({finger:t,values:Le,source:Pe}),r=n.newValue,o=n.activeIndex;_({sliderRef:Fe,activeIndex:o,setActive:be}),Ee(r),J&&J(e,r);var i=Object(v.a)(Fe.current);i.addEventListener("touchmove",Ke),i.addEventListener("touchend",Ye)}));n.useEffect((function(){var e=Fe.current;e.addEventListener("touchstart",qe);var a=Object(v.a)(e);return function(){e.removeEventListener("touchstart",qe),a.removeEventListener("mousemove",Ke),a.removeEventListener("mouseup",Ye),a.removeEventListener("touchmove",Ke),a.removeEventListener("touchend",Ye)}}),[Ye,Ke,qe]);var Qe=Object(m.a)((function(e){Y&&Y(e),e.preventDefault();var a=P(e,ve),t=Je({finger:a,values:Le,source:Pe}),n=t.newValue,r=t.activeIndex;_({sliderRef:Fe,activeIndex:r,setActive:be}),Ee(n),J&&J(e,n);var o=Object(v.a)(Fe.current);o.addEventListener("mousemove",Ke),o.addEventListener("mouseup",Ye)})),Ze=E(ke?Le[0]:H,H,V),We=E(Le[Le.length-1],H,V)-Ze,ea=Object(c.a)({},M[Xe].offset(Ze),M[Xe].leap(We));return n.createElement(I,Object(c.a)({ref:Ne,className:Object(s.a)(p.root,p["color".concat(Object(b.a)(j))],h,R&&p.disabled,_e.length>0&&_e.some((function(e){return e.label}))&&p.marked,!1===oe&&p.trackFalse,"vertical"===Q&&p.vertical,"inverted"===oe&&p.trackInverted),onMouseDown:Qe},he),n.createElement("span",{className:p.rail}),n.createElement("span",{className:p.track,style:ea}),n.createElement("input",{value:Le.join(","),name:X,type:"hidden"}),_e.map((function(e,a){var t,r=E(e.value,H,V),o=M[Xe].offset(r);return t=!1===oe?-1!==Le.indexOf(e.value):"normal"===oe&&(ke?e.value>=Le[0]&&e.value<=Le[Le.length-1]:e.value<=Le[0])||"inverted"===oe&&(ke?e.value<=Le[0]||e.value>=Le[Le.length-1]:e.value>=Le[0]),n.createElement(n.Fragment,{key:e.value},n.createElement("span",{style:o,"data-index":a,className:Object(s.a)(p.mark,t&&p.markActive)}),null!=e.label?n.createElement("span",{"aria-hidden":!0,"data-index":a,style:o,className:Object(s.a)(p.markLabel,t&&p.markLabelActive)},e.label):null)})),Le.map((function(e,a){var i=E(e,H,V),l=M[Xe].offset(i);return n.createElement(de,{key:a,valueLabelFormat:ue,valueLabelDisplay:se,className:p.valueLabel,value:"function"===typeof ue?ue(W(e),a):ue,index:a,open:ye===a||fe===a||"on"===se,disabled:R},n.createElement(ne,{className:Object(s.a)(p.thumb,p["thumbColor".concat(Object(b.a)(j))],fe===a&&p.active,R&&p.disabled,Ie===a&&p.focusVisible),tabIndex:R?null:0,role:"slider",style:l,"data-index":a,"aria-label":N?N(a):t,"aria-labelledby":r,"aria-orientation":Q,"aria-valuemax":W(V),"aria-valuemin":W(H),"aria-valuenow":W(e),"aria-valuetext":B?B(W(e),a):o,onKeyDown:$e,onFocus:Be,onBlur:Ue,onMouseOver:Te,onMouseLeave:ze}))})))})),j=Object(p.a)((function(e){return{root:{height:2,width:"100%",boxSizing:"content-box",padding:"13px 0",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:e.palette.primary.main,WebkitTapHighlightColor:"transparent","&$disabled":{pointerEvents:"none",cursor:"default",color:e.palette.grey[400]},"&$vertical":{width:2,height:"100%",padding:"0 13px"},"@media (pointer: coarse)":{padding:"20px 0","&$vertical":{padding:"0 20px"}},"@media print":{colorAdjust:"exact"}},colorPrimary:{},colorSecondary:{color:e.palette.secondary.main},marked:{marginBottom:20,"&$vertical":{marginBottom:"auto",marginRight:20}},vertical:{},disabled:{},rail:{display:"block",position:"absolute",width:"100%",height:2,borderRadius:1,backgroundColor:"currentColor",opacity:.38,"$vertical &":{height:"100%",width:2}},track:{display:"block",position:"absolute",height:2,borderRadius:1,backgroundColor:"currentColor","$vertical &":{width:2}},trackFalse:{"& $track":{display:"none"}},trackInverted:{"& $track":{backgroundColor:"light"===e.palette.type?Object(h.e)(e.palette.primary.main,.62):Object(h.a)(e.palette.primary.main,.5)},"& $rail":{opacity:1}},thumb:{position:"absolute",width:12,height:12,marginLeft:-6,marginTop:-5,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow"],{duration:e.transitions.duration.shortest}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",left:-15,top:-15,right:-15,bottom:-15},"&$focusVisible,&:hover":{boxShadow:"0px 0px 0px 8px ".concat(Object(h.c)(e.palette.primary.main,.16)),"@media (hover: none)":{boxShadow:"none"}},"&$active":{boxShadow:"0px 0px 0px 14px ".concat(Object(h.c)(e.palette.primary.main,.16))},"&$disabled":{width:8,height:8,marginLeft:-4,marginTop:-3,"&:hover":{boxShadow:"none"}},"$vertical &":{marginLeft:-5,marginBottom:-6},"$vertical &$disabled":{marginLeft:-3,marginBottom:-4}},thumbColorPrimary:{},thumbColorSecondary:{"&$focusVisible,&:hover":{boxShadow:"0px 0px 0px 8px ".concat(Object(h.c)(e.palette.secondary.main,.16))},"&$active":{boxShadow:"0px 0px 0px 14px ".concat(Object(h.c)(e.palette.secondary.main,.16))}},active:{},focusVisible:{},valueLabel:{left:"calc(-50% - 4px)"},mark:{position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},markActive:{backgroundColor:e.palette.background.paper,opacity:.8},markLabel:Object(c.a)({},e.typography.body2,{color:e.palette.text.secondary,position:"absolute",top:26,transform:"translateX(-50%)",whiteSpace:"nowrap","$vertical &":{top:"auto",left:26,transform:"translateY(50%)"},"@media (pointer: coarse)":{top:40,"$vertical &":{left:31}}}),markLabelActive:{color:e.palette.text.primary}}}),{name:"MuiSlider"})(D),A=t("UhlP"),I=t("JrkS"),S=t("dfam"),F=t("ofer"),R=t("bce7"),N=t.n(R),B=t("xU3U"),U=t.n(B),T=t("f5QF"),z=t.n(T),V=t("/6x2"),$=t("56Rm"),H=function(){var e=function(a,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])})(a,t)};return function(a,t){function n(){this.constructor=a}e(a,t),a.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),X=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return a.handleChangePickerBackgroundColor=function(e){return a.props.onChangeBackgroundColorPreview&&a.props.onChangeBackgroundColorPreview(e)},a.handleChangePickerBackgroundColorComplete=function(e){a.props.onChangeBackgroundColorPreview&&a.props.onChangeBackgroundColorPreview(void 0),a.props.onChange({backgroundColor:e})},a}return H(a,e),a.prototype.render=function(){var e=this.props,a=e.backgroundColorPreview,t=e.data.backgroundColor,n=void 0===t?this.props.defaultBackgroundColor:t;return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement($.a,{color:a||n,onChange:this.handleChangePickerBackgroundColor,onDialogOpen:this.props.ensureModeOn,onChangeComplete:this.handleChangePickerBackgroundColorComplete,style:{margin:"auto"}}))},a}(n.Component),J=t("r9w1"),K=t("D9vu"),Y=function(){var e=function(a,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])})(a,t)};return function(a,t){function n(){this.constructor=a}e(a,t),a.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),q=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return a.handleChangeBackground=function(e){a.props.ensureModeOn(),a.props.onChange({background:e.target.value})},a.handleChangeIsParallax=function(e){a.props.ensureModeOn(),a.props.onChange({isParallax:void 0!==a.props.data.isParallax&&!a.props.data.isParallax})},a.handleImageLoaded=function(e){a.props.ensureModeOn(),a.props.onImageLoaded(e)},a.handleImageUploaded=function(e){a.props.onImageUploaded(),a.props.onChange({background:e.url})},a}return Y(a,e),a.prototype.render=function(){var e=this.props.data,a=e.isParallax,t=void 0===a||a,n=e.background,i=void 0===n?"":n;return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex"}},this.props.imageUpload&&r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{imageUpload:this.props.imageUpload,imageLoaded:this.handleImageLoaded,imageUploaded:this.handleImageUploaded}),r.a.createElement(F.a,{variant:"body1",style:{marginLeft:"20px",marginRight:"20px"}},"OR")),r.a.createElement(J.a,{placeholder:"http://example.com/image.png",label:this.props.imageUpload?"I have a URL":"Image URL",style:{width:"256px"},value:i,onChange:this.handleChangeBackground})),r.a.createElement("br",null),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(o.a,{control:r.a.createElement(A.a,{onChange:this.handleChangeIsParallax,checked:t}),label:"Is parallax"})))},a}(r.a.Component),Q=t("Z3vd"),Z=t("PsDL"),W=t("FrwU"),ee=t.n(W),ae=function(){var e=function(a,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])})(a,t)};return function(a,t){function n(){this.constructor=a}e(a,t),a.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),te=function(){return(te=Object.assign||function(e){for(var a,t=1,n=arguments.length;t<n;t++)for(var r in a=arguments[t])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e}).apply(this,arguments)},ne=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return a.addGradient=function(){a.props.ensureModeOn(),a.props.onChange({gradients:(a.props.data.gradients?a.props.data.gradients:[]).concat({deg:45,opacity:1})})},a.handleChangeDeg=function(e,t){return function(){a.props.onChangeGradientDegPreview&&a.props.onChangeGradientDegPreview(void 0,void 0),a.props.onChange({gradients:(a.props.data.gradients?a.props.data.gradients:[]).map((function(a,n){return n===e?te(te({},a),{deg:t}):a}))})}},a.handleChangeDegPreview=function(e){return function(t,n){a.props.onChangeGradientDegPreview&&a.props.onChangeGradientDegPreview(n,e)}},a.handleChangeOpacity=function(e,t){return function(){a.props.onChangeGradientOpacityPreview&&a.props.onChangeGradientOpacityPreview(void 0,void 0),a.props.onChange({gradients:(a.props.data.gradients?a.props.data.gradients:[]).map((function(a,n){return n===e?te(te({},a),{opacity:t}):a}))})}},a.handleChangeOpacityPreview=function(e){return function(t,n){a.props.onChangeGradientOpacityPreview&&a.props.onChangeGradientOpacityPreview(n,e)}},a.handleChangeGradientColor=function(e,t){return function(n){a.props.onChangeGradientColorPreview&&a.props.onChangeGradientColorPreview(void 0,void 0,void 0),a.props.onChange({gradients:[].concat(a.props.data.gradients?a.props.data.gradients:[]).map((function(a,r){return r===e?te(te({},a),{colors:(a.colors?a.colors:[]).map((function(e,a){return a===t?te(te({},e),{color:n}):e}))}):a}))})}},a.handleChangeGradientColorPreview=function(e,t){return function(n){a.props.onChangeGradientColorPreview&&a.props.onChangeGradientColorPreview(n,e,t)}},a.addColor=function(e){return function(){a.props.ensureModeOn(),a.props.onChange({gradients:(a.props.data.gradients?a.props.data.gradients:[]).map((function(t,n){return n===e?te(te({},t),{colors:(t.colors?t.colors:[]).concat({color:(t.colors?t.colors:[]).length%2===e%2?a.props.defaultGradientColor:a.props.defaultGradientSecondaryColor})}):t}))})}},a.removeColor=function(e,t){return function(){a.props.onChange({gradients:[].concat(a.props.data.gradients?a.props.data.gradients:[]).map((function(a,n){return n===e?te(te({},a),{colors:(a.colors?a.colors:[]).filter((function(e,a){return a!==t}))}):a}))})}},a.removeGradient=function(e){return function(){a.props.onChange({gradients:[].concat(a.props.data.gradients?a.props.data.gradients:[]).filter((function(a,t){return t!==e}))})}},a}return ae(a,e),a.prototype.render=function(){var e=this,a=this.props,t=a.gradientDegPreview,n=a.gradientDegPreviewIndex,o=a.gradientOpacityPreview,i=a.gradientOpacityPreviewIndex,l=a.gradientColorPreview,d=a.gradientColorPreviewIndex,c=a.gradientColorPreviewColorIndex,s=a.data.gradients,p=void 0===s?[]:s;return r.a.createElement("div",null,p.map((function(a,s){var p=a.colors?a.colors:[],u=s===n&&void 0!==t?t:a.deg,h=s===i&&void 0!==o?o:a.opacity;return r.a.createElement("div",{key:s,style:{marginBottom:"8px",borderLeft:"2px",borderLeftStyle:"solid",paddingLeft:"8px"}},r.a.createElement("div",null,r.a.createElement(F.a,{variant:"body1",id:"linear-gradient-degree-label"},e.props.translations.gradientRotation," (",u,e.props.translations.degrees,")"),r.a.createElement(j,{"aria-labelledby":"linear-gradient-degree-label",value:u,onChange:e.handleChangeDegPreview(s),onChangeCommitted:e.handleChangeDeg(s,u),step:5,min:0,max:360})),r.a.createElement("div",null,r.a.createElement(F.a,{variant:"body1",id:"linear-gradient-opacity-label"},e.props.translations.gradientOpacity," (",(100*h).toFixed(0),"%)"),r.a.createElement(j,{"aria-labelledby":"linear-gradient-opacity-label",value:h,onChange:e.handleChangeOpacityPreview(s),onChangeCommitted:e.handleChangeOpacity(s,h),step:.01,min:0,max:1})),p.map((function(a,t){var n=s===d&&t===c&&void 0!==l?l:a.color;return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement($.a,{style:{marginLeft:"8px"},color:n,onChange:e.handleChangeGradientColorPreview(s,t),onChangeComplete:e.handleChangeGradientColor(s,t)}),r.a.createElement(Z.a,{"aria-label":"Delete",onClick:e.removeColor(s,t)},r.a.createElement(ee.a,null)))})),r.a.createElement(Q.a,{variant:"contained",onClick:e.addColor(s),style:{marginLeft:"8px"}},e.props.translations.addColor),r.a.createElement(Z.a,{"aria-label":"Delete",onClick:e.removeGradient(s)},r.a.createElement(ee.a,null)))})),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(Q.a,{style:{margin:"auto"},variant:"contained",onClick:this.addGradient,disabled:p.length>5},this.props.translations.addGradient)))},a}(r.a.Component),re=function(){var e=function(a,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])})(a,t)};return function(a,t){function n(){this.constructor=a}e(a,t),a.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),oe=function(){return(oe=Object.assign||function(e){for(var a,t=1,n=arguments.length;t<n;t++)for(var r in a=arguments[t])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e}).apply(this,arguments)},ie=function(e){function a(a){var t=e.call(this,a)||this;return t.renderModeSwitch=function(){var e=t.props.data.modeFlag,a=void 0===e?t.props.defaultModeFlag:e,n=t.props.translations.onOff;switch(t.state.mode){case V.a.COLOR_MODE_FLAG:case V.a.IMAGE_MODE_FLAG:case V.a.GRADIENT_MODE_FLAG:break;default:n="Unknown mode"}return r.a.createElement(o.a,{control:r.a.createElement(A.a,{onChange:t.props.handleChangeModeSwitch(t.state.mode,a),checked:Boolean(a&t.state.mode)}),label:n})},t.renderUI=function(){switch(t.state.mode){case V.a.COLOR_MODE_FLAG:return r.a.createElement(r.a.Fragment,null,t.renderModeSwitch(),r.a.createElement(X,oe({},t.props,{ensureModeOn:t.ensureModeOn(V.a.COLOR_MODE_FLAG),onChangeBackgroundColorPreview:t.props.handleChangeBackgroundColorPreview,backgroundColorPreview:t.props.backgroundColorPreview})));case V.a.GRADIENT_MODE_FLAG:return r.a.createElement(r.a.Fragment,null,t.renderModeSwitch(),r.a.createElement(ne,oe({},t.props,{ensureModeOn:t.ensureModeOn(V.a.GRADIENT_MODE_FLAG),gradientDegPreview:t.props.gradientDegPreview,gradientDegPreviewIndex:t.props.gradientDegPreviewIndex,gradientOpacityPreview:t.props.gradientOpacityPreview,gradientOpacityPreviewIndex:t.props.gradientOpacityPreviewIndex,gradientColorPreview:t.props.gradientColorPreview,gradientColorPreviewIndex:t.props.gradientColorPreviewIndex,gradientColorPreviewColorIndex:t.props.gradientColorPreviewColorIndex,onChangeGradientDegPreview:t.props.handleChangeGradientDegPreview,onChangeGradientOpacityPreview:t.props.handleChangeGradientOpacityPreview,onChangeGradientColorPreview:t.props.handleChangeGradientColorPreview})));case V.a.IMAGE_MODE_FLAG:default:return r.a.createElement(r.a.Fragment,null,t.renderModeSwitch(),r.a.createElement(q,oe({},t.props,{onImageLoaded:t.props.handleImageLoaded,onImageUploaded:t.props.handleImageUploaded,ensureModeOn:t.ensureModeOn(V.a.IMAGE_MODE_FLAG)})))}},t.ensureModeOn=function(e){return function(){var a=t.props.data.modeFlag,n=void 0===a?t.props.defaultModeFlag:a;0===(n&e)&&t.props.handleChangeModeSwitch(e,n)()}},t.handleChangeMode=function(e,a){return t.setState({mode:a})},t.state={mode:a.defaultMode},t}return re(a,e),a.prototype.render=function(){var e=this,a=this.props.data,t=a.hasPadding,n=void 0===t?this.props.defaultHasPadding:t,i=a.modeFlag,l=void 0===i?this.props.defaultModeFlag:i,d=a.darken,c=void 0===d?this.props.defaultDarken:d,s=a.lighten,p=void 0===s?this.props.defaultLighten:s,u=void 0!==this.props.darkenPreview?this.props.darkenPreview:c,h=void 0!==this.props.lightenPreview?this.props.lightenPreview:p;return r.a.createElement("div",null,r.a.createElement(S.a,{value:this.state.mode,onChange:this.handleChangeMode,centered:!0},(this.props.enabledModes&V.a.IMAGE_MODE_FLAG)>0&&r.a.createElement(I.a,{icon:r.a.createElement(z.a,{color:(l&V.a.IMAGE_MODE_FLAG)>0?"secondary":void 0}),label:this.props.translations.imageMode,value:V.a.IMAGE_MODE_FLAG}),(this.props.enabledModes&V.a.COLOR_MODE_FLAG)>0&&r.a.createElement(I.a,{icon:r.a.createElement(N.a,{color:(l&V.a.COLOR_MODE_FLAG)>0?"secondary":void 0}),label:this.props.translations.colorMode,value:V.a.COLOR_MODE_FLAG}),(this.props.enabledModes&V.a.GRADIENT_MODE_FLAG)>0&&r.a.createElement(I.a,{icon:r.a.createElement(U.a,{color:(l&V.a.GRADIENT_MODE_FLAG)>0?"secondary":void 0}),label:this.props.translations.gradientMode,value:V.a.GRADIENT_MODE_FLAG})),this.renderUI(),r.a.createElement("br",null),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:{flex:"1",marginRight:"8px"}},r.a.createElement(F.a,{variant:"body1",id:"linear-gradient-darken-label"},this.props.translations.darken," (",(100*u).toFixed(0),"%)"),r.a.createElement(j,{"aria-labelledby":"linear-gradient-darken-label",value:u,onChange:function(a,t){return e.props.handleChangeDarkenPreview(t instanceof Array?t[0]:t)},onChangeCommitted:this.props.handleChangeDarken,step:.01,min:0,max:1})),r.a.createElement("div",{style:{flex:"1",marginLeft:"8px"}},r.a.createElement(F.a,{variant:"body1",id:"linear-gradient-lighten-label"},this.props.translations.lighten," (",(100*h).toFixed(0),"%)"),r.a.createElement(j,{"aria-labelledby":"linear-gradient-lighten-label",value:h,onChange:function(a,t){return e.props.handleChangeLightenPreview(t instanceof Array?t[0]:t)},onChangeCommitted:this.props.handleChangeLighten,step:.01,min:0,max:1}))),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(o.a,{control:r.a.createElement(A.a,{onChange:this.props.handleChangeHasPadding,checked:n}),label:this.props.translations.usePadding})))},a}(r.a.Component),le=function(){var e=function(a,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])})(a,t)};return function(a,t){function n(){this.constructor=a}e(a,t),a.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),de=function(){return(de=Object.assign||function(e){for(var a,t=1,n=arguments.length;t<n;t++)for(var r in a=arguments[t])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e}).apply(this,arguments)},ce=function(e){function a(a){var t=e.call(this,a)||this;return t.handleChangeDarken=function(){t.props.onChange({darken:t.state.darkenPreview}),t.setState({darkenPreview:void 0})},t.handleChangeDarkenPreview=function(e){t.setState({darkenPreview:e})},t.handleChangeLighten=function(){t.props.onChange({lighten:t.state.lightenPreview}),t.setState({lightenPreview:void 0})},t.handleChangeLightenPreview=function(e){t.setState({lightenPreview:e})},t.handleChangeHasPadding=function(){t.props.onChange({hasPadding:void 0===t.props.data.hasPadding?!t.props.defaultHasPadding:!t.props.data.hasPadding})},t.handleChangeBackgroundColorPreview=function(e){return t.setState({backgroundColorPreview:e})},t.handleChangeGradientDegPreview=function(e,a){return t.setState({gradientDegPreview:e,gradientDegPreviewIndex:a})},t.handleChangeGradientOpacityPreview=function(e,a){return t.setState({gradientOpacityPreview:e,gradientOpacityPreviewIndex:a})},t.handleChangeGradientColorPreview=function(e,a,n){return t.setState({gradientColorPreview:e,gradientColorPreviewIndex:a,gradientColorPreviewColorIndex:n})},t.handleImageLoaded=function(e){return t.setState({imagePreview:e})},t.handleImageUploaded=function(){return t.setState({imagePreview:void 0})},t.handleChangeModeSwitch=function(e,a){return function(){a^=e,t.props.onChange({modeFlag:a})}},t.state={},t}return le(a,e),a.prototype.render=function(){return r.a.createElement(ie,de({},this.props,{handleChangeDarken:this.handleChangeDarken,handleChangeDarkenPreview:this.handleChangeDarkenPreview,handleChangeLighten:this.handleChangeLighten,handleChangeLightenPreview:this.handleChangeLightenPreview,handleChangeHasPadding:this.handleChangeHasPadding,handleChangeModeSwitch:this.handleChangeModeSwitch,handleChangeBackgroundColorPreview:this.handleChangeBackgroundColorPreview,handleChangeGradientDegPreview:this.handleChangeGradientDegPreview,handleChangeGradientOpacityPreview:this.handleChangeGradientOpacityPreview,handleChangeGradientColorPreview:this.handleChangeGradientColorPreview,handleImageLoaded:this.handleImageLoaded,handleImageUploaded:this.handleImageUploaded},this.state))},a}(r.a.Component);a.default=ce},bce7:function(e,a,t){"use strict";var n=t("mBgD"),r=t("ey9+");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=r(t("mXGw")),i=(0,n(t("8/g6")).default)(o.createElement("path",{d:"M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}),"ColorLens");a.default=i},mymT:function(e,a,t){"use strict";var n=t("mXGw"),r=t("5AJ6");a.a=Object(r.a)(n.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},xU3U:function(e,a,t){"use strict";var n=t("mBgD"),r=t("ey9+");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=r(t("mXGw")),i=(0,n(t("8/g6")).default)(o.createElement("path",{d:"M11 9h2v2h-2zm-2 2h2v2H9zm4 0h2v2h-2zm2-2h2v2h-2zM7 9h2v2H7zm12-6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 18H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6z"}),"Gradient");a.default=i}}]);