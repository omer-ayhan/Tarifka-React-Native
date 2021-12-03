import { Dimensions, StyleSheet } from "react-native";
const deviceSize = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    height: deviceSize.height / 3,
    flex: 1,
  },
  title: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: 8,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "#fff",
    fontSize: 33,
    fontWeight: "bold",
    textAlign: "right",
  },
});

export default styles;
