import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    appContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#2E5EBA',
    },
    iconBackdrop: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoLogin: {
        height: 100,
        width: 100,
        margin: 'auto',
    },
    formContainer: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: 'white',
        flex: 7,
    },
    textLogin: {
        marginLeft: 30,
        fontSize: 32,
        fontWeight: 'bold'
    },
    loginInput: {
        borderRadius: 8,
        marginTop: 20,
        marginHorizontal: 40,
        paddingHorizontal: 10,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    buttonLogin: {
        marginTop: 20,
        marginHorizontal: 40,
        justifyContent: 'center',
        fontSize: 32
    },
    lupaPassword: {
        marginTop: 16,
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 16
    },

})