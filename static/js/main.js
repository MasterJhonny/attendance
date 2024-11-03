// code js
const $navBarBurger = document.querySelector(".navbar-menu");
const $btnBarBurger = document.getElementById("btnBurger");
const $modal = document.getElementById("modal");

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

// button open and cloced menu
const toggleMenu = () => {
  console.log("open!!!");
  $btnBarBurger.classList.toggle("is-active");
  $navBarBurger.classList.toggle("is-active");
};

// opem modal resgiter users
const openModal = () => {
  $modal.classList.add("is-active");
  console.log("Abrir, Formulario!!!");
};
// cloced moadal register users
const closeModal = () => {
  $modal.classList.remove("is-active");
};
// reset form rejister users
const clearForm = () => {
  document.getElementById("userForm").reset();
};

const registerFingerprint = (id) => {
  console.log("id:", id);

  const url = `http://127.0.0.1:5000/register/fingerprint/${id}`;
  console.log("Registrar Huella!!!!");
  alert("Acerca la Huella al dispositivo de captura!");
  // Definir una función flecha asíncrona
  const fetchData = async () => {
    try {
      // Realizar la solicitud fetch al endpoint
      const response = await fetch(url);
      console.log("🚀 ~ fetchData ~ response:", response);

      // Verificar si la respuesta es exitosa
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Parsear la respuesta como JSON
      const data = await response.json();

      // Hacer algo con los datos obtenidos
      console.log("data", data);
      if (data.fingerprint == true) {
        location.reload();
      }
    } catch (error) {
      // Manejar cualquier error que ocurra durante la solicitud
      console.error("Error fetching data:", error);
    }
  };

  // Llamar a la función
  fetchData();
};

const registerAttendance = () => {
  console.log("Registrar asistencia!!!!");
};
