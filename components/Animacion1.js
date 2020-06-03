import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Animated } from 'react-native';

const Animacion2 = () => {

    const [ animacion ] = useState ( new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            animacion, {
                toValue: 1, // al valor que llega
                duration: 500, // cantidad de tiempo en que llega
                useNativeDriver: true
            }
        ).start(); // iniciar la animacion
    }, []);
    return (
        <>
        <Animated.View
            style={{
                opacity: animacion
            }}
        >
            <Text style={styles.texto}>Animacion1</Text>
        </Animated.View>
        </>
    );
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center'
    }
})
export default Animacion1;