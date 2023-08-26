export const extractPartDecimal = (num: number, decimalPlaces: number, rounded?: boolean): number => {
    const factor = Math.pow(10, decimalPlaces);
    const decimalPart = rounded ?? false ? Math.round((num - Math.floor(num)) * factor) : Math.trunc((num - Math.floor(num)) * factor);
    return decimalPart;
}