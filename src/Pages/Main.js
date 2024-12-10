import React, { useState, useEffect } from 'react';
import { View, ImageBackground, StyleSheet,SafeAreaView } from 'react-native';
import { Header, Footer } from '../Components';
import { Tune } from '../Components/Buttons';
import { Title } from '../Components/Texts';
import { Triggers } from '../StateManager';

const Main = ({ stateManager, setState }) => {

    return (
      <SafeAreaView style={{ flex: 1 }}>
          <ImageBackground
              source={require('../../images/assets/background.png')}
              style={styles.backgroundImage}
          >
              <View style={styles.background}>
                <Header icon='hamburguer' stateManager={stateManager} setState={setState} goTo={Triggers.MENU}/>
                <Title title='Guitar Tune'/>
                <Tune stateManager={stateManager} setState={setState}/>
                <Footer/>
              </View>
        </ImageBackground>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '100%',
      position: 'relative'
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
});

  
export { Main };