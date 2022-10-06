import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from './src/telas/PaginasApp/TelaInicial';
import TelaCad from './src/telas/PaginasApp/TelaCad';
import TelaLog from './src/telas/PaginasApp/TelaLog';
import TelaHome from './src/telas/PaginasApp/TelaHome';

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
      </Stack.Navigator> 
    </NavigationContainer >

  );
}