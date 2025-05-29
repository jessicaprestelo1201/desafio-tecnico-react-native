import { useEffect, useState } from "react";
import { View, FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import axios from "axios";
import ProductCard from "./ProductCard";
import SkeletonCard from "./SkeletonCard";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula o carregamento
    setTimeout(() => {
      axios.get("https://api.skyhub.com.br/urls/products", {
        headers: {
          "X-User-Email": "seu_email@example.com",
          "X-Api-Key": "seu_token_de_integracao",
          "X-Accountmanager-Key": "seu_token_account",
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      })
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
    }, 5000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>🛍️ Produtos Americanas</Text>
      {loading ? (
        <FlatList
          data={[1, 2, 3, 4, 5]}
          keyExtractor={(item) => item.toString()}
          renderItem={() => <SkeletonCard />}
          contentContainerStyle={styles.list}
        />
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCard product={item} />}
          contentContainerStyle={styles.list}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginVertical: 16,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
});
