//add the following element to the container using only js and DOM methods.
// 1. a<p> with red text says "Hey Im Red"
// 2. an <h3> with blue text that says "I m Blue h3!."
// 3. a <div> with a black border and pink bgcolor with the following elemnet inside of it.
    // .another <h1> that says "i'm in a Div"
    // .a <P>that says "Me Too".

let p=document.createElement('p');
p.innerText="Hey I'm Red!";
document.querySelector('body').append(p);
p.classList.add('red');

// 2. an <h3> with blue text that says "I m Blue h3!."
let h3=document.createElement('h3');
h3.innerText="I m Blue.";
document.querySelector('body').append(h3);
h3.classList.add('blue');

// 3. a <div> with a black border and pink bgcolor with the following elemnet inside of it.
    // .another <h1> that says "i'm in a Div"
    // .a <P>that says "Me Too".

let div=document.createElement('div');
let h1=document.createElement('h1');
let para2=document.createElement('p');
h1.innerText="I'm in a Div.";
para2.innerText="Me TOO!";

div.append(h1);
div.append(para2);
div.classList.add("box");
document.querySelector('body').append(div);

// just practicing..
let div2=document.createElement('div');
let btn=document.createElement('button');
let h33=document.createElement('h3');
btn.innerText="Click Meee..";
h33.innerText="I'm h3 Heading..";
div2.append(h33);
div2.append(btn);
div2.classList.add("don");
document.querySelector('body').append(div2);


