# Crawl the page

Let's start crawling real web pages! For these remaining steps, you'll need a website you can crawl. Preferably a small one with less than 100 pages so the crawling doesn't take all day. You can use my personal blog, `https://wagslane.dev` if you don't have another in mind.

## crawlPage(base_url, url, pages)

Create a `crawlPage` function in `crawl.js`. For now, it will just take a base URL (the root of the site we're going to crawl).

For now, your function should:

1. Use [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to fetch the webpage of the `baseURL`
2. If the HTTP status code is an error level code, print an error and return
3. If the response `content-type` header isn't `text/html` print and error and return
4. Otherwise, just print the HTML body as a string and be done

Remember to use `try/catch` as appropriate for anything that *could* result in an error!

## main.js

Import `crawlPage` into your main function, and call it with the `base_url` passed in and an empty dictionary. Give your program a shot! It should print some HTML that it fetched from the internet!
