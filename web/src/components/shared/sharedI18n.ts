import { Language } from 'web/src/types';
import en from './sharedLocales/en.json';
import ru from './sharedLocales/ru.json';
import uk from './sharedLocales/uk.json';

type Dictionary = Record<string, string>;
export type SharedTranslateFn = (
  key: string,
  values?: Record<string, string | number | undefined | null>,
) => string;

const defaultDictionary: Dictionary = en;
const dictionaries: Record<string, Dictionary> = {
  en,
  ru,
  uk,
};

const interpolate = (
  template: string,
  values: Record<string, string | number | undefined | null>,
): string =>
  template.replace(/{([^{}]+)}/g, (placeholder) => {
    const key = placeholder.slice(1, -1);
    const value = values[key];

    return value !== undefined && value !== null ? value.toString() : placeholder;
  });

export const createT = (language: Language): SharedTranslateFn => {
  const dictionary = dictionaries[language];

  return (key, values) => {
    if (dictionary && key in dictionary) {
      const result = dictionary[key];
      if (typeof result === 'string') {
        return values ? interpolate(result, values) : result;
      }
    }

    if (key in defaultDictionary) {
      const result = defaultDictionary[key];
      if (typeof result === 'string') {
        return values ? interpolate(result, values) : result;
      }
    }

    return key;
  };
};
