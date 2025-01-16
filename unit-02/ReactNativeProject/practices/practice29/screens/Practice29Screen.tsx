import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {PERMISSIONS, PermissionStatus, check, request } from 'react-native-permissions'
import Geolocation from 'react-native-geolocation-service'
type Props = {}

const Practice29Screen = (props: Props) => {
const [message, setMessage] = useState<string>("");

    async function showPosition(){
        let ps: PermissionStatus;
        ps = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        if (ps != 'granted') {
            ps = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }
        if (ps == 'granted'){
            Geolocation.getCurrentPosition(info=> setMessage(JSON.stringify(info)));
        } else {
            setMessage("No se han obtenido los permisos");
        }
    }


    return (
        <View>
        <Text>TravelScreen</Text>
        <Button title="Permisos gps" onPress={showPosition}/>
            <Text>            {message}
¡</Text>
        </View>
    )
}

export default Practice29Screen

const styles = StyleSheet.create({})