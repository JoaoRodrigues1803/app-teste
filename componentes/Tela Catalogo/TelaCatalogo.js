import React from "react";
import { View, Text, Image, ScrollView } from 'react-native'

import estilos from './estilo';
import imgVinhoBranco from '../../assets/vinho-branco.jpg'
import imgVinhoEspecial from '../../assets/vinho-especial.jpg'
import imgVinhoTinto from '../../assets/vinho-tinto.jpg'
import imgVinhoRose from '../../assets/vinho-rose.jpg'
import imgVinhoSeco from '../../assets/vinho-seco.jpg'

import estilo from "./estilo";

export default function sobre() {

  return (
    <ScrollView>
      <View style={estilo.container}>

        <Text style={estilo.Titulo}>
        Nossos vinhos
        </Text>
        <Text style={estilo.texto}>
        Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.
        </Text>

        <View style={estilo.posts}>
          {/* 1º Post */}
          <View style={estilo.post}>
            <Image
              source={imgVinhoBranco}
              style={estilo.imgPost}
            />
            <View style={estilo.corpoPost}>
              <Text style={estilo.tituloPost}>Chatigny Chardonnay</Text>
              <Text style={estilo.textoPost}>Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.</Text>
            </View>
          </View>
          {/* 2° Post */}
          <View style={estilo.post}>
            <Image
              source={imgVinhoRose}
              style={estilo.imgPost}
            />
            <View style={estilo.corpoPost}>
              <Text style={estilo.tituloPost}>Concha y Toro Exportacion</Text>
              <Text style={estilo.textoPost}>Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.</Text>
            </View>
          </View>
          {/* 3° Post */}
          <View style={estilo.post}>
            <Image
              source={imgVinhoSeco}
              style={estilo.imgPost}
            />
            <View style={estilo.corpoPost}>
              <Text style={estilo.tituloPost}>Portada Winemaker's</Text>
              <Text style={estilo.textoPost}>Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi.Perfeito com queijo parmesão e carnes assadas ou grelhadas.</Text>
            </View>
          </View>
           {/* 4° Post */}
           <View style={estilo.post}>
            <Image
              source={imgVinhoEspecial}
              style={estilo.imgPost}
            />
            <View style={estilo.corpoPost}>
              <Text style={estilo.tituloPost}>Elvio Cogno Ravera Barolo</Text>
              <Text style={estilo.textoPost}>Vinho estruturado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados. Sua cor é vermelho granada e é perfeito com carnes vermelhas e molhos encorpados.</Text>
            </View>
          </View>

         


        </View>

      </View>

      {/* <Text>
        <hr />
      <Image
      source={reiChuva}
      style={estilo.reidaChuva}
      />
      fdsfdsfsdfdsfdsf
      </Text> */}
    </ScrollView>
  );
}

//  Nossos vinhos
// Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.

// Chatigny Chardonnay
// Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.

// Concha y Toro Exportacion
// Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.

// Portada Winemaker's
// Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi.Perfeito com queijo parmesão e carnes assadas ou grelhadas.

// Elvio Cogno Ravera Barolo
// Vinho estruturado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados. Sua cor é vermelho granada e é perfeito com carnes vermelhas e molhos encorpados.
