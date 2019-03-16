import {createStackNavigator, createAppContainer} from 'react-navigation';
import React, {Component} from 'react';
import {Button} from 'react-native';
import HomeScreen from './HomeScreen'

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Jane's HomeScreen"
        onPress={() => navigate('HomeScreen', {name: 'Jane'})}
      />
    );
  }
}
