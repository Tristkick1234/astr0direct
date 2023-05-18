let inputs = document.querySelectorAll(".inputs");
let checked = document.getElementById("check_background");
var body = document.body

let xbutton =  document.getElementById('xbutton');

let form = document.getElementById('myform');



window.onload = function(){
    
    let y = 0;
    document.getElementById('submit').onclick = function(){
        
        xbutton.style.pointerEvents = "all";
      
        checked.style.opacity = y;
       
        y++;

        if(y==2){
            y=0;
        }

        //fade into a check screen
    }
    
    document.getElementById('xbutton').onclick = function(){
       
        checked.style.opacity = y;
      
        y++;
        if(y==2){
            y=0;
        }

    }
      
    
 }


 let previous = document.getElementById("previous");
 let notvisible = document.querySelectorAll(".notvisible");
 let personal = document.querySelectorAll(".personal");
//on click, toggle nonvisible elements and untoggle non

document.getElementById("next").onclick = function(){
    for(let x=0; x<personal.length; x++){
        personal[x].style.visibility ="hidden";
        
        
    }
   
    for(let i=0; i<notvisible.length; i++){
        notvisible[i].style.visibility = "visible";
        

    }

    

}

document.getElementById("previous").onclick = function(){
    for(let x=0; x<personal.length; x++){
        personal[x].style.visibility ="visible";
    }
   
    for(let i=0; i<notvisible.length; i++){
        notvisible[i].style.visibility = "hidden";
   
    }

    

}
  
  