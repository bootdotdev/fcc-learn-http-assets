# URL Paths

The URL Path comes right after the domain (or port if one is provided) in a URL string.

In this URL, the path is `/root/next`:

`http://testdomain.com/root/next`

## What paths meant in the early internet

In the early days of the internet, and sometimes still today, many web servers simply served raw files from the server's file system. For example, if I wanted you to be able to access some text documents, I could start a web server in my `documents` directory. If you made a request to my server you would be able to access different documents by using the path that matched my local file structure.

If I had a file in my local `/documents/hello.txt`, you could access it by making a `GET` request to `http://example.com/documents/hello.txt`.

## How paths are used today

Most modern web servers don't use that simple mapping of `URL path` -> `file path`. Technically, a URL path is just a string that the web server can do what it wants with, and modern websites take advantage of that flexibility. Some common examples of what paths are used for include:

* The hierarchy of pages on a website, whether or not that reflects a server's file structure
* Parameters being passed into an HTTP request, like an ID of a resource
* The version of the API
* The type of resource being requested

## Assignment

Fix the `getResources` function. This is a flexible function that, given a path, makes a `GET` request to the fantasy quest server and returns the response body. Update the `fullURL` string so that it's the base URL, in our case `https://api.boot.dev`, concatenated with the given path.
