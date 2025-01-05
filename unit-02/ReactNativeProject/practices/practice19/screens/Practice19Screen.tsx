import { Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {}

const Practice19Screen = (props: Props) => {
    const [inputContent, setInputContent] = useState<string>("");
    const emojis : string[] = [':-(',':-)'];    

    function handlePress(value: string){
        
        let aux = inputContent;
        switch (value) {
            case 'happy':
                aux += " " + emojis[1];
                setInputContent(aux);
                return;
        
            case 'sad':
                aux += " " + emojis[0];
                setInputContent(aux);
                return;   
            default:
                return;
        }
    }

    return (
        <View style={{flex:1}}>
            <View style={{alignItems:'center', flexDirection:'row', justifyContent:'center'}}>
                <TouchableOpacity onPress={() => handlePress('happy')} style={{width:50}}>
                    <Icon name="happy-outline" size={50}></Icon>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('sad')} style={{width:50}}>
                    <Icon name="sad-outline" size={50}></Icon>
                </TouchableOpacity>
            </View>
            <TextInput placeholder='Insert any text' value={inputContent} onChangeText={(e) => setInputContent(e)}
                style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10}} 
            />
        </View>
    )
}

export default Practice19Screen

const styles = StyleSheet.create({})