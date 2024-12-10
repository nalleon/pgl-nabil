import { Alert, Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

type Props = {}

const Practice12Screen = (props: Props) => {

    const [currentBgColor, setCurrentBgColor] = useState<string>('red')
    const colors = ['red', 'green', 'yellow', 'blue'];

    function showAlert() {
        Alert.alert(
            'Color change', 'Change background color to other',
            [
                {
                    text: `Current color: ${currentBgColor}`,
                    onPress: () => console.log('keep current color'),
                },
                {
                    text: 'Change to other',
                    onPress: () => changeBackgroundColor(),
                }

            ]
        );
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

export default Practice12Screen

const styles = StyleSheet.create({


})