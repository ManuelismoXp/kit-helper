declare const min: (a: Array<number>) => number | string;
declare const max: (a: Array<number>) => number | string;
declare const isArrayEmpty: (a: Array<any>) => boolean;
declare const mergerArrays: (arr1: Array<any>, arr2: Array<any>) => any[] | "Both Array cannot be empty";
export { isArrayEmpty, max, mergerArrays, min };
