# Promises in JavaScript

A Promise in JavaScript is very similar to making a promise in the real world. When we make a promise we are making a commitment to something. For example, *I promise to explain JavaScript promises to you*, my promise to you has 2 potential outcomes: it is either fulfilled, meaning I eventually explained promises to you, or it is rejected meaning I failed to keep my promise.

The [`Promise Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) represents the eventual fulfillment or rejection of our promise and holds the resulting values. In the meantime, while we're waiting for the promise to be fulfilled, our code continues executing. Promises are the most popular modern way to write asynchronous code in JavaScript.

## Declaring a Promise

Here is an example of a promise that will resolve and return the string "resolved!" or reject and return the string "rejected!" after 1 second.

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (getRandomBool()) {
      resolve("resolved!")
    } else {
      reject("rejected!")
    }
  }, 1000)
})

function getRandomBool(){
  return Math.random() < .5
}
```

## Using a Promise

Now that we've created a promise, how do we use it?

The `Promise` object has [`.then`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) and [`.catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) that make it easy to work with. Think of `.then` as the _expected_ follow-up to my promise, and `.catch` as the "something went wrong" follow-up.

If a promise *resolves*, its `.then` function will execute. If the promise rejects, its `.catch` method will execute.

Here's an example of using `.then` and `.catch` with the promise we made above:

```js
promise.then((message) => {
    console.log(`The promise finally ${message}`)
}).catch((message) => {
    console.log(`The promise finally ${message}`)
})

// prints:
// The promise finally resolved!
// or
// the promise finally rejected!
```

## Assignment 

Complete the `applyDamage` function that takes two parameters:

* `damage`
* `currentHP`

It should return a `Promise` after 1 second because in Fantasy Quest dealing damage with an attack takes some time!

If the damage inflicted would reduce the player's HP to `0` or less, the promise will `reject` with the string:

> The player suffers ${damage} points of damage and has fallen unconscious.  

Otherwise, the promise will `resolve` with the string:

> The player suffers ${damage} points of damage and has ${newHP} hit points remaining.

Where `newHP` is the player's HP after the damage is applied.
