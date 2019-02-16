$('#emailForm').submit(function (e) {
	e.preventDefault()
	removeIsInvalidClass();
	var assunto = document.getElementById('inputAssunto'),
		email = document.getElementById('inputEmail'),
		mensagem = document.getElementById('inputConteudo')

	if(!assunto.value || !email.value || !mensagem.value) {		
		if(!assunto.value )
			$('#assuntoInvalid').html('campo obrigatório')
        
		if(!email.value)
			$('#emailInvalid').html('campo obrigatório')
        
		if(!mensagem.value)
			$('#conteudoInvalid').html('campo obrigatório')
	} else if(!validateEmail(email.value))
		$('#emailInvalid').html('email inválido');
	else {
		$.ajax({
			url: "https://formspree.io/hakenej@gmail.com",
			method: "POST",
			data: $(this).serialize(),
			dataType: "json"
		});
		alertify.closeLogOnClick(true).delay(10000).success("E-mail enviado");
	}
});

function validateEmail(email){
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function removeIsInvalidClass() {
	$('#assuntoInvalid').html('')
	$('#emailInvalid').html('')
	$('#conteudoInvalid').html('')
}