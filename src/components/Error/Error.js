import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import AnimatedLottieView from "lottie-react-native";

export default function Error({ message }) {
  return (
    <View>
      <AnimatedLottieView
        style={styles.error}
        source={require("../../assets/error.json")}
        autoPlay
        loop
      />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}
const deviceSize = Dimensions.get("window");
const styles = StyleSheet.create({
  error: {
    width: deviceSize.width / 2,
    height: deviceSize.height / 2,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
});
