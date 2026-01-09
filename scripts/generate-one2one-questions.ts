/**
 * One2One Bible Study Question Generator
 *
 * Generates passage-specific questions for all 1,189 Bible chapters
 * using Claude API and the Andrew Cornes' 7-question methodology.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=xxx npx tsx scripts/generate-one2one-questions.ts
 *
 * Options:
 *   --book=genesis    Generate questions for a single book only
 *   --resume          Resume from last completed book
 *   --dry-run         Show what would be generated without calling API
 */

import Anthropic from '@anthropic-ai/sdk';
import * as fs from 'fs';
import * as path from 'path';

// Import chapter summaries - we'll load these dynamically
interface ChapterSummary {
  bookId: string;
  chapter: number;
  title: string;
  summary: string;
  keyThemes: string[];
  christConnection?: string;
}

interface BookChapters {
  bookId: string;
  bookName: string;
  chapters: ChapterSummary[];
}

// Output structure
interface ChapterQuestion {
  id: number;
  title: string;
  instruction: string;
  tips: string[];
  focusVerse?: string;
}

interface ChapterQuestions {
  bookId: string;
  bookName: string;
  chapter: number;
  chapterTitle: string;
  questions: ChapterQuestion[];
}

interface BookQuestions {
  bookId: string;
  bookName: string;
  totalChapters: number;
  chapters: ChapterQuestions[];
}

// The 7 Andrew Cornes questions framework
const QUESTION_FRAMEWORK = [
  {
    id: 1,
    title: 'Read Aloud',
    baseInstruction: 'Take turns reading the passage aloud together.',
    type: 'action'
  },
  {
    id: 2,
    title: 'Summary',
    baseInstruction: 'In your own words, summarize what this passage is about.',
    type: 'open_response'
  },
  {
    id: 3,
    title: 'Best Bit',
    baseInstruction: "What stood out to you the most? What's the 'best bit'?",
    type: 'open_response'
  },
  {
    id: 4,
    title: 'Main Point',
    baseInstruction: 'What is the main point or central message of this passage?',
    type: 'open_response'
  },
  {
    id: 5,
    title: 'Difficulties',
    baseInstruction: 'What difficulties or questions do you have about this passage?',
    type: 'open_response'
  },
  {
    id: 6,
    title: 'Application',
    baseInstruction: 'How will you apply this to your life? What will you do about it?',
    type: 'commitment'
  },
  {
    id: 7,
    title: 'Prayer',
    baseInstruction: "Pray together about what you've learned and your applications.",
    type: 'action'
  }
];

const client = new Anthropic();

async function generateQuestionsForChapter(
  bookName: string,
  chapter: ChapterSummary
): Promise<ChapterQuestions> {
  const prompt = `You are helping create Bible study questions for a One2One partnership study program based on Andrew Cornes' methodology.

Generate 7 customized discussion questions for ${bookName} Chapter ${chapter.chapter}: "${chapter.title}"

Chapter Context:
- Summary: ${chapter.summary}
- Key Themes: ${chapter.keyThemes.join(', ')}
${chapter.christConnection ? `- Christ Connection: ${chapter.christConnection}` : ''}

The 7 questions must follow this exact framework, but customize the instructions and tips for THIS specific chapter:

1. **Read Aloud** (action): Partners take turns reading the passage aloud
2. **Summary** (open response): Summarize the passage in own words
3. **Best Bit** (open response): What stood out most?
4. **Main Point** (open response): What is the central message?
5. **Difficulties** (open response): Questions or confusing parts?
6. **Application** (commitment): How to apply this to life?
7. **Prayer** (action): Pray together about what was learned

For each question, provide:
- A customized instruction specific to this chapter's content (1-2 sentences)
- 2-3 helpful tips specific to this passage
- Optionally, a key verse reference to focus on (just the verse numbers, e.g., "verses 3-5")

Respond in this exact JSON format:
{
  "questions": [
    {
      "id": 1,
      "title": "Read Aloud",
      "instruction": "...",
      "tips": ["...", "..."],
      "focusVerse": "verses X-Y" or null
    },
    ...7 questions total
  ]
}

Make the questions engaging, thought-provoking, and specifically relevant to ${bookName} ${chapter.chapter}'s unique content. Don't be generic - reference specific events, people, or themes from this chapter.`;

  const response = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 2000,
    messages: [{ role: 'user', content: prompt }]
  });

  // Extract JSON from response
  const content = response.content[0];
  if (content.type !== 'text') {
    throw new Error('Unexpected response type');
  }

  // Parse JSON (might be wrapped in markdown code block)
  let jsonStr = content.text;
  const jsonMatch = jsonStr.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (jsonMatch) {
    jsonStr = jsonMatch[1];
  }

  const parsed = JSON.parse(jsonStr);

  return {
    bookId: chapter.bookId,
    bookName: bookName,
    chapter: chapter.chapter,
    chapterTitle: chapter.title,
    questions: parsed.questions
  };
}

async function generateQuestionsForBook(book: BookChapters): Promise<BookQuestions> {
  console.log(`\n📖 Generating questions for ${book.bookName} (${book.chapters.length} chapters)...`);

  const chapters: ChapterQuestions[] = [];

  for (let i = 0; i < book.chapters.length; i++) {
    const chapter = book.chapters[i];
    const progress = `[${i + 1}/${book.chapters.length}]`;

    process.stdout.write(`  ${progress} Chapter ${chapter.chapter}: ${chapter.title}...`);

    try {
      const questions = await generateQuestionsForChapter(book.bookName, chapter);
      chapters.push(questions);
      console.log(' ✓');

      // Rate limiting: 50 requests/minute for Claude API
      // Add a small delay between chapters
      await sleep(1200); // 1.2 seconds between requests

    } catch (error) {
      console.log(' ✗');
      console.error(`    Error: ${error instanceof Error ? error.message : error}`);

      // On error, add a placeholder with default questions
      chapters.push({
        bookId: chapter.bookId,
        bookName: book.bookName,
        chapter: chapter.chapter,
        chapterTitle: chapter.title,
        questions: QUESTION_FRAMEWORK.map(q => ({
          id: q.id,
          title: q.title,
          instruction: q.baseInstruction,
          tips: ['Take your time to reflect on the passage.'],
          focusVerse: undefined
        }))
      });

      // Wait longer after an error
      await sleep(5000);
    }
  }

  return {
    bookId: book.bookId,
    bookName: book.bookName,
    totalChapters: book.chapters.length,
    chapters
  };
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadChapterSummaries(): Promise<BookChapters[]> {
  // Dynamically import the chapter summaries
  const summariesPath = path.join(__dirname, '../src/data/bible-chapter-summaries.ts');

  // Read the file and extract the data
  // Since we can't directly import TS, we'll use a workaround
  const dataDir = path.join(__dirname, '../src/data');

  // Try to use tsx to import
  const { ALL_CHAPTER_SUMMARIES } = await import('../src/data/bible-chapter-summaries.js');
  return ALL_CHAPTER_SUMMARIES;
}

async function main() {
  const args = process.argv.slice(2);
  const singleBook = args.find(a => a.startsWith('--book='))?.split('=')[1];
  const resume = args.includes('--resume');
  const dryRun = args.includes('--dry-run');

  console.log('🙏 One2One Bible Study Question Generator');
  console.log('=========================================\n');

  if (!process.env.ANTHROPIC_API_KEY && !dryRun) {
    console.error('Error: ANTHROPIC_API_KEY environment variable not set');
    console.error('Usage: ANTHROPIC_API_KEY=xxx npx tsx scripts/generate-one2one-questions.ts');
    process.exit(1);
  }

  // Load chapter summaries
  console.log('📚 Loading chapter summaries...');

  // Since we can't easily import the TS file, we'll read the JSON output
  // or use a pre-compiled version. For now, let's create a simpler approach:
  // Read the chapter summaries from a JSON export

  const summariesJsonPath = path.join(__dirname, '../src/data/bible-chapter-summaries.json');

  if (!fs.existsSync(summariesJsonPath)) {
    console.log('⚠️  Chapter summaries JSON not found. Creating from TS source...');
    console.log('   Run this first: npx tsx -e "import { ALL_CHAPTER_SUMMARIES } from \'./src/data/bible-chapter-summaries\'; console.log(JSON.stringify(ALL_CHAPTER_SUMMARIES))" > src/data/bible-chapter-summaries.json');
    process.exit(1);
  }

  const allBooks: BookChapters[] = JSON.parse(fs.readFileSync(summariesJsonPath, 'utf8'));

  console.log(`   Found ${allBooks.length} books with ${allBooks.reduce((sum, b) => sum + b.chapters.length, 0)} total chapters\n`);

  // Filter to single book if specified
  let booksToProcess = allBooks;
  if (singleBook) {
    booksToProcess = allBooks.filter(b => b.bookId === singleBook);
    if (booksToProcess.length === 0) {
      console.error(`Error: Book "${singleBook}" not found`);
      console.log('Available books:', allBooks.map(b => b.bookId).join(', '));
      process.exit(1);
    }
  }

  // Resume from last completed book
  const outputDir = path.join(__dirname, '../src/data/one2one-questions');
  if (resume) {
    const existingFiles = fs.readdirSync(outputDir).filter(f => f.endsWith('.json'));
    const completedBooks = existingFiles.map(f => f.replace('.json', ''));
    booksToProcess = booksToProcess.filter(b => !completedBooks.includes(b.bookId));
    console.log(`📝 Resuming... ${completedBooks.length} books already complete, ${booksToProcess.length} remaining\n`);
  }

  if (dryRun) {
    console.log('🔍 DRY RUN - Would generate questions for:');
    for (const book of booksToProcess) {
      console.log(`   - ${book.bookName}: ${book.chapters.length} chapters`);
    }
    console.log(`\n   Total: ${booksToProcess.reduce((sum, b) => sum + b.chapters.length, 0)} chapters`);
    console.log(`   Estimated time: ~${Math.ceil(booksToProcess.reduce((sum, b) => sum + b.chapters.length, 0) * 1.5 / 60)} minutes`);
    return;
  }

  // Process each book
  const startTime = Date.now();
  let totalChaptersProcessed = 0;

  for (let i = 0; i < booksToProcess.length; i++) {
    const book = booksToProcess[i];
    const bookProgress = `[${i + 1}/${booksToProcess.length}]`;

    console.log(`\n${bookProgress} Processing ${book.bookName}...`);

    const bookQuestions = await generateQuestionsForBook(book);

    // Save to JSON file
    const outputPath = path.join(outputDir, `${book.bookId}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(bookQuestions, null, 2));
    console.log(`   💾 Saved to ${book.bookId}.json`);

    totalChaptersProcessed += book.chapters.length;

    // Progress update
    const elapsed = (Date.now() - startTime) / 1000;
    const avgPerChapter = elapsed / totalChaptersProcessed;
    const remaining = booksToProcess.slice(i + 1).reduce((sum, b) => sum + b.chapters.length, 0);
    const eta = Math.ceil(avgPerChapter * remaining / 60);

    console.log(`   ⏱️  Progress: ${totalChaptersProcessed} chapters complete, ~${eta} minutes remaining`);
  }

  const totalTime = Math.ceil((Date.now() - startTime) / 1000 / 60);
  console.log(`\n✅ Generation complete!`);
  console.log(`   📊 ${totalChaptersProcessed} chapters processed in ${totalTime} minutes`);
  console.log(`   📁 Output: ${outputDir}/`);
}

main().catch(console.error);
