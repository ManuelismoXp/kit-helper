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

const mixArray = (a: Array<any>, b: Array<any>): Array<any> => {
    console.log('A: ', typeof(a), "B: ", typeof(b));
    if(typeof(a) === typeof(b)){
        return ['Text'];
    }

    return ['Não'];
}

export { isArrayEmpty, max, min, mixArray };
