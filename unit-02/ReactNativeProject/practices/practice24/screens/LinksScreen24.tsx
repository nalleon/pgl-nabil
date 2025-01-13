import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PrincipalStackParamList } from '../navigations/StackNavigation24';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type Props = NativeStackScreenProps<PrincipalStackParamList, 'LinksScreen'>;
const LinksScreen24 = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Link to other activities</Text>
            <Button 
                title="Calc" 
                onPress={() => props.navigation.navigate('CalcScreen')} 
            />
            <Button 
                title="To Do List" 
                onPress={() => props.navigation.navigate('ToDoScreen')} 
            />
            
        </View>
    )
}

export default LinksScreen24

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
        },
        title: {
            fontSize: 20,
            marginBottom: 20,
        },
})