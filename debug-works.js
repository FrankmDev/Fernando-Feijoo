// Debug script to check WORKS data structure
import { WORKS } from './src/data/works.js';

console.log('🔍 Debugging WORKS data structure...\n');

let totalWorks = 0;
let worksWithoutSlug = [];
let duplicateSlugs = [];
let allSlugs = [];

WORKS.forEach((category, catIndex) => {
  console.log(`📁 Category ${catIndex + 1}: ${category.slug} (${category.title})`);

  if (!category.slug) {
    console.error(`  ❌ Category missing slug at index ${catIndex}`);
  }

  // Check direct works in category
  if (category.works) {
    console.log(`  📄 Direct works: ${category.works.length}`);

    category.works.forEach((work, workIndex) => {
      totalWorks++;

      if (!work || !work.slug) {
        worksWithoutSlug.push({
          category: category.slug,
          workIndex,
          work: work || 'undefined'
        });
        console.error(`    ❌ Work ${workIndex} missing slug:`, work);
      } else {
        if (allSlugs.includes(work.slug)) {
          duplicateSlugs.push(work.slug);
          console.error(`    ❌ Duplicate slug: ${work.slug}`);
        } else {
          allSlugs.push(work.slug);
          console.log(`    ✅ Work: ${work.slug} - "${work.title}"`);
        }
      }
    });
  }

  // Check collections
  if (category.collections) {
    console.log(`  📚 Collections: ${category.collections.length}`);

    category.collections.forEach((collection, collIndex) => {
      if (!collection || !collection.slug) {
        console.error(`    ❌ Collection ${collIndex} missing slug`);
        return;
      }

      console.log(`    📖 Collection ${collIndex + 1}: ${collection.slug} (${collection.title})`);

      if (!collection.works || !Array.isArray(collection.works)) {
        console.error(`      ❌ Collection ${collection.slug} has no works array`);
        return;
      }

      console.log(`      📄 Works in collection: ${collection.works.length}`);

      collection.works.forEach((work, workIndex) => {
        totalWorks++;

        if (!work || !work.slug) {
          worksWithoutSlug.push({
            category: category.slug,
            collection: collection.slug,
            workIndex,
            work: work || 'undefined'
          });
          console.error(`        ❌ Work ${workIndex} missing slug:`, work);
        } else {
          if (allSlugs.includes(work.slug)) {
            duplicateSlugs.push(work.slug);
            console.error(`        ❌ Duplicate slug: ${work.slug}`);
          } else {
            allSlugs.push(work.slug);
            console.log(`        ✅ Work: ${work.slug} - "${work.title}"`);
          }
        }
      });
    });
  }

  if (!category.works && !category.collections) {
    console.warn(`  ⚠️ Category ${category.slug} has no works or collections`);
  }

  console.log(''); // Empty line for readability
});

// Summary
console.log('📊 SUMMARY:');
console.log('='.repeat(50));
console.log(`Total categories: ${WORKS.length}`);
console.log(`Total works: ${totalWorks}`);
console.log(`Works with valid slugs: ${allSlugs.length}`);
console.log(`Works without slugs: ${worksWithoutSlug.length}`);
console.log(`Duplicate slugs: ${duplicateSlugs.length}`);

if (worksWithoutSlug.length > 0) {
  console.log('\n❌ WORKS WITHOUT SLUGS:');
  worksWithoutSlug.forEach((item, index) => {
    console.log(`${index + 1}. ${item.category}${item.collection ? `/${item.collection}` : ''} - Work ${item.workIndex}`);
    console.log(`   Data:`, item.work);
  });
}

if (duplicateSlugs.length > 0) {
  console.log('\n❌ DUPLICATE SLUGS:');
  duplicateSlugs.forEach((slug, index) => {
    console.log(`${index + 1}. ${slug}`);
  });
}

// Check for common issues
console.log('\n🔍 COMMON ISSUES CHECK:');
console.log('-'.repeat(30));

// Check for empty strings
const emptySlugWorks = allSlugs.filter(slug => slug === '');
if (emptySlugWorks.length > 0) {
  console.log(`❌ Found ${emptySlugWorks.length} works with empty slug strings`);
}

// Check for whitespace issues
const whitespaceIssues = allSlugs.filter(slug => slug !== slug.trim());
if (whitespaceIssues.length > 0) {
  console.log(`⚠️ Found ${whitespaceIssues.length} slugs with whitespace issues:`, whitespaceIssues);
}

// Check for invalid slug characters
const invalidSlugs = allSlugs.filter(slug => !/^[a-z0-9-]+$/.test(slug));
if (invalidSlugs.length > 0) {
  console.log(`⚠️ Found ${invalidSlugs.length} slugs with invalid characters:`, invalidSlugs);
}

console.log('\n✅ Data structure check complete!');

// Generate sample static paths for verification
console.log('\n📝 SAMPLE STATIC PATHS:');
console.log('-'.repeat(30));
allSlugs.slice(0, 5).forEach(slug => {
  console.log(`/works/${slug}`);
});
if (allSlugs.length > 5) {
  console.log(`... and ${allSlugs.length - 5} more`);
}
