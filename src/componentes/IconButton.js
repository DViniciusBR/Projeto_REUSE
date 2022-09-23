import React from 'react';
import { StyleSheet, Text, ImageBackground, SafeAreaView, Image, Icon } from 'react-native';
import { Center, NativeBaseProvider, Button, Box } from "native-base";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

export default function IconButton({ navigation }) {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
          <Box alignItems="center">
            <Button backgroundColor="black" mt="7"
            onPress={() => navigation.navigate("Perfil", {})} >
              <Text style={styles.TitBotao}>Eu</Text>
            </Button>
          </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TitBotao: {
    color: "white",
    fontSize: 25,
    lineHeight: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
}); 