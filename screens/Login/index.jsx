import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Pressable,
  Alert,
  StyleSheet,
} from "react-native";
import { styles } from "./style";
import { useNavigation, useIsFocused, StackActions } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Input } from "react-native-elements";
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiConfig from "../../utils/api";

export default function Login() {
  const navigation = useNavigation();
  const isFocused = useIsFocused(); // Hook para verificar se a tela está em foco

  const [passwordVisible, setPasswordVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  useEffect(() => {
    if (isFocused) {
      // Limpa os campos quando a tela de login ganha foco
      setEmail("");
      setPassword("");
      setIsEmailError(false);
      setIsPasswordError(false);
    }
  }, [isFocused]);

  async function handleLogin() {
    const emailIsValid = email.trim().includes("@");
    const passwordIsValid = password.length >= 6;

    setIsEmailError(!emailIsValid);
    setIsPasswordError(!passwordIsValid);

    if (emailIsValid && passwordIsValid) {
      try {
        let res = await apiConfig.post("/login", {
          email: email,
          senha: password,
        });

        if (res.status === 200) {

          await AsyncStorage.setItem('verificaLogin', 'true');
          await AsyncStorage.setItem('email',JSON.stringify(res.data[0].email));
          await AsyncStorage.setItem('id',JSON.stringify(res.data[0].id));
          if(res.data[0].avatarId != null){
            await AsyncStorage.setItem('avatarId', JSON.stringify(res.data[0].avatarId));
          }else{
            await AsyncStorage.setItem('avatarId', '0');
          }
          console.log(res.data[0])

          navigation.dispatch(StackActions.replace("Home"));
        } else if (res.status === 401) {
          Alert.alert("Ops...", "Usuário ou senha incorretos!");
        } else {
          Alert.alert("Erro", "Ocorreu um erro. Tente novamente.");
        }
      } catch (error) {
        console.error(error);
        Alert.alert("Erro", "Erro ao tentar logar.");
      }
    } else {
      Alert.alert("Erro", "Por favor, preencha os campos corretamente.");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.Logo}
          source={require("../../assets/Professores/Design_sem_nome__1_-removebg-preview.png")}
        />
        <Text style={styles.texto}>Login</Text>
        <View style={styles.inputs}>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            errorMessage={isEmailError ? "Email inválido!" : ""}
            inputContainerStyle={
              isEmailError ? estilo.input_container_error : estilo.input_container
            }
          />

          <Input
            placeholder="Senha"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={passwordVisible}
            errorMessage={isPasswordError ? "Senha inválida!" : ""}
            maxLength={10}
            inputContainerStyle={
              isPasswordError ? estilo.input_container_error : estilo.input_container
            }
          />
        </View>

        <Pressable style={styles.cadastrar}>
          <Text
            style={{ fontSize: 22, color: "#45455F" }}
            onPress={() => navigation.navigate("Cadastro")}
          >
            Cadastre-se
          </Text>
        </Pressable>

        <Pressable style={styles.botao} onPress={handleLogin}>
          <Text style={{ color: "#fff", fontSize: 22 }}>Entrar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  input_container_error: {
    borderWidth: 0,
    backgroundColor: "#ECECEC",
    height: 70,
    width: 300,
    borderRadius: 10,
    padding: 10,
    color: "#797976",
    fontSize: 18,
  },
  input_container: {
    backgroundColor: "#ECECEC",
    height: 70,
    width: 300,
    borderRadius: 10,
    padding: 10,
    color: "#797976",
    fontSize: 18,
  },
});
