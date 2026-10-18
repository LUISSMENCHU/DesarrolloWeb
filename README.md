# TechStore — Tarea 4

Aplicación React conectada a una API REST con Express y MongoDB Atlas. El catálogo de la interfaz se carga desde `GET /api/recursos`; los productos se leen y modifican en MongoDB.

## Inicio local

1. Copia `server/.env.example` a `server/.env` y agrega la URI privada de MongoDB Atlas. Copia `.env.example` a `.env` en la raíz.
2. Instala dependencias en la raíz y en `server` con `npm install`.
3. Ejecuta `npm run dev` en la raíz y `npm run dev` dentro de `server`.
4. Registra usuarios y administra productos desde la aplicación o mediante los ejemplos de `docs/endpoints.json`.

No subas archivos `.env` ni credenciales de Atlas. En Atlas agrega la IP permitida y crea un usuario de base de datos.

## Arquitectura del backend

```text
server/src/
├── config/db.js                     conexión Mongoose
├── models/User.js                   usuarios y credenciales cifradas
├── models/Producto.js               catálogo de productos
├── controllers/authController.js    registro e inicio de sesión
├── controllers/productController.js CRUD y búsqueda
├── routes/authRoutes.js             /api/auth
├── routes/productRoutes.js          /api/recursos
└── server.js                        Express, CORS y arranque
```

Los endpoints de prueba están en [`docs/endpoints.json`](docs/endpoints.json). El frontend toma la base de API de `VITE_API_URL` (por defecto `http://localhost:3000/api`).

## Despliegue

`render.yaml` define el servicio backend para Render. Configura `MONGODB_URI` con la URI privada de Atlas y `CLIENT_ORIGIN` con `https://exquisite-cat-8960da.netlify.app`. Render proporciona `PORT` automáticamente.

En Netlify configura `VITE_API_URL` con la URL de Render terminada en `/api` y vuelve a desplegar el frontend. Sitio publicado: [TechStore en Netlify](https://exquisite-cat-8960da.netlify.app/). Completa la entrega con la URL pública de Render, los nombres, carnés y contribuciones de los integrantes.
