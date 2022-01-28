var isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i)
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i)
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i)
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i)
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i)
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};
if (isMobile.any()) {
	document.body.classList.add("_mobile")
	document.querySelector(".mobile").classList.add('_mobile');
} else {
	document.body.classList.add('_pc');
}
(function () {
	var rotateY = 324,
		rotateX = 396;
	var num = 8;
	document.onkeydown = function (e) {
		if (e.keyCode === 37) rotateY -= num
		else if (e.keyCode === 38) rotateX += num
		else if (e.keyCode === 39) rotateY += num
		else if (e.keyCode === 40) rotateX -= num
	
		document. querySelector('.page__body').style.transform = 
		"rotateY(" + rotateY + "deg)" + 
		"rotateX(" + rotateX + "deg)";
	}
	// let top = document.querySelector(".top");
	// let left = document.querySelector(".left");
	// let bottom = document.querySelector(".bottom");
	// let right = document.querySelector(".right");
	// top.addEventListener("click", function (e) {
	// 	rotateX +=num
	// 	document. querySelector('.page__body').style.transform = 
	// 	"rotateX(" + rotateX + "deg)";
	// });
	// left.addEventListener("click", function (e) {
	// 	rotateY -=num
	// 	document. querySelector('.page__body').style.transform = 
	// 	"rotateY(" + rotateY + "deg)";
	// });
	// bottom.addEventListener("click", function (e) {
	// 	rotateX -=num
	// 	document. querySelector('.page__body').style.transform = 
	// 	"rotateX(" + rotateX + "deg)";
	// });
	// right.addEventListener("click", function (e) {
	// 	rotateY +=num
	// 	document. querySelector('.page__body').style.transform = 
	// 	"rotateY(" + rotateY + "deg)";
	// });
})();
$(document).ready(function () {
let cubSlide = $(".cub__slide");
let enable = document.querySelector(".enable");
enable.addEventListener("click", function (e) {
	cubSlide.toggleClass("_active");
	})
});
// let left = document.querySelector(".left");
// let bottom = document.querySelector(".bottom");
// let rigth = document.querySelector(".rigth");