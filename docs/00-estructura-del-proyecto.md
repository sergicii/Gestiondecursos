# 00 - Estructura del proyecto

## Nombre del proyecto
**Gestión de Cursos - Instituto TecDev**

## Idea general
Aplicación web progresiva para administrar el catálogo académico de cursos de extensión del Instituto TecDev. El proyecto se divide en módulos para integrar tecnologías en capas, con objetivo de entregar un sistema completo y escalable.

## Estructura del repositorio

```text
Gestion de Cursos/
│
├── README.md
│
├── docs/
│   ├── 00-estructura-del-proyecto.md
│   ├── 01-alcance-del-proyecto.md
│   └── 02-historias-de-usuario.md
│
├── design/
│   └── prototipo/
│       ├── index.html
│       ├── cursos.html
│       ├── detalle-curso.html
│       ├── nuevo-curso.html
│       ├── editar-curso.html
│       ├── css/
│       │   └── style.css
│       └── assets/
│
├── sandbox/
│   ├── javascript/
│   │   ├── 1-variables-basicas.js
│   │   ├── 2-funciones.js
│   │   └── 3-objetos-cursos.js
│   │
│   └── typescript/
│       ├── tsconfig.json
│       ├── 1-tipos-basicos.ts
│       ├── 2-interfaz-curso.ts
│       └── 3-servicio-cursos.ts
```

## Criterio de organización

### `docs/`
Documentación de negocio, requerimientos, alcance y historias de usuario del módulo de gestión de cursos.

### `design/prototipo/`
Prototipo visual inicial basado en HTML + CSS. Sirve como referencia visual para migración posterior a Angular/React/Next.js.

### `sandbox/javascript/`
Ejercicios y exploración con JavaScript moderno. Fundamentos para trabajar con variables, funciones y objetos de cursos.

### `sandbox/typescript/`
Ejercicios con TypeScript, interfaces, tipos estrictos y servicios. Base tipada para arquitectura posterior en Angular.

## Atributos de un curso
- **id**: Identificador único
- **nombre**: Nombre descriptivo
- **categoría**: Área académica
- **docente**: Responsable del curso
- **modalidad**: presencial, virtual o híbrida
- **duración**: Horas de clases
- **vacantes**: Lugares disponibles
- **costo**: Precio de inscripción
- **fechaInicio**: Fecha de comienzo
- **activo**: Estado (activo/inactivo)
- **descripción**: Detalle del contenido
