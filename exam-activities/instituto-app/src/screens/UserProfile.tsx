import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios, { spread } from 'axios';
import { FlatList } from 'react-native-gesture-handler';

import Icon  from 'react-native-vector-icons/Ionicons';

type Props = {}

type UserData = {
    name : string,
    email : string
}
const UserProfile = (props: Props) => {
    /**
     * UseStates
     */
    const [data, setData] = useState<UserData>({} as UserData);
    const uri = "http://172.16.0.110/instituto/api/"

    //TODO: add database search 

    useEffect(() => {
        /**const fetchData = async () => {
            const response = await axios.get(uri);
            let userData = response.data as UserData;
            setData(userData);
          }

        fetchData();
        */
       setData({
        name: "example",
        email: "example@email.com"
       });
    }, [data])
    

  return (
    <View>
        
        <Text>
            { data.name }
            ---
            { data.email}
        </Text>
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({})