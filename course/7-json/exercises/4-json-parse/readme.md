# Parsing JSON

## Parse

The [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) method takes a JSON string as input and constructs the JavaScript value/object described by the string. This allows us to work with the JSON as an object!

```js
const json = '{"title": "Avengers Endgame", "Rating":4.7, "inTheaters":false}';
const obj = JSON.parse(json)

console.log(obj.title)
// Avengers Endgame
```

## Assignment

It's common for developers to write local tests using mock (or fake) data that looks like real data. Let's ensure that the JSON format that the backend Fantasy Quest developers provided to us is valid JSON! It would be a shame to write a bunch of code just to find out the backend has given us the wrong format.

Complete the `parseLocation` function. Use a [try/catch block](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) to safely call `JSON.parse` on the `locationString` provided. Keep in mind that `JSON.parse` throws an error if it is given a string that isn't valid JSON.

If you can parse the string successfully, use the `printLocationObj` function to print the parsed object. If an error was thrown, just log `invalid json string` to the console.
