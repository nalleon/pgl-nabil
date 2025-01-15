import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        flex: 1,
        width: '100%',
        height: '100%',
    },
    mainImg:{
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: '#008080',
    borderWidth:3
    },
    title:{
    textTransform: 'uppercase',
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#008080'
    },
    typeContainer: {
    marginBottom: 5,
    paddingHorizontal: 10,
    },
    typeText: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    },
    statText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    },
    spriteContainer: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#008080',
    borderRadius: 4,
    },
    spriteImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    },
    statName: {
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
    paddingVertical: 2,
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


