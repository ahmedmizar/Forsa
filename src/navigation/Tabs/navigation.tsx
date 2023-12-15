import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "screens/Home";
import Offers from "screens/Offers";
import Profile from "screens/Profile";
import Retail from "screens/Retail";

// import FeedBack from "../../assets/svg/feedback.svg";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => <></>,
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
