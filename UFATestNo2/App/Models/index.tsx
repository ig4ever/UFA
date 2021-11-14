import {Models} from '@rematch/core';
import {welcomeBanner} from './Persisted/welcomeBanner';
import {quran} from './quran';
import {juz} from './juz';
import {ayah} from './ayah';
import {surah} from './surah';
import {search} from './search';
import { surahArabic } from './surahArabic';

export interface RootModel extends Models<RootModel> {
  welcomeBanner: typeof welcomeBanner;
  quran: typeof quran;
  juz: typeof juz;
  ayah: typeof ayah;
  surah: typeof surah;
  surahArabic: typeof surahArabic;
  search: typeof search;
}

export const models: RootModel = {
  welcomeBanner,
  quran,
  juz,
  ayah,
  surah,
  surahArabic,
  search,
};
