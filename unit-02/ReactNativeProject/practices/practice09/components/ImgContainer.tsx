import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../themes/Practice09Styles'

type Props = {}

const ImgContainer = () => {
    return (
        <View style={{display:'flex', flexWrap:'nowrap', gap:10}}>
            <Image source={require('../assets/img2.png')} style={styles.img}/>
            <Image source={require('../assets/img2.png')} style={styles.img}/>
            <Image source={require('../assets/img3.png')} style={styles.img}/>
        </View>
    )
}
export default ImgContainer
