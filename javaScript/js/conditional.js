//conditional
// if (condition){

// }
// else if (condition){

// }
// else{

// }

// let age = 18;
// if (age>=18){
//     console.log("You are an adult");
// }
// else if (age>=13){
//     console.log("You are a teenager");
// }
// else{
//     console.log("You are a child");
// }

// let day = 0;
// if (day === 1){
//     console.log("Sunday");
// }
// else if (day === 2){
//     console.log("Monday");
// }
// else if (day === 3){
//     console.log("Tuesday");
// }
// else if (day === 4){
//     console.log("Wednesday");
// }
// else if (day === 5){
//     console.log("Thursday");
// }
// else if (day === 6){
//     console.log("Friday");
// }
// else if (day === 7){
//     console.log("Saturday");
// }
// else{
//     console.log("Invalid.")
// }

// switch case
// switch (expression){
//     case value1:
//         //
//         break;
//     case value2:
//         //
//         break;   //terminates
//     default:
//         //
// }

// let day = 5;
// switch (day){
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid");
// }

///question1 
// if/else
// let x = 0;
// if (x>0){
//     console.log("Positive");
// }
// else if (x<0){
//     console.log("Negative");
// }
// else {
//     console.log("Zero");
// }

// //ques 1
// //switch case
let num = 2;
switch (true){
    case (num>0):
        console.log("Positive number");
        break;
    case (num<0):
        console.log("Negative");
        break;
    case (num == 0):
        console.log("Zero");
        break;
    default:
        console.log("Invalid");
}

// // ques 2
let age = 2;
if (age>=18){
    console.log("You are eligible to vote.")
}
else{
    console.log ("You are not eligible to vote.")
}

//ques 3
let day = 0;
if (day === 1){
    console.log("Sunday");
}
else if (day === 2){
    console.log("Monday");
}
else if (day === 3){
    console.log("Tuesday");
}
else if (day === 4){
    console.log("Wednesday");
}
else if (day === 5){
    console.log("Thursday");
}
else if (day === 6){
    console.log("Friday");
}
else if (day === 7){
    console.log("Saturday");
}
else{
    console.log("Invalid.")
}

// // ques 4
let char = "Rochak kale";
let lengthofchar = char.length;
if (lengthofchar>10){
    console.log("The character is longer than 10.")
}
else{
    console.log("The character is shorter than 10.")
}

// //ques 5
let marks = 88;
if (marks>=90){
    console.log("A+");
}
else if (marks>=80){
    console.log("A");
}
else if (marks>=70){
    console.log("B+");
}
else if (marks>=60){
    console.log("B");
}
else if (marks>=50){
    console.log("C+");
}
else {
    console.log ("Fail");
}

//ques 6
let month = 1;
switch (true){
    case (2):
    console.log("28 days");
    break;
    default:
        console.log("30 days");
}

//ques 7
let year = 2023;
if (year % 4 === 0 && year % 100!==0){
    console.log(`${year} is a Leap year.`);
}
else{
    console.log(`${year} is not a leap year.`);
}

//BMI
let weight = 51;
let height = 1.5493;

bmi = weight/(height^2);
console.log(bmi);

if (bmi<18.5){
    console.log("Under weight");
}
else if (bmi>18.5){
    console.log("Healthy weight");
}
else if (bmi>25.0){
    console.log("Overweight");
}
else{
    console.log("Obesity");
}

//switch case






