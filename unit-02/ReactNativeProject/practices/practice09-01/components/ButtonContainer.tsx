import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

type Props = {
    modifySecondaryAlignment : Function;
}


const ButtonContainer = (props: Props) => {
    const { modifySecondaryAlignment } = props;

    return (
        <View style={{display:"flex", flexDirection:'row', alignItems:"flex-start", flexWrap:"wrap", gap:'15'}}>
            <Button title='STRETCH' onPress={()=> modifySecondaryAlignment("strecth")}/>
            <Button title='CENTER' onPress={()=> modifySecondaryAlignment("center")}/>
            <Button title='FLEX-START' onPress={()=> modifySecondaryAlignment("flex-start")}/>
            <Button title='FLEX-END' onPress={()=> modifySecondaryAlignment("flex-end")}/>
        </View>
    )
}

export default ButtonContainer
