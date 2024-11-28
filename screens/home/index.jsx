import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import Cabecalho from '../../components/header';
import styles from './style'; // Importa os estilos
import FooterComponent from '../../components/footer';
import { useNavigation } from "@react-navigation/native";

export default function HomePage() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>

<Cabecalho/>
      

      {/* Seção de Introdução */}
      <View style={styles.introSection}>
        <Text style={styles.introTitle}>Bem-vindo ao Preparavest</Text>
        <Text style={styles.introText}>
          Encontre tudo o que você precisa para se preparar para o vestibular: conteúdos, provas anteriores e questões.
        </Text>
      </View>
     
        <Image
          style={styles.logo}
          source={require('../../assets/Professores/BannerPrincipal.jpeg')} // Logo da Preparavest
        />
        
  

     {/* Seção de Conteúdos */}
     <View style={styles.contentSection}>
        <Text style={styles.sectionTitle}>Nossos Conteúdos</Text>
        <View style={styles.contentCardContainer}>
          <TouchableOpacity style={styles.contentCard} onPress={() => navigation.navigate("Conteudo relevante")}
          >
            <Text style={styles.cardTitle}>Conteúdos por Matéria</Text>
            <Text style={styles.cardText}>Acesse resumos e dicas dos principais conteúdos cobrados em vestibulares.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentCard} onPress={() => navigation.navigate("Pagina Enem")}>
            <Text style={styles.cardTitle}>Provas Anteriores</Text>
            <Text style={styles.cardText}>Baixe e resolva provas anteriores de vestibulares renomados.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentCard} onPress={() => navigation.navigate("Informacoes")}>
            <Text style={styles.cardTitle}>Informações Gerais</Text>
            <Text style={styles.cardText}>Tudo que você precisa saber sobre os vestibulres.</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.statsSection}>
        <Text style={styles.sectionTitle}>Estatísticas do Vestibular</Text>
        <View style={styles.statsCardContainer}>
          <View style={styles.statsCard}>
            <Text style={styles.statsNumber}>50%</Text>
            <Text style={styles.statsText}>das questões de Matemática são relacionadas a Funções.</Text>
          </View>
          <View style={styles.statsCard}>
            <Text style={styles.statsNumber}>30%</Text>
            <Text style={styles.statsText}>das provas de Ciências Humanas abordam temas de Geopolítica.</Text>
          </View>
        </View>
      </View>

      {/* Seção de Dicas */}
      <View style={styles.tipsSection}>
        <Text style={styles.sectionTitle}>Dicas de Estudo</Text>
        <View style={styles.tipCardContainer}>
          <View style={styles.tipCard}>
            <Text style={styles.tipText}>Crie um cronograma de estudos e dedique mais tempo às suas matérias de dificuldade.</Text>
          </View>
          <View style={styles.tipCard}>
            <Text style={styles.tipText}>Resolva o máximo de questões de provas anteriores para se acostumar com o formato.</Text>
          </View>
        </View>
      </View>

  <FooterComponent/>
    </ScrollView>
  );
}
