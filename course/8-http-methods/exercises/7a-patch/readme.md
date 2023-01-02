# HTTP Patch vs PUT

You may encounter [PATCH](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH) methods from time to time. While it is not nearly as common as the other methods, like `PUT`, it's important to know about it and what it does. The `PATCH` method is intended to *partially* modify a resource.

Long story short, `PATCH` isn't nearly as popular as `PUT`, and many servers, even if they allow partial updates, will still just use the `PUT` method for that.
