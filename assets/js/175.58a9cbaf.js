(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{489:function(t,s,a){"use strict";a.r(s);var e=a(4),o=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"corsの保護"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#corsの保護"}},[t._v("#")]),t._v(" CORSの保護")]),t._v(" "),s("p",[t._v("Cross-Origin Resource Sharing（別名：CORS）は、それだけで"),s("em",[t._v("巨大な")]),t._v("トピックです。この文書では、それが何であるかについて十分に詳しく説明することはできません。セキュリティ上の問題や解決策の背景にある理論について理解するために、ご自身で調査されることを強くお勧めします。"),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN Web Docs"),s("OutboundLink")],1),t._v("が最初の一歩として最適です。")]),t._v(" "),s("p",[t._v("超簡単に説明すると、CORS 保護は、Web ページが別のドメインから情報にアクセスする方法とタイミングを容易にするために、ブラウザが使用するフレームワークです。これは、単一ページのアプリケーションを構築している人に非常に関連性の高いものです。フロントエンドは "),s("code",[t._v("https://portal.myapp.com")]),t._v(" のようなドメインにありますが、バックエンドには "),s("code",[t._v("https://api.myapp.com")]),t._v(" からアクセスする必要があることがよくあります。")]),t._v(" "),s("p",[t._v("この実装は"),s("a",{attrs:{href:"https://github.com/ashleysommer/sanic-cors",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("sanic-cors")]),s("OutboundLink")],1),t._v("に強く影響を受けており、さらに"),s("a",{attrs:{href:"https://github.com/corydolphin/flask-cors",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("flask-cors")]),s("OutboundLink")],1),t._v(" がベースになっています。したがって、"),s("code",[t._v("sanic-cors")]),t._v("を"),s("code",[t._v("sanic-ext")]),t._v("でほぼ完全に置き換えることができるでしょう。")]),t._v(" "),s("h2",{attrs:{id:"基本的な実装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本的な実装"}},[t._v("#")]),t._v(" 基本的な実装")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[s("RouterLink",{attrs:{to:"/ja/plugins/sanic-ext/http/methods.html#options"}},[t._v("自動エンドポイントの例")]),t._v(" にあるように、Sanic Extensions は特に何もしなくても自動的に CORS 保護を有効にします。しかし、それは箱から出してもあまり多くのものを提供しません。")],1),t._v(" "),s("p",[t._v("最低でも、"),s("code",[t._v("config.CORS_ORIGINS")]),t._v(" をアプリケーションにアクセスする意図されたオリジンに設定することを "),s("strong",[t._v("強く")]),t._v(" お勧めします。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic_ext "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Extend\n\napp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__name__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CORS_ORIGINS "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://foobar.com,http://bar.com"')]),t._v("\nExtend"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello_world")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ curl localhost:8000 -X OPTIONS -i\nHTTP/1.1 204 No Content\nallow: GET,HEAD,OPTIONS\naccess-control-allow-origin: http://foobar.com\nconnection: keep-alive\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"コンフィグレーション"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#コンフィグレーション"}},[t._v("#")]),t._v(" コンフィグレーション")]),t._v(" "),s("p",[t._v("CORS 対策の真の威力は、設定を開始してから発揮されます。以下は、すべてのオプションの表です。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("キー")]),t._v(" "),s("th",[t._v("タイプ")]),t._v(" "),s("th",[t._v("デフォルト")]),t._v(" "),s("th",[t._v("説明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("CORS_ALLOW_HEADERS")])]),t._v(" "),s("td",[s("code",[t._v("str")]),t._v(" または "),s("code",[t._v("List[str]")])]),t._v(" "),s("td",[s("code",[t._v('"*"')])]),t._v(" "),s("td",[s("code",[t._v("access-control-allow-headers")]),t._v(" に表示されるヘッダのリストです。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("CORS_ALWAYS_SEND")])]),t._v(" "),s("td",[s("code",[t._v("bool")])]),t._v(" "),s("td",[s("code",[t._v("True")])]),t._v(" "),s("td",[s("code",[t._v("True")]),t._v(" の場合、常に "),s("code",[t._v("access-control-allow-origin")]),t._v(" に値を設定します。"),s("code",[t._v("False")]),t._v(" の場合、 "),s("code",[t._v("Origin")]),t._v(" ヘッダがある場合にのみ設定されます。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("CORS_AUTOMATIC_OPTIONS")])]),t._v(" "),s("td",[s("code",[t._v("bool")])]),t._v(" "),s("td",[s("code",[t._v("True")])]),t._v(" "),s("td",[t._v("受信したプリフライトリクエストに対して、 "),s("code",[t._v("access-control-allow-headers")]),t._v(", "),s("code",[t._v("access-control-max-age")]),t._v(", "),s("code",[t._v("access-control-allow-methods")]),t._v(" へ自動的に値を設定するかどうかを指定することができます。"),s("code",[t._v("False")]),t._v(" の場合、これらの値は "),s("code",[t._v("@cors")]),t._v(" デコレーターでデコレートされたルートにのみ設定されます。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("CORS_EXPOSE_HEADERS")])]),t._v(" "),s("td",[s("code",[t._v("str")]),t._v(" または "),s("code",[t._v("List[str]")])]),t._v(" "),s("td",[s("code",[t._v('""')])]),t._v(" "),s("td",[s("code",[t._v("access-control-expose-headers")]),t._v(" ヘッダに設定するヘッダの指定リストです。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("CORS_MAX_AGE")])]),t._v(" "),s("td",[s("code",[t._v("str")]),t._v(", "),s("code",[t._v("int")]),t._v(", "),s("code",[t._v("timedelta")])]),t._v(" "),s("td",[s("code",[t._v("0")])]),t._v(" "),s("td",[s("code",[t._v("access-control-max-age")]),t._v(" ヘッダーを使用してプリフライトリマインダーをキャッシュできる最大秒数です。虚偽の値を指定すると、このヘッダは設定されません。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("CORS_METHODS")])]),t._v(" "),s("td",[s("code",[t._v("str")]),t._v(" または "),s("code",[t._v("List[str]")])]),t._v(" "),s("td",[s("code",[t._v('""')])]),t._v(" "),s("td",[t._v("許可されたオリジンがアクセスできる HTTP メソッド ("),s("code",[t._v("access-control-allow-methods")]),t._v("ヘッダーで設定)。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("CORS_ORIGINS")])]),t._v(" "),s("td",[s("code",[t._v("str")]),t._v(", "),s("code",[t._v("List[str]")]),t._v(", "),s("code",[t._v("re.Pattern")])]),t._v(" "),s("td",[s("code",[t._v('"*"')])]),t._v(" "),s("td",[s("code",[t._v("access-control-allow-origin")]),t._v(" ヘッダーで設定した、リソースへのアクセスを許可するオリジンを指定します。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("CORS_SEND_WILDCARD")])]),t._v(" "),s("td",[s("code",[t._v("bool")])]),t._v(" "),s("td",[s("code",[t._v("False")])]),t._v(" "),s("td",[s("code",[t._v("True")]),t._v(" の場合、 "),s("code",[t._v("origin")]),t._v(" リクエストヘッダの代わりにワイルドカード "),s("code",[t._v("*")]),t._v(" オリジンを送信します。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("CORS_SUPPORTS_CREDENTIALS")])]),t._v(" "),s("td",[s("code",[t._v("bool")])]),t._v(" "),s("td",[s("code",[t._v("False")])]),t._v(" "),s("td",[s("code",[t._v("access-control-allow-credentials")]),t._v(" ヘッダを設定するかどうか。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("CORS_VARY_HEADER")])]),t._v(" "),s("td",[s("code",[t._v("bool")])]),t._v(" "),s("td",[s("code",[t._v("True")])]),t._v(" "),s("td",[t._v("適切な場合に "),s("code",[t._v("vary")]),t._v(" ヘッダーを追加するかどうか。")])])])]),t._v(" "),s("p",[s("em",[t._v("簡潔にするために、上記で "),s("code",[t._v("List[str]")]),t._v(" と記述している場合は、 "),s("code",[t._v("list")]),t._v(", "),s("code",[t._v("set")]),t._v(", "),s("code",[t._v("frozenset")]),t._v(", または "),s("code",[t._v("tuple")]),t._v(" のインスタンスであれば、何でも構いません。また、値が "),s("code",[t._v("str")]),t._v(" の場合は、カンマで区切られたリストでも構いません")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"ルートレベル・オーバーライド"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ルートレベル・オーバーライド"}},[t._v("#")]),t._v(" ルートレベル・オーバーライド")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("特定のルートに対して、アプリ全体の設定を上書きすることが必要な場合があります。これを可能にするために、"),s("code",[t._v("@sanic_ext.cors()")]),t._v(" デコレーターを使用して、異なるルート固有の値を設定することができます。")]),t._v(" "),s("p",[t._v("このデコレータでオーバーライドできる値は、以下のとおりです。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("origins")])]),t._v(" "),s("li",[s("code",[t._v("expose_headers")])]),t._v(" "),s("li",[s("code",[t._v("allow_headers")])]),t._v(" "),s("li",[s("code",[t._v("allow_methods")])]),t._v(" "),s("li",[s("code",[t._v("supports_credentials")])]),t._v(" "),s("li",[s("code",[t._v("max_age")])])])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic_ext "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cors\n\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CORS_ORIGINS "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://foo.com"')]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@cors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("origins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://bar.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello_world")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])])}),[],!1,null,null,null);s.default=o.exports}}]);