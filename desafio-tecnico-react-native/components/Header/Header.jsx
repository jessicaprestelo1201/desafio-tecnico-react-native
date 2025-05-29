import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

export default function Header() {
  return (
    <View>
      {/* Faixa promocional */}
      <View style={styles.promoBar}>
        <Text style={styles.promoText}>
          <Text style={{ color: '#e60014', fontWeight: 'bold' }}>dia dos namorados</Text>
          <Text> • com até </Text>
          <Text style={{ fontWeight: 'bold' }}>40% de desconto</Text>
          <Text> • </Text>
          <Text style={{ color: '#e60014', fontWeight: 'bold' }}>queeero {'>'}</Text>
        </Text>
      </View>

      {/* Header principal */}
      <View style={styles.header}>
        <Text style={styles.logo}>americanas</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="busque aqui seu produto"
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Ionicons name="person-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="shopping-bag" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="shopping-cart" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Links rápidos */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.quickLinks}>
        {['informe seu CEP', 'baixe o app', 'faça seu cartão', 'mais vendidos', 'nossas lojas', 'oba, cupom', 'americanas indica', 'ofertas da TV', 'oferta do dia'].map((item, index) => (
          <TouchableOpacity key={index} style={styles.quickLink}>
            <Text style={styles.quickLinkText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Categorias */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        {['todos os departamentos', 'mercado', 'celulares', 'eletrodomésticos', 'informática', 'áudio e vídeo', 'eletroportáteis', 'móveis', 'dia dos namorados'].map((item, index) => (
          <TouchableOpacity key={index} style={styles.category}>
            <Text style={styles.categoryText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  promoBar: {
    backgroundColor: '#f5f5f5',
    padding: 6,
    alignItems: 'center',
  },
  promoText: {
    fontSize: 12,
    color: '#333',
  },
  header: {
    backgroundColor: '#e60014',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  logo: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 10,
  },
  searchContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 25,
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#999',
  },
  icons: {
    flexDirection: 'row',
    marginLeft: 10,
    gap: 8,
  },
  quickLinks: {
    backgroundColor: '#e60014',
    paddingVertical: 8,
  },
  quickLink: {
    marginHorizontal: 10,
  },
  quickLinkText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  categories: {
    backgroundColor: '#fff',
    paddingVertical: 8,
  },
  category: {
    marginHorizontal: 10,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
});