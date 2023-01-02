# HTTP Methods - GET

HTTP defines a set of [methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) that we use every time we make a request. We have used some of these methods in previous exercises, but it's time we dive into them and understand the differences and use cases behind the different methods.

## The GET method

The [GET method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) is used to 'get' a *representation* of a specified resource. You are not taking the data away from the server, but rather *getting* a representation, or copy, of the resource in its current state. A get request is considered a [*safe*](https://developer.mozilla.org/en-US/docs/Glossary/Safe/HTTP) method to call multiple times because it doesn't alter the state of the server.

## Making a GET request using the Fetch API

In this course, we have been and will continue to use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make HTTP requests. The [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/fetch) method accepts an optional `init` object parameter as its second argument that we can use to define things like:

* `method`: The HTTP method of the request, like `GET`.
* `headers`: The headers to send.
* `mode`: Used for security, we'll talk about this in future courses.
* `body`: The body of the request. Often encoded as JSON.

Example `GET` request using fetch:

```js
await fetch(url, {
  method: 'GET',
  mode: 'cors',
  headers: {
    'sec-ch-ua-platform': 'macOS'
  }
})
```

## Assignment 

We need to write a reusable function that retrieves all of the *Fantasy Quest* users from our server.

Complete the `getUsers()` function. It should:

1. Call `fetch` using the `URL` parameter. The fetch call should:
  1. Use the `'GET'` Method
  2. Use the `'cors'` mode
  3. Add an `X-API-Key` header with `apiKey` as the value
2. Return the resulting JSON data from the response

We've done this all before, but now you're writing it all from scratch!
