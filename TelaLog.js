import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Nome Completo:</Text>
      <Text style={styles.titulo}>Nome de Usuário:</Text>
      <Text style={styles.titulo}>Data de Nascimento:</Text>
      <Text style={styles.titulo}>Cidade:</Text>
      <Text style={styles.titulo}>E-mail:</Text>
      <Text style={styles.titulo}>Senha:</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    color: "black",
    fontSize: 25,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
}); 