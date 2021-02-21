import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class HeaderService extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.textHeader}>
          service<Text style={styles.colorind}>&nbsp;Provider</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    backgroundColor: "silver",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",

    borderBottomWidth: 3,
    borderBottomColor: "black",
  },
  textHeader: {
    fontSize: 28,
    fontWeight: "bold",
    color: "purple",
  },

  colorind: {
    color: "green",
    fontSize: 40,
  },
});