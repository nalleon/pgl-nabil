import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../themes/Practice08Styles';
import Box05 from './Box08';

type BoxData= {
    stylesBox: any;
}
const BoxContainer08 = () => {
    const names = ["Box A", "Box B", "Box C"];
    const colors = ["red", "lightblue", "lightgreen"];
    const [quantity, setQuantity] = useState(1);
    const [boxList, setBoxList] = useState<BoxData[]>([]);


    useEffect(() => {
    
        const firstBox : BoxData = {
            stylesBox: {
                borderRadius: 50,
                width: 100,
                height: 100,
                borderWidth: 3,
                borderColor: 'black'
            }
        }
        
        const auxList : BoxData[] = [];
        auxList.push(firstBox);

        setBoxList(auxList);

    }, [quantity])
    

    

    return (
    <View style={styles.container}>
        {
        
            boxList.map((box, index) =>(
                <Box05 key={index} nameBox={'B'+index} red={200} green={120} blue={140}/>
            ))

        }  
    </View>
    )
}

export default BoxContainer08