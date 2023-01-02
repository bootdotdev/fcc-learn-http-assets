# URL Paths

In the early days of the internet, a URL's path often was a reflection of the file path on the server to the resource the client was requesting.

For example, if the website `https://exampleblog.com` had a web server running within its `/home` directory, then a request to the `https://exampleblog.com/site/index.html` URL might expect the `index.html` file from within the `/home/site` directory to be returned.

Websites used to be *very* simple. They were just a collection of text documents stored on a server. A simple piece of server software could handle incoming HTTP requests and respond with the documents according to the path component of the URLs.

## These days, it's not always about the filesystem

On many modern web servers, a URL's path isn't a reflection of the server's filesystem hierarchy. Paths in URLs are essentially just another type of parameter that can be passed to the server when making a request.

Conventionally, two different URL paths should denote different resources. For example, different pages on a website, or maybe different data types from a game server.

## Assignment 

We've successfully gathered user data from the Fantasy Quest server in previous assignments.

Update the URL in the code so we can fetch some "location" data instead.

Use the `/v1/courses_rest_api/learn-http/locations` path.
