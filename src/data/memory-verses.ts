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
    id: 'psalm-27-1',
    reference: 'Psalm 27:1',
    book: 'Psalms',
    chapter: 27,
    verse: 1,
    difficulty: 'easy',
    translations: {
      ESV: 'The LORD is my light and my salvation; whom shall I fear? The LORD is the stronghold of my life; of whom shall I be afraid?',
      NIV: 'The LORD is my light and my salvation—whom shall I fear? The LORD is the stronghold of my life—of whom shall I be afraid?',
      KJV: 'The LORD is my light and my salvation; whom shall I fear? the LORD is the strength of my life; of whom shall I be afraid?',
      NASB: 'The LORD is my light and my salvation; whom shall I fear? The LORD is the defense of my life; whom shall I dread?',
    },
    context: {
      after: {
        reference: 'Psalm 27:2',
        text: 'When evildoers assail me to eat up my flesh, my adversaries and foes, it is they who stumble and fall.',
      },
    },
  },
  {
    id: 'psalm-37-4',
    reference: 'Psalm 37:4',
    book: 'Psalms',
    chapter: 37,
    verse: 4,
    difficulty: 'easy',
    translations: {
      ESV: 'Delight yourself in the LORD, and he will give you the desires of your heart.',
      NIV: 'Take delight in the LORD, and he will give you the desires of your heart.',
      KJV: 'Delight thyself also in the LORD: and he shall give thee the desires of thine heart.',
      NASB: 'Delight yourself in the LORD; and He will give you the desires of your heart.',
    },
    context: {
      before: {
        reference: 'Psalm 37:3',
        text: 'Trust in the LORD, and do good; dwell in the land and befriend faithfulness.',
      },
      after: {
        reference: 'Psalm 37:5',
        text: 'Commit your way to the LORD; trust in him, and he will act.',
      },
    },
  },
  {
    id: 'psalm-91-1',
    reference: 'Psalm 91:1',
    book: 'Psalms',
    chapter: 91,
    verse: 1,
    difficulty: 'medium',
    translations: {
      ESV: 'He who dwells in the shelter of the Most High will abide in the shadow of the Almighty.',
      NIV: 'Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty.',
      KJV: 'He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty.',
      NASB: 'He who dwells in the shelter of the Most High will abide in the shadow of the Almighty.',
    },
    context: {
      after: {
        reference: 'Psalm 91:2',
        text: 'I will say to the LORD, "My refuge and my fortress, my God, in whom I trust."',
      },
    },
  },
  {
    id: 'psalm-100-4',
    reference: 'Psalm 100:4',
    book: 'Psalms',
    chapter: 100,
    verse: 4,
    difficulty: 'easy',
    translations: {
      ESV: 'Enter his gates with thanksgiving, and his courts with praise! Give thanks to him; bless his name!',
      NIV: 'Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name.',
      KJV: 'Enter into his gates with thanksgiving, and into his courts with praise: be thankful unto him, and bless his name.',
      NASB: 'Enter His gates with thanksgiving and His courts with praise. Give thanks to Him, bless His name.',
    },
    context: {
      before: {
        reference: 'Psalm 100:3',
        text: 'Know that the LORD, he is God! It is he who made us, and we are his; we are his people, and the sheep of his pasture.',
      },
      after: {
        reference: 'Psalm 100:5',
        text: 'For the LORD is good; his steadfast love endures forever, and his faithfulness to all generations.',
      },
    },
  },
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
    id: 'psalm-23-4',
    reference: 'Psalm 23:4',
    book: 'Psalms',
    chapter: 23,
    verse: 4,
    difficulty: 'medium',
    translations: {
      ESV: 'Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.',
      NIV: 'Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.',
      KJV: 'Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.',
      NASB: 'Even though I walk through the valley of the shadow of death, I fear no evil, for You are with me; Your rod and Your staff, they comfort me.',
    },
    context: {
      before: {
        reference: 'Psalm 23:3',
        text: 'He restores my soul. He leads me in paths of righteousness for his name\'s sake.',
      },
      after: {
        reference: 'Psalm 23:5',
        text: 'You prepare a table before me in the presence of my enemies; you anoint my head with oil; my cup overflows.',
      },
    },
  },
  {
    id: 'psalm-46-1',
    reference: 'Psalm 46:1',
    book: 'Psalms',
    chapter: 46,
    verse: 1,
    difficulty: 'medium',
    translations: {
      ESV: 'God is our refuge and strength, a very present help in trouble.',
      NIV: 'God is our refuge and strength, an ever-present help in trouble.',
      KJV: 'God is our refuge and strength, a very present help in trouble.',
      NASB: 'God is our refuge and strength, a very present help in trouble.',
    },
    context: {
      after: {
        reference: 'Psalm 46:2',
        text: 'Therefore we will not fear though the earth gives way, though the mountains be moved into the heart of the sea,',
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
  {
    id: 'psalm-139-14',
    reference: 'Psalm 139:14',
    book: 'Psalms',
    chapter: 139,
    verse: 14,
    difficulty: 'medium',
    translations: {
      ESV: 'I praise you, for I am fearfully and wonderfully made. Wonderful are your works; my soul knows it very well.',
      NIV: 'I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.',
      KJV: 'I will praise thee; for I am fearfully and wonderfully made: marvellous are thy works; and that my soul knoweth right well.',
      NASB: 'I will give thanks to You, for I am fearfully and wonderfully made; wonderful are Your works, and my soul knows it very well.',
    },
    context: {
      before: {
        reference: 'Psalm 139:13',
        text: 'For you formed my inward parts; you knitted me together in my mother\'s womb.',
      },
      after: {
        reference: 'Psalm 139:15',
        text: 'My frame was not hidden from you, when I was being made in secret, intricately woven in the depths of the earth.',
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
  {
    id: 'proverbs-3-6',
    reference: 'Proverbs 3:6',
    book: 'Proverbs',
    chapter: 3,
    verse: 6,
    difficulty: 'easy',
    translations: {
      ESV: 'In all your ways acknowledge him, and he will make straight your paths.',
      NIV: 'in all your ways submit to him, and he will make your paths straight.',
      KJV: 'In all thy ways acknowledge him, and he shall direct thy paths.',
      NASB: 'In all your ways acknowledge Him, and He will make your paths straight.',
    },
    context: {
      before: {
        reference: 'Proverbs 3:5',
        text: 'Trust in the LORD with all your heart, and do not lean on your own understanding.',
      },
      after: {
        reference: 'Proverbs 3:7',
        text: 'Be not wise in your own eyes; fear the LORD, and turn away from evil.',
      },
    },
  },
  {
    id: 'proverbs-22-6',
    reference: 'Proverbs 22:6',
    book: 'Proverbs',
    chapter: 22,
    verse: 6,
    difficulty: 'medium',
    translations: {
      ESV: 'Train up a child in the way he should go; even when he is old he will not depart from it.',
      NIV: 'Start children off on the way they should go, and even when they are old they will not turn from it.',
      KJV: 'Train up a child in the way he should go: and when he is old, he will not depart from it.',
      NASB: 'Train up a child in the way he should go, even when he is old he will not depart from it.',
    },
    context: {
      before: {
        reference: 'Proverbs 22:5',
        text: 'Thorns and snares are in the way of the crooked; whoever guards his soul will keep far from them.',
      },
      after: {
        reference: 'Proverbs 22:7',
        text: 'The rich rules over the poor, and the borrower is the slave of the lender.',
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
      after: {
        reference: 'Isaiah 41:1',
        text: 'Listen to me in silence, O coastlands; let the peoples renew their strength;',
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
      after: {
        reference: 'Isaiah 41:11',
        text: 'Behold, all who are incensed against you shall be put to shame and confounded;',
      },
    },
  },
  {
    id: 'isaiah-53-5',
    reference: 'Isaiah 53:5',
    book: 'Isaiah',
    chapter: 53,
    verse: 5,
    difficulty: 'hard',
    translations: {
      ESV: 'But he was pierced for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace, and with his wounds we are healed.',
      NIV: 'But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.',
      KJV: 'But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.',
      NASB: 'But He was pierced through for our transgressions, He was crushed for our iniquities; the chastening for our well-being fell upon Him, and by His scourging we are healed.',
    },
    context: {
      before: {
        reference: 'Isaiah 53:4',
        text: 'Surely he has borne our griefs and carried our sorrows; yet we esteemed him stricken, smitten by God, and afflicted.',
      },
      after: {
        reference: 'Isaiah 53:6',
        text: 'All we like sheep have gone astray; we have turned—every one—to his own way; and the LORD has laid on him the iniquity of us all.',
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

  // ============ LAMENTATIONS ============
  {
    id: 'lamentations-3-22',
    reference: 'Lamentations 3:22',
    book: 'Lamentations',
    chapter: 3,
    verse: 22,
    difficulty: 'hard',
    translations: {
      ESV: 'The steadfast love of the LORD never ceases; his mercies never come to an end;',
      NIV: 'Because of the LORD\'s great love we are not consumed, for his compassions never fail.',
      KJV: 'It is of the LORD\'s mercies that we are not consumed, because his compassions fail not.',
      NASB: 'The LORD\'s lovingkindnesses indeed never cease, for His compassions never fail.',
    },
    context: {
      before: {
        reference: 'Lamentations 3:21',
        text: 'But this I call to mind, and therefore I have hope:',
      },
      after: {
        reference: 'Lamentations 3:23',
        text: 'They are new every morning; great is your faithfulness.',
      },
    },
  },
  {
    id: 'lamentations-3-23',
    reference: 'Lamentations 3:23',
    book: 'Lamentations',
    chapter: 3,
    verse: 23,
    difficulty: 'medium',
    translations: {
      ESV: 'They are new every morning; great is your faithfulness.',
      NIV: 'They are new every morning; great is your faithfulness.',
      KJV: 'They are new every morning: great is thy faithfulness.',
      NASB: 'They are new every morning; great is Your faithfulness.',
    },
    context: {
      before: {
        reference: 'Lamentations 3:22',
        text: 'The steadfast love of the LORD never ceases; his mercies never come to an end;',
      },
      after: {
        reference: 'Lamentations 3:24',
        text: '"The LORD is my portion," says my soul, "therefore I will hope in him."',
      },
    },
  },

  // ============ MICAH ============
  {
    id: 'micah-6-8',
    reference: 'Micah 6:8',
    book: 'Micah',
    chapter: 6,
    verse: 8,
    difficulty: 'medium',
    translations: {
      ESV: 'He has told you, O man, what is good; and what does the LORD require of you but to do justice, and to love kindness, and to walk humbly with your God?',
      NIV: 'He has shown you, O mortal, what is good. And what does the LORD require of you? To act justly and to love mercy and to walk humbly with your God.',
      KJV: 'He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?',
      NASB: 'He has told you, O man, what is good; and what does the LORD require of you but to do justice, to love kindness, and to walk humbly with your God?',
    },
    context: {
      before: {
        reference: 'Micah 6:7',
        text: 'Will the LORD be pleased with thousands of rams, with ten thousands of rivers of oil?',
      },
      after: {
        reference: 'Micah 6:9',
        text: 'The voice of the LORD cries to the city—and it is sound wisdom to fear your name.',
      },
    },
  },

  // ============ MATTHEW ============
  {
    id: 'matthew-5-16',
    reference: 'Matthew 5:16',
    book: 'Matthew',
    chapter: 5,
    verse: 16,
    difficulty: 'medium',
    translations: {
      ESV: 'In the same way, let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven.',
      NIV: 'In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven.',
      KJV: 'Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.',
      NASB: 'Let your light shine before men in such a way that they may see your good works, and glorify your Father who is in heaven.',
    },
    context: {
      before: {
        reference: 'Matthew 5:15',
        text: 'Nor do people light a lamp and put it under a basket, but on a stand, and it gives light to all in the house.',
      },
      after: {
        reference: 'Matthew 5:17',
        text: 'Do not think that I have come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them.',
      },
    },
  },
  {
    id: 'matthew-7-7',
    reference: 'Matthew 7:7',
    book: 'Matthew',
    chapter: 7,
    verse: 7,
    difficulty: 'easy',
    translations: {
      ESV: 'Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you.',
      NIV: 'Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.',
      KJV: 'Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you:',
      NASB: 'Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you.',
    },
    context: {
      before: {
        reference: 'Matthew 7:6',
        text: 'Do not give dogs what is holy, and do not throw your pearls before pigs, lest they trample them underfoot and turn to attack you.',
      },
      after: {
        reference: 'Matthew 7:8',
        text: 'For everyone who asks receives, and the one who seeks finds, and to the one who knocks it will be opened.',
      },
    },
  },
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
  {
    id: 'matthew-28-20',
    reference: 'Matthew 28:20',
    book: 'Matthew',
    chapter: 28,
    verse: 20,
    difficulty: 'medium',
    translations: {
      ESV: 'teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.',
      NIV: 'and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.',
      KJV: 'Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you always, even unto the end of the world.',
      NASB: 'teaching them to observe all that I commanded you; and lo, I am with you always, even to the end of the age.',
    },
    context: {
      before: {
        reference: 'Matthew 28:19',
        text: 'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,',
      },
    },
  },

  // ============ JOHN ============
  {
    id: 'john-1-1',
    reference: 'John 1:1',
    book: 'John',
    chapter: 1,
    verse: 1,
    difficulty: 'easy',
    translations: {
      ESV: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
      NIV: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
      KJV: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
      NASB: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
    },
    context: {
      after: {
        reference: 'John 1:2',
        text: 'He was in the beginning with God.',
      },
    },
  },
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
    id: 'john-8-32',
    reference: 'John 8:32',
    book: 'John',
    chapter: 8,
    verse: 32,
    difficulty: 'easy',
    translations: {
      ESV: 'and you will know the truth, and the truth will set you free.',
      NIV: 'Then you will know the truth, and the truth will set you free.',
      KJV: 'And ye shall know the truth, and the truth shall make you free.',
      NASB: 'and you will know the truth, and the truth will make you free.',
    },
    context: {
      before: {
        reference: 'John 8:31',
        text: 'So Jesus said to the Jews who had believed him, "If you abide in my word, you are truly my disciples,',
      },
      after: {
        reference: 'John 8:33',
        text: 'They answered him, "We are offspring of Abraham and have never been enslaved to anyone. How is it that you say, \'You will become free\'?"',
      },
    },
  },
  {
    id: 'john-10-10',
    reference: 'John 10:10',
    book: 'John',
    chapter: 10,
    verse: 10,
    difficulty: 'medium',
    translations: {
      ESV: 'The thief comes only to steal and kill and destroy. I came that they may have life and have it abundantly.',
      NIV: 'The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full.',
      KJV: 'The thief cometh not, but for to steal, and to kill, and to destroy: I am come that they might have life, and that they might have it more abundantly.',
      NASB: 'The thief comes only to steal and kill and destroy; I came that they may have life, and have it abundantly.',
    },
    context: {
      before: {
        reference: 'John 10:9',
        text: 'I am the door. If anyone enters by me, he will be saved and will go in and out and find pasture.',
      },
      after: {
        reference: 'John 10:11',
        text: 'I am the good shepherd. The good shepherd lays down his life for the sheep.',
      },
    },
  },
  {
    id: 'john-11-25',
    reference: 'John 11:25',
    book: 'John',
    chapter: 11,
    verse: 25,
    difficulty: 'medium',
    translations: {
      ESV: 'Jesus said to her, "I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live,',
      NIV: 'Jesus said to her, "I am the resurrection and the life. The one who believes in me will live, even though they die;',
      KJV: 'Jesus said unto her, I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live:',
      NASB: 'Jesus said to her, "I am the resurrection and the life; he who believes in Me will live even if he dies,',
    },
    context: {
      before: {
        reference: 'John 11:24',
        text: 'Martha said to him, "I know that he will rise again in the resurrection on the last day."',
      },
      after: {
        reference: 'John 11:26',
        text: 'and everyone who lives and believes in me shall never die. Do you believe this?"',
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
  {
    id: 'john-14-27',
    reference: 'John 14:27',
    book: 'John',
    chapter: 14,
    verse: 27,
    difficulty: 'medium',
    translations: {
      ESV: 'Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid.',
      NIV: 'Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.',
      KJV: 'Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.',
      NASB: 'Peace I leave with you; My peace I give to you; not as the world gives do I give to you. Do not let your heart be troubled, nor let it be fearful.',
    },
    context: {
      before: {
        reference: 'John 14:26',
        text: 'But the Helper, the Holy Spirit, whom the Father will send in my name, he will teach you all things and bring to your remembrance all that I have said to you.',
      },
      after: {
        reference: 'John 14:28',
        text: 'You heard me say to you, "I am going away, and I will come to you."',
      },
    },
  },
  {
    id: 'john-15-5',
    reference: 'John 15:5',
    book: 'John',
    chapter: 15,
    verse: 5,
    difficulty: 'medium',
    translations: {
      ESV: 'I am the vine; you are the branches. Whoever abides in me and I in him, he it is that bears much fruit, for apart from me you can do nothing.',
      NIV: 'I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.',
      KJV: 'I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing.',
      NASB: 'I am the vine, you are the branches; he who abides in Me and I in him, he bears much fruit, for apart from Me you can do nothing.',
    },
    context: {
      before: {
        reference: 'John 15:4',
        text: 'Abide in me, and I in you. As the branch cannot bear fruit by itself, unless it abides in the vine, neither can you, unless you abide in me.',
      },
      after: {
        reference: 'John 15:6',
        text: 'If anyone does not abide in me he is thrown away like a branch and withers; and the branches are gathered, thrown into the fire, and burned.',
      },
    },
  },

  // ============ ACTS ============
  {
    id: 'acts-1-8',
    reference: 'Acts 1:8',
    book: 'Acts',
    chapter: 1,
    verse: 8,
    difficulty: 'medium',
    translations: {
      ESV: 'But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth.',
      NIV: 'But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.',
      KJV: 'But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth.',
      NASB: 'but you will receive power when the Holy Spirit has come upon you; and you shall be My witnesses both in Jerusalem, and in all Judea and Samaria, and even to the remotest part of the earth.',
    },
    context: {
      before: {
        reference: 'Acts 1:7',
        text: 'He said to them, "It is not for you to know times or seasons that the Father has fixed by his own authority.',
      },
      after: {
        reference: 'Acts 1:9',
        text: 'And when he had said these things, as they were looking on, he was lifted up, and a cloud took him out of their sight.',
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
    id: 'romans-5-8',
    reference: 'Romans 5:8',
    book: 'Romans',
    chapter: 5,
    verse: 8,
    difficulty: 'medium',
    translations: {
      ESV: 'but God shows his love for us in that while we were still sinners, Christ died for us.',
      NIV: 'But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.',
      KJV: 'But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.',
      NASB: 'But God demonstrates His own love toward us, in that while we were yet sinners, Christ died for us.',
    },
    context: {
      before: {
        reference: 'Romans 5:7',
        text: 'For one will scarcely die for a righteous person—though perhaps for a good person one would dare even to die—',
      },
      after: {
        reference: 'Romans 5:9',
        text: 'Since, therefore, we have now been justified by his blood, much more shall we be saved by him from the wrath of God.',
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
      after: {
        reference: 'Romans 7:1',
        text: 'Or do you not know, brothers—for I am speaking to those who know the law—that the law is binding on a person only as long as he lives?',
      },
    },
  },
  {
    id: 'romans-8-1',
    reference: 'Romans 8:1',
    book: 'Romans',
    chapter: 8,
    verse: 1,
    difficulty: 'medium',
    translations: {
      ESV: 'There is therefore now no condemnation for those who are in Christ Jesus.',
      NIV: 'Therefore, there is now no condemnation for those who are in Christ Jesus,',
      KJV: 'There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit.',
      NASB: 'Therefore there is now no condemnation for those who are in Christ Jesus.',
    },
    context: {
      before: {
        reference: 'Romans 7:25',
        text: 'Thanks be to God through Jesus Christ our Lord! So then, I myself serve the law of God with my mind, but with my flesh I serve the law of sin.',
      },
      after: {
        reference: 'Romans 8:2',
        text: 'For the law of the Spirit of life has set you free in Christ Jesus from the law of sin and death.',
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
  {
    id: 'romans-10-9',
    reference: 'Romans 10:9',
    book: 'Romans',
    chapter: 10,
    verse: 9,
    difficulty: 'medium',
    translations: {
      ESV: 'because, if you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved.',
      NIV: 'If you declare with your mouth, "Jesus is Lord," and believe in your heart that God raised him from the dead, you will be saved.',
      KJV: 'That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.',
      NASB: 'that if you confess with your mouth Jesus as Lord, and believe in your heart that God raised Him from the dead, you will be saved;',
    },
    context: {
      before: {
        reference: 'Romans 10:8',
        text: 'But what does it say? "The word is near you, in your mouth and in your heart" (that is, the word of faith that we proclaim);',
      },
      after: {
        reference: 'Romans 10:10',
        text: 'For with the heart one believes and is justified, and with the mouth one confesses and is saved.',
      },
    },
  },
  {
    id: 'romans-12-1',
    reference: 'Romans 12:1',
    book: 'Romans',
    chapter: 12,
    verse: 1,
    difficulty: 'medium',
    translations: {
      ESV: 'I appeal to you therefore, brothers, by the mercies of God, to present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship.',
      NIV: 'Therefore, I urge you, brothers and sisters, in view of God\'s mercy, to offer your bodies as a living sacrifice, holy and pleasing to God—this is your true and proper worship.',
      KJV: 'I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service.',
      NASB: 'Therefore I urge you, brethren, by the mercies of God, to present your bodies a living and holy sacrifice, acceptable to God, which is your spiritual service of worship.',
    },
    context: {
      before: {
        reference: 'Romans 11:36',
        text: 'For from him and through him and to him are all things. To him be glory forever. Amen.',
      },
      after: {
        reference: 'Romans 12:2',
        text: 'Do not be conformed to this world, but be transformed by the renewal of your mind.',
      },
    },
  },
  {
    id: 'romans-12-2',
    reference: 'Romans 12:2',
    book: 'Romans',
    chapter: 12,
    verse: 2,
    difficulty: 'medium',
    translations: {
      ESV: 'Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect.',
      NIV: 'Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God\'s will is—his good, pleasing and perfect will.',
      KJV: 'And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God.',
      NASB: 'And do not be conformed to this world, but be transformed by the renewing of your mind, so that you may prove what the will of God is, that which is good and acceptable and perfect.',
    },
    context: {
      before: {
        reference: 'Romans 12:1',
        text: 'I appeal to you therefore, brothers, by the mercies of God, to present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship.',
      },
      after: {
        reference: 'Romans 12:3',
        text: 'For by the grace given to me I say to everyone among you not to think of himself more highly than he ought to think,',
      },
    },
  },

  // ============ 1 CORINTHIANS ============
  {
    id: '1-corinthians-10-13',
    reference: '1 Corinthians 10:13',
    book: '1 Corinthians',
    chapter: 10,
    verse: 13,
    difficulty: 'medium',
    translations: {
      ESV: 'No temptation has overtaken you that is not common to man. God is faithful, and he will not let you be tempted beyond your ability, but with the temptation he will also provide the way of escape, that you may be able to endure it.',
      NIV: 'No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear. But when you are tempted, he will also provide a way out so that you can endure it.',
      KJV: 'There hath no temptation taken you but such as is common to man: but God is faithful, who will not suffer you to be tempted above that ye are able; but will with the temptation also make a way to escape, that ye may be able to bear it.',
      NASB: 'No temptation has overtaken you but such as is common to man; and God is faithful, who will not allow you to be tempted beyond what you are able, but with the temptation will provide the way of escape also, so that you will be able to endure it.',
    },
    context: {
      before: {
        reference: '1 Corinthians 10:12',
        text: 'Therefore let anyone who thinks that he stands take heed lest he fall.',
      },
      after: {
        reference: '1 Corinthians 10:14',
        text: 'Therefore, my beloved, flee from idolatry.',
      },
    },
  },
  {
    id: '1-corinthians-13-4',
    reference: '1 Corinthians 13:4',
    book: '1 Corinthians',
    chapter: 13,
    verse: 4,
    difficulty: 'easy',
    translations: {
      ESV: 'Love is patient and kind; love does not envy or boast; it is not arrogant',
      NIV: 'Love is patient, love is kind. It does not envy, it does not boast, it is not proud.',
      KJV: 'Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up,',
      NASB: 'Love is patient, love is kind and is not jealous; love does not brag and is not arrogant,',
    },
    context: {
      before: {
        reference: '1 Corinthians 13:3',
        text: 'If I give away all I have, and if I deliver up my body to be burned, but have not love, I gain nothing.',
      },
      after: {
        reference: '1 Corinthians 13:5',
        text: 'or rude. It does not insist on its own way; it is not irritable or resentful;',
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
  {
    id: '2-corinthians-12-9',
    reference: '2 Corinthians 12:9',
    book: '2 Corinthians',
    chapter: 12,
    verse: 9,
    difficulty: 'hard',
    translations: {
      ESV: 'But he said to me, "My grace is sufficient for you, for my power is made perfect in weakness." Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.',
      NIV: 'But he said to me, "My grace is sufficient for you, for my power is made perfect in weakness." Therefore I will boast all the more gladly about my weaknesses, so that Christ\'s power may rest on me.',
      KJV: 'And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness. Most gladly therefore will I rather glory in my infirmities, that the power of Christ may rest upon me.',
      NASB: 'And He has said to me, "My grace is sufficient for you, for power is perfected in weakness." Most gladly, therefore, I will rather boast about my weaknesses, so that the power of Christ may dwell in me.',
    },
    context: {
      before: {
        reference: '2 Corinthians 12:8',
        text: 'Three times I pleaded with the Lord about this, that it should leave me.',
      },
      after: {
        reference: '2 Corinthians 12:10',
        text: 'For the sake of Christ, then, I am content with weaknesses, insults, hardships, persecutions, and calamities. For when I am weak, then I am strong.',
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
  {
    id: 'galatians-5-22',
    reference: 'Galatians 5:22',
    book: 'Galatians',
    chapter: 5,
    verse: 22,
    difficulty: 'medium',
    translations: {
      ESV: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness,',
      NIV: 'But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness,',
      KJV: 'But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith,',
      NASB: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness,',
    },
    context: {
      before: {
        reference: 'Galatians 5:21',
        text: 'envy, drunkenness, orgies, and things like these. I warn you, as I warned you before, that those who do such things will not inherit the kingdom of God.',
      },
      after: {
        reference: 'Galatians 5:23',
        text: 'gentleness, self-control; against such things there is no law.',
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
  {
    id: 'ephesians-2-9',
    reference: 'Ephesians 2:9',
    book: 'Ephesians',
    chapter: 2,
    verse: 9,
    difficulty: 'easy',
    translations: {
      ESV: 'not a result of works, so that no one may boast.',
      NIV: 'not by works, so that no one can boast.',
      KJV: 'Not of works, lest any man should boast.',
      NASB: 'not as a result of works, so that no one may boast.',
    },
    context: {
      before: {
        reference: 'Ephesians 2:8',
        text: 'For by grace you have been saved through faith. And this is not your own doing; it is the gift of God,',
      },
      after: {
        reference: 'Ephesians 2:10',
        text: 'For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them.',
      },
    },
  },
  {
    id: 'ephesians-4-32',
    reference: 'Ephesians 4:32',
    book: 'Ephesians',
    chapter: 4,
    verse: 32,
    difficulty: 'medium',
    translations: {
      ESV: 'Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you.',
      NIV: 'Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.',
      KJV: 'And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ\'s sake hath forgiven you.',
      NASB: 'Be kind to one another, tender-hearted, forgiving each other, just as God in Christ also has forgiven you.',
    },
    context: {
      before: {
        reference: 'Ephesians 4:31',
        text: 'Let all bitterness and wrath and anger and clamor and slander be put away from you, along with all malice.',
      },
      after: {
        reference: 'Ephesians 5:1',
        text: 'Therefore be imitators of God, as beloved children.',
      },
    },
  },
  {
    id: 'ephesians-6-11',
    reference: 'Ephesians 6:11',
    book: 'Ephesians',
    chapter: 6,
    verse: 11,
    difficulty: 'hard',
    translations: {
      ESV: 'Put on the whole armor of God, that you may be able to stand against the schemes of the devil.',
      NIV: 'Put on the full armor of God, so that you can take your stand against the devil\'s schemes.',
      KJV: 'Put on the whole armour of God, that ye may be able to stand against the wiles of the devil.',
      NASB: 'Put on the full armor of God, so that you will be able to stand firm against the schemes of the devil.',
    },
    context: {
      before: {
        reference: 'Ephesians 6:10',
        text: 'Finally, be strong in the Lord and in the strength of his might.',
      },
      after: {
        reference: 'Ephesians 6:12',
        text: 'For we do not wrestle against flesh and blood, but against the rulers, against the authorities, against the cosmic powers over this present darkness, against the spiritual forces of evil in the heavenly places.',
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
    id: 'philippians-4-7',
    reference: 'Philippians 4:7',
    book: 'Philippians',
    chapter: 4,
    verse: 7,
    difficulty: 'medium',
    translations: {
      ESV: 'And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.',
      NIV: 'And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.',
      KJV: 'And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.',
      NASB: 'And the peace of God, which surpasses all comprehension, will guard your hearts and your minds in Christ Jesus.',
    },
    context: {
      before: {
        reference: 'Philippians 4:6',
        text: 'do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.',
      },
      after: {
        reference: 'Philippians 4:8',
        text: 'Finally, brothers, whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely, whatever is commendable, if there is any excellence, if there is anything worthy of praise, think about these things.',
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

  // ============ COLOSSIANS ============
  {
    id: 'colossians-3-23',
    reference: 'Colossians 3:23',
    book: 'Colossians',
    chapter: 3,
    verse: 23,
    difficulty: 'medium',
    translations: {
      ESV: 'Whatever you do, work heartily, as for the Lord and not for men,',
      NIV: 'Whatever you do, work at it with all your heart, as working for the Lord, not for human masters,',
      KJV: 'And whatsoever ye do, do it heartily, as to the Lord, and not unto men;',
      NASB: 'Whatever you do, do your work heartily, as for the Lord rather than for men,',
    },
    context: {
      before: {
        reference: 'Colossians 3:22',
        text: 'Bondservants, obey in everything those who are your earthly masters, not by way of eye-service, as people-pleasers, but with sincerity of heart, fearing the Lord.',
      },
      after: {
        reference: 'Colossians 3:24',
        text: 'knowing that from the Lord you will receive the inheritance as your reward. You are serving the Lord Christ.',
      },
    },
  },

  // ============ 2 TIMOTHY ============
  {
    id: '2-timothy-1-7',
    reference: '2 Timothy 1:7',
    book: '2 Timothy',
    chapter: 1,
    verse: 7,
    difficulty: 'medium',
    translations: {
      ESV: 'for God gave us a spirit not of fear but of power and love and self-control.',
      NIV: 'For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.',
      KJV: 'For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.',
      NASB: 'For God has not given us a spirit of timidity, but of power and love and discipline.',
    },
    context: {
      before: {
        reference: '2 Timothy 1:6',
        text: 'For this reason I remind you to fan into flame the gift of God, which is in you through the laying on of my hands,',
      },
      after: {
        reference: '2 Timothy 1:8',
        text: 'Therefore do not be ashamed of the testimony about our Lord, nor of me his prisoner, but share in suffering for the gospel by the power of God,',
      },
    },
  },
  {
    id: '2-timothy-3-16',
    reference: '2 Timothy 3:16',
    book: '2 Timothy',
    chapter: 3,
    verse: 16,
    difficulty: 'hard',
    translations: {
      ESV: 'All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness,',
      NIV: 'All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness,',
      KJV: 'All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness:',
      NASB: 'All Scripture is inspired by God and profitable for teaching, for reproof, for correction, for training in righteousness;',
    },
    context: {
      before: {
        reference: '2 Timothy 3:15',
        text: 'and how from childhood you have been acquainted with the sacred writings, which are able to make you wise for salvation through faith in Christ Jesus.',
      },
      after: {
        reference: '2 Timothy 3:17',
        text: 'that the man of God may be complete, equipped for every good work.',
      },
    },
  },

  // ============ HEBREWS ============
  {
    id: 'hebrews-4-12',
    reference: 'Hebrews 4:12',
    book: 'Hebrews',
    chapter: 4,
    verse: 12,
    difficulty: 'hard',
    translations: {
      ESV: 'For the word of God is living and active, sharper than any two-edged sword, piercing to the division of soul and of spirit, of joints and of marrow, and discerning the thoughts and intentions of the heart.',
      NIV: 'For the word of God is alive and active. Sharper than any double-edged sword, it penetrates even to dividing soul and spirit, joints and marrow; it judges the thoughts and attitudes of the heart.',
      KJV: 'For the word of God is quick, and powerful, and sharper than any twoedged sword, piercing even to the dividing asunder of soul and spirit, and of the joints and marrow, and is a discerner of the thoughts and intents of the heart.',
      NASB: 'For the word of God is living and active and sharper than any two-edged sword, and piercing as far as the division of soul and spirit, of both joints and marrow, and able to judge the thoughts and intentions of the heart.',
    },
    context: {
      before: {
        reference: 'Hebrews 4:11',
        text: 'Let us therefore strive to enter that rest, so that no one may fall by the same sort of disobedience.',
      },
      after: {
        reference: 'Hebrews 4:13',
        text: 'And no creature is hidden from his sight, but all are naked and exposed to the eyes of him to whom we must give account.',
      },
    },
  },
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
      after: {
        reference: 'Hebrews 13:9',
        text: 'Do not be led away by diverse and strange teachings, for it is good for the heart to be strengthened by grace, not by foods, which have not benefited those devoted to them.',
      },
    },
  },

  // ============ JAMES ============
  {
    id: 'james-1-5',
    reference: 'James 1:5',
    book: 'James',
    chapter: 1,
    verse: 5,
    difficulty: 'medium',
    translations: {
      ESV: 'If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him.',
      NIV: 'If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.',
      KJV: 'If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.',
      NASB: 'But if any of you lacks wisdom, let him ask of God, who gives to all generously and without reproach, and it will be given to him.',
    },
    context: {
      before: {
        reference: 'James 1:4',
        text: 'And let steadfastness have its full effect, that you may be perfect and complete, lacking in nothing.',
      },
      after: {
        reference: 'James 1:6',
        text: 'But let him ask in faith, with no doubting, for the one who doubts is like a wave of the sea that is driven and tossed by the wind.',
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

  // ============ 1 JOHN ============
  {
    id: '1-john-1-9',
    reference: '1 John 1:9',
    book: '1 John',
    chapter: 1,
    verse: 9,
    difficulty: 'medium',
    translations: {
      ESV: 'If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.',
      NIV: 'If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.',
      KJV: 'If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.',
      NASB: 'If we confess our sins, He is faithful and righteous to forgive us our sins and to cleanse us from all unrighteousness.',
    },
    context: {
      before: {
        reference: '1 John 1:8',
        text: 'If we say we have no sin, we deceive ourselves, and the truth is not in us.',
      },
      after: {
        reference: '1 John 1:10',
        text: 'If we say we have not sinned, we make him a liar, and his word is not in us.',
      },
    },
  },
  {
    id: '1-john-4-19',
    reference: '1 John 4:19',
    book: '1 John',
    chapter: 4,
    verse: 19,
    difficulty: 'easy',
    translations: {
      ESV: 'We love because he first loved us.',
      NIV: 'We love because he first loved us.',
      KJV: 'We love him, because he first loved us.',
      NASB: 'We love, because He first loved us.',
    },
    context: {
      before: {
        reference: '1 John 4:18',
        text: 'There is no fear in love, but perfect love casts out fear. For fear has to do with punishment, and whoever fears has not been perfected in love.',
      },
      after: {
        reference: '1 John 4:20',
        text: 'If anyone says, "I love God," and hates his brother, he is a liar; for he who does not love his brother whom he has seen cannot love God whom he has not seen.',
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
