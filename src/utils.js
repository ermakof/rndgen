const path = require('path');
const fs = require('fs');

export function read(callback) {
  let values = [];

  console.log(path.resolve(process.resourcesPath, './results.txt'));

  fs.readFile(
    path.resolve(process.resourcesPath,'./results.txt'),
    'utf-8',
    (err, data) => {
      if (err) throw err;
      values = data.toString().split('\n');

      const listItems = values.map(val => val);
      console.log('read file results.txt => listItems');
      console.log(listItems);
      return callback(listItems);
    }
  );
}
