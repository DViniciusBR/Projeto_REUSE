import * as React from 'react';
import { Text, View, SafeAreaView, ImageBackground, Image } from 'react-native';
import { NativeBaseProvider, Button, Box } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaChat from './TelaChat';
import TelaJogo from '../jogo/TelaJogo';
import Dados from '../usuario/Dados';

const Tab = createBottomTabNavigator();

//Abaixo encontra-se os botõesva do menu de navegação(tab navigation)

function JogoScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TelaJogo/>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ flex: 1 }}>
          <View>
            <Box alignItems="center">
              <Button
                style={{ padding: 1, height: 170, width: 310, borderRadius: 30 }}
                backgroundColor="#42eb89" mt="7"
                onPress={() => navigation.navigate("TelaArtigos", {})}>
                <Image source={require('../../../assets/images/swagua.png')} style={{ height: 50, width: 50 }} />
              <Text style={{ alignItems: 'center', fontWeight: '500' }}>Entenda o impacto ao meio ambiente com o desperdício da água</Text>
              </Button>
            </Box>
            <View>
              <Box alignItems="center">
                <Button
                  style={{ padding: 1, height: 170, width: 310, borderRadius: 30 }}
                  backgroundColor="#42eb89" mt="7"
                  onPress={() => navigation.navigate("TelaArtigos", {})}>
                  <Image source={require('../../../assets/images/swplastic.png')} style={{ height: 50, width: 50 }} />
                <Text style={{ alignItems: 'center', fontWeight: '500' }}>Entenda como o plástico afeta o meio ambiente</Text>
                </Button>
              </Box>
            </View>
            <View>
              <Box alignItems="center">
                <Button
                  style={{ padding: 1, height: 170, width: 310, borderRadius: 30 }}
                  backgroundColor="#42eb89" mt="7"
                  onPress={() => navigation.navigate("TelaArtigos", {})}>
                  <Image source={require('../../../assets/images/swpaper.png')} style={{ height: 50, width: 50 }} />
                <Text style={{ alignItems: 'center', fontWeight: '500' }}>Entenda como o papel afeta o meio ambiente</Text>
                </Button>
              </Box>
            </View>
          </View>
      </SafeAreaView>
    </NativeBaseProvider>

  );
}

function ConfigScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
        <Dados/>
        
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



function ChatScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TelaChat />
    </View>
  );
}

export default function Home() { // Isso é reponsável pelo menu de navegação da tela inicial(tab navigation)
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
          tabBarInactiveTintColor: 'white',
          tabBarStyle: { backgroundColor: 'black' }
        })}
      >
        <Tab.Screen name="Jogo" component={JogoScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Home" component={HomeScreen}
          options={{
            headerTitle: 'Salve o mundo',
            headerStyle: { backgroundColor: '#42eb89' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerRight: (props) => <MenuBar {...props} />
          }} />
        <Tab.Screen name="Chat" component={ChatScreen}  
        options={{
          headerTitle: 'Chat',
          headerStyle: { backgroundColor: '#42eb89' },
          headerTitleStyle: { fontWeight: 'bold' },
          headerRight: (props) => <MenuBar {...props} />
        }}
        />
        <Tab.Screen name="Config" component={ConfigScreen}
        options={{
          headerTitle: 'Configurações',
          headerStyle: { backgroundColor: '#42eb89' },
          headerTitleStyle: { fontWeight: 'bold' },
          headerRight: (props) => <MenuBar {...props} />
        }}
        />
      </Tab.Navigator>
    </NativeBaseProvider>
  );
}