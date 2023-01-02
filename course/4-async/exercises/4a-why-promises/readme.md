# Why are Promises useful?

Promises are the cleanest (but not the only) way to handle the common scenario where we need to make requests to a server, which is typically done via an HTTP request. In fact, the [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) function we were using earlier in the course returns a promise!

## I/O, or "input/output"

Almost every time you use a promise in JavaScript it will be to handle some form of I/O. I/O, or input/output, refers to when our code needs to interact with systems outside of the (relatively) simple world of local variables and functions.

Common examples of I/O include:

* HTTP requests
* Reading files from the hard drive
* Interacting with a Bluetooth device

Promises help us perform I/O without forcing our entire program to freeze up while we wait for a response.
