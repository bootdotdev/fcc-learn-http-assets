# Multiple Query Parameters

We mentioned that query parameters are `key/value` pairs - that means we can have multiple pairs!

`http://example.com?firstName=lane&lastName=wagner`

In the example above:

* `firstName` = `lane`
* `lastName` = `wagner`

The `?` separates the query parameters from the rest of the URL. The `&` is then used to separate *every pair* of query parameters after that.

## Assignment

Our game designer wants us to build a "treasure chest"! We don't want to award players with too many items though, so let's `limit` the number of items our players receive by using the `limit=x` query parameter, where `x` is the number of records we are requesting from the server. We'll also continue to `sort` the items so that less valuable items are looted first.

Complete the `lootTreasure` function. It should add two query parameters to the URL passed to `getItems`:

* `sort`
* `limit`

Sort by the `quality` property.

Set the `limit` based on the `rarity` passed into `lootTreasure`.

* `Common` treasure = 1 item
* `Rare` treasure = 3 items
* `Legendary` treasure = 5 items
