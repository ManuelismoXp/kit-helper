"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numbers = void 0;
const numbers = (language) => {
    const dictionary = {
        pt: {
            digits: ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'],
            differents: ['dez', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'],
            dozens: ['vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'],
            hundreds: ['cem', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'],
            thousand: ['mil'],
            millions: ['milhão', 'milhões'],
            connector: " e ",
            separator: " vírgula"
        }
    };
    return dictionary[language] || dictionary.pt;
};
exports.numbers = numbers;
