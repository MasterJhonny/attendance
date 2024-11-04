// code att
import { fetchData } from "./functions.js";
const $btnAttendance = document.getElementById("btn-reg-att");

// event to button register att
$btnAttendance.addEventListener("click", async () => {
  console.log("Registrar asistencia!!!!");
  const url = "/attendance/register";
  const data = await fetchData(url);
  console.log("🚀 ~ $btnRegisterAttendance.addEventListener ~ data:", data);
});
