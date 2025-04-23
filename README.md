# 🧁 Proyecto Web: Loca Idea Pastelería

Este proyecto consiste en una página web de una pastelería, con un **frontend** visual hecho en HTML/CSS/JS y un **backend** en Node.js con Express conectado a **MongoDB**.

Incluye:
- Visualización dinámica de tortas desde una base de datos.
- Formulario para registrar nuevas tortas.
- API REST con operaciones GET y POST.

---

## 🚀 ¿Cómo ejecutar el proyecto en local?

### 1️⃣ Clona el repositorio

```bash
git clone https://github.com/velandia07/miprimeraweb.git
cd miprimeraweb
```

### 2️⃣ Instala las dependencias del backend

```bash
cd backend
npm install
```

### 3️⃣ Configura la conexión a MongoDB

Dentro de la carpeta `backend/`, crea un archivo llamado `.env` y añade:

```env
MONGO_URI=mongodb://127.0.0.1:27017/pasteleríaDB
```

Asegúrate de tener MongoDB instalado y en ejecución localmente.

### 4️⃣ Levanta el servidor backend

Desde la carpeta `backend/`:

```bash
node app.js
```

Verás este mensaje en consola si todo está bien:

```
✅ Conexión exitosa a MongoDB
🚀 Servidor corriendo en el puerto 3000
```

### 5️⃣ Abre el frontend en el navegador

Desde tu editor o directamente desde el explorador de archivos, abre:

```bash
frontend/galeria.html
```

O bien haz clic derecho y selecciona "Abrir con Live Server" si usas VS Code.

---

## 💾 ¿Cómo funciona la conexión entre el backend y el frontend?

### 👉 Obtener tortas (GET)

El archivo `frontend/js/get.js` se ejecuta en `galeria.html` y hace una solicitud GET a:

```
http://localhost:3000/api/tortas
```

Esto trae todas las tortas desde MongoDB y las muestra automáticamente en la galería.

### 👉 Agregar tortas (POST)

Desde `crear-torta.html`, el archivo `post.js` recoge los datos del formulario y hace una solicitud POST a:

```
http://localhost:3000/api/tortas
```

Esto crea una nueva torta y la guarda en la base de datos MongoDB.

### 📦 Esquema de una torta

```js
{
  nombre: "Torta de Chocolate",
  descripcion: "Bizcocho húmedo con relleno cremoso",
  precio: 15000,
  imagen: "https://ejemplo.com/imagen.jpg"
}
```

---

## 🧪 ¿Cómo verificar que funciona?

1. Inicia MongoDB localmente (`mongod`).
2. Corre el backend (`node app.js`).
3. Abre `crear-torta.html` y registra una torta.
4. Abre `galeria.html` para ver la torta que ingresaste.

También puedes verificar en la base de datos con Mongo Shell:

```bash
mongo
use pasteleríaDB
db.tortas.find().pretty()
```
