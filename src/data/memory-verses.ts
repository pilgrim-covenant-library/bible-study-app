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
  {
    id: 'genesis-12-2',
    reference: 'Genesis 12:2',
    book: 'Genesis',
    chapter: 12,
    verse: 2,
    difficulty: 'medium',
    translations: {
      ESV: 'And I will make of you a great nation, and I will bless you and make your name great, so that you will be a blessing.',
      NIV: 'I will make you into a great nation, and I will bless you; I will make your name great, and you will be a blessing.',
      KJV: 'And I will make of thee a great nation, and I will bless thee, and make thy name great; and thou shalt be a blessing.',
      NASB: 'And I will make you a great nation, and I will bless you, and make your name great; and so you shall be a blessing.',
    },
    context: {
      before: {
        reference: 'Genesis 12:1',
        text: 'Now the LORD said to Abram, "Go from your country and your kindred and your father\'s house to the land that I will show you."',
      },
      after: {
        reference: 'Genesis 12:3',
        text: 'I will bless those who bless you, and him who dishonors you I will curse, and in you all the families of the earth shall be blessed.',
      },
    },
  },
  {
    id: 'genesis-15-6',
    reference: 'Genesis 15:6',
    book: 'Genesis',
    chapter: 15,
    verse: 6,
    difficulty: 'easy',
    translations: {
      ESV: 'And he believed the LORD, and he counted it to him as righteousness.',
      NIV: 'Abram believed the LORD, and he credited it to him as righteousness.',
      KJV: 'And he believed in the LORD; and he counted it to him for righteousness.',
      NASB: 'Then he believed in the LORD; and He credited it to him as righteousness.',
    },
    context: {
      before: {
        reference: 'Genesis 15:5',
        text: 'And he brought him outside and said, "Look toward heaven, and number the stars, if you are able to number them." Then he said to him, "So shall your offspring be."',
      },
      after: {
        reference: 'Genesis 15:7',
        text: 'And he said to him, "I am the LORD who brought you out from Ur of the Chaldeans to give you this land to possess."',
      },
    },
  },
  {
    id: 'genesis-28-15',
    reference: 'Genesis 28:15',
    book: 'Genesis',
    chapter: 28,
    verse: 15,
    difficulty: 'medium',
    translations: {
      ESV: 'Behold, I am with you and will keep you wherever you go, and will bring you back to this land. For I will not leave you until I have done what I have promised you.',
      NIV: 'I am with you and will watch over you wherever you go, and I will bring you back to this land. I will not leave you until I have done what I have promised you.',
      KJV: 'And, behold, I am with thee, and will keep thee in all places whither thou goest, and will bring thee again into this land; for I will not leave thee, until I have done that which I have spoken to thee of.',
      NASB: 'Behold, I am with you and will keep you wherever you go, and will bring you back to this land; for I will not leave you until I have done what I have promised you.',
    },
    context: {
      before: {
        reference: 'Genesis 28:14',
        text: 'Your offspring shall be like the dust of the earth, and you shall spread abroad to the west and to the east and to the north and to the south, and in you and your offspring shall all the families of the earth be blessed.',
      },
      after: {
        reference: 'Genesis 28:16',
        text: 'Then Jacob awoke from his sleep and said, "Surely the LORD is in this place, and I did not know it."',
      },
    },
  },
  {
    id: 'genesis-50-20',
    reference: 'Genesis 50:20',
    book: 'Genesis',
    chapter: 50,
    verse: 20,
    difficulty: 'medium',
    translations: {
      ESV: 'As for you, you meant evil against me, but God meant it for good, to bring it about that many people should be kept alive, as they are today.',
      NIV: 'You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives.',
      KJV: 'But as for you, ye thought evil against me; but God meant it unto good, to bring to pass, as it is this day, to save much people alive.',
      NASB: 'As for you, you meant evil against me, but God meant it for good in order to bring about this present result, to preserve many people alive.',
    },
    context: {
      before: {
        reference: 'Genesis 50:19',
        text: 'But Joseph said to them, "Do not fear, for am I in the place of God?"',
      },
      after: {
        reference: 'Genesis 50:21',
        text: 'So do not fear; I will provide for you and your little ones." Thus he comforted them and spoke kindly to them.',
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
  {
    id: 'exodus-34-6-7',
    reference: 'Exodus 34:6-7',
    book: 'Exodus',
    chapter: 34,
    verse: 6,
    difficulty: 'hard',
    translations: {
      ESV: 'The LORD passed before him and proclaimed, "The LORD, the LORD, a God merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness, keeping steadfast love for thousands, forgiving iniquity and transgression and sin, but who will by no means clear the guilty."',
      NIV: 'And he passed in front of Moses, proclaiming, "The LORD, the LORD, the compassionate and gracious God, slow to anger, abounding in love and faithfulness, maintaining love to thousands, and forgiving wickedness, rebellion and sin. Yet he does not leave the guilty unpunished."',
      KJV: 'And the LORD passed by before him, and proclaimed, The LORD, The LORD God, merciful and gracious, longsuffering, and abundant in goodness and truth, Keeping mercy for thousands, forgiving iniquity and transgression and sin, and that will by no means clear the guilty.',
      NASB: 'Then the LORD passed by in front of him and proclaimed, "The LORD, the LORD God, compassionate and gracious, slow to anger, and abounding in lovingkindness and truth; who keeps lovingkindness for thousands, who forgives iniquity, transgression and sin; yet He will by no means leave the guilty unpunished."',
    },
    context: {
      before: {
        reference: 'Exodus 34:5',
        text: 'The LORD descended in the cloud and stood with him there, and proclaimed the name of the LORD.',
      },
      after: {
        reference: 'Exodus 34:8',
        text: 'And Moses quickly bowed his head toward the earth and worshiped.',
      },
    },
  },
  {
    id: 'exodus-15-2',
    reference: 'Exodus 15:2',
    book: 'Exodus',
    chapter: 15,
    verse: 2,
    difficulty: 'medium',
    translations: {
      ESV: 'The LORD is my strength and my song, and he has become my salvation; this is my God, and I will praise him, my father\'s God, and I will exalt him.',
      NIV: 'The LORD is my strength and my defense; he has become my salvation. He is my God, and I will praise him, my father\'s God, and I will exalt him.',
      KJV: 'The LORD is my strength and song, and he is become my salvation: he is my God, and I will prepare him an habitation; my father\'s God, and I will exalt him.',
      NASB: 'The LORD is my strength and song, and He has become my salvation; This is my God, and I will praise Him; My father\'s God, and I will extol Him.',
    },
    context: {
      before: {
        reference: 'Exodus 15:1',
        text: 'Then Moses and the people of Israel sang this song to the LORD, saying, "I will sing to the LORD, for he has triumphed gloriously; the horse and his rider he has thrown into the sea."',
      },
      after: {
        reference: 'Exodus 15:3',
        text: 'The LORD is a man of war; the LORD is his name.',
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
  {
    id: 'leviticus-20-26',
    reference: 'Leviticus 20:26',
    book: 'Leviticus',
    chapter: 20,
    verse: 26,
    difficulty: 'medium',
    translations: {
      ESV: 'You shall be holy to me, for I the LORD am holy and have separated you from the peoples, that you should be mine.',
      NIV: 'You are to be holy to me because I, the LORD, am holy, and I have set you apart from the nations to be my own.',
      KJV: 'And ye shall be holy unto me: for I the LORD am holy, and have severed you from other people, that ye should be mine.',
      NASB: 'Thus you are to be holy to Me, for I the LORD am holy; and I have set you apart from the peoples to be Mine.',
    },
    context: {
      before: {
        reference: 'Leviticus 20:25',
        text: 'You shall therefore separate the clean beast from the unclean, and the unclean bird from the clean.',
      },
      after: {
        reference: 'Leviticus 20:27',
        text: 'A man or a woman who is a medium or a necromancer shall surely be put to death.',
      },
    },
  },
  {
    id: 'leviticus-17-11',
    reference: 'Leviticus 17:11',
    book: 'Leviticus',
    chapter: 17,
    verse: 11,
    difficulty: 'medium',
    translations: {
      ESV: 'For the life of the flesh is in the blood, and I have given it for you on the altar to make atonement for your souls, for it is the blood that makes atonement by the life.',
      NIV: 'For the life of a creature is in the blood, and I have given it to you to make atonement for yourselves on the altar; it is the blood that makes atonement for one\'s life.',
      KJV: 'For the life of the flesh is in the blood: and I have given it to you upon the altar to make an atonement for your souls: for it is the blood that maketh an atonement for the soul.',
      NASB: 'For the life of the flesh is in the blood, and I have given it to you on the altar to make atonement for your souls; for it is the blood by reason of the life that makes atonement.',
    },
    context: {
      before: {
        reference: 'Leviticus 17:10',
        text: 'If any one of the house of Israel or of the strangers who sojourn among them eats any blood, I will set my face against that person.',
      },
      after: {
        reference: 'Leviticus 17:12',
        text: 'Therefore I have said to the people of Israel, No person among you shall eat blood.',
      },
    },
  },
  {
    id: 'leviticus-16-30',
    reference: 'Leviticus 16:30',
    book: 'Leviticus',
    chapter: 16,
    verse: 30,
    difficulty: 'medium',
    translations: {
      ESV: 'For on this day shall atonement be made for you to cleanse you. You shall be clean before the LORD from all your sins.',
      NIV: 'because on this day atonement will be made for you, to cleanse you. Then, before the LORD, you will be clean from all your sins.',
      KJV: 'For on that day shall the priest make an atonement for you, to cleanse you, that ye may be clean from all your sins before the LORD.',
      NASB: 'for it is on this day that atonement shall be made for you to cleanse you; you will be clean from all your sins before the LORD.',
    },
    context: {
      before: {
        reference: 'Leviticus 16:29',
        text: 'And it shall be a statute to you forever that in the seventh month, on the tenth day of the month, you shall afflict yourselves.',
      },
      after: {
        reference: 'Leviticus 16:31',
        text: 'It is a Sabbath of solemn rest to you, and you shall afflict yourselves; it is a statute forever.',
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
  {
    id: 'numbers-23-19',
    reference: 'Numbers 23:19',
    book: 'Numbers',
    chapter: 23,
    verse: 19,
    difficulty: 'medium',
    translations: {
      ESV: 'God is not man, that he should lie, or a son of man, that he should change his mind. Has he said, and will he not do it? Or has he spoken, and will he not fulfill it?',
      NIV: 'God is not human, that he should lie, not a human being, that he should change his mind. Does he speak and then not act? Does he promise and not fulfill?',
      KJV: 'God is not a man, that he should lie; neither the son of man, that he should repent: hath he said, and shall he not do it? or hath he spoken, and shall he not make it good?',
      NASB: 'God is not a man, that He should lie, nor a son of man, that He should repent; has He said, and will He not do it? Or has He spoken, and will He not make it good?',
    },
    context: {
      before: {
        reference: 'Numbers 23:18',
        text: 'And Balaam took up his discourse and said, "Rise, Balak, and hear; give ear to me, O son of Zippor."',
      },
      after: {
        reference: 'Numbers 23:20',
        text: 'Behold, I received a command to bless: he has blessed, and I cannot revoke it.',
      },
    },
  },
  {
    id: 'numbers-14-18',
    reference: 'Numbers 14:18',
    book: 'Numbers',
    chapter: 14,
    verse: 18,
    difficulty: 'hard',
    translations: {
      ESV: 'The LORD is slow to anger and abounding in steadfast love, forgiving iniquity and transgression, but he will by no means clear the guilty, visiting the iniquity of the fathers on the children, to the third and the fourth generation.',
      NIV: 'The LORD is slow to anger, abounding in love and forgiving sin and rebellion. Yet he does not leave the guilty unpunished; he punishes the children for the sin of the parents to the third and fourth generation.',
      KJV: 'The LORD is longsuffering, and of great mercy, forgiving iniquity and transgression, and by no means clearing the guilty, visiting the iniquity of the fathers upon the children unto the third and fourth generation.',
      NASB: 'The LORD is slow to anger and abundant in lovingkindness, forgiving iniquity and transgression; but He will by no means clear the guilty, visiting the iniquity of the fathers on the children to the third and the fourth generations.',
    },
    context: {
      before: {
        reference: 'Numbers 14:17',
        text: 'And now, please let the power of the Lord be great as you have promised, saying,',
      },
      after: {
        reference: 'Numbers 14:19',
        text: 'Please pardon the iniquity of this people, according to the greatness of your steadfast love, just as you have forgiven this people, from Egypt until now.',
      },
    },
  },
  {
    id: 'numbers-21-9',
    reference: 'Numbers 21:9',
    book: 'Numbers',
    chapter: 21,
    verse: 9,
    difficulty: 'medium',
    translations: {
      ESV: 'So Moses made a bronze serpent and set it on a pole. And if a serpent bit anyone, he would look at the bronze serpent and live.',
      NIV: 'So Moses made a bronze snake and put it up on a pole. Then when anyone was bitten by a snake and looked at the bronze snake, they lived.',
      KJV: 'And Moses made a serpent of brass, and put it upon a pole, and it came to pass, that if a serpent had bitten any man, when he beheld the serpent of brass, he lived.',
      NASB: 'And Moses made a bronze serpent and set it on the standard; and it came about, that if a serpent bit any man, when he looked to the bronze serpent, he lived.',
    },
    context: {
      before: {
        reference: 'Numbers 21:8',
        text: 'And the LORD said to Moses, "Make a fiery serpent and set it on a pole, and everyone who is bitten, when he sees it, shall live."',
      },
      after: {
        reference: 'Numbers 21:10',
        text: 'And the people of Israel set out and camped in Oboth.',
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
  {
    id: 'deuteronomy-29-29',
    reference: 'Deuteronomy 29:29',
    book: 'Deuteronomy',
    chapter: 29,
    verse: 29,
    difficulty: 'medium',
    translations: {
      ESV: 'The secret things belong to the LORD our God, but the things that are revealed belong to us and to our children forever, that we may do all the words of this law.',
      NIV: 'The secret things belong to the LORD our God, but the things revealed belong to us and to our children forever, that we may follow all the words of this law.',
      KJV: 'The secret things belong unto the LORD our God: but those things which are revealed belong unto us and to our children for ever, that we may do all the words of this law.',
      NASB: 'The secret things belong to the LORD our God, but the things revealed belong to us and to our sons forever, that we may observe all the words of this law.',
    },
    context: {
      before: {
        reference: 'Deuteronomy 29:28',
        text: 'The LORD uprooted them from their land in anger and fury and great wrath, and cast them into another land, as they are this day.',
      },
      after: {
        reference: 'Deuteronomy 30:1',
        text: 'And when all these things come upon you, the blessing and the curse, which I have set before you, and you call them to mind among all the nations.',
      },
    },
  },
  {
    id: 'deuteronomy-30-19',
    reference: 'Deuteronomy 30:19',
    book: 'Deuteronomy',
    chapter: 30,
    verse: 19,
    difficulty: 'medium',
    translations: {
      ESV: 'I call heaven and earth to witness against you today, that I have set before you life and death, blessing and curse. Therefore choose life, that you and your offspring may live,',
      NIV: 'This day I call the heavens and the earth as witnesses against you that I have set before you life and death, blessings and curses. Now choose life, so that you and your children may live',
      KJV: 'I call heaven and earth to record this day against you, that I have set before you life and death, blessing and cursing: therefore choose life, that both thou and thy seed may live:',
      NASB: 'I call heaven and earth to witness against you today, that I have set before you life and death, the blessing and the curse. So choose life in order that you may live, you and your descendants,',
    },
    context: {
      before: {
        reference: 'Deuteronomy 30:18',
        text: 'I declare to you today, that you shall surely perish. You shall not live long in the land that you are going over the Jordan to enter and possess.',
      },
      after: {
        reference: 'Deuteronomy 30:20',
        text: 'loving the LORD your God, obeying his voice and holding fast to him, for he is your life and length of days.',
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
  {
    id: 'joshua-1-8',
    reference: 'Joshua 1:8',
    book: 'Joshua',
    chapter: 1,
    verse: 8,
    difficulty: 'medium',
    translations: {
      ESV: 'This Book of the Law shall not depart from your mouth, but you shall meditate on it day and night, so that you may be careful to do according to all that is written in it. For then you will make your way prosperous, and then you will have good success.',
      NIV: 'Keep this Book of the Law always on your lips; meditate on it day and night, so that you may be careful to do everything written in it. Then you will be prosperous and successful.',
      KJV: 'This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night, that thou mayest observe to do according to all that is written therein: for then thou shalt make thy way prosperous, and then thou shalt have good success.',
      NASB: 'This book of the law shall not depart from your mouth, but you shall meditate on it day and night, so that you may be careful to do according to all that is written in it; for then you will make your way prosperous, and then you will have success.',
    },
    context: {
      before: {
        reference: 'Joshua 1:7',
        text: 'Only be strong and very courageous, being careful to do according to all the law that Moses my servant commanded you.',
      },
      after: {
        reference: 'Joshua 1:9',
        text: 'Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God is with you wherever you go.',
      },
    },
  },
  {
    id: 'joshua-21-45',
    reference: 'Joshua 21:45',
    book: 'Joshua',
    chapter: 21,
    verse: 45,
    difficulty: 'easy',
    translations: {
      ESV: 'Not one word of all the good promises that the LORD had made to the house of Israel had failed; all came to pass.',
      NIV: 'Not one of all the LORD\'s good promises to Israel failed; every one was fulfilled.',
      KJV: 'There failed not ought of any good thing which the LORD had spoken unto the house of Israel; all came to pass.',
      NASB: 'Not one of the good promises which the LORD had made to the house of Israel failed; all came to pass.',
    },
    context: {
      before: {
        reference: 'Joshua 21:44',
        text: 'And the LORD gave them rest on every side just as he had sworn to their fathers. Not one of all their enemies had withstood them.',
      },
      after: {
        reference: 'Joshua 22:1',
        text: 'At that time Joshua summoned the Reubenites and the Gadites and the half-tribe of Manasseh.',
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
  {
    id: 'judges-6-12',
    reference: 'Judges 6:12',
    book: 'Judges',
    chapter: 6,
    verse: 12,
    difficulty: 'easy',
    translations: {
      ESV: 'And the angel of the LORD appeared to him and said to him, "The LORD is with you, O mighty man of valor."',
      NIV: 'When the angel of the LORD appeared to Gideon, he said, "The LORD is with you, mighty warrior."',
      KJV: 'And the angel of the LORD appeared unto him, and said unto him, The LORD is with thee, thou mighty man of valour.',
      NASB: 'The angel of the LORD appeared to him and said to him, "The LORD is with you, O valiant warrior."',
    },
    context: {
      before: {
        reference: 'Judges 6:11',
        text: 'Now the angel of the LORD came and sat under the terebinth at Ophrah, which belonged to Joash the Abiezrite, while his son Gideon was beating out wheat in the winepress.',
      },
      after: {
        reference: 'Judges 6:13',
        text: 'And Gideon said to him, "Please, my lord, if the LORD is with us, why then has all this happened to us?"',
      },
    },
  },
  {
    id: 'judges-7-2',
    reference: 'Judges 7:2',
    book: 'Judges',
    chapter: 7,
    verse: 2,
    difficulty: 'medium',
    translations: {
      ESV: 'The LORD said to Gideon, "The people with you are too many for me to give the Midianites into their hand, lest Israel boast over me, saying, \'My own hand has saved me.\'"',
      NIV: 'The LORD said to Gideon, "You have too many men. I cannot deliver Midian into their hands, or Israel would boast against me, \'My own strength has saved me.\'"',
      KJV: 'And the LORD said unto Gideon, The people that are with thee are too many for me to give the Midianites into their hands, lest Israel vaunt themselves against me, saying, Mine own hand hath saved me.',
      NASB: 'The LORD said to Gideon, "The people who are with you are too many for Me to give Midian into their hands, for Israel would become boastful, saying, \'My own power has delivered me.\'"',
    },
    context: {
      before: {
        reference: 'Judges 7:1',
        text: 'Then Jerubbaal (that is, Gideon) and all the people who were with him rose early and encamped beside the spring of Harod.',
      },
      after: {
        reference: 'Judges 7:3',
        text: 'Now therefore proclaim in the ears of the people, saying, "Whoever is fearful and trembling, let him return home."',
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
  {
    id: 'ruth-4-14',
    reference: 'Ruth 4:14',
    book: 'Ruth',
    chapter: 4,
    verse: 14,
    difficulty: 'medium',
    translations: {
      ESV: 'Then the women said to Naomi, "Blessed be the LORD, who has not left you this day without a redeemer, and may his name be renowned in Israel!"',
      NIV: 'The women said to Naomi: "Praise be to the LORD, who this day has not left you without a guardian-redeemer. May he become famous throughout Israel!"',
      KJV: 'And the women said unto Naomi, Blessed be the LORD, which hath not left thee this day without a kinsman, that his name may be famous in Israel.',
      NASB: 'Then the women said to Naomi, "Blessed is the LORD who has not left you without a redeemer today, and may his name become famous in Israel."',
    },
    context: {
      before: {
        reference: 'Ruth 4:13',
        text: 'So Boaz took Ruth, and she became his wife. And he went in to her, and the LORD gave her conception, and she bore a son.',
      },
      after: {
        reference: 'Ruth 4:15',
        text: 'He shall be to you a restorer of life and a nourisher of your old age, for your daughter-in-law who loves you, who is more to you than seven sons, has given birth to him.',
      },
    },
  },
  {
    id: 'ruth-2-12',
    reference: 'Ruth 2:12',
    book: 'Ruth',
    chapter: 2,
    verse: 12,
    difficulty: 'medium',
    translations: {
      ESV: 'The LORD repay you for what you have done, and a full reward be given you by the LORD, the God of Israel, under whose wings you have come to take refuge!',
      NIV: 'May the LORD repay you for what you have done. May you be richly rewarded by the LORD, the God of Israel, under whose wings you have come to take refuge.',
      KJV: 'The LORD recompense thy work, and a full reward be given thee of the LORD God of Israel, under whose wings thou art come to trust.',
      NASB: 'May the LORD reward your work, and your wages be full from the LORD, the God of Israel, under whose wings you have come to seek refuge.',
    },
    context: {
      before: {
        reference: 'Ruth 2:11',
        text: 'But Boaz answered her, "All that you have done for your mother-in-law since the death of your husband has been fully told to me."',
      },
      after: {
        reference: 'Ruth 2:13',
        text: 'Then she said, "I have found favor in your eyes, my lord, for you have comforted me."',
      },
    },
  },
  {
    id: 'ruth-4-17',
    reference: 'Ruth 4:17',
    book: 'Ruth',
    chapter: 4,
    verse: 17,
    difficulty: 'easy',
    translations: {
      ESV: 'And the women of the neighborhood gave him a name, saying, "A son has been born to Naomi." They named him Obed. He was the father of Jesse, the father of David.',
      NIV: 'The women living there said, "Naomi has a son!" And they named him Obed. He was the father of Jesse, the father of David.',
      KJV: 'And the women her neighbours gave it a name, saying, There is a son born to Naomi; and they called his name Obed: he is the father of Jesse, the father of David.',
      NASB: 'The neighbor women gave him a name, saying, "A son has been born to Naomi!" So they named him Obed. He is the father of Jesse, the father of David.',
    },
    context: {
      before: {
        reference: 'Ruth 4:16',
        text: 'Then Naomi took the child and laid him on her lap and became his nurse.',
      },
      after: {
        reference: 'Ruth 4:18',
        text: 'Now these are the generations of Perez: Perez fathered Hezron.',
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
  {
    id: '1-samuel-2-2',
    reference: '1 Samuel 2:2',
    book: '1 Samuel',
    chapter: 2,
    verse: 2,
    difficulty: 'easy',
    translations: {
      ESV: 'There is none holy like the LORD: for there is none besides you; there is no rock like our God.',
      NIV: 'There is no one holy like the LORD; there is no one besides you; there is no Rock like our God.',
      KJV: 'There is none holy as the LORD: for there is none beside thee: neither is there any rock like our God.',
      NASB: 'There is no one holy like the LORD, indeed, there is no one besides You, nor is there any rock like our God.',
    },
    context: {
      before: {
        reference: '1 Samuel 2:1',
        text: 'And Hannah prayed and said, "My heart exults in the LORD; my horn is exalted in the LORD."',
      },
      after: {
        reference: '1 Samuel 2:3',
        text: 'Talk no more so very proudly, let not arrogance come from your mouth; for the LORD is a God of knowledge, and by him actions are weighed.',
      },
    },
  },
  {
    id: '1-samuel-15-22',
    reference: '1 Samuel 15:22',
    book: '1 Samuel',
    chapter: 15,
    verse: 22,
    difficulty: 'medium',
    translations: {
      ESV: 'And Samuel said, "Has the LORD as great delight in burnt offerings and sacrifices, as in obeying the voice of the LORD? Behold, to obey is better than sacrifice, and to listen than the fat of rams."',
      NIV: 'But Samuel replied: "Does the LORD delight in burnt offerings and sacrifices as much as in obeying the LORD? To obey is better than sacrifice, and to heed is better than the fat of rams."',
      KJV: 'And Samuel said, Hath the LORD as great delight in burnt offerings and sacrifices, as in obeying the voice of the LORD? Behold, to obey is better than sacrifice, and to hearken than the fat of rams.',
      NASB: 'Samuel said, "Has the LORD as much delight in burnt offerings and sacrifices as in obeying the voice of the LORD? Behold, to obey is better than sacrifice, and to heed than the fat of rams."',
    },
    context: {
      before: {
        reference: '1 Samuel 15:21',
        text: 'But the people took of the spoil, sheep and oxen, the best of the things devoted to destruction, to sacrifice to the LORD your God in Gilgal.',
      },
      after: {
        reference: '1 Samuel 15:23',
        text: 'For rebellion is as the sin of divination, and presumption is as iniquity and idolatry. Because you have rejected the word of the LORD, he has also rejected you from being king.',
      },
    },
  },
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
        text: 'Then Jesse called Abinadab and made him pass before Samuel. And he said, "Neither has the LORD chosen this one."',
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
  {
    id: '2-samuel-7-16',
    reference: '2 Samuel 7:16',
    book: '2 Samuel',
    chapter: 7,
    verse: 16,
    difficulty: 'easy',
    translations: {
      ESV: 'And your house and your kingdom shall be made sure forever before me. Your throne shall be established forever.',
      NIV: 'Your house and your kingdom will endure forever before me; your throne will be established forever.',
      KJV: 'And thine house and thy kingdom shall be established for ever before thee: thy throne shall be established for ever.',
      NASB: 'Your house and your kingdom shall endure before Me forever; your throne shall be established forever.',
    },
    context: {
      before: {
        reference: '2 Samuel 7:15',
        text: 'But my steadfast love will not depart from him, as I took it from Saul, whom I put away from before you.',
      },
      after: {
        reference: '2 Samuel 7:17',
        text: 'In accordance with all these words, and in accordance with all this vision, Nathan spoke to David.',
      },
    },
  },
  {
    id: '2-samuel-12-13',
    reference: '2 Samuel 12:13',
    book: '2 Samuel',
    chapter: 12,
    verse: 13,
    difficulty: 'easy',
    translations: {
      ESV: 'David said to Nathan, "I have sinned against the LORD." And Nathan said to David, "The LORD also has put away your sin; you shall not die."',
      NIV: 'Then David said to Nathan, "I have sinned against the LORD." Nathan replied, "The LORD has taken away your sin. You are not going to die."',
      KJV: 'And David said unto Nathan, I have sinned against the LORD. And Nathan said unto David, The LORD also hath put away thy sin; thou shalt not die.',
      NASB: 'Then David said to Nathan, "I have sinned against the LORD." And Nathan said to David, "The LORD also has taken away your sin; you shall not die."',
    },
    context: {
      before: {
        reference: '2 Samuel 12:12',
        text: 'For you did it secretly, but I will do this thing before all Israel and before the sun.',
      },
      after: {
        reference: '2 Samuel 12:14',
        text: 'Nevertheless, because by this deed you have utterly scorned the LORD, the child who is born to you shall die.',
      },
    },
  },
  {
    id: '2-samuel-24-24',
    reference: '2 Samuel 24:24',
    book: '2 Samuel',
    chapter: 24,
    verse: 24,
    difficulty: 'medium',
    translations: {
      ESV: 'But the king said to Araunah, "No, but I will buy it from you for a price. I will not offer burnt offerings to the LORD my God that cost me nothing." So David bought the threshing floor and the oxen for fifty shekels of silver.',
      NIV: 'But the king replied to Araunah, "No, I insist on paying you for it. I will not sacrifice to the LORD my God burnt offerings that cost me nothing." So David bought the threshing floor and the oxen and paid fifty shekels of silver for them.',
      KJV: 'And the king said unto Araunah, Nay; but I will surely buy it of thee at a price: neither will I offer burnt offerings unto the LORD my God of that which doth cost me nothing. So David bought the threshingfloor and the oxen for fifty shekels of silver.',
      NASB: 'However, the king said to Araunah, "No, but I will surely buy it from you for a price, for I will not offer burnt offerings to the LORD my God which cost me nothing." So David bought the threshing floor and the oxen for fifty shekels of silver.',
    },
    context: {
      before: {
        reference: '2 Samuel 24:23',
        text: 'All this, O king, Araunah gives to the king." And Araunah said to the king, "May the LORD your God accept you."',
      },
      after: {
        reference: '2 Samuel 24:25',
        text: 'And David built there an altar to the LORD and offered burnt offerings and peace offerings. So the LORD responded to the plea for the land, and the plague was averted from Israel.',
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
  {
    id: '1-kings-18-39',
    reference: '1 Kings 18:39',
    book: '1 Kings',
    chapter: 18,
    verse: 39,
    difficulty: 'easy',
    translations: {
      ESV: 'And when all the people saw it, they fell on their faces and said, "The LORD, he is God; the LORD, he is God."',
      NIV: 'When all the people saw this, they fell prostrate and cried, "The LORD—he is God! The LORD—he is God!"',
      KJV: 'And when all the people saw it, they fell on their faces: and they said, The LORD, he is the God; the LORD, he is the God.',
      NASB: 'When all the people saw it, they fell on their faces; and they said, "The LORD, He is God; the LORD, He is God."',
    },
    context: {
      before: {
        reference: '1 Kings 18:38',
        text: 'Then the fire of the LORD fell and consumed the burnt offering and the wood and the stones and the dust, and licked up the water that was in the trench.',
      },
      after: {
        reference: '1 Kings 18:40',
        text: 'And Elijah said to them, "Seize the prophets of Baal; let not one of them escape."',
      },
    },
  },
  {
    id: '1-kings-3-9',
    reference: '1 Kings 3:9',
    book: '1 Kings',
    chapter: 3,
    verse: 9,
    difficulty: 'medium',
    translations: {
      ESV: 'Give your servant therefore an understanding mind to govern your people, that I may discern between good and evil, for who is able to govern this your great people?',
      NIV: 'So give your servant a discerning heart to govern your people and to distinguish between right and wrong. For who is able to govern this great people of yours?',
      KJV: 'Give therefore thy servant an understanding heart to judge thy people, that I may discern between good and bad: for who is able to judge this thy so great a people?',
      NASB: 'So give Your servant an understanding heart to judge Your people to discern between good and evil. For who is able to judge this great people of Yours?',
    },
    context: {
      before: {
        reference: '1 Kings 3:8',
        text: 'And your servant is in the midst of your people whom you have chosen, a great people, too many to be numbered or counted for multitude.',
      },
      after: {
        reference: '1 Kings 3:10',
        text: 'It pleased the Lord that Solomon had asked this.',
      },
    },
  },
  {
    id: '1-kings-8-27',
    reference: '1 Kings 8:27',
    book: '1 Kings',
    chapter: 8,
    verse: 27,
    difficulty: 'medium',
    translations: {
      ESV: 'But will God indeed dwell on the earth? Behold, heaven and the highest heaven cannot contain you; how much less this house that I have built!',
      NIV: 'But will God really dwell on earth? The heavens, even the highest heaven, cannot contain you. How much less this temple I have built!',
      KJV: 'But will God indeed dwell on the earth? behold, the heaven and heaven of heavens cannot contain thee; how much less this house that I have builded?',
      NASB: 'But will God indeed dwell on the earth? Behold, heaven and the highest heaven cannot contain You, how much less this house which I have built!',
    },
    context: {
      before: {
        reference: '1 Kings 8:26',
        text: 'Now therefore, O God of Israel, let your word be confirmed, which you have spoken to your servant David my father.',
      },
      after: {
        reference: '1 Kings 8:28',
        text: 'Yet have regard to the prayer of your servant and to his plea, O LORD my God, listening to the cry and to the prayer that your servant prays before you this day.',
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
  {
    id: '2-kings-6-16',
    reference: '2 Kings 6:16',
    book: '2 Kings',
    chapter: 6,
    verse: 16,
    difficulty: 'easy',
    translations: {
      ESV: 'He said, "Do not be afraid, for those who are with us are more than those who are with them."',
      NIV: '"Don\'t be afraid," the prophet answered. "Those who are with us are more than those who are with them."',
      KJV: 'And he answered, Fear not: for they that be with us are more than they that be with them.',
      NASB: 'So he answered, "Do not fear, for those who are with us are more than those who are with them."',
    },
    context: {
      before: {
        reference: '2 Kings 6:15',
        text: 'When the servant of the man of God rose early in the morning and went out, behold, an army with horses and chariots was all around the city. And the servant said, "Alas, my master! What shall we do?"',
      },
      after: {
        reference: '2 Kings 6:17',
        text: 'Then Elisha prayed and said, "O LORD, please open his eyes that he may see." So the LORD opened the eyes of the young man, and he saw, and behold, the mountain was full of horses and chariots of fire all around Elisha.',
      },
    },
  },
  {
    id: '2-kings-17-13',
    reference: '2 Kings 17:13',
    book: '2 Kings',
    chapter: 17,
    verse: 13,
    difficulty: 'hard',
    translations: {
      ESV: 'Yet the LORD warned Israel and Judah by every prophet and every seer, saying, "Turn from your evil ways and keep my commandments and my statutes, in accordance with all the Law that I commanded your fathers, and that I sent to you by my servants the prophets."',
      NIV: 'The LORD warned Israel and Judah through all his prophets and seers: "Turn from your evil ways. Observe my commands and decrees, in accordance with the entire Law that I commanded your ancestors to obey and that I delivered to you through my servants the prophets."',
      KJV: 'Yet the LORD testified against Israel, and against Judah, by all the prophets, and by all the seers, saying, Turn ye from your evil ways, and keep my commandments and my statutes, according to all the law which I commanded your fathers, and which I sent to you by my servants the prophets.',
      NASB: 'Yet the LORD warned Israel and Judah through all His prophets and every seer, saying, "Turn from your evil ways and keep My commandments, My statutes according to all the law which I commanded your fathers, and which I sent to you through My servants the prophets."',
    },
    context: {
      before: {
        reference: '2 Kings 17:12',
        text: 'And they served idols, of which the LORD had said to them, "You shall not do this."',
      },
      after: {
        reference: '2 Kings 17:14',
        text: 'But they would not listen, but were stubborn, as their fathers had been, who did not believe in the LORD their God.',
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
  {
    id: '1-chronicles-17-14',
    reference: '1 Chronicles 17:14',
    book: '1 Chronicles',
    chapter: 17,
    verse: 14,
    difficulty: 'medium',
    translations: {
      ESV: 'But I will confirm him in my house and in my kingdom forever, and his throne shall be established forever.',
      NIV: 'I will set him over my house and my kingdom forever; his throne will be established forever.',
      KJV: 'But I will settle him in mine house and in my kingdom for ever: and his throne shall be established for evermore.',
      NASB: 'But I will settle him in My house and in My kingdom forever, and his throne shall be established forever.',
    },
    context: {
      before: {
        reference: '1 Chronicles 17:13',
        text: 'I will be to him a father, and he shall be to me a son. I will not take my steadfast love from him.',
      },
      after: {
        reference: '1 Chronicles 17:15',
        text: 'In accordance with all these words, and in accordance with all this vision, Nathan spoke to David.',
      },
    },
  },
  {
    id: '1-chronicles-29-14',
    reference: '1 Chronicles 29:14',
    book: '1 Chronicles',
    chapter: 29,
    verse: 14,
    difficulty: 'medium',
    translations: {
      ESV: 'But who am I, and what is my people, that we should be able thus to offer willingly? For all things come from you, and of your own have we given you.',
      NIV: 'But who am I, and who are my people, that we should be able to give as generously as this? Everything comes from you, and we have given you only what comes from your hand.',
      KJV: 'But who am I, and what is my people, that we should be able to offer so willingly after this sort? for all things come of thee, and of thine own have we given thee.',
      NASB: 'But who am I and who are my people that we should be able to offer as generously as this? For all things come from You, and from Your hand we have given You.',
    },
    context: {
      before: {
        reference: '1 Chronicles 29:13',
        text: 'And now we thank you, our God, and praise your glorious name.',
      },
      after: {
        reference: '1 Chronicles 29:15',
        text: 'For we are strangers before you and sojourners, as all our fathers were.',
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
  {
    id: '2-chronicles-20-12',
    reference: '2 Chronicles 20:12',
    book: '2 Chronicles',
    chapter: 20,
    verse: 12,
    difficulty: 'easy',
    translations: {
      ESV: 'O our God, will you not execute judgment on them? For we are powerless against this great horde that is coming against us. We do not know what to do, but our eyes are on you.',
      NIV: 'Our God, will you not judge them? For we have no power to face this vast army that is attacking us. We do not know what to do, but our eyes are on you.',
      KJV: 'O our God, wilt thou not judge them? for we have no might against this great company that cometh against us; neither know we what to do: but our eyes are upon thee.',
      NASB: 'O our God, will You not judge them? For we are powerless before this great multitude who are coming against us; nor do we know what to do, but our eyes are on You.',
    },
    context: {
      before: {
        reference: '2 Chronicles 20:11',
        text: 'Behold, they reward us by coming to drive us out of your possession, which you have given us to inherit.',
      },
      after: {
        reference: '2 Chronicles 20:13',
        text: 'Meanwhile all Judah stood before the LORD, with their little ones, their wives, and their children.',
      },
    },
  },
  {
    id: '2-chronicles-15-2',
    reference: '2 Chronicles 15:2',
    book: '2 Chronicles',
    chapter: 15,
    verse: 2,
    difficulty: 'medium',
    translations: {
      ESV: 'And he went out to meet Asa and said to him, "Hear me, Asa, and all Judah and Benjamin: The LORD is with you while you are with him. If you seek him, he will be found by you, but if you forsake him, he will forsake you."',
      NIV: 'He went out to meet Asa and said to him, "Listen to me, Asa and all Judah and Benjamin. The LORD is with you when you are with him. If you seek him, he will be found by you, but if you forsake him, he will forsake you."',
      KJV: 'And he went out to meet Asa, and said unto him, Hear ye me, Asa, and all Judah and Benjamin; The LORD is with you, while ye be with him; and if ye seek him, he will be found of you; but if ye forsake him, he will forsake you.',
      NASB: 'And he went out to meet Asa and said to him, "Listen to me, Asa, and all Judah and Benjamin: the LORD is with you when you are with Him. And if you seek Him, He will let you find Him; but if you forsake Him, He will forsake you."',
    },
    context: {
      before: {
        reference: '2 Chronicles 15:1',
        text: 'The Spirit of God came upon Azariah the son of Oded.',
      },
      after: {
        reference: '2 Chronicles 15:3',
        text: 'For a long time Israel was without the true God, and without a teaching priest and without law.',
      },
    },
  },
  {
    id: '2-chronicles-16-9',
    reference: '2 Chronicles 16:9',
    book: '2 Chronicles',
    chapter: 16,
    verse: 9,
    difficulty: 'medium',
    translations: {
      ESV: 'For the eyes of the LORD run to and fro throughout the whole earth, to give strong support to those whose heart is blameless toward him.',
      NIV: 'For the eyes of the LORD range throughout the earth to strengthen those whose hearts are fully committed to him.',
      KJV: 'For the eyes of the LORD run to and fro throughout the whole earth, to shew himself strong in the behalf of them whose heart is perfect toward him.',
      NASB: 'For the eyes of the LORD move to and fro throughout the earth that He may strongly support those whose heart is completely His.',
    },
    context: {
      before: {
        reference: '2 Chronicles 16:8',
        text: 'Were not the Ethiopians and the Libyans a huge army with very many chariots and horsemen? Yet because you relied on the LORD, he gave them into your hand.',
      },
      after: {
        reference: '2 Chronicles 16:10',
        text: 'Then Asa was angry with the seer and put him in the stocks in prison, for he was in a rage with him because of this.',
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
  {
    id: 'ezra-3-11',
    reference: 'Ezra 3:11',
    book: 'Ezra',
    chapter: 3,
    verse: 11,
    difficulty: 'medium',
    translations: {
      ESV: 'And they sang responsively, praising and giving thanks to the LORD, "For he is good, for his steadfast love endures forever toward Israel."',
      NIV: 'With praise and thanksgiving they sang to the LORD: "He is good; his love toward Israel endures forever."',
      KJV: 'And they sang together by course in praising and giving thanks unto the LORD; because he is good, for his mercy endureth for ever toward Israel.',
      NASB: 'They sang, praising and giving thanks to the LORD, saying, "For He is good, for His lovingkindness is upon Israel forever."',
    },
    context: {
      before: {
        reference: 'Ezra 3:10',
        text: 'And when the builders laid the foundation of the temple of the LORD, the priests in their vestments came forward with trumpets.',
      },
      after: {
        reference: 'Ezra 3:12',
        text: 'But many of the priests and Levites and heads of fathers houses, old men who had seen the first house, wept with a loud voice.',
      },
    },
  },
  {
    id: 'ezra-8-22',
    reference: 'Ezra 8:22',
    book: 'Ezra',
    chapter: 8,
    verse: 22,
    difficulty: 'medium',
    translations: {
      ESV: 'For I was ashamed to ask the king for a band of soldiers and horsemen to protect us against the enemy on our way, since we had told the king, "The hand of our God is for good on all who seek him, and the power of his wrath is against all who forsake him."',
      NIV: 'I was ashamed to ask the king for soldiers and horsemen to protect us from enemies on the road, because we had told the king, "The gracious hand of our God is on everyone who looks to him, but his great anger is against all who forsake him."',
      KJV: 'For I was ashamed to require of the king a band of soldiers and horsemen to help us against the enemy in the way: because we had spoken unto the king, saying, The hand of our God is upon all them for good that seek him; but his power and his wrath is against all them that forsake him.',
      NASB: 'For I was ashamed to request from the king troops and horsemen to protect us from the enemy on the way, because we had said to the king, "The hand of our God is favorably disposed to all those who seek Him, but His power and His anger are against all those who forsake Him."',
    },
    context: {
      before: {
        reference: 'Ezra 8:21',
        text: 'Then I proclaimed a fast there, at the river Ahava, that we might humble ourselves before our God, to seek from him a safe journey for ourselves.',
      },
      after: {
        reference: 'Ezra 8:23',
        text: 'So we fasted and implored our God for this, and he listened to our entreaty.',
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
  {
    id: 'nehemiah-9-6',
    reference: 'Nehemiah 9:6',
    book: 'Nehemiah',
    chapter: 9,
    verse: 6,
    difficulty: 'hard',
    translations: {
      ESV: 'You are the LORD, you alone. You have made heaven, the heaven of heavens, with all their host, the earth and all that is on it, the seas and all that is in them; and you preserve all of them; and the host of heaven worships you.',
      NIV: 'You alone are the LORD. You made the heavens, even the highest heavens, and all their starry host, the earth and all that is on it, the seas and all that is in them. You give life to everything, and the multitudes of heaven worship you.',
      KJV: 'Thou, even thou, art LORD alone; thou hast made heaven, the heaven of heavens, with all their host, the earth, and all things that are therein, the seas, and all that is therein, and thou preservest them all; and the host of heaven worshippeth thee.',
      NASB: 'You alone are the LORD. You have made the heavens, the heaven of heavens with all their host, the earth and all that is on it, the seas and all that is in them. You give life to all of them and the heavenly host bows down before You.',
    },
    context: {
      before: {
        reference: 'Nehemiah 9:5',
        text: 'Then the Levites, Jeshua, Kadmiel, Bani, Hashabneiah, Sherebiah, Hodiah, Shebaniah, and Pethahiah, said, "Stand up and bless the LORD your God from everlasting to everlasting."',
      },
      after: {
        reference: 'Nehemiah 9:7',
        text: 'You are the LORD, the God who chose Abram and brought him out of Ur of the Chaldeans and gave him the name Abraham.',
      },
    },
  },
  {
    id: 'nehemiah-1-5',
    reference: 'Nehemiah 1:5',
    book: 'Nehemiah',
    chapter: 1,
    verse: 5,
    difficulty: 'medium',
    translations: {
      ESV: 'And I said, "O LORD God of heaven, the great and awesome God who keeps covenant and steadfast love with those who love him and keep his commandments."',
      NIV: 'Then I said: "LORD, the God of heaven, the great and awesome God, who keeps his covenant of love with those who love him and keep his commandments."',
      KJV: 'And said, I beseech thee, O LORD God of heaven, the great and terrible God, that keepeth covenant and mercy for them that love him and observe his commandments.',
      NASB: 'I said, "I beseech You, O LORD God of heaven, the great and awesome God, who preserves the covenant and lovingkindness for those who love Him and keep His commandments."',
    },
    context: {
      before: {
        reference: 'Nehemiah 1:4',
        text: 'As soon as I heard these words I sat down and wept and mourned for days, and I continued fasting and praying before the God of heaven.',
      },
      after: {
        reference: 'Nehemiah 1:6',
        text: 'Let your ear be attentive and your eyes open, to hear the prayer of your servant that I now pray before you.',
      },
    },
  },
  {
    id: 'nehemiah-4-14',
    reference: 'Nehemiah 4:14',
    book: 'Nehemiah',
    chapter: 4,
    verse: 14,
    difficulty: 'medium',
    translations: {
      ESV: 'And I looked and arose and said to the nobles and to the officials and to the rest of the people, "Do not be afraid of them. Remember the Lord, who is great and awesome, and fight for your brothers, your sons, your daughters, your wives, and your homes."',
      NIV: 'After I looked things over, I stood up and said to the nobles, the officials and the rest of the people, "Don\'t be afraid of them. Remember the Lord, who is great and awesome, and fight for your families, your sons and your daughters, your wives and your homes."',
      KJV: 'And I looked, and rose up, and said unto the nobles, and to the rulers, and to the rest of the people, Be not ye afraid of them: remember the Lord, which is great and terrible, and fight for your brethren, your sons, and your daughters, your wives, and your houses.',
      NASB: 'When I saw their fear, I rose and spoke to the nobles, the officials and the rest of the people: "Do not be afraid of them; remember the Lord who is great and awesome, and fight for your brothers, your sons, your daughters, your wives and your houses."',
    },
    context: {
      before: {
        reference: 'Nehemiah 4:13',
        text: 'So in the lowest parts of the space behind the wall, in open places, I stationed the people by their clans, with their swords, their spears, and their bows.',
      },
      after: {
        reference: 'Nehemiah 4:15',
        text: 'When our enemies heard that it was known to us and that God had frustrated their plan, we all returned to the wall, each to his work.',
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
  {
    id: 'esther-6-13',
    reference: 'Esther 6:13',
    book: 'Esther',
    chapter: 6,
    verse: 13,
    difficulty: 'medium',
    translations: {
      ESV: 'And Haman told his wife Zeresh and all his friends everything that had happened to him. Then his wise men and his wife Zeresh said to him, "If Mordecai, before whom you have begun to fall, is of the Jewish people, you will not overcome him but will surely fall before him."',
      NIV: 'And Haman told his wife Zeresh and all his friends everything that had happened to him. His advisers and his wife Zeresh said to him, "Since Mordecai, before whom your downfall has started, is of Jewish origin, you cannot stand against him—you will surely come to ruin!"',
      KJV: 'And Haman told Zeresh his wife and all his friends every thing that had befallen him. Then said his wise men and Zeresh his wife unto him, If Mordecai be of the seed of the Jews, before whom thou hast begun to fall, thou shalt not prevail against him, but shalt surely fall before him.',
      NASB: 'Haman recounted to Zeresh his wife and all his friends everything that had happened to him. Then his wise men and Zeresh his wife said to him, "If Mordecai, before whom you have begun to fall, is of Jewish origin, you will not overcome him, but will surely fall before him."',
    },
    context: {
      before: {
        reference: 'Esther 6:12',
        text: 'Then Mordecai returned to the king\'s gate. But Haman hurried to his house, mourning and with his head covered.',
      },
      after: {
        reference: 'Esther 6:14',
        text: 'While they were yet talking with him, the king\'s eunuchs arrived and hurried to bring Haman to the feast that Esther had prepared.',
      },
    },
  },
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
  {
    id: 'esther-8-17',
    reference: 'Esther 8:17',
    book: 'Esther',
    chapter: 8,
    verse: 17,
    difficulty: 'easy',
    translations: {
      ESV: 'And in every province and in every city, wherever the king\'s command and his edict reached, there was gladness and joy among the Jews, a feast and a holiday.',
      NIV: 'In every province and in every city to which the edict of the king came, there was joy and gladness among the Jews, with feasting and celebrating.',
      KJV: 'And in every province, and in every city, whithersoever the king\'s commandment and his decree came, the Jews had joy and gladness, a feast and a good day.',
      NASB: 'In each and every province and in each and every city, wherever the king\'s commandment and his decree arrived, there was gladness and joy for the Jews, a feast and a holiday.',
    },
    context: {
      before: {
        reference: 'Esther 8:16',
        text: 'The Jews had light and gladness and joy and honor.',
      },
      after: {
        reference: 'Esther 9:1',
        text: 'Now in the twelfth month, which is the month of Adar, on the thirteenth day of the same, when the king\'s command and edict were about to be carried out.',
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
  {
    id: 'job-38-4',
    reference: 'Job 38:4',
    book: 'Job',
    chapter: 38,
    verse: 4,
    difficulty: 'medium',
    translations: {
      ESV: 'Where were you when I laid the foundation of the earth? Tell me, if you have understanding.',
      NIV: 'Where were you when I laid the earth\'s foundation? Tell me, if you understand.',
      KJV: 'Where wast thou when I laid the foundations of the earth? declare, if thou hast understanding.',
      NASB: 'Where were you when I laid the foundation of the earth? Tell Me, if you have understanding.',
    },
    context: {
      before: {
        reference: 'Job 38:3',
        text: 'Dress for action like a man; I will question you, and you make it known to me.',
      },
      after: {
        reference: 'Job 38:5',
        text: 'Who determined its measurements—surely you know! Or who stretched the line upon it?',
      },
    },
  },
  {
    id: 'job-42-5-6',
    reference: 'Job 42:5-6',
    book: 'Job',
    chapter: 42,
    verse: 5,
    difficulty: 'medium',
    translations: {
      ESV: 'I had heard of you by the hearing of the ear, but now my eye sees you; therefore I despise myself, and repent in dust and ashes.',
      NIV: 'My ears had heard of you but now my eyes have seen you. Therefore I despise myself and repent in dust and ashes.',
      KJV: 'I have heard of thee by the hearing of the ear: but now mine eye seeth thee. Wherefore I abhor myself, and repent in dust and ashes.',
      NASB: 'I have heard of You by the hearing of the ear; but now my eye sees You; therefore I retract, and I repent in dust and ashes.',
    },
    context: {
      before: {
        reference: 'Job 42:4',
        text: 'Hear, and I will speak; I will question you, and you make it known to me.',
      },
      after: {
        reference: 'Job 42:7',
        text: 'After the LORD had spoken these words to Job, the LORD said to Eliphaz the Temanite: "My anger burns against you."',
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
  {
    id: 'psalm-1-1',
    reference: 'Psalm 1:1',
    book: 'Psalms',
    chapter: 1,
    verse: 1,
    difficulty: 'medium',
    translations: {
      ESV: 'Blessed is the man who walks not in the counsel of the wicked, nor stands in the way of sinners, nor sits in the seat of scoffers;',
      NIV: 'Blessed is the one who does not walk in step with the wicked or stand in the way that sinners take or sit in the company of mockers,',
      KJV: 'Blessed is the man that walketh not in the counsel of the ungodly, nor standeth in the way of sinners, nor sitteth in the seat of the scornful.',
      NASB: 'How blessed is the man who does not walk in the counsel of the wicked, nor stand in the path of sinners, nor sit in the seat of scoffers!',
    },
    context: {
      after: {
        reference: 'Psalm 1:2',
        text: 'but his delight is in the law of the LORD, and on his law he meditates day and night.',
      },
    },
  },
  {
    id: 'psalm-51-10',
    reference: 'Psalm 51:10',
    book: 'Psalms',
    chapter: 51,
    verse: 10,
    difficulty: 'easy',
    translations: {
      ESV: 'Create in me a clean heart, O God, and renew a right spirit within me.',
      NIV: 'Create in me a pure heart, O God, and renew a steadfast spirit within me.',
      KJV: 'Create in me a clean heart, O God; and renew a right spirit within me.',
      NASB: 'Create in me a clean heart, O God, and renew a steadfast spirit within me.',
    },
    context: {
      before: {
        reference: 'Psalm 51:9',
        text: 'Hide your face from my sins, and blot out all my iniquities.',
      },
      after: {
        reference: 'Psalm 51:11',
        text: 'Cast me not away from your presence, and take not your Holy Spirit from me.',
      },
    },
  },
  {
    id: 'psalm-103-12',
    reference: 'Psalm 103:12',
    book: 'Psalms',
    chapter: 103,
    verse: 12,
    difficulty: 'easy',
    translations: {
      ESV: 'As far as the east is from the west, so far does he remove our transgressions from us.',
      NIV: 'As far as the east is from the west, so far has he removed our transgressions from us.',
      KJV: 'As far as the east is from the west, so far hath he removed our transgressions from us.',
      NASB: 'As far as the east is from the west, so far has He removed our transgressions from us.',
    },
    context: {
      before: {
        reference: 'Psalm 103:11',
        text: 'For as high as the heavens are above the earth, so great is his steadfast love toward those who fear him.',
      },
      after: {
        reference: 'Psalm 103:13',
        text: 'As a father shows compassion to his children, so the LORD shows compassion to those who fear him.',
      },
    },
  },
  {
    id: 'psalm-19-14',
    reference: 'Psalm 19:14',
    book: 'Psalms',
    chapter: 19,
    verse: 14,
    difficulty: 'easy',
    translations: {
      ESV: 'Let the words of my mouth and the meditation of my heart be acceptable in your sight, O LORD, my rock and my redeemer.',
      NIV: 'May these words of my mouth and this meditation of my heart be pleasing in your sight, LORD, my Rock and my Redeemer.',
      KJV: 'Let the words of my mouth, and the meditation of my heart, be acceptable in thy sight, O LORD, my strength, and my redeemer.',
      NASB: 'Let the words of my mouth and the meditation of my heart be acceptable in Your sight, O LORD, my rock and my Redeemer.',
    },
    context: {
      before: {
        reference: 'Psalm 19:13',
        text: 'Keep back your servant also from presumptuous sins; let them not have dominion over me!',
      },
    },
  },
  {
    id: 'psalm-2-7',
    reference: 'Psalm 2:7',
    book: 'Psalms',
    chapter: 2,
    verse: 7,
    difficulty: 'medium',
    translations: {
      ESV: 'I will tell of the decree: The LORD said to me, "You are my Son; today I have begotten you."',
      NIV: 'I will proclaim the LORD\'s decree: He said to me, "You are my Son; today I have become your Father."',
      KJV: 'I will declare the decree: the LORD hath said unto me, Thou art my Son; this day have I begotten thee.',
      NASB: 'I will surely tell of the decree of the LORD: He said to Me, "You are My Son, today I have begotten You."',
    },
    context: {
      before: {
        reference: 'Psalm 2:6',
        text: '"As for me, I have set my King on Zion, my holy hill."',
      },
      after: {
        reference: 'Psalm 2:8',
        text: 'Ask of me, and I will make the nations your heritage, and the ends of the earth your possession.',
      },
    },
  },
  {
    id: 'psalm-16-10',
    reference: 'Psalm 16:10',
    book: 'Psalms',
    chapter: 16,
    verse: 10,
    difficulty: 'medium',
    translations: {
      ESV: 'For you will not abandon my soul to Sheol, or let your holy one see corruption.',
      NIV: 'because you will not abandon me to the realm of the dead, nor will you let your faithful one see decay.',
      KJV: 'For thou wilt not leave my soul in hell; neither wilt thou suffer thine Holy One to see corruption.',
      NASB: 'For You will not abandon my soul to Sheol; nor will You allow Your Holy One to undergo decay.',
    },
    context: {
      before: {
        reference: 'Psalm 16:9',
        text: 'Therefore my heart is glad, and my whole being rejoices; my flesh also dwells secure.',
      },
      after: {
        reference: 'Psalm 16:11',
        text: 'You make known to me the path of life; in your presence there is fullness of joy; at your right hand are pleasures forevermore.',
      },
    },
  },
  {
    id: 'psalm-22-1',
    reference: 'Psalm 22:1',
    book: 'Psalms',
    chapter: 22,
    verse: 1,
    difficulty: 'medium',
    translations: {
      ESV: 'My God, my God, why have you forsaken me? Why are you so far from saving me, from the words of my groaning?',
      NIV: 'My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish?',
      KJV: 'My God, my God, why hast thou forsaken me? why art thou so far from helping me, and from the words of my roaring?',
      NASB: 'My God, my God, why have You forsaken me? Far from my deliverance are the words of my groaning.',
    },
    context: {
      after: {
        reference: 'Psalm 22:2',
        text: 'O my God, I cry by day, but you do not answer, and by night, but I find no rest.',
      },
    },
  },
  {
    id: 'psalm-22-18',
    reference: 'Psalm 22:18',
    book: 'Psalms',
    chapter: 22,
    verse: 18,
    difficulty: 'medium',
    translations: {
      ESV: 'they divide my garments among them, and for my clothing they cast lots.',
      NIV: 'They divide my clothes among them and cast lots for my garment.',
      KJV: 'They part my garments among them, and cast lots upon my vesture.',
      NASB: 'They divide my garments among them, and for my clothing they cast lots.',
    },
    context: {
      before: {
        reference: 'Psalm 22:17',
        text: 'I can count all my bones—they stare and gloat over me;',
      },
      after: {
        reference: 'Psalm 22:19',
        text: 'But you, O LORD, do not be far off! O you my help, come quickly to my aid!',
      },
    },
  },
  {
    id: 'psalm-34-8',
    reference: 'Psalm 34:8',
    book: 'Psalms',
    chapter: 34,
    verse: 8,
    difficulty: 'easy',
    translations: {
      ESV: 'Oh, taste and see that the LORD is good! Blessed is the man who takes refuge in him!',
      NIV: 'Taste and see that the LORD is good; blessed is the one who takes refuge in him.',
      KJV: 'O taste and see that the LORD is good: blessed is the man that trusteth in him.',
      NASB: 'O taste and see that the LORD is good; how blessed is the man who takes refuge in Him!',
    },
    context: {
      before: {
        reference: 'Psalm 34:7',
        text: 'The angel of the LORD encamps around those who fear him, and delivers them.',
      },
      after: {
        reference: 'Psalm 34:9',
        text: 'Oh, fear the LORD, you his saints, for those who fear him have no lack!',
      },
    },
  },
  {
    id: 'psalm-40-8',
    reference: 'Psalm 40:8',
    book: 'Psalms',
    chapter: 40,
    verse: 8,
    difficulty: 'medium',
    translations: {
      ESV: 'I delight to do your will, O my God; your law is within my heart.',
      NIV: 'I desire to do your will, my God; your law is within my heart.',
      KJV: 'I delight to do thy will, O my God: yea, thy law is within my heart.',
      NASB: 'I delight to do Your will, O my God; Your Law is within my heart.',
    },
    context: {
      before: {
        reference: 'Psalm 40:7',
        text: 'Then I said, "Behold, I have come; in the scroll of the book it is written of me."',
      },
      after: {
        reference: 'Psalm 40:9',
        text: 'I have told the glad news of deliverance in the great congregation.',
      },
    },
  },
  {
    id: 'psalm-110-1',
    reference: 'Psalm 110:1',
    book: 'Psalms',
    chapter: 110,
    verse: 1,
    difficulty: 'medium',
    translations: {
      ESV: 'The LORD says to my Lord: "Sit at my right hand, until I make your enemies your footstool."',
      NIV: 'The LORD says to my lord: "Sit at my right hand until I make your enemies a footstool for your feet."',
      KJV: 'The LORD said unto my Lord, Sit thou at my right hand, until I make thine enemies thy footstool.',
      NASB: 'The LORD says to my Lord: "Sit at My right hand until I make Your enemies a footstool for Your feet."',
    },
    context: {
      after: {
        reference: 'Psalm 110:2',
        text: 'The LORD sends forth from Zion your mighty scepter. Rule in the midst of your enemies!',
      },
    },
  },
  {
    id: 'psalm-118-22',
    reference: 'Psalm 118:22',
    book: 'Psalms',
    chapter: 118,
    verse: 22,
    difficulty: 'easy',
    translations: {
      ESV: 'The stone that the builders rejected has become the cornerstone.',
      NIV: 'The stone the builders rejected has become the cornerstone;',
      KJV: 'The stone which the builders refused is become the head stone of the corner.',
      NASB: 'The stone which the builders rejected has become the chief corner stone.',
    },
    context: {
      before: {
        reference: 'Psalm 118:21',
        text: 'I thank you that you have answered me and have become my salvation.',
      },
      after: {
        reference: 'Psalm 118:23',
        text: 'This is the LORD\'s doing; it is marvelous in our eyes.',
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
  {
    id: 'proverbs-1-7',
    reference: 'Proverbs 1:7',
    book: 'Proverbs',
    chapter: 1,
    verse: 7,
    difficulty: 'easy',
    translations: {
      ESV: 'The fear of the LORD is the beginning of knowledge; fools despise wisdom and instruction.',
      NIV: 'The fear of the LORD is the beginning of knowledge, but fools despise wisdom and instruction.',
      KJV: 'The fear of the LORD is the beginning of knowledge: but fools despise wisdom and instruction.',
      NASB: 'The fear of the LORD is the beginning of knowledge; fools despise wisdom and instruction.',
    },
    context: {
      before: {
        reference: 'Proverbs 1:6',
        text: 'to understand a proverb and a saying, the words of the wise and their riddles.',
      },
      after: {
        reference: 'Proverbs 1:8',
        text: 'Hear, my son, your father\'s instruction, and forsake not your mother\'s teaching,',
      },
    },
  },
  {
    id: 'proverbs-16-9',
    reference: 'Proverbs 16:9',
    book: 'Proverbs',
    chapter: 16,
    verse: 9,
    difficulty: 'easy',
    translations: {
      ESV: 'The heart of man plans his way, but the LORD establishes his steps.',
      NIV: 'In their hearts humans plan their course, but the LORD establishes their steps.',
      KJV: 'A man\'s heart deviseth his way: but the LORD directeth his steps.',
      NASB: 'The mind of man plans his way, but the LORD directs his steps.',
    },
    context: {
      before: {
        reference: 'Proverbs 16:8',
        text: 'Better is a little with righteousness than great revenues with injustice.',
      },
      after: {
        reference: 'Proverbs 16:10',
        text: 'An oracle is on the lips of a king; his mouth does not sin in judgment.',
      },
    },
  },
  {
    id: 'proverbs-9-10',
    reference: 'Proverbs 9:10',
    book: 'Proverbs',
    chapter: 9,
    verse: 10,
    difficulty: 'easy',
    translations: {
      ESV: 'The fear of the LORD is the beginning of wisdom, and the knowledge of the Holy One is insight.',
      NIV: 'The fear of the LORD is the beginning of wisdom, and knowledge of the Holy One is understanding.',
      KJV: 'The fear of the LORD is the beginning of wisdom: and the knowledge of the holy is understanding.',
      NASB: 'The fear of the LORD is the beginning of wisdom, and the knowledge of the Holy One is understanding.',
    },
    context: {
      before: {
        reference: 'Proverbs 9:9',
        text: 'Give instruction to a wise man, and he will be still wiser; teach a righteous man, and he will increase in learning.',
      },
      after: {
        reference: 'Proverbs 9:11',
        text: 'For by me your days will be multiplied, and years will be added to your life.',
      },
    },
  },
  {
    id: 'proverbs-4-23',
    reference: 'Proverbs 4:23',
    book: 'Proverbs',
    chapter: 4,
    verse: 23,
    difficulty: 'easy',
    translations: {
      ESV: 'Keep your heart with all vigilance, for from it flow the springs of life.',
      NIV: 'Above all else, guard your heart, for everything you do flows from it.',
      KJV: 'Keep thy heart with all diligence; for out of it are the issues of life.',
      NASB: 'Watch over your heart with all diligence, for from it flow the springs of life.',
    },
    context: {
      before: {
        reference: 'Proverbs 4:22',
        text: 'For they are life to those who find them, and healing to all their flesh.',
      },
      after: {
        reference: 'Proverbs 4:24',
        text: 'Put away from you crooked speech, and put devious talk far from you.',
      },
    },
  },
  {
    id: 'proverbs-18-10',
    reference: 'Proverbs 18:10',
    book: 'Proverbs',
    chapter: 18,
    verse: 10,
    difficulty: 'easy',
    translations: {
      ESV: 'The name of the LORD is a strong tower; the righteous man runs into it and is safe.',
      NIV: 'The name of the LORD is a fortified tower; the righteous run to it and are safe.',
      KJV: 'The name of the LORD is a strong tower: the righteous runneth into it, and is safe.',
      NASB: 'The name of the LORD is a strong tower; the righteous runs into it and is safe.',
    },
    context: {
      before: {
        reference: 'Proverbs 18:9',
        text: 'Whoever is slack in his work is a brother to him who destroys.',
      },
      after: {
        reference: 'Proverbs 18:11',
        text: 'A rich man\'s wealth is his strong city, and like a high wall in his imagination.',
      },
    },
  },
  {
    id: 'proverbs-27-17',
    reference: 'Proverbs 27:17',
    book: 'Proverbs',
    chapter: 27,
    verse: 17,
    difficulty: 'easy',
    translations: {
      ESV: 'Iron sharpens iron, and one man sharpens another.',
      NIV: 'As iron sharpens iron, so one person sharpens another.',
      KJV: 'Iron sharpeneth iron; so a man sharpeneth the countenance of his friend.',
      NASB: 'Iron sharpens iron, so one man sharpens another.',
    },
    context: {
      before: {
        reference: 'Proverbs 27:16',
        text: 'to restrain her is to restrain the wind or to grasp oil in one\'s right hand.',
      },
      after: {
        reference: 'Proverbs 27:18',
        text: 'Whoever tends a fig tree will eat its fruit, and he who guards his master will be honored.',
      },
    },
  },
  {
    id: 'proverbs-11-2',
    reference: 'Proverbs 11:2',
    book: 'Proverbs',
    chapter: 11,
    verse: 2,
    difficulty: 'easy',
    translations: {
      ESV: 'When pride comes, then comes disgrace, but with the humble is wisdom.',
      NIV: 'When pride comes, then comes disgrace, but with humility comes wisdom.',
      KJV: 'When pride cometh, then cometh shame: but with the lowly is wisdom.',
      NASB: 'When pride comes, then comes dishonor, but with the humble is wisdom.',
    },
    context: {
      before: {
        reference: 'Proverbs 11:1',
        text: 'A false balance is an abomination to the LORD, but a just weight is his delight.',
      },
      after: {
        reference: 'Proverbs 11:3',
        text: 'The integrity of the upright guides them, but the crookedness of the treacherous destroys them.',
      },
    },
  },
  {
    id: 'proverbs-15-1',
    reference: 'Proverbs 15:1',
    book: 'Proverbs',
    chapter: 15,
    verse: 1,
    difficulty: 'easy',
    translations: {
      ESV: 'A soft answer turns away wrath, but a harsh word stirs up anger.',
      NIV: 'A gentle answer turns away wrath, but a harsh word stirs up anger.',
      KJV: 'A soft answer turneth away wrath: but grievous words stir up anger.',
      NASB: 'A gentle answer turns away wrath, but a harsh word stirs up anger.',
    },
    context: {
      before: {
        reference: 'Proverbs 14:35',
        text: 'A servant who deals wisely has the king\'s favor, but his wrath falls on one who acts shamefully.',
      },
      after: {
        reference: 'Proverbs 15:2',
        text: 'The tongue of the wise commends knowledge, but the mouths of fools pour out folly.',
      },
    },
  },
  {
    id: 'proverbs-16-3',
    reference: 'Proverbs 16:3',
    book: 'Proverbs',
    chapter: 16,
    verse: 3,
    difficulty: 'easy',
    translations: {
      ESV: 'Commit your work to the LORD, and your plans will be established.',
      NIV: 'Commit to the LORD whatever you do, and he will establish your plans.',
      KJV: 'Commit thy works unto the LORD, and thy thoughts shall be established.',
      NASB: 'Commit your works to the LORD and your plans will be established.',
    },
    context: {
      before: {
        reference: 'Proverbs 16:2',
        text: 'All the ways of a man are pure in his own eyes, but the LORD weighs the spirit.',
      },
      after: {
        reference: 'Proverbs 16:4',
        text: 'The LORD has made everything for its purpose, even the wicked for the day of trouble.',
      },
    },
  },
  {
    id: 'proverbs-19-21',
    reference: 'Proverbs 19:21',
    book: 'Proverbs',
    chapter: 19,
    verse: 21,
    difficulty: 'medium',
    translations: {
      ESV: 'Many are the plans in the mind of a man, but it is the purpose of the LORD that will stand.',
      NIV: 'Many are the plans in a person\'s heart, but it is the LORD\'s purpose that prevails.',
      KJV: 'There are many devices in a man\'s heart; nevertheless the counsel of the LORD, that shall stand.',
      NASB: 'Many plans are in a man\'s heart, but the counsel of the LORD will stand.',
    },
    context: {
      before: {
        reference: 'Proverbs 19:20',
        text: 'Listen to advice and accept instruction, that you may gain wisdom in the future.',
      },
      after: {
        reference: 'Proverbs 19:22',
        text: 'What is desired in a man is steadfast love, and a poor man is better than a liar.',
      },
    },
  },
  {
    id: 'proverbs-29-25',
    reference: 'Proverbs 29:25',
    book: 'Proverbs',
    chapter: 29,
    verse: 25,
    difficulty: 'easy',
    translations: {
      ESV: 'The fear of man lays a snare, but whoever trusts in the LORD is safe.',
      NIV: 'Fear of man will prove to be a snare, but whoever trusts in the LORD is kept safe.',
      KJV: 'The fear of man bringeth a snare: but whoso putteth his trust in the LORD shall be safe.',
      NASB: 'The fear of man brings a snare, but he who trusts in the LORD will be exalted.',
    },
    context: {
      before: {
        reference: 'Proverbs 29:24',
        text: 'The partner of a thief hates his own life; he hears the curse, but discloses nothing.',
      },
      after: {
        reference: 'Proverbs 29:26',
        text: 'Many seek the face of a ruler, but it is from the LORD that a man gets justice.',
      },
    },
  },
  {
    id: 'proverbs-31-30',
    reference: 'Proverbs 31:30',
    book: 'Proverbs',
    chapter: 31,
    verse: 30,
    difficulty: 'easy',
    translations: {
      ESV: 'Charm is deceitful, and beauty is vain, but a woman who fears the LORD is to be praised.',
      NIV: 'Charm is deceptive, and beauty is fleeting; but a woman who fears the LORD is to be praised.',
      KJV: 'Favour is deceitful, and beauty is vain: but a woman that feareth the LORD, she shall be praised.',
      NASB: 'Charm is deceitful and beauty is vain, but a woman who fears the LORD, she shall be praised.',
    },
    context: {
      before: {
        reference: 'Proverbs 31:29',
        text: '"Many women have done excellently, but you surpass them all."',
      },
      after: {
        reference: 'Proverbs 31:31',
        text: 'Give her of the fruit of her hands, and let her works praise her in the gates.',
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
  {
    id: 'ecclesiastes-1-2',
    reference: 'Ecclesiastes 1:2',
    book: 'Ecclesiastes',
    chapter: 1,
    verse: 2,
    difficulty: 'easy',
    translations: {
      ESV: 'Vanity of vanities, says the Preacher, vanity of vanities! All is vanity.',
      NIV: '"Meaningless! Meaningless!" says the Teacher. "Utterly meaningless! Everything is meaningless."',
      KJV: 'Vanity of vanities, saith the Preacher, vanity of vanities; all is vanity.',
      NASB: '"Vanity of vanities," says the Preacher, "Vanity of vanities! All is vanity."',
    },
    context: {
      before: {
        reference: 'Ecclesiastes 1:1',
        text: 'The words of the Preacher, the son of David, king in Jerusalem.',
      },
      after: {
        reference: 'Ecclesiastes 1:3',
        text: 'What does man gain by all the toil at which he toils under the sun?',
      },
    },
  },
  {
    id: 'ecclesiastes-12-14',
    reference: 'Ecclesiastes 12:14',
    book: 'Ecclesiastes',
    chapter: 12,
    verse: 14,
    difficulty: 'easy',
    translations: {
      ESV: 'For God will bring every deed into judgment, with every secret thing, whether good or evil.',
      NIV: 'For God will bring every deed into judgment, including every hidden thing, whether it is good or evil.',
      KJV: 'For God shall bring every work into judgment, with every secret thing, whether it be good, or whether it be evil.',
      NASB: 'For God will bring every act to judgment, everything which is hidden, whether it is good or evil.',
    },
    context: {
      before: {
        reference: 'Ecclesiastes 12:13',
        text: 'The end of the matter; all has been heard. Fear God and keep his commandments, for this is the whole duty of man.',
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
  {
    id: 'song-of-solomon-2-16',
    reference: 'Song of Solomon 2:16',
    book: 'Song of Solomon',
    chapter: 2,
    verse: 16,
    difficulty: 'easy',
    translations: {
      ESV: 'My beloved is mine, and I am his; he grazes among the lilies.',
      NIV: 'My beloved is mine and I am his; he browses among the lilies.',
      KJV: 'My beloved is mine, and I am his: he feedeth among the lilies.',
      NASB: 'My beloved is mine, and I am his; he pastures his flock among the lilies.',
    },
    context: {
      before: {
        reference: 'Song of Solomon 2:15',
        text: 'Catch the foxes for us, the little foxes that spoil the vineyards, for our vineyards are in blossom.',
      },
      after: {
        reference: 'Song of Solomon 2:17',
        text: 'Until the day breathes and the shadows flee, turn, my beloved, be like a gazelle or a young stag on cleft mountains.',
      },
    },
  },
  {
    id: 'song-of-solomon-8-7',
    reference: 'Song of Solomon 8:7',
    book: 'Song of Solomon',
    chapter: 8,
    verse: 7,
    difficulty: 'medium',
    translations: {
      ESV: 'Many waters cannot quench love, neither can floods drown it. If a man offered for love all the wealth of his house, he would be utterly despised.',
      NIV: 'Many waters cannot quench love; rivers cannot sweep it away. If one were to give all the wealth of one\'s house for love, it would be utterly scorned.',
      KJV: 'Many waters cannot quench love, neither can the floods drown it: if a man would give all the substance of his house for love, it would utterly be contemned.',
      NASB: 'Many waters cannot quench love, nor will rivers overflow it; if a man were to give all the riches of his house for love, it would be utterly despised.',
    },
    context: {
      before: {
        reference: 'Song of Solomon 8:6',
        text: 'Set me as a seal upon your heart, as a seal upon your arm, for love is strong as death, jealousy is fierce as the grave.',
      },
      after: {
        reference: 'Song of Solomon 8:8',
        text: 'We have a little sister, and she has no breasts. What shall we do for our sister on the day when she is spoken for?',
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

  {
    id: 'isaiah-6-8',
    reference: 'Isaiah 6:8',
    book: 'Isaiah',
    chapter: 6,
    verse: 8,
    difficulty: 'easy',
    translations: {
      ESV: 'And I heard the voice of the Lord saying, "Whom shall I send, and who will go for us?" Then I said, "Here I am! Send me."',
      NIV: 'Then I heard the voice of the Lord saying, "Whom shall I send? And who will go for us?" And I said, "Here am I. Send me!"',
      KJV: 'Also I heard the voice of the Lord, saying, Whom shall I send, and who will go for us? Then said I, Here am I; send me.',
      NASB: 'Then I heard the voice of the Lord, saying, "Whom shall I send, and who will go for Us?" Then I said, "Here am I. Send me!"',
    },
    context: {
      before: {
        reference: 'Isaiah 6:7',
        text: 'And he touched my mouth and said: "Behold, this has touched your lips; your guilt is taken away, and your sin atoned for."',
      },
      after: {
        reference: 'Isaiah 6:9',
        text: 'And he said, "Go, and say to this people: Keep on hearing, but do not understand."',
      },
    },
  },
  {
    id: 'isaiah-7-14',
    reference: 'Isaiah 7:14',
    book: 'Isaiah',
    chapter: 7,
    verse: 14,
    difficulty: 'medium',
    translations: {
      ESV: 'Therefore the Lord himself will give you a sign. Behold, the virgin shall conceive and bear a son, and shall call his name Immanuel.',
      NIV: 'Therefore the Lord himself will give you a sign: The virgin will conceive and give birth to a son, and will call him Immanuel.',
      KJV: 'Therefore the Lord himself shall give you a sign; Behold, a virgin shall conceive, and bear a son, and shall call his name Immanuel.',
      NASB: 'Therefore the Lord Himself will give you a sign: Behold, a virgin will be with child and bear a son, and she will call His name Immanuel.',
    },
    context: {
      before: {
        reference: 'Isaiah 7:13',
        text: 'And he said, "Hear then, O house of David! Is it too little for you to weary men, that you weary my God also?"',
      },
      after: {
        reference: 'Isaiah 7:15',
        text: 'He shall eat curds and honey when he knows how to refuse the evil and choose the good.',
      },
    },
  },
  {
    id: 'isaiah-26-3',
    reference: 'Isaiah 26:3',
    book: 'Isaiah',
    chapter: 26,
    verse: 3,
    difficulty: 'easy',
    translations: {
      ESV: 'You keep him in perfect peace whose mind is stayed on you, because he trusts in you.',
      NIV: 'You will keep in perfect peace those whose minds are steadfast, because they trust in you.',
      KJV: 'Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee.',
      NASB: 'The steadfast of mind You will keep in perfect peace, because he trusts in You.',
    },
    context: {
      before: {
        reference: 'Isaiah 26:2',
        text: 'Open the gates, that the righteous nation that keeps faith may enter in.',
      },
      after: {
        reference: 'Isaiah 26:4',
        text: 'Trust in the LORD forever, for the LORD GOD is an everlasting rock.',
      },
    },
  },
  {
    id: 'isaiah-40-8',
    reference: 'Isaiah 40:8',
    book: 'Isaiah',
    chapter: 40,
    verse: 8,
    difficulty: 'easy',
    translations: {
      ESV: 'The grass withers, the flower fades, but the word of our God will stand forever.',
      NIV: 'The grass withers and the flowers fall, but the word of our God endures forever.',
      KJV: 'The grass withereth, the flower fadeth: but the word of our God shall stand for ever.',
      NASB: 'The grass withers, the flower fades, but the word of our God stands forever.',
    },
    context: {
      before: {
        reference: 'Isaiah 40:7',
        text: 'The grass withers, the flower fades when the breath of the LORD blows on it; surely the people are grass.',
      },
      after: {
        reference: 'Isaiah 40:9',
        text: 'Go on up to a high mountain, O Zion, herald of good news; lift up your voice with strength.',
      },
    },
  },
  {
    id: 'isaiah-43-1',
    reference: 'Isaiah 43:1',
    book: 'Isaiah',
    chapter: 43,
    verse: 1,
    difficulty: 'medium',
    translations: {
      ESV: 'But now thus says the LORD, he who created you, O Jacob, he who formed you, O Israel: "Fear not, for I have redeemed you; I have called you by name, you are mine."',
      NIV: 'But now, this is what the LORD says—he who created you, Jacob, he who formed you, Israel: "Do not fear, for I have redeemed you; I have summoned you by name; you are mine."',
      KJV: 'But now thus saith the LORD that created thee, O Jacob, and he that formed thee, O Israel, Fear not: for I have redeemed thee, I have called thee by thy name; thou art mine.',
      NASB: 'But now, thus says the LORD, your Creator, O Jacob, and He who formed you, O Israel, "Do not fear, for I have redeemed you; I have called you by name; you are Mine!"',
    },
    context: {
      before: {
        reference: 'Isaiah 42:25',
        text: 'So he poured on him the heat of his anger and the might of battle; it set him on fire all around, but he did not understand.',
      },
      after: {
        reference: 'Isaiah 43:2',
        text: 'When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you.',
      },
    },
  },
  {
    id: 'isaiah-53-6',
    reference: 'Isaiah 53:6',
    book: 'Isaiah',
    chapter: 53,
    verse: 6,
    difficulty: 'medium',
    translations: {
      ESV: 'All we like sheep have gone astray; we have turned—every one—to his own way; and the LORD has laid on him the iniquity of us all.',
      NIV: 'We all, like sheep, have gone astray, each of us has turned to our own way; and the LORD has laid on him the iniquity of us all.',
      KJV: 'All we like sheep have gone astray; we have turned every one to his own way; and the LORD hath laid on him the iniquity of us all.',
      NASB: 'All of us like sheep have gone astray, each of us has turned to his own way; but the LORD has caused the iniquity of us all to fall on Him.',
    },
    context: {
      before: {
        reference: 'Isaiah 53:5',
        text: 'But he was pierced for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace, and with his wounds we are healed.',
      },
      after: {
        reference: 'Isaiah 53:7',
        text: 'He was oppressed, and he was afflicted, yet he opened not his mouth; like a lamb that is led to the slaughter.',
      },
    },
  },
  {
    id: 'isaiah-55-8',
    reference: 'Isaiah 55:8',
    book: 'Isaiah',
    chapter: 55,
    verse: 8,
    difficulty: 'easy',
    translations: {
      ESV: 'For my thoughts are not your thoughts, neither are your ways my ways, declares the LORD.',
      NIV: '"For my thoughts are not your thoughts, neither are your ways my ways," declares the LORD.',
      KJV: 'For my thoughts are not your thoughts, neither are your ways my ways, saith the LORD.',
      NASB: '"For My thoughts are not your thoughts, nor are your ways My ways," declares the LORD.',
    },
    context: {
      before: {
        reference: 'Isaiah 55:7',
        text: 'let the wicked forsake his way, and the unrighteous man his thoughts; let him return to the LORD, that he may have compassion on him.',
      },
      after: {
        reference: 'Isaiah 55:9',
        text: 'For as the heavens are higher than the earth, so are my ways higher than your ways and my thoughts than your thoughts.',
      },
    },
  },
  {
    id: 'isaiah-55-11',
    reference: 'Isaiah 55:11',
    book: 'Isaiah',
    chapter: 55,
    verse: 11,
    difficulty: 'medium',
    translations: {
      ESV: 'so shall my word be that goes out from my mouth; it shall not return to me empty, but it shall accomplish that which I purpose, and shall succeed in the thing for which I sent it.',
      NIV: 'so is my word that goes out from my mouth: It will not return to me empty, but will accomplish what I desire and achieve the purpose for which I sent it.',
      KJV: 'So shall my word be that goeth forth out of my mouth: it shall not return unto me void, but it shall accomplish that which I please, and it shall prosper in the thing whereto I sent it.',
      NASB: 'So will My word be which goes forth from My mouth; it will not return to Me empty, without accomplishing what I desire, and without succeeding in the matter for which I sent it.',
    },
    context: {
      before: {
        reference: 'Isaiah 55:10',
        text: 'For as the rain and the snow come down from heaven and do not return there but water the earth, making it bring forth and sprout.',
      },
      after: {
        reference: 'Isaiah 55:12',
        text: 'For you shall go out in joy and be led forth in peace; the mountains and the hills before you shall break forth into singing.',
      },
    },
  },
  {
    id: 'isaiah-64-6',
    reference: 'Isaiah 64:6',
    book: 'Isaiah',
    chapter: 64,
    verse: 6,
    difficulty: 'medium',
    translations: {
      ESV: 'We have all become like one who is unclean, and all our righteous deeds are like a polluted garment. We all fade like a leaf, and our iniquities, like the wind, take us away.',
      NIV: 'All of us have become like one who is unclean, and all our righteous acts are like filthy rags; we all shrivel up like a leaf, and like the wind our sins sweep us away.',
      KJV: 'But we are all as an unclean thing, and all our righteousnesses are as filthy rags; and we all do fade as a leaf; and our iniquities, like the wind, have taken us away.',
      NASB: 'For all of us have become like one who is unclean, and all our righteous deeds are like a filthy garment; and all of us wither like a leaf, and our iniquities, like the wind, take us away.',
    },
    context: {
      before: {
        reference: 'Isaiah 64:5',
        text: 'You meet him who joyfully works righteousness, those who remember you in your ways.',
      },
      after: {
        reference: 'Isaiah 64:7',
        text: 'There is no one who calls upon your name, who rouses himself to take hold of you.',
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
  {
    id: 'jeremiah-1-5',
    reference: 'Jeremiah 1:5',
    book: 'Jeremiah',
    chapter: 1,
    verse: 5,
    difficulty: 'medium',
    translations: {
      ESV: 'Before I formed you in the womb I knew you, and before you were born I consecrated you; I appointed you a prophet to the nations.',
      NIV: '"Before I formed you in the womb I knew you, before you were born I set you apart; I appointed you as a prophet to the nations."',
      KJV: 'Before I formed thee in the belly I knew thee; and before thou camest forth out of the womb I sanctified thee, and I ordained thee a prophet unto the nations.',
      NASB: '"Before I formed you in the womb I knew you, and before you were born I consecrated you; I have appointed you a prophet to the nations."',
    },
    context: {
      before: {
        reference: 'Jeremiah 1:4',
        text: 'Now the word of the LORD came to me, saying,',
      },
      after: {
        reference: 'Jeremiah 1:6',
        text: 'Then I said, "Ah, Lord GOD! Behold, I do not know how to speak, for I am only a youth."',
      },
    },
  },
  {
    id: 'jeremiah-33-3',
    reference: 'Jeremiah 33:3',
    book: 'Jeremiah',
    chapter: 33,
    verse: 3,
    difficulty: 'medium',
    translations: {
      ESV: 'Call to me and I will answer you, and will tell you great and hidden things that you have not known.',
      NIV: '"Call to me and I will answer you and tell you great and unsearchable things you do not know."',
      KJV: 'Call unto me, and I will answer thee, and show thee great and mighty things, which thou knowest not.',
      NASB: '"Call to Me and I will answer you, and I will tell you great and mighty things, which you do not know."',
    },
    context: {
      before: {
        reference: 'Jeremiah 33:2',
        text: 'Thus says the LORD who made the earth, the LORD who formed it to establish it—the LORD is his name.',
      },
      after: {
        reference: 'Jeremiah 33:4',
        text: 'For thus says the LORD, the God of Israel, concerning the houses of this city and the houses of the kings of Judah.',
      },
    },
  },
  {
    id: 'jeremiah-31-3',
    reference: 'Jeremiah 31:3',
    book: 'Jeremiah',
    chapter: 31,
    verse: 3,
    difficulty: 'medium',
    translations: {
      ESV: 'The LORD appeared to him from far away. I have loved you with an everlasting love; therefore I have continued my faithfulness to you.',
      NIV: 'The LORD appeared to us in the past, saying: "I have loved you with an everlasting love; I have drawn you with unfailing kindness."',
      KJV: 'The LORD hath appeared of old unto me, saying, Yea, I have loved thee with an everlasting love: therefore with lovingkindness have I drawn thee.',
      NASB: 'The LORD appeared to him from afar, saying, "I have loved you with an everlasting love; therefore I have drawn you with lovingkindness."',
    },
    context: {
      before: {
        reference: 'Jeremiah 31:2',
        text: 'Thus says the LORD: "The people who survived the sword found grace in the wilderness; when Israel sought for rest."',
      },
      after: {
        reference: 'Jeremiah 31:4',
        text: 'Again I will build you, and you shall be built, O virgin Israel! Again you shall adorn yourself with tambourines.',
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
  {
    id: 'lamentations-3-24',
    reference: 'Lamentations 3:24',
    book: 'Lamentations',
    chapter: 3,
    verse: 24,
    difficulty: 'medium',
    translations: {
      ESV: '"The LORD is my portion," says my soul, "therefore I will hope in him."',
      NIV: 'I say to myself, "The LORD is my portion; therefore I will wait for him."',
      KJV: 'The LORD is my portion, saith my soul; therefore will I hope in him.',
      NASB: '"The LORD is my portion," says my soul, "Therefore I have hope in Him."',
    },
    context: {
      before: {
        reference: 'Lamentations 3:23',
        text: 'They are new every morning; great is your faithfulness.',
      },
      after: {
        reference: 'Lamentations 3:25',
        text: 'The LORD is good to those who wait for him, to the soul who seeks him.',
      },
    },
  },
  {
    id: 'lamentations-3-25',
    reference: 'Lamentations 3:25',
    book: 'Lamentations',
    chapter: 3,
    verse: 25,
    difficulty: 'easy',
    translations: {
      ESV: 'The LORD is good to those who wait for him, to the soul who seeks him.',
      NIV: 'The LORD is good to those whose hope is in him, to the one who seeks him;',
      KJV: 'The LORD is good unto them that wait for him, to the soul that seeketh him.',
      NASB: 'The LORD is good to those who wait for Him, to the person who seeks Him.',
    },
    context: {
      before: {
        reference: 'Lamentations 3:24',
        text: '"The LORD is my portion," says my soul, "therefore I will hope in him."',
      },
      after: {
        reference: 'Lamentations 3:26',
        text: 'It is good that one should wait quietly for the salvation of the LORD.',
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
  {
    id: 'ezekiel-37-14',
    reference: 'Ezekiel 37:14',
    book: 'Ezekiel',
    chapter: 37,
    verse: 14,
    difficulty: 'medium',
    translations: {
      ESV: 'And I will put my Spirit within you, and you shall live, and I will place you in your own land. Then you shall know that I am the LORD; I have spoken, and I will do it, declares the LORD.',
      NIV: 'I will put my Spirit in you and you will live, and I will settle you in your own land. Then you will know that I the LORD have spoken, and I have done it, declares the LORD.',
      KJV: 'And shall put my spirit in you, and ye shall live, and I shall place you in your own land: then shall ye know that I the LORD have spoken it, and performed it, saith the LORD.',
      NASB: 'I will put My Spirit within you and you will come to life, and I will place you on your own land. Then you will know that I, the LORD, have spoken and done it, declares the LORD.',
    },
    context: {
      before: {
        reference: 'Ezekiel 37:13',
        text: 'And you shall know that I am the LORD, when I open your graves, and raise you from your graves, O my people.',
      },
      after: {
        reference: 'Ezekiel 37:15',
        text: 'The word of the LORD came to me.',
      },
    },
  },
  {
    id: 'ezekiel-36-27',
    reference: 'Ezekiel 36:27',
    book: 'Ezekiel',
    chapter: 36,
    verse: 27,
    difficulty: 'medium',
    translations: {
      ESV: 'And I will put my Spirit within you, and cause you to walk in my statutes and be careful to obey my rules.',
      NIV: 'And I will put my Spirit in you and move you to follow my decrees and be careful to keep my laws.',
      KJV: 'And I will put my spirit within you, and cause you to walk in my statutes, and ye shall keep my judgments, and do them.',
      NASB: 'I will put My Spirit within you and cause you to walk in My statutes, and you will be careful to observe My ordinances.',
    },
    context: {
      before: {
        reference: 'Ezekiel 36:26',
        text: 'And I will give you a new heart, and a new spirit I will put within you. And I will remove the heart of stone from your flesh and give you a heart of flesh.',
      },
      after: {
        reference: 'Ezekiel 36:28',
        text: 'You shall dwell in the land that I gave to your fathers, and you shall be my people, and I will be your God.',
      },
    },
  },
  {
    id: 'ezekiel-34-11',
    reference: 'Ezekiel 34:11',
    book: 'Ezekiel',
    chapter: 34,
    verse: 11,
    difficulty: 'medium',
    translations: {
      ESV: 'For thus says the Lord GOD: Behold, I, I myself will search for my sheep and will seek them out.',
      NIV: 'For this is what the Sovereign LORD says: I myself will search for my sheep and look after them.',
      KJV: 'For thus saith the Lord GOD; Behold, I, even I, will both search my sheep, and seek them out.',
      NASB: 'For thus says the Lord GOD, "Behold, I Myself will search for My sheep and seek them out."',
    },
    context: {
      before: {
        reference: 'Ezekiel 34:10',
        text: 'Thus says the Lord GOD, Behold, I am against the shepherds, and I will require my sheep at their hand.',
      },
      after: {
        reference: 'Ezekiel 34:12',
        text: 'As a shepherd seeks out his flock when he is among his sheep that have been scattered, so will I seek out my sheep.',
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
  {
    id: 'daniel-7-14',
    reference: 'Daniel 7:14',
    book: 'Daniel',
    chapter: 7,
    verse: 14,
    difficulty: 'hard',
    translations: {
      ESV: 'And to him was given dominion and glory and a kingdom, that all peoples, nations, and languages should serve him; his dominion is an everlasting dominion, which shall not pass away, and his kingdom one that shall not be destroyed.',
      NIV: 'He was given authority, glory and sovereign power; all nations and peoples of every language worshiped him. His dominion is an everlasting dominion that will not pass away, and his kingdom is one that will never be destroyed.',
      KJV: 'And there was given him dominion, and glory, and a kingdom, that all people, nations, and languages, should serve him: his dominion is an everlasting dominion, which shall not pass away, and his kingdom that which shall not be destroyed.',
      NASB: 'And to Him was given dominion, glory and a kingdom, that all the peoples, nations and men of every language might serve Him. His dominion is an everlasting dominion which will not pass away; and His kingdom is one which will not be destroyed.',
    },
    context: {
      before: {
        reference: 'Daniel 7:13',
        text: 'I saw in the night visions, and behold, with the clouds of heaven there came one like a son of man, and he came to the Ancient of Days.',
      },
      after: {
        reference: 'Daniel 7:15',
        text: 'As for me, Daniel, my spirit within me was anxious, and the visions of my head alarmed me.',
      },
    },
  },
  {
    id: 'daniel-4-35',
    reference: 'Daniel 4:35',
    book: 'Daniel',
    chapter: 4,
    verse: 35,
    difficulty: 'medium',
    translations: {
      ESV: 'All the inhabitants of the earth are accounted as nothing, and he does according to his will among the host of heaven and among the inhabitants of the earth; and none can stay his hand or say to him, "What have you done?"',
      NIV: 'All the peoples of the earth are regarded as nothing. He does as he pleases with the powers of heaven and the peoples of the earth. No one can hold back his hand or say to him: "What have you done?"',
      KJV: 'And all the inhabitants of the earth are reputed as nothing: and he doeth according to his will in the army of heaven, and among the inhabitants of the earth: and none can stay his hand, or say unto him, What doest thou?',
      NASB: 'All the inhabitants of the earth are accounted as nothing, but He does according to His will in the host of heaven and among the inhabitants of earth; and no one can ward off His hand or say to Him, "What have You done?"',
    },
    context: {
      before: {
        reference: 'Daniel 4:34',
        text: 'At the end of the days I, Nebuchadnezzar, lifted my eyes to heaven, and my reason returned to me, and I blessed the Most High.',
      },
      after: {
        reference: 'Daniel 4:36',
        text: 'At the same time my reason returned to me, and for the glory of my kingdom, my majesty and splendor returned to me.',
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
  {
    id: 'hosea-14-4',
    reference: 'Hosea 14:4',
    book: 'Hosea',
    chapter: 14,
    verse: 4,
    difficulty: 'medium',
    translations: {
      ESV: 'I will heal their apostasy; I will love them freely, for my anger has turned from them.',
      NIV: 'I will heal their waywardness and love them freely, for my anger has turned away from them.',
      KJV: 'I will heal their backsliding, I will love them freely: for mine anger is turned away from him.',
      NASB: 'I will heal their apostasy, I will love them freely, for My anger has turned away from them.',
    },
    context: {
      before: {
        reference: 'Hosea 14:3',
        text: 'Assyria shall not save us; we will not ride on horses; and we will say no more, "Our God," to the work of our hands.',
      },
      after: {
        reference: 'Hosea 14:5',
        text: 'I will be like the dew to Israel; he shall blossom like the lily; he shall take root like the trees of Lebanon.',
      },
    },
  },
  {
    id: 'hosea-2-19',
    reference: 'Hosea 2:19',
    book: 'Hosea',
    chapter: 2,
    verse: 19,
    difficulty: 'medium',
    translations: {
      ESV: 'And I will betroth you to me forever. I will betroth you to me in righteousness and in justice, in steadfast love and in mercy.',
      NIV: 'I will betroth you to me forever; I will betroth you in righteousness and justice, in love and compassion.',
      KJV: 'And I will betroth thee unto me for ever; yea, I will betroth thee unto me in righteousness, and in judgment, and in lovingkindness, and in mercies.',
      NASB: 'I will betroth you to Me forever; yes, I will betroth you to Me in righteousness and in justice, in lovingkindness and in compassion.',
    },
    context: {
      before: {
        reference: 'Hosea 2:18',
        text: 'And I will make for them a covenant on that day with the beasts of the field, the birds of the heavens, and the creeping things of the ground.',
      },
      after: {
        reference: 'Hosea 2:20',
        text: 'I will betroth you to me in faithfulness. And you shall know the LORD.',
      },
    },
  },

  // ============ JOEL ============
  {
    id: 'joel-2-12',
    reference: 'Joel 2:12',
    book: 'Joel',
    chapter: 2,
    verse: 12,
    difficulty: 'medium',
    translations: {
      ESV: '"Yet even now," declares the LORD, "return to me with all your heart, with fasting, with weeping, and with mourning."',
      NIV: '"Even now," declares the LORD, "return to me with all your heart, with fasting and weeping and mourning."',
      KJV: 'Therefore also now, saith the LORD, turn ye even to me with all your heart, and with fasting, and with weeping, and with mourning.',
      NASB: '"Yet even now," declares the LORD, "Return to Me with all your heart, and with fasting, weeping and mourning."',
    },
    context: {
      before: {
        reference: 'Joel 2:11',
        text: 'The LORD utters his voice before his army, for his camp is exceedingly great; he who executes his word is powerful.',
      },
      after: {
        reference: 'Joel 2:13',
        text: 'And rend your hearts and not your garments. Return to the LORD your God, for he is gracious and merciful.',
      },
    },
  },
  {
    id: 'joel-2-13',
    reference: 'Joel 2:13',
    book: 'Joel',
    chapter: 2,
    verse: 13,
    difficulty: 'medium',
    translations: {
      ESV: 'And rend your hearts and not your garments. Return to the LORD your God, for he is gracious and merciful, slow to anger, and abounding in steadfast love; and he relents over disaster.',
      NIV: 'Rend your heart and not your garments. Return to the LORD your God, for he is gracious and compassionate, slow to anger and abounding in love, and he relents from sending calamity.',
      KJV: 'And rend your heart, and not your garments, and turn unto the LORD your God: for he is gracious and merciful, slow to anger, and of great kindness, and repenteth him of the evil.',
      NASB: 'And rend your heart and not your garments. Now return to the LORD your God, for He is gracious and compassionate, slow to anger, abounding in lovingkindness and relenting of evil.',
    },
    context: {
      before: {
        reference: 'Joel 2:12',
        text: '"Yet even now," declares the LORD, "return to me with all your heart, with fasting, with weeping, and with mourning."',
      },
      after: {
        reference: 'Joel 2:14',
        text: 'Who knows whether he will not turn and relent, and leave a blessing behind him, a grain offering and a drink offering for the LORD your God?',
      },
    },
  },
  {
    id: 'joel-2-32',
    reference: 'Joel 2:32',
    book: 'Joel',
    chapter: 2,
    verse: 32,
    difficulty: 'medium',
    translations: {
      ESV: 'And it shall come to pass that everyone who calls on the name of the LORD shall be saved. For in Mount Zion and in Jerusalem there shall be those who escape, as the LORD has said, and among the survivors shall be those whom the LORD calls.',
      NIV: 'And everyone who calls on the name of the LORD will be saved; for on Mount Zion and in Jerusalem there will be deliverance, as the LORD has said, even among the survivors whom the LORD calls.',
      KJV: 'And it shall come to pass, that whosoever shall call on the name of the LORD shall be delivered: for in mount Zion and in Jerusalem shall be deliverance, as the LORD hath said, and in the remnant whom the LORD shall call.',
      NASB: 'And it will come about that whoever calls on the name of the LORD will be delivered; for on Mount Zion and in Jerusalem there will be those who escape, as the LORD has said, even among the survivors whom the LORD calls.',
    },
    context: {
      before: {
        reference: 'Joel 2:31',
        text: 'The sun shall be turned to darkness, and the moon to blood, before the great and awesome day of the LORD comes.',
      },
      after: {
        reference: 'Joel 3:1',
        text: 'For behold, in those days and at that time, when I restore the fortunes of Judah and Jerusalem.',
      },
    },
  },
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
  {
    id: 'amos-3-3',
    reference: 'Amos 3:3',
    book: 'Amos',
    chapter: 3,
    verse: 3,
    difficulty: 'easy',
    translations: {
      ESV: 'Do two walk together, unless they have agreed to meet?',
      NIV: 'Do two walk together unless they have agreed to do so?',
      KJV: 'Can two walk together, except they be agreed?',
      NASB: 'Do two men walk together unless they have made an appointment?',
    },
    context: {
      before: {
        reference: 'Amos 3:2',
        text: 'You only have I known of all the families of the earth; therefore I will punish you for all your iniquities.',
      },
      after: {
        reference: 'Amos 3:4',
        text: 'Does a lion roar in the forest, when he has no prey?',
      },
    },
  },
  {
    id: 'amos-3-7',
    reference: 'Amos 3:7',
    book: 'Amos',
    chapter: 3,
    verse: 7,
    difficulty: 'medium',
    translations: {
      ESV: 'For the Lord GOD does nothing without revealing his secret to his servants the prophets.',
      NIV: 'Surely the Sovereign LORD does nothing without revealing his plan to his servants the prophets.',
      KJV: 'Surely the Lord GOD will do nothing, but he revealeth his secret unto his servants the prophets.',
      NASB: 'Surely the Lord GOD does nothing unless He reveals His secret counsel to His servants the prophets.',
    },
    context: {
      before: {
        reference: 'Amos 3:6',
        text: 'Is a trumpet blown in a city, and the people are not afraid? Does disaster come to a city, unless the LORD has done it?',
      },
      after: {
        reference: 'Amos 3:8',
        text: 'The lion has roared; who will not fear? The Lord GOD has spoken; who can but prophesy?',
      },
    },
  },
  {
    id: 'amos-4-12',
    reference: 'Amos 4:12',
    book: 'Amos',
    chapter: 4,
    verse: 12,
    difficulty: 'medium',
    translations: {
      ESV: 'Therefore thus I will do to you, O Israel; because I will do this to you, prepare to meet your God, O Israel!',
      NIV: 'Therefore this is what I will do to you, Israel, and because I will do this to you, Israel, prepare to meet your God.',
      KJV: 'Therefore thus will I do unto thee, O Israel: and because I will do this unto thee, prepare to meet thy God, O Israel.',
      NASB: 'Therefore thus I will do to you, O Israel; because I will do this to you, prepare to meet your God, O Israel.',
    },
    context: {
      before: {
        reference: 'Amos 4:11',
        text: 'I overthrew some of you, as when God overthrew Sodom and Gomorrah, and you were as a brand plucked out of the burning; yet you did not return to me.',
      },
      after: {
        reference: 'Amos 4:13',
        text: 'For behold, he who forms the mountains and creates the wind, and declares to man what is his thought, who makes the morning darkness.',
      },
    },
  },

  // ============ OBADIAH ============
  {
    id: 'obadiah-1-15',
    reference: 'Obadiah 15',
    book: 'Obadiah',
    chapter: 1,
    verse: 15,
    difficulty: 'medium',
    translations: {
      ESV: 'For the day of the LORD is near upon all the nations. As you have done, it shall be done to you; your deeds shall return on your own head.',
      NIV: 'The day of the LORD is near for all nations. As you have done, it will be done to you; your deeds will return upon your own head.',
      KJV: 'For the day of the LORD is near upon all the heathen: as thou hast done, it shall be done unto thee: thy reward shall return upon thine own head.',
      NASB: 'For the day of the LORD draws near on all the nations. As you have done, it will be done to you. Your dealings will return on your own head.',
    },
    context: {
      before: {
        reference: 'Obadiah 14',
        text: 'Do not stand at the crossroads to cut off his fugitives; do not hand over his survivors in the day of distress.',
      },
      after: {
        reference: 'Obadiah 16',
        text: 'For as you have drunk on my holy mountain, so all the nations shall drink continually.',
      },
    },
  },
  {
    id: 'obadiah-1-17',
    reference: 'Obadiah 17',
    book: 'Obadiah',
    chapter: 1,
    verse: 17,
    difficulty: 'medium',
    translations: {
      ESV: 'But in Mount Zion there shall be those who escape, and it shall be holy, and the house of Jacob shall possess their own possessions.',
      NIV: 'But on Mount Zion will be deliverance; it will be holy, and Jacob will possess his inheritance.',
      KJV: 'But upon mount Zion shall be deliverance, and there shall be holiness; and the house of Jacob shall possess their possessions.',
      NASB: 'But on Mount Zion there will be those who escape, and it will be holy. And the house of Jacob will possess their possessions.',
    },
    context: {
      before: {
        reference: 'Obadiah 16',
        text: 'For as you have drunk on my holy mountain, so all the nations shall drink continually.',
      },
      after: {
        reference: 'Obadiah 18',
        text: 'The house of Jacob shall be a fire, and the house of Joseph a flame, and the house of Esau stubble.',
      },
    },
  },
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
    id: 'jonah-1-9',
    reference: 'Jonah 1:9',
    book: 'Jonah',
    chapter: 1,
    verse: 9,
    difficulty: 'easy',
    translations: {
      ESV: 'And he said to them, "I am a Hebrew, and I fear the LORD, the God of heaven, who made the sea and the dry land."',
      NIV: 'He answered, "I am a Hebrew and I worship the LORD, the God of heaven, who made the sea and the dry land."',
      KJV: 'And he said unto them, I am an Hebrew; and I fear the LORD, the God of heaven, which hath made the sea and the dry land.',
      NASB: 'He said to them, "I am a Hebrew, and I fear the LORD God of heaven who made the sea and the dry land."',
    },
    context: {
      before: {
        reference: 'Jonah 1:8',
        text: 'Then they said to him, "Tell us on whose account this evil has come upon us. What is your occupation? And where do you come from?"',
      },
      after: {
        reference: 'Jonah 1:10',
        text: 'Then the men were exceedingly afraid and said to him, "What is this that you have done!"',
      },
    },
  },
  {
    id: 'jonah-3-10',
    reference: 'Jonah 3:10',
    book: 'Jonah',
    chapter: 3,
    verse: 10,
    difficulty: 'medium',
    translations: {
      ESV: 'When God saw what they did, how they turned from their evil way, God relented of the disaster that he had said he would do to them, and he did not do it.',
      NIV: 'When God saw what they did and how they turned from their evil ways, he relented and did not bring on them the destruction he had threatened.',
      KJV: 'And God saw their works, that they turned from their evil way; and God repented of the evil, that he had said that he would do unto them; and he did it not.',
      NASB: 'When God saw their deeds, that they turned from their wicked way, then God relented concerning the calamity which He had declared He would bring upon them. And He did not do it.',
    },
    context: {
      before: {
        reference: 'Jonah 3:9',
        text: 'Who knows? God may turn and relent and turn from his fierce anger, so that we may not perish.',
      },
      after: {
        reference: 'Jonah 4:1',
        text: 'But it displeased Jonah exceedingly, and he was angry.',
      },
    },
  },
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
  {
    id: 'jonah-4-2',
    reference: 'Jonah 4:2',
    book: 'Jonah',
    chapter: 4,
    verse: 2,
    difficulty: 'hard',
    translations: {
      ESV: 'And he prayed to the LORD and said, "O LORD, is not this what I said when I was yet in my country? That is why I made haste to flee to Tarshish; for I knew that you are a gracious God and merciful, slow to anger and abounding in steadfast love, and relenting from disaster."',
      NIV: 'He prayed to the LORD, "Isn\'t this what I said, LORD, when I was still at home? That is what I tried to forestall by fleeing to Tarshish. I knew that you are a gracious and compassionate God, slow to anger and abounding in love, a God who relents from sending calamity."',
      KJV: 'And he prayed unto the LORD, and said, I pray thee, O LORD, was not this my saying, when I was yet in my country? Therefore I fled before unto Tarshish: for I knew that thou art a gracious God, and merciful, slow to anger, and of great kindness, and repentest thee of the evil.',
      NASB: 'He prayed to the LORD and said, "Please LORD, was not this what I said while I was still in my own country? Therefore in order to forestall this I fled to Tarshish, for I knew that You are a gracious and compassionate God, slow to anger and abundant in lovingkindness, and one who relents concerning calamity."',
    },
    context: {
      before: {
        reference: 'Jonah 4:1',
        text: 'But it displeased Jonah exceedingly, and he was angry.',
      },
      after: {
        reference: 'Jonah 4:3',
        text: 'Therefore now, O LORD, please take my life from me, for it is better for me to die than to live.',
      },
    },
  },

  // ============ MICAH ============
  {
    id: 'micah-5-2',
    reference: 'Micah 5:2',
    book: 'Micah',
    chapter: 5,
    verse: 2,
    difficulty: 'medium',
    translations: {
      ESV: 'But you, O Bethlehem Ephrathah, who are too little to be among the clans of Judah, from you shall come forth for me one who is to be ruler in Israel, whose coming forth is from of old, from ancient days.',
      NIV: 'But you, Bethlehem Ephrathah, though you are small among the clans of Judah, out of you will come for me one who will be ruler over Israel, whose origins are from of old, from ancient times.',
      KJV: 'But thou, Bethlehem Ephratah, though thou be little among the thousands of Judah, yet out of thee shall he come forth unto me that is to be ruler in Israel; whose goings forth have been from of old, from everlasting.',
      NASB: 'But as for you, Bethlehem Ephrathah, too little to be among the clans of Judah, from you One will go forth for Me to be ruler in Israel. His goings forth are from long ago, from the days of eternity.',
    },
    context: {
      before: {
        reference: 'Micah 5:1',
        text: 'Now muster your troops, O daughter of troops; siege is laid against us; with a rod they strike the judge of Israel on the cheek.',
      },
      after: {
        reference: 'Micah 5:3',
        text: 'Therefore he shall give them up until the time when she who is in labor has given birth.',
      },
    },
  },
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
  {
    id: 'micah-7-18',
    reference: 'Micah 7:18',
    book: 'Micah',
    chapter: 7,
    verse: 18,
    difficulty: 'medium',
    translations: {
      ESV: 'Who is a God like you, pardoning iniquity and passing over transgression for the remnant of his inheritance? He does not retain his anger forever, because he delights in steadfast love.',
      NIV: 'Who is a God like you, who pardons sin and forgives the transgression of the remnant of his inheritance? You do not stay angry forever but delight to show mercy.',
      KJV: 'Who is a God like unto thee, that pardoneth iniquity, and passeth by the transgression of the remnant of his heritage? he retaineth not his anger for ever, because he delighteth in mercy.',
      NASB: 'Who is a God like You, who pardons iniquity and passes over the rebellious act of the remnant of His possession? He does not retain His anger forever, because He delights in unchanging love.',
    },
    context: {
      before: {
        reference: 'Micah 7:17',
        text: 'They shall lick the dust like a serpent, like the crawling things of the earth.',
      },
      after: {
        reference: 'Micah 7:19',
        text: 'He will again have compassion on us; he will tread our iniquities underfoot. You will cast all our sins into the depths of the sea.',
      },
    },
  },
  {
    id: 'micah-7-19',
    reference: 'Micah 7:19',
    book: 'Micah',
    chapter: 7,
    verse: 19,
    difficulty: 'medium',
    translations: {
      ESV: 'He will again have compassion on us; he will tread our iniquities underfoot. You will cast all our sins into the depths of the sea.',
      NIV: 'You will again have compassion on us; you will tread our sins underfoot and hurl all our iniquities into the depths of the sea.',
      KJV: 'He will turn again, he will have compassion upon us; he will subdue our iniquities; and thou wilt cast all their sins into the depths of the sea.',
      NASB: 'He will again have compassion on us; He will tread our iniquities under foot. Yes, You will cast all their sins into the depths of the sea.',
    },
    context: {
      before: {
        reference: 'Micah 7:18',
        text: 'Who is a God like you, pardoning iniquity and passing over transgression for the remnant of his inheritance?',
      },
      after: {
        reference: 'Micah 7:20',
        text: 'You will show faithfulness to Jacob and steadfast love to Abraham, as you have sworn to our fathers from the days of old.',
      },
    },
  },

  // ============ NAHUM ============
  {
    id: 'nahum-1-2',
    reference: 'Nahum 1:2',
    book: 'Nahum',
    chapter: 1,
    verse: 2,
    difficulty: 'medium',
    translations: {
      ESV: 'The LORD is a jealous and avenging God; the LORD is avenging and wrathful; the LORD takes vengeance on his adversaries and keeps wrath for his enemies.',
      NIV: 'The LORD is a jealous and avenging God; the LORD takes vengeance and is filled with wrath. The LORD takes vengeance on his foes and vents his wrath against his enemies.',
      KJV: 'God is jealous, and the LORD revengeth; the LORD revengeth, and is furious; the LORD will take vengeance on his adversaries, and he reserveth wrath for his enemies.',
      NASB: 'A jealous and avenging God is the LORD; the LORD is avenging and wrathful. The LORD takes vengeance on His adversaries, and He reserves wrath for His enemies.',
    },
    context: {
      before: {
        reference: 'Nahum 1:1',
        text: 'An oracle concerning Nineveh. The book of the vision of Nahum of Elkosh.',
      },
      after: {
        reference: 'Nahum 1:3',
        text: 'The LORD is slow to anger and great in power, and the LORD will by no means clear the guilty.',
      },
    },
  },
  {
    id: 'nahum-1-15',
    reference: 'Nahum 1:15',
    book: 'Nahum',
    chapter: 1,
    verse: 15,
    difficulty: 'medium',
    translations: {
      ESV: 'Behold, upon the mountains, the feet of him who brings good news, who publishes peace! Keep your feasts, O Judah; fulfill your vows, for never again shall the worthless pass through you; he is utterly cut off.',
      NIV: 'Look, there on the mountains, the feet of one who brings good news, who proclaims peace! Celebrate your festivals, Judah, and fulfill your vows. No more will the wicked invade you; they will be completely destroyed.',
      KJV: 'Behold upon the mountains the feet of him that bringeth good tidings, that publisheth peace! O Judah, keep thy solemn feasts, perform thy vows: for the wicked shall no more pass through thee; he is utterly cut off.',
      NASB: 'Behold, on the mountains the feet of him who brings good news, who announces peace! Celebrate your feasts, O Judah; pay your vows. For never again will the wicked one pass through you; he is cut off completely.',
    },
    context: {
      before: {
        reference: 'Nahum 1:14',
        text: 'The LORD has given commandment about you: "No more shall your name be perpetuated; from the house of your gods I will cut off the carved image."',
      },
      after: {
        reference: 'Nahum 2:1',
        text: 'The scatterer has come up against you. Man the ramparts; watch the road; dress for battle; collect all your strength.',
      },
    },
  },
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
  {
    id: 'nahum-1-3',
    reference: 'Nahum 1:3',
    book: 'Nahum',
    chapter: 1,
    verse: 3,
    difficulty: 'medium',
    translations: {
      ESV: 'The LORD is slow to anger and great in power, and the LORD will by no means clear the guilty. His way is in whirlwind and storm, and the clouds are the dust of his feet.',
      NIV: 'The LORD is slow to anger but great in power; the LORD will not leave the guilty unpunished. His way is in the whirlwind and the storm, and clouds are the dust of his feet.',
      KJV: 'The LORD is slow to anger, and great in power, and will not at all acquit the wicked: the LORD hath his way in the whirlwind and in the storm, and the clouds are the dust of his feet.',
      NASB: 'The LORD is slow to anger and great in power, and the LORD will by no means leave the guilty unpunished. In whirlwind and storm is His way, and clouds are the dust beneath His feet.',
    },
    context: {
      before: {
        reference: 'Nahum 1:2',
        text: 'The LORD is a jealous and avenging God; the LORD is avenging and wrathful.',
      },
      after: {
        reference: 'Nahum 1:4',
        text: 'He rebukes the sea and makes it dry; he dries up all the rivers.',
      },
    },
  },

  // ============ HABAKKUK ============
  {
    id: 'habakkuk-2-14',
    reference: 'Habakkuk 2:14',
    book: 'Habakkuk',
    chapter: 2,
    verse: 14,
    difficulty: 'medium',
    translations: {
      ESV: 'For the earth will be filled with the knowledge of the glory of the LORD as the waters cover the sea.',
      NIV: 'For the earth will be filled with the knowledge of the glory of the LORD as the waters cover the sea.',
      KJV: 'For the earth shall be filled with the knowledge of the glory of the LORD, as the waters cover the sea.',
      NASB: 'For the earth will be filled with the knowledge of the glory of the LORD, as the waters cover the sea.',
    },
    context: {
      before: {
        reference: 'Habakkuk 2:13',
        text: 'Behold, is it not from the LORD of hosts that peoples labor merely for fire, and nations weary themselves for nothing?',
      },
      after: {
        reference: 'Habakkuk 2:15',
        text: 'Woe to him who makes his neighbors drink—you pour out your wrath and make them drunk.',
      },
    },
  },
  {
    id: 'habakkuk-3-19',
    reference: 'Habakkuk 3:19',
    book: 'Habakkuk',
    chapter: 3,
    verse: 19,
    difficulty: 'medium',
    translations: {
      ESV: 'GOD, the Lord, is my strength; he makes my feet like the deer\'s; he makes me tread on my high places.',
      NIV: 'The Sovereign LORD is my strength; he makes my feet like the feet of a deer, he enables me to tread on the heights.',
      KJV: 'The LORD God is my strength, and he will make my feet like hinds\' feet, and he will make me to walk upon mine high places.',
      NASB: 'The Lord GOD is my strength, and He has made my feet like hinds\' feet, and makes me walk on my high places.',
    },
    context: {
      before: {
        reference: 'Habakkuk 3:18',
        text: 'Yet I will rejoice in the LORD; I will take joy in the God of my salvation.',
      },
    },
  },
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
  {
    id: 'habakkuk-3-18',
    reference: 'Habakkuk 3:18',
    book: 'Habakkuk',
    chapter: 3,
    verse: 18,
    difficulty: 'easy',
    translations: {
      ESV: 'Yet I will rejoice in the LORD; I will take joy in the God of my salvation.',
      NIV: 'Yet I will rejoice in the LORD, I will be joyful in God my Savior.',
      KJV: 'Yet I will rejoice in the LORD, I will joy in the God of my salvation.',
      NASB: 'Yet I will exult in the LORD, I will rejoice in the God of my salvation.',
    },
    context: {
      before: {
        reference: 'Habakkuk 3:17',
        text: 'Though the fig tree should not blossom, nor fruit be on the vines, the produce of the olive fail and the fields yield no food.',
      },
      after: {
        reference: 'Habakkuk 3:19',
        text: 'GOD, the Lord, is my strength; he makes my feet like the deer\'s; he makes me tread on my high places.',
      },
    },
  },

  // ============ ZEPHANIAH ============
  {
    id: 'zephaniah-1-7',
    reference: 'Zephaniah 1:7',
    book: 'Zephaniah',
    chapter: 1,
    verse: 7,
    difficulty: 'medium',
    translations: {
      ESV: 'Be silent before the Lord GOD! For the day of the LORD is near; the LORD has prepared a sacrifice and consecrated his guests.',
      NIV: 'Be silent before the Sovereign LORD, for the day of the LORD is near. The LORD has prepared a sacrifice; he has consecrated those he has invited.',
      KJV: 'Hold thy peace at the presence of the Lord GOD: for the day of the LORD is at hand: for the LORD hath prepared a sacrifice, he hath bid his guests.',
      NASB: 'Be silent before the Lord GOD! For the day of the LORD is near, for the LORD has prepared a sacrifice, He has consecrated His guests.',
    },
    context: {
      before: {
        reference: 'Zephaniah 1:6',
        text: 'Those who have turned back from following the LORD, who do not seek the LORD or inquire of him.',
      },
      after: {
        reference: 'Zephaniah 1:8',
        text: 'And on the day of the LORD\'s sacrifice—I will punish the officials and the king\'s sons.',
      },
    },
  },
  {
    id: 'zephaniah-3-9',
    reference: 'Zephaniah 3:9',
    book: 'Zephaniah',
    chapter: 3,
    verse: 9,
    difficulty: 'medium',
    translations: {
      ESV: 'For at that time I will change the speech of the peoples to a pure speech, that all of them may call upon the name of the LORD and serve him with one accord.',
      NIV: 'Then I will purify the lips of the peoples, that all of them may call on the name of the LORD and serve him shoulder to shoulder.',
      KJV: 'For then will I turn to the people a pure language, that they may all call upon the name of the LORD, to serve him with one consent.',
      NASB: 'For then I will give to the peoples purified lips, that all of them may call on the name of the LORD, to serve Him shoulder to shoulder.',
    },
    context: {
      before: {
        reference: 'Zephaniah 3:8',
        text: 'Therefore wait for me," declares the LORD, "for the day when I rise up to seize the prey.',
      },
      after: {
        reference: 'Zephaniah 3:10',
        text: 'From beyond the rivers of Cush my worshipers, the daughter of my dispersed ones, shall bring my offering.',
      },
    },
  },
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
  {
    id: 'zephaniah-2-3',
    reference: 'Zephaniah 2:3',
    book: 'Zephaniah',
    chapter: 2,
    verse: 3,
    difficulty: 'medium',
    translations: {
      ESV: 'Seek the LORD, all you humble of the land, who do his just commands; seek righteousness; seek humility; perhaps you may be hidden on the day of the anger of the LORD.',
      NIV: 'Seek the LORD, all you humble of the land, you who do what he commands. Seek righteousness, seek humility; perhaps you will be sheltered on the day of the LORD\'s anger.',
      KJV: 'Seek ye the LORD, all ye meek of the earth, which have wrought his judgment; seek righteousness, seek meekness: it may be ye shall be hid in the day of the LORD\'s anger.',
      NASB: 'Seek the LORD, all you humble of the earth who have carried out His ordinances; seek righteousness, seek humility. Perhaps you will be hidden in the day of the LORD\'s anger.',
    },
    context: {
      before: {
        reference: 'Zephaniah 2:2',
        text: 'Before the decree takes effect—before the day passes away like chaff—before there comes upon you the burning anger of the LORD.',
      },
      after: {
        reference: 'Zephaniah 2:4',
        text: 'For Gaza shall be deserted, and Ashkelon shall become a desolation.',
      },
    },
  },

  // ============ HAGGAI ============
  {
    id: 'haggai-1-7',
    reference: 'Haggai 1:7',
    book: 'Haggai',
    chapter: 1,
    verse: 7,
    difficulty: 'easy',
    translations: {
      ESV: 'Thus says the LORD of hosts: Consider your ways.',
      NIV: 'This is what the LORD Almighty says: "Give careful thought to your ways."',
      KJV: 'Thus saith the LORD of hosts; Consider your ways.',
      NASB: 'Thus says the LORD of hosts, "Consider your ways!"',
    },
    context: {
      before: {
        reference: 'Haggai 1:6',
        text: 'You have sown much, and harvested little. You eat, but you never have enough; you drink, but you never have your fill.',
      },
      after: {
        reference: 'Haggai 1:8',
        text: 'Go up to the hills and bring wood and build the house, that I may take pleasure in it and that I may be glorified, says the LORD.',
      },
    },
  },
  {
    id: 'haggai-2-6',
    reference: 'Haggai 2:6',
    book: 'Haggai',
    chapter: 2,
    verse: 6,
    difficulty: 'medium',
    translations: {
      ESV: 'For thus says the LORD of hosts: Yet once more, in a little while, I will shake the heavens and the earth and the sea and the dry land.',
      NIV: 'This is what the LORD Almighty says: "In a little while I will once more shake the heavens and the earth, the sea and the dry land."',
      KJV: 'For thus saith the LORD of hosts; Yet once, it is a little while, and I will shake the heavens, and the earth, and the sea, and the dry land.',
      NASB: 'For thus says the LORD of hosts, "Once more in a little while, I am going to shake the heavens and the earth, the sea also and the dry land."',
    },
    context: {
      before: {
        reference: 'Haggai 2:5',
        text: 'According to the covenant that I made with you when you came out of Egypt. My Spirit remains in your midst. Fear not.',
      },
      after: {
        reference: 'Haggai 2:7',
        text: 'And I will shake all nations, so that the treasures of all nations shall come in, and I will fill this house with glory, says the LORD of hosts.',
      },
    },
  },
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
  {
    id: 'haggai-1-5',
    reference: 'Haggai 1:5',
    book: 'Haggai',
    chapter: 1,
    verse: 5,
    difficulty: 'easy',
    translations: {
      ESV: 'Now, therefore, thus says the LORD of hosts: Consider your ways.',
      NIV: 'Now this is what the LORD Almighty says: "Give careful thought to your ways."',
      KJV: 'Now therefore thus saith the LORD of hosts; Consider your ways.',
      NASB: 'Now therefore, thus says the LORD of hosts, "Consider your ways!"',
    },
    context: {
      before: {
        reference: 'Haggai 1:4',
        text: 'Is it a time for you yourselves to dwell in your paneled houses, while this house lies in ruins?',
      },
      after: {
        reference: 'Haggai 1:6',
        text: 'You have sown much, and harvested little. You eat, but you never have enough; you drink, but you never have your fill.',
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
  {
    id: 'zechariah-9-9',
    reference: 'Zechariah 9:9',
    book: 'Zechariah',
    chapter: 9,
    verse: 9,
    difficulty: 'hard',
    translations: {
      ESV: 'Rejoice greatly, O daughter of Zion! Shout aloud, O daughter of Jerusalem! Behold, your king is coming to you; righteous and having salvation is he, humble and mounted on a donkey, on a colt, the foal of a donkey.',
      NIV: 'Rejoice greatly, Daughter Zion! Shout, Daughter Jerusalem! See, your king comes to you, righteous and victorious, lowly and riding on a donkey, on a colt, the foal of a donkey.',
      KJV: 'Rejoice greatly, O daughter of Zion; shout, O daughter of Jerusalem: behold, thy King cometh unto thee: he is just, and having salvation; lowly, and riding upon an ass, and upon a colt the foal of an ass.',
      NASB: 'Rejoice greatly, O daughter of Zion! Shout in triumph, O daughter of Jerusalem! Behold, your king is coming to you; He is just and endowed with salvation, humble, and mounted on a donkey, even on a colt, the foal of a donkey.',
    },
    context: {
      before: {
        reference: 'Zechariah 9:8',
        text: 'Then I will encamp at my house as a guard, so that none shall march to and fro.',
      },
      after: {
        reference: 'Zechariah 9:10',
        text: 'I will cut off the chariot from Ephraim and the war horse from Jerusalem; and the battle bow shall be cut off.',
      },
    },
  },
  {
    id: 'zechariah-12-10',
    reference: 'Zechariah 12:10',
    book: 'Zechariah',
    chapter: 12,
    verse: 10,
    difficulty: 'hard',
    translations: {
      ESV: 'And I will pour out on the house of David and the inhabitants of Jerusalem a spirit of grace and pleas for mercy, so that, when they look on me, on him whom they have pierced, they shall mourn for him, as one mourns for an only child, and weep bitterly over him, as one weeps over a firstborn.',
      NIV: 'And I will pour out on the house of David and the inhabitants of Jerusalem a spirit of grace and supplication. They will look on me, the one they have pierced, and they will mourn for him as one mourns for an only child, and grieve bitterly for him as one grieves for a firstborn son.',
      KJV: 'And I will pour upon the house of David, and upon the inhabitants of Jerusalem, the spirit of grace and of supplications: and they shall look upon me whom they have pierced, and they shall mourn for him, as one mourneth for his only son, and shall be in bitterness for him, as one that is in bitterness for his firstborn.',
      NASB: 'I will pour out on the house of David and on the inhabitants of Jerusalem, the Spirit of grace and of supplication, so that they will look on Me whom they have pierced; and they will mourn for Him, as one mourns for an only son, and they will weep bitterly over Him like the bitter weeping over a firstborn.',
    },
    context: {
      before: {
        reference: 'Zechariah 12:9',
        text: 'And on that day I will seek to destroy all the nations that come against Jerusalem.',
      },
      after: {
        reference: 'Zechariah 12:11',
        text: 'On that day the mourning in Jerusalem will be as great as the mourning for Hadad-rimmon in the plain of Megiddo.',
      },
    },
  },
  {
    id: 'zechariah-13-9',
    reference: 'Zechariah 13:9',
    book: 'Zechariah',
    chapter: 13,
    verse: 9,
    difficulty: 'medium',
    translations: {
      ESV: 'And I will put this third into the fire, and refine them as one refines silver, and test them as gold is tested. They will call upon my name, and I will answer them. I will say, "They are my people"; and they will say, "The LORD is my God."',
      NIV: 'This third I will put into the fire; I will refine them like silver and test them like gold. They will call on my name and I will answer them; I will say, "They are my people," and they will say, "The LORD is our God."',
      KJV: 'And I will bring the third part through the fire, and will refine them as silver is refined, and will try them as gold is tried: they shall call on my name, and I will hear them: I will say, It is my people: and they shall say, The LORD is my God.',
      NASB: 'And I will bring the third part through the fire, refine them as silver is refined, and test them as gold is tested. They will call on My name, and I will answer them; I will say, "They are My people," and they will say, "The LORD is my God."',
    },
    context: {
      before: {
        reference: 'Zechariah 13:8',
        text: 'In the whole land, declares the LORD, two thirds shall be cut off and perish, and one third shall be left alive.',
      },
      after: {
        reference: 'Zechariah 14:1',
        text: 'Behold, a day is coming for the LORD, when the spoil taken from you will be divided in your midst.',
      },
    },
  },

  // ============ MALACHI ============
  {
    id: 'malachi-3-1',
    reference: 'Malachi 3:1',
    book: 'Malachi',
    chapter: 3,
    verse: 1,
    difficulty: 'medium',
    translations: {
      ESV: 'Behold, I send my messenger, and he will prepare the way before me. And the Lord whom you seek will suddenly come to his temple; and the messenger of the covenant in whom you delight, behold, he is coming, says the LORD of hosts.',
      NIV: '"I will send my messenger, who will prepare the way before me. Then suddenly the Lord you are seeking will come to his temple; the messenger of the covenant, whom you desire, will come," says the LORD Almighty.',
      KJV: 'Behold, I will send my messenger, and he shall prepare the way before me: and the Lord, whom ye seek, shall suddenly come to his temple, even the messenger of the covenant, whom ye delight in: behold, he shall come, saith the LORD of hosts.',
      NASB: '"Behold, I am going to send My messenger, and he will clear the way before Me. And the Lord, whom you seek, will suddenly come to His temple; and the messenger of the covenant, in whom you delight, behold, He is coming," says the LORD of hosts.',
    },
    context: {
      before: {
        reference: 'Malachi 2:17',
        text: 'You have wearied the LORD with your words. But you say, "How have we wearied him?"',
      },
      after: {
        reference: 'Malachi 3:2',
        text: 'But who can endure the day of his coming, and who can stand when he appears?',
      },
    },
  },
  {
    id: 'malachi-3-10',
    reference: 'Malachi 3:10',
    book: 'Malachi',
    chapter: 3,
    verse: 10,
    difficulty: 'hard',
    translations: {
      ESV: 'Bring the full tithe into the storehouse, that there may be food in my house. And thereby put me to the test, says the LORD of hosts, if I will not open the windows of heaven for you and pour down for you a blessing until there is no more need.',
      NIV: 'Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this," says the LORD Almighty, "and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it.',
      KJV: 'Bring ye all the tithes into the storehouse, that there may be meat in mine house, and prove me now herewith, saith the LORD of hosts, if I will not open you the windows of heaven, and pour you out a blessing, that there shall not be room enough to receive it.',
      NASB: '"Bring the whole tithe into the storehouse, so that there may be food in My house, and test Me now in this," says the LORD of hosts, "if I will not open for you the windows of heaven and pour out for you a blessing until it overflows."',
    },
    context: {
      before: {
        reference: 'Malachi 3:9',
        text: 'You are cursed with a curse, for you are robbing me, the whole nation of you.',
      },
      after: {
        reference: 'Malachi 3:11',
        text: 'I will rebuke the devourer for you, so that it will not destroy the fruits of your soil.',
      },
    },
  },
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
  {
    id: 'malachi-4-2',
    reference: 'Malachi 4:2',
    book: 'Malachi',
    chapter: 4,
    verse: 2,
    difficulty: 'medium',
    translations: {
      ESV: 'But for you who fear my name, the sun of righteousness shall rise with healing in its wings. You shall go out leaping like calves from the stall.',
      NIV: 'But for you who revere my name, the sun of righteousness will rise with healing in its rays. And you will go out and frolic like well-fed calves.',
      KJV: 'But unto you that fear my name shall the Sun of righteousness arise with healing in his wings; and ye shall go forth, and grow up as calves of the stall.',
      NASB: 'But for you who fear My name, the sun of righteousness will rise with healing in its wings; and you will go forth and skip about like calves from the stall.',
    },
    context: {
      before: {
        reference: 'Malachi 4:1',
        text: 'For behold, the day is coming, burning like an oven, when all the arrogant and all evildoers will be stubble.',
      },
      after: {
        reference: 'Malachi 4:3',
        text: 'And you shall tread down the wicked, for they will be ashes under the soles of your feet, on the day when I act, says the LORD of hosts.',
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
  {
    id: 'mark-1-15',
    reference: 'Mark 1:15',
    book: 'Mark',
    chapter: 1,
    verse: 15,
    difficulty: 'easy',
    translations: {
      ESV: 'The time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel.',
      NIV: '"The time has come," he said. "The kingdom of God has come near. Repent and believe the good news!"',
      KJV: 'And saying, The time is fulfilled, and the kingdom of God is at hand: repent ye, and believe the gospel.',
      NASB: 'and saying, "The time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel."',
    },
    context: {
      before: {
        reference: 'Mark 1:14',
        text: 'Now after John was arrested, Jesus came into Galilee, proclaiming the gospel of God.',
      },
      after: {
        reference: 'Mark 1:16',
        text: 'Passing alongside the Sea of Galilee, he saw Simon and Andrew the brother of Simon casting a net into the sea, for they were fishermen.',
      },
    },
  },
  {
    id: 'mark-8-35',
    reference: 'Mark 8:35',
    book: 'Mark',
    chapter: 8,
    verse: 35,
    difficulty: 'medium',
    translations: {
      ESV: 'For whoever would save his life will lose it, but whoever loses his life for my sake and the gospel\'s will save it.',
      NIV: 'For whoever wants to save their life will lose it, but whoever loses their life for me and for the gospel will save it.',
      KJV: 'For whosoever will save his life shall lose it; but whosoever shall lose his life for my sake and the gospel\'s, the same shall save it.',
      NASB: 'For whoever wishes to save his life will lose it, but whoever loses his life for My sake and the gospel\'s will save it.',
    },
    context: {
      before: {
        reference: 'Mark 8:34',
        text: 'And calling the crowd to him with his disciples, he said to them, "If anyone would come after me, let him deny himself and take up his cross and follow me."',
      },
      after: {
        reference: 'Mark 8:36',
        text: 'For what does it profit a man to gain the whole world and forfeit his soul?',
      },
    },
  },
  {
    id: 'mark-12-30',
    reference: 'Mark 12:30',
    book: 'Mark',
    chapter: 12,
    verse: 30,
    difficulty: 'medium',
    translations: {
      ESV: 'And you shall love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength.',
      NIV: 'Love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength.',
      KJV: 'And thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind, and with all thy strength: this is the first commandment.',
      NASB: 'AND YOU SHALL LOVE THE LORD YOUR GOD WITH ALL YOUR HEART, AND WITH ALL YOUR SOUL, AND WITH ALL YOUR MIND, AND WITH ALL YOUR STRENGTH.',
    },
    context: {
      before: {
        reference: 'Mark 12:29',
        text: 'Jesus answered, "The most important is, \'Hear, O Israel: The Lord our God, the Lord is one."',
      },
      after: {
        reference: 'Mark 12:31',
        text: 'The second is this: \'You shall love your neighbor as yourself.\' There is no other commandment greater than these.',
      },
    },
  },
  {
    id: 'mark-16-15',
    reference: 'Mark 16:15',
    book: 'Mark',
    chapter: 16,
    verse: 15,
    difficulty: 'easy',
    translations: {
      ESV: 'And he said to them, "Go into all the world and proclaim the gospel to the whole creation."',
      NIV: 'He said to them, "Go into all the world and preach the gospel to all creation."',
      KJV: 'And he said unto them, Go ye into all the world, and preach the gospel to every creature.',
      NASB: 'And He said to them, "Go into all the world and preach the gospel to all creation."',
    },
    context: {
      before: {
        reference: 'Mark 16:14',
        text: 'Afterward he appeared to the eleven themselves as they were reclining at table, and he rebuked them for their unbelief and hardness of heart.',
      },
      after: {
        reference: 'Mark 16:16',
        text: 'Whoever believes and is baptized will be saved, but whoever does not believe will be condemned.',
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
  {
    id: 'luke-1-37',
    reference: 'Luke 1:37',
    book: 'Luke',
    chapter: 1,
    verse: 37,
    difficulty: 'easy',
    translations: {
      ESV: 'For nothing will be impossible with God.',
      NIV: 'For no word from God will ever fail.',
      KJV: 'For with God nothing shall be impossible.',
      NASB: 'For nothing will be impossible with God.',
    },
    context: {
      before: {
        reference: 'Luke 1:36',
        text: 'And behold, your relative Elizabeth in her old age has also conceived a son, and this is the sixth month with her who was called barren.',
      },
      after: {
        reference: 'Luke 1:38',
        text: 'And Mary said, "Behold, I am the servant of the Lord; let it be to me according to your word." And the angel departed from her.',
      },
    },
  },
  {
    id: 'luke-6-27',
    reference: 'Luke 6:27',
    book: 'Luke',
    chapter: 6,
    verse: 27,
    difficulty: 'medium',
    translations: {
      ESV: 'But I say to you who hear, Love your enemies, do good to those who hate you.',
      NIV: 'But to you who are listening I say: Love your enemies, do good to those who hate you.',
      KJV: 'But I say unto you which hear, Love your enemies, do good to them which hate you.',
      NASB: 'But I say to you who hear, love your enemies, do good to those who hate you.',
    },
    context: {
      before: {
        reference: 'Luke 6:26',
        text: 'Woe to you, when all people speak well of you, for so their fathers did to the false prophets.',
      },
      after: {
        reference: 'Luke 6:28',
        text: 'bless those who curse you, pray for those who abuse you.',
      },
    },
  },
  {
    id: 'luke-24-46-47',
    reference: 'Luke 24:46-47',
    book: 'Luke',
    chapter: 24,
    verse: 46,
    difficulty: 'hard',
    translations: {
      ESV: 'Thus it is written, that the Christ should suffer and on the third day rise from the dead, and that repentance for the forgiveness of sins should be proclaimed in his name to all nations, beginning from Jerusalem.',
      NIV: 'He told them, "This is what is written: The Messiah will suffer and rise from the dead on the third day, and repentance for the forgiveness of sins will be preached in his name to all nations, beginning at Jerusalem."',
      KJV: 'And said unto them, Thus it is written, and thus it behooved Christ to suffer, and to rise from the dead the third day: And that repentance and remission of sins should be preached in his name among all nations, beginning at Jerusalem.',
      NASB: 'and He said to them, "Thus it is written, that the Christ would suffer and rise again from the dead the third day, and that repentance for forgiveness of sins would be proclaimed in His name to all the nations, beginning from Jerusalem."',
    },
    context: {
      before: {
        reference: 'Luke 24:45',
        text: 'Then he opened their minds to understand the Scriptures.',
      },
      after: {
        reference: 'Luke 24:48',
        text: 'You are witnesses of these things.',
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
  {
    id: 'acts-16-31',
    reference: 'Acts 16:31',
    book: 'Acts',
    chapter: 16,
    verse: 31,
    difficulty: 'easy',
    translations: {
      ESV: 'And they said, "Believe in the Lord Jesus, and you will be saved, you and your household."',
      NIV: 'They replied, "Believe in the Lord Jesus, and you will be saved—you and your household."',
      KJV: 'And they said, Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house.',
      NASB: 'They said, "Believe in the Lord Jesus, and you will be saved, you and your household."',
    },
    context: {
      before: {
        reference: 'Acts 16:30',
        text: 'Then he brought them out and said, "Sirs, what must I do to be saved?"',
      },
      after: {
        reference: 'Acts 16:32',
        text: 'And they spoke the word of the Lord to him and to all who were in his house.',
      },
    },
  },
  {
    id: 'acts-17-30-31',
    reference: 'Acts 17:30-31',
    book: 'Acts',
    chapter: 17,
    verse: 30,
    difficulty: 'hard',
    translations: {
      ESV: 'The times of ignorance God overlooked, but now he commands all people everywhere to repent, because he has fixed a day on which he will judge the world in righteousness by a man whom he has appointed; and of this he has given assurance to all by raising him from the dead.',
      NIV: 'In the past God overlooked such ignorance, but now he commands all people everywhere to repent. For he has set a day when he will judge the world with justice by the man he has appointed. He has given proof of this to everyone by raising him from the dead.',
      KJV: 'And the times of this ignorance God winked at; but now commandeth all men every where to repent: Because he hath appointed a day, in the which he will judge the world in righteousness by that man whom he hath ordained; whereof he hath given assurance unto all men, in that he hath raised him from the dead.',
      NASB: 'Therefore having overlooked the times of ignorance, God is now declaring to men that all people everywhere should repent, because He has fixed a day in which He will judge the world in righteousness through a Man whom He has appointed, having furnished proof to all men by raising Him from the dead.',
    },
    context: {
      before: {
        reference: 'Acts 17:29',
        text: "Being then God's offspring, we ought not to think that the divine being is like gold or silver or stone, an image formed by the art and imagination of man.",
      },
      after: {
        reference: 'Acts 17:32',
        text: 'Now when they heard of the resurrection of the dead, some mocked. But others said, "We will hear you again about this."',
      },
    },
  },
  {
    id: 'acts-20-24',
    reference: 'Acts 20:24',
    book: 'Acts',
    chapter: 20,
    verse: 24,
    difficulty: 'medium',
    translations: {
      ESV: 'But I do not account my life of any value nor as precious to myself, if only I may finish my course and the ministry that I received from the Lord Jesus, to testify to the gospel of the grace of God.',
      NIV: "However, I consider my life worth nothing to me; my only aim is to finish the race and complete the task the Lord Jesus has given me—the task of testifying to the good news of God's grace.",
      KJV: 'But none of these things move me, neither count I my life dear unto myself, so that I might finish my course with joy, and the ministry, which I have received of the Lord Jesus, to testify the gospel of the grace of God.',
      NASB: 'But I do not consider my life of any account as dear to myself, so that I may finish my course and the ministry which I received from the Lord Jesus, to testify solemnly of the gospel of the grace of God.',
    },
    context: {
      before: {
        reference: 'Acts 20:23',
        text: 'except that the Holy Spirit testifies to me in every city that imprisonment and afflictions await me.',
      },
      after: {
        reference: 'Acts 20:25',
        text: 'And now, behold, I know that none of you among whom I have gone about proclaiming the kingdom will see my face again.',
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
  {
    id: 'romans-1-16',
    reference: 'Romans 1:16',
    book: 'Romans',
    chapter: 1,
    verse: 16,
    difficulty: 'medium',
    translations: {
      ESV: 'For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes, to the Jew first and also to the Greek.',
      NIV: 'For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes: first to the Jew, then to the Gentile.',
      KJV: 'For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth; to the Jew first, and also to the Greek.',
      NASB: 'For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes, to the Jew first and also to the Greek.',
    },
    context: {
      before: {
        reference: 'Romans 1:15',
        text: 'So I am eager to preach the gospel to you also who are in Rome.',
      },
      after: {
        reference: 'Romans 1:17',
        text: 'For in it the righteousness of God is revealed from faith for faith, as it is written, "The righteous shall live by faith."',
      },
    },
  },
  {
    id: 'romans-3-24',
    reference: 'Romans 3:24',
    book: 'Romans',
    chapter: 3,
    verse: 24,
    difficulty: 'medium',
    translations: {
      ESV: 'and are justified by his grace as a gift, through the redemption that is in Christ Jesus,',
      NIV: 'and all are justified freely by his grace through the redemption that came by Christ Jesus.',
      KJV: 'Being justified freely by his grace through the redemption that is in Christ Jesus:',
      NASB: 'being justified as a gift by His grace through the redemption which is in Christ Jesus,',
    },
    context: {
      before: {
        reference: 'Romans 3:23',
        text: 'for all have sinned and fall short of the glory of God,',
      },
      after: {
        reference: 'Romans 3:25',
        text: 'whom God put forward as a propitiation by his blood, to be received by faith.',
      },
    },
  },
  {
    id: 'romans-5-1',
    reference: 'Romans 5:1',
    book: 'Romans',
    chapter: 5,
    verse: 1,
    difficulty: 'medium',
    translations: {
      ESV: 'Therefore, since we have been justified by faith, we have peace with God through our Lord Jesus Christ.',
      NIV: 'Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ,',
      KJV: 'Therefore being justified by faith, we have peace with God through our Lord Jesus Christ:',
      NASB: 'Therefore, having been justified by faith, we have peace with God through our Lord Jesus Christ,',
    },
    context: {
      before: {
        reference: 'Romans 4:25',
        text: 'who was delivered up for our trespasses and raised for our justification.',
      },
      after: {
        reference: 'Romans 5:2',
        text: 'Through him we have also obtained access by faith into this grace in which we stand, and we rejoice in hope of the glory of God.',
      },
    },
  },
  {
    id: 'romans-8-29',
    reference: 'Romans 8:29',
    book: 'Romans',
    chapter: 8,
    verse: 29,
    difficulty: 'hard',
    translations: {
      ESV: 'For those whom he foreknew he also predestined to be conformed to the image of his Son, in order that he might be the firstborn among many brothers.',
      NIV: 'For those God foreknew he also predestined to be conformed to the image of his Son, that he might be the firstborn among many brothers and sisters.',
      KJV: 'For whom he did foreknow, he also did predestinate to be conformed to the image of his Son, that he might be the firstborn among many brethren.',
      NASB: 'For those whom He foreknew, He also predestined to become conformed to the image of His Son, so that He would be the firstborn among many brethren;',
    },
    context: {
      before: {
        reference: 'Romans 8:28',
        text: 'And we know that for those who love God all things work together for good, for those who are called according to his purpose.',
      },
      after: {
        reference: 'Romans 8:30',
        text: 'And those whom he predestined he also called, and those whom he called he also justified, and those whom he justified he also glorified.',
      },
    },
  },
  {
    id: 'romans-8-38-39',
    reference: 'Romans 8:38-39',
    book: 'Romans',
    chapter: 8,
    verse: 38,
    difficulty: 'hard',
    translations: {
      ESV: 'For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.',
      NIV: 'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
      KJV: 'For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.',
      NASB: 'For I am convinced that neither death, nor life, nor angels, nor principalities, nor things present, nor things to come, nor powers, nor height, nor depth, nor any other created thing, will be able to separate us from the love of God, which is in Christ Jesus our Lord.',
    },
    context: {
      before: {
        reference: 'Romans 8:37',
        text: 'No, in all these things we are more than conquerors through him who loved us.',
      },
      after: {
        reference: 'Romans 9:1',
        text: 'I am speaking the truth in Christ—I am not lying; my conscience bears me witness in the Holy Spirit—',
      },
    },
  },
  {
    id: 'romans-9-16',
    reference: 'Romans 9:16',
    book: 'Romans',
    chapter: 9,
    verse: 16,
    difficulty: 'medium',
    translations: {
      ESV: 'So then it depends not on human will or exertion, but on God, who has mercy.',
      NIV: 'It does not, therefore, depend on human desire or effort, but on God\'s mercy.',
      KJV: 'So then it is not of him that willeth, nor of him that runneth, but of God that sheweth mercy.',
      NASB: 'So then it does not depend on the man who wills or the man who runs, but on God who has mercy.',
    },
    context: {
      before: {
        reference: 'Romans 9:15',
        text: 'For he says to Moses, "I will have mercy on whom I have mercy, and I will have compassion on whom I have compassion."',
      },
      after: {
        reference: 'Romans 9:17',
        text: 'For the Scripture says to Pharaoh, "For this very purpose I have raised you up, that I might show my power in you, and that my name might be proclaimed in all the earth."',
      },
    },
  },
  {
    id: 'romans-11-33',
    reference: 'Romans 11:33',
    book: 'Romans',
    chapter: 11,
    verse: 33,
    difficulty: 'hard',
    translations: {
      ESV: 'Oh, the depth of the riches and wisdom and knowledge of God! How unsearchable are his judgments and how inscrutable his ways!',
      NIV: 'Oh, the depth of the riches of the wisdom and knowledge of God! How unsearchable his judgments, and his paths beyond tracing out!',
      KJV: 'O the depth of the riches both of the wisdom and knowledge of God! how unsearchable are his judgments, and his ways past finding out!',
      NASB: 'Oh, the depth of the riches both of the wisdom and knowledge of God! How unsearchable are His judgments and unfathomable His ways!',
    },
    context: {
      before: {
        reference: 'Romans 11:32',
        text: 'For God has consigned all to disobedience, that he may have mercy on all.',
      },
      after: {
        reference: 'Romans 11:34',
        text: '"For who has known the mind of the Lord, or who has been his counselor?"',
      },
    },
  },
  {
    id: 'romans-13-14',
    reference: 'Romans 13:14',
    book: 'Romans',
    chapter: 13,
    verse: 14,
    difficulty: 'medium',
    translations: {
      ESV: 'But put on the Lord Jesus Christ, and make no provision for the flesh, to gratify its desires.',
      NIV: 'Rather, clothe yourselves with the Lord Jesus Christ, and do not think about how to gratify the desires of the flesh.',
      KJV: 'But put ye on the Lord Jesus Christ, and make not provision for the flesh, to fulfil the lusts thereof.',
      NASB: 'But put on the Lord Jesus Christ, and make no provision for the flesh in regard to its lusts.',
    },
    context: {
      before: {
        reference: 'Romans 13:13',
        text: 'Let us walk properly as in the daytime, not in orgies and drunkenness, not in sexual immorality and sensuality, not in quarreling and jealousy.',
      },
      after: {
        reference: 'Romans 14:1',
        text: 'As for the one who is weak in faith, welcome him, but not to quarrel over opinions.',
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
  {
    id: '1-corinthians-1-30',
    reference: '1 Corinthians 1:30',
    book: '1 Corinthians',
    chapter: 1,
    verse: 30,
    difficulty: 'medium',
    translations: {
      ESV: 'And because of him you are in Christ Jesus, who became to us wisdom from God, righteousness and sanctification and redemption,',
      NIV: 'It is because of him that you are in Christ Jesus, who has become for us wisdom from God—that is, our righteousness, holiness and redemption.',
      KJV: 'But of him are ye in Christ Jesus, who of God is made unto us wisdom, and righteousness, and sanctification, and redemption:',
      NASB: 'But by His doing you are in Christ Jesus, who became to us wisdom from God, and righteousness and sanctification, and redemption,',
    },
    context: {
      before: {
        reference: '1 Corinthians 1:29',
        text: 'so that no human being might boast in the presence of God.',
      },
      after: {
        reference: '1 Corinthians 1:31',
        text: 'so that, as it is written, "Let the one who boasts, boast in the Lord."',
      },
    },
  },
  {
    id: '1-corinthians-2-14',
    reference: '1 Corinthians 2:14',
    book: '1 Corinthians',
    chapter: 2,
    verse: 14,
    difficulty: 'medium',
    translations: {
      ESV: 'The natural person does not accept the things of the Spirit of God, for they are folly to him, and he is not able to understand them because they are spiritually discerned.',
      NIV: 'The person without the Spirit does not accept the things that come from the Spirit of God but considers them foolishness, and cannot understand them because they are discerned only through the Spirit.',
      KJV: 'But the natural man receiveth not the things of the Spirit of God: for they are foolishness unto him: neither can he know them, because they are spiritually discerned.',
      NASB: 'But a natural man does not accept the things of the Spirit of God, for they are foolishness to him; and he cannot understand them, because they are spiritually appraised.',
    },
    context: {
      before: {
        reference: '1 Corinthians 2:13',
        text: 'And we impart this in words not taught by human wisdom but taught by the Spirit, interpreting spiritual truths to those who are spiritual.',
      },
      after: {
        reference: '1 Corinthians 2:15',
        text: 'The spiritual person judges all things, but is himself to be judged by no one.',
      },
    },
  },
  {
    id: '1-corinthians-6-19',
    reference: '1 Corinthians 6:19',
    book: '1 Corinthians',
    chapter: 6,
    verse: 19,
    difficulty: 'medium',
    translations: {
      ESV: 'Or do you not know that your body is a temple of the Holy Spirit within you, whom you have from God? You are not your own,',
      NIV: 'Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own;',
      KJV: 'What? know ye not that your body is the temple of the Holy Ghost which is in you, which ye have of God, and ye are not your own?',
      NASB: 'Or do you not know that your body is a temple of the Holy Spirit who is in you, whom you have from God, and that you are not your own?',
    },
    context: {
      before: {
        reference: '1 Corinthians 6:18',
        text: 'Flee from sexual immorality. Every other sin a person commits is outside the body, but the sexually immoral person sins against his own body.',
      },
      after: {
        reference: '1 Corinthians 6:20',
        text: 'for you were bought with a price. So glorify God in your body.',
      },
    },
  },
  {
    id: '1-corinthians-10-31',
    reference: '1 Corinthians 10:31',
    book: '1 Corinthians',
    chapter: 10,
    verse: 31,
    difficulty: 'easy',
    translations: {
      ESV: 'So, whether you eat or drink, or whatever you do, do all to the glory of God.',
      NIV: 'So whether you eat or drink or whatever you do, do it all for the glory of God.',
      KJV: 'Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God.',
      NASB: 'Whether, then, you eat or drink or whatever you do, do all to the glory of God.',
    },
    context: {
      before: {
        reference: '1 Corinthians 10:30',
        text: 'If I partake with thankfulness, why am I denounced because of that for which I give thanks?',
      },
      after: {
        reference: '1 Corinthians 10:32',
        text: 'Give no offense to Jews or to Greeks or to the church of God,',
      },
    },
  },
  {
    id: '1-corinthians-15-3-4',
    reference: '1 Corinthians 15:3-4',
    book: '1 Corinthians',
    chapter: 15,
    verse: 3,
    difficulty: 'medium',
    translations: {
      ESV: 'For I delivered to you as of first importance what I also received: that Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day in accordance with the Scriptures,',
      NIV: 'For what I received I passed on to you as of first importance: that Christ died for our sins according to the Scriptures, that he was buried, that he was raised on the third day according to the Scriptures,',
      KJV: 'For I delivered unto you first of all that which I also received, how that Christ died for our sins according to the scriptures; And that he was buried, and that he rose again the third day according to the scriptures:',
      NASB: 'For I delivered to you as of first importance what I also received, that Christ died for our sins according to the Scriptures, and that He was buried, and that He was raised on the third day according to the Scriptures,',
    },
    context: {
      before: {
        reference: '1 Corinthians 15:2',
        text: 'and by which you are being saved, if you hold fast to the word I preached to you—unless you believed in vain.',
      },
      after: {
        reference: '1 Corinthians 15:5',
        text: 'and that he appeared to Cephas, then to the twelve.',
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
  {
    id: '2-corinthians-5-21',
    reference: '2 Corinthians 5:21',
    book: '2 Corinthians',
    chapter: 5,
    verse: 21,
    difficulty: 'medium',
    translations: {
      ESV: 'For our sake he made him to be sin who knew no sin, so that in him we might become the righteousness of God.',
      NIV: 'God made him who had no sin to be sin for us, so that in him we might become the righteousness of God.',
      KJV: 'For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him.',
      NASB: 'He made Him who knew no sin to be sin on our behalf, so that we might become the righteousness of God in Him.',
    },
    context: {
      before: {
        reference: '2 Corinthians 5:20',
        text: 'Therefore, we are ambassadors for Christ, God making his appeal through us. We implore you on behalf of Christ, be reconciled to God.',
      },
      after: {
        reference: '2 Corinthians 6:1',
        text: 'Working together with him, then, we appeal to you not to receive the grace of God in vain.',
      },
    },
  },
  {
    id: '2-corinthians-4-17',
    reference: '2 Corinthians 4:17',
    book: '2 Corinthians',
    chapter: 4,
    verse: 17,
    difficulty: 'medium',
    translations: {
      ESV: 'For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison,',
      NIV: 'For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all.',
      KJV: 'For our light affliction, which is but for a moment, worketh for us a far more exceeding and eternal weight of glory;',
      NASB: 'For momentary, light affliction is producing for us an eternal weight of glory far beyond all comparison,',
    },
    context: {
      before: {
        reference: '2 Corinthians 4:16',
        text: 'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day.',
      },
      after: {
        reference: '2 Corinthians 4:18',
        text: 'as we look not to the things that are seen but to the things that are unseen. For the things that are seen are transient, but the things that are unseen are eternal.',
      },
    },
  },
  {
    id: '2-corinthians-3-18',
    reference: '2 Corinthians 3:18',
    book: '2 Corinthians',
    chapter: 3,
    verse: 18,
    difficulty: 'hard',
    translations: {
      ESV: 'And we all, with unveiled face, beholding the glory of the Lord, are being transformed into the same image from one degree of glory to another. For this comes from the Lord who is the Spirit.',
      NIV: 'And we all, who with unveiled faces contemplate the Lord\'s glory, are being transformed into his image with ever-increasing glory, which comes from the Lord, who is the Spirit.',
      KJV: 'But we all, with open face beholding as in a glass the glory of the Lord, are changed into the same image from glory to glory, even as by the Spirit of the Lord.',
      NASB: 'But we all, with unveiled face, beholding as in a mirror the glory of the Lord, are being transformed into the same image from glory to glory, just as from the Lord, the Spirit.',
    },
    context: {
      before: {
        reference: '2 Corinthians 3:17',
        text: 'Now the Lord is the Spirit, and where the Spirit of the Lord is, there is freedom.',
      },
      after: {
        reference: '2 Corinthians 4:1',
        text: 'Therefore, having this ministry by the mercy of God, we do not lose heart.',
      },
    },
  },
  {
    id: '2-corinthians-4-6',
    reference: '2 Corinthians 4:6',
    book: '2 Corinthians',
    chapter: 4,
    verse: 6,
    difficulty: 'hard',
    translations: {
      ESV: 'For God, who said, "Let light shine out of darkness," has shone in our hearts to give the light of the knowledge of the glory of God in the face of Jesus Christ.',
      NIV: 'For God, who said, "Let light shine out of darkness," made his light shine in our hearts to give us the light of the knowledge of God\'s glory displayed in the face of Christ.',
      KJV: 'For God, who commanded the light to shine out of darkness, hath shined in our hearts, to give the light of the knowledge of the glory of God in the face of Jesus Christ.',
      NASB: 'For God, who said, "Light shall shine out of darkness," is the One who has shone in our hearts to give the Light of the knowledge of the glory of God in the face of Christ.',
    },
    context: {
      before: {
        reference: '2 Corinthians 4:5',
        text: 'For what we proclaim is not ourselves, but Jesus Christ as Lord, with ourselves as your servants for Jesus\' sake.',
      },
      after: {
        reference: '2 Corinthians 4:7',
        text: 'But we have this treasure in jars of clay, to show that the surpassing power belongs to God and not to us.',
      },
    },
  },
  {
    id: '2-corinthians-9-7',
    reference: '2 Corinthians 9:7',
    book: '2 Corinthians',
    chapter: 9,
    verse: 7,
    difficulty: 'easy',
    translations: {
      ESV: 'Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.',
      NIV: 'Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.',
      KJV: 'Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver.',
      NASB: 'Each one must do just as he has purposed in his heart, not grudgingly or under compulsion, for God loves a cheerful giver.',
    },
    context: {
      before: {
        reference: '2 Corinthians 9:6',
        text: 'The point is this: whoever sows sparingly will also reap sparingly, and whoever sows bountifully will also reap bountifully.',
      },
      after: {
        reference: '2 Corinthians 9:8',
        text: 'And God is able to make all grace abound to you, so that having all sufficiency in all things at all times, you may abound in every good work.',
      },
    },
  },
  {
    id: '2-corinthians-1-3-4',
    reference: '2 Corinthians 1:3-4',
    book: '2 Corinthians',
    chapter: 1,
    verse: 3,
    difficulty: 'hard',
    translations: {
      ESV: 'Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort, who comforts us in all our affliction, so that we may be able to comfort those who are in any affliction, with the comfort with which we ourselves are comforted by God.',
      NIV: 'Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God.',
      KJV: 'Blessed be God, even the Father of our Lord Jesus Christ, the Father of mercies, and the God of all comfort; Who comforteth us in all our tribulation, that we may be able to comfort them which are in any trouble, by the comfort wherewith we ourselves are comforted of God.',
      NASB: 'Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort, who comforts us in all our affliction so that we will be able to comfort those who are in any affliction with the comfort with which we ourselves are comforted by God.',
    },
    context: {
      before: {
        reference: '2 Corinthians 1:2',
        text: 'Grace to you and peace from God our Father and the Lord Jesus Christ.',
      },
      after: {
        reference: '2 Corinthians 1:5',
        text: 'For as we share abundantly in Christ\'s sufferings, so through Christ we share abundantly in comfort too.',
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
  {
    id: 'galatians-3-28',
    reference: 'Galatians 3:28',
    book: 'Galatians',
    chapter: 3,
    verse: 28,
    difficulty: 'medium',
    translations: {
      ESV: 'There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus.',
      NIV: 'There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus.',
      KJV: 'There is neither Jew nor Greek, there is neither bond nor free, there is neither male nor female: for ye are all one in Christ Jesus.',
      NASB: 'There is neither Jew nor Greek, there is neither slave nor free man, there is neither male nor female; for you are all one in Christ Jesus.',
    },
    context: {
      before: {
        reference: 'Galatians 3:27',
        text: 'For as many of you as were baptized into Christ have put on Christ.',
      },
      after: {
        reference: 'Galatians 3:29',
        text: 'And if you are Christ\'s, then you are Abraham\'s offspring, heirs according to promise.',
      },
    },
  },
  {
    id: 'galatians-6-14',
    reference: 'Galatians 6:14',
    book: 'Galatians',
    chapter: 6,
    verse: 14,
    difficulty: 'medium',
    translations: {
      ESV: 'But far be it from me to boast except in the cross of our Lord Jesus Christ, by which the world has been crucified to me, and I to the world.',
      NIV: 'May I never boast except in the cross of our Lord Jesus Christ, through which the world has been crucified to me, and I to the world.',
      KJV: 'But God forbid that I should glory, save in the cross of our Lord Jesus Christ, by whom the world is crucified unto me, and I unto the world.',
      NASB: 'But may it never be that I would boast, except in the cross of our Lord Jesus Christ, through which the world has been crucified to me, and I to the world.',
    },
    context: {
      before: {
        reference: 'Galatians 6:13',
        text: 'For even those who are circumcised do not themselves keep the law, but they desire to have you circumcised that they may boast in your flesh.',
      },
      after: {
        reference: 'Galatians 6:15',
        text: 'For neither circumcision counts for anything, nor uncircumcision, but a new creation.',
      },
    },
  },

  {
    id: 'galatians-2-16',
    reference: 'Galatians 2:16',
    book: 'Galatians',
    chapter: 2,
    verse: 16,
    difficulty: 'hard',
    translations: {
      ESV: 'yet we know that a person is not justified by works of the law but through faith in Jesus Christ, so we also have believed in Christ Jesus, in order to be justified by faith in Christ and not by works of the law, because by works of the law no one will be justified.',
      NIV: 'know that a person is not justified by the works of the law, but by faith in Jesus Christ. So we, too, have put our faith in Christ Jesus that we may be justified by faith in Christ and not by the works of the law, because by the works of the law no one will be justified.',
      KJV: 'Knowing that a man is not justified by the works of the law, but by the faith of Jesus Christ, even we have believed in Jesus Christ, that we might be justified by the faith of Christ, and not by the works of the law: for by the works of the law shall no flesh be justified.',
      NASB: 'nevertheless knowing that a man is not justified by the works of the Law but through faith in Christ Jesus, even we have believed in Christ Jesus, so that we may be justified by faith in Christ and not by the works of the Law; since by the works of the Law no flesh will be justified.',
    },
    context: {
      before: {
        reference: 'Galatians 2:15',
        text: 'We ourselves are Jews by birth and not Gentile sinners;',
      },
      after: {
        reference: 'Galatians 2:17',
        text: 'But if, in our endeavor to be justified in Christ, we too were found to be sinners, is Christ then a servant of sin?',
      },
    },
  },
  {
    id: 'galatians-3-13',
    reference: 'Galatians 3:13',
    book: 'Galatians',
    chapter: 3,
    verse: 13,
    difficulty: 'medium',
    translations: {
      ESV: 'Christ redeemed us from the curse of the law by becoming a curse for us—for it is written, "Cursed is everyone who is hanged on a tree"—',
      NIV: 'Christ redeemed us from the curse of the law by becoming a curse for us, for it is written: "Cursed is everyone who is hung on a pole."',
      KJV: 'Christ hath redeemed us from the curse of the law, being made a curse for us: for it is written, Cursed is every one that hangeth on a tree:',
      NASB: 'Christ redeemed us from the curse of the Law, having become a curse for us—for it is written, "Cursed is everyone who hangs on a tree"—',
    },
    context: {
      before: {
        reference: 'Galatians 3:12',
        text: 'But the law is not of faith, rather "The one who does them shall live by them."',
      },
      after: {
        reference: 'Galatians 3:14',
        text: 'so that in Christ Jesus the blessing of Abraham might come to the Gentiles, so that we might receive the promised Spirit through faith.',
      },
    },
  },
  {
    id: 'galatians-3-24',
    reference: 'Galatians 3:24',
    book: 'Galatians',
    chapter: 3,
    verse: 24,
    difficulty: 'medium',
    translations: {
      ESV: 'So then, the law was our guardian until Christ came, in order that we might be justified by faith.',
      NIV: 'So the law was our guardian until Christ came that we might be justified by faith.',
      KJV: 'Wherefore the law was our schoolmaster to bring us unto Christ, that we might be justified by faith.',
      NASB: 'Therefore the Law has become our tutor to lead us to Christ, so that we may be justified by faith.',
    },
    context: {
      before: {
        reference: 'Galatians 3:23',
        text: 'Now before faith came, we were held captive under the law, imprisoned until the coming faith would be revealed.',
      },
      after: {
        reference: 'Galatians 3:25',
        text: 'But now that faith has come, we are no longer under a guardian,',
      },
    },
  },
  {
    id: 'galatians-4-4',
    reference: 'Galatians 4:4',
    book: 'Galatians',
    chapter: 4,
    verse: 4,
    difficulty: 'medium',
    translations: {
      ESV: 'But when the fullness of time had come, God sent forth his Son, born of woman, born under the law,',
      NIV: 'But when the set time had fully come, God sent his Son, born of a woman, born under the law,',
      KJV: 'But when the fulness of the time was come, God sent forth his Son, made of a woman, made under the law,',
      NASB: 'But when the fullness of the time came, God sent forth His Son, born of a woman, born under the Law,',
    },
    context: {
      before: {
        reference: 'Galatians 4:3',
        text: 'In the same way we also, when we were children, were enslaved to the elementary principles of the world.',
      },
      after: {
        reference: 'Galatians 4:5',
        text: 'to redeem those who were under the law, so that we might receive adoption as sons.',
      },
    },
  },
  {
    id: 'galatians-5-1',
    reference: 'Galatians 5:1',
    book: 'Galatians',
    chapter: 5,
    verse: 1,
    difficulty: 'easy',
    translations: {
      ESV: 'For freedom Christ has set us free; stand firm therefore, and do not submit again to a yoke of slavery.',
      NIV: 'It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery.',
      KJV: 'Stand fast therefore in the liberty wherewith Christ hath made us free, and be not entangled again with the yoke of bondage.',
      NASB: 'It was for freedom that Christ set us free; therefore keep standing firm and do not be subject again to a yoke of slavery.',
    },
    context: {
      before: {
        reference: 'Galatians 4:31',
        text: 'So, brothers, we are not children of the slave but of the free woman.',
      },
      after: {
        reference: 'Galatians 5:2',
        text: 'Look: I, Paul, say to you that if you accept circumcision, Christ will be of no advantage to you.',
      },
    },
  },
  {
    id: 'galatians-5-16',
    reference: 'Galatians 5:16',
    book: 'Galatians',
    chapter: 5,
    verse: 16,
    difficulty: 'easy',
    translations: {
      ESV: 'But I say, walk by the Spirit, and you will not gratify the desires of the flesh.',
      NIV: 'So I say, walk by the Spirit, and you will not gratify the desires of the flesh.',
      KJV: 'This I say then, Walk in the Spirit, and ye shall not fulfil the lust of the flesh.',
      NASB: 'But I say, walk by the Spirit, and you will not carry out the desire of the flesh.',
    },
    context: {
      before: {
        reference: 'Galatians 5:15',
        text: 'But if you bite and devour one another, watch out that you are not consumed by one another.',
      },
      after: {
        reference: 'Galatians 5:17',
        text: 'For the desires of the flesh are against the Spirit, and the desires of the Spirit are against the flesh, for these are opposed to each other.',
      },
    },
  },
  {
    id: 'galatians-6-7',
    reference: 'Galatians 6:7',
    book: 'Galatians',
    chapter: 6,
    verse: 7,
    difficulty: 'easy',
    translations: {
      ESV: 'Do not be deceived: God is not mocked, for whatever one sows, that will he also reap.',
      NIV: 'Do not be deceived: God cannot be mocked. A man reaps what he sows.',
      KJV: 'Be not deceived; God is not mocked: for whatsoever a man soweth, that shall he also reap.',
      NASB: 'Do not be deceived, God is not mocked; for whatever a man sows, this he will also reap.',
    },
    context: {
      before: {
        reference: 'Galatians 6:6',
        text: 'Let the one who is taught the word share all good things with the one who teaches.',
      },
      after: {
        reference: 'Galatians 6:8',
        text: 'For the one who sows to his own flesh will from the flesh reap corruption, but the one who sows to the Spirit will from the Spirit reap eternal life.',
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

  {
    id: 'ephesians-1-3',
    reference: 'Ephesians 1:3',
    book: 'Ephesians',
    chapter: 1,
    verse: 3,
    difficulty: 'hard',
    translations: {
      ESV: 'Blessed be the God and Father of our Lord Jesus Christ, who has blessed us in Christ with every spiritual blessing in the heavenly places,',
      NIV: 'Praise be to the God and Father of our Lord Jesus Christ, who has blessed us in the heavenly realms with every spiritual blessing in Christ.',
      KJV: 'Blessed be the God and Father of our Lord Jesus Christ, who hath blessed us with all spiritual blessings in heavenly places in Christ:',
      NASB: 'Blessed be the God and Father of our Lord Jesus Christ, who has blessed us with every spiritual blessing in the heavenly places in Christ,',
    },
    context: {
      before: {
        reference: 'Ephesians 1:2',
        text: 'Grace to you and peace from God our Father and the Lord Jesus Christ.',
      },
      after: {
        reference: 'Ephesians 1:4',
        text: 'even as he chose us in him before the foundation of the world, that we should be holy and blameless before him.',
      },
    },
  },
  {
    id: 'ephesians-1-4',
    reference: 'Ephesians 1:4',
    book: 'Ephesians',
    chapter: 1,
    verse: 4,
    difficulty: 'hard',
    translations: {
      ESV: 'even as he chose us in him before the foundation of the world, that we should be holy and blameless before him.',
      NIV: 'For he chose us in him before the creation of the world to be holy and blameless in his sight.',
      KJV: 'According as he hath chosen us in him before the foundation of the world, that we should be holy and without blame before him in love:',
      NASB: 'just as He chose us in Him before the foundation of the world, that we would be holy and blameless before Him.',
    },
    context: {
      before: {
        reference: 'Ephesians 1:3',
        text: 'Blessed be the God and Father of our Lord Jesus Christ, who has blessed us in Christ with every spiritual blessing in the heavenly places,',
      },
      after: {
        reference: 'Ephesians 1:5',
        text: 'In love he predestined us for adoption to himself as sons through Jesus Christ, according to the purpose of his will,',
      },
    },
  },
  {
    id: 'ephesians-2-1',
    reference: 'Ephesians 2:1',
    book: 'Ephesians',
    chapter: 2,
    verse: 1,
    difficulty: 'easy',
    translations: {
      ESV: 'And you were dead in the trespasses and sins',
      NIV: 'As for you, you were dead in your transgressions and sins,',
      KJV: 'And you hath he quickened, who were dead in trespasses and sins;',
      NASB: 'And you were dead in your trespasses and sins,',
    },
    context: {
      before: {
        reference: 'Ephesians 1:23',
        text: 'which is his body, the fullness of him who fills all in all.',
      },
      after: {
        reference: 'Ephesians 2:2',
        text: 'in which you once walked, following the course of this world, following the prince of the power of the air.',
      },
    },
  },
  {
    id: 'ephesians-2-4',
    reference: 'Ephesians 2:4',
    book: 'Ephesians',
    chapter: 2,
    verse: 4,
    difficulty: 'medium',
    translations: {
      ESV: 'But God, being rich in mercy, because of the great love with which he loved us,',
      NIV: 'But because of his great love for us, God, who is rich in mercy,',
      KJV: 'But God, who is rich in mercy, for his great love wherewith he loved us,',
      NASB: 'But God, being rich in mercy, because of His great love with which He loved us,',
    },
    context: {
      before: {
        reference: 'Ephesians 2:3',
        text: 'among whom we all once lived in the passions of our flesh, carrying out the desires of the body and the mind, and were by nature children of wrath, like the rest of mankind.',
      },
      after: {
        reference: 'Ephesians 2:5',
        text: 'even when we were dead in our trespasses, made us alive together with Christ—by grace you have been saved—',
      },
    },
  },
  {
    id: 'ephesians-2-10',
    reference: 'Ephesians 2:10',
    book: 'Ephesians',
    chapter: 2,
    verse: 10,
    difficulty: 'medium',
    translations: {
      ESV: 'For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them.',
      NIV: 'For we are God\'s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.',
      KJV: 'For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them.',
      NASB: 'For we are His workmanship, created in Christ Jesus for good works, which God prepared beforehand so that we would walk in them.',
    },
    context: {
      before: {
        reference: 'Ephesians 2:9',
        text: 'not a result of works, so that no one may boast.',
      },
      after: {
        reference: 'Ephesians 2:11',
        text: 'Therefore remember that at one time you Gentiles in the flesh, called "the uncircumcision" by what is called the circumcision.',
      },
    },
  },
  {
    id: 'ephesians-3-20',
    reference: 'Ephesians 3:20',
    book: 'Ephesians',
    chapter: 3,
    verse: 20,
    difficulty: 'hard',
    translations: {
      ESV: 'Now to him who is able to do far more abundantly than all that we ask or think, according to the power at work within us,',
      NIV: 'Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us,',
      KJV: 'Now unto him that is able to do exceeding abundantly above all that we ask or think, according to the power that worketh in us,',
      NASB: 'Now to Him who is able to do far more abundantly beyond all that we ask or think, according to the power that works within us,',
    },
    context: {
      before: {
        reference: 'Ephesians 3:19',
        text: 'and to know the love of Christ that surpasses knowledge, that you may be filled with all the fullness of God.',
      },
      after: {
        reference: 'Ephesians 3:21',
        text: 'to him be glory in the church and in Christ Jesus throughout all generations, forever and ever. Amen.',
      },
    },
  },
  {
    id: 'ephesians-4-4',
    reference: 'Ephesians 4:4',
    book: 'Ephesians',
    chapter: 4,
    verse: 4,
    difficulty: 'medium',
    translations: {
      ESV: 'There is one body and one Spirit—just as you were called to the one hope that belongs to your call—',
      NIV: 'There is one body and one Spirit, just as you were called to one hope when you were called;',
      KJV: 'There is one body, and one Spirit, even as ye are called in one hope of your calling;',
      NASB: 'There is one body and one Spirit, just as also you were called in one hope of your calling;',
    },
    context: {
      before: {
        reference: 'Ephesians 4:3',
        text: 'eager to maintain the unity of the Spirit in the bond of peace.',
      },
      after: {
        reference: 'Ephesians 4:5',
        text: 'one Lord, one faith, one baptism,',
      },
    },
  },
  {
    id: 'ephesians-5-25',
    reference: 'Ephesians 5:25',
    book: 'Ephesians',
    chapter: 5,
    verse: 25,
    difficulty: 'medium',
    translations: {
      ESV: 'Husbands, love your wives, as Christ loved the church and gave himself up for her,',
      NIV: 'Husbands, love your wives, just as Christ loved the church and gave himself up for her',
      KJV: 'Husbands, love your wives, even as Christ also loved the church, and gave himself for it;',
      NASB: 'Husbands, love your wives, just as Christ also loved the church and gave Himself up for her,',
    },
    context: {
      before: {
        reference: 'Ephesians 5:24',
        text: 'Now as the church submits to Christ, so also wives should submit in everything to their husbands.',
      },
      after: {
        reference: 'Ephesians 5:26',
        text: 'that he might sanctify her, having cleansed her by the washing of water with the word,',
      },
    },
  },
  {
    id: 'ephesians-6-12',
    reference: 'Ephesians 6:12',
    book: 'Ephesians',
    chapter: 6,
    verse: 12,
    difficulty: 'hard',
    translations: {
      ESV: 'For we do not wrestle against flesh and blood, but against the rulers, against the authorities, against the cosmic powers over this present darkness, against the spiritual forces of evil in the heavenly places.',
      NIV: 'For our struggle is not against flesh and blood, but against the rulers, against the authorities, against the powers of this dark world and against the spiritual forces of evil in the heavenly realms.',
      KJV: 'For we wrestle not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this world, against spiritual wickedness in high places.',
      NASB: 'For our struggle is not against flesh and blood, but against the rulers, against the powers, against the world forces of this darkness, against the spiritual forces of wickedness in the heavenly places.',
    },
    context: {
      before: {
        reference: 'Ephesians 6:11',
        text: 'Put on the whole armor of God, that you may be able to stand against the schemes of the devil.',
      },
      after: {
        reference: 'Ephesians 6:13',
        text: 'Therefore take up the whole armor of God, that you may be able to withstand in the evil day, and having done all, to stand firm.',
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
  {
    id: 'colossians-1-17',
    reference: 'Colossians 1:17',
    book: 'Colossians',
    chapter: 1,
    verse: 17,
    difficulty: 'easy',
    translations: {
      ESV: 'And he is before all things, and in him all things hold together.',
      NIV: 'He is before all things, and in him all things hold together.',
      KJV: 'And he is before all things, and by him all things consist.',
      NASB: 'He is before all things, and in Him all things hold together.',
    },
    context: {
      before: {
        reference: 'Colossians 1:16',
        text: 'For by him all things were created, in heaven and on earth, visible and invisible, whether thrones or dominions or rulers or authorities—all things were created through him and for him.',
      },
      after: {
        reference: 'Colossians 1:18',
        text: 'And he is the head of the body, the church. He is the beginning, the firstborn from the dead, that in everything he might be preeminent.',
      },
    },
  },
  {
    id: 'colossians-3-1-2',
    reference: 'Colossians 3:1-2',
    book: 'Colossians',
    chapter: 3,
    verse: 1,
    difficulty: 'medium',
    translations: {
      ESV: 'If then you have been raised with Christ, seek the things that are above, where Christ is, seated at the right hand of God. Set your minds on things that are above, not on things that are on earth.',
      NIV: 'Since, then, you have been raised with Christ, set your hearts on things above, where Christ is, seated at the right hand of God. Set your minds on things above, not on earthly things.',
      KJV: 'If ye then be risen with Christ, seek those things which are above, where Christ sitteth on the right hand of God. Set your affection on things above, not on things on the earth.',
      NASB: 'Therefore if you have been raised up with Christ, keep seeking the things above, where Christ is, seated at the right hand of God. Set your mind on the things above, not on the things that are on earth.',
    },
    context: {
      before: {
        reference: 'Colossians 2:20',
        text: 'If with Christ you died to the elemental spirits of the world, why, as if you were still alive in the world, do you submit to regulations—',
      },
      after: {
        reference: 'Colossians 3:3',
        text: 'For you have died, and your life is hidden with Christ in God.',
      },
    },
  },
  {
    id: 'colossians-3-16',
    reference: 'Colossians 3:16',
    book: 'Colossians',
    chapter: 3,
    verse: 16,
    difficulty: 'hard',
    translations: {
      ESV: 'Let the word of Christ dwell in you richly, teaching and admonishing one another in all wisdom, singing psalms and hymns and spiritual songs, with thankfulness in your hearts to God.',
      NIV: 'Let the message of Christ dwell among you richly as you teach and admonish one another with all wisdom through psalms, hymns, and songs from the Spirit, singing to God with gratitude in your hearts.',
      KJV: 'Let the word of Christ dwell in you richly in all wisdom; teaching and admonishing one another in psalms and hymns and spiritual songs, singing with grace in your hearts to the Lord.',
      NASB: 'Let the word of Christ richly dwell within you, with all wisdom teaching and admonishing one another with psalms and hymns and spiritual songs, singing with thankfulness in your hearts to God.',
    },
    context: {
      before: {
        reference: 'Colossians 3:15',
        text: 'And let the peace of Christ rule in your hearts, to which indeed you were called in one body. And be thankful.',
      },
      after: {
        reference: 'Colossians 3:17',
        text: 'And whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him.',
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
  {
    id: '1-thessalonians-5-23',
    reference: '1 Thessalonians 5:23',
    book: '1 Thessalonians',
    chapter: 5,
    verse: 23,
    difficulty: 'medium',
    translations: {
      ESV: 'Now may the God of peace himself sanctify you completely, and may your whole spirit and soul and body be kept blameless at the coming of our Lord Jesus Christ.',
      NIV: 'May God himself, the God of peace, sanctify you through and through. May your whole spirit, soul and body be kept blameless at the coming of our Lord Jesus Christ.',
      KJV: 'And the very God of peace sanctify you wholly; and I pray God your whole spirit and soul and body be preserved blameless unto the coming of our Lord Jesus Christ.',
      NASB: 'Now may the God of peace Himself sanctify you entirely; and may your spirit and soul and body be preserved complete, without blame at the coming of our Lord Jesus Christ.',
    },
    context: {
      before: {
        reference: '1 Thessalonians 5:22',
        text: 'Abstain from every form of evil.',
      },
      after: {
        reference: '1 Thessalonians 5:24',
        text: 'He who calls you is faithful; he will surely do it.',
      },
    },
  },
  {
    id: '1-thessalonians-4-3',
    reference: '1 Thessalonians 4:3',
    book: '1 Thessalonians',
    chapter: 4,
    verse: 3,
    difficulty: 'easy',
    translations: {
      ESV: 'For this is the will of God, your sanctification: that you abstain from sexual immorality.',
      NIV: 'It is God\'s will that you should be sanctified: that you should avoid sexual immorality.',
      KJV: 'For this is the will of God, even your sanctification, that ye should abstain from fornication.',
      NASB: 'For this is the will of God, your sanctification; that is, that you abstain from sexual immorality.',
    },
    context: {
      before: {
        reference: '1 Thessalonians 4:2',
        text: 'For you know what instructions we gave you through the Lord Jesus.',
      },
      after: {
        reference: '1 Thessalonians 4:4',
        text: 'that each one of you know how to control his own body in holiness and honor.',
      },
    },
  },
  {
    id: '1-thessalonians-5-11',
    reference: '1 Thessalonians 5:11',
    book: '1 Thessalonians',
    chapter: 5,
    verse: 11,
    difficulty: 'easy',
    translations: {
      ESV: 'Therefore encourage one another and build one another up, just as you are doing.',
      NIV: 'Therefore encourage one another and build each other up, just as in fact you are doing.',
      KJV: 'Wherefore comfort yourselves together, and edify one another, even as also ye do.',
      NASB: 'Therefore encourage one another and build up one another, just as you also are doing.',
    },
    context: {
      before: {
        reference: '1 Thessalonians 5:10',
        text: 'who died for us so that whether we are awake or asleep we might live with him.',
      },
      after: {
        reference: '1 Thessalonians 5:12',
        text: 'We ask you, brothers, to respect those who labor among you and are over you in the Lord and admonish you.',
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
  {
    id: '2-thessalonians-2-16-17',
    reference: '2 Thessalonians 2:16-17',
    book: '2 Thessalonians',
    chapter: 2,
    verse: 16,
    difficulty: 'medium',
    translations: {
      ESV: 'Now may our Lord Jesus Christ himself, and God our Father, who loved us and gave us eternal comfort and good hope through grace, comfort your hearts and establish them in every good work and word.',
      NIV: 'May our Lord Jesus Christ himself and God our Father, who loved us and by his grace gave us eternal encouragement and good hope, encourage your hearts and strengthen you in every good deed and word.',
      KJV: 'Now our Lord Jesus Christ himself, and God, even our Father, which hath loved us, and hath given us everlasting consolation and good hope through grace, comfort your hearts, and stablish you in every good word and work.',
      NASB: 'Now may our Lord Jesus Christ Himself and God our Father, who has loved us and given us eternal comfort and good hope by grace, comfort and strengthen your hearts in every good work and word.',
    },
    context: {
      before: {
        reference: '2 Thessalonians 2:15',
        text: 'So then, brothers, stand firm and hold to the traditions that you were taught by us, either by our spoken word or by our letter.',
      },
      after: {
        reference: '2 Thessalonians 3:1',
        text: 'Finally, brothers, pray for us, that the word of the Lord may speed ahead and be honored, as happened among you.',
      },
    },
  },
  {
    id: '2-thessalonians-3-10',
    reference: '2 Thessalonians 3:10',
    book: '2 Thessalonians',
    chapter: 3,
    verse: 10,
    difficulty: 'easy',
    translations: {
      ESV: 'For even when we were with you, we would give you this command: If anyone is not willing to work, let him not eat.',
      NIV: 'For even when we were with you, we gave you this rule: "The one who is unwilling to work shall not eat."',
      KJV: 'For even when we were with you, this we commanded you, that if any would not work, neither should he eat.',
      NASB: 'For even when we were with you, we used to give you this order: if anyone is not willing to work, then he is not to eat, either.',
    },
    context: {
      before: {
        reference: '2 Thessalonians 3:9',
        text: 'It was not because we do not have that right, but to give you in ourselves an example to imitate.',
      },
      after: {
        reference: '2 Thessalonians 3:11',
        text: 'For we hear that some among you walk in idleness, not busy at work, but busybodies.',
      },
    },
  },
  {
    id: '2-thessalonians-1-11-12',
    reference: '2 Thessalonians 1:11-12',
    book: '2 Thessalonians',
    chapter: 1,
    verse: 11,
    difficulty: 'hard',
    translations: {
      ESV: 'To this end we always pray for you, that our God may make you worthy of his calling and may fulfill every resolve for good and every work of faith by his power, so that the name of our Lord Jesus may be glorified in you, and you in him, according to the grace of our God and the Lord Jesus Christ.',
      NIV: 'With this in mind, we constantly pray for you, that our God may make you worthy of his calling, and that by his power he may bring to fruition your every desire for goodness and your every deed prompted by faith. We pray this so that the name of our Lord Jesus may be glorified in you, and you in him, according to the grace of our God and the Lord Jesus Christ.',
      KJV: 'Wherefore also we pray always for you, that our God would count you worthy of this calling, and fulfil all the good pleasure of his goodness, and the work of faith with power: That the name of our Lord Jesus Christ may be glorified in you, and ye in him, according to the grace of our God and the Lord Jesus Christ.',
      NASB: 'To this end also we pray for you always, that our God will count you worthy of your calling, and fulfill every desire for goodness and the work of faith with power, so that the name of our Lord Jesus will be glorified in you, and you in Him, according to the grace of our God and the Lord Jesus Christ.',
    },
    context: {
      before: {
        reference: '2 Thessalonians 1:10',
        text: 'when he comes on that day to be glorified in his saints, and to be marveled at among all who have believed.',
      },
      after: {
        reference: '2 Thessalonians 2:1',
        text: 'Now concerning the coming of our Lord Jesus Christ and our being gathered together to him, we ask you, brothers.',
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
  {
    id: '1-timothy-3-16',
    reference: '1 Timothy 3:16',
    book: '1 Timothy',
    chapter: 3,
    verse: 16,
    difficulty: 'hard',
    translations: {
      ESV: 'Great indeed, we confess, is the mystery of godliness: He was manifested in the flesh, vindicated by the Spirit, seen by angels, proclaimed among the nations, believed on in the world, taken up in glory.',
      NIV: 'Beyond all question, the mystery from which true godliness springs is great: He appeared in the flesh, was vindicated by the Spirit, was seen by angels, was preached among the nations, was believed on in the world, was taken up in glory.',
      KJV: 'And without controversy great is the mystery of godliness: God was manifest in the flesh, justified in the Spirit, seen of angels, preached unto the Gentiles, believed on in the world, received up into glory.',
      NASB: 'By common confession, great is the mystery of godliness: He who was revealed in the flesh, was vindicated in the Spirit, seen by angels, proclaimed among the nations, believed on in the world, taken up in glory.',
    },
    context: {
      before: {
        reference: '1 Timothy 3:15',
        text: 'if I delay, you may know how one ought to behave in the household of God, which is the church of the living God, a pillar and buttress of the truth.',
      },
      after: {
        reference: '1 Timothy 4:1',
        text: 'Now the Spirit expressly says that in later times some will depart from the faith by devoting themselves to deceitful spirits and teachings of demons,',
      },
    },
  },
  {
    id: '1-timothy-6-12',
    reference: '1 Timothy 6:12',
    book: '1 Timothy',
    chapter: 6,
    verse: 12,
    difficulty: 'medium',
    translations: {
      ESV: 'Fight the good fight of the faith. Take hold of the eternal life to which you were called and about which you made the good confession in the presence of many witnesses.',
      NIV: 'Fight the good fight of the faith. Take hold of the eternal life to which you were called when you made your good confession in the presence of many witnesses.',
      KJV: 'Fight the good fight of faith, lay hold on eternal life, whereunto thou art also called, and hast professed a good profession before many witnesses.',
      NASB: 'Fight the good fight of faith; take hold of the eternal life to which you were called, and you made the good confession in the presence of many witnesses.',
    },
    context: {
      before: {
        reference: '1 Timothy 6:11',
        text: 'But as for you, O man of God, flee these things. Pursue righteousness, godliness, faith, love, steadfastness, gentleness.',
      },
      after: {
        reference: '1 Timothy 6:13',
        text: 'I charge you in the presence of God, who gives life to all things, and of Christ Jesus, who in his testimony before Pontius Pilate made the good confession,',
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
  {
    id: '2-timothy-2-15',
    reference: '2 Timothy 2:15',
    book: '2 Timothy',
    chapter: 2,
    verse: 15,
    difficulty: 'medium',
    translations: {
      ESV: 'Do your best to present yourself to God as one approved, a worker who has no need to be ashamed, rightly handling the word of truth.',
      NIV: 'Do your best to present yourself to God as one approved, a worker who does not need to be ashamed and who correctly handles the word of truth.',
      KJV: 'Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.',
      NASB: 'Be diligent to present yourself approved to God as a workman who does not need to be ashamed, accurately handling the word of truth.',
    },
    context: {
      before: {
        reference: '2 Timothy 2:14',
        text: 'Remind them of these things, and charge them before God not to quarrel about words, which does no good, but only ruins the hearers.',
      },
      after: {
        reference: '2 Timothy 2:16',
        text: 'But avoid irreverent babble, for it will lead people into more and more ungodliness,',
      },
    },
  },
  {
    id: '2-timothy-4-7',
    reference: '2 Timothy 4:7',
    book: '2 Timothy',
    chapter: 4,
    verse: 7,
    difficulty: 'easy',
    translations: {
      ESV: 'I have fought the good fight, I have finished the race, I have kept the faith.',
      NIV: 'I have fought the good fight, I have finished the race, I have kept the faith.',
      KJV: 'I have fought a good fight, I have finished my course, I have kept the faith:',
      NASB: 'I have fought the good fight, I have finished the course, I have kept the faith;',
    },
    context: {
      before: {
        reference: '2 Timothy 4:6',
        text: 'For I am already being poured out as a drink offering, and the time of my departure has come.',
      },
      after: {
        reference: '2 Timothy 4:8',
        text: 'Henceforth there is laid up for me the crown of righteousness, which the Lord, the righteous judge, will award to me on that day, and not only to me but also to all who have loved his appearing.',
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
  {
    id: 'titus-1-2',
    reference: 'Titus 1:2',
    book: 'Titus',
    chapter: 1,
    verse: 2,
    difficulty: 'medium',
    translations: {
      ESV: 'in hope of eternal life, which God, who never lies, promised before the ages began',
      NIV: 'in the hope of eternal life, which God, who does not lie, promised before the beginning of time,',
      KJV: 'In hope of eternal life, which God, that cannot lie, promised before the world began;',
      NASB: 'in the hope of eternal life, which God, who cannot lie, promised long ages ago,',
    },
    context: {
      before: {
        reference: 'Titus 1:1',
        text: 'Paul, a servant of God and an apostle of Jesus Christ, for the sake of the faith of God\'s elect and their knowledge of the truth, which accords with godliness,',
      },
      after: {
        reference: 'Titus 1:3',
        text: 'and at the proper time manifested in his word through the preaching with which I have been entrusted by the command of God our Savior;',
      },
    },
  },
  {
    id: 'titus-2-14',
    reference: 'Titus 2:14',
    book: 'Titus',
    chapter: 2,
    verse: 14,
    difficulty: 'hard',
    translations: {
      ESV: 'who gave himself for us to redeem us from all lawlessness and to purify for himself a people for his own possession who are zealous for good works.',
      NIV: 'who gave himself for us to redeem us from all wickedness and to purify for himself a people that are his very own, eager to do what is good.',
      KJV: 'Who gave himself for us, that he might redeem us from all iniquity, and purify unto himself a peculiar people, zealous of good works.',
      NASB: 'who gave Himself for us to redeem us from every lawless deed, and to purify for Himself a people for His own possession, zealous for good deeds.',
    },
    context: {
      before: {
        reference: 'Titus 2:13',
        text: 'waiting for our blessed hope, the appearing of the glory of our great God and Savior Jesus Christ,',
      },
      after: {
        reference: 'Titus 2:15',
        text: 'Declare these things; exhort and rebuke with all authority. Let no one disregard you.',
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
  {
    id: 'philemon-15-16',
    reference: 'Philemon 15-16',
    book: 'Philemon',
    chapter: 1,
    verse: 15,
    difficulty: 'medium',
    translations: {
      ESV: 'For this perhaps is why he was parted from you for a while, that you might have him back forever, no longer as a bondservant but more than a bondservant, as a beloved brother.',
      NIV: 'Perhaps the reason he was separated from you for a little while was that you might have him back forever—no longer as a slave, but better than a slave, as a dear brother.',
      KJV: 'For perhaps he therefore departed for a season, that thou shouldest receive him for ever; not now as a servant, but above a servant, a brother beloved.',
      NASB: 'For perhaps he was for this reason separated from you for a while, that you would have him back forever, no longer as a slave, but more than a slave, a beloved brother.',
    },
    context: {
      before: {
        reference: 'Philemon 14',
        text: 'But I preferred to do nothing without your consent in order that your goodness might not be by compulsion but of your own accord.',
      },
      after: {
        reference: 'Philemon 17',
        text: 'So if you consider me your partner, receive him as you would receive me.',
      },
    },
  },
  {
    id: 'philemon-17-18',
    reference: 'Philemon 17-18',
    book: 'Philemon',
    chapter: 1,
    verse: 17,
    difficulty: 'medium',
    translations: {
      ESV: 'So if you consider me your partner, receive him as you would receive me. If he has wronged you at all, or owes you anything, charge that to my account.',
      NIV: 'So if you consider me a partner, welcome him as you would welcome me. If he has done you any wrong or owes you anything, charge it to me.',
      KJV: 'If thou count me therefore a partner, receive him as myself. If he hath wronged thee, or oweth thee ought, put that on mine account.',
      NASB: 'If then you regard me a partner, accept him as you would me. But if he has wronged you in any way or owes you anything, charge that to my account.',
    },
    context: {
      before: {
        reference: 'Philemon 16',
        text: 'no longer as a bondservant but more than a bondservant, as a beloved brother—especially to me, but how much more to you, both in the flesh and in the Lord.',
      },
      after: {
        reference: 'Philemon 19',
        text: 'I, Paul, write this with my own hand: I will repay it—to say nothing of your owing me even your own self.',
      },
    },
  },
  {
    id: 'philemon-4-5',
    reference: 'Philemon 4-5',
    book: 'Philemon',
    chapter: 1,
    verse: 4,
    difficulty: 'easy',
    translations: {
      ESV: 'I thank my God always when I remember you in my prayers, because I hear of your love and of the faith that you have toward the Lord Jesus and for all the saints.',
      NIV: 'I always thank my God as I remember you in my prayers, because I hear about your love for all his holy people and your faith in the Lord Jesus.',
      KJV: 'I thank my God, making mention of thee always in my prayers, hearing of thy love and faith, which thou hast toward the Lord Jesus, and toward all saints.',
      NASB: 'I thank my God always, making mention of you in my prayers, because I hear of your love and of the faith which you have toward the Lord Jesus and toward all the saints.',
    },
    context: {
      before: {
        reference: 'Philemon 3',
        text: 'Grace to you and peace from God our Father and the Lord Jesus Christ.',
      },
      after: {
        reference: 'Philemon 6',
        text: 'and I pray that the sharing of your faith may become effective for the full knowledge of every good thing that is in us for the sake of Christ.',
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
  {
    id: 'hebrews-4-15-16',
    reference: 'Hebrews 4:15-16',
    book: 'Hebrews',
    chapter: 4,
    verse: 15,
    difficulty: 'hard',
    translations: {
      ESV: 'For we do not have a high priest who is unable to sympathize with our weaknesses, but one who in every respect has been tempted as we are, yet without sin. Let us then with confidence draw near to the throne of grace, that we may receive mercy and find grace to help in time of need.',
      NIV: 'For we do not have a high priest who is unable to empathize with our weaknesses, but we have one who has been tempted in every way, just as we are—yet he did not sin. Let us then approach God\'s throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need.',
      KJV: 'For we have not an high priest which cannot be touched with the feeling of our infirmities; but was in all points tempted like as we are, yet without sin. Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need.',
      NASB: 'For we do not have a high priest who cannot sympathize with our weaknesses, but One who has been tempted in all things as we are, yet without sin. Therefore let us draw near with confidence to the throne of grace, so that we may receive mercy and find grace to help in time of need.',
    },
    context: {
      before: {
        reference: 'Hebrews 4:14',
        text: 'Since then we have a great high priest who has passed through the heavens, Jesus, the Son of God, let us hold fast our confession.',
      },
      after: {
        reference: 'Hebrews 5:1',
        text: 'For every high priest chosen from among men is appointed to act on behalf of men in relation to God, to offer gifts and sacrifices for sins.',
      },
    },
  },
  {
    id: 'hebrews-1-3',
    reference: 'Hebrews 1:3',
    book: 'Hebrews',
    chapter: 1,
    verse: 3,
    difficulty: 'hard',
    translations: {
      ESV: 'He is the radiance of the glory of God and the exact imprint of his nature, and he upholds the universe by the word of his power. After making purification for sins, he sat down at the right hand of the Majesty on high,',
      NIV: 'The Son is the radiance of God\'s glory and the exact representation of his being, sustaining all things by his powerful word. After he had provided purification for sins, he sat down at the right hand of the Majesty in heaven.',
      KJV: 'Who being the brightness of his glory, and the express image of his person, and upholding all things by the word of his power, when he had by himself purged our sins, sat down on the right hand of the Majesty on high;',
      NASB: 'And He is the radiance of His glory and the exact representation of His nature, and upholds all things by the word of His power. When He had made purification of sins, He sat down at the right hand of the Majesty on high,',
    },
    context: {
      before: {
        reference: 'Hebrews 1:2',
        text: 'but in these last days he has spoken to us by his Son, whom he appointed the heir of all things, through whom also he created the world.',
      },
      after: {
        reference: 'Hebrews 1:4',
        text: 'having become as much superior to angels as the name he has inherited is more excellent than theirs.',
      },
    },
  },
  {
    id: 'hebrews-2-17',
    reference: 'Hebrews 2:17',
    book: 'Hebrews',
    chapter: 2,
    verse: 17,
    difficulty: 'hard',
    translations: {
      ESV: 'Therefore he had to be made like his brothers in every respect, so that he might become a merciful and faithful high priest in the service of God, to make propitiation for the sins of the people.',
      NIV: 'For this reason he had to be made like them, fully human in every way, in order that he might become a merciful and faithful high priest in service to God, and that he might make atonement for the sins of the people.',
      KJV: 'Wherefore in all things it behoved him to be made like unto his brethren, that he might be a merciful and faithful high priest in things pertaining to God, to make reconciliation for the sins of the people.',
      NASB: 'Therefore, He had to be made like His brethren in all things, so that He might become a merciful and faithful high priest in things pertaining to God, to make propitiation for the sins of the people.',
    },
    context: {
      before: {
        reference: 'Hebrews 2:16',
        text: 'For surely it is not angels that he helps, but he helps the offspring of Abraham.',
      },
      after: {
        reference: 'Hebrews 2:18',
        text: 'For because he himself has suffered when tempted, he is able to help those who are being tempted.',
      },
    },
  },
  {
    id: 'hebrews-7-25',
    reference: 'Hebrews 7:25',
    book: 'Hebrews',
    chapter: 7,
    verse: 25,
    difficulty: 'medium',
    translations: {
      ESV: 'Consequently, he is able to save to the uttermost those who draw near to God through him, since he always lives to make intercession for them.',
      NIV: 'Therefore he is able to save completely those who come to God through him, because he always lives to intercede for them.',
      KJV: 'Wherefore he is able also to save them to the uttermost that come unto God by him, seeing he ever liveth to make intercession for them.',
      NASB: 'Therefore He is able also to save forever those who draw near to God through Him, since He always lives to make intercession for them.',
    },
    context: {
      before: {
        reference: 'Hebrews 7:24',
        text: 'but he holds his priesthood permanently, because he continues forever.',
      },
      after: {
        reference: 'Hebrews 7:26',
        text: 'For it was indeed fitting that we should have such a high priest, holy, innocent, unstained, separated from sinners, and exalted above the heavens.',
      },
    },
  },
  {
    id: 'hebrews-9-14',
    reference: 'Hebrews 9:14',
    book: 'Hebrews',
    chapter: 9,
    verse: 14,
    difficulty: 'hard',
    translations: {
      ESV: 'how much more will the blood of Christ, who through the eternal Spirit offered himself without blemish to God, purify our conscience from dead works to serve the living God.',
      NIV: 'How much more, then, will the blood of Christ, who through the eternal Spirit offered himself unblemished to God, cleanse our consciences from acts that lead to death, so that we may serve the living God!',
      KJV: 'How much more shall the blood of Christ, who through the eternal Spirit offered himself without spot to God, purge your conscience from dead works to serve the living God?',
      NASB: 'how much more will the blood of Christ, who through the eternal Spirit offered Himself without blemish to God, cleanse your conscience from dead works to serve the living God?',
    },
    context: {
      before: {
        reference: 'Hebrews 9:13',
        text: 'For if the blood of goats and bulls, and the sprinkling of defiled persons with the ashes of a heifer, sanctify for the purification of the flesh,',
      },
      after: {
        reference: 'Hebrews 9:15',
        text: 'Therefore he is the mediator of a new covenant, so that those who are called may receive the promised eternal inheritance,',
      },
    },
  },
  {
    id: 'hebrews-10-14',
    reference: 'Hebrews 10:14',
    book: 'Hebrews',
    chapter: 10,
    verse: 14,
    difficulty: 'medium',
    translations: {
      ESV: 'For by a single offering he has perfected for all time those who are being sanctified.',
      NIV: 'For by one sacrifice he has made perfect forever those who are being made holy.',
      KJV: 'For by one offering he hath perfected for ever them that are sanctified.',
      NASB: 'For by one offering He has perfected for all time those who are sanctified.',
    },
    context: {
      before: {
        reference: 'Hebrews 10:13',
        text: 'waiting from that time until his enemies should be made a footstool for his feet.',
      },
      after: {
        reference: 'Hebrews 10:15',
        text: 'And the Holy Spirit also bears witness to us; for after saying,',
      },
    },
  },
  {
    id: 'hebrews-10-24-25',
    reference: 'Hebrews 10:24-25',
    book: 'Hebrews',
    chapter: 10,
    verse: 24,
    difficulty: 'hard',
    translations: {
      ESV: 'And let us consider how to stir up one another to love and good works, not neglecting to meet together, as is the habit of some, but encouraging one another, and all the more as you see the Day drawing near.',
      NIV: 'And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together, as some are in the habit of doing, but encouraging one another—and all the more as you see the Day approaching.',
      KJV: 'And let us consider one another to provoke unto love and to good works: Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another: and so much the more, as ye see the day approaching.',
      NASB: 'and let us consider how to stimulate one another to love and good deeds, not forsaking our own assembling together, as is the habit of some, but encouraging one another; and all the more as you see the day drawing near.',
    },
    context: {
      before: {
        reference: 'Hebrews 10:23',
        text: 'Let us hold fast the confession of our hope without wavering, for he who promised is faithful.',
      },
      after: {
        reference: 'Hebrews 10:26',
        text: 'For if we go on sinning deliberately after receiving the knowledge of the truth, there no longer remains a sacrifice for sins,',
      },
    },
  },
  {
    id: 'hebrews-11-6',
    reference: 'Hebrews 11:6',
    book: 'Hebrews',
    chapter: 11,
    verse: 6,
    difficulty: 'medium',
    translations: {
      ESV: 'And without faith it is impossible to please him, for whoever would draw near to God must believe that he exists and that he rewards those who seek him.',
      NIV: 'And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him.',
      KJV: 'But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him.',
      NASB: 'And without faith it is impossible to please Him, for he who comes to God must believe that He is and that He is a rewarder of those who seek Him.',
    },
    context: {
      before: {
        reference: 'Hebrews 11:5',
        text: 'By faith Enoch was taken up so that he should not see death, and he was not found, because God had taken him.',
      },
      after: {
        reference: 'Hebrews 11:7',
        text: 'By faith Noah, being warned by God concerning events as yet unseen, in reverent fear constructed an ark for the saving of his household.',
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
  {
    id: 'james-4-7',
    reference: 'James 4:7',
    book: 'James',
    chapter: 4,
    verse: 7,
    difficulty: 'easy',
    translations: {
      ESV: 'Submit yourselves therefore to God. Resist the devil, and he will flee from you.',
      NIV: 'Submit yourselves, then, to God. Resist the devil, and he will flee from you.',
      KJV: 'Submit yourselves therefore to God. Resist the devil, and he will flee from you.',
      NASB: 'Submit therefore to God. Resist the devil and he will flee from you.',
    },
    context: {
      before: {
        reference: 'James 4:6',
        text: 'But he gives more grace. Therefore it says, "God opposes the proud but gives grace to the humble."',
      },
      after: {
        reference: 'James 4:8',
        text: 'Draw near to God, and he will draw near to you. Cleanse your hands, you sinners, and purify your hearts, you double-minded.',
      },
    },
  },
  {
    id: 'james-2-26',
    reference: 'James 2:26',
    book: 'James',
    chapter: 2,
    verse: 26,
    difficulty: 'medium',
    translations: {
      ESV: 'For as the body apart from the spirit is dead, so also faith apart from works is dead.',
      NIV: 'As the body without the spirit is dead, so faith without deeds is dead.',
      KJV: 'For as the body without the spirit is dead, so faith without works is dead also.',
      NASB: 'For just as the body without the spirit is dead, so also faith without works is dead.',
    },
    context: {
      before: {
        reference: 'James 2:25',
        text: 'And in the same way was not also Rahab the prostitute justified by works when she received the messengers and sent them out by another way?',
      },
      after: {
        reference: 'James 3:1',
        text: 'Not many of you should become teachers, my brothers, for you know that we who teach will be judged with greater strictness.',
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
  {
    id: '1-peter-3-15',
    reference: '1 Peter 3:15',
    book: '1 Peter',
    chapter: 3,
    verse: 15,
    difficulty: 'hard',
    translations: {
      ESV: 'but in your hearts honor Christ the Lord as holy, always being prepared to make a defense to anyone who asks you for a reason for the hope that is in you; yet do it with gentleness and respect,',
      NIV: 'But in your hearts revere Christ as Lord. Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect,',
      KJV: 'But sanctify the Lord God in your hearts: and be ready always to give an answer to every man that asketh you a reason of the hope that is in you with meekness and fear:',
      NASB: 'but sanctify Christ as Lord in your hearts, always being ready to make a defense to everyone who asks you to give an account for the hope that is in you, yet with gentleness and reverence;',
    },
    context: {
      before: {
        reference: '1 Peter 3:14',
        text: 'But even if you should suffer for righteousness\' sake, you will be blessed. Have no fear of them, nor be troubled,',
      },
      after: {
        reference: '1 Peter 3:16',
        text: 'having a good conscience, so that, when you are slandered, those who revile your good behavior in Christ may be put to shame.',
      },
    },
  },
  {
    id: '1-peter-1-3',
    reference: '1 Peter 1:3',
    book: '1 Peter',
    chapter: 1,
    verse: 3,
    difficulty: 'hard',
    translations: {
      ESV: 'Blessed be the God and Father of our Lord Jesus Christ! According to his great mercy, he has caused us to be born again to a living hope through the resurrection of Jesus Christ from the dead,',
      NIV: 'Praise be to the God and Father of our Lord Jesus Christ! In his great mercy he has given us new birth into a living hope through the resurrection of Jesus Christ from the dead,',
      KJV: 'Blessed be the God and Father of our Lord Jesus Christ, which according to his abundant mercy hath begotten us again unto a lively hope by the resurrection of Jesus Christ from the dead,',
      NASB: 'Blessed be the God and Father of our Lord Jesus Christ, who according to His great mercy has caused us to be born again to a living hope through the resurrection of Jesus Christ from the dead,',
    },
    context: {
      before: {
        reference: '1 Peter 1:2',
        text: 'according to the foreknowledge of God the Father, in the sanctification of the Spirit, for obedience to Jesus Christ and for sprinkling with his blood: May grace and peace be multiplied to you.',
      },
      after: {
        reference: '1 Peter 1:4',
        text: 'to an inheritance that is imperishable, undefiled, and unfading, kept in heaven for you,',
      },
    },
  },
  {
    id: '1-peter-1-18-19',
    reference: '1 Peter 1:18-19',
    book: '1 Peter',
    chapter: 1,
    verse: 18,
    difficulty: 'hard',
    translations: {
      ESV: 'knowing that you were ransomed from the futile ways inherited from your forefathers, not with perishable things such as silver or gold, but with the precious blood of Christ, like that of a lamb without blemish or spot.',
      NIV: 'For you know that it was not with perishable things such as silver or gold that you were redeemed from the empty way of life handed down to you from your ancestors, but with the precious blood of Christ, a lamb without blemish or defect.',
      KJV: 'Forasmuch as ye know that ye were not redeemed with corruptible things, as silver and gold, from your vain conversation received by tradition from your fathers; But with the precious blood of Christ, as of a lamb without blemish and without spot:',
      NASB: 'knowing that you were not redeemed with perishable things like silver or gold from your futile way of life inherited from your forefathers, but with precious blood, as of a lamb unblemished and spotless, the blood of Christ.',
    },
    context: {
      before: {
        reference: '1 Peter 1:17',
        text: 'And if you call on him as Father who judges impartially according to each one\'s deeds, conduct yourselves with fear throughout the time of your exile,',
      },
      after: {
        reference: '1 Peter 1:20',
        text: 'He was foreknown before the foundation of the world but was made manifest in the last times for the sake of you',
      },
    },
  },
  {
    id: '1-peter-2-24',
    reference: '1 Peter 2:24',
    book: '1 Peter',
    chapter: 2,
    verse: 24,
    difficulty: 'hard',
    translations: {
      ESV: 'He himself bore our sins in his body on the tree, that we might die to sin and live to righteousness. By his wounds you have been healed.',
      NIV: '"He himself bore our sins" in his body on the cross, so that we might die to sins and live for righteousness; "by his wounds you have been healed."',
      KJV: 'Who his own self bare our sins in his own body on the tree, that we, being dead to sins, should live unto righteousness: by whose stripes ye were healed.',
      NASB: 'and He Himself bore our sins in His body on the cross, so that we might die to sin and live to righteousness; for by His wounds you were healed.',
    },
    context: {
      before: {
        reference: '1 Peter 2:23',
        text: 'When he was reviled, he did not revile in return; when he suffered, he did not threaten, but continued entrusting himself to him who judges justly.',
      },
      after: {
        reference: '1 Peter 2:25',
        text: 'For you were straying like sheep, but have now returned to the Shepherd and Overseer of your souls.',
      },
    },
  },
  {
    id: '1-peter-4-12-13',
    reference: '1 Peter 4:12-13',
    book: '1 Peter',
    chapter: 4,
    verse: 12,
    difficulty: 'hard',
    translations: {
      ESV: 'Beloved, do not be surprised at the fiery trial when it comes upon you to test you, as though something strange were happening to you. But rejoice insofar as you share Christ\'s sufferings, that you may also rejoice and be glad when his glory is revealed.',
      NIV: 'Dear friends, do not be surprised at the fiery ordeal that has come on you to test you, as though something strange were happening to you. But rejoice inasmuch as you participate in the sufferings of Christ, so that you may be overjoyed when his glory is revealed.',
      KJV: 'Beloved, think it not strange concerning the fiery trial which is to try you, as though some strange thing happened unto you: But rejoice, inasmuch as ye are partakers of Christ\'s sufferings; that, when his glory shall be revealed, ye may be glad also with exceeding joy.',
      NASB: 'Beloved, do not be surprised at the fiery ordeal among you, which comes upon you for your testing, as though some strange thing were happening to you; but to the degree that you share the sufferings of Christ, keep on rejoicing, so that also at the revelation of His glory you may rejoice with exultation.',
    },
    context: {
      before: {
        reference: '1 Peter 4:11',
        text: 'whoever speaks, as one who speaks oracles of God; whoever serves, as one who serves by the strength that God supplies—in order that in everything God may be glorified through Jesus Christ.',
      },
      after: {
        reference: '1 Peter 4:14',
        text: 'If you are insulted for the name of Christ, you are blessed, because the Spirit of glory and of God rests upon you.',
      },
    },
  },
  {
    id: '1-peter-5-8-9',
    reference: '1 Peter 5:8-9',
    book: '1 Peter',
    chapter: 5,
    verse: 8,
    difficulty: 'medium',
    translations: {
      ESV: 'Be sober-minded; be watchful. Your adversary the devil prowls around like a roaring lion, seeking someone to devour. Resist him, firm in your faith, knowing that the same kinds of suffering are being experienced by your brotherhood throughout the world.',
      NIV: 'Be alert and of sober mind. Your enemy the devil prowls around like a roaring lion looking for someone to devour. Resist him, standing firm in the faith, because you know that the family of believers throughout the world is undergoing the same kind of sufferings.',
      KJV: 'Be sober, be vigilant; because your adversary the devil, as a roaring lion, walketh about, seeking whom he may devour: Whom resist stedfast in the faith, knowing that the same afflictions are accomplished in your brethren that are in the world.',
      NASB: 'Be of sober spirit, be on the alert. Your adversary, the devil, prowls around like a roaring lion, seeking someone to devour. But resist him, firm in your faith, knowing that the same experiences of suffering are being accomplished by your brethren who are in the world.',
    },
    context: {
      before: {
        reference: '1 Peter 5:7',
        text: 'casting all your anxieties on him, because he cares for you.',
      },
      after: {
        reference: '1 Peter 5:10',
        text: 'And after you have suffered a little while, the God of all grace, who has called you to his eternal glory in Christ, will himself restore, confirm, strengthen, and establish you.',
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
  {
    id: '1-john-3-1',
    reference: '1 John 3:1',
    book: '1 John',
    chapter: 3,
    verse: 1,
    difficulty: 'medium',
    translations: {
      ESV: 'See what kind of love the Father has given to us, that we should be called children of God; and so we are. The reason why the world does not know us is that it did not know him.',
      NIV: 'See what great love the Father has lavished on us, that we should be called children of God! And that is what we are! The reason the world does not know us is that it did not know him.',
      KJV: 'Behold, what manner of love the Father hath bestowed upon us, that we should be called the sons of God: therefore the world knoweth us not, because it knew him not.',
      NASB: 'See how great a love the Father has bestowed on us, that we would be called children of God; and such we are. For this reason the world does not know us, because it did not know Him.',
    },
    context: {
      before: {
        reference: '1 John 2:29',
        text: 'If you know that he is righteous, you may be sure that everyone who practices righteousness has been born of him.',
      },
      after: {
        reference: '1 John 3:2',
        text: 'Beloved, we are God\'s children now, and what we will be has not yet appeared; but we know that when he appears we shall be like him, because we shall see him as he is.',
      },
    },
  },
  {
    id: '1-john-4-8',
    reference: '1 John 4:8',
    book: '1 John',
    chapter: 4,
    verse: 8,
    difficulty: 'easy',
    translations: {
      ESV: 'Anyone who does not love does not know God, because God is love.',
      NIV: 'Whoever does not love does not know God, because God is love.',
      KJV: 'He that loveth not knoweth not God; for God is love.',
      NASB: 'The one who does not love does not know God, for God is love.',
    },
    context: {
      before: {
        reference: '1 John 4:7',
        text: 'Beloved, let us love one another, for love is from God, and whoever loves has been born of God and knows God.',
      },
      after: {
        reference: '1 John 4:9',
        text: 'In this the love of God was made manifest among us, that God sent his only Son into the world, so that we might live through him.',
      },
    },
  },
  {
    id: '1-john-5-11',
    reference: '1 John 5:11',
    book: '1 John',
    chapter: 5,
    verse: 11,
    difficulty: 'medium',
    translations: {
      ESV: 'And this is the testimony, that God gave us eternal life, and this life is in his Son.',
      NIV: 'And this is the testimony: God has given us eternal life, and this life is in his Son.',
      KJV: 'And this is the record, that God hath given to us eternal life, and this life is in his Son.',
      NASB: 'And the testimony is this, that God has given us eternal life, and this life is in His Son.',
    },
    context: {
      before: {
        reference: '1 John 5:10',
        text: 'Whoever believes in the Son of God has the testimony in himself. Whoever does not believe God has made him a liar, because he has not believed in the testimony that God has borne concerning his Son.',
      },
      after: {
        reference: '1 John 5:12',
        text: 'Whoever has the Son has life; whoever does not have the Son of God does not have life.',
      },
    },
  },
  {
    id: '1-john-2-15',
    reference: '1 John 2:15',
    book: '1 John',
    chapter: 2,
    verse: 15,
    difficulty: 'medium',
    translations: {
      ESV: 'Do not love the world or the things in the world. If anyone loves the world, the love of the Father is not in him.',
      NIV: 'Do not love the world or anything in the world. If anyone loves the world, love for the Father is not in them.',
      KJV: 'Love not the world, neither the things that are in the world. If any man love the world, the love of the Father is not in him.',
      NASB: 'Do not love the world nor the things in the world. If anyone loves the world, the love of the Father is not in him.',
    },
    context: {
      before: {
        reference: '1 John 2:14',
        text: 'I write to you, fathers, because you know him who is from the beginning. I write to you, young men, because you are strong, and the word of God abides in you, and you have overcome the evil one.',
      },
      after: {
        reference: '1 John 2:16',
        text: 'For all that is in the world—the desires of the flesh and the desires of the eyes and pride of life—is not from the Father but is from the world.',
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
  {
    id: '2-john-1-3',
    reference: '2 John 3',
    book: '2 John',
    chapter: 1,
    verse: 3,
    difficulty: 'easy',
    translations: {
      ESV: 'Grace, mercy, and peace will be with us, from God the Father and from Jesus Christ the Father\'s Son, in truth and love.',
      NIV: 'Grace, mercy and peace from God the Father and from Jesus Christ, the Father\'s Son, will be with us in truth and love.',
      KJV: 'Grace be with you, mercy, and peace, from God the Father, and from the Lord Jesus Christ, the Son of the Father, in truth and love.',
      NASB: 'Grace, mercy and peace will be with us, from God the Father and from Jesus Christ, the Son of the Father, in truth and love.',
    },
    context: {
      before: {
        reference: '2 John 2',
        text: 'because of the truth that abides in us and will be with us forever.',
      },
      after: {
        reference: '2 John 4',
        text: 'I rejoiced greatly to find some of your children walking in the truth, just as we were commanded by the Father.',
      },
    },
  },
  {
    id: '2-john-1-7',
    reference: '2 John 7',
    book: '2 John',
    chapter: 1,
    verse: 7,
    difficulty: 'medium',
    translations: {
      ESV: 'For many deceivers have gone out into the world, those who do not confess the coming of Jesus Christ in the flesh. Such a one is the deceiver and the antichrist.',
      NIV: 'I say this because many deceivers, who do not acknowledge Jesus Christ as coming in the flesh, have gone out into the world. Any such person is the deceiver and the antichrist.',
      KJV: 'For many deceivers are entered into the world, who confess not that Jesus Christ is come in the flesh. This is a deceiver and an antichrist.',
      NASB: 'For many deceivers have gone out into the world, those who do not acknowledge Jesus Christ as coming in the flesh. This is the deceiver and the antichrist.',
    },
    context: {
      before: {
        reference: '2 John 6',
        text: 'And this is love, that we walk according to his commandments; this is the commandment, just as you have heard from the beginning, so that you should walk in it.',
      },
      after: {
        reference: '2 John 8',
        text: 'Watch yourselves, so that you may not lose what we have worked for, but may win a full reward.',
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
  {
    id: '3-john-1-5-6',
    reference: '3 John 5-6',
    book: '3 John',
    chapter: 1,
    verse: 5,
    difficulty: 'medium',
    translations: {
      ESV: 'Beloved, it is a faithful thing you do in all your efforts for these brothers, strangers as they are, who testified to your love before the church. You will do well to send them on their journey in a manner worthy of God.',
      NIV: 'Dear friend, you are faithful in what you are doing for the brothers and sisters, even though they are strangers to you. They have told the church about your love. Please send them on their way in a manner that honors God.',
      KJV: 'Beloved, thou doest faithfully whatsoever thou doest to the brethren, and to strangers; Which have borne witness of thy charity before the church: whom if thou bring forward on their journey after a godly sort, thou shalt do well.',
      NASB: 'Beloved, you are acting faithfully in whatever you accomplish for the brethren, and especially when they are strangers; and they have testified to your love before the church. You will do well to send them on their way in a manner worthy of God.',
    },
    context: {
      before: {
        reference: '3 John 4',
        text: 'I have no greater joy than to hear that my children are walking in the truth.',
      },
      after: {
        reference: '3 John 7',
        text: 'For they have gone out for the sake of the name, accepting nothing from the Gentiles.',
      },
    },
  },
  {
    id: '3-john-1-2',
    reference: '3 John 2',
    book: '3 John',
    chapter: 1,
    verse: 2,
    difficulty: 'easy',
    translations: {
      ESV: 'Beloved, I pray that all may go well with you and that you may be in good health, as it goes well with your soul.',
      NIV: 'Dear friend, I pray that you may enjoy good health and that all may go well with you, even as your soul is getting along well.',
      KJV: 'Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth.',
      NASB: 'Beloved, I pray that in all respects you may prosper and be in good health, just as your soul prospers.',
    },
    context: {
      before: {
        reference: '3 John 1',
        text: 'The elder to the beloved Gaius, whom I love in truth.',
      },
      after: {
        reference: '3 John 3',
        text: 'For I rejoiced greatly when the brothers came and testified to your truth, as indeed you are walking in the truth.',
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
  {
    id: '2-peter-1-21',
    reference: '2 Peter 1:21',
    book: '2 Peter',
    chapter: 1,
    verse: 21,
    difficulty: 'medium',
    translations: {
      ESV: 'For no prophecy was ever produced by the will of man, but men spoke from God as they were carried along by the Holy Spirit.',
      NIV: 'For prophecy never had its origin in the human will, but prophets, though human, spoke from God as they were carried along by the Holy Spirit.',
      KJV: 'For the prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost.',
      NASB: 'for no prophecy was ever made by an act of human will, but men moved by the Holy Spirit spoke from God.',
    },
    context: {
      before: {
        reference: '2 Peter 1:20',
        text: 'knowing this first of all, that no prophecy of Scripture comes from someone\'s own interpretation.',
      },
      after: {
        reference: '2 Peter 2:1',
        text: 'But false prophets also arose among the people, just as there will be false teachers among you.',
      },
    },
  },
  {
    id: '2-peter-3-18',
    reference: '2 Peter 3:18',
    book: '2 Peter',
    chapter: 3,
    verse: 18,
    difficulty: 'easy',
    translations: {
      ESV: 'But grow in the grace and knowledge of our Lord and Savior Jesus Christ. To him be the glory both now and to the day of eternity. Amen.',
      NIV: 'But grow in the grace and knowledge of our Lord and Savior Jesus Christ. To him be glory both now and forever! Amen.',
      KJV: 'But grow in grace, and in the knowledge of our Lord and Saviour Jesus Christ. To him be glory both now and for ever. Amen.',
      NASB: 'but grow in the grace and knowledge of our Lord and Savior Jesus Christ. To Him be the glory, both now and to the day of eternity. Amen.',
    },
    context: {
      before: {
        reference: '2 Peter 3:17',
        text: 'You therefore, beloved, knowing this beforehand, take care that you are not carried away with the error of lawless people and lose your own stability.',
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
  {
    id: 'jude-20-21',
    reference: 'Jude 20-21',
    book: 'Jude',
    chapter: 1,
    verse: 20,
    difficulty: 'medium',
    translations: {
      ESV: 'But you, beloved, building yourselves up in your most holy faith and praying in the Holy Spirit, keep yourselves in the love of God, waiting for the mercy of our Lord Jesus Christ that leads to eternal life.',
      NIV: 'But you, dear friends, by building yourselves up in your most holy faith and praying in the Holy Spirit, keep yourselves in God\'s love as you wait for the mercy of our Lord Jesus Christ to bring you to eternal life.',
      KJV: 'But ye, beloved, building up yourselves on your most holy faith, praying in the Holy Ghost, keep yourselves in the love of God, looking for the mercy of our Lord Jesus Christ unto eternal life.',
      NASB: 'But you, beloved, building yourselves up on your most holy faith, praying in the Holy Spirit, keep yourselves in the love of God, waiting anxiously for the mercy of our Lord Jesus Christ to eternal life.',
    },
    context: {
      before: {
        reference: 'Jude 19',
        text: 'It is these who cause divisions, worldly people, devoid of the Spirit.',
      },
      after: {
        reference: 'Jude 22',
        text: 'And have mercy on those who doubt.',
      },
    },
  },
  {
    id: 'jude-24-25',
    reference: 'Jude 24-25',
    book: 'Jude',
    chapter: 1,
    verse: 24,
    difficulty: 'hard',
    translations: {
      ESV: 'Now to him who is able to keep you from stumbling and to present you blameless before the presence of his glory with great joy, to the only God, our Savior, through Jesus Christ our Lord, be glory, majesty, dominion, and authority, before all time and now and forever. Amen.',
      NIV: 'To him who is able to keep you from stumbling and to present you before his glorious presence without fault and with great joy—to the only God our Savior be glory, majesty, power and authority, through Jesus Christ our Lord, before all ages, now and forevermore! Amen.',
      KJV: 'Now unto him that is able to keep you from falling, and to present you faultless before the presence of his glory with exceeding joy, To the only wise God our Saviour, be glory and majesty, dominion and power, both now and ever. Amen.',
      NASB: 'Now to Him who is able to keep you from stumbling, and to make you stand in the presence of His glory blameless with great joy, to the only God our Savior, through Jesus Christ our Lord, be glory, majesty, dominion and authority, before all time and now and forever. Amen.',
    },
    context: {
      before: {
        reference: 'Jude 23',
        text: 'save others by snatching them out of the fire; to others show mercy with fear, hating even the garment stained by the flesh.',
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
  {
    id: 'revelation-5-9',
    reference: 'Revelation 5:9',
    book: 'Revelation',
    chapter: 5,
    verse: 9,
    difficulty: 'hard',
    translations: {
      ESV: 'And they sang a new song, saying, "Worthy are you to take the scroll and to open its seals, for you were slain, and by your blood you ransomed people for God from every tribe and language and people and nation."',
      NIV: 'And they sang a new song, saying: "You are worthy to take the scroll and to open its seals, because you were slain, and with your blood you purchased for God persons from every tribe and language and people and nation."',
      KJV: 'And they sung a new song, saying, Thou art worthy to take the book, and to open the seals thereof: for thou wast slain, and hast redeemed us to God by thy blood out of every kindred, and tongue, and people, and nation.',
      NASB: 'And they sang a new song, saying, "Worthy are You to take the book and to break its seals; for You were slain, and purchased for God with Your blood men from every tribe and tongue and people and nation."',
    },
    context: {
      before: {
        reference: 'Revelation 5:8',
        text: 'And when he had taken the scroll, the four living creatures and the twenty-four elders fell down before the Lamb, each holding a harp, and golden bowls full of incense, which are the prayers of the saints.',
      },
      after: {
        reference: 'Revelation 5:10',
        text: 'And you have made them a kingdom and priests to our God, and they shall reign on the earth.',
      },
    },
  },
  {
    id: 'revelation-7-17',
    reference: 'Revelation 7:17',
    book: 'Revelation',
    chapter: 7,
    verse: 17,
    difficulty: 'medium',
    translations: {
      ESV: 'For the Lamb in the midst of the throne will be their shepherd, and he will guide them to springs of living water, and God will wipe away every tear from their eyes.',
      NIV: 'For the Lamb at the center of the throne will be their shepherd; he will lead them to springs of living water. And God will wipe away every tear from their eyes.',
      KJV: 'For the Lamb which is in the midst of the throne shall feed them, and shall lead them unto living fountains of waters: and God shall wipe away all tears from their eyes.',
      NASB: 'for the Lamb in the center of the throne will be their shepherd, and will guide them to springs of the water of life; and God will wipe every tear from their eyes.',
    },
    context: {
      before: {
        reference: 'Revelation 7:16',
        text: 'They shall hunger no more, neither thirst anymore; the sun shall not strike them, nor any scorching heat.',
      },
      after: {
        reference: 'Revelation 8:1',
        text: 'When the Lamb opened the seventh seal, there was silence in heaven for about half an hour.',
      },
    },
  },
  {
    id: 'revelation-12-11',
    reference: 'Revelation 12:11',
    book: 'Revelation',
    chapter: 12,
    verse: 11,
    difficulty: 'medium',
    translations: {
      ESV: 'And they have conquered him by the blood of the Lamb and by the word of their testimony, for they loved not their lives even unto death.',
      NIV: 'They triumphed over him by the blood of the Lamb and by the word of their testimony; they did not love their lives so much as to shrink from death.',
      KJV: 'And they overcame him by the blood of the Lamb, and by the word of their testimony; and they loved not their lives unto the death.',
      NASB: 'And they overcame him because of the blood of the Lamb and because of the word of their testimony, and they did not love their life even when faced with death.',
    },
    context: {
      before: {
        reference: 'Revelation 12:10',
        text: 'And I heard a loud voice in heaven, saying, "Now the salvation and the power and the kingdom of our God and the authority of his Christ have come, for the accuser of our brothers has been thrown down."',
      },
      after: {
        reference: 'Revelation 12:12',
        text: 'Therefore, rejoice, O heavens and you who dwell in them! But woe to you, O earth and sea, for the devil has come down to you in great wrath, because he knows that his time is short!',
      },
    },
  },
  {
    id: 'revelation-19-16',
    reference: 'Revelation 19:16',
    book: 'Revelation',
    chapter: 19,
    verse: 16,
    difficulty: 'easy',
    translations: {
      ESV: 'On his robe and on his thigh he has a name written, King of kings and Lord of lords.',
      NIV: 'On his robe and on his thigh he has this name written: King of kings and Lord of lords.',
      KJV: 'And he hath on his vesture and on his thigh a name written, KING OF KINGS, AND LORD OF LORDS.',
      NASB: 'And on His robe and on His thigh He has a name written, "KING OF KINGS, AND LORD OF LORDS."',
    },
    context: {
      before: {
        reference: 'Revelation 19:15',
        text: 'From his mouth comes a sharp sword with which to strike down the nations, and he will rule them with a rod of iron. He will tread the winepress of the fury of the wrath of God the Almighty.',
      },
      after: {
        reference: 'Revelation 19:17',
        text: 'Then I saw an angel standing in the sun, and with a loud voice he called to all the birds that fly directly overhead.',
      },
    },
  },
  {
    id: 'revelation-21-5',
    reference: 'Revelation 21:5',
    book: 'Revelation',
    chapter: 21,
    verse: 5,
    difficulty: 'medium',
    translations: {
      ESV: 'And he who was seated on the throne said, "Behold, I am making all things new." Also he said, "Write this down, for these words are trustworthy and true."',
      NIV: 'He who was seated on the throne said, "I am making everything new!" Then he said, "Write this down, for these words are trustworthy and true."',
      KJV: 'And he that sat upon the throne said, Behold, I make all things new. And he said unto me, Write: for these words are true and faithful.',
      NASB: 'And He who sits on the throne said, "Behold, I am making all things new." And He said, "Write, for these words are faithful and true."',
    },
    context: {
      before: {
        reference: 'Revelation 21:4',
        text: 'He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.',
      },
      after: {
        reference: 'Revelation 21:6',
        text: 'And he said to me, "It is done! I am the Alpha and the Omega, the beginning and the end. To the thirsty I will give from the spring of the water of life without payment."',
      },
    },
  },
  {
    id: 'revelation-22-17',
    reference: 'Revelation 22:17',
    book: 'Revelation',
    chapter: 22,
    verse: 17,
    difficulty: 'medium',
    translations: {
      ESV: 'The Spirit and the Bride say, "Come." And let the one who hears say, "Come." And let the one who is thirsty come; let the one who desires take the water of life without price.',
      NIV: 'The Spirit and the bride say, "Come!" And let the one who hears say, "Come!" Let the one who is thirsty come; and let the one who wishes take the free gift of the water of life.',
      KJV: 'And the Spirit and the bride say, Come. And let him that heareth say, Come. And let him that is athirst come. And whosoever will, let him take the water of life freely.',
      NASB: 'The Spirit and the bride say, "Come." And let the one who hears say, "Come." And let the one who is thirsty come; let the one who wishes take the water of life without cost.',
    },
    context: {
      before: {
        reference: 'Revelation 22:16',
        text: 'I, Jesus, have sent my angel to testify to you about these things for the churches. I am the root and the descendant of David, the bright morning star.',
      },
      after: {
        reference: 'Revelation 22:18',
        text: 'I warn everyone who hears the words of the prophecy of this book: if anyone adds to them, God will add to him the plagues described in this book.',
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
