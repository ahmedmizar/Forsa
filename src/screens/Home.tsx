import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import {
  InfoCard,
  LatestOfferBox,
  SectionHeader,
  SIcon,
  TopBarList,
} from "components/index";
import styles from "./styles";
import { icons } from "src/utils/icons";
import {
  useOrderDetailsQuery,
  useSectorsQuery,
} from "src/hooks/useSectorsHooks";
import { useState } from "react";

const Home = () => {
  const { data, isLoading } = useSectorsQuery();
  const [selectedSector, setSelectedSector] = useState(1);
  const { data: brands, isLoading: brandsLoading } =
    useOrderDetailsQuery(selectedSector);

  const childComp = () => {
    return (
      <>
        <InfoCard />
        <LatestOfferBox containerStyle={styles.LatestOfferBoxStyle} />
      </>
    );
  };

  const navigation = useNavigation();
  navigation.setOptions({
    child: childComp(),
  });
  console.log("brands", brands?.data?.results[2]?.title);

  return (
    <View style={{ flex: 1, paddingHorizontal: 25 }}>
      <SIcon
        url={icons.multiRows}
        width={325}
        height={200}
        style={styles.multiArrowsStyle}
      />

      <SectionHeader
        title="Top brands in retail"
        rightText="View all"
        marginBottom={10}
      />
      <TopBarList
        list={[]}
        selectedSector={selectedSector}
        onPress={(item) => {
          setSelectedSector(item.value);
        }}
      />
    </View>
  );
};

export default Home;
