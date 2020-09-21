const path = require('path');
const meow = require('meow');
const fg = require('fast-glob');

const cli = meow();

const input = []
.concat(cli.input)
.filter(Boolean)
.map(file => {
  console.log(path.resolve('./'), file)
  return path.join(path.resolve('./'), file);
});

console.log({input})

const entries = fg.sync(input)

console.log({entries})