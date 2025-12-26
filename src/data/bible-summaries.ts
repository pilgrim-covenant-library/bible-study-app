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

  // ========================================
  // HISTORICAL BOOKS - Joshua through Esther
  // ========================================
  {
    id: 'joshua',
    name: 'Joshua',
    abbreviation: 'Josh',
    testament: 'old',
    canonicalGroup: 'history',
    order: 6,
    author: 'Joshua (primarily)',
    authorNotes: 'Joshua wrote most of the book, with later additions after his death (24:29-33).',
    dateWritten: 'c. 1400-1370 BC',
    originalAudience: 'Israel after the conquest of Canaan',
    literaryGenre: ['narrative', 'military account', 'covenant renewal'],
    difficulty: 'medium',

    overview: `Joshua continues the story of redemption where Deuteronomy ends. After Moses' death, Joshua leads Israel across the Jordan River into the Promised Land. The book records the conquest of Canaan and the division of the land among the twelve tribes.

The book divides into three main sections: the conquest of the land (1-12), the distribution of the land (13-21), and covenant renewal (22-24). Throughout, God demonstrates His faithfulness to the promises made to Abraham regarding land.

Joshua shows that while God gives victory, His people must participate through faith and obedience. The book emphasizes that the Lord fights for Israel, yet Israel must "be strong and courageous" in taking possession of what God provides.`,

    purpose: `Joshua was written to document how God fulfilled His promise to give Israel the land of Canaan. It demonstrates that God keeps His covenant promises and that success comes through faith and obedience. The book also served as a land-grant document, establishing tribal boundaries.`,

    outline: [
      { section: 'Entering the Land', chapters: '1-5', summary: 'Preparation, crossing the Jordan, and covenant renewal at Gilgal.' },
      { section: 'Conquering the Land', chapters: '6-12', summary: 'The central, southern, and northern campaigns; summary of conquered kings.' },
      { section: 'Dividing the Land', chapters: '13-21', summary: 'Distribution of territory to the tribes, cities of refuge, and Levitical cities.' },
      { section: 'Serving the Lord', chapters: '22-24', summary: 'The altar controversy, Joshua\'s farewell, and covenant renewal at Shechem.' }
    ],

    keyThemes: [
      {
        theme: 'Covenant Faithfulness',
        description: 'God fulfills His promises to Abraham by giving Israel the land. Not one word of His good promises fails.',
        keyPassages: ['21:43-45', '23:14']
      },
      {
        theme: 'Holy War',
        description: 'The conquest is God\'s judgment on Canaanite wickedness and His means of giving Israel their inheritance.',
        keyPassages: ['6:17-21', '11:20']
      },
      {
        theme: 'Obedience and Blessing',
        description: 'Success depends on meditating on God\'s law and obeying it fully. Disobedience brings defeat.',
        keyPassages: ['1:7-8', '7:1-26']
      },
      {
        theme: 'Rest',
        description: 'God gives His people rest from their enemies—a foretaste of the ultimate rest found in Christ.',
        keyPassages: ['1:13', '21:44', '23:1']
      }
    ],

    christConnection: [
      { type: 'type', description: 'Joshua ("Yahweh saves") prefigures Jesus, who leads His people into their eternal inheritance.', passages: ['1:1-9'] },
      { type: 'type', description: 'The conquest and rest point forward to Christ\'s victory and the rest He provides for believers.', passages: ['21:43-45'] },
      { type: 'theme', description: 'Rahab\'s faith and inclusion in Israel foreshadows Gentile inclusion through faith in Christ.', passages: ['2:1-21', '6:25'] }
    ],

    keyVerses: [
      { reference: '1:8', text: 'This Book of the Law shall not depart from your mouth, but you shall meditate on it day and night, so that you may be careful to do according to all that is written in it.', significance: 'The key to success and prosperity—meditation on and obedience to God\'s Word.' },
      { reference: '1:9', text: 'Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God is with you wherever you go.', significance: 'God\'s presence enables courage in the face of overwhelming odds.' },
      { reference: '24:15', text: 'But as for me and my house, we will serve the LORD.', significance: 'Joshua\'s famous declaration of household commitment to covenant faithfulness.' }
    ],

    keyCharacters: [
      { name: 'Joshua', role: 'Moses\' successor, military leader, covenant mediator' },
      { name: 'Rahab', role: 'Canaanite prostitute who believed in Yahweh and helped the spies' },
      { name: 'Caleb', role: 'Faithful spy who receives Hebron as his inheritance' },
      { name: 'Achan', role: 'Israelite whose disobedience brought defeat at Ai' }
    ],

    keyEvents: [
      { event: 'Crossing the Jordan', reference: '3:1-17', significance: 'God miraculously parts the waters, confirming Joshua\'s leadership.' },
      { event: 'Fall of Jericho', reference: '6:1-27', significance: 'First major victory by faith and obedience, not military might.' },
      { event: 'Defeat at Ai', reference: '7:1-26', significance: 'Sin in the camp brings defeat; holiness is essential for victory.' },
      { event: 'Covenant at Shechem', reference: '24:1-28', significance: 'Israel renews their commitment to serve Yahweh alone.' }
    ],

    practicalApplications: [
      'Meditate on Scripture daily as the foundation for godly living.',
      'Take courage from God\'s presence when facing overwhelming challenges.',
      'Recognize that partial obedience is disobedience and brings consequences.',
      'Make a clear commitment to serve the Lord with your household.',
      'Trust that God will fulfill His promises, even when progress seems slow.'
    ],

    studyQuestions: [
      'How does Joshua 1:8 define the path to success? How does this differ from worldly definitions?',
      'What lessons about sin and community does the Achan incident teach?',
      'How is Rahab\'s story an example of salvation by grace through faith?',
      'Why did God command the complete destruction of Canaanite peoples?',
      'What does "rest" mean in Joshua, and how does it point to Christ?'
    ]
  },
  {
    id: 'judges',
    name: 'Judges',
    abbreviation: 'Judg',
    testament: 'old',
    canonicalGroup: 'history',
    order: 7,
    author: 'Unknown',
    authorNotes: 'Traditionally attributed to Samuel, though the author is uncertain.',
    dateWritten: 'c. 1050-1000 BC',
    originalAudience: 'Israel during the early monarchy',
    literaryGenre: ['narrative', 'hero stories', 'tragedy'],
    difficulty: 'medium',

    overview: `Judges records one of the darkest periods in Israel's history—the centuries between Joshua's death and the rise of the monarchy. The book follows a recurring cycle: Israel sins, God sends oppressors, Israel cries out, God raises a judge (deliverer), and there is peace until the cycle repeats.

The judges were not primarily legal officials but military-spiritual leaders whom God empowered to deliver Israel from enemies. The book features twelve judges, including Othniel, Ehud, Deborah, Gideon, Jephthah, and Samson.

The refrain "everyone did what was right in his own eyes" summarizes the book's tragedy. Without godly leadership and covenant faithfulness, Israel spiraled into moral and spiritual chaos, culminating in horrific events that mirror Sodom's wickedness.`,

    purpose: `Judges demonstrates the consequences of abandoning God and doing "what is right in one's own eyes." It shows Israel's need for a godly king and ultimately points to humanity's need for Christ. The book also preserves God's faithfulness despite Israel's unfaithfulness.`,

    outline: [
      { section: 'Incomplete Conquest', chapters: '1:1-3:6', summary: 'Israel\'s failure to drive out the Canaanites and the resulting consequences.' },
      { section: 'The Judges\' Cycles', chapters: '3:7-16:31', summary: 'Twelve judges deliver Israel through repeated cycles of sin and salvation.' },
      { section: 'Days of Chaos', chapters: '17-21', summary: 'Two appendices showing Israel\'s moral and religious degradation.' }
    ],

    keyThemes: [
      {
        theme: 'The Sin Cycle',
        description: 'Israel repeatedly falls into sin, faces oppression, cries out, receives deliverance, then falls again.',
        keyPassages: ['2:11-19', '3:7-11']
      },
      {
        theme: 'Human Autonomy',
        description: '"Everyone did what was right in his own eyes"—the root cause of Israel\'s chaos.',
        keyPassages: ['17:6', '21:25']
      },
      {
        theme: 'God\'s Patience',
        description: 'Despite Israel\'s repeated failures, God continues to raise up deliverers when they cry out.',
        keyPassages: ['2:16-18', '10:16']
      },
      {
        theme: 'Need for a King',
        description: 'The book implicitly argues for godly monarchy as the solution to Israel\'s chaos.',
        keyPassages: ['17:6', '18:1', '19:1', '21:25']
      }
    ],

    christConnection: [
      { type: 'type', description: 'The judges are savior-figures who point to Christ, the ultimate Deliverer.', passages: ['2:16-18'] },
      { type: 'theme', description: 'Israel\'s inability to save themselves demonstrates the need for a perfect Savior.', passages: ['21:25'] },
      { type: 'type', description: 'Samson\'s self-sacrificial death defeating enemies foreshadows Christ\'s victory through death.', passages: ['16:28-30'] }
    ],

    keyVerses: [
      { reference: '2:16', text: 'Then the LORD raised up judges, who saved them out of the hand of those who plundered them.', significance: 'God\'s gracious response to His people\'s distress.' },
      { reference: '17:6', text: 'In those days there was no king in Israel. Everyone did what was right in his own eyes.', significance: 'The diagnosis of Israel\'s problem and implicit argument for godly leadership.' },
      { reference: '21:25', text: 'In those days there was no king in Israel. Everyone did what was right in his own eyes.', significance: 'The book\'s closing statement emphasizes the chaos of autonomous morality.' }
    ],

    keyCharacters: [
      { name: 'Deborah', role: 'Prophetess and judge who led Israel to victory over Sisera' },
      { name: 'Gideon', role: 'Reluctant warrior who defeated Midian with 300 men' },
      { name: 'Jephthah', role: 'Outcast who became judge; made a tragic vow' },
      { name: 'Samson', role: 'Nazirite with supernatural strength; flawed hero who defeated Philistines' }
    ],

    keyEvents: [
      { event: 'Deborah\'s Victory', reference: '4-5', significance: 'God uses a woman to shame faithless men and deliver Israel.' },
      { event: 'Gideon\'s 300', reference: '7:1-25', significance: 'God reduces the army to show that victory comes from Him, not human strength.' },
      { event: 'Samson\'s Death', reference: '16:23-31', significance: 'In death, Samson kills more enemies than in life—victory through sacrifice.' },
      { event: 'The Levite\'s Concubine', reference: '19:1-30', significance: 'Israel has become as wicked as Sodom, showing total moral collapse.' }
    ],

    practicalApplications: [
      'Recognize that doing "what is right in your own eyes" leads to destruction.',
      'Break sinful cycles through genuine repentance, not just crisis prayers.',
      'Understand that God can use flawed people but does not endorse their sins.',
      'Value godly leadership as essential for spiritual health.',
      'Remember that God remains faithful even when His people are faithless.'
    ],

    studyQuestions: [
      'What causes the repeated cycles of sin in Judges, and how can we avoid similar patterns?',
      'Why does God use such flawed individuals as judges?',
      'How does the book argue for the need of a king? What kind of king does Israel need?',
      'What does "doing right in one\'s own eyes" look like in contemporary culture?',
      'How does Judges prepare us to appreciate the gospel of Christ?'
    ]
  },
  {
    id: 'ruth',
    name: 'Ruth',
    abbreviation: 'Ruth',
    testament: 'old',
    canonicalGroup: 'history',
    order: 8,
    author: 'Unknown',
    authorNotes: 'Traditionally attributed to Samuel, though anonymous.',
    dateWritten: 'c. 1000 BC',
    originalAudience: 'Israel during the early monarchy',
    literaryGenre: ['narrative', 'short story', 'romance'],
    difficulty: 'easy',

    overview: `Ruth is a beautifully crafted short story set during the dark period of the judges. It tells of a Moabite widow who, through loyalty to her Israelite mother-in-law Naomi, finds redemption through Boaz, a kinsman-redeemer.

The book follows Naomi's journey from fullness to emptiness and back to fullness. After losing her husband and sons in Moab, she returns to Bethlehem with Ruth. Through Ruth's faithful gleaning in Boaz's fields, God providentially brings about their marriage and the birth of Obed, grandfather of David.

Ruth provides a bright contrast to Judges, showing that even in dark times, faithful people lived by covenant love (hesed). A foreign woman becomes a model of faith and is grafted into Israel—and into the lineage of the Messiah.`,

    purpose: `Ruth illustrates God's providential care for those who trust Him, regardless of ethnic background. It demonstrates how covenant loyalty (hesed) should characterize God's people. The book also establishes David's lineage, connecting him to a story of redemption.`,

    outline: [
      { section: 'Naomi\'s Loss', chapters: '1', summary: 'Naomi loses her husband and sons; Ruth\'s loyal commitment to return with her.' },
      { section: 'Ruth\'s Labor', chapters: '2', summary: 'Ruth gleans in Boaz\'s field; he shows her extraordinary kindness.' },
      { section: 'Ruth\'s Request', chapters: '3', summary: 'Ruth appeals to Boaz as kinsman-redeemer at the threshing floor.' },
      { section: 'Boaz\'s Redemption', chapters: '4', summary: 'Boaz redeems Ruth and Naomi\'s land; Obed is born in David\'s line.' }
    ],

    keyThemes: [
      {
        theme: 'Hesed (Covenant Love)',
        description: 'Loyal, faithful love characterizes Ruth toward Naomi and Boaz toward Ruth.',
        keyPassages: ['1:16-17', '2:11-12', '3:10']
      },
      {
        theme: 'Kinsman-Redeemer',
        description: 'Boaz fulfills the role of goel, redeeming Ruth and restoring Naomi\'s inheritance.',
        keyPassages: ['2:20', '3:9', '4:1-12']
      },
      {
        theme: 'Providence',
        description: 'God works behind the scenes through ordinary events to accomplish His redemptive purposes.',
        keyPassages: ['2:3', '4:13-17']
      },
      {
        theme: 'Inclusion of Gentiles',
        description: 'A Moabite woman is welcomed into Israel through faith and becomes an ancestor of David and Jesus.',
        keyPassages: ['1:16', '4:13-22']
      }
    ],

    christConnection: [
      { type: 'type', description: 'Boaz as kinsman-redeemer pictures Christ, who redeems us and makes us His bride.', passages: ['3:9', '4:9-10'] },
      { type: 'prophecy', description: 'Ruth is included in Matthew\'s genealogy of Jesus, showing God\'s plan to include Gentiles.', passages: ['4:17-22'] },
      { type: 'theme', description: 'The story of redemption from emptiness to fullness mirrors the gospel.', passages: ['1:21', '4:14-17'] }
    ],

    keyVerses: [
      { reference: '1:16', text: 'But Ruth said, "Do not urge me to leave you or to return from following you. For where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God."', significance: 'Ruth\'s declaration of covenant loyalty, choosing Yahweh over Moab\'s gods.' },
      { reference: '2:12', text: 'The LORD repay you for what you have done, and a full reward be given you by the LORD, the God of Israel, under whose wings you have come to take refuge!', significance: 'Boaz\'s blessing recognizes Ruth\'s faith in Yahweh.' },
      { reference: '4:14', text: 'Then the women said to Naomi, "Blessed be the LORD, who has not left you this day without a redeemer."', significance: 'Celebration of God\'s provision through redemption.' }
    ],

    keyCharacters: [
      { name: 'Ruth', role: 'Moabite widow who shows extraordinary loyalty and faith' },
      { name: 'Naomi', role: 'Israelite widow whose emptiness is turned to fullness' },
      { name: 'Boaz', role: 'Wealthy landowner who serves as kinsman-redeemer' },
      { name: 'Obed', role: 'Son of Ruth and Boaz, grandfather of David' }
    ],

    practicalApplications: [
      'Show covenant loyalty (hesed) in your relationships, even when it\'s costly.',
      'Trust God\'s providence in ordinary circumstances.',
      'Welcome outsiders who embrace faith in God.',
      'Recognize that redemption often comes through unexpected means.',
      'Find hope that God brings fullness out of emptiness.'
    ],

    studyQuestions: [
      'How does Ruth demonstrate hesed, and how can we practice this virtue?',
      'What risks did Ruth take in following Naomi? What did she give up?',
      'How does Boaz picture Christ as our kinsman-redeemer?',
      'What does Ruth teach about God\'s inclusion of Gentiles in His plan?',
      'How does this story provide hope during dark times?'
    ]
  },
  {
    id: '1-samuel',
    name: '1 Samuel',
    abbreviation: '1 Sam',
    testament: 'old',
    canonicalGroup: 'history',
    order: 9,
    author: 'Unknown',
    authorNotes: 'Traditionally attributed to Samuel, Nathan, and Gad (1 Chr 29:29). Samuel may have written portions before his death.',
    dateWritten: 'c. 930-722 BC',
    originalAudience: 'Israel during the divided monarchy',
    literaryGenre: ['narrative', 'historical account', 'prophetic history'],
    difficulty: 'medium',

    overview: `First Samuel narrates Israel's transition from the period of the judges to the monarchy. It tells the interconnected stories of three men: Samuel (the last judge and first major prophet), Saul (the first king, who fails), and David (the king after God's own heart).

The book opens with Hannah's barrenness and the birth of Samuel, who becomes the transitional figure between eras. When Israel demands a king "like the nations," God gives them Saul—tall, handsome, but spiritually deficient. Saul's disobedience leads to his rejection, and God chooses David, whose story dominates the book's second half.

First Samuel explores what it means to lead God's people. Saul's reign demonstrates the danger of partial obedience and self-reliance, while David's rise shows how God exalts the humble and works through those who trust Him.`,

    purpose: `First Samuel explains the origin of Israel's monarchy and God's establishment of the Davidic dynasty. It teaches that true leadership requires wholehearted obedience to God's word and shows that God looks at the heart, not outward appearances.`,

    outline: [
      { section: 'Samuel\'s Ministry', chapters: '1-7', summary: 'Samuel\'s birth, the ark narrative, and Samuel as judge.' },
      { section: 'Saul\'s Reign', chapters: '8-15', summary: 'Israel demands a king; Saul\'s rise, reign, and rejection.' },
      { section: 'David\'s Rise', chapters: '16-31', summary: 'David\'s anointing, conflict with Saul, and Saul\'s death.' }
    ],

    keyThemes: [
      {
        theme: 'God\'s Sovereignty over Kings',
        description: 'God raises up and removes kings according to His purposes. Human monarchy exists under divine authority.',
        keyPassages: ['2:6-10', '15:22-23', '16:1-13']
      },
      {
        theme: 'Obedience over Sacrifice',
        description: 'God desires heart obedience, not merely external religious performance.',
        keyPassages: ['15:22-23']
      },
      {
        theme: 'The Heart',
        description: 'God looks at the heart, not outward appearance. This distinguishes David from Saul.',
        keyPassages: ['16:7', '13:14']
      },
      {
        theme: 'Faithful Waiting',
        description: 'David\'s refusal to kill Saul demonstrates trusting God\'s timing for exaltation.',
        keyPassages: ['24:1-22', '26:1-25']
      }
    ],

    christConnection: [
      { type: 'type', description: 'David as the anointed, rejected, suffering king who will reign pictures Christ.', passages: ['16:1-13'] },
      { type: 'prophecy', description: 'Hannah\'s song anticipates God\'s Messiah/Anointed One who will judge the earth.', passages: ['2:1-10'] },
      { type: 'theme', description: 'The theme of the exalted humble one fulfilled in Christ who humbled Himself.', passages: ['2:7-8'] }
    ],

    keyVerses: [
      { reference: '15:22', text: 'And Samuel said, "Has the LORD as great delight in burnt offerings and sacrifices, as in obeying the voice of the LORD? Behold, to obey is better than sacrifice."', significance: 'The fundamental principle that God desires obedient hearts over religious ritual.' },
      { reference: '16:7', text: 'But the LORD said to Samuel, "Do not look on his appearance or on the height of his stature... For the LORD sees not as man sees: man looks on the outward appearance, but the LORD looks on the heart."', significance: 'God\'s criteria for choosing leaders differs radically from human standards.' },
      { reference: '2:2', text: 'There is none holy like the LORD: for there is none besides you; there is no rock like our God.', significance: 'Hannah\'s declaration of God\'s unique holiness and reliability.' }
    ],

    keyCharacters: [
      { name: 'Samuel', role: 'Last judge, first major prophet, kingmaker' },
      { name: 'Saul', role: 'First king of Israel, whose disobedience leads to rejection' },
      { name: 'David', role: 'Shepherd boy anointed as future king, "man after God\'s own heart"' },
      { name: 'Jonathan', role: 'Saul\'s son, David\'s loyal friend who accepts God\'s choice of David' },
      { name: 'Hannah', role: 'Samuel\'s mother, whose prayer models faithful petition' }
    ],

    keyEvents: [
      { event: 'Hannah\'s Prayer and Samuel\'s Birth', reference: '1:1-2:11', significance: 'Sets up themes of reversal and God\'s sovereign provision.' },
      { event: 'Israel Demands a King', reference: '8:1-22', significance: 'Israel\'s rejection of God as their direct king.' },
      { event: 'Saul\'s Rejection', reference: '15:1-35', significance: 'Partial obedience is disobedience; the kingdom is torn from Saul.' },
      { event: 'David Anointed', reference: '16:1-13', significance: 'God chooses the unlikely youngest son, looking at the heart.' },
      { event: 'David and Goliath', reference: '17:1-58', significance: 'Faith in God overcomes impossible odds.' }
    ],

    practicalApplications: [
      'Pursue wholehearted obedience rather than partial compliance.',
      'Trust God\'s evaluation of character over human appearance-based judgments.',
      'Wait on God\'s timing for promotion rather than grasping for position.',
      'Recognize that religious activity without heart obedience is worthless.',
      'Model Hannah\'s persistence in prayer and surrender to God\'s will.'
    ],

    studyQuestions: [
      'What was wrong with Israel\'s request for a king in chapter 8?',
      'How does Saul\'s partial obedience in chapter 15 apply to our lives?',
      'What made David "a man after God\'s own heart" (13:14)?',
      'How does David\'s treatment of Saul in chapters 24 and 26 instruct us?',
      'What does Hannah\'s song (chapter 2) teach about God\'s character?'
    ]
  },
  {
    id: '2-samuel',
    name: '2 Samuel',
    abbreviation: '2 Sam',
    testament: 'old',
    canonicalGroup: 'history',
    order: 10,
    author: 'Unknown',
    authorNotes: 'Possibly compiled from records of Nathan and Gad (1 Chr 29:29).',
    dateWritten: 'c. 930-722 BC',
    originalAudience: 'Israel during the divided monarchy',
    literaryGenre: ['narrative', 'historical account', 'royal chronicle'],
    difficulty: 'medium',

    overview: `Second Samuel records David's reign over Israel—first over Judah alone (chapters 1-4), then over all Israel (chapters 5-24). The book presents David as a great but flawed king, reaching his apex in the Davidic covenant (chapter 7) and his nadir in the Bathsheba affair (chapters 11-12).

The book divides at chapter 11. Before his sin with Bathsheba, David experiences military victories, brings the ark to Jerusalem, and receives God's covenant promise of an eternal dynasty. After his sin, David faces consequences: his son dies, Amnon rapes Tamar, Absalom rebels, and the kingdom experiences turmoil.

Despite David's failures, God remains faithful to His covenant promise. Second Samuel establishes that God's purposes for His people will be accomplished through David's line—ultimately fulfilled in Jesus Christ.`,

    purpose: `Second Samuel records the establishment of the Davidic dynasty and God's unconditional covenant with David. It honestly portrays David's greatness and failures, demonstrating that God's faithfulness exceeds human faithfulness and that sin has serious consequences even for the forgiven.`,

    outline: [
      { section: 'David King over Judah', chapters: '1-4', summary: 'David mourns Saul, reigns in Hebron, and the house of Saul declines.' },
      { section: 'David King over All Israel', chapters: '5-10', summary: 'David captures Jerusalem, brings the ark, receives God\'s covenant, and expands the kingdom.' },
      { section: 'David\'s Sin and Its Consequences', chapters: '11-20', summary: 'Bathsheba, family turmoil, Absalom\'s rebellion and death.' },
      { section: 'Appendix', chapters: '21-24', summary: 'Additional narratives, psalms, and David\'s census and its aftermath.' }
    ],

    keyThemes: [
      {
        theme: 'The Davidic Covenant',
        description: 'God promises David an eternal dynasty—fulfilled in Christ.',
        keyPassages: ['7:1-17', '7:12-16']
      },
      {
        theme: 'Sin and Consequences',
        description: 'Even forgiven sin has consequences. David\'s adultery and murder lead to family and national tragedy.',
        keyPassages: ['11:1-27', '12:1-14']
      },
      {
        theme: 'God\'s Faithfulness',
        description: 'Despite David\'s failures, God remains committed to His covenant and purposes.',
        keyPassages: ['7:14-15', '23:5']
      },
      {
        theme: 'Kingship',
        description: 'David models ideal kingship in many ways but also demonstrates that no human king is perfect.',
        keyPassages: ['5:1-5', '8:15']
      }
    ],

    christConnection: [
      { type: 'prophecy', description: 'The Davidic covenant promises an eternal throne fulfilled in Christ, "Son of David."', passages: ['7:12-16'] },
      { type: 'type', description: 'David as shepherd-king pictures Christ, the Good Shepherd and true King.', passages: ['5:2', '7:8'] },
      { type: 'theme', description: 'Jerusalem/Zion as God\'s chosen city points to the heavenly Jerusalem.', passages: ['5:6-10', '6:12-19'] }
    ],

    keyVerses: [
      { reference: '7:12-13', text: 'I will raise up your offspring after you... and I will establish the throne of his kingdom forever.', significance: 'The heart of the Davidic covenant, fulfilled in Christ.' },
      { reference: '7:16', text: 'And your house and your kingdom shall be made sure forever before me. Your throne shall be established forever.', significance: 'God\'s unconditional promise of an eternal dynasty.' },
      { reference: '12:13', text: 'David said to Nathan, "I have sinned against the LORD." And Nathan said to David, "The LORD also has put away your sin; you shall not die."', significance: 'David\'s repentance and God\'s forgiveness, though consequences remain.' }
    ],

    keyCharacters: [
      { name: 'David', role: 'King of Israel, covenant recipient, flawed but repentant' },
      { name: 'Nathan', role: 'Prophet who delivers covenant promise and confronts David\'s sin' },
      { name: 'Bathsheba', role: 'Wife of Uriah, then David; mother of Solomon' },
      { name: 'Absalom', role: 'David\'s son who rebels and attempts to seize the throne' },
      { name: 'Joab', role: 'David\'s military commander, loyal but ruthless' }
    ],

    keyEvents: [
      { event: 'David Anointed over All Israel', reference: '5:1-5', significance: 'God\'s promise to David in 1 Samuel is fulfilled.' },
      { event: 'The Davidic Covenant', reference: '7:1-17', significance: 'God\'s unconditional promise of an eternal dynasty—the theological center of the book.' },
      { event: 'David and Bathsheba', reference: '11:1-27', significance: 'David\'s greatest failure: adultery, deception, and murder.' },
      { event: 'Nathan\'s Confrontation', reference: '12:1-15', significance: 'David\'s repentance and the announcement of consequences.' },
      { event: 'Absalom\'s Rebellion', reference: '15-18', significance: 'The consequences of David\'s sin unfold in his family.' }
    ],

    practicalApplications: [
      'Guard against temptation, especially during seasons of success and ease.',
      'Respond to confrontation with genuine repentance, not excuses.',
      'Trust in God\'s faithfulness even when facing consequences of sin.',
      'Recognize that godly leadership requires accountability.',
      'Find hope in God\'s unconditional covenant promises fulfilled in Christ.'
    ],

    studyQuestions: [
      'Why is 2 Samuel 7 (the Davidic covenant) so theologically significant?',
      'How does David\'s response to Nathan\'s confrontation model true repentance?',
      'What factors led to David\'s fall in chapter 11? How can we guard against similar patterns?',
      'How does God show both judgment and mercy in His dealings with David?',
      'How is Christ the ultimate fulfillment of the Davidic covenant?'
    ]
  },
  {
    id: '1-kings',
    name: '1 Kings',
    abbreviation: '1 Kgs',
    testament: 'old',
    canonicalGroup: 'history',
    order: 11,
    author: 'Unknown',
    authorNotes: 'Jewish tradition attributes Kings to Jeremiah. The author used various sources including royal annals.',
    dateWritten: 'c. 560-540 BC',
    originalAudience: 'Jewish exiles in Babylon',
    literaryGenre: ['narrative', 'prophetic history', 'royal chronicle'],
    difficulty: 'medium',

    overview: `First Kings continues the story from 2 Samuel, covering Solomon's reign, the kingdom's division, and the early kings of Israel and Judah. It opens with David's death and Solomon's glorious reign, including the building of the temple. However, Solomon's foreign wives turn his heart to idolatry, and God announces the kingdom will be torn from his son.

After Solomon's death, Rehoboam's foolish harshness causes the northern tribes to secede under Jeroboam. Jeroboam establishes counterfeit worship centers at Dan and Bethel—a sin that will be repeated by every northern king. The book chronicles both kingdoms, judging kings by their faithfulness to Yahweh and His temple.

The latter part of 1 Kings focuses on the prophet Elijah's confrontation with Ahab and Jezebel, who promote Baal worship in Israel. The showdown on Mount Carmel demonstrates Yahweh's supremacy over false gods.`,

    purpose: `First Kings explains how Israel divided and why both kingdoms eventually fell (though 2 Kings completes this story). It demonstrates that covenant unfaithfulness leads to judgment while showing God's continued work through faithful prophets.`,

    outline: [
      { section: 'Solomon\'s Reign', chapters: '1-11', summary: 'Solomon\'s wisdom, the temple, his glory, and his downfall through idolatry.' },
      { section: 'The Kingdom Divides', chapters: '12-14', summary: 'Rehoboam\'s folly, Jeroboam\'s sin, and the establishment of two kingdoms.' },
      { section: 'Kings of Israel and Judah', chapters: '15-16', summary: 'Parallel accounts of various kings, mostly unfaithful.' },
      { section: 'Elijah\'s Ministry', chapters: '17-22', summary: 'Elijah confronts Ahab and Jezebel; drought, Carmel, and Naboth\'s vineyard.' }
    ],

    keyThemes: [
      {
        theme: 'Covenant Faithfulness and Judgment',
        description: 'Kings are evaluated by their loyalty to Yahweh and obedience to His covenant. Unfaithfulness brings judgment.',
        keyPassages: ['9:1-9', '11:9-13']
      },
      {
        theme: 'The Temple',
        description: 'Solomon\'s temple is the place where God\'s name dwells—the center of proper worship.',
        keyPassages: ['6:1-38', '8:1-66']
      },
      {
        theme: 'True vs. False Worship',
        description: 'Jeroboam\'s counterfeit worship and Baal worship are condemned; Yahweh alone is God.',
        keyPassages: ['12:25-33', '18:20-40']
      },
      {
        theme: 'Prophetic Authority',
        description: 'God speaks through prophets who confront kings and call for covenant faithfulness.',
        keyPassages: ['13:1-34', '17-19']
      }
    ],

    christConnection: [
      { type: 'type', description: 'Solomon\'s wisdom and glorious kingdom foreshadow Christ, who is "greater than Solomon."', passages: ['3:5-14', '10:1-13'] },
      { type: 'type', description: 'The temple as God\'s dwelling place is fulfilled in Christ, the true temple.', passages: ['8:10-13'] },
      { type: 'type', description: 'Elijah\'s ministry prefigures John the Baptist preparing the way for Christ.', passages: ['18:36-39'] }
    ],

    keyVerses: [
      { reference: '3:9', text: 'Give your servant therefore an understanding mind to govern your people, that I may discern between good and evil.', significance: 'Solomon\'s wise request for wisdom rather than wealth or power.' },
      { reference: '8:27', text: 'But will God indeed dwell on the earth? Behold, heaven and the highest heaven cannot contain you; how much less this house that I have built!', significance: 'Recognition of God\'s transcendence even while celebrating His presence in the temple.' },
      { reference: '18:21', text: 'And Elijah came near to all the people and said, "How long will you go limping between two different opinions? If the LORD is God, follow him; but if Baal, then follow him."', significance: 'The call to exclusive loyalty to Yahweh.' }
    ],

    keyCharacters: [
      { name: 'Solomon', role: 'David\'s son, wisest king, temple builder, whose heart turned away' },
      { name: 'Rehoboam', role: 'Solomon\'s son whose harshness divided the kingdom' },
      { name: 'Jeroboam', role: 'First king of Israel who established counterfeit worship' },
      { name: 'Elijah', role: 'Prophet who confronted Ahab and demonstrated Yahweh\'s supremacy' },
      { name: 'Ahab', role: 'Wicked king of Israel who promoted Baal worship' }
    ],

    keyEvents: [
      { event: 'Solomon\'s Wisdom Request', reference: '3:5-14', significance: 'Solomon chooses wisdom, and God adds riches and honor.' },
      { event: 'Temple Dedication', reference: '8:1-66', significance: 'God\'s glory fills the temple; Solomon\'s prayer establishes it as a house of prayer.' },
      { event: 'Kingdom Division', reference: '12:1-24', significance: 'Rehoboam\'s folly splits the kingdom—judgment for Solomon\'s idolatry.' },
      { event: 'Mount Carmel Showdown', reference: '18:20-40', significance: 'Elijah demonstrates that Yahweh alone is God; the prophets of Baal are defeated.' }
    ],

    practicalApplications: [
      'Guard your heart from divided loyalties that lead to spiritual compromise.',
      'Recognize that wisdom is more valuable than wealth or power.',
      'Understand that faithful leadership has generational consequences.',
      'Refuse to "limp between two opinions"—commit wholeheartedly to God.',
      'Trust that God will vindicate His name and His people.'
    ],

    studyQuestions: [
      'How did Solomon\'s foreign marriages lead to his downfall? What warnings does this offer?',
      'Why was Jeroboam\'s alternative worship system so serious a sin?',
      'What does Solomon\'s prayer in chapter 8 teach about prayer and God\'s presence?',
      'How does Elijah\'s experience in chapter 19 encourage discouraged servants of God?',
      'What criteria does 1 Kings use to evaluate kings? How should this shape our values?'
    ]
  },
  {
    id: '2-kings',
    name: '2 Kings',
    abbreviation: '2 Kgs',
    testament: 'old',
    canonicalGroup: 'history',
    order: 12,
    author: 'Unknown',
    authorNotes: 'Same author/compiler as 1 Kings, possibly Jeremiah.',
    dateWritten: 'c. 560-540 BC',
    originalAudience: 'Jewish exiles in Babylon',
    literaryGenre: ['narrative', 'prophetic history', 'royal chronicle'],
    difficulty: 'medium',

    overview: `Second Kings continues the history of Israel and Judah from Elijah's translation to the Babylonian exile. It records the ministries of Elijah and Elisha, the fall of Israel to Assyria (722 BC), and eventually the fall of Judah to Babylon (586 BC).

The book shows a downward spiral in both kingdoms, despite occasional reforms in Judah under kings like Hezekiah and Josiah. The northern kingdom (Israel) never has a good king and falls first. Judah survives longer but ultimately follows the same path of covenant unfaithfulness.

Second Kings answers the question of why God's people lost their land and temple. The answer is clear: persistent covenant violation despite prophetic warnings. Yet the book ends with a small note of hope—the release of King Jehoiachin from Babylonian prison.`,

    purpose: `Second Kings explains the exiles' present circumstances: why Israel and Judah lost their land. It demonstrates that covenant unfaithfulness inevitably brings judgment while leaving a small ray of hope in God's faithfulness to the Davidic line.`,

    outline: [
      { section: 'Elisha\'s Ministry', chapters: '1-8', summary: 'Elijah\'s translation, Elisha\'s miracles, and ministry in Israel.' },
      { section: 'Both Kingdoms Decline', chapters: '9-16', summary: 'Jehu\'s revolution, worsening kings, and the fall of Israel approaches.' },
      { section: 'Israel Falls', chapters: '17', summary: 'The northern kingdom falls to Assyria; explanation of why.' },
      { section: 'Judah Alone', chapters: '18-25', summary: 'Hezekiah, Josiah\'s reforms, decline, and the Babylonian exile.' }
    ],

    keyThemes: [
      {
        theme: 'Covenant Judgment',
        description: 'Both kingdoms fall because of persistent covenant violation, especially idolatry.',
        keyPassages: ['17:7-23', '21:10-15', '24:1-4']
      },
      {
        theme: 'Prophetic Warning',
        description: 'God sends prophets to warn, but the people and kings refuse to listen.',
        keyPassages: ['17:13-14', '21:10-15']
      },
      {
        theme: 'The Sin of Jeroboam',
        description: 'Every northern king follows Jeroboam\'s counterfeit worship, leading to national destruction.',
        keyPassages: ['17:21-22', '10:29', '13:2']
      },
      {
        theme: 'Reform and Relapse',
        description: 'Even the greatest reforms (Hezekiah, Josiah) cannot permanently turn the nation back to God.',
        keyPassages: ['18:1-8', '22:1-23:25']
      }
    ],

    christConnection: [
      { type: 'type', description: 'Elisha\'s miracles of healing and provision foreshadow Christ\'s ministry.', passages: ['4:1-44', '5:1-19'] },
      { type: 'theme', description: 'The failure of all human kings demonstrates the need for the perfect King, Jesus.', passages: ['17:7-23'] },
      { type: 'prophecy', description: 'The preservation of David\'s line through exile points to Messiah\'s coming.', passages: ['25:27-30'] }
    ],

    keyVerses: [
      { reference: '17:13-14', text: 'Yet the LORD warned Israel and Judah by every prophet and every seer... But they would not listen, but were stubborn, as their fathers had been.', significance: 'Summary of why Israel fell: refusing prophetic warning.' },
      { reference: '17:22-23', text: 'The people of Israel walked in all the sins that Jeroboam did... until the LORD removed Israel out of his sight, as he had spoken by all his servants the prophets.', significance: 'The ultimate consequence of persistent unfaithfulness.' },
      { reference: '23:25', text: 'Before him there was no king like him, who turned to the LORD with all his heart and with all his soul and with all his might.', significance: 'Josiah\'s exemplary faith, yet unable to avert coming judgment.' }
    ],

    keyCharacters: [
      { name: 'Elisha', role: 'Prophet who succeeded Elijah with a double portion of his spirit' },
      { name: 'Hezekiah', role: 'Godly king of Judah who trusted God against Assyria' },
      { name: 'Josiah', role: 'Reforming king who discovered the Book of the Law' },
      { name: 'Naaman', role: 'Syrian general healed of leprosy through Elisha' },
      { name: 'Manasseh', role: 'Wicked king whose sins sealed Judah\'s judgment' }
    ],

    keyEvents: [
      { event: 'Elijah\'s Translation', reference: '2:1-18', significance: 'Elijah taken to heaven; Elisha receives double portion.' },
      { event: 'Naaman\'s Healing', reference: '5:1-19', significance: 'A Gentile is healed, foreshadowing gospel going to nations.' },
      { event: 'Fall of Israel', reference: '17:1-41', significance: 'Assyria conquers the north; theological explanation given.' },
      { event: 'Hezekiah\'s Deliverance', reference: '19:1-37', significance: 'God miraculously defeats Assyria in response to prayer.' },
      { event: 'Josiah\'s Reform', reference: '22:1-23:25', significance: 'Discovery of the Law leads to covenant renewal, but too late.' },
      { event: 'Fall of Jerusalem', reference: '25:1-21', significance: 'Babylon destroys the temple and exiles Judah.' }
    ],

    practicalApplications: [
      'Heed God\'s warnings before judgment becomes inevitable.',
      'Recognize that sin has cumulative consequences across generations.',
      'Trust God in impossible circumstances, as Hezekiah did.',
      'Pursue whole-hearted reformation, even if others don\'t follow.',
      'Find hope in God\'s preservation of His promises despite human failure.'
    ],

    studyQuestions: [
      'Why does 2 Kings spend so much time explaining Israel\'s fall in chapter 17?',
      'What made Hezekiah and Josiah stand out among Judah\'s kings?',
      'Why couldn\'t Josiah\'s reforms prevent Judah\'s fall?',
      'How does Naaman\'s story foreshadow the gospel going to Gentiles?',
      'What hope does the book offer despite ending in exile?'
    ]
  },
  {
    id: '1-chronicles',
    name: '1 Chronicles',
    abbreviation: '1 Chr',
    testament: 'old',
    canonicalGroup: 'history',
    order: 13,
    author: 'Unknown (traditionally Ezra)',
    authorNotes: 'Jewish tradition attributes Chronicles to Ezra. The author wrote for the post-exilic community.',
    dateWritten: 'c. 450-400 BC',
    originalAudience: 'Post-exilic Jewish community in Judah',
    literaryGenre: ['genealogy', 'narrative', 'temple records'],
    difficulty: 'hard',

    overview: `First Chronicles retells Israel's history from Adam to David with a distinctive post-exilic perspective. Written for Jews who had returned from Babylon, it emphasizes the Davidic covenant, proper temple worship, and the unity of God's people.

The book opens with nine chapters of genealogies—not mere lists but a theological statement that the restored community is connected to God's purposes from creation. The genealogies highlight Judah, Levi, and Benjamin (the tribes that returned), establishing continuity with pre-exilic Israel.

The latter half focuses on David's reign, omitting his failures (Bathsheba, Absalom) and emphasizing his preparations for the temple. David organizes the Levites, musicians, and worship, establishing patterns for the post-exilic community to follow.`,

    purpose: `Chronicles was written to encourage the post-exilic community by showing their connection to God's ongoing purposes. It emphasizes proper worship centered on the temple and calls the restored community to faithfulness by highlighting David's devotion to worship.`,

    outline: [
      { section: 'Genealogies', chapters: '1-9', summary: 'From Adam to the returned exiles, emphasizing Judah, Levi, and Benjamin.' },
      { section: 'David\'s Reign', chapters: '10-29', summary: 'Saul\'s death, David\'s reign, and preparations for the temple.' }
    ],

    keyThemes: [
      {
        theme: 'Continuity with the Past',
        description: 'Genealogies connect the post-exilic community to God\'s purposes from creation.',
        keyPassages: ['1:1-9:44', '9:1-34']
      },
      {
        theme: 'Temple Worship',
        description: 'Proper worship is central to Israel\'s identity. David\'s preparations model right worship.',
        keyPassages: ['15-16', '22-29']
      },
      {
        theme: 'The Davidic Covenant',
        description: 'God\'s promises to David remain valid and give hope to the post-exilic community.',
        keyPassages: ['17:1-27']
      },
      {
        theme: 'Immediate Retribution',
        description: 'Chronicles emphasizes that faithfulness brings blessing and unfaithfulness brings judgment.',
        keyPassages: ['10:13-14', '21:1-17']
      }
    ],

    christConnection: [
      { type: 'prophecy', description: 'The Davidic covenant\'s eternal kingdom promise fulfilled in Christ.', passages: ['17:11-14'] },
      { type: 'type', description: 'David\'s passionate worship anticipates Christ, who perfectly worships the Father.', passages: ['16:7-36'] },
      { type: 'theme', description: 'The genealogies establish the lineage through which Messiah will come.', passages: ['1-3'] }
    ],

    keyVerses: [
      { reference: '16:34', text: 'Oh give thanks to the LORD, for he is good; for his steadfast love endures forever!', significance: 'Foundational affirmation of God\'s enduring covenant love.' },
      { reference: '17:14', text: 'But I will confirm him in my house and in my kingdom forever, and his throne shall be established forever.', significance: 'Restatement of the Davidic covenant for the post-exilic community.' },
      { reference: '29:11', text: 'Yours, O LORD, is the greatness and the power and the glory... for all that is in the heavens and in the earth is yours.', significance: 'David\'s prayer acknowledging God\'s absolute sovereignty.' }
    ],

    keyCharacters: [
      { name: 'David', role: 'Ideal king focused on worship preparation and temple organization' },
      { name: 'Solomon', role: 'Designated temple builder, receiver of David\'s preparations' }
    ],

    practicalApplications: [
      'Value your connection to God\'s people throughout history.',
      'Make worship preparation and excellence a priority.',
      'Recognize that faithful giving enables God\'s work.',
      'Lead with a whole heart devoted to God\'s purposes.',
      'Trust in God\'s covenant faithfulness across generations.'
    ],

    studyQuestions: [
      'Why does Chronicles begin with nine chapters of genealogies?',
      'How does Chronicles\' portrait of David differ from Samuel\'s? Why?',
      'What does David\'s prayer in chapter 29 teach about giving and worship?',
      'How would Chronicles have encouraged the post-exilic community?',
      'What aspects of David\'s reign does Chronicles emphasize and why?'
    ]
  },
  {
    id: '2-chronicles',
    name: '2 Chronicles',
    abbreviation: '2 Chr',
    testament: 'old',
    canonicalGroup: 'history',
    order: 14,
    author: 'Unknown (traditionally Ezra)',
    authorNotes: 'Same author as 1 Chronicles, writing for the post-exilic community.',
    dateWritten: 'c. 450-400 BC',
    originalAudience: 'Post-exilic Jewish community in Judah',
    literaryGenre: ['narrative', 'prophetic history', 'temple records'],
    difficulty: 'hard',

    overview: `Second Chronicles covers the history from Solomon to the exile, focusing almost exclusively on the southern kingdom of Judah. The book emphasizes temple worship, evaluates kings by their relationship to the temple and true worship, and highlights reforming kings as models for the post-exilic community.

Solomon's reign receives extensive coverage, centered on the temple's construction and dedication. Subsequent kings are judged primarily by their faithfulness to proper worship—those who seek the Lord prosper; those who forsake Him face judgment.

The book ends with the Babylonian exile but closes on a note of hope: Cyrus's decree allowing the Jews to return and rebuild the temple. This ending connects Chronicles to Ezra-Nehemiah and points forward to restoration.`,

    purpose: `Second Chronicles calls the post-exilic community to faithful worship and warns against repeating the unfaithfulness that led to exile. It shows that God blesses those who seek Him and judges those who forsake Him.`,

    outline: [
      { section: 'Solomon\'s Reign', chapters: '1-9', summary: 'Solomon\'s wisdom, temple construction and dedication, and glory.' },
      { section: 'The Kingdom of Judah', chapters: '10-36', summary: 'Division, various kings, reforms, decline, exile, and Cyrus\'s decree.' }
    ],

    keyThemes: [
      {
        theme: 'Temple-Centered Worship',
        description: 'The temple is central to Israel\'s relationship with God. Kings are evaluated by their care for it.',
        keyPassages: ['5-7', '29:1-36', '34:1-33']
      },
      {
        theme: 'Seeking the Lord',
        description: 'Those who seek the Lord find Him and prosper; those who forsake Him face judgment.',
        keyPassages: ['7:14', '15:2', '26:5']
      },
      {
        theme: 'Immediate Retribution',
        description: 'Each generation receives consequences for its own choices—blessing for faithfulness, judgment for sin.',
        keyPassages: ['12:1-12', '26:16-21', '33:10-13']
      },
      {
        theme: 'Reform and Renewal',
        description: 'Reforming kings (Asa, Jehoshaphat, Hezekiah, Josiah) model covenant renewal for the post-exilic community.',
        keyPassages: ['15:1-15', '29-31', '34-35']
      }
    ],

    christConnection: [
      { type: 'type', description: 'Solomon\'s temple as God\'s dwelling points to Christ, in whom God dwells fully.', passages: ['5:13-14', '7:1-3'] },
      { type: 'theme', description: 'The need for ongoing reform shows the need for a new covenant in Christ.', passages: ['34:29-33'] },
      { type: 'prophecy', description: '2 Chronicles 7:14 finds ultimate fulfillment in the gospel\'s call to repentance.', passages: ['7:14'] }
    ],

    keyVerses: [
      { reference: '7:14', text: 'If my people who are called by my name humble themselves, and pray and seek my face and turn from their wicked ways, then I will hear from heaven and will forgive their sin and heal their land.', significance: 'Conditional promise of restoration through repentance—a key verse for the post-exilic community.' },
      { reference: '15:2', text: 'The LORD is with you while you are with him. If you seek him, he will be found by you, but if you forsake him, he will forsake you.', significance: 'The principle that governs the book\'s evaluation of kings.' },
      { reference: '20:12', text: 'We do not know what to do, but our eyes are on you.', significance: 'Jehoshaphat\'s prayer of dependence on God in crisis.' }
    ],

    keyCharacters: [
      { name: 'Solomon', role: 'Temple builder whose glory and wisdom are emphasized' },
      { name: 'Rehoboam', role: 'Whose folly divided the kingdom' },
      { name: 'Asa', role: 'Reforming king who removed idolatry' },
      { name: 'Jehoshaphat', role: 'Godly king who established justice and sought the Lord' },
      { name: 'Hezekiah', role: 'Great reformer who restored temple worship' },
      { name: 'Josiah', role: 'Last reforming king who discovered the Book of the Law' }
    ],

    keyEvents: [
      { event: 'Temple Dedication', reference: '5-7', significance: 'God\'s glory fills the temple; Solomon\'s prayer and God\'s response.' },
      { event: 'Hezekiah\'s Passover', reference: '30:1-27', significance: 'Restoration of neglected worship; invitation to all Israel.' },
      { event: 'Josiah\'s Reform', reference: '34-35', significance: 'Discovery of the Law leads to comprehensive reform.' },
      { event: 'Jerusalem\'s Fall', reference: '36:15-21', significance: 'Exile as judgment for rejecting prophetic warnings.' },
      { event: 'Cyrus\'s Decree', reference: '36:22-23', significance: 'Hope of return and restoration—the book\'s final note.' }
    ],

    practicalApplications: [
      'Seek the Lord wholeheartedly and you will find Him.',
      'Prioritize corporate worship and care for God\'s house.',
      'Learn from past failures to avoid repeating them.',
      'Respond to God\'s discipline with humility and repentance.',
      'Trust that God can restore what sin has broken.'
    ],

    studyQuestions: [
      'How does 2 Chronicles 7:14 apply to the church today?',
      'Why does Chronicles give so much attention to temple worship?',
      'What pattern do the reforming kings establish for spiritual renewal?',
      'How does Chronicles\' ending on Cyrus\'s decree provide hope?',
      'What does the phrase "seeking the Lord" mean in Chronicles?'
    ]
  },
  {
    id: 'ezra',
    name: 'Ezra',
    abbreviation: 'Ezra',
    testament: 'old',
    canonicalGroup: 'history',
    order: 15,
    author: 'Ezra',
    authorNotes: 'Ezra the scribe likely compiled the book, using personal memoirs and official documents.',
    dateWritten: 'c. 450-400 BC',
    originalAudience: 'Post-exilic Jewish community in Judah',
    literaryGenre: ['narrative', 'memoirs', 'official documents'],
    difficulty: 'medium',

    overview: `Ezra records two waves of return from Babylonian exile and the challenges of restoration. The first wave under Zerubbabel (chapters 1-6) focuses on rebuilding the temple. The second wave under Ezra (chapters 7-10) addresses spiritual reformation.

After Cyrus's decree, about 50,000 Jews return and begin rebuilding the temple. Opposition halts the work until prophets Haggai and Zechariah encourage completion. The temple is finished and dedicated with joy, though older people weep, remembering Solomon's grander temple.

Decades later, Ezra leads a second group back with a mission to teach God's law. He discovers widespread intermarriage with pagan peoples and leads the community in confession and covenant renewal. The book emphasizes that physical return means nothing without spiritual reformation.`,

    purpose: `Ezra shows how God fulfilled His promise to restore His people to the land. It emphasizes that true restoration requires spiritual renewal—rebuilding hearts, not just buildings—and calls the community to covenant faithfulness.`,

    outline: [
      { section: 'First Return: Temple Rebuilt', chapters: '1-6', summary: 'Cyrus\'s decree, return under Zerubbabel, opposition, and temple completion.' },
      { section: 'Second Return: People Renewed', chapters: '7-10', summary: 'Ezra\'s return, discovery of intermarriage, and covenant renewal.' }
    ],

    keyThemes: [
      {
        theme: 'Fulfillment of Prophecy',
        description: 'God keeps His promise to restore Israel after seventy years of exile.',
        keyPassages: ['1:1-4', '6:14']
      },
      {
        theme: 'Temple Restoration',
        description: 'Rebuilding the temple symbolizes restoration of right relationship with God.',
        keyPassages: ['3:1-13', '6:13-22']
      },
      {
        theme: 'Separation and Holiness',
        description: 'God\'s people must be distinct, not assimilating with surrounding peoples.',
        keyPassages: ['9:1-15', '10:1-17']
      },
      {
        theme: 'The Centrality of Scripture',
        description: 'Ezra is a scribe skilled in the Law; teaching Scripture is essential to reformation.',
        keyPassages: ['7:6', '7:10']
      }
    ],

    christConnection: [
      { type: 'theme', description: 'The return from exile pictures Christ\'s greater redemption, freeing us from sin\'s bondage.', passages: ['1:1-4'] },
      { type: 'type', description: 'Ezra as priest-teacher foreshadows Christ, our great high priest and teacher.', passages: ['7:1-10'] },
      { type: 'theme', description: 'The rebuilt temple anticipates the true temple—Christ\'s body.', passages: ['6:13-18'] }
    ],

    keyVerses: [
      { reference: '1:3', text: 'Whoever is among you of all his people, may his God be with him, and let him go up to Jerusalem, which is in Judah, and rebuild the house of the LORD.', significance: 'Cyrus\'s decree fulfilling Jeremiah\'s prophecy.' },
      { reference: '7:10', text: 'For Ezra had set his heart to study the Law of the LORD, and to do it and to teach his statutes and rules in Israel.', significance: 'The threefold commitment that made Ezra effective: study, do, teach.' },
      { reference: '9:6', text: 'O my God, I am ashamed and blush to lift my face to you, my God, for our iniquities have risen higher than our heads.', significance: 'Ezra\'s model of corporate confession and repentance.' }
    ],

    keyCharacters: [
      { name: 'Cyrus', role: 'Persian king whose decree allowed the Jews to return' },
      { name: 'Zerubbabel', role: 'Leader of the first return; rebuilt the temple' },
      { name: 'Ezra', role: 'Priest and scribe who led the second return and spiritual reformation' },
      { name: 'Jeshua', role: 'High priest during temple reconstruction' }
    ],

    keyEvents: [
      { event: 'Cyrus\'s Decree', reference: '1:1-4', significance: 'God moves a pagan king to fulfill prophecy and allow return.' },
      { event: 'Temple Foundation Laid', reference: '3:8-13', significance: 'Mixed joy and weeping as rebuilding begins.' },
      { event: 'Temple Completed', reference: '6:13-22', significance: 'Twenty years after beginning, the temple is finished and dedicated.' },
      { event: 'Ezra\'s Arrival', reference: '7:1-10', significance: 'Ezra comes to teach God\'s law and establish justice.' },
      { event: 'Confession and Separation', reference: '9-10', significance: 'Community deals with sin of intermarriage through repentance.' }
    ],

    practicalApplications: [
      'Trust that God can use even unbelievers to accomplish His purposes.',
      'Follow Ezra\'s model: study Scripture, obey it, then teach it.',
      'Practice corporate confession when community sin is discovered.',
      'Prioritize spiritual renewal over external accomplishments.',
      'Guard against compromising relationships that lead away from God.'
    ],

    studyQuestions: [
      'How does Ezra 1:1 demonstrate God\'s sovereignty over world rulers?',
      'Why did some people weep at the temple foundation (3:12)?',
      'What made Ezra effective as a spiritual leader (7:10)?',
      'How does Ezra\'s prayer in chapter 9 model confession?',
      'What principles for dealing with community sin emerge from chapters 9-10?'
    ]
  },
  {
    id: 'nehemiah',
    name: 'Nehemiah',
    abbreviation: 'Neh',
    testament: 'old',
    canonicalGroup: 'history',
    order: 16,
    author: 'Nehemiah',
    authorNotes: 'Nehemiah\'s memoirs form the core; likely edited and combined with Ezra by a later compiler.',
    dateWritten: 'c. 430-400 BC',
    originalAudience: 'Post-exilic Jewish community in Judah',
    literaryGenre: ['memoirs', 'narrative', 'lists'],
    difficulty: 'medium',

    overview: `Nehemiah completes the restoration story, focusing on rebuilding Jerusalem's walls and renewing the covenant community. Nehemiah, cupbearer to the Persian king, learns of Jerusalem's disgrace—its walls broken and gates burned. With royal permission, he returns to rebuild.

Despite fierce opposition from Sanballat, Tobiah, and others, the walls are completed in just 52 days. But Nehemiah understands that physical walls without spiritual renewal are worthless. The book's second half focuses on repopulating Jerusalem and renewing the covenant.

The joint reading of the Law by Ezra and covenant renewal ceremony (chapters 8-10) form the book's theological climax. Nehemiah deals with ongoing social injustice, Sabbath violations, and intermarriage, showing the constant struggle to maintain covenant faithfulness.`,

    purpose: `Nehemiah shows that restoration requires both physical rebuilding and spiritual renewal. It provides a model of godly leadership that combines prayerful dependence on God with practical action and perseverance through opposition.`,

    outline: [
      { section: 'Rebuilding the Walls', chapters: '1-7', summary: 'Nehemiah\'s burden, return, and wall construction despite opposition.' },
      { section: 'Renewing the Covenant', chapters: '8-10', summary: 'Public reading of the Law, confession, and covenant renewal.' },
      { section: 'Reforming the Community', chapters: '11-13', summary: 'Repopulating Jerusalem and addressing ongoing covenant violations.' }
    ],

    keyThemes: [
      {
        theme: 'Prayer and Action',
        description: 'Nehemiah models the combination of dependent prayer and decisive action.',
        keyPassages: ['1:4-11', '2:4-5', '4:4-5, 9']
      },
      {
        theme: 'Opposition and Perseverance',
        description: 'God\'s work faces opposition, but faithful perseverance overcomes.',
        keyPassages: ['4:1-23', '6:1-16']
      },
      {
        theme: 'Covenant Renewal',
        description: 'Reading and responding to God\'s Word leads to genuine reformation.',
        keyPassages: ['8:1-12', '9:1-38', '10:28-39']
      },
      {
        theme: 'Social Justice',
        description: 'Covenant faithfulness includes just treatment of the poor and vulnerable.',
        keyPassages: ['5:1-13']
      }
    ],

    christConnection: [
      { type: 'type', description: 'Nehemiah as rebuilder and governor foreshadows Christ, who builds His church.', passages: ['2:17-18', '6:15-16'] },
      { type: 'theme', description: 'The people\'s weeping and joy at hearing God\'s Word pictures gospel response.', passages: ['8:9-12'] },
      { type: 'theme', description: 'Jerusalem\'s walls picture the security and protection found in Christ.', passages: ['6:15-16'] }
    ],

    keyVerses: [
      { reference: '1:4', text: 'As soon as I heard these words I sat down and wept and mourned for days, and I continued fasting and praying before the God of heaven.', significance: 'Nehemiah\'s broken-hearted response to Jerusalem\'s disgrace.' },
      { reference: '2:20', text: 'The God of heaven will make us prosper, and we his servants will arise and build.', significance: 'Nehemiah\'s confident response to opposition.' },
      { reference: '8:10', text: 'Do not be grieved, for the joy of the LORD is your strength.', significance: 'Joy in God enables perseverance and obedience.' }
    ],

    keyCharacters: [
      { name: 'Nehemiah', role: 'Persian cupbearer who became Jerusalem\'s governor and wall-builder' },
      { name: 'Sanballat', role: 'Samaritan leader who opposed the rebuilding' },
      { name: 'Tobiah', role: 'Ammonite official who mocked and conspired against Jerusalem' },
      { name: 'Ezra', role: 'Priest and scribe who read the Law publicly' }
    ],

    keyEvents: [
      { event: 'Nehemiah\'s Prayer', reference: '1:4-11', significance: 'Model of confession, appeal to God\'s promises, and specific petition.' },
      { event: 'Wall Completion', reference: '6:15-16', significance: 'Completed in 52 days, enemies acknowledge God\'s involvement.' },
      { event: 'Public Reading of the Law', reference: '8:1-12', significance: 'Scripture reading leads to understanding, weeping, and joy.' },
      { event: 'Covenant Renewal', reference: '9-10', significance: 'Community confesses sin and commits to covenant obedience.' },
      { event: 'Nehemiah\'s Reforms', reference: '13:1-31', significance: 'Ongoing struggle to maintain covenant faithfulness.' }
    ],

    practicalApplications: [
      'Let your heart break for what breaks God\'s heart.',
      'Combine prayer and practical action—don\'t separate them.',
      'Persevere through opposition with confidence in God.',
      'Make Scripture reading central to spiritual renewal.',
      'Address social injustice as part of covenant faithfulness.'
    ],

    studyQuestions: [
      'What can we learn from Nehemiah\'s prayer pattern throughout the book?',
      'How did Nehemiah handle different types of opposition?',
      'Why was the public reading of Scripture so powerful in chapters 8-9?',
      'What social issues did Nehemiah address, and why were they covenant matters?',
      'Why does the book end with ongoing struggles rather than complete success?'
    ]
  },
  {
    id: 'esther',
    name: 'Esther',
    abbreviation: 'Esth',
    testament: 'old',
    canonicalGroup: 'history',
    order: 17,
    author: 'Unknown',
    authorNotes: 'Unknown author with access to Persian court records. Written after the events described.',
    dateWritten: 'c. 460-350 BC',
    originalAudience: 'Jews in Persia and the diaspora',
    literaryGenre: ['narrative', 'historical novella', 'court tale'],
    difficulty: 'easy',

    overview: `Esther tells the story of a Jewish orphan who becomes queen of Persia and saves her people from genocide. Set during the reign of Xerxes (Ahasuerus), the book never mentions God's name—yet divine providence permeates every scene.

After Queen Vashti's removal, Esther (guided by her cousin Mordecai) becomes queen without revealing her Jewish identity. When the villain Haman plots to exterminate all Jews in the empire, Mordecai challenges Esther to intercede with the king. Her courageous intervention leads to Haman's downfall and Jewish deliverance.

The book explains the origin of Purim, the Jewish festival celebrating deliverance from Haman. Throughout, "coincidences" accumulate beyond chance: Esther's position, the king's insomnia, the timing of events—revealing God's invisible hand protecting His people.`,

    purpose: `Esther demonstrates God's providential protection of His people even in exile, without explicit mention of His name. It establishes the festival of Purim and encourages diaspora Jews that God remains faithful even when He seems absent.`,

    outline: [
      { section: 'Esther Becomes Queen', chapters: '1-2', summary: 'Vashti deposed; Esther chosen; Mordecai uncovers a plot.' },
      { section: 'Haman\'s Plot', chapters: '3-4', summary: 'Haman\'s hatred of Mordecai leads to decree against all Jews.' },
      { section: 'Esther\'s Courage', chapters: '5-7', summary: 'Esther\'s banquets; Haman\'s downfall; the king honors Mordecai.' },
      { section: 'Jewish Deliverance', chapters: '8-10', summary: 'Counter-decree; Jews defeat enemies; Purim established.' }
    ],

    keyThemes: [
      {
        theme: 'Divine Providence',
        description: 'Though God is never named, His sovereign hand orchestrates every "coincidence" for His people\'s deliverance.',
        keyPassages: ['4:14', '6:1-3']
      },
      {
        theme: 'Courage and Calling',
        description: 'Esther risks her life for her people, embracing her God-given position "for such a time as this."',
        keyPassages: ['4:13-16', '5:1-3']
      },
      {
        theme: 'Reversal',
        description: 'The tables turn completely: Haman is hanged on his own gallows; the Jews triumph over their enemies.',
        keyPassages: ['7:9-10', '9:1']
      },
      {
        theme: 'Jewish Identity',
        description: 'The book affirms Jewish identity and survival in a hostile world.',
        keyPassages: ['3:8', '4:13-14', '8:17']
      }
    ],

    christConnection: [
      { type: 'type', description: 'Esther risks death to intercede for her people, picturing Christ\'s greater intercession.', passages: ['4:15-16', '5:1-3'] },
      { type: 'theme', description: 'God\'s hidden preservation of His people points to Christ, through whom salvation comes.', passages: ['4:14'] },
      { type: 'theme', description: 'The reversal of the Jews\' fate anticipates the gospel\'s reversal of sin\'s curse.', passages: ['9:1'] }
    ],

    keyVerses: [
      { reference: '4:14', text: 'For if you keep silent at this time, relief and deliverance will rise for the Jews from another place, but you and your father\'s house will perish. And who knows whether you have not come to the kingdom for such a time as this?', significance: 'Mordecai\'s challenge: providence has positioned Esther for this moment.' },
      { reference: '4:16', text: 'Go, gather all the Jews... and hold a fast on my behalf... Then I will go to the king, though it is against the law, and if I perish, I perish.', significance: 'Esther\'s courageous commitment to risk everything for her people.' },
      { reference: '9:1', text: 'On the very day when the enemies of the Jews hoped to gain the mastery over them, the reverse occurred.', significance: 'Summary of the book\'s great reversal theme.' }
    ],

    keyCharacters: [
      { name: 'Esther (Hadassah)', role: 'Jewish orphan who becomes queen and saves her people' },
      { name: 'Mordecai', role: 'Esther\'s cousin and guardian who refuses to bow to Haman' },
      { name: 'Haman', role: 'Proud official who plots genocide against the Jews' },
      { name: 'King Xerxes (Ahasuerus)', role: 'Persian king whose decrees shape events' }
    ],

    keyEvents: [
      { event: 'Esther Becomes Queen', reference: '2:17', significance: 'God positions Esther for future deliverance.' },
      { event: 'Haman\'s Decree', reference: '3:8-15', significance: 'All Jews in the empire sentenced to death.' },
      { event: 'Mordecai\'s Challenge', reference: '4:13-14', significance: '"For such a time as this"—calling Esther to act.' },
      { event: 'Esther\'s Approach', reference: '5:1-3', significance: 'Esther risks death; the king extends the scepter.' },
      { event: 'Haman\'s Fall', reference: '7:1-10', significance: 'Haman exposed and hanged on his own gallows.' }
    ],

    practicalApplications: [
      'Trust God\'s providence even when you cannot see His hand.',
      'Recognize that your position may be for "such a time as this."',
      'Act courageously when God\'s people are threatened.',
      'Fast and pray when facing impossible circumstances.',
      'Celebrate God\'s deliverance and remember His faithfulness.'
    ],

    studyQuestions: [
      'Why doesn\'t the book mention God\'s name? How does this affect its message?',
      'What "coincidences" in the story reveal God\'s providence?',
      'How does Mordecai\'s statement in 4:14 show faith in God?',
      'What risks did Esther take, and what motivated her?',
      'How does the theme of reversal point to the gospel?'
    ]
  },

  // ========================================
  // POETRY & WISDOM
  // ========================================
  {
    id: 'job',
    name: 'Job',
    abbreviation: 'Job',
    testament: 'old',
    canonicalGroup: 'poetry',
    order: 18,
    author: 'Unknown',
    authorNotes: 'Various authors have been suggested, including Job, Moses, Solomon, or an anonymous Israelite sage. The book\'s antiquity and non-Israelite setting suggest very early composition.',
    dateWritten: 'Uncertain (possibly patriarchal era; written form may be later)',
    originalAudience: 'All who suffer and question God\'s justice',
    literaryGenre: ['wisdom literature', 'poetic dialogue', 'theodicy'],
    difficulty: 'hard',

    overview: `Job is the Bible's most extended exploration of suffering and divine justice. The book opens with a prose prologue revealing Job as a blameless man whom God allows Satan to test. Job loses his wealth, children, and health, yet refuses to curse God. His three friends—Eliphaz, Bildad, and Zophar—arrive to comfort him but spend most of their speeches insisting Job must have sinned to deserve such suffering.

The heart of the book consists of three cycles of poetic dialogue where Job maintains his innocence while struggling to understand God's ways. A young man named Elihu then speaks, preparing the way for God's response. When God finally answers from the whirlwind, He doesn't explain Job's suffering but reveals His wisdom and sovereignty over all creation.

The book ends with Job repenting of his presumption, not his sin, and being restored to double his former prosperity. The epilogue confirms that Job's friends spoke wrongly about God, while Job spoke what was right. The book offers no simple answers but invites trust in God's wisdom beyond human understanding.`,

    purpose: `Job addresses the relationship between righteousness and suffering, refuting the simplistic view that suffering always indicates sin. It calls readers to trust God's wisdom and sovereignty even when His purposes are hidden, and to maintain faith amid inexplicable suffering.`,

    outline: [
      { section: 'Prologue', chapters: '1-2', summary: 'Job\'s righteousness, Satan\'s challenge, Job\'s losses and response.' },
      { section: 'Dialogue with Three Friends', chapters: '3-31', summary: 'Three cycles of debate about the cause of Job\'s suffering.' },
      { section: 'Elihu\'s Speeches', chapters: '32-37', summary: 'A young man offers a different perspective on suffering.' },
      { section: 'God Speaks', chapters: '38-41', summary: 'God reveals His wisdom and power in creation.' },
      { section: 'Epilogue', chapters: '42', summary: 'Job\'s repentance and restoration.' }
    ],

    keyThemes: [
      {
        theme: 'The Problem of Suffering',
        description: 'Job challenges the assumption that suffering always results from sin, showing that the righteous may suffer for reasons beyond human understanding.',
        keyPassages: ['Job 1:8-12', 'Job 2:3-6', 'Job 42:7-8']
      },
      {
        theme: 'Divine Sovereignty and Wisdom',
        description: 'God\'s wisdom in governing creation far exceeds human comprehension, calling for humble trust rather than demanding explanations.',
        keyPassages: ['Job 38:1-7', 'Job 40:1-5', 'Job 42:1-6']
      },
      {
        theme: 'Integrity in Suffering',
        description: 'Job maintains his integrity before God even when pressed to curse God or admit to sins he didn\'t commit.',
        keyPassages: ['Job 1:21-22', 'Job 2:9-10', 'Job 27:5-6']
      },
      {
        theme: 'Limits of Human Wisdom',
        description: 'Human wisdom, even at its best, cannot fully comprehend God\'s ways or the mysteries of providence.',
        keyPassages: ['Job 28:12-28', 'Job 38-39', 'Job 42:3']
      }
    ],

    christConnection: [
      {
        type: 'type',
        description: 'Job prefigures Christ as a righteous sufferer who maintains faith despite affliction and intercedes for his friends.',
        passages: ['Job 1:1', 'Job 42:8-10']
      },
      {
        type: 'theme',
        description: 'The theme of innocent suffering finds ultimate expression in Christ, who suffered not for His own sins but for ours.',
        passages: ['Job 16:19-21', '1 Peter 2:21-24']
      },
      {
        type: 'prophecy',
        description: 'Job\'s longing for a mediator and redeemer points to Christ who stands between God and humanity.',
        passages: ['Job 9:32-35', 'Job 19:25-27']
      }
    ],

    keyVerses: [
      {
        reference: 'Job 1:21',
        text: 'Naked I came from my mother\'s womb, and naked shall I return. The LORD gave, and the LORD has taken away; blessed be the name of the LORD.',
        significance: 'Job\'s initial response shows faith that worships God regardless of circumstances.'
      },
      {
        reference: 'Job 19:25-26',
        text: 'For I know that my Redeemer lives, and at the last he will stand upon the earth. And after my skin has been thus destroyed, yet in my flesh I shall see God.',
        significance: 'Job\'s confident hope in resurrection and ultimate vindication.'
      },
      {
        reference: 'Job 42:5-6',
        text: 'I had heard of you by the hearing of the ear, but now my eye sees you; therefore I despise myself, and repent in dust and ashes.',
        significance: 'Job\'s encounter with God transforms his understanding from knowledge about God to personal knowledge of God.'
      }
    ],

    keyCharacters: [
      { name: 'Job', role: 'Righteous sufferer from Uz who wrestles with God' },
      { name: 'Eliphaz', role: 'Oldest friend; emphasizes divine visions and God\'s purity' },
      { name: 'Bildad', role: 'Second friend; appeals to tradition and ancestral wisdom' },
      { name: 'Zophar', role: 'Third friend; most blunt in accusing Job' },
      { name: 'Elihu', role: 'Young man who offers a more nuanced view of suffering' },
      { name: 'Satan', role: 'Accuser who questions Job\'s motives' }
    ],

    keyEvents: [
      { event: 'Job\'s testing', reference: 'Job 1-2', significance: 'Satan challenges Job\'s motives; God permits testing within limits.' },
      { event: 'Three cycles of dialogue', reference: 'Job 3-31', significance: 'Extended debate about why Job suffers.' },
      { event: 'God speaks from the whirlwind', reference: 'Job 38-41', significance: 'God reveals His wisdom without explaining Job\'s suffering.' },
      { event: 'Job\'s restoration', reference: 'Job 42', significance: 'Job intercedes for friends and receives double blessing.' }
    ],

    practicalApplications: [
      'Trust God\'s wisdom when His ways are beyond understanding.',
      'Avoid simplistic explanations for others\' suffering.',
      'Maintain integrity and worship even in unexplained trials.',
      'Move from knowing about God to knowing God personally.',
      'Recognize the limits of human wisdom regarding divine providence.'
    ],

    studyQuestions: [
      'What was Satan\'s accusation against Job, and how did Job refute it?',
      'Why didn\'t God explain to Job the reason for his suffering?',
      'How does God\'s speech from the whirlwind answer Job\'s questions?',
      'What was wrong with the friends\' theology, and what did they get right?',
      'How does Job\'s story point forward to Christ?'
    ]
  },
  {
    id: 'psalms',
    name: 'Psalms',
    abbreviation: 'Ps',
    testament: 'old',
    canonicalGroup: 'poetry',
    order: 19,
    author: 'Various (primarily David)',
    authorNotes: 'David wrote about half the psalms. Other authors include Asaph, the sons of Korah, Solomon, Moses (Ps 90), and anonymous writers.',
    dateWritten: 'c. 1440-430 BC (spanning Israel\'s history)',
    originalAudience: 'Israel\'s worshipping community',
    literaryGenre: ['poetry', 'hymnody', 'lament', 'praise', 'wisdom', 'royal psalms'],
    difficulty: 'easy',

    overview: `The book of Psalms is Israel's inspired hymnbook and prayer book, containing 150 poems that express the full range of human emotion in relationship with God. From exuberant praise to desperate lament, from confident trust to anguished questioning, the Psalms teach God's people how to pray, worship, and live before Him.

The collection is divided into five books (1-41, 42-72, 73-89, 90-106, 107-150), possibly mirroring the five books of Torah. The psalms include various types: hymns of praise, individual and communal laments, thanksgiving psalms, wisdom psalms, royal psalms, and pilgrimage songs. Many include superscriptions indicating authorship, historical setting, or musical instructions.

The Psalms are the most quoted Old Testament book in the New Testament, with Jesus himself praying from the Psalms on the cross. They remain the church's primary prayer book, teaching believers to bring every circumstance and emotion before God in faith. The movement from lament to praise that characterizes many individual psalms mirrors the overall movement of the Psalter from struggle to worship.`,

    purpose: `The Psalms were compiled to guide Israel in worship and prayer, expressing appropriate responses to God in every circumstance of life. They teach the way of the righteous, reveal God's character, and point to the coming Messiah.`,

    outline: [
      { section: 'Book I', chapters: '1-41', summary: 'Primarily Davidic psalms; personal relationship with God.' },
      { section: 'Book II', chapters: '42-72', summary: 'Psalms of David and Korah; focus on national concerns.' },
      { section: 'Book III', chapters: '73-89', summary: 'Asaph and Korah psalms; wrestling with exile and covenant.' },
      { section: 'Book IV', chapters: '90-106', summary: 'Moses and anonymous psalms; the LORD reigns.' },
      { section: 'Book V', chapters: '107-150', summary: 'David\'s praise; pilgrim songs; Hallelujah psalms.' }
    ],

    keyThemes: [
      {
        theme: 'The Two Ways',
        description: 'The contrast between the way of the righteous and the way of the wicked runs throughout the Psalter.',
        keyPassages: ['Psalm 1', 'Psalm 37', 'Psalm 73']
      },
      {
        theme: 'God as King',
        description: 'The LORD reigns over all creation and history, and His kingdom will be established forever through His Anointed.',
        keyPassages: ['Psalm 2', 'Psalm 93-99', 'Psalm 145']
      },
      {
        theme: 'Lament and Trust',
        description: 'The Psalms model honest prayer that moves from complaint to confidence in God\'s faithfulness.',
        keyPassages: ['Psalm 13', 'Psalm 22', 'Psalm 77']
      },
      {
        theme: 'The Messianic Hope',
        description: 'Many psalms point to God\'s Anointed King who will rule the nations and bless all peoples.',
        keyPassages: ['Psalm 2', 'Psalm 22', 'Psalm 110']
      }
    ],

    christConnection: [
      {
        type: 'prophecy',
        description: 'Numerous psalms directly prophesy Christ\'s suffering, death, resurrection, and exaltation.',
        passages: ['Psalm 22', 'Psalm 16:10', 'Psalm 110']
      },
      {
        type: 'type',
        description: 'David as anointed king, shepherd, and suffering servant prefigures Christ.',
        passages: ['Psalm 23', 'Psalm 69', 'Psalm 89']
      },
      {
        type: 'direct',
        description: 'Jesus quoted the Psalms as His own prayers, especially on the cross.',
        passages: ['Psalm 22:1 (Matt 27:46)', 'Psalm 31:5 (Luke 23:46)', 'Psalm 69:21 (John 19:28-29)']
      }
    ],

    keyVerses: [
      {
        reference: 'Psalm 1:1-2',
        text: 'Blessed is the man who walks not in the counsel of the wicked... but his delight is in the law of the LORD, and on his law he meditates day and night.',
        significance: 'The Psalter\'s introduction establishes the blessed life rooted in God\'s Word.'
      },
      {
        reference: 'Psalm 23:1',
        text: 'The LORD is my shepherd; I shall not want.',
        significance: 'The best-known psalm expresses confident trust in God\'s care.'
      },
      {
        reference: 'Psalm 51:10',
        text: 'Create in me a clean heart, O God, and renew a right spirit within me.',
        significance: 'David\'s penitential psalm models true repentance.'
      },
      {
        reference: 'Psalm 119:105',
        text: 'Your word is a lamp to my feet and a light to my path.',
        significance: 'The longest chapter celebrates God\'s Word as life\'s guide.'
      }
    ],

    keyCharacters: [
      { name: 'David', role: 'Primary author; king after God\'s own heart' },
      { name: 'Asaph', role: 'Levitical worship leader; author of Psalms 50, 73-83' },
      { name: 'Sons of Korah', role: 'Levitical guild; authors of Psalms 42-49, 84-85, 87-88' },
      { name: 'Solomon', role: 'David\'s son; author of Psalms 72, 127' },
      { name: 'Moses', role: 'Author of Psalm 90' }
    ],

    practicalApplications: [
      'Use the Psalms to guide your prayers in every circumstance.',
      'Bring honest emotions to God, including lament and complaint.',
      'Meditate on God\'s Word daily as the path to blessing.',
      'Rehearse God\'s faithful acts in history to strengthen present faith.',
      'Let the Psalms shape your worship vocabulary and heart.'
    ],

    studyQuestions: [
      'How does Psalm 1 introduce the themes of the entire Psalter?',
      'What is the pattern of lament psalms, and how does this guide our prayers?',
      'How do the messianic psalms reveal Christ?',
      'Why are the Psalms divided into five books?',
      'How can you incorporate the Psalms into daily devotional practice?'
    ]
  },
  {
    id: 'proverbs',
    name: 'Proverbs',
    abbreviation: 'Prov',
    testament: 'old',
    canonicalGroup: 'poetry',
    order: 20,
    author: 'Solomon (primarily) and others',
    authorNotes: 'Solomon authored most proverbs (1:1, 10:1, 25:1). Additional sections come from "the wise" (22:17, 24:23), Agur (30:1), and King Lemuel\'s mother (31:1).',
    dateWritten: 'c. 970-930 BC (Solomon\'s reign); compiled later',
    originalAudience: 'Young men learning wisdom; all seeking to live skillfully',
    literaryGenre: ['wisdom literature', 'poetry', 'instruction'],
    difficulty: 'easy',

    overview: `Proverbs is a collection of practical wisdom for everyday life, teaching how to live skillfully in God's world. The book presents wisdom as the path to life and folly as the way to death. Written primarily by Solomon, the wisest king of Israel, it addresses every aspect of human existence—speech, work, money, relationships, sexuality, family, leadership, and character.

The book opens with extended discourses from a father to his son, personifying wisdom as a woman who calls out in the streets. This first section (chapters 1-9) lays the theological foundation: "The fear of the LORD is the beginning of wisdom." Chapters 10-31 contain shorter proverbial sayings organized in various collections, covering practical topics with memorable, pithy observations about life.

Proverbs recognizes that wisdom is not merely intellectual but relational—it begins with proper reverence for God and expresses itself in righteous living. The book's conclusion celebrates the "excellent wife" whose life embodies wisdom in action. Proverbs teaches that God has woven moral order into creation, and those who align with this order flourish while those who resist it suffer.`,

    purpose: `Proverbs was written to teach wisdom and discipline, to help readers understand words of insight, to give prudence to the simple and knowledge to the young, and to help the wise increase their learning and discern the moral order God has embedded in creation.`,

    outline: [
      { section: 'Prologue and Purpose', chapters: '1:1-7', summary: 'The book\'s purpose and foundational principle.' },
      { section: 'Fatherly Instructions', chapters: '1:8-9:18', summary: 'Extended discourses on wisdom versus folly.' },
      { section: 'Solomon\'s Proverbs I', chapters: '10-22:16', summary: 'Short proverbial sayings contrasting wisdom and folly.' },
      { section: 'Sayings of the Wise', chapters: '22:17-24:34', summary: 'Thirty sayings of the wise.' },
      { section: 'Solomon\'s Proverbs II', chapters: '25-29', summary: 'More Solomonic proverbs compiled by Hezekiah\'s men.' },
      { section: 'Agur and Lemuel', chapters: '30-31', summary: 'Agur\'s numerical sayings; the excellent wife.' }
    ],

    keyThemes: [
      {
        theme: 'The Fear of the LORD',
        description: 'Wisdom begins with proper reverence for God; this foundational principle frames the entire book.',
        keyPassages: ['Proverbs 1:7', 'Proverbs 9:10', 'Proverbs 15:33']
      },
      {
        theme: 'Wisdom versus Folly',
        description: 'Two paths are set before every person—the way of wisdom that leads to life and the way of folly that leads to death.',
        keyPassages: ['Proverbs 1:20-33', 'Proverbs 8', 'Proverbs 9:1-18']
      },
      {
        theme: 'Speech and the Tongue',
        description: 'Words have power for life or death; the wise guard their speech carefully.',
        keyPassages: ['Proverbs 10:19-21', 'Proverbs 12:18', 'Proverbs 18:21']
      },
      {
        theme: 'Diligence and Work',
        description: 'Hard work leads to prosperity while laziness leads to poverty and ruin.',
        keyPassages: ['Proverbs 6:6-11', 'Proverbs 12:24', 'Proverbs 22:29']
      }
    ],

    christConnection: [
      {
        type: 'theme',
        description: 'Wisdom personified in chapters 1-9 anticipates Christ, who is "the wisdom of God" (1 Cor 1:24, 30).',
        passages: ['Proverbs 8:22-31', '1 Corinthians 1:24', 'Colossians 2:3']
      },
      {
        type: 'type',
        description: 'Solomon as the wise king prefigures Christ, in whom are hidden all treasures of wisdom.',
        passages: ['Proverbs 1:1', 'Matthew 12:42', 'Luke 11:31']
      },
      {
        type: 'theme',
        description: 'The call of wisdom in the streets prefigures Christ\'s invitation to come to Him.',
        passages: ['Proverbs 1:20-23', 'Proverbs 9:4-6', 'Matthew 11:28-30']
      }
    ],

    keyVerses: [
      {
        reference: 'Proverbs 1:7',
        text: 'The fear of the LORD is the beginning of knowledge; fools despise wisdom and instruction.',
        significance: 'The foundational principle of all biblical wisdom.'
      },
      {
        reference: 'Proverbs 3:5-6',
        text: 'Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.',
        significance: 'The classic call to trust God rather than self-reliance.'
      },
      {
        reference: 'Proverbs 22:6',
        text: 'Train up a child in the way he should go; even when he is old he will not depart from it.',
        significance: 'The importance of early instruction in wisdom.'
      },
      {
        reference: 'Proverbs 31:30',
        text: 'Charm is deceitful, and beauty is vain, but a woman who fears the LORD is to be praised.',
        significance: 'The conclusion emphasizes that fearing God is true beauty.'
      }
    ],

    keyCharacters: [
      { name: 'Solomon', role: 'Primary author; wisest king of Israel' },
      { name: 'Lady Wisdom', role: 'Personification of wisdom calling people to life' },
      { name: 'Lady Folly', role: 'Personification of foolishness leading to death' },
      { name: 'Agur', role: 'Author of chapter 30\'s numerical proverbs' },
      { name: 'Lemuel', role: 'King whose mother taught him about the excellent wife' },
      { name: 'The Excellent Wife', role: 'Embodiment of wisdom in practical life (ch. 31)' }
    ],

    practicalApplications: [
      'Cultivate the fear of the LORD as the foundation for wise living.',
      'Guard your speech, knowing words have power for life or death.',
      'Work diligently and avoid the trap of laziness.',
      'Choose companions carefully—they shape your character.',
      'Listen to rebuke and seek wise counsel in decisions.'
    ],

    studyQuestions: [
      'What does it mean that "the fear of the LORD is the beginning of wisdom"?',
      'How does Proverbs personify wisdom and folly as two women?',
      'Why does Proverbs address so many practical topics like money and speech?',
      'How does wisdom in Proverbs point to Christ?',
      'What does the "excellent wife" passage teach about wisdom embodied?'
    ]
  },
  {
    id: 'ecclesiastes',
    name: 'Ecclesiastes',
    abbreviation: 'Eccl',
    testament: 'old',
    canonicalGroup: 'poetry',
    order: 21,
    author: 'Solomon (traditionally)',
    authorNotes: 'The author calls himself "Qoheleth" (the Teacher/Preacher) and identifies as David\'s son and king in Jerusalem, pointing to Solomon.',
    dateWritten: 'c. 940-930 BC (Solomon\'s later years)',
    originalAudience: 'Those seeking meaning in life',
    literaryGenre: ['wisdom literature', 'philosophical reflection', 'autobiography'],
    difficulty: 'hard',

    overview: `Ecclesiastes is the most unusual wisdom book, documenting the Teacher's search for meaning in life "under the sun"—that is, from a purely earthly perspective. The book's famous refrain, "Vanity of vanities, all is vanity," expresses the Teacher's conclusion that life without God is meaningless. Yet this conclusion drives readers toward the book's positive message: fear God and enjoy His gifts.

The Teacher explores every avenue humans pursue for meaning: wisdom, pleasure, work, wealth, and achievement. Each proves to be "vanity"—literally "vapor" or "breath"—fleeting and ultimately unsatisfying. Death comes to all, apparently erasing any distinction between wise and foolish, righteous and wicked. This brutal honesty about life's frustrations distinguishes Ecclesiastes from superficial optimism.

Yet the book is not pessimistic but realistic. Interspersed throughout are calls to enjoy life's simple pleasures as gifts from God's hand. The conclusion gathers the book's message: "Fear God and keep his commandments, for this is the whole duty of man." Ecclesiastes teaches that lasting meaning comes not from achievements "under the sun" but from relationship with the God who is above the sun.`,

    purpose: `Ecclesiastes was written to show that life without God is meaningless, to expose the futility of pursuing meaning through earthly achievements alone, and to direct readers toward fearing God and enjoying His gifts as the path to a meaningful life.`,

    outline: [
      { section: 'Theme and Introduction', chapters: '1:1-11', summary: 'Everything is vanity; nothing new under the sun.' },
      { section: 'The Teacher\'s Experiments', chapters: '1:12-2:26', summary: 'Testing wisdom, pleasure, and work—all vanity.' },
      { section: 'Time and Eternity', chapters: '3:1-22', summary: 'A time for everything; eternity in human hearts.' },
      { section: 'Observations on Life', chapters: '4:1-6:12', summary: 'Oppression, companionship, wealth—all examined.' },
      { section: 'Practical Wisdom', chapters: '7:1-12:8', summary: 'How to live wisely amid life\'s uncertainties.' },
      { section: 'Conclusion', chapters: '12:9-14', summary: 'Fear God and keep His commandments.' }
    ],

    keyThemes: [
      {
        theme: 'Vanity of Life Under the Sun',
        description: 'Life apart from God is empty and meaningless; earthly pursuits cannot provide lasting satisfaction.',
        keyPassages: ['Ecclesiastes 1:2', 'Ecclesiastes 2:11', 'Ecclesiastes 12:8']
      },
      {
        theme: 'Death as the Great Equalizer',
        description: 'Death comes to all—wise and foolish, rich and poor—making earthly achievements temporary.',
        keyPassages: ['Ecclesiastes 2:14-16', 'Ecclesiastes 3:19-21', 'Ecclesiastes 9:2-3']
      },
      {
        theme: 'Joy as God\'s Gift',
        description: 'Despite life\'s vanity, God gives enjoyment of food, drink, work, and relationships as good gifts.',
        keyPassages: ['Ecclesiastes 2:24-26', 'Ecclesiastes 3:12-13', 'Ecclesiastes 9:7-10']
      },
      {
        theme: 'Fear God',
        description: 'The book\'s conclusion and answer to vanity: reverence for God gives life meaning and purpose.',
        keyPassages: ['Ecclesiastes 3:14', 'Ecclesiastes 5:7', 'Ecclesiastes 12:13-14']
      }
    ],

    christConnection: [
      {
        type: 'theme',
        description: 'The vanity of life under the sun points to humanity\'s need for a Savior who brings eternal life.',
        passages: ['Ecclesiastes 3:11', 'John 10:10', 'Romans 8:20-21']
      },
      {
        type: 'type',
        description: 'Solomon as wisdom-seeker prefigures Christ, who alone satisfies humanity\'s search for meaning.',
        passages: ['Ecclesiastes 1:12-13', 'Matthew 12:42', 'Colossians 2:3']
      },
      {
        type: 'theme',
        description: 'The eternity God has placed in human hearts finds fulfillment only in the eternal life Christ gives.',
        passages: ['Ecclesiastes 3:11', 'John 3:16', 'John 17:3']
      }
    ],

    keyVerses: [
      {
        reference: 'Ecclesiastes 1:2',
        text: 'Vanity of vanities, says the Preacher, vanity of vanities! All is vanity.',
        significance: 'The book\'s theme: life without God is empty and fleeting.'
      },
      {
        reference: 'Ecclesiastes 3:1',
        text: 'For everything there is a season, and a time for every matter under heaven.',
        significance: 'God\'s sovereignty over the times and seasons of life.'
      },
      {
        reference: 'Ecclesiastes 3:11',
        text: 'He has made everything beautiful in its time. Also, he has put eternity into man\'s heart, yet so that he cannot find out what God has done from the beginning to the end.',
        significance: 'Humans are made for eternity but cannot fully understand God\'s purposes.'
      },
      {
        reference: 'Ecclesiastes 12:13',
        text: 'The end of the matter; all has been heard. Fear God and keep his commandments, for this is the whole duty of man.',
        significance: 'The book\'s conclusion: meaning is found in fearing and obeying God.'
      }
    ],

    keyCharacters: [
      { name: 'The Teacher (Qoheleth)', role: 'The author who experiments with life\'s meaning' }
    ],

    practicalApplications: [
      'Recognize that earthly pursuits cannot provide ultimate meaning.',
      'Enjoy simple pleasures—food, work, relationships—as gifts from God.',
      'Remember that death gives urgency to living wisely today.',
      'Fear God as the foundation for a meaningful life.',
      'Hold earthly achievements loosely while pursuing eternal significance.'
    ],

    studyQuestions: [
      'What does "vanity" (Hebrew: hevel) mean, and why does the Teacher use this word?',
      'How does the Teacher\'s conclusion (12:13-14) answer the book\'s questions?',
      'Why does Ecclesiastes alternate between despair and calls to enjoy life?',
      'What does it mean that God has "put eternity into man\'s heart"?',
      'How does Ecclesiastes prepare readers for the gospel?'
    ]
  },
  {
    id: 'song-of-solomon',
    name: 'Song of Solomon',
    abbreviation: 'Song',
    testament: 'old',
    canonicalGroup: 'poetry',
    order: 22,
    author: 'Solomon',
    authorNotes: 'The superscription attributes the song to Solomon. Some scholars suggest later compilation with Solomonic material.',
    dateWritten: 'c. 970-930 BC',
    originalAudience: 'Israelite couples; the worshipping community',
    literaryGenre: ['love poetry', 'wedding song', 'wisdom literature'],
    difficulty: 'hard',

    overview: `The Song of Solomon (also called Song of Songs or Canticles) is a lyrical poem celebrating romantic love between a man and woman. It is the Bible's most extended meditation on human love, affirming the goodness of physical intimacy within the covenant of marriage. The "song of songs" title indicates this is the supreme song, Solomon's masterpiece among his 1,005 songs.

The poem features dialogue between a bride and bridegroom, with occasional chorus from friends. The lyrics move between longing and satisfaction, separation and reunion, praise of the beloved's beauty and expressions of passionate desire. The garden imagery and royal wedding language create an idealized portrait of marital love as God intended it.

Throughout church history, the song has been interpreted both literally (celebrating human love) and allegorically (representing God's love for Israel or Christ's love for the church). Both readings have value: the literal reading affirms the goodness of sexuality in marriage, while the allegorical reading sees human love as pointing to the greater love between God and His people. The song's inclusion in Scripture sanctifies romantic love as a divine gift reflecting God's own passionate love.`,

    purpose: `The Song of Solomon celebrates the beauty and joy of marital love as God designed it. It affirms the goodness of physical intimacy, provides a vision of love characterized by mutual delight, and points beyond itself to the covenant love between God and His people.`,

    outline: [
      { section: 'Title and Courtship', chapters: '1:1-3:5', summary: 'Mutual longing during courtship.' },
      { section: 'The Wedding', chapters: '3:6-5:1', summary: 'Wedding procession and consummation.' },
      { section: 'Conflict and Resolution', chapters: '5:2-6:3', summary: 'Separation and renewed seeking.' },
      { section: 'Renewed Love', chapters: '6:4-8:4', summary: 'Beauty praised; love reaffirmed.' },
      { section: 'Conclusion', chapters: '8:5-14', summary: 'The power and nature of true love.' }
    ],

    keyThemes: [
      {
        theme: 'The Beauty of Marital Love',
        description: 'Romantic and physical love within marriage is God\'s good gift to be celebrated, not suppressed.',
        keyPassages: ['Song 1:2-4', 'Song 4:1-7', 'Song 7:1-9']
      },
      {
        theme: 'Mutual Delight and Desire',
        description: 'Love is mutual—both partners express desire, admiration, and belonging to each other.',
        keyPassages: ['Song 2:16', 'Song 6:3', 'Song 7:10']
      },
      {
        theme: 'Love\'s Exclusivity and Permanence',
        description: 'True love is exclusive and enduring, stronger than death.',
        keyPassages: ['Song 2:15-16', 'Song 8:6-7']
      },
      {
        theme: 'The Garden of Delight',
        description: 'Garden imagery recalls Eden, suggesting marital love restores something of paradise.',
        keyPassages: ['Song 4:12-16', 'Song 5:1', 'Song 6:2-3']
      }
    ],

    christConnection: [
      {
        type: 'type',
        description: 'The bridegroom\'s love for his bride prefigures Christ\'s love for the church.',
        passages: ['Song 2:4', 'Ephesians 5:25-32']
      },
      {
        type: 'theme',
        description: 'The covenant exclusivity of marital love reflects Christ\'s exclusive claim on His people.',
        passages: ['Song 2:16', 'Song 6:3', '2 Corinthians 11:2']
      },
      {
        type: 'theme',
        description: 'The passionate, pursuing love of the bridegroom mirrors Christ who seeks and saves His bride.',
        passages: ['Song 5:2-8', 'Revelation 19:7-9']
      }
    ],

    keyVerses: [
      {
        reference: 'Song 2:16',
        text: 'My beloved is mine, and I am his; he grazes among the lilies.',
        significance: 'Expresses the mutual belonging of covenant love.'
      },
      {
        reference: 'Song 8:6-7',
        text: 'Set me as a seal upon your heart, as a seal upon your arm, for love is strong as death, jealousy is fierce as the grave. Its flashes are flashes of fire, the very flame of the LORD. Many waters cannot quench love, neither can floods drown it.',
        significance: 'The book\'s climax describes love\'s invincible power.'
      },
      {
        reference: 'Song 4:7',
        text: 'You are altogether beautiful, my love; there is no flaw in you.',
        significance: 'The bridegroom\'s complete acceptance and delight in his bride.'
      }
    ],

    keyCharacters: [
      { name: 'The Bride (Shulammite)', role: 'The beloved, whose love story is celebrated' },
      { name: 'The Bridegroom (Solomon)', role: 'The lover who pursues, praises, and delights in his bride' },
      { name: 'Daughters of Jerusalem', role: 'Chorus who dialogue with the bride' }
    ],

    practicalApplications: [
      'Celebrate physical intimacy as God\'s good gift within marriage.',
      'Cultivate mutual admiration and expressed appreciation in marriage.',
      'Guard your marriage with exclusive devotion.',
      'Let marital love point you to Christ\'s greater love.',
      'Reject both prudishness and promiscuity—embrace God\'s design.'
    ],

    studyQuestions: [
      'How does the Song affirm the goodness of physical love in marriage?',
      'What does "love is strong as death" (8:6) mean?',
      'How might this song point to Christ and the church?',
      'What garden imagery is used, and how does it connect to Eden?',
      'How does the mutuality in this song challenge cultural views of love?'
    ]
  },

  // ========================================
  // MAJOR PROPHETS
  // ========================================
  {
    id: 'isaiah',
    name: 'Isaiah',
    abbreviation: 'Isa',
    testament: 'old',
    canonicalGroup: 'major_prophets',
    order: 23,
    author: 'Isaiah son of Amoz',
    authorNotes: 'Isaiah ministered in Jerusalem during the reigns of Uzziah, Jotham, Ahaz, and Hezekiah (roughly 740-680 BC).',
    dateWritten: 'c. 740-680 BC',
    originalAudience: 'The kingdoms of Judah and Israel facing Assyrian threat',
    literaryGenre: ['prophecy', 'poetry', 'apocalyptic', 'narrative'],
    difficulty: 'medium',

    overview: `Isaiah is the longest and most frequently quoted prophetic book, often called the "Fifth Gospel" for its extensive messianic prophecies. The prophet Isaiah ministered during one of the most tumultuous periods in Israel's history, as the Assyrian Empire threatened both northern Israel and southern Judah. His message combines stern warnings of judgment with breathtaking promises of future salvation.

The book divides naturally into two main sections. Chapters 1-39 emphasize judgment, addressing the sins of Judah and surrounding nations while promising a faithful remnant. The pivotal vision of God's holiness in chapter 6 shapes Isaiah's entire ministry. Chapters 40-66 focus on comfort and hope, proclaiming deliverance from exile and the coming of God's kingdom through the Servant of the LORD.

Isaiah's Servant Songs (42, 49, 50, 52-53) provide the Old Testament's most detailed portrait of the Messiah's suffering and triumph. The book moves from announcing judgment on sin to proclaiming salvation through the Servant, culminating in visions of new heavens and new earth. Isaiah's theology is foundational for understanding Christ's person and work.`,

    purpose: `Isaiah called Judah to repent from idolatry and trust God alone for salvation. He exposed the futility of political alliances and empty religion, while pointing forward to God's ultimate plan of redemption through the coming Messiah and the establishment of His everlasting kingdom.`,

    outline: [
      { section: 'Judgment on Judah and Nations', chapters: '1-12', summary: 'Indictment of Judah; Immanuel prophecies.' },
      { section: 'Oracles Against Nations', chapters: '13-23', summary: 'God\'s sovereignty over all nations.' },
      { section: 'Isaiah\'s Apocalypse', chapters: '24-27', summary: 'Worldwide judgment and future restoration.' },
      { section: 'Woes and Hezekiah Narratives', chapters: '28-39', summary: 'Warnings against trusting Egypt; Assyrian crisis.' },
      { section: 'Comfort and Deliverance', chapters: '40-48', summary: 'Comfort to exiles; the one true God.' },
      { section: 'The Servant of the LORD', chapters: '49-57', summary: 'The Servant\'s mission, suffering, and triumph.' },
      { section: 'Future Glory', chapters: '58-66', summary: 'True worship; new heavens and new earth.' }
    ],

    keyThemes: [
      {
        theme: 'The Holiness of God',
        description: 'God is the "Holy One of Israel"—majestic, transcendent, and morally pure, demanding holiness from His people.',
        keyPassages: ['Isaiah 6:1-7', 'Isaiah 40:25-26', 'Isaiah 57:15']
      },
      {
        theme: 'Judgment and Salvation',
        description: 'God judges sin but provides salvation through grace; judgment on Israel leads to restoration for a remnant.',
        keyPassages: ['Isaiah 1:18-20', 'Isaiah 10:20-22', 'Isaiah 45:22']
      },
      {
        theme: 'The Suffering Servant',
        description: 'God\'s chosen Servant will accomplish salvation through suffering, bearing the sins of many.',
        keyPassages: ['Isaiah 42:1-9', 'Isaiah 49:1-7', 'Isaiah 52:13-53:12']
      },
      {
        theme: 'New Creation',
        description: 'God will create new heavens and a new earth where righteousness dwells and His people rejoice.',
        keyPassages: ['Isaiah 65:17-25', 'Isaiah 66:22-23', 'Isaiah 11:1-9']
      }
    ],

    christConnection: [
      {
        type: 'prophecy',
        description: 'Isaiah contains the clearest Old Testament prophecies of Christ\'s virgin birth, ministry, suffering, and reign.',
        passages: ['Isaiah 7:14', 'Isaiah 9:6-7', 'Isaiah 52:13-53:12']
      },
      {
        type: 'prophecy',
        description: 'The Servant Songs prophesy Christ\'s gentle ministry, substitutionary death, and ultimate vindication.',
        passages: ['Isaiah 42:1-4', 'Isaiah 50:4-9', 'Isaiah 53:4-6']
      },
      {
        type: 'direct',
        description: 'Jesus read Isaiah 61 in Nazareth and declared it fulfilled in Himself.',
        passages: ['Isaiah 61:1-2', 'Luke 4:16-21']
      }
    ],

    keyVerses: [
      {
        reference: 'Isaiah 6:3',
        text: 'Holy, holy, holy is the LORD of hosts; the whole earth is full of his glory!',
        significance: 'The seraphim\'s cry reveals God\'s transcendent holiness.'
      },
      {
        reference: 'Isaiah 7:14',
        text: 'Therefore the Lord himself will give you a sign. Behold, the virgin shall conceive and bear a son, and shall call his name Immanuel.',
        significance: 'The famous prophecy of Christ\'s virgin birth.'
      },
      {
        reference: 'Isaiah 53:5',
        text: 'But he was pierced for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace, and with his wounds we are healed.',
        significance: 'The Suffering Servant bears our sins—the heart of the gospel.'
      },
      {
        reference: 'Isaiah 40:31',
        text: 'But they who wait for the LORD shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.',
        significance: 'Promise of strength to those who trust in the LORD.'
      }
    ],

    keyCharacters: [
      { name: 'Isaiah', role: 'Prophet to Judah during the Assyrian crisis' },
      { name: 'Ahaz', role: 'Wicked king who refused to trust God' },
      { name: 'Hezekiah', role: 'Faithful king who trusted God against Assyria' },
      { name: 'The Servant', role: 'Mysterious figure who brings salvation through suffering' }
    ],

    keyEvents: [
      { event: 'Isaiah\'s call', reference: 'Isaiah 6', significance: 'Vision of God\'s holiness shapes Isaiah\'s ministry.' },
      { event: 'Sign to Ahaz', reference: 'Isaiah 7', significance: 'Immanuel prophecy given amid political crisis.' },
      { event: 'Assyria\'s defeat', reference: 'Isaiah 36-37', significance: 'God delivers Jerusalem from Sennacherib.' },
      { event: 'Hezekiah\'s illness', reference: 'Isaiah 38-39', significance: 'Hezekiah\'s recovery and Babylonian envoys.' }
    ],

    practicalApplications: [
      'Worship God in His holiness and respond with repentance.',
      'Trust God alone for security rather than political alliances or human resources.',
      'Find comfort in the Suffering Servant who bore your sins.',
      'Wait on the LORD for renewed strength in times of weariness.',
      'Live with hope for the new creation God is bringing.'
    ],

    studyQuestions: [
      'How does Isaiah\'s vision in chapter 6 shape his message?',
      'What do the Servant Songs reveal about the Messiah\'s mission?',
      'How does Isaiah 52:13-53:12 describe Christ\'s atonement?',
      'Why is God repeatedly called "the Holy One of Israel"?',
      'How do the book\'s two halves (1-39 and 40-66) relate to each other?'
    ]
  },
  {
    id: 'jeremiah',
    name: 'Jeremiah',
    abbreviation: 'Jer',
    testament: 'old',
    canonicalGroup: 'major_prophets',
    order: 24,
    author: 'Jeremiah with Baruch as scribe',
    authorNotes: 'Jeremiah was a priest from Anathoth called to prophesy during Judah\'s final decades before Babylon\'s conquest.',
    dateWritten: 'c. 626-580 BC',
    originalAudience: 'Judah during its final kings before and after Babylonian exile',
    literaryGenre: ['prophecy', 'poetry', 'narrative', 'lament'],
    difficulty: 'medium',

    overview: `Jeremiah is the longest book in the Bible and records the ministry of the "weeping prophet" during Judah's darkest hour. Called by God before birth, Jeremiah prophesied for over forty years, from the reign of Josiah through Jerusalem's destruction by Babylon in 586 BC. Despite continual opposition, imprisonment, and rejection, he faithfully proclaimed God's word to a nation that refused to listen.

The book combines poetic oracles, biographical narratives, and symbolic actions. Jeremiah's message was primarily one of judgment: Judah's persistent idolatry and injustice would result in destruction and exile. Yet woven throughout are threads of hope, especially the promise of a new covenant written on hearts (chapter 31) and the restoration of the remnant.

Jeremiah's personal anguish is palpable throughout the book. His "confessions" reveal intimate struggles with his calling. He wept over the destruction he foresaw, loved the people who hated him, and remained faithful though his message seemed to fail. After Jerusalem fell, he was taken to Egypt against his will, where tradition says he died. His life demonstrates costly obedience to God's call.`,

    purpose: `Jeremiah was called to "pluck up and to break down, to destroy and to overthrow, to build and to plant" (1:10). He announced God's judgment on Judah for covenant unfaithfulness while promising future restoration through a new covenant. His life modeled faithful proclamation despite rejection.`,

    outline: [
      { section: 'Call and Early Oracles', chapters: '1-6', summary: 'Jeremiah\'s call; indictment of Judah.' },
      { section: 'Temple Sermon and Rejection', chapters: '7-10', summary: 'False worship exposed; coming judgment.' },
      { section: 'Broken Covenant', chapters: '11-20', summary: 'Judah\'s covenant violations; Jeremiah\'s confessions.' },
      { section: 'Kings and False Prophets', chapters: '21-29', summary: 'Messages to kings; conflict with prophets.' },
      { section: 'Book of Consolation', chapters: '30-33', summary: 'Promises of restoration; the new covenant.' },
      { section: 'Jerusalem\'s Fall', chapters: '34-45', summary: 'Narratives surrounding Jerusalem\'s destruction.' },
      { section: 'Oracles Against Nations', chapters: '46-51', summary: 'Judgment on surrounding nations and Babylon.' },
      { section: 'Historical Appendix', chapters: '52', summary: 'Jerusalem\'s fall recounted.' }
    ],

    keyThemes: [
      {
        theme: 'Judgment for Covenant Breaking',
        description: 'Judah\'s idolatry and injustice violated the covenant, making judgment inevitable.',
        keyPassages: ['Jeremiah 2:1-13', 'Jeremiah 7:1-15', 'Jeremiah 11:1-13']
      },
      {
        theme: 'The New Covenant',
        description: 'God promises a new covenant with His law written on hearts, not stone tablets.',
        keyPassages: ['Jeremiah 31:31-34', 'Jeremiah 32:37-41', 'Jeremiah 33:14-26']
      },
      {
        theme: 'True vs. False Prophecy',
        description: 'Jeremiah contends with prophets who proclaim false peace, distinguishing true from false.',
        keyPassages: ['Jeremiah 23:9-32', 'Jeremiah 27-28', 'Jeremiah 14:13-16']
      },
      {
        theme: 'Faithful Suffering',
        description: 'Jeremiah models obedience to God\'s call despite rejection, persecution, and anguish.',
        keyPassages: ['Jeremiah 15:10-21', 'Jeremiah 20:7-18', 'Jeremiah 38:1-13']
      }
    ],

    christConnection: [
      {
        type: 'type',
        description: 'Jeremiah as the rejected, weeping prophet prefigures Christ who wept over Jerusalem.',
        passages: ['Jeremiah 9:1', 'Luke 19:41-44', 'Matthew 23:37']
      },
      {
        type: 'prophecy',
        description: 'The new covenant promise is explicitly fulfilled in Christ\'s blood.',
        passages: ['Jeremiah 31:31-34', 'Luke 22:20', 'Hebrews 8:6-13']
      },
      {
        type: 'prophecy',
        description: 'The "righteous Branch" and "LORD our righteousness" prophecies point to Christ.',
        passages: ['Jeremiah 23:5-6', 'Jeremiah 33:15-16']
      }
    ],

    keyVerses: [
      {
        reference: 'Jeremiah 1:5',
        text: 'Before I formed you in the womb I knew you, and before you were born I consecrated you; I appointed you a prophet to the nations.',
        significance: 'God\'s sovereign calling and knowledge of Jeremiah before birth.'
      },
      {
        reference: 'Jeremiah 29:11',
        text: 'For I know the plans I have for you, declares the LORD, plans for welfare and not for evil, to give you a future and a hope.',
        significance: 'God\'s good purposes for His exiled people.'
      },
      {
        reference: 'Jeremiah 31:33',
        text: 'For this is the covenant that I will make with the house of Israel after those days, declares the LORD: I will put my law within them, and I will write it on their hearts. And I will be their God, and they shall be my people.',
        significance: 'The new covenant promise—law internalized, relationship restored.'
      },
      {
        reference: 'Jeremiah 17:9',
        text: 'The heart is deceitful above all things, and desperately sick; who can understand it?',
        significance: 'The human heart\'s corruption, requiring the new covenant transformation.'
      }
    ],

    keyCharacters: [
      { name: 'Jeremiah', role: 'The weeping prophet; faithful despite rejection' },
      { name: 'Baruch', role: 'Jeremiah\'s scribe and companion' },
      { name: 'Josiah', role: 'Reforming king during Jeremiah\'s early ministry' },
      { name: 'Jehoiakim', role: 'Wicked king who burned Jeremiah\'s scroll' },
      { name: 'Zedekiah', role: 'Last king of Judah; wavered between prophets' },
      { name: 'Nebuchadnezzar', role: 'Babylonian king, God\'s instrument of judgment' }
    ],

    keyEvents: [
      { event: 'Jeremiah\'s call', reference: 'Jeremiah 1', significance: 'Appointed before birth to pluck up and plant.' },
      { event: 'Temple sermon', reference: 'Jeremiah 7, 26', significance: 'Exposes false trust in the temple.' },
      { event: 'Scroll burned', reference: 'Jeremiah 36', significance: 'Jehoiakim burns God\'s word; it\'s rewritten.' },
      { event: 'Jerusalem falls', reference: 'Jeremiah 39, 52', significance: 'Jeremiah\'s prophecy fulfilled.' }
    ],

    practicalApplications: [
      'Remain faithful to God\'s calling despite opposition and rejection.',
      'Trust in God\'s good plans even during seasons of discipline.',
      'Recognize the deceitfulness of the heart and need for transformation.',
      'Look to the new covenant for heart change, not mere external compliance.',
      'Weep with those who weep—compassion accompanies prophetic warning.'
    ],

    studyQuestions: [
      'Why is Jeremiah called the "weeping prophet"?',
      'How does the new covenant differ from the old covenant?',
      'What distinguished Jeremiah from the false prophets?',
      'How did Jeremiah respond to his suffering and rejection?',
      'How is Jeremiah 29:11 often misused, and what is its proper context?'
    ]
  },
  {
    id: 'lamentations',
    name: 'Lamentations',
    abbreviation: 'Lam',
    testament: 'old',
    canonicalGroup: 'major_prophets',
    order: 25,
    author: 'Traditionally Jeremiah',
    authorNotes: 'Jewish and Christian tradition attributes the book to Jeremiah, the weeping prophet who witnessed Jerusalem\'s fall.',
    dateWritten: 'c. 586-580 BC (shortly after Jerusalem\'s destruction)',
    originalAudience: 'Jewish survivors of Jerusalem\'s destruction',
    literaryGenre: ['poetry', 'lament', 'funeral dirge'],
    difficulty: 'medium',

    overview: `Lamentations is a collection of five poems mourning Jerusalem's destruction by Babylon in 586 BC. Written in the immediate aftermath of this catastrophe, the book gives voice to the raw grief of survivors who witnessed their city, temple, and national identity obliterated. The poetry is both communal and intensely personal, expressing shock, anguish, and desperate faith.

The first four poems are alphabetic acrostics (each verse or section beginning with a successive Hebrew letter), giving structure to overwhelming grief. Chapter 3, the theological center, moves from despair to hope, affirming God's faithfulness even amid judgment. Chapter 5 abandons the acrostic form as grief becomes too raw for structured expression.

Lamentations refuses easy answers. It acknowledges that Jerusalem's destruction was God's just judgment for sin while simultaneously crying out in agony. The book models honest lament that brings pain to God without denying His sovereignty or justice. It points toward hope not by minimizing suffering but by clinging to God's character in the darkness.`,

    purpose: `Lamentations was written to express grief over Jerusalem's destruction, to acknowledge God's justice in judgment, and to cling to hope in God's faithfulness amid overwhelming loss. It provides a biblical model for honest lament.`,

    outline: [
      { section: 'Jerusalem\'s Desolation', chapters: '1', summary: 'The city personified as a widow mourning.' },
      { section: 'God\'s Judgment', chapters: '2', summary: 'The LORD as enemy; divine wrath poured out.' },
      { section: 'Hope in Affliction', chapters: '3', summary: 'Personal lament turning to hope in God\'s faithfulness.' },
      { section: 'Siege and Suffering', chapters: '4', summary: 'The horrors of the siege recounted.' },
      { section: 'Communal Plea', chapters: '5', summary: 'The community cries out for restoration.' }
    ],

    keyThemes: [
      {
        theme: 'Grief and Lament',
        description: 'Lamentations models honest grief that brings overwhelming pain to God without minimizing it.',
        keyPassages: ['Lamentations 1:1-5', 'Lamentations 2:11-12', 'Lamentations 3:1-20']
      },
      {
        theme: 'Divine Justice',
        description: 'Jerusalem\'s destruction was not arbitrary but God\'s just response to persistent sin.',
        keyPassages: ['Lamentations 1:18', 'Lamentations 2:17', 'Lamentations 4:6']
      },
      {
        theme: 'Hope in God\'s Faithfulness',
        description: 'Even in judgment, God\'s steadfast love and mercies endure, providing grounds for hope.',
        keyPassages: ['Lamentations 3:21-26', 'Lamentations 3:31-33', 'Lamentations 3:55-58']
      },
      {
        theme: 'Sin\'s Consequences',
        description: 'The destruction illustrates the devastating consequences of persistent rebellion against God.',
        keyPassages: ['Lamentations 1:8-9', 'Lamentations 4:13', 'Lamentations 5:16']
      }
    ],

    christConnection: [
      {
        type: 'type',
        description: 'The suffering of Jerusalem prefigures Christ\'s own anguish and weeping over the city.',
        passages: ['Lamentations 1:12', 'Luke 19:41-44', 'Matthew 27:46']
      },
      {
        type: 'theme',
        description: 'Christ bore the wrath of God that the city experienced, becoming a curse for us.',
        passages: ['Lamentations 2:1-5', 'Galatians 3:13', '2 Corinthians 5:21']
      },
      {
        type: 'theme',
        description: 'The hope in God\'s steadfast love finds ultimate expression in Christ\'s redemptive work.',
        passages: ['Lamentations 3:22-23', 'Romans 8:38-39']
      }
    ],

    keyVerses: [
      {
        reference: 'Lamentations 3:22-23',
        text: 'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
        significance: 'The book\'s central affirmation—hope amid devastation.'
      },
      {
        reference: 'Lamentations 1:12',
        text: 'Is it nothing to you, all you who pass by? Look and see if there is any sorrow like my sorrow, which was brought upon me, which the LORD inflicted on the day of his fierce anger.',
        significance: 'The city\'s cry invites others to witness unique suffering.'
      },
      {
        reference: 'Lamentations 3:39-40',
        text: 'Why should a living man complain, a man, about the punishment of his sins? Let us test and examine our ways, and return to the LORD!',
        significance: 'Suffering leads to self-examination and repentance.'
      }
    ],

    keyCharacters: [
      { name: 'Daughter Zion', role: 'Personification of Jerusalem as a grieving woman' },
      { name: 'The Poet', role: 'Voice of the community expressing grief' },
      { name: 'The Strong Man', role: 'Individual sufferer in chapter 3 who finds hope' }
    ],

    practicalApplications: [
      'Bring honest grief to God without pretending faith requires suppressing pain.',
      'Acknowledge God\'s justice even when experiencing His discipline.',
      'Find hope in God\'s faithfulness and steadfast love amid suffering.',
      'Allow suffering to prompt self-examination and renewed commitment to God.',
      'Pray through lament—the Psalms and Lamentations show the way.'
    ],

    studyQuestions: [
      'How does Lamentations model honest lament before God?',
      'Why does the poet affirm God\'s justice while expressing grief?',
      'How does chapter 3 function as the book\'s turning point?',
      'What role do the acrostic structures play in the book?',
      'How does Lamentations 1:12 connect to Christ\'s suffering?'
    ]
  },
  {
    id: 'ezekiel',
    name: 'Ezekiel',
    abbreviation: 'Ezek',
    testament: 'old',
    canonicalGroup: 'major_prophets',
    order: 26,
    author: 'Ezekiel son of Buzi',
    authorNotes: 'Ezekiel was a priest exiled to Babylon in 597 BC who received his prophetic call there five years later.',
    dateWritten: 'c. 593-571 BC',
    originalAudience: 'Jewish exiles in Babylon before and after Jerusalem\'s final destruction',
    literaryGenre: ['prophecy', 'apocalyptic', 'vision', 'symbolic action'],
    difficulty: 'hard',

    overview: `Ezekiel is one of the most visually dramatic books in the Bible, filled with bizarre symbolic actions, elaborate visions, and vivid allegories. The prophet Ezekiel was a priest exiled to Babylon in 597 BC, called to prophesy among the exiles both before and after Jerusalem's final destruction in 586 BC. His message centers on the glory of God—its departure from a defiled temple and its future return to a restored people.

The book opens with Ezekiel's overwhelming vision of God's glory-throne, establishing God's sovereignty even in exile. The prophet then performs strange symbolic actions and delivers oracles announcing judgment on Jerusalem and the nations. After Jerusalem falls, his message shifts to hope: the valley of dry bones coming to life, the new temple vision, and promises of restoration under a Davidic shepherd.

Ezekiel's emphasis on individual responsibility (chapter 18) and heart transformation (chapter 36) deeply influenced later Judaism and the New Testament. His temple vision (chapters 40-48) has been interpreted variously but certainly points to God's ultimate dwelling with His people. Throughout, the refrain "they shall know that I am the LORD" drives the book's concern for God's glory.`,

    purpose: `Ezekiel was called to declare God's judgment on Judah and Jerusalem for their idolatry, to comfort exiles with promises of restoration, and to proclaim that through judgment and salvation all would know that He is the LORD.`,

    outline: [
      { section: 'Ezekiel\'s Call and Visions', chapters: '1-3', summary: 'Vision of God\'s glory; commission as watchman.' },
      { section: 'Judgment on Jerusalem', chapters: '4-24', summary: 'Symbolic actions and oracles of doom.' },
      { section: 'Oracles Against Nations', chapters: '25-32', summary: 'Judgment on surrounding nations.' },
      { section: 'Restoration Promises', chapters: '33-39', summary: 'New heart; dry bones; Gog and Magog.' },
      { section: 'New Temple Vision', chapters: '40-48', summary: 'Vision of the restored temple and land.' }
    ],

    keyThemes: [
      {
        theme: 'The Glory of God',
        description: 'God\'s glory departing from the defiled temple and returning to a purified people is the book\'s central drama.',
        keyPassages: ['Ezekiel 1:28', 'Ezekiel 10:18-19', 'Ezekiel 43:1-5']
      },
      {
        theme: 'Individual Responsibility',
        description: 'Each person is responsible for their own sin; the righteous will live and the wicked will die.',
        keyPassages: ['Ezekiel 18:1-4', 'Ezekiel 18:30-32', 'Ezekiel 33:10-20']
      },
      {
        theme: 'New Heart and Spirit',
        description: 'God promises to give His people a new heart and put His Spirit within them.',
        keyPassages: ['Ezekiel 11:19-20', 'Ezekiel 36:25-27', 'Ezekiel 37:14']
      },
      {
        theme: 'The Good Shepherd',
        description: 'God Himself will shepherd His people, and His servant David will be their prince.',
        keyPassages: ['Ezekiel 34:11-16', 'Ezekiel 34:23-24', 'Ezekiel 37:24-25']
      }
    ],

    christConnection: [
      {
        type: 'prophecy',
        description: 'The Good Shepherd prophecy points directly to Christ, the true shepherd of God\'s people.',
        passages: ['Ezekiel 34:11-16', 'Ezekiel 34:23', 'John 10:11-16']
      },
      {
        type: 'theme',
        description: 'The new heart and Spirit promised are given through Christ in the new covenant.',
        passages: ['Ezekiel 36:25-27', 'John 3:5-8', 'Titus 3:5']
      },
      {
        type: 'type',
        description: 'The river flowing from the temple prefigures the life-giving Spirit flowing from Christ.',
        passages: ['Ezekiel 47:1-12', 'John 7:37-39', 'Revelation 22:1-2']
      }
    ],

    keyVerses: [
      {
        reference: 'Ezekiel 36:26-27',
        text: 'And I will give you a new heart, and a new spirit I will put within you. And I will remove the heart of stone from your flesh and give you a heart of flesh. And I will put my Spirit within you, and cause you to walk in my statutes.',
        significance: 'The promise of internal transformation through God\'s Spirit.'
      },
      {
        reference: 'Ezekiel 37:4-5',
        text: 'Prophesy over these bones, and say to them, O dry bones, hear the word of the LORD... I will cause breath to enter you, and you shall live.',
        significance: 'The vision of national and spiritual resurrection.'
      },
      {
        reference: 'Ezekiel 34:15-16',
        text: 'I myself will be the shepherd of my sheep, and I myself will make them lie down... I will seek the lost, and I will bring back the strayed.',
        significance: 'God as the Good Shepherd—fulfilled in Christ.'
      }
    ],

    keyCharacters: [
      { name: 'Ezekiel', role: 'Priest-prophet among the Babylonian exiles' },
      { name: 'The Glory of the LORD', role: 'Central presence that departs and returns' },
      { name: 'The Watchman', role: 'Ezekiel\'s role in warning the people' }
    ],

    keyEvents: [
      { event: 'Throne vision', reference: 'Ezekiel 1', significance: 'God\'s glory revealed even in exile.' },
      { event: 'Glory departs temple', reference: 'Ezekiel 10-11', significance: 'God abandons the defiled sanctuary.' },
      { event: 'Valley of dry bones', reference: 'Ezekiel 37', significance: 'Vision of national resurrection.' },
      { event: 'New temple vision', reference: 'Ezekiel 40-48', significance: 'Future restoration and God\'s dwelling.' }
    ],

    practicalApplications: [
      'Recognize that God is not limited by circumstances—His glory transcends exile.',
      'Take personal responsibility for sin rather than blaming others or circumstances.',
      'Pray for the new heart and Spirit that only God can give.',
      'Trust Christ as the Good Shepherd who seeks and saves the lost.',
      'Long for God\'s presence as life\'s greatest blessing.'
    ],

    studyQuestions: [
      'What is the significance of God\'s glory departing from and returning to the temple?',
      'How does Ezekiel 18 address the issue of individual responsibility?',
      'What does the dry bones vision (chapter 37) promise?',
      'How do Ezekiel\'s new heart/Spirit promises connect to the new covenant?',
      'What are the major interpretive approaches to Ezekiel\'s temple vision?'
    ]
  },
  {
    id: 'daniel',
    name: 'Daniel',
    abbreviation: 'Dan',
    testament: 'old',
    canonicalGroup: 'major_prophets',
    order: 27,
    author: 'Daniel',
    authorNotes: 'Daniel was a Jewish exile who served in Babylonian and Persian royal courts from Nebuchadnezzar through Cyrus.',
    dateWritten: 'c. 536 BC (after the Persian conquest)',
    originalAudience: 'Jewish exiles and later generations facing foreign domination',
    literaryGenre: ['narrative', 'apocalyptic', 'vision', 'prophecy'],
    difficulty: 'hard',

    overview: `Daniel is a book of two halves: narrative accounts of faithfulness in exile (chapters 1-6) and apocalyptic visions of future kingdoms (chapters 7-12). Daniel and his friends were exiled to Babylon as young men and rose to prominence in the royal court while maintaining their devotion to God. Their stories of courage amid pressure to compromise have inspired believers facing persecution throughout history.

The narrative sections showcase God's sovereignty over pagan kings and His protection of the faithful. Daniel interprets dreams, survives the lions' den, and his friends emerge unharmed from the fiery furnace. These stories demonstrate that the God of Israel rules over all nations and delivers those who trust Him.

The apocalyptic visions reveal God's plan for history. The succession of four kingdoms (Babylon, Persia, Greece, Rome) gives way to God's eternal kingdom established by "one like a son of man." The visions address the question facing exiles: Is God still in control? Daniel answers with a resounding yes—history moves toward God's predetermined end when His kingdom will triumph over all earthly powers.`,

    purpose: `Daniel was written to encourage faithfulness to God amid pagan pressure, to demonstrate God's sovereignty over nations and history, and to reveal God's plan to establish His eternal kingdom through the Son of Man.`,

    outline: [
      { section: 'Training in Babylon', chapters: '1', summary: 'Daniel and friends maintain purity in exile.' },
      { section: 'Nebuchadnezzar\'s Dreams', chapters: '2-4', summary: 'Dream interpretations; fiery furnace.' },
      { section: 'Belshazzar and Darius', chapters: '5-6', summary: 'Writing on the wall; lions\' den.' },
      { section: 'Vision of Four Beasts', chapters: '7', summary: 'Four kingdoms and the Son of Man.' },
      { section: 'Ram and Goat', chapters: '8', summary: 'Vision of Persia and Greece.' },
      { section: 'Seventy Weeks', chapters: '9', summary: 'Daniel\'s prayer; prophecy of seventy weeks.' },
      { section: 'Final Vision', chapters: '10-12', summary: 'Detailed prophecy; resurrection hope.' }
    ],

    keyThemes: [
      {
        theme: 'God\'s Sovereignty Over Nations',
        description: 'The Most High rules the kingdom of men and gives it to whom He will.',
        keyPassages: ['Daniel 2:21', 'Daniel 4:17', 'Daniel 4:34-35']
      },
      {
        theme: 'Faithful Witness Amid Persecution',
        description: 'Daniel and his friends model uncompromising faithfulness to God despite threats.',
        keyPassages: ['Daniel 1:8', 'Daniel 3:16-18', 'Daniel 6:10']
      },
      {
        theme: 'The Coming Kingdom',
        description: 'God will establish an eternal kingdom that will destroy all earthly kingdoms.',
        keyPassages: ['Daniel 2:44', 'Daniel 7:13-14', 'Daniel 7:27']
      },
      {
        theme: 'Resurrection Hope',
        description: 'Daniel affirms resurrection of the dead to everlasting life or everlasting contempt.',
        keyPassages: ['Daniel 12:1-3', 'Daniel 12:13']
      }
    ],

    christConnection: [
      {
        type: 'prophecy',
        description: 'The "Son of Man" who receives everlasting dominion is Jesus\' favorite self-designation.',
        passages: ['Daniel 7:13-14', 'Matthew 26:64', 'Mark 14:62']
      },
      {
        type: 'prophecy',
        description: 'The seventy weeks prophecy points to Messiah\'s coming and atoning work.',
        passages: ['Daniel 9:24-27', 'Luke 3:1']
      },
      {
        type: 'type',
        description: 'Daniel as faithful sufferer vindicated by God prefigures Christ\'s path through death to glory.',
        passages: ['Daniel 6:22-23', 'Hebrews 12:2']
      }
    ],

    keyVerses: [
      {
        reference: 'Daniel 3:17-18',
        text: 'Our God whom we serve is able to deliver us from the burning fiery furnace... But if not, be it known to you, O king, that we will not serve your gods.',
        significance: 'Faith that trusts God whether He delivers or not.'
      },
      {
        reference: 'Daniel 7:13-14',
        text: 'Behold, with the clouds of heaven there came one like a son of man... And to him was given dominion and glory and a kingdom... His dominion is an everlasting dominion.',
        significance: 'The Son of Man receives eternal authority—fulfilled in Christ.'
      },
      {
        reference: 'Daniel 2:44',
        text: 'And in the days of those kings the God of heaven will set up a kingdom that shall never be destroyed.',
        significance: 'God\'s kingdom will outlast all earthly empires.'
      },
      {
        reference: 'Daniel 12:2-3',
        text: 'And many of those who sleep in the dust of the earth shall awake, some to everlasting life, and some to shame and everlasting contempt.',
        significance: 'Clear Old Testament affirmation of bodily resurrection.'
      }
    ],

    keyCharacters: [
      { name: 'Daniel', role: 'Faithful exile; interpreter of dreams and visions' },
      { name: 'Shadrach, Meshach, Abednego', role: 'Daniel\'s friends who survived the fiery furnace' },
      { name: 'Nebuchadnezzar', role: 'Babylon\'s greatest king, humbled by God' },
      { name: 'Belshazzar', role: 'Last Babylonian king; saw the writing on the wall' },
      { name: 'Darius the Mede', role: 'Ruler who cast Daniel into the lions\' den' }
    ],

    keyEvents: [
      { event: 'Fiery furnace', reference: 'Daniel 3', significance: 'God delivers the faithful from fire.' },
      { event: 'Nebuchadnezzar\'s humiliation', reference: 'Daniel 4', significance: 'God humbles the proud king.' },
      { event: 'Handwriting on the wall', reference: 'Daniel 5', significance: 'Babylon judged; kingdom given to Medes and Persians.' },
      { event: 'Lions\' den', reference: 'Daniel 6', significance: 'God delivers Daniel; his accusers destroyed.' }
    ],

    practicalApplications: [
      'Stand firm in faith even when culture pressures compromise.',
      'Trust God\'s sovereignty over governments and history.',
      'Pray faithfully even when it\'s forbidden or unpopular.',
      'Live with confidence that God\'s kingdom will triumph.',
      'Face death with hope in resurrection to everlasting life.'
    ],

    studyQuestions: [
      'How do the stories of chapters 1-6 prepare for the visions of 7-12?',
      'What does "son of man" mean in Daniel 7, and how did Jesus use it?',
      'What is the significance of the four kingdoms in Daniel\'s visions?',
      'How does Daniel 9:24-27 relate to Christ\'s coming?',
      'How should Daniel\'s example shape our response to cultural pressure?'
    ]
  },

  // ========================================
  // MINOR PROPHETS (The Twelve)
  // ========================================
  {
    id: 'hosea',
    name: 'Hosea',
    abbreviation: 'Hos',
    testament: 'old',
    canonicalGroup: 'minor_prophets',
    order: 28,
    author: 'Hosea son of Beeri',
    authorNotes: 'Hosea prophesied to the northern kingdom of Israel during its final decades before Assyrian conquest.',
    dateWritten: 'c. 750-715 BC',
    originalAudience: 'The northern kingdom of Israel',
    literaryGenre: ['prophecy', 'poetry', 'narrative'],
    difficulty: 'medium',

    overview: `Hosea is a book of heartbreak and hope, portraying God's love for His unfaithful people through the prophet's own painful marriage. God commands Hosea to marry Gomer, a woman who will prove unfaithful, and this marriage becomes a living parable of Israel's spiritual adultery through idolatry. Despite Gomer's betrayals, Hosea redeems her from slavery—just as God will redeem Israel.

The book's first three chapters narrate Hosea's marriage, while chapters 4-14 contain oracles of judgment and restoration. Israel under Jeroboam II enjoyed prosperity but was spiritually corrupt, worshiping Baal and trusting foreign alliances. Hosea exposes this unfaithfulness as spiritual adultery deserving divorce, yet God's love will not let His people go.

The tension between deserved judgment and undeserved love drives the entire book. God's heart is torn: "How can I give you up, O Ephraim?" (11:8). The book ends with a call to return to the LORD and promises of healing and restoration. Hosea reveals a God whose love pursues the unfaithful and whose judgment serves His redemptive purposes.`,

    purpose: `Hosea was written to expose Israel's spiritual adultery (idolatry and covenant unfaithfulness), to announce coming judgment through Assyria, and to reveal God's unrelenting love that will ultimately restore His people.`,

    outline: [
      { section: 'Hosea\'s Marriage', chapters: '1-3', summary: 'Marriage to Gomer as parable of Israel\'s unfaithfulness.' },
      { section: 'Israel\'s Unfaithfulness', chapters: '4-7', summary: 'Charges against the nation for covenant violations.' },
      { section: 'Coming Judgment', chapters: '8-10', summary: 'Consequences of rebellion; exile anticipated.' },
      { section: 'God\'s Persistent Love', chapters: '11-14', summary: 'Divine compassion; call to return; promises of restoration.' }
    ],

    keyThemes: [
      {
        theme: 'Covenant Love (Hesed)',
        description: 'God\'s steadfast, covenant love pursues unfaithful Israel despite deserved judgment.',
        keyPassages: ['Hosea 2:19-20', 'Hosea 6:6', 'Hosea 11:8-9']
      },
      {
        theme: 'Spiritual Adultery',
        description: 'Israel\'s idolatry is portrayed as marital unfaithfulness to their covenant God.',
        keyPassages: ['Hosea 1:2', 'Hosea 2:2-5', 'Hosea 4:12-14']
      },
      {
        theme: 'Judgment and Restoration',
        description: 'God disciplines His people through exile but will ultimately heal and restore them.',
        keyPassages: ['Hosea 5:14-15', 'Hosea 6:1-3', 'Hosea 14:4-7']
      },
      {
        theme: 'Knowledge of God',
        description: 'Israel\'s fundamental problem is lack of true knowledge of God.',
        keyPassages: ['Hosea 4:1', 'Hosea 4:6', 'Hosea 6:3']
      }
    ],

    christConnection: [
      {
        type: 'type',
        description: 'Hosea redeeming Gomer from slavery prefigures Christ redeeming His church from sin.',
        passages: ['Hosea 3:1-5', 'Ephesians 5:25-27']
      },
      {
        type: 'prophecy',
        description: 'God\'s call of His Son out of Egypt is fulfilled in Christ.',
        passages: ['Hosea 11:1', 'Matthew 2:15']
      },
      {
        type: 'theme',
        description: 'God desires mercy (hesed) not sacrifice—the heart Jesus emphasized.',
        passages: ['Hosea 6:6', 'Matthew 9:13', 'Matthew 12:7']
      }
    ],

    keyVerses: [
      {
        reference: 'Hosea 6:6',
        text: 'For I desire steadfast love and not sacrifice, the knowledge of God rather than burnt offerings.',
        significance: 'God values heart relationship over mere ritual—quoted by Jesus.'
      },
      {
        reference: 'Hosea 11:1',
        text: 'When Israel was a child, I loved him, and out of Egypt I called my son.',
        significance: 'God\'s fatherly love; applied to Christ\'s return from Egypt.'
      },
      {
        reference: 'Hosea 14:4',
        text: 'I will heal their apostasy; I will love them freely, for my anger has turned from them.',
        significance: 'God\'s free, healing love for the repentant.'
      }
    ],

    keyCharacters: [
      { name: 'Hosea', role: 'Prophet whose marriage became a living parable' },
      { name: 'Gomer', role: 'Unfaithful wife representing Israel' },
      { name: 'Jezreel, Lo-Ruhamah, Lo-Ammi', role: 'Children with symbolic names of judgment' }
    ],

    practicalApplications: [
      'Recognize spiritual unfaithfulness in loving anything more than God.',
      'Trust God\'s pursuing love even when you\'ve wandered far.',
      'Value heart knowledge of God over mere religious activity.',
      'Allow God\'s discipline to lead you back to Him.',
      'Let Hosea\'s story encourage hope for broken relationships.'
    ],

    studyQuestions: [
      'How does Hosea\'s marriage illustrate God\'s relationship with Israel?',
      'What does it mean that God desires "steadfast love, not sacrifice"?',
      'How is Hosea 11:1 fulfilled in Christ according to Matthew 2:15?',
      'Why does God not give up on unfaithful Israel?',
      'How does the book balance judgment and hope?'
    ]
  },
  {
    id: 'joel',
    name: 'Joel',
    abbreviation: 'Joel',
    testament: 'old',
    canonicalGroup: 'minor_prophets',
    order: 29,
    author: 'Joel son of Pethuel',
    authorNotes: 'Little is known about Joel; his date is debated, possibly early (9th century) or late (post-exilic).',
    dateWritten: 'Uncertain (possibly 835-800 BC or 515-500 BC)',
    originalAudience: 'The people of Judah',
    literaryGenre: ['prophecy', 'apocalyptic', 'lament'],
    difficulty: 'medium',

    overview: `Joel takes a devastating locust plague as a launching point for proclaiming the Day of the LORD—God's future intervention in judgment and salvation. The book opens with a call to lament over the unprecedented destruction caused by locusts, which Joel interprets as a warning of greater judgment to come.

The heart of the book is the Day of the LORD, a time when God will judge all nations and vindicate His people. Joel calls for genuine repentance, promising that God is "gracious and merciful, slow to anger and abounding in steadfast love." After repentance, God promises to restore what the locusts have eaten and to pour out His Spirit on all flesh.

The promise of the Spirit's outpouring (chapter 2) was dramatically fulfilled at Pentecost, when Peter declared, "This is what was uttered through the prophet Joel." The book moves from agricultural disaster to cosmic transformation, from locust invasion to divine outpouring, making Joel a crucial text for understanding the Spirit's work in the new covenant era.`,

    purpose: `Joel used a locust plague to call Judah to repentance, to announce the coming Day of the LORD, and to promise restoration and the outpouring of God's Spirit on all flesh.`,

    outline: [
      { section: 'The Locust Plague', chapters: '1:1-2:17', summary: 'Lament over devastation; call to repentance.' },
      { section: 'The LORD\'s Response', chapters: '2:18-27', summary: 'Promise of restoration and agricultural blessing.' },
      { section: 'The Spirit\'s Outpouring', chapters: '2:28-32', summary: 'Prophecy fulfilled at Pentecost.' },
      { section: 'Judgment on Nations', chapters: '3', summary: 'The Day of the LORD; Jerusalem exalted.' }
    ],

    keyThemes: [
      {
        theme: 'The Day of the LORD',
        description: 'God\'s decisive intervention to judge evil and establish His kingdom.',
        keyPassages: ['Joel 1:15', 'Joel 2:1-2', 'Joel 2:31', 'Joel 3:14']
      },
      {
        theme: 'Repentance and Restoration',
        description: 'God calls for whole-hearted repentance and promises complete restoration.',
        keyPassages: ['Joel 2:12-13', 'Joel 2:25-27']
      },
      {
        theme: 'The Spirit\'s Outpouring',
        description: 'God will pour out His Spirit on all flesh—young, old, male, female.',
        keyPassages: ['Joel 2:28-29', 'Acts 2:16-21']
      }
    ],

    christConnection: [
      {
        type: 'prophecy',
        description: 'The outpouring of the Spirit was fulfilled at Pentecost through Christ.',
        passages: ['Joel 2:28-32', 'Acts 2:1-21', 'Acts 2:33']
      },
      {
        type: 'theme',
        description: 'Calling on the name of the LORD for salvation finds fulfillment in calling on Jesus.',
        passages: ['Joel 2:32', 'Romans 10:13', 'Acts 2:21']
      }
    ],

    keyVerses: [
      {
        reference: 'Joel 2:28-29',
        text: 'And it shall come to pass afterward, that I will pour out my Spirit on all flesh; your sons and your daughters shall prophesy, your old men shall dream dreams, and your young men shall see visions.',
        significance: 'The foundational prophecy of Pentecost.'
      },
      {
        reference: 'Joel 2:12-13',
        text: 'Return to me with all your heart, with fasting, with weeping, and with mourning; and rend your hearts and not your garments.',
        significance: 'God desires genuine repentance, not outward show.'
      },
      {
        reference: 'Joel 2:32',
        text: 'And it shall come to pass that everyone who calls on the name of the LORD shall be saved.',
        significance: 'Universal offer of salvation—quoted in Romans 10:13.'
      }
    ],

    keyCharacters: [
      { name: 'Joel', role: 'Prophet who interpreted the locust plague as divine warning' }
    ],

    practicalApplications: [
      'See natural disasters as calls to examine your heart before God.',
      'Practice genuine repentance—heart change, not just outward ritual.',
      'Rejoice that God\'s Spirit is poured out on all believers.',
      'Call on the name of the Lord for salvation.',
      'Live in light of the coming Day of the LORD.'
    ],

    studyQuestions: [
      'How did Joel use the locust plague as a teaching moment?',
      'What is the Day of the LORD and when does it occur?',
      'How was Joel 2:28-32 fulfilled at Pentecost?',
      'What does it mean to "rend your hearts and not your garments"?',
      'How does Joel connect natural disaster to spiritual reality?'
    ]
  },
  {
    id: 'amos',
    name: 'Amos',
    abbreviation: 'Amos',
    testament: 'old',
    canonicalGroup: 'minor_prophets',
    order: 30,
    author: 'Amos',
    authorNotes: 'Amos was a shepherd and fig farmer from Tekoa in Judah, called to prophesy to the northern kingdom of Israel.',
    dateWritten: 'c. 760-750 BC',
    originalAudience: 'The northern kingdom of Israel during Jeroboam II\'s prosperous reign',
    literaryGenre: ['prophecy', 'poetry', 'oracle'],
    difficulty: 'medium',

    overview: `Amos is the prophet of social justice, thundering against Israel's exploitation of the poor during a time of unprecedented prosperity. Though a shepherd from the south, God sent Amos to the northern kingdom where economic success masked spiritual bankruptcy. The wealthy lived in luxury while grinding the poor into the dust.

The book begins with oracles against surrounding nations, each announced with "For three transgressions... and for four." This rhetorical pattern draws Israel in, expecting to hear judgment on their enemies—only to be blindsided when Amos turns the same pattern against Israel itself. Their crimes of injustice and empty religion are worse because they should know better.

Amos's message is blunt: Israel's religion is a stench to God (5:21-24). Religious festivals, sacrifices, and songs mean nothing when accompanied by oppression of the poor. "Let justice roll down like waters, and righteousness like an ever-flowing stream." The book ends with a vision of restoration, but only after severe judgment sweeps away the complacent.`,

    purpose: `Amos was sent to announce God's judgment on Israel for social injustice and religious hypocrisy, to expose the false security of those who oppressed the poor, and to call for genuine righteousness that would please God.`,

    outline: [
      { section: 'Oracles Against Nations', chapters: '1-2', summary: 'Judgment on neighbors, then Israel.' },
      { section: 'Oracles Against Israel', chapters: '3-6', summary: 'Israel\'s guilt; judgment announced.' },
      { section: 'Five Visions', chapters: '7:1-9:10', summary: 'Locusts, fire, plumb line, summer fruit, altar.' },
      { section: 'Restoration Promise', chapters: '9:11-15', summary: 'David\'s booth raised; future blessing.' }
    ],

    keyThemes: [
      {
        theme: 'Social Justice',
        description: 'God demands justice for the poor; oppression of the vulnerable provokes His wrath.',
        keyPassages: ['Amos 2:6-8', 'Amos 5:11-15', 'Amos 8:4-6']
      },
      {
        theme: 'True Worship',
        description: 'Religious ritual without righteousness is detestable to God.',
        keyPassages: ['Amos 4:4-5', 'Amos 5:21-24']
      },
      {
        theme: 'The Day of the LORD',
        description: 'Israel wrongly anticipated the Day as blessing; Amos reveals it as judgment.',
        keyPassages: ['Amos 5:18-20', 'Amos 8:9-10']
      },
      {
        theme: 'Privilege and Responsibility',
        description: 'Israel\'s special relationship with God brings greater accountability.',
        keyPassages: ['Amos 3:1-2', 'Amos 9:7-8']
      }
    ],

    christConnection: [
      {
        type: 'prophecy',
        description: 'The restoration of David\'s booth is applied to Gentile inclusion in Acts 15.',
        passages: ['Amos 9:11-12', 'Acts 15:15-17']
      },
      {
        type: 'theme',
        description: 'Christ embodies the justice Amos demanded and brings true restoration.',
        passages: ['Amos 5:24', 'Matthew 12:18-21']
      }
    ],

    keyVerses: [
      {
        reference: 'Amos 5:24',
        text: 'But let justice roll down like waters, and righteousness like an ever-flowing stream.',
        significance: 'The book\'s most famous verse—God\'s demand for social righteousness.'
      },
      {
        reference: 'Amos 3:2',
        text: 'You only have I known of all the families of the earth; therefore I will punish you for all your iniquities.',
        significance: 'Privilege brings responsibility; election doesn\'t exempt from judgment.'
      },
      {
        reference: 'Amos 5:21-23',
        text: 'I hate, I despise your feasts, and I take no delight in your solemn assemblies... Take away from me the noise of your songs.',
        significance: 'God rejects worship unaccompanied by justice.'
      }
    ],

    keyCharacters: [
      { name: 'Amos', role: 'Shepherd and farmer called as prophet to Israel' },
      { name: 'Amaziah', role: 'Priest of Bethel who opposed Amos' },
      { name: 'Jeroboam II', role: 'King of Israel during prosperous but corrupt times' }
    ],

    practicalApplications: [
      'Examine whether your lifestyle oppresses or helps the vulnerable.',
      'Recognize that worship without justice is worthless to God.',
      'Remember that privilege brings greater accountability.',
      'Let justice characterize your life, not just occasional charity.',
      'Avoid false security based on religious activity without righteousness.'
    ],

    studyQuestions: [
      'Why does Amos begin with oracles against foreign nations?',
      'What was wrong with Israel\'s worship practices?',
      'How does Amos 5:24 define what God truly wants?',
      'Why was the Day of the LORD "darkness and not light" for Israel?',
      'How is Amos 9:11-12 used in Acts 15?'
    ]
  },
  {
    id: 'obadiah',
    name: 'Obadiah',
    abbreviation: 'Obad',
    testament: 'old',
    canonicalGroup: 'minor_prophets',
    order: 31,
    author: 'Obadiah',
    authorNotes: 'Nothing is known about Obadiah beyond his name, which means "servant of the LORD."',
    dateWritten: 'c. 586-550 BC (after Jerusalem\'s fall)',
    originalAudience: 'Judean survivors after Babylonian destruction',
    literaryGenre: ['prophecy', 'oracle against nations'],
    difficulty: 'easy',

    overview: `Obadiah is the shortest book in the Old Testament—a single chapter pronouncing judgment on Edom for their hostility toward Israel. When Babylon destroyed Jerusalem in 586 BC, the Edomites (descendants of Esau) gloated, looted, and even captured fleeing Israelites. This betrayal by "brother" Esau's descendants was especially grievous.

The book announces that Edom's pride will be their downfall. They trusted in their mountainous strongholds (including the famous city of Petra), but God will bring them low. The violence done to Jacob's descendants will return on their own heads. While Edom faces permanent destruction, Israel will experience restoration and possess the land.

Obadiah's message of divine justice offered comfort to traumatized Judean survivors. God sees when brothers betray brothers. The larger theme of Jacob and Esau, running throughout Scripture, points to God's sovereign election and the ultimate triumph of His purposes through His chosen people.`,

    purpose: `Obadiah announced God's judgment on Edom for violence against Israel during Jerusalem's fall and promised future restoration for God's people.`,

    outline: [
      { section: 'Edom\'s Pride and Fall', chapters: '1-9', summary: 'Edom\'s arrogance will be brought low.' },
      { section: 'Edom\'s Violence Against Jacob', chapters: '10-14', summary: 'Charges for betraying brotherly ties.' },
      { section: 'The Day of the LORD', chapters: '15-21', summary: 'Judgment on nations; Israel\'s restoration.' }
    ],

    keyThemes: [
      {
        theme: 'Pride Before the Fall',
        description: 'Edom\'s pride in their secure position led to their destruction.',
        keyPassages: ['Obadiah 3-4']
      },
      {
        theme: 'Divine Justice',
        description: 'What nations do to Israel will be done to them.',
        keyPassages: ['Obadiah 15']
      },
      {
        theme: 'Brotherly Betrayal',
        description: 'Edom\'s violence against brother Jacob was especially heinous.',
        keyPassages: ['Obadiah 10-14']
      }
    ],

    christConnection: [
      {
        type: 'theme',
        description: 'The judgment on Edom prefigures Christ\'s victory over all who oppose God\'s people.',
        passages: ['Obadiah 21', 'Revelation 11:15']
      },
      {
        type: 'theme',
        description: 'The kingdom belongs to the LORD—fulfilled in Christ\'s reign.',
        passages: ['Obadiah 21', 'Matthew 28:18']
      }
    ],

    keyVerses: [
      {
        reference: 'Obadiah 3-4',
        text: 'The pride of your heart has deceived you, you who live in the clefts of the rock, in your lofty dwelling, who say in your heart, "Who will bring me down to the ground?"... I will bring you down.',
        significance: 'Pride goes before destruction—even seemingly secure positions fall.'
      },
      {
        reference: 'Obadiah 15',
        text: 'For the day of the LORD is near upon all the nations. As you have done, it shall be done to you; your deeds shall return on your own head.',
        significance: 'Principle of divine retribution: nations reap what they sow.'
      }
    ],

    keyCharacters: [
      { name: 'Obadiah', role: 'Prophet announcing judgment on Edom' },
      { name: 'Edom', role: 'Nation descended from Esau, condemned for pride and betrayal' }
    ],

    practicalApplications: [
      'Recognize that pride deceives and leads to destruction.',
      'Never gloat over the misfortune of others, even enemies.',
      'Trust that God sees injustice and will right all wrongs.',
      'Remember that privilege (like brotherly relationship) brings responsibility.',
      'Live in light of the coming Day of the LORD.'
    ],

    studyQuestions: [
      'What was the relationship between Edom and Israel?',
      'Why was Edom\'s sin especially grievous?',
      'How does Obadiah illustrate the principle of divine retribution?',
      'What comfort would this book offer to Judean survivors?',
      'How does the Esau-Jacob story run through Scripture?'
    ]
  },
  {
    id: 'jonah',
    name: 'Jonah',
    abbreviation: 'Jonah',
    testament: 'old',
    canonicalGroup: 'minor_prophets',
    order: 32,
    author: 'Unknown (tells Jonah\'s story)',
    authorNotes: 'The book is about Jonah son of Amittai, a prophet mentioned in 2 Kings 14:25 during Jeroboam II\'s reign.',
    dateWritten: 'c. 780-750 BC',
    originalAudience: 'Israel, particularly those with exclusive views of God\'s mercy',
    literaryGenre: ['narrative', 'prophecy', 'satire'],
    difficulty: 'easy',

    overview: `Jonah is the most unusual prophetic book because it's about the prophet rather than his message. God calls Jonah to preach against Nineveh, the capital of brutal Assyria—Israel's feared enemy. Instead of obeying, Jonah flees in the opposite direction, only to learn that God's reach extends everywhere.

After being swallowed and spat out by a great fish, Jonah reluctantly preaches in Nineveh. To his dismay, the city repents, and God relents from judgment. The book's climax isn't the city's repentance but Jonah's anger that God showed mercy to Israel's enemies. He'd rather die than see Ninevites saved.

The book ends with God's question about compassion: Jonah cared about a plant but not about 120,000 people who couldn't distinguish their right hand from their left. Jonah exposes the danger of religious nationalism—assuming God loves "us" but hates "them." Jesus pointed to Nineveh's repentance as a rebuke to unrepentant Israel.`,

    purpose: `Jonah reveals God's mercy for all nations, challenges Israel's nationalistic exclusivism, and demonstrates that God's compassion extends even to Israel's enemies.`,

    outline: [
      { section: 'Jonah Flees', chapters: '1', summary: 'Running from God; thrown overboard.' },
      { section: 'Jonah Prays', chapters: '2', summary: 'Prayer from the fish; deliverance.' },
      { section: 'Nineveh Repents', chapters: '3', summary: 'Jonah preaches; the city turns.' },
      { section: 'Jonah Protests', chapters: '4', summary: 'Anger at God\'s mercy; the plant lesson.' }
    ],

    keyThemes: [
      {
        theme: 'God\'s Universal Mercy',
        description: 'God\'s compassion extends beyond Israel to all peoples, even enemies.',
        keyPassages: ['Jonah 4:2', 'Jonah 4:10-11']
      },
      {
        theme: 'Human vs. Divine Perspective',
        description: 'Jonah valued his comfort over thousands of lives; God valued the people.',
        keyPassages: ['Jonah 4:1-3', 'Jonah 4:9-11']
      },
      {
        theme: 'Repentance',
        description: 'True repentance—even from pagans—moves God to compassion.',
        keyPassages: ['Jonah 3:5-10', 'Jonah 4:2']
      },
      {
        theme: 'Futility of Running from God',
        description: 'God\'s purposes cannot be thwarted by human disobedience.',
        keyPassages: ['Jonah 1:3-4', 'Jonah 1:17', 'Jonah 2:1-10']
      }
    ],

    christConnection: [
      {
        type: 'type',
        description: 'Jonah\'s three days in the fish prefigures Christ\'s three days in the tomb.',
        passages: ['Jonah 1:17', 'Matthew 12:39-40']
      },
      {
        type: 'theme',
        description: 'Jesus is greater than Jonah—He willingly died for the nations Jonah despised.',
        passages: ['Jonah 4:1-3', 'Matthew 12:41', 'Romans 5:8']
      }
    ],

    keyVerses: [
      {
        reference: 'Jonah 4:2',
        text: 'I knew that you are a gracious God and merciful, slow to anger and abounding in steadfast love, and relenting from disaster.',
        significance: 'Jonah\'s "complaint" is actually a confession of God\'s character.'
      },
      {
        reference: 'Jonah 4:11',
        text: 'And should not I pity Nineveh, that great city, in which there are more than 120,000 persons who do not know their right hand from their left?',
        significance: 'God\'s closing question challenges Jonah\'s (and our) lack of compassion.'
      },
      {
        reference: 'Jonah 2:9',
        text: 'Salvation belongs to the LORD!',
        significance: 'The heart of Jonah\'s prayer and the book\'s message.'
      }
    ],

    keyCharacters: [
      { name: 'Jonah', role: 'Reluctant prophet who resented God\'s mercy' },
      { name: 'The sailors', role: 'Pagan sailors who feared the LORD' },
      { name: 'King of Nineveh', role: 'Led his city in repentance' }
    ],

    practicalApplications: [
      'Examine your heart for resentment toward those God wants to save.',
      'Recognize that God\'s mercy extends to people you might consider enemies.',
      'Stop running from God\'s clear calling on your life.',
      'Value people over personal comfort.',
      'Marvel at God\'s patience with reluctant, grumbling servants.'
    ],

    studyQuestions: [
      'Why did Jonah flee from God\'s call?',
      'How is Jonah\'s three days in the fish a sign of Christ?',
      'What does Jonah\'s anger reveal about his heart?',
      'How does this book challenge religious nationalism?',
      'What is the significance of God\'s unanswered question at the end?'
    ]
  },
  {
    id: 'micah',
    name: 'Micah',
    abbreviation: 'Mic',
    testament: 'old',
    canonicalGroup: 'minor_prophets',
    order: 33,
    author: 'Micah of Moresheth',
    authorNotes: 'Micah was a rural prophet from the village of Moresheth in Judah, contemporary with Isaiah.',
    dateWritten: 'c. 735-700 BC',
    originalAudience: 'Judah and Israel before the fall of Samaria and during Assyrian threat',
    literaryGenre: ['prophecy', 'poetry', 'lawsuit'],
    difficulty: 'medium',

    overview: `Micah is a prophet of the poor, speaking from the countryside against the corruption of the capital cities. Like his contemporary Amos, Micah denounces the exploitation of peasants by wealthy landowners and the collusion of prophets, priests, and rulers. Jerusalem and Samaria, supposedly centers of worship, have become centers of injustice.

The book alternates between judgment and hope, doom and promise. Micah announces that both Samaria and Jerusalem will fall because of their sins, yet from Bethlehem will come a ruler whose origins are from of old. This famous messianic prophecy (5:2) directed the magi to Christ's birthplace.

Micah's summary of true religion is one of the Old Testament's most memorable verses: "What does the LORD require of you but to do justice, and to love kindness, and to walk humbly with your God?" (6:8). The book ends with confidence in God's forgiveness and faithfulness to His ancient promises to Abraham.`,

    purpose: `Micah announced God's judgment on Israel and Judah for injustice and idolatry, prophesied the Messiah's birth in Bethlehem, and defined true religion as justice, kindness, and humble walk with God.`,

    outline: [
      { section: 'Judgment on Samaria and Judah', chapters: '1-2', summary: 'Indictment and doom for both capitals.' },
      { section: 'Future Restoration', chapters: '3-5', summary: 'Corrupt leaders condemned; messianic hope.' },
      { section: 'The LORD\'s Lawsuit', chapters: '6-7', summary: 'God contends with Israel; hope in mercy.' }
    ],

    keyThemes: [
      {
        theme: 'Social Justice',
        description: 'God condemns those who oppress the poor and pervert justice.',
        keyPassages: ['Micah 2:1-2', 'Micah 3:1-3', 'Micah 6:10-12']
      },
      {
        theme: 'True Religion',
        description: 'God desires justice, kindness, and humility—not mere sacrifice.',
        keyPassages: ['Micah 6:6-8']
      },
      {
        theme: 'The Coming Ruler',
        description: 'A future king from Bethlehem will shepherd God\'s people.',
        keyPassages: ['Micah 5:2-5']
      },
      {
        theme: 'God\'s Faithfulness',
        description: 'Despite judgment, God will fulfill His promises to Abraham.',
        keyPassages: ['Micah 7:18-20']
      }
    ],

    christConnection: [
      {
        type: 'prophecy',
        description: 'The ruler from Bethlehem whose origins are "from of old" is Christ.',
        passages: ['Micah 5:2', 'Matthew 2:4-6']
      },
      {
        type: 'theme',
        description: 'Christ fulfills Micah 6:8, embodying justice, kindness, and humility.',
        passages: ['Micah 6:8', 'Matthew 12:18-21', 'Philippians 2:5-8']
      }
    ],

    keyVerses: [
      {
        reference: 'Micah 5:2',
        text: 'But you, O Bethlehem Ephrathah, who are too little to be among the clans of Judah, from you shall come forth for me one who is to be ruler in Israel, whose coming forth is from of old, from ancient days.',
        significance: 'The prophecy guiding the magi to Christ\'s birthplace.'
      },
      {
        reference: 'Micah 6:8',
        text: 'He has told you, O man, what is good; and what does the LORD require of you but to do justice, and to love kindness, and to walk humbly with your God?',
        significance: 'The classic summary of what God truly desires.'
      },
      {
        reference: 'Micah 7:18-19',
        text: 'Who is a God like you, pardoning iniquity and passing over transgression for the remnant of his inheritance? He does not retain his anger forever, because he delights in steadfast love.',
        significance: 'Celebration of God\'s forgiving, merciful character.'
      }
    ],

    keyCharacters: [
      { name: 'Micah', role: 'Rural prophet championing the poor against urban corruption' }
    ],

    practicalApplications: [
      'Pursue justice in all your dealings, especially for the vulnerable.',
      'Love kindness—let mercy characterize your relationships.',
      'Walk humbly with God—recognize your dependence on Him.',
      'Trust that God will fulfill His ancient promises.',
      'Let true religion shape how you treat others, not just religious practice.'
    ],

    studyQuestions: [
      'How does Micah\'s rural background shape his message?',
      'How was Micah 5:2 fulfilled in Christ\'s birth?',
      'What does Micah 6:8 teach about true religion?',
      'Why does Micah alternate between judgment and hope?',
      'How does the book end and what does this reveal about God?'
    ]
  },
  {
    id: 'nahum',
    name: 'Nahum',
    abbreviation: 'Nah',
    testament: 'old',
    canonicalGroup: 'minor_prophets',
    order: 34,
    author: 'Nahum the Elkoshite',
    authorNotes: 'Little is known about Nahum; Elkosh\'s location is uncertain.',
    dateWritten: 'c. 663-612 BC (between Thebes\' fall and Nineveh\'s fall)',
    originalAudience: 'Judah, announcing judgment on their Assyrian oppressors',
    literaryGenre: ['prophecy', 'poetry', 'oracle against nations'],
    difficulty: 'medium',

    overview: `Nahum announces the fall of Nineveh, the capital of the Assyrian Empire that had terrorized the ancient Near East for centuries. Written about a century after Jonah, Nahum shows that Nineveh's repentance was short-lived. The city that once repented at Jonah's preaching has returned to brutality and now faces irrevocable judgment.

The book opens with a powerful poem celebrating God as both slow to anger and mighty in power. The Assyrians had destroyed the northern kingdom of Israel in 722 BC and nearly conquered Judah. Their reputation for cruelty was legendary—impaling prisoners, skinning captives alive, building pyramids of skulls. Now God announces their end.

Nahum's message was good news for Assyria's victims. The book's name means "comfort," and indeed, Judah would find comfort in knowing their oppressor would fall. Nineveh fell to the Babylonians in 612 BC, exactly as Nahum prophesied. God's patience with evil has limits; justice will prevail.`,

    purpose: `Nahum proclaimed God's judgment on Nineveh for their brutal oppression of nations, bringing comfort to Judah by announcing the end of Assyrian tyranny.`,

    outline: [
      { section: 'God\'s Character', chapters: '1:1-8', summary: 'The LORD is jealous, avenging, and powerful.' },
      { section: 'Good News for Judah', chapters: '1:9-15', summary: 'Nineveh\'s end is Judah\'s relief.' },
      { section: 'Nineveh\'s Fall Described', chapters: '2', summary: 'Vivid portrayal of the city\'s destruction.' },
      { section: 'Reasons for Judgment', chapters: '3', summary: 'Nineveh\'s sins and certain doom.' }
    ],

    keyThemes: [
      {
        theme: 'Divine Vengeance',
        description: 'God avenges the oppressed; those who brutalize others will face His wrath.',
        keyPassages: ['Nahum 1:2-3', 'Nahum 3:1-4']
      },
      {
        theme: 'The Fall of Tyrants',
        description: 'No empire is too powerful for God to bring down.',
        keyPassages: ['Nahum 2:8-13', 'Nahum 3:18-19']
      },
      {
        theme: 'Comfort for the Oppressed',
        description: 'God\'s judgment on oppressors is good news for their victims.',
        keyPassages: ['Nahum 1:15', 'Nahum 2:2']
      }
    ],

    christConnection: [
      {
        type: 'theme',
        description: 'Christ will ultimately judge all evil empires and deliver His people.',
        passages: ['Nahum 1:15', 'Revelation 18-19']
      },
      {
        type: 'theme',
        description: 'The "good news" (gospel) of peace in 1:15 anticipates the ultimate good news in Christ.',
        passages: ['Nahum 1:15', 'Romans 10:15', 'Isaiah 52:7']
      }
    ],

    keyVerses: [
      {
        reference: 'Nahum 1:2-3',
        text: 'The LORD is a jealous and avenging God; the LORD is avenging and wrathful... The LORD is slow to anger and great in power, and the LORD will by no means clear the guilty.',
        significance: 'God\'s character combines patience with justice.'
      },
      {
        reference: 'Nahum 1:7',
        text: 'The LORD is good, a stronghold in the day of trouble; he knows those who take refuge in him.',
        significance: 'God protects His own even while judging the wicked.'
      },
      {
        reference: 'Nahum 1:15',
        text: 'Behold, upon the mountains, the feet of him who brings good news, who publishes peace!',
        significance: 'Nineveh\'s fall is gospel for the oppressed.'
      }
    ],

    keyCharacters: [
      { name: 'Nahum', role: 'Prophet announcing Nineveh\'s doom' },
      { name: 'Nineveh', role: 'The brutal Assyrian capital facing judgment' }
    ],

    practicalApplications: [
      'Trust that God will ultimately judge all oppression and injustice.',
      'Find comfort that no evil empire can stand against God.',
      'Fear God\'s patience running out on persistent wickedness.',
      'Recognize that God is both refuge for the righteous and terror for the wicked.',
      'Proclaim the good news that evil will not have the last word.'
    ],

    studyQuestions: [
      'How does Nahum relate to Jonah regarding Nineveh?',
      'What was Assyria known for that made this judgment appropriate?',
      'How does Nahum 1:2-7 balance God\'s wrath and goodness?',
      'Why is Nineveh\'s fall "good news" (1:15)?',
      'What does Nahum teach about God\'s patience and justice?'
    ]
  },
  {
    id: 'habakkuk',
    name: 'Habakkuk',
    abbreviation: 'Hab',
    testament: 'old',
    canonicalGroup: 'minor_prophets',
    order: 35,
    author: 'Habakkuk',
    authorNotes: 'Nothing is known about Habakkuk except that he was a prophet during the rise of Babylon.',
    dateWritten: 'c. 609-597 BC',
    originalAudience: 'Judah facing the Babylonian threat',
    literaryGenre: ['prophecy', 'dialogue', 'prayer', 'psalm'],
    difficulty: 'medium',

    overview: `Habakkuk is unique among the prophets because instead of speaking to the people for God, he speaks to God about the people. The book is a dialogue between the prophet and God, wrestling with the problem of evil and divine justice. Habakkuk complains about injustice in Judah, and God's answer troubles him even more.

God reveals He is raising up the Babylonians as His instrument of judgment against Judah. But this answer creates a deeper problem: How can a holy God use a wicked nation to punish His people, who, though sinful, are more righteous than the Babylonians? The second chapter provides God's response: the Babylonians will also face judgment; "the righteous shall live by his faith."

The book concludes with a magnificent prayer-psalm where Habakkuk moves from complaint to trust. Even if crops fail and flocks perish, "yet I will rejoice in the LORD." This journey from doubt to doxology models faithful response to life's difficult questions. The famous phrase "the righteous shall live by faith" became foundational for Paul's theology.`,

    purpose: `Habakkuk recorded his dialogue with God about the problem of evil, receiving the answer that the righteous shall live by faith and that all wrongdoers will ultimately face judgment.`,

    outline: [
      { section: 'First Dialogue', chapters: '1:1-11', summary: 'Habakkuk complains; God announces Babylon.' },
      { section: 'Second Dialogue', chapters: '1:12-2:20', summary: 'Habakkuk objects; God promises judgment on Babylon.' },
      { section: 'Habakkuk\'s Prayer', chapters: '3', summary: 'From fear to faith; concluding doxology.' }
    ],

    keyThemes: [
      {
        theme: 'Faith Amid Mystery',
        description: 'The righteous live by trusting God even when His ways are incomprehensible.',
        keyPassages: ['Habakkuk 2:4', 'Habakkuk 3:17-19']
      },
      {
        theme: 'The Problem of Evil',
        description: 'Habakkuk wrestles honestly with why God allows evil and uses wicked instruments.',
        keyPassages: ['Habakkuk 1:2-4', 'Habakkuk 1:12-13']
      },
      {
        theme: 'Divine Sovereignty',
        description: 'God rules over all nations, using even evil empires to accomplish His purposes.',
        keyPassages: ['Habakkuk 1:5-11', 'Habakkuk 2:20']
      },
      {
        theme: 'Ultimate Justice',
        description: 'Those who oppress will themselves face judgment; evil is self-destructive.',
        keyPassages: ['Habakkuk 2:6-20']
      }
    ],

    christConnection: [
      {
        type: 'prophecy',
        description: '"The righteous shall live by faith" is foundational to Paul\'s gospel.',
        passages: ['Habakkuk 2:4', 'Romans 1:17', 'Galatians 3:11', 'Hebrews 10:38']
      },
      {
        type: 'theme',
        description: 'Christ embodies faith that trusts God through suffering unto glory.',
        passages: ['Habakkuk 3:17-19', 'Hebrews 12:2']
      }
    ],

    keyVerses: [
      {
        reference: 'Habakkuk 2:4',
        text: 'Behold, his soul is puffed up; it is not upright within him, but the righteous shall live by his faith.',
        significance: 'The motto of the Reformation; foundation of Pauline theology.'
      },
      {
        reference: 'Habakkuk 2:14',
        text: 'For the earth will be filled with the knowledge of the glory of the LORD as the waters cover the sea.',
        significance: 'God\'s ultimate purpose: worldwide knowledge of His glory.'
      },
      {
        reference: 'Habakkuk 3:17-18',
        text: 'Though the fig tree should not blossom... yet I will rejoice in the LORD; I will take joy in the God of my salvation.',
        significance: 'Faith that rejoices in God regardless of circumstances.'
      }
    ],

    keyCharacters: [
      { name: 'Habakkuk', role: 'Prophet who dialogued with God about justice' }
    ],

    practicalApplications: [
      'Bring honest questions to God—He can handle your doubts.',
      'Trust God\'s character when you can\'t understand His ways.',
      'Live by faith, not by circumstances.',
      'Wait patiently for God\'s timing in bringing justice.',
      'Learn to rejoice in God even when life is hard.'
    ],

    studyQuestions: [
      'What is unique about Habakkuk among the prophets?',
      'Why was Habakkuk troubled by God\'s answer to his first complaint?',
      'How does "the righteous shall live by faith" function in the New Testament?',
      'How does Habakkuk move from complaint to worship?',
      'What does Habakkuk 3:17-19 teach about faith?'
    ]
  },
  {
    id: 'zephaniah',
    name: 'Zephaniah',
    abbreviation: 'Zeph',
    testament: 'old',
    canonicalGroup: 'minor_prophets',
    order: 36,
    author: 'Zephaniah',
    authorNotes: 'Zephaniah traces his lineage four generations back to King Hezekiah, making him of royal blood.',
    dateWritten: 'c. 630-625 BC',
    originalAudience: 'Judah during the reign of Josiah, before his reforms',
    literaryGenre: ['prophecy', 'poetry', 'apocalyptic'],
    difficulty: 'medium',

    overview: `Zephaniah contains some of the Bible's most terrifying descriptions of the Day of the LORD alongside some of its most tender promises of restoration. Written during King Josiah's reign, probably before his reforms, the book confronts Judah's syncretistic religion—mixing worship of the LORD with pagan practices.

The book opens with announcements of total cosmic judgment: God will sweep away everything from the face of the earth. The Day of the LORD looms as a day of wrath, distress, darkness, and desolation. Judah will not escape; neither will surrounding nations. This universal judgment is described in apocalyptic terms that echo in the New Testament.

Yet the book ends with surprising hope. After judgment, God promises to restore a humble, purified remnant. The LORD Himself will dwell among His people, rejoicing over them with loud singing. This dramatic reversal—from terrifying judgment to divine celebration—captures the pattern of biblical eschatology: through judgment to salvation.`,

    purpose: `Zephaniah warned Judah and the nations of the coming Day of the LORD, called for repentance before it was too late, and promised restoration for a humble remnant.`,

    outline: [
      { section: 'The Day of the LORD', chapters: '1:1-2:3', summary: 'Cosmic judgment; call to seek the LORD.' },
      { section: 'Oracles Against Nations', chapters: '2:4-15', summary: 'Judgment on Philistia, Moab, Assyria.' },
      { section: 'Judgment on Jerusalem', chapters: '3:1-8', summary: 'Jerusalem\'s corruption condemned.' },
      { section: 'Promise of Restoration', chapters: '3:9-20', summary: 'Remnant purified; God rejoices over His people.' }
    ],

    keyThemes: [
      {
        theme: 'The Day of the LORD',
        description: 'A coming day of cosmic judgment, wrath, and divine intervention.',
        keyPassages: ['Zephaniah 1:14-18', 'Zephaniah 3:8']
      },
      {
        theme: 'Humble Remnant',
        description: 'God will preserve a humble, lowly people who trust in Him.',
        keyPassages: ['Zephaniah 2:3', 'Zephaniah 3:12-13']
      },
      {
        theme: 'Divine Rejoicing',
        description: 'God will rejoice over His restored people with singing.',
        keyPassages: ['Zephaniah 3:17']
      }
    ],

    christConnection: [
      {
        type: 'theme',
        description: 'Christ bears the judgment of the Day of the LORD for His people.',
        passages: ['Zephaniah 1:14-18', 'Romans 5:9', '1 Thessalonians 5:9']
      },
      {
        type: 'theme',
        description: 'God rejoicing over His people finds fulfillment in Christ\'s joy over His church.',
        passages: ['Zephaniah 3:17', 'Hebrews 12:2', 'Jude 24']
      }
    ],

    keyVerses: [
      {
        reference: 'Zephaniah 1:14-15',
        text: 'The great day of the LORD is near... A day of wrath is that day, a day of distress and anguish, a day of ruin and devastation, a day of darkness and gloom.',
        significance: 'Terrifying description of coming judgment.'
      },
      {
        reference: 'Zephaniah 3:17',
        text: 'The LORD your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing.',
        significance: 'One of Scripture\'s most tender pictures of God\'s love.'
      }
    ],

    keyCharacters: [
      { name: 'Zephaniah', role: 'Royal prophet announcing the Day of the LORD' }
    ],

    practicalApplications: [
      'Take seriously the reality of coming judgment.',
      'Seek the LORD while He may be found.',
      'Cultivate humility as the mark of those who will be saved.',
      'Marvel that God rejoices over His people with singing.',
      'Let the certainty of restoration give hope amid present darkness.'
    ],

    studyQuestions: [
      'What is the Day of the LORD and when will it occur?',
      'What does it mean that God will "rejoice over you with loud singing"?',
      'How does Zephaniah describe the remnant God will preserve?',
      'How does the book move from terror to tender love?',
      'What religious practices was Zephaniah condemning?'
    ]
  },
  {
    id: 'haggai',
    name: 'Haggai',
    abbreviation: 'Hag',
    testament: 'old',
    canonicalGroup: 'minor_prophets',
    order: 37,
    author: 'Haggai',
    authorNotes: 'Haggai was a post-exilic prophet who encouraged rebuilding the temple after the return from Babylon.',
    dateWritten: 'c. 520 BC',
    originalAudience: 'Returned Jewish exiles in Jerusalem',
    literaryGenre: ['prophecy', 'exhortation'],
    difficulty: 'easy',

    overview: `Haggai is a brief, precisely dated book with a focused message: rebuild the temple. The Jewish exiles had returned from Babylon with permission to rebuild, but after initial enthusiasm, the work stalled for 16 years. The people busied themselves with their own houses while God's house lay in ruins.

The book contains four messages delivered over a four-month period in 520 BC. Haggai confronts the people's excuse that "the time has not yet come to rebuild." They have time for paneled houses but not for God's dwelling. Their economic struggles—planting much but harvesting little—result from neglecting God's priorities.

The people respond, and work resumes. Haggai then addresses discouragement: this temple seems pitiful compared to Solomon's. But God promises that the glory of this latter house will exceed the former, for He will shake all nations and fill it with His presence. The book ends with a messianic promise to Zerubbabel as God's chosen signet ring.`,

    purpose: `Haggai called the returned exiles to resume building the temple, exposing their misplaced priorities, and promised that God's presence would make the new temple more glorious than Solomon's.`,

    outline: [
      { section: 'First Message: Rebuild', chapters: '1:1-15', summary: 'Rebuke for neglecting the temple; work begins.' },
      { section: 'Second Message: Greater Glory', chapters: '2:1-9', summary: 'This temple will surpass Solomon\'s.' },
      { section: 'Third Message: Blessing Promised', chapters: '2:10-19', summary: 'From this day, God will bless.' },
      { section: 'Fourth Message: Zerubbabel', chapters: '2:20-23', summary: 'Zerubbabel as God\'s signet ring.' }
    ],

    keyThemes: [
      {
        theme: 'Right Priorities',
        description: 'God\'s house should take precedence over personal comfort.',
        keyPassages: ['Haggai 1:2-4', 'Haggai 1:9']
      },
      {
        theme: 'God\'s Presence',
        description: 'God\'s presence makes humble structures glorious.',
        keyPassages: ['Haggai 2:4-5', 'Haggai 2:7-9']
      },
      {
        theme: 'Obedience and Blessing',
        description: 'When priorities are right, God\'s blessing follows.',
        keyPassages: ['Haggai 1:12-14', 'Haggai 2:18-19']
      }
    ],

    christConnection: [
      {
        type: 'prophecy',
        description: 'The "desired of all nations" who fills the temple with glory points to Christ.',
        passages: ['Haggai 2:7-9', 'Malachi 3:1', 'John 1:14']
      },
      {
        type: 'type',
        description: 'Zerubbabel as God\'s signet ring in the Davidic line anticipates Christ.',
        passages: ['Haggai 2:23', 'Matthew 1:12']
      }
    ],

    keyVerses: [
      {
        reference: 'Haggai 1:4',
        text: 'Is it a time for you yourselves to dwell in your paneled houses, while this house lies in ruins?',
        significance: 'Challenge to misplaced priorities.'
      },
      {
        reference: 'Haggai 2:9',
        text: 'The latter glory of this house shall be greater than the former, says the LORD of hosts. And in this place I will give peace.',
        significance: 'Promise of greater glory through God\'s presence.'
      }
    ],

    keyCharacters: [
      { name: 'Haggai', role: 'Prophet calling for temple rebuilding' },
      { name: 'Zerubbabel', role: 'Governor and Davidic descendant' },
      { name: 'Joshua', role: 'High priest' }
    ],

    practicalApplications: [
      'Examine whether your own comfort takes priority over God\'s work.',
      'Don\'t despise small beginnings—God\'s presence makes things glorious.',
      'Expect blessing when priorities are aligned with God\'s will.',
      'Be encouraged that God is with you in difficult work.',
      'Trust that God will complete what He has started.'
    ],

    studyQuestions: [
      'Why had the temple rebuilding stalled for 16 years?',
      'What excuse did the people give, and how did Haggai respond?',
      'How would the latter glory exceed the former?',
      'What is the significance of Zerubbabel as God\'s signet ring?',
      'How does Haggai apply to prioritizing God\'s work today?'
    ]
  },
  {
    id: 'zechariah',
    name: 'Zechariah',
    abbreviation: 'Zech',
    testament: 'old',
    canonicalGroup: 'minor_prophets',
    order: 38,
    author: 'Zechariah son of Berekiah',
    authorNotes: 'Zechariah was a priest and prophet contemporary with Haggai, ministering to the returned exiles.',
    dateWritten: 'c. 520-480 BC',
    originalAudience: 'Returned Jewish exiles rebuilding Jerusalem and the temple',
    literaryGenre: ['prophecy', 'apocalyptic', 'vision'],
    difficulty: 'hard',

    overview: `Zechariah is the longest of the Minor Prophets and the most messianic after Isaiah. It combines apocalyptic visions (chapters 1-8) with prophetic oracles (chapters 9-14), both pointing toward God's ultimate redemption through the coming King-Priest. Contemporary with Haggai, Zechariah also encouraged temple rebuilding but with a broader eschatological vision.

The first half features eight night visions revealing God's plan: Jerusalem will be rebuilt, sins cleansed, leaders empowered, and evil removed. The vision of the crowned high priest Joshua (chapter 3) and the two olive trees (chapter 4) point to a future figure combining royal and priestly roles. The second half contains oracles about the coming king—humble, riding on a donkey; pierced by those who should honor him; a shepherd struck so sheep are scattered.

The New Testament quotes Zechariah extensively regarding Christ's passion: the triumphal entry, the thirty pieces of silver, the pierced one, the scattered sheep. The book ends with cosmic battle and the LORD becoming king over all the earth. "On that day" rings throughout as the refrain of ultimate hope.`,

    purpose: `Zechariah encouraged the post-exilic community with visions of God's restoration, pointed to the coming Messiah-King, and revealed God's ultimate plan to dwell with His people in a renewed Jerusalem.`,

    outline: [
      { section: 'Call to Return', chapters: '1:1-6', summary: 'Appeal to learn from the fathers.' },
      { section: 'Eight Night Visions', chapters: '1:7-6:8', summary: 'Visions of restoration and cleansing.' },
      { section: 'Crown for Joshua', chapters: '6:9-15', summary: 'High priest crowned; "Branch" prophecy.' },
      { section: 'Fasting Questions', chapters: '7-8', summary: 'True fasting; future blessing.' },
      { section: 'Two Oracles', chapters: '9-14', summary: 'The coming king; shepherd struck; final battle.' }
    ],

    keyThemes: [
      {
        theme: 'The Coming King',
        description: 'A humble king will come, righteous and saving, riding on a donkey.',
        keyPassages: ['Zechariah 9:9-10', 'Zechariah 14:9']
      },
      {
        theme: 'The Pierced One',
        description: 'Israel will look on the one they have pierced and mourn.',
        keyPassages: ['Zechariah 12:10', 'Zechariah 13:7']
      },
      {
        theme: 'Cleansing and Restoration',
        description: 'God will cleanse His people from sin and restore Jerusalem.',
        keyPassages: ['Zechariah 3:1-5', 'Zechariah 13:1']
      },
      {
        theme: 'God Dwelling with His People',
        description: 'The LORD will return to dwell in Jerusalem and be king over all the earth.',
        keyPassages: ['Zechariah 2:10-11', 'Zechariah 8:3', 'Zechariah 14:9']
      }
    ],

    christConnection: [
      {
        type: 'prophecy',
        description: 'Christ enters Jerusalem on a donkey as Zechariah\'s humble king.',
        passages: ['Zechariah 9:9', 'Matthew 21:4-5']
      },
      {
        type: 'prophecy',
        description: 'The thirty pieces of silver and the potter\'s field.',
        passages: ['Zechariah 11:12-13', 'Matthew 27:9-10']
      },
      {
        type: 'prophecy',
        description: 'The pierced one upon whom Israel will look and mourn.',
        passages: ['Zechariah 12:10', 'John 19:37']
      },
      {
        type: 'prophecy',
        description: 'The struck shepherd and scattered sheep.',
        passages: ['Zechariah 13:7', 'Matthew 26:31']
      }
    ],

    keyVerses: [
      {
        reference: 'Zechariah 9:9',
        text: 'Rejoice greatly, O daughter of Zion! Shout aloud, O daughter of Jerusalem! Behold, your king is coming to you; righteous and having salvation is he, humble and mounted on a donkey.',
        significance: 'Prophecy of Palm Sunday—the humble King\'s arrival.'
      },
      {
        reference: 'Zechariah 12:10',
        text: 'They will look on me, on him whom they have pierced, and they shall mourn for him, as one mourns for an only child.',
        significance: 'Prophecy of crucifixion and Israel\'s future repentance.'
      },
      {
        reference: 'Zechariah 14:9',
        text: 'And the LORD will be king over all the earth. On that day the LORD will be one and his name one.',
        significance: 'The ultimate triumph—universal recognition of God\'s reign.'
      }
    ],

    keyCharacters: [
      { name: 'Zechariah', role: 'Priest-prophet of restoration and messianic hope' },
      { name: 'Joshua the High Priest', role: 'Cleansed and crowned in vision' },
      { name: 'Zerubbabel', role: 'Governor who will complete the temple' },
      { name: 'The Branch', role: 'Messianic title for the coming King-Priest' }
    ],

    practicalApplications: [
      'Trust that God is working out His plan even when you can\'t see it.',
      'Look to Christ as the humble King who saves.',
      'Mourn over sin—especially rejecting the One pierced for us.',
      'Live in hope of the day when the LORD will reign universally.',
      'Let visions of future glory encourage present faithfulness.'
    ],

    studyQuestions: [
      'How does Zechariah complement Haggai\'s message?',
      'Which prophecies were fulfilled in Christ\'s first coming?',
      'What does "they will look on me, on him whom they have pierced" mean?',
      'How do chapters 9-14 differ from 1-8?',
      'What does Zechariah reveal about the final state of things?'
    ]
  },
  {
    id: 'malachi',
    name: 'Malachi',
    abbreviation: 'Mal',
    testament: 'old',
    canonicalGroup: 'minor_prophets',
    order: 39,
    author: 'Malachi',
    authorNotes: '"Malachi" means "my messenger"; some consider it a title rather than a name.',
    dateWritten: 'c. 460-430 BC',
    originalAudience: 'Post-exilic Judah, likely during Nehemiah\'s time',
    literaryGenre: ['prophecy', 'disputation', 'dialogue'],
    difficulty: 'easy',

    overview: `Malachi is the Old Testament's final book, providing a fitting conclusion to the prophetic corpus and setting the stage for 400 years of silence before John the Baptist. Written a century after the return from exile, Malachi confronts a community that has grown spiritually complacent. The initial enthusiasm has faded into cynicism and half-hearted religion.

The book uses a distinctive disputation format: God makes a statement, the people skeptically ask "How?", and God elaborates. They question God's love, wonder why He's displeased with their worship, doubt the value of serving Him. Their offerings are defective, their marriages faithless, their tithes withheld. Yet they're surprised God finds fault.

Malachi looks forward to a coming messenger who will prepare the way, and then the Lord Himself will suddenly come to His temple. Before that great and terrible day, Elijah will come to turn hearts. The book ends with this promise, pointing directly to John the Baptist and the coming of Christ. The Old Testament closes looking forward, awaiting its fulfillment.`,

    purpose: `Malachi confronted post-exilic Judah's spiritual complacency, called for wholehearted covenant faithfulness, and pointed to the coming messengers who would prepare for and accomplish redemption.`,

    outline: [
      { section: 'God\'s Love Questioned', chapters: '1:1-5', summary: 'Jacob loved, Esau hated.' },
      { section: 'Unworthy Worship', chapters: '1:6-2:9', summary: 'Defective offerings; faithless priests.' },
      { section: 'Faithless Marriage', chapters: '2:10-16', summary: 'Intermarriage and divorce condemned.' },
      { section: 'The Coming Messenger', chapters: '2:17-3:5', summary: 'Messenger to prepare; Lord to come.' },
      { section: 'Robbing God', chapters: '3:6-12', summary: 'Tithes withheld; blessing promised.' },
      { section: 'The Day of the LORD', chapters: '3:13-4:6', summary: 'Distinction between righteous and wicked; Elijah promised.' }
    ],

    keyThemes: [
      {
        theme: 'Wholehearted Worship',
        description: 'God deserves our best, not leftovers; half-hearted religion is worthless.',
        keyPassages: ['Malachi 1:6-8', 'Malachi 1:11', 'Malachi 3:3-4']
      },
      {
        theme: 'Covenant Faithfulness',
        description: 'Faithfulness in marriage reflects faithfulness to God.',
        keyPassages: ['Malachi 2:13-16']
      },
      {
        theme: 'The Coming Messenger',
        description: 'A messenger will prepare the way before the Lord comes to His temple.',
        keyPassages: ['Malachi 3:1', 'Malachi 4:5-6']
      },
      {
        theme: 'Fear of the LORD',
        description: 'Those who fear God\'s name will be remembered and spared.',
        keyPassages: ['Malachi 3:16-18', 'Malachi 4:2']
      }
    ],

    christConnection: [
      {
        type: 'prophecy',
        description: 'The messenger preparing the way is John the Baptist.',
        passages: ['Malachi 3:1', 'Matthew 11:10', 'Mark 1:2']
      },
      {
        type: 'prophecy',
        description: 'The Lord who suddenly comes to His temple is Christ.',
        passages: ['Malachi 3:1', 'Luke 2:22-32', 'John 2:13-17']
      },
      {
        type: 'prophecy',
        description: 'Elijah who comes before the great day is fulfilled in John the Baptist.',
        passages: ['Malachi 4:5-6', 'Matthew 17:10-13', 'Luke 1:17']
      }
    ],

    keyVerses: [
      {
        reference: 'Malachi 3:1',
        text: 'Behold, I send my messenger, and he will prepare the way before me. And the Lord whom you seek will suddenly come to his temple.',
        significance: 'Prophecy of John the Baptist and Christ\'s coming.'
      },
      {
        reference: 'Malachi 3:10',
        text: 'Bring the full tithe into the storehouse... And thereby put me to the test, says the LORD of hosts, if I will not open the windows of heaven for you.',
        significance: 'God\'s challenge to test His faithfulness in blessing.'
      },
      {
        reference: 'Malachi 4:2',
        text: 'But for you who fear my name, the sun of righteousness shall rise with healing in its wings.',
        significance: 'Promise of healing and restoration for the faithful.'
      }
    ],

    keyCharacters: [
      { name: 'Malachi', role: 'Final Old Testament prophet' },
      { name: 'The Messenger', role: 'Coming one who prepares the way (John the Baptist)' },
      { name: 'The Lord', role: 'One who suddenly comes to His temple (Christ)' },
      { name: 'Elijah', role: 'Promised forerunner (fulfilled in John the Baptist)' }
    ],

    practicalApplications: [
      'Give God your best, not your leftovers.',
      'Honor your marriage as a covenant before God.',
      'Test God\'s faithfulness by obeying His commands.',
      'Live as one who fears God\'s name.',
      'Recognize that the Old Testament points forward to Christ.'
    ],

    studyQuestions: [
      'What was wrong with the worship Malachi observed?',
      'How is Malachi 3:1 fulfilled in John the Baptist and Jesus?',
      'What does it mean that God "hates divorce" (2:16)?',
      'Why does the Old Testament end with a threat of curse (4:6)?',
      'How does Malachi prepare readers for the New Testament?'
    ]
  },

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
    id: 'mark',
    name: 'Mark',
    abbreviation: 'Mark',
    testament: 'new',
    canonicalGroup: 'gospels',
    order: 41,
    author: 'John Mark',
    authorNotes: 'Companion of Peter, Paul, and Barnabas. Early tradition says he recorded Peter\'s memoirs.',
    dateWritten: 'c. AD 55-65',
    originalAudience: 'Roman Christians, likely during persecution',
    literaryGenre: ['gospel', 'narrative'],
    difficulty: 'easy',

    overview: `Mark is the shortest and most fast-paced Gospel, beginning with Jesus' baptism rather than His birth and rushing from scene to scene with the characteristic word "immediately" (used about 40 times). Writing for a Roman audience unfamiliar with Jewish customs, Mark presents Jesus as the powerful Son of God and Suffering Servant who came "not to be served but to serve, and to give his life as a ransom for many."

The Gospel divides into two halves at Peter's confession in chapter 8. The first half emphasizes Jesus' powerful ministry—casting out demons, healing the sick, commanding nature, feeding multitudes. Yet despite these displays of power, people fail to understand who Jesus truly is. The second half journeys toward Jerusalem and the cross, where Jesus' true identity as Messiah is paradoxically revealed in His suffering.

Mark's ending is strikingly abrupt. The earliest manuscripts conclude at 16:8 with women fleeing the empty tomb in fear, leaving readers to grapple with the resurrection's reality and their own response. Mark's portrait of disciples who repeatedly fail yet are still called to follow offers hope to all who struggle in faith.`,

    purpose: `Mark wrote to present Jesus as the powerful yet suffering Son of God, to show that His messiahship is revealed through the cross, and to call disciples to follow Him in the way of suffering service.`,

    outline: [
      { section: 'Preparation', chapters: '1:1-13', summary: 'John the Baptist; Jesus\' baptism and temptation.' },
      { section: 'Galilean Ministry', chapters: '1:14-8:26', summary: 'Teaching, miracles, growing opposition, misunderstanding.' },
      { section: 'Journey to Jerusalem', chapters: '8:27-10:52', summary: 'Peter\'s confession; passion predictions; discipleship.' },
      { section: 'Jerusalem Ministry', chapters: '11-13', summary: 'Triumphal entry; temple cleansing; Olivet Discourse.' },
      { section: 'Passion and Resurrection', chapters: '14-16', summary: 'Last Supper; arrest; crucifixion; empty tomb.' }
    ],

    keyThemes: [
      {
        theme: 'The Suffering Son of God',
        description: 'Jesus is both the powerful Son of God and the Suffering Servant who gives His life as ransom.',
        keyPassages: ['Mark 1:1', 'Mark 10:45', 'Mark 15:39']
      },
      {
        theme: 'The Messianic Secret',
        description: 'Jesus repeatedly commands silence about His identity until the cross reveals its true meaning.',
        keyPassages: ['Mark 1:34', 'Mark 8:29-30', 'Mark 9:9']
      },
      {
        theme: 'Discipleship and the Way',
        description: 'Following Jesus means taking up the cross and serving others.',
        keyPassages: ['Mark 8:34-38', 'Mark 9:33-37', 'Mark 10:42-45']
      },
      {
        theme: 'Failed Yet Forgiven Disciples',
        description: 'The disciples repeatedly fail to understand, yet Jesus calls them forward.',
        keyPassages: ['Mark 6:51-52', 'Mark 8:14-21', 'Mark 14:50', 'Mark 16:7']
      }
    ],

    christConnection: [
      {
        type: 'direct',
        description: 'Mark presents Jesus as the Christ, Son of God, Suffering Servant, and Ransom for many.',
        passages: ['Mark 1:1', 'Mark 10:45', 'Mark 14:61-62']
      }
    ],

    keyVerses: [
      {
        reference: 'Mark 1:1',
        text: 'The beginning of the gospel of Jesus Christ, the Son of God.',
        significance: 'The Gospel\'s opening announces Jesus\' divine identity.'
      },
      {
        reference: 'Mark 10:45',
        text: 'For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many.',
        significance: 'The central verse summarizing Jesus\' mission of redemptive service.'
      },
      {
        reference: 'Mark 8:34',
        text: 'If anyone would come after me, let him deny himself and take up his cross and follow me.',
        significance: 'The call to costly discipleship.'
      },
      {
        reference: 'Mark 15:39',
        text: 'And when the centurion, who stood facing him, saw that in this way he breathed his last, he said, "Truly this man was the Son of God!"',
        significance: 'A pagan soldier recognizes at the cross what disciples missed.'
      }
    ],

    keyCharacters: [
      { name: 'Jesus', role: 'Son of God, Suffering Servant, Teacher, Healer' },
      { name: 'Peter', role: 'Prominent disciple who both confesses and denies Jesus' },
      { name: 'The Twelve', role: 'Disciples who struggle to understand' },
      { name: 'Jewish Leaders', role: 'Opponents who reject Jesus' },
      { name: 'The Centurion', role: 'Roman soldier who confesses Jesus at the cross' }
    ],

    keyEvents: [
      { event: 'Baptism and temptation', reference: 'Mark 1:9-13', significance: 'Jesus identified as Son; tested like Israel.' },
      { event: 'Peter\'s confession', reference: 'Mark 8:27-30', significance: 'Turning point; disciples recognize Jesus as Christ.' },
      { event: 'Transfiguration', reference: 'Mark 9:2-8', significance: 'Jesus\' glory revealed to inner circle.' },
      { event: 'Crucifixion', reference: 'Mark 15', significance: 'Jesus gives His life as ransom.' },
      { event: 'Empty tomb', reference: 'Mark 16:1-8', significance: 'Resurrection announced; women afraid.' }
    ],

    practicalApplications: [
      'Follow Jesus even when the path leads to suffering.',
      'Serve others rather than seeking to be served.',
      'Trust that Jesus can use you despite your failures.',
      'Look to the cross to understand who Jesus truly is.',
      'Respond to the gospel with faith, not fear.'
    ],

    studyQuestions: [
      'Why does Mark emphasize the "messianic secret"?',
      'What does Mark 10:45 reveal about Jesus\' mission?',
      'How do the disciples\' failures encourage us?',
      'Why might Mark\'s Gospel end at 16:8?',
      'How does the centurion\'s confession (15:39) fit Mark\'s themes?'
    ]
  },
  {
    id: 'luke',
    name: 'Luke',
    abbreviation: 'Luke',
    testament: 'new',
    canonicalGroup: 'gospels',
    order: 42,
    author: 'Luke',
    authorNotes: 'A physician and companion of Paul, the only Gentile author of Scripture. Also wrote Acts.',
    dateWritten: 'c. AD 60-65',
    originalAudience: 'Theophilus and Gentile Christians',
    literaryGenre: ['gospel', 'narrative', 'historiography'],
    difficulty: 'easy',

    overview: `Luke is the longest Gospel and the first volume of a two-part work (Luke-Acts) tracing salvation history from Jesus' birth to the gospel's arrival in Rome. Writing as a careful historian to the "most excellent Theophilus," Luke provides the most orderly and comprehensive account of Jesus' life. His stated purpose is to provide certainty about the things his readers have been taught.

Luke emphasizes Jesus as Savior of all people, especially the marginalized. His unique material includes memorable parables (Good Samaritan, Prodigal Son, Rich Man and Lazarus), stories of women and the poor, and the extended travel narrative toward Jerusalem. The Holy Spirit features prominently from John the Baptist's conception through Jesus' ministry.

The Gospel begins and ends in the Jerusalem temple, with worship of God as the proper response to Jesus. Luke's joyful tone celebrates God's salvation breaking into history. Angels sing, the elderly prophesy, the marginalized are included, and Jesus opens Scripture to reveal Himself as the fulfillment of all God's promises.`,

    purpose: `Luke wrote to provide an orderly, historically grounded account of Jesus' life and ministry, to demonstrate that Jesus is the Savior of all people, and to give Theophilus certainty about the Christian faith.`,

    outline: [
      { section: 'Prologue', chapters: '1:1-4', summary: 'Luke\'s purpose and method stated.' },
      { section: 'Birth Narratives', chapters: '1:5-2:52', summary: 'John and Jesus born; infancy and youth.' },
      { section: 'Preparation', chapters: '3:1-4:13', summary: 'John\'s ministry; Jesus\' baptism, genealogy, temptation.' },
      { section: 'Galilean Ministry', chapters: '4:14-9:50', summary: 'Nazareth rejection; teaching and miracles; Twelve sent.' },
      { section: 'Journey to Jerusalem', chapters: '9:51-19:27', summary: 'Extended travel narrative; unique parables; teaching.' },
      { section: 'Jerusalem Ministry', chapters: '19:28-21:38', summary: 'Triumphal entry; temple conflict; Olivet Discourse.' },
      { section: 'Passion and Resurrection', chapters: '22-24', summary: 'Last Supper; arrest; crucifixion; resurrection; ascension.' }
    ],

    keyThemes: [
      {
        theme: 'Savior of All People',
        description: 'Jesus came to seek and save the lost—Gentiles, women, poor, sinners, outcasts.',
        keyPassages: ['Luke 2:30-32', 'Luke 4:18-19', 'Luke 15', 'Luke 19:10']
      },
      {
        theme: 'The Holy Spirit',
        description: 'The Spirit empowers John, fills Jesus, and will be given to the church.',
        keyPassages: ['Luke 1:35', 'Luke 3:22', 'Luke 4:1', 'Luke 24:49']
      },
      {
        theme: 'Prayer',
        description: 'Luke emphasizes Jesus\' prayer life and teaches on prayer.',
        keyPassages: ['Luke 3:21', 'Luke 6:12', 'Luke 11:1-13', 'Luke 22:39-46']
      },
      {
        theme: 'Reversal of Expectations',
        description: 'God exalts the humble and brings down the proud; the lost are found.',
        keyPassages: ['Luke 1:51-53', 'Luke 6:20-26', 'Luke 14:11', 'Luke 18:9-14']
      }
    ],

    christConnection: [
      {
        type: 'direct',
        description: 'Luke presents Jesus as the universal Savior, Son of God, and fulfillment of Scripture.',
        passages: ['Luke 2:11', 'Luke 4:18-21', 'Luke 24:27', 'Luke 24:44-47']
      }
    ],

    keyVerses: [
      {
        reference: 'Luke 1:1-4',
        text: 'Inasmuch as many have undertaken to compile a narrative of the things that have been accomplished among us... it seemed good to me also... to write an orderly account.',
        significance: 'Luke\'s preface revealing his historical method.'
      },
      {
        reference: 'Luke 4:18-19',
        text: 'The Spirit of the Lord is upon me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim liberty to the captives.',
        significance: 'Jesus\' mission statement from Isaiah 61.'
      },
      {
        reference: 'Luke 19:10',
        text: 'For the Son of Man came to seek and to save the lost.',
        significance: 'Summary of Jesus\' saving mission.'
      },
      {
        reference: 'Luke 24:27',
        text: 'And beginning with Moses and all the Prophets, he interpreted to them in all the Scriptures the things concerning himself.',
        significance: 'Christ as the key to understanding all Scripture.'
      }
    ],

    keyCharacters: [
      { name: 'Jesus', role: 'Savior, Son of God, friend of sinners' },
      { name: 'Mary', role: 'Humble servant who magnifies the Lord' },
      { name: 'John the Baptist', role: 'Prepares the way for the Lord' },
      { name: 'The Twelve', role: 'Disciples appointed and sent' },
      { name: 'Zacchaeus', role: 'Tax collector whom Jesus seeks and saves' },
      { name: 'Theophilus', role: 'Recipient of Luke\'s Gospel' }
    ],

    keyEvents: [
      { event: 'Annunciation', reference: 'Luke 1:26-38', significance: 'Gabriel announces Jesus\' birth to Mary.' },
      { event: 'Birth of Jesus', reference: 'Luke 2:1-20', significance: 'Savior born in Bethlehem; angels announce.' },
      { event: 'Nazareth sermon', reference: 'Luke 4:16-30', significance: 'Jesus declares His mission; rejected.' },
      { event: 'Emmaus Road', reference: 'Luke 24:13-35', significance: 'Risen Jesus opens Scriptures.' },
      { event: 'Ascension', reference: 'Luke 24:50-53', significance: 'Jesus blesses and departs; disciples worship.' }
    ],

    practicalApplications: [
      'Welcome the marginalized as Jesus did.',
      'Trust the historical reliability of the Gospel accounts.',
      'Depend on the Holy Spirit in ministry.',
      'Develop a rich prayer life following Jesus\' example.',
      'See all Scripture as pointing to Christ.'
    ],

    studyQuestions: [
      'How does Luke emphasize Jesus as Savior of all people?',
      'What unique parables does Luke include and what do they teach?',
      'Why does Luke emphasize the Holy Spirit?',
      'How does the Emmaus Road story (24:13-35) guide Bible interpretation?',
      'What does Luke\'s prologue tell us about his purpose and method?'
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
  // ACTS (CHURCH HISTORY)
  // ========================================
  {
    id: 'acts',
    name: 'Acts',
    abbreviation: 'Acts',
    testament: 'new',
    canonicalGroup: 'acts',
    order: 44,
    author: 'Luke',
    authorNotes: 'Same author as the Gospel of Luke; companion of Paul',
    dateWritten: 'c. AD 62-64',
    originalAudience: 'Theophilus and the wider Gentile church',
    literaryGenre: ['historical narrative', 'theological history'],
    difficulty: 'medium',

    overview: `Acts of the Apostles is the sequel to Luke's Gospel, continuing the story from Jesus' ascension to Paul's imprisonment in Rome. It records the birth and expansion of the early church through the power of the Holy Spirit. Acts demonstrates how the gospel spread "in Jerusalem and in all Judea and Samaria, and to the end of the earth" (1:8).

The book divides naturally into two main sections: the ministry of Peter and the Jerusalem church (1-12), and the missionary journeys of Paul (13-28). Luke shows how the church transitioned from a Jewish movement to a worldwide community including Gentiles. Key events include Pentecost, the conversion of Saul, the Jerusalem Council, and Paul's missionary journeys.

Acts is essential for understanding how the church was founded and organized, how doctrinal questions were resolved, and how the apostles faithfully proclaimed the risen Christ despite persecution. It bridges the Gospels and Epistles, providing historical context for the letters written during this period.`,

    purpose: `Luke wrote to provide an orderly historical account of the church's origins and expansion, to demonstrate the Holy Spirit's power in spreading the gospel, and to show how Christianity is the legitimate continuation and fulfillment of Judaism.`,

    outline: [
      { section: 'The Church in Jerusalem', chapters: '1-7', summary: 'Ascension, Pentecost, growth of the Jerusalem church, and Stephen\'s martyrdom.' },
      { section: 'Expansion to Judea and Samaria', chapters: '8-12', summary: 'Persecution scatters the church; Philip, Peter, and the conversion of Cornelius.' },
      { section: 'Paul\'s First Missionary Journey', chapters: '13-14', summary: 'Paul and Barnabas take the gospel to Cyprus and Galatia.' },
      { section: 'The Jerusalem Council', chapters: '15:1-35', summary: 'The church decides that Gentiles need not be circumcised.' },
      { section: 'Paul\'s Second and Third Journeys', chapters: '15:36-21:16', summary: 'Gospel spreads through Greece, Asia Minor, and back to Jerusalem.' },
      { section: 'Paul\'s Arrest and Journey to Rome', chapters: '21:17-28:31', summary: 'Paul arrested, defends himself, appeals to Caesar, arrives in Rome.' }
    ],

    keyThemes: [
      {
        theme: 'The Holy Spirit',
        description: 'The Spirit empowers the church for witness, guides its mission, and confirms the inclusion of Gentiles. Acts could be called "The Acts of the Holy Spirit."',
        keyPassages: ['1:8', '2:1-4', '4:31', '10:44-48', '13:2-4']
      },
      {
        theme: 'The Spread of the Gospel',
        description: 'Acts traces the gospel\'s geographical and ethnic expansion from Jerusalem to Rome, from Jews to Gentiles, fulfilling Jesus\' commission.',
        keyPassages: ['1:8', '8:4-8', '11:19-21', '13:46-47', '28:28']
      },
      {
        theme: 'Apostolic Preaching',
        description: 'The speeches in Acts reveal the apostles\' message: Jesus\' life, death, resurrection, and the call to repentance and faith.',
        keyPassages: ['2:14-41', '3:12-26', '10:34-43', '13:16-41', '17:22-31']
      },
      {
        theme: 'Persecution and Triumph',
        description: 'The church faces opposition from Jewish and Roman authorities, yet grows stronger. Nothing can stop God\'s purposes.',
        keyPassages: ['4:1-22', '5:17-42', '7:54-60', '16:16-40', '28:30-31']
      }
    ],

    christConnection: [
      { type: 'direct', description: 'The risen Christ commissions the apostles and ascends to heaven', passages: ['1:1-11'] },
      { type: 'direct', description: 'Apostolic preaching proclaims Jesus as Lord and Messiah', passages: ['2:22-36', '10:36-43'] },
      { type: 'direct', description: 'Conversion of Saul by the risen Christ', passages: ['9:1-19', '22:6-16', '26:12-18'] },
      { type: 'theme', description: 'Jesus builds His church through His Spirit', passages: ['2:47', '9:31', '16:5'] }
    ],

    keyVerses: [
      { reference: '1:8', text: 'But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth.', significance: 'The programmatic statement for the entire book.' },
      { reference: '2:42', text: 'And they devoted themselves to the apostles\' teaching and the fellowship, to the breaking of bread and the prayers.', significance: 'The pattern of the early church.' },
      { reference: '4:12', text: 'And there is salvation in no one else, for there is no other name under heaven given among men by which we must be saved.', significance: 'The exclusive claim of the gospel.' },
      { reference: '16:31', text: 'Believe in the Lord Jesus, and you will be saved, you and your household.', significance: 'The heart of the gospel invitation.' },
      { reference: '20:24', text: 'But I do not account my life of any value nor as precious to myself, if only I may finish my course and the ministry that I received from the Lord Jesus, to testify to the gospel of the grace of God.', significance: 'Paul\'s commitment to his calling.' }
    ],

    keyCharacters: [
      { name: 'Peter', role: 'Leader of the Jerusalem church; preaches at Pentecost; opens door to Gentiles' },
      { name: 'Paul (Saul)', role: 'Apostle to the Gentiles; converted persecutor; missionary' },
      { name: 'Barnabas', role: 'Encourager; Paul\'s early partner in ministry' },
      { name: 'Stephen', role: 'First Christian martyr; full of faith and the Spirit' },
      { name: 'Philip', role: 'Evangelist who brings the gospel to Samaria and the Ethiopian' },
      { name: 'James', role: 'Leader of the Jerusalem church; presides at the Council' }
    ],

    keyEvents: [
      { event: 'The Ascension', reference: '1:9-11', significance: 'Jesus returns to the Father, commissioning His witnesses' },
      { event: 'Pentecost', reference: '2:1-41', significance: 'The Spirit comes; the church is born; 3,000 converted' },
      { event: 'Conversion of Saul', reference: '9:1-19', significance: 'The persecutor becomes the apostle to the Gentiles' },
      { event: 'Cornelius\'s Conversion', reference: '10:1-48', significance: 'The Gentiles receive the Spirit; the gospel crosses ethnic barriers' },
      { event: 'The Jerusalem Council', reference: '15:1-35', significance: 'Gentiles need not become Jews to be Christians' },
      { event: 'Paul in Rome', reference: '28:30-31', significance: 'The gospel reaches the center of the Roman world' }
    ],

    practicalApplications: [
      'Depend on the Holy Spirit for power to witness.',
      'Be committed to the apostles\' teaching, fellowship, breaking of bread, and prayer.',
      'Expect opposition but trust that God\'s purposes will prevail.',
      'Take the gospel across cultural, ethnic, and geographic barriers.',
      'Follow the early church\'s example of generous community.'
    ],

    studyQuestions: [
      'How does Acts 1:8 provide an outline for the entire book?',
      'What do the speeches in Acts reveal about early Christian preaching?',
      'How does the Jerusalem Council (Acts 15) resolve the Jew-Gentile controversy?',
      'What role does the Holy Spirit play throughout the narrative?',
      'How does Luke present the relationship between Christianity and Judaism?'
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
