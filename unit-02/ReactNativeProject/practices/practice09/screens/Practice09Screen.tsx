import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../themes/Practice09Styles'
import ButtonContainer from '../components/ButtonContainer'
import ImgContainer from '../components/ImgContainer'

type Props = {}

/**
 *  Type definition for the flex directions values (justifycontent)
 */

type PrimaryAlignment = "space-around" | "space-between" | "space-evenly" |  "center" | "flex-start" | "flex-end";

/**
 *  Type definition for the secondary alignment values  (alignitems)
 */
type SecondaryAlignment = "stretch" | "center" | "flex-start" | "flex-end";

const Practice09Screen = (props: Props) => {

  /**
   * UseStates
   */
  const [primaryAlignment, setPrimaryAlignment] = useState<PrimaryAlignment>('space-around');
  const [secondaryAlignment, setSecondaryAlignment] = useState<SecondaryAlignment>('flex-end');

  function modifyPrimaryAlignment(primaryAlignment: string){
    switch(primaryAlignment.toLocaleLowerCase()){
      case "center":
        setPrimaryAlignment('center');
        return;
      case "flex-start":
        setPrimaryAlignment('flex-start');
        return;
      case "flex-end":
        setPrimaryAlignment('flex-end');
        return;
      case "space-around":
        setPrimaryAlignment('space-between');
      return;
      case "space-between":
        setPrimaryAlignment('space-around');
        return;
      case "space-evenly":
        setPrimaryAlignment('space-evenly');
        return;
    }
  }

  function modifySecondaryAlignment(secondaryAlignment: string){
    switch(secondaryAlignment){
      case "stretch":
        setSecondaryAlignment('stretch');
        return;
      case "center":
        setSecondaryAlignment('center');
        return;
      case "flex-start":
        setSecondaryAlignment('flex-start');
        return;
      case "flex-end":
        setSecondaryAlignment('flex-end');
        return;
    }
  }
  return (
    <View style={styles.mainContainer}>
        <TextInput style={styles.input} placeholder='Primary alignment' onChangeText={modifyPrimaryAlignment} />
      <View>
        <ButtonContainer modifySecondaryAlignment={modifySecondaryAlignment}/>
      </View>
      <View style={{...styles.container,
                      justifyContent: primaryAlignment,
                      alignItems: secondaryAlignment,
                    }}>
            <Image source={require('../assets/img1.png')} style={styles.img}/>
            <Image source={require('../assets/img2.png')} style={styles.img}/>
            <Image source={require('../assets/img3.png')} style={styles.img}/>
      </View>

    </View>
  )
}

export default Practice09Screen

