import { Strings } from 'lit-translate';
import { de } from './de.js';
import { en } from './en.js';
import { Language } from '@compas-oscd/core';

export interface TranslationObject {
  [key: string]: string | TranslationObject;
}

export interface Languages {
  de: TranslationObject;
  en: TranslationObject;
}

export const languages: Languages = { en, de };

export type Translations = typeof en;

export async function loader(lang: string): Promise<Strings> {
  if (Object.keys(languages).includes(lang)) return languages[lang as keyof Languages];
  else return {};
}
