let products = [
    {
        name: "soda",
        price: 10000,
        godno: 2040
    },
    {
        name: "chocolate",
        price: 8000,
        godno: 2024
    },
    {
        name: "ice cream",
        price: 13000,
        godno: 2023
    },
    {
        name: "yogurt",
        price: 9000,
        godno: 2023
    },
    {
        name: "lienergy",
        price: 21000,
        godno: 2024
    },
    {
        name: "fusetea",
        price: 7000,
        godno: 2024
    },
    {
        name: "lays",
        price: 18000,
        godno: 2023
    },
    {
        name: "18+",
        price: 8000,
        godno: 2024
    },
    {
        name: "namak",
        price: 2000,
        godno: 2024
    },
    {
        name: "orange juice",
        price: 10000,
        godno: 2024
    },
    {
        name: "clear man",
        price: 50000,
        godno: 2025
    },
    {
        name: "saxar",
        price: 12000,
        godno: 2025
    },
    {
        name: "moloko",
        price: 11000,
        godno: 2023
    },
    {
        name: "pechenki",
        price: 15000,
        godno: 2024
    },
    {
        name: "muka",
        price: 150000,
        godno: 2024

    },
]

let discount = +prompt('discount %')

for(let item of products) {
    console.log(item);
    console.table(item.price -= item.price /  100 * `${discount}` )
   
}
