import React, { useState } from 'react'
import {LayoutAnimation, Platform, StyleSheet, Text, TouchableOpacity, UIManager, View} from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/RootStackParamList'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/core'
import { ContainerStyle, InputStyle, TextStyle } from '../../Styles'
import { TextInput } from 'react-native-gesture-handler'
import ListCardItemList from '../../Components/ListCardItem'
import CardItemSurah from '../../Components/CardItemSurah'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch, RootState } from '../../store'
import CardItemSearch from '../../Components/CardItemSearch'
import { useDebounce } from 'usehooks-ts';

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type NavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

interface Props {}

const index = (props: Props) => {
  const quranData = useSelector((rootState: RootState) => rootState.quran);
  const searchData = useSelector((rootState: RootState) => rootState.search);
  const loadingQuran = useSelector((rootState: RootState) => rootState.loading.effects.quran.getQuran);
  const loadingSearch = useSelector((rootState: RootState) => rootState.loading.effects.search.getSearch);

	const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch<Dispatch>();

  const [showSearchBox, setShowSearchBox] = useState(false);
  const [keywordSearch, setkeywordSearch] = useState('');
  const debouncedValue = useDebounce<string>(keywordSearch, 500);

  React.useEffect(() => {
    if (!showSearchBox) 
      setkeywordSearch(''); 
      resetSearch();
  }, [showSearchBox])

  React.useEffect(() => {
    getSearch(debouncedValue + '/all/id');
  }, [debouncedValue]);

  const getSearch = (params: string) => {
    dispatch.search.getSearch(params);
  }

  const resetSearch = () => {
    dispatch.search.resetData();
  }

  const getQuran = (params: string) => {
    dispatch.quran.getQuran(params);
  }

  const resetQuran = () => {
    dispatch.quran.resetData();
  }

  const getSurahArabic = (params: string) => {
    return dispatch.surahArabic.getSurah(params);
  }

	const getSurah = (params: string) => {
    return dispatch.surah.getSurah(params);
  }

  const onChangeTextSearch = (data: any) => {
    setkeywordSearch(data);
  }

  const onPressSearch = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setShowSearchBox(!showSearchBox);
  }

  const onPressCardItemSearch = async (data: any) => {
    let surahArabicData = await getSurahArabic(data.surah.number + '');
    let surahData = await getSurah(data.surah.number + '/id.indonesian');
    navigation.navigate('DetailAyahScreen', { ayah: surahArabicData.ayahs[data.numberInSurah - 1], ayahTranslated: surahData });
  }

  const onPressCardItem = (data: any) => {
    navigation.navigate('DetailSurahScreen', { ...data });
  }

  return (
    <View style={ContainerStyle.CONTAINER}>
      <View>
        <View style={ContainerStyle.CONTAINER_HEADER_SEARCH}>
          <Text style={[TextStyle.TEXT_24SP_BOLD, { color: '#662BBB' }]}>Quran App</Text>
          <TouchableOpacity 
          onPress={onPressSearch}>
            <FontAwesome name={'search'} color={'#8789A2'} size={24} />
          </TouchableOpacity>
        </View>
        {
          showSearchBox && 
          <View style={{ backgroundColor: '#FFF' }}>
            <TextInput 
              editable={showSearchBox} 
              style={[InputStyle.INPUT_SEARCH, TextStyle.TEXT_16SP_SEMI_BOLD]} 
              placeholder={'Cari ayat'}
              onChangeText={onChangeTextSearch} />
          </View>
        }
      </View>
      {
        showSearchBox ?
        <ListCardItemList
          renderItem={({ item, index }: { item: any, index: number }) => (
            <View key={index} style={{ borderBottomWidth: 1, borderColor: '#EFF3F6' }}>
              <CardItemSearch data={item} onPress={onPressCardItemSearch} />
            </View>
          )}
          data={searchData.matches}
          extraParams={debouncedValue + '/all/id'}
          loading={loadingSearch}
          getData={(params: any) => {
            getSearch(params);
          }}
          resetData={resetSearch}
        />
        :
        <ListCardItemList
          renderItem={({ item, index }: { item: any, index: number }) => (
            <View key={index} style={{ borderBottomWidth: 1, borderColor: '#EFF3F6' }}>
              <CardItemSurah data={item} onPress={onPressCardItem} />
            </View>
          )}
          data={quranData}
          extraParams={'id.indonesian'}
          loading={loadingQuran}
          getData={(params: any) => {
            getQuran(params);
          }}
          resetData={resetQuran}
        />
      }
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
