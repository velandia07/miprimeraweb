// js/post.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formTorta");
    const mensaje = document.getElementById("mensaje");
  
    form.addEventListener("submit", async (event) => {
      event.preventDefault(); // Evita que se recargue la página
  
      // Capturamos los valores del formulario
      const nuevaTorta = {
        nombre: document.getElementById("nombre").value,
        descripcion: document.getElementById("descripcion").value,
        precio: parseFloat(document.getElementById("precio").value),
        imagen: document.getElementById("imagen").value,
      };
  
      try {
        const respuesta = await fetch("http://localhost:3000/api/tortas", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevaTorta),
        });
  
        if (respuesta.ok) {
          mensaje.innerHTML = `<div class="alert alert-success">🎉 ¡Torta guardada exitosamente!</div>`;
          form.reset(); // Limpiar el formulario
        } else {
          mensaje.innerHTML = `<div class="alert alert-danger">⚠️ Ocurrió un error al guardar.</div>`;
        }
      } catch (error) {
        console.error("❌ Error al enviar la torta:", error);
        mensaje.innerHTML = `<div class="alert alert-danger">❌ Error de conexión con el servidor.</div>`;
      }
    });
  });