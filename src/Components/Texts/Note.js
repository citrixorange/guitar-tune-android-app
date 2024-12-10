import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { height } from '../../Pages/App';

const Note = ({note, displayFreq}) => {

    let freq = '1000 Hz';

    if (note) {
        
        //if(displayFreq['Show Frequency'] == true) {
        //    freq = `${parseFloat(note.value.toFixed(1))} Hz`;
        //}

        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    {note.note}
                </Text>
                <Text style={styles.note}>
                    {freq}
                </Text>
            </View>
        );

    } else {

        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    {''}
                </Text>
                <Text style={styles.note}>
                    {''}
                </Text>
            </View>
        );

    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'space-around',
        width: '100%',
        marginTop: 0.1*height,
        position: 'relative'
    },
    title: {
        fontFamily: 'Mina',
        fontSize: 32,
        color: '#fff'
    },
    note: {
        fontFamily: 'Mina',
        fontSize: 20,
        color: '#fff'  
    }
});
  
export { Note };