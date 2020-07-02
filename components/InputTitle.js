import React from "react";
import { Text, View, TextInput } from "react-native";
import { stylesTitle } from "./styles";

const styles = stylesTitle;

export default InputTitle = (props) => (
  <TextInput
    style={styles.input}
    onChangeText={(text) => props.onChangeTitle(text)}
    value={props.default}
  />
);
