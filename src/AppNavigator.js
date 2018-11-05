import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";

import HomeScreen from "./components/HomeScreen";
import GameContainer from "./container/gameContainer";
import QuestionContainer from "./container/questionContainer";
import Result from "./container/Result";
export default class AppNavigator extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene
            key="homeScreen"
            component={HomeScreen}
            title="HomeScreen"
            initial={true}
          />
          <Scene
            key="gameScreen"
            component={GameContainer}
            title="GameScreen"
          />

          <Scene
            key="questionContainer"
            component={QuestionContainer}
            title={"QuestionContainer"}
          />
          <Scene
            key="result"
            component={Result}
            title={"Result"}
            initial={false}
          />
        </Scene>
      </Router>
    );
  }
}
