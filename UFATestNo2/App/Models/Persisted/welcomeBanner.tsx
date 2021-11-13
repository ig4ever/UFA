import { createModel } from "@rematch/core";
import { RootModel } from "..";

export const welcomeBanner = createModel<RootModel>()({
	state: false,
	reducers: {
		updateData(state, payload: boolean) {
      state = payload;
      return state;
    },
		resetData(state) {
      state = false;
      return state;
    },
	},
})
