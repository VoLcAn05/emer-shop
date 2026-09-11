# Emer Shop — Catálogo Web

Catálogo web para **Emer Shop**, tienda de productos de barbería en Barinas,
Venezuela. La web muestra el catálogo de productos y dirige al cliente a
WhatsApp para consultar disponibilidad y comprar (no es un ecommerce con
carrito/checkout).

Stack: **React + TypeScript + Vite + Tailwind CSS v4 + React Router**.

---

## 1. Instalación

Requisitos: Node.js 20+ y npm.

```bash
npm install
```

## 2. Ejecutar en desarrollo

```bash
npm run dev
```

Abre la URL que muestra la terminal (por defecto `http://localhost:5173`).

## 3. Build de producción

```bash
npm run build
```

Genera la carpeta `dist/` lista para desplegar en cualquier hosting estático
(Netlify, Vercel, GitHub Pages, un servidor propio, etc).

Para previsualizar ese build localmente:

```bash
npm run preview
```

## 4. Lint

```bash
npm run lint
```

---

## 5. Arquitectura — dónde vive cada cosa

```
src/
├── components/     Piezas de UI reutilizables (Header, ProductCard, etc.)
├── data/           TODOS los datos del sitio: productos, categorías, config
│   ├── config.ts       Configuración central (WhatsApp, nombre, ubicación...)
│   ├── categories.ts   Lista de categorías
│   ├── products.ts     Lista de productos (el catálogo)
│   └── types.ts        Tipos TypeScript de Product y Category
├── hooks/          Lógica reutilizable (useProductFilters: búsqueda/filtros)
├── pages/          Páginas (Home, ProductDetail)
├── utils/          Funciones puras (whatsapp.ts, format.ts)
├── App.tsx         Rutas de la aplicación
└── main.tsx        Punto de entrada

public/
└── images/
    ├── logo/       Logo de Emer Shop
    └── products/   Fotos de productos
```

**Regla de oro:** los datos (`src/data/`) están separados del diseño
(`src/components/`, `src/pages/`). Para casi cualquier cambio de contenido
solo necesitas editar archivos dentro de `src/data/` — nunca los componentes.

---

## 6. Cómo hacer cambios comunes

### Agregar un producto nuevo

1. Copia la imagen del producto a `public/images/products/` (formato `.webp`
   recomendado por tamaño de archivo).
2. Abre `src/data/products.ts` y agrega un objeto nuevo al arreglo:

```ts
{
  id: "nombre-unico-del-producto",       // único, en minúsculas y con guiones
  name: "Nombre visible del producto",
  brand: "Marca",                         // opcional, omitir si no aplica
  category: "accesorios-barberia",        // debe existir en categories.ts
  price: 10,                              // omitir si el precio no está definido
  currency: "USD",
  image: "/images/products/mi-producto.webp",
  description: "Descripción breve del producto.",
  features: [
    "Característica 1",
    "Característica 2",
  ],
  available: true,
  featured: false,
},
```

### Eliminar un producto

Borra su objeto completo del arreglo en `src/data/products.ts`.

### Cambiar el precio de un producto

En `src/data/products.ts`, busca el producto por su `id` o `name` y cambia
el valor de `price` (y `currency` si aplica).

### Cambiar la imagen de un producto

1. Coloca la nueva imagen en `public/images/products/`.
2. Actualiza el campo `image` de ese producto en `src/data/products.ts` con
   la nueva ruta.

### Marcar un producto como agotado / disponible

En `src/data/products.ts`, cambia:

```ts
available: false,   // agotado — el botón de WhatsApp se deshabilita
available: true,    // disponible
```

### Marcar un producto como destacado

En `src/data/products.ts`, cambia:

```ts
featured: true,   // aparecerá en la sección "Productos destacados"
```

### Agregar una categoría nueva

En `src/data/categories.ts`, agrega un objeto:

```ts
{
  id: "nueva-categoria",
  name: "Nombre visible de la categoría",
  description: "Descripción breve (opcional).",
},
```

Luego usa ese mismo `id` en el campo `category` de cualquier producto.

### Cambiar el número de WhatsApp

Abre `src/data/config.ts` y cambia una sola línea:

```ts
whatsappNumber: "584127614901", // formato internacional, solo dígitos
```

Todos los botones de WhatsApp del sitio (header, flotante, tarjetas de
producto, detalle de producto, footer) usan este mismo valor automáticamente.

> ⚠️ El número configurado actualmente es un número de **prueba**
> proporcionado temporalmente para desarrollo. Debe reemplazarse por el
> número definitivo de Emer Shop antes de publicar el sitio.

### Cambiar los mensajes automáticos de WhatsApp

También en `src/data/config.ts`:

```ts
whatsappDefaultMessage: "Hola, Emer Shop. Quiero información sobre sus productos.",
whatsappProductMessageTemplate: "Hola, Emer Shop. Estoy interesado en el producto: {productName}. ¿Está disponible?",
```

`{productName}` se reemplaza automáticamente por el nombre del producto.

### Cambiar el logo

1. Coloca el nuevo archivo en `public/images/logo/`.
2. Actualiza las rutas en `src/data/config.ts`:

```ts
logo: {
  full: "/images/logo/emer-shop-logo.webp",   // logo completo (footer)
  emblem: "/images/logo/emer-shop-emblem.png", // emblema circular (header)
},
```

### Cambiar los enlaces de Instagram / TikTok

En `src/data/config.ts`:

```ts
instagramUrl: "https://www.instagram.com/emershopve",
tiktokUrl: "https://www.tiktok.com/@emershop.ve",
```

La sección "Síguenos" en la home (`src/components/SocialLinks.tsx`) usa
estos dos valores automáticamente — no hay enlaces sueltos en el componente.

### Completar la información del fundador ("Conoce Emer Shop")

En `src/data/config.ts`, dentro de `founder`:

```ts
founder: {
  photo: "/images/team/founder.webp",
  name: "Nombre del fundador",     // reemplaza con el nombre real
  role: "Fundador de Emer Shop",
  bio: "Presentación pendiente...", // reemplaza con la historia real
},
```

Para cambiar la foto, coloca el nuevo archivo en `public/images/team/` y
actualiza la ruta `photo`. El nombre y la biografía actuales son
placeholders visibles a propósito — reemplázalos cuando tengas el texto
definitivo; el componente (`src/components/AboutFounder.tsx`) no necesita
ningún cambio.

### Agregar horarios

Este campo existe en `src/data/config.ts` pero está vacío porque no se
proporcionó esa información todavía:

```ts
businessHours: [
  { day: "Lunes a Sábado", hours: "9:00 am – 6:00 pm" },
],
```

---

## 7. Notas sobre los datos del catálogo inicial

Los 8 productos cargados inicialmente provienen directamente de flyers reales
de Emer Shop. Ningún precio, marca o característica fue inventado: si algo no
era visible o confirmable en el material fuente, se dejó fuera en lugar de
adivinarlo.

Las fotos de los productos son recortes de esos mismos flyers (no fotos de
producto individuales) — están preparadas para ser reemplazadas por fotos
profesionales de cada producto cuando estén disponibles, simplemente
reemplazando el archivo en `public/images/products/` y/o actualizando la
ruta `image` en `products.ts`.

Este catálogo inicial es solo el punto de partida: la arquitectura de datos
está pensada para escalar a muchos más productos sin tocar el diseño.

---

## 8. Pendientes conocidos (a completar cuando haya información real)

- Número de WhatsApp definitivo (actualmente hay uno de prueba).
- Nombre, cargo real (si es distinto de "Fundador de Emer Shop") e historia
  del fundador para la sección "Conoce Emer Shop" (hoy con placeholders
  visibles en `siteConfig.founder`).
- Horarios de atención.
- Dominio propio (para completar `og:image` con URL absoluta y agregar una
  etiqueta `canonical` en `index.html`).
- Fotos individuales de cada producto (especialmente las 4 variantes de
  Peel-Off Mask y el combo Kemei, que hoy comparten una imagen recortada de
  flyer).
