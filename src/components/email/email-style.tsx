import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  viewEmail: {
    backgroundColor: "#fff",
    width: "100%",
    height: "65%",
    position: "absolute",
    bottom: 0,
    borderRadius: 25,
  },
  titleList: {
    display: "flex",
    textAlign: "center",
    marginTop: 20,
    fontWeight: "600",
    fontSize: 20,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    marginTop: 20,
    marginHorizontal: 30,
  },
  listEmail: {
    display: "flex",
    flexDirection: "row",
    columnGap: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#D4D4D4",
  },
  textList: {
    color: "#000",
  },
});
