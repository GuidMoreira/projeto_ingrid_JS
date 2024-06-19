var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  adivinhacao();

});


function adivinhacao() {
  let numero_secreto = 3;
  let palpite = Number(document.getElementById("palpite").value);

  do {
    if (palpite != numero_secreto) {
      numero_secreto="Tente novamente.";
    }
  } while


  numero_secreto="Parabéns< você conseguiu!!!";


  document.getElementById("resultado_multiplo").value = resultado_multiplo;
}
