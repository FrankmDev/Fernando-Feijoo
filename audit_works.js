const fs = require("fs");
const content = fs.readFileSync("src/data/works.ts", "utf8");

// Simple parser to extract hierarchy
const lines = content.split("\n");

let currentIndent = 0;
let category = null;
let collection = null;

const output = {};

lines.forEach((line, index) => {
  const trimmed = line.trim();
  const indent = line.search(/\S/);

  // Identify Categories
  // Structure: { slug: "prints", title: "Prints", ...
  // Categories are top-level array items, indentation ~2 spaces or 4 spaces

  if (trimmed.startsWith("slug:")) {
    const slugMatch = trimmed.match(/slug: "([^"]+)"/);
    if (!slugMatch) return;
    const slug = slugMatch[1];

    // Determine type by context
    // This is hard without full AST.
    // Let's look at previous/next lines or indentation.
    // Indent 4 = Category (inside WORKS array)
    // Indent 8 = Collection (inside collections array) OR Work (inside works array if no collections)
    // Indent 10+ = Work (inside collection works)

    // Let's assume standard formatting:
    // Category: indent 4
    // Collection: indent 8
    // Work in collection: indent 12
    // Work in category: indent 8? No, works array is indented.

    // Better strategy:
    // If line contains 'slug:', look for 'title:' nearby.
    // Check if 'collections: [' or 'works: [' was opened recently.
  }
});

// Regex Strategy
// Capture blocks
// This is getting complicated for a quick script.
// Let's just output lines with significant keys and indent, then I'll parse it visually/manually in the output.

console.log("--- START AUDIT ---");
lines.forEach((line) => {
  if (
    line.match(/^\s+slug: "/) ||
    line.match(/^\s+title: "/) ||
    line.match(/^\s+collections: \[/) ||
    line.match(/^\s+works: \[/)
  ) {
    console.log(line);
  }
});
console.log("--- END AUDIT ---");
