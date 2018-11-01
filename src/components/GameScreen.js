import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class GameScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("props in gamescreen", this.props)
    this.props.getGame();
  }
  

  render() {
    console.log("in renderrrr......", this.props.gameRequest)
    return (
      <View>
        <Text> welcome to gamescreen </Text>
      </View>
    )
  }
}