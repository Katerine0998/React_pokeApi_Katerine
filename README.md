# React_PokeApi

## Materia
Software 1

## Nombre del proyecto
PokeApi

## Integrantes del equipo
- Katerine Zabala Pino

## Descripción
Aplicación web desarrollada con React y TypeScript que consume la PokeAPI para mostrar información de distintos Pokémon: nombre, imagen, tipo y otras características. El proyecto se realizó como parte del taller universitario de la materia, con el objetivo de aprender a integrar consumo de APIs, manejo de componentes y control de versiones con Git y GitHub.

## Funcionalidades
- Listado de 20 Pokémon consumidos desde la PokeAPI
- Búsqueda de Pokémon por nombre, con debounce de 400ms
- Vista de detalle de cada Pokémon (altura, peso, tipos)
- Navegación entre listado y detalle
- Marcar/quitar Pokémon como favoritos, con contador y persistencia en localStorage
- Botón de reintento cuando falla la petición a la API
- Manejo de estados: cargando, error, sin resultados y éxito

## Tecnologías
- React
- TypeScript
- Vite
- Git y GitHub
- PokeAPI (consumo de datos)

## Estructura del proyecto
src/
├── components/ → piezas visuales reutilizables (tarjetas, buscador, mensajes de estado)
├── services/ → funciones que consumen la PokeAPI
├── types/ → interfaces de TypeScript
├── hooks/ → lógica reutilizable (favoritos)
└── styles/ → estilos generales

## Cómo ejecutar el proyecto

1. Clonar el repositorio:
```bash
   git clone https://github.com/Katerine0998/React_pokeApi_Katerine.git
```
2. Entrar a la carpeta del proyecto:
```bash
   cd React_pokeApi_Katerine
```
3. Instalar las dependencias:
```bash
   npm install
```
4. Ejecutar el servidor de desarrollo:
```bash
   npm run dev
```
5. Abrir en el navegador la dirección que aparece en la terminal (normalmente `http://localhost:5173/`).