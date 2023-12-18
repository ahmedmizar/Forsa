import React from "react";
import { ImageBackground } from "react-native";
import styles from "./brandCard.style";
interface IProps {
  brandUrl: "string";
  marginStart?: number;
}

const BrandCard: React.FC<IProps> = ({ brandUrl, marginStart }) => {
  return (
    <>
      <ImageBackground
        source={{ uri: brandUrl }}
        style={
          marginStart === 0
            ? { ...styles.imageStyle, marginStart: marginStart }
            : styles.imageStyle
        }
      />
    </>
  );
};

export default BrandCard;
