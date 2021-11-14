import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/RootStackParamList'
import { ButtonStyle, ContainerStyle, TextStyle } from '../../Styles'
import { IconCloud, IconQuran, IconStar } from '../../Themes/Icon'
import Ripple from 'react-native-material-ripple'
import { Dispatch } from '../../store'
import { useDispatch } from 'react-redux'

type NavigationProp = StackNavigationProp<RootStackParamList, 'WelcomeScreen'>;

interface Props {}

const index = (props: Props) => {
  const dispatch = useDispatch<Dispatch>();

  const onPressGetStarted = () => {
    dispatch.welcomeBanner.updateData(false);
  }

  return (
    <View style={[ContainerStyle.CONTAINER, { justifyContent: 'center' }]}>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
        <Text style={[TextStyle.TEXT_26SP_BOLD, { color: '#662BBB', marginBottom: 10 }]}>Quran App</Text>
        <Text style={[TextStyle.TEXT_18SP, { color: '#9698AF', textAlign: 'center' }]}>Tadabbur Al-Qur'an kapanpun dan dimanapun.</Text>
      </View>
      <View style={styles.containerCardBanner}>
        <View style={{ height: 140 }}>
          <Image source={IconStar} style={{ position: 'absolute', top: 10, left: 80, width: 15, height: 15 }} />
          <Image source={IconStar} style={{ position: 'absolute', top: 20, right: 80, width: 10, height: 10 }} />
          <Image source={IconStar} style={{ position: 'absolute', top: 30, right: 20, width: 20, height: 20 }} />
          <Image source={IconStar} style={{ position: 'absolute', top: 50, right: 80, width: 10, height: 10 }} />
          <Image source={IconStar} style={{ position: 'absolute', top: 20, left: 100, width: 20, height: 20 }} />
          <Image source={IconStar} style={{ position: 'absolute', top: 80, right: 50, width: 10, height: 10 }} />
          <Image source={IconCloud} style={{ position: 'absolute', top: 10, left: 20, width: 50, height: 50 }} />
          <Image source={IconCloud} style={{ position: 'absolute', top: 40, right: 100, width: 50, height: 50 }} />
          <Image source={IconCloud} style={{ position: 'absolute', top: 70, left: 60, width: 50, height: 50 }} />
        </View>
        <Image source={IconQuran} style={{ width: 150, height: 150 }} />
        <Ripple
        onPress={onPressGetStarted}
        style={ButtonStyle.BTN_GET_STARTED}
        rippleCentered
        rippleContainerBorderRadius={100}>
          <Text style={[TextStyle.TEXT_20SP_SEMI_BOLD, { color: '#FFF' }]}>Mulai</Text>
        </Ripple>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  containerCardBanner: {
    alignItems: 'center', backgroundColor: '#662BBB', height: 350, marginHorizontal: 10, borderRadius: 50
  },
});
