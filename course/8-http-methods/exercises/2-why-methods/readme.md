# Why do we use HTTP methods?

As we touched on in the last exercise, the primary purpose of HTTP methods is to indicate to the server what we want to do with the resource we're trying to interact with. At the end of the day, an HTTP method is just a string, like `GET`, `POST`, `PUT`, or `DELETE`, but by *convention*, backend developers almost always write their server code so that the methods correspond with different "CRUD" actions.

The "CRUD" actions are:

* Create
* Read
* Update
* Delete

The bulk of the logic in most web applications is "CRUD" logic. The web interface allows users to create, read, update and delete various resources. Think of a social media site - users are basically creating, reading, updating and deleting their social posts. They are also creating, reading, updating and deleting their user accounts. It's CRUD all the way down!

As it happens, the 4 most common HTTP methods map nicely to the CRUD actions:

* `POST` = create
* `GET` = read
* `PUT` = update
* `DELETE` = delete
