// js/galeria.js

// Espera que el documento HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Hacemos una solicitud al backend para obtener todas las tortas guardadas
    fetch('http://localhost:3000/api/tortas') // Asegúrate que tu backend esté corriendo en este puerto
        .then(response => response.json()) // Convertimos la respuesta a JSON
        .then(tortas => {
            const tortasContainer = document.getElementById('tortasContainer'); // Contenedor donde se mostrarán
            tortasContainer.innerHTML = ''; // Limpiamos contenido previo

            // Recorremos todas las tortas y creamos su HTML
            tortas.forEach(torta => {
                const tortaHTML = `
                    <div class="col-md-4 mb-4">
                        <img src="${torta.imagen}" class="img-fluid rounded shadow" alt="${torta.nombre}">
                        <h5 class="text-center">${torta.nombre}</h5>
                        <p class="text-center">${torta.descripcion}</p>
                        <p class="text-center">Precio: $${torta.precio}</p>
                    </div>
                `;
                // Insertamos el HTML al contenedor
                tortasContainer.innerHTML += tortaHTML;
            });
        })
        .catch(error => {
            console.error('❌ Error al cargar las tortas:', error);
        });
});