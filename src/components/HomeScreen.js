import React, { Component } from "react";
import {
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import { Actions } from "react-native-router-flux";
import { TabHeading, Container, Content } from "native-base";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    backgroundColor: "white",
    resizeMode: "cover",
    alignContent: "stretch"
  },
  button: {
    borderRadius: 4,
    borderWidth: 5,
    borderColor: "red",
    width: "50%",
    alignSelf: "center",
    alignItems: "center",
    padding: 10,
    marginTop: height / 5
  },
  quizText: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "red",
    textShadowColor: "grey",
    fontSize: 24
  }
});

export default class HomeScreen extends Component {
  componentDidMount() {
    console.log("homescreenn.........");
  }
  onPress = () => {
    let d = new Date();
    Actions.gameScreen({ startTime: d });
  };
  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1 }}>
          <ImageBackground
            source={require("../assets/quiz.jpg")}
            style={styles.imageBackground}
          >
            <TouchableOpacity onPress={this.onPress} style={styles.button}>
              <Text style={styles.quizText}>Start Quiz</Text>
            </TouchableOpacity>
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}
