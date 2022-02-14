// Подключение функционал
import { isMobile } from "./files/functions.js";
// Подключение списка активных модулей
import { flsModules } from "./files/modules.js";
// functions
import * as flsFunctions from "./files/functions.js";

let buttonCatalogButton = document.querySelector(".button-catalog__icons");
if (buttonCatalogButton) {
	buttonCatalogButton.addEventListener("click", function () {
		buttonCatalogButton.parentElement.classList.toggle("_active")
	});
}
let buttonCatalogBodyLi = document.querySelectorAll(".button-catalog__body_li");
let buttonCatalogBodyArrow = document.querySelectorAll(".button-catalog__body_li .icon-arrow-right");
if (buttonCatalogBodyArrow) {
	for (let index = 0; index < buttonCatalogBodyArrow.length; index++) {
		const element = buttonCatalogBodyArrow[index];
		element.addEventListener("click", function () {
			if (!element.parentElement.parentElement.classList.contains("_active") && !flsFunctions.remSreenWidth()) {
				buttonCatalogBodyLi.forEach(index => {
					if (index.classList.contains("_active")) {
						index.classList.remove("_active")
					}
				});
				this.parentElement.parentElement.classList.add("_active");
			} else {
				this.parentElement.parentElement.classList.remove("_active");
			}
		});
	}
}
let massegInfoResul = true;
function massegInfo() {
	let massegInfo = document.getElementById("massegInfo");
	massegInfo.classList.add("_active");
	massegInfoResul = false;
	setTimeout(() => {
		massegInfo.classList.remove("_active");
		massegInfoResul = true;
	}, 1200);
}
function massegInfoActiveIcon(name, number) {
	let massegInfo = document.getElementById("massegInfo");
	let massegInfoNumber = document.getElementById("massegInfoNumber");
	massegInfo.classList.add(name);
	massegInfoNumber.innerHTML = number;
	setTimeout(() => {
		massegInfo.classList.remove(name);
		massegInfoNumber.innerHTML = "";
	}, 1200);
}
let favourites = document.getElementById("favourites");
let buttonLikes = document.querySelectorAll(".block-column-top__icon.icon-heart");
if (buttonLikes.length > 0) {
	for (let index = 0; index < buttonLikes.length; index++) {
		const buttonLike = buttonLikes[index];
		buttonLike.addEventListener("click", function() {
			if (massegInfoResul) {
				if (buttonLike.classList.contains("_active")) {
					favourites.innerText = Number(favourites.innerText) - 1;
					massegInfoActiveIcon("favourites", "-" + favourites.innerText);
				} else {
					favourites.innerText = Number(favourites.innerText) + 1;
					massegInfoActiveIcon("favourites", "+" + favourites.innerText);
				}
				massegInfo();
				buttonLike.classList.toggle("_active");
			}
		})
	}  
}
let comparison = document.getElementById("comparison");
let buttonListPlus = document.querySelectorAll(".block-column-top__icon.icon-list-plus");
if (buttonListPlus.length > 0) {
	for (let index = 0; index < buttonListPlus.length; index++) {
		const buttonListPluse = buttonListPlus[index];
		buttonListPluse.addEventListener("click", function() {
			if (massegInfoResul) {
				if (buttonListPluse.classList.contains("_active")) {
					comparison.innerText = Number(comparison.innerText) - 1;
					massegInfoActiveIcon("comparison", "-" + comparison.innerText);
				} else {
					comparison.innerText = Number(comparison.innerText) + 1;
					massegInfoActiveIcon("comparison", "+" + comparison.innerText);
				}
				massegInfo();
				buttonListPluse.classList.toggle("_active");
			}
		})
	}  
}

let basket = document.getElementById("basket");
let buttonBasket = document.querySelectorAll(".block-column__cart");
if (buttonBasket.length > 0) {
	for (let index = 0; index < buttonBasket.length; index++) {
		const buttonBaskets = buttonBasket[index];
		buttonBaskets.addEventListener("click", function() {
			if (massegInfoResul) {
				if (buttonBaskets.classList.contains("_active")) {
					basket.innerText = Number(basket.innerText) - 1;
					massegInfoActiveIcon("basket", "-" + basket.innerText);
				} else {
					basket.innerText = Number(basket.innerText) + 1;
					massegInfoActiveIcon("basket", "+" + basket.innerText);
				}
				massegInfo();
				buttonBaskets.classList.toggle("_active");
			}
		})
	}  
}