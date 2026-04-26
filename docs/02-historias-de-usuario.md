# 02 - Historias de usuario

## Roles principales
- Coordinador Académico (Administrador)
- Docente
- Estudiante

## Historias de usuario del Coordinador Académico

### HU-01
Como coordinador académico, quiero registrar nuevos cursos para mantener actualizada la oferta académica del instituto.

**Criterios de aceptación:**
- Formulario con campos: nombre, categoría, docente, modalidad, duración, vacantes, costo, fecha inicio, descripción
- Validación de datos requeridos
- Confirmación de registro exitoso
- Curso inactivo por defecto

### HU-02
Como coordinador académico, quiero editar información de cursos para corregir horarios, docentes o detalles.

**Criterios de aceptación:**
- Acceso a formulario de edición desde listado
- Pre-llenado de datos actuales
- Guardado de cambios con confirmación
- Auditoría de cambios (opcional)

### HU-03
Como coordinador académico, quiero desactivar cursos para evitar inscripciones fuera de vigencia.

**Criterios de aceptación:**
- Opción de desactivar sin eliminar datos
- Cursos inactivos no aparecen en catálogo público
- Capacidad de reactivar cursos

### HU-04
Como coordinador académico, quiero visualizar todos los cursos en un listado para tener vista general del catálogo.

**Criterios de aceptación:**
- Tabla con información básica de cada curso
- Filtros por categoría, modalidad y estado
- Búsqueda por nombre
- Opciones de editar y desactivar

### HU-05
Como coordinador académico, quiero visualizar métricas del catálogo para reportar al director.

**Criterios de aceptación:**
- Total de cursos activos/inactivos
- Total de inscripciones
- Ingresos proyectados
- Top 5 cursos más solicitados

### HU-06
Como coordinador académico, quiero asignar docentes a los cursos para organizar la carga académica.

**Criterios de aceptación:**
- Listado de docentes disponibles
- Validar disponibilidad de horarios
- Confirmación de asignación

## Historias de usuario del Estudiante

### HU-07
Como estudiante, quiero registrarme en la plataforma para acceder a los cursos.

**Criterios de aceptación:**
- Formulario con email, contraseña y datos básicos
- Validación de email único
- Confirmación de registro

### HU-08
Como estudiante, quiero iniciar sesión para acceder a mis inscripciones.

**Criterios de aceptación:**
- Login con email y contraseña
- Manejo seguro de token JWT
- Recordar sesión (opcional)

### HU-09
Como estudiante, quiero ver el catálogo de cursos para identificar opciones disponibles.

**Criterios de aceptación:**
- Listado de cursos activos
- Información básica: nombre, categoría, fecha inicio, costo
- Filtros por categoría y modalidad
- Paginación

### HU-10
Como estudiante, quiero revisar el detalle de un curso para evaluar si me conviene inscribirme.

**Criterios de aceptación:**
- Vista completa: descripción, docente, horario, vacantes
- Información de inscripciones actuales
- Botón para inscribirse (si hay vacantes)

### HU-11
Como estudiante, quiero inscribirme en un curso para reservar mi participación.

**Criterios de aceptación:**
- Validación de vacantes disponibles
- Confirmación de inscripción
- Envío de correo de confirmación
- Descuento si hay promoción (opcional)

### HU-12
Como estudiante, quiero revisar mis inscripciones para conocer mi estado actual.

**Criterios de aceptación:**
- Listado de cursos en los que está inscrito
- Estado de cada inscripción (confirmada, pendiente)
- Opción de cancelar inscripción
- Información de acceso (zoom, plataforma, etc.)

### HU-13
Como estudiante, quiero consultar mi perfil para validar mis datos personales.

**Criterios de aceptación:**
- Visualización de datos personales
- Opción de editar información
- Historial de inscripciones pasadas

## Historias de usuario del Docente

### HU-14
Como docente, quiero visualizar los cursos que tengo asignados para revisar mi carga.

**Criterios de aceptación:**
- Listado de cursos a mi cargo
- Información de horarios y estudiantes inscritos
- Disponibilidad de materiales

### HU-15
Como docente, quiero consultar información de mis estudiantes para preparar el dictado.

**Criterios de aceptación:**
- Listado de estudiantes por curso
- Datos de contacto
- Información de inscripción y pagos
