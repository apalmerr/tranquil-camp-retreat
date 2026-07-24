## Objetivo

Poner toda la página en español por defecto y añadir soporte multi-idioma para inglés y alemán, con un selector visible en la navegación.

## Qué se hará

1. **Instalar i18n**
   - Añadir `i18next`, `react-i18next` e `i18next-browser-languagedetector`.
   - Idioma por defecto: **español**. Idiomas disponibles: **es**, **en**, **de**.
   - Guardar preferencia en `localStorage`.

2. **Crear archivos de traducción**
   - `src/i18n/index.ts` — configuración.
   - `src/i18n/locales/es.json`, `en.json`, `de.json` con todas las cadenas de:
     - Navegación (Inicio, Servicios, Quiénes somos, Contacto, botón Contactar).
     - Hero, Locations (listado), Experience, Footer.
     - Páginas: About, Contact, Locations, LocationDetail, Auth, Admin, NotFound.
     - Datos de ubicaciones (`src/data/locations.ts`): nombre, descripción, características — se traducirán mediante claves de traducción en lugar de texto fijo.
     - Metadatos SEO por página (título / descripción vía `document.title`).

3. **Selector de idioma**
   - Componente `LanguageSwitcher` (ES / EN / DE) en la barra de navegación, tanto en escritorio como en móvil.
   - Actualiza también el atributo `lang` de `<html>`.

4. **Refactor de componentes**
   - Reemplazar textos codificados por `t("clave")` en todos los componentes y páginas listados.
   - `locations.ts` pasa a exponer `id` + claves i18n; los componentes resuelven `t(\`locations.${id}.name\`)`, etc.

5. **HTML base**
   - `index.html`: `<html lang="es">`, título y meta descripción en español por defecto.

## Detalles técnicos

- Estructura de claves: `nav.*`, `hero.*`, `locations.list.<id>.*`, `experience.*`, `footer.*`, `pages.<name>.*`, `common.*`.
- Inicialización de i18n importada una sola vez en `src/main.tsx` antes de renderizar `App`.
- Sin cambios de backend ni de rutas.

## Fuera de alcance

- Traducción de emails transaccionales o contenido almacenado en la base de datos.
- SEO multi-idioma con URLs por locale (`/en/...`); se mantiene una sola URL y el idioma se cambia en cliente.
