import React from 'react';
import { View, Text, ScrollView } from 'react-native';
 import {styles} from './style'
import { useNavigation } from '@react-navigation/native';
import Cabecalho from '../../components/header';
import FooterComponent from '../../components/footer';

 export default function EstatisticasENEM(){

  const navigation = useNavigation();

  return (
    <ScrollView >
               <Cabecalho/>

      <View style={styles.statsSection}>
        <Text style={styles.sectionTitle}>Estatísticas do ENEM</Text>
        <View style={styles.statsCardContainer}>
          {/* Estatísticas do ENEM */}
          <View style={styles.statsCard}>
            <Text style={styles.statsNumber}>50%</Text>
            <Text style={styles.statsText}>das questões de Matemática são relacionadas a Funções.</Text>
          </View>
          <View style={styles.statsCard}>
            <Text style={styles.statsNumber}>30%</Text>
            <Text style={styles.statsText}>das provas de Ciências Humanas abordam temas de Geopolítica.</Text>
          </View>
          <View style={styles.statsCard}>
            <Text style={styles.statsNumber}>20%</Text>
            <Text style={styles.statsText}>das questões de Ciências da Natureza envolvem Química Orgânica.</Text>
          </View>
          <View style={styles.statsCard}>
            <Text style={styles.statsNumber}>40%</Text>
            <Text style={styles.statsText}>das questões de Linguagens e Códigos são sobre Interpretação de Textos.</Text>
          </View>

          {/* Estatísticas da FUVEST */}
          <Text style={styles.sectionTitle}>Estatísticas da FUVEST</Text>

          <View style={styles.statsCard}>
            <Text style={styles.statsNumber}>35%</Text>
            <Text style={styles.statsText}>das questões da FUVEST são sobre Matemática.</Text>
          </View>
          <View style={styles.statsCard}>
            <Text style={styles.statsNumber}>20%</Text>
            <Text style={styles.statsText}>das questões de Física na FUVEST envolvem Eletricidade.</Text>
          </View>
          <View style={styles.statsCard}>
            <Text style={styles.statsNumber}>25%</Text>
            <Text style={styles.statsText}>das questões de Ciências Humanas na FUVEST focam em História do Brasil.</Text>
          </View>

          {/* Estatísticas da UNESP */}
          <Text style={styles.sectionTitle}>Estatísticas da UNESP</Text>

          <View style={styles.statsCard}>
            <Text style={styles.statsNumber}>15%</Text>
            <Text style={styles.statsText}>das provas da UNESP são sobre Filosofia e Sociologia.</Text>
          </View>
          <View style={styles.statsCard}>
            <Text style={styles.statsNumber}>30%</Text>
            <Text style={styles.statsText}>das questões de Química na UNESP são sobre Química Geral.</Text>
          </View>
          <View style={styles.statsCard}>
            <Text style={styles.statsNumber}>35%</Text>
            <Text style={styles.statsText}>das questões de Biologia na UNESP são sobre Genética.</Text>
          </View>

          {/* Estatísticas da UNICAMP */}
          <Text style={styles.sectionTitle}>Estatísticas da UNICAMP</Text>

          <View style={styles.statsCard}>
            <Text style={styles.statsNumber}>40%</Text>
            <Text style={styles.statsText}>das questões de Linguagens na UNICAMP focam em Literatura Brasileira.</Text>
          </View>
          <View style={styles.statsCard}>
            <Text style={styles.statsNumber}>25%</Text>
            <Text style={styles.statsText}>das questões de Física na UNICAMP são sobre Mecânica.</Text>
          </View>
          <View style={styles.statsCard}>
            <Text style={styles.statsNumber}>20%</Text>
            <Text style={styles.statsText}>das questões de Matemática na UNICAMP envolvem Geometria Analítica.</Text>
          </View>
        </View>

       

        </View>
          
    <FooterComponent/>

      
    </ScrollView>
  );
};



