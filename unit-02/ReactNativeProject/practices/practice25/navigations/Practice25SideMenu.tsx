import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerNavigationProp } from '@react-navigation/drawer'
import { ParamListBase } from '@react-navigation/native'
//import { Icon } from 'react-native-vector-icons/Icon'
import HelloWorldScreen from '../screens/HelloWorldScreen'
import SecondScreen25 from '../screens/SecondScreen25'
import StackNavigation25 from './StackNavigation25'

type Props ={

}

const Drawer = createDrawerNavigator();


const Practice25SideMenu = (props :Props) => {
    const dimensions  = Dimensions.get("window");

    function customDrawer(props: DrawerContentComponentProps){
        return  (
            <DrawerContentScrollView {...props}>
                <View>
                    <Text>Pets</Text>
                </View>
                <DrawerItem label={"Home"} 
                    onPress={
                        () => props.navigation.navigate('Home')
                    }
                />
                <DrawerItem label={"Hello World!"} 
                    onPress={
                        () => props.navigation.navigate('HelloWorld')
                    }
                />
                <DrawerItem label={"Second Screen"} 
                    onPress={
                        () => props.navigation.navigate('SecondScreen')
                    }
                />
            </DrawerContentScrollView>
        )
    }

    return (
        <Drawer.Navigator 
            
            screenOptions={{
                drawerStyle:{
                    backgroundColor: "#008080",
                    width: 250,
                },
                drawerType: dimensions.width >= 768 ? "permanent" : "front",
            }}

            drawerContent={(props) => customDrawer(props)}>
            <Drawer.Screen name="HelloWorld" options={{title: 'Hello World!'}} component={HelloWorldScreen} />
            <Drawer.Screen name="SecondScreen"  options={{title: 'Second Screen'}} component={SecondScreen25} />
            <Drawer.Screen name="Home"  options={{title: 'Home'}} component={StackNavigation25} />
        </Drawer.Navigator>
    )
}

export default Practice25SideMenu

const styles = StyleSheet.create({})