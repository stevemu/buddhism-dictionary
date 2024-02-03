import { getDictCollection } from '@/db/collection/dict';

const PROXIMATES: Record<string, string> = {
  a: 'ā',
  i: 'ī',
  u: 'ū',
  n: 'ṇñṅ',
  t: 'ṭ',
  d: 'ḍ',
  l: 'ḷl̥ḹ',
  r: 'ṛr̥ṝ',
  e: 'ē',
  o: 'ō',
  m: 'ṃ',
  h: 'ḥ',
  s: 'śṣ',
};
const PROXIMATE_KEYS = Object.keys(PROXIMATES);

// enable user search by proximate of a character
// eg. "a" would match for ā, "n" for "ṇ" and "ñ" etc
export const generateProximateRegex = (query: string) => {
  let regexStr = '^';
  query.split('').forEach((char) => {
    if (PROXIMATE_KEYS.includes(char)) {
      const proximates = PROXIMATES[char] as string;
      regexStr += `[${char}${proximates}]`;
    } else {
      regexStr += char;
    }
  });
  return new RegExp(regexStr);
};

export const queryEntries = async (query: string, limit = 30) => {
  const dict = await getDictCollection();
  const queryRegex = generateProximateRegex(query);
  return dict
    .find({ word: { $regex: queryRegex } })
    .limit(limit)
    .toArray();
};

export const getEntries = async (word: string) => {
  const dict = await getDictCollection();
  return dict.find({ word }).toArray();
};
