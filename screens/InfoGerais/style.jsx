import { StyleSheet } from 'react-native';

export const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', 
   
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 30, 
     alignItems:'center',
     justifyContent:'center'
  },
  titulo2: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2C3E50', 
    textAlign:'center'
  },
  subtitulo2: {
    fontSize: 16,
    marginBottom: 20,
    color: '#34495E',
    fontFamily: 'Kollektif', 
     textAlign:'center'
  },
  secao: {
    backgroundColor: '#fff', 
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width:'90%'
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2980B9', 
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#34495E',
    marginBottom: 12,
  },
  secao1: {
    marginTop: 10,
  },
  titulos: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#27AE60', 
  },
  textos: {
    fontSize: 14,
    lineHeight: 22, 
    color: '#333',
  },
  linkButton: {
    marginTop: 10,
    marginBottom: 20,
  },
  link: {
    color: '#2980B9',
    fontSize: 16,
    textDecorationLine: 'underline', 
    fontWeight: 'bold',
  },
});