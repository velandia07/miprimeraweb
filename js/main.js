//Esto hará que mi script no se ejecute antes del DOM
document.addEventListener("DOMContentLoaded", function() {
// Obtenemos los elementos del formulario HTML
const formCalculo = document.getElementById('form-calculo'); // Formulario principal
const saborInput = document.getElementById('sabor');          // Selector de sabor de torta
const porcionesInput = document.getElementById('porciones');  // Campo de número de porciones
const resultadoDiv = document.getElementById('resultado');    // Div donde se muestra el resultado final
const opcionesPedidoDiv = document.getElementById('opcionesPedido'); // Div con los botones ocultos

// Definimos la tabla de precios escalonados por tipo de torta y rango de porciones
//Uso un object con 3 propiedades, con objects por dentro
const preciosEscalonados = {
    tres_leches: [
        { min: 1, max: 9, precio: 11000 },    // Precio por porción si lleva entre 1 y 9
        { min: 10, max: 19, precio: 10000 },  // Precio por porción si lleva entre 10 y 19
        { min: 20, max: 29, precio: 9500 },
        { min: 30, max: 39, precio: 9000 },
        { min: 40, max: 49, precio: 8500 },
        { min: 50, max: Infinity, precio: 8000 } // Desde 50 porciones en adelante
    ],
    chocolate: [
        { min: 1, max: 9, precio: 14850 },
        { min: 10, max: 19, precio: 13500 },
        { min: 20, max: 29, precio: 12825 },
        { min: 30, max: 39, precio: 12150 },
        { min: 40, max: 49, precio: 11475 },
        { min: 50, max: Infinity, precio: 10800 }
    ],
    gelatina: [
        { min: 1, max: 9, precio: 15950 },
        { min: 10, max: 19, precio: 14500 },
        { min: 20, max: 29, precio: 13775 },
        { min: 30, max: 39, precio: 13050 },
        { min: 40, max: 49, precio: 12325 },
        { min: 50, max: Infinity, precio: 11600 }
    ]
};

// Evento que se ejecuta cuando el usuario hace clic en "Calcular Precio"
formCalculo.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitamos que el formulario recargue la página

    // Obtenemos los valores del formulario
    const sabor = saborInput.value;                  // Valor del sabor seleccionado
    const porciones = parseInt(porcionesInput.value); // Convertimos las porciones a número entero

    // Validación: asegurarnos de que el número ingresado sea válido
    if (isNaN(porciones) || porciones <= 0) {
        resultadoDiv.innerHTML = '<p class="text-danger">Por favor ingresa un número válido de porciones.</p>';
        return;
    }

    // Buscamos el precio por porción dependiendo del rango al que pertenece la cantidad ingresada
    let precioUnitario = 0;
    for (const rango of preciosEscalonados[sabor]) {
        if (porciones >= rango.min && porciones <= rango.max) {
            precioUnitario = rango.precio;
            break; // Detenemos el ciclo al encontrar el rango correspondiente
        }
    }

    // Calculamos el total a pagar: precio por porción * número de porciones
    const total = precioUnitario * porciones;

    // Mostramos los resultados al usuario en el div resultado
    resultadoDiv.innerHTML = `
        <p><strong>Sabor:</strong> ${sabor.replace('_', ' ')}</p> <!-- Mostramos el sabor con espacios -->
        <p><strong>Porciones:</strong> ${porciones}</p>            <!-- Número de porciones -->
        <p><strong>Precio por porción:</strong> $${precioUnitario.toLocaleString('es-CO')}</p> <!-- Precio unitario con formato -->
        <p><strong>Total a pagar:</strong> $${total.toLocaleString('es-CO')}</p> <!-- Precio final formateado -->
    `;
        // Mostrar los botones de opciones (pedido por WhatsApp o atención personalizada)
        opcionesPedidoDiv.style.display = 'block';
});

// Redirige a WhatsApp con un mensaje predeterminado
function redirigirWhatsapp() {
    const sabor = saborInput.value.replace('_', ' ');
    const porciones = parseInt(porcionesInput.value);
    const precioUnitario = resultadoDiv.querySelectorAll("p")[2].innerText.split(":")[1].trim();
    const total = resultadoDiv.querySelectorAll("p")[3].innerText.split(":")[1].trim();

    const mensaje = `Hola, deseo hacer un pedido de torta:\n- Sabor: ${sabor}\n- Porciones: ${porciones}\n- Precio por porción: ${precioUnitario}\n- Total: ${total}`;
    const url = `https://wa.me/573016830322?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}

// Redirige a la página de atención personalizada
function redirigirPersonalizada() {
    window.location.href = "sobre-nosotros.html";
}

// Validación del formulario en sobre-nosotros.html
function validarFormulario() {
    const form = document.getElementById('formAtencion');
    if (!form) return false;
  
    if (!form.checkValidity()) {
      alert('Por favor, completa todos los campos correctamente.');
      return false;
    }
  
    return true;
  }
  
  // Imprimir el pedido personalizado
  function imprimirPedido() {
    if (validarFormulario()) {
      window.print(); // imprime la página con el formulario lleno
    }
  }
  
  // Enviar la solicitud vía WhatsApp
  function enviarPorWhatsapp() {
    if (validarFormulario()) {
      const nombre = document.getElementById('nombre').value.trim();
      const telefono = document.getElementById('telefono').value.trim();
      const direccion = document.getElementById('direccion').value.trim();
      const descripcion = document.getElementById('descripcion').value.trim();
  
      const mensaje = `Hola, me gustaría hacer un pedido personalizado:\nNombre: ${nombre}\nTeléfono: ${telefono}\nDirección: ${direccion}\nDescripción: ${descripcion}`;
  
      // Cambia el número por el tuyo real con código de país, ejemplo Colombia +57 3201234567
      const url = `https://wa.me/573016830322?text=${encodeURIComponent(mensaje)}`;
      window.open(url, '_blank');
    }
  }
});