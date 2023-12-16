import React from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './topBarList.style';
import { SIcon, SText } from 'components/index';
import { icons } from 'src/utils/icons';
function topBarList({
    list,
    selectedIndex,
    contentContainerStyle,
    scrollEnabled = true,
    onPress,
}) {
    return (
        <View style={{ alignItems: 'flex-start', backgroundColor: 'red', }}>
            <FlatList
                horizontal
                // style={{ flex: 1 }}
                scrollEnabled={scrollEnabled}
                // contentContainerStyle={{ flex: 1 }}
                showsHorizontalScrollIndicator={false}
                data={list}
                renderItem={({ Item, index }) =>
                (
                    <TouchableOpacity style={[styles.container, index == selectedIndex && styles.selectedContainer]} onPress={() => onPress(Item, index)}>
                        <SText text={'Item'} preset={'footnote'} color={index == selectedIndex ? '#FFFFFF' : '#072040'} />
                    </TouchableOpacity>
                )
                }
            />
        </View>
    );
}


export default topBarList;
