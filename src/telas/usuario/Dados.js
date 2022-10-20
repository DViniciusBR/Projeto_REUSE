import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from '../../componentes/Menu';

function TelaPrincipal({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Image source={require('../../../assets/email.png')} style={{ height: 50, width: 50, padding: 10 }} />
      <Text style={{ flexDirection: 'row' }}>email.usuario@exemplo.com</Text>

      <Image source={require('../../../assets/user.png')} style={{ height: 50, width: 50 }} />
      <Text>Nome.usuario</Text>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('DadosConfig', {})}>
        <Image source={require('../../../assets/dadosuser.png')} style={{ height: 50, width: 50 }} />
        </TouchableOpacity>
      </View>
      <Text>Dados pessoais</Text>
    </View>
  );
}

function MenuBar() {
  return (
    <View>
      <Image source={require('../../../assets/logo.png')} style={{ height: 50, width: 50 }} />
    </View>
  );
}

function MenuLateral() {
  return (
    <View>
      <Menu />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#42eb89',
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="Home"
        component={TelaPrincipal}
        options={{
          title: 'Meus Dados',
          headerLeft: (props) => <MenuLateral {...props} />,
          headerRight: (props) => <MenuBar {...props} />
        }}
      />
    </Stack.Navigator>

  );
}

export default App;
