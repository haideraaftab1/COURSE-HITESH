function chai(type){
    if(type == "Masala chai") {
        console.log("Adding spices to the chai");
    }else {
        console.log("Preparing regular chai");
    }
}

chai("masala chai")
chai("Ginger Chai")

let totalAmount = 1000;

if(totalAmount < 1000) {
    let discount = totalAmount * 0.10;
    console.log(discount);
}else {
    console.log(totalAmount);
}

function total(amount) {
    let realAmount = Number(amount);
    if(realAmount > 1000) {
        return amount * 0.10;
    }else {
        return amount;
    }
}

let result = total(1200);
console.log(result);

function trafficLight(sign) {
    // let realSign = String(sign);
    if(sign == "red") {
        console.log("STOP");
    }else if (sign == "yellow") {
        console.log("SLOW DOWN");
    }else if (sign == "green") {
        console.log("GO");
    }else {
        console.log("challan kat do");
    }
}
trafficLight("red")
trafficLight("yellow")

function checkValue(value) {
    if(value) {
        console.log("true");
    }else {
        console.log("false");
    }
}

checkValue(1);
checkValue(0);
checkValue("haider");
checkValue("")
checkValue([]);

function login(user, pass) {
    if(user == 'admin' && pass == "1234") {
        console.log("login sucessful");
    }else {
        console.log("invalid");
    }
}