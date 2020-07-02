import React from "react";
import { Text, TextInput, View } from "react-native";
import { stylesInput } from "./styles";

const styles = stylesInput;

export default class InputTime extends React.Component {
  handleInput = (num) => {
    if (+num >= 0 && +num <= 60) {
      // console.log(+num);
      this.props.onChange(Number(num));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
        <TextInput
          style={styles.input}
          defaultValue={this.props.time.toString()}
          onChangeText={this.handleInput}
          value={this.props.time}
          keyboardType={"numeric"}
        />
      </View>
    );
  }
}
