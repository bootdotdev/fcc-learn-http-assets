# Web Addresses

In the real world, we use addresses to help us find where a friend lives, where a business is located, or where a party is being thrown. In computing, web clients find other computers over the internet using [Internet Protocol or IP](https://en.wikipedia.org/wiki/Internet_Protocol) addresses.

An IP address is a numerical label that serves two main functions:

1. Location Addressing
2. Network Identification

## Domain names and IP Addresses

Each device connected to the internet has a unique IP address. When we browse the internet, the domains we navigate to are all associated with a particular IP address!

For example, this Wikipedia URL points to a page about miniature pigs: `https://en.wikipedia.org/wiki/Miniature_pig`

The [domain](https://en.wikipedia.org/wiki/Domain_Name_System) portion of the URL is `en.wikipedia.org`.

`en.wikipedia.org` converts to a specific IP address, and that IP address tells your computer exactly where to communicate with that Wikipedia page.

## Assignment

Cloudflare is a tech company that provides a cool HTTP server that we can use to look up the IP address of any domain. I've provided a `fetchIPAddress` function that uses the `fetch` API to communicate with Cloudflare. The function takes a domain name as input and should return the IP address associated with that domain.

On line 9, the function is simply logging the entire object we receive from Cloudflare to the console. Run the code to see the structure of the object, but then update the code to return just the IP address found within and remove the logging.
