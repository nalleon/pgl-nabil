import { Alert, Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import prompt from 'react-native-prompt-android'

type Props = {}

const Practice13Screen = (props: Props) => {

    const [currentBgColor, setCurrentBgColor] = useState<string>('red')
    const colors = ['red', 'green', 'yellow', 'blue'];

    function showAlert() {
        prompt(
            'Change background color to other',
            'Select a color by name',
            [
                {text: 'Cancel'},
                {text: 'OK', onPress: () => changeBackgroundColor()},
            ]
        )

        
    
    }

    function changeBackgroundColor(): void {
        
        let aux = currentBgColor;
        
        while(aux === currentBgColor){
            let rndPos = Math.trunc(Math.random() * colors.length);
            aux = colors[rndPos];
        }


        setCurrentBgColor(aux);
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1, backgroundColor:currentBgColor}}>
                <Button title='Change background color'onPress={showAlert}/>
            </View>
        </SafeAreaView>
    )
}

export default Practice13Screen

const styles = StyleSheet.create({


})