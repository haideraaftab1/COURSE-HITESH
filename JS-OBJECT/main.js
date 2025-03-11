const person = {
    x:10,
    fName: 'Haider',
    lNmae: 'Aftab',
    hobbies: ['coding', 'gym'],
    isMarried: false,
    gfn: function() {
        return 'Haider Aftab'
    },
    address: {
        hno: 1,
        street: 1,
    }
}
const person = {
    x:10,
    fName: 'Haider',
    lNmae: 'Aftab',
    hobbies: ['coding', 'gym'],
    isMarried: false,
    gfn: function() {
        return 'Haider Aftab'
    },
    address: {
        hno: 1,
        street: 1,
    }
}
console.log(person.address.street)

const remote = {
    color: 'black',
    brand: 'CYZ',
    dimesions: {height: 1, width: 1},
    turnOff: function() {

    },
}

let fname = 'haider'
let fname2 = fname 

console.log(fname)

fname2 = 'ali'

console.log(fname)

let p1 = {
    fname: 'haider'
}

let p2 = p1

p2.fname = 'ali'

console.log(p2)
console.log(p1)