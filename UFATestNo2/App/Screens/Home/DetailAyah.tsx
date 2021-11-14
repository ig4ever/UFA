import React, { useState } from 'react'
import {Platform, StyleSheet, Text, UIManager, View} from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/RootStackParamList'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/core'
import { ButtonStyle, ContainerStyle, InputStyle, TextStyle } from '../../Styles'
import ListCardItemList from '../../Components/ListCardItem'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch, RootState } from '../../store'
import CardItemAyah from '../../Components/CardItemAyah'
import Ripple from 'react-native-material-ripple'

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type NavigationProp = StackNavigationProp<RootStackParamList, 'DetailAyahScreen'>;

const DetailAyah = (props: any) => {
	const { route } = props;

  const [params] = useState(route.params);

	const navigation = useNavigation<NavigationProp>();

	console.tron.log(params)

	const onPressBack = () => {
		navigation.goBack();
	}

  return (
    <View style={ContainerStyle.CONTAINER}>
      <View style={{ marginBottom: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Ripple 
					style={[ButtonStyle.BTN_BACK, { marginRight: 10 }]}
					rippleCentered
					rippleContainerBorderRadius={100}
					onPress={onPressBack}>
						<MaterialIcons name={'arrow-back'} size={24} color={'#8789A2'} />
					</Ripple>
					<Text numberOfLines={1} style={[TextStyle.TEXT_22SP_BOLD, { color: '#662BBB' }]}>Surah {params.ayahTranslated.englishName} Ayat {params.ayah.number}</Text>
        </View>
      </View>
			<View style={[{ padding: 16, backgroundColor: '#B474FC', marginBottom: 16, borderRadius: 10 }, styles.shadow]}>
				<Text style={[TextStyle.TEXT_22SP_MEDIUM, { color: '#FFF', textAlign: 'center' }]}>{params.ayahTranslated.englishName}</Text>
				<Text style={[TextStyle.TEXT_18SP, { color: '#FFF', textAlign: 'center' }]}>{params.ayahTranslated.englishNameTranslation}</Text>
				<Text style={[TextStyle.TEXT_14SP_BOLD, { color: '#FFF', textAlign: 'center' }]}>Juz {params.ayah.juz}</Text>
				<View style={{ height: 1, backgroundColor: '#FFF', marginVertical: 8 }} />
				<View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text
            style={[
              TextStyle.TEXT_18SP_LIGHT,
              {color: '#FFF', marginRight: 10},
            ]}>
            {params.ayahTranslated.revelationType}
          </Text>
          <Text
            style={[
              TextStyle.TEXT_18SP_LIGHT,
              {color: '#FFF', marginRight: 10},
            ]}>
            •
          </Text>
          <Text style={[TextStyle.TEXT_18SP_LIGHT, {color: '#FFF'}]}>
            {params.ayahTranslated.ayahs.length} Ayat
          </Text>
        </View>
			</View>
			<CardItemAyah data={params.ayah} dataTranslated={params.ayahTranslated} />
    </View>
  );
};

export default DetailAyah;

const styles = StyleSheet.create({
	shadow: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.39,
		shadowRadius: 8.30,

		elevation: 13,
	}
});
