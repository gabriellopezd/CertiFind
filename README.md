# CertiFind 🎓 - Portal de Certificados Intellecto

Este proyecto está listo para ser desplegado en **https://certifind.intellecto.com.co** usando Firebase Hosting.

## 🚀 Guía de Despliegue (Firebase App Hosting)

Para que tu sitio funcione en el dominio oficial, sigue estos pasos:

### 1. Preparar el Repositorio
- Asegúrate de que todos tus cambios estén en la rama `main` de tu repositorio de GitHub.
- Los archivos PDF deben estar en `public/certificates/`.
- Los datos de los alumnos deben estar en `src/lib/registry.json`.

### 2. Configurar Firebase App Hosting
1. Ve a la [Consola de Firebase](https://console.firebase.com/).
2. Selecciona **App Hosting** en el menú lateral.
3. Haz clic en "Comenzar" y conecta tu repositorio de GitHub.
4. Selecciona tu repositorio y la rama `main`.
5. Firebase detectará automáticamente que es un proyecto de Next.js y comenzará el despliegue inicial.

### 3. Vincular el Dominio Personalizado
1. Una vez finalizado el despliegue, ve a la pestaña **Custom Domains** dentro de App Hosting.
2. Introduce `certifind.intellecto.com.co`.
3. Sigue las instrucciones para añadir los registros **CNAME** o **A** en tu panel de DNS de Intellecto.

## 📁 Estructura del Proyecto
- `/public/certificates/`: Carpeta física para los PDFs.
- `/src/lib/registry.json`: "Base de datos" de certificados.
- `/src/firebase/config.ts`: Configuración central de Firebase.

---
*CertiFind es una marca de Intellecto para la validación académica segura.* 🚀
