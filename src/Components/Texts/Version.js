import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Version = () => {
    return (
        <View style={styles.version}>
            <Text style={styles.description}>
                v1.0.0
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    version: {
        fontFamily: 'Manjari',
        fontSize: 14,
        color: 'white',
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        position: 'relative',
        marginTop: 0,
        marginBottom: 0,
        textAlign: 'center'
    },
    description: {
        fontFamily: 'Manjari',
        fontSize: 14,
        color: '#fff',
        textAlign: 'center'
    },
});
  
export { Version };