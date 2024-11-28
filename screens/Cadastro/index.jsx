import { Text, Pressable, View, Image, StyleSheet, Alert } from 'react-native';
import { style } from './style';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import apiConfig from '../../utils/api'; // Certifique-se de que o apiConfig esteja importado corretamente

export default function Cadastro() {
    const navigation = useNavigation();

    // States para capturar os valores dos inputs
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');

    // Estados para controle de erros
    const [isEmailError, setIsEmailError] = useState(false);
    const [isPasswordError, setIsPasswordError] = useState(false);
    const [isConfirmPasswordError, setIsConfirmPasswordError] = useState(false);

    // Função para enviar os dados de cadastro para a API
    async function handleCadastro() {
        // Validações de email, senha e confirmação de senha
        const emailError = !email.trim().includes('@') || !email;
        const passwordError = senha.length < 6;
        const confirmPasswordError = senha !== confirmSenha;

        // Atualiza os estados de erro
        setIsEmailError(emailError);
        setIsPasswordError(passwordError);
        setIsConfirmPasswordError(confirmPasswordError);

        // Se houver erros, não prosseguir
        if (emailError || passwordError || confirmPasswordError) {
            Alert.alert('Erro', 'Por favor, preencha os campos corretamente.');
            return;
        }

        try {
            let res = await apiConfig.post('/user/novo', {
                email: email,
                senha: senha,
            });
            if (res.status === 409) {
                Alert.alert('Erro', 'Email já cadastrado!');
            } else if (res.status === 200) {
                Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
                navigation.navigate('Login'); // Navega para a página de login após o cadastro
            } else {
                Alert.alert('Erro', 'Ocorreu um erro. Tente novamente.');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Erro', 'Email já cadastrado.');
        }
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <View style={style.titulo}>
                    <View style={style.Logo}>
                        <Image source={require("../../assets/Professores/Design_sem_nome__1_-removebg-preview.png")} style={style.imagemlogo} />
                    </View>
                    <Text style={style.titulo}>Cadastro</Text>
                </View>

                <View style={style.Logo}>
                    <Input
                        placeholder="Email"
                        onChangeText={(text) => setEmail(text)}
                        errorMessage={isEmailError ? 'Email inválido!' : ''}
                        inputContainerStyle={isEmailError ? estilo.input_container_error : estilo.input_container}
                    />
                    <Input
                        placeholder="Senha"
                        onChangeText={(text) => setSenha(text)}
                        secureTextEntry={true}
                        errorMessage={isPasswordError ? 'Senha deve ter pelo menos 6 caracteres!' : ''}
                        inputContainerStyle={isPasswordError ? estilo.input_container_error : estilo.input_container}
                    />
                    <Input
                        placeholder="Confirmar senha"
                        onChangeText={(text) => setConfirmSenha(text)}
                        secureTextEntry={true}
                        errorMessage={isConfirmPasswordError ? 'As senhas não conferem!' : ''}
                        inputContainerStyle={isConfirmPasswordError ? estilo.input_container_error : estilo.input_container}
                    />

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Pressable style={style.botao} onPress={handleCadastro}>
                            <Text style={{ color: '#fff', fontSize: 22 }}>Cadastrar</Text>
                        </Pressable>
                    </View>

                    <Pressable onPress={() => navigation.navigate('Login')}>
                        <Text>Voltar ao login</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const estilo = StyleSheet.create({
    input_container_error: {
        borderWidth: 0,
        backgroundColor: '#ECECEC',
        height: 50,
        width: 300,
        borderRadius: 10,
        padding: 30,
        color: '#797976',
        fontSize: 18,
    },
    input_container: {
        backgroundColor: '#ECECEC',
        height: 50,
        width: 300,
        borderRadius: 10,
        padding: 30,
        color: '#797976',
        fontSize: 18,
    },
});
