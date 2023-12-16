import React from 'react';
import { Text } from 'react-native';
import styles from './SText.style';
import { getFontStyleObject } from 'src/utils/presets';

function SText({
  text,
  fontSize = null,
  color = '#000000',
  fontWeight = null,
  style,
  ellipsizeMode,
  numberOfLines,
  preset,
  type = 'Regular',
}) {


  return (
    <Text
      style={[
        {
          fontSize,
          color,
          fontWeight,
          ...getFontStyleObject(preset, type),
        },
        style,
      ]}
      ellipsizeMode={ellipsizeMode}
      numberOfLines={numberOfLines}>
      {text}
    </Text>
  );
}


export default SText;
