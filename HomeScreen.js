import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Button,Icon,ProgressBarAndroid,View,Text,Picker} from 'react-native';
import React, {Component} from 'react';
import Login from './Login';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
  title: 'Home',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
      <Button
        title="Go to Jane's Login"
        onPress={() => navigate('Login', {name: 'Jane'})}
      />
      <Text>  orem ipsum dolor sit amet, sed do eiusmod.  </Text>

<ProgressBarAndroid />

      </View>
    );
  }
}
