import fs from 'fs';
import path from 'path';

const content = fs.readFileSync('src/data/works.ts', 'utf8');

// Función para obtener obras de una carpeta
function getWorksFromFolder(folderPath, basePath) {
  const files = fs.readdirSync(folderPath)
    .filter(f => /\.(avif|jpg|jpeg|png)$/i.test(f))
    .sort();
  
  return files.map(file => {
    const slug = file.replace(/\.[^.]+$/, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    const title = file.replace(/\.[^.]+$/, '').replace(/_/g, ' ').replace(/-/g, ' ');
    return {
      slug,
      title,
      file,
      path: `${basePath}/${file}`
    };
  });
}

// Definir las colecciones
const collections = [
  { slug: 'drawings', title: 'Drawings', folder: 'drawings' },
  { slug: 'labyrinth-of-dreams', title: 'Labyrinth of Dreams', folder: 'labyrinthOfDreams' },
  { slug: 'others', title: 'Others', folder: 'others' },
  { slug: 'paintings', title: 'Paintings', folder: 'paintings' },
  { slug: 'the-war-theatre', title: 'The War Theatre', folder: 'theWarTheatre' }
];

// Generar las colecciones con sus obras
const collectionsCode = collections.map(col => {
  const works = getWorksFromFolder(
    `src/assets/works/mixed/${col.folder}`,
    `@assets/works/mixed/${col.folder}`
  );
  
  const worksCode = works.map(w => `          {
            slug: "${w.slug}",
            title: "${w.title}",
            description: "Mixed media artwork.",
            medium: "Mixed Media",
            price: "£450",
            imageUrls: ["${w.path}"],
          },`).join('\n');
  
  return `      {
        slug: "${col.slug}",
        title: "${col.title}",
        description: "",
        works: [
${worksCode}
        ],
      },`;
}).join('\n');

const mixedSection = `  {
    slug: "mixed-media",
    title: "Mixed Media",
    collections: [
${collectionsCode}
    ],
  },`;

// Encontrar y reemplazar la sección de mixed-media
const mixedStart = content.indexOf('slug: "mixed-media"');
const sectionStart = content.lastIndexOf('{', mixedStart);

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

const newContent = content.slice(0, sectionStart) + mixedSection + content.slice(sectionEnd);
fs.writeFileSync('src/data/works.ts', newContent);

console.log('✓ Mixed Media reestructurado con 5 colecciones:');
collections.forEach(col => {
  const count = getWorksFromFolder(`src/assets/works/mixed/${col.folder}`, '').length;
  console.log(`  - ${col.title}: ${count} obras`);
});
