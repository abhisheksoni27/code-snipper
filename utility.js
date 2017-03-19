const prettier = require("prettier");

const colors = require('./colors').color;

const random = () => {
  return Math.floor(Math.random() * 5);
}

const l = (s) => {
  console.log(s);
}

const newColor = () => {
  let index = random();
  return colors[index];
}

const prettify = (source) => {

  return prettier.format(source, {
    printWidth: 80,
    tabWidth: 4,
    singleQuote: true,
    trailingComma: "none",
    bracketSpacing: true,
    parser: 'babylon'
  });

}

module.exports = {
  random,
  l,
  newColor,
  prettify
}