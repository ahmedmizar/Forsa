import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import headerBK from "src/assets/icons/headerBK.png";

const Home = () => {
  const navigation = useNavigation();
  navigation.setOptions({
    backGroundSrc: headerBK,
  });
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;
