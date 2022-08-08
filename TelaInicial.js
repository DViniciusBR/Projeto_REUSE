import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground, SafeAreaView, Button } from 'react-native';

export default function TelaInicial() {
  return <SafeAreaView style={styles.container}>
    <ImageBackground source={require('../../assets/telainicial.png')} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Re-Use</Text>
    </ImageBackground>
    <Button
      onPress={() => navigation.navigate('tela2', {})}
      title="Pagina1"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
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