import * as React from 'react';
import { NativeBaseProvider } from "native-base";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Reuse = ({ navigation }) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => navigation.navigate('telaini')}>
            <Image source={require('../../assets/recicle.png')}/>
            <View>
              <Text>Recicle</Text>
            </View>
          </TouchableOpacity>

            {/* <Button
              source={require('../../../assets/logo.png')}
              style={{ padding: 1, height: 140, width: 130, borderRadius: 30 }}
              backgroundColor="#42eb89" mt="7"
              onPress={() => navigation.navigate("Cadastre-se", {})}>
            </Button><Text style={{ alignItems: 'center' }}>Desapega</Text></Box> */}

      </SafeAreaView>
    );
}

export default Reuse;