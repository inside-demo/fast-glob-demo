const path = require('path');
const meow = require('meow');
const fg = require('fast-glob');

const cli = meow();

const input = []
.concat(cli.input)
.filter(Boolean)
.map(file => {
  const ignoreFile = file.startsWith('!');
  let ignoreSymbol = '';

  if (ignoreFile) {
    ignoreSymbol = '!';
    file = file.slice(1);
  }

  return path.join(ignoreSymbol, path.resolve('./'), file);
});

console.log({input})

const entries = fg.sync(input)

console.log({entries})