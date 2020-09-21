const fg = require('fast-glob');

const entries = fg.sync('test/fixtures/index.html')

console.log({entries})