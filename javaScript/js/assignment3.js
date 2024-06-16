// ques 1
// Write a for loop that prints numbers from 1 to 5 in the console.
for (let i=1;i<=5;i++){
         console.log(i);
     }

// ques 2
// Using a while loop, print even numbers from 2 to 10 (inclusive) in the console.
let i = 2;
while(i<=10){
    console.log(i);
    i += 2;
}

// ques 3
// Write a for loop to calculate the sum of numbers from 1 to 10.
let sum = 0;
for (let i = 1; i<=10; i++){
    sum += i;
}
console.log(sum);

// ques 4
// Using a while loop, find the factorial of a given number (e.g., 5).
let a = 5;
let factorial = 1;
while (i>=1){
    factorial = factorial*a;
    a --;
}
console.log(factorial);

//ques 5
// Write a for loop that prints the square of numbers from 1 to 5.** 
for (let i = 1;i<=5;i++){
    let sq = i*i;
    console.log(sq);
}


//ques 6
// Using a while loop, print the cube of numbers from 1 to 5.**
let j = 1;
while (j<=5){
    let cube = j*j*j;
    console.log(cube);
    j++;
}

//ques 7
// Write a for loop to iterate through an array of names and print each name in the console.**
let array = ['abc', 'def', 'ghi']
for (let i = 0; i<array.length; i++){
    console.log(array[i])
}

//ques 8
// Using a while loop, find the sum of elements in an array of numbers.**
let num3 = [1,2,3,4,5]
a = 0;
sum = 0;
while(a<num3.length){
    sum = sum + num3 [a];
    a++
}
console.log(sum);

//ques 9
// Write a for loop that prints the elements of an array in reverse order.**
let arr1 = [3,4,5,6,7]
for (let i = arr1.length-1; i>=0; i--){
    console.log(arr1[i])
}

//ques 10
// Using a while loop, find the largest number in an array of numbers.**
let arr = [99,56,3,4,7]
max = 0;
let b = arr.length-1 ;
while(b>=0){
    if(arr[b]>max){
        max = arr[b];
    }
    b--
}
console.log(max);

//ques 11 
//for loop to calculate the sum of all even numbers from 1 to 20.**
sum = 0;
for (let i = 2; i<=20; i+=2){
    sum += i;
}
console.log(sum);


//ques 12 
//Using a while loop, find the product of all odd numbers from 1 to 15.**
let num1 = 1;
let prod = 1;
while(num1<=15){
    if(num1%2 !== 0){
        prod = prod*num1;
    }
    num1++;
}
console.log(num1);

//ques 13
// Write a for loop to print the following pattern:**
let star = "*";
for (let i = 1; i<=5; i++){
    console.log(star);
    star += "*";
}

// ques 14
// Using a while loop, print the numbers from 10 to 1 in descending order.**
let e = 10;
while(e>=1){
    console.log(e);
    e--;
}

// ques 15
// Write a for loop to calculate the factorial of a given number (e.g., 6).**
let g = 6;
let factorial1 = 1;
while (g>=1){
    factorial = factorial*g;
    g--;
}
console.log(factorial1);

// ques 16
// Using a while loop, find the sum of digits of a given number (e.g., 123).**
let number1 = 123; 
let sumOfDigits = 0; 

while (number1 > 0) {
    sumOfDigits += number1 % 10;
    number1 = Math.floor(number1 / 10);
}

console.log(sumOfDigits);

// ques 17
// Write a for loop to print the following pattern:**
for (let i = 5; i >= 1; i--) {  
    let line = "";  
    for (let j = 0; j < i; j++) { 
        line += i;
    }
    console.log(line); 
}

// ques 18
// Using a while loop, print the first 10 Fibonacci numbers.**
let num2 = 10;
let numcount = 0;
let fibo1 = 0;
let fibo2 = 1;
while (numcount < num2){
    console.log(fibo1);

    let nextfibo = fibo1 + fibo2;
    fibo1 = fibo2;
    fibo2 = nextfibo;

    numcount++;
}

// ques 19
// Write a for loop to find and print the prime numbers between 1 and 20.**
for (let number = 2; number <= 20; number++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(number);
    }
}

// ques 20
// Using a while loop, reverse a given number (e.g., 12345).**
let number = 12345;
let reversedNumber = 0; 

while (number > 0) {
    let digit = number % 10;

    reversedNumber = (reversedNumber * 10) + digit;

    number = Math.floor(number / 10);
}

console.log(reversedNumber);


// // //PATTERN QUESTION
//Right-angled triangle
for( i=0; i<=5; i++){
    var line= '';
    for ( j=0; j<i; j++){
        line+="*";
    }
    console.log(line);
}

//Solid Rectangle
var row=5;
var cols= 10;
for ( a=0; a<row; a++){
    var lines='';
    for(b=0; b<cols; b++){
        lines+="*";

    }
    console.log(lines);
}

// Inverted triangle 
for (var c = 5; c >= 1; c--) {
    var liness = '';
    for (var d = 1; d <= c; d++) {
        liness += "*";
    }
    console.log(liness);
} 

// Pyramid
 let rows=5;
for(let e=1; e<=rows; e++){
    let lin='';
    for( let f=1; f<=rows-e; f++){
        lin+=' ';
    }
    for (let g=1; g<=(2*e-1); g++){
        lin+='*';
    }
    console.log(lin);
}

// Inverted Pyramid
var row= 5;
for (let h=5; h>=1; h--){
    let bar='';
    for(let l=1; l<=ro-h; l++){
        bar+=' ';
    }
    for ( let m=1; m<=(2*h-1); m++) {
        bar+='*';
    }
    console.log(bar);
} 

// Hollow Rectangle
let rowss = 5;
let cools = 10;

for (let n = 1; n <= rowss; n++) {
    let bars = '';
    for (let o = 1; o <= cols; o++) {
        if (n === 1 || n === rowss || o === 1 || o === cools) {
            bars += '*';
        } else {
            bars += ' ';
        }
    }
    console.log(bars);
}

// Cross
let size = 5;
for (let cc = 0; cc < size; cc++) {
    let line = '';
    for (let dd = 0; dd < size; dd++) {
        if (cc === dd || dd === size - 1 - cc) {
            line += '*';
        } else {
            line += ' ';
        }
    }
    console.log(line);
}

//X
let sizes = 5;
for (let ee = 0; ee < size; ee++) {
    let line = '';
    for (let ff = 0; ff < size; ff++) {
        if (ee === ff || ff === size - 1 - ee) {
            line += '*';
        } else {
            line += ' ';
        }
    }
    console.log(line);
}

//Number Triangle
let num=5;
for( let p=1; p<=num; p++){
    let ba='';
    for (let q=1; q<=p; q++){
        ba+= q+' ';
    }
    console.log(ba);
}

//Inverted Number Triangle
for (r=5; r>=1; r--){
    let barss='';
    for( let s=1; s<=r; s++){
        barss+= s+' ';
    }
    console.log(barss);
} 

//Repeated Number Triangle
 for( let t=1; t<=5; t++){
    let dash='';
    for(let u=1; u<=t; u++){
        dash+= t+ ' ';
    }
    console.log(dash);
}

//Repeated inverted Number Triangle
for (let v=5; v>=1;v-- ){
    let das= '';
    for(let w=1; w<=v;w++){
        das+= v+' ';
    }
    console.log(das);
} 

// Inverted Number Square
for ( let x=1; x<=5; x++){
    let dashs='';
    for (let y=5; y>=1; y--){
        dashs+=y;
    }
    console.log(dashs);
}

//alphabet triangle 
let roows = 5;

for (let aa = 1; aa <= roows; aa++) {
    let line = '';
    for (let bb = 1; bb <= aa; bb++) {
        line += String.fromCharCode(64 + bb);    }
    console.log(line);
}










