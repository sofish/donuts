## Cross Origin Request / Proxy

In the app, we don't have to deal with cross origin requests,
but in the dev ENV. Fortunately, we have a simple way to solve the problem.
The only thing to do is open your `package.json` and add a key named `proxy`
that contains an object like this:

```js
// package.json
{
  "name": "donuts",
  "version": "0.1.0",
  "main": "index.js",
  "proxy": {
    "google": "http://google.com",
    "api": "http://api.com"
  }
}
```
We use the `key` as a identifier to tell the server that we would love to
send a request to a special domain ( `value` ). eg, suppose the url of the
dev ENV is `http://127.0.0.1:8023`. When we visit
`http://127.0.0.1:8023/google/path/to/resource` in a web browser,
it means that we're actually sending a request to
`http://google.com/path/to/resource`.

```js
LOCAL/PREFIX/path/to/resource -> REMOTE/path/to/resource
```

