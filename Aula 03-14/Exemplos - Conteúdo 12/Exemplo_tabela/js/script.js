window.onload = iniciarPagina;

function iniciarPagina() {
	let botao = document.getElementById('botao');
  botao.addEventListener('click', function(){
    secao = document.getElementById('s1');
    gerarTabela(secao);
  });
}

//função que deve ser invocada quando o usuário clicar no botão
function gerarTabela(secao) {
	let tabela = document.getElementById("tabela");
	if(tabela != null) {
		removerTabela(tabela);
	}
  let linhas = document.getElementById('linhas').value;
  let colunas = document.getElementById('colunas').value;

  // criar o elemento table
  tabela = criarNoElemento(secao, 'table');
  criarNoAtributo(tabela, 'id', 'tabela');

  // criar as linhas e colunas da tabela
  for(i = 0; i < linhas; i++){
    let linha = criarNoElemento(tabela, 'tr');
    for(j = 0; j < colunas; j++){
      criarNoElemento(linha, 'td');
    }
  }
	secao.appendChild(tabela);
}

//função responsável pela criação de um nó elemento (adicionado a um elemento pai)
function criarNoElemento(pai, nomeElemento) {
	elemento = document.createElement(nomeElemento);
  pai.appendChild(elemento);
  return elemento;
}

//função responsável pela criação de um nó atributo (associado a um elemento)
function criarNoAtributo(elemento, nomeAtributo, valorAtributo) {
	let atributo = document.createAttribute(nomeAtributo);
	atributo.nodeValue = valorAtributo;
	elemento.setAttributeNode(atributo);
}

// função responsável pela remoção da tabela
function removerTabela(elemento) {
	elemento.parentNode.removeChild(elemento);
}