import React from "react";
import { Text, View, ScrollView } from "react-native";
import { stylesCompletedTask } from "./styles";

const styles = stylesCompletedTask;

export default CompletedTask = (props) => {
  return (
    <ScrollView
      style={styles.container}
      persistentScrollbar={true}
      // indicatorStyle="white"
    >
      {props.completedTaskArray.length > 0 ? (
        <Text>
          {props.completedTaskArray.map((obj, key) => (
            <Text key={key} style={styles.completedText}>
              {key + 1}. You completed{" "}
              <Text style={{ fontWeight: "bold" }}>"{obj.title}"</Text> in{" "}
              {obj.min > 0 ? (
                <Text style={{ fontWeight: "bold" }}>
                  {obj.min} {obj.min > 1 ? "minutes" : "minute"}
                </Text>
              ) : (
                ""
              )}{" "}
              {obj.sec > 0 ? (
                <Text style={{ fontWeight: "bold" }}>
                  {obj.min > 1 ? "and" : ""} {obj.sec}{" "}
                  {obj.sec > 1 ? "seconds" : "second"}
                  {"\n"}
                </Text>
              ) : (
                `\n`
              )}
            </Text>
          ))}
        </Text>
      ) : (
        <Text style={styles.uncompletedText}>
          You've no completed tasks yet
        </Text>
      )}
    </ScrollView>
  );
};
