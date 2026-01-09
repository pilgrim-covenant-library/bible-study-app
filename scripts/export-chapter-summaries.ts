/**
 * Export chapter summaries to JSON format
 *
 * Usage: npx tsx scripts/export-chapter-summaries.ts
 */

import { ALL_CHAPTER_SUMMARIES } from '../src/data/bible-chapter-summaries';
import * as fs from 'fs';
import * as path from 'path';

const outputPath = path.join(__dirname, '../src/data/bible-chapter-summaries.json');

// Calculate stats
const totalChapters = ALL_CHAPTER_SUMMARIES.reduce((sum, book) => sum + book.chapters.length, 0);

console.log('📚 Exporting Bible Chapter Summaries to JSON...');
console.log(`   Books: ${ALL_CHAPTER_SUMMARIES.length}`);
console.log(`   Chapters: ${totalChapters}`);

fs.writeFileSync(outputPath, JSON.stringify(ALL_CHAPTER_SUMMARIES, null, 2));

console.log(`\n✅ Exported to: ${outputPath}`);
console.log(`   File size: ${(fs.statSync(outputPath).size / 1024).toFixed(1)} KB`);
