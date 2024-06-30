"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.min = exports.mergerArrays = exports.max = exports.isArrayEmpty = void 0;
const min = (a) => {
    if (isArrayEmpty(a))
        return 'The array must not be empty';
    a.sort((a, b) => (a - b));
    return a[0];
};
exports.min = min;
const max = (a) => {
    if (isArrayEmpty(a))
        return 'The Array must not be empty';
    a.sort((a, b) => (b - a));
    return a[0];
};
exports.max = max;
const isArrayEmpty = (a) => {
    const empty = a.length > 0 ? false : true;
    return empty;
};
exports.isArrayEmpty = isArrayEmpty;
const mergerArrays = (arr1, arr2) => {
    if (isArrayEmpty(arr1) || isArrayEmpty(arr2))
        return "Both Array cannot be empty";
    return Array.from(new Set([...arr1, ...arr2]));
};
exports.mergerArrays = mergerArrays;
