import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Arc = ({ radius, strokeWidth, startAngle, endAngle, color, value }) => {
  const polarToCartesian = (cx, cy, r, angle) => {
    const radians = (Math.PI / 180) * angle;
    return {
      x: cx + r * Math.cos(radians),
      y: cy + r * Math.sin(radians),
    };
  };

  const describeArc = (cx, cy, r, startAngle, endAngle) => {
    const start = polarToCartesian(cx, cy, r, startAngle);
    const end = polarToCartesian(cx, cy, r, endAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      `M ${start.x} ${start.y}`, // Move to start
      `A ${r} ${r} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`, // Arc command
    ].join(" ");
  };

  // Define the center of the circle
  const cx = radius + strokeWidth;
  const cy = radius + strokeWidth;

  const arcPath = describeArc(cx, cy, radius, startAngle, endAngle);

  return (
    <View style={styles.container}>
      <Svg
        height={radius * 2 + strokeWidth * 2}
        width={radius * 2 + strokeWidth * 2}
      >
        {/* Arc */}
        <Path
          d={arcPath}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap='round'
        />
      </Svg>
      {/* Value Display */}
      <View
        style={[
          styles.valueContainer,
          {
            width: radius * 2,
            height: radius * 2,
            left: strokeWidth,
            top: strokeWidth
          },
        ]}
      >
        <Text style={styles.valueText}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  valueContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueText: {
    fontSize: 24,
    color: '#fff',
  },
});

export {
  Arc
};