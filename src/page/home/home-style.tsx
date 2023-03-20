import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  globalView: {
    backgroundColor: "#040617",
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
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
