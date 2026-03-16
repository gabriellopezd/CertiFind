# CertiFind 🎓

**CertiFind** es la plataforma oficial de Intellecto para la gestión, verificación y descarga instantánea de certificados de capacitación.

URL Oficial: [https://certifind.intellecto.com.co](https://certifind.intellecto.com.co)

## 🚀 Tecnologías

*   **Next.js 15 (App Router)** - SSR/SSG de alto rendimiento.
*   **Tailwind CSS** - Diseño moderno y responsivo.
*   **TypeScript** - Código robusto y tipado.
*   **Lucide React** - Iconografía elegante.

## 📁 Gestión de Certificados

Para añadir nuevos certificados al sistema:

1.  **Subida de archivos**: Coloca los archivos PDF en la carpeta `public/certificates/`.
2.  **Registro de datos**: Edita el archivo `src/lib/registry.json` añadiendo un nuevo objeto con el ID, nombre del recipiente, fecha y el nombre exacto del archivo PDF.
3.  **Despliegue**: Al hacer push a la rama principal, el sistema se actualizará automáticamente en el dominio configurado.

## 🛠 Comandos

*   `npm run dev`: Desarrollo local.
*   `npm run build`: Generación de archivos optimizados para producción.

---
*Desarrollado para garantizar la validez y acceso a tus logros académicos.* 🚀
