"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractPartDecimal = exports.numberToText = void 0;
const numbers_1 = require("./helpers/numbers");
const numberToText = (num, language = 'pt') => {
    let text = "";
    const nums = (0, numbers_1.numbers)(language);
    if (num === 0) {
        return nums.digits[0];
    }
    const floatNumber = checkFloatNumber(num);
    text = floatNumber.length > 1 ? millions(Number(floatNumber[0]), nums, language) + nums.separator + millions(Number(floatNumber[1]), nums, language) : millions(Number(floatNumber[0]), nums, language);
    text = removeEOnStartAndAfterComma(text, nums);
    return text;
};
exports.numberToText = numberToText;
const extractPartDecimal = (num, decimalPlaces, rounded) => {
    const factor = Math.pow(10, decimalPlaces);
    const decimalPart = (rounded !== null && rounded !== void 0 ? rounded : false) ? Math.round((num - Math.floor(num)) * factor) : Math.trunc((num - Math.floor(num)) * factor);
    return decimalPart;
};
exports.extractPartDecimal = extractPartDecimal;
const millions = (num, nums, language) => {
    let millionText = "";
    const million = Math.floor(num / 1000000);
    const rest_million = num % 1000000;
    if (million > 0) {
        if (million === 1) {
            millionText += nums.digits[1] + " " + nums.millions[0];
        }
        else {
            millionText += (0, exports.numberToText)(million, language) + " " + nums.millions[1];
        }
    }
    millionText += thousands(rest_million, nums, language);
    return millionText;
};
const thousands = (rest_million, nums, language) => {
    let thousandText = "";
    const thousand = Math.floor(rest_million / 1000);
    const rest_thousand = rest_million % 1000;
    if (thousand > 0) {
        if (thousand === 1) {
            thousandText += " " + nums.thousand[0];
        }
        else {
            thousandText += " " + (0, exports.numberToText)(thousand, language) + " " + nums.thousand[0];
        }
    }
    thousandText += hundreds(rest_thousand, nums);
    return thousandText;
};
const hundreds = (rest_thousand, nums) => {
    let hundredText = "";
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
const dozens = (rest_hundred, nums) => {
    let dozenText = "";
    if (rest_hundred >= 0) {
        if (rest_hundred < 10) {
            dozenText += nums.connector + nums.digits[rest_hundred];
        }
        else if (rest_hundred < 20) {
            dozenText += nums.connector + nums.differents[rest_hundred - 10];
        }
        else {
            const dozen = Math.floor(rest_hundred / 10);
            const digit = rest_hundred % 10;
            dozenText += nums.connector + nums.dozens[dozen - 2];
            dozenText += digits(digit, nums);
        }
    }
    return dozenText;
};
const digits = (digit, nums) => {
    let digitText = "";
    if (digit > 0) {
        digitText += nums.connector + nums.digits[digit];
    }
    return digitText;
};
const checkFloatNumber = (num) => {
    const numString = num.toString();
    if (numString.includes('.'))
        return numString.split('.');
    return [numString];
};
const removeEOnStartAndAfterComma = (text, nums) => {
    if (text.startsWith(" e "))
        text = text.replace(" e ", "");
    text = text.replace(nums.separator + nums.connector, nums.separator + " ")
        .replace(nums.separator + nums.connector, nums.separator + " ");
    return text;
};
