// //5/21/2024 //assignment-1
// // QN.1 Create two variables, one for your name and another for your age. Print a sentence combining those variables.
// var fullName = "Prasamsha Maharjan";
// var age = 20;
// console.log(`My name is ${fullName}. I am ${age} years old.`)

// //2. Assign the value 10 to a variable. Then multiply that variable by itself and store the result in another variable. Print the final value.
// var x = 10;
// result = x * x;
// console.log(result);

// //3. Write code to check if the character stored in a variable is uppercase or lowercase. 
// let char = 'P';

// if (char === char.toUpperCase() && char !== char.toLowerCase()) {
//     console.log("uppercase");
// }
// else if (char === char.toLowerCase() && char !== char.toUpperCase()) {
//     console.log("lowercase");
// }
// else {
//     console.log("not a letter");
// }

// //4. Declare two variables with numeric values. Add them together and print the sum. Then,
// //subtract the smaller number from the larger number and store the difference in a new
// //variable. Print the difference.
//  var a = 10;
//  var b = 20;
//  var sum = a+b;
//  console.log("Sum:", sum);

//  let sub;
//  if (a > b) {
//      sub = a - b;
//  } else {
//      sub = b - a;
//  }
//  console.log("Difference:", sub);

//  // 5. Imagine you have a variable storing a product price. Write code to apply a 10%
// //discount and print the discounted price.

// let markedprice = 500;
// let discount = markedprice * 0.1;
// let discountedprice =  markedprice - discount;
// console.log(`Discounted priced is ${discountedprice}.`);

let person = [{
    Firstname : "Prasamsha",
    LastName : "Maharjan",
    Age : 21,
},
{
    Firstname : "Aasma",
    LastName : "Subba",
    Age : 20,
},

]


console.log(person);

const name = {
    name: "Ram",
    address: {
        country: {
            street:{
                name: "street name"
            }
        }
    }
}
console.log(name.address.country.street.name);