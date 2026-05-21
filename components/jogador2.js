// importa o react e o useState
// useState serve para criar valores que podem mudar a tela
import React, { useState } from "react";

// importa componentes nativos do react nativo 
import {
    View, //caixa/area de tela
    Text, //texto
    Button, //botão
    StyleSheet, //estilo
    TouchableOpacity //Botão customisavel
} from "react-native-web";

//Componentes primcipal APP
export default function Jogadores2() {
    //Cria uma estado(variavel php) chamado "pontos"
    //pontos = Valor atual
    //setPontos = função para alterar o valor
    //0 = valor inicial
    const [pontos1, setPontos1] = useState(0);
    const [pontos2, setPontos2] = useState(0);
    const [ganhador,setGanhador] = useState('Empatado');
    //Função para aumentar 1 ponto
    function aumentar1() {
        //pega o valor atual e soma 1
        setPontos1(pontos1 + 1);
    }
    //função para diminuir um ponto
    function diminuir1() {
        //pega o valor atual e subtrai 1
        if (pontos1 > 0) {
            setPontos1(pontos1 - 1)
        }
    }
    //função para resetar o contador
    function resetar1() {
        //volta o valor para 0
        setPontos1(0)
    }
    //Cria uma estado(variavel php) chamado "pontos"
    //pontos = Valor atual
    //setPontos = função para alterar o valor
    //0 = valor inicial
    //Função para aumentar 1 ponto
    function aumentar2() {
        //pega o valor atual e soma 1
        setPontos2(pontos2 + 1);
    }
    //função para diminuir um ponto
    function diminuir2() {
        //pega o valor atual e subtrai 1
        if (pontos2 > 0) {
            setPontos2(pontos2 - 1)
        }
    }
    //função para resetar o contador
    function resetar2() {
        //volta o valor para 0
        setPontos2(0)
    }

    function ganhador(){
        if(pontos1 > pontos2){
            setGanhador("Player 1 esta ganhando");
        }if(pontos2 > pontos1){
            setGanhador("Player 2 esta ganhando");
        }else{
            setGanhador("Empatado");
        }
    }


    //tudo que esta no return aparece na tela
    return (
        // View principal do app
        <View  style={styles.container}>
            <Text style={styles.titulo}>
                🎮 Contador Gamer
            </Text>
            <View style={styles.lado_lado}>
                <View style={styles.container}>
                    {/* Titulo do APP */}
                    <Text style={styles.titulo}>
                        Jogador 1
                    </Text>

                    {/* Mostra o valor dos pontos */}
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
                        <TouchableOpacity onPress={resetar1} style={styles.botaoReset} >
                            <Text style={styles.textoBotao}>Resetar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                {/* área do botão resetar */}


                {/* Titulo do APP */}
                <View style={styles.container}>
                    <Text style={styles.titulo}>
                        Jogador 2
                    </Text>

                    {/* Mostra o valor dos pontos */}
                    <Text style={styles.pontos}>{pontos2}</Text>

                    {/* área dos botões +1 e -1 onPress é quando clica no botão */}
                    <View style={styles.areaBotoes}>
                        <TouchableOpacity onPress={aumentar2} style={styles.botao}>
                            <Text style={styles.textoBotao}>+1</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={diminuir2} style={styles.botao}>
                            <Text style={styles.textoBotao}>-1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={resetar2} style={styles.botaoReset} >
                            <Text style={styles.textoBotao}>Resetar</Text>
                        </TouchableOpacity>
                    </View>
                        
                </View>
            </View>
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
        paddingVertical: 15,// ESPAÇAMENTO VERTICAL
        paddingHorizontal: 30,//ESPAÇAMENTO HORIZONTAL
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
});