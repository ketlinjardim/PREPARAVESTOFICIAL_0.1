import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements';
import { footerestilo } from "./style";
import { Linking } from 'react-native';

export default function FooterComponent() {
    return (
        <View style={footerestilo.footer}>
            {/* Seção Sobre Nós */}
            <View style={footerestilo.section}>
                <Text style={footerestilo.titulo}>Sobre nós</Text>
                <Text style={footerestilo.textosuporte}>
                    O PreparaVest oferece suporte educacional a estudantes enfrentando desafios devido à qualidade insatisfatória do ensino público.
                    Nossa equipe de alunos comprometidos proporciona recursos abrangentes, como questões desafiadoras, simulados e videoaulas.
                    Priorizamos a personalização do aprendizado para que os alunos desenvolvam suas habilidades no próprio ritmo. Nosso objetivo é capacitar todos os alunos a alcançarem o sucesso nos vestibulares.
                </Text>
            </View>

            {/* Seção de Contatos */}
            <View style={footerestilo.section}>
                <Text style={footerestilo.titulo}>Contatos</Text>
                <TouchableOpacity onPress={() => Linking.openURL('tel:12123456789')}>
                    <Text style={footerestilo.textosuporte}>
                        <Icon name="phone" type="material" color="#000" /> (12) 12345-6789
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('mailto:mariazinha@gmail.com')}>
                    <Text style={footerestilo.textosuporte}>
                        <Icon name="email" type="material" color="#000" /> mariazinha@gmail.com
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
