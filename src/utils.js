import moment from 'moment';
import 'moment/locale/ru';

const path = require('path');
const fs = require('fs');

export function read(callback) {
    let values = [];

    const configPath = path.resolve('c://', 'RndGen', './config.json');
    console.log(`Path to config file => ${configPath}`);

    fs.readFile(
        path.resolve(path.resolve('c://', 'RndGen', './config.json')),
        'utf-8',
        (err, data) => {
            if (err) throw err;
            values = JSON.parse(data);
            values.loadTime = moment(new Date().getTime()).format('LLL');
            return callback(values);
        }
    );
}

export function arrayToObject(array, keyField) {
    return array.reduce((obj, item) => {
        obj[item[keyField]] = item;
        return obj;
    }, {});
}