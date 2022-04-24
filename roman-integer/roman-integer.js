"use strict";
const s = "MMXXVIII";
// Only 3 characters can be used as subtractions [I,X or C]
var romanToInt = function (s) {
    // Create a variable to store the full value of the Roman Numeral, init as 0.
    let total = 0;
    // First, lets convert the string to an array
    const sArray = s.split('');
    // Then, we iterate through the array. We need to apply some checks if each element is a certain character.
    sArray.forEach((char, index) => {
        // If char is one of the "special 3", we need to check the value of the next character in the array.
        // Check depends on the character
        if (char === 'I') {
            const nextChar = sArray[index + 1];
            // If next character is not one that causes a subtraction, add the value to the total
            if (nextChar !== 'V' && nextChar !== 'X')
                total += charValue(char);
            // Else subtract the value from total
            else
                total -= charValue(char);
        }
        // Repeat for other 2 characters
        else if (char === 'X') {
            const nextChar = sArray[index + 1];
            if (nextChar !== 'L' && nextChar !== 'C')
                total += charValue(char);
            else
                total -= charValue(char);
        }
        else if (char === 'C') {
            const nextChar = sArray[index + 1];
            if (nextChar !== 'D' && nextChar !== 'M')
                total += charValue(char);
            else
                total -= charValue(char);
        }
        else
            total += charValue(char);
    });
    // After all evaluated, return the total
    return total;
};
function charValue(char) {
    switch (char) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return 0;
    }
}
const romanInt = romanToInt(s);
console.log('Roman Int = ', romanInt);
