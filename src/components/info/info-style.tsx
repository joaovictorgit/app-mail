import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  viewInfo: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    height: "20%",
    position: "absolute",
    top: 100,
  },
  title: {
    color: "#fff",
    position: "absolute",
    fontSize: 30,
    left: 20,
  },
  viewButtons: {
    display: "flex",
    flexDirection: "row",
    columnGap: 5,
    position: "absolute",
    top: 100,
    left: 10,
  },
  touchButton: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    padding: 10,
  },
  textButtons: {
    color: "#fff",
  },
});
