(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{397:function(t,e,n){var content=n(405);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("193a8fad",content,!0,{sourceMap:!1})},404:function(t,e,n){"use strict";var o=n(397);n.n(o).a},405:function(t,e,n){(e=n(67)(!1)).push([t.i,"#about-page{width:80%;max-width:500px;margin:auto}#about-page p{white-space:pre-line}",""]),t.exports=e},413:function(t,e,n){"use strict";n.r(e);var o={asyncData:function(t){return t.app.$storyapi.get("cdn/stories/about",{version:t.isDev?"draft":"published"}).then((function(t){return{blok:t.data.story.content,title:t.data.story.content.title,content:t.data.story.content.content}}))},mounted:function(){this.$storybridge.on("change",(function(){window.location.reload()}))}},r=(n(404),n(25)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"editable",rawName:"v-editable",value:t.blok,expression:"blok"}],attrs:{id:"about-page"}},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("section",[n("p",[t._v(t._s(t.content))])])])}),[],!1,null,null,null);e.default=component.exports}}]);