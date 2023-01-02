# Subdomains

We learned about how a domain name resolves to an IP address, which is just a computer on a network - often the internet.

A *subdomain* prefixes a domain name, allowing a domain to route network traffic to many different servers and resources. 

For example, the [Boot.dev](https://boot.dev) website that you're on right now is hosted on a different computer than our blog. Our blog, found at [blog.boot.dev](blog.boot.dev) is hosted on our "blog" subdomain.

## Assignment

I've updated the `getItemData` function from before. Now it accepts just a `domain` as input. It's convenient this way because it means if the API we're using ever changes its domain, we only need to update one variable.

Problem is, there is a bug. The API isn't hosted on `boot.dev`, it's hosted on the `api` subdomain! Fix the bug.
