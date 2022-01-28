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
			document.querySelector(".wrapper").classList.add("_done");
			setTimeout(function () {
				if (!preloader.classList.contains("_show")) {
					document.body.classList.remove("_lock");
					preloader.classList.add("_show");
					document.querySelector(".wrapper").classList.remove("_done");
					animElements();
				}
			},3000);
		}
	} else {
		document.body.classList.add("_lock");
		document.querySelector(".wrapper").classList.add("_done");
		if (!preloader.classList.contains("_show")) {
			document.body.classList.remove("_lock");
			preloader.classList.add("_show");
			document.querySelector(".wrapper").classList.remove("_done");
			animElements();
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
		metaViewport.setAttribute("content", "width=1600");
		document.querySelector(".header").classList.add("_minWindowScreen250");
		document.querySelector(".page").classList.add("_minWindowScreen250");
		delete activeMenuLink();
	} else {
		document.body.classList.remove("_minWindowScreen250");
		metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
		document.querySelector(".header").classList.remove("_minWindowScreen250");
		document.querySelector(".page").classList.remove("_minWindowScreen250");
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
	activeMenuLink();
	deleteActiveWindowLarger767px();
	deleteActiveAtSublistOnPc();
	responsive();
	animElements();
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
/* ====================  Delete the active one in the Sublist on the PC, if there is one  --Start--  ==================== */
function deleteActiveAtSublistOnPc() {
	if (document.body.classList.contains("_pc")) {
		let menuListSublists = document.querySelectorAll(".menu__list_sublist");
		if (menuListSublists.length > 0) {
			for (let index = 0; index < menuListSublists.length; index++) {
				const menuListSublist = menuListSublists[index];
				if (menuListSublist.classList.contains("_active")) {
					menuListSublist.classList.remove("_active");
				}
			}
		}
	}
}
/* ====================  Delete the active one in the sublist on the PC, if there is one  --End--  ==================== */
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
animElements();
/* ===================================  Anim  --End--  =================================== */
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
function responsive() {
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
						responsive_back(_el7);
						_el7.classList.remove("js-move_done_" + data_bp);
					}
				}
			}
		}
	}
}
function responsive_back(el) {
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
responsive();
/* ===================================  Dynamic Transfer of Objects  --End--  =================================== */
/* ====================  Activation when Scrolling   --Start--  ==================== */
document.addEventListener('DOMContentLoaded', () => {
	let toTopBtn = document.querySelector('.up__button');
	let header = document.querySelector('.header');
	if (window.pageYOffset > 1) {
		header.classList.add("_scrollActive");
	} else {
		header.classList.remove("_scrollActive");
	}
	window.onscroll = function () {
		if (window.pageYOffset > 50) {
			toTopBtn.classList.add("_active");
		} else {
			toTopBtn.classList.remove("_active");
		}
		if (window.pageYOffset > 1) {
			header.classList.add("_scrollActive");
		} else {
			header.classList.remove("_scrollActive");
		}
	}
});
/* ====================  Activation when Scrolling  --End--  ==================== */
/* ===================================  Menu Burger  --Start--  =================================== */
const body = document.querySelector("body");
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
/* ===================================  Activating the Menu When Scrolling  --Start--  =================================== */
/* ===================================  class="_section__block"  =================================== */
function activeMenuLink() {
	window.addEventListener("scroll", function () {
		if (screen.width > 250) {
			const scrollDistance = window.scrollY + document.querySelector(".header").offsetHeight;
			document.querySelectorAll("._section__block").forEach((el, l) => {
				if (el.offsetTop <= scrollDistance) {
					document.querySelectorAll(".menu__link").forEach((el) => {
						if (el.classList.contains("_activeLink")) {
							el.classList.remove("_activeLink");
						}
					});
					document.querySelectorAll(".menu__link")[l].classList.add("_activeLink");
				}
			});
		}
	});
}
activeMenuLink();
/* ===================================  Activating the Menu When Scrolling  --End--  =================================== */
/* ====================  Activation when Scrolling   --Start--  ==================== */
document.addEventListener('DOMContentLoaded', () => {
	let toTopBtn = document.querySelector('.up__button');
	let header = document.querySelector('.header');
	if (window.pageYOffset > 1) {
		header.classList.add("_scrollActive");
	} else {
		header.classList.remove("_scrollActive");
	}
	window.onscroll = function () {
		if (window.pageYOffset > 50) {
			toTopBtn.classList.add("_active");
		} else {
			toTopBtn.classList.remove("_active");
		}
		if (window.pageYOffset > 1) {
			header.classList.add("_scrollActive");
		} else {
			header.classList.remove("_scrollActive");
		}
	}
});
/* ====================  Activation when Scrolling  --End--  ==================== */
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		body.classList.toggle("_lock");
		iconMenu.classList.toggle("_active");
		menuBody.classList.toggle("_active");
	});
	menuBody.classList.contains('_active');
	menuBody.addEventListener("click", function (e) {
		console.log(e.target.className);
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
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top - document.querySelector(".header").offsetHeight + pageYOffset;
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
/* =============================================  Default  --End--  ============================================= */