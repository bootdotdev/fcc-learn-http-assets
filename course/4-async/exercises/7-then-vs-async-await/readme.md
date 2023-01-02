# .then() vs await

In the early days of web browsers, promises and the `await` keyword didn't exist, so the only way to do something asynchronously was to use callbacks.

A "callback function" is a function that you hand to another function. That function then calls your callback later on. The [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) function we've used in the past is a good example.

```js
function callbackFunction(){
  console.log("calling back now!")
}
const milliseconds = 1000
setTimeout(callbackFunction, milliseconds)
```

While even the `.then()` syntax is generally easier to use than callbacks without the `Promise` API, the `await` syntax makes them even easier to use. You should use `async` and `await` over `.then` and [New Promise()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) as a general rule.

To demonstrate, which of these is easier to understand?

```js
fetchUser.then(function(user){
  return fetchLocationForUser(user)
}).then(function(location){
  return fetchServerForLocation(location)
}).then(function(server){
  console.log(`The server is ${server}`)
});
```

```js
const user = await fetchUser()
const location = await fetchLocationForUser(user)
const server = await fetchServerForLocation(location)
console.log(`The server is ${server}`)
```

They both do the same thing, but the second example is so much easier to understand! The `async` and `await` keywords weren't released until *after* the `.then` API, which is why there is still a lot of legacy `.then()` code out there.
