const yargs = require('yargs');
const fs = require('fs');
const path = require('path');


const argv = yargs.option('text', { alias: 't', default: false }).argv;
const file = path.resolve(__dirname, './log.txt');

if (argv.text) {
  if (fs.existsSync(file)) {
    console.log(`Append ${argv.text} to the log.txt file.`);
    fs.appendFileSync(file, `${argv.text}\n`);
  }
} else {
  fs.writeFileSync(file, '');
  console.log('Clear the log.txt file.');
}
