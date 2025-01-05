import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

type Product = {
    id: number,
    name: string,
    price: number,
    stock: number,
}
const Practice16Screen = (props: Props) => {

    const array: Product[] = [
        { id: 1, name: 'Producto 1', price: 100, stock: 50 },
        { id: 2, name: 'Producto 2', price: 200, stock: 30 },
        { id: 3, name: 'Producto 3', price: 300, stock: 20 },
        { id: 4, name: 'Producto 4', price: 400, stock: 10 },
        { id: 5, name: 'Producto 5', price: 500, stock: 0 },
        { id: 6, name: 'Producto 6', price: 600, stock: 40 },
        { id: 7, name: 'Producto 7', price: 700, stock: 15 },
        { id: 8, name: 'Producto 8', price: 800, stock: 35 },
    ];


    return (
        <SafeAreaView style={styles.bgColor}>
            <View style={{flex:1}}>
                <FlatList 
                data={array}
                renderItem={(p) => { 
                    return (
                        p.index % 2 === 0 ?
                        <View style={styles.items}>
                            <Text>{JSON.stringify(p)}</Text>
                        </View>
                        :
                        <View style={{...styles.items, backgroundColor: 'lightgray'}}>
                            <Text>{JSON.stringify(p)}</Text>
                        </View>
                    )
                }}
                keyExtractor={ (item, index) => item.name + index}
                ListHeaderComponent={() => <Text style={styles.text}>Lista de Productos</Text>}                
                />     
            </View>
        </SafeAreaView>

    )
}

export default Practice16Screen

const styles = StyleSheet.create({

    bgColor: {
        backgroundColor: 'white',
        flex:1,
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign:'center'
    },
    items: {
        backgroundColor:'lightblue',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey'
    },
    text: {
        textAlign:'center',
        fontWeight:'bold',
        fontSize: 20,
        marginVertical:5,
        marginBottom: 10,
        padding: 10,
        textTransform: 'uppercase'
    }


})