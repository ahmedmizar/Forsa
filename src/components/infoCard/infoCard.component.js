import React from 'react';
import { Text, View } from 'react-native';
import styles from './infoCard.style';
import { SIcon, SText } from 'components/index';
import { icons } from 'src/utils/icons';
function infoCard({
    icon = null,
    topTxt = null,
    bottomTxt = null,
    containerStyle = null,
}) {

    return (
        <View style={[styles.container, containerStyle]}>
            <SIcon url={icon || icons.writing} width={35} height={40} />
            <View style={styles.txtContainer}>
                <SText text={topTxt || 'Get your limit'} preset={'subhead'} color={'#FFC709'} type='semibold' />
                <SText text={bottomTxt || 'Complete your infoand get up to EGP 100,000'} preset={'caption'} color={'#FFC709'} />
            </View>
        </View>
    );
}


export default infoCard;
