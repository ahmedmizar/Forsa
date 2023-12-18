import LottieView from "lottie-react-native";
import { View } from "react-native";
import React from "react";
import styles from "./apploader.style";

const Apploader = () => {
  return (
    <View style={styles.loading}>
      <LottieView
        source={require("../../assets/lottie/loader.json")}
        autoPlay
        loop
        style={styles.loader}
      />
    </View>
  );
};

export default Apploader;
