import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from './src/telas/TelaInicial';
import TelaCad from './src/telas/TelaCad';
import TelaLog from './src/telas/TelaLog';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="tela1">
        <Stack.Screen name="telaini" component={TelaInicial} options={{ title: '' }} />
        <Stack.Screen name="Cadastre-se" component={TelaCad} />
        <Stack.Screen name="Login" component={TelaLog} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}