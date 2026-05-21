// importa o react e o useState
// useState serve para criar valores que podem mudar a tela
import React, {useState} from "react";

// importa componentes nativos do react nativo 
import {
  View, //caixa/area de tela
  Text, //texto
  Button, //botão
  StyleSheet, //estilo
  TouchableOpacity //Botão customisavel
} from "react-native-web";

//Componentes primcipal APP
export default function Jogador1(){
  //Cria uma estado(variavel php) chamado "pontos"
  //pontos = Valor atual
  //setPontos = função para alterar o valor
  //0 = valor inicial
  const [pontos, setPontos] = useState(0);
  //Função para aumentar 1 ponto
  function aumentar(){
    //pega o valor atual e soma 1
    setPontos(pontos+1);
  }
  //função para diminuir um ponto
  function diminuir(){
    //pega o valor atual e subtrai 1
    setPontos(pontos-1)
  }
  //função para resetar o contador
  function resetar(){
    //volta o valor para 0
    setPontos(0)
  }

  //tudo que esta no return aparece na tela
  return(
    // View principal do app
    <View style={styles.container}>

      {/* Titulo do APP */}
      <Text style={styles.titulo}>
        🎮 Contador Gamer
      </Text>

      {/* Mostra o valor dos pontos */}
      <Text style={styles.pontos}>{pontos}</Text>

      {/* área dos botões +1 e -1
        onPress é quando clica no botão */}
      <View style={styles.areaBotoes}>
        <TouchableOpacity onPress={aumentar} style={styles.botao}>
          <Text style={styles.textoBotao}>+1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={diminuir} style={styles.botao}>
          <Text style={styles.textoBotao}>-1</Text>
        </TouchableOpacity>
      </View>
      {/* área do botão resetar */}
      <TouchableOpacity onPress={resetar} style={styles.botaoReset} >
          <Text style={styles.textoBotao}>Resetar</Text>
        </TouchableOpacity>
    </View>
  );
}

// ÁREA DE ESTILOS DO APP
const styles = StyleSheet.create({
  // ESTILO DA TELA PRINCIPAL
  container: {
    flex: 1,// OCUPA A TELA TODA
    backgroundColor: '#121212',//COR DE FUNDO
    alignItems: 'center', //CENTRALIZA HORIZONTALMENTE
    justifyContent: 'center',// CENTRALIZA VERTICALMENTE
    padding: 20,// ESPAÇAMENTO INTERNO
  },

  //ESTILO DO TITULO
  titulo: {
    fontSize: 32,// TAMANHO DA FONTE
    color: '#00ff88',// COR DO TEXTO
    fontWeight: 'bold',// TEXTO EM NEGRITO
    marginBottom: 30,// ESPAÇO ABAIXO
  },
  //ESTILO DOS PONTOS
  pontos: {
    fontSize: 80,//TAMANHO GIGANTE
    color: '#ffffff',// COR BRANCA
    marginBottom: 40,// ESPAÇO ABAIXO
    fontWeight: 'bold',// NEGRITO
  },

  //ÁREA DOS BOTÕES
  areaBotoes: {
    flexDirection: 'row',// DEIXA UM BOTÃO AO LADO DO OUTRO
    marginBottom: 20,// ESPAÇO ABAIXO
  },

  // ESTILO DOS BOTÕES +1 E -1
  botao: {
    backgroundColor: '#00ff88',//COR DO BOTÃO
    paddingVertical: 15,// ESPAÇAMENTO VERTICAL
    paddingHorizontal: 30,//ESPAÇAMENTO HORIZONTAL
    borderRadius: 12,//ARREDONDAMENTO DE BORDAS
    marginHorizontal: 10,// ESPAÇO ENTRE BOTÕES
  },

  // ESTILO DO BOTÃO DE RESET
  botaoReset: {
    backgroundColor: '#ff3b30',// COR VERMELHA
    paddingVertical: 15,// ESPAÇAMENTO VERTICAL
    paddingHorizontal: 40,//ESPAÇAMENTO HORIZONTAL
    borderRadius: 12,//BORDAS ARREDONDADAS
  },

  //ESTILO DO TEXTO DOS BOTÕES
  textoBotao: {
    fontSize: 22,// TAMANHO DAS LETRA
    color: '#000',// COR DE TEXTO
    fontWeight: 'bold',// NEGRITO
  },
});