
/*audio wouldnt play on window load, solution 1 23
window.onload = function() {
    document.getElementById("myAudio").play();
}*/

let header = document.querySelector("nav");
let audio_file = new Audio("/photos/longrain.mp3");



const hamburger = document.getElementsByClassName('hamburger')[0];
const list = document.getElementsByClassName('list')[0];

hamburger.addEventListener('click', () => {
  list.classList.toggle('active');
  
    hamburger.classList.toggle('active');
   
})
