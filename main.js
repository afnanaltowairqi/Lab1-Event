let string = document.getElementById("string")
// function changeStr(){
//     string.innerText = "Hi!"
// }

//1
let btn = document.getElementById("btn");
btn.addEventListener("click", ()=> {
    string.innerText = "Hi!";
});
//2
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", ()=> {
    string.style.fontSize = "x-large";
});

//3
let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", ()=> {
    string.style.fontSize = "x-small";
});
//4
let btn4 = document.getElementById("btn4");
btn4.addEventListener("click", ()=> {
    string.style.color = "blue";
});
//5
let btn5 = document.getElementById("btn5");
btn5.addEventListener("click", ()=> {
    string.style.backgroundColor = "yellow";
});
 //image
 let image = document.getElementById("image");
 let btn6 = document.getElementById("btn6");
 btn6.addEventListener("click",()=> {
    if (image.src != "coffee.jpeg"){
        image.src = "coffee.jpeg";}
    else {
        image.src = "flower.webp";
    }
 });
