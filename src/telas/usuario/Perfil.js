import * as React from 'react';
import { SafeAreaView, Text, Image, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Postagens from  './Postagens';

function Conteudo() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
          headerRight: (props) => <MenuBar {...props} />
        }}
      />
    </Stack.Navigator>

  );
}

export default App;
