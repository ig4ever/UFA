export type Ayah = {
  number: number;
  text: string;
  edition: Object;
  surah: Surah;
  numberInSurah: number;
  juz: number;
	page: number;
	sajda: boolean;
};

export type Surah = {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  revelationType: string;
  numberOfAyahs: number;
  ayahs: Array<Ayah>
}

export type Quran = Array<Surah>

export type Search = {
	count: number;
	matches: Array<Ayah>
}

export type Juz = {
	number: number;
	ayahs: Array<Ayah>
}

