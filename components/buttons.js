import React from "react";
import { Button, View } from "react-native";
import { stylesButtons } from "./styles";

const styles = stylesButtons;

export default Buttons = (props) => (
  <View style={styles.button}>
    {props.start ? (
      <Button title={props.title} onPress={props.startPause} />
    ) : (
      <Button title="Start" onPress={props.startPause} />
    )}
    <Button title="Reset" onPress={props.reset} />
  </View>
);
