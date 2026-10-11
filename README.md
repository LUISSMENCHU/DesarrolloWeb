# TechStore — Tarea 4

Aplicación React conectada a una API REST con Express y MongoDB Atlas.

## Inicio local

1. Copia `server/.env.example` a `server/.env` y agrega tu URI privada de MongoDB Atlas. Copia `.env.example` a `.env` en la raíz.
2. Instala dependencias desde la raíz con `npm install` y dentro de `server` con `npm install`.
3. En una terminal ejecuta `npm run dev` desde la raíz. En otra, desde `server`, ejecuta `npm run dev`.
4. Registra usuarios mediante la API (ver `docs/endpoints.json`). El frontend permite iniciar sesión y administrar productos.

No subas `server/.env` ni credenciales de Atlas. En Atlas agrega tu IP a Network Access y crea un usuario de base de datos.

## Arquitectura del backend

```text
server/src/
├── config/db.js                 conexión Mongoose
├── models/User.js               usuarios y credenciales cifradas
├── models/Producto.js           catálogo de TechStore
├── controllers/authController.js registro y login
├── controllers/productController.js CRUD y búsqueda
├── routes/authRoutes.js         /api/auth
├── routes/productRoutes.js      /api/recursos
└── server.js                    Express, CORS, errores y arranque
```

El endpoint de recursos trabaja con productos de TechStore. Las contraseñas se guardan con bcrypt y nunca se devuelven en respuestas.

## Endpoints

Las solicitudes de ejemplo están en [`docs/endpoints.json`](docs/endpoints.json). El frontend usa `VITE_API_URL` y por defecto apunta a `http://localhost:3000/api`.

## Despliegue y entrega

Configura `MONGODB_URI`, `PORT` y `CLIENT_ORIGIN` en el servicio backend y `VITE_API_URL` en el frontend. Los enlaces públicos dependen de las cuentas de despliegue del equipo. Agrega al entregar nombre completo, carné, contribuciones y URL desplegadas de cada integrante.
