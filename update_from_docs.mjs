import fs from 'fs';

const docsContent = fs.readFileSync('public/docs.json', 'utf8');
const docs = JSON.parse(docsContent);
let worksContent = fs.readFileSync('src/data/works.ts', 'utf8');

const changes = [];
const notFound = [];

// Función para crear slug
function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Actualizar Artist Books
console.log('=== ARTIST BOOKS ===\n');
const artistBooks = docs.portfolio_content.artist_books.items;
for (const book of artistBooks) {
  const slug = slugify(book.title);
  const searchSlug = slug
    .replace(/s-progress/g, 's-progress')
    .replace(/crack-ts-progress-charlie-ts-progress/g, 'crack-progress-charlies-progress');
  
  // Buscar la obra en works.ts
  const workPattern = new RegExp(`slug: "([^"]*${searchSlug}[^"]*)"[\\s\\S]*?title: "([^"]+)"`, 'i');
  const match = worksContent.match(workPattern);
  
  if (match) {
    console.log(`✓ Encontrado: ${book.title}`);
    console.log(`  Precio docs: ${book.price} | Precio actual: (verificar)`);
    // Actualizar datos...
  } else {
    console.log(`✗ No encontrado: ${book.title}`);
    notFound.push({ type: 'artist-book', title: book.title, slug: searchSlug });
  }
}

// Actualizar Ceramics
console.log('\n=== CERAMICS ===\n');
const ceramics = docs.portfolio_content.ceramics.items;
for (const ceramic of ceramics) {
  const slug = slugify(ceramic.title);
  const searchPatterns = [
    slug,
    slug.replace(/-/g, ''),
    slug.replace(/-in-/g, '-in-'),
    slug.replace(/burn-in-hell/g, 'burn-in-hell'),
    slug.replace(/rocket-man/g, 'rocket-man'),
    slug.replace(/fish-car/g, 'fish-car'),
    slug.replace(/safe-passage/g, 'safe-passage')
  ];
  
  let found = false;
  for (const pattern of searchPatterns) {
    const workPattern = new RegExp(`slug: "${pattern}"`, 'i');
    if (workPattern.test(worksContent)) {
      found = true;
      console.log(`✓ Encontrado: ${ceramic.title}`);
      break;
    }
  }
  
  if (!found) {
    console.log(`✗ No encontrado: ${ceramic.title}`);
    notFound.push({ type: 'ceramic', title: ceramic.title, slug });
  }
}

console.log('\n=== NO ENCONTRADOS ===');
console.log(JSON.stringify(notFound, null, 2));
