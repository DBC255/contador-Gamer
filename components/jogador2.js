// importa o react e o useState
// useState serve para criar valores que podem mudar a tela
import React, {use, useEffect, useState} from "react";

// importa componentes nativos do react nativo 
import {
  View, //caixa/area de tela
  Text, //texto
  Button, //botão
  StyleSheet, //estilo
  TouchableOpacity, //Botão customisavel
  TextInput
} from "react-native-web";

//Componentes primcipal APP
export default function Jogador2(){
  //Cria uma estado(variavel php) chamado "pontos"
  //pontos = Valor atual
  //setPontos = função para alterar o valor
  //0 = valor inicial
  const [pontos1, setPontos1] = useState(0);
  const [pontos2, setPontos2] = useState(0);
  const [nome1, setNome1] = useState('jogador 1');
  const [nome2, setNome2] = useState('jogador 2');
  const [lider, setLider] = useState('empate');

  //Executar alguma ação automaticamente quando algo mudar nesse caso: toda vez que os pontos / nomes mudarem o codigo
  // dentro do useEffect será executado
  useEffect(() => {
    if (pontos1 > pontos2){
        setLider(nome1);
    }else if (pontos2 > pontos1){
        setLider(nome2);
    }else{
        setLider("Empate");
    }
  }, pontos1, pontos2, nome1, nome2);
  //dependencia que dispara o useEffect quando mudam




  //Função para aumentar 1 ponto
  function aumentar1(){
    //pega o valor atual e soma 1
    setPontos1(pontos1+1);
  }
  function aumentar2(){
    //pega o valor atual e soma 1
    setPontos2(pontos2+1);
  }
  //função para diminuir um ponto
  function diminuir1(){
    //pega o valor atual e subtrai 1
    if(pontos1 > 0){
    setPontos1(pontos1-1);
    }
  }
  function diminuir2(){
    //pega o valor atual e subtrai 1
    if(pontos2 > 0){
    setPontos2(pontos2-1);
    }
  }
  //função para resetar o contador
  function resetar(){
    //volta o valor para 0
    setPontos1(0);
    setPontos2(0);
    setLider('empate');
  }

  //tudo que esta no return aparece na tela
  return(
    // View principal do app
    <View style={styles.container}>

      {/* Titulo do APP */}
      <Text style={styles.titulo}>
        🎮 Contador Gamer - modo 2 jogadores
      </Text>

      <Text style={styles.lider}>
        🏆 lider: {lider}
      </Text>
        {/* area dos jogadores */}
      <View style={styles.areaJogadores}>

        {/* jogador1 */}
        <View style={styles.areaJogador}>

            <TextInput
            style={styles.input}
            placeholder="nome do Jogador 1"
            placeholderTextColor={"#999"}
            value={nome1}
            onChangeText={setNome1}
            />
            {/* Mostra o valor dos pontos */}
            <Text style={styles.nome}>{nome1}</Text>
            <Text style={styles.pontos}>{pontos1}</Text>

      {/* área dos botões +1 e -1
        onPress é quando clica no botão */}
      <View style={styles.areaBotoes}>
        <TouchableOpacity onPress={aumentar1} style={styles.botao}>
          <Text style={styles.textoBotao}>+1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={diminuir1} style={styles.botao}>
          <Text style={styles.textoBotao}>-1</Text>
        </TouchableOpacity>
      </View>
        </View>

        {/* jogador2 */}
        <View style={styles.areaJogador}>

            <TextInput
            style={styles.input}
            placeholder="nome do Jogador 2"
            placeholderTextColor={"#999"}
            value={nome2}
            onChangeText={setNome2}
            />
            {/* Mostra o valor dos pontos */}
            <Text style={styles.nome}>{nome2}</Text>

            {/* Mostra o valor dos pontos */}
      <Text style={styles.pontos}>{pontos2}</Text>

      {/* área dos botões +1 e -1
        onPress é quando clica no botão */}
      <View style={styles.areaBotoes}>
        <TouchableOpacity onPress={aumentar2} style={styles.botao}>
          <Text style={styles.textoBotao}>+1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={diminuir2} style={styles.botao}>
          <Text style={styles.textoBotao}>-1</Text>
        </TouchableOpacity>
      </View>
        </View>
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

    lado_lado: {
        flexDirection: 'row', // deixa os elementos em linha
    },

    //ESTILO DO TITULO
    titulo: {
        fontSize: 32,// TAMANHO DA FONTE
        color: '#e1ff00ff',// COR DO TEXTO
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
        backgroundColor: '#1d12e9ff',//COR DO BOTÃO
        paddingVertical: 10,// ESPAÇAMENTO VERTICAL
        paddingHorizontal: 20,//ESPAÇAMENTO HORIZONTAL
        borderRadius: 12,//ARREDONDAMENTO DE BORDAS
        marginHorizontal: 10,// ESPAÇO ENTRE BOTÕES
    },

    // ESTILO DO BOTÃO DE RESET
    botaoReset: {
        backgroundColor: '#fe0d00ff',// COR VERMELHA
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
    // área de jogadores
    areaJogadores:{
        flexDirection: 'row',
        // espaço entre eles
        grap:15,
    },
    areaJogador:{
        backgroundColor:'#1f1f1f',
        width: 230,
        padding:15,
        borderRadius:15,
        alignItems:'center'
    },

    input: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        fontSize:16,
    },
    
    nome:{
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    
    lider: {
        fontSize: 22,
        color: '#fff',
        marginBottom: 20,
        fontWeight: 'bold'
    }
});