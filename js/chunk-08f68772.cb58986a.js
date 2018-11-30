(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08f68772","chunk-0b431cc6"],{"14ac":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-text-field",{attrs:{value:t.searchInput,label:t.searchLabel,"append-icon":"search",solo:""},on:{keyup:function(e){t.onChange(e)}}})},n=[],s=(a("386d"),a("cadf"),a("551c"),a("097d"),{props:{label:String,search:String},data:function(){return{searchInput:this.search,searchLabel:this.label}},methods:{onChange:function(t){this.$emit("update:search",t.target.value)}}}),c=s,i=a("2877"),o=Object(i["a"])(c,r,n,!1,null,null,null);o.options.__file="SearchBar.vue";e["default"]=o.exports},"214f":function(t,e,a){"use strict";var r=a("32e9"),n=a("2aba"),s=a("79e5"),c=a("be13"),i=a("2b4c");t.exports=function(t,e,a){var o=i(t),u=a(c,o,""[t]),l=u[0],h=u[1];s(function(){var e={};return e[o]=function(){return 7},7!=""[t](e)})&&(n(String.prototype,t,l),r(RegExp.prototype,o,2==e?function(t,e){return h.call(t,this,e)}:function(t){return h.call(t,this)}))}},2275:function(t,e,a){},"386d":function(t,e,a){a("214f")("search",1,function(t,e,a){return[function(a){"use strict";var r=t(this),n=void 0==a?void 0:a[e];return void 0!==n?n.call(a,r):new RegExp(a)[e](String(r))},a]})},4917:function(t,e,a){a("214f")("match",1,function(t,e,a){return[function(a){"use strict";var r=t(this),n=void 0==a?void 0:a[e];return void 0!==n?n.call(a,r):new RegExp(a)[e](String(r))},a]})},a8be:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[a("app-search-bar",{attrs:{label:"Search for articles (by title, date, authors, etc.)",search:t.search},on:{"update:search":function(e){t.search=e}}})],1),t._l(t.filterItems(t.editedItems),function(e,r){return a("v-flex",{key:r,staticClass:"mb-3",attrs:{xs12:"",sm10:"","offset-sm1":""}},[a("v-card",{staticClass:"article-card"},[a("v-layout",{attrs:{row:""}},[a("v-img",{staticClass:"hidden-sm-and-down",attrs:{src:e.imgUrl,"lazy-src":"https://via.placeholder.com/1/DDDDDD"}},[a("v-layout",{attrs:{slot:"placeholder","fill-height":"","align-center":"","justify-center":"","ma-0":""},slot:"placeholder"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-3"}})],1)],1),a("v-layout",{staticClass:"article-body",attrs:{column:"","justify-space-between":""}},[a("div",[a("h3",{staticStyle:{"padding-bottom":"10px"}},[t._v("\n                                "+t._s(e.title)+"\n                            ")]),a("h5",{staticStyle:{"padding-bottom":"10px"}},[t._v("\n                                "+t._s(e.date)+" |\n                                "+t._s(e.pubtype)+" |\n                                "+t._s(e.area)+"\n                            ")]),a("h5",[t._v("\n                                By\n                                "+t._s(e.authors)+"\n                            ")])]),a("v-card-actions",[a("v-spacer"),e.teaser?a("v-btn",{attrs:{flat:""},on:{click:function(t){e.showTeaser=!e.showTeaser}}},[t._v("\n                                summary\n                                "),a("v-icon",[t._v(t._s(e.showTeaser?"keyboard_arrow_down":"keyboard_arrow_up"))])],1):t._e(),a("v-btn",{attrs:{href:e.url,target:"_blank",flat:""}},[t._v("\n                                full\n                                "),a("v-icon",[t._v("open_in_new")])],1)],1),a("v-slide-y-transition",[e.showTeaser?a("v-card-text",[t._v("\n                                "+t._s(e.teaser)+"\n                            ")]):t._e()],1)],1)],1)],1)],1)})],2)],1)},n=[],s=(a("4917"),a("386d"),a("cadf"),a("551c"),a("097d"),a("14ac")),c=a("cbe9"),i={data:function(){return{items:c,search:""}},computed:{editedItems:function(){var t=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(Array.isArray(t)){if(e&&t.length>1){var a=t.length-1;return t.slice(0,a).join(", ")+" and "+t[a]}return t.join(", ")}return t};return this.items.map(function(e){return e.area=t(e.area),e.authors=t(e.authors,!0),e.pubtype=t(e.pubtype),e.url="http://www.icjia.state.il.us/articles/".concat(e.filename),e.imgUrl="http://www.icjia.state.il.us/".concat(e.splash),e})}},methods:{filterItems:function(t){var e=this.search.toUpperCase();return t.filter(function(t){return t.title.toUpperCase().match(e)||t.date.match(e)||t.area.toUpperCase().match(e)||t.authors.toUpperCase().match(e)||t.pubtype.toUpperCase().match(e)})}},components:{AppSearchBar:s["default"]}},o=i,u=(a("fdd8"),a("2877")),l=Object(u["a"])(o,r,n,!1,null,"426cd3a6",null);l.options.__file="ArticleSnippet.vue";e["default"]=l.exports},fdd8:function(t,e,a){"use strict";var r=a("2275"),n=a.n(r);n.a}}]);
//# sourceMappingURL=chunk-08f68772.cb58986a.js.map