import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Triggers } from '../../StateManager';
import tune_0 from '../../../images/assets/tune_button/tune_button.png';
import tune_1 from '../../../images/assets/tune_button/tune_button_10.png';
import tune_2 from '../../../images/assets/tune_button/tune_button_20.png';
import tune_3 from '../../../images/assets/tune_button/tune_button_30.png';
import tune_4 from '../../../images/assets/tune_button/tune_button_40.png';
import tune_5 from '../../../images/assets/tune_button/tune_button_50.png';
import tune_6 from '../../../images/assets/tune_button/tune_button_60.png';
import tune_7 from '../../../images/assets/tune_button/tune_button_70.png';
import tune_8 from '../../../images/assets/tune_button/tune_button_80.png';
import tune_9 from '../../../images/assets/tune_button/tune_button_90.png';
import tune_10 from '../../../images/assets/tune_button/tune_button_100.png';

import { height } from '../../Pages/App';

const Tune = ({ stateManager, setState }) => {


    const [counter, setCounter] = useState(0);
    const [timerHover, setTimerHover] = useState(null);
    const [timerUnhover, setTimerUnhover] = useState(null);

    const tunes = [ tune_0, tune_1, tune_2, tune_3, tune_4, tune_5, tune_6, tune_7, tune_8, tune_9, tune_10];
    
    const timerHoverHandler = () => {
        setTimerHover(setInterval(() => {
            setCounter(prevCounter => {
                if (prevCounter < 10) {
                    return prevCounter + 1;
                } else {
                    clearInterval(timerHover);
                    return prevCounter; // Return the same value to stop updating
                }
            });
        }, 30));
    };

    const timerUnhoverHandler = () => {
        setTimerUnhover(setInterval(() => {
            setCounter(prevCounter => {
                if (prevCounter > 0) {
                    return prevCounter - 1;
                } else {
                    clearInterval(timerUnhover);
                    return prevCounter; // Return the same value to stop updating
                }
            });
        }, 30));
    };

    useEffect(() => {

    }, [counter]);

    return (
        <View style={styles.tuneButton}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setState({ type: Triggers.TUNER })}
            onPressIn={() => {
              if (timerUnhover) clearInterval(timerUnhover);
              timerHoverHandler();
            }}
            onPressOut={() => {
              if (timerHover) clearInterval(timerHover);
              timerUnhoverHandler();
            }}
          >
            <Image source={tunes[counter]} style={styles.image}/>
          </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    tuneButton: {
      flex: 1,
      flexDirection: 'row', 
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      marginTop: 0.1*height,
      marginBottom: 0.1*height,
      position: 'relative',
      width: '100%',
    },
    image: {
      width: 0.3*height, // Adjust dimensions as needed
      height: 0.3*height,
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    },
});
  
export { Tune };