import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function Menu() {
  const categories = [
    { title: 'Agro, indústria e comércio', isMain: true },
    { title: 'Alimentos e bebidas', isMain: true },
    { title: 'Artes e Artesanato', isSub: true },
    { title: 'Artigos de festa', isSub: true },
    { title: 'Áudio e vídeo', isSub: true },
    { title: 'Automotivo', isSub: true },
    { title: 'Bebês e higiene infantil', isSub: true },
    { title: 'Beleza e perfumaria', isSub: true },
    { title: 'Bem estar sexual', isSub: true },
    { title: 'Brinquedos', isSub: true },
    { title: 'Cabelos', isSub: true },
    { title: 'Calçados', isSub: true },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {categories.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={[
              styles.categoryItem,
              item.isMain && styles.mainCategory,
              item.isSub && styles.subCategory
            ]}
          >
            <Text style={[
              styles.categoryText,
              item.isMain && styles.mainCategoryText,
              item.isSub && styles.subCategoryText
            ]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  categoryItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  mainCategory: {
    borderBottomWidth: 0,
  },
  subCategory: {
    paddingLeft: 20,
  },
  categoryText: {
    fontSize: 16,
  },
  mainCategoryText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },
  subCategoryText: {
    color: '#666',
  },
});