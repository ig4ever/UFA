import React, { useRef, useState } from 'react';
import { Animated, Easing, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RootState } from '../store';
import { RootStackParamList } from './RootStackParamList';
import { useSelector } from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { ButtonStyle } from '../Styles';

/** Before Auth Screens */
import WelcomeBanner from '../Screens/WelcomeBanner';

/** After Auth Screens */
import Home from '../Screens/Home';
import DetailAyah from '../Screens/Home/DetailAyah';
import DetailSurah from '../Screens/Home/DetailSurah';

// initialize navigator
const BeforeAuthStack = createStackNavigator<RootStackParamList>();
const AfterAuthStack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const BeforeAuthScreens = (props: any) => {
  return (
    <BeforeAuthStack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <BeforeAuthStack.Screen name='WelcomeScreen' component={WelcomeBanner} />
    </BeforeAuthStack.Navigator>
  );
};

const AfterAuthScreens = (props: any) => {
  return (
    <AfterAuthStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <AfterAuthStack.Screen name="MainScreen" component={MainTab} />
      <AfterAuthStack.Screen name="HomeScreen" component={Home} />
      <AfterAuthStack.Screen name="DetailAyahScreen" component={DetailAyah} />
      <AfterAuthStack.Screen name="DetailSurahScreen" component={DetailSurah} />
    </AfterAuthStack.Navigator>
  );
};

const ListTab = {
  Tab1: 'Home',
  Tab2: 'Bookmark',
  Tab3: 'Profile'
};

const MainTab = () => {
  const animateValueTab1 = useRef(new Animated.Value(1)).current;
  const animateValueTab2 = useRef(new Animated.Value(1)).current;
  const animateValueTab3 = useRef(new Animated.Value(1)).current;

  const [tabActive, setTabActive] = useState(ListTab.Tab1);

  const animate = (animatedValue: any, value: number) => {
    Animated.timing(animatedValue, {
      toValue: value,
      duration: 200,
      useNativeDriver: true
    }).start()
  }

  React.useEffect(() => {
    if (tabActive === ListTab.Tab1) {
      animate(animateValueTab1, 1.5)
      animate(animateValueTab2, 1)
      animate(animateValueTab3, 1)
    } else if (tabActive === ListTab.Tab2) {
      animate(animateValueTab2, 1.5)
      animate(animateValueTab1, 1)
      animate(animateValueTab3, 1)
    } else if (tabActive === ListTab.Tab3) {
      animate(animateValueTab3, 1.5)
      animate(animateValueTab2, 1)
      animate(animateValueTab1, 1)
    }
  }, [tabActive])

  return (
    <Tab.Navigator 
    sceneContainerStyle={{
      backgroundColor: '#FFF',
    }} 
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 80,
        elevation: 0,
        borderTopWidth: 0,
        paddingHorizontal: 30,
      },
    }}>
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        listeners={{
          tabPress: e => {
            setTabActive(ListTab.Tab1)
          }
        }}
        options={{
          tabBarIcon: (props: any) => {
            if (props.focused) {
              return (
              <Animated.View style={[ButtonStyle.BTN_TAB_BAR_ACTIVE, { transform: [{
                  scale: animateValueTab1
                }
              ]}]}>
                <Ionicons name={'book'} size={25} color={'#F8AF8F'} />
              </Animated.View>
              );
            } else if (!props.focused) {
              return (
              <Animated.View style={[ButtonStyle.BTN_TAB_BAR_INACTIVE, { transform: [{
                  scale: animateValueTab1
                }
              ]}]}>
                <Ionicons name={'book'} size={20} color={'#672CBC'} />
              </Animated.View>
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="BookmarkScreen"
        component={Home}
        listeners={{
          tabPress: e => {
            setTabActive(ListTab.Tab2)
          }
        }}
        options={{
          tabBarIcon: (props: any) => {
            if (props.focused) {
              return (
              <Animated.View style={[ButtonStyle.BTN_TAB_BAR_ACTIVE, { transform: [{
                  scale: animateValueTab2
                }
              ]}]}>
                <Ionicons name={'bookmark'} size={25} color={'#F8AF8F'} />
              </Animated.View>
              );
            } else if (!props.focused) {
              return (
              <Animated.View style={[ButtonStyle.BTN_TAB_BAR_INACTIVE, { transform: [{
                  scale: animateValueTab2
                }
              ]}]}>
                <Ionicons name={'bookmark'} size={20} color={'#672CBC'} />
              </Animated.View>
              );
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = (props: any) => {
  const isShowWelcomeBanner = useSelector((rootState: RootState) => rootState.welcomeBanner);

  return (
    <NavigationContainer>
      { !isShowWelcomeBanner ? (
        <AfterAuthScreens/>
      ) : (
        <BeforeAuthScreens />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;