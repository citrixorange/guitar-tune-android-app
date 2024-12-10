import React, { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import Button from '../../../images/assets/hamburguer.svg';
import HoveredButton from '../../../images/assets/hovered-hamburguer.svg';

const Hamburguer = ({ stateManager, setState, goTo }) => {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <TouchableWithoutFeedback
            activeOpacity={1}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            onPress={() => setState({ type: goTo })}
        >
            <View>{isPressed? <HoveredButton/> : <Button/>}</View>
        </TouchableWithoutFeedback>
    );
};
  
export { Hamburguer };