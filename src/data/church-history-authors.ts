// Church History Authors Data
// Comprehensive profiles of 5 Reformed theologians with biographies, works, theology, and free resources

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export type AuthorId =
  | 'augustine'
  | 'luther'
  | 'calvin'
  | 'owen'
  | 'edwards'
  // Early Church Fathers
  | 'athanasius'
  | 'ambrose'
  | 'jerome'
  | 'gregory_great'
  // Reformation Era
  | 'bucer'
  | 'bullinger'
  | 'vermigli'
  // Puritan Era
  | 'baxter'
  | 'bunyan'
  | 'watson'
  | 'charnock'
  // Great Awakening / Evangelical
  | 'whitefield'
  | 'spurgeon'
  | 'mueller'
  // Modern Reformed
  | 'warfield'
  | 'machen';

export type TheologicalTradition =
  | 'early_church'
  | 'reformation'
  | 'puritan'
  | 'american_reformed'
  | 'great_awakening'
  | 'modern_reformed';

export type TheologicalTopic =
  | 'salvation'
  | 'grace'
  | 'sovereignty'
  | 'scripture'
  | 'trinity'
  | 'christology'
  | 'ecclesiology'
  | 'sacraments'
  | 'sanctification'
  | 'eschatology'
  | 'providence'
  | 'sin'
  | 'justification'
  | 'predestination';

export interface LifeStage {
  period: string;
  title: string;
  description: string;
  keyEvents: string[];
  location?: string;
}

export interface ResourceLink {
  source: 'CCEL' | 'Archive.org' | 'Monergism' | 'Gutenberg' | 'Yale' | 'Other';
  url: string;
  format: 'PDF' | 'ePub' | 'HTML' | 'Audio';
  notes?: string;
}

export interface AuthorWork {
  id: string;
  title: string;
  originalTitle?: string;
  year: string;
  category: 'major' | 'minor' | 'letters' | 'sermons' | 'commentary';
  summary: string;
  keyThemes: string[];
  significance: string;
  freeLinks: ResourceLink[];
}

export interface TheologicalPosition {
  topic: TheologicalTopic;
  position: string;
  distinctives: string[];
  keyQuotes: string[];
  scriptureReferences: string[];
}

export interface NotableQuote {
  id: string;
  text: string;
  source: string;
  context?: string;
  themes: TheologicalTopic[];
}

export interface ChurchHistoryAuthor {
  id: AuthorId;
  name: string;
  fullName: string;
  lifespan: string;
  birthYear: number;
  deathYear: number;
  tradition: TheologicalTradition;
  tagline: string;

  biography: {
    overview: string;
    lifeStages: LifeStage[];
    legacy: string;
  };

  majorWorks: AuthorWork[];

  theologicalPositions: TheologicalPosition[];

  notableQuotes: NotableQuote[];

  influences: AuthorId[];
  influenced: AuthorId[];
}

// ============================================================================
// METADATA
// ============================================================================

export const THEOLOGICAL_TRADITIONS: { value: TheologicalTradition; label: string; era: string }[] = [
  { value: 'early_church', label: 'Early Church', era: '100-600 AD' },
  { value: 'reformation', label: 'Reformation', era: '1500-1600' },
  { value: 'puritan', label: 'Puritan', era: '1600-1700' },
  { value: 'american_reformed', label: 'American Reformed', era: '1700-1800' },
  { value: 'great_awakening', label: 'Great Awakening & Evangelical', era: '1700-1900' },
  { value: 'modern_reformed', label: 'Modern Reformed', era: '1850-1950' },
];

export const THEOLOGICAL_TOPICS: { value: TheologicalTopic; label: string }[] = [
  { value: 'salvation', label: 'Salvation & Soteriology' },
  { value: 'grace', label: 'Grace' },
  { value: 'sovereignty', label: 'Divine Sovereignty' },
  { value: 'scripture', label: 'Scripture & Authority' },
  { value: 'trinity', label: 'Trinity' },
  { value: 'christology', label: 'Christology' },
  { value: 'ecclesiology', label: 'Church & Ecclesiology' },
  { value: 'sacraments', label: 'Sacraments' },
  { value: 'sanctification', label: 'Sanctification' },
  { value: 'eschatology', label: 'Eschatology' },
  { value: 'providence', label: 'Providence' },
  { value: 'sin', label: 'Sin & Depravity' },
  { value: 'justification', label: 'Justification' },
  { value: 'predestination', label: 'Election & Predestination' },
];

// ============================================================================
// AUTHOR DATA
// ============================================================================

export const CHURCH_HISTORY_AUTHORS: ChurchHistoryAuthor[] = [
  // ========================================
  // AUGUSTINE OF HIPPO
  // ========================================
  {
    id: 'augustine',
    name: 'Augustine',
    fullName: 'Aurelius Augustinus Hipponensis',
    lifespan: '354-430 AD',
    birthYear: 354,
    deathYear: 430,
    tradition: 'early_church',
    tagline: 'Bishop of Hippo and Doctor of Grace',

    biography: {
      overview: `Augustine of Hippo stands as one of the most influential theologians in the history of Christianity. Born in Roman North Africa to a pagan father and a devout Christian mother (Monica), Augustine spent his early years pursuing worldly success and philosophical truth through various schools of thought, including Manichaeism and Neoplatonism.

His dramatic conversion in 386 AD, famously recounted in his Confessions, marked a turning point not only in his life but in the trajectory of Western Christian thought. After hearing a child's voice saying "Take up and read," he opened Scripture to Romans 13:13-14, and his heart was transformed.

As Bishop of Hippo for nearly 35 years, Augustine shaped Christian doctrine on grace, salvation, the Trinity, and the nature of the Church. His writings against Pelagianism established the doctrine of original sin and the absolute necessity of divine grace for salvation. His works have influenced virtually every subsequent Christian theologian, from Thomas Aquinas to Martin Luther to John Calvin.`,

      lifeStages: [
        {
          period: '354-370',
          title: 'Youth in Thagaste',
          description: 'Born in Thagaste, North Africa, to Patricius (pagan father) and Monica (Christian mother). Received classical Roman education and showed early intellectual brilliance.',
          keyEvents: [
            'Born November 13, 354 in Thagaste',
            'Showed early intellectual gifts',
            'Mother Monica prayed constantly for his conversion',
            'Father Patricius remained pagan until near death'
          ],
          location: 'Thagaste, Numidia (modern Algeria)'
        },
        {
          period: '370-383',
          title: 'Wandering Years',
          description: 'Studied rhetoric in Carthage, became a Manichaean, took a concubine who bore him a son (Adeodatus). Taught rhetoric while searching for truth through various philosophies.',
          keyEvents: [
            'Studied rhetoric at Carthage (370)',
            'Embraced Manichaeism for nine years',
            'Fathered son Adeodatus (372)',
            'Taught rhetoric at Carthage, Rome, and Milan',
            'Encountered Neoplatonism in Milan'
          ],
          location: 'Carthage, Rome, Milan'
        },
        {
          period: '386-391',
          title: 'Conversion and Preparation',
          description: 'After hearing Ambrose preach in Milan and reading Neoplatonic works, Augustine experienced his famous garden conversion. He was baptized by Ambrose in 387 and returned to Africa.',
          keyEvents: [
            'Conversion in Milan garden (August 386)',
            'Baptized by Ambrose on Easter (387)',
            'Mother Monica died at Ostia (387)',
            'Returned to Thagaste, established monastic community',
            'Son Adeodatus died (389)'
          ],
          location: 'Milan, Ostia, Thagaste'
        },
        {
          period: '391-430',
          title: 'Bishop of Hippo',
          description: 'Ordained priest (391) and consecrated bishop (395) of Hippo. Spent nearly 40 years defending orthodoxy against Donatists, Pelagians, and Manicheans while producing his greatest theological works.',
          keyEvents: [
            'Ordained priest at Hippo (391)',
            'Consecrated coadjutor bishop (395)',
            'Wrote Confessions (397-400)',
            'Wrote City of God (413-426)',
            'Defended grace against Pelagius',
            'Died August 28, 430 as Vandals besieged Hippo'
          ],
          location: 'Hippo Regius'
        }
      ],

      legacy: `Augustine's influence on Western Christianity is incalculable. He shaped the doctrine of original sin, the theology of grace, the understanding of the Trinity, and the concept of just war. Both Catholics and Protestants claim him as a theological father. Luther was an Augustinian monk, and Calvin frequently cited Augustine as his primary patristic authority. His introspective style in the Confessions pioneered autobiography as a literary genre and influenced philosophers from Descartes to Wittgenstein.`
    },

    majorWorks: [
      {
        id: 'confessions',
        title: 'Confessions',
        originalTitle: 'Confessiones',
        year: 'c. 397-400',
        category: 'major',
        summary: `The Confessions is Augustine's spiritual autobiography, recounting his journey from sinful youth through philosophical wandering to Christian conversion. Written as an extended prayer to God, it pioneered the genre of autobiography and remains one of the most widely read works of Christian literature.

The work divides into two parts: Books 1-9 narrate Augustine's life from birth through his mother Monica's death, while Books 10-13 offer philosophical and theological meditations on memory, time, and the interpretation of Genesis. The famous "restless heart" passage and the garden conversion scene have become foundational texts of Christian spirituality.

Beyond personal narrative, the Confessions explores profound questions about the nature of evil, the relationship between free will and grace, and how the finite human soul can know the infinite God.`,
        keyThemes: ['Grace', 'Conversion', 'Memory', 'Evil', 'Time', 'Self-knowledge'],
        significance: 'First major autobiography in Western literature; foundational text for understanding conversion and divine grace.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/augustine/confessions', format: 'HTML' },
          { source: 'Gutenberg', url: 'https://www.gutenberg.org/ebooks/3296', format: 'ePub' },
          { source: 'Archive.org', url: 'https://archive.org/details/confessionsofsta00augu', format: 'PDF' }
        ]
      },
      {
        id: 'city-of-god',
        title: 'City of God',
        originalTitle: 'De Civitate Dei',
        year: '413-426',
        category: 'major',
        summary: `Written in response to the sack of Rome in 410 AD, the City of God is Augustine's magnum opus on Christian philosophy of history. Pagans blamed Christianity for Rome's fall; Augustine responded with a sweeping vision of two cities: the City of God (those who love God) and the City of Man (those who love self).

The first ten books refute pagan criticisms, demonstrating that Rome's gods never protected it and that Christianity offers true virtue. The remaining twelve books develop Augustine's theology of history, tracing the origins, progress, and destinies of the two cities from creation through the last judgment.

This work established the Christian understanding of history as linear and purposeful, moving toward God's final consummation. It influenced political theology for over a millennium and remains essential for understanding church-state relations.`,
        keyThemes: ['Two Cities', 'Providence', 'History', 'Politics', 'Eschatology', 'Justice'],
        significance: 'Foundational text for Christian philosophy of history and political theology.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/augustine/city', format: 'HTML' },
          { source: 'Archive.org', url: 'https://archive.org/details/cityofgod01augu', format: 'PDF' },
          { source: 'Gutenberg', url: 'https://www.gutenberg.org/ebooks/45304', format: 'ePub' }
        ]
      },
      {
        id: 'on-the-trinity',
        title: 'On the Trinity',
        originalTitle: 'De Trinitate',
        year: 'c. 400-416',
        category: 'major',
        summary: `De Trinitate is Augustine's systematic treatment of Trinitarian theology, developed over fifteen years of reflection. The first seven books establish the biblical foundation for the doctrine, while the later books explore psychological analogies for understanding the Trinity.

Augustine's famous psychological analogy describes the Trinity through the structure of the human mind: memory, understanding, and will. These three are distinct yet form one mind, just as Father, Son, and Spirit are distinct yet one God. This approach influenced Western Trinitarian thought for centuries.

The work also addresses the missions of the Son and Spirit, the equality of the persons, and the filioque (the Spirit proceeding from Father "and the Son"). Augustine's Trinitarian theology became standard in the Western church.`,
        keyThemes: ['Trinity', 'Image of God', 'Knowledge', 'Love', 'Divine Persons'],
        significance: 'Definitive Western treatment of Trinitarian theology; introduced psychological analogies.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/augustine/trinity', format: 'HTML' },
          { source: 'Archive.org', url: 'https://archive.org/details/selectlibraryof03unkngoog', format: 'PDF' }
        ]
      },
      {
        id: 'enchiridion',
        title: 'Enchiridion on Faith, Hope, and Love',
        originalTitle: 'Enchiridion ad Laurentium',
        year: '421',
        category: 'major',
        summary: `The Enchiridion ("handbook") is Augustine's concise summary of Christian doctrine, written for a layman named Laurentius who requested a brief guide to the faith. Structured around the three theological virtues (faith, hope, and love), it provides an accessible entry into Augustine's mature theology.

The section on faith interprets the Apostles' Creed, covering creation, fall, redemption, and resurrection. The section on hope explains the Lord's Prayer. The section on love summarizes ethics and the double commandment to love God and neighbor.

This work offers perhaps the best introduction to Augustine's thought, presenting complex theology in accessible form while maintaining theological depth.`,
        keyThemes: ['Faith', 'Hope', 'Love', 'Creed', 'Prayer', 'Ethics'],
        significance: 'Accessible summary of Augustine\'s theology; excellent introduction to his thought.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/augustine/enchiridion', format: 'HTML' },
          { source: 'Archive.org', url: 'https://archive.org/details/faithhopecharity00augu', format: 'PDF' }
        ]
      },
      {
        id: 'on-christian-doctrine',
        title: 'On Christian Doctrine',
        originalTitle: 'De Doctrina Christiana',
        year: '397-426',
        category: 'major',
        summary: `De Doctrina Christiana is Augustine's manual for interpreting Scripture and communicating its message. The first three books develop hermeneutical principles, distinguishing between things to be enjoyed (God) and things to be used (everything else points to God).

Augustine addresses how to handle obscure passages, the role of liberal arts in biblical study, and the relationship between signs and things signified. Book Four applies classical rhetorical theory to Christian preaching, establishing a homiletical tradition that lasted through the Middle Ages.

This work established Christian hermeneutics as a discipline and influenced biblical interpretation for over a thousand years.`,
        keyThemes: ['Biblical Interpretation', 'Preaching', 'Signs', 'Love', 'Rhetoric'],
        significance: 'Foundational text for biblical hermeneutics and Christian preaching.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/augustine/doctrine', format: 'HTML' },
          { source: 'Archive.org', url: 'https://archive.org/details/staugustineonch00augugoog', format: 'PDF' }
        ]
      }
    ],

    theologicalPositions: [
      {
        topic: 'grace',
        position: 'Grace is absolutely necessary for salvation and is entirely a gift from God, not earned by human merit. Without grace, humans cannot will or do any good toward salvation.',
        distinctives: [
          'Prevenient grace initiates salvation before any human response',
          'Grace is irresistible when God purposes to save',
          'Human free will is freed by grace to do good',
          'Perseverance in grace is also a divine gift'
        ],
        keyQuotes: [
          'Give what you command, and command what you will.',
          'Without grace, free choice can do nothing but sin.'
        ],
        scriptureReferences: ['Romans 9:16', 'Ephesians 2:8-9', 'John 15:5', 'Philippians 2:13']
      },
      {
        topic: 'sin',
        position: 'Original sin is transmitted from Adam to all humanity, resulting in a corrupted nature inclined toward evil. All humans are born guilty and unable to save themselves.',
        distinctives: [
          'Sin is inherited from Adam through natural generation',
          'Original sin involves both guilt and corruption',
          'Human will is enslaved to sin apart from grace',
          'Even infants need baptism for original sin'
        ],
        keyQuotes: [
          'In Adam all sinned.',
          'We are not sinners because we sin; we sin because we are sinners.'
        ],
        scriptureReferences: ['Romans 5:12-19', 'Psalm 51:5', 'Ephesians 2:1-3']
      },
      {
        topic: 'predestination',
        position: 'God has predestined certain individuals to salvation before the foundation of the world, and this election is based solely on His sovereign will, not on any foreseen merit.',
        distinctives: [
          'Election is unconditional and based on God\'s sovereign choice',
          'The number of the elect is fixed and certain',
          'Predestination is the cause, not the result, of faith',
          'God gives perseverance to all the elect'
        ],
        keyQuotes: [
          'God chose us, not because we were going to be holy, but in order that we might be holy.'
        ],
        scriptureReferences: ['Ephesians 1:4-5', 'Romans 8:29-30', 'Romans 9:10-24']
      },
      {
        topic: 'trinity',
        position: 'God is one essence in three persons: Father, Son, and Holy Spirit. The three persons are coequal and coeternal, distinguished by their relations of origin.',
        distinctives: [
          'Psychological analogy: memory, understanding, and will image the Trinity',
          'The Spirit proceeds from both Father and Son (filioque)',
          'Each person wholly possesses the divine essence',
          'Relations, not substance, distinguish the persons'
        ],
        keyQuotes: [
          'The Father is God, the Son is God, the Holy Spirit is God; yet there are not three Gods, but one God.'
        ],
        scriptureReferences: ['Matthew 28:19', 'John 10:30', 'John 15:26', '2 Corinthians 13:14']
      }
    ],

    notableQuotes: [
      {
        id: 'restless-heart',
        text: 'You have made us for yourself, O Lord, and our heart is restless until it rests in you.',
        source: 'Confessions, Book I',
        context: 'Opening prayer of the Confessions, setting the theme of the entire work.',
        themes: ['salvation', 'grace']
      },
      {
        id: 'love-and-do',
        text: 'Love, and do what you will.',
        source: 'Homilies on 1 John, 7.8',
        context: 'Often misunderstood; Augustine means that true love of God will naturally produce right action.',
        themes: ['sanctification', 'grace']
      },
      {
        id: 'late-have-i-loved',
        text: 'Late have I loved you, beauty so old and so new: late have I loved you.',
        source: 'Confessions, Book X',
        context: 'Augustine\'s lament for his years of wandering before finding God.',
        themes: ['salvation', 'grace']
      },
      {
        id: 'give-what-you-command',
        text: 'Give what you command, and command what you will.',
        source: 'Confessions, Book X',
        context: 'This prayer so offended Pelagius that it sparked the Pelagian controversy.',
        themes: ['grace', 'sovereignty']
      },
      {
        id: 'understand-believe',
        text: 'I believe in order to understand.',
        source: 'Sermon 43.7',
        context: 'Faith precedes and enables true understanding of divine things.',
        themes: ['scripture', 'salvation']
      }
    ],

    influences: [],
    influenced: ['luther', 'calvin', 'owen', 'edwards']
  },

  // ========================================
  // MARTIN LUTHER
  // ========================================
  {
    id: 'luther',
    name: 'Luther',
    fullName: 'Martin Luther',
    lifespan: '1483-1546',
    birthYear: 1483,
    deathYear: 1546,
    tradition: 'reformation',
    tagline: 'Father of the Protestant Reformation',

    biography: {
      overview: `Martin Luther was a German Augustinian monk whose quest for peace with God sparked the Protestant Reformation. Born to a mining family in Saxony, Luther pursued law before a terrifying thunderstorm led him to vow monastic service. As a monk, professor, and priest, he struggled desperately with his sinfulness until discovering the doctrine of justification by faith alone in Paul's epistles.

His posting of the 95 Theses in 1517, challenging the sale of indulgences, ignited a theological revolution that would reshape Western Christianity. When called to recant at the Diet of Worms in 1521, Luther famously declared, "Here I stand, I can do no other."

Protected by Frederick the Wise, Luther translated the Bible into German, composed hymns that became the songs of the Reformation, and produced a vast body of theological writings. His marriage to former nun Katharina von Bora established Protestant pastoral life. Despite his flaws, including later anti-Semitic writings, Luther's rediscovery of justification by grace through faith alone remains his lasting legacy.`,

      lifeStages: [
        {
          period: '1483-1505',
          title: 'Youth and Education',
          description: 'Born in Eisleben, educated at Magdeburg, Eisenach, and Erfurt. Studied law at his father\'s insistence before his dramatic conversion to monastic life.',
          keyEvents: [
            'Born November 10, 1483 in Eisleben',
            'Attended Latin school in Magdeburg and Eisenach',
            'Enrolled at University of Erfurt (1501)',
            'Thunderstorm vow to St. Anne (1505)',
            'Entered Augustinian monastery at Erfurt'
          ],
          location: 'Eisleben, Magdeburg, Eisenach, Erfurt'
        },
        {
          period: '1505-1517',
          title: 'Monastic Struggle',
          description: 'As an Augustinian monk, Luther practiced severe asceticism but found no peace. His mentor Johann von Staupitz directed him to Scripture and the mercy of Christ.',
          keyEvents: [
            'Ordained priest (1507)',
            'Studied theology at Wittenberg',
            'Journey to Rome (1510)',
            'Became Doctor of Theology (1512)',
            'Began lecturing on Psalms, Romans, Galatians',
            'Tower experience: discovered justification by faith'
          ],
          location: 'Erfurt, Wittenberg, Rome'
        },
        {
          period: '1517-1521',
          title: 'Break with Rome',
          description: 'From the 95 Theses to the Diet of Worms, Luther\'s challenge to Rome escalated from reform to rupture. His writings spread rapidly through the new printing press.',
          keyEvents: [
            'Posted 95 Theses (October 31, 1517)',
            'Heidelberg Disputation (1518)',
            'Leipzig Debate with Eck (1519)',
            'Published major reforming treatises (1520)',
            'Burned papal bull and canon law',
            'Diet of Worms: "Here I stand" (1521)',
            'Kidnapped to Wartburg Castle'
          ],
          location: 'Wittenberg, Heidelberg, Leipzig, Worms, Wartburg'
        },
        {
          period: '1522-1546',
          title: 'Reformer and Pastor',
          description: 'Returned from Wartburg to lead the Reformation, producing the German Bible, catechisms, hymns, and theological treatises while battling Catholics, radicals, and other Reformers.',
          keyEvents: [
            'Translated New Testament (1522)',
            'Married Katharina von Bora (1525)',
            'Wrote Large and Small Catechisms (1529)',
            'Augsburg Confession (1530)',
            'Completed German Bible (1534)',
            'Died February 18, 1546 in Eisleben'
          ],
          location: 'Wittenberg, various German territories'
        }
      ],

      legacy: `Luther's rediscovery of justification by faith alone transformed Western Christianity. His insistence on Scripture alone as the final authority (sola scriptura) and his vernacular Bible made God's Word accessible to ordinary people. Lutheran churches worldwide trace their heritage to him, while his influence extends to all Protestant traditions. His hymns, especially "A Mighty Fortress Is Our God," remain beloved. His emphasis on the "two kingdoms" shaped Protestant political thought. While his later anti-Semitic writings are rightly condemned, his central theological contributions—grace alone, faith alone, Scripture alone, Christ alone—remain foundational to evangelical Christianity.`
    },

    majorWorks: [
      {
        id: '95-theses',
        title: '95 Theses',
        originalTitle: 'Disputatio pro declaratione virtutis indulgentiarum',
        year: '1517',
        category: 'major',
        summary: `The 95 Theses, posted on October 31, 1517, challenged the sale of indulgences by Johann Tetzel. While not attacking the papacy directly, Luther questioned whether the pope could release souls from purgatory and whether indulgences undermined true repentance.

Written in Latin for academic debate, the theses spread rapidly through printing and vernacular translation. They touched a nerve in a society weary of ecclesiastical corruption. Though Luther's intent was reform, not revolution, the theses sparked the Reformation.

Key themes include the nature of true repentance (the entire Christian life), the limits of papal authority, and the priority of preaching over indulgence-selling.`,
        keyThemes: ['Repentance', 'Indulgences', 'Papal Authority', 'Grace'],
        significance: 'Catalyst of the Protestant Reformation; challenged medieval penitential system.',
        freeLinks: [
          { source: 'Archive.org', url: 'https://archive.org/details/luthersnintyffiv00luth', format: 'PDF' },
          { source: 'Gutenberg', url: 'https://www.gutenberg.org/ebooks/274', format: 'HTML' }
        ]
      },
      {
        id: 'bondage-of-will',
        title: 'The Bondage of the Will',
        originalTitle: 'De Servo Arbitrio',
        year: '1525',
        category: 'major',
        summary: `Luther's response to Erasmus's "Diatribe on Free Will" is his most systematic theological work. Where Erasmus argued that humans can cooperate with grace, Luther insisted that apart from grace, the human will is enslaved to sin and cannot choose God.

The work develops Luther's theology of divine sovereignty, arguing that God's grace alone initiates and completes salvation. Luther called this his most important theological work and declared he wished it and the catechism were his only surviving writings.

The debate between Luther and Erasmus defined the issue that would distinguish Protestantism from both Catholicism and later Arminianism.`,
        keyThemes: ['Free Will', 'Grace', 'Sovereignty', 'Election', 'Salvation'],
        significance: 'Luther\'s most systematic theology; definitive statement on grace and sovereignty.',
        freeLinks: [
          { source: 'Monergism', url: 'https://www.monergism.com/bondage-will-ebook', format: 'ePub' },
          { source: 'Archive.org', url: 'https://archive.org/details/bondageofwill00luth', format: 'PDF' },
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/luther/bondage', format: 'HTML' }
        ]
      },
      {
        id: 'small-catechism',
        title: 'Small Catechism',
        originalTitle: 'Der Kleine Katechismus',
        year: '1529',
        category: 'major',
        summary: `Written for household instruction after Luther's distressing visitation of Saxon parishes revealed widespread ignorance, the Small Catechism remains the basic teaching tool of Lutheran churches worldwide.

It covers the Ten Commandments, the Apostles' Creed, the Lord's Prayer, Baptism, Confession, and the Lord's Supper in simple question-and-answer format. Each section begins with Luther's famous question: "What does this mean?"

The catechism assumes a rhythm of daily prayer and instruction, integrating doctrine with devotion. Its clarity and simplicity have made it one of history's most successful educational tools.`,
        keyThemes: ['Law', 'Gospel', 'Sacraments', 'Prayer', 'Faith'],
        significance: 'Basic instruction for Lutheran laity; model for catechetical instruction.',
        freeLinks: [
          { source: 'Other', url: 'https://catechism.cph.org/en/10-commandments.html', format: 'HTML', notes: 'Concordia Publishing' },
          { source: 'Archive.org', url: 'https://archive.org/details/smallcatechismof00luth', format: 'PDF' }
        ]
      },
      {
        id: 'large-catechism',
        title: 'Large Catechism',
        originalTitle: 'Deutsch Katechismus',
        year: '1529',
        category: 'major',
        summary: `The Large Catechism provides fuller exposition of the same topics covered in the Small Catechism. Written for pastors and teachers, it offers thorough treatments of each commandment, article of the Creed, petition of the Lord's Prayer, and sacrament.

Luther's personality shines through as he preaches, exhorts, and cajoles. The work reflects his mature theology while remaining practical and pastoral. His treatment of Baptism and the Lord's Supper became definitive for Lutheran sacramental theology.

Together with the Small Catechism, this work forms the catechetical core of the Lutheran confessional documents.`,
        keyThemes: ['Law', 'Gospel', 'Sacraments', 'Prayer', 'Christian Life'],
        significance: 'Comprehensive catechetical instruction for pastors and teachers.',
        freeLinks: [
          { source: 'Other', url: 'https://bookofconcord.org/large-catechism/', format: 'HTML', notes: 'Book of Concord' },
          { source: 'Archive.org', url: 'https://archive.org/details/largecatechism00luth', format: 'PDF' }
        ]
      },
      {
        id: 'galatians-commentary',
        title: 'Commentary on Galatians',
        originalTitle: 'In epistolam S. Pauli ad Galatas Commentarius',
        year: '1535',
        category: 'commentary',
        summary: `Luther's commentary on Galatians, based on his 1531 lectures, is his most important exegetical work and a masterpiece of Reformation theology. He calls Galatians his "Katie von Bora" among the biblical books—his beloved bride.

The commentary expounds justification by faith alone with pastoral urgency. Luther distinguishes law and gospel, attacks works-righteousness, and celebrates the freedom of the Christian. His expositions of key verses like 2:20 ("I am crucified with Christ") are theological gems.

John Bunyan called this commentary the most precious book he had read outside the Bible.`,
        keyThemes: ['Justification', 'Faith', 'Law and Gospel', 'Christian Freedom'],
        significance: 'Luther\'s most important biblical commentary; classic statement of justification.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/luther/galatians', format: 'HTML' },
          { source: 'Monergism', url: 'https://www.monergism.com/commentary-galatians-ebook', format: 'ePub' },
          { source: 'Archive.org', url: 'https://archive.org/details/commentaryonepi01luth', format: 'PDF' }
        ]
      }
    ],

    theologicalPositions: [
      {
        topic: 'justification',
        position: 'Sinners are justified by grace alone through faith alone in Christ alone. Justification is a forensic declaration where God imputes Christ\'s righteousness to the believer.',
        distinctives: [
          'Justification is by imputation, not infusion',
          'Faith is the alone instrument of justification',
          'Works are fruit, not root, of salvation',
          'Simul justus et peccator: simultaneously righteous and sinner'
        ],
        keyQuotes: [
          'The article of justification is the master and prince, the lord, the ruler, and the judge over all kinds of doctrines.',
          'We are justified by faith alone, but not by a faith that is alone.'
        ],
        scriptureReferences: ['Romans 3:28', 'Romans 4:5', 'Galatians 2:16', 'Ephesians 2:8-9']
      },
      {
        topic: 'scripture',
        position: 'Scripture alone is the final authority for faith and practice. Tradition, councils, and popes are subject to Scripture and may err.',
        distinctives: [
          'Sola Scriptura: Scripture is the sole infallible rule',
          'Scripture interprets Scripture (analogy of faith)',
          'The Bible is clear in its essential teachings (perspicuity)',
          'Vernacular translation is essential for the church'
        ],
        keyQuotes: [
          'Unless I am convinced by Scripture and plain reason... my conscience is captive to the Word of God.',
          'A simple layman armed with Scripture is greater than the mightiest pope without it.'
        ],
        scriptureReferences: ['2 Timothy 3:16-17', 'Isaiah 8:20', 'Matthew 4:4']
      },
      {
        topic: 'sacraments',
        position: 'The sacraments are means of grace where God comes to us through physical elements. Baptism and the Lord\'s Supper truly convey grace to those who receive them in faith.',
        distinctives: [
          'Sacraments are God\'s action toward us, not our action toward God',
          'Baptism regenerates and forgives sins',
          'Real presence: Christ\'s body and blood are truly present "in, with, and under" the bread and wine',
          'Rejected both Catholic transubstantiation and Zwinglian memorialism'
        ],
        keyQuotes: [
          'This is my body—these words are not spoken in vain.',
          'Baptism is no human trifle, but instituted by God himself.'
        ],
        scriptureReferences: ['Matthew 26:26-28', 'Matthew 28:19', 'Titus 3:5']
      },
      {
        topic: 'grace',
        position: 'Salvation is entirely by God\'s grace, not human effort. Grace is not merely assistance but the sole effective cause of salvation.',
        distinctives: [
          'Grace precedes and produces faith',
          'Human will is enslaved to sin apart from grace',
          'Grace is sovereign and irresistible in the elect',
          'Monergism: God alone saves'
        ],
        keyQuotes: [
          'We are beggars. This is true.',
          'Free will after the fall exists in name only.'
        ],
        scriptureReferences: ['Ephesians 2:1-10', 'John 6:44', 'Romans 9:16']
      }
    ],

    notableQuotes: [
      {
        id: 'here-i-stand',
        text: 'Here I stand. I can do no other. God help me. Amen.',
        source: 'Diet of Worms, 1521',
        context: 'Luther\'s response when asked to recant his writings before the Holy Roman Emperor.',
        themes: ['scripture', 'sovereignty']
      },
      {
        id: 'sin-boldly',
        text: 'Be a sinner and sin boldly, but believe and rejoice in Christ even more boldly.',
        source: 'Letter to Philip Melanchthon, 1521',
        context: 'Often misunderstood; Luther was not encouraging sin but emphasizing that Christ\'s grace overcomes our sin.',
        themes: ['grace', 'justification']
      },
      {
        id: 'mighty-fortress',
        text: 'A mighty fortress is our God, a bulwark never failing.',
        source: 'Hymn "Ein feste Burg," c. 1529',
        context: 'Opening line of Luther\'s most famous hymn, based on Psalm 46.',
        themes: ['sovereignty', 'providence']
      },
      {
        id: 'we-are-beggars',
        text: 'We are beggars. This is true.',
        source: 'Last written words, found after his death, 1546',
        context: 'Luther\'s final testimony to salvation by grace alone.',
        themes: ['grace', 'salvation']
      },
      {
        id: 'justification-article',
        text: 'This article of justification is the master and prince, the lord, the ruler, and the judge over all kinds of doctrines; it preserves and governs all church doctrine and raises up our conscience before God.',
        source: 'Commentary on Galatians',
        context: 'Luther\'s assessment of justification by faith as the central Christian doctrine.',
        themes: ['justification', 'salvation']
      }
    ],

    influences: ['augustine'],
    influenced: ['calvin', 'owen', 'edwards']
  },

  // ========================================
  // JOHN CALVIN
  // ========================================
  {
    id: 'calvin',
    name: 'Calvin',
    fullName: 'Jean Calvin',
    lifespan: '1509-1564',
    birthYear: 1509,
    deathYear: 1564,
    tradition: 'reformation',
    tagline: 'Architect of Reformed Theology',

    biography: {
      overview: `John Calvin was a French theologian and pastor who became the most influential figure in the Reformed branch of Protestantism. Trained as a humanist lawyer, Calvin experienced a sudden conversion around 1533-34 and fled France during persecution of Protestants.

His arrival in Geneva in 1536 was providential; William Farel convinced him to stay and lead the Reformation there. Despite an initial exile, Calvin returned in 1541 and spent the rest of his life transforming Geneva into a model Reformed city and training a generation of pastors who spread Reformed Christianity throughout Europe.

Calvin's Institutes of the Christian Religion, first published in 1536 and continuously revised until 1559, remains the most comprehensive and influential systematic theology of the Reformation. His commentaries cover nearly every book of the Bible. His emphasis on God's sovereignty, double predestination, and the disciplined Christian life shaped the Reformed tradition from Geneva to Scotland to the Netherlands to New England.`,

      lifeStages: [
        {
          period: '1509-1533',
          title: 'Education and Conversion',
          description: 'Born in Noyon, France, educated in Paris and Orléans as a humanist and lawyer. Experienced his "sudden conversion" around 1533-34.',
          keyEvents: [
            'Born July 10, 1509 in Noyon, France',
            'Studied theology and law in Paris, Orléans, and Bourges',
            'Influenced by humanism and early reformers',
            'Experienced "sudden conversion" (subita conversio)',
            'Published commentary on Seneca\'s De Clementia (1532)'
          ],
          location: 'Noyon, Paris, Orléans, Bourges'
        },
        {
          period: '1533-1541',
          title: 'Exile and First Geneva Stay',
          description: 'Fled France during persecution, traveled through Basel and Italy, first Geneva stay ended in exile, ministry in Strasbourg.',
          keyEvents: [
            'Left France after "Affair of the Placards" (1534)',
            'First edition of Institutes published in Basel (1536)',
            'Detained by Farel in Geneva (1536)',
            'Expelled from Geneva (1538)',
            'Ministry in Strasbourg (1538-1541)',
            'Married Idelette de Bure (1540)'
          ],
          location: 'Basel, Ferrara, Geneva, Strasbourg'
        },
        {
          period: '1541-1564',
          title: 'Reformer of Geneva',
          description: 'Returned to Geneva at city\'s request, established Reformed church order, Genevan Academy, and comprehensive theological system.',
          keyEvents: [
            'Returned to Geneva (September 1541)',
            'Ecclesiastical Ordinances established church order',
            'Death of wife Idelette (1549)',
            'Controversy with Servetus (1553)',
            'Final edition of Institutes (1559)',
            'Founded Genevan Academy (1559)',
            'Died May 27, 1564'
          ],
          location: 'Geneva'
        }
      ],

      legacy: `Calvin's influence is vast and enduring. His Institutes provided Reformed Christianity with its most comprehensive doctrinal statement. His biblical commentaries remain prized for their clarity and practical application. The Genevan Academy trained pastors who brought Reformed faith to France, Scotland, the Netherlands, Hungary, and eventually North America. Calvinist theology shaped Puritanism, the Westminster Standards, and countless evangelical movements. His emphasis on God's sovereignty, biblical authority, and disciplined Christian living continues to influence churches worldwide. Critics and admirers alike recognize Calvin as one of history's most influential theologians.`
    },

    majorWorks: [
      {
        id: 'institutes',
        title: 'Institutes of the Christian Religion',
        originalTitle: 'Institutio Christianae Religionis',
        year: '1536-1559',
        category: 'major',
        summary: `The Institutes is Calvin's magnum opus and the most important Protestant systematic theology. Beginning as a short catechism in 1536, it grew through five Latin and four French editions to its final form in 1559: four books with eighty chapters.

Book I treats knowledge of God the Creator. Book II covers knowledge of God the Redeemer. Book III addresses how we receive Christ's grace (faith, regeneration, justification, election). Book IV examines the external means of grace (church, sacraments, civil government).

Calvin writes with clarity, biblical depth, and practical concern. His treatment of predestination, though famous, occupies only a small portion. More characteristic is his emphasis on union with Christ, the knowledge of God and self, and the Christian life.`,
        keyThemes: ['Knowledge of God', 'Christ', 'Salvation', 'Church', 'Predestination'],
        significance: 'The most comprehensive and influential systematic theology of the Reformation.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/calvin/institutes', format: 'HTML' },
          { source: 'Monergism', url: 'https://www.monergism.com/institutes-christian-religion-ebook', format: 'ePub' },
          { source: 'Archive.org', url: 'https://archive.org/details/institutesofc01calv', format: 'PDF' }
        ]
      },
      {
        id: 'commentaries',
        title: 'Biblical Commentaries',
        year: '1540-1564',
        category: 'commentary',
        summary: `Calvin wrote commentaries on nearly every book of the Bible, covering the entire New Testament (except 2-3 John and Revelation) and most of the Old Testament. His method emphasized the natural sense of the text, brevity, and clarity.

Calvin sought the author's intention through careful attention to language, context, and historical background. He avoided allegorical excess while drawing theological and practical applications. His commentaries remain valuable for their exegetical insight and devotional warmth.

The commentaries reveal Calvin the pastor as much as Calvin the theologian—always concerned with how Scripture shapes Christian faith and life.`,
        keyThemes: ['Biblical Exposition', 'Practical Application', 'Theological Insight'],
        significance: 'Model of exegetical method; still consulted by scholars and pastors.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/calvin/calcom.i.html', format: 'HTML' },
          { source: 'Archive.org', url: 'https://archive.org/details/commentariesof00calvuoft', format: 'PDF' }
        ]
      },
      {
        id: 'ecclesiastical-ordinances',
        title: 'Ecclesiastical Ordinances',
        originalTitle: 'Ordonnances Ecclésiastiques',
        year: '1541',
        category: 'major',
        summary: `The Ecclesiastical Ordinances established church order in Geneva, creating the fourfold ministry of pastors, teachers, elders, and deacons. This structure became the model for Presbyterian and Reformed polity worldwide.

The Ordinances created the Consistory, a body of pastors and elders that maintained church discipline. They regulated worship, education, and public morals. Though some provisions seem harsh to modern readers, they represented an attempt to create a godly society ordered by Scripture.

This document shaped Reformed ecclesiology and influenced church polity from Scotland to New England.`,
        keyThemes: ['Church Order', 'Ministry', 'Discipline', 'Worship'],
        significance: 'Foundation for Presbyterian church government; model for Reformed polity.',
        freeLinks: [
          { source: 'Archive.org', url: 'https://archive.org/details/calvintheologica0000reid', format: 'PDF', notes: 'In Calvin: Theological Treatises' }
        ]
      },
      {
        id: 'sermons-job',
        title: 'Sermons on Job',
        year: '1554-1555',
        category: 'sermons',
        summary: `Calvin preached 159 sermons on Job from February 1554 to March 1555. These sermons reveal Calvin the pastor, applying the book's profound questions about suffering to the persecuted French church.

Calvin addresses providence, faith amid suffering, and the limits of human understanding. He identifies with Job's struggle while pointing to God's sovereignty and wisdom. The sermons are marked by pastoral warmth and practical application.

These sermons exemplify Calvin's expository preaching method and provide insight into his pastoral heart.`,
        keyThemes: ['Suffering', 'Providence', 'Faith', 'Sovereignty'],
        significance: 'Reveals Calvin\'s pastoral theology; profound treatment of suffering.',
        freeLinks: [
          { source: 'Archive.org', url: 'https://archive.org/details/sermonsofjohn00calv', format: 'PDF' }
        ]
      }
    ],

    theologicalPositions: [
      {
        topic: 'sovereignty',
        position: 'God exercises complete sovereign control over all things, including salvation and reprobation. Nothing happens outside His eternal decree.',
        distinctives: [
          'Meticulous providence: God governs all events',
          'Double predestination: election and reprobation',
          'God\'s will is the ultimate cause of all things',
          'Secondary causes operate under divine sovereignty'
        ],
        keyQuotes: [
          'God preordained, for his own glory and the display of his attributes of mercy and justice, a part of the human race to eternal salvation, and another part to eternal damnation.'
        ],
        scriptureReferences: ['Romans 9:18-23', 'Ephesians 1:11', 'Proverbs 16:4', 'Isaiah 46:10']
      },
      {
        topic: 'predestination',
        position: 'Before the foundation of the world, God chose some for eternal life and passed over others, leaving them in their sin. This double predestination is based solely on God\'s sovereign will.',
        distinctives: [
          'Unconditional election: not based on foreseen faith',
          'Particular redemption: Christ died for the elect',
          'Irresistible grace: the elect certainly come to faith',
          'Perseverance of the saints: true believers cannot fall away'
        ],
        keyQuotes: [
          'By predestination we mean the eternal decree of God, by which he determined with himself whatever he wished to happen with regard to every man.'
        ],
        scriptureReferences: ['Romans 8:29-30', 'Ephesians 1:4-5', 'John 6:37-44', 'Romans 9:10-24']
      },
      {
        topic: 'salvation',
        position: 'Salvation is received through union with Christ by faith. In Christ, believers receive justification (the imputation of righteousness) and sanctification (progressive holiness).',
        distinctives: [
          'Union with Christ is the central soteriological category',
          'Justification and sanctification are distinct but inseparable',
          'Faith is the instrument of receiving Christ\'s benefits',
          'The double grace: pardon and renewal'
        ],
        keyQuotes: [
          'So long as Christ remains outside of us, and we are separated from him, all that he has suffered and done for the salvation of the human race remains useless and of no value for us.'
        ],
        scriptureReferences: ['Romans 6:1-11', 'Galatians 2:20', '1 Corinthians 1:30', 'Ephesians 2:5-6']
      },
      {
        topic: 'scripture',
        position: 'Scripture is the inspired, authoritative Word of God, authenticated by the internal testimony of the Holy Spirit. It is the sole infallible rule of faith and practice.',
        distinctives: [
          'Scripture is God-breathed (theopneustos)',
          'The Spirit authenticates Scripture to believers',
          'Scripture interprets Scripture',
          'Emphasis on the literal-grammatical sense'
        ],
        keyQuotes: [
          'Scripture is the school of the Holy Spirit, in which, as nothing is omitted that is both necessary and useful to know, so nothing is taught but what is expedient to know.'
        ],
        scriptureReferences: ['2 Timothy 3:16', '2 Peter 1:20-21', 'Isaiah 8:20']
      }
    ],

    notableQuotes: [
      {
        id: 'knowledge-god-self',
        text: 'Nearly all the wisdom we possess, that is to say, true and sound wisdom, consists of two parts: the knowledge of God and of ourselves.',
        source: 'Institutes I.1.1',
        context: 'Opening sentence of the Institutes, setting its fundamental theme.',
        themes: ['salvation', 'scripture']
      },
      {
        id: 'heart-altar',
        text: 'Our heart is an idol factory.',
        source: 'Institutes I.11.8 (paraphrase)',
        context: 'Calvin\'s diagnosis of human nature and the source of false worship.',
        themes: ['sin', 'salvation']
      },
      {
        id: 'cor-offero',
        text: 'My heart I offer to you, Lord, promptly and sincerely.',
        source: 'Personal motto; Calvin\'s seal',
        context: 'Calvin\'s motto, depicted with a hand offering a heart to God.',
        themes: ['sanctification', 'sovereignty']
      },
      {
        id: 'union-with-christ',
        text: 'So long as Christ remains outside of us, and we are separated from him, all that he has suffered and done for the salvation of the human race remains useless and of no value for us.',
        source: 'Institutes III.1.1',
        context: 'Emphasizing union with Christ as the foundation of all salvation benefits.',
        themes: ['salvation', 'christology']
      },
      {
        id: 'world-theater',
        text: 'There is not one blade of grass, there is no color in this world, that is not intended to make us rejoice.',
        source: 'Sermons on Job',
        context: 'Calvin\'s appreciation for creation as revealing God\'s goodness.',
        themes: ['providence', 'sovereignty']
      }
    ],

    influences: ['augustine', 'luther'],
    influenced: ['owen', 'edwards']
  },

  // ========================================
  // JOHN OWEN
  // ========================================
  {
    id: 'owen',
    name: 'Owen',
    fullName: 'John Owen',
    lifespan: '1616-1683',
    birthYear: 1616,
    deathYear: 1683,
    tradition: 'puritan',
    tagline: 'The Prince of Puritan Theologians',

    biography: {
      overview: `John Owen was the greatest theologian among the English Puritans. Born to a Welsh nonconformist minister, Owen studied at Queen's College, Oxford, from age twelve. His profound intellect produced some of the deepest theological works in English.

Owen served as chaplain to Oliver Cromwell and as Vice-Chancellor of Oxford University during the Commonwealth period. After the Restoration, he was ejected from his positions but continued writing and pastoring an Independent congregation in London.

His writings on the Holy Spirit, sanctification, and the atonement remain unsurpassed. The Death of Death in the Death of Christ defends particular redemption with devastating logic. The Mortification of Sin has helped countless believers in their struggle against indwelling sin. Communion with God explores the distinct fellowship believers have with each person of the Trinity.`,

      lifeStages: [
        {
          period: '1616-1642',
          title: 'Education and Early Ministry',
          description: 'Born in Stadhampton, Oxfordshire. Entered Queen\'s College, Oxford at age twelve. Trained in Puritan theology and classical learning.',
          keyEvents: [
            'Born January 1616 in Stadhampton',
            'Entered Queen\'s College, Oxford (1628)',
            'BA (1632) and MA (1635)',
            'Converted through sermon at Aldermanbury (1642)',
            'Ordained and began pastoral ministry'
          ],
          location: 'Stadhampton, Oxford'
        },
        {
          period: '1642-1660',
          title: 'Chaplain and University Leader',
          description: 'Rose to prominence during the Civil War and Interregnum. Served as chaplain to Cromwell and Oliver himself, then as Vice-Chancellor of Oxford.',
          keyEvents: [
            'Published first works on Arminianism (1642-1643)',
            'Preached before Parliament (1646, 1649)',
            'Death of Death published (1647)',
            'Became Cromwell\'s chaplain',
            'Dean of Christ Church, Oxford (1651)',
            'Vice-Chancellor of Oxford (1652-1658)',
            'Published Mortification of Sin (1656)'
          ],
          location: 'London, Oxford'
        },
        {
          period: '1660-1683',
          title: 'Nonconformist Pastor',
          description: 'Ejected at the Restoration. Continued writing prolifically while pastoring an Independent congregation. Suffered under persecution but remained faithful.',
          keyEvents: [
            'Ejected from Oxford at Restoration (1660)',
            'Act of Uniformity (1662)',
            'Pastored Independent congregation in London',
            'Published major works on the Spirit (1674, 1682)',
            'Hebrews commentary completed (1680)',
            'Died August 24, 1683'
          ],
          location: 'London'
        }
      ],

      legacy: `Owen's theological legacy is immense. His works on the Holy Spirit, particularly the 1674 Discourse Concerning the Holy Spirit, remain the most comprehensive treatments in English. His Mortification of Sin continues to help Christians fight indwelling sin. The Death of Death is the classic defense of definite atonement. His Hebrews commentary is one of the most thorough verse-by-verse expositions ever written. Theologians from John Wesley (who disagreed but read him carefully) to J.I. Packer (who edited a modernized edition) have recognized Owen's massive contribution. He combined profound intellect with experiential piety, making him the model of the theologian-pastor.`
    },

    majorWorks: [
      {
        id: 'death-of-death',
        title: 'The Death of Death in the Death of Christ',
        year: '1647',
        category: 'major',
        summary: `Owen's Death of Death is the definitive defense of particular redemption (limited atonement). Owen argues that Christ's death actually accomplished salvation for the elect, not merely made it possible for all.

The work proceeds systematically: first establishing God's purpose in Christ's death, then examining what Christ purchased, and finally answering objections. Owen's central question: "For whom did Christ die?" His answer: Christ died savingly only for those whom the Father gave him.

The logic is devastating: if Christ died for all, and all are not saved, then either Christ's death was insufficient or God's purposes failed. Owen shows that Scripture teaches an effective, definite atonement.`,
        keyThemes: ['Atonement', 'Redemption', 'Election', 'Divine Purpose'],
        significance: 'Definitive defense of particular redemption; landmark in Reformed soteriology.',
        freeLinks: [
          { source: 'Monergism', url: 'https://www.monergism.com/death-death-death-christ-ebook', format: 'ePub' },
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/owen/deathofdeath', format: 'HTML' },
          { source: 'Archive.org', url: 'https://archive.org/details/deathofdeathinde00owen', format: 'PDF' }
        ]
      },
      {
        id: 'mortification-sin',
        title: 'The Mortification of Sin',
        year: '1656',
        category: 'major',
        summary: `Based on Romans 8:13, this pastoral classic teaches believers how to "put to death the deeds of the body." Owen diagnoses the nature of indwelling sin and prescribes remedies grounded in the gospel.

Owen insists that mortification is the believer's duty, enabled by the Spirit, not accomplished by mere willpower or external rules. Sin must be attacked at the root—the desires and affections—not merely at the surface behavior.

The work's famous axiom: "Be killing sin, or sin will be killing you." Owen provides both theological foundation and practical application for the daily battle against remaining corruption.`,
        keyThemes: ['Sanctification', 'Sin', 'Holy Spirit', 'Christian Life'],
        significance: 'Classic treatment of fighting indwelling sin; enduring practical value.',
        freeLinks: [
          { source: 'Monergism', url: 'https://www.monergism.com/mortification-sin-ebook', format: 'ePub' },
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/owen/mort', format: 'HTML' },
          { source: 'Archive.org', url: 'https://archive.org/details/mortificationofs00owen', format: 'PDF' }
        ]
      },
      {
        id: 'communion-with-god',
        title: 'Communion with God',
        year: '1657',
        category: 'major',
        summary: `This work explores the distinct communion believers have with each person of the Trinity: love with the Father, grace with the Son, and comfort with the Spirit.

Owen grounds his treatment in the believer's union with Christ and proceeds to show how fellowship with each divine person is distinct yet inseparable. The Father's peculiar work is to love; the Son's is to mediate grace; the Spirit's is to comfort and sanctify.

The work demonstrates that Trinitarian theology is not abstract speculation but the foundation of Christian experience. Owen helps believers understand and enjoy their relationship with the triune God.`,
        keyThemes: ['Trinity', 'Communion', 'Prayer', 'Spirituality'],
        significance: 'Profound exploration of experiential Trinitarian piety.',
        freeLinks: [
          { source: 'Monergism', url: 'https://www.monergism.com/communion-god-ebook', format: 'ePub' },
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/owen/communion', format: 'HTML' },
          { source: 'Archive.org', url: 'https://archive.org/details/communionwithgod00owen', format: 'PDF' }
        ]
      },
      {
        id: 'glory-of-christ',
        title: 'The Glory of Christ',
        year: '1684',
        category: 'major',
        summary: `Owen's last major work, published after his death, meditates on the glory of Christ as the proper object of faith. Owen explores Christ's glory in his person, offices, and work—both in his humiliation and exaltation.

The work serves both as a primer on Christology and as a devotional guide to beholding Christ. Owen shows that contemplating Christ transforms the believer: "By beholding the glory of Christ, we are changed into the same image."

Written as Owen faced death, the work glows with the warmth of one who is about to see the glory he describes.`,
        keyThemes: ['Christ', 'Glory', 'Transformation', 'Devotion'],
        significance: 'Owen\'s dying testimony; profound Christological meditation.',
        freeLinks: [
          { source: 'Monergism', url: 'https://www.monergism.com/glory-christ-ebook', format: 'ePub' },
          { source: 'Archive.org', url: 'https://archive.org/details/gloryofchrist00owen', format: 'PDF' }
        ]
      },
      {
        id: 'holy-spirit',
        title: 'A Discourse Concerning the Holy Spirit',
        year: '1674',
        category: 'major',
        summary: `This massive work is the most comprehensive treatment of pneumatology in the English language. Owen covers the Spirit's person, work in creation, work in the incarnation of Christ, and work in applying redemption.

The work is especially strong on regeneration, sanctification, and the Spirit's operations in believers. Owen carefully distinguishes ordinary operations of the Spirit from extraordinary gifts, and common grace from saving grace.

The treatise demonstrates that the Holy Spirit is not merely a divine influence but a distinct person who accomplishes God's purposes in creation and redemption.`,
        keyThemes: ['Holy Spirit', 'Regeneration', 'Sanctification', 'Spiritual Gifts'],
        significance: 'Most comprehensive pneumatology in English; foundational for Reformed understanding of the Spirit.',
        freeLinks: [
          { source: 'Archive.org', url: 'https://archive.org/details/workofspiritinhuman00owen', format: 'PDF' }
        ]
      }
    ],

    theologicalPositions: [
      {
        topic: 'sanctification',
        position: 'Sanctification is the Spirit\'s work of progressively conforming believers to Christ. It involves mortifying sin and vivifying holiness, requiring active human participation empowered by grace.',
        distinctives: [
          'Sanctification is by the Spirit through the Word',
          'Active mortification of sin is the believer\'s duty',
          'Growth in grace is progressive, not perfectionist',
          'Union with Christ is the foundation of sanctification'
        ],
        keyQuotes: [
          'Be killing sin, or it will be killing you.',
          'The vigour and power of our spiritual life depends on our mortification of sin.'
        ],
        scriptureReferences: ['Romans 8:13', 'Colossians 3:5', '2 Corinthians 3:18', '1 Thessalonians 5:23']
      },
      {
        topic: 'salvation',
        position: 'Christ\'s death effectively accomplished redemption for the elect. He did not merely make salvation possible but actually secured it for all given him by the Father.',
        distinctives: [
          'Particular redemption: Christ died for the elect',
          'The atonement is definite in design and efficacious',
          'All for whom Christ died are certainly saved',
          'The Trinity works harmoniously in salvation'
        ],
        keyQuotes: [
          'The Father imposed His wrath due unto, and the Son underwent punishment for, either all the sins of all men, or all the sins of some men, or some of the sins of all men.',
          'If Christ died for all the sins of all men, why are not all men saved?'
        ],
        scriptureReferences: ['John 10:11', 'John 17:9', 'Ephesians 5:25', 'Hebrews 9:12']
      },
      {
        topic: 'trinity',
        position: 'The Trinity is the foundation of Christian experience. Believers have distinct communion with each divine person: love with the Father, grace with the Son, comfort with the Spirit.',
        distinctives: [
          'Each person has distinct operations in salvation',
          'Communion with God is Trinitarian in structure',
          'The Father\'s distinctive work is electing love',
          'The Spirit applies what Christ purchased'
        ],
        keyQuotes: [
          'The doctrine of the Trinity is not only truth in itself, but the foundation of all our faith and spiritual life.'
        ],
        scriptureReferences: ['2 Corinthians 13:14', 'Ephesians 2:18', '1 Peter 1:2']
      },
      {
        topic: 'christology',
        position: 'Christ\'s glory as the God-man is the proper object of faith. Beholding his glory transforms believers into his image. His two natures and three offices are essential to his saving work.',
        distinctives: [
          'The hypostatic union is essential to redemption',
          'Christ\'s mediatorial glory exceeds his essential glory in manifestation',
          'Contemplation of Christ transforms the believer',
          'The threefold office comprehends all Christ\'s work'
        ],
        keyQuotes: [
          'By beholding the glory of Christ, we are changed into the same image.',
          'The blessed and delightful exercise of our souls is in viewing the glory of Christ.'
        ],
        scriptureReferences: ['2 Corinthians 3:18', 'John 1:14', 'Colossians 1:15-20']
      }
    ],

    notableQuotes: [
      {
        id: 'killing-sin',
        text: 'Be killing sin, or sin will be killing you.',
        source: 'The Mortification of Sin',
        context: 'Owen\'s famous summary of the Christian\'s lifelong battle against indwelling sin.',
        themes: ['sanctification', 'sin']
      },
      {
        id: 'beholding-glory',
        text: 'By beholding the glory of Christ, we are changed into the same image.',
        source: 'The Glory of Christ',
        context: 'The transformative power of contemplating Christ.',
        themes: ['christology', 'sanctification']
      },
      {
        id: 'sin-indwelling',
        text: 'Sin doth not only still abide in us, but is still acting, still labouring to bring forth the deeds of the flesh.',
        source: 'The Mortification of Sin',
        context: 'Owen\'s diagnosis of the ongoing activity of remaining sin.',
        themes: ['sin', 'sanctification']
      },
      {
        id: 'communion-trinity',
        text: 'The saints have distinct communion with the Father, and the Son, and the Holy Spirit.',
        source: 'Communion with God',
        context: 'Opening statement of his treatise on Trinitarian communion.',
        themes: ['trinity', 'salvation']
      },
      {
        id: 'dying-words',
        text: 'I am going to Him whom my soul has loved, or rather who has loved me with an everlasting love.',
        source: 'Reported last words',
        context: 'Owen\'s dying testimony to the love of Christ.',
        themes: ['grace', 'salvation']
      }
    ],

    influences: ['augustine', 'calvin'],
    influenced: ['edwards']
  },

  // ========================================
  // MARTIN BUCER
  // ========================================
  {
    id: 'bucer',
    name: 'Bucer',
    fullName: 'Martin Bucer',
    lifespan: '1491-1551',
    birthYear: 1491,
    deathYear: 1551,
    tradition: 'reformation',
    tagline: 'Reformer of Strasbourg',

    biography: {
      overview: `Martin Bucer was the leading Reformer of Strasbourg and one of the most influential mediating figures of the Reformation. Originally a Dominican friar, he was converted through Luther's writings and became a tireless worker for Protestant unity, seeking to bridge the gap between Lutheran and Reformed traditions.

Bucer led the Reformation in Strasbourg for over two decades (1523-1549), creating a model of Reformed church and city that influenced Calvin during his Strasbourg exile. His emphasis on church discipline, pastoral care, and the visible church as a disciplined community profoundly shaped Reformed ecclesiology.

After the Augsburg Interim forced him from Strasbourg, Bucer spent his final years at Cambridge, where he influenced the English Reformation and Archbishop Cranmer's theology. His emphasis on sanctification, church discipline, and pastoral theology left lasting marks on Reformed Christianity.`,

      lifeStages: [
        {
          period: '1491-1523',
          title: 'Dominican Friar and Early Reformer',
          description: 'Born in Schlettstadt (Alsace). Became a Dominican at age 15. Studied scholastic theology. Converted through encounter with Luther at Heidelberg (1518). Left Dominican order and married.',
          keyEvents: [
            'Born November 11, 1491 in Schlettstadt, Alsace',
            'Entered Dominican order at age 15 (1506)',
            'Studied theology at Heidelberg',
            'Attended Heidelberg Disputation; met Luther (1518)',
            'Gradually embraced Reformation principles',
            'Dispensed from monastic vows (1521)',
            'Married Elisabeth Silbereisen (1522)',
            'Began Reformed ministry in Landstuhl'
          ],
          location: 'Alsace, Heidelberg'
        },
        {
          period: '1523-1549',
          title: 'Reformer of Strasbourg',
          description: 'Led the Reformation in Strasbourg, creating a model city-church. Worked tirelessly for Protestant unity. Hosted Calvin during his Strasbourg exile. Sought mediation between Lutheran and Reformed positions.',
          keyEvents: [
            'Called to Strasbourg (1523)',
            'Led reform of church and city',
            'Developed church discipline system',
            'Participated in Marburg Colloquy (1529)',
            'Drafted Tetrapolitan Confession (1530)',
            'Hosted and influenced John Calvin (1538-1541)',
            'Wittenberg Concord with Lutherans (1536)',
            'First wife Elisabeth died (1541); remarried',
            'Forced into exile by Augsburg Interim (1549)'
          ],
          location: 'Strasbourg'
        },
        {
          period: '1549-1551',
          title: 'Cambridge Professor',
          description: 'Exiled to England at Cranmer\'s invitation. Became Regius Professor of Divinity at Cambridge. Influenced English Reformation before death.',
          keyEvents: [
            'Arrived in England at Cranmer\'s invitation (1549)',
            'Appointed Regius Professor at Cambridge',
            'Wrote De Regno Christi for Edward VI',
            'Influenced English ordination rite',
            'Health declined rapidly',
            'Died February 28, 1551 at Cambridge',
            'Body exhumed and burned under Mary (1556)',
            'Rehabilitated under Elizabeth (1560)'
          ],
          location: 'Cambridge, England'
        }
      ],

      legacy: `Bucer's legacy runs through multiple Reformation streams. His Strasbourg model profoundly influenced Calvin's understanding of church discipline and pastoral care. His emphasis on the visible church as a disciplined community of the godly shaped Reformed ecclesiology. His mediation efforts, though ultimately unsuccessful, kept dialogue alive between Lutheran and Reformed traditions. His work at Cambridge influenced the English Reformation, particularly the 1549 and 1552 Prayer Books. De Regno Christi articulated a vision of Christian society that influenced Puritan thought. Modern ecumenists regard him as a pioneer of Protestant unity. His pastoral theology, emphasizing sanctification and practical godliness, anticipated Puritan concerns.`
    },

    majorWorks: [
      {
        id: 'de-regno-christi',
        title: 'On the Kingdom of Christ',
        originalTitle: 'De Regno Christi',
        year: '1550',
        category: 'major',
        summary: `De Regno Christi was written for the young King Edward VI as a program for reforming England according to gospel principles. It represents Bucer's mature vision of a Christian commonwealth.

Bucer addresses education, poor relief, economic justice, marriage law, and church discipline. He envisions a society where all institutions—church, state, family, economy—are reformed according to Scripture.

The work influenced both Anglican and Puritan visions of Christian society. Its social ethics anticipated later Reformed concerns for the transformation of all of life under Christ's lordship.`,
        keyThemes: ['Christian Society', 'Church and State', 'Social Ethics', 'Reformation'],
        significance: 'Mature vision of Christian society; influenced English Reformation and Puritan thought.',
        freeLinks: [
          { source: 'Archive.org', url: 'https://archive.org/details/deregnochristili00buce', format: 'PDF' }
        ]
      },
      {
        id: 'gospel-commentaries',
        title: 'Gospel Commentaries',
        year: '1527-1536',
        category: 'commentary',
        summary: `Bucer's commentaries on the Synoptic Gospels and John were among the most important Reformation expositions of the Gospels. They combine careful exegesis with practical application.

Bucer emphasizes Christ's teaching on discipleship and the nature of the church. His exposition influenced later Reformed commentary and homiletical practice.

These works demonstrate Bucer's skill as an interpreter of Scripture and his pastoral concern for practical application of gospel truths.`,
        keyThemes: ['Scripture', 'Christology', 'Discipleship', 'Church'],
        significance: 'Influential Reformation Gospel commentaries; shaped later Reformed exposition.',
        freeLinks: [
          { source: 'Archive.org', url: 'https://archive.org/details/enarratioinevan01bucegoog', format: 'PDF', notes: 'Latin original' }
        ]
      },
      {
        id: 'concerning-true-pastoral-care',
        title: 'Concerning the True Care of Souls',
        originalTitle: 'Von der wahren Seelsorge',
        year: '1538',
        category: 'major',
        summary: `This pastoral manual articulates Bucer's vision for church discipline and spiritual care. Written during Calvin's Strasbourg years, it profoundly influenced Calvin's understanding of pastoral ministry.

Bucer distinguishes five aspects of pastoral care: drawing the lost, restoring the fallen, healing the wounded, strengthening the weak, and guarding the healthy. He emphasizes mutual oversight within the congregation.

The work established principles of church discipline that became characteristic of Reformed churches and deeply influenced Puritan pastoral theology.`,
        keyThemes: ['Pastoral Care', 'Church Discipline', 'Sanctification', 'Ecclesiology'],
        significance: 'Foundational for Reformed pastoral theology; influenced Calvin and later Puritans.',
        freeLinks: [
          { source: 'Monergism', url: 'https://www.monergism.com/concerning-true-care-souls', format: 'PDF' }
        ]
      }
    ],

    theologicalPositions: [
      {
        topic: 'ecclesiology',
        position: 'The church is the visible community of the godly, requiring discipline to maintain its purity. Church discipline is essential, not optional. Elders share governance with pastors.',
        distinctives: [
          'Church discipline is a mark of the true church',
          'Visible community of the godly, not merely the elect',
          'Mutual oversight within congregation',
          'Elder-led governance'
        ],
        keyQuotes: [
          'There is no true church without discipline.',
          'Christ gave discipline to preserve the purity of His body.'
        ],
        scriptureReferences: ['Matthew 18:15-18', '1 Corinthians 5:1-13', 'Galatians 6:1', 'Hebrews 12:5-11']
      },
      {
        topic: 'sacraments',
        position: 'The Lord\'s Supper is a true spiritual feeding on Christ. Believers truly receive Christ\'s body spiritually, though not according to Lutheran corporeal presence.',
        distinctives: [
          'True spiritual presence of Christ in the Supper',
          'Believers genuinely feed on Christ',
          'Sought mediating position between Luther and Zwingli',
          'Sacraments are means of grace, not mere signs'
        ],
        keyQuotes: [
          'Christ truly gives His body and blood to believers, spiritually.',
          'In the Supper, we feed on Christ by faith.'
        ],
        scriptureReferences: ['1 Corinthians 10:16-17', '1 Corinthians 11:23-26', 'John 6:53-58', 'Matthew 26:26-28']
      },
      {
        topic: 'sanctification',
        position: 'The Christian life requires growth in holiness through the Spirit\'s work. Sanctification is not optional but essential evidence of true faith.',
        distinctives: [
          'Sanctification flows from justification',
          'Holiness is evidence of election',
          'Pastoral care promotes sanctification',
          'The whole life must be reformed'
        ],
        keyQuotes: [
          'True faith necessarily produces fruits of righteousness.',
          'Christ reforms the whole of life.'
        ],
        scriptureReferences: ['Romans 6:1-14', 'Ephesians 4:22-24', 'Titus 2:11-14', 'Hebrews 12:14']
      }
    ],

    notableQuotes: [
      {
        id: 'no-church-without-discipline',
        text: 'There is no true church without discipline.',
        source: 'Concerning the True Care of Souls',
        context: 'Bucer\'s insistence on discipline as essential to the church.',
        themes: ['ecclesiology', 'sanctification']
      },
      {
        id: 'whole-life',
        text: 'Christ must reform the whole of our life—family, city, nation—all under His lordship.',
        source: 'De Regno Christi',
        context: 'Bucer\'s vision of comprehensive reformation.',
        themes: ['sanctification', 'sovereignty']
      },
      {
        id: 'unity-effort',
        text: 'We must seek unity in Christ with all our strength, for He is not divided.',
        source: 'Various correspondence',
        context: 'Bucer\'s lifelong commitment to Protestant unity.',
        themes: ['ecclesiology']
      }
    ],

    influences: ['luther'],
    influenced: ['calvin', 'vermigli']
  },

  // ========================================
  // HEINRICH BULLINGER
  // ========================================
  {
    id: 'bullinger',
    name: 'Bullinger',
    fullName: 'Heinrich Bullinger',
    lifespan: '1504-1575',
    birthYear: 1504,
    deathYear: 1575,
    tradition: 'reformation',
    tagline: 'Pastor of Reformed Zurich',

    biography: {
      overview: `Heinrich Bullinger was Ulrich Zwingli's successor as leader of the Zurich Reformation and one of the most influential Reformed theologians of the sixteenth century. After Zwingli's death at Kappel (1531), the 27-year-old Bullinger assumed leadership of the Zurich church and held it for 44 years until his death.

Bullinger's influence extended far beyond Zurich through his vast correspondence (over 12,000 letters survive), his prolific writings, and his hospitality to Protestant refugees from across Europe. His Decades (collections of sermons) were required reading for English clergy and shaped English Reformed theology.

The Consensus Tigurinus (1549), which Bullinger negotiated with Calvin, united Zurich and Geneva on the Lord's Supper and laid foundations for Reformed unity. The Second Helvetic Confession (1566), which he authored, became the most widely adopted Reformed confession on the Continent.`,

      lifeStages: [
        {
          period: '1504-1531',
          title: 'Education and Early Ministry',
          description: 'Born in Bremgarten to a priest\'s family. Studied at Cologne where he discovered the church fathers and Luther\'s writings. Converted to Protestantism. Became teacher, then minister in Bremgarten.',
          keyEvents: [
            'Born July 18, 1504 in Bremgarten, Switzerland',
            'Sent to Cologne for education (1519)',
            'Read church fathers and Luther; converted (c. 1522)',
            'Returned to Switzerland (1523)',
            'Taught at Cistercian monastery of Kappel',
            'Ordained and succeeded father as pastor of Bremgarten (1529)',
            'Married Anna Adlischweiler (1529)',
            'Zwingli killed at Kappel (October 1531)'
          ],
          location: 'Bremgarten, Cologne, Kappel'
        },
        {
          period: '1531-1560',
          title: 'Leader of Zurich Reformation',
          description: 'Succeeded Zwingli as Antistes (chief pastor) of Zurich at age 27. Rebuilt the Reformed church after military defeat. Developed theology and maintained vast correspondence. Negotiated agreement with Calvin.',
          keyEvents: [
            'Called as Antistes of Zurich (December 1531)',
            'Rebuilt Reformed church after Kappel defeat',
            'Wrote First Helvetic Confession (1536)',
            'Published Decades (1549-1551)',
            'Negotiated Consensus Tigurinus with Calvin (1549)',
            'Welcomed Protestant refugees from across Europe',
            'Wife Anna died of plague (1564)',
            'Correspondence reached across Protestant Europe'
          ],
          location: 'Zurich'
        },
        {
          period: '1560-1575',
          title: 'Elder Statesman of the Reformation',
          description: 'Continued leadership in Zurich as Reformed movement\'s elder statesman. Wrote Second Helvetic Confession. Correspondence and influence reached new heights.',
          keyEvents: [
            'Survived plague that killed wife and three daughters (1564)',
            'Wrote Second Helvetic Confession (1566)',
            'Confession adopted by Reformed churches across Europe',
            'Continued prolific correspondence',
            'Mentored next generation of Reformed leaders',
            'Died September 17, 1575 in Zurich'
          ],
          location: 'Zurich'
        }
      ],

      legacy: `Bullinger's legacy is often underestimated because of Calvin's fame, but in his own century he was equally influential. His correspondence network made Zurich a hub of Reformed communication. The Second Helvetic Confession became the most widely adopted Reformed confession and remains in use today. His Decades shaped English Reformed theology more than any other Continental work. His covenant theology influenced Reformed federal theology for centuries. His hospitality to refugees—including Italian, French, and English Protestants—spread Reformed influence across Europe. The Consensus Tigurinus unified the Reformed movement on the sacraments. Bullinger modeled pastoral stability, serving one congregation for 44 years while influencing the entire Reformed world.`
    },

    majorWorks: [
      {
        id: 'decades',
        title: 'The Decades',
        originalTitle: 'Sermonum Decades quinque',
        year: '1549-1551',
        category: 'sermons',
        summary: `The Decades is a collection of 50 sermons covering the full range of Christian doctrine. Originally preached to Zurich's clergy, they became Bullinger's most widely read work.

The sermons cover the Word of God, faith and works, law and gospel, sacraments, and Christian life. They combine doctrinal clarity with pastoral application, making them ideal for clergy education.

English bishops required unlicensed clergy to read and summarize the Decades. Through this requirement, Bullinger's theology shaped a generation of English Reformed ministers more than any other Continental writer except Calvin.`,
        keyThemes: ['Systematic Theology', 'Pastoral Preaching', 'Reformed Doctrine', 'Christian Life'],
        significance: 'Required reading for English clergy; shaped English Reformed theology.',
        freeLinks: [
          { source: 'Archive.org', url: 'https://archive.org/details/decadesofhenrybu01bulluoft', format: 'PDF' },
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/bullinger/decades', format: 'HTML' }
        ]
      },
      {
        id: 'second-helvetic-confession',
        title: 'Second Helvetic Confession',
        originalTitle: 'Confessio Helvetica Posterior',
        year: '1566',
        category: 'major',
        summary: `The Second Helvetic Confession is Bullinger's mature statement of Reformed faith, written originally as his personal confession and testament. When Elector Frederick III of the Palatinate faced criticism for his Reformed faith, Bullinger offered this confession for public use.

The confession covers 30 articles on Scripture, God, providence, creation, fall, Christ, salvation, church, sacraments, and Christian life. It strikes a balance between precision and catholicity, avoiding unnecessary controversy while clearly stating Reformed doctrine.

Adopted by Reformed churches in Switzerland, France, Scotland, Hungary, Poland, and elsewhere, it became the most widely accepted Reformed confession on the Continent.`,
        keyThemes: ['Reformed Doctrine', 'Confessionalism', 'Church Unity', 'Scripture'],
        significance: 'Most widely adopted Continental Reformed confession; still in use today.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/creeds/helvetic.htm', format: 'HTML' },
          { source: 'Other', url: 'https://www.reformed.org/documents/2nd_helv.html', format: 'HTML', notes: 'Reformed.org' }
        ]
      },
      {
        id: 'one-eternal-covenant',
        title: 'A Brief Exposition of the One and Eternal Testament or Covenant of God',
        originalTitle: 'De Testamento seu Foedere Dei unico et aeterno',
        year: '1534',
        category: 'major',
        summary: `This work is one of the earliest systematic treatments of covenant theology. Bullinger argues that God has made one eternal covenant of grace with humanity, running from Adam through Christ.

Bullinger emphasizes the unity of the covenant across Old and New Testaments, the conditional nature of covenant promises (requiring faith and obedience), and the bilateral character of the covenant relationship.

This work influenced the development of Reformed covenant theology, though later formulations (especially the Westminster Standards) would distinguish more sharply between covenant of works and covenant of grace.`,
        keyThemes: ['Covenant Theology', 'Unity of Scripture', 'Salvation History', 'Faith and Works'],
        significance: 'Early systematic covenant theology; influenced later federal theology.',
        freeLinks: [
          { source: 'Archive.org', url: 'https://archive.org/details/briefe-exposition-one-eternal-testament', format: 'PDF' }
        ]
      }
    ],

    theologicalPositions: [
      {
        topic: 'scripture',
        position: 'Scripture alone is the authoritative Word of God, superior to all human traditions. Preaching the Word is itself the Word of God when faithfully proclaimed.',
        distinctives: [
          'Sola Scriptura: Scripture above tradition',
          'Preaching of Word is Word of God',
          'Clarity of Scripture for ordinary believers',
          'Scripture interprets Scripture'
        ],
        keyQuotes: [
          'The preaching of the Word of God is the Word of God.',
          'Scripture is clear enough for the faithful to understand.'
        ],
        scriptureReferences: ['2 Timothy 3:16', 'Romans 10:14-17', 'Hebrews 4:12', '2 Peter 1:20-21']
      },
      {
        topic: 'sacraments',
        position: 'Sacraments are signs and seals of God\'s covenant promises. Christ is truly present spiritually in the Lord\'s Supper, received by faith. Baptism is the sign of the covenant.',
        distinctives: [
          'Sacraments are covenant signs and seals',
          'Spiritual presence of Christ in Supper',
          'Faith is necessary for true reception',
          'Infant baptism as covenant sign (like circumcision)'
        ],
        keyQuotes: [
          'In the Supper, Christ is received truly, but spiritually, by faith.',
          'Sacraments are the signs and seals of God\'s covenant.'
        ],
        scriptureReferences: ['Romans 4:11', '1 Corinthians 10:16', 'Colossians 2:11-12', '1 Corinthians 11:23-26']
      },
      {
        topic: 'predestination',
        position: 'God has eternally chosen the elect for salvation. Predestination should be taught with pastoral care, emphasizing assurance and not speculation about the reprobate.',
        distinctives: [
          'Unconditional election in Christ',
          'Assurance from election, not anxiety',
          'Pastoral approach to doctrine',
          'Focus on Christ as mirror of election'
        ],
        keyQuotes: [
          'We are to seek our election in Christ, not in hidden decrees.',
          'Election is a doctrine of comfort, not terror.'
        ],
        scriptureReferences: ['Ephesians 1:4-6', 'Romans 8:28-30', 'John 10:27-29', '2 Thessalonians 2:13']
      }
    ],

    notableQuotes: [
      {
        id: 'preaching-word',
        text: 'The preaching of the Word of God is the Word of God.',
        source: 'Second Helvetic Confession',
        context: 'Bullinger\'s famous statement on the authority of preaching.',
        themes: ['scripture', 'ecclesiology']
      },
      {
        id: 'covenant-one',
        text: 'God made but one covenant with humanity, from Adam through Christ—the covenant of grace.',
        source: 'One and Eternal Testament',
        context: 'Bullinger on the unity of the covenant of grace.',
        themes: ['salvation', 'scripture']
      },
      {
        id: 'refugees-welcome',
        text: 'Christ\'s members are to be welcomed, regardless of their nation or tongue.',
        source: 'Various correspondence',
        context: 'Bullinger on hospitality to Protestant refugees.',
        themes: ['ecclesiology']
      }
    ],

    influences: ['luther'],
    influenced: ['calvin']
  },

  // ========================================
  // PETER MARTYR VERMIGLI
  // ========================================
  {
    id: 'vermigli',
    name: 'Vermigli',
    fullName: 'Peter Martyr Vermigli',
    lifespan: '1499-1562',
    birthYear: 1499,
    deathYear: 1562,
    tradition: 'reformation',
    tagline: 'Italian Reformer',

    biography: {
      overview: `Peter Martyr Vermigli was an Italian Augustinian friar who became one of the most respected Reformed theologians of his generation. His commentaries, particularly on Romans, were second only to Calvin's in influence. After his conversion to Protestantism, he fled Italy and served in Strasbourg, Oxford, and Zurich.

Vermigli combined deep learning in scholastic theology with commitment to Reformation principles. His ability to engage medieval theological traditions made his works particularly valuable for Protestant scholarship. At Oxford, he played a major role in shaping English Reformed theology.

His emphasis on predestination, the spiritual presence of Christ in the Supper, and the clarity of Scripture contributed significantly to Reformed theology. His Loci Communes, a systematic collection of his theological writings, was a standard Reformed textbook for over a century.`,

      lifeStages: [
        {
          period: '1499-1542',
          title: 'Augustinian Reformer in Italy',
          description: 'Born in Florence to a prominent family. Entered Augustinian order. Rose to positions of leadership while gradually embracing evangelical views. Led reforming circles in Italian monasteries.',
          keyEvents: [
            'Born September 8, 1499 in Florence',
            'Entered Augustinian order (1514)',
            'Ordained priest; studied at Padua',
            'Became abbot of Spoleto (1533)',
            'Read Zwingli and Bucer; embraced Reformed views',
            'Led reform circle at San Frediano, Lucca',
            'Prior of San Pietro ad Aram, Naples (1537)',
            'Inquisition pressures forced flight from Italy (1542)'
          ],
          location: 'Florence, Padua, Lucca, Naples'
        },
        {
          period: '1542-1553',
          title: 'Strasbourg and Oxford',
          description: 'Fled Italy for Protestant lands. Taught at Strasbourg alongside Bucer. Invited to England as Regius Professor at Oxford. Influenced English Reformation until Mary\'s accession.',
          keyEvents: [
            'Arrived in Strasbourg (1542)',
            'Taught Old Testament with Bucer',
            'Invited to England by Cranmer (1547)',
            'Regius Professor of Divinity at Oxford (1548)',
            'Debated eucharistic theology',
            'Published Romans commentary (1550)',
            'Wife Catherine Dammartin died (1553)',
            'Fled England upon Mary\'s accession (1553)'
          ],
          location: 'Strasbourg, Oxford'
        },
        {
          period: '1553-1562',
          title: 'Strasbourg and Zurich',
          description: 'Returned to Strasbourg briefly, then accepted chair at Zurich. Wrote major commentaries. Became colleague of Bullinger. Participated in theological disputes until death.',
          keyEvents: [
            'Returned to Strasbourg (1553)',
            'Accepted chair at Zurich (1556)',
            'Colleague of Bullinger',
            'Published commentaries on Judges, Samuel, Kings',
            'Participated in Colloquy of Poissy (1561)',
            'Died November 12, 1562 in Zurich',
            'Loci Communes published posthumously (1576)'
          ],
          location: 'Strasbourg, Zurich'
        }
      ],

      legacy: `Vermigli's legacy lies primarily in his biblical commentaries and systematic theology. His Romans commentary rivaled Calvin's in popularity and influence. The Loci Communes, compiled after his death from his commentaries, was a standard Reformed textbook through the seventeenth century. At Oxford, he shaped a generation of English Reformed theologians, and his eucharistic theology influenced the 1552 Prayer Book. His ability to engage scholastic theology critically yet constructively gave Reformed theology tools for academic respectability. Vermigli represents the broader Reformed tradition's international character—an Italian who served in Germany, England, and Switzerland, contributing to Reformed theology wherever he went.`
    },

    majorWorks: [
      {
        id: 'romans-commentary',
        title: 'Commentary on Romans',
        originalTitle: 'In Epistolam S. Pauli Apostoli ad Romanos Commentarii',
        year: '1550',
        category: 'commentary',
        summary: `Vermigli's Romans commentary, written at Oxford, became one of the most influential Reformation commentaries on Paul's epistle. It combines careful exegesis with extended theological excursuses.

The commentary includes substantial treatments of predestination, justification, and the relationship between law and gospel. Vermigli engages both patristic sources and medieval scholastics, making the work valuable for theological education.

Second only to Calvin's, this commentary shaped Reformed understanding of Romans for generations. Its extended loci (theological treatments) were later compiled into the Loci Communes.`,
        keyThemes: ['Justification', 'Predestination', 'Law and Gospel', 'Pauline Theology'],
        significance: 'Second most influential Reformation Romans commentary; shaped Reformed exegesis.',
        freeLinks: [
          { source: 'Archive.org', url: 'https://archive.org/details/mostsacredandlea00verm', format: 'PDF' }
        ]
      },
      {
        id: 'loci-communes',
        title: 'Common Places',
        originalTitle: 'Loci Communes',
        year: '1576 (posthumous)',
        category: 'major',
        summary: `The Loci Communes is a systematic collection of Vermigli's theological loci (topics) extracted from his commentaries. Compiled after his death by Robert Masson, it became a standard Reformed theological textbook.

The work covers all major doctrines: Scripture, God, creation, providence, sin, Christology, salvation, sacraments, and eschatology. It preserves Vermigli's careful engagement with scholastic theology and patristic sources.

English translations circulated widely, making Vermigli's theology accessible to clergy and educated laity. The work influenced Reformed orthodoxy well into the seventeenth century.`,
        keyThemes: ['Systematic Theology', 'Reformed Doctrine', 'Scripture', 'Scholasticism'],
        significance: 'Standard Reformed textbook for a century; shaped Reformed orthodoxy.',
        freeLinks: [
          { source: 'Archive.org', url: 'https://archive.org/details/commonplacesofmo00verm', format: 'PDF' }
        ]
      },
      {
        id: 'oxford-treatise-eucharist',
        title: 'Oxford Treatise on the Eucharist',
        year: '1549',
        category: 'major',
        summary: `This treatise was written for the Oxford disputation on the Eucharist. Vermigli defends the Reformed doctrine of spiritual presence against both transubstantiation and Lutheran corporeal presence.

Vermigli argues that Christ is truly received in the Supper, but spiritually by faith, not corporally. He engages patristic testimonies extensively, showing that the early church did not hold Roman or Lutheran views.

The treatise influenced English Reformed eucharistic theology and the 1552 revision of the Prayer Book. It remains valuable for its careful historical and theological argumentation.`,
        keyThemes: ['Eucharist', 'Spiritual Presence', 'Patristic Theology', 'Sacraments'],
        significance: 'Influential defense of Reformed eucharistic doctrine; shaped English theology.',
        freeLinks: [
          { source: 'Archive.org', url: 'https://archive.org/details/oxfordtreatisesa00verm', format: 'PDF' }
        ]
      }
    ],

    theologicalPositions: [
      {
        topic: 'predestination',
        position: 'God has eternally decreed the salvation of the elect and the condemnation of the reprobate. Predestination is the source of assurance for believers.',
        distinctives: [
          'Double predestination (election and reprobation)',
          'Predestination precedes foreseen faith or works',
          'Assurance grounded in God\'s eternal decree',
          'Scholastic precision in formulation'
        ],
        keyQuotes: [
          'God\'s eternal decree is the foundation of our salvation.',
          'In predestination we find the ground of all assurance.'
        ],
        scriptureReferences: ['Romans 9:10-24', 'Ephesians 1:4-11', 'Romans 8:28-30', '2 Timothy 1:9']
      },
      {
        topic: 'sacraments',
        position: 'In the Lord\'s Supper, believers truly feed on Christ\'s body and blood, but spiritually, not corporally. The sacraments are effectual means of grace for the elect.',
        distinctives: [
          'True spiritual feeding on Christ in the Supper',
          'Christ\'s body is in heaven, not locally present',
          'Faith receives what the sacrament offers',
          'Against both Rome and Luther on corporal presence'
        ],
        keyQuotes: [
          'We feed on Christ truly, really, but spiritually, by faith.',
          'Christ\'s body is in heaven; we are lifted to Him by the Spirit.'
        ],
        scriptureReferences: ['1 Corinthians 10:16', '1 Corinthians 11:23-26', 'John 6:53-58', 'Hebrews 10:12']
      },
      {
        topic: 'justification',
        position: 'Justification is by faith alone, through imputation of Christ\'s righteousness. Good works necessarily follow but do not contribute to justification.',
        distinctives: [
          'Justification by imputed righteousness alone',
          'Faith alone is instrument of justification',
          'Good works are fruit, not ground, of justification',
          'Double imputation: our sin to Christ, His righteousness to us'
        ],
        keyQuotes: [
          'We are justified by Christ\'s righteousness imputed to us, received by faith alone.',
          'Works follow justification as fruit follows the tree.'
        ],
        scriptureReferences: ['Romans 3:21-26', 'Romans 4:3-8', '2 Corinthians 5:21', 'Philippians 3:9']
      }
    ],

    notableQuotes: [
      {
        id: 'christ-righteousness',
        text: 'We are clothed with Christ\'s righteousness as with a garment; it is not our own but His, imputed to us.',
        source: 'Romans Commentary',
        context: 'Vermigli on imputed righteousness.',
        themes: ['justification', 'christology']
      },
      {
        id: 'spiritual-feeding',
        text: 'In the Supper we feed on Christ truly and really, yet spiritually and by faith.',
        source: 'Oxford Treatise',
        context: 'Vermigli on the Lord\'s Supper.',
        themes: ['sacraments']
      },
      {
        id: 'assurance-decree',
        text: 'Our assurance rests not on our fluctuating faith, but on God\'s unchangeable decree.',
        source: 'Romans Commentary',
        context: 'Vermigli on predestination and assurance.',
        themes: ['predestination', 'salvation']
      }
    ],

    influences: ['augustine', 'bucer', 'calvin'],
    influenced: []
  },

  // ========================================
  // JONATHAN EDWARDS
  // ========================================
  {
    id: 'edwards',
    name: 'Edwards',
    fullName: 'Jonathan Edwards',
    lifespan: '1703-1758',
    birthYear: 1703,
    deathYear: 1758,
    tradition: 'american_reformed',
    tagline: 'America\'s Theologian and Philosopher',

    biography: {
      overview: `Jonathan Edwards was America's greatest theologian and philosopher. Born in East Windsor, Connecticut, to a ministerial family, Edwards showed remarkable intellectual gifts from childhood. He entered Yale at age twelve and graduated valedictorian.

After brief ministries in New York and tutoring at Yale, Edwards became assistant to his grandfather Solomon Stoddard in Northampton, Massachusetts. There he led revivals that culminated in the Great Awakening of the 1740s. His sermon "Sinners in the Hands of an Angry God" remains the most famous sermon in American history.

Dismissed from Northampton in 1750 over a communion controversy, Edwards spent his final years as a missionary to Native Americans in Stockbridge, Massachusetts. There he wrote his greatest philosophical works. He died of smallpox shortly after becoming president of the College of New Jersey (Princeton) in 1758.`,

      lifeStages: [
        {
          period: '1703-1727',
          title: 'Education and Preparation',
          description: 'Born in East Windsor, Connecticut. Prodigy who entered Yale at twelve and graduated valedictorian. Conversion experience and pastoral beginnings.',
          keyEvents: [
            'Born October 5, 1703 in East Windsor',
            'Entered Yale College (1716)',
            'Conversion experience during Yale years',
            'BA (1720), MA (1723)',
            'Pastoral ministry in New York (1722-1723)',
            'Tutor at Yale (1724-1726)',
            'Married Sarah Pierrepont (1727)'
          ],
          location: 'East Windsor, New Haven, New York'
        },
        {
          period: '1727-1750',
          title: 'Northampton Ministry',
          description: 'Assistant to grandfather Solomon Stoddard, then sole pastor of Northampton. Led revivals, defended Great Awakening, became internationally known.',
          keyEvents: [
            'Assistant to Stoddard (1727)',
            'Became sole pastor (1729)',
            'First revivals in Northampton (1734-1735)',
            '"Sinners in the Hands of an Angry God" (1741)',
            'Great Awakening peak (1740-1742)',
            'Published Religious Affections (1746)',
            'Communion controversy and dismissal (1750)'
          ],
          location: 'Northampton, Massachusetts'
        },
        {
          period: '1751-1758',
          title: 'Stockbridge and Final Years',
          description: 'Missionary pastor to Native Americans. Wrote major philosophical works. Brief presidency of College of New Jersey before death.',
          keyEvents: [
            'Missionary pastor at Stockbridge (1751)',
            'Freedom of the Will (1754)',
            'Original Sin (1758)',
            'Elected president of College of New Jersey',
            'Died of smallpox inoculation (March 22, 1758)'
          ],
          location: 'Stockbridge, Princeton'
        }
      ],

      legacy: `Edwards' influence extends across theology, philosophy, and American religious history. His defense of Reformed theology in works like Freedom of the Will and Original Sin demonstrated that Calvinism could engage the best philosophical thought of the age. Religious Affections remains the classic treatment of true versus false spiritual experience. His vision of God's glory as the goal of creation shaped subsequent evangelical theology. Edwards inspired the New England Theology, the Second Great Awakening, and countless missionaries. Today he is recognized as America's premier theologian and philosopher, influencing thinkers from John Piper to George Marsden.`
    },

    majorWorks: [
      {
        id: 'religious-affections',
        title: 'A Treatise Concerning Religious Affections',
        year: '1746',
        category: 'major',
        summary: `Religious Affections addresses the central question of the Great Awakening: how can we distinguish true from false religion? Edwards argues that true religion consists in "holy affections"—not mere emotions but deep movements of the heart toward God.

The work examines twelve signs that neither prove nor disprove genuine grace, then presents twelve positive signs of truly gracious affections. The culminating sign is Christian practice: genuine grace produces a life of consistent obedience.

Edwards combines psychological insight with theological depth. He neither dismisses emotion nor makes it the test of faith. The affections—love, joy, hope, hatred of sin—are central to true religion when they flow from a genuine apprehension of divine things.`,
        keyThemes: ['True Religion', 'Affections', 'Discernment', 'Revival'],
        significance: 'Classic treatment of true vs. false spiritual experience; essential for evaluating religious claims.',
        freeLinks: [
          { source: 'Yale', url: 'http://edwards.yale.edu/archive?path=aHR0cDovL2Vkd2FyZHMueWFsZS5lZHUvY2dpLWJpbi9uZXdwaGlsby9nZXRvYmplY3QucGw/Yy4xOjEud2plbw==', format: 'HTML', notes: 'Jonathan Edwards Center at Yale' },
          { source: 'Monergism', url: 'https://www.monergism.com/religious-affections-ebook', format: 'ePub' },
          { source: 'Archive.org', url: 'https://archive.org/details/treatiseconcerni00edwa', format: 'PDF' }
        ]
      },
      {
        id: 'freedom-of-will',
        title: 'Freedom of the Will',
        year: '1754',
        category: 'major',
        summary: `Edwards' philosophical masterpiece answers Arminian claims that Calvinism denies human freedom and responsibility. Edwards distinguishes between natural ability (the power to act) and moral ability (the inclination to act rightly).

Edwards argues that the will always chooses according to the strongest motive and that God's sovereignty extends to human choices without destroying responsibility. True freedom is not random choice but the ability to act according to one's nature.

The work is a devastating critique of libertarian free will and a rigorous defense of compatibilist freedom. It remains one of the most important works in the history of philosophical theology.`,
        keyThemes: ['Free Will', 'Sovereignty', 'Determinism', 'Moral Responsibility'],
        significance: 'Philosophical defense of Reformed view of will; landmark in philosophy of action.',
        freeLinks: [
          { source: 'Yale', url: 'http://edwards.yale.edu/archive?path=aHR0cDovL2Vkd2FyZHMueWFsZS5lZHUvY2dpLWJpbi9uZXdwaGlsby9nZXRvYmplY3QucGw/Yy4xOjEud2plbw==', format: 'HTML' },
          { source: 'Monergism', url: 'https://www.monergism.com/freedom-will-ebook', format: 'ePub' },
          { source: 'Archive.org', url: 'https://archive.org/details/freedomofthewill00edwa', format: 'PDF' }
        ]
      },
      {
        id: 'end-of-creation',
        title: 'The End for Which God Created the World',
        year: '1765',
        category: 'major',
        summary: `Published posthumously, this treatise argues that God's ultimate purpose in creation is the manifestation of his own glory. God seeks his glory not from selfishness but because his glory is the highest good.

Edwards shows that God's glory and the good of creatures are not competing ends. As creatures behold God's glory, they are fulfilled and glorified. The communication of God's fullness to creation is the creature's good and God's glory.

This work, along with The Nature of True Virtue, represents Edwards' mature philosophical theology. It provides a God-centered framework for understanding all reality.`,
        keyThemes: ['Glory of God', 'Creation', 'Purpose', 'Divine Goodness'],
        significance: 'Comprehensive statement of theocentric worldview; foundation for Christian vision of reality.',
        freeLinks: [
          { source: 'Yale', url: 'http://edwards.yale.edu/archive?path=aHR0cDovL2Vkd2FyZHMueWFsZS5lZHUvY2dpLWJpbi9uZXdwaGlsby9nZXRvYmplY3QucGw/Yy4xOjEud2plbw==', format: 'HTML' },
          { source: 'Monergism', url: 'https://www.monergism.com/end-which-god-created-world-ebook', format: 'ePub' }
        ]
      },
      {
        id: 'sinners-hands',
        title: 'Sinners in the Hands of an Angry God',
        year: '1741',
        category: 'sermons',
        summary: `The most famous sermon in American history, preached at Enfield, Connecticut during the Great Awakening. Edwards depicts the precarious state of unconverted sinners suspended over hell by God's sovereign hand.

The sermon's power lies not in its vivid imagery of hell but in its portrayal of God's just wrath and patient restraint. Edwards aims to awaken the complacent to their danger and drive them to Christ.

Reports indicate the congregation was so affected that Edwards could not finish; people cried out in conviction. The sermon exemplifies Edwards' revival preaching method.`,
        keyThemes: ['Wrath of God', 'Judgment', 'Awakening', 'Conversion'],
        significance: 'Most famous sermon in American history; exemplary revival preaching.',
        freeLinks: [
          { source: 'Yale', url: 'http://edwards.yale.edu/archive?path=aHR0cDovL2Vkd2FyZHMueWFsZS5lZHUvY2dpLWJpbi9uZXdwaGlsby9nZXRvYmplY3QucGw/Yy4yMjoxNy53amVv', format: 'HTML' },
          { source: 'Gutenberg', url: 'https://www.gutenberg.org/ebooks/34632', format: 'ePub' },
          { source: 'Archive.org', url: 'https://archive.org/details/sinnersinhandso00edwa', format: 'PDF' }
        ]
      },
      {
        id: 'true-virtue',
        title: 'The Nature of True Virtue',
        year: '1765',
        category: 'major',
        summary: `Edwards argues that true virtue consists in love to Being in general—ultimately, love to God as the supreme Being. All other loves, if not grounded in love to God, are merely natural and not truly virtuous.

The work critiques secular moral philosophy, showing that without God as the foundation, ethics lacks ultimate grounding. Love to family or country, if not rooted in love to God, is ultimately self-love.

Edwards' ethical vision is radically theocentric. True virtue requires a new heart that loves what is truly lovely—and only God is infinitely lovely.`,
        keyThemes: ['Ethics', 'Love', 'Virtue', 'Beauty'],
        significance: 'Theocentric ethical theory; important for Christian philosophy.',
        freeLinks: [
          { source: 'Yale', url: 'http://edwards.yale.edu/archive?path=aHR0cDovL2Vkd2FyZHMueWFsZS5lZHUvY2dpLWJpbi9uZXdwaGlsby9nZXRvYmplY3QucGw/Yy4xOjEud2plbw==', format: 'HTML' },
          { source: 'Monergism', url: 'https://www.monergism.com/nature-true-virtue-ebook', format: 'ePub' }
        ]
      }
    ],

    theologicalPositions: [
      {
        topic: 'sovereignty',
        position: 'God exercises absolute sovereignty over all creation, including human wills. This sovereignty extends to salvation (election) and reprobation, and is the foundation of all comfort and hope.',
        distinctives: [
          'God determines all events, including human choices',
          'Divine sovereignty and human responsibility are compatible',
          'Election is unconditional and certain',
          'God\'s glory is the ultimate purpose of all things'
        ],
        keyQuotes: [
          'Absolute sovereignty is what I love to ascribe to God.',
          'God\'s sovereignty is the source of all our hope and comfort.'
        ],
        scriptureReferences: ['Romans 9:18-23', 'Ephesians 1:11', 'Daniel 4:35']
      },
      {
        topic: 'grace',
        position: 'Salvation is entirely by God\'s free grace. Grace is supernatural and efficacious, creating a new sense of divine things and genuine holy affections in the heart.',
        distinctives: [
          'Grace creates a new "spiritual sense" of divine things',
          'True grace produces holy affections, not mere notions',
          'The Spirit gives an immediate sense of God\'s excellence',
          'Grace is distinguishable by its fruits, especially love'
        ],
        keyQuotes: [
          'True religion, in great part, consists in holy affections.',
          'Grace is no other than the Spirit of God dwelling in the hearts of the saints.'
        ],
        scriptureReferences: ['Ephesians 2:8-9', '2 Corinthians 5:17', 'Galatians 5:22-23']
      },
      {
        topic: 'sin',
        position: 'Original sin corrupts all humanity from Adam. Humans are born with a sinful nature that makes them inclined only toward evil and incapable of any spiritual good without regenerating grace.',
        distinctives: [
          'All humans are born with corrupt nature from Adam',
          'Original sin involves both guilt and corruption',
          'The natural will is enslaved to sin',
          'Only supernatural regeneration enables spiritual good'
        ],
        keyQuotes: [
          'You contribute nothing to your salvation except the sin that made it necessary.'
        ],
        scriptureReferences: ['Romans 5:12-19', 'Ephesians 2:1-3', 'John 3:6']
      },
      {
        topic: 'salvation',
        position: 'God\'s ultimate end in salvation is the manifestation of His glory. The elect are saved by grace through faith, and true saving faith necessarily produces holy living.',
        distinctives: [
          'God\'s glory is the ultimate purpose of salvation',
          'True faith produces genuine transformation',
          'The new birth gives a spiritual "sense" of divine things',
          'Holy practice is the chief sign of genuine grace'
        ],
        keyQuotes: [
          'The enjoyment of God is the only happiness with which our souls can be satisfied.',
          'Grace is the seed of glory.'
        ],
        scriptureReferences: ['Ephesians 1:6', 'Romans 8:29-30', '2 Peter 1:3-4']
      }
    ],

    notableQuotes: [
      {
        id: 'resolved',
        text: 'Resolved, to live with all my might, while I do live.',
        source: 'Resolutions, Resolution 6',
        context: 'One of 70 resolutions Edwards wrote as a young man to guide his life.',
        themes: ['sanctification', 'sovereignty']
      },
      {
        id: 'glory-infinite',
        text: 'God is glorified not only by His glory\'s being seen, but by its being rejoiced in.',
        source: 'The End for Which God Created the World',
        context: 'Edwards\' understanding of how creation glorifies God.',
        themes: ['sovereignty', 'salvation']
      },
      {
        id: 'spider',
        text: 'The God that holds you over the pit of hell, much as one holds a spider, or some loathsome insect over the fire, abhors you.',
        source: 'Sinners in the Hands of an Angry God',
        context: 'Most famous line from his most famous sermon.',
        themes: ['sin', 'sovereignty']
      },
      {
        id: 'enjoyment-of-god',
        text: 'The enjoyment of God is the only happiness with which our souls can be satisfied.',
        source: 'The Christian Pilgrim',
        context: 'Edwards\' summary of true human happiness.',
        themes: ['salvation', 'grace']
      },
      {
        id: 'holy-affections',
        text: 'True religion, in great part, consists in holy affections.',
        source: 'Religious Affections',
        context: 'Opening thesis of his treatise on true religion.',
        themes: ['sanctification', 'grace']
      }
    ],

    influences: ['augustine', 'calvin', 'owen'],
    influenced: []
  },

  // ========================================
  // RICHARD BAXTER
  // ========================================
  {
    id: 'baxter',
    name: 'Baxter',
    fullName: 'Richard Baxter',
    lifespan: '1615-1691',
    birthYear: 1615,
    deathYear: 1691,
    tradition: 'puritan',
    tagline: 'Pastor of Pastors',

    biography: {
      overview: `Richard Baxter was one of the most influential English Puritan ministers and writers of the seventeenth century. Born in Rowton, Shropshire, to a family of modest means, Baxter was largely self-educated but became one of the most prolific authors in English Protestant history, producing over 130 books and treatises.

After his conversion in his late teens through reading Puritan devotional works, Baxter entered ministry and became the pastor of Kidderminster from 1641 to 1660 (with interruptions during the English Civil War). His parish ministry there became legendary; he transformed a town of largely nominal Christians into a community of genuine believers through catechetical instruction, pastoral visitation, and powerful preaching.

Baxter occupied a moderate position between Episcopalians and strict Nonconformists, always seeking Christian unity. After the Restoration, he was ejected from the Church of England and spent his remaining years preaching when possible, writing constantly, and enduring periodic imprisonment. His works on pastoral ministry, practical theology, and the Christian life remain treasured resources.`,

      lifeStages: [
        {
          period: '1615-1638',
          title: 'Youth and Conversion',
          description: 'Born in Rowton, Shropshire to a father who had experienced evangelical conversion. Largely self-educated due to poor health. Converted through reading Puritan books, especially Bunny\'s Resolution.',
          keyEvents: [
            'Born November 12, 1615 in Rowton',
            'Suffered from poor health throughout life',
            'Self-educated through voracious reading',
            'Converted through Puritan devotional literature',
            'Began considering ministry vocation'
          ],
          location: 'Rowton, Shropshire'
        },
        {
          period: '1638-1660',
          title: 'Ministry at Kidderminster',
          description: 'After brief curacies, became lecturer at Kidderminster in 1641. His nearly twenty-year ministry there (interrupted by Civil War chaplaincy) transformed the town and became a model of pastoral work.',
          keyEvents: [
            'Ordained (1638)',
            'Became lecturer at Kidderminster (1641)',
            'Served as chaplain in Parliamentary army (1642-1647)',
            'Declined bishopric at the Restoration',
            'Reformed Pastor published (1656)',
            'Saints\' Everlasting Rest published (1650)',
            'Call to the Unconverted published (1658)'
          ],
          location: 'Kidderminster, Worcestershire'
        },
        {
          period: '1660-1691',
          title: 'Ejection and Later Ministry',
          description: 'Ejected from Church of England after Act of Uniformity (1662). Continued writing, preaching when possible, and suffering persecution including imprisonment. Married Margaret Charlton in 1662.',
          keyEvents: [
            'Act of Uniformity forced ejection (1662)',
            'Married Margaret Charlton (1662)',
            'Imprisoned multiple times for nonconformist preaching',
            'Trial before Judge Jeffreys (1685)',
            'Margaret died (1681)',
            'Continued prolific writing until death',
            'Died December 8, 1691 in London'
          ],
          location: 'London, various'
        }
      ],

      legacy: `Baxter's legacy is immense and multifaceted. The Reformed Pastor remains the classic work on pastoral ministry, challenging generations of ministers to faithful, diligent care of souls. His Saints' Everlasting Rest pioneered the practice of meditation on heavenly things. His Call to the Unconverted was used to bring countless souls to Christ, including Philip Doddridge. Baxter's moderate Calvinism and irenic spirit influenced later evangelical leaders like Wesley and Whitefield. His example at Kidderminster demonstrated what faithful pastoral ministry could accomplish. Though his theological positions were sometimes controversial (particularly his "political" method of justification), his practical works remain universally valued. He wrote more books than most people read in a lifetime, and his influence on English-speaking Christianity continues unabated.`
    },

    majorWorks: [
      {
        id: 'reformed-pastor',
        title: 'The Reformed Pastor',
        year: '1656',
        category: 'major',
        summary: `The Reformed Pastor is Baxter's passionate plea for faithful pastoral ministry. Written to his fellow ministers in Worcestershire, it calls pastors to practice catechetical instruction and personal pastoral oversight of every family in their congregations.

By "reformed" Baxter means "revived" or "renewed"—he is calling for a reformation in pastoral practice. The work is structured around Acts 20:28: "Take heed therefore unto yourselves, and to all the flock." Baxter insists that ministers must first examine their own hearts, then diligently tend every soul under their care.

The work is characterized by urgent, searching application. Baxter lays bare pastoral negligence and calls ministers to account for their stewardship. He describes his own practice at Kidderminster of catechizing families and urges every minister to do likewise.`,
        keyThemes: ['Pastoral Ministry', 'Catechizing', 'Self-Examination', 'Pastoral Care'],
        significance: 'The classic work on pastoral ministry; has shaped ministerial practice for centuries.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/baxter/pastor', format: 'HTML' },
          { source: 'Monergism', url: 'https://www.monergism.com/reformed-pastor-ebook', format: 'ePub' },
          { source: 'Archive.org', url: 'https://archive.org/details/reformedpastor00baxt', format: 'PDF' }
        ]
      },
      {
        id: 'saints-everlasting-rest',
        title: 'The Saints\' Everlasting Rest',
        year: '1650',
        category: 'major',
        summary: `Written during a serious illness when Baxter thought he was dying, The Saints' Everlasting Rest is a massive treatise on heaven and the practice of heavenly meditation. Baxter was convinced that Christians rarely meditated on their eternal hope and that this neglect impoverished their spiritual lives.

The work expounds the nature of heavenly rest, proves its existence, examines who will enjoy it, and most importantly, teaches the "duty" of heavenly meditation. Baxter provides detailed practical guidance on how to set the heart on heaven through disciplined contemplation.

This work pioneered a form of spiritual practice that influenced generations of believers. Its emphasis on meditation as a means of grace and its practical instructions made heavenly-mindedness accessible to ordinary Christians.`,
        keyThemes: ['Heaven', 'Meditation', 'Christian Hope', 'Practical Spirituality'],
        significance: 'Classic treatment of heavenly meditation; pioneered practical devotional guidance.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/baxter/saints_rest', format: 'HTML' },
          { source: 'Archive.org', url: 'https://archive.org/details/sainteverlasting00baxt', format: 'PDF' },
          { source: 'Monergism', url: 'https://www.monergism.com/saints-everlasting-rest-ebook', format: 'ePub' }
        ]
      },
      {
        id: 'call-unconverted',
        title: 'A Call to the Unconverted',
        year: '1658',
        category: 'major',
        summary: `A Call to the Unconverted is Baxter's urgent evangelistic appeal to those outside of Christ. Based on Ezekiel 33:11 ("Turn ye, turn ye, why will ye die?"), the work presses upon sinners the necessity of conversion and the madness of delay.

Baxter addresses every excuse for remaining unconverted, pleads with sinners to consider their danger, and urges immediate repentance. The work combines logical argument, emotional appeal, and pastoral urgency in a powerful evangelistic whole.

This work had enormous impact. It was instrumental in the conversion of Philip Doddridge, who in turn influenced many others. It was translated into multiple languages and used by missionaries worldwide. Its direct, urgent style became a model for evangelical appeals.`,
        keyThemes: ['Evangelism', 'Conversion', 'Repentance', 'Urgency'],
        significance: 'One of the most effective evangelistic treatises ever written; led to countless conversions.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/baxter/call', format: 'HTML' },
          { source: 'Archive.org', url: 'https://archive.org/details/calltounconverte00baxt', format: 'PDF' },
          { source: 'Monergism', url: 'https://www.monergism.com/call-unconverted-ebook', format: 'ePub' }
        ]
      },
      {
        id: 'christian-directory',
        title: 'A Christian Directory',
        year: '1673',
        category: 'major',
        summary: `A Christian Directory is Baxter's massive practical theology—a comprehensive guide to Christian ethics and the duties of the Christian life. Covering private duties, family duties, church duties, and duties to neighbors and the state, it addresses virtually every aspect of moral and spiritual life.

The work runs to over a million words and represents the most comprehensive treatment of Christian ethics in Puritan literature. Baxter brings his characteristic thoroughness and practical wisdom to bear on questions of conscience, relationships, vocation, and society.

While too massive for most readers to work through entirely, the Directory remains a treasury of practical wisdom. Specific sections on particular duties continue to be mined by pastors and Christians seeking guidance on complex moral questions.`,
        keyThemes: ['Christian Ethics', 'Practical Theology', 'Christian Life', 'Casuistry'],
        significance: 'Most comprehensive Puritan treatment of Christian ethics; treasury of practical wisdom.',
        freeLinks: [
          { source: 'Archive.org', url: 'https://archive.org/details/christiandirecto01baxt', format: 'PDF' },
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/baxter/practical', format: 'HTML', notes: 'Partial' }
        ]
      },
      {
        id: 'dying-thoughts',
        title: 'Dying Thoughts',
        year: '1683',
        category: 'major',
        summary: `Written when Baxter believed death was near (though he lived eight more years), Dying Thoughts is his meditation on facing death as a Christian. The work combines personal reflection, biblical exposition, and practical counsel on preparing for eternity.

Baxter examines the reasons why a Christian should desire heaven, addresses fears about death, and provides guidance on how to die well. The work is marked by characteristic self-examination and honest wrestling with doubt and fear.

Dying Thoughts reveals the experiential side of Baxter's piety. Written for himself as much as others, it shows how he applied his own teaching when facing the ultimate test.`,
        keyThemes: ['Death', 'Heaven', 'Preparation', 'Christian Hope'],
        significance: 'Classic treatment of dying well; personal and practical guidance for facing death.',
        freeLinks: [
          { source: 'Archive.org', url: 'https://archive.org/details/dyingthoughts00baxt', format: 'PDF' },
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/baxter/dying', format: 'HTML' }
        ]
      }
    ],

    theologicalPositions: [
      {
        topic: 'salvation',
        position: 'Baxter held a moderate position between strict Calvinism and Arminianism, sometimes called "Baxterianism." He emphasized that Christ died for all in some sense, making salvation available, while only the elect actually receive it.',
        distinctives: [
          'Universal redemption in its satisfaction, particular in its application',
          'Faith as a condition of the new covenant, not mere instrument',
          'Emphasized human responsibility in responding to grace',
          'His "political" or "governmental" view of atonement was controversial'
        ],
        keyQuotes: [
          'I am neither for the Arminians nor against them in every point.',
          'Christ died for all, but not equally for all; for the elect effectually.'
        ],
        scriptureReferences: ['1 Timothy 2:4', '2 Corinthians 5:19', 'John 3:16', 'Romans 8:29-30']
      },
      {
        topic: 'sanctification',
        position: 'Sanctification is the progressive work of God in the believer, requiring active human participation and the diligent use of means. Christians must practice the spiritual disciplines, especially meditation and self-examination.',
        distinctives: [
          'Emphasis on practical holiness and the use of means',
          'Meditation on heaven as essential spiritual discipline',
          'Self-examination and pastoral accountability',
          'Integration of doctrine and practice'
        ],
        keyQuotes: [
          'Spend your time in nothing which you know must be repented of.',
          'Keep up a constant watch over your hearts.'
        ],
        scriptureReferences: ['Philippians 2:12-13', 'Hebrews 12:14', '2 Peter 1:5-8', '2 Corinthians 7:1']
      },
      {
        topic: 'ecclesiology',
        position: 'Baxter sought unity among Protestant churches and advocated a modified episcopacy that could include both episcopalians and presbyterians. He emphasized the pastoral nature of ministry over mere institutional structures.',
        distinctives: [
          'Irenic approach seeking Protestant unity',
          'Preferred "reduced episcopacy" combining episcopal and presbyterian elements',
          'Emphasis on pastoral ministry over polity',
          'Local church as the primary locus of ministry'
        ],
        keyQuotes: [
          'In necessary things, unity; in doubtful things, liberty; in all things, charity.',
          'Unity in things necessary, liberty in things unnecessary, and charity in all.'
        ],
        scriptureReferences: ['Ephesians 4:3-6', 'John 17:21', '1 Corinthians 1:10']
      }
    ],

    notableQuotes: [
      {
        id: 'spend-time',
        text: 'Spend your time in nothing which you know must be repented of; in nothing on which you might not pray for the blessing of God; in nothing which you could not review with a quiet conscience on your dying bed.',
        source: 'A Christian Directory',
        context: 'Baxter\'s counsel on using time wisely in light of eternity.',
        themes: ['sanctification', 'eschatology']
      },
      {
        id: 'preach-dying',
        text: 'I preached, as never sure to preach again, and as a dying man to dying men.',
        source: 'Poetical Fragments',
        context: 'Baxter\'s famous description of his urgent preaching.',
        themes: ['salvation', 'eschatology']
      },
      {
        id: 'unity-charity',
        text: 'In necessary things, unity; in doubtful things, liberty; in all things, charity.',
        source: 'Attributed to Baxter, though origin uncertain',
        context: 'Summarizes Baxter\'s irenic spirit and desire for Christian unity.',
        themes: ['ecclesiology', 'grace']
      },
      {
        id: 'killing-sin',
        text: 'Take heed of the beginnings of sin. It is easier to crush the egg than kill the serpent.',
        source: 'A Christian Directory',
        context: 'Baxter\'s counsel on mortifying sin at its beginning.',
        themes: ['sanctification', 'sin']
      },
      {
        id: 'heavenly-meditation',
        text: 'A heavenly mind is a joyful mind; this is the nearest and truest way to live a life of comfort.',
        source: 'The Saints\' Everlasting Rest',
        context: 'Baxter connecting heavenly-mindedness with present joy.',
        themes: ['sanctification', 'eschatology']
      }
    ],

    influences: ['calvin', 'owen'],
    influenced: ['whitefield', 'edwards']
  },

  // ========================================
  // GEORGE WHITEFIELD
  // ========================================
  {
    id: 'whitefield',
    name: 'Whitefield',
    fullName: 'George Whitefield',
    lifespan: '1714-1770',
    birthYear: 1714,
    deathYear: 1770,
    tradition: 'great_awakening',
    tagline: 'Grand Itinerant of the Great Awakening',

    biography: {
      overview: `George Whitefield was the most famous preacher of the eighteenth century and a central figure in the Great Awakening on both sides of the Atlantic. Born in Gloucester, England, the son of an innkeeper, Whitefield experienced evangelical conversion at Oxford in 1735 through association with the Wesley brothers' "Holy Club."

Ordained in the Church of England, Whitefield quickly discovered his remarkable gift for preaching. When pulpits were closed to him due to his enthusiastic style, he pioneered outdoor field preaching, drawing crowds of tens of thousands. His voice, described as like a trumpet, could be heard by massive audiences without amplification. Benjamin Franklin calculated that Whitefield could be heard by 30,000 people.

Whitefield made seven voyages to America, where his preaching sparked the Great Awakening, uniting the colonies in a shared religious experience. Unlike the Wesleys, Whitefield remained a convinced Calvinist throughout his life, which eventually led to a break with John Wesley over predestination. He established an orphanage in Georgia, trained numerous evangelists, and preached an estimated 18,000 sermons before his death in Newburyport, Massachusetts, in 1770.`,

      lifeStages: [
        {
          period: '1714-1735',
          title: 'Youth and Conversion',
          description: 'Born in Gloucester to a family of innkeepers. Educated at St. Mary de Crypt School and then Pembroke College, Oxford as a servitor. Joined the Wesleys\' Holy Club and experienced dramatic conversion.',
          keyEvents: [
            'Born December 16, 1714 in Gloucester',
            'Father died when George was two years old',
            'Entered Pembroke College, Oxford (1732)',
            'Joined the Holy Club and met the Wesleys',
            'Experienced conversion in Lent 1735',
            'Read Henry Scougal\'s "Life of God in the Soul of Man"'
          ],
          location: 'Gloucester, Oxford'
        },
        {
          period: '1736-1741',
          title: 'Early Ministry and America',
          description: 'Ordained deacon and priest in Church of England. Began open-air preaching. First voyage to America. Returned to spark revival in Britain and colonial America.',
          keyEvents: [
            'Ordained deacon in Church of England (1736)',
            'First voyage to Georgia (1738)',
            'Began open-air preaching at Kingswood (1739)',
            'Founded Bethesda Orphanage in Georgia',
            'Second American tour sparked Great Awakening (1739-1741)',
            'Broke with John Wesley over predestination (1741)'
          ],
          location: 'England, Wales, Scotland, American colonies'
        },
        {
          period: '1741-1770',
          title: 'Transatlantic Ministry',
          description: 'Continued itinerant ministry on both sides of the Atlantic. Made seven voyages to America. Served as chaplain to Selina, Countess of Huntingdon. Preached until his death.',
          keyEvents: [
            'Married Elizabeth James (1741)',
            'Associated with Countess of Huntingdon\'s Connexion',
            'Made seven voyages to America (1738-1770)',
            'Preached estimated 18,000 sermons',
            'Elizabeth Whitefield died (1768)',
            'Died September 30, 1770 in Newburyport, Massachusetts'
          ],
          location: 'England, Scotland, Wales, American colonies'
        }
      ],

      legacy: `Whitefield's legacy is immense. He was the first truly international celebrity, known on both sides of the Atlantic. His preaching method—dramatic, emotional, extemporaneous—revolutionized Protestant evangelism. He pioneered open-air preaching, cross-denominational cooperation, and the use of print media for religious purposes. The Great Awakening he helped spark was the first mass movement in American history, creating a shared religious culture that transcended colonial boundaries. His Calvinistic Methodism influenced the development of evangelicalism, and his example inspired later evangelists from Charles Finney to Billy Graham. Though he held slaves and supported slavery (a grave moral failure), his preaching crossed racial boundaries and laid groundwork for later African American Christianity. Whitefield showed that Reformed theology could be combined with fervent evangelistic zeal.`
    },

    majorWorks: [
      {
        id: 'journals',
        title: 'Journals',
        year: '1738-1756',
        category: 'major',
        summary: `Whitefield's Journals document his extensive travels, preaching ministry, and spiritual reflections. Published in stages throughout his ministry, they provide firsthand accounts of the revivals in England, Wales, Scotland, and America.

The Journals reveal Whitefield's passionate spirituality, his preaching methods, and his experiences during the Great Awakening. They include descriptions of his conversion, his open-air preaching, his orphanage work in Georgia, and his controversies with other ministers.

While sometimes edited for publication, the Journals remain essential sources for understanding the evangelical revivals of the eighteenth century and Whitefield's role in them.`,
        keyThemes: ['Revival', 'Preaching', 'Conversion', 'Evangelism'],
        significance: 'Primary source for the Great Awakening; reveals Whitefield\'s ministry methods.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/whitefield/journals', format: 'HTML' },
          { source: 'Archive.org', url: 'https://archive.org/details/journalsofrevge01whitgoog', format: 'PDF' },
          { source: 'Monergism', url: 'https://www.monergism.com/whitefield-journals-ebook', format: 'ePub' }
        ]
      },
      {
        id: 'sermons-whitefield',
        title: 'Sermons',
        year: '1737-1770',
        category: 'sermons',
        summary: `Whitefield's published sermons represent only a fraction of his estimated 18,000 sermons, but they capture his powerful preaching style. His sermons are marked by dramatic delivery, direct appeals to the heart, clear exposition of doctrine, and urgent calls for conversion.

Famous sermons include "The Method of Grace," "The Kingdom of God," "The Lord Our Righteousness," and "The Almost Christian." These sermons combine Calvinistic doctrine with warm evangelistic appeal—Whitefield could move from theological exposition to passionate pleading in a single sentence.

Reading Whitefield's sermons gives only a partial sense of their original power. Contemporaries testified that much of their effect came from Whitefield's voice, gestures, and tears—elements that cannot be captured in print.`,
        keyThemes: ['Evangelism', 'New Birth', 'Grace', 'Christ'],
        significance: 'Model of evangelical preaching; combined doctrine with passionate appeal.',
        freeLinks: [
          { source: 'Monergism', url: 'https://www.monergism.com/topics/sermons/george-whitefield', format: 'HTML' },
          { source: 'Archive.org', url: 'https://archive.org/details/selectsermonsofg00whit', format: 'PDF' },
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/whitefield/sermons', format: 'HTML' }
        ]
      },
      {
        id: 'letters-whitefield',
        title: 'Letters',
        year: '1734-1770',
        category: 'letters',
        summary: `Whitefield's extensive correspondence reveals the personal side of this public figure. His letters show his pastoral concern, his organizational abilities, his theological convictions, and his relationships with other evangelical leaders.

The letters document his friendships and tensions with the Wesleys, his correspondence with colonial leaders like Benjamin Franklin, his work for the Bethesda Orphanage, and his constant efforts to promote revival. They reveal both his strengths (passion, generosity, warmth) and his weaknesses (occasional impetuosity, controversies, blind spots on slavery).

These letters are essential for understanding the networks of friendship and cooperation that sustained the evangelical revival movement.`,
        keyThemes: ['Ministry', 'Friendship', 'Revival', 'Theology'],
        significance: 'Reveals personal side of ministry; documents evangelical networks.',
        freeLinks: [
          { source: 'Archive.org', url: 'https://archive.org/details/worksofrevegeowh01whitgoog', format: 'PDF' }
        ]
      },
      {
        id: 'method-of-grace',
        title: 'The Method of Grace',
        year: '1740',
        category: 'sermons',
        summary: `"The Method of Grace" is perhaps Whitefield's most famous sermon. Based on Jeremiah 6:14 ("They have healed also the hurt of the daughter of my people slightly, saying, Peace, peace; when there is no peace"), it attacks false assurance and calls hearers to true saving faith.

Whitefield argues that many comfort themselves with a false peace, trusting in external religion rather than genuine conversion. He describes the marks of true grace and urges hearers to examine themselves. The sermon culminates in a passionate appeal for hearers to close with Christ.

This sermon exemplifies Whitefield's preaching method: clear doctrinal content, searching application, and fervent appeal.`,
        keyThemes: ['Conversion', 'Self-Examination', 'False Assurance', 'Grace'],
        significance: 'Classic evangelical sermon; model of searching application.',
        freeLinks: [
          { source: 'Monergism', url: 'https://www.monergism.com/method-grace', format: 'HTML' },
          { source: 'Archive.org', url: 'https://archive.org/details/methodofgraceser00whit', format: 'PDF' }
        ]
      }
    ],

    theologicalPositions: [
      {
        topic: 'salvation',
        position: 'Whitefield held firmly to Calvinistic soteriology—salvation is entirely by grace, through faith, based on God\'s eternal election. He emphasized the necessity of the new birth as the essential mark of genuine Christianity.',
        distinctives: [
          'Strongly Calvinistic on predestination and election',
          'Emphasized the absolute necessity of the new birth',
          'Faith alone as instrument of justification',
          'Combined Reformed doctrine with evangelistic fervor'
        ],
        keyQuotes: [
          'I embrace the Calvinistic scheme, not because Calvin, but Jesus Christ has taught it to me.',
          'You must be born again, or you will be damned forever.'
        ],
        scriptureReferences: ['John 3:3-7', 'Ephesians 2:8-9', 'Romans 8:29-30', 'Acts 13:48']
      },
      {
        topic: 'predestination',
        position: 'Whitefield maintained the doctrine of unconditional election against the Wesleys. He taught that God has chosen some to salvation from eternity, and that this doctrine, far from hindering evangelism, provides its only sure foundation.',
        distinctives: [
          'Unconditional election based solely on God\'s will',
          'Particular redemption—Christ died savingly for the elect',
          'Effectual calling—the elect certainly come to faith',
          'Perseverance of the saints—true believers cannot fall away'
        ],
        keyQuotes: [
          'We are all born Arminians by nature; it is grace that turns us into Calvinists.',
          'I am content to wait till the day of judgment for the clearing up of the doctrine of election.'
        ],
        scriptureReferences: ['Romans 9:10-24', 'Ephesians 1:4-5', 'John 6:37-44', 'Romans 8:33']
      },
      {
        topic: 'grace',
        position: 'Grace is sovereign, free, and effectual. God initiates salvation, regenerates the heart, and brings sinners to faith. Human effort contributes nothing to salvation; all is of grace.',
        distinctives: [
          'Grace precedes and produces faith',
          'Regeneration is the work of the Spirit, not human decision',
          'Grace is free—available to all who hear the gospel',
          'Grace is effectual—accomplishes God\'s saving purpose'
        ],
        keyQuotes: [
          'Free grace, free grace, through all the work must run.',
          'Jesus Christ has done all; the full price has been paid.'
        ],
        scriptureReferences: ['Ephesians 2:4-5', 'Titus 3:5', 'John 1:12-13', 'Romans 9:16']
      }
    ],

    notableQuotes: [
      {
        id: 'born-again-damned',
        text: 'You must be born again, or you will be damned forever.',
        source: 'Sermons',
        context: 'Whitefield\'s characteristic urgency in calling sinners to conversion.',
        themes: ['salvation', 'sin']
      },
      {
        id: 'thousand-tongues',
        text: 'I could hardly keep from crying out, "O that I had a thousand tongues to praise my Lord!"',
        source: 'Journals',
        context: 'Whitefield\'s response to his conversion experience.',
        themes: ['grace', 'salvation']
      },
      {
        id: 'calvinists-by-grace',
        text: 'We are all born Arminians by nature; it is grace that turns us into Calvinists.',
        source: 'Attributed',
        context: 'Whitefield\'s view that Reformed theology is the fruit of grace.',
        themes: ['predestination', 'grace']
      },
      {
        id: 'weary-well-doing',
        text: 'I am never better than when I am on the full stretch for God.',
        source: 'Letters',
        context: 'Whitefield\'s tireless devotion to preaching.',
        themes: ['sanctification', 'sovereignty']
      },
      {
        id: 'preach-again',
        text: 'I would rather wear out than rust out.',
        source: 'Attributed',
        context: 'Whitefield\'s commitment to ministry until his death.',
        themes: ['sanctification', 'sovereignty']
      }
    ],

    influences: ['calvin', 'baxter', 'edwards'],
    influenced: ['spurgeon']
  },

  // ========================================
  // CHARLES SPURGEON
  // ========================================
  {
    id: 'spurgeon',
    name: 'Spurgeon',
    fullName: 'Charles Haddon Spurgeon',
    lifespan: '1834-1892',
    birthYear: 1834,
    deathYear: 1892,
    tradition: 'great_awakening',
    tagline: 'The Prince of Preachers',

    biography: {
      overview: `Charles Haddon Spurgeon was the most influential Baptist preacher of the nineteenth century and remains one of the most widely read preachers in history. Born in Kelvedon, Essex, to a family of Independent ministers, Spurgeon was converted at age fifteen when a snowstorm forced him into a Primitive Methodist chapel where an untrained layman preached on Isaiah 45:22.

By age nineteen, Spurgeon was called to pastor the New Park Street Chapel in London, where his powerful preaching quickly filled the building and necessitated moves to larger venues. In 1861, the Metropolitan Tabernacle was built to accommodate the crowds—it seated 5,000 and was regularly filled. Spurgeon preached to an estimated 10 million people during his lifetime, and his weekly sermons were published and distributed worldwide.

Beyond preaching, Spurgeon founded a Pastor's College (now Spurgeon's College), an orphanage, and numerous other institutions. His theological convictions were firmly Calvinistic, leading him to oppose the "Downgrade Controversy" when liberalism infiltrated Baptist churches. Despite chronic illness and depression (which he openly discussed), Spurgeon maintained his ministry until his death in Mentone, France, in 1892.`,

      lifeStages: [
        {
          period: '1834-1850',
          title: 'Childhood and Conversion',
          description: 'Born in Kelvedon, Essex, to a family of Congregationalist ministers. Raised by grandparents during early years. Voracious reader from childhood. Converted at age fifteen during a snowstorm.',
          keyEvents: [
            'Born June 19, 1834 in Kelvedon, Essex',
            'Raised by grandparents at Stambourne',
            'Read Pilgrim\'s Progress repeatedly as a child',
            'Struggled under conviction of sin for years',
            'Converted January 6, 1850 in Artillery Street Chapel',
            'Baptized in the River Lark (1850)'
          ],
          location: 'Kelvedon, Stambourne, Colchester'
        },
        {
          period: '1851-1860',
          title: 'Early Ministry',
          description: 'Began preaching as a teenager. Became pastor of Waterbeach Baptist Chapel at seventeen. Called to New Park Street Chapel in London at nineteen. Rapid growth necessitated larger buildings.',
          keyEvents: [
            'Became teacher at Newmarket (1850)',
            'Began preaching at Waterbeach (1851)',
            'Called to New Park Street Chapel, London (1854)',
            'Married Susannah Thompson (1856)',
            'Surrey Gardens Music Hall disaster (1856)',
            'Twin sons Charles and Thomas born (1856)',
            'Preached to largest indoor crowd in history'
          ],
          location: 'Waterbeach, London'
        },
        {
          period: '1861-1892',
          title: 'Metropolitan Tabernacle Ministry',
          description: 'Ministry at the newly built Metropolitan Tabernacle. Founded numerous institutions. Weathered controversy and illness. Continued preaching and publishing until death.',
          keyEvents: [
            'Metropolitan Tabernacle opened (1861)',
            'Founded Pastor\'s College (1856, expanded)',
            'Founded Stockwell Orphanage (1867)',
            'Weekly sermons published worldwide',
            'Downgrade Controversy (1887)',
            'Withdrew from Baptist Union (1887)',
            'Died January 31, 1892 in Mentone, France'
          ],
          location: 'London, Mentone (France)'
        }
      ],

      legacy: `Spurgeon's influence continues unabated more than a century after his death. His published sermons fill 63 volumes and remain in print, making him the most published preacher in history. His Treasury of David (commentary on Psalms) and Morning and Evening devotional are still widely used. His Pastor's College trained generations of ministers in Calvinistic Baptist principles. His courageous stand in the Downgrade Controversy, though costly, demonstrated the importance of theological faithfulness. Spurgeon modeled how Reformed theology could be combined with evangelistic passion, charitable institutions, and warm personal piety. He openly discussed his struggles with depression, providing comfort to Christians who face similar battles. Called "the last of the Puritans," Spurgeon successfully mediated Puritan theology to Victorian England and continues to speak to readers worldwide.`
    },

    majorWorks: [
      {
        id: 'sermons-spurgeon',
        title: 'Metropolitan Tabernacle Pulpit',
        year: '1855-1917',
        category: 'sermons',
        summary: `The Metropolitan Tabernacle Pulpit contains nearly 3,600 sermons preached by Spurgeon, published weekly during and after his ministry. This massive collection represents the largest body of sermons by any single preacher in history.

Spurgeon preached without notes from a brief outline, and his sermons were transcribed by stenographers and published each Thursday. The sermons cover virtually every biblical book and theological topic, combining doctrinal depth with vivid illustration, practical application, and evangelistic appeal.

These sermons have been reprinted continuously and remain a treasury for preachers and laypeople alike. Their combination of Reformed theology, literary quality, and pastoral warmth makes them uniquely valuable.`,
        keyThemes: ['Gospel Preaching', 'Calvinism', 'Christ', 'Practical Christianity'],
        significance: 'Largest body of sermons by any preacher; remains in continuous publication.',
        freeLinks: [
          { source: 'Archive.org', url: 'https://archive.org/details/metropolitantabe01spur', format: 'PDF' },
          { source: 'Monergism', url: 'https://www.monergism.com/topics/sermons/charles-spurgeon', format: 'HTML' },
          { source: 'Other', url: 'https://www.spurgeon.org/resource-library/sermons/', format: 'HTML', notes: 'Spurgeon Center' }
        ]
      },
      {
        id: 'treasury-of-david',
        title: 'The Treasury of David',
        year: '1869-1885',
        category: 'commentary',
        summary: `The Treasury of David is Spurgeon's monumental seven-volume commentary on the Psalms, produced over twenty years. It combines Spurgeon's own expositions with carefully selected quotations from other commentators throughout church history.

Each psalm receives thorough treatment: an introduction, verse-by-verse exposition, "explanatory notes and quaint sayings" from other authors, and "hints to preachers" for homiletical application. The result is both a commentary and a compendium of devotional literature on the Psalms.

Spurgeon considered this his most important literary work. It remains a standard reference for pastors and a beloved devotional resource for laypeople.`,
        keyThemes: ['Psalms', 'Worship', 'Prayer', 'Christian Experience'],
        significance: 'Classic commentary on Psalms; combines exposition with devotional treasury.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/spurgeon/treasury', format: 'HTML' },
          { source: 'Archive.org', url: 'https://archive.org/details/treasuryofdavid01spur', format: 'PDF' },
          { source: 'Other', url: 'https://www.spurgeon.org/resource-library/treasury-of-david/', format: 'HTML', notes: 'Spurgeon Center' }
        ]
      },
      {
        id: 'morning-evening',
        title: 'Morning and Evening',
        year: '1865',
        category: 'major',
        summary: `Morning and Evening is Spurgeon's daily devotional, providing a meditation for the morning and evening of each day of the year. Each entry is based on a Scripture text and offers brief but rich spiritual nourishment.

The devotionals reflect Spurgeon's characteristic combination of doctrinal content, practical application, and warm spirituality. They cover the full range of Christian experience—conversion, sanctification, trial, comfort, worship, and service.

This devotional has remained in continuous publication since 1865 and continues to be one of the most widely used Christian devotionals. It has introduced millions of readers to Spurgeon's ministry.`,
        keyThemes: ['Devotion', 'Scripture Meditation', 'Christian Life', 'Prayer'],
        significance: 'One of the most widely used Christian devotionals; introduces readers to Spurgeon.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/spurgeon/morneve', format: 'HTML' },
          { source: 'Archive.org', url: 'https://archive.org/details/morningeveningda00spuruoft', format: 'PDF' },
          { source: 'Gutenberg', url: 'https://www.gutenberg.org/ebooks/39977', format: 'ePub' }
        ]
      },
      {
        id: 'all-of-grace',
        title: 'All of Grace',
        year: '1886',
        category: 'major',
        summary: `All of Grace is Spurgeon's simple, direct presentation of the gospel intended for seekers and new believers. Written in accessible language, it explains salvation by grace through faith with characteristic clarity and warmth.

The book addresses common questions and objections: Can I really be saved? Is salvation free? What must I do? How can I come to Christ? Spurgeon answers with Scripture, illustration, and personal testimony.

This book has been translated into numerous languages and distributed by the millions. It remains one of the most effective evangelistic tools in the Christian treasury.`,
        keyThemes: ['Gospel', 'Grace', 'Faith', 'Evangelism'],
        significance: 'Classic evangelistic book; has led countless readers to faith in Christ.',
        freeLinks: [
          { source: 'Monergism', url: 'https://www.monergism.com/all-grace-ebook', format: 'ePub' },
          { source: 'Archive.org', url: 'https://archive.org/details/allofgrace00spuruoft', format: 'PDF' },
          { source: 'Gutenberg', url: 'https://www.gutenberg.org/ebooks/16456', format: 'HTML' }
        ]
      },
      {
        id: 'lectures-to-students',
        title: 'Lectures to My Students',
        year: '1875-1894',
        category: 'major',
        summary: `Lectures to My Students collects Spurgeon's Friday afternoon talks to students at his Pastor's College. Covering every aspect of pastoral ministry—from prayer to sermon preparation to pastoral visitation—the lectures combine practical wisdom with spiritual depth.

Famous lectures include "The Minister's Self-Watch," "Attention" (on keeping hearers awake), "The Faculty of Impromptu Speech," and "Illustrations in Preaching." Spurgeon's humor, humanity, and pastoral heart shine throughout.

These lectures remain required reading for seminary students and are continually rediscovered by new generations of pastors.`,
        keyThemes: ['Pastoral Ministry', 'Preaching', 'Spiritual Life', 'Ministry'],
        significance: 'Classic on pastoral ministry; required reading for preachers.',
        freeLinks: [
          { source: 'Archive.org', url: 'https://archive.org/details/lecturestomystud01spur', format: 'PDF' },
          { source: 'Monergism', url: 'https://www.monergism.com/lectures-my-students-ebook', format: 'ePub' },
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/spurgeon/lectures', format: 'HTML' }
        ]
      }
    ],

    theologicalPositions: [
      {
        topic: 'salvation',
        position: 'Spurgeon held firmly to Calvinistic soteriology, emphasizing that salvation is wholly of grace. He preached both divine sovereignty in election and human responsibility to repent and believe.',
        distinctives: [
          'Five-point Calvinist who emphasized evangelism',
          'Salvation by grace alone through faith alone',
          'Divine sovereignty and human responsibility held together',
          'Offered the gospel freely to all while maintaining election'
        ],
        keyQuotes: [
          'I am never ashamed to avow myself a Calvinist; I do not hesitate to take the name of Baptist.',
          'If God would have painted a yellow stripe on the backs of the elect I would go around lifting shirts. But since He didn\'t I must preach "Whosoever Will" and offer the Elect the gospel.'
        ],
        scriptureReferences: ['Ephesians 2:8-9', 'John 6:37', 'Romans 9:16', 'Acts 16:31']
      },
      {
        topic: 'scripture',
        position: 'Scripture is the inspired, inerrant Word of God, the sole authority for faith and practice. Spurgeon vigorously defended biblical authority against emerging liberalism.',
        distinctives: [
          'Full verbal inspiration and inerrancy',
          'Scripture is sufficient for all matters of faith and practice',
          'Strongly opposed higher criticism and theological liberalism',
          'Left the Baptist Union over doctrinal compromise (Downgrade Controversy)'
        ],
        keyQuotes: [
          'The Word of God is like a lion. You don\'t have to defend a lion. All you have to do is let the lion loose, and the lion will defend itself.',
          'If the foundations be removed, what can the righteous do?'
        ],
        scriptureReferences: ['2 Timothy 3:16', 'Isaiah 40:8', 'Psalm 119:89', 'Matthew 5:18']
      },
      {
        topic: 'grace',
        position: 'Grace is free, sovereign, and effectual. God\'s grace precedes, accomplishes, and secures salvation. All glory belongs to God alone.',
        distinctives: [
          'Emphasized irresistible grace while freely offering the gospel',
          'Grace produces genuine transformation',
          'Perseverance of the saints—true believers will persevere',
          'Grace motivates holiness, not license'
        ],
        keyQuotes: [
          'Free grace can go into the gutter and bring up a jewel.',
          'Grace grows best in winter.'
        ],
        scriptureReferences: ['Ephesians 2:4-5', 'Titus 2:11-14', 'Romans 5:20-21', '2 Corinthians 12:9']
      },
      {
        topic: 'christology',
        position: 'Christ is the center of all Scripture and all preaching. Spurgeon believed every sermon should lead to Christ and his cross.',
        distinctives: [
          'Christ-centered preaching from every text',
          'The cross as the central message',
          'Full deity and humanity of Christ',
          'Christ as the only mediator between God and man'
        ],
        keyQuotes: [
          'I take my text and make a beeline to the cross.',
          'A sermon without Christ is not a Christian sermon.'
        ],
        scriptureReferences: ['1 Corinthians 2:2', 'John 5:39', 'Colossians 1:18', 'Acts 4:12']
      }
    ],

    notableQuotes: [
      {
        id: 'beeline-cross',
        text: 'I take my text and make a beeline to the cross.',
        source: 'Lectures to My Students',
        context: 'Spurgeon\'s commitment to Christ-centered preaching.',
        themes: ['christology', 'scripture']
      },
      {
        id: 'lion-loose',
        text: 'The Word of God is like a lion. You don\'t have to defend a lion. All you have to do is let the lion loose, and the lion will defend itself.',
        source: 'Sermon, 1875',
        context: 'Spurgeon\'s confidence in the power of Scripture.',
        themes: ['scripture', 'sovereignty']
      },
      {
        id: 'calvinist-baptist',
        text: 'I am never ashamed to avow myself a Calvinist; I do not hesitate to take the name of Baptist.',
        source: 'Defense of Calvinism',
        context: 'Spurgeon\'s clear theological identity.',
        themes: ['predestination', 'salvation']
      },
      {
        id: 'free-grace-gutter',
        text: 'Free grace can go into the gutter and bring up a jewel.',
        source: 'Sermons',
        context: 'Spurgeon\'s confidence in the power of grace to save the worst sinner.',
        themes: ['grace', 'salvation']
      },
      {
        id: 'depression-blessing',
        text: 'I have learned to kiss the wave that throws me against the Rock of Ages.',
        source: 'Attributed',
        context: 'Spurgeon\'s response to suffering and depression.',
        themes: ['providence', 'sanctification']
      }
    ],

    influences: ['calvin', 'bunyan', 'whitefield', 'owen'],
    influenced: []
  },

  // ========================================
  // GEORGE MUELLER
  // ========================================
  {
    id: 'mueller',
    name: 'Mueller',
    fullName: 'George Mueller',
    lifespan: '1805-1898',
    birthYear: 1805,
    deathYear: 1898,
    tradition: 'great_awakening',
    tagline: 'Apostle of Faith',

    biography: {
      overview: `George Mueller was a German-born British evangelist and philanthropist whose life of prayer and faith became a living demonstration of God's faithfulness. Born in Prussia, Mueller lived a dissolute youth until his conversion at age twenty through a Pietist Bible study. He moved to England to train for missionary work and eventually settled in Bristol, where he would spend most of his life.

Mueller is best known for establishing orphanages that cared for over 10,000 orphans during his lifetime, all without ever directly requesting funds or going into debt. He relied entirely on prayer, trusting God to supply every need. His detailed journals record thousands of specific answers to prayer—food arriving at the exact moment of need, money coming unexpectedly to pay bills, and countless other provisions.

Beyond the orphanages, Mueller supported hundreds of missionaries, distributed millions of Bibles and tracts, and established schools. In his later years, he undertook extensive preaching tours, traveling over 200,000 miles and preaching to an estimated three million people. His life remains an enduring testimony to the power of believing prayer.`,

      lifeStages: [
        {
          period: '1805-1825',
          title: 'Youth and Conversion',
          description: 'Born in Prussia to a tax collector. Lived dissolute youth including theft, lying, and gambling. Converted at age twenty through a Pietist Bible study at Halle University.',
          keyEvents: [
            'Born September 27, 1805 in Kroppenstedt, Prussia',
            'Enrolled at Halle University to prepare for ministry (1825)',
            'Attended Pietist Bible study and converted (November 1825)',
            'Began intense study of Scripture and prayer',
            'Sensed call to missionary work among Jews'
          ],
          location: 'Prussia, Halle'
        },
        {
          period: '1826-1835',
          title: 'Early Ministry in England',
          description: 'Moved to London for missionary training. Married Mary Groves. Became associated with the Plymouth Brethren. Began pastoral ministry in Teignmouth, then Bristol.',
          keyEvents: [
            'Moved to London for London Missionary Society (1829)',
            'Left the Society to trust God alone for support',
            'Married Mary Groves (1830)',
            'Pastoral ministry in Teignmouth (1830-1832)',
            'Moved to Bristol (1832)',
            'Founded Scriptural Knowledge Institution (1834)'
          ],
          location: 'London, Teignmouth, Bristol'
        },
        {
          period: '1836-1875',
          title: 'Orphan Houses',
          description: 'Established and expanded orphan ministry in Bristol, eventually caring for thousands of children in five large houses on Ashley Down. Supported entirely by prayer.',
          keyEvents: [
            'First orphan house opened (1836)',
            'Began building on Ashley Down (1849)',
            'Five orphan houses eventually built',
            'Over 10,000 orphans cared for during his lifetime',
            'Mary Mueller died (1870)',
            'Married Susannah Sangar (1871)'
          ],
          location: 'Bristol'
        },
        {
          period: '1875-1898',
          title: 'Preaching Tours',
          description: 'After delegating orphanage leadership, undertook extensive preaching tours throughout Europe, America, Asia, and Australia. Continued ministry until death at age ninety-two.',
          keyEvents: [
            'Began preaching tours (1875)',
            'Traveled over 200,000 miles',
            'Preached to estimated 3 million people',
            'Visited 42 countries',
            'Susannah Mueller died (1894)',
            'Died March 10, 1898 in Bristol'
          ],
          location: 'Worldwide, Bristol'
        }
      ],

      legacy: `Mueller's legacy centers on his demonstration that God answers believing prayer. His meticulous journals, published as "Narratives," document thousands of specific answers to prayer and continue to inspire Christians to trust God for material provision. The orphanages he founded cared for over 10,000 children and pioneered modern child welfare practices. His financial principles—never requesting money, never going into debt, always trusting God—challenged the church's reliance on worldly methods. Mueller influenced countless missionaries and faith organizations, including Hudson Taylor and the China Inland Mission. His life demonstrated that Calvinistic theology (which he firmly held) is fully compatible with fervent prayer and confident expectation. Mueller remains one of the most compelling examples of a life lived by faith.`
    },

    majorWorks: [
      {
        id: 'narratives',
        title: 'A Narrative of Some of the Lord\'s Dealings with George Mueller',
        year: '1837-1886',
        category: 'major',
        summary: `Mueller's Narratives comprise his spiritual autobiography and detailed journals of his orphan ministry. Published in multiple volumes over decades, they record thousands of specific answers to prayer with dates, amounts, and circumstances.

The Narratives document the founding and expansion of the orphan houses, the countless times provision arrived at the moment of need, and Mueller's principles of faith and prayer. They provide the primary source for understanding both his life and his spiritual methods.

These volumes became immensely influential, inspiring Christians worldwide to trust God for material provision. They continue to be reprinted and read as testimonies to God's faithfulness.`,
        keyThemes: ['Prayer', 'Faith', 'Providence', 'Testimony'],
        significance: 'Primary source for Mueller\'s life; documents thousands of answered prayers.',
        freeLinks: [
          { source: 'Archive.org', url: 'https://archive.org/details/narrativeofsomel01muel', format: 'PDF' },
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/mueller/narrative', format: 'HTML' },
          { source: 'Gutenberg', url: 'https://www.gutenberg.org/ebooks/44889', format: 'ePub' }
        ]
      },
      {
        id: 'answers-prayer',
        title: 'Answers to Prayer',
        year: '1895',
        category: 'major',
        summary: `Answers to Prayer is a compilation of notable instances of answered prayer from Mueller's journals, arranged topically. It provides accessible entry into Mueller's prayer life without requiring readers to work through the full Narratives.

The book includes examples of provision for the orphanages, conversions of individuals, answers to prayer for health, guidance, and spiritual matters. Each account includes specific details—dates, amounts, circumstances—that substantiate Mueller's claims.

This work has been widely reprinted and remains a popular introduction to Mueller's testimony.`,
        keyThemes: ['Prayer', 'Faith', 'Testimony', 'Providence'],
        significance: 'Accessible compilation of Mueller\'s prayer testimonies.',
        freeLinks: [
          { source: 'Archive.org', url: 'https://archive.org/details/answerstoprayerf00muelgoog', format: 'PDF' },
          { source: 'Monergism', url: 'https://www.monergism.com/answers-prayer-george-mueller', format: 'HTML' }
        ]
      },
      {
        id: 'life-trust',
        title: 'The Life of Trust',
        year: '1873',
        category: 'major',
        summary: `The Life of Trust is an American edition of Mueller's Narratives edited by H. Lincoln Wayland, condensing the material and adding biographical introduction. It was widely distributed in America and introduced many to Mueller's testimony.

The book covers Mueller's conversion, his principles of faith, and selected accounts from the orphan ministry. It emphasizes the spiritual principles underlying Mueller's methods rather than merely the remarkable providences.

This edition was instrumental in spreading Mueller's influence in America and remains available in various reprints.`,
        keyThemes: ['Faith', 'Prayer', 'Providence', 'Stewardship'],
        significance: 'Condensed American edition that spread Mueller\'s influence widely.',
        freeLinks: [
          { source: 'Archive.org', url: 'https://archive.org/details/lifeoftrust00muelgoog', format: 'PDF' },
          { source: 'Gutenberg', url: 'https://www.gutenberg.org/ebooks/11449', format: 'HTML' }
        ]
      },
      {
        id: 'soul-nourishment',
        title: 'Soul Nourishment First',
        year: 'c. 1841',
        category: 'minor',
        summary: `Soul Nourishment First is Mueller's brief but influential tract on the devotional life. He describes how he came to prioritize meditating on Scripture in the morning before attending to other duties, finding that this practice transformed his spiritual life.

Mueller contrasts "running through" Scripture with truly meditating on it until the soul is fed. He emphasizes that the purpose of devotions is not primarily prayer requests but communion with God through His Word.

This short tract has been widely reprinted and continues to influence Christians seeking to deepen their devotional practice.`,
        keyThemes: ['Devotion', 'Scripture', 'Prayer', 'Spiritual Life'],
        significance: 'Influential teaching on devotional practice; widely reprinted.',
        freeLinks: [
          { source: 'Other', url: 'https://www.desiringgod.org/articles/george-mullers-strategy-for-showing-god', format: 'HTML', notes: 'Summary at Desiring God' }
        ]
      }
    ],

    theologicalPositions: [
      {
        topic: 'providence',
        position: 'God sovereignly provides for His children\'s needs in answer to believing prayer. Christians should trust God for material provision rather than relying on worldly methods.',
        distinctives: [
          'God provides in answer to specific, believing prayer',
          'Never solicit funds or make needs known except to God',
          'Never incur debt—if God doesn\'t provide, wait',
          'Record answers to prayer as testimonies to God\'s faithfulness'
        ],
        keyQuotes: [
          'The beginning of anxiety is the end of faith, and the beginning of true faith is the end of anxiety.',
          'It is not enough to begin to pray, but it is absolutely necessary to continue in prayer.'
        ],
        scriptureReferences: ['Matthew 6:25-34', 'Philippians 4:6-7', 'Philippians 4:19', 'James 1:5-8']
      },
      {
        topic: 'sovereignty',
        position: 'Mueller held firmly to Reformed theology, believing in God\'s sovereign election and predestination. He saw this doctrine as the foundation for confident prayer—because God is sovereign, prayer can be effective.',
        distinctives: [
          'Unconditional election and particular redemption',
          'Divine sovereignty grounds confidence in prayer',
          'God\'s promises in Scripture are sure foundation for faith',
          'Sovereignty and human responsibility held together'
        ],
        keyQuotes: [
          'I believe in the doctrines of grace, and yet I believe in the duty of using means.',
          'The first great primary business to which I ought to attend every day is to have my soul happy in the Lord.'
        ],
        scriptureReferences: ['Ephesians 1:4-5', 'Romans 8:28-30', 'Romans 9:16', 'Philippians 2:13']
      },
      {
        topic: 'scripture',
        position: 'Scripture is the inspired Word of God and the foundation for faith. Mueller meditated on Scripture daily, expecting God to speak through His Word and provide direction for life and ministry.',
        distinctives: [
          'Scripture is God\'s voice to His children',
          'Meditation on Scripture is essential to spiritual health',
          'God\'s promises in Scripture are the basis for prayer',
          'Scripture should be read devotionally for soul nourishment'
        ],
        keyQuotes: [
          'I saw more clearly than ever that the first great and primary business to which I ought to attend every day was to have my soul happy in the Lord.',
          'The vigor of our spiritual life will be in exact proportion to the place held by the Bible in our life and thoughts.'
        ],
        scriptureReferences: ['Psalm 1:2', 'Psalm 119:105', '2 Timothy 3:16', 'Joshua 1:8']
      }
    ],

    notableQuotes: [
      {
        id: 'anxiety-faith',
        text: 'The beginning of anxiety is the end of faith, and the beginning of true faith is the end of anxiety.',
        source: 'Attributed',
        context: 'Mueller\'s teaching on the relationship between faith and worry.',
        themes: ['providence', 'grace']
      },
      {
        id: 'continue-prayer',
        text: 'It is not enough to begin to pray, nor to pray aright; nor is it enough to continue for a time to pray; but we must patiently, believingly, continue in prayer until we obtain an answer.',
        source: 'Narratives',
        context: 'Mueller\'s emphasis on persevering prayer.',
        themes: ['providence', 'sanctification']
      },
      {
        id: 'soul-happy',
        text: 'I saw more clearly than ever that the first great and primary business to which I ought to attend every day was to have my soul happy in the Lord.',
        source: 'Narratives',
        context: 'Mueller\'s breakthrough in understanding devotional priorities.',
        themes: ['scripture', 'sanctification']
      },
      {
        id: 'god-delights',
        text: 'God delights to increase the faith of His children. He does this by trying our faith and by putting us in circumstances that reveal our weaknesses.',
        source: 'Narratives',
        context: 'Mueller\'s view of trials as means of growing faith.',
        themes: ['providence', 'sovereignty']
      },
      {
        id: 'no-debt',
        text: 'I never go into debt for anything. If I have not the money to pay for a thing, I do not get it.',
        source: 'Narratives',
        context: 'Mueller\'s principle of avoiding debt.',
        themes: ['providence', 'sanctification']
      }
    ],

    influences: ['whitefield', 'bunyan'],
    influenced: []
  },

  // ========================================
  // ATHANASIUS OF ALEXANDRIA
  // ========================================
  {
    id: 'athanasius',
    name: 'Athanasius',
    fullName: 'Athanasius of Alexandria',
    lifespan: '296-373 AD',
    birthYear: 296,
    deathYear: 373,
    tradition: 'early_church',
    tagline: 'Defender of Nicene Orthodoxy',

    biography: {
      overview: `Athanasius of Alexandria was the most important defender of Trinitarian orthodoxy in the fourth century and one of the most influential theologians in church history. Born in Alexandria, Egypt, he rose to prominence as a young deacon at the Council of Nicaea (325 AD), where he assisted his bishop Alexander in opposing the Arian heresy that denied Christ's full deity.

As bishop of Alexandria for 45 years (328-373), Athanasius faced relentless opposition from Arian emperors and bishops. He was exiled five times totaling seventeen years, earning him the epithet "Athanasius contra mundum" (Athanasius against the world). Despite persecution, imprisonment, and threats to his life, he never wavered in defending the Nicene faith that the Son is "homoousios" (of the same substance) with the Father.

His theological works, especially "On the Incarnation" and his orations "Against the Arians," established the orthodox understanding of Christ's divinity and the Trinity. His "Life of Antony" popularized monasticism throughout the Christian world. Athanasius demonstrated that theological controversy, rightly engaged, is essential to preserving the gospel.`,

      lifeStages: [
        {
          period: '296-328',
          title: 'Youth and Rise to Prominence',
          description: 'Born in Alexandria. Received classical and theological education. Became secretary to Bishop Alexander. Attended Council of Nicaea as a deacon and distinguished himself against Arianism.',
          keyEvents: [
            'Born c. 296-298 in Alexandria, Egypt',
            'Became secretary to Bishop Alexander',
            'Attended Council of Nicaea (325)',
            'Assisted in opposing Arius and formulating Nicene Creed',
            'Wrote early works including "On the Incarnation"',
            'Became Bishop of Alexandria (328)'
          ],
          location: 'Alexandria, Nicaea'
        },
        {
          period: '328-356',
          title: 'Early Episcopate and Exiles',
          description: 'First period as bishop marked by conflicts with Arians, three exiles, vindication at Council of Sardica, and defense of Nicene faith against powerful opponents.',
          keyEvents: [
            'First exile to Trier (335-337)',
            'Second exile to Rome (339-346)',
            'Defended by Council of Sardica (343)',
            'Returned to Alexandria (346)',
            'Third exile (356-362) fled to desert monks',
            'Wrote "History of the Arians"'
          ],
          location: 'Alexandria, Trier, Rome, Egyptian desert'
        },
        {
          period: '356-373',
          title: 'Later Ministry and Death',
          description: 'Continued defense of orthodoxy despite further exiles. Supported emerging pro-Nicene consensus. Died in Alexandria having seen orthodoxy largely vindicated.',
          keyEvents: [
            'Fourth exile under Julian (362-363)',
            'Fifth exile under Valens (365-366)',
            'Final years of relative peace',
            'Supported Cappadocian Fathers\' theology',
            'Died May 2, 373 in Alexandria',
            'Vindicated at Council of Constantinople (381)'
          ],
          location: 'Alexandria, various'
        }
      ],

      legacy: `Athanasius's legacy is incalculable for the history of Christian orthodoxy. His unwavering defense of Christ's full deity preserved the Nicene faith through its darkest period. The formula he championed—that the Son is "of the same substance" (homoousios) as the Father—became the touchstone of Trinitarian orthodoxy. His theological insight that only God can save, and therefore Christ must be fully God, provided the soteriological foundation for Nicene theology. His "Life of Antony" shaped Christian monasticism for centuries. His Easter letter of 367 is the first document listing the exact 27 books of the New Testament canon. Athanasius demonstrated that defending correct doctrine, even at great personal cost, is essential to preserving the gospel. The entire church—Eastern and Western, Catholic and Protestant—honors him as a pillar of orthodoxy.`
    },

    majorWorks: [
      {
        id: 'on-the-incarnation',
        title: 'On the Incarnation',
        originalTitle: 'De Incarnatione Verbi Dei',
        year: 'c. 318',
        category: 'major',
        summary: `On the Incarnation is Athanasius's masterpiece on the theology of Christ's becoming human. Written when Athanasius was still a young man (probably in his twenties), it demonstrates remarkable theological maturity and has been treasured for centuries.

The work argues that the Incarnation was necessary because of humanity's fall into sin and death. Only the Logos (Word) of God, who created humanity, could restore it. By taking human nature, Christ conquered death from within, making immortality available to all who believe.

Athanasius emphasizes that the Incarnation reveals God: "He became man that we might become god" (theosis). This famous statement summarizes the Eastern understanding of salvation as deification—union with God through Christ's assumption of human nature. C.S. Lewis wrote a famous introduction to a modern translation.`,
        keyThemes: ['Incarnation', 'Salvation', 'Christology', 'Death and Resurrection'],
        significance: 'Classic statement of incarnational theology; foundational for Christology.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/athanasius/incarnation', format: 'HTML' },
          { source: 'Archive.org', url: 'https://archive.org/details/onincarnationofs00atha', format: 'PDF' },
          { source: 'Other', url: 'https://www.newadvent.org/fathers/2802.htm', format: 'HTML', notes: 'New Advent' }
        ]
      },
      {
        id: 'orations-against-arians',
        title: 'Orations Against the Arians',
        originalTitle: 'Orationes contra Arianos',
        year: 'c. 339-343',
        category: 'major',
        summary: `The Orations Against the Arians is Athanasius's most comprehensive refutation of Arianism. Written during his second exile in Rome, these three (or four) discourses systematically dismantle Arian arguments and establish the full deity of the Son.

Athanasius addresses the Arian slogan "there was when he was not" by demonstrating from Scripture that the Son is eternally begotten, not created. He shows that calling Christ a creature undermines salvation itself—for only God can save, and worship of a creature is idolatry.

The Orations established the exegetical and theological framework for pro-Nicene theology. Their arguments shaped subsequent Trinitarian thought in both East and West.`,
        keyThemes: ['Trinity', 'Christology', 'Arianism', 'Scripture'],
        significance: 'Definitive refutation of Arianism; established pro-Nicene theology.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/schaff/npnf204.xxi.html', format: 'HTML' },
          { source: 'Other', url: 'https://www.newadvent.org/fathers/2816.htm', format: 'HTML', notes: 'New Advent' }
        ]
      },
      {
        id: 'life-of-antony',
        title: 'Life of Antony',
        originalTitle: 'Vita Antonii',
        year: 'c. 360',
        category: 'major',
        summary: `The Life of Antony is Athanasius's biography of Antony the Great, the Egyptian hermit considered the father of monasticism. Written shortly after Antony's death, it became one of the most influential texts in Christian history.

The work describes Antony's renunciation of the world, his battles with demons in the desert, his spiritual wisdom, and his miracles. It presents the ascetic life as the ideal form of Christian discipleship and the desert as the new arena of spiritual combat.

The Life of Antony shaped the development of monasticism throughout the Christian world. It influenced Augustine's conversion (recounted in the Confessions) and inspired countless men and women to pursue the monastic life.`,
        keyThemes: ['Monasticism', 'Spiritual Warfare', 'Asceticism', 'Holiness'],
        significance: 'Foundational text for Christian monasticism; immensely influential.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/schaff/npnf204.xxi.ii.html', format: 'HTML' },
          { source: 'Archive.org', url: 'https://archive.org/details/lifeofantony00atharich', format: 'PDF' },
          { source: 'Other', url: 'https://www.newadvent.org/fathers/2811.htm', format: 'HTML', notes: 'New Advent' }
        ]
      },
      {
        id: 'festal-letters',
        title: 'Festal Letters',
        year: '328-373',
        category: 'letters',
        summary: `The Festal Letters are Athanasius's annual letters to the churches announcing the date of Easter and providing pastoral instruction. Written throughout his episcopate, they provide insight into his pastoral concerns and theological development.

Most significant is the Festal Letter of 367, which contains the first list of exactly the 27 books of the New Testament as recognized today. Athanasius distinguishes canonical Scripture from useful but non-canonical writings.

The Festal Letters reveal Athanasius as pastor and practical theologian, not merely controversialist. They address Christian living, spiritual warfare, and the church's relationship to the world.`,
        keyThemes: ['Scripture', 'Pastoral Care', 'Church Calendar', 'Canon'],
        significance: 'First complete list of NT canon (367); reveals pastoral ministry.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/schaff/npnf204.xxv.html', format: 'HTML' },
          { source: 'Other', url: 'https://www.newadvent.org/fathers/2806.htm', format: 'HTML', notes: 'New Advent' }
        ]
      }
    ],

    theologicalPositions: [
      {
        topic: 'trinity',
        position: 'The Son is "of the same substance" (homoousios) as the Father—fully and eternally divine. The Trinity is one God in three persons, co-equal and co-eternal.',
        distinctives: [
          'Homoousios: Son is same substance as Father',
          'Son is eternally begotten, not created',
          'Father and Son share one divine nature',
          'The Spirit is also fully divine (later developed)'
        ],
        keyQuotes: [
          'The Son is not a creature but proper to the Father\'s substance.',
          'There never was when he was not.'
        ],
        scriptureReferences: ['John 1:1-3', 'John 10:30', 'John 14:9', 'Colossians 1:15-17']
      },
      {
        topic: 'christology',
        position: 'Christ is fully God and fully man. The Logos assumed human nature to restore humanity to communion with God. Only God incarnate could accomplish salvation.',
        distinctives: [
          'The Logos (Word) became flesh—true Incarnation',
          'Christ has two natures in one person',
          'Only God can save; therefore Christ must be God',
          'Salvation is union with God through Christ'
        ],
        keyQuotes: [
          'He became man that we might become god.',
          'The Word was made man in order that we might be made divine.'
        ],
        scriptureReferences: ['John 1:14', 'Philippians 2:5-11', 'Hebrews 2:14-17', '2 Peter 1:4']
      },
      {
        topic: 'salvation',
        position: 'Salvation is rescue from death and corruption through union with Christ. By the Incarnation, death, and resurrection of the God-man, humanity is restored to immortality and communion with God.',
        distinctives: [
          'Salvation is theosis—becoming partakers of divine nature',
          'Christ conquered death by dying',
          'The Incarnation itself is salvific',
          'Only the Creator could re-create fallen humanity'
        ],
        keyQuotes: [
          'For he was made man that we might be made God.',
          'Death has been destroyed by the Savior on the cross.'
        ],
        scriptureReferences: ['Romans 6:9', '1 Corinthians 15:54-57', '2 Corinthians 5:21', '2 Peter 1:4']
      }
    ],

    notableQuotes: [
      {
        id: 'became-man',
        text: 'He became man that we might become god.',
        source: 'On the Incarnation',
        context: 'Athanasius\'s famous summary of the purpose of the Incarnation.',
        themes: ['christology', 'salvation']
      },
      {
        id: 'word-made-flesh',
        text: 'The Word was not degraded by receiving a body, but rather deified what he put on.',
        source: 'On the Incarnation',
        context: 'Athanasius defending the dignity of the Incarnation.',
        themes: ['christology', 'salvation']
      },
      {
        id: 'contra-mundum',
        text: 'If the world is against Athanasius, then Athanasius is against the world.',
        source: 'Attributed, though likely later formulation',
        context: 'Expressing Athanasius\'s steadfast defense of orthodoxy against majority opposition.',
        themes: ['sovereignty', 'scripture']
      },
      {
        id: 'death-destroyed',
        text: 'For by the sacrifice of his own body he both put an end to the law which was against us and made a new beginning of life for us.',
        source: 'On the Incarnation',
        context: 'Athanasius on Christ\'s victory through his death.',
        themes: ['salvation', 'christology']
      }
    ],

    influences: [],
    influenced: ['augustine', 'luther', 'calvin']
  },

  // ========================================
  // AMBROSE OF MILAN
  // ========================================
  {
    id: 'ambrose',
    name: 'Ambrose',
    fullName: 'Aurelius Ambrosius',
    lifespan: '340-397',
    birthYear: 340,
    deathYear: 397,
    tradition: 'early_church',
    tagline: 'Bishop and Imperial Counselor',

    biography: {
      overview: `Ambrose of Milan was one of the most influential church fathers of the fourth century, a bishop whose courage in confronting emperors, eloquent preaching, and theological writings shaped both the Western church and Augustine's conversion. Born into an aristocratic Roman family, Ambrose was trained in law and rhetoric, rising to become governor of the province of Aemilia-Liguria at Milan.

In 374, while attempting to calm tensions during the disputed election of a new bishop, Ambrose—still only a catechumen—was unexpectedly acclaimed bishop by the crowd. Within a week he was baptized, ordained, and consecrated. Despite his reluctance, he proved to be one of the greatest bishops of the ancient church.

Ambrose fearlessly confronted imperial power when it conflicted with the church's faith and morals. He refused Empress Justina's demands to surrender a basilica to the Arians and famously required Emperor Theodosius to do public penance after the massacre at Thessalonica. His preaching deeply influenced Augustine, who was baptized by Ambrose in 387. His hymns established the form of Western hymnody still used today.`,

      lifeStages: [
        {
          period: '340-374',
          title: 'Roman Aristocrat and Governor',
          description: 'Born in Trier (modern Germany) to a Roman aristocratic family. His father was Praetorian Prefect of Gaul. Educated in Rome in rhetoric, law, and Greek. Rose quickly through administrative ranks to become governor at Milan.',
          keyEvents: [
            'Born c. 340 in Trier, son of Praetorian Prefect',
            'Father died when Ambrose was young',
            'Educated in Rome; studied law and rhetoric',
            'Practiced law in the courts of Sirmium',
            'Appointed governor of Aemilia-Liguria (c. 370)',
            'Administered from Milan, the western imperial capital'
          ],
          location: 'Trier, Rome, Milan'
        },
        {
          period: '374-386',
          title: 'Early Episcopate and Arian Controversy',
          description: 'Unexpectedly acclaimed bishop while still a catechumen. Quickly baptized and consecrated. Devoted himself to theological study and combating Arianism. Defended the faith against Empress Justina\'s Arian demands.',
          keyEvents: [
            'Acclaimed bishop by crowd during disputed election (374)',
            'Baptized and ordained within eight days',
            'Gave away wealth to the church and poor',
            'Studied Scripture under Simplician',
            'Wrote anti-Arian theological works',
            'Resisted Empress Justina\'s Arian demands (385-386)',
            'Basilica siege: congregation sang hymns he composed'
          ],
          location: 'Milan'
        },
        {
          period: '386-390',
          title: 'Augustine\'s Conversion and Imperial Conflicts',
          description: 'His preaching drew Augustine, who was converted and baptized by Ambrose. Continued to navigate complex relationships with emperors, defending church freedom and moral authority.',
          keyEvents: [
            'Augustine attended Ambrose\'s preaching',
            'Baptized Augustine at Easter 387',
            'Theodosius made Christianity official religion (380)',
            'Massacre at Thessalonica by Theodosius (390)',
            'Required Theodosius to do public penance',
            'Established principle of church\'s moral authority over emperors'
          ],
          location: 'Milan'
        },
        {
          period: '390-397',
          title: 'Final Years and Legacy',
          description: 'Continued pastoral ministry and writing until death. Preached funeral orations for emperors. His hymns became foundational for Western worship.',
          keyEvents: [
            'Preached funeral oration for Theodosius (395)',
            'Continued prolific writing and preaching',
            'Mentored many who became bishops',
            'Died April 4, 397 in Milan',
            'Buried in his basilica (now Sant\'Ambrogio)',
            'Immediately venerated as saint'
          ],
          location: 'Milan'
        }
      ],

      legacy: `Ambrose's legacy is manifold. He established the principle that the church has moral authority over the state—his confrontation with Theodosius became a paradigm for medieval and later church-state relations. His preaching, combining rhetorical skill with allegorical interpretation of Scripture, drew Augustine to Christianity and shaped Western homiletics. His hymns ("Veni Redemptor Gentium," "Aeterne Rerum Conditor") established the form of Western hymnody used for over a millennium. His theological writings defending Nicene orthodoxy against Arianism were influential in the West. Ambrose is one of the four original Doctors of the Western Church (with Augustine, Jerome, and Gregory the Great). His feast day (December 7) is still observed, and the Ambrosian Rite he developed continues in Milan to this day.`
    },

    majorWorks: [
      {
        id: 'de-officiis',
        title: 'On the Duties of the Clergy',
        originalTitle: 'De Officiis Ministrorum',
        year: 'c. 391',
        category: 'major',
        summary: `De Officiis is Ambrose's manual on Christian ethics and pastoral responsibility, modeled on Cicero's work of the same name. It adapts classical moral philosophy to Christian ministry, discussing virtues required of clergy and the ethical demands of church leadership.

Ambrose addresses the four cardinal virtues (prudence, justice, fortitude, temperance) through a Christian lens, grounding ethics in Scripture rather than pagan philosophy. He emphasizes that clergy must be examples of virtue to their flocks and discusses practical matters of pastoral care.

The work was enormously influential on medieval ethics and clerical formation. It represents an early attempt to synthesize classical learning with Christian faith—a project that would define much of medieval theology.`,
        keyThemes: ['Ethics', 'Pastoral Care', 'Virtue', 'Ministry'],
        significance: 'Foundational work for Christian ethics and clerical training.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/schaff/npnf210.iv.html', format: 'HTML' },
          { source: 'Other', url: 'https://www.newadvent.org/fathers/3401.htm', format: 'HTML', notes: 'New Advent' }
        ]
      },
      {
        id: 'de-spiritu-sancto',
        title: 'On the Holy Spirit',
        originalTitle: 'De Spiritu Sancto',
        year: 'c. 381',
        category: 'major',
        summary: `De Spiritu Sancto is Ambrose's defense of the full deity of the Holy Spirit, written to Emperor Gratian. Like Athanasius and the Cappadocian Fathers, Ambrose argues that the Spirit is fully divine, co-equal with Father and Son.

Ambrose demonstrates from Scripture that the Spirit possesses divine attributes, performs divine works, and is properly worshiped with Father and Son. He responds to those who considered the Spirit a creature or subordinate divine being.

The work contributed to the Western articulation of Trinitarian theology and the full recognition of the Spirit's deity at the Council of Constantinople (381).`,
        keyThemes: ['Trinity', 'Holy Spirit', 'Deity of the Spirit', 'Scripture'],
        significance: 'Defense of the Spirit\'s deity; contributed to Constantinople\'s Trinitarian settlement.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/schaff/npnf210.iv.i.html', format: 'HTML' },
          { source: 'Other', url: 'https://www.newadvent.org/fathers/3403.htm', format: 'HTML', notes: 'New Advent' }
        ]
      },
      {
        id: 'hexameron',
        title: 'Hexameron',
        year: 'c. 386-390',
        category: 'major',
        summary: `The Hexameron is a series of homilies on the six days of creation, based on sermons Ambrose preached to his congregation. Following Basil of Caesarea's work of the same name, Ambrose interprets Genesis 1 to expound creation, providence, and the wisdom of God.

Ambrose combines literal exposition with allegorical interpretation, drawing moral and spiritual lessons from the created order. He discusses natural phenomena with curiosity while subordinating natural knowledge to theological purposes.

The work influenced Augustine's later writing on Genesis and established a model for Christian reflection on creation that would endure through the Middle Ages.`,
        keyThemes: ['Creation', 'Providence', 'Scripture', 'Natural Order'],
        significance: 'Influential interpretation of Genesis; shaped Western creation theology.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/schaff/npnf210.iv.ii.html', format: 'HTML' },
          { source: 'Other', url: 'https://www.newadvent.org/fathers/3407.htm', format: 'HTML', notes: 'New Advent' }
        ]
      },
      {
        id: 'hymns',
        title: 'Hymns',
        year: 'c. 386',
        category: 'minor',
        summary: `Ambrose's hymns revolutionized Western worship. Written during the siege of his basilica by Arian forces, these hymns in Latin iambic dimeter established the standard form of Western hymnody for over a thousand years.

The hymns are doctrinally rich, celebrating Christ's incarnation, the Trinity, and the Christian hope. Their simple but dignified meter made them memorable and singable by ordinary congregations. They include "Aeterne Rerum Conditor" (Framer of the earth and sky), "Deus Creator Omnium" (God, Creator of all things), and "Veni Redemptor Gentium" (Come, Redeemer of the nations).

Augustine wrote movingly of being brought to tears by these hymns. They influenced all subsequent Latin hymnody and many were translated during the Reformation (Luther translated "Veni Redemptor Gentium").`,
        keyThemes: ['Worship', 'Hymnody', 'Trinity', 'Incarnation'],
        significance: 'Established the form of Western hymnody; still sung today.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/schaff/npnf210.iv.iii.html', format: 'HTML' },
          { source: 'Archive.org', url: 'https://archive.org/details/hymnsambrose00ambrrich', format: 'PDF' }
        ]
      }
    ],

    theologicalPositions: [
      {
        topic: 'trinity',
        position: 'The Father, Son, and Holy Spirit are co-equal and co-eternal, sharing one divine substance. The Spirit is fully God, not a creature or subordinate being.',
        distinctives: [
          'Defended Nicene faith against Arianism',
          'Articulated full deity of the Holy Spirit',
          'Unity of substance with distinction of persons',
          'Trinitarian formula in baptism and worship'
        ],
        keyQuotes: [
          'The Holy Spirit is not among the creatures but belongs to the Creator.',
          'If the Spirit is not God, He cannot sanctify us or dwell within us.'
        ],
        scriptureReferences: ['Matthew 28:19', 'John 14:16-17', '2 Corinthians 13:14', '1 Corinthians 2:10-11']
      },
      {
        topic: 'ecclesiology',
        position: 'The church has its own proper sphere of authority, especially in matters of faith and morals. Emperors are sons of the church, not its masters.',
        distinctives: [
          'Church has moral authority over the state',
          'Emperors are within the church, not above it',
          'Bishops must confront rulers who violate God\'s law',
          'Church buildings belong to God, not the emperor'
        ],
        keyQuotes: [
          'The emperor is within the church, not above the church.',
          'Palaces belong to the emperor, churches to the bishop.'
        ],
        scriptureReferences: ['Matthew 16:18-19', 'Acts 5:29', 'Romans 13:1-7', '1 Peter 2:13-17']
      },
      {
        topic: 'salvation',
        position: 'Salvation comes through Christ alone, mediated through the church\'s sacraments. Baptism and the Eucharist are means of grace by which believers receive Christ\'s benefits.',
        distinctives: [
          'Baptism brings regeneration and forgiveness',
          'The Eucharist is the true body and blood of Christ',
          'Grace comes through sacramental participation',
          'Faith receives what the sacraments convey'
        ],
        keyQuotes: [
          'In the sacraments, Christ Himself works our salvation.'
        ],
        scriptureReferences: ['John 3:5', 'Romans 6:3-4', 'John 6:53-56', '1 Corinthians 10:16']
      }
    ],

    notableQuotes: [
      {
        id: 'emperor-within',
        text: 'The emperor is within the church, not above the church.',
        source: 'Against Auxentius',
        context: 'Ambrose defending church independence against imperial Arianism.',
        themes: ['ecclesiology', 'sovereignty']
      },
      {
        id: 'theodosius-penance',
        text: 'How will you lift up in prayer hands stained with the blood of an unjust massacre?',
        source: 'Letter to Theodosius',
        context: 'Ambrose demanding the emperor repent for the Thessalonica massacre.',
        themes: ['ecclesiology', 'sin']
      },
      {
        id: 'sing-praises',
        text: 'Let us sing a hymn to the Lord our God.',
        source: 'During the Basilica Siege',
        context: 'Ambrose leading his congregation in hymn-singing during the siege.',
        themes: ['ecclesiology', 'trinity']
      },
      {
        id: 'baptism-grace',
        text: 'We were buried with Christ by baptism into death, so that as Christ rose from the dead, we too might walk in newness of life.',
        source: 'On the Mysteries',
        context: 'Ambrose teaching the newly baptized about the meaning of their baptism.',
        themes: ['salvation', 'sanctification']
      }
    ],

    influences: ['athanasius'],
    influenced: ['augustine', 'jerome']
  },

  // ========================================
  // JEROME
  // ========================================
  {
    id: 'jerome',
    name: 'Jerome',
    fullName: 'Eusebius Sophronius Hieronymus',
    lifespan: '347-420',
    birthYear: 347,
    deathYear: 420,
    tradition: 'early_church',
    tagline: 'Translator of Scripture',

    biography: {
      overview: `Jerome was the foremost biblical scholar of the ancient church, whose Latin translation of the Bible (the Vulgate) became the standard Scripture of Western Christianity for over a thousand years. Born in Stridon (modern Croatia/Slovenia), Jerome received an excellent classical education in Rome before devoting himself to asceticism and scholarship.

A man of vast learning and volcanic temperament, Jerome mastered Latin, Greek, and Hebrew—an unusual achievement for his time. After years of travel and study, including desert asceticism in Syria, he was ordained a priest at Antioch and studied under Gregory of Nazianzus at Constantinople.

Pope Damasus commissioned Jerome to revise the Latin Bible, beginning a lifetime of translation work. After Damasus's death, Jerome settled in Bethlehem, where he established monasteries and spent his final decades translating Scripture, writing commentaries, and engaging in heated controversies with Rufinus, Pelagius, and others. His irascible personality made him many enemies, but his scholarship was unparalleled.`,

      lifeStages: [
        {
          period: '347-374',
          title: 'Education and Early Wanderings',
          description: 'Born in Stridon to Christian parents. Received outstanding classical education in Rome. Baptized c. 366. Traveled widely before embracing ascetic life in the Syrian desert.',
          keyEvents: [
            'Born c. 347 in Stridon (Dalmatia)',
            'Sent to Rome for education (c. 354)',
            'Studied grammar, rhetoric, philosophy under Aelius Donatus',
            'Baptized in Rome (c. 366)',
            'Traveled through Gaul, collecting manuscripts',
            'Retired to desert of Chalcis for ascetic life (c. 374)',
            'Learned Hebrew from a Jewish convert'
          ],
          location: 'Stridon, Rome, Gaul, Syrian Desert'
        },
        {
          period: '374-385',
          title: 'Ordination and Roman Years',
          description: 'Ordained priest at Antioch. Studied with Gregory of Nazianzus at Constantinople. Returned to Rome as secretary to Pope Damasus, who commissioned the Vulgate translation.',
          keyEvents: [
            'Ordained priest at Antioch (c. 379)',
            'Studied under Gregory of Nazianzus at Constantinople',
            'Attended Council of Constantinople (381)',
            'Returned to Rome as secretary to Pope Damasus (382)',
            'Began revising Latin Gospels at Damasus\'s request',
            'Became spiritual director to wealthy Roman widows',
            'Damasus died (384); Jerome\'s enemies forced his departure'
          ],
          location: 'Antioch, Constantinople, Rome'
        },
        {
          period: '385-420',
          title: 'Bethlehem Monastery',
          description: 'Settled in Bethlehem with Paula and Eustochium. Established monasteries. Devoted himself to biblical translation and commentary. Engaged in numerous controversies.',
          keyEvents: [
            'Traveled to Holy Land (385)',
            'Settled in Bethlehem with Roman followers (386)',
            'Paula financed construction of monasteries',
            'Completed Vulgate translation (c. 405)',
            'Wrote commentaries on most biblical books',
            'Engaged in controversies with Rufinus, Pelagius, others',
            'Paula died (404); continued work despite grief',
            'Died September 30, 420'
          ],
          location: 'Bethlehem'
        }
      ],

      legacy: `Jerome's Vulgate became the Bible of Western Christianity for over a millennium, shaping theology, liturgy, art, and culture. His translation philosophy—combining fidelity to the Hebrew text with literary elegance—established principles still debated today. The Council of Trent declared the Vulgate authentic Scripture for the Catholic Church. Beyond translation, Jerome's commentaries influenced all subsequent Western biblical interpretation. His letters provide invaluable witness to fourth-century Christianity. His promotion of asceticism and virginity shaped medieval monasticism. Jerome is one of the four original Doctors of the Western Church. His scholarly legacy endures wherever the Bible is translated and studied.`
    },

    majorWorks: [
      {
        id: 'vulgate',
        title: 'The Vulgate',
        originalTitle: 'Biblia Sacra Vulgata',
        year: '382-405',
        category: 'major',
        summary: `The Vulgate is Jerome's Latin translation of the Bible, which became the standard Scripture of Western Christianity. Pope Damasus commissioned Jerome to revise the older Latin translations (Vetus Latina), which varied greatly in quality and text.

Jerome began by revising the Gospels against the best Greek manuscripts available. He then translated the entire Old Testament directly from the Hebrew—a revolutionary approach that bypassed the Greek Septuagint used by most churches. This "Hebraica Veritas" (Hebrew Truth) principle was controversial but eventually prevailed.

The Vulgate's clear, dignified Latin shaped Christian vocabulary and worship for over a thousand years. Its phrases ("Magnificat," "Nunc Dimittis," "In Principio") became embedded in Western culture. It remains the official Latin Bible of the Catholic Church.`,
        keyThemes: ['Scripture', 'Translation', 'Hebrew', 'Church'],
        significance: 'The Bible of Western Christianity for over 1000 years; shaped theology and culture.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/bible/vul', format: 'HTML' },
          { source: 'Other', url: 'https://www.biblegateway.com/versions/Biblia-Sacra-Vulgata-VULGATE/', format: 'HTML', notes: 'Bible Gateway' }
        ]
      },
      {
        id: 'commentaries',
        title: 'Biblical Commentaries',
        year: '386-420',
        category: 'commentary',
        summary: `Jerome wrote commentaries on most books of the Bible, combining linguistic analysis with theological reflection. His knowledge of Hebrew, Greek, and the original languages gave his exposition unique authority.

Jerome's commentaries draw on Jewish interpretation, earlier church fathers, and his own philological expertise. While sometimes hastily written and occasionally derivative, they provide invaluable insight into early Christian exegesis.

His commentaries on the prophets (especially Isaiah, Jeremiah, Ezekiel, and Daniel), Ecclesiastes, and Paul's letters were particularly influential. His prologues to biblical books became standard introductions throughout the Middle Ages.`,
        keyThemes: ['Scripture', 'Exegesis', 'Hebrew', 'Prophecy'],
        significance: 'Foundational for medieval biblical interpretation; valuable linguistic insights.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/schaff/npnf206', format: 'HTML' },
          { source: 'Other', url: 'https://www.newadvent.org/fathers/3007.htm', format: 'HTML', notes: 'New Advent - Commentary on Matthew' }
        ]
      },
      {
        id: 'letters',
        title: 'Letters',
        year: '370-419',
        category: 'letters',
        summary: `Jerome's extensive correspondence (over 150 letters survive) provides an extraordinary window into fourth-century Christianity. Written over half a century, they reveal the scholar at work and in controversy, the spiritual director of aristocratic women, and the defender of orthodox faith.

Famous letters include his advice to Eustochium on virginity (Letter 22), his obituaries of friends like Paula, his savage attacks on opponents, and his reflections on biblical interpretation. The letters reveal both his enormous learning and his difficult personality.

As historical sources, Jerome's letters are invaluable for understanding early monasticism, biblical scholarship, and the controversies of his age.`,
        keyThemes: ['Asceticism', 'Scripture', 'Controversy', 'Spiritual Direction'],
        significance: 'Essential source for 4th-century Christianity; reveals Jerome\'s personality and times.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/schaff/npnf206.v.html', format: 'HTML' },
          { source: 'Other', url: 'https://www.newadvent.org/fathers/3001.htm', format: 'HTML', notes: 'New Advent' }
        ]
      },
      {
        id: 'de-viris-illustribus',
        title: 'On Illustrious Men',
        originalTitle: 'De Viris Illustribus',
        year: '392',
        category: 'minor',
        summary: `De Viris Illustribus is a biographical dictionary of 135 Christian writers from Peter to Jerome himself. Modeled on Suetonius's work of the same name, it demonstrated that Christianity had produced authors worthy of respect.

Jerome provides brief biographies and bibliographies for each writer, including New Testament authors, church fathers, and heretics. While sometimes inaccurate or incomplete, it is our sole source for information about many early Christian writers.

The work established the genre of Christian literary history and was continued by Gennadius of Marseilles and later writers. It remains invaluable for the study of early Christian literature.`,
        keyThemes: ['Church History', 'Biography', 'Literature', 'Scholarship'],
        significance: 'First Christian literary history; essential source for early Christian authors.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/schaff/npnf203.v.html', format: 'HTML' },
          { source: 'Other', url: 'https://www.newadvent.org/fathers/2708.htm', format: 'HTML', notes: 'New Advent' }
        ]
      }
    ],

    theologicalPositions: [
      {
        topic: 'scripture',
        position: 'Scripture is the inspired Word of God, best understood from the original Hebrew and Greek. The Hebrew text of the Old Testament takes precedence over the Greek Septuagint.',
        distinctives: [
          'Hebraica Veritas: Hebrew text has priority for OT',
          'Original languages essential for accurate interpretation',
          'Translation must be both faithful and literary',
          'Scripture requires learned exposition'
        ],
        keyQuotes: [
          'Ignorance of Scripture is ignorance of Christ.',
          'Read the divine Scriptures constantly; never let the sacred volume out of your hand.'
        ],
        scriptureReferences: ['2 Timothy 3:16', 'Psalm 119:105', '2 Peter 1:20-21', 'Romans 15:4']
      },
      {
        topic: 'sanctification',
        position: 'The Christian life is a warfare requiring ascetic discipline. Virginity is superior to marriage, though both are honorable states. Monks and nuns pursue the highest form of Christian life.',
        distinctives: [
          'Virginity is spiritually superior to marriage',
          'Ascetic discipline purifies the soul',
          'Monastic life is the ideal Christian life',
          'Fasting, prayer, and Scripture study are essential'
        ],
        keyQuotes: [
          'The virgin Christ is wedded to the virgin bride.',
          'A fat belly does not breed a subtle mind.'
        ],
        scriptureReferences: ['1 Corinthians 7:32-34', 'Matthew 19:12', 'Revelation 14:4', '1 Timothy 5:5-6']
      },
      {
        topic: 'christology',
        position: 'Christ is fully God and fully man, the eternal Word incarnate. Orthodox Christology requires affirming both natures in one person. Mary is properly called Theotokos (God-bearer).',
        distinctives: [
          'Christ is true God and true man',
          'Mary is Theotokos—Mother of God',
          'Virginal conception and birth',
          'Orthodox doctrine essential against heresies'
        ],
        keyQuotes: [
          'Mary is the Mother of God because she bore God in the flesh.'
        ],
        scriptureReferences: ['John 1:14', 'Luke 1:35', 'Philippians 2:6-8', 'Romans 9:5']
      }
    ],

    notableQuotes: [
      {
        id: 'ignorance-scripture',
        text: 'Ignorance of Scripture is ignorance of Christ.',
        source: 'Commentary on Isaiah, Prologue',
        context: 'Jerome\'s famous statement on the necessity of biblical knowledge.',
        themes: ['scripture', 'christology']
      },
      {
        id: 'lion-study',
        text: 'Let sleep creep over you holding a book, and let the sacred page receive your drooping face.',
        source: 'Letter 22 to Eustochium',
        context: 'Jerome advising on the intensity of scriptural study.',
        themes: ['scripture', 'sanctification']
      },
      {
        id: 'translation-difficulty',
        text: 'If I translate word for word, the result is absurd; if I translate sense for sense, I may obscure the meaning.',
        source: 'Letter 57',
        context: 'Jerome on the challenges of biblical translation.',
        themes: ['scripture']
      },
      {
        id: 'hebrew-truth',
        text: 'Let us go to the Hebrew sources, since the streams of translation only carry the sediment.',
        source: 'Preface to Samuel-Kings',
        context: 'Jerome defending his translation from the Hebrew.',
        themes: ['scripture']
      }
    ],

    influences: ['athanasius', 'ambrose'],
    influenced: ['augustine', 'luther', 'calvin']
  },

  // ========================================
  // GREGORY THE GREAT
  // ========================================
  {
    id: 'gregory_great',
    name: 'Gregory the Great',
    fullName: 'Gregorius Magnus',
    lifespan: '540-604',
    birthYear: 540,
    deathYear: 604,
    tradition: 'early_church',
    tagline: 'Servant of the Servants of God',

    biography: {
      overview: `Gregory the Great was the last of the four original Doctors of the Western Church and is often considered the founder of the medieval papacy. Born into a wealthy Roman senatorial family, he served as Prefect of Rome before renouncing secular life to become a monk. He founded monasteries with his family's wealth and lived austerely despite his aristocratic origins.

Reluctantly called from monastic life to serve as papal ambassador to Constantinople, then elected pope in 590, Gregory faced the collapse of Roman civilization—plague, famine, and Lombard invasion threatened Italy. He organized the church's response, negotiating with barbarians, feeding the starving, and maintaining civil order when imperial power had vanished.

Despite chronic illness, Gregory was an indefatigable worker. His writings on pastoral care, moral theology, and biblical interpretation shaped the Western church for centuries. He reformed the liturgy, promoted missions (sending Augustine to England), and established the papal administration that would dominate medieval Europe. His title for the pope—"Servant of the servants of God"—reflected his genuine humility.`,

      lifeStages: [
        {
          period: '540-575',
          title: 'Roman Aristocrat and Prefect',
          description: 'Born into one of Rome\'s leading senatorial families. Received classical education. Rose to become Prefect of Rome (573-574), the highest civil office in the city. Wealthy and successful, yet spiritually restless.',
          keyEvents: [
            'Born c. 540 in Rome to senatorial family',
            'Father Gordianus was a senator; mother Silvia became a saint',
            'Educated in grammar, rhetoric, law',
            'Rapid advancement in civic career',
            'Became Prefect of Rome (573-574)',
            'Administered Rome during difficult times',
            'Death of father led to spiritual crisis'
          ],
          location: 'Rome'
        },
        {
          period: '575-590',
          title: 'Monk and Papal Legate',
          description: 'Renounced secular life to become a monk. Founded monasteries with family wealth. Ordained deacon. Sent as papal ambassador to Constantinople for seven years. Returned to monastery before being elected pope.',
          keyEvents: [
            'Converted family home into monastery of St. Andrew (c. 575)',
            'Gave away wealth; lived austerely',
            'Ordained one of seven deacons of Rome (c. 578)',
            'Sent as papal legate to Constantinople (579-585/6)',
            'Failed to secure military help against Lombards',
            'Returned to St. Andrew\'s monastery',
            'Wrote commentary on Job (Moralia)',
            'Elected pope during plague (590)'
          ],
          location: 'Rome, Constantinople'
        },
        {
          period: '590-604',
          title: 'Pope and Reformer',
          description: 'Served as pope during Rome\'s darkest hour. Organized relief, negotiated with Lombards, reformed clergy, promoted missions, and wrote prolifically despite illness.',
          keyEvents: [
            'Elected pope during plague epidemic (590)',
            'Organized processions and prayers; plague subsided',
            'Negotiated peace with Lombard king',
            'Fed Rome\'s starving population from papal estates',
            'Sent Augustine to convert Anglo-Saxons (596)',
            'Wrote Pastoral Care, Dialogues, Homilies',
            'Reformed liturgy (Gregorian chant)',
            'Corresponded with rulers throughout Europe',
            'Died March 12, 604, exhausted by labors'
          ],
          location: 'Rome'
        }
      ],

      legacy: `Gregory's legacy shaped medieval Christianity fundamentally. His Pastoral Care became the manual for bishops for a thousand years—Charlemagne distributed copies throughout his empire. His Moralia on Job established medieval approaches to allegorical interpretation. His Dialogues (including the Life of St. Benedict) popularized monasticism and shaped medieval piety. His liturgical reforms gave his name to "Gregorian chant." His mission to England established a connection between Rome and the Anglo-Saxon church that would profoundly influence European culture. His administration of the papacy established patterns for medieval church governance. Gregory embodied the transition from ancient to medieval Christianity, combining Roman administrative genius with monastic spirituality. He is the only pope besides Leo I to be called "the Great."`
    },

    majorWorks: [
      {
        id: 'pastoral-care',
        title: 'Pastoral Care',
        originalTitle: 'Liber Regulae Pastoralis',
        year: '591',
        category: 'major',
        summary: `Pastoral Care is Gregory's masterpiece on the responsibilities of church leadership, written shortly after becoming pope. It became the most influential handbook for clergy in the Western church for a millennium.

The work addresses who should seek pastoral office (only those called, not ambitious), how pastors should live (in virtue and humility), how they should teach different types of people (tailoring instruction to each), and how they should remain humble despite authority.

Gregory's psychological insight in distinguishing how to counsel different personality types—the impetuous and the timid, the impatient and the patient, the humble and the haughty—made the work practically valuable. Alfred the Great translated it into Old English. Bishops at their ordination were required to study it.`,
        keyThemes: ['Pastoral Ministry', 'Leadership', 'Ethics', 'Spiritual Direction'],
        significance: 'The manual for pastoral ministry for 1000 years; shaped clerical formation.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/schaff/npnf212.ii.html', format: 'HTML' },
          { source: 'Other', url: 'https://www.newadvent.org/fathers/3601.htm', format: 'HTML', notes: 'New Advent' }
        ]
      },
      {
        id: 'moralia-job',
        title: 'Moralia on Job',
        originalTitle: 'Moralia in Iob',
        year: '579-596',
        category: 'major',
        summary: `The Moralia is Gregory's massive commentary on the Book of Job, expounding it in literal, allegorical, and moral senses. Begun in Constantinople and finished during his papacy, it totals 35 books and represents the fullest flowering of patristic allegorical exegesis.

Gregory uses Job as the occasion for wide-ranging moral and spiritual reflection. Every detail of the text yields lessons for Christian living. The work became a treasury of medieval spirituality, mined for centuries for insights on temptation, suffering, virtue, and the spiritual life.

While modern readers find the allegorical method alien, the Moralia influenced virtually every subsequent medieval commentator and remains valuable for its pastoral wisdom.`,
        keyThemes: ['Suffering', 'Providence', 'Ethics', 'Spiritual Life'],
        significance: 'Foundational medieval commentary; treasury of moral and spiritual wisdom.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/gregory/morals.html', format: 'HTML' },
          { source: 'Archive.org', url: 'https://archive.org/details/moralsonbookofjob01greg', format: 'PDF' }
        ]
      },
      {
        id: 'dialogues',
        title: 'Dialogues',
        year: '593-594',
        category: 'major',
        summary: `The Dialogues is a collection of miracle stories about Italian saints, written to encourage Gregory's audience that God still worked wonders in their own land, not just in the East. Book II contains the Life of St. Benedict, the primary source for Benedict's biography.

Written in simple Latin for popular consumption, the Dialogues describe visions, miracles, and holy deaths. They helped establish the cult of saints in the Western church and promoted Benedictine monasticism.

Modern scholars debate their historical value, but their influence on medieval piety was immense. They shaped how medieval Christians understood holiness, miracles, and the afterlife.`,
        keyThemes: ['Saints', 'Miracles', 'Monasticism', 'Afterlife'],
        significance: 'Primary source for Benedict\'s life; shaped medieval understanding of holiness.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/gregory/dialogues.html', format: 'HTML' },
          { source: 'Other', url: 'https://www.newadvent.org/fathers/3203.htm', format: 'HTML', notes: 'New Advent' }
        ]
      },
      {
        id: 'homilies-gospels',
        title: 'Homilies on the Gospels',
        originalTitle: 'Homiliae in Evangelia',
        year: '590-591',
        category: 'sermons',
        summary: `Gregory's 40 homilies on the Gospels were preached to the Roman people during his early papacy. Clear, practical, and pastoral, they exemplify Gregory's gift for making Scripture accessible to ordinary believers.

The homilies emphasize moral application and call hearers to repentance and holiness. They deal with Gospel texts for major liturgical feasts and contain many memorable images and stories.

These homilies influenced medieval preaching and were widely read in monastic settings. They reveal Gregory as a pastor concerned with the spiritual formation of his flock.`,
        keyThemes: ['Scripture', 'Preaching', 'Repentance', 'Christian Living'],
        significance: 'Model for medieval preaching; accessible exposition for ordinary believers.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/schaff/npnf212.iii.html', format: 'HTML' },
          { source: 'Other', url: 'https://www.newadvent.org/fathers/3612.htm', format: 'HTML', notes: 'New Advent' }
        ]
      }
    ],

    theologicalPositions: [
      {
        topic: 'ecclesiology',
        position: 'The bishop of Rome has pastoral primacy over the universal church, but as "servant of the servants of God," not as lord. Bishops are physicians of souls who must lead by example.',
        distinctives: [
          'Papal primacy exercised in humility',
          '"Servant of servants of God"—papal title',
          'Authority for service, not domination',
          'Universal pastoral responsibility of Rome'
        ],
        keyQuotes: [
          'I am the servant of the servants of God.',
          'He who would climb to a high position must begin by descending in humility.'
        ],
        scriptureReferences: ['Matthew 20:26-28', 'John 21:15-17', '1 Peter 5:2-3', 'Luke 22:26']
      },
      {
        topic: 'salvation',
        position: 'Salvation is by God\'s grace, but requires cooperation through faith, repentance, and good works. Purgatory purifies believers after death. Masses for the dead assist souls in purgatory.',
        distinctives: [
          'Grace and works cooperate in salvation',
          'Purgatorial purification after death',
          'Masses benefit the dead',
          'Suffering cleanses from sin'
        ],
        keyQuotes: [
          'Those who have not satisfied for their sins in this life may be purified in the next.'
        ],
        scriptureReferences: ['1 Corinthians 3:12-15', 'Matthew 12:32', '2 Maccabees 12:45', 'James 2:24']
      },
      {
        topic: 'providence',
        position: 'God governs all things providentially. Suffering has spiritual purpose—it purifies, tests, and prepares the soul for glory. Even evil serves God\'s mysterious purposes.',
        distinctives: [
          'All suffering has redemptive purpose',
          'Affliction tests and purifies faith',
          'God works through secondary causes',
          'Patient endurance produces virtue'
        ],
        keyQuotes: [
          'The proof of love is in the works. Where love exists, it works great things.',
          'We rise by the same steps through which we fell.'
        ],
        scriptureReferences: ['Romans 8:28', 'James 1:2-4', 'Job 1:21', '2 Corinthians 4:17']
      }
    ],

    notableQuotes: [
      {
        id: 'servant-servants',
        text: 'I am the servant of the servants of God.',
        source: 'Various letters',
        context: 'Gregory\'s famous self-description, still used by popes.',
        themes: ['ecclesiology', 'sanctification']
      },
      {
        id: 'scripture-river',
        text: 'Scripture is like a river, shallow enough for a lamb to wade through, deep enough for an elephant to swim in.',
        source: 'Moralia on Job',
        context: 'Gregory on Scripture\'s accessibility to all and depth for scholars.',
        themes: ['scripture']
      },
      {
        id: 'love-proof',
        text: 'The proof of love is in the works. Where love exists, it works great things; where it does not exist, it does not work.',
        source: 'Homilies on the Gospels',
        context: 'Gregory on love\'s necessary expression in action.',
        themes: ['sanctification', 'salvation']
      },
      {
        id: 'angli-angeli',
        text: '"Non Angli, sed angeli" (They are not Angles, but angels).',
        source: 'Bede, Ecclesiastical History',
        context: 'Gregory\'s famous wordplay upon seeing English slaves, inspiring the mission.',
        themes: ['ecclesiology']
      }
    ],

    influences: ['augustine', 'ambrose', 'jerome'],
    influenced: ['luther', 'calvin']
  },

  // ========================================
  // JOHN BUNYAN
  // ========================================
  {
    id: 'bunyan',
    name: 'Bunyan',
    fullName: 'John Bunyan',
    lifespan: '1628-1688',
    birthYear: 1628,
    deathYear: 1688,
    tradition: 'puritan',
    tagline: 'Immortal Dreamer',

    biography: {
      overview: `John Bunyan was an English Puritan preacher and author whose allegorical masterpiece "The Pilgrim's Progress" became the most widely read book in the English language after the Bible. Born into a humble tinker's family in Bedfordshire, Bunyan received minimal education but possessed remarkable literary genius and spiritual insight.

After a turbulent youth and service in the Parliamentary army during the English Civil War, Bunyan experienced a profound conversion that followed years of spiritual torment. He joined a Baptist congregation in Bedford and soon began preaching with such power that crowds flocked to hear him. His preaching brought him into conflict with authorities after the Restoration of Charles II.

Bunyan spent twelve years in Bedford jail (1660-1672) for refusing to stop preaching. Rather than silencing him, imprisonment became his literary workshop. There he wrote his spiritual autobiography "Grace Abounding to the Chief of Sinners" and began "The Pilgrim's Progress." Released briefly, then imprisoned again, he completed his masterwork during a second imprisonment. His allegorical imagination, combined with deep experiential knowledge of the soul's pilgrimage to glory, produced literature of enduring power.`,

      lifeStages: [
        {
          period: '1628-1653',
          title: 'Youth and Conversion',
          description: 'Born in Elstow, Bedfordshire, to a tinker\'s family. Received basic education. Served in Parliamentary army (1644-1647). Married first wife c. 1649. Underwent prolonged spiritual crisis culminating in conversion.',
          keyEvents: [
            'Born November 1628 in Elstow, Bedfordshire',
            'Learned tinker\'s trade from father',
            'Served in Parliamentary army during Civil War',
            'Married first wife, who brought Puritan devotional books',
            'Years of spiritual torment and doubt',
            'Conversion through Bedford Baptist community (c. 1653)'
          ],
          location: 'Elstow, Bedford'
        },
        {
          period: '1653-1660',
          title: 'Early Ministry',
          description: 'Joined Bedford Baptist congregation. Began preaching with remarkable effectiveness. First wife died, leaving four children including blind daughter Mary. Remarried Elizabeth.',
          keyEvents: [
            'Baptized and joined Bedford Baptist church (1653)',
            'Began preaching ministry (1656)',
            'Published first works against Quakers',
            'First wife died (c. 1658)',
            'Married Elizabeth (1659)',
            'Ministry flourished despite opposition'
          ],
          location: 'Bedford and surrounding villages'
        },
        {
          period: '1660-1672',
          title: 'First Imprisonment',
          description: 'Arrested for preaching without a license shortly after Restoration. Refused offers of release in exchange for ceasing to preach. Twelve years of imprisonment became his literary crucible.',
          keyEvents: [
            'Arrested November 1660 for unlicensed preaching',
            'Refused conditional release',
            'Wrote "Grace Abounding to the Chief of Sinners" (1666)',
            'Began "The Pilgrim\'s Progress"',
            'Made shoelaces to support family',
            'Released under Declaration of Indulgence (1672)'
          ],
          location: 'Bedford County Jail'
        },
        {
          period: '1672-1688',
          title: 'Later Ministry and Legacy',
          description: 'Released and called as pastor of Bedford congregation. Brief second imprisonment during which he completed Pilgrim\'s Progress. Ministry flourished until death.',
          keyEvents: [
            'Called as pastor of Bedford congregation (1672)',
            'Second imprisonment (1676-1677)',
            'Completed and published Pilgrim\'s Progress Part I (1678)',
            'Published Part II (1684)',
            'The Holy War published (1682)',
            'Died August 31, 1688 in London'
          ],
          location: 'Bedford, London'
        }
      ],

      legacy: `Bunyan's legacy centers on "The Pilgrim's Progress," which has never been out of print since 1678 and has been translated into over 200 languages. It shaped how generations of Christians understood their spiritual journey, providing vocabulary and images—the Slough of Despond, Vanity Fair, the Delectable Mountains, the Celestial City—that became part of English and evangelical culture. Beyond Pilgrim's Progress, Bunyan's spiritual autobiography "Grace Abounding" remains a classic of Puritan devotion, and "The Holy War" is a profound allegory of spiritual conflict. Bunyan demonstrated that profound theology could be expressed in accessible, imaginative prose. His influence on later literature—from Nathaniel Hawthorne to C.S. Lewis—is immense. Above all, Bunyan showed that the truest literature emerges from the deepest spiritual experience.`
    },

    majorWorks: [
      {
        id: 'pilgrims-progress',
        title: 'The Pilgrim\'s Progress',
        year: '1678 (Part I), 1684 (Part II)',
        category: 'major',
        summary: `The Pilgrim's Progress is an allegory of the Christian life, following the journey of "Christian" from the City of Destruction to the Celestial City. Along the way, Christian encounters dangers (the Slough of Despond, the Valley of the Shadow of Death, Vanity Fair), helpers (Evangelist, Hopeful, Faithful), and enemies (Giant Despair, Apollyon).

Part I traces Christian's pilgrimage, with his burden of sin falling off at the cross and his eventual arrival at glory. Part II follows Christian's wife Christiana and their children on the same journey, emphasizing the communal nature of the Christian life and the role of Mr. Great-heart as guide.

The work's genius lies in its combination of theological depth, psychological insight, vivid characterization, and accessible prose. Characters like Mr. Worldly-Wiseman, Faithful, and Giant Despair embody spiritual realities with memorable clarity. The work has shaped how countless Christians understand their spiritual journey.`,
        keyThemes: ['Pilgrimage', 'Salvation', 'Spiritual Warfare', 'Perseverance'],
        significance: 'Most widely read book in English after the Bible; shaped evangelical spirituality.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/bunyan/pilgrim', format: 'HTML' },
          { source: 'Gutenberg', url: 'https://www.gutenberg.org/ebooks/131', format: 'ePub' },
          { source: 'Archive.org', url: 'https://archive.org/details/pilgrimsprogress00buny', format: 'PDF' }
        ]
      },
      {
        id: 'grace-abounding',
        title: 'Grace Abounding to the Chief of Sinners',
        year: '1666',
        category: 'major',
        summary: `Grace Abounding is Bunyan's spiritual autobiography, written during his first imprisonment. It describes his youthful sins, his agonizing spiritual struggles, his repeated doubts and fears, and his eventual assurance of salvation through grace.

The work provides remarkable insight into Bunyan's psychological and spiritual experience. He describes being tormented by fears that he had committed the unpardonable sin, that Christ would not receive him, and that his faith was false. Scripture texts become weapons in spiritual combat, sometimes terrifying him, sometimes comforting.

Grace Abounding belongs with Augustine's Confessions and Edwards's Personal Narrative among the great spiritual autobiographies. It reveals the experiential foundation that made Pilgrim's Progress so psychologically compelling.`,
        keyThemes: ['Conversion', 'Spiritual Struggle', 'Grace', 'Assurance'],
        significance: 'Classic Puritan spiritual autobiography; foundation for Pilgrim\'s Progress.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/bunyan/grace', format: 'HTML' },
          { source: 'Gutenberg', url: 'https://www.gutenberg.org/ebooks/654', format: 'ePub' },
          { source: 'Archive.org', url: 'https://archive.org/details/graceaboundingt00bungoog', format: 'PDF' }
        ]
      },
      {
        id: 'holy-war',
        title: 'The Holy War',
        year: '1682',
        category: 'major',
        summary: `The Holy War is Bunyan's elaborate allegory of spiritual conflict, depicting the battle for the city of Mansoul (the human soul) between King Shaddai (God) and Diabolus (Satan). The city's creation, fall, redemption, and ongoing struggle are portrayed through siege warfare, diplomacy, and military campaigns.

The allegory operates on multiple levels: personal (the individual soul), corporate (the church), and cosmic (the entire spiritual warfare between good and evil). Captain Credence, Captain Good-hope, and other officers represent Christian virtues; Mr. Carnal-security, Mr. Self-denial, and others represent spiritual realities.

While less accessible than Pilgrim's Progress, The Holy War is in some ways more theologically sophisticated. It emphasizes spiritual warfare and the ongoing nature of sanctification—even redeemed Mansoul faces recurring battles.`,
        keyThemes: ['Spiritual Warfare', 'Sanctification', 'Sin', 'Redemption'],
        significance: 'Sophisticated allegory of spiritual warfare; complements Pilgrim\'s Progress.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/bunyan/holy_war', format: 'HTML' },
          { source: 'Gutenberg', url: 'https://www.gutenberg.org/ebooks/678', format: 'ePub' },
          { source: 'Archive.org', url: 'https://archive.org/details/holywarmadebysha00buny', format: 'PDF' }
        ]
      },
      {
        id: 'life-and-death-badman',
        title: 'The Life and Death of Mr. Badman',
        year: '1680',
        category: 'major',
        summary: `The Life and Death of Mr. Badman is Bunyan's realistic dialogue presenting the opposite of Christian's pilgrimage—the downward journey of an impenitent sinner to destruction. Wiseman and Attentive discuss Badman's life, cataloguing his sins from childhood lying to adult cheating, debauchery, and hypocrisy.

Unlike the idealized allegory of Pilgrim's Progress, Badman presents realistic character study of sin's progression. Bunyan draws from his Bedford experience to depict the various ways sinners deceive themselves and others, prosper outwardly while rotting inwardly, and finally face death without hope.

The work is an early example of realistic fiction and provides valuable insight into seventeenth-century social life. It serves as a companion and contrast to Pilgrim's Progress, warning rather than encouraging.`,
        keyThemes: ['Sin', 'Judgment', 'Self-Deception', 'Repentance'],
        significance: 'Realistic portrayal of sin\'s progression; early English novel.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/bunyan/badman', format: 'HTML' },
          { source: 'Gutenberg', url: 'https://www.gutenberg.org/ebooks/656', format: 'ePub' },
          { source: 'Archive.org', url: 'https://archive.org/details/lifeanddeathmr00bunygoog', format: 'PDF' }
        ]
      }
    ],

    theologicalPositions: [
      {
        topic: 'salvation',
        position: 'Salvation is entirely by grace through faith in Christ. The soul\'s journey to glory passes through conviction of sin, the cross where burdens fall off, and perseverance through trials to the Celestial City.',
        distinctives: [
          'Salvation begins with conviction of sin and danger',
          'Faith in Christ removes the burden of sin',
          'The Christian life is a pilgrimage through hostile territory',
          'Perseverance to the end is essential but enabled by grace'
        ],
        keyQuotes: [
          'He that is down needs fear no fall; he that is low, no pride.',
          'I saw a man clothed with rags, standing with his face from his own house, a book in his hand, and a great burden upon his back.'
        ],
        scriptureReferences: ['Hebrews 11:13-16', 'Philippians 3:13-14', 'Galatians 5:17', 'Matthew 7:13-14']
      },
      {
        topic: 'grace',
        position: 'Grace is God\'s free gift to undeserving sinners. Bunyan\'s own experience of torment and assurance shaped his understanding of grace as sovereign, free, and ultimately triumphant.',
        distinctives: [
          'Grace reaches the chief of sinners',
          'Assurance may be contested but grace perseveres',
          'Grace enables the whole pilgrimage',
          'Grace is mediated through Scripture and Spirit'
        ],
        keyQuotes: [
          'Grace can pardon our ungodliness and justify us with Christ\'s righteousness.',
          'I never saw such heights and depths in grace, and love, and mercy, as I saw after this temptation.'
        ],
        scriptureReferences: ['Romans 5:20', 'Ephesians 2:8-9', '1 Timothy 1:15', '2 Corinthians 12:9']
      },
      {
        topic: 'sanctification',
        position: 'Sanctification is the ongoing battle against sin and toward holiness. The Christian life involves spiritual warfare, with victories and defeats, requiring constant vigilance and dependence on grace.',
        distinctives: [
          'Sanctification is a battle, not automatic progress',
          'Indwelling sin remains a present danger',
          'Grace enables victory but warfare continues',
          'Final victory is certain for true pilgrims'
        ],
        keyQuotes: [
          'This town of Mansoul is a famous continent of sin.',
          'One leak will sink a ship, and one sin will destroy a sinner.'
        ],
        scriptureReferences: ['Romans 7:21-25', 'Galatians 5:17', 'Ephesians 6:10-18', '1 Peter 5:8']
      }
    ],

    notableQuotes: [
      {
        id: 'down-no-fall',
        text: 'He that is down needs fear no fall; he that is low, no pride.',
        source: 'The Pilgrim\'s Progress (Shepherd Boy\'s Song)',
        context: 'Song of contentment and humility on the Delectable Mountains.',
        themes: ['grace', 'sanctification']
      },
      {
        id: 'burden-fell',
        text: 'He ran thus till he came at a place somewhat ascending; and upon that place stood a cross, and a little below in the bottom, a sepulchre. So I saw in my dream, that just as Christian came up with the cross, his burden loosed from off his shoulders.',
        source: 'The Pilgrim\'s Progress',
        context: 'The central moment of Christian\'s pilgrimage—justification by faith.',
        themes: ['salvation', 'justification']
      },
      {
        id: 'chief-sinners',
        text: 'Wherefore I say, and say again, that grace can pardon our ungodliness and justify us with Christ\'s righteousness; it is sufficient to make the most godly man that lives to be as welcome to heaven as the chief of sinners.',
        source: 'Grace Abounding to the Chief of Sinners',
        context: 'Bunyan\'s testimony to the sufficiency of grace.',
        themes: ['grace', 'salvation']
      },
      {
        id: 'vanity-fair',
        text: 'Then I saw in my dream, that when they were got out of the wilderness, they presently saw a town before them, and the name of that town is Vanity.',
        source: 'The Pilgrim\'s Progress',
        context: 'Introduction to Vanity Fair, one of the most famous episodes.',
        themes: ['sanctification', 'sin']
      },
      {
        id: 'shall-not-die',
        text: 'When thou passest through the waters, I will be with thee, and through the rivers, they shall not overflow thee. Though I walk through the valley of the shadow of death, I will fear no evil, for thou art with me.',
        source: 'The Pilgrim\'s Progress (Christian crossing the river)',
        context: 'Comfort at the river of death before entering the Celestial City.',
        themes: ['eschatology', 'providence']
      }
    ],

    influences: ['luther', 'calvin', 'owen'],
    influenced: ['whitefield', 'spurgeon', 'mueller']
  },

  // ========================================
  // THOMAS WATSON
  // ========================================
  {
    id: 'watson',
    name: 'Watson',
    fullName: 'Thomas Watson',
    lifespan: '1620-1686',
    birthYear: 1620,
    deathYear: 1686,
    tradition: 'puritan',
    tagline: 'Prince of Puritan Divines',

    biography: {
      overview: `Thomas Watson was an English Puritan preacher and author, widely regarded as one of the clearest and most practical of Puritan writers. His works combine theological depth with memorable illustrations and pointed applications.

Watson served as rector of St. Stephen's Walbrook in London from 1646 until his ejection in 1662 under the Act of Uniformity. He continued to preach in private gatherings until the Declaration of Indulgence in 1672 allowed him to resume public ministry.

His systematic exposition of the Westminster Shorter Catechism, published as "A Body of Divinity," remains one of the finest introductions to Reformed theology. Watson wrote with rare clarity and warmth, making deep doctrines accessible and applicable.`,
      lifeStages: [
        {
          period: '1620-1646',
          title: 'Education & Early Ministry',
          description: 'Training at Cambridge and early pastoral work.',
          keyEvents: [
            'Born c. 1620',
            'Emmanuel College, Cambridge',
            'Ordination to ministry'
          ],
          location: 'Cambridge, England'
        },
        {
          period: '1646-1662',
          title: 'London Ministry',
          description: 'Sixteen years as rector of St. Stephen\'s Walbrook in London.',
          keyEvents: [
            'Appointed rector 1646',
            'Civil War and Commonwealth ministry',
            'Ejected 1662'
          ],
          location: 'London, England'
        },
        {
          period: '1662-1686',
          title: 'Nonconformist Preaching',
          description: 'Continued ministry despite ejection, writing major works.',
          keyEvents: [
            'Private conventicles',
            'Declaration of Indulgence 1672',
            'Death in Barnston 1686'
          ],
          location: 'London & Essex, England'
        }
      ],
      legacy: `Watson's literary legacy far exceeds his contemporary fame. His works, especially "A Body of Divinity," have been continuously in print and widely read for over three centuries.

His combination of doctrinal precision, practical application, and memorable expression makes him one of the most accessible Puritan writers for modern readers. C.H. Spurgeon highly recommended Watson, calling him "one of the most readable of the Puritans."`
    },

    majorWorks: [
      {
        id: 'body-divinity',
        title: 'A Body of Divinity',
        year: '1692 (posthumous)',
        category: 'major',
        summary: `A Body of Divinity is Watson's systematic exposition of the Westminster Shorter Catechism, covering the entire scope of Reformed theology from God's existence to the Lord's Prayer.

Watson moves through each question with doctrinal clarity, scriptural support, and pointed application. His gift for memorable phrases and illustrations makes abstract doctrines concrete and compelling.`,
        keyThemes: ['Systematic Theology', 'Catechesis', 'Application', 'Westminster Standards'],
        significance: 'Standard introduction to Reformed theology; continuously in print for 300+ years.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/watson/divinity.html', format: 'HTML' },
          { source: 'Monergism', url: 'https://www.monergism.com/body-divinity-ebook', format: 'PDF' }
        ]
      },
      {
        id: 'all-things-good',
        title: 'All Things for Good',
        year: '1663',
        category: 'major',
        summary: `Originally titled "A Divine Cordial," this treatise expounds Romans 8:28, showing how God works all things together for good to those who love him.

Watson examines both the "best things" and "worst things" that work for the believer's good, including afflictions, temptations, and even sins in the sense of God's overruling providence.`,
        keyThemes: ['Providence', 'Suffering', 'Comfort', 'Romans 8:28'],
        significance: 'Classic work on divine providence; greatly used for pastoral comfort.',
        freeLinks: [
          { source: 'Monergism', url: 'https://www.monergism.com/all-things-good', format: 'PDF' },
          { source: 'Archive.org', url: 'https://archive.org/details/divinecordialor00wats', format: 'PDF' }
        ]
      },
      {
        id: 'doctrine-repentance',
        title: 'The Doctrine of Repentance',
        year: '1668',
        category: 'major',
        summary: `This treatise provides a thorough analysis of biblical repentance, distinguishing true repentance from counterfeits and showing its necessity for salvation.

Watson examines the ingredients of repentance, the motivations for it, and the evidences of its genuineness.`,
        keyThemes: ['Repentance', 'Conversion', 'Sin', 'Self-Examination'],
        significance: 'Definitive Puritan treatment of repentance.',
        freeLinks: [
          { source: 'Monergism', url: 'https://www.monergism.com/doctrine-repentance-ebook', format: 'PDF' },
          { source: 'Archive.org', url: 'https://archive.org/details/doctrineofrepen00wats', format: 'PDF' }
        ]
      }
    ],

    theologicalPositions: [
      {
        topic: 'scripture',
        position: 'Scripture is the inspired, infallible Word of God, sufficient for all matters of faith and practice. It is to be read, studied, and applied with diligence.',
        distinctives: [
          'Scripture is God-breathed and without error',
          'The Bible is sufficient for salvation and godliness',
          'Scripture interprets Scripture',
          'Application is essential to true understanding'
        ],
        keyQuotes: [
          'The Scripture is the library of the Holy Ghost.',
          'The Word is the field in which Christ the Pearl of great price is hidden.'
        ],
        scriptureReferences: ['2 Timothy 3:16-17', 'Psalm 119:105', '2 Peter 1:20-21', 'Hebrews 4:12']
      },
      {
        topic: 'salvation',
        position: 'Salvation is entirely by grace through faith in Christ. It involves effectual calling, justification, adoption, sanctification, and glorification.',
        distinctives: [
          'Salvation is a Trinitarian work',
          'Faith alone justifies, but faith is never alone',
          'Grace is irresistible and effectual',
          'The saints persevere to the end'
        ],
        keyQuotes: [
          'Saving faith is a jewel that is only found in the hearts of the elect.',
          'Christ is the sum of the gospel.'
        ],
        scriptureReferences: ['Ephesians 2:8-9', 'Romans 8:30', 'Philippians 1:6', 'John 10:28-29']
      }
    ],

    notableQuotes: [
      {
        id: 'library-holy-ghost',
        text: 'The Scripture is the library of the Holy Ghost.',
        source: 'A Body of Divinity',
        context: 'Watson\'s famous description of the Bible\'s divine authorship.',
        themes: ['scripture']
      },
      {
        id: 'afflictions-blessings',
        text: 'Afflictions are blessings to us when we can bless God for afflictions.',
        source: 'All Things for Good',
        context: 'On the sanctifying purpose of trials.',
        themes: ['providence', 'sanctification']
      },
      {
        id: 'counterfeit-repentance',
        text: 'Counterfeit repentance flows from a fear of hell, but true repentance flows from love to God.',
        source: 'The Doctrine of Repentance',
        context: 'Distinguishing true from false repentance.',
        themes: ['salvation', 'sanctification']
      }
    ],

    influences: ['calvin', 'owen'],
    influenced: ['spurgeon']
  },

  // ========================================
  // STEPHEN CHARNOCK
  // ========================================
  {
    id: 'charnock',
    name: 'Charnock',
    fullName: 'Stephen Charnock',
    lifespan: '1628-1680',
    birthYear: 1628,
    deathYear: 1680,
    tradition: 'puritan',
    tagline: 'Theologian of the Divine Attributes',

    biography: {
      overview: `Stephen Charnock was an English Puritan Presbyterian clergyman, best known for his monumental work "The Existence and Attributes of God," which remains one of the most thorough treatments of theology proper ever written.

Charnock served as chaplain to Henry Cromwell in Ireland. After the Restoration, he was among those ejected from official ministry but continued to preach and write. In 1675, he became co-pastor with Thomas Watson at Crosby Hall, London.

His magnum opus on the divine attributes demonstrates extraordinary learning, philosophical acumen, and devotional warmth.`,
      lifeStages: [
        {
          period: '1628-1649',
          title: 'Education',
          description: 'Training at Emmanuel College, Cambridge.',
          keyEvents: [
            'Born in London 1628',
            'Emmanuel College education',
            'Early ministry preparation'
          ],
          location: 'London & Cambridge, England'
        },
        {
          period: '1649-1660',
          title: 'Irish Ministry',
          description: 'Service as chaplain in Ireland under the Cromwells.',
          keyEvents: [
            'Ministry in Southwark',
            'Chaplain to Henry Cromwell',
            'Irish pastoral work'
          ],
          location: 'London & Dublin, Ireland'
        },
        {
          period: '1660-1680',
          title: 'Nonconformist Ministry',
          description: 'Ejection, writing, and co-pastorate with Thomas Watson.',
          keyEvents: [
            'Ejection 1662',
            'Years of study and writing',
            'Co-pastor at Crosby Hall 1675',
            'Death 1680'
          ],
          location: 'London, England'
        }
      ],
      legacy: `Charnock's "Existence and Attributes of God" was published posthumously in 1682 and has never been out of print. It stands as perhaps the most comprehensive treatment of the doctrine of God in the English language.

His influence extends to theologians including Jonathan Edwards and Charles Spurgeon.`
    },

    majorWorks: [
      {
        id: 'existence-attributes',
        title: 'The Existence and Attributes of God',
        year: '1682 (posthumous)',
        category: 'major',
        summary: `This monumental work is the most comprehensive treatment of theology proper (the doctrine of God) in the English language. Published posthumously, it consists of fourteen discourses on God's existence and attributes.

Charnock treats each attribute with philosophical precision, scriptural grounding, and practical application. He covers God's existence, spirituality, immutability, eternity, omnipresence, knowledge, wisdom, power, holiness, goodness, dominion, and patience.`,
        keyThemes: ['Theology Proper', 'Divine Attributes', 'Worship', 'Application'],
        significance: 'The most comprehensive treatment of God\'s attributes in English; continuously in print.',
        freeLinks: [
          { source: 'CCEL', url: 'https://www.ccel.org/ccel/charnock/attributes.html', format: 'HTML' },
          { source: 'Monergism', url: 'https://www.monergism.com/existence-and-attributes-god', format: 'PDF' }
        ]
      }
    ],

    theologicalPositions: [
      {
        topic: 'sovereignty',
        position: 'God is the supreme, independent, self-existent Being who governs all things according to His wise and holy will. His sovereignty extends over all creation without exception.',
        distinctives: [
          'God is absolutely independent and self-sufficient',
          'Divine sovereignty is compatible with human responsibility',
          'Providence governs all events, great and small',
          'God\'s sovereignty should produce worship and trust'
        ],
        keyQuotes: [
          'God is his own end, and the end of all things.',
          'Nothing can be added to God; nothing can be taken from him.'
        ],
        scriptureReferences: ['Isaiah 46:10', 'Daniel 4:35', 'Romans 11:36', 'Ephesians 1:11']
      },
      {
        topic: 'sin',
        position: 'Sin is rebellion against God\'s infinite majesty. Its evil is measured by the dignity of the One against whom it is committed.',
        distinctives: [
          'Sin is primarily against God',
          'Sin\'s guilt is infinite due to God\'s infinite dignity',
          'Original sin corrupts the whole person',
          'Only infinite satisfaction can atone for sin'
        ],
        keyQuotes: [
          'Sin is the dare of God\'s justice, the rape of his mercy, the jeer of his patience, the slight of his power, the contempt of his love.'
        ],
        scriptureReferences: ['Psalm 51:4', 'Romans 3:23', 'Genesis 6:5', 'Isaiah 64:6']
      }
    ],

    notableQuotes: [
      {
        id: 'sin-contempt',
        text: 'Sin is the dare of God\'s justice, the rape of his mercy, the jeer of his patience, the slight of his power, the contempt of his love.',
        source: 'The Existence and Attributes of God',
        context: 'Charnock\'s powerful description of sin\'s offensiveness to God.',
        themes: ['sin', 'sovereignty']
      },
      {
        id: 'holiness-crown',
        text: 'Holiness is the crown of all God\'s attributes, the life of all his decrees, the brightness of all his actions.',
        source: 'The Existence and Attributes of God (On Holiness)',
        context: 'On the preeminence of divine holiness.',
        themes: ['sovereignty', 'sanctification']
      },
      {
        id: 'nothing-added',
        text: 'Nothing can be added to God; nothing can be taken from him. He is completely blessed in himself.',
        source: 'The Existence and Attributes of God',
        context: 'On God\'s self-sufficiency.',
        themes: ['sovereignty', 'trinity']
      }
    ],

    influences: ['augustine', 'calvin', 'owen'],
    influenced: ['edwards', 'spurgeon']
  },

  // ========================================
  // BENJAMIN BRECKINRIDGE WARFIELD
  // ========================================
  {
    id: 'warfield',
    name: 'Warfield',
    fullName: 'Benjamin Breckinridge Warfield',
    lifespan: '1851-1921',
    birthYear: 1851,
    deathYear: 1921,
    tradition: 'modern_reformed',
    tagline: 'Lion of Princeton',

    biography: {
      overview: `Benjamin Breckinridge Warfield was an American Presbyterian theologian who served as professor of theology at Princeton Theological Seminary from 1887 to 1921. He is widely regarded as the last great defender of Old Princeton orthodoxy.

Warfield was a prolific scholar whose writings spanned systematic theology, biblical studies, polemics, and church history. He is particularly known for his rigorous defense of biblical inerrancy.

His personal life was marked by devoted care for his invalid wife, Annie, whom he rarely left during their 34 years of marriage after she was struck by lightning on their honeymoon.`,
      lifeStages: [
        {
          period: '1851-1876',
          title: 'Education',
          description: 'Training at Princeton and European universities.',
          keyEvents: [
            'Born near Lexington 1851',
            'Princeton College 1871',
            'Princeton Seminary',
            'European study'
          ],
          location: 'Kentucky, Princeton NJ, Germany'
        },
        {
          period: '1876-1887',
          title: 'Early Career',
          description: 'Teaching at Western Seminary and early publications.',
          keyEvents: [
            'Marriage to Annie Kinkead 1876',
            'Professor at Western Seminary 1878',
            'Early writings on inspiration'
          ],
          location: 'Pittsburgh, Pennsylvania'
        },
        {
          period: '1887-1921',
          title: 'Princeton Years',
          description: 'Thirty-four years defending Reformed orthodoxy at Princeton.',
          keyEvents: [
            'Professor at Princeton 1887',
            'Prolific writing',
            'Annie\'s death 1915',
            'Death 1921'
          ],
          location: 'Princeton, New Jersey'
        }
      ],
      legacy: `Warfield left a massive literary legacy, including over 700 published articles and reviews. His works on inspiration, Calvin, Augustine, perfectionism, and counterfeit miracles remain standard references.

After the Princeton reorganization of 1929, Warfield's students like J. Gresham Machen carried his legacy to Westminster Theological Seminary.`
    },

    majorWorks: [
      {
        id: 'inspiration-authority',
        title: 'The Inspiration and Authority of the Bible',
        year: '1948 (collected)',
        category: 'major',
        summary: `This collection of Warfield's writings on Scripture presents the classic Princeton doctrine of biblical inspiration and inerrancy. It includes his seminal essay with A.A. Hodge on "Inspiration" (1881).

Warfield argued that Scripture is "God-breathed" in its entirety, that inspiration extends to the very words of the original manuscripts, and that this doctrine is taught by Scripture itself.`,
        keyThemes: ['Biblical Inspiration', 'Inerrancy', 'Authority', 'Hermeneutics'],
        significance: 'Definitive statement of biblical inerrancy; shaped evangelical doctrine of Scripture.',
        freeLinks: [
          { source: 'Monergism', url: 'https://www.monergism.com/topics/authority-scripture/bb-warfield', format: 'PDF' },
          { source: 'Archive.org', url: 'https://archive.org/details/inspirationandau012244mbp', format: 'PDF' }
        ]
      },
      {
        id: 'perfectionism',
        title: 'Perfectionism',
        year: '1931',
        category: 'major',
        summary: `This two-volume work is a comprehensive historical and theological critique of perfectionist movements from the early church to the Keswick movement.

Warfield argued that such teachings undermine the gospel of grace and misrepresent both Scripture and Christian experience.`,
        keyThemes: ['Sanctification', 'Perfectionism', 'Grace', 'Historical Theology'],
        significance: 'Definitive Reformed critique of perfectionist and Higher Life movements.',
        freeLinks: [
          { source: 'Archive.org', url: 'https://archive.org/details/perfectionism01warf', format: 'PDF' },
          { source: 'Monergism', url: 'https://www.monergism.com/topics/sanctification/perfectionism', format: 'PDF' }
        ]
      },
      {
        id: 'counterfeit-miracles',
        title: 'Counterfeit Miracles',
        year: '1918',
        category: 'major',
        summary: `In this work, Warfield argues that the miraculous gifts of the apostolic age ceased with the apostles. He examines claims of miracles throughout church history with careful historical and theological analysis.`,
        keyThemes: ['Miracles', 'Cessationism', 'Church History', 'Apologetics'],
        significance: 'Influential argument for cessationism.',
        freeLinks: [
          { source: 'Archive.org', url: 'https://archive.org/details/counterfeit00warfuoft', format: 'PDF' },
          { source: 'Monergism', url: 'https://www.monergism.com/counterfeit-miracles-ebook', format: 'PDF' }
        ]
      }
    ],

    theologicalPositions: [
      {
        topic: 'scripture',
        position: 'Scripture is the inspired, inerrant Word of God in its original manuscripts. Inspiration extends to the very words (verbal) and to all parts of Scripture (plenary).',
        distinctives: [
          'Verbal plenary inspiration of original manuscripts',
          'Inerrancy follows necessarily from inspiration',
          'Christ\'s view of Scripture is determinative',
          'Inspiration does not negate human authorship'
        ],
        keyQuotes: [
          'The Bible is the Word of God in such a sense that its words, though written by men, were written under such an influence of the Holy Ghost as to be also the words of God.'
        ],
        scriptureReferences: ['2 Timothy 3:16', '2 Peter 1:21', 'John 10:35', 'Matthew 5:18']
      },
      {
        topic: 'salvation',
        position: 'Salvation is entirely of grace, from election to glorification. It is accomplished by Christ and applied by the Spirit to the elect.',
        distinctives: [
          'Unconditional election from eternity',
          'Definite atonement for the elect',
          'Irresistible grace in effectual calling',
          'Perseverance of all true saints'
        ],
        keyQuotes: [
          'A dead man cannot assist in his own resurrection.'
        ],
        scriptureReferences: ['Ephesians 1:4-5', 'Romans 8:29-30', 'John 6:37', 'Philippians 1:6']
      }
    ],

    notableQuotes: [
      {
        id: 'words-of-god',
        text: 'The Bible is the Word of God in such a sense that its words, though written by men and bearing indelibly impressed upon them the marks of their human origin, were written, nevertheless, under such an influence of the Holy Ghost as to be also the words of God.',
        source: 'The Inspiration and Authority of the Bible',
        context: 'Warfield\'s classic definition of inspiration.',
        themes: ['scripture']
      },
      {
        id: 'dead-man',
        text: 'A dead man cannot assist in his own resurrection.',
        source: 'The Plan of Salvation',
        context: 'On total depravity and sovereign grace.',
        themes: ['salvation', 'grace']
      },
      {
        id: 'christ-view-scripture',
        text: 'The Church doctrine of inspiration was the doctrine of Christ and his apostles.',
        source: 'The Inspiration and Authority of the Bible',
        context: 'On Christ\'s own view of Scripture.',
        themes: ['scripture', 'christology']
      }
    ],

    influences: ['augustine', 'calvin', 'edwards', 'owen'],
    influenced: ['machen']
  },

  // ========================================
  // J. GRESHAM MACHEN
  // ========================================
  {
    id: 'machen',
    name: 'Machen',
    fullName: 'John Gresham Machen',
    lifespan: '1881-1937',
    birthYear: 1881,
    deathYear: 1937,
    tradition: 'modern_reformed',
    tagline: 'Defender of Historic Christianity',

    biography: {
      overview: `J. Gresham Machen was an American Presbyterian scholar and apologist who became the leading intellectual opponent of theological liberalism in the early twentieth century. His book "Christianity and Liberalism" remains a classic defense of orthodox Christianity.

Machen taught New Testament at Princeton Seminary until the 1929 reorganization, when he left to found Westminster Theological Seminary. He later founded the Orthodox Presbyterian Church.

Though he died at only 55, Machen left a legacy of scholarly excellence and courageous defense of the faith that continues to influence Reformed Christianity.`,
      lifeStages: [
        {
          period: '1881-1905',
          title: 'Education',
          description: 'Formation at Johns Hopkins, Princeton, and German universities.',
          keyEvents: [
            'Born in Baltimore 1881',
            'Johns Hopkins BA 1901',
            'Princeton Seminary 1902-1905',
            'German study 1905-1906'
          ],
          location: 'Baltimore, Princeton NJ, Germany'
        },
        {
          period: '1906-1929',
          title: 'Princeton Years',
          description: 'Teaching New Testament and defending orthodoxy at Princeton.',
          keyEvents: [
            'Faculty position 1906',
            'Christianity and Liberalism 1923',
            'Professor 1929',
            'Left Princeton 1929'
          ],
          location: 'Princeton, New Jersey'
        },
        {
          period: '1929-1937',
          title: 'Westminster & OPC',
          description: 'Founding new institutions for Reformed orthodoxy.',
          keyEvents: [
            'Westminster Seminary founded 1929',
            'Independent Board 1933',
            'Suspension 1936',
            'OPC founded 1936',
            'Death 1937'
          ],
          location: 'Philadelphia, Pennsylvania'
        }
      ],
      legacy: `Machen's scholarly and popular writings continue to defend historic Christianity. Westminster Seminary carries on his vision of rigorous academic preparation for ministry.

His distinction between Christianity and liberalism remains influential, as does his model of scholarly engagement with the broader culture.`
    },

    majorWorks: [
      {
        id: 'christianity-liberalism',
        title: 'Christianity and Liberalism',
        year: '1923',
        category: 'major',
        summary: `This explosive book argues that theological liberalism is not a variant of Christianity but an entirely different religion. Machen examines the liberal view of God, man, the Bible, Christ, and salvation, showing how it differs fundamentally from historic Christianity.

The work caused a sensation when published and remains influential nearly a century later as a model of theological clarity and apologetic courage.`,
        keyThemes: ['Apologetics', 'Liberalism', 'Doctrine', 'Historic Christianity'],
        significance: 'Classic defense of orthodoxy against liberalism; still widely read.',
        freeLinks: [
          { source: 'Archive.org', url: 'https://archive.org/details/christianityandl00mach', format: 'PDF' },
          { source: 'Monergism', url: 'https://www.monergism.com/christianity-and-liberalism-ebook', format: 'PDF' }
        ]
      },
      {
        id: 'virgin-birth',
        title: 'The Virgin Birth of Christ',
        year: '1930',
        category: 'major',
        summary: `This scholarly work defends the historical reality of Christ's virgin birth against critical attacks. Machen examines the biblical evidence, the history of the doctrine, and the objections of liberal scholars.`,
        keyThemes: ['Virgin Birth', 'Incarnation', 'Biblical Authority', 'Apologetics'],
        significance: 'Definitive scholarly defense of the virgin birth.',
        freeLinks: [
          { source: 'Archive.org', url: 'https://archive.org/details/virginbirthofchr00mach', format: 'PDF' },
          { source: 'Monergism', url: 'https://www.monergism.com/virgin-birth-christ-ebook', format: 'PDF' }
        ]
      },
      {
        id: 'new-testament-greek',
        title: 'New Testament Greek for Beginners',
        year: '1923',
        category: 'major',
        summary: `This introductory Greek grammar has been used by generations of seminary students. It provides a thorough grounding in the basics of New Testament Greek with careful explanations and abundant exercises.`,
        keyThemes: ['Greek', 'Biblical Languages', 'Education', 'Scholarship'],
        significance: 'Standard NT Greek textbook for nearly a century.',
        freeLinks: [
          { source: 'Archive.org', url: 'https://archive.org/details/newtestamentgree00mach', format: 'PDF' }
        ]
      }
    ],

    theologicalPositions: [
      {
        topic: 'scripture',
        position: 'Scripture is the inspired, inerrant Word of God, the only infallible rule of faith and practice. Higher criticism\'s attacks on Scripture must be resisted.',
        distinctives: [
          'Scripture is fully inspired and without error',
          'The Bible is the church\'s final authority',
          'Higher criticism is based on anti-supernatural bias',
          'Defending Scripture is central to defending Christianity'
        ],
        keyQuotes: [
          'False ideas are the greatest obstacles to the reception of the gospel.'
        ],
        scriptureReferences: ['2 Timothy 3:16', '2 Peter 1:21', 'John 17:17', 'Matthew 5:18']
      },
      {
        topic: 'christology',
        position: 'Jesus Christ is fully God and fully man. His deity, virgin birth, substitutionary atonement, and bodily resurrection are essential Christian doctrines.',
        distinctives: [
          'Christ\'s deity is essential, not optional',
          'The virgin birth is historical fact',
          'The resurrection is bodily and literal',
          'Liberal views of Christ destroy Christianity'
        ],
        keyQuotes: [
          'The Jesus of liberalism is not the Jesus of the Bible.',
          'A Christianity without the supernatural is not Christianity at all.'
        ],
        scriptureReferences: ['John 1:1-14', 'Matthew 1:23', '1 Corinthians 15:3-8', 'Colossians 2:9']
      },
      {
        topic: 'salvation',
        position: 'Salvation is by grace alone through faith alone in Christ alone. The substitutionary atonement of Christ is the ground of salvation.',
        distinctives: [
          'Salvation is not by character development',
          'Christ bore the penalty for sin',
          'Faith receives what Christ accomplished',
          'Liberal "salvation" is self-salvation'
        ],
        keyQuotes: [
          'Christianity is based upon an account of something that happened.'
        ],
        scriptureReferences: ['Romans 3:24-26', '2 Corinthians 5:21', 'Ephesians 2:8-9', '1 Peter 2:24']
      }
    ],

    notableQuotes: [
      {
        id: 'different-religion',
        text: 'The chief modern rival of Christianity is "liberalism"... the many varieties of modern liberal religion are rooted in naturalism.',
        source: 'Christianity and Liberalism',
        context: 'Machen\'s thesis that liberalism is a different religion.',
        themes: ['scripture', 'salvation']
      },
      {
        id: 'something-happened',
        text: 'Christianity is based upon an account of something that happened, and the Christian worker is primarily a witness.',
        source: 'Christianity and Liberalism',
        context: 'On the historical basis of Christianity.',
        themes: ['christology', 'salvation']
      },
      {
        id: 'false-ideas',
        text: 'False ideas are the greatest obstacles to the reception of the gospel.',
        source: 'Christianity and Liberalism',
        context: 'On the importance of defending truth.',
        themes: ['scripture', 'salvation']
      },
      {
        id: 'dying-words',
        text: 'I\'m so thankful for the active obedience of Christ. No hope without it.',
        source: 'Telegram to John Murray from his deathbed, January 1, 1937',
        context: 'Machen\'s last recorded words.',
        themes: ['salvation', 'christology']
      }
    ],

    influences: ['warfield', 'calvin', 'augustine'],
    influenced: []
  }
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getAuthorById(id: AuthorId): ChurchHistoryAuthor | undefined {
  return CHURCH_HISTORY_AUTHORS.find(author => author.id === id);
}

export function getAuthorsByTradition(tradition: TheologicalTradition): ChurchHistoryAuthor[] {
  return CHURCH_HISTORY_AUTHORS.filter(author => author.tradition === tradition);
}

export function getAllAuthors(): ChurchHistoryAuthor[] {
  return CHURCH_HISTORY_AUTHORS;
}

export function getAuthorWorks(authorId: AuthorId): AuthorWork[] {
  const author = getAuthorById(authorId);
  return author?.majorWorks || [];
}

export function getAuthorQuotes(authorId: AuthorId): NotableQuote[] {
  const author = getAuthorById(authorId);
  return author?.notableQuotes || [];
}

export function searchAuthors(query: string): ChurchHistoryAuthor[] {
  const lowerQuery = query.toLowerCase();
  return CHURCH_HISTORY_AUTHORS.filter(author =>
    author.name.toLowerCase().includes(lowerQuery) ||
    author.fullName.toLowerCase().includes(lowerQuery) ||
    author.tagline.toLowerCase().includes(lowerQuery) ||
    author.biography.overview.toLowerCase().includes(lowerQuery)
  );
}
