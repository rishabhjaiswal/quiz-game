import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class HomeScreen extends Component {
  componentDidMount() {
    console.log("homescreenn.........")
  }
  render() {
    return (
      <View>
        <Text>Home Screen!</Text>
        <Button onPress={() => Actions.gameScreen()} title="gameScreen"/>
      </View>
    );
  }
}
