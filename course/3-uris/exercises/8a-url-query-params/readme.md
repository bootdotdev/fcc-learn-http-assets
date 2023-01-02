# Query parameters

Query parameters in a URL are *not* always present. In the context of websites, query parameters are often used for marketing analytics or for changing a variable on the web page. With website URLs, the query parameters *rarely* are used to change *which* page you're viewing, though they often will change the page's *contents*.

That said, query parameters can be used for anything the server chooses to use them for, just like the URL's path.

## How Google uses query parameters

1. Open a new tab and go to [https://google.com](https://google.com).
2. Search for "hello world"
3. Take a look at your current URL. It should start with `https://www.google.com/search?q=hello+world`
4. Change the URL to say `https://www.google.com/search?q=hello+universe`
5. Press "enter"

You should see new search results for the query "hello universe". Google chose to use query parameters to represent the value of your search query. It makes sense - each search result page is *essentially* the same page as far as structure and formatting are concerned - it's just showing you different results based on the search query. 
