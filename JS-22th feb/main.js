let name = "haider"
const pi = 3.14

//data types

let number = 14; //Number
let text = "hello"; //String
let nothing = null; //Object//Null
let undefindedVar = undefined;//Undefined
let isTrue = true; //Boolean
let symbol = Symbol(); //Symbol


//Objects
let person = {
    name: "Haider",
    age: 24,
    isStudent: true
}

//conversion
let num = "43";
let convertedNum = Number(num)

console.log(convertedNum);

console.log(typeof(convertedNum));

let str = 123
let covertedStr = String(str)
console.log(typeof(covertedStr));

//operation
let a = 10
let b = 3

let sum = a + b;
let diff = a - b;
let pro = a * b;
let quotient = a / b;
let remainder = a % b;
let power = a ** b;

console.log(sum);
console.log(pro);
console.log(Math.floor(quotient));
console.log(remainder);
console.log(power);
console.log(diff);


//comparison
let x = 5;
let y = 10;

console.log(x == y);// Equal to
console.log(x != y); // Not equal to
console.log(x > y);
console.log(x < y);
console.log(x <= y);
console.log(x >= y);

// core js liabrary

//Math
//Date time

//node js liabrary

//crypto
//htpp

//Math

console.log(Math.max(5, 10));
console.log(Math.min(5, 10));
console.log(Math.random(1 , 6));

//String

let fname = "Haider";
let lname = "Aftab";

let fullNmae = fname +" "+  lname;
console.log(fullNmae);

let message = "Hello World";
console.log(message.length);
console.log(message.toUpperCase(message));
console.log(message.indexOf("o"));
console.log(message.slice(0, 5));

//template literals
let myName = "Haider"

let greeting = `Hello ${myName} from chaicode`
console.log(greeting);















