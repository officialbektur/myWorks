/* ===================================  Preloader  --Start--  =================================== */
window.onload = function () {
	let screenWidth = window.innerWidth;
	if (document.querySelector(".preloader")) {
		if (screenWidth > 250) {
			let preloader = document.querySelector(".preloader");
			window.setTimeout(function () {
				if (!preloader.classList.contains("_show")) {
					document.querySelector(".wrapper").classList.remove("_done");
					preloader.classList.add("_show");
					document.querySelector(".wrapper").classList.remove("_done-opacity");
					document.documentElement.classList.remove("lock");
				}
			}, 3000);
		} else {
			preloader.classList.add("_show");
		}
	} 
} 
/* ===================================  Preloader  --End--  =================================== */