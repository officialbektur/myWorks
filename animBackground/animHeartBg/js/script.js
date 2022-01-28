const pageAnim = document.querySelector(".page__anim");
for (var i = 1; i <= 50; i++) {
	const animheartbg = document.createElement('div');
	animheartbg.classList.add("animheartbg");
	pageAnim.appendChild(animheartbg);
}
function animateHearts () {
	anime ({
		targets: ".animheartbg",
		translateX: function () {
			return anime.random(-700,700);
		},
		translateY: function () {
			return anime.random(-500,500);
		},
		rotate: 45,
		scale: function () {
			return anime.random(1,4);
		},
		easing: "easeInOutBack",
		duratiom: 3000,
		delay: anime.stagger(10),
		complete: animateHearts,
	})
}
animateHearts ();