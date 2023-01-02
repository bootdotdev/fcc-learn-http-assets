# Adding recursion

This is going to be the largest step so far, and will require the most "figuring it out on your own". If you get stuck, please reach out in Discord!

We're going to update the `crawlPage` function to be [recursive](https://blog.boot.dev/javascript/how-to-recursively-traverse-objects/), which means it's a function that will call itself. We do this because we want to continue to crawl each URL we find on a page until we've crawled every page on the site.

`crawlPage` will now take 3 arguments: `crawlPage(baseURL, currentURL, pages)`

The `currentURL` parameter is the *current* URL we're crawling. In the first call to `crawlPage()` this will just be a copy of the `baseURL`, but as we make further fetch requests to all the URLs we find on the `baseURL`, the `currentURL` value will change while the base stays the same.

The `pages` object will be used to keep track of the number of times we've seen each internal link. This function needs to always return an updated version of this object.

## Here's my pseudo code for the new crawlPage

1. Make sure the `currentURL` is on the same domain as the `baseURL`. If it's not, just return the current `pages`. We don't want to crawl the entire internet, just the domain in question.
2. Get a normalized version of the `currentURL`.
3. If the `pages` object already has an entry for the normalized version of the current URL, just increment the count and return the current `pages`.
4. If we've gotten here, we haven't yet made a request to the current URL, so let's do that, and maybe add a `console.log` so you can watch your crawler go in real-time.
5. Assuming all went well with the `fetch` request, get all the URLs from the response body HTML
6. Recursively crawl each URL you found on the page and update the `pages` to keep an aggregate count
7. Finally, return the updated `pages` object

## Manually test

In the `main.js` file get the returned `pages` object and log it to the console. You should see accurate internal link counts!
