import fs from 'fs';

const content = fs.readFileSync('src/data/works.ts', 'utf8');

// Crear la nueva sección de mixed-media con TODAS las obras
const mixedSection = `  {
    slug: "mixed-media",
    title: "Mixed Media",
    works: [
      // labyrinthOfDreams - 12 obras individuales
      {
        slug: "arrogance",
        title: "Arrogance",
        description: "Exploring the theme of arrogance through mixed media.",
        medium: "Mixed Media",
        price: "£620",
        imageUrls: ["@assets/works/mixed/labyrinthOfDreams/arrogance.avif"],
      },
      {
        slug: "condemnation",
        title: "Condemnation",
        description: "A meditation on judgment and condemnation.",
        medium: "Mixed Media",
        price: "£620",
        imageUrls: ["@assets/works/mixed/labyrinthOfDreams/condemnation.avif"],
      },
      {
        slug: "creation",
        title: "Creation",
        description: "The act of creation and origins.",
        medium: "Mixed Media",
        price: "£620",
        imageUrls: ["@assets/works/mixed/labyrinthOfDreams/creation.avif"],
      },
      {
        slug: "evasion",
        title: "Evasion",
        description: "Themes of escape and avoidance.",
        medium: "Mixed Media",
        price: "£620",
        imageUrls: ["@assets/works/mixed/labyrinthOfDreams/evasion.avif"],
      },
      {
        slug: "greed",
        title: "Greed",
        description: "An exploration of desire and excess.",
        medium: "Mixed Media",
        price: "£620",
        imageUrls: ["@assets/works/mixed/labyrinthOfDreams/greed.avif"],
      },
      {
        slug: "hunter",
        title: "Hunter",
        description: "The pursuit and the pursued.",
        medium: "Mixed Media",
        price: "£620",
        imageUrls: ["@assets/works/mixed/labyrinthOfDreams/hunter.avif"],
      },
      {
        slug: "ilumination",
        title: "Ilumination",
        description: "Light, knowledge and revelation.",
        medium: "Mixed Media",
        price: "£620",
        imageUrls: ["@assets/works/mixed/labyrinthOfDreams/ilumination.avif"],
      },
      {
        slug: "lost",
        title: "Lost",
        description: "Being lost in the labyrinth of dreams.",
        medium: "Mixed Media",
        price: "£620",
        imageUrls: ["@assets/works/mixed/labyrinthOfDreams/lost.avif"],
      },
      {
        slug: "obssesion",
        title: "Obssesion",
        description: "The grip of obsession.",
        medium: "Mixed Media",
        price: "£620",
        imageUrls: ["@assets/works/mixed/labyrinthOfDreams/obssesion.avif"],
      },
      {
        slug: "persuasion",
        title: "Persuasion",
        description: "The art of influence.",
        medium: "Mixed Media",
        price: "£620",
        imageUrls: ["@assets/works/mixed/labyrinthOfDreams/persuasion.avif"],
      },
      {
        slug: "reality",
        title: "Reality",
        description: "Questioning what is real.",
        medium: "Mixed Media",
        price: "£620",
        imageUrls: ["@assets/works/mixed/labyrinthOfDreams/reality.avif"],
      },
      {
        slug: "the-final-bow",
        title: "The Final Bow",
        description: "The end of the performance.",
        medium: "Mixed Media",
        price: "£620",
        imageUrls: ["@assets/works/mixed/labyrinthOfDreams/theFinalBow.avif"],
      },
      // theWarTheatre - 6 obras
      {
        slug: "the-war-theatre-1",
        title: "The War Theatre 1",
        description: "Dramatic composition exploring conflict.",
        medium: "Mixed Media",
        price: "£450",
        imageUrls: ["@assets/works/mixed/theWarTheatre/1.avif"],
      },
      {
        slug: "the-war-theatre-2",
        title: "The War Theatre 2",
        description: "Dramatic composition exploring conflict.",
        medium: "Mixed Media",
        price: "£450",
        imageUrls: ["@assets/works/mixed/theWarTheatre/2.avif"],
      },
      {
        slug: "the-war-theatre-3",
        title: "The War Theatre 3",
        description: "Dramatic composition exploring conflict.",
        medium: "Mixed Media",
        price: "£450",
        imageUrls: ["@assets/works/mixed/theWarTheatre/3.avif"],
      },
      {
        slug: "the-war-theatre-4",
        title: "The War Theatre 4",
        description: "Dramatic composition exploring conflict.",
        medium: "Mixed Media",
        price: "£450",
        imageUrls: ["@assets/works/mixed/theWarTheatre/4.avif"],
      },
      {
        slug: "the-war-theatre-5",
        title: "The War Theatre 5",
        description: "Dramatic composition exploring conflict.",
        medium: "Mixed Media",
        price: "£450",
        imageUrls: ["@assets/works/mixed/theWarTheatre/5.avif"],
      },
      {
        slug: "the-war-theatre-6",
        title: "The War Theatre 6",
        description: "Dramatic composition exploring conflict.",
        medium: "Mixed Media",
        price: "£450",
        imageUrls: ["@assets/works/mixed/theWarTheatre/6.avif"],
      },
      // Archivos sueltos - 12 obras
      {
        slug: "cadaques-church-spain",
        title: "Cadaques Church Spain",
        description: "Mixed media artwork capturing the essence of Cadaques.",
        medium: "Mixed Media",
        price: "£350",
        imageUrls: ["@assets/works/mixed/Cadaques Church Spain.avif"],
      },
      {
        slug: "castel-de-ferro-beach",
        title: "Castel de Ferro Beach",
        description: "Coastal scene rendered in mixed media.",
        medium: "Mixed Media",
        price: "£350",
        imageUrls: ["@assets/works/mixed/Castel_de_Ferro_beach.avif"],
      },
      {
        slug: "castel-de-ferro-spain",
        title: "Castel de Ferro Spain",
        description: "Spanish landscape study.",
        medium: "Mixed Media",
        price: "£350",
        imageUrls: ["@assets/works/mixed/Castel_de_Ferro_Spain.avif"],
      },
      {
        slug: "cruzcampo",
        title: "Cruzcampo",
        description: "Urban scene capturing local culture.",
        medium: "Mixed Media",
        price: "£350",
        imageUrls: ["@assets/works/mixed/Cruzcampo.avif"],
      },
      {
        slug: "luchador",
        title: "Luchador",
        description: "Portrait of a wrestler.",
        medium: "Mixed Media",
        price: "£700",
        imageUrls: ["@assets/works/mixed/luchador.avif"],
      },
      {
        slug: "malaga-port",
        title: "Malaga Port",
        description: "Harbor scene in mixed media.",
        medium: "Mixed Media",
        price: "£350",
        imageUrls: ["@assets/works/mixed/Malaga_Port.avif"],
      },
      {
        slug: "old-cinema-malaga",
        title: "Old Cinema Malaga",
        description: "Architectural study of historic cinema.",
        medium: "Mixed Media",
        price: "£350",
        imageUrls: ["@assets/works/mixed/Old_Cinema_Malaga.avif"],
      },
      {
        slug: "pagannini",
        title: "Pagannini",
        description: "Portrait study.",
        medium: "Mixed Media",
        price: "£700",
        imageUrls: ["@assets/works/mixed/pagannini.avif"],
      },
      {
        slug: "plaza-de-la-corredera-cordoba-spain",
        title: "Plaza de la Corredera, Cordoba Spain",
        description: "Spanish plaza scene.",
        medium: "Mixed Media",
        price: "£350",
        imageUrls: ["@assets/works/mixed/Plaza_de_la_Corredera,_Cordoba_Spain.avif"],
      },
      {
        slug: "puta-gallina",
        title: "Puta Gallina",
        description: "Character study.",
        medium: "Mixed Media",
        price: "£700",
        imageUrls: ["@assets/works/mixed/putaGallina.avif"],
      },
      {
        slug: "view-into-the-distance",
        title: "View Into The Distance",
        description: "Landscape perspective study.",
        medium: "Mixed Media",
        price: "£350",
        imageUrls: ["@assets/works/mixed/viewIntoTheDistance.avif"],
      },
      {
        slug: "waves",
        title: "Waves",
        description: "Ocean study in mixed media.",
        medium: "Mixed Media",
        price: "£350",
        imageUrls: ["@assets/works/mixed/waves.avif"],
      },
    ],
  },`;

// Encontrar y reemplazar la sección de mixed-media
const mixedStart = content.indexOf('slug: "mixed-media"');
const sectionStart = content.lastIndexOf('{', mixedStart);

// Encontrar el final de la sección
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

console.log('✓ Mixed Media reestructurado con 30 obras:');
console.log('  - 12 obras de labyrinthOfDreams');
console.log('  - 6 obras de theWarTheatre');
console.log('  - 12 obras de archivos sueltos');
