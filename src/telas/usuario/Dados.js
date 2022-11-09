import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function TelaPrincipal({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>

      <View style={{ flexDirection: 'row', marginLeft: 10 }}>
        <Image source={require('../../../assets/images/email.png')} style={{ height: 50, width: 50, padding: 10 }} />
        <Text>email.usuario@exemplo.com</Text>
      </View>

      <View style={{ flexDirection: 'row', marginLeft: 10 }}>
        <Image source={require('../../../assets/images/user.png')} style={{ height: 50, width: 50 }} />
        <Text>Nome.usuario</Text>
      </View>

      <View style={{ flexDirection: 'row', marginLeft: 15 }}>
        <TouchableOpacity onPress={() => navigation.navigate('DadosConfig', {})}>
          <Image source={require('../../../assets/images/dadosuser.png')} style={{ height: 50, width: 50 }} />
        </TouchableOpacity>
        <Text>Dados pessoais</Text>
      </View>

    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator
      screenOptions={{headerTintColor: '#fff'}}>
      <Stack.Screen
        name="Home"
        component={TelaPrincipal}
        options={{
          headerShown: false
         
        }}
      />
    </Stack.Navigator>

  );
}

export default App;
