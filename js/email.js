$('#emailForm').submit(function(e) {
	var name = document.getElementById('inputNome'),
		email = document.getElementById('inputEmail'),
		message = document.getElementById('inputConteudo')
	
		if(!name.value || !email.value || !message.value) {
			alert('Por Favor preencha todos os campos');
		}else {
			$.ajax({
				url: "https://formspree.io/hakenej@gmail.com", 
				method: "POST",
				data: $(this).serialize(),
				dataType: "json"
			});
			$(this).get(0).reset();
			$('#modalEmail').modal('hide');
			alert("E-mail enviado");
		}
		
		
		return false;
});