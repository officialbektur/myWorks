/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/
// Стили Swiper
// Базовые стили
import "../../scss/base/_swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
		function remSreenWidth() {
			let remSreenWidth = (window.innerWidth / 16);
			let mobileSreenWidth = 29.99875;
			return mobileSreenWidth <= remSreenWidth;
		}
		if (remSreenWidth()) {
			if (document.querySelector('.swiper')) { // Указываем скласс нужного слайдера
				// Создаем слайдер
				new Swiper('.swiper', { // Указываем скласс нужного слайдера
					// Подключаем модули слайдера
					// для конкретного случая
					modules: [Navigation],
					direction: "vertical",
					freeMode: true,
					observer: true,
					observeParents: true,
					slidesPerView: 3,
					spaceBetween: 30,
					// autoHeight: true,
					speed: 800,
					// mousewheel: true,
					// touchRatio: 0,
					// simulateTouch: true,
					// loop: true,
					//preloadImages: false,
					//lazy: true,
		
					/*
					// Эффекты
					effect: 'fade',
					autoplay: {
						delay: 3000,
						disableOnInteraction: false,
					},
					*/
		
					// Пагинация
					/*
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					*/
		
					// Скроллбар
					/*
					scrollbar: {
						el: '.swiper-scrollbar',
						draggable: true,
					},
					*/
		
					// Кнопки "влево/вправо"
					navigation: {
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					},
					// Брейкпоинты
					// breakpoints: {
					// },
					// События
					// on: {
					// }
				});
			}
		} else {
			if (document.querySelector('.swiper')) { // Указываем скласс нужного слайдера
				// Создаем слайдер
				new Swiper('.swiper', { // Указываем скласс нужного слайдера
					// Подключаем модули слайдера
					// для конкретного случая
					modules: [Navigation],
					freeMode: true,
					observer: true,
					observeParents: true,
					slidesPerView: 3,
					spaceBetween: 10,
					// autoHeight: true,
					speed: 800,
					//touchRatio: 0,
					// simulateTouch: false,
					//loop: true,
					//preloadImages: false,
					//lazy: true,
		
					/*
					// Эффекты
					effect: 'fade',
					autoplay: {
						delay: 3000,
						disableOnInteraction: false,
					},
					*/
		
					// Пагинация
					/*
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					*/
		
					// Скроллбар
					/*
					scrollbar: {
						el: '.swiper-scrollbar',
						draggable: true,
					},
					*/
		
					// Кнопки "влево/вправо"
					navigation: {
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					},
					// Брейкпоинты
					// breakpoints: {
					// },
					// События
					// on: {
					// }
				});
			}
		}
	}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
/*
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
*/
window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});