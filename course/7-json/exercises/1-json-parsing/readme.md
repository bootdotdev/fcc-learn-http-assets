# JSON Parsing

JavaScript Object Notation, or [JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON), is a standard for representing *structured* data based on JavaScript's object syntax.

JSON is commonly used to transmit data in web apps using HTTP. The HTTP `fetch()` requests we have been using in this course have been returning *Fantasy Quest* locations, users, and items as [JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) data!

## JSON Syntax

Because we already understand what JavaScript objects look like, understanding JSON is easy! JSON is just a stringified JavaScript object. The following is valid JSON data:

```js
{
    "movies": [
        {
            "id": 1,
            "genre": "Action",
            "title": "Iron Man",
            "director": "Jon Favreau"
        },
        {
            "id": 2,
            "genre": "Action",
            "title": "The Avengers",
            "director": "Joss Whedon"
        }
    ]
}
```

## Parsing HTTP Responses as JSON

JavaScript provides us with some easy tools to help us work with JSON. After making an HTTP request with the [fetch() API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), we get a [Response object](https://developer.mozilla.org/en-US/docs/Web/API/Response). That response object offers us some methods that help us interact with the response. One such method is the [`.json()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) method. The `.json()` method takes the response stream returned by a fetch request and returns a [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves into a JavaScript object parsed from the JSON body of the HTTP response!

```js
const resp = await fetch(...)
const javascriptObjectResponse = await resp.json()
```

## Assignment

Our `getLocations` function is almost done, we just need to parse the response data as JSON and return it.

## Note

It's important to note that the result of this method is *NOT* JSON. It is the result of taking JSON data from the HTTP response body and parsing that input into a JavaScript Object.
