/* eslint-disable no-param-reassign */
import React from 'react';
import { Platform, View, TouchableHighlight, Image } from 'react-native';
import styles from './SIcon.style';

function SIcon({
  url,
  width,
  height,
  onPress,
  style,
  tintColor,
  keyId,
  resizeMode = 'contain',
  imageStyle,
}) {

  return (
    <View>
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor="transparent"
        disabled={onPress === null}
        onPress={onPress}
        style={style}
        key={keyId}
      >
        <Image
          source={url}
          style={[{ width, height, tintColor }, imageStyle]}
          resizeMode={resizeMode}
          tintColor={tintColor}
        />
      </TouchableHighlight>
    </View>
  );
}

export default SIcon;
