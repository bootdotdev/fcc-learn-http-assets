# DNS

As we discussed, the "domain name" or "hostname" is part of a URL. We'll get to the other parts of a URL later.

For example, the URL `https://example.com/path` has a hostname of `example.com`. The `https://` and `/path` portions aren't part of the `domain name -> IP address` mapping that we've been learning about.

## Using the URL API in JavaScript

The `URL` API is built into JavaScript. You can create a [new URL object](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL):

```js
const urlObj = new URL('https://example.com/example-path')
```

And then you can [extract just the hostname](https://developer.mozilla.org/en-US/docs/Web/API/URL):

```js
const urlObj.hostname
```

## Assignment

Complete the `getDomainNameFromURL` function. Given a full URL, it should return the domain (or host) name.
