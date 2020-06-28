import React from "react";
import { Text, View } from "react-native";
import { stylesHeading } from "./styles";

const styles = stylesHeading;

export default Display = (props) => (
  <View style={styles.container}>
    {props.work ? (
      <View>
        <Text style={styles.heading}>WORK TIMER</Text>
        <Text style={styles.timer}>
          {props.minWork} : {props.secWork}
        </Text>
      </View>
    ) : (
      <View>
        <Text style={styles.heading}>REST TIMER</Text>
        <Text style={styles.timer}>
          {props.minRest} : {props.secRest}
        </Text>
      </View>
    )}
  </View>
);
