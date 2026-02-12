import fs from "fs";
const content = fs.readFileSync("src/data/works.ts", "utf8");
const lines = content.split("\n");
lines.forEach((line, i) => {
  if (line.match(/title: "|slug: "|collections: \[|works: \[/)) {
    const indent = line.search(/\S/);
    console.log(
      `${i.toString().padEnd(4)} | ${indent.toString().padEnd(2)} | ${line.trim()}`,
    );
  }
});
