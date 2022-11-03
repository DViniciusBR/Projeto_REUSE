import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
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
        <View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {image && <Image source={{ uri: image.uri }} style={{ width: 280, height: 300, borderRadius: 10 }} />}
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
                    <Text style={styles.buttonText}> Pick an image</Text>
                </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.uploadButton, styles.selectButton} onPress={uploadImage}>
                    <Text style={styles.buttonText}>
                        Upload Image
                    </Text>
                </TouchableOpacity>

            </View>
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