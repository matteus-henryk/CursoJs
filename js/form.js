var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', (event) => {
  event.preventDefault();
  
  var form = document.querySelector('#form-adciona');

  var paciente = obtemPacienteDoFormulario(form);


  var erros = validaPaciente(paciente);
  console.log(erros);

  if(erros.length > 0) {
    exibeMensagemDeErro(erros);
    return;
  }

  // adicionando um paciente na tabela

  adcionaPacienteNaTabela(paciente);

  form.reset();
  var ul = document.querySelector('#mensagens-erro');
  ul.innerHTML = '';
});

function adcionaPacienteNaTabela(paciente) {
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector('#tabela-pacientes');
  tabela.appendChild(pacienteTr);
}

function exibeMensagemDeErro(erros) {
  var ul = document.querySelector('#mensagens-erro');

  ul.innerHTML = '';

  erros.forEach(function(erro){
    var li = document.createElement('li');
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente
}

function montaTr(paciente) {
  var pacienteTr = document.createElement('tr');
  pacienteTr.classList.add('paciente');

  pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
  pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
  pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
  pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
  pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement('td');
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente) {

  var erros = [];

  if(paciente.nome.length == 0) {
    erros.push('Nome não pode ser em branco');
  }
  
  if(paciente.peso.length == 0) {
    erros.push('Peso não de ser em branco');
  }

  if(paciente.altura.length == 0) {
    erros.push('Altura não de ser em branco');
  }

  if(paciente.gordura.length == 0) {
    erros.push('Gordura não pode ser em branco');
  }

  if(!validaPeso(paciente.peso)) {
    erros.push('Peso é invalido!');
  }

  if(!validaAltura(paciente.altura)) {
    erros.push('Altura é invalida!');
  }



  return erros
}