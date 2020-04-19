
var t;
var currentIndex = 1;

function next() {
	clearInterval(t);
	if (currentIndex < 5) {
		currentIndex++;
		document.getElementById("hinhslide") .src = "images/ads/" + currentIndex + ".jpg";
	}
	else {
		currentIndex = 1;
		document.getElementById("hinhslide") .src = "images/ads/" + currentIndex + ".jpg";
	}

	t = setInterval("next()", 2000);
}
