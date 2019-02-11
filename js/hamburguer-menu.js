function toggleMenu(x) {
	x.classList.toggle("change");
	
	if(document.body.classList.contains("changeBody")) {
		document.getElementById("body").classList.toggle("changeBody");
		document.getElementById("html").classList.toggle("changeHTML");
	} else {
		setTimeout(function() {
			document.getElementById("body").classList.toggle("changeBody");
			document.getElementById("html").classList.toggle("changeHTML");
		}, 100);
	}
}

function clickBody() {
	if(document.body.classList.contains("changeBody"))
		toggleMenu(document.getElementById("hamburguer-menu"));
}