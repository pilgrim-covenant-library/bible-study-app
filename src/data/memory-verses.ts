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
  {
    id: 'genesis-1-27',
    reference: 'Genesis 1:27',
    book: 'Genesis',
    chapter: 1,
    verse: 27,
    difficulty: 'easy',
    translations: {
      ESV: 'So God created man in his own image, in the image of God he created him; male and female he created them.',
      NIV: 'So God created mankind in his own image, in the image of God he created them; male and female he created them.',
      KJV: 'So God created man in his own image, in the image of God created he him; male and female created he them.',
      NASB: 'God created man in His own image, in the image of God He created him; male and female He created them.',
    },
    context: {
      before: {
        reference: 'Genesis 1:26',
        text: 'Then God said, "Let us make man in our image, after our likeness. And let them have dominion over the fish of the sea and over the birds of the heavens."',
      },
      after: {
        reference: 'Genesis 1:28',
        text: 'And God blessed them. And God said to them, "Be fruitful and multiply and fill the earth and subdue it."',
      },
    },
  },
  {
    id: 'genesis-2-24',
    reference: 'Genesis 2:24',
    book: 'Genesis',
    chapter: 2,
    verse: 24,
    difficulty: 'easy',
    translations: {
      ESV: 'Therefore a man shall leave his father and his mother and hold fast to his wife, and they shall become one flesh.',
      NIV: 'That is why a man leaves his father and mother and is united to his wife, and they become one flesh.',
      KJV: 'Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh.',
      NASB: 'For this reason a man shall leave his father and his mother, and be joined to his wife; and they shall become one flesh.',
    },
    context: {
      before: {
        reference: 'Genesis 2:23',
        text: 'Then the man said, "This at last is bone of my bones and flesh of my flesh; she shall be called Woman, because she was taken out of Man."',
      },
      after: {
        reference: 'Genesis 2:25',
        text: 'And the man and his wife were both naked and were not ashamed.',
      },
    },
  },
  {
    id: 'genesis-9-6',
    reference: 'Genesis 9:6',
    book: 'Genesis',
    chapter: 9,
    verse: 6,
    difficulty: 'medium',
    translations: {
      ESV: 'Whoever sheds the blood of man, by man shall his blood be shed, for God made man in his own image.',
      NIV: 'Whoever sheds human blood, by humans shall their blood be shed; for in the image of God has God made mankind.',
      KJV: 'Whoso sheddeth man\'s blood, by man shall his blood be shed: for in the image of God made he man.',
      NASB: 'Whoever sheds man\'s blood, by man his blood shall be shed, for in the image of God He made man.',
    },
    context: {
      before: {
        reference: 'Genesis 9:5',
        text: 'And for your lifeblood I will require a reckoning: from every beast I will require it and from man.',
      },
      after: {
        reference: 'Genesis 9:7',
        text: 'And you, be fruitful and multiply, increase greatly on the earth and multiply in it.',
      },
    },
  },
  {
    id: 'genesis-12-3',
    reference: 'Genesis 12:3',
    book: 'Genesis',
    chapter: 12,
    verse: 3,
    difficulty: 'medium',
    translations: {
      ESV: 'I will bless those who bless you, and him who dishonors you I will curse, and in you all the families of the earth shall be blessed.',
      NIV: 'I will bless those who bless you, and whoever curses you I will curse; and all peoples on earth will be blessed through you.',
      KJV: 'And I will bless them that bless thee, and curse him that curseth thee: and in thee shall all families of the earth be blessed.',
      NASB: 'And I will bless those who bless you, and the one who curses you I will curse. And in you all the families of the earth will be blessed.',
    },
    context: {
      before: {
        reference: 'Genesis 12:2',
        text: 'And I will make of you a great nation, and I will bless you and make your name great, so that you will be a blessing.',
      },
      after: {
        reference: 'Genesis 12:4',
        text: 'So Abram went, as the LORD had told him, and Lot went with him.',
      },
    },
  },
  {
    id: 'genesis-22-8',
    reference: 'Genesis 22:8',
    book: 'Genesis',
    chapter: 22,
    verse: 8,
    difficulty: 'medium',
    translations: {
      ESV: 'Abraham said, "God will provide for himself the lamb for a burnt offering, my son." So they went both of them together.',
      NIV: 'Abraham answered, "God himself will provide the lamb for the burnt offering, my son." And the two of them went on together.',
      KJV: 'And Abraham said, My son, God will provide himself a lamb for a burnt offering: so they went both of them together.',
      NASB: 'Abraham said, "God will provide for Himself the lamb for the burnt offering, my son." So the two of them walked on together.',
    },
    context: {
      before: {
        reference: 'Genesis 22:7',
        text: 'And Isaac said to his father Abraham, "My father!" And he said, "Here I am, my son." He said, "Behold, the fire and the wood, but where is the lamb for a burnt offering?"',
      },
      after: {
        reference: 'Genesis 22:9',
        text: 'When they came to the place of which God had told him, Abraham built the altar there and laid the wood in order.',
      },
    },
  },
  {
    id: 'genesis-22-14',
    reference: 'Genesis 22:14',
    book: 'Genesis',
    chapter: 22,
    verse: 14,
    difficulty: 'medium',
    translations: {
      ESV: 'So Abraham called the name of that place, "The LORD will provide"; as it is said to this day, "On the mount of the LORD it shall be provided."',
      NIV: 'So Abraham called that place The LORD Will Provide. And to this day it is said, "On the mountain of the LORD it will be provided."',
      KJV: 'And Abraham called the name of that place Jehovahjireh: as it is said to this day, In the mount of the LORD it shall be seen.',
      NASB: 'Abraham called the name of that place The LORD Will Provide, as it is said to this day, "In the mount of the LORD it will be provided."',
    },
    context: {
      before: {
        reference: 'Genesis 22:13',
        text: 'And Abraham lifted up his eyes and looked, and behold, behind him was a ram, caught in a thicket by his horns.',
      },
      after: {
        reference: 'Genesis 22:15',
        text: 'And the angel of the LORD called to Abraham a second time from heaven.',
      },
    },
  },
  {
    id: 'genesis-1-26',
    reference: 'Genesis 1:26',
    book: 'Genesis',
    chapter: 1,
    verse: 26,
    difficulty: 'medium',
    translations: {
      ESV: 'Then God said, "Let us make man in our image, after our likeness. And let them have dominion over the fish of the sea and over the birds of the heavens and over the livestock and over all the earth and over every creeping thing that creeps on the earth."',
      NIV: 'Then God said, "Let us make mankind in our image, in our likeness, so that they may rule over the fish in the sea and the birds in the sky, over the livestock and all the wild animals, and over all the creatures that move along the ground."',
      KJV: 'And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth.',
      NASB: 'Then God said, "Let Us make man in Our image, according to Our likeness; and let them rule over the fish of the sea and over the birds of the sky and over the cattle and over all the earth, and over every creeping thing that creeps on the earth."',
    },
    context: {
      before: {
        reference: 'Genesis 1:25',
        text: 'And God made the beasts of the earth according to their kinds and the livestock according to their kinds, and everything that creeps on the ground according to its kind. And God saw that it was good.',
      },
      after: {
        reference: 'Genesis 1:27',
        text: 'So God created man in his own image, in the image of God he created him; male and female he created them.',
      },
    },
  },
  {
    id: 'genesis-2-18',
    reference: 'Genesis 2:18',
    book: 'Genesis',
    chapter: 2,
    verse: 18,
    difficulty: 'easy',
    translations: {
      ESV: 'Then the LORD God said, "It is not good that the man should be alone; I will make him a helper fit for him."',
      NIV: 'The LORD God said, "It is not good for the man to be alone. I will make a helper suitable for him."',
      KJV: 'And the LORD God said, It is not good that the man should be alone; I will make him an help meet for him.',
      NASB: 'Then the LORD God said, "It is not good for the man to be alone; I will make him a helper suitable for him."',
    },
    context: {
      before: {
        reference: 'Genesis 2:17',
        text: 'But of the tree of the knowledge of good and evil you shall not eat, for in the day that you eat of it you shall surely die.',
      },
      after: {
        reference: 'Genesis 2:19',
        text: 'Now out of the ground the LORD God had formed every beast of the field and every bird of the heavens and brought them to the man to see what he would call them.',
      },
    },
  },
  {
    id: 'genesis-8-22',
    reference: 'Genesis 8:22',
    book: 'Genesis',
    chapter: 8,
    verse: 22,
    difficulty: 'medium',
    translations: {
      ESV: 'While the earth remains, seedtime and harvest, cold and heat, summer and winter, day and night, shall not cease.',
      NIV: 'As long as the earth endures, seedtime and harvest, cold and heat, summer and winter, day and night will never cease.',
      KJV: 'While the earth remaineth, seedtime and harvest, and cold and heat, and summer and winter, and day and night shall not cease.',
      NASB: 'While the earth remains, seedtime and harvest, and cold and heat, and summer and winter, and day and night shall not cease.',
    },
    context: {
      before: {
        reference: 'Genesis 8:21',
        text: 'And when the LORD smelled the pleasing aroma, the LORD said in his heart, "I will never again curse the ground because of man."',
      },
      after: {
        reference: 'Genesis 9:1',
        text: 'And God blessed Noah and his sons and said to them, "Be fruitful and multiply and fill the earth."',
      },
    },
  },
  {
    id: 'genesis-17-7',
    reference: 'Genesis 17:7',
    book: 'Genesis',
    chapter: 17,
    verse: 7,
    difficulty: 'hard',
    translations: {
      ESV: 'And I will establish my covenant between me and you and your offspring after you throughout their generations for an everlasting covenant, to be God to you and to your offspring after you.',
      NIV: 'I will establish my covenant as an everlasting covenant between me and you and your descendants after you for the generations to come, to be your God and the God of your descendants after you.',
      KJV: 'And I will establish my covenant between me and thee and thy seed after thee in their generations for an everlasting covenant, to be a God unto thee, and to thy seed after thee.',
      NASB: 'I will establish My covenant between Me and you and your descendants after you throughout their generations for an everlasting covenant, to be God to you and to your descendants after you.',
    },
    context: {
      before: {
        reference: 'Genesis 17:6',
        text: 'I will make you exceedingly fruitful, and I will make you into nations, and kings shall come from you.',
      },
      after: {
        reference: 'Genesis 17:8',
        text: 'And I will give to you and to your offspring after you the land of your sojournings, all the land of Canaan, for an everlasting possession, and I will be their God.',
      },
    },
  },
  {
    id: 'genesis-18-14',
    reference: 'Genesis 18:14',
    book: 'Genesis',
    chapter: 18,
    verse: 14,
    difficulty: 'easy',
    translations: {
      ESV: 'Is anything too hard for the LORD? At the appointed time I will return to you, about this time next year, and Sarah shall have a son.',
      NIV: 'Is anything too hard for the LORD? I will return to you at the appointed time next year, and Sarah will have a son.',
      KJV: 'Is any thing too hard for the LORD? At the time appointed I will return unto thee, according to the time of life, and Sarah shall have a son.',
      NASB: 'Is anything too difficult for the LORD? At the appointed time I will return to you, at this time next year, and Sarah will have a son.',
    },
    context: {
      before: {
        reference: 'Genesis 18:13',
        text: 'The LORD said to Abraham, "Why did Sarah laugh and say, \'Shall I indeed bear a child, now that I am old?\'"',
      },
      after: {
        reference: 'Genesis 18:15',
        text: 'But Sarah denied it, saying, "I did not laugh," for she was afraid. He said, "No, but you did laugh."',
      },
    },
  },
  {
    id: 'genesis-28-12',
    reference: 'Genesis 28:12',
    book: 'Genesis',
    chapter: 28,
    verse: 12,
    difficulty: 'medium',
    translations: {
      ESV: 'And he dreamed, and behold, there was a ladder set up on the earth, and the top of it reached to heaven. And behold, the angels of God were ascending and descending on it!',
      NIV: 'He had a dream in which he saw a stairway resting on the earth, with its top reaching to heaven, and the angels of God were ascending and descending on it.',
      KJV: 'And he dreamed, and behold a ladder set up on the earth, and the top of it reached to heaven: and behold the angels of God ascending and descending on it.',
      NASB: 'He had a dream, and behold, a ladder was set on the earth with its top reaching to heaven; and behold, the angels of God were ascending and descending on it.',
    },
    context: {
      before: {
        reference: 'Genesis 28:11',
        text: 'And he came to a certain place and stayed there that night, because the sun had set. Taking one of the stones of the place, he put it under his head and lay down in that place to sleep.',
      },
      after: {
        reference: 'Genesis 28:13',
        text: 'And behold, the LORD stood above it and said, "I am the LORD, the God of Abraham your father and the God of Isaac."',
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
  {
    id: 'exodus-19-5',
    reference: 'Exodus 19:5',
    book: 'Exodus',
    chapter: 19,
    verse: 5,
    difficulty: 'medium',
    translations: {
      ESV: 'Now therefore, if you will indeed obey my voice and keep my covenant, you shall be my treasured possession among all peoples, for all the earth is mine.',
      NIV: 'Now if you obey me fully and keep my covenant, then out of all nations you will be my treasured possession. Although the whole earth is mine.',
      KJV: 'Now therefore, if ye will obey my voice indeed, and keep my covenant, then ye shall be a peculiar treasure unto me above all people: for all the earth is mine.',
      NASB: 'Now then, if you will indeed obey My voice and keep My covenant, then you shall be My own possession among all the peoples, for all the earth is Mine.',
    },
    context: {
      before: {
        reference: 'Exodus 19:4',
        text: 'You yourselves have seen what I did to the Egyptians, and how I bore you on eagles\' wings and brought you to myself.',
      },
      after: {
        reference: 'Exodus 19:6',
        text: 'And you shall be to me a kingdom of priests and a holy nation.',
      },
    },
  },
  {
    id: 'exodus-20-2',
    reference: 'Exodus 20:2',
    book: 'Exodus',
    chapter: 20,
    verse: 2,
    difficulty: 'easy',
    translations: {
      ESV: 'I am the LORD your God, who brought you out of the land of Egypt, out of the house of slavery.',
      NIV: 'I am the LORD your God, who brought you out of Egypt, out of the land of slavery.',
      KJV: 'I am the LORD thy God, which have brought thee out of the land of Egypt, out of the house of bondage.',
      NASB: 'I am the LORD your God, who brought you out of the land of Egypt, out of the house of slavery.',
    },
    context: {
      before: {
        reference: 'Exodus 20:1',
        text: 'And God spoke all these words, saying,',
      },
      after: {
        reference: 'Exodus 20:3',
        text: 'You shall have no other gods before me.',
      },
    },
  },
  {
    id: 'exodus-33-14',
    reference: 'Exodus 33:14',
    book: 'Exodus',
    chapter: 33,
    verse: 14,
    difficulty: 'easy',
    translations: {
      ESV: 'And he said, "My presence will go with you, and I will give you rest."',
      NIV: 'The LORD replied, "My Presence will go with you, and I will give you rest."',
      KJV: 'And he said, My presence shall go with thee, and I will give thee rest.',
      NASB: 'And He said, "My presence shall go with you, and I will give you rest."',
    },
    context: {
      before: {
        reference: 'Exodus 33:13',
        text: 'Now therefore, if I have found favor in your sight, please show me now your ways, that I may know you in order to find favor in your sight.',
      },
      after: {
        reference: 'Exodus 33:15',
        text: 'And he said to him, "If your presence will not go with me, do not bring us up from here."',
      },
    },
  },
  {
    id: 'exodus-33-18-19',
    reference: 'Exodus 33:18-19',
    book: 'Exodus',
    chapter: 33,
    verse: 18,
    difficulty: 'hard',
    translations: {
      ESV: 'Moses said, "Please show me your glory." And he said, "I will make all my goodness pass before you and will proclaim before you my name \'The LORD.\' And I will be gracious to whom I will be gracious, and will show mercy on whom I will show mercy."',
      NIV: 'Then Moses said, "Now show me your glory." And the LORD said, "I will cause all my goodness to pass in front of you, and I will proclaim my name, the LORD, in your presence. I will have mercy on whom I will have mercy, and I will have compassion on whom I will have compassion."',
      KJV: 'And he said, I beseech thee, shew me thy glory. And he said, I will make all my goodness pass before thee, and I will proclaim the name of the LORD before thee; and will be gracious to whom I will be gracious, and will shew mercy on whom I will shew mercy.',
      NASB: 'Then Moses said, "I pray You, show me Your glory!" And He said, "I Myself will make all My goodness pass before you, and will proclaim the name of the LORD before you; and I will be gracious to whom I will be gracious, and will show compassion on whom I will show compassion."',
    },
    context: {
      before: {
        reference: 'Exodus 33:17',
        text: 'And the LORD said to Moses, "This very thing that you have spoken I will do, for you have found favor in my sight, and I know you by name."',
      },
      after: {
        reference: 'Exodus 33:20',
        text: 'But," he said, "you cannot see my face, for man shall not see me and live."',
      },
    },
  },
  {
    id: 'exodus-12-13',
    reference: 'Exodus 12:13',
    book: 'Exodus',
    chapter: 12,
    verse: 13,
    difficulty: 'medium',
    translations: {
      ESV: 'The blood shall be a sign for you, on the houses where you are. And when I see the blood, I will pass over you, and no plague will befall you to destroy you, when I strike the land of Egypt.',
      NIV: 'The blood will be a sign for you on the houses where you are, and when I see the blood, I will pass over you. No destructive plague will touch you when I strike Egypt.',
      KJV: 'And the blood shall be to you for a token upon the houses where ye are: and when I see the blood, I will pass over you, and the plague shall not be upon you to destroy you, when I smite the land of Egypt.',
      NASB: 'The blood shall be a sign for you on the houses where you live; and when I see the blood I will pass over you, and no plague will befall you to destroy you when I strike the land of Egypt.',
    },
    context: {
      before: {
        reference: 'Exodus 12:12',
        text: 'For I will pass through the land of Egypt that night, and I will strike all the firstborn in the land of Egypt.',
      },
      after: {
        reference: 'Exodus 12:14',
        text: 'This day shall be for you a memorial day, and you shall keep it as a feast to the LORD.',
      },
    },
  },
  {
    id: 'exodus-4-11',
    reference: 'Exodus 4:11',
    book: 'Exodus',
    chapter: 4,
    verse: 11,
    difficulty: 'medium',
    translations: {
      ESV: 'Then the LORD said to him, "Who has made man\'s mouth? Who makes him mute, or deaf, or seeing, or blind? Is it not I, the LORD?"',
      NIV: 'The LORD said to him, "Who gave human beings their mouths? Who makes them deaf or mute? Who gives them sight or makes them blind? Is it not I, the LORD?"',
      KJV: 'And the LORD said unto him, Who hath made man\'s mouth? or who maketh the dumb, or deaf, or the seeing, or the blind? have not I the LORD?',
      NASB: 'The LORD said to him, "Who has made man\'s mouth? Or who makes him mute or deaf, or seeing or blind? Is it not I, the LORD?"',
    },
    context: {
      before: {
        reference: 'Exodus 4:10',
        text: 'But Moses said to the LORD, "Oh, my Lord, I am not eloquent, either in the past or since you have spoken to your servant, but I am slow of speech and of tongue."',
      },
      after: {
        reference: 'Exodus 4:12',
        text: 'Now therefore go, and I will be with your mouth and teach you what you shall speak.',
      },
    },
  },
  {
    id: 'exodus-15-11',
    reference: 'Exodus 15:11',
    book: 'Exodus',
    chapter: 15,
    verse: 11,
    difficulty: 'medium',
    translations: {
      ESV: 'Who is like you, O LORD, among the gods? Who is like you, majestic in holiness, awesome in glorious deeds, doing wonders?',
      NIV: 'Who among the gods is like you, LORD? Who is like you—majestic in holiness, awesome in glory, working wonders?',
      KJV: 'Who is like unto thee, O LORD, among the gods? who is like thee, glorious in holiness, fearful in praises, doing wonders?',
      NASB: 'Who is like You among the gods, O LORD? Who is like You, majestic in holiness, awesome in praises, working wonders?',
    },
    context: {
      before: {
        reference: 'Exodus 15:10',
        text: 'You blew with your wind; the sea covered them; they sank like lead in the mighty waters.',
      },
      after: {
        reference: 'Exodus 15:12',
        text: 'You stretched out your right hand; the earth swallowed them.',
      },
    },
  },
  {
    id: 'exodus-19-6',
    reference: 'Exodus 19:6',
    book: 'Exodus',
    chapter: 19,
    verse: 6,
    difficulty: 'easy',
    translations: {
      ESV: 'and you shall be to me a kingdom of priests and a holy nation. These are the words that you shall speak to the people of Israel.',
      NIV: 'you will be for me a kingdom of priests and a holy nation.\' These are the words you are to speak to the Israelites.',
      KJV: 'And ye shall be unto me a kingdom of priests, and an holy nation. These are the words which thou shalt speak unto the children of Israel.',
      NASB: 'and you shall be to Me a kingdom of priests and a holy nation.\' These are the words that you shall speak to the sons of Israel.',
    },
    context: {
      before: {
        reference: 'Exodus 19:5',
        text: 'Now therefore, if you will indeed obey my voice and keep my covenant, you shall be my treasured possession among all peoples.',
      },
      after: {
        reference: 'Exodus 19:7',
        text: 'So Moses came and called the elders of the people and set before them all these words that the LORD had commanded him.',
      },
    },
  },
  {
    id: 'exodus-20-8',
    reference: 'Exodus 20:8',
    book: 'Exodus',
    chapter: 20,
    verse: 8,
    difficulty: 'easy',
    translations: {
      ESV: 'Remember the Sabbath day, to keep it holy.',
      NIV: 'Remember the Sabbath day by keeping it holy.',
      KJV: 'Remember the sabbath day, to keep it holy.',
      NASB: 'Remember the sabbath day, to keep it holy.',
    },
    context: {
      before: {
        reference: 'Exodus 20:7',
        text: 'You shall not take the name of the LORD your God in vain, for the LORD will not hold him guiltless who takes his name in vain.',
      },
      after: {
        reference: 'Exodus 20:9',
        text: 'Six days you shall labor, and do all your work.',
      },
    },
  },
  {
    id: 'exodus-25-8',
    reference: 'Exodus 25:8',
    book: 'Exodus',
    chapter: 25,
    verse: 8,
    difficulty: 'easy',
    translations: {
      ESV: 'And let them make me a sanctuary, that I may dwell in their midst.',
      NIV: 'Then have them make a sanctuary for me, and I will dwell among them.',
      KJV: 'And let them make me a sanctuary; that I may dwell among them.',
      NASB: 'Let them construct a sanctuary for Me, that I may dwell among them.',
    },
    context: {
      before: {
        reference: 'Exodus 25:7',
        text: 'onyx stones, and stones for setting, for the ephod and for the breastpiece.',
      },
      after: {
        reference: 'Exodus 25:9',
        text: 'Exactly as I show you concerning the pattern of the tabernacle, and of all its furniture, so you shall make it.',
      },
    },
  },
  {
    id: 'exodus-34-14',
    reference: 'Exodus 34:14',
    book: 'Exodus',
    chapter: 34,
    verse: 14,
    difficulty: 'medium',
    translations: {
      ESV: 'for you shall worship no other god, for the LORD, whose name is Jealous, is a jealous God.',
      NIV: 'Do not worship any other god, for the LORD, whose name is Jealous, is a jealous God.',
      KJV: 'For thou shalt worship no other god: for the LORD, whose name is Jealous, is a jealous God.',
      NASB: 'for you shall not worship any other god, for the LORD, whose name is Jealous, is a jealous God.',
    },
    context: {
      before: {
        reference: 'Exodus 34:13',
        text: 'You shall tear down their altars and break their pillars and cut down their Asherim.',
      },
      after: {
        reference: 'Exodus 34:15',
        text: 'lest you make a covenant with the inhabitants of the land, and when they whore after their gods and sacrifice to their gods.',
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
  {
    id: 'leviticus-11-44',
    reference: 'Leviticus 11:44',
    book: 'Leviticus',
    chapter: 11,
    verse: 44,
    difficulty: 'medium',
    translations: {
      ESV: 'For I am the LORD your God. Consecrate yourselves therefore, and be holy, for I am holy.',
      NIV: 'I am the LORD your God; consecrate yourselves and be holy, because I am holy.',
      KJV: 'For I am the LORD your God: ye shall therefore sanctify yourselves, and ye shall be holy; for I am holy.',
      NASB: 'For I am the LORD your God. Consecrate yourselves therefore, and be holy, for I am holy.',
    },
    context: {
      before: {
        reference: 'Leviticus 11:43',
        text: 'You shall not make yourselves detestable with any swarming thing that swarms, and you shall not defile yourselves with them.',
      },
      after: {
        reference: 'Leviticus 11:45',
        text: 'For I am the LORD who brought you up out of the land of Egypt to be your God. You shall therefore be holy, for I am holy.',
      },
    },
  },
  {
    id: 'leviticus-19-2',
    reference: 'Leviticus 19:2',
    book: 'Leviticus',
    chapter: 19,
    verse: 2,
    difficulty: 'easy',
    translations: {
      ESV: 'Speak to all the congregation of the people of Israel and say to them, You shall be holy, for I the LORD your God am holy.',
      NIV: 'Speak to the entire assembly of Israel and say to them: \'Be holy because I, the LORD your God, am holy.\'',
      KJV: 'Speak unto all the congregation of the children of Israel, and say unto them, Ye shall be holy: for I the LORD your God am holy.',
      NASB: 'Speak to all the congregation of the sons of Israel and say to them, \'You shall be holy, for I the LORD your God am holy.\'',
    },
    context: {
      before: {
        reference: 'Leviticus 19:1',
        text: 'And the LORD spoke to Moses, saying,',
      },
      after: {
        reference: 'Leviticus 19:3',
        text: 'Every one of you shall revere his mother and his father, and you shall keep my Sabbaths: I am the LORD your God.',
      },
    },
  },
  {
    id: 'leviticus-26-12',
    reference: 'Leviticus 26:12',
    book: 'Leviticus',
    chapter: 26,
    verse: 12,
    difficulty: 'medium',
    translations: {
      ESV: 'And I will walk among you and will be your God, and you shall be my people.',
      NIV: 'I will walk among you and be your God, and you will be my people.',
      KJV: 'And I will walk among you, and will be your God, and ye shall be my people.',
      NASB: 'I will also walk among you and be your God, and you shall be My people.',
    },
    context: {
      before: {
        reference: 'Leviticus 26:11',
        text: 'I will make my dwelling among you, and my soul shall not abhor you.',
      },
      after: {
        reference: 'Leviticus 26:13',
        text: 'I am the LORD your God, who brought you out of the land of Egypt, that you should not be their slaves.',
      },
    },
  },
  {
    id: 'leviticus-23-3',
    reference: 'Leviticus 23:3',
    book: 'Leviticus',
    chapter: 23,
    verse: 3,
    difficulty: 'medium',
    translations: {
      ESV: 'Six days shall work be done, but on the seventh day is a Sabbath of solemn rest, a holy convocation. You shall do no work. It is a Sabbath to the LORD in all your dwelling places.',
      NIV: 'There are six days when you may work, but the seventh day is a day of sabbath rest, a day of sacred assembly. You are not to do any work; wherever you live, it is a sabbath to the LORD.',
      KJV: 'Six days shall work be done: but the seventh day is the sabbath of rest, an holy convocation; ye shall do no work therein: it is the sabbath of the LORD in all your dwellings.',
      NASB: 'For six days work may be done, but on the seventh day there is a sabbath of complete rest, a holy convocation. You shall not do any work; it is a sabbath to the LORD in all your dwellings.',
    },
    context: {
      before: {
        reference: 'Leviticus 23:2',
        text: 'Speak to the people of Israel and say to them, These are the appointed feasts of the LORD that you shall proclaim as holy convocations.',
      },
      after: {
        reference: 'Leviticus 23:4',
        text: 'These are the appointed feasts of the LORD, the holy convocations, which you shall proclaim at the time appointed for them.',
      },
    },
  },
  {
    id: 'leviticus-6-13',
    reference: 'Leviticus 6:13',
    book: 'Leviticus',
    chapter: 6,
    verse: 13,
    difficulty: 'medium',
    translations: {
      ESV: 'Fire shall be kept burning on the altar continually; it shall not go out.',
      NIV: 'The fire must be kept burning on the altar continuously; it must not go out.',
      KJV: 'The fire shall ever be burning upon the altar; it shall never go out.',
      NASB: 'Fire shall be kept burning continually on the altar; it is not to go out.',
    },
    context: {
      before: {
        reference: 'Leviticus 6:12',
        text: 'The fire on the altar shall be kept burning on it; it shall not go out. The priest shall burn wood on it every morning.',
      },
      after: {
        reference: 'Leviticus 6:14',
        text: 'And this is the law of the grain offering. The sons of Aaron shall offer it before the LORD in front of the altar.',
      },
    },
  },
  {
    id: 'leviticus-25-10',
    reference: 'Leviticus 25:10',
    book: 'Leviticus',
    chapter: 25,
    verse: 10,
    difficulty: 'hard',
    translations: {
      ESV: 'And you shall consecrate the fiftieth year, and proclaim liberty throughout the land to all its inhabitants. It shall be a jubilee for you, when each of you shall return to his property and each of you shall return to his clan.',
      NIV: 'Consecrate the fiftieth year and proclaim liberty throughout the land to all its inhabitants. It shall be a jubilee for you; each of you is to return to your family property and to your own clan.',
      KJV: 'And ye shall hallow the fiftieth year, and proclaim liberty throughout all the land unto all the inhabitants thereof: it shall be a jubile unto you; and ye shall return every man unto his possession, and ye shall return every man unto his family.',
      NASB: 'You shall thus consecrate the fiftieth year and proclaim a release through the land to all its inhabitants. It shall be a jubilee for you, and each of you shall return to his own property, and each of you shall return to his family.',
    },
    context: {
      before: {
        reference: 'Leviticus 25:9',
        text: 'Then you shall sound the loud trumpet on the tenth day of the seventh month. On the Day of Atonement you shall sound the trumpet throughout all your land.',
      },
      after: {
        reference: 'Leviticus 25:11',
        text: 'That fiftieth year shall be a jubilee for you; in it you shall neither sow nor reap what grows of itself nor gather the grapes from the undressed vines.',
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
  {
    id: 'numbers-10-35',
    reference: 'Numbers 10:35',
    book: 'Numbers',
    chapter: 10,
    verse: 35,
    difficulty: 'medium',
    translations: {
      ESV: 'And whenever the ark set out, Moses said, "Arise, O LORD, and let your enemies be scattered, and let those who hate you flee before you."',
      NIV: 'Whenever the ark set out, Moses said, "Rise up, LORD! May your enemies be scattered; may your foes flee before you."',
      KJV: 'And it came to pass, when the ark set forward, that Moses said, Rise up, LORD, and let thine enemies be scattered; and let them that hate thee flee before thee.',
      NASB: 'Then it came about when the ark set out that Moses said, "Rise up, O LORD! And let Your enemies be scattered, and let those who hate You flee before You."',
    },
    context: {
      before: {
        reference: 'Numbers 10:34',
        text: 'And the cloud of the LORD was over them by day, whenever they set out from the camp.',
      },
      after: {
        reference: 'Numbers 10:36',
        text: 'And when it rested, he said, "Return, O LORD, to the ten thousand thousands of Israel."',
      },
    },
  },
  {
    id: 'numbers-12-3',
    reference: 'Numbers 12:3',
    book: 'Numbers',
    chapter: 12,
    verse: 3,
    difficulty: 'easy',
    translations: {
      ESV: 'Now the man Moses was very meek, more than all people who were on the face of the earth.',
      NIV: '(Now Moses was a very humble man, more humble than anyone else on the face of the earth.)',
      KJV: '(Now the man Moses was very meek, above all the men which were upon the face of the earth.)',
      NASB: '(Now the man Moses was very humble, more than any man who was on the face of the earth.)',
    },
    context: {
      before: {
        reference: 'Numbers 12:2',
        text: 'And they said, "Has the LORD indeed spoken only through Moses? Has he not spoken through us also?" And the LORD heard it.',
      },
      after: {
        reference: 'Numbers 12:4',
        text: 'And suddenly the LORD said to Moses and to Aaron and Miriam, "Come out, you three, to the tent of meeting."',
      },
    },
  },
  {
    id: 'numbers-24-17',
    reference: 'Numbers 24:17',
    book: 'Numbers',
    chapter: 24,
    verse: 17,
    difficulty: 'hard',
    translations: {
      ESV: 'I see him, but not now; I behold him, but not near: a star shall come out of Jacob, and a scepter shall rise out of Israel; it shall crush the forehead of Moab and break down all the sons of Sheth.',
      NIV: 'I see him, but not now; I behold him, but not near. A star will come out of Jacob; a scepter will rise out of Israel. He will crush the foreheads of Moab, the skulls of all the people of Sheth.',
      KJV: 'I shall see him, but not now: I shall behold him, but not nigh: there shall come a Star out of Jacob, and a Sceptre shall rise out of Israel, and shall smite the corners of Moab, and destroy all the children of Sheth.',
      NASB: 'I see him, but not now; I behold him, but not near; a star shall come forth from Jacob, a scepter shall rise from Israel, and shall crush through the forehead of Moab, and tear down all the sons of Sheth.',
    },
    context: {
      before: {
        reference: 'Numbers 24:16',
        text: 'The oracle of him who hears the words of God, and knows the knowledge of the Most High, who sees the vision of the Almighty.',
      },
      after: {
        reference: 'Numbers 24:18',
        text: 'Edom shall be dispossessed; Seir also, his enemies, shall be dispossessed. Israel is doing valiantly.',
      },
    },
  },
  {
    id: 'numbers-11-29',
    reference: 'Numbers 11:29',
    book: 'Numbers',
    chapter: 11,
    verse: 29,
    difficulty: 'medium',
    translations: {
      ESV: 'But Moses said to him, "Are you jealous for my sake? Would that all the LORD\'s people were prophets, that the LORD would put his Spirit on them!"',
      NIV: 'But Moses replied, "Are you jealous for my sake? I wish that all the LORD\'s people were prophets and that the LORD would put his Spirit on them!"',
      KJV: 'And Moses said unto him, Enviest thou for my sake? would God that all the LORD\'s people were prophets, and that the LORD would put his spirit upon them!',
      NASB: 'But Moses said to him, "Are you jealous for my sake? Would that all the LORD\'s people were prophets, that the LORD would put His Spirit upon them!"',
    },
    context: {
      before: {
        reference: 'Numbers 11:28',
        text: 'And Joshua the son of Nun, the assistant of Moses from his youth, said, "My lord Moses, stop them."',
      },
      after: {
        reference: 'Numbers 11:30',
        text: 'And Moses and the elders of Israel returned to the camp.',
      },
    },
  },
  {
    id: 'numbers-14-21',
    reference: 'Numbers 14:21',
    book: 'Numbers',
    chapter: 14,
    verse: 21,
    difficulty: 'medium',
    translations: {
      ESV: 'But truly, as I live, and as all the earth shall be filled with the glory of the LORD,',
      NIV: 'Nevertheless, as surely as I live and as surely as the glory of the LORD fills the whole earth,',
      KJV: 'But as truly as I live, all the earth shall be filled with the glory of the LORD.',
      NASB: 'but indeed, as I live, all the earth will be filled with the glory of the LORD.',
    },
    context: {
      before: {
        reference: 'Numbers 14:20',
        text: 'Then the LORD said, "I have pardoned, according to your word."',
      },
      after: {
        reference: 'Numbers 14:22',
        text: 'none of the men who have seen my glory and my signs that I did in Egypt and in the wilderness, and yet have put me to the test these ten times and have not obeyed my voice,',
      },
    },
  },
  {
    id: 'numbers-23-23',
    reference: 'Numbers 23:23',
    book: 'Numbers',
    chapter: 23,
    verse: 23,
    difficulty: 'medium',
    translations: {
      ESV: 'For there is no enchantment against Jacob, no divination against Israel; now it shall be said of Jacob and Israel, "What has God wrought!"',
      NIV: 'There is no divination against Jacob, no evil omens against Israel. It will now be said of Jacob and of Israel, "See what God has done!"',
      KJV: 'Surely there is no enchantment against Jacob, neither is there any divination against Israel: according to this time it shall be said of Jacob and of Israel, What hath God wrought!',
      NASB: 'For there is no omen against Jacob, nor any divination against Israel; at the proper time it shall be said to Jacob and to Israel, what God has done!',
    },
    context: {
      before: {
        reference: 'Numbers 23:22',
        text: 'God brings them out of Egypt and is for them like the horns of the wild ox.',
      },
      after: {
        reference: 'Numbers 23:24',
        text: 'Behold, a people! As a lioness it rises up and as a lion it lifts itself; it does not lie down until it has devoured the prey and drunk the blood of the slain.',
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

  {
    id: 'deuteronomy-8-3',
    reference: 'Deuteronomy 8:3',
    book: 'Deuteronomy',
    chapter: 8,
    verse: 3,
    difficulty: 'medium',
    translations: {
      ESV: 'And he humbled you and let you hunger and fed you with manna, which you did not know, nor did your fathers know, that he might make you know that man does not live by bread alone, but man lives by every word that comes from the mouth of the LORD.',
      NIV: 'He humbled you, causing you to hunger and then feeding you with manna, which neither you nor your ancestors had known, to teach you that man does not live on bread alone but on every word that comes from the mouth of the LORD.',
      KJV: 'And he humbled thee, and suffered thee to hunger, and fed thee with manna, which thou knewest not, neither did thy fathers know; that he might make thee know that man doth not live by bread only, but by every word that proceedeth out of the mouth of the LORD doth man live.',
      NASB: 'He humbled you and let you be hungry, and fed you with manna which you did not know, nor did your fathers know, that He might make you understand that man does not live by bread alone, but man lives by everything that proceeds out of the mouth of the LORD.',
    },
    context: {
      before: {
        reference: 'Deuteronomy 8:2',
        text: 'And you shall remember the whole way that the LORD your God has led you these forty years in the wilderness.',
      },
      after: {
        reference: 'Deuteronomy 8:4',
        text: 'Your clothing did not wear out on you and your foot did not swell these forty years.',
      },
    },
  },
  {
    id: 'deuteronomy-18-15',
    reference: 'Deuteronomy 18:15',
    book: 'Deuteronomy',
    chapter: 18,
    verse: 15,
    difficulty: 'hard',
    translations: {
      ESV: 'The LORD your God will raise up for you a prophet like me from among you, from your brothers—it is to him you shall listen—',
      NIV: 'The LORD your God will raise up for you a prophet like me from among you, from your fellow Israelites. You must listen to him.',
      KJV: 'The LORD thy God will raise up unto thee a Prophet from the midst of thee, of thy brethren, like unto me; unto him ye shall hearken;',
      NASB: 'The LORD your God will raise up for you a prophet like me from among you, from your countrymen, you shall listen to him.',
    },
    context: {
      before: {
        reference: 'Deuteronomy 18:14',
        text: 'For these nations, which you are about to dispossess, listen to fortune-tellers and to diviners. But as for you, the LORD your God has not allowed you to do this.',
      },
      after: {
        reference: 'Deuteronomy 18:16',
        text: 'Just as you desired of the LORD your God at Horeb on the day of the assembly, when you said, "Let me not hear again the voice of the LORD my God."',
      },
    },
  },
  {
    id: 'deuteronomy-10-12',
    reference: 'Deuteronomy 10:12',
    book: 'Deuteronomy',
    chapter: 10,
    verse: 12,
    difficulty: 'hard',
    translations: {
      ESV: 'And now, Israel, what does the LORD your God require of you, but to fear the LORD your God, to walk in all his ways, to love him, to serve the LORD your God with all your heart and with all your soul,',
      NIV: 'And now, Israel, what does the LORD your God ask of you but to fear the LORD your God, to walk in obedience to him, to love him, to serve the LORD your God with all your heart and with all your soul,',
      KJV: 'And now, Israel, what doth the LORD thy God require of thee, but to fear the LORD thy God, to walk in all his ways, and to love him, and to serve the LORD thy God with all thy heart and with all thy soul,',
      NASB: 'Now, Israel, what does the LORD your God require from you, but to fear the LORD your God, to walk in all His ways and love Him, and to serve the LORD your God with all your heart and with all your soul,',
    },
    context: {
      before: {
        reference: 'Deuteronomy 10:11',
        text: 'And the LORD said to me, "Arise, go on your journey at the head of the people, so that they may go in and possess the land."',
      },
      after: {
        reference: 'Deuteronomy 10:13',
        text: 'and to keep the commandments and statutes of the LORD, which I am commanding you today for your good?',
      },
    },
  },
  {
    id: 'deuteronomy-32-4',
    reference: 'Deuteronomy 32:4',
    book: 'Deuteronomy',
    chapter: 32,
    verse: 4,
    difficulty: 'medium',
    translations: {
      ESV: 'The Rock, his work is perfect, for all his ways are justice. A God of faithfulness and without iniquity, just and upright is he.',
      NIV: 'He is the Rock, his works are perfect, and all his ways are just. A faithful God who does no wrong, upright and just is he.',
      KJV: 'He is the Rock, his work is perfect: for all his ways are judgment: a God of truth and without iniquity, just and right is he.',
      NASB: 'The Rock! His work is perfect, for all His ways are just; a God of faithfulness and without injustice, righteous and upright is He.',
    },
    context: {
      before: {
        reference: 'Deuteronomy 32:3',
        text: 'For I will proclaim the name of the LORD; ascribe greatness to our God!',
      },
      after: {
        reference: 'Deuteronomy 32:5',
        text: 'They have dealt corruptly with him; they are no longer his children because they are blemished; they are a crooked and twisted generation.',
      },
    },
  },
  {
    id: 'deuteronomy-7-9',
    reference: 'Deuteronomy 7:9',
    book: 'Deuteronomy',
    chapter: 7,
    verse: 9,
    difficulty: 'medium',
    translations: {
      ESV: 'Know therefore that the LORD your God is God, the faithful God who keeps covenant and steadfast love with those who love him and keep his commandments, to a thousand generations,',
      NIV: 'Know therefore that the LORD your God is God; he is the faithful God, keeping his covenant of love to a thousand generations of those who love him and keep his commandments.',
      KJV: 'Know therefore that the LORD thy God, he is God, the faithful God, which keepeth covenant and mercy with them that love him and keep his commandments to a thousand generations;',
      NASB: 'Know therefore that the LORD your God, He is God, the faithful God, who keeps His covenant and His lovingkindness to a thousandth generation with those who love Him and keep His commandments;',
    },
    context: {
      before: {
        reference: 'Deuteronomy 7:8',
        text: 'But it is because the LORD loves you and is keeping the oath that he swore to your fathers, that the LORD has brought you out with a mighty hand.',
      },
      after: {
        reference: 'Deuteronomy 7:10',
        text: 'and repays to their face those who hate him, by destroying them. He will not be slack with one who hates him. He will repay him to his face.',
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

  {
    id: 'joshua-1-5',
    reference: 'Joshua 1:5',
    book: 'Joshua',
    chapter: 1,
    verse: 5,
    difficulty: 'easy',
    translations: {
      ESV: 'No man shall be able to stand before you all the days of your life. Just as I was with Moses, so I will be with you. I will not leave you or forsake you.',
      NIV: 'No one will be able to stand against you all the days of your life. As I was with Moses, so I will be with you; I will never leave you nor forsake you.',
      KJV: 'There shall not any man be able to stand before thee all the days of thy life: as I was with Moses, so I will be with thee: I will not fail thee, nor forsake thee.',
      NASB: 'No man will be able to stand before you all the days of your life. Just as I have been with Moses, I will be with you; I will not fail you or forsake you.',
    },
    context: {
      before: {
        reference: 'Joshua 1:4',
        text: 'From the wilderness and this Lebanon as far as the great river, the river Euphrates, all the land of the Hittites to the Great Sea toward the going down of the sun shall be your territory.',
      },
      after: {
        reference: 'Joshua 1:6',
        text: 'Be strong and courageous, for you shall cause this people to inherit the land that I swore to their fathers to give them.',
      },
    },
  },
  {
    id: 'joshua-3-5',
    reference: 'Joshua 3:5',
    book: 'Joshua',
    chapter: 3,
    verse: 5,
    difficulty: 'easy',
    translations: {
      ESV: 'Then Joshua said to the people, "Consecrate yourselves, for tomorrow the LORD will do wonders among you."',
      NIV: 'Joshua told the people, "Consecrate yourselves, for tomorrow the LORD will do amazing things among you."',
      KJV: 'And Joshua said unto the people, Sanctify yourselves: for to morrow the LORD will do wonders among you.',
      NASB: 'Then Joshua said to the people, "Consecrate yourselves, for tomorrow the LORD will do wonders among you."',
    },
    context: {
      before: {
        reference: 'Joshua 3:4',
        text: 'Yet there shall be a distance between you and it, about 2,000 cubits in length. Do not come near it, in order that you may know the way you shall go.',
      },
      after: {
        reference: 'Joshua 3:6',
        text: 'And Joshua said to the priests, "Take up the ark of the covenant and pass on before the people."',
      },
    },
  },
  {
    id: 'joshua-23-14',
    reference: 'Joshua 23:14',
    book: 'Joshua',
    chapter: 23,
    verse: 14,
    difficulty: 'medium',
    translations: {
      ESV: 'And now I am about to go the way of all the earth, and you know in your hearts and souls, all of you, that not one word has failed of all the good things that the LORD your God promised concerning you. All have come to pass for you; not one of them has failed.',
      NIV: 'Now I am about to go the way of all the earth. You know with all your heart and soul that not one of all the good promises the LORD your God gave you has failed. Every promise has been fulfilled; not one has failed.',
      KJV: 'And, behold, this day I am going the way of all the earth: and ye know in all your hearts and in all your souls, that not one thing hath failed of all the good things which the LORD your God spake concerning you; all are come to pass unto you, and not one thing hath failed thereof.',
      NASB: 'Now behold, today I am going the way of all the earth, and you know in all your hearts and in all your souls that not one word of all the good words which the LORD your God spoke concerning you has failed; all have been fulfilled for you, not one of them has failed.',
    },
    context: {
      before: {
        reference: 'Joshua 23:13',
        text: 'Know for certain that the LORD your God will no longer drive out these nations before you, but they shall be a snare and a trap for you.',
      },
      after: {
        reference: 'Joshua 23:15',
        text: 'But just as all the good things that the LORD your God promised concerning you have been fulfilled for you, so the LORD will bring upon you all the evil things.',
      },
    },
  },
  {
    id: 'joshua-24-24',
    reference: 'Joshua 24:24',
    book: 'Joshua',
    chapter: 24,
    verse: 24,
    difficulty: 'easy',
    translations: {
      ESV: 'And the people said to Joshua, "The LORD our God we will serve, and his voice we will obey."',
      NIV: 'And the people said to Joshua, "We will serve the LORD our God and obey him."',
      KJV: 'And the people said unto Joshua, The LORD our God will we serve, and his voice will we obey.',
      NASB: 'The people said to Joshua, "We will serve the LORD our God and we will obey His voice."',
    },
    context: {
      before: {
        reference: 'Joshua 24:23',
        text: '"Now therefore put away the foreign gods that are among you, and incline your heart to the LORD, the God of Israel."',
      },
      after: {
        reference: 'Joshua 24:25',
        text: 'So Joshua made a covenant with the people that day, and put in place statutes and rules for them at Shechem.',
      },
    },
  },
  {
    id: 'joshua-5-14',
    reference: 'Joshua 5:14',
    book: 'Joshua',
    chapter: 5,
    verse: 14,
    difficulty: 'medium',
    translations: {
      ESV: 'And he said, "No; but I am the commander of the army of the LORD. Now I have come." And Joshua fell on his face to the earth and worshiped and said to him, "What does my lord say to his servant?"',
      NIV: '"Neither," he replied, "but as commander of the army of the LORD I have now come." Then Joshua fell facedown to the ground in reverence, and asked him, "What message does my Lord have for his servant?"',
      KJV: 'And he said, Nay; but as captain of the host of the LORD am I now come. And Joshua fell on his face to the earth, and did worship, and said unto him, What saith my lord unto his servant?',
      NASB: 'He said, "No; rather I indeed come now as captain of the host of the LORD." And Joshua fell on his face to the earth, and bowed down, and said to him, "What has my lord to say to his servant?"',
    },
    context: {
      before: {
        reference: 'Joshua 5:13',
        text: 'When Joshua was by Jericho, he lifted up his eyes and looked, and behold, a man was standing before him with his drawn sword in his hand. And Joshua went to him and said to him, "Are you for us, or for our adversaries?"',
      },
      after: {
        reference: 'Joshua 5:15',
        text: 'And the commander of the LORD\'s army said to Joshua, "Take off your sandals from your feet, for the place where you are standing is holy." And Joshua did so.',
      },
    },
  },
  {
    id: 'joshua-4-24',
    reference: 'Joshua 4:24',
    book: 'Joshua',
    chapter: 4,
    verse: 24,
    difficulty: 'medium',
    translations: {
      ESV: 'so that all the peoples of the earth may know that the hand of the LORD is mighty, that you may fear the LORD your God forever.',
      NIV: 'He did this so that all the peoples of the earth might know that the hand of the LORD is powerful and so that you might always fear the LORD your God.',
      KJV: 'That all the people of the earth might know the hand of the LORD, that it is mighty: that ye might fear the LORD your God for ever.',
      NASB: 'that all the peoples of the earth may know that the hand of the LORD is mighty, so that you may fear the LORD your God forever.',
    },
    context: {
      before: {
        reference: 'Joshua 4:23',
        text: 'For the LORD your God dried up the waters of the Jordan for you until you passed over, as the LORD your God did to the Red Sea, which he dried up for us until we passed over.',
      },
      after: {
        reference: 'Joshua 5:1',
        text: 'As soon as all the kings of the Amorites who were beyond the Jordan to the west, and all the kings of the Canaanites who were by the sea, heard that the LORD had dried up the waters of the Jordan for the people of Israel until they had crossed over, their hearts melted and there was no longer any spirit in them because of the people of Israel.',
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
  {
    id: 'judges-5-31',
    reference: 'Judges 5:31',
    book: 'Judges',
    chapter: 5,
    verse: 31,
    difficulty: 'medium',
    translations: {
      ESV: 'So may all your enemies perish, O LORD! But your friends be like the sun as he rises in his might.',
      NIV: 'So may all your enemies perish, LORD! But may all who love you be like the sun when it rises in its strength.',
      KJV: 'So let all thine enemies perish, O LORD: but let them that love him be as the sun when he goeth forth in his might.',
      NASB: 'Thus let all Your enemies perish, O LORD; but let those who love Him be like the rising of the sun in its might.',
    },
    context: {
      before: {
        reference: 'Judges 5:30',
        text: 'Have they not found and divided the spoil?— A womb or two for every man; spoil of dyed materials for Sisera.',
      },
      after: {
        reference: 'Judges 6:1',
        text: 'The people of Israel did what was evil in the sight of the LORD, and the LORD gave them into the hand of Midian seven years.',
      },
    },
  },
  {
    id: 'judges-16-28',
    reference: 'Judges 16:28',
    book: 'Judges',
    chapter: 16,
    verse: 28,
    difficulty: 'hard',
    translations: {
      ESV: 'Then Samson called to the LORD and said, "O Lord GOD, please remember me and please strengthen me only this once, O God, that I may be avenged on the Philistines for my two eyes."',
      NIV: 'Then Samson prayed to the LORD, "Sovereign LORD, remember me. Please, God, strengthen me just once more, and let me with one blow get revenge on the Philistines for my two eyes."',
      KJV: 'And Samson called unto the LORD, and said, O Lord GOD, remember me, I pray thee, and strengthen me, I pray thee, only this once, O God, that I may be at once avenged of the Philistines for my two eyes.',
      NASB: 'Then Samson called to the LORD and said, "O Lord GOD, please remember me and please strengthen me just this time, O God, that I may at once be avenged of the Philistines for my two eyes."',
    },
    context: {
      before: {
        reference: 'Judges 16:27',
        text: 'Now the house was full of men and women. All the lords of the Philistines were there, and on the roof there were about 3,000 men and women.',
      },
      after: {
        reference: 'Judges 16:29',
        text: 'And Samson grasped the two middle pillars on which the house rested, and he leaned his weight against them.',
      },
    },
  },
  {
    id: 'judges-2-18',
    reference: 'Judges 2:18',
    book: 'Judges',
    chapter: 2,
    verse: 18,
    difficulty: 'medium',
    translations: {
      ESV: 'Whenever the LORD raised up judges for them, the LORD was with the judge, and he saved them from the hand of their enemies all the days of the judge.',
      NIV: 'Whenever the LORD raised up a judge for them, he was with the judge and saved them out of the hands of their enemies as long as the judge lived.',
      KJV: 'And when the LORD raised them up judges, then the LORD was with the judge, and delivered them out of the hand of their enemies all the days of the judge.',
      NASB: 'When the LORD raised up judges for them, the LORD was with the judge and delivered them from the hand of their enemies all the days of the judge.',
    },
    context: {
      before: {
        reference: 'Judges 2:17',
        text: 'Yet they did not listen to their judges, for they whored after other gods and bowed down to them.',
      },
      after: {
        reference: 'Judges 2:19',
        text: 'But whenever the judge died, they turned back and were more corrupt than their fathers, going after other gods.',
      },
    },
  },
  {
    id: 'judges-6-24',
    reference: 'Judges 6:24',
    book: 'Judges',
    chapter: 6,
    verse: 24,
    difficulty: 'easy',
    translations: {
      ESV: 'Then Gideon built an altar there to the LORD and called it, The LORD Is Peace. To this day it still stands at Ophrah, which belongs to the Abiezrites.',
      NIV: 'So Gideon built an altar to the LORD there and called it The LORD Is Peace. To this day it stands in Ophrah of the Abiezrites.',
      KJV: 'Then Gideon built an altar there unto the LORD, and called it Jehovahshalom: unto this day it is yet in Ophrah of the Abiezrites.',
      NASB: 'Then Gideon built an altar there to the LORD and named it The LORD is Peace. To this day it is still in Ophrah of the Abiezrites.',
    },
    context: {
      before: {
        reference: 'Judges 6:23',
        text: 'But the LORD said to him, "Peace be to you. Do not fear; you shall not die."',
      },
      after: {
        reference: 'Judges 6:25',
        text: 'That night the LORD said to him, "Take your father\'s bull, the second bull seven years old."',
      },
    },
  },
  {
    id: 'judges-3-9',
    reference: 'Judges 3:9',
    book: 'Judges',
    chapter: 3,
    verse: 9,
    difficulty: 'medium',
    translations: {
      ESV: 'But when the people of Israel cried out to the LORD, the LORD raised up a deliverer for the people of Israel, who saved them, Othniel the son of Kenaz, Caleb\'s younger brother.',
      NIV: 'But when they cried out to the LORD, he raised up for them a deliverer, Othniel son of Kenaz, Caleb\'s younger brother, who saved them.',
      KJV: 'And when the children of Israel cried unto the LORD, the LORD raised up a deliverer to the children of Israel, who delivered them, even Othniel the son of Kenaz, Caleb\'s younger brother.',
      NASB: 'When the sons of Israel cried to the LORD, the LORD raised up a deliverer for the sons of Israel to deliver them, Othniel the son of Kenaz, Caleb\'s younger brother.',
    },
    context: {
      before: {
        reference: 'Judges 3:8',
        text: 'Therefore the anger of the LORD was kindled against Israel, and he sold them into the hand of Cushan-rishathaim king of Mesopotamia.',
      },
      after: {
        reference: 'Judges 3:10',
        text: 'The Spirit of the LORD was upon him, and he judged Israel. He went out to war, and the LORD gave Cushan-rishathaim king of Mesopotamia into his hand.',
      },
    },
  },
  {
    id: 'judges-13-5',
    reference: 'Judges 13:5',
    book: 'Judges',
    chapter: 13,
    verse: 5,
    difficulty: 'hard',
    translations: {
      ESV: 'for behold, you shall conceive and bear a son. No razor shall come upon his head, for the child shall be a Nazirite to God from the womb, and he shall begin to save Israel from the hand of the Philistines.',
      NIV: 'You will become pregnant and have a son whose head is never to be touched by a razor because the boy is to be a Nazirite, dedicated to God from the womb. He will take the lead in delivering Israel from the hands of the Philistines.',
      KJV: 'For, lo, thou shalt conceive, and bear a son; and no razor shall come on his head: for the child shall be a Nazarite unto God from the womb: and he shall begin to deliver Israel out of the hand of the Philistines.',
      NASB: 'For behold, you shall conceive and give birth to a son, and no razor shall come upon his head, for the boy shall be a Nazirite to God from the womb; and he shall begin to deliver Israel from the hands of the Philistines.',
    },
    context: {
      before: {
        reference: 'Judges 13:4',
        text: 'Therefore be careful and drink no wine or strong drink, and eat nothing unclean.',
      },
      after: {
        reference: 'Judges 13:6',
        text: 'Then the woman came and told her husband, "A man of God came to me, and his appearance was like the appearance of the angel of God."',
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
  {
    id: 'ruth-1-17',
    reference: 'Ruth 1:17',
    book: 'Ruth',
    chapter: 1,
    verse: 17,
    difficulty: 'medium',
    translations: {
      ESV: 'Where you die I will die, and there will I be buried. May the LORD do so to me and more also if anything but death parts me from you.',
      NIV: 'Where you die I will die, and there I will be buried. May the LORD deal with me, be it ever so severely, if even death separates you and me.',
      KJV: 'Where thou diest, will I die, and there will I be buried: the LORD do so to me, and more also, if ought but death part thee and me.',
      NASB: 'Where you die, I will die, and there I will be buried. Thus may the LORD do to me, and worse, if anything but death parts you and me.',
    },
    context: {
      before: {
        reference: 'Ruth 1:16',
        text: 'But Ruth said, "Do not urge me to leave you or to return from following you. For where you go I will go, and where you lodge I will lodge."',
      },
      after: {
        reference: 'Ruth 1:18',
        text: 'And when Naomi saw that she was determined to go with her, she said no more.',
      },
    },
  },
  {
    id: 'ruth-3-9',
    reference: 'Ruth 3:9',
    book: 'Ruth',
    chapter: 3,
    verse: 9,
    difficulty: 'medium',
    translations: {
      ESV: 'He said, "Who are you?" And she answered, "I am Ruth, your servant. Spread your wings over your servant, for you are a redeemer."',
      NIV: '"Who are you?" he asked. "I am your servant Ruth," she said. "Spread the corner of your garment over me, since you are a guardian-redeemer of our family."',
      KJV: 'And he said, Who art thou? And she answered, I am Ruth thine handmaid: spread therefore thy skirt over thine handmaid; for thou art a near kinsman.',
      NASB: 'He said, "Who are you?" And she answered, "I am Ruth your maid. So spread your covering over your maid, for you are a close relative."',
    },
    context: {
      before: {
        reference: 'Ruth 3:8',
        text: 'At midnight the man was startled and turned over, and behold, a woman lay at his feet!',
      },
      after: {
        reference: 'Ruth 3:10',
        text: 'And he said, "May you be blessed by the LORD, my daughter. You have made this last kindness greater than the first."',
      },
    },
  },
  {
    id: 'ruth-4-9',
    reference: 'Ruth 4:9',
    book: 'Ruth',
    chapter: 4,
    verse: 9,
    difficulty: 'medium',
    translations: {
      ESV: 'Then Boaz said to the elders and all the people, "You are witnesses this day that I have bought from the hand of Naomi all that belonged to Elimelech and all that belonged to Chilion and to Mahlon."',
      NIV: 'Then Boaz announced to the elders and all the people, "Today you are witnesses that I have bought from Naomi all the property of Elimelek, Kilion and Mahlon."',
      KJV: 'And Boaz said unto the elders, and unto all the people, Ye are witnesses this day, that I have bought all that was Elimelech\'s, and all that was Chilion\'s and Mahlon\'s, of the hand of Naomi.',
      NASB: 'Then Boaz said to the elders and all the people, "You are witnesses today that I have bought from the hand of Naomi all that belonged to Elimelech and all that belonged to Chilion and Mahlon."',
    },
    context: {
      before: {
        reference: 'Ruth 4:8',
        text: 'So when the redeemer said to Boaz, "Buy it for yourself," he drew off his sandal.',
      },
      after: {
        reference: 'Ruth 4:10',
        text: 'Also Ruth the Moabite, the widow of Mahlon, I have bought to be my wife, to perpetuate the name of the dead.',
      },
    },
  },
  {
    id: 'ruth-2-20',
    reference: 'Ruth 2:20',
    book: 'Ruth',
    chapter: 2,
    verse: 20,
    difficulty: 'medium',
    translations: {
      ESV: 'And Naomi said to her daughter-in-law, "May he be blessed by the LORD, whose kindness has not forsaken the living or the dead!" Naomi also said to her, "The man is a close relative of ours, one of our redeemers."',
      NIV: '"The LORD bless him!" Naomi said to her daughter-in-law. "He has not stopped showing his kindness to the living and the dead." She added, "That man is our close relative; he is one of our guardian-redeemers."',
      KJV: 'And Naomi said unto her daughter in law, Blessed be he of the LORD, who hath not left off his kindness to the living and to the dead. And Naomi said unto her, The man is near of kin unto us, one of our next kinsmen.',
      NASB: 'Naomi said to her daughter-in-law, "May he be blessed of the LORD who has not withdrawn his kindness to the living and to the dead." Again Naomi said to her, "The man is our relative, he is one of our closest relatives."',
    },
    context: {
      before: {
        reference: 'Ruth 2:19',
        text: 'And her mother-in-law said to her, "Where did you glean today? And where have you worked? Blessed be the man who took notice of you."',
      },
      after: {
        reference: 'Ruth 2:21',
        text: 'And Ruth the Moabite said, "Besides, he said to me, \'You shall keep close by my young men until they have finished all my harvest.\'"',
      },
    },
  },
  {
    id: 'ruth-1-20',
    reference: 'Ruth 1:20',
    book: 'Ruth',
    chapter: 1,
    verse: 20,
    difficulty: 'medium',
    translations: {
      ESV: 'She said to them, "Do not call me Naomi; call me Mara, for the Almighty has dealt very bitterly with me."',
      NIV: '"Don\'t call me Naomi," she told them. "Call me Mara, because the Almighty has made my life very bitter."',
      KJV: 'And she said unto them, Call me not Naomi, call me Mara: for the Almighty hath dealt very bitterly with me.',
      NASB: 'She said to them, "Do not call me Naomi; call me Mara, for the Almighty has dealt very bitterly with me."',
    },
    context: {
      before: {
        reference: 'Ruth 1:19',
        text: 'So the two of them went on until they came to Bethlehem. And when they came to Bethlehem, the whole town was stirred.',
      },
      after: {
        reference: 'Ruth 1:21',
        text: 'I went away full, and the LORD has brought me back empty. Why call me Naomi, when the LORD has testified against me?',
      },
    },
  },
  {
    id: 'ruth-3-11',
    reference: 'Ruth 3:11',
    book: 'Ruth',
    chapter: 3,
    verse: 11,
    difficulty: 'medium',
    translations: {
      ESV: 'And now, my daughter, do not fear. I will do for you all that you ask, for all my fellow townsmen know that you are a worthy woman.',
      NIV: 'And now, my daughter, don\'t be afraid. I will do for you all you ask. All the people of my town know that you are a woman of noble character.',
      KJV: 'And now, my daughter, fear not; I will do to thee all that thou requirest: for all the city of my people doth know that thou art a virtuous woman.',
      NASB: 'Now, my daughter, do not fear. I will do for you whatever you ask, for all my people in the city know that you are a woman of excellence.',
    },
    context: {
      before: {
        reference: 'Ruth 3:10',
        text: 'And he said, "May you be blessed by the LORD, my daughter. You have made this last kindness greater than the first."',
      },
      after: {
        reference: 'Ruth 3:12',
        text: 'And now it is true that I am a redeemer. Yet there is a redeemer nearer than I.',
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
    id: '1-samuel-3-10',
    reference: '1 Samuel 3:10',
    book: '1 Samuel',
    chapter: 3,
    verse: 10,
    difficulty: 'easy',
    translations: {
      ESV: 'And the LORD came and stood, calling as at other times, "Samuel! Samuel!" And Samuel said, "Speak, for your servant hears."',
      NIV: 'The LORD came and stood there, calling as at the other times, "Samuel! Samuel!" Then Samuel said, "Speak, for your servant is listening."',
      KJV: 'And the LORD came, and stood, and called as at other times, Samuel, Samuel. Then Samuel answered, Speak; for thy servant heareth.',
      NASB: 'Then the LORD came and stood and called as at other times, "Samuel! Samuel!" And Samuel said, "Speak, for Your servant is listening."',
    },
    context: {
      before: {
        reference: '1 Samuel 3:9',
        text: 'Therefore Eli said to Samuel, "Go, lie down, and if he calls you, you shall say, \'Speak, LORD, for your servant hears.\'"',
      },
      after: {
        reference: '1 Samuel 3:11',
        text: 'Then the LORD said to Samuel, "Behold, I am about to do a thing in Israel at which the two ears of everyone who hears it will tingle."',
      },
    },
  },
  {
    id: '1-samuel-12-22',
    reference: '1 Samuel 12:22',
    book: '1 Samuel',
    chapter: 12,
    verse: 22,
    difficulty: 'medium',
    translations: {
      ESV: 'For the LORD will not forsake his people, for his great name\'s sake, because it has pleased the LORD to make you a people for himself.',
      NIV: 'For the sake of his great name the LORD will not reject his people, because the LORD was pleased to make you his own.',
      KJV: 'For the LORD will not forsake his people for his great name\'s sake: because it hath pleased the LORD to make you his people.',
      NASB: 'For the LORD will not abandon His people on account of His great name, because the LORD has been pleased to make you a people for Himself.',
    },
    context: {
      before: {
        reference: '1 Samuel 12:21',
        text: 'And do not turn aside after empty things that cannot profit or deliver, for they are empty.',
      },
      after: {
        reference: '1 Samuel 12:23',
        text: 'Moreover, as for me, far be it from me that I should sin against the LORD by ceasing to pray for you.',
      },
    },
  },
  {
    id: '1-samuel-17-47',
    reference: '1 Samuel 17:47',
    book: '1 Samuel',
    chapter: 17,
    verse: 47,
    difficulty: 'medium',
    translations: {
      ESV: 'And that all this assembly may know that the LORD saves not with sword and spear. For the battle is the LORD\'s, and he will give you into our hand.',
      NIV: 'All those gathered here will know that it is not by sword or spear that the LORD saves; for the battle is the LORD\'s, and he will give all of you into our hands.',
      KJV: 'And all this assembly shall know that the LORD saveth not with sword and spear: for the battle is the LORD\'s, and he will give you into our hands.',
      NASB: 'And that all this assembly may know that the LORD does not deliver by sword or by spear; for the battle is the LORD\'s and He will give you into our hands.',
    },
    context: {
      before: {
        reference: '1 Samuel 17:46',
        text: 'This day the LORD will deliver you into my hand, and I will strike you down and cut off your head.',
      },
      after: {
        reference: '1 Samuel 17:48',
        text: 'When the Philistine arose and came and drew near to meet David, David ran quickly toward the battle line to meet the Philistine.',
      },
    },
  },
  {
    id: '1-samuel-12-24',
    reference: '1 Samuel 12:24',
    book: '1 Samuel',
    chapter: 12,
    verse: 24,
    difficulty: 'easy',
    translations: {
      ESV: 'Only fear the LORD and serve him faithfully with all your heart. For consider what great things he has done for you.',
      NIV: 'But be sure to fear the LORD and serve him faithfully with all your heart; consider what great things he has done for you.',
      KJV: 'Only fear the LORD, and serve him in truth with all your heart: for consider how great things he hath done for you.',
      NASB: 'Only fear the LORD and serve Him in truth with all your heart; for consider what great things He has done for you.',
    },
    context: {
      before: {
        reference: '1 Samuel 12:23',
        text: 'Moreover, as for me, far be it from me that I should sin against the LORD by ceasing to pray for you, and I will instruct you in the good and the right way.',
      },
      after: {
        reference: '1 Samuel 12:25',
        text: 'But if you still do wickedly, you shall be swept away, both you and your king.',
      },
    },
  },
  {
    id: '1-samuel-2-30',
    reference: '1 Samuel 2:30',
    book: '1 Samuel',
    chapter: 2,
    verse: 30,
    difficulty: 'medium',
    translations: {
      ESV: 'Therefore the LORD, the God of Israel, declares: "I promised that your house and the house of your father should go in and out before me forever," but now the LORD declares: "Far be it from me, for those who honor me I will honor, and those who despise me shall be lightly esteemed."',
      NIV: 'Therefore the LORD, the God of Israel, declares: "I promised that members of your family would minister before me forever." But now the LORD declares: "Far be it from me! Those who honor me I will honor, but those who despise me will be disdained."',
      KJV: 'Wherefore the LORD God of Israel saith, I said indeed that thy house, and the house of thy father, should walk before me for ever: but now the LORD saith, Be it far from me; for them that honour me I will honour, and they that despise me shall be lightly esteemed.',
      NASB: 'Therefore the LORD God of Israel declares, "I did indeed say that your house and the house of your father should walk before Me forever"; but now the LORD declares, "Far be it from Me—for those who honor Me I will honor, and those who despise Me will be lightly esteemed."',
    },
    context: {
      before: {
        reference: '1 Samuel 2:29',
        text: 'Why then do you scorn my sacrifices and my offerings that I commanded for my dwelling, and honor your sons above me by fattening yourselves on the choicest parts of every offering of my people Israel?',
      },
      after: {
        reference: '1 Samuel 2:31',
        text: 'Behold, the days are coming when I will cut off your strength and the strength of your father\'s house, so that there will not be an old man in your house.',
      },
    },
  },
  {
    id: '1-samuel-7-12',
    reference: '1 Samuel 7:12',
    book: '1 Samuel',
    chapter: 7,
    verse: 12,
    difficulty: 'easy',
    translations: {
      ESV: 'Then Samuel took a stone and set it up between Mizpah and Shen and called its name Ebenezer; for he said, "Till now the LORD has helped us."',
      NIV: 'Then Samuel took a stone and set it up between Mizpah and Shen. He named it Ebenezer, saying, "Thus far the LORD has helped us."',
      KJV: 'Then Samuel took a stone, and set it between Mizpah and Shen, and called the name of it Ebenezer, saying, Hitherto hath the LORD helped us.',
      NASB: 'Then Samuel took a stone and set it between Mizpah and Shen, and named it Ebenezer, saying, "Thus far the LORD has helped us."',
    },
    context: {
      before: {
        reference: '1 Samuel 7:11',
        text: 'And the men of Israel went out from Mizpah and pursued the Philistines and struck them, as far as below Beth-car.',
      },
      after: {
        reference: '1 Samuel 7:13',
        text: 'So the Philistines were subdued and did not again enter the territory of Israel. And the hand of the LORD was against the Philistines all the days of Samuel.',
      },
    },
  },
  {
    id: '1-samuel-2-6-7',
    reference: '1 Samuel 2:6-7',
    book: '1 Samuel',
    chapter: 2,
    verse: 6,
    difficulty: 'medium',
    translations: {
      ESV: 'The LORD kills and brings to life; he brings down to Sheol and raises up. The LORD makes poor and makes rich; he brings low and he exalts.',
      NIV: 'The LORD brings death and makes alive; he brings down to the grave and raises up. The LORD sends poverty and wealth; he humbles and he exalts.',
      KJV: 'The LORD killeth, and maketh alive: he bringeth down to the grave, and bringeth up. The LORD maketh poor, and maketh rich: he bringeth low, and lifteth up.',
      NASB: 'The LORD kills and makes alive; He brings down to Sheol and raises up. The LORD makes poor and rich; He brings low, He also exalts.',
    },
    context: {
      before: {
        reference: '1 Samuel 2:5',
        text: 'Those who were full have hired themselves out for bread, but those who were hungry have ceased to hunger. The barren has borne seven, but she who has many children is forlorn.',
      },
      after: {
        reference: '1 Samuel 2:8',
        text: 'He raises up the poor from the dust; he lifts the needy from the ash heap to make them sit with princes and inherit a seat of honor.',
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
  {
    id: '2-samuel-22-31',
    reference: '2 Samuel 22:31',
    book: '2 Samuel',
    chapter: 22,
    verse: 31,
    difficulty: 'easy',
    translations: {
      ESV: 'This God—his way is perfect; the word of the LORD proves true; he is a shield for all those who take refuge in him.',
      NIV: 'As for God, his way is perfect: The LORD\'s word is flawless; he shields all who take refuge in him.',
      KJV: 'As for God, his way is perfect; the word of the LORD is tried: he is a buckler to all them that trust in him.',
      NASB: 'As for God, His way is blameless; the word of the LORD is tested; He is a shield to all who take refuge in Him.',
    },
    context: {
      before: {
        reference: '2 Samuel 22:30',
        text: 'For by you I can run against a troop, and by my God I can leap over a wall.',
      },
      after: {
        reference: '2 Samuel 22:32',
        text: 'For who is God, but the LORD? And who is a rock, except our God?',
      },
    },
  },
  {
    id: '2-samuel-7-22',
    reference: '2 Samuel 7:22',
    book: '2 Samuel',
    chapter: 7,
    verse: 22,
    difficulty: 'medium',
    translations: {
      ESV: 'Therefore you are great, O LORD God. For there is none like you, and there is no God besides you, according to all that we have heard with our ears.',
      NIV: 'How great you are, Sovereign LORD! There is no one like you, and there is no God but you, as we have heard with our own ears.',
      KJV: 'Wherefore thou art great, O LORD God: for there is none like thee, neither is there any God beside thee, according to all that we have heard with our ears.',
      NASB: 'For this reason You are great, O Lord GOD; for there is none like You, and there is no God besides You, according to all that we have heard with our ears.',
    },
    context: {
      before: {
        reference: '2 Samuel 7:21',
        text: 'Because of your promise, and according to your own heart, you have brought about all this greatness, to make your servant know it.',
      },
      after: {
        reference: '2 Samuel 7:23',
        text: 'And who is like your people Israel, the one nation on earth whom God went to redeem to be his people?',
      },
    },
  },
  {
    id: '2-samuel-7-28',
    reference: '2 Samuel 7:28',
    book: '2 Samuel',
    chapter: 7,
    verse: 28,
    difficulty: 'medium',
    translations: {
      ESV: 'And now, O Lord GOD, you are God, and your words are true, and you have promised this good thing to your servant.',
      NIV: 'Sovereign LORD, you are God! Your covenant is trustworthy, and you have promised these good things to your servant.',
      KJV: 'And now, O Lord GOD, thou art that God, and thy words be true, and thou hast promised this goodness unto thy servant.',
      NASB: 'Now, O Lord GOD, You are God, and Your words are truth, and You have promised this good thing to Your servant.',
    },
    context: {
      before: {
        reference: '2 Samuel 7:27',
        text: 'For you, O LORD of hosts, the God of Israel, have made this revelation to your servant, saying, "I will build you a house." Therefore your servant has found courage to pray this prayer to you.',
      },
      after: {
        reference: '2 Samuel 7:29',
        text: 'Now therefore may it please you to bless the house of your servant, so that it may continue forever before you.',
      },
    },
  },
  {
    id: '2-samuel-22-47',
    reference: '2 Samuel 22:47',
    book: '2 Samuel',
    chapter: 22,
    verse: 47,
    difficulty: 'easy',
    translations: {
      ESV: 'The LORD lives, and blessed be my rock, and exalted be my God, the rock of my salvation.',
      NIV: 'The LORD lives! Praise be to my Rock! Exalted be my God, the Rock, my Savior!',
      KJV: 'The LORD liveth; and blessed be my rock; and exalted be the God of the rock of my salvation.',
      NASB: 'The LORD lives, and blessed be my rock; and exalted be God, the rock of my salvation.',
    },
    context: {
      before: {
        reference: '2 Samuel 22:46',
        text: 'Foreigners lost heart and came trembling out of their fortresses.',
      },
      after: {
        reference: '2 Samuel 22:48',
        text: 'The God who gave me vengeance and brought down peoples under me.',
      },
    },
  },
  {
    id: '2-samuel-23-5',
    reference: '2 Samuel 23:5',
    book: '2 Samuel',
    chapter: 23,
    verse: 5,
    difficulty: 'hard',
    translations: {
      ESV: 'For does not my house stand so with God? For he has made with me an everlasting covenant, ordered in all things and secure. For will he not cause to prosper all my help and my desire?',
      NIV: 'If my house were not right with God, surely he would not have made with me an everlasting covenant, arranged and secured in every part. Will he not bring to fruition my salvation and grant me my every desire?',
      KJV: 'Although my house be not so with God; yet he hath made with me an everlasting covenant, ordered in all things, and sure: for this is all my salvation, and all my desire, although he make it not to grow.',
      NASB: 'Truly is not my house so with God? For He has made an everlasting covenant with me, ordered in all things, and secured; for all my salvation and all my desire, will He not indeed make it grow?',
    },
    context: {
      before: {
        reference: '2 Samuel 23:4',
        text: 'He dawns on them like the morning light, like the sun shining forth on a cloudless morning, like rain that makes grass to sprout from the earth.',
      },
      after: {
        reference: '2 Samuel 23:6',
        text: 'But worthless men are all like thorns that are thrown away, for they cannot be taken with the hand.',
      },
    },
  },
  {
    id: '2-samuel-1-27',
    reference: '2 Samuel 1:27',
    book: '2 Samuel',
    chapter: 1,
    verse: 27,
    difficulty: 'easy',
    translations: {
      ESV: 'How the mighty have fallen, and the weapons of war perished!',
      NIV: 'How the mighty have fallen! The weapons of war have perished!',
      KJV: 'How are the mighty fallen, and the weapons of war perished!',
      NASB: 'How have the mighty fallen, and the weapons of war perished!',
    },
    context: {
      before: {
        reference: '2 Samuel 1:26',
        text: 'I am distressed for you, my brother Jonathan; very pleasant have you been to me; your love to me was extraordinary, surpassing the love of women.',
      },
      after: {
        reference: '2 Samuel 2:1',
        text: 'After this David inquired of the LORD, "Shall I go up into any of the cities of Judah?" And the LORD said to him, "Go up." David said, "To which shall I go up?"',
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

  // Additional 1 Kings verses
  {
    id: '1-kings-19-12',
    reference: '1 Kings 19:12',
    book: '1 Kings',
    chapter: 19,
    verse: 12,
    difficulty: 'medium',
    translations: {
      ESV: 'And after the earthquake a fire, but the LORD was not in the fire. And after the fire the sound of a low whisper.',
      NIV: 'After the earthquake came a fire, but the LORD was not in the fire. And after the fire came a gentle whisper.',
      KJV: 'And after the earthquake a fire; but the LORD was not in the fire: and after the fire a still small voice.',
      NASB: 'After the earthquake a fire, but the LORD was not in the fire; and after the fire a sound of a gentle blowing.',
    },
    context: {
      before: {
        reference: '1 Kings 19:11',
        text: 'And he said, "Go out and stand on the mount before the LORD." And behold, the LORD passed by, and a great and strong wind tore the mountains.',
      },
      after: {
        reference: '1 Kings 19:13',
        text: 'And when Elijah heard it, he wrapped his face in his cloak and went out and stood at the entrance of the cave.',
      },
    },
  },
  {
    id: '1-kings-8-60',
    reference: '1 Kings 8:60',
    book: '1 Kings',
    chapter: 8,
    verse: 60,
    difficulty: 'easy',
    translations: {
      ESV: 'That all the peoples of the earth may know that the LORD is God; there is no other.',
      NIV: 'So that all the peoples of the earth may know that the LORD is God and that there is no other.',
      KJV: 'That all the people of the earth may know that the LORD is God, and that there is none else.',
      NASB: 'So that all the peoples of the earth may know that the LORD is God; there is no one else.',
    },
    context: {
      before: {
        reference: '1 Kings 8:59',
        text: 'Let these words of mine, with which I have pleaded before the LORD, be near to the LORD our God day and night.',
      },
      after: {
        reference: '1 Kings 8:61',
        text: 'Let your heart therefore be wholly true to the LORD our God, walking in his statutes and keeping his commandments.',
      },
    },
  },
  {
    id: '1-kings-2-2',
    reference: '1 Kings 2:2',
    book: '1 Kings',
    chapter: 2,
    verse: 2,
    difficulty: 'easy',
    translations: {
      ESV: 'I am about to go the way of all the earth. Be strong, and show yourself a man.',
      NIV: 'I am about to go the way of all the earth. So be strong, act like a man.',
      KJV: 'I go the way of all the earth: be thou strong therefore, and shew thyself a man.',
      NASB: 'I am going the way of all the earth. Be strong, therefore, and show yourself a man.',
    },
    context: {
      before: {
        reference: '1 Kings 2:1',
        text: 'When David\'s time to die drew near, he commanded Solomon his son.',
      },
      after: {
        reference: '1 Kings 2:3',
        text: 'And keep the charge of the LORD your God, walking in his ways and keeping his statutes.',
      },
    },
  },
  {
    id: '1-kings-11-9',
    reference: '1 Kings 11:9',
    book: '1 Kings',
    chapter: 11,
    verse: 9,
    difficulty: 'medium',
    translations: {
      ESV: 'And the LORD was angry with Solomon, because his heart had turned away from the LORD, the God of Israel, who had appeared to him twice.',
      NIV: 'The LORD became angry with Solomon because his heart had turned away from the LORD, the God of Israel, who had appeared to him twice.',
      KJV: 'And the LORD was angry with Solomon, because his heart was turned from the LORD God of Israel, which had appeared unto him twice.',
      NASB: 'Now the LORD was angry with Solomon because his heart was turned away from the LORD, the God of Israel, who had appeared to him twice.',
    },
    context: {
      before: {
        reference: '1 Kings 11:8',
        text: 'And so he did for all his foreign wives, who made offerings and sacrificed to their gods.',
      },
      after: {
        reference: '1 Kings 11:10',
        text: 'And had commanded him concerning this thing, that he should not go after other gods. But he did not keep what the LORD commanded.',
      },
    },
  },
  {
    id: '1-kings-18-21',
    reference: '1 Kings 18:21',
    book: '1 Kings',
    chapter: 18,
    verse: 21,
    difficulty: 'medium',
    translations: {
      ESV: 'And Elijah came near to all the people and said, "How long will you go limping between two different opinions? If the LORD is God, follow him; but if Baal, then follow him." And the people did not answer him a word.',
      NIV: 'Elijah went before the people and said, "How long will you waver between two opinions? If the LORD is God, follow him; but if Baal is God, follow him." But the people said nothing.',
      KJV: 'And Elijah came unto all the people, and said, How long halt ye between two opinions? if the LORD be God, follow him: but if Baal, then follow him. And the people answered him not a word.',
      NASB: 'Elijah came near to all the people and said, "How long will you hesitate between two opinions? If the LORD is God, follow Him; but if Baal, follow him." But the people did not answer him a word.',
    },
    context: {
      before: {
        reference: '1 Kings 18:20',
        text: 'So Ahab sent to all the people of Israel and gathered the prophets together at Mount Carmel.',
      },
      after: {
        reference: '1 Kings 18:22',
        text: 'Then Elijah said to the people, "I, even I only, am left a prophet of the LORD, but Baal\'s prophets are 450 men."',
      },
    },
  },
  {
    id: '1-kings-19-11-12',
    reference: '1 Kings 19:11-12',
    book: '1 Kings',
    chapter: 19,
    verse: 11,
    difficulty: 'hard',
    translations: {
      ESV: 'And he said, "Go out and stand on the mount before the LORD." And behold, the LORD passed by, and a great and strong wind tore the mountains and broke in pieces the rocks before the LORD, but the LORD was not in the wind. And after the wind an earthquake, but the LORD was not in the earthquake. And after the earthquake a fire, but the LORD was not in the fire. And after the fire the sound of a low whisper.',
      NIV: 'The LORD said, "Go out and stand on the mountain in the presence of the LORD, for the LORD is about to pass by." Then a great and powerful wind tore the mountains apart and shattered the rocks before the LORD, but the LORD was not in the wind. After the wind there was an earthquake, but the LORD was not in the earthquake. After the earthquake came a fire, but the LORD was not in the fire. And after the fire came a gentle whisper.',
      KJV: 'And he said, Go forth, and stand upon the mount before the LORD. And, behold, the LORD passed by, and a great and strong wind rent the mountains, and brake in pieces the rocks before the LORD; but the LORD was not in the wind: and after the wind an earthquake; but the LORD was not in the earthquake: And after the earthquake a fire; but the LORD was not in the fire: and after the fire a still small voice.',
      NASB: 'So He said, "Go forth and stand on the mountain before the LORD." And behold, the LORD was passing by! And a great and strong wind was rending the mountains and breaking in pieces the rocks before the LORD; but the LORD was not in the wind. And after the wind an earthquake, but the LORD was not in the earthquake. After the earthquake a fire, but the LORD was not in the fire; and after the fire a sound of a gentle blowing.',
    },
    context: {
      before: {
        reference: '1 Kings 19:10',
        text: 'He said, "I have been very jealous for the LORD, the God of hosts. For the people of Israel have forsaken your covenant, thrown down your altars, and killed your prophets with the sword."',
      },
      after: {
        reference: '1 Kings 19:13',
        text: 'And when Elijah heard it, he wrapped his face in his cloak and went out and stood at the entrance of the cave.',
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
  // Additional 2 Kings verses
  {
    id: '2-kings-2-11',
    reference: '2 Kings 2:11',
    book: '2 Kings',
    chapter: 2,
    verse: 11,
    difficulty: 'medium',
    translations: {
      ESV: 'And as they still went on and talked, behold, chariots of fire and horses of fire separated the two of them. And Elijah went up by a whirlwind into heaven.',
      NIV: 'As they were walking along and talking together, suddenly a chariot of fire and horses of fire appeared and separated the two of them, and Elijah went up to heaven in a whirlwind.',
      KJV: 'And it came to pass, as they still went on, and talked, that, behold, there appeared a chariot of fire, and horses of fire, and parted them both asunder; and Elijah went up by a whirlwind into heaven.',
      NASB: 'As they were going along and talking, behold, there appeared a chariot of fire and horses of fire which separated the two of them. And Elijah went up by a whirlwind to heaven.',
    },
    context: {
      before: {
        reference: '2 Kings 2:10',
        text: 'And he said, "You have asked a hard thing; yet, if you see me as I am being taken from you, it shall be so for you."',
      },
      after: {
        reference: '2 Kings 2:12',
        text: 'And Elisha saw it and he cried, "My father, my father! The chariots of Israel and its horsemen!" And he saw him no more.',
      },
    },
  },
  {
    id: '2-kings-20-5',
    reference: '2 Kings 20:5',
    book: '2 Kings',
    chapter: 20,
    verse: 5,
    difficulty: 'medium',
    translations: {
      ESV: 'Turn back, and say to Hezekiah the leader of my people, Thus says the LORD, the God of David your father: I have heard your prayer; I have seen your tears. Behold, I will heal you.',
      NIV: 'Go back and tell Hezekiah, the ruler of my people, "This is what the LORD, the God of your father David, says: I have heard your prayer and seen your tears; I will heal you."',
      KJV: 'Turn again, and tell Hezekiah the captain of my people, Thus saith the LORD, the God of David thy father, I have heard thy prayer, I have seen thy tears: behold, I will heal thee.',
      NASB: 'Return and say to Hezekiah the leader of My people, "Thus says the LORD, the God of your father David, I have heard your prayer, I have seen your tears; behold, I will heal you."',
    },
    context: {
      before: {
        reference: '2 Kings 20:4',
        text: 'And before Isaiah had gone out of the middle court, the word of the LORD came to him.',
      },
      after: {
        reference: '2 Kings 20:6',
        text: 'And I will add fifteen years to your life. I will deliver you and this city out of the hand of the king of Assyria.',
      },
    },
  },
  {
    id: '2-kings-19-19',
    reference: '2 Kings 19:19',
    book: '2 Kings',
    chapter: 19,
    verse: 19,
    difficulty: 'medium',
    translations: {
      ESV: 'So now, O LORD our God, save us, please, from his hand, that all the kingdoms of the earth may know that you, O LORD, are God alone.',
      NIV: 'Now, LORD our God, deliver us from his hand, so that all the kingdoms of the earth may know that you alone, LORD, are God.',
      KJV: 'Now therefore, O LORD our God, I beseech thee, save thou us out of his hand, that all the kingdoms of the earth may know that thou art the LORD God, even thou only.',
      NASB: 'Now, O LORD our God, I pray, deliver us from his hand that all the kingdoms of the earth may know that You alone, O LORD, are God.',
    },
    context: {
      before: {
        reference: '2 Kings 19:18',
        text: 'And have cast their gods into the fire, for they were not gods, but the work of men\'s hands, wood and stone.',
      },
      after: {
        reference: '2 Kings 19:20',
        text: 'Then Isaiah the son of Amoz sent to Hezekiah, saying, "Thus says the LORD, the God of Israel: Your prayer to me about Sennacherib king of Assyria I have heard."',
      },
    },
  },
  {
    id: '2-kings-22-19',
    reference: '2 Kings 22:19',
    book: '2 Kings',
    chapter: 22,
    verse: 19,
    difficulty: 'medium',
    translations: {
      ESV: 'Because your heart was penitent, and you humbled yourself before the LORD, when you heard how I spoke against this place and against its inhabitants, that they should become a desolation and a curse, and you have torn your clothes and wept before me, I also have heard you, declares the LORD.',
      NIV: 'Because your heart was responsive and you humbled yourself before the LORD when you heard what I have spoken against this place and its people—that they would become a curse and be laid waste—and because you tore your robes and wept in my presence, I also have heard you, declares the LORD.',
      KJV: 'Because thine heart was tender, and thou hast humbled thyself before the LORD, when thou heardest what I spake against this place, and against the inhabitants thereof, that they should become a desolation and a curse, and hast rent thy clothes, and wept before me; I also have heard thee, saith the LORD.',
      NASB: 'Because your heart was tender and you humbled yourself before the LORD when you heard what I spoke against this place and against its inhabitants that they should become a desolation and a curse, and you have torn your clothes and wept before Me, I truly have heard you, declares the LORD.',
    },
    context: {
      before: {
        reference: '2 Kings 22:18',
        text: 'But to the king of Judah, who sent you to inquire of the LORD, thus shall you say to him.',
      },
      after: {
        reference: '2 Kings 22:20',
        text: 'Therefore, behold, I will gather you to your fathers, and you shall be gathered to your grave in peace.',
      },
    },
  },
  {
    id: '2-kings-5-15',
    reference: '2 Kings 5:15',
    book: '2 Kings',
    chapter: 5,
    verse: 15,
    difficulty: 'easy',
    translations: {
      ESV: 'Then he returned to the man of God, he and all his company, and he came and stood before him. And he said, "Behold, I know that there is no God in all the earth but in Israel."',
      NIV: 'Then Naaman and all his attendants went back to the man of God. He stood before him and said, "Now I know that there is no God in all the world except in Israel."',
      KJV: 'And he returned to the man of God, he and all his company, and came, and stood before him: and he said, Behold, now I know that there is no God in all the earth, but in Israel.',
      NASB: 'When he returned to the man of God with all his company, and came and stood before him, he said, "Behold now, I know that there is no God in all the earth, but in Israel."',
    },
    context: {
      before: {
        reference: '2 Kings 5:14',
        text: 'So he went down and dipped himself seven times in the Jordan, according to the word of the man of God, and his flesh was restored like the flesh of a little child, and he was clean.',
      },
      after: {
        reference: '2 Kings 5:16',
        text: 'But he said, "As the LORD lives, before whom I stand, I will receive none." And he urged him to take it, but he refused.',
      },
    },
  },
  {
    id: '2-kings-6-17',
    reference: '2 Kings 6:17',
    book: '2 Kings',
    chapter: 6,
    verse: 17,
    difficulty: 'medium',
    translations: {
      ESV: 'Then Elisha prayed and said, "O LORD, please open his eyes that he may see." So the LORD opened the eyes of the young man, and he saw, and behold, the mountain was full of horses and chariots of fire all around Elisha.',
      NIV: 'And Elisha prayed, "Open his eyes, LORD, so that he may see." Then the LORD opened the servant\'s eyes, and he looked and saw the hills full of horses and chariots of fire all around Elisha.',
      KJV: 'And Elisha prayed, and said, LORD, I pray thee, open his eyes, that he may see. And the LORD opened the eyes of the young man; and he saw: and, behold, the mountain was full of horses and chariots of fire round about Elisha.',
      NASB: 'Then Elisha prayed and said, "O LORD, I pray, open his eyes that he may see." And the LORD opened the servant\'s eyes and he saw; and behold, the mountain was full of horses and chariots of fire all around Elisha.',
    },
    context: {
      before: {
        reference: '2 Kings 6:16',
        text: 'He said, "Do not be afraid, for those who are with us are more than those who are with them."',
      },
      after: {
        reference: '2 Kings 6:18',
        text: 'And when the Syrians came down against him, Elisha prayed to the LORD and said, "Please strike this people with blindness." So he struck them with blindness in accordance with the prayer of Elisha.',
      },
    },
  },
  {
    id: '2-kings-18-5',
    reference: '2 Kings 18:5',
    book: '2 Kings',
    chapter: 18,
    verse: 5,
    difficulty: 'easy',
    translations: {
      ESV: 'He trusted in the LORD, the God of Israel, so that there was none like him among all the kings of Judah after him, nor among those who were before him.',
      NIV: 'Hezekiah trusted in the LORD, the God of Israel. There was no one like him among all the kings of Judah, either before him or after him.',
      KJV: 'He trusted in the LORD God of Israel; so that after him was none like him among all the kings of Judah, nor any that were before him.',
      NASB: 'He trusted in the LORD, the God of Israel; so that after him there was none like him among all the kings of Judah, nor among those who were before him.',
    },
    context: {
      before: {
        reference: '2 Kings 18:4',
        text: 'He removed the high places and broke the pillars and cut down the Asherah. And he broke in pieces the bronze serpent that Moses had made.',
      },
      after: {
        reference: '2 Kings 18:6',
        text: 'For he held fast to the LORD. He did not depart from following him, but kept the commandments that the LORD commanded Moses.',
      },
    },
  },
  {
    id: '2-kings-23-25',
    reference: '2 Kings 23:25',
    book: '2 Kings',
    chapter: 23,
    verse: 25,
    difficulty: 'medium',
    translations: {
      ESV: 'Before him there was no king like him, who turned to the LORD with all his heart and with all his soul and with all his might, according to all the Law of Moses, nor did any like him arise after him.',
      NIV: 'Neither before nor after Josiah was there a king like him who turned to the LORD as he did—with all his heart and with all his soul and with all his strength, in accordance with all the Law of Moses.',
      KJV: 'And like unto him was there no king before him, that turned to the LORD with all his heart, and with all his soul, and with all his might, according to all the law of Moses; neither after him arose there any like him.',
      NASB: 'Before him there was no king like him who turned to the LORD with all his heart and with all his soul and with all his might, according to all the law of Moses; nor did any like him arise after him.',
    },
    context: {
      before: {
        reference: '2 Kings 23:24',
        text: 'Moreover, Josiah put away the mediums and the necromancers and the household gods and the idols and all the abominations that were seen in the land of Judah.',
      },
      after: {
        reference: '2 Kings 23:26',
        text: 'Still the LORD did not turn from the burning of his great wrath, by which his anger was kindled against Judah.',
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
  // Additional 1 Chronicles verses
  {
    id: '1-chronicles-4-10',
    reference: '1 Chronicles 4:10',
    book: '1 Chronicles',
    chapter: 4,
    verse: 10,
    difficulty: 'medium',
    translations: {
      ESV: 'Jabez called upon the God of Israel, saying, "Oh that you would bless me and enlarge my border, and that your hand might be with me, and that you would keep me from harm so that it might not bring me pain!" And God granted what he asked.',
      NIV: 'Jabez cried out to the God of Israel, "Oh, that you would bless me and enlarge my territory! Let your hand be with me, and keep me from harm so that I will be free from pain." And God granted his request.',
      KJV: 'And Jabez called on the God of Israel, saying, Oh that thou wouldest bless me indeed, and enlarge my coast, and that thine hand might be with me, and that thou wouldest keep me from evil, that it may not grieve me! And God granted him that which he requested.',
      NASB: 'Now Jabez called on the God of Israel, saying, "Oh that You would bless me indeed and enlarge my border, and that Your hand might be with me, and that You would keep me from harm that it may not pain me!" And God granted him what he requested.',
    },
    context: {
      before: {
        reference: '1 Chronicles 4:9',
        text: 'Jabez was more honorable than his brothers; and his mother called his name Jabez, saying, "Because I bore him in pain."',
      },
      after: {
        reference: '1 Chronicles 4:11',
        text: 'Chelub, the brother of Shuhah, fathered Mehir, who was the father of Eshton.',
      },
    },
  },
  {
    id: '1-chronicles-16-34',
    reference: '1 Chronicles 16:34',
    book: '1 Chronicles',
    chapter: 16,
    verse: 34,
    difficulty: 'easy',
    translations: {
      ESV: 'Oh give thanks to the LORD, for he is good; for his steadfast love endures forever!',
      NIV: 'Give thanks to the LORD, for he is good; his love endures forever.',
      KJV: 'O give thanks unto the LORD; for he is good; for his mercy endureth for ever.',
      NASB: 'O give thanks to the LORD, for He is good; for His lovingkindness is everlasting.',
    },
    context: {
      before: {
        reference: '1 Chronicles 16:33',
        text: 'Then shall the trees of the forest sing for joy before the LORD, for he comes to judge the earth.',
      },
      after: {
        reference: '1 Chronicles 16:35',
        text: 'Say also: "Save us, O God of our salvation, and gather and deliver us from among the nations."',
      },
    },
  },
  {
    id: '1-chronicles-28-9',
    reference: '1 Chronicles 28:9',
    book: '1 Chronicles',
    chapter: 28,
    verse: 9,
    difficulty: 'hard',
    translations: {
      ESV: 'And you, Solomon my son, know the God of your father and serve him with a whole heart and with a willing mind, for the LORD searches all hearts and understands every plan and thought.',
      NIV: 'And you, my son Solomon, acknowledge the God of your father, and serve him with wholehearted devotion and with a willing mind, for the LORD searches every heart and understands every desire and every thought.',
      KJV: 'And thou, Solomon my son, know thou the God of thy father, and serve him with a perfect heart and with a willing mind: for the LORD searcheth all hearts, and understandeth all the imaginations of the thoughts.',
      NASB: 'As for you, my son Solomon, know the God of your father, and serve Him with a whole heart and a willing mind; for the LORD searches all hearts, and understands every intent of the thoughts.',
    },
    context: {
      before: {
        reference: '1 Chronicles 28:8',
        text: 'Now therefore in the sight of all Israel, the assembly of the LORD, and in the hearing of our God, observe and seek out all the commandments of the LORD your God.',
      },
      after: {
        reference: '1 Chronicles 28:10',
        text: 'Be careful now, for the LORD has chosen you to build a house for the sanctuary; be strong and do it.',
      },
    },
  },
  {
    id: '1-chronicles-29-13',
    reference: '1 Chronicles 29:13',
    book: '1 Chronicles',
    chapter: 29,
    verse: 13,
    difficulty: 'easy',
    translations: {
      ESV: 'And now we thank you, our God, and praise your glorious name.',
      NIV: 'Now, our God, we give you thanks, and praise your glorious name.',
      KJV: 'Now therefore, our God, we thank thee, and praise thy glorious name.',
      NASB: 'Now therefore, our God, we thank You, and praise Your glorious name.',
    },
    context: {
      before: {
        reference: '1 Chronicles 29:12',
        text: 'Both riches and honor come from you, and you rule over all. In your hand are power and might.',
      },
      after: {
        reference: '1 Chronicles 29:14',
        text: 'But who am I, and what is my people, that we should be able thus to offer willingly?',
      },
    },
  },
  {
    id: '1-chronicles-16-8',
    reference: '1 Chronicles 16:8',
    book: '1 Chronicles',
    chapter: 16,
    verse: 8,
    difficulty: 'easy',
    translations: {
      ESV: 'Oh give thanks to the LORD; call upon his name; make known his deeds among the peoples!',
      NIV: 'Give praise to the LORD, proclaim his name; make known among the nations what he has done.',
      KJV: 'Give thanks unto the LORD, call upon his name, make known his deeds among the people.',
      NASB: 'Oh give thanks to the LORD, call upon His name; make known His deeds among the peoples.',
    },
    context: {
      before: {
        reference: '1 Chronicles 16:7',
        text: 'Then on that day David first appointed that thanksgiving be sung to the LORD by Asaph and his brothers.',
      },
      after: {
        reference: '1 Chronicles 16:9',
        text: 'Sing to him, sing praises to him; tell of all his wondrous works!',
      },
    },
  },
  {
    id: '1-chronicles-28-20',
    reference: '1 Chronicles 28:20',
    book: '1 Chronicles',
    chapter: 28,
    verse: 20,
    difficulty: 'medium',
    translations: {
      ESV: 'Then David said to Solomon his son, "Be strong and courageous and do it. Do not be afraid and do not be dismayed, for the LORD God, even my God, is with you. He will not leave you or forsake you, until all the work for the service of the house of the LORD is finished."',
      NIV: 'David also said to Solomon his son, "Be strong and courageous, and do the work. Do not be afraid or discouraged, for the LORD God, my God, is with you. He will not fail you or forsake you until all the work for the service of the temple of the LORD is finished."',
      KJV: 'And David said to Solomon his son, Be strong and of good courage, and do it: fear not, nor be dismayed: for the LORD God, even my God, will be with thee; he will not fail thee, nor forsake thee, until thou hast finished all the work for the service of the house of the LORD.',
      NASB: 'Then David said to his son Solomon, "Be strong and courageous, and act; do not fear nor be dismayed, for the LORD God, my God, is with you. He will not fail you nor forsake you until all the work for the service of the house of the LORD is finished."',
    },
    context: {
      before: {
        reference: '1 Chronicles 28:19',
        text: 'All this he made clear to me in writing from the hand of the LORD, all the work to be done according to the plan.',
      },
      after: {
        reference: '1 Chronicles 28:21',
        text: 'And behold the divisions of the priests and the Levites for all the service of the house of God.',
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
  // Additional 2 Chronicles verses
  {
    id: '2-chronicles-20-15',
    reference: '2 Chronicles 20:15',
    book: '2 Chronicles',
    chapter: 20,
    verse: 15,
    difficulty: 'medium',
    translations: {
      ESV: 'And he said, "Listen, all Judah and inhabitants of Jerusalem and King Jehoshaphat: Thus says the LORD to you, \'Do not be afraid and do not be dismayed at this great horde, for the battle is not yours but God\'s."',
      NIV: 'He said: "Listen, King Jehoshaphat and all who live in Judah and Jerusalem! This is what the LORD says to you: \'Do not be afraid or discouraged because of this vast army. For the battle is not yours, but God\'s."',
      KJV: 'And he said, Hearken ye, all Judah, and ye inhabitants of Jerusalem, and thou king Jehoshaphat, Thus saith the LORD unto you, Be not afraid nor dismayed by reason of this great multitude; for the battle is not yours, but God\'s.',
      NASB: 'And he said, "Listen, all Judah and the inhabitants of Jerusalem and King Jehoshaphat: thus says the LORD to you, \'Do not fear or be dismayed because of this great multitude, for the battle is not yours but God\'s."',
    },
    context: {
      before: {
        reference: '2 Chronicles 20:14',
        text: 'And the Spirit of the LORD came upon Jahaziel the son of Zechariah.',
      },
      after: {
        reference: '2 Chronicles 20:16',
        text: 'Tomorrow go down against them. Behold, they will come up by the ascent of Ziz.',
      },
    },
  },
  {
    id: '2-chronicles-6-18',
    reference: '2 Chronicles 6:18',
    book: '2 Chronicles',
    chapter: 6,
    verse: 18,
    difficulty: 'medium',
    translations: {
      ESV: 'But will God indeed dwell with man on the earth? Behold, heaven and the highest heaven cannot contain you, how much less this house that I have built!',
      NIV: 'But will God really dwell on earth with humans? The heavens, even the highest heavens, cannot contain you. How much less this temple I have built!',
      KJV: 'But will God in very deed dwell with men on the earth? behold, heaven and the heaven of heavens cannot contain thee; how much less this house which I have built!',
      NASB: 'But will God indeed dwell with mankind on the earth? Behold, heaven and the highest heaven cannot contain You; how much less this house which I have built.',
    },
    context: {
      before: {
        reference: '2 Chronicles 6:17',
        text: 'Now therefore, O LORD, God of Israel, let your word be confirmed, which you have spoken to your servant David.',
      },
      after: {
        reference: '2 Chronicles 6:19',
        text: 'Yet have regard to the prayer of your servant and to his plea, O LORD my God.',
      },
    },
  },
  {
    id: '2-chronicles-32-8',
    reference: '2 Chronicles 32:8',
    book: '2 Chronicles',
    chapter: 32,
    verse: 8,
    difficulty: 'medium',
    translations: {
      ESV: 'With him is an arm of flesh, but with us is the LORD our God, to help us and to fight our battles." And the people took confidence from the words of Hezekiah king of Judah.',
      NIV: 'With him is only the arm of flesh, but with us is the LORD our God to help us and to fight our battles." And the people gained confidence from what Hezekiah the king of Judah said.',
      KJV: 'With him is an arm of flesh; but with us is the LORD our God to help us, and to fight our battles. And the people rested themselves upon the words of Hezekiah king of Judah.',
      NASB: 'With him is only an arm of flesh, but with us is the LORD our God to help us and to fight our battles." And the people relied on the words of Hezekiah king of Judah.',
    },
    context: {
      before: {
        reference: '2 Chronicles 32:7',
        text: 'Be strong and courageous. Do not be afraid or dismayed before the king of Assyria and all the horde that is with him.',
      },
      after: {
        reference: '2 Chronicles 32:9',
        text: 'After this, Sennacherib king of Assyria, who was besieging Lachish with all his forces, sent his servants to Jerusalem.',
      },
    },
  },
  {
    id: '2-chronicles-34-27',
    reference: '2 Chronicles 34:27',
    book: '2 Chronicles',
    chapter: 34,
    verse: 27,
    difficulty: 'medium',
    translations: {
      ESV: 'Because your heart was tender and you humbled yourself before God when you heard his words against this place and its inhabitants, and you have humbled yourself before me and have torn your clothes and wept before me, I also have heard you, declares the LORD.',
      NIV: 'Because your heart was responsive and you humbled yourself before God when you heard what he spoke against this place and its people, and because you humbled yourself before me and tore your robes and wept in my presence, I have heard you, declares the LORD.',
      KJV: 'Because thine heart was tender, and thou didst humble thyself before God, when thou heardest his words against this place, and against the inhabitants thereof, and humbledst thyself before me, and didst rend thy clothes, and weep before me; I have even heard thee also, saith the LORD.',
      NASB: 'Because your heart was tender and you humbled yourself before God when you heard His words against this place and against its inhabitants, and because you humbled yourself before Me, tore your clothes and wept before Me, I truly have heard you, declares the LORD.',
    },
    context: {
      before: {
        reference: '2 Chronicles 34:26',
        text: 'But to the king of Judah, who sent you to inquire of the LORD, thus shall you say to him.',
      },
      after: {
        reference: '2 Chronicles 34:28',
        text: 'Behold, I will gather you to your fathers, and you shall be gathered to your grave in peace.',
      },
    },
  },
  {
    id: '2-chronicles-1-10',
    reference: '2 Chronicles 1:10',
    book: '2 Chronicles',
    chapter: 1,
    verse: 10,
    difficulty: 'easy',
    translations: {
      ESV: 'Give me now wisdom and knowledge to go out and come in before this people, for who can govern this people of yours, which is so great?',
      NIV: 'Give me wisdom and knowledge, that I may lead this people, for who is able to govern this great people of yours?',
      KJV: 'Give me now wisdom and knowledge, that I may go out and come in before this people: for who can judge this thy people, that is so great?',
      NASB: 'Give me now wisdom and knowledge, that I may go out and come in before this people, for who can rule this great people of Yours?',
    },
    context: {
      before: {
        reference: '2 Chronicles 1:9',
        text: 'O LORD God, let your word to David my father be now fulfilled, for you have made me king over a people as numerous as the dust of the earth.',
      },
      after: {
        reference: '2 Chronicles 1:11',
        text: 'God answered Solomon, "Because this was in your heart, and you have not asked for possessions, wealth, honor, or the life of those who hate you, and have not even asked for long life, but have asked for wisdom and knowledge for yourself that you may govern my people over whom I have made you king."',
      },
    },
  },
  {
    id: '2-chronicles-30-9',
    reference: '2 Chronicles 30:9',
    book: '2 Chronicles',
    chapter: 30,
    verse: 9,
    difficulty: 'medium',
    translations: {
      ESV: 'For if you return to the LORD, your brothers and your children will find compassion with their captors and return to this land. For the LORD your God is gracious and merciful and will not turn away his face from you, if you return to him.',
      NIV: 'If you return to the LORD, then your fellow Israelites and your children will be shown compassion by their captors and will return to this land, for the LORD your God is gracious and compassionate. He will not turn his face from you if you return to him.',
      KJV: 'For if ye turn again unto the LORD, your brethren and your children shall find compassion before them that lead them captive, so that they shall come again into this land: for the LORD your God is gracious and merciful, and will not turn away his face from you, if ye return unto him.',
      NASB: 'For if you return to the LORD, your brothers and your sons will find compassion before those who led them captive and will return to this land. For the LORD your God is gracious and compassionate, and will not turn His face away from you if you return to Him.',
    },
    context: {
      before: {
        reference: '2 Chronicles 30:8',
        text: 'Do not now be stiff-necked as your fathers were, but yield yourselves to the LORD and come to his sanctuary, which he has consecrated forever.',
      },
      after: {
        reference: '2 Chronicles 30:10',
        text: 'So the couriers went from city to city through the country of Ephraim and Manasseh, and as far as Zebulun, but they laughed them to scorn and mocked them.',
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
  // Additional Ezra verses
  {
    id: 'ezra-1-3',
    reference: 'Ezra 1:3',
    book: 'Ezra',
    chapter: 1,
    verse: 3,
    difficulty: 'medium',
    translations: {
      ESV: 'Whoever is among you of all his people, may his God be with him, and let him go up to Jerusalem, which is in Judah, and rebuild the house of the LORD, the God of Israel—he is the God who is in Jerusalem.',
      NIV: 'Any of his people among you may go up to Jerusalem in Judah and build the temple of the LORD, the God of Israel, the God who is in Jerusalem, and may their God be with them.',
      KJV: 'Who is there among you of all his people? his God be with him, and let him go up to Jerusalem, which is in Judah, and build the house of the LORD God of Israel, (he is the God,) which is in Jerusalem.',
      NASB: 'Whoever there is among you of all His people, may his God be with him! Let him go up to Jerusalem which is in Judah and rebuild the house of the LORD, the God of Israel; He is the God who is in Jerusalem.',
    },
    context: {
      before: {
        reference: 'Ezra 1:2',
        text: 'Thus says Cyrus king of Persia: The LORD, the God of heaven, has given me all the kingdoms of the earth, and he has charged me to build him a house at Jerusalem.',
      },
      after: {
        reference: 'Ezra 1:4',
        text: 'And let each survivor, in whatever place he sojourns, be assisted by the men of his place with silver and gold.',
      },
    },
  },
  {
    id: 'ezra-7-27',
    reference: 'Ezra 7:27',
    book: 'Ezra',
    chapter: 7,
    verse: 27,
    difficulty: 'medium',
    translations: {
      ESV: 'Blessed be the LORD, the God of our fathers, who put such a thing as this into the heart of the king, to beautify the house of the LORD that is in Jerusalem.',
      NIV: 'Praise be to the LORD, the God of our ancestors, who has put it into the king\'s heart to bring honor to the house of the LORD in Jerusalem in this way.',
      KJV: 'Blessed be the LORD God of our fathers, which hath put such a thing as this in the king\'s heart, to beautify the house of the LORD which is in Jerusalem.',
      NASB: 'Blessed be the LORD, the God of our fathers, who has put such a thing as this in the king\'s heart, to adorn the house of the LORD which is in Jerusalem.',
    },
    context: {
      before: {
        reference: 'Ezra 7:26',
        text: 'Whoever will not obey the law of your God and the law of the king, let judgment be strictly executed on him.',
      },
      after: {
        reference: 'Ezra 7:28',
        text: 'And has extended to me his steadfast love before the king and his counselors, and before all the king\'s mighty officers.',
      },
    },
  },
  {
    id: 'ezra-9-8',
    reference: 'Ezra 9:8',
    book: 'Ezra',
    chapter: 9,
    verse: 8,
    difficulty: 'medium',
    translations: {
      ESV: 'But now for a brief moment favor has been shown by the LORD our God, to leave us a remnant and to give us a secure hold within his holy place, that our God may brighten our eyes and grant us a little reviving in our slavery.',
      NIV: 'But now, for a brief moment, the LORD our God has been gracious in leaving us a remnant and giving us a firm place in his sanctuary, and so our God gives light to our eyes and a little relief in our bondage.',
      KJV: 'And now for a little space grace hath been shewed from the LORD our God, to leave us a remnant to escape, and to give us a nail in his holy place, that our God may lighten our eyes, and give us a little reviving in our bondage.',
      NASB: 'But now for a brief moment grace has been shown from the LORD our God, to leave us an escaped remnant and to give us a peg in His holy place, that our God may enlighten our eyes and grant us a little reviving in our bondage.',
    },
    context: {
      before: {
        reference: 'Ezra 9:7',
        text: 'From the days of our fathers to this day we have been in great guilt.',
      },
      after: {
        reference: 'Ezra 9:9',
        text: 'For we are slaves. Yet our God has not forsaken us in our slavery.',
      },
    },
  },
  {
    id: 'ezra-6-22',
    reference: 'Ezra 6:22',
    book: 'Ezra',
    chapter: 6,
    verse: 22,
    difficulty: 'medium',
    translations: {
      ESV: 'And they kept the Feast of Unleavened Bread seven days with joy, for the LORD had made them joyful and had turned the heart of the king of Assyria to them, so that he aided them in the work of the house of God, the God of Israel.',
      NIV: 'For seven days they celebrated with joy the Festival of Unleavened Bread, because the LORD had filled them with joy by changing the attitude of the king of Assyria so that he assisted them in the work on the house of God, the God of Israel.',
      KJV: 'And kept the feast of unleavened bread seven days with joy: for the LORD had made them joyful, and turned the heart of the king of Assyria unto them, to strengthen their hands in the work of the house of God, the God of Israel.',
      NASB: 'And they observed the Feast of Unleavened Bread seven days with joy, for the LORD had caused them to rejoice, and had turned the heart of the king of Assyria toward them to encourage them in the work of the house of God, the God of Israel.',
    },
    context: {
      before: {
        reference: 'Ezra 6:21',
        text: 'It was eaten by the people of Israel who had returned from exile, and also by every one who had joined them and separated himself from the uncleanness of the peoples.',
      },
      after: {
        reference: 'Ezra 7:1',
        text: 'Now after this, in the reign of Artaxerxes king of Persia, Ezra the son of Seraiah.',
      },
    },
  },
  {
    id: 'ezra-1-5',
    reference: 'Ezra 1:5',
    book: 'Ezra',
    chapter: 1,
    verse: 5,
    difficulty: 'medium',
    translations: {
      ESV: 'Then rose up the heads of the fathers\' houses of Judah and Benjamin, and the priests and the Levites, everyone whose spirit God had stirred to go up to rebuild the house of the LORD that is in Jerusalem.',
      NIV: 'Then the family heads of Judah and Benjamin, and the priests and Levites—everyone whose heart God had moved—prepared to go up and build the house of the LORD in Jerusalem.',
      KJV: 'Then rose up the chief of the fathers of Judah and Benjamin, and the priests, and the Levites, with all them whose spirit God had raised, to go up to build the house of the LORD which is in Jerusalem.',
      NASB: 'Then the heads of fathers\' households of Judah and Benjamin and the priests and the Levites arose, even everyone whose spirit God had stirred to go up and rebuild the house of the LORD which is in Jerusalem.',
    },
    context: {
      before: {
        reference: 'Ezra 1:4',
        text: 'And let each survivor, in whatever place he sojourns, be assisted by the men of his place with silver and gold, with goods and with beasts.',
      },
      after: {
        reference: 'Ezra 1:6',
        text: 'And all who were about them aided them with vessels of silver, with gold, with goods, with beasts, and with costly wares.',
      },
    },
  },
  {
    id: 'ezra-8-23',
    reference: 'Ezra 8:23',
    book: 'Ezra',
    chapter: 8,
    verse: 23,
    difficulty: 'easy',
    translations: {
      ESV: 'So we fasted and implored our God for this, and he listened to our entreaty.',
      NIV: 'So we fasted and petitioned our God about this, and he answered our prayer.',
      KJV: 'So we fasted and besought our God for this: and he was intreated of us.',
      NASB: 'So we fasted and sought our God concerning this matter, and He listened to our entreaty.',
    },
    context: {
      before: {
        reference: 'Ezra 8:22',
        text: 'For I was ashamed to ask the king for a band of soldiers and horsemen to protect us against the enemy on our way.',
      },
      after: {
        reference: 'Ezra 8:24',
        text: 'Then I set apart twelve of the leading priests: Sherebiah, Hashabiah, and ten of their kinsmen with them.',
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
  // Additional Nehemiah verses
  {
    id: 'nehemiah-6-16',
    reference: 'Nehemiah 6:16',
    book: 'Nehemiah',
    chapter: 6,
    verse: 16,
    difficulty: 'easy',
    translations: {
      ESV: 'And when all our enemies heard of it, all the nations around us were afraid and fell greatly in their own esteem, for they perceived that this work had been accomplished with the help of our God.',
      NIV: 'When all our enemies heard about this, all the surrounding nations were afraid and lost their self-confidence, because they realized that this work had been done with the help of our God.',
      KJV: 'And it came to pass, that when all our enemies heard thereof, and all the heathen that were about us saw these things, they were much cast down in their own eyes: for they perceived that this work was wrought of our God.',
      NASB: 'When all our enemies heard of it, and all the nations surrounding us saw it, they lost their confidence; for they recognized that this work had been accomplished with the help of our God.',
    },
    context: {
      before: {
        reference: 'Nehemiah 6:15',
        text: 'So the wall was finished on the twenty-fifth day of the month Elul, in fifty-two days.',
      },
      after: {
        reference: 'Nehemiah 6:17',
        text: 'Moreover, in those days the nobles of Judah sent many letters to Tobiah, and Tobiah\'s letters came to them.',
      },
    },
  },
  {
    id: 'nehemiah-2-20',
    reference: 'Nehemiah 2:20',
    book: 'Nehemiah',
    chapter: 2,
    verse: 20,
    difficulty: 'easy',
    translations: {
      ESV: 'Then I replied to them, "The God of heaven will make us prosper, and we his servants will arise and build, but you have no portion or right or claim in Jerusalem."',
      NIV: 'I answered them by saying, "The God of heaven will give us success. We his servants will start rebuilding, but as for you, you have no share in Jerusalem or any claim or historic right to it."',
      KJV: 'Then answered I them, and said unto them, The God of heaven, he will prosper us; therefore we his servants will arise and build: but ye have no portion, nor right, nor memorial, in Jerusalem.',
      NASB: 'So I answered them and said to them, "The God of heaven will give us success; therefore we His servants will arise and build, but you have no portion, right or memorial in Jerusalem."',
    },
    context: {
      before: {
        reference: 'Nehemiah 2:19',
        text: 'But when Sanballat the Horonite and Tobiah the Ammonite servant and Geshem the Arab heard of it, they jeered at us and despised us.',
      },
      after: {
        reference: 'Nehemiah 3:1',
        text: 'Then Eliashib the high priest rose up with his brothers the priests, and they built the Sheep Gate.',
      },
    },
  },
  {
    id: 'nehemiah-4-6',
    reference: 'Nehemiah 4:6',
    book: 'Nehemiah',
    chapter: 4,
    verse: 6,
    difficulty: 'easy',
    translations: {
      ESV: 'So we built the wall. And all the wall was joined together to half its height, for the people had a mind to work.',
      NIV: 'So we rebuilt the wall till all of it reached half its height, for the people worked with all their heart.',
      KJV: 'So built we the wall; and all the wall was joined together unto the half thereof: for the people had a mind to work.',
      NASB: 'So we built the wall and the whole wall was joined together to half its height, for the people had a mind to work.',
    },
    context: {
      before: {
        reference: 'Nehemiah 4:5',
        text: 'Do not cover their guilt, and let not their sin be blotted out from your sight.',
      },
      after: {
        reference: 'Nehemiah 4:7',
        text: 'But when Sanballat and Tobiah and the Arabs and the Ammonites and the Ashdodites heard that the repairing of the walls of Jerusalem was going forward.',
      },
    },
  },
  {
    id: 'nehemiah-6-3',
    reference: 'Nehemiah 6:3',
    book: 'Nehemiah',
    chapter: 6,
    verse: 3,
    difficulty: 'medium',
    translations: {
      ESV: 'And I sent messengers to them, saying, "I am doing a great work and I cannot come down. Why should the work stop while I leave it and come down to you?"',
      NIV: 'So I sent messengers to them with this reply: "I am carrying on a great project and cannot go down. Why should the work stop while I leave it and go down to you?"',
      KJV: 'And I sent messengers unto them, saying, I am doing a great work, so that I cannot come down: why should the work cease, whilst I leave it, and come down to you?',
      NASB: 'So I sent messengers to them, saying, "I am doing a great work and I cannot come down. Why should the work stop while I leave it and come down to you?"',
    },
    context: {
      before: {
        reference: 'Nehemiah 6:2',
        text: 'Sanballat and Geshem sent to me, saying, "Come and let us meet together at Hakkephirim in the plain of Ono." But they intended to do me harm.',
      },
      after: {
        reference: 'Nehemiah 6:4',
        text: 'And they sent to me four times in this way, and I answered them in the same manner.',
      },
    },
  },
  {
    id: 'nehemiah-9-17',
    reference: 'Nehemiah 9:17',
    book: 'Nehemiah',
    chapter: 9,
    verse: 17,
    difficulty: 'medium',
    translations: {
      ESV: 'They refused to obey and were not mindful of the wonders that you performed among them, but they stiffened their neck and appointed a leader to return to their slavery in Egypt. But you are a God ready to forgive, gracious and merciful, slow to anger and abounding in steadfast love.',
      NIV: 'They refused to listen and failed to remember the miracles you performed among them. They became stiff-necked and in their rebellion appointed a leader in order to return to their slavery. But you are a forgiving God, gracious and compassionate, slow to anger and abounding in love.',
      KJV: 'And refused to obey, neither were mindful of thy wonders that thou didst among them; but hardened their necks, and in their rebellion appointed a captain to return to their bondage: but thou art a God ready to pardon, gracious and merciful, slow to anger, and of great kindness.',
      NASB: 'They refused to listen, and did not remember Your wondrous deeds which You had performed among them; so they became stubborn and appointed a leader to return to their slavery in Egypt. But You are a God of forgiveness, gracious and compassionate, slow to anger and abounding in lovingkindness.',
    },
    context: {
      before: {
        reference: 'Nehemiah 9:16',
        text: 'But they and our fathers acted presumptuously and stiffened their neck and did not obey your commandments.',
      },
      after: {
        reference: 'Nehemiah 9:18',
        text: 'Even when they had made for themselves a golden calf and said, "This is your God who brought you up out of Egypt," and had committed great blasphemies.',
      },
    },
  },
  {
    id: 'nehemiah-13-14',
    reference: 'Nehemiah 13:14',
    book: 'Nehemiah',
    chapter: 13,
    verse: 14,
    difficulty: 'easy',
    translations: {
      ESV: 'Remember me, O my God, concerning this, and do not wipe out my good deeds that I have done for the house of my God and for his service.',
      NIV: 'Remember me for this, my God, and do not blot out what I have so faithfully done for the house of my God and its services.',
      KJV: 'Remember me, O my God, concerning this, and wipe not out my good deeds that I have done for the house of my God, and for the offices thereof.',
      NASB: 'Remember me for this, O my God, and do not wipe out my loyal deeds which I have performed for the house of my God and its services.',
    },
    context: {
      before: {
        reference: 'Nehemiah 13:13',
        text: 'I appointed as treasurers over the storehouses Shelemiah the priest, Zadok the scribe, and Pedaiah of the Levites.',
      },
      after: {
        reference: 'Nehemiah 13:15',
        text: 'In those days I saw in Judah people treading winepresses on the Sabbath.',
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
  // Additional Esther verses
  {
    id: 'esther-4-16',
    reference: 'Esther 4:16',
    book: 'Esther',
    chapter: 4,
    verse: 16,
    difficulty: 'medium',
    translations: {
      ESV: 'Go, gather all the Jews to be found in Susa, and hold a fast on my behalf, and do not eat or drink for three days, night or day. I and my young women will also fast as you do. Then I will go to the king, though it is against the law, and if I perish, I perish.',
      NIV: 'Go, gather together all the Jews who are in Susa, and fast for me. Do not eat or drink for three days, night or day. I and my attendants will fast as you do. When this is done, I will go to the king, even though it is against the law. And if I perish, I perish.',
      KJV: 'Go, gather together all the Jews that are present in Shushan, and fast ye for me, and neither eat nor drink three days, night or day: I also and my maidens will fast likewise; and so will I go in unto the king, which is not according to the law: and if I perish, I perish.',
      NASB: 'Go, assemble all the Jews who are found in Susa, and fast for me; do not eat or drink for three days, night or day. I and my maidens also will fast in the same way. And thus I will go in to the king, which is not according to the law; and if I perish, I perish.',
    },
    context: {
      before: {
        reference: 'Esther 4:15',
        text: 'Then Esther told them to reply to Mordecai.',
      },
      after: {
        reference: 'Esther 4:17',
        text: 'So Mordecai went away and did everything as Esther had ordered him.',
      },
    },
  },
  {
    id: 'esther-6-1',
    reference: 'Esther 6:1',
    book: 'Esther',
    chapter: 6,
    verse: 1,
    difficulty: 'medium',
    translations: {
      ESV: 'On that night the king could not sleep. And he gave orders to bring the book of memorable deeds, the chronicles, and they were read before the king.',
      NIV: 'That night the king could not sleep; so he ordered the book of the chronicles, the record of his reign, to be brought in and read to him.',
      KJV: 'On that night could not the king sleep, and he commanded to bring the book of records of the chronicles; and they were read before the king.',
      NASB: 'During that night the king could not sleep so he gave an order to bring the book of records, the chronicles, and they were read before the king.',
    },
    context: {
      before: {
        reference: 'Esther 5:14',
        text: 'Then his wife Zeresh and all his friends said to him, "Let a gallows fifty cubits high be made."',
      },
      after: {
        reference: 'Esther 6:2',
        text: 'And it was found written how Mordecai had told about Bigthana and Teresh, two of the king\'s eunuchs.',
      },
    },
  },
  {
    id: 'esther-9-22',
    reference: 'Esther 9:22',
    book: 'Esther',
    chapter: 9,
    verse: 22,
    difficulty: 'medium',
    translations: {
      ESV: 'As the days on which the Jews got relief from their enemies, and as the month that had been turned for them from sorrow into gladness and from mourning into a holiday.',
      NIV: 'As the time when the Jews got relief from their enemies, and as the month when their sorrow was turned into joy and their mourning into a day of celebration.',
      KJV: 'As the days wherein the Jews rested from their enemies, and the month which was turned unto them from sorrow to joy, and from mourning into a good day.',
      NASB: 'Because on those days the Jews rid themselves of their enemies, and it was a month which was turned for them from sorrow into gladness and from mourning into a holiday.',
    },
    context: {
      before: {
        reference: 'Esther 9:21',
        text: 'Obliging them to keep the fourteenth day of the month Adar and also the fifteenth day of the same, year by year.',
      },
      after: {
        reference: 'Esther 9:23',
        text: 'And the Jews accepted what they had begun to do, and what Mordecai had written to them.',
      },
    },
  },
  {
    id: 'esther-10-3',
    reference: 'Esther 10:3',
    book: 'Esther',
    chapter: 10,
    verse: 3,
    difficulty: 'medium',
    translations: {
      ESV: 'For Mordecai the Jew was second in rank to King Ahasuerus, and he was great among the Jews and popular with the multitude of his brothers, for he sought the welfare of his people and spoke peace to all his people.',
      NIV: 'Mordecai the Jew was second in rank to King Xerxes, preeminent among the Jews, and held in high esteem by his many fellow Jews, because he worked for the good of his people and spoke up for the welfare of all the Jews.',
      KJV: 'For Mordecai the Jew was next unto king Ahasuerus, and great among the Jews, and accepted of the multitude of his brethren, seeking the wealth of his people, and speaking peace to all his seed.',
      NASB: 'For Mordecai the Jew was second only to King Ahasuerus, and great among the Jews and in favor with his many kinsmen, one who sought the good of his people and one who spoke for the welfare of his whole nation.',
    },
    context: {
      before: {
        reference: 'Esther 10:2',
        text: 'And all the acts of his power and might, and the full account of the high honor of Mordecai, to which the king advanced him.',
      },
    },
  },
  {
    id: 'esther-2-17',
    reference: 'Esther 2:17',
    book: 'Esther',
    chapter: 2,
    verse: 17,
    difficulty: 'easy',
    translations: {
      ESV: 'The king loved Esther more than all the women, and she won grace and favor in his sight more than all the virgins, so that he set the royal crown on her head and made her queen instead of Vashti.',
      NIV: 'Now the king was attracted to Esther more than to any of the other women, and she won his favor and approval more than any of the other virgins. So he set a royal crown on her head and made her queen instead of Vashti.',
      KJV: 'And the king loved Esther above all the women, and she obtained grace and favour in his sight more than all the virgins; so that he set the royal crown upon her head, and made her queen instead of Vashti.',
      NASB: 'The king loved Esther more than all the women, and she found favor and kindness with him more than all the virgins, so that he set the royal crown on her head and made her queen instead of Vashti.',
    },
    context: {
      before: {
        reference: 'Esther 2:16',
        text: 'And when Esther was taken to King Ahasuerus, into his royal palace, in the tenth month, which is the month of Tebeth, in the seventh year of his reign.',
      },
      after: {
        reference: 'Esther 2:18',
        text: 'Then the king gave a great feast for all his officials and servants; it was Esther\'s feast.',
      },
    },
  },
  {
    id: 'esther-5-2',
    reference: 'Esther 5:2',
    book: 'Esther',
    chapter: 5,
    verse: 2,
    difficulty: 'easy',
    translations: {
      ESV: 'And when the king saw Queen Esther standing in the court, she won favor in his sight, and he held out to Esther the golden scepter that was in his hand. Then Esther approached and touched the tip of the scepter.',
      NIV: 'When he saw Queen Esther standing in the court, he was pleased with her and held out to her the gold scepter that was in his hand. So Esther approached and touched the tip of the scepter.',
      KJV: 'And it was so, when the king saw Esther the queen standing in the court, that she obtained favour in his sight: and the king held out to Esther the golden sceptre that was in his hand. So Esther drew near, and touched the top of the sceptre.',
      NASB: 'When the king saw Esther the queen standing in the court, she obtained favor in his sight; and the king extended to Esther the golden scepter which was in his hand. So Esther came near and touched the top of the scepter.',
    },
    context: {
      before: {
        reference: 'Esther 5:1',
        text: 'On the third day Esther put on her royal robes and stood in the inner court of the king\'s palace, in front of the king\'s quarters.',
      },
      after: {
        reference: 'Esther 5:3',
        text: 'And the king said to her, "What is it, Queen Esther? What is your request? It shall be given you, even to the half of my kingdom."',
      },
    },
  },
  {
    id: 'esther-6-10',
    reference: 'Esther 6:10',
    book: 'Esther',
    chapter: 6,
    verse: 10,
    difficulty: 'medium',
    translations: {
      ESV: 'Then the king said to Haman, "Hurry; take the robes and the horse, as you have said, and do so to Mordecai the Jew who sits at the king\'s gate. Leave out nothing that you have mentioned."',
      NIV: '"Go at once," the king commanded Haman. "Get the robe and the horse and do just as you have suggested for Mordecai the Jew, who sits at the king\'s gate. Do not neglect anything you have recommended."',
      KJV: 'Then the king said to Haman, Make haste, and take the apparel and the horse, as thou hast said, and do even so to Mordecai the Jew, that sitteth at the king\'s gate: let nothing fail of all that thou hast spoken.',
      NASB: 'Then the king said to Haman, "Take quickly the robes and the horse as you have said, and do so for Mordecai the Jew, who is sitting at the king\'s gate; do not fall short in anything of all that you have said."',
    },
    context: {
      before: {
        reference: 'Esther 6:9',
        text: 'And let the robes and the horse be handed over to one of the king\'s most noble officials. Let them dress the man whom the king delights to honor.',
      },
      after: {
        reference: 'Esther 6:11',
        text: 'So Haman took the robes and the horse, and he dressed Mordecai and led him through the square of the city, proclaiming before him, "Thus shall it be done to the man whom the king delights to honor."',
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

  {
    id: 'job-13-15',
    reference: 'Job 13:15',
    book: 'Job',
    chapter: 13,
    verse: 15,
    difficulty: 'medium',
    translations: {
      ESV: 'Though he slay me, I will hope in him; yet I will argue my ways to his face.',
      NIV: 'Though he slay me, yet will I hope in him; I will surely defend my ways to his face.',
      KJV: 'Though he slay me, yet will I trust in him: but I will maintain mine own ways before him.',
      NASB: 'Though He slay me, I will hope in Him. Nevertheless I will argue my ways before Him.',
    },
    context: {
      before: {
        reference: 'Job 13:14',
        text: 'Why should I take my flesh in my teeth and put my life in my hand?',
      },
      after: {
        reference: 'Job 13:16',
        text: 'This will be my salvation, that a godless man shall not come before him.',
      },
    },
  },
  {
    id: 'job-23-10',
    reference: 'Job 23:10',
    book: 'Job',
    chapter: 23,
    verse: 10,
    difficulty: 'easy',
    translations: {
      ESV: 'But he knows the way that I take; when he has tried me, I shall come out as gold.',
      NIV: 'But he knows the way that I take; when he has tested me, I will come forth as gold.',
      KJV: 'But he knoweth the way that I take: when he hath tried me, I shall come forth as gold.',
      NASB: 'But He knows the way I take; when He has tried me, I shall come forth as gold.',
    },
    context: {
      before: {
        reference: 'Job 23:9',
        text: 'on the left hand when he is working, I do not behold him; he turns to the right hand, but I do not see him.',
      },
      after: {
        reference: 'Job 23:11',
        text: 'My foot has held fast to his steps; I have kept his way and have not turned aside.',
      },
    },
  },
  {
    id: 'job-28-28',
    reference: 'Job 28:28',
    book: 'Job',
    chapter: 28,
    verse: 28,
    difficulty: 'medium',
    translations: {
      ESV: 'And he said to man, "Behold, the fear of the Lord, that is wisdom, and to turn away from evil is understanding."',
      NIV: 'And he said to the human race, "The fear of the Lord—that is wisdom, and to shun evil is understanding."',
      KJV: 'And unto man he said, Behold, the fear of the Lord, that is wisdom; and to depart from evil is understanding.',
      NASB: 'And to man He said, "Behold, the fear of the Lord, that is wisdom; and to depart from evil is understanding."',
    },
    context: {
      before: {
        reference: 'Job 28:27',
        text: 'then he saw it and declared it; he established it, and searched it out.',
      },
      after: {
        reference: 'Job 29:1',
        text: 'And Job again took up his discourse, and said:',
      },
    },
  },
  {
    id: 'job-37-5',
    reference: 'Job 37:5',
    book: 'Job',
    chapter: 37,
    verse: 5,
    difficulty: 'easy',
    translations: {
      ESV: 'God thunders wondrously with his voice; he does great things that we cannot comprehend.',
      NIV: 'God\'s voice thunders in marvelous ways; he does great things beyond our understanding.',
      KJV: 'God thundereth marvellously with his voice; great things doeth he, which we cannot comprehend.',
      NASB: 'God thunders with His voice wondrously, doing great things which we cannot comprehend.',
    },
    context: {
      before: {
        reference: 'Job 37:4',
        text: 'After it his voice roars; he thunders with his majestic voice, and he does not restrain the lightnings when his voice is heard.',
      },
      after: {
        reference: 'Job 37:6',
        text: 'For to the snow he says, "Fall on the earth," likewise to the downpour, his mighty downpour.',
      },
    },
  },
  {
    id: 'job-1-22',
    reference: 'Job 1:22',
    book: 'Job',
    chapter: 1,
    verse: 22,
    difficulty: 'easy',
    translations: {
      ESV: 'In all this Job did not sin or charge God with wrong.',
      NIV: 'In all this, Job did not sin by charging God with wrongdoing.',
      KJV: 'In all this Job sinned not, nor charged God foolishly.',
      NASB: 'Through all this Job did not sin nor did he blame God.',
    },
    context: {
      before: {
        reference: 'Job 1:21',
        text: 'And he said, "Naked I came from my mother\'s womb, and naked shall I return. The LORD gave, and the LORD has taken away; blessed be the name of the LORD."',
      },
      after: {
        reference: 'Job 2:1',
        text: 'Again there was a day when the sons of God came to present themselves before the LORD, and Satan also came among them to present himself before the LORD.',
      },
    },
  },
  {
    id: 'job-2-10',
    reference: 'Job 2:10',
    book: 'Job',
    chapter: 2,
    verse: 10,
    difficulty: 'medium',
    translations: {
      ESV: 'But he said to her, "You speak as one of the foolish women would speak. Shall we receive good from God, and shall we not receive evil?" In all this Job did not sin with his lips.',
      NIV: 'He replied, "You are talking like a foolish woman. Shall we accept good from God, and not trouble?" In all this, Job did not sin in what he said.',
      KJV: 'But he said unto her, Thou speakest as one of the foolish women speaketh. What? shall we receive good at the hand of God, and shall we not receive evil? In all this did not Job sin with his lips.',
      NASB: 'But he said to her, "You speak as one of the foolish women speaks. Shall we actually accept good from God but not accept adversity?" In all this Job did not sin with his lips.',
    },
    context: {
      before: {
        reference: 'Job 2:9',
        text: 'Then his wife said to him, "Do you still hold fast your integrity? Curse God and die."',
      },
      after: {
        reference: 'Job 2:11',
        text: 'Now when Job\'s three friends heard of all this evil that had come upon him, they came each from his own place.',
      },
    },
  },
  {
    id: 'job-40-4',
    reference: 'Job 40:4',
    book: 'Job',
    chapter: 40,
    verse: 4,
    difficulty: 'medium',
    translations: {
      ESV: 'Behold, I am of small account; what shall I answer you? I lay my hand on my mouth.',
      NIV: 'I am unworthy—how can I reply to you? I put my hand over my mouth.',
      KJV: 'Behold, I am vile; what shall I answer thee? I will lay mine hand upon my mouth.',
      NASB: 'Behold, I am insignificant; what can I reply to You? I lay my hand on my mouth.',
    },
    context: {
      before: {
        reference: 'Job 40:3',
        text: 'Then Job answered the LORD and said:',
      },
      after: {
        reference: 'Job 40:5',
        text: 'I have spoken once, and I will not answer; twice, but I will proceed no further.',
      },
    },
  },
  {
    id: 'job-42-2',
    reference: 'Job 42:2',
    book: 'Job',
    chapter: 42,
    verse: 2,
    difficulty: 'easy',
    translations: {
      ESV: 'I know that you can do all things, and that no purpose of yours can be thwarted.',
      NIV: 'I know that you can do all things; no purpose of yours can be thwarted.',
      KJV: 'I know that thou canst do every thing, and that no thought can be withholden from thee.',
      NASB: 'I know that You can do all things, and that no purpose of Yours can be thwarted.',
    },
    context: {
      before: {
        reference: 'Job 42:1',
        text: 'Then Job answered the LORD and said:',
      },
      after: {
        reference: 'Job 42:3',
        text: '"Who is this that hides counsel without knowledge?" Therefore I have uttered what I did not understand, things too wonderful for me, which I did not know.',
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
  {
    id: 'ecclesiastes-7-2',
    reference: 'Ecclesiastes 7:2',
    book: 'Ecclesiastes',
    chapter: 7,
    verse: 2,
    difficulty: 'medium',
    translations: {
      ESV: 'It is better to go to the house of mourning than to go to the house of feasting, for this is the end of all mankind, and the living will lay it to heart.',
      NIV: 'It is better to go to a house of mourning than to go to a house of feasting, for death is the destiny of everyone; the living should take this to heart.',
      KJV: 'It is better to go to the house of mourning, than to go to the house of feasting: for that is the end of all men; and the living will lay it to his heart.',
      NASB: 'It is better to go to a house of mourning than to go to a house of feasting, because that is the end of every man, and the living takes it to heart.',
    },
    context: {
      before: {
        reference: 'Ecclesiastes 7:1',
        text: 'A good name is better than precious ointment, and the day of death than the day of birth.',
      },
      after: {
        reference: 'Ecclesiastes 7:3',
        text: 'Sorrow is better than laughter, for by sadness of face the heart is made glad.',
      },
    },
  },
  {
    id: 'ecclesiastes-5-10',
    reference: 'Ecclesiastes 5:10',
    book: 'Ecclesiastes',
    chapter: 5,
    verse: 10,
    difficulty: 'easy',
    translations: {
      ESV: 'He who loves money will not be satisfied with money, nor he who loves wealth with his income; this also is vanity.',
      NIV: 'Whoever loves money never has enough; whoever loves wealth is never satisfied with their income. This too is meaningless.',
      KJV: 'He that loveth silver shall not be satisfied with silver; nor he that loveth abundance with increase: this is also vanity.',
      NASB: 'He who loves money will not be satisfied with money, nor he who loves abundance with its income. This too is vanity.',
    },
    context: {
      before: {
        reference: 'Ecclesiastes 5:9',
        text: 'Moreover, the profit of the earth is for all; the king himself is served by the field.',
      },
      after: {
        reference: 'Ecclesiastes 5:11',
        text: 'When goods increase, they increase who eat them, and what advantage has their owner but to see them with his eyes?',
      },
    },
  },
  {
    id: 'ecclesiastes-9-10',
    reference: 'Ecclesiastes 9:10',
    book: 'Ecclesiastes',
    chapter: 9,
    verse: 10,
    difficulty: 'medium',
    translations: {
      ESV: 'Whatever your hand finds to do, do it with your might, for there is no work or thought or knowledge or wisdom in Sheol, to which you are going.',
      NIV: 'Whatever your hand finds to do, do it with all your might, for in the realm of the dead, where you are going, there is neither working nor planning nor knowledge nor wisdom.',
      KJV: 'Whatsoever thy hand findeth to do, do it with thy might; for there is no work, nor device, nor knowledge, nor wisdom, in the grave, whither thou goest.',
      NASB: 'Whatever your hand finds to do, do it with all your might; for there is no activity or planning or knowledge or wisdom in Sheol where you are going.',
    },
    context: {
      before: {
        reference: 'Ecclesiastes 9:9',
        text: 'Enjoy life with the wife whom you love, all the days of your vain life that he has given you under the sun, because that is your portion in life and in your toil at which you toil under the sun.',
      },
      after: {
        reference: 'Ecclesiastes 9:11',
        text: 'Again I saw that under the sun the race is not to the swift, nor the battle to the strong, nor bread to the wise, nor riches to the intelligent, nor favor to those with knowledge, but time and chance happen to them all.',
      },
    },
  },
  {
    id: 'ecclesiastes-11-9',
    reference: 'Ecclesiastes 11:9',
    book: 'Ecclesiastes',
    chapter: 11,
    verse: 9,
    difficulty: 'hard',
    translations: {
      ESV: 'Rejoice, O young man, in your youth, and let your heart cheer you in the days of your youth. Walk in the ways of your heart and the sight of your eyes. But know that for all these things God will bring you into judgment.',
      NIV: 'You who are young, be happy while you are young, and let your heart give you joy in the days of your youth. Follow the ways of your heart and whatever your eyes see, but know that for all these things God will bring you into judgment.',
      KJV: 'Rejoice, O young man, in thy youth; and let thy heart cheer thee in the days of thy youth, and walk in the ways of thine heart, and in the sight of thine eyes: but know thou, that for all these things God will bring thee into judgment.',
      NASB: 'Rejoice, young man, during your childhood, and let your heart be pleasant during the days of young manhood. And follow the impulses of your heart and the desires of your eyes. Yet know that God will bring you to judgment for all these things.',
    },
    context: {
      before: {
        reference: 'Ecclesiastes 11:8',
        text: 'So if a person lives many years, let him rejoice in them all; but let him remember that the days of darkness will be many. All that comes is vanity.',
      },
      after: {
        reference: 'Ecclesiastes 11:10',
        text: 'Remove vexation from your heart, and put away pain from your body, for youth and the dawn of life are vanity.',
      },
    },
  },
  {
    id: 'ecclesiastes-4-9',
    reference: 'Ecclesiastes 4:9',
    book: 'Ecclesiastes',
    chapter: 4,
    verse: 9,
    difficulty: 'easy',
    translations: {
      ESV: 'Two are better than one, because they have a good reward for their toil.',
      NIV: 'Two are better than one, because they have a good return for their labor.',
      KJV: 'Two are better than one; because they have a good reward for their labour.',
      NASB: 'Two are better than one because they have a good return for their labor.',
    },
    context: {
      before: {
        reference: 'Ecclesiastes 4:8',
        text: 'One person who has no other, either son or brother, yet there is no end to all his toil.',
      },
      after: {
        reference: 'Ecclesiastes 4:10',
        text: 'For if they fall, one will lift up his fellow. But woe to him who is alone when he falls and has not another to lift him up!',
      },
    },
  },
  {
    id: 'ecclesiastes-5-2',
    reference: 'Ecclesiastes 5:2',
    book: 'Ecclesiastes',
    chapter: 5,
    verse: 2,
    difficulty: 'medium',
    translations: {
      ESV: 'Be not rash with your mouth, nor let your heart be hasty to utter a word before God, for God is in heaven and you are on earth. Therefore let your words be few.',
      NIV: 'Do not be quick with your mouth, do not be hasty in your heart to utter anything before God. God is in heaven and you are on earth, so let your words be few.',
      KJV: 'Be not rash with thy mouth, and let not thine heart be hasty to utter any thing before God: for God is in heaven, and thou upon earth: therefore let thy words be few.',
      NASB: 'Do not be hasty in word or impulsive in thought to bring up a matter in the presence of God. For God is in heaven and you are on the earth; therefore let your words be few.',
    },
    context: {
      before: {
        reference: 'Ecclesiastes 5:1',
        text: 'Guard your steps when you go to the house of God. To draw near to listen is better than to offer the sacrifice of fools.',
      },
      after: {
        reference: 'Ecclesiastes 5:3',
        text: 'For a dream comes with much business, and a fool\'s voice with many words.',
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
  {
    id: 'song-of-solomon-1-2',
    reference: 'Song of Solomon 1:2',
    book: 'Song of Solomon',
    chapter: 1,
    verse: 2,
    difficulty: 'easy',
    translations: {
      ESV: 'Let him kiss me with the kisses of his mouth! For your love is better than wine.',
      NIV: 'Let him kiss me with the kisses of his mouth—for your love is more delightful than wine.',
      KJV: 'Let him kiss me with the kisses of his mouth: for thy love is better than wine.',
      NASB: 'May he kiss me with the kisses of his mouth! For your love is better than wine.',
    },
    context: {
      before: {
        reference: 'Song of Solomon 1:1',
        text: 'The Song of Songs, which is Solomon\'s.',
      },
      after: {
        reference: 'Song of Solomon 1:3',
        text: 'your anointing oils are fragrant; your name is oil poured out; therefore virgins love you.',
      },
    },
  },
  {
    id: 'song-of-solomon-3-4',
    reference: 'Song of Solomon 3:4',
    book: 'Song of Solomon',
    chapter: 3,
    verse: 4,
    difficulty: 'medium',
    translations: {
      ESV: 'Scarcely had I passed them when I found him whom my soul loves. I held him, and would not let him go until I had brought him into my mother\'s house, and into the chamber of her who conceived me.',
      NIV: 'Scarcely had I passed them when I found the one my heart loves. I held him and would not let him go till I had brought him to my mother\'s house, to the room of the one who conceived me.',
      KJV: 'It was but a little that I passed from them, but I found him whom my soul loveth: I held him, and would not let him go, until I had brought him into my mother\'s house, and into the chamber of her that conceived me.',
      NASB: 'Scarcely had I left them when I found him whom my soul loves; I held on to him and would not let him go until I had brought him to my mother\'s house, and into the room of her who conceived me.',
    },
    context: {
      before: {
        reference: 'Song of Solomon 3:3',
        text: 'The watchmen found me as they went about in the city. "Have you seen him whom my soul loves?"',
      },
      after: {
        reference: 'Song of Solomon 3:5',
        text: 'I adjure you, O daughters of Jerusalem, by the gazelles or the does of the field, that you not stir up or awaken love until it pleases.',
      },
    },
  },
  {
    id: 'song-of-solomon-4-7',
    reference: 'Song of Solomon 4:7',
    book: 'Song of Solomon',
    chapter: 4,
    verse: 7,
    difficulty: 'easy',
    translations: {
      ESV: 'You are altogether beautiful, my love; there is no flaw in you.',
      NIV: 'You are altogether beautiful, my darling; there is no flaw in you.',
      KJV: 'Thou art all fair, my love; there is no spot in thee.',
      NASB: 'You are altogether beautiful, my darling, and there is no blemish in you.',
    },
    context: {
      before: {
        reference: 'Song of Solomon 4:6',
        text: 'Until the day breathes and the shadows flee, I will go away to the mountain of myrrh and the hill of frankincense.',
      },
      after: {
        reference: 'Song of Solomon 4:8',
        text: 'Come with me from Lebanon, my bride; come with me from Lebanon.',
      },
    },
  },
  {
    id: 'song-of-solomon-6-3',
    reference: 'Song of Solomon 6:3',
    book: 'Song of Solomon',
    chapter: 6,
    verse: 3,
    difficulty: 'easy',
    translations: {
      ESV: 'I am my beloved\'s and my beloved is mine; he grazes among the lilies.',
      NIV: 'I am my beloved\'s and my beloved is mine; he browses among the lilies.',
      KJV: 'I am my beloved\'s, and my beloved is mine: he feedeth among the lilies.',
      NASB: 'I am my beloved\'s and my beloved is mine, he who pastures his flock among the lilies.',
    },
    context: {
      before: {
        reference: 'Song of Solomon 6:2',
        text: 'My beloved has gone down to his garden to the beds of spices, to graze in the gardens and to gather lilies.',
      },
      after: {
        reference: 'Song of Solomon 6:4',
        text: 'You are beautiful as Tirzah, my love, lovely as Jerusalem, awesome as an army with banners.',
      },
    },
  },
  {
    id: 'song-of-solomon-2-10',
    reference: 'Song of Solomon 2:10',
    book: 'Song of Solomon',
    chapter: 2,
    verse: 10,
    difficulty: 'easy',
    translations: {
      ESV: 'My beloved spoke and said to me, "Arise, my love, my beautiful one, and come away."',
      NIV: 'My beloved spoke and said to me, "Arise, my darling, my beautiful one, come with me."',
      KJV: 'My beloved spake, and said unto me, Rise up, my love, my fair one, and come away.',
      NASB: 'My beloved responded and said to me, "Arise, my darling, my beautiful one, and come along."',
    },
    context: {
      before: {
        reference: 'Song of Solomon 2:9',
        text: 'My beloved is like a gazelle or a young stag. Behold, there he stands behind our wall, gazing through the windows.',
      },
      after: {
        reference: 'Song of Solomon 2:11',
        text: 'For behold, the winter is past; the rain is over and gone.',
      },
    },
  },
  {
    id: 'song-of-solomon-5-16',
    reference: 'Song of Solomon 5:16',
    book: 'Song of Solomon',
    chapter: 5,
    verse: 16,
    difficulty: 'easy',
    translations: {
      ESV: 'His mouth is most sweet, and he is altogether desirable. This is my beloved and this is my friend, O daughters of Jerusalem.',
      NIV: 'His mouth is sweetness itself; he is altogether lovely. This is my beloved, this is my friend, daughters of Jerusalem.',
      KJV: 'His mouth is most sweet: yea, he is altogether lovely. This is my beloved, and this is my friend, O daughters of Jerusalem.',
      NASB: 'His mouth is full of sweetness. And he is wholly desirable. This is my beloved and this is my friend, O daughters of Jerusalem.',
    },
    context: {
      before: {
        reference: 'Song of Solomon 5:15',
        text: 'His legs are alabaster columns, set on bases of gold. His appearance is like Lebanon, choice as the cedars.',
      },
      after: {
        reference: 'Song of Solomon 6:1',
        text: 'Where has your beloved gone, O most beautiful among women?',
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

  {
    id: 'jeremiah-17-7',
    reference: 'Jeremiah 17:7',
    book: 'Jeremiah',
    chapter: 17,
    verse: 7,
    difficulty: 'easy',
    translations: {
      ESV: 'Blessed is the man who trusts in the LORD, whose trust is the LORD.',
      NIV: 'But blessed is the one who trusts in the LORD, whose confidence is in him.',
      KJV: 'Blessed is the man that trusteth in the LORD, and whose hope the LORD is.',
      NASB: 'Blessed is the man who trusts in the LORD and whose trust is the LORD.',
    },
    context: {
      before: {
        reference: 'Jeremiah 17:6',
        text: 'He is like a shrub in the desert, and shall not see any good come. He shall dwell in the parched places of the wilderness.',
      },
      after: {
        reference: 'Jeremiah 17:8',
        text: 'He is like a tree planted by water, that sends out its roots by the stream, and does not fear when heat comes.',
      },
    },
  },
  {
    id: 'jeremiah-29-13',
    reference: 'Jeremiah 29:13',
    book: 'Jeremiah',
    chapter: 29,
    verse: 13,
    difficulty: 'easy',
    translations: {
      ESV: 'You will seek me and find me, when you seek me with all your heart.',
      NIV: 'You will seek me and find me when you seek me with all your heart.',
      KJV: 'And ye shall seek me, and find me, when ye shall search for me with all your heart.',
      NASB: 'You will seek Me and find Me when you search for Me with all your heart.',
    },
    context: {
      before: {
        reference: 'Jeremiah 29:12',
        text: 'Then you will call upon me and come and pray to me, and I will hear you.',
      },
      after: {
        reference: 'Jeremiah 29:14',
        text: 'I will be found by you, declares the LORD, and I will restore your fortunes and gather you from all the nations.',
      },
    },
  },
  {
    id: 'jeremiah-10-23',
    reference: 'Jeremiah 10:23',
    book: 'Jeremiah',
    chapter: 10,
    verse: 23,
    difficulty: 'medium',
    translations: {
      ESV: 'I know, O LORD, that the way of man is not in himself, that it is not in man who walks to direct his steps.',
      NIV: 'LORD, I know that people\'s lives are not their own; it is not for them to direct their steps.',
      KJV: 'O LORD, I know that the way of man is not in himself: it is not in man that walketh to direct his steps.',
      NASB: 'I know, O LORD, that a man\'s way is not in himself, nor is it in a man who walks to direct his steps.',
    },
    context: {
      before: {
        reference: 'Jeremiah 10:22',
        text: 'Behold, a rumor! It comes—a great commotion out of the north country to make the cities of Judah a desolation.',
      },
      after: {
        reference: 'Jeremiah 10:24',
        text: 'Correct me, O LORD, but in justice; not in your anger, lest you bring me to nothing.',
      },
    },
  },
  {
    id: 'jeremiah-32-27',
    reference: 'Jeremiah 32:27',
    book: 'Jeremiah',
    chapter: 32,
    verse: 27,
    difficulty: 'easy',
    translations: {
      ESV: 'Behold, I am the LORD, the God of all flesh. Is anything too hard for me?',
      NIV: '"I am the LORD, the God of all mankind. Is anything too hard for me?',
      KJV: 'Behold, I am the LORD, the God of all flesh: is there any thing too hard for me?',
      NASB: 'Behold, I am the LORD, the God of all flesh; is anything too difficult for Me?',
    },
    context: {
      before: {
        reference: 'Jeremiah 32:26',
        text: 'The word of the LORD came to Jeremiah:',
      },
      after: {
        reference: 'Jeremiah 32:28',
        text: 'Therefore, thus says the LORD: Behold, I am giving this city into the hands of the Chaldeans.',
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
  {
    id: 'lamentations-3-26',
    reference: 'Lamentations 3:26',
    book: 'Lamentations',
    chapter: 3,
    verse: 26,
    difficulty: 'easy',
    translations: {
      ESV: 'It is good that one should wait quietly for the salvation of the LORD.',
      NIV: 'it is good to wait quietly for the salvation of the LORD.',
      KJV: 'It is good that a man should both hope and quietly wait for the salvation of the LORD.',
      NASB: 'It is good that he waits silently for the salvation of the LORD.',
    },
    context: {
      before: {
        reference: 'Lamentations 3:25',
        text: 'The LORD is good to those who wait for him, to the soul who seeks him.',
      },
      after: {
        reference: 'Lamentations 3:27',
        text: 'It is good for a man that he bear the yoke in his youth.',
      },
    },
  },
  {
    id: 'lamentations-3-31-32',
    reference: 'Lamentations 3:31-32',
    book: 'Lamentations',
    chapter: 3,
    verse: 31,
    difficulty: 'medium',
    translations: {
      ESV: 'For the Lord will not cast off forever, but, though he cause grief, he will have compassion according to the abundance of his steadfast love;',
      NIV: 'For no one is cast off by the Lord forever. Though he brings grief, he will show compassion, so great is his unfailing love.',
      KJV: 'For the Lord will not cast off for ever: But though he cause grief, yet will he have compassion according to the multitude of his mercies.',
      NASB: 'For the Lord will not reject forever, for if He causes grief, then He will have compassion according to His abundant lovingkindness.',
    },
    context: {
      before: {
        reference: 'Lamentations 3:30',
        text: 'let him give his cheek to the one who strikes, and let him be filled with insults.',
      },
      after: {
        reference: 'Lamentations 3:33',
        text: 'for he does not afflict from his heart or grieve the children of men.',
      },
    },
  },
  {
    id: 'lamentations-5-21',
    reference: 'Lamentations 5:21',
    book: 'Lamentations',
    chapter: 5,
    verse: 21,
    difficulty: 'easy',
    translations: {
      ESV: 'Restore us to yourself, O LORD, that we may be restored! Renew our days as of old—',
      NIV: 'Restore us to yourself, LORD, that we may return; renew our days as of old',
      KJV: 'Turn thou us unto thee, O LORD, and we shall be turned; renew our days as of old.',
      NASB: 'Restore us to You, O LORD, that we may be restored; renew our days as of old,',
    },
    context: {
      before: {
        reference: 'Lamentations 5:20',
        text: 'Why do you forget us forever, why do you forsake us for so many days?',
      },
      after: {
        reference: 'Lamentations 5:22',
        text: 'unless you have utterly rejected us, and you remain exceedingly angry with us.',
      },
    },
  },
  {
    id: 'lamentations-3-40',
    reference: 'Lamentations 3:40',
    book: 'Lamentations',
    chapter: 3,
    verse: 40,
    difficulty: 'easy',
    translations: {
      ESV: 'Let us test and examine our ways, and return to the LORD!',
      NIV: 'Let us examine our ways and test them, and let us return to the LORD.',
      KJV: 'Let us search and try our ways, and turn again to the LORD.',
      NASB: 'Let us examine and probe our ways, and let us return to the LORD.',
    },
    context: {
      before: {
        reference: 'Lamentations 3:39',
        text: 'Why should a living man complain, a man, about the punishment of his sins?',
      },
      after: {
        reference: 'Lamentations 3:41',
        text: 'Let us lift up our hearts and hands to God in heaven:',
      },
    },
  },
  {
    id: 'lamentations-3-32-33',
    reference: 'Lamentations 3:32-33',
    book: 'Lamentations',
    chapter: 3,
    verse: 32,
    difficulty: 'medium',
    translations: {
      ESV: 'But, though he cause grief, he will have compassion according to the abundance of his steadfast love; for he does not afflict from his heart or grieve the children of men.',
      NIV: 'Though he brings grief, he will show compassion, so great is his unfailing love. For he does not willingly bring affliction or grief to anyone.',
      KJV: 'But though he cause grief, yet will he have compassion according to the multitude of his mercies. For he doth not afflict willingly nor grieve the children of men.',
      NASB: 'For if He causes grief, then He will have compassion according to His abundant lovingkindness. For He does not afflict willingly or grieve the sons of men.',
    },
    context: {
      before: {
        reference: 'Lamentations 3:31',
        text: 'For the Lord will not cast off forever.',
      },
      after: {
        reference: 'Lamentations 3:34',
        text: 'To crush underfoot all the prisoners of the earth.',
      },
    },
  },
  {
    id: 'lamentations-3-22-23',
    reference: 'Lamentations 3:22-23',
    book: 'Lamentations',
    chapter: 3,
    verse: 22,
    difficulty: 'medium',
    translations: {
      ESV: 'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
      NIV: 'Because of the LORD\'s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.',
      KJV: 'It is of the LORD\'s mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.',
      NASB: 'The LORD\'s lovingkindnesses indeed never cease, for His compassions never fail. They are new every morning; great is Your faithfulness.',
    },
    context: {
      before: {
        reference: 'Lamentations 3:21',
        text: 'But this I call to mind, and therefore I have hope.',
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
  {
    id: 'ezekiel-18-32',
    reference: 'Ezekiel 18:32',
    book: 'Ezekiel',
    chapter: 18,
    verse: 32,
    difficulty: 'easy',
    translations: {
      ESV: 'For I have no pleasure in the death of anyone, declares the Lord GOD; so turn, and live.',
      NIV: 'For I take no pleasure in the death of anyone, declares the Sovereign LORD. Repent and live!',
      KJV: 'For I have no pleasure in the death of him that dieth, saith the Lord GOD: wherefore turn yourselves, and live ye.',
      NASB: 'For I have no pleasure in the death of anyone who dies," declares the Lord GOD. "Therefore, repent and live."',
    },
    context: {
      before: {
        reference: 'Ezekiel 18:31',
        text: 'Cast away from you all the transgressions that you have committed, and make yourselves a new heart and a new spirit!',
      },
      after: {
        reference: 'Ezekiel 19:1',
        text: 'And you, take up a lamentation for the princes of Israel.',
      },
    },
  },
  {
    id: 'ezekiel-37-3',
    reference: 'Ezekiel 37:3',
    book: 'Ezekiel',
    chapter: 37,
    verse: 3,
    difficulty: 'easy',
    translations: {
      ESV: 'And he said to me, "Son of man, can these bones live?" And I answered, "O Lord GOD, you know."',
      NIV: 'He asked me, "Son of man, can these bones live?" I said, "Sovereign LORD, you alone know."',
      KJV: 'And he said unto me, Son of man, can these bones live? And I answered, O Lord GOD, thou knowest.',
      NASB: 'He said to me, "Son of man, can these bones live?" And I answered, "O Lord GOD, You know."',
    },
    context: {
      before: {
        reference: 'Ezekiel 37:2',
        text: 'And he led me around among them, and behold, there were very many on the surface of the valley, and behold, they were very dry.',
      },
      after: {
        reference: 'Ezekiel 37:4',
        text: 'Then he said to me, "Prophesy over these bones, and say to them, O dry bones, hear the word of the LORD."',
      },
    },
  },
  {
    id: 'ezekiel-34-23',
    reference: 'Ezekiel 34:23',
    book: 'Ezekiel',
    chapter: 34,
    verse: 23,
    difficulty: 'medium',
    translations: {
      ESV: 'And I will set up over them one shepherd, my servant David, and he shall feed them: he shall feed them and be their shepherd.',
      NIV: 'I will place over them one shepherd, my servant David, and he will tend them; he will tend them and be their shepherd.',
      KJV: 'And I will set up one shepherd over them, and he shall feed them, even my servant David; he shall feed them, and he shall be their shepherd.',
      NASB: 'Then I will set over them one shepherd, My servant David, and he will feed them; he will feed them himself and be their shepherd.',
    },
    context: {
      before: {
        reference: 'Ezekiel 34:22',
        text: 'I will rescue my flock; they shall no longer be a prey. And I will judge between sheep and sheep.',
      },
      after: {
        reference: 'Ezekiel 34:24',
        text: 'And I, the LORD, will be their God, and my servant David shall be prince among them. I am the LORD; I have spoken.',
      },
    },
  },
  {
    id: 'ezekiel-11-19',
    reference: 'Ezekiel 11:19',
    book: 'Ezekiel',
    chapter: 11,
    verse: 19,
    difficulty: 'medium',
    translations: {
      ESV: 'And I will give them one heart, and a new spirit I will put within them. I will remove the heart of stone from their flesh and give them a heart of flesh.',
      NIV: 'I will give them an undivided heart and put a new spirit in them; I will remove from them their heart of stone and give them a heart of flesh.',
      KJV: 'And I will give them one heart, and I will put a new spirit within you; and I will take the stony heart out of their flesh, and will give them an heart of flesh.',
      NASB: 'And I will give them one heart, and put a new spirit within them. And I will take the heart of stone out of their flesh and give them a heart of flesh.',
    },
    context: {
      before: {
        reference: 'Ezekiel 11:18',
        text: 'And when they come there, they will remove from it all its detestable things and all its abominations.',
      },
      after: {
        reference: 'Ezekiel 11:20',
        text: 'that they may walk in my statutes and keep my rules and obey them. And they shall be my people, and I will be their God.',
      },
    },
  },
  {
    id: 'ezekiel-37-3-4',
    reference: 'Ezekiel 37:3-4',
    book: 'Ezekiel',
    chapter: 37,
    verse: 3,
    difficulty: 'medium',
    translations: {
      ESV: 'And he said to me, "Son of man, can these bones live?" And I answered, "O Lord GOD, you know." Then he said to me, "Prophesy over these bones, and say to them, O dry bones, hear the word of the LORD."',
      NIV: 'He asked me, "Son of man, can these bones live?" I said, "Sovereign LORD, you alone know." Then he said to me, "Prophesy to these bones and say to them, \'Dry bones, hear the word of the LORD!\'"',
      KJV: 'And he said unto me, Son of man, can these bones live? And I answered, O Lord GOD, thou knowest. Again he said unto me, Prophesy upon these bones, and say unto them, O ye dry bones, hear the word of the LORD.',
      NASB: 'He said to me, "Son of man, can these bones live?" And I answered, "O Lord GOD, You know." Again He said to me, "Prophesy over these bones and say to them, \'O dry bones, hear the word of the LORD.\'"',
    },
    context: {
      before: {
        reference: 'Ezekiel 37:2',
        text: 'And he led me around among them, and behold, there were very many on the surface of the valley, and behold, they were very dry.',
      },
      after: {
        reference: 'Ezekiel 37:5',
        text: 'Thus says the Lord GOD to these bones: Behold, I will cause breath to enter you, and you shall live.',
      },
    },
  },
  {
    id: 'ezekiel-18-23',
    reference: 'Ezekiel 18:23',
    book: 'Ezekiel',
    chapter: 18,
    verse: 23,
    difficulty: 'medium',
    translations: {
      ESV: 'Have I any pleasure in the death of the wicked, declares the Lord GOD, and not rather that he should turn from his way and live?',
      NIV: 'Do I take any pleasure in the death of the wicked? declares the Sovereign LORD. Rather, am I not pleased when they turn from their ways and live?',
      KJV: 'Have I any pleasure at all that the wicked should die? saith the Lord GOD: and not that he should return from his ways, and live?',
      NASB: 'Do I have any pleasure in the death of the wicked, declares the Lord GOD, rather than that he should turn from his ways and live?',
    },
    context: {
      before: {
        reference: 'Ezekiel 18:22',
        text: 'None of the transgressions that he has committed shall be remembered against him; for the righteousness that he has done he shall live.',
      },
      after: {
        reference: 'Ezekiel 18:24',
        text: 'But when a righteous person turns away from his righteousness and does injustice and does the same abominations that the wicked person does, shall he live?',
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

  {
    id: 'daniel-1-8',
    reference: 'Daniel 1:8',
    book: 'Daniel',
    chapter: 1,
    verse: 8,
    difficulty: 'medium',
    translations: {
      ESV: 'But Daniel resolved that he would not defile himself with the king\'s food, or with the wine that he drank. Therefore he asked the chief of the eunuchs to allow him not to defile himself.',
      NIV: 'But Daniel resolved not to defile himself with the royal food and wine, and he asked the chief official for permission not to defile himself this way.',
      KJV: 'But Daniel purposed in his heart that he would not defile himself with the portion of the king\'s meat, nor with the wine which he drank: therefore he requested of the prince of the eunuchs that he might not defile himself.',
      NASB: 'But Daniel made up his mind that he would not defile himself with the king\'s choice food or with the wine which he drank; so he sought permission from the commander of the officials that he might not defile himself.',
    },
    context: {
      before: {
        reference: 'Daniel 1:7',
        text: 'And the chief of the eunuchs gave them names: Daniel he called Belteshazzar, Hananiah he called Shadrach, Mishael he called Meshach, and Azariah he called Abednego.',
      },
      after: {
        reference: 'Daniel 1:9',
        text: 'And God gave Daniel favor and compassion in the sight of the chief of the eunuchs.',
      },
    },
  },
  {
    id: 'daniel-6-26',
    reference: 'Daniel 6:26',
    book: 'Daniel',
    chapter: 6,
    verse: 26,
    difficulty: 'medium',
    translations: {
      ESV: 'I make a decree, that in all my royal dominion people are to tremble and fear before the God of Daniel, for he is the living God, enduring forever; his kingdom shall never be destroyed, and his dominion shall be to the end.',
      NIV: 'I issue a decree that in every part of my kingdom people must fear and reverence the God of Daniel. For he is the living God and he endures forever; his kingdom will not be destroyed, his dominion will never end.',
      KJV: 'I make a decree, That in every dominion of my kingdom men tremble and fear before the God of Daniel: for he is the living God, and stedfast for ever, and his kingdom that which shall not be destroyed, and his dominion shall be even unto the end.',
      NASB: 'I make a decree that in all the dominion of my kingdom men are to fear and tremble before the God of Daniel; for He is the living God and enduring forever, and His kingdom is one which will not be destroyed, and His dominion will be forever.',
    },
    context: {
      before: {
        reference: 'Daniel 6:25',
        text: 'Then King Darius wrote to all the peoples, nations, and languages that dwell in all the earth: "Peace be multiplied to you."',
      },
      after: {
        reference: 'Daniel 6:27',
        text: 'He delivers and rescues; he works signs and wonders in heaven and on earth, he who has saved Daniel from the power of the lions.',
      },
    },
  },
  {
    id: 'daniel-9-9',
    reference: 'Daniel 9:9',
    book: 'Daniel',
    chapter: 9,
    verse: 9,
    difficulty: 'easy',
    translations: {
      ESV: 'To the Lord our God belong mercy and forgiveness, for we have rebelled against him.',
      NIV: 'The Lord our God is merciful and forgiving, even though we have rebelled against him.',
      KJV: 'To the Lord our God belong mercies and forgivenesses, though we have rebelled against him.',
      NASB: 'To the Lord our God belong compassion and forgiveness, for we have rebelled against Him.',
    },
    context: {
      before: {
        reference: 'Daniel 9:8',
        text: 'To us, O LORD, belongs open shame, to our kings, to our princes, and to our fathers, because we have sinned against you.',
      },
      after: {
        reference: 'Daniel 9:10',
        text: 'and have not obeyed the voice of the LORD our God by walking in his laws, which he set before us by his servants the prophets.',
      },
    },
  },
  {
    id: 'daniel-12-3',
    reference: 'Daniel 12:3',
    book: 'Daniel',
    chapter: 12,
    verse: 3,
    difficulty: 'easy',
    translations: {
      ESV: 'And those who are wise shall shine like the brightness of the sky above; and those who turn many to righteousness, like the stars forever and ever.',
      NIV: 'Those who are wise will shine like the brightness of the heavens, and those who lead many to righteousness, like the stars for ever and ever.',
      KJV: 'And they that be wise shall shine as the brightness of the firmament; and they that turn many to righteousness as the stars for ever and ever.',
      NASB: 'Those who have insight will shine brightly like the brightness of the expanse of heaven, and those who lead the many to righteousness, like the stars forever and ever.',
    },
    context: {
      before: {
        reference: 'Daniel 12:2',
        text: 'And many of those who sleep in the dust of the earth shall awake, some to everlasting life, and some to shame and everlasting contempt.',
      },
      after: {
        reference: 'Daniel 12:4',
        text: 'But you, Daniel, shut up the words and seal the book, until the time of the end.',
      },
    },
  },
  {
    id: 'daniel-9-25-26',
    reference: 'Daniel 9:25-26',
    book: 'Daniel',
    chapter: 9,
    verse: 25,
    difficulty: 'hard',
    translations: {
      ESV: 'Know therefore and understand that from the going out of the word to restore and build Jerusalem to the coming of an anointed one, a prince, there shall be seven weeks. Then for sixty-two weeks it shall be built again with squares and moat, but in a troubled time. And after the sixty-two weeks, an anointed one shall be cut off and shall have nothing.',
      NIV: 'Know and understand this: From the time the word goes out to restore and rebuild Jerusalem until the Anointed One, the ruler, comes, there will be seven "sevens," and sixty-two "sevens." It will be rebuilt with streets and a trench, but in times of trouble. After the sixty-two "sevens," the Anointed One will be put to death and will have nothing.',
      KJV: 'Know therefore and understand, that from the going forth of the commandment to restore and to build Jerusalem unto the Messiah the Prince shall be seven weeks, and threescore and two weeks: the street shall be built again, and the wall, even in troublous times. And after threescore and two weeks shall Messiah be cut off, but not for himself.',
      NASB: 'So you are to know and discern that from the issuing of a decree to restore and rebuild Jerusalem until Messiah the Prince there will be seven weeks and sixty-two weeks; it will be built again, with plaza and moat, even in times of distress. Then after the sixty-two weeks the Messiah will be cut off and have nothing.',
    },
    context: {
      before: {
        reference: 'Daniel 9:24',
        text: 'Seventy weeks are decreed about your people and your holy city, to finish the transgression, to put an end to sin, and to atone for iniquity, to bring in everlasting righteousness, to seal both vision and prophet, and to anoint a most holy place.',
      },
      after: {
        reference: 'Daniel 9:27',
        text: 'And he shall make a strong covenant with many for one week, and for half of the week he shall put an end to sacrifice and offering.',
      },
    },
  },
  {
    id: 'daniel-6-22',
    reference: 'Daniel 6:22',
    book: 'Daniel',
    chapter: 6,
    verse: 22,
    difficulty: 'medium',
    translations: {
      ESV: 'My God sent his angel and shut the lions\' mouths, and they have not harmed me, because I was found blameless before him; and also before you, O king, I have done no harm.',
      NIV: 'My God sent his angel, and he shut the mouths of the lions. They have not hurt me, because I was found innocent in his sight. Nor have I ever done any wrong before you, Your Majesty.',
      KJV: 'My God hath sent his angel, and hath shut the lions\' mouths, that they have not hurt me: forasmuch as before him innocency was found in me; and also before thee, O king, have I done no hurt.',
      NASB: 'My God sent His angel and shut the lions\' mouths and they have not harmed me, inasmuch as I was found innocent before Him; and also toward you, O king, I have committed no crime.',
    },
    context: {
      before: {
        reference: 'Daniel 6:21',
        text: 'Then Daniel said to the king, "O king, live forever!"',
      },
      after: {
        reference: 'Daniel 6:23',
        text: 'Then the king was exceedingly glad, and commanded that Daniel be taken up out of the den. So Daniel was taken up out of the den, and no kind of harm was found on him, because he had trusted in his God.',
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
  {
    id: 'hosea-13-14',
    reference: 'Hosea 13:14',
    book: 'Hosea',
    chapter: 13,
    verse: 14,
    difficulty: 'medium',
    translations: {
      ESV: 'I shall ransom them from the power of Sheol; I shall redeem them from Death. O Death, where are your plagues? O Sheol, where is your sting? Compassion is hidden from my eyes.',
      NIV: 'I will deliver this people from the power of the grave; I will redeem them from death. Where, O death, are your plagues? Where, O grave, is your destruction? I will have no compassion.',
      KJV: 'I will ransom them from the power of the grave; I will redeem them from death: O death, I will be thy plagues; O grave, I will be thy destruction: repentance shall be hid from mine eyes.',
      NASB: 'Shall I ransom them from the power of Sheol? Shall I redeem them from death? O Death, where are your thorns? O Sheol, where is your sting? Compassion will be hidden from My sight.',
    },
    context: {
      before: {
        reference: 'Hosea 13:13',
        text: 'The pains of childbirth come for him, but he is an unwise son, for at the right time he does not present himself at the opening of the womb.',
      },
      after: {
        reference: 'Hosea 13:15',
        text: 'Though he may flourish among his brothers, the east wind, the wind of the LORD, shall come, rising from the wilderness.',
      },
    },
  },
  {
    id: 'hosea-3-5',
    reference: 'Hosea 3:5',
    book: 'Hosea',
    chapter: 3,
    verse: 5,
    difficulty: 'medium',
    translations: {
      ESV: 'Afterward the children of Israel shall return and seek the LORD their God, and David their king, and they shall come in fear to the LORD and to his goodness in the latter days.',
      NIV: 'Afterward the Israelites will return and seek the LORD their God and David their king. They will come trembling to the LORD and to his blessings in the last days.',
      KJV: 'Afterward shall the children of Israel return, and seek the LORD their God, and David their king; and shall fear the LORD and his goodness in the latter days.',
      NASB: 'Afterward the sons of Israel will return and seek the LORD their God and David their king; and they will come trembling to the LORD and to His goodness in the last days.',
    },
    context: {
      before: {
        reference: 'Hosea 3:4',
        text: 'For the children of Israel shall dwell many days without king or prince, without sacrifice or pillar, without ephod or household gods.',
      },
      after: {
        reference: 'Hosea 4:1',
        text: 'Hear the word of the LORD, O children of Israel, for the LORD has a controversy with the inhabitants of the land.',
      },
    },
  },
  {
    id: 'hosea-6-1',
    reference: 'Hosea 6:1',
    book: 'Hosea',
    chapter: 6,
    verse: 1,
    difficulty: 'medium',
    translations: {
      ESV: 'Come, let us return to the LORD; for he has torn us, that he may heal us; he has struck us down, and he will bind us up.',
      NIV: 'Come, let us return to the LORD. He has torn us to pieces but he will heal us; he has injured us but he will bind up our wounds.',
      KJV: 'Come, and let us return unto the LORD: for he hath torn, and he will heal us; he hath smitten, and he will bind us up.',
      NASB: 'Come, let us return to the LORD. For He has torn us, but He will heal us; He has wounded us, but He will bandage us.',
    },
    context: {
      before: {
        reference: 'Hosea 5:15',
        text: 'I will return again to my place, until they acknowledge their guilt and seek my face.',
      },
      after: {
        reference: 'Hosea 6:2',
        text: 'After two days he will revive us; on the third day he will raise us up, that we may live before him.',
      },
    },
  },
  {
    id: 'hosea-10-12',
    reference: 'Hosea 10:12',
    book: 'Hosea',
    chapter: 10,
    verse: 12,
    difficulty: 'medium',
    translations: {
      ESV: 'Sow for yourselves righteousness; reap steadfast love; break up your fallow ground, for it is the time to seek the LORD, that he may come and rain righteousness upon you.',
      NIV: 'Sow righteousness for yourselves, reap the fruit of unfailing love, and break up your unplowed ground; for it is time to seek the LORD, until he comes and showers his righteousness on you.',
      KJV: 'Sow to yourselves in righteousness, reap in mercy; break up your fallow ground: for it is time to seek the LORD, till he come and rain righteousness upon you.',
      NASB: 'Sow with a view to righteousness, reap in accordance with kindness; break up your fallow ground, for it is time to seek the LORD until He comes to rain righteousness on you.',
    },
    context: {
      before: {
        reference: 'Hosea 10:11',
        text: 'Ephraim was a trained calf that loved to thresh, and I spared her fair neck.',
      },
      after: {
        reference: 'Hosea 10:13',
        text: 'You have plowed iniquity; you have reaped injustice; you have eaten the fruit of lies.',
      },
    },
  },
  {
    id: 'hosea-2-19-20',
    reference: 'Hosea 2:19-20',
    book: 'Hosea',
    chapter: 2,
    verse: 19,
    difficulty: 'medium',
    translations: {
      ESV: 'And I will betroth you to me forever. I will betroth you to me in righteousness and in justice, in steadfast love and in mercy. I will betroth you to me in faithfulness. And you shall know the LORD.',
      NIV: 'I will betroth you to me forever; I will betroth you in righteousness and justice, in love and compassion. I will betroth you in faithfulness, and you will acknowledge the LORD.',
      KJV: 'And I will betroth thee unto me for ever; yea, I will betroth thee unto me in righteousness, and in judgment, and in lovingkindness, and in mercies. I will even betroth thee unto me in faithfulness: and thou shalt know the LORD.',
      NASB: 'I will betroth you to Me forever; yes, I will betroth you to Me in righteousness and in justice, in lovingkindness and in compassion, and I will betroth you to Me in faithfulness. Then you will know the LORD.',
    },
    context: {
      before: {
        reference: 'Hosea 2:18',
        text: 'And I will make for them a covenant on that day with the beasts of the field, the birds of the heavens, and the creeping things of the ground.',
      },
      after: {
        reference: 'Hosea 2:21',
        text: 'And in that day I will answer, declares the LORD, I will answer the heavens, and they shall answer the earth.',
      },
    },
  },
  {
    id: 'hosea-11-8',
    reference: 'Hosea 11:8',
    book: 'Hosea',
    chapter: 11,
    verse: 8,
    difficulty: 'medium',
    translations: {
      ESV: 'How can I give you up, O Ephraim? How can I hand you over, O Israel? How can I make you like Admah? How can I treat you like Zeboiim? My heart recoils within me; my compassion grows warm and tender.',
      NIV: 'How can I give you up, Ephraim? How can I hand you over, Israel? How can I treat you like Admah? How can I make you like Zeboyim? My heart is changed within me; all my compassion is aroused.',
      KJV: 'How shall I give thee up, Ephraim? how shall I deliver thee, Israel? how shall I make thee as Admah? how shall I set thee as Zeboim? mine heart is turned within me, my repentings are kindled together.',
      NASB: 'How can I give you up, O Ephraim? How can I surrender you, O Israel? How can I make you like Admah? How can I treat you like Zeboiim? My heart is turned over within Me, all My compassions are kindled.',
    },
    context: {
      before: {
        reference: 'Hosea 11:7',
        text: 'My people are bent on turning away from me, and though they call out to the Most High, he shall not raise them up at all.',
      },
      after: {
        reference: 'Hosea 11:9',
        text: 'I will not execute my burning anger; I will not again destroy Ephraim; for I am God and not a man, the Holy One in your midst, and I will not come in wrath.',
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
  {
    id: 'joel-3-16',
    reference: 'Joel 3:16',
    book: 'Joel',
    chapter: 3,
    verse: 16,
    difficulty: 'medium',
    translations: {
      ESV: 'The LORD roars from Zion, and utters his voice from Jerusalem, and the heavens and the earth quake. But the LORD is a refuge to his people, a stronghold to the people of Israel.',
      NIV: 'The LORD will roar from Zion and thunder from Jerusalem; the earth and the heavens will tremble. But the LORD will be a refuge for his people, a stronghold for the people of Israel.',
      KJV: 'The LORD also shall roar out of Zion, and utter his voice from Jerusalem; and the heavens and the earth shall shake: but the LORD will be the hope of his people, and the strength of the children of Israel.',
      NASB: 'The LORD roars from Zion and utters His voice from Jerusalem, and the heavens and the earth tremble. But the LORD is a refuge for His people and a stronghold to the sons of Israel.',
    },
    context: {
      before: {
        reference: 'Joel 3:15',
        text: 'The sun and the moon are darkened, and the stars withdraw their shining.',
      },
      after: {
        reference: 'Joel 3:17',
        text: 'So you shall know that I am the LORD your God, who dwells in Zion, my holy mountain.',
      },
    },
  },
  {
    id: 'joel-2-25',
    reference: 'Joel 2:25',
    book: 'Joel',
    chapter: 2,
    verse: 25,
    difficulty: 'medium',
    translations: {
      ESV: 'I will restore to you the years that the swarming locust has eaten, the hopper, the destroyer, and the cutter, my great army, which I sent among you.',
      NIV: 'I will repay you for the years the locusts have eaten—the great locust and the young locust, the other locusts and the locust swarm—my great army that I sent among you.',
      KJV: 'And I will restore to you the years that the locust hath eaten, the cankerworm, and the caterpiller, and the palmerworm, my great army which I sent among you.',
      NASB: 'Then I will make up to you for the years that the swarming locust has eaten, the creeping locust, the stripping locust and the gnawing locust, My great army which I sent among you.',
    },
    context: {
      before: {
        reference: 'Joel 2:24',
        text: 'The threshing floors shall be full of grain; the vats shall overflow with wine and oil.',
      },
      after: {
        reference: 'Joel 2:26',
        text: 'You shall eat in plenty and be satisfied, and praise the name of the LORD your God, who has dealt wondrously with you.',
      },
    },
  },
  {
    id: 'joel-1-14',
    reference: 'Joel 1:14',
    book: 'Joel',
    chapter: 1,
    verse: 14,
    difficulty: 'medium',
    translations: {
      ESV: 'Consecrate a fast; call a solemn assembly. Gather the elders and all the inhabitants of the land to the house of the LORD your God, and cry out to the LORD.',
      NIV: 'Declare a holy fast; call a sacred assembly. Summon the elders and all who live in the land to the house of the LORD your God, and cry out to the LORD.',
      KJV: 'Sanctify ye a fast, call a solemn assembly, gather the elders and all the inhabitants of the land into the house of the LORD your God, and cry unto the LORD.',
      NASB: 'Consecrate a fast, proclaim a solemn assembly; gather the elders and all the inhabitants of the land to the house of the LORD your God, and cry out to the LORD.',
    },
    context: {
      before: {
        reference: 'Joel 1:13',
        text: 'Put on sackcloth and lament, O priests; wail, O ministers of the altar. Go in, pass the night in sackcloth, O ministers of my God!',
      },
      after: {
        reference: 'Joel 1:15',
        text: 'Alas for the day! For the day of the LORD is near, and as destruction from the Almighty it comes.',
      },
    },
  },
  {
    id: 'joel-2-1',
    reference: 'Joel 2:1',
    book: 'Joel',
    chapter: 2,
    verse: 1,
    difficulty: 'easy',
    translations: {
      ESV: 'Blow a trumpet in Zion; sound an alarm on my holy mountain! Let all the inhabitants of the land tremble, for the day of the LORD is coming; it is near.',
      NIV: 'Blow the trumpet in Zion; sound the alarm on my holy hill. Let all who live in the land tremble, for the day of the LORD is coming. It is close at hand.',
      KJV: 'Blow ye the trumpet in Zion, and sound an alarm in my holy mountain: let all the inhabitants of the land tremble: for the day of the LORD cometh, for it is nigh at hand.',
      NASB: 'Blow a trumpet in Zion, and sound an alarm on My holy mountain! Let all the inhabitants of the land tremble, for the day of the LORD is coming; surely it is near.',
    },
    context: {
      before: {
        reference: 'Joel 1:20',
        text: 'Even the beasts of the field pant for you because the water brooks are dried up, and fire has devoured the pastures of the wilderness.',
      },
      after: {
        reference: 'Joel 2:2',
        text: 'A day of darkness and gloom, a day of clouds and thick darkness! Like blackness there is spread upon the mountains a great and powerful people.',
      },
    },
  },
  {
    id: 'joel-2-27',
    reference: 'Joel 2:27',
    book: 'Joel',
    chapter: 2,
    verse: 27,
    difficulty: 'easy',
    translations: {
      ESV: 'You shall know that I am in the midst of Israel, and that I am the LORD your God and there is none else. And my people shall never again be put to shame.',
      NIV: 'Then you will know that I am in Israel, that I am the LORD your God, and that there is no other; never again will my people be shamed.',
      KJV: 'And ye shall know that I am in the midst of Israel, and that I am the LORD your God, and none else: and my people shall never be ashamed.',
      NASB: 'Thus you will know that I am in the midst of Israel, and that I am the LORD your God, and there is no other; and My people will never be put to shame.',
    },
    context: {
      before: {
        reference: 'Joel 2:26',
        text: 'You shall eat in plenty and be satisfied, and praise the name of the LORD your God, who has dealt wondrously with you.',
      },
      after: {
        reference: 'Joel 2:28',
        text: 'And it shall come to pass afterward, that I will pour out my Spirit on all flesh; your sons and your daughters shall prophesy.',
      },
    },
  },
  {
    id: 'joel-3-14',
    reference: 'Joel 3:14',
    book: 'Joel',
    chapter: 3,
    verse: 14,
    difficulty: 'easy',
    translations: {
      ESV: 'Multitudes, multitudes, in the valley of decision! For the day of the LORD is near in the valley of decision.',
      NIV: 'Multitudes, multitudes in the valley of decision! For the day of the LORD is near in the valley of decision.',
      KJV: 'Multitudes, multitudes in the valley of decision: for the day of the LORD is near in the valley of decision.',
      NASB: 'Multitudes, multitudes in the valley of decision! For the day of the LORD is near in the valley of decision.',
    },
    context: {
      before: {
        reference: 'Joel 3:13',
        text: 'Put in the sickle, for the harvest is ripe. Go in, tread, for the winepress is full.',
      },
      after: {
        reference: 'Joel 3:15',
        text: 'The sun and the moon are darkened, and the stars withdraw their shining.',
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
  {
    id: 'amos-5-4',
    reference: 'Amos 5:4',
    book: 'Amos',
    chapter: 5,
    verse: 4,
    difficulty: 'easy',
    translations: {
      ESV: 'For thus says the LORD to the house of Israel: "Seek me and live."',
      NIV: 'This is what the LORD says to Israel: "Seek me and live."',
      KJV: 'For thus saith the LORD unto the house of Israel, Seek ye me, and ye shall live.',
      NASB: 'For thus says the LORD to the house of Israel, "Seek Me that you may live."',
    },
    context: {
      before: {
        reference: 'Amos 5:3',
        text: 'For thus says the Lord GOD: "The city that went out a thousand shall have a hundred left, and that which went out a hundred shall have ten left to the house of Israel."',
      },
      after: {
        reference: 'Amos 5:5',
        text: 'But do not seek Bethel, and do not enter into Gilgal or cross over to Beersheba.',
      },
    },
  },
  {
    id: 'amos-9-11',
    reference: 'Amos 9:11',
    book: 'Amos',
    chapter: 9,
    verse: 11,
    difficulty: 'medium',
    translations: {
      ESV: '"In that day I will raise up the booth of David that is fallen and repair its breaches, and raise up its ruins and rebuild it as in the days of old."',
      NIV: '"In that day I will restore David\'s fallen shelter—I will repair its broken walls and restore its ruins—and will rebuild it as it used to be."',
      KJV: 'In that day will I raise up the tabernacle of David that is fallen, and close up the breaches thereof; and I will raise up his ruins, and I will build it as in the days of old.',
      NASB: '"In that day I will raise up the fallen booth of David, and wall up its breaches; I will also raise up its ruins and rebuild it as in the days of old."',
    },
    context: {
      before: {
        reference: 'Amos 9:10',
        text: 'All the sinners of my people shall die by the sword, who say, "Disaster shall not overtake or meet us."',
      },
      after: {
        reference: 'Amos 9:12',
        text: 'That they may possess the remnant of Edom and all the nations who are called by my name.',
      },
    },
  },
  {
    id: 'amos-5-14',
    reference: 'Amos 5:14',
    book: 'Amos',
    chapter: 5,
    verse: 14,
    difficulty: 'easy',
    translations: {
      ESV: 'Seek good, and not evil, that you may live; and so the LORD, the God of hosts, will be with you, as you have said.',
      NIV: 'Seek good, not evil, that you may live. Then the LORD God Almighty will be with you, just as you say he is.',
      KJV: 'Seek good, and not evil, that ye may live: and so the LORD, the God of hosts, shall be with you, as ye have spoken.',
      NASB: 'Seek good and not evil, that you may live; and thus may the LORD God of hosts be with you, just as you have said!',
    },
    context: {
      before: {
        reference: 'Amos 5:13',
        text: 'Therefore he who is prudent will keep silent in such a time, for it is an evil time.',
      },
      after: {
        reference: 'Amos 5:15',
        text: 'Hate evil, and love good, and establish justice in the gate; it may be that the LORD, the God of hosts, will be gracious.',
      },
    },
  },
  {
    id: 'amos-8-11',
    reference: 'Amos 8:11',
    book: 'Amos',
    chapter: 8,
    verse: 11,
    difficulty: 'medium',
    translations: {
      ESV: '"Behold, the days are coming," declares the Lord GOD, "when I will send a famine on the land—not a famine of bread, nor a thirst for water, but of hearing the words of the LORD."',
      NIV: '"The days are coming," declares the Sovereign LORD, "when I will send a famine through the land—not a famine of food or a thirst for water, but a famine of hearing the words of the LORD."',
      KJV: 'Behold, the days come, saith the Lord GOD, that I will send a famine in the land, not a famine of bread, nor a thirst for water, but of hearing the words of the LORD.',
      NASB: '"Behold, days are coming," declares the Lord GOD, "When I will send a famine on the land, not a famine for bread or a thirst for water, but rather for hearing the words of the LORD."',
    },
    context: {
      before: {
        reference: 'Amos 8:10',
        text: 'I will turn your feasts into mourning and all your songs into lamentation; I will bring sackcloth on every waist.',
      },
      after: {
        reference: 'Amos 8:12',
        text: 'They shall wander from sea to sea, and from north to east; they shall run to and fro, to seek the word of the LORD.',
      },
    },
  },
  {
    id: 'amos-9-11',
    reference: 'Amos 9:11',
    book: 'Amos',
    chapter: 9,
    verse: 11,
    difficulty: 'medium',
    translations: {
      ESV: '"In that day I will raise up the booth of David that is fallen and repair its breaches, and raise up its ruins and rebuild it as in the days of old."',
      NIV: '"In that day I will restore David\'s fallen shelter—I will repair its broken walls and restore its ruins—and will rebuild it as it used to be."',
      KJV: 'In that day will I raise up the tabernacle of David that is fallen, and close up the breaches thereof; and I will raise up his ruins, and I will build it as in the days of old.',
      NASB: '"In that day I will raise up the fallen booth of David, and wall up its breaches; I will also raise up its ruins and rebuild it as in the days of old."',
    },
    context: {
      before: {
        reference: 'Amos 9:10',
        text: 'All the sinners of my people shall die by the sword, who say, "Disaster shall not overtake or meet us."',
      },
      after: {
        reference: 'Amos 9:12',
        text: 'That they may possess the remnant of Edom and all the nations who are called by my name.',
      },
    },
  },
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
  {
    id: 'obadiah-1-3',
    reference: 'Obadiah 3',
    book: 'Obadiah',
    chapter: 1,
    verse: 3,
    difficulty: 'medium',
    translations: {
      ESV: 'The pride of your heart has deceived you, you who live in the clefts of the rock, in your lofty dwelling, who say in your heart, "Who will bring me down to the ground?"',
      NIV: 'The pride of your heart has deceived you, you who live in the clefts of the rocks and make your home on the heights, you who say to yourself, "Who can bring me down to the ground?"',
      KJV: 'The pride of thine heart hath deceived thee, thou that dwellest in the clefts of the rock, whose habitation is high; that saith in his heart, Who shall bring me down to the ground?',
      NASB: 'The arrogance of your heart has deceived you, you who live in the clefts of the rock, in the loftiness of your dwelling place, who say in your heart, "Who will bring me down to earth?"',
    },
    context: {
      before: {
        reference: 'Obadiah 2',
        text: 'Behold, I will make you small among the nations; you shall be utterly despised.',
      },
      after: {
        reference: 'Obadiah 4',
        text: 'Though you soar aloft like the eagle, though your nest is set among the stars, from there I will bring you down, declares the LORD.',
      },
    },
  },
  {
    id: 'obadiah-1-10',
    reference: 'Obadiah 10',
    book: 'Obadiah',
    chapter: 1,
    verse: 10,
    difficulty: 'medium',
    translations: {
      ESV: 'Because of the violence done to your brother Jacob, shame shall cover you, and you shall be cut off forever.',
      NIV: 'Because of the violence against your brother Jacob, you will be covered with shame; you will be destroyed forever.',
      KJV: 'For thy violence against thy brother Jacob shame shall cover thee, and thou shalt be cut off for ever.',
      NASB: 'Because of violence to your brother Jacob, you will be covered with shame, and you will be cut off forever.',
    },
    context: {
      before: {
        reference: 'Obadiah 9',
        text: 'And your mighty men shall be dismayed, O Teman, so that every man from Mount Esau will be cut off by slaughter.',
      },
      after: {
        reference: 'Obadiah 11',
        text: 'On the day that you stood aloof, on the day that strangers carried off his wealth and foreigners entered his gates.',
      },
    },
  },
  {
    id: 'obadiah-1-12',
    reference: 'Obadiah 12',
    book: 'Obadiah',
    chapter: 1,
    verse: 12,
    difficulty: 'medium',
    translations: {
      ESV: 'But do not gloat over the day of your brother in the day of his misfortune; do not rejoice over the people of Judah in the day of their ruin; do not boast in the day of distress.',
      NIV: 'You should not gloat over your brother in the day of his misfortune, nor rejoice over the people of Judah in the day of their destruction, nor boast so much in the day of their trouble.',
      KJV: 'But thou shouldest not have looked on the day of thy brother in the day that he became a stranger; neither shouldest thou have rejoiced over the children of Judah in the day of their destruction.',
      NASB: 'Do not gloat over your brother\'s day, the day of his misfortune. And do not rejoice over the sons of Judah in the day of their destruction.',
    },
    context: {
      before: {
        reference: 'Obadiah 11',
        text: 'On the day that you stood aloof, on the day that strangers carried off his wealth and foreigners entered his gates.',
      },
      after: {
        reference: 'Obadiah 13',
        text: 'Do not enter the gate of my people in the day of their calamity; do not gloat over his disaster in the day of his calamity.',
      },
    },
  },
  {
    id: 'obadiah-1-1',
    reference: 'Obadiah 1',
    book: 'Obadiah',
    chapter: 1,
    verse: 1,
    difficulty: 'medium',
    translations: {
      ESV: 'The vision of Obadiah. Thus says the Lord GOD concerning Edom: We have heard a report from the LORD, and a messenger has been sent among the nations: "Rise up! Let us rise against her for battle!"',
      NIV: 'The vision of Obadiah. This is what the Sovereign LORD says about Edom—We have heard a message from the LORD: An envoy was sent to the nations to say, "Rise, let us go against her for battle"—',
      KJV: 'The vision of Obadiah. Thus saith the Lord GOD concerning Edom; We have heard a rumour from the LORD, and an ambassador is sent among the heathen, Arise ye, and let us rise up against her in battle.',
      NASB: 'The vision of Obadiah. Thus says the Lord GOD concerning Edom—We have heard a report from the LORD, and an envoy has been sent among the nations saying, "Arise and let us go against her for battle"—',
    },
    context: {
      after: {
        reference: 'Obadiah 2',
        text: 'Behold, I will make you small among the nations; you shall be utterly despised.',
      },
    },
  },
  {
    id: 'obadiah-1-2',
    reference: 'Obadiah 2',
    book: 'Obadiah',
    chapter: 1,
    verse: 2,
    difficulty: 'easy',
    translations: {
      ESV: 'Behold, I will make you small among the nations; you shall be utterly despised.',
      NIV: '"See, I will make you small among the nations; you will be utterly despised.',
      KJV: 'Behold, I have made thee small among the heathen: thou art greatly despised.',
      NASB: 'Behold, I will make you small among the nations; you are greatly despised.',
    },
    context: {
      before: {
        reference: 'Obadiah 1',
        text: 'The vision of Obadiah. Thus says the Lord GOD concerning Edom.',
      },
      after: {
        reference: 'Obadiah 3',
        text: 'The pride of your heart has deceived you, you who live in the clefts of the rock.',
      },
    },
  },
  {
    id: 'obadiah-1-18',
    reference: 'Obadiah 18',
    book: 'Obadiah',
    chapter: 1,
    verse: 18,
    difficulty: 'medium',
    translations: {
      ESV: 'The house of Jacob shall be a fire, and the house of Joseph a flame, and the house of Esau stubble; they shall burn them and consume them, and there shall be no survivor for the house of Esau, for the LORD has spoken.',
      NIV: 'Jacob will be a fire and Joseph a flame; Esau will be stubble, and they will set him on fire and destroy him. There will be no survivors from Esau." The LORD has spoken.',
      KJV: 'And the house of Jacob shall be a fire, and the house of Joseph a flame, and the house of Esau for stubble, and they shall kindle in them, and devour them; and there shall not be any remaining of the house of Esau; for the LORD hath spoken it.',
      NASB: 'Then the house of Jacob will be a fire and the house of Joseph a flame; but the house of Esau will be as stubble. And they will set them on fire and consume them, so that there will be no survivor of the house of Esau, for the LORD has spoken.',
    },
    context: {
      before: {
        reference: 'Obadiah 17',
        text: 'But in Mount Zion there shall be those who escape, and it shall be holy.',
      },
      after: {
        reference: 'Obadiah 19',
        text: 'Those of the Negeb shall possess Mount Esau, and those of the Shephelah shall possess the land of the Philistines.',
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
  {
    id: 'jonah-2-2',
    reference: 'Jonah 2:2',
    book: 'Jonah',
    chapter: 2,
    verse: 2,
    difficulty: 'medium',
    translations: {
      ESV: 'saying, "I called out to the LORD, out of my distress, and he answered me; out of the belly of Sheol I cried, and you heard my voice."',
      NIV: 'He said: "In my distress I called to the LORD, and he answered me. From deep in the realm of the dead I called for help, and you listened to my cry."',
      KJV: 'And said, I cried by reason of mine affliction unto the LORD, and he heard me; out of the belly of hell cried I, and thou heardest my voice.',
      NASB: 'and he said, "I called out of my distress to the LORD, and He answered me. I cried for help from the depth of Sheol; You heard my voice."',
    },
    context: {
      before: {
        reference: 'Jonah 2:1',
        text: 'Then Jonah prayed to the LORD his God from the belly of the fish.',
      },
      after: {
        reference: 'Jonah 2:3',
        text: 'For you cast me into the deep, into the heart of the seas, and the flood surrounded me.',
      },
    },
  },
  {
    id: 'jonah-4-11',
    reference: 'Jonah 4:11',
    book: 'Jonah',
    chapter: 4,
    verse: 11,
    difficulty: 'medium',
    translations: {
      ESV: 'And should not I pity Nineveh, that great city, in which there are more than 120,000 persons who do not know their right hand from their left, and also much cattle?',
      NIV: 'And should I not have concern for the great city of Nineveh, in which there are more than a hundred and twenty thousand people who cannot tell their right hand from their left—and also many animals?',
      KJV: 'And should not I spare Nineveh, that great city, wherein are more than sixscore thousand persons that cannot discern between their right hand and their left hand; and also much cattle?',
      NASB: 'Should I not have compassion on Nineveh, the great city in which there are more than 120,000 persons who do not know the difference between their right and left hand, as well as many animals?',
    },
    context: {
      before: {
        reference: 'Jonah 4:10',
        text: 'And the LORD said, "You pity the plant, for which you did not labor, nor did you make it grow."',
      },
    },
  },
  {
    id: 'jonah-1-17',
    reference: 'Jonah 1:17',
    book: 'Jonah',
    chapter: 1,
    verse: 17,
    difficulty: 'medium',
    translations: {
      ESV: 'And the LORD appointed a great fish to swallow up Jonah. And Jonah was in the belly of the fish three days and three nights.',
      NIV: 'Now the LORD provided a huge fish to swallow Jonah, and Jonah was in the belly of the fish three days and three nights.',
      KJV: 'Now the LORD had prepared a great fish to swallow up Jonah. And Jonah was in the belly of the fish three days and three nights.',
      NASB: 'And the LORD appointed a great fish to swallow Jonah, and Jonah was in the stomach of the fish three days and three nights.',
    },
    context: {
      before: {
        reference: 'Jonah 1:16',
        text: 'Then the men feared the LORD exceedingly, and they offered a sacrifice to the LORD and made vows.',
      },
      after: {
        reference: 'Jonah 2:1',
        text: 'Then Jonah prayed to the LORD his God from the belly of the fish.',
      },
    },
  },
  {
    id: 'jonah-2-6',
    reference: 'Jonah 2:6',
    book: 'Jonah',
    chapter: 2,
    verse: 6,
    difficulty: 'hard',
    translations: {
      ESV: 'I went down to the land whose bars closed upon me forever; yet you brought up my life from the pit, O LORD my God.',
      NIV: 'To the roots of the mountains I sank down; the earth beneath barred me in forever. But you, LORD my God, brought my life up from the pit.',
      KJV: 'I went down to the bottoms of the mountains; the earth with her bars was about me for ever: yet hast thou brought up my life from corruption, O LORD my God.',
      NASB: 'I descended to the roots of the mountains. The earth with its bars was around me forever, but You have brought up my life from the pit, O LORD my God.',
    },
    context: {
      before: {
        reference: 'Jonah 2:5',
        text: 'The waters closed in over me to take my life; the deep surrounded me; weeds were wrapped about my head.',
      },
      after: {
        reference: 'Jonah 2:7',
        text: 'When my life was fainting away, I remembered the LORD, and my prayer came to you, into your holy temple.',
      },
    },
  },
  {
    id: 'jonah-3-5',
    reference: 'Jonah 3:5',
    book: 'Jonah',
    chapter: 3,
    verse: 5,
    difficulty: 'medium',
    translations: {
      ESV: 'And the people of Nineveh believed God. They called for a fast and put on sackcloth, from the greatest of them to the least of them.',
      NIV: 'The Ninevites believed God. A fast was proclaimed, and all of them, from the greatest to the least, put on sackcloth.',
      KJV: 'So the people of Nineveh believed God, and proclaimed a fast, and put on sackcloth, from the greatest of them even to the least of them.',
      NASB: 'Then the people of Nineveh believed in God; and they called a fast and put on sackcloth from the greatest to the least of them.',
    },
    context: {
      before: {
        reference: 'Jonah 3:4',
        text: 'Jonah began to go into the city, going a day\'s journey. And he called out, "Yet forty days, and Nineveh shall be overthrown!"',
      },
      after: {
        reference: 'Jonah 3:6',
        text: 'The word reached the king of Nineveh, and he arose from his throne, removed his robe, covered himself with sackcloth, and sat in ashes.',
      },
    },
  },
  {
    id: 'jonah-4-4',
    reference: 'Jonah 4:4',
    book: 'Jonah',
    chapter: 4,
    verse: 4,
    difficulty: 'easy',
    translations: {
      ESV: 'And the LORD said, "Do you do well to be angry?"',
      NIV: 'But the LORD replied, "Is it right for you to be angry?"',
      KJV: 'Then said the LORD, Doest thou well to be angry?',
      NASB: 'The LORD said, "Do you have good reason to be angry?"',
    },
    context: {
      before: {
        reference: 'Jonah 4:3',
        text: 'Therefore now, O LORD, please take my life from me, for it is better for me to die than to live.',
      },
      after: {
        reference: 'Jonah 4:5',
        text: 'Jonah went out of the city and sat to the east of the city and made a booth for himself there.',
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
  {
    id: 'micah-4-1',
    reference: 'Micah 4:1',
    book: 'Micah',
    chapter: 4,
    verse: 1,
    difficulty: 'medium',
    translations: {
      ESV: 'It shall come to pass in the latter days that the mountain of the house of the LORD shall be established as the highest of the mountains, and it shall be lifted up above the hills; and peoples shall flow to it.',
      NIV: 'In the last days the mountain of the LORD\'s temple will be established as the highest of the mountains; it will be exalted above the hills, and peoples will stream to it.',
      KJV: 'But in the last days it shall come to pass, that the mountain of the house of the LORD shall be established in the top of the mountains, and it shall be exalted above the hills; and people shall flow unto it.',
      NASB: 'And it will come about in the last days that the mountain of the house of the LORD will be established as the chief of the mountains. It will be raised above the hills, and the peoples will stream to it.',
    },
    context: {
      before: {
        reference: 'Micah 3:12',
        text: 'Therefore because of you Zion shall be plowed as a field; Jerusalem shall become a heap of ruins, and the mountain of the house a wooded height.',
      },
      after: {
        reference: 'Micah 4:2',
        text: 'And many nations shall come, and say: "Come, let us go up to the mountain of the LORD, to the house of the God of Jacob."',
      },
    },
  },
  {
    id: 'micah-5-4',
    reference: 'Micah 5:4',
    book: 'Micah',
    chapter: 5,
    verse: 4,
    difficulty: 'medium',
    translations: {
      ESV: 'And he shall stand and shepherd his flock in the strength of the LORD, in the majesty of the name of the LORD his God. And they shall dwell secure, for now he shall be great to the ends of the earth.',
      NIV: 'He will stand and shepherd his flock in the strength of the LORD, in the majesty of the name of the LORD his God. And they will live securely, for then his greatness will reach to the ends of the earth.',
      KJV: 'And he shall stand and feed in the strength of the LORD, in the majesty of the name of the LORD his God; and they shall abide: for now shall he be great unto the ends of the earth.',
      NASB: 'And He will arise and shepherd His flock in the strength of the LORD, in the majesty of the name of the LORD His God. And they will remain, because at that time He will be great to the ends of the earth.',
    },
    context: {
      before: {
        reference: 'Micah 5:3',
        text: 'Therefore he shall give them up until the time when she who is in labor has given birth; then the rest of his brothers shall return to the people of Israel.',
      },
      after: {
        reference: 'Micah 5:5',
        text: 'And he shall be their peace. When the Assyrian comes into our land and treads in our palaces.',
      },
    },
  },
  {
    id: 'micah-4-5',
    reference: 'Micah 4:5',
    book: 'Micah',
    chapter: 4,
    verse: 5,
    difficulty: 'easy',
    translations: {
      ESV: 'For all the peoples walk each in the name of its god, but we will walk in the name of the LORD our God forever and ever.',
      NIV: 'All the nations may walk in the name of their gods, but we will walk in the name of the LORD our God for ever and ever.',
      KJV: 'For all people will walk every one in the name of his god, and we will walk in the name of the LORD our God for ever and ever.',
      NASB: 'Though all the peoples walk each in the name of his god, as for us, we will walk in the name of the LORD our God forever and ever.',
    },
    context: {
      before: {
        reference: 'Micah 4:4',
        text: 'But they shall sit every man under his vine and under his fig tree, and no one shall make them afraid.',
      },
      after: {
        reference: 'Micah 4:6',
        text: 'In that day, declares the LORD, I will assemble the lame and gather those who have been driven away.',
      },
    },
  },
  {
    id: 'micah-7-7',
    reference: 'Micah 7:7',
    book: 'Micah',
    chapter: 7,
    verse: 7,
    difficulty: 'medium',
    translations: {
      ESV: 'But as for me, I will look to the LORD; I will wait for the God of my salvation; my God will hear me.',
      NIV: 'But as for me, I watch in hope for the LORD, I wait for God my Savior; my God will hear me.',
      KJV: 'Therefore I will look unto the LORD; I will wait for the God of my salvation: my God will hear me.',
      NASB: 'But as for me, I will watch expectantly for the LORD; I will wait for the God of my salvation. My God will hear me.',
    },
    context: {
      before: {
        reference: 'Micah 7:6',
        text: 'For the son treats the father with contempt, the daughter rises up against her mother.',
      },
      after: {
        reference: 'Micah 7:8',
        text: 'Rejoice not over me, O my enemy; when I fall, I shall rise; when I sit in darkness, the LORD will be a light to me.',
      },
    },
  },
  {
    id: 'micah-5-5',
    reference: 'Micah 5:5',
    book: 'Micah',
    chapter: 5,
    verse: 5,
    difficulty: 'medium',
    translations: {
      ESV: 'And he shall be their peace. When the Assyrian comes into our land and treads in our palaces, then we will raise against him seven shepherds and eight princes of men.',
      NIV: 'And he will be our peace when the Assyrians invade our land and march through our fortresses. We will raise against them seven shepherds, even eight commanders.',
      KJV: 'And this man shall be the peace, when the Assyrian shall come into our land: and when he shall tread in our palaces, then shall we raise against him seven shepherds, and eight principal men.',
      NASB: 'This One will be our peace. When the Assyrian invades our land, when he tramples on our citadels, then we will raise against him seven shepherds and eight leaders of men.',
    },
    context: {
      before: {
        reference: 'Micah 5:4',
        text: 'And he shall stand and shepherd his flock in the strength of the LORD, in the majesty of the name of the LORD his God.',
      },
      after: {
        reference: 'Micah 5:6',
        text: 'They shall shepherd the land of Assyria with the sword, and the land of Nimrod at its entrances.',
      },
    },
  },
  {
    id: 'micah-7-8',
    reference: 'Micah 7:8',
    book: 'Micah',
    chapter: 7,
    verse: 8,
    difficulty: 'medium',
    translations: {
      ESV: 'Rejoice not over me, O my enemy; when I fall, I shall rise; when I sit in darkness, the LORD will be a light to me.',
      NIV: 'Do not gloat over me, my enemy! Though I have fallen, I will rise. Though I sit in darkness, the LORD will be my light.',
      KJV: 'Rejoice not against me, O mine enemy: when I fall, I shall arise; when I sit in darkness, the LORD shall be a light unto me.',
      NASB: 'Do not rejoice over me, O my enemy. Though I fall I will rise; though I dwell in darkness, the LORD is a light for me.',
    },
    context: {
      before: {
        reference: 'Micah 7:7',
        text: 'But as for me, I will look to the LORD; I will wait for the God of my salvation; my God will hear me.',
      },
      after: {
        reference: 'Micah 7:9',
        text: 'I will bear the indignation of the LORD because I have sinned against him, until he pleads my cause and executes judgment for me.',
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
  {
    id: 'nahum-1-9',
    reference: 'Nahum 1:9',
    book: 'Nahum',
    chapter: 1,
    verse: 9,
    difficulty: 'medium',
    translations: {
      ESV: 'What do you plot against the LORD? He will make a complete end; trouble will not rise up a second time.',
      NIV: 'Whatever they plot against the LORD he will bring to an end; trouble will not come a second time.',
      KJV: 'What do ye imagine against the LORD? he will make an utter end: affliction shall not rise up the second time.',
      NASB: 'Whatever you devise against the LORD, He will make a complete end of it. Distress will not rise up twice.',
    },
    context: {
      before: {
        reference: 'Nahum 1:8',
        text: 'But with an overflowing flood he will make a complete end of the adversaries, and will pursue his enemies into darkness.',
      },
      after: {
        reference: 'Nahum 1:10',
        text: 'For they are like entangled thorns, like drunkards as they drink; they are consumed like stubble fully dried.',
      },
    },
  },
  {
    id: 'nahum-2-2',
    reference: 'Nahum 2:2',
    book: 'Nahum',
    chapter: 2,
    verse: 2,
    difficulty: 'medium',
    translations: {
      ESV: 'For the LORD is restoring the majesty of Jacob as the majesty of Israel, for plunderers have plundered them and ruined their branches.',
      NIV: 'The LORD will restore the splendor of Jacob like the splendor of Israel, though destroyers have laid them waste and have ruined their vines.',
      KJV: 'For the LORD hath turned away the excellency of Jacob, as the excellency of Israel: for the emptiers have emptied them out, and marred their vine branches.',
      NASB: 'For the LORD will restore the splendor of Jacob like the splendor of Israel, even though devastators have devastated them and destroyed their vine branches.',
    },
    context: {
      before: {
        reference: 'Nahum 2:1',
        text: 'The scatterer has come up against you. Man the ramparts; watch the road; dress for battle; collect all your strength.',
      },
      after: {
        reference: 'Nahum 2:3',
        text: 'The shield of his mighty men is red; his soldiers are clothed in scarlet.',
      },
    },
  },
  {
    id: 'nahum-3-19',
    reference: 'Nahum 3:19',
    book: 'Nahum',
    chapter: 3,
    verse: 19,
    difficulty: 'easy',
    translations: {
      ESV: 'There is no easing your hurt; your wound is grievous. All who hear the news about you clap their hands over you. For upon whom has not come your unceasing evil?',
      NIV: 'Nothing can heal you; your wound is fatal. All who hear the news about you clap their hands at your fall, for who has not felt your endless cruelty?',
      KJV: 'There is no healing of thy bruise; thy wound is grievous: all that hear the bruit of thee shall clap the hands over thee: for upon whom hath not thy wickedness passed continually?',
      NASB: 'There is no relief for your breakdown, your wound is incurable. All who hear about you will clap their hands over you, for on whom has not your evil passed continually?',
    },
    context: {
      before: {
        reference: 'Nahum 3:18',
        text: 'Your shepherds are asleep, O king of Assyria; your nobles slumber. Your people are scattered on the mountains with none to gather them.',
      },
    },
  },
  {
    id: 'nahum-1-5',
    reference: 'Nahum 1:5',
    book: 'Nahum',
    chapter: 1,
    verse: 5,
    difficulty: 'medium',
    translations: {
      ESV: 'The mountains quake before him; the hills melt; the earth heaves before him, the world and all who dwell in it.',
      NIV: 'The mountains quake before him and the hills melt away. The earth trembles at his presence, the world and all who live in it.',
      KJV: 'The mountains quake at him, and the hills melt, and the earth is burned at his presence, yea, the world, and all that dwell therein.',
      NASB: 'Mountains quake because of Him and the hills dissolve; indeed the earth is upheaved by His presence, the world and all the inhabitants in it.',
    },
    context: {
      before: {
        reference: 'Nahum 1:4',
        text: 'He rebukes the sea and makes it dry; he dries up all the rivers; Bashan and Carmel wither; the bloom of Lebanon withers.',
      },
      after: {
        reference: 'Nahum 1:6',
        text: 'Who can stand before his indignation? Who can endure the heat of his anger?',
      },
    },
  },
  {
    id: 'nahum-1-6',
    reference: 'Nahum 1:6',
    book: 'Nahum',
    chapter: 1,
    verse: 6,
    difficulty: 'medium',
    translations: {
      ESV: 'Who can stand before his indignation? Who can endure the heat of his anger? His wrath is poured out like fire, and the rocks are broken into pieces by him.',
      NIV: 'Who can withstand his indignation? Who can endure his fierce anger? His wrath is poured out like fire; the rocks are shattered before him.',
      KJV: 'Who can stand before his indignation? and who can abide in the fierceness of his anger? his fury is poured out like fire, and the rocks are thrown down by him.',
      NASB: 'Who can stand before His indignation? Who can endure the burning of His anger? His wrath is poured out like fire and the rocks are broken up by Him.',
    },
    context: {
      before: {
        reference: 'Nahum 1:5',
        text: 'The mountains quake before him; the hills melt; the earth heaves before him.',
      },
      after: {
        reference: 'Nahum 1:7',
        text: 'The LORD is good, a stronghold in the day of trouble; he knows those who take refuge in him.',
      },
    },
  },
  {
    id: 'nahum-3-7',
    reference: 'Nahum 3:7',
    book: 'Nahum',
    chapter: 3,
    verse: 7,
    difficulty: 'medium',
    translations: {
      ESV: 'And all who look on you will shrink from you and say, "Wasted is Nineveh; who will grieve for her?" Where shall I seek comforters for you?',
      NIV: 'All who see you will flee from you and say, "Nineveh is in ruins—who will mourn for her?" Where can I find anyone to comfort you?',
      KJV: 'And it shall come to pass, that all they that look upon thee shall flee from thee, and say, Nineveh is laid waste: who will bemoan her? whence shall I seek comforters for thee?',
      NASB: 'And it will come about that all who see you will shrink from you and say, "Nineveh is devastated! Who will grieve for her?" Where will I seek comforters for you?',
    },
    context: {
      before: {
        reference: 'Nahum 3:6',
        text: 'I will throw filth at you and treat you with contempt and make you a spectacle.',
      },
      after: {
        reference: 'Nahum 3:8',
        text: 'Are you better than Thebes that sat by the Nile, with water around her?',
      },
    },
  },

  // ============ HABAKKUK ============
  {
    id: 'habakkuk-1-2',
    reference: 'Habakkuk 1:2',
    book: 'Habakkuk',
    chapter: 1,
    verse: 2,
    difficulty: 'medium',
    translations: {
      ESV: 'O LORD, how long shall I cry for help, and you will not hear? Or cry to you "Violence!" and you will not save?',
      NIV: 'How long, LORD, must I call for help, but you do not listen? Or cry out to you, "Violence!" but you do not save?',
      KJV: 'O LORD, how long shall I cry, and thou wilt not hear! even cry out unto thee of violence, and thou wilt not save!',
      NASB: 'How long, O LORD, will I call for help, and You will not hear? I cry out to You, "Violence!" Yet You do not save.',
    },
    context: {
      after: {
        reference: 'Habakkuk 1:3',
        text: 'Why do you make me see iniquity, and why do you idly look at wrong? Destruction and violence are before me; strife and contention arise.',
      },
    },
  },
  {
    id: 'habakkuk-1-13',
    reference: 'Habakkuk 1:13',
    book: 'Habakkuk',
    chapter: 1,
    verse: 13,
    difficulty: 'hard',
    translations: {
      ESV: 'You who are of purer eyes than to see evil and cannot look at wrong, why do you idly look at traitors and remain silent when the wicked swallows up the man more righteous than he?',
      NIV: 'Your eyes are too pure to look on evil; you cannot tolerate wrongdoing. Why then do you tolerate the treacherous? Why are you silent while the wicked swallow up those more righteous than themselves?',
      KJV: 'Thou art of purer eyes than to behold evil, and canst not look on iniquity: wherefore lookest thou upon them that deal treacherously, and holdest thy tongue when the wicked devoureth the man that is more righteous than he?',
      NASB: 'Your eyes are too pure to approve evil, and You cannot look on wickedness with favor. Why do You look with favor on those who deal treacherously? Why are You silent when the wicked swallow up those more righteous than they?',
    },
    context: {
      before: {
        reference: 'Habakkuk 1:12',
        text: 'Are you not from everlasting, O LORD my God, my Holy One? We shall not die. O LORD, you have ordained them as a judgment, and you, O Rock, have established them for reproof.',
      },
      after: {
        reference: 'Habakkuk 1:14',
        text: 'You make mankind like the fish of the sea, like crawling things that have no ruler.',
      },
    },
  },
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
  {
    id: 'habakkuk-1-5',
    reference: 'Habakkuk 1:5',
    book: 'Habakkuk',
    chapter: 1,
    verse: 5,
    difficulty: 'medium',
    translations: {
      ESV: 'Look among the nations, and see; wonder and be astounded. For I am doing a work in your days that you would not believe if told.',
      NIV: 'Look at the nations and watch—and be utterly amazed. For I am going to do something in your days that you would not believe, even if you were told.',
      KJV: 'Behold ye among the heathen, and regard, and wonder marvelously: for I will work a work in your days, which ye will not believe, though it be told you.',
      NASB: 'Look among the nations! Observe! Be astonished! Wonder! Because I am doing something in your days—you would not believe if you were told.',
    },
    context: {
      before: {
        reference: 'Habakkuk 1:4',
        text: 'So the law is paralyzed, and justice never goes forth. For the wicked surround the righteous; so justice goes forth perverted.',
      },
      after: {
        reference: 'Habakkuk 1:6',
        text: 'For behold, I am raising up the Chaldeans, that bitter and hasty nation, who march through the breadth of the earth.',
      },
    },
  },
  {
    id: 'habakkuk-2-20',
    reference: 'Habakkuk 2:20',
    book: 'Habakkuk',
    chapter: 2,
    verse: 20,
    difficulty: 'easy',
    translations: {
      ESV: 'But the LORD is in his holy temple; let all the earth keep silence before him.',
      NIV: 'The LORD is in his holy temple; let all the earth be silent before him.',
      KJV: 'But the LORD is in his holy temple: let all the earth keep silence before him.',
      NASB: 'But the LORD is in His holy temple. Let all the earth be silent before Him.',
    },
    context: {
      before: {
        reference: 'Habakkuk 2:19',
        text: 'Woe to him who says to a wooden thing, Awake; to a silent stone, Arise! Can this teach? Behold, it is overlaid with gold and silver, and there is no breath at all in it.',
      },
      after: {
        reference: 'Habakkuk 3:1',
        text: 'A prayer of Habakkuk the prophet, according to Shigionoth.',
      },
    },
  },
  {
    id: 'habakkuk-3-2',
    reference: 'Habakkuk 3:2',
    book: 'Habakkuk',
    chapter: 3,
    verse: 2,
    difficulty: 'medium',
    translations: {
      ESV: 'O LORD, I have heard the report of you, and your work, O LORD, do I fear. In the midst of the years revive it; in the midst of the years make it known; in wrath remember mercy.',
      NIV: 'LORD, I have heard of your fame; I stand in awe of your deeds, LORD. Repeat them in our day, in our time make them known; in wrath remember mercy.',
      KJV: 'O LORD, I have heard thy speech, and was afraid: O LORD, revive thy work in the midst of the years, in the midst of the years make known; in wrath remember mercy.',
      NASB: 'LORD, I have heard the report about You and I fear. O LORD, revive Your work in the midst of the years, in the midst of the years make it known; in wrath remember mercy.',
    },
    context: {
      before: {
        reference: 'Habakkuk 3:1',
        text: 'A prayer of Habakkuk the prophet, according to Shigionoth.',
      },
      after: {
        reference: 'Habakkuk 3:3',
        text: 'God came from Teman, and the Holy One from Mount Paran.',
      },
    },
  },
  {
    id: 'habakkuk-3-17-18',
    reference: 'Habakkuk 3:17-18',
    book: 'Habakkuk',
    chapter: 3,
    verse: 17,
    difficulty: 'hard',
    translations: {
      ESV: 'Though the fig tree should not blossom, nor fruit be on the vines, the produce of the olive fail and the fields yield no food, the flock be cut off from the fold and there be no herd in the stalls, yet I will rejoice in the LORD; I will take joy in the God of my salvation.',
      NIV: 'Though the fig tree does not bud and there are no grapes on the vines, though the olive crop fails and the fields produce no food, though there are no sheep in the pen and no cattle in the stalls, yet I will rejoice in the LORD, I will be joyful in God my Savior.',
      KJV: 'Although the fig tree shall not blossom, neither shall fruit be in the vines; the labour of the olive shall fail, and the fields shall yield no meat; the flock shall be cut off from the fold, and there shall be no herd in the stalls: Yet I will rejoice in the LORD, I will joy in the God of my salvation.',
      NASB: 'Though the fig tree should not blossom and there be no fruit on the vines, though the yield of the olive should fail and the fields produce no food, though the flock should be cut off from the fold and there be no cattle in the stalls, yet I will exult in the LORD, I will rejoice in the God of my salvation.',
    },
    context: {
      before: {
        reference: 'Habakkuk 3:16',
        text: 'I hear, and my body trembles; my lips quiver at the sound; rottenness enters into my bones; my legs tremble beneath me.',
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
  {
    id: 'zephaniah-3-12',
    reference: 'Zephaniah 3:12',
    book: 'Zephaniah',
    chapter: 3,
    verse: 12,
    difficulty: 'medium',
    translations: {
      ESV: 'But I will leave in your midst a people humble and lowly. They shall seek refuge in the name of the LORD.',
      NIV: 'But I will leave within you the meek and humble. The remnant of Israel will trust in the name of the LORD.',
      KJV: 'I will also leave in the midst of thee an afflicted and poor people, and they shall trust in the name of the LORD.',
      NASB: 'But I will leave among you a humble and lowly people, and they will take refuge in the name of the LORD.',
    },
    context: {
      before: {
        reference: 'Zephaniah 3:11',
        text: 'On that day you shall not be put to shame because of the deeds by which you have rebelled against me.',
      },
      after: {
        reference: 'Zephaniah 3:13',
        text: 'Those who are left in Israel; they shall do no injustice and speak no lies.',
      },
    },
  },

  // ============ HAGGAI ============
  {
    id: 'zephaniah-1-14',
    reference: 'Zephaniah 1:14',
    book: 'Zephaniah',
    chapter: 1,
    verse: 14,
    difficulty: 'medium',
    translations: {
      ESV: 'The great day of the LORD is near, near and hastening fast; the sound of the day of the LORD is bitter; the mighty man cries aloud there.',
      NIV: 'The great day of the LORD is near—near and coming quickly. The cry on the day of the LORD is bitter; the Mighty Warrior shouts his battle cry.',
      KJV: 'The great day of the LORD is near, it is near, and hasteth greatly, even the voice of the day of the LORD: the mighty man shall cry there bitterly.',
      NASB: 'Near is the great day of the LORD, near and coming very quickly; listen, the day of the LORD! In it the warrior cries out bitterly.',
    },
    context: {
      before: {
        reference: 'Zephaniah 1:13',
        text: 'Their goods shall be plundered, and their houses laid waste. Though they build houses, they shall not inhabit them.',
      },
      after: {
        reference: 'Zephaniah 1:15',
        text: 'A day of wrath is that day, a day of distress and anguish, a day of ruin and devastation.',
      },
    },
  },
  {
    id: 'zephaniah-1-18',
    reference: 'Zephaniah 1:18',
    book: 'Zephaniah',
    chapter: 1,
    verse: 18,
    difficulty: 'medium',
    translations: {
      ESV: 'Neither their silver nor their gold shall be able to deliver them on the day of the wrath of the LORD. In the fire of his jealousy, all the earth shall be consumed.',
      NIV: 'Neither their silver nor their gold will be able to save them on the day of the LORD\'s wrath. In the fire of his jealousy the whole earth will be consumed.',
      KJV: 'Neither their silver nor their gold shall be able to deliver them in the day of the LORD\'s wrath; but the whole land shall be devoured by the fire of his jealousy.',
      NASB: 'Neither their silver nor their gold will be able to deliver them on the day of the LORD\'s wrath; and all the earth will be devoured in the fire of His jealousy.',
    },
    context: {
      before: {
        reference: 'Zephaniah 1:17',
        text: 'I will bring distress on mankind, so that they shall walk like the blind, because they have sinned against the LORD.',
      },
      after: {
        reference: 'Zephaniah 2:1',
        text: 'Gather together, yes, gather, O shameless nation.',
      },
    },
  },
  {
    id: 'zephaniah-3-8',
    reference: 'Zephaniah 3:8',
    book: 'Zephaniah',
    chapter: 3,
    verse: 8,
    difficulty: 'hard',
    translations: {
      ESV: '"Therefore wait for me," declares the LORD, "for the day when I rise up to seize the prey. For my decision is to gather nations, to assemble kingdoms, to pour out upon them my indignation."',
      NIV: '"Therefore wait for me," declares the LORD, "for the day I will stand up to testify. I have decided to assemble the nations, to gather the kingdoms and to pour out my wrath on them."',
      KJV: 'Therefore wait ye upon me, saith the LORD, until the day that I rise up to the prey: for my determination is to gather the nations, that I may assemble the kingdoms, to pour upon them mine indignation.',
      NASB: '"Therefore wait for Me," declares the LORD, "for the day when I rise up as a witness. Indeed, My decision is to gather nations, to assemble kingdoms, to pour out on them My indignation."',
    },
    context: {
      before: {
        reference: 'Zephaniah 3:7',
        text: 'I said, "Surely you will fear me; you will accept correction." Then their dwelling would not be cut off.',
      },
      after: {
        reference: 'Zephaniah 3:9',
        text: 'For at that time I will change the speech of the peoples to a pure speech.',
      },
    },
  },
  {
    id: 'zephaniah-3-14',
    reference: 'Zephaniah 3:14',
    book: 'Zephaniah',
    chapter: 3,
    verse: 14,
    difficulty: 'easy',
    translations: {
      ESV: 'Sing aloud, O daughter of Zion; shout, O Israel! Rejoice and exult with all your heart, O daughter of Jerusalem!',
      NIV: 'Sing, Daughter Zion; shout aloud, Israel! Be glad and rejoice with all your heart, Daughter Jerusalem!',
      KJV: 'Sing, O daughter of Zion; shout, O Israel; be glad and rejoice with all the heart, O daughter of Jerusalem.',
      NASB: 'Shout for joy, O daughter of Zion! Shout in triumph, O Israel! Rejoice and exult with all your heart, O daughter of Jerusalem!',
    },
    context: {
      before: {
        reference: 'Zephaniah 3:13',
        text: 'Those who are left in Israel; they shall do no injustice and speak no lies.',
      },
      after: {
        reference: 'Zephaniah 3:15',
        text: 'The LORD has taken away the judgments against you; he has cleared away your enemies.',
      },
    },
  },
  {
    id: 'zephaniah-3-20',
    reference: 'Zephaniah 3:20',
    book: 'Zephaniah',
    chapter: 3,
    verse: 20,
    difficulty: 'medium',
    translations: {
      ESV: 'At that time I will bring you in, at the time when I gather you together; for I will make you renowned and praised among all the peoples of the earth, when I restore your fortunes before your eyes.',
      NIV: 'At that time I will gather you; at that time I will bring you home. I will give you honor and praise among all the peoples of the earth when I restore your fortunes before your very eyes.',
      KJV: 'At that time will I bring you again, even in the time that I gather you: for I will make you a name and a praise among all people of the earth.',
      NASB: 'At that time I will bring you in, even at the time when I gather you together; indeed, I will give you renown and praise among all the peoples of the earth.',
    },
    context: {
      before: {
        reference: 'Zephaniah 3:19',
        text: 'Behold, at that time I will deal with all your oppressors. And I will save the lame and gather the outcast.',
      },
      after: {
        reference: 'Haggai 1:1',
        text: 'In the second year of Darius the king, in the sixth month, on the first day of the month.',
      },
    },
  },
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
  {
    id: 'haggai-2-5',
    reference: 'Haggai 2:5',
    book: 'Haggai',
    chapter: 2,
    verse: 5,
    difficulty: 'medium',
    translations: {
      ESV: 'According to the covenant that I made with you when you came out of Egypt. My Spirit remains in your midst. Fear not.',
      NIV: 'This is what I covenanted with you when you came out of Egypt. And my Spirit remains among you. Do not fear.',
      KJV: 'According to the word that I covenanted with you when ye came out of Egypt, so my spirit remaineth among you: fear ye not.',
      NASB: 'As for the promise which I made you when you came out of Egypt, My Spirit is abiding in your midst; do not fear!',
    },
    context: {
      before: {
        reference: 'Haggai 2:4',
        text: 'Yet now be strong, O Zerubbabel, declares the LORD. Be strong, O Joshua, son of Jehozadak, the high priest. Be strong, all you people of the land.',
      },
      after: {
        reference: 'Haggai 2:6',
        text: 'For thus says the LORD of hosts: Yet once more, in a little while, I will shake the heavens and the earth.',
      },
    },
  },
  {
    id: 'haggai-2-23',
    reference: 'Haggai 2:23',
    book: 'Haggai',
    chapter: 2,
    verse: 23,
    difficulty: 'medium',
    translations: {
      ESV: 'On that day, declares the LORD of hosts, I will take you, O Zerubbabel my servant, the son of Shealtiel, declares the LORD, and make you like a signet ring, for I have chosen you, declares the LORD of hosts.',
      NIV: '"On that day," declares the LORD Almighty, "I will take you, my servant Zerubbabel son of Shealtiel," declares the LORD, "and I will make you like my signet ring, for I have chosen you," declares the LORD Almighty.',
      KJV: 'In that day, saith the LORD of hosts, will I take thee, O Zerubbabel, my servant, the son of Shealtiel, saith the LORD, and will make thee as a signet: for I have chosen thee, saith the LORD of hosts.',
      NASB: '"On that day," declares the LORD of hosts, "I will take you, Zerubbabel, son of Shealtiel, My servant," declares the LORD, "and I will make you like a signet ring, for I have chosen you," declares the LORD of hosts.',
    },
    context: {
      before: {
        reference: 'Haggai 2:22',
        text: 'I will overthrow the throne of kingdoms. I will destroy the strength of the kingdoms of the nations.',
      },
    },
  },
  {
    id: 'haggai-2-7',
    reference: 'Haggai 2:7',
    book: 'Haggai',
    chapter: 2,
    verse: 7,
    difficulty: 'medium',
    translations: {
      ESV: 'And I will shake all nations, so that the treasures of all nations shall come in, and I will fill this house with glory, says the LORD of hosts.',
      NIV: 'I will shake all nations, and what is desired by all nations will come, and I will fill this house with glory, says the LORD Almighty.',
      KJV: 'And I will shake all nations, and the desire of all nations shall come: and I will fill this house with glory, saith the LORD of hosts.',
      NASB: 'I will shake all the nations; and they will come with the wealth of all nations, and I will fill this house with glory," says the LORD of hosts.',
    },
    context: {
      before: {
        reference: 'Haggai 2:6',
        text: 'For thus says the LORD of hosts: Yet once more, in a little while, I will shake the heavens and the earth and the sea and the dry land.',
      },
      after: {
        reference: 'Haggai 2:8',
        text: 'The silver is mine, and the gold is mine, declares the LORD of hosts.',
      },
    },
  },
  {
    id: 'haggai-2-4',
    reference: 'Haggai 2:4',
    book: 'Haggai',
    chapter: 2,
    verse: 4,
    difficulty: 'easy',
    translations: {
      ESV: 'Yet now be strong, O Zerubbabel, declares the LORD. Be strong, O Joshua, son of Jehozadak, the high priest. Be strong, all you people of the land, declares the LORD. Work, for I am with you, declares the LORD of hosts.',
      NIV: 'But now be strong, Zerubbabel, declares the LORD. Be strong, Joshua son of Jozadak, the high priest. Be strong, all you people of the land, declares the LORD, and work. For I am with you, declares the LORD Almighty.',
      KJV: 'Yet now be strong, O Zerubbabel, saith the LORD; and be strong, O Joshua, son of Josedech, the high priest; and be strong, all ye people of the land, saith the LORD, and work: for I am with you, saith the LORD of hosts.',
      NASB: 'But now take courage, Zerubbabel, declares the LORD, take courage also, Joshua son of Jehozadak, the high priest, and all you people of the land take courage, declares the LORD, and work; for I am with you, declares the LORD of hosts.',
    },
    context: {
      before: {
        reference: 'Haggai 2:3',
        text: 'Who is left among you who saw this house in its former glory? How do you see it now? Is it not as nothing in your eyes?',
      },
      after: {
        reference: 'Haggai 2:5',
        text: 'According to the covenant that I made with you when you came out of Egypt. My Spirit remains in your midst. Fear not.',
      },
    },
  },
  {
    id: 'haggai-2-5',
    reference: 'Haggai 2:5',
    book: 'Haggai',
    chapter: 2,
    verse: 5,
    difficulty: 'easy',
    translations: {
      ESV: 'According to the covenant that I made with you when you came out of Egypt. My Spirit remains in your midst. Fear not.',
      NIV: 'This is what I covenanted with you when you came out of Egypt. And my Spirit remains among you. Do not fear.',
      KJV: 'According to the word that I covenanted with you when ye came out of Egypt, so my spirit remaineth among you: fear ye not.',
      NASB: 'As for the promise which I made you when you came out of Egypt, My Spirit is abiding in your midst; do not fear!',
    },
    context: {
      before: {
        reference: 'Haggai 2:4',
        text: 'Yet now be strong, O Zerubbabel, declares the LORD. Be strong, O Joshua, son of Jehozadak, the high priest.',
      },
      after: {
        reference: 'Haggai 2:6',
        text: 'For thus says the LORD of hosts: Yet once more, in a little while, I will shake the heavens and the earth.',
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
      NASB: 'Now, therefore, thus says the LORD of hosts, "Consider your ways!"',
    },
    context: {
      before: {
        reference: 'Haggai 1:4',
        text: 'Is it a time for you yourselves to dwell in your paneled houses, while this house lies in ruins?',
      },
      after: {
        reference: 'Haggai 1:6',
        text: 'You have sown much, and harvested little. You eat, but you never have enough.',
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
  {
    id: 'zechariah-14-9',
    reference: 'Zechariah 14:9',
    book: 'Zechariah',
    chapter: 14,
    verse: 9,
    difficulty: 'easy',
    translations: {
      ESV: 'And the LORD will be king over all the earth. On that day the LORD will be one and his name one.',
      NIV: 'The LORD will be king over the whole earth. On that day there will be one LORD, and his name the only name.',
      KJV: 'And the LORD shall be king over all the earth: in that day shall there be one LORD, and his name one.',
      NASB: 'And the LORD will be king over all the earth; in that day the LORD will be the only one, and His name the only one.',
    },
    context: {
      before: {
        reference: 'Zechariah 14:8',
        text: 'On that day living waters shall flow out from Jerusalem, half of them to the eastern sea and half of them to the western sea.',
      },
      after: {
        reference: 'Zechariah 14:10',
        text: 'The whole land shall be turned into a plain from Geba to Rimmon south of Jerusalem.',
      },
    },
  },
  {
    id: 'zechariah-3-8',
    reference: 'Zechariah 3:8',
    book: 'Zechariah',
    chapter: 3,
    verse: 8,
    difficulty: 'hard',
    translations: {
      ESV: 'Hear now, O Joshua the high priest, you and your friends who sit before you, for they are men who are a sign: behold, I will bring my servant the Branch.',
      NIV: '"Listen, High Priest Joshua, you and your associates seated before you, who are men symbolic of things to come: I am going to bring my servant, the Branch."',
      KJV: 'Hear now, O Joshua the high priest, thou, and thy fellows that sit before thee: for they are men wondered at: for, behold, I will bring forth my servant the BRANCH.',
      NASB: 'Now listen, Joshua the high priest, you and your friends who are sitting in front of you—indeed they are men who are a sign: for behold, I am going to bring in My servant the Branch.',
    },
    context: {
      before: {
        reference: 'Zechariah 3:7',
        text: 'Thus says the LORD of hosts: If you will walk in my ways and keep my charge, then you shall rule my house and have charge of my courts.',
      },
      after: {
        reference: 'Zechariah 3:9',
        text: 'For behold, on the stone that I have set before Joshua, on a single stone with seven eyes, I will engrave its inscription, declares the LORD of hosts.',
      },
    },
  },
  {
    id: 'zechariah-6-12',
    reference: 'Zechariah 6:12',
    book: 'Zechariah',
    chapter: 6,
    verse: 12,
    difficulty: 'hard',
    translations: {
      ESV: 'And say to him, "Thus says the LORD of hosts, \'Behold, the man whose name is the Branch: for he shall branch out from his place, and he shall build the temple of the LORD.\'"',
      NIV: 'Tell him this is what the LORD Almighty says: "Here is the man whose name is the Branch, and he will branch out from his place and build the temple of the LORD."',
      KJV: 'And speak unto him, saying, Thus speaketh the LORD of hosts, saying, Behold the man whose name is The BRANCH; and he shall grow up out of his place, and he shall build the temple of the LORD:',
      NASB: 'and say to him, "Thus says the LORD of hosts, \'Behold, a man whose name is Branch, for He will branch out from where He is; and He will build the temple of the LORD.\'"',
    },
    context: {
      before: {
        reference: 'Zechariah 6:11',
        text: 'Take from them silver and gold, and make a crown, and set it on the head of Joshua, the son of Jehozadak, the high priest.',
      },
      after: {
        reference: 'Zechariah 6:13',
        text: 'It is he who shall build the temple of the LORD and shall bear royal honor, and shall sit and rule on his throne.',
      },
    },
  },
  {
    id: 'zechariah-8-23',
    reference: 'Zechariah 8:23',
    book: 'Zechariah',
    chapter: 8,
    verse: 23,
    difficulty: 'medium',
    translations: {
      ESV: 'Thus says the LORD of hosts: In those days ten men from the nations of every tongue shall take hold of the robe of a Jew, saying, "Let us go with you, for we have heard that God is with you."',
      NIV: 'This is what the LORD Almighty says: "In those days ten people from all languages and nations will take firm hold of one Jew by the hem of his robe and say, \'Let us go with you, because we have heard that God is with you.\'"',
      KJV: 'Thus saith the LORD of hosts; In those days it shall come to pass, that ten men shall take hold out of all languages of the nations, even shall take hold of the skirt of him that is a Jew, saying, We will go with you: for we have heard that God is with you.',
      NASB: 'Thus says the LORD of hosts, "In those days ten men from all the nations will grasp the garment of a Jew, saying, \'Let us go with you, for we have heard that God is with you.\'"',
    },
    context: {
      before: {
        reference: 'Zechariah 8:22',
        text: 'Many peoples and strong nations shall come to seek the LORD of hosts in Jerusalem and to entreat the favor of the LORD.',
      },
      after: {
        reference: 'Zechariah 9:1',
        text: 'The oracle of the word of the LORD is against the land of Hadrach and Damascus is its resting place.',
      },
    },
  },
  {
    id: 'zechariah-11-12',
    reference: 'Zechariah 11:12',
    book: 'Zechariah',
    chapter: 11,
    verse: 12,
    difficulty: 'hard',
    translations: {
      ESV: 'Then I said to them, "If it seems good to you, give me my wages; but if not, keep them." And they weighed out as my wages thirty pieces of silver.',
      NIV: 'I told them, "If you think it best, give me my pay; but if not, keep it." So they paid me thirty pieces of silver.',
      KJV: 'And I said unto them, If ye think good, give me my price; and if not, forbear. So they weighed for my price thirty pieces of silver.',
      NASB: 'And I said to them, "If it is good in your sight, give me my wages; but if not, never mind!" So they weighed out thirty shekels of silver as my wages.',
    },
    context: {
      before: {
        reference: 'Zechariah 11:11',
        text: 'So it was annulled on that day, and the sheep merchants, who were watching me, knew that it was the word of the LORD.',
      },
      after: {
        reference: 'Zechariah 11:13',
        text: 'Then the LORD said to me, "Throw it to the potter"—the lordly price at which I was priced by them. So I took the thirty pieces of silver and threw them into the house of the LORD, to the potter.',
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
      ESV: 'And I will pour out on the house of David and the inhabitants of Jerusalem a spirit of grace and pleas for mercy, so that, when they look on me, on him whom they have pierced, they shall mourn for him, as one mourns for an only child.',
      NIV: 'And I will pour out on the house of David and the inhabitants of Jerusalem a spirit of grace and supplication. They will look on me, the one they have pierced, and they will mourn for him as one mourns for an only child.',
      KJV: 'And I will pour upon the house of David, and upon the inhabitants of Jerusalem, the spirit of grace and of supplications: and they shall look upon me whom they have pierced, and they shall mourn for him, as one mourneth for his only son.',
      NASB: 'I will pour out on the house of David and on the inhabitants of Jerusalem, the Spirit of grace and of supplication, so that they will look on Me whom they have pierced; and they will mourn for Him, as one mourns for an only son.',
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
  {
    id: 'malachi-4-5',
    reference: 'Malachi 4:5',
    book: 'Malachi',
    chapter: 4,
    verse: 5,
    difficulty: 'medium',
    translations: {
      ESV: 'Behold, I will send you Elijah the prophet before the great and awesome day of the LORD comes.',
      NIV: 'See, I will send the prophet Elijah to you before that great and dreadful day of the LORD comes.',
      KJV: 'Behold, I will send you Elijah the prophet before the coming of the great and dreadful day of the LORD:',
      NASB: 'Behold, I am going to send you Elijah the prophet before the coming of the great and terrible day of the LORD.',
    },
    context: {
      before: {
        reference: 'Malachi 4:4',
        text: 'Remember the law of my servant Moses, the statutes and rules that I commanded him at Horeb for all Israel.',
      },
      after: {
        reference: 'Malachi 4:6',
        text: 'And he will turn the hearts of fathers to their children and the hearts of children to their fathers.',
      },
    },
  },
  {
    id: 'malachi-1-11',
    reference: 'Malachi 1:11',
    book: 'Malachi',
    chapter: 1,
    verse: 11,
    difficulty: 'medium',
    translations: {
      ESV: 'For from the rising of the sun to its setting my name will be great among the nations, and in every place incense will be offered to my name, and a pure offering. For my name will be great among the nations, says the LORD of hosts.',
      NIV: 'My name will be great among the nations, from where the sun rises to where it sets. In every place incense and pure offerings will be brought to me, because my name will be great among the nations," says the LORD Almighty.',
      KJV: 'For from the rising of the sun even unto the going down of the same my name shall be great among the Gentiles; and in every place incense shall be offered unto my name, and a pure offering: for my name shall be great among the heathen, saith the LORD of hosts.',
      NASB: 'For from the rising of the sun even to its setting, My name will be great among the nations, and in every place incense is going to be offered to My name, and a grain offering that is pure; for My name will be great among the nations," says the LORD of hosts.',
    },
    context: {
      before: {
        reference: 'Malachi 1:10',
        text: 'Oh that there were one among you who would shut the doors, that you might not kindle fire on my altar in vain!',
      },
      after: {
        reference: 'Malachi 1:12',
        text: 'But you profane it when you say that the Lord\'s table is polluted, and its fruit, that is, its food may be despised.',
      },
    },
  },
  {
    id: 'malachi-2-16',
    reference: 'Malachi 2:16',
    book: 'Malachi',
    chapter: 2,
    verse: 16,
    difficulty: 'medium',
    translations: {
      ESV: '"For the man who does not love his wife but divorces her, says the LORD, the God of Israel, covers his garment with violence, says the LORD of hosts. So guard yourselves in your spirit, and do not be faithless."',
      NIV: '"The man who hates and divorces his wife," says the LORD, the God of Israel, "does violence to the one he should protect," says the LORD Almighty. So be on your guard, and do not be unfaithful.',
      KJV: 'For the LORD, the God of Israel, saith that he hateth putting away: for one covereth violence with his garment, saith the LORD of hosts: therefore take heed to your spirit, that ye deal not treacherously.',
      NASB: '"For I hate divorce," says the LORD, the God of Israel, "and him who covers his garment with wrong," says the LORD of hosts. "So take heed to your spirit, that you do not deal treacherously."',
    },
    context: {
      before: {
        reference: 'Malachi 2:15',
        text: 'Did he not make them one, with a portion of the Spirit in their union? And what was the one God seeking? Godly offspring.',
      },
      after: {
        reference: 'Malachi 2:17',
        text: 'You have wearied the LORD with your words. But you say, "How have we wearied him?"',
      },
    },
  },
  {
    id: 'malachi-4-6',
    reference: 'Malachi 4:6',
    book: 'Malachi',
    chapter: 4,
    verse: 6,
    difficulty: 'medium',
    translations: {
      ESV: 'And he will turn the hearts of fathers to their children and the hearts of children to their fathers, lest I come and strike the land with a decree of utter destruction.',
      NIV: 'He will turn the hearts of the parents to their children, and the hearts of the children to their parents; or else I will come and strike the land with total destruction.',
      KJV: 'And he shall turn the heart of the fathers to the children, and the heart of the children to their fathers, lest I come and smite the earth with a curse.',
      NASB: 'He will restore the hearts of the fathers to their children and the hearts of the children to their fathers, so that I will not come and smite the land with a curse.',
    },
    context: {
      before: {
        reference: 'Malachi 4:5',
        text: 'Behold, I will send you Elijah the prophet before the great and awesome day of the LORD comes.',
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
      NIV: '"I the LORD do not change. So you, the descendants of Jacob, are not destroyed.',
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
    id: 'malachi-4-5',
    reference: 'Malachi 4:5',
    book: 'Malachi',
    chapter: 4,
    verse: 5,
    difficulty: 'easy',
    translations: {
      ESV: 'Behold, I will send you Elijah the prophet before the great and awesome day of the LORD comes.',
      NIV: 'See, I will send the prophet Elijah to you before that great and dreadful day of the LORD comes.',
      KJV: 'Behold, I will send you Elijah the prophet before the coming of the great and dreadful day of the LORD.',
      NASB: 'Behold, I am going to send you Elijah the prophet before the coming of the great and terrible day of the LORD.',
    },
    context: {
      before: {
        reference: 'Malachi 4:4',
        text: 'Remember the law of my servant Moses, the statutes and rules that I commanded him at Horeb for all Israel.',
      },
      after: {
        reference: 'Malachi 4:6',
        text: 'And he will turn the hearts of fathers to their children and the hearts of children to their fathers.',
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

  {
    id: 'matthew-5-3',
    reference: 'Matthew 5:3',
    book: 'Matthew',
    chapter: 5,
    verse: 3,
    difficulty: 'easy',
    translations: {
      ESV: 'Blessed are the poor in spirit, for theirs is the kingdom of heaven.',
      NIV: 'Blessed are the poor in spirit, for theirs is the kingdom of heaven.',
      KJV: 'Blessed are the poor in spirit: for theirs is the kingdom of heaven.',
      NASB: 'Blessed are the poor in spirit, for theirs is the kingdom of heaven.',
    },
    context: {
      before: {
        reference: 'Matthew 5:2',
        text: 'And he opened his mouth and taught them, saying:',
      },
      after: {
        reference: 'Matthew 5:4',
        text: 'Blessed are those who mourn, for they shall be comforted.',
      },
    },
  },
  {
    id: 'matthew-5-48',
    reference: 'Matthew 5:48',
    book: 'Matthew',
    chapter: 5,
    verse: 48,
    difficulty: 'easy',
    translations: {
      ESV: 'You therefore must be perfect, as your heavenly Father is perfect.',
      NIV: 'Be perfect, therefore, as your heavenly Father is perfect.',
      KJV: 'Be ye therefore perfect, even as your Father which is in heaven is perfect.',
      NASB: 'Therefore you are to be perfect, as your heavenly Father is perfect.',
    },
    context: {
      before: {
        reference: 'Matthew 5:47',
        text: 'And if you greet only your brothers, what more are you doing than others? Do not even the Gentiles do the same?',
      },
      after: {
        reference: 'Matthew 6:1',
        text: 'Beware of practicing your righteousness before other people in order to be seen by them, for then you will have no reward from your Father who is in heaven.',
      },
    },
  },
  {
    id: 'matthew-6-9',
    reference: 'Matthew 6:9',
    book: 'Matthew',
    chapter: 6,
    verse: 9,
    difficulty: 'easy',
    translations: {
      ESV: 'Pray then like this: "Our Father in heaven, hallowed be your name."',
      NIV: 'This, then, is how you should pray: "Our Father in heaven, hallowed be your name,"',
      KJV: 'After this manner therefore pray ye: Our Father which art in heaven, Hallowed be thy name.',
      NASB: 'Pray, then, in this way: "Our Father who is in heaven, Hallowed be Your name."',
    },
    context: {
      before: {
        reference: 'Matthew 6:8',
        text: 'Do not be like them, for your Father knows what you need before you ask him.',
      },
      after: {
        reference: 'Matthew 6:10',
        text: 'Your kingdom come, your will be done, on earth as it is in heaven.',
      },
    },
  },
  {
    id: 'matthew-16-24',
    reference: 'Matthew 16:24',
    book: 'Matthew',
    chapter: 16,
    verse: 24,
    difficulty: 'medium',
    translations: {
      ESV: 'Then Jesus told his disciples, "If anyone would come after me, let him deny himself and take up his cross and follow me."',
      NIV: 'Then Jesus said to his disciples, "Whoever wants to be my disciple must deny themselves and take up their cross and follow me."',
      KJV: 'Then said Jesus unto his disciples, If any man will come after me, let him deny himself, and take up his cross, and follow me.',
      NASB: 'Then Jesus said to His disciples, "If anyone wishes to come after Me, he must deny himself, and take up his cross and follow Me."',
    },
    context: {
      before: {
        reference: 'Matthew 16:23',
        text: 'But he turned and said to Peter, "Get behind me, Satan! You are a hindrance to me. For you are not setting your mind on the things of God, but on the things of man."',
      },
      after: {
        reference: 'Matthew 16:25',
        text: 'For whoever would save his life will lose it, but whoever loses his life for my sake will find it.',
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

  {
    id: 'mark-8-36',
    reference: 'Mark 8:36',
    book: 'Mark',
    chapter: 8,
    verse: 36,
    difficulty: 'easy',
    translations: {
      ESV: 'For what does it profit a man to gain the whole world and forfeit his soul?',
      NIV: 'What good is it for someone to gain the whole world, yet forfeit their soul?',
      KJV: 'For what shall it profit a man, if he shall gain the whole world, and lose his own soul?',
      NASB: 'For what does it profit a man to gain the whole world, and forfeit his soul?',
    },
    context: {
      before: {
        reference: 'Mark 8:35',
        text: 'For whoever would save his life will lose it, but whoever loses his life for my sake and the gospel\'s will save it.',
      },
      after: {
        reference: 'Mark 8:37',
        text: 'For what can a man give in return for his soul?',
      },
    },
  },
  {
    id: 'mark-9-23',
    reference: 'Mark 9:23',
    book: 'Mark',
    chapter: 9,
    verse: 23,
    difficulty: 'medium',
    translations: {
      ESV: 'And Jesus said to him, "\'If you can\'! All things are possible for one who believes."',
      NIV: '"\'If you can\'?" said Jesus. "Everything is possible for one who believes."',
      KJV: 'Jesus said unto him, If thou canst believe, all things are possible to him that believeth.',
      NASB: 'And Jesus said to him, "\'If You can?\' All things are possible to him who believes."',
    },
    context: {
      before: {
        reference: 'Mark 9:22',
        text: 'And it has often cast him into fire and into water, to destroy him. But if you can do anything, have compassion on us and help us.',
      },
      after: {
        reference: 'Mark 9:24',
        text: 'Immediately the father of the child cried out and said, "I believe; help my unbelief!"',
      },
    },
  },
  {
    id: 'mark-10-27',
    reference: 'Mark 10:27',
    book: 'Mark',
    chapter: 10,
    verse: 27,
    difficulty: 'easy',
    translations: {
      ESV: 'Jesus looked at them and said, "With man it is impossible, but not with God. For all things are possible with God."',
      NIV: 'Jesus looked at them and said, "With man this is impossible, but not with God; all things are possible with God."',
      KJV: 'And Jesus looking upon them saith, With men it is impossible, but not with God: for with God all things are possible.',
      NASB: 'Looking at them, Jesus said, "With people it is impossible, but not with God; for all things are possible with God."',
    },
    context: {
      before: {
        reference: 'Mark 10:26',
        text: 'And they were exceedingly astonished, and said to him, "Then who can be saved?"',
      },
      after: {
        reference: 'Mark 10:28',
        text: 'Peter began to say to him, "See, we have left everything and followed you."',
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
        text: 'Afterward he appeared to the eleven themselves as they were reclining at table, and he rebuked them for their unbelief.',
      },
      after: {
        reference: 'Mark 16:16',
        text: 'Whoever believes and is baptized will be saved, but whoever does not believe will be condemned.',
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
      ESV: 'And saying, "The time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel."',
      NIV: '"The time has come," he said. "The kingdom of God has come near. Repent and believe the good news!"',
      KJV: 'And saying, The time is fulfilled, and the kingdom of God is at hand: repent ye, and believe the gospel.',
      NASB: 'And saying, "The time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel."',
    },
    context: {
      before: {
        reference: 'Mark 1:14',
        text: 'Now after John was arrested, Jesus came into Galilee, proclaiming the gospel of God.',
      },
      after: {
        reference: 'Mark 1:16',
        text: 'Passing alongside the Sea of Galilee, he saw Simon and Andrew the brother of Simon casting a net into the sea.',
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
  {
    id: 'luke-1-46-47',
    reference: 'Luke 1:46-47',
    book: 'Luke',
    chapter: 1,
    verse: 46,
    difficulty: 'easy',
    translations: {
      ESV: 'And Mary said, "My soul magnifies the Lord, and my spirit rejoices in God my Savior."',
      NIV: 'And Mary said: "My soul glorifies the Lord and my spirit rejoices in God my Savior."',
      KJV: 'And Mary said, My soul doth magnify the Lord, And my spirit hath rejoiced in God my Saviour.',
      NASB: 'And Mary said: "My soul exalts the Lord, And my spirit has rejoiced in God my Savior."',
    },
    context: {
      before: {
        reference: 'Luke 1:45',
        text: 'And blessed is she who believed that there would be a fulfillment of what was spoken to her from the Lord.',
      },
      after: {
        reference: 'Luke 1:48',
        text: 'for he has looked on the humble estate of his servant. For behold, from now on all generations will call me blessed.',
      },
    },
  },
  {
    id: 'luke-10-27',
    reference: 'Luke 10:27',
    book: 'Luke',
    chapter: 10,
    verse: 27,
    difficulty: 'medium',
    translations: {
      ESV: 'And he answered, "You shall love the Lord your God with all your heart and with all your soul and with all your strength and with all your mind, and your neighbor as yourself."',
      NIV: 'He answered, "\'Love the Lord your God with all your heart and with all your soul and with all your strength and with all your mind\'; and, \'Love your neighbor as yourself.\'"',
      KJV: 'And he answering said, Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy strength, and with all thy mind; and thy neighbour as thyself.',
      NASB: 'And he answered, "YOU SHALL LOVE THE LORD YOUR GOD WITH ALL YOUR HEART, AND WITH ALL YOUR SOUL, AND WITH ALL YOUR STRENGTH, AND WITH ALL YOUR MIND; AND YOUR NEIGHBOR AS YOURSELF."',
    },
    context: {
      before: {
        reference: 'Luke 10:26',
        text: 'He said to him, "What is written in the Law? How do you read it?"',
      },
      after: {
        reference: 'Luke 10:28',
        text: 'And he said to him, "You have answered correctly; do this, and you will live."',
      },
    },
  },
  {
    id: 'luke-15-7',
    reference: 'Luke 15:7',
    book: 'Luke',
    chapter: 15,
    verse: 7,
    difficulty: 'medium',
    translations: {
      ESV: 'Just so, I tell you, there will be more joy in heaven over one sinner who repents than over ninety-nine righteous persons who need no repentance.',
      NIV: 'I tell you that in the same way there will be more rejoicing in heaven over one sinner who repents than over ninety-nine righteous persons who do not need to repent.',
      KJV: 'I say unto you, that likewise joy shall be in heaven over one sinner that repenteth, more than over ninety and nine just persons, which need no repentance.',
      NASB: 'I tell you that in the same way, there will be more joy in heaven over one sinner who repents than over ninety-nine righteous persons who need no repentance.',
    },
    context: {
      before: {
        reference: 'Luke 15:6',
        text: 'And when he comes home, he calls together his friends and his neighbors, saying to them, "Rejoice with me, for I have found my sheep that was lost."',
      },
      after: {
        reference: 'Luke 15:8',
        text: 'Or what woman, having ten silver coins, if she loses one coin, does not light a lamp and sweep the house and seek diligently until she finds it?',
      },
    },
  },
  {
    id: 'luke-23-43',
    reference: 'Luke 23:43',
    book: 'Luke',
    chapter: 23,
    verse: 43,
    difficulty: 'easy',
    translations: {
      ESV: 'And he said to him, "Truly, I say to you, today you will be with me in paradise."',
      NIV: 'Jesus answered him, "Truly I tell you, today you will be with me in paradise."',
      KJV: 'And Jesus said unto him, Verily I say unto thee, To day shalt thou be with me in paradise.',
      NASB: 'And He said to him, "Truly I say to you, today you shall be with Me in Paradise."',
    },
    context: {
      before: {
        reference: 'Luke 23:42',
        text: 'And he said, "Jesus, remember me when you come into your kingdom."',
      },
      after: {
        reference: 'Luke 23:44',
        text: 'It was now about the sixth hour, and there was darkness over the whole land until the ninth hour.',
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
  {
    id: 'john-1-14',
    reference: 'John 1:14',
    book: 'John',
    chapter: 1,
    verse: 14,
    difficulty: 'medium',
    translations: {
      ESV: 'And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth.',
      NIV: 'The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth.',
      KJV: 'And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.',
      NASB: 'And the Word became flesh, and dwelt among us; and we saw His glory, glory as of the only Son from the Father, full of grace and truth.',
    },
    context: {
      before: {
        reference: 'John 1:13',
        text: 'who were born, not of blood nor of the will of the flesh nor of the will of man, but of God.',
      },
      after: {
        reference: 'John 1:15',
        text: '(John bore witness about him, and cried out, "This was he of whom I said, \'He who comes after me ranks before me, because he was before me.\'")',
      },
    },
  },
  {
    id: 'john-6-35',
    reference: 'John 6:35',
    book: 'John',
    chapter: 6,
    verse: 35,
    difficulty: 'medium',
    translations: {
      ESV: 'Jesus said to them, "I am the bread of life; whoever comes to me shall not hunger, and whoever believes in me shall never thirst."',
      NIV: 'Then Jesus declared, "I am the bread of life. Whoever comes to me will never go hungry, and whoever believes in me will never be thirsty."',
      KJV: 'And Jesus said unto them, I am the bread of life: he that cometh to me shall never hunger; and he that believeth on me shall never thirst.',
      NASB: 'Jesus said to them, "I am the bread of life; the one who comes to Me will not be hungry, and the one who believes in Me will never be thirsty."',
    },
    context: {
      before: {
        reference: 'John 6:34',
        text: 'They said to him, "Sir, give us this bread always."',
      },
      after: {
        reference: 'John 6:36',
        text: 'But I said to you that you have seen me and yet do not believe.',
      },
    },
  },
  {
    id: 'john-10-11',
    reference: 'John 10:11',
    book: 'John',
    chapter: 10,
    verse: 11,
    difficulty: 'easy',
    translations: {
      ESV: 'I am the good shepherd. The good shepherd lays down his life for the sheep.',
      NIV: 'I am the good shepherd. The good shepherd lays down his life for the sheep.',
      KJV: 'I am the good shepherd: the good shepherd giveth his life for the sheep.',
      NASB: 'I am the good shepherd; the good shepherd lays down His life for the sheep.',
    },
    context: {
      before: {
        reference: 'John 10:10',
        text: 'The thief comes only to steal and kill and destroy. I came that they may have life and have it abundantly.',
      },
      after: {
        reference: 'John 10:12',
        text: 'He who is a hired hand and not a shepherd, who does not own the sheep, sees the wolf coming and leaves the sheep and flees.',
      },
    },
  },
  {
    id: 'john-17-3',
    reference: 'John 17:3',
    book: 'John',
    chapter: 17,
    verse: 3,
    difficulty: 'medium',
    translations: {
      ESV: 'And this is eternal life, that they know you, the only true God, and Jesus Christ whom you have sent.',
      NIV: 'Now this is eternal life: that they know you, the only true God, and Jesus Christ, whom you have sent.',
      KJV: 'And this is life eternal, that they might know thee the only true God, and Jesus Christ, whom thou hast sent.',
      NASB: 'This is eternal life, that they may know You, the only true God, and Jesus Christ whom You have sent.',
    },
    context: {
      before: {
        reference: 'John 17:2',
        text: 'since you have given him authority over all flesh, to give eternal life to all whom you have given him.',
      },
      after: {
        reference: 'John 17:4',
        text: 'I glorified you on earth, having accomplished the work that you gave me to do.',
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
  {
    id: 'acts-2-42',
    reference: 'Acts 2:42',
    book: 'Acts',
    chapter: 2,
    verse: 42,
    difficulty: 'easy',
    translations: {
      ESV: 'And they devoted themselves to the apostles\' teaching and the fellowship, to the breaking of bread and the prayers.',
      NIV: 'They devoted themselves to the apostles\' teaching and to fellowship, to the breaking of bread and to prayer.',
      KJV: 'And they continued stedfastly in the apostles\' doctrine and fellowship, and in breaking of bread, and in prayers.',
      NASB: 'They were continually devoting themselves to the apostles\' teaching and to fellowship, to the breaking of bread and to prayer.',
    },
    context: {
      before: {
        reference: 'Acts 2:41',
        text: 'So those who received his word were baptized, and there were added that day about three thousand souls.',
      },
      after: {
        reference: 'Acts 2:43',
        text: 'And awe came upon every soul, and many wonders and signs were being done through the apostles.',
      },
    },
  },
  {
    id: 'acts-5-29',
    reference: 'Acts 5:29',
    book: 'Acts',
    chapter: 5,
    verse: 29,
    difficulty: 'easy',
    translations: {
      ESV: 'But Peter and the apostles answered, "We must obey God rather than men."',
      NIV: 'Peter and the other apostles replied: "We must obey God rather than human beings!"',
      KJV: 'Then Peter and the other apostles answered and said, We ought to obey God rather than men.',
      NASB: 'But Peter and the apostles answered, "We must obey God rather than men."',
    },
    context: {
      before: {
        reference: 'Acts 5:28',
        text: '"We strictly charged you not to teach in this name, yet here you have filled Jerusalem with your teaching, and you intend to bring this man\'s blood upon us."',
      },
      after: {
        reference: 'Acts 5:30',
        text: 'The God of our fathers raised Jesus, whom you killed by hanging him on a tree.',
      },
    },
  },
  {
    id: 'acts-13-38-39',
    reference: 'Acts 13:38-39',
    book: 'Acts',
    chapter: 13,
    verse: 38,
    difficulty: 'hard',
    translations: {
      ESV: 'Let it be known to you therefore, brothers, that through this man forgiveness of sins is proclaimed to you, and by him everyone who believes is freed from everything from which you could not be freed by the law of Moses.',
      NIV: 'Therefore, my friends, I want you to know that through Jesus the forgiveness of sins is proclaimed to you. Through him everyone who believes is set free from every sin, a justification you were not able to obtain under the law of Moses.',
      KJV: 'Be it known unto you therefore, men and brethren, that through this man is preached unto you the forgiveness of sins: And by him all that believe are justified from all things, from which ye could not be justified by the law of Moses.',
      NASB: 'Therefore let it be known to you, brethren, that through Him forgiveness of sins is proclaimed to you, and through Him everyone who believes is freed from all things, from which you could not be freed through the Law of Moses.',
    },
    context: {
      before: {
        reference: 'Acts 13:37',
        text: 'but he whom God raised up did not see corruption.',
      },
      after: {
        reference: 'Acts 13:40',
        text: 'Beware, therefore, lest what is said in the Prophets should come about.',
      },
    },
  },
  {
    id: 'acts-17-28',
    reference: 'Acts 17:28',
    book: 'Acts',
    chapter: 17,
    verse: 28,
    difficulty: 'medium',
    translations: {
      ESV: '"In him we live and move and have our being"; as even some of your own poets have said, "For we are indeed his offspring."',
      NIV: '"For in him we live and move and have our being." As some of your own poets have said, "We are his offspring."',
      KJV: 'For in him we live, and move, and have our being; as certain also of your own poets have said, For we are also his offspring.',
      NASB: 'for in Him we live and move and exist, as even some of your own poets have said, "For we also are His children."',
    },
    context: {
      before: {
        reference: 'Acts 17:27',
        text: 'that they should seek God, and perhaps feel their way toward him and find him. Yet he is actually not far from each one of us,',
      },
      after: {
        reference: 'Acts 17:29',
        text: 'Being then God\'s offspring, we ought not to think that the divine being is like gold or silver or stone, an image formed by the art and imagination of man.',
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
  {
    id: '1-corinthians-3-16',
    reference: '1 Corinthians 3:16',
    book: '1 Corinthians',
    chapter: 3,
    verse: 16,
    difficulty: 'medium',
    translations: {
      ESV: 'Do you not know that you are God\'s temple and that God\'s Spirit dwells in you?',
      NIV: 'Don\'t you know that you yourselves are God\'s temple and that God\'s Spirit dwells in your midst?',
      KJV: 'Know ye not that ye are the temple of God, and that the Spirit of God dwelleth in you?',
      NASB: 'Do you not know that you are a temple of God and that the Spirit of God dwells in you?',
    },
    context: {
      before: {
        reference: '1 Corinthians 3:15',
        text: 'If anyone\'s work is burned up, he will suffer loss, though he himself will be saved, but only as through fire.',
      },
      after: {
        reference: '1 Corinthians 3:17',
        text: 'If anyone destroys God\'s temple, God will destroy him. For God\'s temple is holy, and you are that temple.',
      },
    },
  },
  {
    id: '1-corinthians-6-20',
    reference: '1 Corinthians 6:20',
    book: '1 Corinthians',
    chapter: 6,
    verse: 20,
    difficulty: 'easy',
    translations: {
      ESV: 'for you were bought with a price. So glorify God in your body.',
      NIV: 'you were bought at a price. Therefore honor God with your bodies.',
      KJV: 'For ye are bought with a price: therefore glorify God in your body, and in your spirit, which are God\'s.',
      NASB: 'For you have been bought with a price: therefore glorify God in your body.',
    },
    context: {
      before: {
        reference: '1 Corinthians 6:19',
        text: 'Or do you not know that your body is a temple of the Holy Spirit within you, whom you have from God? You are not your own,',
      },
      after: {
        reference: '1 Corinthians 7:1',
        text: 'Now concerning the matters about which you wrote: "It is good for a man not to have sexual relations with a woman."',
      },
    },
  },
  {
    id: '1-corinthians-13-13',
    reference: '1 Corinthians 13:13',
    book: '1 Corinthians',
    chapter: 13,
    verse: 13,
    difficulty: 'easy',
    translations: {
      ESV: 'So now faith, hope, and love abide, these three; but the greatest of these is love.',
      NIV: 'And now these three remain: faith, hope and love. But the greatest of these is love.',
      KJV: 'And now abideth faith, hope, charity, these three; but the greatest of these is charity.',
      NASB: 'But now faith, hope, love, abide these three; but the greatest of these is love.',
    },
    context: {
      before: {
        reference: '1 Corinthians 13:12',
        text: 'For now we see in a mirror dimly, but then face to face. Now I know in part; then I shall know fully, even as I have been fully known.',
      },
      after: {
        reference: '1 Corinthians 14:1',
        text: 'Pursue love, and earnestly desire the spiritual gifts, especially that you may prophesy.',
      },
    },
  },
  {
    id: '1-corinthians-15-22',
    reference: '1 Corinthians 15:22',
    book: '1 Corinthians',
    chapter: 15,
    verse: 22,
    difficulty: 'medium',
    translations: {
      ESV: 'For as in Adam all die, so also in Christ shall all be made alive.',
      NIV: 'For as in Adam all die, so in Christ all will be made alive.',
      KJV: 'For as in Adam all die, even so in Christ shall all be made alive.',
      NASB: 'For as in Adam all die, so also in Christ all will be made alive.',
    },
    context: {
      before: {
        reference: '1 Corinthians 15:21',
        text: 'For as by a man came death, by a man has come also the resurrection of the dead.',
      },
      after: {
        reference: '1 Corinthians 15:23',
        text: 'But each in his own order: Christ the firstfruits, then at his coming those who belong to Christ.',
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
  {
    id: '2-corinthians-4-7',
    reference: '2 Corinthians 4:7',
    book: '2 Corinthians',
    chapter: 4,
    verse: 7,
    difficulty: 'medium',
    translations: {
      ESV: 'But we have this treasure in jars of clay, to show that the surpassing power belongs to God and not to us.',
      NIV: 'But we have this treasure in jars of clay to show that this all-surpassing power is from God and not from us.',
      KJV: 'But we have this treasure in earthen vessels, that the excellency of the power may be of God, and not of us.',
      NASB: 'But we have this treasure in earthen vessels, so that the surpassing greatness of the power will be of God and not from ourselves;',
    },
    context: {
      before: {
        reference: '2 Corinthians 4:6',
        text: 'For God, who said, "Let light shine out of darkness," has shone in our hearts to give the light of the knowledge of the glory of God in the face of Jesus Christ.',
      },
      after: {
        reference: '2 Corinthians 4:8',
        text: 'We are afflicted in every way, but not crushed; perplexed, but not driven to despair;',
      },
    },
  },
  {
    id: '2-corinthians-5-20',
    reference: '2 Corinthians 5:20',
    book: '2 Corinthians',
    chapter: 5,
    verse: 20,
    difficulty: 'medium',
    translations: {
      ESV: 'Therefore, we are ambassadors for Christ, God making his appeal through us. We implore you on behalf of Christ, be reconciled to God.',
      NIV: 'We are therefore Christ\'s ambassadors, as though God were making his appeal through us. We implore you on Christ\'s behalf: Be reconciled to God.',
      KJV: 'Now then we are ambassadors for Christ, as though God did beseech you by us: we pray you in Christ\'s stead, be ye reconciled to God.',
      NASB: 'Therefore, we are ambassadors for Christ, as though God were making an appeal through us; we beg you on behalf of Christ, be reconciled to God.',
    },
    context: {
      before: {
        reference: '2 Corinthians 5:19',
        text: 'that is, in Christ God was reconciling the world to himself, not counting their trespasses against them, and entrusting to us the message of reconciliation.',
      },
      after: {
        reference: '2 Corinthians 5:21',
        text: 'For our sake he made him to be sin who knew no sin, so that in him we might become the righteousness of God.',
      },
    },
  },
  {
    id: '2-corinthians-10-5',
    reference: '2 Corinthians 10:5',
    book: '2 Corinthians',
    chapter: 10,
    verse: 5,
    difficulty: 'medium',
    translations: {
      ESV: 'We destroy arguments and every lofty opinion raised against the knowledge of God, and take every thought captive to obey Christ,',
      NIV: 'We demolish arguments and every pretension that sets itself up against the knowledge of God, and we take captive every thought to make it obedient to Christ.',
      KJV: 'Casting down imaginations, and every high thing that exalteth itself against the knowledge of God, and bringing into captivity every thought to the obedience of Christ;',
      NASB: 'We are destroying speculations and every lofty thing raised up against the knowledge of God, and we are taking every thought captive to the obedience of Christ,',
    },
    context: {
      before: {
        reference: '2 Corinthians 10:4',
        text: 'For the weapons of our warfare are not of the flesh but have divine power to destroy strongholds.',
      },
      after: {
        reference: '2 Corinthians 10:6',
        text: 'being ready to punish every disobedience, when your obedience is complete.',
      },
    },
  },
  {
    id: '2-corinthians-12-10',
    reference: '2 Corinthians 12:10',
    book: '2 Corinthians',
    chapter: 12,
    verse: 10,
    difficulty: 'medium',
    translations: {
      ESV: 'For the sake of Christ, then, I am content with weaknesses, insults, hardships, persecutions, and calamities. For when I am weak, then I am strong.',
      NIV: 'That is why, for Christ\'s sake, I delight in weaknesses, in insults, in hardships, in persecutions, in difficulties. For when I am weak, then I am strong.',
      KJV: 'Therefore I take pleasure in infirmities, in reproaches, in necessities, in persecutions, in distresses for Christ\'s sake: for when I am weak, then am I strong.',
      NASB: 'Therefore I am well content with weaknesses, with insults, with distresses, with persecutions, with difficulties, for Christ\'s sake; for when I am weak, then I am strong.',
    },
    context: {
      before: {
        reference: '2 Corinthians 12:9',
        text: 'But he said to me, "My grace is sufficient for you, for my power is made perfect in weakness." Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.',
      },
      after: {
        reference: '2 Corinthians 12:11',
        text: 'I have been a fool! You forced me to it, for I ought to have been commended by you. For I was not at all inferior to these super-apostles, even though I am nothing.',
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
  {
    id: 'galatians-3-11',
    reference: 'Galatians 3:11',
    book: 'Galatians',
    chapter: 3,
    verse: 11,
    difficulty: 'medium',
    translations: {
      ESV: 'Now it is evident that no one is justified before God by the law, for "The righteous shall live by faith."',
      NIV: 'Clearly no one who relies on the law is justified before God, because "the righteous will live by faith."',
      KJV: 'But that no man is justified by the law in the sight of God, it is evident: for, The just shall live by faith.',
      NASB: 'Now that no one is justified by the Law before God is evident; for, "The righteous man shall live by faith."',
    },
    context: {
      before: {
        reference: 'Galatians 3:10',
        text: 'For all who rely on works of the law are under a curse; for it is written, "Cursed be everyone who does not abide by all things written in the Book of the Law, and do them."',
      },
      after: {
        reference: 'Galatians 3:12',
        text: 'But the law is not of faith, rather "The one who does them shall live by them."',
      },
    },
  },
  {
    id: 'galatians-4-6',
    reference: 'Galatians 4:6',
    book: 'Galatians',
    chapter: 4,
    verse: 6,
    difficulty: 'medium',
    translations: {
      ESV: 'And because you are sons, God has sent the Spirit of his Son into our hearts, crying, "Abba! Father!"',
      NIV: 'Because you are his sons, God sent the Spirit of his Son into our hearts, the Spirit who calls out, "Abba, Father."',
      KJV: 'And because ye are sons, God hath sent forth the Spirit of his Son into your hearts, crying, Abba, Father.',
      NASB: 'Because you are sons, God has sent forth the Spirit of His Son into our hearts, crying, "Abba! Father!"',
    },
    context: {
      before: {
        reference: 'Galatians 4:5',
        text: 'to redeem those who were under the law, so that we might receive adoption as sons.',
      },
      after: {
        reference: 'Galatians 4:7',
        text: 'So you are no longer a slave, but a son, and if a son, then an heir through God.',
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
  {
    id: 'philippians-1-21',
    reference: 'Philippians 1:21',
    book: 'Philippians',
    chapter: 1,
    verse: 21,
    difficulty: 'easy',
    translations: {
      ESV: 'For to me to live is Christ, and to die is gain.',
      NIV: 'For to me, to live is Christ and to die is gain.',
      KJV: 'For to me to live is Christ, and to die is gain.',
      NASB: 'For to me, to live is Christ and to die is gain.',
    },
    context: {
      before: {
        reference: 'Philippians 1:20',
        text: 'as it is my eager expectation and hope that I will not be at all ashamed, but that with full courage now as always Christ will be honored in my body, whether by life or by death.',
      },
      after: {
        reference: 'Philippians 1:22',
        text: 'If I am to live in the flesh, that means fruitful labor for me. Yet which I shall choose I cannot tell.',
      },
    },
  },
  {
    id: 'philippians-2-3-4',
    reference: 'Philippians 2:3-4',
    book: 'Philippians',
    chapter: 2,
    verse: 3,
    difficulty: 'medium',
    translations: {
      ESV: 'Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves. Let each of you look not only to his own interests, but also to the interests of others.',
      NIV: 'Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves, not looking to your own interests but each of you to the interests of the others.',
      KJV: 'Let nothing be done through strife or vainglory; but in lowliness of mind let each esteem other better than themselves. Look not every man on his own things, but every man also on the things of others.',
      NASB: 'Do nothing from selfishness or empty conceit, but with humility of mind regard one another as more important than yourselves; do not merely look out for your own personal interests, but also for the interests of others.',
    },
    context: {
      before: {
        reference: 'Philippians 2:2',
        text: 'complete my joy by being of the same mind, having the same love, being in full accord and of one mind.',
      },
      after: {
        reference: 'Philippians 2:5',
        text: 'Have this mind among yourselves, which is yours in Christ Jesus,',
      },
    },
  },
  {
    id: 'philippians-3-8',
    reference: 'Philippians 3:8',
    book: 'Philippians',
    chapter: 3,
    verse: 8,
    difficulty: 'hard',
    translations: {
      ESV: 'Indeed, I count everything as loss because of the surpassing worth of knowing Christ Jesus my Lord. For his sake I have suffered the loss of all things and count them as rubbish, in order that I may gain Christ',
      NIV: 'What is more, I consider everything a loss because of the surpassing worth of knowing Christ Jesus my Lord, for whose sake I have lost all things. I consider them garbage, that I may gain Christ',
      KJV: 'Yea doubtless, and I count all things but loss for the excellency of the knowledge of Christ Jesus my Lord: for whom I have suffered the loss of all things, and do count them but dung, that I may win Christ,',
      NASB: 'More than that, I count all things to be loss in view of the surpassing value of knowing Christ Jesus my Lord, for whom I have suffered the loss of all things, and count them but rubbish so that I may gain Christ,',
    },
    context: {
      before: {
        reference: 'Philippians 3:7',
        text: 'But whatever gain I had, I counted as loss for the sake of Christ.',
      },
      after: {
        reference: 'Philippians 3:9',
        text: 'and be found in him, not having a righteousness of my own that comes from the law, but that which comes through faith in Christ, the righteousness from God that depends on faith—',
      },
    },
  },
  {
    id: 'philippians-3-20-21',
    reference: 'Philippians 3:20-21',
    book: 'Philippians',
    chapter: 3,
    verse: 20,
    difficulty: 'hard',
    translations: {
      ESV: 'But our citizenship is in heaven, and from it we await a Savior, the Lord Jesus Christ, who will transform our lowly body to be like his glorious body, by the power that enables him even to subject all things to himself.',
      NIV: 'But our citizenship is in heaven. And we eagerly await a Savior from there, the Lord Jesus Christ, who, by the power that enables him to bring everything under his control, will transform our lowly bodies so that they will be like his glorious body.',
      KJV: 'For our conversation is in heaven; from whence also we look for the Saviour, the Lord Jesus Christ: Who shall change our vile body, that it may be fashioned like unto his glorious body, according to the working whereby he is able even to subdue all things unto himself.',
      NASB: 'For our citizenship is in heaven, from which also we eagerly wait for a Savior, the Lord Jesus Christ; who will transform the body of our humble state into conformity with the body of His glory, by the exertion of the power that He has even to subject all things to Himself.',
    },
    context: {
      before: {
        reference: 'Philippians 3:19',
        text: 'Their end is destruction, their god is their belly, and they glory in their shame, with minds set on earthly things.',
      },
      after: {
        reference: 'Philippians 4:1',
        text: 'Therefore, my brothers, whom I love and long for, my joy and crown, stand firm thus in the Lord, my beloved.',
      },
    },
  },
  {
    id: 'philippians-1-6',
    reference: 'Philippians 1:6',
    book: 'Philippians',
    chapter: 1,
    verse: 6,
    difficulty: 'easy',
    translations: {
      ESV: 'And I am sure of this, that he who began a good work in you will bring it to completion at the day of Jesus Christ.',
      NIV: 'being confident of this, that he who began a good work in you will carry it on to completion until the day of Christ Jesus.',
      KJV: 'Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ.',
      NASB: 'For I am confident of this very thing, that He who began a good work among you will perfect it until the day of Christ Jesus.',
    },
    context: {
      before: {
        reference: 'Philippians 1:5',
        text: 'because of your partnership in the gospel from the first day until now.',
      },
      after: {
        reference: 'Philippians 1:7',
        text: 'It is right for me to feel this way about you all, because I hold you in my heart.',
      },
    },
  },
  {
    id: 'philippians-4-8',
    reference: 'Philippians 4:8',
    book: 'Philippians',
    chapter: 4,
    verse: 8,
    difficulty: 'hard',
    translations: {
      ESV: 'Finally, brothers, whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely, whatever is commendable, if there is any excellence, if there is anything worthy of praise, think about these things.',
      NIV: 'Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable—if anything is excellent or praiseworthy—think about such things.',
      KJV: 'Finally, brethren, whatsoever things are true, whatsoever things are honest, whatsoever things are just, whatsoever things are pure, whatsoever things are lovely, whatsoever things are of good report; if there be any virtue, and if there be any praise, think on these things.',
      NASB: 'Finally, brethren, whatever is true, whatever is honorable, whatever is right, whatever is pure, whatever is lovely, whatever is of good repute, if there is any excellence and if anything worthy of praise, dwell on these things.',
    },
    context: {
      before: {
        reference: 'Philippians 4:7',
        text: 'And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.',
      },
      after: {
        reference: 'Philippians 4:9',
        text: 'What you have learned and received and heard and seen in me—practice these things, and the God of peace will be with you.',
      },
    },
  },
  {
    id: 'philippians-4-19',
    reference: 'Philippians 4:19',
    book: 'Philippians',
    chapter: 4,
    verse: 19,
    difficulty: 'easy',
    translations: {
      ESV: 'And my God will supply every need of yours according to his riches in glory in Christ Jesus.',
      NIV: 'And my God will meet all your needs according to the riches of his glory in Christ Jesus.',
      KJV: 'But my God shall supply all your need according to his riches in glory by Christ Jesus.',
      NASB: 'And my God will supply all your needs according to His riches in glory in Christ Jesus.',
    },
    context: {
      before: {
        reference: 'Philippians 4:18',
        text: 'I have received full payment, and more. I am well supplied, having received from Epaphroditus the gifts you sent.',
      },
      after: {
        reference: 'Philippians 4:20',
        text: 'To our God and Father be glory forever and ever. Amen.',
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
  {
    id: 'colossians-2-6-7',
    reference: 'Colossians 2:6-7',
    book: 'Colossians',
    chapter: 2,
    verse: 6,
    difficulty: 'medium',
    translations: {
      ESV: 'Therefore, as you received Christ Jesus the Lord, so walk in him, rooted and built up in him and established in the faith, just as you were taught, abounding in thanksgiving.',
      NIV: 'So then, just as you received Christ Jesus as Lord, continue to live your lives in him, rooted and built up in him, strengthened in the faith as you were taught, and overflowing with thankfulness.',
      KJV: 'As ye have therefore received Christ Jesus the Lord, so walk ye in him: Rooted and built up in him, and stablished in the faith, as ye have been taught, abounding therein with thanksgiving.',
      NASB: 'Therefore as you have received Christ Jesus the Lord, so walk in Him, having been firmly rooted and now being built up in Him and established in your faith, just as you were instructed, and overflowing with gratitude.',
    },
    context: {
      before: {
        reference: 'Colossians 2:5',
        text: 'For though I am absent in body, yet I am with you in spirit, rejoicing to see your good order and the firmness of your faith in Christ.',
      },
      after: {
        reference: 'Colossians 2:8',
        text: 'See to it that no one takes you captive by philosophy and empty deceit, according to human tradition, according to the elemental spirits of the world, and not according to Christ.',
      },
    },
  },
  {
    id: 'colossians-3-17',
    reference: 'Colossians 3:17',
    book: 'Colossians',
    chapter: 3,
    verse: 17,
    difficulty: 'easy',
    translations: {
      ESV: 'And whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him.',
      NIV: 'And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him.',
      KJV: 'And whatsoever ye do in word or deed, do all in the name of the Lord Jesus, giving thanks to God and the Father by him.',
      NASB: 'Whatever you do in word or deed, do all in the name of the Lord Jesus, giving thanks through Him to God the Father.',
    },
    context: {
      before: {
        reference: 'Colossians 3:16',
        text: 'Let the word of Christ dwell in you richly, teaching and admonishing one another in all wisdom, singing psalms and hymns and spiritual songs, with thankfulness in your hearts to God.',
      },
      after: {
        reference: 'Colossians 3:18',
        text: 'Wives, submit to your husbands, as is fitting in the Lord.',
      },
    },
  },
  {
    id: 'colossians-1-15',
    reference: 'Colossians 1:15',
    book: 'Colossians',
    chapter: 1,
    verse: 15,
    difficulty: 'easy',
    translations: {
      ESV: 'He is the image of the invisible God, the firstborn of all creation.',
      NIV: 'The Son is the image of the invisible God, the firstborn over all creation.',
      KJV: 'Who is the image of the invisible God, the firstborn of every creature:',
      NASB: 'He is the image of the invisible God, the firstborn of all creation.',
    },
    context: {
      before: {
        reference: 'Colossians 1:14',
        text: 'in whom we have redemption, the forgiveness of sins.',
      },
      after: {
        reference: 'Colossians 1:16',
        text: 'For by him all things were created, in heaven and on earth, visible and invisible, whether thrones or dominions or rulers or authorities—all things were created through him and for him.',
      },
    },
  },
  {
    id: 'colossians-1-18',
    reference: 'Colossians 1:18',
    book: 'Colossians',
    chapter: 1,
    verse: 18,
    difficulty: 'medium',
    translations: {
      ESV: 'And he is the head of the body, the church. He is the beginning, the firstborn from the dead, that in everything he might be preeminent.',
      NIV: 'And he is the head of the body, the church; he is the beginning and the firstborn from among the dead, so that in everything he might have the supremacy.',
      KJV: 'And he is the head of the body, the church: who is the beginning, the firstborn from the dead; that in all things he might have the preeminence.',
      NASB: 'He is also head of the body, the church; and He is the beginning, the firstborn from the dead, so that He Himself will come to have first place in everything.',
    },
    context: {
      before: {
        reference: 'Colossians 1:17',
        text: 'And he is before all things, and in him all things hold together.',
      },
      after: {
        reference: 'Colossians 1:19',
        text: 'For in him all the fullness of God was pleased to dwell,',
      },
    },
  },
  {
    id: 'colossians-3-3',
    reference: 'Colossians 3:3',
    book: 'Colossians',
    chapter: 3,
    verse: 3,
    difficulty: 'easy',
    translations: {
      ESV: 'For you have died, and your life is hidden with Christ in God.',
      NIV: 'For you died, and your life is now hidden with Christ in God.',
      KJV: 'For ye are dead, and your life is hid with Christ in God.',
      NASB: 'For you have died and your life is hidden with Christ in God.',
    },
    context: {
      before: {
        reference: 'Colossians 3:2',
        text: 'Set your minds on things that are above, not on things that are on earth.',
      },
      after: {
        reference: 'Colossians 3:4',
        text: 'When Christ who is your life appears, then you also will appear with him in glory.',
      },
    },
  },
  {
    id: 'colossians-2-13-14',
    reference: 'Colossians 2:13-14',
    book: 'Colossians',
    chapter: 2,
    verse: 13,
    difficulty: 'hard',
    translations: {
      ESV: 'And you, who were dead in your trespasses and the uncircumcision of your flesh, God made alive together with him, having forgiven us all our trespasses, by canceling the record of debt that stood against us with its legal demands. This he set aside, nailing it to the cross.',
      NIV: 'When you were dead in your sins and in the uncircumcision of your flesh, God made you alive with Christ. He forgave us all our sins, having canceled the charge of our legal indebtedness, which stood against us and condemned us; he has taken it away, nailing it to the cross.',
      KJV: 'And you, being dead in your sins and the uncircumcision of your flesh, hath he quickened together with him, having forgiven you all trespasses; Blotting out the handwriting of ordinances that was against us, which was contrary to us, and took it out of the way, nailing it to his cross;',
      NASB: 'When you were dead in your transgressions and the uncircumcision of your flesh, He made you alive together with Him, having forgiven us all our transgressions, having canceled out the certificate of debt consisting of decrees against us, which was hostile to us; and He has taken it out of the way, having nailed it to the cross.',
    },
    context: {
      before: {
        reference: 'Colossians 2:12',
        text: 'having been buried with him in baptism, in which you were also raised with him through faith in the powerful working of God, who raised him from the dead.',
      },
      after: {
        reference: 'Colossians 2:15',
        text: 'He disarmed the rulers and authorities and put them to open shame, by triumphing over them in him.',
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
  {
    id: '1-thessalonians-5-24',
    reference: '1 Thessalonians 5:24',
    book: '1 Thessalonians',
    chapter: 5,
    verse: 24,
    difficulty: 'easy',
    translations: {
      ESV: 'He who calls you is faithful; he will surely do it.',
      NIV: 'The one who calls you is faithful, and he will do it.',
      KJV: 'Faithful is he that calleth you, who also will do it.',
      NASB: 'Faithful is He who calls you, and He also will bring it to pass.',
    },
    context: {
      before: {
        reference: '1 Thessalonians 5:23',
        text: 'Now may the God of peace himself sanctify you completely, and may your whole spirit and soul and body be kept blameless at the coming of our Lord Jesus Christ.',
      },
      after: {
        reference: '1 Thessalonians 5:25',
        text: 'Brothers, pray for us.',
      },
    },
  },
  {
    id: '1-thessalonians-4-13-14',
    reference: '1 Thessalonians 4:13-14',
    book: '1 Thessalonians',
    chapter: 4,
    verse: 13,
    difficulty: 'medium',
    translations: {
      ESV: 'But we do not want you to be uninformed, brothers, about those who are asleep, that you may not grieve as others do who have no hope. For since we believe that Jesus died and rose again, even so, through Jesus, God will bring with him those who have fallen asleep.',
      NIV: 'Brothers and sisters, we do not want you to be uninformed about those who sleep in death, so that you do not grieve like the rest of mankind, who have no hope. For we believe that Jesus died and rose again, and so we believe that God will bring with Jesus those who have fallen asleep in him.',
      KJV: 'But I would not have you to be ignorant, brethren, concerning them which are asleep, that ye sorrow not, even as others which have no hope. For if we believe that Jesus died and rose again, even so them also which sleep in Jesus will God bring with him.',
      NASB: 'But we do not want you to be uninformed, brethren, about those who are asleep, so that you will not grieve as do the rest who have no hope. For if we believe that Jesus died and rose again, even so God will bring with Him those who have fallen asleep in Jesus.',
    },
    context: {
      before: {
        reference: '1 Thessalonians 4:12',
        text: 'so that you may walk properly before outsiders and be dependent on no one.',
      },
      after: {
        reference: '1 Thessalonians 4:15',
        text: 'For this we declare to you by a word from the Lord, that we who are alive, who are left until the coming of the Lord, will not precede those who have fallen asleep.',
      },
    },
  },
  {
    id: '1-thessalonians-2-13',
    reference: '1 Thessalonians 2:13',
    book: '1 Thessalonians',
    chapter: 2,
    verse: 13,
    difficulty: 'medium',
    translations: {
      ESV: 'And we also thank God constantly for this, that when you received the word of God, which you heard from us, you accepted it not as the word of men but as what it really is, the word of God, which is at work in you believers.',
      NIV: 'And we also thank God continually because, when you received the word of God, which you heard from us, you accepted it not as a human word, but as it actually is, the word of God, which is indeed at work in you who believe.',
      KJV: 'For this cause also thank we God without ceasing, because, when ye received the word of God which ye heard of us, ye received it not as the word of men, but as it is in truth, the word of God, which effectually worketh also in you that believe.',
      NASB: 'For this reason we also constantly thank God that when you received the word of God which you heard from us, you accepted it not as the word of men, but for what it really is, the word of God, which also performs its work in you who believe.',
    },
    context: {
      before: {
        reference: '1 Thessalonians 2:12',
        text: 'exhorting and encouraging and insisting that you walk in a manner worthy of God, who calls you into his own kingdom and glory.',
      },
      after: {
        reference: '1 Thessalonians 2:14',
        text: 'For you, brothers, became imitators of the churches of God in Christ Jesus that are in Judea.',
      },
    },
  },

  {
    id: '1-thessalonians-1-5',
    reference: '1 Thessalonians 1:5',
    book: '1 Thessalonians',
    chapter: 1,
    verse: 5,
    difficulty: 'medium',
    translations: {
      ESV: 'because our gospel came to you not only in word, but also in power and in the Holy Spirit and with full conviction. You know what kind of men we proved to be among you for your sake.',
      NIV: 'because our gospel came to you not simply with words but also with power, with the Holy Spirit and deep conviction. You know how we lived among you for your sake.',
      KJV: 'For our gospel came not unto you in word only, but also in power, and in the Holy Ghost, and in much assurance; as ye know what manner of men we were among you for your sake.',
      NASB: 'for our gospel did not come to you in word only, but also in power and in the Holy Spirit and with full conviction; just as you know what kind of men we proved to be among you for your sake.',
    },
    context: {
      before: {
        reference: '1 Thessalonians 1:4',
        text: 'For we know, brothers loved by God, that he has chosen you.',
      },
      after: {
        reference: '1 Thessalonians 1:6',
        text: 'And you became imitators of us and of the Lord, for you received the word in much affliction, with the joy of the Holy Spirit.',
      },
    },
  },
  {
    id: '1-thessalonians-3-12-13',
    reference: '1 Thessalonians 3:12-13',
    book: '1 Thessalonians',
    chapter: 3,
    verse: 12,
    difficulty: 'medium',
    translations: {
      ESV: 'and may the Lord make you increase and abound in love for one another and for all, as we do for you, so that he may establish your hearts blameless in holiness before our God and Father, at the coming of our Lord Jesus with all his saints.',
      NIV: 'May the Lord make your love increase and overflow for each other and for everyone else, just as ours does for you. May he strengthen your hearts so that you will be blameless and holy in the presence of our God and Father when our Lord Jesus comes with all his holy ones.',
      KJV: 'And the Lord make you to increase and abound in love one toward another, and toward all men, even as we do toward you: To the end he may stablish your hearts unblameable in holiness before God, even our Father, at the coming of our Lord Jesus Christ with all his saints.',
      NASB: 'and may the Lord cause you to increase and abound in love for one another, and for all people, just as we also do for you; so that He may establish your hearts without blame in holiness before our God and Father at the coming of our Lord Jesus with all His saints.',
    },
    context: {
      before: {
        reference: '1 Thessalonians 3:11',
        text: 'Now may our God and Father himself, and our Lord Jesus, direct our way to you.',
      },
      after: {
        reference: '1 Thessalonians 4:1',
        text: 'Finally, then, brothers, we ask and urge you in the Lord Jesus, that as you received from us how you ought to walk and to please God, just as you are doing, that you do so more and more.',
      },
    },
  },
  {
    id: '1-thessalonians-4-7',
    reference: '1 Thessalonians 4:7',
    book: '1 Thessalonians',
    chapter: 4,
    verse: 7,
    difficulty: 'easy',
    translations: {
      ESV: 'For God has not called us for impurity, but in holiness.',
      NIV: 'For God did not call us to be impure, but to live a holy life.',
      KJV: 'For God hath not called us unto uncleanness, but unto holiness.',
      NASB: 'For God has not called us for the purpose of impurity, but in sanctification.',
    },
    context: {
      before: {
        reference: '1 Thessalonians 4:6',
        text: 'that no one transgress and wrong his brother in this matter, because the Lord is an avenger in all these things, as we told you beforehand and solemnly warned you.',
      },
      after: {
        reference: '1 Thessalonians 4:8',
        text: 'Therefore whoever disregards this, disregards not man but God, who gives his Holy Spirit to you.',
      },
    },
  },
  {
    id: '1-thessalonians-5-9',
    reference: '1 Thessalonians 5:9',
    book: '1 Thessalonians',
    chapter: 5,
    verse: 9,
    difficulty: 'easy',
    translations: {
      ESV: 'For God has not destined us for wrath, but to obtain salvation through our Lord Jesus Christ,',
      NIV: 'For God did not appoint us to suffer wrath but to receive salvation through our Lord Jesus Christ.',
      KJV: 'For God hath not appointed us to wrath, but to obtain salvation by our Lord Jesus Christ,',
      NASB: 'For God has not destined us for wrath, but for obtaining salvation through our Lord Jesus Christ,',
    },
    context: {
      before: {
        reference: '1 Thessalonians 5:8',
        text: 'But since we belong to the day, let us be sober, having put on the breastplate of faith and love, and for a helmet the hope of salvation.',
      },
      after: {
        reference: '1 Thessalonians 5:10',
        text: 'who died for us so that whether we are awake or asleep we might live with him.',
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
  {
    id: '2-thessalonians-2-13',
    reference: '2 Thessalonians 2:13',
    book: '2 Thessalonians',
    chapter: 2,
    verse: 13,
    difficulty: 'medium',
    translations: {
      ESV: 'But we ought always to give thanks to God for you, brothers beloved by the Lord, because God chose you as the firstfruits to be saved, through sanctification by the Spirit and belief in the truth.',
      NIV: 'But we ought always to thank God for you, brothers and sisters loved by the Lord, because God chose you as firstfruits to be saved through the sanctifying work of the Spirit and through belief in the truth.',
      KJV: 'But we are bound to give thanks alway to God for you, brethren beloved of the Lord, because God hath from the beginning chosen you to salvation through sanctification of the Spirit and belief of the truth.',
      NASB: 'But we should always give thanks to God for you, brethren beloved by the Lord, because God has chosen you from the beginning for salvation through sanctification by the Spirit and faith in the truth.',
    },
    context: {
      before: {
        reference: '2 Thessalonians 2:12',
        text: 'in order that all may be condemned who did not believe the truth but had pleasure in unrighteousness.',
      },
      after: {
        reference: '2 Thessalonians 2:14',
        text: 'To this he called you through our gospel, so that you may obtain the glory of our Lord Jesus Christ.',
      },
    },
  },
  {
    id: '2-thessalonians-3-5',
    reference: '2 Thessalonians 3:5',
    book: '2 Thessalonians',
    chapter: 3,
    verse: 5,
    difficulty: 'easy',
    translations: {
      ESV: 'May the Lord direct your hearts to the love of God and to the steadfastness of Christ.',
      NIV: 'May the Lord direct your hearts into God\'s love and Christ\'s perseverance.',
      KJV: 'And the Lord direct your hearts into the love of God, and into the patient waiting for Christ.',
      NASB: 'May the Lord direct your hearts into the love of God and into the steadfastness of Christ.',
    },
    context: {
      before: {
        reference: '2 Thessalonians 3:4',
        text: 'And we have confidence in the Lord about you, that you are doing and will do the things that we command.',
      },
      after: {
        reference: '2 Thessalonians 3:6',
        text: 'Now we command you, brothers, in the name of our Lord Jesus Christ, that you keep away from any brother who is walking in idleness.',
      },
    },
  },
  {
    id: '2-thessalonians-2-15',
    reference: '2 Thessalonians 2:15',
    book: '2 Thessalonians',
    chapter: 2,
    verse: 15,
    difficulty: 'medium',
    translations: {
      ESV: 'So then, brothers, stand firm and hold to the traditions that you were taught by us, either by our spoken word or by our letter.',
      NIV: 'So then, brothers and sisters, stand firm and hold fast to the teachings we passed on to you, whether by word of mouth or by letter.',
      KJV: 'Therefore, brethren, stand fast, and hold the traditions which ye have been taught, whether by word, or our epistle.',
      NASB: 'So then, brethren, stand firm and hold to the traditions which you were taught, whether by word of mouth or by letter from us.',
    },
    context: {
      before: {
        reference: '2 Thessalonians 2:14',
        text: 'To this he called you through our gospel, so that you may obtain the glory of our Lord Jesus Christ.',
      },
      after: {
        reference: '2 Thessalonians 2:16',
        text: 'Now may our Lord Jesus Christ himself, and God our Father, who loved us and gave us eternal comfort and good hope through grace.',
      },
    },
  },

  {
    id: '2-thessalonians-1-3',
    reference: '2 Thessalonians 1:3',
    book: '2 Thessalonians',
    chapter: 1,
    verse: 3,
    difficulty: 'medium',
    translations: {
      ESV: 'We ought always to give thanks to God for you, brothers, as is right, because your faith is growing abundantly, and the love of every one of you for one another is increasing.',
      NIV: 'We ought always to thank God for you, brothers and sisters, and rightly so, because your faith is growing more and more, and the love all of you have for one another is increasing.',
      KJV: 'We are bound to thank God always for you, brethren, as it is meet, because that your faith groweth exceedingly, and the charity of every one of you all toward each other aboundeth;',
      NASB: 'We ought always to give thanks to God for you, brethren, as is only fitting, because your faith is greatly enlarged, and the love of each one of you toward one another grows ever greater;',
    },
    context: {
      before: {
        reference: '2 Thessalonians 1:2',
        text: 'Grace to you and peace from God our Father and the Lord Jesus Christ.',
      },
      after: {
        reference: '2 Thessalonians 1:4',
        text: 'Therefore we ourselves boast about you in the churches of God for your steadfastness and faith in all your persecutions and in the afflictions that you are enduring.',
      },
    },
  },
  {
    id: '2-thessalonians-2-1-2',
    reference: '2 Thessalonians 2:1-2',
    book: '2 Thessalonians',
    chapter: 2,
    verse: 1,
    difficulty: 'medium',
    translations: {
      ESV: 'Now concerning the coming of our Lord Jesus Christ and our being gathered together to him, we ask you, brothers, not to be quickly shaken in mind or alarmed, either by a spirit or a spoken word, or a letter seeming to be from us, to the effect that the day of the Lord has come.',
      NIV: 'Concerning the coming of our Lord Jesus Christ and our being gathered to him, we ask you, brothers and sisters, not to become easily unsettled or alarmed by the teaching allegedly from us—whether by a prophecy or by word of mouth or by letter—asserting that the day of the Lord has already come.',
      KJV: 'Now we beseech you, brethren, by the coming of our Lord Jesus Christ, and by our gathering together unto him, That ye be not soon shaken in mind, or be troubled, neither by spirit, nor by word, nor by letter as from us, as that the day of Christ is at hand.',
      NASB: 'Now we request you, brethren, with regard to the coming of our Lord Jesus Christ and our gathering together to Him, that you not be quickly shaken from your composure or be disturbed either by a spirit or a message or a letter as if from us, to the effect that the day of the Lord has come.',
    },
    context: {
      before: {
        reference: '2 Thessalonians 1:12',
        text: 'so that the name of our Lord Jesus may be glorified in you, and you in him, according to the grace of our God and the Lord Jesus Christ.',
      },
      after: {
        reference: '2 Thessalonians 2:3',
        text: 'Let no one deceive you in any way. For that day will not come, unless the rebellion comes first, and the man of lawlessness is revealed.',
      },
    },
  },
  {
    id: '2-thessalonians-3-13',
    reference: '2 Thessalonians 3:13',
    book: '2 Thessalonians',
    chapter: 3,
    verse: 13,
    difficulty: 'easy',
    translations: {
      ESV: 'As for you, brothers, do not grow weary in doing good.',
      NIV: 'And as for you, brothers and sisters, never tire of doing what is good.',
      KJV: 'But ye, brethren, be not weary in well doing.',
      NASB: 'But as for you, brethren, do not grow weary of doing good.',
    },
    context: {
      before: {
        reference: '2 Thessalonians 3:12',
        text: 'Now such persons we command and encourage in the Lord Jesus Christ to do their work quietly and to earn their own living.',
      },
      after: {
        reference: '2 Thessalonians 3:14',
        text: 'If anyone does not obey what we say in this letter, take note of that person, and have nothing to do with him, that he may be ashamed.',
      },
    },
  },
  {
    id: '2-thessalonians-3-16',
    reference: '2 Thessalonians 3:16',
    book: '2 Thessalonians',
    chapter: 3,
    verse: 16,
    difficulty: 'easy',
    translations: {
      ESV: 'Now may the Lord of peace himself give you peace at all times in every way. The Lord be with you all.',
      NIV: 'Now may the Lord of peace himself give you peace at all times and in every situation. The Lord be with all of you.',
      KJV: 'Now the Lord of peace himself give you peace always by all means. The Lord be with you all.',
      NASB: 'Now may the Lord of peace Himself continually grant you peace in every circumstance. The Lord be with you all!',
    },
    context: {
      before: {
        reference: '2 Thessalonians 3:15',
        text: 'Do not regard him as an enemy, but warn him as a brother.',
      },
      after: {
        reference: '2 Thessalonians 3:17',
        text: 'I, Paul, write this greeting with my own hand. This is the sign of genuineness in every letter of mine; it is the way I write.',
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
  {
    id: '1-timothy-1-15',
    reference: '1 Timothy 1:15',
    book: '1 Timothy',
    chapter: 1,
    verse: 15,
    difficulty: 'medium',
    translations: {
      ESV: 'The saying is trustworthy and deserving of full acceptance, that Christ Jesus came into the world to save sinners, of whom I am the foremost.',
      NIV: 'Here is a trustworthy saying that deserves full acceptance: Christ Jesus came into the world to save sinners—of whom I am the worst.',
      KJV: 'This is a faithful saying, and worthy of all acceptation, that Christ Jesus came into the world to save sinners; of whom I am chief.',
      NASB: 'It is a trustworthy statement, deserving full acceptance, that Christ Jesus came into the world to save sinners, among whom I am foremost of all.',
    },
    context: {
      before: {
        reference: '1 Timothy 1:14',
        text: 'and the grace of our Lord overflowed for me with the faith and love that are in Christ Jesus.',
      },
      after: {
        reference: '1 Timothy 1:16',
        text: 'But I received mercy for this reason, that in me, as the foremost, Jesus Christ might display his perfect patience as an example to those who were to believe in him for eternal life.',
      },
    },
  },
  {
    id: '1-timothy-4-8',
    reference: '1 Timothy 4:8',
    book: '1 Timothy',
    chapter: 4,
    verse: 8,
    difficulty: 'medium',
    translations: {
      ESV: 'for while bodily training is of some value, godliness is of value in every way, as it holds promise for the present life and also for the life to come.',
      NIV: 'For physical training is of some value, but godliness has value for all things, holding promise for both the present life and the life to come.',
      KJV: 'For bodily exercise profiteth little: but godliness is profitable unto all things, having promise of the life that now is, and of that which is to come.',
      NASB: 'for bodily discipline is only of little profit, but godliness is profitable for all things, since it holds promise for the present life and also for the life to come.',
    },
    context: {
      before: {
        reference: '1 Timothy 4:7',
        text: 'Have nothing to do with irreverent, silly myths. Rather train yourself for godliness;',
      },
      after: {
        reference: '1 Timothy 4:9',
        text: 'The saying is trustworthy and deserving of full acceptance.',
      },
    },
  },
  {
    id: '1-timothy-6-6',
    reference: '1 Timothy 6:6',
    book: '1 Timothy',
    chapter: 6,
    verse: 6,
    difficulty: 'easy',
    translations: {
      ESV: 'But godliness with contentment is great gain,',
      NIV: 'But godliness with contentment is great gain.',
      KJV: 'But godliness with contentment is great gain.',
      NASB: 'But godliness actually is a means of great gain when accompanied by contentment.',
    },
    context: {
      before: {
        reference: '1 Timothy 6:5',
        text: 'and constant friction among people who are depraved in mind and deprived of the truth, imagining that godliness is a means of gain.',
      },
      after: {
        reference: '1 Timothy 6:7',
        text: 'for we brought nothing into the world, and we cannot take anything out of the world.',
      },
    },
  },
  {
    id: '1-timothy-6-10',
    reference: '1 Timothy 6:10',
    book: '1 Timothy',
    chapter: 6,
    verse: 10,
    difficulty: 'medium',
    translations: {
      ESV: 'For the love of money is a root of all kinds of evils. It is through this craving that some have wandered away from the faith and pierced themselves with many pangs.',
      NIV: 'For the love of money is a root of all kinds of evil. Some people, eager for money, have wandered from the faith and pierced themselves with many griefs.',
      KJV: 'For the love of money is the root of all evil: which while some coveted after, they have erred from the faith, and pierced themselves through with many sorrows.',
      NASB: 'For the love of money is a root of all sorts of evil, and some by longing for it have wandered away from the faith and pierced themselves with many griefs.',
    },
    context: {
      before: {
        reference: '1 Timothy 6:9',
        text: 'But those who desire to be rich fall into temptation, into a snare, into many senseless and harmful desires that plunge people into ruin and destruction.',
      },
      after: {
        reference: '1 Timothy 6:11',
        text: 'But as for you, O man of God, flee these things. Pursue righteousness, godliness, faith, love, steadfastness, gentleness.',
      },
    },
  },

  {
    id: '1-timothy-1-17',
    reference: '1 Timothy 1:17',
    book: '1 Timothy',
    chapter: 1,
    verse: 17,
    difficulty: 'medium',
    translations: {
      ESV: 'To the King of the ages, immortal, invisible, the only God, be honor and glory forever and ever. Amen.',
      NIV: 'Now to the King eternal, immortal, invisible, the only God, be honor and glory for ever and ever. Amen.',
      KJV: 'Now unto the King eternal, immortal, invisible, the only wise God, be honour and glory for ever and ever. Amen.',
      NASB: 'Now to the King eternal, immortal, invisible, the only God, be honor and glory forever and ever. Amen.',
    },
    context: {
      before: {
        reference: '1 Timothy 1:16',
        text: 'But I received mercy for this reason, that in me, as the foremost, Jesus Christ might display his perfect patience as an example to those who were to believe in him for eternal life.',
      },
      after: {
        reference: '1 Timothy 1:18',
        text: 'This charge I entrust to you, Timothy, my child, in accordance with the prophecies previously made about you, that by them you may wage the good warfare.',
      },
    },
  },
  {
    id: '1-timothy-2-1-2',
    reference: '1 Timothy 2:1-2',
    book: '1 Timothy',
    chapter: 2,
    verse: 1,
    difficulty: 'medium',
    translations: {
      ESV: 'First of all, then, I urge that supplications, prayers, intercessions, and thanksgivings be made for all people, for kings and all who are in high positions, that we may lead a peaceful and quiet life, godly and dignified in every way.',
      NIV: 'I urge, then, first of all, that petitions, prayers, intercession and thanksgiving be made for all people— for kings and all those in authority, that we may live peaceful and quiet lives in all godliness and holiness.',
      KJV: 'I exhort therefore, that, first of all, supplications, prayers, intercessions, and giving of thanks, be made for all men; For kings, and for all that are in authority; that we may lead a quiet and peaceable life in all godliness and honesty.',
      NASB: 'First of all, then, I urge that entreaties and prayers, petitions and thanksgivings, be made on behalf of all men, for kings and all who are in authority, so that we may lead a tranquil and quiet life in all godliness and dignity.',
    },
    context: {
      before: {
        reference: '1 Timothy 1:20',
        text: 'among whom are Hymenaeus and Alexander, whom I have handed over to Satan that they may learn not to blaspheme.',
      },
      after: {
        reference: '1 Timothy 2:3',
        text: 'This is good, and it is pleasing in the sight of God our Savior,',
      },
    },
  },
  {
    id: '1-timothy-6-11',
    reference: '1 Timothy 6:11',
    book: '1 Timothy',
    chapter: 6,
    verse: 11,
    difficulty: 'medium',
    translations: {
      ESV: 'But as for you, O man of God, flee these things. Pursue righteousness, godliness, faith, love, steadfastness, gentleness.',
      NIV: 'But you, man of God, flee from all this, and pursue righteousness, godliness, faith, love, endurance and gentleness.',
      KJV: 'But thou, O man of God, flee these things; and follow after righteousness, godliness, faith, love, patience, meekness.',
      NASB: 'But flee from these things, you man of God, and pursue righteousness, godliness, faith, love, perseverance and gentleness.',
    },
    context: {
      before: {
        reference: '1 Timothy 6:10',
        text: 'For the love of money is a root of all kinds of evils. It is through this craving that some have wandered away from the faith and pierced themselves with many pangs.',
      },
      after: {
        reference: '1 Timothy 6:12',
        text: 'Fight the good fight of the faith. Take hold of the eternal life to which you were called and about which you made the good confession in the presence of many witnesses.',
      },
    },
  },
  {
    id: '1-timothy-4-16',
    reference: '1 Timothy 4:16',
    book: '1 Timothy',
    chapter: 4,
    verse: 16,
    difficulty: 'medium',
    translations: {
      ESV: 'Keep a close watch on yourself and on the teaching. Persist in this, for by so doing you will save both yourself and your hearers.',
      NIV: 'Watch your life and doctrine closely. Persevere in them, because if you do, you will save both yourself and your hearers.',
      KJV: 'Take heed unto thyself, and unto the doctrine; continue in them: for in doing this thou shalt both save thyself, and them that hear thee.',
      NASB: 'Pay close attention to yourself and to your teaching; persevere in these things, for as you do this you will ensure salvation both for yourself and for those who hear you.',
    },
    context: {
      before: {
        reference: '1 Timothy 4:15',
        text: 'Practice these things, immerse yourself in them, so that all may see your progress.',
      },
      after: {
        reference: '1 Timothy 5:1',
        text: 'Do not rebuke an older man but encourage him as you would a father, younger men as brothers.',
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
  {
    id: '2-timothy-1-9',
    reference: '2 Timothy 1:9',
    book: '2 Timothy',
    chapter: 1,
    verse: 9,
    difficulty: 'hard',
    translations: {
      ESV: 'who saved us and called us to a holy calling, not because of our works but because of his own purpose and grace, which he gave us in Christ Jesus before the ages began,',
      NIV: 'He has saved us and called us to a holy life—not because of anything we have done but because of his own purpose and grace. This grace was given us in Christ Jesus before the beginning of time,',
      KJV: 'Who hath saved us, and called us with an holy calling, not according to our works, but according to his own purpose and grace, which was given us in Christ Jesus before the world began,',
      NASB: 'who has saved us and called us with a holy calling, not according to our works, but according to His own purpose and grace which was granted us in Christ Jesus from all eternity,',
    },
    context: {
      before: {
        reference: '2 Timothy 1:8',
        text: 'Therefore do not be ashamed of the testimony about our Lord, nor of me his prisoner, but share in suffering for the gospel by the power of God,',
      },
      after: {
        reference: '2 Timothy 1:10',
        text: 'and which now has been manifested through the appearing of our Savior Christ Jesus, who abolished death and brought life and immortality to light through the gospel,',
      },
    },
  },
  {
    id: '2-timothy-2-22',
    reference: '2 Timothy 2:22',
    book: '2 Timothy',
    chapter: 2,
    verse: 22,
    difficulty: 'medium',
    translations: {
      ESV: 'So flee youthful passions and pursue righteousness, faith, love, and peace, along with those who call on the Lord from a pure heart.',
      NIV: 'Flee the evil desires of youth and pursue righteousness, faith, love and peace, along with those who call on the Lord out of a pure heart.',
      KJV: 'Flee also youthful lusts: but follow righteousness, faith, charity, peace, with them that call on the Lord out of a pure heart.',
      NASB: 'Now flee from youthful lusts and pursue righteousness, faith, love and peace, with those who call on the Lord from a pure heart.',
    },
    context: {
      before: {
        reference: '2 Timothy 2:21',
        text: 'Therefore, if anyone cleanses himself from what is dishonorable, he will be a vessel for honorable use, set apart as holy, useful to the master of the house, ready for every good work.',
      },
      after: {
        reference: '2 Timothy 2:23',
        text: 'Have nothing to do with foolish, ignorant controversies; you know that they breed quarrels.',
      },
    },
  },
  {
    id: '2-timothy-3-17',
    reference: '2 Timothy 3:17',
    book: '2 Timothy',
    chapter: 3,
    verse: 17,
    difficulty: 'easy',
    translations: {
      ESV: 'that the man of God may be complete, equipped for every good work.',
      NIV: 'so that the servant of God may be thoroughly equipped for every good work.',
      KJV: 'That the man of God may be perfect, thoroughly furnished unto all good works.',
      NASB: 'so that the man of God may be adequate, equipped for every good work.',
    },
    context: {
      before: {
        reference: '2 Timothy 3:16',
        text: 'All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness,',
      },
      after: {
        reference: '2 Timothy 4:1',
        text: 'I charge you in the presence of God and of Christ Jesus, who is to judge the living and the dead, and by his appearing and his kingdom:',
      },
    },
  },
  {
    id: '2-timothy-4-2',
    reference: '2 Timothy 4:2',
    book: '2 Timothy',
    chapter: 4,
    verse: 2,
    difficulty: 'medium',
    translations: {
      ESV: 'preach the word; be ready in season and out of season; reprove, rebuke, and exhort, with complete patience and teaching.',
      NIV: 'Preach the word; be prepared in season and out of season; correct, rebuke and encourage—with great patience and careful instruction.',
      KJV: 'Preach the word; be instant in season, out of season; reprove, rebuke, exhort with all long suffering and doctrine.',
      NASB: 'preach the word; be ready in season and out of season; reprove, rebuke, exhort, with great patience and instruction.',
    },
    context: {
      before: {
        reference: '2 Timothy 4:1',
        text: 'I charge you in the presence of God and of Christ Jesus, who is to judge the living and the dead, and by his appearing and his kingdom:',
      },
      after: {
        reference: '2 Timothy 4:3',
        text: 'For the time is coming when people will not endure sound teaching, but having itching ears they will accumulate for themselves teachers to suit their own passions,',
      },
    },
  },

  {
    id: '2-timothy-1-12',
    reference: '2 Timothy 1:12',
    book: '2 Timothy',
    chapter: 1,
    verse: 12,
    difficulty: 'medium',
    translations: {
      ESV: 'which is why I suffer as I do. But I am not ashamed, for I know whom I have believed, and I am convinced that he is able to guard until that day what has been entrusted to me.',
      NIV: 'That is why I am suffering as I am. Yet this is no cause for shame, because I know whom I have believed, and am convinced that he is able to guard what I have entrusted to him until that day.',
      KJV: 'For the which cause I also suffer these things: nevertheless I am not ashamed: for I know whom I have believed, and am persuaded that he is able to keep that which I have committed unto him against that day.',
      NASB: 'For this reason I also suffer these things, but I am not ashamed; for I know whom I have believed and I am convinced that He is able to guard what I have entrusted to Him until that day.',
    },
    context: {
      before: {
        reference: '2 Timothy 1:11',
        text: 'for which I was appointed a preacher and apostle and teacher.',
      },
      after: {
        reference: '2 Timothy 1:13',
        text: 'Follow the pattern of the sound words that you have heard from me, in the faith and love that are in Christ Jesus.',
      },
    },
  },
  {
    id: '2-timothy-2-11-12',
    reference: '2 Timothy 2:11-12',
    book: '2 Timothy',
    chapter: 2,
    verse: 11,
    difficulty: 'medium',
    translations: {
      ESV: 'The saying is trustworthy, for: If we have died with him, we will also live with him; if we endure, we will also reign with him; if we deny him, he also will deny us;',
      NIV: 'Here is a trustworthy saying: If we died with him, we will also live with him; if we endure, we will also reign with him. If we disown him, he will also disown us;',
      KJV: 'It is a faithful saying: For if we be dead with him, we shall also live with him: If we suffer, we shall also reign with him: if we deny him, he also will deny us:',
      NASB: 'It is a trustworthy statement: For if we died with Him, we will also live with Him; If we endure, we will also reign with Him; If we deny Him, He also will deny us;',
    },
    context: {
      before: {
        reference: '2 Timothy 2:10',
        text: 'Therefore I endure everything for the sake of the elect, that they also may obtain the salvation that is in Christ Jesus with eternal glory.',
      },
      after: {
        reference: '2 Timothy 2:13',
        text: 'if we are faithless, he remains faithful—for he cannot deny himself.',
      },
    },
  },
  {
    id: '2-timothy-4-8',
    reference: '2 Timothy 4:8',
    book: '2 Timothy',
    chapter: 4,
    verse: 8,
    difficulty: 'medium',
    translations: {
      ESV: 'Henceforth there is laid up for me the crown of righteousness, which the Lord, the righteous judge, will award to me on that day, and not only to me but also to all who have loved his appearing.',
      NIV: 'Now there is in store for me the crown of righteousness, which the Lord, the righteous Judge, will award to me on that day—and not only to me, but also to all who have longed for his appearing.',
      KJV: 'Henceforth there is laid up for me a crown of righteousness, which the Lord, the righteous judge, shall give me at that day: and not to me only, but unto all them also that love his appearing.',
      NASB: 'in the future there is laid up for me the crown of righteousness, which the Lord, the righteous Judge, will award to me on that day; and not only to me, but also to all who have loved His appearing.',
    },
    context: {
      before: {
        reference: '2 Timothy 4:7',
        text: 'I have fought the good fight, I have finished the race, I have kept the faith.',
      },
      after: {
        reference: '2 Timothy 4:9',
        text: 'Do your best to come to me soon.',
      },
    },
  },
  {
    id: '2-timothy-3-12',
    reference: '2 Timothy 3:12',
    book: '2 Timothy',
    chapter: 3,
    verse: 12,
    difficulty: 'medium',
    translations: {
      ESV: 'Indeed, all who desire to live a godly life in Christ Jesus will be persecuted,',
      NIV: 'In fact, everyone who wants to live a godly life in Christ Jesus will be persecuted,',
      KJV: 'Yea, and all that will live godly in Christ Jesus shall suffer persecution.',
      NASB: 'Indeed, all who desire to live godly in Christ Jesus will be persecuted.',
    },
    context: {
      before: {
        reference: '2 Timothy 3:11',
        text: 'my persecutions and sufferings that happened to me at Antioch, at Iconium, and at Lystra—which persecutions I endured; yet from them all the Lord rescued me.',
      },
      after: {
        reference: '2 Timothy 3:13',
        text: 'while evil people and impostors will go on from bad to worse, deceiving and being deceived.',
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
  {
    id: 'titus-2-13',
    reference: 'Titus 2:13',
    book: 'Titus',
    chapter: 2,
    verse: 13,
    difficulty: 'medium',
    translations: {
      ESV: 'waiting for our blessed hope, the appearing of the glory of our great God and Savior Jesus Christ,',
      NIV: 'while we wait for the blessed hope—the appearing of the glory of our great God and Savior, Jesus Christ,',
      KJV: 'Looking for that blessed hope, and the glorious appearing of the great God and our Saviour Jesus Christ;',
      NASB: 'looking for the blessed hope and the appearing of the glory of our great God and Savior, Christ Jesus,',
    },
    context: {
      before: {
        reference: 'Titus 2:12',
        text: 'training us to renounce ungodliness and worldly passions, and to live self-controlled, upright, and godly lives in the present age,',
      },
      after: {
        reference: 'Titus 2:14',
        text: 'who gave himself for us to redeem us from all lawlessness and to purify for himself a people for his own possession who are zealous for good works.',
      },
    },
  },
  {
    id: 'titus-3-4-7',
    reference: 'Titus 3:4-7',
    book: 'Titus',
    chapter: 3,
    verse: 4,
    difficulty: 'hard',
    translations: {
      ESV: 'But when the goodness and loving kindness of God our Savior appeared, he saved us, not because of works done by us in righteousness, but according to his own mercy, by the washing of regeneration and renewal of the Holy Spirit, whom he poured out on us richly through Jesus Christ our Savior, so that being justified by his grace we might become heirs according to the hope of eternal life.',
      NIV: 'But when the kindness and love of God our Savior appeared, he saved us, not because of righteous things we had done, but because of his mercy. He saved us through the washing of rebirth and renewal by the Holy Spirit, whom he poured out on us generously through Jesus Christ our Savior, so that, having been justified by his grace, we might become heirs having the hope of eternal life.',
      KJV: 'But after that the kindness and love of God our Saviour toward man appeared, Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost; Which he shed on us abundantly through Jesus Christ our Saviour; That being justified by his grace, we should be made heirs according to the hope of eternal life.',
      NASB: 'But when the kindness of God our Savior and His love for mankind appeared, He saved us, not on the basis of deeds which we have done in righteousness, but according to His mercy, by the washing of regeneration and renewing by the Holy Spirit, whom He poured out upon us richly through Jesus Christ our Savior, so that being justified by His grace we would be made heirs according to the hope of eternal life.',
    },
    context: {
      before: {
        reference: 'Titus 3:3',
        text: 'For we ourselves were once foolish, disobedient, led astray, slaves to various passions and pleasures, passing our days in malice and envy, hated by others and hating one another.',
      },
      after: {
        reference: 'Titus 3:8',
        text: 'The saying is trustworthy, and I want you to insist on these things, so that those who have believed in God may be careful to devote themselves to good works.',
      },
    },
  },
  {
    id: 'titus-1-9',
    reference: 'Titus 1:9',
    book: 'Titus',
    chapter: 1,
    verse: 9,
    difficulty: 'medium',
    translations: {
      ESV: 'He must hold firm to the trustworthy word as taught, so that he may be able to give instruction in sound doctrine and also to rebuke those who contradict it.',
      NIV: 'He must hold firmly to the trustworthy message as it has been taught, so that he can encourage others by sound doctrine and refute those who oppose it.',
      KJV: 'Holding fast the faithful word as he hath been taught, that he may be able by sound doctrine both to exhort and to convince the gainsayers.',
      NASB: 'holding fast the faithful word which is in accordance with the teaching, so that he will be able both to exhort in sound doctrine and to refute those who contradict.',
    },
    context: {
      before: {
        reference: 'Titus 1:8',
        text: 'but hospitable, a lover of good, self-controlled, upright, holy, and disciplined.',
      },
      after: {
        reference: 'Titus 1:10',
        text: 'For there are many who are insubordinate, empty talkers and deceivers, especially those of the circumcision party.',
      },
    },
  },
  {
    id: 'titus-2-1',
    reference: 'Titus 2:1',
    book: 'Titus',
    chapter: 2,
    verse: 1,
    difficulty: 'easy',
    translations: {
      ESV: 'But as for you, teach what accords with sound doctrine.',
      NIV: 'You, however, must teach what is appropriate to sound doctrine.',
      KJV: 'But speak thou the things which become sound doctrine:',
      NASB: 'But as for you, speak the things which are fitting for sound doctrine.',
    },
    context: {
      before: {
        reference: 'Titus 1:16',
        text: 'They profess to know God, but they deny him by their works. They are detestable, disobedient, unfit for any good work.',
      },
      after: {
        reference: 'Titus 2:2',
        text: 'Older men are to be sober-minded, dignified, self-controlled, sound in faith, in love, and in steadfastness.',
      },
    },
  },

  {
    id: 'titus-3-3',
    reference: 'Titus 3:3',
    book: 'Titus',
    chapter: 3,
    verse: 3,
    difficulty: 'medium',
    translations: {
      ESV: 'For we ourselves were once foolish, disobedient, led astray, slaves to various passions and pleasures, passing our days in malice and envy, hated by others and hating one another.',
      NIV: 'At one time we too were foolish, disobedient, deceived and enslaved by all kinds of passions and pleasures. We lived in malice and envy, being hated and hating one another.',
      KJV: 'For we ourselves also were sometimes foolish, disobedient, deceived, serving divers lusts and pleasures, living in malice and envy, hateful, and hating one another.',
      NASB: 'For we also once were foolish ourselves, disobedient, deceived, enslaved to various lusts and pleasures, spending our life in malice and envy, hateful, hating one another.',
    },
    context: {
      before: {
        reference: 'Titus 3:2',
        text: 'to speak evil of no one, to avoid quarreling, to be gentle, and to show perfect courtesy toward all people.',
      },
      after: {
        reference: 'Titus 3:4',
        text: 'But when the goodness and loving kindness of God our Savior appeared,',
      },
    },
  },
  {
    id: 'titus-1-15',
    reference: 'Titus 1:15',
    book: 'Titus',
    chapter: 1,
    verse: 15,
    difficulty: 'medium',
    translations: {
      ESV: 'To the pure, all things are pure, but to the defiled and unbelieving, nothing is pure; but both their minds and their consciences are defiled.',
      NIV: 'To the pure, all things are pure, but to those who are corrupted and do not believe, nothing is pure. In fact, both their minds and consciences are corrupted.',
      KJV: 'Unto the pure all things are pure: but unto them that are defiled and unbelieving is nothing pure; but even their mind and conscience is defiled.',
      NASB: 'To the pure, all things are pure; but to those who are defiled and unbelieving, nothing is pure, but both their mind and their conscience are defiled.',
    },
    context: {
      before: {
        reference: 'Titus 1:14',
        text: 'not devoting themselves to Jewish myths and the commands of people who turn away from the truth.',
      },
      after: {
        reference: 'Titus 1:16',
        text: 'They profess to know God, but they deny him by their works. They are detestable, disobedient, unfit for any good work.',
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
  {
    id: 'philemon-7',
    reference: 'Philemon 7',
    book: 'Philemon',
    chapter: 1,
    verse: 7,
    difficulty: 'easy',
    translations: {
      ESV: 'For I have derived much joy and comfort from your love, my brother, because the hearts of the saints have been refreshed through you.',
      NIV: 'Your love has given me great joy and encouragement, because you, brother, have refreshed the hearts of the Lord\'s people.',
      KJV: 'For we have great joy and consolation in thy love, because the bowels of the saints are refreshed by thee, brother.',
      NASB: 'For I have come to have much joy and comfort in your love, because the hearts of the saints have been refreshed through you, brother.',
    },
    context: {
      before: {
        reference: 'Philemon 6',
        text: 'and I pray that the sharing of your faith may become effective for the full knowledge of every good thing that is in us for the sake of Christ.',
      },
      after: {
        reference: 'Philemon 8',
        text: 'Accordingly, though I am bold enough in Christ to command you to do what is required,',
      },
    },
  },
  {
    id: 'philemon-10-11',
    reference: 'Philemon 10-11',
    book: 'Philemon',
    chapter: 1,
    verse: 10,
    difficulty: 'medium',
    translations: {
      ESV: 'I appeal to you for my child, Onesimus, whose father I became in my imprisonment. Formerly he was useless to you, but now he is indeed useful to you and to me.',
      NIV: 'I appeal to you for my son Onesimus, who became my son while I was in chains. Formerly he was useless to you, but now he has become useful both to you and to me.',
      KJV: 'I beseech thee for my son Onesimus, whom I have begotten in my bonds: Which in time past was to thee unprofitable, but now profitable to thee and to me.',
      NASB: 'I appeal to you for my child Onesimus, whom I have begotten in my imprisonment, who formerly was useless to you, but now is useful both to you and to me.',
    },
    context: {
      before: {
        reference: 'Philemon 9',
        text: 'yet for love\'s sake I prefer to appeal to you—I, Paul, an old man and now a prisoner also for Christ Jesus—',
      },
      after: {
        reference: 'Philemon 12',
        text: 'I am sending him back to you, sending my very heart.',
      },
    },
  },
  {
    id: 'philemon-18-19',
    reference: 'Philemon 18-19',
    book: 'Philemon',
    chapter: 1,
    verse: 18,
    difficulty: 'medium',
    translations: {
      ESV: 'If he has wronged you at all, or owes you anything, charge that to my account. I, Paul, write this with my own hand: I will repay it—to say nothing of your owing me even your own self.',
      NIV: 'If he has done you any wrong or owes you anything, charge it to me. I, Paul, am writing this with my own hand. I will pay it back—not to mention that you owe me your very self.',
      KJV: 'If he hath wronged thee, or oweth thee ought, put that on mine account; I Paul have written it with mine own hand, I will repay it: albeit I do not say to thee how thou owest unto me even thine own self besides.',
      NASB: 'But if he has wronged you in any way or owes you anything, charge that to my account; I, Paul, am writing this with my own hand, I will repay it (not to mention to you that you owe to me even your own self as well).',
    },
    context: {
      before: {
        reference: 'Philemon 17',
        text: 'So if you consider me your partner, receive him as you would receive me.',
      },
      after: {
        reference: 'Philemon 20',
        text: 'Yes, brother, I want some benefit from you in the Lord. Refresh my heart in Christ.',
      },
    },
  },
  {
    id: 'philemon-20',
    reference: 'Philemon 20',
    book: 'Philemon',
    chapter: 1,
    verse: 20,
    difficulty: 'easy',
    translations: {
      ESV: 'Yes, brother, I want some benefit from you in the Lord. Refresh my heart in Christ.',
      NIV: 'I do wish, brother, that I may have some benefit from you in the Lord; refresh my heart in Christ.',
      KJV: 'Yea, brother, let me have joy of thee in the Lord: refresh my bowels in the Lord.',
      NASB: 'Yes, brother, let me benefit from you in the Lord; refresh my heart in Christ.',
    },
    context: {
      before: {
        reference: 'Philemon 19',
        text: 'I, Paul, write this with my own hand: I will repay it—to say nothing of your owing me even your own self.',
      },
      after: {
        reference: 'Philemon 21',
        text: 'Confident of your obedience, I write to you, knowing that you will do even more than I say.',
      },
    },
  },
  {
    id: 'philemon-16',
    reference: 'Philemon 16',
    book: 'Philemon',
    chapter: 1,
    verse: 16,
    difficulty: 'medium',
    translations: {
      ESV: 'no longer as a bondservant but more than a bondservant, as a beloved brother—especially to me, but how much more to you, both in the flesh and in the Lord.',
      NIV: 'no longer as a slave, but better than a slave, as a dear brother. He is very dear to me but even dearer to you, both as a fellow man and as a brother in the Lord.',
      KJV: 'Not now as a servant, but above a servant, a brother beloved, specially to me, but how much more unto thee, both in the flesh, and in the Lord?',
      NASB: 'no longer as a slave, but more than a slave, a beloved brother, especially to me, but how much more to you, both in the flesh and in the Lord.',
    },
    context: {
      before: {
        reference: 'Philemon 15',
        text: 'For this perhaps is why he was parted from you for a while, that you might have him back forever,',
      },
      after: {
        reference: 'Philemon 17',
        text: 'So if you consider me your partner, receive him as you would receive me.',
      },
    },
  },
  {
    id: 'philemon-21',
    reference: 'Philemon 21',
    book: 'Philemon',
    chapter: 1,
    verse: 21,
    difficulty: 'easy',
    translations: {
      ESV: 'Confident of your obedience, I write to you, knowing that you will do even more than I say.',
      NIV: 'Confident of your obedience, I write to you, knowing that you will do even more than I ask.',
      KJV: 'Having confidence in thy obedience I wrote unto thee, knowing that thou wilt also do more than I say.',
      NASB: 'Having confidence in your obedience, I write to you, since I know that you will do even more than what I say.',
    },
    context: {
      before: {
        reference: 'Philemon 20',
        text: 'Yes, brother, I want some benefit from you in the Lord. Refresh my heart in Christ.',
      },
      after: {
        reference: 'Philemon 22',
        text: 'At the same time, prepare a guest room for me, for I am hoping that through your prayers I will be graciously given to you.',
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
  {
    id: 'hebrews-3-13',
    reference: 'Hebrews 3:13',
    book: 'Hebrews',
    chapter: 3,
    verse: 13,
    difficulty: 'medium',
    translations: {
      ESV: 'But exhort one another every day, as long as it is called "today," that none of you may be hardened by the deceitfulness of sin.',
      NIV: 'But encourage one another daily, as long as it is called "Today," so that none of you may be hardened by sin\'s deceitfulness.',
      KJV: 'But exhort one another daily, while it is called To day; lest any of you be hardened through the deceitfulness of sin.',
      NASB: 'But encourage one another day after day, as long as it is still called "Today," so that none of you will be hardened by the deceitfulness of sin.',
    },
    context: {
      before: {
        reference: 'Hebrews 3:12',
        text: 'Take care, brothers, lest there be in any of you an evil, unbelieving heart, leading you to fall away from the living God.',
      },
      after: {
        reference: 'Hebrews 3:14',
        text: 'For we have come to share in Christ, if indeed we hold our original confidence firm to the end.',
      },
    },
  },
  {
    id: 'hebrews-5-8-9',
    reference: 'Hebrews 5:8-9',
    book: 'Hebrews',
    chapter: 5,
    verse: 8,
    difficulty: 'medium',
    translations: {
      ESV: 'Although he was a son, he learned obedience through what he suffered. And being made perfect, he became the source of eternal salvation to all who obey him,',
      NIV: 'Son though he was, he learned obedience from what he suffered and, once made perfect, he became the source of eternal salvation for all who obey him',
      KJV: 'Though he were a Son, yet learned he obedience by the things which he suffered; And being made perfect, he became the author of eternal salvation unto all them that obey him;',
      NASB: 'Although He was a Son, He learned obedience from the things which He suffered. And having been made perfect, He became to all those who obey Him the source of eternal salvation,',
    },
    context: {
      before: {
        reference: 'Hebrews 5:7',
        text: 'In the days of his flesh, Jesus offered up prayers and supplications, with loud cries and tears, to him who was able to save him from death, and he was heard because of his reverence.',
      },
      after: {
        reference: 'Hebrews 5:10',
        text: 'being designated by God a high priest after the order of Melchizedek.',
      },
    },
  },
  {
    id: 'hebrews-6-19',
    reference: 'Hebrews 6:19',
    book: 'Hebrews',
    chapter: 6,
    verse: 19,
    difficulty: 'medium',
    translations: {
      ESV: 'We have this as a sure and steadfast anchor of the soul, a hope that enters into the inner place behind the curtain,',
      NIV: 'We have this hope as an anchor for the soul, firm and secure. It enters the inner sanctuary behind the curtain,',
      KJV: 'Which hope we have as an anchor of the soul, both sure and stedfast, and which entereth into that within the veil;',
      NASB: 'This hope we have as an anchor of the soul, a hope both sure and steadfast and one which enters within the veil,',
    },
    context: {
      before: {
        reference: 'Hebrews 6:18',
        text: 'so that by two unchangeable things, in which it is impossible for God to lie, we who have fled for refuge might have strong encouragement to hold fast to the hope set before us.',
      },
      after: {
        reference: 'Hebrews 6:20',
        text: 'where Jesus has gone as a forerunner on our behalf, having become a high priest forever after the order of Melchizedek.',
      },
    },
  },
  {
    id: 'hebrews-8-10',
    reference: 'Hebrews 8:10',
    book: 'Hebrews',
    chapter: 8,
    verse: 10,
    difficulty: 'hard',
    translations: {
      ESV: 'For this is the covenant that I will make with the house of Israel after those days, declares the Lord: I will put my laws into their minds, and write them on their hearts, and I will be their God, and they shall be my people.',
      NIV: 'This is the covenant I will establish with the people of Israel after that time, declares the Lord. I will put my laws in their minds and write them on their hearts. I will be their God, and they will be my people.',
      KJV: 'For this is the covenant that I will make with the house of Israel after those days, saith the Lord; I will put my laws into their mind, and write them in their hearts: and I will be to them a God, and they shall be to me a people:',
      NASB: '"For this is the covenant that I will make with the house of Israel after those days, says the Lord: I will put My laws into their minds, and I will write them on their hearts. And I will be their God, and they shall be My people.',
    },
    context: {
      before: {
        reference: 'Hebrews 8:9',
        text: 'not like the covenant that I made with their fathers on the day when I took them by the hand to bring them out of the land of Egypt.',
      },
      after: {
        reference: 'Hebrews 8:11',
        text: 'And they shall not teach, each one his neighbor and each one his brother, saying, "Know the Lord," for they shall all know me, from the least of them to the greatest.',
      },
    },
  },
  {
    id: 'hebrews-12-11',
    reference: 'Hebrews 12:11',
    book: 'Hebrews',
    chapter: 12,
    verse: 11,
    difficulty: 'medium',
    translations: {
      ESV: 'For the moment all discipline seems painful rather than pleasant, but later it yields the peaceful fruit of righteousness to those who have been trained by it.',
      NIV: 'No discipline seems pleasant at the time, but painful. Later on, however, it produces a harvest of righteousness and peace for those who have been trained by it.',
      KJV: 'Now no chastening for the present seemeth to be joyous, but grievous: nevertheless afterward it yieldeth the peaceable fruit of righteousness unto them which are exercised thereby.',
      NASB: 'All discipline for the moment seems not to be joyful, but sorrowful; yet to those who have been trained by it, afterwards it yields the peaceful fruit of righteousness.',
    },
    context: {
      before: {
        reference: 'Hebrews 12:10',
        text: 'For they disciplined us for a short time as it seemed best to them, but he disciplines us for our good, that we may share his holiness.',
      },
      after: {
        reference: 'Hebrews 12:12',
        text: 'Therefore lift your drooping hands and strengthen your weak knees,',
      },
    },
  },
  {
    id: 'hebrews-13-5-6',
    reference: 'Hebrews 13:5-6',
    book: 'Hebrews',
    chapter: 13,
    verse: 5,
    difficulty: 'medium',
    translations: {
      ESV: 'Keep your life free from love of money, and be content with what you have, for he has said, "I will never leave you nor forsake you." So we can confidently say, "The Lord is my helper; I will not fear; what can man do to me?"',
      NIV: 'Keep your lives free from the love of money and be content with what you have, because God has said, "Never will I leave you; never will I forsake you." So we say with confidence, "The Lord is my helper; I will not be afraid. What can mere mortals do to me?"',
      KJV: 'Let your conversation be without covetousness; and be content with such things as ye have: for he hath said, I will never leave thee, nor forsake thee. So that we may boldly say, The Lord is my helper, and I will not fear what man shall do unto me.',
      NASB: 'Make sure that your character is free from the love of money, being content with what you have; for He Himself has said, "I will never desert you, nor will I ever forsake you," so that we confidently say, "The Lord is my helper, I will not be afraid. What will man do to me?"',
    },
    context: {
      before: {
        reference: 'Hebrews 13:4',
        text: 'Let marriage be held in honor among all, and let the marriage bed be undefiled, for God will judge the sexually immoral and adulterous.',
      },
      after: {
        reference: 'Hebrews 13:7',
        text: 'Remember your leaders, those who spoke to you the word of God. Consider the outcome of their way of life, and imitate their faith.',
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
  {
    id: 'james-1-17',
    reference: 'James 1:17',
    book: 'James',
    chapter: 1,
    verse: 17,
    difficulty: 'medium',
    translations: {
      ESV: 'Every good gift and every perfect gift is from above, coming down from the Father of lights, with whom there is no variation or shadow due to change.',
      NIV: 'Every good and perfect gift is from above, coming down from the Father of the heavenly lights, who does not change like shifting shadows.',
      KJV: 'Every good gift and every perfect gift is from above, and cometh down from the Father of lights, with whom is no variableness, neither shadow of turning.',
      NASB: 'Every good thing given and every perfect gift is from above, coming down from the Father of lights, with whom there is no variation or shifting shadow.',
    },
    context: {
      before: {
        reference: 'James 1:16',
        text: 'Do not be deceived, my beloved brothers.',
      },
      after: {
        reference: 'James 1:18',
        text: 'Of his own will he brought us forth by the word of truth, that we should be a kind of firstfruits of his creatures.',
      },
    },
  },
  {
    id: 'james-1-22',
    reference: 'James 1:22',
    book: 'James',
    chapter: 1,
    verse: 22,
    difficulty: 'easy',
    translations: {
      ESV: 'But be doers of the word, and not hearers only, deceiving yourselves.',
      NIV: 'Do not merely listen to the word, and so deceive yourselves. Do what it says.',
      KJV: 'But be ye doers of the word, and not hearers only, deceiving your own selves.',
      NASB: 'But prove yourselves doers of the word, and not merely hearers who delude themselves.',
    },
    context: {
      before: {
        reference: 'James 1:21',
        text: 'Therefore put away all filthiness and rampant wickedness and receive with meekness the implanted word, which is able to save your souls.',
      },
      after: {
        reference: 'James 1:23',
        text: 'For if anyone is a hearer of the word and not a doer, he is like a man who looks intently at his natural face in a mirror.',
      },
    },
  },
  {
    id: 'james-3-17',
    reference: 'James 3:17',
    book: 'James',
    chapter: 3,
    verse: 17,
    difficulty: 'hard',
    translations: {
      ESV: 'But the wisdom from above is first pure, then peaceable, gentle, open to reason, full of mercy and good fruits, impartial and sincere.',
      NIV: 'But the wisdom that comes from heaven is first of all pure; then peace-loving, considerate, submissive, full of mercy and good fruit, impartial and sincere.',
      KJV: 'But the wisdom that is from above is first pure, then peaceable, gentle, and easy to be intreated, full of mercy and good fruits, without partiality, and without hypocrisy.',
      NASB: 'But the wisdom from above is first pure, then peaceable, gentle, reasonable, full of mercy and good fruits, unwavering, without hypocrisy.',
    },
    context: {
      before: {
        reference: 'James 3:16',
        text: 'For where jealousy and selfish ambition exist, there will be disorder and every vile practice.',
      },
      after: {
        reference: 'James 3:18',
        text: 'And a harvest of righteousness is sown in peace by those who make peace.',
      },
    },
  },
  {
    id: 'james-5-16',
    reference: 'James 5:16',
    book: 'James',
    chapter: 5,
    verse: 16,
    difficulty: 'medium',
    translations: {
      ESV: 'Therefore, confess your sins to one another and pray for one another, that you may be healed. The prayer of a righteous person has great power as it is working.',
      NIV: 'Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective.',
      KJV: 'Confess your faults one to another, and pray one for another, that ye may be healed. The effectual fervent prayer of a righteous man availeth much.',
      NASB: 'Therefore, confess your sins to one another, and pray for one another so that you may be healed. The effective prayer of a righteous man can accomplish much.',
    },
    context: {
      before: {
        reference: 'James 5:15',
        text: 'And the prayer of faith will save the one who is sick, and the Lord will raise him up. And if he has committed sins, he will be forgiven.',
      },
      after: {
        reference: 'James 5:17',
        text: 'Elijah was a man with a nature like ours, and he prayed fervently that it might not rain, and for three years and six months it did not rain on the earth.',
      },
    },
  },
  {
    id: 'james-4-8',
    reference: 'James 4:8',
    book: 'James',
    chapter: 4,
    verse: 8,
    difficulty: 'easy',
    translations: {
      ESV: 'Draw near to God, and he will draw near to you. Cleanse your hands, you sinners, and purify your hearts, you double-minded.',
      NIV: 'Come near to God and he will come near to you. Wash your hands, you sinners, and purify your hearts, you double-minded.',
      KJV: 'Draw nigh to God, and he will draw nigh to you. Cleanse your hands, ye sinners; and purify your hearts, ye double minded.',
      NASB: 'Draw near to God and He will draw near to you. Cleanse your hands, you sinners; and purify your hearts, you double-minded.',
    },
    context: {
      before: {
        reference: 'James 4:7',
        text: 'Submit yourselves therefore to God. Resist the devil, and he will flee from you.',
      },
      after: {
        reference: 'James 4:9',
        text: 'Be wretched and mourn and weep. Let your laughter be turned to mourning and your joy to gloom.',
      },
    },
  },
  {
    id: 'james-4-10',
    reference: 'James 4:10',
    book: 'James',
    chapter: 4,
    verse: 10,
    difficulty: 'easy',
    translations: {
      ESV: 'Humble yourselves before the Lord, and he will exalt you.',
      NIV: 'Humble yourselves before the Lord, and he will lift you up.',
      KJV: 'Humble yourselves in the sight of the Lord, and he shall lift you up.',
      NASB: 'Humble yourselves in the presence of the Lord, and He will exalt you.',
    },
    context: {
      before: {
        reference: 'James 4:9',
        text: 'Be wretched and mourn and weep. Let your laughter be turned to mourning and your joy to gloom.',
      },
      after: {
        reference: 'James 4:11',
        text: 'Do not speak evil against one another, brothers.',
      },
    },
  },
  {
    id: 'james-1-12',
    reference: 'James 1:12',
    book: 'James',
    chapter: 1,
    verse: 12,
    difficulty: 'medium',
    translations: {
      ESV: 'Blessed is the man who remains steadfast under trial, for when he has stood the test he will receive the crown of life, which God has promised to those who love him.',
      NIV: 'Blessed is the one who perseveres under trial because, having stood the test, that person will receive the crown of life that the Lord has promised to those who love him.',
      KJV: 'Blessed is the man that endureth temptation: for when he is tried, he shall receive the crown of life, which the Lord hath promised to them that love him.',
      NASB: 'Blessed is a man who perseveres under trial; for once he has been approved, he will receive the crown of life which the Lord has promised to those who love Him.',
    },
    context: {
      before: {
        reference: 'James 1:11',
        text: 'For the sun rises with its scorching heat and withers the grass; its flower falls, and its beauty perishes. So also will the rich man fade away in the midst of his pursuits.',
      },
      after: {
        reference: 'James 1:13',
        text: 'Let no one say when he is tempted, "I am being tempted by God," for God cannot be tempted with evil, and he himself tempts no one.',
      },
    },
  },
  {
    id: 'james-2-17',
    reference: 'James 2:17',
    book: 'James',
    chapter: 2,
    verse: 17,
    difficulty: 'easy',
    translations: {
      ESV: 'So also faith by itself, if it does not have works, is dead.',
      NIV: 'In the same way, faith by itself, if it is not accompanied by action, is dead.',
      KJV: 'Even so faith, if it hath not works, is dead, being alone.',
      NASB: 'Even so faith, if it has no works, is dead, being by itself.',
    },
    context: {
      before: {
        reference: 'James 2:16',
        text: 'and one of you says to them, "Go in peace, be warmed and filled," without giving them the things needed for the body, what good is that?',
      },
      after: {
        reference: 'James 2:18',
        text: 'But someone will say, "You have faith and I have works." Show me your faith apart from your works, and I will show you my faith by my works.',
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
  {
    id: '1-peter-4-8',
    reference: '1 Peter 4:8',
    book: '1 Peter',
    chapter: 4,
    verse: 8,
    difficulty: 'medium',
    translations: {
      ESV: 'Above all, keep loving one another earnestly, since love covers a multitude of sins.',
      NIV: 'Above all, love each other deeply, because love covers over a multitude of sins.',
      KJV: 'And above all things have fervent charity among yourselves: for charity shall cover the multitude of sins.',
      NASB: 'Above all, keep fervent in your love for one another, because love covers a multitude of sins.',
    },
    context: {
      before: {
        reference: '1 Peter 4:7',
        text: 'The end of all things is at hand; therefore be self-controlled and sober-minded for the sake of your prayers.',
      },
      after: {
        reference: '1 Peter 4:9',
        text: 'Show hospitality to one another without grumbling.',
      },
    },
  },
  {
    id: '1-peter-5-10',
    reference: '1 Peter 5:10',
    book: '1 Peter',
    chapter: 5,
    verse: 10,
    difficulty: 'hard',
    translations: {
      ESV: 'And after you have suffered a little while, the God of all grace, who has called you to his eternal glory in Christ, will himself restore, confirm, strengthen, and establish you.',
      NIV: 'And the God of all grace, who called you to his eternal glory in Christ, after you have suffered a little while, will himself restore you and make you strong, firm and steadfast.',
      KJV: 'But the God of all grace, who hath called us unto his eternal glory by Christ Jesus, after that ye have suffered a while, make you perfect, stablish, strengthen, settle you.',
      NASB: 'After you have suffered for a little while, the God of all grace, who called you to His eternal glory in Christ, will Himself perfect, confirm, strengthen and establish you.',
    },
    context: {
      before: {
        reference: '1 Peter 5:9',
        text: 'Resist him, firm in your faith, knowing that the same kinds of suffering are being experienced by your brotherhood throughout the world.',
      },
      after: {
        reference: '1 Peter 5:11',
        text: 'To him be the dominion forever and ever. Amen.',
      },
    },
  },

  {
    id: '1-peter-1-6-7',
    reference: '1 Peter 1:6-7',
    book: '1 Peter',
    chapter: 1,
    verse: 6,
    difficulty: 'hard',
    translations: {
      ESV: 'In this you rejoice, though now for a little while, if necessary, you have been grieved by various trials, so that the tested genuineness of your faith—more precious than gold that perishes though it is tested by fire—may be found to result in praise and glory and honor at the revelation of Jesus Christ.',
      NIV: 'In all this you greatly rejoice, though now for a little while you may have had to suffer grief in all kinds of trials. These have come so that the proven genuineness of your faith—of greater worth than gold, which perishes even though refined by fire—may result in praise, glory and honor when Jesus Christ is revealed.',
      KJV: 'Wherein ye greatly rejoice, though now for a season, if need be, ye are in heaviness through manifold temptations: That the trial of your faith, being much more precious than of gold that perisheth, though it be tried with fire, might be found unto praise and honour and glory at the appearing of Jesus Christ.',
      NASB: 'In this you greatly rejoice, even though now for a little while, if necessary, you have been distressed by various trials, so that the proof of your faith, being more precious than gold which is perishable, even though tested by fire, may be found to result in praise and glory and honor at the revelation of Jesus Christ.',
    },
    context: {
      before: {
        reference: '1 Peter 1:5',
        text: 'who by God\'s power are being guarded through faith for a salvation ready to be revealed in the last time.',
      },
      after: {
        reference: '1 Peter 1:8',
        text: 'Though you have not seen him, you love him. Though you do not now see him, you believe in him and rejoice with joy that is inexpressible and filled with glory,',
      },
    },
  },
  {
    id: '1-peter-2-5',
    reference: '1 Peter 2:5',
    book: '1 Peter',
    chapter: 2,
    verse: 5,
    difficulty: 'medium',
    translations: {
      ESV: 'you yourselves like living stones are being built up as a spiritual house, to be a holy priesthood, to offer spiritual sacrifices acceptable to God through Jesus Christ.',
      NIV: 'you also, like living stones, are being built into a spiritual house to be a holy priesthood, offering spiritual sacrifices acceptable to God through Jesus Christ.',
      KJV: 'Ye also, as lively stones, are built up a spiritual house, an holy priesthood, to offer up spiritual sacrifices, acceptable to God by Jesus Christ.',
      NASB: 'you also, as living stones, are being built up as a spiritual house for a holy priesthood, to offer up spiritual sacrifices acceptable to God through Jesus Christ.',
    },
    context: {
      before: {
        reference: '1 Peter 2:4',
        text: 'As you come to him, a living stone rejected by men but in the sight of God chosen and precious,',
      },
      after: {
        reference: '1 Peter 2:6',
        text: 'For it stands in Scripture: "Behold, I am laying in Zion a stone, a cornerstone chosen and precious, and whoever believes in him will not be put to shame."',
      },
    },
  },
  {
    id: '1-peter-1-23',
    reference: '1 Peter 1:23',
    book: '1 Peter',
    chapter: 1,
    verse: 23,
    difficulty: 'medium',
    translations: {
      ESV: 'since you have been born again, not of perishable seed but of imperishable, through the living and abiding word of God.',
      NIV: 'For you have been born again, not of perishable seed, but of imperishable, through the living and enduring word of God.',
      KJV: 'Being born again, not of corruptible seed, but of incorruptible, by the word of God, which liveth and abideth for ever.',
      NASB: 'for you have been born again not of seed which is perishable but imperishable, that is, through the living and enduring word of God.',
    },
    context: {
      before: {
        reference: '1 Peter 1:22',
        text: 'Having purified your souls by your obedience to the truth for a sincere brotherly love, love one another earnestly from a pure heart,',
      },
      after: {
        reference: '1 Peter 1:24',
        text: 'for "All flesh is like grass and all its glory like the flower of grass. The grass withers, and the flower falls,"',
      },
    },
  },
  {
    id: '1-peter-2-2',
    reference: '1 Peter 2:2',
    book: '1 Peter',
    chapter: 2,
    verse: 2,
    difficulty: 'easy',
    translations: {
      ESV: 'Like newborn infants, long for the pure spiritual milk, that by it you may grow up into salvation—',
      NIV: 'Like newborn babies, crave pure spiritual milk, so that by it you may grow up in your salvation,',
      KJV: 'As newborn babes, desire the sincere milk of the word, that ye may grow thereby:',
      NASB: 'like newborn babies, long for the pure milk of the word, so that by it you may grow in respect to salvation,',
    },
    context: {
      before: {
        reference: '1 Peter 2:1',
        text: 'So put away all malice and all deceit and hypocrisy and envy and all slander.',
      },
      after: {
        reference: '1 Peter 2:3',
        text: 'if indeed you have tasted that the Lord is good.',
      },
    },
  },
  {
    id: '1-peter-3-7',
    reference: '1 Peter 3:7',
    book: '1 Peter',
    chapter: 3,
    verse: 7,
    difficulty: 'medium',
    translations: {
      ESV: 'Likewise, husbands, live with your wives in an understanding way, showing honor to the woman as the weaker vessel, since they are heirs with you of the grace of life, so that your prayers may not be hindered.',
      NIV: 'Husbands, in the same way be considerate as you live with your wives, and treat them with respect as the weaker partner and as heirs with you of the gracious gift of life, so that nothing will hinder your prayers.',
      KJV: 'Likewise, ye husbands, dwell with them according to knowledge, giving honour unto the wife, as unto the weaker vessel, and as being heirs together of the grace of life; that your prayers be not hindered.',
      NASB: 'You husbands in the same way, live with your wives in an understanding way, as with someone weaker, since she is a woman; and show her honor as a fellow heir of the grace of life, so that your prayers will not be hindered.',
    },
    context: {
      before: {
        reference: '1 Peter 3:6',
        text: 'as Sarah obeyed Abraham, calling him lord. And you are her children, if you do good and do not fear anything that is frightening.',
      },
      after: {
        reference: '1 Peter 3:8',
        text: 'Finally, all of you, have unity of mind, sympathy, brotherly love, a tender heart, and a humble mind.',
      },
    },
  },
  {
    id: '1-peter-5-5',
    reference: '1 Peter 5:5',
    book: '1 Peter',
    chapter: 5,
    verse: 5,
    difficulty: 'medium',
    translations: {
      ESV: 'Likewise, you who are younger, be subject to the elders. Clothe yourselves, all of you, with humility toward one another, for "God opposes the proud but gives grace to the humble."',
      NIV: 'In the same way, you who are younger, submit yourselves to your elders. All of you, clothe yourselves with humility toward one another, because, "God opposes the proud but shows favor to the humble."',
      KJV: 'Likewise, ye younger, submit yourselves unto the elder. Yea, all of you be subject one to another, and be clothed with humility: for God resisteth the proud, and giveth grace to the humble.',
      NASB: 'You younger men, likewise, be subject to your elders; and all of you, clothe yourselves with humility toward one another, for God is opposed to the proud, but gives grace to the humble.',
    },
    context: {
      before: {
        reference: '1 Peter 5:4',
        text: 'And when the chief Shepherd appears, you will receive the unfading crown of glory.',
      },
      after: {
        reference: '1 Peter 5:6',
        text: 'Humble yourselves, therefore, under the mighty hand of God so that at the proper time he may exalt you,',
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
  {
    id: '1-john-1-7',
    reference: '1 John 1:7',
    book: '1 John',
    chapter: 1,
    verse: 7,
    difficulty: 'medium',
    translations: {
      ESV: 'But if we walk in the light, as he is in the light, we have fellowship with one another, and the blood of Jesus his Son cleanses us from all sin.',
      NIV: 'But if we walk in the light, as he is in the light, we have fellowship with one another, and the blood of Jesus, his Son, purifies us from all sin.',
      KJV: 'But if we walk in the light, as he is in the light, we have fellowship one with another, and the blood of Jesus Christ his Son cleanseth us from all sin.',
      NASB: 'but if we walk in the Light as He Himself is in the Light, we have fellowship with one another, and the blood of Jesus His Son cleanses us from all sin.',
    },
    context: {
      before: {
        reference: '1 John 1:6',
        text: 'If we say we have fellowship with him while we walk in darkness, we lie and do not practice the truth.',
      },
      after: {
        reference: '1 John 1:8',
        text: 'If we say we have no sin, we deceive ourselves, and the truth is not in us.',
      },
    },
  },
  {
    id: '1-john-2-2',
    reference: '1 John 2:2',
    book: '1 John',
    chapter: 2,
    verse: 2,
    difficulty: 'medium',
    translations: {
      ESV: 'He is the propitiation for our sins, and not for ours only but also for the sins of the whole world.',
      NIV: 'He is the atoning sacrifice for our sins, and not only for ours but also for the sins of the whole world.',
      KJV: 'And he is the propitiation for our sins: and not for ours only, but also for the sins of the whole world.',
      NASB: 'and He Himself is the propitiation for our sins; and not for ours only, but also for those of the whole world.',
    },
    context: {
      before: {
        reference: '1 John 2:1',
        text: 'My little children, I am writing these things to you so that you may not sin. But if anyone does sin, we have an advocate with the Father, Jesus Christ the righteous.',
      },
      after: {
        reference: '1 John 2:3',
        text: 'And by this we know that we have come to know him, if we keep his commandments.',
      },
    },
  },
  {
    id: '1-john-4-10',
    reference: '1 John 4:10',
    book: '1 John',
    chapter: 4,
    verse: 10,
    difficulty: 'medium',
    translations: {
      ESV: 'In this is love, not that we have loved God but that he loved us and sent his Son to be the propitiation for our sins.',
      NIV: 'This is love: not that we loved God, but that he loved us and sent his Son as an atoning sacrifice for our sins.',
      KJV: 'Herein is love, not that we loved God, but that he loved us, and sent his Son to be the propitiation for our sins.',
      NASB: 'In this is love, not that we loved God, but that He loved us and sent His Son to be the propitiation for our sins.',
    },
    context: {
      before: {
        reference: '1 John 4:9',
        text: 'In this the love of God was made manifest among us, that God sent his only Son into the world, so that we might live through him.',
      },
      after: {
        reference: '1 John 4:11',
        text: 'Beloved, if God so loved us, we also ought to love one another.',
      },
    },
  },
  {
    id: '1-john-5-13',
    reference: '1 John 5:13',
    book: '1 John',
    chapter: 5,
    verse: 13,
    difficulty: 'medium',
    translations: {
      ESV: 'I write these things to you who believe in the name of the Son of God, that you may know that you have eternal life.',
      NIV: 'I write these things to you who believe in the name of the Son of God so that you may know that you have eternal life.',
      KJV: 'These things have I written unto you that believe on the name of the Son of God; that ye may know that ye have eternal life, and that ye may believe on the name of the Son of God.',
      NASB: 'These things I have written to you who believe in the name of the Son of God, so that you may know that you have eternal life.',
    },
    context: {
      before: {
        reference: '1 John 5:12',
        text: 'Whoever has the Son has life; whoever does not have the Son of God does not have life.',
      },
      after: {
        reference: '1 John 5:14',
        text: 'And this is the confidence that we have toward him, that if we ask anything according to his will he hears us.',
      },
    },
  },
  {
    id: '1-john-5-4',
    reference: '1 John 5:4',
    book: '1 John',
    chapter: 5,
    verse: 4,
    difficulty: 'medium',
    translations: {
      ESV: 'For everyone who has been born of God overcomes the world. And this is the victory that has overcome the world—our faith.',
      NIV: 'For everyone born of God overcomes the world. This is the victory that has overcome the world, even our faith.',
      KJV: 'For whatsoever is born of God overcometh the world: and this is the victory that overcometh the world, even our faith.',
      NASB: 'For whatever is born of God overcomes the world; and this is the victory that has overcome the world—our faith.',
    },
    context: {
      before: {
        reference: '1 John 5:3',
        text: 'For this is the love of God, that we keep his commandments. And his commandments are not burdensome.',
      },
      after: {
        reference: '1 John 5:5',
        text: 'Who is it that overcomes the world except the one who believes that Jesus is the Son of God?',
      },
    },
  },

  // ============ 2 JOHN ============
  {
    id: '2-john-1-1-2',
    reference: '2 John 1-2',
    book: '2 John',
    chapter: 1,
    verse: 1,
    difficulty: 'medium',
    translations: {
      ESV: 'The elder to the elect lady and her children, whom I love in truth, and not only I, but also all who know the truth, because of the truth that abides in us and will be with us forever.',
      NIV: 'The elder, To the lady chosen by God and to her children, whom I love in the truth—and not I only, but also all who know the truth— because of the truth, which lives in us and will be with us forever.',
      KJV: 'The elder unto the elect lady and her children, whom I love in the truth; and not I only, but also all they that have known the truth; For the truth\'s sake, which dwelleth in us, and shall be with us for ever.',
      NASB: 'The elder to the chosen lady and her children, whom I love in truth; and not only I, but also all who know the truth, for the sake of the truth which abides in us and will be with us forever.',
    },
    context: {
      after: {
        reference: '2 John 3',
        text: 'Grace, mercy, and peace will be with us, from God the Father and from Jesus Christ the Father\'s Son, in truth and love.',
      },
    },
  },
  {
    id: '2-john-1-5',
    reference: '2 John 5',
    book: '2 John',
    chapter: 1,
    verse: 5,
    difficulty: 'easy',
    translations: {
      ESV: 'And now I ask you, dear lady—not as though I were writing you a new commandment, but the one we have had from the beginning—that we love one another.',
      NIV: 'And now, dear lady, I am not writing you a new command but one we have had from the beginning. I ask that we love one another.',
      KJV: 'And now I beseech thee, lady, not as though I wrote a new commandment unto thee, but that which we had from the beginning, that we love one another.',
      NASB: 'Now I ask you, lady, not as though I were writing to you a new commandment, but the one which we have had from the beginning, that we love one another.',
    },
    context: {
      before: {
        reference: '2 John 4',
        text: 'I rejoiced greatly to find some of your children walking in the truth, just as we were commanded by the Father.',
      },
      after: {
        reference: '2 John 6',
        text: 'And this is love, that we walk according to his commandments; this is the commandment, just as you have heard from the beginning, so that you should walk in it.',
      },
    },
  },
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
  {
    id: '2-john-1-4',
    reference: '2 John 4',
    book: '2 John',
    chapter: 1,
    verse: 4,
    difficulty: 'easy',
    translations: {
      ESV: 'I rejoiced greatly to find some of your children walking in the truth, just as we were commanded by the Father.',
      NIV: 'It has given me great joy to find some of your children walking in the truth, just as the Father commanded us.',
      KJV: 'I rejoiced greatly that I found of thy children walking in truth, as we have received a commandment from the Father.',
      NASB: 'I was very glad to find some of your children walking in truth, just as we have received commandment to do from the Father.',
    },
    context: {
      before: {
        reference: '2 John 3',
        text: 'Grace, mercy, and peace will be with us, from God the Father and from Jesus Christ the Father\'s Son, in truth and love.',
      },
      after: {
        reference: '2 John 5',
        text: 'And now I ask you, dear lady—not as though I were writing you a new commandment, but the one we have had from the beginning—that we love one another.',
      },
    },
  },
  {
    id: '2-john-1-8',
    reference: '2 John 8',
    book: '2 John',
    chapter: 1,
    verse: 8,
    difficulty: 'easy',
    translations: {
      ESV: 'Watch yourselves, so that you may not lose what we have worked for, but may win a full reward.',
      NIV: 'Watch out that you do not lose what we have worked for, but that you may be rewarded fully.',
      KJV: 'Look to yourselves, that we lose not those things which we have wrought, but that we receive a full reward.',
      NASB: 'Watch yourselves, that you do not lose what we have accomplished, but that you may receive a full reward.',
    },
    context: {
      before: {
        reference: '2 John 7',
        text: 'For many deceivers have gone out into the world, those who do not confess the coming of Jesus Christ in the flesh. Such a one is the deceiver and the antichrist.',
      },
      after: {
        reference: '2 John 9',
        text: 'Everyone who goes on ahead and does not abide in the teaching of Christ, does not have God.',
      },
    },
  },
  {
    id: '2-john-1-10',
    reference: '2 John 10',
    book: '2 John',
    chapter: 1,
    verse: 10,
    difficulty: 'medium',
    translations: {
      ESV: 'If anyone comes to you and does not bring this teaching, do not receive him into your house or give him any greeting.',
      NIV: 'If anyone comes to you and does not bring this teaching, do not take them into your house or welcome them.',
      KJV: 'If there come any unto you, and bring not this doctrine, receive him not into your house, neither bid him God speed.',
      NASB: 'If anyone comes to you and does not bring this teaching, do not receive him into your house, and do not give him a greeting.',
    },
    context: {
      before: {
        reference: '2 John 9',
        text: 'Everyone who goes on ahead and does not abide in the teaching of Christ, does not have God. Whoever abides in the teaching has both the Father and the Son.',
      },
      after: {
        reference: '2 John 11',
        text: 'For whoever greets him takes part in his wicked works.',
      },
    },
  },
  {
    id: '2-john-1-11',
    reference: '2 John 11',
    book: '2 John',
    chapter: 1,
    verse: 11,
    difficulty: 'easy',
    translations: {
      ESV: 'For whoever greets him takes part in his wicked works.',
      NIV: 'Anyone who welcomes them shares in their wicked work.',
      KJV: 'For he that biddeth him God speed is partaker of his evil deeds.',
      NASB: 'For the one who gives him a greeting participates in his evil deeds.',
    },
    context: {
      before: {
        reference: '2 John 10',
        text: 'If anyone comes to you and does not bring this teaching, do not receive him into your house or give him any greeting.',
      },
      after: {
        reference: '2 John 12',
        text: 'Though I have much to write to you, I would rather not use paper and ink. Instead I hope to come to you and talk face to face, so that our joy may be complete.',
      },
    },
  },
  {
    id: '2-john-1-12',
    reference: '2 John 12',
    book: '2 John',
    chapter: 1,
    verse: 12,
    difficulty: 'medium',
    translations: {
      ESV: 'Though I have much to write to you, I would rather not use paper and ink. Instead I hope to come to you and talk face to face, so that our joy may be complete.',
      NIV: 'I have much to write to you, but I do not want to use paper and ink. Instead, I hope to visit you and talk with you face to face, so that our joy may be complete.',
      KJV: 'Having many things to write unto you, I would not write with paper and ink: but I trust to come unto you, and speak face to face, that our joy may be full.',
      NASB: 'Though I have many things to write to you, I do not want to do so with paper and ink; but I hope to come to you and speak face to face, so that your joy may be made full.',
    },
    context: {
      before: {
        reference: '2 John 11',
        text: 'For whoever greets him takes part in his wicked works.',
      },
      after: {
        reference: '2 John 13',
        text: 'The children of your elect sister greet you.',
      },
    },
  },
  {
    id: '2-john-1-13',
    reference: '2 John 13',
    book: '2 John',
    chapter: 1,
    verse: 13,
    difficulty: 'easy',
    translations: {
      ESV: 'The children of your elect sister greet you.',
      NIV: 'The children of your sister, who is chosen by God, send their greetings.',
      KJV: 'The children of thy elect sister greet thee. Amen.',
      NASB: 'The children of your chosen sister greet you.',
    },
    context: {
      before: {
        reference: '2 John 12',
        text: 'Though I have much to write to you, I would rather not use paper and ink. Instead I hope to come to you and talk face to face, so that our joy may be complete.',
      },
    },
  },

  // ============ 3 JOHN ============
  {
    id: '3-john-1-1',
    reference: '3 John 1',
    book: '3 John',
    chapter: 1,
    verse: 1,
    difficulty: 'easy',
    translations: {
      ESV: 'The elder to the beloved Gaius, whom I love in truth.',
      NIV: 'The elder, To my dear friend Gaius, whom I love in the truth.',
      KJV: 'The elder unto the wellbeloved Gaius, whom I love in the truth.',
      NASB: 'The elder to the beloved Gaius, whom I love in truth.',
    },
    context: {
      after: {
        reference: '3 John 2',
        text: 'Beloved, I pray that all may go well with you and that you may be in good health, as it goes well with your soul.',
      },
    },
  },
  {
    id: '3-john-1-12',
    reference: '3 John 12',
    book: '3 John',
    chapter: 1,
    verse: 12,
    difficulty: 'medium',
    translations: {
      ESV: 'Demetrius has received a good testimony from everyone, and from the truth itself. We also add our testimony, and you know that our testimony is true.',
      NIV: 'Demetrius is well spoken of by everyone—and even by the truth itself. We also speak well of him, and you know that our testimony is true.',
      KJV: 'Demetrius hath good report of all men, and of the truth itself: yea, and we also bear record; and ye know that our record is true.',
      NASB: 'Demetrius has received a good testimony from everyone, and from the truth itself; and we add our testimony, and you know that our testimony is true.',
    },
    context: {
      before: {
        reference: '3 John 11',
        text: 'Beloved, do not imitate evil but imitate good. Whoever does good is from God; whoever does evil has not seen God.',
      },
      after: {
        reference: '3 John 13',
        text: 'I had much to write to you, but I would rather not write with pen and ink.',
      },
    },
  },
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
  {
    id: '3-john-1-7-8',
    reference: '3 John 7-8',
    book: '3 John',
    chapter: 1,
    verse: 7,
    difficulty: 'medium',
    translations: {
      ESV: 'For they have gone out for the sake of the name, accepting nothing from the Gentiles. Therefore we ought to support people like these, that we may be fellow workers for the truth.',
      NIV: 'It was for the sake of the Name that they went out, receiving no help from the pagans. We ought therefore to show hospitality to such people so that we may work together for the truth.',
      KJV: 'Because that for his name\'s sake they went forth, taking nothing of the Gentiles. We therefore ought to receive such, that we might be fellowhelpers to the truth.',
      NASB: 'For they went out for the sake of the Name, accepting nothing from the Gentiles. Therefore we ought to support such men, so that we may be fellow workers with the truth.',
    },
    context: {
      before: {
        reference: '3 John 6',
        text: 'They have testified to your love before the church. You will do well to send them on their journey in a manner worthy of God.',
      },
      after: {
        reference: '3 John 9',
        text: 'I have written something to the church, but Diotrephes, who likes to put himself first, does not acknowledge our authority.',
      },
    },
  },
  {
    id: '3-john-1-3',
    reference: '3 John 3',
    book: '3 John',
    chapter: 1,
    verse: 3,
    difficulty: 'easy',
    translations: {
      ESV: 'For I rejoiced greatly when the brothers came and testified to your truth, as indeed you are walking in the truth.',
      NIV: 'It gave me great joy when some believers came and testified about your faithfulness to the truth, telling how you continue to walk in it.',
      KJV: 'For I rejoiced greatly, when the brethren came and testified of the truth that is in thee, even as thou walkest in the truth.',
      NASB: 'For I was very glad when brethren came and testified to your truth, that is, how you are walking in truth.',
    },
    context: {
      before: {
        reference: '3 John 2',
        text: 'Beloved, I pray that all may go well with you and that you may be in good health, as it goes well with your soul.',
      },
      after: {
        reference: '3 John 4',
        text: 'I have no greater joy than to hear that my children are walking in the truth.',
      },
    },
  },
  {
    id: '3-john-1-9',
    reference: '3 John 9',
    book: '3 John',
    chapter: 1,
    verse: 9,
    difficulty: 'medium',
    translations: {
      ESV: 'I have written something to the church, but Diotrephes, who likes to put himself first, does not acknowledge our authority.',
      NIV: 'I wrote to the church, but Diotrephes, who loves to be first, will not welcome us.',
      KJV: 'I wrote unto the church: but Diotrephes, who loveth to have the preeminence among them, receiveth us not.',
      NASB: 'I wrote something to the church; but Diotrephes, who loves to be first among them, does not accept what we say.',
    },
    context: {
      before: {
        reference: '3 John 8',
        text: 'Therefore we ought to support people like these, that we may be fellow workers for the truth.',
      },
      after: {
        reference: '3 John 10',
        text: 'So if I come, I will bring up what he is doing, talking wicked nonsense against us.',
      },
    },
  },
  {
    id: '3-john-1-14',
    reference: '3 John 14',
    book: '3 John',
    chapter: 1,
    verse: 14,
    difficulty: 'easy',
    translations: {
      ESV: 'I hope to see you soon, and we will talk face to face. Peace be to you. The friends greet you. Greet the friends, each by name.',
      NIV: 'I hope to see you soon, and we will talk face to face. Peace to you. The friends here send their greetings. Greet the friends there by name.',
      KJV: 'But I trust I shall shortly see thee, and we shall speak face to face. Peace be to thee. Our friends salute thee. Greet the friends by name.',
      NASB: 'But I hope to see you shortly, and we will speak face to face. Peace be to you. The friends greet you. Greet the friends by name.',
    },
    context: {
      before: {
        reference: '3 John 13',
        text: 'I had much to write to you, but I would rather not write with pen and ink.',
      },
    },
  },
  {
    id: '3-john-1-5',
    reference: '3 John 5',
    book: '3 John',
    chapter: 1,
    verse: 5,
    difficulty: 'medium',
    translations: {
      ESV: 'Beloved, it is a faithful thing you do in all your efforts for these brothers, strangers as they are.',
      NIV: 'Dear friend, you are faithful in what you are doing for the brothers and sisters, even though they are strangers to you.',
      KJV: 'Beloved, thou doest faithfully whatsoever thou doest to the brethren, and to strangers.',
      NASB: 'Beloved, you are acting faithfully in whatever you accomplish for the brethren, and especially when they are strangers.',
    },
    context: {
      before: {
        reference: '3 John 4',
        text: 'I have no greater joy than to hear that my children are walking in the truth.',
      },
      after: {
        reference: '3 John 6',
        text: 'Who have testified of your love before the church.',
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
        text: 'So if I come, I will bring up what he is doing, talking wicked nonsense against us.',
      },
      after: {
        reference: '3 John 12',
        text: 'Demetrius has received a good testimony from everyone, and from the truth itself.',
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
  {
    id: '2-peter-1-4',
    reference: '2 Peter 1:4',
    book: '2 Peter',
    chapter: 1,
    verse: 4,
    difficulty: 'hard',
    translations: {
      ESV: 'By which he has granted to us his precious and very great promises, so that through them you may become partakers of the divine nature, having escaped from the corruption that is in the world because of sinful desire.',
      NIV: 'Through these he has given us his very great and precious promises, so that through them you may participate in the divine nature, having escaped the corruption in the world caused by evil desires.',
      KJV: 'Whereby are given unto us exceeding great and precious promises: that by these ye might be partakers of the divine nature, having escaped the corruption that is in the world through lust.',
      NASB: 'For by these He has granted to us His precious and magnificent promises, so that by them you may become partakers of the divine nature, having escaped the corruption that is in the world by lust.',
    },
    context: {
      before: {
        reference: '2 Peter 1:3',
        text: 'His divine power has granted to us all things that pertain to life and godliness, through the knowledge of him who called us to his own glory and excellence.',
      },
      after: {
        reference: '2 Peter 1:5',
        text: 'For this very reason, make every effort to supplement your faith with virtue, and virtue with knowledge.',
      },
    },
  },
  {
    id: '2-peter-1-5-7',
    reference: '2 Peter 1:5-7',
    book: '2 Peter',
    chapter: 1,
    verse: 5,
    difficulty: 'hard',
    translations: {
      ESV: 'For this very reason, make every effort to supplement your faith with virtue, and virtue with knowledge, and knowledge with self-control, and self-control with steadfastness, and steadfastness with godliness, and godliness with brotherly affection, and brotherly affection with love.',
      NIV: 'For this very reason, make every effort to add to your faith goodness; and to goodness, knowledge; and to knowledge, self-control; and to self-control, perseverance; and to perseverance, godliness; and to godliness, mutual affection; and to mutual affection, love.',
      KJV: 'And beside this, giving all diligence, add to your faith virtue; and to virtue knowledge; And to knowledge temperance; and to temperance patience; and to patience godliness; And to godliness brotherly kindness; and to brotherly kindness charity.',
      NASB: 'Now for this very reason also, applying all diligence, in your faith supply moral excellence, and in your moral excellence, knowledge, and in your knowledge, self-control, and in your self-control, perseverance, and in your perseverance, godliness, and in your godliness, brotherly kindness, and in your brotherly kindness, love.',
    },
    context: {
      before: {
        reference: '2 Peter 1:4',
        text: 'By which he has granted to us his precious and very great promises, so that through them you may become partakers of the divine nature.',
      },
      after: {
        reference: '2 Peter 1:8',
        text: 'For if these qualities are yours and are increasing, they keep you from being ineffective or unfruitful in the knowledge of our Lord Jesus Christ.',
      },
    },
  },
  {
    id: '2-peter-1-10-11',
    reference: '2 Peter 1:10-11',
    book: '2 Peter',
    chapter: 1,
    verse: 10,
    difficulty: 'medium',
    translations: {
      ESV: 'Therefore, brothers, be all the more diligent to confirm your calling and election, for if you practice these qualities you will never fall. For in this way there will be richly provided for you an entrance into the eternal kingdom of our Lord and Savior Jesus Christ.',
      NIV: 'Therefore, my brothers and sisters, make every effort to confirm your calling and election. For if you do these things, you will never stumble, and you will receive a rich welcome into the eternal kingdom of our Lord and Savior Jesus Christ.',
      KJV: 'Wherefore the rather, brethren, give diligence to make your calling and election sure: for if ye do these things, ye shall never fall: For so an entrance shall be ministered unto you abundantly into the everlasting kingdom of our Lord and Saviour Jesus Christ.',
      NASB: 'Therefore, brethren, be all the more diligent to make certain about His calling and choosing you; for as long as you practice these things, you will never stumble; for in this way the entrance into the eternal kingdom of our Lord and Savior Jesus Christ will be abundantly supplied to you.',
    },
    context: {
      before: {
        reference: '2 Peter 1:9',
        text: 'For whoever lacks these qualities is so nearsighted that he is blind, having forgotten that he was cleansed from his former sins.',
      },
      after: {
        reference: '2 Peter 1:12',
        text: 'Therefore I intend always to remind you of these qualities, though you know them and are established in the truth that you have.',
      },
    },
  },
  {
    id: '2-peter-3-8',
    reference: '2 Peter 3:8',
    book: '2 Peter',
    chapter: 3,
    verse: 8,
    difficulty: 'easy',
    translations: {
      ESV: 'But do not overlook this one fact, beloved, that with the Lord one day is as a thousand years, and a thousand years as one day.',
      NIV: 'But do not forget this one thing, dear friends: With the Lord a day is like a thousand years, and a thousand years are like a day.',
      KJV: 'But, beloved, be not ignorant of this one thing, that one day is with the Lord as a thousand years, and a thousand years as one day.',
      NASB: 'But do not let this one fact escape your notice, beloved, that with the Lord one day is like a thousand years, and a thousand years like one day.',
    },
    context: {
      before: {
        reference: '2 Peter 3:7',
        text: 'But by the same word the heavens and earth that now exist are stored up for fire, being kept until the day of judgment and destruction of the ungodly.',
      },
      after: {
        reference: '2 Peter 3:9',
        text: 'The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish.',
      },
    },
  },
  {
    id: '2-peter-1-16',
    reference: '2 Peter 1:16',
    book: '2 Peter',
    chapter: 1,
    verse: 16,
    difficulty: 'medium',
    translations: {
      ESV: 'For we did not follow cleverly devised myths when we made known to you the power and coming of our Lord Jesus Christ, but we were eyewitnesses of his majesty.',
      NIV: 'For we did not follow cleverly devised stories when we told you about the coming of our Lord Jesus Christ in power, but we were eyewitnesses of his majesty.',
      KJV: 'For we have not followed cunningly devised fables, when we made known unto you the power and coming of our Lord Jesus Christ, but were eyewitnesses of his majesty.',
      NASB: 'For we did not follow cleverly devised tales when we made known to you the power and coming of our Lord Jesus Christ, but we were eyewitnesses of His majesty.',
    },
    context: {
      before: {
        reference: '2 Peter 1:15',
        text: 'And I will make every effort so that after my departure you may be able at any time to recall these things.',
      },
      after: {
        reference: '2 Peter 1:17',
        text: 'For when he received honor and glory from God the Father, and the voice was borne to him by the Majestic Glory.',
      },
    },
  },
  {
    id: '2-peter-2-9',
    reference: '2 Peter 2:9',
    book: '2 Peter',
    chapter: 2,
    verse: 9,
    difficulty: 'medium',
    translations: {
      ESV: 'then the Lord knows how to rescue the godly from trials, and to keep the unrighteous under punishment until the day of judgment.',
      NIV: 'if this is so, then the Lord knows how to rescue the godly from trials and to hold the unrighteous for punishment on the day of judgment.',
      KJV: 'The Lord knoweth how to deliver the godly out of temptations, and to reserve the unjust unto the day of judgment to be punished.',
      NASB: 'then the Lord knows how to rescue the godly from temptation, and to keep the unrighteous under punishment for the day of judgment.',
    },
    context: {
      before: {
        reference: '2 Peter 2:8',
        text: 'for as that righteous man lived among them day after day, he was tormenting his righteous soul over their lawless deeds that he saw and heard.',
      },
      after: {
        reference: '2 Peter 2:10',
        text: 'and especially those who indulge in the lust of defiling passion and despise authority.',
      },
    },
  },
  {
    id: '2-peter-3-13',
    reference: '2 Peter 3:13',
    book: '2 Peter',
    chapter: 3,
    verse: 13,
    difficulty: 'easy',
    translations: {
      ESV: 'But according to his promise we are waiting for new heavens and a new earth in which righteousness dwells.',
      NIV: 'But in keeping with his promise we are looking forward to a new heaven and a new earth, where righteousness dwells.',
      KJV: 'Nevertheless we, according to his promise, look for new heavens and a new earth, wherein dwelleth righteousness.',
      NASB: 'But according to His promise we are looking for new heavens and a new earth, in which righteousness dwells.',
    },
    context: {
      before: {
        reference: '2 Peter 3:12',
        text: 'waiting for and hastening the coming of the day of God, because of which the heavens will be set on fire and dissolved.',
      },
      after: {
        reference: '2 Peter 3:14',
        text: 'Therefore, beloved, since you are waiting for these, be diligent to be found by him without spot or blemish, and at peace.',
      },
    },
  },
  {
    id: '2-peter-3-14',
    reference: '2 Peter 3:14',
    book: '2 Peter',
    chapter: 3,
    verse: 14,
    difficulty: 'medium',
    translations: {
      ESV: 'Therefore, beloved, since you are waiting for these, be diligent to be found by him without spot or blemish, and at peace.',
      NIV: 'So then, dear friends, since you are looking forward to this, make every effort to be found spotless, blameless and at peace with him.',
      KJV: 'Wherefore, beloved, seeing that ye look for such things, be diligent that ye may be found of him in peace, without spot, and blameless.',
      NASB: 'Therefore, beloved, since you look for these things, be diligent to be found by Him in peace, spotless and blameless.',
    },
    context: {
      before: {
        reference: '2 Peter 3:13',
        text: 'But according to his promise we are waiting for new heavens and a new earth in which righteousness dwells.',
      },
      after: {
        reference: '2 Peter 3:15',
        text: 'And count the patience of our Lord as salvation, just as our beloved brother Paul also wrote to you.',
      },
    },
  },

  // ============ JUDE ============
  {
    id: 'jude-1',
    reference: 'Jude 1',
    book: 'Jude',
    chapter: 1,
    verse: 1,
    difficulty: 'medium',
    translations: {
      ESV: 'Jude, a servant of Jesus Christ and brother of James, To those who are called, beloved in God the Father and kept for Jesus Christ.',
      NIV: 'Jude, a servant of Jesus Christ and a brother of James, To those who have been called, who are loved in God the Father and kept for Jesus Christ.',
      KJV: 'Jude, the servant of Jesus Christ, and brother of James, to them that are sanctified by God the Father, and preserved in Jesus Christ, and called.',
      NASB: 'Jude, a bond-servant of Jesus Christ, and brother of James, To those who are the called, beloved in God the Father, and kept for Jesus Christ.',
    },
    context: {
      after: {
        reference: 'Jude 2',
        text: 'May mercy, peace, and love be multiplied to you.',
      },
    },
  },
  {
    id: 'jude-2',
    reference: 'Jude 2',
    book: 'Jude',
    chapter: 1,
    verse: 2,
    difficulty: 'easy',
    translations: {
      ESV: 'May mercy, peace, and love be multiplied to you.',
      NIV: 'Mercy, peace and love be yours in abundance.',
      KJV: 'Mercy unto you, and peace, and love, be multiplied.',
      NASB: 'May mercy and peace and love be multiplied to you.',
    },
    context: {
      before: {
        reference: 'Jude 1',
        text: 'Jude, a servant of Jesus Christ and brother of James, To those who are called, beloved in God the Father and kept for Jesus Christ.',
      },
      after: {
        reference: 'Jude 3',
        text: 'Beloved, although I was very eager to write to you about our common salvation, I found it necessary to write appealing to you to contend for the faith that was once for all delivered to the saints.',
      },
    },
  },
  {
    id: 'jude-5',
    reference: 'Jude 5',
    book: 'Jude',
    chapter: 1,
    verse: 5,
    difficulty: 'hard',
    translations: {
      ESV: 'Now I want to remind you, although you once fully knew it, that Jesus, who saved a people out of the land of Egypt, afterward destroyed those who did not believe.',
      NIV: 'Though you already know all this, I want to remind you that the Lord at one time delivered his people out of Egypt, but later destroyed those who did not believe.',
      KJV: 'I will therefore put you in remembrance, though ye once knew this, how that the Lord, having saved the people out of the land of Egypt, afterward destroyed them that believed not.',
      NASB: 'Now I desire to remind you, though you know all things once for all, that the Lord, after saving a people out of the land of Egypt, subsequently destroyed those who did not believe.',
    },
    context: {
      before: {
        reference: 'Jude 4',
        text: 'For certain people have crept in unnoticed who long ago were designated for this condemnation, ungodly people, who pervert the grace of our God into sensuality and deny our only Master and Lord, Jesus Christ.',
      },
      after: {
        reference: 'Jude 6',
        text: 'And the angels who did not stay within their own position of authority, but left their proper dwelling, he has kept in eternal chains under gloomy darkness until the judgment of the great day.',
      },
    },
  },
  {
    id: 'jude-6',
    reference: 'Jude 6',
    book: 'Jude',
    chapter: 1,
    verse: 6,
    difficulty: 'hard',
    translations: {
      ESV: 'And the angels who did not stay within their own position of authority, but left their proper dwelling, he has kept in eternal chains under gloomy darkness until the judgment of the great day.',
      NIV: 'And the angels who did not keep their positions of authority but abandoned their proper dwelling—these he has kept in darkness, bound with everlasting chains for judgment on the great Day.',
      KJV: 'And the angels which kept not their first estate, but left their own habitation, he hath reserved in everlasting chains under darkness unto the judgment of the great day.',
      NASB: 'And angels who did not keep their own domain, but abandoned their proper abode, He has kept in eternal bonds under darkness for the judgment of the great day.',
    },
    context: {
      before: {
        reference: 'Jude 5',
        text: 'Now I want to remind you, although you once fully knew it, that Jesus, who saved a people out of the land of Egypt, afterward destroyed those who did not believe.',
      },
      after: {
        reference: 'Jude 7',
        text: 'Just as Sodom and Gomorrah and the surrounding cities, which likewise indulged in sexual immorality and pursued unnatural desire, serve as an example by undergoing a punishment of eternal fire.',
      },
    },
  },
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
  {
    id: 'jude-4',
    reference: 'Jude 4',
    book: 'Jude',
    chapter: 1,
    verse: 4,
    difficulty: 'hard',
    translations: {
      ESV: 'For certain people have crept in unnoticed who long ago were designated for this condemnation, ungodly people, who pervert the grace of our God into sensuality and deny our only Master and Lord, Jesus Christ.',
      NIV: 'For certain individuals whose condemnation was written about long ago have secretly slipped in among you. They are ungodly people, who pervert the grace of our God into a license for immorality and deny Jesus Christ our only Sovereign and Lord.',
      KJV: 'For there are certain men crept in unawares, who were before of old ordained to this condemnation, ungodly men, turning the grace of our God into lasciviousness, and denying the only Lord God, and our Lord Jesus Christ.',
      NASB: 'For certain persons have crept in unnoticed, those who were long beforehand marked out for this condemnation, ungodly persons who turn the grace of our God into licentiousness and deny our only Master and Lord, Jesus Christ.',
    },
    context: {
      before: {
        reference: 'Jude 3',
        text: 'Beloved, although I was very eager to write to you about our common salvation, I found it necessary to write appealing to you to contend for the faith.',
      },
      after: {
        reference: 'Jude 5',
        text: 'Now I want to remind you, although you once fully knew it, that Jesus, who saved a people out of the land of Egypt, afterward destroyed those who did not believe.',
      },
    },
  },
  {
    id: 'jude-17-19',
    reference: 'Jude 17-19',
    book: 'Jude',
    chapter: 1,
    verse: 17,
    difficulty: 'hard',
    translations: {
      ESV: 'But you must remember, beloved, the predictions of the apostles of our Lord Jesus Christ. They said to you, "In the last time there will be scoffers, following their own ungodly passions." It is these who cause divisions, worldly people, devoid of the Spirit.',
      NIV: 'But, dear friends, remember what the apostles of our Lord Jesus Christ foretold. They said to you, "In the last times there will be scoffers who will follow their own ungodly desires." These are the people who divide you, who follow mere natural instincts and do not have the Spirit.',
      KJV: 'But, beloved, remember ye the words which were spoken before of the apostles of our Lord Jesus Christ; How that they told you there should be mockers in the last time, who should walk after their own ungodly lusts. These be they who separate themselves, sensual, having not the Spirit.',
      NASB: 'But you, beloved, ought to remember the words that were spoken beforehand by the apostles of our Lord Jesus Christ, that they were saying to you, "In the last time there will be mockers, following after their own ungodly lusts." These are the ones who cause divisions, worldly-minded, devoid of the Spirit.',
    },
    context: {
      before: {
        reference: 'Jude 16',
        text: 'These are grumblers, malcontents, following their own sinful desires; they are loud-mouthed boasters, showing favoritism to gain advantage.',
      },
      after: {
        reference: 'Jude 20',
        text: 'But you, beloved, building yourselves up in your most holy faith and praying in the Holy Spirit.',
      },
    },
  },
  {
    id: 'jude-22-23',
    reference: 'Jude 22-23',
    book: 'Jude',
    chapter: 1,
    verse: 22,
    difficulty: 'medium',
    translations: {
      ESV: 'And have mercy on those who doubt; save others by snatching them out of the fire; to others show mercy with fear, hating even the garment stained by the flesh.',
      NIV: 'Be merciful to those who doubt; save others by snatching them from the fire; to others show mercy, mixed with fear—hating even the clothing stained by corrupted flesh.',
      KJV: 'And of some have compassion, making a difference: And others save with fear, pulling them out of the fire; hating even the garment spotted by the flesh.',
      NASB: 'And have mercy on some, who are doubting; save others, snatching them out of the fire; and on some have mercy with fear, hating even the garment polluted by the flesh.',
    },
    context: {
      before: {
        reference: 'Jude 21',
        text: 'Keep yourselves in the love of God, waiting for the mercy of our Lord Jesus Christ that leads to eternal life.',
      },
      after: {
        reference: 'Jude 24',
        text: 'Now to him who is able to keep you from stumbling and to present you blameless before the presence of his glory with great joy.',
      },
    },
  },
  {
    id: 'jude-25',
    reference: 'Jude 25',
    book: 'Jude',
    chapter: 1,
    verse: 25,
    difficulty: 'medium',
    translations: {
      ESV: 'To the only God, our Savior, through Jesus Christ our Lord, be glory, majesty, dominion, and authority, before all time and now and forever. Amen.',
      NIV: 'To the only God our Savior be glory, majesty, power and authority, through Jesus Christ our Lord, before all ages, now and forevermore! Amen.',
      KJV: 'To the only wise God our Saviour, be glory and majesty, dominion and power, both now and ever. Amen.',
      NASB: 'To the only God our Savior, through Jesus Christ our Lord, be glory, majesty, dominion and authority, before all time and now and forever. Amen.',
    },
    context: {
      before: {
        reference: 'Jude 24',
        text: 'Now to him who is able to keep you from stumbling and to present you blameless before the presence of his glory with great joy.',
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
  {
    id: 'revelation-1-5',
    reference: 'Revelation 1:5',
    book: 'Revelation',
    chapter: 1,
    verse: 5,
    difficulty: 'hard',
    translations: {
      ESV: 'and from Jesus Christ the faithful witness, the firstborn of the dead, and the ruler of kings on earth. To him who loves us and has freed us from our sins by his blood',
      NIV: 'and from Jesus Christ, who is the faithful witness, the firstborn from the dead, and the ruler of the kings of the earth. To him who loves us and has freed us from our sins by his blood,',
      KJV: 'And from Jesus Christ, who is the faithful witness, and the first begotten of the dead, and the prince of the kings of the earth. Unto him that loved us, and washed us from our sins in his own blood,',
      NASB: 'and from Jesus Christ, the faithful witness, the firstborn of the dead, and the ruler of the kings of the earth. To Him who loves us and released us from our sins by His blood—',
    },
    context: {
      before: {
        reference: 'Revelation 1:4',
        text: 'John to the seven churches that are in Asia: Grace to you and peace from him who is and who was and who is to come, and from the seven spirits who are before his throne,',
      },
      after: {
        reference: 'Revelation 1:6',
        text: 'and made us a kingdom, priests to his God and Father, to him be glory and dominion forever and ever. Amen.',
      },
    },
  },
  {
    id: 'revelation-2-10',
    reference: 'Revelation 2:10',
    book: 'Revelation',
    chapter: 2,
    verse: 10,
    difficulty: 'hard',
    translations: {
      ESV: 'Do not fear what you are about to suffer. Behold, the devil is about to throw some of you into prison, that you may be tested, and for ten days you will have tribulation. Be faithful unto death, and I will give you the crown of life.',
      NIV: 'Do not be afraid of what you are about to suffer. I tell you, the devil will put some of you in prison to test you, and you will suffer persecution for ten days. Be faithful, even to the point of death, and I will give you life as your victor\'s crown.',
      KJV: 'Fear none of those things which thou shalt suffer: behold, the devil shall cast some of you into prison, that ye may be tried; and ye shall have tribulation ten days: be thou faithful unto death, and I will give thee a crown of life.',
      NASB: 'Do not fear what you are about to suffer. Behold, the devil is about to cast some of you into prison, so that you will be tested, and you will have tribulation for ten days. Be faithful until death, and I will give you the crown of life.',
    },
    context: {
      before: {
        reference: 'Revelation 2:9',
        text: 'I know your tribulation and your poverty (but you are rich) and the slander of those who say that they are Jews and are not, but are a synagogue of Satan.',
      },
      after: {
        reference: 'Revelation 2:11',
        text: 'He who has an ear, let him hear what the Spirit says to the churches. The one who conquers will not be hurt by the second death.',
      },
    },
  },
  {
    id: 'revelation-4-11',
    reference: 'Revelation 4:11',
    book: 'Revelation',
    chapter: 4,
    verse: 11,
    difficulty: 'medium',
    translations: {
      ESV: 'Worthy are you, our Lord and God, to receive glory and honor and power, for you created all things, and by your will they existed and were created.',
      NIV: 'You are worthy, our Lord and God, to receive glory and honor and power, for you created all things, and by your will they were created and have their being.',
      KJV: 'Thou art worthy, O Lord, to receive glory and honour and power: for thou hast created all things, and for thy pleasure they are and were created.',
      NASB: 'Worthy are You, our Lord and our God, to receive glory and honor and power; for You created all things, and because of Your will they existed, and were created.',
    },
    context: {
      before: {
        reference: 'Revelation 4:10',
        text: 'the twenty-four elders fall down before him who is seated on the throne and worship him who lives forever and ever. They cast their crowns before the throne, saying,',
      },
      after: {
        reference: 'Revelation 5:1',
        text: 'Then I saw in the right hand of him who was seated on the throne a scroll written within and on the back, sealed with seven seals.',
      },
    },
  },
  {
    id: 'revelation-5-12',
    reference: 'Revelation 5:12',
    book: 'Revelation',
    chapter: 5,
    verse: 12,
    difficulty: 'medium',
    translations: {
      ESV: 'saying with a loud voice, "Worthy is the Lamb who was slain, to receive power and wealth and wisdom and might and honor and glory and blessing!"',
      NIV: 'In a loud voice they were saying: "Worthy is the Lamb, who was slain, to receive power and wealth and wisdom and strength and honor and glory and praise!"',
      KJV: 'Saying with a loud voice, Worthy is the Lamb that was slain to receive power, and riches, and wisdom, and strength, and honour, and glory, and blessing.',
      NASB: 'saying with a loud voice, "Worthy is the Lamb that was slain to receive power and riches and wisdom and might and honor and glory and blessing."',
    },
    context: {
      before: {
        reference: 'Revelation 5:11',
        text: 'Then I looked, and I heard around the throne and the living creatures and the elders the voice of many angels, numbering myriads of myriads and thousands of thousands,',
      },
      after: {
        reference: 'Revelation 5:13',
        text: 'And I heard every creature in heaven and on earth and under the earth and in the sea, and all that is in them, saying, "To him who sits on the throne and to the Lamb be blessing and honor and glory and might forever and ever!"',
      },
    },
  },
  {
    id: 'revelation-11-15',
    reference: 'Revelation 11:15',
    book: 'Revelation',
    chapter: 11,
    verse: 15,
    difficulty: 'medium',
    translations: {
      ESV: 'Then the seventh angel blew his trumpet, and there were loud voices in heaven, saying, "The kingdom of the world has become the kingdom of our Lord and of his Christ, and he shall reign forever and ever."',
      NIV: 'The seventh angel sounded his trumpet, and there were loud voices in heaven, which said: "The kingdom of the world has become the kingdom of our Lord and of his Messiah, and he will reign for ever and ever."',
      KJV: 'And the seventh angel sounded; and there were great voices in heaven, saying, The kingdoms of this world are become the kingdoms of our Lord, and of his Christ; and he shall reign for ever and ever.',
      NASB: 'Then the seventh angel sounded; and there were loud voices in heaven, saying, "The kingdom of the world has become the kingdom of our Lord and of His Christ; and He will reign forever and ever."',
    },
    context: {
      before: {
        reference: 'Revelation 11:14',
        text: 'The second woe has passed; behold, the third woe is soon to come.',
      },
      after: {
        reference: 'Revelation 11:16',
        text: 'And the twenty-four elders who sit on their thrones before God fell on their faces and worshiped God,',
      },
    },
  },
  {
    id: 'revelation-14-12',
    reference: 'Revelation 14:12',
    book: 'Revelation',
    chapter: 14,
    verse: 12,
    difficulty: 'easy',
    translations: {
      ESV: 'Here is a call for the endurance of the saints, those who keep the commandments of God and their faith in Jesus.',
      NIV: 'This calls for patient endurance on the part of the people of God who keep his commands and remain faithful to Jesus.',
      KJV: 'Here is the patience of the saints: here are they that keep the commandments of God, and the faith of Jesus.',
      NASB: 'Here is the perseverance of the saints who keep the commandments of God and their faith in Jesus.',
    },
    context: {
      before: {
        reference: 'Revelation 14:11',
        text: 'And the smoke of their torment goes up forever and ever, and they have no rest, day or night, these worshipers of the beast and its image.',
      },
      after: {
        reference: 'Revelation 14:13',
        text: 'And I heard a voice from heaven saying, "Write this: Blessed are the dead who die in the Lord from now on."',
      },
    },
  },
  {
    id: 'revelation-15-3',
    reference: 'Revelation 15:3',
    book: 'Revelation',
    chapter: 15,
    verse: 3,
    difficulty: 'hard',
    translations: {
      ESV: 'And they sing the song of Moses, the servant of God, and the song of the Lamb, saying, "Great and amazing are your deeds, O Lord God the Almighty! Just and true are your ways, O King of the nations!"',
      NIV: 'and sang the song of God\'s servant Moses and of the Lamb: "Great and marvelous are your deeds, Lord God Almighty. Just and true are your ways, King of the nations."',
      KJV: 'And they sing the song of Moses the servant of God, and the song of the Lamb, saying, Great and marvellous are thy works, Lord God Almighty; just and true are thy ways, thou King of saints.',
      NASB: 'And they sang the song of Moses, the bond-servant of God, and the song of the Lamb, saying, "Great and marvelous are Your works, O Lord God, the Almighty; Righteous and true are Your ways, King of the nations!"',
    },
    context: {
      before: {
        reference: 'Revelation 15:2',
        text: 'And I saw what appeared to be a sea of glass mingled with fire—and also those who had conquered the beast and its image and the number of its name, standing beside the sea of glass with harps of God in their hands.',
      },
      after: {
        reference: 'Revelation 15:4',
        text: 'Who will not fear, O Lord, and glorify your name? For you alone are holy. All nations will come and worship you, for your righteous acts have been revealed.',
      },
    },
  },
  {
    id: 'revelation-19-6',
    reference: 'Revelation 19:6',
    book: 'Revelation',
    chapter: 19,
    verse: 6,
    difficulty: 'medium',
    translations: {
      ESV: 'Then I heard what seemed to be the voice of a great multitude, like the roar of many waters and like the sound of mighty peals of thunder, crying out, "Hallelujah! For the Lord our God the Almighty reigns."',
      NIV: 'Then I heard what sounded like a great multitude, like the roar of rushing waters and like loud peals of thunder, shouting: "Hallelujah! For our Lord God Almighty reigns."',
      KJV: 'And I heard as it were the voice of a great multitude, and as the voice of many waters, and as the voice of mighty thunderings, saying, Alleluia: for the Lord God omnipotent reigneth.',
      NASB: 'Then I heard something like the voice of a great multitude and like the sound of many waters and like the sound of mighty peals of thunder, saying, "Hallelujah! For the Lord our God, the Almighty, reigns."',
    },
    context: {
      before: {
        reference: 'Revelation 19:5',
        text: 'And from the throne came a voice saying, "Praise our God, all you his servants, you who fear him, small and great."',
      },
      after: {
        reference: 'Revelation 19:7',
        text: 'Let us rejoice and exult and give him the glory, for the marriage of the Lamb has come, and his Bride has made herself ready.',
      },
    },
  },
  {
    id: 'revelation-20-6',
    reference: 'Revelation 20:6',
    book: 'Revelation',
    chapter: 20,
    verse: 6,
    difficulty: 'medium',
    translations: {
      ESV: 'Blessed and holy is the one who shares in the first resurrection! Over such the second death has no power, but they will be priests of God and of Christ, and they will reign with him for a thousand years.',
      NIV: 'Blessed and holy are those who share in the first resurrection. The second death has no power over them, but they will be priests of God and of Christ and will reign with him for a thousand years.',
      KJV: 'Blessed and holy is he that hath part in the first resurrection: on such the second death hath no power, but they shall be priests of God and of Christ, and shall reign with him a thousand years.',
      NASB: 'Blessed and holy is the one who has a part in the first resurrection; over these the second death has no power, but they will be priests of God and of Christ and will reign with Him for a thousand years.',
    },
    context: {
      before: {
        reference: 'Revelation 20:5',
        text: 'The rest of the dead did not come to life until the thousand years were ended. This is the first resurrection.',
      },
      after: {
        reference: 'Revelation 20:7',
        text: 'And when the thousand years are ended, Satan will be released from his prison.',
      },
    },
  },
  {
    id: 'revelation-21-3',
    reference: 'Revelation 21:3',
    book: 'Revelation',
    chapter: 21,
    verse: 3,
    difficulty: 'hard',
    translations: {
      ESV: 'And I heard a loud voice from the throne saying, "Behold, the dwelling place of God is with man. He will dwell with them, and they will be his people, and God himself will be with them as their God."',
      NIV: 'And I heard a loud voice from the throne saying, "Look! God\'s dwelling place is now among the people, and he will dwell with them. They will be his people, and God himself will be with them and be their God."',
      KJV: 'And I heard a great voice out of heaven saying, Behold, the tabernacle of God is with men, and he will dwell with them, and they shall be his people, and God himself shall be with them, and be their God.',
      NASB: 'And I heard a loud voice from the throne, saying, "Behold, the tabernacle of God is among men, and He will dwell among them, and they shall be His people, and God Himself will be among them,"',
    },
    context: {
      before: {
        reference: 'Revelation 21:2',
        text: 'And I saw the holy city, new Jerusalem, coming down out of heaven from God, prepared as a bride adorned for her husband.',
      },
      after: {
        reference: 'Revelation 21:4',
        text: 'He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.',
      },
    },
  },
  {
    id: 'revelation-22-12',
    reference: 'Revelation 22:12',
    book: 'Revelation',
    chapter: 22,
    verse: 12,
    difficulty: 'easy',
    translations: {
      ESV: 'Behold, I am coming soon, bringing my recompense with me, to repay each one for what he has done.',
      NIV: 'Look, I am coming soon! My reward is with me, and I will give to each person according to what they have done.',
      KJV: 'And, behold, I come quickly; and my reward is with me, to give every man according as his work shall be.',
      NASB: 'Behold, I am coming quickly, and My reward is with Me, to render to every man according to what he has done.',
    },
    context: {
      before: {
        reference: 'Revelation 22:11',
        text: 'Let the evildoer still do evil, and the filthy still be filthy, and the righteous still do right, and the holy still be holy.',
      },
      after: {
        reference: 'Revelation 22:13',
        text: 'I am the Alpha and the Omega, the first and the last, the beginning and the end.',
      },
    },
  },
  {
    id: 'revelation-22-13',
    reference: 'Revelation 22:13',
    book: 'Revelation',
    chapter: 22,
    verse: 13,
    difficulty: 'easy',
    translations: {
      ESV: 'I am the Alpha and the Omega, the first and the last, the beginning and the end.',
      NIV: 'I am the Alpha and the Omega, the First and the Last, the Beginning and the End.',
      KJV: 'I am Alpha and Omega, the beginning and the end, the first and the last.',
      NASB: 'I am the Alpha and the Omega, the first and the last, the beginning and the end.',
    },
    context: {
      before: {
        reference: 'Revelation 22:12',
        text: 'Behold, I am coming soon, bringing my recompense with me, to repay each one for what he has done.',
      },
      after: {
        reference: 'Revelation 22:14',
        text: 'Blessed are those who wash their robes, so that they may have the right to the tree of life and that they may enter the city by the gates.',
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
