const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/ang-elem/runtime.js',
    './dist/ang-elem/polyfills.js',
    './dist/ang-elem/scripts.js',
    './dist/ang-elem/main.js',
  ]
  await fs.ensureDir('ang-elem')
  await concat(files, 'ang-elem/elements.js');
  await fs.copyFile('./dist/ang-elem/styles.css', 'ang-elem/styles.css')
  //await fs.copy('./dist/ang-elem/assets/', 'ang-elem/assets/' )

})()