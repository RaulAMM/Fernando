window.onload = iniciarPagina;

function iniciarPagina() {
	//let btn = document.getElementById("btn");
	let formu = document.forms[0];
	let btn = formu.elements[formu.length-1];
	btn.addEventListener("click", criarParagrafo);
}

function criarParagrafo() {
	let par, conteudo, noTexto, noId;
	let div;
	let elemFinal;
	
	conteudo = document.getElementById("par").value;
	div = document.getElementById("div1");
	par = document.getElementById("p1");
	elemFinal = document.getElementById("final");
	
	if(par == null) {
		par = document.createElement("p");
		criarNoTexto(par, conteudo);
		noId = document.createAttribute("id");
		noId.nodeValue = "p1";
		par.setAttributeNode(noId);
		div.insertBefore(par, elemFinal);
	}
	else {
		atualizarNoTexto(par, conteudo, par.lastChild);
	}
}

function criarNoTexto(pai, conteudo) {
	let noTexto = document.createTextNode(conteudo);
	pai.appendChild(noTexto);
}

function atualizarNoTexto(pai, novoConteudo, noTexto) {
	let novoNoTexto = document.createTextNode(novoConteudo);
	pai.replaceChild(novoNoTexto, noTexto);
}