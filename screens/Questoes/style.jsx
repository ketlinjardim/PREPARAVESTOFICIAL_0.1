import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center', // Centraliza o conteúdo
  },
  header: {
    padding: 20,
    alignItems: 'center',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headertexto: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  content: {
    paddingVertical: 20,
  },
  tip: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fcfafa',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%', // Previne que as divs sejam esticadas
    alignSelf: 'center', // Centraliza as divs
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  tipDescription: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
});

export default styles;