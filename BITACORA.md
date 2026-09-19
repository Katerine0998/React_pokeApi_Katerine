# Bitácora del proyecto — React_PokeApi

## Día 1 — Preparación del proyecto

**Qué hice:**
- Verifiqué instalación de Node.js.
- Creé el proyecto con Vite + React + TypeScript.
- Creé el repositorio en GitHub y lo cloné con VS Code.
- Creé la estructura de carpetas: components, services, types, styles.
- Escribí el README inicial.

**Con qué me trabé:**
- Al editar el README por primera vez en el editor, el cambio no se guardó y el commit salió vacío.

**Cómo lo resolví:**
- Reescribí el archivo directamente desde la terminal con `cat > README.md`, lo cual sí guardó el contenido correctamente.

**Commits:**
- `chore: crear proyecto base con Vite`
- `docs: agregar README inicial`

---

## Día 2 — RF-01: Listado de Pokémon

**Qué hice:**
- Creé los tipos de TypeScript (`PokemonListItem`, `PokemonListResponse`) en `types/api.ts`.
- Creé el servicio `obtenerListaPokemon` en `services/api.ts` usando `fetch`.
- Implementé `useState` (data, loading, error) y `useEffect` con `AbortController`.
- Mostré el listado de 20 Pokémon en pantalla.

**Con qué me trabé:**
- El navegador traducía automáticamente algunos nombres de Pokémon (ej. "hiedra" en vez de "ivysaur"), lo que parecía un error pero no lo era.

**Cómo lo resolví:**
- Desactivé la traducción automática de la página en el navegador.

**Commits:**
- `feat: crear tipos de la PokeAPI`
- `feat: crear servicio de consulta`
- `feat: mostrar listado de pokemon`
- `feat: agregar estados de carga y error`

---

## Día 3 — RF-03 y RF-04: Búsqueda, detalle y navegación

**Qué hice:**
- Creé la rama `feature/rf01-listado`.
- Implementé el buscador con debounce de 400ms usando `setTimeout` y `useEffect`.
- Creé la vista de detalle (`PokemonDetalle.tsx`) consumiendo el endpoint individual de cada Pokémon.
- Implementé navegación entre listado y detalle mediante estado en `App.tsx` (sin librería de rutas).

**Con qué me trabé:**
- Al abrir la rama después de cambiar de `master`, no aparecían los componentes por no tener `node_modules` instalado.
- También aparecieron errores de TypeScript (`react/jsx-runtime`, `vite/client`) por la misma causa.

**Cómo lo resolví:**
- Ejecuté `npm install` para regenerar `node_modules` y reinicié el servidor de TypeScript en VS Code.

**Commits:**
- `feat: agregar busqueda con debounce`
- `feat: agregar detalle de pokemon y navegacion`

---

## Día 4 — RF-05: Favoritos

**Qué hice:**
- Creé el hook personalizado `useFavoritos` para marcar/quitar favoritos y persistirlos en `localStorage`.
- Agregué el botón de favorito (❤️/🤍) en cada tarjeta y el contador de favoritos.

**Con qué me trabé:**
- Sin inconvenientes relevantes.

**Cómo lo resolví:**
- N/A

**Commits:**
- `feat: implementar favoritos`

---

## Día 5 — RF-06 y cierre del taller

**Qué hice:**
- Implementé el botón de "Reintentar" cuando falla la petición a la API, sin recargar la página.
- Corregí errores de configuración en `tsconfig.app.json` (`composite`, `target`, `erasableSyntaxOnly`).
- Creé la rama `develop` y protegí la rama `master` (requiere Pull Request + 1 aprobación).
- Creé 6 Issues (uno por requisito) y la plantilla `.github/pull_request_template.md`.
- Fusioné el trabajo de `feature/rf01-listado` a `develop` mediante Pull Request.
- Realicé mejoras adicionales mediante Pull Requests independientes: accesibilidad del buscador, imagen por defecto ante errores de sprite, y mejora visual del botón de reintentar.
- Mejoré el README con secciones de funcionalidades y estructura del proyecto.

**Con qué me trabé:**
- Confundí en qué rama estaba parada al no ver los componentes; también intenté aprobar mi propio Pull Request, lo cual GitHub no permite.
- La configuración de Git mostraba un correo de ejemplo en vez del correo real.

**Cómo lo resolví:**
- Verifiqué la rama activa con `git branch` y me cambié a la correcta.
- Confirmé que la regla de aprobación obligatoria solo aplicaba a `master`, por lo que los Pull Requests hacia `develop` se podían fusionar directamente.
- Corregí la configuración con `git config --global user.email`.

**Commits:**
- `chore: agregar plantilla de pull request`
- `feat: agregar reintento de peticion`
- `fix: mejorar accesibilidad del buscador con aria-label`
- `fix: mostrar imagen por defecto si el sprite no carga`
- `feat: deshabilitar boton de reintentar mientras carga`
- `docs: mejorar README y agregar bitacora`
