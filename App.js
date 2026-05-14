import React, {useState} from "react";
import {
  View,
  Text, 
  Button, 
  StyleSheet,
  TouchableOpacity
} from "react-native-web";

export default function App(){
  const [pontos, setPontos] = useState(0);

  function aumentar(){
    setPontos(pontos+1);
  }

  function diminuir(){
    setPontos(pontos-1)
  }

  function resetar(){
    setPontos(0)
  }

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>
        🎮 Contador Gamer
      </Text>
      <Text style={styles.pontos}>{pontos}</Text>
      <View style={styles.areaBotoes}>
        <TouchableOpacity onPress={aumentar} style={styles.botao}>
          <Text style={styles.textoBotao}>+1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={diminuir} style={styles.botao}>
          <Text style={styles.textoBotao}>-1</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={resetar} style={styles.botaoReset} >
          <Text style={styles.textoBotao}>Resetar</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 32,
    color: '#00ff88',
    fontWeight: 'bold',
    marginBottom: 30,
  },

  pontos: {
    fontSize: 80,
    color: '#ffffff',
    marginBottom: 40,
    fontWeight: 'bold',
  },

  areaBotoes: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  botao: {
    backgroundColor: '#00ff88',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginHorizontal: 10,
  },

  botaoReset: {
    backgroundColor: '#ff3b30',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
  },

  textoBotao: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
  },
});