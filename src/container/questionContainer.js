import React, { Component, PureComponent } from "react";
import { Alert, Dimensions, StyleSheet, View, Platform } from "react-native";
import {
  Container,
  Header,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
  Button,
  ListItem,
  CheckBox,
  Content,
  List
} from "native-base";

import {
  CircularProgress,
  AnimatedCircularProgress
} from "react-native-circular-progress";
import { Grid, Row, Col } from "react-native-easy-grid";
import { Actions } from "react-native-router-flux";
const { height, width } = Dimensions.get("window");
export default class QuestionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnswer: "",
      currentAnswer: "",
      questionNumber: 1,
      points: 1,
      optionA: false,
      optionB: false,
      optionC: false,
      optionD: false
    };
  }

  renderCard = item => {
    const data = [...item.incorrect_answers, item.correct_answer].sort() || [];
    return (
      <Card
        padder
        style={{
          elevation: 3,
          flex: 1,
          marginTop: Platform.OS === "ios" ? 20 : 0,
          alignSelf: "center",
          padding: 10,
          flexWrap: "wrap"
        }}
      >
        <CardItem padder style={{ flex: 1, flexWrap: "wrap" }}>
          <Left>
            <Thumbnail source={require("../assets/logo.jpg")} />
            <Body>
              <Text>{item.category}</Text>
              <Text note>{item.difficulty}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem
          cardBody
          padder
          style={{
            flex: 1,
            flexWrap: "wrap",
            flexDirection: "row"
          }}
        >
          {/* <Icon
            name="question"
            type="FontAwesome"  
            style={{ color: "blue", marginLeft: 5 }}
          /> */}
          <Text>{item.question}</Text>
        </CardItem>
        <CardItem padder>
          <List style={{ width: "100%" }}>
            <ListItem itemDivider={true}>
              <CheckBox
                checked={this.state.optionA}
                onPress={() => this.handleChecked(data[0], "optionA")}
              />

              <Text style={{ marginLeft: 10 }}>{data[0]}</Text>
            </ListItem>
            <ListItem itemDivider={true}>
              <CheckBox
                checked={this.state.optionB}
                onPress={() => this.handleChecked(data[1], "optionB")}
              />

              <Text style={{ marginLeft: 10 }}>{data[1]}</Text>
            </ListItem>
            <ListItem itemDivider={true}>
              <CheckBox
                checked={this.state.optionC}
                onPress={() => this.handleChecked(data[2], "optionC")}
              />

              <Text style={{ marginLeft: 10 }}>{data[2]}</Text>
            </ListItem>
            <ListItem itemDivider={true}>
              <CheckBox
                checked={this.state.optionD}
                onPress={() => this.handleChecked(data[3], "optionD")}
              />
              <Text style={{ marginLeft: 10 }}>{data[3]}</Text>
            </ListItem>
          </List>
        </CardItem>

        <CardItem style={{ justifyContent: "center" }}>
          <Button
            iconRight
            onPress={() => this.handleSubmit(item.correct_answer)}
            style={{
              justifyContent: "center",
              alignSelf: "center",
              padding: 15
            }}
          >
            <Icon name="arrow-forward" />
            <Text>Submit Answer</Text>
          </Button>
        </CardItem>
      </Card>
    );
  };

  handleSubmit = correctAnswer => {
    if (this.state.selectedAnswer == correctAnswer) {
      this.setState((state, props) => ({
        points: state.points + 1
      }));
    }

    if (this.state.questionNumber >= 10) {
      let endTime = new Date();

      let timeDiff = Math.ceil(
        endTime.getTime() - this.props.startTime.getTime()
      );
      console.log("date.................", timeDiff);
      Actions.result({ results: this.state.points, gameTime: timeDiff });
    }
    this.setState((state, props) => ({
      questionNumber: state.questionNumber + 1
    }));

    this.setState(
      {
        optionA: false,
        optionB: false,
        optionC: false,
        optionD: false
      },
      this._deckSwiper._root.swipeRight()
    );
  };

  handleChecked = (item, name) => {
    if (name === "optionA") {
      this.setState({
        optionA: !this.state.optionA,
        optionB: false,
        optionC: false,
        optionD: false,
        selectedAnswer: item
      });
    } else if (name === "optionB") {
      this.setState({
        optionB: !this.state.optionB,
        optionA: false,
        optionC: false,
        optionD: false,
        selectedAnswer: item
      });
    } else if (name === "optionC") {
      this.setState({
        optionC: !this.state.optionC,
        selectedAnswer: item,
        optionB: false,
        optionA: false,
        optionD: false
      });
    } else {
      this.setState({
        optionD: !this.state.optionD,
        selectedAnswer: item,
        optionB: false,
        optionC: false,
        optionA: false
      });
    }
  };

  renderEmpty = () => {
    return (
      <View style={{ alignSelf: "center" }}>
        <Text>Over</Text>
      </View>
    );
  };

  render() {
    let fill = this.state.questionNumber * 10;
    return (
      <Container
        style={{
          flex: 1,
          flexDirection: "column",
          alignContent: "center"
        }}
      >
        <Content
          padder
          contentContainerStyle={{
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            alignItems: "stretch"
          }}
        >
          <View
            style={{
              flex: 1,
              marginTop: Platform.OS === "ios" ? 50 : 0,
              padding: 10
            }}
          >
            <DeckSwiper
              style={{ flex: 1, alignSelf: "center" }}
              ref={c => (this._deckSwiper = c)}
              dataSource={this.props.data || []}
              renderEmpty={() => this.renderEmpty()}
              renderItem={item => this.renderCard(item)}
            />
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 120,
              alignItems: "center",
              justifyContent: "center",
              zIndex: -1
            }}
          >
            <CircularProgress
              size={150}
              width={5}
              fill={fill}
              tintColor="#00e0ff"
              backgroundColor="#3d5875"
            >
              {() => (
                <Text style={styles.points}>{this.state.questionNumber}</Text>
              )}
            </CircularProgress>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  points: {
    backgroundColor: "transparent",
    alignSelf: "center",
    textAlign: "center",
    color: "#7591af",
    fontSize: 50,
    fontWeight: "100"
  }
});
