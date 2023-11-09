const min = (arr: Array<number>): number | string => {
    if (isArrayEmpty(arr)) return 'The array must not be empty';

    arr.sort((a: number, b: number) => (a - b));
    return arr[0];
}

const max = (arr: Array<number>): number | string => {
    if (isArrayEmpty(arr)) return 'The Array must not be empty';

    arr.sort((a: number, b: number) => (b - a));
    return arr[0];
}

const isArrayEmpty = (arr: Array<any>): boolean => {
    const empty: boolean = arr.length > 0 ? false : true;
    return empty;
}

export { min, max, isArrayEmpty }