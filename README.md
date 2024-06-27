# Hobunwindx

Probando un SSR usando Hono, Bun, TailwindCSS y HTMX.

* Hono
* TailwindCSS
* Font Awesome
* QueryBuilder
* Alpine.js
* HTMX

Usa el soporte de Bun para las plantillas JSX/TSX, Path Alias configurados en tsconfig, el QueryBuilder usa la librería nativa de Bun para SQLite3 (bun:sqlite)

---

## Enlaces

Los enlaces funcionan usando hx-get y hx-target de HTMX, en el componente ALink se pasan los argumentos:
```tsx
        <ALink
          className="text-white text-lg font-bold"
          url="/home"
          desc="Home"
        />
```
También puedes indicarle el target:

```tsx
        <ALink
          className="text-white text-lg font-bold"
          url="/home"
          desc="Home"
          target="#app"
        />
```

En caso de no pasar ningún argumento en target por defecto usará hx-target="#root"

---

To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
```

open http://localhost:3000