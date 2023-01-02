# Requests and Responses Quiz

![requests and responses HTTP](https://i.imgur.com/ReFw6nN.png)

* A "client" is a computer making an HTTP request
* A "server" is a computer responding to an HTTP request
* A computer can be a client, a server, both, or neither. "Client" and "server" are just words we use to describe what computers are doing within a communication system.
* Clients send requests and receive responses
* Servers receive requests and send responses

## Example code

```js
const itemURL = 'https://api.boot.dev/v1/courses_rest_api/learn-http/items'

const items = await getData(itemURL)

console.log(items)

async function getData(url) {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': 'Testing',
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}
```
