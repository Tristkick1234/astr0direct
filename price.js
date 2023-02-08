let auPrice = document.getElementById("auPrice");
let gasPrice = document.getElementById("gasPrice");
let numbers= [5500,6000, 5000, 5250, 5750];
let gasNumbs= [10000, 10500, 10250, 10750, 10400];

let i= Math.floor(Math.random()*4);
auPrice.style.color = "var(--blue)";
auPrice.innerHTML= "$"+numbers[i] ;

gasPrice.style.color = "var(--blue)";
gasPrice.innerHTML= "$"+ gasNumbs[i] ;