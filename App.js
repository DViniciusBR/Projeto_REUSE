import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from './src/telas/TelaInicial';
import TelaCad from './src/telas/TelaCad';
import TelaLog from './src/telas/TelaLog';
import TelaHome from './src/telas/TelaHome';
import Perfil from './src/usuario/Perfil';

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <Stack.Screen name="Perfil" component={Perfil} />
=======
>>>>>>> a71db1feb34319937bcfc30a2f506e6b62ce2da1
=======
>>>>>>> a71db1feb34319937bcfc30a2f506e6b62ce2da1
=======
>>>>>>> a71db1feb34319937bcfc30a2f506e6b62ce2da1
=======
>>>>>>> a71db1feb34319937bcfc30a2f506e6b62ce2da1
      </Stack.Navigator>
    </NavigationContainer >
  );
}