import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ScrollView} from 'react-native';
import { stylescalc } from './style';
import Cabecalho from '../../components/header';
import FooterComponent from '../../components/footer';

export default function CalculadoraEnem() {
  // Estados para armazenar os valores de acertos de cada área
  const [cienciasHumanas, setCienciasHumanas] = useState('');
  const [linguagens, setLinguagens] = useState('');
  const [cienciasNatureza, setCienciasNatureza] = useState('');
  const [matematica, setMatematica] = useState('');
  const [redacao, setRedacao] = useState('');

  // Função para calcular a pontuação total
  const calcularPontuacao = () => {
    const ch = parseInt(cienciasHumanas) || 0;
    const lc = parseInt(linguagens) || 0;
    const cn = parseInt(cienciasNatureza) || 0;
    const mt = parseInt(matematica) || 0;
    const rd = parseInt(redacao) || 0;

    if (ch > 45 || lc > 45 || cn > 45 || mt > 45 || rd > 1000) {
      Alert.alert('Erro', 'Verifique os limites de cada campo!');
      return;
    }

    const total = ch + lc + cn + mt + (rd / 5);
    Alert.alert('Resultado', `Sua pontuação aproximada é: ${total.toFixed(2)}`);
  };

  const limparCampos = () => {
    setCienciasHumanas('');
    setLinguagens('');
    setCienciasNatureza('');
    setMatematica('');
    setRedacao('');
  };

  return (
    <ScrollView >
        <Cabecalho/>
        <View style={stylescalc.container}>
      <Text style={stylescalc.title}>Digite o número de acertos em cada prova:</Text>
      <View style={stylescalc.espaco}>
      <View>
        <View style={stylescalc.field}>
        <Text>Ciências Humanas (0 - 45):</Text>
        <TextInput
          style={stylescalc.input}
          keyboardType="numeric"
          value={cienciasHumanas}
          onChangeText={setCienciasHumanas}
        />
      </View>

      <View style={stylescalc.field}>
        <Text>Linguagens e Códigos (0 - 45):</Text>
        <TextInput
          style={stylescalc.input}
          keyboardType="numeric"
          value={linguagens}
          onChangeText={setLinguagens}
        />
      </View>

      <View style={stylescalc.field}>
        <Text>Ciências da Natureza (0 - 45):</Text>
        <TextInput
          style={stylescalc.input}
          keyboardType="numeric"
          value={cienciasNatureza}
          onChangeText={setCienciasNatureza}
        />
      </View>

      <View style={stylescalc.field}>
        <Text>Matemática (0 - 45):</Text>
        <TextInput
          style={stylescalc.input}
          keyboardType="numeric"
          value={matematica}
          onChangeText={setMatematica}
        />
      </View>

      <View style={stylescalc.field}>
        <Text>Redação (0 - 1000):</Text>
        <TextInput
          style={stylescalc.input}
          keyboardType="numeric"
          value={redacao}
          onChangeText={setRedacao}
        />
      </View>

        </View>

      {/* pesos */}

      <View>
            <View style={stylescalc.field}>
                <Text>Peso(0 - 5):</Text>
                <TextInput
                style={stylescalc.input}
                keyboardType="numeric"
                value={redacao}
                onChangeText={setRedacao}
                />
            </View>
            <View style={stylescalc.field}>
                <Text>Peso (0 - 5):</Text>
                <TextInput
                style={stylescalc.input}
                keyboardType="numeric"
                value={redacao}
                onChangeText={setRedacao}
                />
            </View>
            <View style={stylescalc.field}>
                <Text>Peso (0 - 5):</Text>
                <TextInput
                style={stylescalc.input}
                keyboardType="numeric"
                value={redacao}
                onChangeText={setRedacao}
                />
            </View>
            <View style={stylescalc.field}>
                <Text>Peso (0 - 5):</Text>
                <TextInput
                style={stylescalc.input}
                keyboardType="numeric"
                value={redacao}
                onChangeText={setRedacao}
                />
            </View>
            <View style={stylescalc.field}>
                <Text>Peso (0 - 5):</Text>
                <TextInput
                style={stylescalc.input}
                keyboardType="numeric"
                value={redacao}
                onChangeText={setRedacao}
                />
            </View>

      </View>

      </View>


      <View style={stylescalc.buttonContainer}>
        <Button title="CALCULAR" onPress={calcularPontuacao}  />
        <Button title="LIMPAR" onPress={limparCampos} color="red" />
      </View>
    </View>
    <FooterComponent/>
    </ScrollView>
  );
}
