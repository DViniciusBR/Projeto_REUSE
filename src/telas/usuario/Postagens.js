import { View, Text, StyleSheet, Touchable, Image } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { firebase } from './PostConfig';
import { response } from 'express';
import { Alert } from 'bootstrap';

const Postagens = () => {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibaryAsync({
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
        const response = await response.blob();
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
            <Text>UploadScreen</Text>
        </View>
    )
}

export default Postagens;
