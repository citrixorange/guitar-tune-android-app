import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { height } from '../Pages/App';
import {
  Scale0,
  Scale1,
  Scale2,
  Scale3,
  Scale4,
  Scale5,
  Scale6,
  Scale7,
  Scale8,
  Scale9,
  Scale10,
  Scale11,
  Scale12,
  Scale13,
  Scale14,
  Scale15,
  Scale16,
  Scale17,
  Scale18,
  Scale19,
  Scale20,
  Scale21,
  Scale22,
  Scale23,
  Scale24,
  Scale25,
  Scale26,
  Scale27,
  Scale28,
  Scale29,
  Scale30,
  Scale31,
  Scale32,
  Scale33,
  Scale34,
  Scale35,
  Scale36,
  Scale37,
  Scale38,
  Scale39,
  Scale40,
  Scale41,
  Scale42,
  Scale43,
  Scale44,
  Scale45,
  Scale1p,
  Scale2p,
  Scale3p,
  Scale4p,
  Scale5p,
  Scale6p,
  Scale7p,
  Scale8p,
  Scale9p,
  Scale10p,
  Scale11p,
  Scale12p,
  Scale13p,
  Scale14p,
  Scale15p,
  Scale16p,
  Scale17p,
  Scale18p,
  Scale19p,
  Scale20p,
  Scale21p,
  Scale22p,
  Scale23p,
  Scale24p,
  Scale25p,
  Scale26p,
  Scale27p,
  Scale28p,
  Scale29p,
  Scale30p,
  Scale31p,
  Scale32p,
  Scale33p,
  Scale34p,
  Scale35p,
  Scale36p,
  Scale37p,
  Scale38p,
  Scale39p,
  Scale40p,
  Scale41p,
  Scale42p,
  Scale43p,
  Scale44p,
  Scale45p,
} from './Scales.js';

const Scale = ({ degree }) => {

  const scales = [
    Scale45p, Scale44p, Scale43p, Scale42p, Scale41p,
    Scale40p, Scale39p, Scale38p, Scale37p, Scale36p,
    Scale35p, Scale34p, Scale33p, Scale32p, Scale31p,
    Scale30p, Scale29p, Scale28p, Scale27p, Scale26p,
    Scale25p, Scale24p, Scale23p, Scale22p, Scale21p,
    Scale20p, Scale19p, Scale18p, Scale17p, Scale16p,
    Scale15p, Scale14p, Scale13p, Scale12p, Scale11p,
    Scale10p, Scale9p, Scale8p, Scale7p, Scale6p, Scale5p,
    Scale4p, Scale3p, Scale2p, Scale1p, Scale0, Scale1, 
    Scale2, Scale3, Scale4, Scale5, Scale6, Scale7, Scale8,
    Scale9, Scale10, Scale11, Scale12, Scale13, Scale14, 
    Scale15, Scale16, Scale17, Scale18, Scale19, Scale20, 
    Scale21, Scale22, Scale23, Scale24, Scale25, Scale26, 
    Scale27, Scale28, Scale29, Scale30, Scale31, Scale32, 
    Scale33, Scale34, Scale35, Scale36, Scale37, Scale38, 
    Scale39, Scale40, Scale41, Scale42, Scale43, Scale44, 
    Scale45
  ];

  if(degree) {
    let ScaleImage = scales[45-degree.degree];
    return (
      <TouchableWithoutFeedback
          activeOpacity={1}
      >
          <View style={styles.background}>
            {<ScaleImage width={708} height={488}/>}
          </View>
      </TouchableWithoutFeedback>
    );
  } else {
    let ScaleImage = scales[45];
    return (
      <TouchableWithoutFeedback
          activeOpacity={1}
      >
          <View style={styles.background}>
            {<ScaleImage width={708} height={488}/>}
          </View>
      </TouchableWithoutFeedback>
    );
  }


};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    position: 'relative',
    marginTop: 0.3*height,
    marginBottom: 0*height,
  }
});
  
export { Scale };