# Test-driven development

"Test-driven development" is a popular method of writing software. The idea is that you write tests for your code *first*, then you write the code that gets the tests to pass. We're going to approach this project using *a bit of* TDD.

## Install Jest

[Jest](https://jestjs.io/) is a fairly popular testing library for JavaScript. Install it in your project as a [dev dependency](https://medium.com/@stalonadsl948/dependencies-vs-devdependencies-926e096a3dee) using `npm`

```bash
npm install jest --save-dev
```

Note: Don't forget to add `node_modules/` to your `.gitignore` file. You don't want all the `jest` dependencies [in your git repo](https://sebhastian.com/git-ignore-node_modules/)!

## Configure a test command

Next, add a `test` script to your `package.json` file:

```json
"scripts": {
  "start": "node main.js",
  "test": "jest"
},
```

## Normalizing URLs

We need a function that accepts as input:

* A URL string

And returns a "normalized" URL. To "normalize" means to "make the same". So, for example, all of these URLs are the "same page" according to most websites and HTTP standards:

* https://wagslane.dev/path/
* https://wagsLane.Dev/path
* https://wagslane.dev/path
* http://wagslane.dev/path

We want our `normalizeURL()` function to map all of those same inputs to a single normalized output: `wagslane.dev/path`.

## Stub the function

In test driven development (TDD), you typically follow this flow:

1. Stub out the function
2. Write the tests
3. Write the code that passes the tests

So, create a file called `crawl.js` and create a function called `normalizeURL`. Make sure to [export it](https://www.sitepoint.com/understanding-module-exports-exports-node-js/) from the module (file). I use the following syntax at the bottom of a JavaScript file to export something:

```js
modules.exports = {
  normalizeURL
}
```

## Create the tests file

Read up on Jest's [getting started guide here](https://jestjs.io/docs/getting-started). By default, the `jest` command will look for files that end in `.test.js`, so write your first tests in a file called `crawl.test.js` in the root of your project. 

You can import the Jest functions like this in JavaScript:

```js
const { test, expect } = require('@jest/globals')
```

And of course import the function we want to test:

```js
const { normalizeURL } = require('./crawl.js')
```

## Write some tests

Write a few tests! Remember, this function should take a single URL (string) and return the normalized version of the URL as a string. This will help us later to detect whether two different URLs are the same *web page*, which is all our users care about.

Try to test all the [edge-cases](https://en.wikipedia.org/wiki/Edge_case) you can think of.

## Run your tests

To run your tests, type `npm run test` into the console. This works because you added the "test" script to `package.json`. You should see some *failing tests* now, which is expected because you haven't filled in the `normalizeURL` function yet.

## Write the normalizeURL function

I recommend using the [URL object](https://nodejs.org/api/url.html#url-strings-and-url-objects) from the Node API. It parses a URL string into a URL object with some properties that will be useful to you.

## Get the tests to pass

Once you're satisfied that your function works as expected, move on to the next step.
