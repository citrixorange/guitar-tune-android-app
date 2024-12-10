import React from 'react';
import { View, StyleSheet } from 'react-native';
import { 
    Hamburguer,
    Close,
    Back
} from './Buttons';
import { height } from '../Pages/App';

const Header = ({ icon, stateManager, setState, goTo }) => {
    if (icon == 'hamburguer') {
        return (
            <View style={styles.headerMenu}>
                <Hamburguer stateManager={stateManager} setState={setState} goTo={goTo}/>
            </View>
        );
    } else if (icon == 'back') {
        return (
            <View style={styles.headerMenu}>
                <Back stateManager={stateManager} setState={setState} goTo={goTo}/>
            </View>
        );
    } else {
        return (
            <View style={styles.headerMenu}>
                <Close stateManager={stateManager} setState={setState} goTo={goTo}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    headerMenu: {
        marginTop: 0.016*height,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        paddingRight: 0.016*height,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        width: '100%',
        maxHeight: 0.065*height,
        position: 'relative'
    },
});
  
export { Header };