import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { SText } from "..";
import styles from "./topBarList.style";

interface IProps {
  list: [];
  selectedSector: number;
  contentContainerStyle?: any;
  scrollEnabled: boolean;
  onPress: (item: any, index: number) => void;
}
const TopBarList: React.FC<IProps> = ({
  list,
  selectedSector,
  contentContainerStyle,
  scrollEnabled,
  onPress,
}) => {
  return (
    <View style={{ alignItems: "flex-start" }}>
      <FlatList
        horizontal
        scrollEnabled={scrollEnabled}
        showsHorizontalScrollIndicator={false}
        data={list}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={[
                styles.container,
                item.value == selectedSector && styles.selectedContainer,
              ]}
              onPress={() => onPress(item, index)}
            >
              <SText
                text={item.label}
                preset={"footnote"}
                color={item.value == selectedSector ? "#FFFFFF" : "#072040"}
              />
            </TouchableOpacity>
          );
        }}
        extraData={selectedSector}
        keyExtractor={(item) => item?.value}
      />
    </View>
  );
};

export default TopBarList;
