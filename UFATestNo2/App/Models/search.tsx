import {createModel} from '@rematch/core';
import {RootModel} from '.';
import { Search } from '../Data/Types';
import * as api from '../Services/API/search';

const initialState = {
  count: 0,
  matches: []
};

export const search = createModel<RootModel>()({
  state: initialState as Search,
  reducers: {
    updateData: (state, payload: Search) => {
      state = payload;
      return state;
    },
    resetData: state => {
      state = initialState;
      return state;
    },
  },
  effects: dispatch => ({
    async getSearch(payload: string) {
      const response = await api.getSearch(payload);
      const data = await response.data;
      dispatch.search.updateData(data);
      return data;
    },
  }),
});
