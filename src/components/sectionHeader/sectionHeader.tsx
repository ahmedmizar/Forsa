import { TouchableOpacity, View } from "react-native";
import styles from "./sectionHeader.styles";
import { SText } from "components/index";

interface IProps {
  title: string;
  rightText: string;
  rightTextAction?: () => void;
  marginBottom?: number;
}
const SectionHeader: React.FC<IProps> = ({
  title,
  rightText,
  rightTextAction,
  marginBottom,
}) => {
  return (
    <View
      style={
        marginBottom
          ? { ...styles.headerContainer, marginBottom }
          : styles.headerContainer
      }
    >
      <SText text={title} preset={"body"} type="semibold" />
      <TouchableOpacity onPress={rightTextAction}>
        <SText text={rightText} preset={"caption"} />
      </TouchableOpacity>
    </View>
  );
};
export default SectionHeader;
