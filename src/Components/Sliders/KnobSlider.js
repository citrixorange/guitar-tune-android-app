import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  runOnJS,
} from 'react-native-reanimated';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import { Arc } from './Arc';

const SLIDER_SIZE = 300; // Diameter of the slider
const RADIUS = SLIDER_SIZE / 2;

const KnobSlider = ({scale, setHandler, setConfig}) => {

  const viewRef = useRef(null);
  const previousValue = useRef(0);
  const [knob, setKnob] = useState(50);

  const updateKnob = (newValue) => {
    const prev = previousValue.current;
    previousValue.current = newValue;

    // Avoid excessive updates
    if (Math.abs(newValue - prev) > 2) {
      const updatedKnob = Math.min(100, Math.max(0, knob + (newValue > prev ? 5 : -5)));
      setKnob(updatedKnob);
    }
  };

  const gesture = Gesture.Pan()
    .onUpdate((event) => {
      const dx = event.x-RADIUS;
      const dy = event.y-RADIUS;
      const r = Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2));
      let angle = Math.asin(dx/r)*180/Math.PI;
      
      if(event.x <= RADIUS && event.y >= RADIUS) {
        angle = -180 - angle;
      } else if(event.x >= RADIUS && event.y >= RADIUS) {
        angle = 180 - angle;
      } 
      runOnJS(updateKnob)(angle);
    });

  useEffect(()=> {
    const value = scale(knob);
    setHandler(value);
    setConfig(value);
  },[knob])

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <GestureDetector gesture={gesture}>
          <Animated.View ref={viewRef} style={[styles.slider]}>
            <Arc radius={120} strokeWidth={10} startAngle={90} endAngle={90+359/100*knob} color={"#fff"} value={scale(knob)}/>
          </Animated.View>
        </GestureDetector>
        
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    width: SLIDER_SIZE,
    height: SLIDER_SIZE,
    borderRadius: RADIUS,
    borderColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export {
  KnobSlider
};
