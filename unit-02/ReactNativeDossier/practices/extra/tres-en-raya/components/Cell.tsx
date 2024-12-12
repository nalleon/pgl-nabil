import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

type Props = {
    id: number;
    value : valueType;
    positionX : number;
    positionY : number;
    touched : boolean;
    modifyCell : (posX : number, posY : number) => void
}

type CellType = {
    id: number;
    value : valueType;
    positionX : number;
    positionY : number;
    touched : boolean;
}

type valueType = 'x' | 'o' | ' ';

const Cell = (props: Props) => {
    
    function handleOnPress(posX : number, posY : number){
        props.modifyCell(posX, posY);
    }

    return (

        <View>
            <TouchableOpacity onPress={() => handleOnPress(props.positionX, props.positionY)}>
                <Text style={props.value === 'x' ? styles.xcell : styles.ocell}> {props.value}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Cell

const styles = StyleSheet.create({
    
    cell:{
        backgroundColor:'lightgrey',
        minWidth:75,
        minHeight:75,
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