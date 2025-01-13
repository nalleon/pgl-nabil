import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const AboutScreen = (props: Props) => {
    return (
            <View style={styles.container}>
                <Text style={styles.title}>About me</Text>
                <Text style={styles.text}>Name: Nabil León Álvarez</Text>
                <Text style={styles.text}>Class: 2DAM</Text>
            </View>
    )
}

export default AboutScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f8ff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        marginVertical: 5,
    },
})