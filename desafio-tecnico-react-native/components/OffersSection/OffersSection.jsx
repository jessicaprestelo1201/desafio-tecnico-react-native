import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';

export default function OffersSection() {
  return (
    <View style={styles.container}>
      {/* Banner Promocional */}
      <View style={styles.promoBanner}>
        <Text style={styles.promoText}>só no app você aproveitou ofertas exclusivas - baixe agora</Text>
      </View>



      <Text style={styles.suggestionText}>achamos que você vai gostar</Text>

      {/* Lista de Produtos */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productsList}>
        {[
          { name: 'Smartphone Motorola Moto G15', price: 'R$ 1.099,00', image: 'https://brmotorolanew.vtexassets.com/arquivos/ids/171286/frente-smartphone-moto-g15-grafite-vegan-leather.png?v=638797438263200000' },
          { name: 'Smartphone Samsung Galaxy A12', price: 'R$ 799,00', image: 'https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/219889' },
          { name: 'Smartphone Samsung Galaxy A60', price: 'R$ 849,00', image: 'https://static.zoom.com.br/content/Image/galaxy-a60-camera-tela.jpg' },
          { name: 'Smartphone Motorola Moto G24 Power', price: 'R$ 849,00', image: 'https://brmotorolanew.vtexassets.com/arquivos/ids/171356/frente-smartphone-moto-g24-power-azul-1.png?v=638797949350070000' },
          { name: 'Chocolate Kit Kat ao Leite', price: 'R$ 4,15', image: 'https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/t/a/tablete-kit-kat-ao-leite-nestle_805968.webp' },
        ].map((item, index) => (
          <View key={index} style={styles.productCard}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  promoBanner: {
    backgroundColor: '#e60014',
    padding: 8,
    alignItems: 'center',
  },
  promoText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  discountContainer: {
    backgroundColor: '#e60014', // Red background for the entire section
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
  discountBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#fff', // White border around QR code
    padding: 8,
    borderRadius: 4,
  },
  discountText: {
    color: '#fff', // White text for better visibility
    fontSize: 14,
  },
  qrCode: {
    width: 80,
    height: 80,
    marginLeft: 8,
  },
  appLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#fff', // White border around app links
    borderRadius: 4,
    padding: 8,
  },
  appLink: {
    color: '#fff', // White text for links
    fontWeight: 'bold',
    fontSize: 14,
  },
  suggestionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
  },
  productsList: {
    backgroundColor: '#fff',
    paddingVertical: 8,
  },
  productCard: {
    marginHorizontal: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  productName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 12,
    color: '#e60014',
  },
});