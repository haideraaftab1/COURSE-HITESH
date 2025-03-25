let sales = [
    { product: "Laptop0", price: 1200},
    { product: "Laptop1", price: 1300},
    { product: "Laptop2", price: 1400},
    { product: "Laptop3", price: 1500},
]

let totalSales = sales.reduce((acc, sale) => acc + sale.price, 0)
// console.log(totalSales);

let totalVlaue = [
    { product: "Laptop0", price: 1200},
    { product: "Laptop1", price: 900},
    { product: "Laptop2", price: 700},
    { product: "Laptop3", price: 1500},
]

let lowStockItems = totalVlaue.filter(item => item.price < 1000);

// console.log(lowStockItems);

let userActivity = [
    { user: "alice", count: 1200},
    { user: "bob", count: 900},
    { user: "haider", count: 700},
    { user: "charlie", count: 1500},
]

let mostActive = userActivity.reduce((maxUser, user) => 
    user.count > maxUser.count ? user : maxUser
)
console.log(mostActive);


