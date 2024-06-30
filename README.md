# KIT HELPER

This package contains several useful features in the day-to-day of the dev.

## Installation

```bash
npm install kit-helper
```

## Usage

```typescript
import { number } from 'kit-helper';

const numberText = number.numberToText(2023);

console.log(numberText) // dois mil e vinte e três
```

## Features

Here are some of the main features offered by kit-helper

### numberToText

This feature allows you to receive a number in compression and return it in extension.

```typescript
import { number } from 'kit-helper';

let numberText = number.numberToText(404);

console.log(numberText) // quatrocentos e quatro

numberText = number.numberToText(3.14);

console.log(numberText) // três vírgula catorze
```
### abbreviateName

This feature allows you to receive a name and return the name with abbreviated middle names.


```typescript
import { string } from 'kit-helper';

const nameAbbreviate = string.abbreviateName("Élvio Sadoc da Silva e Sousa");

console.log(nameAbbreviate) // Élvio S. da S. e Sousa
```

### extractPartDecimal

This functionality receives as a parameter a real number, a mantissa and optionally a boolean that 
indicates the need for rounding or not and returns the fractional part of the number.

```typescript
import { number } from 'kit-helper';

let decimalPart = number.extractPartDecimal(3.145, 2, true); // The true indicates that we want to round

console.log(decimalPart) // 15

decimalPart = number.extractPartDecimal(3.145, 2); // In the absence of the third parameter, it is understood that you do not want to round

console.log(decimalPart) // 14
```

### isArrayEmpty

This function takes an array as a parameter and returns true if it is empty and false if it has elements.

```typescript
import { array } from 'kit-helper';

let isEmpty = array.isArrayEmpty([]);

console.log(isEmpty) // true

isEmpty = array.isArrayEmpty([1,2]);

console.log(isEmpty) // false
```

### min

This function takes an array of numbers as a parameter and returns the smallest number in the array.

```typescript
import { array } from 'kit-helper';

let min = array.min([]);

console.log(min) // The array must not be empty

min = array.min([1,2,3,4]);

console.log(min) // 1
```

### max

This function takes an array of numbers as a parameter and returns the largest number in the array.

```typescript
import { array } from 'kit-helper';

let max = array.max([]);

console.log(max) // The array must not be empty

max = array.max([1,2,3,4]);

console.log(max) // 4
```

### mergerArray

This function is used to merge two arrays without repeating elements.

```typescript
import { mergerArrays } from 'kit-helper';

console.log(mergerArrays([1,2,3], [6,2,5])); // [ 1, 2, 3, 6, 5 ]

console.log(mergerArrays([1,2,3], [4, 5, 6])); // [ 1, 2, 3, 4, 5, 6 ]

```


## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request. [github](https://github.com/ManuelismoXp/kit-helper)


## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit/) file for details.