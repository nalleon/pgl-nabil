import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProductRepository } from '../data/Database'
import { LessThan, Like, MoreThan } from 'typeorm'
import { FlatList, Switch, TextInput } from 'react-native-gesture-handler'

type Props = {}

type Product = {
    name: string,
    price: number,
    stock: number,
    discontinued: boolean,
}


const SearchFilterProduct35 = (props: Props) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [subName, setSubName] = useState<string>(""); 
    const [minPrice, setMinPrice] = useState<number>(); 
    const [maxPrice, setMaxPrice] = useState<number>(); 
    const [orderByName, setOrderByName] = useState<boolean>(false); 

        useEffect(() => {
    
        }, [products])

    const filterProducts =  async () => {
            let whereCondition: any = {};  
        
            if (subName) {
                whereCondition.name = Like(`%${subName}%`);
            }
        
            if (!isNaN(Number(minPrice)) && minPrice) {
                whereCondition.price = MoreThan(Number(minPrice));
            }
        
            if (!isNaN(Number(maxPrice)) && maxPrice) {
                whereCondition.price = LessThan(Number(maxPrice));
            }
        
            let orderCondition: any = {};

            if (orderByName) {
                orderCondition.name = 'ASC';
            } else {
                orderCondition.name = 'DESC';
            }
        
            const filteredProducts = await ProductRepository.find({
                where: whereCondition,
                order: orderCondition
            });
        
            setProducts(filteredProducts);
        };
        
        
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    onChangeText={(text) => setSubName(text)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Min price</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Min price"
                    keyboardType="numeric"
                    onChangeText={(text) => setMinPrice(parseFloat(text))}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Max price</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Max price"
                    keyboardType="numeric"
                    onChangeText={(text) => setMaxPrice(parseFloat(text))}
                />
            </View>

            <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Order by name</Text>
                <Switch
                    value={orderByName}
                    onValueChange={(value) => setOrderByName(value)}
                />
            </View>

            <FlatList
                data={products} 
                ListHeaderComponent={
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Nombre</Text>
                        <Text style={styles.headerText}>Precio</Text>
                        <Text style={styles.headerText}>Stock</Text>
                        <Text style={styles.headerText}>Discontinued</Text>
                    </View>
                }
                renderItem={({ item }) => (
                    <View style={styles.rowContainer}>
                        <Text style={styles.rowText}>{item.name}</Text>
                        <Text style={styles.rowText}>{item.price}</Text>
                        <Text style={styles.rowText}>{item.stock}</Text>
                        <Text style={styles.rowText}>{item.discontinued ? 'Yes' : 'No'}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => item.name + "_" + index}
            />
            <Button title='Search' color={'#008080'} onPress={filterProducts}/>

        </View>
    )
}

export default SearchFilterProduct35

const styles = StyleSheet.create({
    mainContainer:{
        margin: 5
    },
    inputContainer: {
        marginBottom: 10, 
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
        color: '#008080'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
        marginHorizontal: 15
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    switchLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#008080'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#008080',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerText: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    rowText: {
        flex: 1,
        textAlign: 'center',
    },
})