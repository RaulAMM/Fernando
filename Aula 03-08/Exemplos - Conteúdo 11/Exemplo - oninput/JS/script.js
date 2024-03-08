window.onload = function() {
	let formu = document.getElementById("f1");
	
	formu.noValidate = true;
	
	let nome = formu.elements["nome"];
	
	let span = document.getElementById("erro");
	
	formu.onsubmit = function(e) {
		if(!nome.validity.valid) {
			e.preventDefault();
		}
	};
	
	nome.oninput = function() {
		this.setCustomValidity("");
		validarNome(this);
		span.innerHTML = this.validationMessage;
	};
	
	function validarNome(nome) {
		if(!nome.validity.valid) {
			nome.setCustomValidity("Nome com menos de 3 caracteres");
		}
	}
}
