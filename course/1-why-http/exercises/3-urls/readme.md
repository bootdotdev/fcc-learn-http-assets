# HTTP URLs

A URL, or [Uniform Resource Locator](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL), is essentially the address of another computer, or "server" on the internet. Part of the URL specifies how to reach the server, and part of it tells the server what information we want - but more on that later.

For now, it's important to understand that a URL represents a piece of information on another computer that we want access to. We can get access to it by making a *request*, and reading the *response* that the server replies with.

## Assignment

As we talked about in the last assignment, the `getItemData()` function was requesting a resource from a server to ask for some information about the items in the "Fantasy Quest" game.

I've updated the code to be more flexible. The `getData()` function now takes a URL as a parameter. You'll notice that if you run the code in its current state you get a strange error about "unexpected tokens". That's because we're not getting a proper HTTP response. After all, we aren't making our request to a valid URL. Fix the code so that the `getData` function requests the `itemURL`. 
