import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Basket() {
  return (
    <View style={styles.container}>
      <Text style={styles.basketTitle}>Cesta (0)</Text>
      
      <View style={styles.emptyBasketContainer}>
        <Text style={styles.emptyBasketText}>sua cesta está vazia</Text>
        <Text style={styles.emptyBasketSubtext}>
          Navegue pelo aplicativo ou faça uma busca para encontrar seus produtos
        </Text>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Escolher produtos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  basketTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  emptyBasketContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
  },
  emptyBasketText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  emptyBasketSubtext: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 40,
  },
  button: {
    backgroundColor: '#e60014',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});