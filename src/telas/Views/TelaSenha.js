import * as React from 'react';
import { SafeAreaView, Button, Image, StyleSheet, Text } from 'react-native';
import { FormControl, Input, Stack, Box, NativeBaseProvider } from "native-base";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Conteudo() {
    return (
        <NativeBaseProvider>
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Box alignItems="center" >
                        <Box w="100%" maxWidth="300px">
                            <FormControl isRequired>
                                <Stack mx="4">
                                    <FormControl.Label>Insira um e-mail válido</FormControl.Label>
                                    <Input type="email" placeholder="endereço de email" />
                                </Stack>
                            </FormControl>
                           <Text>Recuperar senha</Text>
                        </Box>
                    </Box>
            </SafeAreaView>
        </NativeBaseProvider>
    );
}

function MenuBar() {
    return (
        <SafeAreaView>
            <Image source={require('../../../assets/images/logo.png')} style={{ height: 50, width: 50 }} />
        </SafeAreaView>
    );
}

const Stack1 = createNativeStackNavigator();

function App() {
    return (
        <Stack1.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#42eb89',
                },
                headerTintColor: '#fff',
            }}
        >
            <Stack1.Screen
                name="Home"
                component={Conteudo}
                options={{
                    title: 'Esqueci minha Senha',
                    headerRight: (props) => <MenuBar {...props} />
                }}
            />
        </Stack1.Navigator>

    );
}

const styles = StyleSheet.create({
    container: {
        backgrounColor: '#F0F4FF',
        paddingHorizontal: 18
    },
    title: {
        fontSize: 24,
        marginBottom: 34,
        fontWeight: 'Bold',
        color: '#121212'
    },
    input: {
        width: '100%',
        height: 40,
        backgroundColor: '#ffffff',
    },
    button: {

    },
    buttonText: {
        fontsize: 18,
        color: '#00000',

    }


})

export default App;
