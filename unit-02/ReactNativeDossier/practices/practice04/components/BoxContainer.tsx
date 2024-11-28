import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../themes/Practice04Styles';
import Box from './Box';

    const BoxContainer = () => {
        const colors = ["red", "lightblue", "lightgreen"];
    
        return (
        <View style={styles.container}>
            {
                colors.map((colorItem, index) => (
                <Box key={index} color={colorItem}/>

                ))
            }  
        </View>
        )
    }
    
export default BoxContainer