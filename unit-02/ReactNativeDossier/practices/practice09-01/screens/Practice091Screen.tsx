import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../themes/Practice091Styles'
import ButtonContainer from '../components/ButtonContainer'

type Props = {}

/**
 *  Type definition for the flex directions values (justifycontent)
 */

type storeImg = {
  name : string;
  location: any;
}

const Practice091Screen = (props: Props) => {

  /**
   * UseStates
   */
  const [rndIndex, setRndIndex] = useState(0)

  const storedImages: storeImg[] = [
    {name: 'img1', location: require('../assets/img1.png')},
    {name: 'img2', location: require('../assets/img2.png')},
    {name: 'img3', location: require('../assets/img3.png')},
    {name: 'img4', location: require('../assets/img4.png')},

  ]


  function getRequire(index: number){
    const obtained = storedImages[index];

      if(obtained){
        return obtained.location;
      } else {
        return "";
      }  
  }



  return (
    <View style={styles.mainContainer}>
      <Button title='Change to rnd Image' onPress={() => 
                setRndIndex(Math.trunc(Math.random() * storedImages.length))}/>
      <Image source={
            getRequire(rndIndex)
            }
            style={{ minWidth: 50, height: 50, width: 'auto'}}
             alt='not found'/>
    </View>
  )
}

export default Practice091Screen

