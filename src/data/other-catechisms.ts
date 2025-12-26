// Cross-Tradition Catechism Distractors
// Answers from Catholic, Lutheran, Anglican, and other Reformed traditions
// Used to create challenging MCQ options that test understanding of Reformed distinctives

import { CatechismCategory } from './westminster-catechism';
import { DistractorType } from './wsc-distractors';

export interface CrossTraditionDistractor {
  text: string;
  source: 'Baltimore' | 'Heidelberg' | 'Lutheran' | 'Anglican' | 'Orthodox' | 'Baptist';
  wscQuestionIds: string[];  // WSC questions this applies to
  category: CatechismCategory;
  explanation: string;       // Why it differs from Reformed/Westminster teaching
  type: DistractorType;
}

// Cross-tradition distractors organized by theological topic
export const CROSS_TRADITION_DISTRACTORS: CrossTraditionDistractor[] = [
  // ============================================
  // GOD & SCRIPTURE (Q1-3)
  // ============================================

  // Q1: Chief End of Man
  {
    text: "Man's chief end is to know, love, and serve God in this life, and to be happy with Him forever in the next.",
    source: 'Baltimore',
    wscQuestionIds: ['wsc-1'],
    category: 'god_scripture',
    explanation: "Baltimore Catechism adds 'know, love, serve' instead of 'glorify and enjoy'. The Reformed emphasis on ENJOYING God as our highest good is distinctive.",
    type: 'near_miss',
  },
  {
    text: "My only comfort in life and death is that I am not my own, but belong to my faithful Savior Jesus Christ.",
    source: 'Heidelberg',
    wscQuestionIds: ['wsc-1'],
    category: 'god_scripture',
    explanation: "Heidelberg Q1 focuses on comfort/belonging rather than purpose/end. Both are Reformed, but Westminster emphasizes our PURPOSE (glorifying God), while Heidelberg emphasizes our IDENTITY (belonging to Christ).",
    type: 'near_miss',
  },
  {
    text: "Man's chief end is to love God with all his heart and his neighbor as himself.",
    source: 'Baptist',
    wscQuestionIds: ['wsc-1'],
    category: 'god_scripture',
    explanation: "This conflates the greatest commandment with our chief end. While we must love God, our chief END is to glorify and enjoy Him—love is the means, not the end.",
    type: 'word_swap',
  },

  // Q2: Rule of faith
  {
    text: "The Word of God, contained in the Scriptures of the Old and New Testaments together with Sacred Tradition, is the only rule to direct us.",
    source: 'Orthodox',
    wscQuestionIds: ['wsc-2'],
    category: 'god_scripture',
    explanation: "Orthodox and Catholic traditions add Tradition as co-authoritative with Scripture. Westminster holds to sola scriptura—Scripture ALONE is the rule.",
    type: 'addition',
  },
  {
    text: "The Scriptures principally teach what man is to do to be saved.",
    source: 'Baltimore',
    wscQuestionIds: ['wsc-3'],
    category: 'god_scripture',
    explanation: "This reverses the order. Westminster says Scripture teaches what we must BELIEVE about God first, then what duty God requires. Faith precedes works.",
    type: 'wrong_order',
  },

  // ============================================
  // GOD'S NATURE (Q4-6)
  // ============================================

  // Q4: What is God?
  {
    text: "God is the Supreme Being, infinitely perfect, who made all things and keeps them in existence.",
    source: 'Baltimore',
    wscQuestionIds: ['wsc-4'],
    category: 'god_nature',
    explanation: "Baltimore's answer is simpler but omits the specific attributes: being, wisdom, power, holiness, justice, goodness, truth. Westminster's detailed list guards against misunderstanding God's character.",
    type: 'omission',
  },
  {
    text: "God is love, infinite and eternal, unchangeable in His mercy and compassion toward all.",
    source: 'Baptist',
    wscQuestionIds: ['wsc-4'],
    category: 'god_nature',
    explanation: "While God is love (1 John 4:8), this omits His holiness, justice, and other attributes. God's love is HOLY love; His mercy is JUST mercy. All attributes must be held together.",
    type: 'omission',
  },

  // Q6: Trinity
  {
    text: "There is one divine essence, but three distinct persons: Father, Son, and Holy Spirit, who share this essence equally.",
    source: 'Lutheran',
    wscQuestionIds: ['wsc-6'],
    category: 'god_nature',
    explanation: "Lutheran wording is similar but Westminster specifically says 'the same in substance' (homoousios), not just 'sharing essence'. This Nicene term guards against subordinationism.",
    type: 'near_miss',
  },
  {
    text: "The Father is God, the Son is God, the Holy Spirit is God; yet there are not three Gods but one God in Trinity.",
    source: 'Anglican',
    wscQuestionIds: ['wsc-6'],
    category: 'god_nature',
    explanation: "This is true but incomplete. Westminster adds 'equal in power and glory'—emphasizing the Son and Spirit are not lesser than the Father.",
    type: 'omission',
  },

  // ============================================
  // DECREES (Q7-12)
  // ============================================

  // Q7: Decrees of God
  {
    text: "God, from eternity, foreseeing all things, has ordained those He knew would believe to eternal life.",
    source: 'Baptist',
    wscQuestionIds: ['wsc-7'],
    category: 'decrees',
    explanation: "This is Arminian foreknowledge, not Reformed foreordination. Westminster says God 'foreordained whatsoever comes to pass'—He doesn't merely foresee, He decrees.",
    type: 'near_miss',
  },
  {
    text: "The decrees of God are His eternal purpose to permit all things that come to pass for His glory.",
    source: 'Baptist',
    wscQuestionIds: ['wsc-7'],
    category: 'decrees',
    explanation: "God doesn't merely 'permit'—He 'foreordains'. Westminster affirms God's active decree over all things, not passive permission. Even evil serves His purpose (though He is not its author).",
    type: 'word_swap',
  },

  // Q10: Creation
  {
    text: "God made all things visible and invisible, giving them their proper nature and order.",
    source: 'Baltimore',
    wscQuestionIds: ['wsc-10'],
    category: 'creation_providence',
    explanation: "Westminster specifies creation was 'out of nothing' (ex nihilo), 'by the word of His power', and 'in the space of six days'. These details matter for understanding God's creative act.",
    type: 'omission',
  },

  // ============================================
  // FALL & SIN (Q13-20)
  // ============================================

  // Q13: Covenant of Life / Works
  {
    text: "God placed Adam in paradise, commanding him to keep the law written on his heart.",
    source: 'Orthodox',
    wscQuestionIds: ['wsc-12'],
    category: 'creation_providence',
    explanation: "Westminster specifically mentions a 'covenant of life' with a specific test (tree of knowledge). The covenant framework is crucial for understanding Adam as federal head.",
    type: 'omission',
  },

  // Q17: Fall
  {
    text: "The sin of our first parents was eating the forbidden fruit, by which they lost sanctifying grace.",
    source: 'Baltimore',
    wscQuestionIds: ['wsc-17'],
    category: 'fall_sin',
    explanation: "Baltimore focuses on loss of 'sanctifying grace'. Westminster says they fell from their 'original righteousness and communion with God'. The Reformed view emphasizes relationship, not just grace as substance.",
    type: 'near_miss',
  },

  // Q18: Original Sin
  {
    text: "Original sin is a wound in human nature that inclines us toward evil, though it does not destroy free will entirely.",
    source: 'Baltimore',
    wscQuestionIds: ['wsc-18'],
    category: 'fall_sin',
    explanation: "Catholic view: original sin 'wounds' but doesn't destroy free will. Westminster: we are 'utterly indisposed, disabled, and made opposite to all good'. Total depravity, not merely wounded nature.",
    type: 'near_miss',
  },
  {
    text: "We inherit the guilt of Adam's sin, but each person's will remains free to choose good or evil.",
    source: 'Orthodox',
    wscQuestionIds: ['wsc-18', 'wsc-19'],
    category: 'fall_sin',
    explanation: "Orthodox tradition often rejects inherited guilt (only inheriting mortality/corruption). Westminster affirms both guilt AND corruption are passed to all Adam's descendants.",
    type: 'near_miss',
  },

  // ============================================
  // CHRIST & REDEMPTION (Q21-28)
  // ============================================

  // Q21: Redeemer
  {
    text: "Jesus Christ, the eternal Son of God, became man by taking a body and soul from the Virgin Mary.",
    source: 'Baltimore',
    wscQuestionIds: ['wsc-21'],
    category: 'christ_redemption',
    explanation: "Westminster emphasizes Christ as 'the only Redeemer of God's elect'. The particularity of redemption (for the elect) is a key Reformed distinctive.",
    type: 'omission',
  },

  // Q23: Offices of Christ
  {
    text: "Christ executes the office of a priest by offering Himself as a sacrifice in the Mass for the sins of the living and dead.",
    source: 'Baltimore',
    wscQuestionIds: ['wsc-25'],
    category: 'christ_redemption',
    explanation: "Westminster says Christ offered Himself 'once' as a sacrifice. The Mass as re-presentation of sacrifice contradicts the 'once for all' nature of Christ's atonement (Hebrews 10:10).",
    type: 'near_miss',
  },

  // Q25: Christ as Priest
  {
    text: "Christ as priest continually offers Himself to the Father in the Eucharist for the remission of sins.",
    source: 'Baltimore',
    wscQuestionIds: ['wsc-25'],
    category: 'christ_redemption',
    explanation: "Westminster says Christ 'offered up himself a sacrifice'. Past tense—completed at the cross. He now 'makes continual intercession for us', not continual offering.",
    type: 'near_miss',
  },

  // ============================================
  // APPLICATION OF REDEMPTION (Q29-38)
  // ============================================

  // Q30: Holy Spirit's Application
  {
    text: "The Spirit applies redemption by enabling us to cooperate with grace, which we may accept or reject.",
    source: 'Baptist',
    wscQuestionIds: ['wsc-30', 'wsc-31'],
    category: 'christ_redemption',
    explanation: "Arminian view: grace is resistible. Westminster: the Spirit 'effectually' calls—His work always accomplishes its purpose in the elect. Grace is not merely offered but applied.",
    type: 'near_miss',
  },

  // Q31: Effectual Calling
  {
    text: "I believe that I cannot by my own reason or strength believe in Jesus Christ, my Lord, or come to Him; but the Holy Ghost has called me by the Gospel.",
    source: 'Lutheran',
    wscQuestionIds: ['wsc-31'],
    category: 'christ_redemption',
    explanation: "Luther's Small Catechism is similar, but Westminster adds that calling is 'effectual'—it doesn't just invite, it accomplishes. Also, Westminster emphasizes 'enlightening their minds' and 'renewing their wills'.",
    type: 'near_miss',
  },

  // Q32: Benefits in this life
  {
    text: "The benefits we receive in this life include forgiveness of sins, sanctifying grace, and the right to heaven.",
    source: 'Baltimore',
    wscQuestionIds: ['wsc-32'],
    category: 'application',
    explanation: "Westminster specifies: justification, adoption, sanctification, and benefits flowing from them. The Reformed order and distinctions (justification vs. sanctification) are theologically significant.",
    type: 'near_miss',
  },

  // Q33: Justification
  {
    text: "Justification is an increase in holiness by which we are made righteous through grace and good works.",
    source: 'Baltimore',
    wscQuestionIds: ['wsc-33'],
    category: 'application',
    explanation: "Catholic: justification makes us righteous (infused righteousness). Westminster: justification DECLARES us righteous (imputed righteousness). Justification is forensic, not transformative.",
    type: 'near_miss',
  },
  {
    text: "In justification, God's righteousness is infused into us, making us progressively more holy.",
    source: 'Orthodox',
    wscQuestionIds: ['wsc-33'],
    category: 'application',
    explanation: "Orthodox/Catholic view: infused righteousness. Reformed view: Christ's righteousness is IMPUTED (credited) to us—declared righteous by faith alone, not made righteous.",
    type: 'near_miss',
  },

  // Q34: Adoption
  {
    text: "By baptism we are made children of God and heirs of the kingdom of heaven.",
    source: 'Baltimore',
    wscQuestionIds: ['wsc-34'],
    category: 'application',
    explanation: "Baltimore ties adoption to baptism. Westminster says adoption is 'an act of God's free grace' whereby we are 'received into the number of His children'. It's God's act, not a sacramental effect.",
    type: 'near_miss',
  },

  // Q35: Sanctification
  {
    text: "Sanctification is the grace of God by which we are entirely freed from sin in this life through perfect love.",
    source: 'Baptist',
    wscQuestionIds: ['wsc-35'],
    category: 'application',
    explanation: "This is Wesleyan 'entire sanctification'. Westminster says we are 'more and more' enabled to die to sin—sanctification is progressive, not instantaneously complete in this life.",
    type: 'near_miss',
  },

  // ============================================
  // TEN COMMANDMENTS (Q39-81)
  // ============================================

  // Q39: Moral Law
  {
    text: "The moral law is the natural law written on every heart, which reason can discover without special revelation.",
    source: 'Baltimore',
    wscQuestionIds: ['wsc-41'],
    category: 'ten_commandments',
    explanation: "While natural law exists, Westminster emphasizes the moral law was 'summarily comprehended in the ten commandments'—special revelation clarifies what sin obscures in the heart.",
    type: 'near_miss',
  },

  // Q46: First Commandment
  {
    text: "The first commandment teaches us to worship God alone, which includes honoring the saints as helpers.",
    source: 'Baltimore',
    wscQuestionIds: ['wsc-46'],
    category: 'ten_commandments',
    explanation: "Westminster forbids giving 'to any other, that worship and glory which is due to Him alone'. Veneration of saints as intercessors violates the exclusive worship God demands.",
    type: 'addition',
  },

  // Q49: Second Commandment
  {
    text: "The second commandment forbids worshiping idols, but allows sacred images as aids to devotion.",
    source: 'Baltimore',
    wscQuestionIds: ['wsc-49', 'wsc-50'],
    category: 'ten_commandments',
    explanation: "Westminster forbids 'the making any representation of God'. The regulative principle prohibits images in worship even as 'aids'—we worship in spirit and truth, not through physical representations.",
    type: 'near_miss',
  },

  // Q51: Third Commandment
  {
    text: "The third commandment forbids taking God's name in vain through profanity and false oaths.",
    source: 'Lutheran',
    wscQuestionIds: ['wsc-53', 'wsc-54'],
    category: 'ten_commandments',
    explanation: "Westminster adds profaning God's name in 'our thoughts, words, or works'. It's not just speech but all of life—we can profane God's name by inconsistent living.",
    type: 'omission',
  },

  // Q56: Fourth Commandment (Sabbath)
  {
    text: "The Sabbath was fulfilled in Christ; Christians are free to worship on any day they choose.",
    source: 'Baptist',
    wscQuestionIds: ['wsc-58', 'wsc-59'],
    category: 'ten_commandments',
    explanation: "Westminster maintains one day in seven as 'the Christian Sabbath'. While the day changed (Saturday to Sunday), the principle of weekly rest and worship continues.",
    type: 'near_miss',
  },

  // ============================================
  // SACRAMENTS & MEANS OF GRACE (Q82-107)
  // ============================================

  // Q88: Means of Grace
  {
    text: "The outward means whereby Christ communicates the benefits of redemption are the sacraments, which confer grace ex opere operato.",
    source: 'Baltimore',
    wscQuestionIds: ['wsc-88'],
    category: 'means_of_grace',
    explanation: "Westminster says the means are 'Word, sacraments, and prayer'—Word comes first. And grace is communicated 'especially' (not automatically) through these means. No ex opere operato.",
    type: 'near_miss',
  },

  // Q91: Sacraments
  {
    text: "A sacrament is an outward sign instituted by Christ to give grace to those who receive it worthily.",
    source: 'Baltimore',
    wscQuestionIds: ['wsc-92'],
    category: 'means_of_grace',
    explanation: "Westminster says sacraments are 'signs and seals' of the covenant of grace. They signify AND seal (confirm)—they don't automatically 'give grace' but confirm the grace already given to believers.",
    type: 'near_miss',
  },
  {
    text: "A sacrament is an outward and visible sign of an inward and spiritual grace given unto us.",
    source: 'Anglican',
    wscQuestionIds: ['wsc-92'],
    category: 'means_of_grace',
    explanation: "The Anglican answer omits that sacraments are 'seals'. They don't just signify grace—they seal and confirm it to believers. Also, they are 'ordained by Christ himself' with specific elements.",
    type: 'omission',
  },

  // Q92: Number of Sacraments
  {
    text: "Christ instituted seven sacraments: Baptism, Confirmation, Eucharist, Penance, Anointing, Orders, and Matrimony.",
    source: 'Baltimore',
    wscQuestionIds: ['wsc-93'],
    category: 'means_of_grace',
    explanation: "Westminster recognizes only two sacraments: Baptism and the Lord's Supper. Only these were directly instituted by Christ with specific visible elements for the whole church.",
    type: 'near_miss',
  },

  // Q94: Baptism
  {
    text: "Baptism washes away original sin and all sins committed before baptism, infusing sanctifying grace.",
    source: 'Baltimore',
    wscQuestionIds: ['wsc-94'],
    category: 'means_of_grace',
    explanation: "Westminster says baptism is a 'sign and seal' of union with Christ and regeneration—it signifies these realities, it doesn't automatically cause them. Baptism without faith doesn't save.",
    type: 'near_miss',
  },
  {
    text: "Baptism is to be administered only to those who profess personal faith in Christ.",
    source: 'Baptist',
    wscQuestionIds: ['wsc-95'],
    category: 'means_of_grace',
    explanation: "Westminster teaches infant baptism: children of believers are to be baptized as members of the covenant community, just as infants were circumcised in the old covenant.",
    type: 'near_miss',
  },

  // Q96: Lord's Supper
  {
    text: "In the Eucharist, the bread and wine become the actual body and blood of Christ (transubstantiation).",
    source: 'Baltimore',
    wscQuestionIds: ['wsc-96'],
    category: 'means_of_grace',
    explanation: "Westminster says the bread and wine 'represent' Christ's body and blood. Christ is spiritually present to faith, but the elements remain bread and wine. No transubstantiation.",
    type: 'near_miss',
  },
  {
    text: "The Lord's Supper is a memorial meal in which Christ is not present in any special way.",
    source: 'Baptist',
    wscQuestionIds: ['wsc-96'],
    category: 'means_of_grace',
    explanation: "The memorialist view (Zwingli/some Baptists) reduces it to remembrance only. Westminster teaches believers 'spiritually receive and feed upon Christ'—He is truly present to faith.",
    type: 'near_miss',
  },
  {
    text: "In, with, and under the bread and wine, the true body and blood of Christ are present (consubstantiation).",
    source: 'Lutheran',
    wscQuestionIds: ['wsc-96'],
    category: 'means_of_grace',
    explanation: "Lutheran view: bodily presence 'in, with, under' the elements. Westminster: spiritual presence. Christ's body is in heaven; He is present to faith, not in the physical elements.",
    type: 'near_miss',
  },

  // Q98: Prayer
  {
    text: "Prayer is the raising of the heart and mind to God, including prayers to the saints as intercessors.",
    source: 'Baltimore',
    wscQuestionIds: ['wsc-98'],
    category: 'means_of_grace',
    explanation: "Westminster says prayer is 'an offering up of our desires unto God' in Christ's name. Prayer is to God alone through Christ alone—no other mediators or intercessors.",
    type: 'addition',
  },

  // Q99: Lord's Prayer
  {
    text: "The Lord's Prayer teaches us what to pray for and gives us words to recite in our devotions.",
    source: 'Orthodox',
    wscQuestionIds: ['wsc-99'],
    category: 'means_of_grace',
    explanation: "Westminster emphasizes the Lord's Prayer as a 'pattern' or 'directory'—teaching us how to pray, not just words to recite. It guides all prayer, not just liturgical repetition.",
    type: 'near_miss',
  },

  // Q100: Lord's Prayer - Address
  {
    text: "We call God 'Our Father' because through baptism we have become His adopted children.",
    source: 'Baltimore',
    wscQuestionIds: ['wsc-100'],
    category: 'means_of_grace',
    explanation: "Westminster says 'Our Father' teaches us to draw near 'with confidence, as children to a father'. Adoption is by grace through faith, not caused by baptism.",
    type: 'near_miss',
  },
];

// Helper function to get cross-tradition distractors for a specific question
export function getCrossTraditionDistractors(questionId: string): CrossTraditionDistractor[] {
  return CROSS_TRADITION_DISTRACTORS.filter(d => d.wscQuestionIds.includes(questionId));
}

// Helper function to get cross-tradition distractors for a category (fallback)
export function getCrossTraditionDistractorsByCategory(category: CatechismCategory): CrossTraditionDistractor[] {
  return CROSS_TRADITION_DISTRACTORS.filter(d => d.category === category);
}
