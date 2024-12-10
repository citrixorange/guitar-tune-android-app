import React, { useState, useEffect } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { Header, Footer } from '../Components';
import { Title } from '../Components/Texts';
import { ToggleSwitch } from '../Components/Buttons';
import { height } from './App';
import { Triggers } from '../StateManager';

const Frequency = ({ stateManager, setState, setConfig }) => {

    const [showFreq, setShowFreq] = useState(false);

    const handleShowFreqChange = () => {
        setShowFreq(prevState => !prevState)
    };

    useEffect(() => {
        setConfig(prevConfig => ({
            ...prevConfig,
            ["Show Frequency"]: showFreq
        }))
    }, [showFreq]);

    return (
        <ImageBackground
            source={require('../../images/assets/background.png')}
            style={styles.backgroundImage}
        >
            <View style={styles.background}>
                <Header icon='back' stateManager={stateManager} setState={setState} goTo={Triggers.CONFIGURATIONS}/>
                <Title title='Frequency'/>
                <View style={styles.switchGroup}>
                    <ToggleSwitch label="Show Frequency" isOn={showFreq} handleToggle={handleShowFreqChange} />
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
      alignItems: 'center',
      width: '100%',
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

  
export { Frequency };