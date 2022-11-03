import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default function App() {
    const animation = useRef(null);
    useEffect(() => {
    }, []);

    return (
        <View style={styles.animationContainer}>
            <LottieView
                autoPlay
                ref={animation}
                style={{
                    width: 800,
                    height: 200,
                }}
                source={require('../../../assets/animations/jogo.json')}
            />
            <View style={styles.buttonContainer}>
                <Button
                    backgroundColor="black"
                    title="JOGO DISPONÍVEL EM BREVE"
                    onPress={() => {
                        animation.current?.reset();
                        animation.current?.play();
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    animationContainer: {

        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    buttonContainer: {
        paddingTop: 30,
    },
});