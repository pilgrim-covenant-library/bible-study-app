// Church History Authors Data
// Comprehensive profiles of 5 Reformed theologians with biographies, works, theology, and free resources

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export type AuthorId = 'augustine' | 'luther' | 'calvin' | 'owen' | 'edwards';

export type TheologicalTradition = 'early_church' | 'reformation' | 'puritan' | 'american_reformed';

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
