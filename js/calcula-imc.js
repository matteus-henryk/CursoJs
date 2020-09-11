var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente');

for (let i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector('.info-peso');
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector('.info-altura');
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector('.info-imc');

  var pesoEhValido = validaPeso(peso);
  var alturaEhValido = validaAltura(altura);

  if (!pesoEhValido) {
    console.log('Peso invalido');
    pesoEhValido = false;
    tdImc.textContent = 'Peso invalido!';
    paciente.classList.add('paciente-invalido');
  }

  if (!alturaEhValido) {
    console.log('Altura invalido');
    alturaEhValido = false;
    tdImc.textContent = 'Altura invalida!';
    paciente.classList.add('paciente-invalido');
  }


  if(alturaEhValido && pesoEhValido){
    var imc = calculaImc(peso, altura);// 100 / 2.00 * 2.00
    tdImc.textContent = imc;
  }

}

function validaPeso(peso) {
  if(peso >= 0 && peso < 300) {
    return true;
  }else {
    return false
  }
}

function validaAltura(altura) {
  if(altura >= 0 && altura <= 3.00) {
    return true;
  }else {
    return false
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}