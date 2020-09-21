const path = require('path');
const fg = require('fast-glob');

const input = path.resolve('test/fixtures/index.html');
console.log({input})
const entries = fg.sync(input)

console.log({entries})