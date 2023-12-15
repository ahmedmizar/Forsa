import { Image, ImageBackground, Text, View } from "react-native";
import styles from "./header.styles";
import headerBK from "src/assets/icons/headerBK.png";

const GetEnhancedHeader = (props) => {
  //   console.log("hhhd", props);
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
  const { backGroundSrc } = options;

  console.log(backGroundSrc, "options");
  return (
    <>
      <View style={{ backgroundColor: "red", flex: 1, height: 300 }} {...props}>
        ss
        <ImageBackground style={styles.imageContainer} source={headerBK} />
      </View>
    </>
  );
};
export default GetEnhancedHeader;
