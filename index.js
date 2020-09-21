const meow = require('meow');
const fg = require('fast-glob');

const cli = meow();

console.log({input: cli.input})

const entries = fg.sync(cli.input)

console.log({entries})