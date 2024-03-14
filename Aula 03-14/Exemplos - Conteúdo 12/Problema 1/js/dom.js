function percorrerArvore() {
	let raiz;
	raiz = document.documentElement;
	alert(raiz.nodeName);
	if(raiz.hasAttributes()) {
		percorrerAtributos(raiz.attributes);
	}
	if(raiz.hasChildNodes()) {
		percorrerElementos(raiz.childNodes);
	}
}

function percorrerElementos(elementos) {
	for(let i = 0; i < elementos.length; i++) {
		let elemento = elementos[i];
		if(elemento.nodeType == Node.ELEMENT_NODE) {
			alert(elemento.nodeName);
			if(elemento.hasAttributes()) {
				percorrerAtributos(elemento.attributes);
			}
			if(elemento.hasChildNodes()) {
				percorrerElementos(elemento.childNodes);
			}
		}
	}
}

function percorrerAtributos(atributos) {
	for(let j = 0; j < atributos.length; j++) {
		let atributo = atributos[j];
		let texto = "Atributo = " + atributo.nodeName + " Valor: " + atributo.nodeValue;
		alert(texto);
	}
}