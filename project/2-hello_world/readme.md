# NPM init and Hello World

`npm` stands for "Node Package Manager". By installing Node.js, you've gained two new commands:

* `node` - The JavaScript runtime. This will let you run your JavaScript files.
* `npm` - The package manager. This manages dependencies, metadata, and allows you to specify "scripts" to run.

**Most JS devs don't run the `node` command directly, they use it within an npm script.**

## npm init

Start a new node project in the root of your project by typing `npm init` and following the prompts. Next, add a `main.js` file to the root of your project, and for now just add a simple:

```js
console.log('hello world')
```

to that file. This will be the entry point.

Next, edit the `package.json` file that was created during `npm init`. The scripts section should have something like:

```json
...
"scripts": {
  "start": "node main.js"
},
...
```

That adds a "start" script to this project that runs `main.js` using `node`. With all that ready to go, simply run:

```bash
npm start
```

And you should see your "hello world" message logged to the console!

## .gitignore
