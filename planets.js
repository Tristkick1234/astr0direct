let planets = document.querySelector(".planets");
let planetsChildren = planets.children;
let planetPara = document.querySelector("#planet-paragraph");


let myMediaQuery = window.matchMedia('(max-device-width: 840px)');



/*for (x of planetsChildren) {
  (function (x) {
    x.addEventListener('mouseover', function() {
      planetPara.innerHTML= x.innerHTML;
    });
  })(x);
}*/

let planetChild = planets.childNodes;

planetChild.forEach(
  function(x){
    x.addEventListener('mouseover',function(){
      planetPara.innerHTML = x.innerHTML;
    })

    x.addEventListener('touchstart',function(){
      planetPara.innerHTML = x.innerHTML;
    })


  
  }
);


//when a mouse is hovered display the stuff
//loop through all children
//make a specific message when one child is hovered on

