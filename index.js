const path = require('path');
const fg = require('fast-glob');
const normalize = require('normalize-path');

const input = normalize(path.resolve('test/fixtures/index.html'));
console.log({input})
const entries = fg.sync(input)

console.log({entries})