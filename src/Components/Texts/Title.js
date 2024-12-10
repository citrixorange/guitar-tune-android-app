import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { height } from '../../Pages/App';

const Title = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxHeight: 0.065*height,
        position: 'relative',
        marginTop: 0
    },
    title: {
        fontFamily: 'Mina',
        fontSize: 32,
        color: '#fff'
    }
});
  
export { Title };