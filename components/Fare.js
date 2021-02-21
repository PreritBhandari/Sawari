import React, { Component } from "react";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import HeaderFare from "./HeaderFare";
import { ScrollView } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("screen");

export default class Fare extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderFare />
        <ScrollView>
          <Image
            style={styles.image}
            source={require("../assets/busFare/1.jpg")}
          />
          <Image
            style={styles.image2}
            source={require("../assets/busFare/2.jpg")}
          />
          <Image
            style={styles.image}
            source={require("../assets/busFare/3.jpg")}
          />
          <Image
            style={styles.image}
            source={require("../assets/busFare/4.jpg")}
          />
          <Image
            style={styles.image}
            source={require("../assets/busFare/5.jpg")}
          />
          <Image
            style={styles.image3}
            source={require("../assets/busFare/6.jpg")}
          />
          <Image
            style={styles.image}
            source={require("../assets/busFare/8.jpg")}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: width * 1,
    height: height * 0.5,
    margin: 2,
    borderWidth: 2,
    borderColor: "black",
  },
  image2: {
    width: width * 1.2,
    height: height * 0.5,
    margin: 2,
    borderWidth: 2,
    borderColor: "black",
  },
  image3: {
    width: width * 1.07,
    height: height * 0.5,
    margin: 2,
    borderWidth: 2,
    borderColor: "black",
  },
  image4: {
    width: width * 1.9,
    height: height * 0.5,
    margin: 2,
    borderWidth: 2,
    borderColor: "black",
  },

  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
