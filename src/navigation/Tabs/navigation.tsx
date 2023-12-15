import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text, View } from "react-native";
import Home from "screens/Home";
import Offers from "screens/Offers";
import Profile from "screens/Profile";
import Retail from "screens/Retail";
import tag from "src/assets/icons/tag.png";
import headerBK from "src/assets/icons/headerBK.png";


// import FeedBack from "../../assets/svg/feedback.svg";

const Tab = createBottomTabNavigator();

const getEnhancedHeader = (props) => {
  console.log('dddd', props)
  const { options, navigation, route } = props;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : route.routeName;
  const { leftElement } = options;
  const { onLeftElementClick } = options;
  const { rightElement } = options;
  const { onRightElementClick } = options;
  const { rightTestId } = options;
  const { rightAccessibilityLabel } = options;
  const { hasHeaderActionMenu } = options;
  const { hasPendingActions } = options;
  const { actionMenuNavigation } = options;
  const { headerChild } = options;
  const { showDrawerToggle } = options;
  const { pendingActionsCounter } = options;
  const { style } = options;
  return (
    <>
    <View style={{backgroundColor:'red'}} {...props}>
      <Text style={{marginTop:100}}>
        xcxcxcdasdasdasdasdasdasdad
        asd
        asd
        asd
        asd
        asasd
        asd
      </Text>
      
      <Image
          // style={styles.tinyLogo}
          tintColor={'blue'}
          source={headerBK}
        />
    </View>
    </>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        headerTransparent: true,
        header: getEnhancedHeader,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          sayed:'asas,',
          hasSeachIcon: true,
          tabBarIcon: ({ color, size }) =>  
          <Image
          // style={styles.tinyLogo}
          tintColor={'blue'}
          source={tag}
        />,
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
