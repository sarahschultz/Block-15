//Block 15
// commented out my console.log checks along the way
const customer = {
    firstName: "jake",
    lastname: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
}
// console.log(Object.keys(customer));

customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = 63132;
customer["flavor"] = ["coffee", "strawberry", "matcha"];
// console.log(Object.values(customer));

delete customer["zipCode"];
delete customer["favoriteStore"];
// console.log(Object.keys(customer))

customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;
// console.log(Object.keys(customer));
// console.log(Object.values(customer));

let keys = Object.keys(customer);
console.log(keys);