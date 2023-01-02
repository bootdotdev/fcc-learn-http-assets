# Dependencies and URL extraction

Our link tracker will need to know how to read a page of [HTML](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics) text and extract links.

For example, the following HTML page has a single link to `https://blog.boot.dev`:

```html
<html>
    <body>
        <a href="https://blog.boot.dev"><span>Go to Boot.dev</span></a>
    </body>
</html>
```

We want to write a new function called `getURLsFromHTML` in the same `crawl.js` file. It takes a string of HTML as input and returns a list of all the link URLs. To do so, we'll use a third-party HTML parsing library called [JSDOM](https://github.com/jsdom/jsdom).

## Installing JSDOM

```bash
npm install jsdom
```

This will install `jsdom` as a "dependency" (as opposed to `jest` which is a "devDependency"). "Dev dependencies" are not required to run your application, they're only required for development (like testing). Regular dependencies are required to run the program itself.

I'll try not to give too many hints: you should go read the JSDOM docs! That said here are a few:

* `const { JSDOM } = require('jsdom')`
* `new JSDOM(htmlBody)` creates a new "document object model"
* `dom.window.document.querySelectorAll('a')` returns an array of "a" tag elements

In HTML, "a" tags are links. e.g:

```html
<a href="https://boot.dev">Learn Backend Development</a>
```

## getURLsFromHTML()

`getURLsFromHTML(htmlBody, baseURL)` takes 2 arguments. The first is an HTML string as we discussed earlier, while the second is the root URL of the website we're crawling. This will allow us to rewrite [relative URLs into absolute URLs](https://www.seoclarity.net/resources/knowledgebase/difference-relative-absolute-url-15325/).

It returns an *un-normalized* array of all the URLs found within the HTML.

## Write some tests before writing your code

* Test that relative URLs are converted to absolute URLs.
* Test to be sure you find *all* the `<a>` tags in a body of HTML

Then go ahead and implement the function itself!
