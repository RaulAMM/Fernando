window.onload = iniciarPagina;

function iniciarPagina() {
	//let btn = document.getElementById("btn");
	let formu = document.forms[0];
	let btn = formu.elements[formu.length-1];
	btn.addEventListener("click", gerenciarParagrafo);
}

function gerenciarParagrafo() {
	let par = document.getElementById("p1");
	if(par != null) {
		removerParagrafo(par);
	}
	criarParagrafo();
}

function criarParagrafo() {
	let par, conteudo, noTexto, noId;
	let div;
	let elem;
	
	conteudo = document.getElementById("par").value;
	div = document.getElementById("div1");
	elem = document.getElementById("final");
	
	par = document.createElement("p");
	noTexto = document.createTextNode(conteudo);
	par.appendChild(noTexto);

	noId = document.createAttribute("id");
	noId.nodeValue = "p1";
	par.setAttributeNode(noId);

	//div.appendChild(par);
	div.insertBefore(par, elem);
}

function removerParagrafo(elemento) {
	elemento.parentNode.removeChild(elemento);
}