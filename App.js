import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}> Giullya </Text>
      <Text style={styles.cargo}> Amor da Minha Vida</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  nome:{
    fontSize: 22,
    color: 'red'
  },

  cargo:{
    fontSize: 15,
    
    color: 'blue'
  },

});
