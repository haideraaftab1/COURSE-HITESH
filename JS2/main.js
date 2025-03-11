const teas = ["Green tea", "Oolong", "Masala tea", "Black tea"]

//to add
teas.push("white tea");
console.log(teas);

//to remove
const index = teas.indexOf("Oolong");
if(index > -1) {
    teas.splice(index, 1);
}
console.log(teas);

//filter
const cTeas = teas.filter((tea) => tea !== "black tea");
console.log(cTeas);

//sort
const sortTea = teas.sort();
console.log(sortTea);

//for loop
for(let i = 0; i < teas.length; i++) {
    console.log(teas[i]);
}

//for loop for count caffiene tea
let caffiene = 0;
for(let i = 0; i < teas.length; i++) {
    if(teas[i] != "Black tea") {
        caffiene++;
    }
}
console.log(caffiene);

//convert in upper case
const uc = []
for(let i = 0; i< teas.length; i++) {
    uc.push(teas[i].toUpperCase());
}
console.log(uc);

//convert in lower case
const lc = [];
for(let i = 0; i < teas.length; i++) {
    lc.push(teas[i].toLowerCase());
}
console.log(lc);

//find tea with most char
let loc = [];
for(let i = 0; i < teas.length; i++) {
    if(teas[i].length > loc.length) {
        loc = teas[i];
    }
}
console.log(loc);

//reverse

let reverse = [];
for(let i = teas.length - 1; i >= 0; i--) {
    reverse.push(teas[i]);
}
console.log(reverse);