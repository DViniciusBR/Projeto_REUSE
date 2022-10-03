import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from './src/telas/TelaInicial';
import TelaCad from './src/telas/TelaCad';
import TelaLog from './src/telas/TelaLog';
import TelaHome from './src/telas/TelaHome';
import Perfil from './src/usuario/Perfil';
import Routes from './src/routes';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer >
      /* <Stack.Navigator initialRouteName="tela1">
        <Stack.Screen name="telaini" component={TelaInicial} options={{ headerShown: false}} />
        <Stack.Screen name="Cadastre-se" component={TelaCad} />
        <Stack.Screen name="Login" component={TelaLog} />
        <Stack.Screen name="Ir" component={TelaHome} options={{ headerShown: false}}/>
        <Stack.Screen name="Bem-Vindo" component={TelaHome} options={{ headerShown: false}}/>
<<<<<<< HEAD

        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer >
=======
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator> */
>>>>>>> bcd7ec5eef47c85500ca31cdb321de301f152fd6
  );
}