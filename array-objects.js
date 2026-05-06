//array
//arrays
//Single Dimensional Array
let user_1=["Sandesh Bhattarai","sandesh@roadwayinfosys.com","Kathmandu,Tinkune",9876543210]
console.log(user_1[0])
//Multi Dimensional Array
let allUsers=[
    ["Sandesh Bhattarai","sandesh@roadwayinfosys.com","Kathmandu,Tinkune",9876543210],
    ["User One","one@user.email.com","Bhaktapur",9809876543],
    ["User Two","two@user.com","Lalitpur",9876098765]
]
console.log(allUsers[0][1])
console.log(allUsers[1][1])
console.log(allUsers[2][1])
//Object
const productInfo={
    name: "Macbook Pro M5",
    discountInPercentage: 10,
    brand: "Apple",
    store: ["Oliz Store","Evo Store","GenNext"],
    price: 350000,
    stock: 15,
};
//console.log(productInfo["0"])
console.log(productInfo.name);
console.log(productInfo.discountInPercentage);
console.log(productInfo["price"]);
console.log(productInfo.store[0]);
console.log(productInfo.store[1]);
console.log(productInfo.store[2]);

