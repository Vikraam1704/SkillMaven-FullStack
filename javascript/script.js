console.log("External Js");

//variables
var a; //Declaration
a=10; // Initialization

var a; //Redeclaration
a=10; // Reinitialization

let b;
b=20;

b=20; // Reinitialization

const c=30; // Declaration & Initialization

//DataType

// Primitive Datatype

// Number,Boolean,String,Undefined,Null

var num =10;
var str = "String";
var bool = true;
var Null = null;
var undefined;

console.log(typeof num)
console.log(typeof str)
console.log(typeof bool)
console.log(typeof Null)
console.log(typeof undefined)

// Non - Primitive Datatype

//arrays,object

var student = {name:"viky",cgpa:8.98};
var marks = [100,92,93,94,95]

console.log(typeof student)
console.log(typeof marks)

var one=10;
var two = 20;
var three =30;
//Arithemethic operator
console.log(one+two)
console.log(one-two)
console.log(one*two)
console.log(one/two)
console.log(one%two)

var eg1 = 2;
var eg2 = "1";
console.log(eg1+eg2) //12
console.log(eg1-eg2) //-1
console.log(eg1*eg2)
console.log(eg1/eg2)
console.log(eg1%eg2)

//comparision operator

console.log(eg1==eg2)
console.log(eg1===eg2)
console.log(eg1!=eg2)
console.log(eg1!==eg2)

var val1 = true;
var val2 = false;

console.log(val1&&val2) // And 
console.log(val1||val2) //Or
console.log(!val1) // Not

//Function

function add(a,b,c,d=10){
    console.log(a+b+c+d)
}
add(10,20,30,40)

//Arrow Function 
const sum = (a,b) => 
    console.log(a+b)

sum(20,40)

//Loops

//for, while, do-while
let i=0;
for(;i<=10;i++){ // initialization, condition,inc/dec
    console.log(i);
    // Statement
}

i=100;
while(i>=1){
    console.log(i)
    i=i/2;
}

val = false
do{
    console.log("Hello From Do While");
}while(val);

// condition statement

// if, if else, else if
i=1;
if(i%2===0){
    console.log("even")
}
else{
    console.log("odd")
}
marks = 21;
if(marks>80){
    console.log("O grade");
}
else if(marks>=35){
    console.log("Pass")
}
else{
    console.log("fail")
}

//Spread Operator
let arr = [1,2,3,4,5,6];
let arr2 = [...arr,7,8];
console.log(arr)
console.log(arr2)

//Destructuring Operator
var marks = [90,99,98,87,93];
var [m1,m2,m3,m4,m5]=marks;
console.log(m1)
console.log(m2)
console.log(m3)
console.log(m4)
console.log(m5)
//map
var double = arr.map((num)=>(
    num*2
)
)
console.log(double)

//filter
var even = arr.filter((num)=>(num%2===0))
console.log(even)

//reduce
var add = arr.reduce((val,num)=>val+num,0)
console.log(add)

var choice = ['rock','paper','scissor'];
var computerChoice = choice[Math.floor(Math.random()*3)];
console.log(computerChoice);

var details = async()=>{
    var responce = await fetch("https://jsonplaceholder.typicode.com/users")
    var users = await responce.json();
    console.log(users)
}
details();