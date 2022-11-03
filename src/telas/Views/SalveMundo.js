import * as React from 'react';
import { SafeAreaView, Text, Image, View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Conteudo() {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>
        <View style={styles.box1}>
          <Text style={styles.text}>
            Entenda o impacto ao meio ambiente com o desperdicio da água.
          </Text>
          
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>
            {' '}
            Entenda como o plástico afeta o meio ambiente
          </Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.text}>
            {' '}
            Entenda como o papel afeta o meio ambiente
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

function MenuBar() {
  return (
    <SafeAreaView>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={{ height: 50, width: 50 }}
      />
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
      }}>
      <Stack.Screen
        name="Home"
        component={Conteudo}
        options={{
          title: 'Salve o mundo',
          headerRight: (props) => <MenuBar {...props} />,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    top: 100,
    left: 0,
    width: 275,
    height: 120,
    backgroundColor: '#42eb89',
  },
  box2: {
    ...StyleSheet.absoluteFill,
    top: 240,
    left: 0,
    width: 275,
    height: 120,
    backgroundColor: '#42eb89',
  },
  box3: {
    ...StyleSheet.absoluteFillObject,
    top: 380,
    left: 0,
    width: 275,
    height: 120,
    backgroundColor: '#42eb89',
  },
  text: {
    color: '#000000',
    fontSize: 15,
  },
});

export default App;
