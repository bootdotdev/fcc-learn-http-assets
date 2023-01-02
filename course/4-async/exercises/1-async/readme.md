# Synchronous vs Asynchronous 

All of the earlier courses on Boot.dev only had [synchronous](https://developer.mozilla.org/en-US/docs/Glossary/Synchronous) code, which means code that *runs in sequence*. Each line of code executes in order, one after the next. 

![sync vs async](https://i.imgur.com/03FFGu0.png)

Example of synchronous code: 

```js
console.log("I print first");
console.log("I print second");
console.log("I print third");
```

Asynchronous or [`async`](https://developer.mozilla.org/en-US/docs/Glossary/Asynchronous) code runs in *parallel*. That means code further down runs *at the same time that* a previous line of code is still running. A good way to visualize this is with the JavaScript function [setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout).

`setTimeout` accepts a function and a number of milliseconds as inputs. It waits until the number of milliseconds has elapsed, and then it executes the function it was given.

Example of asynchronous code:

```js
console.log("I print first");
setTimeout(() => console.log("I print third because I'm waiting 100 milliseconds"), 100)
console.log("I print second");
```

## Assignment

To help us visualize how asynchronous code executes, let's practice with an example from our game. Keep in mind that you probably wouldn't normally use `setTimeout` to change the order in which text is printed to the console, but it's a good way for us to practice async code.

Update the waiting durations so that text is printed in the following order:

1. Firing up the forge...
2. Smelting Iron Bars...
3. Combining Materials...
4. Shaping Iron...
5. Iron Longsword Complete!

The time required to complete a round of crafting is 2 seconds, so make sure none of the wait times are greater than `2000` ms.
