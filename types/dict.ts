import { ObjectId } from 'mongodb';

const DAMA_CHINESE_TRANSLATION_CONCISE_PALI_ENGLISH_CODE =
  'DAMA_CHINESE_TRANSLATION_CONCISE_PALI_ENGLISH';
type DictCode = typeof DAMA_CHINESE_TRANSLATION_CONCISE_PALI_ENGLISH_CODE;

export const DICT: Record<string, { code: DictCode; humanReadable: string }> = {
  DamaChineseTranslationConcisePaliEnglish: {
    code: DAMA_CHINESE_TRANSLATION_CONCISE_PALI_ENGLISH_CODE,
    humanReadable:
      'Dama Bhikkhu: A Chinese Translation of A.P. Buddhadatta\'s "Concise Pali-English Dictionary": Digital Edition',
  },
};

export const getHumanReadableDictName = (dictCode: DictCode) => {
  let name = '';
  Object.values(DICT).forEach((obj) => {
    const { code, humanReadable } = obj;
    if (code === dictCode) name = humanReadable;
  });
  if (!name) throw Error('cannot find dict name with dict code');
  return name;
};

export type DamaChineseTranslationConciseApliEnglishEntry = {
  dictCode: typeof DAMA_CHINESE_TRANSLATION_CONCISE_PALI_ENGLISH_CODE;
  definition: string;
};

type EntryBase = {
  word: string;
} & DamaChineseTranslationConciseApliEnglishEntry;

export type BackendEntry = {
  _id: ObjectId;
} & EntryBase;

export type UiEntry = {
  _id: string;
} & EntryBase;
