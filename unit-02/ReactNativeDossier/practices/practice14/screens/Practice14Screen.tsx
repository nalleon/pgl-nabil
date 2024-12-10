import { Alert, Button, SafeAreaView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import prompt from 'react-native-prompt-android'

type Props = {}

const Practice14Screen = (props: Props) => {

    const [currentBgColor, setCurrentBgColor] = useState<string>('blue')
    const colors = ['red', 'green', 'yellow', 'blue'];

    const [active, setActive] = useState<boolean>(false);


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
            <View style={
                    {   
                        flex:1, backgroundColor:'white', alignItems:'center', 
                        justifyContent:'center',
                    }
                }

            >
            <Switch
                trackColor={{false:'brown', true:'red'}}
                onValueChange={()=> setActive(!active)}
                value={active}
            />
            </View>
        </SafeAreaView>
    )
}

export default Practice14Screen

const styles = StyleSheet.create({
    activeBorder: {
        borderWidth: 5,
        borderColor: 'red',
        borderRadius: 10,
    },

    inactiveBorder: {
        borderWidth: 5,
        borderColor: 'red',
        borderRadius: 10,
    }

})