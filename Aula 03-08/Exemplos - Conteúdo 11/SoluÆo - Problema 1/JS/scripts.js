window.onload = associarFuncoes;

/*
function associarFuncoes() {
  document.getElementById("f1").onsubmit = function() {
	return validarDados(this);  
  }
}*/

//Forma alternativa
function associarFuncoes() {
  document.getElementById("f1").addEventListener("submit", function(e) { //este parâmetro é um objeto que representa qualquer evento no DOM
    let submeter = validarDados(this);
	//alert(e.type);
	if(!submeter) {
		e.preventDefault();
	}
  });
}

function validarDados(formu) {
  let nome, sobrenome;
  
  nome = formu.elements["nome"].value;
  sobrenome = formu.elements["sobrenome"].value;
  
  if(nome.length < 3) {
	alert("Nome com menos de 3 caracteres");  
    return false;	
  }
  if(sobrenome.length < 3) {
	alert("Sobrenome com menos de 3 caracteres");  
    return false;	
  }
  if(nome == sobrenome) {
	alert("Nomes e sobrenomes iguais");
    return false;	
  }
  return true; //instrução default
}

/*
1ª alternativa: Obter a referência para o formulário por meio de seu id e obter os elementos por meio da propriedade elements (índice)
let formu, nome, sobrenome;
formu = document.getElementById("f1");
nome = formu.elements[0].value;
sobrenome = formu.elements[1].value;
*/

/*
2ª alternativa: Obter a referência para o formulário por meio de seu id e obter os elementos por meio da propriedade elements (método item)
let formu, nome, sobrenome;
formu = document.getElementById("f1");
nome = formu.elements.item(0).value;
sobrenome = formu.elements.item(1).value;
*/

/*
3ª alternativa: Obter a referência para o formulário por meio de seu id e obter os elementos por meio da propriedade elements (id ou name)
let formu, nome, sobrenome;
formu = document.getElementById("f1");
nome = formu.elements["nome"].value;
sobrenome = formu.elements["sobrenome"].value;
*/

/*
4ª alternativa: Obter a referência para o formulário por meio de seu id e obter os elementos por meio da propriedade elements (namedItem)
let formu, nome, sobrenome;
formu = document.getElementById("f1");
nome = formu.elements.namedItem("nome").value;
sobrenome = formu.elements.namedItem("sobrenome").value;
*/

/*
5ª alternativa: Utilizar a propriedade forms do objeto document
*/