// animate texto
document.addEventListener("DOMContentLoaded", function () {
  const texto = document.getElementById("name-college");
  const textoCompleto = texto.textContent;
  texto.textContent = "";

  let i = 0;
  function escribirTexto() {
    if (i < textoCompleto.length) {
      texto.textContent += textoCompleto.charAt(i);
      i++;
      setTimeout(escribirTexto, 100); // Ajusta el tiempo para controlar la velocidad de escritura
    }
  }
  escribirTexto();
});
