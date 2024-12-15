import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({

    container: {
        flex: 1,
      },
      image: {
        flex: 1,
        justifyContent: 'center',
      },
      text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
      },
    titulo:{
        color: '#fff',
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    },
    subtitulo:{
        color: '#fff',
        fontSize: 18,
        textAlign: 'center'
    },
});

export default estilos;