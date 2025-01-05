import { Button, StyleSheet, Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/Ionicons';

type PrincipalStackParamList = {
    Home: undefined,
    Profile: undefined,
    Extra: {message: string, icon: string},
}

type PropsProfile = NativeStackScreenProps<PrincipalStackParamList, 'Profile'>;


const ProfileScreen = (props: PropsProfile) => {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>ProfileScreen</Text>
            <Button title="Go to Home" 
                onPress={() => props.navigation.navigate('Home')}/>
            <Button title="Go to Extra" 
                onPress={() => props.navigation.navigate('Extra', {message: "Greetings from Profile", icon: "person"})}/>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})