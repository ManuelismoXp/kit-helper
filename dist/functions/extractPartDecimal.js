"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractPartDecimal = void 0;
const extractPartDecimal = (num, decimalPlaces, rounded) => {
    const factor = Math.pow(10, decimalPlaces);
    const decimalPart = (rounded !== null && rounded !== void 0 ? rounded : false) ? Math.round((num - Math.floor(num)) * factor) : Math.trunc((num - Math.floor(num)) * factor);
    return decimalPart;
};
exports.extractPartDecimal = extractPartDecimal;
