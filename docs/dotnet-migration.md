# Guía de Migración a .NET 10 - CertiFind

Para recrear esta plataforma en un entorno .NET, puedes utilizar el siguiente prompt en GitHub Copilot o cualquier otro asistente de IA:

---

## Prompt para GitHub Copilot

"Actúa como un Desarrollador Senior de .NET. Necesito construir una plataforma web llamada **CertiFind** utilizando **ASP.NET Core 10 (Blazor o Razor Pages)**. La aplicación debe replicar las siguientes funcionalidades:

1. **Base de Datos Estática**: Utilizar un archivo `registry.json` para almacenar los metadatos de los certificados (ID, Nombre, Recipiente, Fecha de emisión, Nombre del archivo PDF).
2. **Buscador en Tiempo Real**: Una página de inicio con una barra de búsqueda que filtre los certificados por nombre del recipiente, nombre del curso o ID de verificación. Debe incluir lógica de normalización de strings (ignorar tildes y mayúsculas/minúsculas).
3. **Interfaz de Usuario (UI)**: Implementar un diseño moderno usando **Tailwind CSS** (o Bootstrap con estilos personalizados) que incluya efectos de 'Glassmorphism', gradientes de color (Primary: #2B6BA2, Accent: #1AA3A3) y animaciones de entrada.
4. **Rutas Dinámicas**: Implementar rutas tipo `/certificate/{id}` que muestren los detalles completos del certificado recuperados del JSON.
5. **Módulo de Descarga Seguro**: Crear un Controller o Action que reciba el nombre del archivo, valide que existe en `wwwroot/certificates/` y lo devuelva como un `FileResult`. Es crucial configurar correctamente el Header `Content-Disposition: attachment; filename="certificado.pdf"` para forzar la descarga en el navegador.
6. **Pre-renderizado**: La aplicación debe ser rápida y optimizada para SEO, similar a como funciona el Static Site Generation (SSG).
7. **Organización**: El código debe estar separado en Capas (Modelos, Servicios para la lectura del JSON, y Controladores/Vistas)."

---

## Consideraciones Técnicas para tu proyecto .NET

- **Data Access**: Usa `System.Text.Json` para leer el archivo `registry.json`.
- **Seguridad**: Asegúrate de que el buscador de archivos no permita 'Directory Traversal' (validar que los nombres de archivo no contengan `..`).
- **Frontend**: Si usas Blazor, utiliza componentes reactivos para que el filtrado de la lista sea instantáneo mientras el usuario escribe.
