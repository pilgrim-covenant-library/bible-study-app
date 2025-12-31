/**
 * Bible Chapter Commentaries
 *
 * Verbatim quotes from Reformed commentators, modernized to contemporary English:
 * - Matthew Henry's Concise Commentary
 * - John Calvin's Commentaries
 * - Matthew Poole's English Annotations
 * - Albert Barnes' Notes on the Bible
 *
 * Generated on 2025-12-30T03:28:15.844Z
 */

export type CommentatorId = 'matthew_henry' | 'john_calvin' | 'matthew_poole' | 'albert_barnes';

export interface CommentatorQuote {
  commentator: CommentatorId;
  displayName: string;
  quote: string;
  source: string;
  scrapedAt?: string;
}

export interface ChapterCommentary {
  bookId: string;
  chapter: number;
  title: string;
  quotes: CommentatorQuote[];
  keyThemes: string[];
  christConnection?: string;
}

export interface BookCommentary {
  bookId: string;
  bookName: string;
  chapters: ChapterCommentary[];
}

// ═══════════════════════════════════════════════════════════════════════════════
// GENESIS (50 Chapters)
// ═══════════════════════════════════════════════════════════════════════════════

export const GENESIS_COMMENTARY: ChapterCommentary[] = [
  {
    "bookId": "genesis",
    "chapter": 1,
    "title": "Genesis 1",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "In the beginning God created the heaven and the earth. 1:1,2 The first verse of the Bible gives us a satisfying and useful account of the origin of the earth and the heavens. The faith of humble Christians understands this better than the fancy of the most learned men. From what we see of heaven and earth, we learn the power of the great Creator. And let our make and place as men, remind us of our duty as Christians, always to keep eye, and the earth under our feet. The Son of God, one with the Father, was with him when he made the world; no, we are often told that the world was made by him, and nothing was made without him. Oh, what high thoughts should there minds, of that great God whom we worship, and of that great name we pray! And here, at the beginning of the sacred volume, we read of that Divine Spirit, whose work upon the heart of man is so often parts of the Bible. Observe, that at first there was nothing desirable to be seen, for the world was without form, and void; it was confusion, and emptiness. In like manner the work of soul is a new creation: graceless soul, one that is not born again, there is disorder, confusion, and every evil work: it is empty of all good, for it is without God; it is dark, it is darkness itself: this is our condition by nature, till Almighty grace works a .",
        "source": "https://biblehub.com/commentaries/mhc/genesis/1.htm",
        "scrapedAt": "2025-12-30T03:19:09.368Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "In the beginning God created the heaven and the earth. Genesis 1:1-311. In the beginning God created the heaven and the earth. In principio creavit Deus . And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters. ; tenebraeque voraginis, et Spiritus Dei agitabat aquarum. And God said, Let there be light: and there was light. Et dixit Deus, Sit lux. Et fuit lux. And God saw the light, that it was good: and God divided the light from the darkness. Viditque Deus lucem quod bona esset; et devisit Deus lucem a tenebris. And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day. Et vocavit Deus lucem, Diem: et tenebras vocavit Noctem. Fuitque vespera, et fuit mane dies primus. And God said, Let there be a midst of the waters, and let it divide the waters from the waters. Et dixit Deus, Sit aquarum, et devidat aquas ab aquis. And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so. Et fecit Deus expansionem: et divisit aquas quae , ab aquis quae . Et fuit ita. And God called the firmament Heaven. And the and the morning were the second day. Vocavitque Deus expansionem Coelum. Et fuit vespera, et fuit mane dies secundus. And God said, Let the waters under the heaven be gathered together to one place, and let the dry land appear: and it was so.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/1.htm",
        "scrapedAt": "2025-12-30T03:19:09.374Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "In the beginning God created the heaven and the earth. The whole visible creation , Gen 1:1. the condition of the rude matter of it, Gen 1:2. The formation of the several creatures on the several days. (1. ) Light produced by the powerful word of God, Gen 1:3; approved and separated from the darkness, Gen 1:4; named, and the first day declared, Gen 1:5. (2. ) The firmament formed, its use, name, and time, Gen 1:6-8. (3. ) The waters separated from the earth; sea and dry land named and approved, Gen 1:9-10. The earth brings forth grass, herbs, and trees; approved, and time declared, Gen 1:11-13. (4. ) The firmament furnished with sun, moon, and stars; their uses assigned, their names, with approbation, and time of doing, declared, Gen 1:14-19. (5. ) Waters and air furnished, approved, blessed, and time of it declared, Gen 1:20-23. (6. ) The earth furnished with living creatures sensitive, and approved, Gen 1:24-25. Rational sexes created upon consultation, according to God's image, with dominion over the other creatures; and blessed, Gen 1:26-28. Food appointed for man, Gen 1:29; for beasts, Gen 1:30: the whole approved on the sixth day. BC 4004 In the beginning, to wit, of time and things, in the first place, before things were distinguished and after this expressed. Or the sense is this, The beginning of the world was thus. And this phrase further informs us, that the world, and all , had a beginning, and were not from eternity, as some philosophers dreamed.",
        "source": "https://biblehub.com/commentaries/poole/genesis/1.htm",
        "scrapedAt": "2025-12-30T03:19:09.378Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "Introduction to GenesisThe Book of Genesis can be separated into eleven documents or pieces of composition most of which contain additional subordinate divisions. The first of these has no introductory phrase; the third begins with ספר זה תּולדת tôledâh zeh sēpher, \"this is the book of the generations\"; and the others with תולדות אלה tôledâh ̀ēleh, \"these are the generations. \" However, the subordinate pieces of which these primary documents consist are as distinct from each other as they are . And, each portion of the composer is as separate as the wholes which they go to constitute. The history of the fall Genesis 3, the family of Adam Genesis 4, the description of the vices of the antediluvians Genesis 6:1-8, and the confusion of tongues Genesis 11:1-9 are as distinct efforts of composition and as as any of the primary divisions. The same holds true throughout the entire Book of Genesis. Even these subordinate pieces contain still smaller passages, having an exact and self-contained finish which enables the critic to lift them out and examine them and makes him wonder if they have not been document mold which was previously fitted for their reception. The memoranda of each day's creative work, of the locality of Paradise, of each genealogy of Noah, and the genealogy of Abraham are striking examples of this. They sit, narrative, like a setting. Whether these primary documents were originally composed by Moses, or whether they came into his hands from earlier sacred writers and were revised by him and combined into his great work, we are not informed.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/1.htm",
        "scrapedAt": "2025-12-30T03:19:09.386Z"
      }
    ],
    "keyThemes": [
      "God as sovereign Creator",
      "Humanity in God's image",
      "Goodness of creation",
      "Divine order"
    ],
    "christConnection": "Christ is the Word through whom all things were made (John 1:3). As the \"image of the invisible God\" (Col 1:15), He is the true and perfect image that Adam foreshadowed."
  },
  {
    "bookId": "genesis",
    "chapter": 2,
    "title": "Genesis 2",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "Thus the heavens and the earth were finished, and all the host of them. 2:1-3 After six days, God ceased from all works of creation. In miracles, he has overruled nature, but never changed its settled course, or added to it. God did not rest as one weary, but as one well pleased. Notice the beginning of the kingdom of grace, in the sanctification, or keeping holy, of the sabbath day. The solemn observing of one as a day of holy rest and holy work, to God's honour, is the duty of all to whom God has made known his holy sabbaths. At this time none of the human race but our first parents. For them the sabbath was appointed; and clearly for all succeeding generations also. The Christian sabbath, which we observe, is a seventh day, we celebrate the rest of God the Son, and the finishing the work of our redemption. Genesis 2:2And on the seventh day God ended his work which he had made; and he rested on the seventh day from all his work which he had made. Genesis 2:3And God blessed the seventh day, and sanctified it: because he had rested from all his work which God created and made. Genesis 2:4These are the generations of the heavens and of the earth when they were created, in the day that the LORD God made the earth and the heavens,2:4-7 Here is a name given to the Creator, Jehovah. Where the word LORD is English Bibles, in the original it is Jehovah.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/2.htm",
        "scrapedAt": "2025-12-30T03:19:09.389Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "Thus the heavens and the earth were finished, and all the host of them. Genesis 2:1-251. Thus the heavens and the earth were finished, and all the host of them. Perfecti fuerunt igitur , et omnis exercitus eorum. And on the seventh day God ended his work which he had made; and he rested on the seventh day from all his work which he had made. Perfeceratque Deus die septimo opus suum quod fecerat, et quievit die septimo ab omni opere suo quod fecerat. And God blessed the seventh day, and sanctified it: because he had rested from all his work which God created and made. septimo, et sanctificavit illum: quievisset abomni opere suo quod creaverat Deus ut faceret. These are the generations of the heavens and of the earth when they were created, in the day that the LORD God made the earth and the heavens, 4. Istae sunt generationes , quando creati sunt, in die qua fecit Jehova Deus , 5. And every plant of the field before it earth, and every herb of the field before it grew: for the LORD God had not caused it to rain upon the earth, and there was not a man to till the ground. Et omne virgultum agri antequam , et omnem herbam agri antequam germinaret: quia nondum pluere fecerat Jehova , et homo coleret terram: 6. But there went up a mist from the earth, and watered the whole face of the ground. Sed vapot ascendebat e terra, et irrigabat universam superficiem terrae.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/2.htm",
        "scrapedAt": "2025-12-30T03:19:09.396Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "Thus the heavens and the earth were finished, and all the host of them. The sabbath insituted and blessed, Genesis 2:2-3. A rehearsal of the creation; and, (1. ) Of vegetables, Genesis 2:4-5. The earth watered, Genesis 2:6. (2. ) Of man, Genesis 2:7. His habitation, Genesis 2:8-9. Trees for his delight and food; as also the tree of life and knowledge, Genesis 2:9. Its pleasant situation and riches, Genesis 2:10-14. Man's employment, Genesis 2:15. Every tree given him but that of knowledge, Genesis 2:16. This denied on pain of death, Genesis 2:17. A purpose to create the woman, and the reason of it, Genesis 2:18. Beasts and fowls named by Adam, Genesis 2:19-20. The woman made of Adam's rib, presented to him, Genesis 2:21-22, and owned by him, Genesis 2:23. Marriage ordained, Genesis 2:24. Their state whilst innocent, Genesis 2:25. All the and earth are called their hosts, for their multitude, variety, order, power, and subjection to the Lord of hosts. Particularly the host of (which is its own best interpreter) signifies both the stars, as Deu 4:19, Deu 17:3, Isaiah 34:4; and the angels, as 1 Kings 22:19 2 Chronicles 18:18 Luke 2:13; who from these words appear to have been created within the compass of the first six days, which also is probable from Colossians 1:16-17. But it is no wonder that the Scripture says so little concerning angels, because it was written for the use of men, not of angels; and God would hereby take us off from curious and impertinent speculations, and teach us to employ our thoughts about necessary and useful things.",
        "source": "https://biblehub.com/commentaries/poole/genesis/2.htm",
        "scrapedAt": "2025-12-30T03:19:09.400Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "Thus the heavens and the earth were finished, and all the host of them. - The Seventh Day1. צבא tsābā' \"a order,\" a company of persons or order of their nature and the progressive discharge of their functions. Hence, it is applied to the starry host Deuteronomy 4:19, to the angelic host 1 Kings 22:19, to the host of Israel Exodus 12:41, and to the ministering Levites Numbers 4:23. κόσμος kosmos. חשׁביעי chashebı̂y‛ı̂y. Here השׁשׁי hashshı̂y is read by the Samaritan Pentateuch, the Septuagint, the Syriac, and Josephus. The Masoretic reading, however, is preferable, as the sixth day was preceding paragraph: to finish a work on the seventh day is, in Hebrew phrase, not to do any part of it on that day, but to cease from it as a thing already finished; and \"resting,\" in the subsequent part of the verse, is distinct from \"finishing,\" being the positive of which the latter is the negative. שׁבת shābat \"rest. \" ישׁב yāshab \"sit. \" 3. קדשׁ qādı̂sh \"be separate, clean, holy, set apart for a sacred use. \" In this section we have the institution of the day of rest, the Sabbath שׁבת shabāt, on the cessation of God from his creative activity. Genesis 2:1 And all the host of them. - All the array of luminaries, plants, and animals by which the darkness, waste, and solitude of sky and land were removed, has now been called into unhindered action or new existence. The whole is now finished; that is, perfectly suited at length for the convenience of man, the high-born inhabitant of this fair scene.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/2.htm",
        "scrapedAt": "2025-12-30T03:19:09.405Z"
      }
    ],
    "keyThemes": [
      "Sabbath rest",
      "Covenant of works",
      "Marriage as divine institution",
      "Human dignity and purpose"
    ],
    "christConnection": "Adam is a type of Christ, the \"last Adam\" (1 Cor 15:45). As Eve came from Adam's side, the Church comes from Christ's wounded side. Christ is the true Bridegroom."
  },
  {
    "bookId": "genesis",
    "chapter": 3,
    "title": "Genesis 3",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "Now the serpent was more subtil than any beast of the field which the LORD God had made. And he said to the woman, Yes, has God said, You shall not eat of every tree of the garden? 3:1-5 Satan assaulted our first parents, to draw them to sin, and the temptation proved fatal to them. The tempter was the devil, in the shape and likeness of a serpent. Satan's plan was to draw our first parents to sin, and so to separate between them and their God. Thus the devil was from the beginning a murderer, and the great mischief maker. The person tempted was the woman: it was Satan's policy to enter into talk with her when she was alone. There are many temptations to which being alone gives great advantage; but the communion of saints tends very much to their strength and safety. Satan took advantage by finding her near the forbidden tree. They that would not eat the forbidden fruit, must not come near the forbidden tree. Satan tempted Eve, that by her he might tempt Adam. It is his policy to send temptations by hands we do not suspect, and by those that have most influence upon us. Satan questioned whether it were a sin or not, to eat of this tree. He did not disclose his design at first, but he put a question which seemed innocent. Those who would be safe, need to be shy of talking with the tempter. He quoted the command wrong.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/3.htm",
        "scrapedAt": "2025-12-30T03:19:09.407Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "Now the serpent was more subtil than any beast of the field which the LORD God had made. And he said to the woman, Yes, has God said, You shall not eat of every tree of the garden? Genesis 3:1-241. Now the serpent was more subtil than any beast of the field which the LORD God had made. And he said to the woman, Yes, has God said, You shall not eat of every tree of the garden? 1. Porro omni bestia agri, quam fecerat Jehova Deus: et , Etiamne dixit Deus, Non comedetis ex omni arbore horti? 2. And the woman said to the serpent, We may eat of the fruit of the trees of the garden: 2. Et dixit , De fructu arborum horti vescimur. But of the fruit of the tree which midst of the garden, God has said, You shall not eat of it, neither shall you touch it, l you die. arboris quae horti, dixit Deus, Non comedetis ex ea, neque contingetis eam, ne forte moriamini. And the serpent said to the woman, You shall not surely die: 4. Tunc dixit , Non moriendo moriemini. For God does know day you eat of it, then your eyes shall be opened, and you shall be as gods, knowing good and evil. Scit enim Deus qua comedeits ex ea, aperientur oculi vestri, et eritis sicut dii, scientes . And when the woman saw that the tree was good for food, and that it was pleasant to the eyes, and a tree to be desired to make one wise, she took of the fruit of it, and did eat, and gave also to her husband with her; and he did eat.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/3.htm",
        "scrapedAt": "2025-12-30T03:19:09.414Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "Now the serpent was more subtil than any beast of the field which the LORD God had made. And he said to the woman, Yes, has God said, You shall not eat of every tree of the garden? The serpent's subtlety, and insnaring question, Genesis 3:1. The woman's answer, Genesis 3:2. The serpent denies the certianty of the threatening, Genesis 3:4; suggests a benefit by eating, Genesis 3:5. The woman looks on the fruit, takes, eats, gives to the man, who also eats of it, Genesis 3:6. The consequence of their sin, Genesis 3:7-8. Adam's summons, Genesis 3:9, appearance, Genesis 3:10, examination, Genesis 3:11, excuse, Genesis 3:12. The woman examined, excuses, yet confesses the fact, Genesis 3:13. Sentence upon the serpent the instrument, Genesis 3:14; upon the devil the chief agent, with the first gospel promise, Genesis 3:15; upon the woman, Genesis 3:16; upon the man, Genesis 3:17-19. Adam names his wife, Genesis 3:20. God clothes them, Genesis 3:21. They are thrown out of Paradise, Genesis 3:22, to till the ground, Genesis 3:23. Their return impossible, Genesis 3:24. The serpent; or rather, this or that serpent; for here is an emphatical article, of which more by and by. The serpent's eminent subtlety is noted Scripture, Genesis 49:17 Psalm 58:5 Matthew 10:16 2 Corinthians 11:3, and by heathen authors, of which these instances are given; that when it is assaulted, it secures its head; that it stops its ear at the charmer's voice; and the like. If it be yet said that some beasts are more subtle, and therefore this is not true; it may be replied, 1.",
        "source": "https://biblehub.com/commentaries/poole/genesis/3.htm",
        "scrapedAt": "2025-12-30T03:19:09.417Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "Now the serpent was more subtil than any beast of the field which the LORD God had made. And he said to the woman, Yes, has God said, You shall not eat of every tree of the garden? - Section III-- The Fall - The Fall 1. נחשׁ nachash \"serpent; related: hiss,\" Gesenius; \"sting,\" Mey. ערוּם 'ārûm \"subtle, crafty, using craft for defence. \" 7. תפר tāpar \"sew, stitch, tack together. \" חגורה chăgôrâh \"girdle, not necessarily apron. \" This chapter continues the piece commenced at Genesis 2:4. The same combination of divine names is found here, dialogue between the serpent and the woman, where God (אלהים 'ĕlohı̂ym) alone is used. It is natural for the tempter to use only the more distant and abstract name of God. It terms the fall of man. Genesis 3:1 The serpent is here called a \"beast of the field\"; that is, neither a domesticated animal nor one of the smaller sorts. The Lord God had made it, and therefore it was a creature called into being on the same day with Adam. It is not the wisdom, but the wiliness of the serpent which is here noted. This animal is destitute of arms or legs by which to escape danger. It is therefore thrown back upon instinct, aided by a quick and glaring eye, and a rapid dart and recoil, to evade the stroke of violence, and watch and seize the unguarded moment for inflicting the deadly bite. Hence, the wily and insidious character of its instinct, which is noticed to account for the mode of attack here chosen, and the style of the conversation.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/3.htm",
        "scrapedAt": "2025-12-30T03:19:09.424Z"
      }
    ],
    "keyThemes": [
      "Temptation and sin",
      "Broken covenant",
      "Divine judgment",
      "First gospel promise (Protoevangelium)"
    ],
    "christConnection": "Genesis 3:15 is the first promise of Christ—the Seed of the woman who will crush Satan's head while being bruised Himself on the cross."
  },
  {
    "bookId": "genesis",
    "chapter": 4,
    "title": "Genesis 4",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And Adam knew Eve his wife; and she conceived, and bare Cain, and said, I have gotten a man from the LORD. 4:1-7 When Cain was born, Eve said, I have gotten a man from the Lord. Perhaps she thought that this was the promised seed. If so, she was wofully disappointed. Abel signifies vanity: when she thought she had the promised , whose name signifies possession, she was so taken up with him that another son was as vanity to her. Observe, each son had a calling. It is the will of God for every one to have something to world. Parents ought to bring up their children to work. Give them a Bible and a calling, said good Mr. Dod, and God be with them. We may believe that God commanded Adam, after the fall, to shed the blood of innocent animals, and after their death to burn part or the whole of their bodies by fire. Thus that punishment which sinners deserve, even the death of the body, and the wrath of God, of which fire is a well-known emblem, and also the sufferings of Christ, were prefigured. Observe that the religious worship of God is no new invention. It was from the beginning; it is the good old way, Jer 6:16. The offerings of Cain and Abel were different. Cain showed a proud, unbelieving heart. Therefore he and his offering were rejected. Abel came as a sinner, and according to God's appointment, by his sacrifice expressing humility, sincerity, and believing obedience.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/4.htm",
        "scrapedAt": "2025-12-30T03:19:09.426Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And Adam knew Eve his wife; and she conceived, and bare Cain, and said, I have gotten a man from the LORD. Genesis 4:1-261. And Adam knew Eve his wife; and she conceived, and bare Cain, and said, I have gotten a man from the LORD. Et Adam cognovit Hava uxorem suam: quae concepit, et peperit Cain: et dixit, Acquisivi virum a Jehova. And she again bare his brother Abel. And Abel was a keeper of sheep, but Cain was a tiller of the ground. Et addidit parere fratrem ejus Ebel: pastor ovium, et Cain fuit cultor terrae: 3. of time it came to pass, that Cain brought of the fruit of the ground an offering to the LORD. Et fuit, a fine dierum adduxit terrae oblationem Jehovae. And Abel, he also brought of the firstlings of his flock and of the fat of it. And the LORD had respect to Abel and to his offering: 4. Et Ebel etiam ipse pecudum suarum, earum: et respexit , ejus: 5. But to Cain and to his offering he had not respect. And Cain was very wroth, and his countenance fell. Ad Cain oblationem ejus non respexit: iratus est itaque Cain valde, et concidit vultus ejus. And the LORD said to Cain, Why are you wroth? and why is your countenance fallen? 6. Et dixit , Utquid excanduisti? et utquid concidit vultus tuus? 7. If you do well, shall you not be accepted? and if you do not well, sin ls at the door.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/4.htm",
        "scrapedAt": "2025-12-30T03:19:09.433Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And Adam knew Eve his wife; and she conceived, and bare Cain, and said, I have gotten a man from the LORD. The birth of Cain and Abel, and their employment, Genesis 4:1-2. Cain's offering, Genesis 4:3. Abel's sacrifice, and God's acceptance, Genesis 4:4. Cain's rejected; his discontent, Genesis 4:5. God expostulates it with him, Genesis 4:6-7. He murders Abel, Genesis 4:8. God makes inquiry after Abel, Genesis 4:9. The cry of his blood, Genesis 4:10. God's curse upon Cain, Genesis 4:11-12. His complaint, Genesis 4:13-14. God mitigates it, Genesis 4:15. Its execution, Genesis 4:16. Cain's posterity, Genesis 4:17-18. Lamech's two wives, Genesis 4:19. They bear to him sons, who , Genesis 4:20; invent musical instruments, Genesis 4:21; have and iron, Genesis 4:22. His boasting, Genesis 4:23-24. The birth of Seth, Genesis 4:25. His son; the revival of religion, Genesis 4:26. This modest expression is used and other authors, to signify the conjugal act or carnal knowledge. So Genesis 19:8, Genesis 24:16, Numbers 31:17 Matthew 1:25 Luke 1:34. Cain, whose name signifies a possession. A man, a male child, as Genesis 7:2, which was most welcome. From the Lord; or, by or with the Lord, i. e. by virtue of his first blessing, Genesis 1:28, and special favour. Or, a man the Lord, as the words properly signify: q. d. God-man, or the Messias, hoping that this was the promised Seed. Genesis 4:2And she again bare his brother Abel. And Abel was a keeper of sheep, but Cain was a tiller of the ground.",
        "source": "https://biblehub.com/commentaries/poole/genesis/4.htm",
        "scrapedAt": "2025-12-30T03:19:09.437Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And Adam knew Eve his wife; and she conceived, and bare Cain, and said, I have gotten a man from the LORD. - Section IV - The Family of Adam - Cain and Abel 1. קין qayı̂n, Qain (Cain), \"spear-shaft,\" and קנה qānah, \"set up, establish, gain, buy,\" contain the biliteral root קן qan, \"set up, erect, gain. \" The relations of root words are not confined to the narrow rules of our common etymology, but really extend to such instinctive usages as the unlettered speaker will invent or employ. A full examination of the Hebrew tongue leads to the conclusion that a biliteral root lies at the base of many of those triliterals that consist of two firm consonants and a third weaker one and its position. Thus, יטב yāṭab and טיב ṭôb. So קין qayı̂n and קנה qānah grow from one root. הבל hebel, Habel (Abel), \"breath, vapor. \" 3. מנחה mı̂nchâh, \"gift, offering, tribute. \" In contrast with זבח zebach, it means a \"bloodless offering\". חטאת chaṭā't, \"sin, sin-penalty, sin-offering. \" רבץ rābats, \"lie, couch as an animal. \" 16. נוד nôd, Nod, \"flight, exile; related: flee. \" This chapter is a continuation of the second document. Yet it is distinguished from the previous part of it by the use of the name Yahweh alone, and, in one instance, אלהים 'ĕlohı̂ym alone, to designate the Supreme Being. This is sufficient to show that distinct pieces of composition are included within these documents. In the creation week judgment, God has proved himself an originator of being and a keeper of his word, and, therefore, the significant personal name Yahweh is ready on the lips of Eve and from the pen of the writer.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/4.htm",
        "scrapedAt": "2025-12-30T03:19:09.440Z"
      }
    ],
    "keyThemes": [
      "Acceptable worship",
      "Sin's progression",
      "Judgment and mercy",
      "Two lines of humanity"
    ],
    "christConnection": "Abel's blood cried for vengeance, but Christ's blood \"speaks a better word\" (Heb 12:24)—crying for mercy and forgiveness."
  },
  {
    "bookId": "genesis",
    "chapter": 5,
    "title": "Genesis 5",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "This is the book of the generations of Adam. In the day that God created man, in the likeness of God made he him;5:1-5 Adam was image of God; but when fallen he fathered a own image, sinful and defiled, frail, wretched, and mortal, like himself. Not only a man like himself, consisting of body and soul, but a sinner like himself. This was the reverse of that Divine Adam was made; having lost it, he could not convey it to his seed. Adam lived, in all, 930 years; and then died, according to the sentence passed upon him, To dust you shall return. Though he did not day he ate forbidden fruit, very day he became mortal. Then he began to die; his whole life after was but a reprieve, a forfeited, condemned life; it was a wasting, dying life. Man's life is but dying by degrees. Genesis 5:2Male and female created he them; and blessed them, and called their name Adam, in the day when they were created. Genesis 5:3And Adam lived an hundred and thirty years, and fathered a own likeness, after his image; and called his name Seth: Genesis 5:4And the days of Adam after he had born Seth were eight hundred years: and he fathered sons and daughters: Genesis 5:5And all the days that Adam lived were nine hundred and thirty years: and he died. Genesis 5:6And Seth lived an hundred and five years, and fathered Enos:5:6-20 Concerning each of these, except Enoch, it is said, and he died.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/5.htm",
        "scrapedAt": "2025-12-30T03:19:09.442Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "This is the book of the generations of Adam. In the day that God created man, in the likeness of God made he him;Genesis 5:1-321. This is the book of the generations of Adam. In the day that God created man, in the likeness of God made he him; 1. Iste est liber generationum Adam: in die qua creavit Deus hominem, ad similitudinem Dei fecit illum. Male and female created he them; and blessed them, and called their name Adam, in the day when they were created. creeavit eos, et benedixit eis: et vocavit nomen eorum Hominem, in die qua creati sunt. And Adam lived an hundred and thirty years, and fathered a own likeness, after his image; and called his name Seth: 3. Et vixit Adam annos: et suam, ad imaginem suam filium, et vocavit nomen ejus Seth. And the days of Adam after he had born Seth were eight hundred years: and he fathered sons and daughters: 4. Et fuerunt dies Adam postquam genuit Seth, octingenti anni: et genuit . And all the days that Adam lived were nine hundred and thirty years: and he died. Fuerunt itaque omnes dies Adam quibus vixit, nongenti anni: et mortuus est. And Seth lived an hundred and five years, and fathered Enos: 6. Et vixit Seth quinque annos, et genuit Enos. And Seth lived after he fathered Enos eight hundred and seven years, and fathered sons and daughters: 7. Et vixit Seth postquam genuit Enos, septem annos: et genuit . And all the days of Seth were nine hundred and twelve years: and he died.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/5.htm",
        "scrapedAt": "2025-12-30T03:19:09.444Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "This is the book of the generations of Adam. In the day that God created man, in the likeness of God made he him;4004 The manner of man's creation repeated, Genesis 5:1-2. The genealogy, age, and death of the fathers from Adam to Noah, in the line of Seth. Seth born of Adam after his image, Genesis 5:3. The piety and translation of Enoch, Genesis 5:24. Lamech's prophecy of his son Noah, Genesis 5:29. Sons born to Noah, Genesis 5:32. This is the book, i. e. the list or catalogue, as this word is taken, Nehemiah 7:5 Matthew 1:1, as it is also put for any short writing, as for a bill of divorce, as Deu 24:1-2. The generations of Adam, i. e. his posterity born by him; the word being passively used. But he does not here give a complete list of all Adam's children, but only of his godly seed, which preserved true religion and the worship of God from Adam to the Flood, and from whose loins Christ came, Luke 3:1-38. God created man. This is here repeated to note the different way of the production of Adam, and of his posterity; his was by creation from God, theirs by generation from their parents. See Genesis 1:26. Genesis 5:2Male and female created he them; and blessed them, and called their name Adam, in the day when they were created. See Genesis 1:26 Matthew 19:4 Mark 10:6. He blessed them with power to propagate their kind, and with other blessings.",
        "source": "https://biblehub.com/commentaries/poole/genesis/5.htm",
        "scrapedAt": "2025-12-30T03:19:09.445Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "This is the book of the generations of Adam. In the day that God created man, in the likeness of God made he him; - Section V - The Line to Noah - The Line of Shs 1. ספר sepher \"writing, a writing, a book. \" 9. קינן qēynān, Qenan, \"possessor, or spearsman. \" 12. <מהללאל mahelal'ēl, Mahalalel, \"praise of 'El. \" 15. ירד yerĕd, Jered, \"going down. \" 21. מתוּשׁלה metûshālach, Methushelach, \"man of the missile. \" 29. נה noach, Noach, \"rest,\" נחם nācham \"sigh; repent; pity; comfort oneself; be revenged. \" 32. שׁם shēm, Shem, \"name, fame; related: be high. \" חם chām Cham, \"hot. \" יפת yāpet, Japhs, \"spreading; related: spread out. \" We now enter upon the third of the larger documents . The first is a diary, the second is a history, the third a genealogy. The first employs the name אלהים 'ĕlohı̂ym exclusively; the second uses אלהים יהוה yehovâh'ĕlohı̂ second and third chapters, and יהוה yehovâh fourth; the third has אלהים 'ĕlohı̂ first part, and יהוה yehovâ second part. The name אלהים 'ĕlohı̂ym is beginning of the chapter with a manif reference to the first document, which is here quoted and abridged. This chapter contains the line from Adam to Noah, in which are stated some common particulars concerning all, and certain special details concerning three of them. The genealogy is traced to the from Adam, and terminates with the flood. The scope of the chapter is to mark out the line of faith and hope and holiness from Adam, the first head of the human race, to Noah, who became eventually the second natural head of it.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/5.htm",
        "scrapedAt": "2025-12-30T03:19:09.447Z"
      }
    ],
    "keyThemes": [
      "Death as consequence of sin",
      "Faithful remnant",
      "Hope amid judgment",
      "Walking with God"
    ],
    "christConnection": "Enoch's translation foreshadows resurrection life. Noah's name (\"rest\") anticipates the true rest that comes through Christ."
  },
  {
    "bookId": "genesis",
    "chapter": 6,
    "title": "Genesis 6",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And it came to pass, when men began to multiply on the face of the earth, and daughters were born to them,6:1-7 The most remarkable thing concerning the old world, is the destroying of it by the deluge, or flood. We are told of the abounding iniquity of that wicked world: God's just wrath, and his holy resolution to punish it. In all ages there has been a peculiar curse of God upon marriages between professors of true religion and its avowed enemies. The evil example of the ungodly party corrupts or greatly hurts the other. Family religion is put an end to, and the children are trained up according to the worldly maxims of that parent who is without the fear of God. If we profess to be the sons and daughters of the Lord Almighty, we must not marry without his consent. He will never give his blessing, if we prefer beauty, wit, wealth, or worldly honours, to faith and holiness. The Spirit of God strove with men, by sending Enoch, Noah, and perhaps others, to preach to them; by waiting to be gracious, nevertheless their rebellions; and by exciting alarm and consciences. But the Lord declared that his Spirit should not thus strive with men always; he would leave them to be , and ripened for destruction. This he determined on, because man was flesh: not only frail and feeble, but carnal and depraved; having misused the noble powers of his soul to gratify his corrupt inclinations.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/6.htm",
        "scrapedAt": "2025-12-30T03:19:09.448Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And it came to pass, when men began to multiply on the face of the earth, and daughters were born to them,Genesis 6:1-221. And it came to pass, when men began to multiply on the face of the earth, and daughters were born to them, 1. Et fuit, quum coepis sent homines terrae, filiaeque natae essent eis: 2. That the sons of God saw the daughters of men that they were fair; and they took them wives of all which they chose. Tunc viderunt filii Dei filias hominum quod pulchrae essent: et acceperunt sibi uxores ex omnibus quas elegerant. And the LORD said, My spirit shall not always strive with man, for that he also is flesh: yet his days shall be an hundred and twenty years. Et dixit Jehovan, Non desceptabit Spiritus in saeculum, eo quod sit etiam ipse caro: et erunt dies ejus anni. There were days; and also after that, when the sons of God the daughters of men, and they bare children to them, the same became mighty men which were of old, men of renown. Gigantes in diebus illis: et etiam postquam ingressi sunt filii hominum, genuerunt eis: isti sunt potentes, qui a saeculo fuerunt viri nominis. And GOD saw that the wickedness of man was earth, and that every imagination of the thoughts of his heart was only evil continually. Et vidit Jehova quod multa esset malitia et quod omne figmentum cogitationum cordit eorum tantumodo esset malum omni die: 6. And it repented the LORD that he had made man on the earth, and it grieved him at his heart.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/6.htm",
        "scrapedAt": "2025-12-30T03:19:09.451Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And it came to pass, when men began to multiply on the face of the earth, and daughters were born to them,Unlawful matches of the sons of God with the daughters of men, Genesis 6:1-2, grieve the Spirit of God, who threatens their destruction, Genesis 6:3. Giants and mighty men born; a general degeneracy of mankind, Genesis 6:4-5. God repents that he had made man, and resolves to destroy that world, Genesis 6:6-7. Noah is excepted, and finds favour with God, Genesis 6:8. His character, Genesis 6:9. The earth corrupt, and filled with violence, Genesis 6:11-12. God declares to Noah his purpose to destroy it, Genesis 6:13. Directs him to make an ark, Genesis 6:14-16. Mentions a deluge, Genesis 6:17. His covenant with Noah to preserve a seed, Genesis 6:18-21. Noah's obedience, Genesis 6:22. Men, i. e. wicked men, the posterity of Cain, as appears from Genesis 6:2; who are here called men, and the sons of men, by way of contempt, and of distinction; mere men, such as had only the natures and qualities of corrupt men, without the image of God. Began to multiply, to wit, more than ordinarily; or more than the sons of God, because they practised polygamy, after the example of their predecessor, the ungodly Lamech, Genesis 4:19. Daughters were born to them; so doubtless were sons also; but their daughters are here mentioned as one principal occasion of the sin 6:2, and of the following deluge. Genesis 6:2That the sons of God saw the daughters of men that they were fair; and they took them wives of all which they chose.",
        "source": "https://biblehub.com/commentaries/poole/genesis/6.htm",
        "scrapedAt": "2025-12-30T03:19:09.453Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And it came to pass, when men began to multiply on the face of the earth, and daughters were born to them,There are two stages of evil set 6:1-4 - the one present four verses, and the following. The former refers to the apostasy of the descendants of Shs, and the cause and consequences of it. When man began to multiply, the separate families of Cain and Shs would come into contact. The daughters of the stirring Cainites, distinguished by the graces of nature, the embellishments of are, and the charms of music and song, even though destitute of the loftier qualities of likemindedness with God, would attract attention and prompt to unholy alliances. The phrase \"sons of God,\" means an order of intelligent beings who \"retain the purity of moral character\" originally communicated, or subsequently restored, by their Creator. They are called the sons of God, because they have his spirit or disposition. The sons of God 38:7, are an order of rational beings existing before the creation of man, and symphony of the universe, when the earth and all things were called into being. Then all were holy, for all are styled the sons of God. Such, however, are not present passage. For they were not created as a race, have no distinction of sex, and therefore no sexual desire; they \"neither marry nor are \" Matthew 22:30. It is contrary to the law of nature for different species even on earth to carnal way; much more for body, and those who have not a body of flesh.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/6.htm",
        "scrapedAt": "2025-12-30T03:19:09.457Z"
      }
    ],
    "keyThemes": [
      "Total depravity",
      "Divine grief and wrath",
      "Saving grace",
      "Covenant faithfulness"
    ],
    "christConnection": "Noah finding \"grace\" is the first use of this word in Scripture. The ark is a type of Christ—the only refuge from divine judgment."
  },
  {
    "bookId": "genesis",
    "chapter": 7,
    "title": "Genesis 7",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And the LORD said to Noah, Come you and all your house into the ark; for you have I seen righteous before generation. 7:1-12 The call to Noah is very kind, like that of a tender father to his children to come in-doors when he sees night or a storm coming. Noah did not go into the ark till God bade him, though he knew it was to be his place of refuge. It is very comfortable to see God going before step we take. Noah had taken a great deal of pains to build the ark, and now he was himself kept . What we to the command of God, , we ourselves shall certainly have the comfort of, first or last. This call to Noah reminds us of the call the gospel gives to poor sinners. Christ is an ark, in whom alone we can be safe, when death and judgment approach. The word says, Come; ministers say, Come; the Spirit says, Come, come into the Ark. Noah was accounted righteous, not for his own righteousness, but as an heir of the righteousness which is by faith, Heb 11:7. He believed the revelation of a saviour, and sought and expected salvation through Him alone. Thus was he justified by faith, and received that Spirit whose fruit goodness; but if any man have not the Spirit of Christ, he is none of his. After the hundred and twenty years, God granted seven days' longer space for repentance. But these seven days were trifled away, like all the rest.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/7.htm",
        "scrapedAt": "2025-12-30T03:19:09.459Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And the LORD said to Noah, Come you and all your house into the ark; for you have I seen righteous before generation. Genesis 7:1-241. And the LORD said to Noah, Come you and all your house into the ark; for you have I seen righteous before generation. Et dixit , Ingredere tu, et omnis domus tua arcam: quia to vidi justum coram ista. Of every clean beast you shall take to you by sevens, the male and his female: and of beasts that are not clean by two, the male and his female. Ex omni animali mundo capies tibi septena septena, ejus: et ex animali quod non mundum est, bina, ejus. Of fowls also of the air by sevens, the male and the female; to keep seed alive upon the face of all the earth. Etiam ex volatili coeli septena, : ut vivum conservetur omnis terrae. For yet seven days, and I will cause it to rain upon the earth forty days and forty nights; and every living substance that I have made will I destroy from off the face of the earth. adhuc septem ego quadraginta dies, et quadraginta noctes, et delebo omnem substantiam quam feci, a superficie terrae. And Noah did according to all that the LORD commanded him. Et fecit Noah secundum omnia quae praeceperat ei Jehova. And Noah was six hundred years old when the flood of waters was upon the earth. sexcentorum annorum quando diluvium fuit . And Noah went in, and his sons, and his wife, and his sons' wives with him, into the ark, because of the waters of the flood.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/7.htm",
        "scrapedAt": "2025-12-30T03:19:09.462Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And the LORD said to Noah, Come you and all your house into the ark; for you have I seen righteous before generation. God commands Noah to enter into the ark; the reason of it, Genesis 7:1. Directs him as to the manner and time, Genesis 7:2-4. Noah's things, Genesis 7:5. His age, Genesis 7:6. His entrance with his family, &c. into the ark, Genesis 7:7-9. The the flood began, Genesis 7:10-11. Its continuance, Genesis 7:12. Noah and his family, &c. in the ark, Genesis 7:13-16. The flood increases and destroys all living substance, Genesis 7:17-24. 2349 When the ark was finished and furnished, and the time of God's patience expired, Genesis 6:3, he said to Noah, Come, i. e. prepare to enter, you and all your family; which consisted only of eight persons, 1 Peter 3:20, to wit, Noah and his three sons, and their four wives, Genesis 6:18. By which it appears that each had but one wife, and consequently it is more than probable that polygamy, as it posterity of wicked Cain, Genesis 4:19, so it was confined to them, and had not as yet got footing amongst the sons of God. For if ever polygamy had been allowable, it must have been now, for the repeopling of the perishing world. For you have I seen righteous, with the righteousness of faith, as it is explained, Hebrews 11:7, evidenced by all the fruits of righteousness and true holiness, not only before men, and seemingly, but really, and to my all-seeing eye, in this generation; of which expression, see Poole on \"Genesis 6:9\".",
        "source": "https://biblehub.com/commentaries/poole/genesis/7.htm",
        "scrapedAt": "2025-12-30T03:19:09.463Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And the LORD said to Noah, Come you and all your house into the ark; for you have I seen righteous before generation. - The Ark Was Entered2. טהור ṭâhôr \"clean, fit for food or sacrifice. \" 4. יקוּם yeqûm \"standing thing; what grows up, whether animal or plant. \" Compare קמה qāmâh \"stalk, or standing corn. \" Genesis 7:1-4 Here is found the command to enter the ark. The general preceding chapter was given many years ago, before the ark was commenced. Now, when it is completed, a more specific command is issued. \"For you have I seen righteous before me. \" Noah has accepted the mercy of God, is therefore set of law, and walks of practice. The Lord recognizes this indication of an adopted and renewed son. \"In this age\" he and his were the solitary family so characterized. Genesis 7:2Of every clean beast you shall take to you by sevens, the male and his female: and of beasts that are not clean by two, the male and his female. Of all clean cattle. - Here the distinction of clean and unclean animals meets us without any previous notice. How it became known to Noah we are not informed. From the former direction it appears that the animals were to enter by pairs. Now it is further arranged that there are to be seven pairs of the clean cattle and fowl, and only one pair of the unclean. Genesis 7:3Of fowls also of the air by sevens, the male and the female; to keep seed alive upon the face of all the earth.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/7.htm",
        "scrapedAt": "2025-12-30T03:19:09.464Z"
      }
    ],
    "keyThemes": [
      "Obedience of faith",
      "Universal judgment",
      "Divine preservation",
      "New beginning"
    ],
    "christConnection": "Peter connects the flood waters to baptism (1 Pet 3:20-21). As Noah's family was saved through water, believers are saved through Christ."
  },
  {
    "bookId": "genesis",
    "chapter": 8,
    "title": "Genesis 8",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And God remembered Noah, and every living thing, and all the cattle that was with ark: and God made a wind to pass over the earth, and the waters asswaged;8:1-3 The whole race of mankind, except Noah and his family, were now dead, so that God's remembering Noah, was the return of his mercy to mankind, of whom he would not make a full end. The demands of Divine justice had been answered by the ruin of sinners. God sent his wind to dry the earth, and seal up his waters. The same hand that brings the desolation, must bring the deliverance; to that hand, therefore, we must ever look. When afflictions have done the work for which they are sent, whether killing work or curing work, they will be taken away. As the earth was not day, so it was not day. God usually works deliverance for his people gradually, that the day of small things may not be despised, nor the day of great things despaired of. Genesis 8:2The fountains also of the deep and the windows of heaven were stopped, and the rain from heaven was restrained; Genesis 8:3And the waters returned from off the earth continually: and after the end of the hundred and fifty days the waters were abated. Genesis 8:4And the ark seventh month, on the seventeenth day of the month, upon the mountains of Ararat. 8:4-12 The ark rested upon a mountain, where it was directed by the wise and gracious providence of God, that might rest the sooner.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/8.htm",
        "scrapedAt": "2025-12-30T03:19:09.465Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And God remembered Noah, and every living thing, and all the cattle that was with ark: and God made a wind to pass over the earth, and the waters asswaged;Genesis 8:1-221. And God remembered Noah, and every living thing, and all the cattle that was with ark: and God made a wind to pass over the earth, and the waters asswaged; 1. Recordatus Noah, et omnis bestiae, et omnis animalis quae in arca: et transire fecit Deus , et quieverunt aquae. The fountains also of the deep and the windows of heaven were stopped, and the rain from heaven was restrained; 2. Et clauserunt se fontes abyssi, fenestraeque coelo. And the waters returned from off the earth continually: and after the end of the hundred and fifty days the waters were abated. Et reversae sunt aquae a superficie terrae, , et defecerunt dierum. And the ark seventh month, on the seventeenth day of the month, upon the mountains of Ararat. Et requievit arca mense septimo, septimadecima die Ararath. And the waters decreased continually until the tenth month: in the tenth month, on the first day of the month, were the tops of the mountains seen. Et aquae decimum: in decimo, in prima mensis visa sunt cacumina montium. And it came to pass at the end of forty days, that Noah opened the window of the ark which he had made: 6. Et fuit, in fine quadraginta dierum, aperuit Noah fenestram arcae quam fecerat. And he sent forth a raven, which went forth to and fro, until the waters were dried up from off the earth.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/8.htm",
        "scrapedAt": "2025-12-30T03:19:09.467Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And God remembered Noah, and every living thing, and all the cattle that was with ark: and God made a wind to pass over the earth, and the waters asswaged;The waters abate, Genesis 8:1-3. The ark rests on Mount Ararat, Genesis 8:4. The day on which the tops of the mountians were seen, noted, Genesis 8:5. Noah opens the window of the ark, Genesis 8:6; sends forth a raven, Genesis 8:7; after that a dove, Genesis 8:8, which returned, Genesis 8:9. He sends the dove out a second time, Genesis 8:10, which returns with an olive leaf, Genesis 8:11. He sends her out again, and she returns not, Genesis 8:12. The earth dry, Genesis 8:13-14. God commands Noah and his family to come out, Genesis 8:15-17, which they do, Genesis 8:18-19. Noah builds an altar, and sacrifices, Genesis 8:20. God accepts it, and promises not to drown the world again, Genesis 8:21, but to continue the seasons of the year, Genesis 8:22. God remembered Noah, i. e. he showed by his actions that he minded and cared for him, or pitied and succoured him. God is said to remember his people, when after some delays or suspensions of his favour he returns and shows kindness to them, as Genesis 19:29, Genesis 30:22, Exodus 32:13 Job 14:13 Psalm 132:1. As God punished the beasts for man's sin, so now he favours them for man's sake. God made a wind to pass; a drying or burning wind, like that of Exodus 14:21, which had a natural power to dry up the waters; but that was heightened by the assistance of a higher and miraculous operation of God.",
        "source": "https://biblehub.com/commentaries/poole/genesis/8.htm",
        "scrapedAt": "2025-12-30T03:19:09.469Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And God remembered Noah, and every living thing, and all the cattle that was with ark: and God made a wind to pass over the earth, and the waters asswaged; - The Land Was Dried1. שׁכך shākak \"stoop, assuage. \" 3. חסר chāsar \"want, fail, be abated. \" 4. אררט 'ărārāṭ, \"Ararat,\" a land forming part of Armenia. It is mentioned in 2 Kings 19:37, and Isaiah 37:38, as the retreat of Adrammelek and Sharezer after the murder of their father; 51:27 as a kingdom. קלל qālal, \"be light, lightened, lightly esteemed, swift. \" 10. חוּל chûl, \"twist, turn, dance, writhe, tremble, be strong, wait. \" יהל yāchal \"remain, wait, hope. \" 13. חרב chāreb, \"be drained, desolated, amazed. \" Genesis 8:1-3 The waters commence their retreat. \"And God remembered Noah. \" He is said to remember him when he takes any step to deliver him from the waters. The several steps to this end are enumerated. A wind. - This would promote evaporation, and otherwise aid the retreat of the waters. \"The fountains of the deep and the windows of the skies were shut. \" The incessant and violent showers had continued for six weeks. It is probable the weather remained turbid and moist for some time longer. In the sixth month, however, the rain probably ceased altogether. Some time before this, the depressing of the ground had reached its lowest point, and the upheaving had set in. This is the main cause of the reflux of the waters.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/8.htm",
        "scrapedAt": "2025-12-30T03:19:09.470Z"
      }
    ],
    "keyThemes": [
      "God remembers His own",
      "Patient waiting",
      "Worship and sacrifice",
      "Divine promise"
    ],
    "christConnection": "Noah's sacrifice is a pleasing aroma to God, foreshadowing Christ's sacrifice that satisfies divine justice and secures the new covenant."
  },
  {
    "bookId": "genesis",
    "chapter": 9,
    "title": "Genesis 9",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And God blessed Noah and his sons, and said to them, Be fruitful, and multiply, and replenish the earth. 9:1-3 The blessing of God is the cause of our doing well. On him we depend, to him we should be thankful. Let us not forget the advantage and pleasure we have from the labour of beasts, and which their flesh affords. Nor ought we to be less thankful for the security we enjoy from the savage and hurtful beasts, through the fear of man which God has fixed . We see the fulfilment of this promise every day, and on every side. This grant of the animals for food fully warrants the use of them, but not the abuse of them by gluttony, still less by cruelty. We ought not to pain them needlessly whilst they live, nor when we take away their lives. Genesis 9:2And the fear of you and the dread of you shall be upon every beast of the earth, and upon every fowl of the air, upon all that moves upon the earth, and upon all the fishes of the sea; into your hand are they delivered. Genesis 9:3Every moving thing that lives shall be food for you; even as the green herb have I given you all things. Genesis 9:4But flesh with the life of it, which is the blood of it, shall you not eat. 9:4-7 The main reason of forbidding the eating of blood, doubtless was because the shedding of was to keep the of the great atonement; yet it seems intended also to check cruelty, l men, being used to shed and feed upon the blood of animals, should grow unfeeling to them, and be less shocked at the idea of shedding human blood.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/9.htm",
        "scrapedAt": "2025-12-30T03:19:09.471Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And God blessed Noah and his sons, and said to them, Be fruitful, and multiply, and replenish the earth. Genesis 9:1-291. And God blessed Noah and his sons, and said to them, Be fruitful, and multiply, and replenish the earth. Et benedixit Deus Noah, et filiis ejus: et , Crescite, et multiplicamini, et replete terram. And the fear of you and the dread of you shall be upon every beast of the earth, and upon every fowl of the air, upon all that moves upon the earth, and upon all the fishes of the sea; into your hand are they delivered. Et timor vester bestiam terrae, volatile coeli, cum omnibus quae , et omnibus piscibus maris: quia manui vestrae tradita sunt. Every moving thing that lives shall be food for you; even as the green herb have I given you all things. Omne reptile quod vivit, vobis : sicut virentem herbam dedi vobis omnia. But flesh with the life of it, which is the blood of it, shall you not eat. Veruntamen ejus, sanguine ejus, non comedetis. And surely your blood of your lives will I require; at the hand of every beast will I require it, and at the hand of man; at the hand of every man's brother will I require the life of man. Et profecto sanguinem vestrum, qui vobis , requiram: de manu omnis bestiae requiram illum, hominis, viri fratris ejus requiram animam hominis. Whoso shedds man's blood, by man shall his blood be shed: image of God made he man.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/9.htm",
        "scrapedAt": "2025-12-30T03:19:09.474Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And God blessed Noah and his sons, and said to them, Be fruitful, and multiply, and replenish the earth. God renews his blessing, Genesis 9:1, and confirms our dominion over the creatures, Genesis 9:2. Grants flesh for food, but with the blood forbids it, Genesis 9:3-4. The penalty of murder, Genesis 9:5-6. God repeats his blessing, Genesis 9:7. His covenant with Noah and all his creatures, Genesis 9:8-11. Confirms it by the rainbow as his token, Genesis 9:12-17. Noah's three sons, Genesis 9:18-19. His employment, Genesis 9:20. He is drunk and uncovered, Genesis 9:21. Ham sinfully reveals it, Genesis 9:22. His other two sons going backwards, covered him, Genesis 9:23. Noah knows it, Genesis 9:24. Curses Canaan, Genesis 9:25. Blesses Shem first, Genesis 9:26, and then Japhs, Genesis 9:27. His age and death, Genesis 9:28-29. God renewed the old blessing and grant made Genesis 1:28, which might seem to be forfeited and made void by man's sin, and by God's judgment consequent upon it. Genesis 9:2And the fear of you and the dread of you shall be upon every beast of the earth, and upon every fowl of the air, upon all that moves upon the earth, and upon all the fishes of the sea; into your hand are they delivered. Before they loved and reverenced you as lords and friends, now they shall dread you as enemies and tyrants. Into your hand are they delivered, for your use and service. I restore to that dominion over them which you for your sins have forfeited.",
        "source": "https://biblehub.com/commentaries/poole/genesis/9.htm",
        "scrapedAt": "2025-12-30T03:19:09.476Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And God blessed Noah and his sons, and said to them, Be fruitful, and multiply, and replenish the earth. - The Blessing of Noah2. מורא môrā', \"fear, reverence, awful deed. \" חת chat, \"dread, breaking of the courage. \" Noah is saved from the deluge. His life is twice given to him by God. He had found sight of the Lord, and now he and his family have been graciously accepted when they approached the Lord with burnt-offerings. In him, therefore, the race of man is to be begun anew. Accordingly, as at the beginning, the Lord proceeds to bless him. First. The grant of increase is the same as at first, but terms. Second. Dominion over the other animals is renewed. But some reluctance on their part to yield obedience is intimated. \"The fear and dread of you. \" These terms give token of a master whose power is dreaded, rather than of a superior whose friendly protection is sought. \"Into your hand are they given. \" They are placed entirely at the disposal of man. Genesis 9:2And the fear of you and the dread of you shall be upon every beast of the earth, and upon every fowl of the air, upon all that moves upon the earth, and upon all the fishes of the sea; into your hand are they delivered. Genesis 9:3Every moving thing that lives shall be food for you; even as the green herb have I given you all things. The grant of sustenance is no longer confined to the vegetable, but extended to the animal kinds, with two solemn restrictions.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/9.htm",
        "scrapedAt": "2025-12-30T03:19:09.478Z"
      }
    ],
    "keyThemes": [
      "Noahic covenant",
      "Sanctity of life",
      "Common grace",
      "Prophetic blessing and curse"
    ],
    "christConnection": "The rainbow covenant reveals God's patience, giving time for repentance. The blessing of Shem points to the Messiah's lineage."
  },
  {
    "bookId": "genesis",
    "chapter": 10,
    "title": "Genesis 10",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "Now these are the generations of the sons of Noah, Shem, Ham, and Japhs: and to them were sons born after the flood. 10:1-7 This chapter shows concerning the three sons of Noah, that of them was the whole earth overspread. No nation but that of the Jews can be sure from which of these seventy it has come. The lists of names of fathers and sons were preserved of the Jews alone, for the sake of the Messiah. Many learned men, however, have, with some probability, shown which of the nations of the earth descended from each of the sons of Noah To the posterity of Japhs were allotted the isles of the gentiles; probably, the island of Britain among the rest. All places beyond the sea from Judea are called isles, Jer 25:22. That promise, Isa 42:4, The isles shall wait for his law, speaks of the conversion of the gentiles to the faith of Christ. Genesis 10:2The sons of Japhs; Gomer, and Magog, and Madai, and Javan, and Tubal, and Meshech, and Tiras. Genesis 10:3And the sons of Gomer; Ashkenaz, and Riphath, and Togarmah. Genesis 10:4And the sons of Javan; Elishah, and Tarshish, Kittim, and Dodanim. Genesis 10:5By these were the isles of the Gentiles lands; every one after his tongue, after their families, in their nations. Genesis 10:6And the sons of Ham; Cush, and Mizraim, and Phut, and Canaan. Genesis 10:7And the sons of Cush; Seba, and Havilah, and Sabtah, and Raamah, and Sabtecha: and the sons of Raamah; Sheba, and Dedan.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/10.htm",
        "scrapedAt": "2025-12-30T03:19:09.480Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "Now these are the generations of the sons of Noah, Shem, Ham, and Japhs: and to them were sons born after the flood. Genesis 10:1-321. Now these are the generations of the sons of Noah, Shem, Ham, and Japhs: and to them were sons born after the flood. Porro istae sunt generationes filiorum Noah, Sem, Cham, et Jephs: quibus nati sunt . The sons of Japhs; Gomer, and Magog, and Madai, and Javan, and Tubal, and Meshech, and Tiras. Filii Jephs, Gomer, et Magog, et Madai, et Javan, et Thubal, et Mesech, et Thiras. And the sons of Gomer; Ashkenaz, and Riphath, and Togarmah. Et filii Gomer, Ascenas, et Riphath, et Thogarmah. And the sons of Javan; Elishah, and Tarshish, Kittim, and Dodanim. Et filii Javan, Elisah, et Tharsis, Chitthim, Dodanim. By these were the isles of the Gentiles lands; every one after his tongue, after their families, in their nations. Ab istis separatae sunt insulae Gentium secundum terras suas, singulae secundum linguam suam, secundum familias suas, in gentibus suis. And the sons of Ham; Cush, and Mizraim, and Phut, and Canaan. Et filii Cham, Chus, et Misraim, et Phut, et Chenaan. And the sons of Cush; Seba, and Havilah, and Sabtah, and Raamah, and Sabtecha: and the sons of Raamah; Sheba, and Dedan. Et filii Chus, Seba, et Havilah, et Sabthah, et Rahamah, et Sabtecha. , Seba, et Dedan. And Cush fathered Nimrod: he began to be a mighty earth. Et Chus genuit Nimrod: ipse coepit esse : 9.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/10.htm",
        "scrapedAt": "2025-12-30T03:19:12.820Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "Now these are the generations of the sons of Noah, Shem, Ham, and Japhs: and to them were sons born after the flood. Noah's posterity, Genesis 10:1. Sons of Japhs, Genesis 10:2-5. Of Ham, Genesis 10:2-14; among whom Nimrod the first monarch and tyrant; he , &c. , Genesis 10:10. Asshur builds Nineveh, &c. , Genesis 10:11. Sons of Canaan, Genesis 10:15. Their border, Genesis 10:19. Of Shem, Genesis 10:21-31. This chapter, though it may seem to some unprofitable, as consisting almost wholly of genealogies, yet has indeed great and manifold uses. To show the true original of the several nations; about which all other authors write idly, fabulously, and falsely; and thereby to manif the providence of government of the world and church, and the truth and authority of the Holy Scriptures. To discover and distinguish from all other nations that people or God's church was to be, and from which Christ was to come. That Noah's prophecy concerning his three sons might be better understood, and the accomplishment of it made evident. To explain various prophetical predictions and other passages of Scripture, as will sequel. For the better understanding of this chapter, compare with it 1 Chronicles 1:4-24. And consider these three things. In the search of these genealogies we must avoid both carelessness, for the reasons now mentioned, and excessive curiosity about every particular person here named, and the people sprung from him; which is neither necessary nor profitable, nor indeed possible now to find out, by reason of the great changes of names, through length of time, loss of ancient records, differences of languages, extinction of families, conqu and destruction of nations, and other causes.",
        "source": "https://biblehub.com/commentaries/poole/genesis/10.htm",
        "scrapedAt": "2025-12-30T03:19:15.323Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "Now these are the generations of the sons of Noah, Shem, Ham, and Japhs: and to them were sons born after the flood. - Section VIII - The Nations - Japhs 2. גמר gomer, \"Gomer, completion; related: complete;\" Κιμμέριοι Kimmerioi. מגוג māgôg, \"Magog, Caucasian, Skyth. \" מדי māday, \"Madai, middle: Mede. \" יון yāvān, \"Javan\"; Ἰάων Iaōn; \"Sanskrit, Javana; Old Persian, Juna. \" תבל tubāl, \"Tubal\"; Τιβαρηνοὶ Tibareenoi. משׁך meshek, \"Meshek, drawing possession, valor\"; Μόσχοι Moschoi, תירס tı̂yrās, \"Tiras;\" Θρᾷξ Thrax. אשׁכנו 'ashkenaz, \"Ashkenaz,\" Ἀσκάνιος Askanios. ריפת rı̂ypat, \"Riphath,\" ὄρη Ῥίπαια oree Ripaia, תגרמה togarmâh \"Togarmah, Thorgom, ancestor of the Armenians. \" 4. אלישׁה 'elı̂yshâh, \"Elishah;\" Ἧλις Eelis, Ἑλλὰς Hellas, Αἰολεῖς Aioleis. תדשׁישׁ tarshı̂ysh, \"Tarshish, breaking, fastness: Tartessus, Tarsus, Tyrseni. \" כתים kı̂tı̂ym, \"Kittim, smiters; Citienses;\" Κᾶρες Kares; דדנים dodānı̂ym, \"Dodanim, Dodona, Dardani. \" 5. אי 'ı̂y, \"meadow, land reached by water, island; related: be marked off or bounded (by a water line). \" גוי gôy, \"nation; related: be born;\" γεγάασι gegaasi. The fifth document relates to the generations of the sons of Noah. It presents first a genealogy of the nations, and then an account of the distribution of mankind into nations, and their dispersion over the earth. This is the last section which treats historically of the whole human race. , didactic, or prophetic passages do we again meet with mankind as a Old Testament. The present chapter signalizes a new development of the human race. They pass from the one family to the seventy nations. This great process covers the space of time from Noah to Abraham.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/10.htm",
        "scrapedAt": "2025-12-30T03:19:17.846Z"
      }
    ],
    "keyThemes": [
      "Unity of humanity",
      "Diversity of nations",
      "Divine providence over history",
      "Preparation for Abraham"
    ],
    "christConnection": "All nations descend from one man, and all nations will be blessed through Abraham's Seed—Christ, in whom there is neither Jew nor Gentile."
  },
  {
    "bookId": "genesis",
    "chapter": 11,
    "title": "Genesis 11",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And the whole earth was of one language, and of one speech. 11:1-4 How soon men forget the most tremendous judgments, and go back to their former crimes! Though the desolations of the deluge were before their eyes, though they sprang from the stock of righteous Noah, yet even during his life-time, wickedness increases exceedingly. Nothing but the sanctifying grace of the Holy Spirit can remove the sinful lusts of the human will, and the depravity of the human heart. God's purpose was, that mankind should form many nations, and people all lands. In contempt of the Divine will, and against the counsel of Noah, the bulk of mankind united to build a city and a tower to prevent their separating. Idolatry was begun, and Babel became one of its chief seats. They made one another more daring and resolute. Let us learn to provoke one another to love and to good works, as sinners stir up and encourage one another to wicked works. Genesis 11:2And it came to pass, as they journeyed from the east, that they found a land of Shinar; and they dwelt there. Genesis 11:3And they said one to another, Go to, let us make brick, and burn them throughly. And they had brick for stone, and slime had they for morter. Genesis 11:4And they said, Go to, let us build us a city and a tower, whose top may reach to heaven; and let us make us a name, l we be scattered abroad upon the face of the whole earth.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/11.htm",
        "scrapedAt": "2025-12-30T03:19:20.330Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And the whole earth was of one language, and of one speech. Genesis 11:1-321. And the whole earth was of one language, and of one speech. terra labii unius, et verborum eorundem. And it came to pass, as they journeyed from the east, that they found a land of Shinar; and they dwelt there. Et fuit, quum proficiscerentur ipsi ab Oriente, invenerunt Sinhar, et habitaverunt ibi. And they said one to another, Go to, let us make brick, and burn them throughly. And they had brick for stone, and slime had they for morter. Et dixerunt suum, Agite, laterificemus lateres, et : et fuit eis , et bitumen fuit . And they said, Go to, let us build us a city and a tower, whose top may reach to heaven; and let us make us a name, l we be scattered abroad upon the face of the whole earth. Et dixerunt, Agite, aedificemus nobis , cujus caput pertingat , et faciamus nobis nomen, ne forte universae terrae. And the LORD came down to see the city and the tower, which the children of men builded. Et descendit Jehova ut videret , quam aedificabant filii hominum. And the LORD said, Look, the people is one, and they have all one language; and this they begin to do: and now nothing will be restrained from them, which they have imagined to do. Et dixit Jehova, En, populus unus, et labium unum est omnibus ipsis: et hoc est incipere eorum ut faciant, et nunc non prohibebitur ab eis quod cogitaverunt ut facerent.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/11.htm",
        "scrapedAt": "2025-12-30T03:19:22.839Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And the whole earth was of one language, and of one speech. One earth, Genesis 11:1. They journey from the east, land of Shinar, Genesis 11:2; make bricks, which they burn and use with slime, Genesis 11:3; build a city and tower that they might not be scattered, Genesis 11:4. God sees it, Genesis 11:5. Disapproves their design, Genesis 11:6; defeats it, and scatters them by confounding their language, Genesis 11:7,8; for which reason the place called Babel, Genesis 11:9. The posterity of Shem to Abram, Genesis 11:10-26. Abram takes Sarai to wife, Genesis 11:29. She is barren, Genesis 11:30. He removes from Ur to Haran, Genesis 11:31, where his father dies, Genesis 11:32. Earth is oft put for its inhabitants, as Genesis 6:21 1 Chronicles 16:23 Psalm 33:8. Of one speech, which even heathen writers acknowledge; and that probably was the Hebrew tongue. Genesis 11:2And it came to pass, as they journeyed from the east, that they found a land of Shinar; and they dwelt there. As they journeyed from the east, i. e. Nimrod and the rest of his confederates of Ham's posterity; not from Armenia, where the ark rested, which was north from Babel, and is called , as Jeremiah 25:9,26, &c. ; but from Assyria, into which they had before come from the mountains of Ararat for more convenient habitation. It may be rendered to the east; but that manner of translation is neither usual nor necessary here. The land of Shinar, where Babel was, Genesis 10:10.",
        "source": "https://biblehub.com/commentaries/poole/genesis/11.htm",
        "scrapedAt": "2025-12-30T03:19:25.329Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And the whole earth was of one language, and of one speech. - The Confusion of Tongues1. נסע nāsa‛ \"pluck out, break up, journey. \" מקדם mı̂qedem \"eastward, or on the east side\" 2:14; Genesis 13:11; Isaiah 9:11 (12). החלם hachı̂lām \"their beginning\", for החלם hăchı̂lām, the regular form of this infinitive with a suffix. יזמוּ yāzmû as if from יזם yāzam equals זמם zāmam. נבלה nābelâh usually said to be for נבלה nābolâh from בלל bālal; but evidently designed by the punctuator to be the third singular feminine perfect of נבל nābal \"to be confounded,\" having for its subject שׂפה śāpâh, \"and there let their lip be confounded. \" The two verbs have the same root. בבל bābel Babel, \"confusion,\" derived from בל bl the common root of בלל bālal and נבל nābel, by doubling the first radical. Having completed the table of nations, the sacred writer, according to his wont, goes back to record an event of great moment, both for the explanation of this table and for the future history of the human race. The point to which he reverts is the birth of Peleg. The present singular passage explains the nature of that unprecedented change by which mankind passed from one family with a mutually intelligible speech, into many nations of diverse tongues and lands. Genesis 11:1 The previous state of human language is here briefly described. \"The whole land\" evidently means the whole then known world with all its human inhabitants. The universality of application is clearly and constantly maintained throughout the whole passage.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/11.htm",
        "scrapedAt": "2025-12-30T03:19:27.881Z"
      }
    ],
    "keyThemes": [
      "Human pride",
      "Divine judgment",
      "Scattered nations",
      "Narrowing focus to one family"
    ],
    "christConnection": "Babel's curse is reversed at Pentecost when the Spirit enables people of all languages to hear the gospel. Christ unites what Babel divided."
  },
  {
    "bookId": "genesis",
    "chapter": 12,
    "title": "Genesis 12",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "Now the LORD had said to Abram, Get you out of your country, and from your kindred, and from your father's house, to a land that I will shew you:12:1-3 God made choice of Abram, and singled him out from among his fellow-idolaters, that he might reserve a people for himself, among whom his true worship might be maintained till the coming of Christ. From henceforward Abram and his seed are almost the only subject of the Bible. Abram was tried whether he loved God better than all, and whether he could willingly leave all to go with God. His kindred and his father's house were a constant temptation to him, he could not continue among them without danger of being infected by them. Those who leave their sins, and turn to God, will be unspeakable gainers by the change. The command God gave to Abram, is much the same with the gospel call, for natural affection must give way to Divine grace. Sin, and all the occasions of it, must be forsaken; particularly bad company. Here are many great and precious promises. All God's precepts are attended with promises to the obedient. I will make of you a great nation. When God took Abram from his own people, he promised to make him the head of another people. I will bless you. Obedient believers shall be sure to inherit the blessing. I will make your name great. The name of obedient believers shall certainly be made great. You shall be a blessing.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/12.htm",
        "scrapedAt": "2025-12-30T03:19:30.354Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "Now the LORD had said to Abram, Get you out of your country, and from your kindred, and from your father's house, to a land that I will shew you:Genesis 12:1-201. Now the LORD had said to Abram, Get you out of your country, and from your kindred, and from your father's house, to a land that I will shew you: 1. ad Abram, Abi e terra tua, et e cognatione tua, et e domo patris tui, ad terram quam ostendam tibi. And I will make of you a great nation, and I will bless you, and make your name great; and you shall be a blessing: 2. Et faciam magnam, et benedicam tibi, et magnificabo nomen tuum, et eris benedictio. And I will bless them that bless you, and curse him that curses you: shall all families of the earth be blessed. Et benedicam benedicentibus tibi: et maledicentibus tibi maledicam: et omnes familae terrae. So Abram departed, as the LORD had spoken to him; and Lot went with him: and Abram was seventy and five years old when he departed out of Haran. Abiit ergo Abram quemadmodum loquutus Jehova: et Lot: filius quinque annorum, quando egressus 5. And Abram took Sarai his wife, and Lot his brother's son, and all their substance that they had gathered, and the souls that they had ; and they went forth to go into the land of Canaan; and into the land of Canaan they came. Et cepit Abram Sarai uxorem suam, et Lot filium fratris sui, et omnem substantiam quam acquisierant, et animas quas , et egressi sunt ut Chenaan, et Chenaan.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/12.htm",
        "scrapedAt": "2025-12-30T03:19:32.943Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "Now the LORD had said to Abram, Get you out of your country, and from your kindred, and from your father's house, to a land that I will shew you:God calls Abram from his own country and kindred to Canaan, Genesis 12:1. Promises to make of him a great and flourishing nation, and to his seed, Genesis 12:2,3. Abram obeys, Genesis 12:4-6. God appears to him, and promises to give Canaan to his seed; he builds an altar, Genesis 12:7. He removes to Beth-el, and there builds an altar, Genesis 12:8. There being a famine he goes down to Egypt, Genesis 12:10. He advises Sarai to equivocate, Genesis 12:11-13. She is taken into Pharaoh's house, Genesis 12:15. Pharaoh kind to Abram for her sake, Genesis 12:16. God plagues him because of Sarai, Genesis 12:17. He calls Abram, and expostulates with him, Genesis 12:18,19. Sends him safely away, Genesis 12:20. The Lord had said, to wit, in Ur of the Chaldees, by comparing Genesis 11:31, with Acts 7:2-4; or, did say, again, i. e. renewed the , whilst Abram might possibly linger there, as afterwards Lot , longer than he should. But the former interpretation is more probable, because Moses speaks here of that command of God which came to Abram before he was gone from his kindred and father's house, and therefore before he came to Haran. And this command was given to Abram either immediately, or by Shem, then the governor of God's church. From your father's house; from the family of Nachor, which was now become idolatrous, Genesis 31:30 Joshua 24:2; and consequently their society was dangerous and pernicious; and therefore God mercifully snatches him as a brand out of the fire.",
        "source": "https://biblehub.com/commentaries/poole/genesis/12.htm",
        "scrapedAt": "2025-12-30T03:19:35.478Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "Now the LORD had said to Abram, Get you out of your country, and from your kindred, and from your father's house, to a land that I will shew you: - The Call of Abram6. שׁכם shekem Shekem, \"the upper part of the back. \" Here it is the name of a person, the owner of this place, where afterward is built the town called at first Shekem, then Flavia Neapolis, and now Nablous. אלון 'ēlook̂n \"the oak;\" related: \"be lasting, strong. \" מורה mô \"plain;\" Moreh, \"archer, early rain, teacher. \" Here the name of a man who owned the oak that marked the spot. In the Septuagint it is rendered ὑψηγήν hupseegeen. בית־אל bēyt-'êl, Bethel, \"house of God. \" ים yam \"sea, great river, west. \" עי ‛ay, 'Ai, \"heap. \" 9. נגב negeb \"south. \" The narrative now takes leave of the rest of the Shemites, as well as the other branches of the human family, and confines itself to Abram. It is no part of the design of Scripture to trace the development of worldliness. It marks its source, and indicates the law of its downward tendency; but then it turns away from the dark detail, to devote its attention to the way by which light from heaven may again pierce the gloom of the fallen heart. Here, then, we have the starting of a new spring of spiritual human race. Genesis 12:1-3 Having brought the affairs of Terah's family to a fit resting point, the sacred writer now reverts to the call of Abram.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/12.htm",
        "scrapedAt": "2025-12-30T03:19:37.982Z"
      }
    ],
    "keyThemes": [
      "Divine call and promise",
      "Faith and obedience",
      "Blessing to all nations",
      "Human weakness, divine faithfulness"
    ],
    "christConnection": "The promise that \"all families of the earth shall be blessed\" finds its fulfillment in Christ, Abraham's ultimate Seed (Gal 3:16)."
  },
  {
    "bookId": "genesis",
    "chapter": 13,
    "title": "Genesis 13",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And Abram went up out of Egypt, he, and his wife, and all that he had, and Lot with him, into the south. 13:1-4 Abram was very rich: he was very heavy, so the Hebrew word is; for riches are a burden; and they that will be rich, do but load themselves with thick clay, Hab 2:6. There is a burden of riches, them, them, them, them, and a burden of account at last to be given up about them. Yet providence sometimes makes good men rich men, and thus God's blessing made Abram rich without sorrow, Pr 10:22. Though it is hard for a rich man to get to heaven, cases it may be, Mr 10:23,24. No, outward prosperity, if well managed, is an ornament to piety, and an opportunity for doing more good. Abram removed to Beth-el. His altar was gone, so that he could not offer sacrifice; but he called on the name of the Lord. You may as soon find a living man without breath as one of God's people without prayer. Genesis 13:2And Abram was very , in silver, . Genesis 13:3And he went on his journeys from the south even to Bethel, to the place where his tent had been at the beginning, between Bethel and Hai; Genesis 13:4Unto the place of the altar, which he had made there at the first: and there Abram called on the name of the LORD. Genesis 13:5And Lot also, which went with Abram, had flocks, and herds, and tents.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/13.htm",
        "scrapedAt": "2025-12-30T03:19:40.480Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And Abram went up out of Egypt, he, and his wife, and all that he had, and Lot with him, into the south. Genesis 13:1-201. And Abram went up out of Egypt, he, and his wife, and all that he had, and Lot with him, into the south. Et ascendit Abram ex Aegypto, ejus, et omnia quae erant ei, et ad Meridiem. And Abram was very , in silver, . Et Abram pecore, . And he went on his journeys from the south even to Bethel, to the place where his tent had been at the beginning, between Bethel and Hai; 3. Et suas a Meridie , ubi fuerat tabernaculum , inter ; 4. To the place of the altar, which he had made there at the first: and there Abram called on the name of the LORD. Ad locum altaris quod : et invocavit ibi Abram nomen Jehovae. And Lot also, which went with Abram, had flocks, and herds, and tents. Et etiam ipsi Lot erant pecudes, et boves, et tabernacula. And the land was not able to bear them, that they might dwell together: for their substance was great, so that they could not dwell together. Et non ferebat eos terra, ut habitarent pariter: eorum multa, et non poterant habitare pariter. And there was a strife between the herdmen of Abram's cattle and the herdmen of Lot's cattle: and the Canaanite and the Perizzite dwelled land. Et fuit pecudum Abram, et pastores pecudum Lot: et tunc . And Abram said to Lot, Let there be no strife, I pray you, between me and you, and between my herdmen and your herdmen; for we be brothers.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/13.htm",
        "scrapedAt": "2025-12-30T03:19:42.963Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And Abram went up out of Egypt, he, and his wife, and all that he had, and Lot with him, into the south. Abram returns from Egypt to Canaan with Lot, Genesis 13:1. He comes to Beth-el; calls on the Lord, Genesis 13:3,4. Abram and Lot being both very rich are obliged to part. Lot goes to Sodom, Genesis 13:5-12. The men of Sodom exceeding wicked, Genesis 13:13. God renews his promise to Abram concerning Canaan and a numerous issue, Genesis 13:14-17. Abram removes to Mamre, and there builds an altar, Genesis 13:18. 1918 i. e. Into the southern part of Canaan, from from where he came, Genesis 12:9, and is called simply the south, Joshua 10:40 11:16. Otherwise he went rather into the north: but the Scripture being written for the Jews, does frequently accommodate the names of the quarters of the world to them. Genesis 13:2And Abram was very , in silver, . No text from Poole on this verse. Genesis 13:3And he went on his journeys from the south even to Bethel, to the place where his tent had been at the beginning, between Bethel and Hai; He went on his journey, or rather, according to his journeys, which he took as he came, same road, and same place, of which he had experience. Genesis 13:4Unto the place of the altar, which he had made there at the first: and there Abram called on the name of the LORD. To the place of the altar, i. e. where the altar was; for the altar itself was either fallen down, as being probably built of earth, as afterwards, Exodus 20:24, or overthrown by the wicked Canaanites.",
        "source": "https://biblehub.com/commentaries/poole/genesis/13.htm",
        "scrapedAt": "2025-12-30T03:19:45.490Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And Abram went up out of Egypt, he, and his wife, and all that he had, and Lot with him, into the south. - Abram and Lot Separate7. פרזי perı̂zı̂y, Perizzi, \"descendant of Paraz. \" פרז pārāz, \"leader,\" or inhabitant of the plain or open country. ככר kı̂kar, \"circle, border, vale, cake, talent;\" related: \"bow, bend, go round, dance. \" ירדן yardēn, Jardan, \"descending. \" Usually with the . צער tso‛ar, Tso'ar, \"smallness. \" 18. ממרא mamrē', Mamre, \"fat, strong, ruler. \" חברון chebrôn, Chebron, \"conjunction, confederacy. \" Lot has been hitherto with Abram by the ties of kinmanship. But it becomes gradually manif that he has an independent interest, and is no longer disposed to follow the fortunes of the chosen of God. In the natural course of things, this under-feeling comes to the surface. Their serfs come into collision; and as Abram makes no claim of authority over Lot, he offers him the choice of a dwelling- land. This peaceable separation, in which Abram appears to great advantage. The chosen of the Lord is course of providence isolated from all associations of kindred. He stands alone, in a strange land. He again obeys the summons to survey the land promised to him and his . Genesis 13:1-4 Went up out of Mizraim. - Egypt is a low-lying valley, out of which the traveler ascends into Arabia Petraea and the hill-country of Kenaan. Abram returns, a wiser and a better man. When called to leave his native land, he had immediately obeyed.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/13.htm",
        "scrapedAt": "2025-12-30T03:19:48.096Z"
      }
    ],
    "keyThemes": [
      "Generosity over greed",
      "Faith versus sight",
      "Covenant reaffirmation",
      "Dangers of worldliness"
    ],
    "christConnection": "Abram's willingness to take the lesser portion reflects Christ's self-emptying. Lot's choice toward Sodom warns against worldly allurements."
  },
  {
    "bookId": "genesis",
    "chapter": 14,
    "title": "Genesis 14",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And it came to days of Amraphel king of Shinar, Arioch king of Ellasar, Chedorlaomer king of Elam, and Tidal king of nations;14:1-12 The wars of nations make great , but we should not have had the record of this war if Abram and Lot had not been concerned. Out of covetousness, Lot had , but wicked Sodom. Its inhabitants were the most ripe for vengeance of all the descendants of Canaan. The invaders were from Chaldea and Persia, then only small kingdoms. They took Lot among the rest, and his goods. Though he was righteous, and Abram's brother's son, yet he was with the trouble. Neither our own piety, nor our relation to the favourites of Heaven, will be our security when God's judgments are abroad. Many an honest man fares the worse for his wicked neighbours: it is our wisdom to separate, or at least to distinguish ourselves from them, 2Co 6:17. So near a relation of Abram should have been a companion and a disciple of Abram. If he chose to , he must thank himself if he 's losses. When we go out of the way of our duty, we put ourselves from under God's protection, and cannot expect that the choice made by our lusts, should end to our comfort. They took Lot's goods; it is just with God to deprive us of enjoyments, by which we suffer ourselves to be deprived of the enjoyment of him. Genesis 14:2That these made war with Bera king of Sodom, and with Birsha king of Gomorrah, Shinab king of Admah, and Shemeber king of Zeboiim, and the king of Bela, which is Zoar.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/14.htm",
        "scrapedAt": "2025-12-30T03:19:50.588Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And it came to days of Amraphel king of Shinar, Arioch king of Ellasar, Chedorlaomer king of Elam, and Tidal king of nations;Genesis 14:1-241. And it came to days of Amraphel king of Shinar, Arioch king of Ellasar, Chedorlaomer king of Elam, and Tidal king of nations; 1. Et Amraphel regis Sinhar, Arioch rex Elasar, Cedorlaomer rex Helam, et Thidhal rex gentium, 2. That these made war with Bera king of Sodom, and with Birsha king of Gomorrah, Shinab king of Admah, and Shemeber king of Zeboiim, and the king of Bela, which is Zoar. Fecerunt rege Sedom, et Birsah rege Hamorah, Sinab rege Admah, et Semeber rege Seboim, et rege Belah: ipsa est Sohar. All these were joined vale of Siddim, which is the salt sea. Omnes isti conjuncti Siddim: ipsa est vallis Maris salis. Twelve years they served Chedorlaomer, thirteenth year they rebelled. Duodecim annos servierant Cedorlaomer, et decimotertio anno defecerant. fourteenth year came Chedorlaomer, and the kings that were with him, and smote the Karnaim, and the , and the Kiriathaim, 5. venit Cedorlaomer, et reges qui , et percusserunt Carnaim, et , et Ciriathaim, 6. And the mount Seir, to Elparan, which is by the wilderness. Et suo Sehir, Pharan, quae est juxta desertum. And they returned, and came to Enmishpat, which is Kadesh, and smote all the country of the Amalekites, and also the Amorites, that . Reversi sunt autem, et -- misphat, ipsa est Cades: et percusserunt omnem agrum Amalecitae, et etiam Emoraeum -- thamar.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/14.htm",
        "scrapedAt": "2025-12-30T03:19:53.141Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And it came to days of Amraphel king of Shinar, Arioch king of Ellasar, Chedorlaomer king of Elam, and Tidal king of nations;Several kings wage war against the king of Sodom, &c. ; Lot is taken prisoner, Genesis 14:1-12. Abram rescues him, Genesis 14:13-16. The king of Sodom congratulates him his victory, Genesis 14:17. Melchizedek king of Salem blesses him; to him Abram gives tithes, Genesis 14:18-20. The king of Sodom offers to give Abram the goods , Genesis 14:21; which Abram refuses to accept, Genesis 14:22-24. i. e. Of a people which came to him out of several nations, (being allured possibly by his fame, or by promises and privileges granted to them), and put themselves under his government. Or Goiim is the name of a certain place or country, so called from the confluence of various people or nations there, as Tyrus is called the mart of nations, Isaiah 23:3, upon the same account. Genesis 14:2That these made war with Bera king of Sodom, and with Birsha king of Gomorrah, Shinab king of Admah, and Shemeber king of Zeboiim, and the king of Bela, which is Zoar. Once for all, observe that the name of kings is here and elsewhere given by Moses to the chief governors of cities or little provinces. Compare Joshua 12:9, &c. Genesis 14:3All these were joined vale of Siddim, which is the salt sea. Which now is, though when this battle was fought it was not so. Genesis 14:4Twelve years they served Chedorlaomer, thirteenth year they rebelled.",
        "source": "https://biblehub.com/commentaries/poole/genesis/14.htm",
        "scrapedAt": "2025-12-30T03:19:55.689Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And it came to days of Amraphel king of Shinar, Arioch king of Ellasar, Chedorlaomer king of Elam, and Tidal king of nations;The raid is minutely 14:1-12. The dominant confederacy consists of four kings. Many generations back the first world power, consisting of four cities, was established by land of Shinar Genesis 10:8-10. This has now given way to a world-confederacy, consisting of four kings. From the vicinity of the they reigned it is evident that they were petty princes of domains varying from a town and its suburbs to a comparatively extensive territory. The first, Amraphel, is king of Shinar. He is therefore the successor of Nimrod, and the sovereign of the most ancient kingdoms, and on these grounds occupies the first list. But this kingdom is no longer the sole or even the supreme power. Amraphel is probably the descendant of Nimrod, and a Kushite. The second, Ariok, is king of Ellasar. If this town be the same as Larsa, lying between the Frat and the Shat el-Hie, the land of Shinar has been divided between two sovereigns, and no longer belongs entirely to the successor of Nimrod. Lower Shinar includes also Ur of the Kasdim; and hence, Ariok probably represents that race. The third, Kedorlaomer, is king of Elam, or Elymais, a country east of the lower Tigris, and separated by it from Shinar. He is probably a Shemite, as the country over which he ruled received its name from a son of Shem Genesis 10:22. He is the lord paramount of the others, and commander-in-chief of the united forces.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/14.htm",
        "scrapedAt": "2025-12-30T03:19:58.234Z"
      }
    ],
    "keyThemes": [
      "Covenant loyalty",
      "Victory through God",
      "Priest-king Melchizedek",
      "Refusing worldly reward"
    ],
    "christConnection": "Melchizedek is a type of Christ—king of righteousness and peace, priest of the Most High, whose priesthood is eternal (Heb 7)."
  },
  {
    "bookId": "genesis",
    "chapter": 15,
    "title": "Genesis 15",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "After these things the word of the LORD came to vision, saying, Fear not, Abram: I am your shield, and your exceeding great reward. 15:1 God assured Abram of safety and happiness; that he should for ever be safe. I am your shield; or, I am a shield to you, present with you, actually caring for you. The consideration that God himself is, and will be a shield to his people, to secure them from all evils, a shield ready to them, and a shield round about them, should silence all perplexing, tormenting fears. Genesis 15:2And Abram said, Lord GOD, what will you give me, seeing I go childless, and the steward of my house is this Eliezer of Damascus? 15:2-6 Though we must never complain of God, yet we have leave to complain to him; and to state all our grievances. It is ease to a burdened spirit, to open its case to a faithful and compassionate friend. Abram's complaint is, that he had no child; that he was never likely to have any; that the want of a son was so great a trouble to him, that it took away all his comfort. If we suppose that Abram looked no further than outward comfort, this complaint was to be blamed. But if we suppose that Abram in this had reference to the promised Seed, his desire was very commendable. Till we have evidence of our , we should not rest satisfied; what will all avail me, if I go Christless?",
        "source": "https://biblehub.com/commentaries/mhc/genesis/15.htm",
        "scrapedAt": "2025-12-30T03:20:00.729Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "After these things the word of the LORD came to vision, saying, Fear not, Abram: I am your shield, and your exceeding great reward. Genesis 15:1-211. After these things the word of the LORD came to vision, saying, Fear not, Abram: I am your shield, and your exceeding great reward. Post haec fuit verbum in visione, dicendo, Ne timeas Abram, ego scutum ero tibi, merces tua multa valde. And Abram said, Lord GOD, what will you give me, seeing I go childless, and the steward of my house is this Eliezer of Damascus? 2. Et dixit Abram, Dominator Jehova, quid dabis mihi? Et ego incedo orbus, et filius derelictionis domus meae erit iste Dammescenus Elihezer. And Abram said, Look, to me you hast given no seed: and, look, one house is mine heir. Et dixit Abram, Ecce, mihi non dedisti semen: et ecce, filius domus meae haeres meus est. And, look, the word of the LORD came to him, saying, This shall not be yours heir; but he that shall come forth out of yours own bowels shall be yours heir. Et ecce verbum , dicendo, Non erit haeres tuus iste, sed qui tuis, ipse haeres tuus erit. And he brought him forth abroad, and said, Look now toward heaven, and tell the stars, if you be able to number them: and he said to him, So shall your seed be. Et eduxit eum foras, et dixit, Suspice nunc coelum, et numera stellas, si poteris numerare eas. Et dixit ei, Sic erit semen tuum.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/15.htm",
        "scrapedAt": "2025-12-30T03:20:03.321Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "After these things the word of the LORD came to vision, saying, Fear not, Abram: I am your shield, and your exceeding great reward. A comfortable promise to Abram, Genesis 15:1. His prayer for an heir, Genesis 15:2,3. The promise of an answer to his prayer, Genesis 15:4,5. Abram's faith, Genesis 15:6. He desires a sign, Genesis 15:7,8. God gives him one, Genesis 15:9. He observes it, Genesis 15:10,11. God appears to him deep sleep, Genesis 15:12. A prediction of evil to befall his posterity, Genesis 15:13. Their deliverance, Genesis 15:14-16. The covenant concerning Canaan renewed, Genesis 15:17-21. God anciently revealed himself to men two ways; either, 1. When the man was asleep, in a dream; or, 2. In a vision, Numbers 12:6, when he was awake: and this either, 1. When he was rapt into an ecstasy, in which his senses are idle, but his mind is active and elevated to the contemplation and understanding of what God reveals. See Numbers 12:6-8 24:4 Isaiah 1:1 Acts 10:10,11. Or, 2. When the thing was manifested by an external representation. So here, God seems to have appeared to shape of a man, as he did Genesis 18:1-33, as may be gathered from Genesis 15:5,10. Fear not, Abram; neither the return of those enemies whom you hast smitten and provoked, nor the envy of your neighbours for this glorious victory, nor for your own desolate condition. Seeing you didst trust to my protection, I will be a shield or a protector to you; and seeing you didst so honourably and for my sake reject other rewards, taken by yourself, and offered by the king of Sodom, you shall be no loser by it; I will abundantly recompense all your piety to me, and charity to your afflicted kinsman Lot, and your liberality towards others: I will bless you with all sorts of good things, as well as defend you from all evil; which two things make a man completely happy.",
        "source": "https://biblehub.com/commentaries/poole/genesis/15.htm",
        "scrapedAt": "2025-12-30T03:20:05.926Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "After these things the word of the LORD came to vision, saying, Fear not, Abram: I am your shield, and your exceeding great reward. After these things, - - the victory, the blessing, and the self-denial previous chapter. \"The word of the Lord,\" manifesting himself by speech to his servant. \"In the vision\" the intelligent observer passes from the merely sensible to the supersensible sphere of reality. \"Fear not, Abram. \" The patriarch had some reason to fear. The formidable allies had indeed been defeated, and the fruits of their marauding enterprise wrested from them. But they might resume their purpose, and return with an overwhelming force. And Abram was still a foreign land, preoccupied by tribes of another race, who would combine against him as soon as they suspected him of being an intruder. But the Lord had stood by him and given him the victory, and now speaks to language of encouragement. \"I am your shield, your exceeding great reward. \" The word I is separately expressed, and, therefore, original. I, Jehovah (Yahweh), the Self-existent One, the Author of existence, the Performer of promise, the Manifester of myself to man, and not any creature however exalted. This was something beyond a seed, or a land, or any temporal thing. The Creator infinitely transcends the creature. The mind of Abram is here lifted up to the spiritual and the eternal. (1) your shield. (2) your exceeding great reward. Abram has two fears - the presence of evil, and the absence of good.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/15.htm",
        "scrapedAt": "2025-12-30T03:20:08.484Z"
      }
    ],
    "keyThemes": [
      "Justification by faith",
      "Covenant ceremony",
      "Divine oath",
      "Prophetic preview of history"
    ],
    "christConnection": "Abram's faith credited as righteousness is the foundation of Paul's gospel in Romans 4. God alone passes through the pieces, guaranteeing the covenant."
  },
  {
    "bookId": "genesis",
    "chapter": 16,
    "title": "Genesis 16",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "Now Sarai Abram's wife bare him no children: and she had an handmaid, an Egyptian, whose name was Hagar. 16:1-3 Sarai, no longer expecting to have children herself, proposed to Abram to take another wife, whose children she might; her slave, whose children would be her property. This was done without asking counsel of the Lord. Unbelief worked, God's almighty power was forgotten. It was a bad example, and a source of manifold uneasiness. In every relation and there is some cross for us to bear: much of the exercise of faith submitting, in waiting the Lord's time, and using only those means which he appoints for the removal of the cross. Foul temptations may have very fair pretences, and be coloured with that which is very plausible. Fleshly wisdom puts us out of God's way. This would not be the case, if we would ask counsel of God by his word and by prayer, before we attempt that which is doubtful. Genesis 16:2And Sarai said to Abram, Look now, the LORD has restrained me from bearing: I pray you, my maid; it may be that I may obtain children by her. And Abram hearkened to the voice of Sarai. Genesis 16:3And Sarai Abram's wife took Hagar her maid the Egyptian, after Abram had dwelt ten land of Canaan, and gave her to her husband Abram to be his wife. Genesis 16:4And he Hagar, and she conceived: and when she saw that she had conceived, her mistress was eyes. 16:4-6 Abram's unhappy marriage to Hagar very soon made a great deal of mischief.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/16.htm",
        "scrapedAt": "2025-12-30T03:20:11.153Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "Now Sarai Abram's wife bare him no children: and she had an handmaid, an Egyptian, whose name was Hagar. Genesis 16:1-161. Now Sarai Abram's wife bare him no children: and she had an handmaid, an Egyptian, whose name was Hagar. Porro Sarai uxor Abram non pepererat ei: ancilla Aegyptia, et nomen ejus Hagar. And Sarai said to Abram, Look now, the LORD has restrained me from bearing: I pray you, my maid; it may be that I may obtain children by her. And Abram hearkened to the voice of Sarai. Et dixit , Ecce, nunc conclusit me Jehova, ne parerem: ingredere meam, si forte aedificer ex ea: et paruit Abram voci Sarai. And Sarai Abram's wife took Hagar her maid the Egyptian, after Abram had dwelt ten land of Canaan, and gave her to her husband Abram to be his wife. Et tulit Sarai uxor Abram, Hagar Aegyptiam ancillam decem annorum, quibus habitavit Chenaan, et dedit eam Abram viro . And he Hagar, and she conceived: and when she saw that she had conceived, her mistress was eyes. Et ingressus , et concepit: et videns quod concepisset, despectui habuit dominam suis. And Sarai said to Abram, My wrong be upon you: I have given my maid into your bosom; and when she saw that she had conceived, I was eyes: the LORD judge between me and you. Tunc dixit , Injuria : ego dedi ancillam tuo, et ubi vidit quod concepisset, despectui ejus: judicet et to. But Abram said to Sarai, Look, your maid hand; do to her as it pleases you.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/16.htm",
        "scrapedAt": "2025-12-30T03:20:13.810Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "Now Sarai Abram's wife bare him no children: and she had an handmaid, an Egyptian, whose name was Hagar. Sarai is barren, Genesis 16:1. She gives Hagar, her servant, to Abram to be his wife, Genesis 16:2,3. Hagar conceives and despises her mistress, Genesis 16:4. Sarai complains of it, Genesis 16:5. Abram leaves her to Sarai's disposal, who deals hardly with her: Hagar runs from her, Genesis 16:6. The angel of the Lord meets her, commands her to return and submit, Genesis 16:7-9. Promising her a numerous seed, Genesis 16:10; names the child, Genesis 16:11; foretells his disposition, Genesis 16:12. God's looking on affliction comforts her, Genesis 16:13,14. Her son born, and named, Genesis 16:15. Abram's age, Genesis 16:16. No text from Poole on this verse. Genesis 16:2And Sarai said to Abram, Look now, the LORD has restrained me from bearing: I pray you, my maid; it may be that I may obtain children by her. And Abram hearkened to the voice of Sarai. She reckons the children of her bond-woman would be accounted her children. See Genesis 30:3 Exodus 21:4 2 Samuel 21:8 Esther 2:7. Abram hearkened to the voice of Sarai; supposing that God would accomplish his promise of a seed to come out of his loins by this way; and knowing that Sarai was not yet promise, as the person by whom he should have that seed; and not consulting with God, which he should have done. Genesis 16:3And Sarai Abram's wife took Hagar her maid the Egyptian, after Abram had dwelt ten land of Canaan, and gave her to her husband Abram to be his wife.",
        "source": "https://biblehub.com/commentaries/poole/genesis/16.htm",
        "scrapedAt": "2025-12-30T03:20:16.371Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "Now Sarai Abram's wife bare him no children: and she had an handmaid, an Egyptian, whose name was Hagar. A Mizrite handmaid. - Hagar was probably obtained, ten years before, during their . \"The Lord has restrained me. \" It was natural to the ancient mind to recognize the power and will of things. \"I shall be builded by her,\" אבנה 'ı̂bāneh, built as the foundation of a house, by the addition of sons or daughters (בנים bānı̂ym or בנית bānôt). She thought she had or wished to have a promise, if not by herself personally, yet through her maid. The faith of Sarah had not yet come fully to the birth. Abram yields to the suggestion of his wife, and complies with the custom of the country. Ten years had elapsed since they had entered the land they were to inherit. Impatience at the long delay leads to an invention of their own for obtaining an heir. The contempt of her maid was unjustifiable. But it was the natural consequence of Sarai's own improper and imprudent step, in giving her to her husband as a concubine. Unwilling, however, to the occasion of her maid's insolence, she transfers the blame to her husband, who empowers or reminds her of her power still to deal with her as it pleased her. Hagar, unable to bear the yoke of humiliation, flees from her mistress. Genesis 16:2And Sarai said to Abram, Look now, the LORD has restrained me from bearing: I pray you, my maid; it may be that I may obtain children by her.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/16.htm",
        "scrapedAt": "2025-12-30T03:20:18.887Z"
      }
    ],
    "keyThemes": [
      "Human schemes vs. divine timing",
      "Suffering and compassion",
      "God who sees",
      "Consequences of impatience"
    ],
    "christConnection": "The Angel of the LORD is a pre-incarnate appearance of Christ. God sees the afflicted and responds with promise and provision."
  },
  {
    "bookId": "genesis",
    "chapter": 17,
    "title": "Genesis 17",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And when Abram was ninety years old and nine, the LORD appeared to Abram, and said to him, I am the Almighty God; walk before me, and be you perfect. 17:1-6 The covenant was to be time. The promised Seed was Christ, and . And all who are of faith are blessed with faithful Abram, being partakers of the same covenant blessings. In token of this covenant his name was changed from Abram, a high father, to Abraham, the father of a multitude. All that the Christian world enjoys, it is indebted for to Abraham and his Seed. Genesis 17:2And I will make my covenant between me and you, and will multiply you exceedingly. Genesis 17:3And Abram fell on his face: and God talked with him, saying, Genesis 17:4As for me, look, my covenant is with you, and you shall be a father of many nations. Genesis 17:5Neither shall your name any more be called Abram, but your name shall be Abraham; for a father of many nations have I made you. Genesis 17:6And I will make you exceeding fruitful, and I will make nations of you, and kings shall come out of you. Genesis 17:7And I will establish my covenant between me and you and your seed after generations for an everlasting covenant, to be a God to you, and to your seed after you. 17:7-14 The covenant of grace is from counsels of it, and to consequences of it. The token of the covenant was circumcision. It is here said to be the covenant which Abraham and his seed must keep.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/17.htm",
        "scrapedAt": "2025-12-30T03:20:21.431Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And when Abram was ninety years old and nine, the LORD appeared to Abram, and said to him, I am the Almighty God; walk before me, and be you perfect. Genesis 17:1-271. And when Abram was ninety years old and nine, the LORD appeared to Abram, and said to him, I am the Almighty God; walk before me, and be you perfect. Et fuit Abram annorum: et visus est Jehova Abram, , Ego Deus Omnipotens, ambula coram me, et esto perfectus. And I will make my covenant between me and you, and will multiply you exceedingly. Et ponam pactum et to, et multiplicabo to vehementissime. And Abram fell on his face: and God talked with him, saying, 3. Tunc prostravit se suam, et loquutus Deus, dicendo, 4. As for me, look, my covenant is with you, and you shall be a father of many nations. Ego, ecce pactum meum tecum, et multitudinis gentium. Neither shall your name any more be called Abram, but your name shall be Abraham; for a father of many nations have I made you. Et non tuum Abram, sed erit nomen tuum Abraham: quia patrem multitudinis gentium posui to. And I will make you exceeding fruitful, and I will make nations of you, and kings shall come out of you. Et multiplicabo to valde, et ponam , et reges ex to egredientur. And I will establish my covenant between me and you and your seed after generations for an everlasting covenant, to be a God to you, and to your seed after you.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/17.htm",
        "scrapedAt": "2025-12-30T03:20:23.973Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And when Abram was ninety years old and nine, the LORD appeared to Abram, and said to him, I am the Almighty God; walk before me, and be you perfect. God renews his covenant with Abram, Genesis 17:1-4. His of it changed, Genesis 17:5. Kings shall be born of him, Genesis 17:6. The covenant established with his seed, Genesis 17:7. The promise of Canaan to him and his seed repeated, Genesis 17:8. Circumcision instituted, Genesis 17:9,10. The part to be circumcised, Genesis 17:11. The time and persons, Genesis 17:12,13. The punishment on neglecters of it, Genesis 17:14. Sarai's named changed, Genesis 17:15. A son by her promised, Genesis 17:16. Abraham's surprise, Genesis 17:17. His prayer for Ishmael, Genesis 17:18. The promise of a son by Sarah confirmed; his name, Genesis 17:19. Abraham's prayer for Ishmael answered, Genesis 17:20, but the covenant , Genesis 17:21. Abraham is circumcised; as is also Ishmael, and all his house, Genesis 17:23-27. I am the Almighty God, who can do all that I have promised, or shall promise to time, and whatsoever pleases me; and therefore do you firmly believe all my words. Walk before me as becomes presence of your Lord, and Judge, and Rewarder, being careful to please and obey things, and depending upon me for your well-doing and well-being. See the same phrase, Genesis 48:15 1 Kings 8:25 Psalm 116:9. And be you perfect, i. e. sincere, universal, and belief of my promises, and obedience to my commands. See Genesis 6:9. Genesis 17:2And I will make my covenant between me and you, and will multiply you exceedingly.",
        "source": "https://biblehub.com/commentaries/poole/genesis/17.htm",
        "scrapedAt": "2025-12-30T03:20:26.503Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And when Abram was ninety years old and nine, the LORD appeared to Abram, and said to him, I am the Almighty God; walk before me, and be you perfect. The spiritual aspect. \"The Lord,\" the Author of existence and performance. \"God Almighty,\" El Shaddai. \"El,\" the Lasting, Eternal, Absolute. \"Shaddai,\" the Irresistible, Unchangeable, Destructive Isaiah 13:6; Joel 1:15. This term indicates on the one hand his judicial, punitive power, and points to his holiness; and on the other hand, his alterative, reconstructive power, and points to his providence. The complex name, therefore, describes God as the Holy Spirit, who development of things, punishment and eradication of sin and its works, regeneration and defense of holiness. It refers to potence, and potence combined with promise affords ground for faith. Walk before me and be perfect. - In the institution of the covenant we had \"fear not\" - an encouragement to the daunted or the doubting. In its confirmation we have a command, a rule of life, prescribed. This with the circumstances of Abraham. For, first, he has now Lord, which is the fruit of the new prevailing over the old, and is therefore competent to obey; and, next, the he believes is God Almighty, the all-efficient Spirit, who works both to will and to destroying of sin and building up of holiness. \"Walk\" - most comprehensive sense of the term; \"before me,\" and not behind, as one conscious of doing what is, not displeasing, but pleasing to me; \"and be perfect,\" not sincere merely, primitive sense of duty, but complete, upright, holy, not , which is provided previous clause, , the spring of action.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/17.htm",
        "scrapedAt": "2025-12-30T03:20:29.037Z"
      }
    ],
    "keyThemes": [
      "Covenant renewal",
      "New names, new identity",
      "Sign of circumcision",
      "Promise of Isaac"
    ],
    "christConnection": "Circumcision points to the circumcision of the heart by the Spirit. The promised son Isaac foreshadows the promised Son, Jesus."
  },
  {
    "bookId": "genesis",
    "chapter": 18,
    "title": "Genesis 18",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And the LORD appeared to plains of Mamre: and he tent heat of the day;18:1-8 Abraham was waiting to entertain any weary traveller, for inns were not to be met with as among us. While Abraham was thus sitting, he saw three men coming. These were three heavenly bodies. Some think they were all created angels; others, that one of them was the Son of God, the Angel of the covenant. Washing the feet is hot climates, where only sandals are worn. We should not be forgetful to entertain strangers, for thereby some have entertained angels unawares, Heb 13:2; no, the Lord of angels himself; as we always do, when for his sake we entertain the least of his brothers. Cheerful and obliging kindness, are great ornaments to piety. Though our condescending Lord vouchsafes not personal visits to us, yet still by his Spirit he stands at the door and knocks; when we are inclined to open, he deigns to enter; and by his gracious consolations he provides a rich feast, of which we partake with him, Re 3:20. Genesis 18:2And he lift up his eyes and looked, and, look, three men stood by him: and when he saw them, he ran to meet them from the tent door, and bowed himself toward the ground, Genesis 18:3And said, My Lord, if now I have found sight, pass not away, I pray you, from your servant: Genesis 18:4Let a little water, I pray you, be fetched, and wash your feet, and rest yourselves under the tree: Genesis 18:5And I will fetch a morsel of bread, and comfort you your hearts; after that you shall pass on: for therefore are you come to your servant.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/18.htm",
        "scrapedAt": "2025-12-30T03:20:31.541Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And the LORD appeared to plains of Mamre: and he tent heat of the day;Genesis 18:1-331. And the LORD appeared to plains of Mamre: and he tent heat of the day; 1. Deinde visus est illi Mamre, quum ipse tabernaculi, quando incalescebat dies. And he lift up his eyes and looked, and, look, three men stood by him: and when he saw them, he ran to meet them from the tent door, and bowed himself toward the ground, 2. Et elevavit oculos suos, et vidit, et ecce tres virri stabant juxta eum: et vidit, et eorum ab ostio tabernaculi, et incurvavit . And said, My Lord, if now I have found sight, pass not away, I pray you, from your servant: 3. Et dixit, Domine mi, si nunc inveni tuis, ne nunc transeas a servo tuo. Let a little water, I pray you, be fetched, and wash your feet, and rest yourselves under the tree: 4. Tollatur nunc parum aquae, et lavate pedes vestros, et . And I will fetch a morsel of bread, and comfort you your hearts; after that you shall pass on: for therefore are you come to your servant. And they said, So do, as you hast said. Et capiam buccellam panis, et fulcite cor vestrum, postea transibitis: quia idcirco vestrum. Et dixerunt, Sicfacias quemadmodum loquutus es. And Abraham hastened into the tent to Sarah, and said, Make ready quickly three measures of fine meal, knead it, and make cakes upon the hearth. Itaque festinavit ad Sarah, et dixit, Festina, tria sata farinae similae consperge, et fac subcinercios panes.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/18.htm",
        "scrapedAt": "2025-12-30T03:20:34.133Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And the LORD appeared to plains of Mamre: and he tent heat of the day;The Lord appears to Abraham, Genesis 18:1. He sees three men, Genesis 18:2; invites them, Genesis 18:3-5. They accept it, Genesis 18:5. He prepares for them a calf, &c. ; they eat, Genesis 18:6-8. The promise of a son by Sarah renewed; the time appointed, Genesis 18:9,10. Sarah, being old, laughs, Genesis 18:11,12. God reproves her, Genesis 18:13; and confirms the promise, Genesis 18:14. Her denial, and God's reply, Genesis 18:15. The men go towards Sodom, Genesis 18:16. God resolves to show Abraham his purpose to destroy Sodom, Genesis 18:17. The reason of it, Genesis 18:18. God's testimony of him, Genesis 18:19. God reveals his purpose to him, Genesis 18:20-22. Abraham's intercession for Sodom oft repeated, and God's condescension, Genesis 18:23-32. 1898 Waiting for strangers which might pass that way; for whom no public places being times and places, virtuous persons used to entertain houses. See Hebrews 13:2. In the heat of the day, the time when travellers, hot contries, used to divert and refresh themselves. Genesis 18:2And he lift up his eyes and looked, and, look, three men stood by him: and when he saw them, he ran to meet them from the tent door, and bowed himself toward the ground, Three men, as they seemed to be, though indeed they were 's shape. Bowed himself toward the ground; a respect usually paid to persons of quality, such as these seemed to be. Genesis 18:3And said, My Lord, if now I have found sight, pass not away, I pray you, from your servant: He directs his speech to one, who, by the majesty of his countenance, and the respect which the other two showed him, seemed to be the chief of them.",
        "source": "https://biblehub.com/commentaries/poole/genesis/18.htm",
        "scrapedAt": "2025-12-30T03:20:36.648Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And the LORD appeared to plains of Mamre: and he tent heat of the day;The Lord visits Abraham and assures Sarah of the birth of a son. Abraham is tent heat of the day, reposing. \"Three men stood before him. \" Whenever visitants from the celestial world appear to men, they have the form of man. This is the only form of a rational being known to us. It is not the design of his mercy to us to make us acquainted with the whole of the nature of things. The science of things visible or invisible he leaves to our natural faculties to explore, as far as occasion allows. Hence, we conclude that the celestial visitant is a real being, and that the form is a real form. But we are not entitled to infer that the human is the only or the proper form of such beings, or that they have any ordinary or constant form open to sense. We only discern that they are intelligent beings like ourselves, and, in order to manif themselves to us as such, put on that form of intelligent creatures with which we are familiar, they can intelligibly confer with us. For the same reason they speak the language of the party addressed, though, for ought we know, spiritual beings use none of the many languages of humanity, and have quite a different mode of communicating with one another. Other human acts follow on the occasion. They accept the hospitality of Abraham and partake of human food.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/18.htm",
        "scrapedAt": "2025-12-30T03:20:39.169Z"
      }
    ],
    "keyThemes": [
      "Divine visitation",
      "Hospitality",
      "Nothing too hard for God",
      "Intercessory prayer"
    ],
    "christConnection": "Abraham's intercession for Sodom anticipates Christ's greater intercession for sinners. The question about God's power applies to the virgin birth and resurrection."
  },
  {
    "bookId": "genesis",
    "chapter": 19,
    "title": "Genesis 19",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And there came two angels to Sodom at even; and Lot gate of Sodom: and Lot seeing them rose up to meet them; and he bowed himself with his face toward the ground;19:1-29 Lot was good, but there was not one more of the same city. All the people of Sodom were very wicked and vile. Care was therefore taken for saving Lot and his family. Lot lingered; he trifled. Thus many who are under convictions about their spiritual state, and the necessity of a change, defer that needful work. The salvation of the most righteous men is of God's mercy, not by their own merit. We are saved by grace. God's power also must be souls out of a sinful state If God had not been merciful to us, our lingering had been our ruin. Lot must flee for his life. He must not hanker after Sodom. Such commands as these are given to those who, through grace, are delivered out of a sinful state and condition. Return not to sin and Satan. Rest and the world. Reach toward Christ and heaven, for that is escaping to the mountain, short of which we must not stop. Concerning this destruction, observe that it is a revelation of the wrath of God against sin and sinners of all ages. Let us learn from hence the evil of sin, and its hurtful nature; it leads to ruin. Genesis 19:2And he said, Look now, my lords, turn in, I pray you, into your servant's house, and tarry all night, and wash your feet, and you shall rise up early, and go on your ways.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/19.htm",
        "scrapedAt": "2025-12-30T03:20:41.653Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And there came two angels to Sodom at even; and Lot gate of Sodom: and Lot seeing them rose up to meet them; and he bowed himself with his face toward the ground;Genesis 19:1-381. And there came two angels to Sodom at even; and Lot gate of Sodom: and Lot seeing them rose up to meet them; and he bowed himself with his face toward the ground; 1. Et venerunt duo vesperi, in porta Sedom: et vidit in occursum eorum, et incurvavit se . And he said, Look now, my lords, turn in, I pray you, into your servant's house, and tarry all night, and wash your feet, and you shall rise up early, and go on your ways. And they said, No; but we will street all night. Et dixit, Ecce, nunc domini mei, declinate servi vestri, et pernoctate, et lavate pedes vestros: et mane surgetis, et vestram. Et dixerunt, Nequaquam, pernoctabimus. And he pressed upon them greatly; and they him, and entered into his house; and he made them a feast, and did bake unleavened bread, and they did eat. Et vehementer compulit eos, et , ejus: et fecit eis convivium, et infermentata coxit, et comederunt. But before they lay down, the men of the city, even the men of Sodom, compassed the house round, both old and young, all the people from every quarter: 4. Antequam dormirent, viri civitatis, viri Sedom gyro cinxerunt domum a puero , omnis populus ab extremo. And they called to Lot, and said to him, Where are the men which you this night?",
        "source": "https://biblehub.com/commentaries/calvin/genesis/19.htm",
        "scrapedAt": "2025-12-30T03:20:44.225Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And there came two angels to Sodom at even; and Lot gate of Sodom: and Lot seeing them rose up to meet them; and he bowed himself with his face toward the ground;Two angels come to Sodom, Genesis 19:1. Lot invites them in; they at first refuse, Genesis 19:2. They enter; he entertains them, and they eat, Genesis 19:3. The men of Sodom demand to know them, Genesis 19:4,5. Lot dissuades them, Genesis 19:6,7; offers his daughters; urges reason, Genesis 19:8. They are obstinate; threaten, and press to break the door, Genesis 19:9. The angels pull Lot in, and shut to the door, Genesis 19:10; and smite the men with blindness, Genesis 19:11. Advise Lot to depart with his kindred, Genesis 19:12. The reason, Genesis 19:13. Lot speaks to his sons-in-law; they deride him, Genesis 19:14. The angels lay hold on Lot, his wife, and two daughters, and carry them out, Genesis 19:16; command them not to look back, Genesis 19:17. Lot requests to ; it is granted, with a command to hasten, because till they are gone the Lord can do nothing, Genesis 19:18-23. God rains brimstone and fire upon Sodom, Genesis 19:24,25. Lot's wife looking back becomes a pillar of salt, Genesis 19:26. Abraham looks towards Sodom, Genesis 19:27,28. God kind to Lot for Abraham's sake, Genesis 19:29. Lot and his two daughters remove to the mountain, Genesis 19:30. Lot's daughters contrive for an issue, Genesis 19:31,32. They make their father drunk, lie with him, Genesis 19:33-35; and are with child, Genesis 19:36.",
        "source": "https://biblehub.com/commentaries/poole/genesis/19.htm",
        "scrapedAt": "2025-12-30T03:20:46.715Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And there came two angels to Sodom at even; and Lot gate of Sodom: and Lot seeing them rose up to meet them; and he bowed himself with his face toward the ground;The two angels. - These are the two men who left Abraham standing before the Lord Genesis 18:22. \"Lot gate,\" the place of public resort for news and for business. He courteously rises to meet them, does obeisance to them, and invites them to spend the house. \"No, street will we lodge. \" This is the disposition of those who come to inquire, and, it may be, to condemn and to punish. They are chapter called angels, being sent to perform a delegated duty. This term, however, defines their office, not their nature. Lot, in the first instance, calls them \"my lords,\" which is a term of respect that may be addressed to men Genesis 31:35. He afterward styled one of them Adonai, with the special vowel pointing which limits it to the Supreme Being. He at the same time calls himself his servant, appeals to his grace and mercy, and ascribes to him his deliverance. The person thus addressed replies, in a tone of independence and authority, \"I have accepted you. \" \"I will not overthrow this city for which you hast spoken. \" \"I cannot do anything until you go there. \" All these circumstances point to a divine personage, and are not so easily explained of a mere delegate. He is pre-eminently the Saviour, as he who communed with Abraham was the hearer of prayer.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/19.htm",
        "scrapedAt": "2025-12-30T03:20:49.197Z"
      }
    ],
    "keyThemes": [
      "Divine judgment on sin",
      "Rescue of the righteous",
      "Danger of looking back",
      "Consequences of compromise"
    ],
    "christConnection": "Jesus references Sodom's judgment as a warning (Luke 17:28-32). Lot's rescue pictures salvation from coming wrath through faith."
  },
  {
    "bookId": "genesis",
    "chapter": 20,
    "title": "Genesis 20",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And Abraham journeyed from thence toward the south country, and dwelled between Kadesh and Shur, and . 20:1-8 Crooked policy will not prosper: it brings ourselves and others into danger. God gives Abimelech notice of his danger of sin, and his danger of death for his sin. Every wilful sinner is a dead man, but Abimelech pleads ignorance. If our consciences witness, that, however we may have been cheated into a snare, we have not knowingly sinned against God, it will be our day of evil. It is matter of comfort to those who are honest, that God knows their honesty, and will acknowledge it. It is a great mercy to be hindered from committing sin; of this God must have the glory. But if we have ignorantly done wrong, that will not excuse us, if we knowingly . He that does wrong, whoever he is, prince or peasant, shall certainly receive for the wrong which he has done, unless he repent, and, if possible, make restitution. Genesis 20:2And Abraham said of Sarah his wife, She is my sister: and Abimelech king of Gerar sent, and took Sarah. Genesis 20:3But God came to dream by night, and said to him, Look, you are but a dead man, for the woman which you hast taken; for she is a man's wife. Genesis 20:4But Abimelech had not come near her: and he said, Lord, will you slay also a righteous nation? Genesis 20:5Said he not to me, She is my sister? and she, even she herself said, He is my brother: in the integrity of my heart and innocency of my hands have I done this.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/20.htm",
        "scrapedAt": "2025-12-30T03:20:51.666Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And Abraham journeyed from thence toward the south country, and dwelled between Kadesh and Shur, and . Genesis 20:1-181. And Abraham journeyed from thence toward the south country, and dwelled between Kadesh and Shur, and . Postea profectus est inde Meridianam, et et Sur, peregrinatusque . And Abraham said of Sarah his wife, She is my sister: and Abimelech king of Gerar sent, and took Sarah. Et dixit uxore sua, Soror mea est. Et misit Abimelech rex Gerar, et accepit Sarah. But God came to dream by night, and said to him, Look, you are but a dead man, for the woman which you hast taken; for she is a man's wife. Et venit in somnio noctis, et dixit et, Ecce es mortuus, propter uxorem quam accepisti: quum ipsa maritata sit marito. But Abimelech had not come near her: and he said, Lord, will you slay also a righteous nation? 4. : itaque dixit, Jehova, num gentem etiam justam occides? 5. He said not to me, She is my sister? and she, even she herself said, He is my brother: in the integrity of my heart and innocency of my hands have I done this. Numquid non ipse dixit mihi, Soror mea est: et ipsa etiam dixit, Frater meus est? in integritate cordis mei, manuum mearum feci hoc. And God said to dream, Yes, I know that you didst integrity of your heart; for I also withheld you from sinning against me: therefore suffered I you not to touch her.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/20.htm",
        "scrapedAt": "2025-12-30T03:20:54.169Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And Abraham journeyed from thence toward the south country, and dwelled between Kadesh and Shur, and . Abraham , Genesis 20:1; denies Sarah to be his wife: Abimelech sends and takes her, Genesis 20:2. God warns dream, Genesis 20:3. He expostulates with God, who answers and commands him to restore Sarah, Genesis 20:4-7. Abimelech warns his servants, Genesis 20:8; rebukes Abraham, Genesis 20:9,10; who excuses and defends what he had said, Genesis 20:11-13. Abimelech kind to Abraham; restores his wife, Genesis 20:14,15; rebukes Sarah, Genesis 20:16. Abraham prays for Abimelech; God removes his judgments, Genesis 20:17,18. 1808 From thence; from the plain of Mamre, Genesis 18:1, where he had long dwelt; and from where he removed, either because of its nearness to that filthy lake, which now place of that late fruitful plain; or for other reasons and conveniences needless to be here inquired or determined. Towards the south country, yet more towards the southern part of Canaan. Genesis 20:2And Abraham said of Sarah his wife, She is my sister: and Abimelech king of Gerar sent, and took Sarah. Abraham said this l they should slay him for his beautiful wife's sake, as himself tells us, Genesis 20:11. For though Sarah was ninety years old, yet she retained her measure, partly, because she had not been broken by bearing and nursing of children; partly, age of the world men and women, as they lived longer, so they did not so soon begin to decay, as now they do; and partly, because of God's especial blessing upon her.",
        "source": "https://biblehub.com/commentaries/poole/genesis/20.htm",
        "scrapedAt": "2025-12-30T03:20:56.713Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And Abraham journeyed from thence toward the south country, and dwelled between Kadesh and Shur, and . Abimelek takes Sarah. Abraham had been dwelling near Hebron. But the total separation between him and Lot, and the awful overthrow of Sodom and vicinity, may have loosened his tie to Hebron, and rendered it for the present not an agreeable place of residence. He therefore travels southward and takes up his abode at Gerar . Sarah, though now eighty-nine years of age, was as as a person of forty would now be. She had, moreover, had no family, was remarkable for her good looks, and was at present, no doubt, and vigor Genesis 12:11-16. Genesis 20:2And Abraham said of Sarah his wife, She is my sister: and Abimelech king of Gerar sent, and took Sarah. Genesis 20:3But God came to dream by night, and said to him, Look, you are but a dead man, for the woman which you hast taken; for she is a man's wife. The Supreme Being here appears as God אלהים 'ĕlohı̂ym, and eternal power and independence, as he was antecedent to the creation of man. He communicates with dream. This prince addresses him as אדני 'ǎdonāy, \"Lord. \" We have already seen that the knowledge of the true God had not yet disappeared from the Gentile world, who were under the Noachic covenant. \"You will die. \" You are dying or at the point of death if you persist. A deadly plague was body of Abimelek, on account of Sarah.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/20.htm",
        "scrapedAt": "2025-12-30T03:20:59.259Z"
      }
    ],
    "keyThemes": [
      "Recurring failure",
      "Divine protection",
      "Integrity of the pagan king",
      "Intercessory prayer"
    ],
    "christConnection": "Despite Abraham's failures, God protects the promised lineage through which Christ will come. Grace overcomes human weakness."
  },
  {
    "bookId": "genesis",
    "chapter": 21,
    "title": "Genesis 21",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And the LORD visited Sarah as he had said, and the LORD did to Sarah as he had spoken. 21:1-8 Few under the Old Testament were brought into the world with such expectations as Isaac. He a type of Christ, that Seed which the holy God so long promised, and holy men so long expected. He was born according to the promise, at the set time of which God had spoken. God's promised mercies will certainly come at the time which He sets, and that is the best time. Isaac means laughter, and there was good reason for the name, ch. 17:17; 18:13. When the Sun of comfort is risen upon the soul, it is good to remember how welcome the dawning of the day was. When Sarah received the promise, she laughed with distrust and doubt. When God gives us the mercies we began to despair of, we ought to remember with sorrow and shame our sinful distrust of his power and promise, when we of them. This mercy filled Sarah with joy and wonder. God's favours to his covenant people are such as surpass their own and others' thoughts and expectations: who could imagine that he should do so much for those that deserve so little, no, for those that deserve so ill? Who would have said that God should send his Son to die for us, his Spirit to make us holy, his angels to attend us? Who would have said that such great sins should be pardoned, such mean services accepted, and such worthless worms taken into covenant?",
        "source": "https://biblehub.com/commentaries/mhc/genesis/21.htm",
        "scrapedAt": "2025-12-30T03:21:01.803Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And the LORD visited Sarah as he had said, and the LORD did to Sarah as he had spoken. Genesis 21:1-341. And the LORD visited Sarah as he had said, and the LORD did to Sarah as he had spoken. Porro Jehova visitavit Sarah, quemadmodum dixit: et fecit Jehova ipsi Sarah, quemadmodum loquutus erat. For Sarah conceived, and bare Abraham a old age, at the set time of which God had spoken to him. Itaque Sarah ipsi Abraham ejus, in tempore quod illi dixerat Deus. And Abraham called the name of his son that was born to him, whom Sarah bare to him, Isaac. Et vocavit Abraham nomen filii sui, qui , quem peperit ei Sarah, Ishac. And Abraham circumcised his son Isaac being eight days old, as God had commanded him. Et circumcidit Abraham Ishac filium suum, filium octo dierum, quemadmodum praeceperat ei Deus. And Abraham was an hundred years old, when his son Isaac was born to him. centum annorum, quando natus est ei Ishac filius suus. And Sarah said, God has made me to laugh, so that all that hear will laugh with me. Et dixit Sarah, Risum fecit mihi Deus: omnis qui audierit, ridebit mihi. And she said, Who would have said to Abraham, that Sarah should have given children suck? for I have born him a old age. Et dixit, Quis nuntiasset Abrahae lactare filios Sarah? quia peperi ejus. And the child grew, and was weaned: and Abraham made a great feast the same day that Isaac was weaned.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/21.htm",
        "scrapedAt": "2025-12-30T03:21:04.381Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And the LORD visited Sarah as he had said, and the LORD did to Sarah as he had spoken. God visits Sarah; she conceives and bears a son, Genesis 21:1,2. He is named Isaac, Genesis 21:3; circumcised the eighth day, Genesis 21:4. Sarah's joy and thanks, Genesis 21:6,7. Abraham makes a feast at the weaning of Isaac, Genesis 21:8. Ishmael mocks; Sarah sees it, Genesis 21:9. She complains to Abraham, and desires to have him cast out, Genesis 21:10. Abraham is grieved, Genesis 21:11. God commands it; the reason, Genesis 21:12; promises a blessing to Ishmael for his sake, Genesis 21:13. Abraham sends Hagar and her son away; they wilderness, are like to perish for want of water, Genesis 21:14-16. God calls to her, Genesis 21:17; repeats his promise to Ishmael, Genesis 21:18; opens her eyes; she sees a well, Genesis 21:19. They dwell there, and Ishmael is an archer, Genesis 21:20; marries an Egyptian, Genesis 21:21. Abimelech convinced that God was with Abraham, desires a covenant, Genesis 21:22,23. Abraham consents, Genesis 21:24. Abimelech's servants having taken a well from him, Abraham reproves him for it, Genesis 21:25. He pleads ignorance, Genesis 21:26. Both of them make a covenant, Genesis 21:27-32. Abraham plants a grove, and calls on the Lord the everlasting God, Genesis 21:33,34. The Lord visited Sarah, i. e. performed his gracious promise of giving her strength to conceive and bear a child. God's visitation of a use, is the manifestation and execution of his purpose or word towards that person, and that either for evil, and so it is an inflicting of evils threatened, as the word visiting is used, Exodus 20:5 Psalm 59:5; or for good, and so it is used for the actual giving of mercies promised, as here, and Genesis 50:24 Exodus 4:31 Ruth 1:6.",
        "source": "https://biblehub.com/commentaries/poole/genesis/21.htm",
        "scrapedAt": "2025-12-30T03:21:06.932Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And the LORD visited Sarah as he had said, and the LORD did to Sarah as he had spoken. Isaac is born according to promise, and grows to be weaned. \"The Lord had visited Sarah. \" It is possible that this event may have occurred before the patriarchal pair . To visit, is to draw near to a person for the purpose of either chastising or conferring a favor. The Lord had been faithful to his gracious promise to Sarah. \"He did as he had spoken. \" The object of the visit was accomplished. In due time she bears a son, whom Abraham, in accordance with the divine command, calls Isaac, and circumcises on the eighth day. Abraham was now a hundred years old, and therefore Isaac was born thirty years after the call. Sarah expressed her grateful somewhat poetic strains. The first, consisting of two sentences, turns on the word laugh. This is no longer the laugh of delight mingled with doubt, but that of wonder and joy at the power of the Lord overcoming the impotence of the aged mother. The second strain of three sentences turns upon the object of this admiring joy. The event that nobody ever expected to hear announced to Abraham, has nevertheless taken place; \"for I have borne him a old age. \" The time of weaning, the second step of the child to individual existence, at length arrives, and the household of Abraham make merry, as was wont, on the festive occasion.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/21.htm",
        "scrapedAt": "2025-12-30T03:21:09.424Z"
      }
    ],
    "keyThemes": [
      "Promise fulfilled",
      "Laughter of joy",
      "God hears the afflicted",
      "Covenant relationships"
    ],
    "christConnection": "Paul uses this story allegorically: Hagar represents the old covenant of slavery; Sarah represents the new covenant of freedom in Christ (Gal 4:21-31)."
  },
  {
    "bookId": "genesis",
    "chapter": 22,
    "title": "Genesis 22",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And it came to pass after these things, that God did tempt Abraham, and said to him, Abraham: and he said, Look, here I am. 22:1,2 We never are secure from , to tempt, and to try, or to prove, are expressed by the same word. Every trial is indeed a temptation, and tends to show the dispositions of the heart, whether holy or unholy. But God proved Abraham, not to draw him to sin, as Satan tempts. Strong faith is often exercised with strong trials, and put upon hard services. The command to offer up his son, is language as makes the trial more grievous; every word here is a sword. Observe, 1. The person to be offered: Take your son; not your bullocks and your lambs. How willingly would Abraham have parted with them all to redeem Isaac! Your son; not your servant. Yours only son; yours only son by Sarah. Take Isaac, that son whom you lov. The place: three days' journey off; so that Abraham might have time to consider, and might deliberately obey. The manner: Offer him fro a burnt-offering; not only kill his son, his Isaac, but kill him as a sacrifice; kill him with all that solemn pomp and ceremony, with which he used to offer his burnt-offerings. Genesis 22:2And he said, Take now your son, yours only son Isaac, whom you lov, and get you into the land of Moriah; and offer him there for a burnt offering upon one of the mountains which I will tell you of.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/22.htm",
        "scrapedAt": "2025-12-30T03:21:12.037Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And it came to pass after these things, that God did tempt Abraham, and said to him, Abraham: and he said, Look, here I am. Genesis 22:1-241. And it came to pass after these things, that God did tempt Abraham, and said to him, Abraham: and he said, Look, here Iam 1. Et fuit, posthaec Deus tentavit Abraham, et , Abraham: qui dixit, Ecce ego. And he said, Take now your son, yours only son Isaac, whom you lov, and get you into the land of Moriah; and offer him there for a burnt offering upon one of the mountains which I will tell you of. Et dixit, Tolle nunc filium tuum, unicum tuum, quem dilexisti Ishac, et Moriah, et offer eum super unum e montibus, quem dixero tibi. And Abraham rose up morning, and saddled his ass, and took two of his young men with him, and Isaac his son, and clave the wood for the burnt offering, and rose up, and went to the place of which God had told him. Et surrexit Abraham mane, et stravit asinum suum, et cepit duos pueros suos secum, et Ishac filium suum: et scidit ligna holocausti: et surrexit, , quem dixerat ei Deus. Then on the third day Abraham lifted up his eyes, and saw the place afar off. Die tertia levavit Abraham oculos suos, et vidit locum procul. And Abraham said to his young men, Abide you here with the ass; and I and the lad will go yonder and worship, and come again to you.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/22.htm",
        "scrapedAt": "2025-12-30T03:21:14.636Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And it came to pass after these things, that God did tempt Abraham, and said to him, Abraham: and he said, Look, here I am. God tempts Abraham, Genesis 22:1; to sacrifice Isaac, Genesis 22:2. He readily goes about it, Genesis 22:3-6. Isaac's question, Genesis 22:7. Abraham's answer, Genesis 22:8. They come to the place; he binds Isaac; lays him on the altar; takes the knife, Genesis 22:9,10. The Lord sees his integrity, and forbids him, Genesis 22:11,12. A ram caught, and stead of Isaac, Genesis 22:13. The name of the place, Jehovah-jireh, Genesis 22:14. The Lord calls a second time, Genesis 22:15; swears by himself; confirms his promise to Abraham and his seed, Genesis 22:16-18. Abraham returns to Beer-sheba, Genesis 22:19. The posterity of his brother Nahor, Genesis 22:20-24. After the accomplishment of God's promises made to Abraham, and especially of that promise concerning the blessed Seed, when now he seemed to most prosperous and secure condition, he meets with a severe exercise from God, God did tempt Abraham. The word tempt is ambiguous, and signifies either, 1. To entice to sin, in which sense devils and wicked men are said to tempt others, but God tempts no man, Jam 1:13. Or, 2. To prove or try, sense God is said to tempt men. See Deu 8:2 13:3 Judges 2:22. Thus God tempted Abraham, i. e. he tried the sincerity and strength of his faith, the universality and constancy of his obedience, and this for God's great honour, and Abraham's great glory and comfort, and for the church's following ages.",
        "source": "https://biblehub.com/commentaries/poole/genesis/22.htm",
        "scrapedAt": "2025-12-30T03:21:17.172Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And it came to pass after these things, that God did tempt Abraham, and said to him, Abraham: and he said, Look, here I am. Genesis 22:2And he said, Take now your son, yours only son Isaac, whom you lov, and get you into the land of Moriah; and offer him there for a burnt offering upon one of the mountains which I will tell you of. Genesis 22:3And Abraham rose up morning, and saddled his ass, and took two of his young men with him, and Isaac his son, and clave the wood for the burnt offering, and rose up, and went to the place of which God had told him. Genesis 22:4Then on the third day Abraham lifted up his eyes, and saw the place afar off. The story is now told with exquisite simplicity. \"On the third day. \" From Beer-sheba to the Shalem of Melkizedec, near which this hill is supposed to have been, is about forty-five miles. If they proceeded fifteen miles on the first broken day, twenty on the second, and ten on the third, they would come within sight of the place early on the third day. \"Lifted up his eyes. \" It is scarcely necessary to remind the reader of the Bible that this phrase does not imply that the place was above his point of view. Lot lifted up his eyes and beheld all the vale of Jordan Genesis 13:10, which was considerably below the position of the observer. \"And return to you.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/22.htm",
        "scrapedAt": "2025-12-30T03:21:19.660Z"
      }
    ],
    "keyThemes": [
      "Supreme test of faith",
      "Obedience unto death",
      "God will provide",
      "Substitutionary sacrifice"
    ],
    "christConnection": "This is the clearest Old Testament picture of the cross. Isaac carrying wood, the beloved son offered, and the substitute ram all point to Christ."
  },
  {
    "bookId": "genesis",
    "chapter": 23,
    "title": "Genesis 23",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And Sarah was an hundred and seven and twenty years old: these were the years of the life of Sarah. 23:1-13 The long life must shortly come to a close. Blessed be God that there is a world where sin, death, vanity, and vexation cannot enter. Blessed be his name, that even death cannot part believers from union with Christ. Those whom we most love, yes, even our own bodies, which we so care for, must soon become loathsome lumps of clays, and be buried out of sight. How loose then should we be to all earthly attachments and adornments! Let us seek rather that our souls be adorned with heavenly graces. Abraham rendered honour and respect to the princes of Hs, although of the ungodly Canaanites. The religion of the Bible enjoins to pay due respect to , without flattering their persons, or countenancing their crimes if they are unworthy characters. And the noble generosity of these Canaanites shames and condemns the closeness, selfishness, and ill-humour of many that call themselves Israelites. It was that Abraham refused the gift, because he scorned to be beholden to Ephron; . Abraham was able to pay for the field, and therefore would not take advantage of Ephron's generosity. Honesty, as well as honour, forbids us to take advantage of our neighbour's liberality, and to impose, upon those who give freely. Genesis 23:2And Sarah ; the same is land of Canaan: and Abraham came to mourn for Sarah, and to weep for her.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/23.htm",
        "scrapedAt": "2025-12-30T03:21:22.156Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And Sarah was an hundred and seven and twenty years old: these were the years of the life of Sarah. Genesis 23:1-201. And Sarah was an hundred and seven and twenty years old: these were the years of the life of Sarah. Sarah centum anni: anni vitae Sarah. And Sarah ; the same is land of Canaan: and Abraham came to mourn for Sarah, and to weep for her. Et mortua -- arbah: ipsa est Chenaan. Et venit super Sarah, eam. And Abraham stood up from before his dead, and spoke to the sons of Hs, saying, 3. Deinde surrexit Abraham a facie mortui sui, et loquutus Hs, dicendo, 4. I am a stranger and a sojourner with you: give me a possession of a buryingplace with you, that I may bury my dead out of my sight. sum vobiscum: date mihi haereditatem sepulchri vobiscum: et sepeliam mortuum meum a facie mea. And the children of Hs answered Abraham, saying to him, 5. Et responderunt filii , dicendo ei, 6. Hear us, my lord: you are a mighty prince among us: in the choice of our sepulchres bury your dead; none of us shall withhold from you his sepulchre, but that you may bury your dead. Audi nos, domine mi, Princeps Dei nostri: in electis sepulchris nostris sepeli mortuum tuum: nemo e nobis sepulchrum suum prohibebit a to, ne sepelias mortuum tuum. And Abraham stood up, and bowed himself to the people of the land, even to the children of Hs.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/23.htm",
        "scrapedAt": "2025-12-30T03:21:24.687Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And Sarah was an hundred and seven and twenty years old: these were the years of the life of Sarah. Sarah's age and death; Abraham mourns, Genesis 23:1,2. He speaks to the sons of Hs for a burying-place, Genesis 23:3,4. They offer him the choice of their sepulchres, Genesis 23:5,6. Abraham desires to purchase a field of Ephron, Genesis 23:8,9. Ephron would give it him, Genesis 23:10-15. Abraham purchases it, and weighs the silver, Genesis 23:16. The field made sure to Abraham for a possession before witnesses, Genesis 23:17-20. 1860 This is the peculiar honour of Sarah the mother of the faithful, 1 Peter 3:6, to have the years of her life . Genesis 23:2And Sarah ; the same is land of Canaan: and Abraham came to mourn for Sarah, and to weep for her. Kirjath-arba, or, the city of Arba; so called probably from a giant or great man called Arba, who lived and parts. See Joshua 14:15 15:13. It is objected against this scripture, that this city was not called Hebron till Joshua's time, Joshua 14:15; but this is a mistake, Joshua does not say so, but only that the name of Hebron before, ( time), as this very particle is rendered, Deu 2:20, and elsewhere. So the sense is, the most ancient name of it was Kirjath-arba. Nor does Joshua there give any account or reason of this change of the name at that time, or upon that occasion, as the sacred writers used to cases, but rather supposes that Hebron was the name of it before he came there; and how long before that time he does not express.",
        "source": "https://biblehub.com/commentaries/poole/genesis/23.htm",
        "scrapedAt": "2025-12-30T03:21:27.289Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And Sarah was an hundred and seven and twenty years old: these were the years of the life of Sarah. Sarah is the only woman whose age is . She meets with this distinction as the wife of Abraham and the mother of the promised seed. \"A hundred and twenty and seven years,\" and therefore thirty-seven years after the birth of her son. \"In Kiriatharba. \" Arba is called the father of Anak Joshua 15:13; Joshua 21:11; that is, of the Anakim or Bene Anak, a tall or gigantic tribe Numbers 13:22; 28; 33, who were subsequently dispossessed by Kaleb. The Anakim were probably Hittites. Abraham had been absent from Hebron, which is also called very chapter Genesis 23:17, Genesis 23:19, not far from forty years, though he appears to have still kept up a connection with it, and had at present a . During this interval the sway of Arba may have commenced. \"In the land of Kenaan,\" in contradistinction to Beer- land of the Philistines, where we last left Abraham. \"Abraham went to mourn for Sarah,\" either from Beer-sheba or some out-field where he had cattle pasturing. Genesis 23:2And Sarah ; the same is land of Canaan: and Abraham came to mourn for Sarah, and to weep for her. Genesis 23:3And Abraham stood up from before his dead, and spoke to the sons of Hs, saying,Abraham purchases a burying- land. \"The sons of Hs. \" These are the lords of the soil. \"A stranger and a sojourner. \" He is a stranger, not a Hittite; a sojourner, a land, not a mere visitor or traveller.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/23.htm",
        "scrapedAt": "2025-12-30T03:21:29.915Z"
      }
    ],
    "keyThemes": [
      "Death and mourning",
      "Hope of resurrection",
      "First land possession",
      "Faith in God's promises"
    ],
    "christConnection": "Abraham's purchase of burial land shows faith that God would fulfill His promise. Believers await resurrection and the heavenly country (Heb 11:13-16)."
  },
  {
    "bookId": "genesis",
    "chapter": 24,
    "title": "Genesis 24",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And Abraham was old, and well : and the LORD had blessed things. 24:1-9 The effect of good example, good teaching, and the worship of family, will generally piety, faithfulness, prudence, and affection of the servants. To families, or to have such servants, both are blessings from God which should be highly valued, and thankfully acknowledged. But no is of greater importance to ourselves, to others, or to the church of God, than marriage. It therefore ought always to be undertaken with much care and prudence, especially with reference to the will of God, and with prayer for his direction and blessing. Where good parents are not consulted and regarded, the blessing of God cannot be expected. Parents, in disposing of their children, should carefully consult the welfare of their souls, and their way to heaven. Observe the charge Abraham gave to a good servant, one whose conduct, faithfulness, and affection, to him and his family, he had long known. Observe also, that Abraham remembers that God had wonderfully brought him out of the land of his birth, by the call of his grace; and therefore doubts not but He will prosper his care, not to bring his son there again. God will cause that to comfort, in which we sincerely aim at his glory. Genesis 24:2And Abraham said to his eld servant of his house, that ruled over all that he had, Put, I pray you, your hand under my thigh: Genesis 24:3And I will make you swear by the LORD, the God of heaven, and the God of the earth, that you shall not take a wife to my son of the daughters of the Canaanites, among whom I dwell: Genesis 24:4But you shall go to my country, and to my kindred, and take a wife to my son Isaac.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/24.htm",
        "scrapedAt": "2025-12-30T03:21:32.392Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And Abraham was old, and well : and the LORD had blessed things. Genesis 24:1-671. And Abraham was old, and well : and the LORD had blessed things. , et Iehova benedixerat . And Abraham said to his eld servant of his house, that ruled over all that he had, Put, I pray you, your hand under my thigh: 2. Et dixit suum seniorem domus suae, qui praeerat omnibus qui erant ei, Pone nunc manum meo: 3. And I will make you swear by the LORD, the God of heaven, and the God of the earth, that you shall not take a wife to my son of the daughters of the Canaanites, among whom I:dwell: 3. Et adjurabo Deum coeli, et Deum terrae, quod non capies uxorem filio Chenaanaei, in cujus medio ego habito: 4. But you shall go to my country, and to my kindred, and take a wife to my son Isaac. meam, meam perges, et capies uxorem filio meo Ishac. And the servant said to him, Perhaps the woman will not be willing to follow me to this land: must I needs bring your son again to the land from from where you cam? 5. Et servus, Si forsitan noluerit mulier ad terram hanc, numquid reducendo reducam filium unde egressus es? 6. And Abraham said to him, Beware you that you bring not my son there again. Et Abraham Cave tibi ne forte reducas filium meum illuc. The LORD God of heaven, which took me from my father's house, and from the land of my kindred, and which spoke to me, and that sware to me, saying, To your seed will I give this land; he shall send his angel before you, and you shall take a wife to my son from thence.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/24.htm",
        "scrapedAt": "2025-12-30T03:21:34.894Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And Abraham was old, and well : and the LORD had blessed things. Abraham's age and prosperity, Genesis 24:1. He makes his eld servant swear not to take a wife for his son Isaac of the Canaanites, but of his own kindred, Genesis 24:2-4. The servant inquires into the nature and condition of the oath, Genesis 24:5. Abraham expresses his promise, Genesis 24:7; explains the oath, Genesis 24:8. The servant swears, Genesis 24:9. He goes to the city of Nahor, Genesis 24:10; prays for success, Genesis 24:12; and direction, Genesis 24:13,14. An immediate and particular answer, Genesis 24:15-20. He wonders at the providence, Genesis 24:21; makes a present to Rebekah, Genesis 24:22. Inquires of what family she was, Genesis 24:23. Her answer, Genesis 24:24,25. He blesses the Lord, Genesis 24:26,27. Rebekah acquaints her friends with it, Genesis 24:28. They provide for him, &c. and invite him in, Genesis 24:31,32. He goes in, but refuses to eat till he had told his errand, Genesis 24:33. He acquaints them with his business, and God's providence towards him, Genesis 24:34-49. They consent to his proposal, Genesis 24:50,51. He praises God, Genesis 24:52; makes presents to them all, Genesis 24:53; desires to return to his master, Genesis 24:54-56. Rebekah being content to go with him, they consent and bless her, Genesis 24:57-60. They depart, and meet Isaac field, Genesis 24:61-65; who marries her, Genesis 24:67. 1857 He was one hundred and forty years old, comparing Genesis 21:5, with Genesis 25:20. Genesis 24:2And Abraham said to his eld servant of his house, that ruled over all that he had, Put, I pray you, your hand under my thigh: His eld servant of his house; viz.",
        "source": "https://biblehub.com/commentaries/poole/genesis/24.htm",
        "scrapedAt": "2025-12-30T03:21:37.396Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And Abraham was old, and well : and the LORD had blessed things. Abraham binds the chief servant of his house to seek a wife for his son Isaac among his kindred. The first matrimonial arrangement is on the part of the father, who does not consult his son, but the chief manager of his household affairs. Abraham is now a hundred and forty years of age, and Sarah has been three years dead. Isaac seems to have been of an easy, sedate turn of mind, and was to choose a partner for life such as his father would approve. The promise of a numerous offspring by the son of Sarah is before the mind of the patriarch. All these considerations impel him to look out for a suitable wife for his son, and the blessing of the Lord encourages him to proceed. The person whom Abraham intrusted with this delicate task has a threefold designation. First, he is \"his servant\" or minister. Secondly, he is the old man, ancient, or elder of his house. Here the term \"elder\" approaches its official signification. In early times age was taken into account, along with good conduct and aptitude, as the qualification for services of trust. Thirdly, he \"ruled over all that he had. \" He was therefore a master as well as a minister. If this be Eliezer of mascus Genesis 15:2, he was the steward of Abraham before the birth of Ishmael fifty-four Years ago. \"Under my thigh. \" The thigh was the seat of generative power, and the region of sacramental consecration, and to put the hand under the thigh was to acknowledge and pledge obedience to him who requires the oath.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/24.htm",
        "scrapedAt": "2025-12-30T03:21:39.993Z"
      }
    ],
    "keyThemes": [
      "Divine guidance",
      "Faithful service",
      "Covenant marriage",
      "Providence in details"
    ],
    "christConnection": "The servant seeking a bride for the son pictures the Spirit gathering the Church for Christ. Rebekah's willing departure foreshadows the Church's response to Christ."
  },
  {
    "bookId": "genesis",
    "chapter": 25,
    "title": "Genesis 25",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "Then again Abraham took a wife, and her name was Keturah. 25:1-10 All the days, even of the best and greatest saints, are not remarkable days; some slide on silently; such were these last days of Abraham. Here is an account of Abraham's children by Keturah, and the disposition which he made of his estate. After the birth of these sons, he set his , with prudence and justice. He did this while he yet lived. It is wisdom for men to do what they find to do while they live, as far as they can. Abraham lived 175 years; just one hundred years after he came to Canaan; so long he was a strange country. Whether our life be long or short, it matters but little, provided we leave behind us a testimony to the faithfulness and goodness of the Lord, and a good example to our families. We are told that his sons Isaac and Ishmael buried him. It seems that Abraham had himself brought them together while he lived. Let us not close the history of the life of Abraham without blessing God for such a testimony of the triumph of faith. Genesis 25:2And she bare him Zimran, and Jokshan, and Medan, and Midian, and Ishbak, and Shuah. Genesis 25:3And Jokshan fathered Sheba, and Dedan. And the sons of Dedan were Asshurim, and Letushim, and Leummim. Genesis 25:4And the sons of Midian; Ephah, and Epher, and Hanoch, and Abida, and Eldaah. All these were the children of Keturah.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/25.htm",
        "scrapedAt": "2025-12-30T03:21:42.506Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "Then again Abraham took a wife, and her name was Keturah. Genesis 25:1-341. Then again Abraham took a wife, and her name was Keturah. Et addidit Abraham, et accepit uxorem, cujus . And she bare him Zimran, and Jokshan, and Medan, and Midian, and Ishbak, and Shuah. Et peperit ei Zimram, et Iocsan, et Medan, et Midian, et Isbah, et Suah 3. And Jokshan fathered Sheba, and Dedan. And the sons of Dedan were Asshurim, and Letushim, and Leummim. Et Iocsan genuit Seba, et Dedan. fuerunt Assurim, et Letusim, et Leummin. And the sons of Midian; Ephah, and Epher, and Hanoch, and Abida, and Eldaah. All these were the children of Keturah. Filii vero Midian, Hephah, et Hepher, et Hanoch, et Abidah, et Eldaah: omnes isti, filii Ceturae. And Abraham gave all that he had to Isaac. Porro dedit Abraham omnia, quae sua erant, ipsi Ishac. But to the sons of the concubines, which Abraham had, Abraham gave gifts, and sent them away from Isaac his son, while he yet lived, eastward, to the east country. Et filiis concubinarum quas habebat Abraham, dedit Abraham dona; et emisit eos ab Ishac filio suo, quum adhuc viveret, ad Orientem, ad terram Orientalem. And these are the days of the years of Abraham's life which he lived, an hundred threescore and fifteen years. Porro isti sunt dies annorum vitae Abraham quos vixit, centum anni. Then Abraham gave up the ghost, and good old age, an old man, and full of years; and was gathered to his people.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/25.htm",
        "scrapedAt": "2025-12-30T03:21:45.039Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "Then again Abraham took a wife, and her name was Keturah. Abraham's sons by Keturah, Genesis 25:1-4. Isaac inherits his father's estate, Genesis 25:5. Provision for the other sons, Genesis 25:6. Abraham's age, Genesis 25:7; death, Genesis 25:8; burial, Genesis 25:9,10. God blesses Isaac, Genesis 25:11. The posterity of Ishmael, Genesis 25:12-15. His age and death, Genesis 25:17. Their habitation, Genesis 25:18. The generations of Isaac, Genesis 25:19. His age when married, Genesis 25:20. He prays for children; God answers, Genesis 25:21. Two children womb; Rebekah inquires of the Lord, Genesis 25:22. God gives the reason, Genesis 25:23. She delivered of twins, Genesis 25:24. The first-born red and hairy; his name, Genesis 25:25. His brother takes him by the heel; his name: Isaac's age when they were born, Genesis 25:26. The eld a cunning hunter; the other a plain man, Genesis 25:27. Isaac loves the eld; Rebekah the young, Genesis 25:28. The eld sells his birth right for red pottage, and is called Edom, Genesis 25:30-32. Confirms the sale by an oath, Genesis 25:33. Despising his birthright, Genesis 25:34. After Sarah's death and Isaac's marriage Abraham took a wife, , not from any inordinate lust, which his age and eminent grace may sufficiently evince, but from a desire of more children, and of accomplishing God's promise concerning the great multiplication of his seed. Keturah was a distinct person from Hagar, as appears from Genesis 25:6, and Genesis 25:12, and, as it seems, of better quality, and younger, for Hagar was now eighty years old, and not likely to be a mother of six children.",
        "source": "https://biblehub.com/commentaries/poole/genesis/25.htm",
        "scrapedAt": "2025-12-30T03:21:47.576Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "Then again Abraham took a wife, and her name was Keturah. Added and took a wife. - According to the laws of Hebrew composition, this event may have taken place before that close of the previous chapter. Of this law we have several very chapter. And there is nothing contrary to the customs of that wife to wife. We cannot say that Abraham was hindered from taking lifetime of Sarah by any moral feeling which would not also have hindered him from taking Hagar. It has been also noticed that Keturah is called a concubine, which is thought to imply that the proper wife was still living; and that Abraham was a very old man at the death of Sarah. But, on the other hand, it is to be remembered that these sons case born after the birth of Isaac, and therefore after Abraham was powers. If this renewal of vigor remained after the birth of Isaac, it may have continued some time after the death of Sarah, whom he survived thirty-eight years. His abstinence from any concubine until Sarah gave him Hagar is against his taking any other during Sarah's lifetime. His loneliness on the death of Sarah may have prompted him to seek a companion of his old age. And if this step was delayed until Isaac was married, and therefore separated from him, an additional motive would impel same direction. He was not bound to raise this wife to the full rights of a proper wife, even though Sarah were dead.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/25.htm",
        "scrapedAt": "2025-12-30T03:21:50.136Z"
      }
    ],
    "keyThemes": [
      "End of an era",
      "Sovereign election",
      "Struggle in the womb",
      "Despising the birthright"
    ],
    "christConnection": "God's choice of Jacob over Esau demonstrates salvation by grace, not works (Rom 9:10-13). The birthright foreshadows spiritual inheritance in Christ."
  },
  {
    "bookId": "genesis",
    "chapter": 26,
    "title": "Genesis 26",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And there was a land, beside the first famine that days of Abraham. And Isaac went to Abimelech king of the Philistines to Gerar. 26:1-5 Isaac had been trained believing dependence upon the Divine grant of the land of Canaan to him and his heirs; and now that there is a land, Isaac still cleaves to the covenant. The real worth of God's promises cannot be lessened to a believer by any cross providences that may befall him. If God engage to be with us, and we are where he would have us to be, nothing but our own unbelief and distrust can prevent our comfort. The obedience of Abraham to the Divine command, was evidence of that faith, by which, as a sinner, he was justified before God, and the effect of that love by which true faith works. God testifies that he approved this obedience, to encourage others, especially Isaac. Genesis 26:2And the LORD appeared to him, and said, Go not down into Egypt; land which I shall tell you of: Genesis 26:3Sojourn in this land, and I will be with you, and will bless you; for to you, and to your seed, I will give all these countries, and I will perform the oath which I sware to Abraham your father; Genesis 26:4And I will make your seed to multiply as the stars of heaven, and will give to your seed all these countries; seed shall all the nations of the earth be blessed; Genesis 26:5Because that Abraham obeyed my voice, and kept my charge, my commandments, my statutes, and my laws.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/26.htm",
        "scrapedAt": "2025-12-30T03:21:52.613Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And there was a land, beside the first famine that days of Abraham. And Isaac went to Abimelech king of the Philistines to Gerar. Genesis 26:1-351. And there was a land, beside the first famine that days of Abraham. And Isaac went to Abimelech king of the Philistines to Gerar. Deinde fuit praeter famem superiorem, quae Abraham: et profectus est regem 2. And the LORD appeared to him, and said, Go not down into Egypt; land which I shall tell you of: 2. Nam visus est ei Iehova, et dixit, Ne : quam dicam tibi. land, and I will be with you, and will bless you; for to you, and to your seed, I will give all these countries, and I will perform the oath which I sware to Abraham your father; 3. Inhabita terram hanc, et ero tecum, et benedicam tibi: quia tuo dabo omnes terras istas: et statuam juramentum quod patrem tuum. And I will make your seed to multiply as the stars of heaven, and will give to your seed all these countries; seed shall all the nations of the earth be blessed; 4. Et multiplicare faciam semen tuum sicut stellas coeli, et dabo semini tuo omnes terras istas: tuo omnes gentes terrae: 5. Because that Abraham obeyed my voice, and kept my charge, my commandments, my statutes, and my laws. Eo quod obedierit Abraham voci meae, et custodierit custodiam meam, praecepta mea, statuta mea, et leges meas. And Isaac : 6. Et habitavit . And the men of the place asked him of his wife; and he said, She is my sister: for he feared to say, She is my wife; l, he said, the men of the place should kill me for Rebekah; because she was fair to look upon.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/26.htm",
        "scrapedAt": "2025-12-30T03:21:55.147Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And there was a land, beside the first famine that days of Abraham. And Isaac went to Abimelech king of the Philistines to Gerar. A land; Isaac goes to Gerar, Genesis 26:1. God directs him to abide there, and promises to be with him: the covenant with Abraham also made with Isaac, Genesis 26:2-5. Through fear he denies Rebekah, Genesis 26:7. Abimelech, seeing Isaac and Rebekah together, concludes her to be his wife; charges him with it; he confesses it, Genesis 26:8,9. Abimelech reproves him, charging his people not to touch them on pain of death, Genesis 26:10,11. Isaac blessed with great plenty, Genesis 26:12-14. The Philistines envy him; stop his wells, Genesis 26:15; desire him to depart, Genesis 26:16. He removes to the valley of Gerar, Genesis 26:17. There he digs wells, but the herdsmen strive with him about them, Genesis 26:18-21. He has rest, Genesis 26:22; removes to Beer-sheba, Genesis 26:23. The Lord renews his covenant, Genesis 26:24. He calls on the name of the Lord, Genesis 26:25. Abimelech, convinced that the Lord was with Isaac, desires to make a covenant with him, Genesis 26:26-29. They make a feast, and swear to one another, Genesis 26:30,31. Esau being forty years old, takes to him wives of the Canaanites, Genesis 26:34. Isaac and Rebekah grieved hereat, Genesis 26:35. cir 1804 Abimelech is not he mentioned Genesis 20:2, but most probably his son and successor, called by his father's name. Genesis 26:2And the LORD appeared to him, and said, Go not down into Egypt; land which I shall tell you of: To Egypt it seems Isaac intended to go, it being a very fruitful place, and being encouraged to do so by his father's example upon the same occasion.",
        "source": "https://biblehub.com/commentaries/poole/genesis/26.htm",
        "scrapedAt": "2025-12-30T03:21:57.701Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And there was a land, beside the first famine that days of Abraham. And Isaac went to Abimelech king of the Philistines to Gerar. - The Events of Isaac's Life5. משׁמרת mı̂shmeret, \"charge, ordinance. \" מציה mı̂tsvâh, \"command,\" special order. חק choq, \"decree, statute,\" engraven on stone or metal. תירה tôrâh, \"law,\" doctrine, system of moral truth. עשׂק ‛êśeq, 'Eseq, \"strife. \" 21. שׂטנה śı̂ṭnâh, Sitnah, \"opposition. \" 22. רחבית rechobôt, Rechoboth, \"room. \" 26. אחזת 'ǎchuzat, Achuzzath, \"possession. \" 33. שׁבעה shı̂b‛âh, Shib'ah, \"seven; oath. \" 34. יהוּדית yehûdı̂yt, Jehudith, \"praised. \" בארי be'ērı̂y, Beeri, \"of a well. \" בשׂמת bāśemat, Basemath, \"sweet smell. \" אילן 'êylon, Elon, \"oak. \" This chapter presents the leading quiet life of Isaac. It is probable that Abraham was now dead. In that case, Esau and Jacob would be at least fifteen years of age when the following event occurred. Genesis 26:1-5 Renewal of the promise to Isaac. \"A land. \" We left Isaac, after the death of Abraham, at Beer-lahai-roi Genesis 25:11. The preceding events have only brought us up to the same point of time. This well land of the south Genesis 24:62. The present famine is distinguished from what time of Abraham Genesis 12:10. The interval between them is at least a hundred years. The author of this, the ninth document, is, we find, acquainted with the seventh document; and the famine to which he refers is among the earli events . There is no reason to doubt, then, that he has the whole history of Abraham before his mind.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/26.htm",
        "scrapedAt": "2025-12-30T03:22:00.206Z"
      }
    ],
    "keyThemes": [
      "Covenant continuation",
      "Prosperity and envy",
      "Inherited weakness",
      "Peace with neighbors"
    ],
    "christConnection": "The promises to Abraham pass to Isaac, continuing toward Christ. Isaac's well-digging pictures opening sources of spiritual life."
  },
  {
    "bookId": "genesis",
    "chapter": 27,
    "title": "Genesis 27",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And it came to pass, that when Isaac was old, and his eyes were dim, so that he could not see, he called Esau his eld son, and said to him, My son: and he said to him, Look, here am I. 27:1-5 The promises of the Messiah, and of the land of Canaan, had come down to Isaac. Isaac being now about 135 years of age, and his sons about 75, and not duly considering the Divine word concerning his two sons, that the elder should serve the younger, resolved to put all the honour and power that promise, upon Esau his eld son. We are very apt to take measures rather from our own reason than from Divine revelation, and thereby often miss our way. Genesis 27:2And he said, Look now, I am old, I know not the day of my death: Genesis 27:3Now therefore take, I pray you, your weapons, your quiver and your bow, and go out to the field, and take me some venison; Genesis 27:4And make me savoury food, such as I love, and bring it to me, that I may eat; that my soul may bless you before I die. Genesis 27:5And Rebekah heard when Isaac spoke to Esau his son. And Esau went to the field to hunt for venison, and to bring it. Genesis 27:6And Rebekah spoke to Jacob her son, saying, Look, I heard your father speak to Esau your brother, saying,27:6-17 Rebekah knew that the blessing was intended for Jacob, and expected he would have it.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/27.htm",
        "scrapedAt": "2025-12-30T03:22:02.747Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And it came to pass, that when Isaac was old, and his eyes were dim, so that he could not see, he called Esau his eld son, and said to him, My son: and he said to him, Look, here am I. Genesis 27:1-461. And it came to pass, that when Isaac was old, and his eyes were dim, so that he could not see, he called Esau his eld son, and said to him, My son: and he said to him, Look, here am I. senuisset Ishac, et caligassent oculi ejus ita ut non videret, vocavit Esau filium suum majorem, et , Fili mi. Et , Ecce adsum. And he said, Look now, I am old, I know not the day of my death: 2. Et dixit, Ecce nunc senui: non novi diem quo moriar. Now therefore take, I pray you, your weapons, your quiver and your bow, and go out to the field, and take me some venison; 3. Nunc igitur cape quaeso instrumenta tua, pharetram tuam, et arcum tuum, et , et venare mihi venationem. And make me savoury food, such as I love, and bring it to me, that I may eat; that my soul may bless you before Idie. Et fac mihi cibos sapidos, quemadmodum diligo, et affer mihi, et comedam: ut benedicat tibi anima mea antequam moriar. And Rebekah heard when Isaac spoke to Esau his son. And Esau went to the field to hunt for venison, and to bring it 5. , dum loqueretur filium suum: et perrexit , ut venaretur venationem, ut afferret.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/27.htm",
        "scrapedAt": "2025-12-30T03:22:05.257Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And it came to pass, that when Isaac was old, and his eyes were dim, so that he could not see, he called Esau his eld son, and said to him, My son: and he said to him, Look, here am I. Isaac being aged, sends Esau for venison, that he might eat of it, and bless him, Genesis 27:1-4. Esau obeys his father, Genesis 27:5. Rebekah hearing it, tells Jacob, Genesis 27:6,7. Her contrivance and advice to him to intercept the blessing, Genesis 27:8-10. Jacob is afraid of a curse instead of a blessing, Genesis 27:11,12. His mother encourages him, Genesis 27:13. He complies; puts on Esau's clothing, and the skins of the kids; goes with the venison his mother prepared: Isaac eats of it, and blesses him, Genesis 27:14-29. Esau brings the venison he had taken, Genesis 27:30,31. Isaac is exceedingly surprised, but confirms the blessing on Jacob, Genesis 27:32,33. Esau weeps bitterly, and prays for a blessing, Genesis 27:34. Expostulates with his father, and obtains one, Genesis 27:36-40. Esau hates Jacob, Genesis 27:41. Rebekah hears of it, Genesis 27:42. She advises Jacob to go to her kindred, Genesis 27:43,44. Complains of Esau's wives to Isaac, Genesis 27:46. 1700 Isaac was about one hundred and thirty-seven years old. He could not see; which was ordered by God's wise providence, not only for the exercise of Isaac's patience, but also as a means to transfer Esau's right to Jacob. Genesis 27:2And he said, Look now, I am old, I know not the day of my death: No text from Poole on this verse.",
        "source": "https://biblehub.com/commentaries/poole/genesis/27.htm",
        "scrapedAt": "2025-12-30T03:22:07.772Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And it came to pass, that when Isaac was old, and his eyes were dim, so that he could not see, he called Esau his eld son, and said to him, My son: and he said to him, Look, here am I. Isaac was old. - Joseph thirtieth year when he stood before Pharaoh, and therefore thirty-nine when Jacob came down to Egypt at the age of one hundred and thirty. When Joseph was born, therefore, Jacob was ninety-one, and he had sojourned fourteen -aram. Hence, Jacob's flight to Laban took place when he was seventy-seven, and one hundred and thirty-sixth year of Isaac. \"His eyes were dim. \" Weakness and even loss of sight is more than with us. \"His older son. \" Isaac had not yet come to the conclusion that Jacob was heir of the promise. The communication from the Lord to Rebekah concerning her yet unborn it is handed down to us merely determines that the older shall serve the younger. This fact Isaac seems to have thought might not imply the transferrence of the birthright; and if he was aware of the transaction between Esau and Jacob, he may not have regarded it as valid. Hence, he makes arrangements for bestowing the paternal benediction on Esau, his older son, whom he also loves. \"I am old. \" At the age of one hundred and thirty-six, and with failing sight, he felt that life was uncertain. In the calmness of determination he directs Esau to prepare savory food, such as he loved, that he may have his vigor renewed and his spirits revived for the solemn business of bestowing that blessing, which he held to be fraught with more than ordinary benefits.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/27.htm",
        "scrapedAt": "2025-12-30T03:22:10.265Z"
      }
    ],
    "keyThemes": [
      "Deception and its consequences",
      "Irrevocable blessing",
      "Sovereign purpose through human sin",
      "Family division"
    ],
    "christConnection": "God's purposes prevail despite human scheming. The blessing ultimately points to Christ, through whom all nations are blessed."
  },
  {
    "bookId": "genesis",
    "chapter": 28,
    "title": "Genesis 28",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And Isaac called Jacob, and blessed him, and charged him, and said to him, You shall not take a wife of the daughters of Canaan. 28:1-5 Jacob had blessings promised both as to this world and that which is to come; yet goes out to a hard service. This corrected him for the fraud on his father. The blessing shall be conferred on him, yet he shall smart for the indirect course taken to obtain it. Jacob is dismissed by his father with a solemn charge. He must not take a wife of the daughters of Canaan: those who profess religion, should not marry with those that care not for religion. Also with a solemn blessing. Isaac had before blessed him unwittingly; now he does it designedly. This blessing is more full than the former; it is a gospel blessing. This promise looks as high as heaven, of which Canaan was a type. That was the better country which Jacob and the other patriarchs . Genesis 28:2Arise, go to Padanaram, to the house of Bethuel your mother's father; and take you a wife from thence of the daughters of Laban your mother's brother. Genesis 28:3And God Almighty bless you, and make you fruitful, and multiply you, that you may be a multitude of people; Genesis 28:4And give you the blessing of Abraham, to you, and to your seed with you; that you may inherit the land in which you are a stranger, which God gave to Abraham. Genesis 28:5And Isaac sent away Jacob: and he went to Padanaram to Laban, son of Bethuel the Syrian, the brother of Rebekah, Jacob's and Esau's mother.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/28.htm",
        "scrapedAt": "2025-12-30T03:22:12.780Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And Isaac called Jacob, and blessed him, and charged him, and said to him, You shall not take a wife of the daughters of Canaan. Genesis 28:1-221. And Isaac called Jacob, and blessed him, and charged him, and said to him, You shall not take a wife of the daughters of Canaan. Vocavit ergo Ishac Iahacob, et benedixit ei: praecepitque, et dixit ei, Non capies Chenaan. Arise, go to Padanaram, to the house of Bethuel your mother's father; and take you a wife from thence of the daughters of Laban your mother's brother. Surge, Aram, ad domum Bethuel patris matris tuae, et cape tibi inde Laban fratris matris tuae. And God Almighty bless you, and make you fruitful, and multiply you, that you may be a multitude of people; 3. benedicat tibi, et crescere faciat to, et multiplicare faciat to, et populorum. And give you the blessing of Abraham, to you, and to your seed with you; that you may inherit the land in which you are a stranger, which God gave to Abraham. Et det tibi benedictionem Abraham, tuo tecum, ut haereditate accipias terram peregrinationum tuarum, quam dedit Deus ipsi Abraham. And Isaac sent away Jacob: and he went to Padanaram to Laban, son of Bethuel the Syrian, the brother of Rebekah, Jacob's and Esau's mother. Et misit Ishac Iahacob, et profectus filium Bethuel Aramaei fratris Ribcae, matris . When Esau saw that Isaac had blessed Jacob, and sent him away to Padanaram, to take him a wife from thence; and that as he blessed him he gave him a charge, saying, You shall not take a wife of the daughters of Canaan; 6.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/28.htm",
        "scrapedAt": "2025-12-30T03:22:15.348Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And Isaac called Jacob, and blessed him, and charged him, and said to him, You shall not take a wife of the daughters of Canaan. Isaac calls Jacob; charges him not to marry a Canaanite, but one of his -aram, Genesis 28:1,2; confirms the blessing to him, Genesis 28:3,4. Jacob obeys his father, and goes to Laban, Genesis 28:5. Esau perceiving this, marries one of his kindred, but of Ishmael's family, Genesis 28:6-9. Jacob journeys towards Haran; in his way takes of the stones of the place for pillows, Genesis 28:10,11. In a dream sees a ladder reaching from earth to heaven, angels ascending and descending on it, Genesis 28:12. The Lord standing above it, renews his covenant concerning Canaan and the promised seed, &c. , Genesis 28:13-15. Jacob awakened, acknowledges God's presence there, and is afraid, Genesis 28:16,17; sets up the stones for a pillar, pours oil on it, Genesis 28:18. Names the place Beth-el, Genesis 28:19; makes a vow to be the Lord's, if God will return , Genesis 28:20-22. 1760 Blessed him, confirmed his former blessing, being now thoroughly sensible both of God's purpose, and of his own duty, wishing him also a prosperous and successful journey, as the word is used, Joshua 22:7. Genesis 28:2Arise, go to Padanaram, to the house of Bethuel your mother's father; and take you a wife from thence of the daughters of Laban your mother's brother. The house of Bethuel. See Genesis 22:22,23 25:20. Genesis 28:3And God Almighty bless you, and make you fruitful, and multiply you, that you may be a multitude of people; No text from Poole on this verse.",
        "source": "https://biblehub.com/commentaries/poole/genesis/28.htm",
        "scrapedAt": "2025-12-30T03:22:17.904Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And Isaac called Jacob, and blessed him, and charged him, and said to him, You shall not take a wife of the daughters of Canaan. Isaac has now become alive to the real destiny of Jacob. He therefore calls for him to bless him, and give him a command. The command is to take a wife, not from Kenaan, but from the kindred of his parents. The blessing comes from \"God Almighty\" . It is that belonging to the chosen seed, \"the blessing of Abraham. \" It embraces a numerous offspring, the land of promise, and all else that is blessing of Abraham. \"A congregation of peoples. \" This is the word \"congregation\" (קהל qâhāl) which is afterward applied to the assembled people of God, and to which the Greek ἐκκλησία ekklēsia, \"ecclesia,\" corresponds. Jacob complies with his mother's advice and his father's command, and, at the same time, reaps the bitter fruit of his fraud against his hardship and treachery of an exile of twenty years. The aged Isaac is not without his unpleasant consequences of endeavoring to go against the will of God. Genesis 28:2Arise, go to Padanaram, to the house of Bethuel your mother's father; and take you a wife from thence of the daughters of Laban your mother's brother. Genesis 28:3And God Almighty bless you, and make you fruitful, and multiply you, that you may be a multitude of people; Genesis 28:4And give you the blessing of Abraham, to you, and to your seed with you; that you may inherit the land in which you are a stranger, which God gave to Abraham.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/28.htm",
        "scrapedAt": "2025-12-30T03:22:20.376Z"
      }
    ],
    "keyThemes": [
      "Heaven opened",
      "Covenant confirmed",
      "Divine presence",
      "Vow of devotion"
    ],
    "christConnection": "Jesus identifies Himself as the true ladder—the way between heaven and earth (John 1:51). Christ is the meeting place of God and humanity."
  },
  {
    "bookId": "genesis",
    "chapter": 29,
    "title": "Genesis 29",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "Then Jacob went on his journey, and came into the land of the people of the east. 29:1-8 Jacob proceeded journey, after the sweet communion he had with God at Beth-el. Providence brought him to the field where his uncle's flocks were to be watered. What is said of the care of the shepherds for their sheep, may remind us of the tender concern which our Lord Jesus, the great Shepherd of the sheep, has for his flock the church; for he is the good Shepherd, that knows his sheep, and is known of them. The stone at the well's mouth was to secure it; water was scarce, it was not there for every one's use: but separate interests should not take us from helping one another. When all the shepherds came together with their flocks, then, like loving neighbours, they watered their flocks together. The law of tongue has a commanding power, Pr 31:26. Jacob was civil to these strangers, and he found them civil to him. Genesis 29:2And he looked, and look a field, and, look, there were three flocks of sheep lying by it; for out of that well they watered the flocks: and a great stone was upon the well's mouth. Genesis 29:3And there were all the flocks gathered: and they rolled the stone from the well's mouth, and watered the sheep, and put the stone again upon the well's place. Genesis 29:4And Jacob said to them, My brothers, from where be you? And they said, Of Haran are we.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/29.htm",
        "scrapedAt": "2025-12-30T03:22:22.899Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "Then Jacob went on his journey, and came into the land of the people of the east. Genesis 29:1-351. Then Jacob went on his journey, and came into the land of the people of the east. Et levavit Iahacob pedes suos, et filiorum Orientalium. And he looked, and look a field, and, look, there were three flocks of sheep lying by it; for out of that well they watered the flocks: and a great stone was upon the well's mouth. Et vidit, et ecce agro, ecce quoque ibi tres greges pecudum, qui cubabant juxta illum: qua e puteo ipso potum dabant gregibus, et lapis os putei. And there were all the flocks gathered: and they rolled the stone from the well's mouth, and watered the sheep, and put the stone again upon the well's place. Et congregabant se illuc omnes greges, et revolvebant lapidem ab ore putei potumque dabant pecudibus: et restituebant suum. And Jacob said to them, My brothers, from where be you? And they said, Of Haran are we. Dixit Iahacob, Fratres mei unde estis? Et dixerunt, Novimus. And he said to them, Know you Laban the son of Nahor? And they said, We know him 5. Tunc , Numquid nostis Laban filium Nachor? Et dixerunt, Novimus. And he said to them, Is he well? And they said, He is well: and, look, Rachel his daughter comes with the sheep. Et , Numquid est pax ei? Et dixerunt, Pax: et ecce Rachel filia ejus . And he said, Look, it is yet high day, neither is it time that the cattle should be gathered together: water you the sheep, and go and feed them 7.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/29.htm",
        "scrapedAt": "2025-12-30T03:22:25.384Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "Then Jacob went on his journey, and came into the land of the people of the east. Jacob comes to the well of Haran, Genesis 29:1-3; inquires of the shepherds concerning Laban, Genesis 29:4-8. They show him Rachel, Laban's daughter, coming with the sheep, Genesis 29:9. Jacob goes near to her; waters the flock, Genesis 29:10; tells her who he was, Genesis 29:12. She tells it her father, who brings him to his house, hears what had happened to him, Genesis 29:12-14. They bargain that Jacob should serve seven years for Rachel, Genesis 29:15-19. He performs his service, and desires her to be given him, Genesis 29:20,21. Laban makes a feast, and invites all the men of the place, Genesis 29:22; and puts Leah, his eld daughter, in the room of Rachel, Genesis 29:23-26. Jacob obtains Rachel, promising other seven years' service, Genesis 29:27-30. Rachel is beloved and barren; Leah hated, and bears Reuben, Simeon, Levi, Judah, Genesis 29:31-35. Heb. Jacob lift up his feet; which may note either the gesture of his body, that he went on foot; or the temper of his mind, that he went not sadly and unwillingly, drawing his legs after him, as we use to say, but readily and cheerfully, being encouraged by God's word. The land of the people of the east; which lay eastward from Canaan, as Mesopotamia did. Genesis 29:2And he looked, and look a field, and, look, there were three flocks of sheep lying by it; for out of that well they watered the flocks: and a great stone was upon the well's mouth.",
        "source": "https://biblehub.com/commentaries/poole/genesis/29.htm",
        "scrapedAt": "2025-12-30T03:22:27.912Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "Then Jacob went on his journey, and came into the land of the people of the east. Jacob arrives at the well of Haran. \"The land of the sons of the east. \" The points of the heavens were defined by the usage of practical life, and not by the standard of a science yet unknown. Hence, the east means any quarter toward the sunrising. Haran was about four degrees east of Beer-sheba, and five and a half degrees north. The distance was about four hundred and fifty miles, and therefore it would take Jacob fifteen days to perform the journey at thirty miles a day. If he reached Bethel the first night, he must have travelled about fifty miles the first day. After this he proceeds on his journey without any memorable incident. In the neighborhood of Haran he comes upon a well, by which lay three flocks. This is not the well near Haran where Abraham's servant met Rebekah. It pasture grounds at some distance from the town. On its mouth was a large stone, indicating that water was precious, and that the well was the common property of the surrounding natives. The custom was to gather the flocks, roll away the stone, which was too great to be moved by a boy or a female, water the flocks, and replace the stone. Jacob, on making inquiry, learns that Haran is at hand, that Laban is well, and that Rachel is drawing nigh with her father's flocks. Laban is called by Jacob the son of Nahor, that is, his grandson, with the usual latitude of relative Genesis 28:13.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/29.htm",
        "scrapedAt": "2025-12-30T03:22:30.383Z"
      }
    ],
    "keyThemes": [
      "Reaping what you sow",
      "Divine compassion for the unloved",
      "Covenant family struggles",
      "Grace amid dysfunction"
    ],
    "christConnection": "Judah, born to unloved Leah, becomes ancestor of Christ. God builds His purposes through unexpected vessels and broken situations."
  },
  {
    "bookId": "genesis",
    "chapter": 30,
    "title": "Genesis 30",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And when Rachel saw that she bare Jacob no children, Rachel envied her sister; and said to Jacob, Give me children, or else I die. 30:1-13 Rachel envied her sister: envy is grieving at the good of another, than which no sin is more hateful to God, or more hurtful to our neighbours and ourselves. She considered not that God made the difference, and things she had the advantage. Let us carefully watch against all the risings and workings of this minds. Let not our eye be evil towards any of our fellow-servants, because our Master's is good. Jacob loved Rachel, and therefore reproved her for what she said amiss. Faithful reproofs show true affection. God may be to us instead of any creature; but it is sin and folly to place any 's stead, and to place that creature, which should be only. At the persuasion of Rachel, Jacob took Bilhah her handmaid to wife, that, according to the usage of those times, her children might be owned as her mistress's children. Had not Rachel's heart been influenced by evil passions, she would have thought her sister's children nearer to her, and more entitled to her care than Bilhah's. But children whom she had a right to rule, were more desirable to her than children she had more reason to love. As an early instance of her power over these children, she takes them names that marks of rivalry with her sister. See what roots of bitterness envy and strife are, and what mischief they make among relations.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/30.htm",
        "scrapedAt": "2025-12-30T03:22:32.926Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And when Rachel saw that she bare Jacob no children, Rachel envied her sister; and said to Jacob, Give me children, or else I die. Genesis 30:1-431. And when Rachel saw that she bare Jacob no children, Rachel envied her sister; and said to Jacob, Give me children, or else Idie. Porro vidit Rachel, quod non pareret ipsi Iahacob: et invidit Rachel sorori suae, et , Da mihi filios: sin minus, mortua sum. And Jacob's anger was kindled against Rachel: and he said, Am 's stead, who has withheld from you the fruit of the womb? 2. Et iratus est furor , et dixit, sum, qui prohibuit a to fructum ventris? 3. And she said, Look my maid Bilhah, her; and she shall bear upon my knees, that I may also have children by her 3. Et dixit, Ecce ancilla mea Bilhah, , et mea: et erit etiam mihi filius ex ea. And she gave him Bilhah her handmaid to wife: and Jacob her. Dedit ergo ei Bilhah ancillam , et ingressus Iahacob. And Bilhah conceived, and bare Jacob a son. Et concepit Bilhah, et peperit ipsi Iahacob filium. And Rachel said, God has judged me, and has also heard my voice, and has given me a son: therefore called she his name Dan. Et dixit Rachel, Iudicavit me Deus, et etiam audivit vocem meam, et dedit mihi filium. Idcirco vocavit nomen ejus Daniel 7. And Bilhah Rachel's maid conceived again, and bare Jacob a second son. Et concepit adhuc, et peperit Bilhah ancilla Rachel filium secundum ipsi Iahacob 8.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/30.htm",
        "scrapedAt": "2025-12-30T03:22:35.444Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And when Rachel saw that she bare Jacob no children, Rachel envied her sister; and said to Jacob, Give me children, or else I die. Rachel being barren, envies her sister, impatiently desires children of Jacob, Genesis 30:1. He is angry, and reproves her, Genesis 30:2. She gives him her handmaid Bilhah, who bears him Dan and Naphtali, Genesis 30:3-8. Leah ceasing to bear, gives Zilpah her maid to Jacob, Genesis 30:9. She bears him Gad and Asher, Genesis 30:10-13. Reuben, Leah's son, finds mandrakes, and brings them to his mother; Rachel desires them; they bargain, Genesis 30:14,15. Jacob Leah, who conceives again and bears Issachar, Zebulun, and Dinah, Genesis 30:16-21. God remembers Rachel; she conceives and bears Joseph, Genesis 30:22-24. Jacob desires to return to his own country with his wives and children, Genesis 30:25,26. Laban denies his consent; having learnt by experience that God had blessed him for Jacob's sake, Genesis 30:27. They make a new contract, Genesis 30:28-36. Jacob's device, and the success of it, Genesis 30:37-43. cir. 1749 A speech full of impatience, and bordering upon blasphemy, and striking at God himself through Jacob's sides; for which therefore she afterwards smarted, dying by that very means by which she hoped to prevent her death, and prolong her life, Genesis 35:18. Genesis 30:2And Jacob's anger was kindled against Rachel: and he said, Am 's stead, who has withheld from you the fruit of the womb? Jacob's anger was kindled against Rachel for the injury done to himself, and especially for the sin against God, in which case anger is not only lawful, but necessary.",
        "source": "https://biblehub.com/commentaries/poole/genesis/30.htm",
        "scrapedAt": "2025-12-30T03:22:37.970Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And when Rachel saw that she bare Jacob no children, Rachel envied her sister; and said to Jacob, Give me children, or else I die. Bilhah, Rachel's maid, bears two sons. Rachel becomes impatient of her barrenness and jealous of her sister, and unjustly reproaches her husband, who indignantly rebukes her. God, not he, has withheld children from her. She does what Sarah had done before her Genesis 16:2-3, gives her handmaid to her husband. No express law yet forbade this course, though nature and Scripture by implication did Genesis 2:23-25. \"Dan. \" \"God has judged me. \" In this passage Jacob and Rachel use the common noun, God, the Everlasting, and therefore Almighty, who physical relations of things - a name suitable to the occasion. He had judged her, dealt with her according to his sovereign the fruit of the womb, when she was self-complacent and forgetful of her dependence on a higher power; and her voice when she approached supplication. \"Naphtali. \" \"Wrestlings of God,\" with God, in prayer, on the part of both sisters, so that they wrestled with one self-same act. Rachel, though looking first to Jacob and then to her maid, had at length learned to look to her God, and then had prevailed. Genesis 30:2And Jacob's anger was kindled against Rachel: and he said, Am 's stead, who has withheld from you the fruit of the womb? Genesis 30:3And she said, Look my maid Bilhah, her; and she shall bear upon my knees, that I may also have children by her.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/30.htm",
        "scrapedAt": "2025-12-30T03:22:40.536Z"
      }
    ],
    "keyThemes": [
      "Rivalry and jealousy",
      "Twelve tribes forming",
      "God remembers",
      "Prospering through cunning"
    ],
    "christConnection": "The twelve sons become the twelve tribes of Israel, the people through whom Christ comes. Joseph, Rachel's firstborn, will become a major Christ-type."
  },
  {
    "bookId": "genesis",
    "chapter": 31,
    "title": "Genesis 31",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And he heard the words of Laban's sons, saying, Jacob has taken away all that was our father's; and of that which was our father's has he gotten all this glory. 31:1-21 The affairs of these families are related very minutely, while (what are called) the great events of states and kingdoms at that period, are not mentioned. The Bible teaches people the common duties of life, how to serve God, how to enjoy the blessings he bestows, and to do various stations and duties of life. Selfish men consider themselves robbed of all that goes past them, and covetousness will even swallow up natural affection. Men's overvaluing worldly wealth is that error which is the root of covetousness, envy, and all evil. The men of the world other's way, and every one seems to be taking away from the rest; hence discontent, envy, and discord. But there are possessions that will suffice for all; happy they who seek first place. In all our removals we should have respect to the command and promise of God. If He be with us, we need not fear. The perils which surround us are so many, that nothing else can really encourage our hearts. To remember favoured seasons of communion with God, is very refreshing ; and we should often recollect our vows, that we fail not to fulfil them. Genesis 31:2And Jacob beheld the countenance of Laban, and, look, it was not toward him as before. Genesis 31:3And the LORD said to Jacob, Return to the land of your fathers, and to your kindred; and I will be with you.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/31.htm",
        "scrapedAt": "2025-12-30T03:22:43.068Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And he heard the words of Laban's sons, saying, Jacob has taken away all that was our father's; and of that which was our father's has he gotten all this glory. Genesis 31:1-551. And he heard the words of Laban's sons, saying, Jacob has taken away all that was our father's; and of that which was our father's has he gotten all this glory. Postea audivit verba filiorum Laban dicentium, Tulit Iahacob omnia quae erant patris nostri: quae erant patris nostri, acquisivit omnem gloriam hanc. And Jacob beheld the countenance of Laban, and, look, it was not toward him as before. Et vidit Iahacob faciem Laban, et ecce eo sicut . And the LORD said to Jacob, Return to the land of your fathers, and to your kindred; and I will be with you. ad Iahacob, patrum tuorum, tuam, et ero tecum. And Jacob sent and called Rachel and Leah to the field to his flock, 4. Et Misit Iahacob, et vocavit in 5. And said to them, I see your father's countenance, that it is not toward me as before; but the God of my father has been with me. Qui , Video faciem patris vestri, quod non sit erga me sicut : mei fuit mecum. And you know that with all my power I have served your father. Et vos nostis, quod omnibus viribus meis servierim patri vestro: 7. And your father has deceived me, and changed my wages ten times; but God suffered him not to hurt me.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/31.htm",
        "scrapedAt": "2025-12-30T03:22:45.621Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And he heard the words of Laban's sons, saying, Jacob has taken away all that was our father's; and of that which was our father's has he gotten all this glory. Jacob observing Laban's envy, on God's command and promise, with the consent of his wives, departs secretly, Genesis 31:1-21. Laban pursues him; dream warns him not to treat Jacob ill; he overtakes him on Mount Gilead; taxes him sharply for his secret departure, and with stealing his gods, Genesis 31:23-30. Jacob excuses his departure, Genesis 31:31; denies the taking either gods or aught else that was Laban's, Genesis 31:32. Laban searches, but finds not, Genesis 31:33-35. Jacob is wroth, and rebukes him vehemently for all he had suffered from him, Genesis 31:36-41. He owns God as his day of his affliction, Genesis 31:42. They make a covenant, in which Laban obliges Jacob not to hurt his daughters, nor take other wives to them, Genesis 31:44-52. Jacob swears by the fear of Isaac, and offers sacrifice, Genesis 31:53,54. Laban returns to his place, Genesis 31:55. cir. 1739 These riches, which are called glory, Genesis 45:13 Psalm 49:16 Isaiah 66:12, compared with Isaiah 60:6, because their possessors use to , and by them gain glory and esteem from others. Genesis 31:2And Jacob beheld the countenance of Laban, and, look, it was not toward him as before. And this change of his countenance argued a mind, and prosaged some evil towards Jacob. Genesis 31:3And the LORD said to Jacob, Return to the land of your fathers, and to your kindred; and I will be with you.",
        "source": "https://biblehub.com/commentaries/poole/genesis/31.htm",
        "scrapedAt": "2025-12-30T03:22:48.153Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And he heard the words of Laban's sons, saying, Jacob has taken away all that was our father's; and of that which was our father's has he gotten all this glory. Circumstances at length induce Jacob to propose flight to his wives. His prosperity provokes the envy and slander of Laban's sons, and Laban himself becomes estranged. The Lord now commands Jacob to return, and promises him his presence to protect him. Jacob now opens his mind fully to Rachel and Leah. Rachel, we observe, is put first. Several new facts come discourse to them. You know - Jacob appeals to his wives on this point - \"that with all my might I served your father. \" He means, of course, to the extent of his engagement. During the last six years he was to provide for his own house, as the Lord permitted him, with the full knowledge and concurrence of Laban. Beyond this, which is a fair and acknowledged exception, he has been the cattle of Laban. \"Your father deceived me, and changed my wages ten times;\" that is, as often as he could. If, at the end of the first year, he found that Jacob had gained considerably, though he began with nothing, he might change his wages every following half-year, and so actually change them ten years. In this case, the preceding chapter only records his original expedients, and then states the final result. \"God suffered him not to hurt me. \" Jacob, we are to remember, left his hire to the providence of God.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/31.htm",
        "scrapedAt": "2025-12-30T03:22:50.673Z"
      }
    ],
    "keyThemes": [
      "Time to leave",
      "Divine protection",
      "Accounting for years of labor",
      "Covenant of separation"
    ],
    "christConnection": "God watches over Jacob despite all circumstances, ensuring the covenant line continues toward Christ."
  },
  {
    "bookId": "genesis",
    "chapter": 32,
    "title": "Genesis 32",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And Jacob went on his way, and the angels of God met him. 32:1-8 The angels of God appeared to Jacob, to encourage him with the assurance of the Divine protection. When God designs his people for great trials, he prepares them by great comforts. While Jacob, to whom the promise belonged, had service, Esau was become a prince. Jacob sent a message, showing that he did not insist upon the birth-right. Yielding pacifies great offences, Ec 10:4. We must not refuse to speak respectfully, even to those unjustly angry with us. Jacob received an account of Esau's warlike preparations against him, and was greatly afraid. A lively sense of danger, and quickening fear arising from it, may be found united with humble 's power and promise. Genesis 32:2And when Jacob saw them, he said, This is God's host: and he called the name of that place Mahanaim. Genesis 32:3And Jacob sent messengers before him to Esau his brother to the land of Seir, the country of Edom. Genesis 32:4And he commanded them, saying, Thus shall you speak to my lord Esau; Your servant Jacob says thus, I have sojourned with Laban, and stayed there until now: Genesis 32:5And I have oxen, and asses, flocks, and menservants, and womenservants: and I have sent to tell my lord, that I may find sight. Genesis 32:6And the messengers returned to Jacob, saying, We came to your brother Esau, and also he comes to meet you, and four hundred men with him. Genesis 32:7Then Jacob was greatly afraid and distressed: and he divided the people that was with him, and the flocks, and herds, and the camels, into two bands; Genesis 32:8And said, If Esau come to the one company, and smite it, then the other company which is left shall escape.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/32.htm",
        "scrapedAt": "2025-12-30T03:22:53.223Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And Jacob went on his way, and the angels of God met him. Genesis 32:1-321. And Jacob went on his way, and the angels of God met him. Postea Iahacob suam, et occurrerunt ei Angeli Dei. And when Jacob saw them, he said, This is God's host: and he called the name of that place Mahanaim. Et dixit Iahacob, quando vidit eos, Castra Dei sunt haec: et vocavit nomen loci illius Mahanaim. And Jacob sent messengers before him to Esau his brother to the land of Seir, the country of Edom. ad Esau fratrem Edom. And he commanded them, saying, Thus shall you speak to my lord Esau; Your servant Jacob says thus, I have sojourned with Laban, and stayed there until now: 4. Et praecepit eis dicendo, Sic dicentis domino meo Esau, Sic dixit servus tuus Iahacob, Cum Laban sum huc usque. And I have oxen, and asses, flocks, and menservants, and womenservants: and I have sent to tell my lord, that I may find sight. Et sunt mihi , , et ancillae, et misi ut nuntiarem domino meo, ut invenirem tuis. And the messengers returned to Jacob, saying, We came to your brother Esau, and also he comes to meet you, and four hundred men with him. , dicendo, tuum, ad Essau, et etiam tuum, et quadringenti . Then Jacob was greatly afraid and distressed: and he divided the people that was with him, and the flocks, and herds, and the camels, into two bands; 7. Et timuit Iahacob valde, et angustiis affectus est; et divisit populum, , et pecudes, et boves, et turmas.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/32.htm",
        "scrapedAt": "2025-12-30T03:22:55.764Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And Jacob went on his way, and the angels of God met him. The angels of God meet Jacob, Genesis 32:1. He calls them God's host, and the place Mahanaim, Genesis 32:2. Sends messengers to his brother Esau, Genesis 32:3-5. They return, and bring word that Esau comes to meet him with four hundred men, Genesis 32:6. Jacob is afraid; divides his people and cattle into two bands, Genesis 32:7. Gives orders concerning them, Genesis 32:8; prays to very fervent and humble manner, Genesis 32:9-12; sends presents to his brother, with directions; gets his wives and children over the ford by night, Genesis 32:13-23. Jacob wrestles with God, and prevails; is called Israel: God blesses him; he inquires after God's name; calls the place Peniel: Jacob halts, Genesis 32:24-31. The Jews' of it, Genesis 32:32. In visible, human, and glorious shape, as they frequently appeared to the patriarchs. Genesis 32:2And when Jacob saw them, he said, This is God's host: and he called the name of that place Mahanaim. God's host; so the angels are justly called for their great number, Daniel 7:10 Luke 2:13, excellent order, mighty power, and for their use and service to God, and to his church, for whose protection they are sent. See 2 Kings 6:17 Psalm 34:7. Mahanaim, i. e. two hosts; so called, either because the angels divided themselves into two companies, and placed themselves some before, others behind him, or some on each side of him, for his greater comfort and security; or because the angels made one host, and his family another.",
        "source": "https://biblehub.com/commentaries/poole/genesis/32.htm",
        "scrapedAt": "2025-12-30T03:22:58.292Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And Jacob went on his way, and the angels of God met him. Jacob has a vision of the heavenly host. This passage, recording Laban's farewell and departure, closes the connection of Jacob with Haran and all its toils of servitude, and is hence, annexed to the previous English version. In the distribution of the original text, it is regarded as the counterpart of the two following verses, in which Jacob's onward progress is mentioned, and so placed with them at the beginning of a new chapter. \"The angels of God met him. \" Twenty years ago Jacob saw the mystical ladder connecting heaven and earth, and the angels of God thereupon ascending and descending from the one to the other. Now, in circumstances of danger, he sees the angels of God on earth, encamped beside or around his own camp Psalm 34:8. He recognizes them as God's camp, and names the place Mahanaim, from the double encampment. This vision is not dwelt upon, as it is the mere sequel of the former scene at Bethel. Mahanaim has been identified with Mahneh, about eight miles from the cairn of Laban and Jacob. Genesis 32:2And when Jacob saw them, he said, This is God's host: and he called the name of that place Mahanaim. Genesis 32:3And Jacob sent messengers before him to Esau his brother to the land of Seir, the country of Edom. Genesis 32:4And he commanded them, saying, Thus shall you speak to my lord Esau; Your servant Jacob says thus, I have sojourned with Laban, and stayed there until now:Jacob now sends a message to Esau apprising him of his arrival.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/32.htm",
        "scrapedAt": "2025-12-30T03:23:00.833Z"
      }
    ],
    "keyThemes": [
      "Fear and faith",
      "Wrestling with God",
      "New identity",
      "Blessing through struggle"
    ],
    "christConnection": "Jacob's wrestling anticipates believers clinging to God in prayer. The new name \"Israel\" marks transformation by grace—foreshadowing new birth in Christ."
  },
  {
    "bookId": "genesis",
    "chapter": 33,
    "title": "Genesis 33",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And Jacob lifted up his eyes, and looked, and, look, Esau came, and with him four hundred men. And he divided the children to Leah, and to Rachel, and to the two handmaids. 33:1-16 Jacob, having by prayer committed his case to God, went on his way. Come what will, nothing can come amiss to him whose heart is fixed, . Jacob bowed to Esau. A humble, submissive behaviour goes far towards turning away wrath. Esau embraced Jacob. God has the hearts of all hands, and can turn them when and how he pleases. It is to , and to call upon day of trouble. And when a man's ways please the Lord he makes even his enemies to be at peace with him. Esau receives Jacob as a brother, and much tenderness passes between them. Esau asks, Who are those with you? To this common question, Jacob spoke like himself, like a man whose eyes are ever directed towards the Lord. Jacob urged Esau, though his fear was over, and he took his present. It is well when men's religion makes them generous, free-hearted, and open-handed. But Jacob declined Esau's offer to accompany him. It is not desirable to be too intimate with superior ungodly relations, who will expect us to vanities, or at least to wink at them, though they blame, and perhaps mock at, our religion. Such will either be a snare to us, or offended with us. We shall venture the loss of all things, rather than endanger our souls, if we know their value; rather than renounce Christ, if we truly love him.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/33.htm",
        "scrapedAt": "2025-12-30T03:23:03.369Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And Jacob lifted up his eyes, and looked, and, look, Esau came, and with him four hundred men. And he divided the children to Leah, and to Rachel, and to the two handmaids. Genesis 33:1-201. And Jacob lifted up his eyes, and looked, and, look, Esau came, and with him four hundred men. And he divided the children to Leah, and to Rachel, and to the two handmaids. oculos suos, et vidit, et ecce Esau veniebat, erant quadringenti viri: et divisit , ancillis. And he put the handmaids and their children foremost, and Leah and her children after, and Rachel and Joseph hindermost. Tunc posuit earum prius, et ejus posteriores, Ioseph postremos. And he passed over before them, and bowed himself to the ground seven times, until he came near to his brother. Et ipse , et incurvavit septem vicibus, donec appropinquaret fratri suo. And Esau ran to meet him, and embraced him, and fell on his neck, and kissed him: and they wept. Cucurrit vero ejus, et complexus est eum, et jactavit ejus, et dixit, Qui isti tibi? Et dixit, Liberi sunt, quos donavit Deus servo tuo. And he lifted up his eyes, and saw the women and the children; and said, Who are those with you? And he said, The children which God has graciously given your servant. Postea levavit oculos suos, et vidit , et dixit, Qui isti tibi? Et dixit, Liberi sunt, quos donavit Deus servo tuo. Then the handmaidens came near, they and their children, and they bowed themselves.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/33.htm",
        "scrapedAt": "2025-12-30T03:23:05.877Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And Jacob lifted up his eyes, and looked, and, look, Esau came, and with him four hundred men. And he divided the children to Leah, and to Rachel, and to the two handmaids. Jacob sets his wives and order they shall travel, Genesis 33:1,2. Meets his brother; his obeisance to him, Genesis 33:3. Esau kindly embrace Jacob, Genesis 33:4. His wives and children present themselves to Esau, Genesis 33:7. Jacob offers a present to his brother, Genesis 33:8. He refuses it, Genesis 33:9. Jacob presses him, and he accepts, Genesis 33:10,11. They part friendly, Genesis 33:12-15. Esau returns to Seir; Jacob comes to Succoth, Genesis 33:17. From thence he goes to Shalem; where he buys a field for one hundred pieces of money; builds an altar; calls it El-elohe-Israel, Genesis 33:18-20. No text from Poole on this verse. Genesis 33:2And he put the handmaids and their children foremost, and Leah and her children after, and Rachel and Joseph hindermost. Placing his best last and saf place. Genesis 33:3And he passed over before them, and bowed himself to the ground seven times, until he came near to his brother. He passed over before them, exposing himself to the first and greatest hazard for the security of his wives and children. Genesis 33:4And Esau ran to meet him, and embraced him, and fell on his neck, and kissed him: and they wept. No text from Poole on this verse. Genesis 33:5And he lifted up his eyes, and saw the women and the children; and said, Who are those with you?",
        "source": "https://biblehub.com/commentaries/poole/genesis/33.htm",
        "scrapedAt": "2025-12-30T03:23:08.386Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And Jacob lifted up his eyes, and looked, and, look, Esau came, and with him four hundred men. And he divided the children to Leah, and to Rachel, and to the two handmaids. Jacob, upon seeing Esau approach with his four hundred men, advances with circumspection and lowly obeisance. He divided his family, arranged them according to their eyes, and walks . In drawing near, he bows seven times, in token of complete submission to his older brother. Esau, the wild hunter, is completely softened, and manifests the warm affection, which is reciprocated by Jacob. The puncta extraordinaria over וישׁקהוּ vayı̂shēqēhû, \"and kissed him,\" seemingly intimating a doubt of the reading or of the sincerity of Esau, are wholly unwarranted. Esau then observes the women and children, and inquires who they are. Jacob replies that God had granted, graciously bestowed on him, these children. They , and do obeisance. Esau now inquires of the caravan or horde he had already met. He had heard the announcement of the servants; but he awaited the confirmation of the master. \"To find eyes of my lord. \" Jacob values highly the good-will of his brother. The acceptance of this present is the security for that good-will, and for all the safety and protection which it involved. Esau at first declines the gift, but on being urged by Jacob accepts it, and thereby relieves Jacob of all his anxiety. His brother is now his friend indeed. \"Therefore, have I seen your face,\" that I might give you this token of my affection.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/33.htm",
        "scrapedAt": "2025-12-30T03:23:10.901Z"
      }
    ],
    "keyThemes": [
      "Reconciliation",
      "Unexpected grace",
      "Settling in the land",
      "Worship"
    ],
    "christConnection": "Esau's merciful embrace, undeserved by Jacob, pictures the grace we receive in Christ. Enemies become brothers through divine intervention."
  },
  {
    "bookId": "genesis",
    "chapter": 34,
    "title": "Genesis 34",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And Dinah the daughter of Leah, which she bare to Jacob, went out to see the daughters of the land. 34:1-19 Young persons, especially females, are never so safe and well off as under the care of pious parents. Their own ignorance, and the flattery and artifices of designing, wicked people, who are ever laying snares for them, expose them to great danger. They are their own enemies if they desire to go abroad, especially alone, among strangers to true religion. Those parents are very wrong who do not hinder their children from needlessly exposing themselves to danger. Indulged children, like Dinah, often become a grief and shame to their families. Her pretence was, to see the daughters of the land, to see how they dressed, and how they danced, and what was fashionable among them; she went to see, yet that was not all, she went to be seen too. She went to get acquaintance with the Canaanites, and to learn their ways. See what came of Dinah's gadding. The beginning of sin is as the letting forth of water. How great a matter does a little fire kindle! We should carefully avoid all occasions of sin and approaches to it. Genesis 34:2And when Shechem the son of Hamor the Hivite, prince of the country, saw her, he took her, and lay with her, and defiled her. Genesis 34:3And his soul clave to Dinah the daughter of Jacob, and he loved the damsel, and spoke kindly to the damsel.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/34.htm",
        "scrapedAt": "2025-12-30T03:23:13.386Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And Dinah the daughter of Leah, which she bare to Jacob, went out to see the daughters of the land. Genesis 34:1-311. And Dinah the daughter of Leah, which she bare to Jacob, went out to see the daughters of the land. Et egressa est Dinah filia Leah, quam pepererat ipsi Iahacob, ut viderat filias regionis. And when Shechem the son of Hamor the Hivite, prince of the country, saw her, he took her, and lay with her, and defiled her. Et vidit eam Sechem filius Hamor Hivvaei principis terrae, et tulit eam, et , et humiliavit eam. And his soul clave to Dinah the daughter of Jacob, and he loved the damsel, and spoke kindly to the damsel. Et adhaesit anima ejus ipsi Dinah filiae Iahacob, et dilexit puellam: et loquutus puellae. And Shechem spoke to his father Hamor, saying, Get me this damsel to wife. Et dixit patrem suum, dicendo, Cape mihi puellam . And Jacob heard that he had defiled Dinah his daughter: now his sons were with his field: and Jacob held his peace until they were come. , quod violasset Dinah filiam suam: et filii ejus , et siluit Iahacob, donec venirent ipsi 6. And Hamor the father of Shechem went out to Jacob to commune with him. Egressus pater , ut . And the sons of Jacob came out of the field when they heard it: and the men were grieved, and they were very wroth, because he had wrought in lying with Jacob's daughter; which thing ought not to be done.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/34.htm",
        "scrapedAt": "2025-12-30T03:23:15.887Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And Dinah the daughter of Leah, which she bare to Jacob, went out to see the daughters of the land. Dinah going forth to see the daughters of the country, is abused and defiled by Shechem, son of Hamor, Genesis 34:1,2; who loves her, Genesis 34:3; desires to marry her, Genesis 34:4. Jacob hears it, Genesis 34:5. Hamor treats with Jacob and his sons, Genesis 34:6-12. They answered him deceitfullly, making a condition that all the males of the Shechemites should be circumcised, Genesis 34:13-17. They and their citizens consent to it, Genesis 34:18-23; are circumcised, and, when greatly, surprised and murdered by Simeon and Levi; the city is plundered by Jacob's sons; the women and children are carried away captive, Genesis 34:24-29. Jacob is exceedingly troubled and afraid, Genesis 34:30. They justify themselves, Genesis 34:31. cir. 1732 From her father's house into the city, out of curiosity, there being then, as Josephus reports, a great concourse of people to a feast. Thus she put herself out of her father's protection, and merely out of a vain humour exposed both herself and others to temptation; which was the worse, because it was amongst them that had no fear of God to restrain them from the most enormous crimes. She was now fourteen or fifteen years old. Genesis 34:2And when Shechem the son of Hamor the Hivite, prince of the country, saw her, he took her, and lay with her, and defiled her. No text from Poole on this verse. Genesis 34:3And his soul clave to Dinah the daughter of Jacob, and he loved the damsel, and spoke kindly to the damsel.",
        "source": "https://biblehub.com/commentaries/poole/genesis/34.htm",
        "scrapedAt": "2025-12-30T03:23:18.406Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And Dinah the daughter of Leah, which she bare to Jacob, went out to see the daughters of the land. Dinah went out to see the daughters of the land. The Jewish doctors of a later period fix the marriageable age of a female at twelve years and a day. It is probable that Dinah thirteenth year when she went out to visit the daughters of the land. Six or seven years, therefore, must have been spent by Jacob between Sukkoth, where he abode some time, and the neighborhood of Shekerm, where he had purchased a piece of ground. If we suppose Dinah to have been same year with Joseph, who seventeenth year at the time of his being sold as a bondslave Genesis 37:2, the events of this chapter must have interval between the completion of her twelfth and that of her sixteenth year. \"Shekem. \" This name is family, and had taken locality before the time of Abraham. The Hivite was a descendant of Kenaan. We find this tribe now occupying the district where the Kenaanite at a former period Genesis 12:6. \"Spoke to the heart of the damsel. \" After having robbed her of her honor, he promises to recognize her as his wife, provided he can gain the consent of her relatives. \"Shekem spoke to his father Hamor. \" He about this matter. \"Jacob held his peace. \" He was a land, and surrounded by a flourishing tribe, who were evidently conduct. Genesis 34:2And when Shechem the son of Hamor the Hivite, prince of the country, saw her, he took her, and lay with her, and defiled her.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/34.htm",
        "scrapedAt": "2025-12-30T03:23:20.910Z"
      }
    ],
    "keyThemes": [
      "Violence and deception",
      "Misuse of covenant sign",
      "Danger of assimilation",
      "Justice and revenge"
    ],
    "christConnection": "This dark chapter shows why Israel must remain separate. The Canaanite corruption contrasts with the holy nation God is forming for Christ."
  },
  {
    "bookId": "genesis",
    "chapter": 35,
    "title": "Genesis 35",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And God said to Jacob, Arise, go up to Bethel, and dwell there: and make there an altar to God, that appeared to you when you fledd from the face of Esau your brother. 35:1-5 Beth-el was forgotten. But as many as God loves, he will remind of neglected duties, one way or other, by conscience or by providences. When we have vowed a vow to God, it is best not to defer the payment of it; yet better late than never. Jacob commanded his household to prepare, not only for the journey and removal, but for religious services. Masters of families should use their authority to keep up families, Jos 24:15. They must put away strange gods. In families where there is a face of religion, and an altar to God, yet many times there is much amiss, and more strange gods than one would suppose. They must be clean, and change their garments. These were but outward ceremonies, signifying the purifying and change of the heart. What are clean clothes, and new clothes, without a clean heart, and a new heart? If Jacob had called for these idols sooner, they had parted with them sooner. Sometimes attempts for reformation succeed better than we could have thought. Jacob buried their images. We must be wholly separated from our sins, as we are from those that are dead and buried out of sight. He removed from Shechem to Beth-el. Though the Canaanites were very angry against the sons of Jacob for their barbarous usage of the Shechemites, yet they were so kept back by Divine power, that they could not take the opportunity now offered to avenge them.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/35.htm",
        "scrapedAt": "2025-12-30T03:23:23.417Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And God said to Jacob, Arise, go up to Bethel, and dwell there: and make there an altar to God, that appeared to you when you fledd from the face of Esau your brother. Genesis 35:1-291. And God said to Jacob, Arise, go up to Bethel, and dwell there: and make there an altar to God, that appeared to you when you fledd from the face of Esau your brother. ad Iabacob, Surge, -el, et mane ibi: et fac ibi altare Deo, qui visus est tibi, dum fugeres a facie Esau fratris tui 2. Then Jacob said to his household, and to all that were with him, Put away the strange gods that are among you, and be clean, and change your garments: 2. Et dixit Iahacob familiae suae, et omnibus qui erant secum, Removete deos alienos, qui vestri, et mundate vos, vestimentaque vestra mundate 3. And let us arise, and go up to Bethel; and I will make there an altar to God, who answered day of my distress, and was with way which Iwent. Et surgamus, et -el, et faciam illic altare Deo, qui exaudivit angustiae meae, et fuit , qua ambulavi. And they gave to Jacob all the strange gods which hand, and all their earrings which ears; and Jacob hid them under the oak which was by Shechem. Dederunt ergo ipsi Iahacob omnes deos alienos, qui sua, et inaures quae suis, et abscondit eos Iahacob subter quercum, Sechem. And they journeyed: and the terror of God was upon the cities that were round about them, and they did not pursue after the sons of Jacob 5.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/35.htm",
        "scrapedAt": "2025-12-30T03:23:25.929Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And God said to Jacob, Arise, go up to Bethel, and dwell there: and make there an altar to God, that appeared to you when you fledd from the face of Esau your brother. God commands Jacob to dwell at Beth-el, and build an altar there, Genesis 35:1. He commands his family to purge themselves from idols, and go to Beth-el, Genesis 35:2,3. They obey, Genesis 35:4. He and they go there, none pursuing them; the reason of it, Genesis 35:5,6. There he builds an altar, Genesis 35:7. The death and burial of Rebekah's nurse, Genesis 35:8. God appears to Jacob, confirms his name of Israel, renews the promises, Genesis 35:9-13. For which he sets up a pillar, pours oil thereon, and calls the place Beth-el, Genesis 35:14,15. Going thence Rachel of Benjamin, and is buried there, Genesis 35:16-20. Reuben commits father's house, Genesis 35:22. Jacob's sons' names, Genesis 35:23-26. Jacob visits his father Isaac, Genesis 35:27. His age, death, and burial, Genesis 35:28,29. This was a to comfort his disquieted mind, and convey him to a safer place. Understand, and pay your vows there time of your distress, but not yet paid; whether it was Jacob's error to forget and neglect his former vows and promises; or whether he waited for a fit time, or an admonition from God concerning the season of paying them. Genesis 35:2Then Jacob said to his household, and to all that were with him, Put away the strange gods that are among you, and be clean, and change your garments: The strange gods, the idols, which are so called here, and Deu 31:16 32:12 Joshua 24:20, because they were the gods of strange and foreign nations, such as all were accounted who were not Israelites.",
        "source": "https://biblehub.com/commentaries/poole/genesis/35.htm",
        "scrapedAt": "2025-12-30T03:23:28.456Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And God said to Jacob, Arise, go up to Bethel, and dwell there: and make there an altar to God, that appeared to you when you fledd from the face of Esau your brother. Jacob returns to Bethel. \"And God said to Jacob. \" He receives the direction from God. He had now been six years and Sleekem. There may have been some contact between him and his father's house during this interval. The presence of Deborah, Rebekah's nurse, in his family, is a plain intimation of this. But Jacob seems to have turned aside to Shekem, either to visit the spot where Abraham first erected an altar to the Lord, or to seek pasture for his numerous flocks. \"Arise, go up to Bethel, and dwell there. \" In his perplexity and terror the Lord comes to his aid. He reminds him of his former appearance to him at that place, and directs him to erect an altar there. This was Abraham's second resting- land. He who had there appeared to Jacob as the Yahweh, the God of Abraham and Isaac, is now described as (house of El), the Mighty One, to Bethel (house of El), which contains this name, and was at that time applied by Jacob himself to the place. \"His house;\" his wives and children. \"All that were with him;\" his men-servants and maid-servants. The strange gods, belonging to the stranger or the strange land. These include the teraphim, which Rachel had secreted, and the rings which were worn as amulets or charms.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/35.htm",
        "scrapedAt": "2025-12-30T03:23:30.956Z"
      }
    ],
    "keyThemes": [
      "Covenant renewal",
      "Purging idols",
      "Death and birth",
      "Twelve tribes complete"
    ],
    "christConnection": "At Bethel, God confirms \"a nation and assembly of nations\" will come from Jacob—fulfilled in both Israel and the Church gathered in Christ."
  },
  {
    "bookId": "genesis",
    "chapter": 36,
    "title": "Genesis 36",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "Now these are the generations of Esau, who is Edom. 36:1-43 Esau and his descendants. - The chapter show the faithfulness of God to his promise to Abraham. Esau is here called Edom, that name which kept up the remembrance of his selling his birth-right for a mess of pottage. Esau continued the same profane despiser of heavenly things. In outward prosperity and honour, the children of the covenant are often behind, and those that are out of the covenant get the start. We may suppose it a trial to the faith of God's Israel, to hear of the pomp and power of the kings of Edom, while they were bond-; but those that look for great things from God, must be content to wait for them; God's time is the best time. Mount Seir is called the land of their possession. Canaan was at this time only the land of promise. Seir possession of the Edomites. The children of this world have their , and , Lu 16:25; while the children of God have their , and next to . But, all things considered, it is beyond compare better to have , than mount . Genesis 36:2Esau took his wives of the daughters of Canaan; Adah the daughter of Elon the Hittite, and Aholibamah the daughter of Anah the daughter of Zibeon the Hivite; Genesis 36:3And Bashemath Ishmael's daughter, sister of Nebajoth. Genesis 36:4And Adah bare to Esau Eliphaz; and Bashemath bare Reuel; Genesis 36:5And Aholibamah bare Jeush, and Jaalam, and Korah: these are the sons of Esau, which were born to land of Canaan.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/36.htm",
        "scrapedAt": "2025-12-30T03:23:33.428Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "Now these are the generations of Esau, who is Edom. Genesis 36:1-431 Now these are the generations of Esau, who is Edom. Istae vero sunt generationes Esau, hic est Edom. Esau took his wives of the daughters of Canaan; Adah the daughter of Elon the Hittite, and Aholibamah the daughter of Anah the daughter of Zibeon the Hivite; 2. Esau accepit uxores suas e filiabus Chenaan, Hadah filiam Elon Hittaei, et Aholibamah filiam Anah, filiam Sibhon Hivvaei, 3. And Bashemath Ishmael's daughter, sister of Nebajoth. Et Bosmath filiam Ismael sororem Nebajoth. And Adah bare to Esau Eliphaz; and Bashemath bare Reuel; 4. Et peperit Adah ipsi Esau Eliphaz: et Bosmath peperit Rehuel. And Aholibamah bare Jeush, and Jaalam, and Korah: these are the sons of Esau, which were born to land of Canaan. Et Aholibamah peperit Jehus, et Jahalam, et Corah: isti filii Esau, qui nati sunt Chenaan. And Esau took his wives, and his sons, and his daughters, and all the persons of his house, and his cattle, and all his beasts, and all his substance, which he had land of Canaan; and went into the country from the face of his brother Jacob. Et accepit Esau uxores suas, et filios suos, et filias suas, et omnes animas domus suae, et pecudes suas, et omnia jumenta sua, et omnem acquisitionem suam, quam Chenaan: et profectus terram a facie Iahacob fratris sui. For their riches were more than that they might dwell together; and the land in which they were strangers could not bear them because of their cattle.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/36.htm",
        "scrapedAt": "2025-12-30T03:23:35.951Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "Now these are the generations of Esau, who is Edom. Esau's wives and children , Genesis 36:1-5. They remove from Jacob to Seir; the reason, Genesis 36:6-8. His posterity, Genesis 36:9-19; as also that of Seir the Horite, Genesis 36:20; among whom is Anah, who first found out wilderness, Genesis 36:24. His children, Genesis 36:25-30. A catalogue of kings and , Genesis 36:31-43. 1796 They are here mentioned partly to show the effect of his father's blessing, Genesis 27:39; partly that the Israelites might be admonished to treat the Edomites like brothers, and not to invade their land. See Deu 23:7. Genesis 36:2Esau took his wives of the daughters of Canaan; Adah the daughter of Elon the Hittite, and Aholibamah the daughter of Anah the daughter of Zibeon the Hivite; If this account be compared with that Genesis 26:34, we shall find some difficulties, which yet admit of an easy reconciliation, if these things be considered. That it is very usual, and confessed by all, that the same persons are oft called by several names. That the names of some persons given to others, because of a great resemblance between them. Upon which account the parents of the Israelites are called Armorites and Hittites, Ezekiel 16:3; and the governors of Jerusalem are called the rulers of Sodom and Gomorrah, Isaiah 1:10; and John the Baptist is called Elias, Matthew 17:12. That the same men ere ofttimes denominated from several countries, as Christ is noted to have a threefold ; Bethlehem by his birth, Nazareth by his education, and Capernaum by his much residence and preaching there.",
        "source": "https://biblehub.com/commentaries/poole/genesis/36.htm",
        "scrapedAt": "2025-12-30T03:23:38.444Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "Now these are the generations of Esau, who is Edom. This passage is introductory, and records the settlement of Esau with his Seir. \"Esau, who is Edom. \" This is a fact of which we were previous history Genesis 25:25, Genesis 25:30. It is mentioned here because the latter name gave origin to the national designation; namely, the Edomites or Idumaeans. The occurrence of this explanatory or definitive clause here parts of this chapter throws light on the this work was composed. Such parenthetical explanations are sometimes ascribed to the reviser or redactor of the original text. And to this there is no theoretic objection, provided the reviser be allowed to be of equal authority with the original author, and the explanatory addition be necessary for the reader of a later period, and could not have been furnished by the original author. Otherwise, such a mode of accounting for these simple clauses is unnecessary, and therefore, unwarrantable. The present case the writer has already explained, and the lat reader requires the clause no more than the earli, as he is aware from the previous notices that Esau is Edom. We are thus led to regard these explanatory clauses as marks of an early or artless simplicity of style, and not as any clear or certain traces of revision. Genesis 36:2Esau took his wives of the daughters of Canaan; Adah the daughter of Elon the Hittite, and Aholibamah the daughter of Anah the daughter of Zibeon the Hivite;Esau took his wives.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/36.htm",
        "scrapedAt": "2025-12-30T03:23:40.934Z"
      }
    ],
    "keyThemes": [
      "Separation of lines",
      "Edomite nation",
      "Temporal prosperity",
      "Jacob's line preserved"
    ],
    "christConnection": "While Esau's line prospers quickly, the covenant promise remains with Jacob. Christ comes not through worldly success but through the chosen line of faith."
  },
  {
    "bookId": "genesis",
    "chapter": 37,
    "title": "Genesis 37",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And Jacob land in which his father was a stranger, in the land of Canaan. 37:1-4 In Joseph's history we see something of Christ, who was first humbled and then exalted. It also shows the lot of Christians, who must through many tribulations enter into the kingdom. It is a history that has none like it, for displaying the various workings of the human mind, both good and bad, and the singular providence of use of them for fulfilling his purposes. Though Joseph was his father's darling, yet he was not bred . Those do not truly love their children, who do not use them to business, and labour, and hardships. The fondling of children is with good reason called the spoiling of them. Those who are trained up to do nothing, are likely to be good for nothing. But Jacob made known his love, by dressing Joseph finer than the rest of his children. It is wrong for parents to make a difference between one child and another, unless there is great cause for it, by the children's dutifulness, or undutifulness. When parents make a difference, children soon notice it, and it leads to . Jacob's sons did that, when they were from under his eye, which they durst not have done at home with him; but Joseph gave his father an account of their ill conduct, that he might restrain them. Not as a tale-bearer, to sow discord, but as a faithful brother. Genesis 37:2These are the generations of Jacob.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/37.htm",
        "scrapedAt": "2025-12-30T03:23:43.410Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And Jacob land in which his father was a stranger, in the land of Canaan. Genesis 37:1-361. And Jacob land in which his father was a stranger, in the land of Canaan. Habitavit itaque peregrinationum patris sui, in terra Chenaan. These are the generations of Jacob. Joseph, being seventeen years old, was feeding the flock with his brothers; and the lad was with the sons of Bilhah, and with the sons of Zilpah, his father's wives: and Joseph brought to his father their evil report. Istae sunt generationes Iahacob. Joseph filius septendecim annorum suis pecudes, cum filiis filiis Zilpah uxorum patris sui: et retulit Ioseph obloquutionem eorum malam patri eorum. Now Israel loved Joseph more than all his children, because he was the son of his old age: and he made him a coat of many colours. Porro Israel diligebat Joseph prae cunctis filiis suis, quia filius : et fecerat ei tunicam multicolorem. And when his brothers saw that their father loved him more than all his brothers, they hated him, and could not speak peaceably to him. Et viderunt fratres ejus, quod eum diligeret pater eorum prae cunctis fratribus ejus, et odio habebant eum, et non poterant alloqui eum pacifice. And Joseph dreamed a dream, and he told it his brothers: and they hated him yet the more. somnium, et nuntiavit fratribus suis: et addiderunt amplius odio habere eum. And he said to them, Hear, I pray you, this dream which I have dreamed: 6. Dixit , Audite quaeso somnium hoc quod somniavi.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/37.htm",
        "scrapedAt": "2025-12-30T03:23:46.133Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And Jacob land in which his father was a stranger, in the land of Canaan. Jacob : Joseph brings to his father an ill report of his brothers, Genesis 37:2. He loves, they hate him, Genesis 37:3,4; the more because of his dreams which he told them, Genesis 37:5. His first dream, Genesis 37:7. His brothers interpret it, and their hatred increases, Genesis 37:8. His second dream, Genesis 37:9. Tells it to his father, who rebukes him, but observes his saying, Genesis 37:10,11. He is sent by his father to seek after his brothers, Genesis 37:13-17. They seeing him, conspire his death, Genesis 37:18-20. But upon the intercession of Reuben they strip and throw him into a pit, Genesis 37:21-24. Some Ishmeelites passing by, by Judah's advice they sell him to them, who carry him into Egypt, Genesis 37:25-28. Reuben is concerned for him, Genesis 37:29,30. Their contrivance to deceive Jacob, Genesis 37:31,32. His grief for the loss of Joseph, Genesis 37:33-35. Joseph sold to Potiphar, an , Genesis 37:36. 1729 No text from Poole on this verse. Genesis 37:2These are the generations of Jacob. Joseph, being seventeen years old, was feeding the flock with his brothers; and the lad was with the sons of Bilhah, and with the sons of Zilpah, his father's wives: and Joseph brought to his father their evil report. The generations, i. e. the events or occurrences which happened to family and issue. So that word is used Genesis 6:9 Numbers 3:1. Or the word these may relate to what is said Genesis 35:22, &c.",
        "source": "https://biblehub.com/commentaries/poole/genesis/37.htm",
        "scrapedAt": "2025-12-30T03:23:48.615Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And Jacob land in which his father was a stranger, in the land of Canaan. Joseph is the favorite of his father, but not of his brothers. \"In the land of his father's sojournings. \" This contrasts Jacob with Esau, who removed to Mount Seir. This notice precedes the phrase, \"These are the generations. \" The corresponding case of Isaac is placed at the end of the preceding section of the narrative Genesis 25:11. \"The son of seventeen years;\" in his seventeenth year Genesis 37:32. \"The sons of Bilhah. \" The sons of the handmaids were nearer his own age, and perhaps more tolerant of the favorite than the sons of Leah the free wife. Benjamin at this time was about four years of age. \"An evil report of them. \" The unsophisticated child of home is disapproval of evil, and avowal of his feelings. What the evil was we are not informed; but Jacob's full-grown sons were now far from the paternal eye, and prone, as it seems, to give way to temptation. Many scandals come out to chosen family. \"Loved Joseph. \" He was the son of his best-loved wife, and of his old age; as Benjamin had not yet come into much notice. \"A Coat of many colors. \" This was a coat reaching to the hands and feet, worn by persons not much occupied with manual labor, according to the general opinion. It was, we conceive, variegated either by the loom or the needle, and is therefore, well rendered χιτὼν ποικίλος chitōn poikilos, a motley coat.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/37.htm",
        "scrapedAt": "2025-12-30T03:23:51.126Z"
      }
    ],
    "keyThemes": [
      "Divine dreams",
      "Envy and hatred",
      "Suffering of the beloved son",
      "Providence beginning"
    ],
    "christConnection": "Joseph is betrayed for silver, stripped of his robe, and given up for dead—foreshadowing Christ's betrayal, humiliation, and apparent defeat."
  },
  {
    "bookId": "genesis",
    "chapter": 38,
    "title": "Genesis 38",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And it came to pass at that time, that Judah went down from his brothers, and a certain Adullamite, whose name was Hirah. 38:1-30 The profligate conduct of Judah and his family. - This chapter gives an account of Judah and his family, and such an account it is, that it seems a wonder that of all Jacob's sons, our Lord should spring out of Judah, Heb 7:14. But God will show that his choice is of grace and not of merit, and that Christ came into the world to save sinners, even the chief. Also, that the worthiness of Christ is of himself, and not from his ancestors. How little reason had the Jews, who were so called from this Judah, to boast as they did, Joh 8:41. What awful examples the Lord punishments, of his utter displeasure at sin! Let us seek grace from God to avoid every appearance of sin. And let that state of humbleness to which Jesus submitted, when he came to put away sin by the sacrifice of himself, in appointing such characters as those here recorded, to be his ancestors, endear the Redeemer to our hearts. Genesis 38:2And Judah saw there a daughter of a certain Canaanite, whose name was Shuah; and he took her, and her. Genesis 38:3And she conceived, and bare a son; and he called his name Er. Genesis 38:4And she conceived again, and bare a son; and she called his name Onan. Genesis 38:5And she yet again conceived, and bare a son; and called his name Shelah: and he was at Chezib, when she bare him.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/38.htm",
        "scrapedAt": "2025-12-30T03:23:53.610Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And it came to pass at that time, that Judah went down from his brothers, and a certain Adullamite, whose name was Hirah. Genesis 38:1-301. And it came to pass at that time, that Judah went down from his brothers, and a certain Adullamite, whose name was Hirah. illo descendit Jehudah a fratribus suis, et Hadullamitem, et nomen ejus Hirah. And Judah saw there a daughter of a certain Canaanite, whose name was Shuah; and he took her, and her. Et vidit ibi Jehudah filiam viri Chenaanaei: et nomen ejus Suah: qui accepit eam, et ingressus . And she conceived, and bare a son; and he called his name Er. Quae concepit, et peperit filium, et vocavit nomen ejus Her. And she conceived again, and bare a son; and she called his name Onan. Et concepit adhuc, et peperit filium, et vocavit nomen ejus Onan. And she yet again conceived, and bare a son; and called his name Shelah: and he was at Chezib, when she bare him. Et addidit adhuc, et peperit filium, et vocavit nomen ejus Salah: Chezib, quando hunc ipsa peperit. And Judah took a wife for Er his firstborn, whose name was Tamar. Et accepit Jehudah uxorem ipsi Her primogenito suo, et nomen ejus Thamar. And Er, Judah's firstborn, was sight of the LORD; and the LORD slew him. primogenitus Jehudah Jehovae, ideo interemit eum Jehova. And Judah said to Onan, your brother's wife, and marry her, and raise up seed to your brother. Et dixit , fratris tui, et affinitatem , et suscita semen fratri tuo.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/38.htm",
        "scrapedAt": "2025-12-30T03:23:56.130Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And it came to pass at that time, that Judah went down from his brothers, and a certain Adullamite, whose name was Hirah. Judah marries a Canaanitish woman, who bears him three sons, Genesis 38:1-5. He marries his eld son to Tamar, Genesis 38:6. He being wicked is slain by God, Genesis 38:7. The second son is commanded to marry her, Genesis 38:8. His wickedness, Genesis 38:9; and death, Genesis 38:10. He promises her his third son, but performs not, Genesis 38:11. She by a subtle practice commits inc with him, Genesis 38:13. He gives her a pledge, Genesis 38:18. She is found with child; Judah commands her to be burnt, Genesis 38:24. She brings to her father the pledge, Genesis 38:25. He acknowledges it; acquits her, and condemns himself, Genesis 38:26. She brings forth two sons, Genesis 38:27-30. This story is not without difficulty, if we consider how little time is allowed for all the events of this chapter, there being not above twenty-three years between Judah's marriage and the birth of Pharez, yes, and the birth of his sons too, Hezron and Hamul, who are said to go into Egypt with Jacob, Genesis 46:12. But there are two ways proposed for the resolution of it, as the phrase, at that time, may be understood two ways; either, 1. More largely, for the time since Jacob's return from Padan to Canaan, and so the history may be conceived thus, Judah was married some years before the selling of Joseph, though it be here mentioned after it, and so out of its place, as being the foundation of all the following events, which are here placed together, because they followed the selling of Joseph.",
        "source": "https://biblehub.com/commentaries/poole/genesis/38.htm",
        "scrapedAt": "2025-12-30T03:23:58.613Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And it came to pass at that time, that Judah went down from his brothers, and a certain Adullamite, whose name was Hirah. Judah marries and has three sons. \"Went down from brothers. \" This seems to have been an act of willful . His separation from his brothers, however, extends only to the matter of his new connection. In regard to property and employment there seems to have been no long or entire separation until they went down into Egypt. He went down from the high grounds about Shekem to the Adullam was situated Joshua 15:33-35. \"A certain Adullamite. \" He may have become acquainted with this Hirah, when visiting his grandfather, of the caravans which were constantly passing Shekem, or ordinary wanderings of the pastoral life. Adullam Shephelah or lowland of Judah bordering on Philistia proper. \"A certain Kenaanite. \" This connection with Shua's daughter was contrary to the will of God and the example of his fathers. Onan was born, we conceive, in Judah's fifteenth year, and sixteenth. At Kezib. - This appears the same as Akzib, which is associated with Keilah and Mareshah Joshua 15:44, and therefore, south of the lowland of Judah. This note of place indicates a change of residence since her other children were born. In the year after this birth the dishonor of Dinah takes place. \"Took a wife for Er. \" Judah chose a wife for himself at an early age, and now he chooses for his first-born at the same age.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/38.htm",
        "scrapedAt": "2025-12-30T03:24:01.145Z"
      }
    ],
    "keyThemes": [
      "Sin and judgment",
      "Levirate duty",
      "Righteousness of Tamar",
      "Grace in the lineage"
    ],
    "christConnection": "Through this scandalous story, Perez enters Christ's genealogy (Matt 1:3). God works through broken people and situations to accomplish redemption."
  },
  {
    "bookId": "genesis",
    "chapter": 39,
    "title": "Genesis 39",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And Joseph was brought down to Egypt; and Potiphar, an officer of Pharaoh, captain of the guard, an Egyptian, bought him of the hands of the Ishmeelites, which had brought him down there. 39:1-6 Our enemies may strip us of outward distinctions and ornaments; but wisdom and grace cannot be taken from us. They may separate us from friends, relatives, and country; but they cannot take from us the presence of the Lord. They may shut us from outward blessings, rob us of liberty, and confine ; but they cannot shut us out from communion with God, from the throne of grace, or take from us the blessings of salvation. Joseph was blessed, wonderfully blessed, house where he was a slave. God's presence with us, makes all we do prosperous. Good men are the blessings of the place where they live; good servants may be so, though mean and lightly esteemed. The prosperity of the wicked is, one way or other, for the sake of the godly. Here was a wicked family blessed for the sake of one good . Genesis 39:2And the LORD was with Joseph, and he was a prosperous man; and he house of his master the Egyptian. Genesis 39:3And his master saw that the LORD was with him, and that the LORD made all that he did to hand. Genesis 39:4And Joseph found sight, and he served him: and he made him overseer over his house, and all that he had he put into his hand.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/39.htm",
        "scrapedAt": "2025-12-30T03:24:03.678Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And Joseph was brought down to Egypt; and Potiphar, an officer of Pharaoh, captain of the guard, an Egyptian, bought him of the hands of the Ishmeelites, which had brought him down there. Genesis 39:1-231. And Joseph was brought down to Egypt; and Potiphar, an officer of Pharaoh, captain of the guard, an Egyptian, bought him of the hands of the Ishmeelites, which had brought him down there. , et emit eum Potiphar princeps Pharaonis, princeps satellitum, vir Aegyptius, e manu Ismaelitarum, qui deduxerant eum illuc. And the LORD was with Joseph, and he was a prosperous man; and he house of his master the Egyptian. Et fuit : itaque fuit vir prospere agens, domini sui Aegyptii. And his master saw that the LORD was with him, and that the LORD made all that he did to hand. Et vidit dominus ejus, quod Iehova : et omnia quae ipse facie bat, Iehova ejus. And Joseph found sight, and he served him: and he made him overseer over his house, and all that he had he put into his hand. Et envenit Joseph ejus, et ministrabat ei: et praeposuit eum domui suae: et omnia quae erant ei, ejus. And it came to pass from the time that he had made him house, and over all that he had, that the LORD blessed the Egyptian's house for Joseph's sake; and the blessing of the LORD was upon all that he house, field. eo tempore, quo praeposuit eum domui suae, et omnibus quae erant ei, benedixit Iehova domui Aegyptii propter Joseph: et fuit benedictio , euae erant .",
        "source": "https://biblehub.com/commentaries/calvin/genesis/39.htm",
        "scrapedAt": "2025-12-30T03:24:06.157Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And Joseph was brought down to Egypt; and Potiphar, an officer of Pharaoh, captain of the guard, an Egyptian, bought him of the hands of the Ishmeelites, which had brought him down there. God prospers 's service, Genesis 39:1,2. Potiphar observes it, and sets him over all his house, Genesis 39:3-6. He is a goodly person, and his mistress solicits him to lie with her, Genesis 39:7. He abhorring the ingratitude against his master, and sin against God, constantly refuses, Genesis 39:8-10. They house alone, she seizes his coat, which he leaves with her, and fled, Genesis 39:11-13. She accuses him first to the servants, Genesis 39:14,15; then to his master, Genesis 39:16-18, who casts him into prison, Genesis 39:19,20. The Lord is with him there; he finds favour with the keeper; is set over the prisoners, and prospers, Genesis 39:21-23. 1729 The Lord was with Joseph, with his gracious presence and blessing, as this phrase is taken here, Genesis 39:21 21:22 26:24. He house of his master: he does not endeavour to make an escape to his father, but demeaned himself patiently and station into which God's providence had brought him. Genesis 39:2And the LORD was with Joseph, and he was a prosperous man; and he house of his master the Egyptian. No text from Poole on this verse. The Lord was with Joseph, with his gracious presence and blessing, as this phrase is taken here, Genesis 39:21 21:22 26:24. He house of his master: he does not edeavour to make an escape to his father, but demeaned himself patiently and station into which God's providence had brought him.",
        "source": "https://biblehub.com/commentaries/poole/genesis/39.htm",
        "scrapedAt": "2025-12-30T03:24:08.664Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And Joseph was brought down to Egypt; and Potiphar, an officer of Pharaoh, captain of the guard, an Egyptian, bought him of the hands of the Ishmeelites, which had brought him down there. Joseph fares well with his first master. \"Potiphar. \" This is a racapitulation of the 37:\"The Lord;\" the God of covenant is with Joseph. \"In the house. \" Joseph was a domestic servant. \"And his master saw. \" The prosperity that attended all Joseph's doings was so striking as to show that the Lord was with him. \"Set him over\" - made him overseer of all that house. \"The Lord blessed the Mizrite's house. \" He blesses those who bless his own Genesis 12:3. \" and look\" Genesis 29:17. This prepares the way for the following occurrence. Genesis 39:2And the LORD was with Joseph, and he was a prosperous man; and he house of his master the Egyptian. Genesis 39:3And his master saw that the LORD was with him, and that the LORD made all that he did to hand. Genesis 39:4And Joseph found sight, and he served him: and he made him overseer over his house, and all that he had he put into his hand. Genesis 39:5And it came to pass from the time that he had made him house, and over all that he had, that the LORD blessed the Egyptian's house for Joseph's sake; and the blessing of the LORD was upon all that he house, field. Genesis 39:6And he left all that he 's hand; and he knew not ought he had, save the bread which he did eat.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/39.htm",
        "scrapedAt": "2025-12-30T03:24:11.235Z"
      }
    ],
    "keyThemes": [
      "God's presence",
      "Integrity under temptation",
      "False accusation",
      "Faithful in adversity"
    ],
    "christConnection": "Joseph's unjust suffering for righteousness' sake anticipates Christ, who was falsely accused yet remained faithful to the Father."
  },
  {
    "bookId": "genesis",
    "chapter": 40,
    "title": "Genesis 40",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And it came to pass after these things, that the butler of the king of Egypt and his baker had offended their lord the king of Egypt. 40:1-19 It was not so much the prison that made the butler and baker sad, as their dreams. God has more ways than one to sadden the spirits. Joseph had compassion towards them. Let us be concerned for the sadness of our brothers's countenances. It is often a relief to those that to be noticed. Also learn to look into the causes of our own sorrow. Is there a good reason? Is there not comfort sufficient to balance it, whatever it is? Why are you cast down, O my soul? Joseph was careful to ascribe the glory to God. The chief butler's dream foretold his advancement. The chief baker's dream his death. It was not Joseph's fault that he brought the baker no better tidings. And thus ministers are but interpreters; they cannot make the thing otherwise than it is: if they deal faithfully, and their message prove unpleasing, it is not their fault. Joseph does not reflect upon his brothers that sold him; nor does he reflect on the wrong done him by his mistress and his master, but mildly states his own innocence. When we are called on to clear ourselves, we should carefully avoid, as much as may be, speaking ill of others. Let us be content to prove ourselves innocent, and not upbraid others with their guilt. Genesis 40:2And Pharaoh was wroth against two of his officers, against the chief of the butlers, and against the chief of the bakers.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/40.htm",
        "scrapedAt": "2025-12-30T03:24:13.705Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And it came to pass after these things, that the butler of the king of Egypt and his baker had offended their lord the king of Egypt. Genesis 40:1-231. And it came to pass after these things, that the butler of the king of Egypt and his baker had offended their lord the king of Egypt. Fuit autem, posthaec peccaverunt pincerna regis AEgypti, et suum regem. Aegypti, et pistor conra dominum suum regen. Aegypti. And Pharaoh was wroth against two of his officers, against the chief of the butlers, and against the chief of the bakers. Itaque iratus est satrapam suum, contra principem principem pistorum. And he put in the house of the captain of the guard, into the prison, the place where Joseph was bound. Et posuit domus principis satellitum, in domo carceris, in Joseph vinctus erat. And the captain of the guard charged Joseph with them, and he served them: and they continued a . Et praeposuit princeps satellitum ipsum Joseph eis, et ministrabat eis: . And they dreamed a dream both of them, each man his night, each man according to the interpretation of his dream, the butler and the baker of the king of Egypt, which were prison. Porro somniaverunt somnium uterque ipsorum, puisque somnium suum nocte eadem: singuli secundum interpretationem somnii sui, qui fuerant regi Aegypti, qui erant carceris. And Joseph morning, and looked upon them, and, look, they were sad. Et Joseph mane, et vidit eos, et ecce, erant tristitia affecti. And he asked Pharaoh's officers that were with ward of his lord's house, saying, Therefore look you so sadly to day?",
        "source": "https://biblehub.com/commentaries/calvin/genesis/40.htm",
        "scrapedAt": "2025-12-30T03:24:16.202Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And it came to pass after these things, that the butler of the king of Egypt and his baker had offended their lord the king of Egypt. Pharaoh's chief butler and baker are put into prison, and committed to Joseph, Genesis 40:1-4. They dream, and are sad, Genesis 40:5,6. He asks the reason, Genesis 40:7. Their answer, and Joseph's reply, Genesis 40:8. The chief butler tells his dream, Genesis 40:9-11. Joseph interprets it of his restoration, and desires him to be mindful of him, Genesis 40:12-15. The chief baker also tells his dream, Genesis 40:16,17. Joseph interprets it, Genesis 40:18,19. Both made good by the event, Genesis 40:20-22. The butler forgets Joseph, Genesis 40:23. 1720 No text from Poole on this verse. Genesis 40:2And Pharaoh was wroth against two of his officers, against the chief of the butlers, and against the chief of the bakers. No text from Poole on this verse. Genesis 40:3And he put in the house of the captain of the guard, into the prison, the place where Joseph was bound. The captain of the guard, to wit, Potiphar, Genesis 37:36, who being informed by his underkeeper of Joseph's great care and faithfulness, began to have a better opinion of him, though for his own quiet, and his wife's reputation, he left him prison. Where Joseph was bound; was a prisoner, as that word is used, Isaiah 22:3; for Joseph being now made governor of the prisoners, was doubtless freed from his bonds: or had been bound, and that with cruel manner, Psalm 105:18.",
        "source": "https://biblehub.com/commentaries/poole/genesis/40.htm",
        "scrapedAt": "2025-12-30T03:24:18.669Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And it came to pass after these things, that the butler of the king of Egypt and his baker had offended their lord the king of Egypt. The chief butler and chief baker, high 's court, come under the displeasure of their sovereign. \"In the house of the captain of the guards. \" It appears that this officer's establishment contained the Joseph and these criminals were confined. \"Charged Joseph with them. \" As Joseph was his slave, and these were state prisoners, he appointed him to wait upon them. It is probable that Joseph's character had been somewhat re-established with him during his prison. Genesis 40:2And Pharaoh was wroth against two of his officers, against the chief of the butlers, and against the chief of the bakers. Genesis 40:3And he put in the house of the captain of the guard, into the prison, the place where Joseph was bound. Genesis 40:4And the captain of the guard charged Joseph with them, and he served them: and they continued a . Genesis 40:5And they dreamed a dream both of them, each man his night, each man according to the interpretation of his dream, the butler and the baker of the king of Egypt, which were prison. These prisoners dream, \"each according to the interpretation of his dream,\" the imagery of which was suited to indicate his future state. They were sad - anxious to know the meaning of these impressive dreams. \"Why are your forces bad today? \" Joseph keeps up his character of frank composure.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/40.htm",
        "scrapedAt": "2025-12-30T03:24:21.208Z"
      }
    ],
    "keyThemes": [
      "God reveals secrets",
      "Faithfulness in obscurity",
      "Human forgetfulness",
      "God's timing"
    ],
    "christConnection": "Joseph's ability to interpret dreams demonstrates that \"salvation is of the LORD.\" He waits in suffering, trusting God's timing—like Christ in the tomb."
  },
  {
    "bookId": "genesis",
    "chapter": 41,
    "title": "Genesis 41",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And it came to pass at the end of two full years, that Pharaoh dreamed: and, look, he stood by the river. 41:1-8 The means of Joseph's being freed from prison were Pharaoh's dreams, as here related. Now that God no longer speaks to way, it is no matter how little we either heed dreams, or tell them. The telling of foolish dreams can make no better than foolish talk. But these dreams showed that they were sent of God; when he awoke, Pharaoh's spirit was troubled. Genesis 41:2And, look, there came up out of the river seven well favoured cattle and fatfleshed; and they meadow. Genesis 41:3And, look, seven other cattle came up after them out of the river, ill favoured and leanfleshed; and stood by the other cattle upon the brink of the river. Genesis 41:4And the ill favoured and leanfleshed cattle did eat up the seven well favoured and fat cattle. So Pharaoh awoke. Genesis 41:5And he slept and dreamed the second time: and, look, seven ears of corn came up upon one stalk, rank and good. Genesis 41:6And, look, seven thin ears and blasted with the east wind sprung up after them. Genesis 41:7And the seven thin ears devoured the seven rank and full ears. And Pharaoh awoke, and, look, it was a dream. Genesis 41:8And it came to morning that his spirit was troubled; and he sent and called for all the magicians of Egypt, and all the wise men of it: and Pharaoh told them his dream; but there was none that could interpret them to Pharaoh.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/41.htm",
        "scrapedAt": "2025-12-30T03:24:23.712Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And it came to pass at the end of two full years, that Pharaoh dreamed: and, look, he stood by the river. Genesis 41:1-571. And it came to pass at the end of two full years, that Pharaoh dreamed: and, look, he stood by the river. Verum duorum annorum dierum, Pharao somniavit, et ecce, stabat juxta flumen. And, look, there came up out of the river seven well favoured cattle and fatfleshed; and they meadow. flumine ascendebant septem vaccae pulchrae aspectu, et pingues carne, et . And, look, seven other cattle came up after them out of the river, ill favoured and leanfleshed; and stood by the other cattle upon the brink of the river. Et ecce, septem vaccae aliae e flumine, turpes aspectu, et tenues carne, et stabant juxta vaccas, quoe erant juxta ripam fluminis. And the ill favoured and leanfleshed cattle did eat up the seven well favoured and fat cattle. So Pharaoh awoke. Et comederunt vaccae turpes aspectu, et tenues carne, septem vaccas pulchras : et expergefactus est Pharao. And he slept and dreamed the second time: and, look, seven ears of corn came up upon one stalk, rank and good. Deinde dormivit, et somniavit secundo, et ecce, septem spicae uno . And, look, seven thin ears and blasted with the east wind sprung up after them. Et ecce, septem spicae tenues, et arefactae Euro, . And the seven thin ears devoured the seven rank and full ears. And Pharaoh awoke, and, look, it was a dream.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/41.htm",
        "scrapedAt": "2025-12-30T03:24:26.259Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And it came to pass at the end of two full years, that Pharaoh dreamed: and, look, he stood by the river. Pharaoh's two dreams, Genesis 41:1-7. He is troubled; sends for interpreters; their inability, Genesis 41:8. The chief butler, sensible of his fault, remembers Joseph, Genesis 41:9; commends him to Pharaoh, Genesis 41:10-13, who causes him to be brought before him, Genesis 41:14, expecting the interpretation from him, Genesis 41:15. Joseph ascribes all to God, Genesis 41:16. Pharaoh relates his dreams to Joseph, Genesis 41:17-24. He interprets them, Genesis 41:25-31. The reason of their being doubled, Genesis 41:32. His advice to Pharaoh against the dearth to come, Genesis 41:33-36, which he approves of, Genesis 41:37; appoints him governor, next himself, over the whole land, Genesis 41:38-41. The ensigns of dignity and stately presents conferred on him, Genesis 41:42-44; also a new name, Zaphnath-paaneah, and a wife, Genesis 41:45. Joseph, now thirty years of age, makes a progress over all the land, inspects the stores, lays up provisions, Genesis 41:45-49; has two children, Manasseh and Ephraim, Genesis 41:50-52. Bad years come on; he supplies the country, Genesis 41:53-57. 1715 Two full years, after the butler's restitution to his place. Heb. Years of days, for full years, as 2 Samuel 14:28 Jeremiah 28:3; as a month of days is put for a full month, Genesis 29:14, which is complete to a day. Nilus is called the river simply, because of its eminency, as Homer or Virgil are called the poet. Genesis 41:2And, look, there came up out of the river seven well favoured cattle and fatfleshed; and they meadow.",
        "source": "https://biblehub.com/commentaries/poole/genesis/41.htm",
        "scrapedAt": "2025-12-30T03:24:28.753Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And it came to pass at the end of two full years, that Pharaoh dreamed: and, look, he stood by the river. The dreams are recited. \"By the river. \" In the dream Pharaoh supposes himself on the banks of the Nile. \"On rite green. \" The original word denotes the reed, or marsh grass, on the banks of the Nile. The cow is a very significant emblem of fruitful nature among the Egyptians, the hieroglyphic symbol of the earth and of agriculture; and the Isis the goddess of the earth was adored. \"Dreamed a second time. \" The repetition is designed to confirm the warning given, as Joseph afterward explains Genesis 41:32. Corn (grain) is the natural emblem of fertility and nurture. \"Blasted with the east wind The east wind\". The east wind is any wind coming from the east of the meridian, and may be a southeast or a northeast, as well as a direct east. The Hebrews were accustomed to speak only of the four winds, and, therefore, must have used the name of each with great latitude. The blasting is said to be usually from the southeast. \"And, look, it was a dream. \" The impression was so distinct as to be taken for the reality, until he awoke and perceived that it was only a dream. \"His spirit was troubled. \" Like the prison Genesis 40:6, he could not get rid of the feeling that the twofold dream portended some momentous event. \"The scribes\" - the hieroglyphs, who belonged to the priestly caste, and whose primary business was to make hieroglyphic and other inscriptions; while they were accustomed to consult the stars, interpret dreams, practise soothsaying, and pursue the other occult arts.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/41.htm",
        "scrapedAt": "2025-12-30T03:24:31.276Z"
      }
    ],
    "keyThemes": [
      "God's sovereignty over nations",
      "Wisdom from above",
      "Exaltation after humiliation",
      "Preparation for preservation"
    ],
    "christConnection": "From prison to palace in a day—Joseph's exaltation pictures Christ's resurrection and enthronement at God's right hand."
  },
  {
    "bookId": "genesis",
    "chapter": 42,
    "title": "Genesis 42",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "Now when Jacob saw that there was , Jacob said to his sons, Why do you look one upon another? 42:1-6 Jacob saw the corn his neighbours had , and brought home. It is a spur to exertion to see others supplied. Shall others get food for their souls, and shall we starve while it is to be had? Having discovered where help is to be had, we should apply for it without delay, without shrinking from labour, or grudging expense, especially as regards our never-dying souls. There is ; but we must come to him, and seek it from him. Genesis 42:2And he said, Look, I have heard that there is : get you down there, and buy for us from thence; that we may live, and not die. Genesis 42:3And Joseph's ten brothers went down to buy . Genesis 42:4But Benjamin, Joseph's brother, Jacob sent not with his brothers; for he said, L perhaps mischief befall him. Genesis 42:5And the sons of Israel came to buy corn among those that came: for the famine land of Canaan. Genesis 42:6And Joseph was the governor over the land, and he it was that sold to all the people of the land: and Joseph's brothers came, and bowed down themselves before him with their faces to the earth. Genesis 42:7And Joseph saw his brothers, and he knew them, but made himself strange to them, and spoke roughly to them; and he said to them, From where come you? And they said, From the land of Canaan to buy food.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/42.htm",
        "scrapedAt": "2025-12-30T03:24:33.916Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "Now when Jacob saw that there was , Jacob said to his sons, Why do you look one upon another? Genesis 42:1-381. Now when Jacob saw that there was , Jacob said to his sons, Why do you look one upon another? 1. Jahacob quod esset , dixit Jahacob filiis suis, Utquid aspicitis vos? 2. And he said, Look, I have heard that there is : get you down there, and buy for us from thence; that we may live, and not die. Et dixit, Ecce, audivi quod est : descendite illuc, et emite nobis inde, et vivemus, nec moriemur. And Joseph's ten brothers went down to buy . Descenderunt ergo fratres Joseph decem, ut emerent . But Benjamin, Joseph's brother, Jacob sent not with his brothers; for he said, L perhaps mischief befall him. (Nam Benjamin fratrem Joseph non misit suit: quia dixit, Ne forte accidat ei mors. ) 5. And the sons of Israel came to buy corn among those that came: for the famine land of Canaan. Et venerunt filii Israel, ut venientium: erat enim Chenan. And Joseph was the governor over the land, and he it was that sold to all the people of the land: and Joseph's brothers came, and bowed down themselves before him with their faces to the earth. : ipse vendebat toti populo terrae: venerunt, inquam, fratres Joseph, et incurvaverunt se super terram. And Joseph saw his brothers, and he knew them, but made himself strange to them, and spoke roughly to them; and he said to them, From where come you?",
        "source": "https://biblehub.com/commentaries/calvin/genesis/42.htm",
        "scrapedAt": "2025-12-30T03:24:36.494Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "Now when Jacob saw that there was , Jacob said to his sons, Why do you look one upon another? Jacob hearing there was , sends all his sons there but Benjamin, Genesis 42:1-5. They bow before Joseph, who knew them, but not they him; he treats them roughly, Genesis 42:6-8; remembers his dreams; charges them for spies, Genesis 42:9-12. They, to vindicate themselves, declare that they were all sons of one father, and had a younger brother at home, Genesis 42:13. Joseph imprisons them, but releases all but Simeon, and sends the rest to fetch their brother, and so prove their words true, Genesis 42:14-20. Their consciences are awakened, and charge them with their sin against Joseph; they accuse one another, Genesis 42:21,22. Joseph hears them; weeps; binds Simeon, Genesis 42:23,24. Joseph orders their sacks to be filled with corn, and to return their money, Genesis 42:25,26. In the way one finds his sack; they are the more afraid, Genesis 42:27,28. At home they relate to Jacob what happened to them, so far as to persuade Jacob to let Benjamin go, Genesis 42:29-35. He complains; Reuben undertakes for him; he cannot consent to let him go, Genesis 42:36-38. 1707 When Jacob saw, i. e. heard, as the word is used, Exodus 20:18; as seeing is put for smelling, Exodus 5:21; and for tasting, Psalm 34:8; and for touching, John 20:29. Why do you look one upon another; like lazy, careless, and helpless persons, each one expecting relief from the other, but none offering either counsel or help for all our subsistence?",
        "source": "https://biblehub.com/commentaries/poole/genesis/42.htm",
        "scrapedAt": "2025-12-30T03:24:39.107Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "Now when Jacob saw that there was , Jacob said to his sons, Why do you look one upon another? The aged Jacob is the only man of counsel. \"Look, I have heard there is :\" go down and buy. The ten brothers are sent, and Benjamin, the young, is retained, not merely because of his youth, for he was now twenty-four years of age, but because he was the son of his father's old age, the only son of Rachel now with him, and the only full brother of the lost Joseph. \"L mischief befall him,\" and so no child of Rachel would be left. \"Among those that went. \" The dearth was land of Kenaan. Genesis 42:2And he said, Look, I have heard that there is : get you down there, and buy for us from thence; that we may live, and not die. Genesis 42:3And Joseph's ten brothers went down to buy . Genesis 42:4But Benjamin, Joseph's brother, Jacob sent not with his brothers; for he said, L perhaps mischief befall him. Genesis 42:5And the sons of Israel came to buy corn among those that came: for the famine land of Canaan. Genesis 42:6And Joseph was the governor over the land, and he it was that sold to all the people of the land: and Joseph's brothers came, and bowed down themselves before him with their faces to the earth. The ten brothers meet with a rough reception from the lord of the land. \"The governor\" - the sultan.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/42.htm",
        "scrapedAt": "2025-12-30T03:24:41.669Z"
      }
    ],
    "keyThemes": [
      "Dreams fulfilled",
      "Guilt awakened",
      "Testing the brothers",
      "Hidden identity"
    ],
    "christConnection": "Joseph, unrecognized by his brothers, tests their hearts before revealing himself—picturing how Christ reveals Himself to those He draws to repentance."
  },
  {
    "bookId": "genesis",
    "chapter": 43,
    "title": "Genesis 43",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And the famine was land. 43:1-14 Jacob urges his sons to go and buy a little food; now, in time of dearth, a little must suffice. Judah urges that Benjamin should go with them. It is not against the honour and duty children owe their parents, humbly to advise them, and when needful, to reason with them. Jacob saw the necessity of the case, and yielded. His prudence and justice things. He sent back the money they had sack. Honesty obliges us to restore not only that which comes to us by our own fault, but that which comes to us by the mistakes of others. Though we get it by oversight, if we keep it when the oversight is discovered, it is kept by deceit. He sent as much again as they took the time before; the price of corn might be risen, or they might have to pay a ransom for Simeon. He sent a present of such things as the land afforded, and as were , balm, and honey, &c. Providence dispenses not its gifts to all alike. But honey and spice will never make up the want of bread-corn. The famine was , yet they had balm and myrrh, &c. We may live well enough upon plain food, without dainties; but we cannot live upon dainties without plain food. Let us thank God that what is most needful and useful, generally is most cheap and common. Though men value very highly their gold and silver, and the luxuries which are counted the best fruits of every land, time of famine they willingly barter them for bread.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/43.htm",
        "scrapedAt": "2025-12-30T03:24:44.164Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And the famine was land. Genesis 43:1-341. And the famine was land. Porro fames terra. And it came to pass, when they had eaten up the corn which they had brought out of Egypt, their father said to them, Go again, buy us a little food. Itaque quum finissent edere alimentum, quod attulerant ex Aegypto, pater eorum, Revertimini, Emite nobis pusillum cibi. And Judah spoke to him, saying, The man did solemnly protest to us, saying, You shall not see my face, except your brother be with you. Et Jehudah, dicendo, Contestando contestatus est nos vir, dicendo, Non videbitis faciem meam, nisi fuerit frater vester vobiscum. If you will send our brother with us, we will go down and buy you food: 4. Si miseris fratrem nostrum nobiscum, descendemus, et ememus tibi cibum. But if you will not send him, we will not go down: for the man said to us, You shall not see my face, except your brother be with you. Quod si non miseris, non descendemus: vir enim ille dixit nobis, Non videbitis faciem meam, nisi fuerit frater vester vobiscum. And Israel said, Therefore dealt you so ill with me, as to tell the man whether you had yet a brother? 6. At dixit Israel, Utquid malefecistis mihi, ut nuntiaretis viro, quod adhuc frater esset vobis. And they said, The man asked us straitly of our state, and of our kindred, saying, Is your father yet alive? have you another brother? and we told him according to the tenor of these words: could we certainly know that he would say, Bring your brother down?",
        "source": "https://biblehub.com/commentaries/calvin/genesis/43.htm",
        "scrapedAt": "2025-12-30T03:24:46.689Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And the famine was land. The famine continuing, and their provision being spent, Jacob commands them to go again to Egypt, Genesis 43:1,2. They prevail with their father to send Benjamin: Judah undertakes for him, Genesis 43:3-10. He gives them presents, double money, and his blessing, Genesis 43:11-14. They go to Egypt; stand before Joseph, Genesis 43:15. He seeing Benjamin with them, causes them to be brought to his house, and entertained, Genesis 43:16,17; whereat they are afraid, and make an apology to the steward about their money, Genesis 43:18-22. He bids them good cheer, uses them courteously, brings Simeon to them, Genesis 43:23,24. They prepare to bring their presents to Joseph, who speaks kindly to them, (and asks them of their father,) especially to Benjamin, with whom he is so moved that he must retire to weep, Genesis 43:25-30. He feasts them, but especial manner, Genesis 43:31-34. No text from Poole on this verse. Genesis 43:2And it came to pass, when they had eaten up the corn which they had brought out of Egypt, their father said to them, Go again, buy us a little food. He says a little, either to show that he took no thought to satisfy his or their curiosity or luxury, but only their necessity, for which a little would suffice, and that they must all moderate their appetites, time of such scarcity; or to encourage them to the journey, by suggesting to them that they needed not bring great stores, but only what was sufficient for that year, and that God would provide better for them after this, so as they should not need to go so far for corn any more.",
        "source": "https://biblehub.com/commentaries/poole/genesis/43.htm",
        "scrapedAt": "2025-12-30T03:24:49.234Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And the famine was land. The famine was severe. The pressure began to be felt more and more. The twelve households had at length consumed all the corn they had purchased, and the famine still pressed heavily upon them. Jacob directs them to return. \"And Judah said. \" Reuben had offended, and could not come forward. Simon and Levi had also grieved their father by the treacherous slaughter of the Shekemites. Judah therefore, speaks. \"Is your father yet alive? \" \"Have you a brother? \" These questions do not come previous narrative, on account of its brevity. But how pointed they are, and how true to Joseph's yearnings! They explain how it was that these particulars came replies of the brothers to Joseph. For the charge of being spies did not call for . Judah now uses all the arguments the case would admit of, to persuade his father to allow Benjamin to go with them. He closes with the emphatic sentence, If I bring him not to you, and set him before you, then let me have sinned against you all my days; that is, let me bear the blame, and of course the penalty of having sinned against tender a point. Both Judah and his father knew that this was a matter that touched the interest of the former very deeply. Reuben was bearing the blame of a grievous sin, and had no hope of the birthright. Simon and Levi were also bearing blame, and, besides, had not the natural right, which belonged only to Reuben.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/43.htm",
        "scrapedAt": "2025-12-30T03:24:51.782Z"
      }
    ],
    "keyThemes": [
      "Letting go in faith",
      "Overwhelming hospitality",
      "Special treatment of Benjamin",
      "Mystery and wonder"
    ],
    "christConnection": "Joseph's gracious feast for his unknowing brothers pictures the gospel feast prepared for those who will come to know Christ."
  },
  {
    "bookId": "genesis",
    "chapter": 44,
    "title": "Genesis 44",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And he commanded the steward of his house, saying, Fill the men's sacks with food, as much as they can carry, and put every man's sack's mouth. 44:1-17 Joseph tried how his brothers felt towards Benjamin. Had they envied and hated the other son of Rachel as they had hated him, and if they had the same want of feeling towards their father Jacob as before this, they would now have shown it. When the cup was found upon Benjamin, they would have a pretext for leaving him to be a slave. But we cannot judge what men are now, by what they have been formerly; nor what they will do, by what they have done. The steward charged them with being ungrateful, rewarding evil for good; with folly, in taking away the cup of daily use, which would soon be missed, and diligent search made for it; for so it may be read, Is not this my lord drinks, as having a particular fondness for it, and for which he would search thoroughly? Or, By which, leaving it carelessly at your table, he would make trial whether you were honest men or not? They throw themselves upon Joseph's mercy, and acknowledge the righteousness of God, perhaps thinking of the injury they had formerly done to Joseph, for which they thought God was now reckoning with them. in which we believe ourselves wronged by men, we must own that God is righteous, and finds out our sin. Genesis 44:2And put my cup, the silver cup, in the sack's mouth of the young, and his corn money.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/44.htm",
        "scrapedAt": "2025-12-30T03:24:54.357Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And he commanded the steward of his house, saying, Fill the men's sacks with food, as much as they can carry, and put every man's sack's mouth. Genesis 44:1-341. And he commanded the steward of his house, saying, Fill the men's sacks with food, as much as they can carry, and put every man's sack's mouth. Et praecepit praefecto domus suae, dicendo, Imple saccos virorum esca, quantum potuerint ferre, et pone pecuniam sacci sui, 2. And put my cup, the silver cup, in the sack's mouth of the young, and his corn money. And he did according to the word that Joseph had spoken. Et scyphum meum, scyphum argenteum, saccijunioris, et pecuniam alimenti ejus: et fecit secundum verbum Joseph, quod loquutus fuerat. As soon as the morning was light, the men were sent away, they and their asses. Mane illuxit, et viri dimissi sunt, eorum. And when they were gone out of the city, and not yet far off, Joseph said to his steward, Up, follow after the men; and when you do overtake them, say to them, Therefore have you rewarded evil for good? 4. Ipsi egressi erant urbem, nec long abierant, quum Joseph dixit praefecto domus suae, Surge, persequere viros, et apprehende eos, et dices eis, Utquid reddidistis ? 5. Is not this my lord drinks, and by which indeed he divines? you have done doing. Nonne hic est, in quo bibit dominus meus: et ipse augurando ? Male fecistis quod fecistis. And he overtook them, and he spoke to them these same words.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/44.htm",
        "scrapedAt": "2025-12-30T03:24:56.891Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And he commanded the steward of his house, saying, Fill the men's sacks with food, as much as they can carry, and put every man's sack's mouth. Joseph commands his steward to fill their sacks, restore every man's money, and put his silver cup into Benjamin's sack; sends them away, Genesis 44:1-3; thereby contriving to bring them back again: they are pursued, and charged with theft, Genesis 44:4-6; whereat, being greatly perplexed, they ignorantly make themselves liable to punishment, Genesis 44:7-10. The cup is 's sack; they return to Joseph, submitting to his censure, Genesis 44:11-14. Joseph pretends the gift of prophecy, Genesis 44:15. Judah speaks much and earnestly on Benjamin's behalf, offering to stead, Genesis 44:16-34. No text from Poole on this verse. Genesis 44:2And put my cup, the silver cup, in the sack's mouth of the young, and his corn money. And he did according to the word that Joseph had spoken. It seems to have been a large cup, and of great price, and much used by Joseph. In the sack's mouth of the young, with design to discover their intentions and affections towards Benjamin, whether they did envy him, and would desert danger, as they did Joseph; or would cleave to him; that hence he might take his measures how to deal with him and them. Genesis 44:3As soon as the morning was light, the men were sent away, they and their asses. No text from Poole on this verse. Genesis 44:4And when they were gone out of the city, and not yet far off, Joseph said to his steward, Up, follow after the men; and when you do overtake them, say to them, Therefore have you rewarded evil for good?",
        "source": "https://biblehub.com/commentaries/poole/genesis/44.htm",
        "scrapedAt": "2025-12-30T03:24:59.411Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And he commanded the steward of his house, saying, Fill the men's sacks with food, as much as they can carry, and put every man's sack's mouth. And my cup. - Besides returning each man's money as before, a silver cup of Joseph's is 's bag, after which, when daylight comes, they are dismissed. They are scarcely out of the town when Joseph's steward is ordered to overtake them, and charge them with stealing the cup. \"And by which indeed he divines. \" Divining by cups, we learn from this, was a common (Herodotus ii. 83). It is here mentioned to enhance the value of the cup. Whether Joseph really practised any sort of divination cannot be determined from this passage. Genesis 44:2And put my cup, the silver cup, in the sack's mouth of the young, and his corn money. And he did according to the word that Joseph had spoken. Genesis 44:3As soon as the morning was light, the men were sent away, they and their asses. Genesis 44:4And when they were gone out of the city, and not yet far off, Joseph said to his steward, Up, follow after the men; and when you do overtake them, say to them, Therefore have you rewarded evil for good? Genesis 44:5Is not this my lord drinks, and by which indeed he divines? you have done doing. Genesis 44:6And he overtook them, and he spoke to them these same words. The cup is 's bag. \"Spoke to them these words. \" The words of Joseph, supplying of course the mention of the cup which is text only by the pronoun this.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/44.htm",
        "scrapedAt": "2025-12-30T03:25:01.895Z"
      }
    ],
    "keyThemes": [
      "Final test",
      "Transformed hearts",
      "Substitutionary sacrifice",
      "Judah's intercession"
    ],
    "christConnection": "Judah offers himself in place of his brother—a powerful foreshadowing of Christ, the Lion of Judah, who substitutes Himself for sinners."
  },
  {
    "bookId": "genesis",
    "chapter": 45,
    "title": "Genesis 45",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "Then Joseph could not refrain himself before all them that stood by him; and he cried, Cause every man to go out from me. And there stood no man with him, while Joseph made himself known to his brothers. 45:1-15 Joseph let Judah go on, and heard all he had to say. He found his brothers humbled for their sins, mindful of himself, for Judah had mentioned him speech, respectful to their father, and very tender of their brother Benjamin. Now they were ripe for the comfort he designed, by making himself known. Joseph ordered all his attendants to withdraw. Thus Christ makes himself and his loving-kindness known to his people, out of the sight and hearing of the world. Joseph shed tears of tenderness and strong affection, and with these threw off that austerity with which he had hitherto behaved toward his brothers. This represents the Divine compassion toward returning penitents. I am Joseph, your brother. This would humble them yet more for their him, but would encourage them to hope for kind treatment. Thus, when Christ would convince Paul, he said, I am Jesus; and when he would comfort his disciples, he said, It is I, be not afraid. When Christ manifests himself to his people, he encourages them to draw near to him with a true heart. Joseph does so, and shows them, that whatever they thought to do against him, God had brought good out of it. Sinners must grieve and be angry with themselves for their sins, though God brings good out of it, for that is no thanks to them.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/45.htm",
        "scrapedAt": "2025-12-30T03:25:04.420Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "Then Joseph could not refrain himself before all them that stood by him; and he cried, Cause every man to go out from me. And there stood no man with him, while Joseph made himself known to his brothers. Genesis 45:1-281. Then Joseph could not refrain himself before all them that stood by him; and he cried, Cause every man to go out from me. And there stood no man with him, while Joseph made himself known to his brothers. Tunc non potuit Joseph se comprimere coram omnibus, qui stabant juxta se, et clamavit, Educite omnem virum a me: et non stetit , quando patefecit se Joseph fratribus suis. And he wept aloud: and the Egyptians and the house of Pharaoh heard. Et emisit vocem : et audierunt Aegyptii, Pharaonis. And Joseph said to his brothers, I am Joseph; does my father yet live? And his brothers could not answer him; for they were troubled at his presence. fratribus suis, Ego sum Joseph, num adhue vivit pater meus? Et non potuerunt fratres ejus respondere ei: quia territi erant a facie ejus. And Joseph said to his brothers, Come near to me, I pray you. And they came near. And he said, I am Joseph your brother, whom you sold into Egypt. Et dixit Joseph fratribus suis, Accedite . Et accesserunt. Et dixit, Ego sum Joseph frater vester, quem . Now therefore be not grieved, nor angry with yourselves, that you sold me here: for God did send me before you to preserve life.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/45.htm",
        "scrapedAt": "2025-12-30T03:25:06.901Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "Then Joseph could not refrain himself before all them that stood by him; and he cried, Cause every man to go out from me. And there stood no man with him, while Joseph made himself known to his brothers. Joseph no longer able to refrain, discovers himself to his brothers, and weeps; asks concerning his father: they are troubled at his presence, Genesis 45:1-3. He forbids their grief for their sin, and comforts them with God's gracious design and , Genesis 45:4-8. He hastens them to go and acquaint their father, and bring him to Egypt; his message to his father, Genesis 45:9-13. His kindness to Benjamin and his brothers, Genesis 45:14,15. Pharaoh is glad, and invites them down to Egypt, Genesis 45:16-20. Joseph dismisses them with gifts and presents to his father; exhorting them not to fall out by the way, Genesis 45:21-24. Coming home they relate all to their father, who at last believes them, rejoicing that he should see his son before he died, Genesis 45:25-28. Cause every man to go out from me; remove all the Egyptians out of my presence and chamber. Which he did, partly that he might maintain the honour of his place, and not make himself cheap and contemptible to the Egyptians, by his excessive tears and passions, and by his free, and familiar, and affectionate converse with his brothers; and partly to preserve the reputation of his brothers, by concealing their fault from the Egyptians. Genesis 45:2And he wept aloud: and the Egyptians and the house of Pharaoh heard.",
        "source": "https://biblehub.com/commentaries/poole/genesis/45.htm",
        "scrapedAt": "2025-12-30T03:25:09.386Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "Then Joseph could not refrain himself before all them that stood by him; and he cried, Cause every man to go out from me. And there stood no man with him, while Joseph made himself known to his brothers. Joseph now reveals to his brothers the astonishing fact that he himself, their long-lost brother, stands before them. \"He could not refrain himself. \" Judah has painted the scene at home to the life; and Joseph can hold out no longer. \"Have every man out from me. \" Delicacy forbids the presence of strangers at this unrestrained outburst of tender emotion among the brothers. Besides, the workings of conscience, bringing up the recollections of the past, and the errors, to which some reference is now unavoidable, are not to be unveiled to the public eye. \"He lifted up his . \" The expression of the feelings is free and simple and primitive state of society. This prevails East. And Mizraim heard. The Egyptians of Joseph's house would hear, and report to others, this unusual utterance of deep feeling. \"I am Joseph. \" The natural voice, the native tongue, the long-remembered features, would, all at once, strike the apprehension of the brothers. The remembrance of their crime, the absolute power of Joseph, and the justice of revenge, would rush upon their minds. No wonder they were silent and troubled at his presence. \"Is my father yet alive? \" This question shows where Joseph's thoughts were. He had been repeatedly assured of his father's welfare.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/45.htm",
        "scrapedAt": "2025-12-30T03:25:11.953Z"
      }
    ],
    "keyThemes": [
      "Revelation and reconciliation",
      "God's sovereign purpose in suffering",
      "Grace instead of revenge",
      "Family restoration"
    ],
    "christConnection": "Joseph's self-revelation to his weeping brothers pictures Christ revealing Himself to Israel (Zech 12:10) and to all who repent."
  },
  {
    "bookId": "genesis",
    "chapter": 46,
    "title": "Genesis 46",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And Israel took his journey with all that he had, and came to Beersheba, and offered sacrifices to the God of his father Isaac. 46:1-4 Even as to those events and undertakings which appear most joyful, we should seek counsel, assistance, and a blessing from the Lord. Attending on his ordinances, and receiving the pledges of his covenant love, we expect his presence, and that peace which it confers. In all removals we should be reminded of our removal out of this world. Nothing can encourage us to fear no evil when passing through the valley of the shadow of death, but the presence of Christ. Genesis 46:2And God spoke to visions of the night, and said, Jacob, Jacob. And he said, Here am I. Genesis 46:3And he said, I am God, the God of your father: fear not to go down into Egypt; for I will there make of you a great nation: Genesis 46:4I will go down with you into Egypt; and I will also surely bring you up again: and Joseph shall put his hand upon yours eyes. Genesis 46:5And Jacob rose up from Beersheba: and the sons of Israel carried Jacob their father, and their little ones, and their wives, in the wagons which Pharaoh had sent to carry him. 46:5-27 We have here a particular account of Jacob's family. Though the fulfilling of promises is always sure, yet it is often slow. It was now 215 years since God had promised Abraham to make of him a great nation, ch.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/46.htm",
        "scrapedAt": "2025-12-30T03:25:14.493Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And Israel took his journey with all that he had, and came to Beersheba, and offered sacrifices to the God of his father Isaac. Genesis 46:1-341 And Israel took his journey with all that he had, and came to Beersheba, and offered sacrifices to the God of his father Isaac. Itaque profects est Israel, et quaecunque habebat, et , et sacrificavit sacrificia Deo patris sui Ishac. 2 And God spoke to visions of the night, and said, Jacob, Jacob. And he said, Here am I. Et dixit in visi onibus noctis, dixit inquam, Jahacob Jahacob. Ille respondit, Ecce, adsum. 3 And he said, I am God, the God of your father: fear not to go down into Egypt; for I will there make of you a great nation: 3. Et dixit, Ego sum Deus, Deus patris tui: ne timeas : magnam ponam to ibi. 4 I will go down with you into Egypt; and I will also surely bring you up again: and Joseph shall put his hand upon yours eyes. Ego descendam , et ego ascendere etiam to faciam ascendendo: Joseph quoque ponet manum tuos. 5 And Jacob rose up from Beersheba: and the sons of Israel carried Jacob their father, and their little ones, and their wives, in the wagons which Pharaoh had sent to carry him. Postea surrexit , et sustulerunt filii Israel Jahacob patrem suum, et parvulos suos, et , quos miserat eum. 6 And they took their cattle, and their goods, which they had land of Canaan, and came into Egypt, Jacob, and all his seed with him: 6.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/46.htm",
        "scrapedAt": "2025-12-30T03:25:17.023Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And Israel took his journey with all that he had, and came to Beersheba, and offered sacrifices to the God of his father Isaac. Jacob sets out towards Egypt with his family and substance; offers saerifices at Beer-sheba; God appears to vision, renewing his promises and blessing, Genesis 46:1-4. He goes to Egypt, Genesis 46:5,6. The names of the children of Israel, Genesis 46:8-27. Jacob sends Judah before him; Joseph goes to meet his father; their joy, Genesis 46:28-30. Joseph instructs his brothers what to say to Pharaoh, to declare themselves shepherds, and desire to ; the reason, Genesis 46:31-34. 1706 to God for former favours, and especially for Joseph's preservation and happiness; and by way of supplication to God for his great case, whether he might leave the promised land of Canaan, and go into the idolatrous and impious land of Egypt; and for his protection and blessing, as journey . The God of his father Isaac; whom Isaac honoured and served, and who had constantly protected and provided for Isaac, and confirmed his covenant with him. He mentions Isaac rather than Abraham, partly for Isaac's honour, to show that though Isaac was much inferior to and graces, yet God was no less Isaac's than Abraham's God, and therefore would be his God also, nevertheless his unworthiness; and partly for his own comfort, because Isaac was Jacob's immediate parent, and had transferred the blessing of the covenant from Esau to Jacob, and the validity of that translation depended upon Isaac's .",
        "source": "https://biblehub.com/commentaries/poole/genesis/46.htm",
        "scrapedAt": "2025-12-30T03:25:19.583Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And Israel took his journey with all that he had, and came to Beersheba, and offered sacrifices to the God of his father Isaac. Jacob arriving at Beer-sheba is encouraged by a revelation from God. Beer-sheba may be regarded as the fourth scene of Abraham's land of promise. \"Offered sacrifices. \" He had gathered from the words of the Lord to Abraham Genesis 15:13, and the the dreams of Joseph were events of Providence, that his family were to descend into Egypt. He felt therefore, this step he was obeying the will of Heaven. Hence, he approaches at an old abode of Abraham and Isaac, before he crosses the border to pass into Egypt. On this solemn occasion God appears to visions of the night. He designates himself EL the Mighty, and the God of his father. The former name cheers him with the thought of an all-sufficient Protector. The latter identifies the speaker with the God of his father, and therefore, with the God of eternity, of creation, and of covenant. \"Fear not to go down into Mizraim. \" This implies both that it was the will of God that he should go down to Egypt, and that he would be protected there. \"A great nation. \"Jacob had now a numerous family, of whom no longer one was selected, but all were chosen seed. He had received the special blessing and injunction to be fruitful and multiply Genesis 28:3; Genesis 35:11. The chosen family is to be the beginning of the chosen nation.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/46.htm",
        "scrapedAt": "2025-12-30T03:25:22.101Z"
      }
    ],
    "keyThemes": [
      "Divine assurance",
      "Seventy souls",
      "Reunion and joy",
      "Temporary sojourning"
    ],
    "christConnection": "The seventy souls going to Egypt correspond to the seventy nations of Genesis 10. God's plan encompasses all peoples through Jacob's seed."
  },
  {
    "bookId": "genesis",
    "chapter": 47,
    "title": "Genesis 47",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "Then Joseph came and told Pharaoh, and said, My father and my brothers, and their flocks, and their herds, and all that they have, are come out of the land of Canaan; and, look, they land of Goshen. 47:1-6 Though Joseph was a great man, , yet he owned his brothers. Let the rich and world not overlook or despise poor relations. Our Lord Jesus is not ashamed to call us brothers. In answer to Pharaoh's inquiry, What is your calling? they told him that they were shepherds, adding that they were come to land for a time, while the famine . Pharaoh offered to employ them as shepherds, provided they were active men. Whatever our business or employment is, we should aim to , and to prove ourselves clever and industrious. Genesis 47:2And he took some of his brothers, even five men, and presented them to Pharaoh. Genesis 47:3And Pharaoh said to his brothers, What is your occupation? And they said to Pharaoh, Your servants are shepherds, both we, and also our fathers. Genesis 47:4They said moreover to Pharaoh, For to land are we come; for your servants have no pasture for their flocks; for the famine is land of Canaan: now therefore, we pray you, let your servants land of Goshen. Genesis 47:5And Pharaoh spoke to Joseph, saying, Your father and your brothers are come to you: Genesis 47:6The land of Egypt is before you; in the best of the land make your father and brothers to dwell; in the land of Goshen let them dwell: and if you know any men of activity among them, then make them rulers over my cattle.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/47.htm",
        "scrapedAt": "2025-12-30T03:25:24.635Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "Then Joseph came and told Pharaoh, and said, My father and my brothers, and their flocks, and their herds, and all that they have, are come out of the land of Canaan; and, look, they land of Goshen. Genesis 47:1-311 Then Joseph came and told Pharaoh, and said, My father and my brothers, and their flocks, and their herds, and all that they have, are come out of the land of Canaan; and, look, they land of Goshen. Et venit Joseph, et nuntiavit Pharaoni, et dixit, Pater meus, et fratres mei, et pecudes eorum, et boves eorum, et omnia quae erant eis, venerunt e terra Chenaan: et ecce, Gosen. 2 And he took some of his brothers, even five men, and presented them to Pharaoh. fratribus suis cepit quinque viros, et statuit . 3 And Pharaoh said to his brothers, What is your occupation? And they said to Pharaoh, Your servants are shepherds, both we, and also our fathers. Tune dixit ejus, Quae sunt opera vestra? Et , Pastores ovium sunt servi tui, etiam nos, etiam patres, nostri. 4 They said moreover to Pharaoh, For to land are we come; for your servants have no pasture for their flocks; for the famine is land of Canaan: now therefore, we pray you, let your servants land of Goshen. Et , Ut terra, venimus, quia non est pascuum pecudibus, quae sunt servis tuis: gravis enim fames Chenaan: nunc igitur habitent quaeso servi Gosen. 5 And Pharaoh spoke to Joseph, saying, Your father and your brothers are come to you: 5.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/47.htm",
        "scrapedAt": "2025-12-30T03:25:27.167Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "Then Joseph came and told Pharaoh, and said, My father and my brothers, and their flocks, and their herds, and all that they have, are come out of the land of Canaan; and, look, they land of Goshen. Joseph acquaints Pharaoh with his father's arrival; presents five of his brothers to him, Genesis 47:1,2. He after some inquiry instates : they being shepherds, he orders Joseph, if he knew any men of activity amongst them, to make them rulers over his cattle, Genesis 47:3-6. Joseph likewise brings his father before Pharaoh, who inquires after his age, and is blessed by Jacob, Genesis 47:7-10. Joseph maintains his father, and all his house, in Goshen, Genesis 47:11,12. Joseph gets all the money, cattle, and lands of the Egyptians into his hands for corn; removes them to distant quarters of the land, Genesis 47:13-21; the priests only excepted, who have a portion assigned them by Pharaoh, Genesis 47:22. Joseph leaves the land to the people to till, and gives them corn to sow, they giving Pharaoh the fifth part of the crop, Genesis 47:23-26. Jacob's , and full age, Genesis 47:27,28. He takes an oath of Joseph concerning his burial, Genesis 47:29-31. 1706 Either to abide there, or to remove thence to any other place which you shall appoint for them. Genesis 47:2And he took some of his brothers, even five men, and presented them to Pharaoh. Some of his brothers, or part, as this Hebrew word is used, Daniel 1:2; or the extremity, or end, or tail of them, i.",
        "source": "https://biblehub.com/commentaries/poole/genesis/47.htm",
        "scrapedAt": "2025-12-30T03:25:29.760Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "Then Joseph came and told Pharaoh, and said, My father and my brothers, and their flocks, and their herds, and all that they have, are come out of the land of Canaan; and, look, they land of Goshen. Joseph announces to Pharaoh the arrival of his kindred. \"Of the whole of his brothers,\" more exactly from the end of his brothers. Five men, a favorite . Shepherds, owners and feeders of sheep and other cattle. \"Pasture. \" Hence, it appears that the drought had made the grazing extremely scanty. Men of ability, competent to take the oversight of others. \"Jacob his father,\" he presents before Pharaoh, after he has disposed of all business matters. \"Jacob blessed Pharaoh. \" This is the patriarch's grateful return for Pharaoh's great kindness and generosity toward him and his house. He is conscious of even a higher dignity than that of Pharaoh, as he is a prince of God; and as such he bestows his precious benediction. Pharaoh was struck with his venerable appearance, and inquired what was his age. \"Pilgrimage\" - sojourning, wandering without any constant abode or fixed holding. Such was the life of the land of promise Hebrews 11:13. \"Few and evil. \" Jacob's years at this time were far short of those of Abraham and Isaac, not to speak of more ancient men. Much bitterness also had been cup from the time that he beguiled his brother of the birthright and the blessing, which would have come to lawful way if he had only .",
        "source": "https://biblehub.com/commentaries/barnes/genesis/47.htm",
        "scrapedAt": "2025-12-30T03:25:32.237Z"
      }
    ],
    "keyThemes": [
      "Divine provision",
      "Wisdom in crisis",
      "Blessing Pharaoh",
      "Hope beyond Egypt"
    ],
    "christConnection": "Jacob's insistence on burial in Canaan expresses faith in God's promise of the land—and ultimately the resurrection hope fulfilled in Christ."
  },
  {
    "bookId": "genesis",
    "chapter": 48,
    "title": "Genesis 48",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And it came to pass after these things, that one told Joseph, Look, your father is sick: and he took with him his two sons, Manasseh and Ephraim. 48:1-7 The death-beds of believers, with the prayers and counsels of dying persons, are suited to make serious impressions upon the young, the gay, and the prosperous: we shall do well to take children on such occasions, when it can be done properly. If the Lord please, it is very desirable to bear our dying testimony to his truth, to his faithfulness, and the pleasantness of his ways. And one would wish so to live, as to give energy and weight to our dying exhortations. All true believers are blessed at their death, but all do not depart equally full of spiritual consolations. Jacob adopted Joseph's two sons. Let them not succeed their father, in his power and ; but let them inheritance of the promise made to Abraham. Thus the aged dying patriarch teaches these young persons to take their lot with the people of God. He appoints each of them to be the head of a tribe. Those are worthy of double honour, who, through God's grace, break through the temptations of worldly wealth and preferment, to embrace and poverty. Jacob will have Ephraim and Manasseh to know, that it is better to be low, church, than high, and out of it. Genesis 48:2And one told Jacob, and said, Look, your son Joseph comes to you: and Israel strengthened himself, and sat upon the bed.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/48.htm",
        "scrapedAt": "2025-12-30T03:25:34.763Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And it came to pass after these things, that one told Joseph, Look, your father is sick: and he took with him his two sons, Manasseh and Ephraim. Genesis 48:1-221 And it came to pass after these things, that one told Joseph, Look, your father is sick: and he took with him his two sons, Manasseh and Ephraim. Et dictum fuit ipsi Joseph, Ecce, pater tuus aegrotat: tunc accepit duos filios suos secum, . 2 And one told Jacob, and said, Look, your son Joseph comes to you: and Israel strengthened himself, and sat upon the bed. Et nuntiavit ipsi Jahacob, et dixit, Ecce, filius tuus Joseph . Et roboravit se Israel, et . 3 And Jacob said to Joseph, God Almighty appeared to me at land of Canaan, and blessed me, 3. Et dixit Jahacob ipsi Joseph, Deus omnipotens apparuit in terra Chenaan, et benedixit mihi. 4 And said to me, Look, I will make you fruitful, and multiply you, and I will make of you a multitude of people; and will give this land to your seed after you for an everlasting possession. Et , Ecce, ego crescere facio to, et multiplicabo to, et ponam populorum, et dabo terram hanc semini in haereditatem perpetuam. 5 And now your two sons, Ephraim and Manasseh, which were born to land of Egypt before I came to you into Egypt, are mine; as Reuben and Simeon, they shall be mine. Et nune duo filii tui, qui nati sunt Aegypti, antequam in Aegyptum, mei sunt , sicut erunt mei.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/48.htm",
        "scrapedAt": "2025-12-30T03:25:37.277Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And it came to pass after these things, that one told Joseph, Look, your father is sick: and he took with him his two sons, Manasseh and Ephraim. Jacob being sick, Joseph comes and visits him, Genesis 48:1,2. Jacob declares God's appearances and promises to him, Genesis 48:3,4; adopts Joseph's two sons Manasseh and Ephraim to be fathers of two , Genesis 48:5,6; mentions Rachel's death, and the place where he buried her, Genesis 48:7; calls for his sons to bless them: Joseph brings and places them: Jacob purposely crosses his hands, Genesis 48:8-14. His blessing on Joseph and his sons, Genesis 48:15,16. Joseph interposes to remove his father's hands, Genesis 48:17,18. He declares the pre-eminence of the younger, but the other also blessed, Genesis 48:19,20. Prophess of their return to Canaan, Genesis 48:21. He gives Joseph a piece of land apart, Genesis 48:22. 1689 To obtain his venerable and religious father's blessing for them. Genesis 48:2And one told Jacob, and said, Look, your son Joseph comes to you: and Israel strengthened himself, and sat upon the bed. He got new strength, his spirits being quickened and refreshed by the tidings of Joseph's approach, and he put forth all the strength which he had. Genesis 48:3And Jacob said to Joseph, God Almighty appeared to me at land of Canaan, and blessed me, No text from Poole on this verse. Genesis 48:4And said to me, Look, I will make you fruitful, and multiply you, and I will make of you a multitude of people; and will give this land to your seed after you for an everlasting possession.",
        "source": "https://biblehub.com/commentaries/poole/genesis/48.htm",
        "scrapedAt": "2025-12-30T03:25:39.788Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And it came to pass after these things, that one told Joseph, Look, your father is sick: and he took with him his two sons, Manasseh and Ephraim. After these things. - After the arrangements concerning the funeral, chapter. \"Menasseh and Ephraim. \" They seem to have accompanied their father from respectful affection to their aged relative. \"Israel strengthened himself\" - summoned his remaining powers for the interview, which was now to him an effort. \"God Almighty appeared to me at Luz. \" From the terms of the blessing received it is evident that Jacob here refers to the last appearance of God to him at Bethel Genesis 35:11. \"And now your sons. \" After referring to the promise of a numerous offspring, and of a territory which they are to inherit, he assigns to each of the two sons of Joseph, who were , a place among his own sons, and a separate promised land. In this way two shares fall to Joseph. \"And your issue. \" We are not informed whether Joseph had any other sons. But all such are to be two tribes of which Ephraim and Menasseh are the heads. These young men are now at least twenty and nineteen years of age, as they were born before the famine commenced. Any subsequent issue that Joseph might have, would be counted among the generations of their children. \"Rachel died upon me\" - as a heavy affliction falling upon me. The presence of Joseph naturally leads the father's thoughts to Rachel, the beloved mother of his beloved son, whose memory he a double portion to her old son.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/48.htm",
        "scrapedAt": "2025-12-30T03:25:42.305Z"
      }
    ],
    "keyThemes": [
      "Double portion for Joseph",
      "Sovereign choice of the younger",
      "Faith in God's future",
      "Blessing for generations"
    ],
    "christConnection": "Jacob's prophetic crossing of hands shows God's sovereign choice overturning natural expectations—grace, not birthright, determines blessing."
  },
  {
    "bookId": "genesis",
    "chapter": 49,
    "title": "Genesis 49",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And Jacob called to his sons, and said, Gather yourselves together, that I may tell you that which shall befall last days. 49:1,2 All Jacob's sons were living. His calling them together was a precept for them to , not to mingle with the Egyptians; and foretold that they should not be separated, as Abraham's sons and Isaac's were, but should all make one people. We are not to consider this address as the expression of private feelings of affection, resentment, or partiality; but as the language of the Holy Ghost, declaring the purpose of God respecting the character, circumstances, and situation of the tribes which descended from the sons of Jacob, and which may be histories. Genesis 49:2Gather yourselves together, and hear, you sons of Jacob; and hearken to Israel your father. Genesis 49:3Reuben, you are my firstborn, my might, and the beginning of my strength, the excellency of dignity, and the excellency of power:49:3-7 Reuben was the first-born; but by gross sin, he forfeited the birthright. The character of Reuben is, that he was unstable as water. Men do not thrive, because they do not fix. Reuben's sin left a lasting infamy upon his family. Let us never do evil, then we need not fear being told of it. Simeon and Levi were passionate and revengeful. The murder of the Shechemites is a proof of this. Jacob protested against that barbarous act. Our soul is our honour; by its powers we are distinguished from, and raised above, the beasts that perish.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/49.htm",
        "scrapedAt": "2025-12-30T03:25:44.894Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And Jacob called to his sons, and said, Gather yourselves together, that I may tell you that which shall befall last days. Genesis 49:1-331 And Jacob called to his sons, and said, Gather yourselves together, that I may tell you that which shall befall last days. Postea vocavit Jahacob filios suos, et dixit, Congregate vos, et annuntiabo bovis quod eventurum est dierum. 2 Gather yourselves together, and hear, you sons of Jacob; and hearken to Israel your father. Congregate vos, et audite filii Jahacob, audite inquam Israel patrem vestrum. 3 Reuben, you are my firstborn, my might, and the beginning of my strength, the excellency of dignity, and the excellency of power: 3. Ruben primogenitus meus, tu fortitudo mea, et principium roboris mei: excellentia roboris. 4 Unstable as water, you shall not excel; because you went up to your father's bed; then defiledst you it: he went up to my couch. Velocitas fuit tibi instar aquae, non excelles: quia ascendisti cubile patris tui, tune polluisti stratum meum, evanuit. 5 Simeon and Levi are brothers; instruments of cruelty habitations. fratres, arma eorum. 6 O my soul, come not you into their secret; to their assembly, mine honour, be not you united: anger they slew a man, selfwill they digged down a wall. In secretum eorum non veniat anima mea, in coetu eorum non uniaris lingua mea: suo occiderunt virum, et voluntate sua eradicaverunt murum. 7 Cursed be their anger, for it was fierce; and their wrath, for it was cruel: I will divide , and scatter .",
        "source": "https://biblehub.com/commentaries/calvin/genesis/49.htm",
        "scrapedAt": "2025-12-30T03:25:47.556Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And Jacob called to his sons, and said, Gather yourselves together, that I may tell you that which shall befall last days. Jacob calls his sons to bless them before his death, Genesis 49:1. Bespeaks their attention, Genesis 49:2. Condemns Reuben's inc, Genesis 49:3,4; Simeon's and Levi's cruelty, Genesis 49:5-7. Extols Judah; prophess of Christ, and the calling of the Gentiles, Genesis 49:9-12. Of Zebulun, Genesis 49:13; Issachar, Genesis 49:14,15; Dan, Genesis 49:16,17. Expresses his faith on God's salvation, Genesis 49:18. Of Gad, Genesis 49:19; Asher, Genesis 49:20; Naphtali, Genesis 49:21. Joseph's peculiar blessing, Genesis 49:22-26. Of Benjamin, Genesis 49:27. His charge eoncerning his burial and death, Genesis 49:28-33. Or, in the following times, or latter days, when you shall enter into and be Land of Promise. Hereby he signifies, that he speaks here of things which concern not so much their persons as their posterity. Genesis 49:2Gather yourselves together, and hear, you sons of Jacob; and hearken to Israel your father. No text from Poole on this verse. Genesis 49:3Reuben, you are my firstborn, my might, and the beginning of my strength, the excellency of dignity, and the excellency of power: The beginning of my strength; the first instance or evidence of my might or strength, or of that masculine rigour by which God enabled me to beget a child. Compare Deu 21:17 Psalm 105:36. Or the first of my children, which are the strength, the stays, and supports of a father, and of his family; thence called his arrows, as Psalm 127:4, and by other authors, the pillars of the house.",
        "source": "https://biblehub.com/commentaries/poole/genesis/49.htm",
        "scrapedAt": "2025-12-30T03:25:50.201Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And Jacob called to his sons, and said, Gather yourselves together, that I may tell you that which shall befall last days. And Jacob called his sons - This is done by messengers going to their various dwellings and pasture-grounds, and summoning them to his presence. And he said. These words introduce his dying address. \"Gather yourselves together. \" Though there is to be a special address to each, yet it is to audience of all the rest, for the instruction of the whole family. \"That which shall befall after days. \" The after days are the times intervening between the speaker and the end of the human race. The beginning of man was at the sixth day of the last creation. The end of his race will be at the dissolution of the heavens and the earth then called into being, and the new creation which we are taught will be consequent thereupon. To this interval prophecy has , though it occasionally penetrates beyond the veil that separates the present from the future creation. The prophet has his mind filled with the objects and events of the present and the past, and from these he must draw his images for the future, and express current language of his day. To interpret his words, therefore, we must ascend to his day, examine his usage of speech, distinguish the transient truth may appear, and hold fast by the constant essence which belongs to all ages. \"Hear, you sons of Jacob; and hearken to Israel your father.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/49.htm",
        "scrapedAt": "2025-12-30T03:25:52.686Z"
      }
    ],
    "keyThemes": [
      "Prophetic blessings",
      "Judah's preeminence",
      "Consequences of sin",
      "Hope for the future"
    ],
    "christConnection": "The blessing of Judah (49:10) is messianic: \"The scepter shall not depart from Judah...until Shiloh comes.\" Christ is the Lion of Judah."
  },
  {
    "bookId": "genesis",
    "chapter": 50,
    "title": "Genesis 50",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And Joseph fell upon his father's face, and wept upon him, and kissed him. 50:1-6 Though pious relatives and friends have lived to a good old age, and we are confident they are gone to glory, yet we may regret our own loss, and pay respect to their memory by lamenting them. Grace does not destroy, but it purifies, moderates, and regulates natural affection. The departed soul is out of the reach of any tokens of our affection; but it is proper to show respect to the body, of which we look for a glorious and joyful resurrection, whatever may become of its world. Thus Joseph showed his , and love to his father. He ordered the body to be embalmed, or wrapped up with spices, to preserve it. See how vile our bodies are, when the soul has forsaken them; they very little time become noisome, and offensive. Genesis 50:2And Joseph commanded his servants the physicians to embalm his father: and the physicians embalmed Israel. Genesis 50:3And forty days were fulfilled for him; for so are fulfilled the days of those which are embalmed: and the Egyptians mourned for him threescore and ten days. Genesis 50:4And when the days of his mourning were past, Joseph spoke to the house of Pharaoh, saying, If now I have found eyes, speak, I pray you, in the ears of Pharaoh, saying, Genesis 50:5My father made me swear, saying, Look, I die: in my grave which I have digged for land of Canaan, there shall you bury me.",
        "source": "https://biblehub.com/commentaries/mhc/genesis/50.htm",
        "scrapedAt": "2025-12-30T03:25:55.190Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And Joseph fell upon his father's face, and wept upon him, and kissed him. Genesis 50:1-261 And Joseph fell upon his father's face, and wept upon him, and kissed him. Et jactavit se patris sui, et , et osculatus est eum. 2 And Joseph commanded his servants the physicians to embalm his father: and the physicians embalmed Israel. Et praecepti Joseph servis suis medicis, ut aromatibus condrientpatrem suum, et aromatibus condiverunt medici ipsum Israel. 3 And forty days were fulfilled for him; for so are fulfilled the days of those which are embalmed: and the Egyptians mourned for him threescore and ten days. ei quadraginta dies: sic enim complentur dies eorum qui condiuntur aromatibus: et fleverunt eum Aegyptii septuginta diebus. 4 And when the days of his mourning were past, Joseph spoke to the house of Pharaoh, saying, If now I have found eyes, speak, I pray you, in the ears of Pharaoh, saying, 4. Transierunt itaque dies luctus ejus: et loquutus est Pharaonis dicendo, Si quaeso inveni vestris, loquimini Pharaonis, dicendo, 5 My father made me swear, saying, Look, I:die: in my grave which I have digged for land of Canaan, there shall you bury me. Now therefore let me go up, I pray you, and bury my father, and I will come again. Pater meus adjuravit me, dicendo Ecce ego morior: in sepulcro meo, quod fodi Chenann, sepelies me: nunc igitur ascendam, obscero, et sepeliam patrem meum, et revertat. 6 And Pharaoh said, Go up, and bury your father, according as he made you swear.",
        "source": "https://biblehub.com/commentaries/calvin/genesis/50.htm",
        "scrapedAt": "2025-12-30T03:25:57.715Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And Joseph fell upon his father's face, and wept upon him, and kissed him. Joseph bewails his father's death; and embalms him, Genesis 50:1,2. The Egyptians mourn for him seventy days, Genesis 50:3. Joseph with Pharaoh's leave carries him stately accompanied to Canaan, Genesis 50:4-9. They mourn there seven days, and sorely, so that the Canaanites from thence named the place Abel-mizraim, Genesis 50:10,11. They bury him where he commanded, Genesis 50:12,13. They return to Egypt, Genesis 50:14. Jacob being dead, his sons are afraid of their brother Joseph, Genesis 50:15. Pretending their father's order, they address for pardon, Genesis 50:16-18. He weeps, forgives, and encourages them, Genesis 50:19-21. Joseph lives to see a third and fourth generation, Genesis 50:22,23. Assures his brothers of their future return to Canaan, Genesis 50:24. He takes an oath of them to carry his bones with them, Genesis 50:25; dies; is embalmed; and coffin, Genesis 50:26. And doubtless closed his eyes, as God had promised, Genesis 46:4, which may be general phrase. Genesis 50:2And Joseph commanded his servants the physicians to embalm his father: and the physicians embalmed Israel. The dead corpse of his father with spices, and ointments, and other things necessary for the preservation of the body from putrefaction as long as might be. This Joseph did, partly, because he would comply as far as he could with the Egyptians, whose custom this was, from whom also the Jews took it, 2 Chronicles 16:14 John 19:39,40; partly, to do honour and show his affections to his worthy father; and partly, because this was necessary for the keeping of the body so long as the times of mourning and the journey to Canaan required.",
        "source": "https://biblehub.com/commentaries/poole/genesis/50.htm",
        "scrapedAt": "2025-12-30T03:26:00.200Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And Joseph fell upon his father's face, and wept upon him, and kissed him. After the natural outburst of sorrow for his deceased parent, Joseph gave orders to embalm the body, according to the custom of Egypt. \"His servants, the physicians. \" As the grand vizier of Egypt, he has retinue. The classes and functions of the may be learned from Herodotus (ii. -81-86). There were special physicians for each disease; and the embalmers formed a class by themselves. \"Forty days\" were process of embalming; \"seventy days,\" including the forty, were devoted to mourning for the dead. Herodotus mentions this number as the period of embalming. Diodorus (i. 91) assigns upwards of thirty days to the process. It is probable that the actual process was continued for forty days, and that the body for the remaining thirty days of mourning. See Hengstenberg's B. B. Mos. u. Aeg. , and Rawlinson's Herodotus. Genesis 50:2And Joseph commanded his servants the physicians to embalm his father: and the physicians embalmed Israel. Genesis 50:3And forty days were fulfilled for him; for so are fulfilled the days of those which are embalmed: and the Egyptians mourned for him threescore and ten days. Genesis 50:4And when the days of his mourning were past, Joseph spoke to the house of Pharaoh, saying, If now I have found eyes, speak, I pray you, in the ears of Pharaoh, saying,Joseph, by means of Pharaoh's courtiers, , because he was a mourner, applies for leave to bury his land of Kenaan, according to his oath.",
        "source": "https://biblehub.com/commentaries/barnes/genesis/50.htm",
        "scrapedAt": "2025-12-30T03:26:02.693Z"
      }
    ],
    "keyThemes": [
      "Mourning with hope",
      "Providence over evil",
      "Forgiveness and reconciliation",
      "Faith in the promise"
    ],
    "christConnection": "Joseph's words—\"You meant evil...God meant it for good\"—summarize the gospel. The cross was humanity's greatest evil, yet God's greatest good."
  }
];

// ═══════════════════════════════════════════════════════════════════════════════
// EXODUS (9 Chapters)
// ═══════════════════════════════════════════════════════════════════════════════

export const EXODUS_COMMENTARY: ChapterCommentary[] = [
  {
    "bookId": "exodus",
    "chapter": 1,
    "title": "Exodus 1",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "Now these are the names of the children of Israel, which came into Egypt; every man and his household came with Jacob. 1:1-7 During more than 200 years, while Abraham, Isaac, and Jacob lived at liberty, the Hebrews increased slowly; only about seventy persons went down into Egypt. There, in about the same number of years, though under cruel bondage, they became a large nation. This wonderful increase was according to the promise long before made to the fathers. Though the performance of God's promises is sometimes slow, it is always sure. Exodus 1:2Reuben, Simeon, Levi, and Judah, Exodus 1:3Issachar, Zebulun, and Benjamin, Exodus 1:4Dan, and Naphtali, Gad, and Asher. Exodus 1:5And all the souls that came out of the loins of Jacob were seventy souls: for Joseph already. Exodus 1:6And Joseph died, and all his brothers, and all that generation. Exodus 1:7And the children of Israel were fruitful, and increased abundantly, and multiplied, and waxed exceeding mighty; and the land was filled with them. Exodus 1:8Now there arose up a new king over Egypt, which knew not Joseph. 1:8-14 The land of Egypt became to Israel a house of bondage. The place where we have been happy, may soon become the place of our affliction; and that may prove the greatest cross to us, of which we said, This same shall comfort us. Cease from man, and say not of any place on this side heaven, This is my rest. All that knew Joseph, loved him, and were kind to his brothers for his sake; but the best and most useful services a man does to others, are soon forgotten after his death.",
        "source": "https://biblehub.com/commentaries/mhc/exodus/1.htm",
        "scrapedAt": "2025-12-30T03:26:47.785Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "Now these are the names of the children of Israel, which came into Egypt; every man and his household came with Jacob. Exodus 1:1-7 1. Now these are the names of the children of Israel, which came into Egypt: every man and his household came with Jacob. Haec sunt nomina filiorum Israel qui cum Jahacob: sua venit. Reuben, Simeon, Levi, and Judah, 2. Reuben, Simeon, Levi, et Jehudah, 3. Issachar, Zebulun, and Benjamin, 3. Issachar, Zabulon, et Benjamin, 4. Dan, Nephthali, Gad, et Asser. Dan and Naphtali, Gad and Asher. And all the souls that came out of the loins of Jacob were seventy souls: for Joseph already 5. animae egressae ex femore Jahacob, septuaginta animae, in Aegypto. And Joseph died, and all his brothers, and all that generation. Mortuus vero est Joseph, et omnes fratres eius, et tota aetas illa. And the children of Israel were fruitful, and increased abundantly, and multiplied, and waxed exceeding mighty; and the land was filled with them. Porto creverunt filii Israel, et aucti sunt, et quamplurimum; adeo ut plena ipsis esset terra. These are the names It is the intention of Moses to describe the miraculous deliverance of the people, (from from where the Greeks gave the name to the book;) but, before he comes to that, he briefly reminds us that the promise given to Abraham was not ineffectual, that his seed should be multiplied \"as the stars of the heaven, and as the sand which is upon the sea-shore. \" This, then, is the commencement of the book, -- that although their going down from the land of Canaan into Egypt might have seemed at the time as it were the end and abolition of God's covenant, own time he abundantly accomplished what he had promised to his servant as to the increase of his descendants.",
        "source": "https://biblehub.com/commentaries/calvin/exodus/1.htm",
        "scrapedAt": "2025-12-30T03:26:50.340Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "Now these are the names of the children of Israel, which came into Egypt; every man and his household came with Jacob. The names and numbers of the children of Israel that came into Egypt, Exo 1:1-5. Joseph, his brothers, and that generation die, Exo 1:6. A new king, who knew not Joseph, Exo 1:8, goes about by affliction, & c. to suppress the Israelites, Exo 1:9-11. They increase, Exo 1:12. Pharaoh commands the midwives to kill the male children, Exo 1:15,16. They fear God, and obey not the king, Exo 1:17. For this God blesses the midwives, Exo 1:20. Pharaoh commands all the male children to be drowned, Exo 1:22. This list is here repeated, that by comparing this small root with so vast a company of branches as grew upon it, we may see the wonderful providence of fulfilling of his promises. And his household, his children and grandchildren, as the word house is taken Rth 4:11 2Sa 7:11 1Ki 21:29. Exodus 1:2Reuben, Simeon, Levi, and Judah, Reuben, Simeon, Levi, and Judah, Exodus 1:3Issachar, Zebulun, and Benjamin, Who, though the young of all, is placed before Dan, Naphtali, &c. , because these were the sons of the handmaidens. Exodus 1:4Dan, and Naphtali, Gad, and Asher. No text from Poole on this verse. Exodus 1:5And all the souls that came out of the loins of Jacob were seventy souls: for Joseph already. Seventy souls, including Jacob and Joseph, and his two sons. See Genesis 46:26,27 Deu 10:22. Or if they were but sixty-nine, they are called seventy by a round number, of which we shall have many instances.",
        "source": "https://biblehub.com/commentaries/poole/exodus/1.htm",
        "scrapedAt": "2025-12-30T03:26:52.901Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "Introduction to Exodus1. The book of Exodus consists of two distinct portions. The first Exodus 1-19 gives a detailed account of the circumstances under which the deliverance of the Israelites was accomplished. The second Exodus 20-40 describes the giving of the law, and the institutions which completed the organization of the people as \"a kingdom of priests, and an holy nation\" Exodus 19:6. The name \"Exodus\" (ἔξοδος exodos), i. e. \"the going forth,\" assigned to it by the Alexandrian Jews, applies rather to the former portion than to the whole book. The narrative is closely connected with that of Genesis, and shows not only that it was written by the same author, but that it formed part of one general plan. Still it is a distinct section. The first events which it relates are separated from the last by a considerable interval, and it presents the people of Israel under totally different circumstances. Its termination is marked with equal distinctness, winding up with the completion of the tabernacle. The book is divided into many smaller sections; each of which has the marks which throughout the Pentateuch indicate a subdivision. They are of different lengths, and were probably written on separate parchments or papyri, the long not exceeding the dimensions of contemporary . They were apparently thus arranged for the convenience of public reading. This general view of the structure of the book is what might have been expected. Some of the most convincing evidences of the Mosaic authorship are supplied by the contents of this book.",
        "source": "https://biblehub.com/commentaries/barnes/exodus/1.htm",
        "scrapedAt": "2025-12-30T03:26:55.392Z"
      }
    ],
    "keyThemes": [
      "Multiplication despite oppression",
      "Fear of God over fear of man",
      "Satanic attack on the seed",
      "Setting the stage for deliverance"
    ],
    "christConnection": "Pharaoh's attempt to destroy Hebrew boys anticipates Herod's slaughter of infants. Satan attacks the line of promise, but God preserves His plan."
  },
  {
    "bookId": "exodus",
    "chapter": 2,
    "title": "Exodus 2",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And there went a man of the house of Levi, and took to wife a daughter of Levi. 2:1-4 Observe the order of Providence: just at the time when Pharaoh's cruelty rose to its height by ordering the Hebrew children to be drowned, the deliverer was born. When men are contriving the ruin of the church, God is preparing for its salvation. The parents of Moses saw he was a goodly child. A lively faith can take encouragement from the least hint of the Divine favour. It is said, Heb 11:23, that the parents of Moses hid him by faith; they had the promise that Israel should be preserved, which they relied upon. 's promise quickens to the use of lawful means for obtaining mercy. Duty is ours, events are God's. will set us above the fear of man. At three months' end, when they could not hide the infant any longer, they put ark of bulrushes by the river's brink, and set his sister to watch. And if the weak affection of a mother were thus careful, what shall we think of Him, whose love, whose compassion is, as himself, boundless. Moses never had a stronger protection about him, no, not when all the Israelites were round his wilderness, than now, when he lay alone, a helpless babe upon the waves. No water, no Egyptian can hurt him. When we seem most neglected and forlorn, God is most present with us. Exodus 2:2And the woman conceived, and bare a son: and when she saw him that he was a goodly child, she hid him three months.",
        "source": "https://biblehub.com/commentaries/mhc/exodus/2.htm",
        "scrapedAt": "2025-12-30T03:26:57.861Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And there went a man of the house of Levi, and took to wife a daughter of Levi. Exodus 2:1-10 1. And there went a man of the house of Levi, and took to wife a daughter of Levi. ex domo Levi, et acceperat filiam Levi. And the woman conceived, and bare a son: and when she saw him that he was a goodly child, she hid him three months. illa, et peperit filium; vidensque eum esse pulchrum, abscondit tribus mensibus. And when she could not longer hide him, she took for him an ark of bulrushes, and daubed it with slime and with pitch, and put the child in it; and she laid flags by the river's brink. Et quia illum abscondere amplius non poterat, accepit ei arcam arundineam, et oblevit eam , et infantulum: , juxta ripam fluminis. And his sister stood afar off, to wit what would be done to him. Stetit vero soror ejus eminus, ut cognosceret quid ei fieret. And the daughter of Pharaoh came down to wash herself at the river; and her maidens walked along by the river's side: and when she saw the ark among the flag's, she sent her maid to fetch it. Porro descendit filia Pharaonis ut lavaret : ( ejus secus ripam fluminis:) et videns carecti misit ancillam suam quae illam tolleret. And when she had opened it, she saw the child: and, look, the babe wept. And she had compassion on him, and said, This is one of the Hebrews' children.",
        "source": "https://biblehub.com/commentaries/calvin/exodus/2.htm",
        "scrapedAt": "2025-12-30T03:27:00.370Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And there went a man of the house of Levi, and took to wife a daughter of Levi. Moses's parentage and birth, Exodus 2:1,2. His mother makes an ark, puts him in it, Exodus 2:3. Pharaoh's daughter going to wash herself, ses him, takes him for her own child, and gives him to his mother to nurse, Exodus 2:4-9. Moses seeing an Israelite wronged by an Egyptian, kills him, Exodus 2:11,12. Pharaoh hearing this, seeks to slay Moses; he flees to Midian, Exodus 2:15. There he rescues Reuel's daughters from the violence of the shepherds, Exodus 2:17; serves Reuel, and marries his daughter Zipporah, Exo 21. She bears him a son, his name, and the reason of it, Exodus 2:22. God heares the cry of the Israelites, Exodus 2:23-25. There went a man, viz. Amram, Exodus 6:20 Numbers 26:58,59 from the place of his abode to another place for the following purpose. A daughter of Levi, namely Jochebed, Numbers 26:59, called a daughter, not strictly, but more largely, to wit, a grandchild, as the words father and son are oft used for a grandfather and a grandson, as has been showed before: And so the word sister, Exodus 6:20, is to be taken largely, as brother is oft used for a cousin. This seems more probable than that an Israelite should marry his own sister, which even heathens by the light of nature have condemned, especially now when he had such abundant choice elsewhere. Exodus 2:2And the woman conceived, and bare a son: and when she saw him that he was a goodly child, she hid him three months.",
        "source": "https://biblehub.com/commentaries/poole/exodus/2.htm",
        "scrapedAt": "2025-12-30T03:27:02.858Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And there went a man of the house of Levi, and took to wife a daughter of Levi. A man ... a daughter of Levi - Amram and Jochebed. See Exodus 6:20. Exodus 2:2And the woman conceived, and bare a son: and when she saw him that he was a goodly child, she hid him three months. Bare a son - Not her firstborn; Aaron and Miriam were older than Moses. The object of the writer is simply to narrate the events which led to the Exodus, and he mentions nothing that had no direct bearing upon his purpose. A goodly child - See the marginal references. Probably Jochebed did not midwife Exodus 1:15, and she was of course cautious not to show herself to Egyptians. The hiding of the child is spoken of as an act of 11:23. It was belief that God would watch over the child. Exodus 2:3And when she could not longer hide him, she took for him an ark of bulrushes, and daubed it with slime and with pitch, and put the child in it; and she laid flags by the river's brink. The ark was made of the papyrus which was commonly used by the Egyptians for light and swift boats. The species is no longer Nile below Nubia. It is a strong rush, like the bamboo, about the thickness of a finger, three cornered, and attains the height of 10 to 15 feet. It is represented with great accuracy on the most ancient monuments of Egypt.",
        "source": "https://biblehub.com/commentaries/barnes/exodus/2.htm",
        "scrapedAt": "2025-12-30T03:27:05.345Z"
      }
    ],
    "keyThemes": [
      "Providence in danger",
      "Failed human deliverance",
      "Exile and preparation",
      "God remembers His covenant"
    ],
    "christConnection": "Moses is rescued from water and raised in a palace, then becomes a rejected deliverer—prefiguring Christ, rejected by His own before becoming Savior."
  },
  {
    "bookId": "exodus",
    "chapter": 3,
    "title": "Exodus 3",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "Now Moses kept the flock of Jethro his , the pri of Midian: and he led the flock to the backside of the desert, and came to the mountain of God, even to Horeb. 3:1-6 The years of the life of Moses are divided into three forties; the first forty he spent as a 's court, the second as a , the third as a . How changeable is the life of man! The first appearance of God to Moses, found him tending sheep. This seems a poor employment for a man of his parts and education, yet he rests satisfied with it; and thus learns meekness and contentment, for which he is more writ, than for all his learning. Satan loves to find us idle; God is pleased when he finds us employed. Being alone, is a good friend to our communion with God. To his great surprise, Moses saw a bush burning without fire to kindle it. The bush burned, and yet did not burn away; an emblem of the in Egypt. And it fitly reminds us of the age, under its sever persecutions kept by the presence of God from being destroyed. Fire is an emblem, in Scripture, of the Divine holiness and justice, also of the afflictions and trials with which God proves and purifies his people, and even of that baptism of the Holy Ghost, by which sinful affections are consumed, and the soul changed into the Divine nature and image. God gave Moses a gracious call, to which he returned a ready answer.",
        "source": "https://biblehub.com/commentaries/mhc/exodus/3.htm",
        "scrapedAt": "2025-12-30T03:27:07.804Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "Now Moses kept the flock of Jethro his , the pri of Midian: and he led the flock to the backside of the desert, and came to the mountain of God, even to Horeb. Exodus 3:1-5 1. Now Moses kept the flock of Jethro his father-in-law, the pri of Midian: and he led the flock to the back-side of the desert, and came to the mountain of God, even, to Horeb. oves Jethro soceri sui sacerdotis Midian, duxitque , et Dei, nempe Horeb. And the Angel of the Lord appeared to flame of fire out of the midst of a bush; and he looked, and, look, the bush burned with fire, and the bush was not consumed. Et visus est ei Angelus ignis e medio rubi: et vidit, et ecce rubus , et rubus ipse non consumebatur. And Moses said, I will now turn aside, and see this great sight, why the bush is not burnt. Dixit itaque Moses, Divertam nunc ut videam visionem hanc magnam, quare non comburatur rubus. And when the Lord saw that he turned aside to see, God called to him out of the midst of the bush, and said, Moses, Moses. And he said, Here am I. Et vidit Jehova quod : vocavitque eum Deus e medio rubi, dicens, Moses, Moses. Et respondit, Ecce ego. And he said, Draw not nigh here: put off your shoes from off your feet; for the place whereon you stand is holy ground. Tunc dixit, Ne appropinques huc: solve calceamenta e pedibus tuis: quia locus, in quo stas, terra sancta est.",
        "source": "https://biblehub.com/commentaries/calvin/exodus/3.htm",
        "scrapedAt": "2025-12-30T03:27:10.351Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "Now Moses kept the flock of Jethro his , the pri of Midian: and he led the flock to the backside of the desert, and came to the mountain of God, even to Horeb. Moses keeping Jethro's flock, comes to mount Horeb, Exodus 3:1. There God appears to burning bush, Exodus 3:2. Moses beholds it, Exodus 3:3. God calls to him out of the burning bush, Exodus 3:4; cautions him what to do, Exodus 3:5,6. God ses their afflictions, Exodus 3:7; promises them a happy deliverance, Exodus 3:8; sends Moses to Pharaoh, Exodus 3:10. He desires to be excused because unworthy, Exodus 3:11. God encourages him, Exodus 3:12, and directs him what to say to the children of Israel, Exodus 3:13,14; makes his name known to Moses, Exodus 3:15; commands him to gather the elders of Israel, Exodus 3:16; and what he was to say to them, Exodus 3:17; likewise to Pharaoh, Exodus 3:18. Pharaoh's obstinacy, Exodus 3:19. God threatens the Egyptians, Exodus 3:20; and tells Moses with what plenty the Israelites should depart, Exodus 3:21,22. 1401 Jethro was either the same with Reuel, or his son, who, upon his father's death, succeeded into his office. See Exodus 2:18. To the backside of the desert, to its innermost parts, which were behind Jethro's habitation, and the former pastures, where he went for fresh pastures. The mountain of God; so called, either as a high or eminent mountain; or from the vision of God here following; see Acts 7:30; or by anticipation, from God's glorious appearance there, and giving the law from thence, Exodus 18:5 19:3: see also 1 Kings 19:8.",
        "source": "https://biblehub.com/commentaries/poole/exodus/3.htm",
        "scrapedAt": "2025-12-30T03:27:12.897Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "This chapter marks the commencement of the series of events which immediately preceded the Exodus. Hitherto, the narrative has been studiously brief, stating only what was necessary to be known as preparatory to those events; but from this point Moses dwells minutely on the details, and enables us to realize the circumstances of the catastrophe immediate and remote consequences stands world's history. Exodus 3:1Now Moses kept the flock of Jethro his , the pri of Midian: and he led the flock to the backside of the desert, and came to the mountain of God, even to Horeb. Jethro his father-in-law - Or \"brother-in-law. \" The Hebrew is a word signifying relative by marriage. When Moses , Reuel was an elderly man Exodus 2:16; 40 years later , Reuel's son, Jethro, had probably succeeded him. The backside - i. e. \"to the west of the district. \" Among the Hebrews the East is before a man, the west behind him, the south and north on the right and left hand. Desert - Or wilderness, not a barren waste, but a district supplying pasturage. The district near Sherm, on the west of the gulf of Akabah, where Jethro may have resided, is described as barren and parched; on the west and east are rocky tracts, but to the northw lies the district of Sinai, where the pasturage is good and water abundant. The Bedouins drive their flocks there from the lowlands at the approach of summer. From this it may be inferred that the events here recorded took place at that season.",
        "source": "https://biblehub.com/commentaries/barnes/exodus/3.htm",
        "scrapedAt": "2025-12-30T03:27:15.374Z"
      }
    ],
    "keyThemes": [
      "Divine revelation",
      "Holy ground",
      "I AM—the covenant name",
      "Calling to mission"
    ],
    "christConnection": "Jesus claims the divine name \"I AM\" (John 8:58). The unconsumed bush pictures God dwelling with His people without destroying them—fulfilled in the incarnation."
  },
  {
    "bookId": "exodus",
    "chapter": 4,
    "title": "Exodus 4",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And Moses answered and said, But, look, they will not believe me, nor hearken to my voice: for they will say, The LORD has not appeared to you. 4:1-9 Moses objects, that the people would not take his word, unless he showed them some sign. God gives him power to work miracles. But those who are now employed to deliver God's messages to men, need not the power to work miracles: their character and their doctrines are to be tried by that word of God to which they appeal. These miracles especially referred to the miracles of the Lord Jesus Christ. It belonged to Him only, to cast the power of the devil out of the soul, and to heal the soul of the leprosy of sin; and so it was for Him first to cast the devil out of the body, and to heal the leprosy of the body. Exodus 4:2And the LORD said to him, What is hand? And he said, A rod. Exodus 4:3And he said, Cast it on the ground. And he cast it on the ground, and it became a serpent; and Moses fled from before it. Exodus 4:4And the LORD said to Moses, Put forth yours hand, and take it by the tail. And he put forth his hand, and caught it, and it became a hand: Exodus 4:5That they may believe that the LORD God of their fathers, the God of Abraham, the God of Isaac, and the God of Jacob, has appeared to you.",
        "source": "https://biblehub.com/commentaries/mhc/exodus/4.htm",
        "scrapedAt": "2025-12-30T03:27:17.843Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And Moses answered and said, But, look, they will not believe me, nor hearken to my voice: for they will say, The LORD has not appeared to you. Exodus 4:1-9 1. And Moses answered and said, But, look, they will not believe me, nor hearken to my voice: for they will say, The Lord has not appeared to you. Tunc respondit Moses, et dixit, Sed ecce non credent mihi, neque obedient voci meae quia dicent, Non apparuit tibi Jehova. And the Lord said to him, What is hand? and he said, A rod. Et Jehova, Quid est tua? Et dixit, Baculus. And he said, Cast it on the ground. And he cast it on the ground, and it became a serpent; and Moses fled from before it. Tunc dixit, Projice . Et , et factus est serpens, et fugit Moses a conspectu ejus. And the Lord said to Moses, Put forth yours hand, and take it by the tail. And he put forth his hand, and caught it, and it became a hand: 4. Et dixit , Extende manum tuam, et apprehende caudam ejus. Et extendit manum suam, et apprehendit eum: et factus est ejus; 5. That they may believe that the Lord God of their fathers, the God of Abraham, the God of Isaac, and the God of Jacob, has appeared to you. Ut credant quod apparuerit tibi Jehova Deus patrum ipsorum, Deus Abraham, Deus Isaac, et Deus Jacob. And the Lord said furthermore to him, Put now yours hand into your bosom.",
        "source": "https://biblehub.com/commentaries/calvin/exodus/4.htm",
        "scrapedAt": "2025-12-30T03:27:20.539Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And Moses answered and said, But, look, they will not believe me, nor hearken to my voice: for they will say, The LORD has not appeared to you. Moses's objection, Exodus 4:1. The answer, Exodus 4:2. God turns his rod into a serpent, Exodus 4:3-5. He adds another sign, Exodus 4:6-8. And l they would not believe, water is turned into blood, Exodus 4:9. Moses's objection, Exodus 4:10. God argues with him, Exodus 4:11. God's command and promise, Exodus 4:12. Moses's answer, Exodus 4:13. God is angry, and enjoins Aaron to the same employment, Exodus 4:14; tells what Aaron should be, and what Moses should do, Exodus 4:15-17. Moses returning to Jethro, craves leave to go to Egypt to see his brothers: Jethro's grant, Exodus 4:18. Moses having taken the rod of God, departs with his wife and children into Egypt, Exodus 4:20. God tells him what he should say to Pharaoh, Exodus 4:22,23. God seekes to kill Moses, Exodus 4:24. Zipporah with a sharp knife cuts off her son's foreskin and what she said, Exodus 4:25,26. God commands Aaron to meet Moses, Exodus 4:27. Moses declares to Aaron both what he had heard and seen, Exodus 4:28. They gather together the elders of Israel, Exodus 4:29; and Aaron speaks all the words and does all the signs which God commanded, Exodus 4:30. The people believe, Exodus 4:31. They will not believe me; which he conjectured both from reason, because the greatness and strangeness of the deliverance made it seem incredible; and their minds were so oppressed with cares and labours, that it was not likely they could raise them up to any such expectation; and from the experience which he had of them forty years before, when their deliverance by his means and interest at court seemed much more credible than now it did.",
        "source": "https://biblehub.com/commentaries/poole/exodus/4.htm",
        "scrapedAt": "2025-12-30T03:27:23.040Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And Moses answered and said, But, look, they will not believe me, nor hearken to my voice: for they will say, The LORD has not appeared to you. With this chapter begins the series of miracles which deliverance of Israel. The first miracle was performed to remove the first obstacle, namely, the reluctance of Moses, conscious of his own weakness, and of the enormous power with which he would have to contend. Exodus 4:2And the LORD said to him, What is hand? And he said, A rod. A rod - The word seems to denote the long staff which on Egyptian monuments is borne by of authority. It was usually made of acacia wood. Exodus 4:3And he said, Cast it on the ground. And he cast it on the ground, and it became a serpent; and Moses fled from before it. A serpent - This miracle had a meaning which Moses could not mistake. The serpent was probably the basilisk or Uraeus, the Cobra. This was the symbol of royal and divine power on the diadem of every Pharaoh. The conversion of the rod was not merely a portent, it was a sign, at once a pledge and representation of victory over the king and gods of Egypt! Exodus 4:4And the LORD said to Moses, Put forth yours hand, and take it by the tail. And he put forth his hand, and caught it, and it became a hand: Exodus 4:5That they may believe that the LORD God of their fathers, the God of Abraham, the God of Isaac, and the God of Jacob, has appeared to you.",
        "source": "https://biblehub.com/commentaries/barnes/exodus/4.htm",
        "scrapedAt": "2025-12-30T03:27:25.534Z"
      }
    ],
    "keyThemes": [
      "Overcoming objections",
      "Signs and wonders",
      "Importance of covenant obedience",
      "Partnership in mission"
    ],
    "christConnection": "The signs authenticate Moses as God's messenger, as miracles later authenticate Christ. The serpent on the staff anticipates the bronze serpent and the cross."
  },
  {
    "bookId": "exodus",
    "chapter": 5,
    "title": "Exodus 5",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And afterward Moses and Aaron went in, and told Pharaoh, Thus says the LORD God of Israel, Let my people go, that they may hold a feast to wilderness. 5:1-9 God will own his people, though poor and despised, and will find a time to plead their cause. Pharaoh treated all he had heard with contempt. He had no knowledge of Jehovah, no fear of him, no love to him, and therefore refused to obey him. Thus Pharaoh's pride, ambition, covetousness, and political knowledge, hardened him to his own destruction. What Moses and Aaron ask is very reasonable, only to go three days' journey into the desert, and that on a good errand. We will sacrifice to the Lord our God. Pharaoh was very unreasonable, in saying that the people were idle, and therefore talked of going to sacrifice. He thus misrepresents them, that he might have a pretence to add to their burdens. To this day we find many who are more disposed to find fault with their neighbours, for service of God a few hours spared from their wordly business, than to blame others, who give twice the time to sinful pleasures. Pharaoh's command was barbarous. Moses and Aaron themselves must get to the burdens. Persecutors take contempt and hardship upon ministers. The usual tale of bricks must be made, without the usual allowance of straw to mix with the clay. Thus more work was to be laid upon the men, which, if they performed, they would be broken with labour; and if not, they would be punished.",
        "source": "https://biblehub.com/commentaries/mhc/exodus/5.htm",
        "scrapedAt": "2025-12-30T03:27:28.031Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And afterward Moses and Aaron went in, and told Pharaoh, Thus says the LORD God of Israel, Let my people go, that they may hold a feast to wilderness. Exodus 5:1-5 1. And afterwards Moses and Aaron went in, and told Pharaoh, Thus says the Lord God of Israel, Let my people go, that they may hold a feast to wilderness. Postea venerunt , et dixerunt Pharaoni: Sic dixit Jehova Deus Israel, Dimitte populum meum ut festum diem celebrent . And Pharaoh said, Who is the Lord, that I should obey his voice to let Israel go? I know not the Lord, neither will I let Israel go. Et dixit Pharao, Quis est Jehova, ut obediam voci ejus dimittendo Israelem? Non novi Jehovam, atque etiam Israelem non dimittam. And they said, The God of the Hebrews has met with us: let us go, we pray you, three days' journey into the desert, and sacrifice to the Lord our God, l he fall upon us with pestilence, or with the sword. Tunc dixerunt, Deus Hebraeorum occurrit nobis. Ergo eamus iter trium , ut sacrificemus Jehovae Deo nostro, ne forte pestis vel gladius. And the king of Egypt said to them, Therefore do you, Moses and Aaron, let the people from their works? get you to your burdens. rex Aegypti, Ut quid abstrahitis populum ab operibus suis? vestros. And Pharaoh said, Look, the people of the land now are many, and you make them rest from their burdens. Et dixit Pharao, En multi nunc populus terrae, et vos cessare facitis eos a laboribus suis.",
        "source": "https://biblehub.com/commentaries/calvin/exodus/5.htm",
        "scrapedAt": "2025-12-30T03:27:30.562Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And afterward Moses and Aaron went in, and told Pharaoh, Thus says the LORD God of Israel, Let my people go, that they may hold a feast to wilderness. Moses and Aaron entreates Pharaoh to let the people go, Exodus 5:1. Pharaoh's blasphemous refusal, Exodus 5:2. Chides Moses and Aaron for their requ, Exodus 5:4. Pharaoh, seeing the Israelites to be many, Exodus 5:5, commands the task-masters and officers to increase their bondage, Exodus 5:6-9. The task-masters go and do as Pharaoh commands, Exodus 5:10,11. The scattering of the people throughout Egypt, Exodus 5:12. The task-masters' cruelty to the officers of the Israelites, Exodus 5:14. The officers' complaint to Pharaoh, Exodus 5:15,16. He upbraids them with idleness, Exodus 5:17. His harsh answer, Exodus 5:18. The officers of the children of Israel meet Moses and Aaron, and blame them, Exodus 5:20,21. Moses returns and complains to God, Exodus 5:22,23. Moses and Aaron went in, and with them some of the elders of Israel, as may seem from Exodus 3:18, though here only the two chiefs be mentioned. Or, because Moses did not seem to be satisfied with the assistance of the elders before offered him, Exodus 3:18, God was pleased to give him a more acceptable stead, even Aaron his brother, Exodus 4:14. Told Pharaoh: either both successively told him; or Aaron did it immediately, and with his tongue, Moses by his interpreter, and by his command. Or, offer a sacrifice, as they express it, Exodus 5:3 and Exodus 10:9. For both went together, and a good part of many sacrifices was before the Lord and to the honour of the Lord.",
        "source": "https://biblehub.com/commentaries/poole/exodus/5.htm",
        "scrapedAt": "2025-12-30T03:27:33.057Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And afterward Moses and Aaron went in, and told Pharaoh, Thus says the LORD God of Israel, Let my people go, that they may hold a feast to wilderness. Pharaoh - This king, probably Tothmosis II, the great grandson of Aahmes Exodus 1:8, the original persecutor of the Israelites, must have been resident at this city, probably Tanis Exodus 2:5, of Lower Egypt, situated on the Nile. The Lord God - Yahweh God of Israel demanded the services of His people. The demand, according to the general views of the pagans, was just and natural; the Israelites could not offer the necessary presence of Egyptians. Exodus 5:2And Pharaoh said, Who is the LORD, that I should obey his voice to let Israel go? I know not the LORD, neither will I let Israel go. I know not the Lord - Either Pharaoh had not heard of Yahweh, or he did not recognize Him as a God. Exodus 5:3And they said, The God of the Hebrews has met with us: let us go, we pray you, three days' journey into the desert, and sacrifice to the LORD our God; l he fall upon us with pestilence, or with the sword. Three days' journey - See the Exodus 3:18 note. With pestilence, or with the sword - This shows that the plague was well known to the ancient Egyptians. The reference to the sword is equally natural, since the Israelites occupied the eastern district, which was frequently disturbed by the neighboring Shasous.",
        "source": "https://biblehub.com/commentaries/barnes/exodus/5.htm",
        "scrapedAt": "2025-12-30T03:27:35.560Z"
      }
    ],
    "keyThemes": [
      "Confronting worldly power",
      "Hardship before deliverance",
      "Testing of faith",
      "Crying out to God"
    ],
    "christConnection": "Before deliverance, suffering intensifies. Christ's followers often face increased opposition before breakthrough. The exodus pattern shapes the Christian life."
  },
  {
    "bookId": "exodus",
    "chapter": 6,
    "title": "Exodus 6",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "Then the LORD said to Moses, Now shall you see what I will do to Pharaoh: for with a strong hand shall he let them go, and with a strong hand shall he drive them out of his land. 6:1-9 We are most likely to to glorify God, and to be useful to men, when we learn by experience that we can do nothing of ourselves; when our whole dependence is placed on him, and our only expectation is from him. Moses had been expecting what God would do; but now he shall see what he will do. God would now be known by his name Jehovah, that is, a God performing what he had promised, and finishing his own work. God intended their happiness: I will take you to me for a people, a peculiar people, and I will be to you a God. More than this we need not ask, we cannot have, to make us happy. He intended his own glory: You shall know that I am the Lord. These good words, and comfortable words, should have revived the drooping Israelites, and have made them forget their misery; but they were so taken up with their troubles, that they did not heed God's promises. By indulging discontent and fretfulness, we deprive ourselves of the comfort we might have, both from God's word and from his providence, and go comfortless. Exodus 6:2And God spoke to Moses, and said to him, I am the LORD: Exodus 6:3And I appeared to Abraham, to Isaac, and to Jacob, by the name of God Almighty, but by my name JEHOVAH was I not known to them.",
        "source": "https://biblehub.com/commentaries/mhc/exodus/6.htm",
        "scrapedAt": "2025-12-30T03:27:38.041Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "Then the LORD said to Moses, Now shall you see what I will do to Pharaoh: for with a strong hand shall he let them go, and with a strong hand shall he drive them out of his land. Exodus 6:1-8 1. Then the Lord said to Moses, Now shall you see what I will do to Pharaoh: for with a strong hand shall he let them go, and with a strong hand shall he drive them out of his land. Et dixit , Nunc videbis qued facturus sum Pharaoni: robusta dimittet eos, in manu inquam robusta ejiciet eos e terra sua. And God spoke to Moses, and said to him, I am the Lord: 2. Et loquutus est , dixitque illi, Ego Jehova. And I appeared to Abraham, to Isaac, and to Jacob, by the name of God Almighty; but by my name JEHOVAH was I not known to them. Apparui quidem Abrahae, Isaac, et onmipotente: in nomine tamen meo Jehova non sum cognitus illis. And I have also established my covenant with them, to give them the land of Canaan, the land of their pilgrimage, in which they were strangers. Atque etiam erexi pactum , ut darem illis terram Chanaan, terram peregrinationum eorum, in qua peregrinati sunt. And I have also heard the groaning of the children of Israel, whom the Egyptians ; and I have remembered my covenant. Ideoque ego audivi gemitum filiorum Israel, quos Aegyptii serviliter opprimunt: et recordatus sum foederis mei. Therefore say to the children of Israel, I am the Lord, and I will bring you out from under the burdens of the Egyptians, and I will rid you out of their bondage; and I will redeem you with a stretched-out arm, and with great judgments.",
        "source": "https://biblehub.com/commentaries/calvin/exodus/6.htm",
        "scrapedAt": "2025-12-30T03:27:40.578Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "Then the LORD said to Moses, Now shall you see what I will do to Pharaoh: for with a strong hand shall he let them go, and with a strong hand shall he drive them out of his land. God encourages Moses, Exodus 6:1; renews his covenant, confirms it by his name Jehovah, Exodus 6:3-8. Their unbelief, Exodus 6:9. God commands Moses to speak to Pharaoh to let Israel go, Exodus 6:10-13. The genealogy of Reuben, Exodus 6:14; of Simeon, Exodus 6:15; of Levi, Exodus 6:16; of Aaron, Exodus 6:23. Moses and Aaron spoke to Pharaoh to let the children of Israel go, Exodus 6:27 With a strong hand; being compelled to do so by my powerful and terrible works. Exodus 6:2And God spoke to Moses, and said to him, I am the LORD: No text from Poole on this verse. Exodus 6:3And I appeared to Abraham, to Isaac, and to Jacob, by the name of God Almighty, but by my name JEHOVAH was I not known to them. Quest. How is this true, when God was known to them, and called by the name Jehovah? Genesis 15:7 26:24, &c. Answ. He speaks not of the letters or syllables, but of the thing signified by that name. For that denotes all his perfections, and, amongst others, the eternity, constancy, and immutability of his nature and will, and the infallible certainty of his word and promises. And this, says he, though it was believed by Abraham, Isaac, and Jacob, yet it was not experimentally known to them; for they only saw the promises afar off, Hebrews 11:13.",
        "source": "https://biblehub.com/commentaries/poole/exodus/6.htm",
        "scrapedAt": "2025-12-30T03:27:43.063Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "Then the LORD said to Moses, Now shall you see what I will do to Pharaoh: for with a strong hand shall he let them go, and with a strong hand shall he drive them out of his land. Exodus 6:2And God spoke to Moses, and said to him, I am the LORD:There appears to have been an interval of some months between the preceding events and this renewal of the promise to Moses. The meantime was not merely driving the people to desperation, but preparing them by severe labor, varied by hasty of stubble, for the exertions and privations of the wilderness. Hence, the formal and solemn character of the whole chapter. Exodus 6:2 I am the Lord ... - The meaning seems to be this: \"I am Jehovah (Yahweh), and I appeared to Abraham, Isaac, and Jacob as El Shaddai, but as to my name Jehovah, I was not made known to them. \" In other words, the full import of that name was not disclosed to them. See Exodus 3:14. Exodus 6:3And I appeared to Abraham, to Isaac, and to Jacob, by the name of God Almighty, but by my name JEHOVAH was I not known to them. God Almighty - Rather, \"El Shaddai,\" (שׁדי אל 'êl shadday), it is better to keep this as a proper name. Exodus 6:4And I have also established my covenant with them, to give them the land of Canaan, the land of their pilgrimage, in which they were strangers. Exodus 6:5And I have also heard the groaning of the children of Israel, whom the Egyptians ; and I have remembered my covenant.",
        "source": "https://biblehub.com/commentaries/barnes/exodus/6.htm",
        "scrapedAt": "2025-12-30T03:27:45.549Z"
      }
    ],
    "keyThemes": [
      "Covenant faithfulness",
      "Redemption promised",
      "Human weakness, divine strength",
      "Lineage of the deliverer"
    ],
    "christConnection": "God reveals Himself progressively, culminating in Christ who fully reveals the Father. The redemption language—\"I will redeem you with an outstretched arm\"—points to the cross."
  },
  {
    "bookId": "exodus",
    "chapter": 7,
    "title": "Exodus 7",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And the LORD said to Moses, See, I have made you a god to Pharaoh: and Aaron your brother shall be your prophet. 7:1-7 God glorifies himself. He makes people know that he is Jehovah. Israel is made to know it by the performance of his promises to them, and the Egyptians by the pouring out of his wrath upon them. Moses, as the ambassador of Jehovah, name, laid commands upon Pharaoh, denounced threatenings against him, and called for judgments upon him. Pharaoh, proud and great as he was, could not resist. Moses stood of Pharaoh, but made him tremble. This seems to be words, You shall be a god to Pharaoh. At length Moses is delivered from his fears. He makes no more objections, but, being , goes about his work with courage, and with perseverance. Exodus 7:2Thou shall speak all that I command you: and Aaron your brother shall speak to Pharaoh, that he send the children of Israel out of his land. Exodus 7:3And I will harden Pharaoh's heart, and multiply my signs and my land of Egypt. Exodus 7:4But Pharaoh shall not hearken to you, that I may lay my hand upon Egypt, and bring forth mine armies, and my people the children of Israel, out of the land of Egypt by great judgments. Exodus 7:5And the Egyptians shall know that I am the LORD, when I stretch forth mine hand upon Egypt, and bring out the children of Israel from among them. Exodus 7:6And Moses and Aaron did as the LORD commanded them, so did they.",
        "source": "https://biblehub.com/commentaries/mhc/exodus/7.htm",
        "scrapedAt": "2025-12-30T03:27:48.033Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And the LORD said to Moses, See, I have made you a god to Pharaoh: and Aaron your brother shall be your prophet. Exodus 7:1-7 1. And the Lord said to Moses, See, I have made you a god to Pharaoh; and Aaron your brother shall be your prophet. Et dixit , Ecce, dedi te Deum Pharaoni, eritque Aharon frater tuus Propbeta tuus 2. You shall speak all that I command you; and Aaron your brother shall speak to Pharaoh, that he send the children of Israel out of his land. Tu loqueris omnia quae mandavero tibi, et Aharon frater , ut dimittat filios Israel e terra sua. And I will harden Pharaoh's heart, and multiply my signs and my land of Egypt. cor Pharaonis, et multiplicabo signa mea, atque portenta Aegypti. But Pharaoh shall not hearken to you, that I may lay my hand upon Egypt, and bring forth mine armies, and my people the children of Israel, out of the land of Egypt, by great judgments. Et non audiet vos Pharao: sed extendam manum , et educam exercitus meos, et populum meum filios Israel e terra magnis. And the Egyptians shall know that I am the Lord, when I stretch forth mine hand upon Egypt, and bring out the children of Israel from among them. Et cognoscent Aegyptii quod ego sim Jehova, quum extendero manum , et eduxero filios Israel e medio eorum. And Moses and Aaron did as the Lord commanded them, so did they. Fecit ergo : sicuti praeceperat Jehova ipsis, sic fecerunt.",
        "source": "https://biblehub.com/commentaries/calvin/exodus/7.htm",
        "scrapedAt": "2025-12-30T03:27:50.531Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And the LORD said to Moses, See, I have made you a god to Pharaoh: and Aaron your brother shall be your prophet. God encourages Moses to speak to Pharaoh, Exodus 7:1. God foretells the hardness of, Pharaoh's heart, that he might multiply his , Exodus 7:3,4 to declare to the Egyptians that he only is the Lord, Exodus 7:5. Moses and Aaron obey God's command, Exodus 7:6. Their age, Exodus 7:7. God commands them to show a miracle for the confirmation of their authority, Exodus 7:8,9. Their rod turned into a serpent, Exodus 7:10. The magicians do the same, Exodus 7:11. Aaron's rod devoures theirs, Exodus 7:12. Pharaoh is hardened, as the Lord had said, Exodus 7:13; and refuses to let the people go, Exodus 7:14. God denounces judgments on the Egyptians, Exodus 7:17,18. Commands Moses and Aaron to stretch out their hands oven the waters, Exodus 7:19. The waters are turned into blood, Exodus 7:20. The fish die, and the river stinks, Exodus 7:21. The magicians do the same, by which Pharaoh's heart is hardened, Exodus 7:22. The means they used against this plague, Exodus 7:24. The continuance of it, Exodus 7:25. To represent my person, to act like God, by requiring his obedience to your commands, and by punishing his disobedience with such punishments as none but God can inflict, to which end you shall have my omnipotent assistance. i. e. Your interpreter, or spokesman, as Exodus 4:16, to deliver your commands to Pharaoh. Exodus 7:2Thou shall speak all that I command you: and Aaron your brother shall speak to Pharaoh, that he send the children of Israel out of his land.",
        "source": "https://biblehub.com/commentaries/poole/exodus/7.htm",
        "scrapedAt": "2025-12-30T03:27:53.092Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And the LORD said to Moses, See, I have made you a god to Pharaoh: and Aaron your brother shall be your prophet. With this chapter begins the series of miracles . They are progressive. The first miracle is performed to accredit the mission of the brothers; it is simply credential, and unaccompanied by any infliction. Then come signs which show that the powers of nature are subject to the will of Yahweh, each plague being attended with grave consequences to the Egyptians, yet not inflicting severe loss or suffering; succession come ruinous and devastating plagues, murrain, boils, hail and lightning, locusts, darkness, and lastly, the death of the firstborn. Each of the inflictions has a demonstrable connection with Egyptian customs and phenomena; each is directly aimed at some Egyptian superstition; all are marvelous, not, for the most part, as reversing, but as developing forces , and directing them to a special end. The effects correspond with these characteristics; the first miracles are neglected; the following plagues first alarm, and then for a season, subdue, the king, who does not give way until his firstborn is struck. Even that blow leaves him capable of a last effort, which completes his ruin, and the deliverance of the Israelites. I have made you a god - Or \"appointed you. \" See the margin reference. Moses will special relation to Pharaoh, that God will address him by a prophet, i. e. by one appointed to name. The passage is an important one as illustrating the primary and essential characteristic of a prophet, he is the declarer of God's will and purpose.",
        "source": "https://biblehub.com/commentaries/barnes/exodus/7.htm",
        "scrapedAt": "2025-12-30T03:27:55.583Z"
      }
    ],
    "keyThemes": [
      "God versus false gods",
      "Hardening of heart",
      "Judgment on Egypt",
      "Superior power of God"
    ],
    "christConnection": "The plagues judge Egypt's gods. The Nile, worshiped as source of life, brings death—showing the true God alone gives life, ultimately through Christ."
  },
  {
    "bookId": "exodus",
    "chapter": 8,
    "title": "Exodus 8",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "And the LORD spoke to Moses, Go to Pharaoh, and say to him, Thus says the LORD, Let my people go, that they may serve me. 8:1-15 Pharaoh is plagued with frogs; their vast numbers made them sore plagues to the Egyptians. God could have plagued Egypt with lions, or bears, or wolves, or with birds of prey, but he chose to do it by these despicable creatures. God, when he pleases, can arm the small parts of the creation against us. He thereby humbled Pharaoh. They should neither eat, nor drink, nor ; but wherever they were, they should be troubled by the frogs. God's curse upon a man will pursue him wherever he goes, and lie heavy upon him whatever he does. Pharaoh gave way under this plague. He promises that he will let the people go. Those who bid defiance to God and prayer, first or last, will be made to see their need of both. But when Pharaoh saw there was respite, he hardened his heart. Till the heart is renewed by the grace of God, the thoughts made by affliction do not abide; the convictions wear off, and the promises that were given are forgotten. Till the state of the air is changed, what sun will freeze shade. Exodus 8:2And if you refuse to let them go, look, I will smite all your borders with frogs: Exodus 8:3And the river shall bring forth frogs abundantly, which shall go up and come into yours house, and into your bedchamber, and upon your bed, and into the house of your servants, and upon your people, and into yours ovens, and into your kneadingtroughs: Exodus 8:4And the frogs shall come up both on you, and upon your people, and upon all your servants.",
        "source": "https://biblehub.com/commentaries/mhc/exodus/8.htm",
        "scrapedAt": "2025-12-30T03:27:58.102Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "And the LORD spoke to Moses, Go to Pharaoh, and say to him, Thus says the LORD, Let my people go, that they may serve me. Exodus 8:1-7 1. And the Lord spoke to Moses, Go to Pharaoh, and say to him, Thus says the Lord, Let my people go, that they may serve me. ad Mosen, , et , Sic dicit Jehova, Dimitte populum meum ut serviant mihi. And if you refuse to let them go, look, I will smite all your borders with frogs: 2. Quod si tu renuis dimittere, ecce, ego percutio omnes terminos tuos ranis. And the river shall bring forth frogs abundantly, which shall go up, and come into yours house, and into your bed-chamber, and upon your bed, and into the house of your servants, and upon your people, and into yours ovens, and into your kneading-troughs: 3. Et scatebit flumen ranis, quae ascendent, et intrabunt domum tuam, et conclave cubilis tui, tuum, servorum tuorum, tuum, tuos, tua. (Heb. farinas tuas. ) 4. And the frogs shall come up both on you, and upon your people, and upon all your servants. , tuum, servos ascendent ranae. And the Lord spoke to Moses, Say to Aaron, Stretch forth yours hand with your rod over the streams, over the rivers, and over the ponds, and cause frogs to come up upon the land of Egypt. Et ait , , Extende manum , super rivos, , ut adducas Aegypti. And Aaron stretched out his hand over the waters of Egypt; and the frogs came up, and covered the land of Egypt.",
        "source": "https://biblehub.com/commentaries/calvin/exodus/8.htm",
        "scrapedAt": "2025-12-30T03:28:00.601Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "And the LORD spoke to Moses, Go to Pharaoh, and say to him, Thus says the LORD, Let my people go, that they may serve me. God sends Moses to Pharaoh that he might let the people go, Exodus 8:1. He threatens his denial with a judgment of frogs, Exodus 8:2-4. Aaron stretching forth his rod, Egypt is covered with frogs, Exodus 8:6. The magicians do so, Exodus 8:7. Pharaoh calls Moses and Aaron to entreat the Lord to remove the frogs, and promises them to let them go, Exodus 8:8. Moses and Aaron cry to the Lord to take away the frogs, Exodus 8:12; which he did, Exodus 8:13. Pharaoh's heart still hardened, Exodus 8:15. Aaron stretching forth his rod smites the dust, which becomes lice, Exodus 8:17. The magicians attempt the same, but could not, Exodus 8:18; which extorted a confession from them that this is the finger of God, yet Pharaoh is hardened, Exodus 8:19. Swarms of flies threatened, Exodus 8:20-23. God fulfills his word, Exodus 8:24. Pharaoh sends for Moses and Aaron, and permits a , Exodus 8:25. Moses would go three days into the wilderness, Exodus 8:27. Pharaoh permits that, but not far, Exodus 8:28. The flies are removed, Exodus 8:29-31. Pharaoh is hardened, Exodus 8:32. No text from Poole on this verse. Exodus 8:2And if you refuse to let them go, look, I will smite all your borders with frogs: All your land which is within your borders; a synecdoche; so that word is used also Exodus 10:4,19 1 Kings 1:3 Psalm 147:14 Jeremiah 15:13.",
        "source": "https://biblehub.com/commentaries/poole/exodus/8.htm",
        "scrapedAt": "2025-12-30T03:28:03.102Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "And the LORD spoke to Moses, Go to Pharaoh, and say to him, Thus says the LORD, Let my people go, that they may serve me. Exodus 8:2And if you refuse to let them go, look, I will smite all your borders with frogs:With frogs - Some months appear to have elapsed between this and the former plague, if the frogs made their appearance at the usual time, that . The special species mentioned here is of Egyptian origin. This plague was, like the preceding, in general accordance with natural phenomena, but marvelous both for its extent and intensity, and for its direct connection with the words and acts of God's messengers. It had also apparently, like the other plagues, a direct bearing upon Egyptian superstitions. There was a female deity with a frog's head, and the frog was connected with the most ancient forms of nature-. Exodus 8:3And the river shall bring forth frogs abundantly, which shall go up and come into yours house, and into your bedchamber, and upon your bed, and into the house of your servants, and upon your people, and into yours ovens, and into your kneadingtroughs:Into yours house - This appears to have been special to the plague, as such. It was especially the visitation which would be felt by the scrupulously-clean Egyptians. Kneadingtroughs - Not dough, margin. See Exodus 12:34. Exodus 8:4And the frogs shall come up both on you, and upon your people, and upon all your servants. Exodus 8:5And the LORD spoke to Moses, Say to Aaron, Stretch forth yours hand with your rod over the streams, over the rivers, and over the ponds, and cause frogs to come up upon the land of Egypt.",
        "source": "https://biblehub.com/commentaries/barnes/exodus/8.htm",
        "scrapedAt": "2025-12-30T03:28:05.588Z"
      }
    ],
    "keyThemes": [
      "Escalating judgments",
      "Distinction between Egypt and Israel",
      "False repentance",
      "Finger of God"
    ],
    "christConnection": "The separation of Goshen shows God protects His people amid judgment. \"The finger of God\" later describes Jesus casting out demons (Luke 11:20)."
  },
  {
    "bookId": "exodus",
    "chapter": 9,
    "title": "Exodus 9",
    "quotes": [
      {
        "commentator": "matthew_henry",
        "displayName": "Matthew Henry",
        "quote": "Then the LORD said to Moses, Pharaoh, and tell him, Thus says the LORD God of the Hebrews, Let my people go, that they may serve me. 9:1-7 God will have Israel released, Pharaoh opposes it, and the trial is, whose word shall stand. The hand of the Lord at once is upon the cattle, many of which, some of all kinds, die by a sort of murrain. This was greatly to the loss of the owners; they had made Israel poor, and now God would make them poor. The hand of God is to be seen, sickness and death of cattle; for a sparrow falls not to the ground without our Father. None of the Israelites' cattle should die; the Lord shall sever. The cattle died. The Egyptians worshipped their cattle. What we make an idol of, it is just with God to remove from us. This proud tyrant and cruel oppressor deserved to be made an example by the just Judge of the universe. None who are punished according to what they deserve, can have any just cause to complain. Hardness of heart denotes that state of mind upon which neither threatenings nor promise, neither judgements nor mercies, make any abiding impression. The conscience being stupified, and the heart filled with pride and presumption, they and disobedience. This state of mind is also called the stony heart. Very different is the heart of flesh, the broken and contrite heart. Sinners have none to blame but themselves, for that pride and ungodliness which abuse the bounty and patience of God.",
        "source": "https://biblehub.com/commentaries/mhc/exodus/9.htm",
        "scrapedAt": "2025-12-30T03:28:08.059Z"
      },
      {
        "commentator": "john_calvin",
        "displayName": "John Calvin",
        "quote": "Then the LORD said to Moses, Pharaoh, and tell him, Thus says the LORD God of the Hebrews, Let my people go, that they may serve me. Exodus 9:1-7 1. Then the Lord said to Moses, Pharaoh, and tell him, Thus says the Lord God of the Hebrews, Let my people go, that they may serve me. Tunc dixit , , et , Sic dicit Jehova Deus Hebraeorum, Dimitte populum meum ut serviant mihi. For if you refuse to let them go, and will hold them still, 2. Quod si tu renuis eum dimittere, et adhuc tu retines eos: 3. Look, the hand of the Lord is upon your cattle which field, upon the horses, upon the asses, upon the camels, upon the oxen, and up. on the sheep: there shall be a very grievous murrain. Ecce, manus Jehovae tuum qui : in equis, in asinis, in camelis, in ovibus pestis gravissima. And the Lord shall sever between the cattle of Israel and the cattle of Egypt: and there shall nothing die of all that is the children's of Israel. Et distinguet Israel, AEgypti: ut non moriatur quicquam eorum quae sunt apud filios Israel. And the Lord appointed a set time, saying, Tomorrow the Lord shall do this land. Et statuit Jehova tempus, dicendo, Cras faciet Jehova rem . And the Lord did that thing on the morrow, and all the cattle of Egypt died: but of the cattle of the children of Israel died not one. Fecit itaque Jehova rem hanc postero die: et mortuum est omne pecus AEgypti: de pecore vero filiorum Israel ne unum quidem animal mortuum est.",
        "source": "https://biblehub.com/commentaries/calvin/exodus/9.htm",
        "scrapedAt": "2025-12-30T03:28:10.551Z"
      },
      {
        "commentator": "matthew_poole",
        "displayName": "Matthew Poole",
        "quote": "Then the LORD said to Moses, Pharaoh, and tell him, Thus says the LORD God of the Hebrews, Let my people go, that they may serve me. God threatens to smite his cattle with a pestilence, Exodus 9:1-3; but spares Israel's, Exodus 9:4. Appoints a time for the execution of this, Exodus 9:5; in which the Egyptians' cattle dies, Exodus 9:6. Pharaoh's obstinacy, Exodus 9:7. God strikes all Egypt with boils, which is the sixth plague, Exodus 9:10. The magicians are not able to stand before Moses, Exodus 9:11. Pharaoh's heart hardened according to the word of the Lord, Exodus 9:12. God commands Moses to repeat his message, Exodus 9:13; and threatens Pharaoh with more grievous plagues, Exodus 9:14. God's up Pharaoh, Exodus 9:16. The seventh plague, viz. hail and rain, Exodus 9:18. God's counsel for the securing of their cattle, Exodus 9:19. The execution of this plague, Exodus 9:23. The effects of it, Exodus 9:25. The land of Goshen is preserved, Exodus 9:26. Pharaoh's confession, Exodus 9:27. Moses' prayer for him, Exodus 9:29. He foretells Pharaoh's obstinacy, Exodus 9:30. By Moses's entreaty the plague is stayed, Exodus 9:33. Pharaoh's heart remains hardened, Exodus 9:34,35. No text from Poole on this verse. Exodus 9:2For if you refuse to let them go, and will hold them still, No text from Poole on this verse. Exodus 9:3Behold, the hand of the LORD is upon your cattle which field, upon the horses, upon the asses, upon the camels, upon the oxen, and upon the sheep: there shall be a very grievous murrain.",
        "source": "https://biblehub.com/commentaries/poole/exodus/9.htm",
        "scrapedAt": "2025-12-30T03:28:13.041Z"
      },
      {
        "commentator": "albert_barnes",
        "displayName": "Albert Barnes",
        "quote": "Then the LORD said to Moses, Pharaoh, and tell him, Thus says the LORD God of the Hebrews, Let my people go, that they may serve me. Exodus 9:2For if you refuse to let them go, and will hold them still, Exodus 9:3Behold, the hand of the LORD is upon your cattle which field, upon the horses, upon the asses, upon the camels, upon the oxen, and upon the sheep: there shall be a very grievous murrain. A very grievous murrain - Or \"pestilence;\" but the word \"murrain,\" i. e. \"a great mortality,\" exactly expresses the meaning. This terrible visitation struck far more severely than the preceding, which had caused distress and suffering; it attacked the resources of the nation. The camels - These animals are only twice mentioned, here and Genesis 12:16, in connection with Egypt. Though camels are never represented on the monuments, they were known to the Egyptians, and were probably used on the frontier. Exodus 9:4And the LORD shall sever between the cattle of Israel and the cattle of Egypt: and there shall nothing die of all that is the children's of Israel. Exodus 9:5And the LORD appointed a set time, saying, To morrow the LORD shall do this land. Exodus 9:6And the LORD did that thing on the morrow, and all the cattle of Egypt died: but of the cattle of the children of Israel died not one. All the cattle - i. e. which were field; compare Exodus 9:19-21. Exodus 9:7And Pharaoh sent, and, look, there was not one of the cattle of the Israelites dead.",
        "source": "https://biblehub.com/commentaries/barnes/exodus/9.htm",
        "scrapedAt": "2025-12-30T03:28:15.559Z"
      }
    ],
    "keyThemes": [
      "Judgment on Egyptian gods",
      "Protection of God's people",
      "Superficial repentance",
      "Hardened heart"
    ],
    "christConnection": "God makes a distinction between His people and others—a pattern of election. Pharaoh's hardening illustrates how sin leads to further judgment."
  }
];


// Helper function to get chapters by book ID
export function getCommentaryByBook(bookId: string): ChapterCommentary[] {
  switch (bookId) {
    case 'genesis': return GENESIS_COMMENTARY;
    case 'exodus': return EXODUS_COMMENTARY;
    default: return [];
  }
}

// All books combined
export const ALL_CHAPTER_COMMENTARY: BookCommentary[] = [
  { bookId: 'genesis', bookName: 'Genesis', chapters: GENESIS_COMMENTARY },
  { bookId: 'exodus', bookName: 'Exodus', chapters: EXODUS_COMMENTARY },
];
