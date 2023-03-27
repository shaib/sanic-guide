(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{388:function(t,e,a){"use strict";a.r(e);var s=a(4),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),e("p",[t._v("Before we begin, make sure you are running Python 3.7 or higher. Currently, Sanic is works with Python versions 3.7 – 3.11.")]),t._v(" "),e("h2",{attrs:{id:"install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("pip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" sanic\n")])])]),e("h2",{attrs:{id:"hello-world-application"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hello-world-application"}},[t._v("#")]),t._v(" Hello, world application")]),t._v(" "),e("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("p",[t._v("If you have ever used one of the many decorator based frameworks, this probably looks somewhat familiar to you.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("If you are coming from Flask or another framework, there are a few important things to point out. Remember, Sanic aims for performance, flexibility, and ease of use. These guiding principles have tangible impact on the API and how it works.")])])]),t._v(" "),e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Sanic\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" text\n\napp "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyHelloWorldApp"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello_world")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),e("h3",{attrs:{id:"important-to-note"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#important-to-note"}},[t._v("#")]),t._v(" Important to note")]),t._v(" "),e("ul",[e("li",[t._v("Every request handler can either be sync ("),e("code",[t._v("def hello_world")]),t._v(") or async ("),e("code",[t._v("async def hello_world")]),t._v("). Unless you have a clear reason for it, always go with "),e("code",[t._v("async")]),t._v(".")]),t._v(" "),e("li",[t._v("The "),e("code",[t._v("request")]),t._v(" object is always the first argument of your handler. Other frameworks pass this around in a context variable to be imported. In the "),e("code",[t._v("async")]),t._v(" world, this would not work so well and it is far easier (not to mention cleaner and more performant) to be explicit about it.")]),t._v(" "),e("li",[t._v("You "),e("strong",[t._v("must")]),t._v(" use a response type. MANY other frameworks allow you to have a return value like this: "),e("code",[t._v('return "Hello, world."')]),t._v(" or this: "),e("code",[t._v('return {"foo": "bar"}')]),t._v(". But, in order to do this implicit calling, somewhere in the chain needs to spend valuable time trying to determine what you meant. So, at the expense of this ease, Sanic has decided to require an explicit call.")])]),t._v(" "),e("h3",{attrs:{id:"running"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running"}},[t._v("#")]),t._v(" Running")]),t._v(" "),e("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("p",[t._v("Let's save the above file as "),e("code",[t._v("server.py")]),t._v(". And launch it.")])]),t._v(" "),e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("sanic server\n")])])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("This "),e("strong",[t._v("another")]),t._v(" important distinction. Other frameworks come with a built in development server and explicitly say that it is "),e("em",[t._v("only")]),t._v(" intended for development use. The opposite is true with Sanic.")]),t._v(" "),e("p",[e("strong",[t._v("The packaged server is production ready.")])])]),t._v(" "),e("h2",{attrs:{id:"sanic-extensions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sanic-extensions"}},[t._v("#")]),t._v(" Sanic Extensions")]),t._v(" "),e("p",[t._v("Sanic intentionally aims for a clean and unopinionated feature list. The project does not want to require you to build your application in a certain way, and tries to avoid prescribing specific development patterns. There are a number of third-party plugins that are built and maintained by the community to add additional features that do not otherwise meet the requirements of the core repository.")]),t._v(" "),e("p",[t._v("However, in order "),e("strong",[t._v("to help API developers")]),t._v(", the Sanic organization maintains an official plugin called "),e("RouterLink",{attrs:{to:"/en/plugins/sanic-ext/getting-started.html"}},[t._v("Sanic Extensions")]),t._v(" to provide all sorts of goodies, including:")],1),t._v(" "),e("ul",[e("li",[e("strong",[t._v("OpenAPI")]),t._v(" documentation with Redoc and/or Swagger")]),t._v(" "),e("li",[e("strong",[t._v("CORS")]),t._v(" protection")]),t._v(" "),e("li",[e("strong",[t._v("Dependency injection")]),t._v(" into route handlers")]),t._v(" "),e("li",[t._v("Request query arguments and body input "),e("strong",[t._v("validation")])]),t._v(" "),e("li",[t._v("Auto create "),e("code",[t._v("HEAD")]),t._v(", "),e("code",[t._v("OPTIONS")]),t._v(", and "),e("code",[t._v("TRACE")]),t._v(" endpoints")]),t._v(" "),e("li",[t._v("Predefined, endpoint-specific response serializers")])]),t._v(" "),e("p",[t._v("The preferred method to set it up is to install it along with Sanic, but you can also install the packages on their own.")]),t._v(" "),e("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("pip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" sanic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ext"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])]),t._v(" "),e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("pip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" sanic sanic-ext\n")])])])])]),t._v(" "),e("p",[t._v("Starting in v21.12, Sanic will automatically setup Sanic Extensions if it is in the same environment. You will also have access to two additional application properties:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("app.extend()")]),t._v(" - used to configure Sanic Extensions")]),t._v(" "),e("li",[e("code",[t._v("app.ext")]),t._v(" - the "),e("code",[t._v("Extend")]),t._v(" instance attached to the application")])]),t._v(" "),e("p",[t._v("See "),e("RouterLink",{attrs:{to:"/en/plugins/sanic-ext/getting-started.html"}},[t._v("the plugin documentation")]),t._v(" for more information about how to use and work with the plugin")],1)])}),[],!1,null,null,null);e.default=n.exports}}]);