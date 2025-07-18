# Sistema de Imágenes - Fernando Feijoo Portfolio

## 🎯 Resumen del Sistema

Este sistema maneja las imágenes de todas las obras del portfolio de Fernando Feijoo, incluyendo:
- **Prints**: Obras gráficas y grabados
- **Ceramics**: Piezas cerámicas
- **Artist Books**: Libros de artista
- **Drawings**: Dibujos y bocetos

## 📁 Estructura de Archivos

```
Fernando-Feijoo/
├── src/
│   ├── data/
│   │   └── works.ts                 # Datos centralizados de todas las obras
│   ├── utils/
│   │   └── imageUtils.ts            # Funciones de procesamiento de imágenes
│   ├── components/
│   │   └── WorkImageSlider.vue      # Componente slider de imágenes
│   └── pages/
│       └── works/
│           └── [slug].astro         # Páginas dinámicas de obras
├── public/
│   └── works/                       # Imágenes públicas (copiadas de src/assets)
│       ├── prints/
│       ├── ceramics/
│       ├── artistBooks/
│       └── drawings/
└── dist/
    └── works/                       # Imágenes en el build final
```

## 🖼️ Funcionalidades del Sistema

### 1. Hero Gallery
- Muestra las primeras 6 obras de cada categoría
- Navegación directa a páginas individuales
- Placeholders para imágenes que no cargan

### 2. Páginas Individuales de Obras
- URL: `/works/{slug}`
- Imagen única: Muestra imagen fija
- Múltiples imágenes: Slider automático con controles
- Información detallada (título, descripción, técnica, etc.)
- Obras relacionadas de la misma categoría

### 3. Procesamiento de Imágenes
- Conversión automática de rutas `@assets/` a rutas públicas
- Manejo de errores de carga
- Placeholders elegantes
- Optimización para diferentes tamaños de pantalla

## 🔧 Funciones Principales

### `src/utils/imageUtils.ts`

```typescript
// Procesa una URL de imagen individual
processImageUrl(imageUrl: string): string

// Procesa un array de URLs de imágenes
processImageUrls(imageUrls: string[]): string[]

// Obtiene la primera imagen de un array
getFirstImageUrl(imageUrls: string[]): string

// Verifica si una obra tiene múltiples imágenes
hasMultipleImages(imageUrls: string[]): boolean
```

### `src/components/WorkImageSlider.vue`

```vue
<WorkImageSlider
  :imageUrls="work.imageUrls"
  :title="work.title"
  :autoplay="hasMultipleImages(work.imageUrls)"
  :showControls="true"
  client:load
/>
```

## 🚀 Cómo Usar el Sistema

### 1. Añadir una Nueva Obra

1. **Agregar imágenes**: Coloca las imágenes en `public/works/{categoria}/`
2. **Actualizar datos**: Modifica `src/data/works.ts`:

```typescript
{
  slug: "nueva-obra",
  title: "Nueva Obra",
  description: "Descripción de la obra...",
  medium: "Técnica utilizada",
  dimensions: "Dimensiones",
  imageUrls: [
    "@assets/works/categoria/nueva-obra/imagen1.avif",
    "@assets/works/categoria/nueva-obra/imagen2.avif", // Opcional
  ],
}
```

### 2. Estructura de URLs de Imágenes

```typescript
// ✅ Correcto - Ruta @assets que se convierte automáticamente
"@assets/works/ceramics/burnInHell/burnInHell.avif"

// ✅ También funciona - Ruta directa
"/works/ceramics/burnInHell/burnInHell.avif"

// ❌ No funciona - Ruta absoluta
"https://ejemplo.com/imagen.avif"
```

### 3. Comportamiento del Slider

- **1 imagen**: Muestra imagen fija
- **2+ imágenes**: Activa slider automático
- **Controles**: Flechas de navegación y thumbnails
- **Autoplay**: Solo en obras con múltiples imágenes

## 🎨 Categorías Disponibles

### Prints
- Citizens & Wastrels
- Death Dances
- Games & Players
- Gods & Monsters
- Inferno
- Mixed Works
- Portraits
- Screenprints

### Ceramics
- Piezas individuales y series
- Múltiples vistas por pieza

### Artist Books
- Libros con múltiples páginas
- Vista de portada y páginas interiores

### Drawings
- Dibujos individuales
- Bocetos y estudios

## 📋 Datos Requeridos por Obra

```typescript
interface Work {
  slug: string;           // URL-friendly identifier
  title: string;          // Título de la obra
  description: string;    // Descripción detallada
  medium: string;         // Técnica utilizada
  dimensions?: string;    // Dimensiones (opcional)
  edition?: number;       // Edición (opcional)
  price?: string;         // Precio (opcional)
  imageUrls: string[];    // Array de URLs de imágenes
}
```

## 🔧 Mantenimiento

### Copiar Imágenes de src/assets a public/works

Si necesitas mover imágenes de `src/assets/works/` a `public/works/`, puedes usar este script:

```javascript
// copy-images.cjs
const fs = require('fs');
const path = require('path');

function copyDirectory(srcDir, destDir) {
  // Código para copiar recursivamente
}

copyDirectory('src/assets/works', 'public/works');
```

### Regenerar Páginas

```bash
# Limpiar y reconstruir
npm run build

# Verificar que las páginas se generaron
ls dist/works/
```

## 🎯 URLs Generadas

El sistema genera automáticamente estas URLs:

- `/works/after-hours/` - Afterhours (Citizens & Wastrels)
- `/works/burn-in-hell/` - Burn in Hell (Ceramics)
- `/works/gods-and-monsters/` - Gods and Monsters (Artist Books)
- `/works/botanical-garden-malaga/` - Botanical Garden (Drawings)
- ... y 118 obras más

## 🐛 Solución de Problemas

### Imágenes no se muestran
1. Verifica que las imágenes estén en `public/works/`
2. Revisa la ruta en `works.ts`
3. Verifica que la función `processImageUrl` esté funcionando

### Slider no funciona
1. Asegúrate de que `client:load` esté en el componente
2. Verifica que hay múltiples imágenes en el array
3. Revisa la consola del navegador por errores

### Página 404
1. Verifica que el slug coincida con el definido en `works.ts`
2. Ejecuta `npm run build` para regenerar páginas estáticas
3. Revisa que `getStaticPaths()` esté funcionando correctamente

## 📱 Responsive Design

El sistema es completamente responsive:
- **Desktop**: Grid de 3 columnas
- **Tablet**: Grid de 2 columnas
- **Mobile**: Columna única
- **Slider**: Se adapta automáticamente

## ✅ Estado Actual

- ✅ 118 páginas de obras generadas
- ✅ Sistema de imágenes funcionando
- ✅ Slider automático para múltiples imágenes
- ✅ Placeholders para imágenes faltantes
- ✅ Navegación entre obras relacionadas
- ✅ Build exitoso sin errores

## 🚀 Próximos Pasos

1. **Completar imágenes**: Añadir todas las imágenes faltantes
2. **Llenar descripciones**: Completar datos de obras en `works.ts`
3. **SEO**: Añadir meta tags específicos por obra
4. **Optimización**: Implementar lazy loading mejorado
5. **Analytics**: Añadir tracking de visualizaciones por obra
