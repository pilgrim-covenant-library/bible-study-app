/**
 * One2One Bible Study Question Generator (Ollama/Qwen3 version)
 *
 * Generates passage-specific questions for all 1,189 Bible chapters
 * using local Qwen3 model via Ollama.
 *
 * Usage:
 *   npx tsx scripts/generate-one2one-questions-ollama.ts
 *
 * Options:
 *   --book=genesis    Generate questions for a single book only
 *   --resume          Resume from last completed book
 *   --dry-run         Show what would be generated without calling API
 *   --model=qwen3:4b  Specify Ollama model (default: qwen3:4b)
 */

import * as fs from 'fs';
import * as path from 'path';

// Types
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

// Book genre classification for context-aware prompts
const BOOK_GENRES: Record<string, string> = {
  // Torah/Pentateuch - Law + Narrative
  'genesis': 'narrative',
  'exodus': 'narrative/law',
  'leviticus': 'law',
  'numbers': 'narrative/law',
  'deuteronomy': 'law',
  // Historical Books
  'joshua': 'narrative',
  'judges': 'narrative',
  'ruth': 'narrative',
  '1-samuel': 'narrative',
  '2-samuel': 'narrative',
  '1-kings': 'narrative',
  '2-kings': 'narrative',
  '1-chronicles': 'narrative',
  '2-chronicles': 'narrative',
  'ezra': 'narrative',
  'nehemiah': 'narrative',
  'esther': 'narrative',
  // Wisdom Literature
  'job': 'wisdom/poetry',
  'psalms': 'poetry',
  'proverbs': 'wisdom',
  'ecclesiastes': 'wisdom',
  'song-of-solomon': 'poetry',
  // Major Prophets
  'isaiah': 'prophecy',
  'jeremiah': 'prophecy',
  'lamentations': 'poetry',
  'ezekiel': 'prophecy',
  'daniel': 'prophecy/apocalyptic',
  // Minor Prophets
  'hosea': 'prophecy',
  'joel': 'prophecy',
  'amos': 'prophecy',
  'obadiah': 'prophecy',
  'jonah': 'narrative',
  'micah': 'prophecy',
  'nahum': 'prophecy',
  'habakkuk': 'prophecy',
  'zephaniah': 'prophecy',
  'haggai': 'prophecy',
  'zechariah': 'prophecy',
  'malachi': 'prophecy',
  // Gospels
  'matthew': 'gospel',
  'mark': 'gospel',
  'luke': 'gospel',
  'john': 'gospel',
  // Acts
  'acts': 'narrative',
  // Pauline Epistles
  'romans': 'epistle',
  '1-corinthians': 'epistle',
  '2-corinthians': 'epistle',
  'galatians': 'epistle',
  'ephesians': 'epistle',
  'philippians': 'epistle',
  'colossians': 'epistle',
  '1-thessalonians': 'epistle',
  '2-thessalonians': 'epistle',
  '1-timothy': 'epistle',
  '2-timothy': 'epistle',
  'titus': 'epistle',
  'philemon': 'epistle',
  // General Epistles
  'hebrews': 'epistle',
  'james': 'epistle',
  '1-peter': 'epistle',
  '2-peter': 'epistle',
  '1-john': 'epistle',
  '2-john': 'epistle',
  '3-john': 'epistle',
  'jude': 'epistle',
  // Apocalyptic
  'revelation': 'apocalyptic',
};

// Author and original audience for authorial intention framing
const BOOK_CONTEXT: Record<string, { author: string; audience: string }> = {
  // Torah
  'genesis': { author: 'Moses', audience: 'the Israelites entering the Promised Land' },
  'exodus': { author: 'Moses', audience: 'the Israelites' },
  'leviticus': { author: 'Moses', audience: 'the Israelites/priests' },
  'numbers': { author: 'Moses', audience: 'the Israelites' },
  'deuteronomy': { author: 'Moses', audience: 'the new generation of Israelites' },
  // Historical
  'joshua': { author: 'Joshua/editors', audience: 'Israel' },
  'judges': { author: 'Samuel/editors', audience: 'Israel' },
  'ruth': { author: 'Samuel/unknown', audience: 'Israel' },
  '1-samuel': { author: 'Samuel/Nathan/Gad', audience: 'Israel' },
  '2-samuel': { author: 'Samuel/Nathan/Gad', audience: 'Israel' },
  '1-kings': { author: 'Jeremiah/editors', audience: 'exilic Israel' },
  '2-kings': { author: 'Jeremiah/editors', audience: 'exilic Israel' },
  '1-chronicles': { author: 'Ezra', audience: 'post-exilic Israel' },
  '2-chronicles': { author: 'Ezra', audience: 'post-exilic Israel' },
  'ezra': { author: 'Ezra', audience: 'returned exiles' },
  'nehemiah': { author: 'Nehemiah', audience: 'returned exiles' },
  'esther': { author: 'unknown', audience: 'Persian Jews' },
  // Wisdom
  'job': { author: 'unknown', audience: 'those who suffer' },
  'psalms': { author: 'David and others', audience: 'worshiping Israel' },
  'proverbs': { author: 'Solomon and others', audience: 'young men/Israel' },
  'ecclesiastes': { author: 'Solomon (the Teacher)', audience: 'those seeking meaning' },
  'song-of-solomon': { author: 'Solomon', audience: 'married couples/Israel' },
  // Major Prophets
  'isaiah': { author: 'Isaiah', audience: 'Judah' },
  'jeremiah': { author: 'Jeremiah', audience: 'Judah before exile' },
  'lamentations': { author: 'Jeremiah', audience: 'exilic Judah' },
  'ezekiel': { author: 'Ezekiel', audience: 'exiles in Babylon' },
  'daniel': { author: 'Daniel', audience: 'exiles and future generations' },
  // Minor Prophets
  'hosea': { author: 'Hosea', audience: 'northern Israel' },
  'joel': { author: 'Joel', audience: 'Judah' },
  'amos': { author: 'Amos', audience: 'northern Israel' },
  'obadiah': { author: 'Obadiah', audience: 'Edom/Judah' },
  'jonah': { author: 'Jonah', audience: 'Israel' },
  'micah': { author: 'Micah', audience: 'Judah' },
  'nahum': { author: 'Nahum', audience: 'Judah' },
  'habakkuk': { author: 'Habakkuk', audience: 'Judah' },
  'zephaniah': { author: 'Zephaniah', audience: 'Judah' },
  'haggai': { author: 'Haggai', audience: 'returned exiles' },
  'zechariah': { author: 'Zechariah', audience: 'returned exiles' },
  'malachi': { author: 'Malachi', audience: 'post-exilic Judah' },
  // Gospels
  'matthew': { author: 'Matthew', audience: 'Jewish believers' },
  'mark': { author: 'Mark', audience: 'Roman Christians' },
  'luke': { author: 'Luke', audience: 'Theophilus/Gentile believers' },
  'john': { author: 'John', audience: 'all believers' },
  // Acts
  'acts': { author: 'Luke', audience: 'Theophilus/the church' },
  // Pauline Epistles
  'romans': { author: 'Paul', audience: 'the church in Rome' },
  '1-corinthians': { author: 'Paul', audience: 'the church in Corinth' },
  '2-corinthians': { author: 'Paul', audience: 'the church in Corinth' },
  'galatians': { author: 'Paul', audience: 'the churches in Galatia' },
  'ephesians': { author: 'Paul', audience: 'the church in Ephesus' },
  'philippians': { author: 'Paul', audience: 'the church in Philippi' },
  'colossians': { author: 'Paul', audience: 'the church in Colossae' },
  '1-thessalonians': { author: 'Paul', audience: 'the church in Thessalonica' },
  '2-thessalonians': { author: 'Paul', audience: 'the church in Thessalonica' },
  '1-timothy': { author: 'Paul', audience: 'Timothy' },
  '2-timothy': { author: 'Paul', audience: 'Timothy' },
  'titus': { author: 'Paul', audience: 'Titus' },
  'philemon': { author: 'Paul', audience: 'Philemon' },
  // General Epistles
  'hebrews': { author: 'unknown', audience: 'Jewish Christians' },
  'james': { author: 'James', audience: 'the twelve tribes scattered' },
  '1-peter': { author: 'Peter', audience: 'scattered believers' },
  '2-peter': { author: 'Peter', audience: 'believers' },
  '1-john': { author: 'John', audience: 'believers' },
  '2-john': { author: 'John', audience: 'the elect lady/church' },
  '3-john': { author: 'John', audience: 'Gaius' },
  'jude': { author: 'Jude', audience: 'believers' },
  // Apocalyptic
  'revelation': { author: 'John', audience: 'the seven churches in Asia' },
};

// Default questions for fallback
const DEFAULT_QUESTIONS: Omit<ChapterQuestion, 'focusVerse'>[] = [
  {
    id: 1,
    title: 'Read Aloud',
    instruction: 'Take turns reading the passage aloud together.',
    tips: ['Read slowly and clearly', 'Pause if something strikes you']
  },
  {
    id: 2,
    title: 'Summary',
    instruction: 'In your own words, summarize what this passage is about.',
    tips: ['Keep it brief', 'Capture the main flow']
  },
  {
    id: 3,
    title: 'Best Bit',
    instruction: "What stood out to you the most? What's the 'best bit'?",
    tips: ['Share what personally resonated', 'Listen to your partner']
  },
  {
    id: 4,
    title: 'Main Point',
    instruction: 'What is the main point or central message of this passage?',
    tips: ['Think about the author\'s intent', 'Look for the big idea']
  },
  {
    id: 5,
    title: 'Difficulties',
    instruction: 'What difficulties or questions do you have about this passage?',
    tips: ['It\'s okay not to understand everything', 'Share honestly']
  },
  {
    id: 6,
    title: 'Application',
    instruction: 'What will you do about it? How will you apply this to your life?',
    tips: ['Be specific and practical', 'Think about this week']
  },
  {
    id: 7,
    title: 'Prayer',
    instruction: "Pray together about what you've learned and your applications.",
    tips: ['Thank God for what you learned', 'Pray for each other']
  }
];

// Ollama API call using chat endpoint for better structured output
async function callOllama(prompt: string, model: string): Promise<string> {
  // For Qwen3 models, add /no_think to disable thinking mode and get direct JSON output
  const isQwen3 = model.toLowerCase().includes('qwen3');
  const userPrompt = isQwen3 ? prompt + '\n\n/no_think' : prompt;

  const response = await fetch('http://localhost:11434/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that outputs ONLY valid JSON. No explanations, no markdown, no thinking, just pure JSON.'
        },
        {
          role: 'user',
          content: userPrompt
        }
      ],
      stream: false,
      format: 'json',
      options: {
        temperature: 0.7,
        num_predict: 4000, // Increased for longer JSON responses
      }
    })
  });

  if (!response.ok) {
    throw new Error(`Ollama API error: ${response.status}`);
  }

  const data = await response.json();

  // Handle Qwen3's thinking mode: check both content and thinking fields
  let content = data.message?.content || '';

  // If content is empty but thinking exists, try to extract JSON from thinking
  if (!content && data.message?.thinking) {
    const thinkingText = data.message.thinking;
    // Try to find JSON object in thinking
    const jsonMatch = thinkingText.match(/\{[\s\S]*"questions"[\s\S]*\}/);
    if (jsonMatch) {
      content = jsonMatch[0];
    }
  }

  return content;
}

async function generateQuestionsForChapter(
  bookName: string,
  chapter: ChapterSummary,
  model: string
): Promise<ChapterQuestions> {
  // Get genre and authorial context
  const genre = BOOK_GENRES[chapter.bookId] || 'narrative';
  const context = BOOK_CONTEXT[chapter.bookId] || { author: 'the author', audience: 'the original readers' };

  const prompt = `You are creating passage-specific Bible study questions using the COMA method (Context, Observation, Meaning, Application).

## Passage: ${bookName} Chapter ${chapter.chapter}: "${chapter.title}"

## Chapter Context:
- Genre: ${genre}
- Author: ${context.author}
- Original Audience: ${context.audience}
- Summary: ${chapter.summary}
- Key Themes: ${chapter.keyThemes.join(', ')}
${chapter.christConnection ? `- Christ Connection: ${chapter.christConnection}` : ''}

## Generate 7 Questions Following This Framework:

### 1. Read Aloud
- Specify WHICH VERSES to focus on
- Tips should point out specific phrases, emotional tone, or repeated words from this chapter

### 2. Summary (Observation - use 5W+H)
- Instruction should guide: "Summarize WHO does WHAT, WHERE, and WHY"
- Tips should list 2-3 key events/characters to include

### 3. Best Bit (Observation)
- Reference 2-3 specific options from THIS passage (quotes, events, or dialogue)
- Tips should explain why each option might resonate

### 4. Main Point (Authorial Intention)
- Frame as: "What was ${context.author} trying to communicate to ${context.audience} through this passage?"
- Tips should reference the author's purpose and theological significance

### 5. Difficulties (Interpretation)
- Name 2-3 specific confusing elements from THIS chapter (cultural context, unfamiliar terms, theological concepts)
- Tips should provide brief clarifications

### 6. Application
- Tie to a specific theme or action from THIS passage
- Tips should make it concrete and actionable for this week

### 7. Prayer
- Pray specifically about THIS chapter's theme/lesson
- Tips should suggest specific prayer points based on the passage content

## EXAMPLE OUTPUT (for Genesis 22):
{"questions":[
  {"id":1,"title":"Read Aloud","instruction":"Read Genesis 22:1-19 aloud, paying attention to the dialogue between Abraham and Isaac in verses 7-8.","tips":["Notice Abraham's response 'Here I am' appears three times (vv. 1, 7, 11)","Pay attention to Isaac's question and Abraham's prophetic answer in v.8"],"focusVerse":"22:1-19"},
  {"id":2,"title":"Summary","instruction":"In your own words, describe WHO is tested, WHAT God commands, WHERE it takes place, and HOW Abraham responds.","tips":["Include the three-day journey to Moriah","Note Isaac carrying the wood and Abraham carrying the fire and knife","Describe the angel's intervention and the ram"],"focusVerse":"22:1-14"},
  {"id":3,"title":"Best Bit","instruction":"What part stood out most? Consider: Abraham's obedience (v.3), Isaac's trusting question (v.7), or 'God will provide' (v.8,14)?","tips":["Abraham rose early - immediate obedience despite the cost","Isaac's innocence asking 'where is the lamb?' is poignant","The name 'The LORD will provide' becomes a lasting memorial"],"focusVerse":"22:1-14"},
  {"id":4,"title":"Main Point","instruction":"What was Moses trying to communicate to the Israelites about God through this test of Abraham?","tips":["Consider what this teaches about faith and obedience","Think about how this foreshadows God providing His own Son","Note the covenant reaffirmation in verses 15-18"],"focusVerse":"22:15-18"},
  {"id":5,"title":"Difficulties","instruction":"What parts are challenging? The command to sacrifice Isaac? Why God 'tests'? The ram appearing at the last moment?","tips":["'Testing' in Hebrew (nissah) means proving or refining faith, not tempting to sin","Child sacrifice was common in Canaan - God is showing He is different","The ram 'caught in a thicket' pictures substitutionary sacrifice"],"focusVerse":"22:1-14"},
  {"id":6,"title":"Application","instruction":"Abraham trusted God even when it didn't make sense. What situation requires you to trust God's provision this week?","tips":["Consider an area where you're holding back from full obedience","Think about something precious you need to surrender to God","How can you practice 'rising early' in obedience like Abraham?"],"focusVerse":"22:3"},
  {"id":7,"title":"Prayer","instruction":"Pray together: Thank God that He provides. Ask for Abraham-like faith to trust and obey even when it's costly.","tips":["Thank God for providing Jesus as the ultimate sacrifice","Pray for courage to obey in difficult circumstances","Ask God to strengthen your trust in His provision"],"focusVerse":"22:14"}
]}

## Now generate for ${bookName} ${chapter.chapter} - "${chapter.title}":
Output ONLY valid JSON with the exact structure shown above. Reference specific events, people, dialogue, and verses from this chapter.`;

  const response = await callOllama(prompt, model);

  // Parse the JSON response
  let jsonStr = response.trim();

  try {
    // The response might be double-encoded or have surrounding quotes
    let parsed;
    try {
      parsed = JSON.parse(jsonStr);
    } catch {
      // Try to find JSON object in the response
      const jsonMatch = jsonStr.match(/\{[\s\S]*"questions"[\s\S]*\}/);
      if (jsonMatch) {
        parsed = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('No JSON found in response');
      }
    }

    // Handle case where questions might be nested or the response structure varies
    const questions = parsed.questions || parsed;

    // Validate we have an array of questions
    if (!Array.isArray(questions)) {
      throw new Error('Questions is not an array');
    }

    // We need exactly 7 questions, pad with defaults if needed
    const finalQuestions: ChapterQuestion[] = [];
    for (let i = 0; i < 7; i++) {
      const q = questions[i];
      if (q && q.instruction) {
        finalQuestions.push({
          id: i + 1,
          title: DEFAULT_QUESTIONS[i].title,
          instruction: String(q.instruction).substring(0, 500),
          tips: Array.isArray(q.tips)
            ? q.tips.slice(0, 3).map((t: string) => String(t).substring(0, 200))
            : DEFAULT_QUESTIONS[i].tips,
          focusVerse: q.focusVerse ? String(q.focusVerse) : undefined
        });
      } else {
        // Use default for missing questions
        finalQuestions.push({
          ...DEFAULT_QUESTIONS[i],
          focusVerse: undefined
        });
      }
    }

    return {
      bookId: chapter.bookId,
      bookName: bookName,
      chapter: chapter.chapter,
      chapterTitle: chapter.title,
      questions: finalQuestions
    };
  } catch (parseError) {
    // If parsing fails, return default questions with chapter context
    console.log(' (using defaults)');
    return {
      bookId: chapter.bookId,
      bookName: bookName,
      chapter: chapter.chapter,
      chapterTitle: chapter.title,
      questions: DEFAULT_QUESTIONS.map(q => ({
        ...q,
        instruction: q.instruction.replace('the passage', `${bookName} ${chapter.chapter}`),
        focusVerse: undefined
      }))
    };
  }
}

async function generateQuestionsForBook(book: BookChapters, model: string): Promise<BookQuestions> {
  console.log(`\n📖 Generating questions for ${book.bookName} (${book.chapters.length} chapters)...`);

  const chapters: ChapterQuestions[] = [];

  for (let i = 0; i < book.chapters.length; i++) {
    const chapter = book.chapters[i];
    const progress = `[${i + 1}/${book.chapters.length}]`;

    process.stdout.write(`  ${progress} Chapter ${chapter.chapter}: ${chapter.title.substring(0, 30)}...`);

    try {
      const questions = await generateQuestionsForChapter(book.bookName, chapter, model);
      chapters.push(questions);
      console.log(' ✓');

      // Small delay to prevent overwhelming Ollama
      await sleep(100);

    } catch (error) {
      console.log(' ✗');
      console.error(`    Error: ${error instanceof Error ? error.message : error}`);

      // Add placeholder with default questions
      chapters.push({
        bookId: chapter.bookId,
        bookName: book.bookName,
        chapter: chapter.chapter,
        chapterTitle: chapter.title,
        questions: DEFAULT_QUESTIONS.map(q => ({ ...q, focusVerse: undefined }))
      });

      await sleep(500);
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

async function main() {
  const args = process.argv.slice(2);
  const singleBook = args.find(a => a.startsWith('--book='))?.split('=')[1];
  const resume = args.includes('--resume');
  const dryRun = args.includes('--dry-run');
  const model = args.find(a => a.startsWith('--model='))?.split('=')[1] || 'qwen3:4b';

  console.log('🙏 One2One Bible Study Question Generator (Ollama)');
  console.log('==================================================');
  console.log(`   Model: ${model}`);
  console.log('');

  // Check Ollama is running
  try {
    const response = await fetch('http://localhost:11434/api/tags');
    if (!response.ok) throw new Error('Ollama not responding');
    console.log('✓ Ollama is running\n');
  } catch {
    console.error('Error: Ollama is not running. Start it with: ollama serve');
    process.exit(1);
  }

  // Load chapter summaries
  console.log('📚 Loading chapter summaries...');
  const summariesJsonPath = path.join(__dirname, '../src/data/bible-chapter-summaries.json');

  if (!fs.existsSync(summariesJsonPath)) {
    console.log('⚠️  Chapter summaries JSON not found. Creating...');
    console.log('   Run: npx tsx scripts/export-chapter-summaries.ts');
    process.exit(1);
  }

  const allBooks: BookChapters[] = JSON.parse(fs.readFileSync(summariesJsonPath, 'utf8'));
  console.log(`   Found ${allBooks.length} books with ${allBooks.reduce((sum, b) => sum + b.chapters.length, 0)} total chapters\n`);

  // Filter books
  let booksToProcess = allBooks;
  if (singleBook) {
    booksToProcess = allBooks.filter(b => b.bookId === singleBook);
    if (booksToProcess.length === 0) {
      console.error(`Error: Book "${singleBook}" not found`);
      console.log('Available books:', allBooks.map(b => b.bookId).join(', '));
      process.exit(1);
    }
  }

  // Resume support
  const outputDir = path.join(__dirname, '../src/data/one2one-questions');
  if (resume) {
    const existingFiles = fs.readdirSync(outputDir).filter(f => f.endsWith('.json') && f !== 'index.ts');
    const completedBooks = existingFiles.map(f => f.replace('.json', ''));
    booksToProcess = booksToProcess.filter(b => !completedBooks.includes(b.bookId));
    console.log(`📝 Resuming... ${completedBooks.length} books already complete, ${booksToProcess.length} remaining\n`);
  }

  if (dryRun) {
    console.log('🔍 DRY RUN - Would generate questions for:');
    for (const book of booksToProcess) {
      console.log(`   - ${book.bookName}: ${book.chapters.length} chapters`);
    }
    const totalChapters = booksToProcess.reduce((sum, b) => sum + b.chapters.length, 0);
    console.log(`\n   Total: ${totalChapters} chapters`);
    console.log(`   Estimated time: ~${Math.ceil(totalChapters * 3 / 60)} minutes (at ~3s/chapter)`);
    return;
  }

  // Process books
  const startTime = Date.now();
  let totalChaptersProcessed = 0;

  for (let i = 0; i < booksToProcess.length; i++) {
    const book = booksToProcess[i];
    const bookProgress = `[${i + 1}/${booksToProcess.length}]`;

    console.log(`\n${bookProgress} Processing ${book.bookName}...`);

    const bookQuestions = await generateQuestionsForBook(book, model);

    // Save to JSON
    const outputPath = path.join(outputDir, `${book.bookId}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(bookQuestions, null, 2));
    console.log(`   💾 Saved to ${book.bookId}.json`);

    totalChaptersProcessed += book.chapters.length;

    // Progress update
    const elapsed = (Date.now() - startTime) / 1000;
    const avgPerChapter = elapsed / totalChaptersProcessed;
    const remaining = booksToProcess.slice(i + 1).reduce((sum, b) => sum + b.chapters.length, 0);
    const eta = Math.ceil(avgPerChapter * remaining / 60);

    console.log(`   ⏱️  Progress: ${totalChaptersProcessed} chapters, ~${eta} min remaining`);
  }

  const totalTime = Math.ceil((Date.now() - startTime) / 1000 / 60);
  console.log(`\n✅ Generation complete!`);
  console.log(`   📊 ${totalChaptersProcessed} chapters processed in ${totalTime} minutes`);
  console.log(`   📁 Output: ${outputDir}/`);
}

main().catch(console.error);
