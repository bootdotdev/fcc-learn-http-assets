# What is the Domain Name System?

So we've talked about domain names and what their purpose is, but we haven't talked about the system that's used to do that conversion.

[DNS](https://en.wikipedia.org/wiki/Domain_Name_System), or the "Domain Name System", is the phonebook of the internet. Humans connect to websites through [domain names](https://en.wikipedia.org/wiki/Domain_name), like [Boot.dev](boot.dev). DNS "resolves" these domain names to find the associated [IP addresses](https://en.wikipedia.org/wiki/Internet_Protocol) so that web clients can load the resources for the specific address.

![DNS Resolution](https://i.imgur.com/yvfSbVL.png)

## How does DNS Work?

We'll go into more detail on DNS in a future course, but to give you a simplified idea of how it works, let's introduce ICANN. [ICANN](https://www.icann.org/) is a not-for-profit organization that manages DNS for the entire internet.

Whenever your computer attempts to resolve a domain name, it contacts one of ICANN's ["root nameservers"](https://en.wikipedia.org/wiki/Root_name_server) whose address is included in your computer's networking configuration. From there, that nameserver can gather the domain records for a specific domain name from their distributed DNS database.

If you think of DNS as a phonebook, ICANN is the publisher that keeps the phonebook in print and available. 
