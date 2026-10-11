En esta práctica se modificó la aplicación TechStore para sustituir la autenticación simulada y la gestión local de productos por una arquitectura cliente-servidor con persistencia real en MongoDB Atlas.

Se desarrolló un backend modular con Node.js y Express, separando rutas, controladores, modelos y configuración de la base de datos mediante Mongoose. Se implementaron los endpoints de registro e inicio de sesión, con validación de credenciales y cifrado hash de contraseñas mediante bcrypt.

En el frontend se integraron peticiones asíncronas a la API para registrar usuarios, iniciar y cerrar sesión, consultar el perfil y administrar productos mediante operaciones CRUD. El estado global de autenticación se mantiene con useContext y useReducer, y se incorporaron formularios, mensajes de error y estados de carga.

También se configuraron variables de entorno para proteger las credenciales y separar la configuración del frontend y el backend. Se verificó el funcionamiento de las operaciones de productos y el registro de usuarios en MongoDB Atlas.

Documentación técnica: docs/endpoints.json contiene ejemplos de solicitudes de la API y el backend está organizado en módulos de configuración, modelos, controladores y rutas.

Netlify: 
https://exquisite-cat-8960da.netlify.app/
