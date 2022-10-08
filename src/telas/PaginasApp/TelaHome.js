import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import {  NativeBaseProvider } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaChat from './TelaChat';
import Menu from '../../componentes/Menu';
//import Carousel from '../../componentes/Carousel';
//import SearchBar from '../../componentes/SearchBar';

const Tab = createBottomTabNavigator();

function JogoScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela com a animação</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <SafeAreaView>
      {/* <Carousel/> */}
    </SafeAreaView>
  );
}

function MenuLateral() {
  return (
    <SafeAreaView>
      <Menu/>
    </SafeAreaView>
  );
}

// function Search() {
//   return (
//     <SafeAreaView>
//      <SearchBar/>
//     </SafeAreaView>
//   );
// }

function ChatScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TelaChat />
    </View>
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Jogo') {
              iconName = focused ? 'game-controller' : 'game-controller';
            } else if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-sharp';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'chatbox' : 'chatbox';
            } else if (route.name === 'Config') {
              iconName = focused ? 'settings' : 'settings';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#42eb89',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Jogo" component={JogoScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Home" component={HomeScreen}
          options={{
            headerLeft: (props) => <MenuLateral {...props} />,
            headerTitle: '',
            headerStyle: { backgroundColor: '#42eb89' },
            headerTintColor: 'black',
            headerTitleStyle: { fontWeight: 'bold', },
          }} />
        <Tab.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NativeBaseProvider>
  );
}
