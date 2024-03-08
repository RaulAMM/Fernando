window.onload = iniciarPagina;

function iniciarPagina() {
  document.getElementById("f1").onsubmit = function () {
    return validarDados(this);
  }
  document.getElementById("f1").noValidate = true;
}

/*
function validarIdade() {
  let campoIdade;
  
  campoIdade = document.getElementById("idade");

  if(!campoIdade.validity.valid) {
  alert("Idade inválida");
    return false;
  }
  return true;   
}

function validarEmail() {
  let campoEmail;
  
  campoEmail = document.getElementById("email");
  
  if(!campoEmail.validity.valid) {
  alert("E-mail inválido");
    return false;
  }
  return true;
}

function validarCamposComuns() {
  let campoNome, campoSobrenome;
  
  campoNome = document.getElementById("nome");
  campoSobrenome = document.getElementById("sobrenome");
  
  if(campoNome.value.length < 3) {
  alert("Nome com menos de 3 caracteres");  
    return false;	
  }
  if(campoSobrenome.value.length < 3) {
  alert("Sobrenome com menos de 3 caracteres");  
    return false;	
  }
  if(nome == sobrenome) {
  alert("Nomes e sobrenomes iguais");
    return false;	
  }
  return true;  
}

function validarDados() {
  return validarCamposComuns() && validarIdade() && validarEmail();
}
*/

function validarCamposComuns() {
  let campoNome = document.getElementById("nome");
  let campoSobrenome = document.getElementById("sobrenome");

  if (campoNome.value.length < 3) {
    campoNome.setCustomValidity("Nome com menos de 3 caracteres");
  }
  if (campoSobrenome.value.length < 3) {
    campoSobrenome.setCustomValidity("Sobrenome com menos de 3 caracteres");
  }
  if (campoNome.value == campoSobrenome.value) {
    let erro = campoSobrenome.validationMessage;
    let novoErro = "Nome e sobrenome iguais";
    campoSobrenome.setCustomValidity(erro.length > 0 ? erro + "\n" + novoErro : novoErro);
  }
}

function validarDados(f) {
  let elementos = f.elements;
  let erros = "";
  let cont = 0;

  for (let i = 0; i < elementos.length; i++) {
    elementos[i].setCustomValidity("");
  }

  validarCamposComuns(); //poderia passar o f aqui também

  for (let i = 0; i < elementos.length; i++) {
    if (!elementos[i].validity.valid) {
      erros += "Campo " + elementos[i].name + ": " + elementos[i].validationMessage + "\n";
      cont++;
    }
  }
  if (cont > 0) {
    alert(erros);
    return false;
  }
}