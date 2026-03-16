
# CertiFind 🎓 - Portal de Certificados Intellecto

Este proyecto es la plataforma oficial de validación de certificados de Intellecto SAS, construida con Next.js 15 y desplegada en **https://certifind.intellecto.com.co**.

---
**📅 Última Actualización de Despliegue:** 22 de Marzo de 2024
---

## 🚀 Guía de Configuración de Dominio (DNS)

Para que el sitio sea accesible, debes añadir estos registros en el panel de control de tu dominio (donde compraste `intellecto.com.co`):

### 1. Registro Tipo A (Dirección IP)
- **Nombre/Host:** `certifind` (o `certifind.intellecto.com.co`)
- **Valor:** `35.219.200.11`

### 2. Registro TXT (Verificación de Propiedad)
- **Nombre/Host:** `certifind`
- **Valor:** `fah-claim=002-02-c1b6d0de-790a-46ec-b66c-8d49c461e8e1`

### 3. Registro CNAME (Certificado SSL/Seguridad)
- **Nombre/Host:** `_acme-challenge_4zu73vkmbcnfihuf.certifind`
- **Valor:** `b2b37d2e-7482-45bf-b803-b1701fb1abd5.2.authorize.certificatemanager.goog.`

---

## 🛠️ Pasos para el Administrador
1. Entra a tu proveedor de dominio.
2. Añade los 3 registros anteriores.
3. Vuelve a la Consola de Firebase y haz clic en **"Verificar registros"**.
4. Una vez verificado, el estado cambiará a "Conectado" (puede tardar de 1 a 24 horas en propagarse por todo internet).

*CertiFind es una marca de Intellecto para la validación académica segura.* 🚀
