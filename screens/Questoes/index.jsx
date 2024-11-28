import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import Cabecalho from '../../components/header';
import FooterComponent from '../../components/footer';
import { useNavigation } from '@react-navigation/native';

// Array de dicas
const tipsData = [
  {
    title: '1. Planeje seu tempo',
    description: 'Crie um cronograma de estudos e siga-o rigorosamente. Divida seu tempo entre diferentes matérias e revise regularmente.',
    icon: 'access-time',
  },
  {
    title: '2. Estude com eficiência',
    description: 'Utilize técnicas de estudo como resumos, mapas mentais e flashcards para reter melhor as informações.',
    icon: 'book',
  },
  {
    title: '3. Faça exercícios',
    description: 'Resolva questões de vestibulares anteriores e simulados para se familiarizar com o formato das provas.',
    icon: 'assignment',
  },
  {
    title: '4. Cuide de sua saúde',
    description: 'Mantenha uma rotina equilibrada com boas noites de sono, alimentação saudável e atividades físicas.',
    icon: 'favorite',
  },
  {
    title: '5. Não estude sozinho',
    description: 'Estude em grupo para trocar conhecimentos e esclarecer dúvidas. Ensinar os outros também ajuda a consolidar o aprendizado.',
    icon: 'group',
  },
  {
    title: '6. Defina metas diárias',
    description: 'Estabeleça pequenas metas diárias para manter a motivação e medir seu progresso ao longo do tempo.',
    icon: 'flag',
  },
  {
    title: '7. Faça pausas regulares',
    description: 'Intercale sessões de estudo com pausas curtas para descansar a mente e aumentar a produtividade.',
    icon: 'pause',
  },
  {
    title: '8. Utilize recursos online',
    description: 'Explore vídeos, podcasts e plataformas de cursos para complementar seus estudos de maneira interativa.',
    icon: 'language',
  },
];



export default function StudyTips() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Cabecalho />
      <View style={styles.header}>
        <Text style={styles.headertexto}>Dicas de Estudos para o Vestibular</Text>
      </View>
      <View style={styles.content}>
        {tipsData.map((tip, index) => (
          <View key={index} style={styles.tip}>
            <Icon name={tip.icon} size={30} color="#38B6FF" style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.tipTitle}>{tip.title}</Text>
              <Text style={styles.tipDescription}>{tip.description}</Text>
            </View>
          </View>
        ))}
      </View>
      <FooterComponent />
    </ScrollView>
  );
}
