import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20
    },
    Titulo:{
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    texto:{
      textAlign: 'justify',
      margin: 30,
    },
    imgPost:{
      width:50,
      height:50,
      alignSelf:'flex-start'
    },
    posts:{
      width: 380,
    },
    post:{
        borderStyle: 'solid',
        borderColor: '#C49090',
        borderWidth: 2,
        alignItems: 'center',
        borderRadius: 20,
        margin:5,
        backgroundColor: '#C49090'
    },
    tituloPost: {
      margin:10,
      fontWeight: 'bold',
      fontSize:16
    },
    textoPost:{
      textAlign:'justify',
  
    },
    corpoPost:{
      width: 280,
      padding:5
    }
})

export default estilo