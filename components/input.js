import React from "react";
import { Text, TextInput, View } from "react-native";
import { stylesInput } from "./styles";

const styles = stylesInput;

export default Input = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.title}</Text>
    <TextInput
      style={styles.input}
      defaultValue={props.time.toString()}
      onChangeText={(text) => props.onChange(text)}
      value={props.time}
      keyboardType={"numeric"}
    />
  </View>
);
