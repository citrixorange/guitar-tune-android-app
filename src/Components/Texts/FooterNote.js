import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { height } from '../../Pages/App';

const FooterNote = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Developed by Lobo Guará - Softwares Brasileiros
            </Text>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '100%',
        maxHeight: 0.049*height,
        position: 'relative',
        marginTop: 0,
        marginBottom: 10
    },
    text: {
        fontFamily: 'Manjari',
        fontSize: 10,
        color: '#594E7B'
    }
});
  
export { FooterNote };