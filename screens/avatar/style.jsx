import { StyleSheet } from 'react-native';

export const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Cor de fundo suave
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Cor do texto
    textAlign: 'center',
    marginBottom: 20, // Espaçamento inferior
  },
  avatarList: {
    flexGrow: 1,
    justifyContent: 'space-around', // Espaço uniforme entre avatares
  },
  avatarContainer: {
    margin: 10, // Espaçamento entre avatares
    borderRadius: 10, // Bordas arredondadas
    overflow: 'hidden', // Esconde parte da imagem que ultrapassar
    elevation: 5, // Sombra para destacar o avatar
    backgroundColor: '#fff', // Fundo branco para avatares
    alignItems: 'center', // Centraliza o conteúdo
    justifyContent: 'center', // Centraliza o conteúdo
    width: 100, // Largura fixa para avatares
    height: 100, // Altura fixa para avatares
  },
  avatarImage: {
    width: '100%', // Ajusta a largura da imagem ao contêiner
    height: '100%', // Ajusta a altura da imagem ao contêiner
    borderRadius: 10, // Bordas arredondadas na imagem
  },
});
