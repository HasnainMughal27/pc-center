const track = document.getElementById("track");
const slides = document.querySelectorAll(".slide");

let index = 0;
const slideWidth = 140; // width + gap

function moveSlide() {
  index++;

  if(index > slides.length - 4){
    index = 0;
  }

  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

/* AUTO SLIDE EVERY 3 SECONDS */
let autoSlide = setInterval(moveSlide, 3000);

/* PAUSE ON HOVER */
document.getElementById("slider").addEventListener("mouseenter", ()=>{
  clearInterval(autoSlide);
});

document.getElementById("slider").addEventListener("mouseleave", ()=>{
  autoSlide = setInterval(moveSlide, 3000);
});