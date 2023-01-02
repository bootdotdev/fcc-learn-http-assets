# HTTP PUT

The HTTP [`PUT`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT) method creates a new resource or replaces a representation of the target resource with the contents of the request's `body`. In short, it updates a resource's properties.

```js
await fetch(url, {
   method: 'PUT',
   mode: 'cors',
   headers: {
   'Content-Type': 'application/json'
   },
   body: JSON.stringify(data)
})
```

## POST vs PUT

You may be thinking `PUT` is similar to `POST` or `PATCH`, and frankly, you'd be right! The main difference is that PUT is meant to be [idempotent](https://developer.mozilla.org/en-US/docs/Glossary/Idempotent), meaning multiple identical PUT requests *should* have the same effect on the server. In contrast, several identical `POST` requests would have additional side effects, such as creating multiple copies of the resource.

## Assignment

You will now use the knowledge you have gained thus far to update a *Fantasy Quest* character using a `PUT` request and retrieve that character using a `GET` request.

Complete the `updateUser()` and `getUserById()` functions. They should update and retrieve individual user resources respectively. They should also both return a promise that resolves to the JSON response body of their respective `fetch()` requests.

We've included the `fullURL` creation logic for you in both functions, we'll be talking more about URL building in the next chapter.
