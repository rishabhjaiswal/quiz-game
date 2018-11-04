import React, { Component } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import QuestionContainer from "../container/questionContainer";
import { Actions } from "react-native-router-flux";

export default class GameScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getGame();
  }

  render() {
    return !this.props.gameRequest.gameReducer.isFetching ? (
      <QuestionContainer
        data={this.props.gameRequest.gameReducer.game.results}
        startTime={this.props.startTime}
      />
    ) : (
      <ActivityIndicator
        size="large"
        color="#0000ff"
        style={styles.activityIndicator}
      />
    );
  }
}

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: "center"
  }
});
