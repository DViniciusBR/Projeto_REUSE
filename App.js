import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, ImageBackground, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaInicial from './src/TelaInicial';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.titulo}>Re-Use</Text>
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