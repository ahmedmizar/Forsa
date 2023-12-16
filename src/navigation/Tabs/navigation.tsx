import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, Text, View } from "react-native";
import Home from "screens/Home";
import Offers from "screens/Offers";
import Profile from "screens/Profile";
import Retail from "screens/Retail";
import tag from "src/assets/icons/tag.png";
import GetEnhancedHeader from "src/components/header/header";

// import FeedBack from "../../assets/svg/feedback.svg";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator 
    screenOptions={{
      header: GetEnhancedHeader,
    }}
    >
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}


const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        headerShown: false
      }}
    >

      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          headerTransparent: true,
          // hasSeachIcon: true,
          tabBarIcon: ({ color, size }) => (
            <Image
              // style={styles.tinyLogo}
              tintColor={"blue"}
              source={tag}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Retail"
        component={Retail}
        options={{
          tabBarLabel: "Retail",
          tabBarIcon: ({ color, size }) => <></>,
        }}
      />
      <Tab.Screen
        name="Offers"
        component={Offers}
        options={{
          tabBarLabel: "Offers",
          tabBarIcon: ({ color, size }) => <></>,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => <></>,
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
