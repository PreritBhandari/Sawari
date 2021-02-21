import React from "react";
import { Dimensions, StyleSheet, Text, View, Image } from "react-native";

import MapView from "react-native-maps";
import * as Permissions from "expo-permissions";
import Polyline from "@mapbox/polyline";

import { Marker } from "react-native-maps";

const locations = require("../locations.json");
const { width, height } = Dimensions.get("screen");

export default class MapHome extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    locations: locations,
  };

  async componentDidMount() {
    const { status } = await Permissions.getAsync(Permissions.LOCATION);

    if (status !== "granted") {
      const response = await Permissions.askAsync(Permissions.LOCATION);
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        this.setState({ latitude, longitude }, this.mergeCoords),
      (error) => console.log("Error:", error)
    );

    const {
      locations: [sampleLocation],
    } = this.state;

    this.setState(
      {
        desLatitude: sampleLocation.coords.latitude,
        desLongitude: sampleLocation.coords.longitude,
      },
      this.mergeCoords
    );
  }

  mergeCoords = () => {
    const { latitude, longitude, desLatitude, desLongitude } = this.state;

    const hasStartAndEnd = latitude !== null && desLatitude !== null;

    if (hasStartAndEnd) {
      const concatStart = `${latitude},${longitude}`;
      const concatEnd = `${desLatitude},${desLongitude}`;
      this.getDirections(latitude, longitude, desLatitude, desLongitude);
    }
  };

  async getDirections(lat, long, deslat, deslon) {
    try {
      const resp = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${long},${lat};${deslon},${deslat}?&access_token=pk.eyJ1IjoicHJlcml0MTIzNCIsImEiOiJja2xldzA4bmowd21mMndwNzNyem1ta2Y3In0.qBmjF2uVqNc53wBbAu6HnQ`
      );

      const respJson = await resp.json();
      // console.log(respJson);
      const response = respJson.routes[0];

      console.log(response);
      // const distanceTime = response.duration;
      const distance = Math.round(response.distance);
      const time = Math.round(response.duration / 60);

      const points = Polyline.decode(respJson.routes[0].geometry);
      const coords = points.map((point) => {
        return {
          latitude: point[0],
          longitude: point[1],
        };
      });
      this.setState({ coords, distance, time });
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  onMarkerPress = (location) => () => {
    const {
      coords: { latitude, longitude },
    } = location;
    this.setState(
      {
        destination: location,
        desLatitude: latitude,
        desLongitude: longitude,
      },
      this.mergeCoords
    );
  };

  renderMarkers = () => {
    const { locations } = this.state;
    return (
      <View>
        {locations.map((location, idx) => {
          const {
            coords: { latitude, longitude },
          } = location;
          return (
            <Marker
              key={idx}
              coordinate={{ latitude, longitude }}
              onPress={this.onMarkerPress(location)}
            />
          );
        })}
      </View>
    );
  };

  render() {
    const {
      time,
      coords,
      distance,
      latitude,
      longitude,
      destination,
    } = this.state;

    if (latitude) {
      return (
        <MapView
          showsUserLocation
          style={{ flex: 1 }}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <View
            style={{
              width,
              paddingTop: 10,
              alignSelf: "center",
              alignItems: "center",
              height: height * 0.15,
              backgroundColor: "white",
              justifyContent: "flex-end",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Estimated Time: {time}</Text>
            <Text style={{ fontWeight: "bold" }}>
              Estimated Distance: {distance}
            </Text>
          </View>
          {this.renderMarkers()}
          <MapView.Polyline
            strokeWidth={2}
            strokeColor="red"
            coordinates={coords}
          />
          <Image
            source={{ uri: destination && destination.image_url }}
            style={{
              flex: 1,
              width: width * 0.95,
              alignSelf: "center",
              height: height * 0.35,
              position: "absolute",
              bottom: height * 0.05,
            }}
          />
        </MapView>
      );
    }
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>We need your permission!</Text>
      </View>
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
