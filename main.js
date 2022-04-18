'use strict';


// map
function map(array, cb) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(cb(array[i], i, array));

    }

    return result;
}


// filter
function filter(array, cb) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (cb(array[i], i, array) === true) {
            result.push(array[i]);
        }
    }

    return result;
}


//функция, которая возвращает объект.
const notification = [
    {
        date: '31/07/2019',
        msg: 'Some message here',
    }

];

function returnDateMessage(array, date, msg) {

    let result = {};

    for (let i = 0; i < array.length; i++) {
        if (!result[array[i][date]]) {
            result[array[i][date]] = [];
        }

        result[array[i][date]].push(array[i][msg]);
    }

    return result;
}