import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../themes/Practice07Styles';
import Box05 from './Box07';

type BoxData= {
    nameBox: string;
    stylesBox: any;
}
const BoxContainer07 = () => {
    const names = ["Box A", "Box B", "Box C"];
    const colors = ["red", "lightblue", "lightgreen"];

    const arrData : BoxData[] = [
        {
            nameBox: names[0],
            stylesBox: { 
                flex: 0,
                backgroundColor: colors[0],
                padding: 10,
                margin: 5,
                justifyContent: 'center',
                alignItems: 'center'
            }
        }, 
        {
            nameBox: names[1],
            stylesBox: { flex: 0,
                backgroundColor: colors[1],
                padding: 10,
                margin: 5,
                justifyContent: 'center',
                alignItems: 'center'
            }
        },
        {
            nameBox: names[2],
            stylesBox: { flex: 0,
                backgroundColor: colors[2],
                padding: 10,
                margin: 5,
                justifyContent: 'center',
                alignItems: 'center'
            }
        },
    ]
    

    return (
    <View style={styles.container}>
        {
        
            arrData.map((box, index) =>(
                <Box05 key={index} stylesBox={box.stylesBox} nameBox={box.nameBox} />

            ))

        }  
    </View>
    )
}

export default BoxContainer07