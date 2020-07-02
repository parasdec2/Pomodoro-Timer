import { StyleSheet } from "react-native";

export const stylesTimer = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
  },
  title: {
    flexDirection: "column",
    flex: 0.1,
  },

  footer: {
    // backgroundColor: "#505050",
    backgroundColor: "gray",
    fontSize: 24,
    flex: 0.15,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
});

export const stylesTitle = StyleSheet.create({
  // container: {
  //   backgroundColor: "grey",
  //   flexDirection: "row",
  //   flex: 0.15,
  //   justifyContent: "flex-start",
  //   alignItems: "center",
  //   paddingTop: 10,
  // },
  input: {
    // backgroundColor: "grey",
    color: "white",
    flex: 0.15,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 0.5,
    marginHorizontal: 10,
    marginTop: 5,
  },
});

export const stylesHeading = StyleSheet.create({
  container: {
    // backgroundColor: "#9598D3",
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "white",
    fontSize: 48,
    fontWeight: "bold",
  },
  timer: {
    color: "white",
    textAlign: "center",
    fontSize: 48,
    fontWeight: "bold",
  },
});

export const stylesButtons = StyleSheet.create({
  button: {
    // backgroundColor: "#808080",
    flex: 0.25,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export const stylesInputContainer = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 0.3,
  },
  text: {
    // backgroundColor: "#505050",
    flex: 0.3,
    flexDirection: "column",
    textAlign: "center",
    textAlignVertical: "bottom",
    fontSize: 32,
    color: "white",
  },
});

export const stylesInput = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  text: {
    flex: 0.3,
    textAlign: "center",
    fontSize: 12,
    marginBottom: 2,
    color: "darkgray",
  },
  input: {
    color: "white",
    flex: 0.7,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gray",
    borderWidth: 0.5,
    marginHorizontal: 10,
    marginBottom: 5,
  },
});

export const stylesCompletedTask = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignContent: "space-around",
    borderColor: "white",
    borderWidth: 1,
  },
  completedText: {
    fontSize: 16,
    color: "#fff",
    marginHorizontal: 5,
  },
  uncompletedText: {
    flex: 1,
    color: "white",
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
