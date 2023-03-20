import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  alert: {
    position: "absolute",
    flex: -1,
    top: 40,
    right: 15,
    display: "flex",
    flexDirection: "row-reverse",
    columnGap: 10,
  },
  alertText: {
    color: "white",
    marginTop: 5,
  },
});
