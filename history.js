const fs = require('fs');
const path = require('path');


const file = path.resolve(__dirname, './log.txt');
const { HOOK_NAME } = process.env;

if (HOOK_NAME) {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, '');
  }

  console.log(`Append ${HOOK_NAME} to the log.txt file.`);
  fs.appendFileSync(file, `${HOOK_NAME}\n`);
} else {
  fs.writeFileSync(file, '');
  console.log('Clear the log.txt file.');
}
