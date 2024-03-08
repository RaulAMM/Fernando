window.onload = registrarFuncoes;

function registrarFuncoes(){
    let botao = document.getElementById('botao');
    botao.addEventListener('click', definirParagrafo);
    botao.addEventListener('click', exibirAlert);
}

function definirParagrafo(){
    let areaTexto, paragrafo, texto;

    areaTexto = document.getElementById('texto');
    paragrafo = document.getElementById('paragrafo');

    texto = areaTexto.value;

    paragrafo.innerHTML = texto;
}

function exibirAlert(){
    alert("Testando o evento de click");
}