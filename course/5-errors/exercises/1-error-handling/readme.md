# Error handling in JavaScript

When something goes wrong while a program is running, JavaScript uses the `try/catch` paradigm for handling those errors. Try/catch is fairly common, Python uses a similar mechanism.

## First, an error is thrown

For example, let's say we try to access a property on an undefined variable. JavaScript will automatically "throw" an error.

```js
const speed = car.speed
// The code crashes with the following error:
// "ReferenceError: car is not defined"
```

## Trying and catching errors

By wrapping that code in a try/catch block, we can handle the case where `car` is not yet defined.

```js
try {
  const speed = car.speed
} catch (err) {
  console.log(`An error was thrown: ${err}`)
  // the code cleanly logs:
  // "An error was thrown: ReferenceError: car is not defined"
}
```

## Assignment

The following code is failing to execute. It is throwing an error string that isn't being handled gracefully. As a result, the entire program is crashing.

Properly handle the error in the code by wrapping all of the function calls within a `try...catch` block. The `catch` block should log any errors to the console.
