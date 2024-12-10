import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { useMachine } from '@xstate/react';
import { stateMachine, States } from '../StateManager';
import { 
    Main, 
    Menu, 
    About, 
    Version, 
    Configurations,
    Tuner,
    DetectionMenu,
    Frequency,
    Clarity,
    Power
} from './index.js';

const { width, height } = Dimensions.get('window');


const App = () => {

    const [ stateManager, setState ] = useMachine(stateMachine);

    const [ displayFreq, setDisplayFreq ] = useState({
        "Show Frequency": false
    });

    const [ config, setConfig ] = useState({
        "Power": 5.0,
        "Clarity": 0.7
    });

    useEffect(() => {

    }, [stateManager, displayFreq, config]);

    if (stateManager.value == States.MAIN) {
        return (
            <Main stateManager={stateManager} setState={setState}/>
        )
    } else if (stateManager.value == States.MENU) {
        return (
            <Menu stateManager={stateManager} setState={setState}/>
        )
    } else if (stateManager.value == States.ABOUT) {
        return (
            <About stateManager={stateManager} setState={setState}/>
        )
    } else if (stateManager.value == States.VERSION) {
        return (
            <Version stateManager={stateManager} setState={setState}/>
        )
    } else if (stateManager.value == States.CONFIGURATIONS) {
        return (
            <Configurations stateManager={stateManager} setState={setState}/>
        )
    } else if (stateManager.value == States.TUNER) {
        return (
            <Tuner stateManager={stateManager} setState={setState} displayFreq={displayFreq}/>
        )
    } else if(stateManager.value == States.DETECTION) {
        return (
            <DetectionMenu stateManager={stateManager} setState={setState} setConfig={setConfig}/>
        )
    } else if(stateManager.value == States.FREQUENCY) {
        return (
            <Frequency stateManager={stateManager} setState={setState} setConfig={setDisplayFreq}/>
        )
    } else if(stateManager.value == States.POWER) {
        return (
            <Power stateManager={stateManager} setState={setState} setConfig={setConfig}/>
        )
    } else if(stateManager.value == States.CLARITY) {
        return (
            <Clarity stateManager={stateManager} setState={setState} setConfig={setConfig}/>
        )
    }
};
  
export { 
    App,
    width,
    height
};