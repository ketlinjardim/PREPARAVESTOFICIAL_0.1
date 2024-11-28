import React, { useState } from 'react';
import { View, Text, SectionList, TouchableOpacity, Modal, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import Cabecalho from '../../components/header';
import FooterComponent from '../../components/footer';

const examData = [
  {
    title: 'ENEM',
    data: [
      {
        year: 2024,
        provas: [
          { type: 'DIA 1', link: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2024_PV_impresso_D1_CD1.pdf' },
          { type: 'DIA 2', link: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2024_PV_impresso_D2_CD7.pdf' },
          { type: 'Gabarito DIA 1', link: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2024_GB_impresso_D1_CD1.pdf' },
          { type: 'Gabarito DIA 2', link: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2024_GB_impresso_D2_CD7.pdf' }
        ]
      },
      {
        year: 2023,
        provas: [
          { type: 'DIA 1', link: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2023_PV_impresso_D1_CD1.pdf' },
          { type: 'DIA 2', link: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2023_PV_impresso_D2_CD7.pdf' },
          { type: 'Gabarito DIA 1', link: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2023_GB_impresso_D1_CD1.pdf' },
          { type: 'Gabarito DIA 2', link: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2023_GB_impresso_D2_CD7.pdf' }
        ]
      },
      {
        year: 2022,
        provas: [
          { type: 'DIA 1', link: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2022_PV_impresso_D1_CD1.pdf' },
          { type: 'DIA 2', link: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2022_PV_digital_D2_CD7.pdf' },
          { type: 'Gabarito DIA 1', link: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2022_GB_impresso_D1_CD1.pdf' },
          { type: 'Gabarito DIA 2', link: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2022_GB_digital_D2_CD7.pdf' }
        ]
      },
      {
        year: 2021,
        provas: [
          { type: 'DIA 1', link: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2021_PV_impresso_D1_CD1.pdf' },
          { type: 'DIA 2', link: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2021_PV_impresso_D2_CD7.pdf' },
          { type: 'Gabarito DIA 1', link: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2021_GB_impresso_D1_CD1.pdf' },
          { type: 'Gabarito DIA 2', link: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2021_GB_impresso_D2_CD7.pdf' }
        ]
      }
    ]
  },
  
  {
    title: 'Fuvest (Usp)',
    data: [
      { 
        year: 2024, 
        provas: [
          { type: 'Primeira Fase', link: 'https://www.fuvest.br/wp-content/uploads/fuvest2024_primeira_fase_prova_V.pdf' },
          { type: 'Segunda fase-DIA 1', link: 'https://www.curso-objetivo.br/vestibular/resolucao-comentada/fuvest/2024_2fase/1dia/fuvest2024_2fase_1dia_prova.pdf' },
          { type: 'Segunda fase-DIA 2', link: 'https://www.curso-objetivo.br/vestibular/resolucao-comentada/fuvest/2024_2fase/2dia/fuvest2024_2fase_2dia_prova.pdf' },
          { type: 'Gabarito Primeira Fase', link: 'https://www.fuvest.br/wp-content/uploads/fuvest2024_gabarito_primeira_fase.pdf' }
        ]
      },
      { 
        year: 2023, 
        provas: [
          { type: 'Primeira Fase', link: 'https://acervo.fuvest.br/fuvest/2023/fuvest2023_primeira_fase_prova_V.pdf' },
          { type: 'Segunda fase-DIA 1', link: 'https://acervo.fuvest.br/fuvest/2023/fuvest_2023_segunda_fase_dia_1.pdf' },
          { type: 'Segunda fase-DIA 2', link: 'https://acervo.fuvest.br/fuvest/2023/fuvest_2023_segunda_fase_dia_2.pdf' },
          { type: 'Gabarito Primeira Fase', link: 'https://www.curso-objetivo.br/vestibular/resolucao-comentada/fuvest/2023_1fase/fuvest2023_1fase_gabarito.pdf' }

        ]
      },
      { 
        year: 2022, 
        provas: [
          { type: 'Primeira Fase', link: 'https://www.fuvest.br/wp-content/uploads/fuvest_2022_primeira_fase_tipo_K.pdf' },
          { type: 'Segunda fase-DIA 1', link: 'https://acervo.fuvest.br/fuvest/2022/fuvest_2022_segunda_fase_dia_1.pdf' },
          { type: 'Segunda fase-DIA 2', link: 'https://acervo.fuvest.br/fuvest/2022/fuvest_2022_segunda_fase_dia_2.pdf' },
          { type: 'Gabarito Primeira Fase', link: 'https://acervo.fuvest.br/fuvest/2022/fuvest_2022_primeira_fase_gabarito_retificado.pdf' },
        ]
      },
      { 
        year: 2021, 
        provas: [
          { type: 'Primeira Fase', link: 'https://acervo.fuvest.br/fuvest/2021/fuvest_2021_primeira_fase.pdf' },
          { type: 'Segunda fase-DIA 1', link: 'https://acervo.fuvest.br/fuvest/2021/fuv2021_2fase_dia_1.pdf' },
          { type: 'Segunda fase-DIA 2', link: 'https://acervo.fuvest.br/fuvest/2021/fuv2021_2fase_dia_2.pdf' },
          { type: 'Gabarito Primeira Fase', link: 'https://www.curso-objetivo.br/vestibular/resolucao-comentada/fuvest/2021_1fase/fuvest2021_1fase_gabarito.pdf' },

        ]
      },
      { 
        year: 2020, 
        provas: [
          { type: 'Primeira Fase', link: 'https://acervo.fuvest.br/fuvest/2020/fuvest_2020_primeira_fase_prova_V.pdf' },
          { type: 'Segunda fase-DIA 1', link: 'https://acervo.fuvest.br/fuvest/2020/fuv2020_2fase_dia_1.pdf' },
          { type: 'Segunda fase-DIA 2', link: 'https://acervo.fuvest.br/fuvest/2020/fuv2020_2fase_dia_2.pdf' },
          { type: 'Gabarito Primeira Fase', link: 'https://acervo.fuvest.br/fuvest/2020/fuvest_2020_primeira_fase_gabaritos.pdf' }
        ]
      },
    ]},  
    {
      title: 'Comvest (Unicamp)',
      data: [
          { 
              year: 2024, 
              provas: [
                  { type: 'Primeira Fase', link: 'https://www.comvest.unicamp.br/vest2024/F1/f12024T_X.pdf' },
                  { type: 'Gabarito Primeira Fase', link: 'https://www2.curso-objetivo.br/vestibular/resolucao-comentada/unicamp/2024_1fase/unicamp2024_1fase_gabarito_T_X.pdf' }
              ]
          },
          { 
              year: 2023, 
              provas: [
                  { type: 'Primeira Fase', link: 'https://www.comvest.unicamp.br/vest2023/F1/f12023Q_Z.pdf' },
                  { type: 'Gabarito Primeira Fase', link: 'https://s1.static.brasilescola.uol.com.br/vestibular/2022/11/gabaritos-1-fase-vestibular-2023-unicamp.pdf' }
              ]
          },
          { 
              year: 2022, 
              provas: [
                  { type: 'Primeira Fase', link: 'https://www.comvest.unicamp.br/vest2022/F1/f12022Q_X.pdf' },
                  { type: 'Gabarito Primeira Fase', link: 'https://www.comvest.unicamp.br/wp-content/uploads/2021/11/gabarito_2022_DIVULGA.pdf' }
              ]
          },
          { 
              year: 2021, 
              provas: [
                  { type: 'Primeira Fase', link: 'https://www.comvest.unicamp.br/vest2021/F1/f12021Q_Z.pdf' },
                  { type: 'Gabarito Primeira Fase', link: 'https://www.comvest.unicamp.br/wp-content/uploads/2021/01/DIA1_gabarito_2021.pdf' }
              ]
          },
          { 
              year: 2020, 
              provas: [
                  { type: 'Primeira Fase', link: 'https://www.comvest.unicamp.br/vest2020/F1/f12020Q_X.pdf' },
                  { type: 'Gabarito Primeira Fase', link: 'https://www.comvest.unicamp.br/wp-content/uploads/2019/11/gabarito2020.pdf' }
              ]
          },
      ],
  },
  
  {
    title: 'Vunesp (Unesp)',
    data: [
      {
        year: 2024,
        provas: [
          { type: 'Prova 1', link: 'https://cdn.blog.estrategiavestibulares.com.br/vestibulares/wp-content/uploads/2023/11/unesp-2024-1-fase.pdf' },
          { type: 'Prova 2', link: 'https://www.curso-objetivo.br/vestibular/resolucao-comentada/unesp/2024_2/2fase/UNESP2024_2fase_prova.pdf' },
          { type: 'Gabarito Prova 1', link: 'https://www.curso-objetivo.br/vestibular/resolucao-comentada/unesp/2024/1fase/UNESP2024_1fase_gabarito.pdf' },
          { type: 'Gabarito Prova 2', link: 'https://www.curso-objetivo.br/vestibular/resolucao-comentada/unesp/unesp2024_2fase.aspx' }
        ]
      },
      {
        year: 2023,
        provas: [
          { type: 'Prova 1', link: 'https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2023/11/prova-unesp-2023.pdf' },
          { type: 'Prova 2', link: 'https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2023/11/prova-segunda-fase-unesp-2023.pdf' },
          { type: 'Gabarito Prova 1', link: 'https://www.curso-objetivo.br/vestibular/resolucao-comentada/unesp/2023/1fase/UNESP2023_1fase_gabarito.pdf' },
          { type: 'Gabarito Prova 2', link: 'https://www.curso-objetivo.br/vestibular/resolucao-comentada/unesp/2023/2fase/UNESP2023_2fase_gabarito.pdf' }
        ]
      },
      {
        year: 2022,
        provas: [
          { type: 'Prova 1 versão 1', link: 'https://vestibular.unesp.br/Home/documentos/provafase1_biologicas' },
          { type: 'Prova 1 versão 2', link: 'https://vestibular.unesp.br/Home/documentos/provafase1_exatashumanas.pdf' },
          { type: 'Gabarito Prova 1 versão 1', link: 'https://www.curso-objetivo.br/vestibular/resolucao-comentada/unesp/2022/1fase/1dia/UNESP2022_1fase_gabarito.pdf' },
          { type: 'Gabarito Prova 1 versão 2', link: 'https://www.curso-objetivo.br/vestibular/resolucao-comentada/unesp/2022/1fase/2dia/UNESP2022_1fase_gabarito.pdf' }
        ]
      },
      {
        year: 2021,
        provas: [
          { type: 'Prova 1', link: 'https://www.curso-objetivo.br/vestibular/resolucao-comentada/unesp/2021/1fase/1dia/UNESP2021_1fase_prova.pdf' },
          { type: 'Prova 2', link: 'https://vestibular.unesp.br/Home/2021/caderno_2afase_unesp2021_versao_1.pdf' },
          { type: 'Gabarito Prova 1', link: 'https://www.curso-objetivo.br/vestibular/resolucao-comentada/unesp/2021/1fase/1dia/UNESP2021_1fase_gabarito.pdf' },
          { type: 'Gabarito Prova 2', link: 'https://www.curso-objetivo.br/vestibular/resolucao-comentada/unesp/2021/2fase/UNESP2021_2fase_gabarito.pdf' }
        ]
      },
      {
        year: 2020,
        provas: [
          { type: 'Prova 1', link: 'https://vestibular.unesp.br/Home/2020/unesp_caderno_de_questoes_prova_de_conhecimentos_gerais_15_nov_2019__v1.pdf' },
          { type: 'Prova 2 versão 1', link: 'https://vestibular.unesp.br/Home/unesp-2a-fase-2020-caderno_ciencias_humanas.pdf' },
          { type: 'Prova 2 versão 2', link: 'https://vestibular.unesp.br/Home/unesp-2a-fase-2020-caderno_ciencias_natur_matem.pdf' },
          { type: 'Prova 2 versão 3', link: 'https://vestibular.unesp.br/Home/unesp-2a-fase-2020-caderno-linguagens.pdf' },
          { type: 'Gabarito Prova 1', link: 'https://www.curso-objetivo.br/vestibular/resolucao-comentada/unesp/2020/1fase/UNESP2020_1fase_gabarito.pdf' },
          { type: 'Gabarito Prova 2', link: 'https://www.curso-objetivo.br/vestibular/resolucao-comentada/unesp/unesp2020.aspx' }
        ]
      }
    ]
  },
  
];




const ExamListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProvas, setSelectedProvas] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);

  const openLink = (url) => {
    Linking.openURL(url).catch(() => {
      Alert.alert('Erro', 'Não foi possível abrir o link.');
    });
  };

  const openModal = (provas, year) => {
    setSelectedProvas(provas);
    setSelectedYear(year);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => openModal(item.provas, item.year)}>
      <View style={styles.itemContent}>
        <Icon name="picture-as-pdf" size={30} color="#eee5e5" />
        <View style={styles.textContainer}>
          <Text style={styles.yearText}>Prova {item.year}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section }) => (
    <Text style={styles.sectionHeader}>{section.title}</Text>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={examData}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => `${item.year}-${index}`}
        ListHeaderComponent={
          <>
            <Cabecalho />
            <Text style={styles.title}>Provas de Vestibulares</Text>
          </>
        }
        ListFooterComponent={<FooterComponent />}
      />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Escolha a prova de {selectedYear}</Text>
            {selectedProvas.map((prova, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={() => {
                  setModalVisible(false);
                  openLink(prova.link);
                }}
              >
                <Text style={styles.buttonText}>{prova.type}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.buttonClose} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ExamListScreen;
