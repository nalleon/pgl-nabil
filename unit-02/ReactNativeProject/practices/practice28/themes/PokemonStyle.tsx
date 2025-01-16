import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',

        padding: 10,
        flex: 1,
        width: '100%',
        height: '100%',
    },
    secondContainer:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainImg:{
        marginTop: 20,
        width: 200,
        height: 200,
        borderRadius: 100,
        borderColor: '#008080',
        borderWidth:3
    },
    title:{
        textAlign: 'center',
        textTransform: 'uppercase',
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#008080'
    },
    typeContainer: {
        margin: 5,
        marginHorizontal: 10,
    },
    typeText: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    spriteRow:{
        marginTop:4
    },
    spriteContainer: {
        width: 80,
        height: 80,
        marginHorizontal: 10,
        marginBottom: 15,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    spriteImage: {
        borderWidth: 2,
        borderColor: '#008080',
        borderRadius: 100,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        backgroundColor: '#f0f0f0',
    },
    statName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#008080',  
        textTransform: 'uppercase',
    },
    statValue: {
        fontWeight: 'bold',
        color: '#FF5733', 
    },
    statRow: {
        flexDirection: 'row',      
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,     
        borderBottomColor: '#DDD',
    },
    separator: {
        color: '#008080',  
        fontWeight: 'bold',
        marginTop: 5,
        paddingHorizontal: 2,
        paddingRight: 4
    },
    abilities:{
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#f7f7f7',
        borderRadius: 10
    }
});

export default styles;


