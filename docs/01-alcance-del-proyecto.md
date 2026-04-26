# 01 - Alcance del proyecto

## Nombre
**Gestión de Cursos - Instituto TecDev**

## Descripción
Sistema web para administración de cursos de extensión del Instituto TecDev. Permite gestionar catálogo académico, información de cursos, asignación de docentes y visualización de detalles para coordinadores y usuarios interesados.

## Problema que resuelve
El Instituto TecDev requiere una herramienta centralizada para:
- Mantener actualizado el catálogo de cursos
- Evitar duplicación de información
- Facilitar consulta de detalles de cursos
- Permitir validación de datos de entrada
- Proporcionar interfaz ordenada y coherente

## Objetivo general
Construir progresivamente una aplicación web moderna que permita administrar efectivamente el catálogo de cursos de extensión, desde un prototipo estático hasta un sistema completo con componentes, servicios, autenticación y API REST.

## Objetivos específicos

1. Diseñar interfaz visual base del sistema con HTML + CSS.
2. Aplicar JavaScript moderno y TypeScript para estructuración del código.
3. Construir panel administrativo con Angular.
4. Implementar API REST con Node.js, Express y MongoDB.
5. Crear portal de consulta con React.
6. Optimizar landing pública con Next.js.
7. Desplegar la solución en la nube.
8. Aplicar medidas de seguridad web.

## Alcance funcional

### Módulo público
- Visualizar landing del sistema
- Ver catálogo de cursos disponibles
- Consultar detalle de curso específico

### Módulo administrativo
- Gestionar cursos (crear, leer, actualizar, desactivar)
- Gestionar información de docentes
- Visualizar métricas del catálogo
- Exportar reportes básicos

### Módulo de inscripción
- Consultar cursos con filtros
- Inscribirse en cursos (con validación)
- Ver inscripciones personales

## Alcance técnico

- **Diseño:** HTML + CSS
- **Tipado:** TypeScript
- **Admin:** Angular
- **Portal consulta:** React
- **Landing pública:** Next.js
- **Backend:** Node.js + Express
- **Base de datos:** MongoDB
- **Autenticación:** JWT
- **Despliegue:** Vercel + Render + MongoDB Atlas

## Entregable final esperado
Una solución funcional con:
- API REST desplegada
- Base de datos remota
- Panel administrativo funcional
- Portal de consulta para estudiantes
- Landing pública informativa
- Autenticación segura
- Flujo completo de inscripción

## Alcance mínimo viable
Prioridades en caso de tiempo limitado:

1. Backend con CRUD de cursos e inscripciones
2. Panel administrativo en Angular para gestión de cursos
3. Portal en React para consultar cursos e inscribirse
4. Despliegue básico del backend y al menos un frontend
