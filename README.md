
# 🎂 Proyecto Web: Loca Idea Pastelería

Este proyecto consiste en una página web para una pastelería llamada **Loca Idea**, construida con una arquitectura full stack:

- **Frontend:** Angular CLI (HTML, CSS, TypeScript, Bootstrap)
- **Backend:** Node.js + Express
- **Base de datos:** MongoDB

---

## ✨ Funcionalidades principales

✅ Visualización dinámica de tortas desde MongoDB  
✅ Registro de nuevas tortas desde un formulario  
✅ API RESTful con endpoints GET y POST  
✅ Estilo profesional y diseño responsive con Bootstrap  
✅ Sistema de registro y login de usuarios con Angular  
✅ Autenticación protegida para acceder a la vista `crear-torta`  
✅ Almacenamiento de usuarios registrados en la base de datos  
✅ Visualización de tortas en galería  
✅ Eliminación de tortas desde la interfaz  
✅ Cálculo interactivo de precios por porciones con descuentos

---

## 🔐 Acceso al sistema

Para acceder a la vista protegida donde puedes **crear nuevas tortas**, primero debes registrarte o iniciar sesión:

- 📝 Registro: [http://localhost:4300/register](http://localhost:4300/register)  
- 🔑 Login: [http://localhost:4300/login](http://localhost:4300/login)

---

## 🚀 ¿Cómo ejecutar el proyecto localmente?

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

Crea un archivo `.env` dentro de la carpeta `backend/` con esta línea:

```
MONGO_URI=mongodb://127.0.0.1:27017/pasteleríaDB
```

Asegúrate de tener **MongoDB instalado y corriendo localmente**.

### 4️⃣ Levanta el servidor backend

```bash
node app.js
```

Si todo está correcto, verás:

```
✅ Conexión exitosa a MongoDB
🚀 Servidor corriendo en el puerto 3000
```

---

### 5️⃣ Levanta el servidor Angular (Frontend)

Desde la raíz del proyecto:

```bash
cd frontend
ng serve --port 4300
```

Abre en tu navegador:

- [http://localhost:4300](http://localhost:4300)

---

## 💻 ¿Cómo funciona la conexión entre el backend y el frontend?

### 📥 Obtener tortas (GET)

Desde `galeria.html`, el archivo `get.js` hace una solicitud a:

```
http://localhost:3000/api/tortas
```

Esto carga todas las tortas desde MongoDB.

### 📤 Agregar tortas (POST)

Desde `crear-torta.html`, el archivo `post.js` toma los datos del formulario y los envía a:

```
http://localhost:3000/api/tortas
```

Esto guarda la torta en la base de datos.

---

## 📦 Esquema de una torta

```json
{
  "nombre": "Torta de Chocolate",
  "descripcion": "Bizcocho húmedo con relleno cremoso",
  "precio": 15000,
  "imagen": "https://ejemplo.com/imagen.jpg"
}
```

---

## ✅ ¿Cómo verificar que funciona?

1. Asegúrate de que **MongoDB esté corriendo** (`mongod`)
2. Corre el backend: `node app.js`
3. Inicia el frontend con Angular: `ng serve --port 4300`
4. Abre el navegador y registra una torta
5. Verifica la visualización en la galería
6. También puedes inspeccionar en la base de datos con:

```bash
mongo
use pasteleríaDB
db.tortas.find().pretty()
```

---

📌 *Hecho con 💖 por Loca Idea Pastelería*