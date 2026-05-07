const obtainedMarks=400
const percentage= obtainedMarks/500 *100
if (percentage>=80){
    console.log("Distinction")
}else if (percentage<80){
    console.log("First Division")
}else if (percentage<60){
    console.log("Second Division")
}else if (percentage<45){
    console.log("Third Division")
}else{
    console.log("Sorry! you have failed")
}

//Loop
let i=1
do{
    console.log(i);  //2
    i++
}while(i<=5)

let k=1;
while(k<=5){
    console.log(k)
    k++
}

for(let j=1; j<=5; j++){
    console.log(j)
}

for(; ;){
    console.log(i)
    i++;
    if(i>5){
        break;
    }
}

const products = [
    {
      name: "iPhone 15",
      brand: "Apple",
      category: "Smartphone",
      price: 100000,
      discount: 10
    },
    {
      name: "Galaxy S23",
      brand: "Samsung",
      category: "Smartphone",
      price: 20000,
      discount: 12
    },
    {
      name: "Air Jordan Shoes",
      brand: "Nike",
      category: "Footwear",
      price: 20000,
      discount: 15
    },
    {
      name: "XPS 13",
      brand: "Dell",
      category: "Laptop",
      price: 150000,
      discount: 8
    },
    {
      name: "WH-1000XM5",
      brand: "Sony",
      category: "Headphones",
      price: 35000,
      discount: 20
    }
  ];
  
  for (let i = 0; i < products.length; i++) {
    console.log(
      "Product name: " + products[i].name +
      "; Product brand: " + products[i].brand +
      "; Product category: " + products[i].category +
      "; Product price: " + products[i].price +
      "; Discount: " + products[i].discount + "%");
    }

console.log("Hello I M commiting")
