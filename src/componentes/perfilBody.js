import React from 'react';
import { View, Text, Image, icon } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
export const ProfileBody = ({
    name,
    profileImage,
}) => {
    return (
        <View>
            {icon ? (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Feather
                        name="plus-square"
                        style={{
                            fontSize: 25,
                            color: 'black',
                            paddingHorizontal: 15,
                        }}
                    />
                </View>
            ) : null}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    paddingVertical: 20,
                }}>
                <View
                    style={{
                        alignItems: 'center',
                    }}>
                    <Image
                        source={profileImage}
                        style={{
                            resizeMode: 'cover',
                            width: 80,
                            height: 80,
                            borderRadius: 100,
                        }}
                    />
                    <Text
                        style={{
                            paddingVertical: 5,
                            fontWeight: 'bold',
                        }}>
                        {name}
                    </Text>
                </View>
            </View>
        </View>
    );
};
