// // syntax
// function functionName(parameters){
//     // function body (code to be executed)
//     //
//     return result; //optional return statement
// }

// // anonymous function
// let add = function (a,b){
//     return a+b;
// }
// console.log(add(2,4))

// let sub = function (a,b){
//     return b-a;
// }
// console.log(sub(2,4))

// arrow function (es6)
// concise syntax for creating functions using the => arrow operator.
// used for shorter function expressions.
// let mul = (a,b) => {
//     return a*b;
// };
// console.log(mul(2,3))

// let div = (a,b) => {
//     return a/b;
// };
// console.log(div(15,5))

// iife // generator function

// // constructor function
// // function used to create and initialize objects
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// let john = new Person ("John", 25);
// console.log(john);

// array
// data structure that allows you to store a collection of elements of the same data type in a sequential order
// homogeneous data
// fixed size or dynamic

// object
// data structure that allows you to store data in the form of key-value pairs
// unique key
// heterogeneous data
// const person = {
//     name: 'john',
//     age : 20,
//     hobbies : ["Reading", "Sleeping", "Eating"],
// }
// console.log(person.hobbies[0]);

// // constructor function
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// let john = new Person("John", 25);
// console.log(john);

// callback function
// a function passed in an argument to another function and invoked within that function
// to change from synchronous to asynchronous
function greet(name, callback){
    console.log("Hello," + name)
    callback();
}