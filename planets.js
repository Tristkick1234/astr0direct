let planets = document.querySelector(".planets");
let planetsChildren = planets.children;
let planetPara = document.querySelector("#planet-paragraph");



for (x of planetsChildren) {
    (function(x) {
      x.addEventListener('mouseover', function() {

         
        planetPara.innerHTML= x.innerHTML;
       
         

      });

    })(x);
  }

  var x = window.matchMedia("(max-width: 700px)")

  function mobilePlanets(){
    for (x of planetsChildren) {
      (function(x) {
        x.addEventListener('click', function() {
  
           
          planetPara.innerHTML= x.innerHTML;
         
           
  
        });
  
      })(x);
    }
    
  }

  mobilePlanets(x)

 

//when a mouse is hovered display the stuff
//loop through all children
//make a specific message when one child is hovered on

