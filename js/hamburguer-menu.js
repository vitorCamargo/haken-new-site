function toggleMenu(x) {
	x.classList.toggle("change");
	
	if(document.body.classList.contains("changeBody"))
		document.getElementById("body").classList.toggle("changeBody");
	else
		setTimeout(function() {
			document.getElementById("body").classList.toggle("changeBody");
		}, 100);
}

function clickBody(x) {
	if(x.classList.contains("changeBody"))
		toggleMenu(document.getElementById("hamburguer-menu"));
}