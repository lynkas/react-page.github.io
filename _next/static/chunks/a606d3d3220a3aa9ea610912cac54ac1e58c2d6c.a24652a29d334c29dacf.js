(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"4eCk":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i={id:"2390df",version:1,rows:[{id:"4c7d90",cells:[{id:"95d678",size:12,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{en:{slate:[{children:[{text:"Next Level Content Editing"}],type:"HEADINGS/HEADING-TWO",data:{align:"center"}},{children:[{text:"ReactPage"}],type:"HEADINGS/HEADING-ONE",data:{align:"center"}}]}},rows:[],inline:null}]},{id:"31d7bd",cells:[{id:"0sACer",size:12,rows:[{id:"loa2uC",cells:[{id:"2YMvkH",size:12,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{en:{slate:[{type:"PARAGRAPH/PARAGRAPH",children:[{text:"ReactPage","EMPHASIZE/STRONG":!0},{text:" is a next level content editor for react."}]},{type:"PARAGRAPH/PARAGRAPH",children:[{text:"It enables "},{text:"webmasters and content editors ","EMPHASIZE/EM":!0,"EMPHASIZE/STRONG":!0},{text:"to create the content they want with the "},{text:"<Components />","CODE/CODE":!0},{text:" you provide as a developer."}]}]}},rows:[],inline:null}]},{id:"2WaR9W",cells:[{id:"tLyVTz",size:12,plugin:{id:"ory/editor/core/layout/background",version:1},dataI18n:{en:{modeFlag:5,backgroundColor:{r:0,g:0,b:0,a:1},gradients:[{deg:180,opacity:.75,colors:[{color:{r:72,g:39,b:39,a:1}},{color:{r:0,g:0,b:0,a:.83}}]}]}},rows:[{id:"lF37AJ",cells:[{id:"6oj6UO",size:6,plugin:{id:"ory/editor/core/content/image",version:1},dataI18n:{en:null},rows:[],inline:null},{id:"1KvW1q",size:6,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{en:{slate:[{type:"HEADINGS/HEADING-TWO",children:[{text:"Batteries included - Key features"}]},{type:"LISTS/UNORDERED-LIST",children:[{children:[{text:"powerful and customizable "},{text:"RichText Editor (","EMPHASIZE/STRONG":!0},{text:"powered by ","EMPHASIZE/EM":!0},{type:"LINK/LINK",children:[{text:"","EMPHASIZE/EM":!0}],data:{href:"https://github.com/vazco/uniforms"}},{text:"","EMPHASIZE/EM":!0},{type:"LINK/LINK",children:[{text:"Slate","EMPHASIZE/EM":!0}],data:{href:"https://github.com/ianstormtaylor/slate/"}},{text:")"}],type:"LISTS/LIST-ITEM"},{children:[{text:"12-column grid responsive grid layout"}],type:"LISTS/LIST-ITEM"},{children:[{text:"Drag & Drop cells"}],type:"LISTS/LIST-ITEM"},{children:[{text:"Undo & Redo, copy and hotkey support"}],type:"LISTS/LIST-ITEM"},{children:[{text:"Multi-Language support"}],type:"LISTS/LIST-ITEM"},{children:[{text:"Add any custom Components you like"}],type:"LISTS/LIST-ITEM"}]}]}},rows:[],inline:null}]}],inline:null}]},{id:"mmzpyU",cells:[{id:"NXAV7x",size:12,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{en:{slate:[{type:"HEADINGS/HEADING-TWO",children:[{text:"It's just a react component!"}]}]}},rows:[],inline:null}]},{id:"Xr2ZzV",cells:[{id:"3024eg",size:6,rows:[{id:"ifqqC0",cells:[{id:"Vo5LK1",inline:"right",size:4,plugin:{id:"ory/editor/core/content/image",version:1},dataI18n:{en:{src:"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"}},rows:[]},{id:"cFiB02",size:12,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{en:{slate:[{children:[{text:"ReactPage","EMPHASIZE/STRONG":!0},{text:" has a simple API - it's basically just like a form field and can be included in any project. "}]},{type:"PARAGRAPH/PARAGRAPH",children:[{text:"Pass it's current "},{text:"value","CODE/CODE":!0},{text:" that you might read from your datastore and update the value when "},{text:"onChange","CODE/CODE":!0},{text:" is called. "},{text:"It's that simple.","EMPHASIZE/STRONG":!0}]},{type:"PARAGRAPH/PARAGRAPH",children:[{text:"Set "},{text:"readOnly={true}","CODE/CODE":!0},{text:" whenever you want to display content without editing capabilities. "},{text:"ReactPage","EMPHASIZE/STRONG":!0},{text:" will only load what is really required for displaying thanks to code splitting. This results in a "},{text:"small bundle size.","EMPHASIZE/STRONG":!0},{text:" "}]}]}},hasInlineNeighbour:"Vo5LK1",rows:[]}]}],inline:null,dataI18n:null},{id:"pSz3cW",size:6,plugin:{id:"code-snippet",version:1},dataI18n:{en:{language:"tsx",code:"\nimport Editor from '@react-page/editor'\n\n// use ReactPage for editing Content\n<Editor\n    cellPlugins={yourCellPlugins}\n    value={theCurrentValue}\n    onChange={newValue => saveTheValue(newValue)}\n/>\n\n// or just for displaying content\n<Editor\n    cellPlugins={yourCellPlugins}\n    value={theCurrentValue}\n    readOnly={true}\n/>\n"}},rows:[],inline:null}]}],inline:null,dataI18n:null}]},{id:"LmbnJt",cells:[{id:"KePRMx",size:12,rows:[{id:"2Qrhaw",cells:[{id:"tgfvrK",size:4,plugin:{id:"ory/editor/core/content/image",version:1},dataI18n:{en:null},rows:[],inline:null},{id:"NrkefU",size:8,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{en:{slate:[{type:"HEADINGS/HEADING-TWO",children:[{text:"Add anything you want"}]},{type:"PARAGRAPH/PARAGRAPH",children:[{text:"Anything can displayed inside a cell of this editor! You can add text, images, videos and any custom Component you want by creating custom "},{text:"CellPlugins.","CODE/CODE":!0}]},{type:"PARAGRAPH/PARAGRAPH",children:[{text:'Provide your webmasters a "recommended products" section for your E-Commerce blog.\nShow a contact form directly inside your content.\nEmbed Tweets and newest posts from Social media.'}]},{type:"PARAGRAPH/PARAGRAPH",children:[{text:"Anything is possible with a simple, yet powerful API. "}]},{type:"PARAGRAPH/PARAGRAPH",children:[{text:"You provide a Component and some metadata about your new "},{text:"CellPlugin ","CODE/CODE":!0},{text:"and you are done. If you additionaly provide a schema of the data of this "},{text:"CellPlugin, ","CODE/CODE":!0},{text:"we will "},{text:"automatically create a form","EMPHASIZE/STRONG":!0},{text:" for you ("},{text:"powered by ","EMPHASIZE/EM":!0},{type:"LINK/LINK",children:[{text:"Uniforms","EMPHASIZE/EM":!0}],data:{href:"https://github.com/vazco/uniforms"}},{text:")."}]}]}},rows:[],inline:null}]},{id:"vfFODi",cells:[{id:"IlKIzI",size:6,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{en:{slate:[{type:"HEADINGS/HEADING-TWO",children:[{text:"Powerful Rich Text editing"}]},{children:[{text:"We provide a powerful richtext plugin built upon "},{type:"LINK/LINK",children:[{text:""}],data:{href:"https://github.com/vazco/uniforms"}},{text:""},{type:"LINK/LINK",children:[{text:"Slate"}],data:{href:"https://github.com/ianstormtaylor/slate/"}},{text:". It works out-of-the-box, but is fully customizable. You can customize how everything is rendered by providing custom component for headlines, paragraphs, links and so-on and you can add create your own custom plugins to bring in "},{text:"color",SetColor:{color:"green"}},{text:", add custom links or custom paragraph styles."}]},{type:"HEADINGS/HEADING-TWO",children:[{text:""}]}]}},rows:[],inline:null},{id:"dxC996",size:6,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{en:{slate:[{type:"PARAGRAPH/PARAGRAPH",children:[{text:"","EMPHASIZE/EM":!0}]},{type:"PARAGRAPH/PARAGRAPH",children:[{text:"You can customize the rich text editor anyway you like.\nYou can even add formula editing capabilities:","EMPHASIZE/EM":!0}],data:{align:"center"}},{type:"PARAGRAPH/PARAGRAPH",children:[{text:""},{type:"Katex",children:[{text:"f(x) = x^2 "}],data:{}},{text:""}],data:{align:"center"}},{type:"PARAGRAPH/PARAGRAPH",children:[{text:""}]}]}},rows:[],inline:null}]}],inline:null,dataI18n:null}]},{id:"E1Vhkc",cells:[{id:"prkeRn",size:6,rows:[{id:"bKGECx",cells:[{id:"HHZfRt",size:12,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{en:{slate:[{type:"HEADINGS/HEADING-TWO",children:[{text:"Embraces Typescript"}]},{type:"LISTS/ORDERED-LIST",children:[{children:[{text:"ReactPage is written in modern typescript and enables developer that include ReactPage into their project with typesafety and peace of mind. Thanks to generics, you can give any CellPlugin the data type that you need."}],type:"LISTS/LIST-ITEM"}]}]}},rows:[],inline:null}]},{id:"7Ez2XG",cells:[{id:"oZbiJG",size:12,plugin:{id:"twitter-timeline",version:1},dataI18n:{en:{title:"A Sample Twitter plugin",screenName:"typescript",height:600}},rows:[],inline:null}]}],inline:null,dataI18n:null},{id:"adbpP9",size:6,plugin:{id:"code-snippet",version:1},dataI18n:{en:{language:"tsx",code:n("ABSP").default}},rows:[],inline:null}]},{id:"KxRm4Q",cells:[{id:"pX3v4h",size:8,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{en:{slate:[{type:"HEADINGS/HEADING-TWO",children:[{text:"Server Side Rendering out of the box"}]},{type:"PARAGRAPH/PARAGRAPH",children:[{text:"ReactPage ","EMPHASIZE/STRONG":!0},{text:"is built with performance in mind. It can be used for "},{text:"server side rendering (SSR)","EMPHASIZE/STRONG":!0},{text:", which makes it not only a great tool for editing, but also for displaying. It's battle tested in nextjs, this example itself is created using nextjs and static page generation."}]},{type:"PARAGRAPH/PARAGRAPH",children:[{text:"We try "},{text:"minimize bundle size","EMPHASIZE/STRONG":!0},{text:" as much as possible. Any UI solely used for editing is not loaded when in readOnly mode. "}]}]}},rows:[],inline:null},{id:"Hl5FKJ",size:4,rows:[{id:"YFNmnf",cells:[{id:"f6pdG9",size:12,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{en:{slate:[{type:"PARAGRAPH/PARAGRAPH",children:[{text:"","EMPHASIZE/EM":!0}],data:{align:"center"}},{type:"PARAGRAPH/PARAGRAPH",children:[{text:"ReactPage works in any SSR setup like \nNext.js or Gatsby","EMPHASIZE/EM":!0}]}]}},rows:[],inline:null}]},{id:"VxBY6n",cells:[{id:"MjIkMK",size:4,plugin:{id:"ory/editor/core/content/image",version:1},dataI18n:{en:{href:"",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"}},rows:[],inline:null},{id:"me5hVT",size:3,plugin:{id:"ory/editor/core/content/spacer",version:1},dataI18n:{en:{height:24}},rows:[],inline:null},{id:"pdjqHJ",size:5,plugin:{id:"ory/editor/core/content/image",version:1},dataI18n:{en:{src:"https://www.gatsbyjs.cn/Gatsby-Logo.svg"}},rows:[],inline:null}]}],inline:null,dataI18n:null}]}]}},ABSP:function(e,t,n){"use strict";n.r(t),t.default="import { CellPlugin } from '@react-page/editor';\nimport React from 'react';\nimport { Timeline } from 'react-twitter-widgets';\n\ntype Data = {\n  screenName: string;\n  height: number;\n  title: string;\n};\n// you can pass the shape of the data as the generic type argument\nconst customContentPluginTwitter: CellPlugin<Data> = {\n  Renderer: ({ data }) => (\n    <div>\n      <h4>{data.title}</h4>\n      <Timeline\n        dataSource={{\n          sourceType: 'profile',\n          // data has already the right type!\n          screenName: data.screenName,\n        }}\n        options={{\n          height: data.height || 600,\n        }}\n      />\n    </div>\n  ),\n  id: 'twitter-timeline',\n  title: 'Twitter timeline',\n  description: 'A twitter timeline',\n  version: 1,\n  controls: {\n    type: 'autoform',\n    schema: {\n      // this JSONschema is type checked against the generic type argument\n      // the autocompletion of your IDE helps to create this schema\n      properties: {\n        title: {\n          type: 'string',\n          default: 'A Sample Twitter plugin',\n        },\n        screenName: {\n          type: 'string',\n          default: 'typescript',\n        },\n        height: {\n          type: 'number',\n          default: 600,\n        },\n      },\n      required: ['screenName'],\n    },\n  },\n};\n\nexport default customContentPluginTwitter;\n"}}]);