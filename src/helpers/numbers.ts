const numbers = (language: string): Object => {

    const dictionary: { [key: string]: {} } = {
        pt: {
            digits: ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'],
            differents: ['dez', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'],
            dozens: ['vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'],
            hundreds: ['cem', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'],
            thousand: ['mil'],
            millions: ['milhão', 'milhões'],
            connector: " e ",
            separator: " vírgula"
        },
        en: {
            digits: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
            differents: ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
            dozens: ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
            hundreds: ['hundred', 'hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'],
            thousand: ['thousand'],
            millions: ['million', 'millions'],
            connector: " ",
            separator: " point"
        }
    };

    return dictionary[language] || dictionary.pt;
};

export { numbers }