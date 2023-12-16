import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import {InfoCard, LatestOfferBox, SIcon, SText, TopBarList} from 'components/index';
import styles from './styles';
import { icons } from "src/utils/icons";
const Home = () => {

  const childComp = () => {
    return(
      <>
     <InfoCard/>
     <LatestOfferBox containerStyle={styles.LatestOfferBoxStyle}/>
     </>
    )
  }

  const navigation = useNavigation();
  navigation.setOptions({
    child: childComp(),

  });

  return (
    <View style={{ flex: 1,  paddingHorizontal:25 }}>
      <SIcon url={icons.multiRows} width={325} height={200} style={styles.multiArrowsStyle} />
      <View style={styles.stepCounterStyle}>
        <SText text={'Top brands in retail'} preset={'body'} type="semibold" />
        <TouchableOpacity>
        <SText text={'View all'}preset={'caption'}  />
        </TouchableOpacity>
      </View>
       <TopBarList list={['dssd', 's', 'dddd', 'dddd']} selectedIndex={0} onPress={(Item, index) => {alert(index)}}/>
    </View>
  );
};

export default Home;
