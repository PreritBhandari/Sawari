import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "./components/Start";
import Service from "./components/Service";
import AboutUs from "./components/AboutUs";
import Fare from "./components/Fare";

export default class App extends Component {
  render() {
    const Stack = createStackNavigator();

    return (
      <NavigationContainer style={styles.container}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Start"
        >
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Service" component={Service} />
          <Stack.Screen name="AboutUs" component={AboutUs} />
          <Stack.Screen name="Fare" component={Fare} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
