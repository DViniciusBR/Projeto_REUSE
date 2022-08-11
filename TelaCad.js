import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Nome Completo:</Text>
      <Text style={styles.titulo}>Nome de Usuário:</Text>
      <Text style={styles.titulo}>Data de Nascimento:</Text>
      <Text style={styles.titulo}>Cidade:</Text>
      <Text style={styles.titulo}>E-mail:</Text>
      <Text style={styles.titulo}>Senha:</Text>
      <TouchableOpacity
        onPress={() => alert("Cadastro realizado com sucesso")}
        style={{
          backgroundColor: "black",
          alignContent: "center", justifyContent: "center",
          borderRadius: 30, paddingVertical: -30,
        }}>
        <Text style={styles.TitBotao}>Finalizar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert("Cadastro realizado com sucesso")}
        style={{
          backgroundColor: "black",
          alignContent: "center", justifyContent: "center",
          borderRadius: 30, paddingVertical: -30,
        }}>
        <Text style={styles.Termos}>Termos de politica e privacidade</Text>
      </TouchableOpacity>
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
    fontWeight: "bold",
    textAlign: "left",
    lineHeight: 55,
  },
  TitBotao: {
    color: "white",
    fontSize: 30,
    lineHeight: 60,
    fontWeight: "bold",
    alignSelf: "center",
  },
  Termos: {
    color: "white",
    fontSize: 30,
    lineHeight: 60,
    fontWeight: "bold",
    alignSelf: "center",
  }
}); 