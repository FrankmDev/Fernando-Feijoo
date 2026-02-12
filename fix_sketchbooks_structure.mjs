import fs from 'fs';

const content = fs.readFileSync('src/data/works.ts', 'utf8');

// Obtener todas las imágenes de characters
const charsDir = 'src/assets/works/sketchbooks/characters';
const charFiles = fs.readdirSync(charsDir).filter(f => /\.(avif|jpg|jpeg|png)$/i.test(f));

const charWorks = charFiles.map(file => {
  const slug = file.replace(/\.[^.]+$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  const title = file.replace(/\.[^.]+$/, '').replace(/_/g, ' ').replace(/-/g, ' ');
  return `          {
            slug: "${slug}",
            title: "${title}",
            description: "Character study from sketchbook.",
            medium: "Mixed Media on Paper",
            price: "£180",
            imageUrls: ["@assets/works/sketchbooks/characters/${file}"],
          },`;
}).join('\n');

// Obtener todas las imágenes de locations
const locsDir = 'src/assets/works/sketchbooks/locations';
const locFiles = fs.readdirSync(locsDir).filter(f => /\.(avif|jpg|jpeg|png)$/i.test(f));

const locWorks = locFiles.map(file => {
  const slug = file.replace(/\.[^.]+$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  const title = file.replace(/\.[^.]+$/, '').replace(/_/g, ' ').replace(/-/g, ' ');
  return `          {
            slug: "${slug}",
            title: "${title}",
            description: "Location study from sketchbook.",
            medium: "Mixed Media on Paper",
            price: "£180",
            imageUrls: ["@assets/works/sketchbooks/locations/${file}"],
          },`;
}).join('\n');

// Archivos sueltos como colección "sketches"
const looseDir = 'src/assets/works/sketchbooks';
const looseFiles = fs.readdirSync(looseDir)
  .filter(f => /\.(avif|jpg|jpeg|png)$/i.test(f));

const looseWorks = looseFiles.map(file => {
  const slug = file.replace(/\.[^.]+$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  const title = file.replace(/\.[^.]+$/, '').replace(/([A-Z])/g, ' $1').trim();
  return `          {
            slug: "${slug}",
            title: "${title}",
            description: "Sketchbook study.",
            medium: "Mixed Media on Paper",
            price: "£180",
            imageUrls: ["@assets/works/sketchbooks/${file}"],
          },`;
}).join('\n');

const sketchbooksSection = `  {
    slug: "sketchbooks",
    title: "Sketchbooks",
    collections: [
      {
        slug: "characters",
        title: "Characters",
        description: "Studies of human figures and personalities encountered in everyday life.",
        works: [
${charWorks}
        ],
      },
      {
        slug: "locations",
        title: "Locations",
        description: "Architectural and landscape studies from various places.",
        works: [
${locWorks}
        ],
      },
      {
        slug: "sketches",
        title: "Sketches",
        description: "Various sketchbook studies and explorations.",
        works: [
${looseWorks}
        ],
      },
    ],
  },`;

// Encontrar y reemplazar la sección de sketchbooks
const sketchStart = content.indexOf('slug: "sketchbooks"');
const sectionStart = content.lastIndexOf('{', sketchStart);

let braceCount = 0;
let sectionEnd = sectionStart;
for (let i = sectionStart; i < content.length; i++) {
  if (content[i] === '{') braceCount++;
  if (content[i] === '}') {
    braceCount--;
    if (braceCount === 0) {
      sectionEnd = i + 1;
      break;
    }
  }
}

const newContent = content.slice(0, sectionStart) + sketchbooksSection + content.slice(sectionEnd);
fs.writeFileSync('src/data/works.ts', newContent);

console.log('✓ Sketchbooks reestructurado correctamente:');
console.log(`  - characters: ${charFiles.length} obras`);
console.log(`  - locations: ${locFiles.length} obras`);
console.log(`  - sketches: ${looseFiles.length} obras`);
console.log(`  Total: ${charFiles.length + locFiles.length + looseFiles.length} obras en 3 colecciones`);
