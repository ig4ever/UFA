import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import AppNavigator from './Navigation';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {getPersistor} from '@rematch/persist';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';
import { store } from './store';

const Root = () => {
  return (
		<Provider store={store}>
			<PersistGate persistor={getPersistor()}>
				<SafeAreaView style={styles.container}>
					<FlashMessage position="top" />
					<AppNavigator />
				</SafeAreaView>
			</PersistGate>
		</Provider>
  );
};

export default Root;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
