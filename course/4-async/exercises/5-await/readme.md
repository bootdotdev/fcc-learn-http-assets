# Promises and the "await" keyword

We have used the [`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) keyword a few times in this course, it's time we finally understand what's going on under the hood.

The `await` keyword is used to *wait* for a Promise to resolve. Once it has been resolved, the `await` expression returns the value of the resolved `promise`.

## Example with .then callback

```js
promise.then((message) => {
  console.log(`Resolved with ${message}`)
}).
```

## Example of awaiting a promise

```js
const message = await promise
console.log(`Resolved with ${message}`)
```

## Assignment

Similar to before, the `applyDamage` function takes a damage value and the player's current HP as inputs and returns a Promise. On line 1, call `applyDamage` with inputs:

* `damage` = `25`
* `currentHP` = `50`

Then `await` the returned promise and save the resolved value in a variable called `message` so it can be logged to the console.
