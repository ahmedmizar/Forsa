import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import { Apploader } from "..";

interface Props {
  visible: boolean;
}

const AppLoaderOverlay: React.FC<Props> = ({ visible }) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.loading}>
        <Apploader />
      </View>
    </Modal>
  );
};

export default AppLoaderOverlay;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
