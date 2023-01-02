# Main

Let's get to work on the actual application! Our program takes as a [command line argument](https://nodejs.dev/en/learn/nodejs-accept-arguments-from-the-command-line) the website URL we want to crawl (or at least the page we want to start from)

Remember, you can run the program itself using `npm`:

```bash
npm run start BASE_URL
```

Where `BASE_URL` is the root URL of the website we want to crawl. For example, you can test with my blog if you want: `https://wagslane.dev`.

Create a main function and call it.

```js
function main(){
  // ?
}

main()
```

All your main function should do at this point is:

1. If the number of CLI arguments is less than 1, print an error and exit.
2. If the number of CLI arguments is more than 1, print an error and exit.
3. If we have exactly one CLI argument, it's the "baseURL", so print some kind of message letting the user know the crawler is starting at that baseURL

## Test it by running it

This isn't a unit test, just run the dang thing and make sure it behaves as you would expect with different command line inputs
