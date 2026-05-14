import React, {useState} from "react";
import {View, Text, Button, StyleSheet} from "react-native-web";

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
    <View>
      <Text>
        🎮 Contador Gamer
      </Text>
      <Text>{pontos}</Text>
      <View>
        <Button title="+1" onPress={aumentar} />
        <Button title="-1" onPress={diminuir} />
        <Button title="reset" onPress={resetar} />
      </View>
    </View>
  );
}