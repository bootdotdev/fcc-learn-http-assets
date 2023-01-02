# What are HTTP Headers?

An [HTTP header](https://developer.mozilla.org/en-US/docs/Glossary/HTTP_header) allows clients and servers to pass *additional* information with each request or response. Headers are just case-insensitive [key-value pairs](https://en.wikipedia.org/wiki/Name%E2%80%93value_pair) that pass additional [metadata](https://en.wikipedia.org/wiki/Metadata) about the request or response.

HTTP requests from a web browser carry with them many headers, including but not limited to:

* The type of client (e.g. Google Chrome)
* The Operating system (e.g. Windows)
* The preferred language (e.g. US English)

As developers, we can also define custom headers in each request.

## Headers API

The [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers) API allows us to perform various actions on our request and response headers such as retrieving, setting, and removing them. We can access the headers object through the `Request.headers` and `Response.headers` properties. 

## Assignment

Complete the `logContentType()` function. It takes a response object as input and should log out the `content-type` header to the console

Take a look at the lower section of the code to see exactly how it's being created.

Use the [`.get()`](https://developer.mozilla.org/en-US/docs/Web/API/Headers/get) method on the response object's `headers` property to get access to the header you need.
