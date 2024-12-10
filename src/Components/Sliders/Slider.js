import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const TestSlider = ({ label, min, max, step, value, onChange }) => {
  return (
    <View style={styles.sliderContainer}>
      <Text style={styles.label}>
        {label}: {value}
      </Text>
      <Slider
        minimumValue={min}
        maximumValue={max}
        step={step}
        value={value}
        onValueChange={onChange}
        style={styles.slider}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Mina',
    fontSize: 18,
    color: '#fff'
  },
  slider: {
    width: '100%',
    height: 8,
    borderRadius: 5,
    backgroundColor: '#FC84CC', // React Native doesn't support linear gradients directly in `background`. Use a library like `react-native-linear-gradient` for this.
    opacity: 0.9,
  },
  sliderActive: {
    opacity: 1,
  },
  thumb: {
    width: 18,
    height: 18,
    borderRadius: 9, // Border radius for a circular thumb
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#64578C',
  },
  thumbActive: {
    backgroundColor: '#FC84CC',
  },
});

export {
  TestSlider
};
