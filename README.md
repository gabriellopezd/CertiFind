
# CertiFind 🎓 - Portal de Certificados Intellecto

Este proyecto es la plataforma oficial de validación de certificados de Intellecto SAS, construida con Next.js 15 y desplegada en **https://certifind.intellecto.com.co**.

---
**📅 Última Actualización de Despliegue:** 22 de Marzo de 2024
---

## 🚀 Guía de Despliegue (Firebase App Hosting)

Sigue estos pasos en tu Consola de Firebase para lanzar el sitio:

### 1. Preparación del Proyecto
- Asegúrate de que el ID del proyecto en Firebase sea `studio-3335172372-76abd`.

### 2. Configurar App Hosting
1. En el menú lateral, ve a **Compilación** > **App Hosting**.
2. Haz clic en **Comenzar** y conecta tu cuenta de GitHub.
3. Selecciona el repositorio de este proyecto y la rama `main`.
4. Firebase detectará automáticamente Next.js y comenzará el despliegue.

### 3. Vincular el Dominio Personalizado (¡IMPORTANTE!)
Si la conexión desapareció, es necesario volver a añadirla:
1. Una vez desplegado, ve a la pestaña **Custom Domains** (Dominios).
2. Haz clic en **Agregar un dominio personalizado**.
3. Introduce exactamente: `certifind.intellecto.com.co`.
4. Firebase te dará unos registros **CNAME** o **A**. 
5. **Acción necesaria:** Debes entrar a tu panel de control de dominio (donde compraste el dominio de Intellecto) y añadir esos registros.
6. Una vez añadidos, Firebase tardará de 1 a 24 horas en mostrar el estado como "Conectado".

---
*CertiFind es una marca de Intellecto para la validación académica segura.* 🚀
