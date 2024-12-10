import React, { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import Button from '../../../images/assets/back.svg';
import HoveredButton from '../../../images/assets/hovered-back.svg';


const Back = ({ stateManager, setState, goTo }) => {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <TouchableWithoutFeedback
            activeOpacity={1}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            onPress={() => {
                setIsPressed(true);
                setState({ type: goTo})
            }}
        >
            <View>{isPressed? <HoveredButton/> : <Button/>}</View>
        </TouchableWithoutFeedback>
    );
};

export { Back };