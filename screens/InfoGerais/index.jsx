import { useEffect, useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { estilo } from './style';
import * as Font from 'expo-font';
import Cabecalho from '../../components/header';
import FooterComponent from '../../components/footer';

// Importe a fonte
import KollektifBold from '../../assets/fonts/Kollektif-Bold.ttf';
import Kollektif from '../../assets/fonts/Kollektif.ttf';

export default function Informacoes() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        KollektifBold: KollektifBold,
        Kollektif: Kollektif,
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>;
  }

  return (
    <ScrollView style={estilo.container}>
      <Cabecalho />

      <View style={estilo.contentContainer}>
        <Text style={estilo.titulo2}>Guia de Vestibulares 2024</Text>
        <Text style={estilo.subtitulo2}>
          Informações detalhadas sobre o ENEM e outros vestibulares importantes no Brasil.
        </Text>

        <View style={estilo.secao}>
          <Text style={estilo.titulo}>ENEM</Text>
          <Text style={estilo.subtitulo}>Exame Nacional do Ensino Médio</Text>

          <View style={estilo.secao1}>
            <Text style={estilo.titulos}>Datas e Inscrição:</Text>
            <Text style={estilo.textos}>
              O ENEM é realizado anualmente, geralmente no mês de novembro, e a inscrição é feita online pelo site do INEP. Para 2024, as inscrições ocorrem entre maio e junho.
            </Text>
            <Text style={estilo.textos}>
              A taxa de inscrição é de R$ 85,00, mas há a possibilidade de solicitar isenção, principalmente para estudantes de baixa renda ou inscritos no CadÚnico.
            </Text>
            <Pressable
              onPress={() => window.open('https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem', 'Vestibular')}>
              <Text style={estilo.link}>Acesse o site oficial do ENEM</Text>
            </Pressable>

            <Text style={estilo.titulos}>Formato da Prova:</Text>
            <Text style={estilo.textos}>
              O ENEM é composto por quatro provas objetivas, com 45 questões de múltipla escolha cada, divididas em:
              - Linguagens, Códigos e suas Tecnologias (inclui prova de Língua Portuguesa, Literatura, Inglês ou Espanhol)
              - Matemática e suas Tecnologias
              - Ciências Humanas e suas Tecnologias (História, Geografia, Sociologia e Filosofia)
              - Ciências da Natureza e suas Tecnologias (Química, Física e Biologia)
            </Text>
            <Text style={estilo.textos}>
              Além das provas objetivas, há uma redação dissertativa-argumentativa sobre um tema de relevância social. Os textos devem seguir a estrutura padrão de introdução, desenvolvimento e conclusão, e o respeito aos direitos humanos é critério importante de avaliação.
            </Text>

            <Text style={estilo.titulos}>Cotas e Ações Afirmativas:</Text>
            <Text style={estilo.textos}>
              O ENEM é a principal porta de entrada para universidades públicas através do Sisu (Sistema de Seleção Unificada) e também para o Prouni e FIES, que concedem bolsas de estudos em instituições privadas.
            </Text>
            <Text style={estilo.textos}>
              Para promover a inclusão, muitas universidades adotam políticas de cotas sociais e raciais, com reserva de vagas para estudantes de escolas públicas, negros, pardos, indígenas e pessoas com deficiência.
            </Text>
          </View>
        </View>

        <View style={estilo.secao}>
          <Text style={estilo.titulo}>Fuvest</Text>
          <Text style={estilo.subtitulo}>Fundação Universitária para o Vestibular (USP)</Text>

          <View style={estilo.secao1}>
            <Text style={estilo.titulos}>Datas e Inscrição:</Text>
            <Text style={estilo.textos}>
              A Fuvest é o vestibular da Universidade de São Paulo (USP). A prova da primeira fase ocorre geralmente em novembro, com a segunda fase em janeiro.
            </Text>
            <Text style={estilo.textos}>
              As inscrições são realizadas entre agosto e setembro, com taxa de inscrição de aproximadamente R$ 210,00. Há isenção para estudantes de baixa renda.
            </Text>
            <Pressable
              onPress={() => window.open('https://www.fuvest.br/', 'Vestibular')}>
              <Text style={estilo.link}>Acesse o site oficial da Fuvest</Text>
            </Pressable>

            <Text style={estilo.titulos}>Formato da Prova:</Text>
            <Text style={estilo.textos}>
              A prova da Fuvest é dividida em duas fases:
              - Primeira Fase: Prova de múltipla escolha com 90 questões, abrangendo diversas disciplinas do ensino médio.
              - Segunda Fase: Prova dissertativa com questões específicas para cada área de conhecimento e uma redação.
            </Text>

            <Text style={estilo.titulos}>Política de Cotas:</Text>
            <Text style={estilo.textos}>
              A USP adota o sistema de cotas, oferecendo vagas para candidatos que cursaram o ensino médio integralmente em escolas públicas e também através do sistema de cotas raciais para negros, pardos e indígenas.
            </Text>
          </View>
        </View>


        <View style={estilo.secao}>
          <Text style={estilo.titulo}>Unicamp</Text>
          <Text style={estilo.subtitulo}>Comissão Permanente para os Vestibulares (Comvest)</Text>

          <View style={estilo.secao1}>
            <Text style={estilo.titulos}>Datas e Inscrição:</Text>
            <Text style={estilo.textos}>
              O vestibular da Unicamp é realizado em duas fases, com a primeira ocorrendo em novembro e a segunda fase em janeiro.
            </Text>
            <Text style={estilo.textos}>
              A taxa de inscrição é de cerca de R$ 210,00. A universidade oferece isenção da taxa para estudantes de baixa renda e candidatos que cursaram o ensino médio em escolas públicas.
            </Text>
            <Pressable
              onPress={() => window.open('https://www.comvest.unicamp.br/', 'Vestibular')}>
              <Text style={estilo.link}>Acesse o site oficial da Comvest</Text>
            </Pressable>

            <Text style={estilo.titulos}>Formato da Prova:</Text>
            <Text style={estilo.textos}>
              - Primeira Fase: Prova objetiva com 90 questões de múltipla escolha, abrangendo todas as áreas do conhecimento.
              - Segunda Fase: Provas dissertativas de acordo com a área escolhida, além de uma redação.
            </Text>

            <Text style={estilo.titulos}>Política de Cotas:</Text>
            <Text style={estilo.textos}>
              A Unicamp possui um sistema de cotas étnico-raciais, além de vagas destinadas a estudantes de escolas públicas. Também há vagas reservadas para candidatos autodeclarados pretos, pardos e indígenas.
            </Text>
          </View>
        </View>


        <View style={estilo.secao}>
          <Text style={estilo.titulo}>Vunesp</Text>
          <Text style={estilo.subtitulo}>Vestibular da Unesp</Text>

          <View style={estilo.secao1}>
            <Text style={estilo.titulos}>Datas e Inscrição:</Text>
            <Text style={estilo.textos}>
              A Vunesp organiza o vestibular da Unesp, com provas aplicadas em duas fases: a primeira em novembro e a segunda em dezembro.
            </Text>
            <Text style={estilo.textos}>
              As inscrições acontecem entre agosto e outubro. A taxa de inscrição é de aproximadamente R$ 210,00, com possibilidade de isenção.
            </Text>
            <Pressable
              onPress={() => window.open('https://www.vunesp.com.br/', 'Vestibular')}>
              <Text style={estilo.link}>Acesse o site oficial da Vunesp</Text>
            </Pressable>

            <Text style={estilo.titulos}>Formato da Prova:</Text>
            <Text style={estilo.textos}>
              - Primeira Fase: Prova objetiva com 90 questões de múltipla escolha.
              - Segunda Fase: Prova dissertativa com questões específicas de acordo com a área de estudo.
            </Text>

            <Text style={estilo.titulos}>Política de Cotas:</Text>
            <Text style={estilo.textos}>
              A Unesp possui cotas para alunos de escolas públicas e também cotas raciais. Parte das vagas é destinada a candidatos autodeclarados pretos, pardos ou indígenas.
            </Text>
          </View>
        </View>
      </View>

      <FooterComponent />
    </ScrollView>
  );
}