import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../themes/Practice06Styles';
import Box05 from './Box06';

const BoxContainer06 = () => {
    const colors = ["red", "lightblue", "lightgreen"];

    return (
    <View style={styles.container}>
        {
            colors.map((colorItem, index) => (
                <Box05 key={index} color={colorItem}/>
            ))
        }  
    </View>
    )
}

export default BoxContainer06