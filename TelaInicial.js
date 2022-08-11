import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground, SafeAreaView, TouchableOpacity, Image } from 'react-native';

export default function TelaInicial({ navigation }) {

  return <SafeAreaView style={styles.container}>
    <ImageBackground source={require('../../assets/telainicial.png')} resizeMode="cover" style={styles.fundo}>
      <Text style={styles.titulo}>Re-Use</Text>
      <Image source={require('../../assets/logo.png')} resizeMode="cover" style={styles.logo}></Image>
      <TouchableOpacity
        onPress={() => navigation.navigate("Cadastre-se", {})}
        style={{
          backgroundColor: "black", lineHeight: 60,
          alignContent: "center", justifyContent: "center",
          borderRadius: 30, paddingVertical: -30,
        }}>
        <Text style={styles.TitBotao}>Cadastre-se</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login", {})}
        style={{
          backgroundColor: "black", lineHeight: 60,
          alignContent: "center", justifyContent: "center",
          borderRadius: 30, paddingVertical: -30,
        }}>
        <Text style={styles.TitBotao}>Login</Text>
      </TouchableOpacity>
    </ImageBackground>
  </SafeAreaView>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fundo: {
    flex: 1,
    justifyContent: "center"
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  titulo: {
    color: "black",
    fontSize: 30,
    lineHeight: 84,
    fontWeight: "bold",
    alignSelf: "center",
  },
  TitBotao: {
    color: "white",
    fontSize: 30,
    lineHeight: 60, //Espaçamento entre botões
    fontWeight: "bold", //Negrito
    alignSelf: "center",
  }
}); 