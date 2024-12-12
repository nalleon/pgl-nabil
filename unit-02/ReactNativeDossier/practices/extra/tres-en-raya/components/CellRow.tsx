import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    id: number;
    value : valueType;
    positionX : number;
    positionY : number;
    touched : boolean;
}

type CellType = {
    id: number;
    value : valueType;
    positionX : number;
    positionY : number;
    touched : boolean;
}

type valueType = 'x' | 'o' | ' ';

const CellRow = (props: Props) => {
    
    return (
        <View style={props.value === 'x' ? styles.xcell : styles.ocell}>
            <Text> {props.value}</Text>
        </View>
    )
}

export default CellRow

const styles = StyleSheet.create({
    
    cell:{
        backgroundColor:'lightgrey',
        minWidth:75,
        minHeight:75,
        maxWidth:75,
        maxHeight:75,
        color: 'red',
        borderColor: 'black',
        flex:1
    },

    xcell:{
        backgroundColor:'lightgrey',
        width:75,
        height:75,
        color: 'red',
        borderColor: 'black',
        borderWidth:3,
        flex:1
    },

    ocell:{
        backgroundColor:'lightgrey',
        width:75,
        height:75,
        color:'blue',
        borderColor: 'black',
        borderWidth:3,
        flex:1
    }
})