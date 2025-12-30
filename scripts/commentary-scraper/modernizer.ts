/**
 * Language Modernizer
 * Converts archaic English to modern English while preserving theological meaning
 */

// Preserve these theological terms (don't modernize)
const _PRESERVE_TERMS = new Set([
  'propitiation', 'justification', 'sanctification', 'redemption', 'atonement',
  'covenant', 'righteousness', 'imputation', 'regeneration', 'election',
  'predestination', 'glorification', 'intercession', 'reconciliation',
  'mediator', 'advocate', 'expiation', 'substitution', 'vicarious',
]);

// Word replacements (case-insensitive matching, preserve case in output)
const WORD_REPLACEMENTS: [RegExp, string][] = [
  // Pronouns
  [/\bthee\b/gi, 'you'],
  [/\bthou\b/gi, 'you'],
  [/\bthy\b/gi, 'your'],
  [/\bthine\b/gi, 'yours'],
  [/\bthyself\b/gi, 'yourself'],
  [/\bye\b/gi, 'you'],

  // Verbs - hath/doth/saith etc
  [/\bhath\b/gi, 'has'],
  [/\bdoth\b/gi, 'does'],
  [/\bsaith\b/gi, 'says'],
  [/\bsaid he\b/gi, 'he said'],
  [/\bspake\b/gi, 'spoke'],
  [/\bbegat\b/gi, 'fathered'],
  [/\bbegotten\b/gi, 'born'],
  [/\bshalt\b/gi, 'shall'],
  [/\bwilt\b/gi, 'will'],
  [/\bwouldst\b/gi, 'would'],
  [/\bcouldst\b/gi, 'could'],
  [/\bshouldst\b/gi, 'should'],
  [/\bdost\b/gi, 'do'],
  [/\bhadst\b/gi, 'had'],
  [/\bwast\b/gi, 'were'],
  [/\bwert\b/gi, 'were'],
  [/\bart\b/gi, 'are'],

  // Adverbs and prepositions
  [/\bwherefore\b/gi, 'therefore'],
  [/\bunto\b/gi, 'to'],
  [/\bhither\b/gi, 'here'],
  [/\bthither\b/gi, 'there'],
  [/\bwhither\b/gi, 'where'],
  [/\bwhence\b/gi, 'from where'],
  [/\bverily\b/gi, 'truly'],
  [/\bperadventure\b/gi, 'perhaps'],
  [/\bhaply\b/gi, 'perhaps'],
  [/\bstraightway\b/gi, 'immediately'],
  [/\bstraightways\b/gi, 'immediately'],
  [/\bforthwith\b/gi, 'immediately'],
  [/\bwherein\b/gi, 'in which'],
  [/\bwhereof\b/gi, 'of which'],
  [/\bwherewith\b/gi, 'with which'],
  [/\bwhereby\b/gi, 'by which'],
  [/\bthereof\b/gi, 'of it'],
  [/\btherein\b/gi, 'in it'],
  [/\bthereto\b/gi, 'to it'],
  [/\bherein\b/gi, 'in this'],
  [/\bhereof\b/gi, 'of this'],
  [/\bhereafter\b/gi, 'after this'],
  [/\bheretofore\b/gi, 'before this'],

  // Nouns
  [/\bbrethren\b/gi, 'brothers'],
  [/\bkine\b/gi, 'cattle'],
  [/\braiment\b/gi, 'clothing'],
  [/\bvictuals\b/gi, 'food'],
  [/\bmeat\b(?!\s+offering)/gi, 'food'],  // "meat" often meant food, but preserve "meat offering"

  // Other archaic terms
  [/\bbehold\b/gi, 'look'],
  [/\blo\b/gi, 'look'],
  [/\byea\b/gi, 'yes'],
  [/\bnay\b/gi, 'no'],
  [/\bsore\b(?!\s)/gi, 'greatly'],  // "sore afraid" -> "greatly afraid"
  [/\bsundry\b/gi, 'various'],
  [/\bdivers\b/gi, 'various'],
  [/\bnotwithstanding\b/gi, 'nevertheless'],
  [/\binasmuch\b/gi, 'since'],
  [/\bforasmuch\b/gi, 'since'],
  [/\binsomuch\b/gi, 'so much'],
];

// -eth verb endings (loveth -> loves, goeth -> goes)
const ETH_PATTERN = /\b(\w+)eth\b/gi;

// -est verb endings for second person (lovest -> love, goest -> go)
const EST_PATTERN = /\b(\w+)est\b/gi;

/**
 * Modernize archaic English text
 */
export function modernizeText(text: string): string {
  let result = text;

  // Apply word replacements
  for (const [pattern, replacement] of WORD_REPLACEMENTS) {
    result = result.replace(pattern, (match) => {
      // Preserve capitalization
      if (match[0] === match[0].toUpperCase()) {
        return replacement.charAt(0).toUpperCase() + replacement.slice(1);
      }
      return replacement;
    });
  }

  // Handle -eth endings (but not words like "ieth" numbers or "shibboleth")
  result = result.replace(ETH_PATTERN, (match, stem) => {
    // Skip common false positives - must match the full word
    const skipWords = new Set(['eth', 'beth', 'seth', 'nazareth', 'shibboleth', 'sabbath', 'zenith', 'beneath', 'underneath', 'teeth', 'breadth', 'width', 'length', 'strength', 'health', 'wealth', 'death', 'breath', 'growth', 'truth', 'youth', 'faith', 'wrath', 'oath', 'cloth', 'moth', 'broth', 'sloth', 'both', 'goth', 'filth', 'tilth', 'warmth', 'mirth', 'birth', 'worth', 'north', 'south', 'earth', 'hearth', 'dearth', 'berth', 'girth', 'firth', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth', 'twentieth', 'thirtieth', 'fortieth', 'fiftieth', 'sixtieth', 'seventieth', 'eightieth', 'ninetieth', 'hundredth', 'thousandth', 'millionth']);
    if (skipWords.has(match.toLowerCase())) return match;
    // Also skip ordinal suffixes like "-ieth"
    if (stem.match(/^(twent|thirt|fort|fift|sixt|sevent|eight|ninet|hundr)/i)) return match;

    // Preserve case
    const isCapitalized = match[0] === match[0].toUpperCase();

    // Convert verb: loveth -> loves, goeth -> goes, cometh -> comes
    let modernized: string;
    if (stem.endsWith('i')) {
      // worshipieth -> worships (remove the 'i')
      modernized = stem.slice(0, -1) + 's';
    } else if (stem.match(/[sxz]$/) || stem.match(/(ch|sh)$/)) {
      // passeth -> passes, teacheth -> teaches, washeth -> washes
      modernized = stem + 'es';
    } else if (stem.endsWith('o')) {
      // goeth -> goes, doeth -> does
      modernized = stem + 'es';
    } else if (stem.match(/[aeiou][bcdfgklmnprtv]$/)) {
      // cometh -> comes, loveth -> loves, maketh -> makes, giveth -> gives
      // Verbs ending in vowel+consonant often had silent 'e' dropped
      modernized = stem + 'es';
    } else {
      // walketh -> walks, runneth -> runs
      modernized = stem + 's';
    }

    return isCapitalized ? modernized.charAt(0).toUpperCase() + modernized.slice(1) : modernized;
  });

  // Handle -est endings (lovest -> love)
  result = result.replace(EST_PATTERN, (match, stem) => {
    // Skip common false positives
    const skipWords = ['best', 'rest', 'test', 'west', 'east', 'nest', 'fest', 'quest', 'chest', 'guest', 'crest', 'forest', 'interest', 'protest', 'harvest', 'honest', 'modest', 'earnest', 'nearest', 'greatest', 'highest', 'lowest'];
    if (skipWords.includes(match.toLowerCase())) return match;

    // Preserve case
    const isCapitalized = match[0] === match[0].toUpperCase();

    // lovest -> love
    const modernized = stem;
    return isCapitalized ? modernized.charAt(0).toUpperCase() + modernized.slice(1) : modernized;
  });

  // Clean up double spaces and normalize
  result = result.replace(/\s+/g, ' ').trim();

  return result;
}

/**
 * Check if text contains significant archaic language
 */
export function hasArchaicLanguage(text: string): boolean {
  const archaicPatterns = [
    /\bthee\b/i, /\bthou\b/i, /\bthy\b/i, /\bthine\b/i,
    /\bhath\b/i, /\bdoth\b/i, /\bsaith\b/i,
    /\bwherefore\b/i, /\bunto\b/i,
    /\w+eth\b/i,  // verbs ending in -eth
  ];

  return archaicPatterns.some(p => p.test(text));
}

// Test function
export function testModernizer(): void {
  const tests = [
    'He that hath ears to hear, let him hear.',
    'Thou shalt love thy neighbour as thyself.',
    'Wherefore art thou come hither?',
    'The Lord saith unto thee, Fear not.',
    'Verily, verily I say unto you.',
    'Behold, he cometh with clouds.',
    'Christ loveth us and gave himself for us.',
    'Go ye therefore and teach all nations.',
  ];

  console.log('Modernizer Test Results:\n');
  for (const test of tests) {
    console.log(`Original: ${test}`);
    console.log(`Modern:   ${modernizeText(test)}`);
    console.log('');
  }
}

// Run test if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  testModernizer();
}
