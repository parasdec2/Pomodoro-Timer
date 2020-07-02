import React from "react";
import { Text, View } from "react-native";
import InputTime from "./inputTime";
import { stylesInputContainer } from "./styles";

const styles = stylesInputContainer;

export default InputContainer = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.title}</Text>
    <InputTime
      title={"Minutes"}
      time={props.min}
      onChange={props.onChangeMin}
    />
    <InputTime
      title={"Seconds"}
      time={props.sec}
      onChange={props.onChangeSec}
    />
  </View>
);
