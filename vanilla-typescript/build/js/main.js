"use strict";
// interface Guitarist {
//   name: string,
//   active: boolean,
//   albums: ( string | number )[];
// }
// Literal types
let myName;
let userName;
userName = 'Amy';
// Functions
const add = (a, b) => {
    return a + b;
};
const logMessage = (message) => {
    console.log(message);
};
logMessage('Hello World');
logMessage(add(2, 3));
// logMessage(add('2',3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction{
//   (a: number, b: number): number
// }
let multiply = function (c, d) {
    return c * d;
};
logMessage(multiply(3, 22));
// Optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// Default params
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMessage(addAll(2, 3, 2));
logMessage(addAll(2, 3));
logMessage(sumAll(2, 3));
