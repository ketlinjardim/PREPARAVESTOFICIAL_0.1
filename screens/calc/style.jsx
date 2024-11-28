import { StyleSheet } from 'react-native';

export const stylescalc = StyleSheet.create({
  container: {
    margin:20
    
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#2c7a7b',
  },
  field: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
   
    margin:20,
  },
  espaco:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  infoBox: {
    backgroundColor: '#ffffff0',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,

  
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign:'center'
  },
  infoSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },

  
});


