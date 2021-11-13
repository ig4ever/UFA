/* eslint-disable prettier/prettier */
import {init, RematchDispatch, RematchRootState} from '@rematch/core';
import {models, RootModel} from './Models';
import persistPlugin from '@rematch/persist';
import loadingPlugin, {ExtraModelsFromLoading} from '@rematch/loading';
import Reactotron from './ReactotronConfig';
import {AsyncStorage} from 'react-native';
import immerPlugin from '@rematch/immer';

const persistConfig = {
  key: 'root',
  whitelist: ['welcomeBanner'],
  storage: AsyncStorage,
};

type FullModel = ExtraModelsFromLoading<RootModel>;

export const store = init<RootModel, FullModel>({
  models,
  redux: {
    enhancers: [Reactotron.createEnhancer!()],
    rootReducers: {LOGOUT: () => undefined},
  },
  plugins: [persistPlugin(persistConfig), loadingPlugin(), immerPlugin()],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;
