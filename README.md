# Proyecto: support_cases_app

## Requisitos previos

Antes de ejecutar la aplicación, asegúrate de tener lo siguiente:

1. **Node.js**: Versión `v20.17.0` instalada.
2. **npm**: Versión `10.8.2` instalada.

## Pasos para correr la aplicación

### 1. Instalar dependencias

Cuando estés en el directorio raíz del proyecto, abre la consola y ejecuta el siguiente comando para instalar las dependencias necesarias:
```
npm install
```

### 2. Crear archivo .env
1. En el directorio raíz del proyecto, crea un archivo **.env** basado en el archivo **.env.example**.

### 3. Definir variable de entorno
1. En el archivo **.env** recién creado, define la siguiente variable de entorno *(El valor debe ser la url del api, como el siguiente ejemplo)*:
```
VITE_API_URL=http://localhost:3000
```
Asegúrate de reemplazar http://localhost:3000 con la URL y el puerto de tu API local.

### 4. Iniciar la aplicación
Una vez completados los pasos anteriores, abre la consola en el directorio raíz del proyecto y ejecuta el siguiente comando para inicializar la aplicación:
```
npm run dev
```

### 5. Recomendaciones
Para correr el proyecto es recomendado tener corriendo primero el API!