//forEach

if(!Array.prototype.myForEach) {
    Array.prototype.myForEach = function(userFn) {
        const orArray = this;

        for(let i = 0; i < orArray.length; i++) {
            userFn(orArray[i], i)
        }
    }
}

const arr = [1, 2, 3, 4]

const ret = arr.myForEach(function(value,index) {
    console.log(`myForEach value at index ${index} is ${value}`)
})

console.log(`ret is`, ret);

//map

if(!Array.prototype.myMap) {
    Array.prototype.myMap = function(userFn) {
        const result = [];

        for(let i = 0; i < this.length;i ++) {
            const value = userFn(this[i], i)
            result.push(value);
        }
        return result;
    }
}

const arr1 = [1, 2, 3, 4]
const n = arr1.map((e) => e * 2);
console.log(n);
console.log(arr1);

//filter

if(!Array.prototype.myFilter) {
    Array.prototype.myFilter = function(userFn) {
        const result = [];

        for(let i = 0; i < this.length; i++) {
            if (userFn(this[i])) {
                result.push(this[i]);
            }
        }
        return result;
    }
}

const arr2 = [2, 4, 6, 7, 8, 10]

const n2 = arr2.myFilter((e) => e % 2 == 0);
console.log(n2);

