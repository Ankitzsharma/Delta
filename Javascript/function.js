function fun(){
    console.log("Function Checking");

}
fun();
// fundtion print 1 to 5
function print1to5(){           //Function Definition
    for(let i=0;i<5;i++){
        console.log(i);
    }
}
print1to5();        // function Calling


// function to print a poem
function printPoem(){
    console.log("Jonny Jonny Yes Papa.");
    console.log("Eating Sugar No Papa!.");
    console.log("Telling a Lie No Papa!.");
    console.log("Open Your Mouth. Hahahaa... ");


}
printPoem();

// create a function to roll a dice & Always Displays a No. Btw 1 -> 6.
function dice(){
    let random=Math.floor(Math.random()*6)+1;
    console.log(random);
}
dice();


//  Function with Arguments.
function fun1(a,b){    // a,b is argument.
    console.log("Sum Is: ",a+b);
}
fun1(2,8);   //calling

//  print first name ,last name.
function names(frstname, lastname){
     console.log(`First name Is:${frstname} And LastName Is: ${lastname}`);
}
names("Ankit", "Sharma");

// Average of Three No.
function average(a,b,c){
    let avg=(a+b+c)/2;
console.log(`Average Of ${a} + ${b} +${c} =`,avg);
}
average(4,45,60);


// print table of a number.
function table(n){
    let i=1;
    console.log(`------------Table Of ${n}-------------`);
    while(i<=10){
        // console,log(n," * ",i," = ",n*i);
        console.log(n*i);
        i++;
    }
}
table(4);


// return keyword
function ad(a,b){
    return (a+b);
}
console.log("Sum Is: ",ad(3,8));
console.log(ad((3,8),9));  // Important way Of writing Functions.

// sum of The No. From 1 -> n.
function print1Ton(n){
    let i=1,sum=0;
    while(i<=n){
        sum+=i;
        i++;
    }
    console.log(`Sum Is: ${sum}`);
}
console.log(print1Ton(5));

// concatenate all strings.

let str=["hlo","hi","Ankit","bye"];
function mergestr(str){
    i=0,result="";
    while(i<str.length){
        result+=str[i];
        i++;
    }
    return result;

}
console.log(mergestr(str));


// Scope.

let res=23; //Global Scope.

function claSum(a,b){
    let res=a+b;      //Function Scope.
    console.log("Sum Is A : ",res);
}
console.log(claSum(9,8));
console.log(res);

// Lexical Scope.

function outerFunc(){   // This Func Has a Global Scope.
    let x=2;
    let y=4;
    function innerFunc(){   //This Func has Function Scope.
        let a=10;
        console.log(x);
        console.log(y);

    }
    innerFunc();
}
outerFunc();


//QS. what will Be the output?   ---> Hello ,Namaste
let greet="Hello";
function changeGreet(){
    let greet="Namaste";
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }
}  
console.log(greet);
changeGreet();

// function Expressions
let name="Ankit";
let sum=function(a,b){
    console.log(a+b);
}
sum(2,4);   //calling
let greet1=function(){
    console.log("Namaste");
}
greet1();  //calling 

// higher Order Function.

function multipleGreet(func2,n){
    for(let i=0;i<n;i++){
        func2();
    }
}
let greet2=function(){
    console.log("hello");
}
let a=multipleGreet(greet2 ,3);
console.log(multipleGreet(function(){console.log("Function Hu Main")},2));
console.log(a);


// Higher Order Function Return A Function.
function oddEvenTester(req){
    if(req=="odd"){
        return odd=function(n){
            console.log(!(n%2==0));
        }
    }else if(req=="even"){
        return even= function(n){
            console.log(n%2==0);
        }
    }else {
        console.log("Wrong Answer");
    }
}
let req="even";
let func1=oddEvenTester(req);
console.log(func1(7));

// method.
const calculator={
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    },
    num:23
}
console.log(calculator);    // To print Whole Object.
console.log(calculator.num);  //To print the 23
console.log(calculator.add);  //To print the whole add Function 
console.log(calculator.add(2,2)); //to print the sum Of 2+3



// "this" Keyword.
const marks={
    name:"Ankit",
    phy:93,
    che:88,
    math:99,
    getavg(){
        console.log(this);

        let avg=(this.phy+this.che+this.math)/3;
        console.log(`${this.name} got Avg Marks=${avg}`);
    }
}
console.log(this);
console.log(marks.getavg());

//  try & Catch.
console.log("Hello");
try{
    console.log(a2);
}catch(e){
    console.log("Caught an Error... a Is Not Defined");
}
console.log("Hii");
console.log("Hye");

// Arrow Function.
const sum1=(a,b)=>{
    console.log(a+b);
}
sum("Arrow Functions Sum Is: ",2,4);

// calculate cube of No.
const cube=(n)=>{
    return n*n*n;
}
console.log(cube(3));

// Implicit return in Arrow Function. 
let re=(a,b)=>a*b;
console.log(re(2,3));

// setTimeout Function.
console.log("Hii, There!.");
setTimeout(()=>{
    console.log("The World Of JS.");
},2000);
console.log("Welcome To ");


// setInterval();
let id11=setInterval(()=>{
    console.log("Ankit");
},2000);
clearInterval(id11);  //  ->to stop id11.

let id22=setInterval(()=>{
    console.log("Im");
},2000);
clearInterval(id22);  //to stop id22.


// "this" keyword with Arrow Function.
const student={
    name: "Ankit",
    marks: 95,
    prop:this,   //Global Scope.
    getName: function(){
        console.log(this);
        return this.name;
    },
    getmarks:()=>{
        console.log(this);  //Parent's Scope->Window.
        return this.marks;
    },
    getInfo1:function(){
        setTimeout(()=>{
            console.log(this); //Student
        },2000);
    },
    getInfo2:function(){
        setTimeout(function(){
            console.log(this);  //window
        },2000);
    }

}

// write an arrow function that return the Square if a No.'n'
let square=(n)=>{
    return n*n;
}
//more shoter 
let sqre=n=>n*n;
console.log(sqre(3));

let pr=setInterval(()=>{
    console.log("Hello World");
},2000);
setTimeout(()=>{
    clearInterval(pr);
    console.log("Clear Interval Runs.!!!");
},10000);


// QS.1 Write an arrow function named arrayAverage. that accepts an array of numbers and returns the average of those numbers.
let ar=[2,1,3,4,5];
// function arrayAverage(ar){
let ch=()=>{
    let sum=0;
    for(let i=0;i<ar.length;i++){
        sum+=ar[i];
    }
    console.log(`Sum Is: ${sum}`);
}
console.log(ch(ar));

// Qs2.Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.
let isEven=(n)=>{   // let num=4, isEven=(n)=>n%2==0;
    if(!(n%2==0)){
        console.log("odd");
    }else{
        console.log("Even")
    }
}
console.log(isEven(3));

// Qs3.What is the output of the following code:
const object={
    message:'Hello,World!',
    logMessage(){
        console.log(this.message);
    }
};
setTimeout(object.logMessage,1000);

//Qs4.What is the output of the following code: 
let length=4;
function callback(){
    console.log(this.length);
}
const object1={
    length:5,
    method(callback){
        callback();
    },
};
object1.method(callback,1,2);