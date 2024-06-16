// ques 1
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const users = [
                { id: 1, name: 'Aasma', age: 19 },
                { id: 2, name: 'Deeshri', age: 21 },
                { id: 3, name: 'Prasamsha', age: 20 }
            ];
            resolve(users);
        }, 2000);
    });
}

fetchData().then((users) => {
    console.log(users);
});


// ques 2
function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count += 1;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());


// ques 3
function processData(numbers, callback) {
    const processedNumbers = numbers.map(callback);
    return processedNumbers;
}

const numbers = [1, 2, 3, 4, 5];
const callback = (number) => number * 2;

const processedNumbers = processData(numbers, callback);
console.log(processedNumbers);

// ques 4
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const users = [
                { id: 1, name: 'Aasma', age: 19 },
                { id: 2, name: 'Deeshri', age: 21 },
                { id: 3, name: 'Prasamsha', age: 20 }
            ];
            resolve(users);
        }, 2000);
    });
}

async function fetchDataAsync() {
    const users = await fetchData();
    return users;
}

(async () => {
    const users = await fetchDataAsync();
    console.log(users); 
})();

// ques 5
function doubleNumbers(numbers) {
    return numbers.map(number => number * 2);
}

const numbers1 = [1, 2, 3, 4, 5];
const doubledNumbers = doubleNumbers(numbers1);
console.log(doubledNumbers);

// ques 6
function filterNumbers(numbers) {
    return numbers.filter(number => number >= 10);
}

const numbers2 = [4, 8, 12, 15, 20];
const filteredNumbers = filterNumbers(numbers2);
console.log(filteredNumbers);

// ques 7
function findNumberGreaterThan15(numbers) {
    return numbers.find(number => number > 15);
}

const numbers3 = [5, 12, 8, 20, 23, 15];
const foundNumber = findNumberGreaterThan15(numbers3);
console.log(foundNumber);

// ques 8
function add(...numbers){
        return numbers.reduce((sum, currentValue) => sum + currentValue, 0);
    }
    
    console.log(add(5, 12, 8, 20, 3, 15));

// ques 9
function transformUsersArrayToObject(users) {
    return users.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {});
}

const user = [
                    { id: 1, name: 'Aasma', age: 19 },
                    { id: 2, name: 'Deeshri', age: 21 },
                    { id: 3, name: 'Prasamsha', age: 20 }
                ];

const usersObject = transformUsersArrayToObject(user);
console.log(usersObject);

// ques 10
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        return (`This is ${this.name}, she is ${this.age} years old.`);
    }
}

const person1 = new Person('Aasma', 19);
console.log(person1.describe());

const person2 = new Person('Deeshri', 21);
console.log(person2.describe()); 

//ques 11
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        return `This is ${this.name}, she is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        return `${this.name} is studying.`;
    }
}

Object.setPrototypeOf(Student.prototype, Person.prototype);

const student1 = new Student('Aasma', 19, 'A');
console.log(student1.describe()); 
console.log(student1.study());    

const student2 = new Student('Deeshri', 21, 'B');
console.log(student2.describe()); 
console.log(student2.study());    
 
// ques 12
function fetchData() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            setTimeout(() => {
                const users = [
                    { id: 1, name: 'Aasma', age: 19 },
                    { id: 2, name: 'Deeshri', age: 21 },
                ];
                resolve(users);
            }, 2000);
        } else {
            reject(new Error('Failed to fetch data'));
        }
    });
}

fetchData()
    .then(users => {
        console.log(users);
    })
    .catch(error => {
        console.error(error.message);
    });

// ques 13
function fetchData() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            setTimeout(() => {
                const users = [
                    { id: 1, name: 'Aasma', age: 19 },
                    { id: 2, name: 'Deeshri', age: 21 },
                ];
                resolve(users);
            }, 2000);
        } else {
            reject(new Error('Failed to fetch data'));
        }
    });
}

// async/await and try/catch
async function fetchDataAsync() {
    try {
        const users = await fetchData();
        return users;
    } catch (error) {
        throw error;
    }
}

async function fetchAndHandleData() {
    try {
        const users = await fetchDataAsync();
        console.log(users);
    } catch (error) {
        console.error(error.message);
    }
}

fetchAndHandleData();

// ques 14
function getAllUniqueHobbies(users) {
    return users.reduce((uniqueHobbies, user) => {
        user.hobbies.forEach(hobby => {
            if (!uniqueHobbies.includes(hobby)) {
                uniqueHobbies.push(hobby);
            }
        });
        return uniqueHobbies;
    }, []);
}

const users = [
    { name: 'Aasma', hobbies: ['reading', 'painting', 'cooking'] },
    { name: 'Deeshri', hobbies: ['gardening', 'painting', 'swimming'] },
    { name: 'Prasamsha', hobbies: ['cooking', 'swimming', 'photography'] }
];

const uniqueHobbies = getAllUniqueHobbies(users);
console.log(uniqueHobbies); 


// Conceptual Questions
/*ques 1
Promises in JavaScript are used to handle asynchronous operations more effectively,
providing a cleaner and more structured way to deal with asynchronous code 
compared to traditional callback functions. 

Advantages of using promises over traditional callback functions:
 
1. Readability: Promises offer a more linear and readable syntax, making code easier to 
   understand and maintain.
2. Error Handling: Promises provide built-in error handling through the .catch() method,
   simplifying error management.
3. Chaining: Promises support chaining of asynchronous operations, enabling sequential 
   execution without callback nesting.  


// ques 2
 
In JavaScript, a closure is a combination of a function bundled together (enclosed) 
with references to its surrounding state (the lexical environment). This means that
the function retains access to variables from its containing scope even after the 
containing function has finished executing.
 Example:
 function outerFunction() {
  let outerVariable = 'outer function';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction; 
}

const myClosure = outerFunction();

myClosure(); 


// ques 3

A callback function in JavaScript is a function that is passed as an argument to 
another function and is executed after a specific event or operation has occurred. 
Callback functions are widely used in JavaScript to handle asynchronous tasks, such as 
making HTTP requests, reading files, or waiting for user input, where the result is not 
immediately available.

Reasons why callback functions are used in JavaScript:
1.  Callback functions are used to handle asynchronous operations, 
    such as HTTP requests or event handling, where the result is not immediately available.
2.  They promote modularity and reusability by allowing behavior to be defined 
    separately and passed as an argument to another function.
3.  Callbacks facilitate error handling and control flow in complex asynchronous
    scenarios by providing a mechanism to handle errors and sequence asynchronous operations. * 


// ques 4

Async/await is a modern JavaScript feature introduced in ECMAScript 2017 (ES8) that 
provides a more concise and readable syntax for handling asynchronous operations. 
'async' defines a function that returns a promise, while await pauses the execution of 
the async function until a promise is settled (resolved or rejected), allowing sequential 
asynchronous code to look and behave like synchronous code.

How async/await improves asynchronous programming:
1. Readability: Async/await simplifies asynchronous code, making it more readable and 
easier to understand by resembling synchronous code structure.

2. Error Handling: With async/await, error handling becomes more straightforward as you 
can use try-catch blocks to handle both synchronous and asynchronous errors within the
 same code block.

3. Sequential Execution: Async/await allows for sequential execution of asynchronous 
tasks, enhancing code clarity and maintainability by avoiding callback nesting or complex
 promise chaining

 // ques 5

ES6:
- Refers specifically to the 6th edition of the ECMAScript standard, released in 2015.
- Introduced significant enhancements and new features to the JavaScript language, 
including arrow functions, classes, template literals, and destructuring assignments.

JavaScript:
- Is the general-purpose programming language that encompasses various editions and
 implementations.
- Encompasses multiple versions, including ES6 and subsequent editions like ES7 (ES2016),
 ES8 (ES2017), etc., each bringing additional features and updates to the language.

 // ques 6

Major features introduced in ES6 includes:
i. Arrow Functions: Concise syntax for defining functions.
ii. Classes: Syntactic sugar for defining constructor functions and inheritance.
iii. Let and Const Declarations: Block-scoped variables and immutable bindings.
iv. Template Literals: Enhanced string interpolation and multi-line strings.
v. Destructuring Assignments: Extracting values from arrays and objects into variables.
vi. Spread and Rest Operators: Spreading elements of iterable objects and collecting function arguments.
vii. Promises: Built-in mechanism for handling asynchronous operations.
viii. Default Parameters: Specifying default values for function parameters.
ix. Enhanced Object Literals: Shorthand syntax for defining object properties and methods.
x. Modules: Standardized mechanism for defining and importing/exporting modules.
 */