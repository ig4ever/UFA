import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Ayah, Surah} from '../Data/Types';
import {TextStyle} from '../Styles';
import Ripple from 'react-native-material-ripple';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface Props {
  data: Ayah;
	dataTranslated: Surah;
  onPress?: (data: any, dataTranslated: any) => void;
}

const CardItemAyah = (props: Props) => {
  const {data, dataTranslated, onPress} = props;

  return (
    <Ripple
			disabled={onPress ? false : true}
      rippleCentered
      rippleContainerBorderRadius={100}
      onPress={() => onPress(data, dataTranslated)}
			style={styles.container}>
      <View style={{ marginBottom: 16 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F8F5FC', borderRadius: 5, padding: 10 }}>
					<View style={styles.containerTextNumber}>
						<Text style={[TextStyle.TEXT_14SP_SEMI_BOLD, {color: '#FFF'}]}>
							{data.numberInSurah}
						</Text>
					</View>
					<View>
						<Ripple
						rippleCentered
						rippleContainerBorderRadius={100}>
							<FontAwesome5 name={'bookmark'} size={24} color={'#B474FC'} />
						</Ripple>
					</View>
        </View>
			</View>
			<View>
				<Text style={[TextStyle.TEXT_22SP_SEMI_BOLD, {color: '#281453', marginBottom: 10}]}>
					{data.text}
				</Text>
				<Text style={[TextStyle.TEXT_16SP_MEDIUM, {color: '#281453'}]}>
					{dataTranslated.ayahs[data.numberInSurah - 1].text}
				</Text>
			</View>
    </Ripple>
  );
};

export default CardItemAyah;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  containerTextNumber: {
    backgroundColor: '#672CBC',
    borderRadius: 100,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
});
