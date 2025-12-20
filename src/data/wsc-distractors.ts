// Intelligent distractors for Westminster Shorter Catechism MCQ mode
// These are plausible-but-wrong answers designed to test careful study

export type DistractorType =
  | 'word_swap'     // Replace key term with similar but wrong term
  | 'wrong_order'   // Reverse key phrases (order matters theologically)
  | 'omission'      // Drop crucial word(s)
  | 'addition'      // Add incorrect qualifier
  | 'near_miss'     // Close but doctrinally wrong (e.g., infused vs imputed)
  | 'misquote';     // Common way students misremember

export interface Distractor {
  text: string;
  type: DistractorType;
  explanation: string;  // Educational explanation shown AFTER answering
}

// Question-specific distractors for priority questions
// Each question has 3 carefully crafted wrong answers
export const WSC_DISTRACTORS: Record<string, Distractor[]> = {
  // Q1: What is the chief end of man?
  // Correct: "Man's chief end is to glorify God, and to enjoy him forever."
  'wsc-1': [
    {
      text: "Man's chief end is to enjoy God, and to glorify him forever.",
      type: 'wrong_order',
      explanation: "Order matters: glorifying God comes FIRST, then enjoying flows from it. We glorify God by enjoying him, not the reverse."
    },
    {
      text: "Man's chief end is to worship God, and to enjoy him forever.",
      type: 'word_swap',
      explanation: "'Glorify' is broader than 'worship' - it includes all of life (1 Cor 10:31), not just acts of worship."
    },
    {
      text: "Man's chief end is to glorify God, and to serve him forever.",
      type: 'misquote',
      explanation: "'Enjoy' is distinctively Reformed - God is not merely to be served as a master, but delighted in as our greatest treasure (Psalm 73:25-26)."
    },
  ],

  // Q4: What is God?
  // Correct: "God is a Spirit, infinite, eternal, and unchangeable, in his being, wisdom, power, holiness, justice, goodness, and truth."
  'wsc-4': [
    {
      text: "God is a Spirit, infinite, eternal, and unchangeable in his being, wisdom, and power.",
      type: 'omission',
      explanation: "This omits four crucial attributes: holiness, justice, goodness, and truth. God is unchangeable in ALL his attributes - moral perfections matter just as much as his power and wisdom."
    },
    {
      text: "God is a Spirit, infinite, eternal, and unchangeable, in his being, wisdom, power, love, justice, goodness, and truth.",
      type: 'word_swap',
      explanation: "The catechism says 'holiness' not 'love.' While God is love (1 John 4:8), holiness is the attribute that governs all others - even God's love is holy love."
    },
    {
      text: "God is a Spirit, infinite, eternal, in his being, wisdom, power, holiness, justice, goodness, and truth.",
      type: 'omission',
      explanation: "'Unchangeable' is missing. God's immutability is crucial - he doesn't change in his attributes (James 1:17). What he was, he is; what he is, he ever will be."
    },
  ],

  // Q6: How many persons are there in the Godhead?
  // Correct: "There are three persons in the Godhead: the Father, the Son, and the Holy Ghost; and these three are one God, the same in substance, equal in power and glory."
  'wsc-6': [
    {
      text: "There is one person in the Godhead manifesting in three modes: Father, Son, and Holy Ghost.",
      type: 'near_miss',
      explanation: "This is modalism (a heresy) - it confuses persons with modes of manifestation. The Trinity has three distinct PERSONS, not one person appearing in three ways. Modalism denies the eternal distinctions within the Godhead."
    },
    {
      text: "There are three gods in the Godhead: the Father, the Son, and the Holy Ghost; and these three are equal in power and glory.",
      type: 'near_miss',
      explanation: "This is tritheism (a heresy) - teaching three separate gods. Scripture affirms ONE God eternally existing in three persons, not three gods. 'Hear, O Israel: The LORD our God, the LORD is one' (Deut 6:4)."
    },
    {
      text: "There are three persons in the Godhead: the Father, the Son, and the Holy Ghost; and these three are one God, equal in substance, power and glory.",
      type: 'omission',
      explanation: "'The same in' is missing before 'substance.' The three persons share the SAME substance (homoousios), not just equal substance. This distinction was crucial at Nicaea to affirm full deity of the Son."
    },
  ],

  // Q7: What are the decrees of God?
  // Correct: "The decrees of God are his eternal purpose, according to the counsel of his will, whereby, for his own glory, he hath foreordained whatsoever comes to pass."
  'wsc-7': [
    {
      text: "The decrees of God are his eternal purpose, according to the counsel of his will, whereby, for his own glory, he hath predestined whatsoever comes to pass.",
      type: 'word_swap',
      explanation: "The catechism says 'foreordained' not 'predestined.' While related, the WSC uses 'foreordained' which emphasizes God's ordering of all events."
    },
    {
      text: "The decrees of God are his eternal purpose, according to the counsel of his will, whereby, for our salvation, he hath foreordained whatsoever comes to pass.",
      type: 'word_swap',
      explanation: "The catechism says 'for his own glory' not 'for our salvation.' God's ultimate purpose is his glory, not our salvation (which serves his glory)."
    },
    {
      text: "The decrees of God are his eternal purpose, according to his sovereign will, whereby, for his own glory, he hath foreordained whatsoever comes to pass.",
      type: 'word_swap',
      explanation: "'The counsel of his will' emphasizes God's wisdom and deliberation, not just 'sovereign will.' God decrees wisely, not arbitrarily."
    },
  ],

  // Q14: What is sin?
  // Correct: "Sin is any want of conformity unto, or transgression of, the law of God."
  'wsc-14': [
    {
      text: "Sin is any transgression of, or want of conformity unto, the law of God.",
      type: 'wrong_order',
      explanation: "The catechism puts 'want of conformity' (sins of omission) FIRST. This teaches that failing to do good is as serious as doing evil."
    },
    {
      text: "Sin is any want of conformity unto, or transgression of, the will of God.",
      type: 'word_swap',
      explanation: "The catechism says 'law of God' not 'will of God.' Sin is defined by God's revealed law, not his secret will."
    },
    {
      text: "Sin is any transgression of the law of God.",
      type: 'omission',
      explanation: "This omits 'want of conformity unto' - sins of omission. Sin is not just doing wrong, but failing to do what's right (James 4:17)."
    },
  ],

  // Q21: Who is the Redeemer of God's elect?
  // Correct: "The only Redeemer of God's elect is the Lord Jesus Christ, who, being the eternal Son of God, became man, and so was, and continueth to be, God and man in two distinct natures, and one person, forever."
  'wsc-21': [
    {
      text: "The only Redeemer of God's elect is the Lord Jesus Christ, who, being the eternal Son of God, became man, and so was, and continueth to be, God and man in one nature, and one person, forever.",
      type: 'near_miss',
      explanation: "This denies the two natures of Christ (Eutychianism). Christ has TWO DISTINCT natures (divine and human) united in one person."
    },
    {
      text: "The only Redeemer of God's elect is the Lord Jesus Christ, who, being the eternal Son of God, became man, and so was God and man in two distinct natures, and one person, forever.",
      type: 'omission',
      explanation: "'Continueth to be' is missing. Christ did not cease being God-man after his ascension - he remains incarnate forever."
    },
    {
      text: "The Redeemer of God's elect is the Lord Jesus Christ, who, being the eternal Son of God, became man, and so was, and continueth to be, God and man in two distinct natures, and one person, forever.",
      type: 'omission',
      explanation: "'Only' is missing. Christ is the ONLY Redeemer - there is no salvation through any other (Acts 4:12)."
    },
  ],

  // Q31: What is effectual calling?
  // Correct: "Effectual calling is the work of God's Spirit, whereby, convincing us of our sin and misery, enlightening our minds in the knowledge of Christ, and renewing our wills, he doth persuade and enable us to embrace Jesus Christ, freely offered to us in the gospel."
  'wsc-31': [
    {
      text: "Effectual calling is the work of God's Spirit, whereby, convincing us of our sin and misery, enlightening our minds in the knowledge of Christ, and renewing our wills, he doth persuade us to embrace Jesus Christ, freely offered to us in the gospel.",
      type: 'omission',
      explanation: "'Enable' is missing. The Spirit doesn't just persuade - he ENABLES us. Without enablement, we cannot respond (John 6:44)."
    },
    {
      text: "Effectual calling is the work of God's Spirit, whereby, enlightening our minds in the knowledge of Christ, convincing us of our sin and misery, and renewing our wills, he doth persuade and enable us to embrace Jesus Christ, freely offered to us in the gospel.",
      type: 'wrong_order',
      explanation: "Conviction of sin comes FIRST, then enlightenment. We must know our need before we can appreciate the remedy."
    },
    {
      text: "Effectual calling is the work of God's Spirit, whereby, convincing us of our sin and misery, enlightening our minds in the knowledge of Christ, and renewing our wills, he doth persuade and enable us to accept Jesus Christ, freely offered to us in the gospel.",
      type: 'word_swap',
      explanation: "The catechism says 'embrace' not 'accept.' Embrace implies warmth and affection, not mere intellectual assent."
    },
  ],

  // Q33: What is justification?
  // Correct: "Justification is an act of God's free grace, wherein he pardoneth all our sins, and accepteth us as righteous in his sight, only for the righteousness of Christ imputed to us, and received by faith alone."
  'wsc-33': [
    {
      text: "Justification is an act of God's free grace, wherein he pardoneth all our sins, and maketh us righteous in his sight, only for the righteousness of Christ imputed to us, and received by faith alone.",
      type: 'near_miss',
      explanation: "'Accepteth as righteous' not 'maketh righteous.' This is the Protestant/Catholic divide: justification is a legal declaration (forensic), not a transformation (Rome's view)."
    },
    {
      text: "Justification is an act of God's free grace, wherein he pardoneth all our sins, and accepteth us as righteous in his sight, only for the righteousness of Christ infused in us, and received by faith alone.",
      type: 'near_miss',
      explanation: "'Imputed' not 'infused.' Christ's righteousness is credited (imputed) to our account, not poured into us. This is THE Reformation distinction."
    },
    {
      text: "Justification is an act of God's free grace, wherein he pardoneth all our sins, and accepteth us as righteous in his sight, only for the righteousness of Christ imputed to us, and received by faith.",
      type: 'omission',
      explanation: "'Alone' is missing after 'faith.' We are justified by faith ALONE (sola fide), not faith plus works."
    },
  ],

  // Q35: What is sanctification?
  // Correct: "Sanctification is the work of God's free grace, whereby we are renewed in the whole man after the image of God, and are enabled more and more to die unto sin, and live unto righteousness."
  'wsc-35': [
    {
      text: "Sanctification is an act of God's free grace, whereby we are renewed in the whole man after the image of God, and are enabled more and more to die unto sin, and live unto righteousness.",
      type: 'word_swap',
      explanation: "Sanctification is a 'work' not an 'act.' Justification is a single act (once for all); sanctification is an ongoing work (progressive)."
    },
    {
      text: "Sanctification is the work of God's free grace, whereby we are renewed in our spirit after the image of God, and are enabled more and more to die unto sin, and live unto righteousness.",
      type: 'word_swap',
      explanation: "'Whole man' not just 'spirit.' Sanctification renews our entire being - mind, will, affections, body - not just the spiritual part."
    },
    {
      text: "Sanctification is the work of God's free grace, whereby we are renewed in the whole man after the image of God, and are enabled to die unto sin, and live unto righteousness.",
      type: 'omission',
      explanation: "'More and more' is missing. Sanctification is PROGRESSIVE - we grow gradually, not instantly perfected."
    },
  ],

  // Q42: What is the sum of the ten commandments?
  // Correct: "The sum of the ten commandments is to love the Lord our God with all our heart, with all our soul, with all our strength, and with all our mind; and our neighbor as ourselves."
  'wsc-42': [
    {
      text: "The sum of the ten commandments is to love the Lord our God with all our heart, with all our mind, with all our soul, and with all our strength; and our neighbor as ourselves.",
      type: 'wrong_order',
      explanation: "The order is 'heart, soul, strength, mind' - following the Great Commandment in Luke 10:27. Each faculty is listed deliberately."
    },
    {
      text: "The sum of the ten commandments is to love the Lord our God with all our heart, with all our soul, and with all our mind; and our neighbor as ourselves.",
      type: 'omission',
      explanation: "'Strength' is missing. We are to love God with our strength too - our physical energy and effort, not just internal faculties."
    },
    {
      text: "The sum of the ten commandments is to love the Lord our God with all our heart, with all our soul, with all our strength, and with all our mind; and our neighbor more than ourselves.",
      type: 'word_swap',
      explanation: "'As ourselves' not 'more than ourselves.' The command assumes proper self-love as the standard for loving others."
    },
  ],

  // Q86: What is faith in Jesus Christ?
  // Correct: "Faith in Jesus Christ is a saving grace, whereby we receive and rest upon him alone for salvation, as he is offered to us in the gospel."
  'wsc-86': [
    {
      text: "Faith in Jesus Christ is a saving grace, whereby we receive and rest upon him for salvation, as he is offered to us in the gospel.",
      type: 'omission',
      explanation: "'Alone' is missing after 'him.' Faith rests on Christ ALONE, not Christ plus our works or merits."
    },
    {
      text: "Faith in Jesus Christ is a saving grace, whereby we believe and trust in him alone for salvation, as he is offered to us in the gospel.",
      type: 'word_swap',
      explanation: "'Receive and rest' not 'believe and trust.' The catechism emphasizes receiving (accepting what's offered) and resting (ceasing from our own works)."
    },
    {
      text: "Faith in Jesus Christ is a saving work, whereby we receive and rest upon him alone for salvation, as he is offered to us in the gospel.",
      type: 'word_swap',
      explanation: "Faith is a 'grace' not a 'work.' Faith itself is a gift from God (Eph 2:8), not our contribution to salvation."
    },
  ],

  // Q92: What is a sacrament?
  // Correct: "A sacrament is a holy ordinance instituted by Christ; wherein, by sensible signs, Christ, and the benefits of the new covenant, are represented, sealed, and applied to believers."
  'wsc-92': [
    {
      text: "A sacrament is a holy ordinance instituted by Christ; wherein, by sensible signs, Christ, and the benefits of the new covenant, are represented and sealed to believers.",
      type: 'omission',
      explanation: "'Applied' is missing. Sacraments don't just represent and seal - they APPLY covenant benefits to believers through the Spirit."
    },
    {
      text: "A sacrament is a holy ordinance instituted by the church; wherein, by sensible signs, Christ, and the benefits of the new covenant, are represented, sealed, and applied to believers.",
      type: 'word_swap',
      explanation: "Instituted by 'Christ' not 'the church.' Only Christ has authority to institute sacraments - the church merely administers them."
    },
    {
      text: "A sacrament is a holy ordinance instituted by Christ; wherein, by visible signs, Christ, and the benefits of the new covenant, are represented, sealed, and applied to believers.",
      type: 'word_swap',
      explanation: "'Sensible' not 'visible.' Sacraments engage multiple senses - we see, touch, taste (bread/wine) - not just sight."
    },
  ],

  // Q94: What is Baptism?
  // Correct: "Baptism is a sacrament, wherein the washing with water in the name of the Father, and of the Son, and of the Holy Ghost, doth signify and seal our ingrafting into Christ, and partaking of the benefits of the covenant of grace, and our engagement to be the Lord's."
  'wsc-94': [
    {
      text: "Baptism is a sacrament, wherein the washing with water in the name of the Father, and of the Son, and of the Holy Ghost, doth signify our ingrafting into Christ, and partaking of the benefits of the covenant of grace, and our engagement to be the Lord's.",
      type: 'omission',
      explanation: "'Seal' is missing. Baptism doesn't just signify (picture) - it SEALS (confirms/authenticates) God's covenant promises to us."
    },
    {
      text: "Baptism is a sacrament, wherein the washing with water in the name of the Father, and of the Son, and of the Holy Ghost, doth signify and seal our incorporation into the church, and partaking of the benefits of the covenant of grace, and our engagement to be the Lord's.",
      type: 'word_swap',
      explanation: "'Ingrafting into Christ' not 'incorporation into the church.' Baptism primarily signifies union with CHRIST, not just church membership."
    },
    {
      text: "Baptism is a sacrament, wherein the immersion in water in the name of the Father, and of the Son, and of the Holy Ghost, doth signify and seal our ingrafting into Christ, and partaking of the benefits of the covenant of grace, and our engagement to be the Lord's.",
      type: 'word_swap',
      explanation: "'Washing with water' not 'immersion.' The WSC uses 'washing' which allows for various modes (sprinkling, pouring, immersion)."
    },
  ],

  // Q96: What is the Lord's Supper?
  // Correct: "The Lord's Supper is a sacrament, wherein, by giving and receiving bread and wine, according to Christ's appointment, his death is showed forth; and the worthy receivers are, not after a corporal and carnal manner, but by faith, made partakers of his body and blood, with all his benefits, to their spiritual nourishment, and growth in grace."
  'wsc-96': [
    {
      text: "The Lord's Supper is a sacrament, wherein, by giving and receiving bread and wine, according to Christ's appointment, his death is showed forth; and the worthy receivers are, after a corporal and carnal manner, made partakers of his body and blood, with all his benefits, to their spiritual nourishment, and growth in grace.",
      type: 'omission',
      explanation: "'NOT after a corporal and carnal manner' - the 'not' is crucial! We don't eat Christ's physical flesh (transubstantiation). We partake BY FAITH."
    },
    {
      text: "The Lord's Supper is a sacrament, wherein, by giving and receiving bread and wine, according to Christ's appointment, his death is showed forth; and the receivers are, not after a corporal and carnal manner, but by faith, made partakers of his body and blood, with all his benefits, to their spiritual nourishment, and growth in grace.",
      type: 'omission',
      explanation: "'Worthy' is missing before 'receivers.' Not everyone who takes communion benefits - only those who receive worthily by faith."
    },
    {
      text: "The Lord's Supper is a sacrament, wherein, by giving and receiving bread and wine, according to the church's appointment, his death is showed forth; and the worthy receivers are, not after a corporal and carnal manner, but by faith, made partakers of his body and blood, with all his benefits, to their spiritual nourishment, and growth in grace.",
      type: 'word_swap',
      explanation: "'Christ's appointment' not 'the church's appointment.' The Lord's Supper was instituted by Christ himself, not invented by the church."
    },
  ],

  // Q98: What is prayer?
  // Correct: "Prayer is an offering up of our desires unto God, for things agreeable to his will, in the name of Christ, with confession of our sins, and thankful acknowledgment of his mercies."
  'wsc-98': [
    {
      text: "Prayer is an offering up of our desires unto God, for things agreeable to his will, in the name of Christ, with thankful acknowledgment of his mercies.",
      type: 'omission',
      explanation: "'Confession of our sins' is missing. True prayer includes acknowledging our sins - we come as sinners needing grace, not as those deserving answers."
    },
    {
      text: "Prayer is an offering up of our desires unto God, for things agreeable to our will, in the name of Christ, with confession of our sins, and thankful acknowledgment of his mercies.",
      type: 'word_swap',
      explanation: "'His will' not 'our will.' We pray for things agreeable to GOD'S will, not our own desires (1 John 5:14). Prayer aligns our will with God's, not the reverse."
    },
    {
      text: "Prayer is commanding God to grant our desires, for things agreeable to his will, in the name of Christ, with confession of our sins, and thankful acknowledgment of his mercies.",
      type: 'word_swap',
      explanation: "Prayer is 'offering up' (humbly presenting), not 'commanding' (demanding). We petition God as subjects, not order him as equals. Prayer is request, not command."
    },
  ],
};

// Category-level fallback distractors for questions without specific distractors
// These are used when a question doesn't have custom distractors defined
export const CATEGORY_FALLBACK_DISTRACTORS: Record<string, Distractor[]> = {
  'god_scripture': [
    { text: "The chief purpose of Scripture is to make us moral people.", type: 'near_miss', explanation: "Scripture's purpose is to teach what we believe about God AND what duty God requires - not just morality." },
    { text: "The Word of God, found in Scripture and church tradition, is our rule.", type: 'addition', explanation: "Scripture ALONE is the rule (sola scriptura), not Scripture plus tradition." },
    { text: "The Scriptures teach what man is to do to be saved.", type: 'near_miss', explanation: "Scripture teaches what to BELIEVE about God and what DUTY God requires - broader than just salvation." },
  ],
  'god_nature': [
    { text: "God is love, infinite, eternal, and unchangeable in all his attributes.", type: 'word_swap', explanation: "God is 'a Spirit' first - his spirituality grounds all other attributes." },
    { text: "The three persons of the Trinity are similar in substance.", type: 'word_swap', explanation: "The persons are 'the SAME in substance' not merely 'similar' - this is the homoousios controversy." },
    { text: "God is infinite and eternal in his being and power.", type: 'omission', explanation: "God is infinite/eternal in SEVEN attributes: being, wisdom, power, holiness, justice, goodness, truth." },
  ],
  'decrees': [
    { text: "God's decrees are his responses to human choices throughout history.", type: 'near_miss', explanation: "God's decrees are ETERNAL, not responses - he foreordained from eternity, not in reaction to us." },
    { text: "Providence means God watches over creation without intervening.", type: 'near_miss', explanation: "Providence is active GOVERNING, not passive watching - God sustains and directs all things." },
    { text: "The covenant of life required partial obedience from Adam.", type: 'word_swap', explanation: "The covenant required PERFECT obedience - any sin meant death." },
  ],
  'creation_providence': [
    { text: "Sin is any violation of our conscience.", type: 'near_miss', explanation: "Sin is defined by God's LAW, not our conscience - conscience can be wrong or seared." },
    { text: "The fall brought mankind into an estate of suffering.", type: 'word_swap', explanation: "The fall brought 'sin AND misery' - sin is the root, misery is the consequence." },
    { text: "Original sin means we inherit Adam's actual transgressions.", type: 'near_miss', explanation: "We inherit the GUILT of Adam's first sin and corrupt nature, not his specific acts." },
  ],
  'fall_sin': [
    { text: "Christ is the Redeemer who became man for a time to save us.", type: 'omission', explanation: "Christ CONTINUES to be God and man forever - the incarnation is permanent." },
    { text: "Christ executes the offices of prophet, priest, and teacher.", type: 'word_swap', explanation: "The three offices are prophet, priest, and KING - not teacher." },
    { text: "Christ's humiliation ended when he died on the cross.", type: 'near_miss', explanation: "Humiliation included burial and continuing under death's power for a time - not just death." },
  ],
  'christ_redemption': [
    { text: "We are made partakers of redemption by accepting Christ.", type: 'word_swap', explanation: "We are made partakers by the Spirit's EFFECTUAL APPLICATION, not just our acceptance." },
    { text: "The Spirit applies redemption by helping us believe.", type: 'near_miss', explanation: "The Spirit WORKS faith in us - not just helps us believe (monergism vs. synergism)." },
    { text: "In this life believers receive justification and sanctification.", type: 'omission', explanation: "Believers receive justification, ADOPTION, and sanctification - adoption is often forgotten." },
  ],
  'application': [
    { text: "The duty God requires is to follow our conscience.", type: 'near_miss', explanation: "God requires obedience to his REVEALED WILL (Scripture), not our conscience." },
    { text: "The moral law is summarized in the two great commandments.", type: 'word_swap', explanation: "The moral law is summarily comprehended in the TEN COMMANDMENTS, which are then summarized in two." },
    { text: "The sum of the commandments is to love God and love others.", type: 'omission', explanation: "Love neighbor 'as ourselves' - proper self-love is included as the standard." },
  ],
  'ten_commandments': [
    { text: "The commandments forbid outward acts of sin only.", type: 'near_miss', explanation: "Commandments govern thoughts, words, AND actions - the heart, not just behavior." },
    { text: "The fourth commandment requires rest from all work.", type: 'near_miss', explanation: "Works of necessity and mercy are permitted - the Sabbath is for worship, not mere rest." },
    { text: "Honoring parents applies only to children living at home.", type: 'near_miss', explanation: "The fifth commandment extends to all in authority - not just parents of minors." },
  ],
  'means_of_grace': [
    { text: "Faith is a saving decision whereby we choose Christ.", type: 'near_miss', explanation: "Faith is a saving GRACE - a gift from God, not our decision or contribution." },
    { text: "The sacraments convey grace by their own power.", type: 'near_miss', explanation: "Sacraments are effectual only by Christ's blessing and the Spirit's work - not ex opere operato." },
    { text: "Prayer is telling God what we need so he will act.", type: 'near_miss', explanation: "Prayer is for things AGREEABLE TO HIS WILL - we align with God's purposes, not inform him." },
  ],
};

// Helper function to get distractors for a question
export function getDistractorsForQuestion(questionId: string, category: string): Distractor[] {
  // First try question-specific distractors
  if (WSC_DISTRACTORS[questionId]) {
    return WSC_DISTRACTORS[questionId];
  }

  // Fall back to category distractors
  if (CATEGORY_FALLBACK_DISTRACTORS[category]) {
    return CATEGORY_FALLBACK_DISTRACTORS[category];
  }

  // Return empty array if nothing found
  return [];
}
