# Blog posts

Add a new post by creating a Markdown file in this folder, e.g. `mi-primer-post.md`.

The filename (without `.md`) is the slug used in the URL: `/blog/mi-primer-post`.

Each file must start with a frontmatter block:

```md
---
title: Título del post
date: 2026-07-24
excerpt: Una frase corta que aparece en la lista del blog.
cover: https://url-de-la-imagen.jpg
author: Arnau Palmer
lang: es
---

# Aquí empieza el contenido en Markdown

Escribe tu artículo con **negritas**, listas, imágenes, enlaces, etc.
```

Only `title` and `date` are required. `cover`, `excerpt`, `author` and `lang` are optional.

Files inside this folder that are not `.md` (like this README) are ignored.