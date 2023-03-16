import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  containerModal: {
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    top: -20,
  },
  iconClose: {
    position: "absolute",
    top: 15,
    right: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textInput: {
    width: 250,
    height: 30,
    margin: 12,
    borderWidth: 1,
    borderColor: "#D4D4D4",
    padding: 1,
  },
  textMessage: {
    width: 250,
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderColor: "#D4D4D4",
    padding: 1,
  },
  buttonModal: {
    backgroundColor: "#040617",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
  },
  textButtonModal: {
    color: "#fff",
  },
});
