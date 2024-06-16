// function add(a,b, printResult){
//     printResult();
//     // console.log("\n")
//     return a+b;
// }

// let result = add(2, 3, printResult);
// console.log(result);

// function printResult(){
//     console.log("the result is printed below")
// }

// function sub(c,d, mul){
//     console.log (mul);
//     return c-d;
// }

// let result = sub(5,1, mul(3,8));
// console.log(result);

// function mul(c, d){
//     return c*d;
// }

// promise
let promise = new Promise((resolve, reject)=>{
    let num1 = 20;
    let num2 = 19;
    let sub = num1 - num2;
    if (sub <=5 ){
        resolve(`The sub value is ${sub}` );
    }
    else{
        reject (`The sub value is ${sub}`);
    }
});
promise.then((data)=>{
    console.log(data)
})

// promise.then((message)=>{
//     console.log(message);
// }).catch((error)=>{
//     console.error(error);
// });