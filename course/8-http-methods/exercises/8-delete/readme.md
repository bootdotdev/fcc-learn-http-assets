# HTTP Delete

The `delete` request does exactly as you would expect: it deletes a specified resource.

### Example of HTTP DELETE

```js
// This deletes the location with ID: 52fdfc07-2182-454f-963f-5f0f9a621d72
const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/locations/52fdfc07-2182-454f-963f-5f0f9a621d72'

await fetch(url, {
  method: 'DELETE',
  mode: 'cors'
})
```

## Assignment

Users need to be able to delete their player accounts! Complete the `deleteUser` function. It should send a `DELETE` request to the given `fullURL`. You'll need to set the method, mode and headers. Like before, set the `X-API-Key` header to equal the given `apiKey`.
