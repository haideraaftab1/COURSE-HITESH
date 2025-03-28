const obj1 = {
    fname: 'haider',
    lname: 'aftab',
    getfullname: function() {
        if(this.lname !== undefined)return `${this.fname} ${this.lname}`;
        return this.fname;
    }
}

console.log(obj1.getfullname());

const obj2 = {
    lname: 'ziya',
    fname: 'baloch',
    // getfullname: function() {
    //     if (this.lname !== undefined)return `${this.lname} ${this.fname}`;
    //     return this.fname;
    // }
}

obj2.__proto__ = obj1;
obj1.__proto__ = null;

console.log(obj1.getfullname());
console.log(obj2.getfullname());
console.log(obj2.toString());




