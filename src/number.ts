import { numbers } from "./helpers/numbers";

export const numberToText = (num: number, language: string = 'pt'): string => {

    let text: string = "";
    const nums: any = numbers(language);

    if (num === 0) {
        return nums.digits[0];
    }

    const floatNumber: Array<string> = checkFloatNumber(num);

    text = floatNumber.length > 1 ? millions(Number(floatNumber[0]), nums, language) + nums.separator + millions(Number(floatNumber[1]), nums, language) : millions(Number(floatNumber[0]), nums, language);
    text = removeEOnStartAndAfterComma(text, nums);

    return text;

};

export const extractPartDecimal = (num: number, decimalPlaces: number, rounded?: boolean): number => {
    const factor = Math.pow(10, decimalPlaces);
    const decimalPart = rounded ?? false ? Math.round((num - Math.floor(num)) * factor) : Math.trunc((num - Math.floor(num)) * factor);
    return decimalPart;
}

const millions = (num: number, nums: any, language: string): string => {
    let millionText: string = "";

    const million = Math.floor(num / 1000000);
    const rest_million = num % 1000000;

    if (million > 0) {
        if (million === 1) {
            millionText += nums.digits[1] + " " + nums.millions[0];
        } else {
            millionText += numberToText(million, language) + " " + nums.millions[1];
        }
    }

    millionText += thousands(rest_million, nums, language);

    return millionText;
};

const thousands = (rest_million: number, nums: any, language: string): any => {
    let thousandText: string = "";

    const thousand = Math.floor(rest_million / 1000);
    const rest_thousand = rest_million % 1000;

    if (thousand > 0) {
        if (thousand === 1) {
            thousandText += " " + nums.thousand[0];
        } else {
            thousandText += " " + numberToText(thousand, language) + " " + nums.thousand[0];
        }
    }

    thousandText += hundreds(rest_thousand, nums);

    return thousandText;
};

const hundreds = (rest_thousand: number, nums: any): any => {
    let hundredText: string = "";

    if (rest_thousand >= 0) {

        const hundred = Math.floor(rest_thousand / 100);
        const rest_hundred = rest_thousand % 100;

        if (hundred > 0) {
            if (hundred > 1)
                hundredText += " " + nums.hundreds[hundred];
            else {
                if (rest_hundred > 0)
                    hundredText += " " + nums.hundreds[hundred];
                else
                    hundredText += nums.connector + nums.hundreds[0];
            }
        }

        hundredText += dozens(rest_hundred, nums);
    }

    return hundredText;
};

const dozens = (rest_hundred: number, nums: any): string => {
    let dozenText: string = "";

    if (rest_hundred >= 0) {

        if (rest_hundred < 10) {
            dozenText += nums.connector + nums.digits[rest_hundred];
        } else if (rest_hundred < 20) {
            dozenText += nums.connector + nums.differents[rest_hundred - 10];
        } else {
            const dozen = Math.floor(rest_hundred / 10);
            const digit = rest_hundred % 10;

            dozenText += nums.connector + nums.dozens[dozen - 2];

            dozenText += digits(digit, nums);
        }
    }

    return dozenText;
};

const digits = (digit: number, nums: any): string => {
    let digitText: string = "";

    if (digit > 0) {
        digitText += nums.connector + nums.digits[digit];
    }

    return digitText
};

const checkFloatNumber = (num: number): Array<string> => {
    const numString = num.toString();
    if (numString.includes('.')) return numString.split('.');
    return [numString]
}

const removeEOnStartAndAfterComma = (text: string, nums: any): string => {
    if (text.startsWith(" e ")) text = text.replace(" e ", "");
    text = text.replace(nums.separator + nums.connector, nums.separator + " ")
        .replace(nums.separator + nums.connector, nums.separator + " ");
    return text;
}