import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

type PrincipalStackParamList = {
    FirstScreen: undefined,
    SecondScreen: undefined,
    ThirdScreen: {message : string, icon:string},
}

type PropsProfile = NativeStackScreenProps<PrincipalStackParamList, 'SecondScreen'>;


const SecondScreen21 = (props: PropsProfile) => {
    const [name, setName] = useState('');
    
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Second Screen</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <Button title="Go to first screen" 
                onPress={() => props.navigation.navigate('FirstScreen')}/>
            <Button title="Go to third screen" 
                onPress={() => props.navigation.navigate('ThirdScreen', {message: `Greetings ${name}!`, icon : "home"})}/>
        </View>
    )
}

export default SecondScreen21

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        width: '80%',
        paddingLeft: 10,
    },
})