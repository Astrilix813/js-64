let a=10
let b=10
let c=a+b
let d=a/b
let e=a%b
a++  //a=a+1
//a=11
++a  //a=a+1
//a=12
console.log(a++)   //output:12, print first and then assign
console.log(a++)
console.log(++a)   //output:15, first assign and then print
//Assignment Operator
// =, +=, -+, *=,/=,%=

a=a+2
console.log(a)  //17
a+=2
console.log(a)  //19

//const result= funcCall()
//COmparison Operators (boolean)
//<,>,<=,>=,==,===,,!=,!==
//a=19, b=10
console.log(a<=b)   //false
let x=10
let y='10'
//It only compares value
console.log(x==y)   //true
//It compares the value as well as datatype
console.log(x===y) //false
//it compares the value as well as datatype
console.log(x==y); //true
console.log(x!=y); //true
let day="Sunday"
//(day=="Sunday")-> Holiday
//(day=="Saturday")-> Holiday
console.log(day==='Sunday' || day==="Saturday")   //true
let percentage =65
//>=45 but <80
console.log("This is the answer .")
console.log(percentage >=45 && percentage<80) //true
console.log("Hello","there");  //Hello there
console.log("Hello"+"there");  //Hellothere
let numb1=10
let numb2="10"
let res=numb1+numb2+20+30
console.log(res)
console.log(numb1-numb2) //0
console.log(numb1*numb2) //100
console.log(numb1/numb2) //1
console.log(numb1%numb2) //0
console.log(0.1+0.2) 
//conditional operator (One Liner if-else)
// (expression) ? true:false;
const age=18;
const canVote =(age>=18)? "yes" :"No"; 
day="adfnwefn"
//Day => Friday => Weekend
//Day => Sunday or Saturday => Holiday
//Day => ....=> Weekday
console.log((day==="Friday") ? "Weekend": (
    (day ==="Saturday" || day==="Sunday")? "Holiday" : (
        (day==="Monday" || day==="Tuesday" || day==="Wednesday") ? "Weekday":"Provide correct day name"
    )
))
const userObj= {
    age: null
}
const userAge = userObj.age?? 0
console.log(100 ?? 0) //100
console.log(0 ?? 100) //0
console.log(null ?? 0) //0
console.log(undefined ?? 0) //0
//userAge?.prop
//() ?? "default"
console.log(100||0);
console.log(0||100);
console.log(null||0);
console.log(undefined||0);
//Template Literals
//Optional Chaining
//Destructure
//Spread and Rest
const fullName="Sandesh"
const counterNotification= 10
const link= "http://abc.com/notifications"

//let emailTmp= 'Dear' + fullName +',you have received' + counterNotification+' notification in your account. Do check your account 
let emailTmp=`'Dear ${fullName}, you have received ${counterNotification} notification in your account. Do check 
your account in ${link}`;

//destructure
const productInfo= {
    name:"Macbook air",
    brand:"apple",
    price: 123456,
    discount: 10,
    stock: 5,
    color: "gray"
}

// const name= productInfo.name;
// const price= productInfo.price
//const productColor= productInfo.color
//object destructor
const {name,price,color: productColor}=  productInfo
console.log(productColor)
//console.log(color)  //undefined

//spread and rest
const numb_1= [1,2,3,4,5]
const numb_2= [6,7,8,9,10]

//assignment into an array or in object
const numbs= [numb_1, numb_2]
console.log(numbs)  //[1,2,3,4,5],[6,7,8,9,10]

day="Monday"
if(day=="Friday"){
    console.log("Weekend")
}else if(day=="Saturday" || day=="Sunday"){
    console.log("Holiday")
}else{
    console.log("Weekday")
}

const userProfile={
    name: "username",
    email:"user@gmail.com",
    address:"Lalitpur",
    phone: 987654321
}


