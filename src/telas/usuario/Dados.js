import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

class Dados extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <SafeAreaView style={{flex:1}}>
          <TouchableOpacity style={{alignItems:'flex-start', margin:16}}
          onPress={()=>this.props.navigation.openDrawer()}>
            <Icon name="bars" size={24} color="#cc5500" />
          </TouchableOpacity>
          <View  style={{flex:1, alignItems:'center', jutifyContent:200}}>
            <Text>Tela Dados</Text>
          </View>
        </SafeAreaView>
      </View>
    )
  }
}

export default Dados;