# PROYECTO API Backend Reservas

## Descripción del proyecto

El proyecto consiste en crear una aplicación con la que se podra realizar reservas segun un calendario disponible y el control de usuarios a traves de un CRUD con roles. Además se debe utilizar un usuario con el que poder realizar esas funciones, ya que al hacer login con un usuario correcto este tendra un tiempo de 1h para utilizar las funciones.

## Pasos de instalación

1. Clona el repositorio: TODO/Incluir bien el desarrollo para el despliegue de la aplicación

```bash
git clone https://github.com/FernandoTiradosG/DAWES/tree/main/ProyectoNotas
```

2. Navega al directorio del proyecto:

```bash
cd tu-proyecto
```

3. Instala las dependencias:

```bash
npm install
```

4. Configuración del entorno:

Crea un archivo .env o modifica el que ya esta en el directorio raíz del proyecto y define las variables de entorno necesarias:

```env
PORT=3000
S_WORD='secret'
```

Adaptalo como mejor te venga.

## Ejecución:

Para iniciar la aplicación:

```bash
npm start
```

## Estructura del proyecto:

```text
proyecto/
│
├── src/
│ ├── config/
│ │   ├── morgan.js
│ │   └── ...
│ │
│ ├── controllers/
│ │   ├── login-controller.js
│ │   ├── month-controller.js
│ │   ├── user-controller.js
│ │   └── ...
│ │
│ ├── loaders/
│ │   ├── cron-loader.js
│ │   ├── express-loader.js
│ │   ├── mongo-loader.js
│ │   └── index.js
│ │
│ ├── middlewares/
│ │   ├── error-middleware.js
│ │   ├── auth-middleware.js
│ │   ├── query-middleware.js
│ │   ├── rol-middleware.js
│ │   └── ...
│ │
│ ├── routes/
│ │   ├── index.js
│ │   ├── month-route.js
│ │   ├── user-route.js
│ │   └── ...
│ │
│ ├── models/
│ │   ├── Confi.js
│ │   ├── Date.js
│ │   ├── User.js
│ │   ├── index.js
│ │   └── ...
| |
│ ├── utils/
│ │   └── mongo
│ │       ├── user-db-services.js
│ │       └── days-db-services.js
│ │
│ ├── utils/
│ │   ├── Calendar.js
│ │   ├── logger.js
│ │   ├── pagination.js
│ │   ├── index.js
│ │   └── ...
│ │
│ ├── app.js
│ ├── config.js
│ └── index.js
│
├── .env.template
├── .gitignore
├── .dockerignore
├── .eslintrc.js
├── docker-compose.yml
├── Dockerfile
├── swagger.yml
├── package-lock.json
├── package.json
├── swaggerConfig.js
└── README.md
```

+ src/: Contiene los archivos necesarios para el funcionamiento de la aplicación.
  + config/: Contiene archivos de configuración como configuraciones de logging, base de datos, etc.
  + controllers/: Controladores que manejan la lógica de las rutas y manipulan los datos.
  + loaders/: Configuraciones y carga de middleware para Express u otras herramientas.
  + middlewares/: Middlewares personalizados para realizar tareas comunes como autenticación, manejo de errores, etc.
  + routes/: Define las rutas de la aplicación y las asocia a los controladores correspondientes.
  + utils/: Utilidades o funciones de ayuda utilizadas en el proyecto.
  + app.js: Punto de entrada principal de la aplicación.
  + config.js: Archivo para definir configuraciones globales del proyecto.
  + app.js: Punto de inicio de la aplicación y escucha del servidor.
+ .gitignore: Especifica qué archivos y directorios ignorar en Git.
+ .eslintrc.js: Configuración de reglas y estilo para ESLint.
+ package.json: Archivo de configuración de npm que contiene metadatos del proyecto y dependencias.
+ package-lock.json: Bloquea versiones exactas de las dependencias de npm.
+ swaggerConfig.js: Posible archivo de configuración para integración de Swagger.
+ .env: Archivo para definir variables de entorno sensibles o configuraciones específicas del entorno.
+ TODO/Incluir los elementos que falta consu descripcion

## Uso de las funciones principales

https://documenter.getpostman.com/view/31589908/2sA2xiVrFP

TODO/Incluir las imagenes del proceso de la api

+ Login:
  
  ![alt text](Recursos/Login.png "login")

  Esto generara un token que se tendra que usar para el manejo de las notas, copiandolo en la parte de autorización

+ Usuarios:
  + Crear:
  
  ![alt text](Recursos/CrearUsuario.png "Crear")

  + Editar:

  ![alt text](Recursos/EditarUsuario.png "Editar")

  + Borrar:

  ![alt text](Recursos/BorrarUsuario.png "Borrar")

  + Listar:

  ![alt text](Recursos/ListarUsuarios.png "Listar")

  + Unico Usuario

  ![alt text](Recursos/Usuario.png "Unico")

+ Reservas:
Para poder utilizar estas funciones sera necesario incluir en la parte de "AUTHORIZATION" el token que se genero anteriormente en el login, teniendo en cuenta que el token tiene un tiempo de uso de 1 hora

  + Crear:
  
  ![alt text](Recursos/CrearNota.png "Crear")

  + Editar:

  ![alt text](Recursos/EditarNota.png "Editar")

  + Borrar:

  ![alt text](Recursos/BorrarNota.png "Borrar")

  + Listar:

  ![alt text](Recursos/ListarNotas.png "Listar")

## Observaciones

La aplicación no estaría completa ya que faltaría incluir unas cuantas cosas más como son los test y la cobertura con SonarQube o la descarga y subida de archivos con multer. Además, la parte de control de usuarios necesitaría también un control de uso por rol en el que el administrador fuera el único que puede manejar todas las funciones, al crearse nuevos usuarios tuvieran solo el rol de usuario y este le diera permiso solo editar contraseña o borrar el usuario.

El proyecto queda abierto para la inclusión de base de datos y otras posibles funciones que se vean en el futuro.
