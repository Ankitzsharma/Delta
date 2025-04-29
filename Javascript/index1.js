console.log("Hello JavaScript for everyOne");
let a=8;
let b=89;
console.log("sum is: ", a+b);
// Template Literals. = we using backtick ` ` with ${expression}
console.log(`Substraction: ${a-b}`);
console.log(`The sum is: ${a+b} Rupees.`);
// operator
let x=8;
let y=7;
// assignment operator
console.log(x=y);
// comparision operator
console.log(x>y);
console.log(x===y);  // is Both Are Same In Terms Of Datatype & Value.
// comparison for non-numbers.
'a'>'A'   // based on unicode 



// consitional statements

// if-else
if(a<b){
    console.log("go");
}else{
    console.log("stop");
}


// nested if-else

// var color=("Enter Color: ");
var color="Yellow";
if(color=="red"){
    console.log("Stop Here");
    
}
else if(color=="Yellow")
    console.log("Go Slow");

else{
    console.log("Go");
}

// Practice Qs. = claculate price of popcorn baes on size.

// let size=input("Enter Size: ");
var size="M";
if(size=="XL"){
    console.log(`Price Is: `,250.);
}else if(size=="L"){
    console.log(`Price Is: `,200.);
}else if(size=="M"){
    console.log(`Price Is: `,100.);
}else{
    console.log(`Price Is: `,50.);
}

// logical operator. (Left to Right)

//  (AND) && -> T,T =T
//  (OR) || -> F,F =F
//  (NOT) !  -> T=F  / F=T

// QS.
let str="a String";
for(i=0;i<str.length;i++){
    if( (str[0]==="a") && (str.length >3) ){
        console.log("Good String");
    }else{
        console.log("Not Good String");
    }
}

// QS.
let num=12;
if( (num%3==0) && ( (num+1===15) ||(num-1==11) )){
    console.log("Safe");
}else{
    console.log("Unsafe");
}

// QS. Us eSwitch To Week Names.
let day=7;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
    default:
        console.log("Wrong Answer");
}
let name=prompt("Enter your name: ");
console.log(name);
if(name=="Ankit"){
    console.log("Succesfully Created Account");
}

// Assignment Questions

// Qs1.Create a number variable num with some value. Now, print “good” if the number is divisible by 10 and print “bad” if it is not.
var nums=78;
if(nums%10==0){
    console.log("Good");
}else{
    console.log("bad");
}

// Qs2.Taketheuser'sname&ageasinputusingprompts.Thenreturnbackthefollowingstatementtotheuserasanalert(bysubstitutingtheirname&age):nameisageyearsold.
let nam=prompt("Enter Your Name: ");
let age=prompt("Enter your Age: ");
console.log(`Name is ${nam} And Age is ${age} years Old.`);

// Qs3.Writeaswitchstatementtoprintthemonthsinaquarter.MonthsinQuarter1:January,February,MarchMonthsinQuarter2:April,May,JuneMonthsinQuarter3:July,August,SeptemberMonthsinQuarter4:October,November,December
var quater=prompt("enter quater: ");
switch(quater){
    case "1":
        console.log("January, feburary, march");
        break;
    case "2":
        console.log("April, May, June");
        break;
    case "3":
        console.log("July, August, September");
        break;
    case "4":
        console.log("October, November, Deember");
        break;
    default:
        console.log("Wrong Answer");
}

// Qs4.Astringisagoldenstringifitstartswiththecharacter‘A’or‘a’andhasatotallengthgreaterthan5.Foragivenstringprintifitisgoldenornot.

let strr=prompt("Enter String");
for(i=0;i<strr.length;i++){
    if( (strr[0]==="A") || (strr.length >5) ){
        console.log("Golden String");
    }else{
        console.log("Not Golden String");
    }
}

// Qs5.Writeaprogramtofindthelargestof3numbers.ankitzsharma01@gmail.com
 let n1=8, n2=14, n3=73;
 if(n1>n2){
    if(n1>n3){
        console.log(`${n1} is Greatest.`);
    }else{
        console.log(`${n3} is Greatest`);
    }
 }else if(n2>n3){
    console.log(`${n2} is Greatest`);
 }else{
    console.log(`${n3} is Greatest`);
 }

//  Qs6(Bonus).Writeaprogramtocheckif2numbershavethesamelastdigit.Eg:32and47852havethesamelastdigiti.e.2
let nu1=76, nu2=986;
if(nu1%10===nu2%10){
    console.log("Same Last Digit: "+(nu1%10));
}else{
    console.log("Digit Not Same");
}