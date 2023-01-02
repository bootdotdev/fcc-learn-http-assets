# Sending JSON

`JSON` isn't just something we get from the server, we can also *send* JSON data!

In JavaScript, two of the main methods we have access to are [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse), and [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

## JSON.stringify()

`JSON.stringify()` is particularly useful for *sending* JSON.

As you may expect the JSON `stringify()` method does the opposite of parse. It takes a JavaScript object or value as input and converts it into a string. This is useful when we need to serialize the objects into strings to send them to our server or store them in a database.

## Assignment

We need to keep track of when players discover new locations. However, there's a bug in the `updateLocationById()` function. It looks like the location's `discovered` property isn't getting saved properly by the server.

Fix the code. The `body` property on the object we're passing into the `fetch` function should be a `JSON` string, not a JavaScript object.
