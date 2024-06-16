// spread operator
// // in array
// const arr = [1,2,3]
// //const newArr = [5,6, arr[0],arr[1], arr[2]];
// const newArr = [5,6, ...arr];   //how it works
// console.log("New array(before spread operator):", newArr);

// const array1 = [1,2,3];
// const array2 = [4,5,6];
// const combinedarray = [...array1, ...array2];
// console.log(combinedarray);

// in objects
// merging objects
// const obj1 = {a: 1, b: 2};
// const obj2 = {c: 3, d: 4};
// const mergedobj = {...obj1, ...obj2};
// console.log(mergedobj);

// // Rest operator
// const arr = [1,2,3,4,5]
// //const first = arr[0];  //extracting the first element
// //const rest = arr.slice(1);  //collecting the rest of the elements;
// const [a,...rest] = arr;


// //console.log("First element:", first);  //1
// //console.log("Rest of the elements:", rest) //[2,3,4,5]
// console.log(a);
// //console.log(b);;
// console.log(rest)

// reduce method
// function add(...numbers){
//     return numbers.reduce((sum, num) => sum + num, 0);
// }

// console.log(add(1,2,3));
// console.log(add(4,5,6,7));

// function mul(...numbers){
//     return numbers.reduce((mul, num) => mul * num);
// }

// console.log(mul(1,2,3));
// console.log(mul(4,5,6,7));