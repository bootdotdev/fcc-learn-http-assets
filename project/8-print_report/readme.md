# Print a report

We're almost done, we've done all the hard parts! All we need to do now is clean up the output so that it's more human-readable.

Let's add a `printReport(pages)` function to a new file called `report.js`. The purpose of this function is to convert the `pages` object into something that looks good and can be logged to the console.

1. Print that the report is starting
2. Sort the pages so that pages with the largest number of inbound internal links are first
3. Print each page in a nice, formatted way. Something like: `Found ${count} internal links to ${url}`

## I'd recommend breaking out the sorting logic

The actual sorting logic can probably its own function that `printReport` calls. That sorting function would be a good candidate for additional unit tests!

## Use it in main.js

Use your new `printReport` function in `main.js` and enjoy your new SEO link analyzer!
