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

type NavigationProp = StackNavigationProp<RootStackParamList, 'DetailSurahScreen'>;

const DetailSurah = (props: any) => {
	const { route } = props;

	const surahArabicData = useSelector((rootState: RootState) => rootState.surahArabic);
	const surahData = useSelector((rootState: RootState) => rootState.surah);
	const loadingGetSurahArabic = useSelector((rootState: RootState) => rootState.loading.effects.surahArabic.getSurah);
	const loadingGetSurah = useSelector((rootState: RootState) => rootState.loading.effects.surah.getSurah);

  const [params] = useState(route.params);

	const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch<Dispatch>();

	React.useEffect(() => {
		getSurahArabic(params.number + '');
	}, [])

	React.useEffect(() => {
		getSurah(params.number + '/id.indonesian');
	}, [])

  const getSurahArabic = (params: string) => {
    dispatch.surahArabic.getSurah(params);
  }

	const getSurah = (params: string) => {
    dispatch.surah.getSurah(params);
  }

	const resetSurahArabic = () => {
		dispatch.surahArabic.resetData();
	}

  const onPressCardItem = (data: any, dataTranslated: any) => {
    navigation.navigate('DetailAyahScreen', { ayah: data, ayahTranslated: dataTranslated });
  }

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
					<Text style={[TextStyle.TEXT_22SP_BOLD, { color: '#662BBB' }]}>Surat {params.englishName}</Text>
        </View>
      </View>
			<View style={[{ padding: 16, backgroundColor: '#B474FC', marginBottom: 16, borderRadius: 10 }, styles.shadow]}>
				<Text style={[TextStyle.TEXT_22SP_MEDIUM, { color: '#FFF', textAlign: 'center' }]}>{params.englishName}</Text>
				<Text style={[TextStyle.TEXT_18SP, { color: '#FFF', textAlign: 'center' }]}>{params.englishNameTranslation}</Text>
				<View style={{ height: 1, backgroundColor: '#FFF', marginVertical: 8 }} />
				<View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text
            style={[
              TextStyle.TEXT_18SP_LIGHT,
              {color: '#FFF', marginRight: 10},
            ]}>
            {params.revelationType}
          </Text>
          <Text
            style={[
              TextStyle.TEXT_18SP_LIGHT,
              {color: '#FFF', marginRight: 10},
            ]}>
            •
          </Text>
          <Text style={[TextStyle.TEXT_18SP_LIGHT, {color: '#FFF'}]}>
            {params.ayahs.length} Ayat
          </Text>
        </View>
			</View>
      <ListCardItemList
				renderItem={({ item, index }: { item: any, index: number }) => (
					<View key={index} style={{ borderBottomWidth: 1, borderColor: '#EFF3F6' }}>
						<CardItemAyah data={item} dataTranslated={surahData} onPress={onPressCardItem} />
					</View>
				)}
				data={surahArabicData.ayahs}
				extraParams={params.number + ''}
				loading={loadingGetSurahArabic && loadingGetSurah}
				getData={(params: any) => {
					getSurahArabic(params);
				}}
				resetData={resetSurahArabic}
			/>
    </View>
  );
};

export default DetailSurah;

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
