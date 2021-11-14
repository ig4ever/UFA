import {createModel} from '@rematch/core';
import { RootModel } from '.';
import { Juz } from '../Data/Types';
import * as api from '../Services/API/juz';

const initialState = {
  number: 0,
  ayahs: []
};

export const juz = createModel<RootModel>()({
  state: initialState as Juz,
  reducers: {
    updateData: (state, payload: Juz) => {
      state = payload;
      return state;
    },
		resetData: (state) => {
			state = initialState;
      return state;
		}
  },
  effects: dispatch => ({
    async getJuz(payload: string) {
      const response = await api.getJuz(payload);
      const data = await response.data;
      dispatch.juz.updateData(data.surahs);
      return data;
    },
  }),
});
