function run(){
    var image = document.getElementById('background');
                image.onload = function () {
                    var engine = new RainyDay({
                        image: this
                    });
                    engine.rain([
                        [1, 2, 8000]
                    ]);
                    engine.rain([
                        [1,1,12],
                    ], 100);
                };
	image.crossOrigin = 'anonymous';
    image.src = 'http://i.imgur.com/N7ETzFO.jpg';
}
run();