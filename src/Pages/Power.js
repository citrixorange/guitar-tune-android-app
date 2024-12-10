import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { Header, Footer } from '../Components';
import { Title } from '../Components/Texts';
import { KnobSlider } from '../Components/Sliders/KnobSlider';
import { height } from './App';
import { Triggers } from '../StateManager';

const Power = ({ stateManager, setState, setConfig }) => {

    const [power, setPower] = useState(5);

    const setConfigWrap = (value) => {
        setConfig(prevConfig => ({
            ...prevConfig,
            ["Power"]: value
        }))
    }

    const scale = (val) => {
        const s = [-1, 0, 1, 2, 3, 4, 5, 6];
        const step = 100/s.length;
        const idx = Math.round(val/step);
        return idx == 0 ? 0 : s[idx-1];
    }


    return (
        <ImageBackground
            source={require('../../images/assets/background.png')}
            style={styles.backgroundImage}
        >
            <View style={styles.background}>
                <Header icon='back' stateManager={stateManager} setState={setState} goTo={Triggers.DETECTION}/>
                <Title title='Power'/>
                <View style={styles.switchGroup}>
                    <KnobSlider scale={scale} setHandler={setPower} setConfig={setConfigWrap}/>
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

  
export { Power };