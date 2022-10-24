import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from './src/telas/Views/TelaInicial';
import TelaCad from './src/telas/Views/TelaCad';
import TelaLog from './src/telas/Views/TelaLog';
import TelaHome from './src/telas/Views/TelaHome';
import Perfil from './src/telas/usuario/Perfil';
import Dados from './src/telas/usuario/Dados';
import DadosConfig from './src/telas/usuario/DadosConfig';
import TelaArtigos from './src/telas/Views/TelaArtigos';
import TelaDesapega from './src/telas/Views/TelaDesapega';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="tela1">
        <Stack.Screen name="telaini" component={TelaInicial} options={{ headerShown: false}} />
        <Stack.Screen name="Cadastre-se" component={TelaCad} />
        <Stack.Screen name="Login" component={TelaLog} />
        <Stack.Screen name="Ir" component={TelaHome} options={{ headerShown: false}}/>
        <Stack.Screen name="Bem-Vindo" component={TelaHome} options={{ headerShown: false}}/>
        <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false}}/>
        <Stack.Screen name="Dados" component={Dados} options={{ headerShown: false }}/>
        <Stack.Screen name="TelaArtigos" component={TelaArtigos} options={{ headerShown: false }}/>
        <Stack.Screen name="TelaDesapega" component={TelaDesapega} options={{ headerShown: false }}/>
        <Stack.Screen name="DadosConfig" component={DadosConfig} options={{ headerShown: false }}/>
      </Stack.Navigator> 
    </NavigationContainer >

  );
}