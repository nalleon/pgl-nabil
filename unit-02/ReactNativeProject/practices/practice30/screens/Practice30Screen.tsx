import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import {PERMISSIONS, PermissionStatus, check, request } from 'react-native-permissions'
import Geolocation from 'react-native-geolocation-service'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
type Props = {}


type Location = {
  latitude: number,
  longitude: number,
  timestamp: string,
}
const Practice30Screen = (props: Props) => {
  const [location, setLocation] = useState<Location>({} as Location);
  const [history, setHistory] = useState<Location[]>([]);
  

    /**
     * Async function to request the location permissions
     */
    const requestLocationPermission = async () => {
      let ps: PermissionStatus;
      ps = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
  
      if (ps === 'granted') {
          return true;
      } else{
        ps = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        return ps === 'granted';
      }
  };
  

    /**
     * Async function to save the current location to AsyncStorage
     */
    const saveLocation = async () => {
      const permission = await requestLocationPermission();
  
      if (!permission) {
        return;
      }

      Geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const timestamp = new Date().toISOString();
          const newLocation = { latitude, longitude, timestamp };

          try {

          const storedHistory = await AsyncStorage.getItem('location-history');
          const parsedHistory = storedHistory ? JSON.parse(storedHistory) : [];
          const updatedHistory = [...parsedHistory, newLocation];

          await AsyncStorage.setItem('location-history', JSON.stringify(updatedHistory));
          setLocation(newLocation);

          } catch (error) {
            console.error('Error saving location', error);
          }
        },
      );
    }

    /**
     * Async function to retrieve history of locations
     */
    const showHistory = async () => {
      const storedHistory = await AsyncStorage.getItem('location-history');
      const parsedHistory = storedHistory ? JSON.parse(storedHistory) : [];
      setHistory(parsedHistory);
    };
  
    return (
      <GestureHandlerRootView>
        <View style={{ flex: 1, padding: 20 }}>
          <Button title="Save location" onPress={saveLocation} />
          {location && (
            <Text>{`Location: Lat ${location.latitude}, Long ${location.longitude}, Timestamp: ${location.timestamp}`}</Text>
          )}
          <Button title="Show history" onPress={showHistory} />
          <ScrollView>
            {history.map((item, index) => (
              <Text key={index}>
                {`Lat: ${item.latitude}, Long: ${item.longitude}, Timestamp: ${item.timestamp}`}
              </Text>
            ))}
          </ScrollView>
      </View>
    </GestureHandlerRootView>
  )
}

export default Practice30Screen

const styles = StyleSheet.create({})