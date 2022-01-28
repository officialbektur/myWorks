function animBorders () {
	var count = 350; //сколько элементов надо создать
	var page = document.querySelector('.page'); //внутрь класса
	var i = 0;

	while (i < count) {
		var animBorder = document.createElement("i");
		var x = Math.floor(Math.random() * window.innerWidth);
		var y = Math.floor(Math.random() * window.innerHeight);
		
		// Создаем i элементы
		var size = Math.random() * 10;
		animBorder.style.left = x + "px";
		animBorder.style.top = y + "px";
		animBorder.style.width = 1 + size + "px";
		animBorder.style.height = 1 + size + "px";

		// Анимация 
		animBorder.style.animationDuration = 4 + size + "s";
		animBorder.style.animationDelay = - size + "s";


		page.appendChild(animBorder);
		i++;
	}
}
animBorders (); // Запуск функций