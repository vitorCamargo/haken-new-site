$('#emailForm').submit(function (e) {
	e.preventDefault()
	removeIsInvalidClass()
	var assunto = document.getElementById('inputAssunto'),
		email = document.getElementById('inputEmail'),
		mensagem = document.getElementById('inputConteudo')

	if (!assunto.value || !email.value || !mensagem.value) {
		alertify.closeLogOnClick(true).delay(10000).error('Por Favor preencha todos os campos');
		
		if (!assunto.value ){
			$('#assuntoInvalid').html('Por Favor preencha este campo')
			$('#inputAssunto').addClass('is-invalid')
		}
		if (!email.value){
			$('#emailInvalid').html('Por Favor preencha este campo')
			$('#inputEmail').addClass('is-invalid')
		}
		if (!mensagem.value){
			$('#conteudoInvalid').html('Por Favor preencha este campo')
			$('#inputConteudo').addClass('is-invalid')
		}

	} else if (!validateEmail(email.value)) {
		alertify.closeLogOnClick(true).delay(10000).error('Por Favor utilize um E-mail valido');
		$('#emailInvalid').html('Por Favor utilize um E-mail valido')
		$('#inputEmail').addClass('is-invalid')
	} else {
		$.ajax({
			url: "https://formspree.io/hakenej@gmail.com",
			method: "POST",
			data: $(this).serialize(),
			dataType: "json"
		});
		$(this).get(0).reset();
		$('#emailModal').modal('hide');
		alertify.closeLogOnClick(true).delay(10000).success("E-mail enviado");
	}
});

function validateEmail(email){
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

$('#emailModal').on('hidden.bs.modal', function () {
	$('#emailForm').trigger("reset");
	removeIsInvalidClass()
});

function removeIsInvalidClass() {
	$('#assuntoInvalid').html('')
	$('#inputAssunto').removeClass('is-invalid')

	$('#emailInvalid').html('')
	$('#inputEmail').removeClass('is-invalid')

	$('#conteudoInvalid').html('')
	$('#inputConteudo').removeClass('is-invalid')
}