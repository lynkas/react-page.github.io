(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[68],{hCQh:function(e,t,n){"use strict";n.r(t);var o=n("mXGw"),r=n.n(o),i=n("xARA"),a=n.n(i),l=n("N1Ij"),u=n.n(l),s=!("undefined"===typeof window||!window.document||!window.document.createElement),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){function t(){return p(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),c(t,[{key:"componentWillUnmount",value:function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null}},{key:"render",value:function(){return s?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),a.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null}}]),t}(r.a.Component);f.propTypes={children:u.a.node.isRequired,node:u.a.any};var h=f,y=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var m=function(e){function t(){return b(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),y(t,[{key:"componentDidMount",value:function(){this.renderPortal()}},{key:"componentDidUpdate",value:function(e){this.renderPortal()}},{key:"componentWillUnmount",value:function(){a.a.unmountComponentAtNode(this.defaultNode||this.props.node),this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null,this.portal=null}},{key:"renderPortal",value:function(e){this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode));var t=this.props.children;"function"===typeof this.props.children.type&&(t=r.a.cloneElement(this.props.children)),this.portal=a.a.unstable_renderSubtreeIntoContainer(this,t,this.props.node||this.defaultNode)}},{key:"render",value:function(){return null}}]),t}(r.a.Component),w=m;m.propTypes={children:u.a.node.isRequired,node:u.a.any};var O=a.a.createPortal?h:w,k=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var P=27,E=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.portalNode=null,n.state={active:!!e.defaultOpen},n.openPortal=n.openPortal.bind(n),n.closePortal=n.closePortal.bind(n),n.wrapWithPortal=n.wrapWithPortal.bind(n),n.handleOutsideMouseClick=n.handleOutsideMouseClick.bind(n),n.handleKeydown=n.handleKeydown.bind(n),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),k(t,[{key:"componentDidMount",value:function(){this.props.closeOnEsc&&document.addEventListener("keydown",this.handleKeydown),this.props.closeOnOutsideClick&&document.addEventListener("click",this.handleOutsideMouseClick)}},{key:"componentWillUnmount",value:function(){this.props.closeOnEsc&&document.removeEventListener("keydown",this.handleKeydown),this.props.closeOnOutsideClick&&document.removeEventListener("click",this.handleOutsideMouseClick)}},{key:"openPortal",value:function(e){this.state.active||(e&&e.nativeEvent&&e.nativeEvent.stopImmediatePropagation(),this.setState({active:!0},this.props.onOpen))}},{key:"closePortal",value:function(){this.state.active&&this.setState({active:!1},this.props.onClose)}},{key:"wrapWithPortal",value:function(e){var t=this;return this.state.active?r.a.createElement(O,{node:this.props.node,key:"react-portal",ref:function(e){return t.portalNode=e}},e):null}},{key:"handleOutsideMouseClick",value:function(e){if(this.state.active){var t=this.portalNode.props.node||this.portalNode.defaultNode;!t||t.contains(e.target)||e.button&&0!==e.button||this.closePortal()}}},{key:"handleKeydown",value:function(e){e.keyCode===P&&this.state.active&&this.closePortal()}},{key:"render",value:function(){return this.props.children({openPortal:this.openPortal,closePortal:this.closePortal,portal:this.wrapWithPortal,isOpen:this.state.active})}}]),t}(r.a.Component);E.propTypes={children:u.a.func.isRequired,defaultOpen:u.a.bool,node:u.a.any,openByClickOn:u.a.element,closeOnEsc:u.a.bool,closeOnOutsideClick:u.a.bool,onOpen:u.a.func,onClose:u.a.func},E.defaultProps={onOpen:function(){},onClose:function(){}};var _=n("KUrX"),g=n("0Z5n"),C=function(){var e=Object(_.e)();try{return Boolean(e.selection)&&""!==g.a.string(e,e.selection)}catch(t){return!1}},N=n("/QS1");t.default=function(e){var t=e.plugins,n=e.translations,i=C(),a=Object(o.useRef)(),l=Object(_.e)();return Object(o.useEffect)((function(){var e=a.current;if(i){var t=window.getSelection();try{var n=t.getRangeAt(0).getBoundingClientRect();if(n){var o=n.left,r=n.top,l=n.width;e.style.opacity="1",e.style.top=r+window.scrollY-e.offsetHeight+"px",e.style.left=o+window.scrollX-e.offsetWidth/2+l/2+"px"}}catch(u){}}}),[l,i]),r.a.createElement(O,null,r.a.createElement("div",{className:"react-page-plugins-content-slate-inline-toolbar "+(i?"":"react-page-plugins-content-slate-inline-toolbar--hidden"),style:{padding:0},ref:a},t&&t.map((function(e,t){return e.addHoverButton?r.a.createElement(N.a,{translations:n,key:t,plugin:e}):null}))))}}}]);