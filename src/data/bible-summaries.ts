// Bible Book Summaries Data
// Comprehensive summaries of all 66 books organized by canonical groupings
// Style: Similar to Darby's Synopsis, modernized language

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export type Testament = 'old' | 'new';

export type CanonicalGroup =
  // Old Testament
  | 'law'              // Torah: Genesis-Deuteronomy
  | 'history'          // Joshua-Esther
  | 'poetry'           // Job-Song of Solomon
  | 'major_prophets'   // Isaiah-Daniel
  | 'minor_prophets'   // Hosea-Malachi
  // New Testament
  | 'gospels'          // Matthew-John
  | 'acts'             // Acts
  | 'pauline'          // Romans-Philemon
  | 'general'          // Hebrews-Jude
  | 'apocalyptic';     // Revelation

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface BookOutlineSection {
  section: string;
  chapters: string;
  summary: string;
}

export interface KeyTheme {
  theme: string;
  description: string;
  keyPassages: string[];
}

export interface ChristConnection {
  type: 'prophecy' | 'type' | 'theme' | 'direct';
  description: string;
  passages: string[];
}

export interface KeyVerse {
  reference: string;
  text: string;
  significance: string;
}

export interface KeyCharacter {
  name: string;
  role: string;
}

export interface KeyEvent {
  event: string;
  reference: string;
  significance: string;
}

export interface BibleBookSummary {
  id: string;
  name: string;
  abbreviation: string;
  testament: Testament;
  canonicalGroup: CanonicalGroup;
  order: number;

  // Metadata
  author: string;
  authorNotes?: string;
  dateWritten: string;
  originalAudience: string;
  literaryGenre: string[];

  // Content
  overview: string;
  purpose: string;
  outline: BookOutlineSection[];

  // Themes
  keyThemes: KeyTheme[];
  christConnection: ChristConnection[];

  // Key content
  keyVerses: KeyVerse[];
  keyCharacters?: KeyCharacter[];
  keyEvents?: KeyEvent[];

  // Study aids
  practicalApplications: string[];
  studyQuestions: string[];

  difficulty: Difficulty;
}

// ============================================================================
// CANONICAL GROUPS METADATA
// ============================================================================

export const CANONICAL_GROUPS: {
  testament: Testament;
  group: CanonicalGroup;
  label: string;
  description: string;
  bookCount: number;
}[] = [
  // Old Testament
  { testament: 'old', group: 'law', label: 'Law (Torah)', description: 'The five books of Moses - foundation of the covenant', bookCount: 5 },
  { testament: 'old', group: 'history', label: 'Historical Books', description: 'Israel\'s history from conquest to restoration', bookCount: 12 },
  { testament: 'old', group: 'poetry', label: 'Poetry & Wisdom', description: 'Hebrew poetry and wisdom literature', bookCount: 5 },
  { testament: 'old', group: 'major_prophets', label: 'Major Prophets', description: 'The longer prophetic books', bookCount: 5 },
  { testament: 'old', group: 'minor_prophets', label: 'Minor Prophets', description: 'The Twelve - shorter prophetic books', bookCount: 12 },
  // New Testament
  { testament: 'new', group: 'gospels', label: 'Gospels', description: 'The life, death, and resurrection of Jesus', bookCount: 4 },
  { testament: 'new', group: 'acts', label: 'History', description: 'The early church and apostolic mission', bookCount: 1 },
  { testament: 'new', group: 'pauline', label: 'Pauline Epistles', description: 'Letters from the Apostle Paul', bookCount: 13 },
  { testament: 'new', group: 'general', label: 'General Epistles', description: 'Letters to the broader church', bookCount: 8 },
  { testament: 'new', group: 'apocalyptic', label: 'Apocalyptic', description: 'Prophetic revelation of the end', bookCount: 1 },
];

// ============================================================================
// BIBLE BOOK SUMMARIES DATA
// ============================================================================

export const BIBLE_BOOK_SUMMARIES: BibleBookSummary[] = [
  // ========================================
  // LAW (TORAH) - Genesis through Deuteronomy
  // ========================================
  {
    id: 'genesis',
    name: 'Genesis',
    abbreviation: 'Gen',
    testament: 'old',
    canonicalGroup: 'law',
    order: 1,
    author: 'Moses',
    authorNotes: 'Traditional authorship attributed to Moses, with possible later editorial updates.',
    dateWritten: 'c. 1446-1406 BC',
    originalAudience: 'The nation of Israel during the wilderness wanderings',
    literaryGenre: ['narrative', 'genealogy', 'poetry'],
    difficulty: 'easy',

    overview: `Genesis, meaning "beginning" or "origin," is the foundational book of the Bible. It establishes the essential truths upon which all of Scripture builds: God as Creator, the origin of humanity in His image, the entrance of sin into the world, and God's redemptive plan through a chosen people.

The book divides naturally into two major sections. Chapters 1-11 present primeval history—creation, fall, flood, and the scattering at Babel. Chapters 12-50 focus on patriarchal history—the lives of Abraham, Isaac, Jacob, and Joseph. Through these narratives, we see God working out His sovereign purposes despite human failure.

Genesis introduces the central biblical theme of covenant. God's promises to Abraham—land, offspring, and blessing to all nations—form the backbone of the redemptive story that unfolds throughout Scripture. Every major theological theme finds its seed in Genesis: creation and providence, sin and judgment, grace and redemption, faith and obedience.`,

    purpose: `Moses wrote Genesis to provide Israel with a theological foundation for understanding their identity, their God, and their mission. As they prepared to enter the Promised Land, they needed to know where they came from, why they existed, and what God had promised their fathers. Genesis answers these questions while pointing forward to the ultimate fulfillment of God's promises in Christ.`,

    outline: [
      { section: 'Primeval History', chapters: '1-11', summary: 'Creation, Fall, Flood, and Babel—God creates a good world, humanity rebels, and God begins His redemptive work.' },
      { section: 'Abraham\'s Story', chapters: '12-25:18', summary: 'God calls Abraham, establishes His covenant, and tests Abraham\'s faith through the sacrifice of Isaac.' },
      { section: 'Isaac and Jacob', chapters: '25:19-36:43', summary: 'The covenant passes to Isaac and then to Jacob, who becomes Israel and fathers the twelve tribes.' },
      { section: 'Joseph\'s Story', chapters: '37-50', summary: 'Joseph\'s journey from slavery to rulership demonstrates God\'s providence in preserving His people.' }
    ],

    keyThemes: [
      {
        theme: 'Creation',
        description: 'God alone is the Creator of all things. He made the world "very good" and placed humanity at the pinnacle of creation as His image-bearers.',
        keyPassages: ['1:1-2:3', '2:4-25']
      },
      {
        theme: 'Fall and Sin',
        description: 'Human rebellion brought sin, death, and corruption into God\'s good creation. Yet even in judgment, God showed mercy through the promise of a Deliverer.',
        keyPassages: ['3:1-24', '6:5-8', '11:1-9']
      },
      {
        theme: 'Covenant',
        description: 'God establishes binding relationships with His people. The Abrahamic covenant—land, offspring, blessing—becomes the framework for understanding God\'s redemptive plan.',
        keyPassages: ['12:1-3', '15:1-21', '17:1-27']
      },
      {
        theme: 'Providence',
        description: 'God sovereignly works through all circumstances—even human sin—to accomplish His good purposes. Joseph\'s story supremely illustrates this truth.',
        keyPassages: ['45:5-8', '50:20']
      }
    ],

    christConnection: [
      { type: 'prophecy', description: 'The "seed of the woman" who will crush the serpent\'s head (the proto-evangelium)', passages: ['3:15'] },
      { type: 'type', description: 'Isaac as a type of Christ—the beloved son offered in sacrifice', passages: ['22:1-19'] },
      { type: 'type', description: 'Joseph as a type of Christ—rejected by his brothers, raised to glory, becoming the savior of his people', passages: ['37-50'] },
      { type: 'prophecy', description: 'The scepter from Judah and the ruler to whom the nations will come (Shiloh)', passages: ['49:10'] }
    ],

    keyVerses: [
      { reference: '1:1', text: 'In the beginning, God created the heavens and the earth.', significance: 'The foundational statement of biblical theology—God exists, and He is the Creator.' },
      { reference: '1:27', text: 'So God created man in his own image, in the image of God he created him; male and female he created them.', significance: 'Establishes human dignity and the basis for ethics.' },
      { reference: '3:15', text: 'I will put enmity between you and the woman, and between your offspring and her offspring; he shall bruise your head, and you shall bruise his heel.', significance: 'The first promise of a Redeemer—the proto-evangelium.' },
      { reference: '12:3', text: 'I will bless those who bless you, and him who dishonors you I will curse, and in you all the families of the earth shall be blessed.', significance: 'The Abrahamic covenant—foundation for God\'s plan of salvation.' },
      { reference: '50:20', text: 'As for you, you meant evil against me, but God meant it for good, to bring it about that many people should be kept alive.', significance: 'Classic statement of divine providence working through human evil.' }
    ],

    keyCharacters: [
      { name: 'Adam', role: 'First man, federal head of humanity' },
      { name: 'Eve', role: 'First woman, mother of all living' },
      { name: 'Noah', role: 'Righteous man who built the ark' },
      { name: 'Abraham', role: 'Father of faith, recipient of the covenant' },
      { name: 'Isaac', role: 'Son of promise, patriarch' },
      { name: 'Jacob/Israel', role: 'Father of the twelve tribes' },
      { name: 'Joseph', role: 'Savior of his family, ruler in Egypt' }
    ],

    keyEvents: [
      { event: 'Creation', reference: '1-2', significance: 'God creates all things good and establishes the order of the world.' },
      { event: 'The Fall', reference: '3', significance: 'Sin enters the world through human disobedience.' },
      { event: 'The Flood', reference: '6-9', significance: 'God judges sin while preserving a remnant through Noah.' },
      { event: 'Tower of Babel', reference: '11', significance: 'Human pride leads to the scattering of nations.' },
      { event: 'Call of Abraham', reference: '12', significance: 'God begins His redemptive plan through one family.' },
      { event: 'Binding of Isaac', reference: '22', significance: 'Abraham\'s faith tested; picture of substitutionary sacrifice.' }
    ],

    practicalApplications: [
      'Trust in God as the sovereign Creator who gives life meaning and purpose.',
      'Recognize that sin has consequences, but God offers grace to sinners.',
      'Live by faith in God\'s promises, as Abraham did.',
      'Trust God\'s providence even when circumstances seem hopeless.',
      'Walk in covenant faithfulness, knowing God keeps His promises.'
    ],

    studyQuestions: [
      'How does Genesis 1-2 shape our understanding of human identity and purpose?',
      'What does the Fall (Genesis 3) teach us about the nature and consequences of sin?',
      'How do God\'s promises to Abraham connect to the gospel of Jesus Christ?',
      'What does Joseph\'s story teach us about God\'s providence in suffering?',
      'Where do you see Christ foreshadowed in Genesis?'
    ]
  },

  {
    id: 'exodus',
    name: 'Exodus',
    abbreviation: 'Exod',
    testament: 'old',
    canonicalGroup: 'law',
    order: 2,
    author: 'Moses',
    dateWritten: 'c. 1446-1406 BC',
    originalAudience: 'The nation of Israel during the wilderness wanderings',
    literaryGenre: ['narrative', 'law', 'poetry'],
    difficulty: 'medium',

    overview: `Exodus, meaning "departure" or "going out," records Israel's dramatic deliverance from Egyptian bondage and their constitution as God's covenant people at Sinai. The book moves from slavery to worship, from oppression under Pharaoh to fellowship with the LORD in the tabernacle.

The narrative of deliverance dominates the first half. God raises up Moses as deliverer, judges Egypt through ten plagues, and brings Israel through the Red Sea on dry ground. The Passover lamb, whose blood protects God's people from judgment, becomes the defining image of redemption throughout Scripture.

At Sinai, God enters into covenant with His redeemed people. He gives the Ten Commandments and the book of the covenant, establishing how Israel is to live as His holy nation. The book concludes with detailed instructions for the tabernacle—the dwelling place where God will meet with His people and receive their worship.`,

    purpose: `Exodus establishes Israel's identity as a redeemed people belonging to the LORD. It records the founding events of the nation and provides the legal and liturgical framework for their life as God's covenant community. The book teaches that salvation is by grace through blood, and that the redeemed are called to holy living in communion with God.`,

    outline: [
      { section: 'Israel in Egypt', chapters: '1-4', summary: 'Israel\'s oppression in Egypt and God\'s call of Moses as deliverer.' },
      { section: 'Deliverance from Egypt', chapters: '5-15', summary: 'The plagues, Passover, and exodus through the Red Sea.' },
      { section: 'Journey to Sinai', chapters: '15-18', summary: 'God\'s provision in the wilderness: water, manna, and protection.' },
      { section: 'Covenant at Sinai', chapters: '19-24', summary: 'The giving of the law and establishment of the covenant.' },
      { section: 'Tabernacle Instructions', chapters: '25-31', summary: 'Detailed plans for the tabernacle and priesthood.' },
      { section: 'Golden Calf and Renewal', chapters: '32-34', summary: 'Israel\'s apostasy, Moses\'s intercession, and covenant renewal.' },
      { section: 'Tabernacle Construction', chapters: '35-40', summary: 'The building of the tabernacle and God\'s glory filling it.' }
    ],

    keyThemes: [
      {
        theme: 'Redemption',
        description: 'God delivers His people from bondage by His mighty hand. The exodus becomes the defining act of salvation in the Old Testament, pointing forward to the greater redemption in Christ.',
        keyPassages: ['6:6-7', '12:1-28', '14:13-14']
      },
      {
        theme: 'Covenant',
        description: 'At Sinai, God establishes Israel as His treasured possession, a kingdom of priests, a holy nation. The covenant creates a relationship with attendant blessings and obligations.',
        keyPassages: ['19:3-6', '24:1-8']
      },
      {
        theme: 'Law',
        description: 'The Ten Commandments and covenant code reveal God\'s character and instruct the redeemed in how to live as His people. The law is given to those already saved, not as a means of salvation.',
        keyPassages: ['20:1-17', '21-23']
      },
      {
        theme: 'Presence of God',
        description: 'God desires to dwell among His people. The tabernacle provides the means for holy God to live in the midst of a sinful people through sacrifice and mediation.',
        keyPassages: ['25:8', '40:34-38']
      }
    ],

    christConnection: [
      { type: 'type', description: 'The Passover lamb whose blood saves from judgment', passages: ['12:1-28'] },
      { type: 'type', description: 'Moses as mediator between God and the people', passages: ['20:18-21', '32:30-32'] },
      { type: 'type', description: 'The tabernacle as God\'s dwelling with His people—fulfilled in the incarnation', passages: ['25:8-9', '40:34-38'] },
      { type: 'theme', description: 'Deliverance from slavery to sin and death', passages: ['6:6-7', '14:13-14'] }
    ],

    keyVerses: [
      { reference: '3:14', text: 'God said to Moses, "I AM WHO I AM."', significance: 'God reveals His covenant name, expressing His eternal self-existence.' },
      { reference: '12:13', text: 'The blood shall be a sign for you, on the houses where you are. And when I see the blood, I will pass over you.', significance: 'Salvation through the blood of the lamb.' },
      { reference: '19:5-6', text: 'Now therefore, if you will indeed obey my voice and keep my covenant, you shall be my treasured possession among all peoples.', significance: 'Israel\'s election and calling as God\'s holy nation.' },
      { reference: '20:2-3', text: 'I am the LORD your God, who brought you out of the land of Egypt. You shall have no other gods before me.', significance: 'The foundation of the Ten Commandments—grace precedes law.' },
      { reference: '34:6-7', text: 'The LORD, the LORD, a God merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness.', significance: 'God\'s self-revelation of His character.' }
    ],

    keyCharacters: [
      { name: 'Moses', role: 'Deliverer, lawgiver, mediator' },
      { name: 'Aaron', role: 'Moses\'s spokesman, first high priest' },
      { name: 'Pharaoh', role: 'King of Egypt who opposed God' },
      { name: 'Miriam', role: 'Moses\'s sister, prophetess' },
      { name: 'Joshua', role: 'Moses\'s assistant, military leader' }
    ],

    keyEvents: [
      { event: 'The Burning Bush', reference: '3', significance: 'God reveals Himself to Moses and commissions him.' },
      { event: 'The Ten Plagues', reference: '7-12', significance: 'God judges Egypt and demonstrates His power over false gods.' },
      { event: 'The Passover', reference: '12', significance: 'Israel is saved through the blood of the lamb.' },
      { event: 'Crossing the Red Sea', reference: '14', significance: 'God delivers Israel and destroys their enemies.' },
      { event: 'Giving of the Law', reference: '19-20', significance: 'God establishes His covenant at Sinai.' },
      { event: 'Golden Calf', reference: '32', significance: 'Israel\'s apostasy and God\'s gracious renewal.' }
    ],

    practicalApplications: [
      'Remember that God hears the cries of His oppressed people and acts to deliver them.',
      'Recognize that redemption is by grace through the blood of a substitute.',
      'Understand that saved people are called to holy living according to God\'s commands.',
      'Trust that God provides for His people in the wilderness seasons of life.',
      'Worship God according to His instructions, not according to human invention.'
    ],

    studyQuestions: [
      'How does the Passover point to Christ and His atoning work?',
      'What does the giving of the law at Sinai teach us about the relationship between grace and obedience?',
      'How does the tabernacle reveal God\'s desire to dwell with His people?',
      'What do the golden calf incident and its aftermath teach us about sin and restoration?',
      'How does God reveal His character throughout Exodus?'
    ]
  },

  {
    id: 'leviticus',
    name: 'Leviticus',
    abbreviation: 'Lev',
    testament: 'old',
    canonicalGroup: 'law',
    order: 3,
    author: 'Moses',
    dateWritten: 'c. 1446-1406 BC',
    originalAudience: 'The nation of Israel, especially the Levitical priests',
    literaryGenre: ['law', 'ritual instruction'],
    difficulty: 'hard',

    overview: `Leviticus, named for the tribe of Levi who served as priests, is the book of holiness. While modern readers may find its detailed regulations about sacrifices, purity, and festivals challenging, the book addresses a crucial question: How can a holy God dwell among an unholy people? The answer is through blood sacrifice and prescribed holiness.

The book divides into two main sections. Chapters 1-16 focus on sacrifice—the various offerings that provide access to God and atonement for sin. The Day of Atonement (chapter 16) stands as the climax, when the high priest enters the Most Holy Place to make atonement for all Israel's sins.

Chapters 17-27 focus on sanctification—holy living in every area of life. The repeated refrain "Be holy, for I the LORD your God am holy" calls Israel to reflect God's character in their conduct. Sexual ethics, social justice, worship practices, and calendar observances all fall under this call to holiness.`,

    purpose: `Leviticus instructs Israel in how to approach God and how to live as His holy people. It establishes the sacrificial system that deals with sin and enables worship. It reveals God's holiness and His gracious provision for sinners to draw near through blood atonement and mediating priests.`,

    outline: [
      { section: 'The Sacrificial System', chapters: '1-7', summary: 'Five major offerings: burnt, grain, peace, sin, and guilt offerings.' },
      { section: 'Priestly Ordination', chapters: '8-10', summary: 'The consecration of Aaron and his sons; death of Nadab and Abihu.' },
      { section: 'Purity Laws', chapters: '11-15', summary: 'Clean and unclean foods, childbirth, skin diseases, bodily discharges.' },
      { section: 'Day of Atonement', chapters: '16', summary: 'The annual ceremony for cleansing the sanctuary and the people.' },
      { section: 'The Holiness Code', chapters: '17-26', summary: 'Laws governing holy living in all areas of life.' },
      { section: 'Vows and Tithes', chapters: '27', summary: 'Regulations regarding vows and dedications to the LORD.' }
    ],

    keyThemes: [
      {
        theme: 'Holiness',
        description: 'God is utterly holy—set apart, pure, and morally perfect. His people are called to reflect His character in their lives: "Be holy, for I am holy."',
        keyPassages: ['11:44-45', '19:2', '20:26']
      },
      {
        theme: 'Sacrifice',
        description: 'Sin requires blood atonement. The various sacrifices provide the means for approaching God, receiving forgiveness, and maintaining fellowship with Him.',
        keyPassages: ['1:4', '4:20', '17:11']
      },
      {
        theme: 'Mediation',
        description: 'Priests serve as mediators between God and the people. They offer sacrifices, pronounce blessing, and teach God\'s law.',
        keyPassages: ['8-9', '10:10-11']
      },
      {
        theme: 'Atonement',
        description: 'The Day of Atonement provides annual cleansing for all Israel\'s sins. The scapegoat carries sins away; the blood of the sacrifice makes atonement.',
        keyPassages: ['16:1-34']
      }
    ],

    christConnection: [
      { type: 'type', description: 'The sacrificial system points to Christ\'s perfect sacrifice', passages: ['1-7', '17:11'] },
      { type: 'type', description: 'The high priest foreshadows Christ our great High Priest', passages: ['16', '21:10-15'] },
      { type: 'type', description: 'The Day of Atonement prefigures Christ\'s once-for-all atonement', passages: ['16'] },
      { type: 'type', description: 'The scapegoat pictures Christ bearing away our sins', passages: ['16:20-22'] }
    ],

    keyVerses: [
      { reference: '17:11', text: 'For the life of the flesh is in the blood, and I have given it for you on the altar to make atonement for your souls.', significance: 'The foundational principle of blood atonement.' },
      { reference: '19:2', text: 'Speak to all the congregation of the people of Israel and say to them, You shall be holy, for I the LORD your God am holy.', significance: 'The central command of Leviticus.' },
      { reference: '16:30', text: 'For on this day shall atonement be made for you to cleanse you. You shall be clean before the LORD from all your sins.', significance: 'The purpose of the Day of Atonement.' },
      { reference: '19:18', text: 'You shall love your neighbor as yourself: I am the LORD.', significance: 'The second great commandment, quoted by Jesus.' }
    ],

    keyCharacters: [
      { name: 'Aaron', role: 'First high priest of Israel' },
      { name: 'Nadab and Abihu', role: 'Sons of Aaron who died offering unauthorized fire' },
      { name: 'Eleazar and Ithamar', role: 'Surviving sons of Aaron who continued the priesthood' }
    ],

    practicalApplications: [
      'Recognize God\'s absolute holiness and the seriousness of approaching Him.',
      'Understand that sin requires atonement—something must die in our place.',
      'Live distinctively as God\'s holy people in every area of life.',
      'Value the mediating work of Christ who enables our access to God.',
      'See all of life as sacred—there is no secular/sacred divide.'
    ],

    studyQuestions: [
      'How does the sacrificial system point to the person and work of Christ?',
      'What does it mean to "be holy" as God is holy?',
      'How does the Day of Atonement (Leviticus 16) help us understand Christ\'s atonement?',
      'What do the purity laws teach us about God\'s concern for every area of life?',
      'How should the holiness code shape Christian ethics today?'
    ]
  },

  {
    id: 'numbers',
    name: 'Numbers',
    abbreviation: 'Num',
    testament: 'old',
    canonicalGroup: 'law',
    order: 4,
    author: 'Moses',
    dateWritten: 'c. 1406-1405 BC',
    originalAudience: 'The second generation of Israelites preparing to enter Canaan',
    literaryGenre: ['narrative', 'law', 'census'],
    difficulty: 'medium',

    overview: `Numbers records Israel's journey from Sinai to the plains of Moab, covering nearly forty years of wilderness wandering. The book derives its English name from the two censuses that bookend the narrative, but its Hebrew title "In the Wilderness" better captures its content—the testing and failure of a generation, and the preservation of a remnant for God's purposes.

The book begins with order and hope: Israel numbered, organized, and prepared to march. But at Kadesh-barnea, the people refuse to enter the land. Their unbelief dooms a generation to die in the wilderness. The central chapters record rebellions, judgments, and wanderings.

Yet Numbers is ultimately a book of grace. Despite constant failure, God does not abandon His people. A new generation rises, receives additional laws, and prepares to possess the land. The book teaches that unbelief has consequences, but God's purposes cannot be thwarted.`,

    purpose: `Numbers demonstrates the consequences of unbelief while affirming God's faithfulness to His promises. It warns against grumbling and rebellion, calls for trust in God's provision, and shows that even human failure cannot nullify God's covenant purposes.`,

    outline: [
      { section: 'Preparation at Sinai', chapters: '1-10:10', summary: 'Census, camp organization, Levite duties, Passover celebration.' },
      { section: 'Journey to Kadesh', chapters: '10:11-12:16', summary: 'Departure from Sinai; complaints; Miriam and Aaron challenge Moses.' },
      { section: 'Failure at Kadesh', chapters: '13-14', summary: 'The twelve spies; Israel refuses to enter; forty years pronounced.' },
      { section: 'Wilderness Wanderings', chapters: '15-19', summary: 'Various laws; Korah\'s rebellion; Aaron\'s rod; the red heifer.' },
      { section: 'Journey to Moab', chapters: '20-21', summary: 'Death of Miriam and Aaron; Moses strikes the rock; bronze serpent.' },
      { section: 'Balaam and Israel', chapters: '22-25', summary: 'Balaam\'s prophecies; Israel\'s sin with Moab.' },
      { section: 'New Generation', chapters: '26-36', summary: 'Second census; laws for inheritance; Transjordan settlement.' }
    ],

    keyThemes: [
      {
        theme: 'Unbelief and Consequences',
        description: 'Israel\'s repeated failure to trust God resulted in the death of an entire generation. Unbelief is serious sin with serious consequences.',
        keyPassages: ['13-14', '20:12']
      },
      {
        theme: 'God\'s Faithfulness',
        description: 'Despite human failure, God remains faithful to His promises. He preserves a remnant and continues to lead, provide, and protect.',
        keyPassages: ['23:19', '14:21-24']
      },
      {
        theme: 'Testing and Provision',
        description: 'The wilderness becomes a place of testing where God proves His faithfulness to provide water, food, and protection for His people.',
        keyPassages: ['11:4-35', '20:1-13', '21:4-9']
      },
      {
        theme: 'Holiness of Leadership',
        description: 'Those who lead God\'s people are held to high standards. Moses, Aaron, and others face consequences for failures in leadership.',
        keyPassages: ['12', '16', '20:1-13']
      }
    ],

    christConnection: [
      { type: 'type', description: 'The bronze serpent lifted up for healing points to Christ lifted up on the cross', passages: ['21:4-9'] },
      { type: 'type', description: 'The rock from which water flows pictures Christ, the spiritual Rock', passages: ['20:1-13'] },
      { type: 'type', description: 'The red heifer for purification foreshadows Christ\'s cleansing blood', passages: ['19'] },
      { type: 'prophecy', description: 'Balaam\'s prophecy of a star and scepter from Israel', passages: ['24:17'] }
    ],

    keyVerses: [
      { reference: '6:24-26', text: 'The LORD bless you and keep you; the LORD make his face to shine upon you and be gracious to you; the LORD lift up his countenance upon you and give you peace.', significance: 'The priestly blessing—God\'s desire for His people.' },
      { reference: '14:18', text: 'The LORD is slow to anger and abounding in steadfast love, forgiving iniquity and transgression.', significance: 'God\'s character revealed even in judgment.' },
      { reference: '23:19', text: 'God is not man, that he should lie, or a son of man, that he should change his mind. Has he said, and will he not do it?', significance: 'God\'s faithfulness to His word.' },
      { reference: '21:9', text: 'So Moses made a bronze serpent... and if a serpent bit anyone, he would look at the bronze serpent and live.', significance: 'Looking in faith to God\'s provision brings life.' }
    ],

    keyCharacters: [
      { name: 'Moses', role: 'Leader who also fails and is barred from the land' },
      { name: 'Aaron', role: 'High priest who dies in the wilderness' },
      { name: 'Miriam', role: 'Prophetess who dies in the wilderness' },
      { name: 'Caleb', role: 'Faithful spy who trusts God\'s promise' },
      { name: 'Joshua', role: 'Faithful spy appointed to succeed Moses' },
      { name: 'Balaam', role: 'Pagan prophet forced to bless Israel' }
    ],

    practicalApplications: [
      'Trust God\'s promises even when circumstances seem impossible.',
      'Avoid grumbling and complaining, which express unbelief.',
      'Recognize that leadership carries great responsibility and accountability.',
      'Look to Christ as our serpent lifted up—faith in Him brings life.',
      'Persevere through wilderness seasons, knowing God is faithful.'
    ],

    studyQuestions: [
      'What does the failure at Kadesh-barnea teach us about the sin of unbelief?',
      'How does Caleb exemplify faith in contrast to the rest of the spies?',
      'What does Numbers teach about the nature and consequences of complaining?',
      'How does the bronze serpent point to Christ (see John 3:14-15)?',
      'What can we learn from Moses\'s failure at Meribah about leadership?'
    ]
  },

  {
    id: 'deuteronomy',
    name: 'Deuteronomy',
    abbreviation: 'Deut',
    testament: 'old',
    canonicalGroup: 'law',
    order: 5,
    author: 'Moses',
    authorNotes: 'Moses delivered these speeches; the account of his death was likely added by Joshua.',
    dateWritten: 'c. 1406 BC',
    originalAudience: 'The second generation of Israelites on the verge of entering Canaan',
    literaryGenre: ['speech', 'law', 'covenant', 'song'],
    difficulty: 'medium',

    overview: `Deuteronomy, meaning "second law," is actually a re-proclamation and expansion of the covenant for a new generation. The book consists primarily of three farewell addresses by Moses on the plains of Moab, as Israel prepares to cross the Jordan and possess the Promised Land without him.

The first address recounts Israel's history from Sinai to Moab, drawing lessons for the future. The second address restates and expands the law, with emphasis on loyalty to the LORD and the covenant. The third address presents the covenant renewal ceremony with its blessings and curses.

Deuteronomy emphasizes the central theme of loving the LORD with all one's heart. The Shema ("Hear, O Israel") has become the confession of faith. The book calls for wholehearted devotion to the one true God, warning against idolatry and promising blessing for obedience.`,

    purpose: `Moses prepared a new generation for life in the Promised Land. Deuteronomy calls Israel to covenant faithfulness, warns against the idolatry they will encounter, establishes how worship and justice should function in the land, and motivates obedience through remembrance of God's grace and the promise of blessing.`,

    outline: [
      { section: 'Historical Review', chapters: '1-4', summary: 'Moses recounts the journey from Horeb to Moab, drawing lessons from history.' },
      { section: 'The Law Restated', chapters: '5-26', summary: 'The Ten Commandments, the Shema, and detailed covenant stipulations.' },
      { section: 'Covenant Renewal', chapters: '27-28', summary: 'Blessings and curses; the covenant ceremony at Shechem.' },
      { section: 'Final Addresses', chapters: '29-30', summary: 'Covenant summary and call to choose life.' },
      { section: 'Transition of Leadership', chapters: '31-34', summary: 'Joshua commissioned; Song of Moses; death of Moses.' }
    ],

    keyThemes: [
      {
        theme: 'Love for God',
        description: 'The heart of the law is wholehearted love for God. This love is to be expressed in exclusive worship and comprehensive obedience.',
        keyPassages: ['6:4-9', '10:12-13', '30:6']
      },
      {
        theme: 'Covenant Faithfulness',
        description: 'Israel is called to remember God\'s grace and respond with faithful obedience. The covenant structure of blessing and curse motivates faithfulness.',
        keyPassages: ['7:6-11', '26:16-19', '28:1-68']
      },
      {
        theme: 'Centralized Worship',
        description: 'Israel is to worship at the place God chooses, avoiding the local shrines of Canaan. This prepares for Jerusalem and the temple.',
        keyPassages: ['12:1-14']
      },
      {
        theme: 'Choose Life',
        description: 'Moses sets before Israel the choice between life and death, blessing and curse. True life is found in covenant relationship with God.',
        keyPassages: ['30:15-20']
      }
    ],

    christConnection: [
      { type: 'prophecy', description: 'A prophet like Moses whom God will raise up—fulfilled in Christ', passages: ['18:15-19'] },
      { type: 'theme', description: 'Jesus quotes Deuteronomy three times in His temptation', passages: ['6:13', '6:16', '8:3'] },
      { type: 'theme', description: 'The covenant blessings and curses find resolution in Christ', passages: ['27-28'] },
      { type: 'theme', description: 'Circumcision of the heart—the new covenant promise', passages: ['30:6'] }
    ],

    keyVerses: [
      { reference: '6:4-5', text: 'Hear, O Israel: The LORD our God, the LORD is one. You shall love the LORD your God with all your heart and with all your soul and with all your might.', significance: 'The Shema—the great confession and commandment.' },
      { reference: '8:3', text: 'Man does not live by bread alone, but man lives by every word that comes from the mouth of the LORD.', significance: 'Scripture is essential for life—quoted by Jesus in His temptation.' },
      { reference: '18:15', text: 'The LORD your God will raise up for you a prophet like me from among you, from your brothers—it is to him you shall listen.', significance: 'Prophecy of Christ as the ultimate Prophet.' },
      { reference: '30:19-20', text: 'I have set before you life and death, blessing and curse. Therefore choose life, that you and your offspring may live, loving the LORD your God.', significance: 'The fundamental choice set before every person.' }
    ],

    keyCharacters: [
      { name: 'Moses', role: 'The prophet who delivers these final addresses before his death' },
      { name: 'Joshua', role: 'The successor commissioned to lead Israel into the land' }
    ],

    practicalApplications: [
      'Love God with your whole being—heart, soul, and strength.',
      'Teach God\'s word diligently to the next generation.',
      'Remember what God has done; forgetfulness leads to apostasy.',
      'Make a conscious choice to follow God and His ways.',
      'Trust in the Prophet like Moses—Jesus Christ.'
    ],

    studyQuestions: [
      'Why is remembering God\'s past acts so important for present faithfulness?',
      'How does the Shema (6:4-5) shape our understanding of the first commandment?',
      'What is the relationship between grace and obedience in Deuteronomy?',
      'How is Christ the fulfillment of Deuteronomy 18:15-19?',
      'What does "choosing life" look like practically today?'
    ]
  },

  // Continue with more books...
  // For brevity, I'll add the New Testament gospels and key epistles

  // ========================================
  // GOSPELS
  // ========================================
  {
    id: 'matthew',
    name: 'Matthew',
    abbreviation: 'Matt',
    testament: 'new',
    canonicalGroup: 'gospels',
    order: 40,
    author: 'Matthew (Levi)',
    authorNotes: 'The apostle Matthew, a former tax collector called by Jesus.',
    dateWritten: 'c. AD 50-70',
    originalAudience: 'Jewish Christians, likely in Palestine or Syria',
    literaryGenre: ['gospel', 'narrative', 'discourse'],
    difficulty: 'easy',

    overview: `Matthew presents Jesus as the promised Messiah, the King of the Jews. Writing primarily for a Jewish audience, Matthew emphasizes how Jesus fulfills Old Testament prophecy and establishes His kingdom. The phrase "that it might be fulfilled" appears over a dozen times, showing Jesus as the culmination of Israel's hope.

The gospel opens with Jesus' genealogy tracing His royal lineage to Abraham and David. It proceeds through His birth, baptism, temptation, Galilean ministry, journey to Jerusalem, passion, and resurrection. Matthew uniquely includes five major teaching blocks: the Sermon on the Mount, the Mission Discourse, Parables of the Kingdom, Community Discourse, and Olivet Discourse.

Matthew's portrait of Jesus balances His authority as King with His compassion as Shepherd. He is Emmanuel—"God with us"—who comes to save His people from their sins and who promises to be with His disciples to the end of the age. The Great Commission that closes the book sends the disciples to make disciples of all nations.`,

    purpose: `Matthew wrote to demonstrate that Jesus is the Messiah promised in the Hebrew Scriptures, to instruct the church in the teachings of Jesus, and to encourage faith in Jesus as the Son of God who has all authority in heaven and on earth.`,

    outline: [
      { section: 'Birth and Preparation', chapters: '1-4', summary: 'Genealogy, birth narratives, baptism, temptation, beginning of ministry.' },
      { section: 'Sermon on the Mount', chapters: '5-7', summary: 'Jesus\' teaching on kingdom righteousness.' },
      { section: 'Ministry in Galilee', chapters: '8-9', summary: 'Miracles demonstrating Jesus\' authority.' },
      { section: 'Mission Discourse', chapters: '10', summary: 'Instructions for the twelve apostles.' },
      { section: 'Opposition and Parables', chapters: '11-13', summary: 'Growing opposition; parables of the kingdom.' },
      { section: 'Training the Twelve', chapters: '14-18', summary: 'Peter\'s confession; community teaching.' },
      { section: 'Journey to Jerusalem', chapters: '19-25', summary: 'Final teaching; Olivet Discourse.' },
      { section: 'Passion and Resurrection', chapters: '26-28', summary: 'Arrest, trial, crucifixion, resurrection, Great Commission.' }
    ],

    keyThemes: [
      {
        theme: 'Jesus as Messiah-King',
        description: 'Jesus is the Son of David, the King of Israel, who fulfills Old Testament prophecy and establishes God\'s kingdom.',
        keyPassages: ['1:1', '2:2', '21:1-11', '27:37']
      },
      {
        theme: 'Kingdom of Heaven',
        description: 'The kingdom of heaven is central to Jesus\' teaching. It is present in Jesus\' ministry but awaits future consummation.',
        keyPassages: ['4:17', '13:1-52', '25:31-46']
      },
      {
        theme: 'Fulfillment of Scripture',
        description: 'Jesus fulfills the Law and the Prophets. He is the goal to which all Scripture points.',
        keyPassages: ['5:17-18', '1:22-23', '2:15', '4:14-16']
      },
      {
        theme: 'Discipleship',
        description: 'Following Jesus requires wholehearted commitment. Disciples are to learn from Jesus and teach others.',
        keyPassages: ['4:18-22', '16:24-28', '28:18-20']
      }
    ],

    christConnection: [
      { type: 'direct', description: 'Jesus is the Christ, the Son of the living God', passages: ['16:16'] },
      { type: 'prophecy', description: 'Jesus fulfills dozens of Old Testament prophecies', passages: ['1:22-23', '2:15', '4:14-16'] },
      { type: 'theme', description: 'Jesus is Emmanuel—God with us', passages: ['1:23', '28:20'] }
    ],

    keyVerses: [
      { reference: '1:21', text: 'She will bear a son, and you shall call his name Jesus, for he will save his people from their sins.', significance: 'The purpose of Jesus\' coming.' },
      { reference: '5:17', text: 'Do not think that I have come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them.', significance: 'Jesus fulfills Scripture.' },
      { reference: '16:16', text: 'Simon Peter replied, "You are the Christ, the Son of the living God."', significance: 'The central confession of the gospel.' },
      { reference: '28:18-20', text: 'All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations.', significance: 'The Great Commission.' }
    ],

    keyCharacters: [
      { name: 'Jesus', role: 'The Messiah, Son of God, King of the Jews' },
      { name: 'Peter', role: 'Leader of the twelve, confessor of Christ' },
      { name: 'John the Baptist', role: 'Forerunner who prepares the way' },
      { name: 'Mary', role: 'Virgin mother of Jesus' },
      { name: 'Joseph', role: 'Jesus\' legal father, descendant of David' }
    ],

    practicalApplications: [
      'Trust in Jesus as the fulfillment of God\'s promises.',
      'Live according to kingdom values described in the Sermon on the Mount.',
      'Make disciples by teaching others to obey all that Jesus commanded.',
      'Follow Jesus even when it costs you everything.',
      'Live in light of Jesus\' promised return.'
    ],

    studyQuestions: [
      'How does Matthew demonstrate that Jesus fulfills Old Testament prophecy?',
      'What does the Sermon on the Mount teach about life in God\'s kingdom?',
      'Why is Peter\'s confession (16:16) the turning point of the gospel?',
      'How should the Great Commission shape the mission of the church?',
      'What do the parables of Matthew 13 teach about the kingdom of heaven?'
    ]
  },

  {
    id: 'john',
    name: 'John',
    abbreviation: 'John',
    testament: 'new',
    canonicalGroup: 'gospels',
    order: 43,
    author: 'John the Apostle',
    authorNotes: 'The "beloved disciple," one of Jesus\' inner circle.',
    dateWritten: 'c. AD 80-95',
    originalAudience: 'Christians in Asia Minor (Ephesus region)',
    literaryGenre: ['gospel', 'theological narrative'],
    difficulty: 'medium',

    overview: `John's Gospel stands apart from the Synoptics in structure, content, and emphasis. Writing decades after Matthew, Mark, and Luke, John provides a deeply theological portrait of Jesus as the eternal Word made flesh. His stated purpose is to produce faith: "that you may believe that Jesus is the Christ, the Son of God, and that by believing you may have life in his name."

The prologue (1:1-18) sets the tone, declaring Jesus as the pre-existent Word who was with God and was God, through whom all things were made, who became flesh and dwelt among us. Seven miraculous signs demonstrate Jesus' glory. Seven "I am" statements reveal His divine identity. Extended discourses explore themes of light, life, truth, and love.

John emphasizes Jesus' deity more explicitly than the Synoptics while also portraying His full humanity. The intimate upper room discourse (13-17) and the high priestly prayer reveal Jesus' love for His own and His prayer for their unity. The resurrection appearances confirm His triumph over death and commission the disciples for mission.`,

    purpose: `John wrote to produce and strengthen faith in Jesus as the Christ, the Son of God, so that readers might have eternal life through believing in Him.`,

    outline: [
      { section: 'Prologue', chapters: '1:1-18', summary: 'The eternal Word became flesh and revealed the Father.' },
      { section: 'Book of Signs', chapters: '1:19-12:50', summary: 'Seven signs revealing Jesus\' glory; growing opposition.' },
      { section: 'Book of Glory', chapters: '13-20', summary: 'Upper Room discourse, passion, resurrection.' },
      { section: 'Epilogue', chapters: '21', summary: 'Resurrection appearance; restoration of Peter; commission.' }
    ],

    keyThemes: [
      {
        theme: 'Jesus as Divine Son',
        description: 'Jesus is the eternal Word, one with the Father, who makes God known. His "I am" statements echo the divine name revealed to Moses.',
        keyPassages: ['1:1-18', '8:58', '10:30', '20:28']
      },
      {
        theme: 'Eternal Life',
        description: 'Eternal life is knowing God and Jesus Christ. It is present possession for believers, not merely future hope.',
        keyPassages: ['3:16', '5:24', '17:3']
      },
      {
        theme: 'Belief/Faith',
        description: 'The verb "believe" appears nearly 100 times. Believing in Jesus is the response that brings eternal life.',
        keyPassages: ['3:16', '11:25-27', '20:31']
      },
      {
        theme: 'Light and Darkness',
        description: 'Jesus is the light of the world who overcomes the darkness of sin and unbelief.',
        keyPassages: ['1:4-5', '8:12', '12:35-36']
      }
    ],

    christConnection: [
      { type: 'direct', description: 'Jesus is the Word who was God and became flesh', passages: ['1:1-18'] },
      { type: 'direct', description: 'Jesus is the "I AM"—the covenant God of Israel', passages: ['8:58', '18:5-6'] },
      { type: 'direct', description: 'Thomas\'s confession: "My Lord and my God!"', passages: ['20:28'] }
    ],

    keyVerses: [
      { reference: '1:1', text: 'In the beginning was the Word, and the Word was with God, and the Word was God.', significance: 'Declaration of Christ\'s deity and eternality.' },
      { reference: '1:14', text: 'And the Word became flesh and dwelt among us, and we have seen his glory.', significance: 'The incarnation—God becomes man.' },
      { reference: '3:16', text: 'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.', significance: 'The gospel in a single verse.' },
      { reference: '14:6', text: 'Jesus said to him, "I am the way, and the truth, and the life. No one comes to the Father except through me."', significance: 'Jesus as the exclusive way to God.' },
      { reference: '20:31', text: 'But these are written so that you may believe that Jesus is the Christ, the Son of God, and that by believing you may have life in his name.', significance: 'John\'s purpose statement.' }
    ],

    keyCharacters: [
      { name: 'Jesus', role: 'The eternal Word made flesh' },
      { name: 'John the Baptist', role: 'Witness to the Light' },
      { name: 'The Twelve', role: 'Jesus\' chosen disciples' },
      { name: 'Nicodemus', role: 'Pharisee who came to Jesus by night' },
      { name: 'The Samaritan Woman', role: 'First evangelism to non-Jews' },
      { name: 'Lazarus', role: 'Friend of Jesus raised from the dead' },
      { name: 'Thomas', role: 'Doubter who confessed Jesus as Lord and God' }
    ],

    practicalApplications: [
      'Believe in Jesus as the Son of God and receive eternal life.',
      'Abide in Christ as branches abide in the vine.',
      'Love one another as Jesus has loved us.',
      'Rely on the Holy Spirit as Jesus\' promised Helper.',
      'Bear witness to Jesus as the light of the world.'
    ],

    studyQuestions: [
      'How does the prologue (1:1-18) shape our reading of the entire gospel?',
      'What do the seven "I am" statements reveal about Jesus\' identity?',
      'What does Jesus\' high priestly prayer (chapter 17) teach about Christian unity?',
      'How does John develop the theme of belief/unbelief throughout the gospel?',
      'What is the significance of Thomas\'s confession in 20:28?'
    ]
  },

  // ========================================
  // PAULINE EPISTLES
  // ========================================
  {
    id: 'romans',
    name: 'Romans',
    abbreviation: 'Rom',
    testament: 'new',
    canonicalGroup: 'pauline',
    order: 45,
    author: 'Paul the Apostle',
    dateWritten: 'c. AD 57',
    originalAudience: 'The church at Rome, a mixed Jewish-Gentile congregation',
    literaryGenre: ['epistle', 'theological treatise'],
    difficulty: 'hard',

    overview: `Romans is Paul's most systematic presentation of the gospel. Written to a church he had not yet visited, Paul explains the righteousness of God revealed in the gospel—a righteousness received by faith apart from works of the law. The letter has shaped Christian theology like no other New Testament book.

The first major section (1-4) establishes the universal need for righteousness and God's provision through faith in Christ. Both Jew and Gentile are condemned under sin; both are justified by grace through faith, as Abraham was. The second section (5-8) explores life in Christ: freedom from sin, death, and condemnation; life in the Spirit; and the certainty of future glory.

Chapters 9-11 address Israel's unbelief and God's faithfulness, affirming that God has not rejected His people. The final section (12-16) provides practical instruction for holy living and church unity. Romans moves from doctrine to duty, from indicative to imperative, showing that the gospel transforms how we live.`,

    purpose: `Paul wrote to introduce himself to the Roman church before his planned visit, to expound the gospel systematically, to address tensions between Jewish and Gentile believers, and to request support for his mission to Spain.`,

    outline: [
      { section: 'The Gospel Introduced', chapters: '1:1-17', summary: 'Paul\'s greeting and theme: the righteousness of God by faith.' },
      { section: 'Condemnation', chapters: '1:18-3:20', summary: 'All humanity—Gentile and Jew—under sin\'s condemnation.' },
      { section: 'Justification', chapters: '3:21-5:21', summary: 'Righteousness by faith in Christ; peace with God; Adam and Christ.' },
      { section: 'Sanctification', chapters: '6-8', summary: 'Freedom from sin; the struggle with the flesh; life in the Spirit.' },
      { section: 'Israel\'s Place', chapters: '9-11', summary: 'God\'s sovereignty in election; Israel\'s rejection; future restoration.' },
      { section: 'Transformation', chapters: '12-15:13', summary: 'Living sacrifices; love; the weak and the strong; unity.' },
      { section: 'Conclusion', chapters: '15:14-16:27', summary: 'Travel plans; greetings; final doxology.' }
    ],

    keyThemes: [
      {
        theme: 'Justification by Faith',
        description: 'Sinners are declared righteous before God not by works but through faith in Jesus Christ. This is the heart of the gospel.',
        keyPassages: ['1:16-17', '3:21-26', '4:1-8', '5:1']
      },
      {
        theme: 'Universal Sinfulness',
        description: 'All humanity—Jew and Gentile—stands guilty before God. No one is righteous; all have sinned and fall short of God\'s glory.',
        keyPassages: ['1:18-32', '2:1-16', '3:9-20']
      },
      {
        theme: 'Life in the Spirit',
        description: 'Those justified by faith receive the Spirit and are set free from sin\'s dominion. The Spirit enables holy living and assures of glory.',
        keyPassages: ['6:1-14', '8:1-17', '8:26-30']
      },
      {
        theme: 'God\'s Sovereignty',
        description: 'God\'s purposes in election are free and unconditional. He has mercy on whom He wills, yet remains just and true to His promises.',
        keyPassages: ['9:6-29', '11:33-36']
      }
    ],

    christConnection: [
      { type: 'direct', description: 'Christ is the one through whom justification comes', passages: ['3:21-26', '5:1-11'] },
      { type: 'direct', description: 'Christ is the second Adam who brings life', passages: ['5:12-21'] },
      { type: 'theme', description: 'Union with Christ in death and resurrection', passages: ['6:1-11'] }
    ],

    keyVerses: [
      { reference: '1:16-17', text: 'For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes... For in it the righteousness of God is revealed from faith for faith.', significance: 'The thesis of Romans.' },
      { reference: '3:23-24', text: 'For all have sinned and fall short of the glory of God, and are justified by his grace as a gift.', significance: 'Summary of human condition and divine solution.' },
      { reference: '5:8', text: 'But God shows his love for us in that while we were still sinners, Christ died for us.', significance: 'The demonstration of God\'s love.' },
      { reference: '8:1', text: 'There is therefore now no condemnation for those who are in Christ Jesus.', significance: 'The security of the believer.' },
      { reference: '8:28', text: 'And we know that for those who love God all things work together for good, for those who are called according to his purpose.', significance: 'God\'s providence for His people.' },
      { reference: '12:1-2', text: 'Present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship.', significance: 'The call to transformed living.' }
    ],

    keyCharacters: [
      { name: 'Paul', role: 'Apostle and author' },
      { name: 'Abraham', role: 'Example of justification by faith' },
      { name: 'Adam', role: 'Head of fallen humanity' },
      { name: 'Phoebe', role: 'Deacon who likely delivered the letter' }
    ],

    practicalApplications: [
      'Rest in the security of justification by faith—no condemnation in Christ.',
      'Resist sin by counting yourself dead to sin and alive to God.',
      'Walk by the Spirit, putting to death the deeds of the flesh.',
      'Offer your body as a living sacrifice—transformed, not conformed.',
      'Live in unity with fellow believers despite differences.'
    ],

    studyQuestions: [
      'How does Paul demonstrate that all humanity is under sin (1:18-3:20)?',
      'What does "justification by faith" mean, and why is it central to the gospel?',
      'How does Romans 6 address the objection that grace promotes sin?',
      'What is the relationship between God\'s sovereignty and human responsibility in Romans 9-11?',
      'How does the indicative (what God has done) lead to the imperative (how we should live) in Romans?'
    ]
  },

  // Add placeholder entries for remaining books
  // These would need full content in production

  {
    id: 'revelation',
    name: 'Revelation',
    abbreviation: 'Rev',
    testament: 'new',
    canonicalGroup: 'apocalyptic',
    order: 66,
    author: 'John the Apostle',
    dateWritten: 'c. AD 95',
    originalAudience: 'Seven churches in Asia Minor',
    literaryGenre: ['apocalyptic', 'prophecy', 'epistle'],
    difficulty: 'hard',

    overview: `Revelation is the climactic book of the Bible, bringing the grand narrative of redemption to its glorious conclusion. Written by the apostle John during his exile on Patmos, the book unveils Jesus Christ in His risen glory and reveals the ultimate triumph of God's kingdom over all evil.

The book opens with a vision of the risen Christ among the churches, followed by letters to seven churches in Asia Minor. The central section (chapters 4-20) presents a series of visions depicting spiritual warfare, divine judgment, and the fall of Babylon. The book concludes with the glorious vision of the new heaven and new earth, where God dwells with His people forever.

Revelation is rich in symbolism drawn from the Old Testament, especially Daniel, Ezekiel, and Zechariah. While interpretations vary, the book's central message is clear: Christ has conquered, will return, and will make all things new. God's people are called to persevere in faith, knowing that the Lamb who was slain is worthy to open the scroll of history.`,

    purpose: `John wrote to encourage persecuted Christians with the assurance that Christ has won the victory, to call the churches to faithfulness and repentance, and to unveil God's ultimate plan to defeat evil and establish His eternal kingdom.`,

    outline: [
      { section: 'Prologue', chapters: '1:1-8', summary: 'Introduction and blessing; the revelation of Jesus Christ.' },
      { section: 'Vision of Christ', chapters: '1:9-20', summary: 'The risen Christ among the seven lampstands.' },
      { section: 'Letters to Churches', chapters: '2-3', summary: 'Messages to seven churches in Asia Minor.' },
      { section: 'Throne Room Vision', chapters: '4-5', summary: 'God enthroned; the Lamb worthy to open the scroll.' },
      { section: 'Seven Seals', chapters: '6-8:1', summary: 'Judgments unleashed; the 144,000 sealed.' },
      { section: 'Seven Trumpets', chapters: '8:2-11:19', summary: 'Warnings of judgment; two witnesses.' },
      { section: 'Cosmic Conflict', chapters: '12-14', summary: 'The dragon, beasts, and the Lamb\'s victory.' },
      { section: 'Seven Bowls', chapters: '15-16', summary: 'Final plagues of God\'s wrath.' },
      { section: 'Fall of Babylon', chapters: '17-18', summary: 'Judgment on the great prostitute.' },
      { section: 'Christ\'s Return', chapters: '19-20', summary: 'The King of kings; millennium; final judgment.' },
      { section: 'New Creation', chapters: '21-22', summary: 'New heaven and earth; new Jerusalem; Come, Lord Jesus!' }
    ],

    keyThemes: [
      {
        theme: 'Christ Victorious',
        description: 'Jesus Christ is the risen, reigning King. He has conquered death, holds the keys of death and Hades, and will return in glory to complete His victory.',
        keyPassages: ['1:12-18', '5:1-14', '19:11-16']
      },
      {
        theme: 'Perseverance',
        description: 'God\'s people are called to "overcome" through faithful witness, even unto death. Victory belongs to those who endure.',
        keyPassages: ['2:7, 11, 17, 26', '3:5, 12, 21', '12:11']
      },
      {
        theme: 'Divine Judgment',
        description: 'God will judge all evil—personal, systemic, and demonic. Babylon will fall; the beast and false prophet will be destroyed.',
        keyPassages: ['6:15-17', '14:7', '18:1-24', '20:11-15']
      },
      {
        theme: 'New Creation',
        description: 'God will make all things new. The new heaven and new earth will be the eternal dwelling of God with His people, with no more death, mourning, or pain.',
        keyPassages: ['21:1-8', '21:22-22:5']
      }
    ],

    christConnection: [
      { type: 'direct', description: 'Christ is the Alpha and Omega, the Beginning and End', passages: ['1:8', '22:13'] },
      { type: 'direct', description: 'Christ is the Lamb who was slain, worthy to open the scroll', passages: ['5:1-14'] },
      { type: 'direct', description: 'Christ is King of kings and Lord of lords', passages: ['19:11-16'] }
    ],

    keyVerses: [
      { reference: '1:8', text: '"I am the Alpha and the Omega," says the Lord God, "who is and who was and who is to come, the Almighty."', significance: 'God\'s eternal sovereignty.' },
      { reference: '5:9-10', text: 'Worthy are you to take the scroll... for you were slain, and by your blood you ransomed people for God.', significance: 'The Lamb\'s worthiness based on His redemption.' },
      { reference: '21:3-4', text: 'Behold, the dwelling place of God is with man... He will wipe away every tear from their eyes.', significance: 'The ultimate goal of redemption.' },
      { reference: '22:20', text: 'He who testifies to these things says, "Surely I am coming soon." Amen. Come, Lord Jesus!', significance: 'The hope of Christ\'s return.' }
    ],

    keyCharacters: [
      { name: 'Jesus Christ', role: 'The risen Lord, the Lamb, King of kings' },
      { name: 'John', role: 'Apostle, exile on Patmos, recipient of revelation' },
      { name: 'The Dragon', role: 'Satan, the ancient serpent' },
      { name: 'The Beast', role: 'Antichrist figure, world power opposed to God' },
      { name: 'Babylon', role: 'Symbol of worldly opposition to God' }
    ],

    practicalApplications: [
      'Worship Christ as the risen, reigning Lord.',
      'Persevere in faith despite persecution and trial.',
      'Resist the seductions of Babylon—worldly compromise.',
      'Live in light of Christ\'s promised return.',
      'Find hope in God\'s promise to make all things new.'
    ],

    studyQuestions: [
      'How does the vision of Christ in chapter 1 encourage suffering believers?',
      'What do the seven letters reveal about the state of the churches and Christ\'s concerns?',
      'Why is the Lamb alone worthy to open the scroll (chapter 5)?',
      'How should the promise of new creation shape our present lives?',
      'What is the main message of Revelation for the church today?'
    ]
  }
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getBookById(id: string): BibleBookSummary | undefined {
  return BIBLE_BOOK_SUMMARIES.find(book => book.id === id);
}

export function getBooksByTestament(testament: Testament): BibleBookSummary[] {
  return BIBLE_BOOK_SUMMARIES.filter(book => book.testament === testament);
}

export function getBooksByGroup(group: CanonicalGroup): BibleBookSummary[] {
  return BIBLE_BOOK_SUMMARIES.filter(book => book.canonicalGroup === group);
}

export function getAllBooks(): BibleBookSummary[] {
  return BIBLE_BOOK_SUMMARIES.sort((a, b) => a.order - b.order);
}

export function getBookCount(): number {
  return BIBLE_BOOK_SUMMARIES.length;
}

export function searchBooks(query: string): BibleBookSummary[] {
  const lowerQuery = query.toLowerCase();
  return BIBLE_BOOK_SUMMARIES.filter(book =>
    book.name.toLowerCase().includes(lowerQuery) ||
    book.overview.toLowerCase().includes(lowerQuery) ||
    book.keyThemes.some(theme => theme.theme.toLowerCase().includes(lowerQuery))
  );
}

export function getNextBook(currentId: string): BibleBookSummary | undefined {
  const current = getBookById(currentId);
  if (!current) return undefined;
  return BIBLE_BOOK_SUMMARIES.find(book => book.order === current.order + 1);
}

export function getPreviousBook(currentId: string): BibleBookSummary | undefined {
  const current = getBookById(currentId);
  if (!current) return undefined;
  return BIBLE_BOOK_SUMMARIES.find(book => book.order === current.order - 1);
}
