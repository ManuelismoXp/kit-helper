# HELPER KIT

This package contains several useful features in the day-to-day of the dev.

## Installation

npm install helper-kit

## Usage

```typescript
import { numberToText } from 'helper-kit';

const numberText = numberToText(2023);

console.log(numberText) // dois mil e vinte e três
```

## Features

Here are some of the main features offered by helper-kit

### numberToText

This feature allows you to receive a number in compression and return it in extension.

```typescript
import { numberToText } from 'helper-kit';

const numberText = numberToText(404);

console.log(numberText) // quatrocentos e quatro :-)
```
### abbreviateName

This feature allows you to receive a name and return the name with abbreviated middle names.


```typescript
import { abbreviateName } from 'helper-kit';

const nameAbbreviate = abbreviateName("Élvio Sadoc da Silva e Sousa");

console.log(nameAbbreviate) // Élvio S. da S. e Sousa
```

### extractPartDecimal

This functionality receives as a parameter a real number, a mantissa and optionally a boolean that 
indicates the need for rounding or not and returns the fractional part of the number.

```typescript
import { extractPartDecimal } from 'helper-kit';

let decimalPart = extractPartDecimal(3.145, 2, true); // The true indicates that we want to round

console.log(decimalPart) // 15

decimalPart = extractPartDecimal(3.145, 2); // In the absence of the third parameter, it is understood that you do not want to round

console.log(decimalPart) // 14
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request. [github](https://github.com/ManuelismoXp/helper-kit)


## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit/) file for details.

## Keywords

[number](https://www.npmjs.com/search?q=keywords:number) [convert](https://www.npmjs.com/search?q=keywords:convert) [text](https://www.npmjs.com/search?q=keywords:text) [transform](https://www.npmjs.com/search?q=keywords:transform)