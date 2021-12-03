import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: "row",
    backgroundColor: "#eceff1",
    borderWidth: 1,
    borderColor: "#b0bec5",
    alignItems: "center",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#333",
    marginHorizontal: 10,
  },
});

export default styles;
