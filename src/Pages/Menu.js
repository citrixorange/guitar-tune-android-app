import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { Header, Footer } from '../Components';
import { Option } from '../Components/Buttons';
import { Title } from '../Components/Texts';
import { Triggers } from '../StateManager';

const Menu = ({ stateManager, setState }) => {
    return (
        <ImageBackground
            source={require('../../images/assets/background.png')}
            style={styles.backgroundImage}
        >
            <View style={styles.background}>
                <Header icon='close' stateManager={stateManager} setState={setState} goTo={Triggers.MAIN}/>
                <Title title='Menu'/>
                <View style={styles.buttons}>
                    <Option description='Configurations' stateManager={stateManager} setState={setState} trigger={Triggers.CONFIGURATIONS}/>
                    <Option description='About' stateManager={stateManager} setState={setState} trigger={Triggers.ABOUT}/>
                    <Option description='Version' stateManager={stateManager} setState={setState} trigger={Triggers.VERSION}/>
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
    buttons: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginTop: 0,
        marginBottom: 0
    }
});
  
export { Menu };