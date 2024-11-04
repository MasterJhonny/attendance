//functions exports
export const fun = () => {
  console.log("aqui la funcion !!!!");
};

// Definir una función flecha asíncrona
export const fetchData = async (url) => {
  try {
    // Realizar la solicitud fetch al endpoint
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Parsear la respuesta como JSON
    const data = await response.json();
    console.log("data:", data);
    return data;
  } catch (error) {
    // Manejar cualquier error que ocurra durante la solicitud
    console.error("Error fetching data:", error);
  }
};
