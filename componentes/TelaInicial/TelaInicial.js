import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import estilos from '../TelaInicial/estilo'

const imgCapa = {uri: '../../assets/capa.jpg'};





export default function TelaInicial () {
    return (
      <View style={estilos.container}>
        <ImageBackground source={imgCapa} resizeMode="cover" blurRadius={5} style={estilos.image}>
          <Text style={estilos.titulo}>Adega Preferida</Text>
          <Text style={estilos.subtitulo}>
          Aqui você encontra os melhores e mais saborosos vinhos.</Text>
        </ImageBackground>
      </View>
     
    );
}