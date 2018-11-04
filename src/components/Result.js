import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Title,
  Content
} from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { playAgain } from "../actions/gameActions";
import { connect } from "react-redux";

class Result extends Component {
  render() {
    return (
      <Container>
        <Header style={{ padding: 15 }}>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title style={{ fontSize: 20 }}>RESULT</Title>
          </Body>
          <Right />
        </Header>
        <Content
          contentContainerStyle={{
            flex: 1,
            alignItems: "center"
          }}
        >
          <Grid>
            <Row
              size={34}
              style={{ justifyContent: "center", flexDirection: "column" }}
            >
              <View
                style={{
                  marginTop: 100,
                  height: 150,
                  width: 150,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center"
                }}
              >
                <AnimatedCircularProgress
                  size={150}
                  width={10}
                  backgroundWidth={10}
                  fill={this.props.results * 36}
                  lineCap="round"
                  tintColor="#00e0ff"
                  onAnimationComplete={() => console.log("onAnimationComplete")}
                  ref="circularProgress"
                  arcSweepAngle={36 * this.props.results}
                >
                  {() => (
                    <Text
                      style={{
                        fontSize: 30,
                        marginTop: 35,
                        fontWeight: "bold",
                        alignSelf: "center"
                      }}
                    >
                      {this.props.results}
                    </Text>
                  )}
                </AnimatedCircularProgress>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    marginTop: 35,
                    fontWeight: "bold",
                    alignSelf: "center"
                  }}
                >
                  TEST COMPLETED
                </Text>
              </View>
            </Row>
            <Row
              size={66}
              style={{
                marginTop: 100,
                flexDirection: "column",
                alignContent: "center"
              }}
            >
              <Image
                source={require("../assets/images.jpeg")}
                style={{ height: 150, width: 150, alignSelf: "center" }}
              />
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 20,
                  fontSize: 20,
                  fontWeight: "bold",
                  alignSelf: "center"
                }}
              >
                Markd Scored :{this.props.results}
                /10
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 10,
                  fontSize: 20,
                  fontWeight: "bold",
                  alignSelf: "center"
                }}
              >
                Time Taken : {this.props.gameTime / 1000} seconds
              </Text>
              <TouchableOpacity onPress={() => this.props.playAgain()}>
                <Text
                  style={{
                    fontSize: 15,
                    marginTop: 10,
                    fontSize: 20,
                    fontWeight: "bold",
                    alignSelf: "center",
                    color: "blue"
                  }}
                >
                  Play Again
                </Text>
              </TouchableOpacity>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = (state, props) => ({});

const mapActionToProps = dispatch => ({
  playAgain: () => playAgain()(dispatch)
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(Result);
