// const obj = {
//     pName: 'Haider',
//     greet: function() {
//         console.log(`hello, ${this.pName}`);
//     },
// }




// console.log('Hello from js');

// const a = 1
// const b = 2

// console.log('Sum', a + b);

// // setTimeout(() => console.log("Haider"), 10 * 1000);
// // setTimeout(() => console.log("Haider"), 0);
// // setTimeout(obj.greet, 2 * 1000);

// while(true) {
//     // console.log('i am inside loop');
// }

// console.log('bye bye');

// function xyz() {
//     // create
//     const abc = 1;
// }

// const obj1 = {
//     pName1: 'haider',
//     greet: function() {
//         console.log(`hi my name is, ${this.pName1}`);
//     },
// };


// console.log('hi');

// // obj1.greet();

// setTimeout(obj1.greet.bind(obj1), 5 * 1000);

// setTimeout(() => console.log('hello after 2 s'), 2 * 1000);


console.log('bye');

setTimeout(() => console.log("hi haider"), 0);

Promise.resolve().then(() => {
    console.log('1, promise resolve')

    Promise.resolve().then(() => {
        console.log('2, promise resolve')

        Promise.resolve().then(() => {
            console.log('3, promise resolve')

            Promise.resolve().then(() => {
                console.log('4, promise resolve')
            });
        });
    });
});

// setTimeout(() => console.log('hi haider 2'), 0);

console.log('bye2');














