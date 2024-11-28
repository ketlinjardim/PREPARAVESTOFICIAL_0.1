import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/home/index.jsx";
import PaginaEnem from "./screens/pgENEM/index.jsx";
import Informacoes from "./screens/InfoGerais/index.jsx";
import Conteudorel from "./screens/ContRelevante/index.jsx";
import StudyTips from "./screens/Questoes/index.jsx";
import EstatisticasENEM from "./screens/Professores/index.jsx";
import Login from "./screens/Login/index.jsx";
import Cadastro from "./screens/Cadastro/index.jsx";
import Avatarselection from "./screens/avatar/index.jsx";
import { AvatarContextProvider } from "./components/avatarcomp"; 
import CalculadoraEnem from "./screens/calc/index.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AvatarContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Conteudo relevante" component={Conteudorel} />
          <Stack.Screen name="Dicas" component={StudyTips} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Informacoes" component={Informacoes} />
          <Stack.Screen name="Pagina Enem" component={PaginaEnem} />
          <Stack.Screen name="Prepare-se" component={EstatisticasENEM} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="avatar" component={Avatarselection} />
          <Stack.Screen name="Calculadora Enem" component={CalculadoraEnem} />
        </Stack.Navigator>
      </NavigationContainer>
    </AvatarContextProvider>
  );
}
