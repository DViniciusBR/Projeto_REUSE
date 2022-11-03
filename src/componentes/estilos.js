import React from 'react-native';
import { StyleSheet, View } from 'react-native';

export default function TelaInicial() {
    return (
        <View>
        <View style={styles.middle} />
        </View>
    );
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 5,
        margin: 5,
    },

    middle: {
        alignItems: 'center',
        marginLeft: 10,
        width: 370,
        height: 1000,
        backgroundColor: "black",
        borderWidth: 1,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        opacity: 0.5
        
    }}); 