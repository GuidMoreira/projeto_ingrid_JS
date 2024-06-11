var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  //Chama a função somar
  multiplo();

});


//Função somar
function multiplo() {

  let numero = Number(document.getElementById("numero").value);

  let resultado_multiplo;

  if (numero % 5 == 0) {
    resultado_multiplo = `${numero} é múltiplo de 5`;
  } else {
    resultado_multiplo = `${numero} não é múltiplo de 5`;
  }

  document.getElementById("resultado_multiplo").value = resultado_multiplo;
}
