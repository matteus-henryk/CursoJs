var titulo = document.querySelector('h1');
var nome = titulo.textContent;
var campo = document.querySelector('input');

campo.addEventListener('input', () => {
  var comparar = nome.substr(0, nome.length);
  if(!(this.value == comparar)) {
    titulo.classList.add('invisivel');
  } else {
    titulo.classList.remove('invisivel');
  }
});
