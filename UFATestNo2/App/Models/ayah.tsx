import {createModel} from '@rematch/core';
import {RootModel} from '.';
import { Ayah } from '../Data/Types';
import * as api from '../Services/API/ayah';

const initialState = {
  number: 0,
  text: '',
  edition: null,
  surah: null,
  numberInSurah: 0,
  juz: 0,
  page: 0,
  sajda: false
}

export const ayah = createModel<RootModel>()({
  state: initialState as Ayah,
  reducers: {
    updateData: (state, payload: Ayah) => {
      state = payload;
      return state;
    },
    resetData: state => {
      state = initialState;
      return state;
    },
  },
  effects: dispatch => ({
    async getAyah(payload: string) {
      const response = await api.getAyah(payload);
      const data = await response.data;
      dispatch.ayah.updateData(data.surahs);
      return data;
    },
  }),
});
