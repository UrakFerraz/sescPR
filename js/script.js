const slidesContainer = document.querySelectorAll('.slideContent');
const imgsContainer = document.querySelectorAll('.slidePhoto');
const dotsBtnsContainer = document.querySelectorAll('.heroSliderDots');
const slideContent = document.querySelectorAll('.slideContent');
const slide = document.querySelector('.slide');
let cont = 0;
let actualSlide = 0;
let translateNum = 0;
let translateNumY = 0;
let timer = true;


console.log(slidesContainer);
console.log(imgsContainer);
console.log(dotsBtnsContainer);

slide.addEventListener('click', slideMove);


function slideMove(el) {
	let dots = document.querySelectorAll('.heroSliderDots');
	if (el.target.classList.contains('heroSliderDots')) {
		for (var i = 0; i < dots.length; i++) {
			dots[i].innerHTML = '';
		};
		let dotClicked = document.createElement('div');
		dotClicked.className = 'dotPressed';
		el.target.appendChild(dotClicked);
		console.log(el.target.id);
		actualSlide = parseInt(el.target.getAttribute('value'));
		console.log('actualSlide: ' + actualSlide);
	};

	fwdSlide();
	clearInterval(automateAnim);
	timer = false;
};


function fwdSlide() {
	let somar = parseInt(actualSlide + '00');
	console.log('var somar: ' + somar);
	translateNumX = "translateX(-" + somar + "%)";
	console.log('translateNumX: ' + translateNumX);
	let slides = Array.from(imgsContainer);
	slides.forEach( function fwd(item) {
		item.style.transform = translateNumX;
		console.dir('item: ' + item);
		console.log('translateNumX: ' + translateNumX);
	});
	translateNumY = "translateY(-" + somar + "%)";
	let slidesTexts = Array.from(slideContent);
	slidesTexts.forEach(function slideToTop(item) {
		item.style.transform = translateNumY;
		console.dir('item: ' + item);
		console.log('translateNumY: ' + translateNumY);
	});
};


function autoSlides() {
	let atual = 0;
	atual = actualSlide + 1;
	let dots = document.querySelectorAll('.heroSliderDots');
	console.log('dots length: ' + dots.length);
	for (var i = 0; i < dots.length; i++) {
		dots[i].innerHTML = '';
	};
	console.log('atual:' + atual);
	if (atual < dots.length) {
		actualSlide += 1;
		console.log('atual: ' + atual);
		console.log('actualSlide: ' + actualSlide);
	} else {
		actualSlide = 0;
		atual = 0;
		console.log('atual: ' + atual);
		console.log('actualSlide: ' + actualSlide);
	}
	let dotClicked = document.createElement('div');
	dotClicked.className = 'dotPressed';
	dots[atual].appendChild(dotClicked);
	fwdSlide();
}


var automateAnim = setInterval(autoSlides, 4000);

function returnAnimation() {
	if (timer === false) {
		timer = true;
		automateAnim = setInterval(autoSlides, 4000);
		console.log('resume animation');
	};

	
};

var checkPause = setInterval(returnAnimation, 7000);