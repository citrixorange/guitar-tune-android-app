import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { Header, Footer } from '../Components';
import { Title, Version as VersionText } from '../Components/Texts';
import { Triggers } from '../StateManager';

const Version = ({ stateManager, setState }) => {
    return (
        <ImageBackground
            source={require('../../images/assets/background.png')}
            style={styles.backgroundImage}
        >
            <View style={styles.background}>
                <Header icon='back' stateManager={stateManager} setState={setState} goTo={Triggers.MENU}/>
                <Title title='Version'/>
                <VersionText/>
                <Footer/>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'stretch',
      width: '100%',
      position: 'relative'
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center'
    },
});
  
export { Version };