import React, { useState, useContext, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, Alert } from "react-native";
import { AvatarContext } from "../../components/avatarcomp";
import { profileStyles } from "./style";
import { useNavigation, StackActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const avatarImages = [
  { id: 1, source: require("../../assets/avatares/1.png") },
  { id: 2, source: require("../../assets/avatares/2.png") },
  { id: 3, source: require("../../assets/avatares/3.png") },
  { id: 4, source: require("../../assets/avatares/4.png") },
  { id: 5, source: require("../../assets/avatares/5.png") },
  { id: 6, source: require("../../assets/avatares/6.png") },
  { id: 7, source: require("../../assets/avatares/7.png") },
  { id: 8, source: require("../../assets/avatares/8.png") },
  { id: 9, source: require("../../assets/avatares/9.png") },
  { id: 10, source: require("../../assets/avatares/10.png") },
  { id: 11, source: require("../../assets/avatares/11.png") },
  { id: 12, source: require("../../assets/avatares/12.png") },
  { id: 13, source: require("../../assets/avatares/13.png") },
  { id: 14, source: require("../../assets/avatares/14.png") },
  { id: 15, source: require("../../assets/avatares/15.png") },
];

const AvatarSelection = () => {
  const { setSelectedAvatar } = useContext(AvatarContext);
  const navigation = useNavigation();
  const [userId, setUserId] = useState(null);

  // Carrega o ID do usuário ao montar o componente
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const id = await AsyncStorage.getItem("id");
        setUserId(id);
      } catch (error) {
        Alert.alert("Erro", "Não foi possível carregar o ID do usuário.");
        console.error(error);
      }
    };
    fetchUserId();
  }, []);

  // Envia o avatar selecionado para o backend
  const handleAvatarSelect = async (selectedAvatar) => {
    if (!userId) {
      Alert.alert("Erro", "ID do usuário não encontrado.");
      return;
    }

    try {
      const response = await fetch("http://192.168.1.48:3000/user/avatar", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          avatarId: selectedAvatar.id,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem('avatarId', JSON.stringify(selectedAvatar.id));
        navigation.dispatch(StackActions.replace("Home"));
      } else {
        Alert.alert("Erro", data.message || "Erro ao salvar o avatar.");
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar o avatar.");
      console.error(error);
    }
  };

  return (
    <View style={profileStyles.container}>
      <Text style={profileStyles.title}>Selecione um Avatar</Text>
      <FlatList
        data={avatarImages}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleAvatarSelect(item)}
            style={profileStyles.avatarContainer}
          >
            <Image source={item.source} style={profileStyles.avatarImage} />
          </TouchableOpacity>
        )}
        contentContainerStyle={profileStyles.avatarList}
      />
    </View>
  );
};

export default AvatarSelection;
