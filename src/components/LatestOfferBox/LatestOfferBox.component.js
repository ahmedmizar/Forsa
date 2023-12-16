import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './LatestOfferBox.style';
import { SIcon, SText } from 'components/index';
import { icons } from 'src/utils/icons';
function LatestOfferBox({
    containerStyle = null,
    header = null,
    icon = null,
}) {

    return (
        <View style={[styles.container, containerStyle]}>
            <ImageBackground source={icon || icons.adidas} style={styles.imageContainer}>
                <SIcon url={icons.adidasIcon} width={73} height={72} style={styles.icon} />
                <SText text={header || 'Check out latest offers'} preset={'subhead'} />
                <SIcon icons={icons.arrow} width={5} height={5} />
            </ImageBackground>
        </View>
    );
}


export default LatestOfferBox;
