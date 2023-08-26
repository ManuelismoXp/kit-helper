# HELPER KIT

This package contains several useful features in the day-to-day of the dev.

## Installation

npm install helper-kit

## Usage

import { numberToText } from 'helper-kit';

const numberText = numberToText(2023);

console.log(numberText) // dois mil e vinte e três

## Features

Here are some of the main features offered by helper-kit

### numberToText

This feature allows you to receive a number in compression and return it in extension.

```javascript
import { numberToText } from 'helper-kit';

const numberText = numberToText(404);

console.log(numberText) // quatrocentos e quatro :-)
```
### abbreviateName

This feature allows you to receive a name and return the name with abbreviated middle names.

import { abbreviateName } from 'helper-kit';

const nameAbbreviate = abbreviateName("Élvio Sadoc da Silva e Sousa");

console.log(nameAbbreviate) // Élvio S. da S. e Sousa

### extractPartDecimal

This functionality receives as a parameter a real number, a mantissa and optionally a boolean that 
indicates the need for rounding or not and returns the fractional part of the number.

import { extractPartDecimal } from 'helper-kit';

let decimalPart = extractPartDecimal(3.145, 2, true); // The true indicates that we want to round

console.log(decimalPart) // 15

decimalPart = extractPartDecimal(3.145, 2); // In the absence of the third parameter, it is understood that you do not want to round

console.log(decimalPart) // 14

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit/) file for details.