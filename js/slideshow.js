(function(window, document) {
	var path = 'images/';
	var index = 0;
	var images = [];
	images[0] = path + "chicago.jpg";
	images[1] = path + "la.jpg";
	images[2] = path + "ny.jpg";
	var time = 2000;
	function changeImage() {
		document.slideshow.src = images[index];
		if(index < images.length-1) {
			index++;
		}else {
			index=0;
		}
		window.setTimeout(changeImage, time);
	}
	window.addEventListener("load", changeImage);
})(window, document);