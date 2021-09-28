import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    curveHead: {
        flex: 2,
        backgroundColor: '#2E5EBA',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardFloat: {
        width: '80%',
        height: '100%',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,  
        elevation: 10,
        borderRadius: 10,
        padding: 10
    }
})