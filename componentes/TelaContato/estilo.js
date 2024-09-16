import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20
    },
    titulo:{
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    contatoTitulo:{
        color: '#400303',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    contatoParagrafo:{
        color: '#400303'
    },
    contatoLista:{
        width: 150,
        alignContent: 'center'
    },
    contatoBox:{
        borderStyle: 'solid',
        borderWidth: 2,
        alignItems: 'center'
    }
});

export default estilos;