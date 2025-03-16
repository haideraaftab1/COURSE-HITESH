//make object

const teas ={
    name: "Lemon tea",
    type:"Green",
    caffiene:"low",
}

//access the object

console.log(teas.name);
console.log(teas["type"]);

//new property

teas.origin = "china"

//change the object

teas.caffiene = "Medium"

//remove

delete teas.type

//check origin

console.log("origin" in teas);

//for loop

for(let key in teas) {
    console.log(key + ": " + teas[key]); 
}

//nested object

const myTeas = {
    greentea: {
        name: "greentea"

    },
    blacktea: {
        name: "blacktea"
    }
}

//create a copy

const teaCopy = {...myTeas};
const anotherCopy = myTeas;
