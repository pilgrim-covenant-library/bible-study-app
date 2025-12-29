/**
 * Memory Verse Themes
 *
 * Maps memory verses to theological themes for filtering and organized study.
 * Themes align with Reformed theology categories and practical Christian living.
 */

export interface VerseTheme {
  id: string;
  name: string;
  shortName: string;
  description: string;
  color: string; // Tailwind color class
  icon: string; // Icon identifier for UI
}

// Theological and practical themes for memory verses
export const VERSE_THEMES: VerseTheme[] = [
  // Theology Proper - God's Nature & Works
  {
    id: 'god-nature',
    name: "God's Nature & Attributes",
    shortName: 'God',
    description: 'Verses about who God is: His sovereignty, holiness, love, faithfulness, and divine attributes',
    color: 'indigo',
    icon: 'crown',
  },
  {
    id: 'creation',
    name: 'Creation & Providence',
    shortName: 'Creation',
    description: 'Verses about God as Creator, His sustaining of creation, and providential care',
    color: 'emerald',
    icon: 'globe',
  },

  // Christology
  {
    id: 'christ-person',
    name: 'Person of Christ',
    shortName: 'Christ',
    description: 'Verses about who Jesus is: His deity, humanity, incarnation, and titles',
    color: 'purple',
    icon: 'star',
  },
  {
    id: 'gospel',
    name: 'Gospel & Atonement',
    shortName: 'Gospel',
    description: "Verses about Christ's death, resurrection, and the message of salvation",
    color: 'red',
    icon: 'cross',
  },

  // Soteriology - Salvation
  {
    id: 'salvation',
    name: 'Salvation & Grace',
    shortName: 'Salvation',
    description: 'Verses about being saved by grace through faith, justification, and redemption',
    color: 'rose',
    icon: 'heart',
  },
  {
    id: 'faith',
    name: 'Faith & Belief',
    shortName: 'Faith',
    description: 'Verses about trusting God, believing His promises, and walking by faith',
    color: 'amber',
    icon: 'shield',
  },
  {
    id: 'repentance',
    name: 'Repentance & Forgiveness',
    shortName: 'Repentance',
    description: 'Verses about turning from sin, receiving forgiveness, and restoration',
    color: 'slate',
    icon: 'refresh',
  },

  // Sanctification & Christian Life
  {
    id: 'holiness',
    name: 'Holiness & Sanctification',
    shortName: 'Holiness',
    description: 'Verses about growing in holiness, purity, and Christlikeness',
    color: 'sky',
    icon: 'sparkles',
  },
  {
    id: 'obedience',
    name: 'Obedience & Commandments',
    shortName: 'Obedience',
    description: "Verses about following God's commands, law, and will",
    color: 'blue',
    icon: 'check',
  },
  {
    id: 'love',
    name: 'Love & Relationships',
    shortName: 'Love',
    description: 'Verses about loving God, loving others, and Christian relationships',
    color: 'pink',
    icon: 'heart',
  },

  // Spiritual Life
  {
    id: 'prayer',
    name: 'Prayer & Worship',
    shortName: 'Prayer',
    description: 'Verses about communicating with God, praise, and adoration',
    color: 'violet',
    icon: 'hands',
  },
  {
    id: 'scripture',
    name: 'Scripture & Truth',
    shortName: 'Scripture',
    description: "Verses about God's Word, truth, and the authority of Scripture",
    color: 'orange',
    icon: 'book',
  },
  {
    id: 'holy-spirit',
    name: 'Holy Spirit',
    shortName: 'Spirit',
    description: 'Verses about the person and work of the Holy Spirit',
    color: 'cyan',
    icon: 'wind',
  },

  // Trials & Comfort
  {
    id: 'comfort',
    name: 'Comfort & Peace',
    shortName: 'Comfort',
    description: "Verses about God's comfort, peace, and rest in troubled times",
    color: 'teal',
    icon: 'cloud',
  },
  {
    id: 'trials',
    name: 'Trials & Perseverance',
    shortName: 'Trials',
    description: 'Verses about enduring hardship, testing, and remaining faithful',
    color: 'stone',
    icon: 'mountain',
  },
  {
    id: 'strength',
    name: 'Strength & Courage',
    shortName: 'Strength',
    description: "Verses about God's strength, courage, and not fearing",
    color: 'yellow',
    icon: 'bolt',
  },

  // Hope & Future
  {
    id: 'hope',
    name: 'Hope & Promises',
    shortName: 'Hope',
    description: "Verses about hope in God, His promises, and future assurance",
    color: 'lime',
    icon: 'sun',
  },
  {
    id: 'eternal-life',
    name: 'Eternal Life & Heaven',
    shortName: 'Eternity',
    description: 'Verses about eternal life, resurrection, and the life to come',
    color: 'fuchsia',
    icon: 'infinity',
  },

  // Practical Christian Living
  {
    id: 'wisdom',
    name: 'Wisdom & Guidance',
    shortName: 'Wisdom',
    description: 'Verses about seeking wisdom, guidance, and making godly decisions',
    color: 'amber',
    icon: 'lightbulb',
  },
  {
    id: 'service',
    name: 'Service & Mission',
    shortName: 'Service',
    description: 'Verses about serving others, evangelism, and kingdom work',
    color: 'green',
    icon: 'users',
  },
  {
    id: 'stewardship',
    name: 'Stewardship & Generosity',
    shortName: 'Stewardship',
    description: 'Verses about managing resources, giving, and generosity',
    color: 'emerald',
    icon: 'gift',
  },

  // Identity & Assurance
  {
    id: 'identity',
    name: 'Identity in Christ',
    shortName: 'Identity',
    description: 'Verses about who we are in Christ, adoption, and new creation',
    color: 'violet',
    icon: 'user',
  },
  {
    id: 'assurance',
    name: 'Assurance & Security',
    shortName: 'Assurance',
    description: 'Verses about the security of salvation and confidence in Christ',
    color: 'blue',
    icon: 'lock',
  },

  // Covenants & Redemption History
  {
    id: 'covenant',
    name: 'Covenant & Promise',
    shortName: 'Covenant',
    description: "Verses about God's covenants, promises to His people, and faithfulness",
    color: 'indigo',
    icon: 'scroll',
  },
  {
    id: 'prophecy',
    name: 'Prophecy & Fulfillment',
    shortName: 'Prophecy',
    description: 'Verses containing Messianic prophecy or prophetic fulfillment',
    color: 'purple',
    icon: 'eye',
  },
];

// Map verse IDs to their theme IDs (a verse can have multiple themes)
export const VERSE_THEME_MAP: Record<string, string[]> = {
  // ============ GENESIS ============
  'genesis-1-1': ['creation', 'god-nature'],
  'genesis-1-27': ['creation', 'identity'],
  'genesis-2-24': ['love', 'obedience'],
  'genesis-3-15': ['gospel', 'prophecy', 'covenant'],
  'genesis-9-6': ['creation', 'identity'],
  'genesis-12-2': ['covenant', 'hope'],
  'genesis-12-3': ['covenant', 'gospel', 'prophecy'],
  'genesis-15-6': ['faith', 'salvation'],
  'genesis-22-8': ['prophecy', 'gospel'],
  'genesis-22-14': ['god-nature', 'faith'],
  'genesis-28-15': ['god-nature', 'comfort', 'hope'],
  'genesis-50-20': ['god-nature', 'comfort', 'hope'],

  // ============ EXODUS ============
  'exodus-3-14': ['god-nature'],
  'exodus-12-13': ['gospel', 'salvation', 'prophecy'],
  'exodus-14-14': ['strength', 'faith', 'comfort'],
  'exodus-15-2': ['salvation', 'prayer'],
  'exodus-19-5': ['covenant', 'obedience'],
  'exodus-20-2': ['god-nature', 'salvation'],
  'exodus-20-3': ['god-nature', 'obedience'],
  'exodus-33-14': ['comfort', 'god-nature'],
  'exodus-33-18-19': ['god-nature', 'salvation'],
  'exodus-34-6-7': ['god-nature', 'repentance'],

  // ============ LEVITICUS ============
  'leviticus-17-11': ['gospel', 'salvation'],
  'leviticus-19-18': ['love', 'obedience'],
  'leviticus-20-26': ['holiness', 'identity'],
  'leviticus-11-45': ['holiness', 'god-nature'],
  'leviticus-19-2': ['holiness', 'obedience'],
  'leviticus-26-12': ['covenant', 'identity'],
  'leviticus-16-30': ['repentance', 'salvation'],
  'leviticus-23-3': ['obedience', 'prayer'],

  // ============ NUMBERS ============
  'numbers-6-24-26': ['comfort', 'god-nature', 'prayer'],
  'numbers-23-19': ['god-nature', 'faith'],
  'numbers-14-18': ['god-nature', 'repentance'],
  'numbers-14-21': ['god-nature', 'hope'],
  'numbers-11-23': ['god-nature', 'faith'],
  'numbers-21-8-9': ['prophecy', 'gospel'],
  'numbers-6-25': ['comfort', 'prayer'],
  'numbers-15-40': ['holiness', 'obedience'],

  // ============ DEUTERONOMY ============
  'deuteronomy-6-4-5': ['god-nature', 'love', 'obedience'],
  'deuteronomy-31-6': ['strength', 'comfort', 'faith'],
  'deuteronomy-31-8': ['strength', 'comfort'],
  'deuteronomy-7-9': ['god-nature', 'covenant'],
  'deuteronomy-29-29': ['god-nature', 'wisdom', 'scripture'],

  // ============ JOSHUA ============
  'joshua-1-8': ['scripture', 'wisdom', 'obedience'],
  'joshua-1-9': ['strength', 'comfort', 'faith'],
  'joshua-24-15': ['obedience', 'faith'],
  'joshua-1-5': ['comfort', 'faith', 'god-nature'],
  'joshua-21-45': ['god-nature', 'covenant', 'hope'],
  'joshua-23-14': ['god-nature', 'covenant'],
  'joshua-24-14': ['obedience', 'holiness'],
  'joshua-3-5': ['holiness', 'faith'],

  // ============ JUDGES ============
  'judges-2-16': ['salvation', 'god-nature'],
  'judges-6-12': ['strength', 'identity'],
  'judges-6-14': ['service', 'strength'],
  'judges-7-2': ['god-nature', 'faith'],
  'judges-5-3': ['prayer', 'god-nature'],
  'judges-8-23': ['god-nature', 'obedience'],
  'judges-10-15': ['repentance'],
  'judges-21-25': ['obedience', 'wisdom'],

  // ============ RUTH ============
  'ruth-1-16': ['love', 'faith', 'covenant'],
  'ruth-2-12': ['god-nature', 'faith'],
  'ruth-4-14': ['god-nature', 'salvation'],
  'ruth-1-17': ['love', 'faith'],
  'ruth-2-20': ['god-nature', 'hope'],
  'ruth-3-9': ['salvation', 'identity'],
  'ruth-3-11': ['identity', 'holiness'],
  'ruth-4-17': ['prophecy', 'covenant'],

  // ============ 1 SAMUEL ============
  '1-samuel-2-2': ['god-nature', 'holiness'],
  '1-samuel-15-22': ['obedience', 'prayer'],
  '1-samuel-16-7': ['god-nature', 'identity'],
  '1-samuel-17-45': ['faith', 'god-nature'],
  '1-samuel-2-30': ['obedience', 'god-nature'],
  '1-samuel-7-12': ['god-nature', 'faith'],
  '1-samuel-12-24': ['obedience', 'service'],
  '1-samuel-3-9': ['prayer', 'obedience'],

  // ============ 2 SAMUEL ============
  '2-samuel-7-22': ['god-nature'],
  '2-samuel-22-2-3': ['god-nature', 'comfort', 'salvation'],
  '2-samuel-22-31': ['god-nature', 'faith'],
  '2-samuel-7-28': ['god-nature', 'scripture'],
  '2-samuel-22-47': ['god-nature', 'salvation'],
  '2-samuel-23-3-4': ['obedience', 'wisdom'],
  '2-samuel-24-14': ['god-nature', 'repentance'],
  '2-samuel-22-4': ['prayer', 'god-nature'],

  // ============ 1 KINGS ============
  '1-kings-8-56': ['god-nature', 'covenant', 'hope'],
  '1-kings-18-21': ['faith', 'obedience'],
  '1-kings-8-27': ['god-nature'],
  '1-kings-3-9': ['wisdom', 'prayer'],
  '1-kings-8-60': ['god-nature', 'service'],
  '1-kings-8-23': ['god-nature', 'covenant'],
  '1-kings-9-4-5': ['obedience', 'covenant'],
  '1-kings-19-12': ['god-nature', 'prayer'],

  // ============ 2 KINGS ============
  '2-kings-17-39': ['god-nature', 'salvation'],
  '2-kings-19-15': ['god-nature', 'prayer'],
  '2-kings-6-16': ['faith', 'strength'],
  '2-kings-20-5': ['prayer', 'god-nature'],
  '2-kings-23-25': ['love', 'obedience'],
  '2-kings-19-19': ['god-nature', 'prayer'],
  '2-kings-5-15': ['god-nature', 'faith'],
  '2-kings-18-6': ['faith', 'obedience'],

  // ============ 1 CHRONICLES ============
  '1-chronicles-16-11': ['prayer', 'faith'],
  '1-chronicles-29-11': ['god-nature', 'prayer'],
  '1-chronicles-16-34': ['god-nature', 'prayer'],
  '1-chronicles-17-20': ['god-nature'],
  '1-chronicles-28-9': ['god-nature', 'faith'],
  '1-chronicles-29-13': ['prayer', 'god-nature'],
  '1-chronicles-16-8': ['prayer', 'service'],
  '1-chronicles-22-19': ['prayer', 'obedience'],

  // ============ 2 CHRONICLES ============
  '2-chronicles-7-14': ['repentance', 'prayer', 'hope'],
  '2-chronicles-16-9': ['god-nature', 'faith'],
  '2-chronicles-20-12': ['prayer', 'faith'],
  '2-chronicles-15-2': ['faith', 'god-nature'],
  '2-chronicles-20-15': ['faith', 'strength'],
  '2-chronicles-6-14': ['god-nature', 'covenant'],
  '2-chronicles-20-17': ['faith', 'salvation'],
  '2-chronicles-32-8': ['strength', 'faith'],

  // ============ EZRA ============
  'ezra-7-10': ['scripture', 'obedience'],
  'ezra-8-22': ['god-nature', 'faith'],
  'ezra-3-11': ['god-nature', 'prayer'],
  'ezra-7-27': ['god-nature', 'prayer'],
  'ezra-9-9': ['god-nature', 'salvation'],
  'ezra-6-22': ['god-nature', 'prayer'],
  'ezra-1-3': ['god-nature', 'service'],
  'ezra-9-6': ['repentance', 'prayer'],

  // ============ NEHEMIAH ============
  'nehemiah-8-10': ['comfort', 'strength'],
  'nehemiah-9-6': ['god-nature', 'creation'],
  'nehemiah-1-5': ['god-nature', 'covenant'],
  'nehemiah-9-17': ['god-nature', 'repentance'],
  'nehemiah-4-14': ['faith', 'strength'],
  'nehemiah-2-20': ['faith', 'service'],
  'nehemiah-9-31': ['god-nature', 'salvation'],
  'nehemiah-8-8': ['scripture', 'wisdom'],

  // ============ ESTHER ============
  'esther-4-14': ['god-nature', 'service'],
  'esther-4-16': ['faith', 'prayer'],
  'esther-9-22': ['comfort', 'prayer'],
  'esther-6-13': ['god-nature', 'covenant'],
  'esther-8-16': ['comfort', 'hope'],
  'esther-2-17': ['god-nature'],
  'esther-9-28': ['covenant', 'hope'],
  'esther-10-3': ['service', 'wisdom'],

  // ============ JOB ============
  'job-1-21': ['god-nature', 'trials'],
  'job-19-25': ['christ-person', 'hope', 'eternal-life'],
  'job-13-15': ['faith', 'trials'],
  'job-42-2': ['god-nature'],
  'job-23-10': ['trials', 'holiness'],
  'job-38-4': ['god-nature', 'creation'],
  'job-19-26-27': ['eternal-life', 'hope'],
  'job-28-28': ['wisdom', 'holiness'],

  // ============ PSALMS ============
  'psalms-23-1': ['god-nature', 'comfort'],
  'psalms-23-4': ['comfort', 'trials'],
  'psalms-27-1': ['strength', 'faith'],
  'psalms-46-1': ['strength', 'comfort'],
  'psalms-46-10': ['god-nature', 'peace'],
  'psalms-91-1-2': ['god-nature', 'comfort'],
  'psalms-103-12': ['repentance', 'salvation'],
  'psalms-119-105': ['scripture', 'wisdom'],
  'psalms-119-11': ['scripture', 'holiness'],
  'psalms-139-14': ['creation', 'identity'],
  'psalms-145-18': ['prayer', 'god-nature'],
  'psalms-37-4': ['prayer', 'faith'],
  'psalms-1-1-2': ['scripture', 'holiness'],
  'psalms-19-1': ['creation', 'god-nature'],
  'psalms-34-8': ['god-nature', 'faith'],
  'psalms-40-1-2': ['trials', 'salvation'],
  'psalms-51-10': ['repentance', 'holiness'],
  'psalms-55-22': ['trials', 'comfort'],
  'psalms-73-25-26': ['god-nature', 'faith'],
  'psalms-119-9': ['scripture', 'holiness'],
  'psalms-121-1-2': ['god-nature', 'strength'],
  'psalms-150-6': ['prayer', 'creation'],

  // ============ PROVERBS ============
  'proverbs-3-5-6': ['faith', 'wisdom'],
  'proverbs-3-9-10': ['stewardship', 'obedience'],
  'proverbs-9-10': ['wisdom', 'god-nature'],
  'proverbs-16-3': ['faith', 'wisdom'],
  'proverbs-22-6': ['wisdom', 'service'],
  'proverbs-27-17': ['love', 'wisdom'],
  'proverbs-1-7': ['wisdom', 'god-nature'],
  'proverbs-2-6': ['wisdom', 'god-nature'],
  'proverbs-4-23': ['holiness', 'wisdom'],
  'proverbs-11-25': ['stewardship', 'love'],
  'proverbs-14-12': ['wisdom', 'obedience'],
  'proverbs-15-1': ['wisdom', 'love'],
  'proverbs-18-10': ['god-nature', 'comfort'],
  'proverbs-19-21': ['god-nature', 'wisdom'],
  'proverbs-31-30': ['holiness', 'wisdom'],

  // ============ ECCLESIASTES ============
  'ecclesiastes-3-1': ['god-nature', 'wisdom'],
  'ecclesiastes-12-13': ['obedience', 'wisdom'],
  'ecclesiastes-4-9-10': ['love', 'wisdom'],
  'ecclesiastes-5-2': ['prayer', 'wisdom'],
  'ecclesiastes-7-14': ['god-nature', 'wisdom'],
  'ecclesiastes-9-10': ['service', 'wisdom'],
  'ecclesiastes-11-5': ['god-nature', 'creation'],
  'ecclesiastes-12-1': ['wisdom', 'creation'],

  // ============ SONG OF SOLOMON ============
  'song-of-solomon-2-4': ['love', 'god-nature'],
  'song-of-solomon-8-6-7': ['love'],
  'song-of-solomon-2-16': ['love', 'identity'],
  'song-of-solomon-4-7': ['love', 'identity'],
  'song-of-solomon-1-2': ['love'],
  'song-of-solomon-6-3': ['love', 'identity'],
  'song-of-solomon-5-16': ['love', 'christ-person'],
  'song-of-solomon-8-14': ['love', 'hope'],

  // ============ ISAIAH ============
  'isaiah-9-6': ['christ-person', 'prophecy'],
  'isaiah-40-31': ['strength', 'faith', 'hope'],
  'isaiah-41-10': ['strength', 'comfort'],
  'isaiah-53-5': ['gospel', 'salvation', 'prophecy'],
  'isaiah-53-6': ['gospel', 'salvation'],
  'isaiah-55-8-9': ['god-nature', 'wisdom'],
  'isaiah-6-3': ['god-nature', 'holiness'],
  'isaiah-7-14': ['prophecy', 'christ-person'],
  'isaiah-26-3': ['peace', 'faith'],
  'isaiah-43-2': ['trials', 'comfort'],
  'isaiah-40-8': ['scripture', 'god-nature'],
  'isaiah-55-11': ['scripture', 'god-nature'],
  'isaiah-64-6': ['gospel', 'salvation'],

  // ============ JEREMIAH ============
  'jeremiah-29-11': ['hope', 'god-nature'],
  'jeremiah-31-3': ['love', 'god-nature'],
  'jeremiah-33-3': ['prayer', 'god-nature'],
  'jeremiah-17-7-8': ['faith', 'hope'],
  'jeremiah-10-23': ['god-nature', 'wisdom'],
  'jeremiah-9-23-24': ['god-nature', 'wisdom'],

  // ============ LAMENTATIONS ============
  'lamentations-3-22-23': ['god-nature', 'hope'],
  'lamentations-3-25': ['hope', 'faith'],
  'lamentations-3-26': ['hope', 'faith'],
  'lamentations-3-40': ['repentance', 'holiness'],
  'lamentations-3-32-33': ['god-nature', 'trials'],
  'lamentations-3-57': ['prayer', 'comfort'],
  'lamentations-5-19': ['god-nature', 'hope'],
  'lamentations-5-21': ['repentance', 'prayer'],

  // ============ EZEKIEL ============
  'ezekiel-36-26': ['salvation', 'holy-spirit'],
  'ezekiel-37-14': ['holy-spirit', 'eternal-life'],
  'ezekiel-34-26': ['god-nature', 'hope'],
  'ezekiel-11-19': ['salvation', 'holy-spirit'],
  'ezekiel-18-32': ['repentance', 'god-nature'],
  'ezekiel-36-27': ['holy-spirit', 'obedience'],
  'ezekiel-37-5': ['eternal-life', 'holy-spirit'],
  'ezekiel-34-15': ['god-nature', 'comfort'],

  // ============ DANIEL ============
  'daniel-2-21': ['god-nature', 'wisdom'],
  'daniel-3-17-18': ['faith', 'trials'],
  'daniel-4-35': ['god-nature'],
  'daniel-6-26-27': ['god-nature'],
  'daniel-9-9': ['god-nature', 'repentance'],
  'daniel-7-14': ['christ-person', 'prophecy'],
  'daniel-12-3': ['eternal-life', 'service'],
  'daniel-10-12': ['prayer', 'faith'],

  // ============ HOSEA ============
  'hosea-6-6': ['love', 'obedience'],
  'hosea-14-4': ['salvation', 'love'],
  'hosea-2-19-20': ['love', 'covenant'],
  'hosea-6-3': ['god-nature', 'faith'],
  'hosea-11-4': ['love', 'god-nature'],
  'hosea-14-9': ['wisdom', 'obedience'],

  // ============ JOEL ============
  'joel-2-28': ['holy-spirit', 'prophecy'],
  'joel-2-32': ['salvation', 'prayer'],
  'joel-2-12-13': ['repentance', 'god-nature'],
  'joel-2-25': ['hope', 'god-nature'],
  'joel-3-16': ['god-nature', 'comfort'],
  'joel-2-26': ['hope', 'god-nature'],

  // ============ AMOS ============
  'amos-5-24': ['obedience', 'holiness'],
  'amos-3-3': ['love', 'obedience'],
  'amos-4-13': ['god-nature', 'creation'],
  'amos-5-4': ['salvation', 'faith'],
  'amos-5-14': ['holiness', 'obedience'],
  'amos-9-11': ['prophecy', 'hope'],

  // ============ OBADIAH ============
  'obadiah-1-15': ['god-nature', 'prophecy'],
  'obadiah-1-21': ['god-nature', 'hope'],
  'obadiah-1-17': ['hope', 'salvation'],
  'obadiah-1-10': ['god-nature', 'repentance'],
  'obadiah-1-3': ['god-nature', 'wisdom'],
  'obadiah-1-4': ['god-nature'],

  // ============ JONAH ============
  'jonah-2-9': ['salvation', 'god-nature'],
  'jonah-4-2': ['god-nature', 'repentance'],
  'jonah-1-9': ['god-nature', 'creation'],
  'jonah-2-7': ['prayer', 'salvation'],
  'jonah-3-10': ['repentance', 'god-nature'],
  'jonah-4-11': ['love', 'god-nature'],
  'jonah-2-2': ['prayer', 'trials'],
  'jonah-3-5': ['repentance', 'faith'],

  // ============ MICAH ============
  'micah-6-8': ['obedience', 'love', 'holiness'],
  'micah-7-18-19': ['god-nature', 'repentance'],
  'micah-5-2': ['prophecy', 'christ-person'],
  'micah-7-7': ['hope', 'faith'],
  'micah-4-5': ['obedience', 'faith'],
  'micah-6-6-7': ['obedience', 'prayer'],

  // ============ NAHUM ============
  'nahum-1-7': ['god-nature', 'comfort'],
  'nahum-1-2-3': ['god-nature'],
  'nahum-1-15': ['gospel', 'peace'],
  'nahum-1-3': ['god-nature'],
  'nahum-1-6': ['god-nature'],
  'nahum-1-9': ['god-nature'],

  // ============ HABAKKUK ============
  'habakkuk-2-4': ['faith', 'salvation'],
  'habakkuk-3-17-18': ['faith', 'trials'],
  'habakkuk-2-14': ['god-nature', 'hope'],
  'habakkuk-1-5': ['god-nature', 'faith'],
  'habakkuk-2-20': ['god-nature', 'prayer'],
  'habakkuk-3-2': ['prayer', 'god-nature'],

  // ============ ZEPHANIAH ============
  'zephaniah-3-17': ['love', 'god-nature', 'comfort'],
  'zephaniah-2-3': ['holiness', 'trials'],
  'zephaniah-3-9': ['prayer', 'service'],
  'zephaniah-3-12': ['identity', 'faith'],
  'zephaniah-1-7': ['god-nature', 'prayer'],
  'zephaniah-2-11': ['god-nature', 'prayer'],
  'zephaniah-3-14-15': ['comfort', 'god-nature'],
  'zephaniah-3-20': ['hope', 'salvation'],

  // ============ HAGGAI ============
  'haggai-2-4-5': ['strength', 'holy-spirit'],
  'haggai-1-5-6': ['wisdom', 'obedience'],
  'haggai-2-9': ['hope', 'god-nature'],
  'haggai-1-7-8': ['obedience', 'service'],
  'haggai-2-19': ['god-nature', 'stewardship'],
  'haggai-2-6-7': ['prophecy', 'god-nature'],

  // ============ ZECHARIAH ============
  'zechariah-4-6': ['holy-spirit', 'strength'],
  'zechariah-9-9': ['prophecy', 'christ-person'],
  'zechariah-13-9': ['trials', 'faith'],
  'zechariah-8-16': ['holiness', 'love'],
  'zechariah-7-9-10': ['love', 'obedience'],
  'zechariah-8-23': ['service', 'covenant'],
  'zechariah-2-10': ['god-nature', 'comfort'],
  'zechariah-14-9': ['god-nature', 'hope'],

  // ============ MALACHI ============
  'malachi-3-6': ['god-nature', 'covenant'],
  'malachi-3-10': ['stewardship', 'faith'],
  'malachi-4-2': ['prophecy', 'christ-person', 'hope'],
  'malachi-1-11': ['god-nature', 'prayer'],
  'malachi-3-1': ['prophecy', 'christ-person'],
  'malachi-2-16': ['love', 'obedience'],
  'malachi-3-17': ['identity', 'god-nature'],
  'malachi-4-6': ['love', 'hope'],

  // ============ MATTHEW ============
  'matthew-6-33': ['faith', 'obedience'],
  'matthew-11-28-30': ['comfort', 'salvation'],
  'matthew-28-19-20': ['service', 'holy-spirit'],
  'matthew-5-16': ['holiness', 'service'],
  'matthew-7-7': ['prayer', 'faith'],
  'matthew-22-37-39': ['love', 'obedience'],
  'matthew-5-14': ['identity', 'service'],
  'matthew-6-9-13': ['prayer'],
  'matthew-16-24': ['obedience', 'trials'],
  'matthew-18-20': ['prayer', 'holy-spirit'],

  // ============ MARK ============
  'mark-10-45': ['gospel', 'christ-person', 'service'],
  'mark-12-30-31': ['love', 'obedience'],
  'mark-8-34': ['obedience', 'trials'],
  'mark-9-23': ['faith'],
  'mark-11-24': ['prayer', 'faith'],
  'mark-16-15': ['service', 'gospel'],

  // ============ LUKE ============
  'luke-6-27-28': ['love', 'obedience'],
  'luke-9-23': ['obedience', 'trials'],
  'luke-19-10': ['gospel', 'salvation', 'christ-person'],
  'luke-1-37': ['god-nature', 'faith'],
  'luke-6-38': ['stewardship', 'love'],
  'luke-10-27': ['love', 'obedience'],
  'luke-11-9': ['prayer', 'faith'],
  'luke-12-34': ['stewardship', 'wisdom'],
  'luke-14-27': ['obedience', 'trials'],
  'luke-18-27': ['god-nature', 'faith'],

  // ============ JOHN ============
  'john-1-1': ['christ-person', 'god-nature'],
  'john-1-12': ['salvation', 'identity'],
  'john-3-16': ['gospel', 'salvation', 'love'],
  'john-10-10': ['salvation', 'eternal-life'],
  'john-14-6': ['christ-person', 'salvation'],
  'john-15-5': ['faith', 'holy-spirit'],
  'john-16-33': ['trials', 'comfort'],
  'john-8-32': ['scripture', 'salvation'],

  // ============ ACTS ============
  'acts-1-8': ['holy-spirit', 'service'],
  'acts-2-38': ['repentance', 'holy-spirit', 'salvation'],
  'acts-4-12': ['salvation', 'christ-person'],
  'acts-16-31': ['salvation', 'faith'],
  'acts-17-28': ['god-nature', 'creation'],
  'acts-20-24': ['service', 'gospel'],
  'acts-2-21': ['salvation', 'prayer'],
  'acts-3-19': ['repentance', 'salvation'],
  'acts-5-29': ['obedience', 'faith'],
  'acts-17-11': ['scripture', 'wisdom'],

  // ============ ROMANS ============
  'romans-1-16': ['gospel', 'salvation'],
  'romans-3-23': ['gospel', 'salvation'],
  'romans-5-8': ['gospel', 'love'],
  'romans-6-23': ['gospel', 'salvation', 'eternal-life'],
  'romans-8-1': ['salvation', 'assurance'],
  'romans-8-28': ['god-nature', 'comfort', 'hope'],
  'romans-8-38-39': ['love', 'assurance'],
  'romans-10-9': ['salvation', 'faith'],
  'romans-10-17': ['faith', 'scripture'],
  'romans-12-1-2': ['holiness', 'obedience'],
  'romans-5-1': ['salvation', 'peace'],
  'romans-6-4': ['salvation', 'holy-spirit'],
  'romans-8-11': ['eternal-life', 'holy-spirit'],
  'romans-8-18': ['trials', 'hope'],
  'romans-12-12': ['hope', 'trials', 'prayer'],
  'romans-15-13': ['hope', 'holy-spirit'],

  // ============ 1 CORINTHIANS ============
  '1-corinthians-10-13': ['trials', 'god-nature'],
  '1-corinthians-13-4-7': ['love'],
  '1-corinthians-15-55-57': ['eternal-life', 'salvation'],
  '1-corinthians-1-18': ['gospel', 'salvation'],
  '1-corinthians-2-9': ['hope', 'love'],
  '1-corinthians-6-19-20': ['identity', 'holy-spirit', 'holiness'],
  '1-corinthians-10-31': ['holiness', 'service'],
  '1-corinthians-15-58': ['service', 'hope'],

  // ============ 2 CORINTHIANS ============
  '2-corinthians-5-17': ['salvation', 'identity'],
  '2-corinthians-5-21': ['gospel', 'salvation'],
  '2-corinthians-12-9': ['strength', 'trials'],
  '2-corinthians-4-16-18': ['hope', 'trials'],
  '2-corinthians-9-7': ['stewardship', 'love'],
  '2-corinthians-1-3-4': ['comfort', 'trials'],
  '2-corinthians-3-18': ['holiness', 'holy-spirit'],
  '2-corinthians-4-7': ['trials', 'god-nature'],

  // ============ GALATIANS ============
  'galatians-2-20': ['salvation', 'faith', 'identity'],
  'galatians-5-22-23': ['holy-spirit', 'holiness'],
  'galatians-6-9': ['service', 'trials'],
  'galatians-3-26-27': ['salvation', 'identity'],
  'galatians-5-1': ['salvation', 'identity'],
  'galatians-5-13': ['love', 'service'],
  'galatians-6-2': ['love', 'service'],
  'galatians-6-7': ['obedience', 'wisdom'],
  'galatians-3-28': ['identity', 'love'],
  'galatians-2-16': ['salvation', 'faith'],
  'galatians-4-4-5': ['gospel', 'christ-person'],

  // ============ EPHESIANS ============
  'ephesians-2-8-9': ['salvation', 'faith'],
  'ephesians-4-32': ['love', 'repentance'],
  'ephesians-6-10-11': ['strength', 'trials'],
  'ephesians-1-3': ['identity', 'god-nature'],
  'ephesians-1-7': ['salvation', 'gospel'],
  'ephesians-2-4-5': ['salvation', 'love'],
  'ephesians-2-10': ['identity', 'service'],
  'ephesians-3-20-21': ['god-nature', 'prayer'],
  'ephesians-4-2-3': ['love', 'holy-spirit'],
  'ephesians-5-1-2': ['love', 'holiness'],
  'ephesians-5-25': ['love', 'christ-person'],
  'ephesians-6-12': ['trials', 'strength'],
  'ephesians-6-18': ['prayer', 'holy-spirit'],

  // ============ PHILIPPIANS ============
  'philippians-1-6': ['assurance', 'god-nature'],
  'philippians-2-3-4': ['love', 'holiness'],
  'philippians-4-6-7': ['prayer', 'peace'],
  'philippians-4-13': ['strength', 'faith'],
  'philippians-4-19': ['god-nature', 'faith'],
  'philippians-2-9-11': ['christ-person', 'prayer'],
  'philippians-3-10': ['christ-person', 'trials'],
  'philippians-3-13-14': ['faith', 'hope'],

  // ============ COLOSSIANS ============
  'colossians-1-16-17': ['christ-person', 'creation'],
  'colossians-2-6-7': ['faith', 'christ-person'],
  'colossians-3-2': ['holiness', 'hope'],
  'colossians-3-12-14': ['love', 'holiness'],
  'colossians-3-15': ['peace', 'prayer'],
  'colossians-3-17': ['holiness', 'prayer'],
  'colossians-3-23-24': ['service', 'obedience'],
  'colossians-1-27': ['christ-person', 'hope'],

  // ============ 1 THESSALONIANS ============
  '1-thessalonians-4-16-17': ['eternal-life', 'hope'],
  '1-thessalonians-5-16-18': ['prayer', 'holiness'],
  '1-thessalonians-5-11': ['love', 'service'],
  '1-thessalonians-5-23-24': ['holiness', 'god-nature'],
  '1-thessalonians-5-8': ['hope', 'faith'],
  '1-thessalonians-2-13': ['scripture', 'faith'],
  '1-thessalonians-4-3': ['holiness', 'obedience'],
  '1-thessalonians-3-12-13': ['love', 'holiness'],

  // ============ 2 THESSALONIANS ============
  '2-thessalonians-1-11-12': ['prayer', 'service'],
  '2-thessalonians-3-3': ['god-nature', 'assurance'],
  '2-thessalonians-2-16-17': ['comfort', 'hope'],
  '2-thessalonians-3-5': ['love', 'trials'],
  '2-thessalonians-1-7': ['eternal-life', 'trials'],
  '2-thessalonians-3-13': ['service', 'trials'],
  '2-thessalonians-2-13': ['salvation', 'holy-spirit'],
  '2-thessalonians-3-16': ['peace', 'god-nature'],

  // ============ 1 TIMOTHY ============
  '1-timothy-2-5': ['christ-person', 'salvation'],
  '1-timothy-4-12': ['holiness', 'service'],
  '1-timothy-6-12': ['faith', 'eternal-life'],
  '1-timothy-1-15': ['gospel', 'salvation'],
  '1-timothy-2-1-2': ['prayer', 'service'],
  '1-timothy-4-8': ['holiness', 'hope'],
  '1-timothy-6-6': ['holiness', 'wisdom'],
  '1-timothy-6-17': ['stewardship', 'hope'],

  // ============ 2 TIMOTHY ============
  '2-timothy-1-7': ['holy-spirit', 'strength'],
  '2-timothy-2-15': ['scripture', 'service'],
  '2-timothy-3-16-17': ['scripture'],
  '2-timothy-4-7-8': ['faith', 'eternal-life'],
  '2-timothy-1-9': ['salvation', 'god-nature'],
  '2-timothy-2-22': ['holiness', 'faith'],
  '2-timothy-4-2': ['scripture', 'service'],
  '2-timothy-2-13': ['god-nature', 'assurance'],

  // ============ TITUS ============
  'titus-2-11-12': ['salvation', 'holiness'],
  'titus-3-4-5': ['salvation', 'holy-spirit'],
  'titus-2-14': ['salvation', 'holiness'],
  'titus-3-7': ['salvation', 'hope'],
  'titus-1-2': ['hope', 'god-nature'],
  'titus-2-7-8': ['holiness', 'service'],
  'titus-1-9': ['scripture', 'service'],
  'titus-3-1': ['obedience', 'service'],

  // ============ PHILEMON ============
  'philemon-1-6': ['faith', 'love'],
  'philemon-1-7': ['love', 'service'],
  'philemon-1-16': ['love', 'identity'],
  'philemon-1-20': ['love', 'prayer'],
  'philemon-1-4-5': ['faith', 'love'],
  'philemon-1-15': ['god-nature', 'love'],
  'philemon-1-17': ['love', 'identity'],
  'philemon-1-25': ['holy-spirit', 'love'],

  // ============ HEBREWS ============
  'hebrews-4-12': ['scripture'],
  'hebrews-4-16': ['prayer', 'salvation'],
  'hebrews-11-1': ['faith'],
  'hebrews-11-6': ['faith', 'god-nature'],
  'hebrews-12-1-2': ['faith', 'christ-person'],
  'hebrews-12-11': ['trials', 'holiness'],
  'hebrews-13-5': ['god-nature', 'comfort'],
  'hebrews-13-8': ['christ-person', 'god-nature'],
  'hebrews-1-3': ['christ-person', 'god-nature'],
  'hebrews-7-25': ['christ-person', 'salvation'],
  'hebrews-9-22': ['gospel', 'salvation'],
  'hebrews-10-24-25': ['love', 'service'],

  // ============ JAMES ============
  'james-1-2-3': ['trials', 'faith'],
  'james-1-5': ['wisdom', 'prayer'],
  'james-1-17': ['god-nature', 'stewardship'],
  'james-1-22': ['scripture', 'obedience'],
  'james-2-17': ['faith', 'service'],
  'james-4-7-8': ['holiness', 'trials'],
  'james-4-10': ['holiness', 'god-nature'],
  'james-5-16': ['prayer', 'repentance'],

  // ============ 1 PETER ============
  '1-peter-1-3': ['hope', 'eternal-life'],
  '1-peter-2-9': ['identity', 'service'],
  '1-peter-2-24': ['gospel', 'salvation'],
  '1-peter-3-15': ['faith', 'service'],
  '1-peter-5-7': ['comfort', 'faith'],
  '1-peter-1-15-16': ['holiness', 'god-nature'],
  '1-peter-2-2': ['scripture', 'holiness'],
  '1-peter-4-8': ['love'],

  // ============ 2 PETER ============
  '2-peter-1-3': ['god-nature', 'salvation'],
  '2-peter-1-21': ['scripture', 'holy-spirit'],
  '2-peter-3-9': ['god-nature', 'salvation'],
  '2-peter-1-4': ['salvation', 'hope'],
  '2-peter-3-18': ['holiness', 'christ-person'],
  '2-peter-1-5-7': ['holiness', 'faith'],

  // ============ 1 JOHN ============
  '1-john-1-9': ['repentance', 'salvation'],
  '1-john-3-1': ['love', 'identity'],
  '1-john-4-8': ['love', 'god-nature'],
  '1-john-4-19': ['love', 'god-nature'],
  '1-john-5-11-12': ['eternal-life', 'salvation'],
  '1-john-5-14': ['prayer', 'faith'],
  '1-john-2-1-2': ['christ-person', 'salvation'],
  '1-john-2-15': ['holiness', 'love'],
  '1-john-3-16': ['love', 'christ-person'],
  '1-john-4-4': ['holy-spirit', 'strength'],

  // ============ 2 JOHN ============
  '2-john-1-6': ['love', 'obedience'],
  '2-john-1-9': ['christ-person', 'scripture'],
  '2-john-1-3': ['love', 'god-nature'],
  '2-john-1-4': ['obedience', 'scripture'],
  '2-john-1-7': ['christ-person', 'scripture'],
  '2-john-1-8': ['assurance', 'service'],

  // ============ 3 JOHN ============
  '3-john-1-4': ['love', 'obedience'],
  '3-john-1-11': ['holiness', 'god-nature'],
  '3-john-1-2': ['love', 'prayer'],
  '3-john-1-5-6': ['love', 'service'],
  '3-john-1-8': ['service', 'scripture'],
  '3-john-1-3': ['scripture', 'obedience'],

  // ============ JUDE ============
  'jude-1-24-25': ['god-nature', 'assurance'],
  'jude-1-3': ['faith', 'scripture'],
  'jude-1-20-21': ['faith', 'holy-spirit', 'love'],
  'jude-1-2': ['love', 'peace'],
  'jude-1-4': ['scripture', 'salvation'],
  'jude-1-17': ['scripture', 'faith'],
  'jude-1-21': ['love', 'eternal-life'],
  'jude-1-22-23': ['love', 'service'],

  // ============ REVELATION ============
  'revelation-1-8': ['god-nature', 'christ-person'],
  'revelation-3-20': ['salvation', 'christ-person'],
  'revelation-21-4': ['eternal-life', 'comfort'],
  'revelation-22-13': ['christ-person', 'god-nature'],
  'revelation-1-5-6': ['christ-person', 'salvation'],
  'revelation-2-10': ['trials', 'eternal-life'],
  'revelation-3-11': ['hope', 'assurance'],
  'revelation-4-11': ['god-nature', 'prayer'],
  'revelation-5-9-10': ['salvation', 'christ-person'],
  'revelation-7-17': ['eternal-life', 'comfort'],
  'revelation-11-15': ['god-nature', 'hope'],
  'revelation-12-11': ['salvation', 'trials'],
  'revelation-19-6-7': ['god-nature', 'prayer'],
  'revelation-21-3-4': ['eternal-life', 'covenant'],
  'revelation-21-5': ['god-nature', 'hope'],
  'revelation-22-3-4': ['eternal-life', 'god-nature'],
  'revelation-22-7': ['hope', 'scripture'],
  'revelation-22-12': ['hope', 'christ-person'],
  'revelation-22-17': ['salvation', 'holy-spirit'],
  'revelation-22-18-19': ['scripture'],
  'revelation-22-20': ['hope', 'christ-person'],
  'revelation-22-21': ['salvation', 'love'],

  // ============ ADDITIONAL MAPPINGS ============
  // (Verses that were added to memory-verses.ts but not yet mapped)

  // Numbers (additional)
  'numbers-10-35': ['god-nature', 'strength'],
  'numbers-11-29': ['holy-spirit', 'service'],
  'numbers-12-3': ['holiness', 'identity'],
  'numbers-21-9': ['prophecy', 'gospel', 'salvation'],
  'numbers-24-17': ['prophecy', 'christ-person'],

  // Deuteronomy (additional - split verses)
  'deuteronomy-6-4': ['god-nature'],
  'deuteronomy-6-5': ['love', 'obedience'],
  'deuteronomy-30-19': ['obedience', 'wisdom'],

  // Joshua (additional)
  'joshua-24-24': ['obedience', 'faith'],

  // Judges (additional)
  'judges-2-10': ['faith', 'scripture'],
  'judges-2-18': ['god-nature', 'salvation'],
  'judges-5-31': ['god-nature', 'hope'],
  'judges-6-24': ['god-nature', 'peace'],
  'judges-16-28': ['prayer', 'strength'],

  // Ruth (additional)
  'ruth-4-9': ['salvation', 'covenant'],

  // 1 Samuel (additional)
  '1-samuel-12-22': ['god-nature', 'covenant'],
  '1-samuel-17-47': ['god-nature', 'faith', 'salvation'],
  '1-samuel-3-10': ['prayer', 'obedience'],

  // 2 Samuel (additional)
  '2-samuel-7-16': ['covenant', 'prophecy'],
  '2-samuel-12-13': ['repentance', 'salvation'],
  '2-samuel-24-24': ['stewardship', 'obedience'],

  // 1 Kings (additional)
  '1-kings-2-2': ['strength', 'obedience'],
  '1-kings-11-9': ['obedience', 'god-nature'],
  '1-kings-18-39': ['god-nature', 'faith'],

  // 2 Kings (additional)
  '2-kings-2-9': ['holy-spirit', 'service'],
  '2-kings-2-11': ['eternal-life', 'god-nature'],
  '2-kings-5-14': ['faith', 'obedience'],
  '2-kings-17-13': ['repentance', 'scripture'],
  '2-kings-22-19': ['repentance', 'holiness'],

  // 1 Chronicles (additional)
  '1-chronicles-4-10': ['prayer', 'faith'],
  '1-chronicles-17-14': ['covenant', 'prophecy'],
  '1-chronicles-29-14': ['stewardship', 'god-nature'],

  // 2 Chronicles (additional)
  '2-chronicles-6-18': ['god-nature', 'prayer'],
  '2-chronicles-34-27': ['repentance', 'holiness'],

  // Ezra (additional)
  'ezra-9-8': ['god-nature', 'salvation'],

  // Nehemiah (additional)
  'nehemiah-6-16': ['god-nature', 'faith'],

  // Esther (additional)
  'esther-6-1': ['god-nature'],
  'esther-8-17': ['salvation', 'faith'],

  // Job (additional)
  'job-19-25-26': ['christ-person', 'eternal-life', 'hope'],
  'job-37-5': ['god-nature', 'creation'],
  'job-42-5-6': ['god-nature', 'repentance'],

  // Psalms (singular "psalm-" format)
  'psalm-1-1': ['scripture', 'holiness'],
  'psalm-2-7': ['christ-person', 'prophecy'],
  'psalm-16-10': ['prophecy', 'eternal-life'],
  'psalm-19-14': ['prayer', 'holiness'],
  'psalm-22-1': ['prophecy', 'trials'],
  'psalm-22-18': ['prophecy', 'christ-person'],
  'psalm-23-1': ['god-nature', 'comfort'],
  'psalm-23-4': ['comfort', 'trials'],
  'psalm-27-1': ['strength', 'faith'],
  'psalm-34-8': ['god-nature', 'faith'],
  'psalm-37-4': ['prayer', 'faith'],
  'psalm-40-8': ['obedience', 'christ-person'],
  'psalm-46-1': ['strength', 'comfort'],
  'psalm-46-10': ['god-nature', 'peace'],
  'psalm-51-10': ['repentance', 'holiness'],
  'psalm-91-1': ['god-nature', 'comfort'],
  'psalm-100-4': ['prayer', 'god-nature'],
  'psalm-103-12': ['repentance', 'salvation'],
  'psalm-110-1': ['christ-person', 'prophecy'],
  'psalm-118-22': ['christ-person', 'prophecy'],
  'psalm-119-105': ['scripture', 'wisdom'],
  'psalm-139-14': ['creation', 'identity'],

  // Proverbs (additional)
  'proverbs-3-5': ['faith', 'wisdom'],
  'proverbs-3-6': ['wisdom', 'obedience'],
  'proverbs-11-2': ['wisdom', 'holiness'],
  'proverbs-16-9': ['god-nature', 'wisdom'],
  'proverbs-29-25': ['faith', 'strength'],

  // Ecclesiastes (additional)
  'ecclesiastes-1-2': ['wisdom'],
  'ecclesiastes-3-11': ['god-nature', 'eternal-life'],
  'ecclesiastes-5-10': ['stewardship', 'wisdom'],
  'ecclesiastes-7-2': ['wisdom', 'eternal-life'],
  'ecclesiastes-11-9': ['wisdom', 'obedience'],
  'ecclesiastes-12-14': ['god-nature', 'obedience'],

  // Song of Solomon (additional)
  'song-of-solomon-3-4': ['love'],
  'song-of-solomon-8-6': ['love'],
  'song-of-solomon-8-7': ['love'],

  // Isaiah (additional)
  'isaiah-6-8': ['service', 'obedience'],
  'isaiah-43-1': ['salvation', 'identity'],
  'isaiah-55-8': ['god-nature', 'wisdom'],

  // Jeremiah (additional)
  'jeremiah-1-5': ['god-nature', 'identity', 'service'],
  'jeremiah-17-9': ['gospel', 'repentance'],
  'jeremiah-31-33': ['covenant', 'holy-spirit'],

  // Lamentations (additional - split verses)
  'lamentations-3-22': ['god-nature', 'hope'],
  'lamentations-3-23': ['god-nature', 'faith'],
  'lamentations-3-24': ['hope', 'god-nature'],
  'lamentations-3-31-32': ['god-nature', 'trials'],

  // Ezekiel (additional)
  'ezekiel-34-11': ['god-nature', 'comfort'],
  'ezekiel-34-23': ['prophecy', 'christ-person'],
  'ezekiel-37-3': ['faith', 'god-nature'],

  // Hosea (additional)
  'hosea-2-19': ['love', 'covenant'],
  'hosea-3-5': ['prophecy', 'christ-person'],
  'hosea-11-1': ['prophecy', 'christ-person'],
  'hosea-13-14': ['salvation', 'eternal-life'],

  // Joel (additional)
  'joel-2-12': ['repentance'],
  'joel-2-13': ['repentance', 'god-nature'],

  // Amos (additional)
  'amos-3-7': ['prophecy', 'scripture'],
  'amos-4-12': ['god-nature', 'repentance'],

  // Micah (additional)
  'micah-4-1': ['prophecy', 'hope'],
  'micah-5-4': ['christ-person', 'prophecy'],
  'micah-7-18': ['god-nature', 'repentance'],
  'micah-7-19': ['repentance', 'salvation'],

  // Nahum (additional)
  'nahum-1-2': ['god-nature'],
  'nahum-2-2': ['hope', 'salvation'],

  // Habakkuk (additional)
  'habakkuk-3-18': ['faith', 'trials'],
  'habakkuk-3-19': ['strength', 'faith'],

  // Haggai (additional)
  'haggai-1-5': ['wisdom', 'obedience'],
  'haggai-1-7': ['obedience', 'service'],
  'haggai-2-5': ['holy-spirit', 'comfort'],
  'haggai-2-6': ['prophecy', 'god-nature'],
  'haggai-2-23': ['identity', 'prophecy'],

  // Zechariah (additional)
  'zechariah-12-10': ['prophecy', 'holy-spirit', 'repentance'],

  // Malachi (additional)
  'malachi-4-5': ['prophecy', 'hope'],

  // Daniel (additional)
  'daniel-1-8': ['holiness', 'faith'],
  'daniel-2-44': ['prophecy', 'god-nature'],
  'daniel-6-26': ['god-nature'],

  // Leviticus (additional)
  'leviticus-11-44': ['holiness', 'god-nature'],

  // Matthew (additional)
  'matthew-5-3': ['holiness', 'identity'],
  'matthew-5-48': ['holiness', 'obedience'],
  'matthew-6-9': ['prayer'],
  'matthew-11-28': ['comfort', 'salvation'],
  'matthew-28-19': ['service', 'holy-spirit'],
  'matthew-28-20': ['comfort', 'assurance'],

  // Mark (additional)
  'mark-1-15': ['gospel', 'repentance'],
  'mark-8-35': ['obedience', 'trials'],
  'mark-12-30': ['love', 'obedience'],

  // Luke (additional)
  'luke-1-46-47': ['prayer', 'salvation'],
  'luke-2-10-11': ['gospel', 'christ-person'],
  'luke-6-27': ['love', 'obedience'],
  'luke-15-7': ['repentance', 'salvation'],
  'luke-23-43': ['salvation', 'eternal-life'],
  'luke-24-46-47': ['gospel', 'repentance'],

  // John (additional)
  'john-11-25': ['eternal-life', 'christ-person'],
  'john-14-27': ['peace', 'comfort'],

  // Acts (additional)
  'acts-2-42': ['scripture', 'love', 'prayer'],
  'acts-13-38-39': ['salvation', 'gospel'],
  'acts-17-30-31': ['repentance', 'christ-person'],

  // Romans (additional)
  'romans-3-24': ['salvation', 'gospel'],
  'romans-8-29': ['identity', 'holiness'],
  'romans-9-16': ['salvation', 'god-nature'],
  'romans-11-33': ['god-nature', 'wisdom'],
  'romans-12-1': ['holiness', 'obedience'],
  'romans-12-2': ['holiness', 'obedience'],
  'romans-13-14': ['holiness', 'christ-person'],

  // 1 Corinthians (additional)
  '1-corinthians-1-30': ['salvation', 'christ-person'],
  '1-corinthians-2-14': ['holy-spirit', 'scripture'],
  '1-corinthians-6-19': ['identity', 'holy-spirit', 'holiness'],
  '1-corinthians-13-4': ['love'],
  '1-corinthians-15-3-4': ['gospel', 'salvation'],

  // 2 Corinthians (additional)
  '2-corinthians-4-6': ['god-nature', 'gospel'],
  '2-corinthians-4-17': ['hope', 'trials'],

  // Galatians (additional)
  'galatians-3-13': ['salvation', 'gospel'],
  'galatians-3-24': ['gospel', 'faith'],
  'galatians-4-4': ['christ-person', 'gospel'],
  'galatians-5-16': ['holy-spirit', 'holiness'],
  'galatians-5-22': ['holy-spirit', 'holiness'],
  'galatians-6-14': ['gospel', 'christ-person'],

  // Ephesians (additional)
  'ephesians-1-4': ['identity', 'holiness'],
  'ephesians-2-1': ['gospel', 'salvation'],
  'ephesians-2-4': ['salvation', 'love'],
  'ephesians-2-8': ['salvation', 'faith'],
  'ephesians-2-9': ['salvation', 'faith'],
  'ephesians-3-20': ['god-nature', 'prayer'],
  'ephesians-4-4': ['identity', 'holy-spirit'],
  'ephesians-6-11': ['strength', 'trials'],

  // Philippians (additional)
  'philippians-1-21': ['christ-person', 'eternal-life'],
  'philippians-2-10-11': ['christ-person', 'prayer'],
  'philippians-3-8': ['christ-person', 'faith'],
  'philippians-3-20-21': ['eternal-life', 'hope'],
  'philippians-4-6': ['prayer', 'peace'],
  'philippians-4-7': ['peace', 'comfort'],

  // Colossians (additional)
  'colossians-1-16': ['christ-person', 'creation'],
  'colossians-1-17': ['christ-person', 'god-nature'],
  'colossians-2-9': ['christ-person', 'god-nature'],
  'colossians-3-1-2': ['holiness', 'hope'],
  'colossians-3-16': ['scripture', 'prayer'],
  'colossians-3-23': ['service', 'obedience'],

  // 1 Thessalonians (additional)
  '1-thessalonians-4-13-14': ['eternal-life', 'hope'],
  '1-thessalonians-5-23': ['holiness', 'god-nature'],
  '1-thessalonians-5-24': ['god-nature', 'assurance'],

  // 2 Thessalonians (additional)
  '2-thessalonians-1-8-9': ['god-nature', 'eternal-life'],
  '2-thessalonians-2-15': ['scripture', 'obedience'],
  '2-thessalonians-3-10': ['service', 'wisdom'],

  // 1 Timothy (additional)
  '1-timothy-3-16': ['christ-person', 'gospel'],
  '1-timothy-6-10': ['stewardship', 'wisdom'],

  // 2 Timothy (additional)
  '2-timothy-3-16': ['scripture'],
  '2-timothy-3-17': ['scripture', 'service'],
  '2-timothy-4-7': ['faith', 'eternal-life'],

  // Titus (additional)
  'titus-2-1': ['scripture', 'service'],
  'titus-2-13': ['hope', 'christ-person'],
  'titus-3-4-7': ['salvation', 'holy-spirit'],
  'titus-3-5': ['salvation', 'holy-spirit'],

  // Philemon (additional)
  'philemon-4-5': ['faith', 'love'],
  'philemon-6': ['faith', 'love'],
  'philemon-7': ['love', 'service'],
  'philemon-10-11': ['love', 'service'],
  'philemon-15-16': ['god-nature', 'love'],
  'philemon-17-18': ['love', 'identity'],
  'philemon-18-19': ['love', 'stewardship'],
  'philemon-20': ['love', 'prayer'],

  // Hebrews (additional)
  'hebrews-2-17': ['christ-person', 'salvation'],
  'hebrews-4-15-16': ['christ-person', 'prayer'],
  'hebrews-9-14': ['christ-person', 'salvation'],
  'hebrews-10-14': ['salvation', 'holiness'],

  // James (additional)
  'james-2-26': ['faith', 'service'],
  'james-3-17': ['wisdom', 'holiness'],
  'james-4-7': ['holiness', 'trials'],

  // 1 Peter (additional)
  '1-peter-1-18-19': ['salvation', 'gospel'],
  '1-peter-4-12-13': ['trials', 'christ-person'],
  '1-peter-5-8-9': ['trials', 'faith'],

  // 2 Peter (additional)
  '2-peter-1-10-11': ['assurance', 'eternal-life'],
  '2-peter-3-8': ['god-nature', 'hope'],

  // 1 John (additional)
  '1-john-1-7': ['holiness', 'salvation'],
  '1-john-2-2': ['christ-person', 'salvation'],
  '1-john-4-10': ['love', 'gospel'],
  '1-john-5-11': ['eternal-life', 'salvation'],
  '1-john-5-13': ['assurance', 'eternal-life'],

  // 3 John (additional)
  '3-john-1-7-8': ['service', 'faith'],

  // Jude (additional)
  'jude-3': ['faith', 'scripture'],
  'jude-4': ['scripture', 'salvation'],
  'jude-17-19': ['scripture', 'faith'],
  'jude-20-21': ['faith', 'holy-spirit', 'love'],
  'jude-22-23': ['love', 'service'],
  'jude-24': ['god-nature', 'assurance'],
  'jude-24-25': ['god-nature', 'assurance'],
  'jude-25': ['god-nature'],

  // Revelation (additional)
  'revelation-1-5': ['christ-person', 'salvation'],
  'revelation-5-9': ['salvation', 'christ-person'],
  'revelation-5-12': ['christ-person', 'prayer'],
  'revelation-14-12': ['faith', 'obedience'],
  'revelation-15-3': ['god-nature', 'prayer'],
  'revelation-19-6': ['god-nature', 'prayer'],
  'revelation-19-16': ['christ-person', 'god-nature'],
  'revelation-20-6': ['eternal-life', 'salvation'],
  'revelation-21-3': ['covenant', 'eternal-life'],
};

// Helper functions

/**
 * Get theme info by ID
 */
export function getThemeById(themeId: string): VerseTheme | undefined {
  return VERSE_THEMES.find(t => t.id === themeId);
}

/**
 * Get themes for a specific verse
 */
export function getThemesForVerse(verseId: string): VerseTheme[] {
  const themeIds = VERSE_THEME_MAP[verseId] || [];
  return themeIds.map(id => VERSE_THEMES.find(t => t.id === id)).filter((t): t is VerseTheme => t !== undefined);
}

/**
 * Get all verse IDs for a specific theme
 */
export function getVerseIdsForTheme(themeId: string): string[] {
  return Object.entries(VERSE_THEME_MAP)
    .filter(([, themes]) => themes.includes(themeId))
    .map(([verseId]) => verseId);
}

/**
 * Get count of verses per theme
 */
export function getThemeVerseCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  VERSE_THEMES.forEach(theme => {
    counts[theme.id] = getVerseIdsForTheme(theme.id).length;
  });
  return counts;
}

/**
 * Check if a verse has a specific theme
 */
export function verseHasTheme(verseId: string, themeId: string): boolean {
  const themes = VERSE_THEME_MAP[verseId] || [];
  return themes.includes(themeId);
}
