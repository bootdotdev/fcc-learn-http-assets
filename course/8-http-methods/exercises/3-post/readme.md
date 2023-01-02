# POST Requests

An [HTTP POST request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) sends data to a server, typically to create a new resource. The `body` of the request is the *payload* that is being sent to the server with the request, its type is indicated by the `Content-Type` header.

## Adding a body

The `body` of the request is the *payload* that is being sent to the server with the request, its type is indicated by the `Content-Type` header - for us, that's going to be JSON. `POST` requests are generally *not* safe methods to call multiple times, because it alters the state of the server. You wouldn't want to accidentally create 2 accounts for the same user, for example.

```js
await fetch(url, {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
```

## Assignment

We need to save newly created characters on our *Fantasy Quest* server. We will use the `getUsers` function we created in the last exercise to make sure our creation logic is working.

Let's create the `createUser()` function. It should:

1. Take `URL` and the `data` body as parameters.
2. Call `fetch`. `fetch()` should:
   1. Use the `POST` Method
   2. Use the `cors` mode
   3. Set the `X-API-Key` header, with `apiKey` as its value
   4. Set the `Content-Type` header with `application/json` as its value
   5. Include the `body` field and pass the data as the key. Don't forget to stringify the data as `JSON`!
3. Return the response's JSON body
