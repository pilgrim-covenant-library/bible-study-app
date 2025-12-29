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
    id: 'genesis-3-15',
    reference: 'Genesis 3:15',
    book: 'Genesis',
    chapter: 3,
    verse: 15,
    difficulty: 'hard',
    translations: {
      ESV: 'I will put enmity between you and the woman, and between your offspring and her offspring; he shall bruise your head, and you shall bruise his heel.',
      NIV: 'And I will put enmity between you and the woman, and between your offspring and hers; he will crush your head, and you will strike his heel.',
      KJV: 'And I will put enmity between thee and the woman, and between thy seed and her seed; it shall bruise thy head, and thou shalt bruise his heel.',
      NASB: 'And I will put enmity between you and the woman, and between your seed and her seed; He shall bruise you on the head, and you shall bruise him on the heel.',
    },
    context: {
      before: {
        reference: 'Genesis 3:14',
        text: 'The LORD God said to the serpent, "Because you have done this, cursed are you above all livestock and above all beasts of the field."',
      },
      after: {
        reference: 'Genesis 3:16',
        text: 'To the woman he said, "I will surely multiply your pain in childbearing; in pain you shall bring forth children."',
      },
    },
  },
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

  // ============ EXODUS ============
  {
    id: 'exodus-3-14',
    reference: 'Exodus 3:14',
    book: 'Exodus',
    chapter: 3,
    verse: 14,
    difficulty: 'medium',
    translations: {
      ESV: 'God said to Moses, "I AM WHO I AM." And he said, "Say this to the people of Israel: \'I AM has sent me to you.\'"',
      NIV: 'God said to Moses, "I AM WHO I AM. This is what you are to say to the Israelites: \'I AM has sent me to you.\'"',
      KJV: 'And God said unto Moses, I AM THAT I AM: and he said, Thus shalt thou say unto the children of Israel, I AM hath sent me unto you.',
      NASB: 'God said to Moses, "I AM WHO I AM"; and He said, "Thus you shall say to the sons of Israel, \'I AM has sent me to you.\'"',
    },
    context: {
      before: {
        reference: 'Exodus 3:13',
        text: 'Then Moses said to God, "If I come to the people of Israel and say to them, \'The God of your fathers has sent me to you,\' and they ask me, \'What is his name?\' what shall I say to them?"',
      },
      after: {
        reference: 'Exodus 3:15',
        text: 'God also said to Moses, "Say this to the people of Israel: \'The LORD, the God of your fathers, the God of Abraham, the God of Isaac, and the God of Jacob, has sent me to you.\'"',
      },
    },
  },
  {
    id: 'exodus-14-14',
    reference: 'Exodus 14:14',
    book: 'Exodus',
    chapter: 14,
    verse: 14,
    difficulty: 'easy',
    translations: {
      ESV: 'The LORD will fight for you, and you have only to be silent.',
      NIV: 'The LORD will fight for you; you need only to be still.',
      KJV: 'The LORD shall fight for you, and ye shall hold your peace.',
      NASB: 'The LORD will fight for you while you keep silent.',
    },
    context: {
      before: {
        reference: 'Exodus 14:13',
        text: 'And Moses said to the people, "Fear not, stand firm, and see the salvation of the LORD, which he will work for you today."',
      },
      after: {
        reference: 'Exodus 14:15',
        text: 'The LORD said to Moses, "Why do you cry to me? Tell the people of Israel to go forward."',
      },
    },
  },
  {
    id: 'exodus-20-3',
    reference: 'Exodus 20:3',
    book: 'Exodus',
    chapter: 20,
    verse: 3,
    difficulty: 'easy',
    translations: {
      ESV: 'You shall have no other gods before me.',
      NIV: 'You shall have no other gods before me.',
      KJV: 'Thou shalt have no other gods before me.',
      NASB: 'You shall have no other gods before Me.',
    },
    context: {
      before: {
        reference: 'Exodus 20:2',
        text: 'I am the LORD your God, who brought you out of the land of Egypt, out of the house of slavery.',
      },
      after: {
        reference: 'Exodus 20:4',
        text: 'You shall not make for yourself a carved image, or any likeness of anything that is in heaven above, or that is in the earth beneath.',
      },
    },
  },

  // ============ LEVITICUS ============
  {
    id: 'leviticus-19-18',
    reference: 'Leviticus 19:18',
    book: 'Leviticus',
    chapter: 19,
    verse: 18,
    difficulty: 'medium',
    translations: {
      ESV: 'You shall not take vengeance or bear a grudge against the sons of your own people, but you shall love your neighbor as yourself: I am the LORD.',
      NIV: 'Do not seek revenge or bear a grudge against anyone among your people, but love your neighbor as yourself. I am the LORD.',
      KJV: 'Thou shalt not avenge, nor bear any grudge against the children of thy people, but thou shalt love thy neighbour as thyself: I am the LORD.',
      NASB: 'You shall not take vengeance, nor bear any grudge against the sons of your people, but you shall love your neighbor as yourself; I am the LORD.',
    },
    context: {
      before: {
        reference: 'Leviticus 19:17',
        text: 'You shall not hate your brother in your heart, but you shall reason frankly with your neighbor.',
      },
      after: {
        reference: 'Leviticus 19:19',
        text: 'You shall keep my statutes.',
      },
    },
  },

  // ============ NUMBERS ============
  {
    id: 'numbers-6-24-26',
    reference: 'Numbers 6:24-26',
    book: 'Numbers',
    chapter: 6,
    verse: 24,
    difficulty: 'medium',
    translations: {
      ESV: 'The LORD bless you and keep you; the LORD make his face to shine upon you and be gracious to you; the LORD lift up his countenance upon you and give you peace.',
      NIV: 'The LORD bless you and keep you; the LORD make his face shine on you and be gracious to you; the LORD turn his face toward you and give you peace.',
      KJV: 'The LORD bless thee, and keep thee: The LORD make his face shine upon thee, and be gracious unto thee: The LORD lift up his countenance upon thee, and give thee peace.',
      NASB: 'The LORD bless you, and keep you; the LORD make His face shine on you, and be gracious to you; the LORD lift up His countenance on you, and give you peace.',
    },
    context: {
      before: {
        reference: 'Numbers 6:23',
        text: 'Speak to Aaron and his sons, saying, Thus you shall bless the people of Israel: you shall say to them.',
      },
      after: {
        reference: 'Numbers 6:27',
        text: 'So shall they put my name upon the people of Israel, and I will bless them.',
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
  {
    id: 'deuteronomy-6-4',
    reference: 'Deuteronomy 6:4',
    book: 'Deuteronomy',
    chapter: 6,
    verse: 4,
    difficulty: 'easy',
    translations: {
      ESV: 'Hear, O Israel: The LORD our God, the LORD is one.',
      NIV: 'Hear, O Israel: The LORD our God, the LORD is one.',
      KJV: 'Hear, O Israel: The LORD our God is one LORD:',
      NASB: 'Hear, O Israel! The LORD is our God, the LORD is one!',
    },
    context: {
      before: {
        reference: 'Deuteronomy 6:3',
        text: 'Hear therefore, O Israel, and be careful to do them, that it may go well with you.',
      },
      after: {
        reference: 'Deuteronomy 6:5',
        text: 'You shall love the LORD your God with all your heart and with all your soul and with all your might.',
      },
    },
  },
  {
    id: 'deuteronomy-31-6',
    reference: 'Deuteronomy 31:6',
    book: 'Deuteronomy',
    chapter: 31,
    verse: 6,
    difficulty: 'medium',
    translations: {
      ESV: 'Be strong and courageous. Do not fear or be in dread of them, for it is the LORD your God who goes with you. He will not leave you or forsake you.',
      NIV: 'Be strong and courageous. Do not be afraid or terrified because of them, for the LORD your God goes with you; he will never leave you nor forsake you.',
      KJV: 'Be strong and of a good courage, fear not, nor be afraid of them: for the LORD thy God, he it is that doth go with thee; he will not fail thee, nor forsake thee.',
      NASB: 'Be strong and courageous, do not be afraid or tremble at them, for the LORD your God is the one who goes with you. He will not fail you or forsake you.',
    },
    context: {
      before: {
        reference: 'Deuteronomy 31:5',
        text: 'And the LORD will give them over to you, and you shall do to them according to the whole commandment that I have commanded you.',
      },
      after: {
        reference: 'Deuteronomy 31:7',
        text: 'Then Moses summoned Joshua and said to him in the sight of all Israel, "Be strong and courageous."',
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
  {
    id: 'joshua-24-15',
    reference: 'Joshua 24:15',
    book: 'Joshua',
    chapter: 24,
    verse: 15,
    difficulty: 'medium',
    translations: {
      ESV: 'And if it is evil in your eyes to serve the LORD, choose this day whom you will serve, whether the gods your fathers served in the region beyond the River, or the gods of the Amorites in whose land you dwell. But as for me and my house, we will serve the LORD.',
      NIV: 'But if serving the LORD seems undesirable to you, then choose for yourselves this day whom you will serve, whether the gods your ancestors served beyond the Euphrates, or the gods of the Amorites, in whose land you are living. But as for me and my household, we will serve the LORD.',
      KJV: 'And if it seem evil unto you to serve the LORD, choose you this day whom ye will serve; whether the gods which your fathers served that were on the other side of the flood, or the gods of the Amorites, in whose land ye dwell: but as for me and my house, we will serve the LORD.',
      NASB: 'If it is disagreeable in your sight to serve the LORD, choose for yourselves today whom you will serve: whether the gods which your fathers served which were beyond the River, or the gods of the Amorites in whose land you are living; but as for me and my house, we will serve the LORD.',
    },
    context: {
      before: {
        reference: 'Joshua 24:14',
        text: 'Now therefore fear the LORD and serve him in sincerity and in faithfulness. Put away the gods that your fathers served beyond the River and in Egypt, and serve the LORD.',
      },
      after: {
        reference: 'Joshua 24:16',
        text: 'Then the people answered, "Far be it from us that we should forsake the LORD to serve other gods."',
      },
    },
  },

  // ============ JUDGES ============
  {
    id: 'judges-2-10',
    reference: 'Judges 2:10',
    book: 'Judges',
    chapter: 2,
    verse: 10,
    difficulty: 'medium',
    translations: {
      ESV: 'And all that generation also were gathered to their fathers. And there arose another generation after them who did not know the LORD or the work that he had done for Israel.',
      NIV: 'After that whole generation had been gathered to their ancestors, another generation grew up who knew neither the LORD nor what he had done for Israel.',
      KJV: 'And also all that generation were gathered unto their fathers: and there arose another generation after them, which knew not the LORD, nor yet the works which he had done for Israel.',
      NASB: 'All that generation also were gathered to their fathers; and there arose another generation after them who did not know the LORD, nor yet the work which He had done for Israel.',
    },
    context: {
      before: {
        reference: 'Judges 2:9',
        text: 'And they buried him within the boundaries of his inheritance in Timnath-heres, in the hill country of Ephraim, north of the mountain of Gaash.',
      },
      after: {
        reference: 'Judges 2:11',
        text: 'And the people of Israel did what was evil in the sight of the LORD and served the Baals.',
      },
    },
  },
  {
    id: 'judges-21-25',
    reference: 'Judges 21:25',
    book: 'Judges',
    chapter: 21,
    verse: 25,
    difficulty: 'easy',
    translations: {
      ESV: 'In those days there was no king in Israel. Everyone did what was right in his own eyes.',
      NIV: 'In those days Israel had no king; everyone did as they saw fit.',
      KJV: 'In those days there was no king in Israel: every man did that which was right in his own eyes.',
      NASB: 'In those days there was no king in Israel; everyone did what was right in his own eyes.',
    },
    context: {
      before: {
        reference: 'Judges 21:24',
        text: 'And the people of Israel departed from there at that time, every man to his tribe and family, and they went out from there every man to his inheritance.',
      },
    },
  },

  // ============ RUTH ============
  {
    id: 'ruth-1-16',
    reference: 'Ruth 1:16',
    book: 'Ruth',
    chapter: 1,
    verse: 16,
    difficulty: 'medium',
    translations: {
      ESV: 'But Ruth said, "Do not urge me to leave you or to return from following you. For where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God."',
      NIV: 'But Ruth replied, "Don\'t urge me to leave you or to turn back from you. Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God."',
      KJV: 'And Ruth said, Intreat me not to leave thee, or to return from following after thee: for whither thou goest, I will go; and where thou lodgest, I will lodge: thy people shall be my people, and thy God my God.',
      NASB: 'But Ruth said, "Do not urge me to leave you or turn back from following you; for where you go, I will go, and where you lodge, I will lodge. Your people shall be my people, and your God, my God."',
    },
    context: {
      before: {
        reference: 'Ruth 1:15',
        text: 'And she said, "See, your sister-in-law has gone back to her people and to her gods; return after your sister-in-law."',
      },
      after: {
        reference: 'Ruth 1:17',
        text: 'Where you die I will die, and there will I be buried. May the LORD do so to me and more also if anything but death parts me from you.',
      },
    },
  },

  // ============ 1 SAMUEL ============
  {
    id: '1-samuel-16-7',
    reference: '1 Samuel 16:7',
    book: '1 Samuel',
    chapter: 16,
    verse: 7,
    difficulty: 'medium',
    translations: {
      ESV: 'But the LORD said to Samuel, "Do not look on his appearance or on the height of his stature, because I have rejected him. For the LORD sees not as man sees: man looks on the outward appearance, but the LORD looks on the heart."',
      NIV: 'But the LORD said to Samuel, "Do not consider his appearance or his height, for I have rejected him. The LORD does not look at the things people look at. People look at the outward appearance, but the LORD looks at the heart."',
      KJV: 'But the LORD said unto Samuel, Look not on his countenance, or on the height of his stature; because I have refused him: for the LORD seeth not as man seeth; for man looketh on the outward appearance, but the LORD looketh on the heart.',
      NASB: 'But the LORD said to Samuel, "Do not look at his appearance or at the height of his stature, because I have rejected him; for God sees not as man sees, for man looks at the outward appearance, but the LORD looks at the heart."',
    },
    context: {
      before: {
        reference: '1 Samuel 16:6',
        text: 'When they came, he looked on Eliab and thought, "Surely the LORD\'s anointed is before him."',
      },
      after: {
        reference: '1 Samuel 16:8',
        text: 'Then Jesse called Abinadab and made him pass before Samuel.',
      },
    },
  },

  // ============ 2 SAMUEL ============
  {
    id: '2-samuel-22-2-3',
    reference: '2 Samuel 22:2-3',
    book: '2 Samuel',
    chapter: 22,
    verse: 2,
    difficulty: 'medium',
    translations: {
      ESV: 'He said, "The LORD is my rock and my fortress and my deliverer, my God, my rock, in whom I take refuge, my shield, and the horn of my salvation, my stronghold and my refuge, my savior; you save me from violence."',
      NIV: 'He said: "The LORD is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation. He is my stronghold, my refuge and my savior—from violent people you save me."',
      KJV: 'And he said, The LORD is my rock, and my fortress, and my deliverer; The God of my rock; in him will I trust: he is my shield, and the horn of my salvation, my high tower, and my refuge, my saviour; thou savest me from violence.',
      NASB: 'He said, "The LORD is my rock and my fortress and my deliverer; My God, my rock, in whom I take refuge, My shield and the horn of my salvation, my stronghold and my refuge; My savior, You save me from violence."',
    },
    context: {
      before: {
        reference: '2 Samuel 22:1',
        text: 'And David spoke to the LORD the words of this song on the day when the LORD delivered him from the hand of all his enemies, and from the hand of Saul.',
      },
      after: {
        reference: '2 Samuel 22:4',
        text: 'I call upon the LORD, who is worthy to be praised, and I am saved from my enemies.',
      },
    },
  },

  // ============ 1 KINGS ============
  {
    id: '1-kings-8-56',
    reference: '1 Kings 8:56',
    book: '1 Kings',
    chapter: 8,
    verse: 56,
    difficulty: 'medium',
    translations: {
      ESV: 'Blessed be the LORD who has given rest to his people Israel, according to all that he promised. Not one word has failed of all his good promise, which he spoke by Moses his servant.',
      NIV: 'Praise be to the LORD, who has given rest to his people Israel just as he promised. Not one word has failed of all the good promises he gave through his servant Moses.',
      KJV: 'Blessed be the LORD, that hath given rest unto his people Israel, according to all that he promised: there hath not failed one word of all his good promise, which he promised by the hand of Moses his servant.',
      NASB: 'Blessed be the LORD, who has given rest to His people Israel, according to all that He promised; not one word has failed of all His good promise, which He promised through Moses His servant.',
    },
    context: {
      before: {
        reference: '1 Kings 8:55',
        text: 'And he stood and blessed all the assembly of Israel with a loud voice.',
      },
      after: {
        reference: '1 Kings 8:57',
        text: 'The LORD our God be with us, as he was with our fathers.',
      },
    },
  },

  // ============ 2 KINGS ============
  {
    id: '2-kings-2-9',
    reference: '2 Kings 2:9',
    book: '2 Kings',
    chapter: 2,
    verse: 9,
    difficulty: 'medium',
    translations: {
      ESV: 'When they had crossed, Elijah said to Elisha, "Ask what I shall do for you, before I am taken from you." And Elisha said, "Please let there be a double portion of your spirit on me."',
      NIV: 'When they had crossed, Elijah said to Elisha, "Tell me, what can I do for you before I am taken from you?" "Let me inherit a double portion of your spirit," Elisha replied.',
      KJV: 'And it came to pass, when they were gone over, that Elijah said unto Elisha, Ask what I shall do for thee, before I be taken away from thee. And Elisha said, I pray thee, let a double portion of thy spirit be upon me.',
      NASB: 'When they had crossed over, Elijah said to Elisha, "Ask what I shall do for you before I am taken from you." And Elisha said, "Please, let a double portion of your spirit be upon me."',
    },
    context: {
      before: {
        reference: '2 Kings 2:8',
        text: 'Then Elijah took his cloak and rolled it up and struck the water, and the water was parted to the one side and to the other, till the two of them could go over on dry ground.',
      },
      after: {
        reference: '2 Kings 2:10',
        text: 'And he said, "You have asked a hard thing; yet, if you see me as I am being taken from you, it shall be so for you."',
      },
    },
  },
  {
    id: '2-kings-5-14',
    reference: '2 Kings 5:14',
    book: '2 Kings',
    chapter: 5,
    verse: 14,
    difficulty: 'medium',
    translations: {
      ESV: 'So he went down and dipped himself seven times in the Jordan, according to the word of the man of God, and his flesh was restored like the flesh of a little child, and he was clean.',
      NIV: 'So he went down and dipped himself in the Jordan seven times, as the man of God had told him, and his flesh was restored and became clean like that of a young boy.',
      KJV: 'Then went he down, and dipped himself seven times in Jordan, according to the saying of the man of God: and his flesh came again like unto the flesh of a little child, and he was clean.',
      NASB: 'So he went down and dipped himself seven times in the Jordan, according to the word of the man of God; and his flesh was restored like the flesh of a little child and he was clean.',
    },
    context: {
      before: {
        reference: '2 Kings 5:13',
        text: 'But his servants came near and said to him, "My father, it is a great word the prophet has spoken to you; will you not do it?"',
      },
      after: {
        reference: '2 Kings 5:15',
        text: 'Then he returned to the man of God, he and all his company, and he came and stood before him. And he said, "Behold, I know that there is no God in all the earth but in Israel."',
      },
    },
  },

  // ============ 1 CHRONICLES ============
  {
    id: '1-chronicles-16-11',
    reference: '1 Chronicles 16:11',
    book: '1 Chronicles',
    chapter: 16,
    verse: 11,
    difficulty: 'easy',
    translations: {
      ESV: 'Seek the LORD and his strength; seek his presence continually!',
      NIV: 'Look to the LORD and his strength; seek his face always.',
      KJV: 'Seek the LORD and his strength, seek his face continually.',
      NASB: 'Seek the LORD and His strength; seek His face continually.',
    },
    context: {
      before: {
        reference: '1 Chronicles 16:10',
        text: 'Glory in his holy name; let the hearts of those who seek the LORD rejoice!',
      },
      after: {
        reference: '1 Chronicles 16:12',
        text: 'Remember the wondrous works that he has done, his miracles and the judgments he uttered.',
      },
    },
  },
  {
    id: '1-chronicles-29-11',
    reference: '1 Chronicles 29:11',
    book: '1 Chronicles',
    chapter: 29,
    verse: 11,
    difficulty: 'medium',
    translations: {
      ESV: 'Yours, O LORD, is the greatness and the power and the glory and the victory and the majesty, for all that is in the heavens and in the earth is yours. Yours is the kingdom, O LORD, and you are exalted as head above all.',
      NIV: 'Yours, LORD, is the greatness and the power and the glory and the majesty and the splendor, for everything in heaven and earth is yours. Yours, LORD, is the kingdom; you are exalted as head over all.',
      KJV: 'Thine, O LORD, is the greatness, and the power, and the glory, and the victory, and the majesty: for all that is in the heaven and in the earth is thine; thine is the kingdom, O LORD, and thou art exalted as head above all.',
      NASB: 'Yours, O LORD, is the greatness and the power and the glory and the victory and the majesty, indeed everything that is in the heavens and the earth; Yours is the dominion, O LORD, and You exalt Yourself as head over all.',
    },
    context: {
      before: {
        reference: '1 Chronicles 29:10',
        text: 'Therefore David blessed the LORD in the presence of all the assembly. And David said: "Blessed are you, O LORD, the God of Israel our father, forever and ever."',
      },
      after: {
        reference: '1 Chronicles 29:12',
        text: 'Both riches and honor come from you, and you rule over all. In your hand are power and might, and in your hand it is to make great and to give strength to all.',
      },
    },
  },

  // ============ 2 CHRONICLES ============
  {
    id: '2-chronicles-7-14',
    reference: '2 Chronicles 7:14',
    book: '2 Chronicles',
    chapter: 7,
    verse: 14,
    difficulty: 'medium',
    translations: {
      ESV: 'If my people who are called by my name humble themselves, and pray and seek my face and turn from their wicked ways, then I will hear from heaven and will forgive their sin and heal their land.',
      NIV: 'If my people, who are called by my name, will humble themselves and pray and seek my face and turn from their wicked ways, then I will hear from heaven, and I will forgive their sin and will heal their land.',
      KJV: 'If my people, which are called by my name, shall humble themselves, and pray, and seek my face, and turn from their wicked ways; then will I hear from heaven, and will forgive their sin, and will heal their land.',
      NASB: 'And My people who are called by My name humble themselves and pray and seek My face and turn from their wicked ways, then I will hear from heaven, will forgive their sin and will heal their land.',
    },
    context: {
      before: {
        reference: '2 Chronicles 7:13',
        text: 'When I shut up the heavens so that there is no rain, or command the locust to devour the land, or send pestilence among my people.',
      },
      after: {
        reference: '2 Chronicles 7:15',
        text: 'Now my eyes will be open and my ears attentive to the prayer that is made in this place.',
      },
    },
  },

  // ============ EZRA ============
  {
    id: 'ezra-7-10',
    reference: 'Ezra 7:10',
    book: 'Ezra',
    chapter: 7,
    verse: 10,
    difficulty: 'medium',
    translations: {
      ESV: 'For Ezra had set his heart to study the Law of the LORD, and to do it and to teach his statutes and rules in Israel.',
      NIV: 'For Ezra had devoted himself to the study and observance of the Law of the LORD, and to teaching its decrees and laws in Israel.',
      KJV: 'For Ezra had prepared his heart to seek the law of the LORD, and to do it, and to teach in Israel statutes and judgments.',
      NASB: 'For Ezra had set his heart to study the law of the LORD and to practice it, and to teach His statutes and ordinances in Israel.',
    },
    context: {
      before: {
        reference: 'Ezra 7:9',
        text: 'For on the first day of the first month he began to go up from Babylon, and on the first day of the fifth month he came to Jerusalem.',
      },
      after: {
        reference: 'Ezra 7:11',
        text: 'This is a copy of the letter that King Artaxerxes gave to Ezra the priest.',
      },
    },
  },
  {
    id: 'ezra-9-6',
    reference: 'Ezra 9:6',
    book: 'Ezra',
    chapter: 9,
    verse: 6,
    difficulty: 'medium',
    translations: {
      ESV: 'O my God, I am ashamed and blush to lift my face to you, my God, for our iniquities have risen higher than our heads, and our guilt has mounted up to the heavens.',
      NIV: 'I am too ashamed and disgraced, my God, to lift up my face to you, because our sins are higher than our heads and our guilt has reached to the heavens.',
      KJV: 'And said, O my God, I am ashamed and blush to lift up my face to thee, my God: for our iniquities are increased over our head, and our trespass is grown up unto the heavens.',
      NASB: 'And I said, "O my God, I am ashamed and embarrassed to lift up my face to You, my God, for our iniquities have risen above our heads and our guilt has grown even to the heavens.',
    },
    context: {
      before: {
        reference: 'Ezra 9:5',
        text: 'And at the evening sacrifice I rose from my fasting, with my garment and my cloak torn, and fell upon my knees and spread out my hands to the LORD my God.',
      },
      after: {
        reference: 'Ezra 9:7',
        text: 'From the days of our fathers to this day we have been in great guilt.',
      },
    },
  },

  // ============ NEHEMIAH ============
  {
    id: 'nehemiah-8-10',
    reference: 'Nehemiah 8:10',
    book: 'Nehemiah',
    chapter: 8,
    verse: 10,
    difficulty: 'medium',
    translations: {
      ESV: 'Then he said to them, "Go your way. Eat the fat and drink sweet wine and send portions to anyone who has nothing ready, for this day is holy to our Lord. And do not be grieved, for the joy of the LORD is your strength."',
      NIV: 'Nehemiah said, "Go and enjoy choice food and sweet drinks, and send some to those who have nothing prepared. This day is holy to our Lord. Do not grieve, for the joy of the LORD is your strength."',
      KJV: 'Then he said unto them, Go your way, eat the fat, and drink the sweet, and send portions unto them for whom nothing is prepared: for this day is holy unto our Lord: neither be ye sorry; for the joy of the LORD is your strength.',
      NASB: 'Then he said to them, "Go, eat of the fat, drink of the sweet, and send portions to him who has nothing prepared; for this day is holy to our Lord. Do not be grieved, for the joy of the LORD is your strength."',
    },
    context: {
      before: {
        reference: 'Nehemiah 8:9',
        text: 'And Nehemiah, who was the governor, and Ezra the priest and scribe, and the Levites who taught the people said to all the people, "This day is holy to the LORD your God; do not mourn or weep."',
      },
      after: {
        reference: 'Nehemiah 8:11',
        text: 'So the Levites calmed all the people, saying, "Be quiet, for this day is holy; do not be grieved."',
      },
    },
  },

  // ============ ESTHER ============
  {
    id: 'esther-4-14',
    reference: 'Esther 4:14',
    book: 'Esther',
    chapter: 4,
    verse: 14,
    difficulty: 'medium',
    translations: {
      ESV: 'For if you keep silent at this time, relief and deliverance will rise for the Jews from another place, but you and your father\'s house will perish. And who knows whether you have not come to the kingdom for such a time as this?',
      NIV: 'For if you remain silent at this time, relief and deliverance for the Jews will arise from another place, but you and your father\'s family will perish. And who knows but that you have come to your royal position for such a time as this?',
      KJV: 'For if thou altogether holdest thy peace at this time, then shall there enlargement and deliverance arise to the Jews from another place; but thou and thy father\'s house shall be destroyed: and who knoweth whether thou art come to the kingdom for such a time as this?',
      NASB: 'For if you remain silent at this time, relief and deliverance will arise for the Jews from another place and you and your father\'s house will perish. And who knows whether you have not attained royalty for such a time as this?',
    },
    context: {
      before: {
        reference: 'Esther 4:13',
        text: 'Then Mordecai told them to reply to Esther, "Do not think to yourself that in the king\'s palace you will escape any more than all the other Jews."',
      },
      after: {
        reference: 'Esther 4:15',
        text: 'Then Esther told them to reply to Mordecai.',
      },
    },
  },

  // ============ JOB ============
  {
    id: 'job-19-25-26',
    reference: 'Job 19:25-26',
    book: 'Job',
    chapter: 19,
    verse: 25,
    difficulty: 'medium',
    translations: {
      ESV: 'For I know that my Redeemer lives, and at the last he will stand upon the earth. And after my skin has been thus destroyed, yet in my flesh I shall see God.',
      NIV: 'I know that my redeemer lives, and that in the end he will stand on the earth. And after my skin has been destroyed, yet in my flesh I will see God.',
      KJV: 'For I know that my redeemer liveth, and that he shall stand at the latter day upon the earth: And though after my skin worms destroy this body, yet in my flesh shall I see God.',
      NASB: 'As for me, I know that my Redeemer lives, and at the last He will take His stand on the earth. Even after my skin is destroyed, yet from my flesh I shall see God.',
    },
    context: {
      before: {
        reference: 'Job 19:24',
        text: 'Oh that with an iron pen and lead they were engraved in the rock forever!',
      },
      after: {
        reference: 'Job 19:27',
        text: 'Whom I shall see for myself, and my eyes shall behold, and not another.',
      },
    },
  },
  {
    id: 'job-1-21',
    reference: 'Job 1:21',
    book: 'Job',
    chapter: 1,
    verse: 21,
    difficulty: 'easy',
    translations: {
      ESV: 'And he said, "Naked I came from my mother\'s womb, and naked shall I return. The LORD gave, and the LORD has taken away; blessed be the name of the LORD."',
      NIV: 'And said: "Naked I came from my mother\'s womb, and naked I will depart. The LORD gave and the LORD has taken away; may the name of the LORD be praised."',
      KJV: 'And said, Naked came I out of my mother\'s womb, and naked shall I return thither: the LORD gave, and the LORD hath taken away; blessed be the name of the LORD.',
      NASB: 'He said, "Naked I came from my mother\'s womb, and naked I shall return there. The LORD gave and the LORD has taken away. Blessed be the name of the LORD."',
    },
    context: {
      before: {
        reference: 'Job 1:20',
        text: 'Then Job arose and tore his robe and shaved his head and fell on the ground and worshiped.',
      },
      after: {
        reference: 'Job 1:22',
        text: 'In all this Job did not sin or charge God with wrong.',
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
    id: 'psalm-46-10',
    reference: 'Psalm 46:10',
    book: 'Psalms',
    chapter: 46,
    verse: 10,
    difficulty: 'easy',
    translations: {
      ESV: 'Be still, and know that I am God. I will be exalted among the nations, I will be exalted in the earth!',
      NIV: 'He says, "Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth."',
      KJV: 'Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.',
      NASB: 'Cease striving and know that I am God; I will be exalted among the nations, I will be exalted in the earth.',
    },
    context: {
      before: {
        reference: 'Psalm 46:9',
        text: 'He makes wars cease to the end of the earth; he breaks the bow and shatters the spear; he burns the chariots with fire.',
      },
      after: {
        reference: 'Psalm 46:11',
        text: 'The LORD of hosts is with us; the God of Jacob is our fortress.',
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

  // ============ ECCLESIASTES ============
  {
    id: 'ecclesiastes-12-13',
    reference: 'Ecclesiastes 12:13',
    book: 'Ecclesiastes',
    chapter: 12,
    verse: 13,
    difficulty: 'easy',
    translations: {
      ESV: 'The end of the matter; all has been heard. Fear God and keep his commandments, for this is the whole duty of man.',
      NIV: 'Now all has been heard; here is the conclusion of the matter: Fear God and keep his commandments, for this is the duty of all mankind.',
      KJV: 'Let us hear the conclusion of the whole matter: Fear God, and keep his commandments: for this is the whole duty of man.',
      NASB: 'The conclusion, when all has been heard, is: fear God and keep His commandments, because this applies to every person.',
    },
    context: {
      before: {
        reference: 'Ecclesiastes 12:12',
        text: 'My son, beware of anything beyond these. Of making many books there is no end, and much study is a weariness of the flesh.',
      },
      after: {
        reference: 'Ecclesiastes 12:14',
        text: 'For God will bring every deed into judgment, with every secret thing, whether good or evil.',
      },
    },
  },
  {
    id: 'ecclesiastes-3-11',
    reference: 'Ecclesiastes 3:11',
    book: 'Ecclesiastes',
    chapter: 3,
    verse: 11,
    difficulty: 'medium',
    translations: {
      ESV: 'He has made everything beautiful in its time. Also, he has put eternity into man\'s heart, yet so that he cannot find out what God has done from the beginning to the end.',
      NIV: 'He has made everything beautiful in its time. He has also set eternity in the human heart; yet no one can fathom what God has done from beginning to end.',
      KJV: 'He hath made every thing beautiful in his time: also he hath set the world in their heart, so that no man can find out the work that God maketh from the beginning to the end.',
      NASB: 'He has made everything appropriate in its time. He has also set eternity in their heart, yet so that man will not find out the work which God has done from the beginning even to the end.',
    },
    context: {
      before: {
        reference: 'Ecclesiastes 3:10',
        text: 'I have seen the business that God has given to the children of man to be busy with.',
      },
      after: {
        reference: 'Ecclesiastes 3:12',
        text: 'I perceived that there is nothing better for them than to be joyful and to do good as long as they live.',
      },
    },
  },

  // ============ SONG OF SOLOMON ============
  {
    id: 'song-of-solomon-2-4',
    reference: 'Song of Solomon 2:4',
    book: 'Song of Solomon',
    chapter: 2,
    verse: 4,
    difficulty: 'easy',
    translations: {
      ESV: 'He brought me to the banqueting house, and his banner over me was love.',
      NIV: 'Let him lead me to the banquet hall, and let his banner over me be love.',
      KJV: 'He brought me to the banqueting house, and his banner over me was love.',
      NASB: 'He has brought me to his banquet hall, and his banner over me is love.',
    },
    context: {
      before: {
        reference: 'Song of Solomon 2:3',
        text: 'As an apple tree among the trees of the forest, so is my beloved among the young men. With great delight I sat in his shadow, and his fruit was sweet to my taste.',
      },
      after: {
        reference: 'Song of Solomon 2:5',
        text: 'Sustain me with raisins; refresh me with apples, for I am sick with love.',
      },
    },
  },
  {
    id: 'song-of-solomon-8-6',
    reference: 'Song of Solomon 8:6',
    book: 'Song of Solomon',
    chapter: 8,
    verse: 6,
    difficulty: 'medium',
    translations: {
      ESV: 'Set me as a seal upon your heart, as a seal upon your arm, for love is strong as death, jealousy is fierce as the grave. Its flashes are flashes of fire, the very flame of the LORD.',
      NIV: 'Place me like a seal over your heart, like a seal on your arm; for love is as strong as death, its jealousy unyielding as the grave. It burns like blazing fire, like a mighty flame.',
      KJV: 'Set me as a seal upon thine heart, as a seal upon thine arm: for love is strong as death; jealousy is cruel as the grave: the coals thereof are coals of fire, which hath a most vehement flame.',
      NASB: 'Put me like a seal over your heart, like a seal on your arm. For love is as strong as death, jealousy is as severe as Sheol; its flashes are flashes of fire, the very flame of the LORD.',
    },
    context: {
      before: {
        reference: 'Song of Solomon 8:5',
        text: 'Who is that coming up from the wilderness, leaning on her beloved?',
      },
      after: {
        reference: 'Song of Solomon 8:7',
        text: 'Many waters cannot quench love, neither can floods drown it.',
      },
    },
  },

  // ============ ISAIAH ============
  {
    id: 'isaiah-9-6',
    reference: 'Isaiah 9:6',
    book: 'Isaiah',
    chapter: 9,
    verse: 6,
    difficulty: 'hard',
    translations: {
      ESV: 'For to us a child is born, to us a son is given; and the government shall be upon his shoulder, and his name shall be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace.',
      NIV: 'For to us a child is born, to us a son is given, and the government will be on his shoulders. And he will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace.',
      KJV: 'For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.',
      NASB: 'For a child will be born to us, a son will be given to us; and the government will rest on His shoulders; and His name will be called Wonderful Counselor, Mighty God, Eternal Father, Prince of Peace.',
    },
    context: {
      before: {
        reference: 'Isaiah 9:5',
        text: 'For every boot of the tramping warrior in battle tumult and every garment rolled in blood will be burned as fuel for the fire.',
      },
      after: {
        reference: 'Isaiah 9:7',
        text: 'Of the increase of his government and of peace there will be no end.',
      },
    },
  },
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
  {
    id: 'jeremiah-31-33',
    reference: 'Jeremiah 31:33',
    book: 'Jeremiah',
    chapter: 31,
    verse: 33,
    difficulty: 'hard',
    translations: {
      ESV: 'For this is the covenant that I will make with the house of Israel after those days, declares the LORD: I will put my law within them, and I will write it on their hearts. And I will be their God, and they shall be my people.',
      NIV: '"This is the covenant I will make with the people of Israel after that time," declares the LORD. "I will put my law in their minds and write it on their hearts. I will be their God, and they will be my people."',
      KJV: 'But this shall be the covenant that I will make with the house of Israel; After those days, saith the LORD, I will put my law in their inward parts, and write it in their hearts; and will be their God, and they shall be my people.',
      NASB: '"But this is the covenant which I will make with the house of Israel after those days," declares the LORD, "I will put My law within them and on their heart I will write it; and I will be their God, and they shall be My people."',
    },
    context: {
      before: {
        reference: 'Jeremiah 31:32',
        text: 'not like the covenant that I made with their fathers on the day when I took them by the hand to bring them out of the land of Egypt, my covenant that they broke.',
      },
      after: {
        reference: 'Jeremiah 31:34',
        text: 'And no longer shall each one teach his neighbor and each his brother, saying, "Know the LORD," for they shall all know me, from the least of them to the greatest.',
      },
    },
  },
  {
    id: 'jeremiah-17-9',
    reference: 'Jeremiah 17:9',
    book: 'Jeremiah',
    chapter: 17,
    verse: 9,
    difficulty: 'medium',
    translations: {
      ESV: 'The heart is deceitful above all things, and desperately sick; who can understand it?',
      NIV: 'The heart is deceitful above all things and beyond cure. Who can understand it?',
      KJV: 'The heart is deceitful above all things, and desperately wicked: who can know it?',
      NASB: 'The heart is more deceitful than all else and is desperately sick; who can understand it?',
    },
    context: {
      before: {
        reference: 'Jeremiah 17:8',
        text: 'He is like a tree planted by water, that sends out its roots by the stream, and does not fear when heat comes.',
      },
      after: {
        reference: 'Jeremiah 17:10',
        text: 'I the LORD search the heart and test the mind, to give every man according to his ways, according to the fruit of his deeds.',
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

  // ============ EZEKIEL ============
  {
    id: 'ezekiel-36-26',
    reference: 'Ezekiel 36:26',
    book: 'Ezekiel',
    chapter: 36,
    verse: 26,
    difficulty: 'medium',
    translations: {
      ESV: 'And I will give you a new heart, and a new spirit I will put within you. And I will remove the heart of stone from your flesh and give you a heart of flesh.',
      NIV: 'I will give you a new heart and put a new spirit in you; I will remove from you your heart of stone and give you a heart of flesh.',
      KJV: 'A new heart also will I give you, and a new spirit will I put within you: and I will take away the stony heart out of your flesh, and I will give you an heart of flesh.',
      NASB: 'Moreover, I will give you a new heart and put a new spirit within you; and I will remove the heart of stone from your flesh and give you a heart of flesh.',
    },
    context: {
      before: {
        reference: 'Ezekiel 36:25',
        text: 'I will sprinkle clean water on you, and you shall be clean from all your uncleannesses, and from all your idols I will cleanse you.',
      },
      after: {
        reference: 'Ezekiel 36:27',
        text: 'And I will put my Spirit within you, and cause you to walk in my statutes.',
      },
    },
  },

  // ============ DANIEL ============
  {
    id: 'daniel-3-17-18',
    reference: 'Daniel 3:17-18',
    book: 'Daniel',
    chapter: 3,
    verse: 17,
    difficulty: 'hard',
    translations: {
      ESV: 'If this be so, our God whom we serve is able to deliver us from the burning fiery furnace, and he will deliver us out of your hand, O king. But if not, be it known to you, O king, that we will not serve your gods or worship the golden image that you have set up.',
      NIV: 'If we are thrown into the blazing furnace, the God we serve is able to deliver us from it, and he will deliver us from Your Majesty\'s hand. But even if he does not, we want you to know, Your Majesty, that we will not serve your gods or worship the image of gold you have set up.',
      KJV: 'If it be so, our God whom we serve is able to deliver us from the burning fiery furnace, and he will deliver us out of thine hand, O king. But if not, be it known unto thee, O king, that we will not serve thy gods, nor worship the golden image which thou hast set up.',
      NASB: 'If it be so, our God whom we serve is able to deliver us from the furnace of blazing fire; and He will deliver us out of your hand, O king. But even if He does not, let it be known to you, O king, that we are not going to serve your gods or worship the golden image that you have set up.',
    },
    context: {
      before: {
        reference: 'Daniel 3:16',
        text: 'Shadrach, Meshach, and Abednego answered and said to the king, "O Nebuchadnezzar, we have no need to answer you in this matter."',
      },
      after: {
        reference: 'Daniel 3:19',
        text: 'Then Nebuchadnezzar was filled with fury, and the expression of his face was changed against Shadrach, Meshach, and Abednego.',
      },
    },
  },
  {
    id: 'daniel-2-44',
    reference: 'Daniel 2:44',
    book: 'Daniel',
    chapter: 2,
    verse: 44,
    difficulty: 'hard',
    translations: {
      ESV: 'And in the days of those kings the God of heaven will set up a kingdom that shall never be destroyed, nor shall the kingdom be left to another people. It shall break in pieces all these kingdoms and bring them to an end, and it shall stand forever,',
      NIV: 'In the time of those kings, the God of heaven will set up a kingdom that will never be destroyed, nor will it be left to another people. It will crush all those kingdoms and bring them to an end, but it will itself endure forever.',
      KJV: 'And in the days of these kings shall the God of heaven set up a kingdom, which shall never be destroyed: and the kingdom shall not be left to other people, but it shall break in pieces and consume all these kingdoms, and it shall stand for ever.',
      NASB: 'In the days of those kings the God of heaven will set up a kingdom which will never be destroyed, and that kingdom will not be left for another people; it will crush and put an end to all these kingdoms, but it will itself endure forever.',
    },
    context: {
      before: {
        reference: 'Daniel 2:43',
        text: 'As you saw the iron mixed with soft clay, so they will mix with one another in marriage, but they will not hold together.',
      },
      after: {
        reference: 'Daniel 2:45',
        text: 'just as you saw that a stone was cut from a mountain by no human hand, and that it broke in pieces the iron, the bronze, the clay, the silver, and the gold.',
      },
    },
  },

  // ============ HOSEA ============
  {
    id: 'hosea-6-6',
    reference: 'Hosea 6:6',
    book: 'Hosea',
    chapter: 6,
    verse: 6,
    difficulty: 'medium',
    translations: {
      ESV: 'For I desire steadfast love and not sacrifice, the knowledge of God rather than burnt offerings.',
      NIV: 'For I desire mercy, not sacrifice, and acknowledgment of God rather than burnt offerings.',
      KJV: 'For I desired mercy, and not sacrifice; and the knowledge of God more than burnt offerings.',
      NASB: 'For I delight in loyalty rather than sacrifice, and in the knowledge of God rather than burnt offerings.',
    },
    context: {
      before: {
        reference: 'Hosea 6:5',
        text: 'Therefore I have hewn them by the prophets; I have slain them by the words of my mouth.',
      },
      after: {
        reference: 'Hosea 6:7',
        text: 'But like Adam they transgressed the covenant; there they dealt faithlessly with me.',
      },
    },
  },
  {
    id: 'hosea-11-1',
    reference: 'Hosea 11:1',
    book: 'Hosea',
    chapter: 11,
    verse: 1,
    difficulty: 'medium',
    translations: {
      ESV: 'When Israel was a child, I loved him, and out of Egypt I called my son.',
      NIV: 'When Israel was a child, I loved him, and out of Egypt I called my son.',
      KJV: 'When Israel was a child, then I loved him, and called my son out of Egypt.',
      NASB: 'When Israel was a youth I loved him, and out of Egypt I called My son.',
    },
    context: {
      before: {
        reference: 'Hosea 10:15',
        text: 'So shall it be done to you, O Bethel, because of your great wickedness. At dawn the king of Israel shall be utterly cut off.',
      },
      after: {
        reference: 'Hosea 11:2',
        text: 'The more they were called, the more they went away; they kept sacrificing to the Baals and burning offerings to idols.',
      },
    },
  },

  // ============ JOEL ============
  {
    id: 'joel-2-28',
    reference: 'Joel 2:28',
    book: 'Joel',
    chapter: 2,
    verse: 28,
    difficulty: 'medium',
    translations: {
      ESV: 'And it shall come to pass afterward, that I will pour out my Spirit on all flesh; your sons and your daughters shall prophesy, your old men shall dream dreams, and your young men shall see visions.',
      NIV: 'And afterward, I will pour out my Spirit on all people. Your sons and daughters will prophesy, your old men will dream dreams, your young men will see visions.',
      KJV: 'And it shall come to pass afterward, that I will pour out my spirit upon all flesh; and your sons and your daughters shall prophesy, your old men shall dream dreams, your young men shall see visions.',
      NASB: 'It will come about after this that I will pour out My Spirit on all mankind; and your sons and daughters will prophesy, your old men will dream dreams, your young men will see visions.',
    },
    context: {
      before: {
        reference: 'Joel 2:27',
        text: 'You shall know that I am in the midst of Israel, and that I am the LORD your God and there is none else.',
      },
      after: {
        reference: 'Joel 2:29',
        text: 'Even on the male and female servants in those days I will pour out my Spirit.',
      },
    },
  },

  // ============ AMOS ============
  {
    id: 'amos-5-24',
    reference: 'Amos 5:24',
    book: 'Amos',
    chapter: 5,
    verse: 24,
    difficulty: 'easy',
    translations: {
      ESV: 'But let justice roll down like waters, and righteousness like an ever-flowing stream.',
      NIV: 'But let justice roll on like a river, righteousness like a never-failing stream!',
      KJV: 'But let judgment run down as waters, and righteousness as a mighty stream.',
      NASB: 'But let justice roll down like waters and righteousness like an ever-flowing stream.',
    },
    context: {
      before: {
        reference: 'Amos 5:23',
        text: 'Take away from me the noise of your songs; to the melody of your harps I will not listen.',
      },
      after: {
        reference: 'Amos 5:25',
        text: 'Did you bring to me sacrifices and offerings during the forty years in the wilderness, O house of Israel?',
      },
    },
  },

  // ============ OBADIAH ============
  {
    id: 'obadiah-1-4',
    reference: 'Obadiah 4',
    book: 'Obadiah',
    chapter: 1,
    verse: 4,
    difficulty: 'medium',
    translations: {
      ESV: 'Though you soar aloft like the eagle, though your nest is set among the stars, from there I will bring you down, declares the LORD.',
      NIV: 'Though you soar like the eagle and make your nest among the stars, from there I will bring you down," declares the LORD.',
      KJV: 'Though thou exalt thyself as the eagle, and though thou set thy nest among the stars, thence will I bring thee down, saith the LORD.',
      NASB: 'Though you build high like the eagle, though you set your nest among the stars, from there I will bring you down," declares the LORD.',
    },
    context: {
      before: {
        reference: 'Obadiah 3',
        text: 'The pride of your heart has deceived you, you who live in the clefts of the rock, in your lofty dwelling.',
      },
      after: {
        reference: 'Obadiah 5',
        text: 'If thieves came to you, if plunderers came by night—how you have been destroyed!—would they not steal only enough for themselves?',
      },
    },
  },
  {
    id: 'obadiah-1-21',
    reference: 'Obadiah 21',
    book: 'Obadiah',
    chapter: 1,
    verse: 21,
    difficulty: 'easy',
    translations: {
      ESV: 'Saviors shall go up to Mount Zion to rule Mount Esau, and the kingdom shall be the LORD\'s.',
      NIV: 'Deliverers will go up on Mount Zion to govern the mountains of Esau. And the kingdom will be the LORD\'s.',
      KJV: 'And saviours shall come up on mount Zion to judge the mount of Esau; and the kingdom shall be the LORD\'S.',
      NASB: 'The deliverers will ascend Mount Zion to judge the mountain of Esau, and the kingdom will be the LORD\'S.',
    },
    context: {
      before: {
        reference: 'Obadiah 20',
        text: 'The exiles of this host of the people of Israel shall possess the land of the Canaanites as far as Zarephath.',
      },
    },
  },

  // ============ JONAH ============
  {
    id: 'jonah-2-9',
    reference: 'Jonah 2:9',
    book: 'Jonah',
    chapter: 2,
    verse: 9,
    difficulty: 'easy',
    translations: {
      ESV: 'But I with the voice of thanksgiving will sacrifice to you; what I have vowed I will pay. Salvation belongs to the LORD!',
      NIV: 'But I, with shouts of grateful praise, will sacrifice to you. What I have vowed I will make good. I will say, "Salvation comes from the LORD."',
      KJV: 'But I will sacrifice unto thee with the voice of thanksgiving; I will pay that that I have vowed. Salvation is of the LORD.',
      NASB: 'But I will sacrifice to You with the voice of thanksgiving. That which I have vowed I will pay. Salvation is from the LORD.',
    },
    context: {
      before: {
        reference: 'Jonah 2:8',
        text: 'Those who pay regard to vain idols forsake their hope of steadfast love.',
      },
      after: {
        reference: 'Jonah 2:10',
        text: 'And the LORD spoke to the fish, and it vomited Jonah out upon the dry land.',
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

  // ============ NAHUM ============
  {
    id: 'nahum-1-7',
    reference: 'Nahum 1:7',
    book: 'Nahum',
    chapter: 1,
    verse: 7,
    difficulty: 'easy',
    translations: {
      ESV: 'The LORD is good, a stronghold in the day of trouble; he knows those who take refuge in him.',
      NIV: 'The LORD is good, a refuge in times of trouble. He cares for those who trust in him.',
      KJV: 'The LORD is good, a strong hold in the day of trouble; and he knoweth them that trust in him.',
      NASB: 'The LORD is good, a stronghold in the day of trouble, and He knows those who take refuge in Him.',
    },
    context: {
      before: {
        reference: 'Nahum 1:6',
        text: 'Who can stand before his indignation? Who can endure the heat of his anger? His wrath is poured out like fire, and the rocks are broken into pieces by him.',
      },
      after: {
        reference: 'Nahum 1:8',
        text: 'But with an overflowing flood he will make a complete end of the adversaries, and will pursue his enemies into darkness.',
      },
    },
  },

  // ============ HABAKKUK ============
  {
    id: 'habakkuk-2-4',
    reference: 'Habakkuk 2:4',
    book: 'Habakkuk',
    chapter: 2,
    verse: 4,
    difficulty: 'medium',
    translations: {
      ESV: 'Behold, his soul is puffed up; it is not upright within him, but the righteous shall live by his faith.',
      NIV: 'See, the enemy is puffed up; his desires are not upright—but the righteous person will live by his faithfulness.',
      KJV: 'Behold, his soul which is lifted up is not upright in him: but the just shall live by his faith.',
      NASB: 'Behold, as for the proud one, his soul is not right within him; but the righteous will live by his faith.',
    },
    context: {
      before: {
        reference: 'Habakkuk 2:3',
        text: 'For still the vision awaits its appointed time; it hastens to the end—it will not lie.',
      },
      after: {
        reference: 'Habakkuk 2:5',
        text: 'Moreover, wine is a traitor, an arrogant man who is never at rest.',
      },
    },
  },

  // ============ ZEPHANIAH ============
  {
    id: 'zephaniah-3-17',
    reference: 'Zephaniah 3:17',
    book: 'Zephaniah',
    chapter: 3,
    verse: 17,
    difficulty: 'medium',
    translations: {
      ESV: 'The LORD your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing.',
      NIV: 'The LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.',
      KJV: 'The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing.',
      NASB: 'The LORD your God is in your midst, a victorious warrior. He will exult over you with joy, He will be quiet in His love, He will rejoice over you with shouts of joy.',
    },
    context: {
      before: {
        reference: 'Zephaniah 3:16',
        text: 'On that day it shall be said to Jerusalem: "Fear not, O Zion; let not your hands grow weak."',
      },
      after: {
        reference: 'Zephaniah 3:18',
        text: 'I will gather those of you who mourn for the festival, so that you will no longer suffer reproach.',
      },
    },
  },

  // ============ HAGGAI ============
  {
    id: 'haggai-2-9',
    reference: 'Haggai 2:9',
    book: 'Haggai',
    chapter: 2,
    verse: 9,
    difficulty: 'medium',
    translations: {
      ESV: 'The latter glory of this house shall be greater than the former, says the LORD of hosts. And in this place I will give peace, declares the LORD of hosts.',
      NIV: '"The glory of this present house will be greater than the glory of the former house," says the LORD Almighty. "And in this place I will grant peace," declares the LORD Almighty.',
      KJV: 'The glory of this latter house shall be greater than of the former, saith the LORD of hosts: and in this place will I give peace, saith the LORD of hosts.',
      NASB: '"The latter glory of this house will be greater than the former," says the LORD of hosts, "and in this place I will give peace," declares the LORD of hosts.',
    },
    context: {
      before: {
        reference: 'Haggai 2:8',
        text: 'The silver is mine, and the gold is mine, declares the LORD of hosts.',
      },
      after: {
        reference: 'Haggai 2:10',
        text: 'On the twenty-fourth day of the ninth month, in the second year of Darius, the word of the LORD came by Haggai the prophet.',
      },
    },
  },

  // ============ ZECHARIAH ============
  {
    id: 'zechariah-4-6',
    reference: 'Zechariah 4:6',
    book: 'Zechariah',
    chapter: 4,
    verse: 6,
    difficulty: 'medium',
    translations: {
      ESV: 'Then he said to me, "This is the word of the LORD to Zerubbabel: Not by might, nor by power, but by my Spirit, says the LORD of hosts."',
      NIV: 'So he said to me, "This is the word of the LORD to Zerubbabel: \'Not by might nor by power, but by my Spirit,\' says the LORD Almighty."',
      KJV: 'Then he answered and spake unto me, saying, This is the word of the LORD unto Zerubbabel, saying, Not by might, nor by power, but by my spirit, saith the LORD of hosts.',
      NASB: 'Then he said to me, "This is the word of the LORD to Zerubbabel saying, \'Not by might nor by power, but by My Spirit,\' says the LORD of hosts."',
    },
    context: {
      before: {
        reference: 'Zechariah 4:5',
        text: 'And the angel who talked with me answered and said to me, "Do you not know what these are?"',
      },
      after: {
        reference: 'Zechariah 4:7',
        text: 'Who are you, O great mountain? Before Zerubbabel you shall become a plain.',
      },
    },
  },

  // ============ MALACHI ============
  {
    id: 'malachi-3-6',
    reference: 'Malachi 3:6',
    book: 'Malachi',
    chapter: 3,
    verse: 6,
    difficulty: 'easy',
    translations: {
      ESV: 'For I the LORD do not change; therefore you, O children of Jacob, are not consumed.',
      NIV: 'I the LORD do not change. So you, the descendants of Jacob, are not destroyed.',
      KJV: 'For I am the LORD, I change not; therefore ye sons of Jacob are not consumed.',
      NASB: 'For I, the LORD, do not change; therefore you, O sons of Jacob, are not consumed.',
    },
    context: {
      before: {
        reference: 'Malachi 3:5',
        text: 'Then I will draw near to you for judgment. I will be a swift witness against the sorcerers.',
      },
      after: {
        reference: 'Malachi 3:7',
        text: 'From the days of your fathers you have turned aside from my statutes and have not kept them.',
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

  // ============ MARK ============
  {
    id: 'mark-10-45',
    reference: 'Mark 10:45',
    book: 'Mark',
    chapter: 10,
    verse: 45,
    difficulty: 'medium',
    translations: {
      ESV: 'For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many.',
      NIV: 'For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.',
      KJV: 'For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many.',
      NASB: 'For even the Son of Man did not come to be served, but to serve, and to give His life a ransom for many.',
    },
    context: {
      before: {
        reference: 'Mark 10:44',
        text: 'and whoever would be first among you must be slave of all.',
      },
      after: {
        reference: 'Mark 10:46',
        text: 'And they came to Jericho. And as he was leaving Jericho with his disciples and a great crowd, Bartimaeus, a blind beggar, the son of Timaeus, was sitting by the roadside.',
      },
    },
  },
  {
    id: 'mark-8-34',
    reference: 'Mark 8:34',
    book: 'Mark',
    chapter: 8,
    verse: 34,
    difficulty: 'medium',
    translations: {
      ESV: 'And calling the crowd to him with his disciples, he said to them, "If anyone would come after me, let him deny himself and take up his cross and follow me."',
      NIV: 'Then he called the crowd to him along with his disciples and said: "Whoever wants to be my disciple must deny themselves and take up their cross and follow me."',
      KJV: 'And when he had called the people unto him with his disciples also, he said unto them, Whosoever will come after me, let him deny himself, and take up his cross, and follow me.',
      NASB: 'And He summoned the crowd with His disciples, and said to them, "If anyone wishes to come after Me, he must deny himself, and take up his cross and follow Me."',
    },
    context: {
      before: {
        reference: 'Mark 8:33',
        text: 'But turning and seeing his disciples, he rebuked Peter and said, "Get behind me, Satan! For you are not setting your mind on the things of God, but on the things of man."',
      },
      after: {
        reference: 'Mark 8:35',
        text: 'For whoever would save his life will lose it, but whoever loses his life for my sake and the gospel\'s will save it.',
      },
    },
  },

  // ============ LUKE ============
  {
    id: 'luke-19-10',
    reference: 'Luke 19:10',
    book: 'Luke',
    chapter: 19,
    verse: 10,
    difficulty: 'easy',
    translations: {
      ESV: 'For the Son of Man came to seek and to save the lost.',
      NIV: 'For the Son of Man came to seek and to save the lost.',
      KJV: 'For the Son of man is come to seek and to save that which was lost.',
      NASB: 'For the Son of Man has come to seek and to save that which was lost.',
    },
    context: {
      before: {
        reference: 'Luke 19:9',
        text: 'And Jesus said to him, "Today salvation has come to this house, since he also is a son of Abraham."',
      },
      after: {
        reference: 'Luke 19:11',
        text: 'As they heard these things, he proceeded to tell a parable, because he was near to Jerusalem.',
      },
    },
  },
  {
    id: 'luke-9-23',
    reference: 'Luke 9:23',
    book: 'Luke',
    chapter: 9,
    verse: 23,
    difficulty: 'medium',
    translations: {
      ESV: 'And he said to all, "If anyone would come after me, let him deny himself and take up his cross daily and follow me."',
      NIV: 'Then he said to them all: "Whoever wants to be my disciple must deny themselves and take up their cross daily and follow me."',
      KJV: 'And he said to them all, If any man will come after me, let him deny himself, and take up his cross daily, and follow me.',
      NASB: 'And He was saying to them all, "If anyone wishes to come after Me, he must deny himself, and take up his cross daily and follow Me."',
    },
    context: {
      before: {
        reference: 'Luke 9:22',
        text: 'saying, "The Son of Man must suffer many things and be rejected by the elders and chief priests and scribes, and be killed, and on the third day be raised."',
      },
      after: {
        reference: 'Luke 9:24',
        text: 'For whoever would save his life will lose it, but whoever loses his life for my sake will save it.',
      },
    },
  },
  {
    id: 'luke-2-10-11',
    reference: 'Luke 2:10-11',
    book: 'Luke',
    chapter: 2,
    verse: 10,
    difficulty: 'medium',
    translations: {
      ESV: 'And the angel said to them, "Fear not, for behold, I bring you good news of great joy that will be for all the people. For unto you is born this day in the city of David a Savior, who is Christ the Lord."',
      NIV: 'But the angel said to them, "Do not be afraid. I bring you good news that will cause great joy for all the people. Today in the town of David a Savior has been born to you; he is the Messiah, the Lord."',
      KJV: 'And the angel said unto them, Fear not: for, behold, I bring you good tidings of great joy, which shall be to all people. For unto you is born this day in the city of David a Saviour, which is Christ the Lord.',
      NASB: 'And the angel said to them, "Do not be afraid; for behold, I bring you good news of great joy which will be for all the people; for today in the city of David there has been born for you a Savior, who is Christ the Lord."',
    },
    context: {
      before: {
        reference: 'Luke 2:9',
        text: 'And an angel of the Lord appeared to them, and the glory of the Lord shone around them, and they were filled with great fear.',
      },
      after: {
        reference: 'Luke 2:12',
        text: 'And this will be a sign for you: you will find a baby wrapped in swaddling cloths and lying in a manger.',
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
  {
    id: 'acts-2-38',
    reference: 'Acts 2:38',
    book: 'Acts',
    chapter: 2,
    verse: 38,
    difficulty: 'medium',
    translations: {
      ESV: 'And Peter said to them, "Repent and be baptized every one of you in the name of Jesus Christ for the forgiveness of your sins, and you will receive the gift of the Holy Spirit.',
      NIV: 'Peter replied, "Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit.',
      KJV: 'Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost.',
      NASB: 'Peter said to them, "Repent, and each of you be baptized in the name of Jesus Christ for the forgiveness of your sins; and you will receive the gift of the Holy Spirit.',
    },
    context: {
      before: {
        reference: 'Acts 2:37',
        text: 'Now when they heard this they were cut to the heart, and said to Peter and the rest of the apostles, "Brothers, what shall we do?"',
      },
      after: {
        reference: 'Acts 2:39',
        text: 'For the promise is for you and for your children and for all who are far off, everyone whom the Lord our God calls to himself.',
      },
    },
  },
  {
    id: 'acts-4-12',
    reference: 'Acts 4:12',
    book: 'Acts',
    chapter: 4,
    verse: 12,
    difficulty: 'easy',
    translations: {
      ESV: 'And there is salvation in no one else, for there is no other name under heaven given among men by which we must be saved.',
      NIV: 'Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved.',
      KJV: 'Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.',
      NASB: 'And there is salvation in no one else; for there is no other name under heaven that has been given among men by which we must be saved.',
    },
    context: {
      before: {
        reference: 'Acts 4:11',
        text: 'This Jesus is the stone that was rejected by you, the builders, which has become the cornerstone.',
      },
      after: {
        reference: 'Acts 4:13',
        text: 'Now when they saw the boldness of Peter and John, and perceived that they were uneducated, common men, they were astonished.',
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
    id: '1-corinthians-15-55-57',
    reference: '1 Corinthians 15:55-57',
    book: '1 Corinthians',
    chapter: 15,
    verse: 55,
    difficulty: 'medium',
    translations: {
      ESV: '"O death, where is your victory? O death, where is your sting?" The sting of death is sin, and the power of sin is the law. But thanks be to God, who gives us the victory through our Lord Jesus Christ.',
      NIV: '"Where, O death, is your victory? Where, O death, is your sting?" The sting of death is sin, and the power of sin is the law. But thanks be to God! He gives us the victory through our Lord Jesus Christ.',
      KJV: 'O death, where is thy sting? O grave, where is thy victory? The sting of death is sin; and the strength of sin is the law. But thanks be to God, which giveth us the victory through our Lord Jesus Christ.',
      NASB: '"O death, where is your victory? O death, where is your sting?" The sting of death is sin, and the power of sin is the law; but thanks be to God, who gives us the victory through our Lord Jesus Christ.',
    },
    context: {
      before: {
        reference: '1 Corinthians 15:54',
        text: 'When the perishable puts on the imperishable, and the mortal puts on immortality, then shall come to pass the saying that is written: "Death is swallowed up in victory."',
      },
      after: {
        reference: '1 Corinthians 15:58',
        text: 'Therefore, my beloved brothers, be steadfast, immovable, always abounding in the work of the Lord, knowing that in the Lord your labor is not in vain.',
      },
    },
  },
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
    id: 'philippians-2-10-11',
    reference: 'Philippians 2:10-11',
    book: 'Philippians',
    chapter: 2,
    verse: 10,
    difficulty: 'hard',
    translations: {
      ESV: 'so that at the name of Jesus every knee should bow, in heaven and on earth and under the earth, and every tongue confess that Jesus Christ is Lord, to the glory of God the Father.',
      NIV: 'that at the name of Jesus every knee should bow, in heaven and on earth and under the earth, and every tongue acknowledge that Jesus Christ is Lord, to the glory of God the Father.',
      KJV: 'That at the name of Jesus every knee should bow, of things in heaven, and things in earth, and things under the earth; And that every tongue should confess that Jesus Christ is Lord, to the glory of God the Father.',
      NASB: 'so that at the name of Jesus every knee will bow, of those who are in heaven and on earth and under the earth, and that every tongue will confess that Jesus Christ is Lord, to the glory of God the Father.',
    },
    context: {
      before: {
        reference: 'Philippians 2:9',
        text: 'Therefore God has highly exalted him and bestowed on him the name that is above every name,',
      },
      after: {
        reference: 'Philippians 2:12',
        text: 'Therefore, my beloved, as you have always obeyed, so now, not only as in my presence but much more in my absence, work out your own salvation with fear and trembling.',
      },
    },
  },
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
  {
    id: 'colossians-1-16',
    reference: 'Colossians 1:16',
    book: 'Colossians',
    chapter: 1,
    verse: 16,
    difficulty: 'hard',
    translations: {
      ESV: 'For by him all things were created, in heaven and on earth, visible and invisible, whether thrones or dominions or rulers or authorities—all things were created through him and for him.',
      NIV: 'For in him all things were created: things in heaven and on earth, visible and invisible, whether thrones or powers or rulers or authorities; all things have been created through him and for him.',
      KJV: 'For by him were all things created, that are in heaven, and that are in earth, visible and invisible, whether they be thrones, or dominions, or principalities, or powers: all things were created by him, and for him:',
      NASB: 'For by Him all things were created, both in the heavens and on earth, visible and invisible, whether thrones or dominions or rulers or authorities—all things have been created through Him and for Him.',
    },
    context: {
      before: {
        reference: 'Colossians 1:15',
        text: 'He is the image of the invisible God, the firstborn of all creation.',
      },
      after: {
        reference: 'Colossians 1:17',
        text: 'And he is before all things, and in him all things hold together.',
      },
    },
  },
  {
    id: 'colossians-2-9',
    reference: 'Colossians 2:9',
    book: 'Colossians',
    chapter: 2,
    verse: 9,
    difficulty: 'medium',
    translations: {
      ESV: 'For in him the whole fullness of deity dwells bodily,',
      NIV: 'For in Christ all the fullness of the Deity lives in bodily form,',
      KJV: 'For in him dwelleth all the fulness of the Godhead bodily.',
      NASB: 'For in Him all the fullness of Deity dwells in bodily form,',
    },
    context: {
      before: {
        reference: 'Colossians 2:8',
        text: 'See to it that no one takes you captive by philosophy and empty deceit, according to human tradition, according to the elemental spirits of the world, and not according to Christ.',
      },
      after: {
        reference: 'Colossians 2:10',
        text: 'and you have been filled in him, who is the head of all rule and authority.',
      },
    },
  },

  // ============ 1 THESSALONIANS ============
  {
    id: '1-thessalonians-5-16-18',
    reference: '1 Thessalonians 5:16-18',
    book: '1 Thessalonians',
    chapter: 5,
    verse: 16,
    difficulty: 'easy',
    translations: {
      ESV: 'Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you.',
      NIV: 'Rejoice always, pray continually, give thanks in all circumstances; for this is God\'s will for you in Christ Jesus.',
      KJV: 'Rejoice evermore. Pray without ceasing. In every thing give thanks: for this is the will of God in Christ Jesus concerning you.',
      NASB: 'Rejoice always; pray without ceasing; in everything give thanks; for this is God\'s will for you in Christ Jesus.',
    },
    context: {
      before: {
        reference: '1 Thessalonians 5:15',
        text: 'See that no one repays anyone evil for evil, but always seek to do good to one another and to everyone.',
      },
      after: {
        reference: '1 Thessalonians 5:19',
        text: 'Do not quench the Spirit.',
      },
    },
  },
  {
    id: '1-thessalonians-4-16-17',
    reference: '1 Thessalonians 4:16-17',
    book: '1 Thessalonians',
    chapter: 4,
    verse: 16,
    difficulty: 'hard',
    translations: {
      ESV: 'For the Lord himself will descend from heaven with a cry of command, with the voice of an archangel, and with the sound of the trumpet of God. And the dead in Christ will rise first. Then we who are alive, who are left, will be caught up together with them in the clouds to meet the Lord in the air, and so we will always be with the Lord.',
      NIV: 'For the Lord himself will come down from heaven, with a loud command, with the voice of the archangel and with the trumpet call of God, and the dead in Christ will rise first. After that, we who are still alive and are left will be caught up together with them in the clouds to meet the Lord in the air. And so we will be with the Lord forever.',
      KJV: 'For the Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God: and the dead in Christ shall rise first: Then we which are alive and remain shall be caught up together with them in the clouds, to meet the Lord in the air: and so shall we ever be with the Lord.',
      NASB: 'For the Lord Himself will descend from heaven with a shout, with the voice of the archangel and with the trumpet of God, and the dead in Christ will rise first. Then we who are alive and remain will be caught up together with them in the clouds to meet the Lord in the air, and so we shall always be with the Lord.',
    },
    context: {
      before: {
        reference: '1 Thessalonians 4:15',
        text: 'For this we declare to you by a word from the Lord, that we who are alive, who are left until the coming of the Lord, will not precede those who have fallen asleep.',
      },
      after: {
        reference: '1 Thessalonians 4:18',
        text: 'Therefore encourage one another with these words.',
      },
    },
  },

  // ============ 2 THESSALONIANS ============
  {
    id: '2-thessalonians-3-3',
    reference: '2 Thessalonians 3:3',
    book: '2 Thessalonians',
    chapter: 3,
    verse: 3,
    difficulty: 'easy',
    translations: {
      ESV: 'But the Lord is faithful. He will establish you and guard you against the evil one.',
      NIV: 'But the Lord is faithful, and he will strengthen you and protect you from the evil one.',
      KJV: 'But the Lord is faithful, who shall stablish you, and keep you from evil.',
      NASB: 'But the Lord is faithful, and He will strengthen and protect you from the evil one.',
    },
    context: {
      before: {
        reference: '2 Thessalonians 3:2',
        text: 'And that we may be delivered from wicked and evil men. For not all have faith.',
      },
      after: {
        reference: '2 Thessalonians 3:4',
        text: 'And we have confidence in the Lord about you, that you are doing and will do the things that we command.',
      },
    },
  },
  {
    id: '2-thessalonians-1-8-9',
    reference: '2 Thessalonians 1:8-9',
    book: '2 Thessalonians',
    chapter: 1,
    verse: 8,
    difficulty: 'hard',
    translations: {
      ESV: 'in flaming fire, inflicting vengeance on those who do not know God and on those who do not obey the gospel of our Lord Jesus. They will suffer the punishment of eternal destruction, away from the presence of the Lord and from the glory of his might,',
      NIV: 'He will punish those who do not know God and do not obey the gospel of our Lord Jesus. They will be punished with everlasting destruction and shut out from the presence of the Lord and from the glory of his might',
      KJV: 'In flaming fire taking vengeance on them that know not God, and that obey not the gospel of our Lord Jesus Christ: Who shall be punished with everlasting destruction from the presence of the Lord, and from the glory of his power;',
      NASB: 'dealing out retribution to those who do not know God and to those who do not obey the gospel of our Lord Jesus. These will pay the penalty of eternal destruction, away from the presence of the Lord and from the glory of His power,',
    },
    context: {
      before: {
        reference: '2 Thessalonians 1:7',
        text: 'and to grant relief to you who are afflicted as well as to us, when the Lord Jesus is revealed from heaven with his mighty angels',
      },
      after: {
        reference: '2 Thessalonians 1:10',
        text: 'when he comes on that day to be glorified in his saints, and to be marveled at among all who have believed.',
      },
    },
  },

  // ============ 1 TIMOTHY ============
  {
    id: '1-timothy-2-5',
    reference: '1 Timothy 2:5',
    book: '1 Timothy',
    chapter: 2,
    verse: 5,
    difficulty: 'easy',
    translations: {
      ESV: 'For there is one God, and there is one mediator between God and men, the man Christ Jesus,',
      NIV: 'For there is one God and one mediator between God and mankind, the man Christ Jesus,',
      KJV: 'For there is one God, and one mediator between God and men, the man Christ Jesus;',
      NASB: 'For there is one God, and one mediator also between God and men, the man Christ Jesus,',
    },
    context: {
      before: {
        reference: '1 Timothy 2:4',
        text: 'who desires all people to be saved and to come to the knowledge of the truth.',
      },
      after: {
        reference: '1 Timothy 2:6',
        text: 'who gave himself as a ransom for all, which is the testimony given at the proper time.',
      },
    },
  },
  {
    id: '1-timothy-4-12',
    reference: '1 Timothy 4:12',
    book: '1 Timothy',
    chapter: 4,
    verse: 12,
    difficulty: 'medium',
    translations: {
      ESV: 'Let no one despise you for your youth, but set the believers an example in speech, in conduct, in love, in faith, in purity.',
      NIV: 'Don\'t let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity.',
      KJV: 'Let no man despise thy youth; but be thou an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity.',
      NASB: 'Let no one look down on your youthfulness, but rather in speech, conduct, love, faith and purity, show yourself an example of those who believe.',
    },
    context: {
      before: {
        reference: '1 Timothy 4:11',
        text: 'Command and teach these things.',
      },
      after: {
        reference: '1 Timothy 4:13',
        text: 'Until I come, devote yourself to the public reading of Scripture, to exhortation, to teaching.',
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

  // ============ TITUS ============
  {
    id: 'titus-3-5',
    reference: 'Titus 3:5',
    book: 'Titus',
    chapter: 3,
    verse: 5,
    difficulty: 'medium',
    translations: {
      ESV: 'he saved us, not because of works done by us in righteousness, but according to his own mercy, by the washing of regeneration and renewal of the Holy Spirit,',
      NIV: 'he saved us, not because of righteous things we had done, but because of his mercy. He saved us through the washing of rebirth and renewal by the Holy Spirit,',
      KJV: 'Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost;',
      NASB: 'He saved us, not on the basis of deeds which we have done in righteousness, but according to His mercy, by the washing of regeneration and renewing by the Holy Spirit,',
    },
    context: {
      before: {
        reference: 'Titus 3:4',
        text: 'But when the goodness and loving kindness of God our Savior appeared,',
      },
      after: {
        reference: 'Titus 3:6',
        text: 'whom he poured out on us richly through Jesus Christ our Savior,',
      },
    },
  },
  {
    id: 'titus-2-11-12',
    reference: 'Titus 2:11-12',
    book: 'Titus',
    chapter: 2,
    verse: 11,
    difficulty: 'medium',
    translations: {
      ESV: 'For the grace of God has appeared, bringing salvation for all people, training us to renounce ungodliness and worldly passions, and to live self-controlled, upright, and godly lives in the present age.',
      NIV: 'For the grace of God has appeared that offers salvation to all people. It teaches us to say "No" to ungodliness and worldly passions, and to live self-controlled, upright and godly lives in this present age.',
      KJV: 'For the grace of God that bringeth salvation hath appeared to all men, Teaching us that, denying ungodliness and worldly lusts, we should live soberly, righteously, and godly, in this present world.',
      NASB: 'For the grace of God has appeared, bringing salvation to all men, instructing us to deny ungodliness and worldly desires and to live sensibly, righteously and godly in the present age.',
    },
    context: {
      before: {
        reference: 'Titus 2:10',
        text: 'not pilfering, but showing all good faith, so that in everything they may adorn the doctrine of God our Savior.',
      },
      after: {
        reference: 'Titus 2:13',
        text: 'waiting for our blessed hope, the appearing of the glory of our great God and Savior Jesus Christ.',
      },
    },
  },

  // ============ PHILEMON ============
  {
    id: 'philemon-6',
    reference: 'Philemon 6',
    book: 'Philemon',
    chapter: 1,
    verse: 6,
    difficulty: 'medium',
    translations: {
      ESV: 'and I pray that the sharing of your faith may become effective for the full knowledge of every good thing that is in us for the sake of Christ.',
      NIV: 'I pray that your partnership in the faith may be effective in deepening your understanding of every good thing we share for the sake of Christ.',
      KJV: 'That the communication of thy faith may become effectual by the acknowledging of every good thing which is in you in Christ Jesus.',
      NASB: 'And I pray that the fellowship of your faith may become effective through the knowledge of every good thing which is in you for Christ\'s sake.',
    },
    context: {
      before: {
        reference: 'Philemon 5',
        text: 'because I hear of your love and of the faith that you have toward the Lord Jesus and for all the saints,',
      },
      after: {
        reference: 'Philemon 7',
        text: 'For I have derived much joy and comfort from your love, my brother, because the hearts of the saints have been refreshed through you.',
      },
    },
  },

  // ============ HEBREWS ============
  {
    id: 'hebrews-12-1-2',
    reference: 'Hebrews 12:1-2',
    book: 'Hebrews',
    chapter: 12,
    verse: 1,
    difficulty: 'hard',
    translations: {
      ESV: 'Therefore, since we are surrounded by so great a cloud of witnesses, let us also lay aside every weight, and sin which clings so closely, and let us run with endurance the race that is set before us, looking to Jesus, the founder and perfecter of our faith, who for the joy that was set before him endured the cross, despising the shame, and is seated at the right hand of the throne of God.',
      NIV: 'Therefore, since we are surrounded by such a great cloud of witnesses, let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance the race marked out for us, fixing our eyes on Jesus, the pioneer and perfecter of faith. For the joy set before him he endured the cross, scorning its shame, and sat down at the right hand of the throne of God.',
      KJV: 'Wherefore seeing we also are compassed about with so great a cloud of witnesses, let us lay aside every weight, and the sin which doth so easily beset us, and let us run with patience the race that is set before us, Looking unto Jesus the author and finisher of our faith; who for the joy that was set before him endured the cross, despising the shame, and is set down at the right hand of the throne of God.',
      NASB: 'Therefore, since we have so great a cloud of witnesses surrounding us, let us also lay aside every encumbrance and the sin which so easily entangles us, and let us run with endurance the race that is set before us, fixing our eyes on Jesus, the author and perfecter of faith, who for the joy set before Him endured the cross, despising the shame, and has sat down at the right hand of the throne of God.',
    },
    context: {
      before: {
        reference: 'Hebrews 11:40',
        text: 'Since God had provided something better for us, that apart from us they should not be made perfect.',
      },
      after: {
        reference: 'Hebrews 12:3',
        text: 'Consider him who endured from sinners such hostility against himself, so that you may not grow weary or fainthearted.',
      },
    },
  },
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
    id: 'james-1-2-3',
    reference: 'James 1:2-3',
    book: 'James',
    chapter: 1,
    verse: 2,
    difficulty: 'medium',
    translations: {
      ESV: 'Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness.',
      NIV: 'Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance.',
      KJV: 'My brethren, count it all joy when ye fall into divers temptations; Knowing this, that the trying of your faith worketh patience.',
      NASB: 'Consider it all joy, my brethren, when you encounter various trials, knowing that the testing of your faith produces endurance.',
    },
    context: {
      before: {
        reference: 'James 1:1',
        text: 'James, a servant of God and of the Lord Jesus Christ, to the twelve tribes in the Dispersion: Greetings.',
      },
      after: {
        reference: 'James 1:4',
        text: 'And let steadfastness have its full effect, that you may be perfect and complete, lacking in nothing.',
      },
    },
  },
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
    id: '1-peter-2-9',
    reference: '1 Peter 2:9',
    book: '1 Peter',
    chapter: 2,
    verse: 9,
    difficulty: 'hard',
    translations: {
      ESV: 'But you are a chosen race, a royal priesthood, a holy nation, a people for his own possession, that you may proclaim the excellencies of him who called you out of darkness into his marvelous light.',
      NIV: 'But you are a chosen people, a royal priesthood, a holy nation, God\'s special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.',
      KJV: 'But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people; that ye should shew forth the praises of him who hath called you out of darkness into his marvellous light.',
      NASB: 'But you are a chosen race, a royal priesthood, a holy nation, a people for God\'s own possession, so that you may proclaim the excellencies of Him who has called you out of darkness into His marvelous light.',
    },
    context: {
      before: {
        reference: '1 Peter 2:8',
        text: '"A stone of stumbling, and a rock of offense." They stumble because they disobey the word, as they were destined to do.',
      },
      after: {
        reference: '1 Peter 2:10',
        text: 'Once you were not a people, but now you are God\'s people; once you had not received mercy, but now you have received mercy.',
      },
    },
  },
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

  // ============ 2 JOHN ============
  {
    id: '2-john-1-6',
    reference: '2 John 6',
    book: '2 John',
    chapter: 1,
    verse: 6,
    difficulty: 'medium',
    translations: {
      ESV: 'And this is love, that we walk according to his commandments; this is the commandment, just as you have heard from the beginning, so that you should walk in it.',
      NIV: 'And this is love: that we walk in obedience to his commands. As you have heard from the beginning, his command is that you walk in love.',
      KJV: 'And this is love, that we walk after his commandments. This is the commandment, That, as ye have heard from the beginning, ye should walk in it.',
      NASB: 'And this is love, that we walk according to His commandments. This is the commandment, just as you have heard from the beginning, that you should walk in it.',
    },
    context: {
      before: {
        reference: '2 John 5',
        text: 'And now I ask you, dear lady—not as though I were writing you a new commandment, but the one we have had from the beginning—that we love one another.',
      },
      after: {
        reference: '2 John 7',
        text: 'For many deceivers have gone out into the world, those who do not confess the coming of Jesus Christ in the flesh. Such a one is the deceiver and the antichrist.',
      },
    },
  },
  {
    id: '2-john-1-9',
    reference: '2 John 9',
    book: '2 John',
    chapter: 1,
    verse: 9,
    difficulty: 'medium',
    translations: {
      ESV: 'Everyone who goes on ahead and does not abide in the teaching of Christ, does not have God. Whoever abides in the teaching has both the Father and the Son.',
      NIV: 'Anyone who runs ahead and does not continue in the teaching of Christ does not have God; whoever continues in the teaching has both the Father and the Son.',
      KJV: 'Whosoever transgresseth, and abideth not in the doctrine of Christ, hath not God. He that abideth in the doctrine of Christ, he hath both the Father and the Son.',
      NASB: 'Anyone who goes too far and does not abide in the teaching of Christ, does not have God; the one who abides in the teaching, he has both the Father and the Son.',
    },
    context: {
      before: {
        reference: '2 John 8',
        text: 'Watch yourselves, so that you may not lose what we have worked for, but may win a full reward.',
      },
      after: {
        reference: '2 John 10',
        text: 'If anyone comes to you and does not bring this teaching, do not receive him into your house or give him any greeting.',
      },
    },
  },

  // ============ 3 JOHN ============
  {
    id: '3-john-1-4',
    reference: '3 John 4',
    book: '3 John',
    chapter: 1,
    verse: 4,
    difficulty: 'easy',
    translations: {
      ESV: 'I have no greater joy than to hear that my children are walking in the truth.',
      NIV: 'I have no greater joy than to hear that my children are walking in the truth.',
      KJV: 'I have no greater joy than to hear that my children walk in truth.',
      NASB: 'I have no greater joy than this, to hear of my children walking in the truth.',
    },
    context: {
      before: {
        reference: '3 John 3',
        text: 'For I rejoiced greatly when the brothers came and testified to your truth, as indeed you are walking in the truth.',
      },
      after: {
        reference: '3 John 5',
        text: 'Beloved, it is a faithful thing you do in all your efforts for these brothers, strangers as they are.',
      },
    },
  },
  {
    id: '3-john-1-11',
    reference: '3 John 11',
    book: '3 John',
    chapter: 1,
    verse: 11,
    difficulty: 'easy',
    translations: {
      ESV: 'Beloved, do not imitate evil but imitate good. Whoever does good is from God; whoever does evil has not seen God.',
      NIV: 'Dear friend, do not imitate what is evil but what is good. Anyone who does what is good is from God. Anyone who does what is evil has not seen God.',
      KJV: 'Beloved, follow not that which is evil, but that which is good. He that doeth good is of God: but he that doeth evil hath not seen God.',
      NASB: 'Beloved, do not imitate what is evil, but what is good. The one who does good is of God; the one who does evil has not seen God.',
    },
    context: {
      before: {
        reference: '3 John 10',
        text: 'So if I come, I will bring up what he is doing, talking wicked nonsense against us. And not content with that, he refuses to welcome the brothers.',
      },
      after: {
        reference: '3 John 12',
        text: 'Demetrius has received a good testimony from everyone, and from the truth itself. We also add our testimony, and you know that our testimony is true.',
      },
    },
  },

  // ============ 2 PETER ============
  {
    id: '2-peter-1-3',
    reference: '2 Peter 1:3',
    book: '2 Peter',
    chapter: 1,
    verse: 3,
    difficulty: 'medium',
    translations: {
      ESV: 'His divine power has granted to us all things that pertain to life and godliness, through the knowledge of him who called us to his own glory and excellence.',
      NIV: 'His divine power has given us everything we need for a godly life through our knowledge of him who called us by his own glory and goodness.',
      KJV: 'According as his divine power hath given unto us all things that pertain unto life and godliness, through the knowledge of him that hath called us to glory and virtue.',
      NASB: 'Seeing that His divine power has granted to us everything pertaining to life and godliness, through the true knowledge of Him who called us by His own glory and excellence.',
    },
    context: {
      before: {
        reference: '2 Peter 1:2',
        text: 'May grace and peace be multiplied to you in the knowledge of God and of Jesus our Lord.',
      },
      after: {
        reference: '2 Peter 1:4',
        text: 'By which he has granted to us his precious and very great promises, so that through them you may become partakers of the divine nature.',
      },
    },
  },
  {
    id: '2-peter-3-9',
    reference: '2 Peter 3:9',
    book: '2 Peter',
    chapter: 3,
    verse: 9,
    difficulty: 'medium',
    translations: {
      ESV: 'The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish, but that all should reach repentance.',
      NIV: 'The Lord is not slow in keeping his promise, as some understand slowness. Instead he is patient with you, not wanting anyone to perish, but everyone to come to repentance.',
      KJV: 'The Lord is not slack concerning his promise, as some men count slackness; but is longsuffering to us-ward, not willing that any should perish, but that all should come to repentance.',
      NASB: 'The Lord is not slow about His promise, as some count slowness, but is patient toward you, not wishing for any to perish but for all to come to repentance.',
    },
    context: {
      before: {
        reference: '2 Peter 3:8',
        text: 'But do not overlook this one fact, beloved, that with the Lord one day is as a thousand years, and a thousand years as one day.',
      },
      after: {
        reference: '2 Peter 3:10',
        text: 'But the day of the Lord will come like a thief, and then the heavens will pass away with a roar.',
      },
    },
  },

  // ============ JUDE ============
  {
    id: 'jude-24',
    reference: 'Jude 24',
    book: 'Jude',
    chapter: 1,
    verse: 24,
    difficulty: 'medium',
    translations: {
      ESV: 'Now to him who is able to keep you from stumbling and to present you blameless before the presence of his glory with great joy.',
      NIV: 'To him who is able to keep you from stumbling and to present you before his glorious presence without fault and with great joy.',
      KJV: 'Now unto him that is able to keep you from falling, and to present you faultless before the presence of his glory with exceeding joy.',
      NASB: 'Now to Him who is able to keep you from stumbling, and to make you stand in the presence of His glory blameless with great joy.',
    },
    context: {
      before: {
        reference: 'Jude 23',
        text: 'Save others by snatching them out of the fire; to others show mercy with fear, hating even the garment stained by the flesh.',
      },
      after: {
        reference: 'Jude 25',
        text: 'To the only God, our Savior, through Jesus Christ our Lord, be glory, majesty, dominion, and authority, before all time and now and forever. Amen.',
      },
    },
  },
  {
    id: 'jude-3',
    reference: 'Jude 3',
    book: 'Jude',
    chapter: 1,
    verse: 3,
    difficulty: 'hard',
    translations: {
      ESV: 'Beloved, although I was very eager to write to you about our common salvation, I found it necessary to write appealing to you to contend for the faith that was once for all delivered to the saints.',
      NIV: 'Dear friends, although I was very eager to write to you about the salvation we share, I felt compelled to write and urge you to contend for the faith that was once for all entrusted to God\'s holy people.',
      KJV: 'Beloved, when I gave all diligence to write unto you of the common salvation, it was needful for me to write unto you, and exhort you that ye should earnestly contend for the faith which was once delivered unto the saints.',
      NASB: 'Beloved, while I was making every effort to write you about our common salvation, I felt the necessity to write to you appealing that you contend earnestly for the faith which was once for all handed down to the saints.',
    },
    context: {
      before: {
        reference: 'Jude 2',
        text: 'May mercy, peace, and love be multiplied to you.',
      },
      after: {
        reference: 'Jude 4',
        text: 'For certain people have crept in unnoticed who long ago were designated for this condemnation.',
      },
    },
  },

  // ============ REVELATION ============
  {
    id: 'revelation-1-8',
    reference: 'Revelation 1:8',
    book: 'Revelation',
    chapter: 1,
    verse: 8,
    difficulty: 'medium',
    translations: {
      ESV: '"I am the Alpha and the Omega," says the Lord God, "who is and who was and who is to come, the Almighty."',
      NIV: '"I am the Alpha and the Omega," says the Lord God, "who is, and who was, and who is to come, the Almighty."',
      KJV: 'I am Alpha and Omega, the beginning and the ending, saith the Lord, which is, and which was, and which is to come, the Almighty.',
      NASB: '"I am the Alpha and the Omega," says the Lord God, "who is and who was and who is to come, the Almighty."',
    },
    context: {
      before: {
        reference: 'Revelation 1:7',
        text: 'Behold, he is coming with the clouds, and every eye will see him, even those who pierced him, and all tribes of the earth will wail on account of him.',
      },
      after: {
        reference: 'Revelation 1:9',
        text: 'I, John, your brother and partner in the tribulation and the kingdom and the patient endurance that are in Jesus.',
      },
    },
  },
  {
    id: 'revelation-3-20',
    reference: 'Revelation 3:20',
    book: 'Revelation',
    chapter: 3,
    verse: 20,
    difficulty: 'medium',
    translations: {
      ESV: 'Behold, I stand at the door and knock. If anyone hears my voice and opens the door, I will come in to him and eat with him, and he with me.',
      NIV: 'Here I am! I stand at the door and knock. If anyone hears my voice and opens the door, I will come in and eat with that person, and they with me.',
      KJV: 'Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will come in to him, and will sup with him, and he with me.',
      NASB: 'Behold, I stand at the door and knock; if anyone hears My voice and opens the door, I will come in to him and will dine with him, and he with Me.',
    },
    context: {
      before: {
        reference: 'Revelation 3:19',
        text: 'Those whom I love, I reprove and discipline, so be zealous and repent.',
      },
      after: {
        reference: 'Revelation 3:21',
        text: 'The one who conquers, I will grant him to sit with me on my throne, as I also conquered and sat down with my Father on his throne.',
      },
    },
  },
  {
    id: 'revelation-21-4',
    reference: 'Revelation 21:4',
    book: 'Revelation',
    chapter: 21,
    verse: 4,
    difficulty: 'medium',
    translations: {
      ESV: 'He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.',
      NIV: 'He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.',
      KJV: 'And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away.',
      NASB: 'and He will wipe away every tear from their eyes; and there will no longer be any death; there will no longer be any mourning, or crying, or pain; the first things have passed away.',
    },
    context: {
      before: {
        reference: 'Revelation 21:3',
        text: 'And I heard a loud voice from the throne saying, "Behold, the dwelling place of God is with man. He will dwell with them, and they will be his people."',
      },
      after: {
        reference: 'Revelation 21:5',
        text: 'And he who was seated on the throne said, "Behold, I am making all things new."',
      },
    },
  },
  {
    id: 'revelation-22-20',
    reference: 'Revelation 22:20',
    book: 'Revelation',
    chapter: 22,
    verse: 20,
    difficulty: 'easy',
    translations: {
      ESV: 'He who testifies to these things says, "Surely I am coming soon." Amen. Come, Lord Jesus!',
      NIV: 'He who testifies to these things says, "Yes, I am coming soon." Amen. Come, Lord Jesus.',
      KJV: 'He which testifieth these things saith, Surely I come quickly. Amen. Even so, come, Lord Jesus.',
      NASB: 'He who testifies to these things says, "Yes, I am coming quickly." Amen. Come, Lord Jesus.',
    },
    context: {
      before: {
        reference: 'Revelation 22:19',
        text: 'And if anyone takes away from the words of the book of this prophecy, God will take away his share in the tree of life.',
      },
      after: {
        reference: 'Revelation 22:21',
        text: 'The grace of the Lord Jesus be with all. Amen.',
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
