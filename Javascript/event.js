let btn=document.querySelector("button");
console.dir(btn);
ex.onclick=function(){
    console.log("Button Was Clicked");
    alert("Clicked");
}

// Create a function that runs onclick any btn on screen.
let btn1=document.querySelectorAll("button");
for(btns of btn1){
    btns.onclick=sayHello;
    btns.onmouseenter=function(){
        console.log("You Entered a Button");
    };
}
function sayHello(){
    console.log("Hello");
}
