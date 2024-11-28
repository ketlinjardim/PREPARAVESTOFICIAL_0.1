import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity,Image,Pressable, Linking } from 'react-native';
import { estilo } from './style';
import * as Font from 'expo-font';
import Cabecalho from '../../components/header';
import FooterComponent from '../../components/footer';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Importe as fontes personalizadas
import KollektifBold from '../../assets/fonts/Kollektif-Bold.ttf';
import Kollektif from '../../assets/fonts/Kollektif.ttf';

// Componente de Acordeão Personalizado
const AccordionItem = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={estilo.accordionContainer}>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text style={estilo.accordionTitle}>{title}</Text>
      </TouchableOpacity>
      {expanded && <View style={estilo.accordionContent}>{children}</View>}
    </View>
  );
};

export default function Conteudorel() {
  // Carregamento das fontes personalizadas
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

  const navigation = useNavigation();

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <ScrollView>
      <View>
        <Cabecalho />

        <View style={estilo.contentContainer}>
          <Text style={estilo.textStyle}>Conteúdo Relevante</Text>

          <AccordionItem title="Linguagens, Códigos e suas Tecnologias" >
          <Text style={estilo.titulo1}> LÍNGUA PORTUGUESA </Text>

        
            <Text style={estilo.texto1}>- Interpretação de Textos: Habilidade de compreender e analisar diferentes tipos de textos, considerando contexto, intenção do autor e público-alvo.</Text>
            <Text style={estilo.texto1}>- Tendências Contemporâneas: Exploração das novas formas de comunicação e expressão na língua, influenciadas por tecnologia e mudanças sociais.</Text>
            <Text style={estilo.texto1}>- Estrutura e Formação das Palavras: Estudo da morfologia, incluindo raízes, prefixos e sufixos, essencial para entender a formação e flexão das palavras.</Text>
            <Text style={estilo.texto1}>- Tipos de Texto: Análise de diferentes tipos textuais (narrativos, descritivos, expositivos, argumentativos e injuntivos) e suas características estruturais.</Text>
            <Text style={estilo.texto1}>- Análise da Pessoa, do Espaço e do Tempo: Estudo dos elementos narrativos que afetam a construção do significado em um texto.</Text>
            <Text style={estilo.texto1}>- Funções da Linguagem: Compreensão das diversas funções da linguagem (referencial, emotiva, conativa, metalinguística, fática e poética).</Text>
            <Text style={estilo.texto1}>- Pontuação: Importância da pontuação na clareza e interpretação do texto, definindo pausas e entonações.</Text>
            <Text style={estilo.texto1}>- Narratividade: Análise da estrutura das histórias, incluindo enredo, personagens, conflito e desfecho.</Text>
            <Text style={estilo.texto1}>- Literatura: Estudo de obras literárias, seus estilos, temas e contextos históricos, refletindo a cultura e a experiência humana.</Text>
            <Text style={estilo.texto1}>- Classe de Palavras: Classificação gramatical das palavras (substantivos, verbos, adjetivos, etc.) e suas funções.</Text>
            <Text style={estilo.texto1}>- Verbo: Estudo das conjugações, tempos, modos e aspectos verbais, fundamentais para a construção de frases.</Text>

            <Text style={estilo.titulo1}> INGLÊS </Text>

            <Text style={estilo.texto1}>- Interpretação de Textos: Compreensão e análise de textos em inglês, considerando contextos culturais e históricos.</Text>
            <Text style={estilo.texto1}>- Domínio Lexical: Conhecimento do vocabulário, incluindo conotações e denotações, essencial para comunicação eficaz.</Text>
            <Text style={estilo.texto1}>- Identificação da Função do Texto: Entendimento do propósito do texto (informar, persuadir, entreter) e sua estrutura.</Text>

            <Text style={estilo.titulo1}> ARTES </Text>

            <Text style={estilo.texto1}>- Arte Contemporânea: Estudo da arte produzida desde o final do século XX, marcada pela diversidade de estilos e novas mídias.</Text>
            <Text style={estilo.texto1}>- Arte nos Séculos XV e XVI: Análise do Renascimento, focando no humanismo e na perspectiva, com artistas como Leonardo da Vinci e Michelangelo.</Text>
            <Text style={estilo.texto1}>- Elementos Básicos das Artes Plásticas: Compreensão de linha, forma, cor, textura, espaço e composição como fundamentos da criação artística.</Text>
            <Text style={estilo.texto1}>- Elementos Básicos de Música: Estudo de melodia, harmonia, ritmo, timbre e forma, essenciais para a construção e apreciação musical.</Text>
            <Text style={estilo.texto1}>- Música no Século XX: Análise da diversidade de estilos e gêneros que emergiram, refletindo mudanças sociais e tecnológicas.</Text>
          </AccordionItem>
         

          <AccordionItem title="Matemática e suas Tecnologias">
              <Text style={estilo.titulo1}> MATEMÁTICA </Text>

              <Text style={estilo.texto1}>- Geometria Plana: Estudo das figuras bidimensionais, suas propriedades, medidas e relações, incluindo ângulos, triângulos, quadriláteros e círculos.</Text>
              <Text style={estilo.texto1}>- Geometria Espacial: Análise das figuras tridimensionais, como prismas, cilindros, pirâmides, cones e esferas, e seus volumes e áreas.</Text>
              <Text style={estilo.texto1}>- Geometria Analítica: Estudo das figuras geométricas utilizando um sistema de coordenadas, incluindo retas, planos e cônicas (círculos, elipses, hipérboles).</Text>
              <Text style={estilo.texto1}>- Equação do Primeiro Grau e Equação do Segundo Grau: Resolução e aplicações de equações lineares e quadráticas, incluindo gráficos e soluções.</Text>
              <Text style={estilo.texto1}>- Escalas, Razão e Proporção: Compreensão das relações entre grandezas, incluindo a utilização de escalas em mapas e maquetes.</Text>
              <Text style={estilo.texto1}>- Grandezas Proporcionais e Médias Algébricas: Estudo de grandezas diretamente e inversamente proporcionais, além do cálculo de médias.</Text>
              <Text style={estilo.texto1}>- Aritmética: Fundamentos das operações matemáticas básicas, incluindo adição, subtração, multiplicação e divisão.</Text>
              <Text style={estilo.texto1}>- Porcentagem e Matemática Financeira: Cálculos envolvendo porcentagens, juros simples e compostos, e aplicações financeiras.</Text>
              <Text style={estilo.texto1}>- Gráficos e Tabelas: Interpretação e construção de gráficos e tabelas, representando dados de forma visual e clara.</Text>
              <Text style={estilo.texto1}>- Funções: Estudo de funções matemáticas, suas características, gráficos e aplicações em diferentes contextos.</Text>
              <Text style={estilo.texto1}>- Trigonometria: Análise das relações entre os ângulos e os lados dos triângulos, incluindo funções trigonométricas (seno, cosseno, tangente) e suas aplicações.</Text>
              <Text style={estilo.texto1}>- Noções Básicas de Estatística: Introdução a conceitos estatísticos, incluindo média, mediana, moda e desvio padrão.</Text>
              <Text style={estilo.texto1}>- Probabilidade: Análise das chances de ocorrência de eventos, incluindo eventos independentes e dependentes.</Text>
              <Text style={estilo.texto1}>- Área de Figuras Planas e Área dos Polígonos: Cálculo de áreas de diversas figuras planas, com ênfase em polígonos e fórmulas específicas.</Text>
          </AccordionItem>

          <AccordionItem title="Ciências Humanas e suas Tecnologias">
          <Text style={estilo.titulo1}> HISTÓRIA </Text>

              <Text style={estilo.texto1}>- Idade Contemporânea: Estudo do período histórico que vai do final do século XVIII até os dias atuais, abrangendo transformações sociais, políticas e econômicas.</Text>
              <Text style={estilo.texto1}>- 2ª Guerra Mundial e Suas Consequências: Análise do conflito global de 1939 a 1945, suas causas, eventos principais e impacto nas relações internacionais e na geopolítica.</Text>
              <Text style={estilo.texto1}>- Brasil Colônia: Exploração do período colonial brasileiro (1500-1822), incluindo aspectos sociais, econômicos e culturais da colonização portuguesa.</Text>
              <Text style={estilo.texto1}>- Primeiro e Segundo Reinado: Estudo dos reinados de Dom Pedro I e Dom Pedro II, focando nas transformações políticas, sociais e econômicas do Brasil imperial.</Text>
              <Text style={estilo.texto1}>- Governos Pós-Regime Militar - Redemocratização: Análise do processo de redemocratização no Brasil após 1985, incluindo a Constituição de 1988 e as mudanças políticas.</Text>
              <Text style={estilo.texto1}>- Era Vargas: Estudo do governo de Getúlio Vargas (1930-1945), suas políticas econômicas, sociais e a influência no Brasil moderno.</Text>
              <Text style={estilo.texto1}>- História Política: Compreensão dos principais eventos, movimentos e ideologias que moldaram a política brasileira ao longo da história.</Text>
              <Text style={estilo.texto1}>- República Velha: Análise do período republicano (1889-1930), suas características, crises e a política do café com leite.</Text>
              <Text style={estilo.texto1}>- Patrimônio Histórico-Cultural e Memória: Reflexão sobre a importância da preservação do patrimônio cultural e a construção da memória coletiva na sociedade.</Text>

              <Text style={estilo.titulo1}> GEOGRAFIA </Text>

              <Text style={estilo.texto1}>- Geografia Agrária: Estudo da organização do espaço rural, atividades agrícolas e relações entre sociedade e natureza.</Text>
              <Text style={estilo.texto1}>- Questões Ambientais: Análise dos problemas ambientais contemporâneos, como poluição, desmatamento e mudanças climáticas.</Text>
              <Text style={estilo.texto1}>- Geografia Física: Compreensão dos elementos naturais do planeta, como relevo, clima, vegetação e recursos hídricos.</Text>
              <Text style={estilo.texto1}>- Geografia Urbana: Estudo das dinâmicas das cidades, urbanização, e os problemas sociais e ambientais urbanos.</Text>
              <Text style={estilo.texto1}>- Climatologia: Análise dos climas do mundo, suas características e a influência das condições climáticas na vida humana.</Text>
              <Text style={estilo.texto1}>- Urbanização: Estudo do processo de crescimento urbano e suas implicações sociais, econômicas e ambientais.</Text>
              <Text style={estilo.texto1}>- Globalização: Compreensão das interconexões econômicas, culturais e políticas entre países e regiões do mundo.</Text>
              <Text style={estilo.texto1}>- Cartografia: Estudo das representações cartográficas, técnicas de mapeamento e a importância dos mapas.</Text>
              <Text style={estilo.texto1}>- Indústria: Análise da atividade industrial, seus tipos, localização e impacto na economia e no meio ambiente</Text>

              <Text style={estilo.titulo1}> FILOSOFIA </Text>

              <Text style={estilo.texto1}>- Aristóteles e Escola Helenística: Estudo do pensamento aristotélico e suas influências nas escolas filosóficas posteriores.</Text>
              <Text style={estilo.texto1}>- Ética e Justiça: Reflexão sobre conceitos de moralidade, justiça e suas aplicações na sociedade.</Text>
              <Text style={estilo.texto1}>- Racionalismo Moderno: Análise das ideias de filósofos como Descartes e a importância da razão no conhecimento.</Text>
              <Text style={estilo.texto1}>- Filosofia Antiga: Estudo das principais correntes e pensadores da filosofia grega, incluindo pré-socráticos e estoicos.</Text>
              <Text style={estilo.texto1}>- Escola Sofística, Sócrates e Platão: Análise das contribuições dos sofistas, Sócrates e Platão para a filosofia ocidental.</Text>
              <Text style={estilo.texto1}>- Filosofia Contemporânea: Estudo das correntes filosóficas do século XX e XXI, abordando questões atuais.</Text>
              <Text style={estilo.texto1}>- Natureza do Conhecimento: Reflexão sobre a epistemologia, incluindo questões sobre a origem e limites do conhecimento.</Text>
              <Text style={estilo.texto1}>- Filosofia Moderna: Análise do desenvolvimento do pensamento filosófico entre os séculos XVII e XVIII.</Text>
              <Text style={estilo.texto1}>- Escola de Frankfurt: Estudo das ideias dos filósofos da Escola de Frankfurt e suas críticas à sociedade contemporânea.</Text>

              <Text style={estilo.titulo1}> SOCIOLOGIA</Text>

              <Text style={estilo.texto1}>- Sociologia Contemporânea: Análise das principais correntes e teorias sociológicas atuais e sua aplicação na compreensão da sociedade.</Text>
              <Text style={estilo.texto1}>- Mundo do Trabalho: Estudo das transformações no mundo do trabalho, incluindo relações de trabalho e novas formas de emprego.</Text>
              <Text style={estilo.texto1}>- Cultura e Indústria Cultural: Reflexão sobre a produção cultural em massa e suas influências na sociedade.</Text>
              <Text style={estilo.texto1}>- Ideologia: Compreensão dos sistemas de ideias que moldam a percepção e as ações sociais.</Text>
              <Text style={estilo.texto1}>- Meios de Comunicação, Tecnologia e Cultura de Massa: Análise do papel da mídia e da tecnologia na formação da cultura contemporânea.</Text>
              <Text style={estilo.texto1}>- Cidadania: Estudo dos direitos e deveres dos cidadãos, e a relação entre indivíduos e Estado.</Text>
              <Text style={estilo.texto1}>- Capitalismo: Análise do sistema econômico capitalista, suas características, evolução e impacto social..</Text>
              <Text style={estilo.texto1}>- Economia e Sociedade: Reflexão sobre as interações entre os sistemas econômicos e as estruturas sociais.</Text>
           </AccordionItem>

          <AccordionItem title="Ciências da Natureza e suas Tecnologias">
          <Text style={estilo.titulo1}> QUÍMICA </Text>

            <Text style={estilo.texto1}>- Físico-Química: Estudo das propriedades físicas e comportamentos das substâncias químicas, incluindo termodinâmica e cinética.</Text>
            <Text style={estilo.texto1}>- Química Geral: Fundamentos da química, incluindo conceitos básicos, estrutura atômica, tabelas periódicas e leis químicas.</Text>
            <Text style={estilo.texto1}>- Química Orgânica: Análise de compostos que contêm carbono, incluindo sua estrutura, reatividade e aplicações.</Text>
            <Text style={estilo.texto1}>- Ligações Químicas, Polaridade e Forças: Estudo das interações entre átomos e moléculas, incluindo ligações covalentes, iônicas e a polaridade das moléculas.</Text>
            <Text style={estilo.texto1}>- Reações Orgânicas: Compreensão das principais reações que envolvem compostos orgânicos, suas condições e mecanismos.</Text>
            <Text style={estilo.texto1}>- Compostos Orgânicos: Classificação e características dos diferentes tipos de compostos orgânicos, como hidrocarbonetos, álcoois e ácidos.</Text>
            <Text style={estilo.texto1}>- Eletroquímica: Estudo das relações entre eletricidade e reações químicas, incluindo células galvânicas e eletrólise.</Text>
            <Text style={estilo.texto1}>- Estequiometria: Cálculos envolvendo a quantidade de reagentes e produtos em reações químicas, baseados na Lei de Conservação da Massa.</Text>
            <Text style={estilo.texto1}>- Soluções: Compreensão das propriedades e comportamentos das soluções, incluindo concentração, solubilidade e pH.</Text>
            <Text style={estilo.texto1}>- Energia: Análise das transformações de energia em reações químicas, incluindo energia de ativação e calor de reação.</Text>

            <Text style={estilo.titulo1}> FÍSICA </Text>

            <Text style={estilo.texto1}>- Mecânica: Estudo do movimento dos corpos, forças, leis de Newton e aplicações em sistemas variados.</Text>
            <Text style={estilo.texto1}>- Eletricidade e Energia: Compreensão dos conceitos de corrente elétrica, circuitos, resistência e potencial elétrico.</Text>
            <Text style={estilo.texto1}>- Ondulatória: Análise das ondas, suas propriedades, tipos (sonoras e eletromagnéticas) e fenômenos como interferência e ressonância.</Text>
            <Text style={estilo.texto1}>- Termologia: Estudo das propriedades do calor e temperatura, incluindo troca de calor e leis da termodinâmica.</Text>
            <Text style={estilo.texto1}>- Acústica: Compreensão das propriedades do som, propagação de ondas sonoras e sua interação com os meios.</Text>
            <Text style={estilo.texto1}>- Energia, Trabalho e Potência: Análise das relações entre trabalho, energia e potência em sistemas físicos.</Text>
            <Text style={estilo.texto1}>- Resistores: Estudo do funcionamento e aplicação de resistores em circuitos elétricos, incluindo leis de Ohm.</Text>
            <Text style={estilo.texto1}>- Calorimetria: Medição de transferências de calor em reações e processos físicos, com foco em capacidade calorífica e calor específico.</Text>
            <Text style={estilo.texto1}>- Impulso, Quantidade de Movimento e Análise Dimensional: Estudo do impulso como variação da quantidade de movimento e aplicações em problemas de colisão.</Text>
            <Text style={estilo.texto1}>- Introdução à Óptica Geométrica: Compreensão dos princípios da luz, formação de imagens por espelhos e lentes, e fenômenos como reflexão e refração.</Text>

            <Text style={estilo.titulo1}> BIOLOGIA</Text>

            <Text style={estilo.texto1}>- Humanidade e Ambiente: Estudo das interações entre os seres humanos e o meio ambiente, incluindo impactos sociais, culturais e ecológicos.</Text>
            <Text style={estilo.texto1}>- Citologia: Análise das células, suas estruturas, funções e processos, como mitose e meiose.</Text>
            <Text style={estilo.texto1}>- Histologia e Fisiologia: Estudo dos tecidos do corpo humano e suas funções, além dos sistemas que compõem o organismo.</Text>
            <Text style={estilo.texto1}>- Sistema Imunológico: Compreensão do funcionamento do sistema de defesa do organismo, incluindo células imunológicas e respostas imunes.</Text>
            <Text style={estilo.texto1}>- Ecossistemas: Análise das interações entre organismos e seu ambiente, incluindo componentes bióticos e abióticos.</Text>
            <Text style={estilo.texto1}>- Fundamentos da Ecologia: Estudo das leis e princípios que regem as interações ecológicas e a dinâmica das populações.</Text>
            <Text style={estilo.texto1}>- Biotecnologia: Compreensão das aplicações biológicas em processos industriais, farmacêuticos e agrícolas, incluindo manipulação genética.</Text>
            <Text style={estilo.texto1}>- DNA e RNA: Estudo da estrutura, função e processos de replicação e transcrição do material genético.</Text>
            <Text style={estilo.texto1}>- Genética: Análise dos princípios da hereditariedade, incluindo leis de Mendel, mutações e herança genética.</Text>          
            
          </AccordionItem>
        </View>
        
      </View>


      <View style={{flexDirection: 'collumn'}}>
          <View style={estilo.viewtitulo}>
          <Text style={estilo.tituloProf}>Professores Indicados</Text>
          </View>
           
          <View style={estilo.container}>

            <View style={estilo.bloco}>
            <Text style={estilo.Materias}>Matemática</Text>
            <View style={estilo.professores}> 
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/FerrettoProfile.jpg')}
              />
              <View >
                <Text style={estilo.textosMaterias1}>Professor Ferretto</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/@professorferretto', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube <Icon name="arrow-back" size={10} color="#555" style={{ marginLeft: 5 }} /></Text>
                  <Text style={estilo.biografia}> Somos a melhor comunidade de professores da internet, com o melhor preço do Brasil e com a missão de fazer você conquistar a sua aprovação no ENEM e Vestibulares de todo o Brasil!</Text>
                </Pressable>
              </View>
            </View>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/CurioProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias1}>Dicasdemat Sandro Curió</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/@sandrocuriodicasdemat/featured', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube<Icon name="arrow-back" size={10} color="#555" style={{ marginLeft: 5 }} /></Text>
                  <Text style={estilo.biografia}>O canal DicasdeMat Sandro Curió tem como objetivo ajudar estudantes, em todos os níveis da matemática. Através de uma didática descontraída. Vamos juntos, RUMO AO TOPO!</Text>
                </Pressable>
              </View>
            </View>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/GiscomGizProfile.jpg')}
              />
              <View >
                <Text style={estilo.textosMaterias1}>Gis com Giz Mathematics</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/@Giscomgiz/featured', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube<Icon name="arrow-back" size={10} color="#555" style={{ marginLeft: 5 }} /></Text>
                  <Text style={estilo.biografia}>Oi!! Sou professor de Matemática e Mestre em Educação Matemática. Criei o canal com o objetivo de mostrar que é fácil aprender matemática e, por isso, procuro dar explicações claras e objetivas. Bons estudos.</Text>
                </Pressable>
              </View>
            </View>
      
             <Text style={estilo.Materias}>Física</Text>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/CoelhoProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias1}>Professor Coelho</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/@profcoelho', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube<Icon name="arrow-back" size={10} color="#555" style={{ marginLeft: 5 }} /></Text>
                  <Text style={estilo.biografia}>O canal de Física do Professor Coelho sintetiza o que milhares de estudantes desejam: é a OPORTUNIDADE única para adquirir um elevado CONHECIMENTO em física, desde o nível básico até o avançado. Venha estudar conosco!</Text>
                </Pressable>
              </View>
            </View>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/BoaroProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias1}>Professor Boaro</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/@professorboaro/featured', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube<Icon name="arrow-back" size={10} color="#555" style={{ marginLeft: 5 }} /></Text>
                  <Text style={estilo.biografia}>Fala Galera! Neste Canal postarei vídeos com dicas para os vestibulares, resolução das provas mais recentes, além das aulas divididas em pequenos módulos para facilitar seu aprendizado. Aproveite!</Text>
                </Pressable>
              </View>
            </View>

            <Text style={estilo.Materias}>Química</Text>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/MichelProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias1}>Café com química - Prof Michel</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/@profmichel', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube<Icon name="arrow-back" size={10} color="#555" style={{ marginLeft: 5 }} /></Text>
                  <Text style={estilo.biografia}>O canal café com química surgiu para oferecer uma solução criativa no estudo de química!!! Através de aulas curtas, experiências e exercícios temos o enorme prazer de contribuir para a democratização do ensino no Brasil.</Text>
                </Pressable>
              </View>
            </View>
      
            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/CabralProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias1}>Professor Gabriel Cabral</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/@ProfessorGabrielCabral', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube<Icon name="arrow-back" size={10} color="#555" style={{ marginLeft: 5 }} /></Text>
                  <Text style={estilo.biografia}>Canal voltado para o ensino da Química de maneira rápida e divertida.</Text>
                </Pressable>
              </View>
            </View>

            <Text style={estilo.Materias}>Literatura</Text>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/AlencarProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias1}>Literatura com Alencar</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/@LiteraturacomAlencar', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube<Icon name="arrow-back" size={10} color="#555" style={{ marginLeft: 5 }} /></Text>
                  <Text style={estilo.biografia}>Olá, meu nome é Alencar Schueroff. Com minhas videoaulas de Literatura, ajudo você em provas, mostrando e ensinando o que mais cai em Literatura no Enem, em vestibulares e concursos.</Text>
                </Pressable>
              </View>
            </View>

            </View>

            <View style={estilo.bloco}>

            <Text style={estilo.Materias}>Biologia</Text>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/SamuelProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias1}>Biologia com Samuel Cunha</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/@professorsamuelcunha', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube<Icon name="arrow-back" size={10} color="#555" style={{ marginLeft: 5 }} /></Text>
                  <Text style={estilo.biografia}>Bem-vindos ao Biologia com Samuel Cunha, um canal dedicado à educação! Iniciou este canal e colocou em prática o sonho de ajudar a melhorar a educação desse brasilzão afora! </Text>
                </Pressable>
              </View>
            </View>
           

          

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/GoulartProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias1}>Prof. Guilherme Goulart - Biologia</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/@ProfGuiGoulart', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube<Icon name="arrow-back" size={10} color="#555" style={{ marginLeft: 5 }} /></Text>
                  <Text style={estilo.biografia}>Projeto voltado a estudantes com interesse em compreender a biologia como um todo, seja para passar no vestibular, seja para tirar uma boa nota em uma prova.</Text>
                </Pressable>
              </View>
            </View>

            <Text style={estilo.Materias}>Português</Text>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/NoslenProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias1}>Professor Noslen</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/@ProfessorNoslen', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube<Icon name="arrow-back" size={10} color="#555" style={{ marginLeft: 5 }} /></Text>
                  <Text style={estilo.biografia}>Canal voltado para o ensino de toda a Língua Portuguesa, com o intuito de facilitar a aprendizagem de maneira rápida e divertida! Maior canal de educação do Brasil e maior plataforma de LP do Brasil!</Text>
                </Pressable>
              </View>
            </View>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/profleticia.jpeg')}
              />
              <View>
                <Text style={estilo.textosMaterias1}>Português com Letícia</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/c/Portugu%C3%AAscomLet%C3%ADcia', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube<Icon name="arrow-back" size={10} color="#555" style={{ marginLeft: 5 }} /></Text>
                  <Text style={estilo.biografia}>🚀 PORTUGUÊS COMPLETO | Sua aprovação está aqui! Curso completo, do básico ao avançado, com videoaulas exclusivas. Mais de 150 aulas aprofundadas e objetivas com foco em concursos públicos.</Text>
                </Pressable>
              </View>
            </View>

            <Text style={estilo.Materias}>Geografia</Text>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/RicardoProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias1}>Professor Ricardo Marcílio</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/c/ProfessorRicardoMarc%C3%ADlio', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube<Icon name="arrow-back" size={10} color="#555" style={{ marginLeft: 5 }} /></Text>
                  <Text style={estilo.biografia}>Canal dedicado a pessoas que buscam uma visão crítica dos principais acontecimentos do mundo. Voltado a pré-vestibulandos e curiosos em geral em assuntos relacionados à Geografia & Atualidades</Text>
                </Pressable>
              </View>
            </View>

            <Text style={estilo.Materias}>História, Sociologia e Filosofia</Text>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/ParabolicaProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias1}>Parabólica</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/c/Parab%C3%B3lica', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube<Icon name="arrow-back" size={10} color="#555" style={{ marginLeft: 5 }} /></Text>
                  <Text style={estilo.biografia}>Olá, eu sou Pedro Rennó, sou Professor de História e Filosofia de cursinho. Neste canal, Parabólica, terei sempre o maior prazer em lhes ajudar a conquistar os seus objetivos. Espero que gostem e sejam muito bem vindos!</Text>
                </Pressable>
              </View>
            </View>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/FerrariProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias1}>Professor Ferrari</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/@ProfessorFerrari', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube<Icon name="arrow-back" size={10} color="#555" style={{ marginLeft: 5 }} /></Text>
                  <Text style={estilo.biografia}>Canal do Professor Ferrari - humanidades para Enem e vestibulares.</Text>
                </Pressable>
              </View>
            </View>

          

          
         </View>
        </View>
        </View>

      
      <FooterComponent />
    </ScrollView>
  );
}
