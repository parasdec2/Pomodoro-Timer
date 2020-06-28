import React from "react";
import { Text, View } from "react-native";
import Input from "./input";
import { stylesInputContainer } from "./styles";

const styles = stylesInputContainer;

export default InputContainer = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.title}</Text>
    <Input title={"Minutes"} time={props.min} onChange={props.onChangeMin} />
    <View style={{ flex: 0.05 }}></View>
    <Input title={"Seconds"} time={props.sec} onChange={props.onChangeSec} />
  </View>
);
