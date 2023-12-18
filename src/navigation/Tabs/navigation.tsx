import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "screens/Home";
import Offers from "screens/Offers";
import Profile from "screens/Profile";
import Retail from "screens/Retail";
import HomeIcon from "src/assets/svg/homeIcon.svg";
import ProfileIcon from "src/assets/svg/profile.svg";
import OffersIcon from "src/assets/svg/offers.svg";
import RetailIcon from "src/assets/svg/retail.svg";
import GetEnhancedHeader from "src/components/header/header";
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
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          headerTransparent: true,
          tabBarIcon: ({ color, size }) => <HomeIcon />,
        }}
      />

      <Tab.Screen
        name="Retail"
        component={Retail}
        options={{
          tabBarLabel: "Retail",
          tabBarIcon: ({ color, size }) => <RetailIcon />,
        }}
      />
      <Tab.Screen
        name="Offers"
        component={Offers}
        options={{
          tabBarLabel: "Offers",
          tabBarIcon: ({ color, size }) => <OffersIcon />,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => <ProfileIcon />,
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
