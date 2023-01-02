# Bugs vs Errors

Error handling via try/catch is **not** the same as debugging. Likewise, errors are **not** the same as bugs.

* Good code with no bugs can still produce errors that are gracefully handled
* Bugs are, by definition, bits of code that aren't working as intended

## Debugging

"Debugging" a program is the process of going through your code to find where it is not behaving as expected. Debugging is a manual process performed by the developer.

Examples of debugging:

* Adding a missing parameter to a function call
* Updating a broken URL that an HTTP call was trying to reach
* Fixing a date-picker component in an app that wasn't displaying properly

## Error handling

"Error handling" is code that can handle *expected* edge cases in your program. Error handling is an automated process that we design into our production code to protect it from things like weak internet connections, bad user input, or bugs in other people's code that we have to interface with.

Examples of error handling:

* Using a try/catch block to detect an issue with user input
* Using a try/catch block to gracefully fail when no internet connection is available

## In short, don't use try/catch to try to handle bugs

If your code has a [bug](https://en.wikipedia.org/wiki/Software_bug), try/catch won't help you. You need to just go find the bug and fix it.

If something out of your control can produce issues in your code, you should use try/catch or other error-handling logic to deal with it.

For example, there could be a prompt in Fantasy Quest for users to type in a new character name, but we don't want them to use punctuation. Validating their input and displaying an error message if something is wrong with it would be a form of "error handling".
