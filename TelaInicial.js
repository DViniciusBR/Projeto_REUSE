import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';

export default function TelaInicial({ navigation }) {
  return <SafeAreaView style={styles.container}>
    <ImageBackground source={require('../../assets/telainicial.png')} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Re-Use</Text>
    </ImageBackground>
    <TouchableOpacity
      onPress={() => navigation.navigate("tela2")}
      style={{ backgroundColor: null, justifyContent: "center" }}>
      <Text style={styles.BtCadastro}>Cadastre-se</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate("tela3")}
      style={{ backgroundColor: null, justifyContent: "center" }}>
      <Text style={styles.BtCadastro}>Cadastre-se</Text>
    </TouchableOpacity>
  </SafeAreaView>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
}); 