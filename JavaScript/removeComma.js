var stringWithComma = "1,000,000.00";
var stringWithoutComma = stringWithComma.replace(/,/g, '');
var number = parseFloat(stringWithoutComma);
console.log(number); // Output: 1000000
