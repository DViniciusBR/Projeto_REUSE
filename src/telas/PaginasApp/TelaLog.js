import React from 'react';
import { Box, VStack, HStack, FormControl, Input, Button, Center, NativeBaseProvider, Pressable, Icon, Link, show } from "native-base";
import { Text, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TelaLog({ navigation }) {

  const [show, setShow] = React.useState(false);

  return (
    <NativeBaseProvider>
      <SafeAreaView>
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
              <Link _text={{ fontSize: 14, fontWeight: "500", color: "indigo.500" }} alignSelf="flex-end" mt="1"
                href="https://support.google.com/accounts/answer/41078?hl=pt-BR&co=GENIE.Platform%3DAndroid">Esqueceu sua senha?</Link>

              <Button backgroundColor="black" mt="7"
                onPress={() => navigation.navigate("Bem-Vindo", {})}>Finalizar</Button>

              <HStack mt="6" justifyContent="center">
                <Text fontSize="sm" color="coolGray.600" _dark={{
                  color: "warmGray.200"
                }}>
                  Não tem cadastro? </Text>
                <Link _text={{ color: "indigo.500", fontWeight: "medium", fontSize: "sm" }}
                  href="https://accounts.google.com/signup/v2/webcreateaccount?continue=https%3A%2F%2Fwww.google.com%2F&hl=pt-BR&biz=false&flowName=GlifWebSignIn&flowEntry=SignUp">Cadastre-se</Link>
              </HStack>
            </VStack>
          </Box>
        </Center>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};
