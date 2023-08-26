export const numberToText = (num: number): string => {

    let text: string = "";
    const nums: any = numbers();

    if (num === 0) {
        return nums.digits[0];
    }

    text = millions(num, nums);
    text = text.startsWith(" e ") ? text.replace(" e ", "") : text

    return text;

}

const numbers = (): Object => {
    return {
        digits: ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'],
        differents: ['dez', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'],
        dozens: ['vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'],
        hundreds: ['cem', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'],
        thousand: ['mil'],
        millions: ['milhão', 'milhões']
    }
}

const millions = (num: number, nums: any): string => {
    let millionText: string = "";

    const million = Math.floor(num / 1000000);
    const rest_million = num % 1000000;

    if (million > 0) {
        if (million === 1) {
            millionText += nums.digits[1] + " " + nums.millions[0];
        } else {
            millionText += numberToText(million) + " " + nums.millions[1];
        }
    }

    millionText += thousands(rest_million, nums);

    return millionText;
}

const thousands = (rest_million: number, nums: any): any => {
    let thousandText: string = "";

    const thousand = Math.floor(rest_million / 1000);
    const rest_thousand = rest_million % 1000;

    if (thousand > 0) {
        if (thousand === 1) {
            thousandText += " " + nums.thousand[0];
        } else {
            thousandText += " " + numberToText(thousand) + " " + nums.thousand[0];
        }
    }

    thousandText += hundreds(rest_thousand, nums);

    return thousandText;
}

const hundreds = (rest_thousand: number, nums: any): any => {
    let hundredText: string = "";

    if (rest_thousand > 0) {

        const hundred = Math.floor(rest_thousand / 100);
        const rest_hundred = rest_thousand % 100;

        if (hundred > 0) {
            if (rest_hundred > 1)
                hundredText += " " + nums.hundreds[hundred];
            else
                hundredText += " e " + nums.hundreds[0];
        }

        hundredText += dozens(rest_hundred, nums);
    }

    return hundredText;
}

const dozens = (rest_hundred: number, nums: any): string => {
    let dozenText: string = "";

    if (rest_hundred > 0) {

        if (rest_hundred < 10) {
            dozenText += " e " + nums.digits[rest_hundred];
        } else if (rest_hundred < 20) {
            dozenText += " e " + nums.differents[rest_hundred - 10];
        } else {
            const dozen = Math.floor(rest_hundred / 10);
            const digit = rest_hundred % 10;

            dozenText += " e " + nums.dozens[dozen - 2];

            dozenText += digits(digit, nums);
        }
    }

    return dozenText;
}

const digits = (digit: number, nums: any): string => {
    let digitText: string = "";

    if (digit > 0) {
        digitText += " e " + nums.digits[digit];
    }

    return digitText
}