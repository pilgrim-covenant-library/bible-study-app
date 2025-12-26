/**
 * Bible Chapter Summaries
 *
 * Chapter-by-chapter summaries synthesizing insights from Reformed commentators:
 * - Matthew Henry's Concise Commentary
 * - John Calvin's Commentaries
 * - Matthew Poole's Commentary
 * - Jean Ostervald's Arguments
 *
 * Written in modern English with a redemptive-historical, Christ-centered focus.
 */

export interface ChapterSummary {
  bookId: string;
  chapter: number;
  title: string; // Brief descriptive title
  summary: string; // 2-4 sentence summary in modern English
  keyThemes: string[]; // 2-4 key themes
  christConnection?: string; // How this chapter points to Christ (OT) or reveals Christ (NT)
}

export interface BookChapters {
  bookId: string;
  bookName: string;
  chapters: ChapterSummary[];
}

// ═══════════════════════════════════════════════════════════════════════════════
// GENESIS (50 Chapters)
// ═══════════════════════════════════════════════════════════════════════════════

export const GENESIS_CHAPTERS: ChapterSummary[] = [
  {
    bookId: 'genesis',
    chapter: 1,
    title: 'Creation of the World',
    summary: 'God creates the heavens and earth in six days by His powerful word. He forms light, sky, land, vegetation, celestial bodies, sea creatures, birds, land animals, and finally humanity in His own image. God declares all His work "very good" and establishes the pattern of work and rest.',
    keyThemes: ['God as sovereign Creator', 'Humanity in God\'s image', 'Goodness of creation', 'Divine order'],
    christConnection: 'Christ is the Word through whom all things were made (John 1:3). As the "image of the invisible God" (Col 1:15), He is the true and perfect image that Adam foreshadowed.',
  },
  {
    bookId: 'genesis',
    chapter: 2,
    title: 'The Garden and the First Marriage',
    summary: 'God rests on the seventh day and sanctifies it. He forms Adam from dust, breathes life into him, and places him in Eden to work and keep it. God establishes the first covenant with the command not to eat from the tree of knowledge. Finding no suitable helper among the animals, God creates Eve from Adam\'s side, instituting marriage.',
    keyThemes: ['Sabbath rest', 'Covenant of works', 'Marriage as divine institution', 'Human dignity and purpose'],
    christConnection: 'Adam is a type of Christ, the "last Adam" (1 Cor 15:45). As Eve came from Adam\'s side, the Church comes from Christ\'s wounded side. Christ is the true Bridegroom.',
  },
  {
    bookId: 'genesis',
    chapter: 3,
    title: 'The Fall into Sin',
    summary: 'The serpent tempts Eve to doubt God\'s word and goodness. She eats the forbidden fruit and gives it to Adam, who also eats. Their eyes are opened to shame; they hide from God. God pronounces curses on the serpent, the woman, and the ground, yet promises that the woman\'s seed will crush the serpent\'s head. He clothes them and expels them from Eden.',
    keyThemes: ['Temptation and sin', 'Broken covenant', 'Divine judgment', 'First gospel promise (Protoevangelium)'],
    christConnection: 'Genesis 3:15 is the first promise of Christ—the Seed of the woman who will crush Satan\'s head while being bruised Himself on the cross.',
  },
  {
    bookId: 'genesis',
    chapter: 4,
    title: 'Cain and Abel',
    summary: 'Eve bears Cain and Abel. Abel offers an acceptable sacrifice by faith; Cain\'s offering is rejected. Consumed by jealousy, Cain murders his brother and is cursed to wander the earth. He builds a city, and his descendants advance in culture but also in wickedness. Seth is born to replace Abel, and men begin to call on the LORD\'s name.',
    keyThemes: ['Acceptable worship', 'Sin\'s progression', 'Judgment and mercy', 'Two lines of humanity'],
    christConnection: 'Abel\'s blood cried for vengeance, but Christ\'s blood "speaks a better word" (Heb 12:24)—crying for mercy and forgiveness.',
  },
  {
    bookId: 'genesis',
    chapter: 5,
    title: 'From Adam to Noah',
    summary: 'This genealogy traces the godly line from Adam through Seth to Noah. Each patriarch lives, begets sons and daughters, and dies—the refrain "and he died" echoing the curse of Genesis 3. The exception is Enoch, who "walked with God" and was taken without seeing death. Noah is named with hope that he will bring relief from the curse.',
    keyThemes: ['Death as consequence of sin', 'Faithful remnant', 'Hope amid judgment', 'Walking with God'],
    christConnection: 'Enoch\'s translation foreshadows resurrection life. Noah\'s name ("rest") anticipates the true rest that comes through Christ.',
  },
  {
    bookId: 'genesis',
    chapter: 6,
    title: 'Wickedness and the Ark',
    summary: 'Humanity\'s wickedness reaches its peak as violence fills the earth. God grieves over the corruption and resolves to destroy all flesh by flood. But Noah finds grace in God\'s eyes. God instructs Noah to build an ark and establishes His covenant with him, promising to preserve Noah\'s family and pairs of every living creature.',
    keyThemes: ['Total depravity', 'Divine grief and wrath', 'Saving grace', 'Covenant faithfulness'],
    christConnection: 'Noah finding "grace" is the first use of this word in Scripture. The ark is a type of Christ—the only refuge from divine judgment.',
  },
  {
    bookId: 'genesis',
    chapter: 7,
    title: 'The Flood',
    summary: 'Noah, his family, and the animals enter the ark as God commanded. The LORD shuts them in. The fountains of the deep burst forth and heaven\'s windows open; rain falls forty days. The waters prevail, covering the highest mountains. Every living thing outside the ark perishes. The waters prevail 150 days.',
    keyThemes: ['Obedience of faith', 'Universal judgment', 'Divine preservation', 'New beginning'],
    christConnection: 'Peter connects the flood waters to baptism (1 Pet 3:20-21). As Noah\'s family was saved through water, believers are saved through Christ.',
  },
  {
    bookId: 'genesis',
    chapter: 8,
    title: 'The Waters Recede',
    summary: 'God remembers Noah and causes the waters to recede. The ark rests on Ararat. Noah sends out a raven, then a dove; the dove returns with an olive leaf, showing the waters have abated. Noah removes the ark\'s covering and sees dry ground. At God\'s command, all exit the ark. Noah builds an altar and offers sacrifices; God promises never again to curse the ground or destroy all life by flood.',
    keyThemes: ['God remembers His own', 'Patient waiting', 'Worship and sacrifice', 'Divine promise'],
    christConnection: 'Noah\'s sacrifice is a pleasing aroma to God, foreshadowing Christ\'s sacrifice that satisfies divine justice and secures the new covenant.',
  },
  {
    bookId: 'genesis',
    chapter: 9,
    title: 'Covenant with Noah',
    summary: 'God blesses Noah and his sons, commanding them to be fruitful. He permits eating meat but forbids consuming blood and requires capital punishment for murder. God establishes His covenant with all creation, setting the rainbow as its sign—never again will a flood destroy the earth. Noah plants a vineyard, becomes drunk, and is shamed by Ham. Noah blesses Shem and Japheth but curses Canaan.',
    keyThemes: ['Noahic covenant', 'Sanctity of life', 'Common grace', 'Prophetic blessing and curse'],
    christConnection: 'The rainbow covenant reveals God\'s patience, giving time for repentance. The blessing of Shem points to the Messiah\'s lineage.',
  },
  {
    bookId: 'genesis',
    chapter: 10,
    title: 'The Table of Nations',
    summary: 'This genealogy records the descendants of Shem, Ham, and Japheth, showing how the nations spread across the earth after the flood. From Japheth come the maritime peoples; from Ham come Canaan, Egypt, and Nimrod\'s kingdoms; from Shem come the Semitic peoples, including the line leading to Abraham. Each family is listed by clans, languages, lands, and nations.',
    keyThemes: ['Unity of humanity', 'Diversity of nations', 'Divine providence over history', 'Preparation for Abraham'],
    christConnection: 'All nations descend from one man, and all nations will be blessed through Abraham\'s Seed—Christ, in whom there is neither Jew nor Gentile.',
  },
  {
    bookId: 'genesis',
    chapter: 11,
    title: 'Babel and the Line to Abram',
    summary: 'Humanity unites in rebellion, building a city and tower to make a name for themselves and avoid scattering. God confuses their language and disperses them—the place is called Babel. The chapter then traces Shem\'s descendants to Terah, father of Abram, Nahor, and Haran. Terah takes his family from Ur toward Canaan but settles in Haran, where he dies.',
    keyThemes: ['Human pride', 'Divine judgment', 'Scattered nations', 'Narrowing focus to one family'],
    christConnection: 'Babel\'s curse is reversed at Pentecost when the Spirit enables people of all languages to hear the gospel. Christ unites what Babel divided.',
  },
  {
    bookId: 'genesis',
    chapter: 12,
    title: 'The Call of Abram',
    summary: 'God calls Abram to leave his country and kindred for a land He will show him, promising to make him a great nation, bless him, and bless all families of the earth through him. Abram obeys, taking Sarai and Lot to Canaan. God appears and promises to give this land to Abram\'s offspring. Famine drives them to Egypt, where Abram deceives Pharaoh about Sarai; God protects her with plagues.',
    keyThemes: ['Divine call and promise', 'Faith and obedience', 'Blessing to all nations', 'Human weakness, divine faithfulness'],
    christConnection: 'The promise that "all families of the earth shall be blessed" finds its fulfillment in Christ, Abraham\'s ultimate Seed (Gal 3:16).',
  },
  {
    bookId: 'genesis',
    chapter: 13,
    title: 'Abram and Lot Separate',
    summary: 'Abram returns from Egypt wealthy. Strife arises between his herdsmen and Lot\'s over limited land. Abram generously offers Lot first choice; Lot chooses the well-watered Jordan plain near Sodom. After Lot departs, God reaffirms His promise: all the land Abram sees will belong to his offspring, who will be as numerous as dust. Abram moves to Hebron and builds an altar.',
    keyThemes: ['Generosity over greed', 'Faith versus sight', 'Covenant reaffirmation', 'Dangers of worldliness'],
    christConnection: 'Abram\'s willingness to take the lesser portion reflects Christ\'s self-emptying. Lot\'s choice toward Sodom warns against worldly allurements.',
  },
  {
    bookId: 'genesis',
    chapter: 14,
    title: 'Abram Rescues Lot and Meets Melchizedek',
    summary: 'Four eastern kings defeat five Canaanite kings and carry off Lot from Sodom. Abram musters 318 trained men, pursues the invaders, and rescues Lot with all the goods and people. Melchizedek, king of Salem and priest of God Most High, blesses Abram and receives a tithe from him. Abram refuses the king of Sodom\'s offer, crediting God alone for his victory.',
    keyThemes: ['Covenant loyalty', 'Victory through God', 'Priest-king Melchizedek', 'Refusing worldly reward'],
    christConnection: 'Melchizedek is a type of Christ—king of righteousness and peace, priest of the Most High, whose priesthood is eternal (Heb 7).',
  },
  {
    bookId: 'genesis',
    chapter: 15,
    title: 'God\'s Covenant with Abram',
    summary: 'God appears to Abram in a vision, promising to be his shield and great reward. When Abram questions how he can have offspring without an heir, God shows him the stars and promises descendants as numerous. Abram believes, and God credits it to him as righteousness. God then makes a covenant, passing between animal pieces while Abram sleeps, promising the land from Egypt\'s river to the Euphrates.',
    keyThemes: ['Justification by faith', 'Covenant ceremony', 'Divine oath', 'Prophetic preview of history'],
    christConnection: 'Abram\'s faith credited as righteousness is the foundation of Paul\'s gospel in Romans 4. God alone passes through the pieces, guaranteeing the covenant.',
  },
  {
    bookId: 'genesis',
    chapter: 16,
    title: 'Hagar and Ishmael',
    summary: 'Sarai, still barren, gives her servant Hagar to Abram to bear children. Hagar conceives and despises her mistress. Sarai treats Hagar harshly, and Hagar flees. The Angel of the LORD finds Hagar by a spring, commands her to return and submit, and promises her son Ishmael will father a great nation. Hagar calls the LORD "the God who sees me." Ishmael is born when Abram is 86.',
    keyThemes: ['Human schemes vs. divine timing', 'Suffering and compassion', 'God who sees', 'Consequences of impatience'],
    christConnection: 'The Angel of the LORD is a pre-incarnate appearance of Christ. God sees the afflicted and responds with promise and provision.',
  },
  {
    bookId: 'genesis',
    chapter: 17,
    title: 'Covenant of Circumcision',
    summary: 'When Abram is 99, God appears as El Shaddai, reaffirming the covenant and renaming him Abraham ("father of many nations"). Circumcision is established as the covenant sign for all males. Sarai is renamed Sarah, and God promises she will bear a son named Isaac—the covenant heir. Abraham laughs in wonder; God confirms Isaac will come in a year. That day, Abraham circumcises his household.',
    keyThemes: ['Covenant renewal', 'New names, new identity', 'Sign of circumcision', 'Promise of Isaac'],
    christConnection: 'Circumcision points to the circumcision of the heart by the Spirit. The promised son Isaac foreshadows the promised Son, Jesus.',
  },
  {
    bookId: 'genesis',
    chapter: 18,
    title: 'The LORD Visits Abraham',
    summary: 'Three visitors appear to Abraham at Mamre; he shows generous hospitality. The LORD promises Sarah will have a son within a year. Sarah laughs in disbelief, but the LORD asks, "Is anything too hard for the LORD?" God reveals His plan to judge Sodom. Abraham intercedes, bargaining from fifty righteous down to ten. The LORD agrees: for ten righteous, He would spare the city.',
    keyThemes: ['Divine visitation', 'Hospitality', 'Nothing too hard for God', 'Intercessory prayer'],
    christConnection: 'Abraham\'s intercession for Sodom anticipates Christ\'s greater intercession for sinners. The question about God\'s power applies to the virgin birth and resurrection.',
  },
  {
    bookId: 'genesis',
    chapter: 19,
    title: 'Destruction of Sodom',
    summary: 'Two angels arrive in Sodom; Lot shows them hospitality. The men of Sodom demand the visitors for sexual assault; Lot refuses but shamefully offers his daughters. The angels strike the mob blind and urge Lot to flee. At dawn, they rescue Lot, his wife, and two daughters. Fire and sulfur rain down, destroying Sodom and Gomorrah. Lot\'s wife looks back and becomes a pillar of salt. Lot\'s daughters commit incest, bearing Moab and Ammon.',
    keyThemes: ['Divine judgment on sin', 'Rescue of the righteous', 'Danger of looking back', 'Consequences of compromise'],
    christConnection: 'Jesus references Sodom\'s judgment as a warning (Luke 17:28-32). Lot\'s rescue pictures salvation from coming wrath through faith.',
  },
  {
    bookId: 'genesis',
    chapter: 20,
    title: 'Abraham and Abimelech',
    summary: 'Abraham journeys to Gerar and again claims Sarah is his sister. King Abimelech takes her, but God warns him in a dream that she is married. Abimelech protests his innocence; God acknowledges it and instructs him to restore Sarah. Abimelech rebukes Abraham, who admits his fear and deception. Abraham prays for Abimelech, and God heals his household.',
    keyThemes: ['Recurring failure', 'Divine protection', 'Integrity of the pagan king', 'Intercessory prayer'],
    christConnection: 'Despite Abraham\'s failures, God protects the promised lineage through which Christ will come. Grace overcomes human weakness.',
  },
  {
    bookId: 'genesis',
    chapter: 21,
    title: 'Birth of Isaac; Hagar Sent Away',
    summary: 'Sarah conceives and bears Isaac in her old age, as God promised. At Isaac\'s weaning feast, Sarah sees Ishmael mocking and demands Hagar and Ishmael be sent away. Abraham is distressed, but God assures him Ishmael will also become a nation. In the wilderness, God hears the boy\'s cry, provides water, and blesses him. Abraham makes a covenant with Abimelech at Beersheba.',
    keyThemes: ['Promise fulfilled', 'Laughter of joy', 'God hears the afflicted', 'Covenant relationships'],
    christConnection: 'Paul uses this story allegorically: Hagar represents the old covenant of slavery; Sarah represents the new covenant of freedom in Christ (Gal 4:21-31).',
  },
  {
    bookId: 'genesis',
    chapter: 22,
    title: 'The Sacrifice of Isaac',
    summary: 'God tests Abraham, commanding him to offer Isaac as a burnt offering on Mount Moriah. Abraham obeys, traveling three days with Isaac. As he binds Isaac on the altar and raises the knife, the Angel of the LORD stops him—now God knows Abraham fears Him. A ram caught in a thicket becomes the substitute. God swears to bless Abraham and his offspring because of his obedience.',
    keyThemes: ['Supreme test of faith', 'Obedience unto death', 'God will provide', 'Substitutionary sacrifice'],
    christConnection: 'This is the clearest Old Testament picture of the cross. Isaac carrying wood, the beloved son offered, and the substitute ram all point to Christ.',
  },
  {
    bookId: 'genesis',
    chapter: 23,
    title: 'Sarah\'s Death and Burial',
    summary: 'Sarah dies at age 127 in Hebron. Abraham mourns and seeks to buy a burial site. The Hittites offer any tomb, but Abraham insists on purchasing the cave of Machpelah from Ephron. After formal negotiation, Abraham pays 400 shekels of silver. This becomes the first portion of the Promised Land that Abraham legally owns—a burial ground secured by faith.',
    keyThemes: ['Death and mourning', 'Hope of resurrection', 'First land possession', 'Faith in God\'s promises'],
    christConnection: 'Abraham\'s purchase of burial land shows faith that God would fulfill His promise. Believers await resurrection and the heavenly country (Heb 11:13-16).',
  },
  {
    bookId: 'genesis',
    chapter: 24,
    title: 'A Bride for Isaac',
    summary: 'Abraham, now old, sends his servant to find a wife for Isaac from his relatives, not from the Canaanites. The servant prays for guidance at a well; Rebekah appears and fulfills the sign exactly. Her family agrees to the marriage. Rebekah chooses to go immediately. Isaac meets her in the field, loves her, and is comforted after his mother\'s death.',
    keyThemes: ['Divine guidance', 'Faithful service', 'Covenant marriage', 'Providence in details'],
    christConnection: 'The servant seeking a bride for the son pictures the Spirit gathering the Church for Christ. Rebekah\'s willing departure foreshadows the Church\'s response to Christ.',
  },
  {
    bookId: 'genesis',
    chapter: 25,
    title: 'Abraham\'s Death; Jacob and Esau Born',
    summary: 'Abraham marries Keturah and has more sons, but Isaac is his sole heir. Abraham dies at 175 and is buried with Sarah. Ishmael\'s descendants are listed; he dies at 137. Rebekah, barren like Sarah, conceives after Isaac\'s prayer. The twins struggle in her womb; God reveals the older will serve the younger. Esau, the firstborn hunter, is favored by Isaac; Jacob, a quiet man, by Rebekah. Esau sells his birthright to Jacob for stew.',
    keyThemes: ['End of an era', 'Sovereign election', 'Struggle in the womb', 'Despising the birthright'],
    christConnection: 'God\'s choice of Jacob over Esau demonstrates salvation by grace, not works (Rom 9:10-13). The birthright foreshadows spiritual inheritance in Christ.',
  },
  {
    bookId: 'genesis',
    chapter: 26,
    title: 'Isaac and Abimelech',
    summary: 'Famine strikes, and God tells Isaac not to go to Egypt but to stay in Gerar. God reaffirms Abraham\'s covenant promises to Isaac. Like his father, Isaac deceives about Rebekah. When discovered, Abimelech protects them. Isaac prospers so greatly that the Philistines envy him and fill his wells. Isaac moves, re-digs wells, and God appears at Beersheba, renewing the promise. Abimelech seeks a treaty.',
    keyThemes: ['Covenant continuation', 'Prosperity and envy', 'Inherited weakness', 'Peace with neighbors'],
    christConnection: 'The promises to Abraham pass to Isaac, continuing toward Christ. Isaac\'s well-digging pictures opening sources of spiritual life.',
  },
  {
    bookId: 'genesis',
    chapter: 27,
    title: 'Jacob Steals the Blessing',
    summary: 'Isaac, old and blind, prepares to bless Esau. Rebekah overhears and schemes for Jacob to receive the blessing instead. Jacob, disguised with goatskins, deceives his father and receives the blessing of abundance and dominion. When Esau returns and the deception is discovered, Isaac trembles but confirms Jacob\'s blessing. Esau weeps bitterly, receiving a lesser blessing and vowing to kill Jacob. Rebekah sends Jacob to Haran.',
    keyThemes: ['Deception and its consequences', 'Irrevocable blessing', 'Sovereign purpose through human sin', 'Family division'],
    christConnection: 'God\'s purposes prevail despite human scheming. The blessing ultimately points to Christ, through whom all nations are blessed.',
  },
  {
    bookId: 'genesis',
    chapter: 28,
    title: 'Jacob\'s Ladder',
    summary: 'Isaac blesses Jacob again and sends him to find a wife among Rebekah\'s relatives. Esau, seeing his Canaanite wives displease his parents, marries Ishmael\'s daughter. At Bethel, Jacob dreams of a ladder reaching heaven with angels ascending and descending. God stands above, reaffirming the Abrahamic promises. Jacob awakes in awe, sets up a pillar, names the place Bethel ("house of God"), and vows to serve the LORD.',
    keyThemes: ['Heaven opened', 'Covenant confirmed', 'Divine presence', 'Vow of devotion'],
    christConnection: 'Jesus identifies Himself as the true ladder—the way between heaven and earth (John 1:51). Christ is the meeting place of God and humanity.',
  },
  {
    bookId: 'genesis',
    chapter: 29,
    title: 'Jacob Marries Leah and Rachel',
    summary: 'Jacob arrives at a well near Haran and meets Rachel. Laban welcomes him and agrees he can marry Rachel after seven years\' work. But on the wedding night, Laban substitutes Leah. When Jacob protests, Laban offers Rachel for another seven years. The deceiver is deceived. God sees Leah is unloved and opens her womb; she bears Reuben, Simeon, Levi, and Judah, while Rachel remains barren.',
    keyThemes: ['Reaping what you sow', 'Divine compassion for the unloved', 'Covenant family struggles', 'Grace amid dysfunction'],
    christConnection: 'Judah, born to unloved Leah, becomes ancestor of Christ. God builds His purposes through unexpected vessels and broken situations.',
  },
  {
    bookId: 'genesis',
    chapter: 30,
    title: 'The Birth of Jacob\'s Sons',
    summary: 'Rachel, envious of Leah, gives Jacob her servant Bilhah, who bears Dan and Naphtali. Leah responds by giving Zilpah, who bears Gad and Asher. Leah then bears Issachar, Zebulun, and Dinah. Finally, God remembers Rachel, and she bears Joseph. Jacob seeks to leave Laban, but Laban begs him to stay. Jacob agrees to work for speckled and spotted animals, using breeding strategies to prosper.',
    keyThemes: ['Rivalry and jealousy', 'Twelve tribes forming', 'God remembers', 'Prospering through cunning'],
    christConnection: 'The twelve sons become the twelve tribes of Israel, the people through whom Christ comes. Joseph, Rachel\'s firstborn, will become a major Christ-type.',
  },
  {
    bookId: 'genesis',
    chapter: 31,
    title: 'Jacob Flees from Laban',
    summary: 'Jacob sees Laban\'s hostility and hears God\'s command to return home. He gathers his wives, children, and flocks and departs secretly. Rachel steals Laban\'s household gods. Laban pursues, but God warns him in a dream not to harm Jacob. They confront each other; Jacob defends his integrity. They search for the idols; Rachel hides them. Jacob and Laban make a covenant at Mizpah and part peacefully.',
    keyThemes: ['Time to leave', 'Divine protection', 'Accounting for years of labor', 'Covenant of separation'],
    christConnection: 'God watches over Jacob despite all circumstances, ensuring the covenant line continues toward Christ.',
  },
  {
    bookId: 'genesis',
    chapter: 32,
    title: 'Jacob Wrestles with God',
    summary: 'Jacob sends messengers to Esau, who approaches with 400 men. Terrified, Jacob divides his camp and prays desperately. He sends generous gifts ahead to appease Esau. Alone at night, a man wrestles with Jacob until dawn. When Jacob won\'t let go, the man touches his hip, dislocating it, and blesses him with a new name: Israel ("he strives with God"). Jacob names the place Peniel ("face of God").',
    keyThemes: ['Fear and faith', 'Wrestling with God', 'New identity', 'Blessing through struggle'],
    christConnection: 'Jacob\'s wrestling anticipates believers clinging to God in prayer. The new name "Israel" marks transformation by grace—foreshadowing new birth in Christ.',
  },
  {
    bookId: 'genesis',
    chapter: 33,
    title: 'Jacob Meets Esau',
    summary: 'Jacob arranges his family and approaches Esau, bowing seven times. But Esau runs to embrace him, and they weep together. Esau initially refuses Jacob\'s gifts but accepts them. Esau offers to travel together, but Jacob declines, citing his slow-moving household. Jacob settles at Succoth, then moves to Shechem, where he buys land and builds an altar called El-Elohe-Israel ("God, the God of Israel").',
    keyThemes: ['Reconciliation', 'Unexpected grace', 'Settling in the land', 'Worship'],
    christConnection: 'Esau\'s merciful embrace, undeserved by Jacob, pictures the grace we receive in Christ. Enemies become brothers through divine intervention.',
  },
  {
    bookId: 'genesis',
    chapter: 34,
    title: 'The Defilement of Dinah',
    summary: 'Dinah, Jacob\'s daughter, is violated by Shechem, a Canaanite prince, who then desires to marry her. His father Hamor negotiates with Jacob\'s sons, proposing intermarriage and shared prosperity. The sons deceitfully agree if all Shechemite males are circumcised. While the men are recovering, Simeon and Levi slaughter them and plunder the city. Jacob rebukes them for endangering the family.',
    keyThemes: ['Violence and deception', 'Misuse of covenant sign', 'Danger of assimilation', 'Justice and revenge'],
    christConnection: 'This dark chapter shows why Israel must remain separate. The Canaanite corruption contrasts with the holy nation God is forming for Christ.',
  },
  {
    bookId: 'genesis',
    chapter: 35,
    title: 'Return to Bethel; Rachel\'s Death',
    summary: 'God commands Jacob to return to Bethel. Jacob purges foreign gods from his household. At Bethel, God appears, reaffirms the name Israel, and renews the Abrahamic covenant. They journey toward Ephrath; Rachel dies giving birth to Benjamin. Isaac dies at 180 and is buried by both Jacob and Esau. Reuben\'s sin with Bilhah is noted. The twelve sons of Jacob are listed.',
    keyThemes: ['Covenant renewal', 'Purging idols', 'Death and birth', 'Twelve tribes complete'],
    christConnection: 'At Bethel, God confirms "a nation and assembly of nations" will come from Jacob—fulfilled in both Israel and the Church gathered in Christ.',
  },
  {
    bookId: 'genesis',
    chapter: 36,
    title: 'Esau\'s Descendants',
    summary: 'This chapter records Esau\'s genealogy—his wives, sons, and the chiefs and kings of Edom. Esau moves to Seir to separate from Jacob because the land cannot support both. The Edomites, Esau\'s descendants, become a nation before Israel does. Various clans and rulers are listed, establishing Edom as a significant neighboring nation.',
    keyThemes: ['Separation of lines', 'Edomite nation', 'Temporal prosperity', 'Jacob\'s line preserved'],
    christConnection: 'While Esau\'s line prospers quickly, the covenant promise remains with Jacob. Christ comes not through worldly success but through the chosen line of faith.',
  },
  {
    bookId: 'genesis',
    chapter: 37,
    title: 'Joseph\'s Dreams',
    summary: 'Joseph, Jacob\'s favorite, receives a special robe and dreams of his family bowing to him. His brothers hate him for his dreams and their father\'s favoritism. When Jacob sends Joseph to check on his brothers, they plot to kill him but instead sell him to Midianite traders for twenty pieces of silver. They deceive Jacob with the blood-stained robe. Joseph is sold in Egypt to Potiphar, Pharaoh\'s officer.',
    keyThemes: ['Divine dreams', 'Envy and hatred', 'Suffering of the beloved son', 'Providence beginning'],
    christConnection: 'Joseph is betrayed for silver, stripped of his robe, and given up for dead—foreshadowing Christ\'s betrayal, humiliation, and apparent defeat.',
  },
  {
    bookId: 'genesis',
    chapter: 38,
    title: 'Judah and Tamar',
    summary: 'Judah marries a Canaanite woman and has three sons. Er dies for wickedness; Onan refuses to raise offspring for his brother and also dies. Judah delays giving his third son to Tamar. She disguises as a prostitute, conceives by Judah, and is vindicated when Judah acknowledges she is more righteous than he. Tamar bears twins: Perez and Zerah.',
    keyThemes: ['Sin and judgment', 'Levirate duty', 'Righteousness of Tamar', 'Grace in the lineage'],
    christConnection: 'Through this scandalous story, Perez enters Christ\'s genealogy (Matt 1:3). God works through broken people and situations to accomplish redemption.',
  },
  {
    bookId: 'genesis',
    chapter: 39,
    title: 'Joseph in Potiphar\'s House',
    summary: 'The LORD is with Joseph in Egypt, and he prospers in Potiphar\'s house, becoming overseer of everything. Potiphar\'s wife repeatedly tries to seduce him, but Joseph refuses, citing loyalty to his master and sin against God. When she falsely accuses him, Potiphar imprisons Joseph. Even in prison, the LORD is with Joseph, and he finds favor with the keeper.',
    keyThemes: ['God\'s presence', 'Integrity under temptation', 'False accusation', 'Faithful in adversity'],
    christConnection: 'Joseph\'s unjust suffering for righteousness\' sake anticipates Christ, who was falsely accused yet remained faithful to the Father.',
  },
  {
    bookId: 'genesis',
    chapter: 40,
    title: 'Joseph Interprets Dreams',
    summary: 'Pharaoh\'s cupbearer and baker are imprisoned and have troubling dreams. Joseph, seeing their distress, offers to interpret, declaring interpretations belong to God. The cupbearer\'s dream means restoration in three days; the baker\'s means execution. Both come true as Joseph said. Joseph asks the cupbearer to remember him, but the cupbearer forgets.',
    keyThemes: ['God reveals secrets', 'Faithfulness in obscurity', 'Human forgetfulness', 'God\'s timing'],
    christConnection: 'Joseph\'s ability to interpret dreams demonstrates that "salvation is of the LORD." He waits in suffering, trusting God\'s timing—like Christ in the tomb.',
  },
  {
    bookId: 'genesis',
    chapter: 41,
    title: 'Pharaoh\'s Dreams; Joseph\'s Rise',
    summary: 'After two years, Pharaoh dreams of seven fat cows devoured by seven lean cows, and seven full ears consumed by seven thin ears. No one can interpret them. The cupbearer remembers Joseph. Joseph interprets: seven years of abundance followed by seven years of famine. He advises Pharaoh to store grain. Pharaoh elevates Joseph to second-in-command over Egypt. Joseph marries Asenath and has two sons: Manasseh and Ephraim.',
    keyThemes: ['God\'s sovereignty over nations', 'Wisdom from above', 'Exaltation after humiliation', 'Preparation for preservation'],
    christConnection: 'From prison to palace in a day—Joseph\'s exaltation pictures Christ\'s resurrection and enthronement at God\'s right hand.',
  },
  {
    bookId: 'genesis',
    chapter: 42,
    title: 'Joseph\'s Brothers Come to Egypt',
    summary: 'The famine reaches Canaan. Jacob sends ten sons to buy grain in Egypt, keeping Benjamin. The brothers bow before Joseph but don\'t recognize him. Joseph speaks harshly, accuses them of being spies, and demands they bring their youngest brother. He imprisons Simeon and sends them home with grain and their money hidden in their sacks. The brothers see it as divine punishment for what they did to Joseph.',
    keyThemes: ['Dreams fulfilled', 'Guilt awakened', 'Testing the brothers', 'Hidden identity'],
    christConnection: 'Joseph, unrecognized by his brothers, tests their hearts before revealing himself—picturing how Christ reveals Himself to those He draws to repentance.',
  },
  {
    bookId: 'genesis',
    chapter: 43,
    title: 'The Second Journey',
    summary: 'When the grain runs out, Jacob reluctantly sends Benjamin with his brothers, along with double money and gifts. Joseph sees Benjamin and has a feast prepared. The brothers are afraid but are seated in birth order and fed from Joseph\'s table. Benjamin receives five times more than the others. The brothers are bewildered by Joseph\'s kindness and knowledge.',
    keyThemes: ['Letting go in faith', 'Overwhelming hospitality', 'Special treatment of Benjamin', 'Mystery and wonder'],
    christConnection: 'Joseph\'s gracious feast for his unknowing brothers pictures the gospel feast prepared for those who will come to know Christ.',
  },
  {
    bookId: 'genesis',
    chapter: 44,
    title: 'Judah\'s Plea',
    summary: 'Joseph has his silver cup hidden in Benjamin\'s sack. After the brothers leave, Joseph\'s steward overtakes them and discovers the cup. They return in anguish. Joseph declares Benjamin will be his slave. Judah pleads passionately, recounting Jacob\'s attachment to Benjamin and offering himself as substitute: "Let me remain instead of the boy as a servant."',
    keyThemes: ['Final test', 'Transformed hearts', 'Substitutionary sacrifice', 'Judah\'s intercession'],
    christConnection: 'Judah offers himself in place of his brother—a powerful foreshadowing of Christ, the Lion of Judah, who substitutes Himself for sinners.',
  },
  {
    bookId: 'genesis',
    chapter: 45,
    title: 'Joseph Reveals Himself',
    summary: 'Joseph, overcome with emotion, clears the room and reveals himself to his brothers: "I am Joseph!" The brothers are terrified, but Joseph reassures them. He interprets his suffering as divine providence: "God sent me before you to preserve life." He urges them to bring Jacob to Egypt quickly. Pharaoh welcomes the family. The brothers return with wagons and goods; Jacob revives when he hears Joseph lives.',
    keyThemes: ['Revelation and reconciliation', 'God\'s sovereign purpose in suffering', 'Grace instead of revenge', 'Family restoration'],
    christConnection: 'Joseph\'s self-revelation to his weeping brothers pictures Christ revealing Himself to Israel (Zech 12:10) and to all who repent.',
  },
  {
    bookId: 'genesis',
    chapter: 46,
    title: 'Jacob Moves to Egypt',
    summary: 'Jacob sets out for Egypt and offers sacrifices at Beersheba. God speaks in a vision, assuring him not to fear—God will make him a great nation in Egypt and bring his descendants back. The seventy persons of Jacob\'s household are listed. Joseph meets his father at Goshen; they embrace and weep. Joseph instructs them to tell Pharaoh they are shepherds so they can settle in Goshen.',
    keyThemes: ['Divine assurance', 'Seventy souls', 'Reunion and joy', 'Temporary sojourning'],
    christConnection: 'The seventy souls going to Egypt correspond to the seventy nations of Genesis 10. God\'s plan encompasses all peoples through Jacob\'s seed.',
  },
  {
    bookId: 'genesis',
    chapter: 47,
    title: 'Israel Settles in Egypt',
    summary: 'Joseph presents his father and five brothers to Pharaoh. Jacob blesses Pharaoh and is given the best of the land in Goshen. As famine continues, Joseph collects money, then livestock, then land for Pharaoh, making the people servants. He establishes a law giving Pharaoh one-fifth of all produce. Jacob lives in Egypt seventeen years. As death approaches, he makes Joseph swear to bury him in Canaan.',
    keyThemes: ['Divine provision', 'Wisdom in crisis', 'Blessing Pharaoh', 'Hope beyond Egypt'],
    christConnection: 'Jacob\'s insistence on burial in Canaan expresses faith in God\'s promise of the land—and ultimately the resurrection hope fulfilled in Christ.',
  },
  {
    bookId: 'genesis',
    chapter: 48,
    title: 'Jacob Blesses Ephraim and Manasseh',
    summary: 'Jacob, ill and near death, adopts Joseph\'s sons Ephraim and Manasseh as his own, giving Joseph a double portion. Despite Joseph\'s arrangement, Jacob crosses his hands to place the right hand of blessing on younger Ephraim. Joseph protests, but Jacob declares Ephraim will be greater. Jacob blesses them: "In you Israel will pronounce blessings."',
    keyThemes: ['Double portion for Joseph', 'Sovereign choice of the younger', 'Faith in God\'s future', 'Blessing for generations'],
    christConnection: 'Jacob\'s prophetic crossing of hands shows God\'s sovereign choice overturning natural expectations—grace, not birthright, determines blessing.',
  },
  {
    bookId: 'genesis',
    chapter: 49,
    title: 'Jacob Blesses His Sons',
    summary: 'Jacob gathers his twelve sons for prophetic blessings. Reuben loses preeminence for his sin. Simeon and Levi are scattered for violence. Judah receives the scepter and the promise that "the obedience of the peoples" will be his. Joseph receives abundant blessings. Each son\'s blessing anticipates his tribe\'s future. Jacob commands burial in Machpelah with Abraham, Isaac, Sarah, Rebekah, and Leah. Then he dies.',
    keyThemes: ['Prophetic blessings', 'Judah\'s preeminence', 'Consequences of sin', 'Hope for the future'],
    christConnection: 'The blessing of Judah (49:10) is messianic: "The scepter shall not depart from Judah...until Shiloh comes." Christ is the Lion of Judah.',
  },
  {
    bookId: 'genesis',
    chapter: 50,
    title: 'Jacob\'s Burial; Joseph\'s Death',
    summary: 'Joseph mourns and embalms Jacob. With Pharaoh\'s permission, a great procession carries Jacob to Canaan for burial at Machpelah. After returning to Egypt, the brothers fear Joseph\'s revenge. They claim Jacob requested forgiveness. Joseph weeps and reassures them: "You meant evil against me, but God meant it for good." Joseph lives to see his great-grandchildren. Before dying at 110, he makes his brothers swear to carry his bones to the Promised Land.',
    keyThemes: ['Mourning with hope', 'Providence over evil', 'Forgiveness and reconciliation', 'Faith in the promise'],
    christConnection: 'Joseph\'s words—"You meant evil...God meant it for good"—summarize the gospel. The cross was humanity\'s greatest evil, yet God\'s greatest good.',
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// EXODUS (40 Chapters)
// ═══════════════════════════════════════════════════════════════════════════════

export const EXODUS_CHAPTERS: ChapterSummary[] = [
  {
    bookId: 'exodus',
    chapter: 1,
    title: 'Israel Oppressed in Egypt',
    summary: 'The sons of Israel multiply greatly in Egypt. A new Pharaoh, who does not know Joseph, fears their numbers and enslaves them with harsh labor. When oppression fails to limit their growth, Pharaoh commands the Hebrew midwives to kill male infants. They fear God and disobey; God blesses them. Pharaoh then orders all Hebrew boys thrown into the Nile.',
    keyThemes: ['Multiplication despite oppression', 'Fear of God over fear of man', 'Satanic attack on the seed', 'Setting the stage for deliverance'],
    christConnection: 'Pharaoh\'s attempt to destroy Hebrew boys anticipates Herod\'s slaughter of infants. Satan attacks the line of promise, but God preserves His plan.',
  },
  {
    bookId: 'exodus',
    chapter: 2,
    title: 'Birth of Moses',
    summary: 'A Levite woman hides her son three months, then places him in a basket on the Nile. Pharaoh\'s daughter finds him, names him Moses, and raises him in the palace. As an adult, Moses kills an Egyptian beating a Hebrew and flees to Midian. He marries Zipporah and has a son. Meanwhile, Israel groans under bondage, and God remembers His covenant with Abraham.',
    keyThemes: ['Providence in danger', 'Failed human deliverance', 'Exile and preparation', 'God remembers His covenant'],
    christConnection: 'Moses is rescued from water and raised in a palace, then becomes a rejected deliverer—prefiguring Christ, rejected by His own before becoming Savior.',
  },
  {
    bookId: 'exodus',
    chapter: 3,
    title: 'The Burning Bush',
    summary: 'At Horeb, God appears to Moses in a bush that burns but is not consumed. God reveals He has seen Israel\'s affliction and will deliver them through Moses. When Moses asks God\'s name, He answers "I AM WHO I AM." God promises to bring Israel to a land flowing with milk and honey and predicts Pharaoh will resist until compelled by wonders.',
    keyThemes: ['Divine revelation', 'Holy ground', 'I AM—the covenant name', 'Calling to mission'],
    christConnection: 'Jesus claims the divine name "I AM" (John 8:58). The unconsumed bush pictures God dwelling with His people without destroying them—fulfilled in the incarnation.',
  },
  {
    bookId: 'exodus',
    chapter: 4,
    title: 'Signs for Moses',
    summary: 'Moses objects that Israel won\'t believe him. God gives three signs: a staff becoming a serpent, a leprous hand healed, and water turning to blood. Moses protests his poor speech; God angrily appoints Aaron as spokesman. Moses returns to Egypt. On the way, God confronts Moses over his uncircumcised son; Zipporah performs the rite. Aaron meets Moses, and together they gather Israel\'s elders, who believe and worship.',
    keyThemes: ['Overcoming objections', 'Signs and wonders', 'Importance of covenant obedience', 'Partnership in mission'],
    christConnection: 'The signs authenticate Moses as God\'s messenger, as miracles later authenticate Christ. The serpent on the staff anticipates the bronze serpent and the cross.',
  },
  {
    bookId: 'exodus',
    chapter: 5,
    title: 'Pharaoh Increases Oppression',
    summary: 'Moses and Aaron tell Pharaoh, "Let my people go." Pharaoh refuses, questioning who the LORD is. He increases Israel\'s burden, demanding bricks without providing straw. The Hebrew foremen are beaten and blame Moses. Moses complains to God: "Why have you done evil to this people?"',
    keyThemes: ['Confronting worldly power', 'Hardship before deliverance', 'Testing of faith', 'Crying out to God'],
    christConnection: 'Before deliverance, suffering intensifies. Christ\'s followers often face increased opposition before breakthrough. The exodus pattern shapes the Christian life.',
  },
  {
    bookId: 'exodus',
    chapter: 6,
    title: 'God Promises Deliverance',
    summary: 'God reassures Moses with His covenant name—revealed fully now to accomplish what He promised the patriarchs. He declares He will redeem Israel with outstretched arm. Moses speaks to Israel, but they don\'t listen due to broken spirit. God sends Moses back to Pharaoh. Moses again protests his inadequacy. The genealogy of Reuben, Simeon, and especially Levi (Moses and Aaron\'s line) is given.',
    keyThemes: ['Covenant faithfulness', 'Redemption promised', 'Human weakness, divine strength', 'Lineage of the deliverer'],
    christConnection: 'God reveals Himself progressively, culminating in Christ who fully reveals the Father. The redemption language—"I will redeem you with an outstretched arm"—points to the cross.',
  },
  {
    bookId: 'exodus',
    chapter: 7,
    title: 'Moses Before Pharaoh; First Plagues',
    summary: 'God tells Moses he will be like God to Pharaoh, with Aaron as prophet. He warns that Pharaoh\'s heart will be hardened. Aaron\'s staff becomes a serpent before Pharaoh; Egypt\'s magicians replicate it, but Aaron\'s swallows theirs. The first plague: the Nile turns to blood, killing the fish. Pharaoh\'s magicians match this, and Pharaoh\'s heart remains hard.',
    keyThemes: ['God versus false gods', 'Hardening of heart', 'Judgment on Egypt', 'Superior power of God'],
    christConnection: 'The plagues judge Egypt\'s gods. The Nile, worshiped as source of life, brings death—showing the true God alone gives life, ultimately through Christ.',
  },
  {
    bookId: 'exodus',
    chapter: 8,
    title: 'Plagues of Frogs, Gnats, and Flies',
    summary: 'The second plague: frogs overrun Egypt. Pharaoh begs relief, promising to let Israel go, but hardens his heart when the frogs die. Third plague: gnats from the dust—the magicians cannot replicate this and declare "This is the finger of God." Fourth plague: swarms of flies afflict Egypt, but Goshen is protected. Pharaoh negotiates, then hardens his heart again.',
    keyThemes: ['Escalating judgments', 'Distinction between Egypt and Israel', 'False repentance', 'Finger of God'],
    christConnection: 'The separation of Goshen shows God protects His people amid judgment. "The finger of God" later describes Jesus casting out demons (Luke 11:20).',
  },
  {
    bookId: 'exodus',
    chapter: 9,
    title: 'Plagues on Livestock, Boils, and Hail',
    summary: 'Fifth plague: a severe disease kills Egyptian livestock, but Israel\'s animals are spared. Sixth plague: boils afflict the Egyptians and their animals—even the magicians cannot stand before Moses. Seventh plague: devastating hail, the worst in Egypt\'s history, destroys crops and kills those caught outside. Pharaoh confesses sin but hardens his heart when the hail stops.',
    keyThemes: ['Judgment on Egyptian gods', 'Protection of God\'s people', 'Superficial repentance', 'Hardened heart'],
    christConnection: 'God makes a distinction between His people and others—a pattern of election. Pharaoh\'s hardening illustrates how sin leads to further judgment.',
  },
  {
    bookId: 'exodus',
    chapter: 10,
    title: 'Plagues of Locusts and Darkness',
    summary: 'God declares He hardened Pharaoh\'s heart so His signs would be recounted to future generations. Eighth plague: locusts devour what the hail left. Pharaoh\'s servants urge him to let Israel go. Pharaoh negotiates, then hardens his heart. Ninth plague: three days of thick darkness, but Israel has light. Pharaoh offers to let the people go without their livestock; Moses refuses. Pharaoh threatens death if Moses returns.',
    keyThemes: ['Signs for generations', 'Complete devastation', 'Light versus darkness', 'Final standoff'],
    christConnection: 'Israel has light while Egypt is in darkness—picturing how believers have the light of Christ while the world remains in spiritual darkness.',
  },
  {
    bookId: 'exodus',
    chapter: 11,
    title: 'The Final Plague Announced',
    summary: 'God tells Moses one more plague will break Pharaoh: at midnight, every firstborn in Egypt will die, but not one among Israel. There will be a great cry in Egypt. Pharaoh\'s servants will beg Israel to leave. God instructs Israel to ask Egyptians for silver and gold—the people find favor. Moses warns Pharaoh, who still refuses.',
    keyThemes: ['Final judgment announced', 'Death of the firstborn', 'Distinction between peoples', 'Plundering Egypt'],
    christConnection: 'The death of Egypt\'s firstborn contrasts with God\'s firstborn son, Israel. Christ, the true Firstborn, dies so that God\'s people might live.',
  },
  {
    bookId: 'exodus',
    chapter: 12,
    title: 'The Passover',
    summary: 'God institutes the Passover: each household must take a lamb, kill it at twilight, and put blood on doorposts. They eat the lamb with unleavened bread and bitter herbs, ready to travel. When the LORD sees the blood, He will pass over that house. At midnight, every Egyptian firstborn dies. Pharaoh urgently sends Israel away. They plunder Egypt and leave after 430 years.',
    keyThemes: ['Blood of the lamb', 'Judgment passed over', 'Haste and readiness', 'Redemption from slavery'],
    christConnection: 'The Passover lamb is the central type of Christ. "Christ, our Passover lamb, has been sacrificed" (1 Cor 5:7). His blood causes God\'s judgment to pass over believers.',
  },
  {
    bookId: 'exodus',
    chapter: 13,
    title: 'Consecration of the Firstborn',
    summary: 'God commands the consecration of every firstborn to Himself—they belong to Him who spared them in Egypt. The Feast of Unleavened Bread is established as a perpetual memorial. When Israel asks about these observances, parents are to explain the exodus. God leads them not by the short route to Canaan but through the wilderness. He goes before them in a pillar of cloud by day and fire by night.',
    keyThemes: ['Firstborn belongs to God', 'Memorial and teaching', 'Divine guidance', 'Pillar of cloud and fire'],
    christConnection: 'The consecrated firstborn points to Christ, the consecrated Firstborn who redeems all God\'s children. The pillar of God\'s presence anticipates Christ as the Light of the world.',
  },
  {
    bookId: 'exodus',
    chapter: 14,
    title: 'Crossing the Red Sea',
    summary: 'God leads Israel to camp by the sea, drawing Pharaoh to pursue. Israel cries out in fear; Moses assures them the LORD will fight for them. God parts the sea with a strong east wind; Israel crosses on dry ground. The Egyptians pursue, but God throws them into confusion. The waters return, drowning Pharaoh\'s entire army. Israel sees God\'s salvation and believes in the LORD and in Moses.',
    keyThemes: ['Divine deliverance', 'Faith in crisis', 'Judgment on enemies', 'Salvation through water'],
    christConnection: 'The Red Sea crossing is a type of baptism (1 Cor 10:1-2). Through water and Spirit, believers pass from slavery to freedom, from death to life in Christ.',
  },
  {
    bookId: 'exodus',
    chapter: 15,
    title: 'The Song of Moses; Bitter Water Sweetened',
    summary: 'Moses and Israel sing a triumphant song celebrating God\'s victory over Egypt: "The LORD is my strength and my song; He has become my salvation." Miriam leads the women in dancing. In the wilderness, they find only bitter water at Marah. When they grumble, God shows Moses a log to throw in, making the water sweet. At Elim, they find twelve springs and seventy palm trees.',
    keyThemes: ['Praise after deliverance', 'God as warrior and king', 'Testing in the wilderness', 'Provision and healing'],
    christConnection: 'The song declares "He has become my salvation"—the Hebrew is yeshuah, Jesus\' name. Christ turns bitter waters of life into sweetness.',
  },
  {
    bookId: 'exodus',
    chapter: 16,
    title: 'Manna and Quail',
    summary: 'In the wilderness, Israel grumbles about food, longing for Egypt\'s meat pots. God promises bread from heaven and quail. Each morning, manna covers the ground—"What is it?" They gather daily, a double portion on the sixth day for Sabbath rest. Some disobey and find the extra portion spoiled or missing. An omer of manna is kept as a memorial. Israel eats manna forty years.',
    keyThemes: ['Daily provision', 'Testing obedience', 'Sabbath rest', 'Bread from heaven'],
    christConnection: 'Jesus declares, "I am the bread of life" (John 6:35). As manna sustained Israel daily, Christ sustains believers with spiritual life.',
  },
  {
    bookId: 'exodus',
    chapter: 17,
    title: 'Water from the Rock; Battle with Amalek',
    summary: 'At Rephidim, there is no water. Israel quarrels with Moses, nearly ready to stone him. God commands Moses to strike the rock at Horeb; water flows out. The place is named Massah and Meribah ("testing" and "quarreling"). Amalek attacks Israel. While Joshua leads the battle, Moses holds up his staff; when his arms tire, Aaron and Hur support them. Israel prevails, and God vows perpetual war against Amalek.',
    keyThemes: ['God provides water', 'Testing God', 'Victory through intercession', 'Corporate support in battle'],
    christConnection: 'The smitten rock is Christ, from whom living water flows (1 Cor 10:4). Moses\' uplifted hands picture intercession that brings victory—fulfilled in Christ\'s ongoing intercession.',
  },
  {
    bookId: 'exodus',
    chapter: 18,
    title: 'Jethro\'s Visit and Advice',
    summary: 'Jethro, Moses\' father-in-law, brings Zipporah and Moses\' sons to him in the wilderness. Jethro hears all God has done and blesses the LORD, offering sacrifices. Observing Moses judging the people alone from morning to evening, Jethro advises delegating to capable men for minor cases. Moses implements this system of judges over thousands, hundreds, fifties, and tens.',
    keyThemes: ['Testimony to God\'s works', 'Wisdom from outside', 'Shared leadership', 'Sustainable ministry'],
    christConnection: 'Jethro\'s recognition of the true God foreshadows Gentiles coming to faith. The system of delegated authority anticipates church leadership under Christ.',
  },
  {
    bookId: 'exodus',
    chapter: 19,
    title: 'Israel at Sinai',
    summary: 'Three months after leaving Egypt, Israel camps at Sinai. God proposes a covenant: if they obey His voice, they will be His treasured possession, a kingdom of priests, a holy nation. The people agree. God commands them to consecrate themselves. On the third day, thunder, lightning, smoke, and trumpet announce God\'s descent on the mountain. The people tremble. Only Moses may approach.',
    keyThemes: ['Covenant proposal', 'Kingdom of priests', 'Holiness required', 'Awesome presence of God'],
    christConnection: 'Israel is called to be a kingdom of priests—fulfilled in the Church through Christ our high priest. The mediator between holy God and sinful people anticipates Christ.',
  },
  {
    bookId: 'exodus',
    chapter: 20,
    title: 'The Ten Commandments',
    summary: 'God speaks the Ten Commandments: no other gods, no idols, no misusing God\'s name, remember the Sabbath, honor parents, no murder, no adultery, no stealing, no false testimony, no coveting. The people, terrified by the thunder and fire, stand far off and ask Moses to speak to them instead of God. Moses reassures them: God tests them so they will not sin. Moses approaches the thick darkness where God is.',
    keyThemes: ['Moral law', 'Covenant obligations', 'Fear of God', 'Mediation needed'],
    christConnection: 'Christ fulfills the law perfectly (Matt 5:17) and writes it on believers\' hearts. The people\'s need for a mediator points to Christ, the one mediator between God and man.',
  },
  {
    bookId: 'exodus',
    chapter: 21,
    title: 'Laws About Servants and Violence',
    summary: 'God gives civil laws: regulations for Hebrew servants (release in the seventh year), protection for female servants, laws about violence (murder requires death, manslaughter allows sanctuary), penalties for striking or cursing parents, compensation for injuries, laws concerning slaves. The principle of "eye for eye, tooth for tooth" establishes proportional justice.',
    keyThemes: ['Social justice', 'Protection of the vulnerable', 'Proportional punishment', 'Value of human life'],
    christConnection: 'These laws reveal God\'s concern for justice and the oppressed. Christ fulfills the law\'s demands and offers a greater righteousness rooted in love.',
  },
  {
    bookId: 'exodus',
    chapter: 22,
    title: 'Laws About Property and Social Ethics',
    summary: 'Laws address theft and restitution, liability for damage, safekeeping of property, compensation for borrowed items, sexual violations, sorcery, bestiality, and idolatry. Special protection is given to foreigners, widows, and orphans—God will hear their cry. Lending without interest to the poor, returning pledged garments before night, and not cursing rulers are commanded.',
    keyThemes: ['Restitution for wrongs', 'Care for vulnerable groups', 'Social responsibility', 'Reverence for God and authority'],
    christConnection: 'The laws reveal God\'s heart for the marginalized. Christ embodies this compassion and calls His followers to the same care for the "least of these."',
  },
  {
    bookId: 'exodus',
    chapter: 23,
    title: 'Laws About Justice and Sabbath',
    summary: 'Commands against spreading false reports, following crowds into evil, and showing partiality in court. Help even an enemy\'s animal in distress. Justice for the poor is required. The sabbath day and sabbath year give rest to land, animals, and workers. Three annual feasts are established: Unleavened Bread, Harvest (Pentecost), and Ingathering (Tabernacles). God promises to drive out the Canaanites gradually.',
    keyThemes: ['Honest justice', 'Sabbath rest', 'Feast calendar', 'Promise of conquest'],
    christConnection: 'The three feasts structure Israel\'s worship and anticipate Christ: Passover (His death), Pentecost (Spirit\'s coming), Tabernacles (final ingathering).',
  },
  {
    bookId: 'exodus',
    chapter: 24,
    title: 'The Covenant Confirmed',
    summary: 'Moses, Aaron, Nadab, Abihu, and seventy elders go up the mountain; they see God and eat in His presence. Moses alone approaches the LORD. He reads the covenant; the people promise obedience. Moses sprinkles blood on the altar and the people, sealing the covenant. Moses ascends into the cloud for forty days and nights while the glory of God rests on Sinai.',
    keyThemes: ['Covenant ratification', 'Blood of the covenant', 'Vision of God', 'Forty days in God\'s presence'],
    christConnection: 'The blood of the covenant points to Christ\'s blood establishing the new covenant. The elders eating in God\'s presence anticipates the messianic banquet.',
  },
  {
    bookId: 'exodus',
    chapter: 25,
    title: 'Offerings for the Tabernacle; Ark and Table',
    summary: 'God instructs Moses to receive offerings for the tabernacle: gold, silver, bronze, fabrics, skins, wood, oil, spices, and precious stones. He gives detailed plans for the ark of the covenant—a gold-covered chest with cherubim on the mercy seat where God will meet with Moses. He also describes the table for the bread of the Presence.',
    keyThemes: ['Willing offerings', 'God\'s dwelling pattern', 'Ark of the covenant', 'Meeting place with God'],
    christConnection: 'The ark is where God meets His people—Christ is the true meeting place. The mercy seat, sprinkled with blood, is where atonement is made.',
  },
  {
    bookId: 'exodus',
    chapter: 26,
    title: 'The Tabernacle Structure',
    summary: 'Detailed instructions for the tabernacle: ten curtains of fine linen with cherubim, clasped together; eleven curtains of goats\' hair for a tent over the tabernacle; coverings of rams\' skins and goatskins. Frames of acacia wood overlaid with gold form the structure. A veil separates the Holy Place from the Most Holy Place; a screen covers the entrance.',
    keyThemes: ['God\'s dwelling on earth', 'Beauty and craftsmanship', 'Separation of holy spaces', 'Pattern from heaven'],
    christConnection: 'The veil separating the Most Holy Place represents the barrier between God and humanity—torn in two when Christ died, opening access to God.',
  },
  {
    bookId: 'exodus',
    chapter: 27,
    title: 'The Altar and Courtyard',
    summary: 'Instructions for the bronze altar of burnt offering: acacia wood overlaid with bronze, with horns at each corner, grating, and utensils. The courtyard is defined by linen hangings on bronze posts. The entrance screen faces east. Pure olive oil is to be provided for the lamp in the tabernacle, burning continually from evening to morning.',
    keyThemes: ['Altar for sacrifice', 'Courtyard as sacred space', 'Continual light', 'Approaching God through sacrifice'],
    christConnection: 'The bronze altar is where sacrifices are offered—Christ is both altar and sacrifice. The continual light represents Christ as the light that never goes out.',
  },
  {
    bookId: 'exodus',
    chapter: 28,
    title: 'The Priestly Garments',
    summary: 'Aaron and his sons are set apart for priesthood. Sacred garments are designed for glory and beauty: the ephod with two onyx stones bearing the names of Israel\'s tribes; the breastpiece with twelve stones for the twelve tribes, containing the Urim and Thummim for discerning God\'s will; the robe with bells and pomegranates; the turban with a gold plate inscribed "Holy to the LORD."',
    keyThemes: ['Set apart for service', 'Bearing the people before God', 'Glory and beauty in worship', 'Holiness to the LORD'],
    christConnection: 'The high priest carries Israel on his shoulders and heart, representing them before God—as Christ bears His people before the Father, ever living to intercede.',
  },
  {
    bookId: 'exodus',
    chapter: 29,
    title: 'Consecration of the Priests',
    summary: 'Instructions for ordaining Aaron and his sons: washing, clothing, anointing with oil, offering a bull as sin offering, a ram as burnt offering, and another ram as ordination offering. Blood is applied to their ear, thumb, and toe. The ordination takes seven days. The consecrated portions belong to the priests. God promises to meet Israel at the tabernacle and dwell among them.',
    keyThemes: ['Washing and anointing', 'Blood applied to the priest', 'Seven days of consecration', 'God dwelling among His people'],
    christConnection: 'Christ needs no ordination sacrifice—He is both priest and offering. Yet believers are anointed with the Spirit for priestly service.',
  },
  {
    bookId: 'exodus',
    chapter: 30,
    title: 'Altar of Incense, Atonement Money, and Anointing Oil',
    summary: 'God commands the altar of incense before the veil, where incense burns continually. Atonement money—half a shekel per person—is collected for tabernacle service, equal for rich and poor. A bronze basin for priests\' washing is prescribed. The holy anointing oil and incense are given special formulas, reserved solely for sacred use under penalty of death.',
    keyThemes: ['Incense as prayer', 'Ransom for souls', 'Cleansing for service', 'Holy anointing'],
    christConnection: 'Incense represents prayers ascending to God (Rev 5:8). The ransom payment points to Christ\'s ransom for many. The anointing oil pictures the Holy Spirit.',
  },
  {
    bookId: 'exodus',
    chapter: 31,
    title: 'Bezalel and Sabbath Command',
    summary: 'God appoints Bezalel and Oholiab, filled with the Spirit, to craft the tabernacle and all its furnishings. God again emphasizes the Sabbath as a perpetual sign of the covenant between Him and Israel—whoever profanes it shall die. On Sinai, God gives Moses two tablets of stone inscribed by the finger of God.',
    keyThemes: ['Spirit-empowered craftsmanship', 'Sabbath as covenant sign', 'Stone tablets', 'Divine inscription'],
    christConnection: 'The Spirit fills craftsmen for building God\'s dwelling—the same Spirit now empowers believers to build the Church, God\'s new temple in Christ.',
  },
  {
    bookId: 'exodus',
    chapter: 32,
    title: 'The Golden Calf',
    summary: 'While Moses is on the mountain, the people pressure Aaron to make gods. He fashions a golden calf; they worship it and say, "These are your gods who brought you out of Egypt." God tells Moses to descend because the people have corrupted themselves. Moses intercedes; God relents from destroying them. Moses descends, sees the calf, shatters the tablets in anger, grinds the calf, and makes Israel drink it. The Levites execute about 3,000 idolaters.',
    keyThemes: ['Idolatry and apostasy', 'Broken covenant', 'Intercessory mediation', 'Judgment on sin'],
    christConnection: 'Moses\' intercession prevents destruction—pointing to Christ\'s greater intercession. The broken tablets show the broken covenant; Christ establishes a new covenant.',
  },
  {
    bookId: 'exodus',
    chapter: 33,
    title: 'Moses Seeks God\'s Presence',
    summary: 'God tells Israel to go to the Promised Land but says He will not go among them lest He destroy them. The people mourn. Moses pitches the tent of meeting outside the camp; the pillar of cloud descends when Moses enters. Moses pleads for God\'s presence, saying the nation is distinct only by God\'s accompanying them. God agrees. Moses asks to see God\'s glory; God will show His goodness but not His face.',
    keyThemes: ['Crisis of God\'s presence', 'Face-to-face intimacy', 'Intercession for the people', 'Seeing God\'s glory'],
    christConnection: '"No one has seen God; the only Son has made him known" (John 1:18). What Moses couldn\'t fully see, Christ fully reveals.',
  },
  {
    bookId: 'exodus',
    chapter: 34,
    title: 'New Tablets and God\'s Glory',
    summary: 'God commands Moses to cut new tablets and ascend alone. The LORD passes before him, proclaiming His name: "The LORD, a God merciful and gracious, slow to anger, abounding in steadfast love and faithfulness." Moses bows in worship, again intercedes for the stiff-necked people, and God renews the covenant. When Moses descends after forty days, his face shines so brightly he must wear a veil.',
    keyThemes: ['God\'s self-revelation', 'Mercy and covenant love', 'Renewed covenant', 'Reflected glory'],
    christConnection: 'The glory on Moses\' face faded; Christ\'s glory is unfading. We behold Him and are transformed from glory to glory (2 Cor 3:18).',
  },
  {
    bookId: 'exodus',
    chapter: 35,
    title: 'Sabbath and Tabernacle Offerings',
    summary: 'Moses assembles Israel and reiterates the Sabbath command. He then calls for freewill offerings for the tabernacle: materials and skilled labor. The people respond with overwhelming generosity, bringing gold, silver, bronze, yarn, linen, leather, wood, oil, spices, and precious stones. Both men and women give according to what they have.',
    keyThemes: ['Sabbath rest', 'Willing-hearted giving', 'Community participation', 'Generosity for God\'s house'],
    christConnection: 'Willing offerings build God\'s dwelling. Under the new covenant, believers offer themselves as living sacrifices, building the spiritual house.',
  },
  {
    bookId: 'exodus',
    chapter: 36,
    title: 'Construction Begins',
    summary: 'Bezalel, Oholiab, and skilled workers begin the tabernacle construction. The people continue bringing offerings so abundantly that Moses must command them to stop—more than enough has been given. The craftsmen make the curtains, frames, bars, veil, and screen exactly as God commanded.',
    keyThemes: ['More than enough', 'Spirit-gifted work', 'Faithful obedience', 'Building according to the pattern'],
    christConnection: 'The abundance of offerings pictures the grace that overflows in Christ. The tabernacle built "according to the pattern" points to Christ, the true tabernacle.',
  },
  {
    bookId: 'exodus',
    chapter: 37,
    title: 'The Ark, Table, Lampstand, and Incense Altar',
    summary: 'Bezalel crafts the ark of acacia wood overlaid with gold, with its mercy seat and cherubim; the table for the bread of the Presence; the golden lampstand with its seven branches; and the altar of incense. Each item is made exactly according to God\'s instructions given to Moses.',
    keyThemes: ['Craftsmanship to God\'s glory', 'Ark as throne of God', 'Light and bread and incense', 'Faithful execution'],
    christConnection: 'Christ is the true ark (God\'s presence), bread (sustenance), light (revelation), and incense (prayer and intercession) all fulfilled in one person.',
  },
  {
    bookId: 'exodus',
    chapter: 38,
    title: 'The Bronze Altar, Basin, and Courtyard',
    summary: 'The bronze altar of burnt offering is constructed with its utensils. The bronze basin is made from the mirrors of the women who served at the entrance. The courtyard with its posts, bases, and hangings is completed. An inventory records the gold, silver, and bronze used—the silver from the census atonement money.',
    keyThemes: ['Altar for approaching God', 'Cleansing basin', 'Accounting for resources', 'Women\'s contribution'],
    christConnection: 'The bronze basin for cleansing points to our washing by Christ\'s blood and word. Giving mirrors for worship shows prioritizing God\'s house over vanity.',
  },
  {
    bookId: 'exodus',
    chapter: 39,
    title: 'The Priestly Garments Completed',
    summary: 'The craftsmen make all the priestly garments: the ephod, breastpiece with twelve stones, robe with bells and pomegranates, tunics, turban, and the gold plate inscribed "Holy to the LORD." All work is done "as the LORD commanded Moses." The completed tabernacle and all its furnishings are brought to Moses, who blesses the workers.',
    keyThemes: ['Garments for glory and beauty', 'Obedience in every detail', 'Work completed', 'Blessing on faithful labor'],
    christConnection: 'The repeated phrase "as the LORD commanded" shows obedience God accepts. Christ perfectly obeyed where Israel failed, fulfilling all righteousness.',
  },
  {
    bookId: 'exodus',
    chapter: 40,
    title: 'The Tabernacle Erected; God\'s Glory Fills It',
    summary: 'On the first day of the first month—New Year—Moses erects the tabernacle, setting each item in its place and anointing everything with oil. He washes, vests, and anoints Aaron and his sons. When Moses finishes, the cloud covers the tent and the glory of the LORD fills the tabernacle so intensely that Moses cannot enter. The cloud guides Israel\'s journeys.',
    keyThemes: ['New beginning', 'Glory filling the house', 'Cloud and fire guidance', 'God dwelling with His people'],
    christConnection: 'The glory filling the tabernacle anticipates Christ, in whom "the fullness of deity dwells bodily" (Col 2:9). God\'s presence now dwells in believers through the Spirit.',
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// LEVITICUS (27 Chapters)
// ═══════════════════════════════════════════════════════════════════════════════

export const LEVITICUS_CHAPTERS: ChapterSummary[] = [
  {
    bookId: 'leviticus',
    chapter: 1,
    title: 'The Burnt Offering',
    summary: 'God calls Moses from the tent of meeting and gives instructions for burnt offerings. The worshiper lays hands on the animal, identifying with it; the animal is killed, and its blood is thrown against the altar. The entire animal is burned—a pleasing aroma to the LORD. Bulls, sheep, goats, or birds may be offered according to one\'s means.',
    keyThemes: ['Whole consecration', 'Substitutionary death', 'Pleasing aroma to God', 'Access according to ability'],
    christConnection: 'The burnt offering pictures Christ\'s total consecration to the Father. His sacrifice is a "fragrant offering" (Eph 5:2) fully consumed for our sake.',
  },
  {
    bookId: 'leviticus',
    chapter: 2,
    title: 'The Grain Offering',
    summary: 'Instructions for grain offerings: fine flour with oil and frankincense, or baked cakes or wafers. A portion is burned as a memorial; the rest goes to the priests. No leaven or honey may be included, but salt must accompany every offering. Firstfruits are also presented to the LORD.',
    keyThemes: ['Offering of labor\'s fruit', 'No leaven (no corruption)', 'Salt of the covenant', 'Provision for priests'],
    christConnection: 'The grain offering represents the fruit of our labor offered to God. Christ offered His perfect life—without the leaven of sin—to the Father.',
  },
  {
    bookId: 'leviticus',
    chapter: 3,
    title: 'The Peace Offering',
    summary: 'The peace offering expresses fellowship with God. The worshiper lays hands on the animal, kills it, and the fat portions are burned to the LORD. The blood is thrown against the altar. The meat is shared in a communal meal. Fat and blood must never be eaten—they belong to God.',
    keyThemes: ['Fellowship with God', 'Communion meal', 'Fat belongs to the LORD', 'Blood is sacred'],
    christConnection: 'The peace offering prefigures the Lord\'s Supper—communion with God through Christ\'s sacrifice that reconciles us and makes peace.',
  },
  {
    bookId: 'leviticus',
    chapter: 4,
    title: 'The Sin Offering',
    summary: 'When someone sins unintentionally, a sin offering is required. Different animals are prescribed based on who sins: a bull for the anointed priest or the whole congregation, a male goat for a leader, a female goat or lamb for a common person. Blood is applied to various places depending on the sinner\'s status.',
    keyThemes: ['Atonement for sin', 'Unintentional sin still requires sacrifice', 'Blood applied for cleansing', 'Gradations of responsibility'],
    christConnection: 'The sin offering addresses our guilt. Christ became our sin offering, "made sin for us" (2 Cor 5:21) that we might become righteous.',
  },
  {
    bookId: 'leviticus',
    chapter: 5,
    title: 'The Guilt Offering',
    summary: 'Specific cases requiring offerings: failing to testify, touching unclean things, rash oaths. For these, one confesses and brings a female lamb or goat, or birds, or flour if poor. The guilt offering addresses wrongs requiring restitution: holy things misused or fraud against a neighbor. Restitution plus 20% must be made.',
    keyThemes: ['Confession required', 'Restitution for wrongs', 'Provision for the poor', 'Making things right'],
    christConnection: 'Christ is our guilt offering—He made restitution for what we could never repay, restoring what sin had stolen from God and neighbor.',
  },
  {
    bookId: 'leviticus',
    chapter: 6,
    title: 'Priestly Instructions for Offerings',
    summary: 'Additional instructions for priests: the burnt offering\'s fire must never go out; the grain offering\'s handling; the high priest\'s daily grain offering; detailed procedures for the sin offering. Whatever touches the sin offering\'s flesh becomes holy; blood spatters must be washed; bronze vessels scoured, clay vessels broken.',
    keyThemes: ['Perpetual fire', 'Holiness spreads', 'Priestly duties', 'Handling sacred things'],
    christConnection: 'The perpetual fire represents Christ\'s never-ending intercession. The spreading holiness pictures how contact with Christ makes us holy.',
  },
  {
    bookId: 'leviticus',
    chapter: 7,
    title: 'Instructions for Guilt and Peace Offerings',
    summary: 'The guilt offering belongs to the officiating priest. Peace offerings may be thanksgiving, vow, or freewill offerings; each has specific time limits for eating. Anyone eating while unclean is cut off. Fat and blood are never to be eaten. Aaron and his sons receive portions from the people\'s offerings.',
    keyThemes: ['Time limits on sacred food', 'Cleanliness required for communion', 'Priestly portions', 'Summary of offerings'],
    christConnection: 'Eating the fellowship offerings in purity pictures believers partaking of Christ worthily. He is both the sacrifice and the feast.',
  },
  {
    bookId: 'leviticus',
    chapter: 8,
    title: 'Ordination of Aaron and His Sons',
    summary: 'Moses assembles Israel and consecrates Aaron and his sons as priests. He washes them, dresses Aaron in the sacred garments, anoints the tabernacle and altar, and anoints Aaron. He offers a bull as sin offering, a ram as burnt offering, and another ram as ordination offering. Blood is applied to the priests\' right ear, thumb, and toe. They remain at the tabernacle seven days.',
    keyThemes: ['Washing, clothing, anointing', 'Blood on ear, hand, foot', 'Seven days of consecration', 'Obedience to God\'s command'],
    christConnection: 'The ordination pictures Christ\'s consecration as our high priest. The blood on ear, thumb, and toe symbolizes complete dedication—hearing, doing, and walking in God\'s ways.',
  },
  {
    bookId: 'leviticus',
    chapter: 9,
    title: 'Aaron\'s First Sacrifices',
    summary: 'On the eighth day, Aaron begins his priestly ministry, offering sin offerings and burnt offerings for himself and the people. After the offerings, Aaron blesses the people. Moses and Aaron enter the tent; when they emerge, the glory of the LORD appears to all. Fire from the LORD consumes the offerings. The people shout and fall on their faces.',
    keyThemes: ['Priestly ministry begins', 'God\'s glory appears', 'Divine fire consumes', 'Worship response'],
    christConnection: 'God\'s fire accepting the sacrifice pictures divine approval. Christ\'s sacrifice was accepted when God raised Him from the dead.',
  },
  {
    bookId: 'leviticus',
    chapter: 10,
    title: 'Nadab and Abihu\'s Sin',
    summary: 'Aaron\'s sons Nadab and Abihu offer "unauthorized fire" before the LORD. Fire from the LORD consumes them. Moses tells Aaron this fulfills God\'s word: "Among those who are near me I will be sanctified." Aaron is silent. Moses instructs the remaining sons on proper behavior: no mourning rituals, no leaving the tabernacle, no wine before service.',
    keyThemes: ['Holiness of worship', 'Judgment on presumption', 'Obedience over innovation', 'Reverence before God'],
    christConnection: 'Access to God must be on His terms. Through Christ alone—the authorized way—we approach the holy God without being consumed.',
  },
  {
    bookId: 'leviticus',
    chapter: 11,
    title: 'Clean and Unclean Animals',
    summary: 'God distinguishes clean from unclean animals. Clean land animals have split hooves and chew cud. Clean water creatures have fins and scales. Various birds, insects, and creeping things are forbidden. Touching carcasses causes uncleanness until evening. Israel must be holy because God is holy.',
    keyThemes: ['Distinction and holiness', 'Dietary laws', 'Uncleanness from contact', 'Being set apart'],
    christConnection: 'These laws taught Israel to distinguish holy from common. In Christ, all foods are declared clean (Mark 7:19), and the principle becomes moral rather than ceremonial.',
  },
  {
    bookId: 'leviticus',
    chapter: 12,
    title: 'Purification After Childbirth',
    summary: 'After childbirth, a woman is ceremonially unclean—seven days for a boy, two weeks for a girl. She then remains in purification for 33 or 66 days. When her purification is complete, she brings a burnt offering and sin offering. If she cannot afford a lamb, two birds suffice.',
    keyThemes: ['Childbirth and uncleanness', 'Periods of purification', 'Offerings for cleansing', 'Provision for the poor'],
    christConnection: 'Mary offered two birds after Jesus\' birth (Luke 2:24), showing the holy family\'s poverty. Christ entered fully into our human condition.',
  },
  {
    bookId: 'leviticus',
    chapter: 13,
    title: 'Laws About Skin Diseases',
    summary: 'Detailed procedures for diagnosing skin diseases ("leprosy"). The priest examines the person over time to determine if the condition is serious. One diagnosed with a defiling disease must live outside the camp, cry "Unclean, unclean," and wear torn clothes. Garments with persistent growths are burned.',
    keyThemes: ['Diagnosis of disease', 'Isolation for protection', 'Living with uncleanness', 'Priestly role in health'],
    christConnection: 'Leprosy pictures sin—defiling, spreading, separating from the community. Christ touched lepers and cleansed them, showing His power over sin.',
  },
  {
    bookId: 'leviticus',
    chapter: 14,
    title: 'Cleansing from Skin Diseases',
    summary: 'When healed, the person undergoes elaborate cleansing: two birds (one killed, one released), washing, shaving, waiting seven days, then offerings including blood and oil applied to the right ear, thumb, and toe. The oil is sprinkled before the LORD. Similar procedures apply to houses with mold or fungus.',
    keyThemes: ['Restoration to community', 'Blood and oil applied', 'Thorough cleansing', 'House cleansing'],
    christConnection: 'The released bird pictures freedom from sin\'s curse. The blood and oil on ear, thumb, and toe mirror priestly ordination—the healed person is restored to worship.',
  },
  {
    bookId: 'leviticus',
    chapter: 15,
    title: 'Bodily Discharges',
    summary: 'Various bodily discharges cause ceremonial uncleanness: abnormal male discharge, normal seminal emission, menstruation, abnormal female discharge. Each requires specific waiting periods and washings. The discharge spreads uncleanness to beds, seats, and people touched. Offerings restore the person after abnormal discharges.',
    keyThemes: ['Bodily uncleanness', 'Contagious impurity', 'Washing and waiting', 'Offerings for restoration'],
    christConnection: 'These laws teach that sin affects the whole person and spreads to others. The woman with a discharge touched Jesus and was healed (Mark 5)—He absorbs impurity and gives purity.',
  },
  {
    bookId: 'leviticus',
    chapter: 16,
    title: 'The Day of Atonement',
    summary: 'Instructions for Yom Kippur—the holiest day. Aaron enters the Most Holy Place only on this day, wearing simple linen garments. He offers a bull for himself, then casts lots over two goats: one is sacrificed, its blood sprinkled on the mercy seat; the other becomes the scapegoat, bearing the people\'s sins into the wilderness. The sanctuary, altar, and people are cleansed.',
    keyThemes: ['Annual atonement', 'Access to God\'s presence', 'Scapegoat bearing sins away', 'National purification'],
    christConnection: 'The Day of Atonement is fulfilled in Christ. He entered the true holy place with His own blood, once for all, removing our sins as far as the east is from the west.',
  },
  {
    bookId: 'leviticus',
    chapter: 17,
    title: 'The Sanctity of Blood',
    summary: 'All sacrifices must be brought to the tabernacle—not offered in the open field to goat demons. The life of the flesh is in the blood; God has given it for atonement on the altar. Therefore, no one may eat blood. Animals killed in hunting must be drained of blood and covered with earth.',
    keyThemes: ['Centralized worship', 'Life in the blood', 'Blood for atonement', 'Prohibition against eating blood'],
    christConnection: 'The blood makes atonement because it represents life given in death. Christ\'s blood, poured out for many, accomplishes what animal blood could only symbolize.',
  },
  {
    bookId: 'leviticus',
    chapter: 18,
    title: 'Unlawful Sexual Relations',
    summary: 'Israel must not follow Egypt\'s or Canaan\'s practices. Detailed prohibitions against incest with various relatives, adultery, child sacrifice to Molech, homosexual acts, and bestiality. These abominations defiled the Canaanites and caused the land to "vomit them out." Israel must keep God\'s statutes to remain in the land.',
    keyThemes: ['Sexual holiness', 'Distinction from pagans', 'Land defiled by sin', 'Expulsion for abominations'],
    christConnection: 'God\'s people are called to moral purity. Christ redeems us from the pattern of this world, transforming us by renewed minds.',
  },
  {
    bookId: 'leviticus',
    chapter: 19,
    title: 'Laws for Holy Living',
    summary: '"Be holy, for I the LORD your God am holy." Commands include: revere parents, keep Sabbaths, no idols, proper sacrifice procedures, care for the poor (leave gleanings), no stealing or lying, pay wages promptly, don\'t curse the deaf or trip the blind, judge justly, love your neighbor as yourself, honor the elderly, welcome foreigners.',
    keyThemes: ['Holiness in daily life', 'Love your neighbor', 'Social justice', 'Reverence and compassion'],
    christConnection: 'Jesus quotes "love your neighbor as yourself" as the second greatest commandment. He embodies perfect holiness in human relationships.',
  },
  {
    bookId: 'leviticus',
    chapter: 20,
    title: 'Penalties for Sin',
    summary: 'Death penalties are prescribed for: giving children to Molech, consulting mediums, cursing parents, adultery, incest, homosexual acts, bestiality. Other violations bring being "cut off" from the people. Israel must distinguish clean from unclean, holy from common. God has separated Israel to be His own.',
    keyThemes: ['Serious consequences for sin', 'Capital punishment', 'Being cut off', 'Separation to God'],
    christConnection: 'The severe penalties show sin\'s gravity. Christ bore the penalty we deserved, dying under the curse of the law to redeem us.',
  },
  {
    bookId: 'leviticus',
    chapter: 21,
    title: 'Holiness Requirements for Priests',
    summary: 'Priests face additional holiness requirements: no contact with the dead except close relatives, no pagan mourning practices, no marrying prostitutes or divorced women. The high priest has stricter requirements: no mourning, no leaving the sanctuary. No priest with physical defects may approach the altar, though he may eat the sacred food.',
    keyThemes: ['Higher standards for leaders', 'Avoiding defilement', 'Physical wholeness as symbol', 'Holiness of service'],
    christConnection: 'Christ is the perfect high priest, without blemish or defect. He never leaves God\'s presence and intercedes perpetually for His people.',
  },
  {
    bookId: 'leviticus',
    chapter: 22,
    title: 'Acceptable Offerings',
    summary: 'Priests must not eat sacred offerings while unclean. Non-priests and foreigners may not eat them, but household members may. Sacrificial animals must be without defect—no blind, injured, or diseased animals. An animal and its young must not be killed on the same day. God\'s name must not be profaned; He is holy.',
    keyThemes: ['Purity for priests', 'Unblemished offerings', 'Protecting the sacred', 'Sanctifying God\'s name'],
    christConnection: 'Only unblemished animals could be offered—pointing to Christ, the Lamb without blemish or spot, whose perfect offering alone satisfies God.',
  },
  {
    bookId: 'leviticus',
    chapter: 23,
    title: 'The Appointed Feasts',
    summary: 'God establishes Israel\'s sacred calendar: weekly Sabbath; Passover and Unleavened Bread in the first month; Firstfruits; Feast of Weeks (Pentecost) fifty days later; Feast of Trumpets on the seventh month\'s first day; Day of Atonement on the tenth; Feast of Tabernacles for seven days, dwelling in booths.',
    keyThemes: ['Sacred calendar', 'Remembering God\'s acts', 'Rhythm of worship', 'Past, present, and future'],
    christConnection: 'The feasts are prophetic: Passover (Christ\'s death), Firstfruits (resurrection), Pentecost (Spirit\'s coming), Trumpets (Christ\'s return), Atonement (final cleansing), Tabernacles (eternal dwelling).',
  },
  {
    bookId: 'leviticus',
    chapter: 24,
    title: 'The Lampstand, Bread, and Blasphemy',
    summary: 'Instructions for the golden lampstand: pure olive oil to burn continually. The bread of the Presence: twelve loaves set before the LORD each Sabbath. A case arises: a man with an Israelite mother and Egyptian father blasphemes God\'s name. He is stoned. The law is established: whoever blasphemes God\'s name shall die. An eye for an eye, life for life.',
    keyThemes: ['Perpetual light and bread', 'Severity of blasphemy', 'Equal justice', 'Protecting God\'s honor'],
    christConnection: 'Christ is the light of the world and the bread of life, continuously present before the Father. His name is above every name—never to be blasphemed.',
  },
  {
    bookId: 'leviticus',
    chapter: 25,
    title: 'Sabbath Year and Jubilee',
    summary: 'Every seventh year, the land rests—no sowing or reaping; people eat what grows naturally. Every fiftieth year is Jubilee: liberty proclaimed, land returns to original families, Hebrew slaves go free. Land cannot be sold permanently—it belongs to God. Israelites must not be enslaved ruthlessly; they are God\'s servants whom He brought out of Egypt.',
    keyThemes: ['Rest for the land', 'Jubilee liberty', 'Land belongs to God', 'Freedom from permanent slavery'],
    christConnection: 'Jesus inaugurates the ultimate Jubilee (Luke 4:18-19), proclaiming liberty to captives. In Him, all debts are cancelled and we enter God\'s rest.',
  },
  {
    bookId: 'leviticus',
    chapter: 26,
    title: 'Blessings and Curses',
    summary: 'God promises blessings for obedience: rain, abundant harvests, peace, victory over enemies, His presence among them. For disobedience, escalating curses: terror, disease, defeat, famine, wild beasts, plague, siege, exile, and the land enjoying its sabbaths. Yet if they confess and humble themselves, God will remember His covenant and not utterly destroy them.',
    keyThemes: ['Blessings for obedience', 'Curses for rebellion', 'Escalating discipline', 'Covenant faithfulness despite judgment'],
    christConnection: 'Christ bore the curses of the covenant on the cross, becoming a curse for us (Gal 3:13). In Him, we receive the blessings of Abraham.',
  },
  {
    bookId: 'leviticus',
    chapter: 27,
    title: 'Vows and Dedications',
    summary: 'When someone makes a special vow dedicating a person, animal, house, or field to the LORD, valuation rules apply. Dedicated persons are valued by age and gender. Dedicated animals that are clean cannot be exchanged; unclean animals may be redeemed with 20% added. Firstborn animals already belong to God. The tithe is holy to the LORD.',
    keyThemes: ['Keeping vows', 'Valuation of persons', 'Redemption with premium', 'Tithe belongs to God'],
    christConnection: 'Our dedication to God is made possible by Christ, who gave Himself as the ultimate offering. We are bought with a price—His blood—and belong to God.',
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// NUMBERS (36 Chapters)
// ═══════════════════════════════════════════════════════════════════════════════

export const NUMBERS_CHAPTERS: ChapterSummary[] = [
  {
    bookId: 'numbers',
    chapter: 1,
    title: 'The First Census',
    summary: 'In the wilderness of Sinai, God commands Moses to number all men twenty years and older able to go to war. The twelve tribes are counted, excluding Levi, who is set apart for tabernacle service. The total is 603,550 fighting men. Each tribe has its leader listed; the Levites will camp around the tabernacle to protect it.',
    keyThemes: ['Military census', 'Tribal organization', 'Levites set apart', 'Preparation for conquest'],
    christConnection: 'God knows His people by name and number. The Church is also numbered—the 144,000 representing the complete people of God secured in Christ.',
  },
  {
    bookId: 'numbers',
    chapter: 2,
    title: 'Arrangement of the Camp',
    summary: 'God prescribes the camp arrangement: three tribes on each side of the tabernacle. Judah leads the east side with Issachar and Zebulun; Reuben leads the south with Simeon and Gad; Ephraim leads the west with Manasseh and Benjamin; Dan leads the north with Asher and Naphtali. The Levites camp in the center around the tabernacle.',
    keyThemes: ['Ordered arrangement', 'Tabernacle at center', 'Judah in the lead', 'Community around God\'s presence'],
    christConnection: 'God dwells at the center of His people. The arrangement points to Christ as the center of the Church, with all things ordered around Him.',
  },
  {
    bookId: 'numbers',
    chapter: 3,
    title: 'The Levites Appointed',
    summary: 'Aaron\'s sons are named—Nadab and Abihu died offering unauthorized fire; Eleazar and Ithamar serve. The Levites are given to Aaron to assist with tabernacle duties. They are numbered from one month old: Gershon, Kohath, and Merari, each with specific responsibilities for transporting the tabernacle. The Levites substitute for Israel\'s firstborn.',
    keyThemes: ['Levites replace firstborn', 'Tabernacle responsibilities', 'Three Levitical clans', 'Service to Aaron'],
    christConnection: 'The Levites are a living offering in place of the firstborn. Christ, the Firstborn, gives Himself and makes believers a kingdom of priests.',
  },
  {
    bookId: 'numbers',
    chapter: 4,
    title: 'Duties of the Levitical Clans',
    summary: 'Kohathites (ages 30-50) carry the most holy things after Aaron covers them—they must not see or touch them directly, or they will die. Gershonites carry the curtains and hangings. Merarites carry the frames, bars, and pillars. Each clan is numbered and given specific duties.',
    keyThemes: ['Careful handling of holy things', 'Age limits for service', 'Divided responsibilities', 'Deadly danger of irreverence'],
    christConnection: 'The holy things must be covered, veiled from sight. In Christ, the veil is removed; we see God\'s glory openly and handle holy things by grace.',
  },
  {
    bookId: 'numbers',
    chapter: 5,
    title: 'Purity in the Camp',
    summary: 'Those with skin diseases, bodily discharges, or corpse-contamination must be put outside the camp so they don\'t defile where God dwells. Laws for restitution when wronging another. The test for suspected adultery: the wife drinks bitter water; if guilty, she suffers physical consequences; if innocent, she is cleared and can conceive.',
    keyThemes: ['Camp purity', 'Restitution for wrongs', 'Testing suspected adultery', 'God in the midst'],
    christConnection: 'The camp must be holy because God dwells there. The Church is called to purity because Christ dwells among His people by the Spirit.',
  },
  {
    bookId: 'numbers',
    chapter: 6,
    title: 'The Nazirite Vow and Priestly Blessing',
    summary: 'The Nazirite vow involves separation to the LORD: no wine or grape products, no cutting hair, no contact with the dead. If accidentally defiled, the Nazirite must restart after offerings. At completion, offerings are made and the hair is burned. God gives Moses the priestly blessing: "The LORD bless you and keep you; the LORD make his face shine on you..."',
    keyThemes: ['Special consecration', 'Separation unto God', 'Priestly blessing', 'God\'s face shining on His people'],
    christConnection: 'The Nazirite typifies complete dedication to God. Christ was the ultimate consecrated one. The blessing is fulfilled as God\'s face shines on us in Christ.',
  },
  {
    bookId: 'numbers',
    chapter: 7,
    title: 'Offerings at the Tabernacle\'s Dedication',
    summary: 'The tribal leaders bring offerings for the tabernacle\'s dedication: six covered carts and twelve oxen for transporting it. Over twelve days, each leader brings identical offerings: silver plates and bowls, gold dishes of incense, animals for burnt, sin, and peace offerings. God speaks to Moses from above the mercy seat.',
    keyThemes: ['Generous leadership', 'Equal participation', 'Dedication gifts', 'God speaks from the mercy seat'],
    christConnection: 'Each tribe contributes equally—all are needed in God\'s house. God speaks from the mercy seat, where blood is sprinkled—foreshadowing how God speaks to us through Christ\'s atonement.',
  },
  {
    bookId: 'numbers',
    chapter: 8,
    title: 'Setting Up the Lampstand; Levite Consecration',
    summary: 'Aaron sets up the seven lamps to illuminate the area before the lampstand. The Levites are purified: sprinkled with water of purification, shaved, clothes washed. Israel lays hands on them; they are offered as a "wave offering" to the LORD. They are given to Aaron from among Israel. Levites serve from ages 25-50.',
    keyThemes: ['Light in the sanctuary', 'Levite purification', 'Given to God as offering', 'Service age limits'],
    christConnection: 'The lampstand illuminates the holy place—Christ is the light. The Levites, offered to God, picture believers presented as living sacrifices.',
  },
  {
    bookId: 'numbers',
    chapter: 9,
    title: 'The Second Passover; The Cloud',
    summary: 'Israel keeps Passover in the wilderness. Those who are unclean or traveling may observe it a month later. The cloud covers the tabernacle—by day it appears as cloud, by night as fire. When the cloud lifts, Israel travels; when it settles, they camp. They move at the LORD\'s command, whether for days or months.',
    keyThemes: ['Passover in the wilderness', 'Second chance for the unclean', 'Cloud guidance', 'Following God\'s leading'],
    christConnection: 'The cloud is God\'s guiding presence. Christ leads His Church by the Spirit, and believers follow wherever He goes.',
  },
  {
    bookId: 'numbers',
    chapter: 10,
    title: 'The Silver Trumpets; Departure from Sinai',
    summary: 'God commands two silver trumpets for summoning the assembly and for setting out. Different signals indicate different actions. On the twentieth day of the second month, the cloud lifts and Israel departs Sinai in prescribed order: Judah\'s camp first, then Reuben\'s, the Levites with the tabernacle, then Ephraim\'s and Dan\'s camps. Moses invites Hobab to accompany them.',
    keyThemes: ['Trumpet signals', 'Ordered march', 'Departure from Sinai', 'Human guidance alongside divine'],
    christConnection: 'The trumpets gather God\'s people—foreshadowing the trumpet at Christ\'s return. The ark leads Israel as Christ leads the Church.',
  },
  {
    bookId: 'numbers',
    chapter: 11,
    title: 'Complaining; the Spirit on the Seventy',
    summary: 'The people complain; God\'s fire burns the camp\'s edge. They crave meat, weeping for Egypt\'s food. Moses, overwhelmed, asks God to kill him. God commands Moses to gather seventy elders; the Spirit rests on them and they prophesy. God sends quail in abundance, but while the meat is still in their teeth, plague strikes those who craved.',
    keyThemes: ['Dangerous complaining', 'Leadership burden shared', 'Spirit on the elders', 'Craving brings judgment'],
    christConnection: 'The Spirit on the seventy anticipates Pentecost when the Spirit is poured out on all God\'s people. Moses wishes all were prophets—fulfilled in the new covenant.',
  },
  {
    bookId: 'numbers',
    chapter: 12,
    title: 'Miriam and Aaron Oppose Moses',
    summary: 'Miriam and Aaron criticize Moses for his Cushite wife and question his unique prophetic status. God summons all three to the tent of meeting. He declares Moses is uniquely faithful—God speaks to him face to face, not in riddles. Miriam is struck with leprosy. Moses intercedes; she is healed but must remain outside the camp seven days.',
    keyThemes: ['Jealousy of leadership', 'Moses\' unique status', 'Judgment on Miriam', 'Intercession and restoration'],
    christConnection: 'Moses is faithful as a servant; Christ is faithful as a Son over God\'s house (Heb 3:5-6). Challenging God\'s chosen mediator brings judgment.',
  },
  {
    bookId: 'numbers',
    chapter: 13,
    title: 'The Twelve Spies',
    summary: 'From Kadesh, Moses sends twelve spies—one from each tribe—to explore Canaan. After forty days, they return with a huge cluster of grapes. Ten spies report: the land is good but the inhabitants are giants; "we seemed like grasshoppers." Caleb and Joshua dissent: "We can certainly do it—the LORD is with us." The people side with the ten.',
    keyThemes: ['Exploring the promise', 'Faith versus fear', 'Giant obstacles', 'Minority report of faith'],
    christConnection: 'The promised land flowing with milk and honey pictures heaven\'s blessings. Faith sees God\'s power; unbelief sees only obstacles. Christ leads us to enter God\'s rest.',
  },
  {
    bookId: 'numbers',
    chapter: 14,
    title: 'The People Rebel',
    summary: 'The people weep all night, wishing they had died in Egypt. They propose returning and nearly stone Joshua and Caleb. God\'s glory appears; He threatens to destroy Israel. Moses intercedes, and God pardons but decrees: this generation will not enter the land—they will wander forty years until all adults die in the wilderness. Only Joshua and Caleb will enter. The ten spies die by plague. The people presumptuously attack Canaan and are defeated.',
    keyThemes: ['Unbelief rejects God\'s promise', 'Intercession wins pardon', 'Forty years of wandering', 'Presumption fails'],
    christConnection: 'Unbelief kept a generation from rest. Hebrews warns believers not to harden hearts but to enter God\'s rest through faith in Christ.',
  },
  {
    bookId: 'numbers',
    chapter: 15,
    title: 'Laws for Offerings; Sabbath-breaker; Tassels',
    summary: '"When you come into the land"—laws for grain and drink offerings accompanying sacrifices. The same law applies to native and foreigner. Unintentional sin requires a sin offering; defiant sin brings being "cut off." A man gathering wood on the Sabbath is stoned. The people must wear tassels with blue cords to remember God\'s commands.',
    keyThemes: ['Offerings in the promised land', 'Equal treatment of foreigners', 'Presumptuous sin punished', 'Visual reminders of the law'],
    christConnection: 'The tassels remind Israel of God\'s commands. The woman with the issue of blood touched Christ\'s tassel—the law leads us to Him.',
  },
  {
    bookId: 'numbers',
    chapter: 16,
    title: 'Korah\'s Rebellion',
    summary: 'Korah, Dathan, Abiram, and 250 leaders rebel, challenging Moses and Aaron\'s authority. Moses proposes a test: offer incense, and the LORD will show whom He has chosen. The next day, the earth opens and swallows Korah, Dathan, Abiram, and their households. Fire consumes the 250 incense offerers. The censers are hammered into altar covering as a warning.',
    keyThemes: ['Rebellion against God\'s leaders', 'Divine judgment', 'Earth swallows rebels', 'Warning to future generations'],
    christConnection: 'Challenging God\'s appointed mediator brings death. Christ alone is our high priest; any other way to God is rebellion.',
  },
  {
    bookId: 'numbers',
    chapter: 17,
    title: 'Aaron\'s Staff Buds',
    summary: 'After Korah\'s rebellion, God commands each tribe to bring a staff with the leader\'s name. Aaron\'s staff represents Levi. Overnight, only Aaron\'s staff buds, blossoms, and produces almonds. God commands it kept before the ark as a sign against rebels. The people fear that coming near the tabernacle means death.',
    keyThemes: ['Confirmation of Aaron\'s priesthood', 'Life from dead wood', 'Sign against rebellion', 'Approaching God is dangerous'],
    christConnection: 'Aaron\'s rod bringing forth life from death pictures resurrection. Christ, risen from the dead, is confirmed as our eternal high priest.',
  },
  {
    bookId: 'numbers',
    chapter: 18,
    title: 'Duties and Provisions for Priests and Levites',
    summary: 'Aaron\'s family bears the guilt for sanctuary violations; the Levites assist but must not approach the most holy things. The priests receive portions from offerings: grain, sin, and guilt offerings; the firstfruits; devoted things; firstborn of animals (or redemption money). The Levites receive all the tithes for their service and have no inheritance in the land.',
    keyThemes: ['Priestly responsibility', 'Levites as assistants', 'Provision for those who serve', 'No land inheritance—the LORD is their portion'],
    christConnection: 'The LORD is the Levites\' inheritance. Christ is the believer\'s ultimate inheritance, and those who serve Him are provided for by His people.',
  },
  {
    bookId: 'numbers',
    chapter: 19,
    title: 'The Red Heifer',
    summary: 'A red heifer without defect is slaughtered outside the camp and completely burned with cedar, hyssop, and scarlet. The ashes are used to make "water of purification" for cleansing from corpse-contamination. Those who touch a dead body are unclean seven days; sprinkling on the third and seventh days purifies them. Failing to be purified defiles the sanctuary.',
    keyThemes: ['Purification from death', 'Ashes for cleansing', 'Third and seventh day sprinkling', 'Contamination from death'],
    christConnection: 'The red heifer\'s ashes purify from death\'s defilement. Christ, sacrificed outside the camp, provides once-for-all cleansing from death\'s power.',
  },
  {
    bookId: 'numbers',
    chapter: 20,
    title: 'Water from the Rock; Deaths of Miriam and Aaron',
    summary: 'Miriam dies at Kadesh. Again there is no water; the people quarrel with Moses. God tells Moses to speak to the rock. Instead, Moses strikes it twice, saying "Shall we bring water?" Water flows, but God tells Moses and Aaron they will not enter the land because they did not honor Him as holy. Edom refuses Israel passage. Aaron dies on Mount Hor; Eleazar becomes high priest.',
    keyThemes: ['End of an era—Miriam and Aaron die', 'Moses\' sin at Meribah', 'Exclusion from the land', 'Succession of priesthood'],
    christConnection: 'The rock was struck once at Horeb (Christ smitten once for sins). Now Moses was to speak—but striking it again dishonored the once-for-all nature of Christ\'s sacrifice.',
  },
  {
    bookId: 'numbers',
    chapter: 21,
    title: 'The Bronze Serpent',
    summary: 'Israel defeats Arad. Traveling around Edom, the people complain again about food and water. God sends venomous snakes; many die. The people confess sin and ask Moses to intercede. God commands a bronze serpent on a pole—anyone bitten who looks at it will live. Israel journeys on, sings at the well Beer, and defeats Sihon of the Amorites and Og of Bashan.',
    keyThemes: ['Complaining brings judgment', 'Healing through looking', 'Bronze serpent on a pole', 'Victories over enemies'],
    christConnection: 'Jesus explicitly connects the bronze serpent to His crucifixion (John 3:14-15). As looking at the serpent brought life, so looking to Christ on the cross brings eternal life.',
  },
  {
    bookId: 'numbers',
    chapter: 22,
    title: 'Balaam and Balak',
    summary: 'Moab fears Israel. King Balak sends for Balaam the diviner to curse Israel. God tells Balaam not to go. Balak sends more prestigious messengers; God permits Balaam to go but only speak His words. On the way, Balaam\'s donkey sees the Angel of the LORD blocking the path and stops three times. God opens the donkey\'s mouth to rebuke Balaam. The Angel warns Balaam to speak only what God says.',
    keyThemes: ['Fear of Israel', 'Diviner for hire', 'Talking donkey', 'Warning from the Angel'],
    christConnection: 'The Angel of the LORD appears to stop Balaam\'s greed. God uses even a donkey to accomplish His purposes—no curse can stand against God\'s blessed people.',
  },
  {
    bookId: 'numbers',
    chapter: 23,
    title: 'Balaam\'s First Two Oracles',
    summary: 'Balak builds seven altars and offers sacrifices. Balaam speaks the word God gives: he cannot curse whom God has blessed—Israel is a people dwelling alone, not reckoned among the nations. Balak moves to another location. Again, Balaam blesses: God is not man that He should lie; He has blessed, and Balaam cannot reverse it. No divination works against Israel.',
    keyThemes: ['Blessing instead of curse', 'Israel set apart', 'God doesn\'t change His mind', 'Divination ineffective'],
    christConnection: 'Israel\'s blessing cannot be reversed—pointing to the security of God\'s people in Christ. No accusation can stand against those God has justified.',
  },
  {
    bookId: 'numbers',
    chapter: 24,
    title: 'Balaam\'s Third and Fourth Oracles',
    summary: 'From a third vantage point, Balaam sees Israel encamped by tribes. The Spirit comes on him; he prophesies Israel\'s beauty and power—blessed is everyone who blesses them, cursed who curses. Balak is furious. Balaam delivers a fourth oracle: a star and scepter will rise from Israel, crushing Moab. He prophesies against Amalek, Kenites, and Asshur.',
    keyThemes: ['Spirit-inspired prophecy', 'Star and scepter from Jacob', 'Blessing and cursing', 'Future victory'],
    christConnection: 'The "star out of Jacob" and "scepter from Israel" is messianic prophecy fulfilled in Christ—the King who crushes all enemies.',
  },
  {
    bookId: 'numbers',
    chapter: 25,
    title: 'Sin at Peor',
    summary: 'Israel commits sexual immorality with Moabite women and worships Baal of Peor. God\'s anger burns; a plague begins. Moses orders the guilty leaders killed. When an Israelite brings a Midianite woman into his tent, Phinehas kills them both with a spear. The plague stops at 24,000 dead. God grants Phinehas a covenant of perpetual priesthood for his zeal.',
    keyThemes: ['Sexual immorality and idolatry', 'Plague as judgment', 'Zeal for God\'s honor', 'Phinehas\' covenant'],
    christConnection: 'Phinehas\' zeal turned away God\'s wrath. Christ\'s zeal for His Father\'s house and His atoning death turn away wrath from all who believe.',
  },
  {
    bookId: 'numbers',
    chapter: 26,
    title: 'The Second Census',
    summary: 'After the plague, God commands a new census of the generation that will enter Canaan. The total is 601,730—slightly fewer than the first census. Of those counted at Sinai, only Joshua and Caleb remain. The land will be divided by lot according to tribal sizes. The Levites are numbered separately at 23,000.',
    keyThemes: ['New generation', 'Preparation to enter the land', 'Land distribution', 'Faithfulness of Joshua and Caleb'],
    christConnection: 'The unbelieving generation died; a new generation enters the promise. In Christ, the old self dies and the new creation inherits the kingdom.',
  },
  {
    bookId: 'numbers',
    chapter: 27,
    title: 'Zelophehad\'s Daughters; Joshua Commissioned',
    summary: 'Zelophehad\'s daughters—with no brothers—petition for their father\'s inheritance. God approves and establishes laws for inheritance when there are no sons. God tells Moses to view the Promised Land from Mount Abarim before his death. Moses asks for a successor. God commands him to lay hands on Joshua, commissioning him before Eleazar and all the congregation.',
    keyThemes: ['Women\'s inheritance rights', 'Moses excluded from the land', 'Succession to Joshua', 'Laying on of hands'],
    christConnection: 'Moses leads to the edge; Joshua (same name as Jesus) leads in. Moses represents the law; Joshua/Jesus brings God\'s people into their inheritance.',
  },
  {
    bookId: 'numbers',
    chapter: 28,
    title: 'Daily, Sabbath, and Monthly Offerings',
    summary: 'God reiterates the regular offerings: daily burnt offerings (two lambs), Sabbath burnt offerings (two additional lambs), new moon offerings (two bulls, one ram, seven lambs, with one goat for sin offering), and Passover and Unleavened Bread offerings (similar to new moon, daily for seven days).',
    keyThemes: ['Regular worship rhythm', 'Daily consecration', 'Sabbath distinction', 'Festival offerings'],
    christConnection: 'The continual offerings point to Christ\'s once-for-all sacrifice that covers all time—past, present, and future—and His perpetual intercession.',
  },
  {
    bookId: 'numbers',
    chapter: 29,
    title: 'Offerings for Fall Festivals',
    summary: 'Festival of Trumpets (first day of seventh month): special offerings with ram and lambs. Day of Atonement (tenth day): day of affliction with similar offerings. Festival of Tabernacles (fifteenth day): begins with thirteen bulls, decreasing daily to seven on the seventh day, plus rams, lambs, and goats. The eighth day has its own offerings.',
    keyThemes: ['Fall feast offerings', 'Trumpets for new year', 'Atonement day', 'Tabernacles celebration'],
    christConnection: 'The fall feasts anticipate Christ\'s return (Trumpets), final atonement (Day of Atonement), and eternal dwelling with God (Tabernacles).',
  },
  {
    bookId: 'numbers',
    chapter: 30,
    title: 'Vows and Obligations',
    summary: 'Laws about vows: when a man makes a vow, he must keep it. When an unmarried woman makes a vow, her father may annul it; otherwise it stands. When a married woman vows, her husband may annul it; his silence confirms it. A widow\'s or divorced woman\'s vow stands. The responsibility shifts based on authority structure.',
    keyThemes: ['Keeping vows', 'Authority in the household', 'Protecting dependent persons', 'Words have weight'],
    christConnection: 'God keeps His vows perfectly. Christ\'s "yes" is always yes—He fulfills every promise and enables believers to keep their word.',
  },
  {
    bookId: 'numbers',
    chapter: 31,
    title: 'Vengeance on Midian',
    summary: 'God commands Moses to take vengeance on Midian for the Peor incident before he dies. Twelve thousand warriors defeat Midian, killing the kings and Balaam. Moses is angry they spared the women who caused the sin. Captives and plunder are purified and divided between warriors and congregation. An offering is made from the spoil; remarkably, no Israelite died in battle.',
    keyThemes: ['Holy war', 'Judgment for seduction', 'Purification of plunder', 'Miraculous preservation'],
    christConnection: 'God judges those who led His people into sin. Christ will ultimately judge all who oppose His people, and not one of His own will be lost.',
  },
  {
    bookId: 'numbers',
    chapter: 32,
    title: 'Reuben and Gad Settle East of Jordan',
    summary: 'Reuben and Gad, with many livestock, request the good pastureland east of the Jordan. Moses fears they\'ll repeat the spies\' sin by discouraging others. They promise to cross armed and fight until all tribes have their inheritance. Moses agrees; they receive Transjordan but must fulfill their pledge. Half-tribe of Manasseh joins them.',
    keyThemes: ['Request for early inheritance', 'Fear of discouragement', 'Conditional agreement', 'Unity in conquest'],
    christConnection: 'The condition—"fight with your brothers first"—pictures the call to selfless service. Christ fought the ultimate battle before entering His rest and glory.',
  },
  {
    bookId: 'numbers',
    chapter: 33,
    title: 'Stages of the Journey',
    summary: 'Moses records the stages of Israel\'s journey from Rameses in Egypt through the wilderness—over forty stations are listed. God commands: when you cross into Canaan, drive out all inhabitants, destroy their images and high places. Failure to dispossess them will make the remaining people thorns in your eyes and stings in your sides.',
    keyThemes: ['Journey reviewed', 'God\'s faithfulness through stages', 'Complete dispossession required', 'Danger of compromise'],
    christConnection: 'The journey through the wilderness pictures the Christian life—many stages, led by God. Complete victory over sin is required; compromise brings lasting trouble.',
  },
  {
    bookId: 'numbers',
    chapter: 34,
    title: 'Boundaries of Canaan',
    summary: 'God describes the boundaries of the Promised Land: the southern border from the Salt Sea to the Brook of Egypt; the western border is the Mediterranean; the northern border runs from the sea to Mount Hor to Hamath; the eastern border follows the Jordan. Eleazar and Joshua will supervise the land division with a leader from each tribe.',
    keyThemes: ['Defined boundaries', 'Land as inheritance', 'Leadership for distribution', 'God\'s specific promises'],
    christConnection: 'God defines what He gives—not vague, but specific. Our inheritance in Christ is defined by His word, guaranteed by His Spirit.',
  },
  {
    bookId: 'numbers',
    chapter: 35,
    title: 'Cities for Levites and Cities of Refuge',
    summary: 'The Levites receive forty-eight cities with pasturelands from the other tribes. Six of these are cities of refuge where someone who kills accidentally can flee from the avenger of blood. The killer stays until the high priest\'s death. Murder requires the death penalty; ransom is forbidden. Bloodshed pollutes the land where God dwells.',
    keyThemes: ['Provision for Levites', 'Refuge for the manslayer', 'Distinction between murder and manslaughter', 'High priest\'s death brings release'],
    christConnection: 'The cities of refuge picture Christ—our refuge from condemnation. When our High Priest died, we were fully released from guilt and set free.',
  },
  {
    bookId: 'numbers',
    chapter: 36,
    title: 'Inheritance for Zelophehad\'s Daughters',
    summary: 'Leaders of Manasseh raise a concern: if Zelophehad\'s daughters marry outside the tribe, their inheritance transfers to another tribe at Jubilee. God commands that heiresses marry within their father\'s tribe to keep inheritance within tribes. Zelophehad\'s daughters marry their cousins. These are the commands God gave on the plains of Moab before entering Canaan.',
    keyThemes: ['Protecting tribal inheritance', 'Marriage within the tribe', 'Obedience of the daughters', 'Final commands before entry'],
    christConnection: 'Inheritance remains within the family. Believers are part of God\'s household, and our inheritance in Christ is secure, never transferred away.',
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// DEUTERONOMY (34 Chapters)
// ═══════════════════════════════════════════════════════════════════════════════

export const DEUTERONOMY_CHAPTERS: ChapterSummary[] = [
  {
    bookId: 'deuteronomy',
    chapter: 1,
    title: 'Moses Recounts Israel\'s Journey',
    summary: 'In the fortieth year, east of the Jordan, Moses addresses Israel. He recalls appointing leaders to help govern, the command to take the promised land, sending spies, and the people\'s refusal to enter due to fear. God swore that generation would not see the land, except Caleb and Joshua. Their attempt to fight without God led to defeat.',
    keyThemes: ['Recounting history', 'Leadership delegation', 'Consequences of unbelief', 'God\'s faithfulness despite failure'],
    christConnection: 'Moses reviews history so the new generation learns from the past. Christ also teaches His disciples from Scripture, showing how it all points to Him.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 2,
    title: 'Wanderings and Initial Conquests',
    summary: 'Moses recounts forty years of wandering, noting God\'s provision—they lacked nothing. God forbade attacking Edom (Esau\'s descendants), Moab (Lot\'s descendants), and Ammon. But when Sihon of Heshbon refused passage, God gave Israel victory. They destroyed his cities completely and took the land.',
    keyThemes: ['Long wilderness years', 'Divine provision', 'Respect for related nations', 'Victory over Sihon'],
    christConnection: 'God provided for forty years—clothes didn\'t wear out, feet didn\'t swell. Christ promises to provide all we need as we journey toward our inheritance.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 3,
    title: 'Defeat of Og; Land East of Jordan',
    summary: 'Israel defeats Og king of Bashan, taking sixty fortified cities. Og was the last of the Rephaim giants—his iron bed was enormous. The Transjordan land is given to Reuben, Gad, and half-Manasseh, with the condition they fight alongside their brothers. Moses pleads to enter Canaan, but God refuses—he may only see it from Pisgah. He charges Joshua to be strong.',
    keyThemes: ['Victory over giants', 'Transjordan settlement', 'Moses forbidden to enter', 'Joshua encouraged'],
    christConnection: 'Moses cannot enter because of sin at Meribah; Joshua will lead them in. The law cannot bring us to rest; only Jesus brings us into God\'s promises.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 4,
    title: 'Exhortation to Obey',
    summary: 'Moses urges Israel to keep God\'s statutes carefully—they saw no form at Sinai, only heard a voice, so they must make no idols. If they corrupt themselves, they will be scattered among the nations. But if they seek God with all their heart, they will find Him, for He is merciful. No nation has a god so near or laws so righteous.',
    keyThemes: ['Obedience brings life', 'No idols—God is spirit', 'Scattering and restoration', 'Incomparable God and law'],
    christConnection: 'No one saw God\'s form—but Christ is the image of the invisible God. He makes the unseen God known and brings the new covenant\'s righteousness.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 5,
    title: 'The Ten Commandments Repeated',
    summary: 'Moses recounts the covenant at Horeb: the Ten Commandments given from the fire. The people were terrified and asked Moses to mediate. God approved their fear and wished they would always have such hearts to obey. Moses alone approached; he received these commands to teach Israel in the land they are entering.',
    keyThemes: ['Covenant renewal', 'Ten Commandments restated', 'Healthy fear of God', 'Need for a mediator'],
    christConnection: 'The people needed a mediator—Moses. We need a greater Mediator—Christ—who approaches God on our behalf and gives us new hearts to obey.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 6,
    title: 'The Greatest Commandment',
    summary: '"Hear, O Israel: The LORD our God, the LORD is one. Love the LORD your God with all your heart and with all your soul and with all your might." These words must be on their hearts, taught to children, bound on hands and foreheads, written on doorposts. When prosperity comes, they must not forget the God who delivered them from Egypt.',
    keyThemes: ['The Shema', 'Wholehearted love for God', 'Teaching the next generation', 'Danger of prosperity'],
    christConnection: 'Jesus identifies this as the greatest commandment. He alone loves God perfectly and enables us through the Spirit to love God with undivided hearts.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 7,
    title: 'Chosen for Holiness',
    summary: 'When Israel enters Canaan, they must destroy the seven nations completely—no treaties, no intermarriage. God chose Israel not because of their greatness but because He loved them and kept His oath to the patriarchs. If they obey, God will bless them, remove diseases, and give victory. They must not fear larger nations—remember what God did to Egypt.',
    keyThemes: ['Total destruction of Canaanites', 'No intermarriage', 'Election by grace not merit', 'Victory over fear'],
    christConnection: 'Israel was chosen by grace, not works. God\'s election in Christ is the same—He loves us not because we are lovable but because He is love.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 8,
    title: 'Remember the LORD',
    summary: 'Remember the wilderness—God humbled and tested Israel, teaching them man does not live by bread alone but by every word from God\'s mouth. Their clothes didn\'t wear out; God disciplined them as a father. The good land has abundant water, grain, and minerals. When they are satisfied, they must not forget God or think their own power made them wealthy.',
    keyThemes: ['Testing and humbling', 'Living by God\'s word', 'Good land ahead', 'Danger of forgetting God'],
    christConnection: 'Jesus quotes "man shall not live by bread alone" when tempted. He is the Word by whom we truly live, and He never forgets the Father\'s will.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 9,
    title: 'Not Because of Righteousness',
    summary: 'Moses warns: the land is not given because of Israel\'s righteousness—they are stubborn. From Horeb onward, they provoked God: the golden calf, Taberah, Massah, Kibroth-hattaavah, Kadesh. Moses recounts interceding for forty days and nights, pleading God\'s reputation and covenant with the patriarchs. God relented because of Moses\' prayer, not Israel\'s merit.',
    keyThemes: ['Not by righteousness', 'Stubborn people', 'Pattern of rebellion', 'Effective intercession'],
    christConnection: 'Salvation is never by our righteousness. Christ\'s intercession, not our merit, secures our inheritance. He pleads His blood, not our works.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 10,
    title: 'New Tablets and What God Requires',
    summary: 'Moses recounts the new tablets and the ark. God set apart Levi for the ark and priestly service. Israel is called to fear the LORD, walk in His ways, love Him, serve with all heart and soul, keep His commands. God is Lord of heaven and earth, yet He loved the patriarchs and chose their descendants. Circumcise your hearts; love the sojourner.',
    keyThemes: ['New tablets', 'What God requires', 'Circumcise the heart', 'Love the foreigner'],
    christConnection: 'Circumcision of the heart—the inner transformation—is fulfilled by the Spirit in Christ. He makes us love God and neighbor as the law commands.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 11,
    title: 'Love and Obey',
    summary: 'Love the LORD and keep His requirements. This generation saw God\'s great deeds—Egypt, the Red Sea, the wilderness discipline. The promised land is not like Egypt with irrigation; it depends on rain God gives. If they obey, rain will come in season; if they worship other gods, the heavens will close. Teach children, bind the words as signs, write them on doorposts. Choose blessing or curse.',
    keyThemes: ['Love expressed in obedience', 'Land dependent on God\'s rain', 'Blessing and curse set before them', 'Teaching the next generation'],
    christConnection: 'The land depends on God\'s provision through rain—picturing how all spiritual life depends on grace from above. Christ is the living water from heaven.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 12,
    title: 'One Place of Worship',
    summary: 'Destroy all Canaanite worship sites—altars, pillars, Asherah poles. Don\'t worship the LORD that way. Seek the place the LORD will choose to put His name. There bring offerings and rejoice before God. Don\'t sacrifice wherever you please. You may slaughter meat locally, but blood must not be eaten. Be careful not to be ensnared by Canaanite practices.',
    keyThemes: ['Centralized worship', 'Destroy pagan sites', 'Rejoicing before God', 'Blood prohibition'],
    christConnection: 'The place God chose to put His name prefigures Christ, in whom we worship. Through Him alone we approach God—no other way.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 13,
    title: 'Warning Against Idolatry',
    summary: 'If a prophet performs signs but leads toward other gods, he must be executed. If a close relative entices secretly to idolatry, do not pity them—put them to death. If a city follows other gods, destroy it completely and never rebuild it. These tests prove whether Israel loves the LORD with all their heart.',
    keyThemes: ['False prophets', 'Family loyalty versus God\'s loyalty', 'City devoted to destruction', 'Testing of love'],
    christConnection: 'Loyalty to God must exceed all other loyalties. Christ calls disciples to love Him more than family, demonstrating the same absolute commitment.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 14,
    title: 'Clean and Unclean Food; Tithes',
    summary: 'Israel must not cut themselves or shave their heads for the dead—they are God\'s holy people. Clean and unclean animals are listed (as in Leviticus 11). Eat nothing found dead. Tithe all produce yearly; eat it before the LORD in the chosen place. Every third year, give the tithe locally for Levites, foreigners, widows, and orphans.',
    keyThemes: ['Holy people, holy practices', 'Clean and unclean animals', 'Annual tithe', 'Care for the vulnerable'],
    christConnection: 'Israel\'s distinction from the nations pictures the Church\'s holiness. Christ declared all foods clean; the principle shifts from dietary to moral purity.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 15,
    title: 'Sabbath Year and Generosity',
    summary: 'Every seventh year, debts are released among Israelites. There should be no poor if they obey—but since the poor will always exist, lend generously and don\'t harden your heart near the seventh year. Hebrew servants go free in the seventh year with generous provisions. Don\'t let him go empty-handed. Firstborn males of herds and flocks belong to the LORD.',
    keyThemes: ['Debt release', 'Generosity to the poor', 'Freeing servants', 'Firstborn belong to God'],
    christConnection: 'The Sabbath year brings release from debt—picturing the Jubilee Christ proclaims: freedom from sin\'s debt, release for the captives.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 16,
    title: 'The Three Annual Feasts',
    summary: 'Three times a year, all males must appear before the LORD at the chosen place: Passover and Unleavened Bread (remember Egypt), Feast of Weeks (firstfruits of harvest), and Feast of Tabernacles (after the ingathering). No one should appear empty-handed—give as God has blessed. Appoint judges and officials; pursue justice; set up no Asherah or pillar.',
    keyThemes: ['Three pilgrimage feasts', 'Remembering deliverance', 'Giving as blessed', 'Pursuing justice'],
    christConnection: 'The three feasts structure Israel\'s year around God\'s acts. Christ fulfills all three: our Passover, the firstfruits of resurrection, and the final ingathering.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 17,
    title: 'Justice, Priests, and Kings',
    summary: 'Don\'t sacrifice defective animals. Idolaters must be executed on two or three witnesses\' testimony, never on one. Difficult cases go to the Levitical priests at the chosen place; their verdict is final. When Israel wants a king, he must be chosen by God, must be an Israelite, must not multiply horses, wives, or wealth. He must write a copy of this law and read it daily.',
    keyThemes: ['Perfect sacrifices', 'Witnesses required', 'Central court', 'Limits on kingship'],
    christConnection: 'The ideal king reads and obeys God\'s law—Jesus is that King. He is the true Israelite king who perfectly obeyed and now reigns forever.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 18,
    title: 'Levites and the Prophet Like Moses',
    summary: 'The Levites have no land inheritance—the LORD is their portion. They eat from the offerings. Don\'t imitate Canaanite abominations: child sacrifice, divination, sorcery, mediums. God will raise up a prophet like Moses from among the brothers; listen to Him. A prophet whose words don\'t come true is not from God.',
    keyThemes: ['Levites\' portion', 'Prohibited occult practices', 'The Prophet like Moses', 'Testing prophecy'],
    christConnection: 'The "prophet like Moses" is Christ (Acts 3:22). He is the final Word from God—listen to Him. All God\'s speaking culminates in the Son.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 19,
    title: 'Cities of Refuge and Witnesses',
    summary: 'Set apart three cities of refuge in the land for unintentional killers. If the land expands, add three more. These protect from the avenger of blood. But a murderer must be handed over to die. Don\'t move boundary markers. A single witness is insufficient; two or three are required. False witnesses receive the punishment they intended for the accused.',
    keyThemes: ['Refuge from blood vengeance', 'Protection for innocent', 'Boundary integrity', 'Justice for false witnesses'],
    christConnection: 'Cities of refuge picture Christ, our refuge from condemnation. In Him, the accuser\'s charges are dismissed and the penalty falls on the false accuser.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 20,
    title: 'Laws of Warfare',
    summary: 'Before battle, the priest encourages: don\'t fear—the LORD goes with you. Officers dismiss those with new houses, vineyards, fiancées, or the fainthearted. Offer peace to distant cities; if refused, besiege them. But the seven Canaanite nations must be completely destroyed so they don\'t teach their abominations. Don\'t destroy fruit trees during siege.',
    keyThemes: ['Holy war principles', 'Encouragement against fear', 'Exemptions from battle', 'Total destruction of Canaanites'],
    christConnection: 'God fights for His people—ultimately fulfilled in Christ who conquered sin, death, and Satan. Believers are called to spiritual warfare, equipped by God.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 21,
    title: 'Various Laws',
    summary: 'Unsolved murders: the nearest city\'s elders break a heifer\'s neck and wash their hands, declaring innocence. A captive woman may be married after a month\'s mourning; if divorced, she goes free. A firstborn\'s rights cannot be transferred to a favored wife\'s son. A rebellious, disobedient son may be stoned by the city. A hanged person is cursed by God; bury the body that day.',
    keyThemes: ['Bloodguilt and atonement', 'Captive women\'s rights', 'Firstborn rights', 'Cursed is the hanged'],
    christConnection: '"Cursed is everyone who is hanged on a tree" (Gal 3:13). Christ became a curse for us, bearing our sin on the cross to redeem us from the law\'s curse.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 22,
    title: 'Various Laws on Property and Purity',
    summary: 'Help a neighbor\'s straying animal; don\'t ignore it. Men and women must not wear each other\'s clothing. Don\'t take a mother bird with her eggs. Build parapets on roofs. Don\'t mix different seeds, plow with ox and donkey together, or wear mixed fibers. Tassels on garment corners. Laws about accusations against a bride\'s virginity and various sexual violations.',
    keyThemes: ['Care for neighbor\'s property', 'Distinction and boundaries', 'Protection of the vulnerable', 'Sexual purity'],
    christConnection: 'These laws teach respect for order, distinction, and purity—principles fulfilled in the moral order Christ restores in hearts and communities.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 23,
    title: 'Those Excluded and Included; Miscellaneous Laws',
    summary: 'Certain people are excluded from the assembly: those with genital mutilation, those born of forbidden unions, Ammonites and Moabites (to the tenth generation). But Edomites and Egyptians may enter in the third generation. Keep the camp clean; God walks among you. Protect escaped slaves. No cult prostitution. No charging interest to brothers. Keep your vows.',
    keyThemes: ['Assembly membership', 'Camp holiness', 'Protecting the vulnerable', 'Honest dealings'],
    christConnection: 'In Christ, all barriers to assembly are broken. The eunuch and foreigner are welcomed (Isa 56; Acts 8). God dwells among a holy people.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 24,
    title: 'Laws Protecting the Vulnerable',
    summary: 'Divorce requires a certificate; a divorced and remarried woman cannot return to her first husband. A new husband is exempt from military duty for a year. Don\'t take a millstone as pledge—it\'s someone\'s livelihood. Kidnapping is a capital crime. Follow instructions about skin diseases. Don\'t oppress hired workers or delay wages. Don\'t punish children for parents\' sins. Leave gleanings for foreigners, orphans, and widows.',
    keyThemes: ['Divorce regulations', 'Protecting workers', 'Individual responsibility', 'Care for the marginalized'],
    christConnection: 'Jesus addresses divorce, upholding marriage\'s sanctity. The gleaning laws show God\'s heart for the vulnerable—Christ is the ultimate provider for the poor.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 25,
    title: 'Various Laws and Amalek',
    summary: 'Flogging is limited to forty stripes to preserve dignity. Don\'t muzzle an ox while it treads grain. The brother-in-law must marry a childless widow (levirate marriage) to raise up offspring for the deceased; refusal brings public shame. Use honest weights and measures. Remember Amalek\'s cowardly attack on Israel\'s stragglers; blot out their memory.',
    keyThemes: ['Limits on punishment', 'Worker deserves food', 'Levirate marriage', 'Honest business practices'],
    christConnection: 'Paul applies the ox law to ministers deserving support (1 Cor 9:9). Christ is our kinsman-redeemer who raises us up from death\'s childlessness.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 26,
    title: 'Firstfruits and Tithes Confessions',
    summary: 'When you enter the land, bring firstfruits to the chosen place. Confess: "My father was a wandering Aramean; he went to Egypt, became a nation, was oppressed, and God brought us out and gave us this land." Place the basket before the altar and worship. In the third year, declare that you have given the tithe to the Levite, foreigner, orphan, and widow.',
    keyThemes: ['Firstfruits offering', 'Historical confession', 'Faithful tithing', 'Covenant commitment'],
    christConnection: 'Christ is the firstfruits of resurrection (1 Cor 15:20). Our confession of God\'s saving acts centers on what God has done through Christ for us.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 27,
    title: 'The Altar on Ebal; Curses Pronounced',
    summary: 'When crossing the Jordan, set up plastered stones with the law written on them on Mount Ebal. Build an altar of uncut stones there. The Levites will declare twelve curses against secret sins: idolatry, dishonoring parents, moving boundaries, misleading the blind, injustice to vulnerable ones, incest, bestiality, murder, bribery, and not confirming this law. The people respond "Amen" to each.',
    keyThemes: ['Law written in stone', 'Altar on Ebal', 'Twelve curses', 'Corporate confession'],
    christConnection: 'The curses are for those who break the covenant. Christ bore every curse on the cross, becoming cursed so that the blessing of Abraham might come to us.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 28,
    title: 'Blessings and Curses',
    summary: 'If Israel obeys: blessings in city and country, offspring, crops, livestock, basket and bowl. Victory over enemies, reputation among nations, abundant prosperity. If they disobey: curses reversing every blessing. Diseases, drought, defeat, madness, oppression, exile. Foreign invasion, siege so severe they eat their own children. Scattering among the nations with no rest.',
    keyThemes: ['Comprehensive blessings', 'Escalating curses', 'Covenant consequences', 'Exile as ultimate judgment'],
    christConnection: 'The curses were fulfilled in Israel\'s exiles. Christ bore the curse of exile on the cross, dying outside the city, that we might receive every spiritual blessing.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 29,
    title: 'Covenant Renewal in Moab',
    summary: 'This is the covenant God commands Moses to make with Israel in Moab, besides the Sinai covenant. They saw Egypt\'s wonders but God hasn\'t yet given understanding hearts. They enter this covenant—all of them—so that no one thinks they can follow their heart\'s idols and escape. The secret things belong to the LORD; the revealed things are for obedience.',
    keyThemes: ['Second covenant', 'All included in covenant', 'No presumption of safety', 'Secret and revealed things'],
    christConnection: 'The need for understanding hearts that God alone gives points to the new covenant—Christ gives the Spirit who opens blind eyes and circumcises hearts.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 30,
    title: 'Restoration and the Choice of Life',
    summary: 'After the curses come and Israel is scattered, if they return to the LORD with all their heart, He will restore them, gather them, and bring them back. God will circumcise their hearts to love Him. The command is not too hard or far away—it\'s in your mouth and heart. Choose life by loving God, obeying His voice, and holding fast to Him.',
    keyThemes: ['Promise of restoration', 'Circumcised hearts', 'Command is near', 'Choose life or death'],
    christConnection: 'Paul applies "the word is near you" to faith in Christ (Rom 10:8). The circumcised heart is what the Spirit gives through union with Christ.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 31,
    title: 'Joshua Commissioned; The Song Written',
    summary: 'Moses, now 120 and unable to continue, publicly transfers leadership to Joshua. Be strong and courageous—God goes with you. Moses writes this law and gives it to the Levites to read every seven years. God tells Moses the people will rebel after his death. He commands Moses to write a song as witness against them and teach it to Israel.',
    keyThemes: ['Leadership transition', 'Be strong and courageous', 'Law read every seven years', 'Song as witness'],
    christConnection: 'Joshua receives the charge to lead—his name meaning "Yahweh saves." Jesus, with the same name, leads God\'s people into the true rest Joshua could only shadow.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 32,
    title: 'The Song of Moses',
    summary: 'Moses\' song testifies: God is the Rock, perfect and just; Israel is a crooked generation. God found Israel in the wilderness, carried them as an eagle, gave them abundance—but they grew fat and forsook Him. They provoked Him with false gods; He will provoke them with a foolish nation. Vengeance belongs to God; He will vindicate His people and atone for their land.',
    keyThemes: ['God the Rock', 'Israel\'s ingratitude', 'Provocation and judgment', 'Future vindication'],
    christConnection: 'Paul quotes this song: God makes Israel jealous through Gentiles (Rom 10:19). The Rock is Christ (1 Cor 10:4). God will avenge and vindicate His people.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 33,
    title: 'Moses Blesses the Tribes',
    summary: 'Before his death, Moses blesses each tribe. Reuben: may he live. Judah: bring him to his people. Levi: the faithful ones with Urim and Thummim who teach the law. Benjamin: beloved, dwells safely. Joseph: abundant blessing of heaven and earth. Zebulun and Issachar: prosperity. Gad: enlargement. Dan: lion\'s cub. Naphtali: satisfied. Asher: blessed and strong. There is none like the God of Jeshurun.',
    keyThemes: ['Blessing each tribe', 'Varied destinies', 'God of Jeshurun (the upright one)', 'Underneath are everlasting arms'],
    christConnection: 'These blessings anticipate each tribe\'s role in God\'s plan. Christ, from Judah, is the ultimate blessing through whom all tribes receive their inheritance.',
  },
  {
    bookId: 'deuteronomy',
    chapter: 34,
    title: 'The Death of Moses',
    summary: 'Moses climbs Mount Nebo, and the LORD shows him the whole promised land—he can see but not enter it. Moses dies there at 120; his eye was not dim nor his vigor gone. God buries him in Moab—no one knows his grave. Israel mourns thirty days. Joshua is filled with the spirit of wisdom. No prophet has arisen like Moses, who knew God face to face and did unmatched signs.',
    keyThemes: ['Viewing the promised land', 'Moses\' death and burial', 'Unknown grave', 'Joshua filled with wisdom'],
    christConnection: 'Moses saw the land but couldn\'t enter—the law brings us to the edge but cannot bring us in. Jesus, the Prophet greater than Moses, brings us fully into God\'s rest.',
  },
];

// ============================================
// HISTORICAL BOOKS
// ============================================

export const JOSHUA_CHAPTERS: ChapterSummary[] = [
  {
    bookId: 'joshua',
    chapter: 1,
    title: 'Joshua Commissioned',
    summary: 'After Moses\' death, the LORD speaks to Joshua: Moses is dead; now arise. Every place your foot treads is given to you—from the wilderness to Lebanon to the Euphrates. No one will stand against you; as I was with Moses, I will be with you. Be strong and courageous—do not be afraid or dismayed. Meditate on the law day and night that you may prosper. Joshua commands the officers to prepare to cross the Jordan in three days.',
    keyThemes: ['Divine commission', 'Be strong and courageous', 'Meditation on God\'s word', 'Promise of victory'],
    christConnection: 'Joshua (Yeshua) shares Jesus\' name. As Joshua leads Israel into the promised land, Jesus leads His people into the true rest that Joshua could only foreshadow.',
  },
  {
    bookId: 'joshua',
    chapter: 2,
    title: 'Rahab and the Spies',
    summary: 'Joshua secretly sends two spies to view Jericho. They lodge with Rahab the harlot. The king demands their surrender, but Rahab hides them and lies to the pursuers. She confesses: we heard how the LORD dried up the Red Sea; our hearts melted. The LORD your God is God in heaven above and on earth below. She asks mercy for her family. The spies promise safety if she ties a scarlet cord in her window and gathers her family inside.',
    keyThemes: ['Faith of an outsider', 'Confession of God\'s sovereignty', 'Scarlet cord', 'Promise of deliverance'],
    christConnection: 'Rahab the Gentile harlot is saved by faith and included in Christ\'s genealogy (Matt 1:5). The scarlet cord prefigures the blood of Christ that saves those under its protection.',
  },
  {
    bookId: 'joshua',
    chapter: 3,
    title: 'Crossing the Jordan',
    summary: 'Israel approaches the Jordan during harvest, when the river overflows. The priests carrying the ark lead; when their feet touch the water, the Jordan will stop flowing. As soon as the priests\' feet dip into the Jordan, the waters pile up in a heap far upstream. The priests stand in the middle of the dry riverbed while all Israel passes over. God exalts Joshua in Israel\'s sight as He did Moses.',
    keyThemes: ['Following the ark', 'Waters standing still', 'God exalts Joshua', 'Faith stepping into the water'],
    christConnection: 'The ark leads through the waters of judgment. Christ goes before His people through the waters of death, making a way for them to pass safely into the promised inheritance.',
  },
  {
    bookId: 'joshua',
    chapter: 4,
    title: 'Memorial Stones at Gilgal',
    summary: 'Twelve men take stones from the Jordan\'s middle where the priests stood. Joshua sets up twelve stones at Gilgal where they camp. When your children ask what these stones mean, tell them: Israel crossed this Jordan on dry ground. God dried up the Jordan as He dried up the Red Sea—so that all peoples may know God\'s hand is mighty, and you may fear the LORD forever. Israel crosses on the tenth day of the first month.',
    keyThemes: ['Memorial stones', 'Teaching future generations', 'God\'s mighty hand', 'All peoples shall know'],
    christConnection: 'The memorial stones teach God\'s faithfulness to future generations. Christians have the Lord\'s Supper as their memorial—"do this in remembrance of me."',
  },
  {
    bookId: 'joshua',
    chapter: 5,
    title: 'Circumcision at Gilgal; Passover',
    summary: 'The Canaanite kings hear of the crossing and their hearts melt. God commands Joshua to circumcise Israel—the wilderness generation had not been circumcised. This "rolls away the reproach of Egypt." They celebrate Passover on the plains of Jericho. The day after eating the land\'s produce, manna ceases. Joshua encounters the commander of the LORD\'s army with drawn sword—take off your sandals, this place is holy. Joshua falls on his face and worships.',
    keyThemes: ['Circumcision before conquest', 'Rolling away reproach', 'Manna ceases', 'Commander of the LORD\'s army'],
    christConnection: 'The Commander of the LORD\'s army is the preincarnate Christ, appearing with drawn sword before Jericho\'s conquest. He receives worship—something no angel permits.',
  },
  {
    bookId: 'joshua',
    chapter: 6,
    title: 'The Fall of Jericho',
    summary: 'Jericho is shut up tightly. The LORD gives Joshua strange battle plans: march around the city once daily for six days, priests carrying the ark with seven trumpets. On the seventh day, march seven times. When the trumpets sound a long blast, all the people shout—the walls will fall flat. Israel obeys exactly. On the seventh day, at the shout, the walls collapse. They devote the city to destruction, but save Rahab and her family. Joshua pronounces a curse on anyone who rebuilds Jericho.',
    keyThemes: ['Obedient faith', 'Unconventional battle', 'Walls falling', 'Devoted destruction', 'Rahab saved'],
    christConnection: 'Jericho fell not by military might but by obedient faith in God\'s promise. By faith the walls of Jericho fell (Heb 11:30). Rahab\'s salvation pictures Gentile inclusion through faith.',
  },
  {
    bookId: 'joshua',
    chapter: 7,
    title: 'Achan\'s Sin and Israel\'s Defeat',
    summary: 'Israel is unfaithful regarding devoted things—Achan took forbidden treasure. Unaware of this, Joshua sends men against Ai. They are routed; thirty-six die. Joshua tears his clothes and cries out to God. The LORD reveals: Israel has sinned, taken devoted things, lied, hidden them. They cannot stand before enemies until they deal with this. By lot, Achan is identified. He confesses taking a cloak, silver, and gold. He and all his household are stoned and burned at the Valley of Achor (Trouble).',
    keyThemes: ['Hidden sin affects the whole community', 'Defeat from disobedience', 'Divine revelation of sin', 'Severe judgment'],
    christConnection: 'One man\'s sin brought guilt on all Israel. The opposite is true in Christ—one Man\'s righteousness brings justification to all who believe.',
  },
  {
    bookId: 'joshua',
    chapter: 8,
    title: 'Victory at Ai; Covenant Renewal at Shechem',
    summary: 'After Achan\'s removal, God commands: take all the fighting men against Ai. This time you may take the spoil. Joshua sets an ambush behind the city. He draws out Ai\'s forces, then the ambush takes and burns the city. Ai\'s army is caught between two Israelite forces—total destruction. The king is hanged, his body placed under stones. Then Joshua builds an altar on Mount Ebal, writes the law on stones, and reads all Moses\' words to Israel—blessings and curses—with half the people facing Gerizim and half Ebal.',
    keyThemes: ['Renewed obedience brings victory', 'Military strategy with divine approval', 'Covenant renewal', 'Blessings and curses proclaimed'],
    christConnection: 'Joshua leads covenant renewal as Moses commanded. Christ is the mediator of a better covenant, ratifying it not with animal blood but His own.',
  },
  {
    bookId: 'joshua',
    chapter: 9,
    title: 'The Gibeonite Deception',
    summary: 'Canaanite kings unite against Israel, but the Gibeonites take a different approach—deception. They dress in worn clothes and bring stale provisions, claiming to come from a far country drawn by reports of what God did in Egypt. The leaders examine their provisions but do not ask counsel of the LORD. They make a covenant of peace. Three days later, Israel discovers these are neighbors from Gibeon. They cannot strike them because of the oath. The Gibeonites become perpetual woodcutters and water carriers for the altar.',
    keyThemes: ['Failure to seek God\'s counsel', 'Deception succeeds', 'Oath must be kept', 'Servitude as solution'],
    christConnection: 'Israel failed to seek the LORD. Christ always acted in perfect dependence on the Father, doing nothing on His own initiative but only what He saw the Father doing.',
  },
  {
    bookId: 'joshua',
    chapter: 10,
    title: 'The Sun Stands Still; Southern Campaign',
    summary: 'Five Amorite kings attack Gibeon for making peace with Israel. Gibeon calls for Joshua\'s help; he marches all night from Gilgal. God throws the enemies into confusion and hurls great hailstones—more die from hail than from the sword. Joshua prays: "Sun, stand still over Gibeon." The sun stops for about a full day—there was never a day like it, when the LORD fought for Israel. The five kings hide in a cave; Joshua seals them in, completes the rout, then executes the kings. He conquers the entire south.',
    keyThemes: ['God fights for Israel', 'Sun stands still', 'Cosmic intervention', 'Complete southern victory'],
    christConnection: 'The LORD fought for Israel, controlling creation itself. Christ stilled storms and walked on water—the One for whom all creation was made and by whom it is sustained.',
  },
  {
    bookId: 'joshua',
    chapter: 11,
    title: 'Northern Campaign; Summary of Conquest',
    summary: 'Jabin king of Hazor forms a vast northern coalition—as numerous as sand on the seashore, with horses and chariots. God tells Joshua: do not fear; tomorrow I will give all of them to Israel. Hamstring their horses, burn their chariots. Joshua strikes suddenly at the waters of Merom, pursuing until none remain. He burns Hazor and takes all cities. Joshua took the whole land as God commanded Moses, and the land had rest from war.',
    keyThemes: ['Fear not before vast armies', 'Sudden attack', 'Hamstringing horses—trusting God not military power', 'Land has rest'],
    christConnection: 'Joshua gave them rest, yet the true rest remained. Jesus says, "Come to me, and I will give you rest." He accomplishes what Joshua\'s rest only foreshadowed.',
  },
  {
    bookId: 'joshua',
    chapter: 12,
    title: 'List of Defeated Kings',
    summary: 'This chapter catalogs all the kings Israel defeated: two kings east of the Jordan under Moses (Sihon of the Amorites and Og of Bashan), and thirty-one kings west of the Jordan under Joshua. The list includes Jericho, Ai, Jerusalem, Hebron, Lachish, Hazor, and many others—from Lebanon to the Negev, from the Mediterranean to the Jordan Valley. Thirty-one kings in total fell before Israel.',
    keyThemes: ['Comprehensive victory', 'Fulfillment of promise', 'Kings conquered under Moses and Joshua', 'God gave the land'],
    christConnection: 'The defeated kings represent conquered powers. Christ has disarmed rulers and authorities, triumphing over them at the cross, leading captivity captive.',
  },
  {
    bookId: 'joshua',
    chapter: 13,
    title: 'Unconquered Land; Transjordan Allocation',
    summary: 'Joshua is now old. God says: much land remains to be possessed—Philistine territories, Lebanon regions, and more. Yet proceed to divide the land by inheritance. The chapter details the eastern territories already given by Moses: Reuben receives land from Aroer along the Arnon northward. Gad receives Gilead. Half of Manasseh receives Bashan. Levi receives no land inheritance—the LORD is their inheritance.',
    keyThemes: ['Much land remains', 'Division begins despite incomplete conquest', 'Eastern tribal allotments', 'Levi\'s inheritance is the LORD'],
    christConnection: 'Levi\'s inheritance was the LORD Himself. Christ is the believer\'s true inheritance—the portion and cup that fills us completely.',
  },
  {
    bookId: 'joshua',
    chapter: 14,
    title: 'Caleb\'s Inheritance',
    summary: 'The western inheritance is distributed by lot at Shiloh, by Eleazar the priest, Joshua, and the tribal heads. Caleb approaches Joshua, reminding him of God\'s promise through Moses forty-five years earlier: the land Caleb\'s foot walked would be his inheritance, because he wholly followed the LORD. Now eighty-five, Caleb is still strong. He asks for the hill country of Hebron—with its giants, the Anakim—confident the LORD will help him drive them out. Joshua blesses him and gives him Hebron.',
    keyThemes: ['Faith remembers God\'s promises', 'Wholly following the LORD', 'Old age with vigor', 'Claiming the difficult inheritance'],
    christConnection: 'Caleb wholly followed the LORD and received his inheritance. Those who follow Christ fully will receive the inheritance He has promised—eternal life in His kingdom.',
  },
  {
    bookId: 'joshua',
    chapter: 15,
    title: 'Judah\'s Inheritance',
    summary: 'Judah\'s territory is described in detail—from the wilderness of Zin in the south to the Mediterranean in the west, from the Dead Sea in the east to the northern boundary near Jerusalem. Caleb drives out the three Anakim giants from Hebron and conquers Debir. Othniel captures Kiriath-sepher and wins Caleb\'s daughter Achsah as wife. She requests springs of water, and Caleb gives her upper and lower springs. Judah could not drive out the Jebusites from Jerusalem, who remain there.',
    keyThemes: ['Largest tribal territory', 'Caleb conquers giants', 'Achsah requests blessing', 'Incomplete conquest of Jerusalem'],
    christConnection: 'The springs Achsah requested picture spiritual blessing. Christ gives living water—whoever drinks will never thirst again.',
  },
  {
    bookId: 'joshua',
    chapter: 16,
    title: 'Ephraim\'s Inheritance',
    summary: 'The allotment for Joseph\'s sons begins. The general southern boundary for Ephraim and Manasseh runs from the Jordan at Jericho through Bethel to the sea. Ephraim\'s specific territory lies between Manasseh (north) and Benjamin (south). The text notes that Ephraim did not drive out the Canaanites at Gezer—they remained as forced laborers.',
    keyThemes: ['Joseph\'s double portion through two tribes', 'Strategic central territory', 'Failure to complete conquest'],
    christConnection: 'Joseph\'s double portion through his sons pictures abundant blessing. In Christ, we receive grace upon grace—immeasurably more than we could ask or imagine.',
  },
  {
    bookId: 'joshua',
    chapter: 17,
    title: 'Manasseh\'s Inheritance',
    summary: 'Manasseh\'s territory is described—the firstborn of Joseph. Zelophehad\'s daughters claim their inheritance as Moses had commanded, receiving land among the male relatives. Manasseh receives land in the hill country but cannot drive out the Canaanites in the plains who have iron chariots. Joseph\'s tribes complain they need more land. Joshua replies: you are numerous and powerful; clear the forested hill country. Don\'t fear the Canaanites despite their iron chariots.',
    keyThemes: ['Daughters inherit', 'Incomplete conquest due to iron chariots', 'Joshua challenges to expand territory'],
    christConnection: 'Zelophehad\'s daughters receiving inheritance shows God\'s care for women\'s rights. In Christ there is neither male nor female—all are heirs according to promise.',
  },
  {
    bookId: 'joshua',
    chapter: 18,
    title: 'The Tabernacle at Shiloh; Remaining Tribes',
    summary: 'The whole congregation assembles at Shiloh and sets up the tent of meeting. Seven tribes still lack their inheritance. Joshua asks: how long will you wait to possess the land God gave you? He sends surveyors to divide the remaining land into seven portions. Benjamin\'s lot comes up first—their territory lies between Judah and Joseph, including Jerusalem and Jericho.',
    keyThemes: ['Central sanctuary at Shiloh', 'Joshua rebukes passivity', 'Systematic survey', 'Inheritance by lot'],
    christConnection: 'The tabernacle at Shiloh centered Israel\'s worship. Christ is the true tabernacle—God dwelling among us in human flesh.',
  },
  {
    bookId: 'joshua',
    chapter: 19,
    title: 'Remaining Tribal Inheritances',
    summary: 'The remaining six tribes receive their allotments: Simeon within Judah\'s territory (Judah\'s portion was too large). Zebulun in lower Galilee. Issachar south of the Sea of Galilee. Asher along the northwestern coast. Naphtali in upper Galilee. Dan near the Philistine coast—later they migrate north due to Amorite pressure. Finally, Israel gives Joshua his requested city, Timnath-serah in Ephraim. He builds it and settles there. The division by lot is completed at Shiloh.',
    keyThemes: ['All tribes receive inheritance', 'Simeon absorbed into Judah', 'Joshua receives last', 'Division complete'],
    christConnection: 'Joshua received his inheritance last, after all the people. Christ emptied Himself, taking the form of a servant, yet is now highly exalted.',
  },
  {
    bookId: 'joshua',
    chapter: 20,
    title: 'Cities of Refuge',
    summary: 'God commands designation of six cities of refuge, as Moses instructed. These provide asylum for anyone who kills another unintentionally. The manslayer flees there, stands at the gate, and states his case to the elders who admit him. He stays until the high priest\'s death, then may return home. Three cities west of Jordan: Kedesh, Shechem, Hebron. Three cities east: Bezer, Ramoth, Golan.',
    keyThemes: ['Protection for unintentional killers', 'Standing at the gate', 'Release at high priest\'s death', 'Strategic locations'],
    christConnection: 'The cities of refuge picture Christ, to whom sinners flee for safety. We are released not by the death of a high priest but by Christ our High Priest\'s death and resurrection.',
  },
  {
    bookId: 'joshua',
    chapter: 21,
    title: 'Levitical Cities',
    summary: 'The Levites approach at Shiloh to request their cities and pasturelands as Moses commanded. They receive forty-eight cities distributed throughout all tribal territories. The Kohathites (including Aaron\'s priestly line) receive twenty-three cities in Judah, Simeon, and Benjamin. Other Kohathites get ten cities in Ephraim, Dan, and Manasseh. Gershonites receive thirteen cities in the north. Merarites receive twelve cities. Not one word of God\'s good promises to Israel failed—all came to pass.',
    keyThemes: ['Levites distributed throughout Israel', 'Priests near the sanctuary', 'Forty-eight cities total', 'All God\'s promises fulfilled'],
    christConnection: 'Not one promise failed. In Christ, all God\'s promises are Yes and Amen. He is the guarantee that every divine promise will be fulfilled.',
  },
  {
    bookId: 'joshua',
    chapter: 22,
    title: 'The Eastern Tribes Return; The Altar Controversy',
    summary: 'Joshua blesses the eastern tribes who fought alongside their brothers and sends them home with their share of spoil. At the Jordan, they build a large altar. The western tribes assume apostasy and prepare for war. They send Phinehas and leaders to confront them: why this treachery? Remember Peor! Remember Achan! The eastern tribes explain: this altar is not for sacrifice but a witness—so future generations won\'t say you have no part in the LORD. Satisfied with this answer, the conflict is averted. The altar is named Witness.',
    keyThemes: ['Unity preserved', 'Zeal for pure worship', 'Communication resolves conflict', 'Altar as witness not worship'],
    christConnection: 'The eastern tribes wanted future generations to know they belonged to the LORD. We have a better witness—the Holy Spirit testifies with our spirit that we are God\'s children.',
  },
  {
    bookId: 'joshua',
    chapter: 23,
    title: 'Joshua\'s Farewell to Leaders',
    summary: 'When Joshua is old, he summons Israel\'s leaders. He reminds them: you have seen what the LORD did to the nations for your sake. He allotted remaining lands; He will push them out. Be very strong to keep Moses\' law—do not turn aside. Do not mix with remaining nations, marry their daughters, or serve their gods. Cling to the LORD as you have done. One of you puts a thousand to flight because God fights for you. But if you turn back and cling to these remnant peoples, God will no longer drive them out—they will become snares and whips until you perish from this good land.',
    keyThemes: ['Remember what God did', 'Be strong in obedience', 'No intermarriage with pagans', 'Blessings or curses'],
    christConnection: 'Joshua warns against turning back. The writer of Hebrews likewise warns: we are not of those who shrink back but of those who believe and preserve their souls.',
  },
  {
    bookId: 'joshua',
    chapter: 24,
    title: 'Covenant Renewal at Shechem; Joshua\'s Death',
    summary: 'Joshua gathers all tribes at Shechem for covenant renewal. He recounts God\'s acts: calling Abraham from beyond the Euphrates, multiplying his descendants, delivering from Egypt, giving victories. Therefore fear the LORD and serve Him in sincerity. Choose this day whom you will serve—the gods beyond the River or the gods of the Amorites. "As for me and my house, we will serve the LORD." The people affirm: we will serve the LORD! Joshua warns: you cannot serve Him—He is holy and jealous. They insist: we will serve. He makes a covenant, sets up a stone witness. Joshua dies at 110 and is buried in his inheritance. Joseph\'s bones are buried at Shechem. Eleazar the priest dies.',
    keyThemes: ['Historical recitation', 'Choose this day', 'Covenant witness', 'Deaths of Joshua, Eleazar'],
    christConnection: 'Joshua calls for decision: choose whom you will serve. Jesus likewise calls for decision—no one can serve two masters. As for me and my house, we will serve the LORD.',
  },
];

export const JUDGES_CHAPTERS: ChapterSummary[] = [
  {
    bookId: 'judges',
    chapter: 1,
    title: 'Incomplete Conquest',
    summary: 'After Joshua\'s death, Judah takes the lead in fighting Canaanites, capturing Jerusalem, Hebron, and other cities. Caleb\'s nephew Othniel captures Debir and wins Achsah. But the pattern of incomplete conquest dominates: Judah could not drive out those in the plain (iron chariots). Benjamin did not drive out the Jebusites. Manasseh, Ephraim, Zebulun, Asher, Naphtali, Dan—each failed to dispossess certain populations, instead putting them to forced labor when they grew strong.',
    keyThemes: ['Judah leads', 'Incomplete obedience', 'Iron chariots as excuse', 'Forced labor instead of expulsion'],
    christConnection: 'The half-hearted conquest led to compromise. Christ calls for complete surrender—whoever is not willing to forsake all cannot be His disciple.',
  },
  {
    bookId: 'judges',
    chapter: 2,
    title: 'The Angel at Bochim; The Cycle Begins',
    summary: 'The Angel of the LORD comes from Gilgal to Bochim with a rebuke: I brought you up from Egypt, swore to give this land, and said never to make covenants with inhabitants—but you disobeyed. Now I will not drive them out; they will be thorns, their gods a snare. The people weep (Bochim means "weeping"). The chapter recounts Joshua\'s death and the generation that knew not the LORD. Israel does evil, serves Baals, abandons God who delivered them. The recurring cycle is established: sin, oppression, cry out, judge/deliverer, rest, death of judge, return to sin.',
    keyThemes: ['Angel\'s rebuke', 'Generation that forgot', 'Abandoning the LORD for Baals', 'Cycle of judges introduced'],
    christConnection: 'Israel forgot what God had done. The Lord\'s Supper is given precisely to prevent this—"do this in remembrance of me," keeping Christ\'s work ever before us.',
  },
  {
    bookId: 'judges',
    chapter: 3,
    title: 'Othniel, Ehud, and Shamgar',
    summary: 'Nations remain to test Israel. Israel intermarries with Canaanites and serves their gods. First oppression: Cushan-rishathaim of Mesopotamia for eight years. The Spirit comes on Othniel; he delivers Israel—forty years of rest. After Othniel dies, Israel sins again. Second oppression: Eglon of Moab for eighteen years. Ehud the left-handed Benjaminite makes a concealed dagger, gains private audience with obese Eglon, stabs him so the fat closes over the blade, locks the doors, and escapes. Israel defeats Moab—eighty years of rest. Brief mention: Shamgar kills 600 Philistines with an oxgoad.',
    keyThemes: ['Testing through remaining nations', 'First three judges', 'Spirit empowerment', 'Left-handed assassination'],
    christConnection: 'The judges were temporary, imperfect deliverers. Christ is the final, perfect Judge and Savior who delivers not through violence but through sacrificing Himself.',
  },
  {
    bookId: 'judges',
    chapter: 4,
    title: 'Deborah and Barak; Jael Kills Sisera',
    summary: 'After Ehud dies, Israel sins again. Jabin king of Canaan oppresses Israel twenty years through his commander Sisera with 900 iron chariots. Deborah the prophetess judges Israel. She summons Barak: God commands you to take 10,000 men to Mount Tabor; He will draw out Sisera. Barak insists Deborah come with him—she agrees but prophesies the glory will go to a woman. In battle, the LORD routs Sisera\'s forces. Sisera flees on foot to Jael\'s tent (Kenite allies). She welcomes him, gives him milk, covers him. When he sleeps, she drives a tent peg through his temple.',
    keyThemes: ['Female judge and prophetess', 'Barak\'s conditional faith', 'Glory to a woman', 'Jael\'s decisive act'],
    christConnection: 'A woman crushed the enemy\'s head—echoing Genesis 3:15. Christ, born of a woman, crushes the serpent\'s head decisively and finally.',
  },
  {
    bookId: 'judges',
    chapter: 5,
    title: 'The Song of Deborah',
    summary: 'Deborah and Barak sing a victory song. Praise the LORD when leaders lead and people volunteer! The song recounts: kings came to fight, the stars from heaven fought against Sisera, the river Kishon swept them away. Curse Meroz for not helping the LORD! Blessed be Jael—she asked for water, gave him curled milk, then shattered his skull. Sisera\'s mother peers through the lattice wondering why his chariot delays. Her ladies imagine him dividing spoil and captive women. So perish all your enemies, O LORD! The land had rest forty years.',
    keyThemes: ['Victory song', 'Cosmic warfare', 'Blessing and cursing', 'Sisera\'s mother\'s tragic wait'],
    christConnection: 'The song celebrates God\'s victory through unlikely means. Christ\'s victory came through apparent defeat—the cross—confounding the wise and mighty.',
  },
  {
    bookId: 'judges',
    chapter: 6,
    title: 'Gideon\'s Call',
    summary: 'Israel sins again; Midian oppresses them seven years so severely they hide in caves and dens. Midianites swarm like locusts, consuming everything. Israel cries out. A prophet reminds them: God delivered you from Egypt, told you not to fear Canaanite gods—but you disobeyed. The Angel of the LORD appears to Gideon threshing wheat in a winepress (hiding from Midianites): "The LORD is with you, mighty warrior." Gideon questions: where are the wonders? Why this trouble? The LORD says: Go deliver Israel—I am sending you. Gideon asks for a sign; the Angel consumes his offering with fire. Gideon fears death from seeing God but is told: Peace, you will not die. He builds an altar. That night God commands: tear down your father\'s Baal altar, cut down the Asherah. Gideon obeys at night, fearing the townspeople. When discovered, his father Joash defends him: if Baal is god, let him contend for himself. The Spirit clothes Gideon; he summons troops. He tests God with the fleece—wet fleece/dry ground, then dry fleece/wet ground. God graciously complies.',
    keyThemes: ['Severe oppression', 'Angel of the LORD appears', 'Gideon\'s doubt and requests for signs', 'Tearing down idols', 'Fleece tests'],
    christConnection: 'The Angel of the LORD receives worship and promises peace—the preincarnate Christ. Unlike Gideon who hid in fear, Christ boldly confronted evil and accomplished our deliverance.',
  },
  {
    bookId: 'judges',
    chapter: 7,
    title: 'Gideon\'s 300 Defeat Midian',
    summary: 'Gideon\'s 32,000 troops camp by the spring of Harod. God says: too many—Israel might boast they saved themselves. Send home the fearful. 22,000 leave; 10,000 remain. Still too many. Test them at the water—those who lap water from their hands, set apart. Only 300 lap; the rest kneel to drink. God says: with these 300 I will save you. Gideon overhears a Midianite\'s dream: a barley loaf tumbles into camp and flattens a tent. The interpretation: God has given Midian to Gideon. He worships and returns. He divides the 300 into three companies with torches inside jars and trumpets. At night they surround the camp, break the jars, blow trumpets, shout: "A sword for the LORD and for Gideon!" The Midianites panic and turn on each other. Israel pursues.',
    keyThemes: ['Reduction to 300', 'No boasting in human strength', 'Unconventional warfare', 'Panic and self-destruction'],
    christConnection: 'God chose the few and weak to defeat the many and strong, that no flesh might boast. The cross looks like defeat but is God\'s wisdom and power.',
  },
  {
    bookId: 'judges',
    chapter: 8,
    title: 'Gideon\'s Victory and Failure',
    summary: 'Ephraim complains about not being called initially; Gideon diplomatically deflects. He pursues Zebah and Zalmunna, the Midianite kings, east of Jordan. Succoth and Penuel refuse his exhausted troops food—he promises punishment. After capturing the kings and learning they killed his brothers at Tabor, he executes them. He tears Succoth\'s leaders with thorns and pulls down Penuel\'s tower. Israel asks Gideon to rule as king. He refuses: "The LORD shall rule over you." But he asks for gold earrings from the plunder, makes an ephod, and sets it up at Ophrah. It becomes a snare—Israel prostitutes itself to it. Forty years of rest. Gideon dies with many wives and seventy sons, plus Abimelech by a Shechemite concubine. Israel returns to Baals.',
    keyThemes: ['Diplomatic wisdom', 'Punishing Succoth and Penuel', 'Refusing kingship', 'The ephod becomes an idol'],
    christConnection: 'Gideon rightly said the LORD should rule, but his ephod led Israel astray. Christ is both King and High Priest, whose righteousness never leads His people into sin.',
  },
  {
    bookId: 'judges',
    chapter: 9,
    title: 'Abimelech\'s Tyranny',
    summary: 'Abimelech, Gideon\'s son by a Shechemite concubine, persuades Shechem\'s lords: isn\'t one ruler better than seventy? They fund him; he hires worthless men and kills his brothers on one stone—except Jotham who hides. From Mount Gerizim, Jotham tells a fable: the trees sought a king. Olive, fig, and vine refuse—why leave productive work? Only the bramble accepts, offering shade and threatening fire. Jotham applies this to Abimelech and Shechem: if you acted with integrity, fine—if not, fire will consume both. He flees. After three years, God sends an evil spirit between Abimelech and Shechem. They ambush and kill travelers. Gaal challenges Abimelech but is defeated. Abimelech destroys Shechem, sows it with salt, and burns the tower. At Thebez, a woman drops a millstone on his head. Dying, he orders his armor-bearer to kill him lest they say a woman killed him. God repaid Abimelech\'s evil.',
    keyThemes: ['Fratricide for power', 'Jotham\'s fable', 'Divine retribution', 'Death by a woman\'s hand'],
    christConnection: 'Abimelech violently grasped for kingship and was destroyed. Christ did not grasp equality with God but humbled Himself—and was therefore exalted.',
  },
  {
    bookId: 'judges',
    chapter: 10,
    title: 'Tola, Jair, and Renewed Oppression',
    summary: 'After Abimelech, Tola judges Israel twenty-three years—little is recorded. Then Jair judges twenty-two years; he had thirty sons who rode thirty donkeys and controlled thirty cities. After Jair, Israel does evil again—serving Baals, Ashtoreths, and gods of Syria, Sidon, Moab, Ammon, and Philistia. God\'s anger burns; He sells them to Philistines and Ammonites who crush them eighteen years. Israel confesses: we have sinned! God initially refuses: go cry to the gods you chose. Israel persists, putting away foreign gods. His soul becomes impatient over Israel\'s misery. Ammon encamps; Israel gathers at Mizpah, seeking a leader.',
    keyThemes: ['Minor judges', 'Worship of many foreign gods', 'God\'s initial refusal', 'God\'s relenting compassion'],
    christConnection: 'Israel\'s persistent cry eventually moved God to compassion. Christ tells us to persist in prayer—the Father will answer those who cry to Him day and night.',
  },
  {
    bookId: 'judges',
    chapter: 11,
    title: 'Jephthah\'s Vow',
    summary: 'Jephthah, son of Gilead by a prostitute, is expelled by his half-brothers. He becomes a raider. When Ammon attacks, Gilead\'s elders seek him as commander. After negotiating his position, Jephthah sends messengers to Ammon\'s king, rehearsing history: Israel didn\'t take Moab\'s or Ammon\'s land but what God gave from the Amorites. The LORD is judge between us. The king ignores this. The Spirit comes on Jephthah. He vows: if God gives victory, whatever comes from my house to greet me will be the LORD\'s—offered as a burnt offering. He wins. His only daughter comes out dancing. Jephthah tears his clothes. She accepts her fate, requesting two months to bewail her virginity. He fulfills his vow. Israel commemorates her annually.',
    keyThemes: ['Outcast becomes leader', 'Historical argument for the land', 'Rash vow', 'Tragic fulfillment'],
    christConnection: 'Jephthah\'s rash vow brought tragedy. Christ\'s vow to the Father was perfect—He offered Himself as the sacrifice, accomplishing redemption without regret.',
  },
  {
    bookId: 'judges',
    chapter: 12,
    title: 'Ephraim\'s Quarrel; Minor Judges',
    summary: 'Ephraim again complains about not being summoned (as with Gideon). Jephthah says he did call but they didn\'t respond; he risked his life alone. Ephraim\'s insults escalate to battle. Gilead defeats Ephraim and seizes the Jordan fords. To identify fleeing Ephraimites, they ask for the pronunciation of "Shibboleth." Ephraimites say "Sibboleth"—42,000 are killed. Jephthah judges six years. Then three minor judges: Ibzan (seven years, many children), Elon (ten years), Abdon (eight years, forty sons and thirty grandsons on seventy donkeys).',
    keyThemes: ['Ephraim\'s pride', 'Shibboleth test', 'Civil war', 'Minor judges with large families'],
    christConnection: 'The Shibboleth test identified true Israelites by their speech. Jesus said, "You are of your father the devil"—our words reveal our hearts and our true Father.',
  },
  {
    bookId: 'judges',
    chapter: 13,
    title: 'Samson\'s Birth',
    summary: 'Israel does evil again; God gives them to Philistines forty years. An angel appears to Manoah\'s barren wife: you will conceive a son. Drink no wine, eat nothing unclean—he will be a Nazirite from the womb, beginning to deliver Israel. She tells Manoah; he prays for the man to return and teach them. The angel returns, repeating instructions. Manoah offers a goat; the angel ascends in the flame. Manoah fears death: we have seen God! His wife reasons: God wouldn\'t have shown us this or received our offering if He meant to kill us. The boy is born: Samson. The Spirit begins to stir him.',
    keyThemes: ['Barrenness and divine announcement', 'Nazirite from birth', 'Angel of the LORD', 'Spirit begins stirring'],
    christConnection: 'An angel announces a special birth to a barren woman. Christ\'s birth was announced similarly—but He came not merely to begin deliverance but to accomplish it fully.',
  },
  {
    bookId: 'judges',
    chapter: 14,
    title: 'Samson\'s Philistine Wife',
    summary: 'Samson sees a Philistine woman at Timnah and demands his parents get her as his wife. They protest: no Israelite woman? But this was from the LORD, seeking an occasion against the Philistines. On the way, a lion attacks; the Spirit empowers Samson to tear it apart. Later he finds bees and honey in the carcass. At the wedding feast, Samson poses a riddle: from the eater, something to eat; from the strong, something sweet. The thirty Philistine companions can\'t solve it. They threaten his wife: get the answer or we\'ll burn your family. She weeps and pesters him; he tells her. She tells them. Enraged, Samson kills thirty Philistines at Ashkelon for their garments. His wife is given to his companion.',
    keyThemes: ['Seeking Philistine wife', 'Lion and honey', 'Riddle and betrayal', 'Spirit empowerment for violence'],
    christConnection: 'From death came life—from the lion came honey. From Christ\'s death comes life and sweetness for all who believe.',
  },
  {
    bookId: 'judges',
    chapter: 15,
    title: 'Samson\'s Vengeance',
    summary: 'Samson returns to claim his wife but finds her given to another. Enraged, he catches 300 foxes, ties torches between their tails, and releases them into Philistine grain, vineyards, and olive groves. The Philistines burn his wife and father-in-law. Samson strikes them down ruthlessly. He hides in a cave. Judah sends 3,000 men: we\'ll bind you and hand you to the Philistines. He agrees if they won\'t kill him themselves. Bound, he\'s brought to the Philistines. The Spirit comes mightily; he breaks the ropes, finds a fresh donkey\'s jawbone, and kills 1,000 men. Parched, he cries to God who opens a spring. He judges Israel twenty years.',
    keyThemes: ['Fox torches', 'Escalating vengeance', 'Judah\'s cowardice', 'Jawbone of a donkey', 'God provides water'],
    christConnection: 'Samson fought alone, even betrayed by his own people. Christ was delivered by His own to enemies yet accomplished victory not through violence but through sacrifice.',
  },
  {
    bookId: 'judges',
    chapter: 16,
    title: 'Samson and Delilah; Death',
    summary: 'Samson visits a prostitute at Gaza; Philistines surround the city. He leaves at midnight, tearing off the gates. He loves Delilah. Philistine lords bribe her to learn his strength\'s secret. Three times she pesters him; three times he lies (fresh bowstrings, new ropes, weaving his hair). Finally, worn down, he reveals: if my head is shaved, I will become weak. She lulls him to sleep, has his hair shaved. The Philistines seize him; the LORD has departed. They gouge out his eyes, bind him with bronze, and set him grinding in prison. But his hair begins growing. At a great feast to Dagon, they bring out Samson for sport. He asks the boy leading him to position him between the pillars. He prays: O Lord GOD, remember me; strengthen me just this once. He pushes the pillars—the temple collapses, killing more Philistines in death than in his life.',
    keyThemes: ['Fatal attraction', 'Persistence wears down', 'Shaven head and departed strength', 'Final victory in death'],
    christConnection: 'Samson achieved his greatest victory in death. Christ, mocked and crucified, achieved the ultimate victory through His death, destroying sin and Satan.',
  },
  {
    bookId: 'judges',
    chapter: 17,
    title: 'Micah\'s Idol',
    summary: 'A man named Micah from Ephraim confesses stealing 1,100 pieces of silver from his mother. She had pronounced a curse, which she now blesses away. She dedicates the silver to the LORD by making a carved image and metal idol—a blatant contradiction. Micah sets up a shrine with ephod and household gods, installing one of his sons as priest. A young Levite from Bethlehem, wandering for a place, comes to Micah who hires him: be my father and priest, ten pieces of silver yearly plus provisions. Micah says: now I know the LORD will prosper me—I have a Levite as priest.',
    keyThemes: ['Syncretism and confusion', 'Idols dedicated to the LORD', 'Levite for hire', 'Superstition not faith'],
    christConnection: 'Micah thought hiring a Levite guaranteed God\'s blessing—treating God as manageable. Christ cannot be manipulated; He demands true worship in spirit and truth.',
  },
  {
    bookId: 'judges',
    chapter: 18,
    title: 'Dan Takes Micah\'s Idols',
    summary: 'Dan lacks territory and sends five spies north. They recognize Micah\'s Levite\'s voice at his shrine and seek an oracle: will our journey prosper? He says: go in peace—your way is before the LORD. They find Laish—a peaceful, unsuspecting, isolated people. Six hundred armed Danites march north. At Micah\'s house, they take his idols and ephod. When the priest protests, they invite him: come be priest to a whole tribe, not just one man. He goes willingly. Micah pursues but is outnumbered. Dan conquers Laish, burns it, and rebuilds as Dan. They set up Micah\'s idol; Jonathan son of Gershom, son of Moses, becomes their priest. The idolatry continues until the land\'s captivity.',
    keyThemes: ['Dan seeks territory', 'Stolen idols', 'Laish conquered', 'Moses\' grandson leads idolatry'],
    christConnection: 'The corruption traces to Moses\' own family. Even the best human lineage corrupts. Only Christ, the sinless Son, establishes an eternally righteous priesthood.',
  },
  {
    bookId: 'judges',
    chapter: 19,
    title: 'The Levite\'s Concubine',
    summary: 'In those days when there was no king in Israel: a Levite takes a concubine from Bethlehem. She leaves him and returns to her father\'s house. After four months, he goes to win her back. His father-in-law extends hospitality repeatedly, delaying departure. Finally leaving late, they avoid Jebusite Jerusalem and press on to Gibeah in Benjamin. No one offers hospitality until an old Ephraimite takes them in. Wicked men of the city surround the house demanding the Levite: bring him out so we may know him. The host offers his virgin daughter and the concubine instead—echoing Sodom. The Levite pushes his concubine outside. They abuse her all night. At dawn she collapses at the threshold. The Levite finds her, loads her on the donkey, goes home, cuts her body into twelve pieces, and sends them throughout Israel: has such a thing happened since Israel came from Egypt?',
    keyThemes: ['No king in Israel', 'Hospitality violated', 'Sodom-like depravity', 'Shocking summons to action'],
    christConnection: 'Israel had become like Sodom. Christ entered our Sodom—our depraved world—and took our shame and judgment on Himself to redeem us.',
  },
  {
    bookId: 'judges',
    chapter: 20,
    title: 'Civil War Against Benjamin',
    summary: 'All Israel gathers as one man at Mizpah—400,000 swordsmen. The Levite recounts the outrage. Israel demands: surrender the worthless men of Gibeah so we may execute them and purge evil. Benjamin refuses and musters 26,000 troops plus 700 elite left-handed slingers. Israel inquires of the LORD: who shall go up first? Judah. On day one, Benjamin kills 22,000 Israelites. Day two, 18,000 more. Israel weeps, fasts, and offers sacrifices. Phinehas the priest inquires: the LORD says go up, I will give them into your hand. On day three, Israel sets an ambush. Benjamin is drawn out; the ambush takes and burns Gibeah. Caught between two forces, 25,000 Benjaminites fall. Only 600 escape to the rock of Rimmon.',
    keyThemes: ['All Israel united against evil', 'Benjamin protects wickedness', 'Devastating losses before victory', 'Near extinction of a tribe'],
    christConnection: 'Sin must be purged even at great cost. Christ purges sin from His people not by destroying them but by bearing the judgment Himself.',
  },
  {
    bookId: 'judges',
    chapter: 21,
    title: 'Wives for Benjamin',
    summary: 'Israel had sworn not to give daughters to Benjamin. Now they grieve: a tribe is cut off! They discover Jabesh-gilead sent no one to the assembly. They strike Jabesh-gilead, killing all except 400 virgins who become wives for Benjamin. But 200 men lack wives. Solution: at the annual feast at Shiloh, Benjamin\'s men hide in vineyards. When Shiloh\'s daughters come to dance, each seizes one and takes her home. If fathers complain, Israel will say: we didn\'t give them—you didn\'t break your oath. This workaround preserves the oath\'s letter while violating its spirit. The book ends: in those days there was no king in Israel; everyone did what was right in his own eyes.',
    keyThemes: ['Mourning tribal near-extinction', 'Violent solution from Jabesh-gilead', 'Abduction at Shiloh', 'Everyone did what was right in his own eyes'],
    christConnection: 'Without a king, chaos reigned. Christ is the true King whose reign brings not chaos but peace, righteousness, and justice.',
  },
];

export const RUTH_CHAPTERS: ChapterSummary[] = [
  {
    bookId: 'ruth',
    chapter: 1,
    title: 'Naomi and Ruth',
    summary: 'During the judges, famine drives Elimelech, Naomi, and their sons from Bethlehem to Moab. Elimelech dies. The sons marry Moabite women: Orpah and Ruth. After ten years, both sons die. Naomi hears the LORD has visited Israel with food and decides to return. She urges her daughters-in-law to return to their mothers\' homes and find new husbands. Orpah kisses her goodbye, but Ruth clings to her: "Where you go I will go; your people shall be my people, and your God my God. Where you die I will die, and there will I be buried." Naomi sees Ruth\'s determination and stops urging. They arrive at Bethlehem during barley harvest. Naomi tells the women: call me not Naomi (pleasant) but Mara (bitter), for the Almighty has dealt bitterly with me.',
    keyThemes: ['Famine and death', 'Moabite daughter-in-law', 'Ruth\'s covenant loyalty', 'Bitterness and return'],
    christConnection: 'Ruth the Moabite forsakes her gods and clings to Naomi\'s God. She enters Christ\'s genealogy—a Gentile grafted into Israel, foreshadowing the Gentiles\' inclusion in Christ.',
  },
  {
    bookId: 'ruth',
    chapter: 2,
    title: 'Ruth Gleans in Boaz\'s Field',
    summary: 'Ruth asks to glean in the fields. She "happens" upon the field of Boaz, a relative of Elimelech, a worthy man of wealth. Boaz notices Ruth and inquires; he learns of her loyalty to Naomi. He shows her extraordinary kindness: stay with my young women, drink from what the servants draw, no one will touch you. At mealtime he invites her to eat with the reapers and dip bread in wine. He commands the workers: let her glean among the sheaves and deliberately leave handfuls for her. She returns to Naomi with an ephah of barley. Naomi exclaims: where did you work? Blessed be the man! She reveals Boaz is a redeemer—one of their close relatives who can restore the family.',
    keyThemes: ['Providence disguised as chance', 'Kindness beyond the law', 'Generous handfuls left', 'Kinsman-redeemer introduced'],
    christConnection: 'Boaz shows grace beyond obligation—leaving extra grain. Christ gives us not minimum salvation but abundance: grace upon grace.',
  },
  {
    bookId: 'ruth',
    chapter: 3,
    title: 'Ruth at the Threshing Floor',
    summary: 'Naomi instructs Ruth: wash, anoint yourself, put on your best clothes. Go to the threshing floor where Boaz winnows barley tonight. When he lies down, note the place, uncover his feet, and lie down—he will tell you what to do. Ruth obeys. At midnight Boaz awakens startled to find a woman at his feet. Who are you? "I am Ruth your servant. Spread your wings over me, for you are a redeemer." Boaz is moved: blessed are you! You have not gone after young men. I will redeem you—but there is a closer redeemer. Stay tonight; in the morning I will settle this. Before dawn she rises; he gives her six measures of barley for Naomi. She tells Naomi everything. Naomi counsels: wait, daughter; this man will not rest until he settles the matter today.',
    keyThemes: ['Bold initiative', 'Spreading the wing/garment', 'Closer redeemer complication', 'Boaz\'s integrity'],
    christConnection: 'Ruth asks Boaz to spread his garment over her—a proposal that he fulfill the redeemer role. Christ spreads His righteousness over His bride, the church.',
  },
  {
    bookId: 'ruth',
    chapter: 4,
    title: 'Boaz Redeems Ruth',
    summary: 'Boaz goes to the gate where legal matters are settled. The closer redeemer passes; Boaz summons him and ten elders as witnesses. He presents the case: Naomi is selling Elimelech\'s land. Will you redeem it? The man agrees. But Boaz adds: with the land comes Ruth the Moabite, to raise up the deceased\'s name on his inheritance. The man refuses—it would impair his own inheritance. He gives his sandal as testimony. Boaz announces: you are witnesses—I acquire all that was Elimelech\'s and Ruth as wife. The elders bless him: may the LORD make her like Rachel and Leah; may your house be like Perez whom Tamar bore to Judah. Boaz marries Ruth; she bears Obed. Naomi nurses him. The women say: blessed be the LORD who has not left you without a redeemer! The book ends with a genealogy: Perez to Hezron to Ram to Amminadab to Nahshon to Salmon to Boaz to Obed to Jesse to David.',
    keyThemes: ['Legal redemption at the gate', 'Sandal transaction', 'Ruth the Moabite becomes David\'s ancestor', 'God\'s providence in ordinary events'],
    christConnection: 'Boaz redeems land and bride, raising up offspring for the dead. Christ redeems His bride at the cost of His life, giving us an eternal inheritance.',
  },
];

export const FIRST_SAMUEL_CHAPTERS: ChapterSummary[] = [
  {
    bookId: '1-samuel',
    chapter: 1,
    title: 'Hannah\'s Prayer and Samuel\'s Birth',
    summary: 'Elkanah has two wives: Hannah (barren, beloved) and Peninnah (children, rival). Yearly they worship at Shiloh. Peninnah provokes Hannah bitterly for her barrenness. Hannah weeps and won\'t eat. In deep anguish, she prays silently, vowing: if You give me a son, I will give him to the LORD all his days as a Nazirite. Eli the priest sees her lips moving without sound and assumes she is drunk. She explains her distress. Eli blesses her: may God grant your petition. She eats and is sad no more. She conceives and bears a son: Samuel—"because I asked the LORD for him." After weaning him, she brings him to Shiloh to serve God all his life.',
    keyThemes: ['Barrenness and prayer', 'Vow to dedicate son', 'Misunderstood by religious leader', 'Faithful surrender'],
    christConnection: 'Hannah surrendered her son to God\'s service. Mary would likewise receive and surrender a greater Son—Jesus, given for the world\'s salvation.',
  },
  {
    bookId: '1-samuel',
    chapter: 2,
    title: 'Hannah\'s Song; Eli\'s Wicked Sons',
    summary: 'Hannah\'s song exalts God: my heart rejoices in the LORD; He raises the poor from the dust, lifts the needy. He guards the feet of His faithful ones. The adversaries of the LORD shall be shattered. She prophesies: He will give strength to His king and exalt His anointed. Meanwhile, Eli\'s sons Hophni and Phinehas are worthless—they abuse the sacrifices, taking meat by force, sleeping with women at the tabernacle entrance. Eli rebukes them weakly, but they don\'t listen. A man of God announces judgment: both sons will die on the same day. God will raise up a faithful priest whose house will endure.',
    keyThemes: ['Hannah\'s prophetic song', 'Reversal of fortunes', 'Eli\'s corrupt sons', 'Prophecy of judgment and faithful priest'],
    christConnection: 'Hannah prophesies about God\'s anointed King. Christ is the Anointed One whose kingdom is exalted and whose priesthood is forever faithful.',
  },
  {
    bookId: '1-samuel',
    chapter: 3,
    title: 'The LORD Calls Samuel',
    summary: 'The boy Samuel serves under Eli. The word of the LORD was rare; there were no frequent visions. One night the LORD calls: Samuel! Samuel runs to Eli, thinking he called. Three times this happens. Eli realizes the LORD is calling and instructs Samuel: say, "Speak, LORD, for your servant is listening." The LORD reveals judgment on Eli\'s house for the sin he knew about but did not restrain. In the morning, Eli presses Samuel to tell him everything. Eli accepts God\'s verdict. Samuel grows; the LORD is with him, letting none of his words fall to the ground. All Israel recognizes Samuel as a prophet.',
    keyThemes: ['Word of the LORD rare', 'Learning to hear God', 'Judgment on Eli\'s house', 'Samuel established as prophet'],
    christConnection: 'Samuel became the faithful prophet through whom God spoke. Christ is the Word made flesh—the ultimate revelation of God to humanity.',
  },
  {
    bookId: '1-samuel',
    chapter: 4,
    title: 'The Ark Captured; Eli Dies',
    summary: 'Israel fights the Philistines and loses 4,000 men. The elders ask: why did the LORD defeat us? Let us bring the ark from Shiloh! When the ark arrives, Israel shouts so loud the earth shakes. The Philistines fear: their gods have come! But they rally: be men! They defeat Israel, killing 30,000 including Hophni and Phinehas. The ark is captured. A messenger reaches Shiloh. When Eli hears the ark is taken, he falls backward, breaks his neck, and dies—ninety-eight years old, having judged Israel forty years. Phinehas\'s wife gives birth, names the child Ichabod ("no glory"): the glory has departed from Israel.',
    keyThemes: ['Treating the ark as magic', 'Devastating defeat', 'Hophni and Phinehas killed', 'Glory departed—Ichabod'],
    christConnection: 'The glory departed Israel. Yet in Christ, God\'s glory returned—the Word became flesh and we beheld His glory.',
  },
  {
    bookId: '1-samuel',
    chapter: 5,
    title: 'The Ark Among the Philistines',
    summary: 'The Philistines place the ark in Dagon\'s temple at Ashdod. The next morning, Dagon has fallen face down before the ark. They set him up again. The following morning, Dagon is fallen with his head and hands cut off on the threshold—only his trunk remains. God\'s hand is heavy against Ashdod with tumors and a plague of mice. The people demand: send the ark away! It goes to Gath—same affliction. Then to Ekron—the people cry out, fearing death. For seven months the ark wreaks havoc wherever it goes.',
    keyThemes: ['Dagon falls before the ark', 'Tumors and mice plague', 'City after city afflicted', 'God vindicates His honor'],
    christConnection: 'No false god can stand before the true God. At Christ\'s name, every knee will bow—every power and authority acknowledges His supremacy.',
  },
  {
    bookId: '1-samuel',
    chapter: 6,
    title: 'The Ark Returned',
    summary: 'After seven months, Philistines consult priests and diviners: how shall we return it? Send it with a guilt offering—five gold tumors, five gold mice (for the five lords). Put the ark on a new cart pulled by two milk cows whose calves are penned. If the cows go to Beth-shemesh (Israel), then the LORD did this; if not, it was chance. The cows go straight to Beth-shemesh, lowing but not turning aside. The Philistine lords watch, then return home. The people of Beth-shemesh rejoice and offer sacrifices. But some look into the ark—God strikes down seventy men. The people mourn: who can stand before this holy LORD God?',
    keyThemes: ['Guilt offering from Philistines', 'Test with milk cows', 'Spontaneous return', 'Deadly curiosity'],
    christConnection: 'The ark is holy and deadly to sinful presumption. Christ bore God\'s wrath so we could approach the Holy One without fear of death.',
  },
  {
    bookId: '1-samuel',
    chapter: 7,
    title: 'Samuel Leads Israel to Repentance',
    summary: 'The ark stays at Kiriath-jearim for twenty years. All Israel mourns after the LORD. Samuel calls the nation: if you are returning to the LORD with all your heart, put away foreign gods and Ashtaroth. Serve the LORD only, and He will deliver you from Philistines. They gather at Mizpah, fast, confess: we have sinned. Philistines attack during the assembly. Israel is terrified; they beg Samuel to pray. He offers a suckling lamb as a burnt offering. The LORD thunders against the Philistines, routing them. Samuel sets up a stone called Ebenezer: "Thus far the LORD has helped us." Philistines are subdued; peace with the Amorites. Samuel judges Israel all his days, traveling a circuit.',
    keyThemes: ['Twenty years longing', 'Put away foreign gods', 'Thunder from heaven', 'Ebenezer—stone of help'],
    christConnection: 'Ebenezer means "the LORD has helped us." Christ is our help—our Ebenezer—the One who has come to our aid with far greater deliverance.',
  },
  {
    bookId: '1-samuel',
    chapter: 8,
    title: 'Israel Demands a King',
    summary: 'When Samuel is old, he makes his sons judges, but they take bribes and pervert justice. Israel\'s elders demand: appoint us a king to judge us like all the nations. This displeases Samuel; he prays. The LORD says: listen to them—they have not rejected you but Me from being king over them. As they did from Egypt until now, forsaking Me and serving other gods, so they do to you. Warn them what a king will do: he will take your sons for his army, daughters for his service, best fields, a tenth of everything. You will cry out because of your king—but the LORD will not answer. The people insist: No! We want a king! The LORD tells Samuel: grant their request.',
    keyThemes: ['Samuel\'s corrupt sons', 'Desire to be like the nations', 'Rejection of God as King', 'Warning about royal taxation and conscription'],
    christConnection: 'Israel rejected God as King. Centuries later, before Pilate, they would cry: "We have no king but Caesar"—yet Christ is the King they truly need.',
  },
  {
    bookId: '1-samuel',
    chapter: 9,
    title: 'Saul Meets Samuel',
    summary: 'A Benjaminite named Kish has a son Saul—tall and handsome, head and shoulders above everyone. Kish\'s donkeys are lost; Saul searches for them with a servant. Near Zuph, the servant suggests consulting the local seer (Samuel). God had told Samuel: tomorrow I will send you a man from Benjamin; anoint him commander over Israel to save them from the Philistines. When Samuel sees Saul, the LORD says: this is the man. Samuel invites Saul to eat, gives him the honored seat, and the choice portion. He tells Saul: don\'t worry about the donkeys—they\'ve been found. And for whom is all that Israel desires? Is it not for you and your father\'s house?',
    keyThemes: ['Saul\'s impressive appearance', 'Lost donkeys', 'Divine appointment revealed', 'Prophetic hospitality'],
    christConnection: 'Saul was chosen for his outward appearance. God would later tell Samuel about David: "The LORD looks on the heart." Christ\'s kingdom is not about outward show but inner reality.',
  },
  {
    bookId: '1-samuel',
    chapter: 10,
    title: 'Saul Anointed and Proclaimed King',
    summary: 'Samuel pours oil on Saul\'s head and kisses him: the LORD has anointed you commander over His inheritance. He gives Saul signs: you will meet men near Rachel\'s tomb who will tell you the donkeys are found; at the oak of Tabor, men will give you bread; at Gibeah, you will meet prophets with music and instruments—the Spirit of the LORD will rush upon you and you will prophesy and be changed. All the signs come true. Saul prophesies among the prophets; people are astonished. Samuel summons Israel to Mizpah to choose a king by lot. The lot falls on Saul, but he is hiding among the baggage. They fetch him; Samuel presents him: See him whom the LORD has chosen! There is none like him! The people shout: Long live the king! Some worthless men despise him, but he holds his peace.',
    keyThemes: ['Anointing with oil', 'Signs fulfilled', 'Spirit rushes upon Saul', 'Hiding among the baggage'],
    christConnection: 'Saul was anointed king, but his reign would fail. Christ is the truly Anointed One (Messiah) whose reign never fails and whose Spirit transforms His people.',
  },
  {
    bookId: '1-samuel',
    chapter: 11,
    title: 'Saul Defeats the Ammonites',
    summary: 'Nahash the Ammonite besieges Jabesh-gilead. The people offer to serve him. He demands: I will gouge out all your right eyes as a disgrace on Israel. They ask for seven days to seek help. Messengers reach Gibeah. The people weep. Saul is coming from the field with oxen; hearing the news, the Spirit of God rushes upon him in anger. He cuts his oxen in pieces and sends them throughout Israel: whoever does not follow Saul and Samuel, so shall it be done to his oxen! 330,000 assemble. They attack at dawn and slaughter Ammonites until noon. The people want to execute those who questioned Saul\'s kingship; he refuses: no one shall be put to death today, for the LORD has given salvation. They renew the kingdom at Gilgal with rejoicing.',
    keyThemes: ['Ammonite threat', 'Spirit-empowered anger', 'Overwhelming response', 'Mercy after victory'],
    christConnection: 'Saul delivered Jabesh-gilead from disgrace and death. Christ delivers His people from far greater shame and eternal death.',
  },
  {
    bookId: '1-samuel',
    chapter: 12,
    title: 'Samuel\'s Farewell Address',
    summary: 'Samuel addresses all Israel: I have walked before you from youth to old age. Here I am—testify against me. Have I defrauded anyone? They affirm his integrity. Samuel recounts salvation history: Egypt, judges, deliverances. But you demanded a king. Here is your king—now fear and serve the LORD. If you and your king follow God, well. If not, His hand will be against you as against your fathers. To prove this word is from God, Samuel calls for thunder and rain during wheat harvest—terrifying for the season. The people fear: we have added to our sins by asking for a king! Samuel reassures: you have done evil, but don\'t turn away from the LORD. Serve Him with all your heart. Do not go after empty things. He will not forsake you. As for me, I will not stop praying for you.',
    keyThemes: ['Samuel\'s integrity', 'Historical recitation', 'Thunder as divine confirmation', 'Promise not to stop praying'],
    christConnection: 'Samuel pledged to keep praying for Israel. Christ lives to intercede for His people—His prayers never cease.',
  },
  {
    bookId: '1-samuel',
    chapter: 13,
    title: 'Saul\'s Unlawful Sacrifice',
    summary: 'Saul reigns two years over Israel. He keeps 3,000 men; the rest go home. Jonathan strikes a Philistine garrison; the Philistines muster massively—30,000 chariots, 6,000 horsemen, troops like sand. Israel hides in caves and trembles. Samuel told Saul to wait seven days at Gilgal for him to offer sacrifices. The people scatter; Saul panics. On the seventh day, just before Samuel arrives, Saul offers the burnt offering himself. Samuel arrives: what have you done? Saul makes excuses. Samuel pronounces: you have acted foolishly; you have not kept God\'s command. Your kingdom will not continue. The LORD has sought a man after His own heart. Samuel leaves. Saul counts only 600 men remaining. The Philistines send raiding parties in three directions. Israel has no iron weapons—only Saul and Jonathan have sword and spear.',
    keyThemes: ['Premature sacrifice', 'Excuses instead of repentance', 'Kingdom will not continue', 'Man after God\'s own heart sought'],
    christConnection: 'Saul intruded into the priestly role. Christ alone is the King who is also Priest—He rightly holds both offices as the Mediator between God and man.',
  },
  {
    bookId: '1-samuel',
    chapter: 14,
    title: 'Jonathan\'s Victory; Saul\'s Rash Oath',
    summary: 'Jonathan and his armor-bearer secretly approach the Philistine garrison: perhaps the LORD will work for us—nothing restrains Him from saving by many or few. They climb a steep cliff and strike down twenty men. Panic spreads through the Philistine camp; even the earth quakes. Saul\'s watchmen see the chaos. Discovering Jonathan is missing, Saul inquires of God but doesn\'t wait for an answer. Israel rallies; Hebrews in Philistine service defect; hidden Israelites emerge. God saves Israel that day. But Saul had sworn: cursed be anyone who eats before evening until I am avenged. The famished troops avoid food. Jonathan, unaware of the oath, eats honey. Saul learns and declares Jonathan must die. The people rescue Jonathan: he has saved Israel today! Saul fights enemies on every side throughout his reign but never defeats them decisively.',
    keyThemes: ['Faith stepping out', 'God saves by few', 'Rash vow endangers son', 'Incomplete victories'],
    christConnection: 'Jonathan\'s faith that God can save by few pictures Christ\'s victory through apparent weakness—one Man defeating all the powers of darkness.',
  },
  {
    bookId: '1-samuel',
    chapter: 15,
    title: 'Saul Rejected as King',
    summary: 'Samuel commissions Saul: the LORD sent me to anoint you. Now listen: attack Amalek and utterly destroy everything—men, women, children, animals. Saul attacks and wins but spares King Agag and the best livestock. The LORD tells Samuel: I regret making Saul king; he has turned back from following Me. Samuel grieves all night. In the morning, Saul claims: I have performed the LORD\'s command! Samuel asks: what then is this bleating of sheep? Saul blames the people, claiming the animals were for sacrifice. Samuel\'s thundering response: does the LORD delight in sacrifices as in obeying? To obey is better than sacrifice. Rebellion is as the sin of divination. Because you rejected the LORD\'s word, He has rejected you as king. Saul begs for honor before the elders. Samuel turns to leave; Saul grabs his robe, tearing it. Samuel: the LORD has torn the kingdom from you. He then executes Agag himself. Samuel and Saul never meet again, but Samuel grieves over Saul.',
    keyThemes: ['Total destruction commanded', 'Partial obedience is disobedience', 'Obey better than sacrifice', 'Kingdom torn away'],
    christConnection: 'Saul kept what should have been destroyed. Christ destroys sin completely—His work of redemption is total and thorough.',
  },
  {
    bookId: '1-samuel',
    chapter: 16,
    title: 'David Anointed; Enters Saul\'s Service',
    summary: 'The LORD tells Samuel: stop grieving over Saul—fill your horn with oil and go to Jesse of Bethlehem. I have provided Myself a king among his sons. Samuel fears Saul; God gives him a cover: take a heifer for sacrifice. At Bethlehem, Jesse presents his sons. Samuel sees Eliab\'s impressive appearance; God says: do not look on appearance or height—the LORD looks on the heart. Seven sons pass; none is chosen. Samuel asks: are all your sons here? The youngest is keeping sheep. They send for David—ruddy, with beautiful eyes, and handsome. The LORD says: arise, anoint him. Samuel anoints David among his brothers; the Spirit of the LORD rushes upon David from that day forward. Meanwhile, the Spirit departs from Saul; a harmful spirit torments him. His servants suggest music therapy. They find David, skillful with the lyre—whenever he plays, the evil spirit leaves Saul. Saul loves David and makes him his armor-bearer.',
    keyThemes: ['God looks on the heart', 'Anointing the shepherd boy', 'Spirit rushes upon David', 'Evil spirit torments Saul'],
    christConnection: 'David, the shepherd boy, is anointed as king. Christ, the Good Shepherd, is the Son of David who rules with a heart fully after God.',
  },
  {
    bookId: '1-samuel',
    chapter: 17,
    title: 'David and Goliath',
    summary: 'Philistines gather for battle; Israel faces them across a valley. Their champion Goliath—nine feet tall, armored in bronze—defies Israel: send a man to fight me. If he wins, we serve you; if I win, you serve us. Saul and Israel are dismayed. For forty days Goliath taunts them. David, sent to bring food to his brothers, hears Goliath\'s challenge and asks: who is this uncircumcised Philistine that he should defy the armies of the living God? His brothers are angry; Saul is told. David volunteers: I killed a lion and bear protecting my flock; the LORD will deliver me from this Philistine. He refuses Saul\'s armor. With staff, sling, and five smooth stones, he approaches Goliath who disdains him. David declares: you come with sword and spear; I come in the name of the LORD of hosts. This day the LORD will deliver you into my hand—all the earth will know there is a God in Israel! David slings a stone into Goliath\'s forehead; he falls. David cuts off his head with Goliath\'s own sword. The Philistines flee; Israel pursues.',
    keyThemes: ['Giant\'s defiance', 'Faith over armor', 'Battle belongs to the LORD', 'Victory with unlikely weapons'],
    christConnection: 'David defeats the enemy champion so that Israel\'s victory is won. Christ defeats Satan so that all who are in Him share His victory.',
  },
  {
    bookId: '1-samuel',
    chapter: 18,
    title: 'David and Jonathan; Saul\'s Jealousy',
    summary: 'Jonathan\'s soul is knit to David\'s; he loves him as himself. He makes a covenant with David, giving him his robe, armor, sword, bow, and belt. David succeeds wherever Saul sends him. But after the Philistine victory, women sing: Saul has slain his thousands, and David his ten thousands. Saul is enraged and eyes David suspiciously. A harmful spirit comes; Saul hurls his spear at David twice—he escapes both times. Saul fears David because the LORD is with him. He removes David from his presence, making him commander over a thousand. David succeeds in all his undertakings. Saul offers his daughter Merab but gives her to another. His daughter Michal loves David. Saul sets a bride price: 100 Philistine foreskins, hoping David will be killed. David brings 200. Saul gives Michal to David. Seeing the LORD is with David and that Michal loves him, Saul becomes David\'s enemy continually.',
    keyThemes: ['Jonathan\'s covenant love', 'Saul\'s jealousy', 'David\'s success', 'Attempts on David\'s life'],
    christConnection: 'Jonathan loved David and gave him everything. Christ calls us friends and has given us everything—His righteousness, His Spirit, His inheritance.',
  },
  {
    bookId: '1-samuel',
    chapter: 19,
    title: 'Saul\'s Attempts on David\'s Life',
    summary: 'Saul tells Jonathan and servants to kill David. Jonathan warns David and intercedes with Saul: David has not sinned against you; his deeds have benefited you greatly. Why sin against innocent blood? Saul swears: David shall not be put to death. Reconciliation is brief. War resumes; David defeats Philistines. The evil spirit returns; Saul hurls his spear while David plays—David escapes. Saul sends messengers to watch David\'s house and kill him in the morning. Michal warns David: if you don\'t escape tonight, you\'ll die tomorrow. She lets him down through a window, puts a household idol in the bed with goats\' hair at its head. When Saul\'s men come, she says David is sick. Saul sends them to bring David bed and all—they find the idol. Saul confronts Michal; she lies about being threatened. David flees to Samuel at Ramah. Saul sends messengers to capture David, but they prophesy when they encounter the prophets. Saul himself goes and also prophesies, stripping off his clothes and lying naked all day and night. Thus the saying: "Is Saul also among the prophets?"',
    keyThemes: ['Jonathan\'s intercession', 'Michal\'s deception', 'Escape through the window', 'Saul prophesies involuntarily'],
    christConnection: 'David was unjustly hunted by the king he faithfully served. Christ was rejected by His own people though He did nothing but good.',
  },
  {
    bookId: '1-samuel',
    chapter: 20,
    title: 'David and Jonathan\'s Covenant',
    summary: 'David flees to Jonathan: what have I done? Why does your father seek my life? Jonathan can\'t believe it; David insists: there is but a step between me and death. They devise a plan: David will hide during the new moon feast. If Saul misses him, Jonathan will say David asked to go to Bethlehem. If Saul responds peacefully, good. If he is angry, his intent is clear. Jonathan will shoot arrows and send a boy to retrieve them—the words spoken will signal danger or safety. Jonathan and David make a covenant: may the LORD be between you and me, between my descendants and yours forever. At the feast, Saul misses David. When Jonathan gives the excuse, Saul explodes: you side with David to your own shame! As long as David lives, your kingdom is never secure! Bring him—he deserves death! Jonathan asks why; Saul hurls his spear at his own son. Jonathan leaves in fierce anger. He signals David—danger. They weep together; David bows three times. Jonathan says: go in peace. The LORD be between you and me and our offspring forever.',
    keyThemes: ['Testing Saul\'s intentions', 'Arrow signal', 'Saul attacks his own son', 'Covenant for generations'],
    christConnection: 'Jonathan, the heir apparent, loved David and surrendered his claim. This self-denying love prefigures Christ, who did not grasp His privileges but emptied Himself.',
  },
  {
    bookId: '1-samuel',
    chapter: 21,
    title: 'David at Nob; Flees to Gath',
    summary: 'David comes alone to Ahimelech the priest at Nob. The priest trembles: why are you alone? David lies: the king sent me on a secret mission; my men will meet me. He asks for bread. Only holy bread is available—removed from before the LORD. Ahimelech gives it, provided the men have kept from women. David also asks for a weapon; the only one is Goliath\'s sword behind the ephod. David takes it: there is none like it. Doeg the Edomite, Saul\'s chief herdsman, is there observing. David flees to Achish king of Gath. Achish\'s servants recognize him as Israel\'s champion. Afraid, David pretends madness—scratching marks on doors, letting saliva run down his beard. Achish dismisses him: do I lack madmen?',
    keyThemes: ['Holy bread for necessity', 'Goliath\'s sword', 'Doeg observes', 'Feigned madness'],
    christConnection: 'Jesus cites this episode (Matt 12:3-4): human need takes precedence over ceremonial law. Christ is Lord of the Sabbath and all our needs.',
  },
  {
    bookId: '1-samuel',
    chapter: 22,
    title: 'The Cave of Adullam; Massacre of the Priests',
    summary: 'David escapes to the cave of Adullam. His family joins him along with everyone in distress, debt, or discontent—about 400 men; he becomes their captain. David takes his parents to Moab for safety. The prophet Gad tells David: don\'t stay in the stronghold; go to Judah. He settles in the forest of Hereth. Saul, under a tamarisk tree at Gibeah, complains to his Benjaminite servants: will the son of Jesse give you fields? Doeg reports: I saw David at Nob; Ahimelech inquired of God for him and gave him bread and sword. Saul summons Ahimelech and all the priests of Nob. Despite Ahimelech\'s honest defense, Saul commands their death. His guards refuse to strike the LORD\'s priests. Doeg kills 85 priests that day. Saul strikes Nob—men, women, children, infants, animals. Abiathar alone escapes and flees to David. David takes responsibility: I caused the death of all your father\'s house. Stay with me; you\'ll be safe.',
    keyThemes: ['Gathering of outcasts', 'Saul\'s paranoia', 'Doeg\'s massacre', 'Abiathar survives'],
    christConnection: 'David gathered the distressed, indebted, and discontented. Christ calls the weary and heavy-laden—come to Me, and I will give you rest.',
  },
  {
    bookId: '1-samuel',
    chapter: 23,
    title: 'David Rescues Keilah; Flees Saul',
    summary: 'Philistines attack Keilah and loot the threshing floors. David inquires of the LORD: shall I go attack them? Go—I will give them into your hand. His men are afraid—we\'re already in danger; how much more if we go to Keilah? David inquires again: same answer. He defeats the Philistines and saves Keilah. Saul hears David is in Keilah: God has delivered him—he\'s trapped in a city with gates! David learns Saul is coming. He inquires: will Keilah\'s citizens surrender me? They will. David and now 600 men leave. Jonathan comes to David in the wilderness and strengthens his hand in God: you will be king; I will be second. They make a covenant. Ziphites offer to betray David\'s location. Saul hunts him in the wilderness of Maon. Just as Saul closes in, a messenger reports: Philistines have invaded! Saul must abandon the pursuit.',
    keyThemes: ['Inquiring of the LORD', 'Keilah\'s betrayal potential', 'Jonathan strengthens David', 'Last-moment deliverance'],
    christConnection: 'Jonathan strengthened David\'s hand in God—true friendship points us to God. Christ is the friend who sticks closer than a brother, always turning us to the Father.',
  },
  {
    bookId: '1-samuel',
    chapter: 24,
    title: 'David Spares Saul at En-gedi',
    summary: 'After dealing with the Philistines, Saul resumes pursuing David with 3,000 men in the wilderness of En-gedi. He enters a cave to relieve himself—the very cave where David and his men hide in the recesses. David\'s men say: this is the day the LORD promised to deliver your enemy into your hand! David creeps forward and cuts off a corner of Saul\'s robe but is immediately stricken in conscience for even this against the LORD\'s anointed. He restrains his men from attacking. After Saul leaves, David emerges and calls out: my lord the king! He bows, shows the cut corner, and declares: I could have killed you but didn\'t. May the LORD judge between us; may He avenge me—but my hand will not be against you. Saul weeps: you are more righteous than I. You repaid my evil with good. I know you will be king. Swear you won\'t cut off my descendants. David swears. Saul goes home; David returns to the stronghold.',
    keyThemes: ['Opportunity to kill', 'Conscience stricken', 'The LORD\'s anointed untouchable', 'Saul\'s temporary repentance'],
    christConnection: 'David refused to harm God\'s anointed, leaving vengeance to God. Christ teaches: love your enemies, pray for those who persecute you.',
  },
  {
    bookId: '1-samuel',
    chapter: 25,
    title: 'Samuel Dies; Nabal and Abigail',
    summary: 'Samuel dies; all Israel mourns and buries him at Ramah. David moves to the wilderness of Paran. A wealthy man named Nabal (meaning "fool") has 3,000 sheep in Carmel. David\'s men protected his shepherds and ask for provisions during shearing—festival time. Nabal insults them: who is David? Many servants break away from masters nowadays! David arms 400 men to kill every male. A servant tells Nabal\'s wise wife Abigail; she quickly gathers abundant food, goes to meet David, and bows before him. She takes blame, asks him not to have bloodguilt by avenging himself. David blesses her for restraining him. She returns home to find Nabal drunk at a feast. In the morning, she tells him everything; his heart dies within him—he becomes like stone. Ten days later the LORD strikes him dead. David sends for Abigail; she becomes his wife. Saul had given Michal to another man.',
    keyThemes: ['Samuel\'s death', 'Nabal\'s foolishness', 'Abigail\'s wisdom and beauty', 'God avenges—not David'],
    christConnection: 'Abigail\'s intervention saved David from sinful vengeance. Christ intervenes for us—our Advocate who saves us from the consequences of our folly.',
  },
  {
    bookId: '1-samuel',
    chapter: 26,
    title: 'David Spares Saul Again',
    summary: 'Ziphites again inform Saul of David\'s location. Saul comes with 3,000 men. David scouts and sees Saul sleeping in the camp\'s center, Abner beside him. He asks who will go down with him; Abishai volunteers. They enter the camp at night—everyone is in deep sleep from the LORD. Abishai wants to pin Saul with his own spear—one thrust! David forbids it: who can stretch out his hand against the LORD\'s anointed and be guiltless? The LORD will strike him, or his day will come, or he\'ll die in battle. But my hand won\'t be against him. They take Saul\'s spear and water jug and leave. From a distant hill, David shouts to Abner: why didn\'t you guard your lord? See the spear and jug! Saul recognizes David\'s voice: I have sinned; I have played the fool. David returns the spear. Saul blesses David and predicts his success. They part; David thinks: I\'ll perish by Saul\'s hand someday; I\'d better escape to Philistia.',
    keyThemes: ['Deep sleep from the LORD', 'Refusing to harm the anointed', 'Saul acknowledges his folly', 'David\'s discouragement'],
    christConnection: 'Twice David spared Saul, entrusting judgment to God. Christ, reviled, did not revile in return but entrusted Himself to Him who judges justly.',
  },
  {
    bookId: '1-samuel',
    chapter: 27,
    title: 'David Among the Philistines',
    summary: 'David reasons: I\'ll perish by Saul someday; escape to Philistia is best—Saul will give up searching. He and his 600 men cross over to Achish king of Gath. When Saul hears, he stops pursuing. David asks Achish for a town; he receives Ziklag. David lives in Philistine territory sixteen months. He raids Geshurites, Girzites, and Amalekites (ancient inhabitants), killing all so none can report. He tells Achish he raided the Negeb of Judah and Israel\'s allies. Achish trusts him completely: David has made himself utterly hated by his people; he will be my servant forever.',
    keyThemes: ['Flight to Philistia', 'Deception and raids', 'Achish\'s trust', 'Survival by cunning'],
    christConnection: 'David\'s time in enemy territory shows how faith wavers under pressure. Christ faced every temptation yet never compromised or used deception.',
  },
  {
    bookId: '1-samuel',
    chapter: 28,
    title: 'Saul and the Witch of Endor',
    summary: 'Philistines gather to fight Israel at Shunem. Saul is afraid; his heart trembles greatly. He inquires of the LORD, but the LORD doesn\'t answer—not by dreams, not by Urim, not by prophets. Saul tells his servants: find me a woman who is a medium. They find one at Endor. Saul disguises himself and goes at night. He asks her to bring up Samuel. When Samuel appears, the woman screams—she realizes her visitor is Saul. Samuel asks: why have you disturbed me? Saul explains his desperation. Samuel\'s grim pronouncement: the LORD has become your enemy. He has torn the kingdom from you and given it to David because you didn\'t obey regarding Amalek. Tomorrow you and your sons will be with me; the LORD will give Israel into Philistine hands. Saul collapses in fear. The woman and servants urge him to eat; he finally does and departs into the night.',
    keyThemes: ['God\'s silence', 'Forbidden necromancy', 'Samuel appears', 'Doom pronounced'],
    christConnection: 'Saul sought answers through forbidden means when God was silent. In Christ, God has spoken His final word—we need no other revelation.',
  },
  {
    bookId: '1-samuel',
    chapter: 29,
    title: 'David Dismissed by Philistines',
    summary: 'Philistine armies gather at Aphek; Israel camps at Jezreel. As the Philistine lords review their troops, they notice David and his men with Achish. They demand: what are these Hebrews doing here? Achish vouches for David\'s loyalty—he\'s been with me for a year and I\'ve found no fault. The lords are furious: send him back! He mustn\'t go to battle—he could turn against us. Isn\'t this David of whom they sang "thousands and ten thousands"? Achish tells David: you\'ve been upright, but the lords don\'t approve. Return peacefully. David protests (perhaps playing his role): what have I done? Achish maintains his confidence but says: the lords have said no. Early the next morning, David and his men return to Philistia while the Philistines march to Jezreel.',
    keyThemes: ['Philistine suspicion', 'Providence protects David', 'Achish\'s confidence', 'Spared fighting against Israel'],
    christConnection: 'God providentially delivered David from fighting his own people. Christ never fights against His own—He is always for His people, never against them.',
  },
  {
    bookId: '1-samuel',
    chapter: 30,
    title: 'David Defeats the Amalekites',
    summary: 'David returns to Ziklag to find it burned—the Amalekites have raided, taking captive all the women and children including David\'s two wives. David and his men weep until they have no strength. The men speak of stoning David. But David strengthens himself in the LORD his God. He asks Abiathar the priest to bring the ephod: shall I pursue? You shall pursue; you shall overtake; you shall rescue. They march with 600 men, but 200 are too exhausted to cross the Brook Besor. An Egyptian slave, abandoned by Amalekites when he fell ill, leads them to the enemy. David attacks from twilight to evening; only 400 escape on camels. They recover everything—not one person missing. The 200 who stayed behind—some say they shouldn\'t share the spoil. David refuses: what the LORD gave us, we share equally. Those who guard the baggage share with those who fight. He makes this a statute. David sends portions of the spoil to the elders of Judah—his friends—throughout the south.',
    keyThemes: ['Ziklag destroyed', 'David strengthens himself in the LORD', 'Equal sharing of spoil', 'Generosity to Judah\'s elders'],
    christConnection: 'When everything was lost, David strengthened himself in the LORD. Christ, in Gethsemane, found strength from the Father and accomplished salvation.',
  },
  {
    bookId: '1-samuel',
    chapter: 31,
    title: 'Saul\'s Death',
    summary: 'The Philistines fight Israel at Mount Gilboa. Israel flees; many fall. The Philistines press hard on Saul and his sons, killing Jonathan, Abinadab, and Malchi-shua. Archers wound Saul badly. He begs his armor-bearer: draw your sword and kill me, lest these uncircumcised abuse me. The armor-bearer is too afraid. Saul falls on his own sword; his armor-bearer does likewise. So Saul, his three sons, and his armor-bearer die together that day. Israelites across the Jordan flee; Philistines occupy their cities. The next day, Philistines find Saul\'s body, cut off his head, strip his armor, and send messengers to proclaim victory. They put his armor in Ashtaroth\'s temple and fasten his body to the wall of Beth-shan. When Jabesh-gilead hears—the city Saul saved in chapter 11—valiant men travel all night, take down the bodies of Saul and his sons, burn them, bury the bones, and fast seven days.',
    keyThemes: ['Defeat at Gilboa', 'Jonathan dies with his father', 'Saul\'s suicide', 'Jabesh-gilead\'s loyalty'],
    christConnection: 'Saul\'s tragic end shows the wages of disobedience. Christ bore the curse of sin\'s wages on the cross so that those who trust Him never face such judgment.',
  },
];

export const SECOND_SAMUEL_CHAPTERS: ChapterSummary[] = [
  {
    bookId: '2-samuel',
    chapter: 1,
    title: 'David Learns of Saul\'s Death',
    summary: 'David returns to Ziklag after defeating Amalekites. On the third day, a young man arrives with torn clothes and dust on his head—from Saul\'s camp. He claims Saul, wounded by archers and about to be overtaken, asked him to kill him. So he did, bringing Saul\'s crown and armlet to David. David and his men tear their clothes, mourn, weep, and fast until evening for Saul, Jonathan, and Israel. David asks the messenger: were you not afraid to destroy the LORD\'s anointed? He orders the Amalekite executed for confessing to kill the anointed king. David composes a lament—the Song of the Bow: "How the mighty have fallen! Tell it not in Gath... Saul and Jonathan, beloved and lovely, swifter than eagles, stronger than lions... I am distressed for you, my brother Jonathan; your love was extraordinary, surpassing the love of women. How the mighty have fallen!"',
    keyThemes: ['News from Gilboa', 'Amalekite executed', 'Lament for Saul and Jonathan', 'The mighty have fallen'],
    christConnection: 'David mourned for his enemy Saul. Christ wept over Jerusalem that would reject Him—love for enemies even unto death.',
  },
  {
    bookId: '2-samuel',
    chapter: 2,
    title: 'David King over Judah; War with Israel',
    summary: 'David inquires of the LORD: shall I go up to a city of Judah? Go up to Hebron. David goes with his wives and men; Judah anoints him king over their tribe. He sends messengers to Jabesh-gilead, blessing them for burying Saul. But Abner, Saul\'s commander, makes Ishbosheth (Saul\'s remaining son) king over Israel. David reigns in Hebron seven years. Abner and Ishbosheth\'s servants meet Joab and David\'s servants at the pool of Gibeon—they sit facing each other. Abner proposes a representative combat; twelve from each side kill each other. General battle erupts; David\'s men prevail. Asahel, Joab\'s fast brother, pursues Abner relentlessly. Abner warns him repeatedly to turn aside. Finally, Abner thrusts backward with his spear, killing Asahel. Joab and Abishai pursue until sunset; Abner rallies his men on a hill and negotiates a truce. Joab\'s dead: 19 besides Asahel. Israel\'s dead: 360.',
    keyThemes: ['David king over Judah', 'Ishbosheth king over Israel', 'Civil war begins', 'Asahel killed by Abner'],
    christConnection: 'Israel was divided into rival kingdoms. Christ unites divided peoples—making one new man from Jew and Gentile, peace through His blood.',
  },
  {
    bookId: '2-samuel',
    chapter: 3,
    title: 'Abner Defects; Joab Murders Him',
    summary: 'The war drags on; David grows stronger while Saul\'s house weakens. Abner grows powerful in Ishbosheth\'s house. When Ishbosheth accuses Abner of taking Saul\'s concubine Rizpah, Abner is furious: I show loyalty to Saul\'s house and you accuse me? He vows to transfer the kingdom to David as the LORD swore. Abner sends messengers to David proposing a covenant. David requires: bring Michal my wife, whom I bought with 100 Philistine foreskins. Ishbosheth takes her from her weeping husband. Abner confers with Israel\'s elders and Benjamin: you\'ve long wanted David. Now bring it about! He meets David at Hebron; David makes a feast. Abner promises to gather all Israel to David. He departs in peace. But Joab returns, furious: why did you let Abner go? He recalls Abner without David\'s knowledge, takes him aside at the gate, and stabs him in the stomach—revenge for Asahel. David pronounces himself innocent; he curses Joab\'s house and mourns Abner publicly. All Israel understands it was not David\'s doing.',
    keyThemes: ['David growing stronger', 'Abner\'s defection', 'Michal returned', 'Joab\'s blood revenge'],
    christConnection: 'Joab\'s murder of Abner during peacetime was treacherous. Christ makes peace through the blood of His cross—no treachery, only self-sacrifice.',
  },
  {
    bookId: '2-samuel',
    chapter: 4,
    title: 'Ishbosheth Murdered',
    summary: 'When Ishbosheth hears Abner is dead, his courage fails; all Israel is dismayed. Two of his own captains, Rechab and Baanah, enter his house during the midday heat while he naps. They stab him in the stomach, behead him, and travel all night to David at Hebron. They present the head: behold the head of your enemy who sought your life! David responds: when someone told me Saul was dead, expecting reward, I executed him. How much more when wicked men kill a righteous man in his own house, on his bed! He orders their execution—hands and feet cut off, bodies hung by the pool at Hebron. Ishbosheth\'s head is buried in Abner\'s tomb. (A note mentions Jonathan\'s son Mephibosheth, five years old when news came from Jezreel; his nurse fled with him and he became lame in both feet.)',
    keyThemes: ['Ishbosheth assassinated', 'Assassins expect reward', 'David executes the murderers', 'Mephibosheth introduced'],
    christConnection: 'David refused to benefit from murder—even of an enemy. Christ\'s kingdom is not built on violence but on the sacrifice He Himself made.',
  },
  {
    bookId: '2-samuel',
    chapter: 5,
    title: 'David King over All Israel; Jerusalem Conquered',
    summary: 'All tribes come to David at Hebron: we are your bone and flesh. Even before, when Saul was king, you led Israel in battle. The LORD said: you shall shepherd my people. They anoint David king over all Israel. He was thirty when he became king; he reigned forty years—seven in Hebron, thirty-three in Jerusalem. David marches against Jerusalem, held by the Jebusites who mock: the blind and lame will turn you back! David captures the stronghold of Zion (City of David) by his men entering through the water shaft. He builds up the city. Hiram of Tyre sends cedar trees and craftsmen to build David\'s house. David knows the LORD has established him as king for His people Israel\'s sake. He takes more concubines and wives; more children are born. When Philistines hear David is king, they come seeking him. David inquires of the LORD both times—first attacking directly, then circling behind when he hears the sound of marching in the balsam trees. He strikes Philistines from Geba to Gezer.',
    keyThemes: ['All Israel anoints David', 'Jerusalem conquered', 'Hiram builds David\'s house', 'Philistines defeated twice'],
    christConnection: 'David took Zion and made it his city. Christ, Son of David, builds the new Jerusalem—a city whose builder and maker is God.',
  },
  {
    bookId: '2-samuel',
    chapter: 6,
    title: 'The Ark Brought to Jerusalem',
    summary: 'David gathers 30,000 chosen men to bring the ark from Baale-judah. They place it on a new cart, driven by Uzzah and Ahio. David and all Israel celebrate with singing and instruments. At the threshing floor of Nacon, the oxen stumble. Uzzah reaches out to steady the ark and God strikes him dead. David is angry, then afraid: how can the ark come to me? He leaves it at Obed-edom\'s house for three months—and Obed-edom is blessed. David is told and brings the ark with joy. Every six steps, he sacrifices. David dances before the LORD with all his might, wearing a linen ephod. The ark enters the city with shouting and trumpets. Michal sees David leaping and despises him in her heart. David blesses the people and distributes food. Michal confronts him: how glorious was the king today, uncovering himself! David defends his worship before the LORD who chose him over her father. Michal has no child to her death.',
    keyThemes: ['Uzzah struck dead', 'Ark blessed Obed-edom', 'David dances before the LORD', 'Michal\'s contempt'],
    christConnection: 'David\'s uninhibited worship before the ark pictures joyful abandon before God. In Christ, we approach God not with fear of death but with boldness and joy.',
  },
  {
    bookId: '2-samuel',
    chapter: 7,
    title: 'The Davidic Covenant',
    summary: 'David, now settled in his cedar house with peace on all sides, tells Nathan: I dwell in a cedar house while the ark dwells in a tent. Nathan initially approves, but that night the LORD speaks: you will not build Me a house, but I will build you a house. When your days are fulfilled and you rest with your fathers, I will raise up your offspring who will build a house for My name. I will establish his kingdom forever. I will be his Father; he will be My son. If he sins, I will discipline him, but My steadfast love will not depart as it did from Saul. Your house and kingdom shall be established forever. David sits before the LORD overwhelmed: who am I that You have brought me this far? And this was a small thing—You speak of my house\'s distant future! What more can David say? You know Your servant. You are God; Your words are true. Bless Your servant\'s house forever.',
    keyThemes: ['You won\'t build Me a house—I will build yours', 'Offspring with eternal kingdom', 'Father-son relationship', 'David\'s humble prayer'],
    christConnection: 'This covenant finds its ultimate fulfillment in Christ—David\'s son whose kingdom is eternal, God\'s Son in the fullest sense.',
  },
  {
    bookId: '2-samuel',
    chapter: 8,
    title: 'David\'s Military Victories',
    summary: 'David defeats the Philistines and takes control of the chief city. He defeats Moab—measuring captives with a line: two lengths to be put to death, one length to be spared. Moab becomes tributary. He defeats Hadadezer of Zobah, capturing 1,700 horsemen and 20,000 foot soldiers, hamstringing the chariot horses except 100. When Arameans of Damascus come to help Hadadezer, David kills 22,000. He garrisons Damascus; Syria becomes tributary. The LORD gave David victory wherever he went. He takes gold shields to Jerusalem and bronze from captured cities. Toi of Hamath sends his son with gifts, having been Hadadezer\'s enemy. David dedicates all captured silver and gold to the LORD. He defeats 18,000 Edomites in the Valley of Salt; Edom becomes tributary. David reigns with justice over all Israel. His officials: Joab over the army, Jehoshaphat recorder, Zadok and Ahimelech priests, Seraiah secretary, Benaiah over bodyguards; David\'s sons are priests.',
    keyThemes: ['Victory over surrounding nations', 'The LORD gave victory wherever he went', 'Tribute and spoils dedicated to God', 'David\'s administration'],
    christConnection: 'David subdued enemies in every direction. Christ has conquered all spiritual enemies—sin, death, and Satan are defeated.',
  },
  {
    bookId: '2-samuel',
    chapter: 9,
    title: 'David\'s Kindness to Mephibosheth',
    summary: 'David asks: is there anyone left of Saul\'s house that I may show kindness for Jonathan\'s sake? A servant of Saul\'s house, Ziba, reports: Jonathan has a son, lame in both feet—Mephibosheth. David summons him. Mephibosheth falls on his face: behold, your servant. David reassures him: don\'t fear. I will show you kindness for Jonathan your father\'s sake. I will restore all Saul\'s land; you will always eat at my table. Mephibosheth bows: what is your servant that you notice a dead dog like me? David tells Ziba: you, your sons, and servants will work the land and bring in produce for your master\'s grandson. But Mephibosheth himself will eat at my table like one of the king\'s sons. Mephibosheth had a young son named Mica. All Ziba\'s household served Mephibosheth. He lived in Jerusalem, eating at the king\'s table, lame in both feet.',
    keyThemes: ['Kindness for Jonathan\'s sake', 'Restoring Saul\'s land', 'Table fellowship with the king', 'Covenant loyalty'],
    christConnection: 'David showed undeserved kindness to Mephibosheth for Jonathan\'s sake. God shows us undeserved kindness for Christ\'s sake—seated at His table forever.',
  },
  {
    bookId: '2-samuel',
    chapter: 10,
    title: 'War with Ammon and Aram',
    summary: 'The king of Ammon dies; his son Hanun succeeds him. David sends servants to express sympathy, honoring the father\'s kindness. But Hanun\'s advisers say: David sent spies to overthrow you. Hanun seizes David\'s servants, shaves off half their beards, cuts their garments at the hips, and sends them away. David tells his humiliated men to stay at Jericho until their beards grow. When Ammon realizes they\'ve made themselves offensive, they hire Aramean mercenaries—33,000 troops. David sends Joab and the army. The Ammonites array at the city gate; Arameans position in the open field. Joab divides forces—he takes the best against Aram; Abishai faces Ammon. If either is too hard pressed, the other will help. Be strong for our people and God\'s cities; may the LORD do what seems good to Him. Arameans flee before Joab; Ammonites flee before Abishai. Arameans regroup with reinforcements from beyond the Euphrates. David gathers all Israel, crosses the Jordan, and defeats them—killing 700 charioteers and 40,000 horsemen. The Aramean vassals make peace with Israel.',
    keyThemes: ['Good intentions misunderstood', 'Servants humiliated', 'Combined enemy forces', 'Decisive Israelite victory'],
    christConnection: 'Joab\'s charge—be strong and let the LORD do what seems good—reflects trust in God\'s sovereignty. Christ perfectly trusted the Father\'s will.',
  },
  {
    bookId: '2-samuel',
    chapter: 11,
    title: 'David and Bathsheba',
    summary: 'In spring, when kings go to battle, David sends Joab and the army against Ammon while he stays in Jerusalem. One evening, walking on his roof, he sees a beautiful woman bathing. He inquires: Bathsheba, wife of Uriah the Hittite. He sends for her; he lies with her; she returns home and conceives. She sends word: I am pregnant. David recalls Uriah from the siege, hoping he\'ll go home to his wife and cover the adultery. Uriah refuses: the ark and Israel dwell in tents; Joab and my lord\'s servants camp in the open field. Shall I go home to eat, drink, and lie with my wife? David tries again, getting him drunk, but Uriah still won\'t go home. David sends a letter to Joab by Uriah\'s hand: put Uriah in the fiercest fighting and withdraw, so he will be struck down and die. Joab obeys. Uriah dies. After Bathsheba\'s mourning period, David takes her as wife. She bears a son. But the thing David had done was evil in the LORD\'s eyes.',
    keyThemes: ['Idle king at home', 'Adultery with Bathsheba', 'Cover-up attempts fail', 'Murder by proxy'],
    christConnection: 'David, the man after God\'s heart, fell into grievous sin. Christ never fell—the sinless King who saves His people from their sins.',
  },
  {
    bookId: '2-samuel',
    chapter: 12,
    title: 'Nathan Confronts David; The Child Dies',
    summary: 'The LORD sends Nathan to David. He tells a parable: a rich man with many flocks took a poor man\'s only lamb—his beloved pet—to feed a guest. David is furious: the man deserves death! Nathan: you are the man! God gave you everything—why have you despised His word? You killed Uriah and took his wife. Now the sword will never depart from your house. I will raise up evil against you from your own house. David confesses: I have sinned against the LORD. Nathan: the LORD has put away your sin; you will not die. But the child will die. The child becomes ill. David fasts, lies on the ground, and pleads with God for seven days. On the seventh day, the child dies. Servants fear to tell him, but David perceives it, rises, washes, worships, and eats. He explains: while alive, I fasted—who knows if God would be gracious? Now he is dead. I will go to him; he will not return to me. David comforts Bathsheba; she conceives and bears Solomon. The LORD loves him and sends Nathan to name him Jedidiah ("beloved of the LORD"). Joab captures Rabbah and summons David for the final assault.',
    keyThemes: ['Prophetic parable', '"You are the man!"', 'Confession and forgiveness', 'Child\'s death', 'Solomon born'],
    christConnection: 'David\'s sin was put away—not ignored but covered by God\'s grace. Christ\'s death is the ground of that forgiveness; David was forgiven through the coming Messiah.',
  },
  {
    bookId: '2-samuel',
    chapter: 13,
    title: 'Amnon and Tamar; Absalom\'s Revenge',
    summary: 'David\'s son Amnon becomes obsessed with his half-sister Tamar (Absalom\'s sister). His cunning friend Jonadab suggests a scheme: pretend to be ill and ask David to send Tamar to prepare food. She comes, cooks, serves. He grabs her: come lie with me. She pleads, resists, suggests he ask the king for her in marriage. He overpowers and rapes her. Immediately, his love turns to hatred greater than his former passion. He has her thrown out. Tamar tears her long robe (worn by virgin daughters of the king), puts ashes on her head, and goes away weeping. Absalom takes her in: has Amnon been with you? Be quiet—he is your brother. Don\'t take it to heart. She lives in Absalom\'s house, desolate. David is furious but does nothing. Absalom hates Amnon and speaks neither good nor ill to him. Two years later, at sheep-shearing, Absalom invites all the king\'s sons and asks David to send Amnon. When Amnon\'s heart is merry with wine, Absalom\'s servants kill him on command. The other sons flee. David mourns; Absalom flees to his grandfather in Geshur for three years.',
    keyThemes: ['Amnon\'s lust and rape', 'Tamar\'s desolation', 'David\'s passive anger', 'Absalom\'s calculated revenge'],
    christConnection: 'Nathan prophesied the sword would not depart from David\'s house. Sin has consequences within families—yet Christ heals the broken and brings peace.',
  },
  {
    bookId: '2-samuel',
    chapter: 14,
    title: 'Absalom Returns to Jerusalem',
    summary: 'Joab perceives the king\'s heart longs for Absalom. He sends a wise woman from Tekoa to pose as a mourning widow. She tells David: I had two sons; one killed the other. Now the clan demands the killer\'s life—but that would extinguish my husband\'s name. David protects her. She then applies this to David: why have you schemed against God\'s people by not bringing back your banished son? We all die like water spilled on the ground. God devises means so the banished are not expelled forever. David suspects Joab\'s hand; the woman confesses his involvement. David tells Joab: bring back Absalom. Absalom returns but for two years cannot see the king\'s face. He summons Joab twice; Joab ignores him. Absalom sets Joab\'s barley field on fire. Joab comes. Absalom demands to see the king: if I am guilty, let him kill me. David summons Absalom, who bows; the king kisses him.',
    keyThemes: ['Wise woman\'s parable', 'God devises means for restoration', 'Partial restoration', 'Absalom sees the king'],
    christConnection: 'God devises means so that the banished are not expelled forever. Christ is the Way—the means by which exiled sinners return to the Father.',
  },
  {
    bookId: '2-samuel',
    chapter: 15,
    title: 'Absalom\'s Rebellion',
    summary: 'Absalom acquires chariots, horses, and fifty men as runners. He stands by the gate, intercepts people coming for the king\'s judgment, sympathizes, and says: if only I were judge! For four years he steals Israel\'s hearts. He asks David\'s permission to fulfill a vow at Hebron. David sends him in peace. From Hebron, Absalom sends secret messengers throughout Israel: when you hear the trumpet, say "Absalom is king at Hebron!" He summons Ahithophel, David\'s wise counselor. The conspiracy strengthens; people increase with Absalom. A messenger reaches David: Israel\'s hearts have gone after Absalom. David tells his servants: flee, or he will overtake us and strike the city with the sword. They leave Jerusalem. The king crosses the Kidron with all his people. Zadok and the Levites carry the ark. David sends it back: if I find favor, God will bring me back to see it. If not, let Him do what seems good. He sends Hushai back as a counter-agent against Ahithophel.',
    keyThemes: ['Stealing hearts', 'Rebellion launched from Hebron', 'David flees Jerusalem', 'Ark sent back—trusting God\'s will'],
    christConnection: 'David crossed the Kidron, weeping, betrayed by his own. Jesus crossed the Kidron to Gethsemane, betrayed by His disciple—yet trusting the Father\'s will.',
  },
  {
    bookId: '2-samuel',
    chapter: 16,
    title: 'David Flees; Shimei Curses',
    summary: 'Ziba, Mephibosheth\'s servant, meets David with donkeys and provisions. Where is your master? Ziba lies: he stayed in Jerusalem, hoping to recover Saul\'s kingdom. David gives Ziba all Mephibosheth\'s property. At Bahurim, Shimei of Saul\'s clan comes out cursing, throwing stones: get out, man of blood! The LORD is repaying you for Saul\'s house. Abishai wants to cut off his head. David forbids it: if my own son seeks my life, how much more this Benjaminite? Leave him alone—perhaps the LORD will see my affliction and repay me good for his cursing. David\'s company continues while Shimei curses from the hillside. Meanwhile, Absalom enters Jerusalem. Hushai greets him: long live the king! Absalom is suspicious; Hushai explains he serves whoever God and the people choose. Absalom asks Ahithophel what to do. Ahithophel advises: take your father\'s concubines publicly—all Israel will know you\'ve made yourself offensive to your father, and your supporters\' hands will be strengthened. They pitch a tent on the roof; Absalom goes in to his father\'s concubines in sight of all Israel.',
    keyThemes: ['Ziba\'s deception', 'Shimei\'s cursing', 'David\'s restraint', 'Absalom takes the concubines'],
    christConnection: 'David endured cursing, refusing revenge. Christ was reviled but did not revile in return, entrusting Himself to the righteous Judge.',
  },
  {
    bookId: '2-samuel',
    chapter: 17,
    title: 'Ahithophel\'s and Hushai\'s Counsel',
    summary: 'Ahithophel proposes: let me take 12,000 men tonight and pursue David while he is weary and weak. I will strike only the king; the people will return to you peacefully. This pleases Absalom. But he also summons Hushai. Hushai counters: you know your father and his men are mighty, fierce as a bear robbed of cubs. Your father won\'t sleep with the troops. If some of your men fall initially, people will hear "Absalom\'s men are defeated" and even the brave will melt. Instead, gather all Israel—innumerable as sand—and go yourself. We\'ll find him wherever he is; we\'ll fall on him like dew. Absalom and all Israel prefer Hushai\'s counsel. The LORD had ordained to defeat Ahithophel\'s good advice to bring disaster on Absalom. Hushai tells the priests what both men counseled; they send message through Jonathan and Ahimaaz (hidden at En-rogel). A girl spots them; they hide in a well; a woman covers it with grain. Absalom\'s servants search but find nothing. They reach David: cross the water tonight. David crosses the Jordan. When Ahithophel sees his counsel rejected, he saddles his donkey, goes home, sets his house in order, and hangs himself.',
    keyThemes: ['Two competing counsels', 'The LORD defeats Ahithophel\'s advice', 'Spy network through priests', 'Ahithophel\'s suicide'],
    christConnection: 'God sovereignly defeated the wise counselor\'s advice. The wisdom of this world is foolishness with God—Christ is the wisdom of God.',
  },
  {
    bookId: '2-samuel',
    chapter: 18,
    title: 'Absalom\'s Death',
    summary: 'David musters his army in three divisions under Joab, Abishai, and Ittai. He wants to go himself, but the people insist: you are worth 10,000 of us. David stands at the gate as they march out: deal gently with young Absalom for my sake. All hear the king\'s command. Battle in the forest of Ephraim—20,000 fall; the forest devours more than the sword. Absalom, riding his mule, passes under an oak; his head catches in the branches. The mule goes on; he hangs suspended. A man reports to Joab but won\'t strike him after the king\'s command. Joab takes three darts and thrusts them into Absalom\'s heart. His ten armor-bearers finish him. Joab sounds the trumpet, stopping the pursuit. They throw Absalom into a pit and heap stones over him. All Israel flees. Ahimaaz wants to bring news; Joab sends the Cushite first. Ahimaaz runs faster and arrives first. David asks: is young Absalom safe? Ahimaaz is evasive. The Cushite arrives with news. David is shattered: "O my son Absalom, my son, my son Absalom! Would I had died instead of you, O Absalom, my son, my son!"',
    keyThemes: ['Deal gently with Absalom', 'Absalom caught in a tree', 'Joab disobeys and kills Absalom', 'David\'s overwhelming grief'],
    christConnection: 'David wished he had died instead of his son. God the Father did send His Son to die—and Christ willingly died in our place.',
  },
  {
    bookId: '2-samuel',
    chapter: 19,
    title: 'David Returns to Jerusalem',
    summary: 'The victory becomes mourning as the army hears of the king\'s grief. Joab confronts David: you shame all who saved your life. You love those who hate you and hate those who love you. If Absalom were alive and we all dead, you\'d be pleased. Go out and speak to your servants, or no one will stay with you tonight. David sits at the gate. Israel debates: the king saved us from enemies; now he\'s fled from Absalom. Absalom is dead—why don\'t we bring the king back? David sends word to Judah through Zadok and Abiathar: why should you be last to bring the king home? Tell Amasa: you will be my army commander instead of Joab. They send for David. Shimei falls before him begging mercy. Abishai wants him dead; David swears he won\'t die. Mephibosheth comes—unkempt since the day David left. He claims Ziba deceived him. David divides the land between them. Mephibosheth says: let Ziba take it all—my lord the king has returned safely. Barzillai escorts David across the Jordan but declines the king\'s offer to come to Jerusalem. Judah and Israel quarrel over who has greater claim to the king.',
    keyThemes: ['Joab\'s rebuke', 'Judah brings David back', 'Shimei forgiven', 'Mephibosheth\'s faithfulness', 'Tribal jealousy'],
    christConnection: 'Shimei deserved death but received mercy. In Christ, we who deserve judgment receive grace—the King forgives His enemies.',
  },
  {
    bookId: '2-samuel',
    chapter: 20,
    title: 'Sheba\'s Rebellion',
    summary: 'A worthless man named Sheba blows the trumpet: we have no portion in David! Every man to his tents, O Israel! Israel follows Sheba; Judah clings to David. In Jerusalem, David puts the ten concubines in confinement—fed but untouched until death, widows of the living. He tells Amasa to assemble Judah within three days. Amasa delays. David sends Abishai (Joab\'s brother) with the army after Sheba before he finds fortified cities. At Gibeon, Joab meets Amasa. Joab, appearing friendly, takes Amasa\'s beard to kiss him and stabs him in the stomach with his other hand. Amasa dies in the road. A man shouts: whoever favors Joab and David, follow Joab! They pursue Sheba to Abel of Beth-maacah and besiege it. A wise woman calls from the wall: why destroy a mother city in Israel? Joab explains: deliver Sheba and we\'ll leave. The woman persuades the city; they throw Sheba\'s head over the wall. Joab blows the trumpet and everyone disperses. Joab remains commander of Israel\'s army.',
    keyThemes: ['Sheba\'s short-lived rebellion', 'Joab kills another rival', 'Wise woman saves the city', 'Joab retains command'],
    christConnection: 'One man\'s rebellion divided Israel; one man\'s death ended it. Christ\'s one death ended the rebellion against God—reconciling enemies through His blood.',
  },
  {
    bookId: '2-samuel',
    chapter: 21,
    title: 'Famine and Gibeonites; Philistine Giants',
    summary: 'A famine lasts three years. David seeks the LORD. The LORD says: there is blood guilt on Saul\'s house for putting Gibeonites to death—violating the ancient covenant from Joshua\'s time. David asks the Gibeonites what will make atonement. They request seven of Saul\'s male descendants for execution at Gibeah. David gives them two of Saul\'s sons by Rizpah and five grandsons—but spares Mephibosheth for Jonathan\'s sake. The Gibeonites hang them at harvest time. Rizpah guards the bodies from birds and beasts from harvest to the rains. David is told and gathers the bones of Saul and Jonathan from Jabesh-gilead, plus these seven. He buries them in Benjamin in Saul\'s father\'s tomb. Then God responds to the land\'s plea. In subsequent Philistine wars, there are giants descended from Rapha. David grows faint in battle; Abishai rescues him. His men swear: you shall not go out to battle anymore, lest you quench Israel\'s lamp. Elhanan kills Goliath\'s brother. Jonathan (David\'s nephew) kills a giant with six fingers on each hand.',
    keyThemes: ['Blood guilt from broken covenant', 'Seven descendants hanged', 'Rizpah\'s mourning vigil', 'Giants killed by David\'s men'],
    christConnection: 'Blood guilt required atonement. Christ\'s blood fully atones—no famine of blessing for those under His covering.',
  },
  {
    bookId: '2-samuel',
    chapter: 22,
    title: 'David\'s Song of Deliverance',
    summary: 'David sings to the LORD on the day God delivered him from all enemies and from Saul. The LORD is my rock, fortress, deliverer, shield, horn of salvation, stronghold, refuge. In distress I called; He heard from His temple. The earth shook; smoke rose from His nostrils. He parted the heavens and came down; He rode upon a cherub. He reached down and took me; He drew me out of many waters. He rescued me because He delighted in me. With the merciful You show Yourself merciful. The LORD is my lamp; He lights my darkness. By my God I can leap a wall. His way is perfect; His word is proven. He trains my hands for war. You have given me the shield of Your salvation; Your gentleness made me great. I pursued enemies and destroyed them. The LORD lives! Blessed be my Rock! He gives great salvation to His king, showing steadfast love to David and his offspring forever.',
    keyThemes: ['The LORD is my rock', 'Divine warrior intervention', 'Deliverance and victory', 'Steadfast love to David\'s line'],
    christConnection: 'David\'s song celebrates God as rock and deliverer. Christ is the Rock on whom we build—the One through whom every enemy is defeated.',
  },
  {
    bookId: '2-samuel',
    chapter: 23,
    title: 'David\'s Last Words; His Mighty Men',
    summary: 'These are David\'s last words: the oracle of the man raised on high, the anointed of Israel\'s God, the sweet psalmist. The Spirit of the LORD spoke through me; His word was on my tongue. The God of Israel spoke: when one rules justly over men, ruling in the fear of God, he is like the light of morning, like the sun shining on a cloudless dawn, like rain that makes grass spring from the earth. Is not my house secure with God? He has made an everlasting covenant with me, ordered in all things and secure. The rest of the chapter honors David\'s mighty men: the Three (Josheb-basshebeth, Eleazar, Shammah) and their feats. Three broke through the Philistine garrison to get David water from Bethlehem\'s well—he wouldn\'t drink it but poured it out as an offering. Abishai and Benaiah were chiefs of the Thirty. The Thirty are listed by name, including Uriah the Hittite—thirty-seven in all.',
    keyThemes: ['David\'s last prophetic words', 'The just ruler', 'Everlasting covenant', 'Honoring mighty warriors'],
    christConnection: 'David\'s oracle about the just ruler shining like the sun is fulfilled in Christ—the Light of the World, the Righteous King.',
  },
  {
    bookId: '2-samuel',
    chapter: 24,
    title: 'David\'s Census; Plague and Altar',
    summary: 'The LORD\'s anger burns against Israel; He incites David to number Israel and Judah. David orders Joab to count the people. Joab protests: why does my lord want this? David insists. After nine months, Joab reports: 800,000 fighting men in Israel; 500,000 in Judah. David\'s heart strikes him afterward: I have sinned greatly. The next morning, Gad the prophet offers three choices: seven years of famine, three months fleeing enemies, or three days of plague. David chooses to fall into the LORD\'s hand—His mercy is great. 70,000 die from plague. When the destroying angel reaches the threshing floor of Araunah the Jebusite, the LORD relents. Gad tells David to build an altar there. David offers to buy the site. Araunah offers it freely, including oxen for sacrifice. David refuses: I will not offer the LORD what cost me nothing. He buys the threshing floor and oxen for fifty shekels of silver, builds an altar, offers sacrifices. The plague is averted. This is the site where Solomon will build the temple.',
    keyThemes: ['Sinful census', 'Three choices of judgment', 'Plague stopped', 'Araunah\'s threshing floor—future temple site'],
    christConnection: 'David\'s costly sacrifice on this site became the temple mount. Christ offered the ultimate costly sacrifice—His own life—establishing the true temple.',
  },
];

export const FIRST_KINGS_CHAPTERS: ChapterSummary[] = [
  {
    bookId: '1-kings',
    chapter: 1,
    title: 'Adonijah\'s Attempted Coup; Solomon Made King',
    summary: 'David is old and cannot keep warm even with covers. They find Abishag the Shunammite to serve him. Adonijah, David\'s handsome son (Absalom\'s younger brother), exalts himself: I will be king. He gathers chariots, horsemen, and runners. David had never crossed him. Adonijah conspires with Joab and Abiathar the priest, but Zadok, Benaiah, Nathan, and the mighty men do not support him. He holds a feast at En-rogel, inviting supporters but not Solomon. Nathan alerts Bathsheba: Adonijah reigns—doesn\'t David know? Your life and Solomon\'s are at stake. Bathsheba and Nathan approach David; he swears Solomon will reign. Solomon rides David\'s mule to Gihon; Zadok and Nathan anoint him. Trumpets blow; the people shout: Long live King Solomon! The noise reaches Adonijah\'s feast. Jonathan brings news; guests scatter in fear. Adonijah flees to the altar for sanctuary. Solomon promises: if he proves worthy, he\'ll live; if wickedness is found, he\'ll die. Adonijah submits.',
    keyThemes: ['David\'s feebleness', 'Adonijah\'s presumption', 'Nathan and Bathsheba\'s intervention', 'Solomon anointed'],
    christConnection: 'Solomon, whose name means "peace," was made king according to David\'s oath. Christ, the Prince of Peace, is made King by the Father\'s eternal decree.',
  },
  {
    bookId: '1-kings',
    chapter: 2,
    title: 'David\'s Final Charge; Solomon Secures the Kingdom',
    summary: 'David\'s last words to Solomon: be strong; show yourself a man. Keep the LORD\'s commands as written in Moses\' law, that you may prosper. Also: deal with Joab for the blood of Abner and Amasa—don\'t let his gray head go down to Sheol in peace. Show kindness to Barzillai\'s sons. And Shimei who cursed me—you are wise, you know what to do. David dies after reigning forty years (seven in Hebron, thirty-three in Jerusalem). Solomon\'s kingdom is firmly established. Adonijah asks Bathsheba to request Abishag as wife. Solomon sees this as a power grab and has him executed. Abiathar is exiled from the priesthood (fulfilling the curse on Eli\'s house). Joab flees to the altar; Solomon orders Benaiah to strike him there. Shimei is confined to Jerusalem on pain of death; after three years he leaves to retrieve runaway slaves. Solomon executes him. The kingdom is established in Solomon\'s hand.',
    keyThemes: ['David\'s deathbed instructions', 'Adonijah executed', 'Abiathar exiled', 'Joab and Shimei executed'],
    christConnection: 'Solomon secured his kingdom by dealing with enemies. Christ will secure His kingdom—every knee shall bow, every enemy made His footstool.',
  },
  {
    bookId: '1-kings',
    chapter: 3,
    title: 'Solomon\'s Request for Wisdom',
    summary: 'Solomon makes alliance with Pharaoh, marrying his daughter. The people sacrifice at high places because no temple exists yet. Solomon loves the LORD, walking in David\'s statutes, except he sacrifices at high places. At Gibeon\'s great high place, God appears in a dream: ask what I shall give you. Solomon: You showed David great steadfast love; now I sit on his throne, but I am like a little child—I don\'t know how to go out or come in. Give Your servant an understanding heart to govern this great people, to discern good from evil. This pleases God. Because you didn\'t ask for long life, riches, or your enemies\' death, I give you wisdom like none before or after. I also give what you didn\'t ask: riches and honor, so none among kings compares. If you walk in My ways, I will lengthen your days. Solomon awakes—it was a dream. He returns to Jerusalem and offers sacrifices before the ark. The famous judgment: two prostitutes, one dead baby, one living. Solomon proposes cutting the living child in half. The true mother relinquishes her claim; Solomon gives her the child. All Israel hears and stands in awe—divine wisdom is in him for justice.',
    keyThemes: ['Dream at Gibeon', 'Request for wisdom', 'Riches and honor added', 'Wisdom demonstrated in judgment'],
    christConnection: 'Solomon\'s wisdom astounded Israel. Christ is greater than Solomon—in Him are hidden all treasures of wisdom and knowledge.',
  },
  {
    bookId: '1-kings',
    chapter: 4,
    title: 'Solomon\'s Administration and Prosperity',
    summary: 'Solomon\'s officials are listed: Azariah priest, Elihoreph and Ahijah secretaries, Jehoshaphat recorder, Benaiah over the army, Zadok and Abiathar priests, Azariah over the governors, Zabud the king\'s friend, Ahishar over the household, Adoniram over forced labor. Twelve governors supply provisions for the king—each responsible for one month\'s supply. Solomon rules over all kingdoms from the Euphrates to the border of Egypt—they bring tribute and serve him all his days. Daily provisions: 30 cors of fine flour, 60 cors of meal, 10 fat oxen, 20 pasture-fed cattle, 100 sheep, plus game. He has dominion from the Euphrates to the Mediterranean, peace on all sides. Judah and Israel are as many as sand by the sea, eating, drinking, and being happy. Solomon\'s wisdom surpasses all the sons of the East and Egypt. He speaks 3,000 proverbs; his songs number 1,005. He speaks of trees, beasts, birds, reptiles, fish. People come from all nations to hear his wisdom.',
    keyThemes: ['Royal administration', 'Vast provisions', 'Peace on all sides', 'Wisdom surpassing all'],
    christConnection: 'Solomon\'s peaceable kingdom foreshadows Christ\'s. Under the Prince of Peace, there will be abundance, security, and nations streaming to learn.',
  },
  {
    bookId: '1-kings',
    chapter: 5,
    title: 'Preparations for the Temple',
    summary: 'Hiram king of Tyre sends servants to Solomon—he had always loved David. Solomon replies: David couldn\'t build a house for the LORD due to wars on every side until God put his enemies under his feet. Now I have rest on every side. I intend to build the temple as God promised David. Send me cedars from Lebanon. My servants will work with yours; I will pay whatever wages you set. Hiram rejoices: blessed be the LORD who gave David such a wise son! He agrees to supply cedar and cypress logs, floating them by sea to wherever Solomon designates. Solomon provides 20,000 cors of wheat and 20 cors of pure oil annually. The LORD gives Solomon wisdom as promised. They make a treaty. Solomon conscripts 30,000 laborers from Israel, sending 10,000 per month in shifts. Adoniram supervises. He has 70,000 burden bearers, 80,000 stonecutters in the hills, plus 3,300 chief officers. They quarry great costly stones for the foundation.',
    keyThemes: ['Alliance with Hiram', 'Cedar from Lebanon', 'Massive labor force', 'Foundation stones'],
    christConnection: 'The temple required costly stones perfectly fitted. Christ\'s church is built on Him—living stones being built into a spiritual house.',
  },
  {
    bookId: '1-kings',
    chapter: 6,
    title: 'Building the Temple',
    summary: 'In the fourth year of Solomon\'s reign, 480 years after the Exodus, he begins the temple. Dimensions: 60 cubits long, 20 wide, 30 high. A porch in front, 20 cubits wide. Windows with recessed frames. A three-story structure of side chambers against the walls. No hammer, axe, or iron tool is heard at the site—stones are prepared at the quarry. The LORD speaks to Solomon: if you walk in My statutes, obey My rules, keep My commands, I will fulfill My promise to David—I will dwell among Israel and not forsake My people. The inner sanctuary (Most Holy Place) is 20 cubits cubed—overlaid with pure gold. Two cherubim of olive wood, each 10 cubits tall, wings spanning the width. The whole interior is overlaid with gold, carved with cherubim, palm trees, and flowers. Doors of olive wood for the inner sanctuary. The temple takes seven years to build.',
    keyThemes: ['480 years after Exodus', 'Silent construction', 'Gold overlay', 'Seven years to build'],
    christConnection: 'The temple was built in silence—no hammer heard. Christ builds His church quietly through the Word and Spirit, living stones fitted together.',
  },
  {
    bookId: '1-kings',
    chapter: 7,
    title: 'Solomon\'s Palace and Temple Furnishings',
    summary: 'Solomon builds his palace in thirteen years. The House of the Forest of Lebanon: 100 cubits long, 50 wide, with cedar pillars and beams. The Hall of Pillars, the Hall of the Throne (for judgment) with cedar paneling. His residence and one for Pharaoh\'s daughter. Hiram of Tyre (a bronze craftsman) makes two pillars: Jachin ("He establishes") and Boaz ("In Him is strength"). The molten sea—10 cubits across, 5 deep, holding 2,000 baths, resting on twelve oxen. Ten bronze stands with basins. Hiram makes the pots, shovels, and basins. Summary of bronze work. Solomon makes the golden altar, the golden table for showbread, ten lampstands of pure gold, and numerous gold utensils. All the silver and gold David dedicated is placed in the treasuries.',
    keyThemes: ['Palace takes longer than temple', 'Jachin and Boaz pillars', 'Bronze sea on twelve oxen', 'Gold furnishings'],
    christConnection: 'The pillars Jachin and Boaz declare: God establishes, and in Him is strength. Christ is our firm foundation and the strength of our salvation.',
  },
  {
    bookId: '1-kings',
    chapter: 8,
    title: 'The Ark Brought In; Solomon\'s Dedication Prayer',
    summary: 'Solomon assembles Israel\'s elders for bringing the ark. The priests carry it into the Most Holy Place beneath the cherubim\'s wings. Inside are only the two stone tablets from Horeb. When the priests withdraw, the cloud fills the house so they cannot stand to minister—the glory of the LORD fills the temple. Solomon declares: the LORD said He would dwell in thick darkness. I have built You an exalted house. He blesses the assembly, recounting God\'s promise to David. His prayer: will God indeed dwell on earth? Heaven of heavens cannot contain You—how much less this house! Yet regard Your servant\'s prayer. May Your eyes be open toward this house night and day. Hear and forgive when Your people pray toward this place: when they sin, when defeated in battle, when there\'s drought, famine, plague, when they\'re carried captive. He prays for foreigners who come to pray. Final appeal: let all peoples know the LORD is God; there is no other. He blesses the people and offers massive sacrifices. The feast lasts fourteen days.',
    keyThemes: ['Glory cloud fills the temple', 'Heaven cannot contain God', 'Prayer for all circumstances', 'Foreigners welcome'],
    christConnection: 'Solomon prayed that foreigners would come and pray. Christ\'s temple is for all nations—a house of prayer for all peoples.',
  },
  {
    bookId: '1-kings',
    chapter: 9,
    title: 'God\'s Covenant with Solomon; Solomon\'s Other Activities',
    summary: 'The LORD appears to Solomon a second time as at Gibeon. He has heard Solomon\'s prayer. If Solomon walks before Him as David did, with integrity and uprightness, obeying His commands, God will establish his throne over Israel forever. But if you turn aside and serve other gods, I will cut off Israel from the land and cast out this house. This house will become a heap of ruins; everyone passing will hiss and ask: why has the LORD done this? Answer: because they forsook the LORD. After twenty years of building, Solomon gives Hiram twenty cities in Galilee—Hiram is displeased, calling them Cabul ("good for nothing"). Hiram had sent 120 talents of gold. Solomon uses forced labor (from remnant Canaanite peoples) for his projects. Israelites are soldiers and officials. Three times yearly Solomon offers sacrifices on the altar he built. He builds a fleet of ships at Ezion-geber; Hiram\'s sailors teach Solomon\'s men. They sail to Ophir, bringing back 420 talents of gold.',
    keyThemes: ['Conditional covenant promise', 'Warning of exile', 'Cabul cities given away', 'Ophir gold'],
    christConnection: 'God warned that disobedience would bring exile. Christ bore the curse of exile on the cross so that His people would never be cast out.',
  },
  {
    bookId: '1-kings',
    chapter: 10,
    title: 'The Queen of Sheba Visits',
    summary: 'The Queen of Sheba hears of Solomon\'s fame and comes to test him with hard questions. She arrives with a great retinue—camels bearing spices, gold, and precious stones. Solomon answers all her questions; nothing is hidden from him. Seeing his wisdom, the house he built, the food on his table, the seating of his officials, their clothing, his cupbearers, and his burnt offerings, she is breathless. She confesses: the report I heard in my country was true, but I didn\'t believe it until I came and saw. The half wasn\'t told me! Your wisdom and prosperity exceed the report. Blessed be the LORD your God who delighted in you, setting you on Israel\'s throne. Because of His eternal love for Israel, He made you king to execute justice and righteousness. She gives him 120 talents of gold, abundant spices, and precious stones. Solomon gives her all she desires. Solomon\'s annual gold income: 666 talents, plus merchants\' tributes and Arabian kings\' gold. He makes 200 large gold shields and 300 smaller ones. A great ivory throne overlaid with gold—nothing like it in any kingdom. All his drinking vessels are gold. He has 1,400 chariots and 12,000 horsemen. Silver is common as stones; cedar as plentiful as sycamores.',
    keyThemes: ['Queen tests Solomon', 'Breathless at his wisdom and wealth', 'Blessed be the LORD', '666 talents of gold'],
    christConnection: 'The Queen of Sheba came from the ends of the earth to hear Solomon. Jesus said, "Something greater than Solomon is here."',
  },
  {
    bookId: '1-kings',
    chapter: 11,
    title: 'Solomon\'s Apostasy; Adversaries Raised',
    summary: 'Solomon loves many foreign women—Pharaoh\'s daughter, Moabites, Ammonites, Edomites, Sidonians, Hittites. The LORD had forbidden marriage with them: they will turn your heart after their gods. Solomon clings to them in love: 700 wives, princesses; 300 concubines. In his old age, his wives turn his heart after other gods. He follows Ashtoreth of the Sidonians, Milcom of the Ammonites—he does evil in the LORD\'s sight. He builds high places for Chemosh and Molech on the mountain east of Jerusalem. He does this for all his foreign wives. The LORD is angry and says: because you have done this and not kept My covenant, I will tear the kingdom from you and give it to your servant. Yet for David\'s sake I won\'t do it in your lifetime. I will leave one tribe for David\'s sake and Jerusalem\'s sake. God raises adversaries: Hadad the Edomite, who escaped David\'s massacre and married in Egypt; Rezon, who became king of Damascus; and Jeroboam, Solomon\'s servant. The prophet Ahijah tears his new garment into twelve pieces, giving ten to Jeroboam: God will tear the kingdom from Solomon and give you ten tribes. Solomon seeks to kill Jeroboam; he flees to Egypt. Solomon reigns forty years and dies; his son Rehoboam succeeds him.',
    keyThemes: ['700 wives turn Solomon\'s heart', 'Idolatry in old age', 'Kingdom to be torn', 'Jeroboam receives ten tribes'],
    christConnection: 'Solomon\'s heart was divided. Christ\'s heart is single—He loved the church and gave Himself for her without turning aside.',
  },
  {
    bookId: '1-kings',
    chapter: 12,
    title: 'The Kingdom Divided',
    summary: 'Rehoboam goes to Shechem where all Israel has assembled to make him king. Jeroboam returns from Egypt; they petition Rehoboam: your father made our yoke heavy. Lighten it and we will serve you. He consults the elders; they advise gentleness. He consults his young friends; they advise harshness: my little finger is thicker than my father\'s thighs. My father disciplined you with whips; I will discipline you with scorpions. On the third day, Rehoboam rejects the elders\' counsel and speaks harshly. When Israel sees the king won\'t listen, they cry: what portion have we in David? To your tents, O Israel! Ten tribes make Jeroboam king over Israel. Rehoboam sends his labor chief Adoram; Israel stones him to death. Rehoboam flees to Jerusalem. Only Judah and Benjamin remain loyal. Rehoboam musters 180,000 warriors to reconquer Israel, but God through Shemaiah the prophet forbids it: this is from Me. They obey. Jeroboam fears his people will return to Rehoboam if they worship in Jerusalem. He makes two golden calves, setting them in Bethel and Dan: these are your gods who brought you out of Egypt. He makes priests from non-Levites and establishes a feast in the eighth month like the one in Judah.',
    keyThemes: ['Rehoboam\'s harsh reply', 'Ten tribes secede', 'Golden calves at Bethel and Dan', 'Non-Levitical priests'],
    christConnection: 'Jeroboam led Israel into idolatry with false worship centers. Christ is the true Temple, the one place where God meets sinners.',
  },
  {
    bookId: '1-kings',
    chapter: 13,
    title: 'The Man of God from Judah',
    summary: 'A man of God comes from Judah to Bethel as Jeroboam stands by the altar. He cries against the altar: a son named Josiah will be born to David\'s house who will sacrifice the high place priests on you and burn human bones. He gives a sign: the altar will be torn down, its ashes poured out. Jeroboam stretches out his hand: seize him! His hand withers and can\'t be drawn back. The altar tears apart. Jeroboam begs the man to pray for his hand; it\'s restored. Jeroboam invites him to dine. The man refuses: God commanded me not to eat bread or drink water here, nor return the way I came. An old prophet in Bethel hears and overtakes him, lies to him: an angel told me to bring you back. The man of God returns, eats, and drinks. During the meal, the old prophet receives a word: because you disobeyed, your body won\'t come to your fathers\' tomb. On the road, a lion kills the man of God but doesn\'t eat him or harm the donkey. The old prophet buries him in his own tomb, mourning: Alas, my brother! He tells his sons: bury me beside him—his prophecy against Bethel will surely come true. Jeroboam doesn\'t turn from his evil ways.',
    keyThemes: ['Prophecy against Bethel\'s altar', 'Hand withered and restored', 'Deceptive prophet', 'Disobedience brings death'],
    christConnection: 'The prophecy about Josiah was fulfilled 300 years later. God\'s word never fails—Christ fulfilled every prophetic word about the Messiah.',
  },
  {
    bookId: '1-kings',
    chapter: 14,
    title: 'Ahijah\'s Prophecy; Jeroboam and Rehoboam Die',
    summary: 'Jeroboam\'s son Abijah is sick. He sends his wife disguised to Ahijah the prophet at Shiloh (now blind from age). The LORD tells Ahijah: Jeroboam\'s wife is coming; pretend not to know her. He confronts her: why pretend? I have bad news. Tell Jeroboam: God raised you from the people, gave you ten tribes, but you\'ve done evil worse than all before you—making metal gods, provoking Me. Therefore, I will bring disaster on Jeroboam\'s house, cutting off every male. Your son will die when you enter the city—the only one of Jeroboam\'s house to be mourned and buried because good was found in him. The LORD will raise a king who cuts off Jeroboam\'s house. Israel will be uprooted and scattered beyond the Euphrates because of the Asherim. She returns home; as she crosses the threshold, the child dies. Jeroboam reigns 22 years; Nadab his son succeeds him. In Judah, Rehoboam reigns 17 years. Judah does evil—high places, pillars, Asherim on every high hill. There are cult prostitutes. Shishak of Egypt attacks Jerusalem, taking the temple and palace treasures. Rehoboam dies; Abijam his son succeeds him.',
    keyThemes: ['Blind prophet sees clearly', 'Judgment on Jeroboam\'s house', 'One son mourned', 'Shishak plunders Jerusalem'],
    christConnection: 'Ahijah was physically blind but spiritually saw. Christ came so that the blind would see and the seeing become blind.',
  },
  {
    bookId: '1-kings',
    chapter: 15,
    title: 'Kings of Judah and Israel',
    summary: 'Abijam reigns three years in Judah. He walks in all his father\'s sins; his heart is not wholly devoted like David\'s. Yet for David\'s sake God gives him a lamp in Jerusalem. War continues between Abijam and Jeroboam. Asa his son succeeds him. Asa reigns 41 years, doing what is right like David. He removes cult prostitutes, idols, and even his grandmother Maacah from being queen mother because she made an Asherah. But high places aren\'t removed. He brings dedicated things into the temple. War continues with Israel. When Baasha of Israel fortifies Ramah (blocking travel to Judah), Asa takes temple treasures and sends them to Ben-hadad of Damascus, persuading him to break his treaty with Baasha. Damascus attacks Israel\'s northern cities; Baasha withdraws. Asa builds Geba and Mizpah with Ramah\'s stones. In Israel, Nadab reigns two years, doing evil. Baasha conspires and kills him, becoming king. He exterminated Jeroboam\'s entire house as prophesied. Baasha reigns 24 years, doing evil like Jeroboam.',
    keyThemes: ['Asa\'s reforms in Judah', 'Lamp for David\'s sake', 'Baasha destroys Jeroboam\'s house', 'Syrian alliance'],
    christConnection: 'God kept a lamp in Jerusalem for David\'s sake. Christ is the Light—God\'s lamp that will never be extinguished.',
  },
  {
    bookId: '1-kings',
    chapter: 16,
    title: 'Israel\'s Kings: Baasha to Omri',
    summary: 'Jehu son of Hanani prophesies against Baasha: I raised you from the dust and made you prince, but you walked like Jeroboam. I will make your house like Jeroboam\'s. Baasha dies; Elah his son reigns two years. Zimri, commander of half his chariots, conspires. While Elah is drunk in his steward\'s house, Zimri kills him and all Baasha\'s household—no male is spared, as Jehu prophesied. Zimri reigns seven days. When the army at Gibbethon hears, they make Omri king. They besiege Tirzah. Zimri enters the palace and burns it over himself. The people divide—half follow Tibni, half follow Omri. Omri prevails; Tibni dies. Omri reigns twelve years, six in Tirzah. He buys the hill Samaria and builds there. He does more evil than all before him. Ahab his son succeeds him. Ahab reigns 22 years, doing more evil than all before. He marries Jezebel daughter of the Sidonian king and serves Baal. He erects a Baal temple and Asherah in Samaria. In his days, Hiel rebuilds Jericho—at the cost of his firstborn (foundation) and youngest son (gates), as Joshua prophesied.',
    keyThemes: ['Baasha\'s house destroyed', 'Zimri\'s seven-day reign', 'Omri founds Samaria', 'Ahab\'s unprecedented evil'],
    christConnection: 'Joshua\'s curse was fulfilled when Jericho was rebuilt. Every word of God comes true—including the promises of blessing through Christ.',
  },
  {
    bookId: '1-kings',
    chapter: 17,
    title: 'Elijah: The Drought; Zarephath',
    summary: 'Elijah the Tishbite from Gilead declares to Ahab: as the LORD lives, before whom I stand, there shall be neither dew nor rain these years except by my word. The LORD sends Elijah east of Jordan to the brook Cherith. Ravens bring him bread and meat morning and evening; he drinks from the brook. When it dries up, God sends him to Zarephath in Sidon. A widow there is gathering sticks for a last meal for herself and her son. Elijah asks for water and a morsel. She explains she has only a handful of flour and a little oil. He says: don\'t fear. Make me a small cake first, then for yourselves. The flour and oil will not run out until the LORD sends rain. She obeys; the jars don\'t empty, as the LORD spoke through Elijah. Later, her son becomes sick and stops breathing. She blames Elijah: have you come to bring my sin to remembrance and kill my son? Elijah takes the boy upstairs, stretches himself on him three times, and cries to the LORD. The LORD hears; the boy\'s life returns. The widow: now I know you are a man of God, and the LORD\'s word in your mouth is truth.',
    keyThemes: ['Drought proclaimed', 'Ravens provide', 'Widow\'s flour and oil', 'Boy raised from death'],
    christConnection: 'Jesus references this: many widows in Israel during Elijah\'s famine, but he was sent to a Gentile widow. God\'s grace extends beyond Israel to all nations.',
  },
  {
    bookId: '1-kings',
    chapter: 18,
    title: 'Elijah on Mount Carmel',
    summary: 'In the third year, the LORD sends Elijah to Ahab: I will send rain. Obadiah, Ahab\'s steward who fears the LORD (he hid 100 prophets from Jezebel), encounters Elijah. Elijah says: tell Ahab I am here. Obadiah fears Elijah will disappear and Ahab will kill him. Elijah swears he\'ll present himself today. Ahab meets Elijah: Is it you, you troubler of Israel? Elijah: I haven\'t troubled Israel—you have, by forsaking God\'s commands and following Baals. Gather Israel at Mount Carmel with the 450 prophets of Baal and 400 of Asherah who eat at Jezebel\'s table. Elijah confronts the people: how long will you limp between two opinions? If the LORD is God, follow Him; if Baal, follow him. The test: two bulls, one for each side. Call on your god; I\'ll call on the LORD. The god who answers by fire is God. From morning to noon, Baal\'s prophets cry out and limp around the altar. Elijah mocks: shout louder—maybe he\'s meditating, or on a journey, or asleep! They cut themselves until blood flows. No response. At the time of evening sacrifice, Elijah rebuilds the LORD\'s altar with twelve stones, digs a trench, arranges the wood and bull, and drenches everything with water three times. He prays: O LORD, let it be known that You are God in Israel. Fire falls, consuming everything—burnt offering, wood, stones, dust, water. The people fall on their faces: The LORD, He is God! Elijah commands: seize the prophets of Baal! They\'re slaughtered at the brook Kishon. Elijah tells Ahab: eat and drink—I hear abundant rain. Elijah goes up Carmel, bows with his face between his knees. His servant looks toward the sea seven times. The seventh time: a cloud as small as a man\'s hand. Elijah sends word to Ahab: hurry before the rain stops you. Sky grows black; heavy rain. The hand of the LORD is on Elijah; he outruns Ahab\'s chariot to Jezreel.',
    keyThemes: ['How long limp between two opinions?', 'Test by fire', 'The LORD, He is God', 'Fire consumes everything'],
    christConnection: 'Elijah\'s prayer brought fire from heaven. Jesus came to cast fire on the earth—the fire of the Spirit that purifies and empowers.',
  },
  {
    bookId: '1-kings',
    chapter: 19,
    title: 'Elijah Flees to Horeb',
    summary: 'Ahab tells Jezebel everything. She sends word to Elijah: by tomorrow I\'ll make your life like one of those prophets. Elijah is afraid and flees to Beersheba, leaving his servant, going a day into the wilderness. Under a broom tree, he asks to die: it is enough, LORD; take my life—I am no better than my fathers. He sleeps. An angel touches him: arise and eat. A cake baked on hot stones and water. He eats, sleeps again. The angel returns: eat, or the journey will be too great. He goes forty days and nights to Horeb (Sinai), enters a cave, and lodges. The LORD: what are you doing here, Elijah? He pours out his complaint: I alone am left, and they seek my life. Go out and stand on the mountain before the LORD. Wind tears the mountain—the LORD is not in the wind. Earthquake—not in the earthquake. Fire—not in the fire. After the fire, a low whisper. Elijah wraps his face in his cloak and stands at the cave entrance. Same question; same answer. The LORD: go, anoint Hazael king of Syria, Jehu king of Israel, and Elisha as prophet in your place. Whoever escapes Hazael\'s sword, Jehu will kill; whoever escapes Jehu, Elisha will kill. Yet I have kept 7,000 in Israel who have not bowed to Baal. Elijah finds Elisha plowing with twelve yoke of oxen. He throws his cloak on him. Elisha asks to kiss his parents goodbye; Elijah consents. Elisha slaughters the oxen, boils them with the equipment, gives the meat to the people, and follows Elijah as his servant.',
    keyThemes: ['Jezebel\'s threat', 'Journey to Horeb', 'Not in wind, earthquake, fire—in the whisper', '7,000 who haven\'t bowed'],
    christConnection: 'God\'s voice came not in dramatic power but in a gentle whisper. Christ often works not through spectacle but through quiet, ordinary means.',
  },
  {
    bookId: '1-kings',
    chapter: 20,
    title: 'Ben-hadad Attacks Israel',
    summary: 'Ben-hadad of Syria with thirty-two kings besieges Samaria. He demands Ahab\'s silver, gold, wives, and children. Ahab complies. Ben-hadad then demands his servants search Ahab\'s house. Ahab\'s elders advise refusal. Ben-hadad threatens to leave nothing but dust. Ahab replies: let not one who puts on armor boast like one who takes it off. A prophet tells Ahab: do you see this great multitude? Today I give it into your hand, that you may know I am the LORD. Through the servants of the provincial governors—232 men—Israel attacks at noon while Ben-hadad drinks himself drunk. Israel routs Syria. The prophet warns: Syria will return next spring. Syrian advisers say: Israel\'s gods are mountain gods; fight them in the plain. Ben-hadad returns with another army. A man of God tells Ahab: because Syria said the LORD is a god of hills not valleys, I will give this multitude into your hand. After seven days, 100,000 Syrian foot soldiers fall in one day. 27,000 die when a wall at Aphek collapses. Ben-hadad hides; his servants negotiate. Ahab makes a covenant and releases him. A prophet, disguised and wounded, tells Ahab a parable. Ahab judges: the man who let his prisoner escape must die. The prophet reveals: because you released the man I devoted to destruction, your life for his life, your people for his people. Ahab returns home sullen and angry.',
    keyThemes: ['Syria attacks twice', 'God is not limited to mountains', 'Two victories', 'Premature treaty condemned'],
    christConnection: 'God proved He rules plains and mountains. Christ has all authority in heaven and on earth—His sovereignty knows no limits.',
  },
  {
    bookId: '1-kings',
    chapter: 21,
    title: 'Naboth\'s Vineyard',
    summary: 'Naboth the Jezreelite has a vineyard near Ahab\'s palace. Ahab offers to buy it or trade for a better one. Naboth refuses: the LORD forbid that I should give you my fathers\' inheritance. Ahab goes home sullen and refuses to eat. Jezebel asks why. When he explains, she mocks: do you not govern Israel? Arise, eat, be cheerful. I will get you the vineyard. She writes letters in Ahab\'s name, sealed with his seal, to the elders: proclaim a fast, seat Naboth prominently, then have two worthless men accuse him of cursing God and the king. Stone him. The elders comply. Naboth is stoned. Jezebel tells Ahab: take possession—Naboth is dead. As Ahab enters the vineyard, Elijah meets him. The LORD: have you killed and also taken possession? In the place where dogs licked Naboth\'s blood, dogs shall lick your blood. I will bring disaster on you, cut off every male from your house, make it like Jeroboam\'s and Baasha\'s. As for Jezebel: dogs shall eat her by the wall of Jezreel. Ahab humbles himself, puts on sackcloth, fasts, goes about meekly. The LORD tells Elijah: because he humbles himself, I will not bring the disaster in his days, but in his son\'s days.',
    keyThemes: ['Land inheritance', 'Jezebel\'s judicial murder', 'Elijah pronounces judgment', 'Ahab\'s humiliation delays doom'],
    christConnection: 'Naboth died for refusing to surrender his inheritance. Christ surrendered everything—His life—so that we could receive an eternal inheritance.',
  },
  {
    bookId: '1-kings',
    chapter: 22,
    title: 'Micaiah Prophesies Ahab\'s Death',
    summary: 'Three years without war between Syria and Israel. Jehoshaphat of Judah visits Ahab. Ahab asks: will you help me take Ramoth-gilead from Syria? Jehoshaphat agrees but asks: first inquire of the LORD. Ahab assembles 400 prophets who unanimously say: go up, the LORD will give it to the king. Jehoshaphat asks: is there no other prophet? Ahab: there is Micaiah, but I hate him—he never prophesies good concerning me. They send for Micaiah. The messenger urges him to agree with the others. Micaiah: I will speak what the LORD tells me. Initially he mimics the 400: go up and triumph. Ahab: how many times must I make you swear to tell the truth? Micaiah: I saw all Israel scattered like sheep without a shepherd. The LORD said: go and entice Ahab. A spirit volunteered to be a lying spirit in the prophets\' mouths. The LORD said: go and entice him—you will succeed. Zedekiah strikes Micaiah\'s cheek: how did the LORD\'s spirit pass from me to speak to you? Micaiah: you\'ll see when you hide in an inner chamber. Micaiah is imprisoned until Ahab returns safely—if he does. Micaiah says: if you return safely, the LORD has not spoken by me. In battle, Ahab disguises himself; Jehoshaphat wears his robes. The king of Syria orders: fight only with the king of Israel. Charioteers pursue Jehoshaphat until he cries out. A random arrow pierces Ahab between the armor joints. He props himself up until evening, bleeding into the chariot, and dies at sunset. Dogs lick his blood at the pool of Samaria where prostitutes wash—as the LORD spoke. Ahaziah his son reigns. In Judah, Jehoshaphat\'s reign is summarized: he does right like Asa, though high places remain. He makes peace with Israel.',
    keyThemes: ['400 false prophets', 'Micaiah speaks truth', 'Lying spirit permitted', 'Random arrow kills Ahab'],
    christConnection: 'Ahab disguised himself but couldn\'t escape God\'s word. No one can hide from God\'s purposes—but in Christ, judgment becomes mercy.',
  },
];

export const SECOND_KINGS_CHAPTERS: ChapterSummary[] = [
  {
    bookId: '2-kings',
    chapter: 1,
    title: 'Elijah and Ahaziah',
    summary: 'Moab rebels after Ahab\'s death. Ahaziah falls through a lattice in his upper chamber and is injured. He sends messengers to inquire of Baal-zebub god of Ekron whether he\'ll recover. The angel of the LORD tells Elijah to intercept them: is it because there is no God in Israel that you go to inquire of Baal-zebub? Therefore: you shall not come down from your bed; you shall surely die. The messengers return quickly. Ahaziah asks why; they describe the man. He recognizes Elijah. Ahaziah sends a captain with fifty soldiers to bring Elijah down from a hill. The captain commands: O man of God, the king says come down. Elijah: if I am a man of God, let fire come down and consume you. Fire falls; the captain and fifty die. A second captain comes with the same demand; same result—fire consumes fifty-one. The third captain approaches humbly, begging for his life and his men\'s. The angel tells Elijah: go with him; don\'t be afraid. Elijah delivers the word to Ahaziah personally: because you sent to Baal-zebub instead of the God of Israel, you will die. Ahaziah dies according to the LORD\'s word. He has no son; Jehoram his brother succeeds him.',
    keyThemes: ['Inquiring of Baal-zebub', 'Fire from heaven', 'Humility of third captain', 'Ahaziah dies as prophesied'],
    christConnection: 'Ahaziah sought false gods instead of the true God. Christ is the way, the truth, and the life—no one comes to the Father except through Him.',
  },
  {
    bookId: '2-kings',
    chapter: 2,
    title: 'Elijah Taken Up; Elisha Succeeds Him',
    summary: 'The LORD is about to take Elijah up in a whirlwind. Elijah tells Elisha to stay behind as he goes to Bethel; Elisha refuses: I won\'t leave you. The sons of the prophets ask Elisha: do you know the LORD will take your master today? He knows. The same pattern at Jericho. They proceed to the Jordan. Elijah strikes the water with his cloak; it parts. They cross on dry ground. Elijah: ask what I shall do for you before I am taken. Elisha: a double portion of your spirit. Elijah: you have asked a hard thing. If you see me taken, it will be so. As they walk and talk, a chariot of fire and horses of fire separate them. Elijah goes up by a whirlwind into heaven. Elisha sees it and cries: my father, my father! The chariots of Israel and its horsemen! He tears his clothes, picks up Elijah\'s cloak, strikes the Jordan: where is the LORD, the God of Elijah? The water parts. The prophets at Jericho see and bow before him. They insist on searching for Elijah—perhaps the Spirit set him down somewhere. After three days, they find nothing. Elisha heals Jericho\'s bad water with salt: I have healed these waters. Going up to Bethel, boys mock him: go up, you baldhead! He curses them; two bears maul forty-two boys.',
    keyThemes: ['Elijah taken in a whirlwind', 'Double portion requested', 'Elisha inherits the mantle', 'Jericho\'s water healed'],
    christConnection: 'Elijah ascended to heaven; Christ ascended and sent the Spirit—the double portion poured out at Pentecost.',
  },
  {
    bookId: '2-kings',
    chapter: 3,
    title: 'Moab Rebels; Water in the Wilderness',
    summary: 'Jehoram son of Ahab becomes Israel\'s king. He puts away Baal\'s pillar his father made but clings to Jeroboam\'s sins. Moab\'s king paid tribute of 100,000 lambs and 100,000 rams\' wool yearly, but rebels. Jehoram musters Israel and asks Jehoshaphat of Judah: will you go with me against Moab? I am as you are. They choose a route through Edom. After seven days, there\'s no water—the army and animals are dying. Jehoram laments: the LORD has called these three kings to deliver them to Moab! Jehoshaphat asks for a prophet. Elisha is found. He tells Jehoram: go to your father\'s and mother\'s prophets! Only for Jehoshaphat\'s sake do I regard you. Bring a musician. As the musician plays, the LORD\'s hand comes on him: make this valley full of trenches. You won\'t see wind or rain, yet the valley will be filled with water. This is easy for the LORD; He will also give Moab into your hand. At morning sacrifice, water floods in from Edom. Moabites see red-tinted water, think it\'s blood, assume the kings fought each other, and rush to plunder. Israel strikes them, devastating Moab. Moab\'s king sacrifices his firstborn son on the wall; great wrath comes against Israel, and they withdraw.',
    keyThemes: ['Moab rebels', 'Water miraculously provided', 'Moab defeated', 'Human sacrifice in desperation'],
    christConnection: 'God provided water in the desert for His people. Christ is the living water—whoever drinks from Him will never thirst.',
  },
  {
    bookId: '2-kings',
    chapter: 4,
    title: 'Elisha\'s Miracles',
    summary: 'A prophet\'s widow cries to Elisha: the creditor is coming to take my two sons as slaves. What do you have? One jar of oil. Borrow empty vessels from neighbors—many! Pour oil into them. She fills every vessel; the oil stops only when she runs out of vessels. Sell the oil, pay your debts, live on the rest. A wealthy Shunammite woman regularly feeds Elisha and makes a room for him. He asks what he can do for her; his servant Gehazi notes she has no son and her husband is old. Elisha: next year you\'ll hold a son. She does. Years later, the boy dies of a head injury. She rides urgently to Elisha at Carmel. He sends Gehazi with his staff to lay on the child—nothing happens. Elisha arrives, shuts the door, prays, lies on the boy (mouth to mouth, eyes to eyes, hands to hands). The child\'s flesh grows warm; the boy sneezes seven times and opens his eyes. Other miracles: during famine, Elisha makes poisonous stew edible with flour. A man brings twenty loaves; Elisha feeds a hundred men with leftovers—the LORD\'s word.',
    keyThemes: ['Widow\'s oil multiplied', 'Shunammite\'s son', 'Child raised from death', 'Feeding many with little'],
    christConnection: 'Elisha multiplied oil and food. Christ multiplied loaves and fish. He is the bread of life who satisfies every hunger.',
  },
  {
    bookId: '2-kings',
    chapter: 5,
    title: 'Naaman Healed of Leprosy',
    summary: 'Naaman, commander of Syria\'s army, is a great man, mighty warrior, favored by his master—but a leper. A captured Israelite servant girl tells Naaman\'s wife: if only my lord would go to the prophet in Samaria! Naaman goes with letters from Syria\'s king and ten talents of silver, 6,000 shekels of gold, and ten changes of clothes. Israel\'s king tears his clothes: am I God, to kill and make alive? Elisha sends word: send him to me. Naaman arrives with chariots and horses. Elisha sends a messenger: wash in the Jordan seven times; your flesh will be restored. Naaman is furious: I thought he would come out, call on his God, wave his hand! Aren\'t Damascus\'s rivers better than Israel\'s waters? His servants reason with him: if the prophet told you something hard, wouldn\'t you do it? How much more when he says "wash and be clean"? Naaman dips seven times; his flesh becomes like a child\'s. He returns to Elisha: now I know there is no God in all the earth except in Israel. He offers gifts; Elisha refuses. Naaman asks for earth from Israel to worship the LORD back home; also pardon when he accompanies his master to Rimmon\'s temple. Elisha: go in peace. Gehazi runs after Naaman, lies about needing silver and clothes. He receives them, hides them. Elisha asks: where were you? Gehazi lies. Elisha: my heart went with you. Naaman\'s leprosy will cling to you forever. Gehazi leaves, leprous as snow.',
    keyThemes: ['Servant girl\'s faith', 'Naaman\'s initial pride', 'Simple obedience heals', 'Gehazi\'s greed brings leprosy'],
    christConnection: 'Jesus cites Naaman: many lepers in Israel, but only the Syrian was cleansed. God\'s grace extends to Gentiles who humble themselves.',
  },
  {
    bookId: '2-kings',
    chapter: 6,
    title: 'The Floating Axe Head; Syrian Army Blinded',
    summary: 'The prophets need more space; they build by the Jordan. As one cuts a beam, his borrowed iron axe head falls in the water. Elisha asks where; he throws a stick in—the iron floats. The prophet retrieves it. Syria wars against Israel. Elisha keeps warning the king which roads to avoid. Syria\'s king suspects a spy; his servants explain Elisha tells Israel what the king says in his bedroom. Syria sends horses, chariots, and a great army by night to surround Dothan. Elisha\'s servant wakes terrified. Elisha: don\'t fear; those with us are more than those with them. He prays: open his eyes. The servant sees horses and chariots of fire surrounding Elisha. As Syrians approach, Elisha prays: strike them with blindness. He leads them to Samaria: this is not the way; follow me to the man you seek. In Samaria, he prays: open their eyes. They\'re inside the city! The king asks: shall I strike them? Elisha: no—feed them and send them home. Syria\'s raids cease. Later, Ben-hadad besieges Samaria. Famine is so severe that a donkey\'s head sells for 80 shekels, dove\'s dung for 5 shekels. A woman cries to the king: we agreed to eat her son today, then mine tomorrow—but she hid her son! The king tears his robes, revealing sackcloth. He vows to take Elisha\'s head that day, blaming him for the LORD\'s disaster.',
    keyThemes: ['Iron floats', 'Horses and chariots of fire', 'Blind army captured and released', 'Horrific famine'],
    christConnection: 'Elisha\'s servant saw the invisible army of God. Christ assures us: angels encamp around those who fear Him.',
  },
  {
    bookId: '2-kings',
    chapter: 7,
    title: 'The Siege Lifted',
    summary: 'Elisha prophesies: tomorrow about this time, a seah of fine flour will sell for a shekel at Samaria\'s gate—and two seahs of barley for a shekel. The king\'s captain scoffs: if the LORD made windows in heaven, could this happen? Elisha: you will see it but not eat. Four lepers outside the gate reason: why sit here until we die? Let\'s surrender to the Syrians—if they kill us, we die anyway. At twilight they approach the Syrian camp—empty! The LORD had made the Syrians hear the sound of a great army with chariots and horses. Thinking Israel hired Hittites and Egyptians, they fled in panic, leaving everything. The lepers eat, drink, gather spoil, hide it, then feel guilty: this is not right—we have good news but keep silent. They report to the gatekeepers. The king suspects an ambush but sends scouts. The road to Jordan is littered with Syrian gear. The people plunder the camp—flour and barley sell exactly as Elisha said. The king sets the scoffing captain to control the gate; the crowd tramples him to death. He saw the abundance but didn\'t eat.',
    keyThemes: ['Impossible prophecy', 'Lepers discover empty camp', 'Good news must be shared', 'Scoffer trampled'],
    christConnection: 'The lepers said: this is a day of good news, and we are keeping silent! We have gospel news and must not remain silent.',
  },
  {
    bookId: '2-kings',
    chapter: 8,
    title: 'The Shunammite\'s Land Restored; Hazael Becomes King',
    summary: 'Elisha had warned the Shunammite woman: leave, because the LORD has called for a seven-year famine. She lived in Philistia. When she returns to claim her house and land, she appeals to the king. At that very moment, Gehazi is telling the king how Elisha raised a boy from the dead. The woman herself arrives; the king restores all her property plus seven years\' revenue. Elisha goes to Damascus. Ben-hadad of Syria is sick and sends Hazael with forty camel-loads of gifts to ask: will I recover? Elisha: tell him "you will recover"—but the LORD has shown me he will surely die. Elisha stares at Hazael until he\'s embarrassed, then weeps. Why do you weep? Because I know the evil you will do to Israel—killing their young men, dashing their children, ripping open pregnant women. Hazael: is your servant a dog? Elisha: the LORD has shown me you will be king of Syria. Hazael returns, tells Ben-hadad he\'ll recover. The next day, Hazael smothers him with a wet cloth and becomes king. In Judah, Jehoram (Jehoshaphat\'s son) reigns eight years, doing evil like Israel\'s kings—he married Ahab\'s daughter. Yet God won\'t destroy Judah for David\'s sake. Edom and Libnah revolt. Ahaziah (Jehoram\'s son) reigns one year, doing evil. He joins Israel\'s king against Hazael at Ramoth-gilead.',
    keyThemes: ['Shunammite\'s property restored', 'Hazael\'s future evil', 'Anointed but not righteous', 'Ahaziah joins Israel'],
    christConnection: 'God preserved Judah for David\'s sake and His promise of a Messiah. Christ is that promised descendant through whom salvation comes.',
  },
  {
    bookId: '2-kings',
    chapter: 9,
    title: 'Jehu Anointed King; Joram and Jezebel Killed',
    summary: 'Elisha sends a young prophet to Ramoth-gilead: anoint Jehu king over Israel and flee immediately. He pours oil on Jehu\'s head: thus says the LORD—I anoint you king over Israel. You shall strike down Ahab\'s house for the blood of God\'s servants. Dogs shall eat Jezebel at Jezreel. The young man flees. Jehu\'s fellow commanders ask what that madman wanted. He tells them. They blow the trumpet: Jehu is king! Jehu rides furiously toward Jezreel where King Joram of Israel is recovering from wounds, visited by Ahaziah of Judah. A watchman reports: the driving is like Jehu—he drives like a madman! Joram rides out to meet him. Is it peace, Jehu? What peace, so long as your mother Jezebel\'s harlotries and sorceries continue? Joram flees, warning Ahaziah: treachery! Jehu shoots Joram through the heart; his body is thrown in Naboth\'s vineyard as the LORD spoke through Elijah. Ahaziah flees; Jehu pursues, wounds him; he dies at Megiddo. In Jezreel, Jezebel paints her eyes and adorns her head, looking out the window: Is it peace, you Zimri, murderer of your master? Jehu asks: who is on my side? Eunuchs throw her down. Horses trample her. When they go to bury her, only skull, feet, and hands remain—dogs have eaten her as Elijah prophesied.',
    keyThemes: ['Jehu anointed secretly', 'Drives like a madman', 'Joram killed in Naboth\'s vineyard', 'Jezebel eaten by dogs'],
    christConnection: 'Judgment came on Ahab\'s house as prophesied. God\'s word is sure. In Christ, we escape the judgment our sins deserve.',
  },
  {
    bookId: '2-kings',
    chapter: 10,
    title: 'Jehu Destroys Ahab\'s House and Baal Worship',
    summary: 'Ahab has seventy sons in Samaria. Jehu challenges the city: choose the best of your master\'s sons and fight for him. The guardians are terrified and surrender. Jehu demands the seventy sons\' heads. They\'re delivered in baskets to Jezreel. Jehu meets Ahab\'s relatives and forty-two princes of Judah visiting—he kills them all at a pit. He meets Jehonadab son of Rechab and invites him: come see my zeal for the LORD. In Samaria, Jehu kills all remaining of Ahab\'s house, as spoken by Elijah. Then he announces a great sacrifice to Baal. All Baal worshipers assemble in Baal\'s temple—packed. After offering the sacrifice, Jehu posts eighty guards: if anyone escapes, your life for his. They strike down all Baal worshipers with the sword, bring out Baal\'s pillar and burn it, demolish the temple and make it a latrine. Thus Jehu destroyed Baal from Israel. But he didn\'t turn from Jeroboam\'s sins—the golden calves. The LORD tells Jehu: because you did well in executing Ahab\'s house, your sons shall sit on Israel\'s throne to the fourth generation. Yet Jehu is careless in walking in God\'s law. In his days, the LORD begins cutting off territory—Hazael defeats Israel throughout Gilead. Jehu dies; Jehoahaz his son succeeds him.',
    keyThemes: ['Seventy heads in baskets', 'All Ahab\'s house destroyed', 'Baal worshipers slaughtered', 'Golden calves remain'],
    christConnection: 'Jehu executed judgment on Baal worship but kept Jeroboam\'s idols. Incomplete obedience isn\'t true worship. Christ alone purifies completely.',
  },
  {
    bookId: '2-kings',
    chapter: 11,
    title: 'Athaliah Usurps; Joash Preserved and Crowned',
    summary: 'When Athaliah (Ahab\'s daughter) sees her son Ahaziah is dead, she destroys all the royal seed. But Jehosheba (Ahaziah\'s sister) steals away the infant Joash and hides him with his nurse in the temple for six years while Athaliah reigns. In the seventh year, Jehoiada the priest summons the Carites and guards, shows them the king\'s son, and organizes their divisions for protection on the Sabbath. He gives them David\'s spears and shields from the temple. They surround the young king. Jehoiada brings out the king\'s son, crowns him, gives him the testimony (covenant), anoints him. They clap and shout: long live the king! Athaliah hears the noise, comes to the temple, sees the king standing by the pillar with the princes and trumpeters. She tears her clothes: treason! treason! Jehoiada orders: bring her out under guard; kill anyone who follows her. They seize her at the horses\' entrance to the palace and kill her. Jehoiada makes a covenant: they shall be the LORD\'s people. They tear down Baal\'s house and kill Mattan the priest of Baal. Jehoiada posts guards for the temple. They bring the king from the temple to the palace; he sits on the throne. The people rejoice; the city is quiet.',
    keyThemes: ['Athaliah massacres royal seed', 'Joash hidden six years', 'Jehoiada\'s coup', 'Davidic line preserved'],
    christConnection: 'The Davidic line nearly perished but God preserved it—a baby hidden in the temple. Christ, David\'s ultimate Son, cannot be stopped.',
  },
  {
    bookId: '2-kings',
    chapter: 12,
    title: 'Joash Repairs the Temple',
    summary: 'Joash becomes king at age seven, reigning forty years in Jerusalem. He does right in the LORD\'s eyes all the days Jehoiada the priest instructs him—but high places remain. Joash orders the priests: collect all money brought to the temple and use it for repairs. By the twenty-third year of his reign, the priests haven\'t repaired the temple. Joash summons Jehoiada: why haven\'t you repaired the house? From now on, don\'t take money for yourselves—give it for repairs. The priests agree but still aren\'t making repairs. Jehoiada drills a hole in a chest and places it beside the altar. Priests put all offerings into it. When full, the royal secretary and high priest count it and give it to workmen who faithfully repair the house. They don\'t demand accounting from these honest workers. Money from guilt and sin offerings goes to the priests. Hazael of Syria marches against Gath and takes it, then threatens Jerusalem. Joash takes all the sacred treasures his fathers dedicated plus his own, along with the palace gold, and sends it to Hazael—who withdraws. Joash\'s servants conspire and kill him at Beth-millo. Amaziah his son succeeds him.',
    keyThemes: ['Temple repairs organized', 'Honest workmen', 'Hazael buys off with treasures', 'Joash assassinated'],
    christConnection: 'The temple needed constant repair. Christ\'s body—the true temple—was destroyed and raised in three days, never to decay.',
  },
  {
    bookId: '2-kings',
    chapter: 13,
    title: 'Israel\'s Kings: Jehoahaz and Jehoash',
    summary: 'Jehoahaz son of Jehu reigns seventeen years over Israel, doing evil, following Jeroboam\'s sins. The LORD\'s anger burns; He gives them to Hazael and Ben-hadad of Syria repeatedly. Jehoahaz prays; the LORD gives Israel a savior who delivers them from Syria. Yet they don\'t turn from Jeroboam\'s sins or the Asherah in Samaria. Jehoahaz\'s army is reduced to fifty horsemen, ten chariots, and 10,000 infantry—Syria crushed them like threshing dust. Jehoash his son reigns sixteen years, doing evil. He fights against Amaziah of Judah (recorded elsewhere). Elisha is sick with his final illness. Jehoash weeps over him: my father, my father! The chariots of Israel and its horsemen! Elisha tells him to take bow and arrows, shoot east, and says: the LORD\'s arrow of victory over Syria—you will strike Syria at Aphek until you destroy them. Then: strike the ground with the arrows. He strikes three times and stops. Elisha is angry: you should have struck five or six times—you would have destroyed Syria completely. Now you will strike them only three times. Elisha dies. Moabite raiders appear yearly. As a man is being buried, they throw his body into Elisha\'s tomb. When the body touches Elisha\'s bones, the man revives. Hazael oppresses Israel all Jehoahaz\'s days. The LORD is gracious to them for Abraham, Isaac, and Jacob\'s sake. Hazael dies; Ben-hadad succeeds. Jehoash takes back cities from Ben-hadad three times.',
    keyThemes: ['Israel reduced by Syria', 'A savior given', 'Elisha\'s death and final prophecy', 'Resurrection at Elisha\'s bones'],
    christConnection: 'A dead man revived touching Elisha\'s bones. Christ\'s resurrection power gives life to all who touch Him by faith.',
  },
  {
    bookId: '2-kings',
    chapter: 14,
    title: 'Amaziah of Judah; Jeroboam II',
    summary: 'Amaziah son of Joash becomes king of Judah at 25, reigning 29 years. He does right in the LORD\'s eyes, but not like David—like his father Joash. High places remain. He executes his father\'s murderers but not their children, according to Moses\' law. He defeats 10,000 Edomites in the Valley of Salt and takes Sela. He challenges Jehoash of Israel to battle. Jehoash replies with a parable: a thistle demanded the cedar\'s daughter for his son; a wild beast trampled the thistle. You have defeated Edom—your heart has lifted you up. Glory in it and stay home! Amaziah won\'t listen. They meet at Beth-shemesh; Judah is defeated, everyone fleeing home. Jehoash captures Amaziah, breaks down 400 cubits of Jerusalem\'s wall, takes all the temple and palace treasures plus hostages, and returns to Samaria. Jehoash dies; Jeroboam II his son reigns. Amaziah survives Jehoash by fifteen years but is murdered in a conspiracy at Lachish. Azariah (Uzziah) his son succeeds him. Jeroboam II reigns 41 years, doing evil. Yet he restores Israel\'s border from Lebo-hamath to the Sea of the Arabah, according to the prophecy of Jonah son of Amittai. The LORD sees Israel\'s bitter affliction and saves them by Jeroboam\'s hand—He hasn\'t said He would blot out Israel\'s name.',
    keyThemes: ['Amaziah\'s pride leads to defeat', 'Jerusalem\'s wall broken', 'Jeroboam II restores territory', 'Jonah prophesied this'],
    christConnection: 'God saved Israel despite their wickedness because He hadn\'t decreed their destruction. Christ saves not because of our merit but because of His purpose.',
  },
  {
    bookId: '2-kings',
    chapter: 15,
    title: 'Azariah (Uzziah) and Israel\'s Rapid Succession',
    summary: 'Azariah (Uzziah) becomes king of Judah at 16, reigning 52 years. He does right like his father Amaziah—but high places remain. The LORD strikes him with leprosy until death; he lives in a separate house while Jotham his son governs. In Israel, rapid succession and violence: Zechariah (Jeroboam II\'s son) reigns six months—doing evil. Shallum conspires, kills him publicly, becoming king—the fourth generation of Jehu\'s house as the LORD promised. Shallum reigns one month. Menahem attacks from Tirzah, kills him, becomes king. He strikes Tiphsah and rips open its pregnant women. Menahem reigns ten years, doing evil. Pul (Tiglath-pileser) of Assyria invades; Menahem pays him 1,000 talents of silver (extracted from the wealthy at 50 shekels each) to support his rule. Pekahiah his son reigns two years, doing evil. Pekah his captain conspires and kills him in the palace. Pekah reigns twenty years, doing evil. Tiglath-pileser takes northern Israelite cities and deports the people. Hoshea conspires, kills Pekah, becomes king. In Judah, Jotham reigns sixteen years, doing right—but high places remain. The LORD begins sending Rezin of Syria and Pekah against Judah. Jotham dies; Ahaz his son succeeds.',
    keyThemes: ['Azariah/Uzziah\'s leprosy', 'Israel\'s rapid succession', 'First Assyrian deportation', 'Violence breeds violence'],
    christConnection: 'Israel\'s kings brought only instability and judgment. Christ\'s kingdom brings eternal stability and peace for His people.',
  },
  {
    bookId: '2-kings',
    chapter: 16,
    title: 'Ahaz of Judah',
    summary: 'Ahaz becomes king of Judah at 20, reigning sixteen years. He doesn\'t do right like David. He walks in Israel\'s kings\' ways—even making his son pass through fire according to Canaanite abominations. He sacrifices and burns incense at high places. Rezin of Syria and Pekah of Israel attack Jerusalem but can\'t conquer it. (Rezin does recover Elath for Syria.) Ahaz sends messengers to Tiglath-pileser of Assyria: I am your servant and son. Come save me from Syria and Israel. He sends temple and palace silver and gold. Assyria attacks Damascus, deports its people, kills Rezin. Ahaz goes to Damascus to meet Tiglath-pileser. He sees an altar there and sends its design to Uriah the priest to build a copy. When Ahaz returns, he offers sacrifices on the new altar, commanding Uriah to use it for all offerings. He moves the bronze altar aside for his own use. He dismantles the stands, removes the sea from the bronze oxen, and alters the king\'s entrance to the temple—because of the king of Assyria. Ahaz dies; Hezekiah his son succeeds.',
    keyThemes: ['Child sacrifice', 'Appeals to Assyria instead of God', 'Altar replaced with pagan design', 'Temple defaced'],
    christConnection: 'Ahaz sought Assyria\'s help rather than God\'s. In Christ alone is salvation—no political power or human alliance can deliver.',
  },
  {
    bookId: '2-kings',
    chapter: 17,
    title: 'Fall of Samaria; Exile of Israel',
    summary: 'Hoshea becomes Israel\'s last king, reigning nine years. He does evil but not like kings before him. Shalmaneser of Assyria comes against him; Hoshea becomes his vassal. Later, Hoshea conspires with So king of Egypt and withholds tribute. Shalmaneser imprisons him and besieges Samaria three years. In 722 BC, Samaria falls; Israel is deported to Assyria and settled in other cities. This happened because Israel sinned against the LORD who brought them out of Egypt. They feared other gods, walked in the customs of nations the LORD drove out, secretly did things not right. They built high places, pillars, Asherim. They served idols though the LORD said not to. The LORD warned through every prophet: turn from your evil ways, keep My commandments. They wouldn\'t listen. They rejected His statutes, the covenant, the warnings. They followed worthless things and became worthless. They made molten images, Asherah, worshiped the host of heaven, served Baal. They burned their children as offerings. They practiced divination. They sold themselves to do evil. The LORD was very angry and removed them from His sight. Only Judah was left—yet Judah also didn\'t keep God\'s commands but walked in Israel\'s customs. The king of Assyria brings foreigners to resettle Samaria. Lions kill some because they don\'t know the local god. An Israelite priest is sent to teach them, but they make their own gods alongside the LORD—a syncretic religion. They fear the LORD but serve their own gods—this continues to this day.',
    keyThemes: ['Samaria falls', 'Reasons for exile', 'Complete apostasy', 'Syncretic Samaritan religion'],
    christConnection: 'Israel was exiled for idolatry. Christ bore the exile\'s curse so that we might be brought near to God.',
  },
  {
    bookId: '2-kings',
    chapter: 18,
    title: 'Hezekiah\'s Reforms; Sennacherib\'s Invasion',
    summary: 'Hezekiah becomes king of Judah at 25, reigning 29 years. He does right like David. He removes high places, breaks pillars, cuts down the Asherah, and breaks the bronze serpent Moses made (Israel had been worshiping it—"Nehushtan"). He trusts in the LORD; none like him before or after among Judah\'s kings. The LORD is with him; he prospers. He rebels against Assyria, defeats the Philistines. In Hezekiah\'s fourth year (Israel\'s king Hoshea\'s seventh year), Shalmaneser besieges Samaria. In the sixth/ninth years, Samaria falls—Israel exiled for not obeying. In Hezekiah\'s fourteenth year, Sennacherib attacks Judah\'s fortified cities. Hezekiah submits, paying 300 talents of silver and 30 talents of gold—stripping temple and palace. Sennacherib sends his Rabshakeh with a great army to Jerusalem. He taunts: what confidence is this? You trust Egypt—a broken reed! If you say you trust the LORD—didn\'t Hezekiah remove His high places and altars? Your god can\'t save you. He addresses the people on the wall in Hebrew: don\'t let Hezekiah deceive you. Make peace; eat from your own vines. Then I\'ll take you to a land like yours. Has any god delivered his land from Assyria? The people remain silent as Hezekiah commanded.',
    keyThemes: ['Hezekiah\'s thorough reforms', 'Bronze serpent destroyed', 'Sennacherib\'s invasion', 'Rabshakeh\'s propaganda'],
    christConnection: 'The bronze serpent was lifted up in the wilderness for healing but became an idol. Christ, lifted up on the cross, is the true source of salvation.',
  },
  {
    bookId: '2-kings',
    chapter: 19,
    title: 'Hezekiah\'s Prayer; Sennacherib\'s Defeat',
    summary: 'When Hezekiah hears the Rabshakeh\'s words, he tears his clothes, puts on sackcloth, and goes to the temple. He sends officials to Isaiah the prophet. Isaiah says: don\'t fear. The LORD will put a spirit in Sennacherib; he\'ll hear a rumor and return home. There he\'ll fall by the sword. The Rabshakeh returns to find Sennacherib fighting Libnah. Sennacherib hears that Tirhakah of Ethiopia is coming against him. He sends messengers to Hezekiah: don\'t let your God deceive you. Look what Assyria did to all lands—were their gods able to save them? Hezekiah spreads the letter before the LORD and prays: O LORD, You alone are God. Assyria has destroyed nations and burned their gods—which were not gods but wood and stone. Now save us, that all may know You alone are the LORD. Isaiah sends word: God has heard. The virgin daughter of Zion despises Sennacherib. Whom have you mocked? The Holy One of Israel! I know your sitting, going, coming, and raging against Me. I will put My hook in your nose and return you the way you came. A sign for Hezekiah: this year eat what grows of itself; next year the same; the third year, sow and reap. A remnant will go out from Jerusalem. God will defend this city for His own sake and David\'s sake. That night the angel of the LORD strikes 185,000 Assyrians dead. Sennacherib departs to Nineveh. While worshiping in his god\'s temple, his sons kill him with the sword.',
    keyThemes: ['Hezekiah\'s prayer', 'Isaiah\'s oracle against Assyria', '185,000 slain by the angel', 'Sennacherib murdered by his sons'],
    christConnection: 'One angel destroyed an army. Christ has legions of angels at His command yet chose to save us not by force but by laying down His life.',
  },
  {
    bookId: '2-kings',
    chapter: 20,
    title: 'Hezekiah\'s Illness and Recovery; Babylonian Envoys',
    summary: 'Hezekiah becomes sick to death. Isaiah tells him: set your house in order; you shall die. Hezekiah turns his face to the wall and prays: O LORD, remember how I have walked before You faithfully with a whole heart, doing what is good in Your sight. He weeps bitterly. Before Isaiah leaves the middle court, the LORD speaks: return and tell Hezekiah—I have heard your prayer, seen your tears. I will heal you; in three days you\'ll go to the temple. I add fifteen years to your life and will deliver you and this city from Assyria for My sake and David\'s. Isaiah prescribes a fig cake for the boil. Hezekiah asks for a sign. Isaiah offers: shall the shadow go forward ten steps or back? Hezekiah: forward is easy; let it go back. Isaiah cries to the LORD; the shadow goes back ten steps. Merodach-baladan of Babylon sends envoys with letters and a gift, hearing Hezekiah was sick. Hezekiah shows them all his treasures—nothing in his house or realm he doesn\'t show them. Isaiah asks: what did they see? Everything. Isaiah prophesies: all that your fathers have stored until this day will be carried to Babylon. Some of your sons will be eunuchs in the Babylonian palace. Hezekiah responds: the word of the LORD is good—at least there will be peace and truth in my days. Hezekiah dies; Manasseh his son succeeds.',
    keyThemes: ['Prayer extends life fifteen years', 'Shadow goes backward', 'Babylonian envoys see everything', 'Prophecy of Babylonian exile'],
    christConnection: 'Hezekiah\'s life was extended by prayer. Christ\'s resurrection gives eternal life—not added years but endless life.',
  },
  {
    bookId: '2-kings',
    chapter: 21,
    title: 'Manasseh\'s Wickedness; Amon',
    summary: 'Manasseh becomes king at 12, reigning 55 years—the longest in Judah. He does evil in the LORD\'s sight according to the abominations of the nations God drove out. He rebuilds the high places Hezekiah destroyed, erects altars to Baal, makes an Asherah like Ahab. He worships the host of heaven. He builds altars for these in the LORD\'s temple—where God said He would put His name forever. He burns his son as an offering, practices fortune-telling, omens, mediums, and necromancers. He puts the Asherah image in the temple. He sheds so much innocent blood that Jerusalem is filled from one end to the other. The LORD speaks through the prophets: Manasseh has done things more evil than the Amorites. I am bringing such disaster that everyone who hears will have both ears tingle. I will stretch over Jerusalem the measuring line of Samaria and the plumb line of Ahab\'s house. I will wipe Jerusalem as one wipes a dish. I will forsake the remnant and give them to their enemies. Manasseh dies; Amon his son reigns two years, doing evil. His servants conspire and kill him in his palace. The people kill the conspirators and make Josiah his son king.',
    keyThemes: ['Worst king ever', 'All abominations restored', 'Innocent blood shed', 'Judgment decreed'],
    christConnection: 'Manasseh\'s blood guilt condemned Judah. Christ\'s blood speaks a better word than Abel\'s—forgiveness instead of judgment.',
  },
  {
    bookId: '2-kings',
    chapter: 22,
    title: 'Josiah\'s Reforms; The Book of the Law Found',
    summary: 'Josiah becomes king at 8, reigning 31 years. He does right in the LORD\'s eyes, walking in David\'s way without turning aside. In his eighteenth year, he sends Shaphan the secretary to the temple to have the collected money given to workmen for repairs. Hilkiah the high priest finds "the Book of the Law" in the temple. Shaphan brings it to the king and reads it to him. When Josiah hears the words, he tears his clothes. He sends officials to inquire of the LORD: great is the wrath kindled against us because our fathers didn\'t obey this book\'s words. They go to Huldah the prophetess. She says: thus says the LORD—I will bring disaster on this place and its inhabitants, all the words of the book. Because they have forsaken Me and burned incense to other gods, My wrath is kindled and will not be quenched. But to Josiah say: because your heart was tender and you humbled yourself when you heard what I spoke against this place, tearing your clothes and weeping before Me, I have heard you. You shall be gathered to your grave in peace; your eyes shall not see the disaster I will bring.',
    keyThemes: ['Temple repairs', 'Book of the Law found', 'Josiah tears his clothes', 'Huldah\'s prophecy'],
    christConnection: 'Josiah\'s heart was tender to God\'s word. Christ came to fulfill that word—every promise finds its Yes in Him.',
  },
  {
    bookId: '2-kings',
    chapter: 23,
    title: 'Josiah\'s Reforms; His Death',
    summary: 'Josiah gathers all the elders of Judah and Jerusalem. He reads all the Book of the Covenant found in the temple to the people. He makes a covenant to follow the LORD and keep His commands with all his heart. All the people join the covenant. Josiah removes from the temple all vessels made for Baal, Asherah, and the host of heaven—he burns them. He deposes the idolatrous priests. He brings out the Asherah from the temple and burns it at the Kidron. He breaks down the quarters of male cult prostitutes. He defiles Topheth so no one can burn sons or daughters to Molech. He removes horses dedicated to the sun and burns the chariots. He destroys altars kings made on rooftops and those Manasseh made in the temple courts. He defiles the high places Solomon built for foreign gods. He pulls down the altar at Bethel that Jeroboam made, burning bones on it to defile it—fulfilling the prophecy from 1 Kings 13. He executes all the high place priests of the northern cities. He keeps Passover—none like it since the judges\' days. He removes mediums, necromancers, teraphim, idols. Before him there was no king who turned to the LORD with all his heart, soul, and might; none arose after him like him. Yet the LORD didn\'t turn from His fierce anger against Judah because of all Manasseh\'s provocation. Pharaoh Neco of Egypt marches north to help Assyria against Babylon. Josiah intercepts him at Megiddo. Neco kills Josiah. The people make Jehoahaz his son king.',
    keyThemes: ['Comprehensive reforms', 'Bethel altar defiled as prophesied', 'Greatest Passover since the judges', 'Josiah killed at Megiddo'],
    christConnection: 'Josiah found and obeyed God\'s word with unprecedented zeal. Christ perfectly obeyed the Father\'s will—our righteousness is in Him alone.',
  },
  {
    bookId: '2-kings',
    chapter: 24,
    title: 'Babylon\'s Rise; Jehoiachin Exiled',
    summary: 'Jehoahaz reigns three months, doing evil. Pharaoh Neco deposes him and takes him to Egypt (where he dies). Neco imposes tribute and makes Eliakim king, renaming him Jehoiakim. Jehoiakim reigns eleven years, doing evil. In his days, Nebuchadnezzar of Babylon comes; Jehoiakim serves him three years, then rebels. The LORD sends Chaldean, Syrian, Moabite, and Ammonite raiders—for the sins of Manasseh, including innocent blood. Jehoiakim dies; Jehoiachin his son succeeds. Jehoiachin reigns three months, doing evil. Nebuchadnezzar besieges Jerusalem. Jehoiachin surrenders himself with his mother, servants, officials, and officers. Nebuchadnezzar carries off all the treasures of the temple and palace, cuts in pieces all the gold vessels Solomon made. He deports all Jerusalem—officials, warriors (10,000), craftsmen, smiths—leaving only the poorest. He takes Jehoiachin to Babylon along with the king\'s mother, wives, officials, and the land\'s leading men. He makes Mattaniah king (Jehoiachin\'s uncle), renaming him Zedekiah.',
    keyThemes: ['Jehoahaz deposed by Egypt', 'Jehoiakim rebels against Babylon', 'First deportation under Jehoiachin', 'Zedekiah made puppet king'],
    christConnection: 'The temple treasures were carried to Babylon. Christ\'s body—the true temple—was destroyed but raised. No enemy can plunder what God raises.',
  },
  {
    bookId: '2-kings',
    chapter: 25,
    title: 'Fall of Jerusalem; Exile to Babylon',
    summary: 'Zedekiah reigns eleven years, doing evil. He rebels against Babylon. In his ninth year, Nebuchadnezzar besieges Jerusalem. The siege lasts until Zedekiah\'s eleventh year. Famine is severe—no food for the people. The wall is breached; Zedekiah and soldiers flee by night through the gate between the walls near the king\'s garden. The Chaldean army pursues, captures Zedekiah at Jericho (his army scatters). They bring him to Nebuchadnezzar at Riblah. Zedekiah\'s sons are killed before his eyes; then his eyes are put out. He\'s bound and taken to Babylon. Nebuzaradan, captain of the guard, burns the temple, the palace, and every great house. The Chaldeans break down Jerusalem\'s walls. He deports the remaining population except the poorest to work the land. They break up the bronze pillars, stands, and sea, carrying the bronze to Babylon. They take the pots, shovels, snuffers, dishes, vessels of gold and silver. The chief priest, second priest, three doorkeepers, and other officials are taken to Riblah and executed. Gedaliah is appointed governor over the remaining people. Ishmael of royal blood kills Gedaliah; the people flee to Egypt, fearing Babylon. In the 37th year of Jehoiachin\'s exile, Evil-merodach of Babylon releases him from prison, speaks kindly, gives him a seat above other captive kings, and provides a regular allowance for the rest of his life.',
    keyThemes: ['Jerusalem falls', 'Temple burned', 'Zedekiah blinded', 'Jehoiachin released—hope for David\'s line'],
    christConnection: 'The book ends with Jehoiachin elevated in Babylon—a glimmer of hope for David\'s line. From this broken line, Christ would come to reign forever.',
  },
];

// 1 CHRONICLES CHAPTERS
export const FIRST_CHRONICLES_CHAPTERS: ChapterSummary[] = [
  {
    bookId: '1-chronicles',
    chapter: 1,
    title: 'From Adam to Abraham: The Genealogical Foundation',
    summary: 'First Chronicles opens with an extensive genealogy tracing humanity from Adam through the patriarchs to Abraham. This is no mere list of names but a theological statement about God\'s sovereign ordering of history toward His redemptive purposes. The chronicler, writing to post-exilic Jews who had returned from Babylon, establishes that Israel\'s identity is rooted in God\'s ancient covenant promises. Each name represents God\'s providential preservation of the messianic line through which salvation would come.',
    keyThemes: ['Divine providence in history', 'Covenant continuity', 'Messianic lineage', 'God\'s faithfulness across generations'],
    christConnection: 'The genealogy from Adam to Abraham establishes the first link in the chain leading to Christ. Matthew\'s gospel will later trace Jesus\' lineage through this same line, showing that God\'s plan of redemption was unfolding from the very beginning of human history.'
  },
  {
    bookId: '1-chronicles',
    chapter: 2,
    title: 'The Sons of Israel and Judah\'s Prominence',
    summary: 'This chapter records the twelve sons of Israel and then focuses extensively on the tribe of Judah, from which the Davidic dynasty would arise. The detailed treatment of Judah\'s descendants, including the line through Perez to Jesse and David, demonstrates God\'s particular care for the royal and messianic tribe. The chronicler shows that even through complex family situations and various circumstances, God preserved His chosen line.',
    keyThemes: ['Judah\'s preeminence', 'Davidic lineage', 'Divine election', 'Providential preservation'],
    christConnection: 'The extensive focus on Judah\'s genealogy anticipates the "Lion of Judah" prophecy and Christ\'s descent from this royal tribe. The line through Perez, Ram, and Jesse to David traces the path to Christ our King.'
  },
  {
    bookId: '1-chronicles',
    chapter: 3,
    title: 'David\'s Dynasty: The Royal Line',
    summary: 'The genealogy of David\'s descendants is presented, listing his sons born in Hebron and Jerusalem, then tracing the royal line through Solomon to the exile and beyond. This chapter affirms God\'s faithfulness to His promise that David\'s throne would be established forever. Even through the trauma of exile, the Davidic line continued, pointing to an ultimate fulfillment in a greater Son of David.',
    keyThemes: ['Davidic covenant', 'Royal succession', 'Hope beyond exile', 'God\'s faithfulness to promises'],
    christConnection: 'The continuation of David\'s line through exile and restoration demonstrates God\'s commitment to His covenant. Christ is the ultimate heir to David\'s throne, fulfilling the promise of an eternal kingdom.'
  },
  {
    bookId: '1-chronicles',
    chapter: 4,
    title: 'Judah and Simeon: Blessing Amidst Obscurity',
    summary: 'Further genealogies of Judah and Simeon are recorded, including the remarkable prayer of Jabez who called upon God to bless him and enlarge his territory. God graciously granted his request. The chapter shows that even lesser-known figures in Israel\'s history found favor with God through faith and prayer. Simeon\'s tribe, though absorbed into Judah, maintained its distinct identity.',
    keyThemes: ['Effective prayer', 'Divine blessing', 'Faith\'s reward', 'God\'s attentiveness to the humble'],
    christConnection: 'Jabez\'s prayer for blessing and protection anticipates believers\' access to God through Christ. We too can boldly approach God\'s throne of grace, finding mercy and blessing through our greater Intercessor.'
  },
  {
    bookId: '1-chronicles',
    chapter: 5,
    title: 'Reuben, Gad, and Half-Manasseh: Transjordan Tribes',
    summary: 'The genealogies of the tribes east of the Jordan are recorded. Reuben lost his birthright due to sin, a sobering reminder of sin\'s consequences. These tribes prospered when they trusted God, defeating the Hagrites through prayer and faith. However, they ultimately fell into idolatry and were carried away by Assyria. Their story illustrates both the power of faithful dependence on God and the danger of spiritual unfaithfulness.',
    keyThemes: ['Consequences of sin', 'Victory through prayer', 'Spiritual unfaithfulness', 'Divine judgment'],
    christConnection: 'The contrast between victory through faith and defeat through unfaithfulness points to Christ as our only hope for consistent faithfulness. He alone never failed, and through Him we receive both forgiveness and power.'
  },
  {
    bookId: '1-chronicles',
    chapter: 6,
    title: 'The Tribe of Levi: Priests and Levites',
    summary: 'Extensive attention is given to the Levites, especially the high priestly line from Aaron through to the exile. The organization of temple musicians under David is detailed, and the Levitical cities throughout Israel are listed. This chapter underscores the centrality of worship and the priesthood in Israel\'s life. The chronicler, writing for the restored community, emphasizes the importance of proper worship led by authorized ministers.',
    keyThemes: ['Priestly ministry', 'Worship organization', 'Levitical service', 'Temple centrality'],
    christConnection: 'The elaborate priesthood and worship system points to Christ, our great High Priest who offers perfect worship and intercession. The Levites\' dedication to God\'s service foreshadows Christ\'s complete consecration to the Father\'s will.'
  },
  {
    bookId: '1-chronicles',
    chapter: 7,
    title: 'Northern Tribes: Issachar, Benjamin, Naphtali, Manasseh, Ephraim, Asher',
    summary: 'The genealogies of several northern tribes are recorded more briefly than Judah and Levi, reflecting the chronicler\'s emphasis on the southern kingdom and temple worship. Yet their inclusion shows that all twelve tribes remained part of God\'s covenant people. The varying fortunes of these tribes demonstrate God\'s dealings with His people according to their faithfulness.',
    keyThemes: ['Tribal unity', 'Covenant people', 'Military strength', 'Divine oversight'],
    christConnection: 'The preservation of all tribal genealogies, even briefly, shows God\'s faithfulness to all His people. Christ came to gather the scattered children of God from all tribes, making one new people of all who believe.'
  },
  {
    bookId: '1-chronicles',
    chapter: 8,
    title: 'Benjamin and Saul\'s Family',
    summary: 'The tribe of Benjamin receives special attention, culminating in the genealogy of Saul, Israel\'s first king. Though Saul\'s dynasty failed, his lineage is preserved in the sacred record. The Benjamites\' location around Jerusalem and their role in Israel\'s history made them significant despite being the smallest tribe. This chapter provides transition toward the narrative sections focusing on David.',
    keyThemes: ['Saul\'s lineage', 'Tribal identity', 'Jerusalem\'s importance', 'Historical continuity'],
    christConnection: 'Though Saul\'s line gave way to David\'s, both find their ultimate fulfillment in Christ. Paul, the apostle to the Gentiles, was of Benjamin, showing God\'s ongoing purpose for this tribe in redemptive history.'
  },
  {
    bookId: '1-chronicles',
    chapter: 9,
    title: 'The Returning Exiles: Restoration Begins',
    summary: 'This pivotal chapter lists those who returned from Babylonian exile to Jerusalem, especially emphasizing the priests, Levites, and temple servants. The genealogies connect post-exilic Israel with pre-exilic Israel, showing continuity of God\'s people. The chapter also describes the duties of various Levitical families in temple service, preparing for the narrative focus on David\'s temple preparations.',
    keyThemes: ['Restoration from exile', 'Covenant continuity', 'Temple service renewed', 'Divine faithfulness'],
    christConnection: 'The return from exile and restoration of worship foreshadows the greater restoration Christ brings. He delivers His people from the exile of sin and restores them to fellowship with God in true worship.'
  },
  {
    bookId: '1-chronicles',
    chapter: 10,
    title: 'Saul\'s Death: The End of an Era',
    summary: 'The narrative section begins with Saul\'s death at Mount Gilboa, where the Philistines defeated Israel. The chronicler emphasizes that Saul died because of his unfaithfulness to the Lord, particularly his consulting a medium and not seeking the Lord. This theological interpretation sets the stage for David\'s reign, contrasting Saul\'s unfaithfulness with David\'s heart for God.',
    keyThemes: ['Consequences of unfaithfulness', 'Divine judgment', 'Seeking false guidance', 'Transition of kingdoms'],
    christConnection: 'Saul\'s failure through unfaithfulness contrasts with Christ\'s perfect faithfulness. Where Saul failed to seek the Lord, Christ always did the Father\'s will, making Him the faithful King we need.'
  },
  {
    bookId: '1-chronicles',
    chapter: 11,
    title: 'David Crowned King: Unity Restored',
    summary: 'All Israel gathers at Hebron to make David king, recognizing God\'s choice and David\'s proven leadership. David then captures Jerusalem (the stronghold of Zion) and makes it his capital. The chapter lists David\'s mighty men who supported him, emphasizing the unity and strength God provided for His chosen king. These warriors\' exploits demonstrate God\'s power working through faithful servants.',
    keyThemes: ['National unity under God\'s king', 'Jerusalem as capital', 'Faithful warriors', 'Divine empowerment'],
    christConnection: 'David\'s coronation over all Israel pictures Christ\'s ultimate reign over all peoples. Jerusalem, captured as David\'s city, becomes the place of Christ\'s death and resurrection, the spiritual center of redemption.'
  },
  {
    bookId: '1-chronicles',
    chapter: 12,
    title: 'David\'s Growing Support: Warriors Gather',
    summary: 'This chapter catalogs the warriors who joined David at various stages of his journey to kingship, from the wilderness period to Hebron. Men from every tribe, including Saul\'s own tribe of Benjamin, recognized David as God\'s chosen king. The growing numbers and skills of these warriors demonstrate God\'s providential building of David\'s kingdom. The chapter concludes with the great assembly that made David king.',
    keyThemes: ['Divine providence', 'Growing recognition', 'Tribal unity', 'Warrior faithfulness'],
    christConnection: 'As warriors gathered to David recognizing God\'s anointed, so believers from every tribe and nation gather to Christ, the greater Son of David, in His kingdom that will never end.'
  },
  {
    bookId: '1-chronicles',
    chapter: 13,
    title: 'The Ark\'s First Journey: Uzzah\'s Death',
    summary: 'David\'s first attempt to bring the ark to Jerusalem ends in tragedy when Uzzah touches the ark and is struck dead. Though David\'s intention was good, the method violated God\'s instructions—the ark should have been carried by Levites using poles, not on a cart. This sobering event teaches that God must be worshipped according to His own prescribed way. The ark remains at Obed-edom\'s house.',
    keyThemes: ['Proper worship', 'Divine holiness', 'Good intentions insufficient', 'Obedience over zeal'],
    christConnection: 'God\'s holiness, which struck Uzzah dead, is fully satisfied in Christ. Through Him alone we can approach God safely. Christ is our way to the Father, the only proper approach to divine holiness.'
  },
  {
    bookId: '1-chronicles',
    chapter: 14,
    title: 'David\'s Kingdom Established',
    summary: 'God\'s blessing on David becomes evident as Hiram of Tyre sends materials and craftsmen for David\'s palace. David\'s family grows, and he defeats the Philistines twice, each time inquiring of the Lord first. These victories demonstrate that David has learned from the ark incident—he now seeks God\'s guidance in everything. His fame spreads among the nations as God establishes his throne.',
    keyThemes: ['Seeking God\'s guidance', 'Divine blessing', 'Victory through obedience', 'Kingdom establishment'],
    christConnection: 'David\'s inquiring of the Lord before each battle models dependence on God that Christ perfectly demonstrated. Jesus always sought the Father\'s will, and through His obedience, God\'s kingdom is eternally established.'
  },
  {
    bookId: '1-chronicles',
    chapter: 15,
    title: 'The Ark Properly Transported',
    summary: 'David prepares properly this time, having the Levites carry the ark as God commanded through Moses. He organizes the Levites and musicians for worship, and the ark is brought to Jerusalem with great celebration. David himself dances before the Lord with all his might. This chapter shows true worship: joyful, reverent, and according to God\'s Word.',
    keyThemes: ['Proper worship order', 'Joyful celebration', 'Levitical responsibility', 'David\'s worshipful heart'],
    christConnection: 'The proper ordering of worship according to God\'s Word anticipates Christ, who fulfills all righteousness. David\'s wholehearted joy in God\'s presence pictures the joy set before Christ and the joy believers have in Him.'
  },
  {
    bookId: '1-chronicles',
    chapter: 16,
    title: 'David\'s Psalm of Thanksgiving',
    summary: 'With the ark now in Jerusalem, David appoints Levites for continual ministry before it and leads Israel in a magnificent psalm of thanksgiving. This psalm (also found in Psalms 96, 105, and 106) praises God\'s covenant faithfulness, wonderful deeds, and supreme glory. David establishes regular worship at the tabernacle, with Asaph and others leading praise while priests offer sacrifices.',
    keyThemes: ['Covenant faithfulness', 'Continual worship', 'God\'s mighty deeds', 'Universal praise'],
    christConnection: 'David\'s psalm of thanksgiving for God\'s salvation and covenant faithfulness finds its fullest expression in Christ. Through Him, God\'s covenant promises are all "Yes and Amen," and we offer continual praise through our great High Priest.'
  },
  {
    bookId: '1-chronicles',
    chapter: 17,
    title: 'The Davidic Covenant: God\'s Promise to David',
    summary: 'David desires to build God a permanent house, but through Nathan the prophet, God declares that He will build David a house—an eternal dynasty. God promises that David\'s son will build the temple, and that David\'s throne will be established forever. David responds with humble prayer, marveling at God\'s grace in choosing him and making such magnificent promises.',
    keyThemes: ['Davidic covenant', 'Eternal kingdom promised', 'Humble response to grace', 'God builds His house'],
    christConnection: 'The Davidic covenant finds its ultimate fulfillment in Christ, David\'s greater Son who reigns forever. He is the temple not made with hands, and His kingdom has no end. David\'s humble response models our wonder at God\'s grace in Christ.'
  },
  {
    bookId: '1-chronicles',
    chapter: 18,
    title: 'David\'s Military Victories',
    summary: 'God gives David victories over the Philistines, Moabites, Zobah, Arameans, and Edomites. David dedicates the spoils to the Lord and administers justice and righteousness throughout Israel. His officials are listed, showing the organized administration of his kingdom. These victories fulfill God\'s promises and establish the peace necessary for the future temple construction.',
    keyThemes: ['God-given victory', 'Dedicated spoils', 'Just administration', 'Peace through conquest'],
    christConnection: 'David\'s victories over Israel\'s enemies picture Christ\'s victory over sin, death, and Satan. As David dedicated spoils to God, Christ leads captivity captive, giving gifts to His church from His victorious work.'
  },
  {
    bookId: '1-chronicles',
    chapter: 19,
    title: 'Victory Over Ammon and Aram',
    summary: 'When David\'s ambassadors are shamefully treated by the Ammonites, war ensues. The Ammonites hire Aramean mercenaries, but Joab and the Israelite army defeat them decisively. The Arameans make peace and become subject to David. This account shows God\'s protection of David\'s honor and kingdom, demonstrating that those who oppose God\'s anointed will not prosper.',
    keyThemes: ['Vindication of honor', 'Decisive victory', 'Enemies subdued', 'God\'s protection'],
    christConnection: 'The defeat of those who dishonor God\'s anointed king points to Christ\'s triumph over all who reject Him. God vindicates His Son, and every knee will bow to the King whom many despised.'
  },
  {
    bookId: '1-chronicles',
    chapter: 20,
    title: 'Final Victories: Ammon and the Giants',
    summary: 'The war against Ammon concludes with the capture of their capital and great spoil. David\'s warriors also defeat Philistine giants, descendants of Rapha. The chronicler notably omits David\'s sin with Bathsheba (found in 2 Samuel 11-12), focusing instead on God\'s victories through David. These accounts confirm God\'s faithfulness to His promises regarding David\'s kingdom.',
    keyThemes: ['Complete victory', 'Giants defeated', 'Divine faithfulness', 'Kingdom established'],
    christConnection: 'David\'s warriors defeating giants pictures Christ\'s victory over every spiritual enemy, no matter how formidable. Through Him, we are more than conquerors over the giants of sin, death, and Satan.'
  },
  {
    bookId: '1-chronicles',
    chapter: 21,
    title: 'David\'s Census and Its Consequences',
    summary: 'Satan incites David to number Israel, and despite Joab\'s objection, David proceeds. This census, motivated by pride rather than trust in God, brings divine judgment—a plague kills 70,000 Israelites. At God\'s command through the prophet Gad, David purchases the threshing floor of Ornan the Jebusite and offers sacrifice there. God stops the plague, and this site becomes the future location of the temple.',
    keyThemes: ['Pride\'s danger', 'Divine judgment', 'Repentance and mercy', 'Temple site chosen'],
    christConnection: 'The place of judgment and mercy, purchased by David, becomes the temple site where sacrifices point to Christ. David\'s altar, stopping the plague through sacrifice, foreshadows Christ\'s sacrifice that stops God\'s wrath against sin.'
  },
  {
    bookId: '1-chronicles',
    chapter: 22,
    title: 'Preparations for the Temple',
    summary: 'David recognizes the threshing floor as the place for God\'s house and begins massive preparations. Though he cannot build the temple himself (being a man of war), he prepares abundantly: iron, bronze, cedar, gold, silver, and skilled workers. David charges Solomon to build the temple and to keep God\'s law, promising that God will give him wisdom and success.',
    keyThemes: ['Generous preparation', 'Solomon\'s charge', 'Obedience required', 'Peace for temple building'],
    christConnection: 'David\'s generous preparation for what he could not complete pictures God\'s preparation throughout history for Christ\'s work. Solomon, the man of peace who builds God\'s house, points to Christ, our Prince of Peace who builds the true temple.'
  },
  {
    bookId: '1-chronicles',
    chapter: 23,
    title: 'Organization of the Levites',
    summary: 'In his old age, David organizes the Levites for temple service, numbering those thirty years and older at 38,000. He divides them into four groups: those assisting the priests, officers and judges, gatekeepers, and musicians. Their duties include caring for the temple courts, chambers, and all sacred duties except offering sacrifices on the altar.',
    keyThemes: ['Organized worship', 'Levitical duties', 'Preparation for worship', 'Service to God'],
    christConnection: 'The Levites\' organized service in the temple foreshadows the ordered body of Christ, where each member serves according to their gifts. Christ organizes His church for effective worship and service.'
  },
  {
    bookId: '1-chronicles',
    chapter: 24,
    title: 'Divisions of the Priests',
    summary: 'The descendants of Aaron are divided into twenty-four courses for temple service, with lots cast to determine their order. This organization ensured regular, systematic worship throughout the year. Each division would serve for specific periods, maintaining continuity of worship before the Lord. The remaining Levites are also organized by lot.',
    keyThemes: ['Priestly divisions', 'Organized worship rotation', 'Divine ordering by lot', 'Continuous service'],
    christConnection: 'The twenty-four priestly courses maintaining continuous worship point to Christ\'s perpetual priesthood. He ever lives to make intercession, never needing replacement or rotation, serving eternally as our High Priest.'
  },
  {
    bookId: '1-chronicles',
    chapter: 25,
    title: 'Temple Musicians Organized',
    summary: 'David and the commanders organize the temple musicians under Asaph, Heman, and Jeduthun. These skilled musicians prophesied with lyres, harps, and cymbals. Twenty-four divisions of twelve musicians each were established, providing 288 trained musicians for temple worship. Music was considered prophetic ministry, with God\'s Spirit inspiring praise and instruction.',
    keyThemes: ['Worship through music', 'Prophetic singing', 'Skilled service', 'Organized praise'],
    christConnection: 'Music as prophetic ministry points to worship in the Spirit that Christ enables. The organized praise of skilled musicians foreshadows the church\'s worship, where we sing psalms, hymns, and spiritual songs with grace in our hearts.'
  },
  {
    bookId: '1-chronicles',
    chapter: 26,
    title: 'Gatekeepers, Treasurers, and Officials',
    summary: 'The gatekeepers are organized by divisions, assigned to various gates of the temple complex. The treasurers of the dedicated gifts and the officials overseeing external affairs are also organized. This chapter shows the comprehensive organization needed for God\'s house—from the most prominent duties to the seemingly mundane, all were ordered and valued.',
    keyThemes: ['Faithful stewardship', 'Comprehensive organization', 'Temple security', 'Administrative faithfulness'],
    christConnection: 'The gatekeepers guarding God\'s house point to Christ who guards His church. The treasurers of sacred things picture those entrusted with the gospel. All service in God\'s house, however humble, has dignity and importance.'
  },
  {
    bookId: '1-chronicles',
    chapter: 27,
    title: 'Military and Administrative Organization',
    summary: 'The military divisions are organized by month, each comprising 24,000 men under appointed commanders. David\'s tribal leaders, overseers of royal property, and personal counselors are also listed. This comprehensive organization demonstrates the stability and order of David\'s kingdom, providing the peaceful context in which Solomon would build the temple.',
    keyThemes: ['Military organization', 'Administrative structure', 'Kingdom stability', 'Wise counsel'],
    christConnection: 'The ordered kingdom under David\'s administration pictures Christ\'s kingdom, where all things work together in perfect order under His sovereign rule. His government continually increases, bringing eternal peace and righteousness.'
  },
  {
    bookId: '1-chronicles',
    chapter: 28,
    title: 'David\'s Charge to Solomon and Israel',
    summary: 'David assembles Israel\'s leaders and publicly charges Solomon with the temple project. He reveals that God chose Solomon to build the temple, providing detailed plans received from the Spirit. David encourages Solomon to be strong, for God will not forsake him until the work is done. The temple plans include every detail, all given by divine inspiration.',
    keyThemes: ['Divine selection', 'Spirit-given plans', 'Public charge', 'Encouragement to faithfulness'],
    christConnection: 'The Spirit-given temple plans point to Christ, the true temple whose design was in God\'s eternal purpose. As Solomon was chosen to build, so Christ was appointed to build the church, the living temple of God.'
  },
  {
    bookId: '1-chronicles',
    chapter: 29,
    title: 'Generous Offerings and David\'s Prayer',
    summary: 'David leads in generous giving for the temple, and the leaders and people give willingly and joyfully. David offers a magnificent prayer of praise, acknowledging that everything comes from God and we only give back what He has provided. Solomon is crowned king, and David dies in good old age, having prepared everything for his son and for God\'s house.',
    keyThemes: ['Generous giving', 'Joyful worship', 'All belongs to God', 'Faithful completion'],
    christConnection: 'David\'s acknowledgment that all wealth comes from God anticipates Christ\'s teaching about stewardship. The generous, joyful giving for God\'s house foreshadows the church\'s giving, motivated by Christ\'s surpassing generosity toward us.'
  }
];

// 2 CHRONICLES CHAPTERS
export const SECOND_CHRONICLES_CHAPTERS: ChapterSummary[] = [
  {
    bookId: '2-chronicles',
    chapter: 1,
    title: 'Solomon\'s Wisdom: The Foundation of His Reign',
    summary: 'Solomon establishes his kingdom and goes to Gibeon, where the tabernacle of meeting stands, to seek the Lord. God appears and offers to give Solomon whatever he asks. Solomon requests wisdom and knowledge to govern God\'s people, and God, pleased with this selfless request, grants him not only wisdom but also unprecedented riches and honor. This wisdom becomes the foundation for everything that follows.',
    keyThemes: ['Seeking God first', 'Wisdom over wealth', 'Divine generosity', 'Leadership foundations'],
    christConnection: 'Solomon\'s wisdom, divinely granted for governing God\'s people, points to Christ in whom are hidden all treasures of wisdom and knowledge. Jesus is greater than Solomon, the truly wise King who governs with perfect understanding.'
  },
  {
    bookId: '2-chronicles',
    chapter: 2,
    title: 'Preparations for Temple Construction',
    summary: 'Solomon commissions Hiram of Tyre to assist in building the temple, sending detailed specifications for the materials and craftsmen needed. Solomon acknowledges that no house can contain God but that this temple will be a place where His name dwells and where sacrifice is offered. The massive scale of the project is described, including the conscription of alien workers.',
    keyThemes: ['International cooperation', 'Divine transcendence', 'Careful preparation', 'Skilled craftsmanship'],
    christConnection: 'Solomon\'s recognition that heaven cannot contain God, much less a temple, points to the mystery of the incarnation—God dwelling in human flesh in Christ, the true temple not made with hands.'
  },
  {
    bookId: '2-chronicles',
    chapter: 3,
    title: 'Temple Construction Begins',
    summary: 'Solomon begins building the temple on Mount Moriah, where the Lord had appeared to David and where Abraham had offered Isaac. The dimensions and specifications are given: the vestibule, the main hall, the Most Holy Place. Everything is overlaid with gold. Two cherubim of gold stand in the Most Holy Place with their wings spanning the entire width of the room.',
    keyThemes: ['Sacred location', 'Elaborate beauty', 'Divine specifications', 'Continuity with patriarchs'],
    christConnection: 'The temple built on Mount Moriah, where Abraham offered Isaac, connects the place of substitutionary sacrifice to the place of God\'s dwelling. Christ, our sacrifice and temple, fulfills both meanings of this sacred site.'
  },
  {
    bookId: '2-chronicles',
    chapter: 4,
    title: 'Temple Furnishings Completed',
    summary: 'The bronze altar, the great cast "sea" for priestly washing, and all the furnishings are described. Ten lavers, ten lampstands, ten tables, and countless implements of gold and bronze are crafted. The care and precision in creating these objects demonstrate the importance of approaching God with the best that human craftsmanship can offer, according to divine pattern.',
    keyThemes: ['Worship implements', 'Symbolic furnishings', 'Excellence in worship', 'Cleansing provisions'],
    christConnection: 'The bronze laver for cleansing points to Christ\'s cleansing blood. The golden lampstands picture Christ as the light of the world. Every furnishing finds its reality in the person and work of our Lord.'
  },
  {
    bookId: '2-chronicles',
    chapter: 5,
    title: 'The Ark Enters the Temple',
    summary: 'With all work completed, Solomon assembles Israel to bring the ark of the covenant into the temple. The priests carry the ark into the Most Holy Place, beneath the cherubim. When the priests withdraw, the cloud of God\'s glory fills the temple so intensely that the priests cannot continue ministering. God has taken up residence among His people.',
    keyThemes: ['Divine presence', 'Glory cloud', 'Covenant fulfillment', 'Worship climax'],
    christConnection: 'The glory cloud filling the temple points to Christ, the fullness of deity dwelling bodily. As God\'s presence filled Solomon\'s temple, so Christ\'s presence fills His church by the Holy Spirit, the true temple of God.'
  },
  {
    bookId: '2-chronicles',
    chapter: 6,
    title: 'Solomon\'s Prayer of Dedication',
    summary: 'Solomon blesses the assembly, recounting God\'s faithfulness to David. He then kneels before all Israel and prays an extensive prayer of dedication, asking God to hear prayers directed toward this temple—prayers for justice, forgiveness, rain, deliverance from enemies, and restoration from exile. Solomon acknowledges that God cannot be contained in any building but asks Him to attend to prayers made toward this place.',
    keyThemes: ['Prayer of dedication', 'Covenant faithfulness', 'Seeking forgiveness', 'Divine attentiveness'],
    christConnection: 'Solomon\'s prayer that God would hear from heaven when people pray toward the temple anticipates our prayers through Christ. Jesus, the true temple, is the one toward whom we direct our prayers, our mediator with the Father.'
  },
  {
    bookId: '2-chronicles',
    chapter: 7,
    title: 'God\'s Response: Fire and Glory',
    summary: 'When Solomon finishes praying, fire comes down from heaven consuming the sacrifices, and the glory of the Lord fills the temple. The people worship, and a great celebration lasting fourteen days ensues. God later appears to Solomon at night, promising to hear prayers made toward this place and giving the famous conditional promise: if His people humble themselves, pray, and turn from wickedness, He will heal their land.',
    keyThemes: ['Divine acceptance', 'Conditions for blessing', 'Humble prayer', 'Covenant response'],
    christConnection: 'The conditional promise in verse 14 anticipates the gospel: humility, prayer, seeking God\'s face, and repentance. These find their ultimate expression in coming to Christ, through whom God heals and forgives completely.'
  },
  {
    bookId: '2-chronicles',
    chapter: 8,
    title: 'Solomon\'s Achievements',
    summary: 'Solomon\'s building projects, administrative organization, and faithful adherence to worship regulations are described. He builds cities, establishes a navy, and organizes temple worship according to David\'s instructions. He maintains the festival calendar and priestly divisions. Everything operates according to divine pattern under Solomon\'s wise administration.',
    keyThemes: ['Organized worship', 'National prosperity', 'Faithful administration', 'Covenant obedience'],
    christConnection: 'Solomon\'s faithful organization of worship according to divine pattern points to Christ who perfectly fulfills all righteousness and orders His church according to the Father\'s will.'
  },
  {
    bookId: '2-chronicles',
    chapter: 9,
    title: 'The Queen of Sheba and Solomon\'s Glory',
    summary: 'The Queen of Sheba visits, tests Solomon with hard questions, and is overwhelmed by his wisdom and the magnificence of his kingdom. She blesses the Lord who set Solomon on the throne. The chapter describes Solomon\'s vast wealth, his throne of ivory and gold, and his international fame. Solomon\'s forty-year reign ends with his death and Rehoboam\'s succession.',
    keyThemes: ['Wisdom recognized', 'International renown', 'Unparalleled wealth', 'Kingdom glory'],
    christConnection: 'Jesus said a greater than Solomon is here. The Queen of Sheba came from afar to hear Solomon\'s wisdom; the nations will stream to Christ, whose wisdom and glory infinitely surpass Solomon\'s.'
  },
  {
    bookId: '2-chronicles',
    chapter: 10,
    title: 'The Kingdom Divides: Rehoboam\'s Folly',
    summary: 'Rehoboam goes to Shechem where all Israel has gathered to make him king. When the people request relief from Solomon\'s heavy burdens, Rehoboam rejects the elders\' wise counsel and follows the harsh advice of his young companions. His oppressive answer causes the northern tribes to revolt. Only Judah and Benjamin remain loyal to David\'s house.',
    keyThemes: ['Foolish leadership', 'Rejecting wisdom', 'Divine judgment', 'Kingdom division'],
    christConnection: 'Rehoboam\'s rejection of wise counsel leading to division contrasts with Christ, who always speaks the Father\'s words with perfect wisdom. In Christ, God unites what human folly divides.'
  },
  {
    bookId: '2-chronicles',
    chapter: 11,
    title: 'Rehoboam Strengthens Judah',
    summary: 'God forbids Rehoboam from fighting to recover the northern tribes—the division is from Him. Rehoboam fortifies Judah\'s cities and is strengthened by priests and Levites from the north who flee Jeroboam\'s idolatry. Those from all tribes who seek the Lord come to Jerusalem to worship, strengthening Judah for three years while they walk in David\'s and Solomon\'s ways.',
    keyThemes: ['Accepting God\'s discipline', 'Remnant faithfulness', 'True worship', 'Divine sovereignty'],
    christConnection: 'The faithful remnant leaving idolatry to worship at Jerusalem pictures all who leave false religion to find true worship in Christ. God always preserves a remnant who seek Him.'
  },
  {
    bookId: '2-chronicles',
    chapter: 12,
    title: 'Shishak\'s Invasion: Humiliation and Mercy',
    summary: 'When Rehoboam\'s kingdom is established, he forsakes God\'s law, and all Israel with him. Shishak of Egypt invades with a vast army. The prophet Shemaiah declares this is judgment for forsaking God. Rehoboam and the leaders humble themselves, and God grants partial deliverance—they become Shishak\'s servants so they may learn the difference between serving God and serving earthly kingdoms.',
    keyThemes: ['Apostasy\'s consequences', 'Humility brings mercy', 'Learning through discipline', 'Partial restoration'],
    christConnection: 'The lesson of learning the difference between serving God and serving other masters points to Christ\'s teaching that we cannot serve two masters. Only in Christ do we find freedom from all other bondages.'
  },
  {
    bookId: '2-chronicles',
    chapter: 13,
    title: 'Abijah\'s Victory Over Jeroboam',
    summary: 'Abijah succeeds Rehoboam and leads Judah against the numerically superior forces of Jeroboam. Before battle, Abijah preaches to Israel, appealing to the Davidic covenant and the true worship at Jerusalem, contrasting it with Jeroboam\'s false worship. Despite being surrounded, Judah cries to the Lord and wins a devastating victory. Jeroboam never recovers his strength.',
    keyThemes: ['Covenant faithfulness', 'True vs. false worship', 'Crying to God in distress', 'Divine deliverance'],
    christConnection: 'Abijah\'s appeal to covenant and true worship points to Christ, through whom alone true worship is offered. His cry to God in the midst of battle pictures our dependence on Christ in every spiritual conflict.'
  },
  {
    bookId: '2-chronicles',
    chapter: 14,
    title: 'Asa\'s Godly Reign Begins',
    summary: 'Asa does what is right, removing foreign altars and high places, commanding Judah to seek the Lord. God gives the land rest, and Asa uses this peace to fortify cities and build an army. When an Ethiopian army of a million men invades, Asa calls on the Lord, acknowledging that human strength means nothing against such odds. God defeats the Ethiopians before Judah.',
    keyThemes: ['Seeking God', 'Peace through faithfulness', 'Dependence in crisis', 'Divine victory'],
    christConnection: 'Asa\'s confession that it makes no difference whether one is strong or weak—only God gives victory—points to our complete dependence on Christ. In our weakness, His strength is perfected.'
  },
  {
    bookId: '2-chronicles',
    chapter: 15,
    title: 'Asa\'s Reforms and Covenant Renewal',
    summary: 'The prophet Azariah encourages Asa with the message that God is with those who are with Him, but forsakes those who forsake Him. Asa takes courage and removes idols throughout the land. The people assemble to renew covenant, seeking God with their whole heart. Even the queen mother is removed from her position for idolatry. Asa\'s heart is wholly devoted to the Lord.',
    keyThemes: ['Prophetic encouragement', 'Thorough reform', 'Covenant renewal', 'Wholehearted devotion'],
    christConnection: 'The covenant renewal ceremony, with the people seeking God wholeheartedly, anticipates the new covenant in Christ. Through Him, God\'s law is written on our hearts, and we seek Him with undivided devotion.'
  },
  {
    bookId: '2-chronicles',
    chapter: 16,
    title: 'Asa\'s Failure: Trust in Human Alliance',
    summary: 'In his later years, Asa faces threat from Israel and, forgetting his earlier faith, makes an alliance with Syria rather than trusting God. The prophet Hanani rebukes him, reminding him of the Ethiopian victory through faith. Rather than repent, Asa angrily imprisons the prophet and oppresses some of the people. When diseased in his feet, he seeks only physicians, not the Lord. Asa dies after forty-one years.',
    keyThemes: ['Failure after success', 'Trust in human help', 'Rejecting reproof', 'Incomplete repentance'],
    christConnection: 'Asa\'s tragic failure to maintain trust in God throughout his life warns us of depending on human resources rather than Christ. Only He can keep us faithful to the end.'
  },
  {
    bookId: '2-chronicles',
    chapter: 17,
    title: 'Jehoshaphat\'s Godly Reign',
    summary: 'Jehoshaphat succeeds Asa and seeks the Lord, following David\'s earlier ways rather than Israel\'s idolatry. He removes high places and Asherim from Judah. In his third year, he sends officials and Levites to teach the law throughout Judah—a remarkable program of spiritual education. God establishes his kingdom, and surrounding nations bring tribute or fear to make war.',
    keyThemes: ['Seeking God early', 'Teaching God\'s law', 'National instruction', 'Divine establishment'],
    christConnection: 'Jehoshaphat\'s program of teaching God\'s law throughout the land pictures Christ\'s commission to teach all nations. The church continues this ministry of instruction in God\'s Word.'
  },
  {
    bookId: '2-chronicles',
    chapter: 18,
    title: 'Alliance with Ahab: Micaiah\'s Warning',
    summary: 'Jehoshaphat unwisely allies with wicked Ahab of Israel through marriage. When Ahab proposes war against Ramoth-gilead, Jehoshaphat asks to inquire of the Lord. Four hundred prophets promise success, but Jehoshaphat asks for a true prophet. Micaiah reveals that victory has been falsely prophesied; Ahab will die. Despite warnings, they proceed. Ahab is killed, but Jehoshaphat escapes.',
    keyThemes: ['Unequal alliances', 'True vs. false prophecy', 'God\'s sovereignty over deceit', 'Divine warning ignored'],
    christConnection: 'Micaiah standing alone speaking God\'s truth against popular false prophecy pictures Christ, the true prophet whom the majority rejected. His word alone is trustworthy.'
  },
  {
    bookId: '2-chronicles',
    chapter: 19,
    title: 'Jehoshaphat\'s Judicial Reforms',
    summary: 'Jehu the seer rebukes Jehoshaphat for helping the wicked Ahab but notes some good in him—he destroyed Asherim and set his heart to seek God. Jehoshaphat responds well to reproof, going throughout Judah to restore the people to the Lord. He appoints judges, charging them to judge for the Lord, not for man, with impartiality and integrity. Priests and Levites judge in Jerusalem.',
    keyThemes: ['Responding to reproof', 'Justice reform', 'Judicial integrity', 'Fearing God in judgment'],
    christConnection: 'The charge to judges to judge for the Lord with impartiality points to Christ, the righteous judge who judges not by appearance but with perfect justice. He is our just advocate and judge.'
  },
  {
    bookId: '2-chronicles',
    chapter: 20,
    title: 'Jehoshaphat\'s Victory Through Praise',
    summary: 'A vast army of Moabites and Ammonites threatens Judah. Jehoshaphat sets himself to seek the Lord, calling a national fast. His prayer acknowledges God\'s power and confesses Judah\'s helplessness. The Spirit comes on Jahaziel who declares the battle is God\'s—they need only stand still and see salvation. The next morning, Jehoshaphat appoints singers to go before the army praising God. As they praise, God sets ambushes and the enemies destroy each other.',
    keyThemes: ['Prayer in crisis', 'Faith over fear', 'Battle belongs to God', 'Power of praise'],
    christConnection: 'Victory through praise and standing still to see God\'s salvation pictures our warfare in Christ. He has won the battle; our role is to trust, praise, and watch Him work.'
  },
  {
    bookId: '2-chronicles',
    chapter: 21,
    title: 'Jehoram\'s Wicked Reign',
    summary: 'Jehoram becomes king and immediately kills all his brothers to secure his throne. He marries Ahab\'s daughter and leads Judah into idolatry like Israel. Edom and Libnah revolt against Judah\'s oppression. Elijah sends a letter prophesying judgment: a plague on Jehoram\'s house and a disease in his bowels. The prophecy is fulfilled—he dies painfully and unmourned.',
    keyThemes: ['Wicked influence through marriage', 'Violence and bloodshed', 'Prophetic judgment', 'Unmourned death'],
    christConnection: 'Jehoram\'s wicked reign following worldly alliance contrasts with Christ\'s perfect righteousness. The letter from Elijah shows God\'s prophetic word reaches even the most corrupt, offering opportunity for repentance.'
  },
  {
    bookId: '2-chronicles',
    chapter: 22,
    title: 'Ahaziah and Athaliah: Near Extinction',
    summary: 'Ahaziah reigns one year, following the wicked counsel of his mother Athaliah (Ahab\'s daughter). He allies with Joram of Israel and is killed by Jehu during his purge of Ahab\'s house. Athaliah then massacres all the royal seed to seize the throne. But one prince, Joash, is hidden by the priest\'s wife in the temple for six years while Athaliah rules. The Davidic line nearly perishes but is preserved by God.',
    keyThemes: ['Wicked counsel', 'Near extinction of royal line', 'God\'s hidden preservation', 'Seeds of restoration'],
    christConnection: 'The preservation of Joash from Athaliah\'s massacre pictures God\'s preservation of the messianic line. Despite Satan\'s attempts to destroy Christ\'s lineage, God sovereignly protects His purposes.'
  },
  {
    bookId: '2-chronicles',
    chapter: 23,
    title: 'Joash Crowned: Athaliah Overthrown',
    summary: 'Jehoiada the priest carefully plans a coup, bringing the hidden Joash forth in the seventh year. He makes a covenant with military commanders and Levites, revealing the king\'s son. They crown Joash while guards protect the temple and king. Athaliah is executed outside the temple. Jehoiada makes a covenant between the Lord, the king, and the people. Baal worship is destroyed, and proper temple worship is restored.',
    keyThemes: ['Covenant restoration', 'Rightful king revealed', 'Idolatry purged', 'Worship renewed'],
    christConnection: 'The hidden king revealed and crowned points to Christ, hidden for a time but revealed in fullness. The restoration of true worship through the king foreshadows what Christ accomplishes for His people.'
  },
  {
    bookId: '2-chronicles',
    chapter: 24,
    title: 'Joash\'s Temple Repair and Tragic End',
    summary: 'Joash, under Jehoiada\'s guidance, repairs the temple through a collection box that receives the people\'s willing offerings. Worship is restored as long as Jehoiada lives. But after the priest dies, Joash listens to wicked princes, abandons the temple, and returns to idolatry. When Zechariah, Jehoiada\'s son, prophesies against them, Joash has him killed in the temple court. Syria invades, and Joash\'s own servants assassinate him.',
    keyThemes: ['Good influence\'s power', 'Willing offerings', 'Apostasy after blessing', 'Shedding innocent blood'],
    christConnection: 'Zechariah\'s murder in the temple court, calling for God to avenge his blood, is referenced by Jesus as one of the crimes that Jerusalem\'s bloodguilt would require. Christ\'s blood speaks a better word than Zechariah\'s.'
  },
  {
    bookId: '2-chronicles',
    chapter: 25,
    title: 'Amaziah: Partial Obedience',
    summary: 'Amaziah does right, but not with a whole heart. He executes his father\'s murderers but spares their children according to the law. He hires Israelite mercenaries for war but dismisses them when a prophet warns him. Though he defeats Edom, he brings back their gods and worships them. When rebuked, he threatens the prophet. He then foolishly challenges Israel and is badly defeated. He dies by assassination.',
    keyThemes: ['Half-hearted devotion', 'Foolish idolatry', 'Pride before destruction', 'Rejecting prophetic warning'],
    christConnection: 'Amaziah\'s divided heart and adoption of Edom\'s gods after defeating them shows the danger of partial obedience. Christ calls for wholehearted devotion; He alone deserves our complete loyalty.'
  },
  {
    bookId: '2-chronicles',
    chapter: 26,
    title: 'Uzziah\'s Prosperity and Pride',
    summary: 'Uzziah begins well, seeking God under Zechariah\'s instruction, and God prospers him greatly. He strengthens Jerusalem, builds towers, digs cisterns, and develops a powerful army. But when strong, his heart is lifted up to his destruction. He enters the temple to burn incense—a priestly privilege. When the priests resist, he rages at them and is immediately struck with leprosy, remaining a leper until death.',
    keyThemes: ['Prosperity\'s danger', 'Pride and presumption', 'Boundaries in worship', 'Divine discipline'],
    christConnection: 'Uzziah\'s presumption in attempting priestly duties he was not authorized to perform contrasts with Christ who perfectly unites the offices of king and priest according to God\'s order, not human assumption.'
  },
  {
    bookId: '2-chronicles',
    chapter: 27,
    title: 'Jotham: Faithful but Limited Reform',
    summary: 'Jotham does right before the Lord, like his father Uzziah, but learns from Uzziah\'s sin—he does not enter the temple. He builds extensively and defeats the Ammonites. The chronicler notes that he "ordered his ways before the Lord," yet the people continue in corruption. Jotham\'s reign shows that even godly personal example cannot fully reform a corrupt nation without deeper spiritual change.',
    keyThemes: ['Learning from others\' sins', 'Consistent faithfulness', 'Limited reform', 'Personal righteousness'],
    christConnection: 'Jotham\'s personal faithfulness amid national corruption points to the need for deeper transformation than example alone can provide—the heart change that only Christ can accomplish through the new covenant.'
  },
  {
    bookId: '2-chronicles',
    chapter: 28,
    title: 'Ahaz: Depth of Apostasy',
    summary: 'Ahaz is utterly wicked, walking in Israel\'s sins, making molten images for Baal, burning his sons as offerings, and sacrificing on every high place. God brings Syria and Israel against him, killing thousands and taking captives. The prophet Oded persuades Israel to return the Judean captives. Ahaz responds to his troubles by increasing his sin, worshipping Syrian gods and closing the temple. His reign represents Judah\'s nadir.',
    keyThemes: ['Complete apostasy', 'Child sacrifice', 'Closing God\'s house', 'Responding wrongly to discipline'],
    christConnection: 'Ahaz\'s closing of God\'s temple represents the ultimate rejection of God. Christ comes to open the way to God that sinful humanity has closed, tearing the veil and giving access to the Father.'
  },
  {
    bookId: '2-chronicles',
    chapter: 29,
    title: 'Hezekiah\'s Revival: Temple Restored',
    summary: 'Hezekiah immediately opens and repairs the temple doors his father had closed. He challenges the Levites to consecrate themselves and cleanse the house of the Lord. The purification takes sixteen days. Hezekiah then gathers Jerusalem\'s rulers, offers sacrifice, and restores worship with singing and instruments. The king and people rejoice that God has so quickly prepared the people.',
    keyThemes: ['Immediate reformation', 'Temple restoration', 'Levitical consecration', 'Joyful worship renewed'],
    christConnection: 'Hezekiah opening the temple and restoring worship pictures Christ, who opens the way to God. His first priority—restoring true worship—reflects Christ\'s zeal for His Father\'s house.'
  },
  {
    bookId: '2-chronicles',
    chapter: 30,
    title: 'Passover Restored: United Worship',
    summary: 'Hezekiah invites all Israel and Judah—including the northern tribes—to Jerusalem for Passover, even though the normal time has passed. Many in the north mock the couriers, but some humble themselves and come. Though some eat Passover without proper consecration, Hezekiah prays for them and God heals the people. The celebration extends an extra seven days with great joy—such a feast had not been seen since Solomon.',
    keyThemes: ['United worship', 'Covenant meal', 'Prayer for imperfect worshippers', 'Unprecedented celebration'],
    christConnection: 'Hezekiah\'s prayer for those who eat Passover though not fully consecrated, and God\'s gracious acceptance, points to Christ\'s intercession for imperfect worshippers who come to Him in sincerity.'
  },
  {
    bookId: '2-chronicles',
    chapter: 31,
    title: 'Reformation Completed: Tithes Restored',
    summary: 'Following Passover, the people go out to destroy idolatrous sites throughout Judah and even into northern Israel. Hezekiah organizes priestly and Levitical divisions and commands the people to bring tithes and offerings. The response is overwhelming—so much is brought that storage rooms overflow. Hezekiah does what is good and right and true before God, seeking Him wholeheartedly and prospering.',
    keyThemes: ['Idolatry destroyed', 'Generous giving', 'Organized worship', 'Wholehearted seeking'],
    christConnection: 'The overflowing tithes supporting full-time ministers of worship point to the church\'s generous support of gospel ministry. Those who preach the gospel should live from the gospel.'
  },
  {
    bookId: '2-chronicles',
    chapter: 32,
    title: 'Sennacherib\'s Threat and God\'s Deliverance',
    summary: 'Assyria\'s Sennacherib invades Judah. Hezekiah prepares physically and spiritually, strengthening walls and encouraging the people that "there is One greater with us than with him." Sennacherib\'s messenger blasphemes God, comparing Him to conquered nations\' gods. Hezekiah and Isaiah pray, and the Lord sends an angel who destroys 185,000 Assyrians. Later, Hezekiah becomes ill, is healed, but then his heart is lifted up—though he later humbles himself.',
    keyThemes: ['Faith vs. superior force', 'Blasphemy answered', 'Angelic deliverance', 'Pride and humility'],
    christConnection: 'God\'s deliverance from Sennacherib when human resources were inadequate pictures our deliverance through Christ when facing impossible spiritual enemies. Greater is He who is with us than he who is in the world.'
  },
  {
    bookId: '2-chronicles',
    chapter: 33,
    title: 'Manasseh\'s Wickedness and Repentance',
    summary: 'Manasseh surpasses all previous kings in wickedness, rebuilding high places, setting up Asherim, worshipping heavenly hosts, practicing sorcery, and passing his children through fire. God sends prophets, but Manasseh ignores them. Assyria captures him with hooks and chains, taking him to Babylon. In his distress, he humbles himself greatly before God. God hears and restores him to Jerusalem. Manasseh then reforms, but his son Amon returns to evil.',
    keyThemes: ['Extreme wickedness', 'Discipline and humbling', 'Late repentance', 'Grace for the worst sinners'],
    christConnection: 'Manasseh\'s repentance after extraordinary wickedness demonstrates that no one is beyond God\'s grace in Christ. If the worst sinner humbles himself, God receives him—this is gospel hope.'
  },
  {
    bookId: '2-chronicles',
    chapter: 34,
    title: 'Josiah\'s Early Reforms',
    summary: 'Josiah becomes king at eight years old and begins seeking God at sixteen. At twenty he begins purging Judah of idolatry, extending even into former northern territories. When the temple is repaired, the book of the Law is discovered. Reading it, Josiah tears his robes in distress. The prophetess Huldah confirms that judgment is coming but that Josiah will be spared because he humbled himself.',
    keyThemes: ['Youthful seeking', 'Thorough reform', 'Law rediscovered', 'Humble response to Scripture'],
    christConnection: 'The discovery of God\'s neglected Word bringing conviction and reform pictures the Reformation and every revival when Scripture is recovered. Christ is the living Word whose rediscovery transforms lives.'
  },
  {
    bookId: '2-chronicles',
    chapter: 35,
    title: 'Josiah\'s Passover and Death',
    summary: 'Josiah leads the greatest Passover celebration since Samuel\'s time, carefully following all prescriptions of the Law. The king personally provides animals for the people\'s offerings. But tragically, Josiah later opposes Pharaoh Necho at Megiddo, ignoring even Necho\'s warning (which was from God). Josiah is killed in battle. All Judah mourns their righteous king; Jeremiah composes laments. His death marks the beginning of the end for Judah.',
    keyThemes: ['Faithful observance', 'Generous provision', 'Fatal presumption', 'Kingdom mourns'],
    christConnection: 'Josiah\'s Passover, the greatest since Samuel, points forward to Christ who perfectly fulfills the Passover as both the host who provides and the Lamb who is sacrificed.'
  },
  {
    bookId: '2-chronicles',
    chapter: 36,
    title: 'The End: Exile to Babylon',
    summary: 'Judah\'s final kings—Jehoahaz, Jehoiakim, Jehoiachin, and Zedekiah—are summarized rapidly, each doing evil. Despite God sending prophets persistently, they are mocked and despised. When there is no remedy, Babylon destroys Jerusalem and the temple, exiling the people. The land rests seventy years to fulfill Jeremiah\'s prophecy. Yet Chronicles ends with hope: Cyrus\'s decree to rebuild—God\'s purposes continue.',
    keyThemes: ['Prophets rejected', 'No remedy remaining', 'Exile and desolation', 'Hope of restoration'],
    christConnection: 'The destruction and exile resulting from rejecting prophets points to Jerusalem\'s later rejection of Christ, the greatest Prophet. Yet as Cyrus brought restoration, Christ brings the greater restoration—return from spiritual exile.'
  }
];

// EZRA CHAPTERS
export const EZRA_CHAPTERS: ChapterSummary[] = [
  {
    bookId: 'ezra',
    chapter: 1,
    title: 'Cyrus\'s Decree: Return from Exile',
    summary: 'The Lord stirs up the spirit of Cyrus, king of Persia, to issue a decree allowing the Jewish exiles to return and rebuild the temple in Jerusalem. This fulfills Jeremiah\'s prophecy of seventy years\' captivity. Cyrus returns the sacred vessels that Nebuchadnezzar had taken, and the heads of Judah and Benjamin, along with priests and Levites, prepare to return. God\'s sovereignty over pagan kings demonstrates His faithfulness to His covenant promises.',
    keyThemes: ['Divine sovereignty over nations', 'Prophetic fulfillment', 'Restoration begins', 'Sacred vessels returned'],
    christConnection: 'Cyrus as God\'s instrument to restore Israel pictures Christ, God\'s ultimate instrument of restoration. The return from physical exile points to the spiritual deliverance Christ brings from the exile of sin.'
  },
  {
    bookId: 'ezra',
    chapter: 2,
    title: 'The Returning Exiles Listed',
    summary: 'A detailed census records those returning from Babylon to Jerusalem and Judah. The list includes families by ancestral houses, priests, Levites, temple servants, and descendants of Solomon\'s servants. Some cannot prove their genealogy and are excluded from the priesthood until a priest can consult Urim and Thummim. The total is about 42,360, plus servants. The people give freewill offerings for rebuilding.',
    keyThemes: ['Covenant community preserved', 'Genealogical importance', 'Priestly purity', 'Generous giving'],
    christConnection: 'The careful recording of names shows God knows His people individually. Those excluded for lacking genealogical proof contrast with believers who have clear standing through Christ, whose genealogy establishes our adoption.'
  },
  {
    bookId: 'ezra',
    chapter: 3,
    title: 'The Altar and Temple Foundation',
    summary: 'The returned exiles gather in Jerusalem to rebuild the altar and resume sacrifices, even before the temple is rebuilt—worship cannot wait. They observe the Feast of Tabernacles and establish regular burnt offerings. In the second year, they lay the temple\'s foundation. The people shout with joy, but many older priests and Levites weep, remembering Solomon\'s greater temple. Joy and weeping mingle.',
    keyThemes: ['Worship priority', 'Sacrifice renewed', 'Foundation laid', 'Mixed emotions'],
    christConnection: 'The priority of the altar—worship before walls—points to Christ as our first priority. The foundation laid with both joy and tears pictures the cross: sorrow for sin, yet joy in salvation.'
  },
  {
    bookId: 'ezra',
    chapter: 4,
    title: 'Opposition to Rebuilding',
    summary: 'The adversaries of Judah (peoples settled in the land during the exile) offer to help build but are refused since they do not share Israel\'s covenant faith. Rebuffed, they hire counselors to frustrate the work throughout Cyrus\'s and subsequent reigns. Letters of accusation are sent to Artaxerxes, describing Jerusalem as rebellious. The king orders the work stopped. The temple work ceases until Darius\'s second year.',
    keyThemes: ['Opposition to God\'s work', 'False offers of help', 'Political accusation', 'Work halted'],
    christConnection: 'Opposition to rebuilding God\'s house pictures the world\'s opposition to Christ\'s church. Satan\'s strategy of offering "help" with hidden motives continues. Yet God\'s purposes cannot ultimately be stopped.'
  },
  {
    bookId: 'ezra',
    chapter: 5,
    title: 'Prophetic Encouragement and Resumed Work',
    summary: 'The prophets Haggai and Zechariah encourage the people to resume building. Zerubbabel and Jeshua respond in faith and begin again. The Persian governor Tattenai questions their authority but does not stop them while an inquiry is made to King Darius. The Jews testify that they are rebuilding the temple that Cyrus authorized. A search for Cyrus\'s decree is initiated.',
    keyThemes: ['Prophetic encouragement', 'Faithful obedience', 'Official inquiry', 'Work resumes'],
    christConnection: 'The prophets stirring the people to build God\'s house picture the Spirit empowering the church for its building work. Zerubbabel and Jeshua (priest and governor) working together foreshadow Christ\'s united offices.'
  },
  {
    bookId: 'ezra',
    chapter: 6,
    title: 'Temple Completed and Dedicated',
    summary: 'Cyrus\'s decree is found in the archives. Darius not only confirms it but adds support from the royal treasury and threatens punishment for any who interfere. The elders finish building, encouraged by the prophets. The temple is dedicated with great joy and many sacrifices. They celebrate Passover—the priests and Levites having purified themselves—and the Feast of Unleavened Bread with joy because God had turned the heart of Persia\'s king.',
    keyThemes: ['Divine vindication', 'Temple completed', 'Joyful dedication', 'Passover restored'],
    christConnection: 'The temple\'s completion and Passover celebration point to Christ, the true temple and Passover Lamb. God turning the king\'s heart demonstrates His sovereignty over all rulers for His redemptive purposes.'
  },
  {
    bookId: 'ezra',
    chapter: 7,
    title: 'Ezra\'s Mission: The Scribe Arrives',
    summary: 'Many years later, Ezra the scribe, descended from Aaron through the high priestly line, comes from Babylon with royal authorization. Artaxerxes gives him a letter granting authority to teach the law, appoint judges, and use temple funds. Ezra is described as skilled in the law of Moses, having "set his heart to study the law of the Lord, and to do it, and to teach statutes and ordinances in Israel."',
    keyThemes: ['Word of God priority', 'Study-do-teach pattern', 'Royal authorization', 'Scribe\'s mission'],
    christConnection: 'Ezra\'s pattern—study, do, teach—models the approach Christ fully embodied and calls His followers to embrace. The scribe bringing God\'s Word pictures Christ, the living Word who reveals the Father.'
  },
  {
    bookId: 'ezra',
    chapter: 8,
    title: 'Ezra\'s Journey to Jerusalem',
    summary: 'Ezra gathers those who will return with him, including family heads and Levites recruited for temple service. Before departing, Ezra proclaims a fast to seek God\'s protection—he had told the king that God protects those who seek Him and was ashamed to ask for a military escort. God\'s hand protects them on the journey. They arrive safely and deliver the treasures to the temple.',
    keyThemes: ['Faith over fear', 'Fasting and prayer', 'Divine protection', 'Faithful stewardship'],
    christConnection: 'Ezra\'s refusal of human protection, trusting God\'s promise, pictures faith that relies wholly on Christ. The dangerous journey safely completed demonstrates God\'s faithfulness to those who seek Him.'
  },
  {
    bookId: 'ezra',
    chapter: 9,
    title: 'Ezra\'s Prayer of Confession',
    summary: 'Ezra learns that the people, including priests and Levites, have intermarried with surrounding peoples, mixing the holy seed. He is appalled, tears his garments, and sits stunned until the evening sacrifice. Then he prays a profound confession, acknowledging that even after God\'s grace in restoration, they have again broken His commands. He claims no right to stand before God, only appeals to mercy.',
    keyThemes: ['Covenant unfaithfulness', 'Intermarriage danger', 'Vicarious confession', 'Grace abused'],
    christConnection: 'Ezra\'s vicarious confession—praying "we" for sins not his own—pictures Christ who bore our sins though He was sinless. His prostration before God models true repentance and intercession.'
  },
  {
    bookId: 'ezra',
    chapter: 10,
    title: 'Covenant Renewal: Putting Away Foreign Wives',
    summary: 'As Ezra prays, a crowd gathers, weeping. Shecaniah confesses the sin and proposes a covenant to put away foreign wives and their children according to the law. Ezra makes the leaders swear to do this. An assembly is called; all must appear within three days. Despite rain and the complexity of the cases, they establish a court to investigate. The book ends with a list of those who had married foreign women.',
    keyThemes: ['Public repentance', 'Radical obedience', 'Covenant renewal', 'Community purification'],
    christConnection: 'The painful separation from foreign wives points to the cost of following God\'s commands. Christ calls His followers to put away whatever competes with wholehearted devotion, however painful.'
  }
];

// NEHEMIAH CHAPTERS
export const NEHEMIAH_CHAPTERS: ChapterSummary[] = [
  {
    bookId: 'nehemiah',
    chapter: 1,
    title: 'Nehemiah\'s Grief and Prayer',
    summary: 'Nehemiah, cupbearer to the Persian king, receives devastating news: Jerusalem\'s walls remain broken and its gates burned. He weeps, mourns, fasts, and prays for days. His prayer acknowledges God\'s covenant faithfulness, confesses Israel\'s sins (including his own family\'s), appeals to God\'s promises of restoration for those who return to Him, and asks for success when he approaches the king.',
    keyThemes: ['Burden for God\'s city', 'Intercessory prayer', 'Covenant confession', 'Seeking favor'],
    christConnection: 'Nehemiah\'s grief over Jerusalem\'s broken state and his intercession picture Christ, who wept over Jerusalem and continually intercedes for His people. His prayer model informs Christian intercession.'
  },
  {
    bookId: 'nehemiah',
    chapter: 2,
    title: 'Nehemiah\'s Mission Authorized',
    summary: 'When the king notices Nehemiah\'s sad countenance (dangerous in a king\'s presence), Nehemiah prays quickly and asks to go rebuild Jerusalem. The king grants his request and provides letters for safe passage and timber for the gates. In Jerusalem, Nehemiah secretly surveys the ruined walls at night. He then challenges the nobles and officials to rebuild, sharing how God\'s hand has been on him. They respond: "Let us rise up and build!"',
    keyThemes: ['Divine favor', 'Courage to ask', 'Secret survey', 'Inspiring leadership'],
    christConnection: 'Nehemiah as cupbearer approaching the king pictures our access to God\'s throne through Christ. His night survey and vision to rebuild picture Christ\'s knowledge of our broken condition and His work of restoration.'
  },
  {
    bookId: 'nehemiah',
    chapter: 3,
    title: 'The Wall Builders',
    summary: 'A detailed record of those who rebuilt the wall, section by section, beginning at the Sheep Gate and circling Jerusalem. Priests, nobles, craftsmen, and ordinary families all contribute. Some rebuild near their own homes; others repair multiple sections. The record notes that nobles of Tekoa "would not stoop to serve"—refusing to work. This chapter demonstrates unified, organized effort in God\'s work.',
    keyThemes: ['Unified effort', 'Each doing their part', 'Organized labor', 'Noble refusal noted'],
    christConnection: 'The diverse builders working together picture the body of Christ, each member contributing their part. The nobles\' refusal warns against pride that refuses service. Christ builds His church with willing workers.'
  },
  {
    bookId: 'nehemiah',
    chapter: 4,
    title: 'Opposition and Armed Vigilance',
    summary: 'Sanballat, Tobiah, and others mock and threaten the builders. Nehemiah prays and posts guards. When enemies plan a surprise attack, Nehemiah stations armed families at exposed points. Workers carry loads with one hand and weapons in the other; each builder has a sword at his side. They work from dawn to stars. Nehemiah declares: "Our God will fight for us!"',
    keyThemes: ['Mockery and threat', 'Prayer and vigilance', 'Working and watching', 'Faith and preparation'],
    christConnection: 'The combination of prayer and practical defense models spiritual warfare: trusting God while using means. "Our God will fight for us" anticipates the gospel—Christ fights our battles while we faithfully labor.'
  },
  {
    bookId: 'nehemiah',
    chapter: 5,
    title: 'Internal Injustice Addressed',
    summary: 'While facing external threats, internal crisis erupts: wealthy Jews are exploiting poorer brethren through usury and debt slavery. Nehemiah is angry. He rebukes the nobles and officials, demanding they stop charging interest and return fields and vineyards. They agree. Nehemiah himself, though governor, refuses his entitled food allowance, instead feeding 150 at his own table, fearing God and not burdening the people.',
    keyThemes: ['Economic justice', 'Fear of God over gain', 'Leadership example', 'Caring for the poor'],
    christConnection: 'Nehemiah\'s rebuke of exploitation and his own sacrificial generosity picture Christ, who condemned religious leaders for exploiting the poor and who gave Himself for us.'
  },
  {
    bookId: 'nehemiah',
    chapter: 6,
    title: 'Plots Against Nehemiah',
    summary: 'Sanballat and Geshem repeatedly invite Nehemiah to meet them—a plot to harm him. He refuses: "I am doing a great work and cannot come down." They send an open letter accusing him of planning rebellion; he denies it and prays for strength. Shemaiah tries to lure him into the temple (where laymen cannot go) claiming his life is in danger—but Nehemiah recognizes this as a trap to discredit him. The wall is completed in 52 days.',
    keyThemes: ['Focused perseverance', 'Discerning plots', 'Refusing distractions', 'Rapid completion'],
    christConnection: 'Nehemiah\'s refusal to "come down" from his work pictures Christ\'s refusal of Satan\'s temptations and focus on His mission. The wall completed despite opposition shows God\'s work cannot be stopped.'
  },
  {
    bookId: 'nehemiah',
    chapter: 7,
    title: 'Jerusalem Secured and Census Taken',
    summary: 'With walls complete, Nehemiah appoints gatekeepers, singers, and Levites. He charges his brother Hanani and Hananiah to govern Jerusalem, emphasizing the importance of keeping the gates secure. The city is large but sparsely populated. God prompts Nehemiah to register the people by genealogy. The chapter reproduces the list of those who originally returned (paralleling Ezra 2), establishing community identity.',
    keyThemes: ['Security measures', 'Faithful leadership', 'Genealogical registry', 'Community identity'],
    christConnection: 'The careful securing of gates and registering of citizens pictures Christ\'s care for His church—knowing each member by name and protecting them from spiritual enemies.'
  },
  {
    bookId: 'nehemiah',
    chapter: 8,
    title: 'The Law Read and Explained',
    summary: 'All the people gather as Ezra brings the Law. He reads from dawn to midday while Levites help the people understand. When the people weep at hearing God\'s commands (recognizing their failures), Nehemiah and Ezra tell them not to grieve but to celebrate—"the joy of the Lord is your strength." They discover instructions for the Feast of Tabernacles and celebrate it as not done since Joshua\'s days.',
    keyThemes: ['Public Scripture reading', 'Understanding the Word', 'Joy of the Lord', 'Feast restored'],
    christConnection: 'The Word read and explained, bringing conviction then joy, pictures gospel ministry. "The joy of the Lord is your strength" anticipates the joy believers have in Christ, our strength in weakness.'
  },
  {
    bookId: 'nehemiah',
    chapter: 9,
    title: 'Confession and Covenant',
    summary: 'After the feast, the people assemble for fasting and confession, wearing sackcloth. Levites lead a lengthy prayer recounting God\'s faithfulness from creation through Abraham, Egypt, Sinai, the wilderness, conquest, judges, kings, and exile—contrasting God\'s mercy with Israel\'s repeated unfaithfulness. Despite everything, God in His mercy never utterly forsook them. They acknowledge their current suffering as deserved.',
    keyThemes: ['Historical confession', 'God\'s persistent mercy', 'Human unfaithfulness', 'Present accountability'],
    christConnection: 'The prayer\'s recounting of God\'s mercies despite human failure points to Christ as God\'s ultimate mercy. Each generation\'s failure shows our need for a Savior who will not fail.'
  },
  {
    bookId: 'nehemiah',
    chapter: 10,
    title: 'The Written Covenant',
    summary: 'The leaders, Levites, and priests sign a binding agreement, with the rest of the people joining in a curse and oath to walk in God\'s Law. Specific commitments include: no intermarriage with surrounding peoples, keeping the Sabbath and sabbatical year, paying the temple tax, providing wood for offerings, giving firstfruits, and supporting the Levites with tithes. They resolve: "We will not neglect the house of our God."',
    keyThemes: ['Covenant commitment', 'Specific obligations', 'Supporting worship', 'Community resolve'],
    christConnection: 'The covenant promise not to neglect God\'s house anticipates believers\' commitment to Christ\'s church. The specific obligations point to practical faithfulness, empowered by grace in the new covenant.'
  },
  {
    bookId: 'nehemiah',
    chapter: 11,
    title: 'Repopulating Jerusalem',
    summary: 'Since Jerusalem needs more inhabitants, the leaders live there while the rest cast lots to bring one in ten to dwell in the city. Those who volunteer are blessed by the people. The chapter lists those who settled in Jerusalem from Judah and Benjamin, the priests, Levites, and gatekeepers. Other settlements throughout Judah are also recorded. The city is being rebuilt as a functioning community.',
    keyThemes: ['Voluntary sacrifice', 'Casting lots', 'Jerusalem populated', 'Community establishment'],
    christConnection: 'Those who volunteered to live in the vulnerable holy city picture believers who sacrifice for Christ\'s kingdom. The city built through willing service foreshadows the church built of living stones.'
  },
  {
    bookId: 'nehemiah',
    chapter: 12,
    title: 'Dedication of the Walls',
    summary: 'A list of priests and Levites from the return to Nehemiah\'s time is given. For the wall dedication, Nehemiah organizes two great choirs walking in opposite directions atop the wall, meeting at the temple. They offer great sacrifices, and the joy of Jerusalem is heard from afar. The singers and gatekeepers are supported by the people according to the commands regarding Levites.',
    keyThemes: ['Joyful dedication', 'Procession of praise', 'Far-reaching joy', 'Supporting ministers'],
    christConnection: 'The dedication with great joy and praise heard from afar pictures the church\'s worship ascending to heaven. The two processions meeting at the temple point to all nations gathering to Christ.'
  },
  {
    bookId: 'nehemiah',
    chapter: 13,
    title: 'Nehemiah\'s Reforms',
    summary: 'Nehemiah returns to Persia, then comes back to Jerusalem to find abuses: Tobiah (the enemy) has been given a temple chamber; Levites have been neglected and left their posts; Sabbath is violated by commerce; intermarriage has resumed. Nehemiah acts forcefully—throwing out Tobiah\'s furniture, rebuking officials, restoring Levitical support, shutting gates on Sabbath, and confronting those who married foreign wives. He prays repeatedly: "Remember me, O my God, for good."',
    keyThemes: ['Backsliding discovered', 'Forceful reform', 'Sabbath restoration', 'Marriage purity'],
    christConnection: 'Nehemiah\'s zeal for God\'s house and covenant purity pictures Christ\'s zeal in cleansing the temple. His prayer to be remembered anticipates the thief\'s prayer and Christ\'s remembrance of His people.'
  }
];

// ESTHER CHAPTERS
export const ESTHER_CHAPTERS: ChapterSummary[] = [
  {
    bookId: 'esther',
    chapter: 1,
    title: 'Queen Vashti Deposed',
    summary: 'King Ahasuerus (Xerxes) of Persia holds a lavish feast displaying his wealth. On the seventh day, drunk with wine, he summons Queen Vashti to display her beauty. She refuses. The king\'s advisors warn that her defiance will embolden all women to despise their husbands. Vashti is banished, and a decree goes out that every man should be master in his own home. A search for a new queen begins.',
    keyThemes: ['Persian power displayed', 'Pride and excess', 'Royal authority challenged', 'Stage set for Esther'],
    christConnection: 'Though God is never named in Esther, His providence is evident. Vashti\'s removal opens the way for Esther, just as God providentially arranges circumstances for His people\'s deliverance—ultimately through Christ.'
  },
  {
    bookId: 'esther',
    chapter: 2,
    title: 'Esther Becomes Queen',
    summary: 'A search for beautiful virgins brings Esther (Hadassah), a Jewish orphan raised by her cousin Mordecai, into the king\'s harem. She wins favor with everyone, including the king, who makes her queen—though she has not revealed her Jewish identity. Mordecai, sitting at the king\'s gate, discovers a plot against the king and reports it through Esther. The conspirators are executed, and the event is recorded in the chronicles.',
    keyThemes: ['Divine positioning', 'Favor gained', 'Hidden identity', 'Loyalty recorded'],
    christConnection: 'Esther\'s hidden identity until the appointed time parallels Christ\'s veiled glory during His earthly ministry. Mordecai\'s unrewarded loyalty will later be remembered—God forgets nothing.'
  },
  {
    bookId: 'esther',
    chapter: 3,
    title: 'Haman\'s Plot Against the Jews',
    summary: 'Haman the Agagite is elevated above all officials. All bow to him except Mordecai, who refuses (likely because Haman descended from Israel\'s ancient enemy Amalek). Enraged, Haman plots to destroy not just Mordecai but all Jews throughout the empire. He casts lots (pur) to determine the date and convinces the king that the Jews are dangerous separatists. The king issues a decree for their destruction on the appointed day.',
    keyThemes: ['Pride demands homage', 'Ancient enmity', 'Genocide decreed', 'Providence through lots'],
    christConnection: 'Haman\'s plot to destroy God\'s people echoes Satan\'s efforts throughout history. The casting of lots (pur) unknowingly gives time for deliverance—God is sovereign even over apparent randomness.'
  },
  {
    bookId: 'esther',
    chapter: 4,
    title: 'Mordecai\'s Challenge: "For Such a Time as This"',
    summary: 'Mordecai mourns publicly in sackcloth when he learns of the decree. He sends word to Esther, urging her to plead with the king. Esther fears death since approaching the king unsummoned is fatal unless he extends his scepter. Mordecai\'s reply is penetrating: if she remains silent, deliverance will come from elsewhere, but she and her family will perish. Perhaps she has come to royal position "for such a time as this."',
    keyThemes: ['Providence and purpose', 'Courage required', 'Faith over fear', 'Divine timing'],
    christConnection: '"For such a time as this" reflects God\'s providential timing in all history. Christ came "in the fullness of time." Esther\'s willingness to risk death for her people foreshadows Christ who gave His life for His people.'
  },
  {
    bookId: 'esther',
    chapter: 5,
    title: 'Esther\'s First Banquet',
    summary: 'After three days of fasting, Esther approaches the king and receives his favor. She invites him and Haman to a banquet. When the king asks her request, she invites them to another banquet the next day. Haman leaves joyful but seethes when Mordecai refuses to bow. His wife and friends suggest building a gallows to hang Mordecai before the next banquet. Haman has the gallows built.',
    keyThemes: ['Courageous approach', 'Favor granted', 'Strategic delay', 'Pride before fall'],
    christConnection: 'Esther\'s fasting before approaching the king pictures prayerful preparation. Haman building gallows for his enemy unknowingly prepares his own death—evil\'s schemes often become its undoing.'
  },
  {
    bookId: 'esther',
    chapter: 6,
    title: 'Mordecai Honored, Haman Humiliated',
    summary: 'That night, the king cannot sleep and has the chronicles read to him. He learns that Mordecai\'s loyalty in exposing the assassination plot was never rewarded. When Haman arrives (to ask permission to hang Mordecai), the king asks how to honor someone. Haman, thinking it\'s himself, suggests royal robes, a horse, and public proclamation. The king commands Haman to do all this for Mordecai. Haman goes home in shame; his wife predicts his downfall.',
    keyThemes: ['Divine timing', 'Sleepless night', 'Tables turned', 'Ironic reversal'],
    christConnection: 'The "coincidences" of this chapter display divine providence. Mordecai honored instead of hanged pictures the reversal Christ brings—the humble exalted, the proud brought low.'
  },
  {
    bookId: 'esther',
    chapter: 7,
    title: 'Esther\'s Revelation, Haman\'s Death',
    summary: 'At the second banquet, the king again asks Esther\'s request. She reveals that she is Jewish and that someone has plotted to destroy her people—herself included. When the king demands who, she names Haman. The king storms out in fury. Haman begs Esther for his life, falling on her couch as the king returns, making it appear worse. A eunuch mentions the gallows Haman built for Mordecai. The king orders Haman hanged on his own gallows.',
    keyThemes: ['Identity revealed', 'Villain exposed', 'Judgment reversed', 'Hoist on his own petard'],
    christConnection: 'Haman dying on his own gallows pictures the cross: Satan\'s weapon of death became his defeat. The enemy is destroyed by his own design when Christ conquers through the cross.'
  },
  {
    bookId: 'esther',
    chapter: 8,
    title: 'The Decree Reversed',
    summary: 'Esther receives Haman\'s estate, and Mordecai is elevated to Haman\'s position. But the first decree cannot be revoked under Persian law. So a second decree authorizes the Jews to defend themselves and destroy their enemies on the appointed day. Mordecai goes out in royal robes, and the city of Susa rejoices. Many peoples "became Jews" because fear of them had fallen upon all.',
    keyThemes: ['Reversal of fortune', 'Right to defend', 'Mordecai exalted', 'Fear turns to favor'],
    christConnection: 'The new decree giving Jews power over their enemies pictures the gospel: though under sin\'s sentence, believers receive a new decree—authority in Christ over sin and Satan.'
  },
  {
    bookId: 'esther',
    chapter: 9,
    title: 'Jewish Victory and Purim Established',
    summary: 'On the day enemies planned to destroy the Jews, the Jews instead destroy their enemies—75,000 in the provinces and Haman\'s ten sons in Susa. They take no plunder, emphasizing this is justice, not greed. Mordecai and Esther establish the feast of Purim (from "pur," the lot) to commemorate this deliverance, to be observed annually with feasting, joy, and gifts to the poor.',
    keyThemes: ['Victory over enemies', 'No plunder taken', 'Purim instituted', 'Remembered annually'],
    christConnection: 'Purim celebrates deliverance from destruction—pointing to the greater deliverance Christ provides from spiritual death. The feast of joy foreshadows the eternal celebration of God\'s redeemed people.'
  },
  {
    bookId: 'esther',
    chapter: 10,
    title: 'Mordecai\'s Greatness',
    summary: 'The book concludes briefly: King Ahasuerus levied tribute on the land and islands, and his acts are recorded in the chronicles of the kings of Media and Persia. Mordecai the Jew was second only to the king, great among the Jews and popular with his many brethren, seeking the welfare of his people and speaking peace to all his offspring.',
    keyThemes: ['Mordecai\'s elevation', 'Seeking people\'s welfare', 'Speaking peace', 'Providence vindicated'],
    christConnection: 'Mordecai, once hated and condemned, is now exalted to the king\'s right hand, seeking his people\'s welfare. This pictures Christ, exalted to the Father\'s right hand, interceding for His people.'
  }
];

// JOB CHAPTERS
export const JOB_CHAPTERS: ChapterSummary[] = [
  {
    bookId: 'job',
    chapter: 1,
    title: 'Job\'s Righteousness and Satan\'s Challenge',
    summary: 'Job is introduced as blameless and upright, fearing God and turning away from evil. He is extraordinarily blessed with family and wealth. In heaven, Satan appears among the sons of God, and God commends Job\'s faithfulness. Satan challenges: Job serves God only because of blessings; remove them and he will curse God. God permits Satan to test Job, and in one day, Job loses his livestock, servants, and all ten children. Yet Job worships: "The Lord gave, and the Lord has taken away; blessed be the name of the Lord."',
    keyThemes: ['Divine sovereignty', 'Satan\'s accusation', 'Suffering without cause', 'Faith amidst loss'],
    christConnection: 'Job\'s undeserved suffering points to Christ, the truly righteous sufferer. Unlike Job, Christ was absolutely sinless yet suffered infinitely more. Job\'s worship in grief models trust in God\'s sovereign purposes.'
  },
  {
    bookId: 'job',
    chapter: 2,
    title: 'Satan\'s Second Attack: Bodily Affliction',
    summary: 'Satan again appears before God, who notes that Job still holds fast his integrity despite losing everything. Satan argues that Job would curse God if his own body were struck. God permits Satan to afflict Job but not kill him. Job is covered with painful sores. His wife urges him to curse God and die, but Job rebukes her: "Shall we receive good from God, and shall we not receive evil?" Job\'s three friends arrive to comfort him and sit silently for seven days, overwhelmed by his suffering.',
    keyThemes: ['Physical affliction', 'Satan\'s limitations', 'Integrity maintained', 'Friends arrive'],
    christConnection: 'Job\'s bodily suffering, though permitted by God, was inflicted by Satan—a picture of how Christ\'s suffering, though foreordained, was executed by evil hands. The friends\' initial silent compassion reflects what true comfort requires.'
  },
  {
    bookId: 'job',
    chapter: 3,
    title: 'Job\'s Lament: Cursing the Day of Birth',
    summary: 'After seven days of silence, Job opens his mouth and curses the day of his birth. He wishes he had died at birth or been stillborn. He longs for death as rest from his suffering, asking why life is given to those in misery. This is raw, honest grief—not cursing God, but questioning the purpose of suffering. Job expresses what many sufferers feel: longing for relief and questioning why they were born for such pain.',
    keyThemes: ['Honest lament', 'Longing for death', 'Questioning purpose', 'Grief expressed'],
    christConnection: 'Job\'s anguish anticipates Gethsemane, where Christ in agony asked if the cup could pass. Yet Christ embraced the Father\'s will, drinking the cup of suffering for us. Honest lament before God is not sin.'
  },
  {
    bookId: 'job',
    chapter: 4,
    title: 'Eliphaz Speaks: First Discourse',
    summary: 'Eliphaz, the first friend, begins the dialogue. He acknowledges Job has comforted many, but now Job cannot bear his own trial. Eliphaz argues from experience and a night vision: the innocent do not perish; trouble comes to those who sow it. He implies Job must have sinned secretly. He describes a terrifying spiritual encounter confirming that no mortal is righteous before God. His theology contains truth but misapplied—assuming all suffering is punishment for sin.',
    keyThemes: ['Retribution theology', 'Experience over revelation', 'Subtle accusation', 'Human frailty'],
    christConnection: 'Eliphaz\'s error—assuming suffering always indicates guilt—is what Christ\'s disciples later showed with the blind man. Christ corrected this: suffering is not always punishment. Some suffering glorifies God.'
  },
  {
    bookId: 'job',
    chapter: 5,
    title: 'Eliphaz Continues: Divine Discipline',
    summary: 'Eliphaz continues, noting that fools are destroyed by their own folly. He urges Job to seek God, describing God\'s wonderful works and His justice—saving the needy and frustrating the crafty. He counsels Job to accept discipline: "Blessed is the one whom God reproves." He promises that if Job submits, he will be restored with blessings—children, prosperity, long life. This sounds pious but assumes Job\'s suffering is corrective discipline for hidden sin.',
    keyThemes: ['Call to repentance', 'Promise of restoration', 'Misapplied wisdom', 'Assumed guilt'],
    christConnection: 'While God does discipline His children, Eliphaz wrongly assumes all suffering is discipline. Christ bore suffering not for His sin but for ours. Some suffering is mysterious, serving purposes we cannot yet see.'
  },
  {
    bookId: 'job',
    chapter: 6,
    title: 'Job\'s Reply: The Weight of Anguish',
    summary: 'Job responds that his anguish is heavier than the sand of the sea—his words have been rash because of overwhelming pain. He wishes God would crush him and end his misery. He accuses his friends of being like a wadi that dries up when most needed—worthless in his time of need. He challenges them to show him where he has sinned. He asks for honesty, not empty words. His friends\' comfort has become torment.',
    keyThemes: ['Weight of suffering', 'Disappointment in friends', 'Desire for death', 'Challenge to accusers'],
    christConnection: 'Job\'s friends failed him when he needed them most. Christ\'s disciples fled in His hour of need. Yet Christ remains the friend who never fails, the one who sticks closer than a brother even in our darkest hours.'
  },
  {
    bookId: 'job',
    chapter: 7,
    title: 'Job\'s Complaint to God',
    summary: 'Job laments human existence as hard service—like a slave longing for evening\'s rest. His nights are filled with tossing; his days pass without hope. He turns his complaint to God directly: "I will not restrain my mouth." He asks why God pays such close attention to humans, watching constantly, not looking away even for a moment. If he has sinned, what does that do to God? Why not pardon his transgression? He will soon die and be gone.',
    keyThemes: ['Life\'s brevity', 'Direct complaint to God', 'Divine surveillance', 'Desire for pardon'],
    christConnection: 'Job\'s bold complaint to God shows that honest prayer is acceptable. Christ taught us to bring all concerns to the Father. Job\'s question about human significance anticipates the answer in Christ: God cares because we matter to Him.'
  },
  {
    bookId: 'job',
    chapter: 8,
    title: 'Bildad Speaks: Appeal to Tradition',
    summary: 'Bildad, the second friend, is more blunt. He asks how long Job will speak such "wind." God does not pervert justice; if Job\'s children sinned, they received what they deserved. If Job is pure, God will restore him. Bildad appeals to the wisdom of past generations: the wicked perish like plants without water, while the blameless are not rejected. He assumes Job must be guilty since God would not afflict the innocent.',
    keyThemes: ['Appeal to tradition', 'Harsh theology', 'Retributive justice', 'Conditional hope'],
    christConnection: 'Bildad\'s rigid retribution theology fails before the cross. Christ, the perfectly pure one, was not restored but crucified. The gospel reveals suffering that transcends simple cause and effect—suffering with redemptive purpose.'
  },
  {
    bookId: 'job',
    chapter: 9,
    title: 'Job\'s Reply: How Can a Man Be Right with God?',
    summary: 'Job agrees that no one can be righteous before God—but this is precisely the problem. God is so powerful that no one can contend with Him. Job describes God\'s awesome power in creation—moving mountains, commanding the sun, walking on waves. Yet this power seems overwhelming, not comforting. If Job called and God answered, would God listen? God destroys the blameless and the wicked together. Job wishes for an arbiter between himself and God.',
    keyThemes: ['Divine power', 'Human helplessness', 'Desire for mediation', 'Justice questioned'],
    christConnection: 'Job\'s longing for a mediator—someone to stand between him and God—is fulfilled in Christ. "There is one mediator between God and men, the man Christ Jesus." Jesus bridges the infinite gap Job felt.'
  },
  {
    bookId: 'job',
    chapter: 10,
    title: 'Job\'s Plea: Why Do You Contend Against Me?',
    summary: 'Job will give free expression to his complaint. He asks God why He contends against him—does it seem good to God to oppress, to despise His own handiwork, while favoring the wicked? Job recalls that God formed him with care, like clay, granting him life and steadfast love. Yet now God seems to hunt him like a lion, testing him continually. He wishes again he had never been born or had died at birth.',
    keyThemes: ['Questioning God\'s treatment', 'Creation remembered', 'Present suffering contrasted', 'Death preferred'],
    christConnection: 'Job\'s sense that God is against him, despite knowing God\'s past care, pictures the believer\'s experience of divine hiddenness. Christ experienced this utterly on the cross: "My God, why have you forsaken me?"'
  },
  {
    bookId: 'job',
    chapter: 11,
    title: 'Zophar Speaks: Divine Wisdom Beyond Comprehension',
    summary: 'Zophar, the third friend, is the harshest. He accuses Job of babbling and mocking, wishing God would speak and reveal Job\'s hidden sins—in fact, God exacts less than Job\'s guilt deserves! Zophar describes God\'s wisdom as beyond searching out—higher than heaven, deeper than Sheol. He demands that Job put away iniquity and turn to God; then he will be secure, forget his misery, and rest safely.',
    keyThemes: ['Harsh accusation', 'Divine mystery', 'Call to repentance', 'Promised restoration'],
    christConnection: 'Zophar rightly notes that God\'s wisdom is unsearchable, but wrongly claims to know God\'s specific judgment on Job. True humility acknowledges what we don\'t know. Christ reveals God\'s wisdom in ways we never expected—through a cross.'
  },
  {
    bookId: 'job',
    chapter: 12,
    title: 'Job\'s Reply: Wisdom Is Not Your Monopoly',
    summary: 'Job responds with sarcasm: "No doubt you are the people, and wisdom will die with you!" He insists he is not inferior to them; what they know, he knows too. Yet he, a righteous man, has become a laughingstock while the wicked prosper. Even animals could teach them about God\'s sovereignty! God controls all—He overturns nations, makes counselors foolish, and leads kings away captive. Nothing happens outside His will.',
    keyThemes: ['Sarcastic rebuke', 'Suffering of the righteous', 'God\'s sovereignty', 'Creatures as teachers'],
    christConnection: 'Job\'s insistence that God is sovereign over all—both blessing and adversity—points to the mystery of the cross. God\'s wisdom seemed foolishness, His power weakness. Yet through apparent defeat, God achieved ultimate victory.'
  },
  {
    bookId: 'job',
    chapter: 13,
    title: 'Job Demands to Speak Directly to God',
    summary: 'Job declares he wants to argue his case with God, not these "worthless physicians" whose wisdom is "proverbs of ashes." He warns them that they are defending God with lies—will God judge them for their false advocacy? He demands silence to speak his piece, willing to take any risk: "Though he slay me, I will hope in him; yet I will argue my ways to his face." He asks God to withdraw His hand and speak, or let Job speak first.',
    keyThemes: ['Friends rebuked', 'Courage to face God', 'Bold faith', 'Legal language'],
    christConnection: '"Though he slay me, I will hope in him"—this faith amidst suffering points to Christ\'s trust in the Father even unto death. Job\'s boldness to approach God anticipates the access believers have through Christ.'
  },
  {
    bookId: 'job',
    chapter: 14,
    title: 'Human Mortality and Longing for Hope',
    summary: 'Job reflects on human mortality: life is brief like a fading flower, fleeting like a shadow. A tree has hope—cut down, it may sprout again—but humans lie down and do not rise until the heavens are no more. Job wishes God would hide him in Sheol until His wrath passes, then remember him. He asks the haunting question: "If a man dies, shall he live again?" He would wait all his days for release, longing for God to call and he to answer.',
    keyThemes: ['Human frailty', 'Death\'s finality', 'Hope beyond death', 'Longing for resurrection'],
    christConnection: 'Job\'s question "If a man dies, shall he live again?" is answered in Christ\'s resurrection. The gospel declares: Yes! Death is not final. Christ\'s rising is the firstfruits, and all who trust Him will live again.'
  },
  {
    bookId: 'job',
    chapter: 15,
    title: 'Eliphaz\'s Second Speech: Accusing Job\'s Pride',
    summary: 'Eliphaz begins the second cycle, accusing Job of speaking useless words and undermining piety. He asks if Job thinks he\'s the first man ever born, privy to God\'s council. The friends are gray-haired elders; what does Job know that they don\'t? He again emphasizes that no one is pure before God and describes in lurid detail the fate of the wicked—terror, darkness, sword, fire. The implication is clear: Job is one of them.',
    keyThemes: ['Pride accused', 'Age over youth', 'Wicked\'s fate described', 'Indirect accusation'],
    christConnection: 'Eliphaz\'s detailed description of the wicked\'s fate ironically describes what Christ would endure on the cross—darkness, anguish, separation—not for His own sin but for ours.'
  },
  {
    bookId: 'job',
    chapter: 16,
    title: 'Job\'s Reply: Miserable Comforters',
    summary: 'Job calls his friends "miserable comforters" who speak "windy words." If positions were reversed, Job could also heap up words against them—but he would comfort them instead. He describes his suffering in graphic terms: God has torn him, gnashed His teeth at him, delivered him to the ungodly. His face is red with weeping, yet his hands are clean. He appeals to heaven as his witness; God Himself is his advocate even though God seems his adversary.',
    keyThemes: ['Failed comfort', 'Divine assault described', 'Innocence maintained', 'Heavenly witness'],
    christConnection: 'Job\'s appeal to a witness in heaven while feeling God as adversary pictures Christ\'s relationship with the Father. On the cross, Christ trusted the Father even while bearing the Father\'s wrath against sin.'
  },
  {
    bookId: 'job',
    chapter: 17,
    title: 'Job\'s Despair Deepens',
    summary: 'Job\'s spirit is broken; his days are over. Mockers surround him. He asks God to provide a pledge—who else would give a guarantee for him? God has made him a byword; people spit in his face. His friends fail him, calling night day and claiming light is near when darkness surrounds him. If Sheol is now his home, where then is his hope? It goes down to the gates of Sheol.',
    keyThemes: ['Spirit broken', 'Public humiliation', 'Seeking a guarantee', 'Hope fading'],
    christConnection: 'Job\'s sense of being made a byword, spat upon and mocked, foreshadows Christ\'s passion. Jesus was literally spat upon, mocked, made a spectacle. Yet through such humiliation came our redemption.'
  },
  {
    bookId: 'job',
    chapter: 18,
    title: 'Bildad\'s Second Speech: The Fate of the Wicked',
    summary: 'Bildad takes offense at being treated as stupid cattle. He again describes the terrible fate awaiting the wicked: their light is put out; snares catch them; terrors frighten them; disease consumes their skin; they are torn from their tent and brought before the "king of terrors" (death). Their memory perishes from the earth. Bildad is certain this is the fate of those who do not know God—a not-so-subtle accusation against Job.',
    keyThemes: ['Offended pride', 'Wicked\'s destruction detailed', 'Death personified', 'Indirect condemnation'],
    christConnection: 'Bildad describes the "king of terrors"—death itself—as the wicked\'s end. Christ has conquered this king. Death, where is your sting? Through Christ\'s death and resurrection, the terror of death is overcome.'
  },
  {
    bookId: 'job',
    chapter: 19,
    title: 'Job\'s Reply: "I Know That My Redeemer Lives"',
    summary: 'Job protests: how long will they torment him? Even if he has erred, the error is his alone—why must they attack him? He describes how God has stripped him of honor, walled up his way, made him an outcast even to his own family. He pleads for pity, not persecution. Then comes his great confession: "I know that my Redeemer lives, and at the last he will stand upon the earth. And after my skin has been thus destroyed, yet in my flesh I shall see God."',
    keyThemes: ['Isolation described', 'Plea for pity', 'Redeemer affirmed', 'Hope of resurrection'],
    christConnection: 'Job\'s confession of a living Redeemer is fulfilled in Christ. The Hebrew word "go\'el" (kinsman-redeemer) points to One who will vindicate and restore. Job glimpses what is fully revealed in Christ—resurrection and vindication.'
  },
  {
    bookId: 'job',
    chapter: 20,
    title: 'Zophar\'s Second Speech: The Wicked\'s Brief Triumph',
    summary: 'Zophar responds with agitation to Job\'s words. He insists that the triumph of the wicked is short-lived; though they rise to the heavens, they perish like their own dung. Their prosperity is brief; what they swallow, they vomit up—God casts it out of their belly. They will know no quiet; their wealth flows away. This is the wicked person\'s portion from God. Again, the implication is that Job is reaping such judgment.',
    keyThemes: ['Brief triumph', 'Wealth disgorged', 'No lasting peace', 'Divine judgment'],
    christConnection: 'Zophar\'s theology of the wicked briefly prospering then falling is partially true but incomplete. Christ\'s parable of the rich fool echoes this, but the gospel reveals that transformation, not just destruction, is possible through grace.'
  },
  {
    bookId: 'job',
    chapter: 21,
    title: 'Job\'s Reply: The Wicked Often Prosper',
    summary: 'Job challenges the friends\' neat theology: look at reality! The wicked often prosper, grow old in power, see their offspring established, and die peacefully. Where is their punishment? The friends\' scheme of immediate retribution doesn\'t match observation. One dies in full vigor; another in bitterness—yet both lie in dust. Their claim that the wicked are reserved for the day of calamity is just empty comfort.',
    keyThemes: ['Wicked prosperity observed', 'Retribution challenged', 'Reality versus theory', 'Comfort exposed as hollow'],
    christConnection: 'Job correctly notes that justice isn\'t always immediate. This truth points to future judgment. Christ taught that final judgment comes at the end. The wicked may prosper now, but God\'s justice will ultimately prevail.'
  },
  {
    bookId: 'job',
    chapter: 22,
    title: 'Eliphaz\'s Third Speech: Specific Accusations',
    summary: 'Eliphaz begins the third cycle with the harshest accusations yet. He argues that God gains nothing from human righteousness; Job\'s suffering must be due to his own sins. He invents specific charges: Job has taken pledges from his brothers for nothing, stripped the naked, withheld bread from the hungry, sent widows away empty. He urges Job to repent and be restored, to receive instruction and return to the Almighty.',
    keyThemes: ['Fabricated accusations', 'God needs nothing from man', 'Call to repentance', 'Promised restoration'],
    christConnection: 'Eliphaz\'s false accusations anticipate the false charges brought against Christ. Jesus was accused of crimes He never committed. The innocent often suffer accusation, but God knows the truth.'
  },
  {
    bookId: 'job',
    chapter: 23,
    title: 'Job\'s Reply: Seeking God Who Cannot Be Found',
    summary: 'Job wishes he could find God to present his case. If he could lay his case before God, he believes God would pay attention and he would be delivered. But God is hidden—Job goes forward, backward, left, right, and cannot find Him. Yet God knows Job\'s way; when tested, Job will come forth as gold. He has kept God\'s commands, treasuring His words more than daily bread. But God is unchangeable; what He determines, He does. This terrifies Job.',
    keyThemes: ['Longing for God\'s presence', 'Divine hiddenness', 'Tested as gold', 'Sovereign determination'],
    christConnection: 'Job\'s longing to find God and present his case is answered in Christ, our advocate. We can come boldly to the throne of grace. God is no longer hidden—Christ has revealed Him. Yet Job\'s terror before sovereignty points to holy reverence.'
  },
  {
    bookId: 'job',
    chapter: 24,
    title: 'Why Does God Allow Wickedness?',
    summary: 'Job asks why God doesn\'t set times for judgment. He describes how the wicked move boundary stones, oppress the poor, force the needy to glean, and make the homeless go naked. Orphans and widows suffer while the wicked prosper. Murderers, adulterers, and thieves operate in darkness. The friends claim the wicked are swiftly punished, but Job insists they are exalted and then die like everyone else. Who can prove him wrong?',
    keyThemes: ['Delayed judgment questioned', 'Oppression described', 'Wicked flourish', 'Challenge to orthodoxy'],
    christConnection: 'Job\'s question about delayed justice finds its answer in the patience of God, who desires repentance. Peter echoes this: God is patient, not wanting any to perish. Christ\'s return brings final justice.'
  },
  {
    bookId: 'job',
    chapter: 25,
    title: 'Bildad\'s Brief Third Speech',
    summary: 'Bildad gives a short, final speech. He extols God\'s power and dominion—peace-maker in the heights, numberless hosts, light that reaches everywhere. How then can man be right before God? How can one born of woman be pure? Even the moon is not bright and the stars not pure in God\'s sight; how much less man, who is a maggot and worm! This orthodox statement of human unworthiness misses the point of Job\'s suffering.',
    keyThemes: ['Divine majesty', 'Human insignificance', 'Universal sinfulness', 'Missing the point'],
    christConnection: 'Bildad\'s question "How can man be righteous before God?" has no human answer—but God provides one. Christ, the righteous one, imputes His righteousness to us. This is the gospel answer to humanity\'s deepest need.'
  },
  {
    bookId: 'job',
    chapter: 26,
    title: 'Job\'s Reply: God\'s Majestic Power',
    summary: 'Job sarcastically asks what help Bildad has been to the powerless. Then Job himself describes God\'s power more magnificently than the friends ever did: Sheol is naked before Him; He stretches out the north over the void, hangs the earth on nothing, binds up waters in clouds, sets the circle of the horizon, makes pillars of heaven tremble, stirs up the sea, and pierces the serpent. And these are but the outer fringe of His works—a whisper. Who can understand His thunder?',
    keyThemes: ['Superior description of power', 'Creation\'s wonders', 'Divine mystery', 'The whisper of God'],
    christConnection: 'Job\'s description of God\'s power reminds us that Christ, through whom all things were made, willingly became weak for our salvation. The Creator who hangs the earth on nothing hung on a cross for us.'
  },
  {
    bookId: 'job',
    chapter: 27,
    title: 'Job\'s Oath of Integrity',
    summary: 'Job maintains his integrity with a solemn oath: as long as breath is in him, he will not speak falsehood or concede the friends are right. He will hold fast his righteousness and not let it go; his conscience does not reproach him. He then describes what truly befalls the wicked: their children face the sword; their widows don\'t weep; their wealth goes to the righteous. The wicked are swept away like stubble. Job appropriates the friends\' very language.',
    keyThemes: ['Oath of integrity', 'Refusal to concede', 'Wicked\'s true fate', 'Conscience clear'],
    christConnection: 'Job\'s firm maintenance of innocence despite pressure to confess false guilt pictures Christ, who under all pressure remained truthful. "Which of you convicts me of sin?" The truly righteous do not confess sins they haven\'t committed.'
  },
  {
    bookId: 'job',
    chapter: 28,
    title: 'The Hymn to Wisdom',
    summary: 'This magnificent poem asks: where is wisdom found? Humanity mines precious metals from earth\'s depths, reaching places birds and beasts never see. But wisdom cannot be mined or bought; it is hidden from all living. Abaddon and Death say, "We have heard a rumor of it." Only God understands wisdom\'s way; He saw it when He established creation. And to humanity He said: "The fear of the Lord, that is wisdom; to depart from evil is understanding."',
    keyThemes: ['Wisdom\'s inaccessibility', 'Human ingenuity limited', 'God alone knows wisdom', 'Fear of the Lord'],
    christConnection: 'The search for wisdom beyond human reach is fulfilled in Christ, "in whom are hidden all the treasures of wisdom and knowledge." The wisdom the world cannot find is revealed in a person—Jesus Christ.'
  },
  {
    bookId: 'job',
    chapter: 29,
    title: 'Job\'s Former Blessed State',
    summary: 'Job remembers his past glory. In those days, God watched over him; by God\'s light Job walked through darkness. He had counsel, family, prosperity, and honor. Young men withdrew in respect; aged men rose to their feet. He rescued the poor and caused the widow\'s heart to sing. He was eyes to the blind and feet to the lame. He expected to die in his nest, his glory fresh. People waited for his words as for rain.',
    keyThemes: ['Past blessing remembered', 'Respected position', 'Helper of the needy', 'Former honor'],
    christConnection: 'Job\'s description of his former blessed state—helping the needy, giving justice to the poor—describes what Christ did perfectly. Jesus is the true helper of the helpless, and His glory was greater yet laid aside.'
  },
  {
    bookId: 'job',
    chapter: 30,
    title: 'Job\'s Present Misery',
    summary: 'Now those younger and lower than Job mock him—men whose fathers he wouldn\'t have set with his dogs. They make him their byword, spit in his face, attack him. Terrors pursue him; his prosperity vanishes. Days of affliction have seized him; pain gnaws his bones. His garment is disfigured; he has become like dust and ashes. He cries to God with no answer. He has become a brother to jackals, blackened and burning with fever.',
    keyThemes: ['Mockery by inferiors', 'Physical torment', 'Divine silence', 'Complete reversal'],
    christConnection: 'Job\'s humiliation—mocked, spat upon, abandoned—foreshadows Christ\'s passion. Jesus was despised by those He came to save, yet He endured the cross for the joy set before Him.'
  },
  {
    bookId: 'job',
    chapter: 31,
    title: 'Job\'s Final Oath of Innocence',
    summary: 'Job makes his final defense, swearing comprehensive oaths of innocence. He has made a covenant with his eyes not to gaze at a virgin. He has not walked in falsehood, deceived in business, been lured by another\'s wife, treated servants unfairly, neglected the poor, trusted in wealth, worshipped sun or moon, rejoiced at an enemy\'s misfortune, or concealed sin. He signs his case: "Let the Almighty answer me!" Zophar gives no third speech; the friends are silenced.',
    keyThemes: ['Comprehensive innocence', 'Ethical catalog', 'Challenge to God', 'Friends silenced'],
    christConnection: 'Job\'s catalog of righteousness, while genuine, cannot ultimately justify before God. Only Christ lived in perfect conformity to every ethical standard. He alone can stand as the truly innocent one.'
  },
  {
    bookId: 'job',
    chapter: 32,
    title: 'Elihu Enters: Youth Speaks',
    summary: 'A new voice enters: Elihu, young and previously silent out of respect. But now anger burns in him—at Job for justifying himself rather than God, and at the friends for failing to answer Job while condemning him. He has waited for wisdom from age, but now realizes that the Spirit, not age alone, gives understanding. He must speak or burst. He will show no partiality but speak what he knows.',
    keyThemes: ['Youth speaks', 'Anger at both sides', 'Spirit gives wisdom', 'Fresh perspective'],
    christConnection: 'Elihu\'s claim that the Spirit, not mere age, gives understanding points to the work of God\'s Spirit in revealing truth. The ultimate revelation comes through Christ, on whom the Spirit rested without measure.'
  },
  {
    bookId: 'job',
    chapter: 33,
    title: 'Elihu\'s First Speech: God Speaks in Many Ways',
    summary: 'Elihu addresses Job directly, claiming to speak for God without terror. He challenges Job\'s claim of innocence while complaining of God\'s silence. God does speak—in dreams, visions, and through pain—to turn people from sinful paths. When someone is near death, if a mediator interprets, God may redeem that person and restore them to righteousness. God does this repeatedly to bring people back from the pit to the light of life.',
    keyThemes: ['Divine communication', 'Dreams and suffering teach', 'Mediator needed', 'Restoration possible'],
    christConnection: 'Elihu\'s mention of a mediator who can interpret and restore anticipates Christ, the one mediator between God and humanity. Through Him, we are redeemed from the pit and brought into the light of life.'
  },
  {
    bookId: 'job',
    chapter: 34,
    title: 'Elihu Defends God\'s Justice',
    summary: 'Elihu invites the wise to judge between his words and Job\'s. He quotes Job\'s complaint that righteousness profits nothing. But Elihu insists God cannot do wickedness; He repays according to deeds. God governs the earth—will anyone condemn the Righteous One? God is not partial to princes over poor; all are His work. He watches all human ways. No darkness can hide the wicked. God shatters the mighty without investigation. Job has spoken without knowledge.',
    keyThemes: ['God\'s inherent justice', 'No partiality', 'All-seeing judgment', 'Job\'s ignorance charged'],
    christConnection: 'Elihu\'s defense of God\'s justice points to Christ, the righteous judge who will judge the living and the dead. His judgment will be perfectly just, without partiality, according to truth.'
  },
  {
    bookId: 'job',
    chapter: 35,
    title: 'Elihu: Does God Gain from Your Righteousness?',
    summary: 'Elihu asks whether Job thinks it profits him more than sin to be righteous. Look at the heavens—your sin or righteousness affects your fellow humans, not God. People cry out under oppression but do not seek God. They lack faith, so God does not answer. Job\'s complaint that God ignores him is empty talk. He should wait, for God will act in His own time.',
    keyThemes: ['God unaffected by human actions', 'Oppressed cry without faith', 'Wait for God', 'Empty words charged'],
    christConnection: 'While Elihu correctly notes that God doesn\'t "need" our righteousness, the gospel reveals that God delights in His people—not from need but from love. In Christ, we see that God deeply cares about human faith and responds.'
  },
  {
    bookId: 'job',
    chapter: 36,
    title: 'Elihu: God\'s Greatness and Purpose in Suffering',
    summary: 'Elihu claims more to say on God\'s behalf. God is mighty but does not despise any; He gives justice to the afflicted. When righteous people are bound in affliction, He reveals their sin and commands them to return. If they obey, they prosper; if not, they perish. The godless in heart harbor anger and don\'t cry for help when bound. Elihu warns Job against preferring iniquity to affliction. God\'s power as teacher is unmatched.',
    keyThemes: ['More on God\'s behalf', 'Affliction reveals sin', 'Choice to return', 'God as teacher'],
    christConnection: 'Elihu\'s view that suffering teaches is partially correct. Hebrews teaches that discipline produces righteousness. Yet the cross shows suffering can have purposes beyond personal correction—redemptive purposes for others.'
  },
  {
    bookId: 'job',
    chapter: 37,
    title: 'Elihu: The Majestic Storm-God',
    summary: 'Elihu describes God\'s power in the thunderstorm—His voice thunders, sending lightning and snow. Animals hide; humanity stands still. God brings clouds for correction, mercy, or blessing. Elihu asks Job: Can you spread out the skies like a molten mirror? Can you even look at the sun when the wind clears the sky? Out of the north comes golden splendor; God is clothed in awesome majesty. We cannot find Him; He is great in power and justice. Therefore people fear Him.',
    keyThemes: ['Storm as theophany', 'Human limitation', 'Divine majesty', 'Fear appropriate'],
    christConnection: 'Elihu\'s description of God in the storm prepares for God\'s own appearance in the whirlwind. Christ, who calmed the storm with a word, reveals that the Storm-God became a servant, making the fearsome approachable.'
  },
  {
    bookId: 'job',
    chapter: 38,
    title: 'God Speaks: Creation\'s Wonders',
    summary: 'Finally, God answers Job from the whirlwind—not to explain suffering but to display His sovereignty. "Who is this that darkens counsel by words without knowledge?" Where was Job when God laid earth\'s foundation, set its measurements, confined the sea, commanded morning, and stored snow and hail? Can Job bind the Pleiades or loose Orion? Does he send lightning and give the hawk its wisdom? Question after question demonstrates Job\'s creaturely limitations.',
    keyThemes: ['God speaks at last', 'Questions not answers', 'Creation\'s marvels', 'Human smallness'],
    christConnection: 'God\'s questions reveal that wisdom belongs to the Creator, not creatures. Christ, as the Wisdom of God, is the one through whom all these wonders were made. The Creator who questions Job is the one who became flesh to answer our deepest needs.'
  },
  {
    bookId: 'job',
    chapter: 39,
    title: 'God Speaks: The Animal Kingdom',
    summary: 'God continues His examination through the animal kingdom. Does Job know when mountain goats give birth? Who sets the wild donkey free? Will the wild ox serve Job? The ostrich lacks wisdom yet outpaces the horse. Did Job give the horse its might, make its mane leap, or teach the hawk to soar? These creatures live beyond human control yet under divine care. Job cannot even govern animals—how can he question God\'s governance of all creation?',
    keyThemes: ['Wild creatures described', 'Divine providence', 'Human limits exposed', 'God\'s care for all'],
    christConnection: 'God\'s care for creatures Job cannot control shows divine providence over all creation. Christ affirms this: God feeds the birds and clothes the lilies. If God cares for wild animals, how much more for those made in His image?'
  },
  {
    bookId: 'job',
    chapter: 40,
    title: 'God Challenges Job; Behemoth Described',
    summary: 'God pauses: "Shall a faultfinder contend with the Almighty?" Job humbly covers his mouth—once, twice he has spoken but will say no more. God speaks again: Will Job condemn God to justify himself? Can Job thunder like God, abase the proud, and tread down the wicked? Then God describes Behemoth (likely the hippopotamus or a primordial creature)—powerful, peaceful among reeds, bones like iron, made to be tamed only by its Maker.',
    keyThemes: ['Job silenced', 'Self-justification challenged', 'Behemoth\'s power', 'Only God can tame'],
    christConnection: 'The power of Behemoth, which only its Maker can approach, pictures forces beyond human control that God alone manages. Christ demonstrates authority over nature, demons, and death—forces we cannot tame but He commands.'
  },
  {
    bookId: 'job',
    chapter: 41,
    title: 'Leviathan: Fearsome Beyond Human Control',
    summary: 'God describes Leviathan (likely the crocodile or a mythical sea monster)—can Job draw it out with a hook, make a pet of it, or pierce its scales? Its sneeze flashes light; its breath kindles coals. Strength is in its neck; terror dances before it. Its heart is hard as stone; when it raises itself, the mighty are afraid. No sword or spear can harm it. It churns the deep like a pot. Nothing on earth is its equal—a creature without fear. God is Lord even of this.',
    keyThemes: ['Leviathan\'s terror', 'Human powerlessness', 'Chaos creature described', 'God\'s supreme authority'],
    christConnection: 'Leviathan represents chaos and evil that humanity cannot overcome. In Christ, the ultimate "Leviathan"—Satan himself—is defeated. The cross crushes the serpent\'s head; chaos bows to the Creator\'s redemptive power.'
  },
  {
    bookId: 'job',
    chapter: 42,
    title: 'Job\'s Repentance and Restoration',
    summary: 'Job responds in humble repentance: he had spoken of things too wonderful, things he did not understand. "I had heard of you by the hearing of the ear, but now my eye sees you; therefore I despise myself and repent in dust and ashes." God rebukes the three friends for not speaking rightly as Job did; they must offer sacrifice and have Job pray for them. Then God restores Job\'s fortunes double—twice the livestock, ten more children, 140 more years of life.',
    keyThemes: ['Humble repentance', 'Seeing God', 'Friends rebuked', 'Double restoration'],
    christConnection: 'Job\'s encounter with God brought transformation—not answers to every question, but a relationship. Christ offers the same: not always explanations, but Himself. The restoration points to resurrection hope when all losses are more than restored.'
  }
];

// PSALMS CHAPTERS - Book 1 (1-41)
export const PSALMS_CHAPTERS: ChapterSummary[] = [
  {
    bookId: 'psalms',
    chapter: 1,
    title: 'Two Ways: The Blessed and the Wicked',
    summary: 'The Psalter opens with wisdom teaching, setting forth two contrasting paths: the righteous who delight in God\'s law and prosper like trees by streams, versus the wicked who are like chaff blown away. The blessed person avoids the counsel of the ungodly, the way of sinners, and the seat of scoffers. Instead, they meditate on God\'s Word day and night. This psalm establishes the fundamental worldview of the entire collection.',
    keyThemes: ['Two ways of life', 'Delight in God\'s law', 'Prosperity of the righteous', 'Judgment of the wicked'],
    christConnection: 'Christ is the truly blessed man who perfectly delighted in the Father\'s will. He is the tree of life planted by living waters, and all who are in Him share His blessedness.'
  },
  {
    bookId: 'psalms',
    chapter: 2,
    title: 'The Lord\'s Anointed King',
    summary: 'Nations rage against the Lord and His Anointed (Messiah), but God laughs at their futile rebellion. He has installed His King on Zion. The decree is proclaimed: "You are my Son; today I have begotten you." The nations are given to the Son as His inheritance. Kings are warned to serve the Lord with fear and kiss the Son, lest they perish. Blessed are all who take refuge in Him.',
    keyThemes: ['Messianic kingship', 'Divine sonship', 'Nations as inheritance', 'Warning to rulers'],
    christConnection: 'This is the preeminent messianic psalm, quoted repeatedly in the NT. Christ is God\'s begotten Son, enthroned at the right hand, to whom all authority in heaven and earth is given.'
  },
  {
    bookId: 'psalms',
    chapter: 3,
    title: 'Morning Prayer of Trust Amid Enemies',
    summary: 'Written when David fled from Absalom, this psalm expresses confidence in God despite overwhelming opposition. Many say there is no salvation for him, but the Lord is his shield, glory, and lifter of his head. David cried to God and was answered. He slept and woke because the Lord sustained him. He fears not ten thousands arrayed against him. Salvation belongs to the Lord.',
    keyThemes: ['Trust amid betrayal', 'God as shield', 'Sustained through crisis', 'Salvation from the Lord'],
    christConnection: 'David\'s betrayal by his son Absalom pictures Christ\'s betrayal. Yet Christ, like David, entrusted Himself to the Father and was raised from the sleep of death to victory.'
  },
  {
    bookId: 'psalms',
    chapter: 4,
    title: 'Evening Prayer of Peace',
    summary: 'An evening psalm complementing Psalm 3. David calls on the God of his righteousness who gives relief in distress. He addresses those who love worthless things and seek lies, reminding them that the Lord has set apart the godly. Let them offer right sacrifices and trust in the Lord. Many ask who will show them good, but David finds more gladness from God than from abundant harvest. He lies down in peace because the Lord keeps him safe.',
    keyThemes: ['Evening peace', 'Trust over anxiety', 'Joy from God', 'Secure rest'],
    christConnection: 'Christ gives peace that the world cannot give. He is our righteousness, and in Him we find rest that surpasses what any earthly abundance provides.'
  },
  {
    bookId: 'psalms',
    chapter: 5,
    title: 'Morning Prayer for Protection',
    summary: 'David presents his morning prayer before the Lord, watching expectantly for God\'s answer. God takes no pleasure in wickedness; evil cannot dwell with Him. The boastful, liars, and bloodthirsty are abhorred. But by God\'s abundant mercy, David enters His house and worships in holy fear. He asks God to lead him in righteousness because of his enemies. The wicked speak flattery but plot destruction. Let God judge them. Meanwhile, let all who take refuge in God rejoice.',
    keyThemes: ['Morning devotion', 'Divine holiness', 'Prayer for guidance', 'Joy in God\'s protection'],
    christConnection: 'Christ is our way into God\'s presence; through Him we enter the holy place by abundant mercy. He leads us in the path of righteousness for His name\'s sake.'
  },
  {
    bookId: 'psalms',
    chapter: 6,
    title: 'Prayer in Distress: First Penitential Psalm',
    summary: 'The first of seven penitential psalms, David pleads for mercy, asking God not to rebuke him in anger. His bones are troubled; his soul is deeply distressed. How long? He asks to be delivered for the sake of God\'s steadfast love. In death there is no remembrance of God. He is weary with groaning, flooding his bed with tears. Yet the psalm turns: the Lord has heard his weeping and accepted his prayer. His enemies will be put to shame.',
    keyThemes: ['Plea for mercy', 'Physical and spiritual distress', 'Prayer heard', 'Enemies ashamed'],
    christConnection: 'Christ in Gethsemane experienced such distress that His sweat became like drops of blood. He who knew no sin became sin for us, bearing the weight that made David groan.'
  },
  {
    bookId: 'psalms',
    chapter: 7,
    title: 'Appeal to the Righteous Judge',
    summary: 'David takes refuge in God from his pursuers, asking to be delivered from those who would tear his soul like lions. He invites God to examine him—if there is wrong in his hands, let the enemy prevail. He calls on God to arise in anger against his foes. The Lord judges the peoples; David asks to be vindicated according to his righteousness and integrity. God is a righteous judge who will repay the wicked with their own devices.',
    keyThemes: ['Taking refuge', 'Appeal for vindication', 'Righteous judgment', 'Wicked reaping consequences'],
    christConnection: 'Christ, the truly innocent one, entrusted Himself to the righteous judge. He is now the appointed judge of the living and the dead who will render to each according to their deeds.'
  },
  {
    bookId: 'psalms',
    chapter: 8,
    title: 'Human Dignity and Divine Glory',
    summary: 'Beholding creation\'s vastness, David marvels that God pays attention to mere humans. Yet God has crowned humanity with glory and honor, giving them dominion over all creation—animals, birds, fish. Framing this meditation is the refrain: "O Lord, our Lord, how majestic is your name in all the earth!" Even infants and nursing babies proclaim God\'s strength. Creation reveals the Creator\'s glory.',
    keyThemes: ['Human dignity', 'Divine majesty', 'Dominion over creation', 'Creation\'s testimony'],
    christConnection: 'Hebrews applies this psalm to Christ, the true Man who received the dominion Adam forfeited. In Him, human destiny is fulfilled—crowned with glory at God\'s right hand.'
  },
  {
    bookId: 'psalms',
    chapter: 9,
    title: 'Thanksgiving for Justice',
    summary: 'David gives wholehearted thanks for God\'s wonderful deeds. When enemies turned back, they perished before God\'s presence. God sits enthroned forever, judging the world in righteousness. He is a stronghold for the oppressed, never forsaking those who seek Him. The psalmist calls for praise and recounts how the wicked are caught in their own schemes while the needy are not forgotten. Let the nations know they are merely human.',
    keyThemes: ['Thanksgiving for deliverance', 'Divine justice', 'Refuge for the oppressed', 'Nations judged'],
    christConnection: 'Christ executes perfect justice from His throne at the Father\'s right hand. The oppressed who cry to Him will never be forgotten; He remembers the afflicted.'
  },
  {
    bookId: 'psalms',
    chapter: 10,
    title: 'Why Do the Wicked Prosper?',
    summary: 'The psalmist asks why God stands far off in times of trouble while the wicked arrogantly pursue the poor. The wicked boast, curse, and say in their hearts that God has forgotten or hidden His face. They lurk in ambush for the innocent. Yet God does see trouble and grief. He will break the arm of the wicked and call them to account. The Lord is king forever; the nations perish from His land. He hears the humble and executes justice for the orphan and oppressed.',
    keyThemes: ['Wicked prosperity questioned', 'Divine apparent absence', 'God sees all', 'Justice for the vulnerable'],
    christConnection: 'Christ, who seemed absent on the cross, has been exalted as King. He will judge the wicked and vindicate the oppressed when He returns in glory.'
  },
  {
    bookId: 'psalms',
    chapter: 11,
    title: 'Trust When Foundations Shake',
    summary: 'Some counsel David to flee like a bird to the mountains because the wicked are attacking the upright. "If the foundations are destroyed, what can the righteous do?" But David\'s answer is: "In the Lord I take refuge." God is in His holy temple; His throne is in heaven. He observes and tests all people. He hates the wicked and will rain fire on them. The Lord is righteous and loves righteousness; the upright will see His face.',
    keyThemes: ['Refuge in God', 'Foundations shaking', 'Divine testing', 'Seeing God\'s face'],
    christConnection: 'When all earthly foundations fail, Christ remains the solid rock. Those who trust Him will see God\'s face, for in Christ the blessed vision is promised to the pure in heart.'
  },
  {
    bookId: 'psalms',
    chapter: 12,
    title: 'Plea Against Deception',
    summary: 'David calls for God\'s help because the faithful have vanished and truth has disappeared. People speak falsehood and flattery with double hearts. They boast of their tongues\' power. But the Lord will arise to protect the poor and needy who groan. God\'s words are pure, like silver refined seven times. He will guard and preserve His people from this wicked generation, even though the vilest are exalted.',
    keyThemes: ['Vanishing faithfulness', 'Deceitful speech', 'Pure divine words', 'Protection promised'],
    christConnection: 'Christ is the faithful witness whose words are pure truth. In a world of deception, He speaks the Father\'s words with perfect clarity and authority.'
  },
  {
    bookId: 'psalms',
    chapter: 13,
    title: 'How Long, O Lord?',
    summary: 'Four times David asks "How long?"—will God forget him forever, hide His face, leave him in sorrow, let enemies triumph? He pleads for God to look and answer, to light up his eyes lest he sleep in death and enemies rejoice. Yet the psalm turns to trust: "I have trusted in your steadfast love." His heart will rejoice in God\'s salvation. He will sing to the Lord who has dealt bountifully with him.',
    keyThemes: ['Lament\'s persistence', 'Feeling forgotten', 'Turn to trust', 'Anticipating praise'],
    christConnection: 'Christ on the cross felt forsaken yet continued to trust. The movement from lament to praise models faith\'s perseverance through darkness to dawn.'
  },
  {
    bookId: 'psalms',
    chapter: 14,
    title: 'The Fool\'s Denial of God',
    summary: 'The fool says in his heart there is no God. Such people are corrupt and do abominable deeds; none does good. God looks down from heaven to see if any understand and seek Him—but all have turned aside; no one does good, not even one. These evildoers devour God\'s people like bread and do not call on the Lord. But they will be in great terror, for God is with the righteous generation. Oh, that salvation would come from Zion!',
    keyThemes: ['Practical atheism', 'Universal corruption', 'God with the righteous', 'Longing for salvation'],
    christConnection: 'Paul quotes this psalm in Romans 3 to establish universal sinfulness and the need for Christ\'s righteousness. Salvation has indeed come from Zion through the Son of David.'
  },
  {
    bookId: 'psalms',
    chapter: 15,
    title: 'Who May Dwell with God?',
    summary: 'David asks who may sojourn in God\'s tent and dwell on His holy hill. The answer: one who walks blamelessly, does what is right, speaks truth from the heart, doesn\'t slander, does no evil to neighbors, honors those who fear the Lord, keeps oaths even when it hurts, lends without interest, and takes no bribes. Such a person will never be moved.',
    keyThemes: ['Requirements for God\'s presence', 'Ethical integrity', 'Truthful speech', 'Unmoved stability'],
    christConnection: 'Only Christ perfectly meets these requirements. Through Him, those who trust in His righteousness are welcomed into God\'s presence—not by their own merit but by His.'
  },
  {
    bookId: 'psalms',
    chapter: 16,
    title: 'The Path of Life',
    summary: 'David takes refuge in God, acknowledging Him as Lord and the source of all good. He delights in the saints of the land. Those who run after other gods multiply their sorrows. The Lord is David\'s chosen portion and cup; his lot is secure, his inheritance pleasant. He blesses the Lord who counsels him. With God at his right hand, he will not be shaken. Therefore his heart is glad and his flesh dwells secure, for God will not abandon him to Sheol or let His holy one see corruption. God shows the path of life; in His presence is fullness of joy.',
    keyThemes: ['God as portion', 'Pleasant inheritance', 'Unshaken confidence', 'Path of life'],
    christConnection: 'Peter at Pentecost and Paul at Pisidian Antioch apply this psalm to Christ\'s resurrection—God did not let His Holy One see corruption. Christ is the path to life and eternal joy.'
  },
  {
    bookId: 'psalms',
    chapter: 17,
    title: 'Prayer of the Innocent',
    summary: 'David asks God to hear his righteous cause and vindicate him. He has tested his heart, found no transgression, and kept from paths of the violent. He calls on God who saves those who take refuge in Him. May God hide him in the shadow of His wings from deadly enemies. These foes are enclosed in their own fat, speaking arrogantly, surrounding David like a lion. Let God rise and confront them! David will be satisfied when he awakes with God\'s likeness.',
    keyThemes: ['Plea for vindication', 'Tested heart', 'Shadow of God\'s wings', 'Satisfaction in God\'s likeness'],
    christConnection: 'The hope of awaking in God\'s likeness points to resurrection. Christ, perfectly innocent, was vindicated by resurrection and transforms believers into His image.'
  },
  {
    bookId: 'psalms',
    chapter: 18,
    title: 'Royal Thanksgiving for Deliverance',
    summary: 'David\'s great victory song celebrates God as his rock, fortress, deliverer, shield, horn of salvation, and stronghold. From distress he called to God, who came down with cosmic power—earth trembled, skies darkened, God rode on a cherub, shot arrows of lightning, and delivered David from the mighty waters. God rescued him because He delighted in him. God equipped David for battle and made him head of nations. The psalm concludes praising God who gives great salvation to His anointed.',
    keyThemes: ['Comprehensive deliverance', 'Theophany imagery', 'Divine delight in His servant', 'Victory over enemies'],
    christConnection: 'This royal psalm finds its fullest meaning in Christ, the ultimate Anointed One. God\'s cosmic intervention to deliver His King pictures Christ\'s resurrection victory over all enemies.'
  },
  {
    bookId: 'psalms',
    chapter: 19,
    title: 'God\'s Two Books: Creation and Scripture',
    summary: 'The heavens declare God\'s glory; the skies proclaim His handiwork. Day after day, night after night, they pour forth speech—no words, yet their voice goes through all the earth. The sun emerges like a bridegroom and runs its course with joy. Then the psalm turns to God\'s law: perfect, sure, right, pure, clean, true. More desirable than gold, sweeter than honey. The law warns and rewards the keeper. David prays to be cleansed from hidden faults and kept from presumptuous sins. May his words and thoughts be acceptable to God, his Rock and Redeemer.',
    keyThemes: ['Creation\'s testimony', 'Law\'s perfection', 'Desire for purity', 'God as Redeemer'],
    christConnection: 'Christ is the ultimate revelation—the Word through whom creation was made and who fulfills all Scripture. He is the Bridegroom who runs His course, our Rock and Redeemer.'
  },
  {
    bookId: 'psalms',
    chapter: 20,
    title: 'Prayer for the King Before Battle',
    summary: 'The people pray for their king before battle: may God answer him in distress, send help from the sanctuary, remember his offerings, and fulfill his plans. They will shout for joy in his victory. Some trust in chariots, others in horses, but God\'s people trust in the name of the Lord their God. Those who trust in other powers will collapse, but God\'s people rise and stand upright. Save the king and answer when we call!',
    keyThemes: ['Intercession for the king', 'Trust in God\'s name', 'Confidence before battle', 'Victory anticipated'],
    christConnection: 'Christ is the King for whom we pray and who goes before us in every battle. Trust in Him, not in human power, brings ultimate victory.'
  },
  {
    bookId: 'psalms',
    chapter: 21,
    title: 'Thanksgiving for the King\'s Victory',
    summary: 'The companion to Psalm 20, this psalm thanks God for the king\'s victory. The king rejoices in God\'s strength and salvation. God granted his heart\'s desire, crowned him with gold, gave him life forever. Great is his glory because of God\'s salvation. God makes him blessed forever and glad with His presence. The king trusts in the Lord, who will defeat all enemies. God\'s hand will find those who hate Him. Exalt yourself, O Lord, in your strength!',
    keyThemes: ['Royal thanksgiving', 'Eternal life granted', 'Enemies defeated', 'Trust in the Lord'],
    christConnection: 'The promise of life forever to the king finds fulfillment in Christ\'s resurrection. He has received the crown of glory and will defeat all His enemies.'
  },
  {
    bookId: 'psalms',
    chapter: 22,
    title: 'From Forsakenness to Praise',
    summary: 'This psalm of profound suffering begins with the cry: "My God, my God, why have you forsaken me?" The sufferer describes physical torment—bones out of joint, heart melted, strength dried up, hands and feet pierced, garments divided. Yet memory of God\'s faithfulness to the fathers sustains hope. The psalm turns dramatically: God has answered! The afflicted will praise Him in the great congregation. All ends of the earth will turn to the Lord. Future generations will proclaim His righteousness.',
    keyThemes: ['Forsakenness expressed', 'Physical suffering detailed', 'Dramatic turn to praise', 'Universal worship anticipated'],
    christConnection: 'Jesus quoted this psalm from the cross. Its details—pierced hands, divided garments, mocking crowds—were literally fulfilled in His passion. His resurrection brought the turn to praise.'
  },
  {
    bookId: 'psalms',
    chapter: 23,
    title: 'The Lord Is My Shepherd',
    summary: 'The most beloved psalm presents God as shepherd who provides everything needed. He makes His sheep lie down in green pastures, leads beside still waters, restores the soul, guides in right paths. Even through death\'s valley, there is no fear because the Shepherd\'s rod and staff comfort. God prepares a feast before enemies, anoints with oil, fills the cup to overflowing. Goodness and mercy follow the believer all their days, and they will dwell in God\'s house forever.',
    keyThemes: ['Divine shepherd', 'Complete provision', 'Fearless in danger', 'Eternal dwelling'],
    christConnection: 'Christ declared Himself the Good Shepherd who lays down His life for the sheep. He leads through death to life, preparing an eternal home in the Father\'s house.'
  },
  {
    bookId: 'psalms',
    chapter: 24,
    title: 'The King of Glory Enters',
    summary: 'The earth belongs to the Lord who founded it on the seas. Who may ascend His holy hill? Those with clean hands, pure hearts, who don\'t lift their souls to idols. They receive blessing and righteousness from God. Then a dramatic dialogue: "Lift up your heads, O gates! That the King of glory may come in!" Who is this King of glory? The Lord, strong and mighty in battle. Lift up, ancient doors! The Lord of hosts is the King of glory.',
    keyThemes: ['Earth belongs to God', 'Requirements for worship', 'King of glory\'s entrance', 'Lord of hosts'],
    christConnection: 'Christ ascending to heaven after resurrection fulfills this psalm. The victorious King enters the heavenly sanctuary, taking His throne at the Father\'s right hand.'
  },
  {
    bookId: 'psalms',
    chapter: 25,
    title: 'Prayer for Guidance and Forgiveness',
    summary: 'David lifts his soul to God, trusting He will not let him be put to shame. He asks for guidance in God\'s truth and teaching, remembering God\'s compassion from of old. He pleads that God not remember his youthful sins but according to His love remember him. The Lord instructs sinners in the way and leads the humble in justice. All God\'s paths are love and faithfulness for those who keep His covenant. For His name\'s sake, may God pardon David\'s great guilt. Guard his soul, deliver him, and redeem Israel.',
    keyThemes: ['Trust in God', 'Prayer for guidance', 'Confession of sin', 'Divine instruction'],
    christConnection: 'Christ is the way, truth, and life who guides those who trust in Him. Through His pardon, our great guilt is forgiven for God\'s name\'s sake.'
  },
  {
    bookId: 'psalms',
    chapter: 26,
    title: 'Plea of Integrity',
    summary: 'David asks God to vindicate him because he has walked in integrity and trusted without wavering. He invites God to test and try his heart. He has not sat with the deceitful or gathered with hypocrites. He washes his hands in innocence and loves God\'s house where His glory dwells. He asks not to be swept away with sinners but to continue walking in integrity. He stands on level ground and blesses the Lord in the congregation.',
    keyThemes: ['Integrity affirmed', 'Avoiding the wicked', 'Love for God\'s house', 'Public worship'],
    christConnection: 'Christ alone had perfect integrity before God. Through union with Him, believers are vindicated—not by their own righteousness but by His.'
  },
  {
    bookId: 'psalms',
    chapter: 27,
    title: 'Light, Salvation, Stronghold',
    summary: 'The Lord is David\'s light, salvation, and stronghold—whom shall he fear? Though armies encamp against him, his heart will not fear. One thing David seeks: to dwell in God\'s house, beholding His beauty. In trouble, God will hide him in His shelter and lift him above enemies. David calls on God, seeks His face, and asks not to be forsaken. Even if father and mother forsake him, the Lord will take him in. Teach me your way, O Lord. Wait for the Lord; be strong and take heart.',
    keyThemes: ['God as light and salvation', 'Fearlessness', 'One desire: God\'s presence', 'Waiting on the Lord'],
    christConnection: 'Christ is the light of the world and our salvation. In Him we see the beauty of God. He was forsaken that we might never be, and He teaches us to wait with hope.'
  },
  {
    bookId: 'psalms',
    chapter: 28,
    title: 'Answered Prayer',
    summary: 'David calls to God, his rock, pleading not to be silent lest David become like those descending to the pit. Hear his pleas as he lifts hands toward the sanctuary. Don\'t drag him away with the wicked who speak peace while planning evil. Give them what they deserve! The psalm turns: the Lord has heard! He is David\'s strength and shield. His heart trusts and is helped; he leaps for joy and sings thanks. The Lord is His people\'s strength and saving refuge. Shepherd them forever!',
    keyThemes: ['Cry for hearing', 'Trust in God', 'Answered prayer', 'God as shepherd'],
    christConnection: 'Christ is our rock and our shepherd who hears every cry. Through Him, our prayers ascend to the Father\'s throne and receive answer.'
  },
  {
    bookId: 'psalms',
    chapter: 29,
    title: 'The Voice of the Lord',
    summary: 'Heavenly beings are called to ascribe glory and strength to the Lord. The voice of the Lord thunders over the waters with power and majesty, breaking cedars, shaking the wilderness, stripping forests, making deer give birth. Seven times "the voice of the Lord" resounds. In His temple all cry "Glory!" The Lord sat enthroned at the Flood; He sits enthroned as King forever. May the Lord give strength to His people and bless them with peace.',
    keyThemes: ['Divine voice in storm', 'Creation responds', 'Eternal kingship', 'Blessing of peace'],
    christConnection: 'Christ spoke with authority that made creation obey—calming storms, raising the dead. He is the voice of the Lord, the eternal King who gives peace.'
  },
  {
    bookId: 'psalms',
    chapter: 30,
    title: 'Mourning Turned to Dancing',
    summary: 'A psalm of thanksgiving for healing. David exalts God who drew him up, healed him, and kept him from the pit. He calls the saints to praise and give thanks. God\'s anger lasts a moment; His favor a lifetime. Weeping may tarry for the night, but joy comes in the morning. In prosperity David felt secure, but when God hid His face, he was dismayed. He cried for mercy—what profit is there in death? God turned his mourning into dancing, removed sackcloth, clothed him with gladness. He will give thanks forever.',
    keyThemes: ['Healing thanksgiving', 'Momentary anger, lasting favor', 'Joy in the morning', 'Mourning to dancing'],
    christConnection: 'Christ\'s resurrection is the ultimate morning after the night of crucifixion. Through Him, our mourning is turned to joy that no one can take away.'
  },
  {
    bookId: 'psalms',
    chapter: 31,
    title: 'Into Your Hands',
    summary: 'David takes refuge in God, asking never to be put to shame. God is his rock, fortress, and guide. "Into your hand I commit my spirit; you have redeemed me, O Lord, faithful God." David hates idol-worshippers but trusts in the Lord. He calls for mercy because of his distress—eye, soul, and body wasted by grief. He is scorned, forgotten, discarded. But he trusts God, whose times are in His hands. Let God\'s face shine on His servant. Love the Lord, all His saints! Be strong and take heart, you who hope in the Lord.',
    keyThemes: ['Spirit committed to God', 'Distress and trust', 'Divine faithfulness', 'Hope in the Lord'],
    christConnection: 'Jesus quoted this psalm from the cross: "Into your hands I commit my spirit." His trust in death models ours. He was delivered through resurrection.'
  },
  {
    bookId: 'psalms',
    chapter: 32,
    title: 'Blessed Forgiveness',
    summary: 'Blessed is the one whose transgression is forgiven, whose sin is covered, against whom the Lord counts no iniquity. When David kept silent about his sin, his bones wasted away. But when he acknowledged his sin, God forgave. Let the godly pray in times of distress; God will preserve them from trouble. The Lord promises to instruct and teach the way to go. Don\'t be like a horse needing bit and bridle. The wicked have many sorrows, but steadfast love surrounds those who trust in the Lord. Rejoice and shout for joy!',
    keyThemes: ['Blessedness of forgiveness', 'Confession brings relief', 'Divine instruction', 'Joy in the Lord'],
    christConnection: 'Paul quotes this psalm in Romans 4 regarding justification. Through Christ, transgression is forgiven, sin covered, and no iniquity counted—this is the gospel.'
  },
  {
    bookId: 'psalms',
    chapter: 33,
    title: 'Praise to the Creator and Ruler',
    summary: 'Praise befits the upright. Sing a new song with skillful music! God\'s word is upright; He loves righteousness and justice. By His word the heavens were made; He gathered the seas. Let all earth fear the Lord! He frustrates the plans of nations but His counsel stands forever. Blessed is the nation whose God is the Lord. From heaven God observes all humanity. No king is saved by great armies; strength doesn\'t ensure deliverance. But God watches those who fear Him. Our soul waits for the Lord—our help and shield. May your steadfast love be upon us as we hope in you.',
    keyThemes: ['New song of praise', 'Creation by God\'s word', 'Nations under God', 'Hope in God\'s love'],
    christConnection: 'Through Christ, the Word by whom all was made, we are the blessed people who belong to God. Our hope is in Him, our help and shield.'
  },
  {
    bookId: 'psalms',
    chapter: 34,
    title: 'Taste and See That the Lord Is Good',
    summary: 'An acrostic psalm of thanksgiving. David will bless the Lord at all times; his soul boasts in the Lord. Magnify the Lord together! David sought the Lord and was delivered from all his fears. Those who look to Him are radiant and not ashamed. The angel of the Lord encamps around those who fear Him. "Taste and see that the Lord is good!" The lions may lack, but those who seek the Lord lack no good thing. The Lord is near to the brokenhearted. Many are the afflictions of the righteous, but the Lord delivers from them all.',
    keyThemes: ['Continual blessing', 'Tasting God\'s goodness', 'Angel\'s protection', 'Deliverance from affliction'],
    christConnection: 'Christ invites us to taste and see. He is the good God who became man. Though afflicted in many ways, He was delivered through resurrection.'
  },
  {
    bookId: 'psalms',
    chapter: 35,
    title: 'Plea for Justice Against Enemies',
    summary: 'David calls on God to contend against those who contend against him, to fight those who fight him. Let those who seek his life be put to shame. David clothed himself in sackcloth when they were sick, but they repaid him evil for good, rejoicing at his stumbling. How long will God look on? Rescue David\'s soul! He will thank God in the great congregation. Don\'t let malicious enemies rejoice or wink their eyes in triumph. Let those who delight in David\'s righteousness shout for joy. Great is the Lord who delights in His servant\'s welfare.',
    keyThemes: ['Call for divine intervention', 'Evil repaid for good', 'Vindication sought', 'God delights in servant\'s welfare'],
    christConnection: 'Christ, who repaid good for evil, was yet treated with malice. He entrusted Himself to the righteous Judge and was ultimately vindicated through resurrection.'
  },
  {
    bookId: 'psalms',
    chapter: 36,
    title: 'Wickedness and God\'s Steadfast Love',
    summary: 'Transgression speaks to the wicked deep in their hearts; there is no fear of God before their eyes. They flatter themselves, speak mischief and deceit, plan evil on their beds. But God\'s steadfast love extends to the heavens, His faithfulness to the clouds. His righteousness is like mighty mountains, His judgments like the great deep. He saves man and beast. How precious is His steadfast love! Under His wings people take refuge. They feast on the abundance of His house and drink from the river of His delights. In His light we see light. Continue your love to those who know you!',
    keyThemes: ['Wicked described', 'Steadfast love praised', 'Feasting at God\'s house', 'Light in God\'s light'],
    christConnection: 'Christ is the light in whom we see light. Through Him, we feast at the Father\'s table and drink from the river of eternal delights.'
  },
  {
    bookId: 'psalms',
    chapter: 37,
    title: 'Trust and Do Good',
    summary: 'An acrostic wisdom psalm. Don\'t fret over evildoers who flourish like grass—they will wither. Trust in the Lord and do good. Delight in the Lord, and He will give your heart\'s desires. Commit your way to Him; He will act. Be still before the Lord and wait patiently. The meek will inherit the land. The wicked borrow and don\'t repay, but the righteous are generous. God\'s steps guide the person whose way He delights in. David has been young and old but never seen the righteous forsaken. Depart from evil, do good, and dwell forever.',
    keyThemes: ['Don\'t fret', 'Trust and delight', 'Meek inherit land', 'Righteous never forsaken'],
    christConnection: 'Christ quoted this psalm: "The meek shall inherit the earth." He is the ultimate righteous one in whom we trust, and through Him we inherit eternal blessing.'
  },
  {
    bookId: 'psalms',
    chapter: 38,
    title: 'Prayer in Severe Suffering',
    summary: 'The third penitential psalm. David asks God not to rebuke him in anger. God\'s arrows have sunk into him; divine hand presses down. No soundness in his flesh because of God\'s indignation; no health in his bones because of sin. His iniquities overwhelm him. His wounds fester from foolishness. He is bowed down, mourning, loins filled with burning. Friends and companions stand far off. Yet David waits for the Lord. Don\'t forsake me! Make haste to help me, O Lord, my salvation.',
    keyThemes: ['Sin\'s consequences felt', 'Physical suffering', 'Abandonment by friends', 'Waiting for the Lord'],
    christConnection: 'Christ bore the arrows of divine wrath against sin, though He had none of His own. His friends forsook Him, yet He committed Himself to the Father.'
  },
  {
    bookId: 'psalms',
    chapter: 39,
    title: 'The Brevity of Life',
    summary: 'David resolved to guard his mouth, but his heart grew hot within him, and finally he spoke: "Lord, let me know my end and the measure of my days." Life is but a breath, a few handbreadths. Man is a mere phantom; he heaps up wealth not knowing who will gather it. David\'s hope is in the Lord. Deliver him from transgressions; don\'t make him the scorn of fools. He is silent, for God has done it. Remove Your plague from me; I am spent by Your hostility. Hear my prayer before I depart and am no more.',
    keyThemes: ['Guarding speech', 'Life\'s brevity', 'Hope in the Lord', 'Prayer before death'],
    christConnection: 'Christ, who lived a brief earthly life, redeems our fleeting days. In Him, our hope extends beyond death to eternal life.'
  },
  {
    bookId: 'psalms',
    chapter: 40,
    title: 'Waiting, Deliverance, Obedience',
    summary: 'David waited patiently for the Lord, who drew him from the pit and set his feet on a rock. God put a new song in his mouth. Blessed are those who trust in the Lord, not turning to false gods. God\'s wonders are too many to declare. Sacrifice and offering God didn\'t desire, but He opened David\'s ears. "Behold, I have come to do your will, O God; your law is within my heart." David proclaims good news in the congregation. Let those who seek God rejoice. He is poor and needy, but the Lord thinks of him. Make haste to help!',
    keyThemes: ['Patient waiting rewarded', 'New song given', 'Obedience over sacrifice', 'Proclaiming good news'],
    christConnection: 'Hebrews applies this psalm to Christ who came to do God\'s will, offering Himself in obedience. His body was prepared for sacrifice that ends all sacrifices.'
  },
  {
    bookId: 'psalms',
    chapter: 41,
    title: 'Blessed Care for the Weak',
    summary: 'Blessed is the one who considers the poor; the Lord delivers him in trouble, protects and preserves him. Enemies speak maliciously about David, hoping he dies. Even his close friend who shared his bread has turned against him. But God is gracious and raises David up. By this he knows God delights in him: his enemy doesn\'t triumph. God upholds David in integrity and sets him in His presence forever. Blessed be the Lord, the God of Israel, from everlasting to everlasting. Amen and Amen.',
    keyThemes: ['Care for the poor', 'Betrayal by friend', 'God\'s delight in His servant', 'Eternal blessing'],
    christConnection: 'Jesus quoted this psalm regarding Judas\'s betrayal: "He who ate my bread has lifted his heel against me." Christ was betrayed but raised to glory at God\'s right hand.'
  },
  // BOOK 2 (Psalms 42-72) - The Elohistic Psalter
  {
    bookId: 'psalms',
    chapter: 42,
    title: 'Longing for God Like a Deer',
    summary: 'A Korahite psalm of deep spiritual longing. As a deer pants for flowing streams, so the psalmist\'s soul pants for God. Tears have been his food while enemies taunt "Where is your God?" He remembers leading processions to God\'s house. Why are you cast down, O my soul? Hope in God; I shall again praise Him. Deep calls to deep at the roar of God\'s waterfalls. By day the Lord commands His steadfast love; by night His song is with me.',
    keyThemes: ['Spiritual thirst', 'Depression and hope', 'Remembering past worship', 'God\'s steadfast love'],
    christConnection: 'Christ thirsted on the cross that we might drink living water. In our spiritual dryness, He remains the source of living water springing up to eternal life.'
  },
  {
    bookId: 'psalms',
    chapter: 43,
    title: 'Send Your Light and Truth',
    summary: 'This psalm continues Psalm 42\'s themes, likely originally one composition. The psalmist asks God to vindicate him against an ungodly nation and deceitful enemies. "Send out your light and your truth; let them lead me; let them bring me to your holy hill and to your dwelling!" Then he will go to God\'s altar with joy and praise. Again the refrain: Why are you cast down? Hope in God!',
    keyThemes: ['Divine vindication', 'Light and truth as guides', 'Access to God\'s presence', 'Hope conquering despair'],
    christConnection: 'Christ is the light and truth sent from the Father. He is the way to the holy mountain, our great high priest who brings us with joy into God\'s presence.'
  },
  {
    bookId: 'psalms',
    chapter: 44,
    title: 'When God Seems Absent',
    summary: 'A national lament recalling God\'s mighty deeds for the fathers—driving out nations by His power, not their sword. But now God has rejected and disgraced Israel, making them a byword among nations. Yet they haven\'t forgotten God\'s covenant or turned to other gods. "For your sake we are killed all day long; regarded as sheep to be slaughtered." Awake, O Lord! Why do you hide your face? Rise up; redeem us for your steadfast love!',
    keyThemes: ['Corporate lament', 'Innocent suffering', 'Appeal to God\'s past faithfulness', 'Covenantal faithfulness'],
    christConnection: 'Paul quotes this psalm in Romans 8: "For your sake we are killed all day long." Yet in all these things we are more than conquerors through Christ who loved us.'
  },
  {
    bookId: 'psalms',
    chapter: 45,
    title: 'The Royal Wedding Song',
    summary: 'A wedding psalm for the king, overflowing with praise. The king is fairer than the sons of men, grace pours from his lips. Gird your sword, mighty one; ride out victoriously for truth and meekness. Your throne, O God, is forever; you love righteousness and hate wickedness. The queen stands in gold of Ophir. Forget your people and father\'s house; the king desires your beauty. Nations will seek your favor. Your sons will be princes throughout the earth.',
    keyThemes: ['Messianic kingship', 'Royal beauty and might', 'The bride\'s devotion', 'Eternal dynasty'],
    christConnection: 'Hebrews 1 applies "Your throne, O God, is forever" directly to Christ. The Church is His bride, adorned in glory, called to forsake the world and belong wholly to her King.'
  },
  {
    bookId: 'psalms',
    chapter: 46,
    title: 'God Is Our Refuge and Strength',
    summary: 'God is our refuge and strength, a very present help in trouble. Therefore we will not fear, though the earth gives way, mountains fall into the sea, waters roar and foam. There is a river whose streams make glad the city of God. God is in her midst; she shall not be moved. Nations rage, kingdoms totter; He utters His voice, the earth melts. The Lord of hosts is with us; the God of Jacob is our fortress. Be still and know that I am God; I will be exalted among the nations.',
    keyThemes: ['God as refuge', 'Fearlessness in chaos', 'The city of God', 'Being still before God'],
    christConnection: 'Christ calmed the storm and stilled chaos. In Him the Church is the city of God, unshakable because God dwells in her midst through His Spirit.'
  },
  {
    bookId: 'psalms',
    chapter: 47,
    title: 'God Is King of All the Earth',
    summary: 'Clap your hands, all peoples! Shout to God with loud songs of joy! The Lord Most High is a great King over all the earth. He subdued peoples under Israel and chose their heritage. God has gone up with a shout, the Lord with the sound of a trumpet. Sing praises to our King! God reigns over the nations; God sits on His holy throne. The princes of the peoples gather as the people of the God of Abraham.',
    keyThemes: ['Universal kingship', 'Joyful praise', 'God\'s ascension', 'Nations gathered'],
    christConnection: 'This psalm prophesies Christ\'s ascension to reign over all nations. The gathering of princes as Abraham\'s people pictures Gentiles brought in through faith.'
  },
  {
    bookId: 'psalms',
    chapter: 48,
    title: 'The City of the Great King',
    summary: 'Great is the Lord and greatly to be praised in the city of our God, His holy mountain. Beautiful in elevation, the joy of all the earth, is Mount Zion. God has made Himself known as a fortress. Kings assembled against her but fled in terror. Let Mount Zion be glad; let the daughters of Judah rejoice because of God\'s judgments. Walk about Zion, count her towers, consider her ramparts—that you may tell the next generation that this God is our God forever.',
    keyThemes: ['Zion\'s beauty', 'God\'s protective presence', 'Enemies routed', 'Generational testimony'],
    christConnection: 'The heavenly Jerusalem is the city of the living God. Christ is the cornerstone of this eternal city; in Him believers are built together as God\'s dwelling place.'
  },
  {
    bookId: 'psalms',
    chapter: 49,
    title: 'The Folly of Trusting in Wealth',
    summary: 'Hear this, all peoples—both low and high, rich and poor! Why should I fear in times of trouble when the iniquity of those who trust their wealth surrounds me? No man can ransom another\'s life; the price is too costly. The wise die like the foolish, leaving their wealth to others. Man in his pomp will not remain; he is like the beasts that perish. But God will ransom my soul from Sheol; He will receive me. Fear not when a man becomes rich; he will take nothing when he dies.',
    keyThemes: ['Vanity of wealth', 'Death the great equalizer', 'Redemption from Sheol', 'True security'],
    christConnection: 'No man can ransom another—but Christ, the God-man, paid the infinite price. He ransomed souls from Sheol and receives believers into glory.'
  },
  {
    bookId: 'psalms',
    chapter: 50,
    title: 'God\'s Lawsuit Against His People',
    summary: 'The Mighty One, God the Lord, summons the earth. Out of Zion He shines forth. God comes to judge—not for lack of sacrifices, for He owns all cattle. He doesn\'t eat bull\'s flesh or drink goat\'s blood. Instead: offer thanksgiving and fulfill your vows; call on Me in trouble, and I will deliver. To the wicked God says: You recite my statutes but hate discipline, keep company with thieves and adulterers. Consider this, you who forget God, lest I tear you apart. True sacrifice is thanksgiving; to the one who orders his way rightly God shows salvation.',
    keyThemes: ['True worship versus ritual', 'God as judge', 'Thanksgiving over sacrifice', 'Moral integrity required'],
    christConnection: 'God desires mercy, not sacrifice. Christ fulfilled all righteousness and offers Himself as the one true sacrifice, calling us to lives of thankful obedience.'
  },
  {
    bookId: 'psalms',
    chapter: 51,
    title: 'Create in Me a Clean Heart',
    summary: 'David\'s confession after his sin with Bathsheba. Have mercy according to your steadfast love; blot out my transgressions. Wash me thoroughly; cleanse me from my sin. Against you, you only, have I sinned. Behold, I was brought forth in iniquity. You desire truth in the inward being. Purge me with hyssop; wash me whiter than snow. Hide your face from my sins. Create in me a clean heart, O God; renew a right spirit. Cast me not away; take not your Holy Spirit from me. Restore the joy of salvation. The sacrifices of God are a broken spirit.',
    keyThemes: ['Deep repentance', 'Inner transformation', 'Joy of salvation', 'Broken and contrite heart'],
    christConnection: 'Only through Christ\'s blood are we washed whiter than snow. He gives the new heart promised by the prophets and restores the joy of salvation to the penitent.'
  },
  {
    bookId: 'psalms',
    chapter: 52,
    title: 'The Downfall of the Deceitful',
    summary: 'Written when Doeg the Edomite betrayed David to Saul. Why do you boast in evil, O mighty man? Your tongue plots destruction like a sharp razor. You love evil more than good, lying more than truth. God will break you down forever, uproot you from the land of the living. The righteous will see and fear, and laugh at him: "See the man who would not make God his refuge, but trusted in his riches." But I am like a green olive tree in God\'s house. I trust in God\'s steadfast love forever.',
    keyThemes: ['Dangerous tongue', 'False security in riches', 'Divine judgment', 'Flourishing in God\'s house'],
    christConnection: 'Christ endured betrayal with trust in the Father. Those who trust in riches perish, but those rooted in Christ flourish like olive trees in God\'s presence.'
  },
  {
    bookId: 'psalms',
    chapter: 53,
    title: 'The Fool Says There Is No God (Variant)',
    summary: 'Nearly identical to Psalm 14, this psalm repeats the declaration that the fool says in his heart "There is no God." All have turned aside; none does good. Evildoers devour God\'s people like bread. But there they are in great terror where there is no terror, for God scatters the bones of those who encamp against you. Oh, that salvation for Israel would come out of Zion! When God restores the fortunes of His people, Jacob shall rejoice.',
    keyThemes: ['Practical atheism', 'Universal corruption', 'Terror of the godless', 'Hope for restoration'],
    christConnection: 'Paul uses these words in Romans 3 to establish universal sinfulness. Salvation has come from Zion in Christ, who restores the fortunes of His people.'
  },
  {
    bookId: 'psalms',
    chapter: 54,
    title: 'God Is My Helper',
    summary: 'A psalm when the Ziphites betrayed David\'s location to Saul. Save me, O God, by your name; vindicate me by your might. Hear my prayer. Strangers and ruthless men seek my life; they do not set God before themselves. Behold, God is my helper; the Lord is the upholder of my life. He will return evil to my enemies; in your faithfulness put an end to them. With a freewill offering I will sacrifice; I will give thanks to your name, for it is good. He has delivered me from every trouble.',
    keyThemes: ['Betrayal by neighbors', 'God as helper', 'Deliverance promised', 'Thankful sacrifice'],
    christConnection: 'Christ was betrayed by those close to Him but trusted in the Father. God upholds those who belong to Christ and delivers them from all their enemies.'
  },
  {
    bookId: 'psalms',
    chapter: 55,
    title: 'Betrayed by a Close Friend',
    summary: 'Give ear to my prayer; hide not from my plea. I am restless and distraught by the enemy\'s oppression. My heart is in anguish; terrors of death have fallen on me. "Oh, that I had wings like a dove! I would fly away and be at rest." Violence and strife fill the city. But it is not an enemy who reproaches me—it is you, my equal, my companion, my familiar friend. We walked in the house of God together. Cast your burden on the Lord; He will sustain you. But God will bring the treacherous down to the pit.',
    keyThemes: ['Intimate betrayal', 'Longing to escape', 'City corruption', 'Casting burdens on God'],
    christConnection: 'Christ experienced this betrayal in Gethsemane with Judas\'s kiss. He invites us to cast our burdens on Him, for He cares for us and sustains the weary.'
  },
  {
    bookId: 'psalms',
    chapter: 56,
    title: 'In God I Trust; I Shall Not Fear',
    summary: 'When the Philistines seized David in Gath. Be gracious to me, for man tramples on me. All day long attackers oppress me. When I am afraid, I put my trust in you. In God, whose word I praise, I trust and am not afraid. What can flesh do to me? My enemies stir up strife; they lurk and watch. Record my tossings; put my tears in your bottle. When I call, my enemies turn back—this I know, that God is for me. I will render thank offerings, for you have delivered my soul from death, my feet from falling.',
    keyThemes: ['Fear turned to trust', 'God\'s word praised', 'Tears recorded', 'Deliverance from death'],
    christConnection: 'Christ faced human opposition without fear because He trusted the Father. "If God is for us, who can be against us?" (Romans 8). Our tears are precious to God.'
  },
  {
    bookId: 'psalms',
    chapter: 57,
    title: 'Be Exalted, O God',
    summary: 'When David fled from Saul into the cave. Be merciful to me, for in you my soul takes refuge; in the shadow of your wings I take refuge till the storms pass. I cry out to God Most High, who fulfills His purpose for me. My soul is in the midst of lions; they set a net for my steps. My heart is steadfast, O God. Awake, my glory! Awake, O harp and lyre! I will awake the dawn. I will give thanks among the peoples. Your steadfast love reaches to the heavens. Be exalted, O God, above the heavens! Let your glory be over all the earth.',
    keyThemes: ['Refuge under God\'s wings', 'Steadfast heart', 'Praise amid peril', 'God\'s universal glory'],
    christConnection: 'Christ gathers His people under His wings like a hen gathers her chicks. From darkness and danger, He arose to eternal morning and invites us to share His exaltation.'
  },
  {
    bookId: 'psalms',
    chapter: 58,
    title: 'Surely There Is a God Who Judges',
    summary: 'Do you rulers decree what is right? Do you judge uprightly? No, you devise wrongs; your hands deal out violence. The wicked go astray from birth; they have venom like a serpent, like the deaf cobra that stops its ears. O God, break their teeth in their mouths! Let them vanish like water that runs away. Let them be like the snail that dissolves, the stillborn child that never sees the sun. Mankind will say, "Surely there is a reward for the righteous; surely there is a God who judges on earth."',
    keyThemes: ['Unjust rulers', 'Serpent-like wickedness', 'Divine judgment', 'God as earthly judge'],
    christConnection: 'Christ is the righteous judge who will judge the living and the dead. He breaks the power of the ancient serpent and vindicates the righteous in the last day.'
  },
  {
    bookId: 'psalms',
    chapter: 59,
    title: 'My God Will Meet Me',
    summary: 'When Saul sent men to watch David\'s house to kill him. Deliver me from my enemies, O God. Look, they lie in wait for my life; fierce men stir up strife against me—not for my transgression or sin. Awake to help me; see! Each evening they return, howling like dogs, prowling the city. But you, O Lord, laugh at them. My strength, I will watch for you. My God in His steadfast love will meet me. Scatter them by your power. For the sin of their mouths, let them be trapped. I will sing aloud of your steadfast love in the morning.',
    keyThemes: ['Surrounded by enemies', 'God laughs at plotters', 'Morning deliverance', 'Singing of steadfast love'],
    christConnection: 'Christ was watched and hunted by those who sought His life, yet He trusted in the Father\'s deliverance. Resurrection morning vindicated His trust.'
  },
  {
    bookId: 'psalms',
    chapter: 60,
    title: 'With God We Shall Do Valiantly',
    summary: 'After David\'s battles in the northeast. O God, you have rejected us, broken our defenses, been angry—restore us! You have made the land quake; heal its breaches. You have made your people see hard things. But you have set up a banner for those who fear you. That your beloved ones may be delivered, save with your right hand! God has spoken in His sanctuary: "I will divide Shechem, allot the Valley of Succoth. Gilead is mine, Manasseh mine..." Give us help against the foe. With God we shall do valiantly; He will tread down our foes.',
    keyThemes: ['National setback', 'God\'s sovereignty over nations', 'Prayer for restoration', 'Victory through God'],
    christConnection: 'All nations are Christ\'s inheritance. He has won the victory and leads His people in triumph. Our valor comes not from ourselves but from Him who has overcome the world.'
  },
  {
    bookId: 'psalms',
    chapter: 61,
    title: 'Lead Me to the Rock Higher Than I',
    summary: 'Hear my cry, O God, listen to my prayer. From the end of the earth I call when my heart is faint. Lead me to the rock that is higher than I, for you have been my refuge, a strong tower against the enemy. Let me dwell in your tent forever; let me take refuge under the shelter of your wings. For you, O God, have heard my vows; you have given me the heritage of those who fear your name. Prolong the king\'s life; let him sit enthroned forever before God.',
    keyThemes: ['Calling from afar', 'Rock of refuge', 'Dwelling in God\'s tent', 'Prayer for the king'],
    christConnection: 'Christ is the Rock higher than all our circumstances. He is our eternal dwelling place and shelter. His kingdom endures forever before God.'
  },
  {
    bookId: 'psalms',
    chapter: 62,
    title: 'For God Alone My Soul Waits',
    summary: 'For God alone my soul waits in silence; from Him comes my salvation. He alone is my rock and salvation, my fortress; I shall not be greatly shaken. How long will you attack a man to batter him? You are like a leaning wall, a tottering fence. They only plan to bring him down; they take pleasure in lies. For God alone, O my soul, wait in silence. Trust in Him at all times, O people; pour out your heart before Him. Put no trust in extortion or robbery; if riches increase, set not your heart on them. Once God has spoken; twice have I heard this: that power belongs to God, and that to you, O Lord, belongs steadfast love.',
    keyThemes: ['Silent waiting on God', 'Rock of salvation', 'Not trusting riches', 'Power and love belong to God'],
    christConnection: 'Christ waited in perfect trust on the Father, even unto death. All power and steadfast love are revealed in Him, our rock and salvation.'
  },
  {
    bookId: 'psalms',
    chapter: 63,
    title: 'My Soul Thirsts for You',
    summary: 'A psalm of David in the wilderness of Judah. O God, you are my God; earnestly I seek you. My soul thirsts for you; my flesh faints for you, as in a dry and weary land where there is no water. So I have looked upon you in the sanctuary, seeing your power and glory. Because your steadfast love is better than life, my lips will praise you. I will bless you as long as I live. My soul is satisfied as with fat and rich food. I remember you on my bed and meditate on you in the night watches. For you have been my help, and in the shadow of your wings I sing for joy. My soul clings to you; your right hand upholds me.',
    keyThemes: ['Earnest seeking of God', 'Thirsting for God', 'Satisfaction in God', 'Clinging to God'],
    christConnection: 'Christ seeks us and we seek Him. His love is better than life itself. In Him our deepest thirsts are satisfied, and His right hand upholds us forever.'
  },
  {
    bookId: 'psalms',
    chapter: 64,
    title: 'Hide Me from the Wicked',
    summary: 'Hear my voice, O God, in my complaint; preserve my life from dread of the enemy. Hide me from the secret plots of the wicked, from the throng of evildoers who whet their tongues like swords, aiming bitter words like arrows, shooting suddenly at the blameless without fear. They hold fast to their evil purpose; they talk of laying snares. "Who can see them?" they say. But God shoots His arrow at them suddenly, and they are brought down by their own tongues. All mankind fears; they tell what God has brought about. The righteous rejoice in the Lord and take refuge in Him.',
    keyThemes: ['Protection from plots', 'Sword-like tongues', 'Divine counterattack', 'Righteous rejoicing'],
    christConnection: 'Christ endured the bitter arrows of accusation and conspiracy. God vindicated Him and will vindicate all who take refuge in the Righteous One.'
  },
  {
    bookId: 'psalms',
    chapter: 65,
    title: 'God Crowns the Year with Bounty',
    summary: 'Praise is due to you, O God, in Zion. O you who hear prayer, to you shall all flesh come. When iniquities prevail against me, you atone for our transgressions. Blessed is the one you choose and bring near to dwell in your courts! We shall be satisfied with the goodness of your house. By awesome deeds you answer us, O God of our salvation, the hope of all the ends of the earth. You establish the mountains by your strength. You still the roaring seas and the tumult of the peoples. You visit the earth and water it; you crown the year with your bounty.',
    keyThemes: ['Prayer answered', 'Atonement for sin', 'Creation\'s praise', 'Abundant harvest'],
    christConnection: 'Christ atones for transgressions and brings us near to dwell in God\'s presence. He stills the storms of nature and nations. Through Him, every spiritual blessing is ours.'
  },
  {
    bookId: 'psalms',
    chapter: 66,
    title: 'Come and See What God Has Done',
    summary: 'Shout for joy to God, all the earth! Sing the glory of His name. Say to God, "How awesome are your deeds!" Come and see what God has done: He turned the sea into dry land; they passed through the river on foot. He rules by His might forever. Bless our God, O peoples; He has kept our soul among the living. You tested us, O God; we went through fire and water, yet you brought us to a place of abundance. I will come with burnt offerings to fulfill my vows. Come and hear, all who fear God, and I will tell what He has done for my soul. Blessed be God, who has not rejected my prayer.',
    keyThemes: ['Universal call to praise', 'Remembering the Exodus', 'Tested through fire', 'Personal testimony'],
    christConnection: 'The greater Exodus from sin is through Christ\'s blood. He leads us through fire and water into the abundance of eternal life. In Him our prayers are not rejected.'
  },
  {
    bookId: 'psalms',
    chapter: 67,
    title: 'Let the Nations Be Glad',
    summary: 'May God be gracious to us and bless us and make His face to shine upon us, that your way may be known on earth, your saving power among all nations. Let the peoples praise you, O God; let all the peoples praise you! Let the nations be glad and sing for joy, for you judge the peoples with equity and guide the nations upon earth. Let the peoples praise you, O God; let all the peoples praise you! The earth has yielded its increase; God, our God, shall bless us. God shall bless us; let all the ends of the earth fear Him!',
    keyThemes: ['Aaronic blessing extended', 'Missionary vision', 'Nations praising God', 'Earth\'s harvest'],
    christConnection: 'The blessing of Israel extends to all nations through Christ. He is the way known on earth, the saving power among all peoples, the judge who guides with equity.'
  },
  {
    bookId: 'psalms',
    chapter: 68,
    title: 'God Scatters His Enemies',
    summary: 'God shall arise, His enemies be scattered! As smoke is driven away, so drive them away. But the righteous shall be glad. Sing to God! Father of the fatherless, defender of widows. God gives the desolate a home; He leads out prisoners to prosperity. O God, when you went out before your people through the wilderness, the earth quaked. You ascended on high, leading a host of captives, receiving gifts among men. Blessed be the Lord, who daily bears us up. Our God is a God of salvation. The Lord gives the word; great is the company who proclaim it. Sing to God, O kingdoms of the earth!',
    keyThemes: ['God arising in triumph', 'Defender of the vulnerable', 'Ascension with captives', 'Universal proclamation'],
    christConnection: 'Paul applies the ascension passage to Christ in Ephesians 4: He ascended on high, led captives free, and gave gifts to men. Christ is the warrior-king who triumphs over all enemies.'
  },
  {
    bookId: 'psalms',
    chapter: 69,
    title: 'Save Me, for the Waters Have Come Up to My Neck',
    summary: 'Save me, O God! The waters have come up to my neck. I sink in deep mire. I am weary with crying; my throat is parched. Those who hate me without cause outnumber the hairs of my head. Zeal for your house has consumed me, and the reproaches of those who reproach you have fallen on me. They gave me poison for food, and for my thirst they gave me sour wine. Let their table become a snare. Pour out your indignation on them. I am afflicted and in pain; let your salvation set me on high. I will praise God with song; I will magnify Him with thanksgiving.',
    keyThemes: ['Overwhelming affliction', 'Zeal for God\'s house', 'Persecution for righteousness', 'Vindication promised'],
    christConnection: 'This psalm is quoted more in the NT than any except Psalm 22. "Zeal for your house" (John 2), the sour wine on the cross—Christ fulfilled this suffering servant psalm completely.'
  },
  {
    bookId: 'psalms',
    chapter: 70,
    title: 'Hasten to Help Me, O Lord',
    summary: 'Make haste, O God, to deliver me! O Lord, make haste to help me! Let those who seek my life be put to shame. Let those who say "Aha, Aha!" be turned back in shame. But may all who seek you rejoice and be glad in you! May those who love your salvation say evermore, "God is great!" But I am poor and needy; hasten to me, O God! You are my help and my deliverer; O Lord, do not delay!',
    keyThemes: ['Urgent prayer', 'Shame on mockers', 'Joy for seekers', 'God as deliverer'],
    christConnection: 'Though Christ prayed this urgency, He submitted to the Father\'s timing. Yet His deliverance came—resurrection vindicated Him. We too wait for His perfect timing.'
  },
  {
    bookId: 'psalms',
    chapter: 71,
    title: 'Do Not Cast Me Off in Old Age',
    summary: 'In you, O Lord, I take refuge. Be a rock of refuge for me. Rescue me from the hand of the wicked. You are my hope, O Lord, my trust from my youth. Upon you I have leaned from birth. Do not cast me off in old age; forsake me not when my strength is spent. My enemies speak against me; they say God has forsaken him. O God, be not far from me! My mouth will tell of your righteous acts all day long. You who have made me see many troubles will revive me again. My lips will shout for joy when I sing praises to you, my soul also, which you have redeemed.',
    keyThemes: ['Lifelong trust', 'Fear of abandonment in age', 'Testimony across generations', 'Revival and redemption'],
    christConnection: 'Christ trusted the Father from youth to death. He was not forsaken but raised to eternal life. He revives all who trust in Him, from youth to old age.'
  },
  {
    bookId: 'psalms',
    chapter: 72,
    title: 'The Reign of the Righteous King',
    summary: 'A psalm of Solomon, closing Book 2. Give the king your justice, O God! May he judge your people with righteousness. May he defend the cause of the poor and crush the oppressor. May he live while the sun endures! May he be like rain on mown grass. In his days may the righteous flourish! May he have dominion from sea to sea, to the ends of the earth. May all kings fall down before him, all nations serve him. For he delivers the needy, the poor, the one who has no helper. May his name endure forever; may all nations be blessed in him! Blessed be the Lord, the God of Israel, who alone does wondrous things.',
    keyThemes: ['Royal justice', 'Care for the poor', 'Universal dominion', 'Blessing to all nations'],
    christConnection: 'This messianic psalm describes Christ\'s eternal kingdom. He judges righteously, defends the oppressed, reigns from sea to sea, and in Him all nations are blessed—fulfilling the Abrahamic promise.'
  },
  // BOOK 3 (Psalms 73-89) - The Asaphite Collection
  {
    bookId: 'psalms',
    chapter: 73,
    title: 'The Prosperity of the Wicked',
    summary: 'Truly God is good to Israel, to those pure in heart. But as for me, my feet had almost stumbled when I saw the prosperity of the wicked. They have no pangs; their bodies are fat. They mock and speak with malice; they set their mouths against the heavens. They say, "How can God know?" All in vain have I kept my heart clean? I was brutish until I went into the sanctuary of God; then I discerned their end. Truly you set them in slippery places. Whom have I in heaven but you? My flesh and heart may fail, but God is the strength of my heart and my portion forever.',
    keyThemes: ['Theodicy and envy', 'Sanctuary revelation', 'Final judgment', 'God as eternal portion'],
    christConnection: 'Christ entered the true sanctuary and revealed the final destiny of all. In Him we have an inheritance that never perishes. He is our portion forever.'
  },
  {
    bookId: 'psalms',
    chapter: 74,
    title: 'Why Does God Reject Forever?',
    summary: 'O God, why do you cast off forever? Remember your congregation, which you have purchased of old. Direct your steps to the perpetual ruins—the enemy has destroyed everything in the sanctuary! They set up their own signs for signs. They hacked all the carved wood with axes. They set your sanctuary on fire, profaned your name\'s dwelling place. We do not see our signs; there is no longer any prophet. How long, O God? Remember, you crushed Leviathan. Yours is the day, yours the night. Do not forget the life of your poor forever. Have regard for the covenant!',
    keyThemes: ['Temple destruction', 'No prophetic voice', 'Appeal to covenant', 'Creator\'s power'],
    christConnection: 'Christ\'s body, the true temple, was destroyed and raised in three days. He crushed the dragon and established a new covenant that can never be profaned.'
  },
  {
    bookId: 'psalms',
    chapter: 75,
    title: 'God Is the Judge',
    summary: 'We give thanks to you, O God. Your wondrous deeds declare that your name is near. "At the set time that I appoint I will judge with equity. When the earth totters with its inhabitants, it is I who keep steady its pillars." I say to the boastful, "Do not boast," and to the wicked, "Do not lift up your horn." For not from the east or west or wilderness comes lifting up, but God is the judge: He puts down one and lifts up another. In the Lord\'s hand is a cup with foaming wine; all the wicked shall drain it to the dregs. But I will declare forever; I will sing praises to the God of Jacob.',
    keyThemes: ['God\'s appointed time', 'Judgment belongs to God', 'Cup of wrath', 'Humbling the proud'],
    christConnection: 'Christ drank the cup of God\'s wrath that we deserved. He is the appointed judge who will put down the proud and lift up the humble at His set time.'
  },
  {
    bookId: 'psalms',
    chapter: 76,
    title: 'God Is Glorious in Victory',
    summary: 'In Judah God is known; His name is great in Israel. His abode has been established in Salem, His dwelling place in Zion. There He broke the flashing arrows, the shield, sword, and weapons of war. Glorious are you, more majestic than the mountains. The stouthearted were stripped of spoil; they sank into sleep. At your rebuke, O God of Jacob, both rider and horse lay stunned. But you, you are to be feared! Who can stand before you when once your anger is roused? From the heavens you uttered judgment; the earth feared and was still when God arose to save all the humble of the earth.',
    keyThemes: ['God known in Zion', 'Weapons destroyed', 'Divine terror', 'Saving the humble'],
    christConnection: 'Christ disarmed principalities and powers at the cross. At His return, every enemy will be stunned, and He will save all the humble who trusted in Him.'
  },
  {
    bookId: 'psalms',
    chapter: 77,
    title: 'Remembering God\'s Works of Old',
    summary: 'I cry aloud to God. In the day of my trouble I seek the Lord; my soul refuses to be comforted. Has God forgotten to be gracious? Has He in anger shut up His compassion? Then I said, "I will appeal to the years of the right hand of the Most High. I will remember the deeds of the Lord; I will remember your wonders of old." What god is great like our God? You are the God who works wonders. You with your arm redeemed your people, the children of Jacob and Joseph. The waters saw you and writhed; the deep trembled. Your way was through the sea, your path through mighty waters, yet your footprints were unseen. You led your people like a flock by the hand of Moses and Aaron.',
    keyThemes: ['Spiritual desolation', 'Remembering God\'s deeds', 'The Exodus recalled', 'Led like a flock'],
    christConnection: 'When darkness overwhelms, we remember Christ\'s mighty works—above all, His death and resurrection. He is our Good Shepherd who leads us through the waters to safety.'
  },
  {
    bookId: 'psalms',
    chapter: 78,
    title: 'Learning from Israel\'s History',
    summary: 'Give ear, O my people, to my teaching. I will utter dark sayings from of old—things our fathers told us. We will tell the coming generation the glorious deeds of the Lord. He commanded the clouds above and opened the doors of heaven; He rained manna. Yet they sinned still more; they did not believe in His wondrous works. When He killed them, they sought Him. But they flattered Him with their mouths; their hearts were not steadfast. He remembered they were but flesh, a wind that passes. They tested God in the wilderness. He turned their rivers to blood, sent plagues. Yet He led out His people like sheep. He chose David to shepherd Jacob.',
    keyThemes: ['Historical instruction', 'Repeated rebellion', 'Divine patience', 'David chosen as shepherd'],
    christConnection: 'Christ is the greater David, the true Shepherd chosen to lead God\'s flock. He gives bread from heaven—His own body—and His grace exceeds all Israel\'s failures.'
  },
  {
    bookId: 'psalms',
    chapter: 79,
    title: 'How Long, O Lord?',
    summary: 'O God, the nations have invaded your inheritance; they have defiled your holy temple. They have given the bodies of your servants to the birds of the heavens. Blood has been poured out like water around Jerusalem. We have become a taunt to our neighbors. How long, O Lord? Will you be angry forever? Pour out your anger on the nations that do not know you. Do not remember against us our former iniquities. Help us, O God of our salvation, for the glory of your name. Let the groaning of the prisoner come before you. Repay our neighbors sevenfold. Then we, the sheep of your pasture, will give thanks to you forever.',
    keyThemes: ['National devastation', 'Appeal to God\'s glory', 'Prayer for vengeance', 'God\'s flock'],
    christConnection: 'Christ entered into the groaning of prisoners and captives. He endured the wrath we deserved, and through Him we become the flock who give thanks forever.'
  },
  {
    bookId: 'psalms',
    chapter: 80,
    title: 'Restore Us, O God',
    summary: 'Give ear, O Shepherd of Israel, you who lead Joseph like a flock. Stir up your might; come to save us! Restore us, O God; let your face shine, that we may be saved. O Lord God of hosts, how long will you be angry with your people\'s prayers? You brought a vine out of Egypt; you planted it, and it took deep root. Why have you broken down its walls? The boar from the forest ravages it. Turn again, O God of hosts! Have regard for this vine. But let your hand be on the man of your right hand, the son of man whom you have made strong for yourself. We will not turn back from you.',
    keyThemes: ['Shepherd of Israel', 'Vine from Egypt', 'National suffering', 'Son of Man'],
    christConnection: 'Christ is the true vine and the man at God\'s right hand. He is the Son of Man made strong for salvation. Through Him the face of God shines on us.'
  },
  {
    bookId: 'psalms',
    chapter: 81,
    title: 'If My People Would Listen',
    summary: 'Sing aloud to God our strength! Raise a song; sound the tambourine. Blow the trumpet at the new moon, at the full moon, on our feast day. For it is a statute for Israel, a rule of the God of Jacob. I hear a language I had not known: "I relieved your shoulder of the burden. You called in distress and I rescued you. Hear, O my people, while I admonish you! There shall be no strange god among you. But my people did not listen to my voice. So I gave them over to their stubborn hearts. Oh, that my people would listen to me! I would soon subdue their enemies. I would feed them with the finest wheat; with honey from the rock I would satisfy them."',
    keyThemes: ['Festival celebration', 'Divine admonition', 'Israel\'s stubbornness', 'God\'s longing'],
    christConnection: 'Christ is the honey from the rock, the finest wheat. He longs for His people to listen. Those who come to Him will never hunger, and He satisfies with living bread.'
  },
  {
    bookId: 'psalms',
    chapter: 82,
    title: 'God Judges the Judges',
    summary: 'God has taken His place in the divine council; in the midst of the gods He holds judgment. "How long will you judge unjustly and show partiality to the wicked? Give justice to the weak and the fatherless; maintain the right of the afflicted. Rescue the weak and needy; deliver them from the hand of the wicked." They have neither knowledge nor understanding; they walk about in darkness; all the foundations of the earth are shaken. I said, "You are gods, sons of the Most High, all of you; nevertheless, like men you shall die, and fall like any prince." Arise, O God, judge the earth; for you shall inherit all the nations!',
    keyThemes: ['Divine council', 'Unjust rulers judged', 'Care for the vulnerable', 'God inheriting nations'],
    christConnection: 'Jesus quoted this psalm to defend His deity. The unjust "gods" of this world will fall, but Christ, the true Son of the Most High, judges righteously and inherits all nations.'
  },
  {
    bookId: 'psalms',
    chapter: 83,
    title: 'Against the Conspiracy of Nations',
    summary: 'O God, do not keep silence! Your enemies make an uproar; those who hate you have raised their heads. They lay crafty plans against your people and conspire against your treasured ones. They say, "Come, let us wipe them out as a nation; let the name of Israel be remembered no more." Edom, Ishmaelites, Moab, Philistia, Assyria—they are all allied together. Do to them as you did to Midian, as to Sisera at the river Kishon. Let them be put to shame and dismayed forever; let them perish in disgrace, that they may know that you alone, whose name is the Lord, are the Most High over all the earth.',
    keyThemes: ['Coalition against God\'s people', 'Prayer for divine intervention', 'Historical precedents recalled', 'Universal acknowledgment of God'],
    christConnection: 'Nations conspire against the Lord and His Anointed (Psalm 2), but Christ is victorious over every enemy. All will acknowledge Him as Most High over all the earth.'
  },
  {
    bookId: 'psalms',
    chapter: 84,
    title: 'How Lovely Is Your Dwelling Place',
    summary: 'How lovely is your dwelling place, O Lord of hosts! My soul longs, yes, faints for the courts of the Lord. Even the sparrow finds a home, and the swallow a nest beside your altars. Blessed are those who dwell in your house, ever singing your praise. Blessed are those whose strength is in you, in whose heart are the highways to Zion. As they go through the Valley of Baca, they make it a place of springs. They go from strength to strength; each one appears before God in Zion. A day in your courts is better than a thousand elsewhere. I would rather be a doorkeeper in the house of my God than dwell in the tents of wickedness.',
    keyThemes: ['Longing for God\'s house', 'Pilgrimage', 'Valley transformed', 'One day in God\'s courts'],
    christConnection: 'Christ is the way to the Father\'s house. He transforms our valleys of weeping into springs of life. In Him we go from strength to strength until we see God face to face.'
  },
  {
    bookId: 'psalms',
    chapter: 85,
    title: 'Revive Us Again',
    summary: 'Lord, you were favorable to your land; you restored the fortunes of Jacob. You forgave the iniquity of your people; you covered all their sin. You withdrew all your wrath. Restore us again, O God of our salvation! Will you be angry with us forever? Will you not revive us again, that your people may rejoice in you? Show us your steadfast love, O Lord, and grant us your salvation. Let me hear what God the Lord will speak, for He will speak peace to His people. Steadfast love and faithfulness meet; righteousness and peace kiss each other. Faithfulness springs up from the ground, and righteousness looks down from the sky.',
    keyThemes: ['Past restoration recalled', 'Prayer for revival', 'Love and faithfulness meet', 'Righteousness and peace'],
    christConnection: 'In Christ, steadfast love and faithfulness meet; righteousness and peace kiss. He is the ground from which faithfulness springs and the heaven from which righteousness comes down.'
  },
  {
    bookId: 'psalms',
    chapter: 86,
    title: 'Teach Me Your Way, O Lord',
    summary: 'Incline your ear, O Lord, and answer me, for I am poor and needy. Preserve my life, for I am godly. You, O Lord, are a God merciful and gracious, slow to anger, abounding in steadfast love. Gladden the soul of your servant, for to you, O Lord, I lift up my soul. There is none like you among the gods, O Lord, nor are there any works like yours. All nations will come and worship before you, for you alone are God. Teach me your way, O Lord, that I may walk in your truth; unite my heart to fear your name. You have delivered my soul from the depths of Sheol.',
    keyThemes: ['Prayer of the needy', 'God\'s mercy and grace', 'Nations worshiping', 'United heart'],
    christConnection: 'Christ teaches us the Father\'s way. He unites our divided hearts by His Spirit. Through Him all nations will come and worship before the Lord.'
  },
  {
    bookId: 'psalms',
    chapter: 87,
    title: 'Glorious Things of Zion',
    summary: 'On the holy mount stands the city He founded; the Lord loves the gates of Zion more than all the dwellings of Jacob. Glorious things of you are spoken, O city of God. Among those who know me I mention Rahab and Babylon; behold, Philistia and Tyre, with Cush—"This one was born there," they say. And of Zion it shall be said, "This one and that one were born in her"; for the Most High Himself will establish her. The Lord records as He registers the peoples, "This one was born there." Singers and dancers alike say, "All my springs are in you."',
    keyThemes: ['Zion beloved by God', 'Nations registered as citizens', 'Universal birthplace', 'Springs of life'],
    christConnection: 'The heavenly Jerusalem welcomes people from every nation, registered as citizens through the new birth in Christ. All our springs of life are found in Him.'
  },
  {
    bookId: 'psalms',
    chapter: 88,
    title: 'The Darkest Psalm',
    summary: 'O Lord, God of my salvation, I cry out day and night before you. My soul is full of troubles; my life draws near to Sheol. I am counted among those who go down to the pit. You have put me in the depths of the pit, in darkness, in the deep. Your wrath lies heavy on me. You have caused my companions to shun me. I am shut in so I cannot escape. My eye grows dim through sorrow. I call to you, O Lord; every day I stretch out my hands to you. Do you work wonders for the dead? Are your steadfast love and faithfulness declared in the grave? I cry to you in the morning; why do you cast off my soul? Darkness is my only companion.',
    keyThemes: ['Unrelieved suffering', 'Divine wrath felt', 'Abandonment', 'No resolution'],
    christConnection: 'This psalm of absolute darkness finds fulfillment in Christ\'s cry of dereliction: "My God, why have you forsaken me?" He descended into our deepest darkness so that we never face it alone.'
  },
  {
    bookId: 'psalms',
    chapter: 89,
    title: 'The Davidic Covenant Questioned',
    summary: 'I will sing of the steadfast love of the Lord forever. You said, "I have made a covenant with my chosen one, sworn to David my servant: I will establish your offspring forever, build your throne for all generations." Who is like the Lord? You rule the raging sea; you crushed Rahab. The heavens and earth are yours. You have a mighty arm. Righteousness and justice are the foundation of your throne. You said, "I have found David my servant; with my holy oil I have anointed him. My steadfast love I will keep for him forever; my covenant will stand firm." But now you have cast off and rejected your anointed. How long, O Lord? Where is your steadfast love of old?',
    keyThemes: ['Davidic covenant', 'God\'s cosmic power', 'Anointed king', 'Apparent covenant failure'],
    christConnection: 'The apparent failure of David\'s line is resolved in Christ, the anointed Son of David whose throne is truly eternal. What seemed broken is perfectly fulfilled in Him.'
  },
  // BOOK 4 (Psalms 90-106) - God's Reign
  {
    bookId: 'psalms',
    chapter: 90,
    title: 'A Prayer of Moses',
    summary: 'Lord, you have been our dwelling place in all generations. Before the mountains were born, from everlasting to everlasting you are God. You turn man to dust; you sweep them away like a dream. A thousand years in your sight are but as yesterday. We are consumed by your anger; our secret sins are before your face. Our years come to an end like a sigh—seventy or eighty if we have strength. Teach us to number our days that we may get a heart of wisdom. Satisfy us in the morning with your steadfast love. Establish the work of our hands.',
    keyThemes: ['God\'s eternity', 'Human frailty', 'Numbering our days', 'Wisdom for life'],
    christConnection: 'Christ, the eternal Word, became flesh subject to our fleeting days. Through Him we gain eternal life and our works endure beyond the grave.'
  },
  {
    bookId: 'psalms',
    chapter: 91,
    title: 'Under the Shadow of the Almighty',
    summary: 'He who dwells in the shelter of the Most High will abide in the shadow of the Almighty. I will say to the Lord, "My refuge and my fortress, my God, in whom I trust." He will deliver you from the snare, cover you with His pinions. You will not fear the terror of the night nor the pestilence that stalks in darkness. A thousand may fall at your side, but it will not come near you. Because he holds fast to me in love, I will deliver him. "He will call upon me, and I will answer him; I will be with him in trouble. With long life I will satisfy him and show him my salvation."',
    keyThemes: ['Divine protection', 'Fearlessness', 'Angelic guardianship', 'God\'s presence in trouble'],
    christConnection: 'Satan quoted this psalm to tempt Jesus; Christ trusted the Father without testing Him. Believers are protected in Christ—not from all harm, but through all harm to eternal life.'
  },
  {
    bookId: 'psalms',
    chapter: 92,
    title: 'A Song for the Sabbath',
    summary: 'It is good to give thanks to the Lord, to sing praises to your name, O Most High; to declare your steadfast love in the morning and your faithfulness by night. For you, O Lord, have made me glad by your work. How great are your works! Your thoughts are very deep. The stupid man cannot know them. Though the wicked sprout like grass, they will be destroyed forever. But the righteous flourish like the palm tree; they grow like a cedar in Lebanon. They still bear fruit in old age; they are ever full of sap and green, to declare that the Lord is upright.',
    keyThemes: ['Sabbath praise', 'God\'s works and thoughts', 'Wicked versus righteous', 'Flourishing in old age'],
    christConnection: 'Christ is our Sabbath rest. In Him we flourish eternally, bearing fruit even in old age. His works give us cause for everlasting praise.'
  },
  {
    bookId: 'psalms',
    chapter: 93,
    title: 'The Lord Reigns',
    summary: 'The Lord reigns; He is robed in majesty. The Lord is robed; He has put on strength as His belt. Yes, the world is established; it shall never be moved. Your throne is established from of old; you are from everlasting. The floods have lifted up their voice; the floods lift up their roaring. Mightier than the thunders of many waters, mightier than the waves of the sea, the Lord on high is mighty! Your decrees are very trustworthy; holiness befits your house, O Lord, forevermore.',
    keyThemes: ['Divine kingship', 'Creation established', 'Mightier than chaos', 'Holy decrees'],
    christConnection: 'Christ is the King who reigns over all chaotic forces. He calmed the sea, demonstrating power greater than nature itself. His word is the trustworthy decree.'
  },
  {
    bookId: 'psalms',
    chapter: 94,
    title: 'The God of Vengeance',
    summary: 'O Lord, God of vengeance, shine forth! Rise up, O judge of the earth; repay to the proud what they deserve! How long shall the wicked exult? They kill the widow, the sojourner, the fatherless. They say, "The Lord does not see." Understand, O dullest of people! He who planted the ear, does He not hear? The Lord knows the thoughts of man, that they are but a breath. Blessed is the man whom you discipline. For the Lord will not forsake His people. When I thought "My foot slips," your steadfast love held me up. When anxious thoughts multiply within me, your consolations cheer my soul.',
    keyThemes: ['Divine vengeance', 'Oppression of the vulnerable', 'God sees and hears', 'Consolation in anxiety'],
    christConnection: 'Vengeance belongs to the Lord. Christ the judge sees all injustice and will repay. Meanwhile, His consolations cheer our souls through every trial.'
  },
  {
    bookId: 'psalms',
    chapter: 95,
    title: 'Today, If You Hear His Voice',
    summary: 'Oh come, let us sing to the Lord; let us make a joyful noise to the rock of our salvation! Let us come before His presence with thanksgiving. For the Lord is a great God, a great King above all gods. In His hand are the depths of the earth; the heights of the mountains are His also. The sea is His, for He made it. Oh come, let us worship and bow down; let us kneel before the Lord our Maker! For He is our God, and we are the people of His pasture. Today, if you hear His voice, do not harden your hearts as at Meribah, in the wilderness.',
    keyThemes: ['Joyful worship', 'Creator and King', 'Shepherd and flock', 'Warning against hardness'],
    christConnection: 'Hebrews extensively quotes this psalm: Today hear His voice. Christ offers rest that Israel never entered. We must not harden our hearts against the gospel.'
  },
  {
    bookId: 'psalms',
    chapter: 96,
    title: 'Sing a New Song',
    summary: 'Oh sing to the Lord a new song; sing to the Lord, all the earth! Sing to the Lord, bless His name; tell of His salvation from day to day. Declare His glory among the nations, His marvelous works among all peoples! For great is the Lord, and greatly to be praised; He is to be feared above all gods. All the gods of the peoples are worthless idols, but the Lord made the heavens. Splendor and majesty are before Him; strength and beauty are in His sanctuary. Ascribe to the Lord glory and strength. Worship in holy attire. Say among the nations, "The Lord reigns!" Let the heavens be glad and the earth rejoice; let the sea roar and all that fills it. For He comes, He comes to judge the earth with righteousness.',
    keyThemes: ['New song', 'Global proclamation', 'Idols versus the Creator', 'Coming judgment'],
    christConnection: 'The new song is sung because of Christ\'s salvation. He is coming to judge the earth with righteousness. All creation awaits and celebrates His return.'
  },
  {
    bookId: 'psalms',
    chapter: 97,
    title: 'The Lord Reigns in Righteousness',
    summary: 'The Lord reigns, let the earth rejoice! Let the many coastlands be glad! Clouds and thick darkness are all around Him; righteousness and justice are the foundation of His throne. Fire goes before Him and burns up His adversaries. His lightnings light up the world; the earth sees and trembles. The mountains melt like wax before the Lord. The heavens proclaim His righteousness; all peoples see His glory. All worshipers of images are put to shame. Zion hears and is glad. For you, O Lord, are most high over all the earth. Light is sown for the righteous, and joy for the upright in heart.',
    keyThemes: ['God reigns', 'Theophany imagery', 'Idolatry shamed', 'Joy for the righteous'],
    christConnection: 'Christ\'s reign brings judgment and joy. Before Him all idols fail. Light is sown for those in Christ—the light of the world who scatters darkness.'
  },
  {
    bookId: 'psalms',
    chapter: 98,
    title: 'The Lord Has Made Known His Salvation',
    summary: 'Oh sing to the Lord a new song, for He has done marvelous things! His right hand and His holy arm have worked salvation for Him. The Lord has made known His salvation; He has revealed His righteousness in the sight of the nations. He has remembered His steadfast love to the house of Israel. All the ends of the earth have seen the salvation of our God. Make a joyful noise to the Lord, all the earth; break forth into joyous song! Sing praises with the lyre! Let the sea roar, and all that fills it. Let the rivers clap their hands; let the hills sing for joy together before the Lord, for He comes to judge the earth.',
    keyThemes: ['New song of salvation', 'God\'s arm brings victory', 'All nations see', 'Creation celebrates'],
    christConnection: 'The salvation made known is fulfilled in Christ. God\'s right hand and holy arm—Christ Himself—worked redemption. All creation celebrates this cosmic victory.'
  },
  {
    bookId: 'psalms',
    chapter: 99,
    title: 'Holy Is the Lord',
    summary: 'The Lord reigns; let the peoples tremble! He sits enthroned upon the cherubim; let the earth quake! The Lord is great in Zion; He is exalted over all the peoples. Let them praise your great and awesome name! Holy is He! The King in His might loves justice. You have established equity; you have executed justice and righteousness in Jacob. Exalt the Lord our God; worship at His footstool! Holy is He! Moses and Aaron were among His priests; Samuel among those who called on His name. They called to the Lord, and He answered them. You were a forgiving God to them, but an avenger of their wrongdoings. Exalt the Lord our God; worship at His holy mountain, for the Lord our God is holy!',
    keyThemes: ['Holy, holy, holy', 'Enthroned on cherubim', 'Justice and mercy', 'Worship at His footstool'],
    christConnection: 'The thrice-holy God is fully revealed in Christ. He loves justice and forgives sin. We worship at His footstool and will one day see Him on His holy mountain.'
  },
  {
    bookId: 'psalms',
    chapter: 100,
    title: 'Enter His Gates with Thanksgiving',
    summary: 'Make a joyful noise to the Lord, all the earth! Serve the Lord with gladness! Come into His presence with singing! Know that the Lord, He is God! It is He who made us, and we are His; we are His people, and the sheep of His pasture. Enter His gates with thanksgiving, and His courts with praise! Give thanks to Him; bless His name! For the Lord is good; His steadfast love endures forever, and His faithfulness to all generations.',
    keyThemes: ['Universal praise', 'Joyful service', 'Creator and Shepherd', 'Eternal faithfulness'],
    christConnection: 'Christ is the gate through which we enter God\'s presence. We are His sheep; He is our Good Shepherd. His steadfast love and faithfulness last forever.'
  },
  {
    bookId: 'psalms',
    chapter: 101,
    title: 'The King\'s Commitment',
    summary: 'I will sing of steadfast love and justice; to you, O Lord, I will make music. I will ponder the way that is blameless—oh when will you come to me? I will walk with integrity of heart within my house. I will not set before my eyes anything that is worthless. I hate the work of those who fall away. A perverse heart shall be far from me. Whoever slanders his neighbor secretly I will destroy. Whoever has a haughty look I will not endure. I will look with favor on the faithful in the land. He who walks in the way that is blameless shall minister to me.',
    keyThemes: ['Royal integrity', 'Household purity', 'Hatred of evil', 'Choosing faithful servants'],
    christConnection: 'Christ is the king who perfectly embodies this commitment. He walked blamelessly, destroyed slander with truth, and calls faithful servants to minister with Him.'
  },
  {
    bookId: 'psalms',
    chapter: 102,
    title: 'The Prayer of the Afflicted',
    summary: 'Hear my prayer, O Lord; let my cry come to you! Do not hide your face from me in the day of my distress. My days pass away like smoke; my bones burn like a furnace. I am like a desert owl; I lie awake like a lonely sparrow on the housetop. My enemies taunt me all day long. But you, O Lord, are enthroned forever. You will arise and have pity on Zion. The nations will fear the name of the Lord. He looked down from His holy height; He heard the groans of prisoners. This is written for a future generation, that a people yet to be created may praise the Lord. Of old you laid the foundation of the earth; the heavens are the work of your hands. They will perish, but you remain.',
    keyThemes: ['Afflicted prayer', 'Zion\'s restoration', 'Prisoners freed', 'God\'s eternal nature'],
    christConnection: 'Hebrews applies "You remain the same" to Christ. He is the eternal Creator before whom heavens perish. He hears the groans of prisoners and will restore Zion.'
  },
  {
    bookId: 'psalms',
    chapter: 103,
    title: 'Bless the Lord, O My Soul',
    summary: 'Bless the Lord, O my soul, and all that is within me, bless His holy name! Bless the Lord, O my soul, and forget not all His benefits—who forgives all your iniquity, who heals all your diseases, who redeems your life from the pit, who crowns you with steadfast love and mercy. The Lord is merciful and gracious, slow to anger and abounding in steadfast love. He does not deal with us according to our sins. As far as the east is from the west, so far does He remove our transgressions. As a father shows compassion to his children, so the Lord shows compassion. For He knows our frame; He remembers that we are dust. The grass withers, the flower fades, but the steadfast love of the Lord is from everlasting to everlasting.',
    keyThemes: ['Soul blessing God', 'Total forgiveness', 'Fatherly compassion', 'Everlasting love'],
    christConnection: 'All these benefits are ours in Christ: forgiveness, healing, redemption, and crowning love. Through Him transgressions are removed as far as east from west.'
  },
  {
    bookId: 'psalms',
    chapter: 104,
    title: 'God the Creator',
    summary: 'Bless the Lord, O my soul! O Lord my God, you are very great! You are clothed with splendor and majesty, covering yourself with light as with a garment. You set the earth on its foundations. You covered it with the deep as with a garment. You make springs gush forth in valleys; they give drink to every beast. You cause grass to grow for the livestock and plants for man to cultivate. You made the moon to mark seasons; the sun knows its time for setting. When you send forth your Spirit, they are created, and you renew the face of the ground. May the glory of the Lord endure forever! I will sing to the Lord as long as I live.',
    keyThemes: ['Creation hymn', 'Divine providence', 'Spirit gives life', 'Praising the Creator'],
    christConnection: 'Through Christ all things were made and in Him all things hold together. The Spirit who renews creation is the Spirit of Christ, bringing new creation.'
  },
  {
    bookId: 'psalms',
    chapter: 105,
    title: 'Remember His Wonders',
    summary: 'Oh give thanks to the Lord; call upon His name; make known His deeds among the peoples! Sing to Him; tell of all His wondrous works! Remember the wondrous works He has done, His miracles and judgments. He is the Lord our God. He remembers His covenant forever—the covenant with Abraham, to Isaac, to Jacob. "To you I will give the land of Canaan." When they were few in number, He allowed no one to oppress them. He sent a man ahead of them—Joseph, sold as a slave. The king sent and released him. He sent Moses and Aaron. He brought Israel out with silver and gold. He spread a cloud for covering, and fire to give light by night. He brought them into the land, that they might keep His statutes.',
    keyThemes: ['Recounting redemption history', 'Covenant faithfulness', 'Joseph and Moses', 'Purpose of deliverance'],
    christConnection: 'Christ is the greater Joseph sent ahead to save. He is the true Moses who brings God\'s people out of slavery. God\'s covenant finds its Yes and Amen in Him.'
  },
  {
    bookId: 'psalms',
    chapter: 106,
    title: 'Israel\'s Unfaithfulness',
    summary: 'Praise the Lord! Oh give thanks to the Lord, for He is good; His steadfast love endures forever! Who can utter the mighty deeds of the Lord? Both we and our fathers have sinned. Our fathers in Egypt did not consider your wondrous works. They soon forgot His works; they did not wait for His counsel. They made a calf in Horeb and worshiped a metal image. They forgot God, their Savior, who had done great things in Egypt. Therefore He said He would destroy them—had not Moses stood in the breach. They despised the pleasant land; they did not believe His promise. They yoked themselves to Baal of Peor. Yet He saved them for His name\'s sake. Save us, O Lord our God, and gather us from among the nations!',
    keyThemes: ['National confession', 'Repeated rebellion', 'Intercessors', 'Salvation for God\'s name'],
    christConnection: 'Christ is the ultimate intercessor who stood in the breach. Despite all Israel\'s failures, God saves for His name\'s sake—that name now revealed in Christ.'
  },
  // BOOK 5 (Psalms 107-150) - Praise and Hallel
  {
    bookId: 'psalms',
    chapter: 107,
    title: 'Give Thanks for His Steadfast Love',
    summary: 'Oh give thanks to the Lord, for He is good, for His steadfast love endures forever! Let the redeemed of the Lord say so. Some wandered in desert wastes, hungry and thirsty; they cried to the Lord, and He delivered them. Some sat in darkness and gloom, prisoners; they cried to the Lord, and He saved them. Some were sick through their sinful ways; they drew near the gates of death, but He sent out His word and healed them. Some went down to the sea in ships; they saw the deeds of the Lord in the deep. He made the storm be still. Whoever is wise, let him attend to these things and consider the steadfast love of the Lord.',
    keyThemes: ['Fourfold deliverance', 'Crying to God', 'Steadfast love', 'Wisdom in reflection'],
    christConnection: 'Christ delivers from every wandering, every prison, every sickness, every storm. He is the Word sent forth to heal. In Him we understand God\'s steadfast love.'
  },
  {
    bookId: 'psalms',
    chapter: 108,
    title: 'With God We Shall Do Valiantly',
    summary: 'My heart is steadfast, O God! I will sing and make melody with all my being! Awake, O harp and lyre! I will awake the dawn. I will give thanks to you, O Lord, among the peoples; for your steadfast love is great above the heavens. Be exalted, O God, above the heavens! Let your glory be over all the earth! That your beloved ones may be delivered, save with your right hand and answer me! God has promised in His holiness: "I will divide Shechem, allot the Valley of Succoth." Oh grant us help against the foe, for vain is the salvation of man! With God we shall do valiantly; it is He who will tread down our foes.',
    keyThemes: ['Steadfast heart', 'Waking the dawn', 'Divine promises', 'Victory through God'],
    christConnection: 'Our hearts are steadfast in Christ. Vain is human salvation—only through Him do we prevail. He awakens the dawn of new creation and tramples every foe.'
  },
  {
    bookId: 'psalms',
    chapter: 109,
    title: 'A Prayer Against the Accuser',
    summary: 'Be not silent, O God of my praise! For wicked and deceitful mouths are opened against me. They attack me with words of hate; they encircle me without cause. In return for my love they accuse me, but I give myself to prayer. Let an accuser stand at his right hand. When he is tried, let him be found guilty. Let his days be few; let another take his office. Let there be none to pity his fatherless children. But you, O Lord, deal on my behalf for your name\'s sake. For I am poor and needy, and my heart is stricken. Help me, O Lord my God! Save me according to your steadfast love.',
    keyThemes: ['False accusation', 'Imprecatory prayer', 'Judgment on betrayers', 'Appeal to God\'s name'],
    christConnection: 'Peter applied "let another take his office" to Judas. Christ, falsely accused, committed Himself to the true Judge. The accuser Satan is judged; Christ is vindicated.'
  },
  {
    bookId: 'psalms',
    chapter: 110,
    title: 'The Lord Said to My Lord',
    summary: 'The Lord says to my Lord: "Sit at my right hand, until I make your enemies your footstool." The Lord sends forth from Zion your mighty scepter. Rule in the midst of your enemies! Your people will offer themselves freely on the day of your power, in holy garments; from the womb of the morning, the dew of your youth will be yours. The Lord has sworn and will not change His mind: "You are a priest forever after the order of Melchizedek." The Lord is at your right hand; He will shatter kings on the day of His wrath. He will execute judgment among the nations.',
    keyThemes: ['Messiah at God\'s right hand', 'Priestly king', 'Melchizedekian order', 'Final victory'],
    christConnection: 'The most quoted psalm in the NT. Christ is David\'s Lord seated at God\'s right hand—both King and Priest forever in the order of Melchizedek.'
  },
  {
    bookId: 'psalms',
    chapter: 111,
    title: 'The Works of the Lord Are Great',
    summary: 'Praise the Lord! I will give thanks to the Lord with my whole heart. Great are the works of the Lord, studied by all who delight in them. Full of splendor and majesty is His work; His righteousness endures forever. He has caused His wondrous works to be remembered. The Lord is gracious and merciful. He provides food for those who fear Him; He remembers His covenant forever. He has shown His people the power of His works. The works of His hands are faithful and just; all His precepts are trustworthy. He sent redemption to His people; He has commanded His covenant forever. Holy and awesome is His name! The fear of the Lord is the beginning of wisdom.',
    keyThemes: ['Acrostic praise', 'Great works', 'Covenant faithfulness', 'Fear and wisdom'],
    christConnection: 'Christ is the redemption God sent. His work on the cross is the greatest of all God\'s wondrous works. In Him the covenant is commanded forever.'
  },
  {
    bookId: 'psalms',
    chapter: 112,
    title: 'The Righteous Person',
    summary: 'Praise the Lord! Blessed is the man who fears the Lord, who greatly delights in His commandments! His offspring will be mighty in the land. Wealth and riches are in his house, and his righteousness endures forever. Light dawns in the darkness for the upright; he is gracious, merciful, and righteous. It is well with the man who deals generously and lends; he will never be moved. He is not afraid of bad news; his heart is firm, trusting in the Lord. His heart is steady; he will not be afraid. He has distributed freely; he has given to the poor; his righteousness endures forever. The wicked man sees it and is angry; he gnashes his teeth and melts away.',
    keyThemes: ['Blessings of righteousness', 'Generosity', 'Fearlessness', 'Contrast with the wicked'],
    christConnection: 'Christ is the truly righteous one whose righteousness endures forever. He distributed freely, giving Himself for the poor. In Him we share His blessedness.'
  },
  {
    bookId: 'psalms',
    chapter: 113,
    title: 'Who Is Like the Lord Our God?',
    summary: 'Praise the Lord! Praise, O servants of the Lord, praise the name of the Lord! Blessed be the name of the Lord from this time forth and forevermore! From the rising of the sun to its setting, the name of the Lord is to be praised! The Lord is high above all nations, His glory above the heavens! Who is like the Lord our God, who is seated on high, who looks far down on the heavens and the earth? He raises the poor from the dust and lifts the needy from the ash heap, to make them sit with princes. He gives the barren woman a home, making her the joyous mother of children. Praise the Lord!',
    keyThemes: ['Universal praise', 'God\'s condescension', 'Exalting the lowly', 'Barren made fruitful'],
    christConnection: 'Christ, though high above all, looked down and descended to lift the poor from the dust. Mary echoed this psalm: He exalts the humble and fills the hungry.'
  },
  {
    bookId: 'psalms',
    chapter: 114,
    title: 'The Exodus Remembered',
    summary: 'When Israel went out from Egypt, the house of Jacob from a people of strange language, Judah became His sanctuary, Israel His dominion. The sea looked and fled; Jordan turned back. The mountains skipped like rams, the hills like lambs. What ails you, O sea, that you flee? O Jordan, that you turn back? O mountains, that you skip like rams? Tremble, O earth, at the presence of the Lord, at the presence of the God of Jacob, who turns the rock into a pool of water, the flint into a spring of water.',
    keyThemes: ['Exodus celebration', 'Creation responds to God', 'Divine presence', 'Rock giving water'],
    christConnection: 'Christ is the Rock from which living water flows. At His presence, greater than the Exodus, all creation trembles and is transformed.'
  },
  {
    bookId: 'psalms',
    chapter: 115,
    title: 'To Your Name Give Glory',
    summary: 'Not to us, O Lord, not to us, but to your name give glory, for the sake of your steadfast love and faithfulness! Why should the nations say, "Where is their God?" Our God is in the heavens; He does all that He pleases. Their idols are silver and gold, the work of human hands. They have mouths but do not speak; eyes but do not see. Those who make them become like them; so do all who trust in them. O Israel, trust in the Lord! He is their help and shield. The Lord has remembered us; He will bless us. May you be blessed by the Lord, who made heaven and earth! The heavens are the Lord\'s, but the earth He has given to mankind. The dead do not praise the Lord, but we will bless the Lord forevermore!',
    keyThemes: ['Glory to God alone', 'Idols versus the living God', 'Trust and blessing', 'Praise from the living'],
    christConnection: 'Christ gives all glory to the Father. Through Him we become image-bearers of the living God, not lifeless like idols. We bless the Lord forevermore in Him.'
  },
  {
    bookId: 'psalms',
    chapter: 116,
    title: 'I Love the Lord',
    summary: 'I love the Lord, because He has heard my voice and my pleas for mercy. Because He inclined His ear to me, therefore I will call on Him as long as I live. The snares of death encompassed me; the pangs of Sheol laid hold on me. Then I called on the name of the Lord: "O Lord, I pray, deliver my soul!" Gracious is the Lord and righteous; our God is merciful. The Lord preserves the simple; when I was brought low, He saved me. Return, O my soul, to your rest; for the Lord has dealt bountifully with you. For you have delivered my soul from death, my eyes from tears, my feet from stumbling. I will walk before the Lord in the land of the living. Precious in the sight of the Lord is the death of His saints. What shall I render to the Lord? I will lift up the cup of salvation.',
    keyThemes: ['Love for God who hears', 'Delivered from death', 'Rest for the soul', 'Cup of salvation'],
    christConnection: 'Christ lifted the cup of salvation at the Last Supper. He delivered our souls from death. His saints\' deaths are precious because they lead to resurrection with Him.'
  },
  {
    bookId: 'psalms',
    chapter: 117,
    title: 'Praise from All Nations',
    summary: 'Praise the Lord, all nations! Extol Him, all peoples! For great is His steadfast love toward us, and the faithfulness of the Lord endures forever. Praise the Lord!',
    keyThemes: ['Universal praise', 'Steadfast love', 'Eternal faithfulness', 'Brief but complete'],
    christConnection: 'Paul quotes this in Romans to show God\'s plan for Gentiles. Through Christ, all nations praise the Lord. His steadfast love extends to every people.'
  },
  {
    bookId: 'psalms',
    chapter: 118,
    title: 'The Stone the Builders Rejected',
    summary: 'Oh give thanks to the Lord, for He is good; for His steadfast love endures forever! Let Israel say, "His steadfast love endures forever." Out of my distress I called on the Lord; the Lord answered me. The Lord is on my side; I will not fear. It is better to take refuge in the Lord than to trust in princes. All nations surrounded me, but in the name of the Lord I cut them off. The Lord is my strength and my song; He has become my salvation. Open to me the gates of righteousness. The stone that the builders rejected has become the cornerstone. This is the Lord\'s doing; it is marvelous in our eyes. This is the day that the Lord has made; let us rejoice. Blessed is He who comes in the name of the Lord!',
    keyThemes: ['Steadfast love refrain', 'Deliverance from enemies', 'Rejected cornerstone', 'The day the Lord made'],
    christConnection: 'Jesus applied the rejected stone to Himself. "Blessed is He who comes" was shouted at His triumphal entry. He is the cornerstone of God\'s new temple.'
  },
  {
    bookId: 'psalms',
    chapter: 119,
    title: 'The Glory of God\'s Word',
    summary: 'The longest psalm, an acrostic celebrating God\'s Word through 176 verses. Blessed are those whose way is blameless, who walk in the law of the Lord. How can a young man keep his way pure? By guarding it according to your word. I have stored up your word in my heart that I might not sin against you. Open my eyes that I may behold wondrous things out of your law. Your word is a lamp to my feet and a light to my path. The sum of your word is truth, and every one of your righteous rules endures forever. Great peace have those who love your law. I long for your salvation, O Lord, and your law is my delight.',
    keyThemes: ['Word of God exalted', 'Guidance and purity', 'Light and truth', 'Love for God\'s law'],
    christConnection: 'Christ is the Word made flesh who perfectly fulfilled the law. He is the lamp and light, the truth that endures forever, the salvation longed for throughout the psalm.'
  },
  {
    bookId: 'psalms',
    chapter: 120,
    title: 'Longing for Peace Among Warmongers',
    summary: 'In my distress I called to the Lord, and He answered me. Deliver me, O Lord, from lying lips, from a deceitful tongue. What shall be given to you, and what more shall be done to you, you deceitful tongue? A warrior\'s sharp arrows, with glowing coals of the broom tree! Woe to me, that I sojourn in Meshech, that I dwell among the tents of Kedar! Too long have I had my dwelling among those who hate peace. I am for peace, but when I speak, they are for war!',
    keyThemes: ['Songs of Ascents begin', 'Lying tongues', 'Dwelling among enemies', 'Peace versus war'],
    christConnection: 'Christ was surrounded by lying accusations and those who hated peace. Yet He is the Prince of Peace who brings reconciliation to all who trust in Him.'
  },
  {
    bookId: 'psalms',
    chapter: 121,
    title: 'My Help Comes from the Lord',
    summary: 'I lift up my eyes to the hills. From where does my help come? My help comes from the Lord, who made heaven and earth. He will not let your foot be moved; He who keeps you will not slumber. Behold, He who keeps Israel will neither slumber nor sleep. The Lord is your keeper; the Lord is your shade on your right hand. The sun shall not strike you by day, nor the moon by night. The Lord will keep you from all evil; He will keep your life. The Lord will keep your going out and your coming in from this time forth and forevermore.',
    keyThemes: ['Help from the Creator', 'Unsleeping keeper', 'Protection day and night', 'Kept forevermore'],
    christConnection: 'Christ is the unsleeping shepherd who keeps His sheep. He is our shade and protection. In Him our going out and coming in are kept for eternity.'
  },
  {
    bookId: 'psalms',
    chapter: 122,
    title: 'Joy in Going to God\'s House',
    summary: 'I was glad when they said to me, "Let us go to the house of the Lord!" Our feet have been standing within your gates, O Jerusalem! Jerusalem—built as a city that is bound firmly together, to which the tribes go up, the tribes of the Lord, as was decreed for Israel, to give thanks to the name of the Lord. There thrones for judgment were set, the thrones of the house of David. Pray for the peace of Jerusalem! "May they be secure who love you! Peace be within your walls and security within your towers!" For my brothers and companions\' sake I will say, "Peace be within you!" For the sake of the house of the Lord our God, I will seek your good.',
    keyThemes: ['Joy in worship', 'Jerusalem\'s unity', 'Prayer for peace', 'David\'s throne'],
    christConnection: 'Christ wept over Jerusalem and longed for her peace. The heavenly Jerusalem is our mother; we gladly go to the house of the Lord through Christ.'
  },
  {
    bookId: 'psalms',
    chapter: 123,
    title: 'Looking to God for Mercy',
    summary: 'To you I lift up my eyes, O you who are enthroned in the heavens! Behold, as the eyes of servants look to the hand of their master, as the eyes of a maidservant to the hand of her mistress, so our eyes look to the Lord our God, till He has mercy upon us. Have mercy upon us, O Lord, have mercy upon us, for we have had more than enough of contempt. Our soul has had more than enough of the scorn of those who are at ease, of the contempt of the proud.',
    keyThemes: ['Eyes on God', 'Servant posture', 'Plea for mercy', 'Suffering contempt'],
    christConnection: 'Christ endured the contempt of the proud yet kept His eyes on the Father. He teaches us to look to God until mercy comes, trusting in the Father\'s timing.'
  },
  {
    bookId: 'psalms',
    chapter: 124,
    title: 'Our Help Is in the Name of the Lord',
    summary: 'If it had not been the Lord who was on our side—let Israel now say—if it had not been the Lord who was on our side when people rose up against us, then they would have swallowed us up alive. Then the flood would have swept us away, the torrent would have gone over us. Blessed be the Lord, who has not given us as prey to their teeth! We have escaped like a bird from the snare of the fowlers; the snare is broken, and we have escaped! Our help is in the name of the Lord, who made heaven and earth.',
    keyThemes: ['Divine deliverance', 'Overwhelming enemies', 'Broken snare', 'Help in God\'s name'],
    christConnection: 'Christ broke the snare of death and sin. The flood of judgment swept over Him that we might escape. Our help is in the name of the Lord revealed in Jesus.'
  },
  {
    bookId: 'psalms',
    chapter: 125,
    title: 'Those Who Trust Are Secure',
    summary: 'Those who trust in the Lord are like Mount Zion, which cannot be moved, but abides forever. As the mountains surround Jerusalem, so the Lord surrounds His people, from this time forth and forevermore. For the scepter of wickedness shall not rest on the land allotted to the righteous, lest the righteous stretch out their hands to do wrong. Do good, O Lord, to those who are good, and to those who are upright in their hearts! But those who turn aside to their crooked ways the Lord will lead away with evildoers. Peace be upon Israel!',
    keyThemes: ['Immovable trust', 'God surrounds His people', 'Wickedness will not prevail', 'Peace on the faithful'],
    christConnection: 'Christ is the cornerstone of Zion that cannot be moved. He surrounds His church with protection. The scepter of wickedness is broken; peace comes through Him.'
  },
  {
    bookId: 'psalms',
    chapter: 126,
    title: 'Sowing in Tears, Reaping with Joy',
    summary: 'When the Lord restored the fortunes of Zion, we were like those who dream. Then our mouth was filled with laughter, and our tongue with shouts of joy; then they said among the nations, "The Lord has done great things for them." The Lord has done great things for us; we are glad. Restore our fortunes, O Lord, like streams in the Negeb! Those who sow in tears shall reap with shouts of joy! He who goes out weeping, bearing the seed for sowing, shall come home with shouts of joy, bringing his sheaves with him.',
    keyThemes: ['Restoration like a dream', 'Joy and laughter', 'Sowing and reaping', 'Tears turned to joy'],
    christConnection: 'Christ wept and sowed the seed of His life in death. His resurrection is the great harvest, the restoration that fills our mouths with laughter and shouts of joy.'
  },
  {
    bookId: 'psalms',
    chapter: 127,
    title: 'Unless the Lord Builds',
    summary: 'Unless the Lord builds the house, those who build it labor in vain. Unless the Lord watches over the city, the watchman stays awake in vain. It is in vain that you rise up early and go late to rest, eating the bread of anxious toil; for He gives to His beloved sleep. Behold, children are a heritage from the Lord, the fruit of the womb a reward. Like arrows in the hand of a warrior are the children of one\'s youth. Blessed is the man who fills his quiver with them! He shall not be put to shame when he speaks with his enemies in the gate.',
    keyThemes: ['God as builder', 'Rest versus anxious toil', 'Children as blessing', 'Family as strength'],
    christConnection: 'Christ builds His church, and the gates of hell shall not prevail. He gives rest to the weary who labor in vain. His spiritual children are arrows of the kingdom.'
  },
  {
    bookId: 'psalms',
    chapter: 128,
    title: 'Blessings on the Home',
    summary: 'Blessed is everyone who fears the Lord, who walks in His ways! You shall eat the fruit of the labor of your hands; you shall be blessed, and it shall be well with you. Your wife will be like a fruitful vine within your house; your children will be like olive shoots around your table. Behold, thus shall the man be blessed who fears the Lord. The Lord bless you from Zion! May you see the prosperity of Jerusalem all the days of your life! May you see your children\'s children! Peace be upon Israel!',
    keyThemes: ['Blessing through obedience', 'Fruitful family', 'Generational blessing', 'Peace from Zion'],
    christConnection: 'True blessing comes through fearing Christ the Lord. He blesses from the heavenly Zion. In Him we see the ultimate prosperity and peace for all generations.'
  },
  {
    bookId: 'psalms',
    chapter: 129,
    title: 'Afflicted but Not Defeated',
    summary: 'Greatly have they afflicted me from my youth—let Israel now say—greatly have they afflicted me from my youth, yet they have not prevailed against me. The plowers plowed upon my back; they made long their furrows. The Lord is righteous; He has cut the cords of the wicked. May all who hate Zion be put to shame and turned backward! Let them be like the grass on the housetops, which withers before it grows up, with which the reaper does not fill his hand nor the binder of sheaves his arms, nor do those who pass by say, "The blessing of the Lord be upon you!"',
    keyThemes: ['Long suffering', 'Enemies cannot prevail', 'God cuts cords of bondage', 'Wicked will wither'],
    christConnection: 'Christ\'s back was plowed with scourges, yet His enemies did not prevail. He cut the cords of sin and death. Those who hate Zion will wither; Christ\'s church endures.'
  },
  {
    bookId: 'psalms',
    chapter: 130,
    title: 'Out of the Depths',
    summary: 'Out of the depths I cry to you, O Lord! O Lord, hear my voice! Let your ears be attentive to the voice of my pleas for mercy! If you, O Lord, should mark iniquities, O Lord, who could stand? But with you there is forgiveness, that you may be feared. I wait for the Lord, my soul waits, and in His word I hope; my soul waits for the Lord more than watchmen for the morning, more than watchmen for the morning. O Israel, hope in the Lord! For with the Lord there is steadfast love, and with Him is plentiful redemption. And He will redeem Israel from all his iniquities.',
    keyThemes: ['Crying from despair', 'Forgiveness with God', 'Patient waiting', 'Plentiful redemption'],
    christConnection: 'Christ cried from the depths on the cross. With Him there is forgiveness; He is the plentiful redemption. We wait for Him as watchmen wait for the morning.'
  },
  {
    bookId: 'psalms',
    chapter: 131,
    title: 'A Calmed and Quieted Soul',
    summary: 'O Lord, my heart is not lifted up; my eyes are not raised too high; I do not occupy myself with things too great and too marvelous for me. But I have calmed and quieted my soul, like a weaned child with its mother; like a weaned child is my soul within me. O Israel, hope in the Lord from this time forth and forevermore.',
    keyThemes: ['Humble heart', 'Contentment', 'Childlike trust', 'Hope in the Lord'],
    christConnection: 'Christ was meek and humble in heart. He invites us to come as children, calmed and quieted in His presence, resting in the Father\'s care.'
  },
  {
    bookId: 'psalms',
    chapter: 132,
    title: 'David and the Ark',
    summary: 'Remember, O Lord, in David\'s favor, all the hardships he endured, how he swore to the Lord: "I will not enter my house or get into my bed until I find a place for the Lord, a dwelling place for the Mighty One of Jacob." Behold, we heard of it in Ephrathah; we found it in the fields of Jaar. Let us go to His dwelling place; let us worship at His footstool! Arise, O Lord, and go to your resting place. Let your priests be clothed with righteousness. For the Lord has chosen Zion. "This is my resting place forever." The Lord swore to David a sure oath: "One of the sons of your body I will set on your throne. If your sons keep my covenant, their sons also forever shall sit on your throne."',
    keyThemes: ['David\'s zeal for God\'s house', 'The ark\'s resting place', 'Davidic oath', 'Zion chosen'],
    christConnection: 'Christ is David\'s son who sits on the eternal throne. He is the true temple, God\'s resting place. His priesthood is clothed with righteousness forever.'
  },
  {
    bookId: 'psalms',
    chapter: 133,
    title: 'How Good and Pleasant Is Unity',
    summary: 'Behold, how good and pleasant it is when brothers dwell in unity! It is like the precious oil on the head, running down on the beard, on the beard of Aaron, running down on the collar of his robes! It is like the dew of Hermon, which falls on the mountains of Zion! For there the Lord has commanded the blessing, life forevermore.',
    keyThemes: ['Brotherly unity', 'Anointing oil imagery', 'Refreshing dew', 'Commanded blessing'],
    christConnection: 'Christ is the anointed one from whose head blessing flows to His body. Unity in Christ brings the commanded blessing—life forevermore through Him.'
  },
  {
    bookId: 'psalms',
    chapter: 134,
    title: 'Bless the Lord, Night Servants',
    summary: 'Come, bless the Lord, all you servants of the Lord, who stand by night in the house of the Lord! Lift up your hands to the holy place and bless the Lord! May the Lord bless you from Zion, He who made heaven and earth!',
    keyThemes: ['Night worship', 'Lifting hands in blessing', 'Mutual blessing', 'Creator blesses'],
    christConnection: 'Christ intercedes day and night for His people. Those who serve Him receive blessing from heavenly Zion, from the Maker of heaven and earth.'
  },
  {
    bookId: 'psalms',
    chapter: 135,
    title: 'Praise for God\'s Great Deeds',
    summary: 'Praise the Lord! Praise the name of the Lord, give praise, O servants of the Lord, who stand in the house of the Lord! Praise the Lord, for the Lord is good; sing to His name, for it is pleasant! For the Lord has chosen Jacob for Himself. Whatever the Lord pleases, He does, in heaven and on earth. He it is who makes clouds rise, who sends lightning and wind. He struck down the firstborn of Egypt and sent signs against Pharaoh. He struck down many nations and gave their land as a heritage to Israel. Your name, O Lord, endures forever. The idols of the nations are silver and gold. But the Lord made the heavens. Praise the Lord!',
    keyThemes: ['Chosen people', 'Sovereign power', 'Exodus recalled', 'Idols versus the Lord'],
    christConnection: 'God chose us in Christ before the foundation of the world. Christ does whatever pleases the Father. Through Him we inherit the land of eternal promise.'
  },
  {
    bookId: 'psalms',
    chapter: 136,
    title: 'His Steadfast Love Endures Forever',
    summary: 'Give thanks to the Lord, for He is good, for His steadfast love endures forever. Give thanks to the God of gods, for His steadfast love endures forever. To Him who alone does great wonders, for His steadfast love endures forever. To Him who made the heavens, the earth, the sun, moon, and stars. To Him who struck down the firstborn of Egypt and brought out Israel. To Him who divided the Red Sea and led Israel through. To Him who struck down great kings and gave their land as a heritage. He remembered us in our low estate, for His steadfast love endures forever. He rescues us from our foes. He gives food to all flesh. Give thanks to the God of heaven, for His steadfast love endures forever!',
    keyThemes: ['Steadfast love refrain', 'Creation celebrated', 'Redemption history', 'Universal providence'],
    christConnection: 'Christ is God\'s steadfast love made flesh. The refrain is fulfilled in Him who remembered us in our low estate and rescues us from the enemy of death.'
  },
  {
    bookId: 'psalms',
    chapter: 137,
    title: 'By the Rivers of Babylon',
    summary: 'By the waters of Babylon, there we sat down and wept, when we remembered Zion. On the willows there we hung up our lyres. For there our captors required of us songs, and our tormentors, mirth, saying, "Sing us one of the songs of Zion!" How shall we sing the Lord\'s song in a foreign land? If I forget you, O Jerusalem, let my right hand forget its skill! Let my tongue stick to the roof of my mouth, if I do not remember you, if I do not set Jerusalem above my highest joy! Remember, O Lord, against the Edomites the day of Jerusalem. O daughter of Babylon, doomed to be destroyed, blessed shall he be who repays you with what you have done to us!',
    keyThemes: ['Exile lament', 'Longing for Zion', 'Unable to sing', 'Imprecation against oppressors'],
    christConnection: 'Christ came to end our exile and bring us home to the heavenly Jerusalem. He absorbed the judgment we deserved so we can sing the Lord\'s song again.'
  },
  {
    bookId: 'psalms',
    chapter: 138,
    title: 'The Lord Will Fulfill His Purpose',
    summary: 'I give you thanks, O Lord, with my whole heart; before the gods I sing your praise; I bow down toward your holy temple and give thanks to your name for your steadfast love and faithfulness. You have exalted above all things your name and your word. On the day I called, you answered me; my strength of soul you increased. All the kings of the earth shall give you thanks, O Lord, when they hear the words of your mouth. Though the Lord is high, He regards the lowly, but the haughty He knows from afar. Though I walk in the midst of trouble, you preserve my life. The Lord will fulfill His purpose for me; your steadfast love, O Lord, endures forever. Do not forsake the work of your hands.',
    keyThemes: ['Wholehearted thanks', 'Word exalted', 'Kings praising God', 'Purpose fulfilled'],
    christConnection: 'Christ is the Word exalted above all. He increased our strength of soul. The Father will not forsake the work of His hands—especially His Son and those in Him.'
  },
  {
    bookId: 'psalms',
    chapter: 139,
    title: 'Fearfully and Wonderfully Made',
    summary: 'O Lord, you have searched me and known me! You know when I sit down and when I rise up; you discern my thoughts from afar. You hem me in, behind and before, and lay your hand upon me. Such knowledge is too wonderful for me. Where shall I go from your Spirit? If I ascend to heaven, you are there! If I make my bed in Sheol, you are there! If I take the wings of the morning, you are there. For you formed my inward parts; you knitted me together in my mother\'s womb. I praise you, for I am fearfully and wonderfully made. Your eyes saw my unformed substance. How precious to me are your thoughts, O God! Search me, O God, and know my heart! Lead me in the way everlasting!',
    keyThemes: ['God\'s omniscience', 'God\'s omnipresence', 'Wonderfully made', 'Searching and leading'],
    christConnection: 'Christ, the Word made flesh, was fearfully and wonderfully formed in Mary\'s womb. He knows us completely and leads us in the way everlasting.'
  },
  {
    bookId: 'psalms',
    chapter: 140,
    title: 'Protect Me from the Violent',
    summary: 'Deliver me, O Lord, from evil men; preserve me from violent men, who plan evil things in their heart and stir up wars continually. They make their tongue sharp as a serpent\'s; under their lips is the venom of asps. Guard me, O Lord, from the hands of the wicked; preserve me from violent men. The arrogant have hidden a trap for me; they have spread a net; beside the way they have set snares. I say to the Lord, "You are my God." O Lord, cover my head in the day of battle. Grant not, O Lord, the desires of the wicked. Let burning coals fall upon them! I know that the Lord will maintain the cause of the afflicted. The righteous shall give thanks to your name; the upright shall dwell in your presence.',
    keyThemes: ['Evil men\'s plots', 'Serpent tongue', 'Battle protection', 'Vindication of the afflicted'],
    christConnection: 'Christ faced the serpent\'s venom and conquered. He covers our heads in battle. The cause of the afflicted is maintained by Him who dwelt among us and brings us to dwell in God\'s presence.'
  },
  {
    bookId: 'psalms',
    chapter: 141,
    title: 'Set a Guard Over My Mouth',
    summary: 'O Lord, I call upon you; hasten to me! Give ear to my voice when I call! Let my prayer be counted as incense before you, and the lifting up of my hands as the evening sacrifice! Set a guard, O Lord, over my mouth; keep watch over the door of my lips! Do not let my heart incline to any evil, to busy myself with wicked deeds. Let the oil of the righteous not refuse my head. Let the heads of those who surround me be covered with the mischief of their lips. When their judges are thrown over the cliff, then they shall hear my words. O Lord, my eyes are toward you; in you I seek refuge; leave me not defenseless!',
    keyThemes: ['Prayer as incense', 'Guard my mouth', 'Resist evil', 'Eyes toward God'],
    christConnection: 'Christ is our high priest whose prayers rise as incense. He guards our lips by His Spirit. His perfect obedience is the evening sacrifice offered on our behalf.'
  },
  {
    bookId: 'psalms',
    chapter: 142,
    title: 'No One Cares for My Soul',
    summary: 'With my voice I cry out to the Lord; with my voice I plead for mercy to the Lord. I pour out my complaint before Him; I tell my trouble before Him. When my spirit faints within me, you know my way! In the path where I walk they have hidden a trap for me. Look to the right and see: there is none who takes notice of me; no refuge remains to me; no one cares for my soul. I cry to you, O Lord; I say, "You are my refuge, my portion in the land of the living." Attend to my cry, for I am brought very low! Deliver me from my persecutors, for they are too strong for me! Bring me out of prison, that I may give thanks to your name! The righteous will surround me, for you will deal bountifully with me.',
    keyThemes: ['Crying in isolation', 'No human help', 'God as refuge and portion', 'Prison deliverance'],
    christConnection: 'Christ knew what it was to have no one care for His soul in Gethsemane. Yet God was His refuge. He brings us out of the prison of sin to thanksgiving.'
  },
  {
    bookId: 'psalms',
    chapter: 143,
    title: 'Teach Me to Do Your Will',
    summary: 'Hear my prayer, O Lord; give ear to my pleas for mercy! In your faithfulness answer me, in your righteousness! Enter not into judgment with your servant, for no one living is righteous before you. The enemy has crushed my life to the ground. My spirit faints within me; my heart is appalled. I remember the days of old; I meditate on all that you have done. I stretch out my hands to you; my soul thirsts for you like a parched land. Answer me quickly, O Lord! My spirit fails! Hide not your face from me. Let me hear in the morning of your steadfast love. Teach me to do your will, for you are my God! Let your good Spirit lead me on level ground!',
    keyThemes: ['Plea for mercy', 'No one righteous', 'Spirit thirsting', 'Taught by God\'s Spirit'],
    christConnection: 'Only in Christ can we stand before God, for no one living is righteous on their own. The good Spirit leads us in Christ\'s footsteps on level ground.'
  },
  {
    bookId: 'psalms',
    chapter: 144,
    title: 'My Rock and My Fortress',
    summary: 'Blessed be the Lord, my rock, who trains my hands for war, and my fingers for battle; He is my steadfast love and my fortress, my stronghold and my deliverer, my shield in whom I take refuge. O Lord, what is man that you regard him? Man is like a breath; his days are like a passing shadow. Bow your heavens, O Lord, and come down! Flash forth the lightning and scatter them; send out your arrows! Rescue me from many waters, from the hand of foreigners whose right hand is a right hand of falsehood. I will sing a new song to you, O God. Blessed are the people whose God is the Lord!',
    keyThemes: ['God trains for battle', 'Human frailty', 'Theophany prayer', 'New song'],
    christConnection: 'Christ bowed the heavens and came down. He trains us for spiritual warfare. Through Him we sing the new song of redemption. Blessed are those whose God is the Lord revealed in Jesus.'
  },
  {
    bookId: 'psalms',
    chapter: 145,
    title: 'Great Is the Lord',
    summary: 'I will extol you, my God and King, and bless your name forever and ever. Great is the Lord, and greatly to be praised, and His greatness is unsearchable. One generation shall commend your works to another. They shall speak of the might of your awesome deeds. The Lord is gracious and merciful, slow to anger and abounding in steadfast love. The Lord is good to all; His compassion is over all He has made. Your kingdom is an everlasting kingdom. The Lord upholds all who are falling and raises up all who are bowed down. The eyes of all look to you, and you give them their food in due season. You open your hand; you satisfy the desire of every living thing. The Lord is near to all who call on Him. He fulfills the desire of those who fear Him.',
    keyThemes: ['Acrostic praise', 'Unsearchable greatness', 'Generational testimony', 'Kingdom everlasting'],
    christConnection: 'Christ is the King whose kingdom is everlasting. He is gracious and merciful, upholding the falling, satisfying every need. He is near to all who call on His name.'
  },
  {
    bookId: 'psalms',
    chapter: 146,
    title: 'Put Not Your Trust in Princes',
    summary: 'Praise the Lord! Praise the Lord, O my soul! I will praise the Lord as long as I live. Put not your trust in princes, in a son of man, in whom there is no salvation. When his breath departs, he returns to the earth; on that very day his plans perish. Blessed is he whose help is the God of Jacob, whose hope is in the Lord his God, who made heaven and earth, the sea, and all that is in them. The Lord sets the prisoners free; the Lord opens the eyes of the blind. The Lord lifts up those who are bowed down; the Lord loves the righteous. The Lord watches over the sojourners; He upholds the widow and the fatherless. The Lord will reign forever, your God, O Zion, to all generations. Praise the Lord!',
    keyThemes: ['Not trusting humans', 'God of Jacob our help', 'Setting prisoners free', 'Eternal reign'],
    christConnection: 'Christ is the Son of Man in whom there IS salvation. He opened blind eyes, freed prisoners, lifted the bowed. His kingdom is forever, to all generations.'
  },
  {
    bookId: 'psalms',
    chapter: 147,
    title: 'He Heals the Brokenhearted',
    summary: 'Praise the Lord! For it is good to sing praises to our God. The Lord builds up Jerusalem; He gathers the outcasts of Israel. He heals the brokenhearted and binds up their wounds. He determines the number of the stars; He gives to all of them their names. Great is our Lord; His understanding is beyond measure. The Lord lifts up the humble; He casts the wicked to the ground. He covers the heavens with clouds; He gives snow like wool; He scatters frost. He sends out His word, and the ice melts. He declares His word to Jacob, His statutes to Israel. He has not dealt thus with any other nation. Praise the Lord!',
    keyThemes: ['Healing the brokenhearted', 'Gathering outcasts', 'Naming stars', 'Word commands nature'],
    christConnection: 'Christ heals the brokenhearted; He came for the lost sheep of Israel and gathers outcasts from all nations. His word commands nature and melts hearts of ice.'
  },
  {
    bookId: 'psalms',
    chapter: 148,
    title: 'Let All Creation Praise',
    summary: 'Praise the Lord! Praise the Lord from the heavens; praise Him in the heights! Praise Him, all His angels; praise Him, all His hosts! Praise Him, sun and moon; praise Him, all you shining stars! Praise Him, you highest heavens, and you waters above the heavens! Let them praise the name of the Lord! For He commanded and they were created. Praise the Lord from the earth, you great sea creatures and all deeps, fire and hail, snow and mist! Mountains and all hills, fruit trees and all cedars! Beasts and all livestock, creeping things and flying birds! Kings of the earth and all peoples! Young men and maidens together, old men and children! Let them praise the name of the Lord, for His name alone is exalted. Praise the Lord!',
    keyThemes: ['Cosmic praise', 'Heaven and earth', 'All creatures', 'All humanity'],
    christConnection: 'Through Christ all things were made and for Him all things exist. Every creature in heaven and earth will join in praise of the Lamb who was slain.'
  },
  {
    bookId: 'psalms',
    chapter: 149,
    title: 'Praise with Dance and Sword',
    summary: 'Praise the Lord! Sing to the Lord a new song, His praise in the assembly of the godly! Let Israel be glad in his Maker; let the children of Zion rejoice in their King! Let them praise His name with dancing, making melody to Him with tambourine and lyre! For the Lord takes pleasure in His people; He adorns the humble with salvation. Let the godly exult in glory; let them sing for joy on their beds. Let the high praises of God be in their throats and two-edged swords in their hands, to execute vengeance on the nations and punishments on the peoples, to bind their kings with chains. This is honor for all His godly ones. Praise the Lord!',
    keyThemes: ['New song', 'Dancing praise', 'Pleasure in His people', 'Victory over nations'],
    christConnection: 'Christ is our King in whom we rejoice. He adorns the humble with salvation. The two-edged sword is His word that judges nations. Final victory belongs to Him and His saints.'
  },
  {
    bookId: 'psalms',
    chapter: 150,
    title: 'Let Everything That Has Breath Praise',
    summary: 'Praise the Lord! Praise God in His sanctuary; praise Him in His mighty heavens! Praise Him for His mighty deeds; praise Him according to His excellent greatness! Praise Him with trumpet sound; praise Him with lute and harp! Praise Him with tambourine and dance; praise Him with strings and pipe! Praise Him with sounding cymbals; praise Him with loud clashing cymbals! Let everything that has breath praise the Lord! Praise the Lord!',
    keyThemes: ['Final hallelujah', 'Every instrument', 'For His mighty deeds', 'All breath praises'],
    christConnection: 'The Psalter ends as it should—with universal praise. Christ is the reason for this symphony. Let everything that has breath praise the Lord who breathes new life into all who believe!'
  }
];

// Helper function to get chapters by book
export function getChaptersByBook(bookId: string): ChapterSummary[] {
  switch (bookId) {
    case 'genesis':
      return GENESIS_CHAPTERS;
    case 'exodus':
      return EXODUS_CHAPTERS;
    case 'leviticus':
      return LEVITICUS_CHAPTERS;
    case 'numbers':
      return NUMBERS_CHAPTERS;
    case 'deuteronomy':
      return DEUTERONOMY_CHAPTERS;
    case 'joshua':
      return JOSHUA_CHAPTERS;
    case 'judges':
      return JUDGES_CHAPTERS;
    case 'ruth':
      return RUTH_CHAPTERS;
    case '1-samuel':
      return FIRST_SAMUEL_CHAPTERS;
    case '2-samuel':
      return SECOND_SAMUEL_CHAPTERS;
    case '1-kings':
      return FIRST_KINGS_CHAPTERS;
    case '2-kings':
      return SECOND_KINGS_CHAPTERS;
    case '1-chronicles':
      return FIRST_CHRONICLES_CHAPTERS;
    case '2-chronicles':
      return SECOND_CHRONICLES_CHAPTERS;
    case 'ezra':
      return EZRA_CHAPTERS;
    case 'nehemiah':
      return NEHEMIAH_CHAPTERS;
    case 'esther':
      return ESTHER_CHAPTERS;
    case 'job':
      return JOB_CHAPTERS;
    case 'psalms':
      return PSALMS_CHAPTERS;
    // More books will be added
    default:
      return [];
  }
}

// Export all chapter data
export const ALL_CHAPTER_SUMMARIES: BookChapters[] = [
  { bookId: 'genesis', bookName: 'Genesis', chapters: GENESIS_CHAPTERS },
  { bookId: 'exodus', bookName: 'Exodus', chapters: EXODUS_CHAPTERS },
  { bookId: 'leviticus', bookName: 'Leviticus', chapters: LEVITICUS_CHAPTERS },
  { bookId: 'numbers', bookName: 'Numbers', chapters: NUMBERS_CHAPTERS },
  { bookId: 'deuteronomy', bookName: 'Deuteronomy', chapters: DEUTERONOMY_CHAPTERS },
  { bookId: 'joshua', bookName: 'Joshua', chapters: JOSHUA_CHAPTERS },
  { bookId: 'judges', bookName: 'Judges', chapters: JUDGES_CHAPTERS },
  { bookId: 'ruth', bookName: 'Ruth', chapters: RUTH_CHAPTERS },
  { bookId: '1-samuel', bookName: '1 Samuel', chapters: FIRST_SAMUEL_CHAPTERS },
  { bookId: '2-samuel', bookName: '2 Samuel', chapters: SECOND_SAMUEL_CHAPTERS },
  { bookId: '1-kings', bookName: '1 Kings', chapters: FIRST_KINGS_CHAPTERS },
  { bookId: '2-kings', bookName: '2 Kings', chapters: SECOND_KINGS_CHAPTERS },
  { bookId: '1-chronicles', bookName: '1 Chronicles', chapters: FIRST_CHRONICLES_CHAPTERS },
  { bookId: '2-chronicles', bookName: '2 Chronicles', chapters: SECOND_CHRONICLES_CHAPTERS },
  { bookId: 'ezra', bookName: 'Ezra', chapters: EZRA_CHAPTERS },
  { bookId: 'nehemiah', bookName: 'Nehemiah', chapters: NEHEMIAH_CHAPTERS },
  { bookId: 'esther', bookName: 'Esther', chapters: ESTHER_CHAPTERS },
  { bookId: 'job', bookName: 'Job', chapters: JOB_CHAPTERS },
  { bookId: 'psalms', bookName: 'Psalms', chapters: PSALMS_CHAPTERS },
];
