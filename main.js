var sliderIndex = 1;
const slides = ["slide1.webp", "slide2.webp", "slide3.webp", "slide4.webp", "slide5.webp"];

window.onload = function() {

  document.getElementById('slideLeft').addEventListener('click', leftSlide);
  document.getElementById('slideRight').addEventListener('click', rightSlide);
  // document.getElementById('featured').src = "images/slide1.png";
  
};



const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".image-container img");

let i = 0;
let j = 4;

function next(){
  document.getElementById("content" + (i+1)).classList.remove("active");
  i = ( j + i + 1) % j;
  document.getElementById("content" + (i+1)).classList.add("active");
  indicator( i+ 1 );
}

function prev(){
  document.getElementById("content" + (i+1)).classList.remove("active");
  i = (j + i - 1) % j;
  document.getElementById("content" + (i+1)).classList.add("active");
  indicator(i+1);
}
// function indicator(num){
//   dots.forEach(function(dot){
//       dot.style.backgroundColor = "transparent";
//   });
//   document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor = "#076bb8";
// }

// function dot(index){
//   images.forEach(function(image){
//       image.classList.remove("active");
//   });
//   document.getElementById("content" + index).classList.add("active");
//   i = index - 1;
//   indicator(index);
// }

function getImage(){

  if (sliderIndex > slides.length){
      sliderIndex = 1;

  }
   if (sliderIndex < 1){
      sliderIndex = slides.length;
   }

  return slides[sliderIndex - 1];
}

function leftSlide(){
  sliderIndex -= 1;
  var imageSrc = "images/" + getImage();
  document.getElementById('featured').src = imageSrc;
}

function rightSlide(){
  sliderIndex += 1;
  var imageSrc = "images/" + getImage();
  document.getElementById('featured').src = imageSrc;
}


