# Development

The first thing that should be mentioned is that the webserver that is integrated into Sanic is **not** just a development server.

It is production ready out-of-the-box, *unless you enable in debug mode*.

## Debug mode

By setting the debug mode, Sanic will be more verbose in its output and will disable several run-time optimizations.

```python
from sanic import Sanic
from sanic.response import json

app = Sanic(__name__)

@app.route("/")
async def hello_world(request):
    return json({"hello": "world"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=1234, debug=True)
```

::: warning
Sanic's debug mode will slow down the server's performance and is therefore advised to enable it only in development environments.
:::
## Automatic Reloader

---:1

Sanic offers a way to enable or disable the Automatic Reloader. The `auto_reload` argument will activate or deactivate the Automatic Reloader. Every time a Python file is changed, the reloader will restart your application automatically. This is very convenient while developing. :--:1
```python
app.run(auto_reload=True)
```
:---

---:1 If you have additional directories that you would like to automatically reload on file save (for example, a directory of HTML templates), you can add that at run time. :--:1
```python
app.run(auto_reload=True, reload_dir="/path/to/templates")
# or multiple directories
app.run(auto_reload=True, reload_dir=["/path/to/one", "/path/to/two"])
```
:---

## Best of both worlds
---:1 If you would like to be in debug mode **and** have the Automatic Reloader running, you can pass `dev=True`. This is equivalent to **debug + auto reload**.

*Added in v22.3* :--:1
```python
app.run(dev=True)
```
:---

## Automatic TLS certificate

When running in `DEBUG` mode, you can ask Sanic to handle setting up localhost temporary TLS certificates. This is helpful if you want to access your local development environment with `https://`.

This functionality is provided by either [mkcert](https://github.com/FiloSottile/mkcert) or [trustme](https://github.com/python-trio/trustme). Both are good choices, but there are some differences. `trustme` is a Python library and can be installed into your environment with `pip`. This makes for easy envrionment handling, but it is not compatible when running a HTTP/3 server. `mkcert` might be a more involved installation process, but can install a local CA and make it easier to use.

---:1 You can choose which platform to use by setting `config.LOCAL_CERT_CREATOR`. When set to `"auto"`, it will select either option, preferring `mkcert` if possible. :--:1
```python
app.config.LOCAL_CERT_CREATOR = "auto"
app.config.LOCAL_CERT_CREATOR = "mkcert"
app.config.LOCAL_CERT_CREATOR = "trustme"
```
:---


---:1 Automatic TLS can be enabled at Sanic server run time: :--:1
```
$ sanic path.to.server:app --auto-tls --debug
```

```python
app.run(debug=True, auto_tls=True)
```
:---

::: warning

Localhost TLS certificates (like those generated by both `mkcert` and `trustme`) are **NOT** suitable for production environments. If you are not familiar with how to obtain a *real* TLS certificate, checkout the [How to...](../how-to/tls.md) section. :::

*Added in v22.6*

## CLI

It should be noted that all of these have an equivalent in the Sanic CLI:

```
Development:
  --debug                        Run the server in debug mode
  -r, --reload, --auto-reload    Watch source directory for file changes and reload on changes
  -R PATH, --reload-dir PATH     Extra directories to watch and reload on changes
  -d, --dev                      debug + auto reload
  --auto-tls                     Create a temporary TLS certificate for local development (requires mkcert or trustme)
```