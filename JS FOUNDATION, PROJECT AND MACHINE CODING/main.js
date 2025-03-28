let exp = [
    { des: "groceries", amount: 50, category: "food" },
    { des: "E bill", amount: 70, category: "bill" },
    { des: "dinner", amount: 30, category: "food" },
    { des: "I bill", amount: 80, category: "bill" },
];

// let expenseReport = exp.reduce((acc, exp) => {
//     acc[exp.category] = (acc[exp.category] || 0) + exp.amount; 
//     return acc;
// }, {});

// console.log("Expense report", expenseReport);


let expenseReport = exp.reduce((report, exp) => {
    report[exp.category] = (report [exp.category] || 0) + exp.amount;
    return report;
}, {});

// console.log("Expense report", expenseReport);


let tasks = [
    {description: "Write report", comp: false, pri: 2},
    {description: "Send email", comp: true, pri: 3},
    {description: "Pepare presnentation", comp: false, pri: 4},
    {description: "Write code", comp: true, pri: 1},
];

let makeTask = tasks
.filter((task) => !task.completed)
.sort((a, b) => a.pri - b.pri)

// console.log(makeTask);

let movieRating = [
    {title: "Movie A", ratings: [4, 5, 3] },
    {title: "Movie B", ratings: [5, 5, 4] },
    {title: "Movie C", ratings: [3, 4, 2] },
]

let aRating = movieRating.map((movie) => {
    let average = movie.ratings.reduce((sum, rating) => sum + rating, 0) / movie.ratings.length
    return {title: movie.title, aRating: average.toFixed(2)}
})

console.log(aRating);

