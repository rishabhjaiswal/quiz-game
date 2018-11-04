import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
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

export default class Result extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>RESULT</Title>
          </Body>
          <Right />
        </Header>
        <Content contentContainerStyle={{ flex: 1, alignItems: "center" }}>
          <Grid>
            <Row
              size={34}
              style={{ justifyContent: "center", flexDirection: "column" }}
            >
              <View
                style={{
                  marginTop: 50,
                  height: 125,
                  width: 125,
                  borderRadius: 66,
                  borderWidth: 4,
                  borderColor: "skyBlue",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <AnimatedCircularProgress
                  size={100}
                  width={3}
                  fill={this.props.results}
                  tintColor="#00e0ff"
                  onAnimationComplete={() => console.log("onAnimationComplete")}
                  ref="circularProgress"
                  backgroundColor="blue"
                  arcSweepAngle={36 * this.props.results}
                >
                  {fill => <Text style={styles.points}>{fill}</Text>}
                </AnimatedCircularProgress>
              </View>
              <View>
                <Text style={{ fontSize: 15, marginTop: 10 }}>
                  TEST COMPLETED
                </Text>
              </View>
            </Row>
            <Row
              size={66}
              style={{
                justifyContent: "center",
                flexDirection: "column",
                alignContent: "center"
              }}
            >
              <Image
                source={require("../assets/images.jpeg")}
                style={{ height: 150, width: 150 }}
              />
              <Text style={{ fontSize: 15, marginTop: 10 }}>
                Markd Scored : {this.props.results}
                /10
              </Text>
              <Text style={{ fontSize: 15, marginTop: 10 }}>
                Time Taken : {this.props.gameTime / 1000} seconds
              </Text>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
