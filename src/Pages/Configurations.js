import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { Header, Footer } from '../Components';
import { Title } from '../Components/Texts';
import { Option } from '../Components/Buttons';
import { Triggers } from '../StateManager';
import { height } from './App';

const Configurations = ({ stateManager, setState }) => {

    return (
        <ImageBackground
            source={require('../../images/assets/background.png')}
            style={styles.backgroundImage}
        >
            <View style={styles.background}>
                <Header icon='back' stateManager={stateManager} setState={setState} goTo={Triggers.MENU}/>
                <Title title='Configurations'/>
                <View style={styles.switchGroup}>
                    <Option description='Detection' stateManager={stateManager} setState={setState} trigger={Triggers.DETECTION}/>
                    <Option description='Frequency' stateManager={stateManager} setState={setState} trigger={Triggers.FREQUENCY}/>
                </View>
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
      width: '100%',
      position: 'relative'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center'
    },
    switchGroup: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        height: 0.46*height
    }
});

  
export { Configurations };