/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation , Autoplay , Pagination} from 'swiper';
import * as flsFunctions from "./functions.js";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/_swiper.scss";
// Полный набор стилей из scss/libs/_swiper.scss
// import "../../scss/libs/_swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';
// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	if (document.querySelector('.hi__slider')) {
		new Swiper('.hi__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Autoplay, Pagination],
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.hi-slide-pagination',
				clickable: true,
			},
			// Arrows
			// navigation: {
			// 	nextEl: '.about__more .more__item_next',
			// 	prevEl: '.about__more .more__item_prev',
			// },
			breakpoints: {
				992: {
					autoplay: {
						delay: 5000,
						disableOnInteraction: false,
					},
				},
			},
			on: {

			}
		});
	}
	if(!flsFunctions.remSreenWidth(767.98)) {
		if (document.querySelector('.popuplar__slider')) {
			new Swiper('.popuplar__slider', {
				// Подключаем модули слайдера
				// для конкретного случая
				modules: [Pagination],
				slidesPerView: 1.8,
				spaceBetween: 20,
				// autoHeight: true,
				//touchRatio: 0,
				//simulateTouch: false,
				//loop: true,
				//preloadImages: false,
				//lazy: true,
				// Dotts
				pagination: {
					el: '.hi-slider-pagination',
					clickable: true,
				},
				// Arrows
				// navigation: {
				// 	nextEl: '.about__more .more__item_next',
				// 	prevEl: '.about__more .more__item_prev',
				// },
				breakpoints: {
					420: {
						slidesPerView: 3.2,
					},
					768: {
						slidesPerView: 4.5,
					},
				},
				on: {
	
				}
			});
		}
	}
	if (document.querySelector('.block__slider')) {
		new Swiper('.block__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			slidesPerView: 1.5,
			spaceBetween: 10,
			// autoHeight: true,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			// pagination: {
			// 	el: '.hi-slider-pagination',
			// 	clickable: true,
			// },
			// Arrows
			navigation: {
				nextEl: '.slide-button-next',
				prevEl: '.slide-button-prev',
			},
			breakpoints: {
				340: {
					slidesPerView: 1.7,
				},
				500: {
					slidesPerView: 2.2,
				},
				670: {
					slidesPerView: 3,
				},
				767: {
					slidesPerView: 3.6,
				},
				990: {
					slidesPerView: 4.2,
					spaceBetween: 20,
				},
				1200: {
					slidesPerView: 5.2,
					spaceBetween: 30,
				},
			},
			on: {
	
			}
		});
	}
	if (document.querySelector('.brand__slider')) {
		new Swiper('.brand__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			slidesPerView: 3,
			spaceBetween: 10,
			// autoHeight: true,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.brand-slide-pagination',
				clickable: true,
			},
			// Arrows
			navigation: {
				nextEl: '.slide-button-next',
				prevEl: '.slide-button-prev',
			},
			breakpoints: {
				767: {
					slidesPerView: 4,
				},
				990: {
					slidesPerView: 5,
				},
				1200: {
					slidesPerView: 6,
				},
			},
			on: {
	
			}
		});
	}
	if (document.querySelector('.reviews__slider')) {
		new Swiper('.reviews__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			slidesPerView: 1,
			spaceBetween: 30,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.reviews-slide-pagination',
				clickable: true,
			},
			// Arrows
			navigation: {
			 	nextEl: '.slide-button-next',
				prevEl: '.slide-button-prev',
			},
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});
window.addEventListener("resize", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});