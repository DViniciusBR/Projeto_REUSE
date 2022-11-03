import * as React from 'react';
import { SafeAreaView, Text, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar } from 'react-native-elements';
import Menu from '../../componentes/Menu';
import Postagens from  './Postagens';

function User() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     
    </SafeAreaView>
  );
}

function Conteudo() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <User/>
      <Postagens/> 
    </SafeAreaView>
  );
}

function MenuBar() {
  return (
    <SafeAreaView>
      <Image source={require('../../../assets/images/logo.png')} style={{ height: 50, width: 50 }} />
    </SafeAreaView>
  );
}

function MenuLateral() {
  return (
    <SafeAreaView>
      <Menu />
    </SafeAreaView>
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
        component={Conteudo}
        options={{
          title: 'Minhas Publicações',
          headerLeft: (props) => <MenuLateral {...props} />,
          headerRight: (props) => <MenuBar {...props} />
        }}
      />
    </Stack.Navigator>

  );
}

export default App;
