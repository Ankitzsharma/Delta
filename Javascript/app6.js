// Array Methods.

// forEach Method.
let ar=[1,2,3,4,5];
ar.forEach((el)=>{   //arrow Function
    console.log(el);
});
ar.forEach(function (el){  //normal function
    console.log(el);
});
// for Objects
let ar1=[
    {
        name:"Ankit",
        Marks:98,
    },
    {
        name:"ankush",
        Marks:99,
    },
    {
        name:"Rajat",
        Marks:98,
    },
];


// forEach Method.
ar1.forEach((stud)=>{   
    console.log(stud);
});
ar1.forEach(function (stud){
    console.log(stud.Marks);
});

// map method.
let gpa=ar1.map((el)=>{
    return el.Marks/10;
});

// filter method.
let ar2=[2,3,4,5,6,7,8,902,8,8,77,];
let even=ar2.filter((ar2)=>{(ar2%2==0)});

// every method.  ---AND Gate
[1,2,3,4].every((el)=>(`Sum is: ${el%2==0}`));
[2,4].every((el)=>{(el%2==0)});

// reduce method.
let sum=[1,2,3,4].reduce((res,el)=>(res+el));
console.log("Sum is: ",sum);
//
let ar3=[1,2,3,4];
let finalVal=ar3.reduce((res,el)=>{
    console.log(res);
    return res+el;
})
console.log("Final Value: ",finalVal);


// find maximum
let ar4=[2,6,3,8,0,8,96,45,6];
let max=-1;
for(let i=0;i<ar4.length;i++){
    if(max<ar4[i]){
        max=ar4[i];
    }
}
console.log("using For Loop Max. Is:",max);

//using reduce().
let maxi=ar4.reduce((max,el)=>{
    if(max<el){
        return el;
    }else{
        return max;
    }
});
console.log("Maximum Using Reduce(): ",maxi);

// check every Num Is Multiple of 10 or Not.
let ar5=[20,40,90,550,670,70];
let ans=ar5.every((el)=>el%10==0);
console.log(ans);

// WA function to find the min No. in an Array.
function minArr(ar){
    let min=ar.reduce((min,el)=>{
        if(el<min){
            return el;
        }else{
            return min;
        }
    });
    return min;
}
let arw=[20,12,40,90,550,670,70];
console.log("Min No. Is: ",minArr(arw));

// default parameter.  used Only At End 
function su(a,b=2){   //function su(a=2,b)==> NaN
    return a+b;
}
console.log("Default Paramter Sum Is: ",su(3));

// spread  == create new strings, arrays after copying it.
console.log(...'Ankit');
console.log(...[2,3,4,5,6,78,]);
// spread with Array Literals.
let a1=[1,2];
let newa1=[...a1];
console.log(newa1);  // new copy created whose changes doesn't affects real array. similar for Strings
let a2=[3,4];
console.log(...a1,...a2);

// spreads with object Literals.
let data={
    email: "ankit@gmail.com",
    password:1234,
};
let datacopy={...data,id:123};
console.log(datacopy);

// Rest  ==allow to take indefinite No. of arguments.
function go(...args){
    for(let i=0;i<args.length;i++){
        console.log("you gave us: ",args[i]);
    }
    // return args.reduce((add,el)=>add+el);
}

// Destrucutring.
let name=['tony','steve','peter'];
let [winner,runner]=name;
console.log(winner,runner);
let names=['ankit','ankush','hitler','sweety'];
let[first,second,...other]=names;
console.log(first,second,other);

// destructuring using (objects).
const stud={
    name:"ankit",
    age:21,
    class:9,
    subject:["h1","b1","c1"],
    username:"ankit@123",
    password:"abcd",
    sec:"A",
};
let {username, password}=stud;
let {username:user, password:p}=stud;
let {username:users, password:ps,city="GZB"}=stud;

let {age:ag,subject:sub,sec:div="Emerald"}=stud;


