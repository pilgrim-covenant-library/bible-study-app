// Scripture Memory Verses with Multiple Translations
// Single verses only, organized by book with difficulty levels

export interface VerseTranslations {
  ESV: string;
  NIV: string;
  KJV: string;
  NASB: string;
}

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface MemoryVerse {
  id: string;
  reference: string;
  book: string;
  chapter: number;
  verse: number;
  difficulty: Difficulty;
  translations: VerseTranslations;
  context: {
    before?: {
      reference: string;
      text: string;
    };
    after?: {
      reference: string;
      text: string;
    };
  };
}

// Bible book order for sorting
const BOOK_ORDER: Record<string, number> = {
  'Genesis': 1, 'Exodus': 2, 'Leviticus': 3, 'Numbers': 4, 'Deuteronomy': 5,
  'Joshua': 6, 'Judges': 7, 'Ruth': 8, '1 Samuel': 9, '2 Samuel': 10,
  '1 Kings': 11, '2 Kings': 12, '1 Chronicles': 13, '2 Chronicles': 14,
  'Ezra': 15, 'Nehemiah': 16, 'Esther': 17, 'Job': 18, 'Psalms': 19,
  'Proverbs': 20, 'Ecclesiastes': 21, 'Song of Solomon': 22, 'Isaiah': 23,
  'Jeremiah': 24, 'Lamentations': 25, 'Ezekiel': 26, 'Daniel': 27,
  'Hosea': 28, 'Joel': 29, 'Amos': 30, 'Obadiah': 31, 'Jonah': 32,
  'Micah': 33, 'Nahum': 34, 'Habakkuk': 35, 'Zephaniah': 36, 'Haggai': 37,
  'Zechariah': 38, 'Malachi': 39, 'Matthew': 40, 'Mark': 41, 'Luke': 42,
  'John': 43, 'Acts': 44, 'Romans': 45, '1 Corinthians': 46, '2 Corinthians': 47,
  'Galatians': 48, 'Ephesians': 49, 'Philippians': 50, 'Colossians': 51,
  '1 Thessalonians': 52, '2 Thessalonians': 53, '1 Timothy': 54, '2 Timothy': 55,
  'Titus': 56, 'Philemon': 57, 'Hebrews': 58, 'James': 59, '1 Peter': 60,
  '2 Peter': 61, '1 John': 62, '2 John': 63, '3 John': 64, 'Jude': 65, 'Revelation': 66,
};

export const MEMORY_VERSES: MemoryVerse[] = [
  // ============ GENESIS ============
  {
    id: 'genesis-1-1',
    reference: 'Genesis 1:1',
    book: 'Genesis',
    chapter: 1,
    verse: 1,
    difficulty: 'easy',
    translations: {
      ESV: 'In the beginning, God created the heavens and the earth.',
      NIV: 'In the beginning God created the heavens and the earth.',
      KJV: 'In the beginning God created the heaven and the earth.',
      NASB: 'In the beginning God created the heavens and the earth.',
    },
    context: {
      after: {
        reference: 'Genesis 1:2',
        text: 'The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters.',
      },
    },
  },

  // ============ DEUTERONOMY ============
  {
    id: 'deuteronomy-6-5',
    reference: 'Deuteronomy 6:5',
    book: 'Deuteronomy',
    chapter: 6,
    verse: 5,
    difficulty: 'easy',
    translations: {
      ESV: 'You shall love the LORD your God with all your heart and with all your soul and with all your might.',
      NIV: 'Love the LORD your God with all your heart and with all your soul and with all your strength.',
      KJV: 'And thou shalt love the LORD thy God with all thine heart, and with all thy soul, and with all thy might.',
      NASB: 'You shall love the LORD your God with all your heart and with all your soul and with all your might.',
    },
    context: {
      before: {
        reference: 'Deuteronomy 6:4',
        text: 'Hear, O Israel: The LORD our God, the LORD is one.',
      },
      after: {
        reference: 'Deuteronomy 6:6',
        text: 'And these words that I command you today shall be on your heart.',
      },
    },
  },

  // ============ JOSHUA ============
  {
    id: 'joshua-1-9',
    reference: 'Joshua 1:9',
    book: 'Joshua',
    chapter: 1,
    verse: 9,
    difficulty: 'easy',
    translations: {
      ESV: 'Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God is with you wherever you go.',
      NIV: 'Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.',
      KJV: 'Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.',
      NASB: 'Have I not commanded you? Be strong and courageous! Do not tremble or be dismayed, for the LORD your God is with you wherever you go.',
    },
    context: {
      before: {
        reference: 'Joshua 1:8',
        text: 'This Book of the Law shall not depart from your mouth, but you shall meditate on it day and night, so that you may be careful to do according to all that is written in it.',
      },
      after: {
        reference: 'Joshua 1:10',
        text: 'And Joshua commanded the officers of the people,',
      },
    },
  },

  // ============ PSALMS ============
  {
    id: 'psalm-23-1',
    reference: 'Psalm 23:1',
    book: 'Psalms',
    chapter: 23,
    verse: 1,
    difficulty: 'easy',
    translations: {
      ESV: 'The LORD is my shepherd; I shall not want.',
      NIV: 'The LORD is my shepherd, I lack nothing.',
      KJV: 'The LORD is my shepherd; I shall not want.',
      NASB: 'The LORD is my shepherd, I shall not want.',
    },
    context: {
      after: {
        reference: 'Psalm 23:2',
        text: 'He makes me lie down in green pastures. He leads me beside still waters.',
      },
    },
  },
  {
    id: 'psalm-119-105',
    reference: 'Psalm 119:105',
    book: 'Psalms',
    chapter: 119,
    verse: 105,
    difficulty: 'easy',
    translations: {
      ESV: 'Your word is a lamp to my feet and a light to my path.',
      NIV: 'Your word is a lamp for my feet, a light on my path.',
      KJV: 'Thy word is a lamp unto my feet, and a light unto my path.',
      NASB: 'Your word is a lamp to my feet and a light to my path.',
    },
    context: {
      before: {
        reference: 'Psalm 119:104',
        text: 'Through your precepts I get understanding; therefore I hate every false way.',
      },
      after: {
        reference: 'Psalm 119:106',
        text: 'I have sworn an oath and confirmed it, to keep your righteous rules.',
      },
    },
  },

  // ============ PROVERBS ============
  {
    id: 'proverbs-3-5',
    reference: 'Proverbs 3:5',
    book: 'Proverbs',
    chapter: 3,
    verse: 5,
    difficulty: 'easy',
    translations: {
      ESV: 'Trust in the LORD with all your heart, and do not lean on your own understanding.',
      NIV: 'Trust in the LORD with all your heart and lean not on your own understanding;',
      KJV: 'Trust in the LORD with all thine heart; and lean not unto thine own understanding.',
      NASB: 'Trust in the LORD with all your heart and do not lean on your own understanding.',
    },
    context: {
      before: {
        reference: 'Proverbs 3:4',
        text: 'So you will find favor and good success in the sight of God and man.',
      },
      after: {
        reference: 'Proverbs 3:6',
        text: 'In all your ways acknowledge him, and he will make straight your paths.',
      },
    },
  },

  // ============ ISAIAH ============
  {
    id: 'isaiah-40-31',
    reference: 'Isaiah 40:31',
    book: 'Isaiah',
    chapter: 40,
    verse: 31,
    difficulty: 'medium',
    translations: {
      ESV: 'but they who wait for the LORD shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.',
      NIV: 'but those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.',
      KJV: 'But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.',
      NASB: 'Yet those who wait for the LORD will gain new strength; they will mount up with wings like eagles, they will run and not get tired, they will walk and not become weary.',
    },
    context: {
      before: {
        reference: 'Isaiah 40:30',
        text: 'Even youths shall faint and be weary, and young men shall fall exhausted;',
      },
    },
  },
  {
    id: 'isaiah-41-10',
    reference: 'Isaiah 41:10',
    book: 'Isaiah',
    chapter: 41,
    verse: 10,
    difficulty: 'medium',
    translations: {
      ESV: 'fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.',
      NIV: 'So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.',
      KJV: 'Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.',
      NASB: 'Do not fear, for I am with you; do not anxiously look about you, for I am your God. I will strengthen you, surely I will help you, surely I will uphold you with My righteous right hand.',
    },
    context: {
      before: {
        reference: 'Isaiah 41:9',
        text: 'you whom I took from the ends of the earth, and called from its farthest corners, saying to you, "You are my servant, I have chosen you and not cast you off";',
      },
    },
  },

  // ============ JEREMIAH ============
  {
    id: 'jeremiah-29-11',
    reference: 'Jeremiah 29:11',
    book: 'Jeremiah',
    chapter: 29,
    verse: 11,
    difficulty: 'easy',
    translations: {
      ESV: 'For I know the plans I have for you, declares the LORD, plans for welfare and not for evil, to give you a future and a hope.',
      NIV: '"For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future."',
      KJV: 'For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.',
      NASB: '"For I know the plans that I have for you," declares the LORD, "plans for welfare and not for calamity to give you a future and a hope."',
    },
    context: {
      before: {
        reference: 'Jeremiah 29:10',
        text: 'For thus says the LORD: When seventy years are completed for Babylon, I will visit you, and I will fulfill to you my promise and bring you back to this place.',
      },
      after: {
        reference: 'Jeremiah 29:12',
        text: 'Then you will call upon me and come and pray to me, and I will hear you.',
      },
    },
  },

  // ============ MATTHEW ============
  {
    id: 'matthew-6-33',
    reference: 'Matthew 6:33',
    book: 'Matthew',
    chapter: 6,
    verse: 33,
    difficulty: 'easy',
    translations: {
      ESV: 'But seek first the kingdom of God and his righteousness, and all these things will be added to you.',
      NIV: 'But seek first his kingdom and his righteousness, and all these things will be given to you as well.',
      KJV: 'But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.',
      NASB: 'But seek first His kingdom and His righteousness, and all these things will be added to you.',
    },
    context: {
      before: {
        reference: 'Matthew 6:32',
        text: 'For the Gentiles seek after all these things, and your heavenly Father knows that you need them all.',
      },
      after: {
        reference: 'Matthew 6:34',
        text: 'Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble.',
      },
    },
  },
  {
    id: 'matthew-11-28',
    reference: 'Matthew 11:28',
    book: 'Matthew',
    chapter: 11,
    verse: 28,
    difficulty: 'easy',
    translations: {
      ESV: 'Come to me, all who labor and are heavy laden, and I will give you rest.',
      NIV: 'Come to me, all you who are weary and burdened, and I will give you rest.',
      KJV: 'Come unto me, all ye that labour and are heavy laden, and I will give you rest.',
      NASB: 'Come to Me, all who are weary and heavy-laden, and I will give you rest.',
    },
    context: {
      before: {
        reference: 'Matthew 11:27',
        text: 'All things have been handed over to me by my Father, and no one knows the Son except the Father, and no one knows the Father except the Son and anyone to whom the Son chooses to reveal him.',
      },
      after: {
        reference: 'Matthew 11:29',
        text: 'Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls.',
      },
    },
  },
  {
    id: 'matthew-28-19',
    reference: 'Matthew 28:19',
    book: 'Matthew',
    chapter: 28,
    verse: 19,
    difficulty: 'medium',
    translations: {
      ESV: 'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,',
      NIV: 'Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,',
      KJV: 'Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost:',
      NASB: 'Go therefore and make disciples of all the nations, baptizing them in the name of the Father and the Son and the Holy Spirit,',
    },
    context: {
      before: {
        reference: 'Matthew 28:18',
        text: 'And Jesus came and said to them, "All authority in heaven and on earth has been given to me.',
      },
      after: {
        reference: 'Matthew 28:20',
        text: 'teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age."',
      },
    },
  },

  // ============ JOHN ============
  {
    id: 'john-3-16',
    reference: 'John 3:16',
    book: 'John',
    chapter: 3,
    verse: 16,
    difficulty: 'easy',
    translations: {
      ESV: 'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
      NIV: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.',
      KJV: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.',
      NASB: 'For God so loved the world, that He gave His only begotten Son, that whoever believes in Him shall not perish, but have eternal life.',
    },
    context: {
      before: {
        reference: 'John 3:15',
        text: 'that whoever believes in him may have eternal life.',
      },
      after: {
        reference: 'John 3:17',
        text: 'For God did not send his Son into the world to condemn the world, but in order that the world might be saved through him.',
      },
    },
  },
  {
    id: 'john-14-6',
    reference: 'John 14:6',
    book: 'John',
    chapter: 14,
    verse: 6,
    difficulty: 'easy',
    translations: {
      ESV: 'Jesus said to him, "I am the way, and the truth, and the life. No one comes to the Father except through me.',
      NIV: 'Jesus answered, "I am the way and the truth and the life. No one comes to the Father except through me.',
      KJV: 'Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.',
      NASB: 'Jesus said to him, "I am the way, and the truth, and the life; no one comes to the Father but through Me.',
    },
    context: {
      before: {
        reference: 'John 14:5',
        text: 'Thomas said to him, "Lord, we do not know where you are going. How can we know the way?"',
      },
      after: {
        reference: 'John 14:7',
        text: 'If you had known me, you would have known my Father also. From now on you do know him and have seen him."',
      },
    },
  },

  // ============ ROMANS ============
  {
    id: 'romans-3-23',
    reference: 'Romans 3:23',
    book: 'Romans',
    chapter: 3,
    verse: 23,
    difficulty: 'easy',
    translations: {
      ESV: 'for all have sinned and fall short of the glory of God,',
      NIV: 'for all have sinned and fall short of the glory of God,',
      KJV: 'For all have sinned, and come short of the glory of God;',
      NASB: 'for all have sinned and fall short of the glory of God,',
    },
    context: {
      before: {
        reference: 'Romans 3:22',
        text: 'the righteousness of God through faith in Jesus Christ for all who believe. For there is no distinction:',
      },
      after: {
        reference: 'Romans 3:24',
        text: 'and are justified by his grace as a gift, through the redemption that is in Christ Jesus,',
      },
    },
  },
  {
    id: 'romans-6-23',
    reference: 'Romans 6:23',
    book: 'Romans',
    chapter: 6,
    verse: 23,
    difficulty: 'easy',
    translations: {
      ESV: 'For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.',
      NIV: 'For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.',
      KJV: 'For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.',
      NASB: 'For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.',
    },
    context: {
      before: {
        reference: 'Romans 6:22',
        text: 'But now that you have been set free from sin and have become slaves of God, the fruit you get leads to sanctification and its end, eternal life.',
      },
    },
  },
  {
    id: 'romans-8-28',
    reference: 'Romans 8:28',
    book: 'Romans',
    chapter: 8,
    verse: 28,
    difficulty: 'easy',
    translations: {
      ESV: 'And we know that for those who love God all things work together for good, for those who are called according to his purpose.',
      NIV: 'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.',
      KJV: 'And we know that all things work together for good to them that love God, to them who are the called according to his purpose.',
      NASB: 'And we know that God causes all things to work together for good to those who love God, to those who are called according to His purpose.',
    },
    context: {
      before: {
        reference: 'Romans 8:27',
        text: 'And he who searches hearts knows what is the mind of the Spirit, because the Spirit intercedes for the saints according to the will of God.',
      },
      after: {
        reference: 'Romans 8:29',
        text: 'For those whom he foreknew he also predestined to be conformed to the image of his Son, in order that he might be the firstborn among many brothers.',
      },
    },
  },

  // ============ 2 CORINTHIANS ============
  {
    id: '2-corinthians-5-17',
    reference: '2 Corinthians 5:17',
    book: '2 Corinthians',
    chapter: 5,
    verse: 17,
    difficulty: 'medium',
    translations: {
      ESV: 'Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.',
      NIV: 'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!',
      KJV: 'Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.',
      NASB: 'Therefore if anyone is in Christ, he is a new creature; the old things passed away; behold, new things have come.',
    },
    context: {
      before: {
        reference: '2 Corinthians 5:16',
        text: 'From now on, therefore, we regard no one according to the flesh. Even though we once regarded Christ according to the flesh, we regard him thus no longer.',
      },
      after: {
        reference: '2 Corinthians 5:18',
        text: 'All this is from God, who through Christ reconciled us to himself and gave us the ministry of reconciliation;',
      },
    },
  },

  // ============ GALATIANS ============
  {
    id: 'galatians-2-20',
    reference: 'Galatians 2:20',
    book: 'Galatians',
    chapter: 2,
    verse: 20,
    difficulty: 'hard',
    translations: {
      ESV: 'I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me.',
      NIV: 'I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me.',
      KJV: 'I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me: and the life which I now live in the flesh I live by the faith of the Son of God, who loved me, and gave himself for me.',
      NASB: 'I have been crucified with Christ; and it is no longer I who live, but Christ lives in me; and the life which I now live in the flesh I live by faith in the Son of God, who loved me and gave Himself up for me.',
    },
    context: {
      before: {
        reference: 'Galatians 2:19',
        text: 'For through the law I died to the law, so that I might live to God.',
      },
      after: {
        reference: 'Galatians 2:21',
        text: 'I do not nullify the grace of God, for if righteousness were through the law, then Christ died for no purpose.',
      },
    },
  },

  // ============ EPHESIANS ============
  {
    id: 'ephesians-2-8',
    reference: 'Ephesians 2:8',
    book: 'Ephesians',
    chapter: 2,
    verse: 8,
    difficulty: 'easy',
    translations: {
      ESV: 'For by grace you have been saved through faith. And this is not your own doing; it is the gift of God,',
      NIV: 'For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—',
      KJV: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God:',
      NASB: 'For by grace you have been saved through faith; and that not of yourselves, it is the gift of God;',
    },
    context: {
      before: {
        reference: 'Ephesians 2:7',
        text: 'so that in the coming ages he might show the immeasurable riches of his grace in kindness toward us in Christ Jesus.',
      },
      after: {
        reference: 'Ephesians 2:9',
        text: 'not a result of works, so that no one may boast.',
      },
    },
  },

  // ============ PHILIPPIANS ============
  {
    id: 'philippians-4-6',
    reference: 'Philippians 4:6',
    book: 'Philippians',
    chapter: 4,
    verse: 6,
    difficulty: 'medium',
    translations: {
      ESV: 'do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.',
      NIV: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.',
      KJV: 'Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.',
      NASB: 'Be anxious for nothing, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.',
    },
    context: {
      before: {
        reference: 'Philippians 4:5',
        text: 'Let your reasonableness be known to everyone. The Lord is at hand;',
      },
      after: {
        reference: 'Philippians 4:7',
        text: 'And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.',
      },
    },
  },
  {
    id: 'philippians-4-13',
    reference: 'Philippians 4:13',
    book: 'Philippians',
    chapter: 4,
    verse: 13,
    difficulty: 'easy',
    translations: {
      ESV: 'I can do all things through him who strengthens me.',
      NIV: 'I can do all this through him who gives me strength.',
      KJV: 'I can do all things through Christ which strengtheneth me.',
      NASB: 'I can do all things through Him who strengthens me.',
    },
    context: {
      before: {
        reference: 'Philippians 4:12',
        text: 'I know how to be brought low, and I know how to abound. In any and every circumstance, I have learned the secret of facing plenty and hunger, abundance and need.',
      },
      after: {
        reference: 'Philippians 4:14',
        text: 'Yet it was kind of you to share my trouble.',
      },
    },
  },

  // ============ HEBREWS ============
  {
    id: 'hebrews-11-1',
    reference: 'Hebrews 11:1',
    book: 'Hebrews',
    chapter: 11,
    verse: 1,
    difficulty: 'medium',
    translations: {
      ESV: 'Now faith is the assurance of things hoped for, the conviction of things not seen.',
      NIV: 'Now faith is confidence in what we hope for and assurance about what we do not see.',
      KJV: 'Now faith is the substance of things hoped for, the evidence of things not seen.',
      NASB: 'Now faith is the assurance of things hoped for, the conviction of things not seen.',
    },
    context: {
      before: {
        reference: 'Hebrews 10:39',
        text: 'But we are not of those who shrink back and are destroyed, but of those who have faith and preserve their souls.',
      },
      after: {
        reference: 'Hebrews 11:2',
        text: 'For by it the people of old received their commendation.',
      },
    },
  },
  {
    id: 'hebrews-13-8',
    reference: 'Hebrews 13:8',
    book: 'Hebrews',
    chapter: 13,
    verse: 8,
    difficulty: 'easy',
    translations: {
      ESV: 'Jesus Christ is the same yesterday and today and forever.',
      NIV: 'Jesus Christ is the same yesterday and today and forever.',
      KJV: 'Jesus Christ the same yesterday, and to day, and for ever.',
      NASB: 'Jesus Christ is the same yesterday and today and forever.',
    },
    context: {
      before: {
        reference: 'Hebrews 13:7',
        text: 'Remember your leaders, those who spoke to you the word of God. Consider the outcome of their way of life, and imitate their faith.',
      },
    },
  },

  // ============ 1 PETER ============
  {
    id: '1-peter-5-7',
    reference: '1 Peter 5:7',
    book: '1 Peter',
    chapter: 5,
    verse: 7,
    difficulty: 'easy',
    translations: {
      ESV: 'casting all your anxieties on him, because he cares for you.',
      NIV: 'Cast all your anxiety on him because he cares for you.',
      KJV: 'Casting all your care upon him; for he careth for you.',
      NASB: 'casting all your anxiety on Him, because He cares for you.',
    },
    context: {
      before: {
        reference: '1 Peter 5:6',
        text: 'Humble yourselves, therefore, under the mighty hand of God so that at the proper time he may exalt you,',
      },
      after: {
        reference: '1 Peter 5:8',
        text: 'Be sober-minded; be watchful. Your adversary the devil prowls around like a roaring lion, seeking someone to devour.',
      },
    },
  },
];

// Helper functions

// Get a random verse
export function getRandomVerse(): MemoryVerse {
  return MEMORY_VERSES[Math.floor(Math.random() * MEMORY_VERSES.length)];
}

// Get verses by difficulty
export function getVersesByDifficulty(difficulty: Difficulty): MemoryVerse[] {
  return MEMORY_VERSES.filter(v => v.difficulty === difficulty);
}

// Get a random verse by difficulty
export function getRandomVerseByDifficulty(difficulty: Difficulty): MemoryVerse {
  const verses = getVersesByDifficulty(difficulty);
  return verses[Math.floor(Math.random() * verses.length)];
}

// Get verses by book
export function getVersesByBook(book: string): MemoryVerse[] {
  return MEMORY_VERSES.filter(v => v.book === book);
}

// Get all unique books (in Bible order)
export function getAllBooks(): string[] {
  const books = new Set<string>();
  MEMORY_VERSES.forEach(v => books.add(v.book));
  return Array.from(books).sort((a, b) => (BOOK_ORDER[a] || 99) - (BOOK_ORDER[b] || 99));
}

// Get N unique random verses
export function getRandomVerses(count: number, difficulty?: Difficulty): MemoryVerse[] {
  const pool = difficulty ? getVersesByDifficulty(difficulty) : MEMORY_VERSES;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Get difficulty counts
export function getDifficultyCounts(): Record<Difficulty, number> {
  return {
    easy: MEMORY_VERSES.filter(v => v.difficulty === 'easy').length,
    medium: MEMORY_VERSES.filter(v => v.difficulty === 'medium').length,
    hard: MEMORY_VERSES.filter(v => v.difficulty === 'hard').length,
  };
}
