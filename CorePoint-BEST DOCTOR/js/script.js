/* ====================  Strict regime  ==================== */
'use strict'; 
/* =============================================  Default  --Start--  ============================================= */
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
	document.body.classList.add('_mobile');
} else {
	document.body.classList.add('_pc');
}
window.addEventListener("resize", function () {
    hiHeight();
	let windwoWidth = window.innerWidth;
	if (windwoWidth > 767) {
		if (iconMenu.classList.contains("_active") || body.classList.contains("_lock")) {
			body.classList.remove("_lock");
			iconMenu.classList.remove("_active");
			menuBody.classList.remove("_active");
		}
	} 
    menuListMarginTop()
	dynamic_adapt();
});
/* ===================================  Preloader  --Start--  =================================== */
document.body.onload = function () {
	document.body.classList.add("_lock")
	setTimeout(function () {
		var preloader = document.getElementById("preloader");
		if (!preloader.classList.contains("_active")) {
			document.body.classList.remove("_lock");
			preloader.classList.add("_active");
		}
	}, 1000);
}
/* ===================================  Preloader  --End--  =================================== */


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
/* ===================================  IBG  --Start--  =================================== */
/* <div class="hi__ibg _ibg">
	<img src="img/background-image/bgi-01.png" alt="background">
</div> */
function ibg(){
	let ibg=document.querySelectorAll("._ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();
/* ===================================  IBG  --End--  =================================== */
/* ===================================  hi ImgBg  --Start--  =================================== */
function hiHeight() {
    let bgi = document.querySelector(".hi");
    let fullWindowInner = document.body.clientHeight || document.documentElement.clientHeight;
    let bgiMinusElementHeight = document.querySelector(".bgi-minus-height").offsetHeight;
    let windowInner = fullWindowInner - bgiMinusElementHeight;
    if (windowInner >= 1300) {
        bgi.style.height = 900 + "px";
    } else if(windowInner >= 500) {
        bgi.style.height = windowInner + "px";
    } else {
        bgi.style.height = 500 + "px";
    } 
}
hiHeight();
/* ===================================  hi ImgBg  --End--  =================================== */
/* ===================================  progress Bar  --Start--  =================================== */
const progress = document.querySelector(".progress");
window.addEventListener("scroll", progressBar)
function progressBar() {
    menuListMarginTop()
    let windowScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.body.scrollHeight - document.documentElement.clientHeight;
    let percent = windowScrollTop / windowHeight * 100;
    progress.style.width = percent + "%";
}
/* ===================================  progress Bar  --End--  =================================== */
/* ===================================  Animation  --Start--  =================================== */
let animItems = document.querySelectorAll("._anime-item")
if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll)
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

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
/* ===================================  Animation  --End--  =================================== */
/* ===================================  Кнопка на верх + плавный скролл наверх  --Start--  =================================== */
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
/* ===================================  Кнопка на верх + плавный скролл наверх  --End--  =================================== */
/* ===================================  Menu  --Start--  =================================== */
var body = document.querySelector("body");
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
function menuListMarginTop() {
    let windwoWidth = window.innerWidth;
    const menuListMarginTop = document.querySelector(".menu__list");
    if(windwoWidth < 767) {
        let windowScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        let header = document.querySelector(".header").offsetHeight;
        if(windowScrollTop < header) {
            menuListMarginTop.style.marginTop = header - windowScrollTop + "px";
        } else {
            menuListMarginTop.style.marginTop = "";
            windowScrollTop = false;
        }
    }  
    if(windwoWidth > 767) {
        menuListMarginTop.style.marginTop = "";
    }
}
menuListMarginTop();
let lockClickMenuBurger = true;
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		if (lockClickMenuBurger) {
			body.classList.toggle("_lock");
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
			lockClickMenuBurger = false; 
			setTimeout(() => {
				lockClickMenuBurger = true;
			}, 350);
		}
	});
	menuBody.classList.contains('_active');
	menuBody.addEventListener("click", function (e) {
		if (!e.target.closest(".menu__link")) {
			body.classList.remove("_lock");
			iconMenu.classList.remove("_active");
			menuBody.classList.remove("_active");
			
		}
	});
}
/* ====================  Прокрутка при клике на меню  ==================== */
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
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}
/* ===================================  Menu  --End--  =================================== */
/* ===================================  SPOLLERS  --Start--  =================================== */
const spollersArray = document.querySelectorAll("[data-spollers]");
if (spollersArray.length > 0) {
    // Получение обычных спойлеров
    const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
        return !item.dataset.spollers.split(",")[0];
    });
    // Иницализация обычных спойлеров
    if (spollersRegular.length > 0) {
        initSpollers(spollersRegular);
    }
    // Получение спойлеров с медиа запросами 
    const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
        return item.dataset.spollers.split(",")[0];
    });

    // Иницализация спойлеров с медиа запросами
    if (spollersMedia.length > 0) {
        const breakpointsArray = [];
        spollersMedia.forEach(item =>  {
            const params = item.dataset.spollers;
            const breakpoint = {};
            const paramsArray = params.split(",");
            breakpoint.value = paramsArray[0];
            breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
            breakpoint.item = item;
            breakpointsArray.push(breakpoint);
        });

        // Получаем уникальные брекпоинты
        let mediaQueries = breakpointsArray.map(function (item) {
            return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
        });
        mediaQueries = mediaQueries.filter(function (item, index, self) {
            return self.indexOf(item) === index;
        });

        // Работаем с каждым брепоинтом 
        mediaQueries.forEach(breakpoint => {
            const paramsArray = breakpoint.split(",");
            const mediaBreakpoint = paramsArray[1];
            const mediaType = paramsArray[2];
            const matchMedia = window.matchMedia(paramsArray[0]);

            // Обьекты с нужными условиями
            const spollersArray = breakpointsArray.filter(function (item) {
                if (item.value === mediaBreakpoint && item.type === mediaType) {
                    return true;
                }
            });
            // Событие 
            matchMedia.addListener(function () {
                initSpollers(spollersArray, matchMedia);
            });
            initSpollers(spollersArray, matchMedia);
        });
    } 
    // initSpollers
    function initSpollers(spollersArray, matchMedia = false) {
        spollersArray.forEach(spollersBlock => {
            spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
            if (matchMedia.matches || !matchMedia) {
                spollersBlock.classList.add("_init");
                initSpollerBody(spollersBlock);
                spollersBlock.addEventListener("click", setSpollerAction);
            } else {
                spollersBlock.classList.remove("_init");
                initSpollerBody(spollersBlock, false);
                spollersBlock.removeEventListener("click", setSpollerAction);
            }
        });
    }
    // Работа с контентом
    function initSpollerBody(spollersBlock, hideSpollerBody = true) {
        const spollerTitles = spollersBlock.querySelectorAll("[data-spoller]")
        if (spollerTitles.length > 0) {
            spollerTitles.forEach(spollerTitle => {
                if (hideSpollerBody) {
                    spollerTitle.removeAttribute("tabindex");
                    if (!spollerTitle.classList.contains("_active")) {
                        spollerTitle.nextElementSibling.hidden = true;
                    }
                } else {
                    spollerTitle.setAttribute("tabindex", "-1");
                    spollerTitle.nextElementSibling.hidden = false;
                }
            });
        }
    }
    function setSpollerAction(e) {
        const el = e.target;
        if (el.hasAttribute("data-spoller") || el.closest("[data-spoller]")) {
            const spollerTitle = el.hasAttribute("data-spoller") ? el : el.closest("[data-spoller]");
            const spollersBlock = spollerTitle.closest("[data-spollers]");
            const oneSpoller = spollersBlock.hasAttribute("data-one-spoller") ? true : false;
            if (!spollersBlock.querySelectorAll("._slide").length) {
                if (oneSpoller && !spollerTitle.classList.contains("_active")) {
                    hideSpollerBody(spollersBlock);
                }
                spollerTitle.classList.toggle("_active");
                _slideToggle(spollerTitle.nextElementSibling, 500);
            }
            e.preventDefault();
        }
    }
    function hideSpollerBody(spollersBlock) {
        const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._active");
        if (spollerActiveTitle) {
            spollerActiveTitle.classList.remove("_active");
            _slideUp(spollerActiveTitle.nextElementSibling, 500);
        }
    }
} 

// ============================================
// SlideToggle
let _slideUp = (target, duration = 500) => {
    if (!target.classList.contains("_slide")) {
        target.classList.add("_slide");
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + "ms";
        target.style.height = target.offsetHeight + "px";
        target.offsetHeight;
        target.style.overflow = "hidden";
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout(() => {
            target.hidden = true;
            target.style.removeProperty("height");
            target.style.removeProperty("padding-top");
            target.style.removeProperty("padding-bottom");
            target.style.removeProperty("margin-top");
            target.style.removeProperty("margin-bottom");
            target.style.removeProperty("overflow");
            target.style.removeProperty("transition-duration");
            target.style.removeProperty("transition-property");
            target.classList.remove("_slide");
        }, duration);
    }
}
let _slideDown = (target, duration = 500) => {
    if (!target.classList.contains("_slide")) {
        target.classList.add("_slide");
        if (target.hidden) {
            target.hidden = false;
        }
        let height = target.offsetHeight;
        target.style.overflow = "hidden";
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + "ms";
        target.style.transitionProperty = target.offsetHeight + "px";
        target.style.height = height + "px";
        target.style.removeProperty("padding-top");
        target.style.removeProperty("padding-bottom");
        target.style.removeProperty("margin-top");
        target.style.removeProperty("margin-bottom");
        window.setTimeout(() => {
            target.style.removeProperty("height");
            target.style.removeProperty("overflow");
            target.style.removeProperty("transition-duration");
            target.style.removeProperty("transition-property");
            target.classList.remove("_slide");
        }, duration);
    }
}
let _slideToggle = (target, duration = 500) => {
    if (target.hidden) {
        return _slideDown(target, duration);
    } else {
        return _slideUp(target, duration);
    }
}
/* ===================================  SPOLLERS  --End--  =================================== */

/* =============================================  Default  --End--  ============================================= */
let btn = document.querySelector(".button__more_services");
let box = document.querySelectorAll(".services__info_block");
for (let index = 2; index < box.length; index++) {
	const element = box[index];
	element.classList.add("_show")
}
btn.addEventListener("click", function() {
	for (let index = 2; index < box.length; index++) {
		const element = box[index];
		element.classList.toggle("_show");
	}   
});
let showBbuttonConsultation = document.querySelector(".button__сonsultation");
let backButtonConsultation = document.querySelector(".сonsultation__popup_back");
let showPopupConsultation = document.querySelector(".consultation__popup");
if (showPopupConsultation) {
    showBbuttonConsultation.addEventListener("click", function(e) {
        let showBbuttonConsultation = e.target.closest(".button__сonsultation")
        body.classList.add("_lock");
        showPopupConsultation.classList.toggle("_show");
    });
    backButtonConsultation.addEventListener("click", function() {
        body.classList.remove("_lock");
        showPopupConsultation.classList.remove("_show");
    });
    showPopupConsultation.classList.contains('_show');
    showPopupConsultation.addEventListener("click", function (e) {
        if (!e.target.closest(".сonsultation__popup_content")) {
            body.classList.remove("_lock");
            showPopupConsultation.classList.remove("_show");
        }
    });
}
