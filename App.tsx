import { StyleSheet } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "navigation/Tabs/navigation";

function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
