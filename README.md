<!--
aq!

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

Export your `JavaScript/JSX`     code as PNG(More formats coming soon), and use them in blog posts, or wherever it is you wanna use them.

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

## Usage

Let's say you have a JS file with the following contents:

```js
const iterator = 1; 
for (iterator = 0; iterator < 1; iterator++) { 
    console.log("NICE WORK!");
    console.log("NICE WORK!");
    console.log("NICE WORK!");
    iterator++;
}
while(1){
    //dance
}
```

And now you want to send the snippet to your boss, or you are writing a blog post about how functions work in JS, all you have to do is input the following command at your terminal:

```bash
$ copper index.js
```

This will  an image named index.png.

#### image.png


## Syntax

The basic syntax for the `copper` command is,

```bash
$ copper (filename) [options|flags]
```

**filename** : Can be a JavaScript or a JSX file.

**options** : a CLI option (used as `--flag` `value`) 

## Options
