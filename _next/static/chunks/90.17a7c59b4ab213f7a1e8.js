(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[90],{wBRH:function(e,n,t){"use strict";t.r(n);var l=t("4uDH"),a=t("z935"),r=t("mXGw"),u=t.n(r),i=t("KUrX"),c=t("TucM"),o=t("tlN6"),s=t.n(o),d=t("5OIR"),p=t("pE+k"),f=t("ic6c"),b=t("T+qs"),g=Object(l.a)((function(){return Promise.all([t.e(1),t.e(0),t.e(10),t.e(89)]).then(t.bind(null,"hCQh"))})),m=u.a.memo((function(e){var n=e.plugins,t=e.defaultPluginType,l=e.readOnly,a=e.placeholder,r={useSelected:i.d,useFocused:i.c},o=Object(b.a)({plugins:n,defaultPluginType:t,injections:r},[]),g=Object(b.b)({plugins:n,injections:r},[]),m=function(e,n){var t=e.plugins,l=Object(i.e)();return u.a.useCallback((function(e){return t.filter((function(e){return e.hotKey})).forEach((function(n){s()(n.hotKey,e)&&(e.preventDefault(),Object(p.b)(l,n)?Object(f.b)(l,n):Object(d.a)(l,n))})),s()(["mod+z","mod+y"],e)?(e.preventDefault(),!0):s()("shift+enter",e)?(e.preventDefault(),l.insertText("\n"),!0):void 0}),n)}({plugins:n},[]),O=Object(c.b)();return u.a.createElement(i.a,{placeholder:l?void 0:a,readOnly:O||l,renderElement:o,renderLeaf:g,onKeyDown:l?void 0:m})}));n.default=u.a.memo((function(e){var n=e.plugins,t=e.focused,l=e.readOnly,r=Object(a.g)().t;return u.a.createElement(u.a.Fragment,null,!l&&t&&u.a.createElement(g,{plugins:e.plugins,translations:e.translations}),u.a.createElement(m,{placeholder:r(e.translations.placeholder),readOnly:l,plugins:n,defaultPluginType:e.defaultPluginType}))}))}}]);