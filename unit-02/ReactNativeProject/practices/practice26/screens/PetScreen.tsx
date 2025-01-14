import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import Practice26Context, { PetsContext } from '../components/Practice26Context';
import { FlatList } from 'react-native-gesture-handler';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Image } from 'react-native-reanimated/lib/typescript/Animated';

type Props = {}

type Pet = {
    breed: string,
    img: string,
    description: string,
}

type PrincipalStackParamList = {
    Cats: { category: string }; 
    Dogs: { category: string };
};

type PetScreenProps = DrawerScreenProps<PrincipalStackParamList, 'Cats' | 'Dogs'>;

const PetScreen = (props: PetScreenProps) => {
    const context = useContext(PetsContext);
    const { category } = props.route.params;

    const pets = category === 'dogs' ? context.dogs : context.cats;
    return (
        <View style={styles.container}>
            <Text style={styles.title}> {category === 'dogs' ? 'Dogs' : 'Cats'}</Text>
                <FlatList
                    data={pets}
                    renderItem={({ item }) => (
                        <View style={styles.petCard}>
                            <Image source={{ uri: item.img }} style={styles.petImage} />
                            <Text style={styles.petText}>{item.breed}</Text>
                            <Text>{item.description}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.breed}
                />

        </View>
    ) 
}

export default PetScreen

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
    petCard: {
        marginBottom: 20,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    petImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    petText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});