import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View, Text, TextInput, ImageBackground, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const categoryIcons = [
    <Icon name="flight" size={25}/>,
    <Icon name="beach-access" size={25}/>,
    <Icon name="near-me" size={25}/>,
    <Icon name="place" size={25}/>,
];

const ListCategories = () => {
    return (
        <View style={style.categoryContainer}>
            {categoryIcons.map((icon, index) => (
                <View key={index} style={style.iconContainer}>
                    {icon}
                </View>
            ))}
        </View>
    );
};

const style = StyleSheet.create({
    header: {
      paddingVertical: 20,
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'red',
    },
    categoryContainer: {
      marginTop: 60,
      marginHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    iconContainer: {
      height: 60,
      width: 60,
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
  });
  export default HomeScreen;