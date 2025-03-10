
function grad (score) {
    if(grad >= 90) {
        return "A"
    }else if (grad >= 80) {
        return "B"
    }else if (grad >= 70) {
        return "C"
    }else if (grad >= 60) {
        return "D"
    }else {
        return "F"
    }
}

let g = grad (50);
console.log(g);