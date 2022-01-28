/* ====================  Strict regime  ==================== */ 
'use strict';
/* =============================================  Default  --Start--  ============================================= */
/* ===================================  Preloader  --Start--  =================================== */
document.body.onload = function () {
	if (!document.body.classList.contains("_lock")) {
		document.body.classList.add("_lock");
	}
	setTimeout(function () {
		var preloader = document.querySelector(".preloader");
		if (!preloader.classList.contains("_show")) {
			document.body.classList.remove("_lock");
			preloader.classList.add("_show");
		}
	}, 1000);
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
/* ====================  Checking the screen resizing  --Start--  ==================== */
window.addEventListener("resize", function () {
	defineСomputerOrMobile();
	activeMenuLink
	dynamic_adapt();
	let windwoWidth = window.innerWidth;
	if (windwoWidth > 767) {
		if (iconMenu.classList.contains("_active") || body.classList.contains("_lock")) {
			body.classList.remove("_lock");
			iconMenu.classList.remove("_active");
			menuBody.classList.remove("_active");
		}
	}
});
/* ====================  Checking the screen resizing  --End--  ==================== */
/* ===================================  Identify Computer or Mobile  --End--  =================================== */


/* ====================  hi ImgBg  --Start--  ==================== */
let hiImgBg = document.querySelector(".hi");
let fullWindowInner = document.body.clientHeight || document.documentElement.clientHeight;
let windowInner = fullWindowInner;
if (windowInner >= 1300) {
	hiImgBg.style.height = 900 + "px";
} else if(windowInner >= 500) {
	hiImgBg.style.height = windowInner + "px";
} else {
	hiImgBg.style.height = 500 + "px";
}
/* ====================  hi ImgBg  --End--  ==================== */
/* ===================================  Anim  --Start--  =================================== */
/* ====================  class="_anime-item _anime-no-hide"  ==================== */
let animItems = document.querySelectorAll("._anime-item")
if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll)
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            /* ====================  Let animItemPoint  ==================== */
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset  + animItemHeight)) {
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

/* ===================================  Anim  --End--  =================================== */
/* ===================================  Dynamic Transfer of Objects  --Start--  =================================== */
/* ====================  e.x. data-move="item,2,992"  ==================== */ 
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
							//insertAfter
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
		//insertAfter
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
/* ==================== Initialize Swiper ==================== */
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 10,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	  // Responsive breakpoints
	  breakpoints: {
		// when window width is >= 640px
		670: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		767: {
		  slidesPerView: 3,
		  spaceBetween: 50
		}
	  }
});
var popupOurColumnSwiper = new Swiper(".mySwiperPopupOurColumn", {
	slidesPerView: 1,
	spaceBetween: 20,
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	}
});
/* ===================================  Activating the Menu When Scrolling  --Start--  =================================== */
function activeMenuLink() {
	window.addEventListener("scroll", function () {
		if (window.innerWidth > 767) {
			const scrollDistance = window.scrollY;
			document.querySelectorAll("._section__block").forEach((el, l) => {
				if (el.offsetTop <= scrollDistance) {
					document.querySelectorAll(".menu__link").forEach((el) => {
						if (el.classList.contains("_activeLink")) {
							el.classList.remove("_activeLink");
						}
					});
					document.querySelectorAll(".menu__link")[l].classList.add("_activeLink");
				}
				if (scrollDistance <= document.querySelector(".hi").offsetHeight - document.querySelector("header").offsetHeight) {
					document.querySelectorAll(".menu__link").forEach((el) => {
						if (el.classList.contains("_activeLink")) {
							el.classList.remove("_activeLink");
						}
					});
				}
			});
		}
	});
}
activeMenuLink();
/* ===================================  Activating the Menu When Scrolling  --End--  =================================== */
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
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
			if (iconMenu.classList.contains("_active")) {
				document.body.classList.remove("_lock");
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
/* ====================  Scroll Up Button + Smooth Scroll Up  --Start--  ==================== */
document.addEventListener('DOMContentLoaded', () => {
	let toTopBtn = document.querySelector('.up__button');
	let header = document.querySelector('.header');
	if (window.pageYOffset > 50) {
		toTopBtn.classList.add("_active");
		header.classList.add("_active");
	}
	window.onscroll = function () {
		if (window.pageYOffset > 50) {
			toTopBtn.classList.add("_active");
			header.classList.add("_active");
		} else {
			toTopBtn.classList.remove("_active");
			header.classList.remove("_active");
		}
	}
});
/* ====================  Scroll Up Button + Smooth Scroll Up  --End--  ==================== */
/* =============================================  Default  --End--  ============================================= */