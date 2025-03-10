let myArray = [1, 4, 4, 6, 6]

function sum(num) {
    let sum = 0;
    for(let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return sum;
}

console.log(sum(myArray));