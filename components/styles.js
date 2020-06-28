import { StyleSheet } from "react-native";

export const stylesTimer = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const stylesHeading = StyleSheet.create({
  container: {
    // backgroundColor: "#9598D3",
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 48,
    marginBottom: 10,
    fontWeight: "bold",
  },
  timer: {
    textAlign: "center",
    fontSize: 48,
    fontWeight: "bold",
  },
});

export const stylesInput = StyleSheet.create({
  container: {
    flex: 0.3,
    // backgroundColor: "#505050",
    textAlign: "center",
  },
  text: {
    flex: 0.3,
    textAlign: "center",
    // backgroundColor: "#f0f0f0",
  },
  input: {
    flex: 0.7,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000000",
    borderWidth: 2,
  },
});

export const stylesInputContainer = StyleSheet.create({
  container: {
    // backgroundColor: "#808080",
    flexDirection: "row",
    flex: 0.15,
    marginVertical: 10,
  },
  text: {
    // backgroundColor: "#ffffff",
    flex: 0.3,
    flexDirection: "column",
    textAlign: "center",
    textAlignVertical: "bottom",
    fontSize: 32,
  },
});

export const stylesButtons = StyleSheet.create({
  button: {
    //   backgroundColor: "#808080",
    flex: 0.175,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
