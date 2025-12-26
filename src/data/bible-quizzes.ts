/**
 * Bible Quiz Questions
 *
 * ~200 questions covering all 66 books of the Bible
 * Organized by category and difficulty level
 */

export type QuizCategory =
  | 'identification' // Identify book from description/theme
  | 'author' // Match book with author
  | 'content' // Questions about book content
  | 'key_verse' // Identify book from key verse
  | 'canonical_order'; // Placement in canon

export interface BibleQuizQuestion {
  id: string;
  bookId: string; // Which book this tests
  category: QuizCategory;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  correctAnswer: string;
  distractors: string[]; // 3 wrong answers
  explanation?: string;
}

export const BIBLE_QUIZ_QUESTIONS: BibleQuizQuestion[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // LAW / PENTATEUCH (Genesis - Deuteronomy)
  // ═══════════════════════════════════════════════════════════════════════════

  // Genesis (3 questions)
  {
    id: 'gen-001',
    bookId: 'genesis',
    category: 'identification',
    difficulty: 'easy',
    question: 'Which book of the Bible begins with "In the beginning, God created the heavens and the earth"?',
    correctAnswer: 'Genesis',
    distractors: ['John', 'Psalms', 'Isaiah'],
    explanation: 'Genesis 1:1 opens with these iconic words establishing God as Creator.',
  },
  {
    id: 'gen-002',
    bookId: 'genesis',
    category: 'content',
    difficulty: 'easy',
    question: 'In which book does God make His covenant with Abraham?',
    correctAnswer: 'Genesis',
    distractors: ['Exodus', 'Deuteronomy', 'Joshua'],
    explanation: 'Genesis 12-17 records God\'s covenant promises to Abraham.',
  },
  {
    id: 'gen-003',
    bookId: 'genesis',
    category: 'content',
    difficulty: 'medium',
    question: 'Which book contains the account of Joseph being sold into slavery by his brothers?',
    correctAnswer: 'Genesis',
    distractors: ['Exodus', 'Judges', 'Ruth'],
    explanation: 'Genesis 37 tells the story of Joseph being sold by his jealous brothers.',
  },

  // Exodus (3 questions)
  {
    id: 'exo-001',
    bookId: 'exodus',
    category: 'identification',
    difficulty: 'easy',
    question: 'Which book records the Ten Commandments given at Mount Sinai?',
    correctAnswer: 'Exodus',
    distractors: ['Leviticus', 'Deuteronomy', 'Numbers'],
    explanation: 'Exodus 20 contains the giving of the Ten Commandments.',
  },
  {
    id: 'exo-002',
    bookId: 'exodus',
    category: 'content',
    difficulty: 'easy',
    question: 'Which book describes the ten plagues on Egypt?',
    correctAnswer: 'Exodus',
    distractors: ['Genesis', 'Numbers', 'Deuteronomy'],
    explanation: 'Exodus 7-12 records the ten plagues God sent upon Egypt.',
  },
  {
    id: 'exo-003',
    bookId: 'exodus',
    category: 'content',
    difficulty: 'medium',
    question: 'Which book contains the instructions for building the tabernacle?',
    correctAnswer: 'Exodus',
    distractors: ['Leviticus', 'Numbers', '1 Kings'],
    explanation: 'Exodus 25-40 provides detailed instructions for the tabernacle.',
  },

  // Leviticus (3 questions)
  {
    id: 'lev-001',
    bookId: 'leviticus',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which book primarily contains laws about sacrifices and priestly duties?',
    correctAnswer: 'Leviticus',
    distractors: ['Exodus', 'Numbers', 'Deuteronomy'],
    explanation: 'Leviticus is the handbook for priests, detailing sacrificial laws.',
  },
  {
    id: 'lev-002',
    bookId: 'leviticus',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which book contains "Love your neighbor as yourself" (19:18)?',
    correctAnswer: 'Leviticus',
    distractors: ['Deuteronomy', 'Matthew', 'Romans'],
    explanation: 'This command first appears in Leviticus 19:18, later quoted by Jesus.',
  },
  {
    id: 'lev-003',
    bookId: 'leviticus',
    category: 'content',
    difficulty: 'hard',
    question: 'Which book describes the Day of Atonement (Yom Kippur) rituals?',
    correctAnswer: 'Leviticus',
    distractors: ['Exodus', 'Numbers', 'Hebrews'],
    explanation: 'Leviticus 16 gives detailed instructions for the Day of Atonement.',
  },

  // Numbers (3 questions)
  {
    id: 'num-001',
    bookId: 'numbers',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which book records Israel\'s 40 years of wilderness wandering?',
    correctAnswer: 'Numbers',
    distractors: ['Exodus', 'Deuteronomy', 'Joshua'],
    explanation: 'Numbers covers the wilderness period from Sinai to the plains of Moab.',
  },
  {
    id: 'num-002',
    bookId: 'numbers',
    category: 'content',
    difficulty: 'medium',
    question: 'Which book contains the story of Balaam and his talking donkey?',
    correctAnswer: 'Numbers',
    distractors: ['Deuteronomy', 'Judges', 'Joshua'],
    explanation: 'Numbers 22-24 records the account of Balaam and his donkey.',
  },
  {
    id: 'num-003',
    bookId: 'numbers',
    category: 'content',
    difficulty: 'medium',
    question: 'In which book do the twelve spies explore Canaan?',
    correctAnswer: 'Numbers',
    distractors: ['Deuteronomy', 'Joshua', 'Exodus'],
    explanation: 'Numbers 13-14 records the spy mission and Israel\'s failure to trust God.',
  },

  // Deuteronomy (3 questions)
  {
    id: 'deu-001',
    bookId: 'deuteronomy',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which book contains Moses\' farewell speeches to Israel?',
    correctAnswer: 'Deuteronomy',
    distractors: ['Numbers', 'Joshua', 'Exodus'],
    explanation: 'Deuteronomy means "second law" - Moses restates the law before his death.',
  },
  {
    id: 'deu-002',
    bookId: 'deuteronomy',
    category: 'key_verse',
    difficulty: 'easy',
    question: 'Which book contains the Shema: "Hear, O Israel: The LORD our God, the LORD is one" (6:4)?',
    correctAnswer: 'Deuteronomy',
    distractors: ['Exodus', 'Leviticus', 'Psalms'],
    explanation: 'The Shema in Deuteronomy 6:4-9 is Israel\'s central confession of faith.',
  },
  {
    id: 'deu-003',
    bookId: 'deuteronomy',
    category: 'content',
    difficulty: 'medium',
    question: 'Which book records the death of Moses?',
    correctAnswer: 'Deuteronomy',
    distractors: ['Numbers', 'Joshua', 'Exodus'],
    explanation: 'Deuteronomy 34 records Moses\' death on Mount Nebo.',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // HISTORICAL BOOKS (Joshua - Esther)
  // ═══════════════════════════════════════════════════════════════════════════

  // Joshua (3 questions)
  {
    id: 'jos-001',
    bookId: 'joshua',
    category: 'identification',
    difficulty: 'easy',
    question: 'Which book records the conquest and division of the Promised Land?',
    correctAnswer: 'Joshua',
    distractors: ['Judges', 'Numbers', 'Deuteronomy'],
    explanation: 'Joshua chronicles Israel\'s entrance and settlement in Canaan.',
  },
  {
    id: 'jos-002',
    bookId: 'joshua',
    category: 'content',
    difficulty: 'easy',
    question: 'Which book describes the walls of Jericho falling down?',
    correctAnswer: 'Joshua',
    distractors: ['Judges', 'Numbers', '1 Samuel'],
    explanation: 'Joshua 6 records the miraculous conquest of Jericho.',
  },
  {
    id: 'jos-003',
    bookId: 'joshua',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which book contains: "As for me and my house, we will serve the LORD" (24:15)?',
    correctAnswer: 'Joshua',
    distractors: ['Deuteronomy', 'Psalms', '1 Samuel'],
    explanation: 'Joshua speaks these words in his farewell challenge to Israel.',
  },

  // Judges (3 questions)
  {
    id: 'jdg-001',
    bookId: 'judges',
    category: 'identification',
    difficulty: 'easy',
    question: 'Which book describes a cycle of sin, oppression, and deliverance through leaders like Gideon and Samson?',
    correctAnswer: 'Judges',
    distractors: ['Joshua', '1 Samuel', '2 Kings'],
    explanation: 'Judges records the repeated cycle of Israel\'s apostasy and God\'s deliverance.',
  },
  {
    id: 'jdg-002',
    bookId: 'judges',
    category: 'content',
    difficulty: 'medium',
    question: 'Which book contains the story of Deborah the prophetess?',
    correctAnswer: 'Judges',
    distractors: ['1 Samuel', '2 Kings', 'Ruth'],
    explanation: 'Judges 4-5 records Deborah\'s leadership and victory over Sisera.',
  },
  {
    id: 'jdg-003',
    bookId: 'judges',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which book ends with: "Everyone did what was right in his own eyes" (21:25)?',
    correctAnswer: 'Judges',
    distractors: ['1 Samuel', 'Proverbs', '2 Chronicles'],
    explanation: 'This refrain summarizes the moral chaos of the judges period.',
  },

  // Ruth (3 questions)
  {
    id: 'rut-001',
    bookId: 'ruth',
    category: 'identification',
    difficulty: 'easy',
    question: 'Which book tells the story of a Moabite woman who became an ancestor of King David?',
    correctAnswer: 'Ruth',
    distractors: ['Esther', 'Judges', '1 Samuel'],
    explanation: 'Ruth, a Moabite, married Boaz and was David\'s great-grandmother.',
  },
  {
    id: 'rut-002',
    bookId: 'ruth',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which book contains: "Where you go I will go...your people shall be my people" (1:16)?',
    correctAnswer: 'Ruth',
    distractors: ['Song of Solomon', 'Esther', 'Genesis'],
    explanation: 'Ruth speaks these words of loyalty to her mother-in-law Naomi.',
  },
  {
    id: 'rut-003',
    bookId: 'ruth',
    category: 'content',
    difficulty: 'medium',
    question: 'Which book features Boaz as a kinsman-redeemer?',
    correctAnswer: 'Ruth',
    distractors: ['Judges', '1 Samuel', 'Esther'],
    explanation: 'Boaz redeems Ruth through the kinsman-redeemer custom.',
  },

  // 1 Samuel (3 questions)
  {
    id: '1sa-001',
    bookId: '1-samuel',
    category: 'identification',
    difficulty: 'easy',
    question: 'Which book records the anointing of both Saul and David as kings?',
    correctAnswer: '1 Samuel',
    distractors: ['2 Samuel', '1 Kings', 'Judges'],
    explanation: '1 Samuel records Samuel anointing both Saul (ch. 10) and David (ch. 16).',
  },
  {
    id: '1sa-002',
    bookId: '1-samuel',
    category: 'content',
    difficulty: 'easy',
    question: 'Which book contains the story of David and Goliath?',
    correctAnswer: '1 Samuel',
    distractors: ['2 Samuel', 'Judges', '1 Chronicles'],
    explanation: '1 Samuel 17 records David\'s victory over the Philistine giant.',
  },
  {
    id: '1sa-003',
    bookId: '1-samuel',
    category: 'content',
    difficulty: 'medium',
    question: 'In which book does Hannah dedicate her son Samuel to the LORD?',
    correctAnswer: '1 Samuel',
    distractors: ['Judges', '2 Samuel', '1 Kings'],
    explanation: '1 Samuel 1-2 records Hannah\'s prayer and dedication of Samuel.',
  },

  // 2 Samuel (3 questions)
  {
    id: '2sa-001',
    bookId: '2-samuel',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which book focuses entirely on David\'s reign as king?',
    correctAnswer: '2 Samuel',
    distractors: ['1 Samuel', '1 Kings', '1 Chronicles'],
    explanation: '2 Samuel covers David\'s entire kingship, triumphs and failures.',
  },
  {
    id: '2sa-002',
    bookId: '2-samuel',
    category: 'content',
    difficulty: 'medium',
    question: 'Which book records God\'s covenant promise to establish David\'s throne forever?',
    correctAnswer: '2 Samuel',
    distractors: ['1 Samuel', 'Psalms', '1 Kings'],
    explanation: '2 Samuel 7 contains the Davidic covenant, foundational for messianic hope.',
  },
  {
    id: '2sa-003',
    bookId: '2-samuel',
    category: 'content',
    difficulty: 'medium',
    question: 'Which book records David\'s sin with Bathsheba and Nathan\'s confrontation?',
    correctAnswer: '2 Samuel',
    distractors: ['1 Samuel', '1 Kings', 'Psalms'],
    explanation: '2 Samuel 11-12 records this pivotal sin and its consequences.',
  },

  // 1 Kings (3 questions)
  {
    id: '1ki-001',
    bookId: '1-kings',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which book records Solomon building the temple in Jerusalem?',
    correctAnswer: '1 Kings',
    distractors: ['2 Samuel', '2 Chronicles', 'Ezra'],
    explanation: '1 Kings 5-8 describes Solomon\'s construction and dedication of the temple.',
  },
  {
    id: '1ki-002',
    bookId: '1-kings',
    category: 'content',
    difficulty: 'medium',
    question: 'Which book contains Elijah\'s confrontation with the prophets of Baal on Mount Carmel?',
    correctAnswer: '1 Kings',
    distractors: ['2 Kings', 'Judges', '2 Chronicles'],
    explanation: '1 Kings 18 records this dramatic showdown proving the LORD is God.',
  },
  {
    id: '1ki-003',
    bookId: '1-kings',
    category: 'content',
    difficulty: 'medium',
    question: 'Which book records the kingdom dividing into Israel and Judah?',
    correctAnswer: '1 Kings',
    distractors: ['2 Kings', '2 Samuel', '2 Chronicles'],
    explanation: '1 Kings 12 records the division under Rehoboam and Jeroboam.',
  },

  // 2 Kings (3 questions)
  {
    id: '2ki-001',
    bookId: '2-kings',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which book records the fall of both Israel (to Assyria) and Judah (to Babylon)?',
    correctAnswer: '2 Kings',
    distractors: ['1 Kings', '2 Chronicles', 'Jeremiah'],
    explanation: '2 Kings chronicles both kingdoms\' downfall due to unfaithfulness.',
  },
  {
    id: '2ki-002',
    bookId: '2-kings',
    category: 'content',
    difficulty: 'medium',
    question: 'Which book records Elijah being taken up to heaven in a chariot of fire?',
    correctAnswer: '2 Kings',
    distractors: ['1 Kings', 'Ezekiel', 'Daniel'],
    explanation: '2 Kings 2 describes Elijah\'s dramatic departure and Elisha\'s succession.',
  },
  {
    id: '2ki-003',
    bookId: '2-kings',
    category: 'content',
    difficulty: 'hard',
    question: 'Which book records King Josiah\'s reform after finding the Book of the Law?',
    correctAnswer: '2 Kings',
    distractors: ['2 Chronicles', '1 Kings', 'Ezra'],
    explanation: '2 Kings 22-23 describes Josiah\'s discovery and reforms.',
  },

  // 1 Chronicles (3 questions)
  {
    id: '1ch-001',
    bookId: '1-chronicles',
    category: 'identification',
    difficulty: 'hard',
    question: 'Which book begins with extensive genealogies from Adam to the post-exilic period?',
    correctAnswer: '1 Chronicles',
    distractors: ['Genesis', 'Matthew', 'Ezra'],
    explanation: '1 Chronicles 1-9 contains genealogies establishing Israel\'s heritage.',
  },
  {
    id: '1ch-002',
    bookId: '1-chronicles',
    category: 'content',
    difficulty: 'hard',
    question: 'Which book emphasizes David\'s preparations for temple worship and the Levitical system?',
    correctAnswer: '1 Chronicles',
    distractors: ['2 Samuel', '1 Kings', 'Leviticus'],
    explanation: '1 Chronicles highlights David\'s organization of temple worship.',
  },
  {
    id: '1ch-003',
    bookId: '1-chronicles',
    category: 'author',
    difficulty: 'hard',
    question: 'Which book was likely written by Ezra to encourage post-exilic Israel?',
    correctAnswer: '1 Chronicles',
    distractors: ['Ezra', 'Nehemiah', 'Haggai'],
    explanation: 'Ezra likely compiled Chronicles to remind returning exiles of their heritage.',
  },

  // 2 Chronicles (3 questions)
  {
    id: '2ch-001',
    bookId: '2-chronicles',
    category: 'identification',
    difficulty: 'hard',
    question: 'Which book focuses exclusively on the kings of Judah (not Israel)?',
    correctAnswer: '2 Chronicles',
    distractors: ['2 Kings', '1 Kings', '1 Chronicles'],
    explanation: '2 Chronicles follows only the Davidic line, emphasizing Judah\'s kings.',
  },
  {
    id: '2ch-002',
    bookId: '2-chronicles',
    category: 'content',
    difficulty: 'medium',
    question: 'Which book records Solomon\'s prayer at the temple dedication with the promise: "If my people...humble themselves and pray"?',
    correctAnswer: '2 Chronicles',
    distractors: ['1 Kings', '1 Chronicles', 'Psalms'],
    explanation: '2 Chronicles 7:14 contains this famous promise of restoration.',
  },
  {
    id: '2ch-003',
    bookId: '2-chronicles',
    category: 'content',
    difficulty: 'hard',
    question: 'Which book ends with Cyrus\'s decree allowing Jews to return from Babylon?',
    correctAnswer: '2 Chronicles',
    distractors: ['Ezra', 'Nehemiah', 'Daniel'],
    explanation: '2 Chronicles ends where Ezra begins - with the return from exile.',
  },

  // Ezra (3 questions)
  {
    id: 'ezr-001',
    bookId: 'ezra',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which book records the return of Jewish exiles from Babylon and rebuilding the temple?',
    correctAnswer: 'Ezra',
    distractors: ['Nehemiah', '2 Chronicles', 'Haggai'],
    explanation: 'Ezra chronicles two returns from exile and temple reconstruction.',
  },
  {
    id: 'ezr-002',
    bookId: 'ezra',
    category: 'content',
    difficulty: 'hard',
    question: 'Which book records Ezra\'s prayer of confession about intermarriage with foreign peoples?',
    correctAnswer: 'Ezra',
    distractors: ['Nehemiah', 'Malachi', 'Daniel'],
    explanation: 'Ezra 9-10 addresses the crisis of intermarriage among the returnees.',
  },
  {
    id: 'ezr-003',
    bookId: 'ezra',
    category: 'author',
    difficulty: 'medium',
    question: 'Which book was written by a priest and scribe skilled in the Law of Moses?',
    correctAnswer: 'Ezra',
    distractors: ['Nehemiah', 'Malachi', 'Haggai'],
    explanation: 'Ezra was a priest and scribe who led spiritual reform among the returnees.',
  },

  // Nehemiah (3 questions)
  {
    id: 'neh-001',
    bookId: 'nehemiah',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which book records the rebuilding of Jerusalem\'s walls?',
    correctAnswer: 'Nehemiah',
    distractors: ['Ezra', 'Haggai', '2 Chronicles'],
    explanation: 'Nehemiah led the rebuilding of Jerusalem\'s walls in just 52 days.',
  },
  {
    id: 'neh-002',
    bookId: 'nehemiah',
    category: 'content',
    difficulty: 'medium',
    question: 'Which book features a cupbearer to the Persian king who became a governor?',
    correctAnswer: 'Nehemiah',
    distractors: ['Ezra', 'Esther', 'Daniel'],
    explanation: 'Nehemiah served King Artaxerxes before becoming governor of Judah.',
  },
  {
    id: 'neh-003',
    bookId: 'nehemiah',
    category: 'content',
    difficulty: 'hard',
    question: 'Which book describes Ezra reading the Law publicly while the people wept?',
    correctAnswer: 'Nehemiah',
    distractors: ['Ezra', '2 Chronicles', 'Deuteronomy'],
    explanation: 'Nehemiah 8 records the public reading leading to revival.',
  },

  // Esther (3 questions)
  {
    id: 'est-001',
    bookId: 'esther',
    category: 'identification',
    difficulty: 'easy',
    question: 'Which book tells of a Jewish queen who saved her people from genocide in Persia?',
    correctAnswer: 'Esther',
    distractors: ['Ruth', 'Nehemiah', 'Daniel'],
    explanation: 'Esther became queen and thwarted Haman\'s plot to destroy the Jews.',
  },
  {
    id: 'est-002',
    bookId: 'esther',
    category: 'content',
    difficulty: 'medium',
    question: 'Which book explains the origin of the Jewish festival of Purim?',
    correctAnswer: 'Esther',
    distractors: ['Nehemiah', 'Ezra', 'Leviticus'],
    explanation: 'Purim commemorates deliverance from Haman\'s plot recorded in Esther.',
  },
  {
    id: 'est-003',
    bookId: 'esther',
    category: 'content',
    difficulty: 'hard',
    question: 'Which book never explicitly mentions God but demonstrates His providential care?',
    correctAnswer: 'Esther',
    distractors: ['Ecclesiastes', 'Song of Solomon', 'Proverbs'],
    explanation: 'God\'s name is absent but His providence permeates the book of Esther.',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // POETRY & WISDOM (Job - Song of Solomon)
  // ═══════════════════════════════════════════════════════════════════════════

  // Job (3 questions)
  {
    id: 'job-001',
    bookId: 'job',
    category: 'identification',
    difficulty: 'easy',
    question: 'Which book addresses the problem of why the righteous suffer?',
    correctAnswer: 'Job',
    distractors: ['Ecclesiastes', 'Psalms', 'Lamentations'],
    explanation: 'Job explores theodicy through a righteous man\'s intense suffering.',
  },
  {
    id: 'job-002',
    bookId: 'job',
    category: 'content',
    difficulty: 'medium',
    question: 'In which book does God speak from a whirlwind?',
    correctAnswer: 'Job',
    distractors: ['1 Kings', 'Ezekiel', 'Psalms'],
    explanation: 'Job 38-41 records God\'s speeches from the whirlwind.',
  },
  {
    id: 'job-003',
    bookId: 'job',
    category: 'content',
    difficulty: 'medium',
    question: 'Which book features three friends - Eliphaz, Bildad, and Zophar - giving counsel?',
    correctAnswer: 'Job',
    distractors: ['Proverbs', 'Ecclesiastes', 'Daniel'],
    explanation: 'Job\'s three friends represent inadequate explanations for suffering.',
  },

  // Psalms (3 questions)
  {
    id: 'psa-001',
    bookId: 'psalms',
    category: 'identification',
    difficulty: 'easy',
    question: 'Which book is the Bible\'s hymnal, containing 150 songs and prayers?',
    correctAnswer: 'Psalms',
    distractors: ['Song of Solomon', 'Lamentations', 'Isaiah'],
    explanation: 'The Psalms served as Israel\'s worship songbook.',
  },
  {
    id: 'psa-002',
    bookId: 'psalms',
    category: 'key_verse',
    difficulty: 'easy',
    question: 'Which book contains: "The LORD is my shepherd; I shall not want" (23:1)?',
    correctAnswer: 'Psalms',
    distractors: ['Isaiah', 'John', 'Ezekiel'],
    explanation: 'Psalm 23 is perhaps the most beloved of all psalms.',
  },
  {
    id: 'psa-003',
    bookId: 'psalms',
    category: 'author',
    difficulty: 'medium',
    question: 'Which book contains songs attributed to David, Asaph, the Sons of Korah, and Moses?',
    correctAnswer: 'Psalms',
    distractors: ['1 Chronicles', 'Song of Solomon', '2 Samuel'],
    explanation: 'The Psalms have multiple authors with David writing about half.',
  },

  // Proverbs (3 questions)
  {
    id: 'pro-001',
    bookId: 'proverbs',
    category: 'identification',
    difficulty: 'easy',
    question: 'Which book is a collection of wise sayings primarily compiled by Solomon?',
    correctAnswer: 'Proverbs',
    distractors: ['Ecclesiastes', 'Psalms', 'Job'],
    explanation: 'Proverbs is wisdom literature largely attributed to Solomon.',
  },
  {
    id: 'pro-002',
    bookId: 'proverbs',
    category: 'key_verse',
    difficulty: 'easy',
    question: 'Which book says: "The fear of the LORD is the beginning of wisdom" (9:10)?',
    correctAnswer: 'Proverbs',
    distractors: ['Ecclesiastes', 'Job', 'Psalms'],
    explanation: 'This theme statement captures Proverbs\' foundation for wisdom.',
  },
  {
    id: 'pro-003',
    bookId: 'proverbs',
    category: 'content',
    difficulty: 'medium',
    question: 'Which book ends with a poem praising the "excellent wife" (chapter 31)?',
    correctAnswer: 'Proverbs',
    distractors: ['Song of Solomon', 'Ruth', 'Ecclesiastes'],
    explanation: 'Proverbs 31:10-31 is the famous acrostic poem of the noble wife.',
  },

  // Ecclesiastes (3 questions)
  {
    id: 'ecc-001',
    bookId: 'ecclesiastes',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which book begins with "Vanity of vanities...all is vanity"?',
    correctAnswer: 'Ecclesiastes',
    distractors: ['Proverbs', 'Job', 'Psalms'],
    explanation: 'Ecclesiastes explores the meaninglessness of life apart from God.',
  },
  {
    id: 'ecc-002',
    bookId: 'ecclesiastes',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which book contains: "For everything there is a season, and a time for every matter under heaven" (3:1)?',
    correctAnswer: 'Ecclesiastes',
    distractors: ['Proverbs', 'Psalms', 'Isaiah'],
    explanation: 'Ecclesiastes 3 contains the famous "time for everything" poem.',
  },
  {
    id: 'ecc-003',
    bookId: 'ecclesiastes',
    category: 'content',
    difficulty: 'medium',
    question: 'Which book\'s author calls himself "the Preacher" (Qoheleth)?',
    correctAnswer: 'Ecclesiastes',
    distractors: ['Isaiah', 'Jeremiah', 'Amos'],
    explanation: 'The Hebrew title Qoheleth means "preacher" or "teacher."',
  },

  // Song of Solomon (3 questions)
  {
    id: 'sos-001',
    bookId: 'song-of-solomon',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which book is a love poem celebrating romantic and marital love?',
    correctAnswer: 'Song of Solomon',
    distractors: ['Ruth', 'Ecclesiastes', 'Proverbs'],
    explanation: 'Song of Solomon (Song of Songs) celebrates human love as God\'s gift.',
  },
  {
    id: 'sos-002',
    bookId: 'song-of-solomon',
    category: 'content',
    difficulty: 'hard',
    question: 'Which book features a "Beloved" and a "Shulamite" in poetic dialogue?',
    correctAnswer: 'Song of Solomon',
    distractors: ['Ruth', 'Hosea', 'Proverbs'],
    explanation: 'The Song features dialogue between the lover and his beloved.',
  },
  {
    id: 'sos-003',
    bookId: 'song-of-solomon',
    category: 'key_verse',
    difficulty: 'hard',
    question: 'Which book says: "Set me as a seal upon your heart...for love is strong as death" (8:6)?',
    correctAnswer: 'Song of Solomon',
    distractors: ['Ruth', 'Ecclesiastes', 'Proverbs'],
    explanation: 'Song of Solomon 8:6 is a powerful statement about love\'s strength.',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MAJOR PROPHETS (Isaiah - Daniel)
  // ═══════════════════════════════════════════════════════════════════════════

  // Isaiah (3 questions)
  {
    id: 'isa-001',
    bookId: 'isaiah',
    category: 'identification',
    difficulty: 'easy',
    question: 'Which prophetic book contains the famous "Suffering Servant" passage (chapter 53)?',
    correctAnswer: 'Isaiah',
    distractors: ['Jeremiah', 'Zechariah', 'Psalms'],
    explanation: 'Isaiah 53 prophesies Christ\'s atoning death with remarkable detail.',
  },
  {
    id: 'isa-002',
    bookId: 'isaiah',
    category: 'key_verse',
    difficulty: 'easy',
    question: 'Which book prophesies: "For unto us a child is born, unto us a son is given" (9:6)?',
    correctAnswer: 'Isaiah',
    distractors: ['Micah', 'Psalms', 'Malachi'],
    explanation: 'Isaiah 9:6-7 is a key messianic prophecy.',
  },
  {
    id: 'isa-003',
    bookId: 'isaiah',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which book contains: "Behold, the virgin shall conceive and bear a son" (7:14)?',
    correctAnswer: 'Isaiah',
    distractors: ['Genesis', 'Micah', 'Matthew'],
    explanation: 'Isaiah\'s Immanuel prophecy is cited in Matthew regarding Jesus\' birth.',
  },

  // Jeremiah (3 questions)
  {
    id: 'jer-001',
    bookId: 'jeremiah',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which prophet is known as the "weeping prophet" who witnessed Jerusalem\'s fall?',
    correctAnswer: 'Jeremiah',
    distractors: ['Isaiah', 'Ezekiel', 'Daniel'],
    explanation: 'Jeremiah wept over Judah\'s sin and coming judgment.',
  },
  {
    id: 'jer-002',
    bookId: 'jeremiah',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which book promises a "new covenant" written on hearts (31:31-34)?',
    correctAnswer: 'Jeremiah',
    distractors: ['Isaiah', 'Ezekiel', 'Hebrews'],
    explanation: 'Jeremiah 31 contains the foundational new covenant prophecy.',
  },
  {
    id: 'jer-003',
    bookId: 'jeremiah',
    category: 'key_verse',
    difficulty: 'easy',
    question: 'Which book contains: "For I know the plans I have for you...plans for welfare and not for evil" (29:11)?',
    correctAnswer: 'Jeremiah',
    distractors: ['Isaiah', 'Proverbs', 'Romans'],
    explanation: 'Jeremiah 29:11 is a promise to exiles of God\'s good plans.',
  },

  // Lamentations (3 questions)
  {
    id: 'lam-001',
    bookId: 'lamentations',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which book is a collection of five poems mourning Jerusalem\'s destruction?',
    correctAnswer: 'Lamentations',
    distractors: ['Jeremiah', 'Psalms', 'Ezekiel'],
    explanation: 'Lamentations mourns the 586 BC destruction of Jerusalem.',
  },
  {
    id: 'lam-002',
    bookId: 'lamentations',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which book says: "The steadfast love of the LORD never ceases; his mercies never come to an end" (3:22)?',
    correctAnswer: 'Lamentations',
    distractors: ['Psalms', 'Isaiah', 'Jeremiah'],
    explanation: 'Lamentations 3:22-23 provides hope amid grief.',
  },
  {
    id: 'lam-003',
    bookId: 'lamentations',
    category: 'content',
    difficulty: 'hard',
    question: 'Which book is written as a series of acrostic poems using the Hebrew alphabet?',
    correctAnswer: 'Lamentations',
    distractors: ['Psalms', 'Proverbs', 'Ecclesiastes'],
    explanation: 'Four of Lamentations\' five chapters are Hebrew acrostics.',
  },

  // Ezekiel (3 questions)
  {
    id: 'eze-001',
    bookId: 'ezekiel',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which prophetic book contains the vision of the valley of dry bones coming to life?',
    correctAnswer: 'Ezekiel',
    distractors: ['Daniel', 'Isaiah', 'Revelation'],
    explanation: 'Ezekiel 37 pictures Israel\'s national and spiritual resurrection.',
  },
  {
    id: 'eze-002',
    bookId: 'ezekiel',
    category: 'content',
    difficulty: 'hard',
    question: 'Which book begins with a vision of God\'s throne chariot with four living creatures?',
    correctAnswer: 'Ezekiel',
    distractors: ['Revelation', 'Isaiah', 'Daniel'],
    explanation: 'Ezekiel 1 describes the theophanic vision of God\'s glory.',
  },
  {
    id: 'eze-003',
    bookId: 'ezekiel',
    category: 'content',
    difficulty: 'hard',
    question: 'Which prophet was among the exiles in Babylon and used dramatic symbolic actions?',
    correctAnswer: 'Ezekiel',
    distractors: ['Jeremiah', 'Daniel', 'Isaiah'],
    explanation: 'Ezekiel was exiled in 597 BC and used vivid prophetic dramas.',
  },

  // Daniel (3 questions)
  {
    id: 'dan-001',
    bookId: 'daniel',
    category: 'identification',
    difficulty: 'easy',
    question: 'Which book contains the story of three men surviving a fiery furnace?',
    correctAnswer: 'Daniel',
    distractors: ['Ezekiel', '2 Kings', '1 Kings'],
    explanation: 'Daniel 3 records Shadrach, Meshach, and Abednego\'s deliverance.',
  },
  {
    id: 'dan-002',
    bookId: 'daniel',
    category: 'content',
    difficulty: 'easy',
    question: 'Which book records Daniel surviving a night in the lions\' den?',
    correctAnswer: 'Daniel',
    distractors: ['1 Kings', '2 Kings', 'Ezekiel'],
    explanation: 'Daniel 6 records Daniel\'s faithfulness and miraculous preservation.',
  },
  {
    id: 'dan-003',
    bookId: 'daniel',
    category: 'content',
    difficulty: 'medium',
    question: 'Which book contains Nebuchadnezzar\'s dream of a great statue representing world empires?',
    correctAnswer: 'Daniel',
    distractors: ['Ezekiel', 'Isaiah', 'Revelation'],
    explanation: 'Daniel 2 interprets the dream showing God\'s sovereignty over history.',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MINOR PROPHETS (Hosea - Malachi)
  // ═══════════════════════════════════════════════════════════════════════════

  // Hosea (3 questions)
  {
    id: 'hos-001',
    bookId: 'hosea',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which prophet was commanded to marry an unfaithful wife as a picture of Israel\'s unfaithfulness?',
    correctAnswer: 'Hosea',
    distractors: ['Jeremiah', 'Isaiah', 'Ezekiel'],
    explanation: 'Hosea\'s marriage to Gomer illustrated God\'s faithful love for unfaithful Israel.',
  },
  {
    id: 'hos-002',
    bookId: 'hosea',
    category: 'content',
    difficulty: 'hard',
    question: 'Which book names children "Lo-Ruhamah" (No Mercy) and "Lo-Ammi" (Not My People)?',
    correctAnswer: 'Hosea',
    distractors: ['Isaiah', 'Jeremiah', 'Ezekiel'],
    explanation: 'Hosea\'s children\'s names symbolized God\'s judgment on Israel.',
  },
  {
    id: 'hos-003',
    bookId: 'hosea',
    category: 'key_verse',
    difficulty: 'hard',
    question: 'Which prophet wrote: "I will heal their apostasy; I will love them freely" (14:4)?',
    correctAnswer: 'Hosea',
    distractors: ['Jeremiah', 'Isaiah', 'Micah'],
    explanation: 'Hosea ends with promises of God\'s restoring love.',
  },

  // Joel (3 questions)
  {
    id: 'joe-001',
    bookId: 'joel',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which prophetic book describes a devastating locust plague as divine judgment?',
    correctAnswer: 'Joel',
    distractors: ['Amos', 'Nahum', 'Exodus'],
    explanation: 'Joel uses a locust plague to picture the Day of the LORD.',
  },
  {
    id: 'joe-002',
    bookId: 'joel',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which book promises: "I will pour out my Spirit on all flesh" (2:28)?',
    correctAnswer: 'Joel',
    distractors: ['Isaiah', 'Ezekiel', 'Zechariah'],
    explanation: 'Joel 2:28-32 was fulfilled at Pentecost (Acts 2).',
  },
  {
    id: 'joe-003',
    bookId: 'joel',
    category: 'content',
    difficulty: 'hard',
    question: 'Which book calls for a sacred assembly and commands: "Rend your hearts and not your garments" (2:13)?',
    correctAnswer: 'Joel',
    distractors: ['Amos', 'Hosea', 'Isaiah'],
    explanation: 'Joel calls for genuine repentance, not mere external religion.',
  },

  // Amos (3 questions)
  {
    id: 'amo-001',
    bookId: 'amos',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which prophet was a shepherd and fig farmer from Judah who prophesied to Israel?',
    correctAnswer: 'Amos',
    distractors: ['Hosea', 'Micah', 'Joel'],
    explanation: 'Amos was called from his agricultural work to prophesy.',
  },
  {
    id: 'amo-002',
    bookId: 'amos',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which book says: "Let justice roll down like waters, and righteousness like an ever-flowing stream" (5:24)?',
    correctAnswer: 'Amos',
    distractors: ['Isaiah', 'Micah', 'Hosea'],
    explanation: 'Amos emphasized social justice as essential to true worship.',
  },
  {
    id: 'amo-003',
    bookId: 'amos',
    category: 'content',
    difficulty: 'hard',
    question: 'Which prophet condemned Israel\'s wealthy women as "cows of Bashan" for their oppression of the poor?',
    correctAnswer: 'Amos',
    distractors: ['Isaiah', 'Micah', 'Hosea'],
    explanation: 'Amos 4:1 uses this bold imagery to condemn exploitation.',
  },

  // Obadiah (3 questions)
  {
    id: 'oba-001',
    bookId: 'obadiah',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which is the shortest book in the Old Testament with only 21 verses?',
    correctAnswer: 'Obadiah',
    distractors: ['Philemon', 'Jude', 'Nahum'],
    explanation: 'Obadiah\'s single chapter is the OT\'s shortest book.',
  },
  {
    id: 'oba-002',
    bookId: 'obadiah',
    category: 'content',
    difficulty: 'hard',
    question: 'Which prophetic book is entirely devoted to judgment against Edom?',
    correctAnswer: 'Obadiah',
    distractors: ['Nahum', 'Habakkuk', 'Malachi'],
    explanation: 'Obadiah pronounces judgment on Edom for pride and cruelty to Israel.',
  },
  {
    id: 'oba-003',
    bookId: 'obadiah',
    category: 'content',
    difficulty: 'hard',
    question: 'Which book condemns a nation descended from Esau for gloating over Jerusalem\'s fall?',
    correctAnswer: 'Obadiah',
    distractors: ['Joel', 'Nahum', 'Zephaniah'],
    explanation: 'Edom (Esau\'s descendants) rejoiced when Babylon destroyed Jerusalem.',
  },

  // Jonah (3 questions)
  {
    id: 'jon-001',
    bookId: 'jonah',
    category: 'identification',
    difficulty: 'easy',
    question: 'Which book tells of a prophet swallowed by a great fish?',
    correctAnswer: 'Jonah',
    distractors: ['Job', 'Daniel', 'Ezekiel'],
    explanation: 'Jonah was swallowed while fleeing from God\'s commission.',
  },
  {
    id: 'jon-002',
    bookId: 'jonah',
    category: 'content',
    difficulty: 'easy',
    question: 'Which prophet was sent to preach repentance to Nineveh?',
    correctAnswer: 'Jonah',
    distractors: ['Nahum', 'Elijah', 'Amos'],
    explanation: 'God sent Jonah to the Assyrian capital Nineveh.',
  },
  {
    id: 'jon-003',
    bookId: 'jonah',
    category: 'content',
    difficulty: 'medium',
    question: 'Which book shows a prophet angry that God showed mercy to his enemies?',
    correctAnswer: 'Jonah',
    distractors: ['Habakkuk', 'Nahum', 'Jeremiah'],
    explanation: 'Jonah 4 reveals Jonah\'s anger at Nineveh\'s repentance.',
  },

  // Micah (3 questions)
  {
    id: 'mic-001',
    bookId: 'micah',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which book prophesies that the Messiah would be born in Bethlehem (5:2)?',
    correctAnswer: 'Micah',
    distractors: ['Isaiah', 'Zechariah', 'Malachi'],
    explanation: 'Micah 5:2 is quoted in Matthew 2 regarding Jesus\' birthplace.',
  },
  {
    id: 'mic-002',
    bookId: 'micah',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which book says: "He has told you, O man, what is good...to do justice, and to love kindness, and to walk humbly with your God" (6:8)?',
    correctAnswer: 'Micah',
    distractors: ['Amos', 'Isaiah', 'Proverbs'],
    explanation: 'Micah 6:8 summarizes what God requires of His people.',
  },
  {
    id: 'mic-003',
    bookId: 'micah',
    category: 'content',
    difficulty: 'hard',
    question: 'Which prophet was a contemporary of Isaiah, prophesying to both Israel and Judah?',
    correctAnswer: 'Micah',
    distractors: ['Amos', 'Hosea', 'Joel'],
    explanation: 'Micah prophesied during the reigns of Jotham, Ahaz, and Hezekiah.',
  },

  // Nahum (3 questions)
  {
    id: 'nah-001',
    bookId: 'nahum',
    category: 'identification',
    difficulty: 'hard',
    question: 'Which prophetic book pronounces judgment against Nineveh for its cruelty?',
    correctAnswer: 'Nahum',
    distractors: ['Jonah', 'Habakkuk', 'Obadiah'],
    explanation: 'Nahum prophesies Nineveh\'s destruction about 150 years after Jonah.',
  },
  {
    id: 'nah-002',
    bookId: 'nahum',
    category: 'content',
    difficulty: 'hard',
    question: 'Which book describes the fall of the Assyrian empire\'s capital city?',
    correctAnswer: 'Nahum',
    distractors: ['Isaiah', 'Jonah', 'Zephaniah'],
    explanation: 'Nahum vividly portrays Nineveh\'s coming destruction.',
  },
  {
    id: 'nah-003',
    bookId: 'nahum',
    category: 'key_verse',
    difficulty: 'hard',
    question: 'Which book begins: "The LORD is slow to anger and great in power, and the LORD will by no means clear the guilty" (1:3)?',
    correctAnswer: 'Nahum',
    distractors: ['Joel', 'Habakkuk', 'Jonah'],
    explanation: 'Nahum emphasizes both God\'s patience and His justice.',
  },

  // Habakkuk (3 questions)
  {
    id: 'hab-001',
    bookId: 'habakkuk',
    category: 'identification',
    difficulty: 'hard',
    question: 'Which prophet questions God about using wicked Babylon to punish Judah?',
    correctAnswer: 'Habakkuk',
    distractors: ['Jeremiah', 'Nahum', 'Zephaniah'],
    explanation: 'Habakkuk\'s honest dialogue with God addresses theodicy.',
  },
  {
    id: 'hab-002',
    bookId: 'habakkuk',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which book declares: "The righteous shall live by his faith" (2:4)?',
    correctAnswer: 'Habakkuk',
    distractors: ['Romans', 'Galatians', 'Isaiah'],
    explanation: 'Habakkuk 2:4 is foundational for Paul\'s teaching on justification.',
  },
  {
    id: 'hab-003',
    bookId: 'habakkuk',
    category: 'content',
    difficulty: 'hard',
    question: 'Which prophet ends his book with a psalm of praise despite coming judgment?',
    correctAnswer: 'Habakkuk',
    distractors: ['Nahum', 'Joel', 'Zephaniah'],
    explanation: 'Habakkuk 3 is a powerful expression of faith despite circumstances.',
  },

  // Zephaniah (3 questions)
  {
    id: 'zep-001',
    bookId: 'zephaniah',
    category: 'identification',
    difficulty: 'hard',
    question: 'Which prophet was a descendant of King Hezekiah who prophesied during Josiah\'s reign?',
    correctAnswer: 'Zephaniah',
    distractors: ['Jeremiah', 'Habakkuk', 'Nahum'],
    explanation: 'Zephaniah\'s royal lineage is unique among the prophets.',
  },
  {
    id: 'zep-002',
    bookId: 'zephaniah',
    category: 'content',
    difficulty: 'hard',
    question: 'Which book vividly describes "the day of the LORD" as near and coming quickly?',
    correctAnswer: 'Zephaniah',
    distractors: ['Joel', 'Amos', 'Obadiah'],
    explanation: 'Zephaniah emphasizes the nearness of divine judgment.',
  },
  {
    id: 'zep-003',
    bookId: 'zephaniah',
    category: 'key_verse',
    difficulty: 'hard',
    question: 'Which book says: "The LORD your God is in your midst, a mighty one who will save; he will rejoice over you with gladness" (3:17)?',
    correctAnswer: 'Zephaniah',
    distractors: ['Isaiah', 'Hosea', 'Zechariah'],
    explanation: 'Zephaniah 3:17 beautifully pictures God\'s joy over His redeemed people.',
  },

  // Haggai (3 questions)
  {
    id: 'hag-001',
    bookId: 'haggai',
    category: 'identification',
    difficulty: 'hard',
    question: 'Which prophet urged the returned exiles to complete rebuilding the temple?',
    correctAnswer: 'Haggai',
    distractors: ['Zechariah', 'Malachi', 'Ezra'],
    explanation: 'Haggai\'s preaching in 520 BC motivated temple reconstruction.',
  },
  {
    id: 'hag-002',
    bookId: 'haggai',
    category: 'content',
    difficulty: 'hard',
    question: 'Which book rebukes the people for building their own houses while God\'s house lies in ruins?',
    correctAnswer: 'Haggai',
    distractors: ['Nehemiah', 'Zechariah', 'Malachi'],
    explanation: 'Haggai challenged misplaced priorities among the returned exiles.',
  },
  {
    id: 'hag-003',
    bookId: 'haggai',
    category: 'canonical_order',
    difficulty: 'hard',
    question: 'Which post-exilic prophet wrote immediately before Zechariah?',
    correctAnswer: 'Haggai',
    distractors: ['Malachi', 'Zephaniah', 'Nahum'],
    explanation: 'Haggai and Zechariah prophesied together during temple rebuilding.',
  },

  // Zechariah (3 questions)
  {
    id: 'zec-001',
    bookId: 'zechariah',
    category: 'identification',
    difficulty: 'hard',
    question: 'Which prophetic book contains the most messianic prophecies after Isaiah?',
    correctAnswer: 'Zechariah',
    distractors: ['Micah', 'Daniel', 'Jeremiah'],
    explanation: 'Zechariah contains numerous detailed messianic prophecies.',
  },
  {
    id: 'zec-002',
    bookId: 'zechariah',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which book prophesies: "Behold, your king is coming to you...humble and mounted on a donkey" (9:9)?',
    correctAnswer: 'Zechariah',
    distractors: ['Isaiah', 'Micah', 'Daniel'],
    explanation: 'Zechariah 9:9 was fulfilled in Jesus\' triumphal entry.',
  },
  {
    id: 'zec-003',
    bookId: 'zechariah',
    category: 'content',
    difficulty: 'hard',
    question: 'Which book contains eight night visions including a flying scroll and golden lampstand?',
    correctAnswer: 'Zechariah',
    distractors: ['Daniel', 'Ezekiel', 'Revelation'],
    explanation: 'Zechariah 1-6 records eight symbolic visions.',
  },

  // Malachi (3 questions)
  {
    id: 'mal-001',
    bookId: 'malachi',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which is the last book of the Old Testament in Protestant Bibles?',
    correctAnswer: 'Malachi',
    distractors: ['Zechariah', '2 Chronicles', 'Nehemiah'],
    explanation: 'Malachi concludes the OT prophetic literature.',
  },
  {
    id: 'mal-002',
    bookId: 'malachi',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which book challenges: "Bring the full tithe into the storehouse...and thereby put me to the test" (3:10)?',
    correctAnswer: 'Malachi',
    distractors: ['Proverbs', 'Deuteronomy', 'Haggai'],
    explanation: 'Malachi addresses Israel\'s unfaithfulness in tithing.',
  },
  {
    id: 'mal-003',
    bookId: 'malachi',
    category: 'content',
    difficulty: 'medium',
    question: 'Which book prophesies Elijah\'s return before "the great and awesome day of the LORD" (4:5)?',
    correctAnswer: 'Malachi',
    distractors: ['Joel', '1 Kings', 'Isaiah'],
    explanation: 'This prophecy was fulfilled in John the Baptist.',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // GOSPELS & ACTS
  // ═══════════════════════════════════════════════════════════════════════════

  // Matthew (3 questions)
  {
    id: 'mat-001',
    bookId: 'matthew',
    category: 'identification',
    difficulty: 'easy',
    question: 'Which Gospel begins with a genealogy tracing Jesus back to Abraham and David?',
    correctAnswer: 'Matthew',
    distractors: ['Luke', 'Mark', 'John'],
    explanation: 'Matthew 1 establishes Jesus as the promised Jewish Messiah.',
  },
  {
    id: 'mat-002',
    bookId: 'matthew',
    category: 'content',
    difficulty: 'easy',
    question: 'Which Gospel contains the Sermon on the Mount (chapters 5-7)?',
    correctAnswer: 'Matthew',
    distractors: ['Luke', 'Mark', 'John'],
    explanation: 'The Sermon on the Mount is Matthew\'s first major discourse.',
  },
  {
    id: 'mat-003',
    bookId: 'matthew',
    category: 'key_verse',
    difficulty: 'easy',
    question: 'Which Gospel ends with the Great Commission: "Go therefore and make disciples of all nations" (28:19)?',
    correctAnswer: 'Matthew',
    distractors: ['Mark', 'Luke', 'Acts'],
    explanation: 'Matthew\'s Gospel climaxes with Jesus\' commission to His disciples.',
  },

  // Mark (3 questions)
  {
    id: 'mar-001',
    bookId: 'mark',
    category: 'identification',
    difficulty: 'easy',
    question: 'Which is the shortest of the four Gospels?',
    correctAnswer: 'Mark',
    distractors: ['Matthew', 'Luke', 'John'],
    explanation: 'Mark has 16 chapters, fewer than any other Gospel.',
  },
  {
    id: 'mar-002',
    bookId: 'mark',
    category: 'content',
    difficulty: 'medium',
    question: 'Which Gospel emphasizes Jesus as the suffering Servant, using "immediately" repeatedly?',
    correctAnswer: 'Mark',
    distractors: ['Matthew', 'Luke', 'John'],
    explanation: 'Mark\'s fast-paced narrative uses "immediately" over 40 times.',
  },
  {
    id: 'mar-003',
    bookId: 'mark',
    category: 'author',
    difficulty: 'medium',
    question: 'Which Gospel was written by a companion of Peter based on his eyewitness testimony?',
    correctAnswer: 'Mark',
    distractors: ['Matthew', 'Luke', 'John'],
    explanation: 'Early church tradition connects Mark to Peter\'s preaching in Rome.',
  },

  // Luke (3 questions)
  {
    id: 'luk-001',
    bookId: 'luke',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which Gospel was written by a physician and companion of Paul?',
    correctAnswer: 'Luke',
    distractors: ['Mark', 'Matthew', 'John'],
    explanation: 'Colossians 4:14 identifies Luke as a physician.',
  },
  {
    id: 'luk-002',
    bookId: 'luke',
    category: 'content',
    difficulty: 'medium',
    question: 'Which Gospel contains the parables of the Good Samaritan and the Prodigal Son?',
    correctAnswer: 'Luke',
    distractors: ['Matthew', 'Mark', 'John'],
    explanation: 'These beloved parables are unique to Luke\'s Gospel.',
  },
  {
    id: 'luk-003',
    bookId: 'luke',
    category: 'content',
    difficulty: 'medium',
    question: 'Which Gospel traces Jesus\' genealogy back to Adam?',
    correctAnswer: 'Luke',
    distractors: ['Matthew', 'Mark', 'John'],
    explanation: 'Luke 3:23-38 emphasizes Jesus as Savior of all humanity.',
  },

  // John (3 questions)
  {
    id: 'joh-001',
    bookId: 'john',
    category: 'identification',
    difficulty: 'easy',
    question: 'Which Gospel begins: "In the beginning was the Word, and the Word was with God"?',
    correctAnswer: 'John',
    distractors: ['Genesis', 'Matthew', 'Hebrews'],
    explanation: 'John\'s prologue establishes Jesus\' divine pre-existence.',
  },
  {
    id: 'joh-002',
    bookId: 'john',
    category: 'key_verse',
    difficulty: 'easy',
    question: 'Which book contains: "For God so loved the world, that he gave his only Son" (3:16)?',
    correctAnswer: 'John',
    distractors: ['Romans', '1 John', 'Matthew'],
    explanation: 'John 3:16 is often called the gospel in a nutshell.',
  },
  {
    id: 'joh-003',
    bookId: 'john',
    category: 'content',
    difficulty: 'medium',
    question: 'Which Gospel records seven "I AM" statements of Jesus?',
    correctAnswer: 'John',
    distractors: ['Matthew', 'Luke', 'Mark'],
    explanation: 'John uniquely records Jesus\' "I AM" self-declarations.',
  },

  // Acts (3 questions)
  {
    id: 'act-001',
    bookId: 'acts',
    category: 'identification',
    difficulty: 'easy',
    question: 'Which book records the coming of the Holy Spirit at Pentecost?',
    correctAnswer: 'Acts',
    distractors: ['John', 'Romans', '1 Corinthians'],
    explanation: 'Acts 2 describes the Spirit\'s dramatic outpouring at Pentecost.',
  },
  {
    id: 'act-002',
    bookId: 'acts',
    category: 'content',
    difficulty: 'medium',
    question: 'Which book records Paul\'s conversion on the road to Damascus?',
    correctAnswer: 'Acts',
    distractors: ['Galatians', 'Romans', 'Philippians'],
    explanation: 'Acts 9 (also 22, 26) describes Saul\'s dramatic encounter with Jesus.',
  },
  {
    id: 'act-003',
    bookId: 'acts',
    category: 'author',
    difficulty: 'medium',
    question: 'Which book is a sequel to the Gospel of Luke, both addressed to Theophilus?',
    correctAnswer: 'Acts',
    distractors: ['2 Timothy', 'Romans', 'Hebrews'],
    explanation: 'Luke-Acts is a two-volume work by the same author.',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAULINE EPISTLES (Romans - Philemon)
  // ═══════════════════════════════════════════════════════════════════════════

  // Romans (3 questions)
  {
    id: 'rom-001',
    bookId: 'romans',
    category: 'identification',
    difficulty: 'easy',
    question: 'Which letter is Paul\'s most systematic explanation of the gospel?',
    correctAnswer: 'Romans',
    distractors: ['Galatians', 'Ephesians', 'Hebrews'],
    explanation: 'Romans methodically presents justification by faith.',
  },
  {
    id: 'rom-002',
    bookId: 'romans',
    category: 'key_verse',
    difficulty: 'easy',
    question: 'Which book says: "For all have sinned and fall short of the glory of God" (3:23)?',
    correctAnswer: 'Romans',
    distractors: ['1 John', 'Ecclesiastes', 'Isaiah'],
    explanation: 'Romans 3:23 summarizes humanity\'s universal sinfulness.',
  },
  {
    id: 'rom-003',
    bookId: 'romans',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which book contains: "And we know that for those who love God all things work together for good" (8:28)?',
    correctAnswer: 'Romans',
    distractors: ['Philippians', 'Jeremiah', 'Psalms'],
    explanation: 'Romans 8:28 offers comfort about God\'s sovereign providence.',
  },

  // 1 Corinthians (3 questions)
  {
    id: '1co-001',
    bookId: '1-corinthians',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which letter addresses divisions, immorality, and confusion about spiritual gifts in a church?',
    correctAnswer: '1 Corinthians',
    distractors: ['Galatians', 'Colossians', 'Romans'],
    explanation: '1 Corinthians addresses numerous problems in the church at Corinth.',
  },
  {
    id: '1co-002',
    bookId: '1-corinthians',
    category: 'content',
    difficulty: 'easy',
    question: 'Which book contains the famous "love chapter" (chapter 13)?',
    correctAnswer: '1 Corinthians',
    distractors: ['Romans', 'Ephesians', 'Song of Solomon'],
    explanation: '1 Corinthians 13 beautifully describes love\'s characteristics.',
  },
  {
    id: '1co-003',
    bookId: '1-corinthians',
    category: 'content',
    difficulty: 'medium',
    question: 'Which letter contains Paul\'s extended teaching on the resurrection of the dead (chapter 15)?',
    correctAnswer: '1 Corinthians',
    distractors: ['1 Thessalonians', 'Romans', 'Philippians'],
    explanation: '1 Corinthians 15 is Paul\'s definitive treatment of resurrection.',
  },

  // 2 Corinthians (3 questions)
  {
    id: '2co-001',
    bookId: '2-corinthians',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which letter is Paul\'s most personal and emotional, defending his apostleship?',
    correctAnswer: '2 Corinthians',
    distractors: ['Galatians', 'Philippians', 'Philemon'],
    explanation: '2 Corinthians reveals Paul\'s struggles and apostolic authority.',
  },
  {
    id: '2co-002',
    bookId: '2-corinthians',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which book says: "Therefore, if anyone is in Christ, he is a new creation" (5:17)?',
    correctAnswer: '2 Corinthians',
    distractors: ['Romans', 'Galatians', 'Ephesians'],
    explanation: '2 Corinthians 5:17 describes the transformation in Christ.',
  },
  {
    id: '2co-003',
    bookId: '2-corinthians',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which letter contains: "My grace is sufficient for you, for my power is made perfect in weakness" (12:9)?',
    correctAnswer: '2 Corinthians',
    distractors: ['Romans', 'Philippians', 'Hebrews'],
    explanation: 'God\'s response to Paul\'s thorn in the flesh.',
  },

  // Galatians (3 questions)
  {
    id: 'gal-001',
    bookId: 'galatians',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which letter strongly opposes requiring Gentile believers to follow the Mosaic Law?',
    correctAnswer: 'Galatians',
    distractors: ['Romans', 'Colossians', 'Hebrews'],
    explanation: 'Galatians is Paul\'s passionate defense of justification by faith alone.',
  },
  {
    id: 'gal-002',
    bookId: 'galatians',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which book says: "I have been crucified with Christ. It is no longer I who live, but Christ who lives in me" (2:20)?',
    correctAnswer: 'Galatians',
    distractors: ['Romans', 'Philippians', 'Colossians'],
    explanation: 'Galatians 2:20 expresses union with Christ.',
  },
  {
    id: 'gal-003',
    bookId: 'galatians',
    category: 'content',
    difficulty: 'medium',
    question: 'Which letter contains the "fruit of the Spirit" list: love, joy, peace... (5:22-23)?',
    correctAnswer: 'Galatians',
    distractors: ['Ephesians', 'Colossians', 'Romans'],
    explanation: 'Galatians 5 contrasts works of the flesh with fruit of the Spirit.',
  },

  // Ephesians (3 questions)
  {
    id: 'eph-001',
    bookId: 'ephesians',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which letter describes the church as Christ\'s body and bride, emphasizing unity?',
    correctAnswer: 'Ephesians',
    distractors: ['Colossians', '1 Corinthians', 'Romans'],
    explanation: 'Ephesians develops the theology of the church as Christ\'s body.',
  },
  {
    id: 'eph-002',
    bookId: 'ephesians',
    category: 'key_verse',
    difficulty: 'easy',
    question: 'Which book says: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God" (2:8)?',
    correctAnswer: 'Ephesians',
    distractors: ['Romans', 'Galatians', 'Titus'],
    explanation: 'Ephesians 2:8-9 is a classic statement of salvation by grace.',
  },
  {
    id: 'eph-003',
    bookId: 'ephesians',
    category: 'content',
    difficulty: 'medium',
    question: 'Which letter describes the "armor of God" for spiritual warfare (chapter 6)?',
    correctAnswer: 'Ephesians',
    distractors: ['Romans', '1 Thessalonians', '2 Timothy'],
    explanation: 'Ephesians 6:10-20 describes spiritual armor believers should wear.',
  },

  // Philippians (3 questions)
  {
    id: 'phi-001',
    bookId: 'philippians',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which "joy letter" was written by Paul from prison?',
    correctAnswer: 'Philippians',
    distractors: ['Ephesians', 'Colossians', '2 Timothy'],
    explanation: 'Philippians emphasizes joy despite Paul\'s imprisonment.',
  },
  {
    id: 'phi-002',
    bookId: 'philippians',
    category: 'key_verse',
    difficulty: 'easy',
    question: 'Which book says: "I can do all things through him who strengthens me" (4:13)?',
    correctAnswer: 'Philippians',
    distractors: ['Romans', 'Ephesians', '2 Corinthians'],
    explanation: 'Philippians 4:13 speaks of contentment through Christ\'s strength.',
  },
  {
    id: 'phi-003',
    bookId: 'philippians',
    category: 'content',
    difficulty: 'medium',
    question: 'Which letter contains a hymn about Christ emptying Himself and taking the form of a servant (2:5-11)?',
    correctAnswer: 'Philippians',
    distractors: ['Colossians', 'Hebrews', 'John'],
    explanation: 'The Christ hymn in Philippians 2 describes Jesus\' humiliation and exaltation.',
  },

  // Colossians (3 questions)
  {
    id: 'col-001',
    bookId: 'colossians',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which letter emphasizes Christ\'s supremacy over all creation and powers?',
    correctAnswer: 'Colossians',
    distractors: ['Ephesians', 'Hebrews', 'Philippians'],
    explanation: 'Colossians presents Christ as supreme over all things.',
  },
  {
    id: 'col-002',
    bookId: 'colossians',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which book says: "He is the image of the invisible God, the firstborn of all creation" (1:15)?',
    correctAnswer: 'Colossians',
    distractors: ['Hebrews', 'John', 'Philippians'],
    explanation: 'Colossians 1:15-20 is a powerful Christological statement.',
  },
  {
    id: 'col-003',
    bookId: 'colossians',
    category: 'content',
    difficulty: 'hard',
    question: 'Which letter warns against "philosophy and empty deceit" and ascetic practices?',
    correctAnswer: 'Colossians',
    distractors: ['Galatians', '1 Timothy', '2 Peter'],
    explanation: 'Colossians 2 addresses the Colossian heresy\'s false teachings.',
  },

  // 1 Thessalonians (3 questions)
  {
    id: '1th-001',
    bookId: '1-thessalonians',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which is likely Paul\'s earliest preserved letter?',
    correctAnswer: '1 Thessalonians',
    distractors: ['Galatians', 'Romans', '1 Corinthians'],
    explanation: '1 Thessalonians was written around AD 50-51.',
  },
  {
    id: '1th-002',
    bookId: '1-thessalonians',
    category: 'content',
    difficulty: 'medium',
    question: 'Which letter describes believers being caught up to meet the Lord in the air (4:16-17)?',
    correctAnswer: '1 Thessalonians',
    distractors: ['Revelation', '2 Thessalonians', '1 Corinthians'],
    explanation: '1 Thessalonians 4 provides key teaching on Christ\'s return.',
  },
  {
    id: '1th-003',
    bookId: '1-thessalonians',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which letter commands: "Rejoice always, pray without ceasing, give thanks in all circumstances" (5:16-18)?',
    correctAnswer: '1 Thessalonians',
    distractors: ['Philippians', 'Ephesians', 'Colossians'],
    explanation: '1 Thessalonians 5 contains rapid-fire instructions for Christian living.',
  },

  // 2 Thessalonians (3 questions)
  {
    id: '2th-001',
    bookId: '2-thessalonians',
    category: 'identification',
    difficulty: 'hard',
    question: 'Which letter corrects misunderstandings about the Day of the Lord being already present?',
    correctAnswer: '2 Thessalonians',
    distractors: ['1 Thessalonians', '2 Peter', '1 Corinthians'],
    explanation: '2 Thessalonians addresses eschatological confusion.',
  },
  {
    id: '2th-002',
    bookId: '2-thessalonians',
    category: 'content',
    difficulty: 'hard',
    question: 'Which letter describes a "man of lawlessness" who will be revealed before Christ returns?',
    correctAnswer: '2 Thessalonians',
    distractors: ['Revelation', 'Daniel', '1 John'],
    explanation: '2 Thessalonians 2 describes this figure preceding Christ\'s return.',
  },
  {
    id: '2th-003',
    bookId: '2-thessalonians',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which letter says: "If anyone is not willing to work, let him not eat" (3:10)?',
    correctAnswer: '2 Thessalonians',
    distractors: ['1 Timothy', 'Proverbs', 'James'],
    explanation: 'Paul addresses idleness in expectation of Christ\'s return.',
  },

  // 1 Timothy (3 questions)
  {
    id: '1ti-001',
    bookId: '1-timothy',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which letter provides instructions for church leadership and order to a young pastor?',
    correctAnswer: '1 Timothy',
    distractors: ['Titus', '2 Timothy', 'Philemon'],
    explanation: '1 Timothy guides Timothy in pastoral responsibilities at Ephesus.',
  },
  {
    id: '1ti-002',
    bookId: '1-timothy',
    category: 'content',
    difficulty: 'medium',
    question: 'Which letter lists qualifications for elders (overseers) and deacons (chapter 3)?',
    correctAnswer: '1 Timothy',
    distractors: ['Titus', 'Acts', 'Ephesians'],
    explanation: '1 Timothy 3 provides key church leadership qualifications.',
  },
  {
    id: '1ti-003',
    bookId: '1-timothy',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which letter says: "For there is one God, and there is one mediator between God and men, the man Christ Jesus" (2:5)?',
    correctAnswer: '1 Timothy',
    distractors: ['Hebrews', 'Romans', 'John'],
    explanation: '1 Timothy 2:5 affirms Christ\'s unique mediatorial role.',
  },

  // 2 Timothy (3 questions)
  {
    id: '2ti-001',
    bookId: '2-timothy',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which is likely Paul\'s last letter, written shortly before his death?',
    correctAnswer: '2 Timothy',
    distractors: ['Titus', 'Philemon', 'Romans'],
    explanation: '2 Timothy reflects Paul\'s awareness of approaching death.',
  },
  {
    id: '2ti-002',
    bookId: '2-timothy',
    category: 'key_verse',
    difficulty: 'easy',
    question: 'Which book says: "All Scripture is breathed out by God and profitable for teaching" (3:16)?',
    correctAnswer: '2 Timothy',
    distractors: ['2 Peter', 'Hebrews', 'Romans'],
    explanation: '2 Timothy 3:16 is foundational for the doctrine of Scripture.',
  },
  {
    id: '2ti-003',
    bookId: '2-timothy',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which letter declares: "I have fought the good fight, I have finished the race" (4:7)?',
    correctAnswer: '2 Timothy',
    distractors: ['Philippians', '1 Corinthians', 'Hebrews'],
    explanation: 'Paul\'s final testimony of faithfulness.',
  },

  // Titus (3 questions)
  {
    id: 'tit-001',
    bookId: 'titus',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which letter was written to a pastor organizing churches on the island of Crete?',
    correctAnswer: 'Titus',
    distractors: ['1 Timothy', '2 Timothy', 'Philemon'],
    explanation: 'Titus was left on Crete to establish church order.',
  },
  {
    id: 'tit-002',
    bookId: 'titus',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which book says: "He saved us, not because of works done by us in righteousness, but according to his own mercy" (3:5)?',
    correctAnswer: 'Titus',
    distractors: ['Ephesians', 'Romans', '2 Timothy'],
    explanation: 'Titus 3:5 emphasizes salvation by grace.',
  },
  {
    id: 'tit-003',
    bookId: 'titus',
    category: 'content',
    difficulty: 'hard',
    question: 'Which letter addresses the character of Cretans and instructs on sound doctrine?',
    correctAnswer: 'Titus',
    distractors: ['1 Timothy', 'James', 'Colossians'],
    explanation: 'Titus quotes Epimenides about Cretans (1:12).',
  },

  // Philemon (3 questions)
  {
    id: 'phm-001',
    bookId: 'philemon',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which is Paul\'s shortest letter, written about a runaway slave?',
    correctAnswer: 'Philemon',
    distractors: ['3 John', 'Jude', 'Titus'],
    explanation: 'Philemon has only 25 verses.',
  },
  {
    id: 'phm-002',
    bookId: 'philemon',
    category: 'content',
    difficulty: 'medium',
    question: 'Which letter appeals for the reception of Onesimus "no longer as a bondservant but...as a beloved brother" (v. 16)?',
    correctAnswer: 'Philemon',
    distractors: ['Colossians', 'Ephesians', 'Galatians'],
    explanation: 'Paul appeals for Philemon to receive Onesimus as a brother.',
  },
  {
    id: 'phm-003',
    bookId: 'philemon',
    category: 'content',
    difficulty: 'hard',
    question: 'Which letter shows Paul offering to pay any debt owed by a slave to his master?',
    correctAnswer: 'Philemon',
    distractors: ['Colossians', 'Galatians', '2 Corinthians'],
    explanation: 'Paul volunteers to repay what Onesimus might owe (v. 18-19).',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // GENERAL EPISTLES (Hebrews - Jude)
  // ═══════════════════════════════════════════════════════════════════════════

  // Hebrews (3 questions)
  {
    id: 'heb-001',
    bookId: 'hebrews',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which letter argues that Christ is superior to angels, Moses, and the Levitical priesthood?',
    correctAnswer: 'Hebrews',
    distractors: ['Colossians', 'Romans', 'Galatians'],
    explanation: 'Hebrews demonstrates Christ\'s superiority throughout.',
  },
  {
    id: 'heb-002',
    bookId: 'hebrews',
    category: 'content',
    difficulty: 'easy',
    question: 'Which book contains the "Hall of Faith" chapter listing Old Testament heroes of faith (chapter 11)?',
    correctAnswer: 'Hebrews',
    distractors: ['Romans', 'James', 'Galatians'],
    explanation: 'Hebrews 11 catalogs faith examples from Abel to the prophets.',
  },
  {
    id: 'heb-003',
    bookId: 'hebrews',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which book says: "Jesus Christ is the same yesterday and today and forever" (13:8)?',
    correctAnswer: 'Hebrews',
    distractors: ['John', 'Revelation', 'Colossians'],
    explanation: 'Hebrews 13:8 affirms Christ\'s unchanging nature.',
  },

  // James (3 questions)
  {
    id: 'jam-001',
    bookId: 'james',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which letter emphasizes that "faith without works is dead" (2:26)?',
    correctAnswer: 'James',
    distractors: ['Hebrews', '1 John', 'Galatians'],
    explanation: 'James stresses the necessity of works as evidence of genuine faith.',
  },
  {
    id: 'jam-002',
    bookId: 'james',
    category: 'content',
    difficulty: 'medium',
    question: 'Which letter extensively addresses the danger of the tongue (chapter 3)?',
    correctAnswer: 'James',
    distractors: ['Proverbs', 'Ephesians', '1 Peter'],
    explanation: 'James 3 vividly describes the destructive power of speech.',
  },
  {
    id: 'jam-003',
    bookId: 'james',
    category: 'author',
    difficulty: 'medium',
    question: 'Which letter was written by the brother of Jesus who led the Jerusalem church?',
    correctAnswer: 'James',
    distractors: ['Jude', '1 Peter', 'Hebrews'],
    explanation: 'James, Jesus\' half-brother, became a leader in Jerusalem.',
  },

  // 1 Peter (3 questions)
  {
    id: '1pe-001',
    bookId: '1-peter',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which letter encourages suffering Christians to follow Christ\'s example of patient endurance?',
    correctAnswer: '1 Peter',
    distractors: ['James', 'Hebrews', '2 Corinthians'],
    explanation: '1 Peter addresses believers facing persecution.',
  },
  {
    id: '1pe-002',
    bookId: '1-peter',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which book says: "You are a chosen race, a royal priesthood, a holy nation" (2:9)?',
    correctAnswer: '1 Peter',
    distractors: ['Exodus', 'Revelation', 'Ephesians'],
    explanation: '1 Peter 2:9 applies Israel\'s identity to the church.',
  },
  {
    id: '1pe-003',
    bookId: '1-peter',
    category: 'content',
    difficulty: 'medium',
    question: 'Which letter instructs: "Always being prepared to make a defense to anyone who asks you for a reason for the hope that is in you" (3:15)?',
    correctAnswer: '1 Peter',
    distractors: ['Colossians', '2 Timothy', 'Titus'],
    explanation: '1 Peter 3:15 is foundational for Christian apologetics.',
  },

  // 2 Peter (3 questions)
  {
    id: '2pe-001',
    bookId: '2-peter',
    category: 'identification',
    difficulty: 'hard',
    question: 'Which letter warns against false teachers and scoffers who deny Christ\'s return?',
    correctAnswer: '2 Peter',
    distractors: ['Jude', '1 John', '2 Timothy'],
    explanation: '2 Peter addresses false teachers and eschatological skeptics.',
  },
  {
    id: '2pe-002',
    bookId: '2-peter',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which book says: "The Lord is not slow to fulfill his promise...but is patient toward you" (3:9)?',
    correctAnswer: '2 Peter',
    distractors: ['Revelation', 'James', 'Habakkuk'],
    explanation: '2 Peter 3:9 explains God\'s patience regarding Christ\'s return.',
  },
  {
    id: '2pe-003',
    bookId: '2-peter',
    category: 'content',
    difficulty: 'hard',
    question: 'Which letter describes Scripture as produced by men "carried along by the Holy Spirit" (1:21)?',
    correctAnswer: '2 Peter',
    distractors: ['2 Timothy', 'Hebrews', 'John'],
    explanation: '2 Peter 1:20-21 teaches the divine inspiration of Scripture.',
  },

  // 1 John (3 questions)
  {
    id: '1jo-001',
    bookId: '1-john',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which letter repeatedly contrasts light/darkness, truth/lies, and love/hate?',
    correctAnswer: '1 John',
    distractors: ['John', 'James', 'Romans'],
    explanation: '1 John uses stark contrasts throughout.',
  },
  {
    id: '1jo-002',
    bookId: '1-john',
    category: 'key_verse',
    difficulty: 'easy',
    question: 'Which book says: "God is love" (4:8)?',
    correctAnswer: '1 John',
    distractors: ['John', 'Romans', 'Song of Solomon'],
    explanation: '1 John 4:8 is a key theological statement about God\'s nature.',
  },
  {
    id: '1jo-003',
    bookId: '1-john',
    category: 'key_verse',
    difficulty: 'medium',
    question: 'Which letter declares: "If we confess our sins, he is faithful and just to forgive us our sins" (1:9)?',
    correctAnswer: '1 John',
    distractors: ['James', 'Romans', 'Hebrews'],
    explanation: '1 John 1:9 assures believers of forgiveness through confession.',
  },

  // 2 John (3 questions)
  {
    id: '2jo-001',
    bookId: '2-john',
    category: 'identification',
    difficulty: 'hard',
    question: 'Which letter is addressed to "the elect lady and her children"?',
    correctAnswer: '2 John',
    distractors: ['3 John', '1 Peter', 'Titus'],
    explanation: '2 John may address a church personified as a woman.',
  },
  {
    id: '2jo-002',
    bookId: '2-john',
    category: 'content',
    difficulty: 'hard',
    question: 'Which letter warns against receiving false teachers who deny Christ came in the flesh?',
    correctAnswer: '2 John',
    distractors: ['1 John', 'Jude', '3 John'],
    explanation: '2 John warns against hospitality to docetist heretics.',
  },
  {
    id: '2jo-003',
    bookId: '2-john',
    category: 'content',
    difficulty: 'hard',
    question: 'Which of John\'s letters has only 13 verses?',
    correctAnswer: '2 John',
    distractors: ['3 John', '1 John', 'Jude'],
    explanation: '2 John is one of the Bible\'s shortest books.',
  },

  // 3 John (3 questions)
  {
    id: '3jo-001',
    bookId: '3-john',
    category: 'identification',
    difficulty: 'hard',
    question: 'Which letter is addressed to an individual named Gaius?',
    correctAnswer: '3 John',
    distractors: ['2 John', 'Philemon', 'Titus'],
    explanation: '3 John is written to a believer named Gaius.',
  },
  {
    id: '3jo-002',
    bookId: '3-john',
    category: 'content',
    difficulty: 'hard',
    question: 'Which letter condemns Diotrephes for refusing to welcome traveling missionaries?',
    correctAnswer: '3 John',
    distractors: ['2 John', 'Philemon', 'James'],
    explanation: '3 John denounces Diotrephes\' inhospitable behavior.',
  },
  {
    id: '3jo-003',
    bookId: '3-john',
    category: 'content',
    difficulty: 'hard',
    question: 'Which letter commends Demetrius as having "a good testimony from everyone"?',
    correctAnswer: '3 John',
    distractors: ['2 Timothy', 'Titus', 'Philemon'],
    explanation: '3 John holds up Demetrius as a positive example.',
  },

  // Jude (3 questions)
  {
    id: 'jud-001',
    bookId: 'jude',
    category: 'identification',
    difficulty: 'medium',
    question: 'Which one-chapter letter was written by a brother of James (and Jesus)?',
    correctAnswer: 'Jude',
    distractors: ['3 John', 'Philemon', 'Obadiah'],
    explanation: 'Jude identifies himself as James\'s brother.',
  },
  {
    id: 'jud-002',
    bookId: 'jude',
    category: 'content',
    difficulty: 'hard',
    question: 'Which letter urges believers to "contend for the faith that was once for all delivered to the saints" (v. 3)?',
    correctAnswer: 'Jude',
    distractors: ['2 Peter', '1 Timothy', 'Hebrews'],
    explanation: 'Jude calls for defending the apostolic faith.',
  },
  {
    id: 'jud-003',
    bookId: 'jude',
    category: 'content',
    difficulty: 'hard',
    question: 'Which letter references a dispute between Michael and the devil over Moses\' body?',
    correctAnswer: 'Jude',
    distractors: ['Revelation', '2 Peter', 'Hebrews'],
    explanation: 'Jude 9 refers to this extra-biblical tradition.',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // APOCALYPTIC (Revelation)
  // ═══════════════════════════════════════════════════════════════════════════

  // Revelation (3 questions)
  {
    id: 'rev-001',
    bookId: 'revelation',
    category: 'identification',
    difficulty: 'easy',
    question: 'Which book contains letters to seven churches in Asia Minor?',
    correctAnswer: 'Revelation',
    distractors: ['Acts', 'Colossians', '1 Peter'],
    explanation: 'Revelation 2-3 contains letters to churches in Roman Asia.',
  },
  {
    id: 'rev-002',
    bookId: 'revelation',
    category: 'key_verse',
    difficulty: 'easy',
    question: 'Which book says: "Behold, I am making all things new" (21:5)?',
    correctAnswer: 'Revelation',
    distractors: ['Isaiah', '2 Corinthians', 'Romans'],
    explanation: 'Revelation 21:5 promises God\'s complete renewal of creation.',
  },
  {
    id: 'rev-003',
    bookId: 'revelation',
    category: 'content',
    difficulty: 'medium',
    question: 'Which book describes a new heaven, new earth, and the New Jerusalem descending from heaven?',
    correctAnswer: 'Revelation',
    distractors: ['Isaiah', 'Ezekiel', 'Hebrews'],
    explanation: 'Revelation 21-22 portrays the consummation of redemption.',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CANONICAL ORDER QUESTIONS (Bonus)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'can-001',
    bookId: 'joshua',
    category: 'canonical_order',
    difficulty: 'easy',
    question: 'Which book comes immediately after Deuteronomy?',
    correctAnswer: 'Joshua',
    distractors: ['Numbers', 'Judges', 'Ruth'],
    explanation: 'Joshua follows Deuteronomy and begins the historical books.',
  },
  {
    id: 'can-002',
    bookId: 'ruth',
    category: 'canonical_order',
    difficulty: 'medium',
    question: 'Which book comes between Judges and 1 Samuel?',
    correctAnswer: 'Ruth',
    distractors: ['Esther', '1 Chronicles', 'Job'],
    explanation: 'Ruth bridges the period of judges and the monarchy.',
  },
  {
    id: 'can-003',
    bookId: 'ezra',
    category: 'canonical_order',
    difficulty: 'medium',
    question: 'Which book comes immediately after 2 Chronicles?',
    correctAnswer: 'Ezra',
    distractors: ['Nehemiah', 'Esther', 'Job'],
    explanation: 'Ezra continues the narrative from 2 Chronicles.',
  },
  {
    id: 'can-004',
    bookId: 'matthew',
    category: 'canonical_order',
    difficulty: 'easy',
    question: 'Which is the first book of the New Testament?',
    correctAnswer: 'Matthew',
    distractors: ['Mark', 'Luke', 'John'],
    explanation: 'Matthew opens the New Testament canon.',
  },
  {
    id: 'can-005',
    bookId: 'acts',
    category: 'canonical_order',
    difficulty: 'easy',
    question: 'Which book comes between John and Romans?',
    correctAnswer: 'Acts',
    distractors: ['Hebrews', '1 Corinthians', 'Matthew'],
    explanation: 'Acts bridges the Gospels and Paul\'s epistles.',
  },
  {
    id: 'can-006',
    bookId: 'romans',
    category: 'canonical_order',
    difficulty: 'medium',
    question: 'Which is the first of Paul\'s letters in the New Testament canon?',
    correctAnswer: 'Romans',
    distractors: ['Galatians', '1 Corinthians', '1 Thessalonians'],
    explanation: 'Romans comes first among Paul\'s letters in canonical order.',
  },
  {
    id: 'can-007',
    bookId: 'hebrews',
    category: 'canonical_order',
    difficulty: 'medium',
    question: 'Which book comes between Philemon and James?',
    correctAnswer: 'Hebrews',
    distractors: ['Titus', '1 Peter', 'Jude'],
    explanation: 'Hebrews begins the General Epistles section.',
  },
];

// Helper functions for quiz functionality
export function getQuestionsByBook(bookId: string): BibleQuizQuestion[] {
  return BIBLE_QUIZ_QUESTIONS.filter(q => q.bookId === bookId);
}

export function getQuestionsByCategory(category: QuizCategory): BibleQuizQuestion[] {
  return BIBLE_QUIZ_QUESTIONS.filter(q => q.category === category);
}

export function getQuestionsByDifficulty(difficulty: 'easy' | 'medium' | 'hard'): BibleQuizQuestion[] {
  return BIBLE_QUIZ_QUESTIONS.filter(q => q.difficulty === difficulty);
}

export function getQuestionsByTestament(testament: 'old' | 'new'): BibleQuizQuestion[] {
  const oldTestamentBooks = [
    'genesis', 'exodus', 'leviticus', 'numbers', 'deuteronomy',
    'joshua', 'judges', 'ruth', '1-samuel', '2-samuel',
    '1-kings', '2-kings', '1-chronicles', '2-chronicles',
    'ezra', 'nehemiah', 'esther',
    'job', 'psalms', 'proverbs', 'ecclesiastes', 'song-of-solomon',
    'isaiah', 'jeremiah', 'lamentations', 'ezekiel', 'daniel',
    'hosea', 'joel', 'amos', 'obadiah', 'jonah', 'micah',
    'nahum', 'habakkuk', 'zephaniah', 'haggai', 'zechariah', 'malachi'
  ];

  if (testament === 'old') {
    return BIBLE_QUIZ_QUESTIONS.filter(q => oldTestamentBooks.includes(q.bookId));
  } else {
    return BIBLE_QUIZ_QUESTIONS.filter(q => !oldTestamentBooks.includes(q.bookId));
  }
}

export function shuffleQuestions(questions: BibleQuizQuestion[]): BibleQuizQuestion[] {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getRandomQuestions(count: number, filters?: {
  category?: QuizCategory;
  difficulty?: 'easy' | 'medium' | 'hard';
  testament?: 'old' | 'new';
}): BibleQuizQuestion[] {
  let questions = [...BIBLE_QUIZ_QUESTIONS];

  if (filters?.category) {
    questions = questions.filter(q => q.category === filters.category);
  }
  if (filters?.difficulty) {
    questions = questions.filter(q => q.difficulty === filters.difficulty);
  }
  if (filters?.testament) {
    questions = getQuestionsByTestament(filters.testament);
    if (filters.category) {
      questions = questions.filter(q => q.category === filters.category);
    }
    if (filters.difficulty) {
      questions = questions.filter(q => q.difficulty === filters.difficulty);
    }
  }

  return shuffleQuestions(questions).slice(0, count);
}

// Category labels for display
export const QUIZ_CATEGORY_LABELS: Record<QuizCategory, string> = {
  identification: 'Book Identification',
  author: 'Author Attribution',
  content: 'Book Content',
  key_verse: 'Key Verses',
  canonical_order: 'Canonical Order',
};

// Difficulty labels
export const QUIZ_DIFFICULTY_LABELS = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
};
