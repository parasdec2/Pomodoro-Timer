import React from "react";
import { Text, View } from "react-native";
import { stylesHeading } from "./styles";

const styles = stylesHeading;

export default Display = (props) => (
  <Text style={styles.timer}>
    {props.timer} TIMER{"\n"}
    {props.min} : {props.sec}
  </Text>
);
