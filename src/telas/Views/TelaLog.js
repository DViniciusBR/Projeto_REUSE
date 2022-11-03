import React from 'react';
import { Box, VStack, HStack, FormControl, Input, Button, Center, NativeBaseProvider, Pressable, Icon, KeyboardAvoidingView } from "native-base";
import { Text, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';

export default function TelaLog({ navigation }) {

  const [show, setShow] = React.useState(false);

  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"}>
          <Center width="full">
            <Box safeArea padding="2" width="90%" maxWidth="290" paddingY="8">
              <VStack space={3} mt="5">
                <FormControl>
                  <FormControl.Label>Digite seu Email</FormControl.Label>
                  <Input placeholder="Digite seu e-mail" />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Digite sua senha</FormControl.Label>
                  <Input placeholder="Digite sua senha"
                    w={{ base: "75%", md: "25%" }}
                    type={show ? "text" : "password"}
                    InputRightElement={<Pressable onPress={() => setShow(!show)}>
                      <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" /></Pressable>} />
                </FormControl>
                <Button backgroundColor="black" mt="7"
                  onPress={() => navigation.navigate("TelaSenha", {})}>Esqueci a senha</Button>

                <Button backgroundColor="black" mt="7"
                  onPress={() => navigation.navigate("Bem-Vindo", {})}>Finalizar</Button>

                <HStack mt="6" justifyContent="center" >
                  <Text fontSize="sm" color="coolGray.600" _dark={{
                    color: "warmGray.200"
                  }}>
                    Não tem cadastro? </Text>
                    <Button backgroundColor="black" mt="7"
                  onPress={() => navigation.navigate("Cadastre-se", {})}>Cadastre-se</Button>
                </HStack>
              </VStack>
            </Box>
          </Center>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};
