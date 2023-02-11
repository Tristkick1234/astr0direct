let buttonLeft = document.getElementsByClassName("button")[0]; 
let buttonRight= document.getElementsByClassName("button")[1];
let slidecontent = document.querySelector("#imageSlide");

let images = ["/photos/nasarocket.jpg","/photos/aircraft-gca2ff5aa2_1920.jpg","/photos/futuristicspcecraft1.png"]
let i=0;
slidecontent.src = images[0];

buttonRight.addEventListener("click", myRight);

function myRight() {
    i++;
    slidecontent.src = images[i];

    if(i<0){
        i=0;
        slidecontent.src = images[i];
    }
    if(i>images.length-1){
        //if i reachest the end, reset the slide
        i=i-1;
        slidecontent.src = images[i];
    }
    insideWords(i);
}

buttonLeft.addEventListener("click", myLeft);

function myLeft() {
    i--;
    slidecontent.src = images[i];
    insideWords(i);
 
    if(i<0){
        i=0;
        slidecontent.src = images[i];
    }
  
   

}


let paragraph = document.querySelector(".blurb");
let slideHeader = document.querySelector("#slideHeader");

function insideWords(i){
switch(i) {
    case 0:
        slideHeader.innerText = "Mercure I";
        paragraph.innerText = "Drawn on with inspiration from traditional rockets of the 21st century, The Mercure I is our standard spacecraft for travel";
     
      break;
    case 1:
        slideHeader.innerText = "Elytron";
        paragraph.innerText = "The Elytron is suitable for short range voyages. Ex: Atmospheric flights, Moon voyages, and trips from space hubs to a respective planet";
      
      // code block
      break;
    case 2:
        slideHeader.innerText = "Odysseus";
        paragraph.innerText = "The Odysseus is a technological feat itself. It allows for long distance travel with an innate durability.";
       
        break;
  
    default:
      // code block
  }

}

//planet stuff

