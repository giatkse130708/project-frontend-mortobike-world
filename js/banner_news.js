
var t;
var currentIndex = 1;

function next() {
	clearInterval(t);
	if (currentIndex < 4) {
		currentIndex++;
		document.getElementById("hinhslide") .src = "images/banners_news/" + currentIndex + ".png";
	}
	else {
		currentIndex = 1;
		document.getElementById("hinhslide") .src = "images/banners_news/" + currentIndex + ".png";
	}

	t = setInterval("next()", 3000);
}

function back() {
	clearInterval(t);
	if (currentIndex > 1) {
		currentIndex--;
		document.getElementById("hinhslide") .src = "images/banners_news/" + currentIndex + ".png";
	}
	else {
		currentIndex = 4;
		document.getElementById("hinhslide") .src = "images/banners_news/" + currentIndex + ".png";
	}

	t = setInterval("next()", 2000);
}
