 // represente un tableau avec une liste de données (image et texte)
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

let bannerImg = document.getElementById("banner-img");
let bannerImgFileName = bannerImg.src.substring (bannerImg.src.lastIndexOf('/') +1, bannerImg.src.length);// correspond au chemin de l'image src=./asset/images/slideshow/slide1.jpg 
console.log(bannerImgFileName)

const bulletpoint = document.getElementById("bullet_point");

// creation des points
for (let i = 0; i < slides.length; i++) {    // le depart de la boucle est a 0 et s'arettera au bout 4 parmi la liste slides
 
	let dotElement = document.createElement("div"); 
	dotElement.className = "dot";// elle a pour class dot
	bulletpoint.appendChild(dotElement);// div class bulletpoint est parent de dot

	if(bannerImgFileName === slides[i].image) {  // la src de l'image de la page index et strictement egal a l'image[0] dans la liste slides
		dotElement.className += " dot_selected"; //  le point apparait remplit a la premiere image

	}
}

function addDotSelectedToElement(element) { //a pour fonction de la remplisage du point
	element.classList.add("dot_selected");
}

function removeDotSelectedFromElement(element) { //a pour fonction d'effacer le remplisage du point
	element.classList.remove("dot_selected");
}


function changeImgAndText(bannerP,nextSlide) { // a pour fonction de changer l'image et le text permet de passer a l'image suivante
	bannerImgFileName = nextSlide.image;
	bannerP.innerHTML = nextSlide.tagLine;
}

function changeImgSrc(imgSrc) {
	bannerImg.src = "./asset/images/slideshow/" + imgSrc.image; // ajouter les autre images fichier /.asset/images/slideshow/
}

// fléche précédente
document.getElementById("slide-left").addEventListener('click', function() { // L'evenemet permet de passer a l'image precédente au click
	
	let nextImgIndex = 0;
	let bannerP = document.getElementById("banner-p");
	let dotElement = document.getElementsByClassName("dot");

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