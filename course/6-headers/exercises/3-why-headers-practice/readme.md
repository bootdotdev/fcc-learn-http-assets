# Why are headers useful?

Headers are useful for several reasons from design to security, but most often headers are used as [metadata](https://en.wikipedia.org/wiki/Metadata) or data *about* the request. So, for example, let's say we wanted to ask for a player's level from the Fantasy Quest server. We need to send that player's ID to the server so it knows which player to send back the information for. That ID *is my request*, it's not information *about my request*.

A good example of a use case for headers is [authentication](https://auth0.com/intro-to-iam/what-is-authentication/). Often times a user's credentials are included in request headers. Credentials don't have much to do with the request *itself*, but simply authorize the requester to be allowed to make the request in question.

## Assignment 

Because we don't want any of our users to accidentally overwrite another user's saved data, our backend team has required that we use the `X-API-Key` header for all requests to *Fantasy-Quest's* server. By using different values, we're telling the server that we are a different person.

Let's practice using headers by playing with the `X-API-Key` Header. I have written some code for you that:

1. Gets a location object from our game server.
2. Logs that object to the console.
3. Updates the object and sends those changes back to the server.
4. Gets the location object again and logs to the console to display the changes.

Run the code in its *current state* to see the return values. You'll notice that the two objects that are logged to the console are the *same*. This is because the `X-API-Key` they are using is *different*, the update isn't being applied to the same account that we're checking in the last `getLocationResponse` call.

Use the same apiKey value in the last call to `getLocationResponse` and rerun the code. Notice the location object is updated correctly!
