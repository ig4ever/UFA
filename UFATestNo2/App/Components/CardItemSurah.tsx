import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Surah} from '../Data/Types';
import {TextStyle} from '../Styles';
import Ripple from 'react-native-material-ripple';

interface Props {
  data: Surah;
  onPress: (data: any) => void;
}

const CardItemSurah = (props: Props) => {
  const {data, onPress} = props;

  return (
    <Ripple
      rippleCentered
      rippleContainerBorderRadius={100}
      onPress={() => onPress(data)}
      style={styles.container}>
      <View style={styles.containerTextNumber}>
        <Text style={[TextStyle.TEXT_14SP_MEDIUM, {color: '#FFF'}]}>
          {data.number}
        </Text>
      </View>
      <View style={{flexGrow: 2, alignItems: 'flex-start'}}>
        <Text style={[TextStyle.TEXT_14SP_SEMI_BOLD, {color: '#281453'}]}>
          {data.englishName}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              TextStyle.TEXT_14SP_BOLD,
              {color: '#8C8EA6', marginRight: 10},
            ]}>
            {data.revelationType}
          </Text>
          <Text
            style={[
              TextStyle.TEXT_14SP_BOLD,
              {color: '#8C8EA6', marginRight: 10},
            ]}>
            •
          </Text>
          <Text style={[TextStyle.TEXT_14SP_BOLD, {color: '#8C8EA6'}]}>
            {data.ayahs.length} Ayat
          </Text>
        </View>
      </View>
      <View style={{flexGrow: 1}}>
        <Text style={[TextStyle.TEXT_14SP_BOLD, {color: '#9453D9'}]}>
          {data.name}
        </Text>
      </View>
    </Ripple>
  );
};

export default CardItemSurah;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
  },
  containerTextNumber: {
    backgroundColor: '#672CBC',
    borderRadius: 100,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
});
