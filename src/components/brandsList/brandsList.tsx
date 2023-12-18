import BrandCard from "components/brandCard/brandCard";
import React from "react";
import { FlatList } from "react-native";
interface IProps {
  data: [];
}
const BrandsList: React.FC<IProps> = ({ data }) => {
  return (
    <>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={({ item, index }) => {
          return (
            <>
              <BrandCard
                brandUrl={item.thumbnail}
                marginStart={index === 0 && 0}
              />
            </>
          );
        }}
      />
    </>
  );
};

export default BrandsList;
