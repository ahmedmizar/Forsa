import { TouchableOpacity, View } from "react-native";
import styles from "./sectionHeader.styles";
import { SText } from "components/index";

interface IProps {
  title: string;
  rightText: string;
  rightTextAction?: () => void;
  marginBottom?: number;
  marginTop?: number;
}
const SectionHeader: React.FC<IProps> = ({
  title,
  rightText,
  rightTextAction,
  marginBottom,
  marginTop,
}) => {
  return (
    <View
      // style={
      //   marginBottom
      //     ? { ...styles.headerContainer, marginBottom }
      //     : styles.headerContainer
      // }
      style={[
        styles.headerContainer,
        marginBottom && { marginBottom: marginBottom },
        marginTop && { marginTop: marginTop },
      ]}
    >
      <SText text={title} preset={"body"} type="semibold" />
      <TouchableOpacity onPress={rightTextAction}>
        <SText text={rightText} preset={"caption"} />
      </TouchableOpacity>
    </View>
  );
};
export default SectionHeader;
