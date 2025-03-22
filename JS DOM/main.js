Function.prototype.describe = function() {
    console.log(`Function name is ${this.name}`);
}

function greet(name){
    return `hello${name}`
}

greet.describe();


function add(a, b) {
    return a+b
}

const subtract = function(a, b) {
    return a-b
}

const mul = (a, b) => a*b


function applyOperation(a, b, operation) {
    return operation(a, b)
}

const res = applyOperation(5, 4, (x, y) => x/y)
console.log(res);

function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count
    }
}

function one() {
    let Name = "haider"
}

console.log(Name);

(function(){
    console.log("haider");
})()


