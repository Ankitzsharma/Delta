// Strings are immutable in js

let str="     helL  oo   ";
console.log(str.trim());   // trim whitspace from both ends & return new string.
console.log(str.toUpperCase());
console.log(str.toLowerCase());
// indexOf(args)->return 1st Index Of Occurence in String. or -1.
let str1=" I love Coding";
console.log(str1.indexOf("love"));
console.log(str1.indexOf("j"));
console.log(str1.indexOf("o"));

// message Chaining
let msg="   hello  ";
let newmsg=msg.trim();
console.log("before trim: "+msg);
console.log("after Trim: "+newmsg);
console.log("After Uppercase: "+newmsg.toUpperCase());

//slice.
console.log(str1.slice(2,10));
console.log(str1.slice(2));

//replace.
console.log(str1.replace("love","learning"));
console.log(str1.replace("l","m"));

// QS. 
let str2="  help   ";
console.log(str2.trim());
console.log(str2.toUpperCase());

//  Array
let marks=[22,33,44,55,66,"Ankit"];
console.log(marks);
console.log(marks.length);
console.log(marks[3]);
console.log(marks[5][2])  // Print "Ankit" 2nd character= k.

// arrays are mutable.
let arr=["apple","amngo","litchi"];
console.log(arr);
arr[0]="banana";  // changes "apple" -> "banana".
console.log(arr);
arr[2]="Pineapple";  //changes "litchi" -> "Pineapple".
console.log(arr);


//array methods
arr.push(23); //at end.
console.log(arr);
arr.pop();  //delete from end
console.log(arr);
arr.shift();  //delete from start
console.log(arr);
arr.unshift();  //add to start
console.log(arr);
let pr=["carrot","apple", "banana", "mango"];
let arr2=["apple","amngo","litchi", "pineapple"];
console.log(pr.indexOf("mango"));  //return Index Of Element.
console.log(pr.includes("banana"));  //return Bollean value T/F. If Element Includes Or Not In Array.
console.log(pr.concat(arr2));    //merge 2 arrays.
console.log(pr.reverse()); // reverse an array.
console.log(arr2.slice(2,4)/* edng idx are Excluded.*/);
console.log( arr2.splice(2,2,1,"Grey"));  //from idx=2, delete continuously 2 elems, and add 1, Grey and continue array after that.
console.log(arr2);
console.log(arr2.splice(2,1,"Ankit",23,43));
console.log(arr2);
console.log(pr.sort());  // sort an array


// QS. change arr=['january','july','march','august']   -> ['july','june','march','august']
let ar=['january','july','march','august'];
ar.shift();
ar.shift();
console.log(`After Removing Starting Elements:`,ar);
ar.unshift("June");
ar.unshift("July");
console.log("After Adding New Elements : ",ar);


// QS. change arr=['january','july','march','august']   -> ['july','june','march','august'] using splice
console.log(ar.splice(0,2,"july","june"));
// QS. return the Idx Of JAVASCRIPT from given array, if It was reversed.
let ar3=['c','c++','html','JAVASCRIPT','python','java','c#','sql'];
ar3.reverse();
console.log(ar3.indexOf("JAVASCRIPT"));


// array  Refrences.
let ar4=['a','b','c','d'];
let ar4copy=ar4;  // Copying array via Addresses.
ar4===ar4copy;

//constant arrays
const ar5=[2,3,4,5,6,7];
ar5.push(8);
ar5.push(9);
ar5.pop();
ar5.splice(2,1,"Apple");

//nested arrays
let ar6=[[1,2,3],[4,5,6],[7,8,9]];
console.log(ar6);
console.log(ar6[2]);
console.log(ar6[1].length);
console.log(ar6[1][2]);

// create a nested array to shoew the following tic-tac-toe game state.
let num=[['X','Null','O'],['Null','X','Null'],['O','Null','X']];
console.log(num);
num[0].splice(1,1,"O");
console.log(num);





//              LOOPS


//  1. For Loop
for(let i=0;i<5;i++){
    console.log(i);
}

// Print Odd Number From 1 -> 15.
for(let i=0;i<=15;i=i+1){
    console.log(i);
}

//// Print Odd Number From 1 -> 15.
for(let i=0;i<=15;i++){
    if(i%2==0){
        console.log(i);
    }
}

// print the table of 5.
for(let i=1;i<=10;i++){
    console.log(`5 * ${i} =`,i*5);
}

// nested for loop.
for(let i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        console.log(j);
    }
}


//            2. While Loop

let i=1;
while(i<=15){
    console.log(i);
    i++;
}

//  QS. Favorite Movie

// let Fmovie="Avatar";
// let guess=prompt("Guess My Favorite Movie: ");
// for(let i=0;i<=3;i++){
//     if(guess===Fmovie){
//         console.log("You Won The Game.");
//         break;
//     }
//     guess=prompt("Guess Again");
// }



//              Loops With Arrays.
let fruits=["mango","apple","banana","litchi","Orange"];
for(let i=0;i<fruits.length;i++){
    console.log(i, fruits[i]);
}

//              Loops With Nested Arrayss.
let hero=[['thor','spiderman','orinman'],['superman','wonder'],['flash']];
for(let i=0;i<hero.length;i++){
    console.log(`List ${i}`);
    for(let j=0;j<hero[i].length;j++){
        console.log(hero[i][j]);
    }
}

//               for of Loop.
let fruit=['mango','apple','litchi'];
for(elem of fruit){
    console.log(elem);
    console.log("  ");
}

//              nested for of Loop.
let nes=[['ironman','spiderman'],['thor','flash']];
// console.log(nes);
for(n1 of nes){
    for(n2 of n1){
        console.log(n2);
    }
}

//              object Literals.
let student={
    name:"Ankit",
    city:"GZB",
    markss:"95.3",
    section:"b"
};
console.log(student);

// Create object literal for the post of thread/twitter post which includes-
let twitter={
    username:"@ankitsharma",
    content:"This Is My 1st Post",
    like:150,
    reports:50,
    tags:"@pmoi"
};
console.log(twitter);
//               Add/Update Value.
const stud={
    name:"anki",
    age:23,
    marks:94.4,
    city:"delhi"
};
stud.city="mumbai";
stud.gender="Female";
stud.marks="A";
delete stud.name;  //delete the key.
console.log(stud);
// Array of Objects= Storing Information of Multiple Students.
const info=[
    [
        {
            name:"ankit",
            city:"Dl",
            Grade:"A"
        },
        {
            name:"ankush",
            grade:"B",
            city:"Gzb"
        },
        {
            name:"Ujala",
            grade:"C",
            city:"NYC"
        }
    ],
    [
        {
            name:"ankit",
            city:"Dl",
            Grade:"A"
        },
        {
            name:"ankush",
            grade:"B",
            city:"Gzb"
        },
        {
            name:"Ujala",
            grade:"C",
            city:"NYC"
        }
    ]
]
console.log(info);

// Math object.
console.log(Math.PI);   // pi=3.14
console.log(Math.E);    // exponenetial
console.log(Math.abs(-3));  // absolute = -3 -> 3
console.log(Math.pow(3,4));
console.log(Math.floor(33.756));
console.log(Math.ceil(2.345));
console.log(Math.random());
console.log(`Random No. Btw 1->10: `,Math.floor(Math.random()*10)+1);  //Generate Random Number Between 1->10
console.log(`Random No. Btw 1->100: `,Math.floor(Math.random()*100)+1);  //Random Number Btw 1->100.
console.log(`Random No. Btw 1->5: `,Math.floor(Math.random()*5)+1);    // Random No. Btw 1->5.


