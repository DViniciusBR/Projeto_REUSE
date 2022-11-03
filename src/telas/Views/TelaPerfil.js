import React from 'react';
import { View } from 'react-native';
import { ProfileBody } from '../../componentes/perfilBody';

const Profile = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: '100%', padding: 10 }}>
                <ProfileBody
                    name="Rebeca Britto"
                    profileImage={require('../../../assets/images/logo.png')}
                />
            </View>
        </View>
    );
};

let squares = [];
let numberOfSquare = 7;

for (let index = 0; index < numberOfSquare; index++) {
    squares.push(
        <View key={index}>
            <View
                style={{
                    width: 130,
                    height: 150,
                    marginVertical: 0.5,
                    backgroundColor: 'black',
                    opacity: 0.1,
                }}></View>
        </View>,
    );
}

export default Profile;