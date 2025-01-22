import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CategoryRepository } from '../data/Database';
import { FlatList, Switch, TextInput } from 'react-native-gesture-handler';

type Props = {}

type CategoryCreate = {
    name: string,
}

type Product = {
    name: string,
    price: number,
    stock: number,
    discontinued: boolean,
    category: Category,
}

type Category = {
    id: number,
    name: string,
    products: Product[],
}

const CategoryList37 = (props: Props) => {

    const [categories, setCategories] = useState<Category[]>({} as Category[]);
    const [name, setName] = useState<string>("");


    useEffect(() => {
        const getList = async () => {
            const categoryList = await CategoryRepository.find(
                {relations: ['products']}
            );
            setCategories([...categoryList]);
        }

        getList();

    }, [categories])


    async function save() {
            if (!name || name.trim() === "") {
                return;
            }
    
            const newProduct : CategoryCreate = {
                name: name,
            }
    
            await CategoryRepository.save(newProduct);
        }


    return (
        <View style={{flex: 1}}>
            <View style={styles.mainContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter category name"
                        onChangeText={(text) => setName(text)}
                    />
                </View>
            </View>
            <FlatList
                data={categories}
                renderItem={({item}) => (
                    <View style={styles.rowContainer}>
                    <Text style={styles.rowText}>{item.name}</Text>
                    <Text style={styles.rowText}>{JSON.stringify(item.products.map(product => product.name))}</Text>
                </View>
                )}
                keyExtractor={(item, index) => item.name+ "_" + index}
                ListHeaderComponent={
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Name</Text>
                        <Text style={styles.headerText}>Products</Text>
                    </View>
                }
                />
            <Button title='Add new category' color={'#008080'} onPress={save}/>
        </View>
    )
}

export default CategoryList37

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