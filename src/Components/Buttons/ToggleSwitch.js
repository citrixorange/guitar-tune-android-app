import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const ToggleSwitch = ({ label, isOn, handleToggle }) => {
  return (
    <View style={styles.toggleContainer}>
      <Text style={styles.toggleLabel}>{label}</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#64578C' }}
        thumbColor={isOn ? '#e8a5ff' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={handleToggle}
        value={isOn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleLabel: {
    fontSize: 18,
    fontFamily: 'Arial',
    color: '#fff',
    alignItems: 'center',
    marginRight: 10
  },
});


export {
    ToggleSwitch
};
