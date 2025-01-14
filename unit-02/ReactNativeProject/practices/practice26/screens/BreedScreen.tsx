import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PetsContext } from '../components/Practice26Context';

type Props = {}

type PrincipalStackParamList = {
    SelectBreed: { category: string }; 
    Pet: { category: string, breed: string };
};

type PropsSelectBreedScreen = NativeStackScreenProps<PrincipalStackParamList, 'SelectBreed'>;

const BreedScreen = (props: PropsSelectBreedScreen) => {
    const context = useContext(PetsContext);
    const { category } = props.route.params;

    const pets = category === 'dogs' ? context.dogs : context.cats;
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Select breed {category === 'cats' ? 'gatos' : 'perros'}</Text>

            {pets.map((pet, index) => (
                <TouchableOpacity key={index}
                    onPress={() => props.navigation.navigate('Pet', { category, breed: pet.breed })}
                    style={styles.breedItem}>
                <Text>{pet.breed}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default BreedScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    breedItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});