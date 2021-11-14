import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextStyle} from '../Styles';
import Ripple from 'react-native-material-ripple';

interface Props {
  data: any;
  onPress: (data: any) => void;
}

const CardItemSearch = (props: Props) => {
  const {data, onPress} = props;

  return (
    <Ripple
      rippleCentered
      rippleContainerBorderRadius={100}
      onPress={() => onPress(data)}
      style={styles.container}>
      <View style={{ flexDirection: 'row', marginBottom: 16 }}>
        <View style={{flexGrow: 2, alignItems: 'flex-start', justifyContent: 'center'}}>
          <Text style={[TextStyle.TEXT_14SP_SEMI_BOLD, {color: '#281453'}]}>
            Surat {data.surah.englishName}
          </Text>
        </View>
        <View style={{flexGrow: 1}}>
          <Text style={[TextStyle.TEXT_14SP_BOLD, {color: '#9453D9'}]}>
            {data.surah.name}
          </Text>
        </View>
      </View>
      <Text style={[TextStyle.TEXT_14SP_MEDIUM, {color: '#281453', marginBottom: 10}]} numberOfLines={3}>
        {data.text}
      </Text>
      <Text style={[TextStyle.TEXT_14SP_BOLD, {color: '#9453D9'}]}>
        Ayat ke {data.numberInSurah}
      </Text>
    </Ripple>
  );
};

export default CardItemSearch;

const styles = StyleSheet.create({
  container: {
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
