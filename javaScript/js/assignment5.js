// ques 1
function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); 

// ques 2
function getFirstElement(arr) {
    return arr[0];
}

console.log(getFirstElement([1, 2, 3])); 

// ques 3
const person = {
    name: "Prasamsha",
    age: 20,
    city: "Kathmandu"
};

function getPersonInfo(person) {
    return `Name: ${person.name}, Age: ${person.age}, City: ${person.city}`;
}

console.log(getPersonInfo(person)); 

// ques 4
function toUpperCase(str) {
    return str.toUpperCase();
}

console.log(toUpperCase("hello"));

// ques 5
function multiply(a, b) {
    return a * b;
}

console.log(multiply(4, 5)); 

// ques 6
function getLastElement(arr) {
    return arr[arr.length - 1];
}

console.log(getLastElement([1, 2, 3])); 

// ques 7
const book = {
    title: "1984",
    author: "George Orwell",
    year: 1949
};

function getBookTitle(book) {
    return book.title;
}

console.log(getBookTitle(book)); 

// ques 8
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); 

// ques 9
function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(4)); 
console.log(isEven(5));

// ques 10
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4])); 

// ques 11
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

function getCarModel(car) {
    return car.model;
}

console.log(getCarModel(car));

// ques 12
function concatenateStrings(str1, str2) {
    return str1 + str2;
}

console.log(concatenateStrings("Hello, ", "world!")); 

// ques 13
function square(num) {
    return num * num;
}

console.log(square(5)); 

// ques 14
function findMax(arr) {
    return Math.max(...arr);
}

console.log(findMax([1, 2, 3, 4, 5])); 

// ques 15
const student = {
    firstName: "Jane",
    lastName: "Doe",
    grade: "A"
};

function getFullName(student) {
    return `${student.firstName} ${student.lastName}`;
}

console.log(getFullName(student));

// ques 16
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice"));

// ques 17
function doubleArray(arr) {
    return arr.map(num => num * 2);
}

console.log(doubleArray([1, 2, 3])); 

// ques 18
const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010
};

function getMovieTitle(movie) {
    return movie.title;
}

console.log(getMovieTitle(movie));

// ques 19
function getLength(str) {
    return str.length;
}

console.log(getLength("hello")); 

// ques 20
function subtract(a, b) {
    return a - b;
}

console.log(subtract(10, 5));

// ques 21
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2], [3, 4]));

// ques 22
const recipe = {
    name: "Pancakes",
    ingredients: ["flour", "milk", "eggs"],
    servings: 4
};

function getIngredientList(recipe) {
    return recipe.ingredients;
}
console.log(getIngredientList(recipe));

// ques 23
function endsWith(str, char) {
    return str[str.length - 1] === char;
}

console.log(endsWith("hello", "o"));
console.log(endsWith("hello", "a")); 

// ques 24
function divide(a, b) {
    return a / b;
}

console.log(divide(10, 2)); 

// ques 25
function removeFirstElement(arr) {
    return arr.slice(1);
}

console.log(removeFirstElement([1, 2, 3]));

// ques 26
const album = {
    title: "Thriller",
    artist: "Michael Jackson",
    tracks: ["Wanna Be Startin' Somethin'", "Thriller", "Beat It"]
};

function getTrackCount(album) {
    return album.tracks.length;
}

console.log(getTrackCount(album));

// ques 27
function startsWith(str, char) {
    return str[0] === char;
}

console.log(startsWith("hello", "h")); 
console.log(startsWith("hello", "b")); 

// ques 28
function isPositive(num) {
    return num > 0;
}

console.log(isPositive(10)); 
console.log(isPositive(-5));

// ques 29
function countElements(arr) {
    return arr.length;
}

console.log(countElements([1, 2, 3, 4])); 

// ques 30
const game = {
    name: "The Legend of Zelda",
    genre: "Adventure",
    platforms: ["Nintendo Switch", "Wii U"]
};

function getPlatformList(game) {
    return game.platforms;
}

console.log(getPlatformList(game)); 



