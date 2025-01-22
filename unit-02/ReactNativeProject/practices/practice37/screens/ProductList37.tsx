import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CategoryRepository, ProductRepository } from '../data/Database';
import { FlatList, Switch, TextInput } from 'react-native-gesture-handler';

type Props = {}

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
}
const ProductList37 = (props: Props) => {

    const [products, setProducts] = useState<Product[]>({} as Product[]);
    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<number>(0)
    const [stock, setStock] = useState<number>(0)
    const [discontinued, setDiscontinued] = useState<boolean>(false)
    const [category, setCategory] = useState<string>("")

    useEffect(() => {
        const getList = async () => {
            const productList = await ProductRepository.find(
                {
                    relations: ['category']
                }
            );
            setProducts([...productList]);
        }

        getList();

    }, [products])


    async function save() {
            if (!name || !price || !stock  || !category){
                return;
            }

            const checkIfCategoryExists = await CategoryRepository.findOneBy({name: category}); 
            let categoryAux;

            if (!checkIfCategoryExists){
                await CategoryRepository.save({name: category});
                categoryAux = await CategoryRepository.findOneBy({name: category}); 
            } else {
                categoryAux = checkIfCategoryExists; 
            }


            console.log(categoryAux);
            const newProduct : Product = {
                name: name,
                price: price,
                stock: stock,
                discontinued: discontinued,
                category: categoryAux,
            }
    
            await ProductRepository.save(newProduct);
        }


    return (
        <View style={{flex: 1}}>
            <View style={styles.mainContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter product name"
                        onChangeText={(text) => setName(text)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Price</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter product price"
                        keyboardType="numeric"
                        onChangeText={(text) => setPrice(parseFloat(text))}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Stock</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter product stock"
                        keyboardType="numeric"
                        onChangeText={(text) => setStock(parseInt(text))}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Category</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter product category"
                        onChangeText={(text) => setCategory(text)}
                    />
                </View>

                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>Discontinued</Text>
                    <Switch
                        value={discontinued}
                        onValueChange={(value) => setDiscontinued(value)}
                    />
                </View>
            </View>
            <FlatList
                data={products}
                renderItem={({item}) => (
                    <View style={styles.rowContainer}>
                    <Text style={styles.rowText}>{item.name}</Text>
                    <Text style={styles.rowText}>{item.price}</Text>
                    <Text style={styles.rowText}>{item.stock}</Text>
                    <Text style={styles.rowText}>{item.discontinued ? 'Yes' : 'No'}</Text>
                    {
                        item.category ? 
                        <Text style={styles.rowText}>{item.category.name}</Text> :
                        <Text style={styles.rowText}>N/A</Text>
                    }
                </View>
                )}
                keyExtractor={(item, index) => item.name+ "_" + index}
                ListHeaderComponent={
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Name</Text>
                        <Text style={styles.headerText}>Price</Text>
                        <Text style={styles.headerText}>Stock</Text>
                        <Text style={styles.headerText}>Discontinued</Text>
                        <Text style={styles.headerText}>Category</Text>
                    </View>
                }
                />
            <Button title='Add new product' color={'#008080'} onPress={save}/>
        </View>
    )
}

export default ProductList37

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