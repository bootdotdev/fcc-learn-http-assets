# URL Query Parameters

a URL's query parameters appear next in the URL structure but are *not* always present - they're optional. For example:

[https://www.google.com/search?q=boot.dev](https://www.google.com/search?q=boot.dev)

`q=boot.dev` is a query parameter. Like headers, query parameters are `key / value` pairs. In this case, `q` is the key and `boot.dev` is the value.

## Assignment

The backend team building *Fantasy Quest's* server has added support for query parameters! The server offers a `sort` parameter that can be optionally added by appending `?sort=fieldName` to the end of the URL, where `fieldName` is the property of the resource you want the response records sorted by.

We are creating a leaderboard and want to sort our user records by their *level*.

Update the `getUsers` function's `fullURL` with a *query parameter* that will sort the user records by level.
