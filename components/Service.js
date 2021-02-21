import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import HeaderService from "./HeaderService";
import { FlatList } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("screen");

export default class Service extends Component {
  render() {
    const yatayat = require("../locations.json");
    return (
      <View style={styles.mainContainer}>
        <HeaderService />
        <FlatList
          data={yatayat}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Text style={styles.text}>{item.name}</Text>
              <View style={styles.line} />
              <Image source={{ uri: item.image_url }} style={styles.bus} />
              <View style={styles.detailBox}>
                <Text style={styles.text}>
                  No of Buses&nbsp;:
                  {item.buses}
                </Text>
                <Text style={styles.text}>
                  Head Office&nbsp;:{item.headoffice}
                </Text>
                <Text style={styles.text}>
                  Contact No&nbsp;:{item.contactno}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginBottom: 5,
  },

  container: {
    flex: 1,
    width: width * 0.978,
    height: height * 0.5,
    backgroundColor: "silver",
    margin: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    // box shadow and border
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3.84,

    elevation: 5,
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
  },

  line: {
    width: "100%",
    height: 2,
    marginVertical: 5,
    backgroundColor: "black",
  },
  bus: {
    width: width * 0.94,
    height: height * 0.25,
    borderWidth: 2,
    borderColor: "black",
  },

  detailBox: {
    width: width * 0.94,
    height: height * 0.18,
    margin: 5,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
