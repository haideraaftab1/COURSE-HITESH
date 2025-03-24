let chai = ["masala chai", "green tea", "ginger tea", "lemon tea"]

console.log(chai[2]);

console.log(`Total chai types: ${chai.length}`);

console.log(chai.push("Herbal tea"));
console.log(chai);

const data = chai.pop();
console.log(data);

let index = chai.indexOf("green tea")
console.log(index);

if(index !== -1) {
    chai.splice(index, 1)
}

console.log(chai);

//loops

chai.forEach((chaii, index) => {
    console.log(`${index +  1}: ${chaii}`);  
});

let moreChai = ["Oolong tea", "White tea"]
let allChai = chai.concat(moreChai);

console.log(allChai);

let newChai = [...allChai, "Chamolina tea"];
console.log(newChai);

let chaiRecipie = {
    name: "Masala Chai",
    ing: {
        leaves: "Assam Tea",
        milk: "Full Cream",
        sugar: "Brown",
        spices: ["Ginger", "Daalchini"]
    },
    ins: "Boil water, add leaves, milk, sugar and spices"
}
// console.log(chaiRecipie.ing.spices[1]);

let updateChai = {
    ...chaiRecipie,
    ins: "Boil water, add tea leaves, milk, sugar, spices with some love"
}

// console.log(updateChai);

let {name, ing, ins} = chaiRecipie;
let [firstChai, secondChai] = chai;
// let [value, setValue] = userState();







 

