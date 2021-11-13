import {createModel} from '@rematch/core';
import {RootModel} from '.';
import { Quran } from '../Data/Types';
import * as api from '../services/api/quran';

const initialState = [];

export const quran = createModel<RootModel>()({
  state: initialState as Quran,
  reducers: {
    updateData: (state, payload: Quran) => {
      state = payload;
      return state;
    },
    resetData: state => {
      state = initialState;
      return state;
    },
  },
  effects: dispatch => ({
    async getCategory(payload: string) {
      const response = await api.getQuran(payload);
      const data = await response.data;
      dispatch.quran.updateData(data.surahs);
      return data;
    },
  }),
});
