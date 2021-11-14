import {createModel} from '@rematch/core';
import {RootModel} from '.';
import { Surah } from '../Data/Types';
import * as api from '../Services/API/surah';

const initialState = {
  number: 0,
  name: '',
  englishName: '',
  englishNameTranslation: '',
  revelationType: '',
  numberOfAyahs: 0,
  ayahs: []
};

export const surahArabic = createModel<RootModel>()({
  state: initialState as Surah,
  reducers: {
    updateData: (state, payload: Surah) => {
      state = payload;
      return state;
    },
    resetData: state => {
      state = initialState;
      return state;
    },
  },
  effects: dispatch => ({
    async getSurah(payload: string) {
      const response = await api.getSurah(payload);
      const data = await response.data;
      dispatch.surahArabic.updateData(data);
      return data;
    },
  }),
});
