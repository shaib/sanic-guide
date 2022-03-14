(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{377:function(t,e,n){},378:function(t,e,n){},379:function(t,e,n){},380:function(t,e,n){},386:function(t,e,n){"use strict";var i=n(63),a=(n(67),n(65),n(25),n(66),n(98),n(6),n(128),n(97),n(388),n(392),n(393),n(394),n(395),n(430)),s=n(374),o={name:"NavLinks",components:{NavLink:n(390).a,DropdownLink:a.a},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,a=this.$router.options.routes,s=this.$site.themeConfig.locales||{},o={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(i){var o,r=e[i],l=s[i]&&s[i].label||r.lang;return r.lang===t.$lang?o=n:(o=n.replace(t.$localeConfig.path,i),a.some((function(t){return t.path===o}))||(o=i)),{text:l,link:o}}))};return[].concat(Object(i.a)(this.userNav),[o])}return this.userNav},help:function(){return{text:this.$themeLocaleConfig.helpText||this.$site.themeConfig.helpTextFallback,link:"".concat(this.$root.$localeConfig.path).concat(this.$site.themeConfig.helpLink),type:"link"}},userLinks:function(){var t=(this.nav||[]).map((function(t){return Object.assign(Object(s.j)(t),{items:(t.items||[]).map(s.j)})}));return t.push(this.help),t},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},r=(n(396),n(19)),l=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null);e.a=l.exports},387:function(t,e,n){"use strict";n(391);var i=n(19),a=Object(i.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"page-footer"},[e("a",{attrs:{href:"https://github.com/sanic-org/sanic/blob/master/LICENSE"}},[this._v("\n    MIT Licensed\n  ")]),this._v(" "),e("br"),this._v("\n  Copyright © 2018-present Sanic Community Organization"),e("br"),this._v(" "),e("p",[this._v("~ Made with ❤️ and ☕️ ~")])])}],!1,null,null,null);e.a=a.exports},391:function(t,e,n){"use strict";n(377)},396:function(t,e,n){"use strict";n(378)},397:function(t,e,n){"use strict";n(379)},398:function(t,e,n){"use strict";n(380)},401:function(t,e,n){"use strict";var i=n(428),a=n(387),s={components:{Home:i.a,Footer:a.a}},o=n(19),r=Object(o.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Home",this._b({},"Home",this.$attrs,!1)),this._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.a=r.exports},402:function(t,e,n){"use strict";n(219);var i=n(429),a=n(426),s=n(432),o=n(386);function r(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var l={name:"Navbar",components:{SidebarButton:s.a,NavLinks:o.a,SearchBox:a.a,AlgoliaSearchBox:i.a},data:function(){return{darkMode:!1,linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName},logo:function(){return this.darkMode?"https://raw.githubusercontent.com/huge-success/sanic-assets/master/png/sanic-framework-logo-simple-white-400x97.png":"https://raw.githubusercontent.com/huge-success/sanic-assets/master/png/sanic-framework-logo-simple-400x97.png"}},methods:{handleDarkMode:function(t){this.darkMode=t}},mounted:function(){var t=this,e=parseInt(r(this.$el,"paddingLeft"))+parseInt(r(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};this.handleDarkMode(!0),n(),window.addEventListener("resize",n,!1)}},c=(n(397),n(19)),u=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo&&!1!==t.$page.frontmatter.logo?n("img",{staticClass:"logo",attrs:{src:t.logo,alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"}),t._v(" "),n("ClientOnly",[n("ToggleDarkMode",{on:{darkmode:t.handleDarkMode}})],1)],1)],1)}),[],!1,null,null,null);e.a=u.exports},403:function(t,e,n){"use strict";var i=n(425),a=n(387),s={components:{Page:i.a,Footer:a.a}},o=n(19),r=Object(o.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Page",this._b({},"Page",this.$attrs,!1)),this._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.a=r.exports},404:function(t,e,n){"use strict";var i=n(400),a=n(386),s={name:"Sidebar",components:{SidebarLinks:i.default,NavLinks:a.a},props:["items"],computed:{current:function(){return this.$root.$localeConfig.current||""}}},o=(n(398),n(19)),r=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"sidebar"},[n("NavLinks"),t._v(" "),t._t("top"),t._v(" "),n("SidebarLinks",{attrs:{depth:0,items:t.items}}),t._v(" "),t._t("bottom"),t._v(" "),t.current?n("div",{staticClass:"current"},[t._v("\n    "+t._s(t.current)+"\n  ")]):t._e()],2)}),[],!1,null,null,null);e.a=r.exports},467:function(t,e,n){"use strict";n.r(e);var i=n(401),a=n(402),s=n(403),o=n(404),r=n(374),l={name:"Layout",components:{Home:i.a,Page:s.a,Sidebar:o.a,Navbar:a.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(r.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},c=n(19),u=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=u.exports}}]);