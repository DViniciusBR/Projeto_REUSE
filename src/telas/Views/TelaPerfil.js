import React from 'react';
import { View, Text } from 'react-native';
import { ProfileBody } from '../../componentes/perfilBody';


const Profile = () => {
    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
            <View style={{ width: '100%', padding: 10 }}>
                <ProfileBody
                    name="rebeca britto"
                    profileImage={require('../../../assets/images/decoracao.png')}
                />
            </View>
            <View>
                <Text
                    style={{
                        padding: 10,
                        letterSpacing: 1,
                        fontSize: 14,
                    }}>
                </Text>
            </View>
        </View>
    );
};

export default Profile;