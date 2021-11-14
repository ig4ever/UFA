import { createModel } from "@rematch/core";
import { RootModel } from "..";

export const welcomeBanner = createModel<RootModel>()({
	state: true,
	reducers: {
		updateData(state, payload: boolean) {
      state = payload;
      return state;
    },
		resetData(state) {
      state = true;
      return state;
    },
	},
  effects: (dispatch) => ({}),
})
