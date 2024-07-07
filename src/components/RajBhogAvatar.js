import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { scale } from '../screens/Scaling';
const RajBhogAvatar = ({ source, size }) => {
  return (
    <View style={[styles.avatarContainer, { width: size, height: size }]}>
      <Image source={{ uri: source }} style={styles.avatar} />
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    borderRadius: scale(100), // Make it a circle
    overflow: 'hidden',
  },
  avatar: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default RajBhogAvatar;
