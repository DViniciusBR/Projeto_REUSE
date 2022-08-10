import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, ImageBackground, SafeAreaView } from 'react-native';

export default function App() {
    return (
      <SafeAreaView style={styles.container}>
      <Text style={styles.Cad}>Cadastre-se</Text>
      <Text style={styles.Cad}>Nome Compelto:</Text>
      <Text style={styles.Cad}>Nome de Usuário:</Text>
      <Text style={styles.Cad}>Data de Nascimento:</Text>
      <Text style={styles.Cad}>Cidade:</Text>
      <Text style={styles.Cad}>E-mail:</Text>
      <Text style={styles.Cad}>Senha:</Text>
      <TouchableOpacity
        onPress={() =>  navigation.navigate("TelaCad", {})}
        style={{ backgroundColor: null, justifyContent: "center" }}>
        <Text style={styles.Cad}>Cadastre-se</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>  navigation.navigate("TelaCad", {})}
        style={{ backgroundColor: null, justifyContent: "center" }}>
        <Text style={styles.Cad}>Cadastre-se</Text>
      </TouchableOpacity> 
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    Cad: {
      color: "black",
      fontSize: 25,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
    },
  }); 