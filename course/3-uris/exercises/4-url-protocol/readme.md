# The Protocol

The "protocol", also referred to as the "scheme", is the first component of a URL. Its purpose is to define the rules by which the data being communicated is displayed, encoded or formatted.

Some examples of different URL protocols:

* http
* ftp
* mailto
* https

For example:

* `http://example.com`
* `mailto:noreply@fantasyquest.app`

## Not all schemes require a "//"

The "http" in a URL is always followed by `://`. All URLs have the colon, but the `//` part is only included for schemes that have an [authority component](https://www.rfc-editor.org/rfc/rfc3986#section-3.2). As you can see above, the `mailto` scheme doesn't use an authority component, so it doesn't need the slashes.

## Assignment

In the Fantasy Quest game menu, we show user's the email addresses of their friends. We need that email to be a clickable hyperlink. When they click the hyperlink their default email client should open with a new message ready to send to the address they clicked on.

Complete the `getMailtoLinkForEmail` function. It should return a "mailto" hyperlink for the given email.
