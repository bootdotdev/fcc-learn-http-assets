# JavaScript's Fetch API

In this course, we'll be using JavaScript's built-in [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make HTTP requests. We already used it in the last two assignments!

The `fetch` function is made available to us by the JavaScript language running in the browser, all we have to do is provide it with the parameters it requires.

## Using fetch

```js
const response = await fetch(url, settings)
const responseData = await response.json()
```

We'll go in-depth on the various things happening in this standard `fetch` call later, but let's cover some basics for now.

* `response` is the data that comes back from the server
* `url` is the URL we are making a request to
* `settings` is an object containing some request-specific settings
* The `await` keyword tells JavaScript to wait until the request comes back from the server before continuing
* `response.json()` converts the response data from the server into a JavaScript object

## Assignment

Fix the bug in the code.

The problem is that we aren't waiting for the response to physically come back across the internet connection before continuing with our code.
