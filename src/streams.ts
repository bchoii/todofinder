import { createReadStream } from 'fs';
const readline = require('readline');
const stream = require('stream');

const searchStream = (filename: string, text: string) => {
  return new Promise((resolve) => {
    const inStream = createReadStream('file/' + filename + '.txt');
    const outStream = new stream();
    const rl = readline.createInterface(inStream, outStream);
    const result: any = [];
    const regEx = new RegExp(text, 'i');
    rl.on('line', function (line: string) {
      if (line && line.search(regEx) >= 0) {
        result.push(line);
      }
    });
    rl.on('close', function () {
      console.log('finished search', filename);
      resolve(result);
    });
  });
};
