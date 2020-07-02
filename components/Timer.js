import React from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingViewComponent,
  KeyboardAvoidingView,
} from "react-native";
import { vibrate } from "../utils/vibrate";
import Heading from "./heading";
import Buttons from "./buttons";
import InputContainer from "./inputContainer";
import { stylesTimer } from "./styles";
import InputTitle from "./inputTitle";
import CompletedTask from "./completedTask";

const styles = stylesTimer;

export default class Timer extends React.Component {
  state = {
    minWork: 25,
    secWork: 0,
    minRest: 5,
    secRest: 0,
    ominWork: 25,
    osecWork: 0,
    ominRest: 5,
    osecRest: 0,
    work: true,
    rest: false,
    start: false,
    title: "Your Work timer",
    completed: [],
  };

  componentDidMount() {
    this.interval = setInterval(this.dec, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  dec = () => {
    if (this.state.work && this.state.start) {
      if (this.state.secWork === 1 && this.state.minWork === 0) {
        vibrate();
        // TODO: Add a function to print the finished work with its name

        this.setState(() => ({
          secRest: this.state.osecRest + 1,
          minRest: this.state.ominRest,
          work: false,
          rest: true,
        }));
        this.setState((prevState) =>
          prevState.completed.push({
            title: this.state.title,
            min: this.state.ominWork,
            sec: this.state.osecWork,
          })
        );
        // console.log("TITLE NEW 2 : ", this.state.completed);
      }
      if (this.state.secWork === 0 && this.state.minWork !== 0) {
        this.setState((prevState) => ({ minWork: prevState.minWork - 1 }));
        this.setState(() => ({ secWork: 60 }));
      }
      if (this.state.secWork > 0) {
        this.setState((prevState) => ({ secWork: prevState.secWork - 1 }));
      }
    }
    if (this.state.rest && this.state.start) {
      if (this.state.secRest === 1 && this.state.minRest === 0) {
        vibrate();

        this.setState(() => ({
          secWork: this.state.osecWork,
          minWork: this.state.ominWork,
          work: true,
          rest: false,
        }));
      }
      if (this.state.secRest === 0 && this.state.minRest > 0) {
        this.setState((prevState) => ({ minRest: prevState.minRest - 1 }));
        this.setState(() => ({ secRest: 60 }));
      }
      if (this.state.secRest > 0) {
        this.setState((prevState) => ({ secRest: prevState.secRest - 1 }));
      }
    }
  };

  startPause = () => {
    this.setState((prevState) => ({ start: !prevState.start }));
  };

  reset = () => {
    this.setState({
      minWork: this.state.ominWork,
      secWork: this.state.osecWork,
      minRest: this.state.ominRest,
      secRest: this.state.osecRest,
      start: false,
    });
  };

  onChangeTitle = (text) => {
    this.setState({ title: text });
  };

  onChangeMinWork = (text) => {
    this.setState({ minWork: text, ominWork: text, start: false });
  };

  onChangeSecWork = (text) => {
    this.setState({
      secWork: text,
      osecWork: text,
      start: false,
    });
  };

  onChangeMinRest = (text) => {
    this.setState({
      minRest: text,
      ominRest: text,
      start: false,
    });
  };

  onChangeSecRest = (text) => {
    this.setState({
      secRest: text,
      osecRest: text,
      start: false,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <InputTitle
          title={"Title"}
          default={this.state.title}
          onChangeTitle={this.onChangeTitle}
        />

        {this.state.work ? (
          <Heading
            timer={"WORK"}
            min={this.state.minWork}
            sec={this.state.secWork}
          />
        ) : (
          <Heading
            timer={"REST"}
            min={this.state.minRest}
            sec={this.state.secRest}
          />
        )}

        <Buttons
          start={this.state.start}
          startPause={this.startPause}
          reset={this.reset}
        />

        <CompletedTask completedTaskArray={this.state.completed} />

        <InputContainer
          title={"Work"}
          min={this.state.ominWork}
          sec={this.state.osecWork}
          onChangeMin={this.onChangeMinWork}
          onChangeSec={this.onChangeSecWork}
        />
        <InputContainer
          title={"Rest"}
          min={this.state.ominRest}
          sec={this.state.osecRest}
          onChangeMin={this.onChangeMinRest}
          onChangeSec={this.onChangeSecRest}
        />

        <Text style={styles.footer}>POMODORO TIMER</Text>
      </View>
    );
  }
}
