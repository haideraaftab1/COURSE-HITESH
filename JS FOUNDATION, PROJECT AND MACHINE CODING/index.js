function greet(name) {
    console.log(`hello ${name}`);
}

greet("haider")
greet("piyush")

let p1 = {
    name: "Haider",
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}
// p1.greet();

let p2 = {
    name: "Aftab",
}

// p1.greet.call(p2)
const bind = p1.greet.bind(p2)
console.log(bind());
