// code users
import { fetchData } from "./functions.js";

const $modal = document.getElementById("modal");
const $btnOpenModal = document.getElementById("btn-open-modal");
const $btnClosedModal = document.getElementById("btn-closed-modal");
const $form = document.getElementById("userForm");
const $btnSubmit = document.getElementById("btn-submit");
const $elements = [...document.getElementsByClassName("btn-icon")];

// event opem modal resgiter users
$btnOpenModal.addEventListener("click", () => {
  $modal.classList.add("is-active");
  console.log("Abrir, Formulario!!!");
});

// cloced moadal register users
$btnClosedModal.addEventListener("click", () => {
  $modal.classList.remove("is-active");
});

// reset form rejister users
$btnSubmit.addEventListener("submit", () => {
  $form.reset();
});

// event to click register fingerprint digital users
$elements.forEach((el) => {
  el.addEventListener("click", async () => {
    console.log("🚀 ~ el:", el.id);
    const url = `/register/fingerprint/${el.id}`;
    console.log("Registrar Huella!!!!");
    alert("Acerca la Huella al dispositivo de captura!");
    const data = await fetchData(url);
    if (data.fingerprint) {
      location.reload();
    }
  });
});
