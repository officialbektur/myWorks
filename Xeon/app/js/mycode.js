// Подключение функционал
import { isMobile } from "./files/functions.js";
// Подключение списка активных модулей
import { flsModules } from "./files/modules.js";
/* ====================  color selections buttons and prewies img  ==================== */
let colorSelectionsButtons = document.querySelectorAll(".color__selections_buttons-button");
if (colorSelectionsButtons.length > 0) {
	for (let index = 0; index < colorSelectionsButtons.length; index++) {
		const colorSelectionsButton = colorSelectionsButtons[index];
		colorSelectionsButton.addEventListener("click", function() {
			colorSelectionsButtons.forEach(element => {
				element.classList.remove("_active");
			});
			if (document.querySelector(".hi__prewies_image source")) {
				let prewiesImg = document.querySelector(".hi__prewies_image source");
				let prewiesImgSrcset = prewiesImg.getAttribute("srcset");
				let prewiesImgSrcsetTitle = prewiesImgSrcset.split('-color-')[0];
				let prewiesImgSrcsetExtension = prewiesImgSrcset.substring(prewiesImgSrcset.lastIndexOf("."));
				this.classList.add("_active");
				let newColorTitle = this.getAttribute("data-color");
				prewiesImg.setAttribute("srcset", prewiesImgSrcsetTitle + "-color-" + newColorTitle + prewiesImgSrcsetExtension);
			} else {
				let prewiesImg = document.querySelector(".hi__prewies_image img");
				let prewiesImgSrc = prewiesImg.getAttribute("src");
				let prewiesImgSrcTitle = prewiesImgSrc.split('-color-')[0];
				let prewiesImgSrcExtension = prewiesImgSrc.substring(prewiesImgSrc.lastIndexOf("."));
				this.classList.add("_active");
				let newColorTitle = this.getAttribute("data-color");
				prewiesImg.setAttribute('src', prewiesImgSrcTitle + "-color-" + newColorTitle + prewiesImgSrcExtension);
			}
		});
	}
}
/* ====================  swiper slide and prewies img  ==================== */
let buttonsSwiperSlide = document.querySelectorAll(".swiper-slide");
if (buttonsSwiperSlide.length > 0) {
	for (let index = 0; index < buttonsSwiperSlide.length; index++) {
		const buttonsSwiperSlides = buttonsSwiperSlide[index];
		buttonsSwiperSlides.addEventListener("click", function() {
			let newColorTitle = this.querySelector(".swiper-slide img");
			let newColorTitleSrc = newColorTitle.getAttribute("src");
			let imgSrcTitle = newColorTitleSrc.split(".")[0];
			let imgSrcExtension = newColorTitleSrc.substring(newColorTitleSrc.lastIndexOf("."));
			if (document.querySelector(".hi__prewies_image source")) {
				let prewiesImg = document.querySelector(".hi__prewies_image source");
				prewiesImg.setAttribute('srcset', imgSrcTitle + ".webp");
			} else {
				let prewiesImg = document.querySelector(".hi__prewies_image img");
				prewiesImg.setAttribute('src', imgSrcTitle + imgSrcExtension);
			}
			let newColorTitleSrcTitle = newColorTitleSrc.split('.')[0];
			let newColorTitleSrcExtension = newColorTitleSrcTitle.substring(newColorTitleSrcTitle.lastIndexOf("-color-") + 7);
			colorSelectionsButtons.forEach(element => {
				element.classList.remove("_active");
			});
			document.querySelector(".color__selections_buttons-"+newColorTitleSrcExtension).classList.add("_active");
		});
	}
}
/* ===================================  Progress Bar  --End--  =================================== */