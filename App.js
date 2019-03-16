/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {createStackNavigator,createAppContainer,createBottomTabNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import Login from './Login';
import {Ionicons,Image} from 'react-native';

const MainNavigator = createStackNavigator({
  HomeScreen: {screen: HomeScreen},
    Login: {screen: Login},
});

//const App = createAppContainer(MainNavigator);



const BottomNativation = createBottomTabNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    Login: { screen: Login },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
    /*  tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },*/
      tabBarIcon: ({ tintColor }) => {
          return (<Image
              style={{ width: 40, height: 40 }}
              source={require("./icon/first.png")}/>);}
    }),
    tabBarOptions: {
      activeTintColor: '#42f44b',
      inactiveTintColor: 'gray',
    },
  }
);

const App = createAppContainer(BottomNativation);

export default App;
