import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        backgroundColor: 'transparent',
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },

    item: {
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#eeeeee',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
        textAlign: 'center',
        alignItems: 'center',  
        justifyContent: 'center',    
        flex: 1,
    },

    text: {
        fontSize: 17,
        color: '#333',
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'Times New Roman',
        fontStyle: 'italic',
    },

    sprite: {
        width: 30,
        height: 40,
        alignSelf: 'center',  
    },
    textInput:{
    borderWidth: 1,
    borderColor: '#008080',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    fontSize: 16,
    color: '#333',
    }
});

export default styles;


