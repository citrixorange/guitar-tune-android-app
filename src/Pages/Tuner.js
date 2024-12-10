import React, { useState, useEffect } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { Header, Footer } from '../Components';
import { Title } from '../Components/Texts';
import { Note } from '../Components/Texts/Note';
import { Scale } from '../Components/Scale';
import { Triggers } from '../StateManager';

const Tuner = ({ stateManager, setState, displayFreq }) => {
    return (
        <ImageBackground
            source={require('../../images/assets/background.png')}
            style={styles.backgroundImage}
        >
            <View style={styles.background}>
                <Header icon='hamburguer' stateManager={stateManager} setState={setState} goTo={Triggers.MENU}/>
                <Title title='Guitar Tuner'/>
                <Note note={{note: 'E', value: '1000.0'}} displayFreq={displayFreq}/>
                <Scale degree={{degree:40}}/>
                <Footer/>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      alignContent: 'center',
      width: '100%',
      position: 'relative'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
  
export { Tuner };