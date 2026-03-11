# CertiFind 🎓

**CertiFind** es una plataforma moderna para la gestión, verificación y descarga instantánea de certificados oficiales de participación y finalización de capacitaciones.

## 🚀 Tecnologías Destacadas

Este proyecto está construido con un stack de alto rendimiento (SSR + SSG):

*   **Next.js 15 (App Router)** - Para rutas dinámicas rápidas, componentes compartidos y optimizaciones avanzadas de red.
*   **React 19** - Librería principal de UI.
*   **Tailwind CSS 3** - Framework de utilidades CSS, configurado con estilos modernos *(Glassmorphism, gradientes avanzados, animaciones suaves).*
*   **TypeScript** - Para asegurar tipado estático riguroso y previsibilidad de las interfaces.
*   **Lucide React** - Conjunto de iconografía liviana y elegante.
*   **Date-fns** - Para el procesamiento eficiente y humanizado de fechas.

## 🌟 Funcionalidades Principales

*   **⚡ Buscador en Tiempo Real:** Filtra instantáneamente decenas de certificados por nombre, número de ID o título del curso utilizando algoritmos de coincidencia sin tildes ni restricciones de mayúsculas/minúsculas.
*   **📄 Pre-renderizado Estático (SSG):** Las páginas dedicadas a certificar cada documento se generan automáticamente usando `generateStaticParams()` a partir de un JSON registry, brindando un rendimiento sobresaliente en carga y un excelente SEO.
*   **⬇️ Módulo Interno de Descarga:** Cuenta con un Endpoint API nativo (`/api/download?file=...`) dedicado exclusivamente a procesar, codificar e inyectar *Headers HTTP* especiales para forzar descargas directas de PDFs sin vulnerabilidades o errores por tildes en distintas plataformas.
*   **📱 Diseño Responsivo:** Completamente adaptable a teléfonos móviles, tabletas y computadoras de escritorio.

## 📁 Estructura del Proyecto

*   `src/app/page.tsx`: Página de inicio (Search Bar, Landing y listado interactivo).
*   `src/app/certificate/[id]/page.tsx`: Ruta dinámica encargada de desplegar detalladamente el metadato del certificado elegido.
*   `src/app/api/download/route.ts`: Función sin servidor responsable de obligar la correcta bajada de archivos manejando codificaciones complejas en los títulos de documentos PDF.
*   `src/components/Header.tsx`: Componente fijo translúcido responsable de la navegación de toda la app.
*   `src/components/CertificateCard.tsx`: Tarjeta visual del listado principal.
*   `public/certificates/`: Carpeta con los archivos `.pdf` originales pesados.
*   `src/lib/registry.json`: Base de datos de metadatos estática de donde proviene la información visual del certificado.

## 🔧 Instalación y Arranque

1. Clona el repositorio e instala las dependencias:
   ```bash
   npm install
   ```
2. Ejecuta el servidor de desarrollo local usando Turbopack para cargas ultraveloces:
   ```bash
   npm run dev
   ```
3. Abre [http://localhost:9003](http://localhost:9003) en tu navegador para ver la plataforma.

## 🛠 Comandos Útiles

*   `npm run build`: Optimizador para empaquetado y generación de rutas SSG para pasar a Producción.
*   `npm run typecheck`: Valida sin compilar que todo el código TypeScript cumpla reglas estrictas.
*   `npm run lint`: Checa configuraciones básicas de formato mediante ESLint.

---
*Diseñado y desarrollado para avalar y validar certificaciones rápidamente.* 🚀
