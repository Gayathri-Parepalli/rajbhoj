import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';

const RajBhogGradiant = () => {
  const radius = 50;

  return (
    <View >
      <Svg height="100" width="100" viewBox="-55 -55 110 110">
        <Defs>
          <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="39.24%" stopColor="#DE7A22" />
            <Stop offset="101.17%" stopColor="rgba(217, 217, 217, 0)" />
          </LinearGradient>
        </Defs>
        {/* Draw the circular component with linear gradient */}
        <Circle cx="0" cy="0" r={radius} fill="url(#gradient)" />
      </Svg>
    </View>
  );
};

export default RajBhogGradiant;
