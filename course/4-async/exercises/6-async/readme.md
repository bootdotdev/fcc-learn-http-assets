# The async keyword

While the `await` keyword can be used in place of `.then()` to *resolve* a promise, the [async keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) can be used in place of [New Promise()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) to *create* a new promise.

When a function is prefixed with the `async` keyword, it will *automatically* return a Promise. That promise resolves with the value that your code returns from the function. You can think of `async` as "wrapping" your function within a promise.

These are equivalent:

## New Promise()

```js
function getPromiseForUserData(){
  return new Promise((resolve) => {
    fetchDataFromServerAsync().then(function(user){
      resolve(user)
    })
  })
}

const promise = getPromiseForUserData()
```

## Async

```js
async function getPromiseForUserData(){
  const user = await fetchDataFromServer()
  return user
}

const promise = getPromiseForUserData()
```

## Assignment

As it turns out, the `await` keyword can *only* be used within `async` functions.

Go ahead and try to run the code! You'll get an error.

Update our `getItemData()` function in our Fantasy Quest code so that it can properly `await` the promise returned by the [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) call.
