import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigations/stack/AuthStackNav';
import { styles } from './InitScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatList } from 'react-native-gesture-handler';

type Props = {}

type AuthProps = NativeStackScreenProps<AuthStackParamList, 'LocalHomeScreen'>;


type GameData = {
  id: number,
  date : string,
}

const LocalHomeScreen = (props: AuthProps) => {
  const [data, setData] = useState<GameData[]>([]);

  useEffect(() => {
    fetchData();
  }, [data])

  const fetchData = async () => {
  
  }

  return (
    <View style={styles.container}>
      <Icon name={'game-controller'} color={'#008080'} size={100} style={{marginTop:20, borderColor: '#008080', borderWidth:3, borderRadius: 100, padding:5}}/>
      <Text style={styles.title}>GAMES</Text>


      <FlatList
        data={data}
        renderItem={({ item }) => (
            <TouchableOpacity style={styles.flatListElement}>
                <Text style={styles.flatListElementText}>{item.date} </Text>
            </TouchableOpacity>
        )}
        keyExtractor={(item, index) => item.date + "_" + item.id + "_" + index}
        style={{marginTop:20}}
      />

      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('InitScreen')}>
          <Text style={styles.buttonText}>Create a new game</Text>
      </TouchableOpacity>

      <View style={{justifyContent:'flex-end', flex:2}}>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('InitScreen')}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LocalHomeScreen

