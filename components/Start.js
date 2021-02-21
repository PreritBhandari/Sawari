import React, { Component } from "react";
import { Text, Dimensions, View, StyleSheet, Image } from "react-native";

import { Entypo, Fontisto, FontAwesome } from "react-native-vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");

export default class Start extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Image source={require("../assets/sawari.png")} style={styles.logo} />
        <View style={styles.rowbox}>
          <View style={styles.box}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <View style={styles.icon}>
                <Entypo name="map" color="black" size={45} />
                <Text style={styles.text}>Map</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <TouchableOpacity>
              <View style={styles.icon}>
                <FontAwesome name="bus" color="black" size={45} />
                <Text style={styles.text}>Service Provider</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rowbox}>
          <View style={styles.box}>
            <TouchableOpacity>
              <View style={styles.icon}>
                <Fontisto name="bus-ticket" color="black" size={45} />
                <Text style={styles.text}>Bus Fare</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <TouchableOpacity onPress={() => navigation.navigate("AboutUs")}>
              <View style={styles.icon}>
                <Entypo name="user" color="black" size={45} />
                <Text style={styles.text}>About Us</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "silver",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    marginBottom: 20,
    width: 100,
    height: 100,
  },
  box: {
    width: width * 0.35,
    height: height * 0.25,
    backgroundColor: "white",
    margin: 9,
    opacity: 0.7,

    // box shadow and border
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "silver",

    elevation: 5,
  },

  rowbox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },

  icon: {
    margin: 40,
    marginTop: 60,
  },

  text: {
    fontSize: 12,
    fontWeight: "bold",
    margin: 5,
    marginVertical: 15,
    textAlign: "center",
  },
});
