import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function SkeletonCard() {
  return (
    <View style={styles.card}>
      <View style={styles.imagePlaceholder} />
      <View style={styles.textPlaceholderLarge} />
      <View style={styles.textPlaceholderSmall} />
      <View style={styles.textPlaceholderSmall} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1f1f1f",
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: "100%",
    height: screenWidth * 0.6,
    backgroundColor: "#2e2e2e",
    borderRadius: 12,
    marginBottom: 16,
  },
  textPlaceholderLarge: {
    width: "80%",
    height: 20,
    backgroundColor: "#2e2e2e",
    borderRadius: 8,
    marginBottom: 8,
  },
  textPlaceholderSmall: {
    width: "60%",
    height: 14,
    backgroundColor: "#2e2e2e",
    borderRadius: 8,
    marginBottom: 6,
  },
});
