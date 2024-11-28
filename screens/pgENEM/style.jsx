import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginVertical: 16,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5A67D8',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#E5E7EB',
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 50,

  },
  itemContainer: {
    marginHorizontal: 50,
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#4F46E5',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom:20
   
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  textContainer: {
    marginLeft: 16,
  },
  yearText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '85%',
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0e0e0e',
    marginBottom: 16,
    textAlign:'center'
  },
  button: {
    backgroundColor: '#4F46E5',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
  },
  buttonClose: {
    backgroundColor: '#D90429',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
