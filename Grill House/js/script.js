/* ====================  Strict regime  ==================== */
'use strict';
/* =============================================  Default  --Start--  ============================================= */
/* ===================================  Preloader  --Start--  =================================== */
document.body.onload = function () {
	let screenWidth = window.innerWidth;
	let preloader = document.querySelector(".preloader");
	if (screenWidth > 250) {
		if (preloader) {
			document.body.classList.add("_lock");
			setTimeout(function () {
				if (!preloader.classList.contains("_show")) {
					document.body.classList.remove("_lock");
					preloader.classList.add("_show");
					document.querySelector(".wrapper").classList.remove("_done");
					animElements();
				}
			},3000);
		}
	}
} 
/* ===================================  Preloader  --End--  =================================== */
/* =============================================  Meta Viewport Adaptation for a mobile device  --Start--  ============================================= */
function minWindowScreen250() {
	let screenWidth = screen.width;
	let metaViewport = document.getElementById("metaViewport");
	if (screenWidth < 250) {
		document.body.classList.add("_minWindowScreen250");
		metaViewport.setAttribute("content", "width=1200");
	} else {
		document.body.classList.remove("_minWindowScreen250");
		metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
	}
}
minWindowScreen250();
/* =============================================  Meta Viewport Adaptation for a mobile device  --End--  ============================================= */
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
	deleteActiveWindowLarger767px();
	dynamic_adapt();
	minWindowScreen250();
	/* ====================  Launching Functions  --End--  ==================== */
});
/* ====================  Checking the screen resizing  --End--  ==================== */
/* ====================  Delete an asset if the screen size is larger than 767px  --Start--  ==================== */
function deleteActiveWindowLarger767px() {
	let windwWidth = window.innerWidth;
	if (windwWidth > 767) {
		if (iconMenu.classList.contains("_active") || body.classList.contains("_lock")) {
			body.classList.remove("_lock");
			iconMenu.classList.remove("_active");
			menuBody.classList.remove("_active");
		}
	}
}
/* ====================  Delete an asset if the screen size is larger than 767px  --End--  ==================== */
/* ===================================  Progress Bar  --Start--  =================================== */
const progress = document.querySelector(".progressbar");
window.addEventListener("scroll", progressBar)
function progressBar() {
    let windowScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.body.scrollHeight - document.documentElement.clientHeight;
    let percent = windowScrollTop / windowHeight * 100;
    progress.style.width = percent + "%";
}
/* ===================================  Progress Bar  --End--  =================================== */
/* ===================================  Anim  --Start--  =================================== */
/* ====================  class="_anime-item _anime-no-hide"  ==================== */
function animElements() {
	let animItems = document.querySelectorAll("._anime-item")
	if (animItems.length > 0) {
		window.addEventListener("scroll", animOnScroll)
		function animOnScroll() {
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 4;
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
/* ===================================  Dynamic Transfer of Objects  --Start--  =================================== */
/* ====================  data-move="item,2,992"  ==================== */
var move_array = [];
var move_objects = document.querySelectorAll("[data-move]");
if (move_objects.length > 0) {
	for (var _index10 = 0; _index10 < move_objects.length; _index10++) {
		var _el6 = move_objects[_index10];
		var data_move = _el6.getAttribute("data-move");
		if (data_move != "" || data_move != null) {
			_el6.setAttribute("data-move-index", _index10);
			move_array[_index10] = {
				parent: _el6.parentNode,
				index: index_in_parent(_el6)
			};
		}
	}
}
function dynamic_adapt() {
	var w = document.querySelector("body").offsetWidth;
	if (move_objects.length > 0) {
		for (var _index11 = 0; _index11 < move_objects.length; _index11++) {
			var _el7 = move_objects[_index11];
			var _data_move = _el7.getAttribute("data-move");
			if (_data_move != "" || _data_move != null) {
				var data_array = _data_move.split(",");
				var data_parent = document.querySelector("." + data_array[0]);
				var data_index = data_array[1];
				var data_bp = data_array[2];
				if (w < data_bp) {
					if (!_el7.classList.contains("js-move_done_" + data_bp)) {
						if (data_index > 0) {
							/* ====================  insertAfter  ==================== */
							var actual_index = index_of_elements(data_parent)[data_index];
							data_parent.insertBefore(_el7, data_parent.childNodes[actual_index]);
						} else {
							data_parent.insertBefore(_el7, data_parent.firstChild);
						}
						_el7.classList.add("js-move_done_" + data_bp);
					}
				} else {
					if (_el7.classList.contains("js-move_done_" + data_bp)) {
						dynamic_adaptive_back(_el7);
						_el7.classList.remove("js-move_done_" + data_bp);
					}
				}
			}
		}
	}
}
function dynamic_adaptive_back(el) {
	var index_original = el.getAttribute("data-move-index");
	var move_place = move_array[index_original];
	var parent_place = move_place["parent"];
	var index_place = move_place["index"];
	if (index_place > 0) {
		/* ====================  insertAfter  ==================== */
		var actual_index = index_of_elements(parent_place)[index_place];
		parent_place.insertBefore(el, parent_place.childNodes[actual_index]);
	} else {
		parent_place.insertBefore(el, parent_place.firstChild);
	}
}
function index_in_parent(node) {
	var children = node.parentNode.childNodes;
	var num = 0;
	for (var _i2 = 0; _i2 < children.length; _i2++) {
		if (children[_i2] == node) return num;
		if (children[_i2].nodeType == 1) num++;
	}
	return -1;
}
function index_of_elements(parent) {
	var children = [];
	for (var _i3 = 0; _i3 < parent.childNodes.length; _i3++) {
		if (parent.childNodes[_i3].nodeType == 1 && parent.childNodes[_i3].getAttribute("data-move") == null) {
			children.push(_i3);
		}
	}
	return children;
}
dynamic_adapt();
/* ===================================  Dynamic Transfer of Objects  --End--  =================================== */
/* ===================================  Menu Burger  --Start--  =================================== */
const body = document.querySelector("body");
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		body.classList.toggle("_lock");
		iconMenu.classList.toggle("_active");
		menuBody.classList.toggle("_active");
	});
	menuBody.classList.contains('_active');
	menuBody.addEventListener("click", function (e) {
		if (!e.target.closest(".menu__list")) {
			body.classList.remove("_lock");
			iconMenu.classList.remove("_active");
			menuBody.classList.remove("_active");
		}
	});
}
/* ====================  Scrolling when Clicking on a data-goto=""  ==================== */
const menuLinks = document.querySelectorAll("[data-goto]");
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});
	function onMenuLinkClick(e) {
		const menuLink = e.target.closest("[data-goto]");
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			let screenWidth = window.innerWidth;
			let gotoBlockValue;
			if (screenWidth <= 767) {
				let pageOur = document.querySelector(".page__our");
				if (pageOur === gotoBlock) {
					gotoBlockValue = gotoBlock.getBoundingClientRect().top - 105 + pageYOffset;
				} else {
					gotoBlockValue = gotoBlock.getBoundingClientRect().top - 20 + pageYOffset;
				}
			} else {
				let wrapper = document.querySelector(".wrapper");
				if (wrapper === gotoBlock) {
					gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
				} else {
					gotoBlockValue = gotoBlock.getBoundingClientRect().top + 45 + pageYOffset;
				}
			}
			if (iconMenu.classList.contains("_active")) {
				body.classList.remove("_lock");
				iconMenu.classList.remove("_active");
				menuBody.classList.remove("_active");
			}
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth",
			});
			e.preventDefault();
		}
	}
}
/* ===================================  Menu Burger  --End--  =================================== */
/* ===================================  Swiper  --Start--  =================================== */
var swiper = new Swiper(".mySwiper", {
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
/* ===================================  Swiper  --End--  =================================== */
/* ===================================  Popup  --Start--  =================================== */
const popupLinks = document.querySelectorAll('._popup__link');
const lockPadding = document.querySelectorAll(".lock-padding");
let unlock = true;
const timeout = 600;
if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
 	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener("click", function (e) {
			popupClose(el.closest('.popup__info'));
			e.preventDefault();
		});
	}
}
function popupOpen(curentPopup) {
   	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup__info._active');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('_active');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__info_content')) {
				popupClose(e.target.closest('.popup__info'));
			} 
		});
   	}
}
function popupClose(popupActive, doUnlock = true) {
	if (unlock){
		popupActive.classList.remove('_active');
		if (doUnlock) {
			bodyUnLock();
		}
	};
}
function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector(".wrapper").offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}  
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('_lock');

   	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = "0px";
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('_lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}
document.addEventListener("keydown", function (e) {
	if (e.which === 27) {
	   	const popupActive = document.querySelector('.popup__info._active');
		popupClose(popupActive);
   }
});
(function () {
   /* ====================  Checking the Support  ==================== */
   if (!Element.prototype.closest) {
	/* ====================  Implement  ==================== */
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches (css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
   }
})();
(function () {
   /* ====================  Checking the Support  ==================== */
   if (!Element.prototype.matches) {
		/* ====================  Defining the Property  ==================== */
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
   }
})();
/* ===================================  Popup  --End--  =================================== */
/* ====================  Add class _active Scroll Up Button  --Start--  ==================== */
document.addEventListener('DOMContentLoaded', () => {
	let toTopBtn = document.querySelector('.up__button');
	window.onscroll = function () {
		if (window.pageYOffset > 50) {
			toTopBtn.classList.add("_active");
		} else {
			toTopBtn.classList.remove("_active");
		}
	}
});
/* ====================  Add class _active Scroll Up Button  --End--  ==================== */
/* =============================================  Default  --End--  ============================================= */