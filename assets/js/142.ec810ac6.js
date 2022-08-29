(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{455:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"スタートアップ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#スタートアップ"}},[t._v("#")]),t._v(" スタートアップ")]),t._v(" "),s("p",[t._v("最初に、Python 3.7以降が実行されていることを確認します。現在、はPythonバージョン3.7、3.8、および3.9で動作することがわかっています。")]),t._v(" "),s("h2",{attrs:{id:"インストール"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#インストール"}},[t._v("#")]),t._v(" インストール")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" sanic\n")])])]),s("h2",{attrs:{id:"hello-worldアプリケーション"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hello-worldアプリケーション"}},[t._v("#")]),t._v(" hello, worldアプリケーション")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("多くのデコレーター・ベースのフレームワークのいずれかを使用したことがある人であれば、このフレームワークはおそらく皆さんにとって馴染みのあるものです。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("もしあなたがFlaskや他のフレームワークから来ているのであれば、いくつかの重要な指摘があります。Sanicはパフォーマンス、柔軟性、使いやすさを目指しています。これらの指針は、APIとその動作に目に見える影響を与えます。")])])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Sanic\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" text\n\napp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyHelloWorldApp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello_world")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"重要なノート"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重要なノート"}},[t._v("#")]),t._v(" 重要なノート")]),t._v(" "),s("ul",[s("li",[t._v("すべてのリクエストハンドラは、sync("),s("code",[t._v("def hello_world")]),t._v(")またはasync("),s("code",[t._v("async def hello_world")]),t._v(")のいずれかになります。明確な理由がない限り、常に`async'を使ってください。")]),t._v(" "),s("li",[s("code",[t._v("request")]),t._v("オブジェクトは、常にハンドラの最初の引数です。他のフレームワークは、インポートされるコンテキスト変数でこれを渡します。"),s("code",[t._v("async")]),t._v("の世界では、これはあまりうまく動作しないでしょうし、それについて明示的に説明することは (よりクリーンでよりパフォーマンス的であることは言うまでもありませんが) はるかに簡単です。")]),t._v(" "),s("li",[t._v("応答タイプを使用する必要があります。他の多くのフレームワークでは、"),s("code",[t._v('return"Hello, world。"')]),t._v("またはthis:"),s("code",[t._v('return {"foo":"bar"}')]),t._v("です。しかし、この暗黙の呼び出しを行うには、チェーン内のどこかで、意味を判断するために貴重な時間を費やす必要があります。この容易さを犠牲にして、Sanicは明示的なコールを要求することにしました。")])]),t._v(" "),s("h3",{attrs:{id:"実行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#実行"}},[t._v("#")]),t._v(" 実行")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("上記のファイルを"),s("code",[t._v("server.py")]),t._v("として保存します。そして、それを起動します。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("sanic server.app\n")])])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("この"),s("strong",[t._v("別の")]),t._v("重要な違いです。他のフレームワークには、組み込みの開発サーバーが付属しており、開発用であることを明示的に示しています。逆のことは、Sanicにも言える。")]),t._v(" "),s("p",[s("strong",[t._v("パッケージ化されたサーバーは、実稼働に対応しています。")])])]),t._v(" "),s("h2",{attrs:{id:"sanicエクステンション"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sanicエクステンション"}},[t._v("#")]),t._v(" Sanicエクステンション")]),t._v(" "),s("p",[t._v("Sanicは、意図的にクリーンで偏見のない機能リストを目指しています。プロジェクトは、特定の方法でアプリケーションを構築することを要求したくないし、特定の開発パターンを処方することを避けようとしている。コアリポジトリの要件を満たさない追加機能を追加するために、コミュニティによって構築・維持されているサードパーティプラグインが多数あります。")]),t._v(" "),s("p",[t._v("しかし、"),s("strong",[t._v("API開発者を助けるために")]),t._v("、Sanic組織は"),s("RouterLink",{attrs:{to:"/ja/plugins/sanic-ext/getting-started.html"}},[t._v("Sanicエクステンション")]),t._v(" という公式プラグインを維持しており、以下を含むあらゆる種類のグッズを提供しています。")],1),t._v(" "),s("ul",[s("li",[t._v("Redoc および/または Swagger による "),s("strong",[t._v("OpenAPI")]),t._v(" ドキュメンテーション")]),t._v(" "),s("li",[t._v("CORS"),s("strong",[t._v("保護")])]),t._v(" "),s("li",[t._v("ルートハンドラへの"),s("strong",[t._v("依存性注入")])]),t._v(" "),s("li",[t._v("リクエストのクエリ引数とボディ入力の"),s("strong",[t._v("検証")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("HEAD")]),t._v("、"),s("code",[t._v("OPTIONS")]),t._v("、"),s("code",[t._v("TRACE")]),t._v("のエンドポイントを自動作成する。")]),t._v(" "),s("li",[t._v("定義済み、エンドポイント固有のレスポンスシリアライザー")])]),t._v(" "),s("div",{staticClass:"custom-block new"},[s("p",{staticClass:"custom-block-title"},[t._v("NEW in v21.12")]),t._v(" "),s("p",[t._v("設定方法としては、Sanicと一緒にインストールするのが望ましいですが、パッケージ単体でインストールすることも可能です。")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ pip install sanic[ext]\n")])])])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ pip install sanic sanic-ext\n")])])])])]),t._v(" "),s("p",[t._v("v21.12から、Sanicが同じ環境であれば、Sanic Extensionsを自動的にセットアップするようになりました。また、2つの追加アプリケーションプロパティにアクセスできるようになります。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("app.extend()")]),t._v(" - Sanic Extensionsを設定するために使用されます。")]),t._v(" "),s("li",[s("code",[t._v("app.ext")]),t._v(" - アプリケーションにアタッチされている "),s("code",[t._v("Extend")]),t._v(" インスタンスです。")])])]),t._v(" "),s("p",[t._v("プラグインの使用方法および作業方法の詳細については、"),s("RouterLink",{attrs:{to:"/ja/plugins/sanic-ext/getting-started.html"}},[t._v("プラグイン ドキュメント")]),t._v(" を参照してください。")],1)])}),[],!1,null,null,null);s.default=n.exports}}]);