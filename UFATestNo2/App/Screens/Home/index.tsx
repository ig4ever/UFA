import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/RootStackParamList'

type NavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

interface Props {}

const index = (props: Props) => {
	const navigation = useNavigation<NavigationProp>();

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
