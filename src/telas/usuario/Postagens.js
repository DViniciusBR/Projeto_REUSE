import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { firebase } from './PostConfig';

const UploadScreen = () => {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        const source = { uri: result.uri };
        console.log(source);
        setImage(source);
    };
    const uploadImage = async () => {
        setUploading(true);
        const response = await fetch(image.uri)
        const blob = await response.blob();
        const filename = image.uri.substring(image.uri.lastIndexOf('/') + 1);
        var ref = firebase.storage().ref().child(filename).put(blob);

        try {
            await ref;
        } catch (e) {
            console.log(e)
        }
        setUploading(false);
        Alert.alert(
            'Sucesso'
        );
        setImage(null);
    };

    return (
        <View style={{ flex: 1 }}>
            <View flexDirection="row" alignSelf="flex-start">
                <View style={{ alignItems: 'center', marginRight: 15 }}>
                    <TouchableOpacity position="relative" style={styles.selectButton} onPress={pickImage}>
                        <Text style={styles.buttonText}>Escolher foto</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity position="relative" style={styles.uploadButton, styles.selectButton} onPress={uploadImage}>
                        <Text style={styles.buttonText}>Publicar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {image && <Image source={{ uri: image.uri }} style={{ width: 320, height: 200, borderRadius: 10, alignItems: "center" }} />}
        </View>
    )
}

export default UploadScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000',
        justifyContent: 'center'
    },
    selectButton: {
        borderRadius: 5,
        width: 150,
        height: 50,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    imageContainer: {
        marginTop: 30,
        marginBottom: 50,
        alignItems: 'center'
    }
})