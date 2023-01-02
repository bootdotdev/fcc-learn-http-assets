# The Documentation of an HTTP Server

You may be wondering:

> How the heck am I supposed to memorize how all these different servers work???

The good news is that *you don't need to*. When you work with a backend server, it's the responsibility of that server's developers to provide you with instructions, or *documentation* that explains how to interact with it. For example, the documentation should tell you:

* The domain of the server
* The resources you can interact with (HTTP paths)
* The supported query parameters
* The supported HTTP methods
* Anything else you'll need to know to work with the server

![read the docs](https://i.imgur.com/GIlWhYF.jpg)

## The server has control

As we mentioned earlier, the server has complete control over how the path in a URL is interpreted and used in a request. The same goes for query parameters. Not all servers support query parameters for every type of request, it just depends, so you'll need to consult the docs.
