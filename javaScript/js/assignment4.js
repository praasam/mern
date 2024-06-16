// ques1
function sum (a,b){
    return(a+b);
}
console.log(sum(2,3))

// ques2
function avg (c,d,e,f,g,h){
    return((c+d+e+f+g+h)/6)

}
const array = [2,4,5,6,1,4];
console.log(avg(...array))


// ques3
function evenodd (a){
    if(a===0){
        return "zero";
    }
    else if(a%2===0){
        return "even";
    }
    else{
        return("odd")
    }
}
console.log(evenodd(4))



// ques4
function reverse(s) {
    let reversed = '';
    for (let i = s.length - 1; i >= 0; i--) {
        reversed += s[i];
    }
    return reversed;
}
console.log(reverse("function"))


// ques5
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
const valuearray = [3, 5, 7, 2, 8];
console.log(findMax(valuearray)); 

// ques6
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
const celsius = 25;
const fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius}°C is equal to ${fahrenheit}°F`); 

// ques7
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const min = 1;
const max = 10;
const randomNumber = getRandomNumber(min, max);
console.log(`Random number between ${min} and ${max}: ${randomNumber}`);

// ques9
function capitalizeFirstLetter(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

const sentence = "hello world";
console.log(capitalizeFirstLetter(sentence)); 


// ques10
function factorial(n) {
    if (n < 0) {
        return 'Factorial not defined for negative numbers';
    }

    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); 

// ques11
function uniqueArray(arr) {
    return Array.from(new Set(arr));
}
const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(uniqueArray(numbers)); 

// ques12
function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}

const mixedArray = [0, 1, false, 2, '', 3, null, 'hello', undefined, NaN];
console.log(removeFalsyValues(mixedArray)); 


// ques13
function containsOnlyDigits(str) {
    for (let i = 0; i < str.length; i++) {
        if (isNaN(parseInt(str[i], 10))) {
            return false;
        }
    }
    return true;
}
console.log(containsOnlyDigits("12a345")); 

// ques14
function truncateString(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    } else {
        return str.slice(0, maxLength) + "...";
    }
}
console.log(truncateString("Hello, world!", 20)); 

// ques15
function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}
const radius = 5;
console.log("Area of the circle:", calculateCircleArea(radius));


// ques16
function countOccurrences(arr, target) {
    return arr.reduce((count, element) => {
        return count + (element === target ? 1 : 0);
    }, 0);
}

const non = [1, 2, 2, 3, 2, 4, 5, 2];
console.log(countOccurrences(non, 2)); 


// ques17
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(isLeapYear(2020)); 

// ques18
function mergeAndSortArrays(arr1, arr2) {
    return arr1.concat(arr2).sort((a, b) => a - b);
}
const array1 = [1, 3, 5];
console.log(mergeAndSortArrays(array1, array2)); 

// ques19
function toRomanNumeral(number) {
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
    
    ];
    let result = '';
    for (const numeral of romanNumerals) {
        while (number >= numeral.value) {
            result += numeral.numeral;
            number -= numeral.value;
        }
    }
    return result;
}
console.log(toRomanNumeral(2024)); 


// ques20
function findSecondSmallest(arr) {
    if (arr.length < 2) {
        return "Array too short";
    }
    let smallest = Infinity;
    let secondSmallest = Infinity;
    for (const num of arr) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }
    return secondSmallest;
}

const inputt = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log(findSecondSmallest(inputt)); 























