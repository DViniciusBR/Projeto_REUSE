// import React, { Component } from 'react';
// import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import DrawerNav from '../componentes/DrawerNav';
// Icon.loadFont();

// class TelaHome extends Component {
//   render() {
//     return (
//       <View style={{flex:1}}>
//         <SafeAreaView style={{flex:1}}>
//           <TouchableOpacity style={{alignItems:'flex-start', margin:16}}
//           onPress={()=>this.props.navigation.openDrawer}>
//             <Icon name="bars" size={24} color="#cc5500" />
//           </TouchableOpacity>
//           <View  style={{flex:1, alignItems:'center', jutifyContent:200}}>
//             {DrawerNav}
//           </View>
//         </SafeAreaView>
//       </View>
//     )
//   }
// }

// export default TelaHome;

import IconButton from '../componentes/IconButton';
import React from "react";
import { View } from "react-native";


export default function MenuPrincipal({ navigation }) {
    return (
        <View>
            <IconButton
            onPress={() => navigation.navigate("Eu", {})}>
            </IconButton>
        </View>
    );
}

function Jogo() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Lottie resizeMode="contain" source={imgjogo} autoPlay loop/>
    </SafeAreaView>
  );
}


function HomeApp() {
  return (
    
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Tela seguindo o protótipo</Text>
    </SafeAreaView>

  );
}

const Drawer = createDrawerNavigator();

function Chat() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen
        name=" "
        component={Perfil}
        drawerPosition='left'
        hideStatusBar={false}
        overlayColor='#00000090'
        drawerStyle={{backgroundColor:'#ffffff'}}
      />
    </Drawer.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-sharp';
          } else if (route.name === 'Game') {
            iconName = focused ? 'game-controller' : 'game-controller';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbox' : 'chatbox';
          } return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#00ec84',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Game" component={Jogo} options={{ headerShown: false }} />
      <Tab.Screen name="Home" component={Chat} options={{ headerShown: false }} />
      <Tab.Screen name="Chat" component={HomeApp} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}