import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../themes/Practice10Style';

type Props = {
    btnValue: string;
    bgColor: string;
    textColor: string;
    width: number;
    modifyParent: (selected: string) => void;
}



const Button10 = (props: Props) => {
    const { btnValue: value, bgColor, textColor, width, modifyParent } = props;


    function handlePress(btnValue: string) {
        modifyParent(btnValue);
    }

    return (
        <View>
            <TouchableOpacity onPress={() => handlePress(value)}>
                <Text style={{
                    ...styles.btn, backgroundColor: bgColor, color: textColor,
                    width: width
                }}>
                    {value}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button10