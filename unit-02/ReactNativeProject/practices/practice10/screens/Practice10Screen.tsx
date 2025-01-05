import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Button10 from '../components/Button10'
import UseCalc from '../hooks/UseCalc'
import styles from '../themes/Practice10Style';

type Props = {

}

const Practice10Screen = (props: Props) => {
  const {result, history, auxHistory, modify} = UseCalc();
  
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'black'}}>
      <View style={{flex:1, flexDirection:'column-reverse'}}>
        <View style={{flex:1, flexDirection:'column-reverse', padding:10}}>

            <Text style={styles.text} adjustsFontSizeToFit={true} numberOfLines={1}> 
                {result} 
            </Text>
            <Text style={styles.historyText} adjustsFontSizeToFit={true} numberOfLines={1}> 
                  {auxHistory} 
            </Text>
        </View>
      </View>
      <View style={{flex:1}}>
        <View style={{flex:1, flexDirection:'row', columnGap:'1', margin:10}}>
          <Button10 btnValue={'AC'} bgColor='lightgrey' textColor='black' width={60} modifyParent={modify}/>
          <Button10 btnValue={'+/-'} bgColor='lightgrey' textColor='black' width={60} modifyParent={modify}/>
          <Button10 btnValue={'DL'} bgColor='lightgrey' textColor='black' width={60} modifyParent={modify}/>
          <Button10 btnValue={'/'} bgColor='orange' textColor='white' width={60} modifyParent={modify}/>
        </View>
        <View style={{flex:1, flexDirection:'row', columnGap:'1',  margin:10}}>
          <Button10 btnValue={'7'} bgColor='grey' textColor='white' width={60} modifyParent={modify}/>
          <Button10 btnValue={'8'} bgColor='grey' textColor='white' width={60} modifyParent={modify}/>
          <Button10 btnValue={'9'} bgColor='grey' textColor='white' width={60} modifyParent={modify}/>
          <Button10 btnValue={'x'} bgColor='orange' textColor='white' width={60} modifyParent={modify}/>
        </View>
        <View style={{flex:1, flexDirection:'row', columnGap:'1',  margin:10}}>
          <Button10 btnValue={'4'} bgColor='grey' textColor='white' width={60} modifyParent={modify}/>
          <Button10 btnValue={'5'} bgColor='grey' textColor='white' width={60} modifyParent={modify}/>
          <Button10 btnValue={'6'} bgColor='grey' textColor='white' width={60} modifyParent={modify}/>
          <Button10 btnValue={'-'} bgColor='orange' textColor='white' width={60} modifyParent={modify}/>
        </View>
        <View style={{flex:1, flexDirection:'row', columnGap:'1',  margin:10}}>
          <Button10 btnValue={'1'} bgColor='grey' textColor='white' width={60} modifyParent={modify}/>
          <Button10 btnValue={'2'} bgColor='grey' textColor='white' width={60} modifyParent={modify}/>
          <Button10 btnValue={'3'} bgColor='grey' textColor='white' width={60} modifyParent={modify}/>
          <Button10 btnValue={'+'} bgColor='orange' textColor='white' width={60} modifyParent={modify}/>
        </View>
        <View style={{flex:1, flexDirection:'row', columnGap:'1',  margin:10}}>
          <Button10 btnValue={'0'} bgColor='grey' textColor='white' width={150} modifyParent={modify}/>
          <Button10 btnValue={'.'} bgColor='grey' textColor='white' width={60} modifyParent={modify}/>
          <Button10 btnValue={'='} bgColor='orange' textColor='white' width={60} modifyParent={modify}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Practice10Screen

