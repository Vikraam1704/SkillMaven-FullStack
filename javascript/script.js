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

