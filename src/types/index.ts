// Bible types
export type BibleTranslation = 'ESV' | 'NIV' | 'KJV';

export interface BibleBook {
  id: string;
  name: string;
  abbreviation: string;
  testament: 'old' | 'new';
  chapterCount: number;
  order: number;
}

export interface BibleVerse {
  book: string;
  chapter: number;
  verse: number;
  text: string;
  translation: BibleTranslation;
}

export interface BiblePassage {
  reference: string;
  text: string;
  verses: BibleVerse[];
  translation: BibleTranslation;
}

// One2One types
export interface One2OneSession {
  id: string;
  userId: string;
  partnerId?: string;
  passage: {
    reference: string;
    book: string;
    chapter: number;
    startVerse: number;
    endVerse?: number;
  };
  translation: BibleTranslation;
  responses: SessionResponses;
  notes: string;
  status: 'in_progress' | 'completed';
  createdAt: Date;
  completedAt?: Date;
}

export interface SessionResponses {
  readAloud: {
    completed: boolean;
    completedAt?: Date;
  };
  summary: {
    response: string;
    partnerResponse?: string;
  };
  bestBit: {
    response: string;
    verseRef?: string;
    partnerResponse?: string;
    partnerVerseRef?: string;
  };
  mainPoint: {
    response: string;
    partnerResponse?: string;
    agreedMainPoint?: string;
  };
  difficulties: {
    response: string;
    partnerResponse?: string;
    resolutions?: string[];
  };
  application: {
    commitment: string;
    partnerCommitment?: string;
  };
  prayer: {
    prayerPoints: string[];
    prayedTogether: boolean;
    prayedAt?: Date;
  };
}

export const ONE2ONE_QUESTIONS = [
  {
    id: 1,
    title: 'Read Aloud',
    instruction: 'Take turns reading the passage aloud',
    type: 'action' as const,
    tips: ['Read slowly and clearly', 'Different translations can reveal different nuances'],
  },
  {
    id: 2,
    title: 'Summary',
    instruction: 'In your own words, summarize what this passage is about',
    type: 'open_response' as const,
    tips: ["Don't use religious jargon", 'Keep it to 2-3 sentences'],
  },
  {
    id: 3,
    title: 'Best Bit',
    instruction: "What stood out to you the most? What's the 'best bit'?",
    type: 'open_response' as const,
    tips: ['Can be a phrase, verse, or idea', 'Explain why it stood out'],
  },
  {
    id: 4,
    title: 'Main Point',
    instruction: 'What is the main point or central message of this passage?',
    type: 'open_response' as const,
    tips: ['Consider the context', 'What was the author trying to communicate?'],
  },
  {
    id: 5,
    title: 'Difficulties',
    instruction: 'What difficulties or questions do you have about this passage?',
    type: 'open_response' as const,
    tips: ['No question is too simple', "It's okay not to have all the answers"],
  },
  {
    id: 6,
    title: 'Application',
    instruction: 'What will you do about it? How will you apply this to your life?',
    type: 'commitment' as const,
    tips: ['Be specific and practical', 'Set a timeframe if possible'],
  },
  {
    id: 7,
    title: 'Prayer',
    instruction: "Pray together about what you've learned and your applications",
    type: 'action' as const,
    tips: ["Pray for each other's applications", "Thank God for what He's shown you"],
  },
] as const;

// Scripture Memory types
export interface MemoryVerse {
  id: string;
  reference: string;
  book: string;
  chapter: number;
  verse: number;
  endVerse?: number;
  translations: Record<BibleTranslation, string>;
  category: VerseCategory;
  tags: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  wordCount: number;
}

export type VerseCategory =
  | 'salvation'
  | 'faith'
  | 'prayer'
  | 'love'
  | 'forgiveness'
  | 'wisdom'
  | 'hope'
  | 'courage'
  | 'peace'
  | 'obedience'
  | 'promises'
  | 'character'
  | 'gospel'
  | 'worship';

export interface UserMemoryProgress {
  verseId: string;
  verseReference: string;
  status: 'learning' | 'reviewing' | 'mastered';
  masteryLevel: number;
  streak: number;
  totalAttempts: number;
  correctAttempts: number;
  lastPracticed: Date;
  nextReviewDate: Date;
  preferredTranslation: BibleTranslation;
}

// Memory Challenge (Multiplayer) types
export interface MemoryRoom {
  roomCode: string;
  hostId: string;
  guestId?: string;
  status: 'waiting' | 'starting' | 'playing' | 'finished';
  verse: VerseChallenge | null;
  roundCount: number;
  currentRound: number;
  createdAt: number;
}

export interface VerseChallenge {
  reference: string;
  fullText: string;
  displayText: string;
  blanks: BlankSlot[];
  timeLimit: number;
}

export interface BlankSlot {
  index: number;
  position: number;
  answer: string;
  length: number;
}

export interface RoomPlayer {
  id: string;
  displayName: string;
  photoURL?: string;
  isReady: boolean;
  isHost: boolean;
  connected: boolean;
  joinedAt: number;
}

export interface PlayerScore {
  total: number;
  roundScores: number[];
  correctAnswers: number;
  streakCount: number;
}

// Trivia types
export type TriviaCategory =
  | 'old_testament'
  | 'new_testament'
  | 'gospels'
  | 'prophets'
  | 'epistles'
  | 'characters'
  | 'geography'
  | 'numbers'
  | 'parables'
  | 'miracles';

export type TriviaDifficulty = 'easy' | 'medium' | 'hard';

export interface TriviaQuestion {
  id: string;
  question: string;
  answer: string;
  options: string[];
  correctIndex: number;
  category: TriviaCategory;
  difficulty: TriviaDifficulty;
  reference?: string;
  explanation?: string;
}

export interface TriviaGame {
  id: string;
  userId: string;
  category?: TriviaCategory;
  difficulty?: TriviaDifficulty;
  questions: TriviaQuestion[];
  currentQuestion: number;
  score: number;
  streak: number;
  answers: { questionId: string; userAnswer: number; correct: boolean; timeMs: number }[];
  startedAt: Date;
  completedAt?: Date;
}

export interface TriviaStats {
  totalGames: number;
  totalQuestions: number;
  correctAnswers: number;
  bestStreak: number;
  categoryStats: Partial<Record<TriviaCategory, { played: number; correct: number }>>;
}

// Study Plan types (Andrew Cornes)
export interface StudyPlan {
  id: string;
  name: string;
  author: string;
  description: string;
  sessions: StudyPlanSession[];
}

export interface StudyPlanSession {
  sessionNumber: number;
  title: string;
  passage: string;
  focusQuestions?: string[];
  notes?: string;
}
