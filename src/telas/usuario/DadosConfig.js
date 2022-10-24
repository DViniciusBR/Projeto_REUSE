import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from '../../componentes/Menu';

function DadosConfig() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ flexDirection: 'column', marginLeft: 15 }}>
          <Image source={require('../../../assets/dadosuser.png')} style={{ height: 50, width: 50 }} />
        <Text>Dados pessoais</Text>
        <Text>Dados pessoais</Text>
        <Text>Dados pessoais</Text>
        <Text>Dados pessoais</Text>
      </View>
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
        component={DadosConfig}
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