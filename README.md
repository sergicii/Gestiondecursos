# Gestio-Cursos 📚

¡Bienvenido a **Gestio-Cursos**, tu plataforma para gestionar cursos de forma fácil y rápida!

---

## ¿Qué es Gestio-Cursos?

Gestio-Cursos es una aplicación web que te permite:
- 📋 Ver un listado completo de todos los cursos disponibles
- 📖 Consultar los detalles de cada curso
- ✅ Cambiar el estado de un curso (activo o inactivo)
- ➕ Crear nuevos cursos con información completa

---

## 📋 Requisitos

Para ejecutar esta aplicación necesitas tener instalado:
- **Node.js** (puedes descargarlo desde https://nodejs.org)

¡Eso es todo! No necesitas ser un experto en tecnología.

---

## 🚀 ¿Cómo ejecutar la aplicación?

### Opción 1: Forma rápida (Recomendado)

1. **Abre una terminal** en la carpeta del proyecto
2. **Escribe este comando**:
   ```
   npm start
   ```
3. **Espera a que termine** (verás un mensaje diciendo que está lista)
4. **Abre tu navegador web** y ve a: `http://localhost:4200/`

¡Listo! La aplicación está funcionando.

### Opción 2: Forma manual

Si la opción 1 no funciona:

1. **Abre una terminal** en la carpeta del proyecto
2. **Escribe este comando**:
   ```
   ng serve
   ```
3. **Cuando veas el mensaje "Compiled successfully"**, abre tu navegador en: `http://localhost:4200/`

---

## 💡 ¿Qué puedo hacer en la aplicación?

### En la página principal
- Ver el número total de cursos
- Ver cuántos cursos están activos
- Ver estadísticas útiles
- Acceder rápidamente a las funciones principales

### En el listado de cursos
- Ver todos los cursos en una tabla clara
- Filtrar cursos (ver todos, solo activos, solo inactivos)
- Ordenar cursos por nombre o calificación
- Ver detalles de cualquier curso
- Cambiar si un curso está activo o no

### En los detalles del curso
- Ver toda la información del curso
- Ver el instructor responsable
- Conocer la duración y cantidad de estudiantes
- Ver la calificación del curso
- Cambiar el estado del curso (activo/inactivo)

### Para crear un nuevo curso
- Llenar un formulario con toda la información
- La aplicación valida que los datos sean correctos
- Ver mensajes claros si hay algo incorrecto
- Guardar el nuevo curso y verlo en el listado

---

## ⚙️ Si tienes problemas

**El servidor no inicia:**
- Verifica que Node.js está instalado (escribe `node --version` en la terminal)
- Intenta escribir `npm install` antes de ejecutar `npm start`

**El navegador no abre la página:**
- Copia y pega manualmente: `http://localhost:4200/` en tu navegador
- Espera unos segundos a que cargue la página

**¿Necesitas ayuda?**
- Revisa el archivo de documentación: `docs/00-estructura-del-proyecto.md`

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
