import React, { useState } from 'react';
import { Box, VStack, FormControl, Input, Button, Center, NativeBaseProvider, Pressable, Icon, HStack, Checkbox, Link } from "native-base";
import { SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TelaCad({ navigation }) {
  
  const [show, setShow] = React.useState(false);
  
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Center width="full">
          <Box safeArea padding="2" width="90%" maxWidth="290" paddingY="8">
            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Nome Completo</FormControl.Label>
                <Input placeholder="Digite seu nome" />
              </FormControl>
              <FormControl>
                <FormControl.Label>Nome de Usuário</FormControl.Label>
                <Input placeholder="Defina um nome de usuário" />
              </FormControl>
              <FormControl>
                <FormControl.Label>Data de Nascimento</FormControl.Label>
                <Input placeholder="EX: dd/mm/aaaa" />
              </FormControl>
              <FormControl>
                <FormControl.Label>Cidade</FormControl.Label>
                <Input placeholder="Onde você mora?" />
              </FormControl>
              <FormControl>
                <FormControl.Label>E-mail</FormControl.Label>
                <Input placeholder="Digite seu e-mail"
                  onChangeText={(text) => setEmail(text)}
                />
              </FormControl>
              <FormControl>
                <FormControl.Label>Senha</FormControl.Label>
                <Input placeholder="Digite sua senha"
                  onChangeText={(text) => setPassword(text)}
                  width={{ base: "75%", md: "25%" }}
                  type={show ? "text" : "password"}
                  InputRightElement={<Pressable onPress={() => setShow(!show)}>
                    <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
                      size={5} mr="2" color="muted.400" /></Pressable>} />
              </FormControl>
              <HStack space={6}>
                <Checkbox shadow={2} value="disable" acessibilityLabel="Confirmação dos termos" defaultIsChecked>
                  <Link href="https://nativebase.io">Li e estou de acordo com os Termos de Uso e Política de privacidade</Link></Checkbox>
              </HStack>
              <Button backgroundColor="black" mt="7"
                onPress={() => navigation.navigate("Bem-Vindo", {})}>Finalizar</Button>
            </VStack>
          </Box>
        </Center>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};
