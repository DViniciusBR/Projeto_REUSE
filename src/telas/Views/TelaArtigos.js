import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from '../../componentes/Menu';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela seguindo o protótipo</Text>
    </View>
  );
}

function MenuBar() {
  return (
    <View>
      <Image source={require('../../../assets/images/logo.png')} style={{ height: 50, width: 50 }} />
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

function Artigos() {
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
          component={HomeScreen}
          options={{ 
            title: 'Artigos',
            headerLeft: (props) => <MenuLateral {...props} />,
            headerRight: (props) => <MenuBar {...props} />
           }}
        />
      </Stack.Navigator>
    
  );
}

export default Artigos;
