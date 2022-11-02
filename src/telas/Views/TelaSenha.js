import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';

import { useForm, Controller } from 'react-hook-form'

export default function RedefinirSenha() {
    const { control, handleSubmit } = useForm({})

    function handleSignIn(data) {
        console.log(data);
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Esqueci Minha Senha!</Text>

            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        placeholder="Insira seu email"
                    />
                )}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignIn)}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        backgrounColor:'#F0F4FF',
        paddingHorizontal: 18
    },
    title:{
        fontSize: 34,
        marginBottom: 34,
        fontWeight: 'Bold',
        color: '#121212'
    },
    input:{
        width: '100%',
        height: 40,
        backgroundColor: '#ffffff',
    },
    button:{

    },
    buttonText:{
        fontsize: 18,
        color: '#00000',

    }


})