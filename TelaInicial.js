import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';
import telainicial from './assets/telainicial.png';
import logo from './assets/logo.png';

export default function TelaInicial() {
  return <SafeAreaView style={styles.container}>
    <ImageBackground  source={telainicial} resizeMode="cover" style={styles.imagem}>
    <Image source={logo} resizeMode= "contain" style={styles.logoimagem}/>
      <Text style={styles.text}>Re-Use</Text>
    </ImageBackground>
    <TouchableOpacity
        onPress={() =>  navigation.navigate("TelaCad", {})}
        style={{ backgroundColor: null, justifyContent: "center" }}>
        <Text style={styles.BtCadastro}>Cadastre-se</Text>
      </TouchableOpacity>
    <Button
      onPress={() => navigation.navigate('tela2', {})}
      title="Pagina2"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  </SafeAreaView>
}

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