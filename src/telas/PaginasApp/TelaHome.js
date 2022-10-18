import * as React from 'react';
import { Text, View, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, Button, Box, KeyboardAvoidingView } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaChat from './TelaChat';
import Menu from '../../componentes/Menu';
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

function HomeScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <ImageBackground source={require('../../../assets/telainicial.png')} style={{ resizeMode: "cover", flex: 1 }} imageStyle={{ opacity: 0.5 }}>
          <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('TelaArtigos', {})}>
              <Carrosel />
            </TouchableOpacity>
            <View flexDirection="row" alignSelf="flex-start">
              <Box alignItems="center" style={{ marginLeft: 10 }}>
                <Button
                  position="relative"
                  style={{ padding: 1, height: 120, width: 110, borderRadius: 30 }}
                  backgroundColor="#42eb89" mt="7"
                  onPress={() => navigation.navigate("TelaArtigos", {})}>
                </Button>
                <Text style={{ alignItems: 'center' }}>Desapega</Text>
              </Box>
              <View>
                <Box alignItems="center" style={{ marginLeft: 20 }}>
                  <Button
                    position="relative"
                    style={{ padding: 1, height: 120, width: 110, borderRadius: 30 }}
                    backgroundColor="#42eb89" mt="7"
                    onPress={() => navigation.navigate("Dados", {})}>
                  </Button>
                  <Text style={{ alignItems: 'center' }}>Salve o mundo</Text>
                </Box>
              </View>
              <View>
                <Box alignItems="center" style={{ marginLeft: 20 }}>
                  <Button
                    Image source={require('../../../assets/Recicle.png')}
                    position="relative"
                    style={{ padding: 1, height: 120, width: 110, borderRadius: 30 }}
                    backgroundColor="#42eb89" mt="7"
                    onPress={() => navigation.navigate("TelaArtigos", {})}>
                  </Button>
                  <Text style={{ alignItems: 'center' }}>Recicle</Text>
                </Box>
              </View>
            </View>
            <SearchBar />
          </KeyboardAvoidingView>
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

function MenuBar() {
  return (
    <SafeAreaView>
      <Image source={require('../../../assets/logo.png')} style={{ height: 50, width: 50 }} />
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
            headerRight: (props) => <MenuBar {...props} />
          }} />
        <Tab.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NativeBaseProvider>
  );
}