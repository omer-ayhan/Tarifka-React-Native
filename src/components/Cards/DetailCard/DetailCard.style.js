import { Dimensions, StyleSheet } from "react-native";
const deviceSize = Dimensions.get("window");
const styles = StyleSheet.create({
  image: {
    height: deviceSize.height / 3,
  },
  inner_container: {
    padding: 7,
  },
  title: {
    fontSize: 31,
    color: "#b71c1c",
    fontWeight: "bold",
  },
  area: {
    fontSize: 23,
    color: "#b71c1c",
    fontWeight: "500",
  },
  instructions: {
    fontSize: 15,
    color: "#000",
    padding: 7,
  },
  divider: {
    marginVertical: 7,
    borderWidth: 1,
    borderColor: "#d3d3d3",
  },
});

export default styles;
