import React from "react";
import { View, StyleSheet } from "react-native";
import Timer from "./components/Timer";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#9598D3",
    backgroundColor: "gray",
    paddingTop: Constants.statusBarHeight,
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Timer />
      </View>
    );
  }
}
