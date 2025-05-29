import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Link href="/" asChild>
        <TouchableOpacity>
          <Text style={styles.link}>Home</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/about" asChild>
        <TouchableOpacity>
          <Text style={styles.link}>Sobre</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  link: {
    color: '#fff',
    fontSize: 16,
  },
});