import * as React from 'react';
import { Text, View, SafeAreaView, ImageBackground } from 'react-native';
import { NativeBaseProvider } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaChat from './TelaChat';
import Menu from '../../componentes/Menu';
import Atalho from '../../componentes/Atalho';
import Carrosel from '../../componentes/Carrosel';
import SearchBar from '../../componentes/SearchBar';

const Tab = createBottomTabNavigator();

//Abaixo encontra-se os botõesva do menu de navegação(tab navigation)

function JogoScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela com a animação</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground source={require('../../../assets/telainicial.png')} style={{ resizeMode: "cover", flex: 1 }} imageStyle={{ opacity: 0.5 }}>
          <Carrosel />
          <Atalho/>
          {/* <Box alignItems='flex-start'>
            <Button
              source={require('../../../assets/logo.png')}
              style={{ padding: 1, height: 140, width: 130, borderRadius: 30 }}
              backgroundColor="#42eb89" mt="7"
              onPress={() => navigation.navigate("Cadastre-se", {})}>
            </Button><Text style={{ alignItems: 'center' }}>Desapega</Text></Box> */}
          <SearchBar />
        </ImageBackground>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

function MenuLateral() {
  return (
    <SafeAreaView>
      <Menu />
    </SafeAreaView>
  );
}



function ChatScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TelaChat />
    </View>
  );
}

export default function App() { // Isso é reponsável pelo menu de navegação da tela inicial(tab navigation)
  return (
    <NativeBaseProvider>
      <Tab.Navigator
        tabBarOption=
        {{
          style: {
            backgroundColor: "black"
          }
        }}
        initialRouteName='Home'
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
            headerTitleStyle: { fontWeight: 'bold', },
          }} />
        <Tab.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NativeBaseProvider>
  );
}