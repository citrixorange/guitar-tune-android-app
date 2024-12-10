import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Option = ({ description, stateManager, setState, trigger }) => {

    const buttonRef = useRef(null);

    const animation = {
        0: { borderColor: '#fff' },
        1: { borderColor: '#fff' },
    };

    const animationHovered = {
        0: { borderColor: '#b98dc9' },
        0.3: { borderColor: '#e8a5ff' },
        0.6: { borderColor: '#b98dc9' },
        1: { borderColor: '#b98dc9' },
    };

    const handlePressIn = () => {
        buttonRef.current?.animate(animationHovered, 1500);
    };

    const handlePressOut = () => {
        buttonRef.current?.animate(animation, 1500);
    };

    return (
        <View style={styles.container}>
            <Animatable.View
                ref={buttonRef}
                style={styles.button}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    onPressIn={handlePressIn}
                    onPress={() => setState({ type: trigger })}
                    onPressOut={handlePressOut}
                >
                    <Text style={styles.buttonText}>{description}</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 84,
        width: 231,
        marginVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    button: {
        height: 84,
        width: 231,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'transparent',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        fontFamily: 'Mina'
    },
});
  
export { Option };