# CertiFind 🎓 - Portal de Certificados Intellecto

Este proyecto está listo para ser desplegado en **https://certifind.intellecto.com.co**.

## 🚀 Guía de Despliegue (Firebase App Hosting)

Para que tu sitio funcione en el dominio oficial, sigue estos pasos:

### 1. Preparar el Repositorio
- Asegúrate de que todos tus cambios estén en la rama `main` de tu repositorio de GitHub.
- Los archivos PDF deben estar en `public/certificates/`.
- Los datos de los alumnos deben estar en `src/lib/registry.json`.

### 2. Configurar Firebase App Hosting
1. Ve a la [Consola de Firebase](https://console.firebase.google.com/).
2. Selecciona **App Hosting** en el menú lateral.
3. Haz clic en "Comenzar" y conecta tu repositorio de GitHub.
4. Selecciona tu repositorio y la rama `main`.
5. Firebase detectará automáticamente que es un proyecto de Next.js y comenzará el despliegue inicial.

### 3. Vincular el Dominio Personalizado
1. Una vez finalizado el despliegue, ve a la pestaña **Custom Domains** dentro de App Hosting.
2. Introduce `certifind.intellecto.com.co`.
3. Firebase te proporcionará registros **CNAME** o **A**. 
4. Accede al panel de control de tu dominio (ej. GoDaddy, Namecheap o tu servidor de DNS de Intellecto).
5. Añade los registros proporcionados.
6. Espera la propagación de DNS (puede tardar de 1 a 24 horas) y la generación del certificado SSL automático.

## 📁 Estructura del Proyecto
- `/public/certificates/`: Carpeta física para los PDFs.
- `/src/lib/registry.json`: "Base de datos" de certificados.
- `/src/app/`: Rutas y lógica de la aplicación Next.js 15.

---
*CertiFind es una marca de Intellecto para la validación académica segura.* 🚀
