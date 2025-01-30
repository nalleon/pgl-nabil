import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#e3c181',
    },

    btnText: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    task:{
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
        backgroundColor: '#eeeeee',
        borderRadius: 10,
        flex:1
    },

    taskText: {
        fontSize: 18,
        marginLeft: 10,
        textDecorationLine: 'none',
    },

    taskTextCompleted: {
        fontSize: 18,
        marginLeft: 10,
        textDecorationLine: 'line-through'
    },

    taskLeftIcon:{
        justifyContent: 'flex-start'
    },

    taskActions: {
        flexDirection: 'row',
        marginLeft: 'auto', 
    },

    taskActionIcon: {
        marginLeft: 10,
    },

    taskContent: {
        flex: 1,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 10,
        marginBottom: 10,
        textAlign: 'center'
    }

    
});