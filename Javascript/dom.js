alert("Document Verified.");
// console.dir(document.all[8].innerHTML="ironman hu main");
document.all[8].innerHTML="ironman hu main hu";
// console.dir(document.all[8].innerHTML);

// selecting Elements.
console.log(document.getElementById("mainImg"));  //return Object
console.log(document.getElementsByClassName("oldImg"));
console.log(document.getElementsByTagName("p"));

// qury Selector
console.log(document.querySelector('p'));           //selectts 1st p element
console.log(document.querySelector("#mainImg"));    //Selects 1st element with id = mainImg
console.log(document.querySelector(".boxLink"));    //selects 1st element with class =boxLink

// console.log(document.querySelectorAll('p'));    //Selects all p elements
console.log(document.querySelector("p").innerHTML);     //shows Tags Also
console.log(document.querySelector("p").innerText);     //shows Content Visible on Screen
console.log(document.querySelector("p").textContext);   //Shows COntent as it is written on "index.html" File.

// Manipulating Style (With Style Attribute).

// 1. using style property
let img=document.querySelector('img');     //select 1st img tag
console.dir(img);    // return img object.
let para=document.querySelector('p');
para.style.color='blue';   //change the color of 1st para to blue.

//change all the anchor tags color in box class to yellow. 
let anc=document.querySelectorAll('.box a');
console.dir(anc);
for(let i=0;i<anc.length;i++){
    anc[i].style.color="yellow";
}

// 2.using classList
let box=document.querySelector('.box');
box.classList;
box.classList.add("Yellowbg");

// using navigation property
let ul=document.querySelector('ul');
console.log(ul.parentElement);
console.log(ul.children);
console.log(ul.childElementCount);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);

// Adding Element On Page.

//----add para at end of body.
let newP=document.createElement('p');
newP.innerText="Hi, I am New Paragraph.";
let body=document.querySelector('body');
body.appendChild(newP);
//----add para at end of box. 
let box1=document.querySelector('.box');
box1.appendChild(newP);
newP.append("This Is New Text.");
newP.prepend("Hello ");
// insertAdjacent()-uses.
let btn1=document.createElement('button');
btn1.innerHTML="Click Me...";
let p=document.querySelector('p');
p.insertAdjacentElement("beforebegin",btn1);

// removing elements.
body.removeChild(btn1);  //---remove body's child -> btn
p.insertAdjacentElement("afterend",btn1);  //add btn
btn1.remove(); //remove btn1
// p.remove();   //remove paragraph
// body.remove(); //remove whole body.