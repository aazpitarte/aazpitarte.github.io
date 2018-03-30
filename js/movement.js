

function ayy() {
	
	var e = document.getElementById("lmao");
	var i = 1;
	var size = 1;
	while (true) {
		if (i % 1000 == 0) {
			size++;
		}
		i++;
		e.style.textShadow = '2px 2px ' + size.toString() + 'px #000000';
	}
};

function scrollIntoView(element) {
   var e = document.getElementById(element);
   if (!!e && e.scrollIntoView) {
       e.scrollIntoView();
   }
};

window.onload = ayy();