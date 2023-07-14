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
function indicator(num){
  dots.forEach(function(dot){
      dot.style.backgroundColor = "transparent";
  });
  document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor = "#076bb8";
}

function dot(index){
  images.forEach(function(image){
      image.classList.remove("active");
  });
  document.getElementById("content" + index).classList.add("active");
  i = index - 1;
  indicator(index);
}

// const mainImage = document.getElementById("main-image");
// const images = document.querySelectorAll(".product__image");

// images.forEach((image) => {
//     image.addEventListener("click", (event) => {
//         mainImage.src = event.target.src;

//         document
//             .querySelector(".product__image--active")
//             .classList.remove("product__image--active");

//         event.target.classList.add("product__image--active");
//     });
// });



let thumbnails = document.getElementsByClassName('thumbnail')

		let activeImages = document.getElementsByClassName('active')

		for (let i = 0; i < thumbnails.length; i++){

			thumbnails[i].addEventListener('mouseover', function(){
				console.log(activeImages)
				
				if (activeImages.length > 0){
					activeImages[0].classList.remove('active')
				}
				

				this.classList.add('active')
				document.getElementById('featured').src = this.src
			})
		}


		let buttonRight = document.getElementById('slideRight');
		let buttonLeft = document.getElementById('slideLeft');

		buttonLeft.addEventListener('click', function(){
			document.getElementById('featured').scrollLeft -= 180
		})

		buttonRight.addEventListener('click', function(){
			document.getElementById('featured').scrollLeft += 180
		})
