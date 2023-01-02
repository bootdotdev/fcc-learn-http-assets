# Setup

In this project, we'll be building a Web Crawler in JavaScript using Node.js! To rank well in Google Search, websites need to internally link pages one to another. For example, my blog post about the benefits of cheap haircuts should probably have a link to my other blog post about the best places to get haircuts.

We're going to write a JavaScript application that generates an "internal links" report for any website on the internet by crawling each page of the site.

## Setup

Before we dive into the project, let's make sure you are all set up properly. You will need:

1. A code editor. I use [VS code](https://code.visualstudio.com/), though you can use whatever you're comfortable with.
2. A command line. I work on Mac OS/Linux, so instructions will be in Bash. I recommend [WSL 2](https://docs.microsoft.com/en-us/windows/wsl/install) if you're on Windows so you can still use Linux commands. That said, you can use native Windows if you choose, you may just have to convert some commands on your own.
3. [NVM](https://github.com/nvm-sh/nvm) installed.

## Installing Node.js with NVM

I recommend NVM because it allows you to have multiple installations of Node.js on the same machine. After installing NVM, add an `.nvmrc` file to the root of your project directory that contains a snippet of text:

```
18.7.0
```

This allows you to simply type `nvm use` in your CLI while in the root of your project to activate the correct version of node! You may get an installation command to run if you don't yet have that version of node, but it's just another one-liner.

Check to make sure you've activated the correct version of `node` by typing:

```bash
node --version
# Prints: v18.7.0
```
