(function(e){function t(t){for(var r,o,a=t[0],s=t[1],i=t[2],d=0,f=[];d<a.length;d++)o=a[d],c[o]&&f.push(c[o][0]),c[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==c[a]&&(r=!1)}r&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},c={app:0},u=[];function a(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-0c3b2d46":"710a2f83","chunk-2a8bea41":"54210681","chunk-2d0af298":"f4305452","chunk-2d0b23a2":"4d508b80","chunk-2d0c76d2":"3315c506","chunk-2d0db865":"54d012c3","chunk-2d2086a8":"57aa7ddf","chunk-2d215faa":"b543f912","chunk-2d22269e":"69ef33d0","chunk-2d2254c1":"1d095009","chunk-2d22689d":"44f3b46a","chunk-2d22d746":"89e1331f","chunk-2d23777d":"2f7f6a58","chunk-40738c49":"0c0f2b23","chunk-66c649ec":"29eaeab1"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-0c3b2d46":1,"chunk-40738c49":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0c3b2d46":"312d5073","chunk-2a8bea41":"31d6cfe0","chunk-2d0af298":"31d6cfe0","chunk-2d0b23a2":"31d6cfe0","chunk-2d0c76d2":"31d6cfe0","chunk-2d0db865":"31d6cfe0","chunk-2d2086a8":"31d6cfe0","chunk-2d215faa":"31d6cfe0","chunk-2d22269e":"31d6cfe0","chunk-2d2254c1":"31d6cfe0","chunk-2d22689d":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-2d23777d":"31d6cfe0","chunk-40738c49":"312d5073","chunk-66c649ec":"31d6cfe0"}[e]+".css",o=s.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var a=c[u],i=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===r||i===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){a=d[u],i=a.getAttribute("data-href");if(i===r||i===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.request=r,n(c)},f.href=o;var l=document.getElementsByTagName("head")[0];l.appendChild(f)}).then(function(){o[e]=0}));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=c[e]=[t,n]});t.push(r[2]=u);var i,d=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=a(e),i=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,n[1](u)}c[e]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:f})},12e4);f.onerror=f.onload=i,d.appendChild(f)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/a-dist/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var l=d;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"025e":function(e,t,n){"use strict";n.r(t),n.d(t,"makeRoute",function(){return c}),n.d(t,"makeRouteChild",function(){return u});n("cadf"),n("551c"),n("097d");var r=function(e,t){return"home"==e?"/":t?e:"/".concat(e)},o=function(e,t){return"".concat(t,"/").concat(e.charAt(0).toUpperCase()+e.slice(1),".vue")};function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"./views",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,u=r(e,!1),a=o(e,t),s={path:u,component:function(){return n("d43f")("".concat(a))}};return null!=c&&(s.children=c),s}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"./views",c=r(e,!0),u=o(e,t);return{path:c,component:function(){return n("d43f")("".concat(u))}}}},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"3dfd":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("app-toolbar"),n("router-view"),n("app-footer")],1)},o=[],c=n("6908"),u=n("fd2d"),a={components:{AppToolbar:c["default"],AppFooter:u["default"]}},s=a,i=(n("034f"),n("2877")),d=Object(i["a"])(s,r,o,!1,null,null,null);d.options.__file="App.vue";t["default"]=d.exports},"41cb":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=n("8c4f"),c=n("025e");r["default"].use(o["a"]),t["default"]=new o["a"]({routes:[c["makeRoute"]("home"),c["makeRoute"]("dataset"),c["makeRoute"]("research"),c["makeRoute"]("apps"),c["makeRoute"]("resources","./views/Resources",[c["makeRouteChild"]("user","./views/Resources"),c["makeRouteChild"]("developer","./views/Resources")]),c["makeRoute"]("about")]})},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=n("ce5b"),c=n.n(o),u=(n("bf40"),n("3dfd")),a=n("41cb");r["default"].config.productionTip=!1,r["default"].use(c.a),new r["default"]({router:a["default"],render:function(e){return e(u["default"])}}).$mount("#app")},"64a9":function(e,t,n){},6908:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-toolbar",{attrs:{id:"toolbar",height:e.hpixel,fixed:"","scroll-off-screen":""}},[n("a",{attrs:{href:"http://www.icjia.state.il.us",target:"_blank"}},[n("img",{attrs:{src:"http://www.icjia.state.il.us/_themes/icjia/img/logo-icjia-small-blue-3.png",alt:"ICJIA logo",height:e.logoHpixel}})]),n("router-link",{attrs:{to:"/"}},[n("v-toolbar-title",[e._v("\n                ICJIA DATA PORTAL\n            ")])],1),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{attrs:{to:"/dataset",flat:""}},[e._v("dataset")]),n("v-btn",{attrs:{to:"/research",flat:""}},[e._v("research")]),n("v-btn",{attrs:{to:"/apps",flat:""}},[e._v("apps")]),n("v-menu",{attrs:{"offset-y":""}},[n("v-btn",{attrs:{slot:"activator",flat:""},slot:"activator"},[e._v("resources")]),n("v-list",[n("v-list-tile",{attrs:{to:"/resources/user",ripple:""}},[n("span",{staticClass:"body-1"},[e._v("\n                            "+e._s("user".toUpperCase())+"\n                        ")])]),n("v-list-tile",{attrs:{to:"/resources/developer",ripple:""}},[n("span",{staticClass:"body-1"},[e._v("\n                            "+e._s("developer".toUpperCase())+"\n                        ")])])],1)],1),n("v-btn",{attrs:{to:"/about",flat:""}},[e._v("about")])],1)],1),n("div",{style:{height:e.hpixel}})],1)},o=[],c={data:function(){return{height:75}},computed:{hpixel:function(){return"".concat(this.height,"px")},logoHpixel:function(){return"".concat(.85*this.height,"px")}}},u=c,a=(n("954f"),n("2877")),s=Object(a["a"])(u,r,o,!1,null,"bb1da0ee",null);s.options.__file="Toolbar.vue";t["default"]=s.exports},"69db":function(e,t,n){},"954f":function(e,t,n){"use strict";var r=n("69db"),o=n.n(r);o.a},d43f:function(e,t,n){var r={"./App":["3dfd",9],"./App.vue":["3dfd",9],"./assets/logo.png":["cf05",7,"chunk-2d22269e"],"./components/ArticleSnippet":["a8be",9,"chunk-40738c49"],"./components/ArticleSnippet.vue":["a8be",9,"chunk-40738c49"],"./components/CardApp":["0cc2",9,"chunk-2d0af298"],"./components/CardApp.vue":["0cc2",9,"chunk-2d0af298"],"./components/CarouselArticle":["e8a5",9,"chunk-2d22689d"],"./components/CarouselArticle.vue":["e8a5",9,"chunk-2d22689d"],"./components/Footer":["fd2d",9],"./components/Footer.vue":["fd2d",9],"./components/HighlightApps":["6fdc",9,"chunk-2d0db865"],"./components/HighlightApps.vue":["6fdc",9,"chunk-2d0db865"],"./components/ResourceInfo":["e495",9,"chunk-2d2254c1"],"./components/ResourceInfo.vue":["e495",9,"chunk-2d2254c1"],"./components/Search":["c106",9,"chunk-2d215faa"],"./components/Search.vue":["c106",9,"chunk-2d215faa"],"./components/Toolbar":["6908",9],"./components/Toolbar.vue":["6908",9],"./main":["56d7",9],"./main.js":["56d7",9],"./router":["41cb",9],"./router.js":["41cb",9],"./utils":["025e",9],"./utils.js":["025e",9],"./views/About":["f820",9,"chunk-2d22d746"],"./views/About.vue":["f820",9,"chunk-2d22d746"],"./views/Apps":["e082",9,"chunk-66c649ec"],"./views/Apps.vue":["e082",9,"chunk-66c649ec"],"./views/Dataset":["a564",9,"chunk-2d2086a8"],"./views/Dataset.vue":["a564",9,"chunk-2d2086a8"],"./views/Home":["bb51",9,"chunk-2a8bea41"],"./views/Home.vue":["bb51",9,"chunk-2a8bea41"],"./views/Research":["45d3",9,"chunk-0c3b2d46"],"./views/Research.vue":["45d3",9,"chunk-0c3b2d46"],"./views/Resources/Developer":["22e1",9,"chunk-2d0b23a2"],"./views/Resources/Developer.vue":["22e1",9,"chunk-2d0b23a2"],"./views/Resources/Resources":["5122",9,"chunk-2d0c76d2"],"./views/Resources/Resources.vue":["5122",9,"chunk-2d0c76d2"],"./views/Resources/User":["faf2",9,"chunk-2d23777d"],"./views/Resources/User.vue":["faf2",9,"chunk-2d23777d"]};function o(e){var t=r[e];return t?Promise.all(t.slice(2).map(n.e)).then(function(){var e=t[0];return n.t(e,t[1])}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id="d43f",e.exports=o},fd2d:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",[n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{"text-xs-center":""}},[e._v("\n            © 2019 Illinois Criminal Justice Information Authority\n        ")])],1)],1)},o=[],c={},u=c,a=n("2877"),s=Object(a["a"])(u,r,o,!1,null,null,null);s.options.__file="Footer.vue";t["default"]=s.exports}});
//# sourceMappingURL=app.d1918478.js.map