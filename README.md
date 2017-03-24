<!--
MIT License

Copyright (c) 2017 Abhishek Soni

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

-->
# Code Snipper

Export your `JavaScript/JSX` code as PNG (More formats coming soon), and use them in blog posts, or wherever it is you wanna use them.

[![npm](https://img.shields.io/npm/dt/code-snipper.svg)](https://npmjs.com/packages/code-snipper)
[![npm](https://img.shields.io/npm/l/code-snipper.svg)](https://npmjs.com/packages/code-snipper)


## TOC
* [Installation](#installation)
* [Command Line Usage](#command-line-usage)
* [Syntax](#syntax)
* [Options](#options)
* [Module Usage](#module-usage)
* [Available Themes](#available-themes)
* [Copyright](#copyright)


## Installation

We are sticking with `yarn` for it's speed but you can use `npm`.

```bash
$ yarn add code-snipper
```

For npm,
```bash
$ npm install -g code-snipper
```
**Note**: If you want to use it as a library in your project, you can remove the optional `-g` flag above.

## Command Line Usage

Let's say you have a JS file with the following contents:

```js
const success = 'false';
while(!success){
    keepWorking();
}
```
To generate an Image for the above code snippet:

```bash
$ copper index.js
```

This will save an image named `index.js.png` with the above JS code.

#### image.js.png
![Example Image](https://raw.githubusercontent.com/abhisheksoni27/code-snipper/master/examples/example.js.png)

## Syntax

The basic syntax for the `copper` command is,

```bash
$ copper (filename) [options|flags]
```

**filename** : Can be a JavaScript or a JSX file.

**options** : a CLI option (used as `--flag` `value`) 

## Options

## `-t, --theme` : defines theme

To change the theme, pass this argument. To see the available themes, see [themes.md](/themes.md)

```bash
$ copper index.js -t hybrid //uses 'hybrid' instead of default theme
```

## `-f, --font` : defines font

You can use any font pre-installed in your system. (**Google Fonts** support is on the list of things to be added.)

```bash
$ copper index.js -f Raleway //uses 'Raleway' instead of 'Source Code Pro'
```
## `-r, --resolution` : defines resolution(zoomFactor)

This flag changes the size of the image.

```bash
$ copper index.js -r 2
```

## `--fontSize` : defines font size

Change the default font size. (Don't pass in units, or it won't work.)

```bash
$ copper index.js --fontSize 25 Raleway //uses '25px' instead of '20px'
```
---

## Module Usage

**Step 1.** Require the module
```js
const copper = require('code-snipper');
```

**Step 2.** Use it.
```js
copper(fileName, options);
```
#### `fileName` **required**
Name of the file containing the code snippet.
####  `options` **optional**
An object via which you can pass in the following parameters.

* theme &ndash; See Available Themes
* font &ndash; Any font installed on your machine.
* fontSize &ndash; Without units.
* resolution &ndash; Make the image fatter

##### Default `options` object
```js
{
    resolution: 1,
    theme: 'hybrid',
    font: 'Source Code Pro',
    fontSize: 20,
    background: '#fff'
}
```


## Available Themes

All the themes available in [hightlight.js](https://highlightjs.org/) can be used. The list can be found at [Themes.md](/themes.md)

To check out how each theme looks, check this [Highlight.js demo](https://highlightjs.org/static/demo/):

## Copyright
© 2017 Made by Abhishek Soni. 