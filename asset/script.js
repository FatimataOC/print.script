const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let banner = document.getElementById("banner")
let bannerImg = document.getElementById("banner-img");
let bannerImgFileName = bannerImg.src.substring (bannerImg.src.lastIndexOf('/') + 1, bannerImg.src.length);
const bulletpoint = document.getElementById("bullet_point");

// creation des points
for (let i = 0; i < slides.length; i++) {  
	let dotElement = document.createElement("div");
	dotElement.className = "dot";
	bulletpoint.appendChild(dotElement);

	if(bannerImgFileName === slides[i].image) { 
		dotElement.className += " dot_selected";

	}
}

function addDotSelectedToElement(element) { 
	element.classList.add("dot_selected");
}

function removeDotSelectedFromElement(element) { 
	element.classList.remove("dot_selected");
}


function changeImgAndText(bannerP,nextSlide) { 
	bannerImgFileName = nextSlide.image;
	bannerP.innerHTML = nextSlide.tagLine;
}

function changeImgSrc(imgSrc) {
	bannerImg.src = "./assets/images/slideshow/" + imgSrc.image;
}

// fléche précédente
document.getElementById("slide-left").addEventListener('click', function() {
	
	let nextImgIndex = 0;
	let bannerP = document.getElementById("banner-p");
	let dotElement = document.getElementsByClassName("dot");
console.log(bannerP,dotElement,nextImgIndex);
for (let i = 0; i < slides.length; i++) {
	if(bannerImgFileName === slides[0].image) {
		changeImgSrc(slides[slides.length - 1]);
		nextImgIndex = slides.length - 1;
		addDotSelectedToElement(dotElement[nextImgIndex]);
		removeDotSelectedFromElement(dotElement[0]);
	} else if(bannerImgFileName === slides[i].image) {
		changeImgSrc(slides[i - 1]);
		addDotSelectedToElement(dotElement[i - 1]);
		removeDotSelectedFromElement(dotElement[i]);
		nextImgIndex = i - 1;
	}
}
changeImgAndText(bannerP, slides[nextImgIndex]);
});

document.getElementById("slide-right").addEventListener('click', function() {
let nextImgIndex = 0;
let bannerP = document.getElementById("banner-p");
let dotElement = document.getElementsByClassName("dot");

for (let i = 0; i < slides.length; i++) {
	if(bannerImgFileName === slides[slides.length - 1].image) {
		changeImgSrc(slides[0]);
		addDotSelectedToElement(dotElement[0]);
		removeDotSelectedFromElement(dotElement[slides.length - 1]);
	} else if(bannerImgFileName === slides[i].image) {
		changeImgSrc(slides[i + 1]);
		nextImgIndex = i + 1;
		addDotSelectedToElement(dotElement[nextImgIndex]);
		removeDotSelectedFromElement(dotElement[i]);
	} 
}
changeImgAndText(bannerP, slides[nextImgIndex]);
});