import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, ScrollView } from 'react-native';
import { stylescalc } from './style';
import Cabecalho from '../../components/header';
import FooterComponent from '../../components/footer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import apiConfig from "../../utils/api";

export default function CalculadoraEnem() {
  const navigation = useNavigation();

  // Estados para armazenar os valores de acertos de cada área
  const [cienciasHumanas, setCienciasHumanas] = useState('');
  const [linguagens, setLinguagens] = useState('');
  const [cienciasNatureza, setCienciasNatureza] = useState('');
  const [matematica, setMatematica] = useState('');
  const [redacao, setRedacao] = useState('');

  const [id, setId] = useState('')

  const [pesocienciasHumanas, setpesoCienciasHumanas] = useState('');
  const [pesolinguagens, setpesoLinguagens] = useState('');
  const [pesocienciasNatureza, setpesoCienciasNatureza] = useState('');
  const [pesomatematica, setpesoMatematica] = useState('');
  const [pesoredacao, setpesoRedacao] = useState('');

  // Carregar o estado de login do AsyncStorage
  useEffect(() => {
    const checkLoginStatus = async () => {
      const loginStatus = await AsyncStorage.getItem('verificaLogin');
      if (loginStatus === 'false') {
        navigation.navigate("Login");
        return;
      }
    };
    checkLoginStatus();
  }, []);

  function validarInputs() {
    if (
      !cienciasHumanas ||
      !linguagens ||
      !cienciasNatureza ||
      !matematica ||
      !redacao ||
      !pesocienciasHumanas ||
      !pesolinguagens ||
      !pesocienciasNatureza ||
      !pesomatematica ||
      !pesoredacao
    ) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos antes de calcular.');
      return false;
    }
    return true;
  }

  // Função para calcular a pontuação total e enviar para a API
  async function calcularPontuacao() {
    if (!validarInputs()) {
      return; // Interrompe se a validação falhar
    }
    const id = await AsyncStorage.getItem('id')
    setId(id)
    // Enviar dados para a API
    try {
      let response = await apiConfig.post('/media', {
        cienciasHumanas: cienciasHumanas,
        linguagens: linguagens,
        cienciasNatureza: cienciasNatureza,
        matematica: matematica, 
        redacao: redacao,

        usuario_id: id,

        pesohuma: pesocienciasHumanas,
        pesoling: pesolinguagens,
        pesonatu: pesocienciasNatureza,
        pesomat: pesomatematica,
        pesoreda: pesoredacao,
      });
    
      if (response.status === 200) {
        const {title} = response.data;
        console.log(title);
        Alert.alert('Resultado Aproximado ENEM', JSON.stringify(response.data));
        
      } else {
        console.log('Erro', 'Não foi possível enviar os dados para a API');
      }
    } catch (error) {
      console.error("Erro ao enviar dados para a API:", error);
      console.log('Erro', 'Ocorreu um erro ao enviar os dados para a API');
    }
  };

  const limparCampos = () => {
    setCienciasHumanas('');
    setLinguagens('');
    setCienciasNatureza('');
    setMatematica('');
    setRedacao('');
    setpesoCienciasHumanas('');
    setpesoLinguagens('');
    setpesoCienciasNatureza('');
    setpesoMatematica('');
    setpesoRedacao('');
  };


  return (
    <ScrollView >
        <Cabecalho/>
        <View style={stylescalc.container}>
        <View style={stylescalc.infoBox}>
      <Text style={stylescalc.infoTitle}>Bem-vindo ao Calculador de Notas do ENEM!</Text>
      <Text style={stylescalc.infoText}>
        Aqui você pode estimar sua pontuação com base no desempenho nas áreas avaliadas no exame. 
        Insira o número de acertos em cada prova e o peso atribuído a cada uma para calcular sua nota final.
      </Text>
      <Text style={stylescalc.infoText}>
        Este cálculo é apenas uma estimativa e não substitui o resultado oficial do INEP. Boa sorte!
      </Text>
    </View>
        {/* Como Funciona */}
        <View style={stylescalc.infoBox}>
      <Text style={stylescalc.infoSubtitle}>Como funciona?</Text>
      <Text style={stylescalc.infoText}>
        - Insira o número da média de acertos em cada área do exame: Ciências Humanas, Linguagens, Ciências da Natureza, Matemática e Redação.{"\n"}
        - Atribua os pesos correspondentes a cada área, conforme o curso que deseja ingressar.{"\n"}
        - Clique em *Calcular* para obter sua pontuação estimada!
      </Text>
    </View>

    

      <Text style={stylescalc.title}>Digite o número de acertos em cada prova:</Text>
      <View style={stylescalc.espaco}>
      <View>
      <View style={stylescalc.field}>
        <Text>Ciências Humanas (0 - 1000):</Text>
        <TextInput
          style={stylescalc.input}
          keyboardType="numeric"
          value={cienciasHumanas}
          onChangeText={(text) => {
            if (/^\d*\.?\d*$/.test(text) && text.length <= 6) { // Permite números e ponto com até 6 caracteres
              const numericValue = parseFloat(text); // Converte para número
              if (numericValue <= 1000 || text === '') { // Garante que seja menor ou igual a 1000 ou permite apagar o campo
                setCienciasHumanas(text);
              }
              else{
                alert("A nota deve ser igual ou menor a 1000")
              }
            }
           
          }}
        />
      </View>

      <View style={stylescalc.field}>
        <Text>Linguagens e Códigos (0 - 1000) :</Text>
        <TextInput
          style={stylescalc.input}
          keyboardType="numeric"
          value={linguagens}
          onChangeText={(text) => {
            if (/^\d*\.?\d*$/.test(text) && text.length <= 6) {
              const numericValue = parseFloat(text);
              if (numericValue <= 1000 || text === '') {
                setLinguagens(text);
              }
              else{
                alert("A nota deve ser igual ou menor a 1000")
              }
            }
           
          }}
        />
      </View>

      <View style={stylescalc.field}>
        <Text>Ciências da Natureza (0 - 1000) :</Text>
        <TextInput
          style={stylescalc.input}
          keyboardType="numeric"
          value={cienciasNatureza}
          onChangeText={(text) => {
            if (/^\d*\.?\d*$/.test(text) && text.length <= 6) {
              const numericValue = parseFloat(text);
              if (numericValue <= 1000 || text === '') {
                setCienciasNatureza(text);
              }
              else{
                alert("A nota deve ser igual ou menor a 1000")
              }
            }
          }}
        />

      </View>

      <View style={stylescalc.field}>
        <Text>Matemática(0 - 1000) :</Text>
        <TextInput
          style={stylescalc.input}
          keyboardType="numeric"
          value={matematica}
          onChangeText={(text) => {
            if (/^\d*\.?\d*$/.test(text) && text.length <= 6) {
              const numericValue = parseFloat(text);
              if (numericValue <= 1000 || text === '') {
                setMatematica(text);
              }
              else{
                alert("A nota deve ser igual ou menor a 1000")
              }
            }
          }}
        />
     </View>

      <View style={stylescalc.field}>
        <Text>Redação (0 - 1000):</Text>
        <TextInput
          style={stylescalc.input}
          keyboardType="numeric"
          value={redacao}
          onChangeText={(text) => {
            if (/^\d*\.?\d*$/.test(text) && text.length <= 6) {
              const numericValue = parseFloat(text);
              if (numericValue <= 1000 || text === '') {
                setRedacao(text);
              }
               else{
                alert("A nota deve ser igual ou menor a 1000")
              }
            }
          }}
        />
       </View>

        </View>

      {/* pesos */}

      <View>
            <View style={stylescalc.field}>
                <Text>Peso(1 - 5):</Text>
                <TextInput
                style={stylescalc.input}
                keyboardType="numeric"
                value={pesocienciasHumanas}
                onChangeText={(text) => {
                  if (/^[1-5]$/.test(text)) {
                    setpesoCienciasHumanas(text); // Permite apenas números
                  }
                  else if (text === '') {
                    setpesoCienciasHumanas(''); // Permite apagar o campo
                  }
            
                }}
              
                />
            </View>
            <View style={stylescalc.field}>
                <Text>Peso (1 - 5):</Text>
                <TextInput
                style={stylescalc.input}
                keyboardType="numeric"
                value={pesolinguagens}
                onChangeText={(text) => {
                  if (/^[1-5]$/.test(text)) {
                    setpesoLinguagens(text); // Permite apenas números
                  }
                  else if (text === '') {
                    setpesoLinguagens(''); // Permite apagar o campo
                  }

            
                }}
              
                />
            </View>
            <View style={stylescalc.field}>
                <Text>Peso (1 - 5):</Text>
                <TextInput
                style={stylescalc.input}
                keyboardType="numeric"
                value={pesocienciasNatureza}
                onChangeText={(text) => {
                  if (/^[1-5]$/.test(text)) {
                    setpesoCienciasNatureza(text); // Permite apenas números
                  }
                  else if (text === '') {
                    setpesoCienciasNatureza(''); // Permite apagar o campo
                  }
            
                }}
              
                />
            </View>
            <View style={stylescalc.field}>
                <Text>Peso (1 - 5):</Text>
                <TextInput
                style={stylescalc.input}
                keyboardType="numeric"
                value={pesomatematica}
                onChangeText={(text) => {
                  if (/^[1-5]$/.test(text)) {
                    setpesoMatematica(text); // Permite apenas números
                  }
                  else if (text === '') {
                    setpesoMatematica(''); // Permite apagar o campo
                  }
            
                }}              
                />
            </View>
            <View style={stylescalc.field}>
                <Text>Peso (1 - 5):</Text>
                <TextInput
                style={stylescalc.input}
                keyboardType="numeric"
                value={pesoredacao}
                onChangeText={(text) => {
                  if (/^[1-5]$/.test(text)) {
                    setpesoRedacao(text); // Permite apenas números
                  }
                  else if (text === '') {
                    setpesoRedacao(''); // Permite apagar o campo
                  }
            
                }}
              
                />
            </View>

      </View>

      </View>


      <View style={stylescalc.buttonContainer}>
        <Button title="CALCULAR" onPress={calcularPontuacao}  />
        <Button title="LIMPAR" onPress={limparCampos} color="red" />
      </View>
      {/* Informações Importantes */}
    <View style={stylescalc.infoBox}>
      <Text style={stylescalc.infoSubtitle}>Informações importantes</Text>
      <Text style={stylescalc.infoText}>
        - O cálculo é apenas uma estimativa e não substitui o resultado oficial do INEP.{"\n"}
        - As notas variam com base na Teoria de Resposta ao Item (TRI), que considera a dificuldade das questões e a coerência das respostas.{"\n"}
        - As notas máximas podem chegar a **1000 pontos** em Matemática e Redação, e cerca de **880 pontos** nas demais áreas.
      </Text>
    </View>
    </View>
    <FooterComponent/>
    </ScrollView>
  );
}