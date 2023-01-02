## Hint

You might want to use a tool like [JSON lint](https://jsonlint.com/) so you can see the javascript object in a prettier format.

Remember that to index into an object at a given key you can use the dot or brackets syntax:

```js
const car = {
    speed: 5
}
console.log(car.speed)
// 5
console.log(car['speed'])
// 5
```

And looping over nested objects in arrays:

```js
const vehicles = {
    cars: [
        {
            speed: 5
        },
        {
            speed: 10
        }
    ]
}

for (const car of vehicles.cars){
    console.log(car.speed)
}
// 5
// 10
```
