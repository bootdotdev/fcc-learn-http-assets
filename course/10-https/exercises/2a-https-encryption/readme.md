# Security and Encryption

HTTPS requires that the client use [SSL](https://developer.mozilla.org/en-US/docs/Glossary/SSL) or [TLS](https://developer.mozilla.org/en-US/docs/Glossary/TLS) to protect requests and traffic by encrypting the information in the request. HTTPS is just HTTP with extra security!

![HTTPS](https://i.imgur.com/iOkQUdG.png)

## HTTPS keeps your messages private, but not your identity

We won't cover *how* encryption works in this course, but we will in later courses! For now, it's important to note that while HTTPS encrypts *what you are saying*, it doesn't necessarily protect *who you are*. Tools like [VPNs](https://nordvpn.com/what-is-a-vpn/) are needed for remaining anonymous online.

## HTTPS ensures that you're talking to the right person (or server)

In addition to encrypting the information within a request, HTTPS uses [digital signatures](https://en.wikipedia.org/wiki/Digital_signature) to prove that you're communicating with the server that you think you are. If a hacker were to intercept an HTTPS request by tapping into a network cable, they wouldn't be able to successfully pretend they are your bank's web server.
