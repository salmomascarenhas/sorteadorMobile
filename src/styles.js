import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },
    textResult: {
        fontSize: 80,
        color: '#000',
        fontWeight: "bold",
        paddingBottom: 50,
    },
    inputs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    inputDe: {
        fontSize: 30,
        textAlign: 'center',
        borderBottomColor: '#e0dcd1',
        borderBottomWidth: 1,
        marginRight: 10,
        maxWidth: 80
    },
    inputAte: {
        fontSize: 30,
        textAlign: 'center',
        borderBottomColor: '#e0dcd1',
        borderBottomWidth: 1,
        maxWidth: 80
    },
    button: {
        marginTop: 20
    }

});