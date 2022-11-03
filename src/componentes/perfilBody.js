import React from 'react';
import { View, Text, Image } from 'react-native';

export const ProfileBody = ({
    name,
    profileImage,
}) => {
    return (
        <View>
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

let squares = [];
  let numberOfSquare = 7;
