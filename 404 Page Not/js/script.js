/* ====================  Strict regime  ==================== */
'use strict';
/* =============================================  Default  --Start--  ============================================= */
function minWindowScreen250() {
	let screenWidth = screen.width;
	var metaViewport = document.getElementById("metaViewport");
	if (screenWidth < 250) {
		document.body.style.overflowX = "auto";
		metaViewport.setAttribute("content", "width=1200");
	} else {
		document.body.style.overflowX = "hidden";
		metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
	}
}
minWindowScreen250();
/* ===================================  Preloader  --Start--  =================================== */
document.body.onload = function () {
	let screenWidth = window.innerWidth;
	let preloader = document.querySelector(".preloader");
	if (screenWidth > 250) {
		if (preloader) {
			document.body.classList.add("_lock");
			document.querySelector(".page__not_wrapper").classList.add("_done");
			setTimeout(function () {
				if (!preloader.classList.contains("_show")) {
					document.body.classList.remove("_lock");
					preloader.classList.add("_show");
					document.querySelector(".page__not_wrapper").classList.remove("_done");
					animElements();
				}
			},3400);
		}
	} else {
		preloader.classList.add("_show");
		animElements();
	}
} 
/* ===================================  Preloader  --End--  =================================== */
/* ===================================  Identify Computer or Mobile  --Start--  =================================== */
function defineСomputerOrMobile() {
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
		if (document.body.classList.contains("_pc")) {
			document.body.classList.remove("_pc");
		}
		document.body.classList.add("_mobile");
	} else {
		if (document.body.classList.contains("_mobile")) {
			document.body.classList.remove("_mobile");
		}
		document.body.classList.add("_pc");
	}
}
defineСomputerOrMobile();
/* ===================================  Identify Computer or Mobile  --End--  =================================== */
/* ====================  Checking the screen resizing  --Start--  ==================== */
window.addEventListener("resize", function () {
	/* ====================  Launching Functions  --Start--  ==================== */
	defineСomputerOrMobile();
	minWindowScreen250();
	/* ====================  Launching Functions  --End--  ==================== */
});
/* ====================  Checking the screen resizing  --End--  ==================== */
/* ===================================  Anim  --Start--  =================================== */
/* ====================  class="_anime-item _anime-no-hide"  ==================== */
function animElements() {
	let animItems = document.querySelectorAll("._anime-item")
	if (animItems.length > 0) {
		window.addEventListener("scroll", animOnScroll)
		function animOnScroll() {
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeight = animItem.offsetHeight
				const animItemOffset = offset(animItem).top;
				const animStart = 2;
				/* ====================  Let animItemPoint  ==================== */
				let animItemPoint = window.innerHeight - animItemHeight / animStart;
				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}
				if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
					animItem.classList.add("_active");
				} else {
					if (!animItem.classList.contains("_anime-no-hide")) {
						animItem.classList.remove("_active");
					}
				}
			}
		}
		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		}
		setTimeout(() => {
			animOnScroll();
		}, 600);
	}
}
/* ===================================  Anim  --End--  =================================== */
/* ===================================  IBG  --Start--  =================================== */
/* <div class="hi__ibg _ibg">
	<img src="img/background-image/bgi-01.png" alt="background">
</div> */
function ibg() {
	let ibg = document.querySelectorAll("._ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();
/* ===================================  IBG  --End--  =================================== */
/* ===================================  Time  --Start--  =================================== */
let days = document.querySelector(".pagenot__time_days");
let hours = document.querySelector(".pagenot__time_hours");
let minutes = document.querySelector(".pagenot__time_minutes");
let seconds = document.querySelector(".pagenot__time_seconds");
/* ====================  Date  ==================== */
let nextYear = new Date(`September 28 2021 00:00:00`);
function updateCounter() {
	let currentTime = new Date();
	let diff = nextYear - currentTime;
	/* ====================  Transfer to Days  ==================== */
	let transferDays = Math.abs(Math.floor(diff / 1000 / 60 / 60 / 24));
	/* ====================  Transfer to Hours  ==================== */
	let transferHours = Math.abs(Math.floor(diff / 1000 / 60 / 60) % 24);
	/* ====================  Transfer to Minutes  ==================== */
	let transferMinutes = Math.abs(Math.floor(diff / 1000 / 60) % 60);
	/* ====================  Transfer to Seconds  ==================== */
	let transferSeconds = Math.abs(Math.floor(diff / 1000) % 60);
	days.innerText = transferDays < 10 ? '0' + transferDays : transferDays;
	if (transferDays > 99) {
		days.style.borderRadius = "0%";
		days.style.borderTop = "none";
		days.style.borderLeft = "none";
		days.style.borderRight = "none";
	} else {
		days.style.borderRadius = "50%";
	}
	hours.innerText = transferHours < 10 ? '0' + transferHours : transferHours;
	minutes.innerText = transferMinutes < 10 ? '0' + transferMinutes : transferMinutes;
	seconds.innerText = transferSeconds < 10 ? '0' + transferSeconds : transferSeconds;
}
/* ====================  Start the calculation 1 time per second (every second)  ==================== */
setInterval(updateCounter, 1000);
/* ===================================  Time  --End--  =================================== */
/* =============================================  Default  --End--  ============================================= */