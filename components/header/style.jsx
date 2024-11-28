import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  cabecalho: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#38B6FF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  ImagemLogo: {
    height: 250,
    width: 250,
    resizeMode: 'contain',
    marginTop:-10
  },

  avatarIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },

  perfilmodal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },

  modal: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 5,
  },

  titulomodal: {
    fontSize: 25,
    fontFamily: 'KollektifBold',
    color: '#333',
    marginBottom: 20,
  },

  titulomodal1: {
    fontSize: 18,
    fontFamily: 'Kollektif',
    color: '#38B6FF',
    textAlign: 'center',
    marginVertical: 15,
  },

  imagemavatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#38B6FF',
  },

  textomodal: {
    fontSize: 18,
    fontFamily: 'Kollektif',
    color: '#333',
    marginBottom: 10,
  },

  botal: {
    backgroundColor: '#38B6FF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },

  menu: {
    position: 'absolute',
    top: 100,
    left: 0,
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomRightRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    zIndex: 10,
  },

  menuItem: {
    paddingVertical: 12,
    fontSize: 18,
    fontFamily: 'Kollektif',
    color: '#333',
  },

  menuOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  avatarmodal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }
});
