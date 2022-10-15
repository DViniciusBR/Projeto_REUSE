import React from 'react';
import { StyleSheet, Text, ImageBackground, SafeAreaView, Image } from 'react-native';
import { NativeBaseProvider, Button, Box } from "native-base";

export default function TelaInicial({ navigation }) {

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../../../assets/telainicial.png')} resizeMode="cover" style={styles.fundo}>
          <Image source={require('../../../assets/logo.png')} resizeMode="cover" style={styles.logo}></Image>
          <Text style={styles.titulo}>Re-Use</Text>
          <Box alignItems="center">
            <Button backgroundColor="black" mt="7"
              onPress={() => navigation.navigate("Cadastre-se", {})} >
              <Text style={styles.TitBotao}>Cadastre-se</Text>
            </Button>
            <Button backgroundColor="black" mt="7"
              onPress={() => navigation.navigate("Login", {})} >
              <Text style={styles.TitBotao}>Login</Text>
            </Button>
          </Box>
        </ImageBackground>
      </SafeAreaView>
    </NativeBaseProvider>
  );
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
    justifyContent: "center",
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
    fontSize: 25,
    lineHeight: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
}); 