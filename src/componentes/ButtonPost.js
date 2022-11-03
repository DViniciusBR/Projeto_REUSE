import React from 'react';
import { View, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export default class FloatingButton extends React.Component {
    animation = new Animated.Value(0)
    toggleMenu = () => {
        const toValue = this.open ? 0 : 1;

        Animated.spring(this.animation, {
            toValue,
            friction: 5
        }).start();

        this.open = !this.open;
    };

    render() {

        const pinStyle = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -10]
                    })
                }
            ]
        };

        const heartStyle = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -20]
                    })
                }
            ]
        };

        const rotation = {
            transform: [
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '45deg']
                    })
                }
            ]
        };

        return (
            <View stule={[styles.container, this.props.style]}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Perfil", {})}>
                    <Animated.View style={[styles.button, styles.secondary, pinStyle]}>
                        <MaterialIcons name='post-add' size={20} color="#42eb89" />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[styles.button, styles.menu, rotation]}>
                        <AntDesign name='plus' size={24} color="black" />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: 'absolute'
    },
    button: {
        left: 290,
        width: 60,
        height: 60,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 10,
        shadowColor: '#F02A4B',
        shadowOpacity: 0.3,
        shadowOffset: { height: 10 },
        
    },
    menu: {
        backgroundColor: '#42eb89'
    },
    secondary: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        backgroundColor: '#FFF'
    }
});