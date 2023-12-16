import { ImageBackground, Text, View } from "react-native";
import styles from "./header.styles";
import {SIcon, SText} from '../index';
import { icons } from "src/utils/icons";

const GetEnhancedHeader = (props) => {
  const { options, navigation } = props;
  const { hasNotification = true, hasSeachIcon = true, hasHeart = true, title = 'hi', hasTitleIcon = false,  child, smallHeaderBk = false } = options;

  return (
      <View style={[styles.headerContainer, smallHeaderBk && {marginBottom:300} ]}>
        <ImageBackground  source={smallHeaderBk? icons.smallBkHeader : icons.headerBK} style={[styles.imageContainer, smallHeaderBk && {height: 200,}]}>
          <View style={styles.contentContainer}>
            <View style={styles.leftElementContainer}>
            {hasSeachIcon && <SIcon url={icons.heart} tintColor={'white'} width={26} height={23} />}
            </View>
            <View style={styles.titleContainer}>
            {hasTitleIcon?
            <SIcon url={icons.key} tintColor={'white'} width={36} height={63}  />:
            <SText text={title} preset={'h2'} color={'white'} />
            }
            </View>
            <View style={styles.rightContent}>
            {hasHeart && <SIcon url={icons.heart} tintColor={'white'} width={26} height={23}  />}
            {hasNotification && <SIcon url={icons.notification} tintColor={'white'} width={26} height={23} imageStyle={styles.icon} />}
            </View>
          </View>
          {child}
        </ImageBackground>
      </View>
  );
};
export default GetEnhancedHeader;
