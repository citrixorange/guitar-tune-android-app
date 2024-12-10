import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { height } from '../../Pages/App';

const About = () => {
    return (
        <View style={styles.background}>    
            <Text style={styles.highlightWordTop}>
                Guitar Tune 
            </Text>
            <Text style={styles.description}>
                has been developed for free
            </Text>
            <Text style={styles.description}>
                use. It has been released by Lobo Guará - Softwares Brasileiros under GNU License as a
            </Text>
            <Text style={styles.description}>
                completelly Open Source Software. If you are interested to contributed on new versions
            </Text>
            <Text style={styles.description}>
                of Guitar Tune, checkout our github page at
            </Text>
            <Text style={styles.highlightWordBottom}>
                https://github.com/citrixorange
            </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginTop: 0.1*height,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0.1*height,
        textAlign: 'center',
        width: '100%'
    },  
    description: {
        fontFamily: 'Manjari',
        fontSize: 12,
        color: '#fff',
        textAlign: 'center'
    },
    highlightWordTop: {
        marginRight: 0,
        color: '#E8A5FF'
    },
    highlightWordBottom: {
        color: '#9780DE'
    },
});
  
export { About };