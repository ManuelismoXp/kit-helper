const min = (a: Array<number>): number | string => {
    if (isArrayEmpty(a)) return 'The array must not be empty';

    a.sort((a: number, b: number) => (a - b));
    return a[0];
}

const max = (a: Array<number>): number | string => {
    if (isArrayEmpty(a)) return 'The Array must not be empty';

    a.sort((a: number, b: number) => (b - a));
    return a[0];
}

const isArrayEmpty = (a: Array<any>): boolean => {
    const empty: boolean = a.length > 0 ? false : true;
    return empty;
}

const mergerArrays = (arr1: Array<any>, arr2: Array<any>) => {
       if(isArrayEmpty(arr1) || isArrayEmpty(arr2)) return "Both Array cannot be empty"
       return Array.from(new Set([...arr1, ...arr2]))
}

export { isArrayEmpty, max, mergerArrays, min };

