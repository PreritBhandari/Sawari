import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Header from "./Header";

export default class AboutUs extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.data}>
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>"SAWARI"</Text> is designed is
            to make the commute and travelling around kathmandu valley.{"\n"}
            {"\n"} <Text style={{ fontWeight: "bold" }}>"SAWARI"</Text> is a
            public vehicle tracking system, which tracks the vehicle and show
            its location in the map. The visual representation of the vehicle is
            more effective as we can see where the vehicle is.{"\n"} {"\n"}
            <Text style={{ fontWeight: "bold" }}>"SAWARI"</Text>also provides
            the required route to reach the nearest bus stop.This makes
            travelling easy and tries to minimize the time waste while waiting a
            public vehicle.{"\n"} {"\n"}
            Here, app provides the real time location of the vehicle with the
            calculated time to reach the user location.And user can select the
            route and the Service Provider.Here, system also provides location
            info and bus from different locations to the destination.{"\n"}
          </Text>
        </View>
        <Image source={require("../assets/sawari.png")} style={styles.logo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  text: {
    color: "black",
    fontSize: 15,
  },

  data: {
    margin: 5,
  },
  logo: {
    marginTop: 30,
    width: 150,
    height: 150,
    marginLeft: 120,
  },
});
