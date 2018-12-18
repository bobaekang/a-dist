(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-525f4924","chunk-142495a8","chunk-5aed2b60","chunk-137f224b","chunk-1f1586be","chunk-0b431cc6","chunk-2d0c1d29","chunk-2d0b2cbc"],{"02d7":function(t,e,r){},"14ac":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-text-field",{attrs:{value:t.searchInput,label:t.searchLabel,clearable:"true","append-outer-icon":"search",solo:""},on:{keyup:function(e){t.onKeyup(e)},"click:clear":function(e){t.onClear(e)}}})},s=[],a=(r("386d"),r("cadf"),r("551c"),r("097d"),{props:{label:String,search:String},data:function(){return{searchInput:this.search,searchLabel:this.label}},methods:{onKeyup:function(t){this.$emit("update:search",t.target.value)},onClear:function(){this.$emit("update:search","")}}}),i=a,c=r("2877"),l=Object(c["a"])(i,n,s,!1,null,null,null);l.options.__file="SearchBar.vue";e["default"]=l.exports},"17a1":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pb-3"},[r("v-btn",{attrs:{flat:""},on:{click:function(e){t.show=!t.show}}},[r("v-icon",{staticClass:"pr-1"},[t._v("tune")]),r("v-span",[t._v(t._s(t.text))])],1),r("v-slide-y-transition",[r("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"mx-2 py-2 greyborder"},[r("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[r("v-btn",{attrs:{outline:"",color:"primary"},on:{click:function(e){t.applyFilter(e)}}},[t._v("\n                    apply\n                ")]),r("v-btn",{attrs:{outline:"",color:"error"},on:{click:function(e){t.clearFilter(e)}}},[t._v("\n                    clear\n                ")])],1),r("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},t._l(t.items,function(t,e){return r("v-flex",{key:e,attrs:{xs12:"",sm9:""}},[r("app-autocomplete",{ref:"filterInput",refInFor:!0,staticClass:"py-2 px-3",attrs:{label:t.title.toUpperCase(),items:t.options}})],1)}))],1)])],1)},s=[],a=(r("28a5"),r("cadf"),r("551c"),r("097d"),r("bb0b")),i={props:{items:Object},data:function(){return{text:"filter",show:!1}},methods:{applyFilter:function(t){for(var e=t.target.parentElement.parentElement.parentElement,r=e.childNodes[1].childNodes,n={},s=0;s<r.length;s++)for(var a=r[s],i=a.getElementsByClassName("v-select__slot"),c=0;c<i.length;c++){var l=i[c].getElementsByClassName("v-chip__content");if(l.length>0){for(var o=i[c].getElementsByClassName("v-text-field__prefix")[0].innerText,u=[],f=0;f<l.length;f++){var p=l[f].innerText.split("\n")[0];u.push(p)}n[o]=u}}this.$emit("updateFilter",n),this.show=!1},clearFilter:function(t){this.$refs.filterInput.map(function(t){return t.removeAll()}),this.$emit("updateFilter",{}),this.show=!1}},components:{AppAutocomplete:a["default"]}},c=i,l=(r("f4bd"),r("2877")),o=Object(l["a"])(c,n,s,!1,null,null,null);o.options.__file="SearchFilter.vue";e["default"]=o.exports},"214f":function(t,e,r){"use strict";var n=r("32e9"),s=r("2aba"),a=r("79e5"),i=r("be13"),c=r("2b4c");t.exports=function(t,e,r){var l=c(t),o=r(i,l,""[t]),u=o[0],f=o[1];a(function(){var e={};return e[l]=function(){return 7},7!=""[t](e)})&&(s(String.prototype,t,u),n(RegExp.prototype,l,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)}))}},2646:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.showSuggestion?r("div",{staticClass:"pt-2 text-xs-center sans-serif"},[t._v("\n    Need suggestions? Try these:\n    "),r("br"),t._l(t.suggestions,function(e,n){return r("span",{key:n},[r("v-btn",{staticClass:"ma-1",staticStyle:{"text-transform":"none"},attrs:{flat:""},on:{click:function(r){t.useSuggestion(e)}}},[t._v("\n            "+t._s(e)+"\n        ")])],1)})],2):t._e()},s=[],a={props:{showSuggestion:Boolean,suggestions:Array},methods:{useSuggestion:function(t){this.$emit("useSuggestion",t)}}},i=a,c=r("2877"),l=Object(c["a"])(i,n,s,!1,null,null,null);l.options.__file="SearchSuggestion.vue";e["default"]=l.exports},"28a5":function(t,e,r){r("214f")("split",2,function(t,e,n){"use strict";var s=r("aae3"),a=n,i=[].push,c="split",l="length",o="lastIndex";if("c"=="abbc"[c](/(b)*/)[1]||4!="test"[c](/(?:)/,-1)[l]||2!="ab"[c](/(?:ab)*/)[l]||4!="."[c](/(.?)(.?)/)[l]||"."[c](/()()/)[l]>1||""[c](/.?/)[l]){var u=void 0===/()??/.exec("")[1];n=function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!s(t))return a.call(r,t,e);var n,c,f,p,h,d=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,b=void 0===e?4294967295:e>>>0,g=new RegExp(t.source,v+"g");u||(n=new RegExp("^"+g.source+"$(?!\\s)",v));while(c=g.exec(r)){if(f=c.index+c[0][l],f>m&&(d.push(r.slice(m,c.index)),!u&&c[l]>1&&c[0].replace(n,function(){for(h=1;h<arguments[l]-2;h++)void 0===arguments[h]&&(c[h]=void 0)}),c[l]>1&&c.index<r[l]&&i.apply(d,c.slice(1)),p=c[0][l],m=f,d[l]>=b))break;g[o]===c.index&&g[o]++}return m===r[l]?!p&&g.test("")||d.push(""):d.push(r.slice(m)),d[l]>b?d.slice(0,b):d}}else"0"[c](void 0,0)[l]&&(n=function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)});return[function(r,s){var a=t(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,a,s):n.call(String(a),r,s)},n]})},"386d":function(t,e,r){r("214f")("search",1,function(t,e,r){return[function(r){"use strict";var n=t(this),s=void 0==r?void 0:r[e];return void 0!==s?s.call(r,n):new RegExp(r)[e](String(n))},r]})},"3a58":function(t,e,r){},"484c":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-chip",{staticStyle:{"font-family":"'Lato', sans-serif"},attrs:{disabled:"",small:"","text-color":"#333"}},[t._v("\n    "+t._s(t.name)+"\n")])},s=[],a=(r("cadf"),r("551c"),r("097d"),{props:{name:String}}),i=a,c=r("2877"),l=Object(c["a"])(i,n,s,!1,null,null,null);l.options.__file="ChipCard.vue";e["default"]=l.exports},4917:function(t,e,r){r("214f")("match",1,function(t,e,r){return[function(r){"use strict";var n=t(this),s=void 0==r?void 0:r[e];return void 0!==s?s.call(r,n):new RegExp(r)[e](String(n))},r]})},"7c2c":function(t,e,r){},"8e6f":function(t,e,r){"use strict";var n=r("3a58"),s=r.n(n);s.a},aa77:function(t,e,r){var n=r("5ca1"),s=r("be13"),a=r("79e5"),i=r("fdef"),c="["+i+"]",l="​",o=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),f=function(t,e,r){var s={},c=a(function(){return!!i[t]()||l[t]()!=l}),o=s[t]=c?e(p):i[t];r&&(s[r]=o),n(n.P+n.F*c,"String",s)},p=f.trim=function(t,e){return t=String(s(t)),1&e&&(t=t.replace(o,"")),2&e&&(t=t.replace(u,"")),t};t.exports=f},aae3:function(t,e,r){var n=r("d3f4"),s=r("2d95"),a=r("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==s(t))}},bb0b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-autocomplete",{staticClass:"sans-serif small",attrs:{items:t.items,prefix:t.label,chips:"",multiple:""},scopedSlots:t._u([{key:"selection",fn:function(e){return[r("v-chip",{staticClass:"chip--select-multi",attrs:{selected:e.selected,close:""},on:{input:function(r){t.remove(e.item)}}},[t._v("\n            "+t._s(e.item)+"\n        ")])]}},{key:"item",fn:function(e){return[r("v-list-tile-content",{domProps:{textContent:t._s(e.item)}})]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})},s=[],a={props:{label:String,items:Array},data:function(){return{selected:[]}},methods:{remove:function(t){var e=this.selected.indexOf(t);e>=0&&this.selected.splice(e,1)},removeAll:function(){this.selected=[]}}},i=a,c=(r("8e6f"),r("2877")),l=Object(c["a"])(i,n,s,!1,null,"54eac53a",null);l.options.__file="Autocomplete.vue";e["default"]=l.exports},be94:function(t,e,r){"use strict";r.d(e,"a",function(){return s});var n=r("ade3");function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},s=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),s.forEach(function(e){Object(n["a"])(t,e,r[e])})}return t}},c041:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-layout",{attrs:{row:""}},[r("v-img",{staticClass:"hidden-sm-and-down",attrs:{src:t.article.imgUrl,"lazy-src":"https://via.placeholder.com/1/DDDDDD"}},[r("v-layout",{attrs:{slot:"placeholder","fill-height":"","align-center":"","justify-center":"","ma-0":""},slot:"placeholder"},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-3"}})],1)],1),r("v-layout",{staticClass:"article-body",attrs:{column:"","justify-space-between":""}},[r("div",[r("v-container",{staticClass:"py-2"},[r("v-layout",{attrs:{row:"",wrap:""}},[r("h3",[t._v(t._s(t.article.title))]),t._l(t.article.pubtype,function(t,e){return r("span",{key:e},[r("app-chip-card",{attrs:{name:t.toUpperCase()}})],1)}),t._l(t.article.area,function(t,e){return r("span",{key:e},[r("app-chip-card",{attrs:{name:t.toUpperCase()}})],1)})],2)],1),r("v-divider"),r("v-container",{staticClass:"small sans-serif py-2"},[r("div",{staticClass:"pb-2"},[r("span",{staticClass:"ma-0 bold"},[t._v("Updated")]),t._v("\n                        "+t._s(t.article.date)+"\n                    ")]),r("div",{staticClass:"pb-2"},[r("span",{staticClass:"ma-0 bold"},[t._v("Authors")]),t._v("\n                        "+t._s(t.article.allAuthors)+"\n                    ")])])],1),r("v-card-actions",[r("v-spacer"),t.article.teaser?r("v-btn",{attrs:{flat:""},on:{click:function(e){t.article.showTeaser=!t.article.showTeaser}}},[t._v("\n                    summary\n                    "),r("v-icon",[t._v(t._s(t.article.showTeaser?"keyboard_arrow_down":"keyboard_arrow_up"))])],1):t._e(),r("v-btn",{attrs:{href:t.article.url,target:"_blank",flat:""}},[t._v("\n                    full\n                    "),r("v-icon",[t._v("open_in_new")])],1)],1),r("v-slide-y-transition",[t.article.showTeaser?r("v-card-text",[t._v("\n                    "+t._s(t.article.teaser)+"\n                ")]):t._e()],1)],1)],1)],1)},s=[],a=(r("cadf"),r("551c"),r("097d"),r("484c")),i={props:{item:Object},computed:{article:function(){var t=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(Array.isArray(t)){if(e&&t.length>1){var r=t.length-1;return t.slice(0,r).join(", ")+" and "+t[r]}return t.join(", ")}return t},e=this.item;return e.allAuthors=t(e.authors,!0),e.url="http://www.icjia.state.il.us/articles/".concat(e.filename),e.imgUrl="http://www.icjia.state.il.us/".concat(e.splash),e}},components:{AppChipCard:a["default"]}},c=i,l=(r("c5a9"),r("2877")),o=Object(l["a"])(c,n,s,!1,null,"11875f52",null);o.options.__file="CardArticles.vue";e["default"]=o.exports},c5a9:function(t,e,r){"use strict";var n=r("7c2c"),s=r.n(n);s.a},c5f6:function(t,e,r){"use strict";var n=r("7726"),s=r("69a8"),a=r("2d95"),i=r("5dbc"),c=r("6a99"),l=r("79e5"),o=r("9093").f,u=r("11e9").f,f=r("86cc").f,p=r("aa77").trim,h="Number",d=n[h],v=d,m=d.prototype,b=a(r("2aeb")(m))==h,g="trim"in String.prototype,_=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():p(e,3);var r,n,s,a=e.charCodeAt(0);if(43===a||45===a){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+e}for(var i,l=e.slice(2),o=0,u=l.length;o<u;o++)if(i=l.charCodeAt(o),i<48||i>s)return NaN;return parseInt(l,n)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof d&&(b?l(function(){m.valueOf.call(r)}):a(r)!=h)?i(new v(_(e)),r,d):_(e)};for(var y,x=r("9e1e")?o(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;x.length>w;w++)s(v,y=x[w])&&!s(d,y)&&f(d,y,u(v,y));d.prototype=m,m.constructor=d,r("2aba")(n,h,d)}},cd1e:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",lg6:""}},[r("app-search-bar",{ref:"searchBar",attrs:{label:"Search for articles (by title, date, author)",search:t.search},on:{"update:search":function(e){t.search=e}}}),r("app-search-filter",{attrs:{items:t.filters},on:{updateFilter:function(e){t.filterObj=e}}}),r("app-count-items",{attrs:{count:t.filterItems(t.items).length,item:t.item}}),r("app-search-suggestion",{attrs:{showSuggestion:0===t.filterItems(t.items).length,suggestions:t.suggestions},on:{useSuggestion:function(e){t.useSuggestion(e)}}})],1),t._l(t.filterItems(t.items),function(t,e){return r("v-flex",{key:e,staticClass:"mb-3",attrs:{xs12:"",sm10:"",xl8:""}},[r("app-card-articles",{attrs:{item:t}})],1)})],2)],1)},s=[],a=(r("4917"),r("ac6a"),r("456d"),r("386d"),r("be94")),i=r("2f62"),c=r("025e"),l=r("c041"),o=r("f1be"),u=r("14ac"),f=r("17a1"),p=r("2646"),h={props:{search:String},data:function(){return{item:"article",filterObj:{}}},computed:Object(a["a"])({},Object(i["b"])({items:"articles",filters:"articleFilters",suggestions:"articleSuggestions"})),methods:{filterItems:function(t){var e=this.search.toUpperCase(),r=0!==Object.keys(this.filterObj).length?Object(c["applyFilterBox"])(t,this.filters,this.filterObj):t;return r.filter(function(t){return t.title.toUpperCase().match(e)||t.date.match(e)||t.authors.join("").toUpperCase().match(e)})},useSuggestion:function(t){this.search=t,this.$refs.searchBar.searchInput=t}},components:{AppCardArticles:l["default"],AppCountItems:o["default"],AppSearchBar:u["default"],AppSearchFilter:f["default"],AppSearchSuggestion:p["default"]}},d=h,v=r("2877"),m=Object(v["a"])(d,n,s,!1,null,null,null);m.options.__file="ResearchSearch.vue";e["default"]=m.exports},f1be:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-xs-center pb-2 sans-serif"},[t._v("\n    "+t._s(t.count)+" "+t._s(t.item)+"s found\n")])},s=[],a=(r("c5f6"),{props:{count:Number,item:String}}),i=a,c=r("2877"),l=Object(c["a"])(i,n,s,!1,null,null,null);l.options.__file="CountItems.vue";e["default"]=l.exports},f4bd:function(t,e,r){"use strict";var n=r("02d7"),s=r.n(n);s.a},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-525f4924.1b366999.js.map