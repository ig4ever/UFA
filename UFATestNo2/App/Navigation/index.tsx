import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { RootState } from '../store';
import { RootStackParamList } from './RootStackParamList';
import { useSelector } from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';

/** Before Auth Screens */
import WelcomeBanner from '../Screens/WelcomeBanner';

/** After Auth Screens */
import Home from '../Screens/Home';
import { View } from 'react-native';

// initialize navigator
const BeforeAuthStack = createStackNavigator<RootStackParamList>();
const AfterAuthStack = createStackNavigator<RootStackParamList>();
const Tab = createMaterialBottomTabNavigator();

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
    </AfterAuthStack.Navigator>
  );
};

const MainTab = () => {
  return (
    <Tab.Navigator 
      labeled={false}
      activeColor="#3A99D8"
      inactiveColor='#B2C5D0'
      shifting={false}
      barStyle={{ backgroundColor: '#FFF' }}>
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarIcon: (props: any) => {
            if (props.focused) {
              return (
              <View style={{ backgroundColor: '#672CBC', padding: 2, borderRadius: 100 }}>
                <Ionicons name={'book'} size={20} color={'#F8AF8F'} />
              </View>
              );
            } else if (!props.focused) {
              return <Ionicons name={'book-outline'} size={20} color={'#FFF'} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="BookmarkScreen"
        component={Home}
        options={{
          tabBarIcon: (props: any) => {
            if (props.focused) {
              return (
              <View style={{ backgroundColor: '#672CBC', padding: 2, borderRadius: 100 }}>
                <Ionicons name={'bookmark'} size={20} color={'#F8AF8F'} />
              </View>
              );
            } else if (!props.focused) {
              return <Ionicons name={'bookmark-outline'} size={20} color={'#FFF'} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={Home}
        options={{
          tabBarIcon: (props: any) => {
            if (props.focused) {
              return (
              <View style={{ backgroundColor: '#672CBC', padding: 2, borderRadius: 100 }}>
                <Ionicons name={'person-outline'} size={20} color={'#F8AF8F'} />
              </View>
              );
            } else if (!props.focused) {
              return <Ionicons name={'person-outline'} size={20} color={'#FFF'} />;
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = (props: any) => {
  const isShowWelcomeBanner = useSelector((rootState: RootState) => rootState.loading.effects.authToken.register);

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