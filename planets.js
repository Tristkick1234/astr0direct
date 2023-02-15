let planets = document.querySelector(".planets");
let planetsChildren = planets.children;
let planetPara = document.querySelector("#planet-paragraph");


let myMediaQuery = window.matchMedia('(max-width: 840px)');



for (x of planetsChildren) {
  (function (x) {
    x.addEventListener('mouseover', function() {
      planetPara.innerHTML= x.innerHTML;
    });
  })(x);
}


//when a mouse is hovered display the stuff
//loop through all children
//make a specific message when one child is hovered on

